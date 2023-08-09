<template>
  <div class="container">
    <el-divider direction="vertical" style="height: 120px" />
    <div>
      <div class="img-container">
        <img
          :src="`/images/Language-and-File-Support/${language}.svg`"
          width="70"
          style="min-height: 70px"
          alt="language-logo"
        />
      </div>
      <div class="description">
        <span type="h6" style="font-size: 16px; color: var(--vp-c-text-2)"
          >Discover {{ companyConfig.COMPANY_NAME }}'s capabilities with
          {{ convertLang(language) }} programming language</span
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import { convertLang } from "../../../.vitepress/helperFunctions";
import { companyConfig } from "../../../../config/companyConfig.js";
const props = defineProps({
  language: String,
});
</script>
<style scoped>
.container {
  padding-top: 12px;
  display: flex;
  flex-direction: row;
}
.img-container {
  padding: 10px 20px;
}
.description {
  padding-left: 10px;
}
</style>
