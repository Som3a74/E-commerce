import FiltersSide from "./_components/(fillter)/FiltersSide";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className="my-10">
            <div className='container p-1 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-5 gap-4 justify-items-center'>

                    <aside className='w-full col-span-1 hidden md:block'>
                        <FiltersSide />
                    </aside>


                    <div className='col-span-4'>
                        {children}
                    </div>

                </div>
            </div>
        </div>
    );
}