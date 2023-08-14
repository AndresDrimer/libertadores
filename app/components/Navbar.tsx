import Link from "next/link"
import Image from "next/image"
import { getServerSession } from "next-auth/next"
import { options } from "@/app/api/auth/[...nextauth]/options"

export default async function Navbar() {
    const session = await getServerSession(options)
    return (
        <nav className="bg-blue-800 p-4">
            <ul className="flex justify-evenly text-xs font-bold">
                <li><Link href="/"><Image src="/logo-liber.png" width={50} height={60} alt="logo"/></Link></li>
                {session ?  <li><Link href="/api/auth/signout">Sign Out</Link></li> : <li><Link href="/api/auth/signin">Sign In</Link></li>}
             
                <li><Link href="/server">Server</Link></li>
                <li><Link href="/client">Client</Link></li>
                <li><Link href="/extra">Admin Only</Link></li>
            </ul>
        </nav>
    )
}