import{c as C,a as v,w as it,f as x}from"../chunks/2tjY5EWc.js";import{i as T}from"../chunks/CBGMdTIR.js";import{p as y,m as H,l as W,d as G,b as j,s as f,f as _,a as k,e as w,g as i,c as q,r as D,t as J,u as X,i as Y}from"../chunks/DQFDJ3M9.js";import{p as h}from"../chunks/Cy-_d5Jf.js";import{a as K,C as b,e as F,i as B,S as M,T as at,H as ot,F as nt}from"../chunks/DobxS7R8.js";import{o as Z}from"../chunks/tznWuTku.js";import{b as lt,c as ct}from"../chunks/CdnxMbtd.js";import{b as U}from"../chunks/Dep8VuBj.js";import{s as dt,e as N}from"../chunks/eQ-iRjFB.js";import{p as I,i as mt}from"../chunks/B2AUzeHx.js";import{h as ut,s as R}from"../chunks/Dzez8w4O.js";import{I as ft}from"../chunks/De_bL4_6.js";import{T as O}from"../chunks/yFtyBSEZ.js";import{s as e}from"../chunks/C1NSCkpo.js";import{L as z}from"../chunks/dg6YOoyQ.js";var pt=it(x(`<script>
    if (window.self !== window.top) {
      console.log('Iframe script started');
      
      function getHeight() {
        const body = document.body;
        const html = document.documentElement;
        return Math.max(
          body.scrollHeight,
          body.offsetHeight,
          html.scrollHeight,
          html.offsetHeight
        );
      }
      
      function sendHeight() {
        const height = getHeight();
        window.parent.postMessage({ 
          type: 'iframe-height', 
          height: height 
        }, '*');
      }
      
      // Отправляем при загрузке
      if (document.readyState === 'complete') {
        sendHeight();
      } else {
        window.addEventListener('load', sendHeight);
      }
      
      // Отправляем при изменениях
      window.addEventListener('resize', sendHeight);
      
      const observer = new MutationObserver(sendHeight);
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true
      });
      
      // Слушаем запросы
      window.addEventListener('message', (event) => {
        if (event.data?.type === 'get-height') {
          sendHeight();
        }
      });
      
      // Отправляем несколько раз для надежности
      setTimeout(sendHeight, 100);
      setTimeout(sendHeight, 500);
      setTimeout(sendHeight, 1000);
    }
  <\/script><!>`,1)),gt=x('<div><div><strong>Ошибка загрузки:</strong> Файл не найден<br/> <small style="opacity: 0.7;"> </small></div></div>'),vt=x('<iframe width="100%" class="svelte-a1lycw"></iframe>');function ht(d,l){y(l,!1);const t=H();let a=I(l,"src",8,""),u=I(l,"title",8,""),c=I(l,"test_num",8,null),r=I(l,"minHeight",8,200),o=I(l,"maxHeight",8,null),s=H(),m=H(r()+"px"),g=H(!1);function $(p){if(p.data?.type==="iframe-height"){const n=parseInt(p.data.height);n>0&&S(n)}}function S(p){let n=p;n<r()&&(n=r()),o()&&n>o()&&(n=o()),i(m)!==n+"px"&&w(m,n+"px")}function P(){console.log("Iframe loaded successfully"),w(g,!1),L(),setTimeout(L,100),setTimeout(L,300),setTimeout(L,500)}function Q(){console.error("Iframe failed to load:",i(t)),w(g,!0)}function L(){if(i(s)?.contentWindow)try{i(s).contentWindow.postMessage({type:"get-height"},"*")}catch{}}Z(()=>{window.addEventListener("message",$);const p=setInterval(L,1e3);return()=>{window.removeEventListener("message",$),clearInterval(p)}}),W(()=>(G(c()),G(a())),()=>{w(t,c()?`${U}/pages/tests/test_${c()}.html`:a()?a().startsWith("http")?a():`${U}${a()}`:"")}),j(),T();var E=C();ut("a1lycw",p=>{var n=pt();f(_(n)),v(p,n)});var tt=_(E);{var et=p=>{var n=gt(),A=q(n),V=f(q(A),4),st=q(V,!0);D(V),D(A),D(n),J(()=>{K(n,`
    padding: 2rem;
    background: #fff3f3;
    border: 1px solid #ffcdd2;
    border-radius: 8px;
    color: #b71c1c;
    text-align: center;
    min-height: ${r()??""}px;
    display: flex;
    align-items: center;
    justify-content: center;
  `),dt(st,i(t))}),v(p,n)},rt=p=>{var n=vt();lt(n,A=>w(s,A),()=>i(s)),J(()=>{R(n,"src",i(t)),R(n,"title",u()),K(n,`
      height: ${i(m)??""};
      min-height: ${r()??""}px;
      transition: height 0.2s ease;
      border: none;
      display: block;
    `)}),N("load",n,P),N("error",n,Q),v(p,n)};mt(tt,p=>{i(g)?p(et):p(rt,!1)})}v(d,E),k()}var _t=x("<!> <!>",1);function $t(d,l){y(l,!1);const t=H(),a=[`Привет! Я - начальница всех слов! Со мной ты узнаешь, ${e("КТО","b")} это и ${e("ЧТО","b")} это. Я всегда первая, как буква "А" в алфавите! Готов называть предметы по имени?`,`Привет, друг! Я рыбка-сыщик. Обожаю задавать вопросы: "${e("ЧЕГО","b")} здесь не хватает?" и "${e("КОГО","b")} мы ищем?". Нет ручки? Нет тетрадки? Со мной ты научишься находить всё пропавшее! Давай поищем вместе?`,`Здравствуй! Я - самая дружелюбная рыбка! Я всем рада и всем помогаю. Хочешь узнать, ${e("ЧТО","b")} подарить рисунок и ${e("КОМУ","b")} обрадуется мама? Давай учиться говорить о дружбе и помощи!`,`Привет! Я вижу цель и всегда иду к ней! Со мной ты поймёшь, ${e("КОГО","b")} можно увидеть и ${e("ЧТО","b")} нужно сделать. Готов действовать? Тогда вперёд!`,`Привет-привет! Я рыбка-изобретатель! Со мной ты узнаешь, ${e("ЧЕМ","b")} можно рисовать и ${e("КЕМ","b")} мечтаешь стать. Я умею творить чудеса! Давай создадим что-нибудь вместе?`,`Привет! Я рыбка, которая любит рассказывать истории. Давай расскажу ${e("О ЧЁМ","b")} я мечтаю и ${e("О КОМ","b")} скучаю?`];W(()=>h,()=>{w(t,h.url.searchParams.get("test_num")!==null?parseInt(h.url.searchParams.get("test_num")):h.state?.test_num??0)}),j(),T(),b(d,{orientation:"horizontal",children:(u,c)=>{var r=_t(),o=_(r);b(o,{children:(m,g)=>{{let $=Y(()=>`test_${i(t)}.png`);ft(m,{page:"learn_and_train/train/tests",get src(){return i($)},width:"475px"})}},$$slots:{default:!0}});var s=f(o,2);b(s,{children:(m,g)=>{O(m,{get description(){return i(t),X(()=>a[i(t)-1])},classListDescription:"justify",fontSizeDescription:"xx-large"})},$$slots:{default:!0}}),v(u,r)},$$slots:{default:!0}}),k()}function bt(d,l){y(l,!1);const t=[{title:"Именительный падеж используется для названия предметов. Это начальная форма существительного, отвечающая на вопросы:",list:e(`кто? — ученик, бабушка, врач, кошка;
что? — ветер, парта, тарелка, книга.`,"i",[],[/—/,null],[";","."]).split(`
`)},{title:"Именительный падеж всегда употребляется без предлога и называется прямым падежом в отличие от остальных, которые носят название косвенных. В именительном падеже существительное выступает в роли подлежащего в предложении или именной части сказуемого.",list:`${e("Солнце","u")} ярко светило в окно;
Эта ${e("книга ","u")} — лучший ${e("подарок","u")}.`.split(`
`).map(a=>e(a,"i"))}];T(),b(d,{children:(a,u)=>{var c=C(),r=_(c);F(r,1,()=>t,B,(o,s)=>{z(o,{get title(){return i(s).title},classListTitle:"left",colorTitle:"var(--color-texts-main-dark)",get items(){return i(s).list},color:"var(--color-texts-main-dark)",type:["square"],fontSizeTitle:"var(--font-size-card-description)"})}),v(a,c)},$$slots:{default:!0}}),k()}var xt=x("<!> <!>",1);function Tt(d,l){y(l,!1);const t=[{title:"Родительный падеж существительного отвечает на вопросы: кого? чего? Это первый падеж, который входит в разряд косвенных.",list:e(`нет (кого?) — дяди,  сестры, учительницы;
нет (чего?) — карандаша, снега, грусти, чашки.`,"i",[],[/—/,null],[";","."]).split(`
`)},{title:"Все косвенные падежи, кроме предложного, могут употребляться как с предлогами, так и без них, например:",list:e(`нет (чего?) школы — стою (у чего?) у школы;
нет (чего?) реки — живу (у чего?) у реки.`,"i").split(`
`).map(u=>e(u,"i"))}],a=`Предлоги уточняют значение падежей. Так, с родительным падежом для обозначения отсутствия предмета, указания места, причины, цели употребляются предлоги: ${e("от, до, для, из-за, у, без, ради, вокруг, около и др","i")}.`;T(),b(d,{children:(u,c)=>{var r=xt(),o=_(r);F(o,1,()=>t,B,(m,g)=>{z(m,{get title(){return i(g).title},classListTitle:"left",colorTitle:"var(--color-texts-main-dark)",get items(){return i(g).list},color:"var(--color-texts-main-dark)",type:["square"],fontSizeTitle:"var(--font-size-card-description)"})});var s=f(o,2);O(s,{get description(){return a},classListDescription:"left",colorDescription:"var(--color-texts-main-dark)"}),v(u,r)},$$slots:{default:!0}}),k()}function yt(d,l){y(l,!1);const t=[{title:"Дательный падеж — это второй косвенный падеж. Он обозначает направление, место действия, адресата. Отвечает на вопросы:",list:e(`кому? — дяде, сестре, учительнице;
чему? — празднику, солнцу, лету.`,"i",[],[/—/,null],[";","."]).split(`
`)},{title:`Предлоги дательного падежа в русском языке указывают на приближение к объекту, предмету, месту действия; к ним относятся предлоги — ${e("к (ко), по","i")}. В редких случаях существительные в дательном падеже употребляются с предлогами ${e("благодаря, вопреки, навстречу, согласно, вслед, наперекор, наперерез, подобно, сродни","i")}. Например:`,list:`подойти к дому;
гулять по парку;
вести себя согласно правилам;
это сродни поражению.`.split(`
`)}];T(),b(d,{children:(a,u)=>{var c=C(),r=_(c);F(r,1,()=>t,B,(o,s)=>{z(o,{get title(){return i(s).title},classListTitle:"left",colorTitle:"var(--color-texts-main-dark)",get items(){return i(s).list},color:"var(--color-texts-main-dark)",type:["square"],fontSizeTitle:"var(--font-size-card-description)"})}),v(a,c)},$$slots:{default:!0}}),k()}var kt=x("<!> <!> <!>",1);function wt(d,l){y(l,!1);const t=[{title:"Винительный падеж в русском языке — третий косвенный падеж, который выражает объект действия и направление действия. Отвечает на вопросы:",list:e(`кого? — маму, гостей, щенка, друга;
что? — книгу, тарелку, дом, лето.`,"i",[],[/—/,null],[";","."]).split(`
`)},{title:`К предлогам винительного падежа относятся — ${e("в, за, на, про, через","i")}. Реже с формами винительного падежа употребляются предлоги ${e("сквозь, под, по, с, о (об)","i")}. Например:`,list:`положить на стол;
перейти через дорогу;
рассказать про друга.`.split(`
`)}],a=`Для самопроверки перед вопросом можно подставить слово "вижу": ${e("вижу (кого?) маму, вижу (что?) дом","i")}.`;T(),b(d,{children:(u,c)=>{var r=kt(),o=_(r);z(o,{get title(){return t[0].title},classListTitle:"left",colorTitle:"var(--color-texts-main-dark)",get items(){return t[0].list},color:"var(--color-texts-main-dark)",type:["square"],fontSizeTitle:"var(--font-size-card-description)"});var s=f(o,2);O(s,{get description(){return a},classListDescription:"left",colorDescription:"var(--color-texts-main-dark)"});var m=f(s,2);z(m,{get title(){return t[1].title},classListTitle:"left",colorTitle:"var(--color-texts-main-dark)",get items(){return t[1].list},color:"var(--color-texts-main-dark)",type:["square"],fontSizeTitle:"var(--font-size-card-description)"}),v(u,r)},$$slots:{default:!0}}),k()}var Ht=x("<!> <!> <!>",1);function zt(d,l){y(l,!1);const t=[{title:"Творительный падеж — это четвёртый косвенный падеж, обозначающий инструмент, с помощью которого совершается действие. Отвечает на вопросы:",list:e(`кем? — врачом, подругой, дедушкой;
чем? — ложкой, кистью, узором.`,"i",[],[/—/,null],[";","."]).split(`
`)},{title:`С существительным в творительном падеже употребляются предлоги — ${e("за, перед, под (подо), с (со), над, меж, между, в связи с, вместе с, согласно с","i")}. Например:`,list:`гуляем с подругой;
видно за облаками;
дом между деревьями;
выступать перед зрителями.`.split(`
`)}],a=`Существительные в творительном падеже употребляются как в качестве прямого дополнения ${e("(украсить гирляндой, рисовать красками)","i")}, так с предлогами ${e("(стоять перед зеркалом, стоять между братьями)","i")}.`;T(),b(d,{children:(u,c)=>{var r=Ht(),o=_(r);z(o,{get title(){return t[0].title},classListTitle:"left",colorTitle:"var(--color-texts-main-dark)",get items(){return t[0].list},color:"var(--color-texts-main-dark)",type:["square"],fontSizeTitle:"var(--font-size-card-description)"});var s=f(o,2);O(s,{get description(){return a},classListDescription:"left",colorDescription:"var(--color-texts-main-dark)"});var m=f(s,2);z(m,{get title(){return t[1].title},classListTitle:"left",colorTitle:"var(--color-texts-main-dark)",get items(){return t[1].list},color:"var(--color-texts-main-dark)",type:["square"],fontSizeTitle:"var(--font-size-card-description)"}),v(u,r)},$$slots:{default:!0}}),k()}function Lt(d,l){y(l,!1);const t=[{title:"Предложный падеж — единственный падеж русского языка, формы которого употребляются только с предлогами. Он обозначает место, направление, объект действия. Отвечает на вопросы:",list:e(`о ком? — о брате, о друге, о маме;
о чём? — о погоде, о космосе, о школе.`,"i",[],[/—/,null],[";","."]).split(`
`)},{title:`Существительное в форме предложного падежа, как говорит его название, употребляется только с предлогами — ${e("при, в, на, о, об, по","i")}. Например:`,list:`говорить о погоде;
скучать по маме;
ездить на машине;
купаться в реке;
остаться при мнении.`.split(`
`)}];T(),b(d,{children:(a,u)=>{var c=C(),r=_(c);F(r,1,()=>t,B,(o,s)=>{z(o,{get title(){return i(s).title},classListTitle:"left",colorTitle:"var(--color-texts-main-dark)",get items(){return i(s).list},color:"var(--color-texts-main-dark)",type:["square"],fontSizeTitle:"var(--font-size-card-description)"})}),v(a,c)},$$slots:{default:!0}}),k()}var St=x("<!> <!> <!> <!> <!>",1),Pt=x('<div class="center"><!></div>');function It(d,l){y(l,!1);const t=H();let a=H("");const u=[bt,Tt,yt,wt,zt,Lt];Z(()=>{w(a,`${U}/pages/tests/test_${i(t)}.html`)}),W(()=>h,()=>{w(t,h.url.searchParams.get("test_num")!==null?parseInt(h.url.searchParams.get("test_num")):h.state?.test_num??0)}),j(),T();var c=Pt(),r=q(c);b(r,{class:"cards",children:(o,s)=>{var m=St(),g=_(m);$t(g,{});var $=f(g,2);M($,{"<Spacer":!0,axis:"vertical",line:!0,size:"3rem",thickness:"3px"});var S=f($,2);ct(S,()=>u[i(t)-1],(L,E)=>{E(L,{})});var P=f(S,2);M(P,{"<Spacer":!0,axis:"vertical",line:!0,size:"3rem",thickness:"3px"});var Q=f(P,2);ht(Q,{get src(){return i(a)}}),v(o,m)},$$slots:{default:!0}}),D(c),v(d,c),k()}var qt=x("<!> <!> <main><!> <!> <!> <!></main>",1);function Kt(d,l){y(l,!1);const t=H(),a=["Именительный","Родительный","Дательный","Винительный","Творительный","Предложный"],u="падеж";W(()=>h,()=>{w(t,h.url.searchParams.get("test_num")!==null?parseInt(h.url.searchParams.get("test_num")):h.state?.test_num??0)}),j(),T();var c=qt(),r=_(c);at(r,{logoSrc:"/icons/favicon.png",backgroundColor:"var(--color-background-button)",textColor:"var(--color-texts-main-light)",transparentUntilScroll:!1});var o=f(r,2);{let P=Y(()=>(i(t),X(()=>`${a[i(t)-1]} ${u}`)));ot(o,{imageSrc:"/imgs/hero-bg.png",smallVersion:"True",get title(){return i(P)}})}var s=f(o,2),m=q(s);M(m,{axis:"vertical",size:"3rem"});var g=f(m,2);It(g,{});var $=f(g,2);M($,{axis:"vertical",size:"7rem"});var S=f($,2);nt(S),D(s),v(d,c),k()}export{Kt as component};
