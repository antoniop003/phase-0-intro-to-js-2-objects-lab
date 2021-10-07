// Write your solution in this file!
let employee = {
   streetAddress: '11 Broadway'
}

function updateEmployeeWithKeyAndValue (employee,key,value) {
    const employee1 = {...employee}
    employee1[key] = value
    return employee1
}

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value){
    return Object.assign(employee, { [key]: value})
    
}
function deleteFromEmployeeByKey (employee,key){
    const newhire = Object.assign({}, employee)
    delete newhire[key]
    return newhire
}
function destructivelyDeleteFromEmployeeByKey (employee,key){
    delete employee[key];
    return employee;
    
} 
