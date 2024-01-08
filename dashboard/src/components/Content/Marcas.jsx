import BrandItem from "./MarcaItem"

function Brands(){
    const marcas = [
        {id: 1, name: "Royal Canin"},
        {id: 2, name: "Excellent"},
        {id: 3, name: "Pedigree"},
        {id: 4, name: "Eukanuba"},
        {id: 5, name: "Cat Chow"},
        {id: 6, name: "Dog chow"},
        {id: 7, name: "Pro Plan"}
    ]

    return(
        <section className="content">
            <h2 className="mt-3">Marcas</h2>
            <div className="list-group shadow-sm p-3 mb-5 bg-body-tertiary rounded">
            <button
                type="button"
                className="list-group-item list-group-item-action active text-center"
                aria-current="true"
            >
                Marcas
            </button>
            {marcas.map((marca) => (
                <>
                <button
                type="button"
                className="list-group-item list-group-item-action text-center">
                <BrandItem key={marca.id} name={marca.name} />
                </button>
                </>
            ))}
            </div>
        </section>
    )
}

export default Brands