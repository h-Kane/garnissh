'use strict'

{

{

$(function() {
 
  // 一旦hide()で隠してフェードインさせる
  $('.bisiness').hide().fadeIn(10000);
 
});

let buyer = {
        delay: 1800, //アニメーションの発生タイミング
        distance: '200px', //要素の移動距離
        origin: 'bottom' //要素が移動してくる方向
        // viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
        // reset: true   // 何回もアニメーション表示するか
    };
    ScrollReveal().reveal('.box2', buyer);
    
    
let mor = {
        delay: 1800, //アニメーションの発生タイミング
        distance: '200px', //要素の移動距離
        origin: 'top' //要素が移動してくる方向
    };
    ScrollReveal().reveal('.time', mor);

}
    
ScrollReveal({reset: true}).reveal('.block');


}

   



