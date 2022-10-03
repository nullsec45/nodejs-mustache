import {ProductService} from "../src/product-service.js";
import {getAllProducts, getProductById} from "../src/database.js";

jest.mock("../src/database.js", () =>{
    const originalModule=jest.requireActual("../src/database.js"); 

    return{
        __esModule:true,
        ...originalModule,
        // getAllProducts:jest.fn(),
        getProductById:jest.fn()
    }
});

test.failing("not mock impelementation getAllProducts", () => {
    ProductService.findAll(1);
});

test("mock modules getProductById", () =>{
    getProductById.mockImplementation((id) => {
        return {
            id:id,
            name:"Product Mock"
        } 
    });
    const product=ProductService.findById(1);
    expect(product).toEqual({
        id:1,
        name:"Product Mock"
    });
});
