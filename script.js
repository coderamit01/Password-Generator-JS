const generateBtn = document.querySelector('.generate-btn');
const password = document.getElementById('password');
const copy = document.querySelector('.copy');

generateBtn.addEventListener('click', () => {
  const lenth = 12;
  const passChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*_<>?[]{})(';
  let uniquePass = '';
  for (let i = 0; i < lenth; i++) {
    const randomIndex = Math.floor(Math.random() * passChar.length);
    uniquePass += passChar[randomIndex];
  }
  password.value = uniquePass;
});

copy.addEventListener('click', () => {
  navigator.clipboard.writeText(password.value);
})