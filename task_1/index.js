import { encoded, translations } from "./data.js";

console.log("Let's rock");
console.log(encoded, translations);

const decode = (encoded, translations) => {
  const regexId = /Id$/;
  const specialFields = ["groupId", "service", "formatSize", "ca"];
  encoded.forEach((element) => {
    Object.keys(element).forEach((i) => {
      if (specialFields.indexOf(i) === -1 && regexId.test(i))
        if (element[i] in translations) {
          element[i] = translations[element[i]];
        }
    });
  });
  return encoded;
};

const decoded = decode(encoded, translations);

console.log(decoded);
