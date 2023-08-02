const args = process.argv.slice(2);
const findSubstr = (args) => {
  let maxStr = args.reduce((a, b) => (a.length <= b.length ? a : b));
  let maxLength = maxStr.length;
  for (let l = maxLength; l >= 0; l--) {
    for (let x = 0; x <= maxLength - l; x++) {
      let substr = maxStr.substring(x, x + l);
      if (args.every((e) => ~e.indexOf(substr))) {
        return substr;
      }
    }
  }
};
args < 1 || args.length > 64 ? console.log("") : console.log(findSubstr(args));
