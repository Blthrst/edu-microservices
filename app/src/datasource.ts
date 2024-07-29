import { DataSource, DataSourceOptions } from 'typeorm';

import options from './options';

const datasource = new DataSource(options as DataSourceOptions);

export default datasource;
