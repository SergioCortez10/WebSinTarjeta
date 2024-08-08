<script setup>
import { useRouter } from "vue-router";
import Navbar from "../../components/Navbar/Navbar.vue";
import background from "../../assets/img/fondos/Fondo Presnetaciones Grafito oscuro.png";
const router = useRouter();
</script>

<template>
  <div class="h-screen">
    <Navbar class="h-[17%]" />
    <div class="flex flex-col justify-center items-center h-[83%]" 
      :style="{ backgroundImage: `url('/src/assets/img/fondos/Fondo Corp ALPHA (verde).png')` }">
      <h1 class="font-bold text-CoOscuro font-Titillium text-[35px] mt-[-6%] ">
        BIENVENIDOS
      </h1>
      <button
        class="rounded-lg py-5 px-20 absolute bottom-10 right-10"
        @click="router.push('/menu')"
        :style="{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
      >
        <div class="flex justify-center items-center">
          <i class="fa-solid fa-address-card text-2xl text-white mr-5"></i>
          <h1 class="text-xl font-titillium font-bold text-white text-center">
            MENU SIN TARJETA
          </h1>
        </div>
      </button>
    </div>
  </div>
</template>

<style scoped>
</style>
