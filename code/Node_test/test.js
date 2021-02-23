$(function() {
    $(document).on('keyup', function(e) {
        var value = e.keyCode

        $('#ipt').val(value);
        console.log(e);
    })
})