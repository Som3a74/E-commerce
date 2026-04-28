import { Skeleton } from "@/components/ui/skeleton";

export default function CheckoutSkeleton() {
    return (
        <div className="container mx-auto px-4 py-16 flex flex-col items-center">
            <div className="w-full max-w-md space-y-6">
                <div className="space-y-4">
                    <Skeleton className="h-14 w-full rounded-lg" />
                    <Skeleton className="h-14 w-full rounded-lg" />
                    <Skeleton className="h-14 w-full rounded-lg" />
                </div>
                <Skeleton className="h-12 w-32 rounded-lg" />
            </div>
        </div>
    );
}
