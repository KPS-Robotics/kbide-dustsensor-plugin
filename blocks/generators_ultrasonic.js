Blockly.JavaScript["dustsensor_setup"] = function(block) {
  var measurePin = block.getFieldValue("MEASURE");
  var ledPowerPin = block.getFieldValue("LEDPOWER");
  var variable_instance = Blockly.JavaScript.variableDB_.getName(
    block.getFieldValue("instance"),
    Blockly.Variables.NAME_TYPE,
  );
  var code = `
  #EXTINC#include <DustSensor.h>#END
  #VARIABLEDustSensor ${variable_instance};#END
  ${variable_instance}.begin(${measurePin}, ${ledPowerPin});
  \n
  `;
  return code;
};

Blockly.JavaScript["dustsensor_get_dustdensity"] = function(block) {
  var variable_instance = Blockly.JavaScript.variableDB_.getName(
    block.getFieldValue("instance"),
    Blockly.Variables.NAME_TYPE,
  );
  var code = `${variable_instance}.getDustDensity()`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};
