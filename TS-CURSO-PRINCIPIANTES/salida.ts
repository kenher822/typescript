//console.log('Hello World');

// types
var myString = "Hello world";
myString = 22 + "";

var myNumer:number = 22;
var myBool:boolean=false;

var myVar:any="hello";
myVar = false;



// Arrays
var StringArray:string[]=["itme1","item2",""];
var NumberArray:number[]=[1,2.3,4]
var BooleanArray:boolean[]=[true, false, true];
var AnyArray:any[]=[1,2,true, "hello", [],{}]

// tuple -- variables con estructuras definidas
var strNumTuple:[string, number];
strNumTuple= ["Hello", 22]
//strNumTuple=["World",245,"",45];

// void, undefined, null
let myVoid:void=undefined;
let myNull:null=null;
let myUndefined:undefined=undefined;

//document.write(typeof(myNull));

/*
// function
function getSum(num1:number, num2:number): number{
    return num1 + num2
}

let mySum = function(
    num1:number|string, 
    num2:number|string):number{
        if(typeof(num1) === 'string'){
            num1=parseInt(num1);
        }
        if(typeof(num2)==='string'){
            num2=parseInt(num2);
        }
        return num1 + num2;
};

function getName(
    firtName:string, 
    lastName?:string):string{
    if(lastName === undefined){
        return firtName;
    }
    return `${firtName} ${lastName}`
};

document.write(getName("Jesús", "Herrera"));

function myVoidFunction():void{
    return;
}
*/

// interfaces - use defined structure object
interface ITodo{
    title:string;
    text:string;
}

// variable whit interfaces

function showToDo(todo:ITodo){
    console.log(`${todo.title} - ${todo.text}`)
}

let myTodo:ITodo = {title:'Eat dinner', text:'lorem'}

showToDo(myTodo);

// document.write();

// Classes - POO 
class User{
    name:string;
    public email:string;
    protected age:number;

    constructor(name:string, email:string, age:number){
        this.name = name;
        this.email = email;
        this.age = age;
    }

    register(){
        console.log(`${this.name} is registered!`);
    }

    showMeAge(){
        return this.age;
    }

    public AgeInYears(){
        return this.age + ' years';
    }

    payInvoice(){
        console.log(`${this.name} paide invoice`)
    }

}

var john=new User('John', 'john.club@gmail.com', 23);
console.log(john.register());
console.log(john.AgeInYears());

class Member extends User{
    id:number;

    constructor(id:number, name, email, age){
        super(name, email, age);
        this.id=id
    }

    payInvoice(){
        super.payInvoice();
    }
}

var gordon = new Member(1,'Gordon','gordon@gmail.com',25)

gordon.payInvoice();

document.write();