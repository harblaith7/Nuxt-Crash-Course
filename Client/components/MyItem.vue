<template>
    <div class="item-container">
        <img :src="require(`@/assets/images/${item.image}`)" alt="">
        <div class="text-container">
            <h4> {{item.title}} </h4>
            <p> {{item.description}} </p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['item']
    }
</script>

<style scoped>
    .item-container {
        display: flex;
        margin: 3rem 0
    }
    .text-container {
        padding: 0 1rem
    }
    img {
        width: 17.5rem;
        border-radius: 0.5rem;
        height: 11rem
    }
    p {
        font-size: 0.8rem;
        color: grey
    }
</style>