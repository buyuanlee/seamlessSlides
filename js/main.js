$('.images>img').eq(0).addClass('current')
$('.images>img').eq(1).addClass('enter')
setTimeout(() => {
    $('.images>img').eq(0).removeClass('current').addClass('leave')
        .one('transitionend', (x) => {
            $(x.currentTarget).removeClass('leave').addClass('enter')
        })
    $('.images>img').eq(1).removeClass('enter').addClass('current')
}, 3000)
