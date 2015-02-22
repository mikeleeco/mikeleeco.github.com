---
layout: default
title: Contact
---
<form class="form-horizontal" name="commentform" method="POST" action="http://formspree.io/mdlee12@gmail.com">
<span class="pull-right">
 <div class="form-group">
        <label class="control-label col-md-4" for="name">Name</label>
        <div class="col-md-6">
            <input type="text" class="form-control" id="name" name="name" placeholder="Name"/>
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-md-4" for="email">Email Address</label>
        <div class="col-md-6 input-group">
        <span class="input-group-addon">@</span>
            <input type="email" class="form-control" id="email" name="email" placeholder="Email Address"/>
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-md-4" for="comment">Question or Comment</label>
        <div class="col-md-6">
            <textarea rows="6" class="form-control" id="comments" name="comments" placeholder="Your question or comment here"></textarea>
        </div>
    </div>
    <div class="form-group">
        <div class="col-md-6">
            <button type="submit" value="Submit" class="btn btn-custom pull-right">Send</button>
        </div>
    </div>
</span>
</form>
