import { IoAlertCircle } from "react-icons/io5";

type props = {
    isError: string
}

export default function ErrorMassege({ isError }: props) {
    return (
        <div className="col-span-6 flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            <IoAlertCircle className=' w-5 h-5 me-2' />
            <span className="font-medium">{isError}</span>
        </div>
    )
}
