//loading bar
$({property: 0}).animate({property: 100},{
    duration: 1750,
    step: function(){
        var percentage = Math.round(this.property);
        $("#progress").css("width", percentage+"%");
        if(percentage == 100){
            $("#progress").addClass("done");
        }
    }
});	

//backTop
// var backTopElement = document.querySelector("#backTop");
// var backTopPseudoElement = document.defaultView.getComputedStyle(backTopElement,":before");
// var windowPosition = document.body.scrollTop;
// window.onscroll = function() {
//     if (windowPosition > window.innerHeight) {
//         backTopElement.style.display = 'block';
//         // backTopPseudoElement.display = 'block';
//     } else {
//         backTopElement.style.display = 'none';
//     }
// }

// backTopElement.onclick = function(event) {
//     document.body.scrollTop = 0;
// }
// var timer = window.setInterval(function(){
//       document.body.scrollTop-=100;
//    if(document.body.scrollTop<=0){
//        document.body.scrollTop=0;
//         window.clearInterval(timer);
//       }},5);




