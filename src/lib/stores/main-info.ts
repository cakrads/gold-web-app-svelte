import { writable } from 'svelte/store';
import type { MainInfo } from '$lib/services/main-info';

export const mainInfoStore = writable<MainInfo>({} as MainInfo);
