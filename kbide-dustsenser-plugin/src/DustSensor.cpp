/******************************************************************
 * Ultrasonic HC-SR04 library for KB-IDE by bavensky
 *****************************************************************/

#include "DustSensor.h"
#include <Arduino.h>

DustSensor::DustSensor() {}
DustSensor::~DustSensor() {}

void DustSensor::begin(uint8_t _measurePin, uint8_t _ledPower)
{
  this->MEASURE_PIN=_measurePin;
  this->LEDPOWER=_ledPower;
  this->SAMPLING_TIME=280;
  this->DELTA_TIME   =40;
  this->SLEEP_TIME   =9680;
  pinMode(this->MEASURE_PIN, INPUT);
  pinMode(this->LEDPOWER, OUTPUT);
}

float DustSensor::getDustDensity(){
  digitalWrite(this->LEDPOWER,LOW);
  delayMicroseconds(this->SAMPLING_TIME);
  int voMeasured = analogRead(this->MEASURE_PIN);
  delayMicroseconds(this->DELTA_TIME);
  digitalWrite(this->LEDPOWER,HIGH);
  delayMicroseconds(this->SLEEP_TIME);
  float calcVoltage = voMeasured * (5.0 / 1024.0);
  return  170 * calcVoltage - 0.1;
}
