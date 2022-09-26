import {callMe, MyException} from "../src/exception.js";

test("exception", () => {
    expect(() => callMe("salah").toThrow());
    expect(() => callMe("salah").toThrow(MyException));
    expect(() => callMe("salah").toThrow("Ups kode kamu error"));
})

test("exception not happens",() =>{
    expect(() => callMe("Benar").toBe("OK"));
})
