import { CardExperience } from "../../card-experience";
import { useState } from "react"
import { Button, Card, DatePicker, Divider, Input, InputPicker, Radio, RadioGroup } from "rsuite"
import { InlineEdit} from 'rsuite';


//Formulario responsavel pela rendenrização das experiencias e adição e exclusão das mesmas
export const SubFormExperience=()=>{
 const [newExperience,setNewExperience]=useState(false)
 const [listExperiences,setListExperiences]=useState([
  {
    id: 1,
    office: "Desenvolvedor Front-end",
    activities: "Desenvolvimento de interfaces com React e TypeScript",
    dateStart: "2022-01-10",
    dateEnd: "2023-03-15",
    contractActual: false
  },
  {
    id: 2,
    office: "Desenvolvedor Full Stack",
    activities: "API REST com .NET e front com React",
    dateStart: "2023-04-01",
    contractActual: true
  },
  {
    id: 3,
    office: "Estagiário em TI",
    activities: "Manutenção de sistemas internos e suporte",
    dateStart: "2021-06-01",
    dateEnd: "2021-12-20",
    contractActual: false
  }
]
 )
    return <div>
      <div>
        <div>
            {!newExperience ? <button className="cursor-pointer hover:!text-blue-500 transition-all " onClick={()=>setNewExperience(true)}>+ adicionar nova formação</button> : <Card  as="fieldset" className="!p-5  bg-neutral-400"  >
               <h4 className="!mt-5">Nova Experiência</h4>
               <Divider />
               <div>
                 <label htmlFor="" className="">Titulo</label>
                 <Input />
               </div>
                <div className="flex items-center !my-3 !mr-2">
                   <div >
                    <label htmlFor="" className="!mx-2">Inicio</label>
                     <DatePicker/>
                   </div>
                   <div>
                     <label htmlFor="" className="!mx-2">Término</label>
                      <DatePicker/>
                    </div>
                    <div className="!mx-2">
                       <label htmlFor="" className="!mx-2">Trabalha aqui?</label>
                       <RadioGroup name="radio-group-inline" inline defaultValue="s">
                        <Radio value="s">sim</Radio>
                        <Radio value="n">Não</Radio>
                       </RadioGroup>
                    </div>
                </div>
                <div className="flex flex-col !my-2">
                  <label htmlFor="">Atividades</label>
                    <Input
                       as="textarea"
                       rows={5}
                       placeholder="Descreva as atividades no cargo,separando por virgula..."
                      className="!resize-none"
                    />
                </div>
                <div className="flex justify-center">
                  <Button appearance="ghost" className="!mx-1" onClick={()=>setNewExperience(false)}  color="green">adicionar</Button>
                  <Button appearance="ghost" className="!mx-1" onClick={()=>setNewExperience(false)}  color="red">fechar</Button>
                </div>
            </Card>
           
            }
            <hr />
            <div className="my-5">
                {!listExperiences ? <p className="!text-[15px] text-gray-400">Nenhuma experiência cadastrada</p> : <div>
                  <Divider />
                  <div>
                    {listExperiences.map((i,k)=><CardExperience key={k} experience={i} />)}
                  </div>
                 </div>
                }
            </div>
        </div>
      </div>

    </div>
}