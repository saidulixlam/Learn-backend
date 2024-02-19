console.log('Hello world');
const multiply = (a,b)=>{
    return a*b
}
console.log(multiply(2,4));

const student={
    name:"Saidul",
    age:24,
    getName(){
        console.log('Hi my name is '+ this.name);
    }
}
student.getName();