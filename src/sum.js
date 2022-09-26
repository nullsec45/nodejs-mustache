export const sum=(...params) =>{
    let total=0;
    for(let num of params){
        total += num;
    }
    return total;
}

export const sumAll=(numbers) => {
    let total=0;

    for(let number of numbers){
        total +=number;
    }

    return total;
}