import { useNavigate } from "react-router-dom";
import { FUNCTIONALITIES } from "../constants/functionalities";
import Card from "./card.component";

const FuncPreview = () => {
  const navigate = useNavigate()
  const clickHandler = (id) => () => {
    navigate(`/func/${id}`)
  };
  return (
    <div className="mt-5 ml-5 mr-5">
      <h1 className="text-3xl dark:text-white">Features</h1>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {FUNCTIONALITIES.map((func) => (
          <Card
            key={func.id}
            id={func.id}
            title={func.title}
            description={func.description}
            onClick={clickHandler(func.id)}
          />
        ))}
      </div>
    </div>
  );
};
export default FuncPreview;
