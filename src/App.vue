<template>
  <v-app>

    <v-toolbar>
      <v-toolbar-side-icon
      class="hidden-sm-and-up"
      @click="sideNav = !sideNav"
      ></v-toolbar-side-icon>
      <v-toolbar-title>DevMeetup</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items
      class="hidden-xs-only"
      >
        <v-btn flat>
          <v-icon left>supervisor_account</v-icon>
          View Meetups
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer v-model="sideNav">
      <v-list>
        <v-list-tile>
          <v-list-tile-action><v-icon left>supervisor_account</v-icon></v-list-tile-action>
          <v-list-tile-content>View Meetups</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  <main>

  </main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      sideNav: false
    }
  }
}
</script>

<style scoped>

</style>
