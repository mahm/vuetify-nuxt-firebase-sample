<template>
<v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      Form
      <v-card>
        <v-card-actions>
          <v-btn color="primary" flat @click="result">Result</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>

</template>

<script>
export default {
  methods: {
    result () {
      this.$router.push(`/checks/${this.$store.state.check.id}/result`)
    }
  }
}
</script>
