
 // 1. Get the single cursor follower and all target elements
const follower = document.querySelector('.cursor-follower');
const targetElements = document.querySelectorAll('.link-hover'); 

// 2. Loop through each target element and add listeners
targetElements.forEach(element => {
    // Mouse enters target: Add the 'is-active' class
    element.addEventListener('mouseenter', () => {
        follower.classList.add('is-active'); 
    });

    // Mouse leaves target: Remove the 'is-active' class
    element.addEventListener('mouseleave', () => {
        follower.classList.remove('is-active'); 
    });
});

// 3. Movement Listener
document.addEventListener('mousemove', (e) => {
    // Get the current size of the follower to properly center it
    const followerSize = follower.offsetWidth; // Gets 30px or 60px dynamically
    const centerOffset = followerSize / 2;
    
    const x = e.clientX - centerOffset;
    const y = e.clientY - centerOffset;
    
    follower.style.transform = `translate(${x}px, ${y}px)`;
});

  // Debug helper: visually mark elements wider than the viewport on small screens
  (function findOverflow(){
    if (window.innerWidth > 600) return;
    const offenders = [];
    document.querySelectorAll('body *').forEach(el => {
      if (!(el instanceof HTMLElement)) return;
      const rect = el.getBoundingClientRect();
      if (rect.width > window.innerWidth) {
        offenders.push({selector: el.tagName.toLowerCase() + (el.id?('#'+el.id):'') + (el.className?('.'+el.className.replace(/\s+/g,'.')):''), width: Math.round(rect.width)});
        el.style.outline = '2px solid rgba(255,0,0,0.5)';
      }
    });
    if (offenders.length) {
      console.warn('Detected elements wider than viewport:', offenders);
      alert('Debug: some elements exceed the mobile width. Check the console for details.');
    }
  })();
