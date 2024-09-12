import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingCheckoutCart() {
    return (
        <section aria-labelledby="summary-heading" className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
            <div className="border-t border-gray-200 pt-4">
                <Skeleton className="w-full h-20 rounded-xl" />
            </div>
            <div className="border-t border-gray-200 pt-4">
                <Skeleton className="w-full h-20 rounded-xl" />
            </div>
            <div className="border-t border-gray-200 pt-4">
                <Skeleton className="w-full h-20 rounded-xl" />
            </div>
        </section>
    )
}
