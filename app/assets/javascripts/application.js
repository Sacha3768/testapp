// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .


$( document ).ready(function() {
    $(".circle-pag button").click(function () {
        var nowindex = $(".circle-pag button.active").index() + 1;
        var newindex = $(this).index() + 1;
        var nowtext = $("div.left-text div.text div:nth-child(" + nowindex + ")");
        var newtext = $("div.left-text div.text div:nth-child(" + newindex + ")");
        if(nowtext.find("h2").is(":animated") || newtext.find("h2").is(":animated")){
            console.log("ANIMATION");
        }
        else if(nowindex != newindex) {
            $(this).parent().find("button").removeClass("active");
            $(this).addClass("active");
            nowtext.find("h2").animate({
                opacity: 0,
                left: "-=250"
            }, 1000);
            nowtext.find("p").animate({
                opacity: 0,
                left: "+=250"
            }, 1000, function() {
                nowtext.hide();
                newtext.show();
                newtext.find("h2").animate({
                    opacity: 1,
                    left: "+=250"
                }, 1000);
                newtext.find("p").animate({
                    opacity: 1,
                    left: "-=250"
                }, 1000);
            });
        }
    })
});