$(document).ready(function(){
	$.ajaxSetup({
		headers: {
			'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
		}
	});

	$('.search_date').click(function(){
		
		var startdate = $('.startdate').val();
		var enddate = $('.enddate').val();
		//console.log(startdate);
		$.post('/order',{startdate:startdate,enddate:enddate},function(response){
			
			var html ='';
			var j=1;
			var total = 0 ;
			$.each(response,function(i,v){
				
					html+=`<tr>
					<td>${j++}</td>
					<td>${v.voucherno}</td>
					<td>${v.user.name}</td>
					<td>${v.total} MMK</td>
					<td>
					<a href="orders/${v.id}" class="btn btn-success">
					<i class="fas fa-info"></i>
					</a>
					</td>
					</tr>`;
				
			});
			$('.order_search_list').html(html);
		})
	})
});