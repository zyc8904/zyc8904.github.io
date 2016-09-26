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

//console.log信息
console.group("Pwnny.bar");
console.log("%c如果你觉得我的网站对你有帮助，请把它推荐给更多的人吧","font-size:18px;font-family:Microsoft YaHei;color:#6FBCBD;");
console.log("%cIf you think of my site to help you, please recommend it to more people","font-size:18px;font-family:Microsoft YaHei;color:#6FBCBD;");




