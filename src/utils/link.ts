import type { ReactNode } from "react";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { Register } from "../pages/register";


interface ILinksNav{
    name: string;
    path: string;
    component: ReactNode;
}

export const LinksNav=[
        {name:"Home",path:"/",component:Home},
        {name:"Entrar",path:"/login",component:Login},
        {name:"Cadastro",path:"/register",component:Register},
]