const student = function (){
    this.name="Surjo Biswas",
    this.age=23;
}
student.prototype={
    address:"Barasat",
    getAdd:function(a,b){
        return a+b;
    },
    getSub:function(a,b){
        return a-b;
    },
    getMul:function(a,b){
        return a*b;
    },
    getDiv:function(a,b){
        return a/b;
    }
}
const std= new student ();
console.log(std.name , std.age , std.address)
console.log(std.getAdd(10,10))
console.log(std.getSub(50,20))
console.log(std.getMul(5,5))
console.log(std.getDiv(10,2))

