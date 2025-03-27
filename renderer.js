const information = document.getElementById('info')

window.addEventListener('DOMContentLoaded', () => {
  information.innerText = `Esta aplicación está usando Chrome (v${window.versions.chrome()}), Node.js (v${window.versions.node()}), y Electron (v${window.versions.electron()})`
})
