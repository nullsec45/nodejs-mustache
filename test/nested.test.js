import Mustache from "mustache";

test("Nested Object", () => {
    Mustache.parse("Hello {{name}}");

    const data = Mustache.render("Hello {{person.name}}", {
        person: {
            name: "Fajar"
        }
    });
    expect(data).toBe("Hello Fajar");
})