"use strict";
(() => {
var exports = {};
exports.id = 7;
exports.ids = [7];
exports.modules = {

/***/ 7827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ preview)
});

;// CONCATENATED MODULE: external "mailgun.js"
const external_mailgun_js_namespaceObject = require("mailgun.js");
var external_mailgun_js_default = /*#__PURE__*/__webpack_require__.n(external_mailgun_js_namespaceObject);
;// CONCATENATED MODULE: external "form-data"
const external_form_data_namespaceObject = require("form-data");
var external_form_data_default = /*#__PURE__*/__webpack_require__.n(external_form_data_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/api/send.js


async function preview(req, res) {
    if (!req.body.email || !req.body.recaptcha) res.status(400).json({
        error: "Missing parameters"
    });
    const sendEmail = async ()=>{
        const mailgun = new (external_mailgun_js_default())((external_form_data_default()));
        const mg = mailgun.client({
            username: "api",
            key: process.env.NEXT_MAILGUN_API_KEY
        });
        let signature = `\n\n${req.body.firstname || ""} ${req.body.lastname || ""}`;
        if (req.body.tel) signature += `\n${req.body.tel}`;
        mg.messages.create(process.env.NEXT_MAILGUN_DOMAIN, {
            from: `${req.body.firstname || ""} ${req.body.lastname || ""} <${req.body.email}>`,
            to: [
                process.env.NEXT_CONTACT_EMAIL
            ],
            subject: req.body.topic,
            text: req.body.message + signature
        }).then((msg)=>{
            return res.status(200).json({
                message: msg
            });
        }).catch((err)=>{
            return res.status(400).json({
                error: err
            });
        }).finally(()=>{
            return res.end();
        });
    };
    fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_RECAPTCHA_SECRET}&response=${req.body.recaptcha}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    }).then((response)=>response.json()
    ).then(async (data)=>{
        if (data.success && data.score > 0.6) {
            await sendEmail();
        } else {
            res.status(400).json({
                error: "Recaptcha failed"
            }).end();
        }
    }).catch((error)=>{
        res.status(400).json({
            error
        }).end();
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7827));
module.exports = __webpack_exports__;

})();