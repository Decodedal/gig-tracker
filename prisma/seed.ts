import { PrismaClient } from "@prisma/client";
import { hash } from 'bcrypt'

const prisma = new PrismaClient()

async function main(){
    const password =await hash('password', 12)
    const bandMembersData = [
        {
          name: "John Doe",
          address: "123 Main St",
          email: "johndoe@example.com",
          password: password,
          admin: false,
          instrumentId: 1,
        },
        {
          name: "Jane Smith",
          address: "456 Elm St",
          email: "janesmith@example.com",
          password: password,
          admin: true,
          instrumentId: 2,
        },
        // Add more band members as needed
      ];

      await prisma.instrument.createMany({
        data:[
            {name:"Male Vocal"},
            {name:"Female Vocal"},
            {name:"Sax"},
            {name:"Trumpet"},
            {name:"Trombone"},
            {name:"Bass"},
            {name:"Guitar"},
            {name:"Drums"},
            {name:"Keyboard"},
        ]
    })
    
    const user = await prisma.bandMember.createMany({
        data:bandMembersData
    })
        
 }

main()
    .then(()=> prisma.$disconnect())
    .catch(async(e) =>{
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })