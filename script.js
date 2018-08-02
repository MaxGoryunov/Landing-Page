$(document).on("scroll",function(){
    if($(document).scrollTop()>100){
        $("header").removeClass("large").addClass("small");
    } else{
        $("header").removeClass("small").addClass("large");
    }
});

var tab;
var tabContent;
window.onload = function () {
    tabContent = document.getElementsByClassName("tabContent");
    tab = document.getElementsByClassName("tab");
    hideTabsContent(1);
}
function hideTabsContent(a) {
    for (var i = a; i < tabContent.length; i++){
        tabContent[i].classList.remove("show");
        tabContent[i].classList.add("hide");
    }
}
document.getElementById("tabs").onclick = function (event) {
    var target = event.target;
    if (target.className == "tab") {
        for (var i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                showTabsContent(i);
                break;
            }
        }
    }
}
function showTabsContent(b) {
    if (tabContent[b].classList.contains("hide")) {
        hideTabsContent(0);
        tabContent[b].classList.remove("hide");
        tabContent[b].classList.add("show");
    }
}



$(document).ready(function () {
    $("#menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
        top = $(id).offset().top;
        $('body, html').animate({scrollTop: top}, 1500);
    });
});





