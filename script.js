function go(page) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
  document.getElementById('view-' + page).classList.add('active');
  document.getElementById('nav-' + page).classList.add('active');
  
  document.getElementById('view-' + page).scrollTop = 0;
}

function invia() {
  const n = document.getElementById('nome').value.trim();
  const t = document.getElementById('tel').value.trim();
  const d = document.getElementById('data').value;
  const o = document.getElementById('ora').value;
  const p = document.getElementById('persone').value;
  const occ = document.getElementById('occasione').value;
  const note = document.getElementById('note').value.trim();

  if (!n || !t || !d || !o || !p) {
    alert('Compila tutti i campi obbligatori.');
    return;
  }

  const dataFmt = d ? new Date(d).toLocaleDateString('it-IT', {weekday:'long', day:'numeric', month:'long', year:'numeric'}) : '';

  let msg = `🍕 *Nuova Prenotazione - Il Piccio*\n\n`;
  msg += `👤 *Nome:* ${n}\n`;
  msg += `📞 *Telefono:* ${t}\n`;
  msg += `📅 *Data:* ${dataFmt}\n`;
  msg += `🕐 *Ora:* ${o}\n`;
  msg += `👥 *Persone:* ${p}\n`;
  if (occ) msg += `🎉 *Occasione:* ${occ}\n`;
  if (note) msg += `📝 *Note:* ${note}\n`;

  const url = `https:
  window.open(url, '_blank');
}