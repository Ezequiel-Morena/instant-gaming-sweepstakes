import React from 'react';

interface TimeUnit {
  value: string;
  label: string;
}

interface CountdownTimerProps {
  formattedTime: {
    days?: string;
    hours?: string;
    minutes?: string;
    seconds?: string;
  } | null;
}

const TIME_UNITS: TimeUnit[] = [
  { value: 'days', label: 'Days' },
  { value: 'hours', label: 'Hours' },
  { value: 'minutes', label: 'Minutes' },
  { value: 'seconds', label: 'Seconds' },
];

const CountdownTimer: React.FC<CountdownTimerProps> = ({ formattedTime }) => {
  if (!formattedTime) return null;

  return (
    <div className="countdown-timer">
      <div className="panels">
        {TIME_UNITS.map((unit) => (
          formattedTime[unit.value as keyof typeof formattedTime] && (
            <div key={unit.value} className="square">
              <div className="number">
                {formattedTime[unit.value as keyof typeof formattedTime]}
              </div>
              <div className="letters">{unit.label}</div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;