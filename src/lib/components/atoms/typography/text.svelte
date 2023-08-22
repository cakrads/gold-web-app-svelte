<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	type Color =
		| 'default'
		| 'primary'
		| 'secondary'
		| 'main'
		| 'base'
		| 'success'
		| 'danger'
		| 'warning'
		| 'info';

	export let className = '';
	export let type: 'default' | 'title' | 'subtitle' = 'default';
	export let color: Color = 'default';
	export let colorDark: Color = color;

	interface TypographyClasses {
		[key: string]: string;
		default: string;
		title: string;
		subtitle: string;
		small: string;
	}

	interface ColorClasses {
		[key: string]: string;
		default: string;
		primary: string;
		secondary: string;
		main: string;
		base: string;
		success: string;
		danger: string;
		warning: string;
		info: string;
	}

	let typographyClasses: TypographyClasses = {
		default: 'text-base',
		title: 'text-3xl font-bold',
		subtitle: 'text-xl',
		large: 'text-lg',
		small: 'text-sm'
	};

	let colorClasses: ColorClasses = {
		default: 'text-main-text-light',
		primary: 'text-primary',
		secondary: 'text-secondary',
		main: 'text-main-text-light',
		base: 'text-base-text-light',
		success: 'text-green-500',
		info: 'text-sky-500',
		danger: 'text-red-500',
		warning: 'text-yellow-500'
	};

	let colorDarkClasses: ColorClasses = {
		default: 'dark:text-main-text-dark',
		primary: 'dark:text-primary',
		secondary: 'dark:text-secondary',
		main: 'dark:text-main-text-dark',
		base: 'dark:text-base-text-dark',
		success: 'dark:text-green-500',
		info: 'dark:text-sky-500',
		danger: 'dark:text-red-500',
		warning: 'dark:text-yellow-500'
	};
</script>

<p
	class={twMerge(
		`${typographyClasses[type]} ${colorClasses[color]} ${colorDarkClasses[colorDark]}`,
		className
	)}
>
	<slot />
</p>
