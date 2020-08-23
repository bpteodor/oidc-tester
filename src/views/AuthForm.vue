<template>
  <b-container class="main-container">
    <b-card>
      <b-card-header>
        <b-form-group label-cols-sm="4" label-cols-lg="3" label="configuration" label-for="config">
          <b-form-select id="config" v-model="config" :options="configs" @change="changeConfig"></b-form-select>
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
            <b-form-input id="code_challenge" @input="updateAuthURL"></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-sm="4"
            label-cols-lg="3"
            label="code_challenge_method"
            label-for="code_challenge_method"
          >
            <b-form-input id="code_challenge_method" @input="updateAuthURL"></b-form-input>
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
          <b-button block variant="primary">START</b-button>
        </div>
      </b-card-footer>
    </b-card>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      config: null,
      configs: [],
      form: {
        clientId: null,
        responseType: null,
        redirectUri: null,
        scope: null,
      },
      authURL: "",
    };
  },
  methods: {
    changeConfig(x) {
      console.log(`selected <${x.clientId}>`);
      this.form = this.config;
      this.updateAuthURL(x);
    },
    updateAuthURL() {
      this.authURL = `${this.config.authURL}?response_type=${this.form.responseType}&client_id=${this.form.clientId}&redirect_uri=${this.form.redirectUri}&scope=${this.form.scope}`
      return;
    },
  },
  computed: {
    configNames() {
      return Object.keys(this.configs);
    },
  },
  mounted() {
    this.configs = [
      {
        text: "demo@stihl-dealers",
        value: {
          authURL: "https://stihl-sso.com/auth/oauth2/consumer/authorize",
          tokenURL: "https://stihl-sso.com/auth/oauth2/consumer/access_token",
          clientId: "demo",
          clientSecret: "demo",
          responseType: "code",
          redirectUri: "http://localhost:8080/login",
          scope: "openid profile",
        },
      },{
        text: "imow@stihl-customers",
        value: {
          authURL: "https://stihl-sso.com/auth/oauth2/consumer/authorize",
          tokenURL: "https://stihl-sso.com/auth/oauth2/consumer/access_token",
          clientId: "imow",
          responseType: "code",
          redirectUri: "http://localhost:8080/login",
          scope: "openid profile",
        },
      },
    ];
    if (this.configs && this.configs.length > 0) {
      this.config = this.configs[0].value;
      this.changeConfig(this.config);
    }
  },
};
</script>

<style>
.main-container {
  padding: 45px 20px 0 20px;
}
</style>
