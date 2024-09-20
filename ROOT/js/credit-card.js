/**
 * @description 卡號invalid 提示
 */
// function cardInvalid() {
//     const warn = $('.card-code .warn');
//     const inputs = $('.card-code input');
//     if (isValid) {
//         warn.css('display', 'none');
//         inputs.removeClass('.is-invalid');
//     } else {
//         warn.css('display', 'block');
//         inputs.addClass('is-invalid');
//     }
// }


/**
 * @description 自動到下一input
 */
$('.card-code input').keyup(function () {
    if (this.value.length === 4) {
        $(this).next('input').focus();

        if ($(this).index() === 3) {
            $('.valid-till input:first-child').focus();
        }
    }
});
$('.valid-till input').keyup(function () {
    if (this.value.length === 2) {
        $(this).siblings('input').focus();

        if ($(this).index() === 2) {
            $('.security-code input').focus();
        }
    }
});


