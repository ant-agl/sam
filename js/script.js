$("body").on("click", 'a[href^="#"]', function (event) { 
  event.preventDefault(); 
  let id = $(this).attr('href');
  if (id != '#') {
    let top = $(id).offset().top; 
    $('body,html').animate({scrollTop: top}, 300, 'linear');
  }
}); 

$(document).ready(function() {
  $('.collect__item input').on('change', function() {
    let total = 0;
    $('.collect__item').each((i, el) => {
      if (!$(el).find('input').prop('checked')) return;

      total += Number($(el).find('.collect__price').data('price'));
    });
    $('.collect__total-value').text(total);
  });

  if ($('.courses__preview').length > 3) {
    $('.courses__preview').slice(3).hide();
  } else {
    $('.courses__more').hide();
  }
  $('.courses__more').on('click', function() {
    $('.courses__preview').fadeIn();
    $('.courses__more').fadeOut();
  });
});