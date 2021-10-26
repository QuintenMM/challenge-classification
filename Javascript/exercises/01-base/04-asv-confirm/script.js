/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */



//use of do while loop


(() => {
    do {
    let age = prompt("Enter your age");
    let sex = prompt("Enter your sex");
    let city = prompt("Enter your city");
    let conf = confirm("Your age is " + age+ ",\n Your sex is " +sex+ ",\n Your city is " +city +",\n Do you confirm your information?");
    }
    while(conf == false)
    alert( "you will be redirected to the same questions in a few secondes...")
    
})();

// confirm() returns a boolean value

//code Lionel
/*

(() => {
    do {
    var age = prompt("Quel est votre age?");
    var sexe = prompt("Quel est votre sexe?");
    var ville = prompt("Quel est votre ville?");
    var result = confirm(`confirmez-vous bien que vous avez ${age} que votre genre est ${sexe} et que vous habitez à ${ville}`);
    }
    while(result == false) 
    alert(`thx`);
  
})();


*/


//code Ivan

/*
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


*/
