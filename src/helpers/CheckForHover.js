export const check_for_hover = () => {
  var hover_element = document.getElementById("submenu-checkhover");
  return getStyle(hover_element, "border-style") === "dashed" ? true : false;
};

const getStyle = (oElm, strCssRule) => {
  var strValue = "";
  if (document.defaultView && document.defaultView.getComputedStyle) {
    strValue = document.defaultView
      .getComputedStyle(oElm, "")
      .getPropertyValue(strCssRule);
  } else if (oElm.currentStyle) {
    strCssRule = strCssRule.replace(/\-(\w)/g, function (strMatch, p1) {
      return p1.toUpperCase();
    });
    strValue = oElm.currentStyle[strCssRule];
  }
  return strValue;
};
