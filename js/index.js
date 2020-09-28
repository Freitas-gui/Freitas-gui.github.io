/*start Responsive*/

function reloadPage() {
    /* When window is smaller than 990, then DOM vanhish, else then, show DOM.  */
    jQuery(document).ready(function () {
        if ($(window).width() <= 990) {
            $(".hide-show").hide();
        } else {
            $(".hide-show").show();
        }
    });
    jQuery(document).ready(function () {
        /* When window is smaller than 990, and .container isn't parent of #carouselExampleControls-media then the parent destroyed.
        *   else then, # carouselExampleControls-media will be involved for carouselExampleControls.
        * */
        if ($(window).width() <= 990) {
            if(!($("#carouselExampleControls-media").parent().is($(".container"))))
                $("#carouselExampleControls-media").unwrap();
        }
        else if ($("#carouselExampleControls-media").parent().is($(".container"))){
            $("#carouselExampleControls-media").wrap("<div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\"></div>");
        }
    });
}

/* Called reloadPage() every 200 mls if during this, window change size. */
var run_responsive;
window.onresize = function(){
  clearTimeout(run_responsive);
  run_responsive = setTimeout(reloadPage, 200);
};

/*Caled reloadPage() when update page*/
jQuery(document).ready(reloadPage() );

/*end Responsive*/







/*start menu nav scroll*/
/*
var lastScrollTop = 0;

window.addEventListener('scroll', function (e) {
    if ($(window).width() <= 450) {
        var jElement = $('.main-menu');
        // mesma posição
        if (e.scrollY === lastScrollTop) return;

        if (this.scrollY < lastScrollTop) {
            jElement.css({
                'position': 'fixed',
                'top': '0px'
            });
        } else {
            jElement.css({
                'position': 'relative',
                'top': 'auto'
            });
        }


        lastScrollTop = this.scrollY;
    }

  }, true)


var body = document.getElementsByTagName("body")[0];

if (body.addEventListener) {
    // IE9, Chrome, Safari, Opera
    body.addEventListener("mousewheel", detectarDirecaoRolagem, false);
    // Firefox
    body.addEventListener("DOMMouseScroll", detectarDirecaoRolagem, false);
}

function detectarDirecaoRolagem( e )
{
    var jElement = $('.main-menu');
    var delta = null,
        direction = false
    ;
    if ( !e ) {
        e = window.event;
    }
    if ( e.wheelDelta ) { // funciona na maioria dos casos
        delta = e.wheelDelta / 60;
    } else if ( e.detail ) { // funciona no Firefox
        delta = -e.detail / 2;
    }
    if ( delta !== null ) {
        direction = delta > 0 ? 'cima' : 'baixo';
    }

    console.log(direction);

    return direction;
}
*/
/*end menu nav scroll*/



