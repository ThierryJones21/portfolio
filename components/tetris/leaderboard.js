// Leaderboard.js
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

const Leaderboard = () => {
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchLeaderboard = async () => {
    try {
      const leaderboardRef = collection(db, "user-scores");
      const leaderboardSnapshot = await getDocs(leaderboardRef);

      const leaderboardData = leaderboardSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Sort scores in descending order based on the score property
      const sortedScores = leaderboardData.sort((a, b) => b.score - a.score);

      console.log("Leaderboard Data:", sortedScores);

      setScores(sortedScores);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeaderboard();
  }, []); // Run once on mount

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching leaderboard: {error.message}</div>;
  }

  return (
    <div>
      <h2>Leaderboard</h2>
      {scores.length > 0 ? (
        <ul>
          {scores.map((score) => (
            <li key={score.id}>
              {score.username}: {score.score}
            </li>
          ))}
        </ul>
      ) : (
        <div>No scores available.</div>
      )}
    </div>
  );
};

export default Leaderboard;
