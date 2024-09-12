import ProductSide from "../_components/ProductSide"

type props = {
  searchParams: {
    categoryId: string
  }
}

export default function page({ searchParams }: props) {
  // console.log(searchParams.categoryId)

  return (
    <div>
      <ProductSide category={searchParams.categoryId} />
    </div>
  )
}
