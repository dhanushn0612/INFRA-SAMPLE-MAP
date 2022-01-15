var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 0.700000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_INFRA_1 = new ol.format.GeoJSON();
var features_INFRA_1 = format_INFRA_1.readFeatures(json_INFRA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INFRA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INFRA_1.addFeatures(features_INFRA_1);
var lyr_INFRA_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INFRA_1, 
                style: style_INFRA_1,
                interactive: true,
                title: '<img src="styles/legend/INFRA_1.png" /> INFRA'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_INFRA_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_INFRA_1];
lyr_INFRA_1.set('fieldAliases', {'PROJECT NA': 'PROJECT NA', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'Features': 'Features', 'Photos': 'Photos', });
lyr_INFRA_1.set('fieldImages', {'PROJECT NA': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'Features': 'TextEdit', 'Photos': 'ExternalResource', });
lyr_INFRA_1.set('fieldLabels', {'PROJECT NA': 'header label', 'LATITUDE': 'header label', 'LONGITUDE': 'header label', 'Features': 'header label', 'Photos': 'header label', });
lyr_INFRA_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});