function leapYear(year) {
  if(isDivisibleBy400(year) && isDivisibleBy100(year) || isDivisibleBy4(year) && !isDivisibleBy100(year)){
        return 'Year ' + year + ' is a leap year';
  }
  return 'Year ' + year + ' is NOT a leap year';
}

function isDivisibleBy400(year) {
  return year % 400 === 0
}

function isDivisibleBy100(year) {
  return year % 100 === 0
}

function isDivisibleBy4(year) {
  return year % 4 === 0
}
