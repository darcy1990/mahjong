"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      href: "https://uniapp.dcloud.io/component/README?id=uniui",
      notice: "xxxxxxxxxxxx",
      rooms: ["金之间, 13:00 ~ 18:00", "金之间, 13:00 ~ 18:00", "金之间, 13:00 ~ 18:00"],
      rrooms: [
        {
          "name": "金之间",
          "img": "../../static/rooms/room1.png",
          "desc": "大洋化学，4口，1层"
        },
        {
          "name": "玉之间",
          "img": "../../static/rooms/room1.png",
          "desc": "大洋化学，4口，1层"
        },
        {
          "name": "铜之间",
          "img": "../../static/rooms/room1.png",
          "desc": "大洋化学，4口，1层"
        }
      ]
    };
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.notice),
    b: common_vendor.f($data.rooms, (room, k0, i0) => {
      return {
        a: common_vendor.t(room)
      };
    }),
    c: common_vendor.f($data.rrooms, (rroom, k0, i0) => {
      return {
        a: common_vendor.t(rroom.name),
        b: common_vendor.t(rroom.desc)
      };
    }),
    d: common_assets._imports_0
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
