import { Accordion, Button, DatePicker, Input, SelectPicker, type StackProps } from "rsuite"
import AdminIcon from '@rsuite/icons/Admin';

import { Stack, Avatar, } from 'rsuite';
import {  useState } from "react";
import { Block, Icon } from '@rsuite/icons';
import { BsPersonCircle as UserIcon } from "react-icons/bs";
import { BsFillMortarboardFill as FormationIcon } from "react-icons/bs";
import { BsBriefcaseFill as ExperienceIcon } from "react-icons/bs";
import { BsClipboardCheckFill as SkillsIcon} from "react-icons/bs";
import { SubFormExperience } from "../subforms/form-experiences";
import { SubFormTrainnings } from "../subforms/form-trainnigs";
import { SubFormSkill } from "../subforms/form-skills";

type HeaderProps = {
 icon?: React.ElementType; 
  title: string;
  subtitle?: string;
} & StackProps;

const Header = ({ icon, title, subtitle, ...rest }: HeaderProps) => {
  
  
  return (
    <Stack {...rest} spacing={10} alignItems="flex-start">
      <Icon as={icon} className="text-2xl"  />
      <Stack spacing={2} direction="column" alignItems="flex-start">
        <div className="text-2xl">{title}</div>
        <div style={{ color: 'var(--rs-text-secondary)', fontSize: 12 }}>{subtitle}</div>
      </Stack>
    </Stack>
  );
};




export const FormCurriculum=()=>{
  

  const gender=["Masculino","Feminino","Transgênero Masculino(Homem Trans)","Transgênero Feminino (Mulher Trans)","Não binário","Prefiro não informar","Outro"].map(
  item => ({ label: item, value: item })
);
 const sex=["Heterossexual","Homossexual (Gay ou Lésbica)","Bissexual","Prefiro não informar","Outro"].map(
  item => ({ label: item, value: item })
);




    return <div>
                <Accordion>
                    <Accordion.Panel header={<Header
                    icon={UserIcon}
                    title="Dados pessoais"
                   
                 />}
                    
                    defaultExpanded >
                     <div className="!my-3">
                          <label htmlFor=""> Nome Completo</label>
                          <Input className="" placeholder="Nome completo" />
                      </div>
                      <div className="!my-3">
                          <label htmlFor="">Email</label>
                          <Input className="" type="email" placeholder="meuemail@gmail.com"  />
                      </div>
                      <div className="!my-3">
                          <label htmlFor="">Linkedin</label>
                          <Input className="" type="url" placeholder="https://www.linkedin.com/in/seu-usuario"/>
                      </div>
                      <div className="!my-3">
                          <label htmlFor="">Github</label>
                          <Input className="" type="url" placeholder="https://github.com/seu-usuario"  />
                      </div>
                      <div className="flex items-center justify-around">
                           <div className="!my-3 !mx-1">
                              <label htmlFor="" className="mr-2">Data de Nascimento</label>
                              <DatePicker />
                           </div>
                           <div className="!my-3 !mx-1">
                              <label htmlFor="" className="!mr-2">Genero</label>
                              <SelectPicker searchable={false} placeholder="Selecione" className="w-[300px]" data={gender} />
                           </div>
                           <div className="!my-3 !mx-1">
                              <label htmlFor="" className="!mr-2">Sexualidade</label>
                              <SelectPicker searchable={false} placeholder="Selecione" className="w-[300px]" data={sex} />
                           </div>
                      </div>
                      <div className="flex !my-5 justify-center">
                         <Button appearance="primary" >adicionar e prosseguir</Button>
                      </div>
                     
                    </Accordion.Panel>
                    <Accordion.Panel    header={<Header icon={FormationIcon}  title="Formação"/>} >
                     <SubFormTrainnings />
                    </Accordion.Panel>
                    <Accordion.Panel   header={<Header icon={SkillsIcon} title="Habilidades" />} >
                      <SubFormSkill />
                    </Accordion.Panel>
                    <Accordion.Panel  header={<Header icon={ExperienceIcon} title="Experiência Profissional" />} >
                       <SubFormExperience />
                    </Accordion.Panel>
                  
              </Accordion>
                
</div>
}