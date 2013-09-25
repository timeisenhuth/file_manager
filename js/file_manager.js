(function ($) {

Drupal.behaviors.filemanager = {
  attach: function(context, settings) {
    $('.view-file-manager #edit-submit-file-manager').live('click', function(e){
      tid = $('.view-file-manager #edit-tid').val();
      title = $('.view-file-manager #edit-title').val();
      url = Drupal.settings.basePath + 'file-manager/select?tid=' + tid + '&title=' + title;
      Drupal.filemanager.data(url);

      e.preventDefault();
    });

    $('.view-file-manager .pager a').live('click', function(e) {
      url = $(this).attr('href');
      Drupal.filemanager.data(url);
      e.preventDefault();
    });

    $('.view-file-manager .views-field-nid a').live('click', function(e){
        text = tinymce.activeEditor.selection.getContent({format: 'text'});
        attributes = Drupal.settings.file_manager.attributes;
        attributes.href = $(this).attr('href');
        tinymce.activeEditor.selection.setContent(tinymce.activeEditor.dom.createHTML('a', attributes, text));

        $('#fm-modal').dialog('close');

        e.preventDefault();
      });

  }
};
})(jQuery);
