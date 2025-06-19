## 🚀 Getting Started

### Prerequisites
- **Node.js** (v14+ recommended)  
  Download from https://nodejs.org/  
- **Git**

### Installation

1. Clone the repository  
   ```bash
   git clone https://github.com/777Prabhjot/assign.git
   ```
2. Change into the project directory  
   ```bash
   cd assign
   ```
3. Install dependencies  
   ```bash
   npm install
   ```
4. Start the development server  
   ```bash
   npm run dev
   ```
5. Open your browser and go to `http://localhost:3000`

## 🛠️ Tech Stack

- **Next.js**  
- **Tailwind CSS**  
- **Swiper** (for sliders and carousels)


## ✨ Features & Architecture

1. **Flexible Layout**  
   - Built with CSS Flexbox for layout structure.

2. **Custom Toggle Slider**  
   - Handcrafted toggle component switch.

3. **Dynamic Overlapping Avatars**  
   - Reusable component that accepts an array of avatar URLs and renders them with overlapping styles.

4. **Scroll-Effect Section**  
   - Highlights cards elements based on scroll position using CSS positioning and JS scroll calculations.

5. **Avatar Carousel**  
   - Integrated the Swiper package for smooth swiping.

6. **Blurred-Card Carousel**  
   - Custom functionality includes:
   - Auto-swap (autoplay)  
   - Manual navigation (next/previous)  
   - Blurred background effect on inactive cards



## 📂 Project Structure

```
assign/
├─ .next/                      
├─ node_modules/               
├─ public/                    
│  └─ …                         
├─ src/
│  ├─ app/                    
│  │  ├─ favicon.ico
│  │  ├─ globals.css
│  │  ├─ layout.js
│  │  └─ page.js
│  └─ components/             
│     ├─ AvatarCarousel.jsx
│     ├─ BlurredCardCarousel.jsx
│     ├─ CustomToggle.jsx
│     ├─ OverlappingAvatars.jsx
│     ├─ RotatedUIButtons.jsx
│     ├─ TemplateAICard.jsx
│     └─ TimeLine.jsx
├─ .gitignore
├─ jsconfig.json
├─ next.config.mjs
├─ package.json
├─ package-lock.json
├─ postcss.config.mjs
└─ tailwind.config.js
```

---

## 🤝 Contributing

1. Fork it (<https://github.com/777Prabhjot/assign/fork>)  
2. Create your feature branch (`git checkout -b feature/my-feature`)  
3. Commit your changes (`git commit -m 'Add some feature'`)  
4. Push to the branch (`git push origin feature/my-feature`)  
5. Open a Pull Request

---
