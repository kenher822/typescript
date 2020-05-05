//console.log('Hello World');
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// types
var myString = "Hello world";
myString = 22 + "";
var myNumer = 22;
var myBool = false;
var myVar = "hello";
myVar = false;
// Arrays
var StringArray = ["itme1", "item2", ""];
var NumberArray = [1, 2.3, 4];
var BooleanArray = [true, false, true];
var AnyArray = [1, 2, true, "hello", [], {}];
// tuple -- variables con estructuras definidas
var strNumTuple;
strNumTuple = ["Hello", 22];
//strNumTuple=["World",245,"",45];
// void, undefined, null
var myVoid = undefined;
var myNull = null;
var myUndefined = undefined;
// variable whit interfaces
function showToDo(todo) {
    console.log(todo.title + " - " + todo.text);
}
var myTodo = { title: 'Eat dinner', text: 'lorem' };
showToDo(myTodo);
// document.write();
// Classes - POO 
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    User.prototype.register = function () {
        console.log(this.name + " is registered!");
    };
    User.prototype.showMeAge = function () {
        return this.age;
    };
    User.prototype.AgeInYears = function () {
        return this.age + ' years';
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + " paide invoice");
    };
    return User;
}());
var john = new User('John', 'john.club@gmail.com', 23);
console.log(john.register());
console.log(john.AgeInYears());
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
var gordon = new Member(1, 'Gordon', 'gordon@gmail.com', 25);
gordon.payInvoice();
document.write();
