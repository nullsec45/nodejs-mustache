import Mustache from "mustache";

test("tags", () => {
    const data = Mustache.render("Hello, {{name}}, my hobby is {{{hobby}}}", {
        name: "Fajar",
        hobby: "<b>Programming</b>"
    });

    expect(data).toBe("Hello, Fajar, my hobby is <b>Programming</b>");
});

