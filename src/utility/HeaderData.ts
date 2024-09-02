export const bottomNavigation: TypeNavigationItem[] = [
    { title: "Home", link: "/" },
    { title: "Shop", link: "/product" },
    { title: "Orders", link: "/orders" },
    { title: "Brands", link: "/brands" },
    { title: "Blog", link: "/blog" },
];



export type TypeNavigationItem = {
    title: string;
    link: string;
};
