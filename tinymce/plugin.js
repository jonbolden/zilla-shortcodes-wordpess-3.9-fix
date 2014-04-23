(function($) {
"use strict";   
 

			
 			//Shortcodes
            tinymce.PluginManager.add( 'zillaShortcodes', function( editor, url ) {
				
				editor.addCommand("zillaPopup", function ( a, params )
				{
					var popup = params.identifier;
					tb_show("Insert Zilla Shortcode", url + "/popup.php?popup=" + popup + "&width=" + 800);
				});
     
                editor.addButton( 'zilla_button', {
                    type: 'splitbutton',
                    icon: false,
					title:  'Zilla Shortcodes',
					onclick : function(e) {},
					menu: [
					{text: 'Alerts',onclick:function(){
						editor.execCommand("zillaPopup", false, {title: 'Alerts',identifier: 'alert'})
					}},
					{text: 'Buttons',onclick:function(){
						editor.execCommand("zillaPopup", false, {title: 'Buttons',identifier: 'button'})
					}},
					{text: 'Columns',onclick:function(){
						editor.execCommand("zillaPopup", false, {title: 'Columns',identifier: 'columns'})
					}},
					{text: 'Tabs',onclick:function(){
						editor.execCommand("zillaPopup", false, {title: 'Tabs',identifier: 'tabs'})
					}},
					{text: 'Toggle',onclick:function(){
						editor.execCommand("zillaPopup", false, {title: 'Toggle',identifier: 'toggle'})
					}},
					//List your shortcodes like this
					]
					
                
        	  });
         
          });
         

 
})(jQuery);