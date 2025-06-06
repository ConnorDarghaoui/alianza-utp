<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute }   from 'vue-router'
import { useClubStore } from '@/store/useClubStore'
import { storeToRefs } from 'pinia'
import LucideIcon from '@/components/ui/LucideIcon.vue'

const clubStore = useClubStore()
const route     = useRoute()
const id        = Number(route.params.id)

const { details, history, accessLog } = storeToRefs(clubStore)

onMounted(() => {
  // solo a través del store
  clubStore.fetchDetails(id)
  clubStore.fetchHistory(id)
  clubStore.fetchAccessLog(id)
})

function saveDetails() {
  clubStore.updateDetails(id, details.value)
}

function saveSocial() {
  clubStore.updateSocialLinks(id, {
    facebook : details.value.facebook,
    instagram: details.value.instagram,
    twitter  : details.value.twitter
  })
}
</script>

<template>
  <header>…</header>

  <!-- Información del Club -->
  <div>
    <input v-model="details.name" … />
    <!-- resto igual -->
    <button @click="saveDetails">Guardar cambios</button>
  </div>

  <!-- Redes Sociales -->
  <div>
    <input v-model="details.facebook" … />
    <!-- resto igual -->
    <button @click="saveSocial">Guardar enlaces</button>
  </div>

  <!-- Historial y accesos -->
  <div v-for="h in history" :key="h.id">…</div>
  <div v-for="r in accessLog" :key="r.id">…</div>
</template>
