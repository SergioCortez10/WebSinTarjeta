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
        <div class="flex justify-center items-center text-center mt-20">
          <h1 class="font-titillium text-4xl font-bold text-[#88A938]">
            MENU SIN TARJETA
          </h1>
        </div>
        <div class="flex justify-center items-center mt-5">
          <button
            class="p-5 rounded-lg shadow-[0_40px_100px_20px_rgba(0,0,0,0.3)] m-10 w-60 h-64"
            @click="router.push('/menu/dispensaciontarjetaCI')"
          >
            <p class="text-xl font-titillium font-bold text-[#88A938] mb-5">
              RENOVACIÓN O REPOSICIÓN DE TARJETA
            </p>
            <i class="fa-regular fa-credit-card text-[50px] text-[#88A938]"></i>
          </button>
          <button
            class="p-5 rounded-lg shadow-[0_40px_100px_20px_rgba(0,0,0,0.3)] m-10 w-60 h-64"
            @click="router.push('/menu/consulta')"
          >
            <p class="text-xl font-titillium font-bold text-[#3C4F58] mb-5">
              CONSULTAS SIN TARJETA
            </p>
            <i
              class="fa-solid fa-money-check-dollar text-[50px] text-[#3C4F58]"
            ></i>
          </button>
        </div>
        <div class="text-right mt-10">
            <button
              class="bg-[#3C4F58] rounded rounded-l-xl py-5 px-20 text-right ml-auto"
              @click="router.push('/inicio')"
            >
            <div class="flex justify-center items-center ">
              <i class="fa-solid fa-house text-2xl text-white mr-5"></i>
              <h1
                class="text-xl font-titillium font-bold text-white text-center"
              >
                CANCELAR
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
}</style>
