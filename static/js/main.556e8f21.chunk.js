(this.webpackJsonpcovid_19_app=this.webpackJsonpcovid_19_app||[]).push([[0],{24:function(e,t,a){e.exports=a(50)},50:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(21),c=a.n(r),o=a(9),s=a(54),u=a(52),m=a(53),i=(a(29),a(8)),E=a.n(i),d=a(23);var x=function(){var e=Object(l.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(l.useState)([]),i=Object(o.a)(c,2),x=i[0],p=i[1],h=Object(l.useState)(""),g=Object(o.a)(h,2),y=g[0],b=g[1];Object(l.useEffect)((function(){E.a.all([E.a.get("https://corona.lmao.ninja/v2/all"),E.a.get("https://corona.lmao.ninja/v2/countries?sort=country")]).then((function(e){r(e[0].data),p(e[1].data)})).catch((function(e){console.log(e)}))}),[]);var v=new Date(parseInt(a.updated)).toString(),f=x.filter((function(e){return""!==y?e.country.includes(y):e})).map((function(e,t){var a=e.country,l=e.cases,r=e.recovered,c=e.todayCases,o=e.todayDeaths,u=e.active,m=e.critical;return n.a.createElement(s.a,{bg:"dark",text:"white",key:t,className:"text-center",style:{margin:"10px"}},n.a.createElement(s.a.Img,{variant:"top",src:e.countryInfo.flag,width:"300px",height:"167px"}),n.a.createElement(s.a.Body,null,n.a.createElement(s.a.Title,null,a," "),n.a.createElement(s.a.Text,null,"Cases: ",l),n.a.createElement(s.a.Text,null,"Recovered: ",r),n.a.createElement(s.a.Text,null,"Today's Cases: ",c),n.a.createElement(s.a.Text,null,"Today's Deaths: ",o),n.a.createElement(s.a.Text,null,"Active Cases: ",u),n.a.createElement(s.a.Text,null,"Critical Cases: ",m)))}));return n.a.createElement("div",{className:"container"},n.a.createElement("br",null),n.a.createElement("h2",{style:{textAlign:"center",color:"white"}},"COVID-19 Live Updates",n.a.createElement("br",null)," ",n.a.createElement("br",null),"Global Stats"),n.a.createElement(u.a,null,n.a.createElement(s.a,{style:{margin:"10px"},border:"dark",className:"text-center",bg:"info",text:"white"},n.a.createElement(s.a.Body,null,n.a.createElement(s.a.Title,null,"Cases"),n.a.createElement(s.a.Text,null,a.cases)),n.a.createElement(s.a.Footer,null,n.a.createElement("small",null,v))),n.a.createElement(s.a,{style:{margin:"10px"},border:"dark",className:"text-center",bg:"danger",text:"white"},n.a.createElement(s.a.Body,null,n.a.createElement(s.a.Title,null,"Deaths"),n.a.createElement(s.a.Text,null,a.deaths)),n.a.createElement(s.a.Footer,null,n.a.createElement("small",null,v))),n.a.createElement(s.a,{style:{margin:"10px"},border:"dark",className:"text-center",bg:"success",text:"white"},n.a.createElement(s.a.Body,null,n.a.createElement(s.a.Title,null,"Recovered"),n.a.createElement(s.a.Text,null,a.recovered)),n.a.createElement(s.a.Footer,null,n.a.createElement("small",null,v)))),n.a.createElement(m.a,null,n.a.createElement(m.a.Group,{controlId:"formGroupEmail"},n.a.createElement(m.a.Control,{onChange:function(e){return b(e.target.value)},style:{width:"50%",textAlign:"center",margin:"0 auto",alignItems:"center"},type:"text",placeholder:"Search For a Country"}))),n.a.createElement(d.a,{style:{textAlign:"center",margin:"0 auto"},queries:[{columns:1,query:"min-width : 500px"},{columns:3,query:"min-width: 1000px"}]},f))};c.a.render(n.a.createElement("div",null,n.a.createElement(x,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.556e8f21.chunk.js.map