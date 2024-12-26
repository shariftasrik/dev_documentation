<h1>Map</h1>


Map will create a new array by doing something with each item in an array.

        var numbers = [3, 56, 2, 48, 5];
        const new_Numbers_Map = numbers.map(function double(x){
            return x*2;
        });
        console.log("Using Map : " + new_Numbers_Map);




<h1>Filter</h1>


Filter will create a new array by keeping the items that return true.

    var numbers = [3, 56, 2, 48, 5];
    const new_Numbers_Filter = numbers.filter(function(num){
            return num > 10;
    });
    
    console.log("Using Filter : " + new_Numbers_Filter);




<h1>Reduce</h1>


Reduce will accumulate a value by doing something to each item in an array.

    var numbers = [3, 56, 2, 48, 5];
    const new_Numbers_Reduce = numbers.reduce(function(accumulator, currentNumber){
        return accumulator + currentNumber;
    });
    console.log("Using Reduce : " + new_Numbers_Reduce);




<h1>Find</h1>


Find will find the first item that matches from an array.

    var numbers = [3, 56, 2, 48, 5];
    const firstNumber = numbers.find(function(num){
        return num > 10;
    });
    console.log("Find the first value that is greater than 10 : " + firstNumber);




<h1>FindIndex</h1>


FindIndex will find the index of the first item that matches.

    var numbers = [3, 56, 2, 48, 5];
    const AgainFirstNumber = numbers.findIndex(function(num){
        return num > 10;
    });
    console.log("Find the first index of the value which is greater than 10 : " +AgainFirstNumber);
