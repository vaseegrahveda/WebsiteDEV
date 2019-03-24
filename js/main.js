(function ($) {

    var total = 0;
    var hfcOilVal;
    var hdcOilVal;
    var hbOilVal;
    var hhMaskVal;
    var hhWashVal;
    var rpbPowderVal;
    var abPowderVal;


    $('.hfcOil,.hdcOil,.hbOil,.hhMask,.hhWash,.rpbPowder,.abPowder,.name,.address,.pincode,.phone').on('keyup keypress', function(){
        if ((($('.name').val() > 0) && ($('.address').val() > 0) && ($('.pincode').val() > 0) && ($('.phone').val() > 0)) && ($('.hfcOil').val() > 0 || $('.hdcOil').val() > 0 || $('.hbOil').val() > 0 || $('.hhMask').val() > 0 || $('.hhWash').val() > 0 || $('.rpbPowder').val() > 0 || $('.abPowder').val() > 0)) {
            $('button[id="contact100-form-btn"]').prop('disabled', false);
        }
        else {
            $('button[id="contact100-form-btn"]').prop('disabled', true);
        }
    
        totalAmountCalc();
});

function totalAmountCalc() {
    hfcOilVal = $('.hfcOil').val();
    hdcOilVal = $('.hdcOil').val();
    hbOilVal = $('.hbOil').val();
    hhMaskVal = $('.hhMask').val();
    hhWashVal = $('.hhWash').val();
    rpbPowderVal = $('.rpbPowder').val();
    abPowderVal = $('.abPowder').val();

    if (hfcOilVal >= 0 && hfcOilVal < 4) {
        hfcOilVal = hfcOilVal * 175;
    } else if (hfcOilVal >= 4 && hfcOilVal < 10) {
        hfcOilVal = hfcOilVal * 165;
    } else if (hfcOilVal >= 10) {
        hfcOilVal = hfcOilVal * 155;
    }
    total = hfcOilVal;

    if (hdcOilVal >= 0 && hdcOilVal < 4) {
        hdcOilVal = hdcOilVal * 165;
    } else if (hdcOilVal >= 4 && hdcOilVal < 10) {
        hdcOilVal = hdcOilVal * 155;
    } else if (hdcOilVal >= 10) {
        hdcOilVal = hdcOilVal * 145;
    }
    total = total + hdcOilVal;

    if (hbOilVal >= 0 && hbOilVal < 4) {
        hbOilVal = hbOilVal * 145;
    } else if (hbOilVal >= 4 && hbOilVal < 10) {
        hbOilVal = hbOilVal * 135;
    } else if (hbOilVal >= 10) {
        hbOilVal = hbOilVal * 125;
    }
    total = total + hbOilVal;

    if (hhMaskVal >= 0 && hhMaskVal < 4) {
        hhMaskVal = hhMaskVal * 155;
    } else if (hhMaskVal >= 4 && hhMaskVal < 10) {
        hhMaskVal = hhMaskVal * 145;
    } else if (hhMaskVal >= 10) {
        hhMaskVal = hhMaskVal * 140;
    }
    total = total + hhMaskVal;

    if (hhWashVal >= 0 && hhWashVal < 4) {
        hhWashVal = hhWashVal * 120;
    } else if (hhWashVal >= 4 && hhWashVal < 10) {
        hhWashVal = hhWashVal * 110;
    } else if (hhWashVal >= 10) {
        hhWashVal = hhWashVal * 100;
    }
    total = total + hhWashVal;

    if (rpbPowderVal >= 0 && rpbPowderVal < 4) {
        rpbPowderVal = rpbPowderVal * 110;
    } else if (rpbPowderVal >= 4 && rpbPowderVal < 10) {
        rpbPowderVal = rpbPowderVal * 100;
    } else if (rpbPowderVal >= 10) {
        rpbPowderVal = rpbPowderVal * 90;
    }
    total = total + rpbPowderVal;

    if (abPowderVal >= 0 && abPowderVal < 4) {
        abPowderVal = abPowderVal * 110;
    } else if (abPowderVal >= 4 && abPowderVal < 10) {
        hhWashVal = abPowderVal * 100;
    } else if (abPowderVal >= 10) {
        abPowderVal = abPowderVal * 90;
    }
    total = total + abPowderVal;

    $('.totalAmount').val(total);
}

// $('.contact100-form-btn').click(function () {
//     // if (true) {
//         // $('button[id="contact100-form-btn"]').prop('disabled',false);
//         setTimeout(function () {
//             $('.contact100-form').trigger("reset");
//             alert('Thanks for the order. Kindly send us your payment screenshot to confirm your order!')
//         }, 3000);
//     // }
//     // else {
//     //     $('button[id="contact100-form-btn"]').prop('disabled',true);
//     // }
// });
// $('.input100').on("click", function () {
// 	// if (pattern.test(userinput)) {
// 		$('button[id="contact100-form-btn"]').prop('disabled', false);
// 	// } else {
// 		// $('button[id="btn-subscribe"]').prop('disabled', true);
// 	// }
// });

$('button[id="contact100-form-btn"]').click(function () {
    setTimeout(function () {
        $('.contact100-form').trigger("reset");
        $('button[id="contact100-form-btn"]').prop('disabled', true);
        alert('Thanks for the order. Kindly send us your payment screenshot to confirm your order!')
    }, 3000);
});

}) (jQuery);
