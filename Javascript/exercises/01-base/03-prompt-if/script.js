/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(() => {
    var question =prompt("It's my birthday, do you want some cake?");
        if(question == "Yes") {
            alert("Cool! let's celebrate this!");
        } else {
            alert("You don't say no to my birthday cake dude :P");
        }
    
})();





// other solution (still need to correct it!!! )

/*

(() => {
    var question = prompt("It's my birthday, do you want some cake?");
    const answers = ["Yes", "yes", "Y", "y"];
        if(question === answers){
            alert("Cool! let's celebrate this!");
        } else{
            alert("You don't say no to my birthday cake dude :P");
        }
})();

*/

