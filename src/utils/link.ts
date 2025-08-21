import type { ReactNode } from "react";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { Curriculums } from "../pages/curriculuns";
import { NewCurriculum } from "../pages/new_curriculum";


interface ILinksNav{
    name: string;
    path: string;
    component: ReactNode;
}

export const LinksNav=[
        {name:"Home",path:"/",component:Home},
        {name:"Entrar",path:"/login",component:Login},
        {name:"Cadastro",path:"/register",component:Register},
         {name:"Curriculos",path:"/curriculums",component:Curriculums},
         {name:"Novo Curriculo",path:"/curriculums/new_curriculum",component:NewCurriculum}
]