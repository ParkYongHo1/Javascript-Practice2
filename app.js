const color = document.getElementById("color");
const 
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width=800;
canvas.height=800;
ctx.lineWidth = lineWidth.value;
let isPainting = false;
function onMove(enent){
    if(isPainting){
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.moveTo(event.offsetX,event.offsetY);
}
function startPainting(){
    isPainting=true;
}
function cancelPainting(){
    isPainting=false;
    ctx.beginPath();
}
function onColorChange(event){
    ctx.strokeStyle=event.target.value;
    ctx.fillStyle =event.target.value;
}
function onLineWidthChange(event) {
  console.log(event.target.value);
  ctx.lineWidth = event.target.value;
}
canvas.addEventListener("mousemove",onMove);
canvas.addEventListener("mousedown",startPainting);
canvas.addEventListener("mouseup",cancelPainting);
canvas.addEventListener("mouseleave",cancelPainting);
lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change",onColorChange);