import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useBlogStore = defineStore('blog', () => {
    const blogs = ref([
        {
            id: 1,
            title: 'How to plan and manage project like pro?',
            image: '/public/images/blog-01.webp'
        },
        {
            id: 2,
            title: 'How to plan and manage project like pro?',
            image: '/public/images/blog-02.jpg'
        },
        {
            id: 3,
            title: 'How to plan and manage project like pro?',
            image: '/public/images/blog-03.jpg'
        }
    ]);

    return { blogs };
})