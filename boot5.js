function loadCoupon(){
    document.getElementById('coupon').style.visibility = 'visible';
    document.getElementsByTagName('body').style.opacity = '0.1'
}

function closeCoupon(){
    document.getElementById('coupon').style.visibility = 'hidden';
    document.getElementsByTagName('body').style.opacity = '1'
}