import Menu from "flyonui/components/menu";
import menu from "../data/menu.json";

export default function MenuDetails({ mainDishIndex, excludedCommonDishIndex }) {
    return (<div className="flex flex-col items-center text-center gap-6 p-10">
        <section>
            <h2 className="text-3xl font-bold mb-4">İftariye tabağı</h2>
            <p> {menu.aperos.map(item => item.name + ", ")} </p>
        </section>
        <section>
            <h2 className="text-3xl font-bold mb-4">Çorba</h2>
            <p> {menu.soups.map(item => item.name + ", ")} </p>
        </section>
        <section>
            <h2 className="text-3xl font-bold mb-4">Ara Sıcak</h2>
            <p> {menu.inBetweens.map(item => item.name + ", ")} </p>
        </section>
        <section>
            <h2 className="text-3xl font-bold mb-4">Ana Yemek</h2>
            <p> {menu.mainDishes[mainDishIndex].name}, {menu.commonItems.filter((item,index) => index !== excludedCommonDishIndex).map(item => item.name).join(", ")} </p>
        </section>
        <section>
            <h2 className="text-3xl font-bold mb-4">Salata</h2>
            <p> {menu.salads.map(item => item.name + ", ")} </p>
        </section>
        <section>
            <h2 className="text-3xl font-bold mb-4">Tatlı</h2>
            <p> {menu.desserts.map(item => item.name + ", ")} </p>
        </section>

        <section>
            <h2 className="text-3xl font-bold mb-4">İçecek</h2>
            <p> {menu.drinks.map(item => item.name + ", ")} </p>
        </section>

    </div>)
}