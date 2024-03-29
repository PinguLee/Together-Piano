import React, { useState } from 'react';
import PianoKey from '@/app/components/piano/piano-key.component';

interface OctaveProps {
  pitch: number;
}

export default function PianoOctave({
  pitch,
  playNote,
}: OctaveProps & { playNote: (note: string) => void }) {
  const notes = [
    'c',
    'cs',
    'd',
    'ds',
    'e',
    'f',
    'fs',
    'g',
    'gs',
    'a',
    'as',
    'b',
  ];

  const createKey = (n: string) => (
    <PianoKey
      key={n + pitch}
      note={n + pitch}
      className={`active:bg-highlight hover:bg-subHighlight piano ${
        n.length === 1 ? 'white-key' : 'black-key'
      }`}
      playNote={playNote} // playNote 함수를 PianoKey에 전달
    />
  );

  const createOctave = (pitch: number) => {
    if (pitch === 0) return notes.slice(-3).map((n) => createKey(n));
    if (pitch === 8) return notes.slice(0, 1).map((n) => createKey(n));
    return notes.map((n) => createKey(n));
  };

  return <>{createOctave(pitch)}</>;
}
