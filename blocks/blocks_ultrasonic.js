Blockly.Blocks["dustsensor_setup"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldVariable(
          "dustsensor1",
          null,
          ["Plugin.Ultrasonic"],
          ["Plugin.Ultrasonic"],
        ),
        "instance",
      )
      .appendField("setup (MEASURE")
      .appendField(new Blockly.FieldTextInput("4"), "MEASURE")
      .appendField(", LEDPOWER")
      .appendField(new Blockly.FieldTextInput("5"), "LEDPOWER")
      .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["dustsensor_get_dustdensity"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldVariable(
          "dustsensor1",
          null,
          ["Plugin.Ultrasonic"],
          ["Plugin.Ultrasonic"],
        ),
        "instance",
      )
      .appendField("dustdensity");
    this.setOutput(true, "Number");
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
