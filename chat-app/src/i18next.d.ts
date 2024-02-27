import en from "./i18n/en";
import fa from "./i18n/fa";
declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "fa";
    resources: {
      fa: typeof fa;
      en: typeof en;
    };
    // if you see an error like: "Argument of type 'DefaultTFuncReturn' is not assignable to parameter of type xyz"
    // set returnNull to false (and also in the i18next init options)
    // returnNull: false;
  }
}
