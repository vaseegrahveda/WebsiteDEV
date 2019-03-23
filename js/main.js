
(function ($) {

    var total = 0;
    $('.hfcOil,.hdcOil,.hbOil,.hhMask,.hhWash,.rpbPowder,.abPowder').keyup(function () {
        totalAmountCalc();
    });

    function totalAmountCalc() {
        var hfcOilVal = $('.hfcOil').val();
        var hdcOilVal = $('.hdcOil').val();
        var hbOilVal = $('.hbOil').val();
        var hhMaskVal = $('.hhMask').val();
        var hhWashVal = $('.hhWash').val();
        var rpbPowderVal = $('.rpbPowder').val();
        var abPowderVal = $('.abPowder').val();
        if (!!hfcOilVal) {
            if (hfcOilVal >= 0 && hfcOilVal < 4) {
                hfcOilVal = hfcOilVal * 175;
            } else if (hfcOilVal >= 4 && hfcOilVal < 10) {
                hfcOilVal = hfcOilVal * 165;
            } else if (hfcOilVal >= 10) {
                hfcOilVal = hfcOilVal * 155;
            }
            total = total + hfcOilVal;
        }
        if (!!hdcOilVal) {
            if (hdcOilVal >= 0 && hdcOilVal < 4) {
                hdcOilVal = hdcOilVal * 165;
            } else if (hdcOilVal >= 4 && hdcOilVal < 10) {
                hdcOilVal = hdcOilVal * 155;
            } else if (hdcOilVal >= 10) {
                hdcOilVal = hdcOilVal * 145;
            }
            total = total + hdcOilVal;
        }
        if (!!hbOilVal) {
            if (hbOilVal >= 0 && hbOilVal < 4) {
                hbOilVal = hbOilVal * 145;
            } else if (hbOilVal >= 4 && hbOilVal < 10) {
                hbOilVal = hbOilVal * 135;
            } else if (hbOilVal >= 10) {
                hbOilVal = hbOilVal * 125;
            }
            total = total + hbOilVal;
        }

        if (!!hhMaskVal) {
            if (hhMaskVal >= 0 && hhMaskVal < 4) {
                hhMaskVal = hhMaskVal * 155;
            } else if (hhMaskVal >= 4 && hhMaskVal < 10) {
                hhMaskVal = hhMaskVal * 145;
            } else if (hhMaskVal >= 10) {
                hhMaskVal = hhMaskVal * 140;
            }
            total = total + hhMaskVal;
        }
        if (!!hhWashVal) {
            if (hhWashVal >= 0 && hhWashVal < 4) {
                hhWashVal = hhWashVal * 120;
            } else if (hhWashVal >= 4 && hhWashVal < 10) {
                hhWashVal = hhWashVal * 110;
            } else if (hhWashVal >= 10) {
                hhWashVal = hhWashVal * 100;
            }
            total = total + hhWashVal;
        }

        if (!!rpbPowderVal) {
            if (rpbPowderVal >= 0 && rpbPowderVal < 4) {
                rpbPowderVal = rpbPowderVal * 110;
            } else if (rpbPowderVal >= 4 && rpbPowderVal < 10) {
                rpbPowderVal = rpbPowderVal * 100;
            } else if (rpbPowderVal >= 10) {
                rpbPowderVal = rpbPowderVal * 90;
            }
            total = total + rpbPowderVal;
        }

        if (!!abPowderVal) {
            if (abPowderVal >= 0 && abPowderVal < 4) {
                abPowderVal = abPowderVal * 110;
            } else if (abPowderVal >= 4 && abPowderVal < 10) {
                hhWashVal = abPowderVal * 100;
            } else if (abPowderVal >= 10) {
                abPowderVal = abPowderVal * 90;
            }
            total = total + abPowderVal;
        }

        $('.totalAmount').val(total);
    }

})(jQuery);