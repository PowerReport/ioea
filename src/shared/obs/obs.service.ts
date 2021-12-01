import { IObsService } from './obs.interface';
import { Injectable, Logger } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ObsService implements IObsService {
  private readonly logger = new Logger(ObsService.name);

  private readonly client: S3;
  private readonly bucketName: string;

  constructor(private readonly configService: ConfigService) {
    this.client = new S3({
      endpoint: configService.get('CLOUD_ENDPOINT'),
      accessKeyId: configService.get('CLOUD_ACCESS_KEY'),
      secretAccessKey: configService.get('CLOUD_SECRET_ACCESS_KEY'),
      s3ForcePathStyle: true,
    });
    this.bucketName = configService.get('CLOUD_BUCKET');
  }

  async get(key: string): Promise<Buffer> {
    // TODO: 需要处理请求的资源不存在的情况
    const result = await this.client
      .getObject({
        Bucket: this.bucketName,
        Key: key,
      })
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
      .deleteObject({
        Bucket: this.bucketName,
        Key: key,
      })
      .promise();
  }
}
