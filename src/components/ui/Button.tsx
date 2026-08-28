import { ButtonHTMLAttributes, forwardRef, ElementType } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  as?: ElementType;
  href?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", isLoading = false, children, disabled, as, href, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      primary: "bg-amber-600 text-zinc-950 hover:bg-amber-500 active:bg-amber-700",
      secondary: "bg-zinc-800 text-zinc-100 hover:bg-zinc-700 active:bg-zinc-900",
      outline: "border border-zinc-700 bg-transparent hover:bg-zinc-800 active:bg-zinc-900",
      ghost: "bg-transparent hover:bg-zinc-800 active:bg-zinc-900",
    };

    const sizes = {
      sm: "h-9 px-3 text-sm",
      md: "h-11 px-4 text-base",
      lg: "h-12 px-6 text-lg",
    };

    const Component = as || (href ? "a" : "button");

    const buttonProps = {
      ref,
      className: `${baseStyles} ${variants[variant]} ${sizes[size]} rounded-lg ${className}`,
      disabled: disabled || isLoading,
      ...(href && { href }),
      ...props,
    };

    return (
      <Component {...buttonProps}>
        {isLoading && (
          <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        )}
        {children}
      </Component>
    );
  }
);

Button.displayName = "Button";