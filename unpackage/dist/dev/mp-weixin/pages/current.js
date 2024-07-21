"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      rooms: ["金之间, 13:00 ~ 18:00", "金之间, 13:00 ~ 18:00", "金之间, 13:00 ~ 18:00"]
    };
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.rooms, (room, k0, i0) => {
      return {
        a: common_vendor.t(room)
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
