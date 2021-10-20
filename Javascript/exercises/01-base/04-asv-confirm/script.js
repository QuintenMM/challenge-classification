/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var check = false;
    while (check === false){
        var name = prompt("What is your name?")
        var age = prompt("What is your sex.")
        var sex = prompt ("Insert your city.")
        var city = prompt ("Insert your city")
        check = confirm("Age :" + age + "\r\n" + "Sex :" + sex + "\r\n" + "City :" + city + "\r\n"+"Is this the correct information??");

    }

})();
