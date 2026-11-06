import type { HTMLAttributes, ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, "className">;

export function Container({ children, className = "", ...props }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-content px-6 sm:px-8 lg:px-10 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
