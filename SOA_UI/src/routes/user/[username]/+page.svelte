<!--<script>-->
<!--    import ProfileElement2 from "./ProfileElement2.svelte";-->
<!--    -->
<!--    -->
<!--    -->
<!--    </script>-->

<!--<ProfileElement2 />-->

<script>
    import {onMount} from "svelte";
    import Posts from './../../posts/PostMessage.svelte';

    let following = false;

    /** @type {import('./$types').PageData} */  export let data;

    let userData = {};
    let url = 'http://localhost:8081/getQuacksByUsername/' + data.post.url;

    onMount(() => {
        fetch('http://localhost:8080/getUserData/'+ data.post.url, {
            method: 'GET',
            credentials: 'include',
        }).then(response => response.json())
        .then(data => {
                console.log(data);
                userData = data;
                console.log(url)
        });
        getFollowing();


    });

    function getFollowing(){
        //Check if we are following this person
        fetch('http://localhost:8084/getFollowing', {
            method: 'GET',
            credentials: 'include',
        }).then(response => response.json())
            .then(thisData => {
                console.log("following");
                for (let i = 0; i < thisData.length; i++) {
                    if (thisData[i].following_id == data.post.url) {
                        following = true;
                        console.log(following)
                    }
                }
                console.log(thisData);
            });

    }

    function unfollow() {
        fetch('http://localhost:8084/unfollow', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                following_id: data.post.url
            })
        }).then(response => response.json())
        .then(data => {
                console.log(data);
        });
        following = false;
    }
    function follow() {
        fetch('http://localhost:8084/follow', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                following_id: data.post.url
            })
        }).then(response => response.json())
        .then(data => {
                console.log(data);
        });
        following = true;
    }






</script>



<h5 class="card-title w-50 mx-auto my-2">User:</h5>

<div class="card w-50 mx-auto">
    <div class="card-body">


        {#if following == true}
            <p class="btn btn-secondary float-end" on:click={unfollow}>un-follow</p>
        {:else}
            <p class="btn btn-primary float-end" on:click={follow}>Follow</p>
        {/if}

        <h5 class="card-title">{userData.username}</h5>

        <h7 class="card-subtitle mb-2 text-muted">Tags: {userData.tags}</h7>
        <p/>
        <h6>Description:</h6>
        <p class="card-text">{userData.description}</p>

    </div>
</div>

        <h5 class="card-title w-50 mx-auto my-2">Tweets:</h5>
        <Posts url={url} />

