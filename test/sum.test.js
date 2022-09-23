import {sum} from "../src/sum.js";

test("sum(1,2,3) must be 6",() => {
    const result=sum(1,2,3);

    expect(result).toBe(6);
});