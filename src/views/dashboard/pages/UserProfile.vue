<template>
  <v-container id="user-profile" fluid tag="section">
    <v-row justify="center">
      <v-col cols="12">
        <base-material-card
          class="v-card-profile"
          :avatar="loggedUser.picture"
        >
          <v-card-text class="text-center">
            <h3 class="display-2 font-weight-light mb-3 black--text">
              {{ loggedUser.name }}
            </h3>
          </v-card-text>
        </base-material-card>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" md="8">
        <base-material-card>
          <template v-slot:heading>
            <div class="display-2 font-weight-light">
              Ubicación y estado
            </div>
          </template>

          <v-form>
            <v-container class="py-0">
              <v-row>

                <v-col cols="12" >
                  <v-combobox label="¿ Cual es tu ubicación actual ?" :items="locations" />
                </v-col>

                <v-col cols="12" >
                  <v-select label="¿ Cual es tu estado ?" :items="status" />
                </v-col>

                <v-col cols="12" class="text-right">
                  <v-btn color="success" class="mr-0">
                    Actualizar perfil
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      locations: ["Galicia"],
      status: ["Sin PCR", "PCR Postivo", "PCR Negativo", "Inmunizado"] 
    };
  },

  computed: {
    loggedUser() {
      return this.$store.state.loggedUser;
    }
  }
};
</script>
