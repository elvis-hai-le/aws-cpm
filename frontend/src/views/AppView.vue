<template>
  <div class="main">
    <ClientForm></ClientForm>
  </div>
</template>

<script>
// @ is an alias to /src
import ClientForm from '@/components/ClientForm.vue';

export default {
  name: 'AppView',
  components: {
    ClientForm
}
}
</script>
