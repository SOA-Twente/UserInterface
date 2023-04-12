<script>
    import { page } from '$app/stores';
    import logo from '$lib/images//header/Logo.png';
    import profile from '$lib/images//header/person-bounding-box.svg';
    import message from '$lib/images//header/pencil-square.svg';
    import settings from '$lib/images//header/gear-fill.svg';
    import timeline from '$lib/images//header/view-stacked.svg';
    import {onMount} from "svelte";
   // import github from '$lib/images/github.svg';

    let username;

    onMount(() => {
        username = localStorage.getItem('username');
        console.log(username);
    });

</script>
    <header>
    <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="/home">
            <img src={logo} width="30" height="30" class="d-inline-block align-top ms-5" alt="">
            QuackAttack
        </a>
        <h1><i class="bi bi-person-bounding-box"></i></h1>
<!--        <form class="form-inline">-->
        <div class="float-right">
            <a href="/timeline">
                <img src={timeline} width="30" height="30" class="d-inline-block align-top me-3" alt="">
            </a>
        <a href="/postMessage">
            <img src={message} width="30" height="30" class="d-inline-block align-top me-3" alt="">
        </a>
        <a href="/user/{username}">
            <img src={profile} width="30" height="30" class="d-inline-block align-top me-3" alt="">
        </a>
        <a href="/settings">
            <img src={settings} width="30" height="30" class="d-inline-block align-top me-5" alt="">
        </a>
        </div>
<!--            <a class="btn btn-primary me-1" href="/login">Sign-in</a>-->
<!--            <a class="btn btn-outline-primary me-5 " href="/login">Sign-up</a>-->
<!--        </form>-->
    </nav>


</header>



