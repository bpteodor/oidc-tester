<template>
  <b-container class="main-container">
    <b-card>
      <b-card-header>
        <b-form-group label-cols-sm="4" label-cols-lg="3" label="configuration" label-for="config">
          <b-form-select id="config" v-model="configName" :options="configNames" @change="changeConfig"></b-form-select>
        </b-form-group>
      </b-card-header>

      <b-card-body>
        <b-form-group label-cols-sm="4" label-cols-lg="3" label="client_id" label-for="client_id *">
          <b-form-input id="client_id" v-model="form.clientId" @input="updateAuthURL"></b-form-input>
        </b-form-group>

        <b-form-group label-cols-sm="4" label-cols-lg="3" label="response_type" label-for="response_type *">
          <b-form-input id="response_type" v-model="form.responseType" @input="updateAuthURL"></b-form-input>
        </b-form-group>

        <b-form-group label-cols-sm="4" label-cols-lg="3" label="redirect_uri" label-for="redirect_uri">
          <b-form-input id="redirect_uri" v-model="form.redirectUri" @input="updateAuthURL"></b-form-input>
        </b-form-group>

        <b-form-group label-cols-sm="4" label-cols-lg="3" label="scope" label-for="scope">
          <b-form-input id="scope" v-model="form.scope" @input="updateAuthURL"></b-form-input>
        </b-form-group>

        <b-button v-b-toggle.advanced variant="outline-secondary">Advanced</b-button>
        <b-collapse id="advanced" class="mt-2">
          <b-form-group label-cols-sm="4" label-cols-lg="3" label="response_mode" label-for="response_mode">
            <b-form-input id="response_mode" @input="updateAuthURL"></b-form-input>
          </b-form-group>

          <b-form-group label-cols-sm="4" label-cols-lg="3" label="code_challenge" label-for="code_challenge">
            <b-form-input id="code_challenge" v-model="form.codeChallenge" @input="updateAuthURL"></b-form-input>
          </b-form-group>

          <b-form-group label-cols-sm="4" label-cols-lg="3" label="code_challenge_method" label-for="ccm">
            <b-form-input id="ccm" v-model="form.codeChallengeMethod" @input="updateAuthURL"></b-form-input>
          </b-form-group>

          <b-form-group label-cols-sm="4" label-cols-lg="3" label="nonce" label-for="nonce">
            <b-form-input id="nonce" @input="updateAuthURL"></b-form-input>
          </b-form-group>

          <b-form-group label-cols-sm="4" label-cols-lg="3" label="prompt" label-for="prompt">
            <b-form-input id="prompt" @input="updateAuthURL"></b-form-input>
          </b-form-group>

          <b-form-group label-cols-sm="4" label-cols-lg="3" label="state" label-for="state">
            <b-form-input id="state" @input="updateAuthURL"></b-form-input>
          </b-form-group>

          <b-form-group label-cols-sm="4" label-cols-lg="3" label="acr_values" label-for="acr_values">
            <b-form-input id="acr_values" @input="updateAuthURL"></b-form-input>
          </b-form-group>

          <b-form-group label-cols-sm="4" label-cols-lg="3" label="ui_locales" label-for="ui_locales">
            <b-form-input id="ui_locales" @input="updateAuthURL"></b-form-input>
          </b-form-group>
        </b-collapse>
      </b-card-body>

      <b-card-footer>
        <b-form-group label="Authentication URL">
          <b-form-textarea id="authUrl" v-model="authURL" rows="3"></b-form-textarea>
        </b-form-group>

        <div>
          <b-button block variant="primary" @click="startAuth">START</b-button>
        </div>
      </b-card-footer>
    </b-card>
  </b-container>
</template>

<script>
import configs from '../configs'
export default {
  data() {
    return {
      configName: null,
      configNames: [],
      form: {
        clientId: null,
        responseType: null,
        redirectUri: null,
        scope: null,
        //
        codeChallenge: null,
        codeChallengeMethod: null,
      },
      authURL: "",
    };
  },
  methods: {
    changeConfig(x) {
      console.log(`selected <${x}>`);
      this.form = this.config;
      this.updateAuthURL(x);
    },
    updateAuthURL() {
      this.authURL = `${this.config.authURL}?response_type=${this.form.responseType}&client_id=${this.form.clientId}&redirect_uri=${this.form.redirectUri}&scope=${this.form.scope}&state=${this.configName}`;
      if (this.form.codeChallenge)
        this.authURL = `${this.authURL}&code_challenge=${this.form.codeChallenge}&code_challenge_method=${this.form.codeChallengeMethod}`;
    },
    startAuth() {
      document.location.href = this.authURL;
    },
  },
  computed: {
    config() {
      return configs[this.configName]
    }
  },
  mounted() {
    this.configNames = Object.keys(configs);
    if (this.configNames && this.configNames.length > 0) {
      this.configName = this.configNames[0];
      this.changeConfig(this.configName);
    }
  },
};
</script>

<style>
.main-container {
  padding: 45px 20px 0 20px;
}
</style>
