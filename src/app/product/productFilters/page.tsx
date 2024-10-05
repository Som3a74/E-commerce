import ProductSide from "../_components/ProductSide"

type props = {
  searchParams: {
    categoryId: string
    priceGte:number
    priceLte:number
  }
}

export default function page({ searchParams }: props) {

  return (
    <div>
      <ProductSide priceGte={searchParams.priceGte} priceLte={searchParams.priceLte} category={searchParams.categoryId} />
    </div>
  )
}
