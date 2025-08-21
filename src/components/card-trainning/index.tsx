import { Card, IconButton, Tooltip} from "rsuite";
import { FiTrash, FiTrash2 } from "react-icons/fi";


interface ITrainning {
  id: number;
  title: string;
  type: "Ensino Superior " | "Bootcamp" | " Curso Técnico" | "Curso Livre" | string
  skills: string;
  dateStart: string | Date;
  dateEnd?: string | Date | null;
  previsionDateEnd?: string | Date | null; // Corrigido aqui
  trainningActual: boolean;
}

type Props = {
  trainning: ITrainning;
};

export const CardTrainning = ({ trainning }: Props) => {
  const formatDate = (date: string | Date | null | undefined) => {
    if (!date) return "";
    const d = new Date(date);
    return d.toLocaleDateString();
  };

  return (
    <Card className="!my-3 p-4">
      <div className="bg-neutral-200 !p-2 border-r-2 flex justify-between items-center">
        <h5>{trainning.title}</h5>
        <div>
          <IconButton appearance="primary" color="red" icon={<FiTrash />} />
        </div>
      </div>
      <div className="!p-5">
         <p>Tipo: {trainning.type}</p>
      <p>Habilidades desenvolvidas: {trainning.skills}</p>
      <p>Início: {formatDate(trainning.dateStart)}</p>

      {trainning.trainningActual || !trainning.dateEnd ? (
        <p>Previsão de término: {formatDate(trainning.previsionDateEnd)}</p>
      ) : (
        <p>Término: {formatDate(trainning.dateEnd)}</p>
      )}

      </div>
      
    </Card>
  );
};
