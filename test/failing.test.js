import { sayHello } from "../src/sayHello.js";

test("sayHello success",() => {
    expect(sayHello("Rama")).toBe("Hello Rama");
})

test.failing("sayHello error",() =>{
    sayHello(null);
})

test("sayHello error matchers",() =>{
    expect(() => sayHello(null)).toThrow();
})