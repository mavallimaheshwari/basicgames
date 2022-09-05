var charecter=document.getElementById("charecter");
var block=document.getElementById("block");

function jump(){
    if(charecter.classList!="animate"){
        charecter.classList.add("animate");
    }
    setTimeout(function(){
        charecter.classList.remove("animate");
    },500);
}

var checkdead=setInterval(function(){
    var charTop = parseInt(window.getComputedStyle(charecter).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(blockLeft<122 && blockLeft>20 && charTop>=145){
        block.style.animation="none";
        block.style.display="none";
        alert("You Lost!!!");
    }
},10);