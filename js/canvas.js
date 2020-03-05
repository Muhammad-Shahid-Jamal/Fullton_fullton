window.addEventListener("load",eventWindowLoaded,false);
function eventWindowLoaded(){
    canvasApp();
}
function canvasApp(){
    drawScreen();
    function drawScreen(){
        let canvas_container = document.getElementById("canvas_container");
        let canvas = canvas_container.children[0];
        //test the canvas browser suppot
        if(!canvasSupport()){
            return;
        }
        let width = canvas_container.offsetWidth;
        let height = canvas_container.offsetHeight;
        canvas.width = width;
        canvas.height = height;
        //get 2dcontext
        let context = canvas.getContext("2d");

        //create rectangle
        context.fillStyle = "#ffffaa";
        context.fillRect(0, 0, width, height);
        //hello world to the canvas
        context.fillStyle = "#000000";
        context.font = "20px sans-serif";
        context.textBaseLine = "top";
        context.fillText("Hello World!",width/2,height/2);
        let helloWorldImage = new Image();
        helloWorldImage.onload = function(){
            context.drawImage(helloWorldImage,0,0,300,300);
        }
        helloWorldImage.src = "../images/temp.gif";
    }
    function canvasSupport(){
        return Modernizr.canvas;
    }
}