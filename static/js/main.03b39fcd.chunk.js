(this["webpackJsonpbc.game"]=this["webpackJsonpbc.game"]||[]).push([[0],{131:function(e,a,t){e.exports=t(233)},136:function(e,a,t){},140:function(e,a){},142:function(e,a){},152:function(e,a){},154:function(e,a){},181:function(e,a){},182:function(e,a){},187:function(e,a){},189:function(e,a){},213:function(e,a){},229:function(e,a,t){},233:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(26),c=t.n(r),l=(t(136),t(120)),s=t(121),i=t(129),u=t(125),d=t(236),h=t(237),f=t(238),_=t(239),m=t(240),v=t(27);function p(e){var a=v.createHash("sha256").update(e).digest("hex");console.log("result hash",a);for(var t=0,n="",o=0;t<4;)n=parseInt(a.substring(2*t,2*t+2),16),o+=n/=Math.pow(256,t+1),t++;return(o=(o=(o=10001*o/100).toString()).split("."))[1]=o[1].slice(0,2),o=o[0]+"."+o[1]}var S=t(27);function b(e){var a=S.createHash("sha512").update(e).digest("hex");console.log("result hash",a);var t=0;do{var n=parseInt(a.substr(t,5),16);t+=5}while(n>=1e6);return n%1e5}var g=t(27);function E(e){for(var a=0,t=0;t<4;t++)a+=parseInt(e.substr(2*t,2),16)/Math.pow(256,t+1);return a}function k(e,a,t){var n=[];return function(e){for(var a=[],t=0;8*t<e.length;t++)a.push(E(e.substr(8*t)));return a}(function(e){var a;return a=g.createHash("sha512").update(e).digest("hex"),console.log("result hash",a),a}("".concat(e).concat(a).concat(t))).map((function(e,a){var t=Math.floor(2*e)?"right":"left";return n.push(t+", ")})),console.log("Plinko -- ",n),n}var C=t(27),w=function(e){var a=C.createHash("sha256").update(e).digest("hex");console.log("result hash",a);a=a.slice(0,13);var t=parseInt(a,16)/Math.pow(2,52);t=99/(1-t);var n=Math.floor(t);return a?Math.max(1,n/100):""},y=t(128),N=t(122),D=t(27);function j(e){for(var a=0,t=0;t<4;t++)a+=parseInt(e.substr(2*t,2),16)/Math.pow(256,t+1);return a}function M(e,a,t,n){var o,r=[],c=Object(N.a)(function(e){for(var a=[],t=0;8*t<e.length;t++)a.push(52*j(e.substr(8*t))),console.log(52*j(e.substr(8*t)));return a}(function(e){var a;return a=D.createHash("sha256").update(e).digest("hex"),console.log("result hash",a),a}("".concat(e,":").concat(a,":").concat(t,":").concat(n))).entries());try{for(c.s();!(o=c.n()).done;){var l=Object(y.a)(o.value,2),s=(l[0],l[1]);r.push(s)}}catch(i){c.e(i)}finally{c.f()}return r=function(e){var a=["ace_of_spades","4_of_hearts","7_of_clubs","10_of_diamonds","2_of_spades","king_of_clubs","5_of_hearts","8_of_clubs","jack_of_diamonds","3_of_spades","6_of_hearts","queen_of_diamonds","9_of_clubs","ace_of_hearts","4_of_clubs","7_of_diamonds","10_of_spades","2_of_hearts","king_of_diamonds","5_of_clubs","8_of_diamonds","jack_of_spades","3_of_hearts","6_of_clubs","queen_of_spades","9_of_diamonds","ace_of_clubs","4_of_diamonds","7_of_spades","10_of_hearts","2_of_clubs","king_of_spades","5_of_diamonds","8_of_spades","jack_of_hearts","3_of_clubs","6_of_diamonds","queen_of_hearts","9_of_spades","ace_of_diamonds","4_of_spades","7_of_hearts","10_of_clubs","2_of_diamonds","king_of_hearts","5_of_spades","8_of_hearts","jack_of_clubs","3_of_diamonds","6_of_spades","queen_of_clubs","9_of_hearts"];return e=e.map((function(e){return a[Math.floor(e)]}))}(r),console.log("Hilo : ",r),r[0]}t(229);var x=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).handleSubmit=function(a){var t=e.state,n=t.ServerSeed,o=t.ClientSeed,r=t.Nonce,c=t.classicDice,l=t.hashDice,s=t.plinko,i=t.limbo,u=t.hilo,d=t.round;!1===a.currentTarget.checkValidity()||""===n||""===o?(a.preventDefault(),a.stopPropagation(),e.setState({validated:!0})):e.setState({result:c?p("".concat(n,":").concat(o,":").concat(r)):l?b("".concat(n).concat(o).concat(r)):s?k(n,o,r):i?w("".concat(n,":").concat(o,":").concat(r)):u?M(n,o,r,d):0,showResult:!0,validated:!0})},e.state={ServerSeed:"",ClientSeed:"",Nonce:0,result:0,showResult:!1,classicDice:!0,hashDice:!1,validated:!1,plinko:!1,limbo:!1,hilo:!1,round:0},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.ServerSeed,n=a.ClientSeed,r=a.Nonce,c=a.result,l=a.showResult,s=a.classicDice,i=a.hashDice,u=a.plinko,v=a.limbo,p=a.hilo,S=a.validated;return o.a.createElement("div",{className:"container pt-5"},o.a.createElement(d.a,null,o.a.createElement("img",{width:128,height:128,className:"mr-3",src:"logo192.png",alt:"Bc.Game"}),o.a.createElement(d.a.Body,null,o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("h5",null,"Provably Fair Verify Tool (BC.GAME)"))),o.a.createElement(h.a,{className:"mt-3 ml-3"},o.a.createElement(f.a,{variant:s?"primary":"light",onClick:function(){e.setState({classicDice:!0,hashDice:!1,plinko:!1,limbo:!1,hilo:!1,showResult:!1,ServerSeed:"",ClientSeed:"",Nonce:0,validated:!1})}},"Classic Dice"),o.a.createElement(f.a,{variant:i?"primary":"light",className:"ml-2",onClick:function(){e.setState({hashDice:!0,classicDice:!1,plinko:!1,limbo:!1,hilo:!1,showResult:!1,ServerSeed:"",ClientSeed:"",Nonce:0,validated:!1})}},"Hash Dice"),o.a.createElement(f.a,{variant:u?"primary":"light",className:"ml-2",onClick:function(){e.setState({hashDice:!1,classicDice:!1,plinko:!0,limbo:!1,hilo:!1,showResult:!1,ServerSeed:"",ClientSeed:"",Nonce:0,validated:!1})}},"Plinko"),o.a.createElement(f.a,{variant:v?"primary":"light",className:"ml-2",onClick:function(){e.setState({hashDice:!1,classicDice:!1,plinko:!1,limbo:!0,hilo:!1,showResult:!1,ServerSeed:"",ClientSeed:"",Nonce:0,validated:!1})}},"Limbo"),o.a.createElement(f.a,{variant:p?"primary":"light",className:"ml-2",onClick:function(){e.setState({hashDice:!1,classicDice:!1,plinko:!1,limbo:!1,hilo:!0,showResult:!1,ServerSeed:"",ClientSeed:"",Nonce:0,validated:!1})}},"HiLo")),o.a.createElement(_.a,{className:"mt-5 col-md-5",noValidate:!0,validated:S},o.a.createElement(_.a.Group,{controlId:"formBasicServerSeed"},o.a.createElement(_.a.Label,null,"Server Seed"),o.a.createElement(_.a.Control,{type:"text",required:!0,placeholder:"Enter Server Seed",value:t,onChange:function(a){e.setState({ServerSeed:a.target.value})}}),o.a.createElement(_.a.Control.Feedback,{type:"invalid"},"Please provide a valid Server Seed.")),o.a.createElement(_.a.Group,{controlId:"formBasicClientSeed"},o.a.createElement(_.a.Label,null,"Client Seed"),o.a.createElement(_.a.Control,{type:"text",required:!0,placeholder:"Enter Client Seed",value:n,onChange:function(a){e.setState({ClientSeed:a.target.value})}}),o.a.createElement(_.a.Control.Feedback,{type:"invalid"},"Please provide a valid Client Seed.")),o.a.createElement(_.a.Group,{controlId:"formBasicNonce"},o.a.createElement(_.a.Label,null,"Nonce"),o.a.createElement(_.a.Control,{type:"number",required:!0,placeholder:"Nonce",value:r,onChange:function(a){e.setState({Nonce:a.target.value})}})),o.a.createElement(f.a,{variant:"primary",type:"button",onClick:this.handleSubmit},"Submit"),l&&S&&o.a.createElement(m.a,{className:"mt-3",variant:"success"},"The result is : ",c," !")),c?o.a.createElement("img",{src:"8_of_diamonds.png",alt:c}):"")}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[131,1,2]]]);
//# sourceMappingURL=main.03b39fcd.chunk.js.map