


<ul class="list-unstyled">
    {#each $storeFE as item}
        <li class="my-2"><svelte:component this={Item} objAttributes={item}/></li>
    {/each}
</ul>


<!--<div bind:this={container}/>-->



<script>
    import {onMount} from 'svelte';

    onMount(() => {
        getQacks();
    });


    //Example for this
    // https://svelte.dev/repl/28996f04783542ceafed7cc6a85128b9?version=3.23.0
    import { storeFE, idIncrement } from './store.js';
    import Item from './Item.svelte';
    $storeFE = [
        // { id:0, text: 'First option', user: "F.a.kromwijk@gmail.com", time: '2020-05-01 12:00:00'},
        // { id:1, text: 'Second option', user: "John Doe",time: '2020-05-01 12:00:00' },
        // { id:2, text: 'Third option', user: "asdasd", time: '2020-05-01 12:00:00'},
        // other items can go here
    ];

    function addItem(data) {
        var l = $storeFE.length;	// get our current items list count
        $storeFE[l] = {id:data.id, text: data.message, user: data.userId, time: data.createdAt};
    }

    function getQacks() {
        fetch('http://localhost:8080/getQuacks')
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