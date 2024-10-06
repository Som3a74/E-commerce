import ProductContainer from '../_components/ProductContainer'

interface props {
  params: { productDetails: string };
}

export default function page({ params }: props) {
  return (
    <main>
      <ProductContainer productId={params.productDetails} />
    </main>
  )
}
