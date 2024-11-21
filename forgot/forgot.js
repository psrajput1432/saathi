function openForgotPassword() {
    document.getElementById('forgot-password-popup').style.display = 'flex';
  }

  function closeForgotPassword() {
    document.getElementById('forgot-password-popup').style.display = 'none';
  }

  function sendOtp() {
    const email = document.getElementById('email').value;
    if (email) {
      alert(`OTP sent to ${email}`);
      document.getElementById('step-1').style.display = 'none';
      document.getElementById('step-2').style.display = 'block';
    } else {
      alert('Please enter a valid email.');
    }
  }

  function verifyOtp() {
    const otp = document.getElementById('otp').value;
    if (otp === '1234') { // Simulated OTP
      alert('OTP Verified');
      document.getElementById('step-2').style.display = 'none';
      document.getElementById('step-3').style.display = 'block';
    } else {
      alert('Invalid OTP. Try again.');
    }
  }

  function checkPasswordStrength(password) {
    const strengthText = document.getElementById('strength');
    const regexUpper = /[A-Z]/;
    const regexNumber = /[0-9]/;
    const regexLength = /.{8,}/;
    let strength = 'Weak';

    if (regexUpper.test(password) && regexNumber.test(password) && regexLength.test(password)) {
      strength = 'Strong';
      strengthText.style.color = 'green';
    } else {
      strength = 'Weak';
      strengthText.style.color = 'red';
    }

    strengthText.textContent = `Password Strength: ${strength}`;
  }

  function resetPassword() {
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (newPassword !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    if (!/[A-Z]/.test(newPassword) || !/[0-9]/.test(newPassword) || newPassword.length < 8) {
      alert('Password does not meet the requirements.');
      return;
    }

    alert('Password Reset Successful');
    document.getElementById('forgot-password-popup').style.display = 'none';
    document.getElementById('login-again-popup').style.display = 'flex';
  }

  function closeLoginAgain() {
    document.getElementById('login-again-popup').style.display = 'none';
  }

  // Attach password strength checker
  document.getElementById('new-password').addEventListener('input', (e) => {
    checkPasswordStrength(e.target.value);
  });