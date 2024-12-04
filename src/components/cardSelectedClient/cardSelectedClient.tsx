// src/components/CardClient.tsx
import React from "react";
import styles from '../cardClient/cardClient.module.css'
interface SelectedClientCardProps {
  name: string;
  salary: string;
  companyValue: string;
  isSelected?: boolean;
  onSelect?: () => void;
  onEdit?: () => void;
  onRemove?: () => void;
}

const SelectedClientCard: React.FC<SelectedClientCardProps> = ({
  name,
  salary,
  companyValue,
  isSelected,
  onRemove,
}) => {
  return (
    <div className={`card shadow-sm p-2 pb-0 mb-2 ${
      isSelected ? `${styles.cardSelected} text-white` : ""
    }`}>
      <div className="card-body ">
        
        <h5 className="card-title d-flex justify-content-center fw-bold ">{name}</h5>
        <p className="card-text d-flex justify-content-center gap-2 m-2 p-0 ">
          <p className="m-0 p-0">Salário:</p> R$ {salary}
        </p>
        <p className="card-text d-flex justify-content-center gap-2 ">
          <p className="m-0 p-0 fw-normal">Empresa:</p> R$ {companyValue}
        </p>
        <div className="d-flex justify-content-end gap-2 mb-0 pb-0">
          <button
            className="btn text-danger d-flex align-items-center gap-1"
            onClick={onRemove}
          >
            <i className="bi bi-trash"></i> 
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectedClientCard;
