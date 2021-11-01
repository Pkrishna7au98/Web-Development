/* function cookMaggi(maggie, water , pot){
    console.log("your maggi will be ready in " + maggie*2+ " " + "minutes")
}

cookMaggi(4,1,1);  */

let bread1 = prompt("which bread you want : ");
let veggies = prompt("the veggies you want : ");
let sauces  = prompt("which sauce you want : ");

function SandwichMake(bread, veggie, sauce){
        let sandwich = bread + 'bread' + veggie+ 'veggies' + sauce +' sauces' ;
    return sandwich;
}

let vegSandWich = SandwichMake(bread1, veggies , sauces);