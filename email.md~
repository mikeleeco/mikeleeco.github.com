---
layout: default
---

<div class="row">
<div class="container">
<div class="jumbotron">
<h1>About Michael Lee</h1>
</div></div></div>
<div class="row">
<div class="container">
<div class="col-md-12">
<p class="lead">
Welcome to middlee.com, a website of data visualizations, analysis, inquiry and thoughtless musings. I'm a data scientist interested in sports, education, and psychology. My recent experience involves analyses relating to education measures (student demographics, attendance, performance) and sports research (player comparisons, arbitration information, and salary compensation). I keep this site to display my work, and I hope you find it interesting! If you do, let me know!</p></div>
<div class="container">
<div class=".col-xs-6 col-sm-6">
<img src="/images/profile.jpg" class="img-responsive" itemprop="image" />
</div>
<div class="page-header">
  <h1>Contact</h1>
</div>
<div class=".col-xs-6 .col-sm-6">
<h1><small>Email</small></h1>

	<a href="#myModal" data-toggle="modal">Send me an email!</a>
    	<div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      	  <div class="modal-dialog">
       	  <div class="modal-content">
		<div class="modal-header">
		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
		    <h4 class="modal-title">Contact Form</h4>
		</div>
		<div class="modal-body">
			<div class="form-group" name="commentForm" method="POST" action="http://formspree.io/mdlee12@gmail.com">
			 <input type="hidden" name="_next" value="about" />
			 <div class="form-group">
			 	<label>Name</label>
                      			<input class="form-control required" placeholder="Your name" data-placement="top" data-trigger="manual" data-content="Must be at least 3 characters long, and must only contain letters." type="text">
                </div>
			    <div class="form-group">
				<label>E-Mail</label>
                    			<input class="form-control email" placeholder="email@you.com (so that we can contact you)" data-placement="top" data-trigger="manual" data-content="Must be a valid e-mail address (user@gmail.com)" type="text">
                </div>
			    <div class="form-group">
				 <label>Message</label>
                    <textarea class="form-control" placeholder="Your message here.." data-placement="top" data-trigger="manual"></textarea>
                </div>
			    <div class="form-group">
                      	<button type="submit" value="Submit" class="btn btn-custom pull-right" id="send_btn">Send</button>
                    <p class="help-block pull-left text-danger hide" id="form-error">&nbsp; The form is not valid.</p>
                	</div>
		</div>
               </div>

	<script>
		/* form validation plugin */
		$.fn.goValidate = function() {
		    var $form = this,
			$inputs = $form.find('input:text');
		  
		    var validators = {
			name: {
			    regex: /^[A-Za-z]{3,}$/
			},
			email: {
			    regex: /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/
			},
			comments: {
			    regex: /^[A-Za-z]{3,}$/
			},
		    };
		    var validate = function(klass, value) {
			var isValid = true,
			    error = '';
			    
			if (!value && /required/.test(klass)) {
			    error = 'This field is required';
			    isValid = false;
			} else {
			    klass = klass.split(/\s/);
			    $.each(klass, function(i, k){
				if (validators[k]) {
				    if (value && !validators[k].regex.test(value)) {
				        isValid = false;
				        error = validators[k].error;
				    }
				}
			    });
			}
			return {
			    isValid: isValid,
			    error: error
			}
		    };
		    var showError = function($input) {
			var klass = $input.attr('class'),
			    value = $input.val(),
			    test = validate(klass, value);
		      
			$input.removeClass('invalid');
			$('#form-error').addClass('hide');
		
			if (!test.isValid) {
			    $input.addClass('invalid');
			    
			    if(typeof $input.data("shown") == "undefined" || $input.data("shown") == false){
			       $input.popover('show');
			    }
			    
			}
		      else {
			$input.popover('hide');
		      }
		    };
		   
		    $inputs.keyup(function() {
			showError($(this));
		    });
		  
		    $inputs.on('shown.bs.popover', function () {
		  		$(this).data("shown",true);
			});
		  
		    $inputs.on('hidden.bs.popover', function () {
		  		$(this).data("shown",false);
			});
		  
		    $form.submit(function(e) {
		      
			$inputs.each(function() { /* test each input */
				if ($(this).is('.required') || $(this).hasClass('invalid')) {
			    	showError($(this));
				}
		    	});
			if ($form.find('input.invalid').length) { /* form is not valid */
				e.preventDefault();
			    $('#form-error').toggleClass('hide');
			}
		    });
		    return this;
		};
		$('form').goValidate();
	</script>
	</div>
	</div>
	</div>


<h1><small>Github</small></h1>
<a href="https://github.com/mdlee12">Contribute to my code.</a>
<h1><small>Linkedin</small></h1>
<a href="https://www.linkedin.com/in/middlee">All professional inquiries welcomed!</a>
<h1><small>Twitter</small></h1>
<p class="text-justify">I mostly tweet about sports, data, and pop culture. Get at me!</p>
<div class="twitter-timeline" href="https://twitter.com/mlee_mke" data-widget-id="568835700255363072">Tweets by @mlee_mke
	<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
</div>
</div>
</div>
<hr></hr>

</div>
</div>
