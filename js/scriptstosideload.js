
jQuery_1_12_4(function () {
    $('#tile_form').on('submit', function (e) {
        e.preventDefault();





jQuery_1_12_4.ajax({
    url:  ' https://api.github.com/repos/dburczyn/cdn/contents/js/',
    dataType: 'json',
    success: function(results)   {
        $.each(results, function (i, f) {


            var list = '<p>'+JSON.stringify(f.name)+'</p>';
            jQuery_1_12_4(list).appendTo("#viewPanelTile");
            jQuery_1_12_4.ajax({
                url: 'http://cdn.jsdelivr.net/gh/dburczyn/cdn/js/' + f.name,
                dataType: 'json',

                     success: function (response) {

                       var tile =     '<div class="col-md-4 cms-boxes-outer">        <div class="cms-boxes-items cms-features">          <div class="boxes-align">            <div class="small-box">              <i class="fa fa-4x fa-laptop">&nbsp;</i>              <h2>'+f.name+'</h2>              <p>'+JSON.stringify(response)+'</p>            </div>          </div>        </div>      </div>';
                         jQuery_1_12_4(tile).appendTo("#foo");
                  }

                });

    });
    }

    });





    });
});
