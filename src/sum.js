export const sum=(...params) =>{
    let total=0;
    for(let num of params){
        total += num;
    }
    return total;
}
