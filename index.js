var noOfDrums=document.querySelectorAll(".drum").length;
for(var i=0;i<noOfDrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       var buttonInnerHtml=this.innerHTML;
      playsound(buttonInnerHtml);
      ButtonAnimation(buttonInnerHtml);
      
    });
document.addEventListener("keypress",function(event){
    playsound(event.key);
    ButtonAnimation(event.key);
})
    function playsound(key){
        switch(key){
            case "w":
                var audiofile=new Audio("sounds/tom-1.mp3");
                audiofile.play();
                break;
            case "a":
                var audiofile=new Audio("sounds/tom-2.mp3");
                audiofile.play();
                break;
            case "s":
                    var audiofile=new Audio("sounds/tom-3.mp3");
                    audiofile.play();
                    break;
            case "d":
                    var audiofile=new Audio("sounds/tom-4.mp3");
                    audiofile.play();
                    break;
             case "j":
                     var audiofile=new Audio("sounds/snare.mp3");
                     audiofile.play();
                     break;
            case "k":
                    var audiofile=new Audio("sounds/crash.mp3");
                    audiofile.play();
                    break;
            case "l":
                     var audiofile=new Audio("sounds/kick-bass.mp3");
                    audiofile.play();
                    break;
            default:
                    console.log(buttonInnetHtml);
           }
    }

    function ButtonAnimation(currentkey){
        var activeButton=document.querySelector("."+currentkey);
        activeButton.classList.add("pressed");
        setTimeout(function(){
            activeButton.classList.remove("pressed");
        },100);
    }

}


