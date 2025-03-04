interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
  }
  
  export default function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
    const baseStyles = "px-4 py-2 font-semibold rounded-md transition";
    const variants = {
      primary: "bg-primary text-background hover:bg-primary/80", // Usa primary y un hover más claro
      secondary: "bg-secondary text-neutral hover:bg-secondary/80", // Usa secondary y hover más claro
      outline: "min-w-[150px] border border-gray-400 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition", // Usa neutral y lightGray para hover
    };
  
    return (
      <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props} />
    );
  }
  