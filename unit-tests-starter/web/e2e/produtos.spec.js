import {test, expect} from "playwright/test"

test.beforeEach(async ({page, request}) => {
    const resposta = await request.post("http://localhost:3000/__reset")
    expect(resposta.status().toBe(204))
    await page.goto("/")
});

test("lista os produtos iniciais", async ({page}) =>{
    await expect(page.getByRole("heading" ,{name: "Produto"})).toBeVisible()
    await expect(page.getByRole("row")).toHaveCount(4)
    await expect(page.getByRole("cell",{name: "Coxinha"})).toBeVisible()

})