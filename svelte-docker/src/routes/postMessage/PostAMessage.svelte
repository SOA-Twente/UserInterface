<div class="form-group w-50 mx-auto">
    <label for="exampleFormControlTextarea1">Post Quack</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    <div class="overflow-auto" height="30">
    <button class="btn btn-primary my-1 float-end " type="submit" id="submit">Quack!</button>
    </div>
</div>


<script>

    import {onMount} from "svelte";

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
                is_reply: false,
                repliedQuackId: 0,
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