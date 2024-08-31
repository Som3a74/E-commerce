import ProductInfo from "./ProductInfo";
import ProductSlider from "./ProductSlider";

interface ProductDetailsProps {
    productId: string;
}

export default async function ProductContainer({ productId }: ProductDetailsProps) {


    let request = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${productId}`);

    if (!request.ok) {
        throw new Error('Failed to fetch categories')
    }
    const ProductsData: any = await request.json();

    return (
        <section className="my-10">
            <div className='container px-10 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center'>

                    <div className='w-full'>
                        <ProductSlider productData={ProductsData.data} />
                    </div>


                    <div className='w-full'>
                        <ProductInfo productData={ProductsData.data} />
                    </div>

                </div>
            </div>
        </section>
    )
}
