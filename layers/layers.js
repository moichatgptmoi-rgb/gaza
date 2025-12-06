var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Women_CSOs_Gazacopy_1 = new ol.format.GeoJSON();
var features_Women_CSOs_Gazacopy_1 = format_Women_CSOs_Gazacopy_1.readFeatures(json_Women_CSOs_Gazacopy_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Women_CSOs_Gazacopy_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Women_CSOs_Gazacopy_1.addFeatures(features_Women_CSOs_Gazacopy_1);
var lyr_Women_CSOs_Gazacopy_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Women_CSOs_Gazacopy_1, 
                style: style_Women_CSOs_Gazacopy_1,
                popuplayertitle: 'Women_CSOs_Gaza copy',
                interactive: true,
    title: 'Women_CSOs_Gaza copy<br />\
    <img src="styles/legend/Women_CSOs_Gazacopy_1_0.png" /> Community Development<br />\
    <img src="styles/legend/Women_CSOs_Gazacopy_1_1.png" /> Economic Support<br />\
    <img src="styles/legend/Women_CSOs_Gazacopy_1_2.png" /> Education & Training<br />\
    <img src="styles/legend/Women_CSOs_Gazacopy_1_3.png" /> Legal Awareness<br />\
    <img src="styles/legend/Women_CSOs_Gazacopy_1_4.png" /> Psychosocial Support<br />\
    <img src="styles/legend/Women_CSOs_Gazacopy_1_5.png" /> Women Empowerment<br />\
    <img src="styles/legend/Women_CSOs_Gazacopy_1_6.png" /> <br />' });
var format_Women_CSOs_Gaza_2 = new ol.format.GeoJSON();
var features_Women_CSOs_Gaza_2 = format_Women_CSOs_Gaza_2.readFeatures(json_Women_CSOs_Gaza_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Women_CSOs_Gaza_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Women_CSOs_Gaza_2.addFeatures(features_Women_CSOs_Gaza_2);
cluster_Women_CSOs_Gaza_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Women_CSOs_Gaza_2
});
var lyr_Women_CSOs_Gaza_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Women_CSOs_Gaza_2, 
                style: style_Women_CSOs_Gaza_2,
                popuplayertitle: 'Women_CSOs_Gaza',
                interactive: true,
    title: 'Women_CSOs_Gaza<br />\
    <img src="styles/legend/Women_CSOs_Gaza_2_0.png" /> غير قابل للعمل<br />\
    <img src="styles/legend/Women_CSOs_Gaza_2_1.png" /> غير متضرر<br />\
    <img src="styles/legend/Women_CSOs_Gaza_2_2.png" /> مدمر جزئيًا<br />\
    <img src="styles/legend/Women_CSOs_Gaza_2_3.png" /> مدمر جزئيًا قابل للعمل<br />\
    <img src="styles/legend/Women_CSOs_Gaza_2_4.png" /> مدمر كليًا<br />\
    <img src="styles/legend/Women_CSOs_Gaza_2_5.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Women_CSOs_Gazacopy_1.setVisible(true);lyr_Women_CSOs_Gaza_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Women_CSOs_Gazacopy_1,lyr_Women_CSOs_Gaza_2];
lyr_Women_CSOs_Gazacopy_1.set('fieldAliases', {'ID': 'ID', 'Organization_Name': 'Organization_Name', 'Governorate': 'Governorate', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Beneficiaries': 'Beneficiaries', 'Women_CSO_Updated_ID': 'Women_CSO_Updated_ID', 'Women_CSO_Updated_Arabic_Name': 'Women_CSO_Updated_Arabic_Name', 'Women_CSO_Updated_English_Name': 'Women_CSO_Updated_English_Name', 'Women_CSO_Updated_Work_Field': 'Women_CSO_Updated_Work_Field', 'Women_CSO_Updated_Beneficiaries_Count': 'Women_CSO_Updated_Beneficiaries_Count', 'Women_CSO_Updated_Employees_Count': 'Women_CSO_Updated_Employees_Count', 'Women_CSO_Updated_Challenges_AR': 'Women_CSO_Updated_Challenges_AR', 'Women_CSO_Updated_Challenges_EN': 'Women_CSO_Updated_Challenges_EN', 'Women_CSO_BuildingCondition (1)_ID': 'Women_CSO_BuildingCondition (1)_ID', 'Women_CSO_BuildingCondition (1)_Organization_Name': 'Women_CSO_BuildingCondition (1)_Organization_Name', 'Women_CSO_BuildingCondition (1)_Original_Governorate': 'Women_CSO_BuildingCondition (1)_Original_Governorate', 'Women_CSO_BuildingCondition (1)_Condition': 'Women_CSO_BuildingCondition (1)_Condition', });
lyr_Women_CSOs_Gaza_2.set('fieldAliases', {'ID': 'ID', 'Organization_Name': 'Organization_Name', 'Governorate': 'Governorate', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Beneficiaries': 'Beneficiaries', 'Women_CSO_Updated_ID': 'Women_CSO_Updated_ID', 'Women_CSO_Updated_Arabic_Name': 'Women_CSO_Updated_Arabic_Name', 'Women_CSO_Updated_English_Name': 'Women_CSO_Updated_English_Name', 'Women_CSO_Updated_Work_Field': 'Women_CSO_Updated_Work_Field', 'Women_CSO_Updated_Beneficiaries_Count': 'Women_CSO_Updated_Beneficiaries_Count', 'Women_CSO_Updated_Employees_Count': 'Women_CSO_Updated_Employees_Count', 'Women_CSO_Updated_Challenges_AR': 'Women_CSO_Updated_Challenges_AR', 'Women_CSO_Updated_Challenges_EN': 'Women_CSO_Updated_Challenges_EN', 'Women_CSO_BuildingCondition (1)_ID': 'Women_CSO_BuildingCondition (1)_ID', 'Women_CSO_BuildingCondition (1)_Organization_Name': 'Women_CSO_BuildingCondition (1)_Organization_Name', 'Women_CSO_BuildingCondition (1)_Original_Governorate': 'Women_CSO_BuildingCondition (1)_Original_Governorate', 'Women_CSO_BuildingCondition (1)_Condition': 'Women_CSO_BuildingCondition (1)_Condition', });
lyr_Women_CSOs_Gazacopy_1.set('fieldImages', {'ID': 'Range', 'Organization_Name': 'TextEdit', 'Governorate': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Beneficiaries': 'Range', 'Women_CSO_Updated_ID': 'Range', 'Women_CSO_Updated_Arabic_Name': 'TextEdit', 'Women_CSO_Updated_English_Name': 'TextEdit', 'Women_CSO_Updated_Work_Field': 'TextEdit', 'Women_CSO_Updated_Beneficiaries_Count': 'Range', 'Women_CSO_Updated_Employees_Count': 'Range', 'Women_CSO_Updated_Challenges_AR': 'TextEdit', 'Women_CSO_Updated_Challenges_EN': 'TextEdit', 'Women_CSO_BuildingCondition (1)_ID': 'Range', 'Women_CSO_BuildingCondition (1)_Organization_Name': 'TextEdit', 'Women_CSO_BuildingCondition (1)_Original_Governorate': 'TextEdit', 'Women_CSO_BuildingCondition (1)_Condition': 'TextEdit', });
lyr_Women_CSOs_Gaza_2.set('fieldImages', {'ID': 'Range', 'Organization_Name': 'TextEdit', 'Governorate': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Beneficiaries': 'Range', 'Women_CSO_Updated_ID': 'Range', 'Women_CSO_Updated_Arabic_Name': 'TextEdit', 'Women_CSO_Updated_English_Name': 'TextEdit', 'Women_CSO_Updated_Work_Field': 'TextEdit', 'Women_CSO_Updated_Beneficiaries_Count': 'Range', 'Women_CSO_Updated_Employees_Count': 'Range', 'Women_CSO_Updated_Challenges_AR': 'TextEdit', 'Women_CSO_Updated_Challenges_EN': 'TextEdit', 'Women_CSO_BuildingCondition (1)_ID': 'Range', 'Women_CSO_BuildingCondition (1)_Organization_Name': 'TextEdit', 'Women_CSO_BuildingCondition (1)_Original_Governorate': 'TextEdit', 'Women_CSO_BuildingCondition (1)_Condition': 'TextEdit', });
lyr_Women_CSOs_Gazacopy_1.set('fieldLabels', {'ID': 'no label', 'Organization_Name': 'no label', 'Governorate': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Beneficiaries': 'no label', 'Women_CSO_Updated_ID': 'no label', 'Women_CSO_Updated_Arabic_Name': 'inline label - visible with data', 'Women_CSO_Updated_English_Name': 'no label', 'Women_CSO_Updated_Work_Field': 'inline label - visible with data', 'Women_CSO_Updated_Beneficiaries_Count': 'no label', 'Women_CSO_Updated_Employees_Count': 'no label', 'Women_CSO_Updated_Challenges_AR': 'no label', 'Women_CSO_Updated_Challenges_EN': 'inline label - visible with data', 'Women_CSO_BuildingCondition (1)_ID': 'no label', 'Women_CSO_BuildingCondition (1)_Organization_Name': 'inline label - visible with data', 'Women_CSO_BuildingCondition (1)_Original_Governorate': 'no label', 'Women_CSO_BuildingCondition (1)_Condition': 'inline label - visible with data', });
lyr_Women_CSOs_Gaza_2.set('fieldLabels', {'ID': 'no label', 'Organization_Name': 'no label', 'Governorate': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Beneficiaries': 'no label', 'Women_CSO_Updated_ID': 'no label', 'Women_CSO_Updated_Arabic_Name': 'no label', 'Women_CSO_Updated_English_Name': 'no label', 'Women_CSO_Updated_Work_Field': 'no label', 'Women_CSO_Updated_Beneficiaries_Count': 'inline label - visible with data', 'Women_CSO_Updated_Employees_Count': 'no label', 'Women_CSO_Updated_Challenges_AR': 'no label', 'Women_CSO_Updated_Challenges_EN': 'no label', 'Women_CSO_BuildingCondition (1)_ID': 'no label', 'Women_CSO_BuildingCondition (1)_Organization_Name': 'no label', 'Women_CSO_BuildingCondition (1)_Original_Governorate': 'no label', 'Women_CSO_BuildingCondition (1)_Condition': 'no label', });
lyr_Women_CSOs_Gaza_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});