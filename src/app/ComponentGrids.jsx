import Pagination from "./snippets/Pagination/Pagination";
import PaginationAnimation from "./snippets/PaginationAnimation/PaginationAnimation";
import Search from "./snippets/Search/Search";
import GooeyNavigation from "./snippets/GooeyNavigation/GooeyNavigation";
import TogglingSidebar from "./snippets/TogglingSidebar/TogglingSidebar";
import Calendar from "./snippets/Calendar/Calendar";

import './component-grid.css';
import Link from "next/link";
import { useRouter } from 'next/navigation';

const ComponentGrids = () => {
    return (
        <>
            <div className="component-grids gap-6 pb-6">
                <div className="p-[1px] h-fit rounded-lg bg-gradient-to-tl from-blue-200 to-blue-400 shadow-xl self-center">
                    <div className="flex h-fit flex-col gap-4 lg:gap-6 justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-6 lg:p-10 rounded-lg self-center">
                    <h3 className="font-bold text-xl lg:text-2xl">Showcased some of our components</h3>
                    <p className="text-sm lg:text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quos quidem explicabo sunt nihil quae, ipsa molestias, minima reiciendis ea quo eligendi quibusdam asperiores aliquid, expedita ratione fuga esse autem!</p>
                    <Link href="/components/" className="pri-btn self-start relative tracking-wide">Explore now<span className="inline-block w-6 h-6 ml-2 animate-pulse absolute right-4"></span></Link>
                    </div>
                </div>
                <ComponentGrid componentName={"Gooey Navigation"} componentId={'66aae00acee507776b3673b2'}>
                    <GooeyNavigation/>
                </ComponentGrid>
                <ComponentGrid componentName={"Pagination"} componentId={"66aae2abcee507776b3673b8"}>
                    <Pagination/>
                </ComponentGrid>
                <ComponentGrid componentName={"Pagination with Sliding Animation"} componentId={'66aae2abcee507776b3673b9'}>
                    <PaginationAnimation/>
                </ComponentGrid>
                <ComponentGrid componentName={"Calendar"} componentId={'66aae2abcee507776b3673ba'}>
                    <Calendar/>
                </ComponentGrid>
                <ComponentGrid componentName={"Search"} componentId={'66aae2abcee507776b3673b7'}>
                    <Search/>
                </ComponentGrid>
                <ComponentGrid componentName={"Toggling Sidebar"} componentId={'66c36a0f3f91f7fd2774cb51'}>
                    <TogglingSidebar/>
                </ComponentGrid>
            </div>
        </>
    );
}

const ComponentGrid = ({ componentName, componentId, children }) => {
    const componentLink = `/components/component?id=${componentId}`;

    const router = useRouter();

    return(
        <div className="component flex items-center justify-center mt-6 cursor-pointer" onClick={() => router.push(componentLink)}>
            <Link href={componentLink}>{ componentName }</Link>
            <div onClick={(e)=>e.stopPropagation()}>{children}</div>
            {/* <button className="preview-component" title="Preview the Component"></button> */}
        </div>
    );
}

export default ComponentGrids;