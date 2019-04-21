var novel = document.getElementById("novel");
var comic = document.getElementById("comic");
var flyby = document.getElementById("flyby");
var gravity = document.getElementById("gravity");
var novelText = document.getElementById("novelText");
var comicText = document.getElementById("comicText");
var flybyText = document.getElementById("flybyText");
var gravityText = document.getElementById("gravityText");

novel.addEventListener("mouseover",function(){show(novelText)});
comic.addEventListener("mouseover",function(){show(comicText)});
flyby.addEventListener("mouseover",function(){show(flybyText)});
gravity.addEventListener("mouseover",function(){show(gravityText)});
novelText.addEventListener("mouseout",function(){hide(this)});
comicText.addEventListener("mouseout",function(){hide(this)});
flybyText.addEventListener("mouseout",function(){hide(this)});
gravityText.addEventListener("mouseout",function(){hide(this)});

function show(e){
  console.log(true);
  e.style.visibility = "visible";
}

function hide(e){
  console.log(false);
  e.style.visibility = "hidden";
}
