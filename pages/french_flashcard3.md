## Vue + Vite: French FlashCard (Published)

#### Written at Jun 21, 2023

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*lmZsfnLkk_tniCwx9rjLlQ.png)

I built an interactive flashcard application to help master vocabulary from two key resources: Léa Français’s ​​800 Most Common French Words​​ and the ​​Taxi! A1​​ textbook.

The Learning Resources
======================

​​1. Léa Français’s 800 Words​​
This YouTube-based list covers approximately 80% of daily French conversations. The words are organized by frequency, making it perfect for beginners to build practical vocabulary quickly.

​​2. Taxi! A1​​
The official textbook used in many French language schools, following the CEFR framework. I’ve adapted its structured lessons into flashcard format, including:

*   Greetings and introductions
*   Food and dining
*   Transportation
*   Shopping

How My Flashcard App Works
==========================

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*pJQUn9HBkBvGBnFYZ1Dlaw.png)

​​Key Features:​​
✔️ ​​Bilingual cards​​ with French/English sides
✔️ ​​Self-generated example sentences​​ for context
✔️ ​​One-click pronunciation​​ using browser’s speech synthesis
✔️ ​​Mobile-friendly design​​ with swipe gestures
✔️ ​​Organized curriculum​​ mirroring the textbooks

Sample Learning Flow
====================

1.  ​​See the French word:​​
    _“le restaurant”_
2.  ​​Flip to reveal:​​
    _“the restaurant”_
    _Example sentence:_
    _“Nous allons au restaurant ce soir.”_
    _(We’re going to the restaurant tonight.)_
3.  ​​Click the speaker icon​​ to hear native pronunciation

Technical Implementation
========================

Built with Vue 3 and Vite, the app uses:

*   Web Speech API for pronunciation (no external libraries)
*   Responsive design for mobile/desktop use
*   JSON data files for easy vocabulary updates
*   GitHub Pages hosting

Why This Works
==============

1.  ​​Active Recall​​: Forcing memory retrieval strengthens retention
2.  ​​Spaced Repetition​​: The app encourages regular review
3.  ​​Contextual Learning​​: My custom example sentences provide real-world usage

The app is live at [https://yushanwang9801.github.io/french_flashcards/lesson/lea-Day%2021](https://yushanwang9801.github.io/french_flashcards/lesson/lea-Day%2021)

and the code is available at [https://github.com/YushanWang9801/french_flashcards](https://github.com/YushanWang9801/french_flashcards).