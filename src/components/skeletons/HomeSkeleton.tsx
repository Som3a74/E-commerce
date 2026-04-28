import { Skeleton } from "@/components/ui/skeleton";

export default function HomeSkeleton() {
    return (
        <div className="container mx-auto px-4 space-y-12 py-6">
            {/* Category Slider Skeleton */}
            <div className="flex gap-4 overflow-hidden pb-4">
                {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} className="flex flex-col items-center space-y-2 shrink-0">
                        <Skeleton className="h-20 w-20 rounded-full" />
                        <Skeleton className="h-3 w-16" />
                    </div>
                ))}
            </div>

            {/* Main Slider Skeleton */}
            <Skeleton className="h-[400px] w-full rounded-3xl" />

            {/* Hero Section Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Skeleton className="h-[250px] w-full rounded-2xl" />
                <Skeleton className="h-[250px] w-full rounded-2xl" />
            </div>

            {/* Popular Categories Skeleton */}
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <Skeleton className="h-8 w-48" />
                    <Skeleton className="h-4 w-24" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <Skeleton key={i} className="h-32 w-full rounded-xl" />
                    ))}
                </div>
            </div>

            {/* Banner Skeleton */}
            <Skeleton className="h-[200px] w-full rounded-2xl" />
        </div>
    );
}
