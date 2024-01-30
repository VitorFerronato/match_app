<template>
  <div class="main-login" :class="{ disable: isLoading }">
    <h4>Login</h4>

    <div class="input-area">
      <v-text-field
        v-model="email"
        :disabled="isLoading"
        label="Email"
        base-color="white"
        bg-color="#1B1B1B"
        hide-details
        class="mb-4"
      ></v-text-field>

      <v-text-field
        v-model="password"
        :disabled="isLoading"
        label="Senha"
        base-color="white"
        bg-color="#1B1B1B"
        hide-details
        class="mb-2"
      ></v-text-field>

      <div class="input-info">
        <Checkbox />

        <router-link to="/login/password-recovery">
          <p>Esqueceu a senha?</p>
        </router-link>
      </div>
    </div>

    <div class="text-center">
      <v-btn
        :loading="isLoading"
        :disabled="isLoading"
        @click="submit"
        color="#4149A6"
        class="fullwidth"
        >Login</v-btn
      >
    </div>

    <p class="register mt-6 mb-n4">
      Ainda não possui uma conta?
      <router-link to="/login/register"
        ><span class="register">Registre-se</span></router-link
      >
    </p>
  </div>
</template>

<script>
import service from "@/service/user-service.js";
import Checkbox from "@/components/common/checkbox-comp.vue";
const Service = new service();

export default {
  components: { Checkbox },
  data() {
    return {
      isLoading: false,
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
        if (response.status == 200) {
          let userData = {
            userEmail: this.email,
            nickName: "TO-DO",
            isLogged: true,
          };

          this.$store.dispatch("user/setUserData", userData);
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

<style lang="scss" scoped>
.main-login {
  background-color: #282828;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
  border-radius: 10px;

  h4 {
    text-align: center;
    font-weight: bold;
    font-size: 32px;
    font-family: var(--font-family-secondary);
    color: #fff;
    margin-bottom: 16px;
  }

  .input-area {
    .input-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
      margin-bottom: 16px;
      gap: 6rem;

      p {
        color: var(--color-primary);
        margin-top: 2px;
        font-size: 12px;
      }
    }
  }

  .fullwidth {
    width: 100%;
  }

  .register {
    text-align: center;
    font-size: 12px;
    color: var(--color-text);
    span {
      color: var(--color-primary);
    }
  }
}

.disable {
  pointer-events: none;
}
</style>