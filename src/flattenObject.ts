function flattenObject(obj:any, parentKey: string = '', result: any = {}): any {
    for (let key in obj){
        let newKey = parentKey ?parentKey + "." + key : key;
        let value = obj[key];
        // check the type of the value - object and key not null - swp
        if (typeof value === 'object' && value !== null){
            //check if array - swp
            if(Array.isArray(value)){
                for(let i = 0; i<value.length; i++){  // iterate through array - swp
                    flattenObject(value[i], newKey + "." + i, result);
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


const obj ={
    a:1,
    b:{
        c:'hello',
        d:{e:true},
    },
    f:[{g:"world"}],
};

const flat = flattenObject(obj);
console.log(flat);
module.exports = { flattenObject };