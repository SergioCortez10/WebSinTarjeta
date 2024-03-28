<script setup>
import { useRouter } from "vue-router";
import Navbar from "../../components/Navbar/Navbar.vue";

const router = useRouter();
</script>

<template>
  <div class="w-screen h-screen">
    <div class="fondo-alpha">
      <Navbar />
      <div class="flex justify-center items-center pt-52">
        <h1 class="font-titillium text-4xl text-center font-bold text-[#88A938]">
          POR FAVOR ESPERE UN MOMENTO
        </h1>
      </div>
      <div class="flex justify-center items-center pt-12">
        <h1 class="font-titillium text-4xl text-center font-bold text-[#3C4F58]">
          PLASE WAIT
        </h1>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
