<template>
  <b-container>
    <p v-if="state === null">Loading...</p>

    <p class="text-danger" v-if="$route.query.error">
      <b>{{ this.$route.query.error }}</b> {{ this.$route.query.error_description }}
    </p>

    <tokens :payload="payload" v-if="state === 'ok'"></tokens>

    <p class="text-danger" v-if="state === 'err'">
      An error occurred exchanging the <b>authorization_code</b> for <b>access_token</b>. Probably the code expired.
    </p>

  </b-container>
</template>

<script>
import configs from "../configs";
import Tokens from "../components/Tokens"
import axios from "axios";
import qs from 'qs';
export default {
  components: {Tokens},
  data() {
    return {
      state: null,
      payload: null,
    }
  },
  methods: {
    theThis() {
      return this
    }
  },
  mounted() {
    const configName = this.$route.query.state;
    //const code = this.$route.query.code
    //const iss = this.$route.query.iss
    console.log(`configName=${configName}`);
    const config = configs[configName];

    axios
      .post(config.tokenURL, qs.stringify({
        code: this.$route.query.code,
        "client_id": config.clientId,
        "redirect_uri": config.redirectUri,
        "grant_type":	"authorization_code",
        "code_challenge": config.codeChallenge,
        "code_verifier":	config.codeVerifier,
        //"client_secret": "public",
        //realm: "consumer",
      }))
      .then((response) => {
        console.log(response);
        this.payload = response.data
        this.state = 'ok'
      })
      .catch((error) => {
        console.log('exchange failed: ' + error);
        //this.payload = error
        this.state = 'err'
      });
  },
};
</script>

<style></style>
