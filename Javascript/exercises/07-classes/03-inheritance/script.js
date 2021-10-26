/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        constructor(name){
            this.name = name;
        }
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    class Cat extends Animal{
        static greeting ="Meaouwww";
        }
           
    

    class Dog extends Animal{
        static greeting ="Wouafff";
        }
   

    document.getElementById("run").addEventListener('click', () =>{
        let Cat1 = new Cat("Kuby");
        let Dog1 = new Dog("Doge");
        console.log(Cat1.sayHello())
        console.log(Dog1.sayHello())
    })
})();


// other option with super()
/*
(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }

    class Dog extends Animal {
        static greeting = 'wouf wouf';

        constructor(name) {
            super(name);

            this.name = name;
        }
        
    }

    class Cat extends Animal {
        static greeting = 'miaou miaou';

        constructor(name) {
            super(name);

            this.name = name;
        }
        
    }

    document.getElementById('run').addEventListener('click', () => {

        var chien = new Dog('leChien');
        var chat = new Cat('leChat');
        console.log(chien.sayHello());
        console.log(chat.sayHello());
    });
})();
*/
