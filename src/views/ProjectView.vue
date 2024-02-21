<template>
  <div>
    <!-- MY PROJECTS -->
    <section id="works" class="container py-5">
      <h2 class="main-heading fw-bold pb-5" data-aos="zoom-in">My Projects</h2>
      <ul class="d-flex justify-content-center fw-semibold">
        <li v-for="category in categories" :key="category.id" class="list-group-item me-5">
          <span :class="{ 'active': category.name === selectedCategory }" class="nav-link"
            @click="filterWorks(category.name)">
            {{ category.name }}
          </span>
        </li>

      </ul>


      <div v-for="work in filteredWorks" :key="work.id" class="row d-flex align-items-end mt-5 pt-3 works">
        <div class="col-md-5">
          <img :src="work.image" alt="" width="100%">
        </div>
        <div class="col-md-7 mt-3">
          <h6 class="fw-semibold">{{ work.title }}</h6>
          <p class="fs-5">{{ work.content }}</p>
          <h6 class="fw-normal">{{ work.category }}</h6>

          <button class="button mt-3">
            <a href="" class="text-light text-decoration-none">
              View Work <i class="fa-solid fa-arrow-right ps-1"></i>
            </a>
          </button>
        </div>
      </div>



    </section>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useWorkStore } from './../stores/work';
import { storeToRefs } from 'pinia';

const workStore = useWorkStore();
const { works, categories } = storeToRefs(workStore);

// filter by category
const selectedCategory = ref('Front-End');

const filteredWorks = computed(() => {
  return works.value.filter(work => work.category === selectedCategory.value);
});

const filterWorks = (category) => {
  selectedCategory.value = category;
};
</script>

<style lang="scss" scoped></style>