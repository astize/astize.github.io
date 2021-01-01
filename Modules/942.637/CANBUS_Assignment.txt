// CANBUS Assignment 26/08/2020
// Levi Dubbelman
// Year 2 ETO
// ID: 190000929
// ▀██▀                        ██     ▀██▀▀█▄
//  ██         ▄▄▄▄  ▄▄▄▄ ▄▄▄ ▄▄▄      ██   ██
//  ██       ▄█▄▄▄██  ▀█▄  █   ██      ██    ██
//  ██       ██        ▀█▄█    ██      ██    ██
// ▄██▄▄▄▄▄█  ▀█▄▄▄▀    ▀█    ▄██▄    ▄██▄▄▄█▀
//                                               ██
// Libraries included are:
// "LiquidCrystal I2C" BY Frank de Barbander (version 1.1.2)
// "Servo" BY Michael Margolis (version 1.1.6)
// "CAN" BY Sandeep Mistry (version 0.3.1)
// "CAN-BUS SHIELD" BY Seeeed studio (version 1.0.0)
// Please note this is the code designed for the RECEIVER
// Which has an LCD screen connnected to 5V, GND, the SDA and SCL ports
// A non-latching button connected to Pin 8 and GND (Pullup)
// A servo motor connected to 5V, GND and Pin 9
// As well as a CAN BUS Shield
#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <Servo.h>
#include <SPI.h>
#include "mcp_can.h"

const int SPI_CS_PIN = 10; // The CANBUS Shield uses Pin 10 for its SPI_CS_PIN
const int servoPin = 9; // Set the pin used to drive the servomotor
int potAngle; // Declare this integer for later use
const int displayAltPin = 8;

Servo servo; // Name the servo

LiquidCrystal_I2C lcd(0x3f, 16, 2); // This particular LCD screen is address 0x3F, with 16 characters and 2 lines

MCP_CAN CAN(SPI_CS_PIN); // Set the CS Pin to use CAN

void setup()
{
  // Set the baud rate
  Serial.begin(115200);

  // Serial monitoring tools for debugging CAN Data

  while (CAN_OK != CAN.begin(CAN_500KBPS)) // Initialize CANBUS with a baud rate of 500KBPS
  {
    Serial.println("Failed to initialize the CAN BUS Shield! Are you sure you're using the right pin?");
    Serial.println("Trying to initalize again...");
    delay(500);
  }
  Serial.println("CAN BUS Shield initalized successfully!");

  lcd.init(); // Initialize the LCD screen
  lcd.backlight(); // Enable the LCD Backlight
  lcd.setCursor(0, 0); // Set the cursor to position 0,0 on boot

  servo.attach(servoPin); // "Attach" the servo motor to the integer servoPin
  pinMode(displayAltPin, INPUT_PULLUP); // Initalize the button as a PULLUP input to avoid using resistors like a CHUMP
}


void loop()
{
  // Frankly, I have no idea what this does. I suppose it's declaring the integers len (length), character array buf (buffer), and id (CANBUS ID)
  unsigned char len = 0;
  unsigned char buf[8];
  unsigned long id = 0;

  // Reversing the operations performed on the analog data to send it over CANBUS
  // I'm not sure if this is the best method to move data > decimal 256 over CANBUS, but it works. I'm also not sure if this reduces the resolution sent over the wire.
  int potAngleL = buf[1] >> 5;
  int potAngleH = buf[0] << 5;
  potAngle = potAngleL + potAngleH; // Adding them back together
  int servoAngle = map(potAngle, 0, 999, 0, 180); // Interpolate the 0-999 analogue signal to a useable degrees number for servo use. Added a buffer either side to prevent shaking of servo


  // LCD Section
  int displayMode = digitalRead(displayAltPin); // There are two modes to the LCD Screen, one displays the angle in degrees and radians, the other shows CANBUS information
      while (CAN_MSGAVAIL == CAN.checkReceive())
    {
      // This reads the CANBUS Data for displaying on the secondary display mode of the LCD Screen
      CAN.readMsgBufID(&id, &len, buf);
      
  if (displayMode == HIGH && id == 23) { // A very basic filter to preventing CANBUS data with a different ID controlling the servo motor
    lcd.setCursor(0, 0); // Set the cursor to position 0,0
    lcd.print("Angle Degs: "); // Print on line 1
    lcd.print(servoAngle); // Print the degrees value previously calculated
    lcd.print("  "); // Add additional blank spaces
    lcd.setCursor(0, 1); // Begin printing to second LCD screen line
    lcd.print("Angle Rads: ");
    lcd.print(servoAngle * 0.01745329); // Calculate the radian value and print it
  } else if (displayMode == LOW && id == 23) {

      // You can probably guess what all of this does I'm not repeating myself
      lcd.setCursor(0, 0);
      lcd.print("CAN ID: ");
      lcd.print(id);
      lcd.print("       ");
      lcd.setCursor(0, 1);
      lcd.print("CAN LENGTH: ");
      lcd.print(len);
      lcd.print("          ");
    } else { // Basically, "bugger off"
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Invalid ID!");
      delay(5000); // Wait 5 seconds before checking the CANBUS data again
    }
  }
  while (CAN_MSGAVAIL == CAN.checkReceive())
  {
    // You can probably guess what all of this does I'm not repeating myself
    CAN.readMsgBufID(&id, &len, buf);
    // Printing more stuff to the serial monitor for debugging
    Serial.print(id);
    Serial.print(",");

    // Run through all bytes in the datastream
    for (int i = 0; i < len; i++)
    {
      Serial.print(buf[i]);
      Serial.print("\t");

    }
    Serial.println();
  }
  // Another filter
     if(id == 23) {
  // Servo section
  servo.write(servoAngle); // Write the degrees value to servo directly

  // Additional functions to loop
  delay(100); // Wait a bit for stability and performance
  }
}
// Hi Mom!
