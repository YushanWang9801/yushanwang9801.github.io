## Vue + Vite: French FlashCard (Part I)

#### Written at Jun 11, 2023

![Vue + Vite: French FlashCard (Part I) Cover Photo](./images/french_flashcard.png)  


> 注：确保仓库根目录下存在 `images` 文件夹，且 `french_flashcard.png` 图片已放置其中；若路径不同，需对应修改（如 `/assets/images/xxx.png`）。

Sitting in a Vancouver cafe, waiting for my work visa application to process, I found myself with unexpected free time. Rather than refreshing my email every five minutes, I decided to channel this nervous energy into something productive - learning French. 

As a developer, my natural solution was to build a tool to help with this endeavor. I created a French flashcard application using Vue 3 with Vite, drawing vocabulary from [this excellent YouTube French course](https://www.youtube.com/watch?v=hoxNH9idBYA&t=354s).

## Project Setup

I started with a basic Vue 3 project using Vite:

```bash
npm create vite@latest french-flashcards -- --template vue
cd french-flashcards
npm install
```

Key dependencies:
- Vue Router for navigation between lessons
- Plain CSS for styling (no UI framework to keep it lightweight)
- JSON files to store the vocabulary data

## Building the Flashcard Viewer

The core component is the FlashcardViewer, which handles:
- Displaying French words and their English translations
- Flip animation when clicking a card
- Navigation between cards
- Touch/swipe support for mobile devices

Here's a simplified version of the component:

```vue
<template>
  <section class="flashcard-viewer"
           @touchstart="handleTouchStart"
           @touchend="handleTouchEnd">
    <div class="flashcard" @click="toggleFlip">
      <div class="card-content" :class="{ flipped: isFlipped }">
        <div class="face front" v-if="!isFlipped">
          {{ currentCard.word }}
        </div>
        <div class="face back" v-else>
          {{ currentCard.translation }}
        </div>
      </div>
    </div>

    <div class="navigation-buttons">
      <button @click.stop="prevCard">Prev</button>
      <button @click.stop="nextCard">Next</button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const isFlipped = ref(false);
const currentIndex = ref(0);

const toggleFlip = () => {
  isFlipped.value = !isFlipped.value;
};

function prevCard() {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
  isFlipped.value = false;
}

function nextCard() {
  if (currentIndex.value < lessonCards.value.length - 1) {
    currentIndex.value++;
  }
  isFlipped.value = false;
}
</script>
```

## Key Features

1. **Card Flipping**: The `isFlipped` state toggles between front and back views
2. **Navigation**: Simple buttons to move between cards in a lesson
3. **Touch Support**: Swipe handlers for mobile devices
4. **Lesson Structure**: Organized vocabulary into logical lessons from the YouTube course

## Next Steps

While waiting for my visa, I plan to add:
- Spaced repetition algorithm
- Pronunciation audio
- Quiz mode
- Progress tracking
- Course Category

You can check out the complete source code on [GitHub](https://github.com/yushanwang9801/french_flashcards).

This project turned visa limbo into productive learning time. Now when someone asks "Parlez-vous français?" I can at least say "Un petit peu!"