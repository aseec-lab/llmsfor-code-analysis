package androidx.core.widget;

import android.content.res.ColorStateList;
import android.graphics.PorterDuff;

public interface TintableCompoundDrawablesView {
  ColorStateList getSupportCompoundDrawablesTintList();
  
  PorterDuff.Mode getSupportCompoundDrawablesTintMode();
  
  void setSupportCompoundDrawablesTintList(ColorStateList paramColorStateList);
  
  void setSupportCompoundDrawablesTintMode(PorterDuff.Mode paramMode);
}


/* Location:              C:\Users\Jason\Downloads\355cd2b71db971dfb0fac1fc391eb4079e2b090025ca2cdc83d4a22a0ed8f082-dex2jar.jar!\androidx\core\widget\TintableCompoundDrawablesView.class
 * Java compiler version: 6 (50.0)
 * JD-Core Version:       1.1.3
 */