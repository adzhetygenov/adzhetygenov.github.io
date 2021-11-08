$(document).ready(function(){
	setEqualHeight($(".container > .comment > .comment-caption"));
	setEqualHeight($(".container > .descript-sqr"));
	setEqualHeight($(".container > .square > .inner-square"));
	$(".collapse-btn").click(function(){
		$(".main-nav").slideToggle();
	});

$(".square").click(function(){
	$('.popup-wrapper').fadeIn();
});

$('.quit').click(function(){
	$(".popup-wrapper").fadeOut();
})

	function setEqualHeight(columns)
	{
		var tallestcolumn = 0;
		columns.each(

			function()
			{
				currentHeight = $(this).height();

				if(currentHeight > tallestcolumn)
				{
					tallestcolumn = currentHeight;
				}
			}
			);
		columns.height(tallestcolumn);
	}
});