import type { ReactNode, ElementType } from "react";

export interface ContainerProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

export function Container({ as: Tag = "div", children, className }: ContainerProps) {
  return (
    <Tag
      className={`mx-auto w-full max-w-container px-6 md:px-8 ${className ?? ""}`}
    >
      {children}
    </Tag>
  );
}
