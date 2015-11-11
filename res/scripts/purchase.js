$(document).ready(function () {

    //sbpb_N2RhNTRlMmEtYTViYy00YTQ2LTk5MTEtOTFlYTNiYWFmMDQ3

    var overlay = $('.sidebar-overlay');

    var checkout = false;
    $('#checkout-button').on('click', function() {

        if (checkout === false) {
            $(this).removeClass('bg-orange').addClass('btn-success');
            $('#checkout-button-icon').removeClass('glyphicon-ok').addClass('glyphicon-usd');
            $('#coupon-id').append(" RESERVED").addClass('text-success');
            $('#coupon-caption-container').fadeTo( "slow", 0.6 );

            checkout = true;
        }
    });
});
