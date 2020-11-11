'use strict'

$(function() {
 
  // 一旦hide()で隠してフェードインさせる
  $('.president').hide().fadeIn(10000);
 
});


let kaisha = {
        delay: 1800, //アニメーションの発生タイミング
        distance: '200px', //要素の移動距離
        origin: 'left' //要素が移動してくる方向
    };
    ScrollReveal().reveal('.box', kaisha);
    
    
let stuff = {
        delay: 1800, //アニメーションの発生タイミング
        distance: '200px', //要素の移動距離
        origin: 'right' //要素が移動してくる方向
    };
   ScrollReveal().reveal('.box1', stuff);
   
   
let think = {
        delay: 1800, //アニメーションの発生タイミング
        distance: '200px', //要素の移動距離
        origin: 'top' //要素が移動してくる方向
    };
   ScrollReveal().reveal('.education', think);
   
ScrollReveal({reset: true}).reveal('.block');

















