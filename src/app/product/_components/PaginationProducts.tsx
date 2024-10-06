'use client'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, } from "@/components/ui/pagination"
import { AllProductsType } from "../../../types/type";
import { useRouter } from 'next/navigation';
import Link from "next/link";


interface props {
    ProductsData: AllProductsType
}

export default function PaginationProducts({ ProductsData }: props) {
    const router = useRouter()

    return (
        <div className='w-full mt-10'>
            <Pagination>
                <PaginationContent>

                    {ProductsData.metadata.prevPage &&
                        <>
                            <PaginationItem>
                                <Link
                                    className="cursor-pointer font-medium"
                                    // onClick={() => router.push(`/product/?page=${ProductsData.metadata.prevPage}`)}
                                    href={`/product/?page=${ProductsData.metadata.prevPage}`}
                                >
                                    {'< '}Previous
                                </Link>
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
                                <Link
                                    className="cursor-pointer font-medium"
                                    // onClick={() => router.push(`/product/?page=${ProductsData.metadata.prevPage}`)}
                                    href={`/product/?page=${ProductsData.metadata.nextPage}`}
                                >
                                    next{' >'}
                                </Link>
                            </PaginationItem>
                        </>
                    }




                </PaginationContent>
            </Pagination>

        </div>
    )
}
