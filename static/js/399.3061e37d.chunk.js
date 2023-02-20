"use strict";(self.webpackChunkpet_support_team_project_8=self.webpackChunkpet_support_team_project_8||[]).push([[399],{1454:function(n,e,t){t.d(e,{Z:function(){return a}});t(2791);var i,r=t(8402),o=t(168),c={LoaderWrap:t(6444).ZP.div(i||(i=(0,o.Z)(["\n  z-index: 1000;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(47, 36, 28, 0.7);\n  overflow-y: hidden;\n"])))},s=t(3329),l=c.LoaderWrap,a=function(n){var e=n.viewportWidth,t=e?Number(e)<=500?"70":Number(e)<=767?"100":Number(e)>=768?"120":void 0:"80";return(0,s.jsx)(l,{children:(0,s.jsx)(r.s5,{strokeColor:"#fc731e",strokeWidth:"3.7",animationDuration:"0.8",visible:!0,width:t,ariaLabel:"Loading"})})}},2373:function(n,e,t){t.d(e,{Z:function(){return h}});var i,r,o,c=t(2791),s=t(168),l=t(6444),a={Backdrop:l.ZP.div(i||(i=(0,s.Z)(["\n  width: 100%;\n  height: 100%;\n  background-color: rgba(17, 17, 17, 0.6);\n  position: fixed;\n  z-index: 200;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  backdrop-filter: blur(10px);\n  opacity: ",";\n  pointer-events: ",";\n  transition: 0.5s;\n"])),(function(n){return n.active?1:0}),(function(n){return n.active?"all":"none"})),Content:l.ZP.div(r||(r=(0,s.Z)(["\n  border-radius: 40px;\n  background: ",";\n  transform: ",";\n  transition: 0.4s all;\n  @media "," {\n    border-radius: 20px;\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.active?"scale(1)":"scale(0.5)"}),(function(n){return n.theme.media.mobile})),CloseBtn:l.ZP.div(o||(o=(0,s.Z)(["\n  position: fixed;\n  cursor: pointer;\n  display: flex;\n  text-align: center;\n  align-items: center;\n  top: 16px;\n  right: 16px;\n  background-color: ",";\n  border: none;\n  border-radius: ",";\n  padding: 2px;\n"])),(function(n){return n.theme.colors.bg}),(function(n){return n.theme.radius.round}))},d=t(71),u=t(3329),h=function(n){var e=n.active,t=n.setActive,i=n.children,r=a.Backdrop,o=a.Content,s=a.CloseBtn,l=(0,c.useCallback)((function(n){"Escape"===n.key&&t(!1)}),[t]);return(0,c.useEffect)((function(){return document.body.style.overflow=e?"hidden":"",document.addEventListener("keydown",l),function(){return document.removeEventListener("keydown",l)}})),(0,u.jsx)(r,{active:e,onClick:function(){return t(!1)},children:(0,u.jsxs)(o,{active:e,onClick:function(n){return n.stopPropagation()},children:[(0,u.jsx)(s,{onClick:function(){return t(!1)},children:(0,u.jsx)(d.bjh,{size:25})}),i]})})}},9564:function(n,e,t){t.d(e,{Z:function(){return p}});var i,r,o=t(168),c=t(6444),s=t(1607),l={Container:c.ZP.div(i||(i=(0,o.Z)(["\nbackground-color: inherit;\nheight: 100%;\ndisplay: flex;\nflex-direction: column;\ngap: 20px;\nalign-items: center;\n\nfont-family: ",";\nfont-weight: ",";\nfont-size: 30px;\nline-height: 1.375;\ntext-align: center;\n@media screen and (",") {\n    font-size: 20px;\n}"])),s.Z.fonts.manrope,s.Z.fontWeights.bold,s.Z.media.mobile),Face:c.ZP.span(r||(r=(0,o.Z)(["\n@media screen and (",") {\n    font-size: 24px;\n}\nfont-size: 48px;"])),s.Z.media.mobile)},a=t(2791),d=t(8971),u=t(7600),h=t(3329),f=l.Container,m=l.Face,p=function(){return(0,a.useEffect)((function(){return(0,d.Z)(),function(){(0,u.Z)()}}),[]),(0,h.jsxs)(f,{children:[(0,h.jsx)("span",{children:"Unfortunately, nothing was found"}),(0,h.jsx)(m,{children:"-_-"})]})}},6399:function(n,e,t){t.r(e),t.d(e,{default:function(){return Xn}});var i,r,o,c,s,l,a,d,u,h,f,m,p,x,g,b,Z,j,v,y,w,k,z,C,P,B,S,I,L,F,N=t(9439),T=t(2791),W=t(2373),_=t(168),E=t(6444),A=t(8820),H=E.ZP.div(i||(i=(0,_.Z)(["\n  padding: 32px 20px;\n  @media "," {\n    padding: 60px 20px 20px 20px;\n    height: 95vh;\n    overflow: hidden;\n    overflow-y: auto;\n  }\n"])),(function(n){return n.theme.media.mobile})),D=E.ZP.div(r||(r=(0,_.Z)(["\n  display: flex;\n  gap: 20px;\n\n  @media "," {\n    display: flex;\n    flex-direction: column;\n  }\n"])),(function(n){return n.theme.media.mobile})),O=E.ZP.div(o||(o=(0,_.Z)(["\n  position: relative;\n  width: 288px;\n  height: 328px;\n  border-radius: 0px 0px 40px 40px;\n\n  @media "," {\n    width: 240px;\n    height: 240px;\n  }\n  & > img {\n    display: block;\n    height: 100%;\n    width: 100%;\n    border-radius: 0px 0px 40px 40px;\n    object-fit: cover;\n  }\n"])),(function(n){return n.theme.media.mobile})),q=E.ZP.span(c||(c=(0,_.Z)(["\n  position: absolute;\n  width: 158px;\n  height: 28px;\n  left: 0;\n  top: 20px;\n\n  background: rgba(255, 255, 255, 0.6);\n  border-top-right-radius: ",";\n  border-bottom-right-radius: ",";\n  backdrop-filter: blur(2px);\n\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.25;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  letter-spacing: 0.04em;\n\n  color: ",";\n"])),(function(n){return n.theme.radius.normal}),(function(n){return n.theme.radius.normal}),(function(n){return n.theme.fonts.inter}),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.fontSizes.xs}),(function(n){return n.theme.colors.black})),V=E.ZP.div(s||(s=(0,_.Z)(["\n  width: 321px;\n  height: 100%;\n  @media "," {\n    width: 240px;\n  }\n"])),(function(n){return n.theme.media.mobile})),G=E.ZP.h2(l||(l=(0,_.Z)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: 28px;\n  color: ",";\n  line-height: 38px;\n  letter-spacing: -0.01em;\n  @media "," {\n    font-size: ",";\n    line-height: 33px;\n    margin-bottom: 16px;\n  }\n"])),(function(n){return n.theme.fonts.manrope}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.media.mobile}),(function(n){return n.theme.fontSizes.ml})),K=E.ZP.table(a||(a=(0,_.Z)(["\n  width: 200px;\n  table-layout: auto;\n  border-collapse: collapse;\n"]))),M=E.ZP.tr(d||(d=(0,_.Z)(["\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  @media "," {\n    padding: 0;\n  }\n"])),(function(n){return n.theme.media.mobile})),U=E.ZP.td(u||(u=(0,_.Z)(["\n  font-family: ",";\n  font-weight: 600;\n  font-size: ",";\n  color: ",";\n  line-height: 22px;\n  width: 130px;\n  text-align: left;\n  @media "," {\n    width: 100px;\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.fonts.manrope}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.media.mobile}),(function(n){return n.theme.fontSizes.s})),Y=E.ZP.td(h||(h=(0,_.Z)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  color: ",";\n  line-height: 22px;\n  & > a {\n    text-decoration: none;\n    color: ",";\n  }\n  @media "," {\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.fonts.manrope}),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.media.mobile}),(function(n){return n.theme.fontSizes.s})),$=E.ZP.div(f||(f=(0,_.Z)(["\n  margin-top: 28px;\n  margin-bottom: 32px;\n  width: 660px;\n  @media "," {\n    width: 240px;\n    margin-top: 28px;\n    margin-bottom: 40px;\n  }\n  //   display: flex;\n  //   align-items: center;\n  //   text-align: center;\n"])),(function(n){return n.theme.media.mobile})),J=E.ZP.span(m||(m=(0,_.Z)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  color: ",";\n  align-items: center;\n  letter-spacing: 0.04em;\n  @media "," {\n    font-weight: 600;\n    font-size: ",";\n    line-height: 19px;\n    letter-spacing: 0;\n  }\n"])),(function(n){return n.theme.fonts.manrope}),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.media.mobile}),(function(n){return n.theme.fontSizes.s})),Q=E.ZP.span(p||(p=(0,_.Z)(["\n  font-family: ",";\n  font-weight: 600;\n  font-size: ",";\n  color: ",";\n  line-height: 24px;\n  letter-spacing: 0.04em;\n  @media "," {\n    font-weight: 400;\n    font-size: ",";\n    line-height: 19px;\n    letter-spacing: 0;\n  }\n"])),(function(n){return n.theme.fonts.manrope}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.media.mobile}),(function(n){return n.theme.fontSizes.s})),R=E.ZP.div(x||(x=(0,_.Z)(["\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-right: 20px;\n  @media "," {\n    display: flex;\n    flex-direction: column-reverse;\n    margin-right: 0;\n  }\n"])),(function(n){return n.theme.media.mobile})),X=E.ZP.button(g||(g=(0,_.Z)(["\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  align-items: center;\n  cursor: pointer;\n  gap: 12px;\n  border: ",";\n  border-radius: ",";\n  width: 160px;\n  height: 40px;\n  padding: 12px;\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  line-height: 22px;\n  letter-spacing: 0.04em;\n  color: ",";\n  background-color: ",";\n\n  &:hover {\n    background-color: ",";\n    color: ",";\n  }\n\n  @media "," {\n    margin: ","px;\n    font-size: 20px;\n  }\n\n  @media "," {\n    margin-top: ","px;\n  }\n  @media "," {\n    width: 100%;\n  }\n"])),(function(n){return n.theme.borders.box}),(function(n){return n.theme.radius.normal}),(function(n){return n.theme.fonts.manrope}),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.media.desktop}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.media.mobile})),nn={Container:H,Box:D,ImgBox:O,InfoBox:V,Title:G,List:K,Item:M,ComentsBox:$,Coments:J,ComentsContent:Q,BtnBox:R,AddBtn:X,IconHeart:(0,E.ZP)(A.M_L)(b||(b=(0,_.Z)(["\n  display: block;\n  width: 16px;\n  height: 16px;\n  color: ",";\n\n  ",":hover & {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.accent}),X,(function(n){return n.theme.colors.white})),ContactLink:E.ZP.div(Z||(Z=(0,_.Z)(["\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  align-items: center;\n  cursor: pointer;\n  border: ",";\n  border-radius: ",";\n  width: 160px;\n  height: 40px;\n  padding: 12px;\n  font-family: ",";\n  font-size: 16px;\n  color: ",";\n  background-color: ",";\n  letter-spacing: 0.07em;\n  & > a {\n    text-decoration: none;\n    color: ",";\n  }\n  &:hover {\n    background-color: ",";\n    color: ",";\n  }\n  @media "," {\n    margin: ","px;\n    font-size: 20px;\n  }\n\n  @media "," {\n    margin-top: ","px;\n  }\n  @media "," {\n    width: 100%;\n  }\n"])),(function(n){return n.theme.borders.box}),(function(n){return n.theme.radius.normal}),(function(n){return n.theme.fonts.manrope}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.media.tablet}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.media.desktop}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.media.mobile})),Key:U,Value:Y,Category:q},en=t(3329),tn=function(n){var e=n.info,t=n.capitalizedCategory,i=e.img,r=e.category,o=e.title,c=e.breed,s=e.name,l=e.birthday,a=e.sex,d=e.email,u=e.phone,h=e.coments,f=e.place,m=e.price,p=void 0===m?0:m,x=nn.Container,g=nn.Box,b=nn.ImgBox,Z=nn.InfoBox,j=nn.Title,v=nn.List,y=nn.Item,w=nn.ComentsBox,k=nn.Coments,z=nn.ComentsContent,C=nn.BtnBox,P=nn.AddBtn,B=nn.IconHeart,S=nn.ContactLink,I=nn.Key,L=nn.Value,F=nn.Category;return(0,en.jsxs)(x,{children:[(0,en.jsxs)(g,{children:[(0,en.jsxs)(b,{children:[(0,en.jsx)("img",{src:i,alt:"a pet"}),(0,en.jsx)(F,{children:t()})]}),(0,en.jsxs)(Z,{children:[(0,en.jsx)(j,{children:o}),(0,en.jsx)(v,{children:(0,en.jsxs)("tbody",{children:[(0,en.jsxs)(y,{children:[(0,en.jsx)(I,{children:"Name: "}),(0,en.jsxs)(L,{children:[s," "]})]}),(0,en.jsxs)(y,{children:[(0,en.jsx)(I,{children:"Birthday: "}),(0,en.jsxs)(L,{children:[l," "]})]}),(0,en.jsxs)(y,{children:[(0,en.jsx)(I,{children:"Breed: "}),(0,en.jsxs)(L,{children:[c," "]})]}),(0,en.jsxs)(y,{children:[(0,en.jsx)(I,{children:"Plase: "}),(0,en.jsxs)(L,{children:[f," "]})]}),(0,en.jsxs)(y,{children:[(0,en.jsx)(I,{children:"The sex: "}),(0,en.jsxs)(L,{children:[a," "]})]}),(0,en.jsxs)(y,{children:[(0,en.jsx)(I,{children:"Email: "}),(0,en.jsxs)(L,{children:[(0,en.jsx)("a",{href:"mailto:{email}",children:d})," "]})]}),(0,en.jsxs)(y,{children:[(0,en.jsx)(I,{children:"Phone: "}),(0,en.jsx)(L,{children:(0,en.jsx)("a",{href:"tel:{phone}",children:u})})]}),"sell"===r?(0,en.jsxs)(y,{children:[(0,en.jsx)(I,{children:"Price: "}),(0,en.jsxs)(L,{children:[p," "]})]}):""]})})]})]}),(0,en.jsx)(w,{children:(0,en.jsxs)(z,{children:[(0,en.jsx)(k,{children:"Coments: "}),h]})}),(0,en.jsxs)(C,{children:[(0,en.jsxs)(P,{type:"button",children:["Add to",(0,en.jsx)(B,{})]}),(0,en.jsx)("a",{href:"tel:{phone}",children:(0,en.jsx)(S,{children:"Contact"})})]})]})},rn=t(1607),on=t(6036),cn=t(71),sn=E.ZP.li(j||(j=(0,_.Z)(["\nwidth: 280px;\n\n@media screen and (",") {\n    width: 336px;\n}\nbackground: ",";\n\nbox-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);\nborder-radius: 0px 0px 20px 20px;"])),rn.Z.media.tablet,rn.Z.colors.white),ln=E.ZP.div(v||(v=(0,_.Z)(["\npadding: 20px;\npadding-bottom: 32px;"]))),an=E.ZP.div(y||(y=(0,_.Z)(["\nposition: relative;\nwidth: 280px;\nheight: 288px;\n\n@media screen and (",") {\n    width: 336px;\n}\n\n& > img {\n    display: block;\n  height: 100%;\n  width: 100%;\n\n  object-fit: cover;\n}"])),rn.Z.media.tablet),dn=E.ZP.span(w||(w=(0,_.Z)(["\nposition: absolute;\nwidth: 158px;\nheight: 28px;\nleft: 0;\ntop: 20px;\n\nbackground: rgba(255, 255, 255, 0.6);\nborder-top-right-radius: ",";\nborder-bottom-right-radius: ",";\nbackdrop-filter: blur(2px);\n\nfont-family: ",";\nfont-weight: ",";\nfont-size: ",";\nline-height: 1.25;\n\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nletter-spacing: 0.04em;\n\ncolor: ",";\n"])),rn.Z.radius.normal,rn.Z.radius.normal,rn.Z.fonts.inter,rn.Z.fontWeights.normal,rn.Z.fontSizes.xs,rn.Z.colors.black),un=E.ZP.h2(k||(k=(0,_.Z)(["\nfont-family:",";\nfont-weight: ",";\nfont-size: 28px;\nline-height: 1.357;\nletter-spacing: -0.01em;\nmargin-bottom: 20px;\ncolor:",";"])),rn.Z.fonts.manrope,rn.Z.fontWeights.bold,rn.Z.colors.black),hn=E.ZP.div(z||(z=(0,_.Z)(["\ndisplay: flex;\nalign-items: center;\ntext-align: center;\ngap: 40px;\nmargin-bottom: ",";\n"])),(function(n){return"sell"===n.category?"20px":"50px"})),fn=E.ZP.ul(C||(C=(0,_.Z)(["\nfont-family:",";\nfont-weight: ",";\nfont-size: ",";\nline-height: 1.375;\n\ndisplay: flex;\nflex-direction: column;\nalign-items: flex-start;\ntext-align: center;\n\ncolor:",";\n\n& > li:not(:first-child) {\n    margin-top: 8px;\n}"])),rn.Z.fonts.manrope,rn.Z.fontWeights.normal,rn.Z.fontSizes.m,rn.Z.colors.black),mn=E.ZP.button(P||(P=(0,_.Z)(["\nposition: absolute;\nwidth: 44px;\npadding: 0;\nheight: 44px;\nright: 12px;\ntop: 12px;\nborder: none;\nborder-radius: ",";\nbackground: rgba(255, 255, 255, 0.6);\nbackdrop-filter: blur(2px);\n\ncursor: pointer;\n"])),rn.Z.radius.round),pn=(0,E.ZP)(on.uT2)(B||(B=(0,_.Z)(["\nmargin: 0 auto;\ndisplay: block;\nwidth: 28px;\nheight: 28px;\nfill: rgba(255, 255, 255, 0.6);\nstroke: ",";\n    stroke-width: 2px;\ntransition: fill 200ms, stroke 200ms;\n\n",":hover &, ",":focus & {\n    fill: #FF6101;\n    stroke: #FF6101;\n} "])),rn.Z.colors.accent,mn,mn),xn=E.ZP.div(S||(S=(0,_.Z)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\ngap: 12px;"]))),gn=E.ZP.button(I||(I=(0,_.Z)(["\npadding: 8px 0;\nwidth: 248px;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n\nbackground: ",";\nborder: 2px solid ",";\nborder-radius: ",";\n\nfont-family:",";\nfont-weight: ",";\nfont-size: ",";\nline-height: 1.375;\n\ntext-align: center;\nletter-spacing: 0.04em;\ncursor: pointer;\ncolor: ",";\ntransition: color 200ms, border 200ms;\n\n&:focus, &:hover {\nborder: 2px solid #FF6101;\ncolor: #FF6101;\n\n}"])),rn.Z.colors.white,rn.Z.colors.accent,rn.Z.radius.normal,rn.Z.fonts.manrope,rn.Z.fontWeights.normal,rn.Z.fontSizes.m,rn.Z.colors.accent),bn={Trash:(0,E.ZP)(cn.VOs)(L||(L=(0,_.Z)(["\ndisplay: block;\nwidth: 20px;\nheight: 20px;\nmargin-left: 13px;\n"]))),BtnCont:xn,NoticeBtn:gn,AddToFav:mn,Item:sn,Title:un,InfoList:fn,Info:hn,TextContainer:ln,Category:dn,ImageContainer:an,Heart:pn},Zn=t(8487),jn=t(9434),vn=t(398),yn=t(4289),wn=t(7689),kn=bn.Item,zn=bn.BtnCont,Cn=bn.NoticeBtn,Pn=bn.Title,Bn=bn.AddToFav,Sn=bn.InfoList,In=bn.Info,Ln=bn.TextContainer,Fn=bn.Category,Nn=bn.ImageContainer,Tn=bn.Heart,Wn=yn.Z.selectIsLoggedIn,_n=vn.Z.addToFavorite,En=vn.Z.deleteFromFavorite,An=function(n){var e=n.info,t=(0,wn.s0)(),i=(0,jn.I0)(),r=(0,jn.v9)(Wn),o=(0,T.useState)(!1),c=(0,N.Z)(o,2),s=c[0],l=c[1],a=e._id,d=e.avatar,u=e.category,h=e.title,f=e.breed,m=e.location,p=e.birthdate,x=e.price,g=void 0===x?0:x,b=e.favorite,Z=void 0===b?null:b,j=(e.owner,function(){return u===Zn.Z.sell?"Sell":u===Zn.Z.lostFound?"Lost/found":u===Zn.Z.inGoodHands?"In good hands":void 0});return(0,en.jsxs)(kn,{children:[(0,en.jsxs)(Nn,{children:[(0,en.jsx)("img",{src:d.url,alt:"a pet"}),(0,en.jsx)(Fn,{children:j()}),(0,en.jsx)(Bn,{type:"button",selected:Z,onClick:function(){return r?Z?Z?void 0:i(En(a)):i(_n(a)):t("/register")},children:(0,en.jsx)(Tn,{})})]}),(0,en.jsxs)(Ln,{children:[(0,en.jsx)(Pn,{children:h}),(0,en.jsxs)(In,{category:u,children:[(0,en.jsxs)(Sn,{children:[(0,en.jsx)("li",{children:(0,en.jsx)("span",{children:"Breed:"})}),(0,en.jsx)("li",{children:(0,en.jsx)("span",{children:"Place:"})}),(0,en.jsx)("li",{children:(0,en.jsx)("span",{children:"Age:"})}),"sell"===u?(0,en.jsx)("li",{children:(0,en.jsx)("span",{children:"Price:"})}):""]}),(0,en.jsxs)(Sn,{children:[(0,en.jsx)("li",{children:(0,en.jsx)("span",{children:f})}),(0,en.jsx)("li",{children:(0,en.jsx)("span",{children:m})}),(0,en.jsx)("li",{children:(0,en.jsxs)("span",{children:[function(n){if(null===n)return"?";var e=Date.now()-new Date(n),t=new Date(e);return Math.abs(t.getUTCFullYear()-1970)}(p)," year(s)"]})}),"sell"===u?(0,en.jsx)("li",{children:(0,en.jsxs)("span",{children:[g," $"]})}):""]})]}),(0,en.jsx)(zn,{children:(0,en.jsx)(Cn,{type:"button",onClick:function(){return l(!0)},children:"Learn more"})})]}),(0,en.jsx)(W.Z,{active:s,setActive:l,children:(0,en.jsx)(tn,{info:e,capitalizedCategory:j})})]})},Hn={List:E.ZP.ul(F||(F=(0,_.Z)(["\ndisplay: grid;\njustify-content: center;\n\n@media screen and (",") {\n        grid-template-columns: repeat(2, 336px);\n}\n\n@media screen and (",") {\n        grid-template-columns: repeat(4, 288px);\n}\n gap: 32px;\n\n"])),rn.Z.media.tablet,rn.Z.media.desktop)},Dn=t(9564),On=t(1087),qn=t(2507),Vn={selectNoticeIsLoading:function(n){return n.notices.isLoading},selectNoticeError:function(n){return n.notices.error},selectNotices:function(n){return n.notices.notices},selectSingleNotice:function(n){return n.notices.singleNotice},selectFavoriteNotices:function(n){return n.notices.favorite},selectOwnNotices:function(n){return n.notices.own}},Gn=t(1454),Kn=qn.Z.selectSearchState,Mn=Vn.selectNotices,Un=Vn.selectFavoriteNotices,Yn=Vn.selectOwnNotices,$n=Vn.selectNoticeIsLoading,Jn=Vn.selectNoticeError,Qn=Hn.List,Rn=null,Xn=function(){var n=(0,wn.TH)(),e=(0,On.lr)(),t=(0,N.Z)(e,2),i=(t[0],t[1]),r=(0,jn.v9)(Kn).trim().toLowerCase(),o=(0,jn.v9)(Mn),c=(0,jn.v9)(Un),s=(0,jn.v9)(Yn),l=(0,jn.v9)($n),a=(0,jn.v9)(Jn);(0,T.useEffect)((function(){i(""!==r?{search:r}:{})}),[i,r]),Rn=n.pathname.includes("favorite")?c||[]:n.pathname.includes("own")?s||[]:o.result?o.result:[],r&&(Rn=Rn.filter((function(n){return n.title.includes(r)})));var d=Rn.map((function(n){return(0,en.jsx)(An,{info:n},n._id)}));return l?(0,en.jsx)(Gn.Z,{}):0===d.length&&!l||a?(0,en.jsx)(Dn.Z,{}):(0,en.jsxs)(Qn,{items:d.length,children:[d," "]})}},7600:function(n,e){e.Z=function(){var n=document.querySelector("section");null!==n&&(n.style.height="auto")}},8971:function(n,e){e.Z=function(){var n=document.querySelector("section");null!==n&&(n.style.height="100vh")}},2507:function(n,e){var t={selectSearchState:function(n){return n.search.query}};e.Z=t},8487:function(n,e){var t=Object.freeze({sell:"sell",lostFound:"lostfound",inGoodHands:"ingoodhands"});e.Z=t}}]);
//# sourceMappingURL=399.3061e37d.chunk.js.map