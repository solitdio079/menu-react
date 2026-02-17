export default function MenuCard({imgSrc, name, description}) {
    return (<>
        <div className="card sm:max-w-sm">
            <figure><img src={imgSrc} alt={name} /></figure>
            <div className="card-body">
                <h5 className="card-title mb-2.5"> {name} </h5>
                <p className="mb-4"> {description} </p>
                <div className="card-actions">
                    <button className="btn btn-primary"> <span className="icon-[tabler--eye]"></span> </button>
                </div>
            </div>
        </div>
    </>)
}