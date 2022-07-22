import { Request, Response } from "express";
import ListCarCategoryService from "./ListCarCategoriesService";

export default class ListCarCategoriesController {
  constructor(private listCarCategoryService: ListCarCategoryService) {}

  handle = (req: Request, res: Response) => {
    const list = this.listCarCategoryService.execute();

    return res.status(200).json(list);
  }
}