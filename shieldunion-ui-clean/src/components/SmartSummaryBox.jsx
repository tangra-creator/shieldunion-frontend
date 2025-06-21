import React from "react";

const SmartSummaryBox = ({ summary }) => {
  if (!summary) return null;

  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-500 text-yellow-900 px-4 py-3 rounded mb-3">
      <h4 className="font-semibold mb-1">🧠 AI Summary:</h4>
      <p className="text-sm">{summary}</p>
    </div>
  );
};

export default SmartSummaryBox;
