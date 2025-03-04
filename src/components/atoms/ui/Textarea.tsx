interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export default function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={`w-full p-3 border outline-none border-neutral bg-background text-neutral rounded-md focus:ring-2 focus:ring-primary ${className}`}
      {...props}
    />
  );
}
