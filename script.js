document.addEventListener('DOMContentLoaded', function() {
  function updateTime() {
      const now = new Date();
      const utcTime = now.toUTCString().split(' ')[4];
      const day = now.toLocaleString('en-US', { weekday: 'long' });
      
      document.getElementById('current-time').textContent = utcTime;
      document.getElementById('current-day').textContent = day;
  }
  
  updateTime();
  setInterval(updateTime, 1000);
});
