<!--<script>-->
<!--    import ProfileElement2 from "./ProfileElement2.svelte";-->
<!--    -->
<!--    -->
<!--    -->
<!--    </script>-->

<!--<ProfileElement2 />-->

<script>
    import {onMount} from "svelte";
    import Posts from './../posts/PostMessage.svelte';

    let following = false;

    /** @type {import('./$types').PageData} */  export let data;


    let userData = {};
    // let url = 'http://localhost:8081/getQuacksByUsername/' + data.post.url;



</script>


<Posts url={'http://localhost:8083/timeline'} />
