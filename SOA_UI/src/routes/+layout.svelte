<script>
    import Header from './Header.svelte';
    import LoginOverlay from './LoginOverlay.svelte';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import logo from '$lib/images/header/Logo.png';
    // import './styles.css';
</script>
<div class="app">
    <Header />

    <main>
        <slot />
    </main>

    <LoginOverlay />

    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div class="col-md-4 d-flex align-items-center">
            <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                <img src={logo} width="30" height="30" class="d-inline-block align-top ms-5" alt="">
            </a>
            <span class="">Feel free to contact us</span>
        </div>
    </footer>
</div>
