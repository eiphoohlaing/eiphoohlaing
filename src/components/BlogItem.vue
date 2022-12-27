<template>
  <div class="card my-2">
    <h1>list</h1>
    <div class="card-body">
        <div class="d-flex justify-content-between">
            <h5>{{blog.title}}</h5>
            <span class="text-danger" role="button" @click="blogStore.deleteBlog(blog.id)">
                <i class="bi bi-trash"></i>
            </span>
        </div>
        <p>{{blog.content}}</p>
    </div>
  </div>
</template>

<script>
import { useBlogStore } from '@/stores/BlogStore'
export default {
  props:{blog:Object},
  setup() {
    const blogStore=useBlogStore()
    return{blogStore}
  },
}
</script>

<style>

</style>