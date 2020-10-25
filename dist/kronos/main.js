(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/Uub":
/*!*************************************!*\
  !*** ./src/app/models/SlideType.ts ***!
  \*************************************/
/*! exports provided: SlideType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideType", function() { return SlideType; });
class SlideType {
    constructor(display, idName, index) {
        this.display = display;
        this.idName = idName;
        this.index = index;
    }
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\AngularJS-Projects\kronos\src\main.ts */"zUnb");


/***/ }),

/***/ "0jtZ":
/*!****************************************************************!*\
  !*** ./src/app/post/view/family-tree/family-tree.component.ts ***!
  \****************************************************************/
/*! exports provided: FamilyTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyTreeComponent", function() { return FamilyTreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _post_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../post.component */ "fQWx");



class FamilyTreeComponent extends _post_component__WEBPACK_IMPORTED_MODULE_1__["PostComponent"] {
}
FamilyTreeComponent.ɵfac = function FamilyTreeComponent_Factory(t) { return ɵFamilyTreeComponent_BaseFactory(t || FamilyTreeComponent); };
FamilyTreeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FamilyTreeComponent, selectors: [["family-tree"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 0, template: function FamilyTreeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "family-tree works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3Qvdmlldy9mYW1pbHktdHJlZS9mYW1pbHktdHJlZS5jb21wb25lbnQuY3NzIn0= */"] });
const ɵFamilyTreeComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FamilyTreeComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FamilyTreeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'family-tree',
                templateUrl: './family-tree.component.html',
                styleUrls: ['./family-tree.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "4o4a":
/*!**********************************************************!*\
  !*** ./src/app/post/view/timeline/timeline.component.ts ***!
  \**********************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function (a1, a2) { return ["/post", a1, a2, "timeline", "timeline", 1]; };
class TimelineComponent {
    constructor() {
        this.tlData = {
            title: [],
            date: [],
            events: [],
            eras: []
        };
    }
    ngOnInit() {
        this.getData();
        this.tl = new TL.Timeline('timeline-embed', this.tlData, this.tlConfig);
    }
    getData() {
        let modelConfig = {
            debug: false,
            height: "this._el.container.offsetHeight",
            width: "this._el.container.offsetWidth",
            is_embed: true,
            hash_bookmark: false,
            default_bg_color: "white",
            scale_factor: 2,
            initial_zoom: "",
            zoom_sequence: [0.5, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89],
            timenav_position: "bottom",
            optimal_tick_width: 100,
            base_class: "tl-timeline",
            timenav_height: 150,
            timenav_height_percentage: 25,
            timenav_mobile_height_percentage: 40,
            timenav_height_min: 150,
            marker_height_min: 30,
            marker_width_min: 100,
            marker_padding: 5,
            start_at_slide: 0,
            start_at_end: false,
            menubar_height: 0,
            use_bc: false,
            duration: 1000,
            ease: "TL.Ease.easeInOutQuint",
            dragging: true,
            trackResize: true,
            slide_padding_lr: 100,
            slide_default_fade: "0%",
            language: "en",
            ga_property_id: null,
            track_events: ['back_to_start', 'nav_next', 'nav_previous', 'zoom_in', 'zoom_out']
        };
        let modelTitleData = {
            text: {
                headline: "test headline",
                text: "test text"
            },
            background: {},
            unique_id: ''
        };
        let modelEventData = {
            start_date: {
                year: 1224,
                month: 2,
                day: 3,
                display_date: 'test display'
            },
            text: {
                headline: "test headline",
                text: "test text"
            },
            media: {
                url: '',
                caption: '',
                credit: '',
                thumbnail: '',
                alt: '',
                title: '',
                link: ''
            },
            background: {
                url: '',
                color: 'AliceBlue	'
            },
            autolink: '',
            unique_id: ''
        };
        let modelEventSpanData = {
            start_date: {
                year: 444,
                month: 2,
                day: 3,
                display_date: ''
            },
            end_date: {
                year: 1222,
                month: 2,
                day: 3,
                display_date: 'test display'
            },
            text: {
                headline: "test headline",
                text: "test text"
            },
            media: {
                url: '',
                caption: '',
                credit: '',
                thumbnail: '',
                alt: '',
                title: '',
                link: ''
            },
            background: {
                url: '../../assets/catagory/article.jpg',
                color: 'AliceBlue'
            },
            autolink: '',
            unique_id: ''
        };
        let modelEraData = {
            start_date: {
                year: 123,
                month: 2,
                day: 3,
                display_date: 'test display'
            },
            end_date: {
                year: 333,
                month: 2,
                day: 3,
                display_date: 'test display'
            },
            text: {
                headline: "test headline",
                text: "test text"
            },
        };
        let modelDateData = {
            text: {
                headline: "test headline",
                text: "test text"
            },
            media: {
                url: '',
                caption: '',
                credit: '',
                thumbnail: '',
                alt: '',
                title: '',
                link: ''
            },
            background: {
                url: '',
                color: ''
            },
            autolink: '',
            unique_id: ''
        };
        this.tlConfig = modelConfig;
        this.tlData["title"].push(modelTitleData);
        this.tlData["events"].push(modelEventData);
        this.tlData["events"].push(modelEventSpanData);
        this.tlData["eras"].push(modelEraData);
    }
}
TimelineComponent.ɵfac = function TimelineComponent_Factory(t) { return new (t || TimelineComponent)(); };
TimelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimelineComponent, selectors: [["timelinePage"]], inputs: { id: "id", fandomId: "fandomId", type: "type" }, decls: 5, vars: 4, consts: [["id", "timeline-embed", 2, "width", "100%", "height", "80vh"], ["href", "#", 1, "btn", "btn-dark", "float-right", 3, "routerLink"]], template: function TimelineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "timeline works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx.fandomId, ctx.id));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3Qvdmlldy90aW1lbGluZS90aW1lbGluZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimelineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'timelinePage',
                templateUrl: './timeline.component.html',
                styleUrls: ['./timeline.component.css']
            }]
    }], function () { return []; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], fandomId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "6zx5":
/*!********************************************************************!*\
  !*** ./src/app/post/view/search-fandom/search-fandom.component.ts ***!
  \********************************************************************/
/*! exports provided: SearchFandomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFandomComponent", function() { return SearchFandomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _page_components_list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../page-components/list/list.component */ "QaDl");




const _c0 = function (a1, a2) { return ["/post", a1, a2, "fandom", "fandom", 0]; };
const _c1 = function (a1) { return ["/searchfandom", a1]; };
const _c2 = function (a1, a2) { return ["/searchfandom", a1, a2, "post", "article"]; };
const _c3 = function (a1, a2) { return ["/searchfandom", a1, a2, "post", "character"]; };
const _c4 = function (a1, a2) { return ["/searchfandom", a1, a2, "post", "event"]; };
const _c5 = function (a1, a2) { return ["/searchfandom", a1, a2, "post", "geography"]; };
class SearchFandomComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params.id;
            this.name = params.name;
            this.type = params.type;
            this.catagory = params.catagory;
        });
    }
}
SearchFandomComponent.ɵfac = function SearchFandomComponent_Factory(t) { return new (t || SearchFandomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
SearchFandomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchFandomComponent, selectors: [["app-search-fandom"]], decls: 25, vars: 27, consts: [[1, "fluid-container", "view-page-container"], [1, "fluid-container", "view-content-container"], ["role", "navigation", 1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], ["href", "#", 1, "navbar-brand", 3, "routerLink"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "dropdown"], ["id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], [1, "dropdown-item", 3, "routerLink"], ["id", "list-content", 1, "fluid-container", "page-content"], [3, "fandomId", "catagory", "type"]], template: function SearchFandomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Explore ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Articles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Characters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Geography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "list", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c0, ctx.id, ctx.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, ctx.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](15, _c2, ctx.id, ctx.name));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c3, ctx.id, ctx.name));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](21, _c4, ctx.id, ctx.name));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](24, _c5, ctx.id, ctx.name));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fandomId", ctx.id)("catagory", ctx.catagory)("type", ctx.type);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _page_components_list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"]], styles: [".float-right-nav[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.view-page-container[_ngcontent-%COMP%] {\r\n    background-color: grey;\r\n\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    min-height: 100vh;\r\n}\r\n\r\n.view-content-container[_ngcontent-%COMP%] {\r\n    padding: 2vh;\r\n}\r\n\r\n.page-content[_ngcontent-%COMP%] {\r\n    background-color: wheat;   \r\n}\r\n\r\n.row[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    margin: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC92aWV3L3NlYXJjaC1mYW5kb20vc2VhcmNoLWZhbmRvbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNCQUFzQjs7SUFFdEIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9wb3N0L3ZpZXcvc2VhcmNoLWZhbmRvbS9zZWFyY2gtZmFuZG9tLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxvYXQtcmlnaHQtbmF2IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnZpZXctcGFnZS1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4udmlldy1jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAydmg7XHJcbn1cclxuXHJcbi5wYWdlLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7ICAgXHJcbn1cclxuXHJcbi5yb3cge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchFandomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search-fandom',
                templateUrl: './search-fandom.component.html',
                styleUrls: ['./search-fandom.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "9Z7n":
/*!************************************************!*\
  !*** ./src/app/post/view/map/map.component.ts ***!
  \************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MapComponent {
    constructor() {
    }
    ngOnInit() {
        // storymap_data can be an URL or a Javascript object
        var storymap_data = '//storymap.knightlab.com/static/demo/demo.json';
        // certain settings must be passed within a separate options object
        var storymap_options = {};
        this.storymap = new VCO.StoryMap('mapdiv', storymap_data, storymap_options);
        window.onresize = function (event) {
            this.storymap.updateDisplay(); // this isn't automatic
        };
    }
    getData() {
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["map"]], decls: 3, vars: 0, consts: [["id", "mapdiv", 2, "width", "100%", "height", "600px"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "map works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3Qvdmlldy9tYXAvbWFwLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'map',
                templateUrl: './map.component.html',
                styleUrls: ['./map.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 1, vars: 0, consts: [["id", "home", 1, "fluid-container"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: ["#home[_ngcontent-%COMP%] {\r\n    min-height: 100vh;\r\n    background-image: url('time-hand-background.png');\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsaURBQThEO0lBQzlELDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0Isc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaG9tZSB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL3RpbWUtaGFuZC1iYWNrZ3JvdW5kLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DNut":
/*!********************************************************!*\
  !*** ./src/app/fandoms-list/fandoms-list.component.ts ***!
  \********************************************************/
/*! exports provided: FandomsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FandomsListComponent", function() { return FandomsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _post_page_components_list_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../post/page-components/list/list.component */ "QaDl");



class FandomsListComponent {
    constructor() { }
    ngOnInit() {
    }
}
FandomsListComponent.ɵfac = function FandomsListComponent_Factory(t) { return new (t || FandomsListComponent)(); };
FandomsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FandomsListComponent, selectors: [["app-fandoms-list"]], decls: 4, vars: 0, consts: [[1, "container-fluid", "page-content"], [1, "row", "banner"], [1, "container-fluid"]], template: function FandomsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_post_page_components_list_list_component__WEBPACK_IMPORTED_MODULE_1__["ListComponent"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n  overflow-x: hidden; \r\n}\r\n\r\n.container-fluid[_ngcontent-%COMP%] {\r\n  background-color: grey;\r\n  margin: 0;\r\n  padding: 0;\r\n  min-height: 100vh;\r\n}\r\n\r\n.capitalize[_ngcontent-%COMP%] {\r\n  text-transform: capitalize;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  padding-top: 56px;\r\n}\r\n\r\n@media (max-width: 991.98px) {\r\n  .offcanvas-collapse[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 56px; \r\n    bottom: 0;\r\n    left: 100%;\r\n    width: 100%;\r\n    padding-right: 1rem;\r\n    padding-left: 1rem;\r\n    overflow-y: auto;\r\n    visibility: hidden;\r\n    background-color: #343a40;\r\n    transition-timing-function: ease-in-out;\r\n    transition-duration: .3s;\r\n    transition-property: left, visibility;\r\n  }\r\n  .offcanvas-collapse.open[_ngcontent-%COMP%] {\r\n    left: 0;\r\n    visibility: visible;\r\n  }\r\n}\r\n\r\n.nav-scroller[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  z-index: 2;\r\n  height: 2.75rem;\r\n  overflow-y: hidden;\r\n}\r\n\r\n.nav-scroller[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: nowrap;\r\n  padding-bottom: 1rem;\r\n  margin-top: -1px;\r\n  overflow-x: auto;\r\n  color: rgba(255, 255, 255, .75);\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  -webkit-overflow-scrolling: touch;\r\n}\r\n\r\n.nav-underline[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n  padding-top: .75rem;\r\n  padding-bottom: .75rem;\r\n  font-size: .875rem;\r\n  color: #6c757d;\r\n}\r\n\r\n.nav-underline[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\r\n  color: #007bff;\r\n}\r\n\r\n.nav-underline[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n  color: #343a40;\r\n}\r\n\r\n.text-white-50[_ngcontent-%COMP%] { color: rgba(255, 255, 255, .5); }\r\n\r\n.bg-purple[_ngcontent-%COMP%] { background-color: #6f42c1; }\r\n\r\n.border-bottom[_ngcontent-%COMP%] { border-bottom: 1px solid #e5e5e5; }\r\n\r\n.box-shadow[_ngcontent-%COMP%] { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }\r\n\r\n.lh-100[_ngcontent-%COMP%] { line-height: 1; }\r\n\r\n.lh-125[_ngcontent-%COMP%] { line-height: 1.25; }\r\n\r\n.lh-150[_ngcontent-%COMP%] { line-height: 1.5; }\r\n\r\nul[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFuZG9tcy1saXN0L2ZhbmRvbXMtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGtCQUFrQixFQUFFLHFDQUFxQztBQUMzRDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLFNBQVMsRUFBRSxxQkFBcUI7SUFDaEMsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6Qix1Q0FBdUM7SUFDdkMsd0JBQXdCO0lBQ3hCLHFDQUFxQztFQUN2QztFQUNBO0lBQ0UsT0FBTztJQUNQLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBRUUsYUFBYTtFQUViLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBLGlCQUFpQiw4QkFBOEIsRUFBRTs7QUFFakQsYUFBYSx5QkFBeUIsRUFBRTs7QUFFeEMsaUJBQWlCLGdDQUFnQyxFQUFFOztBQUVuRCxjQUFjLDhDQUE4QyxFQUFFOztBQUU5RCxVQUFVLGNBQWMsRUFBRTs7QUFDMUIsVUFBVSxpQkFBaUIsRUFBRTs7QUFDN0IsVUFBVSxnQkFBZ0IsRUFBRTs7QUFFNUI7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2ZhbmRvbXMtbGlzdC9mYW5kb21zLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsXHJcbmJvZHkge1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjsgLyogUHJldmVudCBzY3JvbGwgb24gbmFycm93IGRldmljZXMgKi9cclxufVxyXG5cclxuLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmNhcGl0YWxpemUge1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBwYWRkaW5nLXRvcDogNTZweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XHJcbiAgLm9mZmNhbnZhcy1jb2xsYXBzZSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDU2cHg7IC8qIEhlaWdodCBvZiBuYXZiYXIgKi9cclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcclxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQsIHZpc2liaWxpdHk7XHJcbiAgfVxyXG4gIC5vZmZjYW52YXMtY29sbGFwc2Uub3BlbiB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB9XHJcbn1cclxuXHJcbi5uYXYtc2Nyb2xsZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyO1xyXG4gIGhlaWdodDogMi43NXJlbTtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbn1cclxuXHJcbi5uYXYtc2Nyb2xsZXIgLm5hdiB7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtbXMtZmxleC13cmFwOiBub3dyYXA7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgbWFyZ2luLXRvcDogLTFweDtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC43NSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG59XHJcblxyXG4ubmF2LXVuZGVybGluZSAubmF2LWxpbmsge1xyXG4gIHBhZGRpbmctdG9wOiAuNzVyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IC43NXJlbTtcclxuICBmb250LXNpemU6IC44NzVyZW07XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbn1cclxuXHJcbi5uYXYtdW5kZXJsaW5lIC5uYXYtbGluazpob3ZlciB7XHJcbiAgY29sb3I6ICMwMDdiZmY7XHJcbn1cclxuXHJcbi5uYXYtdW5kZXJsaW5lIC5hY3RpdmUge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICMzNDNhNDA7XHJcbn1cclxuXHJcbi50ZXh0LXdoaXRlLTUwIHsgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpOyB9XHJcblxyXG4uYmctcHVycGxlIHsgYmFja2dyb3VuZC1jb2xvcjogIzZmNDJjMTsgfVxyXG5cclxuLmJvcmRlci1ib3R0b20geyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U1ZTVlNTsgfVxyXG5cclxuLmJveC1zaGFkb3cgeyBib3gtc2hhZG93OiAwIC4yNXJlbSAuNzVyZW0gcmdiYSgwLCAwLCAwLCAuMDUpOyB9XHJcblxyXG4ubGgtMTAwIHsgbGluZS1oZWlnaHQ6IDE7IH1cclxuLmxoLTEyNSB7IGxpbmUtaGVpZ2h0OiAxLjI1OyB9XHJcbi5saC0xNTAgeyBsaW5lLWhlaWdodDogMS41OyB9XHJcblxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FandomsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-fandoms-list',
                templateUrl: './fandoms-list.component.html',
                styleUrls: ['./fandoms-list.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ENZJ":
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class PostService {
    constructor(http) {
        this.http = http;
        this.url = "http://kronosfandomtimelines.com/posts/";
    }
    fetch(id) {
        return this.http.get(this.url + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((_) => console.log('fetch post')));
    }
    fetchAll() {
        return this.http.get(this.url, { responseType: "json" }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((_) => console.log('fetch all posts')));
    }
    fetchAllOf(type) {
        return this.http.get(this.url + "type/" + type, { responseType: "json" }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((_) => console.log('fetch all posts')));
    }
    fetchAllOfFandom(id) {
        return this.http.get(this.url + "fandom/" + id, { responseType: "json" }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((_) => console.log('fetch all posts')));
    }
    fetchAllOfFromFandomOfType(fandomId, catagory) {
        return this.http.get(this.url + "fandom/" + fandomId + "/" + catagory, { responseType: "json" }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((_) => console.log('fetch all posts')));
    }
    post(data) {
        return this.http.post(this.url, data);
    }
    put(data, id) {
        return this.http.put(this.url + id, data);
    }
    viewed(id) {
        return this.http.put(this.url + "views/" + id, {});
    }
}
PostService.ɵfac = function PostService_Factory(t) { return new (t || PostService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PostService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostService, factory: PostService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "GYVs":
/*!********************************************************************!*\
  !*** ./src/app/post/edit/forms/map-create/map-create.component.ts ***!
  \********************************************************************/
/*! exports provided: MapCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapCreateComponent", function() { return MapCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../create.component */ "V4WK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/post.service */ "ENZJ");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/image.service */ "mnRn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







class MapCreateComponent extends _create_component__WEBPACK_IMPORTED_MODULE_1__["CreateComponent"] {
    constructor(formBuilder, http, imageService, router) {
        super(formBuilder, http, imageService, router);
        this.formBuilder = formBuilder;
        this.http = http;
        this.imageService = imageService;
        this.router = router;
    }
    ngOnInit() {
        this.postForm = this.formBuilder.group({
            pageTitle: ['insert title'],
            sections: this.formBuilder.array([]),
            references: this.formBuilder.array([])
        });
        if (this.id != -1) {
            this.getData();
        }
    }
    getData() {
        this.http.fetch(this.id).subscribe(data => {
            this.post = data[0][0];
            this.postForm.patchValue({
                theme: this.post['theme'],
                name: this.post['name'],
                description: this.post['description'],
                updator: this.post['updator'],
                creator: this.post['creator']
            });
            this.post.data['sections'].forEach(value => {
                this.loadSection('sections', value);
            });
        });
    }
}
MapCreateComponent.ɵfac = function MapCreateComponent_Factory(t) { return new (t || MapCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_image_service__WEBPACK_IMPORTED_MODULE_4__["ImageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
MapCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapCreateComponent, selectors: [["map-create"]], inputs: { id: "id", fandomId: "fandomId", type: "type", catagory: "catagory" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 0, template: function MapCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "map-create works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QvZWRpdC9mb3Jtcy9tYXAtY3JlYXRlL21hcC1jcmVhdGUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'map-create',
                templateUrl: './map-create.component.html',
                styleUrls: ['./map-create.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"] }, { type: _services_image_service__WEBPACK_IMPORTED_MODULE_4__["ImageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], fandomId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], catagory: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "QaDl":
/*!*************************************************************!*\
  !*** ./src/app/post/page-components/list/list.component.ts ***!
  \*************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/post.service */ "ENZJ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _list_element_list_element_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-element/list-element.component */ "x1AO");








function ListComponent_li_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "list-element", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", post_r1);
} }
const _c0 = function (a1, a2, a3, a4) { return ["/post", a1, a2, a3, a4, 1]; };
class ListComponent {
    constructor(postService) {
        this.postService = postService;
    }
    ngOnInit() {
        this.getPostsData();
        this.searchList();
    }
    getPostsData() {
        if (this.fandomId !== undefined) {
            console.log("fandomId != undefined");
            if (this.catagory !== undefined) {
                console.log("catagory != undefined");
                console.log("Catagory:" + this.catagory);
                this.posts$ = this.postService.fetchAllOfFromFandomOfType(this.fandomId, this.catagory);
            }
            else {
                console.log("catagory = undefined");
                this.catagory = 'article';
                this.type = 'post';
                this.posts$ = this.postService.fetchAllOfFandom(this.fandomId);
            }
        }
        else {
            console.log("fandomId = undefined");
            this.fandomId = -1;
            this.catagory = 'fandom';
            this.type = 'fandom';
            console.log(this.posts$);
            this.posts$ = this.postService.fetchAllOf('fandom');
            console.log(this.posts$);
        }
    }
    searchList() {
        jquery__WEBPACK_IMPORTED_MODULE_1__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__("#search").on("keyup", function () {
                var value = jquery__WEBPACK_IMPORTED_MODULE_1__(this).val().toLowerCase();
                jquery__WEBPACK_IMPORTED_MODULE_1__("#list li").filter(function () {
                    jquery__WEBPACK_IMPORTED_MODULE_1__(this).toggle(jquery__WEBPACK_IMPORTED_MODULE_1__(this).text().toLowerCase().indexOf(value) > -1);
                });
            });
        });
    }
    sortList(order) {
        this.sortAlphabetatically(order);
    }
    sortAlphabetatically(order) {
        var ul = document.getElementById("#list");
        var lis = ul.getElementsByTagName("li");
        var vals = [];
        // Populate the array
        for (var i = 0, l = lis.length; i < l; i++)
            vals.push(lis[i].innerHTML);
        // Sort it
        vals.sort();
        // Sometimes you gotta DESC
        if (order) {
            vals.reverse();
        }
        // Change the list on the page
        for (var i = 0, l = lis.length; i < l; i++) {
            lis[i].innerHTML = vals[i];
        }
    }
    sortCreated(order) {
    }
    sortUpdated(order) {
    }
    sortViews(order) {
    }
    sortLikes(order) {
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"])); };
ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["list"]], inputs: { fandomId: "fandomId", catagory: "catagory", type: "type" }, decls: 32, vars: 12, consts: [["id", "list", 1, "container-fluid"], [1, "row", "banner"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12", "col-main"], [1, "container"], [1, "d-flex", "align-items-center", "p-3", "my-3", "text-white-50", "bg-purple", "rounded", "box-shadow"], [1, "col-12"], [1, "float-left"], [1, "mb-0", "text-white", "lh-100", "capitalize"], [1, "mb-0", "text-white", "lh-100"], ["data-style", "btn-success", 1, "selectpicker"], [1, "float-right"], ["id", "search", "type", "text", 1, "form-control", 3, "placeholder"], ["href", "#", 1, "btn", "btn-dark", "float-right", 3, "routerLink"], ["id", "list"], ["class", "my-3 p-3 bg-white rounded box-shadow", 4, "ngFor", "ngForOf"], [1, "my-3", "p-3", "bg-white", "rounded", "box-shadow"], [3, "post"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sort by...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Created");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Alphetically");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Likes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Views");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ListComponent_li_30_Template, 2, 1, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.catagory);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", "Search " + ctx.catagory);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](7, _c0, ctx.fandomId, -1, ctx.type, ctx.catagory));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("Create " + ctx.catagory);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 5, ctx.posts$));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _list_element_list_element_component__WEBPACK_IMPORTED_MODULE_6__["ListElementComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".capitalize[_ngcontent-%COMP%] {\r\n  text-transform: capitalize;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  padding-top: 56px;\r\n}\r\n\r\n@media (max-width: 991.98px) {\r\n  .offcanvas-collapse[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 56px; \r\n    bottom: 0;\r\n    left: 100%;\r\n    width: 100%;\r\n    padding-right: 1rem;\r\n    padding-left: 1rem;\r\n    overflow-y: auto;\r\n    visibility: hidden;\r\n    background-color: #343a40;\r\n    transition-timing-function: ease-in-out;\r\n    transition-duration: .3s;\r\n    transition-property: left, visibility;\r\n  }\r\n  .offcanvas-collapse.open[_ngcontent-%COMP%] {\r\n    left: 0;\r\n    visibility: visible;\r\n  }\r\n}\r\n\r\n.nav-scroller[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  z-index: 2;\r\n  height: 2.75rem;\r\n  overflow-y: hidden;\r\n}\r\n\r\n.nav-scroller[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: nowrap;\r\n  padding-bottom: 1rem;\r\n  margin-top: -1px;\r\n  overflow-x: auto;\r\n  color: rgba(255, 255, 255, .75);\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  -webkit-overflow-scrolling: touch;\r\n}\r\n\r\n.nav-underline[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n  padding-top: .75rem;\r\n  padding-bottom: .75rem;\r\n  font-size: .875rem;\r\n  color: #6c757d;\r\n}\r\n\r\n.nav-underline[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\r\n  color: #007bff;\r\n}\r\n\r\n.nav-underline[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n  color: #343a40;\r\n}\r\n\r\n.text-white-50[_ngcontent-%COMP%] { color: rgba(255, 255, 255, .5); }\r\n\r\n.bg-purple[_ngcontent-%COMP%] { background-color: #6f42c1; }\r\n\r\n.border-bottom[_ngcontent-%COMP%] { border-bottom: 1px solid #e5e5e5; }\r\n\r\n.box-shadow[_ngcontent-%COMP%] { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }\r\n\r\n.lh-100[_ngcontent-%COMP%] { line-height: 1; }\r\n\r\n.lh-125[_ngcontent-%COMP%] { line-height: 1.25; }\r\n\r\n.lh-150[_ngcontent-%COMP%] { line-height: 1.5; }\r\n\r\nul[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC9wYWdlLWNvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTtJQUNFLGVBQWU7SUFDZixTQUFTLEVBQUUscUJBQXFCO0lBQ2hDLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsdUNBQXVDO0lBQ3ZDLHdCQUF3QjtJQUN4QixxQ0FBcUM7RUFDdkM7RUFDQTtJQUNFLE9BQU87SUFDUCxtQkFBbUI7RUFDckI7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUVFLGFBQWE7RUFFYixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQSxpQkFBaUIsOEJBQThCLEVBQUU7O0FBRWpELGFBQWEseUJBQXlCLEVBQUU7O0FBRXhDLGlCQUFpQixnQ0FBZ0MsRUFBRTs7QUFFbkQsY0FBYyw4Q0FBOEMsRUFBRTs7QUFFOUQsVUFBVSxjQUFjLEVBQUU7O0FBQzFCLFVBQVUsaUJBQWlCLEVBQUU7O0FBQzdCLFVBQVUsZ0JBQWdCLEVBQUU7O0FBRTVCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9wb3N0L3BhZ2UtY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXBpdGFsaXplIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgcGFkZGluZy10b3A6IDU2cHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xyXG4gIC5vZmZjYW52YXMtY29sbGFwc2Uge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA1NnB4OyAvKiBIZWlnaHQgb2YgbmF2YmFyICovXHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7XHJcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0LCB2aXNpYmlsaXR5O1xyXG4gIH1cclxuICAub2ZmY2FudmFzLWNvbGxhcHNlLm9wZW4ge1xyXG4gICAgbGVmdDogMDtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG59XHJcblxyXG4ubmF2LXNjcm9sbGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMjtcclxuICBoZWlnaHQ6IDIuNzVyZW07XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59XHJcblxyXG4ubmF2LXNjcm9sbGVyIC5uYXYge1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLW1zLWZsZXgtd3JhcDogbm93cmFwO1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gIG1hcmdpbi10b3A6IC0xcHg7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNzUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxufVxyXG5cclxuLm5hdi11bmRlcmxpbmUgLm5hdi1saW5rIHtcclxuICBwYWRkaW5nLXRvcDogLjc1cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAuNzVyZW07XHJcbiAgZm9udC1zaXplOiAuODc1cmVtO1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG59XHJcblxyXG4ubmF2LXVuZGVybGluZSAubmF2LWxpbms6aG92ZXIge1xyXG4gIGNvbG9yOiAjMDA3YmZmO1xyXG59XHJcblxyXG4ubmF2LXVuZGVybGluZSAuYWN0aXZlIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjMzQzYTQwO1xyXG59XHJcblxyXG4udGV4dC13aGl0ZS01MCB7IGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTsgfVxyXG5cclxuLmJnLXB1cnBsZSB7IGJhY2tncm91bmQtY29sb3I6ICM2ZjQyYzE7IH1cclxuXHJcbi5ib3JkZXItYm90dG9tIHsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU1ZTU7IH1cclxuXHJcbi5ib3gtc2hhZG93IHsgYm94LXNoYWRvdzogMCAuMjVyZW0gLjc1cmVtIHJnYmEoMCwgMCwgMCwgLjA1KTsgfVxyXG5cclxuLmxoLTEwMCB7IGxpbmUtaGVpZ2h0OiAxOyB9XHJcbi5saC0xMjUgeyBsaW5lLWhlaWdodDogMS4yNTsgfVxyXG4ubGgtMTUwIHsgbGluZS1oZWlnaHQ6IDEuNTsgfVxyXG5cclxudWwge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'list',
                templateUrl: './list.component.html',
                styleUrls: ['./list.component.css']
            }]
    }], function () { return [{ type: _services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] }]; }, { fandomId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], catagory: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'kronos';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 37, vars: 0, consts: [["id", "full-page-content", 1, "fluid-container"], ["role", "navigation", 1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], ["href", "#", 1, "navbar-brand"], ["src", "../favicon.ico", "width", "30", "height", "30", "alt", "", "loading", "lazy", 1, "icon-image"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "float-right"], ["routerLink", "/fandoms", 1, "nav-item", "nav-link"], ["href", "#", 1, "nav-item", "nav-link", "disabled"], [1, "float-right"], ["type", "button", 1, "btn", "btn-dark", "logged-out", "disabled"], ["type", "button", 1, "btn", "btn-dark", "logged-in", "disabled"], [1, "footer", "mt-auto", "py-3"], [1, "row"], [1, "col"], [1, "col", "text-center"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Kronos Fandom Timelines");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Fandoms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Login/Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "footer", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Explore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u00A9 kronosfandomtimelines.com | Designed by Thomas Kehoe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    overflow-x: hidden;\r\n}\r\n\r\n#full-page-content[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n    min-height: 100vh;\r\n}\r\n\r\n.icon-image[_ngcontent-%COMP%] {\r\n    filter: invert(100%);\r\n}\r\n\r\n.logged-in[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.logged-out[_ngcontent-%COMP%] {\r\n    display: inline;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFNBQVM7SUFDVCxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuI2Z1bGwtcGFnZS1jb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uaWNvbi1pbWFnZSB7XHJcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKTtcclxufVxyXG5cclxuLmxvZ2dlZC1pbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ubG9nZ2VkLW91dCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "UkPw":
/*!*********************************!*\
  !*** ./src/app/models/Month.ts ***!
  \*********************************/
/*! exports provided: Month */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Month", function() { return Month; });
class Month {
    constructor(monthName, monthNumber, monthDays) {
        this.monthName = monthName;
        this.monthNumber = monthNumber;
        this.monthDays = monthDays;
    }
}


/***/ }),

/***/ "V4WK":
/*!***********************************************!*\
  !*** ./src/app/post/edit/create.component.ts ***!
  \***********************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _models_Section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/Section */ "qCe/");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/post.service */ "ENZJ");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/image.service */ "mnRn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");








class CreateComponent {
    constructor(formBuilder, http, imageService, router) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.imageService = imageService;
        this.router = router;
        this.sectionTypes = [new _models_Section__WEBPACK_IMPORTED_MODULE_0__["Section"]('Select a section type', 0),
            new _models_Section__WEBPACK_IMPORTED_MODULE_0__["Section"]('text', 1),
            new _models_Section__WEBPACK_IMPORTED_MODULE_0__["Section"]('text with picture on the left', 2),
            new _models_Section__WEBPACK_IMPORTED_MODULE_0__["Section"]('text with picture on the right', 3)];
        this.selectedSectionType = 0;
        this.defaultImage = '../../../../assets/no-image.png';
    }
    isNew() {
        if (this.id == -1) {
            return true;
        }
        return false;
    }
    selectSectionOption(id) {
        this.selectedSectionType = id;
    }
    getSection(arrayName) {
        return this.postForm.get(arrayName);
    }
    addSection(arrayName) {
        if (this.selectedSectionType != 0) {
            this.getSection(arrayName).push(this.getSectionForm(null));
        }
    }
    loadSection(arrayName, value) {
        this.getSection(arrayName).push(this.getSectionForm(value));
    }
    removeSection(arrayName, i) {
        this.getSection(arrayName).removeAt(i);
    }
    addReference(id) {
        this.postForm.get('references').push(this.getRefernce(id));
    }
    getRefernce(id) {
        return this.formBuilder.group({
            id: [id]
        });
    }
    getSectionForm(value) {
        if (value == null) {
            if (this.selectedSectionType == 1) {
                return this.textForm(null);
            }
            if (this.selectedSectionType == 2) {
                return this.textLPForm(null);
            }
            if (this.selectedSectionType == 3) {
                return this.textRPForm(null);
            }
            if (this.selectedSectionType == 4) {
                return this.tableForm(null);
            }
        }
        else {
            var type = value.type;
            if (type == 'text') {
                return this.textForm(value);
            }
            if (type == 'textLP') {
                return this.textLPForm(value);
            }
            if (type == 'textRP') {
                return this.textRPForm(value);
            }
            if (type == 'table') {
                return this.tableForm(value);
            }
        }
    }
    textForm(data) {
        if (data == null) {
            return this.formBuilder.group({
                type: ['text'],
                sectionTitle: ['Insert textForm section title'],
                text: ['Insert textForm section text']
            });
        }
        else {
            return this.formBuilder.group({
                type: [data.type],
                sectionTitle: [data.sectionTitle],
                text: [data.text]
            });
        }
    }
    textLPForm(data) {
        console.log(data);
        if (data == null) {
            return this.formBuilder.group({
                type: ['textLP'],
                sectionTitle: ['Insert textLP section title'],
                text: ['Insert textLP section text'],
                media: [''],
                mediaCaption: ['media caption'],
                mediaAlt: ['media alt'],
                mediaCredit: ['media credit']
            });
        }
        else {
            return this.formBuilder.group({
                type: [data.type],
                sectionTitle: [data.sectionTitle],
                text: [data.text],
                media: [data.media],
                mediaCaption: [data.mediaCaption],
                mediaAlt: [data.mediaAlt],
                mediaCredit: [data.mediaCredit]
            });
        }
    }
    textRPForm(data) {
        console.log(data);
        if (data == null) {
            return this.formBuilder.group({
                type: ['textRP'],
                sectionTitle: ['Insert textRP section title'],
                text: ['Insert textRP section text'],
                media: [''],
                mediaCaption: ['media caption'],
                mediaAlt: ['media alt'],
                mediaCredit: ['media credit']
            });
        }
        else {
            return this.formBuilder.group({
                type: [data.type],
                sectionTitle: [data.sectionTitle],
                text: [data.text],
                media: [data.media],
                mediaCaption: [data.mediaCaption],
                mediaAlt: [data.mediaAlt],
                mediaCredit: [data.mediaCredit]
            });
        }
    }
    tableForm(data) {
        if (data == null) {
            return this.formBuilder.group({
                type: ['table'],
                sectionTitle: ['Insert table section title'],
                text: ['Insert table section text']
            });
        }
        else {
            return this.formBuilder.group({
                type: [data.type],
                sectionTitle: [data.sectionTitle],
                text: [data.text]
            });
        }
    }
    previewImage(fileInput, location) {
        if (fileInput.target.files && fileInput.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                jquery__WEBPACK_IMPORTED_MODULE_1__(location).attr('src', e.target.result);
            };
            reader.readAsDataURL(fileInput.target.files[0]);
        }
    }
    onSubmit(value) {
        if (this.isNew()) {
            console.log("NEW: " + value);
            this.http.post(value).subscribe(response => console.log('success', response), error => console.log('error', error));
        }
        else {
            console.log("UPDATE: " + value);
            this.http.put(value, this.id).subscribe(response => console.log('success', response), error => console.log('error', error));
        }
    }
}
CreateComponent.ɵfac = function CreateComponent_Factory(t) { return new (t || CreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_image_service__WEBPACK_IMPORTED_MODULE_5__["ImageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
CreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreateComponent, selectors: [["create"]], inputs: { id: "id" }, decls: 0, vars: 0, template: function CreateComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QvZWRpdC9jcmVhdGUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'create',
                templateUrl: './create.component.html',
                styleUrls: ['./create.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"] }, { type: _services_image_service__WEBPACK_IMPORTED_MODULE_5__["ImageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();


/***/ }),

/***/ "Wyjh":
/*!**********************************************************************!*\
  !*** ./src/app/post/edit/forms/post-create/post-create.component.ts ***!
  \**********************************************************************/
/*! exports provided: PostCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCreateComponent", function() { return PostCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../create.component */ "V4WK");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/post.service */ "ENZJ");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/image.service */ "mnRn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-quill */ "CzEO");










const _c0 = ["fileInput"];
function PostCreateComponent_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sectionType_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", sectionType_r2.index);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sectionType_r2.name);
} }
function PostCreateComponent_div_36_1_ng_template_0_Template(rf, ctx) { }
function PostCreateComponent_div_36_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PostCreateComponent_div_36_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function PostCreateComponent_div_36_2_ng_template_0_Template(rf, ctx) { }
function PostCreateComponent_div_36_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PostCreateComponent_div_36_2_ng_template_0_Template, 0, 0, "ng-template");
} }
function PostCreateComponent_div_36_3_ng_template_0_Template(rf, ctx) { }
function PostCreateComponent_div_36_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PostCreateComponent_div_36_3_ng_template_0_Template, 0, 0, "ng-template");
} }
const _c1 = function () { return { height: "370px" }; };
function PostCreateComponent_div_36_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "quill-editor", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostCreateComponent_div_36_ng_template_4_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.removeSection("sections", i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styles", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
function PostCreateComponent_div_36_ng_template_6_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r21 = ctx.$implicit;
    const imageIndex_r22 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", imageIndex_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](image_r21.mediaCaption);
} }
function PostCreateComponent_div_36_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "quill-editor", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostCreateComponent_div_36_ng_template_6_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.displayPopup("popup"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Upload Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "select", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PostCreateComponent_div_36_ng_template_6_Template_select_change_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.selectedImage(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PostCreateComponent_div_36_ng_template_6_option_14_Template, 2, 2, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostCreateComponent_div_36_ng_template_6_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.removeSection("sections", i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r4 = ctx_r29.index;
    const section_r3 = ctx_r29.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styles", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "imagePreview" + i_r4)("src", ctx_r11.getImage(section_r3.controls.media.value), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", section_r3.controls.mediaAlt.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](section_r3.controls.mediaCaption.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.images);
} }
function PostCreateComponent_div_36_ng_template_8_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r31 = ctx.$implicit;
    const imageIndex_r32 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", imageIndex_r32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](image_r31.mediaCaption);
} }
function PostCreateComponent_div_36_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostCreateComponent_div_36_ng_template_8_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r33.displayPopup("popup"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Upload Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PostCreateComponent_div_36_ng_template_8_Template_select_change_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.selectedImage(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PostCreateComponent_div_36_ng_template_8_option_12_Template, 2, 2, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "quill-editor", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostCreateComponent_div_36_ng_template_8_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.removeSection("sections", i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r4 = ctx_r39.index;
    const section_r3 = ctx_r39.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "imagePreview" + i_r4)("src", ctx_r13.getImage(section_r3.controls.media.value), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", section_r3.controls.mediaAlt.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](section_r3.controls.mediaCaption.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.images);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styles", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
} }
function PostCreateComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostCreateComponent_div_36_1_Template, 1, 0, undefined, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostCreateComponent_div_36_2_Template, 1, 0, undefined, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PostCreateComponent_div_36_3_Template, 1, 0, undefined, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PostCreateComponent_div_36_ng_template_4_Template, 8, 2, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PostCreateComponent_div_36_ng_template_6_Template, 18, 7, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PostCreateComponent_div_36_ng_template_8_Template, 18, 7, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const section_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", section_r3.controls.type.value == "text")("ngIfThen", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", section_r3.controls.type.value == "textRP")("ngIfThen", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", section_r3.controls.type.value == "textLP")("ngIfThen", _r12);
} }
class PostCreateComponent extends _create_component__WEBPACK_IMPORTED_MODULE_1__["CreateComponent"] {
    constructor(formBuilder, http, imageService, router) {
        super(formBuilder, http, imageService, router);
        this.formBuilder = formBuilder;
        this.http = http;
        this.imageService = imageService;
        this.router = router;
        this.selectedFile = null;
        this.defaultImage = '../../../../assets/no-image.png';
        this.fileName = null;
        this.domain = 'http://kronosfandomtimelines.com/';
        this.finished = 'Create';
    }
    ngOnInit() {
        this.uploadForm = this.formBuilder.group({
            fandomId: [this.fandomId],
            media: [''],
            mediaCaption: ['media caption'],
            mediaAlt: ['media alt'],
            mediaCredit: ['media credit'],
            uploader: 1,
        });
        this.postForm = this.formBuilder.group({
            fandomId: this.fandomId,
            type: [this.type],
            catagory: [this.catagory],
            theme: ['default'],
            name: ['insert title'],
            description: ['insert short descriptions'],
            sections: this.formBuilder.array([]),
            references: this.formBuilder.array([]),
            updator: 1,
            creator: 1
        });
        if (this.id != -1) {
            this.finished = 'Update';
            this.getData();
        }
        this.imageService.fetchAllOfFandom(this.fandomId).subscribe(data => this.images = data);
    }
    getData() {
        this.http.fetch(this.id).subscribe(data => {
            this.post = data[0][0];
            this.postForm.patchValue({
                theme: this.post['theme'],
                name: this.post['name'],
                description: this.post['description'],
                updator: this.post['updator'],
                creator: this.post['creator']
            });
            this.post.data['sections'].forEach(value => {
                this.loadSection('sections', value);
            });
        });
    }
    selectedImage(index) {
        const i = this.getSection('sections').at(index).get('media').value;
        jquery__WEBPACK_IMPORTED_MODULE_2__('#imagePreview' + index).attr('src', this.domain + this.images[i].media);
        this.getSection('sections').at(index).patchValue({
            media: [this.images[i].media],
            mediaCaption: [this.images[i].mediaCaption],
            mediaAlt: [this.images[i].mediaAlt],
            mediaCredit: [this.images[i].mediaCredit]
        });
    }
    displayPopup(formId) {
        console.log(formId);
        document.getElementById(formId).style.display = "block";
    }
    closePopup(formId) {
        console.log(formId);
        document.getElementById(formId).style.display = "none";
    }
    onSubmit(value) {
        if (this.isNew()) {
            console.log("NEW: " + value);
            this.http.post(value).subscribe((res) => {
                console.log(res);
                if (this.type != 'fandom') {
                    this.router.navigate(['/post', this.fandomId, this.fandomId, 'fandom', 'fandom', 0]);
                }
                else {
                    this.router.navigate(['/fandoms']);
                }
            }, (err) => console.log(err));
        }
        else {
            console.log("UPDATE: " + value);
            this.http.put(value, this.id).subscribe((res) => {
                console.log(res);
                this.router.navigate(['/post', this.fandomId, this.id, this.type, this.catagory, 0]);
            }, (err) => console.log(err));
        }
    }
    getImage(imageStr) {
        return 'http://kronosfandomtimelines.com/' + imageStr;
    }
    onFileSelect(event) {
        this.previewImage(event);
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.uploadForm.get('media').setValue(file);
        }
    }
    previewImage(fileInput) {
        if (fileInput.target.files && fileInput.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                jquery__WEBPACK_IMPORTED_MODULE_2__('#imagePreview').attr('src', e.target.result);
            };
            reader.readAsDataURL(fileInput.target.files[0]);
        }
    }
    onUploadSubmit() {
        const formData = new FormData();
        formData.append('media', this.uploadForm.get('media').value);
        formData.append('fandomId', this.uploadForm.get('fandomId').value);
        formData.append('mediaCaption', this.uploadForm.get('mediaCaption').value);
        formData.append('mediaAlt', this.uploadForm.get('mediaAlt').value);
        formData.append('mediaCredit', this.uploadForm.get('mediaCredit').value);
        formData.append('uploader', this.uploadForm.get('uploader').value);
        this.imageService.post(formData).subscribe((res) => {
            console.log(res);
            this.imageService.fetchAllOfFandom(this.fandomId).subscribe(data => this.images = data);
            this.closePopup('popup');
        }, (err) => console.log(err));
    }
}
PostCreateComponent.ɵfac = function PostCreateComponent_Factory(t) { return new (t || PostCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_image_service__WEBPACK_IMPORTED_MODULE_5__["ImageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
PostCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostCreateComponent, selectors: [["post-create"]], viewQuery: function PostCreateComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
    } }, inputs: { id: "id", fandomId: "fandomId", type: "type", catagory: "catagory" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 42, vars: 12, consts: [[1, "fluid-container", "edit-container"], ["id", "popup", "enctype", "multipart/form-data", 1, "fluid-container", "popup", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "img-container"], ["alt", "Preview", 1, "img-to-fit", 3, "id", "src"], ["type", "file", "accept", "image/*", "name", "media", 1, "form-control", 3, "change"], ["type", "text", "name", "mediaCaption", "formControlName", "mediaCaption", 1, "form-control"], ["type", "text", "name", "mediaAlt", "formControlName", "mediaAlt", 1, "form-control"], ["type", "text", "name", "mediaCredit", "formControlName", "mediaCredit", 1, "form-control"], ["type", "button", 1, "btn", "btn-dark", 3, "click"], ["type", "submit", "value", "submit", 1, "btn", "btn-dark", "float-right"], [1, "col-12"], ["enctype", "multipart/form-data", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "formControlName", "name", "maxlength", "50", 1, "form-control"], ["type", "text", "formControlName", "description", "maxlength", "150", 1, "form-control"], [1, "form-control", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-dark", "float-right", 3, "click"], ["formArrayName", "sections"], [3, "formGroupName", 4, "ngFor", "ngForOf"], ["type", "submit", "value", "Submit", 1, "btn", "btn-dark", "float-right"], [1, "row", "hide"], [3, "value"], [3, "formGroupName"], [4, "ngIf", "ngIfThen"], ["textTemplate", ""], ["textRPTemplate", ""], ["textLPTemplate", ""], ["type", "text", "formControlName", "sectionTitle", "maxlength", "100", 1, "form-control"], [1, "col-12", "quill-container"], ["formControlName", "text", 3, "styles"], [1, "btn", "btn-danger", "float-right", 3, "click"], [1, "col-8", "quill-container"], [1, "col-4"], [1, "card"], [1, "card-body"], ["onerror", "this.onerror=null; this.src= '../../../../assets/no-image.png'", 1, "img-to-fit", 3, "id", "src", "alt"], [1, "card-text"], ["formControlName", "media", 1, "form-control", 3, "change"]], template: function PostCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PostCreateComponent_Template_form_ngSubmit_1_listener() { return ctx.onUploadSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PostCreateComponent_Template_input_change_6_listener($event) { return ctx.onFileSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostCreateComponent_Template_button_click_10_listener() { return ctx.closePopup("popup"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "UPLOAD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PostCreateComponent_Template_form_ngSubmit_16_listener() { return ctx.onSubmit(ctx.postForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PostCreateComponent_Template_select_change_29_listener($event) { return ctx.selectSectionOption($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, PostCreateComponent_option_30_Template, 2, 2, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostCreateComponent_Template_button_click_32_listener() { return ctx.addSection("sections"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Add Section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](35, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, PostCreateComponent_div_36_Template, 11, 7, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.uploadForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "imagePreview")("src", ctx.defaultImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.postForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Provide a short description of the ", ctx.type, " (maximum 150 character)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Select a section type from the drop down and click \"Add Section\" to add sections to your ", ctx.type, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sectionTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getSection("sections").controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.finished);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 10, ctx.postForm.value), " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ngx_quill__WEBPACK_IMPORTED_MODULE_8__["QuillEditorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["JsonPipe"]], styles: [".edit-container[_ngcontent-%COMP%] {\r\n    background-color: wheat;   \r\n}\r\n\r\n.row[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.text-with-pic[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    display: block;\r\n}\r\n\r\n.img-container[_ngcontent-%COMP%] {\r\n    justify-content: center;\r\n    display: flex;\r\n    flex-direction: row;\r\n    overflow: hidden; \r\n}\r\n\r\n.img-container[_ngcontent-%COMP%]   .img-to-fit[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    height: 100%;\r\n}\r\n\r\n.hide[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.popup[_ngcontent-%COMP%] {\r\n    width: 50vw;\r\n    height: 50vh;\r\n    top: 25vh;\r\n    left: 25vw;\r\n    display: none;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    position: absolute;\r\n    z-index: 10;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC9lZGl0L2Zvcm1zL3Bvc3QtY3JlYXRlL3Bvc3QtY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7SUFDVCxVQUFVO0lBQ1YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvcG9zdC9lZGl0L2Zvcm1zL3Bvc3QtY3JlYXRlL3Bvc3QtY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdC1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7ICAgXHJcbn1cclxuXHJcbi5yb3cge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnRleHQtd2l0aC1waWMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5pbWctY29udGFpbmVyIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuOyBcclxufVxyXG5cclxuLmltZy1jb250YWluZXIgLmltZy10by1maXQge1xyXG4gICAgZmxleDogMTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmhpZGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnBvcHVwIHtcclxuICAgIHdpZHRoOiA1MHZ3O1xyXG4gICAgaGVpZ2h0OiA1MHZoO1xyXG4gICAgdG9wOiAyNXZoO1xyXG4gICAgbGVmdDogMjV2dztcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTA7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'post-create',
                templateUrl: './post-create.component.html',
                styleUrls: ['./post-create.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"] }, { type: _services_image_service__WEBPACK_IMPORTED_MODULE_5__["ImageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], fandomId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], catagory: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], fileInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['fileInput', { static: false }]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-quill */ "CzEO");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./post/post.component */ "fQWx");
/* harmony import */ var _fandoms_list_fandoms_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fandoms-list/fandoms-list.component */ "DNut");
/* harmony import */ var _post_view_fandom_fandom_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./post/view/fandom/fandom.component */ "obB/");
/* harmony import */ var _post_view_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./post/view/timeline/timeline.component */ "4o4a");
/* harmony import */ var _post_view_map_map_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./post/view/map/map.component */ "9Z7n");
/* harmony import */ var _post_view_family_tree_family_tree_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./post/view/family-tree/family-tree.component */ "0jtZ");
/* harmony import */ var _post_edit_forms_timeline_create_timeline_create_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./post/edit/forms/timeline-create/timeline-create.component */ "oxHm");
/* harmony import */ var _post_edit_forms_map_create_map_create_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./post/edit/forms/map-create/map-create.component */ "GYVs");
/* harmony import */ var _post_edit_forms_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./post/edit/forms/post-create/post-create.component */ "Wyjh");
/* harmony import */ var _post_page_components_list_list_element_list_element_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./post/page-components/list/list-element/list-element.component */ "x1AO");
/* harmony import */ var _post_page_components_list_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./post/page-components/list/list.component */ "QaDl");
/* harmony import */ var _post_view_search_fandom_search_fandom_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./post/view/search-fandom/search-fandom.component */ "6zx5");
/* harmony import */ var _post_view_default_default_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./post/view/default/default.component */ "ax2K");
/* harmony import */ var _post_view_fandoms_gallery_fandoms_gallery_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./post/view/fandoms-gallery/fandoms-gallery.component */ "uMjt");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ "tyNb");






























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_22__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"],
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_1__["HashLocationStrategy"]
        }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_21__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_23__["ModalModule"].forRoot(),
            ngx_quill__WEBPACK_IMPORTED_MODULE_5__["QuillModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_22__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _post_post_component__WEBPACK_IMPORTED_MODULE_7__["PostComponent"],
        _fandoms_list_fandoms_list_component__WEBPACK_IMPORTED_MODULE_8__["FandomsListComponent"],
        _post_view_fandom_fandom_component__WEBPACK_IMPORTED_MODULE_9__["FandomComponent"],
        _post_view_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_10__["TimelineComponent"],
        _post_view_map_map_component__WEBPACK_IMPORTED_MODULE_11__["MapComponent"],
        _post_view_family_tree_family_tree_component__WEBPACK_IMPORTED_MODULE_12__["FamilyTreeComponent"],
        _post_edit_forms_timeline_create_timeline_create_component__WEBPACK_IMPORTED_MODULE_13__["TimelineCreateComponent"],
        _post_edit_forms_map_create_map_create_component__WEBPACK_IMPORTED_MODULE_14__["MapCreateComponent"],
        _post_edit_forms_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_15__["PostCreateComponent"],
        _post_page_components_list_list_element_list_element_component__WEBPACK_IMPORTED_MODULE_16__["ListElementComponent"],
        _post_view_search_fandom_search_fandom_component__WEBPACK_IMPORTED_MODULE_18__["SearchFandomComponent"],
        _post_page_components_list_list_component__WEBPACK_IMPORTED_MODULE_17__["ListComponent"],
        _post_view_default_default_component__WEBPACK_IMPORTED_MODULE_19__["DefaultComponent"],
        _post_view_fandoms_gallery_fandoms_gallery_component__WEBPACK_IMPORTED_MODULE_20__["FandomsGalleryComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_21__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_23__["ModalModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_5__["QuillModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_22__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _post_post_component__WEBPACK_IMPORTED_MODULE_7__["PostComponent"],
                    _fandoms_list_fandoms_list_component__WEBPACK_IMPORTED_MODULE_8__["FandomsListComponent"],
                    _post_view_fandom_fandom_component__WEBPACK_IMPORTED_MODULE_9__["FandomComponent"],
                    _post_view_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_10__["TimelineComponent"],
                    _post_view_map_map_component__WEBPACK_IMPORTED_MODULE_11__["MapComponent"],
                    _post_view_family_tree_family_tree_component__WEBPACK_IMPORTED_MODULE_12__["FamilyTreeComponent"],
                    _post_edit_forms_timeline_create_timeline_create_component__WEBPACK_IMPORTED_MODULE_13__["TimelineCreateComponent"],
                    _post_edit_forms_map_create_map_create_component__WEBPACK_IMPORTED_MODULE_14__["MapCreateComponent"],
                    _post_edit_forms_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_15__["PostCreateComponent"],
                    _post_page_components_list_list_element_list_element_component__WEBPACK_IMPORTED_MODULE_16__["ListElementComponent"],
                    _post_view_search_fandom_search_fandom_component__WEBPACK_IMPORTED_MODULE_18__["SearchFandomComponent"],
                    _post_page_components_list_list_component__WEBPACK_IMPORTED_MODULE_17__["ListComponent"],
                    _post_view_default_default_component__WEBPACK_IMPORTED_MODULE_19__["DefaultComponent"],
                    _post_view_fandoms_gallery_fandoms_gallery_component__WEBPACK_IMPORTED_MODULE_20__["FandomsGalleryComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_21__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_23__["ModalModule"].forRoot(),
                    ngx_quill__WEBPACK_IMPORTED_MODULE_5__["QuillModule"].forRoot()
                ],
                providers: [{
                        provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"],
                        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_1__["HashLocationStrategy"]
                    }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_22__["AppComponent"]]
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetComponentScope"](_post_post_component__WEBPACK_IMPORTED_MODULE_7__["PostComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_l"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArrayName"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_23__["ModalBackdropComponent"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_23__["ModalDirective"], ngx_quill__WEBPACK_IMPORTED_MODULE_5__["QuillEditorComponent"], ngx_quill__WEBPACK_IMPORTED_MODULE_5__["QuillViewComponent"], ngx_quill__WEBPACK_IMPORTED_MODULE_5__["QuillViewHTMLComponent"], _app_component__WEBPACK_IMPORTED_MODULE_22__["AppComponent"],
    _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
    _post_post_component__WEBPACK_IMPORTED_MODULE_7__["PostComponent"],
    _fandoms_list_fandoms_list_component__WEBPACK_IMPORTED_MODULE_8__["FandomsListComponent"],
    _post_view_fandom_fandom_component__WEBPACK_IMPORTED_MODULE_9__["FandomComponent"],
    _post_view_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_10__["TimelineComponent"],
    _post_view_map_map_component__WEBPACK_IMPORTED_MODULE_11__["MapComponent"],
    _post_view_family_tree_family_tree_component__WEBPACK_IMPORTED_MODULE_12__["FamilyTreeComponent"],
    _post_edit_forms_timeline_create_timeline_create_component__WEBPACK_IMPORTED_MODULE_13__["TimelineCreateComponent"],
    _post_edit_forms_map_create_map_create_component__WEBPACK_IMPORTED_MODULE_14__["MapCreateComponent"],
    _post_edit_forms_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_15__["PostCreateComponent"],
    _post_page_components_list_list_element_list_element_component__WEBPACK_IMPORTED_MODULE_16__["ListElementComponent"],
    _post_view_search_fandom_search_fandom_component__WEBPACK_IMPORTED_MODULE_18__["SearchFandomComponent"],
    _post_page_components_list_list_component__WEBPACK_IMPORTED_MODULE_17__["ListComponent"],
    _post_view_default_default_component__WEBPACK_IMPORTED_MODULE_19__["DefaultComponent"],
    _post_view_fandoms_gallery_fandoms_gallery_component__WEBPACK_IMPORTED_MODULE_20__["FandomsGalleryComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["KeyValuePipe"]]);


/***/ }),

/***/ "ax2K":
/*!********************************************************!*\
  !*** ./src/app/post/view/default/default.component.ts ***!
  \********************************************************/
/*! exports provided: DefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultComponent", function() { return DefaultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/post.service */ "ENZJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function DefaultComponent_div_7_1_ng_template_0_Template(rf, ctx) { }
function DefaultComponent_div_7_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DefaultComponent_div_7_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function DefaultComponent_div_7_2_ng_template_0_Template(rf, ctx) { }
function DefaultComponent_div_7_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DefaultComponent_div_7_2_ng_template_0_Template, 0, 0, "ng-template");
} }
function DefaultComponent_div_7_3_ng_template_0_Template(rf, ctx) { }
function DefaultComponent_div_7_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DefaultComponent_div_7_3_ng_template_0_Template, 0, 0, "ng-template");
} }
function DefaultComponent_div_7_4_ng_template_0_Template(rf, ctx) { }
function DefaultComponent_div_7_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DefaultComponent_div_7_4_ng_template_0_Template, 0, 0, "ng-template");
} }
function DefaultComponent_div_7_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const section_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](section_r1.sectionTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", section_r1.text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function DefaultComponent_div_7_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const section_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](section_r1.sectionTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", section_r1.text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r9.getImage(section_r1.media), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", section_r1.mediaAlt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](section_r1.mediaCaption);
} }
function DefaultComponent_div_7_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const section_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](section_r1.sectionTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r11.getImage(section_r1.media), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", section_r1.mediaAlt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](section_r1.mediaCaption);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", section_r1.text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function DefaultComponent_div_7_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DefaultComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DefaultComponent_div_7_1_Template, 1, 0, undefined, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DefaultComponent_div_7_2_Template, 1, 0, undefined, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DefaultComponent_div_7_3_Template, 1, 0, undefined, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DefaultComponent_div_7_4_Template, 1, 0, undefined, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DefaultComponent_div_7_ng_template_5_Template, 7, 2, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DefaultComponent_div_7_ng_template_7_Template, 13, 5, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DefaultComponent_div_7_ng_template_9_Template, 13, 5, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DefaultComponent_div_7_ng_template_11_Template, 4, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const section_r1 = ctx.$implicit;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", section_r1.type == "text")("ngIfThen", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", section_r1.type == "textRP")("ngIfThen", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", section_r1.type == "textLP")("ngIfThen", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", section_r1.type == "table")("ngIfThen", _r12);
} }
const _c0 = function (a1, a2, a4) { return ["/post", a1, a2, "post", a4, 1]; };
class DefaultComponent {
    constructor(postService) {
        this.postService = postService;
        this.post = {};
    }
    ngOnInit() {
        this.postService.fetch(this.id).subscribe(data => {
            this.post = data[0][0];
        });
    }
    getImage(imageStr) {
        return 'http://kronosfandomtimelines.com/' + imageStr;
    }
}
DefaultComponent.ɵfac = function DefaultComponent_Factory(t) { return new (t || DefaultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"])); };
DefaultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DefaultComponent, selectors: [["default"]], inputs: { id: "id", fandomId: "fandomId", type: "type" }, decls: 18, vars: 15, consts: [[1, "fluid-container", "page-content"], [1, "row"], [1, "col-12", "title-content"], [1, "col-12", "introduction-content"], [4, "ngFor", "ngForOf"], ["href", "#", 1, "btn", "btn-dark", 3, "routerLink"], [4, "ngIf", "ngIfThen"], ["textTemplate", ""], ["textRPTemplate", ""], ["textLPTemplate", ""], ["tableTemplate", ""], [1, "col-12"], [1, "section-title"], [3, "innerHTML"], [1, "col-8"], [1, "col-4"], [1, "card"], [1, "card-body"], [1, "img-container"], ["onerror", "this.onerror=null; this.src= '../../../../assets/no-image.png'", 1, "img-to-fit", 3, "src", "alt"], [1, "card-text"], ["type", "text", "formControlName", "sectionTitle", 1, "form-control"], [1, "col-12", "table-col"]], template: function DefaultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DefaultComponent_div_7_Template, 13, 8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.post == null ? null : ctx.post.data == null ? null : ctx.post.data.sections);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" CREATED: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 5, ctx.post.created, "short"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" UPDATED: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 8, ctx.post.updated, "short"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](11, _c0, ctx.fandomId, ctx.id, ctx.post.catagory));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: [".page-content[_ngcontent-%COMP%] {\r\n    background-color: wheat;   \r\n}\r\n\r\n.row[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.title-content[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.row[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n}\r\n\r\n.img-container[_ngcontent-%COMP%] {\r\n    justify-content: center;\r\n    display: flex;\r\n    flex-direction: row;\r\n    overflow: hidden; \r\n}\r\n\r\n.img-container[_ngcontent-%COMP%]   .img-to-fit[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    height: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC92aWV3L2RlZmF1bHQvZGVmYXVsdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLE9BQU87SUFDUCxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcG9zdC92aWV3L2RlZmF1bHQvZGVmYXVsdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDsgICBcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4udGl0bGUtY29udGVudCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uaW1nLWNvbnRhaW5lciB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgXHJcbn1cclxuXHJcbi5pbWctY29udGFpbmVyIC5pbWctdG8tZml0IHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'default',
                templateUrl: './default.component.html',
                styleUrls: ['./default.component.css']
            }]
    }], function () { return [{ type: _services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], fandomId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "fQWx":
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/post.service */ "ENZJ");




function PostComponent_div_2_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "family-tree-create", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r8.getID());
} }
function PostComponent_div_2_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "post-create", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r9.getID())("fandomId", ctx_r9.getFandomId())("type", ctx_r9.getType())("catagory", ctx_r9.getCatagory());
} }
function PostComponent_div_2_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "map-create", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r10.getID())("fandomId", ctx_r10.getFandomId());
} }
function PostComponent_div_2_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "timeline-create", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r11.getID())("fandomId", ctx_r11.getFandomId());
} }
function PostComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostComponent_div_2_div_1_div_1_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostComponent_div_2_div_1_div_2_Template, 2, 4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PostComponent_div_2_div_1_div_3_Template, 2, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PostComponent_div_2_div_1_div_4_Template, 2, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.getType() == "family-tree");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.getType() == "fandom");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.getType() == "map");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.getType() == "timeline");
} }
function PostComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostComponent_div_2_div_1_Template, 5, 4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.getType() != "post")("ngIfElse", _r1);
} }
function PostComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "post-create", 8);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r2.getID())("fandomId", ctx_r2.getFandomId())("type", ctx_r2.getType())("catagory", ctx_r2.getCatagory());
} }
function PostComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "default", 10);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r4.getID())("fandomId", ctx_r4.getFandomId())("type", ctx_r4.getType());
} }
function PostComponent_ng_template_7_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "family-tree", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r13.getID())("fandomId", ctx_r13.getFandomId())("type", ctx_r13.getType());
} }
function PostComponent_ng_template_7_div_25_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fandom", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r14.getID());
} }
function PostComponent_ng_template_7_div_25_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "map", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r15.getID())("fandomId", ctx_r15.getFandomId())("type", ctx_r15.getType());
} }
function PostComponent_ng_template_7_div_25_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "timelinePage", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r16.getID())("fandomId", ctx_r16.getFandomId())("type", ctx_r16.getType());
} }
function PostComponent_ng_template_7_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostComponent_ng_template_7_div_25_div_1_Template, 2, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostComponent_ng_template_7_div_25_div_2_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PostComponent_ng_template_7_div_25_div_3_Template, 2, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PostComponent_ng_template_7_div_25_div_4_Template, 2, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.getType() == "family-tree");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.getType() == "fandom");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.getType() == "map");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.getType() == "timeline");
} }
const _c0 = function (a1, a2) { return ["/post", a1, a2, "fandom", "fandom", 0]; };
const _c1 = function (a1, a2) { return ["/searchfandom", a1, a2]; };
const _c2 = function (a1, a2) { return ["/searchfandom", a1, a2, "post", "article"]; };
const _c3 = function (a1, a2) { return ["/searchfandom", a1, a2, "post", "character"]; };
const _c4 = function (a1, a2) { return ["/searchfandom", a1, a2, "post", "event"]; };
const _c5 = function (a1, a2) { return ["/searchfandom", a1, a2, "post", "geography"]; };
function PostComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Explore ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Articles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Events");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Geography");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "form", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, PostComponent_ng_template_7_div_25_Template, 5, 4, "div", 2);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c0, ctx_r6.getFandomId(), ctx_r6.getFandomId()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.post.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](13, _c1, ctx_r6.id, ctx_r6.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](16, _c2, ctx_r6.id, ctx_r6.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](19, _c3, ctx_r6.id, ctx_r6.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](22, _c4, ctx_r6.id, ctx_r6.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](25, _c5, ctx_r6.id, ctx_r6.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("placeholder", "Search ", ctx_r6.post.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.getType() != "post")("ngIfElse", _r3);
} }
class PostComponent {
    constructor(route, http) {
        this.route = route;
        this.http = http;
        this.post = {};
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.setID(params.id);
            this.setFandomId(params.fandomId);
            this.setType(params.type);
            this.setCatagory(params.catagory);
            this.setEdit(params.edit);
            this.http.fetch(this.id).subscribe(data => {
                this.post = data[0][0];
                if (this.edit == false) {
                    this.http.viewed(this.id).subscribe(response => console.log('success', response), error => console.log('error', error));
                }
            });
        });
    }
    getEdit() {
        return this.edit;
    }
    setEdit(edit) {
        this.edit = edit;
    }
    getID() {
        return this.id;
    }
    setID(id) {
        this.id = id;
    }
    getFandomId() {
        return this.fandomId;
    }
    setFandomId(fandomId) {
        this.fandomId = fandomId;
    }
    getType() {
        return this.type;
    }
    setType(type) {
        this.type = type;
    }
    getCatagory() {
        return this.catagory;
    }
    setCatagory(catagory) {
        this.catagory = catagory;
    }
}
PostComponent.ɵfac = function PostComponent_Factory(t) { return new (t || PostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"])); };
PostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostComponent, selectors: [["app-post"]], decls: 9, vars: 2, consts: [[1, "fluid-container", "view-page-container"], [1, "fluid-container", "view-content-container"], [4, "ngIf", "ngIfElse"], ["elseCreate", ""], ["elsePage", ""], ["elseView", ""], [4, "ngIf"], [3, "id"], [3, "id", "fandomId", "type", "catagory"], [3, "id", "fandomId"], [3, "id", "fandomId", "type"], ["role", "navigation", 1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], ["href", "#", 1, "navbar-brand", 3, "routerLink"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "dropdown"], ["id", "navbarDropdown2", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdown2", 1, "dropdown-menu"], [1, "dropdown-item", "disabled", 3, "routerLink"], [1, "form-inline", "my-2", "my-lg-0"], ["type", "search", "aria-label", "Search", 1, "form-control", "mr-sm-2", 3, "placeholder"], ["type", "submit", 1, "btn", "btn-outline-success", "my-2", "my-sm-0"]], template: function PostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostComponent_div_2_Template, 2, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PostComponent_ng_template_3_Template, 1, 4, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PostComponent_ng_template_5_Template, 1, 3, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PostComponent_ng_template_7_Template, 26, 28, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getEdit() == true)("ngIfElse", _r5);
    } }, styles: [".float-right-nav[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.view-page-container[_ngcontent-%COMP%] {\r\n    background-color: grey;\r\n\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    min-height: 100vh;\r\n}\r\n\r\n.view-content-container[_ngcontent-%COMP%] {\r\n    padding: 2vh;\r\n}\r\n\r\n.page-content[_ngcontent-%COMP%] {\r\n    background-color: wheat;   \r\n}\r\n\r\n.row[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.title-content[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.row[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksc0JBQXNCOztJQUV0QixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFNBQVM7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QvcG9zdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsb2F0LXJpZ2h0LW5hdiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi52aWV3LXBhZ2UtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcblxyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLnZpZXctY29udGVudC1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMnZoO1xyXG59XHJcblxyXG4ucGFnZS1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoZWF0OyAgIFxyXG59XHJcblxyXG4ucm93IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi50aXRsZS1jb250ZW50IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post',
                templateUrl: './post.component.html',
                styleUrls: ['./post.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] }]; }, null); })();


/***/ }),

/***/ "mnRn":
/*!*******************************************!*\
  !*** ./src/app/services/image.service.ts ***!
  \*******************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class ImageService {
    constructor(http) {
        this.http = http;
        this.url = "http://kronosfandomtimelines.com/images/";
    }
    fetch(id) {
        return this.http.get(this.url + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((_) => console.log('fetch post')));
    }
    fetchAll() {
        return this.http.get(this.url, { responseType: "json" }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((_) => console.log('fetch all posts')));
    }
    fetchAllOfFandom(id) {
        return this.http.get(this.url + "fandom/" + id, { responseType: "json" }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((_) => console.log('fetch all posts')));
    }
    post(data) {
        console.log(this.url);
        return this.http.post(this.url, data);
    }
    put(data, id) {
        return this.http.put(this.url + id, data);
    }
    delete(id) {
        return this.http.delete(this.url + id, {});
    }
}
ImageService.ɵfac = function ImageService_Factory(t) { return new (t || ImageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ImageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ImageService, factory: ImageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "obB/":
/*!******************************************************!*\
  !*** ./src/app/post/view/fandom/fandom.component.ts ***!
  \******************************************************/
/*! exports provided: FandomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FandomComponent", function() { return FandomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_Catagory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/Catagory */ "rEdl");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/post.service */ "ENZJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _page_components_list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../page-components/list/list.component */ "QaDl");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








const _c0 = function (a1, a2, a3, a4) { return ["/searchfandom", a1, a2, a3, a4]; };
function FandomComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", cat_r2.catagory);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](4, _c0, ctx_r0.post.id, ctx_r0.post.name, cat_r2.type, cat_r2.catagory));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.getImageURL(cat_r2.catagory), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cat_r2.display);
} }
function FandomComponent_div_14_1_ng_template_0_Template(rf, ctx) { }
function FandomComponent_div_14_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FandomComponent_div_14_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function FandomComponent_div_14_2_ng_template_0_Template(rf, ctx) { }
function FandomComponent_div_14_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FandomComponent_div_14_2_ng_template_0_Template, 0, 0, "ng-template");
} }
function FandomComponent_div_14_3_ng_template_0_Template(rf, ctx) { }
function FandomComponent_div_14_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FandomComponent_div_14_3_ng_template_0_Template, 0, 0, "ng-template");
} }
function FandomComponent_div_14_4_ng_template_0_Template(rf, ctx) { }
function FandomComponent_div_14_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FandomComponent_div_14_4_ng_template_0_Template, 0, 0, "ng-template");
} }
function FandomComponent_div_14_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const section_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](section_r3.sectionTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", section_r3.text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function FandomComponent_div_14_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const section_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](section_r3.sectionTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r11.getImage(section_r3.media), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", section_r3.mediaAlt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](section_r3.mediaCaption);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", section_r3.text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function FandomComponent_div_14_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const section_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](section_r3.sectionTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r13.getImage(section_r3.media), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", section_r3.mediaAlt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](section_r3.mediaCaption);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", section_r3.text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function FandomComponent_div_14_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FandomComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FandomComponent_div_14_1_Template, 1, 0, undefined, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FandomComponent_div_14_2_Template, 1, 0, undefined, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FandomComponent_div_14_3_Template, 1, 0, undefined, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FandomComponent_div_14_4_Template, 1, 0, undefined, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FandomComponent_div_14_ng_template_5_Template, 7, 2, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FandomComponent_div_14_ng_template_7_Template, 10, 5, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FandomComponent_div_14_ng_template_9_Template, 10, 5, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FandomComponent_div_14_ng_template_11_Template, 4, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const section_r3 = ctx.$implicit;
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", section_r3.type == "text")("ngIfThen", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", section_r3.type == "textRP")("ngIfThen", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", section_r3.type == "textLP")("ngIfThen", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", section_r3.type == "table")("ngIfThen", _r14);
} }
const _c1 = function (a1, a2) { return ["/post/gallery", a1, a2]; };
const _c2 = function (a1, a2) { return ["/post", a1, a2, "fandom", "fandom", 1]; };
class FandomComponent {
    constructor(postService) {
        this.postService = postService;
        this.post = {};
        this.catagory = 'fandom';
        // 
        this.catagories = [new _models_Catagory__WEBPACK_IMPORTED_MODULE_1__["Catagory"]('Articles', 'article', 'post'), new _models_Catagory__WEBPACK_IMPORTED_MODULE_1__["Catagory"]('Characters', 'character', 'post'), new _models_Catagory__WEBPACK_IMPORTED_MODULE_1__["Catagory"]('Events', 'event', 'post'), new _models_Catagory__WEBPACK_IMPORTED_MODULE_1__["Catagory"]('Geography', 'geography', 'post'), new _models_Catagory__WEBPACK_IMPORTED_MODULE_1__["Catagory"]('Maps', 'map', 'map'), new _models_Catagory__WEBPACK_IMPORTED_MODULE_1__["Catagory"]('Timelines', 'timeline', 'timeline')];
    }
    ngOnInit() {
        this.postService.fetch(this.id).subscribe(data => {
            this.post = data[0][0];
            this.postService.viewed(this.id).subscribe(response => console.log('success', response), error => console.log('error', error));
        });
    }
    testReturn(test) {
        return test;
    }
    getImageURL(cat) {
        return '../../assets/catagory/' + cat + '.jpg';
    }
    getImage(imageStr) {
        return 'http://kronosfandomtimelines.com/' + imageStr;
    }
}
FandomComponent.ɵfac = function FandomComponent_Factory(t) { return new (t || FandomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"])); };
FandomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FandomComponent, selectors: [["fandom"]], inputs: { id: "id" }, decls: 28, vars: 20, consts: [[1, "fluid-container", "page-content"], [1, "row"], [1, "col-12", "title-content"], [1, "row", "catagories-content", "text-center", "catList", "justify-content-center"], [4, "ngFor", "ngForOf"], [1, "cat", "text-center"], ["title", "images", 3, "routerLink"], ["src", "../../assets/catagory/image.jpg", "width", "100", "height", "100"], [1, "col-12", "introduction-content"], [1, "col-12"], [1, "created-data"], ["href", "#", 1, "btn", "btn-dark", 3, "routerLink"], [3, "fandomId"], [3, "routerLink", "title"], ["width", "100", "height", "100", 3, "src"], [4, "ngIf", "ngIfThen"], ["textTemplate", ""], ["textRPTemplate", ""], ["textLPTemplate", ""], ["tableTemplate", ""], [1, "section-title"], [1, "col-12", "text-section"], [3, "innerHTML"], [1, "col-6", "float-right"], ["onerror", "this.onerror=null; this.src= '../../../../assets/no-image.png'", 1, "img-to-fit", 3, "src", "alt"], [1, "card-text"], [1, "col-6", "float-left"], ["type", "text", "formControlName", "sectionTitle", 1, "form-control"], [1, "col-12", "table-col"]], template: function FandomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FandomComponent_div_6_Template, 6, 9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Images");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FandomComponent_div_14_Template, 13, 8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "list", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.catagories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c1, ctx.post.id, ctx.post.name));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.post == null ? null : ctx.post.data == null ? null : ctx.post.data.sections);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" CREATED: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](19, 8, ctx.post.created, "short"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" UPDATED: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](22, 11, ctx.post.updated, "short"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](17, _c2, ctx.id, ctx.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fandomId", ctx.id);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _page_components_list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".page-content[_ngcontent-%COMP%] {\r\n    background-color: wheat;   \r\n}\r\n\r\n.row[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.title-content[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.row[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n}\r\n\r\n.catagories-content[_ngcontent-%COMP%] {\r\n    margin-left: 1vh;\r\n    margin-right: 1vh;\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.cat[_ngcontent-%COMP%] {\r\n    align-content: center;\r\n    text-align: center;\r\n    margin-left: 1vh;\r\n    margin-right: 1vh;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    border-radius: 50%;\r\n}\r\n\r\n.img-to-fit[_ngcontent-%COMP%] {\r\n    border-radius: 0%;\r\n    max-width:100%;\r\n    height:auto;\r\n}\r\n\r\n.created-data[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.hide[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.text-section[_ngcontent-%COMP%] {\r\n    word-wrap: break-word\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC92aWV3L2ZhbmRvbS9mYW5kb20uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcG9zdC92aWV3L2ZhbmRvbS9mYW5kb20uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7ICAgXHJcbn1cclxuXHJcbi5yb3cge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnRpdGxlLWNvbnRlbnQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucm93IHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmNhdGFnb3JpZXMtY29udGVudCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMXZoO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxdmg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY2F0IHtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxdmg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDF2aDtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmltZy10by1maXQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCU7XHJcbiAgICBtYXgtd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDphdXRvO1xyXG59XHJcblxyXG4uY3JlYXRlZC1kYXRhIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmhpZGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnRleHQtc2VjdGlvbiB7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmRcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FandomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fandom',
                templateUrl: './fandom.component.html',
                styleUrls: ['./fandom.component.css']
            }]
    }], function () { return [{ type: _services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "oxHm":
/*!******************************************************************************!*\
  !*** ./src/app/post/edit/forms/timeline-create/timeline-create.component.ts ***!
  \******************************************************************************/
/*! exports provided: TimelineCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineCreateComponent", function() { return TimelineCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../create.component */ "V4WK");
/* harmony import */ var _models_SlideType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/SlideType */ "/Uub");
/* harmony import */ var _models_Month__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/Month */ "UkPw");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/post.service */ "ENZJ");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/image.service */ "mnRn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-quill */ "CzEO");












const _c0 = ["fileInput"];
function TimelineCreateComponent_div_25_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slideType_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", slideType_r7.index);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slideType_r7.display);
} }
function TimelineCreateComponent_div_25_option_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", m_r8.monthNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r8.monthName);
} }
function TimelineCreateComponent_div_25_option_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", m_r9.monthNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r9.monthName);
} }
function TimelineCreateComponent_div_25_option_130_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const colorOpt_r10 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r6.getColor(colorOpt_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", colorOpt_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](colorOpt_r10);
} }
const _c1 = function () { return { height: "370px" }; };
function TimelineCreateComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TimelineCreateComponent_div_25_Template_select_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const i_r2 = ctx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.slideChange(i_r2, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TimelineCreateComponent_div_25_option_3_Template, 2, 2, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Text Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Slide Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "quill-editor", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Year: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TimelineCreateComponent_div_25_Template_input_change_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const i_r2 = ctx.index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.isBC(i_r2, $event, "end_date"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "BC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Month: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, TimelineCreateComponent_div_25_option_38_Template, 2, 2, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Day: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Year: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TimelineCreateComponent_div_25_Template_input_change_58_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const i_r2 = ctx.index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.isBC(i_r2, $event, "end_date"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "BC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Month: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, TimelineCreateComponent_div_25_option_67_Template, 2, 2, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Day: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimelineCreateComponent_div_25_Template_button_click_78_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const i_r2 = ctx.index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.addMedia(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Add Media");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Media");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "url");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "caption");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "credit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "thumbnail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "link target");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimelineCreateComponent_div_25_Template_button_click_113_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.displayPopup("popup"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Upload Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimelineCreateComponent_div_25_Template_button_click_121_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const i_r2 = ctx.index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.removeMedia(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Remove Media");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Slide Background");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "select", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](130, TimelineCreateComponent_div_25_option_130_Template, 2, 4, "option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Slide Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimelineCreateComponent_div_25_Template_button_click_138_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const i_r2 = ctx.index; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.removeSection("timeline", i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.slideTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "text" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styles", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "start-date" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.months);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "end-date" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.months);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "mediaAddBtnRow" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "mediaBtn" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "media" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "mediaRemoveBtnRow" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "background" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.colorArr);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "autolink" + i_r2);
} }
class TimelineCreateComponent extends _create_component__WEBPACK_IMPORTED_MODULE_1__["CreateComponent"] {
    constructor(formBuilder, http, imageService, router, route) {
        super(formBuilder, http, imageService, router);
        this.formBuilder = formBuilder;
        this.http = http;
        this.imageService = imageService;
        this.router = router;
        this.route = route;
        this.selectedFile = null;
        this.defaultImage = '../../../../assets/no-image.png';
        this.fileName = null;
        this.colorArr = ['black', 'silver', 'gray', 'white', 'maroon', 'red', 'purple', 'fuchsia', 'green', 'lime', 'olive', 'yellow', 'navy', 'blue', 'teal', 'aqua', 'orange', 'aliceblue', 'antiquewhite', 'aquamarine', 'azure', 'beige', 'bisque', 'blanchedalmond', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', '(synonym of aqua)', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkgrey', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'greenyellow', 'grey', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgreen', 'lightgrey', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'limegreen', 'linen', 'magenta', '(synonym of fuchsia)', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'oldlace', 'olivedrab', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'whitesmoke', 'yellowgreen'];
        this.months = [new _models_Month__WEBPACK_IMPORTED_MODULE_3__["Month"]('January', 1, 31), new _models_Month__WEBPACK_IMPORTED_MODULE_3__["Month"]('February', 2, 28), new _models_Month__WEBPACK_IMPORTED_MODULE_3__["Month"]('March', 3, 31), new _models_Month__WEBPACK_IMPORTED_MODULE_3__["Month"]('April', 4, 30), new _models_Month__WEBPACK_IMPORTED_MODULE_3__["Month"]('May', 5, 31), new _models_Month__WEBPACK_IMPORTED_MODULE_3__["Month"]('June', 6, 30), new _models_Month__WEBPACK_IMPORTED_MODULE_3__["Month"]('July', 7, 31), new _models_Month__WEBPACK_IMPORTED_MODULE_3__["Month"]('August', 8, 31), new _models_Month__WEBPACK_IMPORTED_MODULE_3__["Month"]('September', 9, 30), new _models_Month__WEBPACK_IMPORTED_MODULE_3__["Month"]('October', 10, 31), new _models_Month__WEBPACK_IMPORTED_MODULE_3__["Month"]('November', 11, 30), new _models_Month__WEBPACK_IMPORTED_MODULE_3__["Month"]('December', 12, 31)];
        this.slideTypes = [new _models_SlideType__WEBPACK_IMPORTED_MODULE_2__["SlideType"]('title', 'onTitle', 0),
            new _models_SlideType__WEBPACK_IMPORTED_MODULE_2__["SlideType"]('event', 'onEvent', 1),
            new _models_SlideType__WEBPACK_IMPORTED_MODULE_2__["SlideType"]('event span', 'onEventSpan', 2),
            new _models_SlideType__WEBPACK_IMPORTED_MODULE_2__["SlideType"]('era', 'onErea', 3)];
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.fandomId = params.id;
            this.uploadForm = this.formBuilder.group({
                fandomId: [this.fandomId],
                media: [''],
                mediaCaption: ['media caption'],
                mediaAlt: ['media alt'],
                mediaCredit: ['media credit'],
                uploader: 1,
            });
        });
        this.imageService.fetchAllOfFandom(this.fandomId).subscribe(data => this.images = data);
        this.postForm = this.formBuilder.group({
            fandomId: this.fandomId,
            type: ['timeline'],
            catagory: ['timeline'],
            theme: ['default'],
            name: ['insert title'],
            description: ['insert short descriptions'],
            timelineConfig: this.formBuilder.group({
                debug: [false],
                height: ["this._el.container.offsetHeight"],
                width: ["this._el.container.offsetWidth"],
                is_embed: [true],
                hash_bookmark: [false],
                default_bg_color: ["white"],
                scale_factor: [2],
                initial_zoom: [""],
                zoom_sequence: [[0.5, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]],
                timenav_position: ["bottom"],
                optimal_tick_width: [100],
                base_class: ["tl-timeline"],
                timenav_height: [150],
                timenav_height_percentage: [25],
                timenav_mobile_height_percentage: [40],
                timenav_height_min: [150],
                marker_height_min: [30],
                marker_width_min: [100],
                marker_padding: [5],
                start_at_slide: [0],
                start_at_end: [false],
                menubar_height: [0],
                use_bc: [false],
                duration: [1000],
                ease: ["TL.Ease.easeInOutQuint"],
                dragging: [true],
                trackResize: [true],
                slide_padding_lr: [100],
                slide_default_fade: ["0%"],
                language: ["en"],
                ga_property_id: [null],
                track_events: [['back_to_start', 'nav_next', 'nav_previous', 'zoom_in', 'zoom_out']]
            }),
            timeline: this.formBuilder.array([]),
            updator: 1,
            creator: 1
        });
    }
    slideChange(i, type) {
        if (type == 0) {
            this.onTitle(i);
        }
        if (type == 1) {
            this.onEvent(i);
        }
        if (type == 2) {
            this.onEventSpan(i);
        }
        if (type == 3) {
            this.onEra(i);
        }
    }
    isBC(i, e, idStr) {
        const styear = this.getSection('timeline').at(i).get(idStr);
        if (e.target.checked) {
            if (styear.get('year').value > 0) {
                styear.patchValue({
                    year: styear.get('year').value * -1
                });
            }
        }
        else {
            if (styear.get('year').value < 0) {
                styear.patchValue({
                    year: styear.get('year').value * -1
                });
            }
        }
        console.log(styear.get('year').value);
    }
    getColor(colorOpt) {
        return "background-color: " + colorOpt + ";";
    }
    getInvertColor(colorOpt) {
        return "color: " + colorOpt + ";" + " -webkit-filter: invert(100%); filter: invert(100%);";
    }
    onTitle(i) {
        document.getElementById('start-date' + i).style.display = "none";
        document.getElementById('end-date' + i).style.display = "none";
        document.getElementById('text' + i).style.display = "block";
        document.getElementById('background' + i).style.display = "block";
        document.getElementById('autolink' + i).style.display = "none";
        document.getElementById('mediaBtn' + i).style.display = "block";
    }
    onEvent(i) {
        document.getElementById('start-date' + i).style.display = "block";
        document.getElementById('end-date' + i).style.display = "none";
        document.getElementById('text' + i).style.display = "block";
        document.getElementById('background' + i).style.display = "block";
        document.getElementById('autolink' + i).style.display = "block";
        document.getElementById('mediaBtn' + i).style.display = "block";
    }
    onEventSpan(i) {
        document.getElementById('start-date' + i).style.display = "block";
        document.getElementById('end-date' + i).style.display = "block";
        document.getElementById('text' + i).style.display = "block";
        document.getElementById('background' + i).style.display = "block";
        document.getElementById('autolink' + i).style.display = "block";
        document.getElementById('mediaBtn' + i).style.display = "block";
    }
    onEra(i) {
        document.getElementById('start-date' + i).style.display = "block";
        document.getElementById('end-date' + i).style.display = "block";
        document.getElementById('text' + i).style.display = "block";
        document.getElementById('media' + i).style.display = "none";
        document.getElementById('background' + i).style.display = "none";
        document.getElementById('autolink' + i).style.display = "none";
        document.getElementById('mediaBtn' + i).style.display = "none";
    }
    addMedia(i) {
        document.getElementById('media' + i).style.display = "inline-block";
        document.getElementById('mediaRemoveBtnRow' + i).style.display = "inline-block";
        document.getElementById('mediaAddBtnRow' + i).style.display = "none";
    }
    removeMedia(i) {
        document.getElementById('media' + i).style.display = "none";
        document.getElementById('mediaRemoveBtnRow' + i).style.display = "none";
        document.getElementById('mediaAddBtnRow' + i).style.display = "block";
        const mediaData = this.getSection('timeline').at(i).get('media');
        mediaData.patchValue({
            url: '',
            caption: '',
            credit: '',
            thumbnail: '',
            alt: '',
            title: '',
            link: '',
            link_target: ''
        });
    }
    addSection(arrayName) {
        const temp = this.getSection(arrayName);
        temp.push(this.getSectionForm(null));
    }
    getSectionForm(value) {
        return this.slideForm(value);
    }
    slideForm(data) {
        if (data == null) {
            return this.formBuilder.group({
                type: [''],
                start_date: this.formBuilder.group({
                    year: [0],
                    month: [0],
                    day: [0],
                    display_date: ['']
                }),
                end_date: this.formBuilder.group({
                    year: [0],
                    month: [0],
                    day: [0],
                    display_date: ['']
                }),
                text: this.formBuilder.group({
                    headline: [''],
                    text: ['']
                }),
                media: this.formBuilder.group({
                    url: [''],
                    caption: [''],
                    credit: [''],
                    thumbnail: [''],
                    alt: [''],
                    title: [''],
                    link: [''],
                    link_target: ['']
                }),
                group: [''],
                background: this.formBuilder.group({
                    url: [''],
                    color: ['']
                }),
                autolink: ['']
            });
        }
        else {
            return this.formBuilder.group({
                start_date: this.formBuilder.group({
                    year: [data.year],
                    month: [data.month],
                    day: [data.day],
                    display_date: [data.display_date]
                }),
                end_date: this.formBuilder.group({
                    year: [data.year],
                    month: [data.month],
                    day: [data.day],
                    display_date: [data.display_date]
                }),
                text: this.formBuilder.group({
                    headline: [data.headline],
                    text: [data.text]
                }),
                media: this.formBuilder.group({
                    url: [data.url],
                    caption: [data.caption],
                    credit: [data.credit],
                    thumbnail: [data.thumbnail],
                    alt: [data.alt],
                    title: [data.title],
                    link: [data.link],
                    link_target: [data.link_target]
                }),
                group: [data.group],
                background: this.formBuilder.group({
                    url: [data.url],
                    color: [data.color]
                }),
                autolink: [data.autolink]
            });
        }
    }
    displayPopup(formId) {
        console.log(formId);
        document.getElementById(formId).style.display = "flex";
    }
    closePopup(formId) {
        console.log(formId);
        document.getElementById(formId).style.display = "none";
    }
    onFileSelect(event) {
        this.previewImage(event);
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.uploadForm.get('media').setValue(file);
        }
    }
    previewImage(fileInput) {
        if (fileInput.target.files && fileInput.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                jquery__WEBPACK_IMPORTED_MODULE_4__('#imagePreview').attr('src', e.target.result);
            };
            reader.readAsDataURL(fileInput.target.files[0]);
        }
    }
    getImage(imageStr) {
        return 'http://kronosfandomtimelines.com/' + imageStr;
    }
    onUploadSubmit() {
        const formData = new FormData();
        formData.append('media', this.uploadForm.get('media').value);
        formData.append('fandomId', this.uploadForm.get('fandomId').value);
        formData.append('mediaCaption', this.uploadForm.get('mediaCaption').value);
        formData.append('mediaAlt', this.uploadForm.get('mediaAlt').value);
        formData.append('mediaCredit', this.uploadForm.get('mediaCredit').value);
        formData.append('uploader', this.uploadForm.get('uploader').value);
        this.imageService.post(formData).subscribe((res) => {
            console.log(res);
            this.imageService.fetchAllOfFandom(this.fandomId).subscribe(data => this.images = data);
            this.closePopup('popup');
        }, (err) => console.log(err));
    }
    onSubmit(value) {
        if (this.isNew()) {
            console.log("NEW: " + value);
            this.http.post(value).subscribe((res) => {
                console.log(res);
                this.router.navigate(['/post', this.fandomId, this.fandomId, 'fandom', 'fandom', 0]);
            }, (err) => console.log(err));
        }
        else {
            console.log("UPDATE: " + value);
            this.http.put(value, this.id).subscribe((res) => {
                console.log(res);
                this.router.navigate(['/post', this.fandomId, this.id, 'timeline', 'timeline', 0]);
            }, (err) => console.log(err));
        }
    }
}
TimelineCreateComponent.ɵfac = function TimelineCreateComponent_Factory(t) { return new (t || TimelineCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_post_service__WEBPACK_IMPORTED_MODULE_6__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_image_service__WEBPACK_IMPORTED_MODULE_7__["ImageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"])); };
TimelineCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimelineCreateComponent, selectors: [["timeline-create"]], viewQuery: function TimelineCreateComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
    } }, inputs: { id: "id", fandomId: "fandomId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 29, vars: 8, consts: [[1, "fluid-container", "edit-container"], ["id", "popup", "enctype", "multipart/form-data", 1, "fluid-container", "popup", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "img-container"], ["alt", "Preview", 1, "img-to-fit", 3, "id", "src"], ["type", "file", "accept", "image/*", "name", "media", 1, "form-control", 3, "change"], ["type", "text", "name", "mediaCaption", "formControlName", "mediaCaption", 1, "form-control"], ["type", "text", "name", "mediaAlt", "formControlName", "mediaAlt", 1, "form-control"], ["type", "text", "name", "mediaCredit", "formControlName", "mediaCredit", 1, "form-control"], ["type", "button", 1, "btn", "btn-dark", 3, "click"], ["type", "submit", "value", "submit", 1, "btn", "btn-dark", "float-right"], [1, "col-12"], [3, "formGroup", "ngSubmit"], ["type", "text", "formControlName", "name", 1, "form-control"], ["type", "text", "formControlName", "description", 1, "form-control"], ["type", "button", 1, "btn", 3, "click"], [1, "col-12", "timeline-col"], ["formArrayName", "timeline"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [3, "formGroupName"], ["formControlName", "type", 1, "form-control", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["formGroupName", "text", 1, "text", "form-group", "inital-hide", 3, "id"], ["type", "text", "formControlName", "headline", "maxlength", "100", 1, "form-control"], [1, "col-12", "quill-container"], ["formControlName", "text", 3, "styles"], [1, "col-6"], ["formGroupName", "start_date", 1, "start-date", "form-group", "inital-hide", 3, "id"], [1, "inlineDisplay"], ["type", "number", "formControlName", "year", "placeholder", "Year", "onkeydown", "return (event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105) || event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 46|| event.keyCode == 37 || event.keyCode == 39", 1, "form-control", "inlineDisplay", 2, "width", "75px"], [1, "bc-data"], ["type", "checkbox", "id", "'bcEnd' + i", 3, "change"], ["for", "'bcEnd' + i"], ["formControlName", "month", 1, "form-control", 2, "width", "75px"], ["type", "number", "formControlName", "day", 1, "form-control", 2, "width", "75px"], ["type", "text", "formControlName", "display_date", "placeholder", "Display date", 1, "form-control", 2, "width", "125px"], ["formGroupName", "end_date", 1, "end-date", "form-group", "inital-hide", 3, "id"], [1, "col-12", 3, "id"], ["type", "button", 1, "btn", "inital-hide", 3, "id", "click"], ["formGroupName", "media", 1, "media", "inital-hide", 3, "id"], ["type", "text", "formControlName", "url", 1, "form-control"], ["type", "text", "formControlName", "caption", 1, "form-control"], ["type", "text", "formControlName", "credit", 1, "form-control"], ["type", "text", "formControlName", "thumbnail", 1, "form-control"], ["type", "text", "formControlName", "alt", 1, "form-control"], ["type", "text", "formControlName", "title", 1, "form-control"], ["type", "text", "formControlName", "link", 1, "form-control"], ["type", "text", "formControlName", "link_target", 1, "form-control"], [1, "col-4"], [1, "card"], [1, "card-body"], ["formGroupName", "background", 1, "background", "inital-hide", 3, "id"], ["formControlName", "color", 1, "form-control"], [3, "value", "style", 4, "ngFor", "ngForOf"], [1, "autolink", "inital-hide", 3, "id"], ["type", "text", "formControlName", "autolink", 1, "form-control"], [1, "btn", "btn-danger", "float-right", 3, "click"], [3, "value"]], template: function TimelineCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TimelineCreateComponent_Template_form_ngSubmit_1_listener() { return ctx.onUploadSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TimelineCreateComponent_Template_input_change_6_listener($event) { return ctx.onFileSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimelineCreateComponent_Template_button_click_10_listener() { return ctx.closePopup("popup"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "UPLOAD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TimelineCreateComponent_Template_form_ngSubmit_16_listener() { return ctx.onSubmit(ctx.postForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimelineCreateComponent_Template_button_click_21_listener() { return ctx.addSection("timeline"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Add Slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](24, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, TimelineCreateComponent_div_25_Template, 140, 16, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.uploadForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "imagePreview")("src", ctx.defaultImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.postForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getSection("timeline").controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 6, ctx.postForm.value), " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"], ngx_quill__WEBPACK_IMPORTED_MODULE_10__["QuillEditorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["JsonPipe"]], styles: [".inital-hide[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.edit-container[_ngcontent-%COMP%] {\r\n    background-color: wheat;   \r\n}\r\n\r\n.row[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.col-6[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.text-with-pic[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    display: block;\r\n}\r\n\r\n.img-container[_ngcontent-%COMP%] {\r\n    justify-content: center;\r\n    display: flex;\r\n    flex-direction: row;\r\n    overflow: hidden;\r\n    \r\n}\r\n\r\n.img-container[_ngcontent-%COMP%]   .img-to-fit[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    height: 100%;\r\n}\r\n\r\n.popup[_ngcontent-%COMP%] {\r\n    width: 50vw;\r\n    height: 50vh;\r\n    top: 25vh;\r\n    left: 25vw;\r\n    display: none;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    position: absolute;\r\n    z-index: 10;\r\n}\r\n\r\n.hide[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC9lZGl0L2Zvcm1zL3RpbWVsaW5lLWNyZWF0ZS90aW1lbGluZS1jcmVhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLE9BQU87SUFDUCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixTQUFTO0lBQ1QsVUFBVTtJQUNWLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9wb3N0L2VkaXQvZm9ybXMvdGltZWxpbmUtY3JlYXRlL3RpbWVsaW5lLWNyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluaXRhbC1oaWRlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5lZGl0LWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDsgICBcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uY29sLTYge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnRleHQtd2l0aC1waWMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5pbWctY29udGFpbmVyIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgXHJcbn1cclxuXHJcbi5pbWctY29udGFpbmVyIC5pbWctdG8tZml0IHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5wb3B1cCB7XHJcbiAgICB3aWR0aDogNTB2dztcclxuICAgIGhlaWdodDogNTB2aDtcclxuICAgIHRvcDogMjV2aDtcclxuICAgIGxlZnQ6IDI1dnc7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4uaGlkZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimelineCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'timeline-create',
                templateUrl: './timeline-create.component.html',
                styleUrls: ['./timeline-create.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }, { type: _services_post_service__WEBPACK_IMPORTED_MODULE_6__["PostService"] }, { type: _services_image_service__WEBPACK_IMPORTED_MODULE_7__["ImageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], fandomId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], fileInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['fileInput', { static: false }]
        }] }); })();


/***/ }),

/***/ "qCe/":
/*!***********************************!*\
  !*** ./src/app/models/Section.ts ***!
  \***********************************/
/*! exports provided: Section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
class Section {
    constructor(name, index) {
        this.name = name;
        this.index = index;
    }
}


/***/ }),

/***/ "rEdl":
/*!************************************!*\
  !*** ./src/app/models/Catagory.ts ***!
  \************************************/
/*! exports provided: Catagory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Catagory", function() { return Catagory; });
class Catagory {
    constructor(display, catagory, type) {
        this.display = display;
        this.catagory = catagory;
        this.type = type;
    }
}


/***/ }),

/***/ "uMjt":
/*!************************************************************************!*\
  !*** ./src/app/post/view/fandoms-gallery/fandoms-gallery.component.ts ***!
  \************************************************************************/
/*! exports provided: FandomsGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FandomsGalleryComponent", function() { return FandomsGalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/image.service */ "mnRn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = ["fileInput"];
function FandomsGalleryComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.getImage(image_r1.media), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", image_r1.mediaAlt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](image_r1.mediaCaption);
} }
class FandomsGalleryComponent {
    constructor(formBuilder, http, route) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.route = route;
        this.selectedFile = null;
        this.defaultImage = '../../../../assets/no-image.png';
        this.fileName = null;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.fandomId = params.id;
            this.uploadForm = this.formBuilder.group({
                fandomId: [this.fandomId],
                media: [''],
                mediaCaption: ['media caption'],
                mediaAlt: ['media alt'],
                mediaCredit: ['media credit'],
                uploader: 1,
            });
        });
        this.images$ = this.http.fetchAllOfFandom(this.fandomId);
    }
    displayPopup(formId) {
        console.log(formId);
        document.getElementById(formId).style.display = "flex";
    }
    closePopup(formId) {
        console.log(formId);
        document.getElementById(formId).style.display = "none";
    }
    onFileSelect(event) {
        this.previewImage(event);
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.uploadForm.get('media').setValue(file);
        }
    }
    previewImage(fileInput) {
        if (fileInput.target.files && fileInput.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                jquery__WEBPACK_IMPORTED_MODULE_1__('#imagePreview').attr('src', e.target.result);
            };
            reader.readAsDataURL(fileInput.target.files[0]);
        }
    }
    getImage(imageStr) {
        return 'http://kronosfandomtimelines.com/' + imageStr;
    }
    onSubmit() {
        const formData = new FormData();
        formData.append('media', this.uploadForm.get('media').value);
        formData.append('fandomId', this.uploadForm.get('fandomId').value);
        formData.append('mediaCaption', this.uploadForm.get('mediaCaption').value);
        formData.append('mediaAlt', this.uploadForm.get('mediaAlt').value);
        formData.append('mediaCredit', this.uploadForm.get('mediaCredit').value);
        formData.append('uploader', this.uploadForm.get('uploader').value);
        this.http.post(formData).subscribe((res) => {
            console.log(res);
            this.images$ = this.http.fetchAllOfFandom(this.fandomId);
            this.closePopup('popup');
        }, (err) => console.log(err));
    }
}
FandomsGalleryComponent.ɵfac = function FandomsGalleryComponent_Factory(t) { return new (t || FandomsGalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_image_service__WEBPACK_IMPORTED_MODULE_3__["ImageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
FandomsGalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FandomsGalleryComponent, selectors: [["app-fandoms-gallery"]], viewQuery: function FandomsGalleryComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
    } }, decls: 19, vars: 6, consts: [[1, "fluid-container", "page-content"], ["id", "popup", "enctype", "multipart/form-data", 1, "fluid-container", "popup", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "img-container"], ["alt", "Preview", 1, "img-to-fit", 3, "id", "src"], ["type", "file", "accept", "image/*", "name", "media", 1, "form-control", 3, "change"], ["type", "text", "name", "mediaCaption", "formControlName", "mediaCaption", 1, "form-control"], ["type", "text", "name", "mediaAlt", "formControlName", "mediaAlt", 1, "form-control"], ["type", "text", "name", "mediaCredit", "formControlName", "mediaCredit", 1, "form-control"], ["type", "button", 1, "btn", "btn-dark", 3, "click"], ["type", "submit", "value", "submit", 1, "btn", "btn-dark", "float-right"], ["id", "list"], [4, "ngFor", "ngForOf"], ["onerror", "this.onerror=null; this.src= '../../../../assets/no-image.png'", 1, "img-to-fit", "galllery-image", 3, "src", "alt"]], template: function FandomsGalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FandomsGalleryComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FandomsGalleryComponent_Template_input_change_6_listener($event) { return ctx.onFileSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FandomsGalleryComponent_Template_button_click_10_listener() { return ctx.closePopup("popup"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "UPLOAD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FandomsGalleryComponent_li_15_Template, 4, 3, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FandomsGalleryComponent_Template_button_click_17_listener() { return ctx.displayPopup("popup"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Upload Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.uploadForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "imagePreview")("src", ctx.defaultImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 4, ctx.images$));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".page-content[_ngcontent-%COMP%] {\r\n    background-color: wheat;   \r\n    min-height: 100vh;\r\n}\r\n\r\n.row[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.text-with-pic[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    display: block;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    max-width:100%;\r\n    height:auto;\r\n}\r\n\r\n.popup[_ngcontent-%COMP%] {\r\n    width: 50vw;\r\n    height: 50vh;\r\n    top: 25vh;\r\n    left: 25vw;\r\n    display: none;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    position: absolute;\r\n    z-index: 10;\r\n}\r\n\r\n.hide[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC92aWV3L2ZhbmRvbXMtZ2FsbGVyeS9mYW5kb21zLWdhbGxlcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixTQUFTO0lBQ1QsVUFBVTtJQUNWLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9wb3N0L3ZpZXcvZmFuZG9tcy1nYWxsZXJ5L2ZhbmRvbXMtZ2FsbGVyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDsgICBcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4ucm93IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi50ZXh0LXdpdGgtcGljIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgbWF4LXdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6YXV0bztcclxufVxyXG5cclxuLnBvcHVwIHtcclxuICAgIHdpZHRoOiA1MHZ3O1xyXG4gICAgaGVpZ2h0OiA1MHZoO1xyXG4gICAgdG9wOiAyNXZoO1xyXG4gICAgbGVmdDogMjV2dztcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi5oaWRlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FandomsGalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-fandoms-gallery',
                templateUrl: './fandoms-gallery.component.html',
                styleUrls: ['./fandoms-gallery.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _services_image_service__WEBPACK_IMPORTED_MODULE_3__["ImageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, { fileInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['fileInput', { static: false }]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _fandoms_list_fandoms_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fandoms-list/fandoms-list.component */ "DNut");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post/post.component */ "fQWx");
/* harmony import */ var _post_view_search_fandom_search_fandom_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post/view/search-fandom/search-fandom.component */ "6zx5");
/* harmony import */ var _post_view_fandoms_gallery_fandoms_gallery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post/view/fandoms-gallery/fandoms-gallery.component */ "uMjt");









const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'fandoms', component: _fandoms_list_fandoms_list_component__WEBPACK_IMPORTED_MODULE_3__["FandomsListComponent"] },
    { path: 'post/:fandomId/:id/:type/:catagory/:edit', component: _post_post_component__WEBPACK_IMPORTED_MODULE_4__["PostComponent"] },
    { path: 'searchfandom/:id/:name/:type/:catagory', component: _post_view_search_fandom_search_fandom_component__WEBPACK_IMPORTED_MODULE_5__["SearchFandomComponent"] },
    { path: 'post/gallery/:id/:name', component: _post_view_fandoms_gallery_fandoms_gallery_component__WEBPACK_IMPORTED_MODULE_6__["FandomsGalleryComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "x1AO":
/*!**********************************************************************************!*\
  !*** ./src/app/post/page-components/list/list-element/list-element.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ListElementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListElementComponent", function() { return ListElementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a1, a2, a3, a4) { return ["/post", a1, a2, a3, a4, 0]; };
class ListElementComponent {
    constructor() { }
    ngOnInit() {
    }
}
ListElementComponent.ɵfac = function ListElementComponent_Factory(t) { return new (t || ListElementComponent)(); };
ListElementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListElementComponent, selectors: [["list-element"]], inputs: { post: "post" }, decls: 8, vars: 12, consts: [[1, "media", "text-muted", "pt-3", 3, "id"], ["src", "http://pinegrow.com/placeholders/img18.jpg", "alt", "", "width", "32", "height", "32", 1, "mr-2", "rounded"], [1, "media-body", "pb-3", "mb-0", "small", "lh-125", "border-bottom", "border-gray"], [1, "d-block", "text-gray-dark", "search-element"], ["href", "#", 3, "routerLink"]], template: function ListElementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.post.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](7, _c0, ctx.post.fandomId, ctx.post.id, ctx.post.type, ctx.post.catagory));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("UPDATED: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 4, ctx.post.updated, "short"), "");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QvcGFnZS1jb21wb25lbnRzL2xpc3QvbGlzdC1lbGVtZW50L2xpc3QtZWxlbWVudC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListElementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'list-element',
                templateUrl: './list-element.component.html',
                styleUrls: ['./list-element.component.css']
            }]
    }], function () { return []; }, { post: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map