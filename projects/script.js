var novel = document.getElementById("novel");
var comic = document.getElementById("comic");
var flyby = document.getElementById("flyby");
var gravity = document.getElementById("gravity");
// var agent = document.getElementById("agent");
var flow = document.getElementById("flow");
var shark = document.getElementById("shark");
var novelText = document.getElementById("novelText");
var comicText = document.getElementById("comicText");
var flybyText = document.getElementById("flybyText");
var gravityText = document.getElementById("gravityText");
// var agentText = document.getElementById("agentText");
var flowText = document.getElementById("flowText");
var sharkText = document.getElementById("sharkText");

novel.addEventListener("mouseover",function(){show(novelText)});
comic.addEventListener("mouseover",function(){show(comicText)});
flyby.addEventListener("mouseover",function(){show(flybyText)});
gravity.addEventListener("mouseover",function(){show(gravityText)});
// agent.addEventListener("mouseover",function(){show(agentText)});
flow.addEventListener("mouseover",function(){show(flowText)});
shark.addEventListener("mouseover",function(){show(sharkText)});
novelText.addEventListener("mouseout",function(){hide(this)});
comicText.addEventListener("mouseout",function(){hide(this)});
flybyText.addEventListener("mouseout",function(){hide(this)});
gravityText.addEventListener("mouseout",function(){hide(this)});
// agentText.addEventListener("mouseout",function(){hide(this)});
flowText.addEventListener("mouseout",function(){hide(this)});
sharkText.addEventListener("mouseout",function(){hide(this)});

function show(e){
  e.style.visibility = "visible";
}

function hide(e){
  e.style.visibility = "hidden";
}
