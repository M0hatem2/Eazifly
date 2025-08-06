import{a as sn,b as ln,c as cn,d as un,e as st,f as dn,g as Te,h as fn,i as hn,j as mn,k as pn}from"./chunk-76H37S6T.js";import{$ as L,$a as xe,A as Yt,Aa as Ae,C as ve,Ga as Q,Ha as U,I as rt,Ja as W,Jb as tn,K as at,Kb as nn,Lb as rn,Mb as an,Nb as on,O as P,P as B,R as be,T as G,Ua as _,Va as h,Wa as m,Xa as C,Y as Ce,Ya as A,Z as _e,Za as x,_ as V,_a as q,a as J,ab as k,b as et,bb as T,fa as Xt,gb as g,hb as ot,ib as Le,j as Pe,ka as le,lb as $t,mb as Zt,n as ye,nb as Kt,ob as Jt,p as se,pb as Qt,r as tt,rb as en,v as nt,w as it,wa as v,x as qt}from"./chunk-TUUV3EBO.js";var gn=[{path:"",redirectTo:"/home",pathMatch:"full"},{path:"home",loadComponent:()=>import("./chunk-2P7WCI5M.js").then(e=>e.Home)},{path:"faqs",loadComponent:()=>import("./chunk-4NRPHJFV.js").then(e=>e.FAQs)},{path:"how-to-apply",loadComponent:()=>import("./chunk-XSKEQLDC.js").then(e=>e.HowToApply)},{path:"application-form",loadComponent:()=>import("./chunk-YTNHVWA7.js").then(e=>e.ApplicationForm)},{path:"terms",loadComponent:()=>import("./chunk-MDIPBPCV.js").then(e=>e.Terms)},{path:"admin",loadComponent:()=>import("./chunk-ODIPJ2NK.js").then(e=>e.Dashboard)}];var yn={providers:[Xt(),en({eventCoalescing:!0}),mn(gn),un(cn())]};var Bi={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},ns=et(J({},Bi),{"[class.ng-submitted]":"isSubmitted"});var bn=new be("",{providedIn:"root",factory:()=>lt}),lt="always";var Gi=new be("");var Cn=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=U({type:e});static \u0275inj=B({})}return e})();var _n=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:bn,useValue:t.callSetDisabledState??lt}]}}static \u0275fac=function(i){return new(i||e)};static \u0275mod=U({type:e});static \u0275inj=B({imports:[Cn]})}return e})(),An=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:Gi,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:bn,useValue:t.callSetDisabledState??lt}]}}static \u0275fac=function(i){return new(i||e)};static \u0275mod=U({type:e});static \u0275inj=B({imports:[Cn]})}return e})();var Re=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=Q({type:e,selectors:[["app-support-request-form"]],decls:68,vars:0,consts:[[1,"p-8","bg-gray-50","rounded-lg","w-full"],[1,"space-y-6"],[1,"grid","grid-cols-1","md:grid-cols-3","gap-6"],[1,"block","mb-2","text-sm","font-medium","text-gray-700","text-right"],["type","text","placeholder","Enter your full name",1,"w-full","rounded-md","border-gray-300","text-right"],[1,"flex"],[1,"rounded-l-md","border-gray-300","bg-gray-100"],["type","text","placeholder","e.g. 01002312312",1,"w-full","rounded-r-md","border-gray-300","text-right"],[1,"flex","items-center","gap-1"],[1,"fas","fa-info-circle","text-blue-500"],["type","text","placeholder","Enter your IBAN linked to your bank account",1,"w-full","rounded-md","border-gray-300","text-right"],[1,"w-full","rounded-md","border-gray-300","text-right"],["type","text","placeholder","Write here",1,"w-full","rounded-md","border-gray-300","text-right"],[1,"flex","items-center","gap-2"],["type","text","value","100","readonly","",1,"w-full","rounded-md","border-gray-300","text-right"],[1,"flex","gap-2"],["type","text","value","3000",1,"w-full","rounded-md","border-gray-300","text-right"],[1,"rounded-md","border-gray-300"],[1,"flex","items-center","justify-center","gap-2","mt-6"],["type","checkbox","checked","",1,"accent-primary"],[1,"text-sm","text-right","text-gray-700","text-center"],["href","#",1,"text-blue-600","underline"],[1,"mt-4","w-full","flex","justify-center"],["type","submit",1,"py-3","px-6","bg-[#2D5C63]","text-white","font-semibold","rounded-md","hover:bg-[#23474e]","transition-all"]],template:function(t,i){t&1&&(A(0,"div",0)(1,"form",1)(2,"div",2)(3,"div")(4,"label",3),g(5,"Full Name"),x(),q(6,"input",4),x(),A(7,"div")(8,"label",3),g(9,"Mobile Number"),x(),A(10,"div",5)(11,"select",6)(12,"option"),g(13,"EGB (+20)"),x()(),q(14,"input",7),x()(),A(15,"div")(16,"label",3),g(17,"IBAN Number"),x(),A(18,"div",8),q(19,"i",9)(20,"input",10),x()()(),A(21,"div",2)(22,"div")(23,"label",3),g(24,"Bank Name"),x(),A(25,"select",11)(26,"option"),g(27,"Select Bank"),x()()(),A(28,"div")(29,"label",3),g(30,"Purpose of Support"),x(),q(31,"input",12),x(),A(32,"div")(33,"label",3),g(34,"Requested Amount"),x(),A(35,"select",11)(36,"option"),g(37,"Select"),x()()()(),A(38,"div",2)(39,"div")(40,"label",3),g(41,"Total Requested Amount"),x(),A(42,"select",11)(43,"option"),g(44,"Other"),x()()(),A(45,"div")(46,"label",3),g(47,"Subscription Fee"),x(),A(48,"div",13),q(49,"i",9)(50,"input",14),x()(),A(51,"div")(52,"label",3),g(53,"Support Amount"),x(),A(54,"div",15),q(55,"input",16),A(56,"select",17)(57,"option"),g(58,"EGB"),x()()()()(),A(59,"div",18),q(60,"input",19),A(61,"span",20),g(62," I agree to the "),A(63,"a",21),g(64,"terms and conditions"),x()()(),A(65,"div",22)(66,"button",23),g(67," Pay Now & Submit Request "),x()()()())},encapsulation:2})};var Wi=(e,n)=>({"menu-visible":e,"menu-hidden":n}),qi=(e,n,t,i)=>({"text-white hover:text-gray-200 border-b-3 border-white":e,"text-white hover:text-gray-200":n,"text-black  border-b-3 border-black":t,"text-black ":i}),Yi=e=>({"font-semibold":e});function Xi(e,n){e&1&&(V(),h(0,"svg",55),C(1,"path",56),m())}function $i(e,n){e&1&&(V(),h(0,"svg",55),C(1,"path",57),m())}function Zi(e,n){if(e&1&&(h(0,"li")(1,"a",58),g(2),m()()),e&2){let t=n.$implicit,i=T();v(),_("routerLink",t.path)("ngClass",Kt(3,qi,i.isHome()&&i.currentRoute===t.path,i.isHome()&&i.currentRoute!==t.path,!i.isHome()&&i.currentRoute===t.path,!i.isHome()&&i.currentRoute!==t.path)),v(),Le(" ",t.label," ")}}function Ki(e,n){if(e&1){let t=xe();h(0,"li")(1,"a",59),k("click",function(){Ce(t);let r=T();return _e(r.isMenuOpen=!1)}),g(2),m()()}if(e&2){let t=n.$implicit;v(),_("routerLink",t.path),v(),Le(" ",t.label," ")}}function Ji(e,n){if(e&1&&(h(0,"span",60),g(1),m()),e&2){let t=T();v(),Le(" ",t.unreadCount," ")}}function Qi(e,n){if(e&1){let t=xe();h(0,"li")(1,"div",65)(2,"div",66)(3,"span",67),g(4),m(),h(5,"button",68),k("click",function(){let r=Ce(t).$implicit,a=T(2);return _e(a.deleteNotification(r.id))}),g(6,"X"),m()(),h(7,"p",69),g(8),Jt(9,"date"),m()()()}if(e&2){let t=n.$implicit;v(3),_("ngClass",$t(6,Yi,!t.isRead)),v(),ot(t.message),v(4),ot(Qt(9,3,t.createdAt,"short"))}}function er(e,n){if(e&1){let t=xe();h(0,"div",61)(1,"ul",62),W(2,Qi,10,8,"li",12),m(),h(3,"div",63)(4,"button",64),k("click",function(){Ce(t);let r=T();return _e(r.markAllAsRead())}),g(5," Mark all as read "),m()()()}if(e&2){let t=T();v(2),_("ngForOf",t.notifications)}}function tr(e,n){if(e&1){let t=xe();h(0,"div",70)(1,"div",71)(2,"div",72)(3,"button",73),k("click",function(){Ce(t);let r=T();return _e(r.closeModal())}),V(),h(4,"svg",74),C(5,"path",75)(6,"path",76)(7,"path",77),h(8,"defs")(9,"linearGradient",78),C(10,"stop")(11,"stop",79),m(),h(12,"linearGradient",80),C(13,"stop")(14,"stop",79),m(),h(15,"linearGradient",81),C(16,"stop")(17,"stop",79),m()()()(),L(),h(18,"h3",82),g(19," Support Request Form "),m()(),C(20,"app-support-request-form"),m()()}if(e&2){let t=T();_("ngClass",t.isAdminRoute()?"hidden":"")}}var je=class e{constructor(n){this.router=n;this.router.events.subscribe(t=>{t instanceof st&&(this.currentRoute=t.urlAfterRedirects)})}currentRoute="";isMenuOpen=!1;isAdmin=!1;isAdminRoute(){return this.router.url.startsWith("/admin")}navLinks=[{path:"/home",label:"Home"},{path:"/how-to-apply",label:"How To Apply"},{path:"/application-form",label:"Application Form"},{path:"/terms",label:"Terms and Conditions"},{path:"/faqs",label:"FAQs"}];isHome(){return this.router.url==="/home"||this.router.url===""}isFaqs(){return this.router.url.includes("/faqs")}isTerms(){return this.router.url.includes("/terms")}isHowToApply(){return this.router.url.includes("/how-to-apply")}isModalOpen=!1;openModal(){this.isModalOpen=!0}closeModal(){this.isModalOpen=!1}ngOnInit(){this.router.events.subscribe(n=>{n instanceof st&&(this.isAdmin=this.isAdminRoute())})}notifications=[{id:1,message:"New user registered",isRead:!1,createdAt:new Date},{id:2,message:"Server restarted",isRead:!1,createdAt:new Date},{id:3,message:"New order placed",isRead:!0,createdAt:new Date}];showNotificationList=!1;toggleNotifications(){this.showNotificationList=!this.showNotificationList}markAsRead(n){let t=this.notifications.find(i=>i.id===n);t&&(t.isRead=!0)}markAllAsRead(){this.notifications.forEach(n=>n.isRead=!0)}deleteNotification(n){this.notifications=this.notifications.filter(t=>t.id!==n)}get unreadCount(){return this.notifications.filter(n=>!n.isRead).length}static \u0275fac=function(t){return new(t||e)(Ae(Te))};static \u0275cmp=Q({type:e,selectors:[["app-navbar"]],decls:68,vars:19,consts:[[1,"fixed","lg:absolute","top-0","left-0","w-full","z-50","transition-all","duration-300","bg-white","lg:bg-[#ffffff14]","shadow-2xl",3,"ngClass"],[1,"mx-auto","flex","p-6","justify-between","h-16",3,"ngClass"],["routerLink","/home",1,"flex","items-center","z-50"],["width","150","height","64","viewBox","0 0 150 64","fill","none","xmlns","http://www.w3.org/2000/svg"],["width","150","height","64","fill","url(#pattern0_209_650)"],["width","150","height","64","viewBox","0 0 150 64","fill","none","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink"],["id","pattern0_209_650","patternContentUnits","objectBoundingBox","width","1","height","1"],[0,"xlink","href","#image0_209_650","transform","scale(0.00333333 0.0078125)"],["id","image0_209_650","width","300","height","128","preserveAspectRatio","none",0,"xlink","href","data:image/png;base64,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"],[1,"lg:hidden","p-2","rounded-lg","focus:outline-none","focus:ring-gray-300","transition","duration-300",3,"click","ngClass"],["class","w-6 h-6","fill","none","stroke","currentColor","stroke-width","2","viewBox","0 0 24 24",4,"ngIf"],[1,"hidden","lg:flex","items-center","space-x-8","text-lg","px-16",3,"ngClass"],[4,"ngFor","ngForOf"],[1,"hidden","lg:flex","items-center","space-x-4","ml-auto","px-6","gap-8",3,"ngClass"],[1,"bg-[#ffffff2b]","rounded-2xl","p-4"],["width","9","height","16","viewBox","0 0 9 16","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M8.496 12.646C8.568 12.898 8.646 13.366 8.73 14.05C8.826 14.746 8.868 15.262 8.856 15.598C7.992 15.85 7.152 15.976 6.336 15.976C5.544 15.976 4.8 15.88 4.104 15.688C3.42 15.508 2.82 15.244 2.304 14.896C1.74 14.512 1.302 14.038 0.99 13.474C0.69 12.91 0.54 12.268 0.54 11.548C0.54 10.672 0.738 9.874 1.134 9.154C1.542 8.434 2.106 7.804 2.826 7.264C3.042 7.108 3.162 7.024 3.186 7.012C2.538 6.076 2.214 5.176 2.214 4.312C2.214 3.4 2.538 2.602 3.186 1.918C3.534 1.546 3.954 1.24 4.446 1C4.95 0.748 5.502 0.586 6.102 0.514C6.366 0.489999 6.564 0.477999 6.696 0.477999C7.092 0.477999 7.488 0.519999 7.884 0.604C7.944 0.904 7.974 1.486 7.974 2.35C7.974 2.734 7.962 3.022 7.938 3.214C7.038 3.214 6.342 3.262 5.85 3.358C5.01 3.514 4.59 3.784 4.59 4.168C4.59 4.456 4.788 4.786 5.184 5.158C5.352 5.326 5.622 5.53 5.994 5.77C6.87 5.542 7.734 5.392 8.586 5.32L8.658 5.392C8.658 5.86 8.628 6.442 8.568 7.138C8.52 7.834 8.46 8.302 8.388 8.542C7.872 8.578 7.302 8.65 6.678 8.758C6.066 8.866 5.526 9.016 5.058 9.208C4.482 9.436 4.02 9.712 3.672 10.036C3.324 10.36 3.15 10.732 3.15 11.152C3.15 11.692 3.45 12.1 4.05 12.376C4.65 12.652 5.502 12.79 6.606 12.79C7.122 12.79 7.752 12.742 8.496 12.646Z","fill","white"],[1,""],[1,"relative","inline-flex","items-center","justify-center","px-4","py-2","overflow-hidden","font-medium","text-white","bg-[#256378]","rounded-lg","group",3,"click"],[1,"relative","z-10"],[1,"relative","z-10","ml-2","transition-all","duration-300","group-hover:translate-x-20","group-hover:-translate-y-4"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","viewBox","0 0 512 512","fill","currentColor"],["d","M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h370.7l-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"],[1,"absolute","inset-0","bg-[#1a4d5f]","rounded-lg","opacity-0","group-hover:opacity-100","transition-opacity","duration-300"],[1,"lg:hidden","overflow-hidden","bg-white/90","backdrop-blur-md","px-6","pb-8","pt-6","shadow-xl","rounded-b-2xl","transition-all","duration-500","ease-in-out","text-[#256378]","text-sm","sm:text-base",3,"ngClass"],[1,"flex","flex-col","space-y-4","font-medium","text-black","sm:text-[#256378]"],[1,"mt-8","flex","justify-start","items-center","space-x-4",3,"ngClass"],["width","20","height","20","viewBox","0 0 9 16","fill","none","xmlns","http://www.w3.org/2000/svg",1,"text-[#07070D]"],["d","M8.496 12.646C8.568 12.898 8.646 13.366 8.73 14.05C8.826 14.746 8.868 15.262 8.856 15.598C7.992 15.85 7.152 15.976 6.336 15.976C5.544 15.976 4.8 15.88 4.104 15.688C3.42 15.508 2.82 15.244 2.304 14.896C1.74 14.512 1.302 14.038 0.99 13.474C0.69 12.91 0.54 12.268 0.54 11.548C0.54 10.672 0.738 9.874 1.134 9.154C1.542 8.434 2.106 7.804 2.826 7.264C3.042 7.108 3.162 7.024 3.186 7.012C2.538 6.076 2.214 5.176 2.214 4.312C2.214 3.4 2.538 2.602 3.186 1.918C3.534 1.546 3.954 1.24 4.446 1C4.95 0.748 5.502 0.586 6.102 0.514C6.366 0.489999 6.564 0.477999 6.696 0.477999C7.092 0.477999 7.488 0.519999 7.884 0.604C7.944 0.904 7.974 1.486 7.974 2.35C7.974 2.734 7.962 3.022 7.938 3.214C7.038 3.214 6.342 3.262 5.85 3.358C5.01 3.514 4.59 3.784 4.59 4.168C4.59 4.456 4.788 4.786 5.184 5.158C5.352 5.326 5.622 5.53 5.994 5.77C6.87 5.542 7.734 5.392 8.586 5.32L8.658 5.392C8.658 5.86 8.628 6.442 8.568 7.138C8.52 7.834 8.46 8.302 8.388 8.542C7.872 8.578 7.302 8.65 6.678 8.758C6.066 8.866 5.526 9.016 5.058 9.208C4.482 9.436 4.02 9.712 3.672 10.036C3.324 10.36 3.15 10.732 3.15 11.152C3.15 11.692 3.45 12.1 4.05 12.376C4.65 12.652 5.502 12.79 6.606 12.79C7.122 12.79 7.752 12.742 8.496 12.646Z","fill","currentColor"],[1,"pt-8","w-full",3,"ngClass"],[1,"w-full","relative","inline-flex","items-center","justify-center","px-6","py-3","overflow-hidden","font-medium","text-white","bg-[#256378]","rounded-lg","group",3,"click"],[1,"bg-white","border-b","border-gray-200","shadow","flex-row-reverse",3,"ngClass"],[1,"mx-auto","px-4","sm:px-6","lg:px-8"],[1,"flex","justify-between","items-center","h-16"],["href","#",1,"flex","items-center"],["width","120","height","120","viewBox","0 0 150 64","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M17.9437 42V22.8587H30.6617V25.9418H21.4379V30.8492H30.1479V33.9324H21.4379V38.9168H30.6617V42H17.9437ZM37.1807 42.3083C36.2044 42.3083 35.3565 42.1456 34.6371 41.8201C33.9177 41.4947 33.361 41.0322 32.9671 40.4327C32.5731 39.8161 32.3761 39.1052 32.3761 38.3002C32.3761 37.5294 32.5474 36.8443 32.89 36.2448C33.2326 35.6281 33.7636 35.1143 34.483 34.7032C35.2024 34.2921 36.1102 34.0009 37.2064 33.8296L41.7798 33.0845V35.6538L37.8488 36.3218C37.1807 36.4417 36.684 36.6558 36.3586 36.9642C36.0331 37.2725 35.8704 37.675 35.8704 38.1717C35.8704 38.6513 36.0502 39.0367 36.4099 39.3279C36.7868 39.602 37.2492 39.739 37.7974 39.739C38.4996 39.739 39.1163 39.5934 39.6473 39.3022C40.1954 38.9939 40.615 38.5743 40.9062 38.0433C41.2145 37.5123 41.3687 36.9299 41.3687 36.2961V32.6991C41.3687 32.0996 41.1289 31.6029 40.6493 31.2089C40.1868 30.7978 39.5702 30.5923 38.7994 30.5923C38.08 30.5923 37.4377 30.7893 36.8724 31.1832C36.3243 31.56 35.9218 32.0653 35.6648 32.6991L32.9157 31.3631C33.1897 30.6265 33.618 29.9928 34.2003 29.4618C34.7998 28.9137 35.5021 28.4854 36.3072 28.1771C37.1122 27.8688 37.9858 27.7147 38.9279 27.7147C40.0755 27.7147 41.0861 27.9288 41.9596 28.357C42.8332 28.7681 43.5098 29.3504 43.9894 30.1041C44.4861 30.8406 44.7345 31.7056 44.7345 32.6991V42H41.5486V39.6105L42.268 39.5592C41.9083 40.1587 41.48 40.664 40.9833 41.075C40.4866 41.469 39.9213 41.7773 39.2876 42C38.6538 42.2055 37.9515 42.3083 37.1807 42.3083ZM46.6378 42V39.2765L54.7568 29.8729L55.2707 31.0291H46.9975V28.023H58.2511V30.7721L50.2862 40.1758L49.7723 39.0196H58.3024V42H46.6378ZM60.2152 42V28.023H63.581V42H60.2152ZM60.2152 26.4557V22.8587H63.581V26.4557H60.2152ZM68.3073 42V31.0291H65.8408V28.023H68.3073V27.5605C68.3073 26.4985 68.5214 25.5993 68.9496 24.8627C69.395 24.1091 70.0116 23.5352 70.7995 23.1413C71.5874 22.7473 72.5209 22.5503 73.6001 22.5503C73.8056 22.5503 74.0283 22.5675 74.2681 22.6017C74.525 22.6189 74.7391 22.6446 74.9104 22.6788V25.5821C74.7391 25.5479 74.5764 25.5307 74.4222 25.5307C74.2852 25.5136 74.1567 25.505 74.0368 25.505C73.2832 25.505 72.7008 25.6763 72.2897 26.0189C71.8786 26.3444 71.6731 26.8582 71.6731 27.5605V28.023H77.788V31.0291H71.6731V42H68.3073ZM77.0943 42V22.5503H80.4858V42H77.0943ZM85.2956 47.6525C84.9188 47.6525 84.5505 47.6182 84.1908 47.5497C83.8311 47.4983 83.5057 47.3955 83.2145 47.2414V44.4408C83.4372 44.4922 83.7027 44.5436 84.011 44.595C84.3364 44.6464 84.6362 44.6721 84.9102 44.6721C85.681 44.6721 86.2377 44.4922 86.5803 44.1325C86.94 43.79 87.2569 43.3275 87.5309 42.7451L88.4559 40.5869L88.4045 43.4131L82.3152 28.023H85.938L90.203 39.3793H88.9184L93.1577 28.023H96.8061L90.7169 43.4131C90.3572 44.3038 89.9204 45.066 89.4065 45.6998C88.8927 46.3336 88.2932 46.8132 87.608 47.1386C86.94 47.4812 86.1692 47.6525 85.2956 47.6525Z","fill","#272727"],["d","M134 45.7053C134 47.4944 132.55 48.9448 130.761 48.9448C128.971 48.9448 127.521 47.4944 127.521 45.7053L127.521 18.2948C127.521 16.5057 128.971 15.0553 130.761 15.0553C132.55 15.0553 134 16.5057 134 18.2948L134 45.7053Z","fill","#28B16D"],["d","M122.786 45.7053C122.786 47.4944 121.336 48.9447 119.547 48.9447C117.758 48.9447 116.307 47.4944 116.307 45.7053L116.307 34.2427C116.307 32.4536 117.758 31.0032 119.547 31.0032C121.336 31.0032 122.786 32.4536 122.786 34.2427L122.786 45.7053Z","fill","#28B16D"],["d","M111.572 45.7052C111.572 47.4943 110.122 48.9447 108.333 48.9447C106.544 48.9447 105.093 47.4943 105.093 45.7052C105.093 43.9161 106.544 42.4658 108.333 42.4658C110.122 42.4658 111.572 43.9161 111.572 45.7052Z","fill","#28B16D"],[1,"relative","w-full","mx-12"],[1,"absolute","inset-y-0","left-0","pl-3","flex","items-center","pointer-events-none"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"w-5","h-5","text-gray-500"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"],["type","text","name","search","placeholder","Search...",1,"block","w-full","pl-10","pr-4","py-2","border","border-white","bg-gray-100","rounded-lg","text-sm","focus:ring-blue-500","focus:border-blue-500"],[1,"relative"],[1,"relative","p-2","text-gray-600","hover:text-gray-800","focus:outline-none",3,"click"],["width","40","height","40","viewBox","0 0 40 40","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M12 0.5H28C34.3513 0.5 39.5 5.64873 39.5 12V28C39.5 34.3513 34.3513 39.5 28 39.5H12C5.64873 39.5 0.5 34.3513 0.5 28V12C0.5 5.64873 5.64873 0.5 12 0.5Z","stroke","#E5E7EB"],["d","M20.0196 10.9098C16.7096 10.9098 14.0196 13.5998 14.0196 16.9098V19.7998C14.0196 20.4098 13.7596 21.3398 13.4496 21.8598L12.2996 23.7698C11.5896 24.9498 12.0796 26.2598 13.3796 26.6998C17.6896 28.1398 22.3396 28.1398 26.6496 26.6998C27.8596 26.2998 28.3896 24.8698 27.7296 23.7698L26.5796 21.8598C26.2796 21.3398 26.0196 20.4098 26.0196 19.7998V16.9098C26.0196 13.6098 23.3196 10.9098 20.0196 10.9098Z","stroke","#272727","stroke-width","1.5","stroke-miterlimit","10","stroke-linecap","round"],["d","M21.8699 11.2C21.5599 11.11 21.2399 11.04 20.9099 11C19.9499 10.88 19.0299 10.95 18.1699 11.2C18.4599 10.46 19.1799 9.94004 20.0199 9.94004C20.8599 9.94004 21.5799 10.46 21.8699 11.2Z","stroke","#272727","stroke-width","1.5","stroke-miterlimit","10","stroke-linecap","round","stroke-linejoin","round"],["d","M23.0195 27.06C23.0195 28.71 21.6695 30.06 20.0195 30.06C19.1995 30.06 18.4395 29.72 17.8995 29.18C17.3595 28.64 17.0195 27.88 17.0195 27.06","stroke","#272727","stroke-width","1.5","stroke-miterlimit","10"],["class","absolute -top-1 -right-1 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-600 rounded-full",4,"ngIf"],["class","absolute right-0 mt-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-64 dark:bg-gray-700",4,"ngIf"],["class","fixed inset-0 w-full z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in",3,"ngClass",4,"ngIf"],["fill","none","stroke","currentColor","stroke-width","2","viewBox","0 0 24 24",1,"w-6","h-6"],["stroke-linecap","round","stroke-linejoin","round","d","M4 6h16M4 12h16M4 18h16"],["stroke-linecap","round","stroke-linejoin","round","d","M6 18L18 6M6 6l12 12"],["routerLinkActive","active",1,"px-2","py-1","transition-all","duration-200",3,"routerLink","ngClass"],["routerLinkActive","font-semibold underline",1,"block","py-2","hover:text-[#1f4e60]","transition-colors","duration-200",3,"click","routerLink"],[1,"absolute","-top-1","-right-1","inline-flex","items-center","justify-center","w-4","h-4","text-xs","font-bold","text-white","bg-red-600","rounded-full"],[1,"absolute","right-0","mt-2","z-10","bg-white","divide-y","divide-gray-100","rounded-lg","shadow-lg","w-64","dark:bg-gray-700"],[1,"py-2","text-sm","text-gray-700","dark:text-gray-200","max-h-64","overflow-y-auto"],[1,"px-4","py-2","text-center"],[1,"text-blue-500","text-sm","hover:underline",3,"click"],[1,"block","px-4","py-2","hover:bg-gray-100","dark:hover:bg-gray-600","dark:hover:text-white","cursor-pointer"],[1,"flex","justify-between","items-center"],[3,"ngClass"],[1,"text-red-400","text-xs","hover:underline",3,"click"],[1,"text-xs","text-gray-400"],[1,"fixed","inset-0","w-full","z-50","flex","items-center","justify-center","bg-black/50","backdrop-blur-sm","animate-fade-in",3,"ngClass"],[1,"relative","bg-[#F8F9FA]","rounded-2xl","shadow-2xl","border","border-gray-200","overflow-auto","max-h-screen","overflow-y-auto"],[1,"flex","items-center","justify-between","mb-6","relative","bg-[#E9EFF2]","p-4"],[1,"cursor-pointer",3,"click"],["width","29","height","28","viewBox","0 0 29 28","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M14.4734 27.7682C12.6623 27.7716 10.8685 27.417 9.19484 26.7249C7.52122 26.0327 6.00088 25.0167 4.72119 23.7351C-0.657063 18.3569 -0.657063 9.60655 4.72119 4.22836C5.99898 2.94338 7.51895 1.9246 9.19312 1.23099C10.8673 0.537387 12.6624 0.182729 14.4746 0.187548C18.1589 0.187548 21.6227 1.62199 24.2268 4.22836C26.8321 6.83361 28.2676 10.2973 28.2676 13.9817C28.2676 17.6662 26.8331 21.1299 24.2268 23.7351C22.9469 25.0167 21.4263 26.0327 19.7525 26.7248C18.0787 27.4169 16.2847 27.7715 14.4734 27.7682ZM14.4746 2.39449C12.9523 2.39015 11.4443 2.68791 10.0379 3.27053C8.63149 3.85314 7.35469 4.70903 6.28144 5.78861C4.09331 7.9768 2.88831 10.8865 2.88831 13.9817C2.88831 17.0769 4.09331 19.9856 6.28144 22.1749C10.7989 26.6924 18.1501 26.6935 22.6666 22.1749C24.8547 19.9867 26.0607 17.0769 26.0607 13.9817C26.0607 10.8865 24.8558 7.97786 22.6666 5.78861C21.5933 4.70939 20.3166 3.85373 18.9105 3.27112C17.5043 2.68851 15.9966 2.3906 14.4746 2.39449Z","fill","url(#paint0_linear_33_2348)"],["d","M9.79231 19.7656C9.57387 19.766 9.36022 19.7016 9.17847 19.5804C8.99671 19.4593 8.85504 19.2869 8.77143 19.0851C8.68786 18.8832 8.66613 18.6611 8.709 18.4469C8.75186 18.2327 8.85738 18.0361 9.01218 17.882L18.3749 8.51924C18.4774 8.41678 18.599 8.3355 18.7328 8.28004C18.8667 8.22459 19.0102 8.19604 19.1551 8.19604C19.2999 8.19604 19.4434 8.22459 19.5773 8.28004C19.7111 8.3355 19.8327 8.41678 19.9352 8.51924C20.0376 8.62168 20.1189 8.7433 20.1744 8.87715C20.2298 9.01101 20.2584 9.15448 20.2584 9.29937C20.2584 9.44425 20.2298 9.58772 20.1744 9.72158C20.1189 9.85543 20.0376 9.97705 19.9352 10.0795L10.5724 19.4423C10.4702 19.5451 10.3487 19.6266 10.2148 19.6821C10.0808 19.7376 9.93726 19.766 9.79231 19.7656Z","fill","url(#paint1_linear_33_2348)"],["d","M19.1557 19.7657C19.0108 19.7659 18.8672 19.7374 18.7333 19.6819C18.5995 19.6265 18.4779 19.5451 18.3756 19.4424L9.01274 10.0796C8.81018 9.87181 8.69763 9.59257 8.69949 9.30238C8.70134 9.01219 8.81744 8.73441 9.02265 8.52921C9.22785 8.32401 9.50564 8.20792 9.79583 8.20608C10.086 8.20423 10.3653 8.31679 10.5731 8.51936L19.9358 17.8821C20.0907 18.0362 20.1962 18.2328 20.2391 18.447C20.282 18.6613 20.2602 18.8834 20.1766 19.0852C20.093 19.287 19.9513 19.4594 19.7696 19.5806C19.5878 19.7017 19.3741 19.7662 19.1557 19.7657Z","fill","url(#paint2_linear_33_2348)"],["id","paint0_linear_33_2348","x1","14.4776","y1","0.1875","x2","14.4776","y2","27.7683","gradientUnits","userSpaceOnUse"],["offset","1","stop-color","#001354"],["id","paint1_linear_33_2348","x1","14.473","y1","8.19604","x2","14.473","y2","19.7656","gradientUnits","userSpaceOnUse"],["id","paint2_linear_33_2348","x1","14.48","y1","8.20605","x2","14.48","y2","19.7657","gradientUnits","userSpaceOnUse"],[1,"text-3xl","font-bold","text-gray-800"]],template:function(t,i){t&1&&(h(0,"nav",0)(1,"div",1)(2,"a",2),V(),h(3,"svg",3),C(4,"rect",4),h(5,"svg",5),C(6,"rect",4),h(7,"defs")(8,"pattern",6),C(9,"use",7),m(),C(10,"image",8),m()()()(),L(),h(11,"button",9),k("click",function(){return i.isMenuOpen=!i.isMenuOpen}),W(12,Xi,2,0,"svg",10)(13,$i,2,0,"svg",10),m(),h(14,"ul",11),W(15,Zi,3,8,"li",12),m(),h(16,"ul",13)(17,"li",14),V(),h(18,"svg",15),C(19,"path",16),m()(),L(),h(20,"li")(21,"div",17)(22,"button",18),k("click",function(){return i.openModal()}),h(23,"span",19),g(24,"submit Now"),m(),h(25,"span",20),V(),h(26,"svg",21),C(27,"path",22),m()(),L(),C(28,"span",23),m()()()()(),h(29,"div",24)(30,"ul",25),W(31,Ki,3,2,"li",12),m(),h(32,"div",26),V(),h(33,"svg",27),C(34,"path",28),m()(),L(),h(35,"div",29)(36,"button",30),k("click",function(){return i.openModal()}),h(37,"span",19),g(38,"Submit Now"),m(),h(39,"span",20),V(),h(40,"svg",21),C(41,"path",22),m()(),L(),C(42,"span",23),m()()()(),h(43,"nav",31)(44,"div",32)(45,"div",33)(46,"a",34),V(),h(47,"svg",35)(48,"svg",3),C(49,"path",36)(50,"path",37)(51,"path",38)(52,"path",39),m()()(),L(),h(53,"div",40)(54,"div",41),V(),h(55,"svg",42),C(56,"path",43),m()(),L(),C(57,"input",44),m(),h(58,"div",45)(59,"button",46),k("click",function(){return i.toggleNotifications()}),V(),h(60,"svg",47),C(61,"path",48)(62,"path",49)(63,"path",50)(64,"path",51),m(),W(65,Ji,2,1,"span",52),m(),W(66,er,6,1,"div",53),m()()()(),W(67,tr,21,1,"div",54)),t&2&&(_("ngClass",i.isHome()?"text-white bg-transparent":"text-black bg-white shadow-md"),v(),_("ngClass",i.isAdminRoute()?"hidden":""),v(10),_("ngClass",i.isHome()?"text-black lg:text-white":"text-black"),v(),_("ngIf",!i.isMenuOpen),v(),_("ngIf",i.isMenuOpen),v(),_("ngClass",i.isAdminRoute()?"hidden":""),v(),_("ngForOf",i.navLinks),v(),_("ngClass",i.isAdminRoute()?"hidden":""),v(13),_("ngClass",Zt(16,Wi,i.isMenuOpen,!i.isMenuOpen)),v(2),_("ngForOf",i.navLinks),v(),_("ngClass",i.isAdminRoute()?"hidden":""),v(3),_("ngClass",i.isAdminRoute()?"hidden":""),v(8),_("ngClass",i.isAdminRoute()?"":"hidden"),v(22),_("ngIf",i.unreadCount>0),v(),_("ngIf",i.showNotificationList),v(),_("ngIf",i.isModalOpen))},dependencies:[on,tn,nn,rn,pn,fn,hn,Re,an],styles:['@charset "UTF-8";.active-link[_ngcontent-%COMP%]{position:relative}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-weight:700}.active-link[_ngcontent-%COMP%]:after{content:"";display:block;margin-top:3px;height:6px;width:100%;position:absolute;transition:background-color .3s;background-color:#fff}.active-link-dark[_ngcontent-%COMP%]:after{content:"";display:block;margin-top:4px;height:6px;width:100%;position:absolute;transition:background-color .3s;background-color:#000}nav.bg-transparent[_ngcontent-%COMP%]   .active-link[_ngcontent-%COMP%]:after{background-color:#fff}nav.bg-white\\/70[_ngcontent-%COMP%]   .active-link[_ngcontent-%COMP%]:after{background-color:#1c4f60}.menu-hidden[_ngcontent-%COMP%]{max-height:0;opacity:0;padding-top:0;padding-bottom:0;pointer-events:none}.menu-visible[_ngcontent-%COMP%]{max-height:500px;opacity:1;padding-top:.5rem;padding-bottom:1rem}@keyframes _ngcontent-%COMP%_fade-in{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}.animate-fade-in[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fade-in .3s ease-out}']})};function nr(e,n,t){return(n=rr(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function wn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?wn(Object(t),!0).forEach(function(i){nr(e,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):wn(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})}return e}function ir(e,n){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var i=t.call(e,n||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function rr(e){var n=ir(e,"string");return typeof n=="symbol"?n:n+""}var Dn=()=>{},kt={},Kn={},Jn=null,Qn={mark:Dn,measure:Dn};try{typeof window<"u"&&(kt=window),typeof document<"u"&&(Kn=document),typeof MutationObserver<"u"&&(Jn=MutationObserver),typeof performance<"u"&&(Qn=performance)}catch{}var{userAgent:En=""}=kt.navigator||{},X=kt,b=Kn,Mn=Jn,He=Qn,hs=!!X.document,H=!!b.documentElement&&!!b.head&&typeof b.addEventListener=="function"&&typeof b.createElement=="function",ei=~En.indexOf("MSIE")||~En.indexOf("Trident/"),ar=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,or=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,ti={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},sr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ni=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],w="classic",qe="duotone",lr="sharp",cr="sharp-duotone",ii=[w,qe,lr,cr],ur={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},dr={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},fr=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),hr={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},mr=["fak","fa-kit","fakd","fa-kit-duotone"],Vn={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},pr=["kit"],gr={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},yr=["fak","fakd"],vr={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Sn={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},ze={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},br=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Cr=["fak","fa-kit","fakd","fa-kit-duotone"],_r={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Ar={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},xr={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},mt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},wr=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],pt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...br,...wr],Dr=["solid","regular","light","thin","duotone","brands"],ri=[1,2,3,4,5,6,7,8,9,10],Er=ri.concat([11,12,13,14,15,16,17,18,19,20]),Mr=[...Object.keys(xr),...Dr,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ze.GROUP,ze.SWAP_OPACITY,ze.PRIMARY,ze.SECONDARY].concat(ri.map(e=>"".concat(e,"x"))).concat(Er.map(e=>"w-".concat(e))),Vr={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},R="___FONT_AWESOME___",gt=16,ai="fa",oi="svg-inline--fa",te="data-fa-i2svg",yt="data-fa-pseudo-element",Sr="data-fa-pseudo-element-pending",It="data-prefix",Nt="data-icon",Fn="fontawesome-i2svg",Fr="async",kr=["HTML","HEAD","STYLE","SCRIPT"],si=(()=>{try{return!0}catch{return!1}})();function Fe(e){return new Proxy(e,{get(n,t){return t in n?n[t]:n[w]}})}var li=l({},ti);li[w]=l(l(l(l({},{"fa-duotone":"duotone"}),ti[w]),Vn.kit),Vn["kit-duotone"]);var Ir=Fe(li),vt=l({},hr);vt[w]=l(l(l(l({},{duotone:"fad"}),vt[w]),Sn.kit),Sn["kit-duotone"]);var kn=Fe(vt),bt=l({},mt);bt[w]=l(l({},bt[w]),vr.kit);var Ot=Fe(bt),Ct=l({},Ar);Ct[w]=l(l({},Ct[w]),gr.kit);var ms=Fe(Ct),Nr=ar,ci="fa-layers-text",Or=or,Pr=l({},ur),ps=Fe(Pr),Lr=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ct=sr,Tr=[...pr,...Mr],Ee=X.FontAwesomeConfig||{};function Rr(e){var n=b.querySelector("script["+e+"]");if(n)return n.getAttribute(e)}function jr(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}b&&typeof b.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(n=>{let[t,i]=n,r=jr(Rr(t));r!=null&&(Ee[i]=r)});var ui={styleDefault:"solid",familyDefault:w,cssPrefix:ai,replacementClass:oi,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ee.familyPrefix&&(Ee.cssPrefix=Ee.familyPrefix);var de=l(l({},ui),Ee);de.autoReplaceSvg||(de.observeMutations=!1);var c={};Object.keys(ui).forEach(e=>{Object.defineProperty(c,e,{enumerable:!0,set:function(n){de[e]=n,Me.forEach(t=>t(c))},get:function(){return de[e]}})});Object.defineProperty(c,"familyPrefix",{enumerable:!0,set:function(e){de.cssPrefix=e,Me.forEach(n=>n(c))},get:function(){return de.cssPrefix}});X.FontAwesomeConfig=c;var Me=[];function Hr(e){return Me.push(e),()=>{Me.splice(Me.indexOf(e),1)}}var Y=gt,I={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function zr(e){if(!e||!H)return;let n=b.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=e;let t=b.head.childNodes,i=null;for(let r=t.length-1;r>-1;r--){let a=t[r],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=a)}return b.head.insertBefore(n,i),e}var Br="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ve(){let e=12,n="";for(;e-- >0;)n+=Br[Math.random()*62|0];return n}function fe(e){let n=[];for(let t=(e||[]).length>>>0;t--;)n[t]=e[t];return n}function Pt(e){return e.classList?fe(e.classList):(e.getAttribute("class")||"").split(" ").filter(n=>n)}function di(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Gr(e){return Object.keys(e||{}).reduce((n,t)=>n+"".concat(t,'="').concat(di(e[t]),'" '),"").trim()}function Ye(e){return Object.keys(e||{}).reduce((n,t)=>n+"".concat(t,": ").concat(e[t].trim(),";"),"")}function Lt(e){return e.size!==I.size||e.x!==I.x||e.y!==I.y||e.rotate!==I.rotate||e.flipX||e.flipY}function Ur(e){let{transform:n,containerWidth:t,iconWidth:i}=e,r={transform:"translate(".concat(t/2," 256)")},a="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),d={transform:"".concat(a," ").concat(o," ").concat(s)},u={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:d,path:u}}function Wr(e){let{transform:n,width:t=gt,height:i=gt,startCentered:r=!1}=e,a="";return r&&ei?a+="translate(".concat(n.x/Y-t/2,"em, ").concat(n.y/Y-i/2,"em) "):r?a+="translate(calc(-50% + ".concat(n.x/Y,"em), calc(-50% + ").concat(n.y/Y,"em)) "):a+="translate(".concat(n.x/Y,"em, ").concat(n.y/Y,"em) "),a+="scale(".concat(n.size/Y*(n.flipX?-1:1),", ").concat(n.size/Y*(n.flipY?-1:1),") "),a+="rotate(".concat(n.rotate,"deg) "),a}var qr=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function fi(){let e=ai,n=oi,t=c.cssPrefix,i=c.replacementClass,r=qr;if(t!==e||i!==n){let a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(a,".".concat(t,"-")).replace(o,"--".concat(t,"-")).replace(s,".".concat(i))}return r}var In=!1;function ut(){c.autoAddCss&&!In&&(zr(fi()),In=!0)}var Yr={mixout(){return{dom:{css:fi,insertCss:ut}}},hooks(){return{beforeDOMElementCreation(){ut()},beforeI2svg(){ut()}}}},j=X||{};j[R]||(j[R]={});j[R].styles||(j[R].styles={});j[R].hooks||(j[R].hooks={});j[R].shims||(j[R].shims=[]);var N=j[R],hi=[],mi=function(){b.removeEventListener("DOMContentLoaded",mi),Ue=1,hi.map(e=>e())},Ue=!1;H&&(Ue=(b.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(b.readyState),Ue||b.addEventListener("DOMContentLoaded",mi));function Xr(e){H&&(Ue?setTimeout(e,0):hi.push(e))}function ke(e){let{tag:n,attributes:t={},children:i=[]}=e;return typeof e=="string"?di(e):"<".concat(n," ").concat(Gr(t),">").concat(i.map(ke).join(""),"</").concat(n,">")}function Nn(e,n,t){if(e&&e[n]&&e[n][t])return{prefix:n,iconName:t,icon:e[n][t]}}var $r=function(n,t){return function(i,r,a,o){return n.call(t,i,r,a,o)}},dt=function(n,t,i,r){var a=Object.keys(n),o=a.length,s=r!==void 0?$r(t,r):t,d,u,f;for(i===void 0?(d=1,f=n[a[0]]):(d=0,f=i);d<o;d++)u=a[d],f=s(f,n[u],u,n);return f};function Zr(e){let n=[],t=0,i=e.length;for(;t<i;){let r=e.charCodeAt(t++);if(r>=55296&&r<=56319&&t<i){let a=e.charCodeAt(t++);(a&64512)==56320?n.push(((r&1023)<<10)+(a&1023)+65536):(n.push(r),t--)}else n.push(r)}return n}function _t(e){let n=Zr(e);return n.length===1?n[0].toString(16):null}function Kr(e,n){let t=e.length,i=e.charCodeAt(n),r;return i>=55296&&i<=56319&&t>n+1&&(r=e.charCodeAt(n+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function On(e){return Object.keys(e).reduce((n,t)=>{let i=e[t];return!!i.icon?n[i.iconName]=i.icon:n[t]=i,n},{})}function At(e,n){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:i=!1}=t,r=On(n);typeof N.hooks.addPack=="function"&&!i?N.hooks.addPack(e,On(n)):N.styles[e]=l(l({},N.styles[e]||{}),r),e==="fas"&&At("fa",n)}var{styles:Se,shims:Jr}=N,pi=Object.keys(Ot),Qr=pi.reduce((e,n)=>(e[n]=Object.keys(Ot[n]),e),{}),Tt=null,gi={},yi={},vi={},bi={},Ci={};function ea(e){return~Tr.indexOf(e)}function ta(e,n){let t=n.split("-"),i=t[0],r=t.slice(1).join("-");return i===e&&r!==""&&!ea(r)?r:null}var _i=()=>{let e=i=>dt(Se,(r,a,o)=>(r[o]=dt(a,i,{}),r),{});gi=e((i,r,a)=>(r[3]&&(i[r[3]]=a),r[2]&&r[2].filter(s=>typeof s=="number").forEach(s=>{i[s.toString(16)]=a}),i)),yi=e((i,r,a)=>(i[a]=a,r[2]&&r[2].filter(s=>typeof s=="string").forEach(s=>{i[s]=a}),i)),Ci=e((i,r,a)=>{let o=r[2];return i[a]=a,o.forEach(s=>{i[s]=a}),i});let n="far"in Se||c.autoFetchSvg,t=dt(Jr,(i,r)=>{let a=r[0],o=r[1],s=r[2];return o==="far"&&!n&&(o="fas"),typeof a=="string"&&(i.names[a]={prefix:o,iconName:s}),typeof a=="number"&&(i.unicodes[a.toString(16)]={prefix:o,iconName:s}),i},{names:{},unicodes:{}});vi=t.names,bi=t.unicodes,Tt=Xe(c.styleDefault,{family:c.familyDefault})};Hr(e=>{Tt=Xe(e.styleDefault,{family:c.familyDefault})});_i();function Rt(e,n){return(gi[e]||{})[n]}function na(e,n){return(yi[e]||{})[n]}function ee(e,n){return(Ci[e]||{})[n]}function Ai(e){return vi[e]||{prefix:null,iconName:null}}function ia(e){let n=bi[e],t=Rt("fas",e);return n||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function $(){return Tt}var xi=()=>({prefix:null,iconName:null,rest:[]});function ra(e){let n=w,t=pi.reduce((i,r)=>(i[r]="".concat(c.cssPrefix,"-").concat(r),i),{});return ii.forEach(i=>{(e.includes(t[i])||e.some(r=>Qr[i].includes(r)))&&(n=i)}),n}function Xe(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:t=w}=n,i=Ir[t][e];if(t===qe&&!e)return"fad";let r=kn[t][e]||kn[t][i],a=e in N.styles?e:null;return r||a||null}function aa(e){let n=[],t=null;return e.forEach(i=>{let r=ta(c.cssPrefix,i);r?t=r:i&&n.push(i)}),{iconName:t,rest:n}}function Pn(e){return e.sort().filter((n,t,i)=>i.indexOf(n)===t)}function $e(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:t=!1}=n,i=null,r=pt.concat(Cr),a=Pn(e.filter(y=>r.includes(y))),o=Pn(e.filter(y=>!pt.includes(y))),s=a.filter(y=>(i=y,!ni.includes(y))),[d=null]=s,u=ra(a),f=l(l({},aa(o)),{},{prefix:Xe(d,{family:u})});return l(l(l({},f),ca({values:e,family:u,styles:Se,config:c,canonical:f,givenPrefix:i})),oa(t,i,f))}function oa(e,n,t){let{prefix:i,iconName:r}=t;if(e||!i||!r)return{prefix:i,iconName:r};let a=n==="fa"?Ai(r):{},o=ee(i,r);return r=a.iconName||o||r,i=a.prefix||i,i==="far"&&!Se.far&&Se.fas&&!c.autoFetchSvg&&(i="fas"),{prefix:i,iconName:r}}var sa=ii.filter(e=>e!==w||e!==qe),la=Object.keys(mt).filter(e=>e!==w).map(e=>Object.keys(mt[e])).flat();function ca(e){let{values:n,family:t,canonical:i,givenPrefix:r="",styles:a={},config:o={}}=e,s=t===qe,d=n.includes("fa-duotone")||n.includes("fad"),u=o.familyDefault==="duotone",f=i.prefix==="fad"||i.prefix==="fa-duotone";if(!s&&(d||u||f)&&(i.prefix="fad"),(n.includes("fa-brands")||n.includes("fab"))&&(i.prefix="fab"),!i.prefix&&sa.includes(t)&&(Object.keys(a).find(p=>la.includes(p))||o.autoFetchSvg)){let p=fr.get(t).defaultShortPrefixId;i.prefix=p,i.iconName=ee(i.prefix,i.iconName)||i.iconName}return(i.prefix==="fa"||r==="fa")&&(i.prefix=$()||"fas"),i}var xt=class{constructor(){this.definitions={}}add(){for(var n=arguments.length,t=new Array(n),i=0;i<n;i++)t[i]=arguments[i];let r=t.reduce(this._pullDefinitions,{});Object.keys(r).forEach(a=>{this.definitions[a]=l(l({},this.definitions[a]||{}),r[a]),At(a,r[a]);let o=Ot[w][a];o&&At(o,r[a]),_i()})}reset(){this.definitions={}}_pullDefinitions(n,t){let i=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(i).map(r=>{let{prefix:a,iconName:o,icon:s}=i[r],d=s[2];n[a]||(n[a]={}),d.length>0&&d.forEach(u=>{typeof u=="string"&&(n[a][u]=s)}),n[a][o]=s}),n}},Ln=[],ce={},ue={},ua=Object.keys(ue);function da(e,n){let{mixoutsTo:t}=n;return Ln=e,ce={},Object.keys(ue).forEach(i=>{ua.indexOf(i)===-1&&delete ue[i]}),Ln.forEach(i=>{let r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(a=>{typeof r[a]=="function"&&(t[a]=r[a]),typeof r[a]=="object"&&Object.keys(r[a]).forEach(o=>{t[a]||(t[a]={}),t[a][o]=r[a][o]})}),i.hooks){let a=i.hooks();Object.keys(a).forEach(o=>{ce[o]||(ce[o]=[]),ce[o].push(a[o])})}i.provides&&i.provides(ue)}),t}function wt(e,n){for(var t=arguments.length,i=new Array(t>2?t-2:0),r=2;r<t;r++)i[r-2]=arguments[r];return(ce[e]||[]).forEach(o=>{n=o.apply(null,[n,...i])}),n}function ne(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),i=1;i<n;i++)t[i-1]=arguments[i];(ce[e]||[]).forEach(a=>{a.apply(null,t)})}function Z(){let e=arguments[0],n=Array.prototype.slice.call(arguments,1);return ue[e]?ue[e].apply(null,n):void 0}function Dt(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:n}=e,t=e.prefix||$();if(n)return n=ee(t,n)||n,Nn(wi.definitions,t,n)||Nn(N.styles,t,n)}var wi=new xt,fa=()=>{c.autoReplaceSvg=!1,c.observeMutations=!1,ne("noAuto")},ha={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return H?(ne("beforeI2svg",e),Z("pseudoElements2svg",e),Z("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:n}=e;c.autoReplaceSvg===!1&&(c.autoReplaceSvg=!0),c.observeMutations=!0,Xr(()=>{pa({autoReplaceSvgRoot:n}),ne("watch",e)})}},ma={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ee(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){let n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],t=Xe(e[0]);return{prefix:t,iconName:ee(t,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(c.cssPrefix,"-"))>-1||e.match(Nr))){let n=$e(e.split(" "),{skipLookups:!0});return{prefix:n.prefix||$(),iconName:ee(n.prefix,n.iconName)||n.iconName}}if(typeof e=="string"){let n=$();return{prefix:n,iconName:ee(n,e)||e}}}},M={noAuto:fa,config:c,dom:ha,parse:ma,library:wi,findIconDefinition:Dt,toHtml:ke},pa=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:n=b}=e;(Object.keys(N.styles).length>0||c.autoFetchSvg)&&H&&c.autoReplaceSvg&&M.dom.i2svg({node:n})};function Ze(e,n){return Object.defineProperty(e,"abstract",{get:n}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(t=>ke(t))}}),Object.defineProperty(e,"node",{get:function(){if(!H)return;let t=b.createElement("div");return t.innerHTML=e.html,t.children}}),e}function ga(e){let{children:n,main:t,mask:i,attributes:r,styles:a,transform:o}=e;if(Lt(o)&&t.found&&!i.found){let{width:s,height:d}=t,u={x:s/d/2,y:.5};r.style=Ye(l(l({},a),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function ya(e){let{prefix:n,iconName:t,children:i,attributes:r,symbol:a}=e,o=a===!0?"".concat(n,"-").concat(c.cssPrefix,"-").concat(t):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:o}),children:i}]}]}function jt(e){let{icons:{main:n,mask:t},prefix:i,iconName:r,transform:a,symbol:o,title:s,maskId:d,titleId:u,extra:f,watchable:y=!1}=e,{width:p,height:D}=t.found?t:n,z=yr.includes(i),K=[c.replacementClass,r?"".concat(c.cssPrefix,"-").concat(r):""].filter(oe=>f.classes.indexOf(oe)===-1).filter(oe=>oe!==""||!!oe).concat(f.classes).join(" "),S={children:[],attributes:l(l({},f.attributes),{},{"data-prefix":i,"data-icon":r,class:K,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(D)})},O=z&&!~f.classes.indexOf("fa-fw")?{width:"".concat(p/D*16*.0625,"em")}:{};y&&(S.attributes[te]=""),s&&(S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(u||Ve())},children:[s]}),delete S.attributes.title);let E=l(l({},S),{},{prefix:i,iconName:r,main:n,mask:t,maskId:d,transform:a,symbol:o,styles:l(l({},O),f.styles)}),{children:F,attributes:ae}=t.found&&n.found?Z("generateAbstractMask",E)||{children:[],attributes:{}}:Z("generateAbstractIcon",E)||{children:[],attributes:{}};return E.children=F,E.attributes=ae,o?ya(E):ga(E)}function Tn(e){let{content:n,width:t,height:i,transform:r,title:a,extra:o,watchable:s=!1}=e,d=l(l(l({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});s&&(d[te]="");let u=l({},o.styles);Lt(r)&&(u.transform=Wr({transform:r,startCentered:!0,width:t,height:i}),u["-webkit-transform"]=u.transform);let f=Ye(u);f.length>0&&(d.style=f);let y=[];return y.push({tag:"span",attributes:d,children:[n]}),a&&y.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),y}function va(e){let{content:n,title:t,extra:i}=e,r=l(l(l({},i.attributes),t?{title:t}:{}),{},{class:i.classes.join(" ")}),a=Ye(i.styles);a.length>0&&(r.style=a);let o=[];return o.push({tag:"span",attributes:r,children:[n]}),t&&o.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),o}var{styles:ft}=N;function Et(e){let n=e[0],t=e[1],[i]=e.slice(4),r=null;return Array.isArray(i)?r={tag:"g",attributes:{class:"".concat(c.cssPrefix,"-").concat(ct.GROUP)},children:[{tag:"path",attributes:{class:"".concat(c.cssPrefix,"-").concat(ct.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(c.cssPrefix,"-").concat(ct.PRIMARY),fill:"currentColor",d:i[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:t,icon:r}}var ba={found:!1,width:512,height:512};function Ca(e,n){!si&&!c.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(n,'" is missing.'))}function Mt(e,n){let t=n;return n==="fa"&&c.styleDefault!==null&&(n=$()),new Promise((i,r)=>{if(t==="fa"){let a=Ai(e)||{};e=a.iconName||e,n=a.prefix||n}if(e&&n&&ft[n]&&ft[n][e]){let a=ft[n][e];return i(Et(a))}Ca(e,n),i(l(l({},ba),{},{icon:c.showMissingIcons&&e?Z("missingIconAbstract")||{}:{}}))})}var Rn=()=>{},Vt=c.measurePerformance&&He&&He.mark&&He.measure?He:{mark:Rn,measure:Rn},De='FA "6.7.2"',_a=e=>(Vt.mark("".concat(De," ").concat(e," begins")),()=>Di(e)),Di=e=>{Vt.mark("".concat(De," ").concat(e," ends")),Vt.measure("".concat(De," ").concat(e),"".concat(De," ").concat(e," begins"),"".concat(De," ").concat(e," ends"))},Ht={begin:_a,end:Di},Be=()=>{};function jn(e){return typeof(e.getAttribute?e.getAttribute(te):null)=="string"}function Aa(e){let n=e.getAttribute?e.getAttribute(It):null,t=e.getAttribute?e.getAttribute(Nt):null;return n&&t}function xa(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(c.replacementClass)}function wa(){return c.autoReplaceSvg===!0?Ge.replace:Ge[c.autoReplaceSvg]||Ge.replace}function Da(e){return b.createElementNS("http://www.w3.org/2000/svg",e)}function Ea(e){return b.createElement(e)}function Ei(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:t=e.tag==="svg"?Da:Ea}=n;if(typeof e=="string")return b.createTextNode(e);let i=t(e.tag);return Object.keys(e.attributes||[]).forEach(function(a){i.setAttribute(a,e.attributes[a])}),(e.children||[]).forEach(function(a){i.appendChild(Ei(a,{ceFn:t}))}),i}function Ma(e){let n=" ".concat(e.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var Ge={replace:function(e){let n=e[0];if(n.parentNode)if(e[1].forEach(t=>{n.parentNode.insertBefore(Ei(t),n)}),n.getAttribute(te)===null&&c.keepOriginalSource){let t=b.createComment(Ma(n));n.parentNode.replaceChild(t,n)}else n.remove()},nest:function(e){let n=e[0],t=e[1];if(~Pt(n).indexOf(c.replacementClass))return Ge.replace(e);let i=new RegExp("".concat(c.cssPrefix,"-.*"));if(delete t[0].attributes.id,t[0].attributes.class){let a=t[0].attributes.class.split(" ").reduce((o,s)=>(s===c.replacementClass||s.match(i)?o.toSvg.push(s):o.toNode.push(s),o),{toNode:[],toSvg:[]});t[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}let r=t.map(a=>ke(a)).join(`
`);n.setAttribute(te,""),n.innerHTML=r}};function Hn(e){e()}function Mi(e,n){let t=typeof n=="function"?n:Be;if(e.length===0)t();else{let i=Hn;c.mutateApproach===Fr&&(i=X.requestAnimationFrame||Hn),i(()=>{let r=wa(),a=Ht.begin("mutate");e.map(r),a(),t()})}}var zt=!1;function Vi(){zt=!0}function St(){zt=!1}var We=null;function zn(e){if(!Mn||!c.observeMutations)return;let{treeCallback:n=Be,nodeCallback:t=Be,pseudoElementsCallback:i=Be,observeMutationsRoot:r=b}=e;We=new Mn(a=>{if(zt)return;let o=$();fe(a).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!jn(s.addedNodes[0])&&(c.searchPseudoElements&&i(s.target),n(s.target)),s.type==="attributes"&&s.target.parentNode&&c.searchPseudoElements&&i(s.target.parentNode),s.type==="attributes"&&jn(s.target)&&~Lr.indexOf(s.attributeName))if(s.attributeName==="class"&&Aa(s.target)){let{prefix:d,iconName:u}=$e(Pt(s.target));s.target.setAttribute(It,d||o),u&&s.target.setAttribute(Nt,u)}else xa(s.target)&&t(s.target)})}),H&&We.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Va(){We&&We.disconnect()}function Sa(e){let n=e.getAttribute("style"),t=[];return n&&(t=n.split(";").reduce((i,r)=>{let a=r.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(i[o]=s.join(":").trim()),i},{})),t}function Fa(e){let n=e.getAttribute("data-prefix"),t=e.getAttribute("data-icon"),i=e.innerText!==void 0?e.innerText.trim():"",r=$e(Pt(e));return r.prefix||(r.prefix=$()),n&&t&&(r.prefix=n,r.iconName=t),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=na(r.prefix,e.innerText)||Rt(r.prefix,_t(e.innerText))),!r.iconName&&c.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function ka(e){let n=fe(e.attributes).reduce((r,a)=>(r.name!=="class"&&r.name!=="style"&&(r[a.name]=a.value),r),{}),t=e.getAttribute("title"),i=e.getAttribute("data-fa-title-id");return c.autoA11y&&(t?n["aria-labelledby"]="".concat(c.replacementClass,"-title-").concat(i||Ve()):(n["aria-hidden"]="true",n.focusable="false")),n}function Ia(){return{iconName:null,title:null,titleId:null,prefix:null,transform:I,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Bn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:t,prefix:i,rest:r}=Fa(e),a=ka(e),o=wt("parseNodeAttributes",{},e),s=n.styleParser?Sa(e):[];return l({iconName:t,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:I,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:s,attributes:a}},o)}var{styles:Na}=N;function Si(e){let n=c.autoReplaceSvg==="nest"?Bn(e,{styleParser:!1}):Bn(e);return~n.extra.classes.indexOf(ci)?Z("generateLayersText",e,n):Z("generateSvgReplacementMutation",e,n)}function Oa(){return[...mr,...pt]}function Gn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!H)return Promise.resolve();let t=b.documentElement.classList,i=f=>t.add("".concat(Fn,"-").concat(f)),r=f=>t.remove("".concat(Fn,"-").concat(f)),a=c.autoFetchSvg?Oa():ni.concat(Object.keys(Na));a.includes("fa")||a.push("fa");let o=[".".concat(ci,":not([").concat(te,"])")].concat(a.map(f=>".".concat(f,":not([").concat(te,"])"))).join(", ");if(o.length===0)return Promise.resolve();let s=[];try{s=fe(e.querySelectorAll(o))}catch{}if(s.length>0)i("pending"),r("complete");else return Promise.resolve();let d=Ht.begin("onTree"),u=s.reduce((f,y)=>{try{let p=Si(y);p&&f.push(p)}catch(p){si||p.name==="MissingIcon"&&console.error(p)}return f},[]);return new Promise((f,y)=>{Promise.all(u).then(p=>{Mi(p,()=>{i("active"),i("complete"),r("pending"),typeof n=="function"&&n(),d(),f()})}).catch(p=>{d(),y(p)})})}function Pa(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Si(e).then(t=>{t&&Mi([t],n)})}function La(e){return function(n){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(n||{}).icon?n:Dt(n||{}),{mask:r}=t;return r&&(r=(r||{}).icon?r:Dt(r||{})),e(i,l(l({},t),{},{mask:r}))}}var Ta=function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:t=I,symbol:i=!1,mask:r=null,maskId:a=null,title:o=null,titleId:s=null,classes:d=[],attributes:u={},styles:f={}}=n;if(!e)return;let{prefix:y,iconName:p,icon:D}=e;return Ze(l({type:"icon"},e),()=>(ne("beforeDOMElementCreation",{iconDefinition:e,params:n}),c.autoA11y&&(o?u["aria-labelledby"]="".concat(c.replacementClass,"-title-").concat(s||Ve()):(u["aria-hidden"]="true",u.focusable="false")),jt({icons:{main:Et(D),mask:r?Et(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:y,iconName:p,transform:l(l({},I),t),symbol:i,title:o,maskId:a,titleId:s,extra:{attributes:u,styles:f,classes:d}})))},Ra={mixout(){return{icon:La(Ta)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Gn,e.nodeCallback=Pa,e}}},provides(e){e.i2svg=function(n){let{node:t=b,callback:i=()=>{}}=n;return Gn(t,i)},e.generateSvgReplacementMutation=function(n,t){let{iconName:i,title:r,titleId:a,prefix:o,transform:s,symbol:d,mask:u,maskId:f,extra:y}=t;return new Promise((p,D)=>{Promise.all([Mt(i,o),u.iconName?Mt(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(z=>{let[K,S]=z;p([n,jt({icons:{main:K,mask:S},prefix:o,iconName:i,transform:s,symbol:d,maskId:f,title:r,titleId:a,extra:y,watchable:!0})])}).catch(D)})},e.generateAbstractIcon=function(n){let{children:t,attributes:i,main:r,transform:a,styles:o}=n,s=Ye(o);s.length>0&&(i.style=s);let d;return Lt(a)&&(d=Z("generateAbstractTransformGrouping",{main:r,transform:a,containerWidth:r.width,iconWidth:r.width})),t.push(d||r.icon),{children:t,attributes:i}}}},ja={mixout(){return{layer(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:t=[]}=n;return Ze({type:"layer"},()=>{ne("beforeDOMElementCreation",{assembler:e,params:n});let i=[];return e(r=>{Array.isArray(r)?r.map(a=>{i=i.concat(a.abstract)}):i=i.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(c.cssPrefix,"-layers"),...t].join(" ")},children:i}]})}}}},Ha={mixout(){return{counter(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:t=null,classes:i=[],attributes:r={},styles:a={}}=n;return Ze({type:"counter",content:e},()=>(ne("beforeDOMElementCreation",{content:e,params:n}),va({content:e.toString(),title:t,extra:{attributes:r,styles:a,classes:["".concat(c.cssPrefix,"-layers-counter"),...i]}})))}}}},za={mixout(){return{text(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:t=I,title:i=null,classes:r=[],attributes:a={},styles:o={}}=n;return Ze({type:"text",content:e},()=>(ne("beforeDOMElementCreation",{content:e,params:n}),Tn({content:e,transform:l(l({},I),t),title:i,extra:{attributes:a,styles:o,classes:["".concat(c.cssPrefix,"-layers-text"),...r]}})))}}},provides(e){e.generateLayersText=function(n,t){let{title:i,transform:r,extra:a}=t,o=null,s=null;if(ei){let d=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();o=u.width/d,s=u.height/d}return c.autoA11y&&!i&&(a.attributes["aria-hidden"]="true"),Promise.resolve([n,Tn({content:n.innerHTML,width:o,height:s,transform:r,title:i,extra:a,watchable:!0})])}}},Ba=new RegExp('"',"ug"),Un=[1105920,1112319],Wn=l(l(l(l({},{FontAwesome:{normal:"fas",400:"fas"}}),dr),Vr),_r),Ft=Object.keys(Wn).reduce((e,n)=>(e[n.toLowerCase()]=Wn[n],e),{}),Ga=Object.keys(Ft).reduce((e,n)=>{let t=Ft[n];return e[n]=t[900]||[...Object.entries(t)][0][1],e},{});function Ua(e){let n=e.replace(Ba,""),t=Kr(n,0),i=t>=Un[0]&&t<=Un[1],r=n.length===2?n[0]===n[1]:!1;return{value:_t(r?n[0]:n),isSecondary:i||r}}function Wa(e,n){let t=e.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(n),r=isNaN(i)?"normal":i;return(Ft[t]||{})[r]||Ga[t]}function qn(e,n){let t="".concat(Sr).concat(n.replace(":","-"));return new Promise((i,r)=>{if(e.getAttribute(t)!==null)return i();let o=fe(e.children).filter(p=>p.getAttribute(yt)===n)[0],s=X.getComputedStyle(e,n),d=s.getPropertyValue("font-family"),u=d.match(Or),f=s.getPropertyValue("font-weight"),y=s.getPropertyValue("content");if(o&&!u)return e.removeChild(o),i();if(u&&y!=="none"&&y!==""){let p=s.getPropertyValue("content"),D=Wa(d,f),{value:z,isSecondary:K}=Ua(p),S=u[0].startsWith("FontAwesome"),O=Rt(D,z),E=O;if(S){let F=ia(z);F.iconName&&F.prefix&&(O=F.iconName,D=F.prefix)}if(O&&!K&&(!o||o.getAttribute(It)!==D||o.getAttribute(Nt)!==E)){e.setAttribute(t,E),o&&e.removeChild(o);let F=Ia(),{extra:ae}=F;ae.attributes[yt]=n,Mt(O,D).then(oe=>{let Li=jt(l(l({},F),{},{icons:{main:oe,mask:xi()},prefix:D,iconName:E,extra:ae,watchable:!0})),Qe=b.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?e.insertBefore(Qe,e.firstChild):e.appendChild(Qe),Qe.outerHTML=Li.map(Ti=>ke(Ti)).join(`
`),e.removeAttribute(t),i()}).catch(r)}else i()}else i()})}function qa(e){return Promise.all([qn(e,"::before"),qn(e,"::after")])}function Ya(e){return e.parentNode!==document.head&&!~kr.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(yt)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Yn(e){if(H)return new Promise((n,t)=>{let i=fe(e.querySelectorAll("*")).filter(Ya).map(qa),r=Ht.begin("searchPseudoElements");Vi(),Promise.all(i).then(()=>{r(),St(),n()}).catch(()=>{r(),St(),t()})})}var Xa={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=Yn,e}}},provides(e){e.pseudoElements2svg=function(n){let{node:t=b}=n;c.searchPseudoElements&&Yn(t)}}},Xn=!1,$a={mixout(){return{dom:{unwatch(){Vi(),Xn=!0}}}},hooks(){return{bootstrap(){zn(wt("mutationObserverCallbacks",{}))},noAuto(){Va()},watch(e){let{observeMutationsRoot:n}=e;Xn?St():zn(wt("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},$n=e=>{let n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((t,i)=>{let r=i.toLowerCase().split("-"),a=r[0],o=r.slice(1).join("-");if(a&&o==="h")return t.flipX=!0,t;if(a&&o==="v")return t.flipY=!0,t;if(o=parseFloat(o),isNaN(o))return t;switch(a){case"grow":t.size=t.size+o;break;case"shrink":t.size=t.size-o;break;case"left":t.x=t.x-o;break;case"right":t.x=t.x+o;break;case"up":t.y=t.y-o;break;case"down":t.y=t.y+o;break;case"rotate":t.rotate=t.rotate+o;break}return t},n)},Za={mixout(){return{parse:{transform:e=>$n(e)}}},hooks(){return{parseNodeAttributes(e,n){let t=n.getAttribute("data-fa-transform");return t&&(e.transform=$n(t)),e}}},provides(e){e.generateAbstractTransformGrouping=function(n){let{main:t,transform:i,containerWidth:r,iconWidth:a}=n,o={transform:"translate(".concat(r/2," 256)")},s="translate(".concat(i.x*32,", ").concat(i.y*32,") "),d="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(s," ").concat(d," ").concat(u)},y={transform:"translate(".concat(a/2*-1," -256)")},p={outer:o,inner:f,path:y};return{tag:"g",attributes:l({},p.outer),children:[{tag:"g",attributes:l({},p.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:l(l({},t.icon.attributes),p.path)}]}]}}}},ht={x:0,y:0,width:"100%",height:"100%"};function Zn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||n)&&(e.attributes.fill="black"),e}function Ka(e){return e.tag==="g"?e.children:[e]}var Ja={hooks(){return{parseNodeAttributes(e,n){let t=n.getAttribute("data-fa-mask"),i=t?$e(t.split(" ").map(r=>r.trim())):xi();return i.prefix||(i.prefix=$()),e.mask=i,e.maskId=n.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(n){let{children:t,attributes:i,main:r,mask:a,maskId:o,transform:s}=n,{width:d,icon:u}=r,{width:f,icon:y}=a,p=Ur({transform:s,containerWidth:f,iconWidth:d}),D={tag:"rect",attributes:l(l({},ht),{},{fill:"white"})},z=u.children?{children:u.children.map(Zn)}:{},K={tag:"g",attributes:l({},p.inner),children:[Zn(l({tag:u.tag,attributes:l(l({},u.attributes),p.path)},z))]},S={tag:"g",attributes:l({},p.outer),children:[K]},O="mask-".concat(o||Ve()),E="clip-".concat(o||Ve()),F={tag:"mask",attributes:l(l({},ht),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[D,S]},ae={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:Ka(y)},F]};return t.push(ae,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(O,")")},ht)}),{children:t,attributes:i}}}},Qa={provides(e){let n=!1;X.matchMedia&&(n=X.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){let t=[],i={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:l(l({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let a=l(l({},r),{},{attributeName:"opacity"}),o={tag:"circle",attributes:l(l({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:l(l({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},a),{},{values:"1;0;1;1;0;1;"})}),t.push(o),t.push({tag:"path",attributes:l(l({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:l(l({},a),{},{values:"1;0;0;0;0;1;"})}]}),n||t.push({tag:"path",attributes:l(l({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},eo={hooks(){return{parseNodeAttributes(e,n){let t=n.getAttribute("data-fa-symbol"),i=t===null?!1:t===""?!0:t;return e.symbol=i,e}}}},to=[Yr,Ra,ja,Ha,za,Xa,$a,Za,Ja,Qa,eo];da(to,{mixoutsTo:M});var gs=M.noAuto,no=M.config,ys=M.library,io=M.dom,ro=M.parse,vs=M.findIconDefinition,bs=M.toHtml,ao=M.icon,Cs=M.layer,oo=M.text,so=M.counter;var Fi=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=U({type:e});static \u0275inj=B({})}return e})();var Oe=class{},lo=(()=>{class e{handle(t){return t.key}static \u0275fac=function(i){return new(i||e)};static \u0275prov=P({token:e,factory:e.\u0275fac})}return e})(),me=class{},co=(()=>{class e extends me{compile(t,i){return t}compileTranslations(t,i){return t}static \u0275fac=(()=>{let t;return function(r){return(t||(t=le(e)))(r||e)}})();static \u0275prov=P({token:e,factory:e.\u0275fac})}return e})(),pe=class{},uo=(()=>{class e extends pe{getTranslation(t){return ye({})}static \u0275fac=(()=>{let t;return function(r){return(t||(t=le(e)))(r||e)}})();static \u0275prov=P({token:e,factory:e.\u0275fac})}return e})();function ie(e){return typeof e<"u"&&e!==null}function ki(e){return e!==void 0}function he(e){return Ne(e)&&!re(e)&&e!==null}function Ne(e){return typeof e=="object"&&e!==null}function re(e){return Array.isArray(e)}function Bt(e){return typeof e=="string"}function fo(e){return typeof e=="function"}function Ke(e){if(re(e))return e.map(n=>Ke(n));if(he(e)){let n={};return Object.keys(e).forEach(t=>{n[t]=Ke(e[t])}),n}else return e}function Wt(e,n){if(!Ne(e))return Ke(n);let t=Ke(e);return Ne(t)&&Ne(n)&&Object.keys(n).forEach(i=>{he(n[i])?i in e?t[i]=Wt(e[i],n[i]):Object.assign(t,{[i]:n[i]}):Object.assign(t,{[i]:n[i]})}),t}function Oi(e,n){let t=n.split(".");n="";do{n+=t.shift();let i=!t.length;if(ie(e)){if(he(e)&&ki(e[n])&&(he(e[n])||re(e[n])||i)){e=e[n],n="";continue}if(re(e)){let r=parseInt(n,10);if(ki(e[r])&&(he(e[r])||re(e[r])||i)){e=e[r],n="";continue}}}if(i){e=void 0;continue}n+="."}while(t.length);return e}function ho(e,n,t){return Wt(e,mo(n,t))}function mo(e,n){return e.split(".").reduceRight((t,i)=>({[i]:t}),n)}var ge=class{},po=(()=>{class e extends ge{templateMatcher=/{{\s?([^{}\s]*)\s?}}/g;interpolate(t,i){if(Bt(t))return this.interpolateString(t,i);if(fo(t))return this.interpolateFunction(t,i)}interpolateFunction(t,i){return t(i)}interpolateString(t,i){return i?t.replace(this.templateMatcher,(r,a)=>{let o=this.getInterpolationReplacement(i,a);return o!==void 0?o:r}):t}getInterpolationReplacement(t,i){return this.formatValue(Oi(t,i))}formatValue(t){if(Bt(t))return t;if(typeof t=="number"||typeof t=="boolean")return t.toString();if(t===null)return"null";if(re(t))return t.join(", ");if(Ne(t))return typeof t.toString=="function"&&t.toString!==Object.prototype.toString?t.toString():JSON.stringify(t)}static \u0275fac=(()=>{let t;return function(r){return(t||(t=le(e)))(r||e)}})();static \u0275prov=P({token:e,factory:e.\u0275fac})}return e})(),Gt=(()=>{class e{_onTranslationChange=new Pe;_onLangChange=new Pe;_onFallbackLangChange=new Pe;fallbackLang=null;currentLang;translations={};languages=[];getTranslations(t){return this.translations[t]}setTranslations(t,i,r){this.translations[t]=r&&this.hasTranslationFor(t)?Wt(this.translations[t],i):i,this.addLanguages([t]),this._onTranslationChange.next({lang:t,translations:this.getTranslations(t)})}getLanguages(){return this.languages}getCurrentLang(){return this.currentLang}getFallbackLang(){return this.fallbackLang}setFallbackLang(t,i=!0){this.fallbackLang=t,i&&this._onFallbackLangChange.next({lang:t,translations:this.translations[t]})}setCurrentLang(t,i=!0){this.currentLang=t,i&&this._onLangChange.next({lang:t,translations:this.translations[t]})}get onTranslationChange(){return this._onTranslationChange.asObservable()}get onLangChange(){return this._onLangChange.asObservable()}get onFallbackLangChange(){return this._onFallbackLangChange.asObservable()}addLanguages(t){this.languages=Array.from(new Set([...this.languages,...t]))}hasTranslationFor(t){return typeof this.translations[t]<"u"}deleteTranslations(t){delete this.translations[t]}getTranslation(t){let i=this.getValue(this.currentLang,t);return i===void 0&&this.fallbackLang!=null&&this.fallbackLang!==this.currentLang&&(i=this.getValue(this.fallbackLang,t)),i}getValue(t,i){return Oi(this.getTranslations(t),i)}static \u0275fac=function(i){return new(i||e)};static \u0275prov=P({token:e,factory:e.\u0275fac})}return e})(),Ut=new be("TRANSLATE_CONFIG"),Ie=e=>se(e)?e:ye(e);var Ii=(()=>{class e{loadingTranslations;pending=!1;_translationRequests={};lastUseLanguage=null;currentLoader=G(pe);compiler=G(me);parser=G(ge);missingTranslationHandler=G(Oe);store=G(Gt);extend=!1;get onTranslationChange(){return this.store.onTranslationChange}get onLangChange(){return this.store.onLangChange}get onFallbackLangChange(){return this.store.onFallbackLangChange}get onDefaultLangChange(){return this.store.onFallbackLangChange}constructor(){let t=J({extend:!1,fallbackLang:null},G(Ut,{optional:!0}));t.lang&&this.use(t.lang),t.fallbackLang&&this.setFallbackLang(t.fallbackLang),t.extend&&(this.extend=!0)}setFallbackLang(t){this.getFallbackLang()||this.store.setFallbackLang(t,!1);let i=this.loadOrExtendLanguage(t);return se(i)?(i.pipe(ve(1)).subscribe({next:()=>{this.store.setFallbackLang(t)},error:()=>{}}),i):(this.store.setFallbackLang(t),ye(this.store.getTranslations(t)))}use(t){this.lastUseLanguage=t,this.getCurrentLang()||this.store.setCurrentLang(t,!1);let i=this.loadOrExtendLanguage(t);return se(i)?(i.pipe(ve(1)).subscribe({next:()=>{this.changeLang(t)},error:()=>{}}),i):(this.changeLang(t),ye(this.store.getTranslations(t)))}loadOrExtendLanguage(t){if(!this.store.hasTranslationFor(t)||this.extend)return this._translationRequests[t]=this._translationRequests[t]||this.loadAndCompileTranslations(t),this._translationRequests[t]}changeLang(t){t===this.lastUseLanguage&&this.store.setCurrentLang(t)}getCurrentLang(){return this.store.getCurrentLang()}loadAndCompileTranslations(t){this.pending=!0;let i=this.currentLoader.getTranslation(t).pipe(rt(1),ve(1));return this.loadingTranslations=i.pipe(tt(r=>this.compiler.compileTranslations(r,t)),rt(1),ve(1)),this.loadingTranslations.subscribe({next:r=>{this.store.setTranslations(t,r,this.extend),this.pending=!1},error:r=>{this.pending=!1}}),i}setTranslation(t,i,r=!1){let a=this.compiler.compileTranslations(i,t);this.store.setTranslations(t,a,r||this.extend)}getLangs(){return this.store.getLanguages()}addLangs(t){this.store.addLanguages(t)}getParsedResultForKey(t,i){let r=this.getTextToInterpolate(t);if(ie(r))return this.runInterpolation(r,i);let a=this.missingTranslationHandler.handle(J({key:t,translateService:this},i!==void 0&&{interpolateParams:i}));return a!==void 0?a:t}getFallbackLang(){return this.store.getFallbackLang()}getTextToInterpolate(t){return this.store.getTranslation(t)}runInterpolation(t,i){if(ie(t))return re(t)?this.runInterpolationOnArray(t,i):he(t)?this.runInterpolationOnDict(t,i):this.parser.interpolate(t,i)}runInterpolationOnArray(t,i){return t.map(r=>this.runInterpolation(r,i))}runInterpolationOnDict(t,i){let r={};for(let a in t){let o=this.runInterpolation(t[a],i);o!==void 0&&(r[a]=o)}return r}getParsedResult(t,i){return t instanceof Array?this.getParsedResultForArray(t,i):this.getParsedResultForKey(t,i)}getParsedResultForArray(t,i){let r={},a=!1;for(let s of t)r[s]=this.getParsedResultForKey(s,i),a=a||se(r[s]);if(!a)return r;let o=t.map(s=>Ie(r[s]));return qt(o).pipe(tt(s=>{let d={};return s.forEach((u,f)=>{d[t[f]]=u}),d}))}get(t,i){if(!ie(t)||!t.length)throw new Error('Parameter "key" is required and cannot be empty');return this.pending?this.loadingTranslations.pipe(Yt(()=>Ie(this.getParsedResult(t,i)))):Ie(this.getParsedResult(t,i))}getStreamOnTranslationChange(t,i){if(!ie(t)||!t.length)throw new Error('Parameter "key" is required and cannot be empty');return nt(it(()=>this.get(t,i)),this.onTranslationChange.pipe(at(()=>{let r=this.getParsedResult(t,i);return Ie(r)})))}stream(t,i){if(!ie(t)||!t.length)throw new Error('Parameter "key" required');return nt(it(()=>this.get(t,i)),this.onLangChange.pipe(at(()=>{let r=this.getParsedResult(t,i);return Ie(r)})))}instant(t,i){if(!ie(t)||t.length===0)throw new Error('Parameter "key" is required and cannot be empty');let r=this.getParsedResult(t,i);return se(r)?Array.isArray(t)?t.reduce((a,o)=>(a[o]=o,a),{}):t:r}set(t,i,r=this.getCurrentLang()){this.store.setTranslations(r,ho(this.store.getTranslations(r),t,Bt(i)?this.compiler.compile(i,r):this.compiler.compileTranslations(i,r)),!1)}reloadLang(t){return this.resetLang(t),this.loadAndCompileTranslations(t)}resetLang(t){delete this._translationRequests[t],this.store.deleteTranslations(t)}static getBrowserLang(){if(typeof window>"u"||!window.navigator)return;let t=this.getBrowserCultureLang();return t?t.split(/[-_]/)[0]:void 0}static getBrowserCultureLang(){if(!(typeof window>"u"||typeof window.navigator>"u"))return window.navigator.languages?window.navigator.languages[0]:window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage}getBrowserLang(){return e.getBrowserLang()}getBrowserCultureLang(){return e.getBrowserCultureLang()}get defaultLang(){return this.getFallbackLang()}get currentLang(){return this.store.getCurrentLang()}get langs(){return this.store.getLanguages()}setDefaultLang(t){return this.setFallbackLang(t)}getDefaultLang(){return this.getFallbackLang()}static \u0275fac=function(i){return new(i||e)};static \u0275prov=P({token:e,factory:e.\u0275fac})}return e})();function go(e){return{provide:pe,useClass:e}}function yo(e){return{provide:me,useClass:e}}function vo(e){return{provide:ge,useClass:e}}function bo(e){return{provide:Oe,useClass:e}}function Ni(e={},n){let t=[];e.loader&&t.push(e.loader),e.compiler&&t.push(e.compiler),e.parser&&t.push(e.parser),e.missingTranslationHandler&&t.push(e.missingTranslationHandler),n&&t.push(Gt),(e.useDefaultLang||e.defaultLanguage)&&(console.warn("The `useDefaultLang` and `defaultLanguage` options are deprecated. Please use `fallbackLang` instead."),e.useDefaultLang===!0&&e.defaultLanguage&&(e.fallbackLang=e.defaultLanguage));let i={fallbackLang:e.fallbackLang??null,lang:e.lang,extend:e.extend??!1};return t.push({provide:Ut,useValue:i}),t.push({provide:Ii,useClass:Ii,deps:[Gt,pe,me,ge,Oe,Ut]}),t}var Pi=(()=>{class e{static forRoot(t={}){return{ngModule:e,providers:[...Ni(J({compiler:yo(co),parser:vo(po),loader:go(uo),missingTranslationHandler:bo(lo)},t),!0)]}}static forChild(t={}){return{ngModule:e,providers:[...Ni(t,t.isolate??!1)]}}static \u0275fac=function(i){return new(i||e)};static \u0275mod=U({type:e});static \u0275inj=B({})}return e})();var Je=class e{constructor(n){this.router=n}title="Eazifly";isAdminRoute(){return this.router.url.startsWith("/admin")}static \u0275fac=function(t){return new(t||e)(Ae(Te))};static \u0275cmp=Q({type:e,selectors:[["app-root"]],decls:2,vars:0,template:function(t,i){t&1&&C(0,"app-navbar")(1,"router-outlet")},dependencies:[dn,_n,An,ln,Pi,je,Fi],styles:["*[_ngcontent-%COMP%]{box-sizing:border-box}"]})};sn(Je,yn).catch(e=>console.error(e));
