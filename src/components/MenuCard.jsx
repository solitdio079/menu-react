export default function MenuCard({imgSrc, name, description,children}) {
    return (<>
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={imgSrc} alt={name} /></figure>
            <div className="card-body">
                <h5 className="card-title mb-2.5"> {name} </h5>
                <p className="mb-4"> {description} </p>
                <div className="card-actions">
                  {children}
                </div>
            </div>
        </div>
    </>)
}