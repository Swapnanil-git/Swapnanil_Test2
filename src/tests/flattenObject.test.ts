import { flattenObject } from '../flattenObject.ts';

describe('flattenObject', () => {
    it('should flatten a nested object', () => {
        const input = {
            a: "1",
            b: { c: "2", d: { e: "3" } },
        };
        const output = flattenObject(input);
        expect(output).toEqual({
            a: "1",
            "b.c": "2",
            "b.d.e": "3"
        });

    });
    it("Handling nested arrays correctly", () => {
        expect(flattenObject({})).toEqual({});
    });
});

it('handles null values in top level and nests',()=>{
    const input = {
        a:null,
        b:{c:null,d:5},
    }
    const out = flattenObject(input);
    expect(out).toEqual({
        "a": null,
        "b.c": null,
        "b.d": 5
    });
})

it('flattens primitive array with indexes',()=>{
    const input = {
        a:[1,2,3]
    }
    const out = flattenObject(input);
    console.log(out);
    expect(out).toEqual({
        "a.0": 1,
        "a.1": 2,
        "a.2": 3
    });
})

it('flattens objects with arrays inside nested objects',()=>{
    const input = {
        user:{
            name: "John",
            tags: [{t: "x"},{t: "y"}]
        }
    };
    const out = flattenObject(input);
    console.log(out);
    expect(out).toEqual({
        "user.name": "John",
        "user.tags.0.t": "x",
        "user.tags.1.t": "y"
    });
})

it('return empty result for empty array',()=>{
    const input = {a: []};
    const out = flattenObject(input);
    expect(out).toEqual({});
})
