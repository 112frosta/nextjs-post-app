import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(
        "bg-blue-700 text-white px-4 py-2.5 rounded-lg font-medium hover:bg-blue-800 transition-colors duration-150",
        props?.className
      )}
    >
      {props.children}
    </button>
  );
}
