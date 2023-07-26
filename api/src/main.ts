import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { API_PREFIX } from './common/constants'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const PORT = process.env.PORT

  app.setGlobalPrefix(API_PREFIX) // localhost:PORT/api....

  // eslint-disable-next-line prettier/prettier
  await app.listen(PORT, () => console.log(`Started at port ${PORT}`))
}
bootstrap()
