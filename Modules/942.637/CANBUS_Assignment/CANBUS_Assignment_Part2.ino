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
// Please note this is the code designed for the SENDER
// Which has a potentiometer connected to port A0 (and 5V/GND)
// As well as a CANBUS Shield
#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <Servo.h>
#include <mcp_can.h>
#include <SPI.h>

// ▓▓▓▓▓▓▓▓ CHANGE CAN ID HERE ▓▓▓▓▓▓▓▓▓
const int canID = 23;
// ▓▓▓▓▓▓▓▓ CHANGE CAN ID HERE ▓▓▓▓▓▓▓▓▓
const int SPI_CS_PIN = 10;

MCP_CAN CAN(SPI_CS_PIN);

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
}


void loop()
{
  int potAngle = analogRead(A0); // Read the analog signal from A0
  // This essentially takes the value of the analog signal and divides it amongst two bytes for sending over CANBUS
  // This operation must be reversed on the receiver's end
  int canAngleH = potAngle >> 5;
  int canAngleL = potAngle << 5;
  unsigned char data[8] = {canAngleH, canAngleL, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00};
  Serial.println(potAngle); // Print to serial for debugging
  CAN.sendMsgBuf(canID, 0, 8, data); // Send the CAN Data. Format is ID/EXTENSION/CHARLENGTH/DATA
  delay(100);
}
// Hi Dad!
