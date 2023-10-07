// Write your solution in this file!
const employee ={
    name:"Sam",
    streetAddress: "11 Broadway",
}
employee.name='Jack'
function updateEmployeeWithKeyAndValue(employee,key, value){
    let newEmployee = {...employee };
    newEmployee [key]= value;
    return newEmployee
}
function  destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){

    employee[key] = value;
    return employee;
}
function  deleteFromEmployeeByKey(employee, key){

    let newEmployee= {...deleteFromEmployeeByKey}
    delete newEmployee[key];
    return newEmployee;
}
function  destructivelyDeleteFromEmployeeByKey(employee, key){
    let newEmployee={...destructivelyDeleteFromEmployeeByKey}
   delete employee[key];
    return employee
    
}
     
    
    
