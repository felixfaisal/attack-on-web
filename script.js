function copy(params) {
  new ClipboardJS('.clipboard');
  toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-bottom-center",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }
  Command: toastr["success"]("Copied to clipboard")
}
window.onload = (event) => {

  let random = Math.floor(Math.random() * 11);
  random = random > 8 ? 8 : random
  document.getElementById("aow-content").innerHTML = `
  <img src="./static/aow (${random}).gif" alt="Smiley face" class="aow-img"  style="vertical-align:middle">
  `
};