test("array simple",() =>{
    const names=["Rama","Fajar","Fadhillah"];
    expect(names).toEqual(["Rama","Fajar","Fadhillah"]);
    expect(names).toContain("Rama");
})

test("array object",() =>{
    const mhs=[
        {
            name:"Rama",
            jurusan:"Teknik Informatika"
        },
        {
            name:"Entong",
            jurusan:"Sistem Informasi"
        }
    ]
    expect(mhs).toContainEqual(
    {
        name:"Rama",
        jurusan:"Teknik Informatika"
    },
    {
        name:"Entong",
        jurusan:"Sistem Informasi"
    });
});