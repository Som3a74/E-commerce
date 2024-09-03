import { z } from "zod";

export const RegisterSchema = z.object({
    name: z.string().min(3, { message: 'min is 3 character' }),
    email: z.string().email(),
    password: z.string().min(8, { message: 'Password must be at least 8 character' })
        .regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/, { message: "Password should contain at least 1 special character", }),


    rePassword: z.string().min(1, { message: "Confirm Password is required" }),

    phone: z.string().min(1, { message: 'phone is Require' }),

}).refine((input) => input.password === input.rePassword, {
    message: "Password and Confirm Password does not match",
    path: ["rePassword"],
});


export type TFormInput = z.infer<typeof RegisterSchema>;