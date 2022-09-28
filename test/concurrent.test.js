import {sayHelloAsync} from "../src/async.js";

test.concurrent("concurrent 1", async () =>{
    await expect(sayHelloAsync("Rama")).resolves.toBe("Hello Rama");
});


test.concurrent("concurrent 2", async () =>{
    await expect(sayHelloAsync("Fajar")).resolves.toBe("Hello Fajar");
});


test.concurrent("concurrent 3", async () =>{
    await expect(sayHelloAsync("Fadhillah")).resolves.toBe("Hello Fadhillah");
});