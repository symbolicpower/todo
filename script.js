$(document).ready(function() {
	$('ol').sortable();
	
    $('#button').click(function() {
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append('<li class="item">' + toAdd + '</li>');
    });
    
    $(document).on('click', '.item', function() {
        $(this).remove();
    });
});