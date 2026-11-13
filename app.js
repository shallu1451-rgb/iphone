// Ritu Mahajan Agency Chandigarh - Interactive Application Logic

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // Theme Toggle Logic
  initTheme();

  // Mobile Menu Logic
  initMobileMenu();

  // Initial calculation for ROI Forecaster
  calculateROI();
});

// 1. THEME TOGGLE (DARK / LIGHT MODE)
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const mobileThemeToggleBtn = document.getElementById('mobileThemeToggleBtn');
  
  // Check system or saved preference
  const savedTheme = localStorage.getItem('rm_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  function toggleMode() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('rm_theme', isDark ? 'dark' : 'light');
    if (window.lucide) {
      lucide.createIcons();
    }
  }

  if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleMode);
  if (mobileThemeToggleBtn) mobileThemeToggleBtn.addEventListener('click', toggleMode);
}

// 2. MOBILE MENU
function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}

// 3. INTERACTIVE CAMPAIGN JOURNEY SIMULATOR
const journeyData = {
  1: {
    badge: 'Stage 1: Intent Discovery & Search Trigger',
    title: 'Capturing Buyer Intent at the Precise Moment of Need',
    desc: 'Instead of shotgun blast ad spend, we intercept prospects searching specifically for luxury real estate, healthcare procedures, or premium services across Google Search, ChatGPT, Meta and LinkedIn.',
    b1: 'Algorithmic negative-keyword filtering saves 30%+ of ad budget',
    b2: 'Geo-fencing precision: Chandigarh, Panchkula, Mohali & NRI corridors',
    cardTag: 'Ad Position #1',
    stat: '98.4% High Affinity',
    cardHtml: `
      <div class="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
        <div class="flex items-center justify-between text-[11px] text-slate-400">
          <span>Google Sponsored • Sector 8-C Chandigarh</span>
          <span class="text-amber-400 font-bold">Quality Score: 10/10</span>
        </div>
        <p class="font-bold text-sm text-white">Luxury 4BHK Sky Villas in Mohali &amp; Chandigarh Sector 8</p>
        <p class="text-xs text-slate-300">Direct Developer Inventory. Private plunge pools, golf view &amp; zero brokerage. Download brochure &amp; VIP pricing.</p>
      </div>
    `
  },
  2: {
    badge: 'Stage 2: High-Velocity Creative Hook',
    title: 'Thumb-Stopping UGC & Direct-Response Visuals',
    desc: 'Our creative production team tests 15+ variations of video hooks, founder stories, and cinematic lifestyle reels to capture attention within the crucial first 2.4 seconds.',
    b1: 'Dynamic A/B testing of pain points vs aspirational payoff',
    b2: 'High-definition 4K drone videography & authentic customer reviews',
    cardTag: 'Meta Advantage+ Dynamic',
    stat: '4.6% Avg CTR (Top 1%)',
    cardHtml: `
      <div class="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
        <div class="flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
          <span class="text-xs text-rose-300 font-bold">Instagram Reel Ad • 15 Sec Hook</span>
        </div>
        <div class="p-3 rounded-lg bg-black/40 border border-slate-700 text-xs text-slate-200">
          <p class="italic text-slate-100">"Why Tricity families are upgrading to smart sky villas instead of cramped floors..."</p>
          <div class="mt-2 flex items-center justify-between text-[11px] text-slate-400">
            <span>👁️ 48,200 Views</span>
            <span class="text-emerald-400 font-bold">Save Rate: 12.8%</span>
          </div>
        </div>
      </div>
    `
  },
  3: {
    badge: 'Stage 3: Sub-Second Landing Page Conversion',
    title: 'Frictionless Funnel with Automated WhatsApp Booking',
    desc: 'Our bespoke landing pages load in under 850 milliseconds on mobile. Every headline, social proof badge, and form field is engineered for conversion rates above 8%.',
    b1: 'Instant 1-tap WhatsApp consultation integration',
    b2: 'Frictionless two-step progressive lead capture form',
    cardTag: 'Page Speed: 99/100',
    stat: '9.4% Visitor-to-Lead Conv.',
    cardHtml: `
      <div class="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
        <div class="flex items-center justify-between text-xs">
          <span class="text-emerald-400 font-bold flex items-center gap-1"><i data-lucide="zap" class="w-3.5 h-3.5"></i> 0.8s Load Speed</span>
          <span class="text-slate-400">Mobile Responsive</span>
        </div>
        <div class="p-2.5 rounded-lg bg-slate-900 border border-slate-700 space-y-1 text-xs">
          <div class="flex items-center justify-between">
            <span class="text-slate-300">Form: VIP Site Tour Booking</span>
            <span class="text-emerald-400 font-mono">Verified +91 Phone</span>
          </div>
          <p class="text-[11px] text-slate-400">Prospect matched: Budget ₹2.5 Cr - ₹4 Cr</p>
        </div>
      </div>
    `
  },
  4: {
    badge: 'Stage 4: CRM Attribution & Banked Revenue',
    title: 'Closed Revenue Synced Directly to Your Dashboard',
    desc: 'No vague spreadsheets. Every lead is automatically routed into your sales CRM within 15 seconds with full UTM attribution, giving you undeniable proof of ROAS.',
    b1: 'Direct WhatsApp alert delivered to sales director in real time',
    b2: 'Looker Studio live financial ROI dashboard 24/7',
    cardTag: 'Attributed & Closed',
    stat: '₹4.80 Return per ₹1 Spent',
    cardHtml: `
      <div class="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
        <div class="flex items-center justify-between text-xs">
          <span class="font-mono text-emerald-400 font-bold">STATUS: CONTRACT SIGNED</span>
          <span class="text-slate-400">HubSpot CRM Sync</span>
        </div>
        <div class="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-xs space-y-1">
          <div class="flex justify-between">
            <span class="text-slate-300">Deal Value:</span>
            <span class="font-bold text-white">₹3,45,00,000</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-300">Ad Spend to Acquire:</span>
            <span class="font-bold text-emerald-400">₹24,500</span>
          </div>
        </div>
      </div>
    `
  }
};

function setJourneyStep(stepNumber) {
  const data = journeyData[stepNumber];
  if (!data) return;

  // Update tabs
  for (let i = 1; i <= 4; i++) {
    const btn = document.getElementById(`stepBtn-${i}`);
    if (btn) {
      if (i === stepNumber) {
        btn.classList.add('bg-white', 'dark:bg-slate-700', 'shadow-sm', 'text-rose-600', 'dark:text-rose-400');
        btn.classList.remove('text-slate-500');
      } else {
        btn.classList.remove('bg-white', 'dark:bg-slate-700', 'shadow-sm', 'text-rose-600', 'dark:text-rose-400');
        btn.classList.add('text-slate-500');
      }
    }
  }

  // Update Left Text
  document.getElementById('stepBadge').textContent = data.badge;
  document.getElementById('stepTitle').textContent = data.title;
  document.getElementById('stepDescription').textContent = data.desc;
  document.getElementById('stepBullet1').textContent = data.b1;
  document.getElementById('stepBullet2').textContent = data.b2;

  // Update Right Visual Card
  document.getElementById('stepCardTag').textContent = data.cardTag;
  document.getElementById('stepStat').textContent = data.stat;
  document.getElementById('stepCardBody').innerHTML = data.cardHtml;

  // Re-run Lucide icons for injected elements
  if (window.lucide) {
    lucide.createIcons();
  }
}

// 4. INTERACTIVE ROI CALCULATOR
const industryMultipliers = {
  realestate: { cpl: 1200, convRate: 0.08, avgDeal: 800000, roas: '5.2x - 7.5x' },
  healthcare: { cpl: 450, convRate: 0.18, avgDeal: 45000, roas: '4.5x - 6.2x' },
  education: { cpl: 320, convRate: 0.14, avgDeal: 65000, roas: '4.8x - 6.8x' },
  d2c: { cpl: 280, convRate: 0.22, avgDeal: 2800, roas: '3.8x - 5.4x' },
  b2b: { cpl: 1600, convRate: 0.09, avgDeal: 250000, roas: '4.2x - 6.5x' }
};

function calculateROI() {
  const budgetInput = document.getElementById('calcBudget');
  const industryInput = document.getElementById('calcIndustry');
  const budgetDisplay = document.getElementById('budgetDisplay');
  const calcLeads = document.getElementById('calcLeads');
  const calcCPL = document.getElementById('calcCPL');
  const calcRevenue = document.getElementById('calcRevenue');
  const calcROAS = document.getElementById('calcROAS');

  if (!budgetInput || !industryInput) return;

  const budget = parseInt(budgetInput.value, 10);
  const industry = industryInput.value;
  const config = industryMultipliers[industry] || industryMultipliers.realestate;

  // Format currency display
  budgetDisplay.textContent = `₹${budget.toLocaleString('en-IN')} / mo`;

  // Calculate leads range
  const baseLeads = Math.round(budget / config.cpl);
  const minLeads = Math.round(baseLeads * 0.85);
  const maxLeads = Math.round(baseLeads * 1.25);

  calcLeads.textContent = `${minLeads} - ${maxLeads}`;
  calcCPL.textContent = `₹${config.cpl.toLocaleString('en-IN')}`;

  // Estimate revenue pipeline
  const minRevenue = Math.round(minLeads * config.convRate * config.avgDeal);
  const maxRevenue = Math.round(maxLeads * config.convRate * config.avgDeal);

  function formatLakh(num) {
    if (num >= 10000000) {
      return `₹${(num / 10000000).toFixed(1)} Cr`;
    } else if (num >= 100000) {
      return `₹${(num / 100000).toFixed(1)} Lakh`;
    }
    return `₹${num.toLocaleString('en-IN')}`;
  }

  calcRevenue.textContent = `${formatLakh(minRevenue)} - ${formatLakh(maxRevenue)}`;
  calcROAS.textContent = `${config.roas} ROAS`;
}

// 5. FAQ ACCORDION TOGGLE
function toggleFaq(button) {
  const faqItem = button.closest('.faq-item');
  const content = faqItem.querySelector('.faq-content');
  const icon = button.querySelector('.faq-icon');

  const isExpanded = !content.classList.contains('hidden');

  // Close all FAQs in container
  document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
  document.querySelectorAll('.faq-icon').forEach(i => i.classList.remove('rotate-180'));

  if (!isExpanded) {
    content.classList.remove('hidden');
    icon.classList.add('rotate-180');
  }
}

// 6. MODAL HANDLERS
function openBookingModal() {
  const modal = document.getElementById('bookingModal');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }
}

function closeBookingModal() {
  const modal = document.getElementById('bookingModal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
}

// Close modal when clicking on backdrop
window.addEventListener('click', (e) => {
  const modal = document.getElementById('bookingModal');
  if (e.target === modal) {
    closeBookingModal();
  }
});

// 7. FORM SUBMISSIONS & TOAST ALERTS
function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  
  showToast(`Thank you, ${name}!`, 'Your Growth Audit request has been registered. Ritu Mahajan will review it shortly.');
  form.reset();
}

function handleModalSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('modalName').value;
  const time = document.getElementById('modalTime').value;

  closeBookingModal();
  showToast(`Consultation Reserved!`, `VIP session scheduled for ${name} (${time}). Check your WhatsApp/Email.`);
}

function showToast(title, desc) {
  const toast = document.getElementById('toast');
  const toastTitle = document.getElementById('toastTitle');
  const toastDesc = document.getElementById('toastDesc');

  if (toast && toastTitle && toastDesc) {
    toastTitle.textContent = title;
    toastDesc.textContent = desc;
    toast.classList.remove('hidden');

    setTimeout(() => {
      toast.classList.add('hidden');
    }, 5500);
  }
}
