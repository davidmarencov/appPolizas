<template>
    <div>
        <p>Product details for {{ id }}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet pariatur rerum placeat nesciunt veniam omnis fugit dolorum iure, repellendus quia delectus quidem laborum blanditiis alias, ipsam ipsa. Aliquam, assumenda! Ab ducimus quo aspernatur quas repellendus, doloribus dolor labore culpa molestiae ratione deleniti impedit placeat unde recusandae modi commodi doloremque? Eos possimus quidem vero illo. Doloribus eum reprehenderit temporibus, quo ducimus delectus itaque officia totam sequi dignissimos exercitationem modi laboriosam. Fugiat, labore officiis ea expedita dolore ad eum non ipsa molestiae, dolorum et aspernatur earum corporis est libero inventore doloribus molestias vel ut. Eveniet excepturi autem perspiciatis id, non ratione, alias cumque amet ab dolores vero minima eum consequatur ut voluptatibus illum voluptatum, distinctio reprehenderit dignissimos qui ullam ipsum voluptatem nisi harum? Velit provident quas similique numquam porro, unde quae aperiam? Minima, odio? Neque praesentium dolorum officiis labore. Sint suscipit corporis sunt molestiae! Doloremque quaerat unde omnis sit pariatur dolorum impedit, vitae totam aliquam autem suscipit corporis blanditiis, sed odio consectetur voluptate, voluptas cum. Necessitatibus dignissimos repellat adipisci ipsa officia illum placeat ex voluptate nulla debitis! Rerum voluptatibus at dolores sapiente reiciendis illum minus quod quos repellat eveniet incidunt nesciunt atque inventore distinctio, consequatur perferendis accusamus voluptate! Illo perspiciatis dolore iusto.</p>        
    </div>
</template>
<script setup>
    const { id } = useRoute().params
    definePageMeta({
        layout: 'products'
    })

</script>
<style scoped>
    
</style>