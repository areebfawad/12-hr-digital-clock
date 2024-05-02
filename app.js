function updateTime() {
    const now = new Date();
  
    const hours = now.getHours() % 12 || 12;
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
  
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
    
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = monthNames[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();
    const day = now.toLocaleDateString('en-US', { weekday: 'long' });
  
    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    const dateString = `${day}, ${month} ${date}, ${year}`;
  
    document.getElementById('time').textContent = timeString;
    document.getElementById('date').textContent = dateString;
  }
  
  updateTime();
  setInterval(updateTime, 1000);
  