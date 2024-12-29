<h1>React : use of Destructor </h1>

<h2>public/index.html</h2>

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>React App</title>
    
        <link rel="stylesheet" href="styles.css" />
      </head>
    
      <body>
        <div id="root"></div>
        <script src="../src/index.js" type="text/jsx"></script>
      </body>
    </html>

 <h2>src/index.js</h2>  

     // import animals, { useAnimals } from "./data";
    
    // //Destructuring Arrays
    // // console.log(animals);
    // const [cat, dog] = animals;
    // // console.log(cat);
    
    // const [animal, makeSound] = useAnimals(cat);
    // console.log(animal);
    // makeSound();
    
    // //Destructuring Objects
    // // const { name, sound} = cat;
    // // const { name: catName, sound: catSound } = cat;
    // // const { name = "Fluffy", sound = "Purr" } = cat;
    // // const {feedingRequirements: {food, water} } = cat;
    // // console.log(food);
    
    // CHALLENGE: uncomment the code below and see the car stats rendered
    import React from "react";
    import ReactDOM from "react-dom";
    import cars from "./practice";
    
    
    console.log(cars);
    const [honda, tesla] = cars;
    
    const {speedStats:{topSpeed : hondaTopSpeed, zeroToSixty : hondaZeroToSixty}} = honda;
    const {speedStats:{topSpeed : teslaTopSpeed, zeroToSixty : telsaZeroToSixty}} = tesla;
    
    const {coloursByPopularity: [hondaTopColour]} = honda;
    const {coloursByPopularity: [teslaTopColour]} = tesla;
    
    
    ReactDOM.render(
      <table>
        <tr>
          <th>Brand</th>
          <th>Top Speed</th>
          <th>Top Colour</th>
        </tr>
        <tr>
          <td>{tesla.model}</td>
          <td>{teslaTopSpeed}</td>
          <td>{teslaTopColour}</td>
        </tr>
        <tr>
          <td>{honda.model}</td>
          <td>{hondaTopSpeed}</td>
          <td>{hondaTopColour}</td>
        </tr>
      </table>,
      document.getElementById("root")
    );
    


  <h2>src/practice.js</h2>

      const cars = [
      {
        model: "Honda Civic",
        coloursByPopularity: ["black", "silver"],
        speedStats: {
          topSpeed: 140,
          zeroToSixty: 8.5
        }
      },
      {
        model: "Tesla Model 3",
        coloursByPopularity: ["red", "white"],
        speedStats: {
          topSpeed: 150,
          zeroToSixty: 3.2
        }
      }
    ];
    
    export default cars;


  <h2>src/data.js</h2>

      const animals = [
      {
        name: "cat",
        sound: "meow",
        feedingRequirements: {
          food: 2,
          water: 3
        }
      },
      { name: "dog", sound: "woof" }
    ];
    
    function useAnimals(animal) {
      return [
        animal.name,
        function() {
          console.log(animal.sound);
        }
      ];
    }
    
    export default animals;
    export { useAnimals };
