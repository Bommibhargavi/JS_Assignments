//Task1

var student={
    name:"Bhargavi",
    id:440,
    age:22,
    branch:"ECE"
};
Object.defineProperty(student, 'id',{
     value:440,
     writable:false,
});
student.id=420;
student.name="Geetha"
student.age=26
student.branch="CSE"
console.log(student);

//Task2
var student={
    name:"Bhargavi",
    age:22,
    id:430,
    branch:"ECE"
};
Object.freeze(student)
student.name="Sai"
student.age=27
student.branch="EEE"
student.id=420
console.log(student)


//task 3

var student={
    name:"Bhargavi",
    age:22,
    id:430,
    branch:"ECE"
};
Object.preventExtensions(student)
student.name="Sai"
student.age= 27
student.id=420
student.branch="EEE"
student.gender="male"

console.log(student);


