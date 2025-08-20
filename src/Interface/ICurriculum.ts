import type { IExperience } from "./IExperience";
import type { ISkill } from "./ISkill";
import type { ITrainning } from "./Trainning";

export  interface ICurriculum{
  id:number,
  userId:string,
  linkedinUrl:string,
  githubUrl:string | null,
  datNasc:Date,
  skills:ISkill[],
  experiences:IExperience[],
  trainnings:ITrainning[]
}
    
