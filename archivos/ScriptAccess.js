document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("comprobation").addEventListener("submit", function(event) {
    event.preventDefault();
    var playernametag = document.getElementById("playernametag").value;
    var calovacode = document.getElementById("calovacode").value;
    if (playernametag === "Boc3lli_Bolar333" && calovacode === "Boc3lli's_Sepultura") {
      window.location.href = "../paginas/Archives.html";
    } else {
      alert("█████ ██ ███ █ █████ █████████");
    }
  });
});
