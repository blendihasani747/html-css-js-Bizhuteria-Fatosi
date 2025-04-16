document.addEventListener('DOMContentLoaded', function() {
  const chatIcon = document.getElementById('chatIcon');
  const iframePopup = document.getElementById('iframePopup');
  const closeButton = document.getElementById('closeButton');

  chatIcon.addEventListener('click', function() {
    iframePopup.style.display = 'block';
  });

  closeButton.addEventListener('click', function() {
    iframePopup.style.display = 'none';
  });
});

