type TItems = {
  product: string;
  price: number;
};

interface IOrder {
  id: number;
  customerName: string;
  items: TItems[];
  category: string;
}

const orders: IOrder[] = [
  {
    id: 1,
    customerName: "John",
    items: [
      { product: "Laptop", price: 1000 },
      { product: "Mouse", price: 20 },
    ],
    category: "Electronics",
  },
  {
    id: 2,
    customerName: "Jane",
    items: [
      { product: "Phone", price: 800 },
      { product: "Charger", price: 25 },
    ],
    category: "Electronics",
  },
  {
    id: 3,
    customerName: "Tom",
    items: [
      { product: "Shoes", price: 50 },
      { product: "Shirt", price: 30 },
    ],
    category: "Clothing",
  },
  {
    id: 4,
    customerName: "Alice",
    items: [
      { product: "Bag", price: 100 },
      { product: "Sunglasses", price: 50 },
    ],
    category: "Accessories",
  },
  {
    id: 5,
    customerName: "Bob",
    items: [{ product: "Book", price: 20 }],
    category: "Books",
  },
];

function addOrder(
  orders: IOrder[],
  customerName: string,
  items: TItems[],
  category: string
): IOrder[] {
  const newOrder: IOrder = {
    id: orders.length + 1,
    customerName: customerName,
    items: items,
    category: category,
  };
  orders.push(newOrder);
  return orders;
}

function calculateTotalOrderValue(order: IOrder): number {
  return order.items.reduce((total, item) => total + item.price, 0);
}

function filterOrdersByCategory(orders: IOrder[], category: string): IOrder[] {
  return orders.filter((order: IOrder) => order.category === category);
}

function generateReport(orders: IOrder[]): string {
  let report: string = "Orders Report:\n";
  orders.forEach((order: IOrder) => {
    const total: number = calculateTotalOrderValue(order);
    report += `Order ID: ${order.id}, Customer: ${order.customerName}, Total: $${total}\n`;
  });
  return report;
}

// Додаємо нове замовлення
const newItems: TItems[] = [
  { product: "Keyboard", price: 50 },
  { product: "Mouse Pad", price: 10 },
];
addOrder(orders, "Kate", newItems, "Electronics");

// Фільтруємо замовлення за категорією
const electronicsOrders = filterOrdersByCategory(orders, "Electronics");

// Виводимо звіт про всі замовлення
const report = generateReport(orders);
console.log(report);
