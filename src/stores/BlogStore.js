import { defineStore } from "pinia";
import { ref } from "vue";
export const useBlogStore = defineStore('blogStore',()=>{

    const blogs = ref([
        {
            id :1,
            title:"What is Pinia?",
            content :"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae in possimus, quasi inventore perspiciatis deserunt minima. Facere error consectetur maxime delectus voluptate sapiente. Culpa, maiores inventore ullam reprehenderit enim aliquam."
        },
        {
            id:2,
            title:"About Vue3",
            content :"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae in possimus, quasi inventore perspiciatis deserunt minima. Facere error consectetur maxime delectus voluptate sapiente. Culpa, maiores inventore ullam reprehenderit enim aliquam."
        }
    ])
    function addBlog(formData){
        blogs.value.push(formData)
    }
    function deleteBlog(id){
        blogs.value =blogs.value.filter(blog =>blog.id !=id)
    }
    return{blogs,addBlog,deleteBlog}
})