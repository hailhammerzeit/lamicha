const form = document.getElementById('contact-form');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !phone || !message) {
      alert('Por favor completá todos los campos.');
      return;
    }

    alert(`Gracias ${name}!\nTu pedido está listo para revisar.\nTe contactamos al ${phone}.`);
    form.reset();
  });
}
