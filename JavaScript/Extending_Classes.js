// Extending Classes............

class Product{
    constructor(Item_name){
        this.Item_name = Item_name;
    }

    getItemName(){
        return this.Item_name + "is a Product";
    }

}

class Furniture extends Product {
    constructor(Item_name){
        super(Item_name);
    }

    getItemName(){
        return this.Item_name + "is a funrniture"
    }
}


let Pencil = new Product("pencil");
let chair = new Furniture("chair");

console.log(Pencil.getItemName())
console.log(chair.getItemName())