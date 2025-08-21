import { Link } from "react-router-dom"
import { Button, Divider } from "rsuite"


export const Curriculums=()=>{
    return <div>
        <h3 className="text-2xl !my-[70px]">Curriculos</h3>
        <section className="flex !my-[50px]  justify-between items-center">
            <p>Você tem 5 curriculos criados</p>
           <Link  to={"/curriculums/new_curriculum"}>
            <Button appearance="primary">
                criar novo
            </Button>
           </Link>
        </section>
        <Divider />
    </div>

}