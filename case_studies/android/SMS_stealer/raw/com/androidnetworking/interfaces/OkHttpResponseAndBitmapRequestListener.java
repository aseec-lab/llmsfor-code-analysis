package com.androidnetworking.interfaces;

import android.graphics.Bitmap;
import com.androidnetworking.error.ANError;
import okhttp3.Response;

public interface OkHttpResponseAndBitmapRequestListener {
  void onError(ANError paramANError);
  
  void onResponse(Response paramResponse, Bitmap paramBitmap);
}


/* Location:              C:\Users\Jason\Downloads\355cd2b71db971dfb0fac1fc391eb4079e2b090025ca2cdc83d4a22a0ed8f082-dex2jar.jar!\com\androidnetworking\interfaces\OkHttpResponseAndBitmapRequestListener.class
 * Java compiler version: 6 (50.0)
 * JD-Core Version:       1.1.3
 */