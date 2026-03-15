import { Skeleton } from "@/components/ui/skeleton";

export default function BrandsSkeleton() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <Skeleton className="h-10 w-48" />
                    <Skeleton className="h-4 w-64" />
                </div>
                {Array.from({ length: 11 }).map((_, i) => (
                    <Skeleton key={i} className="h-40 w-full rounded-2xl shadow-sm border" />
                ))}
            </div>
        </div>
    );
}
