import { IObsService } from './obs.interface';
import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import { ConfigService } from '@nestjs/config';
import { Oops } from '../../common/friendly-except/oops';
import { paramNotFound } from './constant/message';

@Injectable()
export class ObsService implements IObsService {
  private readonly client: S3;
  private readonly bucketName: string;

  constructor(private readonly configService: ConfigService) {
    const clientConfiguration = this.getClientConfiguration();
    this.client = new S3(clientConfiguration);
    this.bucketName = configService.get('CLOUD_BUCKET') || 'ioea-default-bucket';
  }

  private getClientConfiguration(): S3.Types.ClientConfiguration {
    const endpoint = this.configService.get('CLOUD_ENDPOINT');
    if (!endpoint) {
      throw Oops.oh(paramNotFound, 'endpoint', 'CLOUD_ENDPOINT');
    }

    const accessKeyId = this.configService.get('CLOUD_ACCESS_KEY');
    if (!accessKeyId) {
      throw Oops.oh(paramNotFound, 'accessKeyId', 'CLOUD_ACCESS_KEY');
    }

    const secretAccessKey = this.configService.get('CLOUD_SECRET_ACCESS_KEY');
    if (!secretAccessKey) {
      throw Oops.oh(paramNotFound, 'secretAccessKey', 'CLOUD_SECRET_ACCESS_KEY');
    }

    return {
      endpoint: endpoint,
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey,
      s3ForcePathStyle: true,
    };
  }

  async get(key: string): Promise<Buffer> {
    // TODO: 需要处理请求的资源不存在的情况
    const result = await this.client
      .getObject({ Bucket: this.bucketName, Key: key })
      .promise();
    return result.Body as Buffer;
  }

  async put(
    key: string,
    buf: Buffer,
    contentType?: string | undefined,
  ): Promise<void> {
    await this.client
      .putObject({
        Bucket: this.bucketName,
        Key: key,
        Body: buf,
        ContentType: contentType ?? 'application/octet-stream',
      })
      .promise();
  }

  async remove(key: string): Promise<void> {
    await this.client
      .deleteObject({ Bucket: this.bucketName, Key: key })
      .promise();
  }
}
