<script setup lang="ts">
import type { BreakdownBlock } from '~/data/projects'

const props = defineProps<{
  block: BreakdownBlock
  index: number
}>()

const { locale, t } = useLocale()

const showFull = ref(false)
const isPreviewReady = ref(false)
const isFullReady = ref(false)

watch(showFull, (isOpen) => {
  if (isOpen) {
    isFullReady.value = false
  }
})
</script>

<template>
  <article class="breakdown-block">
    <div class="breakdown-block__media-column">
      <figure class="breakdown-block__media-wrap">
        <div class="breakdown-block__video-container video-shell">
          <span
            class="video-preloader"
            :class="{ 'video-preloader--hidden': isPreviewReady }"
            aria-live="polite"
          >
            <span class="video-preloader__dot" aria-hidden="true" />
            <span>{{ t.video.loading }}</span>
          </span>

          <video
            class="breakdown-block__media"
            :class="{ 'breakdown-block__media--ready': isPreviewReady }"
            :src="block.video.preview"
            :poster="block.video.poster"
            muted
            loop
            autoplay
            playsinline
            preload="auto"
            @canplaythrough="isPreviewReady = true"
            @error="isPreviewReady = true"
          />

          <button
            class="breakdown-block__play-full"
            type="button"
            :aria-label="t.video.watchFull"
            @click="showFull = true"
          >
            ▶ {{ t.video.watchFull }}
          </button>
        </div>
      </figure>

      <section class="breakdown-block__result" :aria-label="t.breakdownBlock.technicalDetails">
        <p class="breakdown-block__result-label">{{ t.breakdownBlock.technicalDetails }}</p>
        <p>{{ block.technicalDetails[locale] }}</p>
      </section>
    </div>

    <div class="breakdown-block__content">
      <p class="section-kicker">{{ t.breakdownBlock.task }} {{ index + 1 }}</p>
      <h2>{{ block.title[locale] }}</h2>

      <dl class="task-list">
        <div>
          <dt>{{ t.breakdownBlock.done }}</dt>
          <dd>{{ block.done[locale] }}</dd>
        </div>
        <div>
          <dt>{{ t.breakdownBlock.responsibility }}</dt>
          <dd>{{ block.responsibility[locale] }}</dd>
        </div>
      </dl>
    </div>

    <Teleport to="body">
      <div v-if="showFull" class="video-lightbox" @click.self="showFull = false">
        <div class="video-lightbox__inner">
          <button
            class="video-lightbox__close"
            type="button"
            :aria-label="t.video.close"
            @click="showFull = false"
          >
            ✕
          </button>
          <div class="video-lightbox__video-shell video-shell">
            <span
              class="video-preloader video-preloader--lightbox"
              :class="{ 'video-preloader--hidden': isFullReady }"
              aria-live="polite"
            >
              <span class="video-preloader__dot" aria-hidden="true" />
              <span>{{ t.video.loading }}</span>
            </span>
            <video
              class="video-lightbox__video"
              :src="block.video.full"
              :poster="block.video.poster"
              controls
              autoplay
              playsinline
              preload="auto"
              @canplaythrough="isFullReady = true"
              @error="isFullReady = true"
            />
          </div>
        </div>
      </div>
    </Teleport>
  </article>
</template>
