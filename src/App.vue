<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app mobile-breakpoint="768">
      <v-img
        class="pa-4 pt-7"
        height="170"
        src="mountains.jpg"
        gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
      >
        <v-avatar size="70">
          <img
            src="https://s.gravatar.com/avatar/515e8fec14c196415edfa3c9997971e2?s=160"
            alt="Dhaval Akabari"
          />
        </v-avatar>
        <div class="white--text text-subtitle-1 font-weight-bold">
          Dhaval Akabari
        </div>
        <div class="white--text text-subtitle-1">dhaval.akabri</div>
      </v-img>

      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.path"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      dark
      src="mountains.jpg"
      prominent
      height="170"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-container class="header-container pa-0 pt-2">
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <Search />
        </v-row>
        <v-row>
          <v-app-bar-title class="text-h4 ml-4 mt-5"
            >Vuetify Todo</v-app-bar-title
          >
        </v-row>
        <v-row>
          <LiveDateTime />
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
      <Snackbar />
    </v-main>
  </v-app>
</template>

<script>
import Search from "@/components/Tools/Search.vue";
import Snackbar from "@/components/Shared/Snackbar.vue";
import LiveDateTime from "@/components/Tools/LiveDateTime.vue";
export default {
  components: {
    Snackbar,
    Search,
    LiveDateTime,
  },
  data() {
    return {
      drawer: null,
      items: [
        { title: "Todo", icon: "mdi-format-list-checks", path: "/" },
        { title: "About", icon: "mdi-help-box", path: "/about" },
      ],
    };
  },
};
</script>

<style lang="sass">
.header-container
  max-width: none !important
</style>
