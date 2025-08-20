import type { ReactNode } from "react"
import { Header } from "../header"


type props={
    children:ReactNode
}
export const Layout=({children}:props)=>{
    return <>
       <Header/>
       <main className="flex justify-center items-center">
         <div className="w-[80%] !m-5">
          {children}
         </div>
       </main>

    </>
}