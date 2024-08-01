import { Customer, CustomerType } from "../src/type-alias"

describe('Enum', () => {
    it('should support enum', () => {
        const customer: Customer = {
            id: 1,
            name: 'Eko',
            type: CustomerType.PLATINUM
        }

        console.info(customer);
    })
})