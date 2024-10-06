import { FormFieldProps } from "../../../../types/authType";

const RegisterInput: React.FC<FormFieldProps> = ({ type, onBlur, register, nameInput, error, lableInput, IsFull, }) => {

    const OnBlurHandel = (e: React.FocusEvent<HTMLInputElement>) => {
        if (onBlur) {
            onBlur(e)
            register(nameInput).onBlur(e)
        } else {
            register(nameInput).onBlur(e)
        }
    }

    return (
        <div className={`col-span-6 ${!IsFull && 'sm:col-span-3'}`} >
            <label style={error && { color: "red" }} htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-GrayBeLight">{lableInput}</label>
            <input
                type={type}
                {...register(nameInput)}
                id={nameInput}
                name={nameInput}
                onBlur={OnBlurHandel}
                style={error && { border: "1px solid red" }}
                className="mt-1 w-full rounded-lg border border-gray-200 p-3 pe-12 text-sm shadow-sm  focus:border-sky-400 bg-white text-gray-700"
            />
            {error && <h6 className="p-1 text-sm text-red-800">{error.message}</h6>}
        </div>
    )
}
export default RegisterInput;