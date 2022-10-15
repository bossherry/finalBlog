//获取各个元素并对其操作
const stars = document.querySelector('.stars');
const moon = document.querySelector('.moon');
const desc = document.querySelector('.desc');
const btn = document.querySelector('.btn');
//为首页的各个元素添加监听器
window.addEventListener('scroll', function() {
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    desc.style.marginTop = value * 1.5 + "px";
    desc.style.marginRight = value * 2.5 + "px";
    btn.style.marginTop = value * 1.5 + "px";
    
})
//swiper轮播图
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: ".swiper-pagination",


    },
    speed:1000,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
});

// 触摸图片特效

var imags=document.getElementsByClassName('item-imgs');
var texts=document.getElementsByClassName('hidden-texts');
console.log(imags,texts);

for(let i=0;i<imags.length;i++){
    imags[i] .addEventListener('mouseenter',function(){
        texts[i].style.visibility='visible';
        texts[i].style.width='270px';
        texts[i].style.transition=' 0.5s all';
        texts[i].style.display='block'
    });
    
    imags[i].addEventListener('mouseout',function(){
        texts[i].style.transition=' 0.5s all';
        texts[i].style.visibility='hidden';
        texts[i].style.display='none';   
    });

}

 //回到顶部滑动效果
 window.onscroll = function () {
    scrollFunction()
};

var timer = null;
btnTop.onclick = function () {
    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(function fn() {
        var oTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (oTop > 0) {
            document.body.scrollTop = document.documentElement.scrollTop = oTop - 50;
            timer = requestAnimationFrame(fn);
        } else {
            cancelAnimationFrame(timer);
        }
    });
}

// 当网页向下滑动 20px 出现"返回顶部" 按钮
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("to-top").style.display = "block";
    } else {
        document.getElementById("to-top").style.display = "none";
    }
}

// 点击按钮，返回顶部
function returnTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


//为图片添加监听器
// for(let i=i;i<imags.length;i++){
//   imags[i].addEventListener('touchmove', function (){
//     texts[i].style.visibility='visible';
//     alert(i);
 
  

// }
