import { Skeleton } from "@/components/ui/skeleton";

export default function ProductCardSkeleton() {
  return (
    <div className="flex flex-col space-y-3 p-4 border rounded-xl shadow-sm bg-card transition-all">
      <Skeleton className="h-[250px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
      <div className="flex justify-between items-center mt-4">
        <Skeleton className="h-8 w-20" />
        <Skeleton className="h-10 w-10 rounded-full" />
      </div>
    </div>
  );
}
