(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{30:function(e,a,t){},31:function(e,a,t){e.exports=t.p+"static/media/sliderImg1.a535ca67.jpg"},32:function(e,a,t){e.exports=t.p+"static/media/sliderImg2.12dec7d3.jpg"},33:function(e,a,t){e.exports=t.p+"static/media/sliderImg3.90777c2e.jpg"},34:function(e,a,t){e.exports=t.p+"static/media/sliderImg4.376678ed.jpg"},35:function(e,a,t){e.exports=t.p+"static/media/sliderImg5.402b424b.jpg"},36:function(e,a,t){e.exports=t.p+"static/media/sliderImg6.b1955016.webp"},38:function(e,a,t){"use strict";t.r(a),t.d(a,"nextImage",function(){return v}),t.d(a,"prevImage",function(){return N}),t.d(a,"scrollToSection",function(){return x});var n=t(3),r=t(0),l=t.n(r),i=(t(30),t(31)),c=t.n(i),s=t(32),o=t.n(s),m=t(33),d=t.n(m),u=t(34),p=t.n(u),_=t(35),E=t.n(_),b=t(36),g=t.n(b),f=t(37),v=function(e,a,t,n,r){a(e),t!==r.length-1?n(t+1):n(0)},N=function(e,a,t,n,r){a(e),n(0!==t?t-1:r.length-1)},x=function(e){e.current&&e.current.scrollIntoView()};a.default=function(e){var a=e.setContacto,t=[c.a,d.a,o.a,p.a,E.a,g.a],i=Object(r.useState)(0),s=Object(n.a)(i,2),m=s[0],u=s[1],_=Object(r.useState)(15e3),b=Object(n.a)(_,2),x=b[0],h=b[1],I=Object(r.useState)(!0),j=Object(n.a)(I,2),w=j[0],A=j[1],C=function(){A(!1),document.getElementById("slider_text").classList.remove("slider_text_animation_animation"),document.getElementById("slider_text_2").classList.remove("slider_text_animation_animation"),document.getElementById("slider_text_3").classList.remove("slider_text_animation_animation"),setTimeout(function(){document.getElementById("slider_text").classList.add("slider_text_animation_animation"),document.getElementById("slider_text_2").classList.add("slider_text_animation_animation"),document.getElementById("slider_text_3").classList.add("slider_text_animation_animation")},200),setTimeout(function(){A(!0)},900)};return Object(r.useEffect)(function(){var e=setInterval(function(){v(15e3,h,m,u,t),C()},x);return function(){return clearInterval(e)}}),l.a.createElement("main",null,l.a.createElement("div",{className:"container_slider_principal"},l.a.createElement("div",{className:"slider_principal",id:"sliderPrincipal"},t.length?t.map(function(e,a){return l.a.createElement("div",{className:"slider_section ".concat(m===a?"carrousel_active":""),key:"imageSlider"+a},l.a.createElement("img",{src:e,alt:"",className:"img_slider_principal"}))}):l.a.createElement("div",{className:"slider_not_found"},l.a.createElement("h1",null,'"La Familia"',l.a.createElement("br",null),"Distribuidora"))),l.a.createElement("button",{className:"container_btn slider_btn_left",id:"sliderbtnLeft",disabled:!w,onClick:function(){N(15e3,h,m,u,t),C()}},l.a.createElement(f.a,{className:"arrow_icon"})),l.a.createElement("button",{className:"container_btn slider_btn_right",id:"sliderbtnRight",disabled:!w,onClick:function(){v(15e3,h,m,u,t),C()}},l.a.createElement(f.b,{className:"arrow_icon"})),l.a.createElement("div",{className:"container_info_trainer"},l.a.createElement("div",{className:"info_trainer"},l.a.createElement("p",{className:"slider_text_animation slider_text_animation_animation",id:"slider_text"},"Entrenador personal"),l.a.createElement("h3",{className:"slider_text_animation slider_text_animation_animation",id:"slider_text_2"},"SDN ",l.a.createElement("span",null,"GYM")),l.a.createElement("button",{className:"slider_text_animation slider_text_animation_animation",id:"slider_text_3",onClick:function(){return a(!0)}},"Contactame")))))}},40:function(e,a,t){},53:function(e,a,t){e.exports=t.p+"static/media/Alimentacion_1.b0a5e3b6.jpg"},54:function(e,a,t){e.exports=t.p+"static/media/Alimentacion_2.3903f5bf.jpg"},55:function(e,a,t){e.exports=t.p+"static/media/Alimentacion_3.3b800970.jpg"},56:function(e,a,t){e.exports=t.p+"static/media/Alimentacion_4.1a525836.jpg"},57:function(e,a,t){e.exports=t.p+"static/media/Alimentacion_5.f5644cd0.jpg"},58:function(e,a,t){e.exports=t.p+"static/media/Alimentacion_6.023c752d.png"},59:function(e,a,t){e.exports=t.p+"static/media/Alimentacion_7.e23079ac.png"},60:function(e,a,t){e.exports=t.p+"static/media/Alimentacion_8.eeb5488b.jpg"},75:function(e,a,t){"use strict";t.r(a);var n=t(3),r=t(0),l=t.n(r),i=(t(40),t(14)),c=t(38),s=t(53),o=t.n(s),m=t(54),d=t.n(m),u=t(55),p=t.n(u),_=t(56),E=t.n(_),b=t(57),g=t.n(b),f=t(58),v=t.n(f),N=t(59),x=t.n(N),h=t(60),I=t.n(h),j=t(39),w=t(37);a.default=function(e){var a=e.SECTION_NIVEL,t=[o.a,d.a,p.a,E.a,I.a],s=Object(r.useState)(0),m=Object(n.a)(s,2),u=m[0],_=m[1],b=Object(r.useState)(1e4),f=Object(n.a)(b,2),N=f[0],h=f[1];return Object(r.useEffect)(function(){var e=setInterval(function(){Object(c.nextImage)(1e4,h,u,_,t)},N);return function(){return clearInterval(e)}}),Object(r.useEffect)(function(){Object(c.scrollToSection)(a)},[]),l.a.createElement("div",{className:"level_principal",ref:a},l.a.createElement("h2",null,l.a.createElement(j.b,{className:"dumbbell"}),"Alimentaci\xf3n",l.a.createElement(j.b,{className:"dumbbell"})),l.a.createElement("div",{className:"level_container"},l.a.createElement("div",{className:"datos"},l.a.createElement("div",{className:"imagen level_slider"},l.a.createElement("div",{className:"container_slider_principal"},l.a.createElement("div",{className:"slider_principal",id:"slider_principal"},t.length?t.map(function(e,a){return l.a.createElement("div",{className:"slider_section ".concat(u===a?"carrousel_active":""),key:"imageSlider"+a},l.a.createElement("img",{src:e,alt:"",className:"img_slider_principal"}))}):l.a.createElement("div",{className:"slider_not_found"},l.a.createElement("h5",null,"Error al cargar las imagenes"))),l.a.createElement("div",{className:"container_btn slider_btn_left",id:"sliderbtnLeft",onClick:function(){return Object(c.prevImage)(15e3,h,u,_,t)}},l.a.createElement(w.a,{className:"arrow_icon"})),l.a.createElement("div",{className:"container_btn slider_btn_right",id:"sliderbtnRight",onClick:function(){return Object(c.nextImage)(15e3,h,u,_,t)}},l.a.createElement(w.b,{className:"arrow_icon"})))),l.a.createElement("div",{className:"info"},l.a.createElement("hr",null),l.a.createElement("br",null),l.a.createElement("h5",null,"CLASIFICACI\xd3N DE LOS ALIMENTOS"),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("br",null),l.a.createElement("p",null,"El primer paso y el m\xe1s significativo a la hora de mejorar nuestra alimentaci\xf3n es saber clasificar los alimentos.",l.a.createElement("br",null),l.a.createElement("br",null),"TAREA: Tu alimentaci\xf3n tendr\xeda que basarse en un 80% o m\xe1s de alimentos reales o m\xednimamente procesados, mientras que el 20% o menos, del total de alimentos consumidos a diario, pueden ser procesasos. A los ultaprocesados intentaremos eliminarlos por completo."),l.a.createElement("br",null),l.a.createElement("a",{href:"https://www.instagram.com/p/CrM0-NXuTN5/?utm_source=ig_web_copy_link",target:"_blank",rel:"noopener noreferrer"},"Ver en instagram")))),l.a.createElement("div",{className:"level_container"},l.a.createElement("div",{className:"datos"},l.a.createElement("div",{className:"imagen"},l.a.createElement("img",{src:g.a,alt:""})),l.a.createElement("div",{className:"info"},l.a.createElement("hr",null),l.a.createElement("br",null),l.a.createElement("h5",null,"NO POLARIZAR"),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("br",null),l.a.createElement("p",null,"En lo que respecta a la alimentaci\xf3n y entrenamiento no debemos pensar en blanco o negro, sino en grises, porque los buenos caminos no se encuentran en los extremos.",l.a.createElement("br",null),l.a.createElement("br",null),"TAREA: Incluir ese 20% o menos de alimentos procesados o ultraprocesados en las situaciones que lo ameriten."),l.a.createElement("br",null),l.a.createElement("a",{href:"https://www.instagram.com/p/Ctz6LnkJcPh/?utm_source=ig_web_copy_link",target:"_blank",rel:"noopener noreferrer"},"Ver en instagram")))),l.a.createElement("div",{className:"level_container"},l.a.createElement("div",{className:"datos"},l.a.createElement("div",{className:"imagen"},l.a.createElement("img",{src:v.a,alt:""})),l.a.createElement("div",{className:"info"},l.a.createElement("hr",null),l.a.createElement("br",null),l.a.createElement("h5",null,"Calor\xedas"),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("br",null),l.a.createElement("p",null,'CALOR\xcdA (cal) Es una unidad de energ\xeda; cantidad de calor necesario para elevar la temperatura de 1 gramo de agua en 1\xb0C, (de 14,5 \xbaC a 15,5 \xbaC). Tambi\xe9n se la llamada "calor\xeda-gramo" o "calor\xeda peque\xf1a". Una variante empleada en nutrici\xf3n es sustituir la cantidad de agua referida por 1 kg. A esta variante basada en kilogramo se la llama "kilocalor\xeda (kcal)" o "calor\xeda grande". Calor\xeda (Cal; con \xabC\xbb may\xfascula). Por lo tanto, 1 kilocalor\xeda (kcal) = 1000 calor\xedas (cal). . En nuestro d\xeda a d\xeda necesitamos un aporte continuo de ENERG\xcdA para: \u2022 llevar a cabo todas nuestras funciones vitales; card\xedaca, nerviosa, digestiva, respiratoria, reproductiva, etc. \u2022 realizar trabajo muscular, desarrollando; actividad y ejercicio f\xedsico. \u2022 producir procesos biosint\xe9ticos relacionados con el crecimiento y reparaci\xf3n de tejidos. \u2022 mantener la temperatura corporal. Etc. La energ\xeda que necesitamos para poder llevar a cabo todo esto es suministrada por los alimentos que consumimos.'),l.a.createElement("br",null),l.a.createElement("a",{href:"https://www.instagram.com/p/CZkgea7pulp/?utm_source=ig_web_copy_link",target:"_blank",rel:"noopener noreferrer"},"Ver en instagram")))),l.a.createElement("div",{className:"level_container"},l.a.createElement("div",{className:"datos"},l.a.createElement("div",{className:"imagen"},l.a.createElement("img",{src:x.a,alt:""})),l.a.createElement("div",{className:"info"},l.a.createElement("hr",null),l.a.createElement("br",null),l.a.createElement("h5",null,"Macro y Micro nutrientes"),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("br",null),l.a.createElement("p",null,"NUTRIENTES Son sustancias contenidas en alimentos. Los requeridos en grandes cantidades son llamados MACROnutrientes y los requeridos en cantidades peque\xf1as se les conoce como MICROnutrientes. MACRONUTRIENTES: Proporcionan energ\xeda al organismo. Adem\xe1s, sirven para reparar y construir estructuras, promover el crecimiento y regular procesos metab\xf3licos. Este grupo est\xe1 constituido por: \u2022 Prote\xednas \u2022 Grasas \u2022 Hidratos de Carbono MICRONUTRIENTES: Permiten el desarrollo de procesos metab\xf3licos, previenen infecciones y contribuyen al crecimiento (son necesarios para el mantenimiento de la salud) y no producen energ\xeda como los macronutrientes. Aqu\xed encontramos: \u2022 Vitaminas \u2022 Minerales"),l.a.createElement("br",null),l.a.createElement("a",{href:"https://www.instagram.com/p/CZAhwG2pQj8/?utm_source=ig_web_copy_link",target:"_blank",rel:"noopener noreferrer"},"Ver en instagram")))),l.a.createElement(i.b,{className:"button_level btn_next_level",to:"/Movimiento"},"Movimiento"))}}}]);
//# sourceMappingURL=6.2a9880f5.chunk.js.map