(() => {
  /**
   * @description 旅平險小百科項目展開收合
   */
  function qaItemCollapes() {
    $(this).find('.answer').slideToggle()
    $(this).find('.symbol').toggleClass('minus');
    $(this).find('.symbol').toggleClass('add');
  }
  $('.answer').slideToggle()
  $('.qa-item').click(qaItemCollapes)
})();