/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// explanation https://www.youtube.com/watch?v=Yem8T8azZko

(() => {
    var btn =document.getElementById("run");

    btn.addEventListener('click',function(){
        let color ='#';
        const random = Math.random().toString(16).slice(2,8);
        color +=random;
        document.body.style.backgroundColor = color;
        document.querySelector('h2').innerText =color;
    })
})();


// or other code same thing
/*

(() => {
    var btn=document.getElementById('run');
    
    btn.addEventListener("click", function(){
        randomColor=('#'+(Math.random()*0xFFFFFF<<0).toString(16));
        document.body.style.backgroundColor=randomColor;
    })
})();

*/