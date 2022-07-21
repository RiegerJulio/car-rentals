import { Request, Response } from "express";
import CarCategoryService from "./CarCategoryService"

export default class CarCategoryController {

  constructor(private createCategoryService: CarCategoryService) {}

  handle(req: Request, res: Response): Response {

    const { name, description } = req.body;
  
    this.createCategoryService.execute({ name, description });
  
    return res.status(201).json({ message: "Category created with success" });
  }
}