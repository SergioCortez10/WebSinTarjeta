<script setup>
import { useRouter } from "vue-router";
import { ref, watch } from "vue";
import Navbar from "../../../components/Navbar/Navbar.vue";

const router = useRouter();
const pin = ref("");

watch(pin, (newValue) => {
  if (newValue.length > 7) {
    setTimeout(() => {
      router.push("/menu/dispensaciontarjetaCI/numeroCell");
    }, 2000); // Retraso de un segundo (1000 milisegundos)
  }
});
</script>

<template>
  <div class="w-screen h-screen">
    <div class="fondo-alpha">
      <Navbar />
      <div class="flex justify-center items-center pt-24">
        <h1 class="font-titillium text-4xl text-center font-bold text-[#88A938]">
          POR FAVOR, INGRESE SU NUMERO DE CI (CARNET DE IDENTIDAD)
        </h1>
      </div>
      <div class="flex justify-center items-center pt-24">
        <input
          type="password"
          v-model="pin"
          maxlength="10"
          class="w-52 bg-transparent border-b-2 border-[#88A938] outline-none font-bold text-[#88A938] text-5xl text-center"
        />
      </div>
      <div class="flex justify-center items-center pt-24">
        <h1 class="font-titillium text-4xl text-center font-bold text-[#3C4F58]">
          INGRESE SU CLAVE DE LA TARJETA QUE QUIERE RENOVAR O REPONER
        </h1>
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
