import { Request, Response } from "express";
import { foodData } from "../data/seedData";

export const getAllFoods = (req: Request, res: Response) => {
  res.json(foodData);
};

export const getFoodById = (req: Request, res: Response) => {
  const food = foodData.find((f) => f.id === req.params.id);
  if (food) {
    res.json(food);
  } else {
    res.status(404).json({ message: "Food not found" });
  }
};
