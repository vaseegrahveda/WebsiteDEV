(function ($) {

    var total, finalTotal = 0;
    var hfcOilVal;
    var hdcOilVal;
    var hbOilVal;
    var hhMaskVal;
    var hhWashVal;
    var rpbPowderVal;
    var abPowderVal;
    var mbPowderVal;
    var hmForCurlsVal;


    $('.hfcOil,.hdcOil,.hbOil,.hhMask,.hhWash,.rpbPowder,.abPowder,.mbPowder,.hmForCurls,.name,.address,.pincode,.phone,.city,.state').on('keyup input', function () {
        if ((($('.name').val().length > 0) && ($('.address').val().length > 0) && ($('.pincode').val() > 0) && ($('.phone').val().length > 0) && ($('.city').val().length > 0) && ($('.state').val().length > 0)) && ($('.hfcOil').val() > 0 || $('.hdcOil').val() > 0 || $('.hbOil').val() > 0 || $('.hhMask').val() > 0 || $('.hhWash').val() > 0 || $('.rpbPowder').val() > 0 || $('.abPowder').val() > 0 || $('.mbPowder').val() > 0 || $('.hmForCurls').val() > 0) {
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
        mbPowderVal = $('.mbPowder').val();
        hmForCurlsVal = $('.hmForCurls').val();
        stateVal = $('.state').val();

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

        if (hbOilVal >= 0 && hbOilVal < 5) {
            hbOilVal = hbOilVal * 145;
        } else if (hbOilVal >= 5 && hbOilVal < 10) {
            hbOilVal = hbOilVal * 135;
        } else if (hbOilVal >= 10) {
            hbOilVal = hbOilVal * 125;
        }
        total = total + hbOilVal;

        if (hhMaskVal >= 0 && hhMaskVal < 5) {
            hhMaskVal = hhMaskVal * 155;
        } else if (hhMaskVal >= 5 && hhMaskVal < 10) {
            hhMaskVal = hhMaskVal * 145;
        } else if (hhMaskVal >= 10) {
            hhMaskVal = hhMaskVal * 140;
        }
        total = total + hhMaskVal;

        if (hhWashVal >= 0 && hhWashVal < 5) {
            hhWashVal = hhWashVal * 120;
        } else if (hhWashVal >= 5 && hhWashVal < 10) {
            hhWashVal = hhWashVal * 110;
        } else if (hhWashVal >= 10) {
            hhWashVal = hhWashVal * 100;
        }
        total = total + hhWashVal;

        if (rpbPowderVal >= 0 && rpbPowderVal < 5) {
            rpbPowderVal = rpbPowderVal * 165;
        } else if (rpbPowderVal >= 5 && rpbPowderVal < 10) {
            rpbPowderVal = rpbPowderVal * 155;
        } else if (rpbPowderVal >= 10) {
            rpbPowderVal = rpbPowderVal * 145;
        }
        total = total + rpbPowderVal;

        if (abPowderVal >= 0 && abPowderVal < 5) {
            abPowderVal = abPowderVal * 110;
        } else if (abPowderVal >= 5 && abPowderVal < 10) {
            abPowderVal = abPowderVal * 100;
        } else if (abPowderVal >= 10) {
            abPowderVal = abPowderVal * 90;
        }
        total = total + abPowderVal;

        if (mbPowderVal >= 0 && mbPowderVal < 5) {
            mbPowderVal = mbPowderVal * 120;
        } else if (mbPowderVal >= 5 && mbPowderVal < 10) {
            mbPowderVal = mbPowderVal * 110;
        } else if (mbPowderVal >= 10) {
            mbPowderVal = mbPowderVal * 100;
        }
        total = total + mbPowderVal;

        if (hmForCurlsVal >= 0) {
            hmForCurlsVal = hmForCurlsVal * 185;
        }
        total = total + hmForCurlsVal;


        if (total >= 400 || stateVal === 'Tamil Nadu') {
            finalTotal = total;
            $('.shipping').val(0);
            $('.shippig-panel').addClass("shipping-disabled");
        }
        else {
            $('.shippig-panel').removeClass("shipping-disabled");
            $('.shipping').val(40);
            finalTotal = total + 40;
        }
        $('.productCost').val(total);
        if (total > 0) {
            $('.totalAmount').val(finalTotal);
        }
        else {
            $('.totalAmount').val(0);
        }
    }

    $('button[id="contact100-form-btn"]').click(function () {
        localStorage.setItem("name", ($('.name').val()));
        setTimeout(function () {
            $('.contact100-form').trigger("reset");
            $('button[id="contact100-form-btn"]').prop('disabled', true);
            window.location.href = 'thankspage/thanks.html';
        }, 500);
    });

    if (!!localStorage.getItem("name")) {
        document.getElementById("cus_name").innerHTML = localStorage.getItem("name");
    }

})(jQuery);
