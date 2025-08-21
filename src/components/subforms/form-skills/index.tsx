import { useEffect, useState } from "react";
import { Button, Card, Divider, Input, Tag } from "rsuite";
import { SelectPicker } from 'rsuite';


export const SubFormSkill=()=>{
const datatrainnings = ['Ensino Superior', 'Bootcamp','Curso Técninco','Curso Livre'].map(
  item => ({ label: item, value: item })
);
const data = ['Desenvolvimento de aplicativos', 'Trabahho em equipe', 'Desenvolvimento de sistemas e apis com Java/Spring ', 'Nancy', 'Lloyd', 'Alice', 'Julia', 'Albert'].map(
  item => ({ label: item, value: item })
);

 const [newSkill,setNewSkill]=useState(false)
const [listSkills, setListSkills] = useState<string[] | []>([])
 const [skill,setSkill]=useState<string | null>("")


  const handleAddSkill = () => {
   
     let list=[...listSkills,skill]
      setListSkills(list as string[])
    
    setSkill(null);
    setNewSkill(false);
  };

    return <div>
      <div>
        <div>
            {!newSkill? <button className="cursor-pointer hover:!text-blue-500 transition-all " onClick={()=>setNewSkill(true)}>+ adicionar nova habilidade</button> : <Card  as="fieldset" className="!p-5  bg-neutral-400"  >
               <h4 className="!mt-5">Nova Habilidade</h4>
               <Divider />
               <div>
                   <SelectPicker onChange={value=>setSkill(value)} value={skill} className="w-full" size="md" placeholder="Medium" data={data}  />
                </div>
                <div className="flex !my-2 justify-center">
                  <Button appearance="ghost" className="!mx-1" onClick={handleAddSkill}  color="green">adicionar</Button>
                  <Button appearance="ghost" className="!mx-1" onClick={()=>setNewSkill(false)}  color="red">fechar</Button>
                </div>
            </Card>
           
            }
            <hr />
            <div className="!my-5">
                {!listSkills ? <p className="text-[15px] text-gray-400">Nenhuma habilidade cadastrada</p> : <div>
                  <div className="!my-2 ">
                   {
                    listSkills.map((i,k)=><Tag size="md" closable  key={k} >{i}</Tag>)
                   }
                  </div>
                 </div>
                }
            </div>
        </div>
      </div>

    </div>
}