 $(document).on('click', '#next-left', function(){
        "use strict";
        var currentSlide = $('.carousel.active'),
            prevSlide = currentSlide.prev();
    
        currentSlide.fadeOut(300).removeClass('active');
        prevSlide.fadeIn(300).addClass('active');
        
        if(prevSlide.length == 0) {
            $('.carousel').last().fadeIn(300).addClass('active');
        }
});

$(document).on('click', '#next-right', function(){
    "use strict";
        var currentSlide = $('.carousel.active'),
            nextSlide = currentSlide.next();
    
        currentSlide.fadeOut(300).removeClass('active');
        nextSlide.fadeIn(300).addClass('active');
        
        if(nextSlide.length == 0) {
            $('.carousel').first().fadeIn(300).addClass('active');
        }
});

$(document).on('click', '#slide1', function() {
    var picture1 =  $(this).attr('src');
    $('#bigboard').attr('src', picture1);
});

$(document).on('click', '#slide2', function() {
    var picture2 =  $(this).attr('src');
    $('#bigboard').attr('src', picture2);
});

$(document).on('click', '#slide3', function() {
    var picture3 =  $(this).attr('src');
    $('#bigboard').attr('src', picture3);
});

$(document).on('click', '#slide4', function() {
    var picture4 =  $(this).attr('src');
    $('#bigboard').attr('src', picture4);
});


$(document).on('click', '#slide1', function() {
    var picture1 =  $(this).attr('src');
    $('#bigboard2').attr('src', picture1);
});

$(document).on('click', '#slide2', function() {
    var picture2 =  $(this).attr('src');
    $('#bigboard2').attr('src', picture2);
});

$(document).on('click', '#slide3', function() {
    var picture3 =  $(this).attr('src');
    $('#bigboard2').attr('src', picture3);
});

$(document).on('click', '#slide4', function() {
    var picture4 =  $(this).attr('src');
    $('#bigboard2').attr('src', picture4);
});


$(document).on('click', '#slide1', function() {
    var picture1 =  $(this).attr('src');
    $('#bigboard3').attr('src', picture1);
});

$(document).on('click', '#slide2', function() {
    var picture2 =  $(this).attr('src');
    $('#bigboard3').attr('src', picture2);
});

$(document).on('click', '#slide3', function() {
    var picture3 =  $(this).attr('src');
    $('#bigboard3').attr('src', picture3);
});

$(document).on('click', '#slide4', function() {
    var picture4 =  $(this).attr('src');
    $('#bigboard3').attr('src', picture4);
});

// End of SurfBoards PART

$(document).on('click', '#right-member', function() {
    var member1 =  $('.member-1').html(),
        member2 =  $('.member-2').html(),
        member3 =  $('.member-3').html(),
        member4 =  $('.member-4').html();
    
    $('.member-1').html(member4);
    $('.member-2').html(member1);
    $('.member-3').html(member2);
    $('.member-4').html(member3);  
});

$(document).on('click', '#left-member', function() {
    var member1 =  $('.member-1').html(),
        member2 =  $('.member-2').html(),
        member3 =  $('.member-3').html(),
        member4 =  $('.member-4').html();
    
    $('.member-1').html(member2);
    $('.member-2').html(member3);
    $('.member-3').html(member4);
    $('.member-4').html(member1);  
});

// End of OurTeam PART

$(document).on('click', '.blog-1 img', function() {
        var src = $(this).attr("src");
        $(".pop-up").fadeIn();
        $(".show img").attr("src", src);
});
$(document).on('click', '.blog-2 img', function() {
        var src = $(this).attr("src");
        $(".pop-up").fadeIn();
        $(".show img").attr("src", src);
});
$(document).on('click', '.blog-3 img', function() {
        var src = $(this).attr("src");
        $(".pop-up").fadeIn();
        $(".show img").attr("src", src);
});
$(document).on('click', '.exit', function() {
        $(".pop-up").fadeOut();
});

// End of Blogs PART




