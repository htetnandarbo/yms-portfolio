import { defineStore } from "pinia";
import { ref } from "vue";

export const useBlogStore = defineStore("blog", () => {
  const blogs = ref([
    {
      id: 1,
      title: "Soft Skills that Software Engineers or Programmers Should Have!",
      image: "/images/blogs/1.png",
      src: "https://yemyintsoe.medium.com/software-engineer-programmer-developer-တွေ-ရှိရမည့်-soft-skills-b65438b5df15",
    },
    {
      id: 2,
      title: "Var, Let & Const in JavaScript Programming",
      image: "/images/blogs/2.webp",
      src: "https://yemyintsoe.medium.com/var-let-const-in-javascripting-programming-fd0dbfc1ac47",
    },
    {
      id: 3,
      title: "FormKit — The Open-Source Form Framework for Vue3",
      image: "/images/blogs/3.webp",
      src: "https://yemyintsoe.medium.com/formkit-the-open-source-form-framework-for-vue3-ceba985112a2",
    },
  ]);

  return { blogs };
});
