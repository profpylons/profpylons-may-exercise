import { band, whoPlaysWhat } from '../src';

const expected = {
  members: {
    // current: no changes
    current: [
      {name: 'Sascha', age: 59, plays: ['vocals', 'synth', 'guitar', 'bass']},
      {name: 'Lucia', age: 49, plays: ['vocals', 'synth']},
      {name: 'Jules', age: 53, plays: ['guitar', 'bass', 'synth']},
      {name: 'Steve', age: 55, plays: ['guitar']}
    ],

    // past: no changes
    past: [
      {name: 'Raymond', age: 57, plays: ['vocals', 'synth']},
      {name: 'En', age: 52, plays: ['vocals', 'drums', 'guitar', 'synth']},
      {name: 'Gunter', age: 57, plays: ['guitar', 'synth']}
    ],

    // ORDER MATTERS!
    // 1. Sort age first by DESC
    // 2. then sort name by ASC
    // 3. lowercase all the names
    all: [
      'sascha',
      'gunter',
      'raymond',
      'steve',
      'jules',
      'en',
      'lucia'
    ]
  },

  // plays order doesn't matter
  plays: {
    // name order doesn't matter
    // but show the name in lowercase
    vocals: ['sascha', 'lucia', 'raymond', 'en'],
    synth: ['sascha', 'lucia', 'jules', 'raymond', 'en', 'gunter'],
    guitar: ['sascha', 'jules', 'steve', 'en', 'gunter'],
    bass: ['sascha', 'jules'],
    drums: ['en']
  }
}

describe('bands', () => {
  describe('members', () => {
    describe('current members', () => {
      it('should return current members unaffected', () => {
        expect(band.members.current).toEqual(expected.members.current);
      });
    });

    describe('past members', () => {
      it('should return past members unaffected', () => {
        expect(band.members.past).toEqual(expected.members.past);
      });
    });

    describe('all ', () => {
      it('should return past and present members with lowercase names sorted by age(desc), then name(asc)', () => {
        expect(band.all()).toEqual(expected.members.all);
      });
    });

    describe('plays', () => {
      it('should return an object with instruments as keys and an array of members who play that instrument', () => {
        const players = whoPlaysWhat(band.members.current.concat(band.members.past));
        expect(players).toEqual(expect.objectContaining({
          vocals: expect.arrayContaining(expected.plays.vocals),
          synth: expect.arrayContaining(expected.plays.synth),
          guitar: expect.arrayContaining(expected.plays.guitar),
          bass: expect.arrayContaining(expected.plays.bass),
          drums: expect.arrayContaining(expected.plays.drums),
        }));
      });
    });
  });
});

describe('whoPlaysWhat', () => {
  it('should return an object with instruments as keys and an array of members who play that instrument', () => {
    const players = whoPlaysWhat(band.members.current.concat(band.members.past));
    expect(Object.keys(players).length).toBe(5)
    expect(players).toEqual(expect.objectContaining({
      vocals: expect.arrayContaining(expected.plays.vocals),
      synth: expect.arrayContaining(expected.plays.synth),
      guitar: expect.arrayContaining(expected.plays.guitar),
      bass: expect.arrayContaining(expected.plays.bass),
      drums: expect.arrayContaining(expected.plays.drums),
    }));
  });
});
