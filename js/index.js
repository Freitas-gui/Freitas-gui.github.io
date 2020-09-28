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