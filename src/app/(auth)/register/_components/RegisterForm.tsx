'use client'
import Link from 'next/link'
import RegisterFooter from './RegisterFooter'
import { Button } from '@/components/ui/button'
import { ImSpinner2 } from "react-icons/im";
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { TFormInput, RegisterSchema } from './../../../../validations/RegisterSchema';
import RegisterInput from './RegisterInput';
import ErrorMassege from './ErrorMassege';
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { useToken } from './../../../../context/SaveToken';


export default function RegisterForm() {
    const router = useRouter()
    const [isLoading, setLoading] = useState(false)
    const [isError, setisError] = useState<null | string>(null)

    const { token, saveTokenHandel } = useToken()
    console.log(token)

    const { register, handleSubmit, formState: { errors }, getFieldState, trigger, setError, } = useForm<TFormInput>({
        mode: 'all',
        resolver: zodResolver(RegisterSchema),
    });

    const emailOnBlurHandel = async (e: React.FocusEvent<HTMLInputElement>) => {
        await trigger('email')
        const { isDirty, invalid } = getFieldState('email')
        if (isDirty && !invalid) {
            // console.log(e);
        }
    }

    const SubmitForm: SubmitHandler<TFormInput> = async (data: TFormInput) => {
        setLoading(true)
        try {
            let request = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signup`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                    cache: 'no-store'
                }
            )

            if (!request.ok) {
                setLoading(false)
                let error = await request.text()
                setisError(JSON.parse(error).message)
                console.log(JSON.parse(error).message)
            }


            let success = await request.text()
            console.log(JSON.parse(success).message)

            if (JSON.parse(success).message === 'success') {
                saveTokenHandel(JSON.parse(success).token)
                router.replace('/')
                setTimeout(() => {
                    window.location.reload();
                }, 600);
            }

        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    return (
        <form onSubmit={handleSubmit(SubmitForm)} className="mt-8 grid grid-cols-6 gap-6">
            <RegisterInput
                type='text'
                register={register}
                nameInput='name'
                lableInput='First Name'
                error={errors.name}
                IsFull={false}
            />

            <RegisterInput
                type='tel'
                register={register}
                nameInput='phone'
                lableInput='phone'
                error={errors.phone}
                IsFull={false}
            />

            <RegisterInput
                type='email'
                register={register}
                nameInput='email'
                lableInput='Email'
                error={errors.email}
                IsFull={true}
                onBlur={emailOnBlurHandel}
            />

            <RegisterInput
                type='password'
                register={register}
                nameInput='password'
                lableInput='password'
                error={errors.password}
                IsFull={false}
            />

            <RegisterInput
                type='password'
                register={register}
                nameInput='rePassword'
                lableInput='Password Confirmation'
                error={errors.rePassword}
                IsFull={false}
            />

            <RegisterFooter />

            {isError &&
                <ErrorMassege isError={isError} />
            }

            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <Button type='submit'>
                    {isLoading ? <ImSpinner2 className='animate-spin mx-14 ' /> : 'Create an account'}
                </Button>
                <p className="mt-4 text-sm text-gray-500 sm:mt-0"> Already have an account?<Link href="/login" className="text-gray-700 font-semibold hover:text-sky-500 ms-3 underline">Log in</Link>. </p>

            </div>
        </form>
    )
}
