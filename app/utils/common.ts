export interface DateTimeSlot {
  date: string;
  slots: string[];
}

export function generateDateTimeSlots(
  startTime: string = "9:00 AM",
  endTime: string = "10:00 PM"
): DateTimeSlot[] {
  const slotsByDay: DateTimeSlot[] = [];
  const today = new Date();

  const startMatch = startTime.match(/(\d+):(\d+)\s*(AM|PM)/i);
  const endMatch = endTime.match(/(\d+):(\d+)\s*(AM|PM)/i);

  if (!startMatch || !endMatch) {
    throw new Error("Invalid start or end time format.");
  }

  const [, startHourStr, startMinuteStr, startPeriod] = startMatch;
  const [, endHourStr, endMinuteStr, endPeriod] = endMatch;

  const startTimeInMinutes = convertTo24Hour(
    parseInt(startHourStr),
    parseInt(startMinuteStr),
    startPeriod
  );
  const endTimeInMinutes = convertTo24Hour(
    parseInt(endHourStr),
    parseInt(endMinuteStr),
    endPeriod
  );

  // Generate slots for the next 7 days, skipping Saturday and Sunday
  for (let day = 0; day < 7; day++) {
    const currentDate = new Date(today);
    currentDate.setDate(today.getDate() + day);

    const dayOfWeek = currentDate.getDay();
    if (dayOfWeek === 6 || dayOfWeek === 0) {
      // Skip Saturday (6) and Sunday (0)
      continue;
    }

    const dailySlots: string[] = [];

    // Loop from start to end time in 30-minute increments
    for (
      let minutes = startTimeInMinutes;
      minutes <= endTimeInMinutes;
      minutes += 30
    ) {
      const timeSlot = new Date(currentDate);
      timeSlot.setHours(Math.floor(minutes / 60) % 24, minutes % 60, 0, 0);

      const timeString = timeSlot.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      dailySlots.push(timeString);
    }

    const dayName = currentDate.toLocaleDateString("en-US", {
      weekday: "short",
    });
    const dayNumber = currentDate.getDate();
    const dateString = `${dayName} ${dayNumber}`;

    slotsByDay.push({
      date: dateString.toLocaleUpperCase(),
      slots: dailySlots,
    });
  }

  return slotsByDay;
}

// Helper function to convert 12-hour time to 24-hour time in minutes
function convertTo24Hour(hour: number, minute: number, period: string): number {
  if (period.toUpperCase() === "PM" && hour !== 12) {
    hour += 12;
  } else if (period.toUpperCase() === "AM" && hour === 12) {
    hour = 0;
  }
  return hour * 60 + minute;
}
