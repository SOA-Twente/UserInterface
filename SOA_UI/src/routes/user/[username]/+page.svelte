<!--<script>-->
<!--    import ProfileElement2 from "./ProfileElement2.svelte";-->
<!--    -->
<!--    -->
<!--    -->
<!--    </script>-->

<!--<ProfileElement2 />-->

<script>
    import {onMount} from "svelte";

    /** @type {import('./$types').PageData} */  export let data;

    onMount(() => {
        fetch('http://localhost:8080/getUserData/'+ data.post.url, {
            method: 'GET',
            credentials: 'include',
        }).then(response => response.json())
        .then(data => {
                console.log(data);
        });
    });


</script>


<h1>{data.post.url}</h1>
<div>{@html data.content}</div>