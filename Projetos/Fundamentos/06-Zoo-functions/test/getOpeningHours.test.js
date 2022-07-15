const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('sem parametros retorna informação de todos dias', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };

    expect(getOpeningHours()).toEqual(expected);
  });

  it('Retorna "The zoo is closed" para os horarios fechados', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });

  it('Retorna "The zoo is open" para os horarios aberto', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
    expect(getOpeningHours('Saturday', '09:00-PM')).toBe('The zoo is open');
  });

  it('Retorna erro caso passe hora em formato de texto', () => {
    expect(() => getOpeningHours('Monday', 'nove')).toThrowError('The hour should represent a number');
  });

  it('retorna erro caso não passe AM ou PM', () => {
    expect(() => getOpeningHours('Monday', '09:00')).toThrowError('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('Retorna erro caso passe valores que não correspondem a hora e minuto', () => {
    expect(() => getOpeningHours('Saturday', '09:60-PM')).toThrowError('The minutes must be between 0 and 59');
    expect(() => getOpeningHours('Saturday', '13:00-PM')).toThrowError('The hour must be between 0 and 12');
  });

  it('Retorna erro caso dia passado não seja válido', () => {
    expect(() => getOpeningHours('ga', '10:00-PM')).toThrowError('The day must be valid. Example: Monday');
  });
});
