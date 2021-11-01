const num = new Array(1,2,3,4,5,6,7,8,9);


//push method

num.push(33,36)
console.log(num)


// Unshift   
//------num.unshift(0)

console.log(num.unshift(0))

//shift 
// num.shift()

const names = ['ap','dd','gd','sd', 'ap', 'ap', 'sd', 'dd'];
// console.log(names.indexOf('ap',1))  // index of ap after index 1
// console.log(names.lastIndexOf('ap'))  // index of ap from last
// console.log(names.includes('sd',4))


// --------------------------------------------------------
// Includes method only work for primitive data type not for user defined. 
//  SO WE WILL USE HERE THE find METHOD


let channels = [{
    name: "apna channel",
    subs: 10000
    },{
    name: "apun ka channel",
    subs: 10980
    },{
    name: "mera ",
    subs: 100
    },{
    name: "tera",
    subs: 1000
    },{
    name: "apnanel",
    subs: 233223
    }
];


//---------the below is inline function to get the required object
console.log(channels.find(function(element){
    return element.name === "tera"
}))

//------------use of arrow function to get the object

console.log(channels.find((element) => {
    return element.name === 'tera' 
}))

/// or the above expression can be written as 

// console.log(channels.find((element) => element.name === 'tera'))



//-------------Concatanation of two arrays--------

let boys = ['krishna', 'raju','deepak','yogesh']
let girls  = ['last' , 'khushi' , 'anita','pragya']

let combined = boys.concat(girls)


//------------Slicing array-------

console.log(combined.slice(4))


//--------Spread Operators----

let combined_new = [...boys,...girls]
console.log(combined_new)

//--------------- Array with Loops---------

//    FOR >> LOOP

for(let i=0 ; i<combined.length ; i++){
    console.log(combined[i])
}

console.log('----------------------------------------')
// FOR OF >> loop

for (let name of combined){
    console.log(name)
}

console.log('----------------------------------------')
//    FOR EACH >> loop

//there is no loop in JS as for each, but there is a method of arrays that can work as for as loop

combined.forEach(function(ans,ind){
    console.log(ans);
})

console.log('----------------------------------------')

//-------methods related to string and Array----

// JOIN method
let stud = ['k','r','i','s','h','n','a']
console.log(stud.join("<>"))

let new_boy =stud.join();           // try with strings as well to see the difference
console.log(new_boy.split("-----"))


//--------FILTER METHOD------- Extending find method


let YT_Channels = [{
    name: "apna channel",
    subs: 10000
    },{
    name: "apun ka channel",
    subs: 10980
    },{
    name: "mera ",
    subs: 100
    },{
    name: "tera",
    subs: 1000
    },{
    name: "apnanel",
    subs: 233222
    }
];

console.log(YT_Channels.filter(subscribers=>  {
    return subscribers.subs > 100
}))

// map method-----

console.log(YT_Channels.map(subscribe => subscribe.subs * 2))

