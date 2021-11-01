// class via declaration
/*
class Product{
    constructor(name,price,discount,prod_code){
        this.name = name;
        this.price = price;
        this.discount = discount;
        this.prod_code = prod_code;
    }
}


let Pencil = new Product("Apsara" , 20 , 4 , "00BAA98")

console.log(Pencil)

*/


const Product_1 = class Product{
    constructor(name,price,discount,prod_code){
        this.name = name;
        this.price = price;
        this.discount = discount;
        this.prod_code = prod_code;
    }
    get DiscountValue(){
        return this.discount
    }
};

let chair = new Product_1("chair", 599,10,'AB78')

console.log(chair)
chair.DiscountValue