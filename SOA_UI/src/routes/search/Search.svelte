

<script>

    import { storeFEUser } from './storeSearch.js';
    import {storeFEQuack} from "./storeSearch.js";
    import ItemUser from './Itemuser.svelte';
    import ItemQuack from './Itemquack.svelte';
    $storeFEUser = [];
    $storeFEQuack = [];

    let searchTerm = '';
    let searchResults = [];

    function search() {
        if(searchTerm.length !== 0){
            fetch('http://localhost:8086/search/' + searchTerm + "/4", {
                method: 'GET',
                credentials: 'include',
            }).then(response => {
                console.log(response)
                return response.json();
            }).then(post => {
                $storeFEUser = [];
                $storeFEQuack = [];

                let userData = post[0];
                let quackData = post[1];
                console.log(post)
                for (let i = 0; i < userData.user.length; i++) {
                    addItemUser(userData.user[i]);
                }
                for (let i = 0; i < quackData.quack.length; i++) {
                    addItemQuack(quackData.quack[i]);
                }
            })
        } else {
            $storeFEQuack = [];
            $storeFEUser = [];
        }
    }

    function addItemUser(data) {
        var l = $storeFEUser.length;	// get our current items list count
        $storeFEUser[l] = {id:data.id, username: data.username, user: data.user};
    }
    function addItemQuack(data) {
        var l = $storeFEQuack.length;	// get our current items list count
        $storeFEQuack[l] = {username: data.user_id, quack: data.quack, created_at: data.created_at};
    }



</script>


<div class="card w-50 mx-auto" id="search-input-cont" style="border-width: 2.5px">
    <ul class="list-group list-group-flush">
        <li class="list-group-item">
            <input class="form-control"
                   type="text"
                   id="search-field"
                   placeholder="Enter Search Term"
                   autocomplete="off"
                   bind:value={searchTerm}
                   on:input={search} />
        </li>
        {#each $storeFEUser as item, i}
            <svelte:component this={ItemUser} objAttributes={item} index={$storeFEUser.length - i}/>
        {/each}
        {#each $storeFEQuack as item, i}
            <svelte:component this={ItemQuack} objAttributes={item} index={$storeFEQuack.length - i}/>
        {/each}
    </ul>
</div>



