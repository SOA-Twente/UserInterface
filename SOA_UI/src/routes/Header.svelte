<script>
    import { page } from '$app/stores';
    import logo from '$lib/images//header/logo.png';
   // import github from '$lib/images/github.svg';
</script>

<header>
    <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
            <img src={logo} width="30" height="30" class="d-inline-block align-top ms-5" alt="">
            QuackAttack
        </a>
        <form class="form-inline">
            <a class="btn btn-primary me-1" href="/login">Sign-in</a>
            <a class="btn btn-outline-primary me-5 " href="/login">Sign-up</a>
        </form>
    </nav>


</header>


