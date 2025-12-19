document.addEventListener('DOMContentLoaded',()=>{
  const pizza = document.getElementById('pizza');
  const qty = document.getElementById('qty');
  const btcPrice = document.getElementById('btcPrice');
  const subtotalEl = document.getElementById('subtotal');
  const btcTotalEl = document.getElementById('btcTotal');
  const calcBtn = document.getElementById('calcBtn');
  const celebrateBtn = document.getElementById('celebrateBtn');

  function fmtUSD(n){return `$${n.toFixed(2)}`}

  function calculate(){
    const price = parseFloat(pizza.value)||0;
    const count = parseInt(qty.value)||1;
    const btcP = parseFloat(btcPrice.value)||50000;
    const subtotal = price * count;
    const btc = subtotal / btcP;
    subtotalEl.textContent = fmtUSD(subtotal);
    btcTotalEl.textContent = `${btc.toFixed(6)} BTC`;
  }

  calcBtn.addEventListener('click',calculate);
  [pizza,qty,btcPrice].forEach(el=>el.addEventListener('input',calculate));

  calculate();

  celebrateBtn.addEventListener('click',()=>{
    fireConfetti(30);
  });

  function fireConfetti(n){
    const wrap = document.createElement('div');
    wrap.className='confetti';
    for(let i=0;i<n;i++){
      const s = document.createElement('span');
      s.textContent = '🍕';
      s.style.left = Math.random()*100 + '%';
      s.style.top = (-Math.random()*10) + 'vh';
      s.style.fontSize = (12 + Math.random()*28) + 'px';
      s.style.animationDelay = (Math.random()*0.6) + 's';
      s.style.transform = `rotate(${Math.random()*360}deg)`;
      wrap.appendChild(s);
    }
    document.body.appendChild(wrap);
    setTimeout(()=>{wrap.remove();},4000);
  }
});
