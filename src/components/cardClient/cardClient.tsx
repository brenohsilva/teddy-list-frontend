// src/components/CardClient.tsx
import React from "react";

interface CardClientProps {
  name: string;
  salary: string;
  companyValue: string;
  onSelect?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

const CardClient: React.FC<CardClientProps> = ({
  name,
  salary,
  companyValue,
  onSelect,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="card  shadow-sm p-2 pb-0 mb-2">
      <div className="card-body ">
        
        <h5 className="card-title d-flex justify-content-center fw-bold ">{name}</h5>
        <p className="card-text d-flex justify-content-center gap-2 m-2 p-0 ">
          <p className="m-0 p-0">Salário:</p> R$ {salary}
        </p>
        <p className="card-text d-flex justify-content-center gap-2 ">
          <p className="m-0 p-0 fw-normal">Empresa:</p> R$ {companyValue}
        </p>
        <div className="d-flex justify-content-between gap-2 mb-0 pb-0">
          <button
            className="btn d-flex align-items-center gap-1 "
            onClick={onSelect}
          >
            <i className="bi bi-plus-lg "></i> 
          </button>
          <button
            className="btn  d-flex text-black align-items-center gap-1"
            onClick={onEdit}
          >
            <i className="bi bi-pencil"></i>
          </button>
          <button
            className="btn text-danger d-flex align-items-center gap-1"
            onClick={onDelete}
          >
            <i className="bi bi-trash"></i> 
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardClient;
