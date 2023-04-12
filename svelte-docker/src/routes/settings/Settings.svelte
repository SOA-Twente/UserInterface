<div class="form-group w-50 mx-auto">
    <label for="exampleFormControlTextarea1">Description</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    <button class="btn btn-primary my-1 mx-right" type="submit" id="submit">Update Description</button>
</div>


<div class="form-group w-50 mx-auto">
    <label for="exampleFormControlTextarea1">Tags</label>
    <textarea class="form-control" id="exampleFormControlTextarea2" rows="3"></textarea>
    <button class="btn btn-primary my-1 mx-right" type="submit2" id="submit2">Update Tag</button>
</div>

<script>

    import {onMount} from "svelte";

    onMount(() => {
        console.log("mounted")
        document.getElementById("submit").onclick = function() {updateDescription()};
        document.getElementById("submit2").onclick = function() {updateTags()};
    })

    function updateDescription(){
        fetch('http://localhost:8080/addDescription', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                description: document.getElementById("exampleFormControlTextarea1").value,
            }),
        }).then(response => {
            console.log(response)
            return response.json();
        }).then(post => {
            console.log(post);
        })

    }
    function updateTags(){
        let list = document.getElementById("exampleFormControlTextarea2").value.split(" ")

        fetch('http://localhost:8080/addTag', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tagsList: list,
            }),
        }).then(response => {
            console.log(response)
            return response.json();
        }).then(post => {
            console.log(post);
        })

    }

</script>