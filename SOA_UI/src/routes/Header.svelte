<script>
    import { page } from '$app/stores';
    import logo from '$lib/images//header/logo.png';
    import profile from '$lib/images//header/person-bounding-box.svg';
   // import github from '$lib/images/github.svg';
</script>

<header>
    <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
            <img src={logo} width="30" height="30" class="d-inline-block align-top ms-5" alt="">
            QuackAttack
        </a>
        <h1><i class="bi bi-person-bounding-box"></i></h1>
<!--        <form class="form-inline">-->
        <a href="/profile">
            <img src={profile} width="30" height="30" class="d-inline-block align-top me-5" alt="">
        </a>
<!--            <a class="btn btn-primary me-1" href="/login">Sign-in</a>-->
<!--            <a class="btn btn-outline-primary me-5 " href="/login">Sign-up</a>-->
<!--        </form>-->
    </nav>


</header>


