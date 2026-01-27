window.onscroll = function myFunction() {  
    //alert("scroll!")
    var scrolltotop = document.scrollingElement.scrollTop;
    var targets = document.getElementsByClassName("parallax");
    for (const target of targets){
        var xvalue = "center";
        var factor = parseFloat(target.getAttribute("-scroll-speed"))
        var yvalue = scrolltotop * factor;
        target.style.backgroundPosition = xvalue + " " + yvalue + "px";
        
    }

    
}