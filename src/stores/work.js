import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useWorkStore = defineStore('work', () => {
    const works = ref([
        {
            id: 1,
            title: 'Real Estate Template',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas numquam omnis earum at a harum. Non vel enim dolorum distinctio, illum ab error ipsum similique velit perspiciatis omnis repellat delectus.',
            category: 'Front-End',
            image: '/public/images/work1.png'
        },
        {
            id: 2,
            title: 'Real Estate Template',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas numquam omnis earum at a harum. Non vel enim dolorum distinctio, illum ab error ipsum similique velit perspiciatis omnis repellat delectus.',
            category: 'Front-End',
            image: '/public/images/work1.png'
        },
        {
            id: 3,
            title: 'Real Estate Template',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas numquam omnis earum at a harum. Non vel enim dolorum distinctio, illum ab error ipsum similique velit perspiciatis omnis repellat delectus.',
            category: 'Front-End',
            image: '/public/images/work1.png'
        },
        {
            id: 4,
            title: 'Real Estate Template',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas numquam omnis earum at a harum. Non vel enim dolorum distinctio, illum ab error ipsum similique velit perspiciatis omnis repellat delectus.',
            category: 'Fullstack',
            image: '/public/images/work2.png'
        },
        {
            id: 5,
            title: 'Real Estate Template',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas numquam omnis earum at a harum. Non vel enim dolorum distinctio, illum ab error ipsum similique velit perspiciatis omnis repellat delectus.',
            category: 'Fullstack',
            image: '/public/images/work2.png'
        },
        {
            id: 6,
            title: 'Real Estate Template',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas numquam omnis earum at a harum. Non vel enim dolorum distinctio, illum ab error ipsum similique velit perspiciatis omnis repellat delectus.',
            category: 'Fullstack',
            image: '/public/images/work2.png'
        },
        {
            id: 7,
            title: 'Real Estate Template',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas numquam omnis earum at a harum. Non vel enim dolorum distinctio, illum ab error ipsum similique velit perspiciatis omnis repellat delectus.',
            category: 'UI Design',
            image: '/public/images/work3.png'
        },
        {
            id: 8,
            title: 'Real Estate Template',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas numquam omnis earum at a harum. Non vel enim dolorum distinctio, illum ab error ipsum similique velit perspiciatis omnis repellat delectus.',
            category: 'UI Design',
            image: '/public/images/work3.png'
        },
        {
            id: 9,
            title: 'Real Estate Template',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas numquam omnis earum at a harum. Non vel enim dolorum distinctio, illum ab error ipsum similique velit perspiciatis omnis repellat delectus.',
            category: 'UI Design',
            image: '/public/images/work3.png'
        }

    ]);

    const categories = ref([
        {
            id: 1,
            name: 'Front-End'
        },
        {
            id: 2,
            name: 'Fullstack'
        },
        {
            id: 3,
            name: 'UI Design'
        }
    ]);
    return { works, categories };
})