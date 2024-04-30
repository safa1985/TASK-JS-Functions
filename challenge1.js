/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */
function printName() {
  console.log("safa khlifat");
}
printName();

/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */
function printAge(birth) {
  let Age = 2024 - birth;
  return Age;
}
console.log(printAge(1985));
/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */
function printHello(language, name) {
  if (language == "en") {
    console.log("hello  " + name);
  } else if (language == "es") {
    console.log("Hola  " + name);
  } else if (language == "fr") {
    console.log("Bonjour " + name);
  } else if (language == "tr") {
    console.log("Merhaba " + name);
  }
}
printHello("en", "safa");
printHello("es", "safa");
printHello("fr", "safa");
printHello("tr", "safa");
/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */
function printMax(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log(printMax(10, 15));
