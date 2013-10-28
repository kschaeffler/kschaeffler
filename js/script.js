$(function() {
    $('div.device a, section#background p a').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 1000);
        return false;
    });

    // Cache the Window object
    $window = $(window);

    var $bgobj = $('section[data-type="background"]'); // assigning the object
     
    $(window).scroll(function() {
         
        var yPos = -($window.scrollTop() / $bgobj.data('speed')); 

        if (yPos <= 0) {
            yPos += 92;
        } else {
            yPos = 92;
        };
        
        var coords = 'center '+ yPos + 'px';

        // Move the background
        $bgobj.css({ backgroundPosition: coords });
    });
});