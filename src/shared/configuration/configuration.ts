export default () => ({
  database: {
    type: process.env.DATABASE_TYPE,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    name: process.env.DATABASE_NAME,
    synchronize: process.env.DATABASE_SYNCHRONIZE === 'true',
    entityPrefix: process.env.DATABASE_ENTITY_PREFIX,
  },
  minio: {
    endPoint: process.env.MINIO_END_POINT,
    port: parseInt(process.env.MINIO_PORT),
    rootUser: process.env.MINIO_ROOT_USER,
    rootPassword: process.env.MINIO_ROOT_PASSWORD,
    useSSL: process.env.MINIO_USE_SSL === 'true',
  },
});
