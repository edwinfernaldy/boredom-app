import { ReactNode } from "react";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  loading: boolean;
  className?: string;
}

export default function Button(props: ButtonProps) {
  const { onClick, children, loading, className } = props;

  return (
    <button
      className={`px-4 py-2 border fixed bg-black/20 border-white/20  rounded-xl text-center ${className}`}
      disabled={loading}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
