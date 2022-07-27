import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type: 'postgres',
  database: 'data.db',
});

const connection = dataSource.initialize();