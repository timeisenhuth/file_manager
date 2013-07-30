/**
 * @file
 * Plugin for inserting links with File Manager.
 */

Drupal.filemanager = Drupal.filemanager || {};

(function ($) {

  tinymce.create('tinymce.plugins.filemanager', {
    init : function(editor, url) {
      // Register commands
      editor.addCommand('mceFm', function() {

        if (tinymce.activeEditor.selection.getContent({format: 'text'}) == '') {
          alert('Please select some text to link');
        } else {
          $modal = $('<div />').attr('id', 'snsw-modal');
          $('body').append($modal);

          $modal.dialog({
            dialogClass: 'fm-wrapper',
            modal: true,
            draggable: true,
            resizable: false,
            width: 600,
            position: 'center',
            overlay: {
              backgroundColor: '#000000',
              opacity: 0.4
            },
            zIndex : 210000,
          });

          Drupal.filemanager.data(Drupal.settings.basePath + 'file-manager/select');

        }

      });

      // Register buttons
      editor.addButton('filemanager', {
        title : 'File Manager',
        cmd : 'mceFm',
        image : url + '/images/fm.png'
      });

    },

    getInfo : function() {
      return {
        longname : 'File Manager',
        author : 'Tim Eisenhuth',
        authorurl : 'http://www.previousnext.com.au',
        version : tinymce.majorVersion + "." + tinymce.minorVersion
      };
    }
  });

  // Register plugin
  tinymce.PluginManager.add('filemanager', tinymce.plugins.filemanager);

  // Load the dialog data
  Drupal.filemanager.data = function (url) {
    //content = $('#snsw-modal-content');
    $.ajax({
      url : url,
      beforeSend : function() {
        // Add new throbber
        var throbber = $('<div class="ajax-progress ajax-progress-throbber"><div class="throbber">&nbsp;</div></div>');
        $modal.prepend(throbber);
      },
      success : function(data) {
        // Insert the response.
        $modal.html(data);
        // Delete existing throbbers.
        $('.ajax-progress-throbber', $modal).remove();
      }
    });
  };

})(jQuery);
