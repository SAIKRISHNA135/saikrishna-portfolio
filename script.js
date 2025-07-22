document.addEventListener('DOMContentLoaded', () => {
  // Dark Mode
  const toggle = document.getElementById('darkToggle');
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggle.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
  });

  // Modal Logic
  const triggers = document.querySelectorAll('.modal-trigger');
  const modals = document.querySelectorAll('.modal');
  const closes = document.querySelectorAll('.close');

  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const modal = document.getElementById(trigger.dataset.modal);
      modal.style.display = 'block';
    });
  });

  closes.forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
      closeBtn.closest('.modal').style.display = 'none';
    });
  });

  window.addEventListener('click', (e) => {
    modals.forEach(modal => {
      if (e.target === modal) modal.style.display = 'none';
    });
  });
});

