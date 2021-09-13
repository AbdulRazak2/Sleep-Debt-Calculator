const getSleepHours = (day) => {
  day = day.toLowerCase();
  switch (day) {
    case 'monday':
      return 8;
    case 'tuesday':
      return 7;
    case 'wednesday':
      return 8;
    case 'thursday':
      return 9;
    case 'friday':
      return 8;
    case 'saturday':
      return 8;
    case 'sunday':
      return 8;
    default:
      return 'Please enter a valid day.'
  }
}

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = (idealHours) => idealHours * 7;

const calculateSleepDebt = (idealHours) => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(idealHours);

  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep. Good job!');
  } else if (actualSleepHours >= idealSleepHours) {
    console.log(`You got ${actualSleepHours - idealSleepHours} hour(s) more sleep than you needed this week.`);
  } else {
    console.log(`You got ${idealSleepHours - actualSleepHours} hour(s) less sleep than you needed this week. Get some rest.`);
  }
}

calculateSleepDebt(8);