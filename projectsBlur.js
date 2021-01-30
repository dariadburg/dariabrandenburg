$(document).ready(function ()
{
    $(".projectContainer").hover(
        function(e)
        {
            // Make all elements blurry except for this one
            $("#projects").children().addClass("blurry");
            $(this).removeClass("blurry");
        },
        function()
        {
            // Remove the blur from all elements
            $("#projects").children().removeClass("blurry");
        }
    );
});