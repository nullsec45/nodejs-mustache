test("string",() =>{
    const name="Rama Fajar Fadhillah";

    expect(name).toBe("Rama Fajar Fadhillah");
    expect(name).toMatch(/fajar/);
})