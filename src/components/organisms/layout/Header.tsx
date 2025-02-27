import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="py-6 px-6 flex justify-between items-center max-w-7xl mx-auto">
      <h1 className="text-neutral text-3xl font-bold">Recipe Blog</h1>
      <Navbar />
    </header>
  );
}
