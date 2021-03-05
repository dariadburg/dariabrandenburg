$(document).ready(function ()
{
    $(".photographyBox, .backButton").hover(
        function(e)
        {
            $(this).find(".photographyOverview, .backArrow").each(function() {
                // Change source of this element
                var source = $(this).attr("src");
                var sourceAlt = $(this).attr("srcAlt");
                $(this).attr("src", sourceAlt);
                $(this).attr("srcAlt", source);
            });

            // Change text color
            $(this).children().css("color", "#80FF00");
        },
        function()
        {
            $(this).find(".photographyOverview, .backArrow").each(function() {
                // Change source of this element
                var source = $(this).attr("src");
                var sourceAlt = $(this).attr("srcAlt");
                $(this).attr("src", sourceAlt);
                $(this).attr("srcAlt", source);
            });

            // Change text color
            $(this).children().css("color", "black");
        }
    );
});

$(document).ready(function ()
{
    $(".creativeCodeBox, .backButton").hover(
        function(e)
        {
            $(this).find(".creativeCodeOverview, .backArrow").each(function() {
                // Change source of this element
                var source = $(this).attr("src");
                var sourceAlt = $(this).attr("srcAlt");
                $(this).attr("src", sourceAlt);
                $(this).attr("srcAlt", source);
            });

            // Change text color
            $(this).children().css("color", "#80FF00");
        },
        function()
        {
            $(this).find(".creativeCodeOverview, .backArrow").each(function() {
                // Change source of this element
                var source = $(this).attr("src");
                var sourceAlt = $(this).attr("srcAlt");
                $(this).attr("src", sourceAlt);
                $(this).attr("srcAlt", source);
            });

            // Change text color
            $(this).children().css("color", "black");
        }
    );
});

$(document).ready(function ()
{
    $(".experienceBox, .backButton").hover(
        function(e)
        {
            $(this).find(".experienceOverview, .backArrow").each(function() {
                // Change source of this element
                var source = $(this).attr("src");
                var sourceAlt = $(this).attr("srcAlt");
                $(this).attr("src", sourceAlt);
                $(this).attr("srcAlt", source);
            });

            // Change text color
            $(this).children().css("color", "#80FF00");
        },
        function()
        {
            $(this).find(".experienceOverview, .backArrow").each(function() {
                // Change source of this element
                var source = $(this).attr("src");
                var sourceAlt = $(this).attr("srcAlt");
                $(this).attr("src", sourceAlt);
                $(this).attr("srcAlt", source);
            });

            // Change text color
            $(this).children().css("color", "black");
        }
    );
});