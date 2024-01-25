import React from "react";

interface FormFieldPops {
  type: string;
  maxW?: number;
  placeholder?: string;
  padding?: string;
  onChange?: (e: InputEventInit) => void | {};
  name?: string ;
  value?: string | number;
}

export default function FormField({
  type,
  maxW = 320,
  placeholder,
  padding = "10 20",
  onChange,
  name = "",
  value = "",
}: FormFieldPops) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className="bg-[#EDF1F7] w-full rounded border-1 border-solid border-[#E4E9F2]"
        style={{ maxWidth: maxW + "px", padding: padding + "px" }}
        onChange={onChange}
        name={name}
        value={value}
      />
    </div>
  );
}
