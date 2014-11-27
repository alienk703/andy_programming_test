$('.list li').on('click', function() {
   var slideIndex = $(this).index();
   $('body').scrollTop( $('section').eq(slideIndex).offset().top );  
});

// $('li:nth-of-type(1)').click(function(){
//     $("html, body").animate({ scrollTop: $(window).height()}, 10);
//     return false;
//  });

// $('li:nth-of-type(2)').click(function(){
//   $('.list').scrollTop($('.list li:nth-child(2)').position().top);
// })

// $(".list").find("li").click(function(e) {
//     e.preventDefault();
//     var section = $(this).attr("li");
//     $("html, body").animate({
//         scrollTop: $(section).offset().top
//     });
// });