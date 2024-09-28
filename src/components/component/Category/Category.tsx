import SliderCategory from "./SliderCategory";
import { TypeAllCategories } from "@/types/categoriesType";

const baseURL = process.env.NEXT_PUBLIC_BASEURL;
const domain = process.env.NEXT_PUBLIC_DOMAIN;

export default async function Category() {

    let request = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/v1/categories`);
    if (!request.ok) {
        throw new Error('Failed to fetch categories')
    }
    const CategoryData: TypeAllCategories = await request.json();
    return (
        <SliderCategory CategoryData={CategoryData.data} />
    )
}