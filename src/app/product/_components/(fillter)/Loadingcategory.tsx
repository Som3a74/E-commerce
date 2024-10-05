import { Skeleton } from '@/components/ui/skeleton'

export default function Loadingcategory() {

    const skeletonItems = [];

    for (let i = 0; i < 7; i++) {
        skeletonItems.push(

            <div key={i} className="flex py-3">
                <Skeleton className="h-4 w-[200px]" />
            </div>
        );
    }


    return (
        <div className="">
            {skeletonItems}
        </div>
    )
}