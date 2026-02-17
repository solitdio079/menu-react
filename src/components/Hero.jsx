import Menus from "./Menus";

export default function Hero() {
    return (<>
        <div className="hero p-10 min-h-90 bg-base-200">
            <div className="hero-content text-center flex justify-center w-full">
                <div>
                    <h1 className="text-6xl font-black">Ramazan Menülerimiz</h1>
                    <p className="py-6">Özsüt’ten Ramazan’a özel, geleneksel tatlardan ilham alan lezzetlerle iftar sofralarınıza keyif katın.</p>
                </div>
            </div>
            <Menus/>
        </div>
    </>)
}