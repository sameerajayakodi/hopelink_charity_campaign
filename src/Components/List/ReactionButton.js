import React, { useState } from "react";

// Icons for reactions
const reactions = [
  { emoji: "👩‍❤️‍👨", label: "Love" },
  { emoji: "❤️", label: "Heart" },
  { emoji: "💚", label: "Green Heart" },
  { emoji: "✨", label: "Star" },
  { emoji: "🌸", label: "Flower" },
];

const ReactionButton = () => {
  const [selectedReaction, setSelectedReaction] = useState(null);
  const [count, setCount] = useState(28); // Initial count

  const handleReactionClick = (reaction) => {
    setSelectedReaction(reaction);
    setCount(count + 1); // Increment count when a reaction is clicked
  };

  return (
    <div className="reactionButtonOuter flex items-center space-x-2 bg-gray-100 p-2 rounded-full">
      {/* Selected reaction or placeholder */}
      <div className="flex items-center space-x-1">
        {selectedReaction ? (
          <span
            role="img"
            aria-label={selectedReaction.label}
            className="text-2xl"
          >
            {selectedReaction.emoji}
          </span>
        ) : (
          <span className="text-gray-400">❤️</span>
        )}
        <span className="text-gray-700">{count}</span>
      </div>

      {/* Reaction options */}
      <div className="flex space-x-2">
        {reactions.map((reaction) => (
          <button
            key={reaction.label}
            onClick={() => handleReactionClick(reaction)}
            className="text-2xl cursor-pointer hover:scale-110 transition-transform duration-200 ease-out"
            title={reaction.label}
          >
            {reaction.emoji}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ReactionButton;
