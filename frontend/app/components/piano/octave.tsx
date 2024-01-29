import React from 'react';
import PianoKey from './piano-key.component';

interface OctaveProps {
  pitch: number;
}

export default function Octave({ pitch }: OctaveProps) {
  const notes = [
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
    'A',
    'A#',
    'B',
  ];

  const createKey = (n: string) => (
    <PianoKey
      key={n + pitch}
      note={n + pitch}
      className={`flex justify-center items-end select-none list-none active:bg-highlight hover:bg-subHighlight ${
        n.length === 1
          ? 'bg-white w-[25px] h-[125px]'
          : 'bg-black w-[18px] h-[80px] mx-[-9px] my-0 z-20'
      }`}
    />
  );

  const createOctave = (pitch: number) => {
    if (pitch === 0) return notes.slice(-3).map((n) => createKey(n));
    if (pitch === 8) return notes.slice(0, 1).map((n) => createKey(n));
    return notes.map((n) => createKey(n));
  };

  return <ul className='flex m-0 p-0'>{createOctave(pitch)}</ul>;
}