// To get formatted Date
export const formattedDate = (inputDate) => {
  // Create a new Date object from the input string
  const date = new Date(inputDate);

  // Month names array
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

  // Get day, month, and year from the date object
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  // Format the date as "MonthName day, year" (e.g., "October 27, 2017")
  const formattedDate = `${months[monthIndex]} ${day}, ${year}`;

  return formattedDate;
};
