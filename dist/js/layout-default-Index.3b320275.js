(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["layout-default-Index"],{df86:function(t,e,a){},ece6:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("default-bar"),a("default-drawer"),a("default-view"),a("default-footer"),a("default-settings")],1)},n=[],u=(a("d3b7"),{name:"DefaultLayout",components:{DefaultBar:function(){return a.e("default-app-bar").then(a.bind(null,"6088"))},DefaultDrawer:function(){return a.e("default-drawer").then(a.bind(null,"51ad"))},DefaultFooter:function(){return a.e("default-footer").then(a.bind(null,"51ef"))},DefaultSettings:function(){return Promise.all([a.e("default-account~default-notifications~default-settings~views-Dashboard"),a.e("default-settings")]).then(a.bind(null,"525c"))},DefaultView:function(){return a.e("default-view").then(a.bind(null,"e812"))}}}),l=u,r=a("2877"),o=a("6544"),s=a.n(o),f=a("5530"),d=(a("df86"),a("7560")),p=a("58df"),c=Object(p["a"])(d["a"]).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark:function(){return this.$vuetify.theme.dark}},beforeCreate:function(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render:function(t){var e=t("div",{staticClass:"v-application--wrap"},this.$slots.default);return t("div",{staticClass:"v-application",class:Object(f["a"])({"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl},this.themeClasses),attrs:{"data-app":!0},domProps:{id:this.id}},[e])}}),h=Object(r["a"])(l,i,n,!1,null,null,null);e["default"]=h.exports;s()(h,{VApp:c})}}]);
//# sourceMappingURL=layout-default-Index.3b320275.js.map