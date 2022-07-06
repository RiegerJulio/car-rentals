import { Request, Response } from "express";
import CreateCarCategoryService from "../CreateCategory/CreateCarCategoryService"

export default class CreateCarCategoryController {

  constructor(private createCategoryService: CreateCarCategoryService) {}

  handle(req: Request, res: Response): Response {

    const { name, description } = req.body;
  
    this.createCategoryService.execute({ name, description });
  
    return res.status(201).json({ message: "Category created with success" });
  }
}