var canvas = document.getElementById("gameCanvas")
var ctx = canvas.getContext("2d")

var main = function(){
  window.requestAnimationFrame(main);
  ctx.clearRect(0,0,canvas.width,canvas.height)
}

function startGame(){
main()
}

startGame()