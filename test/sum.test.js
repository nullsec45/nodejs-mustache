import {sum, sumAll} from "../src/sum.js";

test("sum(1,2,3) must be 6",() => {
    const result=sum(1,2,3);

    expect(result).toBe(6);
});


test("test sum all", () =>{
    const numbers=[1,2,3,4,5];
    expect(sumAll(numbers)).toBe(15);
})