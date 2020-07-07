<template>
  <b-form class="form-group">
    <div class="container main-container">
      <b-row>
        <b-col>
          <!-- client card -->
          <div class="card card-default">
            <div class="card-header card-header-divider">
              Client configuration
              <span class="card-subtitle">
                Please select a client configuration or create a new ones
              </span>
            </div>
            <div class="card-body">
              <b-row>
                <b-col>
                  <div role="form-group">
                    <label for="select-client">Client:</label>
                    <b-form-select
                      id="select-client"
                      v-model="client"
                      :options="clientOptions"
                    ></b-form-select>
                  </div>
                </b-col>
                <b-col>
                  <div role="form-group">
                    <label for="select-config">Config:</label>
                    <b-form-select
                      id="select-config"
                      v-model="config"
                      :options="configOptions"
                    ></b-form-select>
                  </div>
                </b-col>
              </b-row>
            </div>
          </div>
          <!-- dyn card -->
          <div class="card card-default">
            <div class="card-header card-header-divider">
              Values
              <span class="card-subtitle">
                Override customization defaults
              </span>
            </div>
            <div class="card-body">
              <b-row>
                <b-col>
                  <div role="form-group">
                    <b-form-group label="Redirect URI:">
                      <b-form-input v-model="redirectUri" trim></b-form-input>
                    </b-form-group>
                  </div>
                </b-col>
              </b-row>

              <b-row>
                <b-col>
                  <div role="form-group">
                    <b-form-group label="Scopes:">
                      <b-form-checkbox-group
                        id="checkbox-scopes"
                        v-model="scopes"
                        :options="availableScopes"
                      ></b-form-checkbox-group>
                    </b-form-group>
                  </div>
                </b-col>
              </b-row>
              <b-row>
                <b-col sm="2">
                  <div role="group">
                    <b-form-checkbox
                      id="pkce"
                      name="pkce"
                      v-model="pkce.active"
                    >
                      PKCE
                    </b-form-checkbox>
                  </div>
                </b-col>
                <b-col>
                  <b-row>
                    <b-col sm="3">
                      <label for="challenge">Challenge:</label>
                    </b-col>
                    <b-col sm="9">
                      <b-form-input
                        v-model="pkce.challenge"
                        trim
                      ></b-form-input>
                    </b-col>
                  </b-row>
                </b-col>
                <b-col>
                  <b-row>
                    <b-col sm="3">
                      <label for="challenge">Verifier:</label>
                    </b-col>
                    <b-col sm="9">
                      <b-form-input v-model="pkce.verifier" trim></b-form-input>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
            </div>
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-card class="mt-3" header="Authentication URL">
            <b-form-textarea
              id="authUrl"
              v-model="authURL"
              rows="3"
            ></b-form-textarea>
          </b-card>
        </b-col>
      </b-row>

      <b-row>
        <b-col>Start</b-col>
      </b-row>
    </div>
  </b-form>
</template>

<script>
export default {
  data() {
    return {
      configs: {},
      client: null,
      clientOptions: [],
      config: null,
      configOptions: [],
      redirectUri: "",
      scopes: ["openid", "profile"],
      availableScopes: ["openid", "profile", "phone", "email", "address"],
      pkce: {
        active: true,
        challenge: "123",
        verifier: "321",
      },
      authURL: "",
    };
  },
  methods: {
    updateAuthURL() {
      return null;
    },
  },
  mounted() {
    this.configs = {
      b2b: {
        authURL: "https://stihl-sso.com/auth/oauth2/consumer/authorize",
        tokenURL: "https://stihl-sso.com/auth/oauth2/consumer/access_token",
        clientId: "demo",
        clientSecret: "demo",
        scopes: ["openid", "profile"],
      },
    };
    this.clientOptions = Object.keys(this.configs);
    if (this.clientOptions && this.clientOptions.length > 0)
      this.client = this.clientOptions[0].value;
  },
};
</script>

<style>
.main-container {
  padding: 45px 20px 0 20px;
}
</style>
