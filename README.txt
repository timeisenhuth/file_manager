Overview
=======================

The File Manager module is a custom module which handles files as "nodes" to
provide the ability to revision the nodes, as well as, using the Attachment
Links contrib module, provide a static link to a file that will never change
with different versions.

File nodes have a file field and taxonomy term field. The taxnonomy term is on
a custom vocabulary called "File Manager". This acts as a hierarchy for files
and gives the appearance of a folder structure. 

Installation
=======================

Install the module as normal and the install hook will handle setting up the
content types, fields, vocabulary and View. In this version a TinyMCE plugin is
included. This just needs to be enabled in the WYSIWYG button settings. Once
enabled you will see a filing cabinet icon in the WYSIWYG editor toolbar. When
you click it, it will display a list of file nodes and allow you to filter down
into "folders".