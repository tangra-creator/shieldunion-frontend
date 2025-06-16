import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MemberLayout from '../components/MemberLayout';

const InfoTrade = () => {
  const [infoList, setInfoList] = useState([]);
  const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const res = await axios.get(`${API}/api/info-trade`);
        setInfoList(res.data);
      } catch (err) {
        console.error('Error fetching information trade items:', err);
      }
    };

    fetchInfo();
  }, []);

  return (
    <MemberLayout>
      <h2 className="text-2xl font-semibold mb-4">📁 Information Trade</h2>
      <p className="mb-4 text-gray-700">Browse verified, encrypted trade entries below.</p>
      {infoList.length > 0 ? (
        infoList.map((item) => (
          <div key={item.id} className="border p-4 rounded mb-3 bg-white shadow">
            <h4 className="font-bold">{item.title}</h4>
            <p>{item.summary}</p>
            <p className="text-sm text-gray-500 mt-2">Posted: {item.date}</p>
          </div>
        ))
      ) : (
        <p>No information available for trade yet.</p>
      )}
    </MemberLayout>
  );
};

export default InfoTrade;
