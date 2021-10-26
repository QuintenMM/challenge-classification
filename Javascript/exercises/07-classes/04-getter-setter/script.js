/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

//Revoir theorie sur Getter et Setter 

(() => {
    class Person{
        constructor (firstname, lastname){
            this.firstname = firstname;
            this.lastname = lastname;
        
        }
        get fullName(){
            return `${this.firsname} ${this.lastname}`;
        }

        set fullName(val){
            const parts = val.split(' ');
            this.firstname = parts[0];
            this.lastname = parts[1];
        }
    }
    document.getElementById("run").addEventListener("click", () =>{
        let Person1 = new Person("Anne", "Jungers")
        console.log(Person1.fullName);
        Person1.fullName = "Cécile Rizoo";
        console.log(Person1.fullName)
    })
})();
