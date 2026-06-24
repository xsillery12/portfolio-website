<script setup>
import { profile } from "../data/content.js";
const year = new Date().getFullYear();
</script>

<template>
  <footer class="contact-surface border-t border-[rgba(236,234,246,0.1)] text-ondark-mut">
    <div class="mx-auto flex w-full max-w-270 flex-wrap items-center justify-between gap-2.5 px-6 py-6.5 font-mono text-[13px]">
      <span>© {{ year }} {{ profile.fullName }}</span>
      <span>{{ profile.location }}</span>
    </div>
  </footer>
</template>
