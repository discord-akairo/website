<template>
  <div id="home">
    <slide id="jumbotron">
      <logo :light="true" :konami="konami" id="logo" />
      <code>npm install discord-akairo</code><br />
    </slide>

    <section id="info">
      <div class="info-item">
        <h2>About</h2>
        <p>
          <strong>discord-akairo</strong> is a powerful and flexible bot framework for <a href="https://discord.js.org/">discord.js</a>.
          It allows bot creators absolute freedom in their creativity while taking care of the boilerplate and dirty work.
        </p>
      </div>

      <div class="info-item">
        <h2>Features</h2>
        <p>
          <ul>
            <li>Modular and reloadable commands, inhibitors, and listeners.</li>
            <li>Flexible command handling and creation.</li>
            <li>Powerful and thorough command arguments parsing.</li>
            <li>Message monitoring and blocking with inhibitors.</li>
            <li>Informative events during command handling.</li>
            <li>And many other useful utilities.</li>
          </ul>
        </p>
      </div>

      <div class="full-info-item">
        <router-link to="/docs" class="big-ass-btn">Get started</router-link>
        <a href="https://discord.gg/arTauDY" class="big-ass-btn discord">Discord</a>
      </div>
    </section>
  </div>
</template>

<script>
  import Logo from '../Logo.vue';
  import MainSource from '../../data/MainSource';

  export default {
    name: 'home',
    props: ['konami'],
    components: {
      Logo,
    },

    mounted() {
      this.$emit('setRepository', MainSource.repo);
    },
  };
</script>

<style lang="scss">
  @import '../../styles/theming';
  @import '../../styles/mq';

  #home {
    text-align: center;
    background: $color-content-bg;
    color: $color-content-text;

  	h2 {
  		font-size: 2rem;
  		margin: 0;
      font-weight: 600;
      letter-spacing: -1px;
      text-align: left;
  	}

  	p {
  		font-size: 1rem;
  		line-height: 2rem;
      text-align: left;

  		@include mq($until: tablet) {
  			margin: 0 1rem;
  		}

  		& > a {
  			font-weight: bold;
  		}

      &.center {
        text-align: center;
      }
  	}

    #jumbotron {
      flex: 0 0 100%;
      padding: 80px 16px;
      background-color: $color-primary;
      background-image: linear-gradient(top, $color-primary, darken($color-primary, 5%));

      code {
        display: inline-block;
        padding: 16px;
        border-radius: 5px;
        background: #f5f5f5;
        color: $color-content-text;
        font-family: $font-monospace;
      }
    }

    #logo {
      display: block;
      margin: 16px auto;
      width: 100%;
      max-width: 700px;
      overflow: visible;
      filter: drop-shadow(0 3px 4px rgb(0, 0, 0));
    }

    #info {
      display: flex;
      flex-flow: row wrap;
      margin: 64px auto 0 auto;
      max-width: 1120px;

      @include mq($until: tablet) {
        margin: 32px auto 0 auto;
      }
    }

    .info-item {
      flex: 1 1 45%;
      padding: 24px;

      ul {
        display: inline-block;
        margin: 0 auto;
        text-align: left;
      }

      pre {
        padding: 8px;
        border-radius: 4px;
        text-align: left;
        font-size: 0.875rem;
        background: #F0F0F0;
      }
    }

    .full-info-item {
      flex: 1 0 100%;
      margin: 48px 0;
    }

    .big-ass-btn {
      display: inline-block;
      padding: 12px 10px;
      border-radius: 4px;
      background: $color-primary;
      color: white;
      font-size: 1.1rem;

      &:hover {
        background: lighten($color-primary, 10%);
      }

      &:not(:first-of-type) {
        margin-left: 8px;
      }

      &.discord {
        background-color: #7289da;

        &:hover {
          background: lighten(#7289da, 10%);
        }
      }
    }
  }

  #app.dark #home {
    background: $color-content-bg-dark;
    color: $color-content-text-dark;

    pre {
      background: lighten($color-content-bg-dark, 4%);
      color: darken($color-content-text-dark, 20%);
    }
  }
</style>
