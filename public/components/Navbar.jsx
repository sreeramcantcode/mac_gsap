

function Navbar (){

    const navitems = [
        {label:"Home"},
        {label:"Store"},
        {label:"Mac"},
        {label:"Iphone"},
        {label:"iWatch"},
        {label:"Vison"},
        {label:"Airpods"},
    ]

    return(
        <>

        <header className="p-2">
            <nav className="text-white">
                <img src="/logo.svg" alt="" />
                <ul>
                 {navitems.map((item) => (
                    <li key={item.label}>
                      {item.label}
                    </li>
                 ))}
                </ul>

                <div className="flex-center gap-3">
                    <button>
                        <img src="/search.svg" alt="" />
                    </button>

                    <button>
                        <img src="/cart.svg" alt="" />
                    </button>
                </div>
            </nav>
        </header>
    
        </>
    )

}
export default  Navbar