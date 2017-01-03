# cordova-plugin-foxitrdk
    Cordova Foxit RDK Plugin For Android
# Installation
    cordova plugin add cordova-plugin-foxitrdk

# Supported platforms
    android

# How To Use
    function success (data) {
        console.log(data);
    }

    function error(data) {
        console.log(data);
    }

    function openDoc () {
        cordova.plugins.FoxitRDK.init(success, error);
        var path = "/mnt/sdcard/getting_started_android.pdf";
        cordova.plugins.FoxitRDK.openDoc(path, success, error);
    }

# Attention
    The product is still in the early stage of development.

# Feedback
