import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, Subject } from 'rxjs';
import * as os from 'os';
import * as FormData from 'express-form-data';

export const FORM_DATA_MIME_TYPE = 'multipart/form-data';

@Injectable()
export class FormDataInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const options = {
      uploadDir: os.tmpdir(),
      autoClean: true,
    };

    const http = context.switchToHttp();

    const subject = new Subject();
    FormData.parse(options)(http.getRequest(), http.getResponse(), () => {
      next.handle().subscribe(subject);
    });

    return subject;
  }
}
