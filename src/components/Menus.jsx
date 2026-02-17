import { Fragment } from "react";
import menu from "../data/menu.json";
import MenuCard from "./MenuCard";
import { Link } from "react-router-dom";
export default function Menus() {
    return (<>
        <div className="grid lg:grid-cols-4 gap-4 my-6 items-center justify-center">
            {menu.mainDishes.map((item, index) => (<Fragment key={index}><MenuCard imgSrc={item.image} name={item.name} description={item.description}><Link to={`/details/${index}/${item.excluded}`} className="btn btn-primary"> <span className="icon-[tabler--eye]"></span> </Link></MenuCard></Fragment>))}
        </div>
    </>)
}