import Employee from "../lib/Employee";

Text("Can create a new employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("Testing name.", () => {
    const name = "El";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

test("Testing ID.", () => {
    const id = 11;
    const employeeInstance = new Employee("El", id);
    expect(employeeInstance.id).toBe(id);
})
test("Testing email.", () => {
    const email = "elsadekelnimeriy@gmail.com";
    const employeeInstance = new Employee("El", 11, email);
    expect(employeeInstance.email).toBe(email);
})

test("Gets name through getName method.", () => {
    const testName = "El";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
})

test("Can test ID through getID method.", () => {
    const testID = 11;
    const employeeInstance = new Employee("El", testID);
    expect(employeeInstance.getId()).toBe(testID);
})

test("Can test email through getEmail method.", () => {
    const testEmail = "elsadekelnimeriy@gmail.com";
    const employeeInstance = new Employee("El", 11, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
})

test("Testing role.",() => {
    const retunValue = "Employee";
    const employeeInstance = new Employee("El", 11, "elsadekelnimeriy@gmail.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
})