import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 executive-shadow",
        hero: "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 glow-effect font-bold tracking-wide",
        executive: "gradient-card text-foreground border border-card-border hover:scale-105 executive-shadow hover:glow-effect",
        outline: "border border-primary text-primary bg-background/50 hover:bg-primary hover:text-primary-foreground hover:scale-105",
        secondary: "bg-muted text-muted-foreground hover:bg-muted/80 hover:scale-105",
        ghost: "text-foreground hover:bg-accent hover:text-accent-foreground hover:scale-105",
        gradient: "gradient-hero text-white hover:opacity-90 hover:scale-105 font-bold",
        accent: "bg-accent-blue text-white hover:bg-accent-purple hover:scale-105 transition-all duration-500",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-md px-4",
        lg: "h-14 rounded-lg px-10 text-base",
        xl: "h-16 rounded-xl px-12 text-lg",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };