describe('leapYear', () => {
  it('returns leapyear when year is divisible by 400', () => {
    expect(leapYear(2000)).toEqual('Year 2000 is a leap year')
  });

  it('knows when year is not divisible by 400 but divisible by 100', () => {
    expect(leapYear(1700)).toEqual('Year 1700 is NOT a leap year')
  });

});
