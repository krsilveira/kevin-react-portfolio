import { useState, useContext } from "react"
import { PageContext } from "../PageProvider"


const Header = () => {
    console.log("Header")
    const { page, changePage } = useContext(PageContext)
    const pageOptions = ["Home", "About Me", "Portfolio", "Contact", "Resume"]
    return (<>
        <header>
            <nav className="row">
                <div className="col-3"></div>
                <div className="col-8 link-border">
                    <ul className="row">
                        {pageOptions.map(page => (<li className="col btn" key={page} onClick={() => changePage(page.toLowerCase())}>
                            {page}
                        </li>))}
                    </ul>
                </div>
            </nav>
        </header>
    </>)
}


export default Header;