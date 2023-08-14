import Image from "next/image";
import Link from 'next/link' 


function UIIngresar() {
  return (
    <section className="w-full mx-auto text-center">
      <div className="h-[80vh] relative">
        
       
   

        <Image src={"/background-logo.jpg"} fill objectFit="contain" alt="coso" className="z-[-10]"/>

        <button className="w-[12%] h-[100px] bg-black flex items-center justify-center mx-auto mt-20 transition-all duration-200   rounded-xl">

        <Link href="/api/auth/signin" className="absolute text-center text-5xl animate-bounce transition duration-600">ENTRAR</Link></button>
      </div>
    </section>
  );
}

export default UIIngresar;
