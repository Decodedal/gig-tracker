import Link from "next/link"
import { prisma } from "../../../../db/prisma"

async function Musicians() {

    const musicians = await prisma.bandMember.findMany({
        include:{
            musicianInstrument:{
                include:{
                    instrument:true
                }
            }
        }
    })


    console.log(musicians[0].musicianInstrument)

    // const instruments = await prisma.instrument.findMany()

    const displayMusicians = musicians.map((player)=>{
        return<div key={player.id} className="flex p-4 ml-10 mr-10 bg-slate-200 justify-around items-center ">
            <p>{player.name}</p>
            <div>
                {player.musicianInstrument.map(inst =>{
                    return <p key={inst.instrument.id + player.id}>{inst.instrument.name}</p>
                })}
            </div>
            <p>{player.address}</p>
        </div>
    })
    

  return (
    <>    
        <div className="flex flex-col gap-10 m-10  w-full">
            <Link href='/admin/create/musicians' className="create_button">Create New Musician</Link>
            <div className="flex ml-10 mr-10 justify-around font-bold text-xl">
                <h2>Name</h2>
                <h2>Instrument</h2>
                <h2>Location</h2>
            </div>
            {displayMusicians}
        </div>
    </>

  )
}

export default Musicians