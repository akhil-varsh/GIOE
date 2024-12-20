import React from 'react';

interface DonationProgressProps {
  current: number;
  goal: number;
}

const DonationProgress: React.FC<DonationProgressProps> = ({ current, goal }) => {
  const percentage = Math.min((current / goal) * 100, 100);

  return (
    <div className="w-full">
      <div className="flex justify-between mb-2">
        <span className="text-gray-600">Current: ${current.toLocaleString()}</span>
        <span className="text-gray-600">Goal: ${goal.toLocaleString()}</span>
      </div>
      <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-indigo-600 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="mt-2 text-right text-sm text-gray-500">
        {percentage.toFixed(1)}% Complete
      </div>
    </div>
  );
};

export default DonationProgress;