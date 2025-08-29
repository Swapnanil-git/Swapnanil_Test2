const {flattenObject} = require('/home/user_tjwm77/Desktop/Swapnanil_Test2/Swapnanil_Test2/src/flattenObject.ts');

describe('flattenObject', ()=>{
    it('should flatten a nested object', ()=>{
        const input ={
            a:"1",
            b:{c:"2", d:{e:"3"}},
        };
        const output = flattenObject(input);
        expect(output).toEqual({
            a: "1",
            "b.c": "2",
            "b.d.e": "3"
        });

});
     it("Handling nested arrays correctly", ()=>{
        expect(flattenObject({})).toEqual({});
     });
});
