const blogPostPart2 = `
## Enhancing the Flashcard App: Pronunciation, Course Navigation, and Deployment

### Adding Pronunciation (Continued)

After implementing the basic Web Speech API functionality, I integrated it throughout the app:

1. **Automatic Pronunciation on Card Flip**:
   \`\`\`javascript
   watch(isFlipped, (newVal) => {
     if (!newVal) {
       speak(currentCard.value.word, 'fr-FR');
     } else {
       speak(currentCard.value.translation, 'en-US');
     }
   });
   \`\`\`

2. **Pronunciation Buttons** in both French and English views:
   \`\`\`vue
   <button @click.stop="speakWord(currentCard.word)" class="speak-button">
     🔊 French
   </button>
   <button @click.stop="speakWord(currentCard.translation, 'en-US')" class="speak-button">
     🔊 English
   </button>
   \`\`\`

### Building the Course Directory Page

The course directory serves as the home page, showing all available courses and lessons:

\`\`\`vue
<template>
  <div class="container">
    <!-- Mobile toggle button -->
    <button class="menu-toggle" @click="toggleSidebar" v-show="isMobile && !sidebarOpen">
      ☰ Courses
    </button>

    <!-- Sidebar with courses -->
    <div class="sidebar course-list" :class="{ open: sidebarOpen }">
      <h2 class="title">Courses</h2>
      <ul>
        <li v-for="key in courseKeys" 
            :key="key" 
            :class="{ active: key === selectedCourse }" 
            @click="selectCourse(key)">
          {{ courseMap[key] }}
        </li>
      </ul>
    </div>

    <!-- Lesson list -->
    <div class="content lesson-list" :class="{ open: !sidebarOpen }">
      <button class="back-button" v-if="isMobile" @click="toggleSidebar">
        ← Back to Courses
      </button>
      
      <h2 class="title">{{ selectedCourse ? courseMap[selectedCourse] : 'Select A Course' }}</h2>
      
      <ul v-if="lessons.length">
        <li v-for="lesson in lessons" :key="lesson" @click="selectLesson(lesson)">
          {{ lesson }}
        </li>
      </ul>
    </div>
  </div>
</template>
\`\`\`

Key features:
- Responsive design with mobile-friendly sidebar toggle
- Clean separation between courses and lessons
- Active state highlighting for better UX

### Router Configuration

The Vue Router handles navigation between the course directory and individual lessons:

\`\`\`javascript
import { createRouter, createWebHistory } from 'vue-router'
import CourseLesson from '../components/CourseLesson.vue'
import FlashCardViewer from '../components/FlashcardViewer.vue'

const routes = [
  { path: '/', component: CourseLesson },
  { path: '/lesson/:slug', component: FlashCardViewer }
]

export default createRouter({
  history: createWebHistory('/french_flashcards/'),
  routes
})
\`\`\`

The router uses:
- Dynamic route parameter (\`:slug\`) for lesson URLs
- WebHistory mode for clean URLs
- Base path set for GitHub Pages deployment

### Deployment to GitHub Pages

After testing locally, I deployed the app to GitHub Pages:

1. Added GitHub Pages-specific config:
   - Set base path in Vite config
   - Created a deploy script

2. The app is now live at:  
   [https://yushanwang9801.github.io/french_flashcards/](https://yushanwang9801.github.io/french_flashcards/)

### Future Content Plans

While the app infrastructure is complete, I'll be gradually adding:
- More French vocabulary from various sources
- Themed courses (basics, travel, business, etc.)
- Example sentences with pronunciation
- Progressive difficulty levels

The beauty of this setup is that adding new content only requires updating the JSON data files - no code changes needed!

## Conclusion

From visa waiting period to fully functional language learning tool, this project has been both educational and practical. The technical stack proved perfect for rapid development:

- Vue 3's Composition API made state management straightforward
- Vite provided lightning-fast development experience
- Web Speech API delivered pronunciation without external dependencies
- GitHub Pages offered simple, free hosting

Now I can practice French anywhere, anytime - while still checking my email for that visa update, of course!
`;

console.log(blogPostPart2)