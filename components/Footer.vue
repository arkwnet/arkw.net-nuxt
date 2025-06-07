<template>
  <div class="footer">
    <div class="wrapper">
      <p>
        <nuxt-link :to="localePath('/terms')">
          {{ $t("heading.terms") }}
        </nuxt-link>
        /
        <nuxt-link :to="localePath('/privacy')">
          {{ $t("heading.privacy") }}
        </nuxt-link>
        /
        <nuxt-link :to="localePath('/child')">
          {{ $t("heading.child") }}
        </nuxt-link>
      </p>
      <p>(c) 2015-2025 Sora Arakawa all rights reserved.</p>
      <div class="small">
        Some icons by
        <a href="http://p.yusukekamiyamane.com/" target="blank">
          Yusuke Kamiyamane
        </a>
        . Licensed under a
        <a
          href="http://creativecommons.org/licenses/by/3.0/deed.ja"
          target="blank"
        >
          Creative Commons Attribution 3.0 License
        </a>
        .
        <br />
        Profile icon by
        <a href="https://twitter.com/MelvilleTw" target="blank">Melville</a>
      </div>
    </div>
  </div>
</template>
