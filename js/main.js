
let n
initialization()
setInterval(()=>{
    makeLeave(getImg(n))
    .one('transitionend', (e)=>{
    makeEnter($(e.currentTarget))
})
makeCurrent(getImg(n+1))
n += 1
},2000)



//函数库

//控制n的数值
function x(n) {
    if (n > 4) {
        n = n % 5
    }
    return n    //n = 0,1,2,3,4
}

//初始化函数
function initialization() {
    n = 0
    $('.images>img').eq(0).addClass('current')
        .siblings().addClass('enter')
}

//获取播放图片
function getImg(n) {
    return $('.images>img').eq(x(n))
}

//播放状态
function makeCurrent($node) {
    return $node.removeClass('enter leave').addClass('current')
}
//离开状态
function makeLeave($node) {
    return $node.removeClass('enter current').addClass('leave')
}
//进入状态
function makeEnter($node) {
    return $node.removeClass('current leave').addClass('enter')
}