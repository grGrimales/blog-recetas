export default function Input({
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`w-full px-4 py-2 border border-neutral rounded-md bg-background text-neutral focus:ring-2 focus:ring-primary outline-none ${className}`}
      {...props}
    />
  );
}
