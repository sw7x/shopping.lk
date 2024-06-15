import { useLocalStorage, useMediaQuery, useUpdateEffect } from 'usehooks-ts';

const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)';

interface UseDarkModeOutput {
	isDarkMode: boolean;
	toggle: () => void;
	enable: () => void;
	disable: () => void;
}

export function useDarkMode(defaultValue?: boolean): UseDarkModeOutput {
	const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY);
	const [isDarkMode, setDarkMode] = useLocalStorage<boolean>(
		'usehooks-ts-dark-mode',
		defaultValue ?? isDarkOS ?? false,
	);

	// Update darkMode if os prefers changes
	useUpdateEffect(() => {
		setDarkMode(isDarkOS);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isDarkOS]);

	return {
		isDarkMode,
		toggle: () => setDarkMode((prev: boolean) => !prev),
		enable: () => setDarkMode(true),
		disable: () => setDarkMode(false),
	};
}

/* 
import { useDarkMode } from 'usehooks-ts'

export default function Component() {
	const { isDarkMode, toggle, enable, disable } = useDarkMode()

	return (
		<div>
			<p>Current theme: {isDarkMode ? 'dark' : 'light'}</p>
			<button onClick={toggle}>Toggle</button>
			<button onClick={enable}>Enable</button>
			<button onClick={disable}>Disable</button>
		</div>
	)
}
*/
