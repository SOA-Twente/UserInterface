<script>
    import { fade } from 'svelte/transition';
    export let objAttributes = {};
    export let index = 0;

    // function removeComponent() {
    //     $storeFE = $storeFE.filter(function(value, index, arr){
    //         if (value.id != objAttributes.id) return value;
    //     });
    //     console.log($storeFE);
    // }
</script>
<!--{#if {index} != 1}-->
<!--    <div class="card">-->
<!--        <a href="{objAttributes.username}">-->
<!--            <div class="card-body p-1">-->
<!--                <a class="card-text" href="{objAttributes.username}">@{objAttributes.username} {index}</a>-->
<!--            </div>-->
<!--        </a>-->
<!--    </div>-->
<!--    {:else}-->
<!--    <div class="card border-danger">-->
<!--        <a href="{objAttributes.username}">-->
<!--            <div class="card-body p-1">-->
<!--                <a class="card-text" href="{objAttributes.username}">@{objAttributes.username} {index}</a>-->
<!--            </div>-->
<!--        </a>-->
<!--    </div>-->
<!--{/if}-->
<a class="list-group-item list-group-item-action" href="/user/{objAttributes.username}">
        <a class="" href="/user/{objAttributes.username}">@{objAttributes.username}</a>
</a>


<!--<div class="card">-->
<!--    <a href="{objAttributes.username}">-->
<!--        <div class="card-body p-1">-->
<!--            <a class="card-text" href="{objAttributes.username}">@{objAttributes.username} {index}</a>-->
<!--        </div>-->
<!--    </a>-->
<!--</div>-->