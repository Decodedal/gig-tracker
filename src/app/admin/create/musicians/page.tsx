import { prisma } from "../../../../../db/prisma"
import { hash } from "bcrypt"

async function page() {

  const instruments = await prisma.instrument.findMany() 

  async function addMusician(data:any){
    'use server'
    const plaintext = data.get('password')
    const pwHash = await hash(plaintext, 10)

    const musican = await prisma.bandMember.create({
      data:{
        name:data.get('name'),
        password: pwHash,
        address:data.get('address'),
        email:data.get('email'),
        admin:false
      }
    })

    // await prisma.musicianInstrument({
    //   data:{
    //     musican:musican.id
    //   }
    // })

    console.log(musican.id)
   
  }

  return (
    <div className="flex flex-col gap-10 m-10 w-full">
      <h1>New Musician</h1>
      <form action={addMusician} className="flex-col gap-10 flex " >
        <div>
          <label htmlFor="name">Name : </label>
          <input className="p-1 rounded border-2" name="name" id="name" type="text" required/>
        </div>
        <div>
          <label htmlFor="address">Address : </label>
          <input className="p-1 rounded border-2" name="address" id="address" type="text" required/>
        </div>
        <div>
          <label htmlFor="email">Email : </label>
          <input className="p-1 rounded border-2" name="email" id="email" type="email" required/>
        </div>
        <div>
          <label htmlFor="password">Password : </label>
          <input className="p-1 rounded border-2" name="password" id="password" type="text" defaultValue="gig1" required/>
        </div>
        <div>
          <h5 className="pl-2 underline">Select all Instruments associated with musician</h5>
          {
            instruments.map((instrument, i) =>{
              const checkboxId = `instrument-${i}`;
              return <div key={i} className="p-2">
                <label htmlFor={checkboxId} className="pr-3 hover:cursor-pointer">{instrument.name}</label>
                <input className="hover:cursor-pointer" type="checkbox" name={String(instrument.id)} id={checkboxId}/>
              </div>
            })
          }
        </div>
        <h1>yooo</h1>
        <input className="border border-blue-700 bg-blue-700 text-white hover:bg-white hover:text-blue-700 transition-all duration-300" type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default page