<!--<script>-->
<!--    import ProfileElement2 from "./ProfileElement2.svelte";-->
<!--    -->
<!--    -->
<!--    -->
<!--    </script>-->

<!--<ProfileElement2 />-->

<script>
    import {onMount} from "svelte";
    import Posts from './../../posts/PostMessage.svelte'
    import Replies from './../../posts/PostMessage.svelte';



    let following = false;

    /** @type {import('./$types').PageData} */  export let data;


    let userData = {};

    onMount(() => {
        console.log("mounted")
        document.getElementById("submit").onclick = function() {sendQuack()};
    })

    function sendQuack(){
        console.log("sending quack")
        console.log(document.getElementById("exampleFormControlTextarea1").value)
        fetch('http://localhost:8081/postQuack', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                quack: document.getElementById("exampleFormControlTextarea1").value,
                is_reply: true,
                reply_to_quack_id: data.post.id,
                isRetweet: false,
                retweetedQuackId: 0,
            }),
        }).then(response => {
            console.log(response)
            return response.json();
        }).then(post => {
            console.log(post);
        })
    }




</script>

<Posts url={'http://localhost:8081/getQuackById/' + data.post.id} />

<div class="form-group w-50 mx-auto">
    <label for="exampleFormControlTextarea1">Reply to Quack</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    <div class="overflow-auto" height="30">
        <button class="btn btn-primary my-1 float-end " type="submit" id="submit">Quack!</button>
    </div>
</div>




