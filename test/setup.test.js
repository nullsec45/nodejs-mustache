import {sum} from "../src/sum.js";
import {sayHelloAsync} from "../src/async.js";


beforeEach(() => {
    console.info("Before each");
});

afterEach(() => {
    console.info("After each");
})

test("first test", () => {
    expect(sum(10,10)).toBe(20);
});

test("second test",async () =>{
    const result=await sayHelloAsync("Rama");
    expect(result).toBe("Hello Rama");
});