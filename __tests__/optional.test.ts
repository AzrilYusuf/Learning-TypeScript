describe('Optional Parameter', () => {
    it('should support null and undefined', () => {
        // * name?: string | null -> it means name can be null or undefined
        const sayHello = (name?: string | null) => {
            if (name) {
                console.info(`Hello ${name}`);
            } else {
                console.info('Hello');
            }
        }

        sayHello("Azril");
        sayHello();
        const name: string | undefined = undefined;
        sayHello(name);
    })
})