import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './common/open-api/setup';

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

  setupSwagger(app);

  await app.listen(3000);
  logger.log('Now listening on: http://localhost:3000.');
}
bootstrap();
