
export const band = {
  members: {
      current: [
          {name: 'Sascha', age: 59, plays: ['vocals', 'synth', 'guitar', 'bass']},
          {name: 'Lucia', age: 49, plays: ['vocals', 'synth']},
          {name: 'Jules', age: 53, plays: ['guitar', 'bass', 'synth']},
          {name: 'Steve', age: 55, plays: ['guitar']}
      ],
      past: [
          {name: 'Raymond', age: 57, plays: ['vocals', 'synth']},
          {name: 'En', age: 52, plays: ['vocals', 'drums', 'guitar', 'synth']},
          {name: 'Gunter', age: 57, plays: ['guitar', 'synth']}
      ]
  },
  all: () => {
      return band.members.current.concat(band.members.past)
        .sort((a, b) => {
          const diff = b.age - a.age; // sort by age DESC
          if (diff === 0) {
            return a.name.localeCompare(b.name); //and then by name ASC
          }
          return diff;
        })
        .map(member => member.name.toLowerCase())
  },
  plays: (): InstrumentPlayers => whoPlaysWhat(band.members.current.concat(band.members.past)),
};

export const whoPlaysWhat = (bandMembers: BandMember[]): any => {
  return bandMembers.reduce((acc: InstrumentPlayers, member: BandMember) => {
    member.plays.forEach((play: string) => {
      if (acc[play]) {
        acc[play].push(member.name.toLowerCase());
      } else {
        acc[play] = [member.name.toLowerCase()];
      }
    });
    return acc;
  }, {} as InstrumentPlayers);
}

export type Band = {
  members: {
      current: BandMember[];
      past: BandMember[];
  };
  all: string[]
  plays: InstrumentPlayers;
}

export type BandMember = {
  name: string;
  age: number;
  plays: string[];
}

export type InstrumentPlayers = {
  [key: string]: string[];
}
