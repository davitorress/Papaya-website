import { twMerge } from "tailwind-merge"
import { tv, VariantProps } from "tailwind-variants"

const styles = tv({
  base: "px-4 py-2 text-base rounded-md flex gap-2 items-center transition-colors duration-700",
  variants: {
    theme: {
      primary: "bg-primary text-white",
      ghost: "bg-transparent text-white",
      "ghost-dark": "bg-transparent text-black",
      disabled: "bg-gray-200 text-gray-400",
    },
    hover: {
      primary: "hover:bg-secondary",
      ghost: "hover:bg-primary hover:text-white",
      "ghost-dark": "hover:bg-primary",
    },
  },
  defaultVariants: {
    theme: "ghost",
    hover: "ghost",
  },
})

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof styles> {
  children: React.ReactNode
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

export default function Button({
  children,
  startIcon,
  endIcon,
  type,
  theme,
  hover,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type ?? "button"}
      className={twMerge(styles({ theme, hover }), className)}
      {...props}
    >
      {startIcon}
      {children}
      {endIcon}
    </button>
  )
}
