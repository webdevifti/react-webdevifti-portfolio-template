(this.webpackJsonpwebdevifti=this.webpackJsonpwebdevifti||[]).push([[0],{20:function(e,t,i){},21:function(e,t,i){},23:function(e,t,i){},24:function(e,t,i){},25:function(e,t,i){},26:function(e,t,i){},27:function(e,t,i){},28:function(e,t,i){},29:function(e,t,i){},30:function(e,t,i){},31:function(e,t,i){},49:function(e,t,i){"use strict";i.r(t);var s=i(1),c=i.n(s),a=i(13),n=i.n(a),r=(i(20),i(2)),l=i(3),j=i(5),o=i(4),d=i.p+"static/media/me2.cfd0e634.png",m=(i(21),i(0)),b=function(){return Object(m.jsx)("div",{className:"skill-progress",children:[{id:1,skillName:"HTML",skillPercentage:"95%"},{id:2,skillName:"CSS",skillPercentage:"92%"},{id:3,skillName:"Javascript",skillPercentage:"85%"},{id:4,skillName:"React JS",skillPercentage:"70%"},{id:5,skillName:"PHP",skillPercentage:"78%"},{id:6,skillName:"Wordpress",skillPercentage:"70%"}].map((function(e){return Object(m.jsxs)("div",{className:"",children:[Object(m.jsxs)("label",{htmlFor:"",children:[e.skillName," ( ",e.skillPercentage," )"]}),Object(m.jsx)("div",{className:"skill",children:Object(m.jsx)("span",{style:{width:"".concat(e.skillPercentage)}})})]},e.id)}))})},h=i(6),u=function(){return Object(m.jsx)("div",{className:"about-contact-info",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"info",children:[Object(m.jsxs)("div",{className:"col-1",children:[Object(m.jsx)("span",{children:Object(m.jsx)(h.h,{})}),Object(m.jsxs)("div",{className:"inner",children:[Object(m.jsx)("h3",{children:"Phone Number"}),Object(m.jsx)("p",{children:"+880 19339 999 657"}),Object(m.jsx)("p",{children:"+880 19022 222 047"})]})]}),Object(m.jsxs)("div",{className:"col-1",children:[Object(m.jsx)("span",{children:Object(m.jsx)(h.g,{})}),Object(m.jsxs)("div",{className:"inner",children:[Object(m.jsx)("h3",{children:"Address"}),Object(m.jsx)("address",{children:"1/203 Dhaka Road, Mymensingh, 2200"})]})]}),Object(m.jsxs)("div",{className:"col-1",children:[Object(m.jsx)("span",{children:Object(m.jsx)(h.e,{})}),Object(m.jsxs)("div",{className:"inner",children:[Object(m.jsx)("h3",{children:"Email Address"}),Object(m.jsx)("a",{href:"mailto:webdevifti@gmail.com",children:"webdevifti@gmail.com"}),Object(m.jsx)("a",{href:"mailto:01iftekharalam@gmail.com",children:"01iftekharalam@gmail.com"})]})]})]})})})},p=function(e){Object(j.a)(i,e);var t=Object(o.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(m.jsxs)("section",{id:"about",className:"about-section",children:[Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"about-content",children:[Object(m.jsxs)("div",{className:"left-content",children:[Object(m.jsx)("h1",{children:"Eftekhar Alam"}),Object(m.jsx)("span",{children:"Web Developer"}),Object(m.jsx)("p",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ipsa dignissimos saepe. Obcaecati odit voluptatum debitis ratione unde sunt quia?"}),Object(m.jsx)("p",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ipsa dignissimos saepe. Obcaecati odit voluptatum debitis ratione unde sunt quia?"})]}),Object(m.jsx)("div",{className:"middle-content",children:Object(m.jsx)("img",{src:d,alt:""})}),Object(m.jsx)("div",{className:"right-content",children:Object(m.jsx)(b,{})})]})}),Object(m.jsx)(u,{})]})}}]),i}(s.Component),O=(i(23),function(){return Object(m.jsx)("section",{id:"banner",className:"section-banner",children:Object(m.jsx)("div",{className:"banner-wrapper",children:Object(m.jsxs)("div",{className:"banner-content",children:[Object(m.jsx)("h3",{children:"Hello, I am"}),Object(m.jsx)("h1",{children:"webdevifti"}),Object(m.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, ipsa?"}),Object(m.jsx)("button",{type:"button",className:"btn btn-download-cv",children:"Download CV"})]})})})}),x=function(e){Object(j.a)(i,e);var t=Object(o.a)(i);function i(e){var s;return Object(r.a)(this,i),(s=t.call(this,e)).nameHandler=function(e){s.setState({name:e.target.value})},s.phoneHandler=function(e){s.setState({phone:e.target.value})},s.emailHandler=function(e){s.setState({email:e.target.value})},s.messageHandler=function(e){s.setState({message:e.target.value})},s.formHandler=function(e){e.preventDefault(),s.setState({isSend:!0,name:"",phone:"",email:"",message:""})},s.state={name:"",phone:"",email:"",message:"",isSend:!1},s}return Object(l.a)(i,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"contact-form",children:[Object(m.jsx)("h3",{style:{color:"green",fontSize:"20px"},children:this.state.isSend?"Your Message has been send successfully.":""}),Object(m.jsxs)("form",{onSubmit:this.formHandler,children:[Object(m.jsxs)("div",{className:"form-row",children:[Object(m.jsx)("div",{className:"form-control",children:Object(m.jsx)("input",{type:"text",className:"input-field",value:this.state.name,placeholder:"Name",onChange:this.nameHandler,required:!0})}),Object(m.jsx)("div",{className:"form-control",children:Object(m.jsx)("input",{type:"text",className:"input-field",value:this.state.phone,placeholder:"Phone",onChange:this.phoneHandler,required:!0})}),Object(m.jsx)("div",{className:"form-control",children:Object(m.jsx)("input",{type:"email",className:"input-field",value:this.state.email,placeholder:"Email",onChange:this.emailHandler,required:!0})})]}),Object(m.jsx)("div",{className:"form-control",children:Object(m.jsx)("textarea",{placeholder:"Message",value:this.state.message,onChange:this.messageHandler})}),Object(m.jsx)("div",{className:"submit-area",children:Object(m.jsx)("button",{type:"submit",className:"btn btn-submit",children:this.state.isSend?"Sended":"Send Message"})})]})]})}}]),i}(s.Component),g=(i(24),function(e){Object(j.a)(i,e);var t=Object(o.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(m.jsx)("section",{id:"contact",className:"contact-section",children:Object(m.jsx)("div",{className:"contact-main-wrap",children:Object(m.jsxs)("div",{className:"contact-wrap",children:[Object(m.jsxs)("div",{className:"section-header",children:[Object(m.jsx)("h1",{className:"section-title contact-section-title",children:"Contact"}),Object(m.jsx)("p",{className:"section-short-description contact-section-short-description",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, enim."})]}),Object(m.jsx)(x,{})]})})})}}]),i}(s.Component)),v=(i(25),function(){return Object(m.jsxs)("div",{className:"experience-items",children:[Object(m.jsx)("div",{className:"experience-item left",children:Object(m.jsxs)("div",{className:"experience",children:[Object(m.jsxs)("div",{className:"experience-metadata",children:[Object(m.jsx)("h3",{children:"Personal Adviser"}),Object(m.jsx)("p",{children:"2018-2019"})]}),Object(m.jsx)("div",{className:"experience-desc",children:Object(m.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia hic cum sequi nostrum odit eaque facere quam at nam quaerat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia hic cum sequi nostrum odit eaque facere quam at nam quaerat."})})]})}),Object(m.jsx)("div",{className:"experience-item right",children:Object(m.jsxs)("div",{className:"experience",children:[Object(m.jsx)("div",{className:"experience-desc",children:Object(m.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia hic cum sequi nostrum odit eaque facere quam at nam quaerat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia hic cum sequi nostrum odit eaque facere quam at nam quaerat."})}),Object(m.jsxs)("div",{className:"experience-metadata",children:[Object(m.jsx)("h3",{children:"Personal Adviser"}),Object(m.jsx)("p",{children:"2018-2019"})]})]})}),Object(m.jsx)("div",{className:"experience-item left",children:Object(m.jsxs)("div",{className:"experience",children:[Object(m.jsxs)("div",{className:"experience-metadata",children:[Object(m.jsx)("h3",{children:"Personal Adviser"}),Object(m.jsx)("p",{children:"2018-2019"})]}),Object(m.jsx)("div",{className:"experience-desc",children:Object(m.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia hic cum sequi nostrum odit eaque facere quam at nam quaerat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia hic cum sequi nostrum odit eaque facere quam at nam quaerat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto error libero quas voluptate quod distinctio veniam, eveniet aperiam temporibus quo? "})})]})})]})}),f=function(e){Object(j.a)(i,e);var t=Object(o.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(m.jsx)("section",{id:"experience",className:"section-experience",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"section-header",children:[Object(m.jsx)("h1",{className:"section-title experience-section-title",children:"My Experiences"}),Object(m.jsx)("p",{className:"section-short-description experience-section-short-description",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, enim."})]}),Object(m.jsx)(v,{})]})})}}]),i}(s.Component),N=function(){return Object(m.jsx)("div",{className:"blog-content-section",children:[{id:1,category:"wordpress",slug:"wordpress",title:"Wordpress making life more easy for web publisher",excerpt:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere officia libero, pariatur quaerat inventore ipsa velit impedit saepe atque architecto.",thumbnail:"https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/192070916/original/2b7cfe23990b9c8cb76dace615dc6170425565ec/youtube-thumbnail-background-design-with-editable-text-free-vector.jpg"},{id:2,category:"react",slug:"react",title:"Wordpress making life more easy for web publisher",excerpt:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere officia libero, pariatur quaerat inventore ipsa velit impedit saepe atque architecto.",thumbnail:"https://t4.ftcdn.net/jpg/03/90/34/35/360_F_390343554_mFXTy9eDIB85bnyfC40J6bFar6KRRcb4.jpg"},{id:3,category:"wordpress",slug:"php",title:"Wordpress making life more easy for web publisher",excerpt:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere officia libero, pariatur quaerat inventore ipsa velit impedit saepe atque architecto.",thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfAYMIpgbNqLFSRN0T8QBlrRegfr8DyjkJLQ&usqp=CAU"}].map((function(e){return Object(m.jsxs)("div",{className:"blog-card",children:[Object(m.jsx)("div",{className:"blog-thumbnail-image",children:Object(m.jsx)("img",{src:e.thumbnail,alt:""})}),Object(m.jsx)("div",{className:"blog-category",children:Object(m.jsx)("p",{children:e.category})}),Object(m.jsx)("div",{className:"blog-title",children:Object(m.jsx)("h3",{children:e.title})}),Object(m.jsx)("div",{className:"blog-excerpt",children:Object(m.jsx)("p",{children:e.excerpt})}),Object(m.jsx)("div",{className:"readmore-area",children:Object(m.jsx)("a",{href:"/blog/",className:"btn btn-read-more",children:"Read More"})})]},e.id)}))})},q=(i(26),function(e){Object(j.a)(i,e);var t=Object(o.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(m.jsx)("section",{id:"blog",className:"blog-section",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"section-header",children:[Object(m.jsx)("h1",{className:"section-title blog-section-title",children:"Blog"}),Object(m.jsx)("p",{className:"section-short-description blog-section-short-description",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, enim."})]}),Object(m.jsx)(N,{})]})})}}]),i}(s.Component)),y=i(15),w=(i(27),function(){var e=Object(s.useState)(!1),t=Object(y.a)(e,2),i=t[0],c=t[1];return window.addEventListener("scroll",(function(){var e=document.documentElement.scrollTop;e>500?c(!0):e<=500&&c(!1)})),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("footer",{className:"footer-section",children:[Object(m.jsx)("p",{children:"copyright 2021 by webdevifti. All right reserved."}),Object(m.jsx)("a",{href:"#banner",className:i?"btn-back-to-top":"",children:Object(m.jsx)(h.d,{})})]})})}),k=(i(28),function(e){Object(j.a)(i,e);var t=Object(o.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(m.jsx)("header",{children:Object(m.jsx)("nav",{children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"",children:"Home"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#about",children:"About"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#services",children:"My Services"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#portfolio",children:"Portfolio"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#experience",children:"Experiences"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#testimonial",children:"Testimonial"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#blog",children:"Blog"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"#contact",children:"Contact"})})]})})})}}]),i}(c.a.Component)),S=k,P=i.p+"static/media/1.612ad7c9.jpg",C=i.p+"static/media/2.f9511e9e.jpg",L=i.p+"static/media/3.123d5221.jpg",A=i.p+"static/media/4.07b75ceb.jpg",T=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"single-item",children:Object(m.jsxs)("a",{href:"#",className:"p-image",children:[Object(m.jsx)("img",{src:P,alt:""}),Object(m.jsx)("h3",{children:"Portfolio title"})]})}),Object(m.jsx)("div",{className:"single-item",children:Object(m.jsxs)("a",{href:"#",className:"p-image",children:[Object(m.jsx)("img",{src:C,alt:""}),Object(m.jsx)("h3",{children:"Portfolio title"})]})}),Object(m.jsx)("div",{className:"single-item",children:Object(m.jsxs)("a",{href:"#",className:"p-image",children:[Object(m.jsx)("img",{src:L,alt:""}),Object(m.jsx)("h3",{children:"Portfolio title"})]})}),Object(m.jsx)("div",{className:"single-item",children:Object(m.jsxs)("a",{href:"#",className:"p-image",children:[Object(m.jsx)("img",{src:A,alt:""}),Object(m.jsx)("h3",{children:"Portfolio title"})]})}),Object(m.jsx)("div",{className:"single-item",children:Object(m.jsxs)("a",{href:"#",className:"p-image",children:[Object(m.jsx)("img",{src:A,alt:""}),Object(m.jsx)("h3",{children:"Portfolio title"})]})}),Object(m.jsx)("div",{className:"single-item",children:Object(m.jsxs)("a",{href:"#",className:"p-image",children:[Object(m.jsx)("img",{src:A,alt:""}),Object(m.jsx)("h3",{children:"Portfolio title"})]})}),Object(m.jsx)("div",{className:"single-item",children:Object(m.jsxs)("a",{href:"#",className:"p-image",children:[Object(m.jsx)("img",{src:A,alt:""}),Object(m.jsx)("h3",{children:"Portfolio title"})]})}),Object(m.jsx)("div",{className:"single-item",children:Object(m.jsxs)("a",{href:"#",className:"p-image",children:[Object(m.jsx)("img",{src:A,alt:""}),Object(m.jsx)("h3",{children:"Portfolio title"})]})}),Object(m.jsx)("div",{className:"single-item",children:Object(m.jsxs)("a",{href:"#",className:"p-image",children:[Object(m.jsx)("img",{src:A,alt:""}),Object(m.jsx)("h3",{children:"Portfolio title"})]})}),Object(m.jsx)("div",{className:"single-item",children:Object(m.jsxs)("a",{href:"#",className:"p-image",children:[Object(m.jsx)("img",{src:A,alt:""}),Object(m.jsx)("h3",{children:"Portfolio title"})]})})]})},H=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"single-item",children:Object(m.jsxs)("a",{href:"#",className:"p-image",children:[Object(m.jsx)("img",{src:P,alt:""}),Object(m.jsx)("h3",{children:"HtmlConversion Items"})]})}),Object(m.jsx)("div",{className:"single-item",children:Object(m.jsxs)("a",{href:"#",className:"p-image",children:[Object(m.jsx)("img",{src:C,alt:""}),Object(m.jsx)("h3",{children:"HtmlConversion Items"})]})}),Object(m.jsx)("div",{className:"single-item",children:Object(m.jsxs)("a",{href:"#",className:"p-image",children:[Object(m.jsx)("img",{src:L,alt:""}),Object(m.jsx)("h3",{children:"HtmlConversion Items"})]})}),Object(m.jsx)("div",{className:"single-item",children:Object(m.jsxs)("a",{href:"#",className:"p-image",children:[Object(m.jsx)("img",{src:A,alt:""}),Object(m.jsx)("h3",{children:"HtmlConversion Items"})]})})]})},I=i.p+"static/media/10.2facef17.jpg",M=i.p+"static/media/11.82d70003.jpg",F=i.p+"static/media/12.b32a9f1f.png",E=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"single-item",children:Object(m.jsxs)("a",{href:"#",className:"p-image",children:[Object(m.jsx)("img",{src:I,alt:""}),Object(m.jsx)("h3",{children:"Php Items"})]})}),Object(m.jsx)("div",{className:"single-item",children:Object(m.jsxs)("a",{href:"#",className:"p-image",children:[Object(m.jsx)("img",{src:M,alt:""}),Object(m.jsx)("h3",{children:"Php Items"})]})}),Object(m.jsx)("div",{className:"single-item",children:Object(m.jsxs)("a",{href:"#",className:"p-image",children:[Object(m.jsx)("img",{src:F,alt:""}),Object(m.jsx)("h3",{children:"Php Items"})]})})]})},D=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"single-item",children:Object(m.jsxs)("a",{href:"#",className:"p-image",children:[Object(m.jsx)("img",{src:P,alt:""}),Object(m.jsx)("h3",{children:"React js Items"})]})}),Object(m.jsx)("div",{className:"single-item",children:Object(m.jsxs)("a",{href:"#",className:"p-image",children:[Object(m.jsx)("img",{src:C,alt:""}),Object(m.jsx)("h3",{children:"React js Items"})]})}),Object(m.jsx)("div",{className:"single-item",children:Object(m.jsxs)("a",{href:"#",className:"p-image",children:[Object(m.jsx)("img",{src:L,alt:""}),Object(m.jsx)("h3",{children:"React js Items"})]})}),Object(m.jsx)("div",{className:"single-item",children:Object(m.jsxs)("a",{href:"#",className:"p-image",children:[Object(m.jsx)("img",{src:A,alt:""}),Object(m.jsx)("h3",{children:"React js Items"})]})}),Object(m.jsx)("div",{className:"single-item",children:Object(m.jsxs)("a",{href:"#",className:"p-image",children:[Object(m.jsx)("img",{src:A,alt:""}),Object(m.jsx)("h3",{children:"React js Items"})]})})]})},R=i.p+"static/media/5.35084f22.jpg",B=i.p+"static/media/7.0d50303b.jpg",W=i.p+"static/media/9.b231995f.png",J=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"single-item",children:Object(m.jsxs)("a",{href:"#",className:"p-image",children:[Object(m.jsx)("img",{src:R,alt:""}),Object(m.jsx)("h3",{children:"Wordpress Items"})]})}),Object(m.jsx)("div",{className:"single-item",children:Object(m.jsxs)("a",{href:"#",className:"p-image",children:[Object(m.jsx)("img",{src:B,alt:""}),Object(m.jsx)("h3",{children:"Wordpress Items"})]})}),Object(m.jsx)("div",{className:"single-item",children:Object(m.jsxs)("a",{href:"#",className:"p-image",children:[Object(m.jsx)("img",{src:W,alt:""}),Object(m.jsx)("h3",{children:"Wordpress Items"})]})})]})},G=(i(29),function(e){Object(j.a)(i,e);var t=Object(o.a)(i);function i(e){var s;return Object(r.a)(this,i),(s=t.call(this,e)).handleAllTab=function(){s.setState({tab:"all",tabAll:!0,tabhtmlconversion:!1,tabreactjs:!1,tabwp:!1,tabphp:!1})},s.handleHtmlConversionTab=function(){s.setState({tab:"htmlconversion",tabhtmlconversion:!0,tabAll:!1,tabreactjs:!1,tabwp:!1,tabphp:!1})},s.handleReactjsTab=function(){s.setState({tab:"reactjs",tabhtmlconversion:!1,tabAll:!1,tabreactjs:!0,tabwp:!1,tabphp:!1})},s.handleWpTab=function(){s.setState({tab:"wp",isActive:!0,tabAll:!1,tabhtmlconversion:!1,tabreactjs:!1,tabwp:!0,tabphp:!1})},s.handlePhpTab=function(){s.setState({tab:"php",tabAll:!1,tabhtmlconversion:!1,tabreactjs:!1,tabwp:!1,tabphp:!0})},s.state={tab:"all",tabAll:!0,tabhtmlconversion:!1,tabreactjs:!1,tabwp:!1,tabphp:!1},s}return Object(l.a)(i,[{key:"render",value:function(){return Object(m.jsx)("section",{id:"portfolio",className:"portfolio-section",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"section-header",children:[Object(m.jsx)("h1",{className:"section-title portfolio-section-title",children:"Portfolio"}),Object(m.jsx)("p",{className:"section-short-description portfolio-section-short-description",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, enim."})]}),Object(m.jsxs)("div",{className:"myportfolioes",children:[Object(m.jsxs)("div",{className:"portfolio-list-name",children:[Object(m.jsx)("button",{onClick:this.handleAllTab,className:this.state.tabAll?"active":"",children:"All"}),Object(m.jsx)("button",{onClick:this.handleHtmlConversionTab,className:this.state.tabhtmlconversion?"active":"",children:"HTML Conversion"}),Object(m.jsx)("button",{onClick:this.handleReactjsTab,className:this.state.tabreactjs?"active":"",children:"React JS"}),Object(m.jsx)("button",{onClick:this.handleWpTab,className:this.state.tabwp?"active":"",children:"Wordpress"}),Object(m.jsx)("button",{onClick:this.handlePhpTab,className:this.state.tabphp?"active":"",children:"PHP / Laravel"})]}),Object(m.jsxs)("div",{className:"portfolio-items",children:["all"===this.state.tab?Object(m.jsx)(T,{}):"","htmlconversion"===this.state.tab?Object(m.jsx)(H,{}):"","reactjs"===this.state.tab?Object(m.jsx)(D,{}):"","wp"===this.state.tab?Object(m.jsx)(J,{}):"","php"===this.state.tab?Object(m.jsx)(E,{}):""]})]})]})})}}]),i}(s.Component)),_=(i(30),function(){var e=[{id:1,icon:Object(m.jsx)(h.e,{}),title:"Best Service",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt explicabo quia nemo nostrum aspernatur id repellat! Delectus quaerat aliquid cum."},{id:2,icon:Object(m.jsx)(h.h,{}),title:"Best Service",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt explicabo quia nemo nostrum aspernatur id repellat! Delectus quaerat aliquid cum."},{id:3,icon:Object(m.jsx)(h.f,{}),title:"Best Service",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt explicabo quia nemo nostrum aspernatur id repellat! Delectus quaerat aliquid cum."},{id:4,icon:Object(m.jsx)(h.a,{}),title:"Best Service",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt explicabo quia nemo nostrum aspernatur id repellat! Delectus quaerat aliquid cum."},{id:5,icon:Object(m.jsx)(h.b,{}),title:"Best Service",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt explicabo quia nemo nostrum aspernatur id repellat! Delectus quaerat aliquid cum."},{id:6,icon:Object(m.jsx)(h.c,{}),title:"Best Service",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt explicabo quia nemo nostrum aspernatur id repellat! Delectus quaerat aliquid cum."}];return Object(m.jsx)("div",{className:"services-wrapper",children:e.map((function(e){return Object(m.jsxs)("div",{className:"service-card",children:[Object(m.jsx)("span",{children:e.icon}),Object(m.jsx)("h1",{children:e.title}),Object(m.jsx)("p",{children:e.desc})]},e.id)}))})}),U=function(){return Object(m.jsx)("section",{id:"services",className:"services-section",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"section-header",children:[Object(m.jsx)("h1",{className:"section-title service-section-title",children:"My Services"}),Object(m.jsx)("p",{className:"section-short-description service-section-short-description",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, enim."})]}),Object(m.jsx)(_,{})]})})},Q=(i(31),i(10)),X=i(14),z=i.n(X),K=(i(47),i(48),function(){return Object(m.jsx)(z.a,Object(Q.a)(Object(Q.a)({},{autoplay:!0,speed:15,autoplaySpeed:4e3,infinite:!0,slidesToShow:1,slidesToScroll:1}),{},{children:[{id:1,review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis provident, a nihil cumque veritatis vero officia blanditiis dolore? Mollitia corrupti magni, incidunt magnam iusto atque iste eaque dolores vel quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam facere commodi.",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcC7tEjV_h-nyGUPrLvGkpsEAEdj5wMpb7Sw&usqp=CAU",name:"Jon Brown",desgnation:"Graphic Designer"},{id:2,review:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST73FQnX9PEZS8Xmyyt2jKlXeoDkHzpIiQww&usqp=CAU",name:"David Warner",desgnation:"Cricket Player"}].map((function(e){return Object(m.jsxs)("div",{className:"testimonial-items",children:[Object(m.jsx)("img",{src:e.img,className:"client-image",alt:""}),Object(m.jsx)("p",{className:"client-review",children:e.review}),Object(m.jsxs)("div",{className:"meta-data",children:[Object(m.jsx)("h3",{className:"client-name",children:e.name}),Object(m.jsx)("h4",{className:"client-designation",children:e.desgnation})]})]},e.id)}))}))}),V=function(e){Object(j.a)(i,e);var t=Object(o.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(m.jsx)("section",{id:"testimonial",className:"testimonial-section",children:Object(m.jsx)("div",{className:"testimonial-wrapper",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"section-header",children:[Object(m.jsx)("h1",{className:"section-title testimonial-section-title",children:"Testimonials"}),Object(m.jsx)("p",{className:"section-short-description testimonial-section-short-description",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, enim."})]}),Object(m.jsx)(K,{})]})})})}}]),i}(s.Component);var Y=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(S,{}),Object(m.jsx)(O,{}),Object(m.jsx)(p,{}),Object(m.jsx)(U,{}),Object(m.jsx)(G,{}),Object(m.jsx)(f,{}),Object(m.jsx)(V,{}),Object(m.jsx)(q,{}),Object(m.jsx)(g,{}),Object(m.jsx)(w,{})]})},Z=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,50)).then((function(t){var i=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,n=t.getTTFB;i(e),s(e),c(e),a(e),n(e)}))};n.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(Y,{})}),document.getElementById("root")),Z()}},[[49,1,2]]]);
//# sourceMappingURL=main.d808e39a.chunk.js.map