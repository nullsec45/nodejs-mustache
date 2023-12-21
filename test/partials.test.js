import Mustache from "mustache";
import fs from "fs/promises";

test("Partials", async () => {
    const headerTemplate = await fs.readFile("./templates/header.mustache").then(data => data.toString());
    const footerTemplate = await fs.readFile("./templates/footer.mustache").then(data => data.toString());
    const contentTemplate = await fs.readFile("./templates/content.mustache").then(data => data.toString());

    const data = Mustache.render(contentTemplate,
        {
            title: "Belajar Partials",
            content: "Rama Fajar",
        },
        {
            header: headerTemplate,
            footer: footerTemplate
        }
    );

    console.info(data);
    expect(data).toContain("Belajar Partials");
    expect(data).toContain("Rama Fajar");
    expect(data).toContain("Programmer Zaman Now");
})