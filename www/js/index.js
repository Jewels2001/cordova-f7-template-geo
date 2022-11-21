var app = new Framework7({
    // App root element
    el: '#app',
    routes: [
        {
            path: '/',
            url: 'index.html',
        },
        {
            path: '/page2/',
            url: 'pages/page2.html',
        },
    ],
    // ... other parameters
});
var mainView = app.views.create('.view-main')

var $$ = Dom7;
$$(document).on('page:init', '.page[data-name="page2"]', function () {
    // Page 2 fun here

})

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    var geoOpts = { 
        enableHighAccuracy: true
    };
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOpts);

    $("#geobtn").on("click", function() {
        console.log("clicked!");
        navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOpts);
    })
    

    function geoSuccess(position) {
        console.log(position);
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        $('#currentPos').html(lat + ', ' + lng);
    }

    function geoError(error) {
        alert(error.message);
    }


    var watchID, map, marker;
    $("#startWatch").on("click", function() {
        console.log("Start watching hehe")
        watchID = navigator.geolocation.watchPosition(geoSuccess, geoError, geoOpts);
        $(this).hide()
        $("#stopWatch").show();
    });

    $("#stopWatch").on("click", function() {
        console.log("Stop watching :,(")
        navigator.geolocation.clearWatch(watchID);
        $(this).hide()
        $("#startWatch").show()
    })

    // var map = new google.maps.Map(document.getElementById('map'), {
    //     zoom: 10,
    //     center: {
    //         lat: position.coords.latitude,
    //         lng: position.coords.longitude
    //     }
    // });

    // var marker = new google.maps.Marker({
    //     position: {
    //         lat: position.coords.latitude,
    //         lng: position.coords.longitude
    // },
    //     map: map
    // });

    // Cordova is now initialized. Have fun!


}
