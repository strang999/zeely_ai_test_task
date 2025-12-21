import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "../lib/cn";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  "aria-label": string;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          "inline-flex h-9 w-9 items-center justify-center rounded-lg transition-colors",
          "hover:bg-muted focus-visible:outline-none focus-visible:ring-2",
          "disabled:pointer-events-none disabled:opacity-30",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";
