import { provide, ref } from "vue";
export default {
  setStorage(key, value = null, set = false) {
    if (set) {
      if (value === "toggle") {
        localStorage.setItem(key, !JSON.parse(localStorage.getItem(key)));
      } else {
        localStorage.setItem(key, value);
      }
    } else {
      const getStorageByKey = JSON.parse(localStorage.getItem(key));
      if (getStorageByKey !== null && getStorageByKey !== undefined) {
        return getStorageByKey;
      } else {
        localStorage.setItem(key, JSON.stringify(false));
        return false;
      }
    }
  },
  setDarkMode(payload = null) {
    this.setStorage("dark", payload !== null ? payload : "toggle", true);
    const dark = this.setStorage("dark");
    if (typeof document !== undefined) {
      document.body.classList[dark ? "add" : "remove"]("dark-scrollbars");
      document.documentElement.classList[dark ? "add" : "remove"]("dark");
    }
  },
  langSwitch(lang = null) {
    let htmlEl = document.querySelector("html");
    if (lang) {
      if (lang === "ar") {
        htmlEl.setAttribute("dir", "rtl");
      } else {
        htmlEl.setAttribute("dir", "ltr");
      }
    } else {
      if (this.setStorage("lang") && this.setStorage("lang").id === "ar") {
        htmlEl.setAttribute("dir", "ltr");
        this.setStorage(
          "lang",
          JSON.stringify({ id: "en", name: "English" }),
          true
        );
        document.cookie =
          "lang=" +
          JSON.stringify({
            id: "en",
            name: "English",
          }) +
          ";domain=" +
          window.location.hostname +
          ";path=/";
      } else {
        htmlEl.setAttribute("dir", "rtl");
        this.setStorage(
          "lang",
          JSON.stringify({ id: "ar", name: "Arabic" }),
          true
        );
        document.cookie =
          "lang=" +
          JSON.stringify({
            id: "ar",
            name: "Arabic",
          }) +
          ";domain=" +
          window.location.hostname +
          ";path=/";
      }
    }
  },
  setAsideMenuGroup(key, action = false) {
    if (action) {
      const AsideMenuGroup = this.setStorage("AsideMenuGroup")
        ? this.setStorage("AsideMenuGroup")
        : {};
      if (AsideMenuGroup) {
        AsideMenuGroup[key] = AsideMenuGroup.hasOwnProperty(key)
          ? !AsideMenuGroup[key]
          : true;
      }
      this.setStorage("AsideMenuGroup", JSON.stringify(AsideMenuGroup), true);
    } else {
      if (
        this.setStorage("AsideMenuGroup") !== undefined &&
        this.setStorage("AsideMenuGroup")[key] !== undefined
      ) {
        return this.setStorage("AsideMenuGroup")[key];
      } else {
        const AsideMenuGroup = this.setStorage("AsideMenuGroup")
          ? this.setStorage("AsideMenuGroup")
          : {};
        AsideMenuGroup[key] = true;
        this.setStorage("AsideMenuGroup", JSON.stringify(AsideMenuGroup), true);

        return false;
      }
    }
  },
};
