import ProductSide from "../_components/ProductSide"

export default function page({ searchParams }: any) {
  // console.log(searchParams.categoryId)

  return (
    <div>
      <ProductSide category={searchParams.categoryId} />
    </div>
  )
}
