(this["webpackJsonppomodoro-deluxe"]=this["webpackJsonppomodoro-deluxe"]||[]).push([[0],{17:function(e,t,a){e.exports={timerColonStyles:"TimerColon_timerColonStyles__141oB",blink:"TimerColon_blink__WJKDJ"}},18:function(e,t,a){e.exports=a.p+"static/media/dot.dd0f186c.svg"},19:function(e,t,a){e.exports={label:"ToggleTimeUnit_label__3TOHs",checkboxDiv:"ToggleTimeUnit_checkboxDiv__1yUdo"}},26:function(e,t,a){e.exports={cardGeneralStyles:"QuickStartPanel_cardGeneralStyles__ODsuY"}},27:function(e,t,a){e.exports={bgColor:"App_bgColor__h_vzy"}},34:function(e,t,a){e.exports=a(44)},39:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(13),o=a.n(r),i=(a(39),a(7)),l=a(8),c=a(10),m=a(9),u=a(29),d=a(47),p=a(54),h=a(48);function S(e){return[Math.floor(e/60),Math.floor(e%60)]}var f=function(e){var t=e.title,a=e.date,n=e.workTime,r=e.restTime,o=e.elapsedWorkTimeInSeconds,i=e.elapsedRestTimeInSeconds,l=e.pausesCount,c=e.handleClose;return s.a.createElement("div",{className:"my-3",style:{width:"330px"}},s.a.createElement(p.a,{onClose:c},s.a.createElement(p.a.Header,{closeLabel:"Close"},s.a.createElement("strong",{className:"mr-auto"},t),s.a.createElement("strong",null,a.toLocaleDateString()),s.a.createElement("small",null,a.toLocaleTimeString())),s.a.createElement(p.a.Body,{className:"text-center"},s.a.createElement(d.a,null,s.a.createElement(h.a,{sm:6},s.a.createElement("small",null,"Work Time:")," ",s.a.createElement("strong",null,n," min")," ",s.a.createElement("br",null),s.a.createElement("small",null,"Rest Time:")," ",s.a.createElement("strong",null,r," min")," ",s.a.createElement("br",null)),s.a.createElement(h.a,{sm:6},s.a.createElement("small",null,"Elapsed Work:")," ",s.a.createElement("strong",null,S(o)[0],":",S(o)[1]," min")," ",s.a.createElement("br",null),s.a.createElement("small",null,"Elapsed Rest:")," ",s.a.createElement("strong",null,S(i)[0],":",S(i)[1]," min")," ",s.a.createElement("br",null))),s.a.createElement(d.a,null,s.a.createElement("h4",{className:"mx-auto"},"Total Pauses:"," ",s.a.createElement("strong",{style:{color:"red"}},l))))))},T=a(58),g=a(49),E=a(55),v=(a(42),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).sortByDate=function(){n.setState((function(e){return{historyItemsFromStorage:e.historyItemsFromStorage.sort((function(e,t){var a=new Date(e.date),n=new Date(t.date);return parseInt(n.getTime())-parseInt(a.getTime())}))}}))},n.deleteItem=function(e){localStorage.removeItem(e),n.setState((function(t){return{historyItemsFromStorage:t.historyItemsFromStorage.filter((function(t){return t.id!==e}))}}))},n.moveDataFromStorageToState=function(){var e=Object.entries(localStorage).map((function(e){return e[0].includes("Pomodoro")?e:null})).filter((function(e){return e}));n.setState({historyItemsFromStorage:e})},n.prepareDataForHistoryItem=function(){n.setState((function(e){return{historyItemsFromStorage:e.historyItemsFromStorage.map((function(e){var t=JSON.parse(e[1]),a=t.date;return a=new Date(a),delete t.date,t.date=a,t.id=e[0],t}))}}))},n.state={itemArrived:!1,storageID:0,historyItemsFromStorage:[]},n}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){if(e!==this.props){var a=Object(u.a)({},this.props);a.date=new Date,localStorage.setItem("Pomodoro-Deluxe-".concat(Object(E.a)()),JSON.stringify(a)),this.setState({itemArrived:!1}),this.moveDataFromStorageToState(),this.prepareDataForHistoryItem(),this.sortByDate()}console.count("HistoryPanel update")}},{key:"componentDidMount",value:function(){this.moveDataFromStorageToState(),this.prepareDataForHistoryItem(),this.sortByDate(),console.count("HistoryPanel mount")}},{key:"componentWillUnmount",value:function(){console.count("HistoryPanel unmount")}},{key:"render",value:function(){var e=this,t=this.state.historyItemsFromStorage;return s.a.createElement(s.a.Fragment,null,s.a.createElement(d.a,null,s.a.createElement("div",{className:"mx-auto"},s.a.createElement(T.a,null,t.length?t.map((function(t){return s.a.createElement(g.a,{key:t.id,timeout:{enter:800,exit:500},classNames:"historyItem"},s.a.createElement(f,Object.assign({handleClose:function(){e.deleteItem(t.id)},key:t.id},t)))})):null))))}}]),a}(n.Component)),k=a(50),y=a(56),I=function(e){var t=e.time;return s.a.createElement(d.a,{style:{fontSize:"30px"}},s.a.createElement(h.a,{className:"d-flex align-items-sm-center justify-content-sm-center text-warning"},t<10?"0".concat(t):t))},b=a(17),w=a.n(b),R=a(51),C=a(18),x=a.n(C),D=function(){return s.a.createElement(k.a,{className:"d-flex flex-column align-items-center"},s.a.createElement(R.a,{className:w.a.timerColonStyles,src:x.a,roundedCircle:!0}),s.a.createElement(R.a,{className:w.a.timerColonStyles,src:x.a,roundedCircle:!0}))},M=a(52),W=a(57),N=function(e){var t=e.setTime;return s.a.createElement(M.a,{className:"btn-sm w-50 mx-auto"},s.a.createElement(W.a,{variant:"danger","data-toggle":"tooltip","data-placement":"bottom",title:"+",className:"shadow",onClick:t},"+"),s.a.createElement(W.a,{variant:"outline-danger","data-toggle":"tooltip","data-placement":"bottom",title:"-",className:"shadow",onClick:t},"-"))},O=function(e){var t=e.children,a=e.setTime,n=60*e.minutesSet-e.elapsedTimeInSeconds,r=Math.floor(n/60),o=Math.floor(n%60);return s.a.createElement(s.a.Fragment,null,s.a.createElement(y.a,{className:"p-3 mx-auto my-auto bg-light shadow-lg border border-warning rounded-pill"},s.a.createElement(d.a,{className:"mx-auto text-uppercase text-warning"},t),s.a.createElement(d.a,{className:"mx-auto"},s.a.createElement(h.a,null,s.a.createElement(I,{time:r>0?r:0})),s.a.createElement(h.a,{className:"w-25"},s.a.createElement(D,null)),s.a.createElement(h.a,null,s.a.createElement(I,{time:o>0?o:0}))),s.a.createElement(d.a,null,s.a.createElement(N,{setTime:a}))))},j=a(53),F=function(e){var t=e.children,a=e.disabled,n=e.handleStartStop,r=e.pausesCount;return s.a.createElement("p",null,s.a.createElement(W.a,{className:"mt-5 mx-3 ".concat(a?"disabled":null),variant:"warning","data-toggle":"tooltip","data-placement":"top",title:"Start pomodoro",onClick:a?null:n},t,s.a.createElement(j.a,{className:"ml-2",variant:"light"},r)))},_=function(e){var t=e.children,a=e.disabled,n=e.onCancel;return s.a.createElement("p",null,s.a.createElement(W.a,{className:"mt-5 mx-3 ".concat(a?"disabled":null),variant:"danger","data-toggle":"tooltip","data-placement":"top",title:"Cancel session",onClick:n},t))},A=a(19),P=a.n(A),B=function(e){var t=e.checkFn,a=e.children,n=e.checked;return s.a.createElement("label",{className:P.a.label},s.a.createElement("input",{type:"checkbox",checked:n,onChange:t}),s.a.createElement("div",{className:P.a.checkboxDiv}),a)},H=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).percentToRadian=function(e){return 360*e/100*(Math.PI/180)},n.draw=function(){var e=n.props,t=e.percent,a=e.canvasSize,s=e.big,r=void 0!==s&&s,o=a/2,i=n.state.lineWidth,l=o-i/2,c=r?2*i:i,m=n.canvas.current.getContext("2d");m.clearRect(0,0,300,300),m.fillStyle="red",m.strokeStyle="#E0A800",m.beginPath(),m.arc(o,o,c,0,n.percentToRadian(t),!1),m.lineWidth=c,m.stroke(),m.clearRect(l,l,i,i)},n.canvas=s.a.createRef(),n.state={lineWidth:30},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.draw()}},{key:"componentDidUpdate",value:function(){this.draw()}},{key:"render",value:function(){var e=this.props.canvasSize;return s.a.createElement("canvas",{className:"mx-auto shadow-lg rounded-circle",ref:this.canvas,style:{border:"15px solid #E0A800",backgroundColor:"rgba(255,255,255, .7)"},width:e,height:e})}}]),a}(s.a.Component);H.defaultProps={className:""};var U=H,J=a(26),z=a.n(J),Q=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).resetInterval=function(){window.clearInterval(n.customTimerID),n.customTimerID=null},n.toggleTimeUnitDisplay=function(){n.setState((function(e){return{userSetsRestTime:!e.userSetsRestTime}}))},n.handleCancelTimer=function(){var e=n.state,t=e.workMinutes,a=e.restMinutes,s=e.elapsedWorkTimeInSeconds,r=e.elapsedRestTimeInSeconds,o=e.pausesCount;n.props.fetchFn(t,a,s,r,o),n.setState({isAppReady:!1,isTimeRunning:!1,isItWorkTime:!1,isItRestTime:!1,workMinutes:0,restMinutes:0,pausesCount:0,elapsedWorkTimeInSeconds:0,elapsedRestTimeInSeconds:0}),n.resetInterval()},n.handlePauseTimer=function(){n.setState((function(e){return{isTimeRunning:!1,pausesCount:e.pausesCount++}})),n.resetInterval()},n.handleStartTimer=function(){null===n.customTimerID&&(n.setState({isTimeRunning:!0,isItWorkTime:!0}),n.customTimerID=window.setInterval((function(){n.state.isItWorkTime&&n.setState((function(e){return{elapsedWorkTimeInSeconds:e.elapsedWorkTimeInSeconds+1}})),n.state.isItRestTime&&n.state.restMinutes>0&&n.setState((function(e){return{elapsedRestTimeInSeconds:e.elapsedRestTimeInSeconds+1}}))}),1e3))},n.setWorkTime=function(e){"+"===e.target.title?n.setState({workMinutes:n.state.workMinutes+.5}):n.state.workMinutes>0?n.setState({workMinutes:n.state.workMinutes-.5}):n.setState({workMinutes:0})},n.setRestTime=function(e){"+"===e.target.title?n.setState({restMinutes:n.state.restMinutes+.5}):n.state.restMinutes>0?n.setState({restMinutes:n.state.restMinutes-.5}):n.setState({restMinutes:0})},n.state={isAppReady:!1,isTimeRunning:!1,isItWorkTime:!1,isItRestTime:!1,workMinutes:0,restMinutes:0,pausesCount:0,elapsedWorkTimeInSeconds:0,elapsedRestTimeInSeconds:0,userSetsRestTime:!1},n.customTimerID=null,n}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(){var e=60*this.state.workMinutes,t=60*this.state.restMinutes,a=this.state.workMinutes>0&&this.state.restMinutes>0&&!1===this.state.isAppReady,n=e===this.state.elapsedWorkTimeInSeconds&&this.state.isItWorkTime&&this.state.restMinutes>0,s=!this.state.isItWorkTime&&this.state.isItRestTime&&t===this.state.elapsedRestTimeInSeconds,r=this.state.isItWorkTime&&this.state.userSetsRestTime,o=this.state.isItRestTime&&!this.state.userSetsRestTime;a&&this.setState({isAppReady:!0}),n&&this.setState({isItWorkTime:!1,isItRestTime:!0}),s&&(this.setState({isAppReady:!1,isTimeRunning:!1,isItWorkTime:!1,isItRestTime:!1,workMinutes:0,restMinutes:0,pausesCount:0,elapsedWorkTimeInSeconds:0,elapsedRestTimeInSeconds:0}),this.resetInterval()),r&&this.setState({userSetsRestTime:!1}),o&&this.setState({userSetsRestTime:!0})}},{key:"render",value:function(){var e=this.state,t=e.isAppReady,a=e.isTimeRunning,n=e.workMinutes,r=e.restMinutes,o=e.elapsedWorkTimeInSeconds,i=e.elapsedRestTimeInSeconds,l=e.userSetsRestTime,c=e.pausesCount,m=!window.matchMedia("(max-width: 992px)").matches,u=!l,p=o/(60*n)*100,S=i/(60*r)*100,f=m||u,T=m||!u;return s.a.createElement(k.a,{className:"p-3 ".concat(z.a.cardGeneralStyles)},s.a.createElement("h2",{className:"text-warning text-center my-3"},"Quick Pomodoro"),s.a.createElement(d.a,null,s.a.createElement(h.a,{className:"d-flex"},s.a.createElement(s.a.Fragment,null,f&&s.a.createElement(O,{minutesSet:n,elapsedTimeInSeconds:o,setTime:this.setWorkTime},"WORK"),T&&s.a.createElement(O,{minutesSet:r,elapsedTimeInSeconds:i,setTime:this.setRestTime},"BREAK")))),s.a.createElement(d.a,null,s.a.createElement(F,{handleStartStop:t&&!a?this.handleStartTimer:this.handlePauseTimer,pausesCount:c,isTimeRunning:a,disabled:0===n||0===r},this.state.isTimeRunning?"Stop Pomodoro":"Start Pomodoro"),s.a.createElement(_,{disabled:!t,onCancel:t?this.handleCancelTimer:null},"Cancel"),!m&&s.a.createElement(B,{checked:l,checkFn:this.toggleTimeUnitDisplay},"Set Break")),s.a.createElement(d.a,null,s.a.createElement(U,{percent:this.state.isItWorkTime?p:S,canvasSize:m?250:150})))}}]),a}(n.Component),G=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={hasError:!1},e}return Object(l.a)(a,[{key:"componentDidCatch",value:function(e,t){console.log("Wyst\u0105pi\u0142 b\u0142\u0105d ",e,t)}},{key:"render",value:function(){var e=this.props,t=e.message,a=e.children;return this.state.hasError?t:a}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),a}(s.a.Component),K=(a(43),a(27)),L=a.n(K),Y=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={title:"Quick Pomodoro",workTime:0,restTime:0,elapsedWorkTimeInSeconds:0,elapsedRestTimeInSeconds:0,pausesCount:0},e.fetchSessionData=function(t,a,n,s,r){e.setState({workTime:t,restTime:a,elapsedWorkTimeInSeconds:n,elapsedRestTimeInSeconds:s,pausesCount:r}),console.log(typeof t,typeof s)},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){console.count("App mount")}},{key:"componentDidUpdate",value:function(){console.count("App update")}},{key:"componentWillUnmount",value:function(){console.count("App mount")}},{key:"render",value:function(){return s.a.createElement(s.a.StrictMode,null,s.a.createElement(k.a,{fluid:!0,className:"App ".concat(L.a.bgColor," vh-100 p-5")},s.a.createElement(d.a,null,s.a.createElement(h.a,{sm:12,md:{order:2},className:"col-md-6 col-lg-9 shadow",style:{maxHeight:"90vh"}},s.a.createElement(G,{message:"B\u0142\u0105d w QuickstartPanel"},s.a.createElement(Q,{fetchFn:this.fetchSessionData}))),s.a.createElement(h.a,{sm:12,className:"col-md-6 col-lg-3 rounded shadow overflow-auto",style:{maxHeight:"90vh"}},s.a.createElement(G,{message:"B\u0142\u0105d w HistoryPanel"},s.a.createElement(v,this.state))))))}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.bdd84446.chunk.js.map