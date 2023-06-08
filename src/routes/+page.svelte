<script>
    import Testimonials from "$lib/components/hero/Testimonials.svelte";
    import Hero from "$lib/components/hero/Hero.svelte";
    import LastJob from "$lib/components/hero/LastJob.svelte";
    import WorkPreview from "$lib/components/hero/WorkPreview.svelte";
    import Faq from "$lib/components/hero/Faq.svelte";
    import Problems from "$lib/components/hero/Problems.svelte";
</script>

<svelte:head>
    <title>aKomfort - Servis okien</title>
	<meta name="description" content="Desiatkám klientom denne poskytujeme kvalitnú a férovú starostlivosť o okná, dvere, žalúzie.">
    <meta name="keywords" content="servis okien,oprava okna,zaluzie,sietky,rolety,kovanie">
</svelte:head>

<Hero></Hero>

<Testimonials></Testimonials>

<Problems></Problems>

<WorkPreview></WorkPreview>

<Faq></Faq>