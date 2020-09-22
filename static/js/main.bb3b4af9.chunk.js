(this["webpackJsonppomodoro-deluxe"]=this["webpackJsonppomodoro-deluxe"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports={timerColonStyles:"TimerColon_timerColonStyles__141oB",blink:"TimerColon_blink__WJKDJ"}},function(e,t,a){e.exports=a.p+"static/media/dot.dd0f186c.svg"},function(e,t,a){e.exports={label:"ToggleTimeUnit_label__3TOHs",checkboxDiv:"ToggleTimeUnit_checkboxDiv__1yUdo"}},,,function(e,t,a){e.exports={cardGeneralStyles:"QuickStartPanel_cardGeneralStyles__ODsuY"}},function(e,t,a){e.exports={bgColor:"App_bgColor__2k73q"}},function(e,t,a){e.exports=a(27)},,,,,function(e,t,a){},,,,function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(15),r=a.n(i),o=(a(23),a(6)),c=a(7),l=a(9),m=a(8),u=a(30),d=a(28),h=a(29),p=a(33),k=function(e){var t=e.minutes,a=e.seconds;return s.a.createElement(d.a,{style:{fontSize:"30px"}},s.a.createElement(h.a,{className:"d-flex align-items-sm-center justify-content-sm-center text-warning"},t<10?"0".concat(t):t,a<10?"0".concat(a):a))},T=a(11),S=a.n(T),g=a(31),E=a(12),f=a.n(E),b=function(){return s.a.createElement(u.a,{className:"d-flex flex-sm-column align-items-sm-center my-auto"},s.a.createElement(g.a,{className:S.a.timerColonStyles,src:f.a,roundedCircle:!0}),s.a.createElement(g.a,{className:S.a.timerColonStyles,src:f.a,roundedCircle:!0}))},w=a(32),x=a(34),R=function(e){var t=e.setTime;return s.a.createElement(w.a,{className:"btn-sm w-50 mx-auto"},s.a.createElement(x.a,{variant:"danger","data-toggle":"tooltip","data-placement":"bottom",title:"+",className:"shadow",onClick:t},"+"),s.a.createElement(x.a,{variant:"outline-danger","data-toggle":"tooltip","data-placement":"bottom",title:"-",className:"shadow",onClick:t},"-"))},M=function(e){var t=e.children,a=e.setWorkTime,n=e.setRestTime,i=e.workMinutes,r=e.restMinutes,o=e.elapsedWorkTimeInSeconds,c=e.elapsedRestTimeInSeconds,l=60*r,m=60*i-o,u=Math.floor(m/60),T=Math.floor(m%60),S=l-c,g=Math.floor(S/60),E=Math.floor(S%60);return s.a.createElement(s.a.Fragment,null,s.a.createElement(p.a,{className:"p-3 mx-auto my-auto bg-light shadow-lg border border-warning rounded-pill"},s.a.createElement(d.a,{className:"mx-auto text-uppercase text-warning"},t),s.a.createElement(d.a,{className:"mx-auto"},s.a.createElement(h.a,null,s.a.createElement(k,{minutes:"WORK"===t?u>0?u:0:g>0?g:0})),s.a.createElement(h.a,{className:"w-25 d-flex flex-sm-column align-items-sm-center"},s.a.createElement(b,null)),s.a.createElement(h.a,null,s.a.createElement(k,{seconds:"WORK"===t?T>0?T:0:E>0?E:0}))),s.a.createElement(d.a,null,s.a.createElement(R,{setTime:"WORK"===t?a:n}))))},I=function(e){var t=e.children,a=e.disabled,n=e.onStart,i=e.onPause,r=e.isTimeRunning;return s.a.createElement("p",null,s.a.createElement(x.a,{className:"mt-5 mx-3 ".concat(a?"disabled":null),variant:"warning","data-toggle":"tooltip","data-placement":"top",title:"Start pomodoro",onClick:r&&!a?i:n},t))},v=function(e){var t=e.children,a=e.disabled,n=e.onCancel;return s.a.createElement("p",null,s.a.createElement(x.a,{className:"mt-5 mx-3 ".concat(a?"disabled":null),variant:"danger","data-toggle":"tooltip","data-placement":"top",title:"Cancel session",onClick:n},t))},C=a(13),y=a.n(C),W=function(e){var t=e.checkFn,a=e.children,n=e.checked;return s.a.createElement("label",{className:y.a.label},s.a.createElement("input",{type:"checkbox",checked:n,onChange:t}),s.a.createElement("div",{className:y.a.checkboxDiv}),a)},N=a(16),O=a.n(N),_=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).toggleTimeUnitDisplay=function(){n.setState((function(e){return{checkboxChecked:!e.checkboxChecked}}))},n.handleCancelTimer=function(){n.setState({isAppReady:!1,isTimeRunning:!1,isItWorkTime:!1,isItRestTime:!1,workMinutes:0,restMinutes:0,elapsedWorkTimeInSeconds:0,elapsedRestTimeInSeconds:0}),n.customTimer=null},n.handlePauseTimer=function(){n.setState({isTimeRunning:!1}),window.clearInterval(n.customTimer),n.customTimer=null},n.handleStartTimer=function(){n.setState({isTimeRunning:!0,isItWorkTime:!0}),null===n.customTimer&&(n.customTimer=window.setInterval((function(){n.state.isItWorkTime&&n.setState((function(e){return{elapsedWorkTimeInSeconds:e.elapsedWorkTimeInSeconds+1}})),!n.state.isItWorkTime&&n.state.restMinutes>0&&n.setState((function(e){return{elapsedRestTimeInSeconds:e.elapsedRestTimeInSeconds+1}}))}),1e3))},n.setWorkTime=function(e){"+"===e.target.title?n.setState({workMinutes:n.state.workMinutes+.5}):n.state.workMinutes>0?n.setState({workMinutes:n.state.workMinutes-.5}):n.setState({workMinutes:0})},n.setRestTime=function(e){"+"===e.target.title?n.setState({restMinutes:n.state.restMinutes+.5}):n.state.restMinutes>0?n.setState({restMinutes:n.state.restMinutes-.5}):n.setState({restMinutes:0})},n.state={isAppReady:!1,isTimeRunning:!1,isItWorkTime:!1,isItRestTime:!1,workMinutes:0,restMinutes:0,elapsedWorkTimeInSeconds:0,elapsedRestTimeInSeconds:0,checkboxChecked:!1,isItBigScreen:!1},n.customTimer=null,n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){window.matchMedia("(max-width: 767px)")||this.setState({isItBigScreen:!0}),window.matchMedia("(max-width: 767px)")&&this.setState({isItBigScreen:!1})}},{key:"componentDidUpdate",value:function(){var e=60*this.state.workMinutes,t=60*this.state.restMinutes;this.state.workMinutes>0&&this.state.restMinutes>0&&!1===this.state.isAppReady&&this.setState({isAppReady:!0}),e===this.state.elapsedWorkTimeInSeconds&&this.state.isItWorkTime&&this.state.restMinutes>0&&this.setState({isItWorkTime:!1,isItRestTime:!0}),!this.state.isItWorkTime&&this.state.isItRestTime&&t===this.state.elapsedRestTimeInSeconds&&this.setState({isTimeRunning:!1,isItRestTime:!1,isAppReady:!1,checkboxChecked:!1,workMinutes:0,restMinutes:0}),this.state.isItWorkTime&&this.state.checkboxChecked&&this.setState({checkboxChecked:!1}),this.state.isItRestTime&&!this.state.checkboxChecked&&this.setState({checkboxChecked:!0})}},{key:"render",value:function(){var e=this.state,t=e.isAppReady,a=e.isTimeRunning,n=e.workMinutes,i=e.restMinutes,r=e.elapsedWorkTimeInSeconds,o=e.elapsedRestTimeInSeconds,c=e.checkboxChecked,l=(e.isItBigScreen,window.matchMedia("(max-width: 767px)"));return s.a.createElement(u.a,{className:"p-3 ".concat(O.a.cardGeneralStyles)},s.a.createElement("h2",{className:"text-warning text-center my-3"},"Quick Pomodoro"),s.a.createElement(d.a,null,s.a.createElement(h.a,{className:"d-flex"},l.matches?s.a.createElement(s.a.Fragment,null,!c&&s.a.createElement(M,{workMinutes:n,elapsedWorkTimeInSeconds:r,setWorkTime:this.setWorkTime},"WORK"),c&&s.a.createElement(M,{restMinutes:i,elapsedRestTimeInSeconds:o,setRestTime:this.setRestTime},"BREAK")):s.a.createElement(s.a.Fragment,null,s.a.createElement(M,{workMinutes:n,elapsedWorkTimeInSeconds:r,setWorkTime:this.setWorkTime},"WORK"),s.a.createElement(M,{restMinutes:i,elapsedRestTimeInSeconds:o,setRestTime:this.setRestTime},"BREAK")))),s.a.createElement(d.a,null,s.a.createElement(I,{onStart:t?this.handleStartTimer:null,onPause:t?this.handlePauseTimer:null,isTimeRunning:a,disabled:0===n||0===i},this.state.isTimeRunning?"Stop Pomodoro":"Start Pomodoro"),s.a.createElement(v,{disabled:!t,onCancel:t?this.handleCancelTimer:null},"Cancel"),l.matches&&s.a.createElement(W,{checked:c,checkFn:this.toggleTimeUnitDisplay},"Set Break")))}}]),a}(n.Component),j=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement(u.a,{className:"vh-100"},s.a.createElement(d.a,null,s.a.createElement(_,null)))}}]),a}(s.a.Component),A=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,".")}}]),a}(s.a.Component),B=(a(26),a(17)),D=a.n(B);var K=function(){return s.a.createElement(s.a.StrictMode,null,s.a.createElement("div",{className:"App ".concat(D.a.bgColor)},s.a.createElement(u.a,{className:"py-5"},s.a.createElement(d.a,{className:"h-100"},s.a.createElement(h.a,{sm:12,md:{order:2},className:"col-md-9 shadow"},s.a.createElement(j,null)),s.a.createElement(h.a,{sm:12,className:"col-md-3 border border-danger rounded shadow"},s.a.createElement(A,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[18,1,2]]]);
//# sourceMappingURL=main.bb3b4af9.chunk.js.map