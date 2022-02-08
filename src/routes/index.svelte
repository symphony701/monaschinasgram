<script>
	import Navbar from '../lib/components/main/navbar/navbar.svelte'
</script>

<div class="main">
	<Navbar/>
	<div class="content">

	</div>
</div>


<style>
	.main{
		width: 100vw;
		height: 100vh;
		background-color: white;
	}
	.content{
		max-width: 100%;
		min-width: 100%;
		height: calc(100vh - 1px - 4.5rem);
		display: flex;
	}
</style>
