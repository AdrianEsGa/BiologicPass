<template>
  <v-container id="user-profile" fluid tag="section">
    <v-row justify="center">
      <v-col cols="12">
        <base-material-card
          class="v-card-profile"
          avatar="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
        >
          <v-card-text class="text-center">
            <h6 class="display-1 mb-1 grey--text">
              Usuario de prueba
            </h6>

            <h4 class="display-2 font-weight-light mb-3 black--text">
              Alec Thompson
            </h4>
          </v-card-text>
        </base-material-card>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" md="8">
        <base-material-card>
          <template v-slot:heading>
            <div class="display-2 font-weight-light">
              Edita tu perfil
            </div>

            <div class="subtitle-1 font-weight-light">
              Completa tu perfil
            </div>
          </template>

          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col cols="12">
                  <v-text-field label="Email Address" class="purple-input" />
                </v-col>

                <v-col cols="12" md="4">
                  <v-select label="Comunidad Autónoma" :items="comunites" />
                </v-col>

                <v-col cols="12" md="4">
                  <v-select label="Provincia" :items="provinces" />
                </v-col>

                <v-col cols="12" md="4">
                  <v-select label="Localidad" />
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
      comunites: ["Galicia"],
      provinces: ["Pontevedra", "A Coruña", "Lugo", "Ourense"]
    };
  }
};
</script>
