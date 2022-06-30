
import { get } from "@/util/http";

const tools = {
  getDateStr(addDayCount) {
    var dd = new Date();
    dd.setDate(dd.getDate() - addDayCount);
    var m = (dd.getMonth() + 1) < 10 ? "0" + (dd.getMonth() + 1) : (dd.getMonth() + 1);
    var d = dd.getDate();
    return m + "-" + d;
  },
  isNmber(obj) {
    if (typeof obj === 'number') {
      return !isNaN(obj)
    } else if (typeof obj === 'string') {
      return /^[0-9]*$/.test(obj)
    }
    return false;
  },
  isEthAddress(address) {
    return /^(0x)?[0-9a-fA-F]{40}$/.test(address);
  },
}

export default tools
