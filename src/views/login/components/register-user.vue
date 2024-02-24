<template>
  <div class="register-main">
    <h4 class="text-center font-22 text-white mb-2">Register</h4>
    <span class="text-white-secondary">Pessoal</span>
    <div class="dsgn-flex gap-1 mt-1">
      <v-text-field
        v-model="name"
        label="Nome"
        base-color="white"
        bg-color="#1B1B1B"
        hide-details
        class="mb-4"
      ></v-text-field>
      <v-text-field
        v-model="surname"
        label="Sobrenome"
        base-color="white"
        bg-color="#1B1B1B"
        hide-details
        class="mb-4"
      ></v-text-field>
    </div>
    <v-text-field
      v-model="bornDate"
      label="Data de nascimento"
      placeholder="dd/mm/aaaa"
      base-color="white"
      bg-color="#1B1B1B"
      hide-details
      class="mb-4 pr-2"
      style="width: 50%"
    ></v-text-field>
    <span class="text-white-secondary">Pagamento</span>
    <div class="dsgn-flex gap-1 mt-1">
      <v-text-field
        v-model="pixKey"
        label="Chave pix"
        base-color="white"
        bg-color="#1B1B1B"
        hide-details
        class="mb-4"
      ></v-text-field>
      <v-text-field
        v-model="cpf"
        label="CPF"
        base-color="white"
        bg-color="#1B1B1B"
        hide-details
        class="mb-4"
      ></v-text-field>
    </div>
    <span class="text-white-secondary">Conta</span>
    <div class="dsgn-flex gap-1 mt-1">
      <v-text-field
        v-model="nickname"
        label="Nickname"
        base-color="white"
        bg-color="#1B1B1B"
        hide-details
        class="mb-4"
      ></v-text-field>
      <v-text-field
        v-model="email"
        label="Email"
        base-color="white"
        bg-color="#1B1B1B"
        hide-details
        class="mb-4"
      ></v-text-field>
    </div>
    <div class="dsgn-flex gap-1 mt-1">
      <v-text-field
        v-model="password"
        type="password"
        label="Senha"
        base-color="white"
        bg-color="#1B1B1B"
        hide-details
        class="mb-4"
      ></v-text-field>
      <v-text-field
        v-model="confirmPassword"
        type="password"
        label="Confirmar senha"
        base-color="white"
        bg-color="#1B1B1B"
        hide-details
        class="mb-4"
      ></v-text-field>
    </div>
    <v-row no-gutters justify="center">
      <v-col cols="12" md="4">
        <Dsg-btn
          :title="'Registrar'"
          :color="'#4149A6'"
          @click="register"
          class="compete-button"
        />
        <p class="font-12 text-center text-white-secondary ma-0 pa-0">
          Possui uma conta? <router-link to="/login">Login</router-link>
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// import service from "@/service/user-service.js";
// const Service = new service();

import DsgBtn from "@/components/common/dsg-btn.vue";
export default {
  components: { DsgBtn },
  data() {
    return {
      name: null,
      surname: null,
      bornDate: null,
      pixKey: null,
      cpf: null,
      nickname: null,
      email: null,
      password: null,
      confirmPassword: null,
    };
  },  
  computed: {},
  methods: {
    async register() {
      let request = {
        password: this.password,
        email: this.email,
        full_name: this.name + " " + this.surname,
        nickname: this.nickname,
      };
      console.log(request);
      // let response = await Service.register;
    },
  },
};
</script>

<style lang="scss" scoped>
.register-main {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  background-color: #242424;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-family: var(--font-family-secondary);

  .compete-button {
    width: 12.5rem;
    text-transform: capitalize;
  }
}
</style>