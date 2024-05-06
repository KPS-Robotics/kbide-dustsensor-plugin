/******************************************************************
 * Ultrasonic HC-SR04 library for KB-IDE by bavensky
 ******************************************************************/

#ifndef DUSTSENSOR_H
#define DUSTSENSOR_H

#include <Arduino.h>


#if ARDUINO < 100
  #include <WProgram.h>
#else
  #include <Arduino.h>
#endif

class DustSensor
{
public:
  DustSensor();
  ~DustSensor();

  void begin(uint8_t _measurePin, uint8_t _ledPower);
  float getDustDensity();


protected:

private:
  int MEASURE_PIN, LEDPOWER;
  int SAMPLING_TIME,DELTA_TIME,SLEEP_TIME;
};

#endif /*ultrasonic_h*/
