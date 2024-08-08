<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
import background from "../../assets/img/fondos/Fondo Presnetaciones Grafito oscuro.png";
import videoSrc from "../../assets/img/videos/PIC103.mp4";
</script>

<template>
  <div class="h-screen relative flex flex-col">
    <video autoplay loop muted class="absolute w-full h-full object-cover">
      <source :src="videoSrc" type="video/mp4" />
    </video>
    <div class="relative flex flex-col justify-center items-center h-full mr-20">
      <button
        class="rounded-lg py-5 px-20 absolute bottom-10 right-10"
        @click="router.push('/menu')"
        :style="{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }"
      >
        <div class="flex justify-center items-center ">
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
/* Asegúrate de que el video esté detrás del contenido */
video {
  z-index: -1; /* Asegura que el video esté detrás del contenido */
}
</style>
