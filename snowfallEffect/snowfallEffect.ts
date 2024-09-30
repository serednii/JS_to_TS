// Максимальное количество снежинок
let snowMax: number = 40;
const snowColor: string[] = new Array(
  "#AAAACC",
  "#DDDDFF",
  "#CCCCDD",
  "#F3F3F3",
  "#F0FFFF"
);
const snowType: string[] = new Array(
  "Arial Black",
  "Arial Narrow",
  "Times",
  "Comic Sans MS"
);

const snowLetter: string = "*";
//Скорость
const sinkSpeed: number = 0.5;
//Максимальный размер снежинок
const snowMaxSize: number = 30;
//Минимальный размер снежинок
const snowMinSize: number = 8;

const snow: (HTMLElement | null)[] = new Array();
let marginbottom: number;
let marginright: number;
// var timer;
// var i_snow=0;
const x_mv: number[] = new Array();
const crds: number[] = new Array();
const lftrght: number[] = new Array();
const browserInfos: string = navigator.userAgent; // Додаємо визначення `browserInfos`

const isIE5: boolean =
  /MSIE 5.0/.test(browserInfos) && !/Opera/.test(browserInfos);
const isNetscape6: boolean =
  /Netscape6/.test(browserInfos) ||
  /Mozilla\/.*\(Windows NT\)/.test(browserInfos);
const opera: boolean = !!browserInfos.match(/Opera/);

function randomMaker(range: number): number {
  const rand: number = Math.floor(range * Math.random());
  return rand;
}

function initSnow(): void {
  if (isIE5 || opera) {
    marginbottom = document.body.clientHeight;
    marginright = document.body.clientWidth;
  } else if (isNetscape6) {
    marginbottom = window.innerHeight;
    marginright = window.innerWidth;
  }
  const snowsizerange: number = snowMaxSize - snowMinSize;

  for (let i = 0; i <= snowMax; i++) {
    crds[i] = 0;
    lftrght[i] = Math.random() * 15;
    x_mv[i] = 0.03 + Math.random() / 10;
    const element: HTMLElement | null = document.getElementById("s" + i);
    if (element) {
      snow[i] = element;

      if (snow[i]) {
        // Check if snow[i] is not null
        (snow[i] as HTMLElement).style.fontFamily =
          snowType[randomMaker(snowType.length)];
      }

      (snow[i] as HTMLElement).size = randomMaker(snowsizerange) + snowMinSize;
      (snow[i] as HTMLElement).style.fontSize = snow[i].size;
      snow[i].style.color = snowColor[randomMaker(snowColor.length)];
      snow[i].sink = (sinkSpeed * snow[i].size) / 5;
      snow[i].posx = randomMaker(marginright - snow[i].size);
      snow[i].posy = randomMaker(
        2 * marginbottom - marginbottom - 2 * snow[i].size
      );
      snow[i].style.left = snow[i].posx;
      snow[i].style.top = snow[i].posy;
    }
  }
  moveSnow();
}

function moveSnow(): void {
  for (let i = 0; i <= snowMax; i++) {
    crds[i] += x_mv[i];
    snow[i].posy += snow[i].sink;
    snow[i].style.left = snow[i].posx + lftrght[i] * Math.sin(crds[i]);
    snow[i].style.top = snow[i].posy;
    if (
      snow[i].posy >= marginbottom - 2 * snow[i].size ||
      parseInt(snow[i].style.left) > marginright - 3 * lftrght[i]
    ) {
      snow[i].posx = randomMaker(marginright - snow[i].size);
      snow[i].posy = 0;
    }
  }
  var timer = setTimeout("movesnow()", 50);
}

for (let i = 0; i <= snowMax; i++) {
  document.write(
    "<span id='s" +
      i +
      "' style='position:absolute;top:-" +
      snowMaxSize +
      "'>" +
      snowLetter +
      "</span>"
  );
}
