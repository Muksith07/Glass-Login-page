
  const passwordInput = document.getElementById('password');
  const togglePassword = document.getElementById('togglePassword');

  togglePassword.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      togglePassword.innerHTML = "<i class='fa-solid fa-eye-slash'></i>";
    } else {
      passwordInput.type = 'password';
      togglePassword.innerHTML = "<i class='fa-solid fa-eye'></i>";
    }
  });

