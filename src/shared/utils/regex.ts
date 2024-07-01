export const Regex = <const>{
  alpha: /^[A-Z]+$/i,
  int: /^\d+$/,
  float: /^[+-]?\d+(\.\d+)?$/,
  url: /^http(s)?:\/\/((\d+\.\d+\.\d+\.\d+)|(([\w-]+\.)+([a-z,A-Z][\w-]*)))(:[1-9][0-9]*)?(\/([\w-.:%+@&=]+[\w- .?:%+@&=]*)?)?(#(.*))?$/,
  currency: RegExp(`^\\d*(?:\\\\[.])?\\d*$`),
  specialSymbols: /[.*+?^${}()|[\]\\]/g,
}
