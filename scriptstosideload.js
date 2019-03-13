

$(function () {
    $('#tile_form').on('submit', function (e) {
        e.preventDefault();





$.ajax({
    url:  ' https://api.github.com/repos/dburczyn/cdn/contents/js/',
    dataType: 'json',
    success: function(results)   {
        $.each(results, function (i, f) {


            var list = '<p>'+JSON.stringify(f.name)+'</p>';
            $(list).appendTo("#viewPanelTile");
            $.ajax({
                url: 'http://cdn.jsdelivr.net/gh/dburczyn/cdn/js/' + f.name,
                dataType: 'json',

                         success: function (response) {
                        $.each(response, function (e, r) {
                       var tile = '    <div class="container">        <section class="cms-boxes">            <div class="container-fluid">                <div class="row">                    <div class="col-md-4 cms-boxes-outer">                        <div class="cms-boxes-items cms-features">                            <div class="boxes-align">                                <div class="small-box">                                    <i class="fa fa-4x fa-laptop">&nbsp;</i>                                    <h2>' + e + '</h2>                                    <p>'   + JSON.stringify(r) +   '</p>                                </div>                            </div>                        </div>                    </div>                </div>            </div>        </section>    </div>'
            $(tile).appendTo("#viewPanelTile");
                   })}

                });

    });
    }

    });





    });
});

