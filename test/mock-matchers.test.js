import { calculate } from "../src/sum.js";

test("test calculate", () =>{
    const callback=jest.fn();

    calculate([10,10,10], callback);
    calculate([10,10,10, 10,10], callback);

    expect(callback).toHaveBeenCalled(); //pernah dipanggil
    expect(callback).toHaveBeenCalledTimes(2);  //dipanggil secara dua kali
    expect(callback).toHaveBeenCalledWith(30);   //dipanggil dengan total 30
    expect(callback).toHaveBeenCalledWith(50);   //dipanggil dengan total 50
});