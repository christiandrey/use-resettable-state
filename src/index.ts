import {useCallback, useRef, useState} from 'react';
import {Fn} from './typings';

export function useResettableState<S>(
	initialState: S | (() => S),
): [S, React.Dispatch<React.SetStateAction<S>>, Fn<void>];

export function useResettableState<S = undefined>(): [
	S | undefined,
	React.Dispatch<React.SetStateAction<S | undefined>>,
	Fn<void>,
];

export function useResettableState(initial?: unknown): unknown {
	const ref = useRef(initial);
	const [state, setState] = useState(initial);
	const resetState = useCallback(() => setState(ref.current), []);

	return [state, setState, resetState];
}
