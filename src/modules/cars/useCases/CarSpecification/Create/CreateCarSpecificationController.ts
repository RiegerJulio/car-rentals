import { Request, Response } from 'express';
import CreateCarSpecificationService from './CreateCarSpecificationService';

export default class CreateCarSpecificationController {
  constructor(private createCarSpecificationService: CreateCarSpecificationService) {}

  handle(req: Request, res: Response): Response {
    const { name, description } = req.body;

    this.createCarSpecificationService.execute({ name, description });
    
    return res.status(201).json({ message: 'Car specification created with success' });
  }
}