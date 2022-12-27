<template>
  <form @submit.prevent="addNewBlog">
    <div class="mb-2">
        <input type="text" class="form-control" placeholder="title" v-model="newTitle" required>
    </div>
    <div class="mb-2">
        <textarea rows="4" class="form-control" placeholder="content" v-model="newContent" required></textarea>
    </div>
    <div class="clearfix">
        <button class="btn btn-primary btn-sm float-end">Add Blog</button>
    </div>
  </form>
</template>

<script>
import { useBlogStore } from '@/stores/BlogStore'
import { ref } from '@vue/reactivity'

export default {
    setup(){
        const blogStore = useBlogStore()
        let newTitle = ref('')
        let newContent = ref('')
        function addNewBlog(){
            const newBlog ={
                id :Math.floor(Math.random()*1000),
                title:newTitle.value,
                content:newContent.value
            }
            blogStore.addBlog(newBlog)

            // clear the form
            newTitle.value =''
            newContent.value=''
        }

        return{newTitle,newContent,addNewBlog}
    }
}
</script>

<style>

</style>