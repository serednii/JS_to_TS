type TTasks = {
  id: number;
  title: string;
  completed: boolean;
};

// Тип для завдання
const tasks: TTasks[] = [
  { id: 1, title: "Сходити в магазин", completed: false },
  { id: 2, title: "Зробити домашнє завдання", completed: true },
  { id: 3, title: "Приготувати вечерю", completed: false },
];

// Функція для додавання завдання
function addTask(tasks: TTasks[], title: string): void {
  const newTask: TTasks = { id: tasks.length + 1, title, completed: false };
  tasks.push(newTask);
  console.log(`Завдання "${title}" додано до списку.`);
}

// Функція для видалення завдання за ID
function removeTask(tasks: TTasks[], taskId: number): void {
  const index: number = tasks.findIndex((task) => task.id === taskId);
  if (index !== -1) {
    tasks.splice(index, 1);
    console.log(`Завдання з ID ${taskId} видалено зі списку.`);
  } else {
    console.log(`Завдання з ID ${taskId} не знайдено.`);
  }
}

// Функція для зміни статусу завершення завдання
function toggleTaskCompletion(tasks: TTasks[], taskId: number): void {
  const task: TTasks | undefined = tasks.find((task) => task.id === taskId);
  if (task) {
    task.completed = !task.completed;
    console.log(
      `Статус завдання "${task.title}" змінено на ${
        task.completed ? "завершено" : "незавершено"
      }.`
    );
  } else {
    console.log(`Завдання з ID ${taskId} не знайдено.`);
  }
}

// Функція для виведення всіх завдань
function listTasks(tasks: TTasks[]) {
  console.log("Список завдань:");
  tasks.forEach((task: TTasks) => {
    console.log(
      `${task.id}: ${task.title} - ${
        task.completed ? "Завершено" : "Незавершено"
      }`
    );
  });
}

// Використання функцій
addTask(tasks, "Піти на пробіжку");
toggleTaskCompletion(tasks, 1);
removeTask(tasks, 2);
listTasks(tasks);
