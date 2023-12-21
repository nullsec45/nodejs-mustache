import Mustache from "mustache";
import fs from "fs/promises";

test("List Object", async () => {
    const helloTemplate = await fs.readFile("./templates/students.mustache")
        .then(data => data.toString());

    const data = Mustache.render(helloTemplate, {
        students: [
            { name: "Fajar", value: 100 },
            { name: "Eko", value: 100 },
        ]
    });

    console.info(data);
    expect(data).toContain("Fajar");
    expect(data).toContain("Eko");
})