#target illustrator

var exportFolder,
    sourceDoc,
    itemsToExport,
    exportDoc,
    overwrite = true, // boolean
    // Accepted values:
    // 8, 9, 10, 11 (cs), 12 (cs2), 13 (cs3), 14 (cs4), 15 (cs5), 16 (cs6), 17 (cc)
    targetVersion = 8;


try {
  if ( app.documents.length > 0 ) {

    itemsToExport = [];
    sourceDoc = app.activeDocument;
    // set to same folder as active document
    exportFolder =  app.activeDocument.path;
    exportDoc = documents.add(DocumentColorSpace.RGB);

    main();

    exportDoc.close(SaveOptions.DONOTSAVECHANGES);
  }
  else{
    throw new Error('There are no documents open. Open a document and try again.');
  }
}
catch(e) {
  alert(e.message, "Script Alert", true);
}

function main() {
  var item;
  app.activeDocument = sourceDoc;
  itemsToExport = getNamedItems(sourceDoc);

  for ( var i = 0, len = itemsToExport.length; i < len; i++ ) {

    item = itemsToExport[i];

    if ( item.typename === 'Artboard' ) {
      exportArtboard(item);
    } else if ( item.typename === 'Layer' ) {
      exportLayer(item);
    } else {
      exportItem(item);
    }

    // Empty export document
    exportDoc.pageItems.removeAll();
  }

}
