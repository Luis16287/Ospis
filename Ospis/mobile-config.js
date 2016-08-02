// This section sets up some basic app metadata,
// the entire section is optional.
App.info({
  id: 'com.viboz.ospis',
  name: 'OSPIS',
  description: '',
  author: 'Viboz Group',
  email: '',
  website: ''
});


//Google api config
App.accessRule('*');
App.accessRule('*.google.com/*');
App.accessRule('*.googleapis.com/*');
App.accessRule('*.gstatic.com/*');
App.accessRule('*.google-analytics.com/*');

// App.icons({
//   "iphone_2x": "resources/iOS/Resources/icons/Icon-120.png", // 120x120
//   "iphone_3x": "resources/iOS/Resources/icons/Icon-180@3x.png", // 180x180
//   "ipad": "resources/iOS/Resources/icons/Icon-76.png", // 76x76
//   "ipad_2x": "resources/iOS/Resources/icons/Icon-152.png", // 152x152
//   "ipad_pro": "resources/iOS/Resources/icons/Icon-167.png", // 167x167
//   "ios_settings": "resources/iOS/Resources/icons/Icon-29.png", // 29x29
//   "ios_settings_2x": "resources/iOS/Resources/icons/Icon-58.png", // 58x58
//   "ios_settings_3x": "resources/iOS/Resources/icons/Icon-87.png", // 87x87
//   "ios_spotlight": "resources/iOS/Resources/icons/Icon-40.png", // 40x40
//   "ios_spotlight_2x": "resources/iOS/Resources/icons/Icon-80.png", // 80x80
//   "android_mdpi": "resources/Android/res/drawable-mdpi/icon.png", // 48x48
//   "android_hdpi": "resources/Android/res/drawable-hdpi/icon.png", // 72x72
//   "android_xhdpi": "resources/Android/res/drawable-xhdpi/icon.png", // 96x96
//   "android_xxhdpi": "resources/Android/res/drawable-xxhdpi/icon.png", // 144x144
//   "android_xxxhdpi": "resources/Android/res/drawable-xxxhdpi/icon.png" // 192x192
// });
//
// App.launchScreens({
//   "iphone_2x": "resources/iOS/Resources/splash/Default@2x~iphone_640x960.png", // 640x490
//   "iphone5": "resources/iOS/Resources/splash/Default-568h@2x~iphone_640x1136.png", // 640x1136
//   "iphone6": "resources/iOS/Resources/splash/Default-750@2x~iphone6-portrait_750x1334.png", // 750x1334
//   "iphone6p_portrait": "resources/iOS/Resources/splash/Default-1242@3x~iphone6s-portrait_1242x2208.png", // 2208x1242 segun XCode deberia ser 1242x2208
//   "iphone6p_landscape": "resources/iOS/Resources/splash/Default-1242@3x~iphone6s-landscape_2208x1242.png", // 2208x1242 segun XCode deberia ser 1242x2208
//   "ipad_portrait": "resources/iOS/Resources/splash/Default-Portrait~ipad_768x1024.png", // 768x1024
//   "ipad_portrait_2x": "resources/iOS/Resources/splash/Default-Portrait@2x~ipad_1536x2048.png", // 1536x2048
//   "ipad_landscape": "resources/iOS/Resources/splash/Default-Landscape~ipad_1024x768.png", // 1024x768
//   "ipad_landscape_2x": "resources/iOS/Resources/splash/Default-Landscape@2x~ipad_2048x1536.png", // 2048x1536
//   "android_mdpi_portrait": "resources/Android/res/drawable-mdpi/screen.png", // 320x480
//   "android_mdpi_landscape": "resources/Android/res/drawable-land-mdpi/screen.png", // 480x320
//   "android_hdpi_portrait": "resources/Android/res/drawable-hdpi/screen.png", // 480x800
//   "android_hdpi_landscape": "resources/Android/res/drawable-land-hdpi/screen.png", // 800x480
//   "android_xhdpi_portrait": "resources/Android/res/drawable-xhdpi/screen.png", // 720x1280
//   "android_xhdpi_landscape": "resources/Android/res/drawable-land-xhdpi/screen.png", // 1280x720
//   "android_xxhdpi_portrait": "resources/Android/res/drawable-xxhdpi/screen.png", // 1080x1440
//   "android_xxhdpi_landscape": "resources/Android/res/drawable-land-xxhdpi/screen.png" // 1440x1080
// })

// Set PhoneGap/Cordova preferences
App.setPreference('StatusBarOverlaysWebView', 'true');
App.setPreference('StatusBarStyle', 'default');
App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('Orientation', 'default');
App.setPreference('Orientation', 'portrait', 'ios');
//App.setPreference('Orientation', 'portrait', 'android');

// App.configurePlugin('com.phonegap.plugins.facebookconnect', {
//   APP_ID: '762538993874153',
//   APP_NAME: 'Squeeze'
// });
