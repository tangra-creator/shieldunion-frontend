import React, { useState } from "react";

const CivGuardApply = () => {
  const [type, setType] = useState("solo");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    profession: "",
    region: "",
    tier: "",
    motivation: "",
    groupName: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${JSON.stringify(form)}`);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Apply as a CivGuard</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={handleChange}
          required
          className="w-full border p-2 mb-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border p-2 mb-2"
        />
        <div className="mb-2">
          <label className="mr-4">
            <input
              type="radio"
              name="type"
              value="solo"
              checked={form.type === "solo"}
              onChange={handleChange}
            />
            Solo
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="group"
              checked={form.type === "group"}
              onChange={handleChange}
            />
            Group
          </label>
        </div>
        {/* Other fields here... */}
        <button type="submit" className="bg-black text-white px-4 py-2 mt-4">
          Submit Application
        </button>
      </form>
    </div>
  );
};

