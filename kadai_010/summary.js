$(function () {
  // id属性がchange-colorの要素がクリックされたら
  $('#change-color').on('click', () => {
    // 文字色が変化する
    $('#target').css('color', 'red');
  });

  // id属性がchange-textの要素がクリックされたら
  $('#change-text').on('click', () => {
    // 文字内容が変化する
    $('#target').text('Hello!');
  });

  // id属性がfade-outの要素がクリックされたら
  $('#fade-out').on('click', () => {
    // 不透明度を0にする（フェードアウトする）
    $('#target').fadeOut();
  });

  // id属性がfade-inの要素がクリックされたら
  $('#fade-in').on('click', () => {
    // 不透明度を1にする（フェードインする）
    $('#target').fadeIn();
  });

});