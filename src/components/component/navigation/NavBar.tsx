import Link from "next/link";
import { TypeNavigationItem } from "../../../utility/HeaderData";

type props = {
    bottomNavigation: TypeNavigationItem[]
}

export default function NavBar({ bottomNavigation }: props) {

    return (
        <nav aria-label="Global" className="py-4 bg-darkUi text-lightUi">
            <div className="container w-full ms-0 sm:mx-auto">
                <ul className="flex items-center justify-center gap-14">
                    {bottomNavigation.map((ele) =>
                        <li key={ele.title} className="hidden md:block relative group overflow-hidden">
                            <Link className=" font-medium text-md text-LightAll" href={ele.link}>
                                {ele.title}
                                <span className="absolute bottom-0 left-0 w-full block h-[2px] bg-gray-600 -translate-x-[100%] group-hover:translate-x-0 duration-300"></span>
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    )
}
