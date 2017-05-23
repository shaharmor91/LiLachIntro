$(document).ready(
    function () {

        var JSONObject = {
            "Locations": [
                  {
                      "lat": 32.003207,
                      "lng": 34.827025,
                      "name": "משרדי קרן שלם",
                      "address": "שד' מנחם בגין 5, בית דגן",
                      "icon": ""

                  },
                  {
                      "lat": 32.124539,
                      "lng": 34.828869,
                      "name": "אקים, סניף עיר שמש",
                      "address": "עיר שמש 48, תל אביב יפו",
                      "icon": ""

                  },
                {

                    "lat": 32.112674,
                    "lng": 34.832957,
                    "name": "אקים, סניף לויטה",
                    "address": "לויטה 10, תל אביב יפו",
                    "icon": ""


                },
                {
                    "lat": 32.023194,
                    "lng": 34.805223,
                    "name": "אקים, סניף אזור",
                    "address": "שפינוזה 13, אזור",
                    "icon": ""
                },

{
    "lat": 31.8030708,
    "lng": 34.6491439,
    "name": "אקים, סניף אשדוד",
    "address": "החוחית 3, אשדוד",
    "icon": ""
},

{
    "lat": 31.6524074,
    "lng": 34.5605192,
    "name": "אקים, סניף אשקלון",
    "address": "גיורא יוספטל 15, אשקלון",
    "icon": ""
},

{
    "lat": 31.2390515,
    "lng": 34.787362,
    "name": "אקים, סניף באר-שבע",
    "address": "הרצל 27, באר-שבע",
    "icon": ""
},

{
    "lat": 32.1700864,
    "lng": 34.8357385,
    "name": "אקים, סניף הרצליה",
    "address": "הנדיב 49, הרצליה",
    "icon": ""
},

{
    "lat": 32.4284591,
    "lng": 34.9195233,
    "name": "אקים, סניף חדרה",
    "address": "נורדאו 5, חדרה",
    "icon": ""
},

{
    "lat": 32.0106058,
    "lng": 34.7971472,
    "name": "אקים, סניף חולון",
    "address": "הרוקמים 2, חולון",
    "icon": ""
},

{
    "lat": 32.8086839,
    "lng": 34.9947295,
    "name": "אקים, סניף חיפה",
    "address": "מסדה 6, חיפה",
    "icon": ""
},

{
    "lat": 31.7510535,
    "lng": 35.2160012,
    "name": "אקים, סניף ירושלים",
    "address": "יד חרוצים 19, ירושלים",
    "icon": ""
},

{
    "lat": 32.1882586,
    "lng": 34.8787802,
    "name": "אקים, סניף כפר-סבא",
    "address": "הטייסים 119, כפר-סבא",
    "icon": ""
},

{
    "lat": 32.9194521,
    "lng": 35.2929434,
    "name": "אקים, סניף כרמיאל",
    "address": "רמים 100, כרמיאל",
    "icon": ""
},

{
    "lat": 31.8979849,
    "lng": 35.012262,
    "name": "אקים, סניף מודיעין ",
    "address": "מגדל עוז 5, מודיעין",
    "icon": ""
},

{
    "lat": 32.3276725,
    "lng": 34.8614645,
    "name": "אקים, סניף נתניה ",
    "address": "דרך רזיאל 3, נתניה",
    "icon": ""
},

{
    "lat": 32.937926,
    "lng": 35.080285,
    "name": "אקים, סניף עכו ",
    "address": "הזית 16, עכו",
    "icon": ""
},

{
    "lat": 32.091053,
    "lng": 34.8794125,
    "name": "אקים, סניף פתח-תקווה ",
    "address": "דוד חיון 7, פתח-תקווה",
    "icon": ""
},

{
    "lat": 32.0869633,
    "lng": 34.9545618,
    "name": "אקים, סניף ראש העין ",
    "address": "סמדר 3, ראש העין",
    "icon": ""
},

{
    "lat": 31.9558964,
    "lng": 34.8086174,
    "name": "אקים, סניף ראשון לציון ",
    "address": "מאירוביץ' 44, ראשון לציון",
    "icon": ""
},

{
    "lat": 31.9356903,
    "lng": 34.8631301,
    "name": "אקים, סניף רמלה ",
    "address": "דב הוז 1, רמלה",
    "icon": ""
},

{
    "lat": 32.0801454,
    "lng": 34.8127652,
    "name": "אקים, סניף רמת גן ",
    "address": "ארלוזורוב 24, רמת גן",
    "icon": ""
},

{
    "lat": 32.0722788,
    "lng": 34.7705137,
    "name": "אקים, סניף תל-אביב ",
    "address": "ביאליק 16, תל-אביב",
    "icon": ""
}



            ]

        };
        //ממיר את הJSON למערך      
        var locationArray = [];
        for (var j in JSONObject.Locations) {
            locationArray.push([JSONObject.Locations[j]]);

        }
        //משתנה שיהיה נקודת המרכז
        var KerenShalem = new google.maps.LatLng(locationArray[0][0]);
        var map;

        var markers = [];
        var infos = [];

        function initialize() {

            //כאן יהיו ההגדרות לאתחול המפה
            var mapOptions = {
                center: KerenShalem,
                zoom: 7,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            //הגדרת אתחול המפה בדיב שיצרנו
            map = new google.maps.Map(document.getElementById("myMap"), mapOptions);


            //  הוספת מרקר הבית
            var marker = new google.maps.Marker({
                position: KerenShalem,
                animation: google.maps.Animation.DROP

            });
            marker.setMap(map);

            var infowindow = new google.maps.InfoWindow({
                content: locationArray[0][0].address
            });

            google.maps.event.addListener(marker, 'click', function () {
                infowindow.open(map, marker);
            });


            for (var i = 1; i < locationArray.length; i++) {
                //קריאה לפונקציה להוספת מרקרים מהרשימה
                addMarker(locationArray[i][0], locationArray[i][0].address, locationArray[i][0].icon);
            }



        }


        //פונקציה להוספת מרקר
        function addMarker(Latlng, infoContent, infoIcon) {
            marker = new google.maps.Marker({
                position: Latlng,
                icon: infoIcon,
                map: map,
                animation: google.maps.Animation.DROP,
            });
            //add marker
            marker.setMap(map);

            marker.infowindow = new google.maps.InfoWindow({
                content: infoContent
            });

            //add click event
            google.maps.event.addListener(marker, 'click', function () {
                this.infowindow.open(map, this);
            });
        }



        google.maps.event.addDomListener(window, 'load', initialize);


    });
