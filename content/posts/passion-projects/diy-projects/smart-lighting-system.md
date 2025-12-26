---
title: "Smart Home DIY: Build Your Own Automated Lighting System"
date: '2025-12-21'
author:
  name: 'Maker Alex Workshop'
  picture: '/images/authors/alex.jpg'
  bio: 'DIY enthusiast and smart home tinkerer. Loves automating everything and sharing knowledge with the community.'
category: 'DIY Projects'
excerpt: 'Step-by-step guide to creating a custom smart lighting solution using Arduino and IoT sensors.'
coverImage: '/images/posts/smart-lighting.jpg'
readingTime: 16
---

## Introduction

In this guide, we'll walk through building a custom smart lighting system using Arduino and some basic electronic components. This project is perfect for beginners looking to dip their toes into home automation.

## Materials Needed

- Arduino Uno or similar microcontroller
- Relay module
- Motion sensor (PIR)
- Light sensor (LDR)
- Jumper wires
- Breadboard
- 5V power supply
- LED strip (optional)

## Step 1: Setting Up the Circuit

1. Connect the PIR motion sensor to the Arduino:
   - VCC to 5V
   - GND to GND
   - OUT to digital pin 2

2. Connect the LDR light sensor:
   - One leg to 5V through a 10K resistor
   - The same leg to analog pin A0
   - Other leg to GND

3. Connect the relay module:
   - VCC to 5V
   - GND to GND
   - IN to digital pin 3

## Step 2: Writing the Code

```arduino
const int pirPin = 2;
const int ldrPin = A0;
const int relayPin = 3;

void setup() {
  pinMode(pirPin, INPUT);
  pinMode(relayPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int motion = digitalRead(pirPin);
  int lightLevel = analogRead(ldrPin);
  
  // If motion is detected and it's dark
  if (motion == HIGH && lightLevel < 500) {
    digitalWrite(relayPin, HIGH); // Turn lights on
    delay(300000); // Keep lights on for 5 minutes
  } else {
    digitalWrite(relayPin, LOW); // Turn lights off
  }
  
  delay(100); // Small delay for stability
}
```

## Step 3: Testing and Calibration

1. Upload the code to your Arduino
2. Test the motion detection by walking in front of the sensor
3. Adjust the light threshold (500 in the code) based on your environment
4. Secure all components in an enclosure

## Advanced Features

- Add WiFi module (like ESP8266) for remote control
- Integrate with voice assistants (Alexa, Google Assistant)
- Create custom lighting schedules
- Add color-changing capabilities with RGB LED strips

## Safety Tips

- Always work with the power off when making connections
- Use appropriate wire gauges for your lighting load
- Keep the circuit away from water and heat sources
- Consider using a fuse for added protection

## Conclusion

This DIY smart lighting system is just the beginning. With some creativity, you can expand it to control other aspects of your home. Happy building!
