import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import UserCard from "../components/UserCard"
import { redirect } from "next/navigation"
import Image from "next/image"

export default async function ServerPage() {
    const session = await getServerSession(options)

    if (!session) {
        redirect('/api/auth/signin?callbackUrl=/server')
        
    }

    return (
        <section className="flex flex-col gap-6">
            <Image src={"/background-logo.jpg"} fill objectFit="contain" alt="bck" className="z-[-10]bg-local"/>
            <UserCard user={session?.user} pagetype={"Server"} />
        </section>
    )

}