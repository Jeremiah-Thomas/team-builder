import React from "react";

const TeamList = (props) => {
  const { teamList } = props;
  return (
    <div className="teamList">
      {teamList.map((member) => {
        return (
          <div className="memberCard" key={Math.random()}>
            <p>Name: {member.name}</p>
            <p>Email: {member.email}</p>
            <p>Role: {member.role}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TeamList;
