## 🌐 Website + Project Updates – November 2023

#### Written at Nov 01, 2023

Hey everyone! Here are some updates regarding my website and related projects. These changes focus on performance, accessibility, and better long-term maintainability across devices and platforms.

---

### 🔧 1. `rb6_dribble` Project: Layout Redesign

![](./images/rb6_dribble.gif)  


📁 Repo: [rb6_dribble on GitHub (main branch)](https://github.com/YushanWang9801/rb6_dribble)

- The core **Three.js rendering logic remains unchanged**.
- However, the **entire page layout has been redesigned** for better **responsiveness across mobile, tablet, and desktop**.
- The **old version**, originally designed with fixed-width layouts, has been moved to the [`legacy-medium`](https://github.com/YushanWang9801/rb6_dribble/tree/legacy-medium) branch for reference.
- All new development and bugfixes will continue on the `main` branch going forward.

✅ The new design:
- Scales properly across screen sizes  
- Supports flexible canvas resizing  
- Improves touch and viewport experience

---

### 🖼️ 2. Gallery Optimization & Compression Pipeline

💾 The image gallery originally used Firebase storage and consisted of **uncompressed high-res assets**.

To reduce storage cost and improve page load speed:
- I wrote a **Python project** to automate:
  - Downloading all gallery images from Firebase
  - Compressing them locally with preview using `tkinter`
  - Re-uploading them in optimized size
- The entire image optimization was handled via this repo:  
  👉 [portfolio_image_compressor](https://github.com/YushanWang9801/portfolio_image_compressor)

⚙️ Compression Features:
- Interactive preview with Tkinter  
- Real-time file size estimation  
- JPEG optimization via the Python Imaging Library

---

### ✍️ 3. Blog Page Migration & Medium Pause

![](./images/port_update_2023.png)  

📝 The old blog layout (inspired by VS Code UI) lacked responsiveness, making it hard to browse on phones and smaller screens. It has now been deprecated.

- The old blog page has been archived here:  
  🔗 [Old Blog Page](https://yushanwang9801.github.io/#/old_blog)

- The new and **responsive blog page** is live at:  
  🔗 [New Blog Page](https://yushanwang9801.github.io/#/blog)

🚫 In addition:
- The [Medium blog](https://medium.com/@yushanwang9801) will no longer be updated, due to **VPN restrictions in China** and a preference for independent content hosting.

Thank you for your understanding!

---

### 📬 Feedback Welcome!

If you encounter any layout issues, broken links, or want to suggest features — feel free to open issues on GitHub or reach out directly.

Until next update,  
— *Yushan Wang*
