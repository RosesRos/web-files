!(function(){'use_strict';(rootFaq={initial:function(){const html_faq=`<style>.flag{background: 98% 20px no-repeat #fff}.main-content{padding: 10px;background-color: #fff;-webkit-border-radius: 10px;-moz-border-radius: 10px;border-radius: 10px}.main__text{font-family: Bogle, Helvetica Neue, Helvetica, Arial, sans-serif !important;font-size: 0.875rem !important;color: #46474a !important;font-weight: 400 !important;line-height: 1.25 !important}p.question{font-size: 15px}.main-content p{line-height: 18px;margin: 10px 0}.survey_button, .survey_button2, .name, .profile{cursor: pointer}.survey_button, .survey_button2, .loading{text-align: center}.survey_button, .main-content{padding: 10px;-webkit-border-radius: 10px;-moz-border-radius: 10px;border-radius: 10px}.survey_button{border: 2px solid #f0f0f0;color: #fff;padding: 5px 0;margin: 5px 0;box-shadow: 0 1px 4px 0 rgba(0,0,0,.74)}.survey_button{background-color: rgb(0, 86, 120)}.survey_button{border: 0 !important;border-radius: 30px;box-shadow: none !important;padding: 15px 0 !important;font-size: 1rem;font-weight: 700;color: #fff;font-family: Bogle, Helvetica Neue, Helvetica, Arial, sans-serif;line-height: 1.15}#q2, #q3, #q4, #q5, #result1, #result2, #result3{display: none}.opacy_0{animation: opacy 3s ease}.opacy_1{animation: showOpacy 3s ease}@keyframes opacy{from{opacity: 1}to{opacity: 0}}@keyframes showOpacy{from{opacity: 0}to{opacity: 1}}</style><div class="main-content flag" id="content1"><div id="q1"><p class="question main__text"><strong>1.</strong>&nbsp;<span>Are you a man or a woman?</span></p><div class="survey_button bq1" data-bq="1">YES</div><div class="survey_button bq1" data-bq="2">NO</div></div><div id="q2"><p class="question main__text"><strong>2.</strong>&nbsp;<span>How old are you?</span></p><div class="survey_button bq2" data-bq="1">18-29</div><div class="survey_button bq2" data-bq="2">30-36</div><div class="survey_button bq2" data-bq="3">40-49</div><div class="survey_button bq2" data-bq="4">50+</div></div><div id="q3"><p class="question main__text"><strong>3.</strong>&nbsp;<span>How many members are there in your family?</span></p><div class="survey_button bq3" data-bq="1">Alone</div><div class="survey_button bq3" data-bq="2">1</div><div class="survey_button bq3" data-bq="3">2</div><div class="survey_button bq3" data-bq="4">3+</div></div><div id="q4"><p class="question main__text"><strong>4.</strong>&nbsp;<span>Have you ever bought LEGO products before?</span></p><div class="survey_button bq4" data-bq="1">YES</div><div class="survey_button bq4" data-bq="2">NO</div></div></div>`;const sectionFaq=document.createElement("section");sectionFaq.innerHTML=html_faq;const att=document.createAttribute("id");att.value="faqBox";sectionFaq.setAttributeNode(att);document.body.appendChild(sectionFaq);const q1=document.getElementById("q1");const q2=document.getElementById("q2");const q3=document.getElementById("q3");const q4=document.getElementById("q4");const bq1=document.querySelectorAll(".bq1");const bq2=document.querySelectorAll(".bq2");const bq3=document.querySelectorAll(".bq3");const bq4=document.querySelectorAll(".bq4");!(function(){'use_strict';(boxRoot={_init:function(){const price="{offer_value:price}";var productImage="./files/product.png";var productName="Shoprider Mobility";var offer="{offer}";const html=`<style>.boxes,.boxes .try img,.boxes cbox{width:100%}.instructions{padding:10px;background-color:#e11e26;border-radius:4px;color:#fff;margin-top:20px}.boxes{margin:10px auto;max-width:800px}.box-o-t{position:absolute;top:-34%}.boxes .discover .box-o-b{z-index:1;position:relative}.boxes .iphone{width:76%;height:auto;position:absolute;z-index:0;top:-20%;left:12%;-webkit-transition-duration:0.7s;transition-duration:0.7s}.boxes .discover > .iphone{top:-60%}.boxes > .try{position:relative;display:inline-block;width:23.8%;-webkit-transition-duration:0.2s;transition-duration:0.2s;cursor:pointer}@media (max-width: 767px){.boxes > .try{width:32.5%}}@media (max-width: 479px){.boxes > .try{width:32%}.modal-dialog{width:95%}}@media (max-width: 319px){.boxes > .try{width:48%}.boxes > .try:nth-child(-n + 5){display:none}}.div_img_gift{width:100%;text-align:center;position:absolute;top:0;left:0;z-index:5;display:none;align-items:center;justify-content:center}.img_gift{display:none;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-name:rotateIn;animation-name:rotateIn;margin:0 auto}@-webkit-keyframes rotateIn{0%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate3d(0, 0, 1, -200deg);transform:rotate3d(0, 0, 1, -200deg);opacity:0}100%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:none;transform:none;opacity:1}}@keyframes rotateIn{0%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate3d(0, 0, 1, -200deg);transform:rotate3d(0, 0, 1, -200deg);opacity:0}100%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:none;transform:none;opacity:1}}@keyframes tapa_superior{0%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate3d(0, 0, 1, -200deg);transform:rotate3d(0, 0, 1, -200deg);opacity:0}100%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:none;transform:none;opacity:1}}.boxes{background-size:cover;border-radius:20px;position:relative;text-align:center}.try{position:relative;margin:20px 0}.try > div{position:absolute}.try .caja{position:relative}.caja_trasera{z-index:1}.caja_tapa{z-index:3}.caja{z-index:2}.caja_gift{z-index:1}.boxes .try.abierta > .caja_tapa{animation:tapa_superior 2s forwards}.boxes .try.premiazo > .caja_gift{animation:tapa_superior_2 4s infinite alternate}@keyframes tapa_superior{from{top:0}to{top:-40px}}@keyframes tapa_superior_2{from{top:10px}to{top:-40px}}@media (max-width: 500px){@keyframes tapa_superior{from{top:0}to{top:-30px}}}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.temblor:hover{animation:temblor 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;transform:translate3d(0, 0, 0);backface-visibility:hidden;perspective:1000px}@keyframes temblor{10%,90%{transform:translate3d(-1px, 0, 0)}20%,80%{transform:translate3d(2px, 0, 0)}30%,50%,70%{transform:translate3d(-4px, 0, 0)}40%,60%{transform:translate3d(4px, 0, 0)}}.fade{transition:opacity 0.15s linear}.modal{background-color:rgb(0 0 0 / 50%);position:fixed;top:0;left:0;z-index:1050;display:none;width:100%;height:100%;overflow:hidden;outline:0}.text-center{text-align:center !important}.modal-dialog{position:relative;width:auto;margin:0.5rem;pointer-events:none}@media (min-width: 576px){.modal-dialog{max-width:500px;margin:1.75rem auto}}.modal.fade .modal-dialog{transition:-webkit-transform 0.3s ease-out;transition:transform 0.3s ease-out;transition:transform 0.3s ease-out, -webkit-transform 0.3s ease-out;-webkit-transform:translate(0, -50px);transform:translate(0, -50px)}.modal.show .modal-dialog{-webkit-transform:none;transform:none}.modal-content{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0, 0, 0, 0.2);border-radius:0.3rem;outline:0}.modal-body{position:relative;-ms-flex:1 1 auto;flex:1 1 auto;padding:1rem}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:0.5rem}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-bottom:0.5rem;font-weight:500;line-height:1.2}.h2,h2{font-size:2rem}p{margin-top:0;margin-bottom:1rem}.btn{display:inline-block;font-weight:400;color:#212529;text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:0.375rem 0.75rem;font-size:1rem;line-height:1.5;border-radius:0.25rem;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.btn-success{color:#fff;background-color:#28a745;border-color:#28a745}.btn-group-lg > .btn,.btn-lg{padding:0.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:0.3rem}[type="button"]:not(:disabled),[type="reset"]:not(:disabled),[type="submit"]:not(:disabled),button:not(:disabled){cursor:pointer}.p_modal h2{color:#575757;font-size:25px;text-align:center;font-weight:600;text-transform:none;position:relative;margin:25px 0;padding:0;display:block}.p_modal p{color:#797979;font-size:15px;text-align:center;font-weight:300;position:relative;text-align:inherit;float:none;margin:10px 0;padding:0;line-height:normal}a{color:#007bff;text-decoration:none;background-color:transparent}.circle-loader{border:1px solid rgba(0, 0, 0, 0.2);border-left-color:#5cb85c;animation:loader-spin 1.2s infinite linear;position:relative;display:inline-block;vertical-align:top;border-radius:50%;width:7em;height:7em}.load-complete{-webkit-animation:none;border-color:#5cb85c;transition:border 0.5s ease-out}@keyframes loader-spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.checkmark{display:none}.checkmark.draw:after{animation-duration:0.8s;animation-timing-function:ease;animation-name:checkmark;transform:scaleX(-1) rotate(135deg)}.checkmark:after{opacity:1;height:3.5em;width:1.75em;transform-origin:left top;border-right:3px solid #5cb85c;border-top:3px solid #5cb85c;content:"";left:1.75em;top:3.5em;position:absolute}@keyframes checkmark{0%{height:0;width:0;opacity:1}20%{height:0;width:1.75em;opacity:1}40%{height:3.5em;width:1.75em;opacity:1}100%{height:3.5em;width:1.75em;opacity:1}}.p_modal img{max-width:100%;max-height:20vh}img.box-04[src="${ productImage }"]{width:20%;margin-bottom:-50%}@media (max-width: 650px){.boxes > .try:nth-child(-n + 4){display:none}img.box-04[src="${ productImage }"]{width:20%;margin-bottom:-40%}}@media (max-width: 479px){.boxes > .try{width:32%}.modal-dialog{width:95%;margin:0.5rem auto}.img_gift{width:100%}}</style><div id=p_body_content><div class=content style=padding:0><div class=main-content id=content3><div class=boxes id=boxes><div class=div_img_gift><img class="box-gift img_gift"src=${ productImage }></div><div class="temblor try"id=0><div class=caja_tapa><img class=box-01 src=files/32.webp></div><div class=caja_trasera><img class=box-03 src=files/33.webp></div><div class=caja_gift><img class=box-04 src=${ productImage }></div><div class=caja><img class=box-02 src=files/35.webp></div></div><div class="temblor try"id=1><div class=caja_tapa><img class=box-01 src=files/32.webp></div><div class=caja_trasera><img class=box-03 src=files/33.webp></div><div class=caja_gift><img class=box-04 src=${ productImage }></div><div class=caja><img class=box-02 src=files/35.webp></div></div><div class="temblor try"id=2><div class=caja_tapa><img class=box-01 src=files/32.webp></div><div class=caja_trasera><img class=box-03 src=files/33.webp></div><div class=caja_gift><img class=box-04 src=${ productImage }></div><div class=caja><img class=box-02 src=files/35.webp></div></div><div class="temblor try"id=3><div class=caja_tapa><img class=box-01 src=files/32.webp></div><div class=caja_trasera><img class=box-03 src=files/33.webp></div><div class=caja_gift><img class=box-04 src=${ productImage }></div><div class=caja><img class=box-02 src=files/35.webp></div></div><div class="temblor try"id=4><div class=caja_tapa><img class=box-01 src=files/32.webp></div><div class=caja_trasera><img class=box-03 src=files/33.webp></div><div class=caja_gift><img class=box-04 src=${ productImage }></div><div class=caja><img class=box-02 src=files/35.webp></div></div><div class="temblor try"id=5><div class=caja_tapa><img class=box-01 src=files/32.webp></div><div class=caja_trasera><img class=box-03 src=files/33.webp></div><div class=caja_gift><img class=box-04 src=${ productImage }></div><div class=caja><img class=box-02 src=files/35.webp></div></div><div class="temblor try"id=6><div class=caja_tapa><img class=box-01 src=files/32.webp></div><div class=caja_trasera><img class=box-03 src=files/33.webp></div><div class=caja_gift><img class=box-04 src=${ productImage }></div><div class=caja><img class=box-02 src=files/35.webp></div></div><div class="temblor try"id=7><div class=caja_tapa><img class=box-01 src=files/32.webp></div><div class=caja_trasera><img class=box-03 src=files/33.webp></div><div class=caja_gift><img class=box-04 src=${ productImage }></div><div class=caja><img class=box-02 src=files/35.webp></div></div><div class="temblor try"id=8><div class=caja_tapa><img class=box-01 src=files/32.webp></div><div class=caja_trasera><img class=box-03 src=files/33.webp></div><div class=caja_gift><img class=box-04 src=${ productImage }></div><div class=caja><img class=box-02 src=files/35.webp></div></div><div class="temblor try"id=9><div class=caja_tapa><img class=box-01 src=files/32.webp></div><div class=caja_trasera><img class=box-03 src=files/33.webp></div><div class=caja_gift><img class=box-04 src=${ productImage }></div><div class=caja><img class=box-02 src=files/35.webp></div></div><div class="temblor try"id=10><div class=caja_tapa><img class=box-01 src=files/32.webp></div><div class=caja_trasera><img class=box-03 src=files/33.webp></div><div class=caja_gift><img class=box-04 src=${ productImage }></div><div class=caja><img class=box-02 src=files/35.webp></div></div><div class="temblor try"id=11><div class=caja_tapa><img class=box-01 src=files/32.webp></div><div class=caja_trasera><img class=box-03 src=files/33.webp></div><div class=caja_gift><img class=box-04 src=${ productImage }></div><div class=caja><img class=box-02 src=files/35.webp></div></div></div><div class="fade modal p_modal text-center"id=p_modal1 aria-hidden=true role=dialog tabindex=-1><div class=modal-dialog role=document><div class=modal-content><div class=modal-body><img class="box-00 temblor_inf"src=files/31.webp><h2>Congratulations, we have successfully validated your answers.</h2><p><strong><span class=p_var-dia_nombre>Friday</span>, <span class=p_var-dia>12</span>  <span class=p_var-mes_nombre>January</span>  <span class=p_var-anyo>2024</span>  <span class=p_var-hora_fija>12:33</span></strong><br>You have the chance to win one of our prizes.<br>Try your luck!</p><button class="btn btn-lg btn-success"id=p_modal_button1 style=background-color:#ed9220;border-color:#ed9220 type=button>OK</button></div></div></div></div><div class="fade modal p_modal text-center"id=p_modal2 aria-hidden=true role=dialog tabindex=-1><div class=modal-dialog role=document><div class=modal-content><div class=modal-body><div class=circle-loader><div class="checkmark draw"></div></div><h2>OHHH…</h2><p>You have an extra turn!</p><button class="btn btn-lg btn-success"id=p_modal_button2 style=background-color:#ed9220;border-color:#ed9220 type=button>OK</button></div></div></div></div><div class="fade modal p_modal text-center"id=p_modal3 aria-hidden=true role=dialog tabindex=-1><div class=modal-dialog role=document><div class=modal-content><div class=modal-body><img class=box-gift src=${ productImage }><h2>You did it!</h2><p>Congratulations! You won the ${ productName } Scooter!<p>***THE RULES***<p>1. You will be directed to the website of our certified distributors.<p>2. Enter your address and pay ${ price } for shipping to get a ${ productName } Scooter.<p>3. ${ productName } Scooter will be delivered within 5-7 days</p><a class="btn btn-lg btn-success"href="${ offer }"id=p_modal_button3 style=background-color:#ed9220;border-color:#ed9220;color:#fff>OK</a></div></div></div></div></div></div></div>`;const section=document.createElement("section");;section.innerHTML=html;document.body.appendChild(section);const tryBox=document.querySelectorAll(".try");let p_modal_button2=document.getElementById("p_modal_button2");let isFirstButtonClick=true;!(function(){'use_strict';(rootBox={_ini:function(){function toggleModal(index){if(isFirstButtonClick){tryBox[index].classList.add("abierta");setTimeout(()=>{document.getElementById("p_modal2").style.display="block";document.getElementById("p_modal2").classList.add("show");setTimeout(()=>{document.querySelector(".circle-loader").classList.add("load-complete");document.querySelector(".checkmark").style.display="block"},2e3)},2e3)}else{document.getElementById("p_modal2").style.display="none";document.getElementById("p_modal2").classList.remove("show");tryBox[index].classList.add("abierta");tryBox[index].classList.add("premiazo");setTimeout(()=>{document.querySelector(".div_img_gift").style.display="block";document.querySelector(".img_gift").style.display="inline"},2e3);setTimeout(()=>{document.getElementById("p_modal3").style.display="block";document.getElementById("p_modal3").classList.add("show")},3e3)};isFirstButtonClick=!isFirstButtonClick};function intentoUno(){tryBox.forEach((ele,index)=>{ele.addEventListener("click",function(){toggleModal(index)})})}intentoUno();function firstModal(){p_modal_button2.addEventListener("click",function(){document.getElementById("p_modal2").style.display="none";document.getElementById("p_modal2").classList.remove("show");document.querySelector(".circle-loader").classList.remove("load-complete");document.querySelector(".checkmark").style.display="none"})};firstModal()}})})();rootBox._ini()}})})();bq1.forEach((ele)=>{ele.addEventListener("click",function(){q1.classList.add("opacy_0");setTimeout(()=>{q1.style.display="none";q2.classList.add("opacy_1");q2.style.display="block"},2000)})});for(let i=0;i<bq2.length;i+=1){bq2[i].addEventListener("click",function(){q2.classList.remove("opacy_1");q2.classList.add("opacy_0");setTimeout(()=>{q2.style.display="none";q3.classList.add("opacy_1");q3.style.display="block"},2000)})};bq3.forEach((ele)=>{ele.addEventListener("click",function(){q3.classList.remove("opacy_1");q3.classList.add("opacy_0");setTimeout(()=>{q3.style.display="none";q4.classList.add("opacy_1");q4.style.display="block"},2000)})});bq4.forEach((ele)=>{ele.addEventListener("click",function(){q4.classList.remove("opacy_1");q4.classList.add("opacy_0");setTimeout(()=>{q4.style.display="none";document.querySelector('[id="faqBox"]').style.display="none";boxRoot._init()},2000)})})}})})();