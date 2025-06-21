import React from "react";

const ProposalCard = ({ proposal, onVote, API }) => {
  return (
    <div className="mb-6 p-4 border rounded-xl bg-gray-50 shadow-sm">
      <h3 className="text-lg font-semibold mb-1">{proposal.title}</h3>
      <p className="text-sm text-gray-700 mb-2">{proposal.description}</p>

      {proposal.aiSummary && (
        <div className="bg-yellow-50 border-l-4 border-yellow-500 text-yellow-900 px-4 py-2 mb-3 rounded">
          <strong>🧠 AI Summary:</strong>
          <p className="text-sm">{proposal.aiSummary}</p>
        </div>
      )}

      <p className="text-sm">🕒 Duration: {proposal.duration} day(s)</p>
      <p className="text-sm">⚠️ Urgency: {proposal.urgency}</p>

      {proposal.file ? (
        <p className="text-sm">
          📎{" "}
          <a
            href={`${API}${proposal.file}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            View Evidence
          </a>
        </p>
      ) : (
        <p className="text-sm text-gray-500">📎 No evidence uploaded</p>
      )}

      <div className="mt-3 flex gap-3">
        <button
          onClick={() => onVote(proposal._id, "yes")}
          className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
        >
          ✅ Vote Yes ({proposal.votesYes || 0})
        </button>
        <button
          onClick={() => onVote(proposal._id, "no")}
          className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
        >
          ❌ Vote No ({proposal.votesNo || 0})
        </button>
      </div>
    </div>
  );
};

export default ProposalCard;
