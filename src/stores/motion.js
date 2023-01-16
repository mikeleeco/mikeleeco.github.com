import { readable } from 'svelte/store';
import { browser } from '$app/environment';

const reducedMotionQuery = '(prefers-reduced-motion: reduce)';

const getInitialMotionPreference = () => {
	if (!browser) return false;
	return window.matchMedia(reducedMotionQuery).matches;
};

export const prefersReducedMotion = readable(getInitialMotionPreference());
