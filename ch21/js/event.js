var bt_open = document.querySelector('#open');
var bt_close = document.querySelector('#close');
bt_open.onclick = oD
bt_close.onclick = cD
function oD(){
    document.querySelector('.detail').style.display="block"
    document.querySelector('#open').style.display="none"
}
function cD(){
    document.querySelector('.detail').style.display="none"
    document.querySelector('#open').style.display="block"
}