"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      records: [
        {
          "first": "25000",
          "second": "25000",
          "third": "25000",
          "fourth": "25000"
        },
        {
          "first": "25000",
          "second": "25000",
          "third": "25000",
          "fourth": "25000"
        },
        {
          "first": "25000",
          "second": "25000",
          "third": "25000",
          "fourth": "25000"
        },
        {
          "first": "25000",
          "second": "25000",
          "third": "25000",
          "fourth": "25000"
        },
        {
          "first": "25000",
          "second": "25000",
          "third": "25000",
          "fourth": "25000"
        },
        {
          "first": "25000",
          "second": "25000",
          "third": "25000",
          "fourth": "25000"
        }
      ]
    };
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.records, (record, k0, i0) => {
      return {
        a: common_vendor.t(record.first),
        b: common_vendor.t(record.second),
        c: common_vendor.t(record.third),
        d: common_vendor.t(record.fourth)
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
