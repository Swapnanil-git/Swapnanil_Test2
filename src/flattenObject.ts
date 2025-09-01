export function flattenObject(obj: any, parentKey: string = '', result: any = {}): any {
    for (let key in obj) {
        let newKey = parentKey ? parentKey + "." + key : key;
        let value = obj[key];
        // check the type of the value - object and key not null - swp
        if (typeof value === 'object' && value !== null) {
            //check if array - swp
            if(Array.isArray(value)){
                for(let i = 0; i<value.length; i++){  // iterate through array - swp
                    // handling primitive array with indexes - swp
                    const el = value[i];
                    const k = newKey + "." + i;
                    if(el!==null && typeof el === 'object') 
                    {flattenObject(el, k, result);}
                    else{  // for primitive - swp
                        result[k] = el;
                    }
                }
            } else {
                flattenObject(value, newKey, result);  // if not array increase the depth - swp
            }
        } else {
            result[newKey] = value;
        }
    }
    return result;
}


const obj = {
    a: 1,
    b: {
        c: 'hello',
        d: { e: true },
    },
    f: [{ g: "world" }],
};

const flat = flattenObject(obj);
console.log(flat);