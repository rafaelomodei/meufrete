import swaggerAutogen from 'swagger-autogen';
import swaggerFile from './swagger.json';
import { router } from './shared/infra/http/routes/index';

swaggerAutogen(router, swaggerFile);
