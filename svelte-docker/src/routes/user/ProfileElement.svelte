<script>

    import { page } from '$app/stores';
    import {onMount} from "svelte";

    onMount(() => {
        // fetch('https://localhost:8080/getUserData')
        console.log(page);
    });



    </script>