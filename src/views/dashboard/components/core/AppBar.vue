<template>
  <v-app-bar id="app-bar" absolute app color="transparent" flat height="75">
    <v-btn class="mr-3" elevation="1" fab small @click="setDrawer(!drawer)">
      <v-icon v-if="value">
        mdi-view-quilt
      </v-icon>

      <v-icon v-else>
        mdi-dots-vertical
      </v-icon>
    </v-btn>

    <v-toolbar-title
      class="hidden-sm-and-down font-weight-light"
      v-text="$route.name"
    />

    <v-spacer />

    <div class="mx-3" />

    <v-btn class="ml-2" min-width="0" text to="/">
      <v-icon>mdi-view-dashboard</v-icon>
    </v-btn>

    <v-btn v-show="$store.state.logged" class="ml-2" min-width="0" text to="/pages/user">
      <v-icon>mdi-account</v-icon>
    </v-btn>

    <div class="mx-3" />

    <v-facebook-login
      app-id="155955829132904"
      @logout="logout"
      @login="login"
      @sdk-init="sdkInit"
    ></v-facebook-login>
  </v-app-bar>
</template>

<script>
// Utilities
import { mapState, mapMutations } from "vuex";
import VFacebookLogin from "vue-facebook-login-component";

export default {
  name: "DashboardCoreAppBar",

  props: {
    value: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    FB: {},
    model: {},
    scope: {},
    user: ""
  }),

  computed: {
    ...mapState(["drawer"])
  },

  methods: {

    ...mapMutations({
      setDrawer: 'SET_DRAWER'}),

    login() {
      var status;
      FB.getLoginStatus(function(response) {
        status = response.status;
      });

      if (status === "connected") {
        let that = this;
        this.FB.api("/me", { fields: "id,name,email,picture" }, function(
          response
        ) {
          var user = {
            id: response.id,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
          };
          that.$store.commit("setLogged", true);
          that.$store.commit("setLoggedUser", user);
        });
      }
    },

    sdkInit({ FB, scope }) {
      this.FB = FB;
      this.scope = scope;
    },

    logout() {
      this.$store.commit("setLogged", false);
      var user = {
        id: 0,
        name: "",
        email: "",
        picture: ""
      };
      this.$store.commit("setLoggedUser", user);
      this.$router.push('/')
    },

    mapMutations() {
      return ["setLogged", "setLoggedUser"];
    }
  },

  components: {
    VFacebookLogin
  }
};
</script>
