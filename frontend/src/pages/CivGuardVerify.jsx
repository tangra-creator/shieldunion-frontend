import React, { useEffect, useState } from 'react';
import CivGuardLayout from '../components/CivGuardLayout';
import axios from 'axios';

const CivGuardVerify = () => {
  const [data, setData] = useState([]);
  const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API}/api/verify-evidence`);
        setData(res.data);
      } catch (err) {
        console.error('Failed to load verification data:', err);
      }
    };

    fetchData();
  }, []);

  return (
    <CivGuardLayout>
      <h2 className="text-2xl font-bold mb-4">📁 Verify Evidence</h2>
      {data.length > 0 ? (
        data.map((item) => (
          <div key={item.id} className="p-3 bg-white rounded shadow mb-3">
            <h4 className="font-semibold">{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))
      ) : (
        <p>No evidence to verify.</p>
      )}
    </CivGuardLayout>
  );
};

export default CivGuardVerify;
