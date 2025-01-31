package com.androidnetworking.common;

public enum Priority {
  HIGH, IMMEDIATE, LOW, MEDIUM;
  
  private static final Priority[] $VALUES;
  
  static {
    HIGH = new Priority("HIGH", 2);
    Priority priority = new Priority("IMMEDIATE", 3);
    IMMEDIATE = priority;
    $VALUES = new Priority[] { LOW, MEDIUM, HIGH, priority };
  }
}


/* Location:              C:\Users\Jason\Downloads\355cd2b71db971dfb0fac1fc391eb4079e2b090025ca2cdc83d4a22a0ed8f082-dex2jar.jar!\com\androidnetworking\common\Priority.class
 * Java compiler version: 6 (50.0)
 * JD-Core Version:       1.1.3
 */