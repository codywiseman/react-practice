/**
* * Let and Const
* * Use let for variable values that will be reassigned
* * Use const for constant values that are only assigned once
*/

/**
 * * Arrow Functions
 * * no more issues with 'this' keyword
 *    * when using this inside of an arrow function, it will always keep its context
 * * omit return keyword when using only one line of code
 */

const myFunc = () => {
  // code block
}

 /**
  * * Exports & Imports (Modules)
  * * export default - only one per moudle (can change name when importing. No {} necessary )
  * * named export - multiple named exports per module. use {} when importing (can change name using export { myFunction as functional })
  */

  /**
   * * Classes
   * * classes are essentially blueprints for object
   * * can contain properties and methods
   * * classes support inheritance - a class can inherit all properties and methods from another class while also adding its own
   */

class Human {
  constructor() {
    this.gender = 'male';
  }
  printGender() {
    console.log(this.gender)
  }
}

class Person extends Human{
  /**
   * properties are added using a constructor, a
   * default method that is created when a class is instantiated
  */
  constructor() {
    super(); // keyword that executes the parent constructor
    this.name = 'Cody';
  }
  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printGender();
