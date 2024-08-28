import SliderCategory from "./SliderCategory";

export default async function Category() {

    let request = await fetch('https://ecommerce.routemisr.com/api/v1/categories');
    if (!request.ok) {
        throw new Error('Failed to fetch categories')
    }
    const CategoryData: any = await request.json();
    return (
        <SliderCategory CategoryData={CategoryData.data} />
    )
}