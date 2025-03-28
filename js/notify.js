document.addEventListener("DOMContentLoaded", () => {
function showNotification(message, iconUrl) {
  const container = document.getElementById('notification-container');
  
  // Create the notification element
  const notification = document.createElement('div');
  notification.classList.add('notification');
  
  // If an icon URL is provided, add an image element
  if (iconUrl) {
    const icon = document.createElement('img');
    icon.src = iconUrl;
    icon.alt = 'notification icon';
    icon.classList.add('notification-icon');
    icon.style.width = '24px';
    icon.style.height = '24px';
    notification.appendChild(icon);
  }
  
  // Add the message text
  const text = document.createElement('span');
  text.innerText = message;
  notification.appendChild(text);
  
  // Add click event to remove the notification manually
  notification.addEventListener('click', () => {
    container.removeChild(notification);
  });
  
  // Append the notification to the container
  container.appendChild(notification);
  
  // Remove notification after animations finish (total duration = slideIn (0.5s) + delay (4s) + fadeOut (0.5s))
  setTimeout(() => {
    if (container.contains(notification)) {
      container.removeChild(notification);
    }
  }, 5000);
}

// Example usage:
showNotification("Yo, your changes have been saved!", "../assets/images/icon-check.svg");
});
