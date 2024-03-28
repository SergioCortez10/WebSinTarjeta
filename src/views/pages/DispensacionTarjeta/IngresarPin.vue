<script setup>
import { useRouter } from "vue-router";
import { ref, watch } from "vue";
import Navbar from "../../../components/Navbar/Navbar.vue";

const router = useRouter();
const pin = ref("");

watch(pin, (newValue) => {
  if (newValue.length === 4) {
    setTimeout(() => {
      router.push("/menu/nuevopin");
    }, 1000); // Retraso de un segundo (1000 milisegundos)
  }
});
</script>

<template>
  <div class="w-screen h-screen">
    <div class="fondo-alpha">
      <Navbar />
      <div class="flex justify-center items-center pt-24">
        <h1 class="font-titillium text-4xl text-center font-bold text-[#88A938]">
          POR FAVOR, INGRESE SU CLAVE (PIN)
        </h1>
      </div>
      <div class="flex justify-center items-center pt-24">
        <input
          type="password"
          v-model="pin"
          maxlength="4"
          class="w-32 bg-transparent border-b-2 border-[#88A938] outline-none font-bold text-[#88A938] text-5xl text-center"
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
