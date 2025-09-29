import { useState, useCallback } from "react";

export const useSwitcher = (defaultValue: boolean = false): readonly [
  boolean,
  () => void,
  () => void,
  () => void
] => {
  const [value, setValue] = useState<boolean>(defaultValue);

  const turnOn = useCallback(() => setValue(true), []);
  const turnOff = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue(prev => !prev), []);

  return [value, turnOn, turnOff, toggle] as const;
};

export default useSwitcher;
