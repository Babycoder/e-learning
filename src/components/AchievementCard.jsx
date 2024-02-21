import React from "react";
import { PiGraduationCapLight } from "react-icons/pi";
import { PiVideoCameraThin } from "react-icons/pi";
import { PiUsersThreeLight } from "react-icons/pi";

const AchievementCard = ({ achievement }) => {
  const bgColor = achievement.icon.bgc;

  const selectIcon = (icon) => {
    switch (icon.name) {
      case "PiGraduationCapLight":
        return <PiGraduationCapLight size={icon.size} color={icon.color} />;
      case "PiVideoCameraThin":
        return <PiVideoCameraThin size={icon.size} color={icon.color} />;
      case "PiUsersThreeLight":
        return <PiUsersThreeLight size={icon.size} color={icon.color} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex items-center gap-8">
        <div className="w-fit rounded-md" style={{ background: bgColor }}>
          {selectIcon(achievement.icon)}
        </div>
        <div>
          <h2 className="text-2xl font-semibold">{achievement.count}</h2>
          <p className="text-[#6D737A]">{achievement.category}</p>
        </div>
      </div>
    </>
  );
};

export default AchievementCard;
