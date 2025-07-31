'use client';

import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const workingHours = [
  { day: 'Monday', time: '22:10:00' },
  { day: 'Tuesday', time: '21:00:00' },
  { day: 'Wednesday', time: '20:30:00' },
  { day: 'Thursday', time: '20:00:00' },
  { day: 'Friday', time: '', isDayOff: true },
  { day: 'Saturday', time: '', isDayOff: true },
  { day: 'Sunday', time: '22:00:00' },
];

export default function WorkingHoursDropdown() {
  return (
    <div className="relative group inline-block text-left border-r border-gray-600">
      <Button
        variant="ghost"
        className="text-sm gap-1 text-white hover:bg-primary hover:text-white" 
      >
        Working Hours
        <ChevronDown className="w-4 h-4 text-[#677588]" />
      </Button>

      {/* Dropdown يظهر عند hover */}
      <div className="absolute z-50 mt-2 w-56 origin-top-right rounded-md bg-primary  shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200">
        <div className="p-2 space-y-1">
          {workingHours.map(({ day, time, isDayOff }) => (
            <div
              key={day}
              className="flex justify-between text-sm px-2 py-1 rounded hover:bg-gray-100 "
            >
              <span className={isDayOff ? 'text-gray-400 italic' : 'text-gray-50'}>
                {day}
              </span>
              <span className={isDayOff ? 'text-gray-400 italic' : 'text-gray-50'}>
                {isDayOff ? 'Day Off' : time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
