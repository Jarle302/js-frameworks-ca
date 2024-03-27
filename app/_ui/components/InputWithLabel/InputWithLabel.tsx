import React from "react";

type InputProps = {
  type?: string;
  name: string;
  value: string;
  label: string;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  required?: boolean;
};

const InputWithLabel = ({
  type = "text",
  name = "",
  value = "",
  label = "label is currently empty",
  onChange,
  required = true,
}: InputProps) => {
  const id = `${name}--Contact-form`;
  return (
    <>
      <label htmlFor={id}>{label}</label>
      {type === "textArea" ? (
        <textarea
          className={"p-2 rounded-lg bg-neutral-800 text-zinc-200"}
          id={id}
          name={name}
          cols={30}
          rows={5}
          onChange={onChange}
          required={required ? true : false}
          defaultValue={value}></textarea>
      ) : (
        <input
          className={"p-2 rounded-lg bg-neutral-800 text-zinc-200"}
          onChange={onChange}
          type={type}
          name={name}
          id={id}
          value={value}
          required={required ? true : false}
          placeholder={value}
        />
      )}
    </>
  );
};

export { InputWithLabel };
