import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, } from "@/components/ui/pagination"

export default function PaginationProducts({ ProductsData }: any) {

    let Previous = ProductsData.metadata.currentPage - 1
    return (
        <div className='w-full mt-5'>
            <Pagination>
                <PaginationContent>


                    <PaginationItem><PaginationPrevious href={`${Previous}`} /></PaginationItem>



                    <PaginationItem>
                        <PaginationLink href={`${ProductsData.metadata.currentPage}`}>{ProductsData.metadata.currentPage}</PaginationLink>
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationLink href={`${ProductsData.metadata.nextPage}`}>{ProductsData.metadata.nextPage}</PaginationLink>
                    </PaginationItem>

                    <PaginationItem><PaginationEllipsis /></PaginationItem>

                    <PaginationItem>
                        <PaginationLink href="#">{ProductsData.metadata.numberOfPages}</PaginationLink>
                    </PaginationItem>


                    <PaginationItem><PaginationNext href={ProductsData.metadata.nextPage} /></PaginationItem>


                </PaginationContent>
            </Pagination>

        </div>
    )
}
