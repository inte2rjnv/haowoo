$(document).ready(function(){
	//讀取檔案
	$.ajax({url: 'data.json', dataType: 'json'})
	.done(function(data){
		$(data).each(function(){
			if(this.crowded === 'yes') {
				var idName = '#' + this.id;
				$(idName).find('.check').addClass('crowded');
			}
		});
	})
	.fail(function(){
		window.alert('讀取錯誤！');
	});

	//點擊之後顯示剩餘空位狀況
	$('.check').on('click', function(){
		if($(this).hasClass('crowded')) {
			$(this).html('優惠券已被領完').addClass('none');
		} else {
			$(this).html('下一步領取<span>(剩餘數量極少)</span>').addClass('next');
		}
	});
});