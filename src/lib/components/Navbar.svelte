<script>
    import { page } from '$app/stores';
    let menuOpen = false;
    function closeMenu() {
        menuOpen = false;
    }
    function toggleMenu() {
        menuOpen = !menuOpen;
    }
</script>

<div class="bg-blue-600 py-2 sticky top-0 z-50">
    <div class="flex justify-between sm:justify-start max-w-[85rem] mx-auto px-2 sm:px-6 lg:px-12 text-white text-md md:text-lg font-bold gap-6">
        <span class="hidden sm:inline-block">Po-So 8:00 - 20:00</span>
        <div class="flex">
            <div class="inline-block m-auto pr-1 max-sm:hidden">
                <img class="w-full h-6" src="$lib/images/mail.png" alt="Email">
            </div>
            <a class="" href="mailto:info@akomfort.sk">info@akomfort.sk</a>
        </div>
        <div class="flex">
            <div class="inline-block m-auto">
                <img class="w-full sm:h-6 h-5" src="$lib/images/call.png" alt="Volať">
            </div>
            <a href="tel:+421944559829">+421 944 559 829</a>
        </div>
    </div>
</div>
<header>
    <div class="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-white text-lg py-3 md:py-0 ">
        <nav class="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-12" aria-label="Global">
            <div class="relative md:flex md:items-center md:justify-between">
            <div class="flex items-center justify-between">
                <a class="flex-none text-xl font-semibold " href="/" aria-label="Brand">
                    <img src="$lib/images/logo.svg" alt="logo">
                </a>
                <div class="md:hidden">
                <button on:click={toggleMenu} type="button" class="hs-collapse-toggle p-1 inline-flex justify-center items-center gap-2 rounded-md border font-bold bg-zinc-50 text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none transition-all text-sm      " data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                    <svg class="hs-collapse-open:hidden w-8 h-8" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                    <svg class="hs-collapse-open:block hidden w-8 h-8" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </button>
                </div>
            </div>

            <div id="navbar-collapse-with-animation" class:hidden={!menuOpen} class="hs-collapse overflow-hidden transition-all duration-300 basis-full grow md:block">
                <div class="overflow-hidden overflow-y-auto max-h-[75vh] scrollbar-y">
                <div class="flex flex-col gap-x-0 mt-5 divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-end md:gap-x-10 md:mt-0 md:pl-7 md:divide-y-0 md:divide-solid ">
                    <a on:click={closeMenu} class="font-bold text-black hover:text-gray-700 py-3 md:py-6  " href="/servis/">
                        Servis okien a dverí
                    </a>

                    <a on:click={closeMenu} class="font-bold text-black hover:text-gray-700 py-3 md:py-6  " href="/sietky/">
                        Sieťky
                    </a>

                    <a on:click={closeMenu} class="font-bold text-black hover:text-gray-700 py-3 md:py-6  " href="/tienenie/">
                        Tienenie
                    </a>

                    <div class="pt-3 md:pt-0">
                        <a on:click={closeMenu} class="font-semibold inline-flex justify-center items-center gap-x-2 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-2.5 px-3 " href="/obhliadka/">
                          Bezplatná obhliadka
                        </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </nav>
    </div>
</header>
