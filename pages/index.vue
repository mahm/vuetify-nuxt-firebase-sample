<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-card-actions>
          <v-btn color="primary" flat @click="start">New Form</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  methods: {
    async start () {
      await this.$store.dispatch('initCheck').then(() => {
        console.log(this.$store.state.check.id)
        this.$router.push(`/checks/${this.$store.state.check.id}`)
      })
    }
  }
}
</script>
