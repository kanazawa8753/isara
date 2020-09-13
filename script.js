$('.listiti').click(function(){
$('.hyouzi').fadeIn();
});


$('.itikadai').click(function() {
  var $zizenkadai = $(this).find('.zizenkadai-naiyo');
  if($zizenkadai.hasClass('open')) {
    $zizenkadai.removeClass('open');
    // slideUpメソッドを用いて、$answerを隠してください
    $zizenkadai.slideUp();
  } else {
    $zizenkadai.addClass('open'); 
    // slideDownメソッドを用いて、$answerを表示してください
    $zizenkadai.slideDown();
  }
});


$('.itinikadai').click(function() {
  var $zizenkadai = $(this).find('.zizenkadai-naiyo');
  if($zizenkadai.hasClass('open')) {
    $zizenkadai.removeClass('open');
    // slideUpメソッドを用いて、$answerを隠してください
    $zizenkadai.slideUp();
  } else {
    $zizenkadai.addClass('open'); 
    // slideDownメソッドを用いて、$answerを表示してください
    $zizenkadai.slideDown();
  }
});


$('.nikadai').click(function() {
  var $zizenkadai = $(this).find('.zizenkadai-naiyo');
  if($zizenkadai.hasClass('open')) {
    $zizenkadai.removeClass('open');
    // slideUpメソッドを用いて、$answerを隠してください
    $zizenkadai.slideUp();
  } else {
    $zizenkadai.addClass('open'); 
    // slideDownメソッドを用いて、$answerを表示してください
    $zizenkadai.slideDown();
  }
});


$('.sankadai').click(function() {
  var $zizenkadai = $(this).find('.zizenkadai-naiyo');
  if($zizenkadai.hasClass('open')) {
    $zizenkadai.removeClass('open');
    // slideUpメソッドを用いて、$answerを隠してください
    $zizenkadai.slideUp();
  } else {
    $zizenkadai.addClass('open'); 
    // slideDownメソッドを用いて、$answerを表示してください
    $zizenkadai.slideDown();
  }
});


$('.yonkadai').click(function() {
  var $zizenkadai = $(this).find('.zizenkadai-naiyo');
  if($zizenkadai.hasClass('open')) {
    $zizenkadai.removeClass('open');
    // slideUpメソッドを用いて、$answerを隠してください
    $zizenkadai.slideUp();
  } else {
    $zizenkadai.addClass('open'); 
    // slideDownメソッドを用いて、$answerを表示してください
    $zizenkadai.slideDown();
  }
});

$('.question-listiti').click(function() {
  var $answer = $(this).find('.answer');
  if($answer.hasClass('open')) {
    $answer.removeClass('open');
    // slideUpメソッドを用いて、$answerを隠してください
    $answer.slideUp();
    
    // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
    $(this).find('span').text('+');
    
  } else {
    $answer.addClass('open'); 
    // slideDownメソッドを用いて、$answerを表示してください
    $answer.slideDown();
    
    // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
    $(this).find('span').text('-');
  }
});
