import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function NavBar({bottomNavigation}:any) {

 

    return (
        <nav aria-label="Global" className="py-3 bg-darkUi text-lightUi">
            <div className="container w-full ms-0 sm:mx-auto">
                <ul className="flex items-center justify-evenly gap-6">

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant='outline' className="bg-darkUi">
                                <span className="flex items-stretch">Select Category <RiArrowDropDownLine className="size-6" /></span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem >
                                Light
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {bottomNavigation.map((ele:any) =>
                        <li key={ele.title} className="hidden md:block">
                            <Link className="font-medium text-md " href={ele.link}>{ele.title}</Link>
                        </li>
                    )}

                </ul>
            </div>
        </nav>
    )
}
