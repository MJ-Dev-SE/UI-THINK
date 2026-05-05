import { UITerm } from "../types";

export const terms: UITerm[] = [
  {
    id: "grid",
    name: "CSS Grid",
    category: "layout",
    tagline: "The most powerful layout system in CSS, offering a 2D grid structure.",
    definition: "CSS Grid Layout is a two-dimensional layout system for the web. It lets you lay content out in rows and columns, and has many features that make building complex layouts easy.",
    whenToUse: ["Complex page layouts", "Balanced multi-column designs", "Precise control over both rows and columns"],
    whenNotToUse: ["Simple linear layouts", "Basic stacking of elements"],
    officialStandard: {
      source: "W3C CSS Grid Layout Module Level 1",
      url: "https://www.w3.org/TR/css-grid-1/",
      excerpt: "The CSS Grid Layout Module defines a two-dimensional grid-based layout system, optimized for user interface design."
    },
    relatedTerms: ["flexbox", "container", "bento-grid"],
    realWorldUsage: ["Vercel Dashboard", "Linear", "Stripe Docs"],
    platforms: ["web"],
    codeSnippet: {
      language: "css",
      code: `.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}`
    },
    liveDemo: `
      <style>
        .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; padding: 20px; background: #1e1e2e; border-radius: 12px; }
        .item { background: #7c6ff7; height: 60px; border-radius: 6px; display: flex; align-items: center; justify-content: center; color: white; font-family: sans-serif; font-weight: bold; }
        .hero { grid-column: span 3; background: #22d3ee; }
      </style>
      <div class="grid">
        <div class="item hero">Hero Area</div>
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
      </div>
    `,
    tags: ["layout", "css", "modern-web"]
  },
  {
    id: "flexbox",
    name: "Flexbox",
    category: "layout",
    tagline: "Efficient 1D layout model for distributing space and aligning items.",
    definition: "The Flexible Box Module, usually referred to as flexbox, is a one-dimensional layout model that offers space distribution and powerful alignment capabilities.",
    whenToUse: ["Aligning items in a row or column", "Simple responsive layouts", "Centering content perfectly"],
    whenNotToUse: ["Complex 2D grid systems", "Precise alignment across multiple rows and columns"],
    officialStandard: {
      source: "W3C CSS Flexible Box Layout",
      url: "https://www.w3.org/TR/css-flexbox-1/",
      excerpt: "Flexbox provides a more efficient way to lay out, align and distribute space among items in a container, even when their size is unknown."
    },
    relatedTerms: ["grid", "container"],
    realWorldUsage: ["Slack Chat Layout", "Instagram Feed", "Raycast App"],
    platforms: ["web", "ios", "android"],
    codeSnippet: {
      language: "css",
      code: `.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}`
    },
    liveDemo: `
      <style>
        .flex { display: flex; gap: 15px; padding: 20px; background: #1e1e2e; border-radius: 12px; justify-content: center; }
        .item { background: #7c6ff7; padding: 15px 30px; border-radius: 50px; color: white; font-family: sans-serif; }
      </style>
      <div class="flex">
        <div class="item">Left</div>
        <div class="item">Center</div>
        <div class="item">Right</div>
      </div>
    `,
    tags: ["layout", "alignment", "responsive"]
  },
  {
    id: "glassmorphism",
    name: "Glassmorphism",
    category: "design-style",
    tagline: "UI style featuring background blur and semi-transparent layers resembling frosted glass.",
    definition: "A visual style characterized by a multi-layered approach with floating objects in space, semi-transparent backgrounds, and background blur.",
    whenToUse: ["Creating depth and hierarchy", "High-end, modern aesthetic interfaces", "When using vibrant background imagery"],
    whenNotToUse: ["Interfaces requiring high legibility for vision impaired", "Performance critical applications on low-end hardware"],
    officialStandard: {
      source: "Apple Human Interface Guidelines - Visual Design",
      url: "https://developer.apple.com/design/human-interface-guidelines/visual-design#materials",
      excerpt: "Materials like blur and transparency create a sense of depth and focus, allowing people to maintain context while interacting with content."
    },
    relatedTerms: ["neumorphism", "skeuomorphism", "blur-effect"],
    realWorldUsage: ["macOS Control Center", "iOS App Library", "Microsoft Fluent UI"],
    platforms: ["web", "ios", "android"],
    codeSnippet: {
      language: "css",
      code: `.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
}`
    },
    liveDemo: `
      <style>
        body { background: linear-gradient(135deg, #7c6ff7 0%, #22d3ee 100%); min-height: 100vh; display: flex; align-items: center; justify-content: center; margin: 0; }
        .glass { background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 20px; padding: 40px; color: white; font-family: sans-serif; box-shadow: 0 8px 32px rgba(0,0,0,0.1); width: 300px; text-align: center; }
        h2 { margin: 0 0 10px 0; }
        p { opacity: 0.8; font-size: 14px; }
      </style>
      <div class="glass">
        <h2>Glass Card</h2>
        <p>I am a frosted glass element sitting above a vibrant gradient.</p>
      </div>
    `,
    tags: ["style", "visual-design", "modern"]
  },
  {
    id: "skeleton-loader",
    name: "Skeleton Loader",
    category: "ux-patterns",
    tagline: "Animated placeholder blocks that simulate the structure of content before it loads.",
    definition: "Skeleton screens are blank versions of a page into which information is gradually loaded. They create the illusion of instant loading by showing the content's structure.",
    whenToUse: ["When content takes > 1 second to load", "Instead of traditional spinners for content-rich pages", "On dashboard or feed-based interfaces"],
    whenNotToUse: ["For very fast loads (< 300ms)", "For simple interactions like button clicks"],
    officialStandard: {
      source: "Material Design - Progressive Loading",
      url: "https://m3.material.io/foundations/interaction/states/loading",
      excerpt: "Placeholder shapes represent the structure of upcoming content, reducing the perceived wait time for users."
    },
    relatedTerms: ["spinner", "loading-state", "optimistic-ui"],
    realWorldUsage: ["Facebook Feed", "YouTube", "LinkedIn"],
    platforms: ["web", "ios", "android"],
    codeSnippet: {
      language: "html",
      code: `<div class="skeleton-card">
  <div class="skeleton-avatar pulse"></div>
  <div class="skeleton-text pulse"></div>
</div>`
    },
    liveDemo: `
      <style>
        .card { background: white; padding: 20px; border-radius: 12px; width: 250px; }
        .pulse { animation: pulse 1.5s infinite ease-in-out; background: #eee; }
        @keyframes pulse { 0% { opacity: 0.5; } 50% { opacity: 1; } 100% { opacity: 0.5; } }
        .circle { width: 50px; height: 50px; border-radius: 50%; margin-bottom: 15px; }
        .line { height: 10px; border-radius: 5px; margin-bottom: 8px; }
        .line-long { width: 100%; }
        .line-short { width: 60%; }
      </style>
      <div class="card">
        <div class="circle pulse"></div>
        <div class="line line-long pulse"></div>
        <div class="line line-long pulse"></div>
        <div class="line line-short pulse"></div>
      </div>
    `,
    tags: ["ux", "loading", "performance"]
  },
  {
    id: "toast",
    name: "Toast Notification",
    category: "components",
    tagline: "Non-disruptive, auto-expiring feedback messages.",
    definition: "A toast provides simple feedback about an operation in a small popup. It only fills the amount of space required for the message and the current activity remains visible and interactive.",
    whenToUse: ["Success confirmations", "Non-critical errors", "Status updates"],
    whenNotToUse: ["Critical errors requiring user action", "Complex messages with multiple links"],
    officialStandard: {
      source: "Material Design - Snackbars",
      url: "https://m3.material.io/components/snackbar/overview",
      excerpt: "Snackbars (Toasts) provide brief messages about app processes. They appear temporarily, towards the bottom of the screen."
    },
    relatedTerms: ["snackbar", "alert", "banner"],
    realWorldUsage: ["Gmail 'Sent' popup", "WhatsApp 'Message Deleted'", "Shopify 'Saved'"],
    platforms: ["web", "android"],
    codeSnippet: {
      language: "tsx",
      code: `const showToast = () => {
  toast.success("Settings updated!");
};`
    },
    liveDemo: `
      <style>
        .container { padding: 20px; font-family: sans-serif; text-align: center; }
        button { background: #7c6ff7; color: white; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer; transition: 0.2s; }
        button:hover { background: #6b5ed6; }
        .toast { position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%) translateY(100px); background: #333; color: white; padding: 12px 24px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); transition: 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28); }
        .toast.show { transform: translateX(-50%) translateY(0); }
      </style>
      <div class="container">
        <button onclick="fireToast()">Fire Toast</button>
        <div id="toast" class="toast">Message sent successfully!</div>
      </div>
      <script>
        function fireToast() {
          const t = document.getElementById('toast');
          t.classList.add('show');
          setTimeout(() => t.classList.remove('show'), 3000);
        }
      </script>
    `,
    tags: ["component", "feedback", "utility"]
  },
  {
    id: "modal",
    name: "Modal Dialog",
    category: "components",
    tagline: "Temporary window that forces user interaction before returning to parent.",
    definition: "A modal dialog is a window that appears on top of the main content and prevents users from interacting with the rest of the application until it is dismissed.",
    whenToUse: ["Forcing critical decisions", "Form entry that needs context", "Viewing specific details without leaving the page"],
    whenNotToUse: ["Simple feedback (use Toast)", "Complex navigation (use a new page)", "When background interaction is required"],
    officialStandard: {
      source: "WAI-ARIA Dialog (Modal) Pattern",
      url: "https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/",
      excerpt: "A modal dialog is a window that appears on top of an application window and interrupts the user's workflow."
    },
    relatedTerms: ["dialog", "popover", "drawer"],
    realWorldUsage: ["GitHub Repository Settings", "Trello Card Detail", "Airbnb Login"],
    platforms: ["web", "ios", "android"],
    codeSnippet: {
      language: "html",
      code: `<dialog open>
  <h2>Are you sure?</h2>
  <button>Cancel</button>
  <button>Delete</button>
</dialog>`
    },
    liveDemo: `
      <style>
        body { font-family: sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; background: #f0f2f5; }
        .overlay { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.5); align-items: center; justify-content: center; backdrop-filter: blur(4px); }
        .modal { background: white; padding: 30px; border-radius: 16px; width: 300px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); transform: scale(0.8); transition: 0.3s; }
        .overlay.active { display: flex; }
        .overlay.active .modal { transform: scale(1); }
        button.trigger { background: #7c6ff7; color: white; border: none; padding: 12px 24px; border-radius: 10px; cursor: pointer; }
      </style>
      <button class="trigger" onclick="toggleModal(true)">Open Modal</button>
      <div class="overlay" id="overlay" onclick="toggleModal(false)">
        <div class="modal" onclick="event.stopPropagation()">
          <h2 style="margin-top:0">Welcome!</h2>
          <p>This is a modal dialog. You must close it to interact with the background.</p>
          <button onclick="toggleModal(false)">Got it</button>
        </div>
      </div>
      <script>
        function toggleModal(show) { document.getElementById('overlay').classList.toggle('active', show); }
      </script>
    `,
    tags: ["component", "overlay", "interaction"]
  },
  {
    id: "accordion",
    name: "Accordion",
    category: "components",
    tagline: "Stacked list of headers that expand to reveal hidden content.",
    definition: "An accordion is a vertically stacked list of items that use show/hide functionality. Users can expand one or more sections of the content by clicking on the header.",
    whenToUse: ["FAQ sections", "Organizing large amounts of content in small space", "Secondary information that isn't always needed"],
    whenNotToUse: ["When users need to see all content at once", "For critical path information"],
    officialStandard: {
      source: "WAI-ARIA Accordion Pattern",
      url: "https://www.w3.org/WAI/ARIA/apg/patterns/accordion/",
      excerpt: "An accordion is a vertically stacked set of interactive headings that each contain a title, content snippet, or thumbnail representing a section of content."
    },
    relatedTerms: ["tabs", "collapsible", "disclosure"],
    realWorldUsage: ["Amazon Product Details", "Stripe Pricing FAQ", "Apple Support"],
    platforms: ["web", "ios", "android"],
    codeSnippet: {
      language: "html",
      code: `<details>
  <summary>What is HTML?</summary>
  <p>HyperText Markup Language...</p>
</details>`
    },
    liveDemo: `
      <style>
        .accordion { width: 300px; font-family: sans-serif; border: 1px solid #ddd; border-radius: 8px; overflow: hidden; }
        .item { border-bottom: 1px solid #ddd; }
        .item:last-child { border-bottom: none; }
        .header { padding: 15px; background: #f9f9f9; cursor: pointer; display: flex; justify-content: space-between; align-items: center; }
        .content { height: 0; overflow: hidden; padding: 0 15px; transition: 0.3s; background: white; font-size: 14px; color: #666; }
        .active .content { height: 60px; padding: 15px; }
        .active .header { background: #f0f0ff; }
      </style>
      <div class="accordion">
        <div class="item" id="it1">
          <div class="header" onclick="toggleAcc('it1')"><span>Section 1</span><span>+</span></div>
          <div class="content">Content for section one goes here.</div>
        </div>
        <div class="item" id="it2">
          <div class="header" onclick="toggleAcc('it2')"><span>Section 2</span><span>+</span></div>
          <div class="content">Content for section two is revealed.</div>
        </div>
      </div>
      <script>
        function toggleAcc(id) { document.getElementById(id).classList.toggle('active'); }
      </script>
    `,
    tags: ["component", "disclosure", "content"]
  },
  {
    id: "breadcrumb",
    name: "Breadcrumb",
    category: "navigation",
    tagline: "Secondary navigation showing the user's location in a site hierarchy.",
    definition: "Breadcrumbs help users understand their current location in the context of the entire site structure by providing a trail of links back to previous levels.",
    whenToUse: ["Deeply nested websites", "e-Commerce sites with categories", "Documentation pages"],
    whenNotToUse: ["Simple sites with flat hierarchy", "Linear progressive steps (use Stepper)"],
    officialStandard: {
      source: "WAI-ARIA Breadcrumb Pattern",
      url: "https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/",
      excerpt: "A breadcrumb provides a trail of links to help users understand their location within a website or application."
    },
    relatedTerms: ["navbar", "pagination", "stepper"],
    realWorldUsage: ["Amazon Navigation", "GitHub Repo Path", "Windows Explorer"],
    platforms: ["web"],
    codeSnippet: {
      language: "html",
      code: `<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/store">Store</a></li>
    <li aria-current="page">Shoes</li>
  </ol>
</nav>`
    },
    liveDemo: `
      <style>
        .nav { font-family: sans-serif; font-size: 14px; }
        ul { list-style: none; padding: 0; display: flex; gap: 8px; }
        li::after { content: "/"; margin-left: 8px; color: #999; }
        li:last-child::after { content: ""; }
        a { color: #7c6ff7; text-decoration: none; }
        span { color: #666; }
      </style>
      <nav class="nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Electronics</a></li>
          <li><span>Laptops</span></li>
        </ul>
      </nav>
    `,
    tags: ["navigation", "ux", "hierarchy"]
  },
  {
    id: "bottom-sheet",
    name: "Bottom Sheet",
    category: "components",
    tagline: "A menu or context surface that slides up from the bottom of the screen.",
    definition: "Bottom sheets are surfaces containing supplementary content that are anchored to the bottom of the screen. They are primarily used in mobile UI to offer contextual actions or information.",
    whenToUse: ["Mobile app menus", "Contextual actions on item selection", "Quick data entry on small screens"],
    whenNotToUse: ["On desktop (use Popover or Modal)", "When content is extremely long"],
    officialStandard: {
      source: "Material Design - Bottom Sheets",
      url: "https://m3.material.io/components/bottom-sheets/overview",
      excerpt: "Bottom sheets are anchored to the bottom edge of the screen. They can be modal or standard."
    },
    relatedTerms: ["modal", "drawer", "popover"],
    realWorldUsage: ["Google Maps 'View More'", "iOS Share Sheet", "Instagram Comments"],
    platforms: ["ios", "android", "web"],
    codeSnippet: {
      language: "swift",
      code: `.sheet(isPresented: $showSheet) {
    Text("Action Menu")
        .presentationDetents([.medium, .large])
}`
    },
    liveDemo: `
      <style>
        .stage { height: 100vh; background: #eee; overflow: hidden; position: relative; font-family: sans-serif; }
        .trigger { position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); background: #7c6ff7; color: white; border: none; padding: 12px 24px; border-radius: 50px; cursor: pointer; }
        .sheet { position: absolute; bottom: -100%; left: 0; right: 0; background: white; border-radius: 20px 20px 0 0; padding: 20px; box-shadow: 0 -5px 20px rgba(0,0,0,0.1); transition: 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
        .sheet.open { bottom: 0; }
        .handle { width: 40px; height: 5px; background: #ddd; border-radius: 10px; margin: 0 auto 20px; }
        .overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.3); opacity: 0; pointer-events: none; transition: 0.3s; }
        .overlay.open { opacity: 1; pointer-events: auto; }
      </style>
      <div class="stage">
        <button class="trigger" onclick="toggleSheet(true)">Open Sheet</button>
        <div class="overlay" id="sheet-overlay" onclick="toggleSheet(false)"></div>
        <div class="sheet" id="bottom-sheet">
          <div class="handle"></div>
          <h3>Quick Settings</h3>
          <p>Mute Notifications</p>
          <hr/>
          <p>Dark Mode</p>
          <hr/>
          <p>Clear Cache</p>
        </div>
      </div>
      <script>
        function toggleSheet(open) {
          document.getElementById('bottom-sheet').classList.toggle('open', open);
          document.getElementById('sheet-overlay').classList.toggle('open', open);
        }
      </script>
    `,
    tags: ["component", "mobile", "ios", "android"]
  },
  {
    id: "parallax",
    name: "Parallax",
    category: "animation",
    tagline: "Interweaving multiple layers at different speeds to create depth perception.",
    definition: "Parallax scrolling is a web design technique where background images move past the camera more slowly than foreground images, creating an illusion of depth in a 2D scene.",
    whenToUse: ["Storytelling pages", "Portfolio hero sections", "Immersive landing pages"],
    whenNotToUse: ["Task-heavy interfaces", "Utility dashboards", "For users with vestibular disorders (ensure prefers-reduced-motion check)"],
    officialStandard: {
      source: "MDN - Perceived Experience",
      url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/Performance_and_perceived_experience",
      excerpt: "Motion can enhance storytelling but should be used carefully to avoid causing motion sickness."
    },
    relatedTerms: ["scroll-animation", "micro-interaction", "perspective"],
    realWorldUsage: ["Apple Product Pages", "Firewatch Website", "Spotify Year in Review"],
    platforms: ["web"],
    codeSnippet: {
      language: "css",
      code: `.parallax {
  perspective: 1px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}`
    },
    liveDemo: `
      <style>
        .container { height: 200px; overflow-y: scroll; font-family: sans-serif; position: relative; }
        .bg { height: 400px; background: linear-gradient(to bottom, #7c6ff7, #22d3ee); position: absolute; width: 100%; top: 0; transform-origin: top; }
        .content { position: relative; height: 600px; padding: 20px; color: white; display: flex; align-items: center; flex-direction: column; }
        .parallax-title { transform: translateY(var(--y)); }
      </style>
      <div class="container" onscroll="updateY(this)">
        <div class="bg" id="bg"></div>
        <div class="content">
          <h2 id="p-title" style="margin-top: 50px">Scroll Down</h2>
          <p>Watch the background move slower than me.</p>
        </div>
      </div>
      <script>
        function updateY(e) {
          const scroll = e.scrollTop;
          document.getElementById('bg').style.transform = 'translateY(' + (scroll * 0.5) + 'px)';
          document.getElementById('p-title').style.transform = 'translateY(' + (scroll * -0.2) + 'px)';
        }
      </script>
    `,
    tags: ["animation", "scrolling", "depth"]
  },
  {
    id: "sidebar",
    name: "Sidebar",
    category: "layout",
    tagline: "A vertical column used for navigation or secondary content.",
    definition: "Sidebars are standard components in desktop and web layouts that contain complementary content, navigation menus, or functional tools separated from the primary content area.",
    whenToUse: ["App dashboards", "Documentation sites", "Complex navigation structures"],
    whenNotToUse: ["Simple content-first pages", "Mobile-first designs (use Drawer)"],
    officialStandard: {
      source: "W3C - Sidebar Navigation",
      url: "https://www.w3.org/WAI/tutorials/menus/flyout/",
      excerpt: "A sidebar often serves as the primary navigation area for complex applications, allowing users to switch contexts quickly."
    },
    relatedTerms: ["drawer", "navbar", "sticky-header"],
    realWorldUsage: ["Slack", "Discord", "VS Code"],
    platforms: ["web", "cross-platform"],
    codeSnippet: {
      language: "css",
      code: `.layout { display: grid; grid-template-columns: 250px 1fr; }`
    },
    liveDemo: `
      <style>
        .layout { display: grid; grid-template-columns: 80px 1fr; height: 200px; font-family: sans-serif; border: 1px solid #ddd; borderRadius: 8px; overflow: hidden; }
        .sidebar { background: #1e1e2e; color: white; padding: 10px; display: flex; flex-direction: column; gap: 10px; }
        .content { background: white; padding: 20px; }
        .circle { width: 40px; height: 40px; border-radius: 50%; background: #3c3c4e; }
        .active { background: #7c6ff7; }
      </style>
      <div class="layout">
        <div class="sidebar">
          <div class="circle active"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
        <div class="content">Dashboard Content Area</div>
      </div>
    `,
    tags: ["layout", "navigation", "desktop"]
  },
  {
    id: "badge",
    name: "Badge",
    category: "components",
    tagline: "A small visual indicator for status, category, or count.",
    definition: "Badges are small status descriptors used to highlight important information such as notifications, new features, or category tags.",
    whenToUse: ["Unread message counts", "Status indicators (e.g., 'New', 'Live')", "Categorizing list items"],
    whenNotToUse: ["When the information is long (use Chip or Tag)", "When it looks like a button"],
    officialStandard: {
      source: "Material Design - Badge",
      url: "https://m3.material.io/components/badges/overview",
      excerpt: "Badges are small visual indicators for notification counts or status. They are often placed over icons."
    },
    relatedTerms: ["tag", "chip", "snackbar"],
    realWorldUsage: ["iOS Notification Dots", "GitHub PR Status", "Shopping Cart Count"],
    platforms: ["web", "ios", "android"],
    codeSnippet: {
      language: "html",
      code: `<span class="badge">NEW</span>`
    },
    liveDemo: `
      <style>
        .container { padding: 40px; display: flex; gap: 10px; font-family: sans-serif; }
        .badge { padding: 4px 10px; border-radius: 20px; font-size: 11px; font-weight: bold; color: white; }
        .blue { background: #3b82f6; }
        .green { background: #10b981; }
        .red { background: #ef4444; }
        .pill { border-radius: 4px; }
      </style>
      <div class="container">
        <span class="badge blue">STATUS</span>
        <span class="badge green">NEW</span>
        <span class="badge red pill">URGENT</span>
      </div>
    `,
    tags: ["component", "indicator", "status"]
  },
  {
    id: "chip",
    name: "Chip / Tag",
    category: "components",
    tagline: "Compact elements that represent an input, attribute, or option.",
    definition: "Chips (often called Tags) allow users to enter information, make selections, filter content, or trigger actions based on distinct categories.",
    whenToUse: ["Filter criteria", "Selection in multi-select dropdowns", "Showing taxonomies"],
    whenNotToUse: ["For single, primary CTA (use Button)", "When space is extremely limited"],
    officialStandard: {
      source: "Material Design - Chips",
      url: "https://m3.material.io/components/chips/overview",
      excerpt: "Chips help people enter information, make selections, filter content, or trigger actions."
    },
    relatedTerms: ["badge", "button", "filter"],
    realWorldUsage: ["Gmail Recipient Chips", "Google Search Filters", "Medium Article Tags"],
    platforms: ["web", "ios", "android"],
    codeSnippet: {
      language: "html",
      code: `<div class="chip">UI Design <span class="close">×</span></div>`
    },
    liveDemo: `
      <style>
        .chips { display: flex; gap: 8px; padding: 20px; font-family: sans-serif; }
        .chip { background: #f0f0f0; border: 1px solid #ccc; padding: 6px 14px; border-radius: 50px; cursor: pointer; display: flex; align-items: center; gap: 6px; font-size: 14px; }
        .chip:hover { background: #e5e5e5; }
        .close { font-weight: bold; opacity: 0.5; }
      </style>
      <div class="chips">
        <div class="chip">React <span class="close">x</span></div>
        <div class="chip">Figma <span class="close">x</span></div>
        <div class="chip">CSS <span class="close">x</span></div>
      </div>
    `,
    tags: ["component", "input", "filter"]
  },
  {
    id: "tooltip",
    name: "Tooltip",
    category: "components",
    tagline: "Brief text description that appears on element focus or hover.",
    definition: "A tooltip is a small informative popup that appears when a user moves the mouse pointer over an element, such as an icon, button, or link.",
    whenToUse: ["Explaining icon-only buttons", "Providing extra context without cluttering", "Clarifying technical jargon"],
    whenNotToUse: ["For critical information", "On mobile (hover doesn't exist - use Popover)"],
    officialStandard: {
      source: "WAI-ARIA Tooltip Pattern",
      url: "https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/",
      excerpt: "A tooltip is a popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
    },
    relatedTerms: ["popover", "alt-text", "micro-copy"],
    realWorldUsage: ["Toolbars in Google Docs", "Help icons in Form Labels", "Browser Tab Titles"],
    platforms: ["web"],
    codeSnippet: {
      language: "html",
      code: `<button title="Send email">
  <i class="icon-send"></i>
</button>`
    },
    liveDemo: `
      <style>
        .container { padding: 60px; text-align: center; font-family: sans-serif; }
        .tip-wrapper { position: relative; display: inline-block; }
        .trigger { background: #7c6ff7; color: white; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer; }
        .tooltip { position: absolute; bottom: 120%; left: 50%; transform: translateX(-50%) scale(0.9); background: #333; color: white; padding: 8px 12px; border-radius: 6px; font-size: 12px; white-space: nowrap; opacity: 0; transition: 0.2s; pointer-events: none; }
        .tooltip::after { content: ""; position: absolute; top: 100%; left: 50%; margin-left: -5px; border-width: 5px; border-style: solid; border-color: #333 transparent transparent transparent; }
        .tip-wrapper:hover .tooltip { opacity: 1; transform: translateX(-50%) scale(1); }
      </style>
      <div class="container">
        <div class="tip-wrapper">
          <button class="trigger">Hover Me</button>
          <div class="tooltip">I explain what happens!</div>
        </div>
      </div>
    `,
    tags: ["component", "ux", "hover"]
  },
  {
    id: "progress-bar",
    name: "Progress Bar",
    category: "components",
    tagline: "Visual indicator of progress or completion of a task.",
    definition: "Progress bars provide visual feedback about the progress of a process, such as loading, uploading, or completing a series of steps.",
    whenToUse: ["File uploads", "Installation processes", "Multi-step forms"],
    whenNotToUse: ["When the duration is unknown (use a Spinner instead)"],
    officialStandard: {
      source: "WAI-ARIA Progressbar Role",
      url: "https://www.w3.org/TR/wai-aria-1.1/#progressbar",
      excerpt: "The progressbar role is for an element that displays the progress status for tasks that take a long time."
    },
    relatedTerms: ["spinner", "skeleton-loader", "stepper"],
    realWorldUsage: ["YouTube Video Loader", "Dropbox Upload", "Tax Filing Steps"],
    platforms: ["web", "ios", "android"],
    codeSnippet: {
      language: "html",
      code: `<progress value="70" max="100">70%</progress>`
    },
    liveDemo: `
      <style>
        .container { padding: 40px; font-family: sans-serif; }
        .bar-bg { background: #eee; height: 12px; border-radius: 6px; overflow: hidden; width: 100%; }
        .bar-fill { background: #7c6ff7; height: 100%; width: 0%; transition: width 0.5s; }
        button { margin-top: 15px; }
      </style>
      <div class="container">
        <div class="bar-bg"><div id="bar" class="bar-fill"></div></div>
        <button onclick="start()">Simulate Progress</button>
      </div>
      <script>
        function start() {
          const f = document.getElementById('bar');
          f.style.width = '0%';
          setTimeout(() => f.style.width = '70%', 100);
        }
      </script>
    `,
    tags: ["component", "feedback", "loading"]
  },
  {
    id: "sticky-header",
    name: "Sticky Header",
    category: "layout",
    tagline: "Navigation header that remains visible at the top while scrolling.",
    definition: "A header that is pinned to the top of the viewport even as the user scrolls down the page, ensuring navigation is always accessible.",
    whenToUse: ["Long landing pages", "Content-heavy articles", "Application headers"],
    whenNotToUse: ["Pages with very little height", "Mobile screens where vertical space is premium"],
    officialStandard: {
      source: "W3C - Position Sticky",
      url: "https://www.w3.org/TR/css-position-3/#sticky-pos",
      excerpt: "Sticky positioning is a hybrid of relative and fixed positioning. The element is treated as relative positioned until it crosses a specified threshold."
    },
    relatedTerms: ["navbar", "sidebar", "hero"],
    realWorldUsage: ["Twitter (X) Nav", "GitHub Top Bar", "Medium Article Nav"],
    platforms: ["web"],
    codeSnippet: {
      language: "css",
      code: `.header { position: sticky; top: 0; z-index: 1000; }`
    },
    liveDemo: `
      <style>
        .viewport { height: 200px; overflow-y: scroll; font-family: sans-serif; border: 1px solid #ddd; }
        .header { position: sticky; top: 0; background: #7c6ff7; color: white; padding: 15px; text-align: center; }
        .box { height: 100px; background: #f0f0f0; margin: 10px; border-radius: 8px; }
      </style>
      <div class="viewport">
        <div class="header">I am Sticky</div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
      </div>
    `,
    tags: ["layout", "navigation", "css"]
  },
  {
    id: "avatar",
    name: "Avatar",
    category: "components",
    tagline: "Visual representation of a user (image or initials).",
    definition: "Avatars are used to represent users across an interface. They can be photos, illustrations, or colored circles with user initials.",
    whenToUse: ["Profile pictures", "Author credits", "Account switchers"],
    whenNotToUse: ["For representative icons of objects (use Icons)"],
    officialStandard: {
      source: "Material Design - Avatars",
      url: "https://m3.material.io/components/avatar/overview",
      excerpt: "Avatars represent people or entities, typically using an image or initials."
    },
    relatedTerms: ["badge", "tooltips"],
    realWorldUsage: ["Slack User List", "GitHub Profile", "YouTube Comments"],
    platforms: ["web", "ios", "android"],
    codeSnippet: {
      language: "tsx",
      code: `<Avatar src="user.jpg" fallback="JD" />`
    },
    liveDemo: `
      <style>
        .container { padding: 40px; display: flex; gap: 15px; }
        .avatar { width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-family: sans-serif; font-weight: bold; color: white; background: #7c6ff7; }
        .ring { border: 2px solid white; box-shadow: 0 0 0 2px #7c6ff7; }
        .img { background: url('https://avatar.vercel.sh/user') center/cover; }
      </style>
      <div class="container">
        <div class="avatar">JD</div>
        <div class="avatar img ring"></div>
        <div class="avatar" style="background:#22d3ee">M</div>
      </div>
    `,
    tags: ["component", "user", "profile"]
  },
  {
    id: "bento-grid",
    name: "Bento Grid",
    category: "layout",
    tagline: "Grid layout featuring varying cell sizes resembling a bento box.",
    definition: "A popular modern layout style where content is organized into a grid of 'boxes' with varying sizes, creating a visual rhythm and high information density.",
    whenToUse: ["Product feature highlights", "Portfolios", "Dashboard summaries"],
    whenNotToUse: ["Standard list data", "Articles", "When hierarchy isn't clear"],
    officialStandard: {
      source: "Convention (Apple Marketing Design)",
      url: "https://www.apple.com/iphone/",
      excerpt: "Originally popularized by Apple's summary slides, Bento grids use modular blocks to showcase high-level features."
    },
    relatedTerms: ["grid", "layout", "masonry"],
    realWorldUsage: ["Apple Keynotes", "Linear Homepage", "Raycast Website"],
    platforms: ["web"],
    codeSnippet: {
      language: "css",
      code: `.bento { display: grid; grid-template-rows: repeat(3, 100px); grid-template-columns: repeat(3, 1fr); gap: 1rem; }`
    },
    liveDemo: `
      <style>
        .bento { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; padding: 10px; background: #eee; border-radius: 12px; }
        .box { background: white; border-radius: 8px; padding: 10px; font-family: sans-serif; min-height: 50px; font-size: 11px; }
        .big { grid-column: span 2; grid-row: span 2; background: #7c6ff7; color: white; }
        .tall { grid-row: span 2; background: #22d3ee; }
      </style>
      <div class="bento">
        <div class="box big">Feature One</div>
        <div class="box tall">Feature Two</div>
        <div class="box">Small 1</div>
        <div class="box">Small 2</div>
      </div>
    `,
    tags: ["layout", "modern", "design-trend"]
  },
  {
    id: "command-palette",
    name: "Command Palette",
    category: "navigation",
    tagline: "A centered input UI that allows fast navigation via keyboard shortcuts.",
    definition: "An overlay search interface triggered by a keyboard shortcut (like Cmd+K) that allows users to navigate the app, run commands, and find content quickly.",
    whenToUse: ["Power-user applications", "Apps with many nested pages", "Developer tools"],
    whenNotToUse: ["Simple consumer mobile apps", "When touch is the only input"],
    officialStandard: {
      source: "UI Pattern Convention",
      url: "https://linear.app/features/command-menu",
      excerpt: "Command menues enable a keyboard-first workflow, increasing efficiency for frequent users by centralizing discovery."
    },
    relatedTerms: ["search-bar", "modal", "navigation"],
    realWorldUsage: ["Raycast", "Slack", "VS Code"],
    platforms: ["web", "cross-platform"],
    codeSnippet: {
      language: "tsx",
      code: `useHotkeys('cmd+k', () => togglePalette());`
    },
    liveDemo: `
      <style>
        .overlay { background: #f0f0f5; height: 180px; padding: 20px; font-family: sans-serif; position: relative; border-radius: 12px; border: 1px solid #ddd; }
        .palette { background: white; border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); border: 1px solid #eee; overflow: hidden; }
        .input { padding: 15px; border-bottom: 1px solid #eee; color: #999; font-size: 14px; }
        .item { padding: 10px 15px; font-size: 13px; display: flex; justify-content: space-between; }
        .active { background: #f5f5ff; }
        .kbd { background: #eee; padding: 2px 6px; border-radius: 4px; font-size: 10px; }
      </style>
      <div class="overlay">
        <div class="palette">
          <div class="input">Search commands...</div>
          <div class="item active"><span>Go to Dashboard</span><span class="kbd">G D</span></div>
          <div class="item"><span>Change Theme</span><span class="kbd">T</span></div>
        </div>
      </div>
    `,
    tags: ["navigation", "ux", "power-user"]
  },
  {
    id: "carousel",
    name: "Carousel",
    category: "components",
    tagline: "A rotating showcase of images or content panes.",
    definition: "A slideshow for cycling through a series of content, particularly images or cards, often used on landing pages to highlight multiple features.",
    whenToUse: ["Hero banners", "Product showcases", "Onboarding galleries"],
    whenNotToUse: ["Crucial call-to-actions", "When content shouldn't be hidden", "Mobile if item count is very high (use vertical list)"],
    officialStandard: {
      source: "WAI-ARIA Carousel Pattern",
      url: "https://www.w3.org/WAI/ARIA/apg/patterns/carousel/",
      excerpt: "A carousel is a slideshow of content that can move automatically or via user interaction."
    },
    relatedTerms: ["tabs", "stepper", "pagination"],
    realWorldUsage: ["Netflix Homepage", "Apple Product Gallery", "Amazon Deals"],
    platforms: ["web", "ios", "android"],
    codeSnippet: {
      language: "tsx",
      code: `<Carousel items={images} showControls />`
    },
    liveDemo: `
      <style>
        .carousel { width: 100%; height: 200px; position: relative; font-family: sans-serif; overflow: hidden; border-radius: 12px; }
        .slide { position: absolute; inset:0; display:flex; align-items:center; justify-content:center; color:white; font-size: 24px; transition: 0.5s; opacity: 0; }
        .slide.active { opacity: 1; }
        .s1 { background: #7c6ff7; }
        .s2 { background: #22d3ee; }
        .nav { position: absolute; bottom: 10px; left: 0; right: 0; display: flex; justify-content: center; gap: 10px; }
        .dot { width: 10px; height: 10px; border-radius: 50%; background: rgba(255,255,255,0.5); cursor: pointer; }
        .dot.active { background: white; }
      </style>
      <div class="carousel">
        <div id="sl1" class="slide s1 active">Slide 1</div>
        <div id="sl2" class="slide s2">Slide 2</div>
        <div class="nav">
          <div id="d1" class="dot active" onclick="go(1)"></div>
          <div id="d2" class="dot" onclick="go(2)"></div>
        </div>
      </div>
      <script>
        function go(n) {
          document.querySelectorAll('.slide').forEach(s => s.classList.remove('active'));
          document.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));
          document.getElementById('sl'+n).classList.add('active');
          document.getElementById('d'+n).classList.add('active');
        }
      </script>
    `,
    tags: ["component", "visual", "slideshow"]
  },
  {
    id: "popover",
    name: "Popover",
    category: "components",
    tagline: "A transient view that appears relative to an anchor on click.",
    definition: "Popovers are used to display additional information or actions related to a specific UI element. Unlike tooltips, they often contain interactive content like forms or menus.",
    whenToUse: ["Date pickers", "Color pickers", "Overflow menus"],
    whenNotToUse: ["Brief descriptions (use Tooltip)", "Blocking interaction (use Modal)"],
    officialStandard: {
      source: "W3C - Popover API",
      url: "https://open-ui.org/components/popover.research",
      excerpt: "A popover is a non-modal surface that is anchored to another element on the screen."
    },
    relatedTerms: ["tooltip", "dropdown", "modal"],
    realWorldUsage: ["Notion Block Menu", "Google Calendar Event Bubble", "Figma Design Properties"],
    platforms: ["web", "ios"],
    codeSnippet: {
      language: "html",
      code: `<button popovertarget="my-popover">Open</button>`
    },
    liveDemo: `
      <style>
        .container { padding: 40px; font-family: sans-serif; position: relative; }
        .pop { position: absolute; top: 80px; left: 40px; background: white; border: 1px solid #ddd; padding: 15px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); display: none; width: 150px; z-index: 10; }
        .pop.show { display: block; }
        button { background: #7c6ff7; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; }
      </style>
      <div class="container">
        <button onclick="togglePop()">Options</button>
        <div id="pop" class="pop">
          <div style="padding: 5px">Edit Profile</div>
          <div style="padding: 5px">Settings</div>
          <div style="padding: 5px; color: red;">Logout</div>
        </div>
      </div>
      <script>
        function togglePop() { document.getElementById('pop').classList.toggle('show'); }
      </script>
    `,
    tags: ["component", "overlay", "interactive"]
  },
  {
    id: "navbar",
    name: "Navbar",
    category: "navigation",
    tagline: "Horizontal header containing primary site links and brand identity.",
    definition: "The Navigation Bar is a visual anchor typically found at the top of a page. It provides quick access to high-level sections and often includes branding and account controls.",
    whenToUse: ["Almost every website", "Multi-section applications"],
    whenNotToUse: ["Immersive full-screen games", "Focused standalone pages (e.g., checkout)"],
    officialStandard: {
      source: "WAI-ARIA Navigation Role",
      url: "https://www.w3.org/TR/wai-aria-1.1/#navigation",
      excerpt: "The navigation role is used to identify a collection of navigation links for the document or a related document."
    },
    relatedTerms: ["sidebar", "sticky-header", "breadcrumb"],
    realWorldUsage: ["Apple.com Navigation", "Twitter Header", "Facebook Top Nav"],
    platforms: ["web"],
    codeSnippet: {
      language: "html",
      code: `<nav role="navigation"><ul><li>Home</li></ul></nav>`
    },
    liveDemo: `
      <style>
        .nav { background: #1e1e2e; color: white; padding: 15px 30px; display: flex; justify-content: space-between; align-items: center; font-family: sans-serif; height: 60px; box-sizing: border-box; }
        .links { display: flex; gap: 20px; font-size: 14px; opacity: 0.8; }
        .logo { font-weight: bold; color: #7c6ff7; }
        .user { width: 30px; height: 30px; border-radius: 50%; background: #3c3c4e; }
      </style>
      <div class="nav">
        <div class="logo">BRAND</div>
        <div class="links"><span>Explore</span><span>Docs</span><span>Pricing</span></div>
        <div class="user"></div>
      </div>
    `,
    tags: ["navigation", "layout", "branding"]
  },
  {
    id: "skeleton-pulse",
    name: "Skeleton Pulse",
    category: "animation",
    tagline: "The subtle shimmering animation used in skeleton loaders.",
    definition: "An animation technique where a gradient or low-opacity overlay sweeps across placeholder elements to signal that data is actively being fetched.",
    whenToUse: ["Inside Skeleton Loaders", "When loading large data sets"],
    whenNotToUse: ["When loading completes instantly", "In high-performance gaming UI"],
    officialStandard: {
      source: "Material Design - Loading Shimmer",
      url: "https://m3.material.io/foundations/loading",
      excerpt: "A pulse or shimmer effect provides subtle motion, confirming the system is active even before data arrives."
    },
    relatedTerms: ["skeleton-loader", "micro-interaction", "fade-animation"],
    realWorldUsage: ["YouTube Video List", "Facebook News Feed", "LinkedIn Home"],
    platforms: ["web", "ios", "android"],
    codeSnippet: {
      language: "css",
      code: `@keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }`
    },
    liveDemo: `
      <style>
        .box { width: 200px; height: 100px; border-radius: 12px; margin: 20px; background: #eee; overflow: hidden; position: relative; }
        .shimmer { position: absolute; inset: 0; background: linear-gradient(90deg, #eee 0%, #f9f9f9 50%, #eee 100%); background-size: 200% 100%; animation: shim 1.5s infinite linear; }
        @keyframes shim { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
      </style>
      <div class="box"><div class="shimmer"></div></div>
    `,
    tags: ["animation", "loading", "ux"]
  },
  {
    id: "fab",
    name: "Floating Action Button",
    category: "navigation",
    tagline: "A high-priority circular button that floats above UI content.",
    definition: "The FAB is used for a promoted action in an application. It appears in front of all screen content, typically as a circular shape with an icon in its center.",
    whenToUse: ["Primary action (Create, Add, Compose)", "When the action is frequent and essential"],
    whenNotToUse: ["Secondary actions", "When there are more than 3-4 primary actions (use Speed Dial)"],
    officialStandard: {
      source: "Material Design - FAB",
      url: "https://m3.material.io/components/floating-action-button/overview",
      excerpt: "A floating action button (FAB) represents the primary action of a screen."
    },
    relatedTerms: ["speed-dial", "button", "bottom-sheet"],
    realWorldUsage: ["Google Keep 'New Note'", "Instagram 'New Post' (old UI)", "WhatsApp 'New Chat'"],
    platforms: ["android", "ios", "web"],
    codeSnippet: {
      language: "tsx",
      code: `<FAB icon={<Plus />} color="primary" />`
    },
    liveDemo: `
      <style>
        .screen { height: 200px; background: #f5f5f5; border: 1px solid #ddd; borderRadius: 12px; position: relative; overflow: hidden; font-family: sans-serif; }
        .fab { position: absolute; bottom: 20px; right: 20px; width: 56px; height: 56px; border-radius: 50%; background: #7c6ff7; color: white; display: flex; align-items: center; justify-content: center; font-size: 30px; box-shadow: 0 4px 10px rgba(0,0,0,0.2); cursor: pointer; }
      </style>
      <div class="screen">
        <div style="padding: 15px">Main Content Area</div>
        <div class="fab">+</div>
      </div>
    `,
    tags: ["component", "navigation", "android"]
  },
  {
    id: "segmented-control",
    name: "Segmented Control",
    category: "navigation",
    tagline: "A linear set of two or more segments that function as filters or switches.",
    definition: "Segmented controls are used to toggle between different views or categories. Each segment is a button that affects the same set of data.",
    whenToUse: ["Toggling between related views (e.g., Map vs List)", "Switching between sub-tabs", "Small number of exclusive options"],
    whenNotToUse: ["When you have more than 5 options (use Dropdown)", "For disparate navigation targets"],
    officialStandard: {
      source: "Apple HIG - Segmented Controls",
      url: "https://developer.apple.com/design/human-interface-guidelines/segmented-controls",
      excerpt: "A segmented control is a linear set of segments, each of which functions as a button that can display a different view."
    },
    relatedTerms: ["tabs", "toggle", "switch"],
    realWorldUsage: ["iOS Notification Settings", "Spotify Library Filters", "macOS Finder Views"],
    platforms: ["ios", "web", "android"],
    codeSnippet: {
      language: "html",
      code: `<div class="segmented"><button class="active">Daily</button><button>Weekly</button></div>`
    },
    liveDemo: `
      <style>
        .control { display: flex; background: #eee; padding: 4px; border-radius: 10px; width: 220px; font-family: sans-serif; margin: 40px; }
        .seg { flex: 1; text-align: center; padding: 8px; font-size: 14px; border-radius: 8px; cursor: pointer; transition: 0.2s; }
        .seg.active { background: white; box-shadow: 0 2px 8px rgba(0,0,0,0.1); font-weight: bold; }
      </style>
      <div class="control">
        <div id="s1" class="seg active" onclick="setS(1)">Map</div>
        <div id="s2" class="seg" onclick="setS(2)">List</div>
      </div>
      <script>
        function setS(n) {
          document.querySelectorAll('.seg').forEach(s => s.classList.remove('active'));
          document.getElementById('s'+n).classList.add('active');
        }
      </script>
    `,
    tags: ["navigation", "component", "ios"]
  },
  {
    id: "infinite-scroll",
    name: "Infinite Scroll",
    category: "ux-patterns",
    tagline: "Loading more content automatically as the user scrolls down.",
    definition: "A web design technique that loads content continuously as the user scrolls down the page, eliminating the need for pagination buttons.",
    whenToUse: ["Social media feeds", "Image galleries", "Content discovery streams"],
    whenNotToUse: ["Search results where location visibility is key", "Footers (users can never reach them)", "Task-oriented data grids"],
    officialStandard: {
      source: "UX Professional Convention",
      url: "https://www.nngroup.com/articles/infinite-scrolling/",
      excerpt: "Infinite scrolling can yield a better experience for discovering information, but users may feel lost without clear break points."
    },
    relatedTerms: ["pagination", "skeleton-loader", "pull-to-refresh"],
    realWorldUsage: ["Instagram Feed", "Twitter Timeline", "Pinterest"],
    platforms: ["web", "ios", "android"],
    codeSnippet: {
      language: "tsx",
      code: `window.onscroll = () => { if (atBottom) loadMore(); }`
    },
    liveDemo: `
      <style>
        .feed { height: 200px; border: 1px solid #ddd; overflow-y: scroll; font-family: sans-serif; padding: 10px; border-radius:12px; }
        .item { height: 60px; background: white; border: 1px solid #eee; margin-bottom: 8px; border-radius: 8px; display: flex; align-items: center; padding: 10px; font-size: 12px; }
        .item:nth-child(even) { background: #fafafa; }
        .loader { height: 30px; text-align: center; color: #999; font-size: 11px; }
      </style>
      <div class="feed" id="feed" onscroll="check(this)">
        <div class="item">Post #1: Hello World</div>
        <div class="item">Post #2: Designing is fun</div>
        <div class="item">Post #3: CSS Grid is cool</div>
        <div class="item">Post #4: UI is an art</div>
        <div id="loader" class="loader">Loading more...</div>
      </div>
      <script>
        function check(e) {
          if (e.scrollTop + e.clientHeight >= e.scrollHeight - 5) {
             const n = e.children.length;
             const newItem = document.createElement('div');
             newItem.className = 'item';
             newItem.innerText = 'Post #' + n + ': New content loaded!';
             e.insertBefore(newItem, document.getElementById('loader'));
          }
        }
      </script>
    `,
    tags: ["ux", "loading", "scrolling"]
  },
  {
    id: "stepper",
    name: "Stepper",
    category: "components",
    tagline: "A progress indicator showing a numbered sequence of steps.",
    definition: "Steppers convey progress through numbered steps. It provides a wizard-like workflow and shows which step the user is currently on.",
    whenToUse: ["Checkout processes", "Onboarding flows", "Multi-stage data entry"],
    whenNotToUse: ["Simple forms (1-2 fields)", "When steps are optional"],
    officialStandard: {
      source: "Material Design - Steppers",
      url: "https://m2.material.io/components/steppers",
      excerpt: "Steppers display progress through a sequence of logical and numbered steps."
    },
    relatedTerms: ["progress-bar", "breadcrumb", "onboarding"],
    realWorldUsage: ["Amazon Checkout", "Stripe Onboarding", "TurboTax"],
    platforms: ["web", "ios", "android"],
    codeSnippet: {
      language: "html",
      code: `<div class="stepper"><div class="step active">1</div><div class="line"></div><div class="step">2</div></div>`
    },
    liveDemo: `
      <style>
        .stepper { display: flex; align-items: center; gap: 10px; padding: 20px; font-family: sans-serif; }
        .step { width: 30px; height: 30px; border-radius: 50%; background: #eee; color: #999; display: flex; align-items: center; justify-content: center; font-size: 14px; }
        .active { background: #7c6ff7; color: white; font-weight: bold; }
        .done { background: #10b981; color: white; }
        .line { flex: 1; height: 2px; background: #eee; min-width: 30px; }
        .line.active { background: #7c6ff7; }
      </style>
      <div class="stepper">
        <div class="step done">V</div>
        <div class="line active"></div>
        <div class="step active">2</div>
        <div class="line"></div>
        <div class="step">3</div>
      </div>
    `,
    tags: ["component", "ux", "progress"]
  },
  {
    id: "radio-group",
    name: "Radio Group",
    category: "components",
    tagline: "A set of mutually exclusive options.",
    definition: "Radio buttons allow the user to select one option from a set while seeing all available alternatives side-by-side.",
    whenToUse: ["Selecting exactly one option from a small list", "When you want to show all options immediately"],
    whenNotToUse: ["Selecting multiple options (use Checkbox)", "When there are > 5 options (use Select)"],
    officialStandard: {
      source: "WAI-ARIA Radio Group Pattern",
      url: "https://www.w3.org/WAI/ARIA/apg/patterns/radio/",
      excerpt: "A radio group is a set of checkable buttons in which no more than one button can be checked at a time."
    },
    relatedTerms: ["checkbox", "select", "toggle"],
    realWorldUsage: ["Quiz Options", "Shipping Method Selection", "Rating Scales"],
    platforms: ["web", "ios", "android"],
    codeSnippet: {
      language: "html",
      code: `<input type="radio" id="opt1" name="group" checked>`
    },
    liveDemo: `
      <style>
        .group { padding: 20px; font-family: sans-serif; }
        label { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; cursor: pointer; }
        input[type="radio"] { accent-color: #7c6ff7; width: 18px; height: 18px; }
      </style>
      <div class="group">
        <label><input type="radio" name="g1" checked> Standard Shipping</label>
        <label><input type="radio" name="g1"> Express Delivery (+$5)</label>
        <label><input type="radio" name="g1"> Next Day Air (+$15)</label>
      </div>
    `,
    tags: ["component", "input", "form"]
  },
  {
    id: "checkbox",
    name: "Checkbox",
    category: "components",
    tagline: "Allows users to select one or more items from a set.",
    definition: "Checkboxes are used when there are multiple options that a user can select from a list. They can also be used to toggle a single setting on or off.",
    whenToUse: ["Selecting multiple items", "Accepting terms and conditions", "Filtering categories"],
    whenNotToUse: ["When only one selection is allowed (use Radio)", "For immediate actions (use Switch/Toggle)"],
    officialStandard: {
      source: "WAI-ARIA Checkbox Pattern",
      url: "https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/",
      excerpt: "A checkbox allows the user to toggle between two choices—checked and unchecked."
    },
    relatedTerms: ["radio-group", "switch", "toggle"],
    realWorldUsage: ["Settings List", "Bulk Actions", "Filters"],
    platforms: ["web", "ios", "android"],
    codeSnippet: {
      language: "html",
      code: `<input type="checkbox" id="c1" checked>`
    },
    liveDemo: `
      <style>
        .group { padding: 20px; font-family: sans-serif; }
        label { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; cursor: pointer; }
        input[type="checkbox"] { accent-color: #7c6ff7; width: 18px; height: 18px; }
      </style>
      <div class="group">
        <label><input type="checkbox" checked> Receive Newsletter</label>
        <label><input type="checkbox"> Enable Analytics</label>
        <label><input type="checkbox" checked> Night Mode</label>
      </div>
    `,
    tags: ["component", "input", "selection"]
  },
  {
    id: "switch",
    name: "Switch / Toggle",
    category: "components",
    tagline: "A digital on/off switch.",
    definition: "A switch reflects the state of a single setting. It's used for binary choices that take effect immediately without needing a separate 'Submit' button.",
    whenToUse: ["Toggling features on/off", "Activating/deactivating services", "Settings with immediate effect"],
    whenNotToUse: ["When a confirmation is required", "In a long form where changes are submitted at once (use Checkbox)"],
    officialStandard: {
      source: "Material Design - Switch",
      url: "https://m3.material.io/components/switch/overview",
      excerpt: "Switches toggle the state of a single setting on or off."
    },
    relatedTerms: ["checkbox", "radio-group"],
    realWorldUsage: ["iOS Settings", "System Preferences", "Feature Toggles"],
    platforms: ["web", "ios", "android"],
    codeSnippet: {
      language: "html",
      code: `<div class="switch"><input type="checkbox"></div>`
    },
    liveDemo: `
      <style>
        .container { padding: 40px; font-family: sans-serif; }
        .switch { position: relative; display: inline-block; width: 50px; height: 26px; }
        .switch input { opacity: 0; width: 0; height: 0; }
        .slider { position: absolute; cursor: pointer; inset: 0; background-color: #ccc; transition: .4s; border-radius: 34px; }
        .slider:before { position: absolute; content: ""; height: 18px; width: 18px; left: 4px; bottom: 4px; background-color: white; transition: .4s; border-radius: 50%; }
        input:checked + .slider { background-color: #7c6ff7; }
        input:checked + .slider:before { transform: translateX(24px); }
      </style>
      <div class="container">
        <label class="switch">
          <input type="checkbox" checked>
          <span class="slider"></span>
        </label>
        <label class="switch" style="margin-left: 20px">
          <input type="checkbox">
          <span class="slider"></span>
        </label>
      </div>
    `,
    tags: ["component", "input", "toggle"]
  }
]
;
