import { Skeleton } from "@/components/ui/skeleton";

export default function GeneralPageSkeleton() {
    return (
        <div className="container mx-auto px-4 py-8 space-y-8">
            <Skeleton className="h-12 w-64" /> {/* Title */}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-4">
                    {/* List Items */}
                    {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="flex gap-4 p-4 border rounded-xl items-center">
                            <Skeleton className="h-24 w-24 rounded-lg shrink-0" />
                            <div className="flex-1 space-y-2">
                                <Skeleton className="h-5 w-1/2" />
                                <Skeleton className="h-4 w-1/4" />
                            </div>
                            <Skeleton className="h-8 w-20" />
                        </div>
                    ))}
                </div>

                {/* Sidebar/Summary */}
                <div className="space-y-4">
                    <Skeleton className="h-[300px] w-full rounded-2xl" />
                    <Skeleton className="h-12 w-full rounded-xl" />
                </div>
            </div>
        </div>
    );
}
