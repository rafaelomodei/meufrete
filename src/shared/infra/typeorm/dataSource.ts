import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'omodei',
  database: 'meufretecom',
  migrations: ['./src/shared/infra/typeorm/migrations/*.ts'],
  entities: [
    './src/modules/loads/infra/typeorm/entities/Load.ts',
    './src/modules/companies/infra/typeorm/entities/Company.ts',
    './src/modules/accounts/infra/typeorm/entities/User.ts',
    './src/modules/route/infra/typeorm/entities/Route.ts',
  ],
});

export default AppDataSource;
