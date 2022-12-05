;/*FB_PKG_DELIM*/

__d("BaseTextArea.react",["BaseFocusRing.react","BaseInput.react","mergeRefs","react","useLayoutEffect_SAFE_FOR_SSR","usePrevious"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useMemo,j=b.useRef,k={unresizable:{resize:"xtt52l0",$$css:!0}};function a(a,b){var d=a.xstyle,e=a.minRows,f=e===void 0?1:e;e=a.maxRows;var g=e===void 0?Infinity:e;e=a.suppressFocusRing;var l=a.unresizable,m=l===void 0?!1:l;l=a.value;var n=babelHelpers.objectWithoutPropertiesLoose(a,["xstyle","minRows","maxRows","suppressFocusRing","unresizable","value"]),o=l!=null?String(l):l,p=j(null),q=c("usePrevious")(g),r=c("usePrevious")(o);c("useLayoutEffect_SAFE_FOR_SSR")(function(){var a=p.current;if(a!=null){(q==null||r==null||o==null||g<q||o.length<r.length)&&(a.rows=Math.min(Math.max(f,1),g));while(a.rows<g&&a.clientHeight<a.scrollHeight)a.rows+=1;a.style.overflowY=a.rows<g?"hidden":"auto"}},[g,f,q,r,o]);var s=i(function(){return c("mergeRefs")(p,b)},[b]);return h.jsx(c("BaseFocusRing.react"),{suppressFocusRing:e,children:function(a){return h.jsx(c("BaseInput.react"),babelHelpers["extends"]({},n,{ref:s,type:"textarea",value:o,xstyle:[a,m&&k.unresizable,d]}))}})}a.displayName=a.name+" [from "+f.id+"]";e=h.forwardRef(a);g["default"]=e}),98);
__d("CometFormInputValidationStateIcon",["ix","CometIcon.react","CometProgressRingIndeterminate.react","fbicon","react"],(function(a,b,c,d,e,f,g,h){"use strict";a=d("react");b={CORRECT:a.jsx(c("CometIcon.react"),{color:"positive",icon:d("fbicon")._(h("498146"),20),testid:void 0}),ERROR:a.jsx(c("CometIcon.react"),{color:"negative",icon:d("fbicon")._(h("502062"),20),testid:void 0}),LOADING:a.jsx(c("CometProgressRingIndeterminate.react"),{color:"disabled",size:20}),WARN:a.jsx(c("CometIcon.react"),{color:"warning",icon:d("fbicon")._(h("502062"),20),testid:void 0})};g["default"]=b}),98);
__d("CometFormInputWrapperHelperText.react",["TetraTextPairing.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.validationState;a=a.value;return h.jsx(c("TetraTextPairing.react"),{level:4,meta:a,metaColor:b==="ERROR"?"negative":"secondary"})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometFormInputWrapper.react",["BaseFocusRing.react","CometFormInputValidationStateIcon","CometFormInputWrapperHelperText.react","FocusWithinHandler.react","isBlueprintStylesEnabled","react","stylex","useCometUniqueID"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useCallback,j=b.useEffect,k=b.useRef,l=b.useState,m={disabled:{backgroundColor:"x443n21",borderTopColor:"x8cjs6t",borderEndColor:"x1ch86jh",borderBottomColor:"x80vd3b",borderStartColor:"xckqwgs",boxShadow:"x1gnnqk1",cursor:"x1h6gzvc",":active_backgroundColor":"xmyovnm",$$css:!0},error:{borderTopColor:"xmrkho8",borderEndColor:"xa6p843",borderBottomColor:"xfz9iyh",borderStartColor:"xy4nld6",":active_backgroundColor":"x1kxczlb",$$css:!0},errorFocused:{boxShadow:"xrq537t",$$css:!0},errorHovered:{backgroundColor:"xpc7vr0",$$css:!0},headerMask:{backgroundColor:"x1jx94hy",end:"x92rtbv",height:"xlup9mm",position:"x10l6tqk",start:"x16q8cke",top:"xfr5jun",$$css:!0},helperText:{marginTop:"x1xmf6yo",$$css:!0},hiddenHelperText:{clip:"xzpqnlu",clipPath:"x1hyvwdk",height:"xjm9jq1",overflowX:"x6ikm8r",overflowY:"x10wlt62",position:"x10l6tqk",width:"x1i1rx1s",$$css:!0},hovered:{borderTopColor:"xemkom9",borderEndColor:"x155i9mh",borderBottomColor:"xqnlwer",borderStartColor:"xa7jiu",$$css:!0},input:{backgroundColor:"xjbqb8w",flexGrow:"x1iyjqo2",maxWidth:"x193iq5w",minWidth:"xeuugli",position:"x1n2onr6",$$css:!0},inputRow:{display:"x78zum5",width:"xh8yej3",$$css:!0},label:{color:"xi81zsa",cursor:"xmper1u",display:"x1lliihq",end:"x1923su1",fontSize:"x1jchvi3",fontWeight:"x1fcty0u",lineHeight:"x132q4wb",maxWidth:"x193iq5w",overflowX:"x6ikm8r",overflowY:"x10wlt62",pointerEvents:"x47corl",position:"x10l6tqk",start:"x16q8cke",textOverflow:"xlyipyv",top:"xoyzfg9",transformOrigin:"x1al4vs7",transitionDuration:"x1k90msu",transitionProperty:"x11xpdln",transitionTimingFunction:"x1qfuztq",whiteSpace:"xuxw1ft",$$css:!0},labelDisabled:{color:"x1dntmbh",$$css:!0},labelError:{color:"x1a1m0xk",$$css:!0},labelHighlighted:{color:"x1qq9wsj",$$css:!0},labelShrunk:{end:"x19c1rep",transform:"x1cab348",$$css:!0},root:{backgroundColor:"x1jx94hy",borderTopColor:"x8cjs6t",borderEndColor:"x1ch86jh",borderBottomColor:"x80vd3b",borderStartColor:"xckqwgs",borderTopStartRadius:"xhk9q7s",borderTopEndRadius:"x1otrzb0",borderBottomEndRadius:"x1i1ezom",borderBottomStartRadius:"x1o6z2jb",borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",borderTopWidth:"x178xt8z",borderEndWidth:"xm81vs4",borderBottomWidth:"xso031l",borderStartWidth:"xy80clv",display:"x78zum5",flexDirection:"xdt5ytf",overflowX:"x6ikm8r",overflowY:"x10wlt62",position:"x1n2onr6",zIndex:"x1ja2u2z",":active_backgroundColor":"x1egnk41",$$css:!0},secondary:{display:"x78zum5",$$css:!0},shake:{animationDuration:"x1f7sx64",animationFillMode:"x1u6ievf",animationName:"xcqsoj",animationTimingFunction:"x1ojsi0c",$$css:!0},validationIcon:{paddingEnd:"x1pi30zi",paddingTop:"x109j2v6",$$css:!0},validationIconHideLabel:{paddingTop:"xz9dl7a",$$css:!0},warn:{borderTopColor:"x1xqsql5",borderEndColor:"x1sn40xs",borderBottomColor:"x1gkuw16",borderStartColor:"xg1yei2",":active_backgroundColor":"xhexg4x",$$css:!0},warnFocused:{boxShadow:"x1hliol7",$$css:!0},warnHovered:{backgroundColor:"x12tslg2",$$css:!0}},n={pointer:{cursor:"x1ypdohk",$$css:!0},text:{cursor:"x1ed109x",$$css:!0}},o={root:{borderTopStartRadius:"xyi19xy",borderTopEndRadius:"x1ccrb07",borderBottomEndRadius:"xtf3nb5",borderBottomStartRadius:"x1pc53ja",$$css:!0}};function p(a){if(Array.isArray(a))return a.length===0;else if(typeof a==="object"){if(a)for(var b in a)return!1;return!0}else return a==null||a===""}function a(a){var b=a.addOnBottom,d=a.addOnStart,e=a.alwaysShrinkLabel,f=e===void 0?!1:e,g=a["aria-activedescendant"],q=a["aria-controls"],r=a["aria-expanded"],s=a["aria-haspopup"],t=a.ariaLabel,u=a.auxContent,v=a.children,w=a.comboboxKeyDown,x=a.cursor;e=a.disabled;var y=e===void 0?!1:e,z=a.helperText;e=a.helperTextIsHidden;e=e===void 0?!1:e;var A=a.hideLabel,B=A===void 0?!1:A,C=a.label,D=a.labelRef;A=a.onFocusChange;var E=a.onPress,F=a.role,G=a.shrinkLabelOnFocus,H=G===void 0?!0:G,I=a.suppressFocusRing,J=a.validationState;G=a.value;a=a.withHeaderMask;var K=a===void 0?!1:a,L=c("useCometUniqueID")(),M=c("useCometUniqueID")();a=l(!1);var N=a[0],O=a[1];a=l(!1);var P=a[0],Q=a[1],R=!p(G),S=i(function(){P||Q(!0)},[P]),T=i(function(){P&&Q(!1)},[P]),U=k(null),V=k(null);a=l(!1);var W=a[0],X=a[1];j(function(){if(w==null)return;var a=V&&V.current;if(a!=null){a.addEventListener("keydown",w);return function(){a.removeEventListener("keydown",w)}}},[w]);return h.jsxs("div",{ref:V,children:[h.jsx(c("FocusWithinHandler.react"),{onFocusChange:A,children:function(a){return h.jsx(c("BaseFocusRing.react"),{suppressFocusRing:!W||I,children:function(e){var i;return h.jsxs("label",{"aria-activedescendant":g,"aria-controls":q,"aria-expanded":r,"aria-haspopup":s,"aria-label":(i=t)!=null?i:C,className:c("stylex")(m.root,c("isBlueprintStylesEnabled")()&&o.root,n[x],P&&m.hovered,a&&c("BaseFocusRing.react").focusRingXStyle,J==="WARN"&&[m.warn,P&&m.warnHovered,a&&m.warnFocused],J==="ERROR"&&[m.error,P&&m.errorHovered,a&&m.errorFocused],y&&m.disabled,N&&m.shake,e),htmlFor:L,onAnimationEnd:function(){O(!1)},onClick:function(a){y?O(!0):E&&E(a)},onMouseEnter:S,onMouseLeave:T,ref:U,role:E!=null?F!=null?F:"button":void 0,suppressHydrationWarning:!0,tabIndex:E!=null?0:void 0,children:[h.jsxs("div",{className:"x78zum5 xh8yej3",children:[d,h.jsxs("div",{className:"xjbqb8w x1iyjqo2 x193iq5w xeuugli x1n2onr6",children:[K&&!y&&(R||a)&&h.jsx("span",{className:"x92rtbv xlup9mm x10l6tqk x16q8cke xfr5jun"+(J==="ERROR"&&P?" xpc7vr0":""+(J==="WARN"&&P?" x12tslg2":" x1jx94hy"))}),!B&&h.jsx("span",{className:"xmper1u x1lliihq x1jchvi3 x1fcty0u x132q4wb x193iq5w x6ikm8r x10wlt62 x47corl x10l6tqk x16q8cke xlyipyv xoyzfg9 x1al4vs7 x1k90msu x11xpdln x1qfuztq xuxw1ft"+((y?" x1dntmbh":""+((J==null&&a?" x1qq9wsj":""+(J==="ERROR"?" x1a1m0xk":" xi81zsa"))+(R||f||a&&H?"":""+(J==null&&a?"":""+(J==="ERROR"?"":"")))))+(R||f||a&&H?" x19c1rep x1cab348":" x1923su1")),ref:D,children:C}),h.jsx(c("FocusWithinHandler.react"),{onFocusChange:X,children:v({filled:R,focused:a,helperTextID:z!=null&&J!=null?M:void 0,id:L,rootRef:U})})]}),(u!=null||J!=null)&&h.jsxs("div",{className:"x78zum5",children:[J!=null&&h.jsx("div",{className:"x1pi30zi"+(B?" xz9dl7a":" x109j2v6"),children:c("CometFormInputValidationStateIcon")[J]}),u]})]}),b]})}})}}),z!=null&&(e?h.jsx("div",{className:"xzpqnlu x1hyvwdk xjm9jq1 x6ikm8r x10wlt62 x10l6tqk x1i1rx1s",id:M,children:z}):h.jsx("div",{className:"x1xmf6yo",id:M,children:h.jsx(c("CometFormInputWrapperHelperText.react"),{validationState:J,value:z})}))]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometFormTextArea.react",["BaseTextArea.react","CometFormInputWrapper.react","react","useBaseInputValidators"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={disabled:{color:"x1dntmbh",cursor:"x1h6gzvc",$$css:!0},hideLabel:{marginTop:"x1anpbxc",$$css:!0},textArea:{backgroundColor:"xjbqb8w",borderTop:"x76ihet",borderEnd:"xwmqs3e",borderBottom:"x112ta8",borderStart:"xxxdfa6",boxSizing:"x9f619",color:"xzsf02u",display:"x78zum5",fontSize:"x1jchvi3",fontWeight:"x1fcty0u",lineHeight:"x132q4wb",marginBottom:"xyorhqc",marginTop:"xaqh0s9",outline:"x1a2a7pz",overflowX:"x6ikm8r",overflowY:"x10wlt62",paddingEnd:"x1pi30zi",paddingStart:"x1swvt13",resize:"xtt52l0",width:"xh8yej3",$$css:!0}};function a(a,b){var d=a.addOnBottom,e=a.autoComplete,f=a.auxContent,g=a.disabled,j=g===void 0?!1:g;g=a.helperText;var k=a.hideLabel,l=k===void 0?!1:k;k=a.label;var m=a.maxLength,n=a.maxRows,o=a.minRows,p=a.onBlur,q=a.onFocus,r=a.onValueChange,s=a.placeholder,t=a.suppressFocusRing,u=a.testid;u=a.validationState;var v=a.validator,w=a.value;v=c("useBaseInputValidators")({validator:v,value:(a=w)!=null?a:""});a=v.topResultReason;v=v.topResultType;var x=v!=="CORRECT"?v:u;return h.jsx(c("CometFormInputWrapper.react"),{addOnBottom:d,auxContent:f,cursor:"text",disabled:j,helperText:a!=null?a:g,hideLabel:l,label:k,suppressFocusRing:t,validationState:x,value:w,withHeaderMask:!l,children:function(a){var d=a.focused,f=a.helperTextID;a=a.id;return h.jsx(c("BaseTextArea.react"),{"aria-describedby":f,"aria-invalid":x==="ERROR",autoComplete:e,disabled:j,id:a,maxLength:m,maxRows:n,minRows:o,onBlur:p,onFocus:q,onValueChange:r,placeholder:d?s:null,ref:b,suppressFocusRing:!0,testid:void 0,value:w,xstyle:[i.textArea,j&&i.disabled,l&&i.hideLabel]})}})}a.displayName=a.name+" [from "+f.id+"]";b=h.forwardRef(a);g["default"]=b}),98);
__d("CometFormInputPasswordStateIcon.react",["ix","CometIcon.react","fbicon","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){a=a.isVisible;return a?i.jsx(c("CometIcon.react"),{color:"primary",icon:d("fbicon")._(h("491228"),20),testid:void 0}):i.jsx(c("CometIcon.react"),{color:"primary",icon:d("fbicon")._(h("491223"),20),testid:void 0})}g["default"]=a}),98);
__d("CometFormTextInput.react",["BaseTextInput.react","CometFormInputPasswordStateIcon.react","CometFormInputWrapper.react","CometIcon.react","CometPressable.react","react","useBaseInputValidators"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useState,j={disabled:{backgroundColor:"x443n21",color:"x1dntmbh",cursor:"x1h6gzvc",$$css:!0},emoji:{alignItems:"x6s0dn4",display:"x78zum5",justifyContent:"xl56j7k",paddingStart:"x1ye3gou",pointerEvents:"x47corl",$$css:!0},icon:{paddingStart:"x1swvt13",paddingTop:"x109j2v6",pointerEvents:"x47corl",$$css:!0},input:{backgroundColor:"xjbqb8w",borderTop:"x76ihet",borderEnd:"xwmqs3e",borderBottom:"x112ta8",borderStart:"xxxdfa6",boxSizing:"x9f619",color:"xzsf02u",fontSize:"x1uxerd5",fontWeight:"x1fcty0u",lineHeight:"x132q4wb",paddingBottom:"x1a8lsjc",paddingEnd:"x1pi30zi",paddingStart:"x1swvt13",paddingTop:"x9desvi",width:"xh8yej3","::-ms-clear_display":"x15h3p50","::-ms-reveal_display":"x10emqs4",$$css:!0}};function a(a,b){var d=a.autoComplete,e=a.autoFocus_PLEASE_USE_FOCUS_REGION_INSTEAD,f=a.auxContent,g=a.disabled,k=g===void 0?!1:g;g=a.emojiSkittle;var l=a.helperText,m=a.helperTextIsHidden;m=m===void 0?!1:m;var n=a.icon,o=a.inputMode,p=a.label,q=a.labelRef,r=a.maxLength,s=a.onBlur,t=a.onClick,u=a.onFocus,v=a.onValueChange,w=a.placeholder,x=a.readOnly,y=a.suppressFocusRing,z=a.testid;z=a.type;z=z===void 0?"text":z;var A=a.validationState,B=a.validator,C=a.value,D=a.xstyle,E=babelHelpers.objectWithoutPropertiesLoose(a,["autoComplete","autoFocus_PLEASE_USE_FOCUS_REGION_INSTEAD","auxContent","disabled","emojiSkittle","helperText","helperTextIsHidden","icon","inputMode","label","labelRef","maxLength","onBlur","onClick","onFocus","onValueChange","placeholder","readOnly","suppressFocusRing","testid","type","validationState","validator","value","xstyle"]);B=c("useBaseInputValidators")({validator:B,value:(a=C)!=null?a:""});a=B.topResultReason;B=B.topResultType;var F=z==="password",G=i(!1),H=G[0],I=G[1];G=F&&Boolean(C);G=G?h.jsx("div",{className:"x78zum5",children:h.jsx("div",{className:"x1pi30zi x109j2v6",children:h.jsx(c("CometPressable.react"),{onPress:function(){return I(!H)},overlayDisabled:!0,children:h.jsx(c("CometFormInputPasswordStateIcon.react"),{isVisible:H})})})}):null;var J=F?H?"text":"password":z,K=B!=="CORRECT"?B:A;return h.jsx(c("CometFormInputWrapper.react"),{addOnStart:n!=null&&h.jsx("div",{className:"x1swvt13 x109j2v6 x47corl",children:h.jsx(c("CometIcon.react"),{color:"secondary",icon:n})})||g!=null&&h.jsx("div",{className:"x6s0dn4 x78zum5 xl56j7k x1ye3gou x47corl",children:g}),auxContent:(F=G)!=null?F:f,cursor:"text",disabled:k,helperText:a!=null?a:l,helperTextIsHidden:m,label:p,labelRef:q,suppressFocusRing:y,validationState:K,value:C,children:function(a){var f=a.focused,g=a.helperTextID;a=a.id;return h.jsx(c("BaseTextInput.react"),babelHelpers["extends"]({"aria-describedby":g,"aria-invalid":K==="ERROR",autoComplete:d,autoFocus:e,disabled:k,id:a,inputMode:o,maxLength:r,onBlur:s,onClick:t,onFocus:u,onValueChange:v,placeholder:f?w:null,readOnly:x,ref:b,suppressFocusRing:!0,testid:void 0,type:J,value:C,xstyle:[j.input,k&&j.disabled,x!=null&&x===!0&&j.disabled,D]},E))}})}a.displayName=a.name+" [from "+f.id+"]";b=h.forwardRef(a);g["default"]=b}),98);
__d("CometRadio.react",["BaseStyledRadio.react","CometPressableOverlay.react","TetraText.react","react","stylex","useCometPressableEventHandlers"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={radioDisabled:{backgroundColor:"xwcfey6",$$css:!0},radioSelected:{backgroundColor:"xwnonoy",borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",height:"x1kpxq89",position:"x10l6tqk",width:"xsmyaan",$$css:!0},root:{WebkitTapHighlightColor:"x1i10hfl",alignItems:"x6s0dn4",cursor:"x1ypdohk",display:"x78zum5",paddingBottom:"xwib8y2",paddingTop:"x1y1aw1k",position:"x1n2onr6",touchAction:"xggy1nq",$$css:!0},selectedSizeLarge:{start:"xit27t2",top:"xndqk7f",$$css:!0},selectedSizeMedium:{start:"xb1c2wi",top:"xs7f9wi",$$css:!0},text:{marginStart:"x1i64zmx",$$css:!0}};function a(a){var b=a.checked,d=a.disabled;d=d===void 0?!1:d;var e=a.id,f=a.label,g=a.labelIsHidden;g=g===void 0?!1:g;var j=a.name,k=a.onChange,l=a.reduceEmphasis;l=l===void 0?!1:l;var m=a.size;m=m===void 0?"large":m;var n=a.testid;n=a.value;a=a.xstyle;var o=c("useCometPressableEventHandlers")({disabled:d}),p=o[0];o[1];var q=o[2],r=q.focusVisible,s=q.hovered;q=q.pressed;o=o[3];return h.jsxs("label",babelHelpers["extends"]({className:c("stylex")(i.root,a)},o,{ref:p,children:[h.jsx(c("BaseStyledRadio.react"),{"aria-label":g?f:void 0,checked:b,checkedIcon:h.jsx("span",{className:"x14yjl9h xudhj91 x18nykt9 xww2gxu x1kpxq89 x10l6tqk xsmyaan"+((d?" xwcfey6":" xwnonoy")+(m==="medium"?" xb1c2wi xs7f9wi":""+(m==="large"?" xit27t2 xndqk7f":""+(m==="xlarge"?" xit27t2 xndqk7f":""+(d?"":"")))))}),disabled:d,id:e,name:j,onSelect:k,size:m,testid:void 0,value:n,children:h.jsx(c("CometPressableOverlay.react"),{focusVisible:r,hovered:s,offset:8,pressed:q,radius:"50%"})}),g?null:h.jsx("div",{className:"x1i64zmx",children:h.jsx(c("TetraText.react"),{color:d?"disabled":"primary",type:m==="xlarge"?"button1":l?"body3":"button2",children:f})})]}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MessengerBlurpleLogoSvg.bs",["react","useCometUniqueID"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.width;a=a.height;b=b!==void 0?b:"80";a=a!==void 0?a:"80";var d=c("useCometUniqueID")(),e=h.useMemo(function(){return h.cloneElement(h.jsx("path",{}),{clipRule:"evenodd",d:"M40 .914C17.995.914.937 17.033.937 38.804c0 11.389 4.668 21.23 12.268 28.026a3.12 3.12 0 011.05 2.227l.212 6.95c.068 2.215 2.358 3.658 4.386 2.763l7.753-3.423a3.115 3.115 0 012.087-.153A42.602 42.602 0 0040 76.695c22.005 0 39.063-16.118 39.063-37.89C79.063 17.033 62.005.915 40 .915z",fill:"url(#"+(d+")"),fillRule:"evenodd",suppressHydrationWarning:!0})},[d]),f=h.useMemo(function(){return h.cloneElement(h.jsx("radialGradient",{}),{children:h.jsxs(h.Fragment,{children:[h.jsx("stop",{stopColor:"#09F"}),h.jsx("stop",{offset:"0.61",stopColor:"#A033FF"}),h.jsx("stop",{offset:"0.935",stopColor:"#FF5280"}),h.jsx("stop",{offset:"1",stopColor:"#FF7061"})]}),cx:"0",cy:"0",gradientTransform:"rotate(-57.092 80.25 24.628) scale(85.1246)",gradientUnits:"userSpaceOnUse",id:d,r:"1",suppressHydrationWarning:!0})},[d]);return h.jsxs("svg",{width:b,height:a,viewBox:" 0 0 80 80",fill:"none",children:[e,h.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.543 49.886L28.018 31.68a5.86 5.86 0 018.472-1.563l9.127 6.844a2.343 2.343 0 002.823-.008L60.765 27.6c1.645-1.248 3.793.72 2.692 2.467L51.982 48.272a5.86 5.86 0 01-8.472 1.563l-9.127-6.845a2.344 2.344 0 00-2.823.01l-12.325 9.354c-1.646 1.248-3.793-.72-2.692-2.467z",fill:"#fff"}),h.jsx("defs",{children:f})]})}a.displayName=a.name+" [from "+f.id+"]";b=a;g.make=b}),98);