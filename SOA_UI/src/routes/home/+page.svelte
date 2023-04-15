<svelte:head>

</svelte:head>


<script>

    import Search from './../search/Search.svelte';
    import Posts from './../posts/PostMessage.svelte';

</script>
<Search />
<Posts url={'http://localhost:8081/getAllQuacks'} />