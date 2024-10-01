import Link from 'next/link'

export default function WishEmpty() {
    return (
        <div className="bg-white h-96 mt-10 flex flex-col gap-2 items-center justify-center py-5 rounded-lg border border-gray-200 drop-shadow-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Shopping Cart
            </h1>
            <p className="text-lg max-w-[600px] text-center text-gray-600 tracking-wide leading-6">
                Your Wish is empty. Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Repellendus libero ab nulla iure quibusdam
                obcaecati debitis minima explicabo quidem tenetur ad, voluptate
                iusto ratione natus. Maxime molestiae doloremque eaque nesciunt!
            </p>
            <Link
                href={"/product"}
                className="bg-gray-800 text-gray-200 px-8 py-4 rounded-md hover:bg-black hover:text-white duration-200 uppercase text-sm font-semibold tracking-wide"
            >
                go to shopping
            </Link>
        </div>
    )
}
