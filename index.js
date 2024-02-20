// console.log('Hello world');
// const multiply = (a,b)=>{
//     return a*b
// }
// console.log(multiply(2,4));

// const student={
//     name:"Saidul",
//     age:24,
//     getName(){
//         console.log('Hi my name is '+ this.name);
//     }
// }
// student.getName();
// const arr = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];

// const ans = arr.map((item)=>{
//         if(item===' '){
//             return 'empty string';
//         }else return item;
// });

// console.log(ans);
// const obj1 = {'key1': 1 , 'key2' : 2}
// const obj2 = { ...obj1, key1: 1000}
// console.log(obj1)

// console.log(obj2)
// console.log(obj1);

// const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

// const { key1, key3} = { ...obj1}


// console.log(key1, key3)


// const arr1 = ['value1', 'value2']

// const [ val1, val2 ] = arr1



// console.log(val1)

// console.log(val2)

// (async () => {
//     console.log('a');
//     console.log('b');
    
//     await new Promise(() => setTimeout(()=>console.log('c'), 3000)); // Wait for 3 seconds
    
    
//     console.log('d');
//   })();
  
// (async () => {
//     console.log('a');
//     console.log('b');
    
//     await new Promise(resolve => setTimeout(() => {
//       console.log('c');
//       resolve(); 
//     }, 1000));
    
//     await new Promise(resolve => setTimeout(() => {
//       console.log('d');
//       resolve(); 
//     }, 2000));
  
//     console.log('e');
//   })();

