import ProductContainer from '../_components/ProductContainer'

import { Metadata, ResolvingMetadata } from 'next';

interface props {
  params: { productDetails: string };
}

export async function generateMetadata({ params }: props, parent: ResolvingMetadata): Promise<Metadata> {
  const productId = params.productDetails;

  try {
    const request = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${productId}`);
    const result = await request.json();
    const product = result.data;

    return {
      title: `${product?.title || 'Product'} | Shop So3`,
      description: product?.description?.slice(0, 160) || 'View product details on Shop So3.',
      openGraph: {
        title: product?.title || 'Shop So3 Product',
        description: product?.description?.slice(0, 160),
        images: [
          {
            url: product?.imageCover || '/default-og.jpg',
            width: 800,
            height: 600,
            alt: product?.title || 'Product image',
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: product?.title,
        description: product?.description?.slice(0, 160),
        images: [product?.imageCover || '/default-og.jpg'],
      }
    };
  } catch (error) {
    return {
      title: 'Product | Shop So3'
    };
  }
}

export default function page({ params }: props) {
  return (
    <main>
      <ProductContainer productId={params.productDetails} />
    </main>
  )
}
