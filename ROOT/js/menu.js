(() => {
  // 隱藏/顯示手機版menu dropdown
  $('#mobile-menu').click(function () {
    $('#menu-items-wrapper').slideToggle();
    // 手機版menu滑到頂部
    window.scrollTo(0, $(this).offset().top - 60);
  });
  $('#mobile-bar-menu').click(function () {
    $('#bar-menu-items-wrapper').slideToggle();
  });
  $('#menu-items-wrapper').click(function () {
    $('#menu-items-wrapper').slideUp(0);
  });

  /**
  * @description 隱藏手機版nav的dropdown
  */
  function hideMobileNavDropdown() {
    $('#navbarNavDropdown').collapse('hide');
  }
  window.addEventListener('scroll', hideMobileNavDropdown)

  /**
  * @description 點擊外面讓dropdown收回
  */
  function closeDropdown(e) {
    if (!document.querySelectorAll('.mobile-menu-container')[0] || !document.querySelectorAll('.mobile-menu-container')[1]) {
      return
    }
    if (!document.querySelectorAll('.mobile-menu-container')[0].contains(e.target) && !document.querySelectorAll('.mobile-menu-container')[1].contains(e.target)) {
      $('#menu-items-wrapper').slideUp();
      $('#bar-menu-items-wrapper').slideUp();
    }
    $('#navbarNavDropdown').collapse('hide');
  }
  document.querySelector('body').addEventListener('click', closeDropdown);

  /**
  * @description mobile nav 滑出/收合
  */
  let mobileNavExpand = false;
  $('#mobile-nav-btn').click(
    function () {
      if (mobileNavExpand) {
        $(this).removeClass('expand');
        $('.mobile-nav .wrapper').removeClass('slideOut')
        setTimeout(() => {
          $('.mobile-nav').removeClass('show');
        }, 300);
        $('html').css('overflow-y', 'visible');
        mobileNavExpand = false;
      } else {
        $(this).addClass('expand');
        $('.mobile-nav').addClass('show');
        setTimeout(() => {
          $('.mobile-nav .wrapper').addClass('slideOut')
        }, 100);
        $('html').css('overflow-y', 'hidden');
        mobileNavExpand = true;
      }

    }
  )
  $('.mobile-nav-backdrop').click(
    function () {
      $('#mobile-nav-btn').trigger('click');
    }
  )
  // $('.mobile-nav .wrapper').click(
  //   function (event) {
  //     event.stopPropagation()
  //   }
  // )

  /**
  * @description mobile nav 內部選單收合
  */
  $('.has-sub-item').click(
    function () {
      $(this).toggleClass('expand')
      const id = window.btoa($(this).attr('id'));
      $(`[data-for-item='${id}']`).slideToggle();
    }
  )
})();