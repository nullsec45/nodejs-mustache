import Mustache from "mustache";

test("Menggunakan Mustache", () => {
    const data = Mustache.render("Hello {{name}}", { name: "Fajar" });
    expect(data).toBe("Hello Fajar");
})

test("Menggunakan Mustache Cache", () => {
    Mustache.parse("Hello {{name}}");

    const data = Mustache.render("Hello {{name}}", { name: "Fajar" });
    expect(data).toBe("Hello Fajar");
})