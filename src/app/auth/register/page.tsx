import AuthForm from "@/components/molecules/auth/AuthForm";

export default function RegisterPage() {
  return (
    <div className="container relative min-h-screen grid lg:grid-cols-2">
      {/* Sección izquierda con el fondo de color primario */}
      <div className="relative hidden lg:flex flex-col bg-primary text-white p-10">
        <div className="relative z-20 flex items-center text-lg font-medium">Recipe Blog</div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
            &quot;La cocina es el corazón del hogar, donde las recetas se convierten en recuerdos.&quot;
            </p>
            <footer className="text-sm">- Anónimo</footer>
          </blockquote>
        </div>
      </div>

      {/* Sección derecha con el formulario */}
      <div className="lg:p-8 flex items-center justify-center">
        <AuthForm type="register" />
      </div>
    </div>
  );
}
