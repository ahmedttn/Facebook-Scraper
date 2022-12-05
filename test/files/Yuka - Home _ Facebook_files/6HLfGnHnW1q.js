;/*FB_PKG_DELIM*/

__d("CometCheckbox.react",["ix","BaseStyledCheckbox.react","CometIcon.react","CometPressableOverlay.react","TetraText.react","fbicon","react","useCometPressableEventHandlers"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a,b){var e=a.checked,f=a.disabled;f=f===void 0?!1:f;var g=a.iconSize;g=g===void 0?24:g;var j=a.id,k=a.label,l=a.labelIsHidden;l=l===void 0?!1:l;var m=a.name,n=a.onChange,o=a.reduceEmphasis;o=o===void 0?!1:o;var p=a.smallerLabel;p=p===void 0?!1:p;var q=a.tabIndex,r=a.testid;r=a.value;a=c("useCometPressableEventHandlers")({disabled:f});var s=a[0];a[1];var t=a[2],u=t.focusVisible,v=t.hovered;t=t.pressed;a=a[3];return i.jsxs("label",babelHelpers["extends"]({className:"x1i10hfl x6s0dn4 x78zum5 xwib8y2 x1y1aw1k x1n2onr6 xggy1nq"},a,{ref:s,children:[i.jsx(c("BaseStyledCheckbox.react"),{"aria-label":l?k:void 0,checked:e,checkedIcon:i.jsx(c("CometIcon.react"),{color:f?"disabled":"highlight",icon:g===16?d("fbicon")._(h("492790"),16):d("fbicon")._(h("531032"),24)}),disabled:f,id:j,name:m,onChange:n,ref:b,tabIndex:q,testid:void 0,uncheckedIcon:i.jsx(c("CometIcon.react"),{color:f?"disabled":"secondary",icon:g===16?d("fbicon")._(h("659287"),16):d("fbicon")._(h("659289"),24)}),value:r,children:i.jsx(c("CometPressableOverlay.react"),{focusVisible:u,hovered:v,offset:8,pressed:t,radius:"50%"})}),l?null:i.jsx("div",{className:"x1r8uery x1iyjqo2 x1i64zmx xeuugli",children:i.jsx(c("TetraText.react"),{color:f?"disabled":"primary",type:o?p===!0?"body4":"body3":"button2",children:k})})]}))}a.displayName=a.name+" [from "+f.id+"]";b=i.forwardRef(a);g["default"]=b}),98);
__d("CometOrSeparator.react",["CometOrLabel.react","CometRow.react","CometRowItem.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(){return h.jsxs(c("CometRow.react"),{paddingVertical:0,verticalAlign:"center",children:[h.jsx(c("CometRowItem.react"),{expanding:!0,children:h.jsx("div",{className:"x1pjtg3p xjm9jq1"})}),h.jsx(c("CometRowItem.react"),{expanding:!1,children:h.jsx(c("CometOrLabel.react"),{})}),h.jsx(c("CometRowItem.react"),{expanding:!0,children:h.jsx("div",{className:"x1pjtg3p xjm9jq1"})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometLoggedOutPopupCTAForm.react",["fbt","CometFormTextInput.react","CometLink.react","CometLoggedOutCTAStrings","CometOrSeparator.react","TetraButton.react","TetraText.react","react","useCometLogInForm"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=d("react").useState,k="/reg";function a(a){var b=a.hideCreateAccountButton,d=a.initialLoginName;d=d===void 0?"":d;var e=a.legal_reporting_cta_type,f=a.legal_reporting_uri,g=a.next,l=a.onCreateAccount;a=a.title;d=j(d);var m=d[0];d=d[1];var n=j(""),o=n[0];n=n[1];g=c("useCometLogInForm")(g);var p=g.hiddenInputs,q=g.loginFormRef,r=g.loginPostURI,s=g.onSubmit,t=g.resetURI;g=g.submitting;return i.jsxs("form",{action:r,disabled:g,id:"login_popup_cta_form",method:"POST",noValidate:!0,onSubmit:s,ref:q,children:[i.jsxs("div",{className:"xxqbpr x1gja9t x17p1517 x8vdgqj x2b8uid",children:[i.jsx("div",{className:"x1xka2u1 xqfms19",children:i.jsx(c("TetraText.react"),{align:"center",numberOfLines:2,type:"entityHeaderHeadline2",children:a})}),i.jsx("div",{className:"x1s85apg xieb3on xrok9f9",children:i.jsx(c("TetraText.react"),{align:"center",type:"headlineEmphasized2",children:a})}),i.jsx("div",{className:"xod5an3",children:i.jsx(c("CometFormTextInput.react"),{label:c("CometLoggedOutCTAStrings").emailText,name:"email",onValueChange:d,value:m})}),i.jsx("div",{className:"x1c436fg",children:i.jsx(c("CometFormTextInput.react"),{label:c("CometLoggedOutCTAStrings").passwordText,name:"pass",onValueChange:n,type:"password",value:o})}),i.jsx("div",{className:"x1c436fg",children:i.jsx(c("TetraButton.react"),{"aria-label":"Accessible login button",disabled:g,label:h._("Log In"),onPress:s,size:"large"})}),i.jsx("div",{className:"x1xka2u1",children:i.jsx(c("CometLink.react"),{color:"highlight",href:t,target:"_blank",children:i.jsx(c("TetraText.react"),{align:"center",color:"highlight",type:"bodyLink3",children:c("CometLoggedOutCTAStrings").forgotPasswordText})})}),b===!0?null:i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"x1hq5gj4",children:i.jsx(c("CometOrSeparator.react"),{})}),i.jsx("div",{className:"x1rg5ohu",children:i.jsx(c("TetraButton.react"),babelHelpers["extends"]({label:c("CometLoggedOutCTAStrings").createNewAccountText},l!=null?{onPress:l}:{linkProps:{target:"_blank",url:k}},{padding:"wide",size:"large",type:"fdsOverride_positive"}))})]}),f!=null?i.jsxs("div",{className:"xaqh0s9",children:[i.jsx("div",{className:"x1hq5gj4",children:i.jsx(c("CometOrSeparator.react"),{})}),i.jsxs("div",{children:[e==="netzdg"?c("CometLoggedOutCTAStrings").getNetzdgTextWithUrl(f):null,e==="french_law"?c("CometLoggedOutCTAStrings").getFrenchLawTextWithUrl(f):null,e==="cpa"?c("CometLoggedOutCTAStrings").getCPATextWithUrl(f):null,e==="dsa"?c("CometLoggedOutCTAStrings").getDSATextWithUrl(f):null]})]}):null]}),p]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometLoggedOutPopupCTA.react",["BaseRow.react","BaseRowItem.react","CometCardedDialogLegacy.react","CometErrorBoundary.react","CometLoggedOutPopupCTAForm.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={container:{overflowX:"x6ikm8r",overflowY:"x10wlt62","@media (min-width: 486px)_width":"xbe9js4",$$css:!0},height:{height:"xfd5v8p",$$css:!0},heightWithCreateAccountButton:{height:"x1egiwwb",$$css:!0},heightWithCreateAccountButtonAndLoggedOutLink:{height:"x1n46bim",$$css:!0},heightWithNetzg:{height:"x14fx8kg",$$css:!0}};function a(a){var b=a.leftChild,d=a.onClose;d=d===void 0?function(){}:d;var e=a.title,f=a.next,g=a.initialLoginName,j=a.hideCreateAccountButton,k=j===void 0?!1:j;j=a.legal_reporting_cta_type;var l=a.legal_reporting_uri;a=function(){var a=l!=null;return k?a?i.heightWithNetzg:i.height:a?i.heightWithCreateAccountButtonAndLoggedOutLink:i.heightWithCreateAccountButton};return h.jsx(c("CometErrorBoundary.react"),{children:h.jsx(c("CometCardedDialogLegacy.react"),{onClose:d,size:"content",withCloseButton:!0,children:h.jsxs(c("BaseRow.react"),{children:[b!=null?h.jsx(c("BaseRowItem.react"),{children:h.jsx("div",{className:"x6ikm8r x10wlt62 xbe9js4",children:b})}):null,h.jsx(c("BaseRowItem.react"),{children:h.jsx("div",{className:c("stylex")(i.container,a()),children:h.jsx(c("CometLoggedOutPopupCTAForm.react"),{hideCreateAccountButton:k,initialLoginName:g,legal_reporting_cta_type:j,legal_reporting_uri:l,next:f,title:e})})})]})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);