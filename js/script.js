function skillSetUp() {
    var progressBars = $(".skill-progress");
    progressBars.each(function(){
        var percentage = $(this).closest(".skill-level").children(".skill").children(".skill-percentage").text();
        $(this).css({
            width: percentage
        })
    })
}
function scrollToSection(item){
    var target = "";
    var section = "";
    if(item.hasClass("nav-item")){
        section = item.children(".nav-text").text();
        switch(section){
            case "Services":
                target = "#features";
                break;
            case "About":
                target = "#about";
                break;
            case "Team":
                target = "#our-team";
                break;
            case "Portfolio":
                target = "#portfolio";
                break;
            case "Contact":
                target = "#contact";
                break;
            case "Blog":
                target = "#statistics";
                break;  
        }
    } else if (item.hasClass("scroller")){
        target = "#features";
    } else if (item.hasClass("inline-nav")) {
        section = item.text();
        switch(section){
            case "Home":
                target = "#jumbotron";
                break;
            case "Services":
                target = "#features";
                break;
            case "About":
                console.log(section);
                target = "#about";
                break;
            case "Team":
                target = "#our-team";
                break;
            case "Portfolio":
                target = "#portfolio";
                break;
            case "Contact":
                target = "#contact";
                break;
            case "Blog":
                target = "#statistics";
                break;  
        }
    }
    $("html, body").animate({
        scrollTop: $(target).offset().top
    }, 2000);
}
function teamSliderInit(){
    var $team = $(".team-member");
    var width = $team.width();
    if(window.matchMedia("(max-width: 1000px)").matches){
        for(var i = 0; i < $team.length; i++){
            $team.eq(i).css("left", i * width - width );
        }
    } else {
        for(var i = 0; i < $team.length; i++){
            $team.eq(i).css("left", i * width);
        }
    }
}
function next(){
    var $team = $(".team-member");
    var width = $team.width();
    var $lightedMember = $(".highlighted");
    if(!$lightedMember.is(":last-child")){
        for(var i = 0; i < $team.length; i++){
            $team.eq(i).animate({
                left: parseInt($team.eq(i).css("left").split("px")[0]) - width + "px"
            }, 1000, function(){
                $lightedMember.next().addClass("highlighted");
                $lightedMember.removeClass("highlighted");
                if($lightedMember.next().is(":last-child")){
                    $(".arrow-right").addClass("disabled");    
                } else {
                    $(".arrow-right").removeClass("disabled");
                    $(".arrow-left").removeClass("disabled");
                }
            })
        }
    }
}
function prev(){
    var $team = $(".team-member");
    var width = $team.width();
    var $lightedMember = $(".highlighted");
    if(!$lightedMember.is(":first-child")){
        $(".arrow-left").removeClass("disabled");
        for(var i = 0; i < $team.length; i++){
            $team.eq(i).animate({
                left: parseInt($team.eq(i).css("left").split("px")[0]) + width + "px"
            }, 1000, function(){
                $lightedMember.prev().addClass("highlighted");
                $lightedMember.removeClass("highlighted");
                if($lightedMember.prev().is(":first-child")){
                    $(".arrow-left").addClass("disabled");    
                } else {
                    $(".arrow-right").removeClass("disabled");
                    $(".arrow-left").removeClass("disabled");
                }
            })
        }
    } else {
        $(".arrow-left").addClass("disabled");
    }
}


// Execute when ready
$(function(){
    skillSetUp();
    $(".nav-item").click(function(){
        scrollToSection($(this));
    })
    $(".scroller").click(function(){
        scrollToSection($(this))
    })
    $(".inline-nav").click(function(){
        scrollToSection($(this))
    })
    $(".hamburger").click(function(){
        if(window.matchMedia("(max-width: 1000px)").matches){
            $(this).children("ul").toggleClass("visible");
        }
    })
    $(window).scroll(function(){
        if($(window).scrollTop() > $("#jumbotron").outerHeight() + 50){
            $("#inline-navigation").addClass("fixed-position");
            $("#jumbotron").addClass("fantom-space");
        } else {
            $("#inline-navigation").removeClass("fixed-position");
            $("#jumbotron").removeClass("fantom-space");
        }
    })
    $(".category").click(function(){
        if(!$(this).hasClass("checked")){
            $(".category.checked").removeClass("checked");
            $(this).addClass("checked");
        }
    })
    teamSliderInit();
})