const employee = {
    name: 'Homer',
    streetAddress: '742 Evergreen Terrance'
    }; 

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj1 = {...employee, "name": "Sam", "streetAddress": "11 Broadway"}
    return newObj1
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
} 

function deleteFromEmployeeByKey(employee, key) {
    const newObj2 = {...employee[key]}
    delete newObj2[key]
    return newObj2
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}