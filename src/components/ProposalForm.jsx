import React, { useState } from "react";

const ProposalForm = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    country: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://your-backend-url/api/proposal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        alert("Proposal submitted!");
        setForm({ title: "", description: "", country: "" });
      } else {
        alert("Failed to submit.");
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold">Propose ShieldUnion Legal Recognition</h2>
      <input
        type="text"
        name="title"
        placeholder="Proposal Title"
        value={form.title}
        onChange={handleChange}
        className="w-full border p-2"
        required
      />
      <textarea
        name="description"
        placeholder="Describe your proposal"
        value={form.description}
        onChange={handleChange}
        className="w-full border p-2"
        rows="5"
        required
      />
      <input
        type="text"
        name="country"
        placeholder="Country"
        value={form.country}
        onChange={handleChange}
        className="w-full border p-2"
        required
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Submit Proposal
      </button>
    </form>
  );
};

export default ProposalForm;
