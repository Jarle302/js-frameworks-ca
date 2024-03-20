"use client";
import React, { useState } from "react";
import { InputWithLabel } from "../InputWithLabel/InputWithLabel";

const ContactForm = () => {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    SetFormData((prev) => {
      const { name, value } = event.target;
      return {
        ...prev,
        [name]: value,
      };
    });
    console.log({ formData });
  }
  const [formData, SetFormData] = useState({
    fullName: "Your full name",
    subject: "Your subject here",
    email: "name@email.com",
    body: "Your text here",
  });

  return (
    <form
      className={
        "flex bg-zinc-200 flex-col w-[200px] p-3 drop-shadow-md rounded-lg"
      }>
      <InputWithLabel
        value={formData.fullName}
        name="fullName"
        label="Full Name"
        onChange={handleChange}
      />
      <InputWithLabel
        value={formData.subject}
        name="subject"
        label="Subject"
        onChange={handleChange}
      />
      <InputWithLabel
        type="email"
        value={formData.email}
        name="email"
        label="Email"
        onChange={handleChange}
      />
      <InputWithLabel
        type="textArea"
        value={formData.body}
        name="body"
        label="Body"
        onChange={handleChange}
      />
      <button
        className={"text-zinc-200 bg-neutral-800 mt-2 rounded-lg p-2"}
        onClick={() => console.log({ formData })}>
        Submit
      </button>
    </form>
  );
};

export { ContactForm };
