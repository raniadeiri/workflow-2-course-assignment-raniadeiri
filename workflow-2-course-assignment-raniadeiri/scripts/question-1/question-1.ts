// Create User interface. The types are:
//  school: string
//  firstName: string
//  lastName: string
//  age: number
//  isAdmin: OPTIONAL boolean

// Convert the function to TypeScript, making sure to use the
//  User interface as the return type

interface User{
  school:string;
  firstName:string;
  lastname:string;
  age:number;
  isAdmin?:boolean;
  
}
let user1 : User={
  school:'Noroff',
  firstName:"Ola",
  lastname:"Nordmann",
  age:18

}
let user2 : User={
  school:'Noroff',
  firstName:"Kari",
  lastname:"Nordmann",
  age:36,
  isAdmin:true,

}

  console.log(user1,user2); 
export{};
