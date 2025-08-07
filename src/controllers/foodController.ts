import { Request, Response } from 'express';

export const getFoods = (req: Request, res: Response) => {
    const foods = [
        { id: 1, name: 'Cheeseburger', category: 'Burgers', price: 5.99 },
        { id: 2, name: 'Fries', category: 'Sides', price: 2.49 },
        { id: 3, name: 'Sundae', category: 'Desserts', price: 3.99 },
        { id: 4, name: 'Cola', category: 'Drinks', price: 1.99 }
    ];
    res.json(foods);
};
