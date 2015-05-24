$(document).ready(function(){
	$('#upcoming').hide();
	$("#upcoTab").fadeTo('fast',.5);

	$("#pastTab").click(function(){
		$("#past").show();
		$("#upcoming").hide();
		$("#upcoTab").fadeTo('fast',.5);
		$("#pastTab").fadeTo('fast',1);
	});

	$("#upcoTab").click(function(){
		$("#upcoming").show();
		$("#past").hide();
		$("#pastTab").fadeTo('fast',.5);
		$("#upcoTab").fadeTo('fast',1);
	});
});