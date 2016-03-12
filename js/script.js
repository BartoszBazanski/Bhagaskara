function skillSetUp() {
    var progressBars = $(".skill-progress");
    progressBars.each(function(){
        var percentage = $(this).closest(".skill-level").children(".skill").children(".skill-percentage").text();
        $(this).css({
            width: percentage
        })
    })
}
$(function(){
    skillSetUp();
})