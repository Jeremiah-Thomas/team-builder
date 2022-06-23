import React from "react";

const TeamForm = (props) => {
  const { updateFormData, formData, updateMembers, members } = props;
  const submit = (evt) => {
    evt.preventDefault();
    updateMembers([...members, formData]);
  };

  const handleChange = (evt) => {
    updateFormData({ ...formData, [evt.target.name]: evt.target.value });
  };
  return (
    <form className="teamForm" onSubmit={submit}>
      <label htmlFor="name">
        Name
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Enter Name..."
          onChange={handleChange}
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter an email..."
          onChange={handleChange}
        />
      </label>
      <label htmlFor="role">
        Role
        <select name="role" value={formData.role} onChange={handleChange}>
          <option hidden value="default">
            -- Select a Role --
          </option>
          <option value="Backend Engineer">Backend Engineer</option>
          <option value="Frontend Engineer">Frontend Engineer</option>
          <option value="Designer">Designer</option>
        </select>
      </label>
      <input type="submit" value="Add Team Member" />
    </form>
  );
};

export default TeamForm;
