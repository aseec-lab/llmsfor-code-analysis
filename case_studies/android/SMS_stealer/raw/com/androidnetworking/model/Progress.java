package com.androidnetworking.model;

import java.io.Serializable;

public class Progress implements Serializable {
  public long currentBytes;
  
  public long totalBytes;
  
  public Progress(long paramLong1, long paramLong2) {
    this.currentBytes = paramLong1;
    this.totalBytes = paramLong2;
  }
}


/* Location:              C:\Users\Jason\Downloads\355cd2b71db971dfb0fac1fc391eb4079e2b090025ca2cdc83d4a22a0ed8f082-dex2jar.jar!\com\androidnetworking\model\Progress.class
 * Java compiler version: 6 (50.0)
 * JD-Core Version:       1.1.3
 */