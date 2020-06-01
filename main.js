$(document).ready(function() {
	var url = 'https://jsonplaceholder.typicode.com/posts'; // url api



  $.ajax( //ajax
    {
      'url' : url,
      'method' : 'GET',
      'success' : function (data) {
						for (var i = 0; i < data.length; i++) {
							var post = data[i];

							var source = $("#entry-template").html();
							var template = Handlebars.compile(source);
							var html = template(post);
							$('.post-container').append(html);
						}
		  },
		    'error' : function (request, state, errors) {
		      alert('error' + errors);
		    }
		  }
		);
	});
