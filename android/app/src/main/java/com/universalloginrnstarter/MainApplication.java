package com.universalloginrnstarter;
import android.support.annotation.NonNull;

import com.facebook.react.ReactPackage;
import com.reactnativenavigation.NavigationApplication;
import com.bitgo.randombytes.RandomBytesPackage;
import co.airbitz.fastcrypto.RNFastCryptoPackage;
import java.util.Arrays;
import java.util.List;



public class MainApplication extends NavigationApplication {

    @Override
    public boolean isDebug() {
	// Make sure you are using BuildConfig from your own application
	return BuildConfig.DEBUG;
    }
    
    protected List<ReactPackage> getPackages() {
	// Add additional packages you require here
	// No need to add RnnPackage and MainReactPackage
	return Arrays.<ReactPackage>asList(
					   // eg. new VectorIconsPackage()
					   new RandomBytesPackage(),
					   new RNFastCryptoPackage()
					   );
    }
    
    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
	return getPackages();
    }

}
