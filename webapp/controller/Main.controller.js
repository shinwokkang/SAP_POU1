sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("com.shinwokkang.sappou1.controller.Main", {
        async onGetStarted() {
            const bundle = await this.getView().getModel("i18n").getResourceBundle();
            MessageToast.show(bundle.getText("welcomeMessage"));

            // 안녕하세요. 테스트 8 작업 내용 입니다.
        }
    });
});
