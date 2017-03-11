$(document).ready(function() {
  var style = $('<style>.tab-content { display:none; }</style>');
  $('html > head').append(style);

  $(".tabs li").first().addClass("is-active");
  $('.tab-content').first().css('display', 'block');

  $(".tabs li a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("is-active");
        $(this).parent().siblings().removeClass("is-active");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
});
