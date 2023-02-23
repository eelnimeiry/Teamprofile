import Manager from "../lib/intern";

test("Can create an office number.", () => {
    const testOfficeNumber = "10";
    const employeeInstance = new Manager("El", 11, "elsadekelnimeriy@gmail.com", testOfficeNumber);
    expect(employeeInstance.officeNumberl).toBe(testOfficeNumber);
});

test("Testing getGithub will retunr office number.", () => {
    const testSchool = "11";
    const employeeInstance = new Manager("El", 11, "elsadekelnimeriy@gmail.com", testOfficeNumber);
    expect(employeeInstance.getSchool()).toBe(testSchool);
})

test("Testing role.", () => {
    const retunValue = "Manager";
    const employeeInstance = new Manager("El", 11, "elsadekelnimeriy@gmail.com", 11);
    expect(employeeInstance.getRole()).toBe(retunValue);
});