(function ( $ ) {

    $.fn.jazzyAjax = function(options) {
    
        var settings = $.extend({
            ajaxLoader: "/img/ajax-loader.gif"
        }, options );
      
        $('div[data-ajax]').each( function() {

            var container = $(this);
            var loader = $(this).data('loader');
            var url = $(this).data('ajax');
            
            if (loader) {
                $(loader).html('<center><img src="' + settings.ajaxLoader + '" /></center>');
            } else {
                $(container).html('<center><img src="' + settings.ajaxLoader + '" /></center>');
            }
            
            $.ajax(
            {
                url : url,
                type: "GET",
                success:function(data, textStatus, jqXHR) 
                {
                    $(container).html(data);
                },
                error: function(jqXHR, textStatus, errorThrown) 
                {
                    if (loader) {
                        $(loader).html('<center><img src="' + settings.ajaxLoader + '" /><br/><br/>' + errorThrown + '</center>');
                    } else {
                        $(container).html('<center><p class="text-danger">' + errorThrown + '</p></center><small>' + jqXHR.responseText + '</small>');
                    }
                }
            });
        });
      
        this.on( "submit", 'form[data-container]', function(e) {
            
            e.preventDefault();
        
            var container = $(this).data('container');
            var loader = $(this).data('loader');
            var postData = $(this).serializeArray();
            var formURL = $(this).attr("action");
            
            if (loader) {
                $(loader).html('<center><img src="' + settings.ajaxLoader + '" /></center>');
            } else {
                $(container).html('<center><img src="' + settings.ajaxLoader + '" /></center>');
            }
            
            if ( !formURL.length ) {
                alert('No action="" set on this form');
            }
            
            $.ajax(
            {
                url : formURL,
                type: "POST",
                data : postData,
                success:function(data, textStatus, jqXHR) 
                {
                    $(container).html(data);
                },
                error: function(jqXHR, textStatus, errorThrown) 
                {
                    if (loader) {
                        $(loader).html('<center><img src="' + settings.ajaxLoader + '" /><br/><br/>' + errorThrown + '</center>');
                    } else {
                        $(container).html('<center><img src="' + settings.ajaxLoader + '" /><br/><br/>' + errorThrown + '</center>');
                    }
                }
            });
        });

        this.on( "click", 'a[data-container], button[data-container]', function(e) {
        
            e.preventDefault();
        
            var loader = $(this).data('loader');
            var container = $(this).data('container');
            var linkUrl = $(this).attr("href");
            
            if (loader) {
                $(loader).html('<center><img src="' + settings.ajaxLoader + '" /></center>');
            } else {
                $(container).html('<center><img src="' + settings.ajaxLoader + '" /></center>');
            }
            
            if ( !linkUrl.length ) {
                alert('No href set on this link.');
            }
            
            $.ajax(
            {
                url : linkUrl,
                type: "GET",
                success:function(data, textStatus, jqXHR) 
                {
                    $(container).html(data);
                },
                error: function(jqXHR, textStatus, errorThrown) 
                {
                    if (loader) {
                        $(loader).html('<center><img src="' + settings.ajaxLoader + '" /><br/><br/>' + errorThrown + '</center>');
                    } else {
                        $(container).html('<center><img src="' + settings.ajaxLoader + '" /><br/><br/>' + errorThrown + '</center>');
                    }
                }
            });
        });
        
        return this;
    };

}( jQuery ));