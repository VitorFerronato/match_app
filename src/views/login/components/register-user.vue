<template>
  <v-row justify="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="text-h5">Criar Novo Usuário</v-card-title>
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
          <v-text-field
            v-model="fullName"
            :rules="nameRules"
            label="Nome Completo"
            required
          ></v-text-field>
          <v-text-field v-model="nickname" label="Nickname"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="submit">Criar Usuário</v-btn>
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
      valid: false,
      email: "",
      password: "",
      fullName: "",
      nickname: "",
      emailRules: [
        (v) => !!v || "E-mail é obrigatório",
        (v) => /.+@.+\..+/.test(v) || "E-mail deve ser válido",
      ],
      passwordRules: [
        (v) => !!v || "Senha é obrigatória",
        (v) => v.length >= 8 || "Senha deve ter no mínimo 8 caracteres",
      ],
      nameRules: [(v) => !!v || "Nome completo é obrigatório"],
    };
  },
  methods: {
    async submit() {
      let request = {
        password: this.password,
        email: this.email,
        full_name: this.fullName,
        nickname: this.nickname,
      };

      try {
        let response = await Service.register(request);
        if (response.data) {
          this.$router.push("/login/sign-in");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
</style>