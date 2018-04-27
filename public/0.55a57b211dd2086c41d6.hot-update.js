webpackHotUpdate(0,{

/***/ "./js/Details.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(\"./node_modules/react/react.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header__ = __webpack_require__(\"./js/Header.jsx\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Spinner__ = __webpack_require__(\"./js/Spinner.jsx\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(\"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actionCreators__ = __webpack_require__(\"./js/actionCreators.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\n\nvar Details = function (_Component) {\n  _inherits(Details, _Component);\n\n  function Details() {\n    _classCallCheck(this, Details);\n\n    return _possibleConstructorReturn(this, _Component.apply(this, arguments));\n  }\n\n  Details.prototype.componentDidMount = function componentDidMount() {\n    if (!this.props.rating) {\n      this.props.getAPIData();\n    }\n  };\n\n  Details.prototype.render = function render() {\n    var _props$show = this.props.show,\n        title = _props$show.title,\n        description = _props$show.description,\n        year = _props$show.year,\n        poster = _props$show.poster,\n        trailer = _props$show.trailer;\n\n    var ratingComponent = void 0;\n    if (this.props.rating) {\n      ratingComponent = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        \"h3\",\n        null,\n        this.props.rating\n      );\n    } else {\n      ratingComponent = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Spinner__[\"a\" /* default */], null);\n    }\n    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n      \"div\",\n      { className: \"details\" },\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Header__[\"a\" /* default */], null),\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        \"section\",\n        null,\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n          \"h1\",\n          null,\n          title\n        ),\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n          \"h2\",\n          null,\n          \"(\",\n          year,\n          \")\"\n        ),\n        ratingComponent,\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\"img\", {\n          src: \"/public/img/posters/\" + poster,\n          alt: \"Poster for \" + title\n        }),\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n          \"p\",\n          null,\n          description\n        )\n      ),\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        \"div\",\n        null,\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\"iframe\", {\n          src: \"https://www.youtube-nocookie.com/embed/\" + trailer + \"?rel=0&amp;controls=0&amp;showinfo=0\",\n          frameBorder: \"0\",\n          allowFullScreen: true,\n          title: \"Trailer for \" + title\n        })\n      )\n    );\n  };\n\n  return Details;\n}(__WEBPACK_IMPORTED_MODULE_0_react__[\"Component\"]);\n\nvar mapStateToProps = function mapStateToProps(state, ownProps) {\n  var apiData = state.apiData[ownProps.show.imdbID] ? state.apiData[ownProps.show.imdbID] : {};\n  return {\n    rating: apiData.rating\n  };\n};\nvar mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {\n  return {\n    getAPIData: function getAPIData() {\n      dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__actionCreators__[\"a\" /* getAPIDetails */])(ownProps.show.imdbID));\n    }\n  };\n};\n\nvar _default = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux__[\"b\" /* connect */])(mapStateToProps, mapDispatchToProps)(Details);\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (_default);\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(Details, \"Details\", \"/Users/erqq/react-course/complete-intro-to-react/js/Details.jsx\");\n\n  __REACT_HOT_LOADER__.register(mapStateToProps, \"mapStateToProps\", \"/Users/erqq/react-course/complete-intro-to-react/js/Details.jsx\");\n\n  __REACT_HOT_LOADER__.register(mapDispatchToProps, \"mapDispatchToProps\", \"/Users/erqq/react-course/complete-intro-to-react/js/Details.jsx\");\n\n  __REACT_HOT_LOADER__.register(_default, \"default\", \"/Users/erqq/react-course/complete-intro-to-react/js/Details.jsx\");\n}();\n\n;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9EZXRhaWxzLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL0RldGFpbHMuanN4PzZjNDkiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4vU3Bpbm5lclwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgZ2V0QVBJRGV0YWlscyB9IGZyb20gXCIuL2FjdGlvbkNyZWF0b3JzXCI7XG5cbnZhciBEZXRhaWxzID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKERldGFpbHMsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIERldGFpbHMoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERldGFpbHMpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBEZXRhaWxzLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5yYXRpbmcpIHtcbiAgICAgIHRoaXMucHJvcHMuZ2V0QVBJRGF0YSgpO1xuICAgIH1cbiAgfTtcblxuICBEZXRhaWxzLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyRzaG93ID0gdGhpcy5wcm9wcy5zaG93LFxuICAgICAgICB0aXRsZSA9IF9wcm9wcyRzaG93LnRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbiA9IF9wcm9wcyRzaG93LmRlc2NyaXB0aW9uLFxuICAgICAgICB5ZWFyID0gX3Byb3BzJHNob3cueWVhcixcbiAgICAgICAgcG9zdGVyID0gX3Byb3BzJHNob3cucG9zdGVyLFxuICAgICAgICB0cmFpbGVyID0gX3Byb3BzJHNob3cudHJhaWxlcjtcblxuICAgIHZhciByYXRpbmdDb21wb25lbnQgPSB2b2lkIDA7XG4gICAgaWYgKHRoaXMucHJvcHMucmF0aW5nKSB7XG4gICAgICByYXRpbmdDb21wb25lbnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBcImgzXCIsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHRoaXMucHJvcHMucmF0aW5nXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByYXRpbmdDb21wb25lbnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFNwaW5uZXIsIG51bGwpO1xuICAgIH1cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IGNsYXNzTmFtZTogXCJkZXRhaWxzXCIgfSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGVyLCBudWxsKSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwic2VjdGlvblwiLFxuICAgICAgICBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIFwiaDFcIixcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIHRpdGxlXG4gICAgICAgICksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgXCJoMlwiLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgXCIoXCIsXG4gICAgICAgICAgeWVhcixcbiAgICAgICAgICBcIilcIlxuICAgICAgICApLFxuICAgICAgICByYXRpbmdDb21wb25lbnQsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge1xuICAgICAgICAgIHNyYzogXCIvcHVibGljL2ltZy9wb3N0ZXJzL1wiICsgcG9zdGVyLFxuICAgICAgICAgIGFsdDogXCJQb3N0ZXIgZm9yIFwiICsgdGl0bGVcbiAgICAgICAgfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICApXG4gICAgICApLFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiLCB7XG4gICAgICAgICAgc3JjOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUtbm9jb29raWUuY29tL2VtYmVkL1wiICsgdHJhaWxlciArIFwiP3JlbD0wJmFtcDtjb250cm9scz0wJmFtcDtzaG93aW5mbz0wXCIsXG4gICAgICAgICAgZnJhbWVCb3JkZXI6IFwiMFwiLFxuICAgICAgICAgIGFsbG93RnVsbFNjcmVlbjogdHJ1ZSxcbiAgICAgICAgICB0aXRsZTogXCJUcmFpbGVyIGZvciBcIiArIHRpdGxlXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gRGV0YWlscztcbn0oQ29tcG9uZW50KTtcblxudmFyIG1hcFN0YXRlVG9Qcm9wcyA9IGZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpIHtcbiAgdmFyIGFwaURhdGEgPSBzdGF0ZS5hcGlEYXRhW293blByb3BzLnNob3cuaW1kYklEXSA/IHN0YXRlLmFwaURhdGFbb3duUHJvcHMuc2hvdy5pbWRiSURdIDoge307XG4gIHJldHVybiB7XG4gICAgcmF0aW5nOiBhcGlEYXRhLnJhdGluZ1xuICB9O1xufTtcbnZhciBtYXBEaXNwYXRjaFRvUHJvcHMgPSBmdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG93blByb3BzKSB7XG4gIHJldHVybiB7XG4gICAgZ2V0QVBJRGF0YTogZnVuY3Rpb24gZ2V0QVBJRGF0YSgpIHtcbiAgICAgIGRpc3BhdGNoKGdldEFQSURldGFpbHMob3duUHJvcHMuc2hvdy5pbWRiSUQpKTtcbiAgICB9XG4gIH07XG59O1xuXG52YXIgX2RlZmF1bHQgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShEZXRhaWxzKTtcblxuZXhwb3J0IGRlZmF1bHQgX2RlZmF1bHQ7XG47XG5cbnZhciBfdGVtcCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHR5cGVvZiBfX1JFQUNUX0hPVF9MT0FERVJfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBfX1JFQUNUX0hPVF9MT0FERVJfXy5yZWdpc3RlcihEZXRhaWxzLCBcIkRldGFpbHNcIiwgXCIvVXNlcnMvZXJxcS9yZWFjdC1jb3Vyc2UvY29tcGxldGUtaW50cm8tdG8tcmVhY3QvanMvRGV0YWlscy5qc3hcIik7XG5cbiAgX19SRUFDVF9IT1RfTE9BREVSX18ucmVnaXN0ZXIobWFwU3RhdGVUb1Byb3BzLCBcIm1hcFN0YXRlVG9Qcm9wc1wiLCBcIi9Vc2Vycy9lcnFxL3JlYWN0LWNvdXJzZS9jb21wbGV0ZS1pbnRyby10by1yZWFjdC9qcy9EZXRhaWxzLmpzeFwiKTtcblxuICBfX1JFQUNUX0hPVF9MT0FERVJfXy5yZWdpc3RlcihtYXBEaXNwYXRjaFRvUHJvcHMsIFwibWFwRGlzcGF0Y2hUb1Byb3BzXCIsIFwiL1VzZXJzL2VycXEvcmVhY3QtY291cnNlL2NvbXBsZXRlLWludHJvLXRvLXJlYWN0L2pzL0RldGFpbHMuanN4XCIpO1xuXG4gIF9fUkVBQ1RfSE9UX0xPQURFUl9fLnJlZ2lzdGVyKF9kZWZhdWx0LCBcImRlZmF1bHRcIiwgXCIvVXNlcnMvZXJxcS9yZWFjdC1jb3Vyc2UvY29tcGxldGUtaW50cm8tdG8tcmVhY3QvanMvRGV0YWlscy5qc3hcIik7XG59KCk7XG5cbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL0RldGFpbHMuanN4XG4vLyBtb2R1bGUgaWQgPSAuL2pzL0RldGFpbHMuanN4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})