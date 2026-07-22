import Link from "next/link";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  external?: boolean;
  onClick?: () => void;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm md:text-base tracking-wide transition-all duration-200 cursor-pointer";
  const variants = {
    primary:
      "bg-main text-navy hover:bg-main-dark hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0",
    outline:
      "border-2 border-main text-main hover:bg-main hover:text-navy hover:-translate-y-0.5 active:translate-y-0",
  };
  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
