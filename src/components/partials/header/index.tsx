
import { LinksNav } from "../../../utils/link"
import { Link } from "react-router-dom"


export const Header=()=>{
    return <header className="flex   !p-3 justify-between items-center bg-blue-950">
         <div>
            <h3 className="!text-orange-400">FastCurriculum</h3>
         </div>
     
        <nav>
            <ul className="flex flex-items">
                {LinksNav.map(link=>(
                    <li key={link.name}>
                        <Link className="!mx-3 !text-white hover:!text-blue-400" to={link.path}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
}