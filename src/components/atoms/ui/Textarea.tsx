
export default function Textarea({
  className = "",
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={`w-full p-3 border outline-none border-neutral bg-background text-neutral rounded-md focus:ring-2 focus:ring-primary ${className}`}
      {...props}
    />
  );
}
