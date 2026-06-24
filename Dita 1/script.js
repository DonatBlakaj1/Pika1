
// Panel switching
document.addEventListener('click', (e) => {
  // Nav switching
  const navItem = e.target.closest('.nav-item[data-panel]');
  if (navItem) {
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    navItem.classList.add('active');
    const panelId = navItem.dataset.panel;
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    const target = document.querySelector(`.panel[data-id="${panelId}"]`);
    if (target) target.classList.add('active');
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  // Tab switching (within panels)
  const tab = e.target.closest('.tab');
  if (tab) {
    tab.parentElement.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  }

  // Chip toggle
  const chip = e.target.closest('.chip');
  if (chip && !chip.closest('.head-actions')) {
    chip.parentElement.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
  }

  // Template category
  const tcat = e.target.closest('.tpl-cat');
  if (tcat) {
    document.querySelectorAll('.tpl-cat').forEach(c => c.classList.remove('active'));
    tcat.classList.add('active');
  }

  // Currency switch
  const cs = e.target.closest('.cur-switch button');
  if (cs) {
    cs.parentElement.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    cs.classList.add('active');
  }

  // Inbox message select
  const msg = e.target.closest('.msg-row');
  if (msg) {
    msg.parentElement.querySelectorAll('.msg-row').forEach(m => m.classList.remove('active'));
    msg.classList.add('active');
    msg.classList.remove('unread');
  }

  // Inbox filter tabs
  const ftab = e.target.closest('.ftab');
  if (ftab) {
    ftab.parentElement.querySelectorAll('.ftab').forEach(f => f.classList.remove('active'));
    ftab.classList.add('active');
  }

  // Workflow toggle
  const wf = e.target.closest('.wf-toggle');
  if (wf) wf.classList.toggle('on');

  // Checkbox
  const cb = e.target.closest('.checkbox');
  if (cb) cb.classList.toggle('checked');

  // Listing favorite
  const fav = e.target.closest('.listing-fave');
  if (fav) fav.classList.toggle('fav');
});

// ══════════════════════════════════════════════════════════
// 1. SYSTEMI I NDËRRIMIT TË PANELEVE & AUTO-CLOSE
// ══════════════════════════════════════════════════════════
document.addEventListener('click', (e) => {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.sidebar-overlay');

  // Ndërrimi i paneleve (Nav switching)
  const navItem = e.target.closest('.nav-item[data-panel]');
  if (navItem) {
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    navItem.classList.add('active');
    const panelId = navItem.dataset.panel;
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    const target = document.querySelector(`.panel[data-id="${panelId}"]`);
    if (target) target.classList.add('active');
    window.scrollTo({top: 0, behavior: 'smooth'});

    // 🌟 KJO E MBYLL MENYNË AUTOMATIKISHT NË CELULAR PASI KLIKON NJË OPSION
    if (window.innerWidth <= 768) {
      if (sidebar) sidebar.classList.remove('active');
      if (overlay) overlay.classList.remove('active');
    }
  }

  // Tab switching
  const tab = e.target.closest('.tab');
  if (tab) {
    tab.parentElement.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  }

  // Chip toggle
  const chip = e.target.closest('.chip');
  if (chip && !chip.closest('.head-actions')) {
    chip.parentElement.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
  }

  // Template category
  const tcat = e.target.closest('.tpl-cat');
  if (tcat) {
    document.querySelectorAll('.tpl-cat').forEach(c => c.classList.remove('active'));
    tcat.classList.add('active');
  }

  // Currency switch
  const cs = e.target.closest('.cur-switch button');
  if (cs) {
    cs.parentElement.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    cs.classList.add('active');
  }

  // Inbox message select
  const msg = e.target.closest('.msg-row');
  if (msg) {
    msg.parentElement.querySelectorAll('.msg-row').forEach(m => m.classList.remove('active'));
    msg.classList.add('active');
    msg.classList.remove('unread');
  }

  // Inbox filter tabs
  const ftab = e.target.closest('.ftab');
  if (ftab) {
    ftab.parentElement.querySelectorAll('.ftab').forEach(f => f.classList.remove('active'));
    ftab.classList.add('active');
  }

  // Workflow toggle
  const wf = e.target.closest('.wf-toggle');
  if (wf) wf.classList.toggle('on');

  // Checkbox
  const cb = e.target.closest('.checkbox');
  if (cb) cb.classList.toggle('checked');

  // Listing favorite
  const fav = e.target.closest('.listing-fave');
  if (fav) fav.classList.toggle('fav');
});

// ══════════════════════════════════════════════════════════
// 2. HAPJA DHE MBYLLJA E HAMBURGERIT (ME ID-NË E RE)
// ══════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.sidebar-overlay');
  const menuToggle = document.getElementById('menuToggle'); // Përdorim ID-në tënde

  if (menuToggle && sidebar && overlay) {
    // Hap ose mbyll kur klikohet butoni ☰
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      sidebar.classList.toggle('active');
      overlay.classList.toggle('active');
    });

    // Mbyll kur klikohet jashtë menysë (në overlay)
    overlay.addEventListener('click', () => {
      sidebar.classList.remove('active');
      overlay.classList.remove('active');
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const mobileTrigger = document.querySelector('.search > .s-ic');
  const searchWrapper = document.getElementById('searchWrapper');
  const searchInput = document.getElementById('searchInput');

  if (mobileTrigger && searchWrapper) {
    // Hap kërkimin kur preket ikona
    mobileTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      searchWrapper.classList.add('active');
      searchInput.focus();
    });
  }

  // Mbyll kërkimin automatikisht nëse klikon jashtë kutisë së shkrimit
  document.addEventListener('click', (e) => {
    if (searchWrapper && searchWrapper.classList.contains('active')) {
      if (!searchWrapper.contains(e.target) && e.target !== mobileTrigger) {
        searchWrapper.classList.remove('active');
      }
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const mobileTrigger = document.querySelector('.search > .s-ic');
  const searchWrapper = document.getElementById('searchWrapper');
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');

  if (mobileTrigger && searchWrapper) {
    // Hap kërkimin kur preket ikona kryesore
    mobileTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      searchWrapper.add('active'); // Ndryshuar nga toggle në add për siguri
      searchInput.focus();
    });
  }

  if (searchBtn && searchWrapper) {
    // Kur preket "✕" (searchBtn në mobile), mbyllet menjëherë kërkimi
    searchBtn.addEventListener('click', (e) => {
      if (window.innerWidth <= 1024) {
        e.preventDefault();
        e.stopPropagation();
        searchWrapper.classList.remove('active');
        searchInput.value = ''; // Fshin tekstin e shkruar kur mbyllet
      }
    });
  }

  // Mbyll kërkimin automatikisht nëse klikon jashtë tij në ekran
  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 1024 && searchWrapper && searchWrapper.classList.contains('active')) {
      if (!searchWrapper.contains(e.target) && e.target !== mobileTrigger) {
        searchWrapper.classList.remove('active');
      }
    }
  });
});