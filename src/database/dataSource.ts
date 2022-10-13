import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'omodei',
  database: 'meufretecom',
  migrations: ['./src/database/migrations/*.ts'],
  entities: ["./src/modules/loads/entities/Load.ts"]
});

export default AppDataSource;
