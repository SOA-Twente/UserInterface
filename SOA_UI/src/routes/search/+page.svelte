

<script>

    import { storeFE, idIncrement } from './store.js';
    import Item from './Item.svelte';
    $storeFE = [];

    let searchTerm = '';
    let searchResults = [];

    function search() {
        if(searchTerm.length !== 0){
            fetch('http://localhost:8086/search/' + searchTerm, {
                method: 'GET',
                credentials: 'include',
            }).then(response => {
                console.log(response)
                return response.json();
            }).then(post => {
                $storeFE = [];
                //console.log(post)
                for (let i = 0; i < post.length; i++) {
                    addItem(post[i]);
                }
                console.log($storeFE)
            })
        } else {
            $storeFE = [];
        }
    }

    function addItem(data) {
        var l = $storeFE.length;	// get our current items list count
        $storeFE[l] = {id:data.id, username: data.username, user: data.user};
    }



</script>


<div id="search-input-cont">
    <input type="text"
           id="search-field"
           placeholder="Enter Search Term"
           autocomplete="off"
           bind:value={searchTerm}
           on:input={search} />
</div>


<ul class="list-unstyled">
    {#each $storeFE as item}
        <li class="my-2"><svelte:component this={Item} objAttributes={item}/></li>
    {/each}
</ul>


<input class="form-control" type="search" placeholder="Search" aria-label="Search">