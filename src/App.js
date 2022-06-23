import { useState } from "react";
import "./App.css";
import TeamForm from "./components/TeamForm";
import TeamList from "./components/TeamList";

function App() {
  const [formData, setFormData] = useState({ name: "", email: "", role: "" });
  const [teamMembers, setTeamMembers] = useState([]);

  return (
    <div className="App">
      <TeamForm
        updateFormData={setFormData}
        formData={formData}
        updateMembers={setTeamMembers}
        members={teamMembers}
      />
      <TeamList teamList={teamMembers} />
    </div>
  );
}

export default App;
