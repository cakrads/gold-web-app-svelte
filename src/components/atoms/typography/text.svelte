<script lang="ts">
	export let type: 'default' | 'title' | 'subtitle' = 'default';
	export let color:
		| 'default'
		| 'primary'
		| 'secondary'
		| 'main'
		| 'base'
		| 'success'
		| 'danger'
		| 'warning'
		| 'info' = 'default';

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
		default: 'text-main-text-light dark:text-main-text-dark',
		primary: 'text-primary',
		secondary: 'text-secondary',
		main: 'text-main-text-light dark:text-main-text-dark',
		base: 'text-base-text-light dark:text-base-text-dark',
		success: 'text-green-500',
		info: 'text-sky-500',
		danger: 'text-red-500',
		warning: 'text-yellow-500'
	};
</script>

<!-- Apply the selected typography class -->
<p class={`${typographyClasses[type]} ${colorClasses[color]}`}>
	<slot />
</p>
