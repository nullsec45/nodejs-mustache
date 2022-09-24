export class MyException extends Error{

}

export const callMe=(name) => {
    if(name === "salah"){
        throw new MyException("Ups kode kamu error");
    }else{
        return "OK";
    }
}