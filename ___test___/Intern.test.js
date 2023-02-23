import Intern from "../lib/intern";

test("Can create school", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern("El", 11, "elsadekelnimeriy@gmail.com", testSchool);
    expect(employeeInstance.School).toBe(testSchool);
});

test("Testing officeNumber will retunr office number.", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern("El", 11, "elsadekelnimeriy@gmail.com", testScholl);
    expect(employeeInstance.getSchool()).toBe(testSchool);
})

test("Testing role.", () => {
    const retunValue = "Intern";
    const employeeInstance = new Intern("El", 11, "elsadekelnimeriy@gmail.com", "School Name");
    expect(employeeInstance.getRole()).toBe(retunValue);
});