var wrapper = document.getElementById("content-slider-wrapper");



function slide(num){
        var w = document.getElementById("content-wrapper").offsetWidth;

        var positions = ["0", w*(-1)+"px", w*(-2)+"px"];
        var translate = "translate3d("+ positions[num] +", 0px, 0px)";
        wrapper.style.transform = translate;
}
