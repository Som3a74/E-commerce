import SliderCategory from '../components/component/Category/Category';
import Hero from './../components/component/Hero/Hero';
import PopularCategories from './../components/component/PopularCategories';
import TopSellsProducts from '../components/component/TopSellsProducts/TopSellsProducts';

export default function Home() {
  return (
    <main>
      <div className="container w-full mx-auto">
        <SliderCategory />
        <Hero />
        <PopularCategories />
        {/* <TopSellsProducts /> */}
        
      </div>
    </main>
  );
}