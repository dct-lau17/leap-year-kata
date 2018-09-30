describe('leapYear', () => {
  it('returns leapyear when year is divisible by 400', () => {
    expect(leapYear(400)).toEqual('Year 400 is a leap year')
  });
});
