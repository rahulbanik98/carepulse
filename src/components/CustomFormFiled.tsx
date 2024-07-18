"use client";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FormFieldType } from "./forms/PatientForm";
import { Input } from "./ui/input";
import Image from "next/image";

interface PropTypes {
  control: any;
  fieldType: string;
  name: string;
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
}

const RenderField = ({ field, props }: { field: any; props: PropTypes }) => {
  const { fieldType, iconSrc, iconAlt, placeholder } = props;
  switch (props.fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className="flex rounded-md border border-dark-500 bg-dark-400">
          {iconSrc && (
            <Image
              src={iconSrc}
              height={24}
              width={24}
              alt={iconAlt || "icon"}
              className="ml-2"
            />
          )}
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              className="shad-input border-0"
            />
          </FormControl>
        </div>
      );
    case FormFieldType.PHONE_INPUT:
      return (
        <FormControl>
          <PhoneInput
            defaultCountry="IN"
            placeholder={placeholder}
            international
            value={field.value}
            onChange={field.onChange}
            className="input-phone"
          />
        </FormControl>
      );
  }
  return <Input type="text" placeholder="John Doe" />;
};

const CustomFormFiled = (props: PropTypes) => {
  const { control, fieldType, name, label, placeholder, iconSrc, iconAlt } =
    props;
  return (
    <>
      <FormField
        control={control}
        name="username"
        render={({ field }) => (
          <FormItem className="flrx-1">
            {fieldType !== FormFieldType.CHECKBOX && label && (
              <FormLabel>{label}</FormLabel>
            )}
            <RenderField field={field} props={props} />
            <FormMessage className="shad-error" />
          </FormItem>
        )}
      />
    </>
  );
};

export default CustomFormFiled;
