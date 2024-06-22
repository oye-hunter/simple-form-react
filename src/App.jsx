import "./App.css";
import PersonalDetailsForm from "./The-Form/PersonalDetailsForm";
import AcademicDetailsForm from "./The-Form/AcademicDetailsForm";
import SocialDetailsForm from "./The-Form/SocialDetailsForm";
import ProfessionalDetailsForm from "./The-Form/ProfessionalDetailsForm";
import { useState } from "react";
import StepsNav from "./StepsNav";
import Submission from "./The-Form/Submission";

function App() {
  const [steps, setSteps] = useState(1);
  return (
    <div className="App">
      <StepsNav />
      {
        {
          1: <PersonalDetailsForm setSteps={setSteps} steps={steps} />,
          2: <AcademicDetailsForm setSteps={setSteps} steps={steps} />,
          3: <SocialDetailsForm setSteps={setSteps} steps={steps} />,
          4: <ProfessionalDetailsForm setSteps={setSteps} steps={steps} />,
          5: <Submission />,
        }[steps]
      }
    </div>
  );
}

export default App;
