app.post('/api/submit-case', async (req, res) => {
  const { title, details, evidence, walletAddress, tier } = req.body;

  const newCase = {
    title,
    details,
    evidence,
    walletAddress,
    tier,
    timestamp: Date.now(),
    flaggedForVote: tier === "1",
    status: tier === "1" ? "Pending DAO Vote" : "Submitted",
    priority: tier === "1" ? "High" : "Normal"
  };

  try {
    await db.collection('cases').insertOne(newCase);

    if (tier === "1") {
      // Trigger DAO Voting Process
      await db.collection('votes').insertOne({
        caseId: newCase._id,
        voteStatus: 'Pending',
        votersNotified: false,
        voteDeadline: Date.now() + 24 * 60 * 60 * 1000 // 24hr deadline
      });

      // Optional: send DAO alert (e.g. email, push, dashboard notification)
    }

    res.status(200).json({ message: 'Case submitted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit case.' });
  }
});
