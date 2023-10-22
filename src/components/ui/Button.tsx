import { ReactNode } from "react";

type ButtonProps = {
  variant: "primary" | "outline" | "disabled";
  size: "sm" | "md" | "lg";
  content: ReactNode;
};

const buttonVariantStyles: Record<string, { className: string }> = {
  primary: {
    className: "bg-primary-100 text-white",
  },
  outline: {
    className: "border border-primary-100",
  },
  disabled: {
    className: "bg-gray-700/10 cursor-not-allowed",
  },
};

function Button({ content, variant, size }: ButtonProps) {
  const variantInfo = buttonVariantStyles[variant] || {
    className: "border",
  };

  const buttonSizeStyles =
    size === "sm"
      ? "px-4 py-2"
      : size === "md"
      ? "px-6 py-3"
      : size === "lg"
      ? "px-8 py-4"
      : "";

  return (
    <button
      disabled={variant === "disabled"}
      className={`${buttonSizeStyles} rounded ${variantInfo.className} ${
        variant === "disabled" ? "" : "hover:scale-105 ease duration-300"
      }`}
    >
      {content}
    </button>
  );
}

export default Button;
