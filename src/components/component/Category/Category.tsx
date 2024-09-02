import SliderCategory from "./SliderCategory";
import { TypeAllCategories } from "@/types/categoriesType";

export default async function Category() {

    let request = await fetch('https://ecommerce.routemisr.com/api/v1/categories');
    if (!request.ok) {
        throw new Error('Failed to fetch categories')
    }
    const CategoryData: TypeAllCategories = await request.json();
    return (
        <SliderCategory CategoryData={CategoryData.data} />
    )
}