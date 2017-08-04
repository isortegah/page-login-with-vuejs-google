<template>
  <div class="login">
    <h1>{{ msg }}</h1>
    <h1>{{auth}}</h1>
    <div v-if=response class="text-red"><p>{{response}}</p></div>
    <!-- login Button -->
    <a id="signin-button" v-on:click="signIn">
      <button style="font-size:24px"><i class="fa fa-google-plus-official"></i> Sign in with Google</button>
    </a>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'login',
  data () {
    return {
      section: 'Login',
      loading: '',
      response: '',
      msg: 'Welcome to My Page',
      auth: 'ISORTEGAH'
    }
  },
  methods: {
    signIn: function () {
      Vue.googleAuth().directAccess()
      Vue.googleAuth().signIn(this.onSignInSuccess, this.onSignInError)
    },
    onSignInSuccess: function (authorizationCode) {
      console.log(authorizationCode)
      this.response = 'Aprobado'
      this.toggleLoading()
      // this.resetResponse()
    },
    onSignInError: function (error) {
      this.response = 'Failed to sign-in' + error
      console.log('GOOGLE SERVER - SIGN-IN ERROR', error)
    },
    toggleLoading: function () {
      this.loading = (this.loading === '') ? 'loading' : ''
    },
    resetResponse: function () {
      this.response = ''
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
