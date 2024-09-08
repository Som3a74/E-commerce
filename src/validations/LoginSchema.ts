import { z } from "zod";

export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: 'Password must be at least 8 character' })
        .regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/, { message: "Password should contain at least 1 special character", }),


})
export type TFormInput = z.infer<typeof LoginSchema>;