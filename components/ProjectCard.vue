<script setup lang="ts">
import type { Project } from '~/data/projects'

const props = defineProps<{
  project: Project
}>()

const { locale, t } = useLocale()
const isPreviewReady = ref(false)
</script>

<template>
  <article class="project-card" :aria-labelledby="`project-${project.slug}`">
    <NuxtLink
      class="project-card__media-link"
      :to="`/projects/${project.slug}`"
      :aria-label="`${t.projectCard.openAria} ${project.title}`"
    >
      <div class="project-card__video-shell video-shell">
        <span
          class="video-preloader"
          :class="{ 'video-preloader--hidden': isPreviewReady }"
          aria-live="polite"
        >
          <span class="video-preloader__dot" aria-hidden="true" />
          <span>{{ t.video.loading }}</span>
        </span>
        <video
          class="project-card__media"
          :src="project.previewVideo.preview"
          :poster="project.previewVideo.poster"
          muted
          loop
          autoplay
          playsinline
          preload="metadata"
          @loadeddata="isPreviewReady = true"
          @canplay="isPreviewReady = true"
          @error="isPreviewReady = true"
        />
      </div>
    </NuxtLink>

    <div class="project-card__body">
      <div class="project-card__meta">
        <span>{{ t.projectTypes[project.type] }}</span>
        <span>{{ project.engine }}</span>
      </div>

      <h2 :id="`project-${project.slug}`" class="project-card__title">
        <NuxtLink :to="`/projects/${project.slug}`">
          {{ project.title }}
        </NuxtLink>
      </h2>

      <p class="project-card__summary">
        {{ project.summary[locale] }}
      </p>

      <ul class="tag-list" :aria-label="t.projectCard.tagsAria">
        <li v-for="tag in project.tags" :key="tag" class="tag">
          {{ tag }}
        </li>
      </ul>

      <NuxtLink class="text-link" :to="`/projects/${project.slug}`">
        {{ t.projectCard.viewBreakdown }}
        <span aria-hidden="true">→</span>
      </NuxtLink>
    </div>
  </article>
</template>
