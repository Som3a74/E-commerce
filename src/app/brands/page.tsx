import AllBrands from './_components/AllBrands';

export default function page() {

  return (
    <main className='my-10'>
      <div className='container px-10 mx-auto'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center items-center'>



          <div className='text-center'>
            <h2 className='font-bold text-3xl mb-3'>Our Barnds</h2>
            <h5 className='font-medium text-sm text-grayUI'>You can see our Brands and each Barnd includes the products in it</h5>
          </div>



          <AllBrands />


        </div>
      </div>
    </main>
  )
}
