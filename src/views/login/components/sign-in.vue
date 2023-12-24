<template>
  <v-row justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-card :disabled="isLoading">
        <v-card-title class="text-h5">Login</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Senha"
            type="password"
            required
          ></v-text-field>
          <router-link to="/login/register"><span>Registrar-se</span></router-link>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn :loading="isLoading" color="primary" @click="submit"
            >Entrar</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import service from "@/service/user-service.js";
const Service = new service();
export default {
  data() {
    return {
      isLoading: false,
      valid: false,
      email: "",
      password: "",
      emailRules: [
        (v) => !!v || "E-mail é obrigatório",
        (v) => /.+@.+\..+/.test(v) || "E-mail deve ser válido",
      ],
      passwordRules: [
        (v) => !!v || "Senha é obrigatória",
        (v) => v.length >= 8 || "Senha deve ter no mínimo 8 caracteres",
      ],
    };
  },
  methods: {
    async submit() {
      this.isLoading = true;
      let request = {
        email: this.email,
        password: this.password,
      };

      try {
        let response = await Service.login(request);

        if (response.data.message == "Usuario Autenticado") {
          this.$router.push("/main");
        }
      } catch (error) {
        console.log(error);
      }

      this.isLoading = false;
    },
  },
};
</script>

<style>
</style>