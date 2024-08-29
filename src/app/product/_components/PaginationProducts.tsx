'use client'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, } from "@/components/ui/pagination"
import { useRouter } from 'next/navigation';

export default function PaginationProducts({ ProductsData }: any) {
    const router = useRouter()

    return (
        <div className='w-full mt-10'>
            <Pagination>
                <PaginationContent>

                    {ProductsData.metadata.prevPage &&
                        <>
                            <PaginationItem>
                                <PaginationPrevious
                                    className="cursor-pointer"
                                    onClick={() => router.push(`/product/?page=${ProductsData.metadata.prevPage}`)}
                                />
                            </PaginationItem>

                            <PaginationItem onClick={() => router.push(`/product/?page=${ProductsData.metadata.prevPage}`)}>
                                <div
                                    onClick={() => router.push(`/product/?page=${ProductsData.metadata.prevPage}`)}
                                    className="h-10 w-10 flex items-center justify-center font-medium hover:bg-slate-200 cursor-pointer rounded-md"
                                >
                                    {ProductsData.metadata.prevPage}
                                </div>
                            </PaginationItem>
                        </>
                    }

                    <PaginationItem>
                        <div
                            className="h-10 w-10 font-bold bg-slate-100 flex items-center justify-center  hover:bg-slate-200 cursor-pointer rounded-md"
                        >
                            {ProductsData.metadata.currentPage}
                        </div>
                    </PaginationItem>


                    {ProductsData.metadata.nextPage &&
                        <PaginationItem>
                            <div
                                onClick={() => router.push(`/product/?page=${ProductsData.metadata.nextPage}`)}
                                className="h-10 w-10 flex items-center justify-center font-medium hover:bg-slate-200 cursor-pointer rounded-md"
                            >
                                {ProductsData.metadata.nextPage}
                            </div>
                        </PaginationItem>
                    }

                    {ProductsData.metadata.nextPage &&
                        <>
                            <PaginationItem><PaginationEllipsis /></PaginationItem>

                            <PaginationItem>
                                <div
                                    onClick={() => router.push(`/product/?page=${ProductsData.metadata.numberOfPages}`)}
                                    className="h-10 w-10 flex items-center justify-center font-medium hover:bg-slate-200 cursor-pointer rounded-md"
                                >
                                    {ProductsData.metadata.numberOfPages}
                                </div>
                            </PaginationItem>

                            <PaginationItem>
                                <PaginationNext
                                    className="cursor-pointer"
                                    onClick={() => router.push(`/product/?page=${ProductsData.metadata.nextPage}`)}
                                />
                            </PaginationItem>
                        </>
                    }




                </PaginationContent>
            </Pagination>

        </div>
    )
}
