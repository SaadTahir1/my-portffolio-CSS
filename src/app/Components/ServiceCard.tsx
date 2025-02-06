import { IconType } from "react-icons";
import { FunctionComponent } from "react";
import { iService } from "../../../type";

const ServiceCard: FunctionComponent<{ service: iService }> = ({ service }) => {
  const{ Icon, title, about} = service;

  const createMarkup = () => {
    return { __html: about };
  };

  return (
    <div className="flex items-center p-2 space-x-4 px-4">
      <Icon className="w-12 h-12 text-green-600" /> {/* ✅ Ensure Icon is used correctly */}
      <div>
        <h4 className="font-bold">{title}</h4>
        <p dangerouslySetInnerHTML={createMarkup()}></p> {/* ✅ FIXED: No `{about}` inside <p> */}
      </div>
    </div>
  );
};

export default ServiceCard;
