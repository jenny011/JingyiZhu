let mouse = false;
let x1,x2,y1,y2;
let o=1;
let next = document.getElementById("next");
next.addEventListener("click",function(){mouse=true;});
let time = 0;
let jump = false;

function setup(){
  var cnv = createCanvas(window.innerWidth,window.innerHeight);
  cnv.parent("canvas-holder");
  background(220);
  x1 = width/2-340;
  y1 = height/2-220;
}
function draw(){
  background(220);
  push();
  translate(width/2,height/2);
  if(mouse){
    rotate(radians(frameCount*1.2));
    time ++;
    x1 +=2;
    y1 +=4;
    o -= 0.008;
  }
  header.style.opacity = o.toString();
  stroke(2);
  line(-width,-y1,width,-y1);
  line(-width,y1,width,y1);
  line(-x1,-height,-x1,height);
  line(x1,-height,x1,height);
  pop();

  if(time>100){
    jump = true;
  }
  if(jump){
    go();
    jump=false;
    noLoop();
  }
}
function go(){
  window.setTimeout('window.location.assign("works/index.html")',10);
}
