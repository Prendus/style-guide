"use strict";
let exports = {};
Object.defineProperty(exports, "__esModule", { value: true });
var PrendusDropDown = (function () {
    function PrendusDropDown() {
    }
    PrendusDropDown.prototype.beforeRegister = function () {
        this.is = 'prendus-drop-down';
        this.properties = {
            classes: {
                type: String,
                value: 'prendus-button',
                computed: '_computeClasses(buttonType)'
            }
        };
    };
    PrendusDropDown.prototype._computeClasses = function (type) {
        return 'prendus-button prendus-button--' + type;
    };
    PrendusDropDown.prototype.toggleMenu = function (e) {
        var items = this.querySelector('#drop-down');
        items.toggle();
    };
    PrendusDropDown.prototype.toggleMenuWithKeyboard = function (e) {
        if (e.keyCode === 13 || e.keyCode === 32) {
            e.preventDefault();
            this.toggleMenu(e);
        }
    };
    return PrendusDropDown;
}());
exports.PrendusDropDown = PrendusDropDown;
Polymer(PrendusDropDown);
