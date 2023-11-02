import Mustache from "mustache";
import fs from "fs/promises";

test("Mustache File", async () => {
    const helloTemplate = await fs.readFile("./templates/hello.mustache")
        .then(data => data.toString());

    const data = Mustache.render(helloTemplate, {
        title: "Fajar"
    });

    console.info(data);
    expect(data).toContain("Fajar");
})

test("Swction Not Show", async () => {
    const helloTemplate = await fs.readFile("./templates/person.mustache")
        .then(data => data.toString());

    const data = Mustache.render(helloTemplate, {});

    console.info(data);
    expect(data).not.toContain("Hello Person");
})

test("Swction Show", async () => {
    const helloTemplate = await fs.readFile("./templates/person.mustache")
        .then(data => data.toString());

    const data = Mustache.render(helloTemplate, {
        person: {
            name: "Fajar"
        }
    });

    console.info(data);
    expect(data).toContain("Hello Person");
})