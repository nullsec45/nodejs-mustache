import { sayHelloAsync } from "../src/async";

test("async function",async () =>{
    const result=await sayHelloAsync("Rama");
    expect(result).toBe("Hello Rama");
});