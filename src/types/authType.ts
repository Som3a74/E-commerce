import { TFormInput } from "../validations/RegisterSchema";
import { FieldError, UseFormRegister } from "react-hook-form";

export type FormFieldProps = {
    type: string;
    register: UseFormRegister<TFormInput>;
    nameInput: TnameInput;
    lableInput: string;
    error?: FieldError;
    IsFull?: boolean;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
};
export type TnameInput = "name" | "phone" | "email" | "password" | "rePassword";