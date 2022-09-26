import {sayHelloAsync} from "../src/async.js";

test("test async function", async () =>{
    const result=sayHelloAsync("Rama");
    const result2=sayHelloAsync();
    await expect(result).resolves.toBe("Hello Rama");
    await expect(result2).rejects.toBe("Name is empty!.");
})