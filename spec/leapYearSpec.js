describe('leapYear', () => {
  it('returns leapyear when year is 2000', () => {
    expect(leapYear(2000)).toEqual('Year 2000 is a leap year')
  });

  it('knows year 1700 is not not a leap year', () => {
    expect(leapYear(1700)).toEqual('Year 1700 is NOT a leap year')
  });

  it('knows year 2008 is a leap year', () => {
    expect(leapYear(2008)).toEqual('Year 2008 is a leap year')
  });

  it('knows year 2100 is NOT leap year', () => {
    expect(leapYear(2100)).toEqual('Year 2100 is NOT a leap year')
  });

  it('knows year 2018 is NOT leap year', () => {
    expect(leapYear(2018)).toEqual('Year 2018 is NOT a leap year')
  });

});
