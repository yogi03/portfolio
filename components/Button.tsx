import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "glass" | "ghost";
  href?: string;
  target?: string;
  rel?: string;
}

export function Button({ 
  children, 
  variant = "primary", 
  className = "", 
  href, 
  ...props 
}: ButtonProps) {
  
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 font-medium transition-all duration-300 motion-reduce:transition-none focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 active:scale-[0.98] rounded-none";
  
  const variants = {
    primary: "bg-foreground text-background hover:bg-foreground/90",
    glass: "glass-panel hover:bg-white/5 text-foreground",
    ghost: "bg-transparent border border-foreground/20 text-foreground hover:bg-foreground/5"
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} target={props.target} rel={props.rel} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
}