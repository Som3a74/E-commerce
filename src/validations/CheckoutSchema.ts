import { z } from "zod";

export const CheckoutSchema = z.object({
    details: z.string().min(1, { message: 'details is require' }),
    phone: z.string().min(1, { message: 'phone is Require' }).regex(/^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/g, { message: "is Not a Egyption Phone", }),
    city: z.string().min(1, { message: 'city is require' }),
})
export type TFormInput = z.infer<typeof CheckoutSchema>;