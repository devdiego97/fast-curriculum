
import { LinksNav } from "../../../utils/link"
import { Link } from "react-router-dom"


export const Header=()=>{
    return <header className="flex   !p-3 justify-between items-center bg-blue-300">
         <div>
            <div className="bg-cover bg-no-repeat h-[95px] w-[99px]" style={{backgroundImage: `url(${'/logo.png'})`}}>

            </div>
         </div>
     
        <nav>
            <ul className="flex flex-items">
                {LinksNav.map(link=>(
                    <li key={link.name}>
                        <Link className="!mx-3 !text-white hover:!text-orange-400" to={link.path}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
}