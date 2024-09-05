var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_VisitasExtRed_1 = new ol.format.GeoJSON();
var features_VisitasExtRed_1 = format_VisitasExtRed_1.readFeatures(json_VisitasExtRed_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VisitasExtRed_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VisitasExtRed_1.addFeatures(features_VisitasExtRed_1);
var lyr_VisitasExtRed_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VisitasExtRed_1, 
                style: style_VisitasExtRed_1,
                popuplayertitle: "VisitasExtRed",
                interactive: true,
                title: '<img src="styles/legend/VisitasExtRed_1.png" /> VisitasExtRed'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_VisitasExtRed_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_VisitasExtRed_1];
lyr_VisitasExtRed_1.set('fieldAliases', {'Código de Proyecto': 'Código de Proyecto', 'Correlativo Vivienda': 'Correlativo Vivienda', 'Beneficiario(a)': 'Beneficiario(a)', 'Contacto': 'Contacto', 'Departamento': 'Departamento', 'Municipo': 'Municipo', 'Cantón': 'Cantón', 'Caserío': 'Caserío', 'Estado (Habitada o Abandonada)': 'Estado (Habitada o Abandonada)', 'Fecha Visita': 'Fecha Visita', 'Uso Productivo': 'Uso Productivo', 'Densificado': 'Densificado', });
lyr_VisitasExtRed_1.set('fieldImages', {'Código de Proyecto': 'Range', 'Correlativo Vivienda': 'TextEdit', 'Beneficiario(a)': 'TextEdit', 'Contacto': 'TextEdit', 'Departamento': 'TextEdit', 'Municipo': 'TextEdit', 'Cantón': 'TextEdit', 'Caserío': 'TextEdit', 'Estado (Habitada o Abandonada)': 'TextEdit', 'Fecha Visita': 'TextEdit', 'Uso Productivo': 'TextEdit', 'Densificado': 'TextEdit', });
lyr_VisitasExtRed_1.set('fieldLabels', {'Código de Proyecto': 'header label - always visible', 'Correlativo Vivienda': 'no label', 'Beneficiario(a)': 'inline label - always visible', 'Contacto': 'no label', 'Departamento': 'inline label - always visible', 'Municipo': 'inline label - always visible', 'Cantón': 'no label', 'Caserío': 'inline label - always visible', 'Estado (Habitada o Abandonada)': 'no label', 'Fecha Visita': 'no label', 'Uso Productivo': 'no label', 'Densificado': 'no label', });
lyr_VisitasExtRed_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});