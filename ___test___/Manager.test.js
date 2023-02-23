const Manager = require("../lib/Manager");

test("Can create an office number.", () => {
    const testOfficeNumber = 11;
    const employeeInstance = new Manager("El", 11, "elsadekelnimeriy@gmail.com", testOfficeNumber);
    expect(employeeInstance.officeNumberl).toBe(testOfficeNumber);
});

test("Testing officeNumber will return office number.", () => {
    const testOfficeNumber = 11;
    const employeeInstance = new Manager("El", 11, "elsadekelnimeriy@gmail.com", testOfficeNumber);
    expect(employeeInstance.getOficceNumber()).toBe(testOfficeNumber);
})

test("Testing role.", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("El", 11, "elsadekelnimeriy@gmail.com", 11);
    expect(employeeInstance.getRole()).toBe(returnValue);
});