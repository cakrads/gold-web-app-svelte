<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	type TVariant = 'normal' | 'pills';
	export let variant: TVariant = 'normal';

	type TSize = 'xs' | 'sm' | 'normal' | 'lg' | 'xl';
	export let size: TSize = 'normal';

	type TColor =
		| 'normal'
		| 'primary'
		| 'dark'
		| 'light'
		| 'success'
		| 'error'
		| 'warning'
		| 'secondary';
	export let color: TColor = 'normal';

	export let outline = false;
	export let gradient = false;
	export let className = '';

	const config = {
		size: {
			xs: 'px-3 py-2 text-xs font-medium',
			sm: 'px-3 py-2 text-sm font-medium',
			normal: 'px-5 py-2.5 text-sm font-medium',
			lg: 'px-5 py-3 text-base font-medium',
			xl: 'px-6 py-3.5 text-base font-medium'
		},
		variant: {
			normal: 'rounded-lg focus:outline-none focus:ring-4',
			pills: 'rounded-full focus:outline-none focus:ring-4 '
		},
		outline: {
			normal:
				'text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700',
			primary:
				'text-main-text-light hover:text-base-text-light border border-primary hover:bg-primary focus:ring-secondary  dark:border-primary dark:text-main-text-dark dark:hover:text-base-text-light dark:hover:bg-secondary dark:focus:ring-secondary',
			secondary:
				'text-main-text-light hover:text-base-text-light border border-secondary hover:bg-secondary focus:ring-primary  dark:border-primary dark:text-main-text-dark dark:hover:text-base-text-light dark:hover:bg-primary dark:focus:ring-primary',
			dark: 'text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900  focus:ring-gray-300  dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800',
			light:
				'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700',
			success:
				'text-green-700 hover:text-white border border-green-700 hover:bg-green-800  focus:ring-green-300  dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800',
			error:
				'text-red-700 hover:text-white border border-red-700 hover:bg-red-800  focus:ring-red-300  dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900',
			warning:
				'text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500  focus:ring-yellow-300  dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900'
		},
		color: {
			normal:
				'text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700',
			primary:
				'text-main-text-light focus:ring-secondary bg-primary hover:bg-secondary dark:bg-primary dark:hover:bg-secondary dark:focus:ring-secondary',
			secondary:
				'text-main-text-light focus:ring-primary bg-secondary hover:bg-primary dark:bg-secondary dark:hover:bg-primary dark:focus:ring-primary',
			dark: 'text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700',
			light:
				'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700',
			success:
				'text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800',
			error:
				'text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900',
			warning:
				'text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900'
		},
		gradient: {
			primary: 'text-main-text-light gradient-primary hover:gradient-primary-hover'
		}
	};

	$: classes = twMerge(`
    ${config.size[size]}
    ${outline ? config.outline[color] : gradient ? config.gradient['primary'] : config.color[color]}
    ${config.variant[variant]},
    ${className}
  `);
</script>

<button on:click on:focus on:mouseover on:mouseenter on:mouseleave class={classes}>
	<slot />
</button>
