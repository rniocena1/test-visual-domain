<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        class="navbar-toggler"
        type="button"
        @click="toggleMenu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse"
        :class="{ show : menuCollapsed}"
      >
        <ul class="navbar-nav mr-auto">
          <router-link
            :to="{ name: 'dashboard.index' }"
            active-class="active"
            class="nav-item"
            tag="li"
          >
            <a class="nav-link">
              Dashboard
            </a>
          </router-link>

          <router-link
              :to="{ name: 'devices.index' }"
              active-class="active"
              class="nav-item"
              tag="li"
          >
            <a class="nav-link">
              Devices
            </a>
          </router-link>

          <router-link
              :to="{ name: 'assets.index' }"
              active-class="active"
              class="nav-item"
              tag="li"
          >
            <a class="nav-link">
              Assets
            </a>
          </router-link>

          <router-link
              :to="{ name: 'videos.index' }"
              active-class="active"
              class="nav-item"
              tag="li"
          >
            <a class="nav-link">
              Videos
            </a>
          </router-link>

          <router-link
              :to="{ name: 'users.index' }"
              active-class="active"
              class="nav-item"
              tag="li"
          >
            <a class="nav-link">
              Users
            </a>
          </router-link>
        </ul>

        <span class="navbar-text">
          <a
            href="#"
            @click.prevent="logout"
          >
            Logout
          </a>
        </span>
      </div>
    </nav>

    <slot></slot>

  </div>
</template>

<script>
  /* ============
   * Default Layout
   * ============
   *
   * Used for the home and account pages.
   *
   * Layouts are used to store a lot of shared code.
   * This way the app stays clean.
   */

  export default {
    /**
     * The name of the layout.
     */
    name: 'default-layout',

    /**
     * The data that can be used by the page.
     *
     * @returns {Object} The view-model data.
     */
    data() {
      return {
        menuCollapsed: false,
      };
    },

    /**
     * The methods that the layout can use.
     */
    methods: {
      /**
       * Will log the user out.
       */
      logout() {
        this.$store.dispatch('auth/logout');
      },

      /**
       * Will toggle the menu.
       */
      toggleMenu() {
        this.menuCollapsed = !this.menuCollapsed;
      },
    },
  };
</script>
