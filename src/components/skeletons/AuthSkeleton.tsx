import { Skeleton } from "@/components/ui/skeleton";

export default function AuthSkeleton() {
    return (
        <div className="container mx-auto px-4 py-20 flex flex-col items-center">
            <div className="w-full max-w-md space-y-8">
                <div className="space-y-2 text-center">
                    <Skeleton className="h-10 w-48 mx-auto" />
                    <Skeleton className="h-4 w-64 mx-auto" />
                </div>
                <div className="space-y-4">
                    <Skeleton className="h-12 w-full rounded-lg" />
                    <Skeleton className="h-12 w-full rounded-lg" />
                    <Skeleton className="h-12 w-full rounded-lg" />
                </div>
                <Skeleton className="h-11 w-full rounded-lg" />
                <Skeleton className="h-4 w-40 mx-auto" />
            </div>
        </div>
    );
}
