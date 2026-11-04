sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("com.shinwokkang.sappou1.controller.Main", {
        async onGetStarted() {
            const bundle = await this.getView().getModel("i18n").getResourceBundle();
            // MessageToast.show(bundle.getText("welcomeMessage"));
        }
    });
});
