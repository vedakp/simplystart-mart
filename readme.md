keytool -genkey -v -keystore simplygrocery.keystore -alias simplygrocery -keyalg RSA -keysize 2048 -validity 10000000

pass=simplystart12345

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore simplygrocery.keystore /Users/pawanvedak/Desktop/Projects/Ionic/gomart/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk.apk simplygrocery

zipalign -v 4 /Users/pawanvedak/Desktop/Projects/Ionic/gomart/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk.apk simplygrocery.apk