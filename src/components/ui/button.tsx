import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-glow hover:scale-[1.02] hover:bg-primary/90",
        secondary: "bg-white/10 text-white backdrop-blur hover:bg-white/15",
        outline: "border border-white/15 bg-white/5 hover:bg-white/10",
        ghost: "hover:bg-white/10"
      },
      size: { default: "h-11 px-6", sm: "h-9 px-4", lg: "h-14 px-8 text-base", icon: "size-10" }
    },
    defaultVariants: { variant: "default", size: "default" }
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild, children, ...props }, ref) => {
  const classes = cn(buttonVariants({ variant, size, className }));
  if (asChild && React.isValidElement<{ className?: string }>(children)) {
    return React.cloneElement(children, { className: cn(classes, children.props.className) });
  }
  return <button className={classes} ref={ref} {...props}>{children}</button>;
});
Button.displayName = "Button";

export { Button, buttonVariants };
