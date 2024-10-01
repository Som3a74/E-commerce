
export default function SpinnerLoading() {
    return (
        <div className="w-full h-full bg-black/80 fixed top-0 end-0 left-0 flex z-10 flex-col gap-1 items-center justify-center">
            <div className="loader"></div>
            {/* <p className="text-white text-2xl font-bold tracking-widest">
                Loading...
            </p> */}
        </div>

    )
}