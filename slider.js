var wrapper = document.getElementById("content-slider-wrapper");
var cur = 0;

function slide(num){
    if(typeof(num)=="number"){    
        var w = document.getElementById("content-wrapper").offsetWidth;
        var positions = ["0", w*(-1)+"px", w*(-2)+"px"];
        var translate = "translate3d("+ positions[num] +", 0px, 0px)";

        wrapper.style.transform = translate;
        cur = num;
    }
    else{
        var w = document.getElementById("content-wrapper").offsetWidth;
        var positions = ["0", w*(-1)+"px", w*(-2)+"px"];
        if(num == "l"){
            if(cur == 0){
                return;
            }
            var translate = "translate3d("+ positions[cur-1] +", 0px, 0px)";
            cur = cur - 1;
        }
        else if(num == "r"){
            if(cur >= 2){
                return;
            }
            var translate = "translate3d("+ positions[cur+1] +", 0px, 0px)";
            cur = cur + 1;
        }
        wrapper.style.transform = translate;
    }
}
