import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "docker",
  password: "docker",
  database: "test",
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: [],
})
