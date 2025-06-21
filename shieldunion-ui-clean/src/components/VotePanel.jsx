import React from "react";

const VotePanel = ({ proposalId, votesYes = 0, votesNo = 0, onVote, disabled }) => {
  return (
    <div className="mt-3 flex gap-3">
      <button
        onClick={() => onVote(proposalId, "yes")}
        disabled={disabled}
        className={`px-4 py-1 rounded text-white ${
          disabled ? "bg-green-300 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
        }`}
      >
        ✅ Vote Yes ({votesYes})
      </button>

      <button
        onClick={() => onVote(proposalId, "no")}
        disabled={disabled}
        className={`px-4 py-1 rounded text-white ${
          disabled ? "bg-red-300 cursor-not-allowed" : "bg-red-600 hover:bg-red-700"
        }`}
      >
        ❌ Vote No ({votesNo})
      </button>
    </div>
  );
};

export default VotePanel;
