import { defineStore } from "pinia";
import { ref } from "vue";

export const useSkillStore = defineStore("skill", () => {
  const skillCategories = ref([
    {
      id: 1,
      name: "Front-End Development",
    },
    {
      id: 2,
      name: "Back-End Development",
    },
  ]);

  const skills = ref([
    {
      id: 1,
      category: "Front-End Development",
      content: "HTML, CSS, JavaScript, Bootstrap, TailwindCSS, Materialize CSS",
    },
    {
      id: 2,
      category: "Front-End Development",
      content: "jQuery, Vue.js (Vue, Pinia, Vue-Router), React.js, TypeScrip",
    },
    {
      id: 3,
      category: "Back-End Development",
      content:
        "PHP (MySQLi, PDO, OOP, MVC), Laravel Framework, SQL, MySQL, PostgreSQL",
    },
  ]);

  return { skillCategories, skills };
});
