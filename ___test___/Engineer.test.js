import Engineer from "../lib/Engineer";

test("Can create a github.", () => {
    const testGithub = "eelnimeiry";
    const employeeInstance = new Engineer("El", 11, "elsadekelnimeriy@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will retunr github.", () => {
    const testGithub = "eelnimeiry";
    const employeeInstance = new Engineer("El", 11, "elsadekelnimeriy@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
})

test("Testing role.", () => {
    const retunValue = "Engineer";
    const employeeInstance = new Engineer("El", 11, "elsadekelnimeriy@gmail.com", "eelnimeiry");
    expect(employeeInstance.getGithub()).toBe(retunValue);
});