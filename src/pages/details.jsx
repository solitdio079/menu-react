import MenuDetails from "../components/MenuDetails";
import menu from "../data/menu.json";
import { Link, useParams } from "react-router-dom";
export default function Details() {
    const { menuId, excludedId } = useParams();
    const mainDishIndex = parseInt(menuId);
    const excludedCommonDishIndex = parseInt(excludedId);
    return (
        <> 
        <div className="relative w-full h-64 overflow-hidden">
            <img src={menu.mainDishes[mainDishIndex].image} alt={menu.mainDishes[mainDishIndex].name} className="w-full h-full object-cover" />
            <Link to="/" className="btn btn-primary absolute top-4 left-4">
                    <span className="icon-[tabler--arrow-left]"></span>
                    Geri
                </Link>

                <h1 className="absolute bottom-4 left-4 text-3xl font-bold text-white bg-black bg-opacity-50 px-4 py-2 rounded">
                    {menu.mainDishes[mainDishIndex].price} TL - {menu.mainDishes[mainDishIndex].name}
                </h1>
        </div>
            <div className="flex flex-col items-center gap-6 p-10">
                
                <MenuDetails mainDishIndex={mainDishIndex} excludedCommonDishIndex={excludedCommonDishIndex} />
            </div>
        </>)

}