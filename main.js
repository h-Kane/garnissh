'use strict';

{


// let vegtable = {
//         delay: 1800, //アニメーションの発生タイミング
//         distance: '200px', //要素の移動距離
//         origin: 'top' //要素が移動してくる方向
//     };
//     ScrollReveal().reveal('.nav', vegtable);
    
    
// let market = {
//         delay: 1800, //アニメーションの発生タイミング
//         distance: '200px', //要素の移動距離
//         origin: 'right' //要素が移動してくる方向
//     };
//    ScrollReveal().reveal('.box', market);
   
// let picture = {
//         delay: 1800, //アニメーションの発生タイミング
//         distance: '200px', //要素の移動距離
//         origin: 'right' //要素が移動してくる方向
//     };
//     ScrollReveal().reveal('.box2', picture);
    
// let com = {
//         delay: 1800, //アニメーションの発生タイミング
//         distance: '200px', //要素の移動距離
//         origin: 'left' //要素が移動してくる方向
//     };
//     ScrollReveal().reveal('.box3', com);


    
// let node = document.querySelector('#cake');
// let nodeList = document.querySelectorAll('.cookies');
// let nodeArray = [
//     document.querySelector('.nav'),
//     document.querySelector('.box'),
//     document.querySelector('.box2'),
//     document.querySelector('.box3')
// ];
 
// ScrollReveal().reveal(node);
// ScrollReveal().reveal(nodeList);
// ScrollReveal().reveal(nodeArray);
    
// ScrollReveal({reset: true}).reveal('.block');
    
    
ScrollReveal().reveal('.box', { 
  duration: 1200, // アニメーションの完了にかかる時間
  viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
  reset: true   // 何回もアニメーション表示するか
});  

ScrollReveal().reveal('.nav', { 
  duration: 1200, // アニメーションの完了にかかる時間
  viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
  reset: true   // 何回もアニメーション表示するか
});  

ScrollReveal().reveal('.box', { 
  duration: 1400, // アニメーションの完了にかかる時間
  viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
  reset: true   // 何回もアニメーション表示するか
});

ScrollReveal().reveal('.box2', { 
  duration: 1400, // アニメーションの完了にかかる時間
  viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
  reset: true   // 何回もアニメーション表示するか
}); 

ScrollReveal().reveal('.box3', { 
  duration: 1400, // アニメーションの完了にかかる時間
  viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
  reset: true   // 何回もアニメーション表示するか
});        
    
    
    }


























