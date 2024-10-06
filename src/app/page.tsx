import SliderCategory from '../components/component/Category/Category';
import Hero from './../components/component/Hero/Hero';
import PopularCategories from './../components/component/PopularCategories';
import DiscountedBanner from './../components/component/DiscountedBanner';
import  MainSlider from './../components/component/Hero/MainSlider';

export default function Home() {
  return (
    <main>
      <div className="container w-full mx-auto">
        <SliderCategory />
        <MainSlider />
        <Hero />
        <PopularCategories />
        <DiscountedBanner/>
        
      </div>
    </main>
  );
}