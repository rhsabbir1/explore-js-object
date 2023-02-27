// object literals 
const player ={};
player.name = 'Small';
player.age = 34;
player.bat =() =>{
    console.log('Start Batting');
}

console.log(player)
player.bat()


// Object consturactor 
const persn = new Object;
console.log(persn)

// Object creat method 
const alert = Object.create(null)
console.log(alert)