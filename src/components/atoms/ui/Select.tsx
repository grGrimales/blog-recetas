
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
}

export default function Select({ options, className = "", ...props }: SelectProps) {
  return (
    <select
      className={`w-full px-4 py-2 border border-neutral rounded-md bg-background text-neutral focus:ring-2 focus:ring-primary outline-none ${className}`}
      {...props}
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}
