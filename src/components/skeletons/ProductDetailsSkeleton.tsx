import { Skeleton } from "@/components/ui/skeleton";

export default function ProductDetailsSkeleton() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Product Image Skeleton */}
                <div className="space-y-4">
                    <Skeleton className="h-[500px] w-full rounded-2xl" />
                    <div className="flex gap-4">
                        <Skeleton className="h-24 w-24 rounded-lg" />
                        <Skeleton className="h-24 w-24 rounded-lg" />
                        <Skeleton className="h-24 w-24 rounded-lg" />
                    </div>
                </div>

                {/* Product Info Skeleton */}
                <div className="space-y-6">
                    <div className="space-y-2">
                        <Skeleton className="h-10 w-3/4" />
                        <Skeleton className="h-4 w-1/4" />
                    </div>

                    <Skeleton className="h-8 w-32" />

                    <div className="space-y-2">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-2/3" />
                    </div>

                    <div className="flex items-center gap-4 py-6 border-y">
                        <Skeleton className="h-12 w-32 rounded-lg" />
                        <Skeleton className="h-12 flex-1 rounded-lg" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <Skeleton className="h-16 w-full rounded-xl" />
                        <Skeleton className="h-16 w-full rounded-xl" />
                    </div>
                </div>
            </div>
        </div>
    );
}
