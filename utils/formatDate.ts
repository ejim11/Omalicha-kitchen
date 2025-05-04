/**
 * Formats a date into the format: "Tuesday, March 25, 2025 at 7:00pm"
 * @param {Date|string|number} dateInput - Date object, ISO string, or timestamp
 * @returns {string} Formatted date string
 */
export function formatDate(dateInput: string, showTime?: boolean) {
  // Convert input to Date object if it's not already
  const date = new Date(dateInput);

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date input");
  }

  // Array of day names
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Array of month names
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get date components
  const dayName = days[date.getDay()];
  const monthName = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  // Get time components
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";

  // Convert hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // Convert '0' to '12'

  // Format minutes with leading zero if needed
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  // Create the formatted string
  return `${dayName}, ${monthName} ${day}, ${year}${
    showTime ? ` at ${hours}:${formattedMinutes}${ampm}` : ""
  }`;
}

export function convertTo12Hour(time24: string) {
  // Check if the input is in the correct format
  // if (!/^\d{1,2}:\d{2}$/.test(time24)) {
  //   throw new Error('Input must be in the format "HH:MM" (e.g., "14:00", "09:30")');
  // }

  // Split the time into hours and minutes
  const [hoursStr, minutes] = time24.split(":");
  let hours = parseInt(hoursStr, 10);

  // Determine if it's AM or PM
  const period = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12;
  // Handle midnight (0) as 12
  hours = hours === 0 ? 12 : hours;

  // Return the formatted time
  return `${hours}:${minutes} ${period}`;
}
