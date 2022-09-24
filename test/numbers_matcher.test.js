test("numbers",()=>{
    const value=3+6;

    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(4);
    expect(value).toBeLessThan(10);
    expect(value).toBeLessThanOrEqual(9);

    expect(value).toBe(9);
});