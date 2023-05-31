<script>
  import "../app.postcss";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<Navbar></Navbar>
<slot />
<Footer></Footer>
