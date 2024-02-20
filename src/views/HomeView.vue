<template>
  <div>

    <!-- HEADER -->
    <section id="header2" class="pt-0">
      <div class="container px-0 row m-auto overflow-hidden  gy-5">
        <div class="col-lg-4  d-flex align-items-center  justify-content-center">
          <div class="header-col">
            <span class="ex"><i class="bi bi-quote"></i></span>

            <p class="ps-2">I design and code beautifully <br> simple things, and I love what I do.</br>
              I design and code beautifully <br> simple things, and I love what I do.</p>
          </div>
        </div>
        <div class="col-lg-4 ">
          <div class="main position-relative">
            <h6 class="text-center fw-bold" data-aos="fade-right">Hi, I'm <span class="textColor">Ye Myint Soe,</span>
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
        <div class="col-lg-4  icons-group">
          <div class="icon">
            <a href="" class="btn me-3 social-icon"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="" class="btn me-3 social-icon"><i class="fa-brands fa-instagram"></i></a>
            <a href="" class="btn me-3 social-icon"><i class="bi bi-whatsapp"></i></a>
            <a href="" class="btn social-icon"><i class="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT ME -->
    <section id="aboutMe" class="container">
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
              <div class="col-lg-6 yearEx">
                <div class="d-flex year align-items-end">
                  <h2 class="pe-2 textColor">10+</h2>
                  <p class="fw-bold aboutfont">Years <br>experience . . .</p>
                </div>
                <p class="aboutText">Hello there!My name is Ye Myint Soe. I am a web designer & developer, and
                  I'm very passionate and dedicated to my work. I am web designer & developer.</p>
              </div>
              <div class="col-lg-6 yearEx">
                <div class="d-flex year align-items-end">
                  <h2 class="pe-2 textColor">1K+</h2>
                  <p class="fw-bold aboutfont">Students <br>Worldwide . . .</p>
                </div>
                <p class="aboutText">Within 10+ years experience as a professional a graphic designer, I have
                  acquired the skill and knowledge necessary to make your project a success.</p>
              </div>
            </div>
            <div class="row aboutIcon aboutTel">
              <div class="col-lg-6 pt-4 iconPs">
                <div class="d-flex mb-4 pb-3">
                  <div><i class="bi bi-telephone mb-2 me-3"></i></div>
                  <div class="addtext">+09 963 163 029</div>
                </div>
                <div class="d-flex">
                  <div><i class="bi bi-envelope me-3"></i></div>
                  <div class="addtext">yms@gmail.com</div>
                </div>
              </div>
              <div class="col-lg-6 pt-4 ps-lg-4">
                <div class="d-flex mb-4 pb-3">
                  <div><i class="bi bi-person-square mb-2 me-3"></i></div>
                  <div class="addtext">25 yrs</div>
                </div>
                <div class="d-flex">
                  <div><i class="bi bi-geo-alt me-3"></i></div>
                  <div class="addtext">United Kingdom, London</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- MY SPECIALTIES -->
    <section id="specialities" class="container">
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
                        <p class="m-0">{{ skill.content }}</p>
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


    <!-- MY LATEST BLOG -->
    <section id="blog" class="container">
      <h1 class="main-heading fw-bold pb-5" data-aos="zoom-in">My Latest Blog</h1>
      <div class="container row gy-2" data-aos="fade-up" data-aos-duration="1000">
        <div class="main-card col-lg-4 col-md-6" v-for="blog in blogs" :key="blog.id">
          <div>
            <img class="img-fluid" :src="blog.image" alt="">
            <div class="card-body text-black pt-3">
              <p>{{ blog.title }}</p>
              <a href="#" class="arrow-icon">
                <i class="bi bi-arrow-up-right-circle-fill"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-center mt-3">
        <button class="button">
          <a href="" class="text-light text-decoration-none">
            Load More <i class="fa-solid fa-arrow-right ps-1"></i>
          </a>

        </button>
      </div>
    </section>

    <!-- GET IN TOUCH -->
    <section id="get-in-touch" class="container container-fluid text-dark pb-0">
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
                <span class="text-secondary">Call me</span>
                <span class="fw-bold">+95 9251749823</span>
              </div>
            </li>

            <li class="py-2 d-flex align-items-center">
              <i class="bi bi-envelope me-3"></i>
              <div class="d-flex flex-column">
                <span class="text-secondary">Email Me</span>
                <span class="fw-bold">aefehuhjn@gmail.com</span>
              </div>
            </li>

            <li class="py-2 d-flex align-items-center">
              <i class="bi bi-geo-alt me-3"></i>
              <div class="d-flex flex-column">
                <span class="text-secondary">Address</span>
                <span class="fw-bold">No.24 Hlaing, Yangon, Myanmar</span>
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
