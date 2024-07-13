// GlobalInput.tsx
import React, { FC, InputHTMLAttributes } from "react";

interface TextFieldrops extends InputHTMLAttributes<HTMLInputElement> {
  onInvalidMessage?: string;
}

export const TextField: FC<TextFieldrops> = ({
  name,
  id,
  required,
  placeholder,
  onInvalidMessage,
  ...props
}) => {
  return (
    <input
      type="text"
      name={name}
      id={id}
      required={required}
      placeholder={placeholder}
      onInvalid={(e) =>
        (e.target as HTMLInputElement).setCustomValidity(
          onInvalidMessage || "This field is required"
        )
      }
      onInput={(e) => (e.target as HTMLInputElement).setCustomValidity("")}
      {...props}
    />
  );
};
