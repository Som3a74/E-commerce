import CartContainer from "./_components/CartContainer";

export default function page() {
    return (
        <main className="max-w-screen-xl mx-auto py-10 px-4 lg:px-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"> Shopping Cart</h1>
            <CartContainer />
        </main>
    );
}
