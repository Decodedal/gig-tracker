import { prisma } from "../../../../../db/prisma"

async function page() {

  //const instruments = await prisma.instrument.findMany() 

  return (
    <div className="flex flex-col gap-10 m-10 bg-red-200 w-full">
      <h1>New Musician</h1>
      <form className="flex flex-col gap-10">
        <div>
          <label htmlFor="name">Name : </label>
          <input className="p-1 rounded" name="name" id="name" type="text"/>
        </div>
        <div>
          <label htmlFor="address">Address : </label>
          <input className="p-1 rounded" name="Address" id="Address" type="text"/>
        </div>
        <div>
          <label htmlFor="address">Password : </label>
          <input className="p-1 rounded" name="Password" id="Password" type="text"/>
        </div>
        <div>
        </div>
      </form>
    </div>
  )
}

export default page