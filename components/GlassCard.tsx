import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function GlassCard({ children, className = "", ...props }: GlassCardProps) {
  return (
    <div 
      className={`bg-foreground/5 border border-foreground/10 p-6 rounded-none ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}