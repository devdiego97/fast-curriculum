import { CardExperience } from "../../card-experience";
import { CardTrainning } from "../../card-trainning";
import { useState } from "react"
import { Button, Card, DatePicker, Divider, Input, InputPicker, Radio, RadioGroup, SelectPicker } from "rsuite"



//Formulario responsavel pela rendenrização das experiencias e adição e exclusão das mesmas
export const SubFormTrainnings=()=>{

    
const datatrainnings = ['Ensino Superior', 'Bootcamp','Curso Técninco','Curso Livre'].map(
  item => ({ label: item, value: item })
);


 const [newTrainning,setNewTrainning]=useState(false)
 const [listTrainnings,setListTrainnings]=useState([
  {
    id: 1,
    title: "Análise e Desenvolvimento de Sistemas",
    type: "Ensino Superior",
    skills: "Programação, Estrutura de Dados, Banco de Dados, Engenharia de Software",
    dateStart: "2020-02-01",
    dateEnd: "2023-12-01",
    trainningActual: false,
  },
  {
    id: 2,
    title: "Bootcamp Full Stack Java Developer - Santander / DIO",
    type: "Bootcamp",
    skills: "Java, Spring Boot, React, Git, SQL",
    dateStart: "2024-03-01",
    previsionDateEnd: "2024-07-01",
    trainningActual: true,
  },
  {
    id: 3,
    title: "Curso Técnico em Informática",
    type: "Curso Técnico",
    skills: "Lógica de Programação, Redes, Hardware, Linux",
    dateStart: "2018-01-15",
    dateEnd: "2019-12-10",
    trainningActual: false,
  },
  {
    id: 4,
    title: "Curso de TypeScript com React",
    type: "Curso Livre",
    skills: "TypeScript, React, Componentização, Hooks",
    dateStart: "2025-01-10",
    previsionDateEnd: "2025-03-10",
    trainningActual: true,
  },
  {
    id: 5,
    title: "Curso de UX/UI Design",
    type: "Curso Livre",
    skills: "Design Thinking, Figma, Prototipação, Heurísticas de Nielsen",
    dateStart: "2022-05-01",
    dateEnd: "2022-08-01",
    trainningActual: false,
  }
] )


    return <div>
      <div>
        <div>
            {!newTrainning ? <button className="cursor-pointer hover:!text-blue-500 transition-all " onClick={()=>setNewTrainning(true)}>+ adicionar nova formação</button> : <Card  as="fieldset" className="!p-5  bg-neutral-400"  >
               <h4 className="!mt-5">Nova Formação</h4>
               <Divider />
               <div>
                 <label htmlFor="" className="">Titulo</label>
                 <Input />
               </div>
                <div className="flex items-center !my-3 !mr-2">
                   <div className="!mr-2">
                    <label htmlFor="">Inicio</label>
                     <DatePicker/>
                   </div>
                   <div>
                     <label htmlFor="" className="mx-2">Término</label>
                      <DatePicker/>
                    </div>
                     <div>
                     <label htmlFor="" className="mx-2">Tipo</label>
                       <SelectPicker searchable={false} placeholder="Selecione" data={datatrainnings} style={{ width: 224 }} />
                    </div>
                    

                    <div className="mx-2">
                       <label htmlFor="" className="mx-2">Cursando?</label>
                       <RadioGroup name="radio-group-inline" inline defaultValue="s">
                        <Radio value="s">sim</Radio>
                        <Radio value="n">Não</Radio>
                       </RadioGroup>
                    </div>
                </div>
                <div className="flex flex-col !my-2">
                  <label htmlFor="">Habilidades desenvolvidas</label>
                    <Input
                       as="textarea"
                       rows={5}
                       placeholder="Descreva as habilidades que o curso abordou..."
                      className="!resize-none"
                    />
                </div>
                <div className="flex justify-center">
                  <Button appearance="ghost" className="!mx-1" onClick={()=>setNewTrainning(false)}  color="green">adicionar</Button>
                  <Button appearance="ghost" className="!mx-1" onClick={()=>setNewTrainning(false)}  color="red">fechar</Button>
                </div>
            </Card>
           
            }
            <hr />
            <div className="!my-5">
                {!listTrainnings ? <p className="text-[15px] text-gray-400">Nenhuma formação cadastrada</p> : <div>
                  <Divider />
                  <div>
                    {listTrainnings.map((i,k)=><CardTrainning key={k} trainning={i} />)}
                  </div>
                 </div>
                }
            </div>
        </div>
      </div>

    </div>
}