sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], (JSONModel, Device) => {
    "use strict";

    return {
        createDeviceModel() {
            const model = new JSONModel(Device);
            model.setDefaultBindingMode("OneWay");
            return model;
        }
    };
});
