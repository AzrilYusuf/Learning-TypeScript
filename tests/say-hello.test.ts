import { sayHello } from "../src/say-hello";

describe('sayHello', function(): void {
    it('should return say hello Azril', function(): void {
        const name = "Azril";
        expect(sayHello(name)).toBe("Hello Azril");
    })
})