import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5433,
        username: 'docker',
        password: 'meufretecom',
        database: 'meufretecom',
        migrations: ['./src/database/migrations/*.ts'],
       
      });

      return dataSource.initialize();
    },
  },
];
