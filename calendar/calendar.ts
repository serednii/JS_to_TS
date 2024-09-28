function monthArr(...month: number[]): number[] {
  return month.slice(0, 12); // Повертає перші 12 значень
}

function myCalendar(): void {
  const monthNames: string[] = [
    "Янв",
    "Фев",
    "Мар",
    "Апр",
    "Май",
    "Июн",
    "Июл",
    "Авг",
    "Сен",
    "Окт",
    "Ноя",
    "Дек",
  ];
  const today: Date = new Date();
  const thisDay: number = today.getDate();
  const monthDays: number[] = monthArr(
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
  );
  let year: number = today.getFullYear();

  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    monthDays[1] = 29; // Рік високосний
  }

  const nDays: number = monthDays[today.getMonth()];
  const firstDay: Date = new Date(today.getFullYear(), today.getMonth(), 1); // Уникнення зміни `today`
  const startDay: number = firstDay.getDay(); // Перший день місяця (0 = неділя)

  // Генерація HTML-календаря
  document.writeln("<div align='center'>");
  document.write("<table border='1'>");
  document.write("<tr><th colspan='7'>");
  document.write(monthNames[today.getMonth()]); // Виведення назви місяця
  document.write(". ");
  document.write(String(year));
  document.write("</th></tr>");
  document.write(
    "<tr><th>Вск</th><th>Пон</th><th>Вт</th><th>Ср</th><th>Чт</th><th>Пт</th><th>Сб</th></tr>"
  );
  document.write("<tr>");

  let column: number = 0;

  // Заповнюємо порожні клітинки перед початком місяця
  for (let i = 0; i < startDay; i++) {
    document.write("<td width='30'></td>");
    column++;
  }

  // Заповнюємо календар днями місяця
  for (let i = 1; i <= nDays; i++) {
    document.write("<td width='30'>");

    // Виділення поточного дня червоним
    if (i === thisDay) {
      document.write("<span style='color: red;'>");
    }

    document.write(String(i));

    if (i === thisDay) {
      document.write("</span>");
    }

    document.write("</td>");
    column++;

    // Переносимо рядок після суботи
    if (column === 7) {
      document.write("</tr><tr>");
      column = 0;
    }
  }

  // Закриття таблиці та контейнера
  document.write("</tr>");
  document.write("</table>");
  document.writeln("</div>");
}
