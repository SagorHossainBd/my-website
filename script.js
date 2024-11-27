document.querySelector('.login-btn').addEventListener('click', () => {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (!username || !password) {
    document.getElementById('error-msg').textContent = 'অনুগ্রহ করে ইউজারনেম এবং পাসওয়ার্ড প্রদান করুন!';
  } else {
    document.getElementById('error-msg').textContent = '';
    alert('লগইন সফল হয়েছে!');
  }
});