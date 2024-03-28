<script setup>
import { useRouter } from "vue-router";
import Navbar from "../../components/Navbar/Navbar.vue";

const router = useRouter();
</script>

<template>
  <div class="w-screen h-screen">
    <div class="fondo-alpha">
      <Navbar />
      <div class="absolute w-full">
        <div class="text-center mt-20">
          <h1 class="font-titillium text-5xl font-bold text-[#88A938]">
            BIENVENIDOS
          </h1>
        </div>
        <div class="text-right mt-[388px]">
          <button
            class="bg-[#3C4F58] rounded rounded-l-xl py-5 px-20 text-right ml-auto"
            @click="router.push('/menu')"
          >
            <div class="flex justify-center items-center ">
              <i class="fa-solid fa-address-card text-2xl text-white mr-5"></i>
              <h1
                class="text-xl font-titillium font-bold text-white text-center"
              >
                MENU SIN TARJETA
              </h1>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.fondo-alpha {
  width: 100%;
  height: 100%;
  background-image: url("/src/assets/img/fondos/Fondo\ Corp\ ALPHA\ \(verde\).png");
  background-size: cover;
  background-position: center;
}
</style>
