test("exception", () => {
    expect(() => callMe("salahx").toThrow());
    expect(() => callMe("salah").toThrow(MyException));
    expect(() => callMe("salah").toThrow("Ups kode kamu error"));
})