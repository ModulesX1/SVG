!(function(){

const util = {
    __SVG_HTML: '<div class="svg->container"><div class="svg->loading triangle"><svg viewBox="0 0 86 80"><polygon points="43 8 79 72 7 72"></polygon></svg></div></div>',
    __SVG_STYLE: ".svg-\\>container{width:100%;height:100%;display:flex;align-items:center;justify-content:center}.svg-\\>loading{--path:#2F3545;--dot:#5628EE;--duration:2650ms;width:44px;height:44px;position:relative;display:inline-block;margin:0 16px}.svg-\\>loading:before{content:'';width:6px;height:6px;border-radius:50%;position:absolute;display:block;background:var(--dot);top:37px;left:19px;transform:translate(-18px,-18px);-webkit-animation:dotRect var(--duration) cubic-bezier(.785,.135,.15,.86) infinite;animation:dotRect var(--duration) cubic-bezier(.785,.135,.15,.86) infinite}.svg-\\>loading svg{display:block;width:100%;height:100%}.svg-\\>loading svg polygon{fill:none;stroke:var(--path);stroke-width:10px;stroke-linejoin:round;stroke-linecap:round;stroke-dasharray:145 76 145 76;stroke-dashoffset:0;-webkit-animation:pathTriangle var(--duration) cubic-bezier(.785,.135,.15,.86) infinite;animation:pathTriangle var(--duration) cubic-bezier(.785,.135,.15,.86) infinite}.svg-\\>loading.triangle{width:48px}.svg-\\>loading.triangle:before{left:21px;transform:translate(-10px,-18px);-webkit-animation:dotTriangle var(--duration) cubic-bezier(.785,.135,.15,.86) infinite;animation:dotTriangle var(--duration) cubic-bezier(.785,.135,.15,.86) infinite}@-webkit-keyframes pathTriangle{33%{stroke-dashoffset:74}66%{stroke-dashoffset:147}100%{stroke-dashoffset:221}}@keyframes pathTriangle{33%{stroke-dashoffset:74}66%{stroke-dashoffset:147}100%{stroke-dashoffset:221}}@-webkit-keyframes dotTriangle{33%{transform:translate(0,0)}66%{transform:translate(10px,-18px)}100%{transform:translate(-10px,-18px)}}@keyframes dotTriangle{33%{transform:translate(0,0)}66%{transform:translate(10px,-18px)}100%{transform:translate(-10px,-18px)}}html{-webkit-font-smoothing:antialiased}"
}

const StyleElement = document.createElement("style");
StyleElement.textContent = util.__SVG_STYLE;
document.head.appendChild( StyleElement );

window.CreateLoading = function( ElementID ) {
    const MainElement = document.getElementById( ElementID );
    MainElement.innerHTML = util.__SVG_HTML;
}

})()
