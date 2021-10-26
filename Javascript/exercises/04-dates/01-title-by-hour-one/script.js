/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

/* 
to display the full date(day+month+year+hour+minutes+sec)
const d = new Date();
document.getElementById("target").innerHTML =d;


*/


(() => {
    
    const date = new Date();
    var hour = date.getHours();
    if (hour < 18){
        document.getElementById("target").innerHTML = "Bonjour";
    } else {
        document.getElementById("target").innerHTML ="Bonsoir"
    }


})();




/* Code de Samir aussi correct 

(() => {
    var btn=document.getElementById("target");
    var today= new Date();
    var todayH=today.getHours();
    

    if(todayH<18){
        btn.textContent="Bonjour";
    } else {
        btn.textContent="Bonsoir";
    }
})();

*/


(() => {
  

})();




// code de marine 

/*
(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
        
    var today = new Date();
    var hours = today.getHours();
            
        if (hours < 18) {
            document.getElementById("target").innerHTML = "Bonjour";
        } else {
            document.getElementById("target").innerHTML = "Bonsoir";
        }

})();

*/

