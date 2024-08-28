import ProductList from '../../components/component/Product/ProductList';
import Filters from '../../components/component/Filters';

export default function psge() {

  return (
    <main className='my-10'>
      <div className='container p-1 mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-4 justify-items-center'>


          <div className='col-span-1 hidden md:block'>
            <Filters />
          </div>


          <div className='col-span-4'>
            <ProductList />
          </div>


        </div>
      </div>
    </main>
  )
}
