import { options } from "./api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import UserCard from "./components/UserCard"

import UIIngresar from "@/app/components/UIIngresar"
export default async function Home() {
  const session = await getServerSession(options)



  return (
    <>
      {session ? (
        <UserCard user={session?.user} pagetype={"Home"} />
      ) : (
        <div>
      
       
        <UIIngresar />



        </div>
      )}
    </>
  )
}