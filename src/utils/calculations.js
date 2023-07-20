//Week format calculation

/* const months = [
  {
    name: "Jan",
    numberOfDays: 31,
  },
  {
    name: "Fev",
    numberOfDays: 28,
  },
  {
    name: "Mar",
    numberOfDays: 31,
  },
  {
    name: "Apr",
    numberOfDays: 30,
  },
  {
    name: "May",
    numberOfDays: 31,
  },
  {
    name: "Jun",
    numberOfDays: 30,
  },
  {
    name: "Jul",
    numberOfDays: 31,
  },
  {
    name: "Aug",
    numberOfDays: 31,
  },
  {
    name: "Sep",
    numberOfDays: 30,
  },
  {
    name: "Oct",
    numberOfDays: 31,
  },
  {
    name: "Nov",
    numberOfDays: 30,
  },
  {
    name: "Dec",
    numberOfDays: 31,
  },
];*/

const months = [
  "Jan",
  "Fev",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function weekFormat() {
  const previousWeeks = 10; //Number of weeks want to go back
  const futureWeeks = 10; //Number of weeks we want to go forward
  let dayCorrection = -previousWeeks * 7 - 7;
  let calendar = [];

  for (let i = 0; i < previousWeeks + futureWeeks; i++) {
    dayCorrection = dayCorrection + 7;
    const currentDate = new Date(); //Current Date
    const startDateCurrentYear = new Date(currentDate.getFullYear(), 0, 1); //First day of the current year
    const dayInMilliseconds = 24 * 60 * 60 * 1000; //A day in milliseconds
    const currentDay =
      Math.floor(currentDate - startDateCurrentYear) / dayInMilliseconds; //Number of days passed in this year
    const weekNumber = Math.ceil(currentDay / 7) + i - previousWeeks; //Current week number
    const dayOfTheMonth = currentDate.getDate() + dayCorrection; //Current Day of the month
    const dayOfTheWeek = currentDate.getDay(); // Current Day of the week
    const firstDayOfTheWeek = new Date(
      currentDate.setDate(dayOfTheMonth - dayOfTheWeek + 1)
    );
    const lastDayOfTheWeek = new Date(
      currentDate.setDate(currentDate.getDate() + 6)
    );

    const firstDayMonth = firstDayOfTheWeek.getMonth(); //month in the first day of the week (0 to 11)
    const lastDayMonth = lastDayOfTheWeek.getMonth(); //month in the last day of the week (0 to 11)
    const firstDayMonthName = months[firstDayMonth]; //month in the first day of the week (Jan to Dec)
    const lastDayMonthName = months[lastDayMonth]; //month in the first day of the week (Jan to Dec)

    const weekText = `week ${weekNumber} (${firstDayOfTheWeek.getDate()} ${firstDayMonthName} - ${lastDayOfTheWeek.getDate()} ${lastDayMonthName})`;
    calendar.push(weekText);
  }
  return calendar;
}

export const weekList = weekFormat();
