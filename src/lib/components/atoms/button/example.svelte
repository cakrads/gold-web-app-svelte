<script>
	import Button from './button.svelte';
</script>

<Button color="normal" className="m-3">Color Normal</Button>
<br />

<Button color="primary" className="m-3">Color primary</Button>
<Button color="secondary" className="m-3">Color secondary</Button>

<Button color="primary" outline className="m-3">Outline primary</Button>
<Button color="secondary" outline className="m-3">Outline secondary</Button>
<br />

<Button gradient className="m-3">gradient</Button>

<div class="m-3">note: outline > gradient > color</div>

<Button outline gradient color="primary" className="m-3">
	outline gradient secondary (gradient will didn't work)
</Button>

<Button gradient color="primary" className="m-3">
	color="primary" gradient="primary" (color will didn't work)
</Button>
