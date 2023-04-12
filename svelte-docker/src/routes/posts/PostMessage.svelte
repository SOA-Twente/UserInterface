

<script>
    import {onMount} from 'svelte';

    export let url;

    onMount(() => {
        getQacks();
    });
    //Example for this
    // https://svelte.dev/repl/28996f04783542ceafed7cc6a85128b9?version=3.23.0
    import { storeFE, idIncrement } from './storePosts.js';
    import Item from './ItemPosts.svelte';
    $storeFE = [];

    function addItem(data) {
        var l = $storeFE.length;	// get our current items list count
        $storeFE[l] = {id:data.id, text: data.quack, user: data.user_id, time: data.created_at, isReply: data.is_reply, replyId: data.reply_to_quack_id, isRetweet: data.is_retweet, retweetId: data.retweet_of_quack_id};
    }

    function getQacks() {
        console.log("getQacks at url: " + url);
        fetch(url, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                console.log(data[0].message);
                console.log(data.length);
                for (let i = 0; i < data.length; i++) {
                    addItem(data[i]);
                }
            });
    }

</script>


<ul class="list-unstyled">
    {#each $storeFE as item}
        <li class="my-1"><svelte:component this={Item} objAttributes={item}/></li>
    {/each}
</ul>