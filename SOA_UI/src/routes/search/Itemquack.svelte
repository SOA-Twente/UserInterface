<script>
    import { fade } from 'svelte/transition';
    export let objAttributes = {};
    export let index = 0;

</script>

<a class="list-group-item list-group-item-action" href="/quacks/{objAttributes.id}">
        <a class="" href="/user/{objAttributes.username}">@{objAttributes.username}</a>
        <p>{objAttributes.quack}</p>
</a>
