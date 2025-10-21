"use client";

import { createIngredient } from "@/actions/ingredient";
import { CATEGORY_OPTIONS, UNIT_OPTIONS } from "@/constants/select-options";
// import { useIngredientStore } from "@/store/ingredient.store";
import { Button, Form, Input, Select, SelectItem } from "@heroui/react";
import { useState, useTransition } from "react";

const initialState = {
  name: "",
  category: "",
  unit: "",
  pricePerUnit: null as number | null,
  description: ""
};

const IngredientForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState(initialState);
  // const { addIngredient } = useIngredientStore();
  // const [isPending, startTransition] = useTransition();

  const handleSubmit = async (formData: FormData) => { 
    // startTransition(async () => {
      // await addIngredient(formData);
      // const storeError = useIngredientStore.getState().error;

      // if (storeError) {
      //   setError(storeError);
      // } else {
      //   setError(null);
      //   setFormData(initialState);
      // }
    // });
    console.log("Form submitted: ", formData);
    const result = await createIngredient(formData);
    if (result.error) {
      setError(result.error);
    } else {
      setError(null);
      // setFormData(initialState);
    }
    setFormData(initialState);
  };

  return (
    <Form className="w-[400px]" action={handleSubmit}>
      {/* {error && <p className="text-red-500 mb-4">{error}</p>} */}

      <Input
        isRequired
        name="name"
        placeholder="Введіть назву інградієнта"
        type="text"
        value={formData.name}
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm focus:outline-none"
        }}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        validate={(value) => {
          if (!value) return "Назва обв'язково";
          return null;
        }}
      />

      <div className="flex gap-2 w-full">
        <div className="w-1/3">
          <Select
            isRequired
            name="category"
            placeholder="Категорія"
            selectedKeys={formData.category ? [formData.category] : []}
            classNames={{
              trigger: "bg-default-100 w-full",
              innerWrapper: "text-sm",
              value: "truncate",
              selectorIcon: "text-black"
            }}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            {CATEGORY_OPTIONS.map((option) => (
              <SelectItem key={option.value} className="text-black">
                {option.label}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div className="w-1/3">
          <Select
            isRequired
            name="unit"
            placeholder="Од."
            selectedKeys={formData.unit ? [formData.unit] : []}
            classNames={{
              trigger: "bg-default-100 w-full",
              innerWrapper: "text-sm",
              value: "truncate",
              selectorIcon: "text-black"
            }}
            onChange={(e) =>
              setFormData({ ...formData, unit: e.target.value })}
          >
            {UNIT_OPTIONS.map((option) => (
              <SelectItem key={option.value} className="text-black">
                {option.label}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div className="w-1/3">
          <Input
            isRequired
            name="pricePerUnit"
            placeholder="Ціна"
            type="number"
            value={
              formData.pricePerUnit !== null
                ? formData.pricePerUnit.toString()
                : ""
            }
            classNames={{
              inputWrapper: "bg-default-100",
              input: "text-sm focus:outline-none"
            }}
            onChange={(e) => {
              const value = e.target.value ? parseFloat(e.target.value) : null;
              setFormData({ ...formData, pricePerUnit: value });
            }}
            endContent={
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-default-500 pointer-events-none">
                ₽
              </span>
            }
            validate={(value) => {
              if (!value) return "Ціна обов'язкова";
              const num = parseFloat(value);
              if (isNaN(num) || num < 0)
                return "Ціна повинна бути позитивним числом";
              return null;
            }}
          />
        </div>
      </div>

      <Input
        name="description"
        placeholder="Введіть опис (необов'язково)"
        type="text"
        value={formData.description}
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm focus:outline-none"
        }}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
      />

      <div className="flex w-full items-center justify-end">
        <Button color="primary" type="submit">
          Добавити інградієнт
        </Button>
      </div>
    </Form>
  );
};

export default IngredientForm;