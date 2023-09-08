/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const ceramicCup={
    color: "metallic blue",
    features: "ridges",
    shape:"round",
    height: 2,
    pen: {
        type:"marker",
        inkColor: "black"
    }
}

console.log("This is a ceramicCup:", ceramicCup)
console.log("This is the ceramicCups color:", ceramicCup.color)