import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger(bootstrap.name);

  logger.log(`
                       _oo0oo_
                      o8888888o
                      88" . "88
                      (| -_- |)
                      0\\  =  /0
                    ___/\`---'\\___
                  .' \\\\|     |// '.
                 / \\\\|||  :  |||// \\
                / _||||| -:- |||||- \\
               |   | \\\\\\  - /// |   |
               | \\_|  ''\\---/''  |_/ |
               \\  .-\\__  '-'  ___/-. /
             ___'. .'  /--.--\\  \`. .'___
          ."" '<  \`.___\\_<|>_/___.' >' "".
         | | :  \`- \`.;\`\\ _ /\`;.\`/ - \` : | |
         \\  \\ \`_.   \\_ __\\ /__ _/   .-\` /  /
     =====\`-.____\`.___ \_____/___.-\`___.-'=====
                       \`=---='


     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

         佛祖保佑       永不宕机     永无BUG
`);

  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('ioea')
    .setDescription(
      'The goal of this project is to make the easiest, fastest, and most painless file system.',
    )
    .setVersion('v1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  logger.log('Now listening on: http://localhost:3000.');
}
bootstrap();
