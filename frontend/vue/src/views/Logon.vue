<template>
  <main class="Logon">
    <div class="logon__container">
      <section class="form">
        <img src="../assets/images/logo.svg" alt="Be The Hero" />

        <form onsubmit="{handleLogin}">
          <h1>Faça seu logon</h1>
          <input placeholder="Sua ID" />
          <button class="button" type="submit">Entrar</button>

          <!-- <Link class="back-link" to="/register">
            <FiLogIn size="{16}" color="#e02041" />Não tenho cadastro
          </Link>-->
        </form>
      </section>
      <img src="../assets/images/heroes.png" alt="Heroes" />
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class Logon extends Vue {}
</script>

<style lang="scss" scoped>
.Logon {
  .logon__container {
    width: 100%;
    max-width: 1120px;
    height: 100vh;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logon__container section.form {
    width: 100%;
    max-width: 350px;
    margin-right: 30px;
  }

  .logon__container section.form form {
    margin-top: 100px;
  }

  .logon__container section.form form h1 {
    font-size: 32px;
    margin-bottom: 32px;
  }
}
</style>




