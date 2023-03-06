const Intern = require("../lib/Intern");

test("Can create school", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern("El", 11, "elsadekelnimeriy@gmail.com", testSchool);
    expect(employeeInstance.school).toBe(testSchool);
});

test("Testing officeNumber will return office number.", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern("El", 11, "elsadekelnimeriy@gmail.com", testSchool);
    expect(employeeInstance.getSchool()).toBe(testSchool);
})

test("Testing role.", () => {
    const returnValue = "intern";
    const employeeInstance = new Intern("El", 11, "elsadekelnimeriy@gmail.com", "School Name");
    expect(employeeInstance.getRole()).toBe(returnValue);
});