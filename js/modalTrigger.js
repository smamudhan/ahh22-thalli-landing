function triggerModal(modalElement) {
  var modal = document.getElementById(modalElement);
  modal = new bootstrap.Modal(modal);
  modal.show();
}
