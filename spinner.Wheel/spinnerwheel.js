function randomFunction() {
    let randomHesapla = Math.floor(Math.random() * (10000 - 1000)) + 1000
    document.getElementById('box').style.transform = "rotate(" + randomHesapla + "deg)"
}
