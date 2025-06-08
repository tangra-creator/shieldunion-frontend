import { submitCaseToBackend } from './api/submitCase';
import React, { useEffect, useState } from 'react';

function App() {
  const [backendMessage, setBackendMessage] = useState('');
function handleSubmit() {
  const testCase = {
    name: "Test Member",
    tier: 1,
    description: "Testing API connection from frontend",
  };

  submitCaseToBackend(testCase).then(result => {
    if (result.success) {
      alert("✅ Case submitted successfully!");
    } else {
      alert("❌ Error: " + result.error);
    }
  });
}

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/`)
      .then(response => response.text())
      .then(text => setBackendMessage(text))
      .catch(error => {
        console.error('Error fetching backend:', error);
        setBackendMessage('Failed to connect to backend.');
      });
  }, []);

  return (
  <div>
    <h1>Shieldunion Frontend</h1>
    <p>Backend says: {backendMessage}</p>
    <button onClick={handleSubmit}>Submit Test Case</button>
  </div>
);

}

export default App;
