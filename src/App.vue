<template>
  <div>
    <main class="overflow-hidden">
      <!-- NAVIGATION -->
      <nav class="navbar navbar-expand-lg navbar-light py-2 text-uppercase shadow-md">
        <div class="container">
          <!-- <h4 class="Ylogo">Y</h4> -->
          <router-link :to="{ name: 'home' }" class="navbar-brand text-dark"><span class="Ylogo">Y</span> <span
              class="navfont">Ye Myint
              Soe</span></router-link>
          <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#myNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>


          <div class="collapse navbar-collapse navfont" id="myNavbar">
            <ul class="navbar-nav mx-auto middle-menu">
              <li class="nav-item mx-1">
                <router-link :to="{ name: 'home' }" class="nav-link" :class="{ 'active': $route.name === 'home' }"
                  @click="setActiveMenu('home')">Home</router-link>
              </li>
              <li class="nav-item mx-1">
                <router-link :to="{ name: 'project' }" class="nav-link" :class="{ 'active': $route.name === 'project' }"
                  @click="setActiveMenu('project')">Projects</router-link>
              </li>
            </ul>

            <ul class="navbar-nav navfont">
              <li class="navbar-item contact-me">
                <a href="" class="nav-link text-dark" data-bs-toggle="offcanvas">
                  <button type="button" class="button">
                    Contact Me
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <router-view></router-view>
      <!-- FOOTER -->
      <section id="footer" class="container text-ligdarkht text-center py-5 border-top">
        <div class="">&copy;2023 all rights reserved & powered by hit.com</div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeMenu = ref('');

const setActiveMenu = (menu) => {
  activeMenu.value = menu;
};

</script>

<style lang="scss" scoped></style>