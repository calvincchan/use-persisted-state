# usePersistedState

A React hook that persists state in `sessionStorage`.

## Run Demo

```bash
yarn install;
yarn dev;
```

## Why persist state in ReactJS?

For example, you may have a form that the user has filled out, and you want to remember the state of the form so that when the user refreshes the page, the form is still filled out.

## Implementation

We will create a custom hook called `usePersistState` that will take an initial value and an ID, and return the state, a function to set the state, and a function to clear the state from storage.

At the first render, the hook will check if there is a value stored in storage with the provided ID, and if there is, it will use that value as the initial value. Otherwise, it will use the provided initial value or the result of the provided init function.

Next, we will use the `useEffect` hook to store the state in storage whenever the state changes.

Finally, we will provide a function to clear the state from storage, and optionally revert the state to the initial value.

## Usage

Similar to the `useState` hook, the `usePersistedState` hook takes an initial value and returns an array with the state, a function to set the state, and a function to clear the state from storage. Note that you need to provide a unique ID as the second argument for each state you want to persist.

```typescript
const [text1, setText1, clearText1] = usePersistedState(
  "init value 1",
  "text1"
);
```

## Contact

If you have any questions or suggestions, feel free to open an issue or contact me at https://calvincchan.com/#contact
