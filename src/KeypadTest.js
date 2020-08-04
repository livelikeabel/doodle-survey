import React, {useEffect} from 'react'

export const KeypadTest = () => {

  useEffect(() => {
    const publicKey = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAt7ChHKzLa9a2mke3sRkwAU33XjAj++vtugUvhL8dXY0eQxDvcklwqgkemxO2BdXOqXHcctisKXJoH2vnr1uZtOvsxMhGEOh+IaptJ7DWM/YVjzn6PodWNV5PiOiiKnej5YDqa5Zz8hFh2V3sIlOxPYdDGtfKIR/XQC64kOJ/Wn2FcSBEDtuGNW4roTDCWhCfDKb17KQ5nCGQEpKU1RNRsOq9WJPrlH5o4KOjzk6xj9MTbDg5UXRQM5Yo+me7LO5YkWnKE00UXafNSezhGQVFYfW42Er0/9psAsesMvq5WUWIXsyrmfoTFgDWOyvqu0b+PwzDtL8Wbc1RTI3vwQG9aQIDAQAB"
    const keypad = new window.Keypadsuit(publicKey);
    keypad.shuffle_method = keypad.insert_array(0);
    keypad.force_adjust_ui = true;
    keypad.ok_name = "⏎";
    keypad.cancel_name = "<div style='color:red;'>C</div>";
    keypad.password_length = 6;
    keypad.attach (
      document.getElementById("keypad-test"),
    );
  }, [])

  return (
    <>
      <input id='keypad-test' readOnly={true} onClick={() => console.log('hi')}/>
    </>
  )
}
