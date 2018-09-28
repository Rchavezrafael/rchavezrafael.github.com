var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Terrain',
    'type': 'base',
    source: new ol.source.Stamen({
        layer: 'terrain'
    })
})
]
});
var format_DISTRITOS_UTM_0 = new ol.format.GeoJSON();
var features_DISTRITOS_UTM_0 = format_DISTRITOS_UTM_0.readFeatures(json_DISTRITOS_UTM_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DISTRITOS_UTM_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DISTRITOS_UTM_0.addFeatures(features_DISTRITOS_UTM_0);var lyr_DISTRITOS_UTM_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DISTRITOS_UTM_0, 
                style: style_DISTRITOS_UTM_0,
                title: '<img src="styles/legend/DISTRITOS_UTM_0.png" /> DISTRITOS_UTM'
            });

lyr_DISTRITOS_UTM_0.setVisible(true);
var layersList = [baseLayer,lyr_DISTRITOS_UTM_0];
lyr_DISTRITOS_UTM_0.set('fieldAliases', {'CODIGO_DEP': 'CODIGO_DEP', 'NOMB_DEP': 'NOMB_DEP', 'CODIGO_PRO': 'CODIGO_PRO', 'NOMB_PRO': 'NOMB_PRO', 'CODIGO_DIS': 'CODIGO_DIS', 'NOMB_DIS': 'NOMB_DIS', 'DCTO': 'DCTO', 'LEY': 'LEY', 'FECHA': 'FECHA', 'NOM_CAP': 'NOM_CAP', 'CAT_CAP': 'CAT_CAP', 'ALT_DIST': 'ALT_DIST', 'LAT_DIST': 'LAT_DIST', 'LONG_DIST': 'LONG_DIST', 'REG_NAT': 'REG_NAT', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_DISTRITOS_UTM_0.set('fieldImages', {'CODIGO_DEP': 'TextEdit', 'NOMB_DEP': 'TextEdit', 'CODIGO_PRO': 'TextEdit', 'NOMB_PRO': 'TextEdit', 'CODIGO_DIS': 'TextEdit', 'NOMB_DIS': 'TextEdit', 'DCTO': 'TextEdit', 'LEY': 'TextEdit', 'FECHA': 'TextEdit', 'NOM_CAP': 'TextEdit', 'CAT_CAP': 'TextEdit', 'ALT_DIST': 'TextEdit', 'LAT_DIST': 'TextEdit', 'LONG_DIST': 'TextEdit', 'REG_NAT': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_DISTRITOS_UTM_0.set('fieldLabels', {'CODIGO_DEP': 'no label', 'NOMB_DEP': 'no label', 'CODIGO_PRO': 'no label', 'NOMB_PRO': 'no label', 'CODIGO_DIS': 'no label', 'NOMB_DIS': 'inline label', 'DCTO': 'no label', 'LEY': 'no label', 'FECHA': 'no label', 'NOM_CAP': 'no label', 'CAT_CAP': 'no label', 'ALT_DIST': 'no label', 'LAT_DIST': 'no label', 'LONG_DIST': 'no label', 'REG_NAT': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_DISTRITOS_UTM_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});