import Link from "next/link"


const NavSideBar = () => {
  return (
    <nav className="hidden sm:flex w-1/4 bg-slate-600 h-screen items-center text-center flex-col">
        <Link className="blue_button" href={'/'}>Musicians</Link>
        <Link className="blue_button" href={'/'}>Events</Link>
        <Link className="blue_button" href={'/'}>Venues</Link>
        <Link className="blue_button" href={'/'}>Instruments</Link>
    </nav>
  )
}

export default NavSideBar