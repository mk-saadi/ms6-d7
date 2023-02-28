// ! 8 ways to get "undefined" 
/*
 # 1. variable that is not initialized 
    let first
    console.log(first);
    -output: undefined

 # 2. function with no return value 
    function second(a, b) {
        const total = a + b;
    }
    const result = second()
    console.log(result);
    -output: undefined

 #3. parameter that is not passed will be "undefined" 
    function third(a, b, c, d){
        const total = a + b + c + d;
        console.log(a, b, c, d);
    }
    third(2, 4)
    -output: undefined

 # 4. if >> return is not defined, then the result will be "undefined" 
    function noNegative(a, b){
        if(a < 0 || b < 0){
        >> return 
        }
        return a + b
    }
    const result = noNegative(2, -4)
    console.log(result);
    -output: undefined

 # 5. property that doesn't exist on an object will result in "undefined" 
    const fifth = {id: 2, name: "Pichali", age: 36,}
    console.log(fifth.age, fifth.salary);
    -output: undefined

 # 6. searching for index that is greater than the number of elements "sixth[50]" 
    const sixth = [4, 68, 26, 98, 02, 56]
    console.log(sixth[1], sixth[5], sixth[50]);
    -output: undefined

 # 7. deleting an element inside an array 
    const seventh = [4, 68, 26, 98, 2, 56]
    delete seventh[1]
    console.log(seventh);
    -output: [4, <1 empty item>, 26, 98, 2, 56]
 >> to delete/remove elements from an array use "splice" 

 # 8. set a value directly to undefined 
    eighth = undefined
 >> use this instead 
    eighth = null
    const data = {result: [], updated: null}
 */