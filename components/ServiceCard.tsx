import React, { FunctionComponent } from "react";
import { IServices } from "../type";

const ServiceCard: FunctionComponent<{ service: IServices }> = ({
  service: { Icon, description, title },
}) => {
  const createMarkUp = () => {
    return { __html: description };
  };
  return (
    <div className="flex items-center p-2 space-x-4">
      <Icon className="w-12 h-12 text-green" />
      <div className="">
        <h4 className="font-bold">{title}</h4>
        <p dangerouslySetInnerHTML={createMarkUp()} />
      </div>
    </div>
  );
};

export default ServiceCard;
