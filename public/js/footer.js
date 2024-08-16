(() => {
  /**
   * @description footer項目展開收合
   */
  function footerItemCollapes() {
    $(this).toggleClass('minus');
    $(this).toggleClass('add');
    $(this).parents().siblings('.footer-items').slideToggle()
  }
  $('footer .symbol').click(footerItemCollapes)
})();