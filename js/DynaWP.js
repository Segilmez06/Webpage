function initDynaWP(){
    window.addEventListener('DOMContentLoaded', (event) => {
        var wpelement = document.getElementById("wallpaper");
    
        if(wpelement != null){
            var reactscale = wpelement.getAttribute('reactscale');
            var effectscale = wpelement.getAttribute('effectscale');
            var effectimg = wpelement.getAttribute('effectimg');
        
            wpelement.style.width = "100%";
            wpelement.style.height = "100%";
            wpelement.style.position = "absolute";
            wpelement.style.top = 0;
            wpelement.style.left = 0;
            wpelement.style.zIndex = -1;
            wpelement.style.transition = "all " + effectscale + "s linear";
        
            wpelement.style.backgroundSize = "cover";
            // // wpelement.style.backgroundSize = 100 + 2*reactscale + "%";
            wpelement.style.backgroundRepeat = "no-repeat";
            wpelement.style.backgroundImage = "url('" + effectimg + "')";
    
        
            var w = window.innerWidth;
            var h = window.innerHeight;
        
            let isTouchDevice = ('ontouchstart' in document.documentElement) || ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);
            if(!isTouchDevice){
                wpelement.style.transform = "scale(" + reactscale + ")";
    
                setTimeout({}, 500);
                document.addEventListener('mousemove', function(e){
                    var x = e.screenX;
                    var y = e.screenY;
            
                    var posX = w/2 - x;
                    var posY = h/2 - y;
            
                    var scrollX = (((reactscale * posX) / (w / 2)) - reactscale) + "vw";
                    var scrollY = (((reactscale * posY) / (h / 2)) - reactscale) + "vh";
            
                    wpelement.style.backgroundPositionX = scrollX;
                    wpelement.style.backgroundPositionY = scrollY;
                });
            }
        }    
    });
}
