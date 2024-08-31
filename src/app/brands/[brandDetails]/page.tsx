import Image from 'next/image'

export default async function page({ params }: any) {


  let request = await fetch(`${process.env.BASEURL}/api/v1/brands/${params.brandDetails}`);

  if (!request.ok) {
    throw new Error('Failed to fetch brands')
  }
  const brandsData: any = await request.json();

  return (
    <main className='py-10 bg-gray-100 h-[82vh]'>
      <h1 className='font-bold text-4xl mb-24 text-center underline'>Brand Details</h1>
      <div className='container px-10 sm:px-24 mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 justify-items-center items-center'>

          <div className='col-span-4 md:col-span-1 text-center'>
            <Image
              src={brandsData.data.image}
              alt={brandsData.data.name}
              width={350}
              height={350}
              className='w-full'
            />
          </div>


          <div className='col-span-4 md:col-span-3 text-center'>
            <h2 className='font-bold text-3xl mb-5'>{brandsData.data.name}</h2>
            <p className='font-semibold text-grayUI text-base'>{brandsData.data.name} ipsum dolor sit, amet consectetur adipisicing elit. Possimus, nihil sit sapiente est magnam labore quaerat laudantium odio voluptatem aspernatur magni illo placeat culpa itaque qui atque perferendis, in a!</p>
          </div>

        </div>
      </div>
    </main>
  )
}
