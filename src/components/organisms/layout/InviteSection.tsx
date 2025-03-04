import Button from "@/components/atoms/ui/Button";
import Link from "next/link";

export default function InviteSection() {
  return (
    <section className="py-16 bg-lightGray">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Te apasiona la cocina?</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Únete a nuestra comunidad y comparte tus recetas favoritas con miles de amantes de la cocina.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/auth/login">
          <Button className="min-w-[150px] px-6 py-3"> Registrarse</Button>
       
          </Link>
          <Link href="/about">

            <Button variant = "outline"> Conocer más</Button>
            
          </Link>
        </div>
      </div>
    </section>
  );
}
