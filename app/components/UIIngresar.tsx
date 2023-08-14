import Image from "next/image";
import Link from 'next/link' 


function UIIngresar() {
  return (
    <section className="w-full mx-auto text-center">
      <div className="h-[80vh] relative">
        
       
   

        <Image src={"/background-logo.jpg"} fill objectFit="contain" alt="coso" />

        <button className="bg-yellow-700/50 flex items-center justify-center mx-auto mt-20 rounded-xl text-center text-3xl animate-bounce px-8 py-4">

        <Link href="/api/auth/signin" className=" z-1 ">ENTRAR</Link></button>
      </div>
    </section>
  );
}

export default UIIngresar;
