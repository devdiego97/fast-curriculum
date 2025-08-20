import { Route, Routes as Router } from "react-router"
import { LinksNav } from "../utils/link"

export const Routes=()=>{
    return   <Router>
          {LinksNav.map((l, k) => (
            <Route key={k} path={l.path} Component={l.component} />
          ))}
        </Router>
  
}