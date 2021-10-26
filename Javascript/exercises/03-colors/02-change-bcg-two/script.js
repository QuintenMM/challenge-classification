/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

/* theory addEventListener

document.getElementById("myBtn").addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}


*/


(() => {
    var btn = document.getElementById("run");

    btn.addEventListener("click", () => {
        var colorful = document.getElementById("color").value;
        document.body.style.background = colorful;
    })
})();





/*


(() => {
    
    var btn=document.getElementById('run');
    
    btn.addEventListener("click", function(){
        var couleur=document.getElementById('color').value;
        console.log(couleur);
        document.body.style.backgroundColor=couleur;
    })
    
})();

*/