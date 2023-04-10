<script>
    import { fade } from 'svelte/transition';
    import { storeFE } from './storePosts.js';
    export let objAttributes = {};

    function removeComponent() {
        $storeFE = $storeFE.filter(function(value, index, arr){
            if (value.id != objAttributes.id) return value;
        });
        console.log($storeFE);
    }

    function reply() {
        console.log("reply");
    }
    function retweet() {
        console.log("retweet");
        fetch('http://localhost:8081/postQuack', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                quack: objAttributes.text,
                is_reply: objAttributes.isReply,
                repliedQuackId: 0,
                is_retweet: true,
                retweetedQuackId: objAttributes.id
            }),
        }).then(response => {
            console.log(response)
            return response.json();
        }).then(post => {
            console.log(post);
        })
    }

</script>
<div class="card mx-auto w-50" style="width: 50rem;" >
    <a class="text-decoration-none text-reset" href="/quacks/{objAttributes.id}">
    <div class="card-body">
        {#if objAttributes.isRetweet == true}
        <p class="text-primary">Retweeted</p>
        {/if}
        {#if objAttributes.isReply == true}
            <p class="text-primary">Reply</p>
        {/if}
    <h5 class="card-title">{objAttributes.user}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{objAttributes.time}</h6>
    <p class="card-text">{objAttributes.text}</p>
        {#if objAttributes.isReply == false}
            <a href="/quacks/{objAttributes.id}" class="card-link" on:click={reply}>Reply</a>
        {/if}
        <a href="#" class="card-link" on:click={retweet}>Retweet</a>


    </div>
    </a>
</div>