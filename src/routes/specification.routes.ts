import { Router, Request, Response } from 'express';
import { createSpecificationController } from '../modules/loads/useCases/createSpecification';

const specificationRoutes = Router();

specificationRoutes.post('/', (request: Request, response: Response) => {
    return createSpecificationController.handle(request, response);
});

// specificationRoutes.get('/', (request: Request, response: Response) => {
//   const allCategories = specificationRepository.list();

//   return response.json(allCategories);
// });

export { specificationRoutes };
