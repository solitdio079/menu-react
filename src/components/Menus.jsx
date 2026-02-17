import menu from "../data/menu.json";
import MenuCard from "./MenuCard";

export default function Menus() {
    return (<>
        <div className="grid lg:grid-cols-4 gap-4 p-10 my-6 items-center justify-center">
            {menu.mainDishes.map((item, index) => (<><MenuCard imgSrc={item.image} name={item.name} description={item.description}/></>))}
        </div>
    </>)
}