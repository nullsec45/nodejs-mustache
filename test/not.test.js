test("string.not",() => {
    const name="Rama";

    expect(name).not.toBe("Fajar");
    expect(name).not.toEqual("Fajar");
    expect(name).not.toMatch("/ajar/");
})