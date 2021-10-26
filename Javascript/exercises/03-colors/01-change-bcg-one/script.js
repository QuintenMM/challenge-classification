/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

//code lionel
/*
Set a background color for a document
document.body.style.backgroundColor = "red";

*/

(() => {
    let redbtn = document.getElementById("red");
    let greenbtn = document.getElementById("green");
    let yellowbtn = document.getElementById("yellow");
    let bluebtn = document.getElementById("blue");

    redbtn.addEventListener("click", () =>{
        document.body.style.background ="red";
    });

    greenbtn.addEventListener("click", () =>{
        document.body.style.background ="green";
    });

    yellowbtn.addEventListener("click", () =>{
        document.body.style.background ="yellow";
    });
        
    bluebtn.addEventListener("click", () =>{
        document.body.style.background ="blue";
    });
    
})();





/*


(() => {
    
    function colorChange(color) {
        document.body.style.background = color;
    }

    let btn=document.querySelectorAll('button');

    for(i=0; i<btn.length;i++){
        let id=btn[i].id;
    }
    
    let btnRed=document.getElementById('red');

    btnRed.addEventListener('click', function(){
        document.body.style.backgroundColor=this.id;
        console.log(btnRed)
        })

    let btnGreen=document.getElementById('green');

    btnGreen.addEventListener('click', function(){
        document.body.style.backgroundColor=this.id;
        console.log(btnGreen)
        })

    let btnYellow=document.getElementById('yellow');

    btnYellow.addEventListener('click', function(){
        document.body.style.backgroundColor=this.id;
        console.log(btnYellow)
        })

    let btnBlue=document.getElementById('blue');

    btnBlue.addEventListener('click', function(){
        document.body.style.backgroundColor=this.id;
        console.log(btnBlue)
        })
})();

/*

/*
(() => {
    
    const colorChange = color => {
        document.body.style.background = color;
    }

    Array.from(document.querySelectorAll("button")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (colorChange($btn.id), false),
        )
    );

  
    var red=document.getElementById("red");
    var redId=red.id;
    console.log(red);
    red.onclick = changeColor(redId);
    var green=document.getElementById("green");
    var greenId=green.id;
    green.onclick = changeColor(greenId);
    var yellow=document.getElementById("yellow");
    var yellowId=yellow.id;
    yellow.onclick = changeColor(yellowId);
    
    var blue=document.getElementById("blue");
    var blueId=blue.id;
    blue.onclick = changeColor(blueId);
    function changeColor(color){
        document.body.style.backgroundColor=color;
    }

    */
