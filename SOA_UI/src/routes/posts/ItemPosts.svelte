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
</script>
<div class="card mx-auto w-50" style="width: 50rem;">
    <div class="card-body">
    <h5 class="card-title">{objAttributes.user}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{objAttributes.time}</h6>
    <p class="card-text">{objAttributes.text}</p>
    <a href="#" class="card-link">Reply</a>
    <a href="#" class="card-link">Retweet</a>
</div>
</div>