interface Food {
    name: string;
    price: number;
    category: string;
}

const categories = {
    hamburguesas: ['Big King', 'Whopper', 'Cheeseburger'],
    papas: ['Papas fritas clásicas', 'Papas cheddar bacon'],
    postres: ['Sundae chocolate', 'Torta helada'],
    bebidas: ['Coca-Cola 500ml', 'Sprite 500ml'],
};

export const generateRandomFoods = (): Food[] => {
    const result: Food[] = [];

    Object.entries(categories).forEach(([category, items]) => {
        items.forEach(item => {
            result.push({
                name: item,
                price: parseFloat((Math.random() * 5 + 2).toFixed(2)),
                category,
            });
        });
    });

    return result;
};
