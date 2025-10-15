"use client"
import { registerUser } from "@/actions/register";
import { Button, Form, Input } from "@heroui/react";
import React, { ChangeEvent, useState } from "react";

interface Iprops{
  onClose: () => void;
}

const RegistrationForm = ({onClose}:Iprops) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
   
    e.preventDefault();
    console.log("Form submitted:", formData);
    const result = await registerUser(formData)
    onClose();
  };

  return ( 
    <Form className="w-full" onSubmit={handleSubmit}>
      <Input
        aria-label="Email"
        isRequired
        name="email"
        placeholder="Введіть email"
        type="email"
        value={formData.email}
        className={{
          inputWrapper: "bg-default-100",
          input: "text-sm focus:outline-none"
        }}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: e.target.value })}
        validate={(value:string) => {
          if (!value) return "Пошта обов'язкова";
          if (!validateEmail(value)) return "Некорректний email";
          return null;
        }}
      />
      <Input
        isRequired
        name="password"
        placeholder="Введіть пароль"
        type="password"
        value={formData.password}
        className={{
          inputWrapper: "bg-default-100",
          input: "text-sm focus:outline-none"
        }}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, password: e.target.value })}
        validate={(value: string) => {
          if (!value) return "Пароль обов'язковий";
          if (value.length < 6) return "Пароль не менше 6 символів";
          return null;
        }}
      />
      <Input
        isRequired
        name="confirmPassword"
        placeholder="Підтвердіть пароль"
        type="password"
        value={formData.confirmPassword}
        className={{
          inputWrapper: "bg-default-100",
          input: "text-sm focus:outline-none"
        }}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, confirmPassword: e.target.value })}
        validate={(value: string) => {
          if (!value) return "Пароль для підтвердження обов'язковий";
          if (value !== formData.password) return "Паролі не співпадають";
          return null;
        }}
      />
      <div className="flex w-[100%] gap-4 items-center pt-8 justify-end">
        <Button variant="light" onPress={onClose}>Відмінити</Button>
        <Button color="primary" type="submit">Зареєструватися</Button>
      </div>
    </Form>
  );
}

export default RegistrationForm;