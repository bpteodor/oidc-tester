<template>
  <b-container class="main-container">
    <b-card title="Tokens">
      <b-card-body>
        <h3>access_token:</h3>
        <p>{{ payload.access_token }}</p>
        <div><b-button @click="copyToClipboard(payload.access_token)">Copy</b-button></div>

        <h3>id_token:</h3>
        <p>{{ payload.id_token }}</p>
        <div><b-button>encode/decode</b-button></div>

        <p>scope: {{ payload.scope }}</p>
        <p>type: {{ payload.token_type }}</p>
        <p>expires in: {{ payload.expires_in }}</p>
      </b-card-body>
    </b-card>
  </b-container>
</template>

<script>
export default {
  props: {
    payload: Object,
  },
  methods: {
    copyToClipboard(text) {
      const input = document.createElement("textarea");
      input.innerHTML = text;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
    },
  },
};
</script>

<style></style>
