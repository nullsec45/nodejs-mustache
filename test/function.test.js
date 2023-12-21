import Mustache from "mustache";
import fs from "fs/promises";

test("Function", async () => {
    const parameter = {
        name: "Fajar",
        upper: () => {
            return (text, render) => {
                return render(text).toUpperCase();
            }
        }
    }

    const data = Mustache.render("Hello {{#upper}}{{name}}{{/upper}}", parameter);
    console.info(data);
    expect(data).toContain("FAJAR");
})