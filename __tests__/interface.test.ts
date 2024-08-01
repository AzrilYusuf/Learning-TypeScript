import { Seller } from "../src/seller";

describe('Interface seller', () => {
    it('should support in typescript', () => {
        const seller: Seller = {
            id: 1,
            name: 'Toko Sepeda',
            address: 'Jakarta',
            nib: '1234567890',
            npwp: '1234567890'
        };
        
        seller.address = 'Surabaya';
        // seller.nib = 'dlkfjk';
        console.info(seller);
    });

    it('should support function interface', () => {
        interface AddFunction {
            (value1: number, value2: number): number;
        }

        const add: AddFunction = (value1: number, value2: number): number => {
            return value1 + value2;
        }

        console.info(add(2, 2));
        expect(add(2,2)).toBe(4);
    });

    it('should support indexable interface', () => {
        interface StringArray {
            [index: number]: string
        }
        const array: StringArray = ['a', 'b', 'c'];
        console.info(array);
    });

    it('should support indexable interface for non number index', () => {
        interface StringDictionarry {
            [key: string]: string;
        };

        const dictionary: StringDictionarry = {
            "name" : "Eko",
            "address": "Indonesia"
        };

        expect(dictionary["name"]).toBe("Eko");
        expect(dictionary["address"]).toBe("Indonesia");
    })
})