/*! highlight.js v9.9.0 | BSD3 License | git.io/hljslicense */
!function(e){var n="object"==typeof window&&window||"object"==typeof self&&self;"undefined"!=typeof exports?e(exports):n&&(n.hljs=e({}),"function"==typeof define&&define.amd&&define([],function(){return n.hljs}))}(function(e){function n(e){return e.replace(/[&<>]/gm,function(e){return I[e]})}function t(e){return e.nodeName.toLowerCase()}function r(e,n){var t=e&&e.exec(n);return t&&0===t.index}function i(e){return k.test(e)}function a(e){var n,t,r,a,o=e.className+" ";if(o+=e.parentNode?e.parentNode.className:"",t=B.exec(o))return R(t[1])?t[1]:"no-highlight";for(o=o.split(/\s+/),n=0,r=o.length;r>n;n++)if(a=o[n],i(a)||R(a))return a}function o(e,n){var t,r={};for(t in e)r[t]=e[t];if(n)for(t in n)r[t]=n[t];return r}function u(e){var n=[];return function r(e,i){for(var a=e.firstChild;a;a=a.nextSibling)3===a.nodeType?i+=a.nodeValue.length:1===a.nodeType&&(n.push({event:"start",offset:i,node:a}),i=r(a,i),t(a).match(/br|hr|img|input/)||n.push({event:"stop",offset:i,node:a}));return i}(e,0),n}function c(e,r,i){function a(){return e.length&&r.length?e[0].offset!==r[0].offset?e[0].offset<r[0].offset?e:r:"start"===r[0].event?e:r:e.length?e:r}function o(e){function r(e){return" "+e.nodeName+'="'+n(e.value)+'"'}l+="<"+t(e)+w.map.call(e.attributes,r).join("")+">"}function u(e){l+="</"+t(e)+">"}function c(e){("start"===e.event?o:u)(e.node)}for(var s=0,l="",f=[];e.length||r.length;){var g=a();if(l+=n(i.substring(s,g[0].offset)),s=g[0].offset,g===e){f.reverse().forEach(u);do c(g.splice(0,1)[0]),g=a();while(g===e&&g.length&&g[0].offset===s);f.reverse().forEach(o)}else"start"===g[0].event?f.push(g[0].node):f.pop(),c(g.splice(0,1)[0])}return l+n(i.substr(s))}function s(e){function n(e){return e&&e.source||e}function t(t,r){return new RegExp(n(t),"m"+(e.cI?"i":"")+(r?"g":""))}function r(i,a){if(!i.compiled){if(i.compiled=!0,i.k=i.k||i.bK,i.k){var u={},c=function(n,t){e.cI&&(t=t.toLowerCase()),t.split(" ").forEach(function(e){var t=e.split("|");u[t[0]]=[n,t[1]?Number(t[1]):1]})};"string"==typeof i.k?c("keyword",i.k):E(i.k).forEach(function(e){c(e,i.k[e])}),i.k=u}i.lR=t(i.l||/\w+/,!0),a&&(i.bK&&(i.b="\\b("+i.bK.split(" ").join("|")+")\\b"),i.b||(i.b=/\B|\b/),i.bR=t(i.b),i.e||i.eW||(i.e=/\B|\b/),i.e&&(i.eR=t(i.e)),i.tE=n(i.e)||"",i.eW&&a.tE&&(i.tE+=(i.e?"|":"")+a.tE)),i.i&&(i.iR=t(i.i)),null==i.r&&(i.r=1),i.c||(i.c=[]);var s=[];i.c.forEach(function(e){e.v?e.v.forEach(function(n){s.push(o(e,n))}):s.push("self"===e?i:e)}),i.c=s,i.c.forEach(function(e){r(e,i)}),i.starts&&r(i.starts,a);var l=i.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([i.tE,i.i]).map(n).filter(Boolean);i.t=l.length?t(l.join("|"),!0):{exec:function(){return null}}}}r(e)}function l(e,t,i,a){function o(e,n){var t,i;for(t=0,i=n.c.length;i>t;t++)if(r(n.c[t].bR,e))return n.c[t]}function u(e,n){if(r(e.eR,n)){for(;e.endsParent&&e.parent;)e=e.parent;return e}return e.eW?u(e.parent,n):void 0}function c(e,n){return!i&&r(n.iR,e)}function g(e,n){var t=N.cI?n[0].toLowerCase():n[0];return e.k.hasOwnProperty(t)&&e.k[t]}function h(e,n,t,r){var i=r?"":y.classPrefix,a='<span class="'+i,o=t?"":C;return a+=e+'">',a+n+o}function p(){var e,t,r,i;if(!E.k)return n(B);for(i="",t=0,E.lR.lastIndex=0,r=E.lR.exec(B);r;)i+=n(B.substring(t,r.index)),e=g(E,r),e?(M+=e[1],i+=h(e[0],n(r[0]))):i+=n(r[0]),t=E.lR.lastIndex,r=E.lR.exec(B);return i+n(B.substr(t))}function d(){var e="string"==typeof E.sL;if(e&&!x[E.sL])return n(B);var t=e?l(E.sL,B,!0,L[E.sL]):f(B,E.sL.length?E.sL:void 0);return E.r>0&&(M+=t.r),e&&(L[E.sL]=t.top),h(t.language,t.value,!1,!0)}function b(){k+=null!=E.sL?d():p(),B=""}function v(e){k+=e.cN?h(e.cN,"",!0):"",E=Object.create(e,{parent:{value:E}})}function m(e,n){if(B+=e,null==n)return b(),0;var t=o(n,E);if(t)return t.skip?B+=n:(t.eB&&(B+=n),b(),t.rB||t.eB||(B=n)),v(t,n),t.rB?0:n.length;var r=u(E,n);if(r){var i=E;i.skip?B+=n:(i.rE||i.eE||(B+=n),b(),i.eE&&(B=n));do E.cN&&(k+=C),E.skip||(M+=E.r),E=E.parent;while(E!==r.parent);return r.starts&&v(r.starts,""),i.rE?0:n.length}if(c(n,E))throw new Error('Illegal lexeme "'+n+'" for mode "'+(E.cN||"<unnamed>")+'"');return B+=n,n.length||1}var N=R(e);if(!N)throw new Error('Unknown language: "'+e+'"');s(N);var w,E=a||N,L={},k="";for(w=E;w!==N;w=w.parent)w.cN&&(k=h(w.cN,"",!0)+k);var B="",M=0;try{for(var I,j,O=0;;){if(E.t.lastIndex=O,I=E.t.exec(t),!I)break;j=m(t.substring(O,I.index),I[0]),O=I.index+j}for(m(t.substr(O)),w=E;w.parent;w=w.parent)w.cN&&(k+=C);return{r:M,value:k,language:e,top:E}}catch(T){if(T.message&&-1!==T.message.indexOf("Illegal"))return{r:0,value:n(t)};throw T}}function f(e,t){t=t||y.languages||E(x);var r={r:0,value:n(e)},i=r;return t.filter(R).forEach(function(n){var t=l(n,e,!1);t.language=n,t.r>i.r&&(i=t),t.r>r.r&&(i=r,r=t)}),i.language&&(r.second_best=i),r}function g(e){return y.tabReplace||y.useBR?e.replace(M,function(e,n){return y.useBR&&"\n"===e?"<br>":y.tabReplace?n.replace(/\t/g,y.tabReplace):void 0}):e}function h(e,n,t){var r=n?L[n]:t,i=[e.trim()];return e.match(/\bhljs\b/)||i.push("hljs"),-1===e.indexOf(r)&&i.push(r),i.join(" ").trim()}function p(e){var n,t,r,o,s,p=a(e);i(p)||(y.useBR?(n=document.createElementNS("http://www.w3.org/1999/xhtml","div"),n.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):n=e,s=n.textContent,r=p?l(p,s,!0):f(s),t=u(n),t.length&&(o=document.createElementNS("http://www.w3.org/1999/xhtml","div"),o.innerHTML=r.value,r.value=c(t,u(o),s)),r.value=g(r.value),e.innerHTML=r.value,e.className=h(e.className,p,r.language),e.result={language:r.language,re:r.r},r.second_best&&(e.second_best={language:r.second_best.language,re:r.second_best.r}))}function d(e){y=o(y,e)}function b(){if(!b.called){b.called=!0;var e=document.querySelectorAll("pre code");w.forEach.call(e,p)}}function v(){addEventListener("DOMContentLoaded",b,!1),addEventListener("load",b,!1)}function m(n,t){var r=x[n]=t(e);r.aliases&&r.aliases.forEach(function(e){L[e]=n})}function N(){return E(x)}function R(e){return e=(e||"").toLowerCase(),x[e]||x[L[e]]}var w=[],E=Object.keys,x={},L={},k=/^(no-?highlight|plain|text)$/i,B=/\blang(?:uage)?-([\w-]+)\b/i,M=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,C="</span>",y={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},I={"&":"&amp;","<":"&lt;",">":"&gt;"};return e.highlight=l,e.highlightAuto=f,e.fixMarkup=g,e.highlightBlock=p,e.configure=d,e.initHighlighting=b,e.initHighlightingOnLoad=v,e.registerLanguage=m,e.listLanguages=N,e.getLanguage=R,e.inherit=o,e.IR="[a-zA-Z]\\w*",e.UIR="[a-zA-Z_]\\w*",e.NR="\\b\\d+(\\.\\d+)?",e.CNR="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BNR="\\b(0b[01]+)",e.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BE={b:"\\\\[\\s\\S]",r:0},e.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[e.BE]},e.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[e.BE]},e.PWM={b:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/},e.C=function(n,t,r){var i=e.inherit({cN:"comment",b:n,e:t,c:[]},r||{});return i.c.push(e.PWM),i.c.push({cN:"doctag",b:"(?:TODO|FIXME|NOTE|BUG|XXX):",r:0}),i},e.CLCM=e.C("//","$"),e.CBCM=e.C("/\\*","\\*/"),e.HCM=e.C("#","$"),e.NM={cN:"number",b:e.NR,r:0},e.CNM={cN:"number",b:e.CNR,r:0},e.BNM={cN:"number",b:e.BNR,r:0},e.CSSNM={cN:"number",b:e.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},e.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[e.BE,{b:/\[/,e:/\]/,r:0,c:[e.BE]}]},e.TM={cN:"title",b:e.IR,r:0},e.UTM={cN:"title",b:e.UIR,r:0},e.METHOD_GUARD={b:"\\.\\s*"+e.UIR,r:0},e});hljs.registerLanguage("java",function(e){var a="[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*",t=a+"(<"+a+"(\\s*,\\s*"+a+")*>)?",r="false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports do",s="\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?",c={cN:"number",b:s,r:0};return{aliases:["jsp"],k:r,i:/<\/|#/,c:[e.C("/\\*\\*","\\*/",{r:0,c:[{b:/\w+@/,r:0},{cN:"doctag",b:"@[A-Za-z]+"}]}),e.CLCM,e.CBCM,e.ASM,e.QSM,{cN:"class",bK:"class interface",e:/[{;=]/,eE:!0,k:"class interface",i:/[:"\[\]]/,c:[{bK:"extends implements"},e.UTM]},{bK:"new throw return else",r:0},{cN:"function",b:"("+t+"\\s+)+"+e.UIR+"\\s*\\(",rB:!0,e:/[{;=]/,eE:!0,k:r,c:[{b:e.UIR+"\\s*\\(",rB:!0,r:0,c:[e.UTM]},{cN:"params",b:/\(/,e:/\)/,k:r,r:0,c:[e.ASM,e.QSM,e.CNM,e.CBCM]},e.CLCM,e.CBCM]},c,{cN:"meta",b:"@[A-Za-z]+"}]}});hljs.registerLanguage("cpp",function(t){var e={cN:"keyword",b:"\\b[a-z\\d_]*_t\\b"},r={cN:"string",v:[{b:'(u8?|U)?L?"',e:'"',i:"\\n",c:[t.BE]},{b:'(u8?|U)?R"',e:'"',c:[t.BE]},{b:"'\\\\?.",e:"'",i:"."}]},s={cN:"number",v:[{b:"\\b(0b[01']+)"},{b:"\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"},{b:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],r:0},i={cN:"meta",b:/#\s*[a-z]+\b/,e:/$/,k:{"meta-keyword":"if else elif endif define undef warning error line pragma ifdef ifndef include"},c:[{b:/\\\n/,r:0},t.inherit(r,{cN:"meta-string"}),{cN:"meta-string",b:"<",e:">",i:"\\n"},t.CLCM,t.CBCM]},a=t.IR+"\\s*\\(",c={keyword:"int float while private char catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignof constexpr decltype noexcept static_assert thread_local restrict _Bool complex _Complex _Imaginary atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return",built_in:"std string cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr",literal:"true false nullptr NULL"},n=[e,t.CLCM,t.CBCM,s,r];return{aliases:["c","cc","h","c++","h++","hpp"],k:c,i:"</",c:n.concat([i,{b:"\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",e:">",k:c,c:["self",e]},{b:t.IR+"::",k:c},{v:[{b:/=/,e:/;/},{b:/\(/,e:/\)/},{bK:"new throw return else",e:/;/}],k:c,c:n.concat([{b:/\(/,e:/\)/,k:c,c:n.concat(["self"]),r:0}]),r:0},{cN:"function",b:"("+t.IR+"[\\*&\\s]+)+"+a,rB:!0,e:/[{;=]/,eE:!0,k:c,i:/[^\w\s\*&]/,c:[{b:a,rB:!0,c:[t.TM],r:0},{cN:"params",b:/\(/,e:/\)/,k:c,r:0,c:[t.CLCM,t.CBCM,r,s,e]},t.CLCM,t.CBCM,i]}]),exports:{preprocessor:i,strings:r,k:c}}});hljs.registerLanguage("python",function(e){var r={cN:"meta",b:/^(>>>|\.\.\.) /},b={cN:"string",c:[e.BE],v:[{b:/(u|b)?r?'''/,e:/'''/,c:[r],r:10},{b:/(u|b)?r?"""/,e:/"""/,c:[r],r:10},{b:/(u|r|ur)'/,e:/'/,r:10},{b:/(u|r|ur)"/,e:/"/,r:10},{b:/(b|br)'/,e:/'/},{b:/(b|br)"/,e:/"/},e.ASM,e.QSM]},a={cN:"number",r:0,v:[{b:e.BNR+"[lLjJ]?"},{b:"\\b(0o[0-7]+)[lLjJ]?"},{b:e.CNR+"[lLjJ]?"}]},l={cN:"params",b:/\(/,e:/\)/,c:["self",r,a,b]};return{aliases:["py","gyp"],k:{keyword:"and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10 None True False",built_in:"Ellipsis NotImplemented"},i:/(<\/|->|\?)|=>/,c:[r,a,b,e.HCM,{v:[{cN:"function",bK:"def"},{cN:"class",bK:"class"}],e:/:/,i:/[${=;\n,]/,c:[e.UTM,l,{b:/->/,eW:!0,k:"None"}]},{cN:"meta",b:/^[\t ]*@/,e:/$/},{b:/\b(print|exec)\(/}]}});hljs.registerLanguage("swift",function(e){var t={keyword:"__COLUMN__ __FILE__ __FUNCTION__ __LINE__ as as! as? associativity break case catch class continue convenience default defer deinit didSet do dynamic dynamicType else enum extension fallthrough false final for func get guard if import in indirect infix init inout internal is lazy left let mutating nil none nonmutating operator optional override postfix precedence prefix private protocol Protocol public repeat required rethrows return right self Self set static struct subscript super switch throw throws true try try! try? Type typealias unowned var weak where while willSet",literal:"true false nil",built_in:"abs advance alignof alignofValue anyGenerator assert assertionFailure bridgeFromObjectiveC bridgeFromObjectiveCUnconditional bridgeToObjectiveC bridgeToObjectiveCUnconditional c contains count countElements countLeadingZeros debugPrint debugPrintln distance dropFirst dropLast dump encodeBitsAsWords enumerate equal fatalError filter find getBridgedObjectiveCType getVaList indices insertionSort isBridgedToObjectiveC isBridgedVerbatimToObjectiveC isUniquelyReferenced isUniquelyReferencedNonObjC join lazy lexicographicalCompare map max maxElement min minElement numericCast overlaps partition posix precondition preconditionFailure print println quickSort readLine reduce reflect reinterpretCast reverse roundUpToAlignment sizeof sizeofValue sort split startsWith stride strideof strideofValue swap toString transcode underestimateCount unsafeAddressOf unsafeBitCast unsafeDowncast unsafeUnwrap unsafeReflect withExtendedLifetime withObjectAtPlusZero withUnsafePointer withUnsafePointerToObject withUnsafeMutablePointer withUnsafeMutablePointers withUnsafePointer withUnsafePointers withVaList zip"},i={cN:"type",b:"\\b[A-Z][\\wÀ-ʸ']*",r:0},n=e.C("/\\*","\\*/",{c:["self"]}),r={cN:"subst",b:/\\\(/,e:"\\)",k:t,c:[]},a={cN:"number",b:"\\b([\\d_]+(\\.[\\deE_]+)?|0x[a-fA-F0-9_]+(\\.[a-fA-F0-9p_]+)?|0b[01_]+|0o[0-7_]+)\\b",r:0},o=e.inherit(e.QSM,{c:[r,e.BE]});return r.c=[a],{k:t,c:[o,e.CLCM,n,i,a,{cN:"function",bK:"func",e:"{",eE:!0,c:[e.inherit(e.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/}),{b:/</,e:/>/},{cN:"params",b:/\(/,e:/\)/,endsParent:!0,k:t,c:["self",a,o,e.CBCM,{b:":"}],i:/["']/}],i:/\[|%/},{cN:"class",bK:"struct protocol class extension enum",k:t,e:"\\{",eE:!0,c:[e.inherit(e.TM,{b:/[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/})]},{cN:"meta",b:"(@warn_unused_result|@exported|@lazy|@noescape|@NSCopying|@NSManaged|@objc|@convention|@required|@noreturn|@IBAction|@IBDesignable|@IBInspectable|@IBOutlet|@infix|@prefix|@postfix|@autoclosure|@testable|@available|@nonobjc|@NSApplicationMain|@UIApplicationMain)"},{bK:"import",e:/$/,c:[e.CLCM,n]}]}});hljs.registerLanguage("r",function(e){var r="([a-zA-Z]|\\.[a-zA-Z.])[a-zA-Z0-9._]*";return{c:[e.HCM,{b:r,l:r,k:{keyword:"function if in break next repeat else for return switch while try tryCatch stop warning require library attach detach source setMethod setGeneric setGroupGeneric setClass ...",literal:"NULL NA TRUE FALSE T F Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10"},r:0},{cN:"number",b:"0[xX][0-9a-fA-F]+[Li]?\\b",r:0},{cN:"number",b:"\\d+(?:[eE][+\\-]?\\d*)?L\\b",r:0},{cN:"number",b:"\\d+\\.(?!\\d)(?:i\\b)?",r:0},{cN:"number",b:"\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b",r:0},{cN:"number",b:"\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b",r:0},{b:"`",e:"`",r:0},{cN:"string",c:[e.BE],v:[{b:'"',e:'"'},{b:"'",e:"'"}]}]}});hljs.registerLanguage("ruby",function(e){var b="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",r={keyword:"and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",literal:"true false nil"},c={cN:"doctag",b:"@[A-Za-z]+"},a={b:"#<",e:">"},s=[e.C("#","$",{c:[c]}),e.C("^\\=begin","^\\=end",{c:[c],r:10}),e.C("^__END__","\\n$")],n={cN:"subst",b:"#\\{",e:"}",k:r},t={cN:"string",c:[e.BE,n],v:[{b:/'/,e:/'/},{b:/"/,e:/"/},{b:/`/,e:/`/},{b:"%[qQwWx]?\\(",e:"\\)"},{b:"%[qQwWx]?\\[",e:"\\]"},{b:"%[qQwWx]?{",e:"}"},{b:"%[qQwWx]?<",e:">"},{b:"%[qQwWx]?/",e:"/"},{b:"%[qQwWx]?%",e:"%"},{b:"%[qQwWx]?-",e:"-"},{b:"%[qQwWx]?\\|",e:"\\|"},{b:/\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/},{b:/<<(-?)\w+$/,e:/^\s*\w+$/}]},i={cN:"params",b:"\\(",e:"\\)",endsParent:!0,k:r},d=[t,a,{cN:"class",bK:"class module",e:"$|;",i:/=/,c:[e.inherit(e.TM,{b:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"}),{b:"<\\s*",c:[{b:"("+e.IR+"::)?"+e.IR}]}].concat(s)},{cN:"function",bK:"def",e:"$|;",c:[e.inherit(e.TM,{b:b}),i].concat(s)},{b:e.IR+"::"},{cN:"symbol",b:e.UIR+"(\\!|\\?)?:",r:0},{cN:"symbol",b:":(?!\\s)",c:[t,{b:b}],r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{b:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},{cN:"params",b:/\|/,e:/\|/,k:r},{b:"("+e.RSR+"|unless)\\s*",c:[a,{cN:"regexp",c:[e.BE,n],i:/\n/,v:[{b:"/",e:"/[a-z]*"},{b:"%r{",e:"}[a-z]*"},{b:"%r\\(",e:"\\)[a-z]*"},{b:"%r!",e:"![a-z]*"},{b:"%r\\[",e:"\\][a-z]*"}]}].concat(s),r:0}].concat(s);n.c=d,i.c=d;var l="[>?]>",o="[\\w#]+\\(\\w+\\):\\d+:\\d+>",u="(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>",w=[{b:/^\s*=>/,starts:{e:"$",c:d}},{cN:"meta",b:"^("+l+"|"+o+"|"+u+")",starts:{e:"$",c:d}}];return{aliases:["rb","gemspec","podspec","thor","irb"],k:r,i:/\/\*/,c:s.concat(w).concat(d)}});hljs.registerLanguage("cs",function(e){var i={keyword:"abstract as base bool break byte case catch char checked const continue decimal default delegate do double else enum event explicit extern finally fixed float for foreach goto if implicit in int interface internal is lock long object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this try typeof uint ulong unchecked unsafe ushort using virtual void volatile while nameof add alias ascending async await by descending dynamic equals from get global group into join let on orderby partial remove select set value var where yield",literal:"null false true"},r={cN:"string",b:'@"',e:'"',c:[{b:'""'}]},t=e.inherit(r,{i:/\n/}),a={cN:"subst",b:"{",e:"}",k:i},n=e.inherit(a,{i:/\n/}),c={cN:"string",b:/\$"/,e:'"',i:/\n/,c:[{b:"{{"},{b:"}}"},e.BE,n]},s={cN:"string",b:/\$@"/,e:'"',c:[{b:"{{"},{b:"}}"},{b:'""'},a]},o=e.inherit(s,{i:/\n/,c:[{b:"{{"},{b:"}}"},{b:'""'},n]});a.c=[s,c,r,e.ASM,e.QSM,e.CNM,e.CBCM],n.c=[o,c,t,e.ASM,e.QSM,e.CNM,e.inherit(e.CBCM,{i:/\n/})];var l={v:[s,c,r,e.ASM,e.QSM]},b=e.IR+"(<"+e.IR+"(\\s*,\\s*"+e.IR+")*>)?(\\[\\])?";return{aliases:["csharp"],k:i,i:/::/,c:[e.C("///","$",{rB:!0,c:[{cN:"doctag",v:[{b:"///",r:0},{b:"<!--|-->"},{b:"</?",e:">"}]}]}),e.CLCM,e.CBCM,{cN:"meta",b:"#",e:"$",k:{"meta-keyword":"if else elif endif define undef warning error line region endregion pragma checksum"}},l,e.CNM,{bK:"class interface",e:/[{;=]/,i:/[^\s:]/,c:[e.TM,e.CLCM,e.CBCM]},{bK:"namespace",e:/[{;=]/,i:/[^\s:]/,c:[e.inherit(e.TM,{b:"[a-zA-Z](\\.?\\w)*"}),e.CLCM,e.CBCM]},{bK:"new return throw await",r:0},{cN:"function",b:"("+b+"\\s+)+"+e.IR+"\\s*\\(",rB:!0,e:/[{;=]/,eE:!0,k:i,c:[{b:e.IR+"\\s*\\(",rB:!0,c:[e.TM],r:0},{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,k:i,r:0,c:[l,e.CNM,e.CBCM]},e.CLCM,e.CBCM]}]}});hljs.registerLanguage("php",function(e){var c={b:"\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"},i={cN:"meta",b:/<\?(php)?|\?>/},t={cN:"string",c:[e.BE,i],v:[{b:'b"',e:'"'},{b:"b'",e:"'"},e.inherit(e.ASM,{i:null}),e.inherit(e.QSM,{i:null})]},a={v:[e.BNM,e.CNM]};return{aliases:["php3","php4","php5","php6"],cI:!0,k:"and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",c:[e.HCM,e.C("//","$",{c:[i]}),e.C("/\\*","\\*/",{c:[{cN:"doctag",b:"@[A-Za-z]+"}]}),e.C("__halt_compiler.+?;",!1,{eW:!0,k:"__halt_compiler",l:e.UIR}),{cN:"string",b:/<<<['"]?\w+['"]?$/,e:/^\w+;?$/,c:[e.BE,{cN:"subst",v:[{b:/\$\w+/},{b:/\{\$/,e:/\}/}]}]},i,{cN:"keyword",b:/\$this\b/},c,{b:/(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/},{cN:"function",bK:"function",e:/[;{]/,eE:!0,i:"\\$|\\[|%",c:[e.UTM,{cN:"params",b:"\\(",e:"\\)",c:["self",c,e.CBCM,t,a]}]},{cN:"class",bK:"class interface",e:"{",eE:!0,i:/[:\(\$"]/,c:[{bK:"extends implements"},e.UTM]},{bK:"namespace",e:";",i:/[\.']/,c:[e.UTM]},{bK:"use",e:";",c:[e.UTM]},{b:"=>"},t,a]}});hljs.registerLanguage("javascript",function(e){var r="[A-Za-z$_][0-9A-Za-z$_]*",t={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},a={cN:"number",v:[{b:"\\b(0[bB][01]+)"},{b:"\\b(0[oO][0-7]+)"},{b:e.CNR}],r:0},n={cN:"subst",b:"\\$\\{",e:"\\}",k:t,c:[]},c={cN:"string",b:"`",e:"`",c:[e.BE,n]};n.c=[e.ASM,e.QSM,c,a,e.RM];var s=n.c.concat([e.CBCM,e.CLCM]);return{aliases:["js","jsx"],k:t,c:[{cN:"meta",r:10,b:/^\s*['"]use (strict|asm)['"]/},{cN:"meta",b:/^#!/,e:/$/},e.ASM,e.QSM,c,e.CLCM,e.CBCM,a,{b:/[{,]\s*/,r:0,c:[{b:r+"\\s*:",rB:!0,r:0,c:[{cN:"attr",b:r,r:0}]}]},{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBCM,e.RM,{cN:"function",b:"(\\(.*?\\)|"+r+")\\s*=>",rB:!0,e:"\\s*=>",c:[{cN:"params",v:[{b:r},{b:/\(\s*\)/},{b:/\(/,e:/\)/,eB:!0,eE:!0,k:t,c:s}]}]},{b:/</,e:/(\/\w+|\w+\/)>/,sL:"xml",c:[{b:/<\w+\s*\/>/,skip:!0},{b:/<\w+/,e:/(\/\w+|\w+\/)>/,skip:!0,c:[{b:/<\w+\s*\/>/,skip:!0},"self"]}]}],r:0},{cN:"function",bK:"function",e:/\{/,eE:!0,c:[e.inherit(e.TM,{b:r}),{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,c:s}],i:/\[|%/},{b:/\$[(.]/},e.METHOD_GUARD,{cN:"class",bK:"class",e:/[{;=]/,eE:!0,i:/[:"\[\]]/,c:[{bK:"extends"},e.UTM]},{bK:"constructor",e:/\{/,eE:!0}],i:/#(?!!)/}});hljs.registerLanguage("cal",function(e){var r="div mod in and or not xor asserterror begin case do downto else end exit for if of repeat then to until while with var",t="false true",c=[e.CLCM,e.C(/\{/,/\}/,{r:0}),e.C(/\(\*/,/\*\)/,{r:10})],n={cN:"string",b:/'/,e:/'/,c:[{b:/''/}]},o={cN:"string",b:/(#\d+)+/},a={cN:"number",b:"\\b\\d+(\\.\\d+)?(DT|D|T)",r:0},i={cN:"string",b:'"',e:'"'},d={cN:"function",bK:"procedure",e:/[:;]/,k:"procedure|10",c:[e.TM,{cN:"params",b:/\(/,e:/\)/,k:r,c:[n,o]}].concat(c)},s={cN:"class",b:"OBJECT (Table|Form|Report|Dataport|Codeunit|XMLport|MenuSuite|Page|Query) (\\d+) ([^\\r\\n]+)",rB:!0,c:[e.TM,d]};return{cI:!0,k:{keyword:r,literal:t},i:/\/\*/,c:[n,o,a,i,e.NM,s,d]}});

