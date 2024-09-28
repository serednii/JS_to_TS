const startdate: Date = new Date();
const clockStart: number = startdate.getTime();

function initStopWatch(): number {
  const thisTime: Date = new Date();
  return (thisTime.getTime() - clockStart) / 1000;
}

function timeSpentOnPage(): void {
  const tSecs: number = Math.round(initStopWatch());
  const iSecs: number = tSecs % 60;
  const iMins: number = Math.round((tSecs - 30) / 60);
  const sSecs: string = "" + (iSecs > 9 ? iSecs : "0" + iSecs);
  const sMins: string = "" + (iMins > 9 ? iMins : "0" + iMins);
  const element: HTMLElement | null = document.getElementById("timer-counter");
  element && (element.innerText = sMins + ":" + sSecs);
  setTimeout("getSecs()", 1000);
}
