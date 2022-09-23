test("test toBe", () =>{
    let name="Rama";
    let hello=`Hello ${name}`;
});

test("test toEquals", () => {
    let person={id:"rama"};
    Object.assign(person, {name:"Rama"});

    expect(person).toEqual({id:"rama", name:"Rama"});
});