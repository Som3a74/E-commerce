import { Skeleton } from '@/components/ui/skeleton'
import { IoIosClose } from 'react-icons/io'

export default function LoadingCartItems() {

    const skeletonItems = [];

    for (let i = 0; i < 4; i++) {
        skeletonItems.push(

            <div key={i} className="flex py-6 sm:py-10">

                <Skeleton className="w-24 h-24 sm:h-48 sm:w-48 rounded-xl" />

                <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                    <div className="relative pr-9 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:pr-0">
                        <div className="flex flex-col gap-1 col-span-3">

                            <div className="space-y-2">
                                <Skeleton className="h-4 w-[250px]" />
                                <Skeleton className="h-4 w-[200px]" />
                            </div>

                            <Skeleton className="h-4 w-[200px]" />
                            <Skeleton className="h-4 w-[200px]" />

                        </div>
                        <div className="mt-4 sm:mt-0 sm:pr-9">
                            <div className="absolute right-0 top-0">
                                <button type="button" className="-m-2 inline-flex p-2 text-gray-600 hover:text-red-600" >
                                    <IoIosClose className="text-2xl" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Skeleton className="h-4 w-[300px]" />
                        <Skeleton className="h-4 w-[350px]" />
                    </div>
                </div>

            </div>
        );
    }


    return (
        <div className="divide-y divide-gray-200 border-b border-t border-gray-200">

            {skeletonItems}

        </div>
    )
}
