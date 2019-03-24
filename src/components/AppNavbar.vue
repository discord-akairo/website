<template>
  <header>
    <container>
      <router-link to="/">discord-akairo</router-link>

      <nav>
        <router-link :to="{ name: 'docs-class', params: { source, tag, ...docs } }">Documentation</router-link>
        <router-link :to="{ name: 'docs-file', params: { source, tag, ...tutorials } }">Tutorials</router-link>
        <a :href="`https://github.com/${repository}`">GitHub</a>
      </nav>
    </container>
  </header>
</template>

<script>
  import MainSource from '../data/MainSource.js';
  
  export default {
    name: 'navbar',
    props: ['repository'],
    data() {
      return {
        docs: {
          class: MainSource.defaultClass,
        },
        tutorials: {
          category: MainSource.defaultFile.category,
          file: MainSource.defaultFile.id,
        },
      };
    },
    computed: {
      tag() {
        return this.$route.params.tag || MainSource.defaultTag;
      },
      source() {
        return this.$route.params.source || MainSource.id;
      },
    },
  };
</script>

<style lang="scss">
  @import '../styles/theming';

  header {
    height: 3rem;
    line-height: 3rem;
    background: $color-navbar-bg;

    a {
      display: inline-block;
      padding: 0 16px;
      text-decoration: none;
      color: white;
    }

    & .container > a {
      background: $color-primary;
      font-size: 1.1rem;

      &:hover {
        color: white;
        background: darken($color-primary, 10%);
      }
    }

    nav {
      float: right;

      a:hover {
        color: white;
        background: darken($color-navbar-bg, 10%);
      }
    }
  }
</style>
