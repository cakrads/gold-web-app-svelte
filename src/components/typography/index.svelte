<script lang="ts">
	export let type: 'default' | 'title' | 'subtitle' = 'default';
	export let color:
		| 'default'
		| 'primary'
		| 'secondary'
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
		success: string;
		danger: string;
		warning: string;
		info: string;
	}

	interface SizeClasses {
		[key: string]: string;
		xs: string;
		sm: string;
		md: string;
		lg: string;
		xl: string;
	}

	let typographyClasses: TypographyClasses = {
		default: 'text-base',
		title: 'text-3xl font-bold',
		subtitle: 'text-xl',
		large: 'text-lg',
		small: 'text-sm'
	};

	let colorClasses: ColorClasses = {
		default: 'text-slate-900',
		primary: 'text-indigo-700 dark:text-indigo-500',
		secondary: 'text-blue-700 dark:text-blue-500',
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
