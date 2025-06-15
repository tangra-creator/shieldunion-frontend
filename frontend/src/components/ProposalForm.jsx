import React, { useState } from 'react';
import axios from 'axios';

const ProposalForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    country: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://shieldunion-backend.onrender.com/api/proposals', formData);
      setSubmitted(true);
      setError('');
      alert('Proposal submitted successfully!');
    } catch (err) {
      console.error(err);
      setError('Error submitting proposal');
      alert('Error submitting.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>📜 Propose ShieldUnion Legal Recognition</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Proposal Title:</label>
          <input
            type="text"
            name="title"
            placeholder="Proposal Title"
            value={formData.title}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Description:</label>
          <textarea
            name="description"
            placeholder="Describe your proposal"
            value={formData.description}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', resize: 'vertical' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Country:</label>
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px' }}
          />
        </div>

        <button type="submit">Submit Proposal</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {submitted && <p style={{ color: 'green' }}>Proposal submitted!</p>}
    </div>
  );
};

export default ProposalForm;
