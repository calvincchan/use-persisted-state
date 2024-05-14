import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";

const storage = sessionStorage;

export function usePersistedState<T>(
  initValue: T | (() => T),
  id: string
): [T, Dispatch<SetStateAction<T>>, (revertToInitValue: boolean) => void] {
  const storageKey = "state:" + id;

  /** Set initial value */
  const _initValue = useMemo<T>(() => {
    const stateString = storage.getItem(storageKey);
    /** If there is a value stored in storage, use that */
    if (stateString) {
      return JSON.parse(stateString);
    }
    /** Otherwise use the provided initial value */
    return initValue instanceof Function ? initValue() : initValue;
  }, [initValue, storageKey]);

  /** React state */
  const [state, setState] = useState<T>(_initValue);

  /** Store serialized state in storage whenever the state changes */
  useEffect(() => {
    const stateString = JSON.stringify(state);
    storage.setItem(storageKey, stateString);
  }, [state, storageKey]);

  /** Clear state from storage. If revertToInitValue=true, revert state to initial value */
  const clear = (revertToInitValue: boolean) => {
    storage.removeItem(storageKey);
    if (revertToInitValue === true) setState(_initValue);
  };

  return [state, setState, clear];
}
