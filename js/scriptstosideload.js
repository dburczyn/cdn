jQuery_1_12_4(function () {
    jQuery_1_12_4('#tile_form').on('submit',function (e) {
        e.preventDefault();
jQuery_1_12_4.ajax({
    url:  ' https://api.github.com/repos/dburczyn/cdn/contents/js/',
    dataType: 'json',
    success: function(results)   {
        jQuery_1_12_4.each(results, function (i, f) {
            var list =   '<div class="col-md-3 cms-boxes-outer">                <div class="cms-boxes-items cms-features">                  <div class="boxes-align" data-toggle="modal" data-target="#expandedTile" id="'+f.name+'">                    <div class="small-box">                      <i class="fa fa-4x fa-laptop">&nbsp;</i>                        <p>'+JSON.stringify(f.name)+'</p>                    </div>                  </div>                </div>              </div>  ';
         jQuery_1_12_4(list).appendTo("#foo");
    });
    }
    });
    jQuery_1_12_4('#foo').on('click', '.boxes-align', function() {
      jQuery_1_12_4.ajax({
        url: 'http://cdn.jsdelivr.net/gh/dburczyn/cdn/js/' + jQuery_1_12_4(this).attr('id'),
        dataType: 'json',
                 success: function (response) {
               jQuery_1_12_4( "#modd" ).empty();
                  var tile =     '<div class="col-md-4 cms-boxes-outer" id="'+ 'title'   +'">        <div class="cms-boxes-items cms-features">          <div class="boxes-align">            <div class="small-box">              <i class="fa fa-4x fa-laptop">&nbsp;</i>              <h2>'+'</h2>              <p>'+JSON.stringify(response)+'</p>            </div>          </div>        </div>      </div>';
                  jQuery_1_12_4(tile).appendTo("#modd");
          }
        });
    });
    });
});

jQuery_1_12_4(function () {
jQuery_1_12_4('#file_input_form').on('submit',function (e) {
  e.preventDefault();



  jQuery_1_12_4.ajax({
  url: 'https://api.github.com/repos/dburczyn/cdn/contents/js/'+ jQuery_1_12_4('#filename').val()+'?access_token=12efd2766ae2a12e9e00900dff5fe98d17f82636',
  type: 'PUT',
  //data: JSON.stringify(jQuery_1_12_4('#filecontent').val()),
   data: '{"message": "closed","content":"'+ btoa(jQuery_1_12_4('#filecontent').val())+'" }',
  success: function(data) {
    alert('Load was performed.' + JSON.stringify(data));
  }
});
});
});
