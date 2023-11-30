import { FC } from "react";

import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

import { VariantProps, cva } from "class-variance-authority";

export const InputStyles = cva(["transition-colors"], {
    variants: {
        variant: {
            default: ["bg-secondary", "hover:bg-secondary-hover"],
            ghost: ["hover:bg-gray-100"],
            dark: ["bg-secondary-dark", "hover:bg-secondary-dark-hover", "text-secondary"]
        },
        size: {
            default: ["rounded", "p-2"],
        }
    },
    defaultVariants: {
        size: "default",
        variant: "default"
    }
})

type InputProps = & VariantProps<typeof InputStyles> & ComponentProps<"input">
export const Input: FC<InputProps> = ({ size, className, ...props }): JSX.Element =>
    <input type="text" className={twMerge(InputStyles({ size }), className)} {...props} />
