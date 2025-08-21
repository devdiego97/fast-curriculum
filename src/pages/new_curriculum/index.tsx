import { FormCurriculum } from "../../components/form-curriculum"

export const NewCurriculum=()=>{
    return <div>
       <div className="w-full h-full flex justify-center p-5">
        <div className="w-[80%]">
          <p className="!text-5x1 !my-4">Chegou a hora de criar seu curriculo!Preencha os campos com suas informações</p>
          <FormCurriculum />
        </div>
         
       </div>

    </div>
}