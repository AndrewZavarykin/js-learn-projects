import { initApp } from "./paragraphs";

describe("paragraphs test", () => {
    
    initApp();

    test("scriptShouldRenderDivContainerWithClassContainer", () => {
        expect(document.querySelector(".container")).not.toBeNull();
    })

    test("divContainerShouldHaveThreeParagraphsWithClassParItem", () => {
        const container = document.querySelector(".container");
        const children = container.children;
        expect(children).toHaveLength(3);
        for (let child of children) {
            expect(child.tagName).toMatch("P");
            expect(child.className).toMatch("par-item");
        }
    })

    test("scriptShouldRenderInputWithIdAndClassInputAndTypeText", () => {
        const input = document.querySelector(".input");
        expect(input).not.toBeNull();
        expect(input.type).toBe("text");
        expect(input.id).toBe("input");
        expect(input.className).toBe("input");
    })

    test("scriptShouldRenderButtonWithClassButtonAndTextAddParagraphAndHiddenTrue", () => {
        const button = document.querySelector(".button");
        expect(button).not.toBeNull();
        expect(button.textContent).toBe("Add paragraph");
        expect(button.hidden).toBeTruthy();

    })

    test("buttonShouldBeHiddenTrueWhenInputEmpty", () => {
        const input = document.querySelector("#input");
        input.value = "  ";
        const button = document.querySelector(".button");
        input.dispatchEvent(new Event('input'));
        expect(button.hidden).toBe(true);
    })

    test("buttonShouldBeHiddenFalseWhenInputNotEmpty", () => {
        const input = document.querySelector("#input");
        input.value = "123";
        const button = document.querySelector(".button");
        input.dispatchEvent(new Event('input'));
        expect(button.hidden).toBe(false);
    })
});
