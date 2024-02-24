<template>
  <div>

    <!-- HEADER -->
    <section id="header2" class="pt-0 py-5">
      <div class="container px-0 row m-auto overflow-hidden  gy-5">
        <div class="col-lg-4  d-flex align-items-center  justify-content-center">
          <div class="header-col">
            <span class="ex"><i class="bi bi-quote"></i></span>

            <p class="ps-2">
              WEB DEVELOPMENT isn't just a job, it's my passion. I pour my heart and soul into every project, crafting
              solutions that delight users and empower businesses to soar. Ready to see how I can elevate your project?
            </p>
          </div>
        </div>
        <div class="col-lg-4 ">
          <div class="main position-relative">
            <h6 class="text-center fw-bold" data-aos="fade-right">Hello, I'm <span class="textColor">Ye Myint Soe!</span>
            </h6>
            <h1 class="main-heading fw-bold" data-aos="fade-left">FullStack Developer</h1>

            <div class="circles">
              <div class="circleImgGroup  ">
                <img src="/public/images/1.png" class="img-fluid circle-img">
              </div>
              <div class="blueCircle ">
                <div class="circle1">
                </div>
                <div class="circle2">
                </div>
                <div class="circle3">
                </div>
              </div>

            </div>
            <div class="card1 shadow-sm">
              <div class=""><i class="bi bi-magic"></i></div>
              <div class="ms-2">
                <span>100 +</span>
                <p>Complete Project</p>
              </div>
            </div>
            <div class="card2 shadow-sm">
              <div><i class="fa-regular fa-user"></i></div>
              <div class="text-center">
                <p class="fw-bold headercardfont">2k+</p>
                <p style="font-size: 10px;">Happy Customer</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 icons-group">
          <div class="icon">
            <a href="https://www.facebook.com/yemyintsoethehappycoder" target="_blank" class="btn me-3 social-icon"><i
                class="fa-brands fa-facebook-f"></i></a>
            <a href="https://www.youtube.com/@ymsmyanmarprogrammingtutorials" target="_blank"
              class="btn me-3 social-icon"><i class="bi bi-youtube"></i></a>
            <a href="https://github.com/yemyintsoe" target="_blank" class="btn me-3 social-icon"><i
                class="bi bi-github"></i></a>
            <a href="https://www.linkedin.com/in/ye-myint-soe-salai" target="_blank" class="btn social-icon"><i
                class="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT ME -->
    <section id="aboutMe" class="container py-5">
      <div class="fw-bold">
        <h1 class="main-heading fw-bold pb-5" data-aos="zoom-in">About Me</h1>
        <div class="row">
          <div class="col-lg-5 aboutimg">
            <figure>
              <img src="/public/images/05.png" alt="" class="sport-image img-fluid">
              <img src="/public/images/Element.svg" alt="" class="sport">
            </figure>

          </div>
          <div class="col-lg-7 center">
            <div class="row border-bottom aboutletter">
              <div class="col-lg-12 yearEx">
                <div class="d-flex year align-items-end">
                  <h2 class="pe-2 textColor">6+</h2>
                  <p class="fw-bold aboutfont">Years <br>Experience . . .</p>
                </div>
                <p class="aboutText">
                  Hello! I'm Ye Myint Soe, a Full-stack Web Developer with over 6 years of experience. My passion lies in
                  crafting engaging, intuitive and efficient web solutions that empower users and accelerate businesses
                  forward. I'm enthusiastic about my work and driven by the transformative impact it can have.
                </p>
              </div>
              <!-- <div class="col-lg-6 yearEx">
                <div class="d-flex year align-items-end">
                  <h2 class="pe-2 textColor">1K+</h2>
                  <p class="fw-bold aboutfont">Students <br>Worldwide . . .</p>
                </div>
                <p class="aboutText">Within 10+ years experience as a professional a graphic designer, I have
                  acquired the skill and knowledge necessary to make your project a success.</p>
              </div> -->
            </div>
            <div class="row aboutIcon aboutTel">
              <div class="col-lg-6 pt-4 iconPs">
                <div class="d-flex mb-4 pb-3">
                  <div><i class="bi bi-telephone mb-2 me-3"></i></div>
                  <div class="addtext">+95 9 777 874 547</div>
                </div>
                <div class="d-flex">
                  <div><i class="bi bi-envelope me-3"></i></div>
                  <div class="addtext">yms.yemyintsoe@gmail.com</div>
                </div>
              </div>
              <div class="col-lg-6 pt-4 ps-lg-4">
                <div class="d-flex mb-4 pb-3">
                  <div><i class="bi bi-person-square mb-2 me-3"></i></div>
                  <div class="addtext">26 Year</div>
                </div>
                <div class="d-flex">
                  <div><i class="bi bi-geo-alt me-3"></i></div>
                  <div class="addtext">Yangon, Myanmar</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- MY SPECIALTIES -->
    <section id="specialities" class="container py-5">
      <div class="container">
        <h1 class="main-heading fw-bold pb-5" data-aos="zoom-in">My Specialties</h1>
        <div class="accordion" id="accordionExample">

          <!-- Loop through skillCategories -->
          <div v-for="(category, index) in skillCategories" :key="category.id" class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button" :class="{ 'collapsed': index !== 0 }" type="button"
                data-bs-toggle="collapse" :data-bs-target="'#collapse' + category.id"
                :aria-expanded="index === 0 ? 'true' : 'false'" :aria-controls="'collapse' + category.id">
                <b class="fs-5">{{ category.name }}</b>
              </button>
            </h2>
            <div :id="'collapse' + category.id" class="accordion-collapse collapse" :class="{ 'show': index === 0 }"
              data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <div class="row">
                  <div class="col-lg-6"></div>
                  <div class="col-lg-6">
                    <!-- Filter skills based on the current category -->
                    <div v-for="skill in filteredSkills(category.name)" :key="skill.id">
                      <div class="d-flex align-items-center mb-2">
                        <i class="fa-solid fa-caret-right me-2"></i>
                        <p class="m-0 skillContent">{{ skill.content }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- MY PROJECTS -->
    <section class="container py-5">
      <h1 class="main-heading fw-bold pb-5" data-aos="zoom-in">My Projects</h1>
      <div class="row d-flex align-items-end">
        <div class="col-md-1"></div>
        <div class="col-md-4 mb-4">
          <h3>Project Statistics</h3>
          <p>2018 - Present</p>
          <button class="button mt-1">
            <a href="" class="text-light text-decoration-none">
              Visit My Project <i class="fa-solid fa-arrow-right ps-1"></i>
            </a>

          </button>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-5">
          <div class="d-flex justify-content-between p-0 project-count mb-4 fw-bold">
            <p>Website Design</p>
            <span>75</span>
          </div>

          <div class="d-flex justify-content-between p-0 project-count mb-4 fw-bold">
            <p>Fullstack Projects</p>
            <span>62</span>
          </div>

          <div class="d-flex justify-content-between p-0 project-count fw-bold">
            <p>UI Design Projects</p>
            <span>28</span>
          </div>
        </div>
      </div>
    </section>

    <!-- MY LATEST BLOG -->
    <section id="blog" class="container py-5">
      <h1 class="main-heading fw-bold pb-5" data-aos="zoom-in">My Latest Blog</h1>
      <div class="container row gy-2" data-aos="fade-up" data-aos-duration="1000">
        <div class="main-card col-lg-4 col-md-6" v-for="blog in blogs" :key="blog.id">
          <div>
            <img class="img-fluid" :src="blog.image" alt="" style="object-fit: cover;">
            <div class="card-body text-black pt-3">
              <p>{{ blog.title.toUpperCase() }}</p>
              <a :href="blog.src" target="_blank" class="arrow-icon">
                <i class="bi bi-arrow-up-right-circle-fill"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-center mt-3">
        <a href="https://yemyintsoe.medium.com" target="_blank" class="button text-light text-decoration-none">
          Load More <i class="fa-solid fa-arrow-right ps-1"></i>
        </a>
      </div>
    </section>

    <!-- GET IN TOUCH -->
    <section id="get-in-touch" class="container container-fluid text-dark pt-5">
      <div class="container pb-5">
        <h1 class="main-heading fw-bold pb-1" data-aos="zoom-in">Get in Touch</h1>
        <div class="" style="text-align: center;">For Business and partnership inquiry please contact me below!</div>
      </div>

      <div class="Content row container py-5">
        <div class="first-col col-md-6">
          <ul>
            <li class="py-2 d-flex align-items-center">
              <i class="bi bi-telephone me-3"></i>
              <div class="d-flex flex-column">
                <span class="text-secondary">Call Me</span>
                <span class="fw-bold">+95 9 777 874 547</span>
              </div>
            </li>

            <li class="py-2 d-flex align-items-center">
              <i class="bi bi-envelope me-3"></i>
              <div class="d-flex flex-column">
                <span class="text-secondary">Email Me</span>
                <span class="fw-bold">yms.yemyintsoe@gmail.com</span>
              </div>
            </li>

            <li class="py-2 d-flex align-items-center">
              <i class="bi bi-geo-alt me-3"></i>
              <div class="d-flex flex-column">
                <span class="text-secondary">Address</span>
                <span class="fw-bold">Yangon, Myanmar</span>
              </div>
            </li>
          </ul>
        </div>
        <form action="" class=" col-md-6">
          <div class="first mb-3 d-flex">
            <input class="form-control form-control-sm me-3" type="text" placeholder="Full name"
              aria-label=".form-control-sm example">
            <input class="form-control form-control-sm" type="text" placeholder="Your Email"
              aria-label=".form-control-sm example">
          </div>
          <div class="second mb-3 d-flex">
            <input class="form-control form-control-sm me-3" type="text" placeholder="Phone Number"
              aria-label=".form-control-sm example">
            <input class="form-control form-control-sm" type="text" placeholder="Subject"
              aria-label=".form-control-sm example">
          </div>
          <div class="mb-3">
            <textarea name="" id="" type="text" class="form-control" rows="5" placeholder="Message"></textarea>
          </div>
          <button class="button float-end">
            <a href="" class="text-light text-decoration-none">
              Submit
            </a>
          </button>
        </form>
      </div>
    </section>


  </div>
</template>

<script setup>

import { useBlogStore } from './../stores/blog';
import { useSkillStore } from './../stores/skill';
import { storeToRefs } from 'pinia';

const blogStore = useBlogStore();
const { blogs } = storeToRefs(blogStore);

const skillStore = useSkillStore();
const { skillCategories, skills } = storeToRefs(skillStore);
const filteredSkills = (categoryName) => {
  return skills.value.filter(skill => skill.category === categoryName);
};

</script>

<style lang="scss" scoped></style>
