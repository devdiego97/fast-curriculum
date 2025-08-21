import { FiTrash } from "react-icons/fi";
import { Card, IconButton } from "rsuite";

interface IExperience {
  id: number;
  office: string;
  activities: string;
  dateStart: string | Date;
  dateEnd?: string | Date | null;
  contractActual: boolean;
}

type Props = {
  experience: IExperience;
};

export const CardExperience = ({ experience }: Props) => {
  const formatDate = (date: string | Date) => {
    if (!date) return "";
    const d = new Date(date);
    return d.toLocaleDateString(); // ou d.toISOString().split("T")[0] se quiser YYYY-MM-DD
  };

  return (
    <Card className="!my-3 p-4">
        <div className="bg-neutral-200 !p-2 border-r-2 flex justify-between items-center">
             <h5>{experience.office}</h5>
        <div>
          <IconButton appearance="primary" color="red" icon={<FiTrash />} />
        </div>
      </div>
    <div className="!p-3">
         <p>Início: {formatDate(experience.dateStart)}</p>

      {experience.contractActual || experience.dateEnd == null ? (
        <p>Empresa atual</p>
      ) : (
        <p>Fim: {formatDate(experience.dateEnd)}</p>
      )}

      <p>Atividades: {experience.activities}</p>
    </div>
    </Card>
  );
};
