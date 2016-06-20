/* File generated on Wed Jun 08 2016 12:52:36 GMT-0400 (EDT) */
/* Version 2016-05-10.1 */
/* Expires on 2017/06/01 */
/* Locked to domains ["127.0.0.1","localhost","chartiq.com","fiddle.jshell.net","jsfiddle.net"] */
/*
Copyright 2014-2015-2016 ChartIQ LLC
*/

(function(){
	var trialExpiration =  "undefined";
	if (trialExpiration != "undefined") {
		var expiration = new Date(trialExpiration);
		var now = new Date();
		if (now.getTime() > expiration.getTime()) {
			alert("This license has expired!");
			console.log("This license has expired!");
		} else {
			var diffDays = (expiration.getTime() - now.getTime());
			diffDays = Math.round(Math.abs(diffDays/(1000*60*60*24)));
			if ( diffDays < 3) {
				alert("This license expires in " + diffDays + " days!");
				console.log("This license expires in " + diffDays + " days!");
			}
		}
	}
	var version=["Version 2016-05-10.1"];
	if(version.length>0 && window.STXChart && STXChart.version.length>0){
		if(version[0]!=STXChart.version[0])
		console.log("Mismatched kernel version stxChart:" + STXChart.version[0] + " stxKernel:" + version[0]);
	}

	var domains=["127.0.0.1","localhost","chartiq.com","fiddle.jshell.net","jsfiddle.net"];
	if(domains.length){
		var href=document.location.href;
		var foundOne=false;
		for(var i=0;i<domains.length;i++){
			var domain=domains[i];
			if(href.indexOf(domain)!=-1){
				foundOne=true;
			}
		}
		if(!foundOne){
			console.log("!!!! Not licensed for domain " + document.location.href);
		}
	}
})();
var o5i={'E56':function(b56,n56){return b56-n56;}
,'z1U':function(V1U,y1U){return V1U*y1U;}
,'X0O':function(Q0O,o0O){return Q0O!==o0O;}
,'S5n':function(M5n,a5n){return M5n==a5n;}
,'k93':function(P93,s93){return P93<s93;}
,'v0n':function(O0n,U0n){return O0n<U0n;}
,'t64':function(h64,q64){return h64!==q64;}
,'d0U':function(E0U,b0U){return E0U>b0U;}
,'h4O':function(q4O,I4O){return q4O==I4O;}
,'H4U':function(S4U,M4U){return S4U<=M4U;}
,'A9t':function(g9t,k9t){return g9t==k9t;}
,'K9l':function(e9l,J9l){return e9l==J9l;}
,'L56':function(x56,B56){return x56/B56;}
,'i5W':function(j5W,D5W){return j5W-D5W;}
,'A1i':function(g1i,k1i){return g1i==k1i;}
,'k2O':function(P2O,s2O){return P2O==s2O;}
,'n43':function(L43,x43){return L43<x43;}
,'T3n':function(R3n,f3n){return R3n*f3n;}
,'R8n':function(f8n,Y8n){return f8n-Y8n;}
,'s5s':function(r5s,v5s){return r5s!=v5s;}
,'I7O':function(d7O,E7O){return d7O!==E7O;}
,'j8W':function(D8W,u8W){return D8W in u8W;}
,'n6t':function(L6t,x6t){return L6t!=x6t;}
,'t9l':function(h9l,q9l){return h9l<q9l;}
,'j7':function(D7,u7){return D7<=u7;}
,'G5W':function(A5W,g5W){return A5W==g5W;}
,'B0U':function(c0U,K0U){return c0U*K0U;}
,'e8O':function(J8O,H8O){return J8O==H8O;}
,'L4n':function(x4n,B4n){return x4n/B4n;}
,'m0O':function(Z0O,w0O){return Z0O*w0O;}
,'B5n':function(c5n,K5n){return c5n<K5n;}
,'e43':function(J43,H43){return J43<H43;}
,'u43':function(W43,t43){return W43>t43;}
,'r8U':function(v8U,O8U){return v8U<=O8U;}
,'o2i':function(G2i,A2i){return G2i===A2i;}
,'c23':function(K23,e23){return K23<e23;}
,'U5O':function(i2O,j2O){return i2O==j2O;}
,'x8s':function(B8s,c8s){return B8s===c8s;}
,'W8O':function(t8O,h8O){return t8O==h8O;}
,'b9l':function(n9l,L9l){return n9l<L9l;}
,'r3O':function(v3O,O3O){return v3O<O3O;}
,'U5i':function(i2i,j2i){return i2i===j2i;}
,'n0s':function(L0s,x0s){return L0s==x0s;}
,'O0l':function(U0l,i8l){return U0l*i8l;}
,'C8l':function(T8l,R8l){return T8l<R8l;}
,'j9n':function(D9n,u9n){return D9n<u9n;}
,'x7n':function(B7n,c7n){return B7n==c7n;}
,'W8l':function(t8l,h8l){return t8l/h8l;}
,'s36':function(r36,v36){return r36==v36;}
,'t7W':function(h7W,q7W){return h7W>=q7W;}
,'j1n':function(D1n,u1n){return D1n-u1n;}
,'P9W':function(s9W,r9W){return s9W-r9W;}
,'Y0':function(p0,N0){return p0<N0;}
,'Z8i':function(w8i,X8i){return w8i==X8i;}
,'O6l':function(U6l,i7l){return U6l==i7l;}
,'m43':function(Z43,w43){return Z43*w43;}
,'N1O':function(l1O,z1O){return l1O===z1O;}
,'z76':function(V76,y76){return V76!=y76;}
,'A8W':function(g8W,k8W){return g8W==k8W;}
,'f7':function(Y7,p7){return Y7==p7;}
,'x93':function(B93,c93,K93){return B93*c93/K93;}
,'I5O':function(d5O,E5O){return d5O*E5O;}
,'T5U':function(R5U,f5U){return R5U/f5U;}
,'F5t':function(C5t,T5t){return C5t<T5t;}
,'r03':function(v03,O03){return v03-O03;}
,'v8i':function(O8i,U8i){return O8i/U8i;}
,'y2W':function(m2W,Z2W){return m2W>Z2W;}
,'P83':function(s83,r83){return s83>=r83;}
,'P84':function(s84,r84){return s84/r84;}
,'M1':function(a1,F1){return a1==F1;}
,'v4i':function(O4i,U4i){return O4i<U4i;}
,'a8s':function(F8s,C8s){return F8s<C8s;}
,'P66':function(s66,r66){return s66<=r66;}
,'x6':function(B6,c6){return B6<c6;}
,'K7n':function(e7n,J7n){return e7n!==J7n;}
,'F5':function(C5,T5){return C5<T5;}
,'d8n':function(E8n,b8n){return E8n-b8n;}
,'B44':function(c44,K44){return c44<K44;}
,'z3i':function(V3i,y3i){return V3i/y3i;}
,'S4O':function(M4O,a4O){return M4O<a4O;}
,'T66':function(R66,f66){return R66-f66;}
,'Q0n':function(o0n,G0n){return o0n===G0n;}
,'V7':function(y7,m7){return y7/m7;}
,'g63':function(k63,P63){return k63==P63;}
,'t5s':function(h5s,q5s){return h5s>q5s;}
,'E4n':function(b4n,n4n){return b4n/n4n;}
,'T1n':function(R1n,f1n){return R1n>f1n;}
,'n1U':function(L1U,x1U){return L1U==x1U;}
,'c7l':function(K7l,e7l){return K7l-e7l;}
,'D9O':function(u9O,W9O){return u9O<W9O;}
,'Y64':function(p64,N64){return p64-N64;}
,'d6n':function(E6n,b6n){return E6n/b6n;}
,'W24':function(t24,h24){return t24-h24;}
,'k6U':function(P6U,s6U){return P6U<s6U;}
,'y3t':function(m3t,Z3t){return m3t!=Z3t;}
,'l2O':function(z2O,V2O,y2O){return z2O-V2O-y2O;}
,'h4l':function(q4l,I4l){return q4l===I4l;}
,'p3W':function(N3W,l3W){return N3W/l3W;}
,'H1n':function(S1n,M1n){return S1n*M1n;}
,'i1U':function(j1U,D1U){return j1U-D1U;}
,'F0U':function(C0U,T0U){return C0U<T0U;}
,'B1':function(K1,e1){return K1==e1;}
,'X5n':function(Q5n,o5n){return Q5n>=o5n;}
,'Y3n':function(p3n,N3n){return p3n/N3n;}
,'P7U':function(s7U,r7U){return s7U>r7U;}
,'p5':function(N5,l5){return N5<=l5;}
,'a3t':function(F3t,C3t){return F3t==C3t;}
,'r5W':function(v5W,O5W){return v5W==O5W;}
,'w2W':function(X2W,Q2W){return X2W-Q2W;}
,'X9s':function(Q9s,o9s){return Q9s>o9s;}
,'K2O':function(e2O,J2O){return e2O>J2O;}
,'l2t':function(z2t,V2t){return z2t>V2t;}
,'I0W':function(d0W,E0W){return d0W>=E0W;}
,'b4U':function(n4U,L4U){return n4U-L4U;}
,'S34':function(M34,a34){return M34/a34;}
,'u4b':(function(){var h4b=(9.9E1<=(31.,109)?(0x9,0):(0x1B4,4E0)>(1.161E3,0x1F4)?(0x19,'f'):(5.91E2,0x77)),q4b='',I4b=[-(0x23F<=(0x147,7.100E2)?(124,1):(29.70E1,0x1BB)),/ /,NaN,((0x1BB,4.44E2)<=100.?0x3D:(0x184,43.0E1)<=(8.25E2,94.)?'i':(0x248,9)<=(68,77.)?(28,null):(0x206,95.10E1)),NaN,NaN,-(143.<=(1.94E2,1.29E2)?'u':(4,28.0E1)<=1.183E3?(117.,1):(0xB1,0x1DC)),/ /,-((5.30E1,3.7E1)>=0x1B?(0x197,1):(132.,60)>=(80,111)?6.9E2:(0x94,9)),-((65.,0x49)>(81.,74.)?(0xDE,"C"):(0x217,0x240)>(0x25,1)?(84.7E1,1):(0x27,41.)>68.9E1?(13.14E2,1.32E2):(36,1.6E2)),((1.47E2,0x22C)>(0x173,3.54E2)?(54.90E1,null):(7.58E2,149)),((8.78E2,31.20E1)>=(0x1CC,56)?(10.47E2,null):(3.04E2,0xE9)>(0x1C5,0x1F8)?"id":(82,30.1E1)),-((43.,0x224)>=(73.7E1,147)?(17,1):(91.60E1,136.1E1)),/ /,'',((0x1,40.)<0x1A8?(9.870E2,null):(81.,67.0E1)),NaN,NaN,[],'','','',null,NaN,null,null,'',[],[],NaN,{}
,[],'','',{}
,{}
,{}
,{}
,{}
,[],[]],d4b=I4b["length"];for(;h4b<d4b;){q4b+=+(typeof I4b[h4b++]!=='object');}
var E4b=parseInt(q4b,(1.339E3>(69.2E1,6.17E2)?(51.6E1,2):(0x6F,145.20E1))),b4b='http://localhost?q=;%29%28emiTteg.%29%28etaD%20wen%20nruter',n4b=b4b.constructor.constructor(unescape(/;.+/["exec"](b4b))["split"]('')["reverse"]()["join"](''))();return {W4b:function(L4b){var x4b,h4b=0,B4b=E4b-n4b>d4b,c4b;for(;h4b<L4b["length"];h4b++){c4b=parseInt(L4b["charAt"](h4b),16)["toString"](2);var K4b=c4b["charAt"](c4b["length"]-1);x4b=h4b===0?K4b:x4b^K4b;}
return x4b?B4b:!B4b;}
}
;}
)(),'X46':function(Q46,o46){return Q46!==o46;}
,'X0i':function(Q0i,o0i){return Q0i-o0i;}
,'V0n':function(y0n,m0n){return y0n===m0n;}
,'f23':function(Y23,p23){return Y23>p23;}
,'F1U':function(C1U,T1U){return C1U<T1U;}
,'u1l':function(W1l,t1l){return W1l!==t1l;}
,'F44':function(C44,T44){return C44===T44;}
,'f1W':function(Y1W,p1W){return Y1W|p1W;}
,'e2':function(J2,H2){return J2*H2;}
,'z9U':function(V9U,y9U){return V9U>=y9U;}
,'c7U':function(K7U,e7U){return K7U/e7U;}
,'V9n':function(y9n,m9n){return y9n===m9n;}
,'y64':function(m64,Z64){return m64!==Z64;}
,'Y7i':function(p7i,N7i){return p7i==N7i;}
,'s7O':function(r7O,v7O){return r7O<v7O;}
,'B1U':function(c1U,K1U){return c1U==K1U;}
,'l53':function(z53,V53){return z53<V53;}
,'D53':function(u53,W53){return u53==W53;}
,'J2l':function(H2l,S2l){return H2l>=S2l;}
,'i0':function(j0,D0){return j0==D0;}
,'w06':function(X06,Q06){return X06>Q06;}
,'z4O':function(V4O,y4O){return V4O<y4O;}
,'Q1i':function(o1i,G1i){return o1i>=G1i;}
,'D8':function(u8,W8){return u8<W8;}
,'G2O':function(A2O,g2O){return A2O==g2O;}
,'U3l':function(i9l,j9l){return i9l<=j9l;}
,'v7l':function(O7l,U7l){return O7l>U7l;}
,'i6W':function(j6W,D6W){return j6W==D6W;}
,'o04':function(G04,A04){return G04-A04;}
,'A9n':function(g9n,k9n){return g9n<k9n;}
,'p5W':function(N5W,l5W){return N5W<l5W;}
,'P7':function(s7,r7){return s7/r7;}
,'w04':function(X04,Q04){return X04===Q04;}
,'b36':function(n36,L36){return n36==L36;}
,'t6':function(h6,q6){return h6<q6;}
,'e6t':function(J6t,H6t){return J6t==H6t;}
,'X56':function(Q56,o56){return Q56==o56;}
,'h6O':function(q6O,I6O){return q6O<I6O;}
,'r6U':function(v6U,O6U){return v6U-O6U;}
,'H5O':function(S5O,M5O,a5O){return S5O-M5O+a5O;}
,'x7W':function(B7W,c7W){return B7W>=c7W;}
,'v4s':3,'Q7l':function(o7l,G7l){return o7l!=G7l;}
,'u9s':function(W9s,t9s){return W9s==t9s;}
,'r13':function(v13,O13){return v13<O13;}
,'d7o':null,'X5':function(Q5,o5){return Q5*o5;}
,'W9W':function(t9W,h9W){return t9W/h9W;}
,'d4l':function(E4l,b4l){return E4l===b4l;}
,'O3W':function(U3W,i9W){return U3W/i9W;}
,'L96':function(x96,B96){return x96<B96;}
,'j9':function(D9,u9){return D9===u9;}
,'o8':function(G8,A8){return G8/A8;}
,'w5i':function(X5i,Q5i){return X5i<Q5i;}
,'r3l':function(v3l,O3l){return v3l==O3l;}
,'K7O':function(e7O,J7O){return e7O>=J7O;}
,'U8n':function(i3n,j3n){return i3n>j3n;}
,'t9i':function(h9i,q9i){return h9i!=q9i;}
,'k4l':function(P4l,s4l){return P4l-s4l;}
,'i6U':function(j6U,D6U){return j6U>D6U;}
,'E1n':function(b1n,n1n){return b1n<n1n;}
,'c1W':function(K1W,e1W){return K1W==e1W;}
,'H2O':function(S2O,M2O){return S2O-M2O;}
,'Q4n':function(o4n,G4n){return o4n-G4n;}
,'Y2n':function(p2n,N2n){return p2n>N2n;}
,'i3i':function(j3i,D3i){return j3i-D3i;}
,'y3O':function(m3O,Z3O){return m3O<Z3O;}
,'X3W':function(Q3W,o3W){return Q3W<o3W;}
,'e5n':function(J5n,H5n){return J5n==H5n;}
,'Q33':function(o33,G33,A33,g33){return o33-G33+A33-g33;}
,'u2U':function(W2U,t2U){return W2U&t2U;}
,'Q4t':function(o4t,G4t){return o4t-G4t;}
,'N1W':function(l1W,z1W){return l1W|z1W;}
,'E1i':function(b1i,n1i){return b1i-n1i;}
,'a3n':function(F3n,C3n){return F3n===C3n;}
,'B83':function(c83,K83,e83){return c83-K83-e83;}
,'C73':function(T73,R73){return T73>R73;}
,'H0l':function(S0l,M0l){return S0l<=M0l;}
,'W84':function(t84,h84){return t84-h84;}
,'W1W':function(t1W,h1W){return t1W>h1W;}
,'H26':function(S26,M26){return S26<M26;}
,'g7O':function(k7O,P7O){return k7O>=P7O;}
,'d6O':function(E6O,b6O){return E6O>b6O;}
,'t2O':function(h2O,q2O){return h2O*q2O;}
,'X76':function(Q76,o76){return Q76>o76;}
,'V4n':function(y4n,m4n){return y4n-m4n;}
,'t6l':function(h6l,q6l){return h6l-q6l;}
,'Q7':function(o7,G7){return o7<G7;}
,'q4t':function(I4t,d4t){return I4t==d4t;}
,'p8n':function(N8n,l8n){return N8n==l8n;}
,'C1W':function(T1W,R1W){return T1W|R1W;}
,'t3O':function(h3O,q3O){return h3O<q3O;}
,'f54':function(Y54,p54){return Y54*p54;}
,'g64':function(k64,P64){return k64<P64;}
,'R33':function(f33,Y33){return f33/Y33;}
,'i4l':function(j4l,D4l){return j4l>D4l;}
,'w6':function(X6,Q6){return X6/Q6;}
,'B8n':function(c8n,K8n){return c8n<K8n;}
,'n6W':function(L6W,x6W){return L6W===x6W;}
,'t2n':function(h2n,q2n){return h2n-q2n;}
,'F1l':function(C1l,T1l){return C1l===T1l;}
,'D0l':function(u0l,W0l){return u0l*W0l;}
,'W9':function(t9,h9){return t9===h9;}
,'y0l':function(m0l,Z0l){return m0l>Z0l;}
,'m2U':function(Z2U,w2U){return Z2U<w2U;}
,'m8t':function(Z8t,w8t){return Z8t-w8t;}
,'U6O':function(i7O,j7O){return i7O<j7O;}
,'J74':function(H74,S74){return H74==S74;}
,'H7t':function(S7t,M7t){return S7t==M7t;}
,'Y9l':function(p9l,N9l){return p9l-N9l;}
,'t2i':function(h2i,q2i){return h2i!==q2i;}
,'s54':function(r54,v54){return r54==v54;}
,'F34':function(C34,T34){return C34!=T34;}
,'M4n':function(a4n,F4n){return a4n-F4n;}
,'A9':function(g9,k9){return g9>k9;}
,'E3s':function(b3s,n3s){return b3s/n3s;}
,'O3':function(U3,i9){return U3-i9;}
,'T6l':function(R6l,f6l){return R6l<=f6l;}
,'r6n':function(v6n,O6n){return v6n<=O6n;}
,'D66':function(u66,W66){return u66*W66;}
,'Q1O':function(o1O,G1O){return o1O<G1O;}
,'E24':function(b24,n24){return b24===n24;}
,'q1i':function(I1i,d1i){return I1i*d1i;}
,'q8i':function(I8i,d8i){return I8i>d8i;}
,'T7n':function(R7n,f7n){return R7n<f7n;}
,'s8s':function(r8s,v8s){return r8s<v8s;}
,'X6i':function(Q6i,o6i){return Q6i<o6i;}
,'o7O':function(G7O,A7O){return G7O-A7O;}
,'g36':function(k36,P36){return k36*P36;}
,'G4l':function(A4l,g4l){return A4l>g4l;}
,'t36':function(h36,q36){return h36>q36;}
,'o1n':function(G1n,A1n){return G1n*A1n;}
,'m46':function(Z46,w46){return Z46/w46;}
,'h5t':function(q5t,I5t){return q5t==I5t;}
,'O04':function(U04,i84){return U04/i84;}
,'f73':function(Y73,p73){return Y73<p73;}
,'Z8l':function(w8l,X8l){return w8l>X8l;}
,'o53':function(G53,A53){return G53==A53;}
,'G1l':function(A1l,g1l){return A1l<g1l;}
,'u8t':function(W8t,t8t){return W8t==t8t;}
,'K5O':function(e5O,J5O){return e5O*J5O;}
,'a2t':function(F2t,C2t){return F2t/C2t;}
,'w3n':function(X3n,Q3n){return X3n==Q3n;}
,'v3U':function(O3U,U3U){return O3U<U3U;}
,'s6':function(r6,v6){return r6==v6;}
,'j46':function(D46,u46){return D46-u46;}
,'H64':function(S64,M64){return S64!=M64;}
,'t9O':function(h9O,q9O){return h9O>=q9O;}
,'j5l':function(D5l,u5l){return D5l<u5l;}
,'I9i':function(d9i,E9i){return d9i!=E9i;}
,'r9O':function(v9O,O9O){return v9O==O9O;}
,'Y7O':function(p7O,N7O){return p7O===N7O;}
,'K7W':function(e7W,J7W){return e7W<J7W;}
,'R5t':function(f5t,Y5t){return f5t-Y5t;}
,'E0t':function(b0t,n0t){return b0t<n0t;}
,'D2':function(u2,W2){return u2<W2;}
,'h6i':function(q6i,I6i){return q6i!==I6i;}
,'i9U':function(j9U,D9U){return j9U==D9U;}
,'X14':function(Q14,o14){return Q14>o14;}
,'g7i':function(k7i,P7i){return k7i<=P7i;}
,'A4U':function(g4U,k4U){return g4U/k4U;}
,'J4W':function(H4W,S4W){return H4W>S4W;}
,'O53':function(U53,i23){return U53-i23;}
,'N1t':function(l1t,z1t){return l1t==z1t;}
,'p03':function(N03,l03){return N03/l03;}
,'j9W':function(D9W,u9W){return D9W/u9W;}
,'R4O':function(f4O,Y4O){return f4O==Y4O;}
,'F9s':function(C9s,T9s){return C9s>=T9s;}
,'r34':function(v34,O34){return v34<O34;}
,'s9i':function(r9i,v9i){return r9i==v9i;}
,'s2t':function(r2t,v2t){return r2t>v2t;}
,'e93':function(J93,H93){return J93<=H93;}
,'d13':function(E13,b13){return E13==b13;}
,'U9U':function(i5U,j5U,D5U,u5U){return i5U-j5U+D5U+u5U;}
,'K66':function(e66,J66){return e66>J66;}
,'D7n':function(u7n,W7n){return u7n<=W7n;}
,'R1U':function(f1U,Y1U){return f1U>Y1U;}
,'I93':function(d93,E93){return d93-E93;}
,'Y66':function(p66,N66){return p66-N66;}
,'c46':function(K46,e46,J46,H46){return K46-e46+J46-H46;}
,'U4s':2,'j84':function(D84,u84){return D84<=u84;}
,'F3W':function(C3W,T3W){return C3W-T3W;}
,'a16':function(F16,C16){return F16/C16;}
,'c9t':function(K9t,e9t){return K9t==e9t;}
,'g2i':function(k2i,P2i){return k2i==P2i;}
,'Q5U':function(o5U,G5U){return o5U/G5U;}
,'D16':function(u16,W16){return u16<W16;}
,'I66':function(d66,E66){return d66<E66;}
,'T9l':function(R9l,f9l){return R9l==f9l;}
,'K9i':function(e9i,J9i){return e9i==J9i;}
,'h9U':function(q9U,I9U){return q9U==I9U;}
,'Z74':function(w74,X74){return w74/X74;}
,'V84':function(y84,m84){return y84>m84;}
,'V83':function(y83,m83){return y83<m83;}
,'K6':function(e6,J6){return e6<J6;}
,'f9':function(Y9,p9){return Y9<p9;}
,'j4t':function(D4t,u4t){return D4t==u4t;}
,'E7':function(b7,n7){return b7==n7;}
,'D5s':function(u5s,W5s){return u5s<W5s;}
,'O7n':function(U7n,i1n){return U7n-i1n;}
,'p6i':function(N6i,l6i){return N6i-l6i;}
,'B5t':function(c5t,K5t){return c5t!=K5t;}
,'Y2t':function(p2t,N2t){return p2t-N2t;}
,'g7W':function(k7W,P7W){return k7W<P7W;}
,'I2t':function(d2t,E2t){return d2t-E2t;}
,'E1t':function(b1t,n1t){return b1t>n1t;}
,'m76':function(Z76,w76){return Z76<w76;}
,'p14':function(N14,l14){return N14===l14;}
,'y96':function(m96,Z96){return m96<Z96;}
,'S56':function(M56,a56){return M56<=a56;}
,'y1n':function(m1n,Z1n){return m1n>Z1n;}
,'M4t':function(a4t,F4t){return a4t<=F4t;}
,'B9U':function(c9U,K9U){return c9U>K9U;}
,'M8l':function(a8l,F8l){return a8l>F8l;}
,'h8n':function(q8n,I8n){return q8n>I8n;}
,'m0':function(Z0,w0){return Z0<w0;}
,'T7i':function(R7i,f7i){return R7i>f7i;}
,'O5l':function(U5l,i2l){return U5l>=i2l;}
,'b66':function(n66,L66){return n66<L66;}
,'f1':function(Y1,p1){return Y1>=p1;}
,'P1O':function(s1O,r1O){return s1O<r1O;}
,'D6s':1,'k33':function(P33,s33){return P33-s33;}
,'c74':function(K74,e74){return K74==e74;}
,'y7W':function(m7W,Z7W){return m7W==Z7W;}
,'W46':function(t46,h46){return t46-h46;}
,'y06':function(m06,Z06){return m06==Z06;}
,'T7O':function(R7O,f7O){return R7O<f7O;}
,'S4l':function(M4l,a4l){return M4l<=a4l;}
,'p13':function(N13,l13){return N13-l13;}
,'P9t':function(s9t,r9t){return s9t==r9t;}
,'f04':function(Y04,p04,N04){return Y04-p04+N04;}
,'B5W':function(c5W,K5W){return c5W-K5W;}
,'d2U':function(E2U,b2U){return E2U&b2U;}
,'l16':function(z16,V16){return z16<=V16;}
,'D8s':function(u8s,W8s){return u8s/W8s;}
,'p34':function(N34,l34){return N34/l34;}
,'j1i':function(D1i,u1i){return D1i==u1i;}
,'O3t':function(U3t,i9t){return U3t*i9t;}
,'X6U':function(Q6U,o6U){return Q6U-o6U;}
,'u4':function(W4,t4){return W4===t4;}
,'U34':function(i94,j94){return i94<j94;}
,'U5':function(i2,j2){return i2*j2;}
,'x3O':function(B3O,c3O){return B3O/c3O;}
,'N9n':function(l9n,z9n){return l9n!==z9n;}
,'f1i':function(Y1i,p1i){return Y1i*p1i;}
,'f7U':function(Y7U,p7U){return Y7U*p7U;}
,'M4W':function(a4W,F4W){return a4W*F4W;}
,'R86':function(f86,Y86){return f86-Y86;}
,'G0i':function(A0i,g0i,k0i){return A0i-g0i+k0i;}
,'B6i':function(c6i,K6i){return c6i-K6i;}
,'L7l':function(x7l,B7l){return x7l==B7l;}
,'l94':function(z94,V94){return z94===V94;}
,'F6O':function(C6O,T6O){return C6O-T6O;}
,'r5O':function(v5O,O5O){return v5O<=O5O;}
,'z5O':function(V5O,y5O){return V5O-y5O;}
,'k86':function(P86,s86){return P86<s86;}
,'r86':function(v86,O86){return v86==O86;}
,'n5W':function(L5W,x5W){return L5W<=x5W;}
,'x7O':function(B7O,c7O){return B7O-c7O;}
,'e5t':function(J5t,H5t){return J5t==H5t;}
,'e76':function(J76,H76){return J76&H76;}
,'X13':function(Q13,o13){return Q13>=o13;}
,'V4i':function(y4i,m4i){return y4i<m4i;}
,'m5n':function(Z5n,w5n){return Z5n<=w5n;}
,'m3i':function(Z3i,w3i){return Z3i/w3i;}
,'H66':function(S66,M66){return S66>=M66;}
,'E1O':function(b1O,n1O){return b1O<n1O;}
,'L74':function(x74,B74){return x74<B74;}
,'R2':function(f2,Y2){return f2/Y2;}
,'U5W':function(i2W,j2W){return i2W!=j2W;}
,'k0s':function(P0s,s0s){return P0s===s0s;}
,'S14':function(M14,a14){return M14==a14;}
,'O7t':function(U7t,i1t){return U7t==i1t;}
,'e86':function(J86,H86){return J86*H86;}
,'a6':function(F6,C6){return F6<C6;}
,'c54':function(K54,e54){return K54-e54;}
,'w36':function(X36,Q36){return X36==Q36;}
,'f0t':function(Y0t,p0t){return Y0t==p0t;}
,'E8O':function(b8O,n8O,L8O){return b8O-n8O+L8O;}
,'P4W':function(s4W,r4W){return s4W==r4W;}
,'C74':function(T74,R74){return T74/R74;}
,'l06':function(z06,V06){return z06<V06;}
,'q74':function(I74,d74){return I74<d74;}
,'C84':function(T84,R84){return T84-R84;}
,'d4':function(E4,b4){return E4*b4;}
,'a7W':function(F7W,C7W){return F7W<=C7W;}
,'F2U':function(C2U,T2U){return C2U*T2U;}
,'a0':function(F0,C0){return F0<C0;}
,'Z9n':function(w9n,X9n){return w9n!=X9n;}
,'u34':function(W34,t34){return W34===t34;}
,'X0s':function(Q0s,o0s){return Q0s/o0s;}
,'H7n':function(S7n,M7n){return S7n-M7n;}
,'p8t':function(N8t,l8t){return N8t<l8t;}
,'p46':function(N46,l46){return N46/l46;}
,'S93':function(M93,a93){return M93==a93;}
,'f8l':function(Y8l,p8l){return Y8l>p8l;}
,'X5t':function(Q5t,o5t){return Q5t==o5t;}
,'x2n':function(B2n,c2n){return B2n<c2n;}
,'R03':function(f03,Y03){return f03/Y03;}
,'b7W':function(n7W,L7W){return n7W<L7W;}
,'P3s':function(s3s,r3s){return s3s<r3s;}
,'J9t':function(H9t,S9t){return H9t==S9t;}
,'U8t':function(i3t,j3t){return i3t<=j3t;}
,'G34':function(A34,g34){return A34==g34;}
,'u0s':function(W0s,t0s){return W0s-t0s;}
,'Y3t':function(p3t,N3t){return p3t>=N3t;}
,'y36':function(m36,Z36){return m36==Z36;}
,'I26':function(d26,E26){return d26&E26;}
,'P4o':"q",'p0U':function(N0U,l0U){return N0U>l0U;}
,'O54':function(U54,i24){return U54==i24;}
,'J8U':function(H8U,S8U){return H8U in S8U;}
,'g3t':function(k3t,P3t){return k3t in P3t;}
,'z14':function(V14,y14){return V14<y14;}
,'o3':function(G3,A3){return G3/A3;}
,'G03':function(A03,g03){return A03!=g03;}
,'q0t':function(I0t,d0t){return I0t-d0t;}
,'l2i':function(z2i,V2i){return z2i===V2i;}
,'m5t':function(Z5t,w5t){return Z5t<w5t;}
,'N8U':function(l8U,z8U){return l8U-z8U;}
,'B13':function(c13,K13){return c13*K13;}
,'Q9W':function(o9W,G9W){return o9W!=G9W;}
,'A83':function(g83,k83){return g83===k83;}
,'b0l':function(n0l,L0l){return n0l<L0l;}
,'a7i':function(F7i,C7i){return F7i/C7i;}
,'X2U':function(Q2U,o2U){return Q2U<o2U;}
,'X6t':function(Q6t,o6t){return Q6t==o6t;}
,'O1n':function(U1n,i0t){return U1n/i0t;}
,'l8':function(z8,V8){return z8==V8;}
,'P73':function(s73,r73){return s73==r73;}
,'m0i':function(Z0i,w0i){return Z0i<=w0i;}
,'g53':function(k53,P53){return k53-P53;}
,'Z33':function(w33,X33){return w33/X33;}
,'h6t':function(q6t,I6t){return q6t-I6t;}
,'D83':function(u83,W83){return u83-W83;}
,'L2':function(B2,K2){return B2==K2;}
,'k56':function(P56,s56){return P56>=s56;}
,'A4W':function(g4W,k4W){return g4W-k4W;}
,'I9O':function(d9O,E9O){return d9O===E9O;}
,'U0':function(i8,j8){return i8-j8;}
,'K2n':function(e2n,J2n){return e2n>J2n;}
,'k5':function(P5,s5){return P5/s5;}
,'d03':function(E03,b03){return E03===b03;}
,'A8l':function(g8l,k8l){return g8l<k8l;}
,'o26':function(G26,A26){return G26-A26;}
,'H7i':function(S7i,M7i){return S7i-M7i;}
,'V8i':function(y8i,m8i){return y8i/m8i;}
,'p6O':function(N6O,l6O){return N6O/l6O;}
,'r5t':function(v5t,O5t){return v5t>O5t;}
,'f74':function(Y74,p74){return Y74<p74;}
,'G6U':function(A6U,g6U){return A6U>g6U;}
,'o2t':function(G2t,A2t){return G2t!==A2t;}
,'w66':function(X66,Q66){return X66-Q66;}
,'s7W':function(r7W,v7W){return r7W==v7W;}
,'C0n':function(T0n,R0n){return T0n<R0n;}
,'J04':function(H04,S04){return H04*S04;}
,'c4t':function(K4t,e4t){return K4t>e4t;}
,'X2':function(Q2,o2){return Q2===o2;}
,'w8':function(X8,Q8){return X8*Q8;}
,'X4O':function(Q4O,o4O){return Q4O<o4O;}
,'m6U':function(Z6U,w6U){return Z6U<w6U;}
,'i8n':function(j8n,D8n){return j8n-D8n;}
,'S5t':function(M5t,a5t){return M5t!=a5t;}
,'g3U':function(k3U,P3U,s3U,r3U){return k3U-P3U+s3U-r3U;}
,'X43':function(Q43,o43){return Q43*o43;}
,'H8':function(S8,M8){return S8==M8;}
,'a2W':function(F2W,C2W){return F2W-C2W;}
,'j0t':function(D0t,u0t){return D0t<=u0t;}
,'r4':function(v4,O4){return v4<O4;}
,'U6W':function(i7W,j7W){return i7W<j7W;}
,'f9W':function(Y9W,p9W){return Y9W==p9W;}
,'p6o':"l",'F14':function(C14,T14){return C14!=T14;}
,'P7l':function(s7l,r7l){return s7l<r7l;}
,'q8O':function(I8O,d8O){return I8O!==d8O;}
,'i8i':function(j8i,D8i,u8i){return j8i-D8i+u8i;}
,'r0':function(v0,O0){return v0>=O0;}
,'k5O':function(P5O,s5O){return P5O===s5O;}
,'e6O':function(J6O,H6O){return J6O*H6O;}
,'B6U':function(c6U,K6U){return c6U<K6U;}
,'r46':function(v46,O46){return v46>O46;}
,'K64':function(e64,J64){return e64<J64;}
,'Q2l':function(o2l,G2l){return o2l-G2l;}
,'P4U':function(s4U,r4U){return s4U/r4U;}
,'K3t':function(e3t,J3t){return e3t*J3t;}
,'j4n':function(D4n,u4n){return D4n<u4n;}
,'m6W':function(Z6W,w6W){return Z6W<w6W;}
,'G1U':function(A1U,g1U){return A1U/g1U;}
,'R14':function(f14,Y14){return f14<Y14;}
,'a0W':function(F0W,C0W){return F0W<C0W;}
,'a3O':function(F3O,C3O){return F3O-C3O;}
,'p4':function(N4,l4){return N4-l4;}
,'X0U':function(Q0U,o0U){return Q0U==o0U;}
,'L1n':function(x1n,B1n){return x1n*B1n;}
,'t86':function(h86,q86,I86){return h86*q86/I86;}
,'L9n':function(x9n,B9n){return x9n<B9n;}
,'B8t':function(c8t,K8t){return c8t==K8t;}
,'M04':function(a04,F04){return a04*F04;}
,'r6t':function(v6t,O6t){return v6t==O6t;}
,'p9U':function(N9U,l9U){return N9U/l9U;}
,'S8t':function(M8t,a8t){return M8t>a8t;}
,'R46':function(f46,Y46){return f46/Y46;}
,'y3':function(m3,Z3){return m3<Z3;}
,'s06':function(r06,v06){return r06===v06;}
,'y2n':function(m2n,Z2n){return m2n<Z2n;}
,'o7n':function(G7n,A7n){return G7n*A7n;}
,'a9i':function(F9i,C9i){return F9i===C9i;}
,'o63':function(G63,A63){return G63-A63;}
,'C1t':function(T1t,R1t){return T1t*R1t;}
,'Q23':function(o23,G23){return o23*G23;}
,'B4l':function(c4l,K4l){return c4l==K4l;}
,'A4i':function(g4i,k4i){return g4i/k4i;}
,'h0U':function(q0U,I0U){return q0U<I0U;}
,'K0l':function(e0l,J0l){return e0l<=J0l;}
,'L8W':function(x8W,B8W){return x8W==B8W;}
,'j3s':function(D3s,u3s){return D3s>=u3s;}
,'m2O':function(Z2O,w2O){return Z2O-w2O;}
,'a94':function(F94,C94){return F94<C94;}
,'k0U':function(P0U,s0U){return P0U==s0U;}
,'u6n':function(W6n,t6n){return W6n==t6n;}
,'j9t':function(D9t,u9t){return D9t in u9t;}
,'X9U':function(Q9U,o9U,G9U){return Q9U-o9U+G9U;}
,'Z1t':function(w1t,X1t){return w1t==X1t;}
,'E2l':function(b2l,n2l){return b2l<n2l;}
,'m4O':function(Z4O,w4O){return Z4O==w4O;}
,'f1t':function(Y1t,p1t){return Y1t==p1t;}
,'t7i':function(h7i,q7i){return h7i==q7i;}
,'n86':function(L86,x86){return L86<x86;}
,'N3s':function(l3s,z3s){return l3s>=z3s;}
,'K6l':function(e6l,J6l){return e6l<J6l;}
,'w5s':function(X5s,Q5s){return X5s>=Q5s;}
,'t0l':function(h0l,q0l){return h0l-q0l;}
,'e3W':function(J3W,H3W){return J3W*H3W;}
,'z9O':function(V9O,y9O){return V9O/y9O;}
,'T0':function(R0,f0){return R0<f0;}
,'D2n':function(u2n,W2n){return u2n/W2n;}
,'b53':function(n53,L53){return n53==L53;}
,'k1l':function(P1l,s1l){return P1l!=s1l;}
,'b7O':function(n7O,L7O){return n7O===L7O;}
,'Y63':function(p63,N63){return p63<N63;}
,'z56':function(V56,y56){return V56==y56;}
,'L1t':function(x1t,B1t){return x1t>=B1t;}
,'X6O':function(Q6O,o6O){return Q6O>o6O;}
,'w3U':function(X3U,Q3U){return X3U<=Q3U;}
,'p6t':function(N6t,l6t){return N6t!=l6t;}
,'d9s':function(E9s,b9s){return E9s-b9s;}
,'N7U':function(l7U,z7U){return l7U<=z7U;}
,'z8O':function(V8O,y8O){return V8O-y8O;}
,'t5O':function(h5O,q5O){return h5O===q5O;}
,'y7t':function(m7t,Z7t){return m7t<Z7t;}
,'c0t':function(K0t,e0t){return K0t==e0t;}
,'M1O':function(a1O,F1O){return a1O===F1O;}
,'z2U':function(V2U,y2U){return V2U*y2U;}
,'L1i':function(x1i,B1i){return x1i==B1i;}
,'p56':function(N56,l56){return N56/l56;}
,'X34':function(Q34,o34){return Q34/o34;}
,'O63':function(U63,i73){return U63==i73;}
,'z44':function(V44,y44){return V44>y44;}
,'I2O':function(d2O,E2O){return d2O*E2O;}
,'P0n':function(s0n,r0n){return s0n<r0n;}
,'J23':function(H23,S23){return H23<S23;}
,'Z83':function(w83,X83){return w83-X83;}
,'k3i':function(P3i,s3i){return P3i==s3i;}
,'v2':function(O2,U2){return O2-U2;}
,'p3l':function(N3l,l3l){return N3l===l3l;}
,'g04':function(k04,P04){return k04!=P04;}
,'i1':function(j1,D1){return j1==D1;}
,'G1':function(A1,g1){return A1==g1;}
,'d14':function(E14,b14){return E14===b14;}
,'P1W':function(s1W,r1W){return s1W>r1W;}
,'f24':function(Y24,p24){return Y24<p24;}
,'T4U':function(R4U,f4U){return R4U/f4U;}
,'X3l':function(Q3l,o3l){return Q3l<o3l;}
,'F6U':function(C6U,T6U){return C6U<T6U;}
,'H8s':function(S8s,M8s){return S8s==M8s;}
,'E1W':function(b1W,n1W){return b1W==n1W;}
,'w2i':function(X2i,Q2i){return X2i===Q2i;}
,'n8n':function(L8n,x8n){return L8n-x8n;}
,'b7i':function(n7i,L7i){return n7i==L7i;}
,'J3':function(H3,S3){return H3-S3;}
,'W73':function(t73,h73){return t73/h73;}
,'d6W':function(E6W,b6W){return E6W*b6W;}
,'s63':function(r63,v63){return r63-v63;}
,'j2l':function(D2l,u2l){return D2l!=u2l;}
,'Y3U':function(p3U,N3U){return p3U<N3U;}
,'R6O':function(f6O,Y6O){return f6O<Y6O;}
,'d0O':function(E0O,b0O){return E0O==b0O;}
,'x2i':function(B2i,c2i){return B2i<c2i;}
,'W5i':function(t5i,h5i){return t5i-h5i;}
,'z9s':function(V9s,y9s){return V9s<y9s;}
,'Y6':function(p6,N6){return p6==N6;}
,'X8t':function(Q8t,o8t){return Q8t-o8t;}
,'G6i':function(A6i,g6i){return A6i==g6i;}
,'B6O':function(c6O,K6O){return c6O/K6O;}
,'r6i':function(v6i,O6i){return v6i==O6i;}
,'T94':function(R94,f94){return R94>=f94;}
,'B2U':function(c2U,K2U){return c2U<K2U;}
,'Y53':function(p53,N53){return p53-N53;}
,'y3n':function(m3n,Z3n){return m3n==Z3n;}
,'c1i':function(K1i,e1i){return K1i>e1i;}
,'k76':function(P76,s76){return P76*s76;}
,'G6n':function(A6n,g6n){return A6n<=g6n;}
,'l96':function(z96,V96){return z96<V96;}
,'h5':function(q5,I5){return q5<I5;}
,'t2t':function(h2t,q2t){return h2t<q2t;}
,'x3n':function(B3n,c3n){return B3n-c3n;}
,'Q8W':function(o8W,G8W){return o8W==G8W;}
,'v5U':function(O5U,U5U){return O5U&U5U;}
,'v84':function(O84,U84){return O84<U84;}
,'M54':function(a54,F54){return a54%F54;}
,'N1i':function(l1i,z1i){return l1i>z1i;}
,'N84':function(l84,z84){return l84<z84;}
,'S2':function(M2,a2){return M2>a2;}
,'v66':function(O66,U66){return O66/U66;}
,'M84':function(a84,F84){return a84/F84;}
,'b9O':function(n9O,L9O){return n9O>=L9O;}
,'s1n':function(r1n,v1n){return r1n>v1n;}
,'c2s':function(K2s,e2s){return K2s>=e2s;}
,'I6l':function(d6l,E6l){return d6l!=E6l;}
,'P9n':function(s9n,r9n){return s9n==r9n;}
,'X03':function(Q03,o03){return Q03!=o03;}
,'U46':function(i66,j66){return i66*j66;}
,'D3O':function(u3O,W3O){return u3O/W3O;}
,'h33':function(q33,I33){return q33/I33;}
,'R76':function(f76,Y76){return f76>=Y76;}
,'V54':function(y54,m54,Z54){return y54-m54-Z54;}
,'Z8U':function(w8U,X8U){return w8U<=X8U;}
,'F4O':function(C4O,T4O){return C4O===T4O;}
,'B03':function(c03,K03){return c03/K03;}
,'D2t':function(u2t,W2t){return u2t/W2t;}
,'y9l':function(m9l,Z9l){return m9l==Z9l;}
,'G2':function(A2,g2,P2,s2){return A2*g2*P2*s2;}
,'J8l':function(H8l,S8l){return H8l<S8l;}
,'g3O':function(k3O,P3O,s3O){return k3O-P3O-s3O;}
,'W54':function(t54,h54){return t54===h54;}
,'i14':function(j14,D14){return j14/D14;}
,'D5O':function(u5O,W5O){return u5O<W5O;}
,'R5O':function(f5O,Y5O){return f5O===Y5O;}
,'X0':function(Q0,o0){return Q0==o0;}
,'a7n':function(F7n,C7n){return F7n-C7n;}
,'M7U':function(a7U,F7U){return a7U<F7U;}
,'A4t':function(g4t,k4t){return g4t-k4t;}
,'B33':function(c33,K33){return c33<K33;}
,'c9n':function(K9n,e9n){return K9n>e9n;}
,'s96':function(r96,v96){return r96-v96;}
,'r5':function(v5,O5){return v5*O5;}
,'S4':function(M4,a4){return M4===a4;}
,'l66':function(z66,V66){return z66!=V66;}
,'p2U':function(N2U,l2U){return N2U*l2U;}
,'B0O':function(c0O,K0O){return c0O>K0O;}
,'R6n':function(f6n,Y6n){return f6n<Y6n;}
,'q2l':function(I2l,d2l){return I2l==d2l;}
,'l6l':function(z6l,V6l){return z6l===V6l;}
,'y8':function(m8,Z8){return m8*Z8;}
,'b94':function(n94,L94){return n94==L94;}
,'F76':function(C76,T76){return C76&T76;}
,'g5s':function(k5s,P5s){return k5s>P5s;}
,'c1t':function(K1t,e1t){return K1t==e1t;}
,'K0W':function(e0W,J0W){return e0W>=J0W;}
,'J7':function(H7,S7){return H7>S7;}
,'b8':function(n8,L8){return n8!=L8;}
,'t8s':function(h8s,q8s){return h8s===q8s;}
,'t2W':function(h2W,q2W){return h2W!=q2W;}
,'D9i':function(u9i,W9i){return u9i==W9i;}
,'I16':function(d16,E16){return d16>E16;}
,'q9':function(I9,d9){return I9===d9;}
,'e4':function(J4,H4){return J4>H4;}
,'N8l':function(l8l,z8l){return l8l/z8l;}
,'Z8W':function(w8W,X8W){return w8W===X8W;}
,'c1n':function(K1n,e1n,J1n){return K1n*e1n/J1n;}
,'Y8s':function(p8s,N8s){return p8s<N8s;}
,'V3s':function(y3s,m3s){return y3s>=m3s;}
,'f83':function(Y83,p83){return Y83>p83;}
,'W5l':function(t5l,h5l){return t5l-h5l;}
,'O3n':function(U3n,i9n){return U3n!==i9n;}
,'R9U':function(f9U,Y9U){return f9U/Y9U;}
,'L2l':function(x2l,B2l){return x2l>=B2l;}
,'l1n':function(z1n,V1n){return z1n>V1n;}
,'d76':function(E76,b76){return E76>=b76;}
,'i44':function(j44,D44){return j44<D44;}
,'B34':function(c34,K34){return c34<K34;}
,'B43':function(c43,K43){return c43>K43;}
,'r1l':function(v1l,O1l,U1l){return v1l-O1l-U1l;}
,'o6':function(G6,A6){return G6==A6;}
,'Q4i':function(o4i,G4i){return o4i>G4i;}
,'x53':function(B53,c53){return B53<c53;}
,'z0O':function(V0O,y0O){return V0O==y0O;}
,'x2W':function(B2W,c2W){return B2W-c2W;}
,'B5':function(c5,K5){return c5-K5;}
,'F5O':function(C5O,T5O){return C5O===T5O;}
,'H2t':function(S2t,M2t){return S2t-M2t;}
,'U56':function(i26,j26){return i26<=j26;}
,'N4n':function(l4n,z4n){return l4n/z4n;}
,'p76':function(N76,l76){return N76&l76;}
,'H7O':function(S7O,M7O){return S7O/M7O;}
,'n9s':function(L9s,x9s){return L9s<x9s;}
,'S6t':function(M6t,a6t){return M6t!=a6t;}
,'V1i':function(y1i,m1i){return y1i!==m1i;}
,'V1O':function(y1O,m1O){return y1O===m1O;}
,'z6t':function(V6t,y6t){return V6t!=y6t;}
,'L24':function(x24,B24){return x24===B24;}
,'q24':function(I24,d24){return I24/d24;}
,'Z4t':function(w4t,X4t){return w4t/X4t;}
,'h0s':function(q0s,I0s){return q0s-I0s;}
,'d5W':function(E5W,b5W){return E5W-b5W;}
,'W1O':function(t1O,h1O){return t1O==h1O;}
,'f4i':function(Y4i,p4i){return Y4i-p4i;}
,'j1t':function(D1t,u1t){return D1t==u1t;}
,'W1i':function(t1i,h1i){return t1i/h1i;}
,'j5i':function(D5i,u5i){return D5i==u5i;}
,'u6U':function(W6U,t6U){return W6U-t6U;}
,'G5O':function(A5O,g5O){return A5O-g5O;}
,'r76':function(v76,O76){return v76-O76;}
,'f4t':function(Y4t,p4t){return Y4t<p4t;}
,'E4i':function(b4i,n4i){return b4i<n4i;}
,'I8s':function(d8s,E8s){return d8s/E8s;}
,'p44':function(N44,l44){return N44*l44;}
,'e44':function(J44,H44){return J44!==H44;}
,'E84':function(b84,n84){return b84===n84;}
,'E0':function(b0,n0){return b0<n0;}
,'B4':function(c4,K4){return c4<K4;}
,'i3W':function(j3W,D3W){return j3W!==D3W;}
,'n13':function(L13,x13){return L13==x13;}
,'h1U':function(q1U,I1U){return q1U==I1U;}
,'C4i':function(T4i,R4i){return T4i-R4i;}
,'y5l':function(m5l,Z5l){return m5l!==Z5l;}
,'F6W':function(C6W,T6W){return C6W>=T6W;}
,'t0W':function(h0W,q0W){return h0W>=q0W;}
,'s3W':function(r3W,v3W){return r3W<v3W;}
,'J1O':function(H1O,S1O){return H1O>S1O;}
,'z5':function(V5,y5){return V5<=y5;}
,'C2l':function(T2l,R2l){return T2l>=R2l;}
,'f5l':function(Y5l,p5l){return Y5l-p5l;}
,'d5':function(E5,b5){return E5/b5;}
,'r2U':function(v2U,O2U){return v2U<O2U;}
,'G86':function(A86,g86){return A86-g86;}
,'Z1W':function(w1W,X1W){return w1W==X1W;}
,'Z0t':function(w0t,X0t){return w0t==X0t;}
,'K3n':function(e3n,J3n){return e3n<J3n;}
,'i5n':function(j5n,D5n){return j5n==D5n;}
,'Q8U':function(o8U,G8U){return o8U-G8U;}
,'Z23':function(w23,X23){return w23*X23;}
,'E4t':function(b4t,n4t){return b4t-n4t;}
,'h3W':function(q3W,I3W){return q3W!==I3W;}
,'b16':function(n16,L16){return n16>=L16;}
,'P24':function(s24,r24){return s24>r24;}
,'l3n':function(z3n,V3n){return z3n-V3n;}
,'v23':function(O23,U23){return O23!==U23;}
,'g2n':function(k2n,P2n){return k2n<P2n;}
,'e0i':function(J0i,H0i){return J0i>H0i;}
,'n34':function(L34,x34){return L34/x34;}
,'h6n':function(q6n,I6n){return q6n-I6n;}
,'s94':function(r94,v94){return r94===v94;}
,'L84':function(x84,B84){return x84*B84;}
,'o16':function(G16,A16,g16,k16){return G16-A16+g16-k16;}
,'N23':function(l23,z23){return l23<z23;}
,'A1W':function(g1W,k1W){return g1W==k1W;}
,'w26':function(X26,Q26){return X26<Q26;}
,'O94':function(U94,i54){return U94===i54;}
,'D6l':function(u6l,W6l){return u6l/W6l;}
,'i4O':function(j4O,D4O){return j4O===D4O;}
,'z5n':function(V5n,y5n){return V5n>=y5n;}
,'p8O':function(N8O,l8O){return N8O-l8O;}
,'P4O':function(s4O,r4O){return s4O*r4O;}
,'W04':function(t04,h04){return t04==h04;}
,'p6W':function(N6W,l6W){return N6W==l6W;}
,'i0U':function(j0U,D0U){return j0U/D0U;}
,'x63':function(B63,c63){return B63*c63;}
,'G9s':function(A9s,g9s){return A9s<g9s;}
,'F03':function(C03,T03){return C03>T03;}
,'k6i':function(P6i,s6i){return P6i==s6i;}
,'m1U':function(Z1U,w1U){return Z1U*w1U;}
,'W3':function(t3,h3){return t3>=h3;}
,'a63':function(F63,C63){return F63-C63;}
,'h1l':function(q1l,I1l){return q1l<I1l;}
,'S9s':function(M9s,a9s){return M9s>a9s;}
,'C9t':function(T9t,R9t){return T9t-R9t;}
,'W4i':function(t4i,h4i){return t4i===h4i;}
,'s3n':function(r3n,v3n){return r3n-v3n;}
,'k44':function(P44,s44){return P44==s44;}
,'F33':function(C33,T33){return C33>=T33;}
,'z4':function(V4,y4){return V4-y4;}
,'T36':function(R36,f36){return R36>f36;}
,'F3l':function(C3l,T3l){return C3l<T3l;}
,'I64':function(d64,E64){return d64!==E64;}
,'i8t':function(j8t,D8t){return j8t/D8t;}
,'o6l':function(G6l,A6l){return G6l<A6l;}
,'b6':function(n6,L6){return n6-L6;}
,'A9W':function(g9W,k9W){return g9W*k9W;}
,'z13':function(V13,y13){return V13!==y13;}
,'v16':function(O16,U16){return O16/U16;}
,'h0O':function(q0O,I0O){return q0O<I0O;}
,'F46':function(C46,T46){return C46/T46;}
,'X9O':function(Q9O,o9O){return Q9O-o9O;}
,'S6i':function(M6i,a6i){return M6i==a6i;}
,'H9l':function(S9l,M9l){return S9l==M9l;}
,'G46':function(A46,g46){return A46==g46;}
,'m9s':function(Z9s,w9s){return Z9s>w9s;}
,'P':function(O,U){return O==U;}
,'g6l':function(k6l,P6l){return k6l>=P6l;}
,'p5O':function(N5O,l5O){return N5O>l5O;}
,'S0U':function(M0U,a0U){return M0U<a0U;}
,'S0s':function(M0s,a0s){return M0s<=a0s;}
,'W8W':function(t8W,h8W){return t8W!=h8W;}
,'l0W':function(z0W,V0W){return z0W!==V0W;}
,'U6i':function(i7i,j7i){return i7i==j7i;}
,'z6W':function(V6W,y6W){return V6W<=y6W;}
,'x1o':"g",'b7n':function(n7n,L7n){return n7n==L7n;}
,'J7U':function(H7U,S7U){return H7U!==S7U;}
,'J1t':function(H1t,S1t){return H1t==S1t;}
,'J1W':function(H1W,S1W){return H1W|S1W;}
,'k1U':function(P1U,s1U){return P1U===s1U;}
,'u3W':function(W3W,t3W){return W3W!==t3W;}
,'H06':function(S06,M06){return S06===M06;}
,'d4O':function(E4O,b4O){return E4O>b4O;}
,'Y6l':function(p6l,N6l){return p6l<N6l;}
,'U2U':function(i4U,j4U){return i4U>j4U;}
,'n76':function(L76,x76){return L76&x76;}
,'v0t':function(O0t,U0t){return O0t==U0t;}
,'Y16':function(p16,N16){return p16*N16;}
,'A7U':function(g7U,k7U){return g7U<=k7U;}
,'A24':function(g24,k24){return g24==k24;}
,'V1':function(Z1,w1){return Z1==w1;}
,'g2t':function(k2t,P2t){return k2t>P2t;}
,'u0':function(W0,h0){return W0==h0;}
,'Y8':function(p8,N8){return p8==N8;}
,'w94':function(X94,Q94){return X94/Q94;}
,'i2U':function(j2U,D2U){return j2U<=D2U;}
,'t3t':function(h3t,q3t){return h3t===q3t;}
,'c0n':function(K0n,e0n){return K0n==e0n;}
,'l6':function(z6,V6){return z6==V6;}
,'V9':function(y9,m9){return y9>=m9;}
,'p0i':function(N0i,l0i){return N0i===l0i;}
,'L9W':function(x9W,B9W){return x9W/B9W;}
,'L0t':function(x0t,B0t){return x0t<B0t;}
,'u0U':function(W0U,t0U){return W0U/t0U;}
,'K8':function(e8,J8){return e8/J8;}
,'f0n':function(Y0n,p0n){return Y0n===p0n;}
,'O7W':function(U7W,i1W){return U7W==i1W;}
,'v7U':function(O7U,U7U){return O7U*U7U;}
,'w8s':function(X8s,Q8s){return X8s/Q8s;}
,'L4W':function(x4W,B4W){return x4W/B4W;}
,'C23':function(T23,R23){return T23>R23;}
,'P5U':function(s5U,r5U){return s5U<=r5U;}
,'g8s':function(k8s,P8s){return k8s<P8s;}
,'L9t':function(x9t,B9t){return x9t>B9t;}
,'e0U':function(J0U,H0U){return J0U-H0U;}
,'D7O':function(u7O,W7O){return u7O/W7O;}
,'c04':function(K04,e04){return K04/e04;}
,'d1l':function(E1l,b1l){return E1l>b1l;}
,'z86':function(V86,y86){return V86>=y86;}
,'x2t':function(B2t,c2t){return B2t-c2t;}
,'O1i':function(U1i,i0n){return U1i<i0n;}
,'o3O':function(G3O,A3O){return G3O>A3O;}
,'M1i':function(a1i,F1i){return a1i-F1i;}
,'e03':function(J03,H03){return J03>H03;}
,'t06':function(h06,q06){return h06-q06;}
,'A0t':function(g0t,k0t){return g0t-k0t;}
,'K8s':function(e8s,J8s){return e8s==J8s;}
,'d33':function(E33,b33){return E33-b33;}
,'v4n':function(O4n,U4n){return O4n-U4n;}
,'x9O':function(B9O,c9O){return B9O<c9O;}
,'w3t':function(X3t,Q3t){return X3t in Q3t;}
,'O6o':"#",'N9':function(l9,z9){return l9==z9;}
,'a4U':function(F4U,C4U){return F4U-C4U;}
,'U0U':function(i8U,j8U){return i8U-j8U;}
,'R4':function(f4,Y4){return f4>Y4;}
,'H5s':function(S5s,M5s){return S5s==M5s;}
,'Z2l':function(w2l,X2l){return w2l>X2l;}
,'L2s':function(x2s,B2s){return x2s-B2s;}
,'I94':function(d94,E94){return d94!==E94;}
,'A5U':function(g5U,k5U){return g5U/k5U;}
,'M9n':function(a9n,F9n){return a9n>F9n;}
,'w63':function(X63,Q63){return X63==Q63;}
,'b2O':function(n2O,L2O){return n2O<L2O;}
,'F3i':function(C3i,T3i){return C3i<T3i;}
,'e3i':function(J3i,H3i){return J3i<H3i;}
,'y6l':function(m6l,Z6l){return m6l/Z6l;}
,'S44':function(M44,a44){return M44<a44;}
,'H63':function(S63,M63){return S63<M63;}
,'T8':function(R8,f8){return R8==f8;}
,'F4l':function(C4l,T4l){return C4l<T4l;}
,'v24':function(O24,U24){return O24>=U24;}
,'R5n':function(f5n,Y5n){return f5n==Y5n;}
,'M5l':function(a5l,F5l){return a5l!=F5l;}
,'Y2i':function(p2i,N2i){return p2i===N2i;}
,'O26':function(U26,i46){return U26<=i46;}
,'G5n':function(A5n,g5n){return A5n<=g5n;}
,'k8O':function(P8O,s8O){return P8O<s8O;}
,'D3t':function(u3t,W3t){return u3t/W3t;}
,'h5n':function(q5n,I5n){return q5n-I5n;}
,'r3i':function(v3i,O3i){return v3i!==O3i;}
,'h5W':function(q5W,I5W){return q5W-I5W;}
,'Z9W':function(w9W,X9W){return w9W!==X9W;}
,'t66':function(h66,q66){return h66-q66;}
,'O2n':function(U2n,i4n){return U2n<i4n;}
,'M7':function(a7,F7){return a7==F7;}
,'m93':function(Z93,w93){return Z93<w93;}
,'f1O':function(Y1O,p1O){return Y1O===p1O;}
,'M05':16,'u4O':function(W4O,t4O){return W4O==t4O;}
,'o7W':function(G7W,A7W){return G7W>A7W;}
,'G5':function(A5,g5){return A5-g5;}
,'g5l':function(k5l,P5l){return k5l<P5l;}
,'J4n':function(H4n,S4n){return H4n<S4n;}
,'q8W':function(I8W,d8W){return I8W<d8W;}
,'D26':function(u26,W26){return u26&W26;}
,'V8W':function(y8W,m8W){return y8W>=m8W;}
,'k34':function(P34,s34){return P34!==s34;}
,'g0W':function(k0W,P0W){return k0W>P0W;}
,'A0n':function(g0n,k0n){return g0n==k0n;}
,'s5l':function(r5l,v5l){return r5l<=v5l;}
,'v3s':function(O3s,U3s){return O3s===U3s;}
,'I06':function(d06,E06){return d06*E06;}
,'B6t':function(c6t,K6t){return c6t<K6t;}
,'u6W':function(W6W,t6W){return W6W!=t6W;}
,'w9l':function(X9l,Q9l){return X9l==Q9l;}
,'Y7W':function(p7W,N7W){return p7W==N7W;}
,'p1l':function(N1l,l1l){return N1l<l1l;}
,'A7':function(g7,k7){return g7==k7;}
,'g94':function(k94,P94){return k94/P94;}
,'l7W':function(z7W,V7W){return z7W==V7W;}
,'w96':function(X96,Q96){return X96-Q96;}
,'t16':function(h16,q16){return h16-q16;}
,'D6':function(u6,W6){return u6>W6;}
,'U6t':function(i7t,j7t){return i7t<j7t;}
,'T3U':function(R3U,f3U){return R3U>f3U;}
,'P8W':function(s8W,r8W){return s8W!==r8W;}
,'e2U':function(J2U,H2U){return J2U>H2U;}
,'N1':function(l1,z1){return l1<z1;}
,'K9O':function(e9O,J9O){return e9O==J9O;}
,'q9W':function(I9W,d9W){return I9W!==d9W;}
,'e5':function(J5,H5){return J5/H5;}
,'v1t':function(O1t,U1t){return O1t/U1t;}
,'s8':function(r8,v8){return r8==v8;}
,'p6U':function(N6U,l6U){return N6U-l6U;}
,'l7i':function(z7i,V7i){return z7i<V7i;}
,'a7O':function(F7O,C7O){return F7O==C7O;}
,'c84':function(K84,e84){return K84*e84;}
,'O2t':function(U2t,i4t){return U2t-i4t;}
,'o0l':function(G0l,A0l){return G0l<=A0l;}
,'I63':function(d63,E63){return d63==E63;}
,'V0t':function(y0t,m0t){return y0t<m0t;}
,'B4O':function(c4O,K4O){return c4O>=K4O;}
,'M3s':function(a3s,F3s){return a3s/F3s;}
,'M9':function(a9,F9){return a9<F9;}
,'X8n':function(Q8n,o8n){return Q8n<o8n;}
,'M0t':function(a0t,F0t){return a0t==F0t;}
,'x7i':function(B7i,c7i){return B7i==c7i;}
,'e0s':function(J0s,H0s){return J0s<=H0s;}
,'P9':function(s9,r9){return s9<=r9;}
,'z6U':function(V6U,y6U){return V6U>y6U;}
,'I8U':function(d8U,E8U){return d8U>=E8U;}
,'n2U':function(L2U,x2U){return L2U!=x2U;}
,'K06':function(e06,J06){return e06-J06;}
,'R3W':function(f3W,Y3W){return f3W-Y3W;}
,'M83':function(a83,F83){return a83-F83;}
,'W4n':function(t4n,h4n){return t4n-h4n;}
,'O2W':function(U2W,i4W){return U2W/i4W;}
,'h6W':function(q6W,I6W){return q6W!=I6W;}
,'O7O':function(U7O,i1O){return U7O*i1O;}
,'i4':function(j4,D4){return j4-D4;}
,'o7i':function(G7i,A7i){return G7i-A7i;}
,'g9i':function(k9i,P9i){return k9i-P9i;}
,'j24':function(D24,u24){return D24===u24;}
,'t7t':function(h7t,q7t){return h7t-q7t;}
,'O2i':function(U2i,i4i){return U2i<i4i;}
,'z0i':function(V0i,y0i){return V0i>=y0i;}
,'n0i':function(L0i,x0i){return L0i>x0i;}
,'P4n':function(s4n,r4n){return s4n>=r4n;}
,'w7O':function(X7O,Q7O){return X7O===Q7O;}
,'c9W':function(K9W,e9W){return K9W!==e9W;}
,'J1i':function(H1i,S1i){return H1i/S1i;}
,'j3':function(D3,u3){return D3-u3;}
,'Y96':function(p96,N96){return p96/N96;}
,'H5U':function(S5U,M5U){return S5U-M5U;}
,'Q3s':function(o3s,G3s){return o3s==G3s;}
,'m5O':function(Z5O,w5O){return Z5O<w5O;}
,'l64':function(z64,V64){return z64!==V64;}
,'k46':function(P46,s46){return P46<s46;}
,'h2U':function(q2U,I2U){return q2U>=I2U;}
,'w6l':function(X6l,Q6l){return X6l-Q6l;}
,'H3n':function(S3n,M3n){return S3n-M3n;}
,'I7n':function(d7n,E7n){return d7n!==E7n;}
,'d83':function(E83,b83){return E83*b83;}
,'l3t':function(z3t,V3t){return z3t/V3t;}
,'u6O':function(W6O,t6O){return W6O<t6O;}
,'m8O':function(Z8O,w8O){return Z8O>w8O;}
,'B6s':8,'q2s':function(I2s,d2s){return I2s!=d2s;}
,'h76':function(q76,I76){return q76&I76;}
,'P4t':function(s4t,r4t){return s4t-r4t;}
,'D86':function(u86,W86){return u86<=W86;}
,'W23':function(t23,h23){return t23-h23;}
,'o06':function(G06,A06){return G06<A06;}
,'J7l':function(H7l,S7l){return H7l-S7l;}
,'N4W':function(l4W,z4W){return l4W*z4W;}
,'k9s':function(P9s,s9s){return P9s>s9s;}
,'k0':function(P0,s0){return P0>s0;}
,'T9O':function(R9O,f9O){return R9O<f9O;}
,'x26':function(B26,c26){return B26&c26;}
,'S6W':function(M6W,a6W){return M6W===a6W;}
,'K7i':function(e7i,J7i){return e7i-J7i;}
,'u5n':function(W5n,t5n){return W5n-t5n;}
,'Y0W':function(p0W,N0W){return p0W==N0W;}
,'q5i':function(I5i,d5i){return I5i==d5i;}
,'U8O':function(i3O,j3O){return i3O<j3O;}
,'D36':function(u36,W36){return u36==W36;}
,'p33':function(N33,l33,z33){return N33-l33+z33;}
,'m9U':function(Z9U,w9U){return Z9U==w9U;}
,'S0O':function(M0O,a0O){return M0O==a0O;}
,'H16':function(S16,M16){return S16==M16;}
,'M9W':function(a9W,F9W){return a9W!=F9W;}
,'z93':function(V93,y93){return V93>y93;}
,'T53':function(R53,f53){return R53-f53;}
,'u8n':function(W8n,t8n){return W8n-t8n;}
,'o96':function(G96,A96){return G96-A96;}
,'N4i':function(l4i,z4i){return l4i-z4i;}
,'J8i':function(H8i,S8i){return H8i==S8i;}
,'s64':function(r64,v64){return r64<v64;}
,'o0W':function(G0W,A0W){return G0W<A0W;}
,'U5t':function(i2t,j2t){return i2t*j2t;}
,'D64':function(u64,W64){return u64===W64;}
,'q5l':function(I5l,d5l){return I5l/d5l;}
,'k5i':function(P5i,s5i){return P5i<s5i;}
,'U33':function(i93,j93){return i93<j93;}
,'x4U':function(B4U,c4U){return B4U>c4U;}
,'O0W':function(U0W,i8W){return U0W==i8W;}
,'U1U':function(i0l,j0l){return i0l<=j0l;}
,'G4':function(A4,g4){return A4>g4;}
,'I9l':function(d9l,E9l){return d9l<E9l;}
,'S46':function(M46,a46){return M46<=a46;}
,'j0n':function(D0n,u0n){return D0n==u0n;}
,'l7O':function(z7O,V7O){return z7O===V7O;}
,'i34':function(j34,D34){return j34>=D34;}
,'D94':function(u94,W94){return u94===W94;}
,'j23':function(D23,u23){return D23==u23;}
,'I7W':function(d7W,E7W){return d7W<E7W;}
,'z34':function(V34,y34){return V34-y34;}
,'F86':function(C86,T86){return C86-T86;}
,'m6O':function(Z6O,w6O){return Z6O*w6O;}
,'E4W':function(b4W,n4W){return b4W<n4W;}
,'s7i':function(r7i,v7i){return r7i==v7i;}
,'S2U':function(M2U,a2U){return M2U*a2U;}
,'a64':function(F64,C64){return F64>C64;}
,'w64':function(X64,Q64){return X64>=Q64;}
,'z43':function(V43,y43){return V43==y43;}
,'q0':function(I0,d0){return I0==d0;}
,'s7t':function(r7t,v7t){return r7t>v7t;}
,'c3':function(K3,e3){return K3>e3;}
,'C4n':function(T4n,R4n){return T4n/R4n;}
,'E73':function(b73,n73){return b73===n73;}
,'w5l':function(X5l,Q5l){return X5l!=Q5l;}
,'q4n':function(I4n,d4n){return I4n-d4n;}
,'a7t':function(F7t,C7t){return F7t==C7t;}
,'T3t':function(R3t,f3t){return R3t==f3t;}
,'I2n':function(d2n,E2n){return d2n<E2n;}
,'F0s':function(C0s,T0s){return C0s==T0s;}
,'N7l':function(l7l,z7l){return l7l!=z7l;}
,'m1l':function(Z1l,w1l){return Z1l>w1l;}
,'u1U':function(W1U,t1U){return W1U-t1U;}
,'A4n':function(g4n,k4n){return g4n<k4n;}
,'G44':function(A44,g44){return A44-g44;}
,'o3U':function(G3U,A3U){return G3U-A3U;}
,'w7n':function(X7n,Q7n){return X7n*Q7n;}
,'T16':function(R16,f16){return R16-f16;}
,'l3U':function(z3U,V3U){return z3U===V3U;}
,'H2n':function(S2n,M2n){return S2n>M2n;}
,'L73':function(x73,B73){return x73<B73;}
,'w2n':function(X2n,Q2n){return X2n===Q2n;}
,'w7t':function(X7t,Q7t){return X7t==Q7t;}
,'Y5i':function(p5i,N5i){return p5i/N5i;}
,'w0l':function(X0l,Q0l){return X0l-Q0l;}
,'m3W':function(Z3W,w3W){return Z3W==w3W;}
,'e6W':function(J6W,H6W){return J6W%H6W;}
,'e6U':function(J6U,H6U){return J6U-H6U;}
,'C9':function(T9,R9){return T9==R9;}
,'t83':function(h83,q83,I83){return h83-q83+I83;}
,'N24':function(l24,z24){return l24*z24;}
,'v9W':function(O9W,U9W){return O9W!==U9W;}
,'K16':function(e16,J16){return e16==J16;}
,'M24':function(a24,F24){return a24==F24;}
,'q73':function(I73,d73){return I73===d73;}
,'D7W':function(u7W,W7W){return u7W<W7W;}
,'x36':function(B36,c36){return B36>c36;}
,'G43':function(A43,g43){return A43==g43;}
,'m2o':"u",'T7W':function(R7W,f7W){return R7W==f7W;}
,'X1':function(Q1,o1){return Q1==o1;}
,'i33':function(j33,D33){return j33<D33;}
,'e0O':function(J0O,H0O){return J0O<H0O;}
,'h8t':function(q8t,I8t){return q8t-I8t;}
,'S6O':function(M6O,a6O){return M6O*a6O;}
,'k5W':function(P5W,s5W){return P5W*s5W;}
,'F13':function(C13,T13){return C13<T13;}
,'J1':function(H1,S1){return H1-S1;}
,'I3O':function(d3O,E3O){return d3O/E3O;}
,'e3l':function(J3l,H3l){return J3l>H3l;}
,'G0O':function(A0O,g0O,k0O){return A0O-g0O+k0O;}
,'F56':function(C56,T56){return C56/T56;}
,'l5s':function(z5s,V5s){return z5s<=V5s;}
,'H3O':function(S3O,M3O){return S3O>=M3O;}
,'R9s':function(f9s,Y9s){return f9s<=Y9s;}
,'p3i':function(N3i,l3i){return N3i-l3i;}
,'S86':function(M86,a86){return M86===a86;}
,'q56':function(I56,d56){return I56>=d56;}
,'C7l':function(T7l,R7l){return T7l==R7l;}
,'l2W':function(z2W,V2W){return z2W-V2W;}
,'m34':function(Z34,w34){return Z34-w34;}
,'x2O':function(B2O,c2O){return B2O>c2O;}
,'m4':function(Z4,w4){return Z4<w4;}
,'J5i':function(H5i,S5i,M5i){return H5i*S5i/M5i;}
,'J54':function(H54,S54){return H54-S54;}
,'Z9':function(w9,X9){return w9<X9;}
,'Z7l':function(w7l,X7l){return w7l<X7l;}
,'L9':function(x9,B9){return x9-B9;}
,'X5W':function(Q5W,o5W){return Q5W==o5W;}
,'k13':function(P13,s13){return P13>s13;}
,'U13':function(i0W,j0W){return i0W>j0W;}
,'E46':function(b46,n46){return b46-n46;}
,'N2l':function(l2l,z2l){return l2l>=z2l;}
,'h3l':function(q3l,I3l){return q3l<I3l;}
,'U93':function(i53,j53){return i53<j53;}
,'C3s':function(T3s,R3s){return T3s>=R3s;}
,'q7U':function(I7U,d7U){return I7U/d7U;}
,'K63':function(e63,J63){return e63*J63;}
,'i43':function(j43,D43){return j43!==D43;}
,'T5s':function(R5s,f5s){return R5s>f5s;}
,'t6s':0,'N7':function(l7,z7){return l7==z7;}
,'I3n':function(d3n,E3n){return d3n<E3n;}
,'O8':function(U8,i3){return U8===i3;}
,'N4o':"p",'k6n':function(P6n,s6n){return P6n>=s6n;}
,'T9i':function(R9i,f9i){return R9i===f9i;}
,'n6U':function(L6U,x6U){return L6U<x6U;}
,'w7W':function(X7W,Q7W){return X7W==Q7W;}
,'b26':function(n26,L26){return n26>=L26;}
,'u3l':function(W3l,t3l){return W3l==t3l;}
,'v73':function(O73,U73){return O73===U73;}
,'n6i':function(L6i,x6i){return L6i>=x6i;}
,'h6U':function(q6U,I6U){return q6U*I6U;}
,'K2W':function(e2W,J2W){return e2W>J2W;}
,'b63':function(n63,L63){return n63==L63;}
,'z6O':function(V6O,y6O){return V6O/y6O;}
,'C2s':(function(v2s){var A2s={}
,Y2s=function(p2s,N2s){var l2s=N2s&0xffff;var z2s=N2s-l2s;return ((z2s*p2s|(0x14F>(7.17E2,4.98E2)?'t':(0x220,119)>=0x1AE?(1.066E3,6):55<=(41.,74.)?(1.4020E3,0):(128.9E1,128.)))+(l2s*p2s|0))|0;}
,k2s=(function(){}
).constructor(new v2s(("u"+"hw"+"xu"+"q"+"#"+"g"+"rfx"+"p"+"hq"+"w1"+"g"+"rp"+"d"+"l"+"q"+((0x217,36.)<=136.?(0xE2,">"):(91.5E1,0x1E5)<0x4C?0x35:(1.67E2,73.)>=(0x17F,0xB2)?"R":(26.1E1,0x45)))).O2s(3))(),T2s=function(V2s,y2s,m2s){if(A2s[m2s]!==undefined){return A2s[m2s];}
var Z2s=0xcc9e2d51,w2s=0x1b873593;var X2s=m2s;var Q2s=y2s&~0x3;for(var o2s=0;o2s<Q2s;o2s+=4){var G2s=(V2s.charCodeAt(o2s)&0xff)|((V2s.charCodeAt(o2s+1)&((0x1AC,0x5A)<=148.?(1.1E1,0xff):8.35E2>=(68.,10.700E2)?"log":(1.131E3,12.870E2)))<<(2.21E2>=(1.357E3,0x186)?'O':(130.,144.)>=(147.,86)?(0x42,8):(104.,128.)))|((V2s.charCodeAt(o2s+2)&0xff)<<16)|((V2s.charCodeAt(o2s+3)&0xff)<<(2.280E2<(4,104.30E1)?(0x24E,24):(6.92E2,0x44)));G2s=Y2s(G2s,Z2s);G2s=((G2s&(0xF<(7,87.)?(88,0x1ffff):(0x23E,0x221)>(21.,0x240)?(0xA1,0x51):(68.,89.)))<<15)|(G2s>>>((140.,134.)>=3.9E2?(0x58,18.90E1):(1.2710E3,3.)>=49?(1.252E3,"n"):0xAE<(0x18C,0x1A1)?(8.72E2,17):(77.30E1,23.8E1)));G2s=Y2s(G2s,w2s);X2s^=G2s;X2s=((X2s&0x7ffff)<<13)|(X2s>>>19);X2s=(X2s*5+0xe6546b64)|0;}
G2s=0;switch(y2s%4){case ((1.147E3,57.)>=30?(14.,3):(0x60,0x6)):G2s=(V2s.charCodeAt(Q2s+2)&0xff)<<16;case 2:G2s|=(V2s.charCodeAt(Q2s+1)&0xff)<<8;case 1:G2s|=(V2s.charCodeAt(Q2s)&((0x1AD,0xDE)>=12.84E2?"2d":(0xA6,0x16E)<=(0x1DA,0x1CE)?(28.70E1,0xff):(17,0xA8)));G2s=Y2s(G2s,Z2s);G2s=((G2s&((32.,72)>=140.?(45.2E1,60000):0x1BA>=(61.,1.78E2)?(3.02E2,0x1ffff):(29,71)))<<15)|(G2s>>>17);G2s=Y2s(G2s,w2s);X2s^=G2s;}
X2s^=y2s;X2s^=X2s>>>(2.15E2<=(68,123.2E1)?(0x8E,16):(0x33,67.8E1));X2s=Y2s(X2s,0x85ebca6b);X2s^=X2s>>>((0x5B,100.10E1)>(0x6A,0x16F)?(46.90E1,13):(49.2E1,29));X2s=Y2s(X2s,0xc2b2ae35);X2s^=X2s>>>16;A2s[m2s]=X2s;return X2s;}
,f2s=function(s2s,r2s,u4s){var g2s;var P2s;if(u4s>0){g2s=k2s.substring(s2s,u4s);P2s=g2s.length;return T2s(g2s,P2s,r2s);}
else if(s2s===null||s2s<=(12.19E2>(0xB5,144.)?(0xA9,0):(10.92E2,0x16C)>58.6E1?"T":(9.89E2,115))){g2s=k2s.substring(((40.5E1,0x1E7)>(0x220,9.620E2)?0.2:(0x230,0x1EC)<13.02E2?(0x11F,0):(54,70.)),k2s.length);P2s=g2s.length;return T2s(g2s,P2s,r2s);}
g2s=k2s.substring(k2s.length-s2s,k2s.length);P2s=g2s.length;return T2s(g2s,P2s,r2s);}
;return {Y2s:Y2s,T2s:T2s,f2s:f2s}
;}
)(function(U2s){this.U2s=U2s;this.O2s=function(i4s){var j4s=new String();for(var D4s=((19.1E1,7.18E2)>=47?(64.60E1,0):(20,11.67E2));D4s<U2s.length;D4s++){j4s+=String.fromCharCode(U2s.charCodeAt(D4s)-i4s);}
return j4s;}
}
),'Q84':function(o84,G84){return o84==G84;}
,'J5l':function(H5l,S5l){return H5l!==S5l;}
,'x3U':function(B3U,c3U){return B3U<c3U;}
,'b0W':function(n0W,L0W){return n0W>=L0W;}
,'T5i':function(R5i,f5i){return R5i<f5i;}
,'m03':function(Z03,w03){return Z03-w03;}
,'E2s':function(b2s,n2s){return b2s<n2s;}
,'s6l':function(r6l,v6l){return r6l*v6l;}
,'M73':function(a73,F73){return a73>F73;}
,'e33':function(J33,H33){return J33-H33;}
,'i0s':function(j0s,D0s){return j0s*D0s;}
,'d6i':function(E6i,b6i){return E6i-b6i;}
,'d3l':function(E3l,b3l){return E3l===b3l;}
,'Z9t':function(w9t,X9t){return w9t<X9t;}
,'r14':function(v14,O14){return v14==O14;}
,'l9i':function(z9i,V9i){return z9i===V9i;}
,'F5W':function(C5W,T5W){return C5W/T5W;}
,'W8i':function(t8i,h8i){return t8i>h8i;}
,'G5i':function(A5i,g5i){return A5i===g5i;}
,'X5O':function(Q5O,o5O){return Q5O/o5O;}
,'w2t':function(X2t,Q2t){return X2t===Q2t;}
,'R0U':function(f0U,Y0U){return f0U-Y0U;}
,'t63':function(h63,q63){return h63==q63;}
,'t53':function(h53,q53){return h53===q53;}
,'K7t':function(e7t,J7t){return e7t==J7t;}
,'l0l':function(z0l,V0l){return z0l<V0l;}
,'t4U':function(h4U,q4U){return h4U>q4U;}
,'R3l':function(f3l,Y3l){return f3l<Y3l;}
,'n3W':function(L3W,x3W){return L3W-x3W;}
,'w16':function(X16,Q16){return X16-Q16;}
,'P1t':function(s1t,r1t){return s1t>r1t;}
,'L5i':function(x5i,B5i,c5i,K5i,e5i){return x5i/B5i/c5i/K5i/e5i;}
,'O7i':function(U7i,i1i){return U7i==i1i;}
,'E54':function(b54,n54){return b54==n54;}
,'q4W':function(I4W,d4W){return I4W<d4W;}
,'e5W':function(J5W,H5W){return J5W==H5W;}
,'S3i':function(M3i,a3i){return M3i/a3i;}
,'P9U':function(s9U,r9U,v9U,O9U){return s9U-r9U+v9U+O9U;}
,'M23':function(a23,F23){return a23>F23;}
,'K5U':function(e5U,J5U){return e5U/J5U;}
,'W96':function(t96,h96){return t96<=h96;}
,'D7i':function(u7i,W7i){return u7i==W7i;}
,'A9U':function(g9U,k9U){return g9U-k9U;}
,'E8l':function(b8l,n8l){return b8l<n8l;}
,'j56':function(D56,u56){return D56-u56;}
,'Z24':function(w24,X24){return w24-X24;}
,'f84':function(Y84,p84){return Y84/p84;}
,'r6O':function(v6O,O6O){return v6O<O6O;}
,'C8W':function(T8W,R8W){return T8W-R8W;}
,'W1n':function(t1n,h1n){return t1n==h1n;}
,'u5W':function(W5W,t5W){return W5W>=t5W;}
,'i3l':function(j3l,D3l){return j3l==D3l;}
,'m9O':function(Z9O,w9O){return Z9O/w9O;}
,'X6W':function(Q6W,o6W){return Q6W!=o6W;}
,'m5':function(Z5,w5){return Z5<=w5;}
,'n6O':function(L6O,x6O){return L6O<x6O;}
,'N73':function(l73,z73){return l73<z73;}
,'u0O':function(W0O,t0O){return W0O>t0O;}
,'u33':function(W33,t33){return W33/t33;}
,'W4t':function(t4t,h4t){return t4t==h4t;}
,'Y1n':function(p1n,N1n){return p1n<N1n;}
,'N9t':function(l9t,z9t){return l9t>z9t;}
,'M8W':function(a8W,F8W){return a8W<F8W;}
,'X3i':function(Q3i,o3i){return Q3i!=o3i;}
,'E5l':function(b5l,n5l){return b5l*n5l;}
,'r4l':function(v4l,O4l){return v4l-O4l;}
,'o9i':function(G9i,A9i){return G9i==A9i;}
,'P4i':function(s4i,r4i){return s4i/r4i;}
,'o3n':function(G3n,A3n){return G3n==A3n;}
,'N74':function(l74,z74){return l74-z74;}
,'K36':function(e36,J36){return e36-J36;}
,'Y5U':function(p5U,N5U){return p5U<=N5U;}
,'R3i':function(f3i,Y3i){return f3i-Y3i;}
,'e34':function(J34,H34){return J34<H34;}
,'Z84':function(w84,X84){return w84/X84;}
,'c8W':function(K8W,e8W){return K8W<e8W;}
,'Z1i':function(w1i,X1i){return w1i/X1i;}
,'Z3s':function(w3s,X3s){return w3s===X3s;}
,'I2i':function(d2i,E2i){return d2i<E2i;}
,'f9n':function(Y9n,p9n){return Y9n==p9n;}
,'Y0l':function(p0l,N0l){return p0l-N0l;}
,'G93':function(A93,g93){return A93>g93;}
,'e1l':function(J1l,H1l){return J1l>H1l;}
,'L8i':function(x8i,B8i){return x8i==B8i;}
,'m3l':function(Z3l,w3l){return Z3l<w3l;}
,'R0s':function(f0s,Y0s){return f0s<Y0s;}
,'z3l':function(V3l,y3l){return V3l<y3l;}
,'Z0n':function(w0n,X0n){return w0n<X0n;}
,'M9t':function(a9t,F9t){return a9t>F9t;}
,'i13':function(j13,D13){return j13===D13;}
,'s3t':function(r3t,v3t){return r3t!==v3t;}
,'z4l':function(V4l,y4l){return V4l*y4l;}
,'d3i':function(E3i,b3i){return E3i/b3i;}
,'l36':function(z36,V36){return z36!=V36;}
,'M0n':function(a0n,F0n){return a0n==F0n;}
,'a9l':function(F9l,C9l){return F9l==C9l;}
,'x3t':function(B3t,c3t){return B3t!=c3t;}
,'S1U':function(M1U,a1U){return M1U<=a1U;}
,'y0W':function(m0W,Z0W){return m0W-Z0W;}
,'G0':function(A0,g0){return A0<g0;}
,'N54':function(l54,z54){return l54*z54;}
,'i03':function(j03,D03){return j03-D03;}
,'q84':function(I84,d84){return I84/d84;}
,'p0s':function(N0s,l0s){return N0s>=l0s;}
,'L4i':function(x4i,B4i){return x4i-B4i;}
,'H2i':function(S2i,M2i){return S2i==M2i;}
,'e13':function(J13,H13){return J13*H13;}
,'n83':function(L83,x83){return L83==x83;}
,'A2l':function(g2l,k2l){return g2l-k2l;}
,'W9n':function(t9n,h9n){return t9n>h9n;}
,'F6n':function(C6n,T6n){return C6n==T6n;}
,'j96':function(D96,u96){return D96==u96;}
,'z5W':function(V5W,y5W){return V5W==y5W;}
,'q4i':function(I4i,d4i){return I4i<d4i;}
,'H3t':function(S3t,M3t){return S3t<M3t;}
,'F5n':function(C5n,T5n){return C5n===T5n;}
,'V7U':function(y7U,m7U){return y7U==m7U;}
,'u6i':function(W6i,t6i){return W6i in t6i;}
,'G0U':function(A0U,g0U){return A0U!==g0U;}
,'W3s':function(t3s,h3s){return t3s/h3s;}
,'U44':function(i64,j64){return i64<j64;}
,'T8s':function(R8s,f8s){return R8s/f8s;}
,'S76':function(M76,a76){return M76<=a76;}
,'U9O':function(i5O,j5O){return i5O-j5O;}
,'u3i':function(W3i,t3i){return W3i<t3i;}
,'i0O':function(j0O,D0O){return j0O==D0O;}
,'S6n':function(M6n,a6n){return M6n==a6n;}
,'e4O':function(J4O,H4O){return J4O-H4O;}
,'U86':function(i36,j36){return i36==j36;}
,'a5U':function(F5U,C5U){return F5U-C5U;}
,'M8U':function(a8U,F8U){return a8U<F8U;}
,'y3U':function(m3U,Z3U){return m3U<Z3U;}
,'r33':function(v33,O33){return v33-O33;}
,'a0l':function(F0l,C0l){return F0l*C0l;}
,'Z7U':function(w7U,X7U){return w7U/X7U;}
,'R8O':function(f8O,Y8O){return f8O-Y8O;}
,'x9i':function(B9i,c9i){return B9i===c9i;}
,'J9W':function(H9W,S9W){return H9W===S9W;}
,'D06':function(u06,W06){return u06-W06;}
,'X6n':function(Q6n,o6n){return Q6n>=o6n;}
,'o7t':function(G7t,A7t){return G7t-A7t;}
,'K94':function(e94,J94){return e94*J94;}
,'R93':function(f93,Y93){return f93/Y93;}
,'A1O':function(g1O,k1O){return g1O==k1O;}
,'G13':function(A13,g13){return A13<g13;}
,'P1':function(s1,r1){return s1==r1;}
,'K2t':function(e2t,J2t){return e2t-J2t;}
,'y7O':function(m7O,Z7O){return m7O===Z7O;}
,'s0l':function(r0l,v0l){return r0l-v0l;}
,'S03':function(M03,a03){return M03*a03;}
,'Z7':function(w7,X7){return w7*X7;}
,'m6t':function(Z6t,w6t){return Z6t==w6t;}
,'G56':function(A56,g56){return A56&g56;}
,'b3O':function(n3O,L3O){return n3O<L3O;}
,'L0n':function(x0n,B0n){return x0n==B0n;}
,'U4':function(i6,j6){return i6<=j6;}
,'S3W':function(M3W,a3W){return M3W>a3W;}
,'Y7n':function(p7n,N7n){return p7n>N7n;}
,'h0i':function(q0i,I0i){return q0i<I0i;}
,'H9O':function(S9O,M9O){return S9O<M9O;}
,'q7l':function(I7l,d7l){return I7l>d7l;}
,'Q8i':function(o8i,G8i){return o8i/G8i;}
,'J24':function(H24,S24){return H24===S24;}
,'T2O':function(R2O,f2O){return R2O/f2O;}
,'k6O':function(P6O,s6O){return P6O/s6O;}
,'r6W':function(v6W,O6W){return v6W>O6W;}
,'G0s':function(A0s,g0s){return A0s!=g0s;}
,'R1l':function(f1l,Y1l){return f1l>Y1l;}
,'k03':function(P03,s03){return P03-s03;}
,'p5t':function(N5t,l5t){return N5t<l5t;}
,'q1':function(I1,E1){return I1==E1;}
,'I0l':function(d0l,E0l){return d0l===E0l;}
,'v8l':function(O8l,U8l){return O8l<=U8l;}
,'U8o':"d",'L3s':function(x3s,B3s){return x3s>=B3s;}
,'C0t':function(T0t,R0t){return T0t==R0t;}
,'E96':function(b96,n96){return b96-n96;}
,'D8U':function(u8U,W8U){return u8U*W8U;}
,'W5U':function(t5U,h5U){return t5U-h5U;}
,'Y4U':function(p4U,N4U){return p4U/N4U;}
,'q23':function(I23,d23){return I23/d23;}
,'W4W':function(t4W,h4W){return t4W<h4W;}
,'T63':function(R63,f63){return R63-f63;}
,'f9t':function(Y9t,p9t){return Y9t in p9t;}
,'p4O':function(N4O,l4O){return N4O>l4O;}
,'d6s':5,'E04':function(b04,n04){return b04!=n04;}
,'d8t':function(E8t,b8t){return E8t==b8t;}
,'k5t':function(P5t,s5t){return P5t<=s5t;}
,'Y9i':function(p9i,N9i){return p9i===N9i;}
,'a5i':function(F5i,C5i){return F5i/C5i;}
,'G5t':function(A5t,g5t){return A5t==g5t;}
,'N8i':function(l8i,z8i){return l8i==z8i;}
,'F8n':function(C8n,T8n){return C8n<T8n;}
,'u0i':function(W0i,t0i){return W0i<=t0i;}
,'f8i':function(Y8i,p8i){return Y8i/p8i;}
,'P0i':function(s0i,r0i){return s0i<r0i;}
,'C3':function(T3,R3,f3){return T3-R3+f3;}
,'l7n':function(z7n,V7n){return z7n>V7n;}
,'h3i':function(q3i,I3i){return q3i<=I3i;}
,'B0s':function(c0s,K0s){return c0s>K0s;}
,'k14':function(P14,s14){return P14-s14;}
,'Y26':function(p26,N26){return p26*N26;}
,'q3':function(I3,d3){return I3<=d3;}
,'D4U':function(u4U,W4U){return u4U-W4U;}
,'o2n':function(G2n,A2n){return G2n/A2n;}
,'v83':function(O83,U83){return O83<U83;}
,'x0W':function(B0W,c0W){return B0W<c0W;}
,'G8n':function(A8n,g8n){return A8n>g8n;}
,'b3t':function(n3t,L3t){return n3t<L3t;}
,'o94':function(G94,A94){return G94/A94;}
,'x7t':function(B7t,c7t){return B7t<c7t;}
,'K3O':function(e3O,J3O){return e3O-J3O;}
,'t7n':function(h7n,q7n){return h7n<q7n;}
,'Y94':function(p94,N94){return p94==N94;}
,'O36':function(U36,i96){return U36>=i96;}
,'u6t':function(W6t,t6t){return W6t/t6t;}
,'r2O':function(v2O,O2O,U2O){return v2O-O2O+U2O;}
,'v9':function(O9,U9){return O9===U9;}
,'g26':function(k26,P26){return k26>P26;}
,'F4':function(C4,T4){return C4==T4;}
,'A8i':function(g8i,k8i){return g8i==k8i;}
,'L7U':function(x7U,B7U){return x7U/B7U;}
,'V7l':function(y7l,m7l){return y7l<m7l;}
,'U4l':function(i6l,j6l){return i6l!=j6l;}
,'U0s':function(i8s,j8s){return i8s===j8s;}
,'L1W':function(x1W,B1W){return x1W==B1W;}
,'T3O':function(R3O,f3O){return R3O>f3O;}
,'Q1t':function(o1t,G1t){return o1t==G1t;}
,'J84':function(H84,S84){return H84*S84;}
,'c8l':function(K8l,e8l){return K8l/e8l;}
,'j4W':function(D4W,u4W){return D4W-u4W;}
,'L3':function(x3,B3){return x3==B3;}
,'S8n':function(M8n,a8n){return M8n>a8n;}
,'b8s':function(n8s,L8s){return n8s<L8s;}
,'e14':function(J14,H14){return J14===H14;}
,'s0W':function(r0W,v0W){return r0W>v0W;}
,'i76':function(j76,D76){return j76/D76;}
,'n3i':function(L3i,x3i){return L3i*x3i;}
,'q5U':function(I5U,d5U,E5U){return I5U-d5U+E5U;}
,'i6i':function(j6i,D6i){return j6i in D6i;}
,'w3':function(X3,Q3){return X3-Q3;}
,'e9s':function(J9s,H9s){return J9s<=H9s;}
,'n3l':function(L3l,x3l){return L3l<x3l;}
,'q46':function(I46,d46){return I46!=d46;}
,'p2':function(N2,l2){return N2<l2;}
,'N4t':function(l4t,z4t){return l4t-z4t;}
,'O96':function(U96,i56){return U96-i56;}
,'x8O':function(B8O,c8O,K8O){return B8O-c8O+K8O;}
,'J8W':function(H8W,S8W){return H8W>=S8W;}
,'g7t':function(k7t,P7t){return k7t*P7t;}
,'p86':function(N86,l86){return N86<l86;}
,'a2i':function(F2i,C2i){return F2i<C2i;}
,'e6n':function(J6n,H6n){return J6n==H6n;}
,'B9s':function(c9s,K9s){return c9s>=K9s;}
,'f4W':function(Y4W,p4W){return Y4W<p4W;}
,'G9O':function(A9O,g9O){return A9O<g9O;}
,'g96':function(k96,P96){return k96/P96;}
,'q0n':function(I0n,d0n){return I0n==d0n;}
,'d0i':function(E0i,b0i){return E0i<b0i;}
,'L23':function(x23,B23){return x23===B23;}
,'C54':function(T54,R54){return T54<R54;}
,'G3l':function(A3l,g3l){return A3l<g3l;}
,'B6n':function(c6n,K6n){return c6n>K6n;}
,'J96':function(H96,S96){return H96/S96;}
,'H6':function(S6,M6){return S6/M6;}
,'E8i':function(b8i,n8i){return b8i-n8i;}
,'a1n':function(F1n,C1n){return F1n*C1n;}
,'n4':function(L4,x4){return L4/x4;}
,'C9n':function(T9n,R9n){return T9n==R9n;}
,'R0O':function(f0O,Y0O){return f0O==Y0O;}
,'G3W':function(A3W,g3W,k3W,P3W){return A3W-g3W+k3W-P3W;}
,'N0t':function(l0t,z0t){return l0t==z0t;}
,'y2i':function(m2i,Z2i){return m2i<Z2i;}
,'M96':function(a96,F96){return a96*F96;}
,'d3W':function(E3W,b3W){return E3W!==b3W;}
,'T0W':function(R0W,f0W){return R0W==f0W;}
,'U3i':function(i9i,j9i){return i9i!=j9i;}
,'P23':function(s23,r23){return s23*r23;}
,'I7i':function(d7i,E7i){return d7i==E7i;}
,'S8O':function(M8O,a8O){return M8O<a8O;}
,'Y9O':function(p9O,N9O,l9O){return p9O*N9O/l9O;}
,'X8O':function(Q8O,o8O){return Q8O-o8O;}
,'x5U':function(B5U,c5U){return B5U/c5U;}
,'g9l':function(k9l,P9l){return k9l==P9l;}
,'A74':function(g74,k74){return g74===k74;}
,'C1i':function(T1i,R1i){return T1i-R1i;}
,'M8i':function(a8i,F8i){return a8i/F8i;}
,'Q4U':function(o4U,G4U){return o4U/G4U;}
,'F6i':function(C6i,T6i){return C6i!==T6i;}
,'j74':function(D74,u74){return D74===u74;}
,'l3':function(z3,V3){return z3==V3;}
,'l2n':function(z2n,V2n){return z2n>V2n;}
,'D7t':function(u7t,W7t){return u7t<W7t;}
,'o9l':function(G9l,A9l){return G9l==A9l;}
,'E8W':function(b8W,n8W){return b8W<n8W;}
,'B0i':function(c0i,K0i){return c0i<K0i;}
,'E9W':function(b9W,n9W){return b9W!==n9W;}
,'A23':function(g23,k23){return g23*k23;}
,'L0':function(B0,c0){return B0<c0;}
,'p93':function(N93,l93){return N93-l93;}
,'c7':function(K7,e7){return K7==e7;}
,'E6s':4,'c2l':function(K2l,e2l){return K2l<=e2l;}
,'R5':function(f5,Y5){return f5<Y5;}
,'q3s':function(I3s,d3s){return I3s>=d3s;}
,'i6n':function(j6n,D6n){return j6n<=D6n;}
,'B3l':function(c3l,K3l){return c3l===K3l;}
,'I8':function(d8,E8){return d8/E8;}
,'R56':function(f56,Y56){return f56/Y56;}
,'V74':function(y74,m74){return y74<m74;}
,'P0O':function(s0O,r0O,v0O){return s0O-r0O+v0O;}
,'r43':function(v43,O43){return v43===O43;}
,'S5':function(M5,a5){return M5<a5;}
,'I3t':function(d3t,E3t){return d3t==E3t;}
,'N0n':function(l0n,z0n){return l0n<z0n;}
,'h14':function(q14,I14){return q14===I14;}
,'n1l':function(L1l,x1l){return L1l==x1l;}
,'i5':function(j5,D5){return j5==D5;}
,'g8':function(k8,P8){return k8>P8;}
,'k9O':function(P9O,s9O){return P9O<s9O;}
,'F9U':function(C9U,T9U){return C9U/T9U;}
,'h4':function(q4,I4){return q4*I4;}
,'s2i':function(r2i,v2i){return r2i==v2i;}
,'c4i':function(K4i,e4i){return K4i<e4i;}
,'F8O':function(C8O,T8O){return C8O-T8O;}
,'m6i':function(Z6i,w6i){return Z6i==w6i;}
,'b8U':function(n8U,L8U,x8U,B8U){return n8U-L8U+x8U-B8U;}
,'m86':function(Z86,w86){return Z86/w86;}
,'y7n':function(m7n,Z7n){return m7n==Z7n;}
,'h34':function(q34,I34){return q34/I34;}
,'O9i':function(U9i,i5i){return U9i-i5i;}
,'i1l':function(j1l,D1l){return j1l<D1l;}
,'M4i':function(a4i,F4i){return a4i===F4i;}
,'a06':function(F06,C06){return F06==C06;}
,'b2i':function(n2i,L2i){return n2i===L2i;}
,'r8t':function(v8t,O8t){return v8t<=O8t;}
,'l3O':function(z3O,V3O){return z3O>V3O;}
,'Z4i':function(w4i,X4i){return w4i>X4i;}
,'l5U':function(z5U,V5U){return z5U-V5U;}
,'G6t':function(A6t,g6t){return A6t==g6t;}
,'x06':function(B06,c06){return B06>c06;}
,'E5i':function(b5i,n5i){return b5i-n5i;}
,'b2n':function(n2n,L2n){return n2n<L2n;}
,'A7l':function(g7l,k7l){return g7l==k7l;}
,'c1O':function(K1O,e1O){return K1O===e1O;}
,'B1l':function(c1l,K1l){return c1l==K1l;}
,'v9t':function(O9t,U9t){return O9t==U9t;}
,'y66':function(m66,Z66){return m66!=Z66;}
,'l8s':function(z8s,V8s){return z8s===V8s;}
,'v74':function(O74,U74){return O74==U74;}
,'b5O':function(n5O,L5O){return n5O===L5O;}
,'c4W':function(K4W,e4W){return K4W in e4W;}
,'y16':function(m16,Z16){return m16>=Z16;}
,'P2l':function(s2l,r2l){return s2l===r2l;}
,'L04':function(x04,B04){return x04-B04;}
,'j1O':function(D1O,u1O){return D1O<u1O;}
,'N83':function(l83,z83){return l83/z83;}
,'u1':function(W1,h1){return W1==h1;}
,'U3O':function(i9O,j9O){return i9O<j9O;}
,'r56':function(v56,O56){return v56&O56;}
,'q1n':function(I1n,d1n){return I1n-d1n;}
,'r9s':function(v9s,O9s){return v9s<O9s;}
,'K53':function(e53,J53){return e53==J53;}
,'G6W':function(A6W,g6W){return A6W<g6W;}
,'R43':function(f43,Y43){return f43==Y43;}
,'q1W':function(I1W,d1W){return I1W<d1W;}
,'W2l':function(t2l,h2l){return t2l!=h2l;}
,'r0U':function(v0U,O0U){return v0U/O0U;}
,'q1O':function(I1O,d1O){return I1O-d1O;}
,'d34':function(E34,b34){return E34<b34;}
,'k2U':function(P2U,s2U){return P2U>s2U;}
,'w9i':function(X9i,Q9i){return X9i<Q9i;}
,'j1W':function(D1W,u1W){return D1W==u1W;}
,'b6l':function(n6l,L6l){return n6l/L6l;}
,'C8i':function(T8i,R8i){return T8i/R8i;}
,'u5t':function(W5t,t5t){return W5t==t5t;}
,'W74':function(t74,h74){return t74>h74;}
,'D93':function(u93,W93){return u93-W93;}
,'x94':function(B94,c94){return B94-c94;}
,'z1l':function(V1l,y1l){return V1l<y1l;}
,'y53':function(m53,Z53){return m53===Z53;}
,'u4l':function(W4l,t4l){return W4l!=t4l;}
,'l04':function(z04,V04){return z04<=V04;}
,'i6O':function(j6O,D6O){return j6O>D6O;}
,'n5t':function(L5t,x5t){return L5t===x5t;}
,'S9U':function(M9U,a9U){return M9U*a9U;}
,'u5':function(W5,t5){return W5<t5;}
,'T7t':function(R7t,f7t){return R7t>f7t;}
,'R8t':function(f8t,Y8t){return f8t-Y8t;}
,'k6t':function(P6t,s6t){return P6t==s6t;}
,'b5U':function(n5U,L5U){return n5U==L5U;}
,'d1U':function(E1U,b1U){return E1U===b1U;}
,'e9U':function(J9U,H9U){return J9U*H9U;}
,'q9n':function(I9n,d9n){return I9n<d9n;}
,'o36':function(G36,A36){return G36<A36;}
,'U8U':function(i3U,j3U){return i3U<j3U;}
,'a5s':function(F5s,C5s){return F5s-C5s;}
,'H2W':function(S2W,M2W){return S2W<M2W;}
,'a9O':function(F9O,C9O){return F9O<C9O;}
,'v4O':function(O4O,U4O){return O4O===U4O;}
,'b64':function(n64,L64){return n64<L64;}
,'J3s':function(H3s,S3s){return H3s>=S3s;}
,'h43':function(q43,I43){return q43<I43;}
,'G8O':function(A8O,g8O){return A8O/g8O;}
,'g1n':function(k1n,P1n){return k1n-P1n;}
,'o64':function(G64,A64){return G64-A64;}
,'b2W':function(n2W,L2W){return n2W<=L2W;}
,'E9n':function(b9n,n9n){return b9n>n9n;}
,'I3U':function(d3U,E3U){return d3U*E3U;}
,'o54':function(G54,A54){return G54<A54;}
,'g7n':function(k7n,P7n){return k7n-P7n;}
,'Q24':function(o24,G24){return o24>G24;}
,'T0l':function(R0l,f0l){return R0l<=f0l;}
,'p5n':function(N5n,l5n){return N5n==l5n;}
,'k3l':function(P3l,s3l){return P3l<=s3l;}
,'G4O':function(A4O,g4O,k4O){return A4O*g4O/k4O;}
,'U6n':function(i7n,j7n){return i7n>=j7n;}
,'Y2O':function(p2O,N2O){return p2O-N2O;}
,'U6U':function(i7U,j7U,D7U,u7U){return i7U-j7U+D7U-u7U;}
,'E7U':function(b7U,n7U){return b7U/n7U;}
,'o3t':function(G3t,A3t){return G3t*A3t;}
,'Z1O':function(w1O,X1O){return w1O===X1O;}
,'Y2W':function(p2W,N2W){return p2W-N2W;}
,'J73':function(H73,S73){return H73>S73;}
,'p6n':function(N6n,l6n){return N6n==l6n;}
,'A3s':function(g3s,k3s){return g3s<=k3s;}
,'Y06':function(p06,N06){return p06<N06;}
,'Q7U':function(o7U,G7U){return o7U!=G7U;}
,'z6n':function(V6n,y6n){return V6n>=y6n;}
,'m0U':function(Z0U,w0U){return Z0U<=w0U;}
,'Z4W':function(w4W,X4W){return w4W!==X4W;}
,'D2W':function(u2W,W2W){return u2W!=W2W;}
,'F6t':function(C6t,T6t){return C6t!=T6t;}
,'Y3O':function(p3O,N3O){return p3O-N3O;}
,'A8U':function(g8U,k8U,P8U,s8U){return g8U-k8U+P8U-s8U;}
,'M1t':function(a1t,F1t){return a1t==F1t;}
,'v4W':function(O4W,U4W){return O4W<U4W;}
,'n4l':function(L4l,x4l){return L4l==x4l;}
,'E0n':function(b0n,n0n){return b0n==n0n;}
,'V9W':function(y9W,m9W){return y9W-m9W;}
,'R6U':function(f6U,Y6U){return f6U>Y6U;}
,'B76':function(c76,K76){return c76<=K76;}
,'E74':function(b74,n74){return b74>n74;}
,'I4U':function(d4U,E4U){return d4U<E4U;}
,'c4n':function(K4n,e4n){return K4n<e4n;}
,'F0O':function(C0O,T0O){return C0O!==T0O;}
,'L54':function(x54,B54){return x54<B54;}
,'d5t':function(E5t,b5t){return E5t<b5t;}
,'q7':function(I7,d7){return I7==d7;}
,'H7W':function(S7W,M7W){return S7W<M7W;}
,'n33':function(L33,x33){return L33<x33;}
,'P8l':function(s8l,r8l){return s8l>r8l;}
,'c5l':function(K5l,e5l){return K5l===e5l;}
,'z6i':function(V6i,y6i){return V6i==y6i;}
,'s3':function(r3,v3){return r3===v3;}
,'z0U':function(V0U,y0U){return V0U>=y0U;}
,'Z73':function(w73,X73){return w73*X73;}
,'w3O':function(X3O,Q3O){return X3O<Q3O;}
,'J4t':function(H4t,S4t){return H4t<S4t;}
,'n03':function(L03,x03){return L03/x03;}
,'r8n':function(v8n,O8n){return v8n==O8n;}
,'a2n':function(F2n,C2n){return F2n<C2n;}
,'c24':function(K24,e24){return K24===e24;}
,'W7U':function(t7U,h7U){return t7U<=h7U;}
,'s26':function(r26,v26){return r26>=v26;}
,'x8':function(B8,c8){return B8>=c8;}
,'e4l':function(J4l,H4l){return J4l/H4l;}
,'J0n':function(H0n,S0n){return H0n==S0n;}
,'S13':function(M13,a13){return M13>a13;}
,'C83':function(T83,R83){return T83/R83;}
,'T6':function(R6,f6){return R6==f6;}
,'Q4W':function(o4W,G4W){return o4W*G4W;}
,'s53':function(r53,v53){return r53==v53;}
,'Q1W':function(o1W,G1W){return o1W!=G1W;}
,'X44':function(Q44,o44){return Q44<o44;}
,'y63':function(m63,Z63){return m63-Z63;}
,'C96':function(T96,R96,f96){return T96-R96+f96;}
,'f4n':function(Y4n,p4n){return Y4n-p4n;}
,'n6n':function(L6n,x6n){return L6n<x6n;}
,'c3s':function(K3s,e3s){return K3s/e3s;}
,'f8U':function(Y8U,p8U){return Y8U>p8U;}
,'q54':function(I54,d54){return I54==d54;}
,'u13':function(W13,t13){return W13==t13;}
,'w1n':function(X1n,Q1n){return X1n*Q1n;}
,'m8n':function(Z8n,w8n){return Z8n==w8n;}
,'U43':function(i63,j63){return i63<j63;}
,'s9l':function(r9l,v9l){return r9l==v9l;}
,'T06':function(R06,f06){return R06<f06;}
,'g0l':function(k0l,P0l){return k0l>P0l;}
,'c96':function(K96,e96){return K96===e96;}
,'E7l':function(b7l,n7l){return b7l==n7l;}
,'F0i':function(C0i,T0i){return C0i!=T0i;}
,'y04':function(m04,Z04){return m04===Z04;}
,'O8s':function(U8s,i3s){return U8s===i3s;}
,'V1W':function(y1W,m1W){return y1W|m1W;}
,'d9U':function(E9U,b9U){return E9U<b9U;}
,'v0i':function(O0i,U0i){return O0i/U0i;}
,'G14':function(A14,g14){return A14>g14;}
,'D63':function(u63,W63){return u63==W63;}
,'i6t':function(j6t,D6t){return j6t-D6t;}
,'b5s':function(n5s,L5s){return n5s==L5s;}
,'w53':function(X53,Q53){return X53-Q53;}
,'l4U':function(z4U,V4U,y4U,m4U){return z4U-V4U+y4U-m4U;}
,'m5W':function(Z5W,w5W){return Z5W==w5W;}
,'W7':function(t7,h7){return t7*h7;}
,'x66':function(B66,c66){return B66-c66;}
,'A84':function(g84,k84){return g84/k84;}
,'D3n':function(u3n,W3n){return u3n<W3n;}
,'J83':function(H83,S83){return H83/S83;}
,'P1i':function(s1i,r1i,v1i){return s1i-r1i+v1i;}
,'x16':function(B16,c16){return B16<=c16;}
,'g3n':function(k3n,P3n){return k3n!=P3n;}
,'f7l':function(Y7l,p7l){return Y7l!=p7l;}
,'L5l':function(x5l,B5l){return x5l-B5l;}
,'a36':function(F36,C36){return F36-C36;}
,'R5W':function(f5W,Y5W){return f5W==Y5W;}
,'T2t':function(R2t,f2t){return R2t-f2t;}
,'K2i':function(e2i,J2i){return e2i===J2i;}
,'m0s':function(Z0s,w0s){return Z0s===w0s;}
,'O64':function(U64,i74){return U64<i74;}
,'I53':function(d53,E53){return d53===E53;}
,'P74':function(s74,r74){return s74*r74;}
,'T26':function(R26,f26){return R26*f26;}
,'E23':function(b23,n23){return b23===n23;}
,'G8t':function(A8t,g8t){return A8t>=g8t;}
,'b06':function(n06,L06){return n06<L06;}
,'x6l':function(B6l,c6l){return B6l-c6l;}
,'j2s':function(D2s,u2s){return D2s!==u2s;}
,'V4t':function(y4t,m4t){return y4t<m4t;}
,'D3U':function(u3U,W3U){return u3U>W3U;}
,'l63':function(z63,V63){return z63===V63;}
,'h44':function(q44,I44){return q44*I44;}
,'R34':function(f34,Y34){return f34/Y34;}
,'N8W':function(l8W,z8W){return l8W-z8W;}
,'A1t':function(g1t,k1t){return g1t!==k1t;}
,'x5s':function(B5s,c5s){return B5s<c5s;}
,'z03':function(V03,y03){return V03/y03;}
,'n0U':function(L0U,x0U){return L0U*x0U;}
,'W9t':function(t9t,h9t){return t9t*h9t;}
,'Y5s':function(p5s,N5s){return p5s>=N5s;}
,'D9l':function(u9l,W9l){return u9l==W9l;}
,'n44':function(L44,x44){return L44>x44;}
,'t3n':function(h3n,q3n){return h3n-q3n;}
,'S6U':function(M6U,a6U){return M6U>a6U;}
,'H0':function(S0,M0){return S0==M0;}
,'a26':function(F26,C26){return F26>C26;}
,'I36':function(d36,E36){return d36===E36;}
,'a53':function(F53,C53){return F53==C53;}
,'P0t':function(s0t,r0t){return s0t==r0t;}
,'O5s':function(U5s,i2s){return U5s<i2s;}
,'h13':function(q13,I13){return q13==I13;}
,'X1U':function(Q1U,o1U){return Q1U==o1U;}
,'c9':function(K9,e9){return K9<e9;}
,'x64':function(B64,c64){return B64<c64;}
,'p1U':function(N1U,l1U){return N1U!==l1U;}
,'z0s':function(V0s,y0s){return V0s<y0s;}
,'W0n':function(t0n,h0n){return t0n==h0n;}
,'J0t':function(H0t,S0t){return H0t==S0t;}
,'W1t':function(t1t,h1t){return t1t==h1t;}
,'e8n':function(J8n,H8n){return J8n==H8n;}
,'m56':function(Z56,w56){return Z56/w56;}
,'z5t':function(V5t,y5t){return V5t!==y5t;}
,'H6l':function(S6l,M6l){return S6l>=M6l;}
,'z2':function(V2,Z2){return V2==Z2;}
,'H36':function(S36,M36){return S36>M36;}
,'X1l':function(Q1l,o1l){return Q1l!=o1l;}
,'r44':function(v44,O44){return v44>=O44;}
,'T2i':function(R2i,f2i){return R2i===f2i;}
,'r1U':function(v1U,O1U){return v1U===O1U;}
,'b2t':function(n2t,L2t){return n2t-L2t;}
,'k8n':function(P8n,s8n){return P8n-s8n;}
,'W56':function(t56,h56){return t56<h56;}
,'R0i':function(f0i,Y0i){return f0i==Y0i;}
,'j73':function(D73,u73){return D73-u73;}
,'k5n':function(P5n,s5n){return P5n==s5n;}
,'y6':function(m6,Z6){return m6==Z6;}
,'q04':function(I04,d04){return I04-d04;}
,'e6i':function(J6i,H6i){return J6i>=H6i;}
,'X4l':function(Q4l,o4l){return Q4l<o4l;}
,'r93':function(v93,O93){return v93/O93;}
,'l26':function(z26,V26){return z26-V26;}
,'j8l':function(D8l,u8l){return D8l*u8l;}
,'C24':function(T24,R24){return T24==R24;}
,'b7t':function(n7t,L7t){return n7t-L7t;}
,'U9s':function(i5s,j5s){return i5s>j5s;}
,'Q9t':function(o9t,G9t){return o9t==G9t;}
,'H94':function(S94,M94){return S94/M94;}
,'U03':function(i83,j83){return i83-j83;}
,'n8t':function(L8t,x8t){return L8t/x8t;}
,'o66':function(G66,A66,g66,k66){return G66-A66+g66-k66;}
,'e1U':function(J1U,H1U){return J1U-H1U;}
,'C04':function(T04,R04){return T04*R04;}
,'V2l':function(y2l,m2l){return y2l<=m2l;}
,'B14':function(c14,K14){return c14===K14;}
,'Y7t':function(p7t,N7t){return p7t-N7t;}
,'d0s':function(E0s,b0s){return E0s<b0s;}
,'o5s':function(G5s,A5s){return G5s<=A5s;}
,'V23':function(y23,m23){return y23<m23;}
,'C1':function(T1,R1){return T1==R1;}
,'k8t':function(P8t,s8t){return P8t<=s8t;}
,'y5s':function(m5s,Z5s){return m5s>Z5s;}
,'r0s':function(v0s,O0s){return v0s/O0s;}
,'a2O':function(F2O,C2O){return F2O<C2O;}
,'M2l':function(a2l,F2l){return a2l<=F2l;}
,'j04':function(D04,u04){return D04==u04;}
,'U76':function(i16,j16){return i16<j16;}
,'s2n':function(r2n,v2n){return r2n==v2n;}
,'d44':function(E44,b44){return E44-b44;}
,'t3U':function(h3U,q3U){return h3U*q3U;}
,'x5O':function(B5O,c5O){return B5O===c5O;}
,'I5s':function(d5s,E5s){return d5s<E5s;}
,'o8s':function(G8s,A8s){return G8s/A8s;}
,'t8U':function(h8U,q8U){return h8U<=q8U;}
,'F43':function(C43,T43){return C43==T43;}
,'v1O':function(O1O,U1O){return O1O-U1O;}
,'E2':function(b2,n2){return b2<n2;}
,'d5n':function(E5n,b5n){return E5n*b5n;}
,'C8U':function(T8U,R8U){return T8U<R8U;}
,'q1t':function(I1t,d1t){return I1t<d1t;}
,'E3':function(b3,n3){return b3<n3;}
,'G76':function(A76,g76){return A76*g76;}
,'E9t':function(b9t,n9t){return b9t*n9t;}
,'p0O':function(N0O,l0O){return N0O!=l0O;}
,'V1t':function(y1t,m1t){return y1t==m1t;}
,'G3i':function(A3i,g3i){return A3i==g3i;}
,'W7l':function(t7l,h7l){return t7l!==h7l;}
,'M7l':function(a7l,F7l){return a7l<F7l;}
,'P16':function(s16,r16){return s16<=r16;}
,'y9i':function(m9i,Z9i){return m9i==Z9i;}
,'L46':function(x46,B46){return x46/B46;}
,'X2O':function(Q2O,o2O){return Q2O-o2O;}
,'y5U':function(m5U,Z5U,w5U,X5U){return m5U-Z5U+w5U-X5U;}
,'C7':function(T7,R7){return T7>=R7;}
,'T2n':function(R2n,f2n){return R2n<f2n;}
,'V4W':function(y4W,m4W){return y4W in m4W;}
,'b1':function(n1,L1){return n1==L1;}
,'U14':function(i06,j06){return i06-j06;}
,'l5i':function(z5i,V5i){return z5i-V5i;}
,'E9':function(b9,n9){return b9-n9;}
,'u76':function(W76,t76){return W76/t76;}
,'j54':function(D54,u54){return D54===u54;}
,'d43':function(E43,b43){return E43!==b43;}
,'C4W':function(T4W,R4W){return T4W in R4W;}
,'k43':function(P43,s43){return P43===s43;}
,'G6O':function(A6O,g6O){return A6O>g6O;}
,'B3W':function(c3W,K3W){return c3W>K3W;}
,'J2s':function(H2s,S2s){return H2s<S2s;}
,'n14':function(L14,x14){return L14-x14;}
,'S43':function(M43,a43){return M43==a43;}
,'Q9':function(o9,G9){return o9<G9;}
,'N9W':function(l9W,z9W){return l9W/z9W;}
,'a3U':function(F3U,C3U){return F3U>C3U;}
,'T2W':function(R2W,f2W){return R2W>=f2W;}
,'j8O':function(D8O,u8O){return D8O!==u8O;}
,'D2O':function(u2O,W2O){return u2O==W2O;}
,'c8i':function(K8i,e8i){return K8i/e8i;}
,'n4O':function(L4O,x4O){return L4O-x4O;}
,'P8i':function(s8i,r8i){return s8i/r8i;}
,'S5W':function(M5W,a5W){return M5W==a5W;}
,'K26':function(e26,J26){return e26!=J26;}
,'p43':function(N43,l43){return N43==l43;}
,'B6W':function(c6W,K6W){return c6W===K6W;}
,'K5s':function(e5s,J5s){return e5s!=J5s;}
,'Y3':function(p3,N3){return p3<=N3;}
,'S1l':function(M1l,a1l){return M1l-a1l;}
,'d6t':function(E6t,b6t){return E6t-b6t;}
,'V9t':function(y9t,m9t){return y9t in m9t;}
,'V8U':function(y8U,m8U){return y8U<=m8U;}
,'c56':function(K56,e56,J56,H56){return K56-e56+J56-H56;}
,'m4l':function(Z4l,w4l){return Z4l*w4l;}
,'g06':function(k06,P06){return k06===P06;}
,'C5l':function(T5l,R5l){return T5l===R5l;}
,'R6i':function(f6i,Y6i){return f6i-Y6i;}
,'f8W':function(Y8W,p8W){return Y8W==p8W;}
,'L8l':function(x8l,B8l){return x8l>B8l;}
,'l7t':function(z7t,V7t){return z7t<V7t;}
,'n9U':function(L9U,x9U){return L9U<x9U;}
,'X4':function(Q4,o4){return Q4<o4;}
,'c8U':function(K8U,e8U){return K8U<=e8U;}
,'R44':function(f44,Y44){return f44<Y44;}
,'H9i':function(S9i,M9i){return S9i==M9i;}
,'j7l':function(D7l,u7l){return D7l-u7l;}
,'I2W':function(d2W,E2W){return d2W/E2W;}
,'K3U':function(e3U,J3U){return e3U<J3U;}
,'o5l':function(G5l,A5l){return G5l!=A5l;}
,'V33':function(y33,m33){return y33==m33;}
,'D2i':function(u2i,W2i){return u2i===W2i;}
,'v4t':function(O4t,U4t){return O4t-U4t;}
,'Z4U':function(w4U,X4U){return w4U<=X4U;}
,'u9U':function(W9U,t9U){return W9U>t9U;}
,'t8':function(h8,q8){return h8/q8;}
,'M1W':function(a1W,F1W){return a1W|F1W;}
,'O1':function(U1,i04){return U1==i04;}
,'q9t':function(I9t,d9t){return I9t in d9t;}
,'g2W':function(k2W,P2W){return k2W<P2W;}
,'L7':function(x7,B7){return x7>B7;}
,'X86':function(Q86,o86){return Q86*o86;}
,'v8W':function(O8W,U8W){return O8W==U8W;}
,'V73':function(y73,m73){return y73*m73;}
,'O0O':function(U0O,i8O){return U0O==i8O;}
,'i9s':function(j9s,D9s){return j9s<D9s;}
,'r8O':function(v8O,O8O){return v8O/O8O;}
,'Q0t':function(o0t,G0t){return o0t==G0t;}
,'W0t':function(t0t,h0t){return t0t==h0t;}
,'j4i':function(D4i,u4i){return D4i===u4i;}
,'b3n':function(n3n,L3n){return n3n<L3n;}
,'Q73':function(o73,G73){return o73*G73;}
,'b3U':function(n3U,L3U){return n3U>L3U;}
,'C4t':function(T4t,R4t){return T4t*R4t;}
,'T64':function(R64,f64){return R64>=f64;}
,'h2':function(q2,I2){return q2<I2;}
,'F2':function(C2,T2){return C2*T2;}
,'M74':function(a74,F74){return a74-F74;}
,'z8t':function(V8t,y8t){return V8t>y8t;}
,'p9s':function(N9s,l9s){return N9s>l9s;}
,'y7i':function(m7i,Z7i){return m7i==Z7i;}
,'y5i':function(m5i,Z5i){return m5i===Z5i;}
,'l0':function(z0,V0){return z0==V0;}
,'u14':function(W14,t14){return W14/t14;}
,'A73':function(g73,k73){return g73*k73;}
,'R13':function(f13,Y13){return f13>Y13;}
,'R6t':function(f6t,Y6t){return f6t<Y6t;}
,'u44':function(W44,t44){return W44-t44;}
,'V8l':function(y8l,m8l){return y8l<m8l;}
,'v9n':function(O9n,U9n){return O9n<U9n;}
,'O6':function(U6,i7){return U6!=i7;}
,'m44':function(Z44,w44){return Z44>w44;}
,'z3W':function(V3W,y3W){return V3W==y3W;}
,'m6n':function(Z6n,w6n){return Z6n<=w6n;}
,'J9n':function(H9n,S9n){return H9n<S9n;}
,'L1O':function(x1O,B1O){return x1O===B1O;}
,'Z4n':function(w4n,X4n){return w4n*X4n;}
,'g3':function(k3,P3){return k3/P3;}
,'h9s':function(q9s,I9s){return q9s<I9s;}
,'R4l':function(f4l,Y4l){return f4l/Y4l;}
,'v7':function(O7,U7){return O7==U7;}
,'a8':function(F8,C8){return F8==C8;}
,'H3U':function(S3U,M3U){return S3U!=M3U;}
,'w54':function(X54,Q54){return X54>Q54;}
,'w7i':function(X7i,Q7i){return X7i>Q7i;}
,'s2W':function(r2W,v2W){return r2W-v2W;}
,'x0l':function(B0l,c0l){return B0l>c0l;}
,'a66':function(F66,C66){return F66<=C66;}
,'v4U':function(O4U,U4U){return O4U<U4U;}
,'Q9n':function(o9n,G9n){return o9n<G9n;}
,'y8s':function(m8s,Z8s){return m8s!==Z8s;}
,'I6':function(d6,E6){return d6>E6;}
,'n0O':function(L0O,x0O){return L0O==x0O;}
,'B86':function(c86,K86){return c86===K86;}
,'V24':function(y24,m24){return y24/m24;}
,'k6W':function(P6W,s6W){return P6W!=s6W;}
,'B3i':function(c3i,K3i){return c3i*K3i;}
,'d86':function(E86,b86){return E86-b86;}
,'m14':function(Z14,w14){return Z14/w14;}
,'q8l':function(I8l,d8l){return I8l<d8l;}
,'C7U':function(T7U,R7U){return T7U>R7U;}
,'G2U':function(A2U,g2U){return A2U-g2U;}
,'s04':function(r04,v04){return r04/v04;}
,'l9l':function(z9l,V9l){return z9l>V9l;}
,'Q74':function(o74,G74){return o74===G74;}
,'n5n':function(L5n,x5n){return L5n*x5n;}
,'S3l':function(M3l,a3l){return M3l!==a3l;}
,'N5l':function(l5l,z5l,V5l){return l5l-z5l-V5l;}
,'g6':function(k6,P6){return k6==P6;}
,'z46':function(V46,y46){return V46==y46;}
,'y94':function(m94,Z94){return m94-Z94;}
,'X93':function(Q93,o93){return Q93*o93;}
,'M2s':function(a2s,F2s){return a2s===F2s;}
,'O06':function(U06,i86,j86){return U06*i86/j86;}
,'b9i':function(n9i,L9i){return n9i==L9i;}
,'b93':function(n93,L93){return n93/L93;}
,'z8n':function(V8n,y8n){return V8n/y8n;}
,'H0W':function(S0W,M0W){return S0W<=M0W;}
,'r5i':function(v5i,O5i){return v5i<O5i;}
,'L4t':function(x4t,B4t){return x4t*B4t;}
,'a6l':function(F6l,C6l){return F6l-C6l;}
,'r5n':function(v5n,O5n){return v5n*O5n;}
,'q96':function(I96,d96){return I96*d96;}
,'S33':function(M33,a33){return M33<a33;}
,'K4U':function(e4U,J4U){return e4U<J4U;}
,'u03':function(W03,t03){return W03-t03;}
,'x9l':function(B9l,c9l){return B9l==c9l;}
,'t26':function(h26,q26){return h26<=q26;}
,'f2l':function(Y2l,p2l){return Y2l<=p2l;}
,'e8t':function(J8t,H8t){return J8t<H8t;}
,'Q8l':function(o8l,G8l){return o8l/G8l;}
,'i0i':function(j0i,D0i){return j0i>=D0i;}
,'y2t':function(m2t,Z2t){return m2t===Z2t;}
,'v1W':function(O1W,U1W){return O1W<U1W;}
,'v2l':function(O2l,U2l){return O2l===U2l;}
,'k4':function(P4,s4){return P4==s4;}
,'U5n':function(i2n,j2n){return i2n*j2n;}
,'f3s':function(Y3s,p3s){return Y3s>=p3s;}
,'F93':function(C93,T93){return C93*T93;}
,'D0W':function(u0W,W0W){return u0W!==W0W;}
,'t7O':function(h7O,q7O){return h7O!==q7O;}
,'o2W':function(G2W,A2W){return G2W>=A2W;}
,'R2U':function(f2U,Y2U){return f2U-Y2U;}
,'Q83':function(o83,G83){return o83/G83;}
,'w0W':function(X0W,Q0W){return X0W-Q0W;}
,'C9W':function(T9W,R9W){return T9W<=R9W;}
,'Y36':function(p36,N36){return p36===N36;}
,'F8t':function(C8t,T8t){return C8t<T8t;}
,'s7n':function(r7n,v7n){return r7n-v7n;}
,'O9l':function(U9l,i5l){return U9l<i5l;}
,'W2s':function(t2s,h2s){return t2s!=h2s;}
,'M3':function(a3,F3){return a3<F3;}
,'S0i':function(M0i,a0i){return M0i-a0i;}
,'h03':function(q03,I03){return q03!=I03;}
,'J9':function(H9,S9){return H9==S9;}
,'K0':function(e0,J0){return e0==J0;}
,'p4l':function(N4l,l4l){return N4l>l4l;}
,'C1O':function(T1O,R1O){return T1O<R1O;}
,'t94':function(h94,q94){return h94===q94;}
,'n5':function(L5,x5){return L5/x5;}
,'J4i':function(H4i,S4i){return H4i===S4i;}
,'t93':function(h93,q93){return h93*q93;}
,'R6W':function(f6W,Y6W){return f6W==Y6W;}
,'H53':function(S53,M53){return S53==M53;}
,'y26':function(m26,Z26){return m26<Z26;}
,'m13':function(Z13,w13){return Z13>=w13;}
,'I7t':function(d7t,E7t){return d7t>=E7t;}
,'d6U':function(E6U,b6U){return E6U*b6U;}
,'c73':function(K73,e73){return K73<e73;}
,'i5t':function(j5t,D5t){return j5t==D5t;}
,'g54':function(k54,P54){return k54-P54;}
}
;(function(){var U45=o5i.u4b.W4b("bb")?"args":(8.05E2<=(94,72.)?"px":(82.10E1,83.60E1)>0x58?(0x124,1978768295):(68,80.5E1)<=(6.79E2,54)?(7.63E2,'m'):(54,0x188)),i65=o5i.u4b.W4b("fd")?"colored_line":1614839875,j65=o5i.u4b.W4b("11")?"mousewheel":-(73.>(1.187E3,31.)?(126.,1507611027):(5.53E2,67.9E1)),D65=o5i.u4b.W4b("236")?2001805359:1000000,u65=o5i.u4b.W4b("fdd")?((4.65E2,1.1320E3)>=(5.55E2,87.10E1)?(1.79E2,932143330):11.870E2>(0x17F,1.433E3)?0x37:1.6E1>=(70.3E1,0x16B)?(108.80E1,'y'):(0x78,0x6F)):"STXChart";if(o5i.C2s.f2s(((0x147,0x1A1)<=12.06E2?(0xA5,12):(135.,0x14C)),9942004)===U45||o5i.C2s.f2s(17,4139020)===i65||o5i.C2s.f2s(11,4066062)===j65||o5i.C2s.f2s(0,6089727)===D65||o5i.C2s.f2s((116.<(0x5A,0x6F)?(101.60E1,1.1):(77.7E1,0x254)>(42,0xE9)?(14.64E2,0):149.>=(34.,0x134)?"h":(0x114,2.21E2)),9978390)===u65){var I4o=o5i.u4b.W4b("fb")?"highlighted":"initializeChart",K1s=o5i.u4b.W4b("e15")?"objLength":"function",T6o=o5i.u4b.W4b("e8ab")?"stx":"iter2",J6s="undefined";}
else{this.rendererAction(chart,"overlay");context.moveTo(o5i.N8U(xbase,2),top);labelDate.setSeconds(0);seriesPlotter.newSeries("gap","stroke",color,1,width);return G3n==A3n;}
function _stxKernel_js(_stxThirdParty,_exports){var m15=o5i.u4b.W4b("4edc")?1532356418:'setMasterData : Missing DT and Date on masterData object',Z15=o5i.u4b.W4b("7a5")?"correctIfOffEdge":-1413351687,w15=-((0x12B,0x21C)>(41.7E1,0x163)?(9.450E2,1212203956):(30.,87.5E1)),X15=919759568,Q15=o5i.u4b.W4b("3141")?-1760427292:'interval';if(o5i.C2s.f2s(12,6889453)===m15||o5i.C2s.f2s(17,((113.0E1,54)>5.9E1?0x84:55.>(10.040E2,67.)?13.60E1:(0x2E,0x13D)>=12.?(6.,5751659):(0x246,0x115)))===Z15||o5i.C2s.f2s(11,9487105)===w15||o5i.C2s.f2s(0,2250232)===X15||o5i.C2s.f2s(0,5893607)===Q15){var o05=o5i.u4b.W4b("11")?"priceFormatter":"createDataSegment",u6o="dataSet",l7o="minute",S8o="mp",L0o=o5i.u4b.W4b("6ee")?"mn":"numeric",F9o=0.3,f1o=33,U3o=o5i.u4b.W4b("1dc")?"querySelectorAll":"vertical",I5o='tick',j8o=o5i.u4b.W4b("afa")?"gap":"timeRange",g7s="center",H7o="right",A2o="le",x6s="top",S85=o5i.u4b.W4b("4c3")?"bottom":"Renderer",m0o="stx_xaxis",Z35="mouse",I6s=6,C9o=0.2,z9o=0.8,z05=20,U9o="ch",s1o="stx-show",q05=(2.95E2<(18.,14.9E2)?(2.6E1,30):(6.600E2,97)),t4o="stx-grab",c9o="touchend",u0o="touchmove",P2o="touchstart",Y0o="D",q1s="us",R3o="mousedown",Z7o=(0x1E4<=(0xDD,124)?"px":(0x234,0xB8)<=(11.790E2,1.068E3)?(3.23E2,"*"):(45,4.)),f05=12,k9o="year",Q35="all",R8o="object",O1s="ic",z6s=((10.540E2,0x20F)<109.9E1?(4.93E2,"S"):(0xE7,0x152)),S2o=".",a35="number",y5o="ta",e0o="uo",V4s="Q",F7s="at",P1o='jec',y0o="F",r05="#FFFFFF",F5o="#000000",F8o="en",s3o="lin",c2o="own",j7s="ar",E05=32,J35="it",R6s="month",P9o="week",G1s="day",l6s="ap",x0o="calculate",C4s="overlay",l0o="underlay",C35="nd",e3o="edown",f7s="tap",k3o="stx-drag-chart",u55=250,v85="mouseup",I9o="_",w9o="ed",r4o="ec",U6o="j",Z0o="stx_crosshair",C8o="stx_crosshair_drawing",W7s="x_c",v8o="st",I7s="segment",C1s="ur",K1o=")",o0o=" (",J7o="%",R35=10000,z35=1000,C6s=0.01,f9o=0.1,K9o="measureUnlit",Q85="mMeasure",K7o="re",b3o="inline-block",u35=50,A85=60,t55="in",j55="w",e95=((0x219,4.810E2)<=(0x2,0x219)?(93,"y"):(0x162,91)>=0x67?0.3:(1.365E3,0x15)),t2o="ove",X05="mousem",d9o="mousemove",o35="none",D0o="block",n0o="sh",k8o="os",Q9o="stx-crosshair-on",J9o="los",L85="C",N7o=((0x1B8,108)>=(5.62E2,106.)?(0x170,"h"):(0xE4,0xAF)),V35="bar",u6s=(0x200<(142.,2.39E2)?59:50.7E1<(0x142,0x6D)?'A':0x1F9>(112,1.)?(69.0E1,"R"):(129,5.10E1)),v35=((1.4060E3,46.)>0x1E?(16,100):(26.,0xB9)),L05="millisecond",B05="second",f95=":",L4o="-",q85="px",W9o="ou",W7o="stx_candle_shadow",Z6s="stx_candle_down",Q4s="stx_candle_up",x05="left",m1s="stx_grid_border",c55="border",r0o="fill",R2o="text",N3o="stx_grid",a1s="stroke",l05="grid",L7s="stx_yaxis",G9o="drawYAxis",S9o=0.5,C2o="",h6o=((122.60E1,18.)>=0x112?(0x17F,1.1):70.9E1<(0x107,144.70E1)?(19.90E1,"0"):0x1B1<(84,69)?(0x177,0xBB):(125.,32.)),O05=(88.0E1<(0x1FA,1.4000E3)?(0x140,10):(0x228,134.9E1)<126.?(4.78E2,100):(51.0E1,5.07E2)<148.?100:(77,85.)),p8o="chart",F1s="ine",I35="ne",H6o="1",b7o="k",M95="sP",X6o="m",c05=". ",z5o="on",h35="rt",C7s="se",y85=": ",k6s="T",a3o="er",j3o="or",f8o=(19.1E1<=(14.64E2,138.4E1)?(0x4C,"b"):(16.1E1,0x1D6)<0x1C5?(0x24A,1.1):(63.,51.)),g85="A",O5o="X",O2o="te",F6o="ea",L3o="c",W35="is",Z95="x",H4o="s",G7o="i",z2o="t",J7s="me",m9o="ce",G8o="a",h4o="r",y4o="li",c8o="drawing",z1s="vector",N6s="layout",x35=false,j1o="f",n3o="e",F3o=((0xD4,3.30E1)<9.67E2?(0x145," "):(3.71E2,1.119E3)),k5o="transparent",R7s="div",L7o=true,U5o="#zoomOut",n6o="n",a6o="o",h95="z",v9o='tyle',S3o='eline',r8o='lose',V8o='di',Z5o='w',N0o='nel',P95='ocu',Z8o='ne',x9o='tn',t5o='tl',V6o='ass',L1s='ol',D85='ntr',p2o='anel',p1s='> ',r35='co',T1o='play',L9o='yl',s8o='te',n85='oa',t05='f',y4s='ss',A8o='lay',L8o='me',I2o='oday',P7s='_t',E7s='mp',X0o='_j',H8o='om',L5o='las',l5o='mIn',k0o='oo',k95='ut',L2o=(135.>(1.298E3,0x244)?(0xBE,68.):0x18C<(0x123,0x246)?(0x23,'u'):(0x220,45.)),b35='mO',Y8o='z',s95='ze',i0o='art',g05=';"><',O4o='px',r4s='2',K6s='otto',y1o='le',y95='ls',q7s='art_',G1o='x_',t1o='pla',o4o='ty',S6s='_y',A1s='sshair',D7s='cr',s7s='shair',X2o='x_c',t3o='lass',W55=';"></',y6o='pl',o4s='is',h1s='air',F0o='ossh',H6s='ir',o8o='sha',y6s='os',z0o='iv',p05='>)</',l3o='ge',a0o='ana',Y95='ick',E4o='ht',n1s='Text',O1o='Manag',v1o='se',l4s='lic',h55='h',o95='g',G6s='">',o7o='xt',q95='eTe',Q3o='eD',q55='ous',x4o='><',u9o='>(</',U4o='ns',v2o='ru',Y4s='st',N6o='teIn',y8o='seD',w4s='ou',j5o='></',q1o=';</',D5o='">&',w3o='ra',F2o='"><',Z4o='spl',c95='yle',Z1s='Ca',Y05='sh',Q1s='layTr',W2o='ver',N35='o',f5o='pa',z1o='=""><',x7s='as',X35='k',E85='li',h8o='ghtC',Y6s='Ri',C0o='cky',Z3o='ti',p7o='> <',j6o='"></',T9o='r',y7s='terio',r7s='In',H2o='Sticky',c6s='"> <',D55='ck',b4o='S',P1s='el',w1s='anc',Q5o='0px',a7s='1',Y1s=':',j35='eft',e7s='in',p3o='arg',q35=((0x1A9,0xB4)>=51.1E1?" ":(1.498E3,6.59E2)<=1.002E3?(0x5C,'m'):(143.,0x144)),S05='; ',E6o='one',b8o='la',F4o='isp',e85='tyl',E5o='cel',d0o='can',G85='_',u2o='ati',L6s='ot',H35='_a',W3o='x',M3o='>',Z4s='an',q5o='p',L55='</',E55='ve',S6o=';">',t8o='on',g7o=': ',b0o='ay',g35='sp',b95='i',U05='d',B3o='y',u7s='" ',l1o='e',p5o='v',u05='on_sa',u8o='notati',V1s='tx_an',M35='n',j2o='t',N85='b',c7s='-',f4o='tx',M1o='="',B85='a',u95='l',Z05='c',i05=' ',J6o='pan',g9o=(0x164<=(82.,1.3980E3)?(94,'s'):(0xEF,8.53E2)),E0o=((0xF2,82.)<=53?(3.820E2,"q"):(68.7E1,0xC8)<=(8.24E2,130.8E1)?(57.90E1,'<'):(36.,1.59E2)>0xCF?(0x171,0x2C):(95.30E1,0xA4)),Q=function(G){var S3f=((147.,0x30)>81.?65.:(0,0x1D2)>(0x1E1,40.)?(7.99E2,1222267968):(0x1E2,109)>131.3E1?(5.9E2,0.9):(102.,0x1FC)),M3f=197669565,a3f=457015758,F3f=1343129424,C3f=((146,40)>5.350E2?0x152:(1.096E3,0x1CB)>30?(1.17E2,406857390):(53.,0x1DD)<=(0x1D3,40.2E1)?"bar":(0x107,3.21E2));if(o5i.C2s.f2s(12,2428388)===S3f||o5i.C2s.f2s(17,9164495)===M3f||o5i.C2s.f2s(11,8096117)===a3f||o5i.C2s.f2s(0,5656674)===F3f||o5i.C2s.f2s(0,1780359)===C3f){STX.Comparison.mouseHasMoved=G;}
else{plotter.lineTo("border",obj.hz,b+6);this.drawShadowsHighPerformance(panel,"stx_hollow_candle_up",STXChart.CLOSEUP);return I1W<d1W;}
}
,Z=function(X){var h2f=-1611493375,q2f=331792309,I2f=((0x6A,9.74E2)>=0x10C?(5.71E2,1768985068):(0x67,86.)),d2f=((0x1E4,0xCE)>=29.?(0x23B,1064500008):(113,4.9E2)<=(0x1A5,4.01E2)?0x1E5:(11.83E2,0x169)<=(52.40E1,115)?(47.,89):(39.,0xBD)),E2f=1453490664;if(o5i.C2s.f2s(12,(4.560E2<(0x1F9,0x108)?(0xC3,46.6E1):107.>(61.1E1,9.24E2)?(113,"+"):(94.,0x18C)<0x193?(23.0E1,1962190):(16.6E1,0xF8)))===h2f||o5i.C2s.f2s(17,8703779)===q2f||o5i.C2s.f2s(11,1448965)===I2f||o5i.C2s.f2s(0,1708645)===d2f||o5i.C2s.f2s((92.0E1>(0x66,129.)?(0x203,0):14.32E2<(0x10C,56.90E1)?"c":(69,0x1A4)),9728514)===E2f){STXChart.CANDLEEVEN=X;}
else{context.fillText(obj.text,obj.hz,middle);this.chart.baseLegendColors.push(this.getCanvasColor("stx_pandf_down"));gaps.push(gap);}
}
,N=function(V){STXChart.CANDLEDOWN=V;}
,R=function(Y){STXChart.CANDLEUP=Y;}
,C=function(T){var A6f=-39628098,g6f=((1.291E3,54.)<(28,81.10E1)?(21.8E1,1592169232):(110.,58.)),k6f=-602178546,P6f=1879945619,s6f=382202879;if(o5i.C2s.f2s(12,((1,9.57E2)<(36,104.)?(83.,"E"):(0x65,2.98E2)<(6.19E2,106.10E1)?(8.9E1,3567104):(107.9E1,0x119)<0x82?92.5E1:(21.,0x88)))===A6f||o5i.C2s.f2s((28.20E1>(96,105.)?(0x156,17):0x21A<(35,41.)?"x1":(25.,27)),((1E0,100.9E1)>(0xF4,83.)?(7.520E2,9222607):(26.,119.4E1)<35.?(13,'P'):(67,4.32E2)))===g6f||o5i.C2s.f2s(11,9664281)===k6f||o5i.C2s.f2s(((0xAF,99)>=0xF4?0x1A8:(0x37,7E0)<=90.10E1?(8.,0):(0x1A6,0x252)),8903606)===P6f||o5i.C2s.f2s(((6.4E2,0xBA)<0xB4?(0x142,0x11):(120,42.40E1)<3.30E1?(4.3E2,101.):(1.1500E3,0x1B1)<128.4E1?(0x110,0):(4,1.367E3)),(8.040E2<=(0x1A0,130.)?(0xCD,"O"):(0x174,118.)>=(144,77.)?(0x1BA,5664522):(136,0x6A)))===s6f){STXChart.CLOSEEVEN=T;}
else{return O8i/U8i;}
}
,M=function(F){STXChart.CLOSEDOWN=F;}
,H=function(S){STXChart.CLOSEUP=S;}
,K=function(J){STXChart.NONE=J;}
,L=function(B){STX.camelCaseRegExp=B;}
,plotSpline=_stxThirdParty.plotSpline,plotSplinePrimitive=_stxThirdParty.plotSplinePrimitive,timezoneJS=_stxThirdParty.timezoneJS,STX=_exports.STX,STXChart=_exports.STXChart,$$=_exports.$$,$$$=_exports.$$$;STXChart.prototype.plugins={}
;if(STX.isSurface){var W=function(E){STX.gesturePointerId=E;}
,D=function(u){STX.gesture.target=u.body;}
;STX.gesture=new MSGesture();D(document);W(o5i.d7o);}
}
else{this.chart.baseLegendColors.push(this.getCanvasColor("stx_kagi_down"));this.setMasterData(masterData,chart);context.moveTo(xxl+paddingLeft,o5i.U9U(start,height,paddingTop,voffset));}
STXChart.htmlControls={"annotationSave":(E0o+g9o+J6o+i05+Z05+u95+B85+g9o+g9o+M1o+g9o+f4o+c7s+N85+j2o+M35+i05+g9o+V1s+u8o+u05+p5o+l1o+u7s+g9o+j2o+B3o+u95+l1o+M1o+U05+b95+g35+u95+b0o+g7o+M35+t8o+l1o+S6o+g9o+B85+E55+L55+g9o+q5o+Z4s+M3o),"annotationCancel":(E0o+g9o+J6o+i05+Z05+u95+B85+g9o+g9o+M1o+g9o+j2o+W3o+c7s+N85+j2o+M35+i05+g9o+f4o+H35+M35+M35+L6s+u2o+t8o+G85+d0o+E5o+u7s+g9o+e85+l1o+M1o+U05+F4o+b8o+B3o+g7o+M35+E6o+S05+q35+p3o+e7s+c7s+u95+j35+Y1s+a7s+Q5o+S6o+Z05+w1s+P1s+L55+g9o+q5o+Z4s+M3o),"mSticky":(E0o+U05+b95+p5o+i05+b95+U05+M1o+q35+b4o+j2o+b95+D55+B3o+c6s+g9o+J6o+i05+b95+U05+M1o+q35+H2o+r7s+y7s+T9o+j6o+g9o+q5o+Z4s+p7o+g9o+q5o+Z4s+i05+b95+U05+M1o+q35+b4o+Z3o+C0o+Y6s+h8o+E85+Z05+X35+u7s+Z05+u95+x7s+g9o+z1o+g9o+f5o+M35+i05+b95+U05+M1o+N35+W2o+Q1s+B85+Y05+Z1s+M35+u7s+Z05+b8o+g9o+g9o+M1o+g9o+j2o+W3o+c7s+N85+j2o+M35+u7s+g9o+j2o+c95+M1o+U05+b95+Z4o+B85+B3o+Y1s+M35+t8o+l1o+F2o+g9o+q5o+Z4s+i05+Z05+u95+B85+g9o+g9o+M1o+g9o+j2o+W3o+c7s+b95+Z05+N35+c7s+j2o+w3o+Y05+D5o+M35+N85+g35+q1o+g9o+f5o+M35+j5o+g9o+f5o+M35+p7o+g9o+q5o+Z4s+i05+b95+U05+M1o+q35+w4s+y8o+l1o+u95+l1o+N6o+Y4s+v2o+Z05+j2o+b95+N35+U4o+F2o+g9o+f5o+M35+u9o+g9o+q5o+B85+M35+x4o+g9o+f5o+M35+i05+b95+U05+M1o+q35+q55+Q3o+P1s+l1o+j2o+q95+o7o+G6s+T9o+b95+o95+h55+j2o+c7s+Z05+l4s+X35+i05+j2o+N35+i05+U05+P1s+l1o+j2o+l1o+L55+g9o+q5o+B85+M35+x4o+g9o+q5o+Z4s+i05+b95+U05+M1o+q35+w4s+v1o+O1o+l1o+n1s+G6s+T9o+b95+o95+E4o+c7s+Z05+u95+Y95+i05+j2o+N35+i05+q35+a0o+l3o+L55+g9o+q5o+B85+M35+x4o+g9o+q5o+B85+M35+p05+g9o+f5o+M35+j5o+g9o+q5o+Z4s+j5o+g9o+q5o+B85+M35+j5o+U05+z0o+M3o),"crossX":(E0o+U05+z0o+i05+Z05+b8o+g9o+g9o+M1o+g9o+j2o+W3o+G85+Z05+T9o+y6s+o8o+H6s+i05+g9o+f4o+G85+Z05+T9o+F0o+h1s+G85+W3o+u7s+g9o+j2o+B3o+u95+l1o+M1o+U05+o4s+y6o+B85+B3o+g7o+M35+E6o+W55+U05+b95+p5o+M3o),"crossY":(E0o+U05+z0o+i05+Z05+t3o+M1o+g9o+j2o+X2o+T9o+y6s+s7s+i05+g9o+f4o+G85+D7s+N35+A1s+S6s+u7s+g9o+o4o+u95+l1o+M1o+U05+b95+g9o+t1o+B3o+g7o+M35+E6o+W55+U05+z0o+M3o),"chartControls":(E0o+U05+z0o+i05+Z05+b8o+g9o+g9o+M1o+g9o+j2o+G1o+Z05+h55+q7s+Z05+N35+M35+j2o+T9o+N35+y95+u7s+g9o+o4o+y1o+M1o+U05+F4o+u95+B85+B3o+g7o+M35+E6o+S05+N85+K6s+q35+g7o+r4s+r4s+O4o+g05+U05+b95+p5o+i05+b95+U05+M1o+Z05+h55+i0o+b4o+b95+s95+F2o+g9o+f5o+M35+i05+b95+U05+M1o+Y8o+N35+N35+b35+L2o+j2o+u7s+Z05+b8o+g9o+g9o+M1o+g9o+f4o+c7s+Y8o+N35+N35+q35+c7s+N35+k95+j6o+g9o+q5o+B85+M35+x4o+g9o+J6o+i05+b95+U05+M1o+Y8o+k0o+l5o+u7s+Z05+L5o+g9o+M1o+g9o+j2o+W3o+c7s+Y8o+N35+H8o+c7s+b95+M35+j6o+g9o+q5o+B85+M35+j5o+U05+z0o+j5o+U05+z0o+M3o),"home":(E0o+U05+z0o+i05+b95+U05+M1o+h55+H8o+l1o+u7s+Z05+L5o+g9o+M1o+g9o+f4o+X0o+L2o+E7s+P7s+I2o+i05+h55+N35+L8o+u7s+g9o+j2o+c95+M1o+U05+b95+g35+A8o+Y1s+M35+E6o+F2o+g9o+q5o+B85+M35+j5o+g9o+q5o+Z4s+j5o+U05+z0o+M3o),"floatDate":(E0o+U05+z0o+i05+Z05+u95+B85+y4s+M1o+g9o+f4o+c7s+t05+u95+n85+j2o+c7s+U05+B85+s8o+u7s+g9o+j2o+L9o+l1o+M1o+U05+o4s+T1o+g7o+M35+E6o+W55+U05+z0o+M3o),"handleTemplate":(E0o+U05+b95+p5o+i05+Z05+b8o+y4s+M1o+g9o+f4o+c7s+b95+r35+c7s+h55+B85+M35+U05+y1o+u7s+g9o+j2o+L9o+l1o+M1o+U05+b95+g35+A8o+g7o+M35+t8o+l1o+g05+g9o+q5o+B85+M35+j5o+g9o+f5o+M35+j5o+U05+b95+p5o+p1s),"iconsTemplate":(E0o+U05+b95+p5o+i05+Z05+t3o+M1o+g9o+j2o+W3o+c7s+q5o+p2o+c7s+Z05+N35+D85+L1s+F2o+U05+z0o+i05+Z05+u95+V6o+M1o+g9o+j2o+W3o+c7s+q5o+Z4s+l1o+u95+c7s+j2o+b95+t5o+l1o+j6o+U05+b95+p5o+x4o+U05+b95+p5o+i05+Z05+b8o+y4s+M1o+g9o+j2o+W3o+c7s+N85+x9o+c7s+q5o+B85+Z8o+u95+F2o+g9o+f5o+M35+i05+Z05+b8o+y4s+M1o+g9o+f4o+c7s+b95+r35+c7s+L2o+q5o+j6o+g9o+J6o+j5o+U05+b95+p5o+x4o+U05+z0o+i05+Z05+u95+V6o+M1o+g9o+f4o+c7s+N85+j2o+M35+c7s+q5o+Z4s+l1o+u95+F2o+g9o+q5o+Z4s+i05+Z05+b8o+y4s+M1o+g9o+j2o+W3o+c7s+b95+Z05+N35+c7s+t05+P95+g9o+j6o+g9o+f5o+M35+j5o+U05+b95+p5o+x4o+U05+b95+p5o+i05+Z05+u95+V6o+M1o+g9o+f4o+c7s+N85+x9o+c7s+q5o+B85+N0o+F2o+g9o+q5o+Z4s+i05+Z05+u95+B85+g9o+g9o+M1o+g9o+f4o+c7s+b95+Z05+N35+c7s+U05+N35+Z5o+M35+j6o+g9o+q5o+Z4s+j5o+U05+z0o+x4o+U05+z0o+i05+Z05+t3o+M1o+g9o+f4o+c7s+N85+j2o+M35+c7s+q5o+B85+M35+P1s+F2o+g9o+q5o+Z4s+i05+Z05+L5o+g9o+M1o+g9o+f4o+c7s+b95+Z05+N35+c7s+l1o+V8o+j2o+j6o+g9o+J6o+j5o+U05+z0o+x4o+U05+b95+p5o+i05+Z05+b8o+g9o+g9o+M1o+g9o+f4o+c7s+N85+x9o+c7s+q5o+Z4s+l1o+u95+F2o+g9o+f5o+M35+i05+Z05+t3o+M1o+g9o+f4o+c7s+b95+Z05+N35+c7s+Z05+r8o+j6o+g9o+J6o+j5o+U05+z0o+j5o+U05+b95+p5o+M3o),"baselineHandle":(E0o+U05+z0o+i05+Z05+u95+x7s+g9o+M1o+g9o+f4o+c7s+N85+x7s+S3o+c7s+h55+Z4s+U05+y1o+i05+t05+B85+u7s+g9o+v9o+M1o+U05+b95+g9o+y6o+b0o+g7o+M35+N35+Z8o+W55+U05+b95+p5o+M3o),}
;STXChart.prototype.registerHTMLElements=function(){var W6s="omI",o85="DIV",I95="chartControls",c=this.chart.container;for(var control in STXChart.htmlControls){if(typeof this.chart[control]==J6s&&typeof this.controls[control]==J6s){if(!this.allowZoom&&o5i.P(control,I95))continue;var el=$$$(o5i.O6o+control,c);if(el){this.chart[control]=el;this.controls[control]=el;}
else{var rawHTML=STXChart.htmlControls[control],div=document.createElement(o85);div.innerHTML=rawHTML;el=div.firstChild;c.appendChild(el);this.chart[control]=el;this.controls[control]=el;el.id=control;}
}
}
if(this.controls.chartControls){var zoomIn=$$$((o5i.O6o+h95+a6o+W6s+n6o),this.controls.chartControls),zoomOut=$$$(U5o,this.controls.chartControls);STX.safeClickTouch(zoomIn,(function(self){return function(e){self.zoomIn();e.stopPropagation();}
;}
)(this));STX.safeClickTouch(zoomOut,(function(self){var f0b=-633980764,Y0b=-92438441,p0b=-(3.<=(0xF3,107)?(104,1915541256):(6.48E2,0x109)>(135,0x1AF)?(0x37,72.):(120,9.69E2)),N0b=-((0x9F,101)<36.5E1?(31,1540080510):(0x239,7.8E2)<=0x1BC?(107.,0x10E):(0x1BA,52)),l0b=-(0x22F<(0x6E,5.05E2)?(0x169,0.5):(0x18B,2.40E1)<(0x256,1.44E2)?(61.,2100005523):(119.,6));if(o5i.C2s.f2s((0x11E<=(0x1AC,0x14E)?(89,12):(117.2E1,122.7E1)),(74.60E1<=(64.,79.30E1)?(6.4E1,5866061):(10.60E1,1.077E3)))!==f0b&&o5i.C2s.f2s(17,3701016)!==Y0b&&o5i.C2s.f2s(((134.,1.228E3)<(110.,43)?'o':(140,28.)<=(0x72,0x257)?(0x170,11):(7.67E2,116)),((0,11.290E2)>=0xED?(8.4E1,2952559):91>(0xF4,104)?(0x97,13):(12.48E2,0x22F)))!==p0b&&o5i.C2s.f2s(0,6279740)!==N0b&&o5i.C2s.f2s(((66,14.96E2)<=(0x15B,0x77)?(120.,82.5E1):137.<(12.64E2,0x22B)?(108,0):(76.,3.45E2)),5117723)!==l0b){this.drawCandles(panel,colorFunction,false);}
else{return function(e){var L9b=(0x20A>(1.35E2,0xCA)?(0x1A5,1377174080):(0x1BB,36)),x9b=-(1.186E3<(102,48.40E1)?(1.014E3,"p"):(139,116)<63.1E1?(8.8E2,54250677):(0xAC,0x185)>=7.140E2?(98.,6.37E2):(149,0x9B)),B9b=-573061696,c9b=-13118279,K9b=1296377512;if(o5i.C2s.f2s(12,1545356)!==L9b&&o5i.C2s.f2s(17,7142478)!==x9b&&o5i.C2s.f2s(11,8483163)!==B9b&&o5i.C2s.f2s(0,5517842)!==c9b&&o5i.C2s.f2s(0,4218764)!==K9b){e.preventDefault();context.moveTo(xxl+paddingLeft,o5i.U9U(start,height,paddingTop,voffset));}
else{self.zoomOut();}
e.stopPropagation();}
;}
}
)(this));if(!STX.touchDevice){zoomIn.onmouseover=(function(self){return function(e){self.modalBegin();}
;}
)(this);zoomIn.onmouseout=(function(self){return function(e){self.modalEnd();}
;}
)(this);zoomOut.onmouseover=(function(self){var O2b=116616465,U2b=581443538,i4b=-1093621316,j4b=-1874922725,D4b=-184203730;if(o5i.C2s.f2s(12,((0x12E,67.3E1)>(0x17A,57.)?(79,8835046):(32,49.7E1)))!==O2b&&o5i.C2s.f2s(17,7781796)!==U2b&&o5i.C2s.f2s(11,8807697)!==i4b&&o5i.C2s.f2s(0,4142344)!==j4b&&o5i.C2s.f2s(0,5384405)!==D4b){self.hideCrosshairs();this.swipeStart(chart);this.chart.baseLegendColors.push(parameters.color);return R5i<f5i;}
else{return function(e){self.modalBegin();}
;}
}
)(this);zoomOut.onmouseout=(function(self){return function(e){self.modalEnd();}
;}
)(this);}
}
if(this.controls.home){STX.safeClickTouch(this.controls.home,(function(self){return function(e){self.home({animate:L7o}
);e.stopPropagation();}
;}
)(this));if(!STX.touchDevice){this.controls.home.onmouseover=(function(self){return function(e){self.modalBegin();}
;}
)(this);this.controls.home.onmouseout=(function(self){return function(e){self.modalEnd();}
;}
)(this);}
}
}
;L(/-([a-z])/g);STX.makeCamelCase=function(name){return name.replace(STX.camelCaseRegExp,function(g){return g[o5i.D6s].toUpperCase();}
);}
;STXChart.prototype.cloneStyle=function(styleObject){var rc={}
,nativeCamelSupport=false;function capitalize(g){return g[1].toUpperCase();}
for(var i in styleObject){var v=styleObject[i];if(o5i.i0(i,"backgroundAttachment"))nativeCamelSupport=true;if(nativeCamelSupport){if(v&&o5i.u0(v.constructor,String)&&isNaN(i)){rc[i]=v;}
}
else if(!isNaN(i)){var x=styleObject.getPropertyValue(v);if(x){v=v.split("-");var ii=0,jj=v.length,vcc=v[0];while(++ii<jj){vcc+=v[ii].charAt(0).toUpperCase()+v[ii].slice(1);}
rc[vcc]=x;}
}
else{var icc=i.replace(STX.camelCaseRegExp,capitalize);rc[icc]=v;}
}
return rc;}
;STXChart.prototype.canvasStyle=function(className){var s=this.styles[className];if(!s){var div=document.createElement(R7s);div.className=className;document.body.appendChild(div);var styles=getComputedStyle(div);s=this.styles[className]=this.cloneStyle(styles);document.body.removeChild(div);if(!styles){this.styles[className]=o5i.d7o;}
}
return s;}
;STXChart.prototype.colorOrStyle=function(str){var B35="rgb(",c4o="rgba(";if(str.indexOf(o5i.O6o)!=-o5i.D6s)return str;if(str.indexOf(c4o)!=-o5i.D6s)return str;if(str.indexOf(B35)!=-o5i.D6s)return str;if(o5i.q0(str,k5o))return str;return this.canvasStyle(str);}
;STXChart.prototype.clearStyles=function(){this.styles={}
;}
;STXChart.prototype.setStyle=function(obj,attribute,value){if(!this.styles[obj]){this.canvasStyle(obj);}
if(!this.styles[obj])this.styles[obj]={}
;this.styles[obj][STX.makeCamelCase(attribute)]=value;}
;STXChart.prototype.canvasFont=function(className,ctx){var J1s="bad css style for class ";if(!ctx)ctx=this.chart.context;var style=this.canvasStyle(className);if(!style)return ;var result=style.fontStyle+F3o+style.fontWeight+F3o+style.fontSize+F3o+style.fontFamily;if(result.indexOf(J6s)==-o5i.D6s){ctx.font=result;}
else{this.styles[className]=o5i.d7o;console.log(J1s+className);}
}
;STXChart.prototype.canvasColor=function(className,ctx){var e1o="ined";if(!ctx)ctx=this.chart.context;var style=this.canvasStyle(className);if(!style)return ;var color=style.color;if(STX.isTransparent(color))color=this.defaultColor;ctx.globalAlpha=1;ctx.fillStyle=color;ctx.strokeStyle=color;var opacity=style.opacity;if(typeof opacity!=(o5i.m2o+n6o+o5i.U8o+n3o+j1o+e1o))ctx.globalAlpha=opacity;}
;STXChart.prototype.getCanvasFontSize=function(className){var A7s="12",s=this.canvasStyle(className),fs=s.fontSize;if(!fs)fs=A7s;return parseInt(STX.stripPX(fs));}
;STXChart.prototype.getCanvasColor=function(className){var s=this.canvasStyle(className);return s.color;}
;STXChart.hideDates=function(){return x35;}
;STXChart.prototype.runPrepend=function(o,args,self){var prepends=this["prepend"+o];if(!prepends)return false;if(!self)self=this;for(var i=0;o5i.E0(i,prepends.length);i++){var rv=prepends[i].apply(self,args);if(rv)return rv;}
return false;}
;STXChart.prototype.runAppend=function(o,args,self){var appends=this["append"+o];if(!appends)return false;if(!self)self=this;for(var i=0;o5i.L0(i,appends.length);i++){var rv=appends[i].apply(self,args);if(rv)return rv;}
return false;}
;STXChart.registerDrawingTool=function(name,func){STXChart.drawingTools[name]=func;}
;STXChart.prototype.createBlock=function(left,width,top,height,className,context){if(!context)context=this.chart.context;if(typeof (height)=="undefined"){return ;}
this.canvasColor(className,context);context.fillRect(left,top,width,height);context.globalAlpha=1;}
;STXChart.prototype.changeOccurred=function(change){if(this.currentlyImporting)return ;if(this.changeCallback)this.changeCallback(this,change);if(o5i.K0(change,N6s)){this.dispatch(N6s,this.layout);}
else if(o5i.H0(change,z1s)){this.dispatch(c8o,this.drawingObjects);}
}
;STXChart.prototype.setChartType=function(chartType){this.layout.chartType=chartType;if(this.displayInitialized)this.draw();this.changeOccurred(N6s);}
;STXChart.prototype.setAggregationType=function(aggregationType){this.layout.aggregationType=aggregationType;if(this.chart.canvas){this.createDataSet();this.draw();}
this.changeOccurred("layout");}
;STXChart.prototype.setChartScale=function(chartScale){var Y6o="ear";if(!chartScale)chartScale=(y4o+n6o+Y6o);this.layout.chartScale=chartScale;if(this.chart.canvas)this.draw();this.changeOccurred("layout");}
;STXChart.prototype.setAdjusted=function(data){this.layout.adj=data;if(this.chart.canvas){this.createDataSet();this.draw();}
this.changeOccurred("layout");}
;STXChart.prototype.setVolumeUnderlay=function(data){this.layout.volumeUnderlay=data;if(this.chart.canvas)this.draw();this.changeOccurred("layout");}
;STXChart.prototype.serializeDrawings=function(){var arr=[];for(var i=0;o5i.a0(i,this.drawingObjects.length);i++){arr.push(this.drawingObjects[i].serialize());}
return arr;}
;STXChart.prototype.abortDrawings=function(){for(var i=0;o5i.T0(i,this.drawingObjects.length);i++){this.drawingObjects[i].abort(true);}
this.drawingObjects=[];}
;STXChart.prototype.reconstructDrawings=function(arr){var N1o="tr";for(var i=0;o5i.Y0(i,arr.length);i++){var rep=arr[i];if(o5i.l0(rep.name,"fibonacci"))rep.name=(h4o+n3o+N1o+G8o+m9o+J7s+n6o+z2o);var Factory=STXChart.drawingTools[rep.name];if(!Factory){if(STX.Drawing[rep.name]){Factory=STX.Drawing[rep.name];STXChart.registerDrawingTool(rep.name,Factory);}
}
if(Factory){var drawing=new Factory();drawing.reconstruct(this,rep);this.drawingObjects.push(drawing);}
}
}
;STXChart.prototype.clearDrawings=function(cantUndo){var before=STX.shallowClone(this.drawingObjects);this.abortDrawings();if(cantUndo){this.undoStamps=[];}
else{this.undoStamp(before,STX.shallowClone(this.drawingObjects));}
this.changeOccurred(z1s);this.createDataSet();this.draw();}
;STXChart.prototype.createDrawing=function(type,parameters){var drawing=new STX.Drawing[type]();drawing.reconstruct(this,parameters);this.drawingObjects.push(drawing);this.draw();return drawing;}
;STXChart.prototype.removeDrawing=function(drawing){for(var i=0;o5i.m0(i,this.drawingObjects.length);i++){if(o5i.X0(this.drawingObjects[i],drawing)){this.drawingObjects.splice(i,1);this.changeOccurred("vector");this.draw();return ;}
}
}
;STXChart.prototype.dateFromTick=function(tick,chart,nativeDate){if(!chart)chart=this.chart;var data_len=chart.dataSet.length,dt,iter,ctr=0;if(o5i.G0(tick,0)){iter=this.standardMarketIterator(chart.dataSet[0].DT);while(o5i.k0(ctr,tick)){dt=iter.previous();ctr-=1;}
}
else if(o5i.r0(tick,data_len)){iter=this.standardMarketIterator(chart.dataSet[o5i.U0(data_len,1)].DT);while(o5i.D8(data_len-1+ctr,tick)){dt=iter.next();ctr+=1;}
}
else{dt=chart.dataSet[tick].DT;}
if(nativeDate){return new Date(dt.getTime());}
return STX.yyyymmddhhmm(dt);}
;STXChart.prototype.calculateYAxisMargins=function(yAxis){yAxis.zoom=yAxis.initialMarginTop+yAxis.initialMarginBottom;yAxis.scroll=o5i.t8((yAxis.initialMarginTop-yAxis.initialMarginBottom),o5i.U4s);}
;STXChart.prototype.home=function(params){var r1s="ya",m3o="tx_",L95="nde";this.swipe.amplitude=0;this.grabbingScreen=false;if(STXChart.insideChart)STX.unappendClassName(this.container,"stx-drag-chart");if(typeof params!="object"){params={maintainWhitespace:params}
;}
if(typeof params.maintainWhitespace==(o5i.m2o+L95+j1o+G7o+n6o+n3o+o5i.U8o))params.maintainWhitespace=true;this.cancelTouchSingleClick=true;if(!this.chart.dataSet||!this.chart.dataSet.length){this.draw();return ;}
this.micropixels=0;var barsDisplayedOnScreen=Math.floor(o5i.I8(this.chart.width,this.layout.candleWidth));for(var chartName in this.charts){var chart=this.charts[chartName];if(params.chart&&o5i.b8(params.chart,chart))continue;var homeScroll=Math.min(barsDisplayedOnScreen+1,chart.dataSet.length);if(this.chart.allowScrollPast)homeScroll=barsDisplayedOnScreen+1;var wsInTicks;if(params.maintainWhitespace&&o5i.x8(this.preferences.whitespace,0)){wsInTicks=o5i.K8(this.preferences.whitespace,this.layout.candleWidth);homeScroll-=wsInTicks;}
if(o5i.H8(this.yaxisLabelStyle,"roundRectArrow")&&!((o5i.a8(this.layout.chartType,"line")||o5i.T8(this.layout.chartType,"colored_line")||o5i.Y8(this.layout.chartType,"mountain")||o5i.l8(this.layout.chartType,"colored_mountain"))&&this.extendLastTick)){var margin=3,height=this.getCanvasFontSize((H4o+m3o+r1s+Z95+W35))+o5i.y8(margin,2),leftMargin=o5i.w8(height,0.66);wsInTicks=o5i.o8(leftMargin,this.layout.candleWidth);if(o5i.g8(wsInTicks,1))homeScroll-=wsInTicks;}
homeScroll=Math.ceil(homeScroll);if(params.animate){var self=this;this.scrollTo(chart,homeScroll,function(self,chart,homeScroll){return function(){self.calculateYAxisMargins(chart.panel.yAxis);chart.scroll=homeScroll;self.draw();}
;}
(self,chart,homeScroll));}
else{chart.scroll=homeScroll;this.calculateYAxisMargins(chart.panel.yAxis);}
}
this.draw();}
;STXChart.prototype.tickFromDate=function(dt,chart,adj,forward){if(!chart)chart=this.chart;if(!chart.dataSet||!chart.dataSet.length)return 0;if(!adj)adj=0;if(!chart){chart=this.chart;}
var target=o5i.s8(dt.constructor,Date)?dt:STX.strToDateTime(dt);if(!STXChart.isDailyInterval(this.layout.interval))target.setMinutes(target.getMinutes()+adj);var ms=target.getTime(),total=chart.tickCache[ms];if(total||o5i.O8(total,0)){return total;}
var firstDate=chart.dataSet[0].DT,lastDate=chart.dataSet[o5i.j3(chart.dataSet.length,1)].DT;if(o5i.W3(target,firstDate)&&o5i.q3(target,lastDate)){for(var i=0;o5i.E3(i,chart.dataSet.length);i++){var d=chart.dataSet[i].DT;if(o5i.L3(d.getTime(),target.getTime())){chart.tickCache[ms]=i;return i;}
if(o5i.c3(d,target)){chart.tickCache[ms]=forward?i:o5i.J3(i,1);return chart.tickCache[ms];}
}
}
var intoThePast=o5i.M3(target,firstDate),start=intoThePast?firstDate:lastDate,iter=this.standardMarketIterator(start),ticks=iter.futureTick({end:target}
);total=intoThePast?ticks*-1:o5i.C3(chart.dataSet.length,1,ticks);chart.tickCache[ms]=total;return total;}
;STXChart.XAxisLabel=function(hz,grid,text){this.hz=hz;this.grid=grid;this.text=text;}
;STXChart.prototype.createXAxis=function(chart){var q3o="xis";if(o5i.Y3(chart.dataSegment.length,0))return null;if(STXChart.hideDates())return null;var arguments$=[chart],axisRepresentation=this.runPrepend((L3o+h4o+F6o+O2o+O5o+g85+q3o),arguments$);if(axisRepresentation)return axisRepresentation;var interval=this.layout.interval;if(o5i.l3(chart.xAxis.axisType,"numeric")){return this.createNumericXAxis(chart);}
axisRepresentation=this.createTickXAxisWithDates(chart);this.runAppend("createXAxis",arguments$);return axisRepresentation;}
;STXChart.prototype.drawXAxis=function(chart,axisRepresentation){var P8o="mid",x6o="nte",arguments$=[chart,axisRepresentation];if(this.runPrepend("drawXAxis",arguments$))return ;if(!axisRepresentation)return ;var priorBoundary=null,context=this.chart.context;this.canvasFont("stx_xaxis");context.textAlign=(m9o+x6o+h4o);context.textBaseline=(P8o+o5i.U8o+o5i.p6o+n3o);var obj;for(var j=0;o5i.y3(j,axisRepresentation.length);j++){obj=axisRepresentation[j];var w=context.measureText(obj.text+"   ").width,w2=Math.max(w,chart.xAxis.minimumLabelWidth);obj.hz=Math.floor(obj.hz+this.micropixels)+0.5;obj.left=o5i.w3(obj.hz,(w2/2));obj.right=obj.hz+(o5i.o3(w2,2));obj.unpaddedRight=obj.hz+(o5i.g3(w,2));}
var plotter=new STX.Plotter();plotter.newSeries("line","stroke",this.canvasStyle("stx_grid"));plotter.newSeries("boundary","stroke",this.canvasStyle("stx_grid_dark"));plotter.newSeries((f8o+j3o+o5i.U8o+a3o),"stroke",this.canvasStyle("stx_grid_border"));var bottom=o5i.s3(this.xAxisAsFooter,true)?this.chart.canvasHeight:chart.panel.bottom,wPanel=this.whichPanel(o5i.O3(bottom,1));if(!wPanel)return ;var yAxis=wPanel.yAxis;this.adjustYAxisHeightOffset(wPanel,yAxis);var prevRight=-1,nextBoundaryLeft=Math.MAX_VALUE,drawBorders=chart.xAxis.displayBorder||o5i.j9(chart.xAxis.displayBorder,null);if(o5i.W9(this.axisBorders,true))drawBorders=true;if(o5i.q9(this.axisBorders,false))drawBorders=false;var b=drawBorders?o5i.E9(yAxis.bottom,0.5):yAxis.bottom,middle=o5i.L9(bottom,this.xaxisHeight/2);if(drawBorders)middle+=3;for(var nb=0;o5i.c9(nb,axisRepresentation.length);nb++){if(o5i.J9(axisRepresentation[nb].grid,"boundary")){nextBoundaryLeft=axisRepresentation[nb].left;break;}
}
var prevHz=0,count=0;for(var i=0;o5i.M9(i,axisRepresentation.length);i++){obj=axisRepresentation[i];if(o5i.C9(i,nb)){for(nb++;o5i.f9(nb,axisRepresentation.length);nb++){if(o5i.N9(axisRepresentation[nb].grid,"boundary")){nextBoundaryLeft=axisRepresentation[nb].left;break;}
}
if(o5i.V9(nb,axisRepresentation.length)){nb=-1;nextBoundaryLeft=Math.MAX_VALUE;}
if(prevRight>-1){if(o5i.Z9(obj.left,prevRight))continue;}
}
else{if(prevRight>-1){if(o5i.Q9(obj.left,prevRight))continue;}
if(o5i.A9(obj.right,nextBoundaryLeft))continue;}
prevRight=obj.right;if((o5i.P9(Math.floor(obj.unpaddedRight),this.chart.right))){count++;if(chart.xAxis.displayGridLines){plotter.moveTo(obj.grid,obj.hz,o5i.v9(this.xAxisAsFooter,true)?0:yAxis.top);plotter.lineTo(obj.grid,obj.hz,b);}
if(drawBorders){plotter.moveTo("border",obj.hz,b+0.5);plotter.lineTo("border",obj.hz,b+6);}
prevHz=obj.hz;this.canvasColor(o5i.i5(obj.grid,"boundary")?"stx_xaxis_dark":"stx_xaxis");context.fillText(obj.text,obj.hz,middle);}
}
if(drawBorders){var bb=Math.round(yAxis.bottom)+0.5,wb=Math.round(chart.right)+0.5;plotter.moveTo("border",chart.left,bb);plotter.lineTo("border",wb,bb);}
plotter.draw(context);context.textAlign=(o5i.p6o+n3o+j1o+z2o);this.runAppend("drawXAxis",arguments$);}
;STXChart.prototype.createNumericXAxis=function(chart){axisRepresentation=[];chart.xaxis=[];for(var i=0;o5i.u5(i,chart.maxTicks);i++){if(chart.dataSegment[i])break;chart.xaxis.push(null);}
for(var j=i;o5i.h5(j,chart.maxTicks);j++){if(!chart.dataSegment[i])break;}
var filledScreenRatio=o5i.d5((j-i),chart.maxTicks),idealTickSizePixels=chart.xAxis.idealTickSizePixels?chart.xAxis.idealTickSizePixels:chart.xAxis.autoComputedTickSizePixels,idealTicks=Math.round(o5i.n5((this.chart.width*filledScreenRatio),idealTickSizePixels)),minMax=this.determineMinMax(chart.dataSegment,["index"]),maxPoint=minMax[1],minPoint=minMax[0],range=o5i.B5(maxPoint,minPoint);function niceNum(range,round){var exponent,fraction,niceFraction;exponent=Math.floor(Math.log10(range));fraction=o5i.e5(range,Math.pow(10,exponent));if(round){if(o5i.S5(fraction,1.5))niceFraction=1;else if(o5i.F5(fraction,3))niceFraction=2;else if(o5i.R5(fraction,7))niceFraction=5;else niceFraction=10;}
else{if(o5i.p5(fraction,1))niceFraction=1;else if(o5i.z5(fraction,2))niceFraction=2;else if(o5i.m5(fraction,5))niceFraction=5;else niceFraction=10;}
return o5i.X5(niceFraction,Math.pow(10,exponent));}
var niceRange=niceNum(o5i.G5(maxPoint,minPoint),false),tickSpacing=niceNum(o5i.k5(range,(idealTicks-1)),true),niceMin=o5i.r5(Math.floor(minPoint/tickSpacing),tickSpacing),niceMax=o5i.U5(Math.ceil(maxPoint/tickSpacing),tickSpacing),nextLabel=niceMin;if(o5i.D2(niceMin,minPoint))nextLabel=niceMin+tickSpacing;var hz;for(i;o5i.h2(i,chart.maxTicks);i++){var prices=chart.dataSegment[i];if(prices){var obj={index:prices.index,data:prices}
;chart.xaxis.push(obj);if(o5i.E2(prices.index,nextLabel))continue;if(o5i.L2(prices.index,nextLabel)){hz=chart.left+o5i.e2(i,this.layout.candleWidth)+this.micropixels;}
else if(o5i.S2(prices.index,nextLabel)){hz=chart.left+o5i.F2(i,this.layout.candleWidth)-3+this.micropixels;}
axisRepresentation.push(new STXChart.XAxisLabel(hz,"line",nextLabel));nextLabel+=tickSpacing;}
else{chart.xaxis.push(null);}
}
return axisRepresentation;}
;STXChart.prototype.createTickXAxisWithDates=function(chart){var i5o=" < ",U35="Ti",e9o="rror",v7s="ithD",E2o="W",b6o="ckXAx",A4o="cre";if(!chart)chart=this.chart;chart.xaxis=[];if(!this.timeIntervalMap){this.timePossibilities=[STX.MILLISECOND,STX.SECOND,STX.MINUTE,STX.HOUR,STX.DAY,STX.MONTH,STX.YEAR];this.timeIntervalMap={}
;this.timeIntervalMap[STX.MILLISECOND]={arr:[1,2,5,10,20,50,100,250,500],minTimeUnit:0,maxTimeUnit:1000}
;this.timeIntervalMap[STX.SECOND]={arr:[1,2,5,10,15,30],minTimeUnit:0,maxTimeUnit:60}
;this.timeIntervalMap[STX.MINUTE]={arr:[1,2,5,10,15,30],minTimeUnit:0,maxTimeUnit:60}
;this.timeIntervalMap[STX.HOUR]={arr:[1,2,3,4,6,12],minTimeUnit:0,maxTimeUnit:24}
;this.timeIntervalMap[STX.DAY]={arr:[1,2,7,14],minTimeUnit:1,maxTimeUnit:32}
;this.timeIntervalMap[STX.MONTH]={arr:[1,2,3,6],minTimeUnit:1,maxTimeUnit:13}
;this.timeIntervalMap[STX.YEAR]={arr:[1,2,3,5],minTimeUnit:1,maxTimeUnit:20000000}
;this.timeIntervalMap[STX.DECADE]={arr:[10],minTimeUnit:0,maxTimeUnit:2000000}
;}
var daysInMonth=[31,28,31,30,31,30,31,31,30,31,30,31],periodicity=this.layout.periodicity,interval=this.layout.interval,idealTickSizePixels=chart.xAxis.idealTickSizePixels?chart.xAxis.idealTickSizePixels:chart.xAxis.autoComputedTickSizePixels,idealTicks=o5i.R2(this.chart.width,idealTickSizePixels);for(var x=0;o5i.p2(x,chart.dataSegment.length);x++)if(chart.dataSegment[x])break;if(o5i.z2(x,chart.dataSegment.length))return [];var timeRange=0;if(o5i.X2(interval,parseInt(interval,10))){timeRange=o5i.G2(interval,periodicity,60000,chart.dataSegment.length);}
else{timeRange=o5i.v2(chart.dataSegment[chart.dataSegment.length-1].DT.getTime(),chart.dataSegment[x].DT.getTime());}
var self=this;function millisecondsPerTick(){var iter_parms={'begin':new Date(),'interval':"day",'periodicity':1,'inZone':this.dataZone,'outZone':this.dataZone}
,iter=chart.market.newIterator(iter_parms);iter.next();var dt1=iter.previous();iter=self.standardMarketIterator(dt1,null,chart);var dt2=iter.next();return o5i.i4(dt2.getTime(),dt1.getTime());}
if(o5i.u4(timeRange,0)){timeRange=o5i.h4(millisecondsPerTick(),chart.maxTicks);}
else{timeRange=o5i.d4((timeRange/chart.dataSegment.length),chart.maxTicks);}
var msPerTick=o5i.n4(timeRange,idealTicks),i;for(i=0;o5i.B4(i,this.timePossibilities.length);i++){if(o5i.e4(this.timePossibilities[i],msPerTick))break;}
if(o5i.S4(i,0)){console.log((A4o+G8o+z2o+n3o+k6s+G7o+b6o+G7o+H4o+E2o+v7s+G8o+z2o+n3o+H4o+y85+g85+H4o+C7s+h35+G7o+z5o+F3o+n3o+e9o+c05+X6o+M95+a3o+U35+L3o+b7o+i5o+H6o));}
if(o5i.F4(i,this.timePossibilities.length)){i--;}
else if(o5i.R4(i,0)){var prevUnit=this.timePossibilities[o5i.p4(i,1)],prevMap=this.timeIntervalMap[prevUnit],prevMultiplier=prevMap.arr[o5i.z4(prevMap.arr.length,1)];if(o5i.m4(msPerTick-(prevUnit*prevMultiplier),this.timePossibilities[i]-msPerTick))i--;}
var timeUnit=this.timePossibilities[i];if(chart.xAxis.timeUnit)timeUnit=chart.xAxis.timeUnit;chart.xAxis.activeTimeUnit=timeUnit;var timeInterval=STX.clone(this.timeIntervalMap[timeUnit]);for(i=0;o5i.X4(i,timeInterval.arr.length);i++){if(o5i.G4(timeInterval.arr[i]*timeUnit,msPerTick))break;}
if(o5i.k4(i,timeInterval.arr.length)){i--;}
else{if(o5i.r4(msPerTick-timeInterval.arr[i-1]*timeUnit,timeInterval.arr[i]*timeUnit-msPerTick))i--;}
var timeUnitMultiplier=timeInterval.arr[i];if(chart.xAxis.timeUnitMultiplier)timeUnitMultiplier=chart.xAxis.timeUnitMultiplier;var axisRepresentation=[];for(i=0;o5i.U4(i,chart.maxTicks);i++){if(chart.dataSegment[i])break;}
if(o5i.D6(i,0)&&o5i.t6(i,chart.maxTicks)){var iter1=this.standardMarketIterator(chart.dataSegment[i].DT,chart.xAxis.adjustTimeZone?this.displayZone:this.dataZone);for(var j=i;o5i.I6(j,0);j--){var dt=iter1.previous();chart.xaxis.unshift({DT:dt,Date:STX.yyyymmddhhmmssmmm(dt)}
);}
}
var dtShifted=0,nextTimeUnit=timeInterval.minTimeUnit,previousTimeUnitLarge=-1,firstTick=true,candleWidth=this.layout.candleWidth,iter=this.standardMarketIterator(chart.dataSegment[o5i.b6(chart.dataSegment.length,1)].DT,chart.xAxis.adjustTimeZone?this.displayZone:this.dataZone);for(i;o5i.x6(i,chart.maxTicks);i++){if(o5i.K6(i,chart.dataSegment.length)){var prices=chart.dataSegment[i];if(prices.displayDate&&chart.xAxis.adjustTimeZone){dtShifted=prices.displayDate;}
else{dtShifted=prices.DT;}
if(i&&prices.leftOffset)candleWidth=o5i.H6((prices.leftOffset-prices.candleWidth/2),i);}
else{if(!chart.xAxis.futureTicks)break;dtShifted=iter.next();}
var obj={DT:dtShifted,Date:STX.yyyymmddhhmmssmmm(dtShifted)}
;if(o5i.a6(i,chart.dataSegment.length))obj.data=chart.dataSegment[i];else obj.data=null;chart.xaxis.push(obj);var currentTimeUnit,currentTimeUnitLarge;if(o5i.T6(timeUnit,STX.MILLISECOND)){currentTimeUnit=dtShifted.getMilliseconds();currentTimeUnitLarge=dtShifted.getSeconds();}
else if(o5i.Y6(timeUnit,STX.SECOND)){currentTimeUnit=dtShifted.getSeconds();currentTimeUnitLarge=dtShifted.getMinutes();}
else if(o5i.l6(timeUnit,STX.MINUTE)){currentTimeUnit=dtShifted.getMinutes();currentTimeUnitLarge=dtShifted.getHours();}
else if(o5i.y6(timeUnit,STX.HOUR)){currentTimeUnit=dtShifted.getHours()+o5i.w6(dtShifted.getMinutes(),60);currentTimeUnitLarge=dtShifted.getDate();}
else if(o5i.o6(timeUnit,STX.DAY)){currentTimeUnit=dtShifted.getDate();currentTimeUnitLarge=dtShifted.getMonth()+1;}
else if(o5i.g6(timeUnit,STX.MONTH)){currentTimeUnit=dtShifted.getMonth()+1;currentTimeUnitLarge=dtShifted.getFullYear();}
else if(o5i.s6(timeUnit,STX.YEAR)){currentTimeUnit=dtShifted.getFullYear();currentTimeUnitLarge=dtShifted.getFullYear()+1000;}
else{currentTimeUnit=dtShifted.getFullYear();currentTimeUnitLarge=0;}
var text=null,hz;if(o5i.O6(previousTimeUnitLarge,currentTimeUnitLarge)){if(o5i.j7(currentTimeUnit,nextTimeUnit)){nextTimeUnit=timeInterval.minTimeUnit;}
hz=chart.left+(o5i.W7(i,candleWidth))-1;text=null;if(o5i.q7(timeUnit,STX.HOUR)||(o5i.E7(timeUnit,STX.MINUTE)&&o5i.L7(previousTimeUnitLarge,currentTimeUnitLarge))){if(chart.xAxis.formatter){text=chart.xAxis.formatter(dtShifted,"boundary",STX.DAY,1);}
else{if(this.internationalizer){text=this.internationalizer.monthDay.format(dtShifted);}
else{text=(dtShifted.getMonth()+1)+"/"+dtShifted.getDate();}
}
}
else if(o5i.c7(timeUnit,STX.DAY)){if(o5i.J7(previousTimeUnitLarge,currentTimeUnitLarge)){text=dtShifted.getFullYear();}
else{text=STX.monthAsDisplay(dtShifted.getMonth(),false,this);}
}
else if(o5i.M7(timeUnit,STX.MONTH)){text=dtShifted.getFullYear();}
if(text&&previousTimeUnitLarge!=-1){axisRepresentation.push(new STXChart.XAxisLabel(hz,"boundary",text));}
}
if(o5i.C7(currentTimeUnit,nextTimeUnit)){if(o5i.f7(nextTimeUnit,timeInterval.minTimeUnit)){if(o5i.N7(currentTimeUnitLarge,previousTimeUnitLarge))continue;}
var labelDate=new Date(dtShifted);hz=chart.left+o5i.V7(((2*i+1)*candleWidth),2)-1;var boundaryTimeUnit=o5i.Z7(Math.floor(currentTimeUnit/timeUnitMultiplier),timeUnitMultiplier);if(o5i.Q7(boundaryTimeUnit,currentTimeUnit)){if(o5i.A7(this.layout.interval,"week"))boundaryTimeUnit=currentTimeUnit;else hz-=o5i.P7(candleWidth,4);}
if(o5i.v7(timeUnit,STX.MILLISECOND)){labelDate.setMilliseconds(boundaryTimeUnit);}
else if(o5i.i1(timeUnit,STX.SECOND)){labelDate.setMilliseconds(0);labelDate.setSeconds(boundaryTimeUnit);}
else if(o5i.u1(timeUnit,STX.MINUTE)){labelDate.setMilliseconds(0);labelDate.setSeconds(0);labelDate.setMinutes(boundaryTimeUnit);}
else if(o5i.q1(timeUnit,STX.HOUR)){labelDate.setMilliseconds(0);labelDate.setSeconds(0);labelDate.setMinutes(0);labelDate.setHours(boundaryTimeUnit);}
else if(o5i.b1(timeUnit,STX.DAY)){labelDate.setDate(Math.max(1,boundaryTimeUnit));}
else if(o5i.B1(timeUnit,STX.MONTH)){labelDate.setDate(1);labelDate.setMonth(o5i.J1(boundaryTimeUnit,1));}
else if(o5i.M1(timeUnit,STX.YEAR)){labelDate.setDate(1);labelDate.setMonth(0);}
else{labelDate.setDate(1);labelDate.setMonth(0);}
nextTimeUnit=boundaryTimeUnit+timeUnitMultiplier;if(o5i.C1(timeUnit,STX.DAY))timeInterval.maxTimeUnit=daysInMonth[labelDate.getMonth()]+1;if(o5i.f1(nextTimeUnit,timeInterval.maxTimeUnit))nextTimeUnit=timeInterval.minTimeUnit;previousTimeUnitLarge=currentTimeUnitLarge;if(firstTick&&o5i.N1(boundaryTimeUnit,currentTimeUnit))continue;if(chart.xAxis.formatter){text=chart.xAxis.formatter(labelDate,(o5i.p6o+G7o+I35),timeUnit,timeUnitMultiplier);}
else{if(o5i.V1(timeUnit,STX.DAY)){text=labelDate.getDate();}
else if(o5i.X1(timeUnit,STX.MONTH)){text=STX.monthAsDisplay(dtShifted.getMonth(),false,this);}
else if(o5i.G1(timeUnit,STX.YEAR)||o5i.P1(timeUnit,STX.DECADE)){text=labelDate.getFullYear();}
else{text=STX.timeAsDisplay(labelDate,this,timeUnit);}
}
axisRepresentation.push(new STXChart.XAxisLabel(hz,(o5i.p6o+F1s),text));}
firstTick=false;}
return axisRepresentation;}
;var cached=o5i.t6s,notcached=o5i.t6s;STXChart.prototype.createYAxis=function(panel,parameters){if(this.runPrepend("createYAxis",arguments))return ;var chart=panel.chart,isAChart=(o5i.O1(panel.name,chart.name));if(!parameters)parameters={}
;parameters.noChange=false;var yAxis=parameters.yAxis?parameters.yAxis:panel.yAxis;if(STXChart.enableCaching&&o5i.j04(yAxis.high,panel.cacheHigh)&&o5i.W04(yAxis.low,panel.cacheLow)){var leftTick=o5i.q04(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks;panel.cacheLeft=Math.min(panel.cacheLeft,leftTick);panel.cacheRight=Math.max(panel.cacheRight,rightTick);panel.cacheLeft=leftTick;panel.cacheRight=rightTick;parameters.noChange=true;cached++;}
else{panel.cacheLeft=1000000;panel.cacheRight=-1;panel.cacheHigh=yAxis.high;panel.cacheLow=yAxis.low;notcached++;}
var idealX=chart.xAxis.idealTickSizePixels?chart.xAxis.idealTickSizePixels:chart.xAxis.autoComputedTickSizePixels;if(yAxis.goldenRatioYAxis){if(o5i.E04(yAxis.idealTickSizePixels,idealX/1.618))parameters.noChange=false;}
if(!parameters.noChange){this.adjustYAxisHeightOffset(panel,yAxis);var height=yAxis.height=o5i.L04(yAxis.bottom,yAxis.top),pricePerPix=o5i.c04((yAxis.high-yAxis.low),(height-yAxis.zoom));if(parameters.ground&&!yAxis.semiLog){yAxis.high=yAxis.high+o5i.J04(yAxis.zoom,pricePerPix);}
else{yAxis.high=yAxis.high+o5i.M04((yAxis.zoom/2),pricePerPix)+o5i.C04(yAxis.scroll,pricePerPix);var unadjustedLow=yAxis.low;yAxis.low=o5i.f04(yAxis.low,(yAxis.zoom/2)*pricePerPix,yAxis.scroll*pricePerPix);if(yAxis.semiLog&&o5i.l04(yAxis.low,0))yAxis.low=unadjustedLow;}
if(yAxis.min||o5i.y04(yAxis.min,0))yAxis.low=yAxis.min;if(yAxis.max||o5i.w04(yAxis.max,0))yAxis.high=yAxis.max;yAxis.shadow=o5i.o04(yAxis.high,yAxis.low);if(yAxis.semiLog&&(!this.activeDrawing||o5i.g04(this.activeDrawing.name,"projection"))){yAxis.logHigh=o5i.s04(Math.log(yAxis.high),Math.LN10);var semilow=Math.max(yAxis.low,0.000000001);yAxis.logLow=o5i.O04(Math.log(semilow),Math.LN10);if(o5i.j84(yAxis.low,0))yAxis.logLow=0;yAxis.logShadow=o5i.W84(yAxis.logHigh,yAxis.logLow);}
var fontHeight;if(yAxis.goldenRatioYAxis&&isAChart){yAxis.idealTickSizePixels=o5i.q84(idealX,1.618);if(o5i.E84(yAxis.idealTickSizePixels,0)){fontHeight=this.getCanvasFontSize("stx_yaxis");yAxis.idealTickSizePixels=o5i.L84(fontHeight,5);}
}
else{if(!yAxis.idealTickSizePixels){fontHeight=this.getCanvasFontSize("stx_yaxis");if(isAChart){yAxis.idealTickSizePixels=o5i.c84(fontHeight,5);}
else{yAxis.idealTickSizePixels=o5i.J84(fontHeight,2);}
}
}
var idealTicks=Math.round(o5i.M84(height,yAxis.idealTickSizePixels)),shadow=parameters.range?o5i.C84(parameters.range[1],parameters.range[0]):yAxis.shadow;yAxis.priceTick=Math.floor(o5i.f84(shadow,idealTicks));var n=1;for(var zz=0;o5i.N84(zz,10);zz++){if(o5i.V84(yAxis.priceTick,0))break;n*=10;yAxis.priceTick=o5i.Z84(Math.floor(shadow/idealTicks*n),n);}
if(o5i.Q84(zz,10))yAxis.priceTick=0.00000001;yAxis.priceTick=o5i.A84(Math.round(shadow/idealTicks*n),n);var verticalTicks=Math.round(o5i.P84(shadow,yAxis.priceTick));if(parameters.range&&o5i.v84(verticalTicks,shadow)&&!yAxis.noEvenDivisorTicks){while(o5i.i34(verticalTicks,1)){if(o5i.u34(shadow%verticalTicks,0))break;verticalTicks--;}
yAxis.priceTick=o5i.h34(shadow,verticalTicks);}
if(yAxis.minimumPriceTick){var yAxisPriceTick=yAxis.minimumPriceTick;fontHeight=this.getCanvasFontSize("stx_yaxis");for(var i=0;o5i.d34(i,100);i++){var numberOfTicks=o5i.n34(shadow,yAxisPriceTick);if(o5i.B34(height/numberOfTicks,fontHeight*2))yAxisPriceTick+=yAxis.minimumPriceTick;else break;}
if(o5i.e34(i,100))yAxis.priceTick=yAxisPriceTick;}
yAxis.multiplier=o5i.S34(yAxis.height,yAxis.shadow);}
if(!this.activeDrawing||o5i.F34(this.activeDrawing.name,"projection")){yAxis.high=this.valueFromPixel(panel.top,panel,yAxis);if(yAxis.semiLog){yAxis.logHigh=o5i.R34(Math.log(yAxis.high),Math.LN10);var semilow2=Math.max(yAxis.low,0.00000000001);yAxis.logLow=o5i.p34(Math.log(semilow2),Math.LN10);yAxis.logShadow=o5i.z34(yAxis.logHigh,yAxis.logLow);}
yAxis.shadow=o5i.m34(yAxis.high,yAxis.low);}
yAxis.multiplier=o5i.X34(yAxis.height,yAxis.shadow);if(o5i.G34(yAxis.multiplier,Infinity))yAxis.multiplier=0;if(!yAxis.decimalPlaces&&o5i.k34(yAxis.decimalPlaces,0)){if(isAChart){var labelDecimalPlaces=0;for(var j=0;o5i.r34(j,panel.yAxis.shadowBreaks.length);j++){var brk=panel.yAxis.shadowBreaks[j];if(o5i.U34(panel.yAxis.shadow,brk[0]))labelDecimalPlaces=brk[1];}
yAxis.printDecimalPlaces=labelDecimalPlaces;}
else yAxis.printDecimalPlaces=null;}
else{yAxis.printDecimalPlaces=yAxis.decimalPlaces;}
this.runAppend("createYAxis",arguments);}
;STXChart.prototype.adjustYAxisHeightOffset=function(panel,yAxis){yAxis.bottomOffset=o5i.t6s;if(o5i.D94(this.xAxisAsFooter,L7o)&&o5i.t94(panel.bottom>>>o5i.t6s,this.chart.canvasHeight)){yAxis.bottomOffset=this.xaxisHeight;}
else if(o5i.I94(this.xAxisAsFooter,L7o)&&o5i.b94(panel.name,p8o)){yAxis.bottomOffset=this.xaxisHeight;}
yAxis.bottom=o5i.x94(panel.bottom,yAxis.bottomOffset);}
;STXChart.prototype.drawYAxis=function(panel,parameters){var V6s="awYAxis",r6o="'";if(!parameters)parameters={}
;var yAxis=parameters.yAxis?parameters.yAxis:panel.yAxis;if(yAxis.fractional){if(!yAxis.originalPriceFormatter)yAxis.originalPriceFormatter={func:yAxis.priceFormatter}
;if(!yAxis.fractional.resolution)yAxis.fractional.resolution=yAxis.minimumPrice;if(!yAxis.fractional.formatter)yAxis.fractional.formatter=r6o;if(!yAxis.priceFormatter)yAxis.priceFormatter=function(stx,panel,price){var k7o="+",whole=Math.floor(o5i.K94(Math.round(price/yAxis.fractional.resolution),yAxis.fractional.resolution)),frac=Math.round(o5i.H94((price-whole),yAxis.fractional.resolution)),_nds=Math.floor(frac);return whole+yAxis.fractional.formatter+(o5i.a94(_nds,O05)?h6o:C2o)+_nds+(o5i.T94(frac-_nds,S9o)?k7o:C2o);}
;}
else{if(yAxis.originalPriceFormatter){yAxis.priceFormatter=yAxis.originalPriceFormatter.func;yAxis.originalPriceFormatter=o5i.d7o;}
}
if(yAxis.pretty)return this.drawYAxisPretty(panel,parameters);if(this.runPrepend(G9o,arguments))return ;if(!parameters.noDraw&&!yAxis.noDraw){if(!yAxis.yAxisPlotter||!parameters.noChange){var chart=panel.chart,isAChart=(o5i.Y94(panel.name,chart.name)&&o5i.l94(yAxis,panel.yAxis));if(!yAxis.priceTick)return ;var shadow=yAxis.shadow;if(parameters.range){shadow=o5i.y94(parameters.range[o5i.D6s],parameters.range[o5i.t6s]);}
var verticalTicks=o5i.w94(shadow,yAxis.priceTick);verticalTicks=Math.round(verticalTicks);var logStart,logPriceTick;if(yAxis.semiLog){logStart=o5i.o94(Math.log(this.valueFromPixel(yAxis.bottom,panel)),Math.LN10);logPriceTick=o5i.g94((yAxis.logHigh-yAxis.logLow),verticalTicks);}
var textStyle=yAxis.textStyle?yAxis.textStyle:L7s;yAxis.yAxisPlotter=new STX.Plotter();yAxis.yAxisPlotter.newSeries(l05,a1s,this.canvasStyle(N3o));yAxis.yAxisPlotter.newSeries(R2o,r0o,this.colorOrStyle(textStyle));yAxis.yAxisPlotter.newSeries(c55,a1s,this.canvasStyle(m1s));var priceOffset=o5i.t6s,high=parameters.range?parameters.range[o5i.D6s]:yAxis.high,low=parameters.range?parameters.range[o5i.t6s]:yAxis.low,drawBorders=(o5i.s94(yAxis.displayBorder,o5i.d7o)?chart.panel.yAxis.displayBorder:yAxis.displayBorder);if(o5i.O94(this.axisBorders,x35))drawBorders=x35;if(o5i.j54(this.axisBorders,L7o))drawBorders=L7o;var edgeOfAxis,position=(o5i.W54(yAxis.position,o5i.d7o)?chart.panel.yAxis.position:yAxis.position);if(o5i.q54(position,x05)){edgeOfAxis=yAxis.left+yAxis.width;}
else{edgeOfAxis=yAxis.left;}
var borderEdge=Math.round(edgeOfAxis)+S9o,tickWidth=drawBorders?o5i.v4s:o5i.t6s;if(o5i.E54(position,x05))tickWidth=drawBorders?-o5i.v4s:o5i.t6s;if(isAChart)if(o5i.L54(yAxis.shadow,o5i.D6s)){priceOffset=o5i.c54(((parseInt(low/yAxis.priceTick,O05)+o5i.D6s)*yAxis.priceTick),low);}
else{priceOffset=o5i.J54(yAxis.priceTick,Math.round((low%yAxis.priceTick)*panel.chart.roundit)/panel.chart.roundit);}
else priceOffset=o5i.M54(high,yAxis.priceTick);var fontHeight=this.getCanvasFontSize(L7s);for(var i=o5i.t6s;o5i.C54(i,verticalTicks);i++){var price;if(yAxis.semiLog){var logPrice=logStart+(o5i.f54(i,logPriceTick));price=Math.pow(O05,logPrice);}
else{if(isAChart)price=low+o5i.N54(i,yAxis.priceTick)+priceOffset;else price=o5i.V54(high,(i*yAxis.priceTick),priceOffset);}
var y=this.pixelFromPrice(price,panel,yAxis),y2=Math.round(y)+S9o;if(o5i.w54((y2+fontHeight/o5i.U4s),panel.bottom))continue;if(o5i.o54((y2-fontHeight/o5i.U4s),panel.top))continue;if(yAxis.displayGridLines){yAxis.yAxisPlotter.moveTo("grid",panel.left,y2);yAxis.yAxisPlotter.lineTo((o5i.x1o+h4o+G7o+o5i.U8o),panel.right,y2);}
if(drawBorders){yAxis.yAxisPlotter.moveTo("border",o5i.g54(borderEdge,0.5),y2);yAxis.yAxisPlotter.lineTo("border",borderEdge+tickWidth,y2);}
if(yAxis.priceFormatter){price=yAxis.priceFormatter(this,panel,price);}
else{price=this.formatYAxisPrice(price,panel,o5i.d7o,yAxis);}
var backgroundColor=yAxis.textBackground?this.containerColor:o5i.d7o,textXPosition=edgeOfAxis+tickWidth+o5i.v4s;if(o5i.s54(position,x05)){textXPosition=yAxis.left+o5i.v4s;if(yAxis.justifyRight)textXPosition=yAxis.left+yAxis.width+tickWidth-3;}
else{if(yAxis.justifyRight)textXPosition=edgeOfAxis+yAxis.width;}
yAxis.yAxisPlotter.addText(R2o,price,textXPosition,y2,backgroundColor,o5i.d7o,fontHeight);}
if(drawBorders){var b=Math.round(yAxis.bottom)+S9o;yAxis.yAxisPlotter.moveTo("border",borderEdge,yAxis.top);yAxis.yAxisPlotter.lineTo("border",borderEdge,b);yAxis.yAxisPlotter.draw(this.chart.context,c55);}
}
this.plotYAxisGrid(panel);}
this.runAppend((o5i.U8o+h4o+V6s),arguments);}
;STXChart.prototype.drawYAxisPretty=function(panel,parameters){var c85="wY",u85="dr",E7o="00",W85="hed",t6o="ti",q9o="ser",P7o="tty",g6s="awY";if(this.runPrepend("drawYAxis",arguments))return ;if(!parameters)parameters={}
;var yAxis=parameters.yAxis?parameters.yAxis:panel.yAxis;if(!parameters.noDraw&&!yAxis.noDraw){if(!yAxis.yAxisPlotter||!parameters.noChange){var chart=panel.chart,isAChart=(o5i.O54(panel.name,chart.name)&&o5i.j24(yAxis,panel.yAxis));if(!yAxis.priceTick)return ;if(isNaN(yAxis.high)||isNaN(yAxis.low))return ;var shadow=yAxis.shadow;if(parameters.range){shadow=o5i.W24(parameters.range[1],parameters.range[0]);}
var verticalTicks=o5i.q24(yAxis.height,yAxis.idealTickSizePixels);verticalTicks=Math.round(verticalTicks);var textStyle=yAxis.textStyle?yAxis.textStyle:"stx_yaxis";yAxis.yAxisPlotter=new STX.Plotter();yAxis.yAxisPlotter.newSeries((l05),"stroke",this.canvasStyle("stx_grid"));yAxis.yAxisPlotter.newSeries("text","fill",this.colorOrStyle(textStyle));yAxis.yAxisPlotter.newSeries("border","stroke",this.canvasStyle("stx_grid_border"));var priceOffset=0,high=parameters.range?parameters.range[1]:yAxis.high,low=parameters.range?parameters.range[0]:yAxis.low,drawBorders=(o5i.E24(yAxis.displayBorder,null)?chart.panel.yAxis.displayBorder:yAxis.displayBorder);if(o5i.L24(this.axisBorders,false))drawBorders=false;if(o5i.c24(this.axisBorders,true))drawBorders=true;var edgeOfAxis,position=(o5i.J24(yAxis.position,null)?chart.panel.yAxis.position:yAxis.position);if(o5i.M24(position,"left")){edgeOfAxis=yAxis.left+yAxis.width;}
else{edgeOfAxis=yAxis.left;}
var borderEdge=Math.round(edgeOfAxis)+0.5,tickWidth=drawBorders?3:0;if(o5i.C24(position,"left"))tickWidth=drawBorders?-3:0;var fontHeight=this.getCanvasFontSize("stx_yaxis"),increments=yAxis.increments,l=increments.length,p=0,n=1,inc=0,closest=0,pow=0,diff=Number.MAX_VALUE;for(var z=0;o5i.f24(z,100);z++){inc=o5i.N24(increments[p],Math.pow(10,pow));n=Math.floor(o5i.V24(shadow,inc));var newDiff=Math.abs(o5i.Z24(verticalTicks,n));if(o5i.Q24(newDiff,diff)){break;}
else{diff=newDiff;}
if(o5i.A24(n,verticalTicks)){closest=inc;break;}
else if(o5i.P24(n,verticalTicks)){p++;if(o5i.v24(p,l)){p=0;pow++;}
}
else{p--;if(o5i.i44(p,0)){p=o5i.u44(l,1);pow--;}
}
closest=inc;}
var lowLabel=o5i.h44(Math.ceil(low/closest),closest),lowPixelSize=o5i.d44(yAxis.bottom,this.pixelFromPrice(lowLabel,panel,yAxis)),closestInc=0;if(o5i.n44(lowPixelSize,yAxis.idealTickSizePixels)&&yAxis.semiLog&&yAxis.prettySemiLog){var divisor;for(divisor=Math.ceil(low);o5i.B44(divisor,lowLabel)&&o5i.e44(lowLabel%divisor,0);++divisor);if(o5i.S44(divisor,lowLabel)){if(o5i.F44(lowLabel,closest)){closest=divisor;closestInc=divisor;}
lowLabel=divisor;}
}
var i=0;for(var zz=0;o5i.R44(zz,100);zz++){var price=lowLabel+o5i.p44(i,closest);if(o5i.z44(price,high))break;closest+=closestInc;i++;var y=this.pixelFromPrice(price,panel,yAxis),y2=Math.round(y)+0.5;if(o5i.m44((y2+fontHeight/2),panel.bottom))continue;if(o5i.X44((y2-fontHeight/2),panel.top))continue;if(yAxis.displayGridLines){yAxis.yAxisPlotter.moveTo("grid",panel.left,y2);yAxis.yAxisPlotter.lineTo("grid",panel.right,y2);}
if(drawBorders){yAxis.yAxisPlotter.moveTo("border",o5i.G44(borderEdge,0.5),y2);yAxis.yAxisPlotter.lineTo("border",borderEdge+tickWidth,y2);}
if(yAxis.priceFormatter){price=yAxis.priceFormatter(this,panel,price);}
else{price=this.formatYAxisPrice(price,panel,null,yAxis);}
var backgroundColor=yAxis.textBackground?this.containerColor:null,textXPosition=edgeOfAxis+tickWidth+3;if(o5i.k44(position,(x05))){textXPosition=yAxis.left+3;if(yAxis.justifyRight)textXPosition=yAxis.left+yAxis.width+tickWidth-3;}
else{if(yAxis.justifyRight)textXPosition=edgeOfAxis+yAxis.width;}
yAxis.yAxisPlotter.addText("text",price,textXPosition,y2,backgroundColor,null,fontHeight);}
if(o5i.r44(zz,100)){console.log((o5i.U8o+h4o+g6s+g85+Z95+G7o+M95+h4o+n3o+P7o+y85+G8o+H4o+q9o+t6o+z5o+F3o+n3o+h4o+h4o+j3o+c05+h95+h95+F3o+h4o+n3o+G8o+L3o+W85+F3o+H6o+E7o));}
if(drawBorders){var b=Math.round(yAxis.bottom)+0.5;yAxis.yAxisPlotter.moveTo("border",borderEdge,yAxis.top);yAxis.yAxisPlotter.lineTo("border",borderEdge,b);yAxis.yAxisPlotter.draw(this.chart.context,"border");}
}
this.plotYAxisGrid(panel);}
this.runAppend((u85+G8o+c85+g85+Z95+W35),arguments);}
;STXChart.prototype.plotYAxisGrid=function(panel){var Y1o="plotYAxisGrid";if(this.runPrepend(Y1o,arguments))return ;var context=this.chart.context;panel.yAxis.yAxisPlotter.draw(context,l05);this.runAppend(Y1o,arguments);}
;STXChart.prototype.plotYAxisText=function(panel){var p0o="axis",D2o="x_y";if(this.runPrepend("plotYAxisText",arguments))return ;var arr=panel.yaxisLHS.concat(panel.yaxisRHS);for(var i=0;o5i.U44(i,arr.length);i++){var yAxis=arr[i];if(!yAxis.yAxisPlotter)continue;if(yAxis.noDraw)continue;this.canvasFont((H4o+z2o+D2o+p0o));this.canvasColor("stx_yaxis");var context=this.chart.context;context.textBaseline="middle";if(yAxis.justifyRight)context.textAlign="right";else context.textAlign="left";var fontHeight=this.getCanvasFontSize("stx_yaxis");yAxis.yAxisPlotter.draw(context,"text");context.textBaseline="alphabetic";context.textAlign="left";}
this.runAppend("plotYAxisText",arguments);}
;STXChart.prototype.formatYAxisPrice=function(price,panel,requestedDecimalPlaces,yAxis){if(o5i.D64(price,null)||typeof price=="undefined")return "";var yax=yAxis?yAxis:panel.yAxis,decimalPlaces=requestedDecimalPlaces;if(!decimalPlaces&&o5i.t64(decimalPlaces,0))decimalPlaces=yax.printDecimalPlaces;if(!decimalPlaces&&o5i.I64(decimalPlaces,0)){if(o5i.b64(yax.priceTick,0.01))decimalPlaces=4;else if(o5i.x64(yax.priceTick,0.1))decimalPlaces=2;else if(o5i.K64(yax.priceTick,1))decimalPlaces=1;else decimalPlaces=0;}
if(o5i.H64(panel.name,panel.chart.name)){if(o5i.a64(yax.priceTick,100)){return STX.condenseInt(price);}
}
if(this.internationalizer){if(o5i.T64(decimalPlaces,this.internationalizer.priceFormatters.length))decimalPlaces=o5i.Y64(this.internationalizer.priceFormatters.length,1);price=this.internationalizer.priceFormatters[decimalPlaces].format(price);}
else{price=price.toFixed(decimalPlaces);}
return price;}
;STXChart.prototype.formatPrice=function(price,panel){if(!price||typeof price=="undefined")return "";if(!panel)panel=this.currentPanel;if(!panel)panel=this.chart.panel;if(!panel)return price;var decimalPlaces=panel.decimalPlaces;if(!decimalPlaces&&o5i.l64(decimalPlaces,0)){decimalPlaces=panel.chart.decimalPlaces;}
if(!decimalPlaces&&o5i.y64(decimalPlaces,0)){return price;}
if(this.internationalizer){if(o5i.w64(decimalPlaces,this.internationalizer.priceFormatters.length))decimalPlaces=o5i.o64(this.internationalizer.priceFormatters.length,1);price=this.internationalizer.priceFormatters[decimalPlaces].format(price);}
else{price=price.toFixed(decimalPlaces);}
return price;}
;STXChart.prototype.createCrosshairs=function(){var W1s="createCrosshairs";if(this.runPrepend(W1s,arguments))return ;if(this.controls.crossX.onmousedown)return ;this.controls.crossY.onmousedown=function(e){if(!e)e=event;if(e.preventDefault)e.preventDefault();return x35;}
;this.controls.crossX.onmousedown=function(e){if(!e)e=event;if(e.preventDefault)e.preventDefault();return x35;}
;this.runAppend(W1s,arguments);}
;STXChart.prototype.determineMinMax=function(quotes,fields,sum,bypassTransform,length){var highValue=Number.MAX_VALUE*-1,lowValue=Number.MAX_VALUE,isTransform=false,l=quotes.length;if(length)l=length;for(var i=0;o5i.g64(i,l);i++){var quote=quotes[i];if(!quote)continue;if(!bypassTransform){if(quote.transform){isTransform=true;quote=quote.transform;}
else if(isTransform)continue;}
var acc=0;for(var j=0;o5i.s64(j,fields.length);j++){var f=quote[fields[j]];if(!f)continue;if(typeof (f)=="number")f=[f];for(var v=0;o5i.O64(v,f.length);v++){var val=f[v];if(val||o5i.j74(val,0)){if(sum){acc+=val;if(o5i.W74(acc,highValue))highValue=acc;if(o5i.q74(acc,lowValue))lowValue=acc;}
else{if(o5i.E74(val,highValue))highValue=val;if(o5i.L74(val,lowValue))lowValue=val;}
}
}
}
}
if(highValue==Number.MAX_VALUE*-1)highValue=0;if(o5i.c74(lowValue,Number.MAX_VALUE))lowValue=0;return [lowValue,highValue];}
;STXChart.prototype.calculateYAxisRange=function(panel,yAxis,low,high){if(o5i.J74(low,Number.MAX_VALUE)){low=0;high=0;}
var cheight=panel.height,newHigh=null,newLow=null;this.adjustYAxisHeightOffset(panel,yAxis);yAxis.top=panel.top;yAxis.height=o5i.M74(yAxis.bottom,yAxis.top);var verticalPad=Math.round(Math.abs(o5i.C74(cheight,5)));if(o5i.f74(cheight-Math.abs(yAxis.scroll),verticalPad)){yAxis.scroll=(o5i.N74(cheight,verticalPad))*(o5i.V74(yAxis.scroll,0)?-1:1);}
var pricePerPix=o5i.Z74((high-low),yAxis.height);if(low||o5i.Q74(low,0)){if(o5i.A74(high-low,0)){newHigh=o5i.P74(high,2);newLow=0;}
else{if((this.layout.semiLog||o5i.v74(this.layout.chartScale,"log"))&&newHigh){var logLow=o5i.i14(Math.log(low),Math.LN10),logHigh=o5i.u14(Math.log(high),Math.LN10);newHigh=Math.pow(10,logHigh);newLow=Math.pow(10,logLow);}
else{newHigh=high;newLow=low;}
}
yAxis.high=newHigh;yAxis.low=newLow;}
if(yAxis.max||o5i.h14(yAxis.max,0))yAxis.high=yAxis.max;if(yAxis.min||o5i.d14(yAxis.min,0))yAxis.low=yAxis.min;yAxis.shadow=o5i.n14(yAxis.high,yAxis.low);if(o5i.B14(panel.chart.name,panel.name)&&o5i.e14(panel.yAxis,yAxis)){var isLogScale=(this.layout.semiLog||o5i.S14(this.layout.chartScale,"log"));if(panel.chart.isComparison)isLogScale=false;if(o5i.F14(yAxis.semiLog,isLogScale)){this.clearPixelCache();yAxis.semiLog=isLogScale;}
}
}
;STXChart.prototype.renderYAxis=function(chart){if(this.runPrepend("renderYAxis",arguments))return ;var panel=chart.panel,arr=panel.yaxisRHS.concat(panel.yaxisLHS),i;for(i=0;o5i.R14(i,arr.length);i++){var yAxis=arr[i],low=null,high=null;if(o5i.p14(panel.yAxis,yAxis)){low=chart.lowValue;high=chart.highValue;}
this.calculateYAxisRange(panel,yAxis,low,high);}
var parameters={}
;for(i=0;o5i.z14(i,arr.length);i++){parameters.yAxis=arr[i];this.createYAxis(panel,parameters);this.drawYAxis(panel,parameters);}
this.runAppend("renderYAxis",arguments);}
;STXChart.prototype.initializeDisplay=function(chart){if(this.runPrepend("initializeDisplay",arguments))return ;var fields=[];for(var field in chart.series){if(chart.series[field].parameters.shareYAxis)fields.push(field);}
var panel=chart.panel=this.panels[chart.name],minMax,length=null,ticksOnScreen=Math.floor(o5i.m14((chart.width-this.micropixels),this.layout.candleWidth));if(o5i.X14(chart.scroll,chart.maxTicks)&&o5i.G14(chart.maxTicks,ticksOnScreen+1))length=o5i.k14(chart.dataSegment.length,1);if(!STXChart.chartShowsHighs(this.layout.chartType)){fields.push("Close");minMax=this.determineMinMax(chart.dataSegment,fields,null,null,length);if(o5i.r14(this.layout.chartType,"baseline_delta")){var base=chart.baseline.actualLevel;if(chart.transformFunc)base=chart.transformFunc(this,chart,base);var diff=Math.max(o5i.U14(base,minMax[0]),o5i.D06(minMax[1],base));if(this.repositioningBaseline){minMax=[chart.lowValue,chart.highValue];}
else{minMax[0]=o5i.t06(base,diff);minMax[1]=base+diff;}
}
}
else{fields.push("Close","High","Low");minMax=this.determineMinMax(chart.dataSegment,fields,null,null,length);}
chart.lowValue=minMax[0];chart.highValue=minMax[1];this.runAppend("initializeDisplay",arguments);}
;STXChart.prototype.computePosition=function(x,offset){if(typeof offset==J6s)offset=o5i.t6s;var position=o5i.I06(x,this.layout.candleWidth)+offset+this.micropixels;return position;}
;STXChart.prototype.computeColor=function(open,close){if(o5i.b06(open,close))return Q4s;if(o5i.x06(open,close))return Z6s;return W7o;}
;STXChart.prototype.computeLength=function(high,low){var h=this.pixelFromPrice(high),l=this.pixelFromPrice(low);return o5i.K06(l,h);}
;STXChart.prototype.setSeriesRenderer=function(renderer){var params=renderer.params;if(this.chart.seriesRenderers[renderer.params.name])return this.chart.seriesRenderers[renderer.params.name];if(params.yAxis){this.addYAxis(this.panels[params.panel],params.yAxis);}
renderer.stx=this;this.chart.seriesRenderers[renderer.params.name]=renderer;return renderer;}
;STXChart.prototype.setMarket=function(marketDefinition,chart){if(!chart)chart=this.chart;chart.market=new STX.Market(marketDefinition);}
;STXChart.prototype.setMarketFactory=function(factory){this.marketFactory=factory;}
;STXChart.prototype.removeSeriesRenderer=function(renderer){for(var r in this.chart.seriesRenderers){if(o5i.H06(renderer.params.name,this.chart.seriesRenderers[r].params.name)){var toDelete=this.chart.seriesRenderers[renderer.params.name],yAxis=toDelete.params.yAxis,panel=this.panels[toDelete.params.panel];delete  this.chart.seriesRenderers[renderer.params.name];this.deleteYAxisIfUnused(panel,yAxis);return ;}
}
}
;STXChart.prototype.getSeriesRenderer=function(name){return this.chart.seriesRenderers[name];}
;STXChart.prototype.drawHistogram=function(params,seriesParams){if(!seriesParams||!seriesParams.length)return ;var panelName=params.panel;if(!panelName)panelName="chart";var c=this.panels[panelName];if(!c)return ;var yAxis=params.yAxis?params.yAxis:c.yAxis,b=Math.floor(yAxis.bottom)+0.5,t=Math.floor(yAxis.top)+0.5,type=params.type;if(o5i.a06(type,"histogram"))type=params.subtype;var quotes=this.chart.dataSegment,bordersOn=false;this.getDefaultColor();var sp;for(sp=0;o5i.T06(sp,seriesParams.length);sp++){bordersOn|=(seriesParams[sp].border_color_up&&!STX.isTransparent(seriesParams[sp].border_color_up));bordersOn|=(seriesParams[sp].border_color_down&&!STX.isTransparent(seriesParams[sp].border_color_down));}
if(!params.name)params.name="Data";var multiplier=yAxis.multiplier;if(!params.heightPercentage)params.heightPercentage=0.7;if(!params.widthFactor)params.widthFactor=0.8;var histMax=0,histMin=0;for(var i=0;o5i.Y06(i,this.chart.maxTicks);i++){var prices=quotes[i];if(!prices)continue;var total=0;for(sp=0;o5i.l06(sp,seriesParams.length);sp++){if(prices[seriesParams[sp].field]){if(o5i.y06(params.subtype,"stacked"))total+=prices[seriesParams[sp].field];else total=prices[seriesParams[sp].field];if(o5i.w06(total,histMax))histMax=total;if(o5i.o06(total,histMin))histMin=total;}
}
}
if(!params.bindToYAxis){if(o5i.g06(histMax,0)&&o5i.s06(histMin,0)){this.watermark(panelName,"center","bottom",this.translateIf(params.name+" Not Available"));return ;}
multiplier=o5i.O06((b-t),params.heightPercentage,(histMax-histMin));}
var offset=0.5;if(o5i.D86(this.layout.candleWidth,1)||!bordersOn)offset=0;this.startClip(panelName);var context=this.chart.context,shaveOff=Math.max(0,o5i.t86((1-params.widthFactor),this.layout.candleWidth,2)),tops={}
,bottoms={}
,self=this,candleWidth=1;function drawBars(field,color,opacity,isBorder,isUp,shift,candleWidth){if(!opacity)opacity=1;if(STX.isIE8)context.globalAlpha=0.5;else context.globalAlpha=opacity;context.beginPath();var prevTop=b+0.5,farLeft=Math.floor(o5i.d86(self.pixelFromBar(0,c.chart),self.layout.candleWidth/2)),prevRight=farLeft;for(var i=0;o5i.n86(i,quotes.length);i++){var bottom=bottoms[i];if(!bottom)bottom=b;if(o5i.B86(i,0))prevTop=bottom;var quote=quotes[i];if(!quote||!quote[field]){prevTop=bottom;prevRight+=self.layout.candleWidth;continue;}
var y=o5i.e86((quote[field]-histMin),multiplier);if(isNaN(y))continue;var myCandleWidth=self.layout.candleWidth;if(quote.candleWidth){myCandleWidth=quote.candleWidth;if(o5i.S86(i,0))farLeft=prevRight=Math.floor(o5i.F86(self.pixelFromBar(0,c.chart),quote.candleWidth/2));}
var top=Math.min(Math.floor(o5i.R86(bottom,y))+0.5,bottom);if(isUp){if(o5i.p86(quote.Close,quote.iqPrevClose)){prevTop=top;prevRight+=myCandleWidth;continue;}
}
else{if(o5i.z86(quote.Close,quote.iqPrevClose)){prevTop=top;prevRight+=myCandleWidth;continue;}
}
var x0,x1,variableWidthRatio=o5i.m86(myCandleWidth,self.layout.candleWidth),start=prevRight+o5i.X86((shaveOff+shift*candleWidth),variableWidthRatio);x0=Math.round(start)+(isBorder?0:offset);x1=o5i.G86(Math.round(start+candleWidth*variableWidthRatio),(isBorder?0:offset));if(o5i.k86(x1-x0,2))x1=x0+1;if(isBorder)roundPixel=0;else roundPixel=0.5;if(o5i.r86(x0%1,roundPixel))x0+=0.5;if(o5i.U86(x1%1,roundPixel))x1+=0.5;context.moveTo(x0,bottom);if(o5i.D36(b,bottom)){context.lineTo(x1,bottom);}
else{context.moveTo(x1,bottom);if(isBorder&&!shaveOff){if(bottoms[i+1])context.moveTo(x1,Math.max(top,Math.min(bottom,bottoms[i+1])));}
}
context.lineTo(x1,top);context.lineTo(x0,top);if(isBorder&&shift){if(o5i.t36(tops[i],top)||o5i.I36(i,0))context.lineTo(x0,Math.min(bottom,tops[i]));}
else if(isBorder&&!shaveOff&&o5i.b36(type,"clustered")){if(o5i.x36(i,0)&&tops[o5i.K36(i,1)]&&o5i.H36(tops[i-1],top))context.lineTo(x0,Math.min(bottom,tops[o5i.a36(i,1)]));}
else if(isBorder&&!shaveOff){if(o5i.T36(prevTop,top)||o5i.Y36(i,0))context.lineTo(x0,Math.min(bottom,prevTop));}
else{context.lineTo(x0,bottom);}
prevTop=top;prevRight+=myCandleWidth;if(o5i.l36(type,"clustered")||isBorder)tops[i]=top;}
if(!color)color="auto";if(isBorder){context.strokeStyle=o5i.y36(color,"auto")?self.defaultColor:color;context.stroke();}
else{context.fillStyle=o5i.w36(color,"auto")?self.defaultColor:color;context.fill();}
context.closePath();}
for(sp=0;o5i.o36(sp,seriesParams.length);sp++){var param=seriesParams[sp];candleWidth=o5i.g36(this.layout.candleWidth,params.widthFactor);var shift=0;if(o5i.s36(type,"clustered")){shift=sp;candleWidth/=seriesParams.length;}
drawBars(param.field,param.fill_color_up,param.opacity_up,null,true,shift,candleWidth);drawBars(param.field,param.fill_color_down,param.opacity_down,null,null,shift,candleWidth);if(o5i.O36(this.layout.candleWidth,2)&&bordersOn){drawBars(param.field,param.border_color_up,param.opacity_up,true,true,shift,candleWidth);drawBars(param.field,param.border_color_down,param.opacity_down,true,null,shift,candleWidth);}
if(o5i.j96(type,"stacked"))bottoms=STX.shallowClone(tops);}
context.globalAlpha=1;this.endClip();}
;STXChart.prototype.drawHeatmap=function(params,seriesParams){if(!seriesParams||!seriesParams.length)return ;var panelName=params.panel;if(!panelName)panelName="chart";var c=this.panels[panelName];if(!c)return ;var yAxis=params.yAxis?params.yAxis:c.yAxis,b=Math.floor(yAxis.bottom)+0.5,t=Math.floor(yAxis.top)+0.5,quotes=this.chart.dataSegment;this.getDefaultColor();if(!params.name)params.name="Data";if(!params.widthFactor)params.widthFactor=1;var offset=0.5;if(o5i.W96(c.chart.tmpWidth,1))offset=0;var height=null,halfHeight=null,self=this,lineWidth=null;function drawCells(field,color,isBorder,widthFactor,myoffset){context.beginPath();context.fillStyle=color;context.strokeStyle=color;var t=yAxis.top,b=yAxis.bottom,myCandleWidth=o5i.q96(self.layout.candleWidth,widthFactor),xc=Math.floor(o5i.E96(self.pixelFromBar(0,c.chart),self.layout.candleWidth)),x0,x1;for(var x=0;o5i.L96(x,quotes.length);x++){var quote=quotes[x];if(!quote)continue;if(quote.candleWidth){if(o5i.c96(x,0)){xc+=self.layout.candleWidth;}
else{xc+=o5i.J96((quote.candleWidth+myCandleWidth/widthFactor),2);}
myCandleWidth=o5i.M96(quote.candleWidth,widthFactor);}
else{xc+=self.layout.candleWidth;}
x0=o5i.C96(xc,myCandleWidth/2,myoffset);x1=xc+o5i.Y96(myCandleWidth,2)-myoffset;if(o5i.l96(x1-x0,2))x1=x0+1;if(quote.transform)quote=quote.transform;var cellValues=quote[field];if(!cellValues)continue;if(typeof cellValues=="number")cellValues=[cellValues];for(var i=0;o5i.y96(i,cellValues.length);i++){var v=self.pixelFromPrice(cellValues[i],c,yAxis);if(!lineWidth){var v1=self.pixelFromPrice(o5i.w96(cellValues[i],params.height),c,yAxis);context.lineWidth=1;height=o5i.o96(v1,v);halfHeight=o5i.g96(height,2);lineWidth=context.lineWidth;}
if(isBorder){var tc=v+halfHeight,bc=o5i.s96(v,halfHeight);context.moveTo(x0,tc);context.lineTo(x0,bc);context.lineTo(x1,bc);context.lineTo(x1,tc);context.lineTo(x0,tc);}
else{context.fillRect(x0,o5i.O96(v,halfHeight),o5i.j56(x1,x0),height);}
}
}
if(isBorder)context.stroke();context.closePath();}
this.startClip(panelName);var context=this.chart.context;context.globalAlpha=params.opacity;for(var sp=0;o5i.W56(sp,seriesParams.length);sp++){var param=seriesParams[sp];drawCells(param.field,param.color,null,params.widthFactor,param.border_color?offset:-offset/4);if(param.border_color&&o5i.q56(this.layout.candleWidth,2)){drawCells(param.field,param.border_color,true,params.widthFactor,offset);}
}
context.lineWidth=1;context.globalAlpha=1;this.endClip();}
;STXChart.prototype.startClip=function(panelName,allowYAxis){if(!panelName)panelName="chart";var panel=this.panels[panelName],yAxis=panel.yAxis;this.chart.context.save();this.chart.context.beginPath();var left=panel.left,width=panel.width;if(allowYAxis){left=0;width=this.width;}
this.chart.context.rect(left,panel.top,width,yAxis.height);this.chart.context.clip();}
;STXChart.prototype.endClip=function(){this.chart.context.restore();}
;STXChart.prototype.drawCandlesHighPerformance=function(panel,fillColor,borderColor,condition){var chart=panel.chart,quotes=chart.dataSegment,context=this.chart.context,t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,length,borderOffset=0;if(borderColor&&!STX.isTransparent(borderColor))borderOffset=0.5;var leftTick=o5i.E56(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks;context.beginPath();context.fillStyle=fillColor;var yAxis=panel.yAxis,whitespace=o5i.L56(chart.tmpWidth,2),candleWidth=this.layout.candleWidth,xbase=o5i.c56(panel.left,0.5*candleWidth,this.micropixels,1);for(var x=0;o5i.S56(x,quotes.length);x++){xbase+=o5i.F56(candleWidth,2);candleWidth=this.layout.candleWidth;xbase+=o5i.R56(candleWidth,2);var quote=quotes[x];if(!quote)continue;if(quote.projection)continue;if(quote.candleWidth){xbase+=o5i.p56((quote.candleWidth-candleWidth),2);candleWidth=quote.candleWidth;if(o5i.z56(this.layout.chartType,"volume_candle"))whitespace=o5i.m56(candleWidth,2);}
if(o5i.X56(quote.Open,quote.Close))continue;if(o5i.G56(condition,STXChart.CANDLEUP)&&o5i.k56(quote.Open,quote.Close))continue;if(o5i.r56(condition,STXChart.CANDLEDOWN)&&o5i.U56(quote.Open,quote.Close))continue;if(o5i.D26(condition,STXChart.CLOSEUP)&&o5i.t26(quote.Close,quote.iqPrevClose))continue;if(o5i.I26(condition,STXChart.CLOSEDOWN)&&o5i.b26(quote.Close,quote.iqPrevClose))continue;if(o5i.x26(condition,STXChart.CLOSEEVEN)&&o5i.K26(quote.Close,quote.iqPrevClose))continue;if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(o5i.H26(tick,panel.cacheLeft)||o5i.a26(tick,panel.cacheRight)||!cache.open){var o=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(o5i.T26((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top),c=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(o5i.Y26((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);top=Math.floor(Math.min(o,c))+borderOffset;bottom=Math.max(o,c);length=Math.floor(o5i.l26(bottom,top));if(o5i.y26(top,t)){if(o5i.w26(top+length,t)){cache.open=top;cache.close=top;continue;}
length-=o5i.o26(t,top);top=t;}
if(o5i.g26(top+length,b)){length-=(top+length-b);}
length=Math.max(length,2);cache.open=top;cache.close=cache.open+length;}
if(o5i.s26(cache.open,b))continue;if(o5i.O26(cache.close,t))continue;var flr_xbase=Math.floor(xbase)+0.5,xstart=Math.floor(o5i.j46(flr_xbase,whitespace))+borderOffset,xend=o5i.W46(Math.round(flr_xbase+whitespace),borderOffset);if(o5i.q46(quote.Open,quote.Close)){context.moveTo(xstart,cache.open);context.lineTo(xend,cache.open);context.lineTo(xend,cache.close);context.lineTo(xstart,cache.close);context.lineTo(xstart,cache.open);}
}
context.fill();if(borderOffset){context.lineWidth=1;context.strokeStyle=borderColor;context.stroke();}
}
;STXChart.prototype.drawCandles=function(panel,colorFunction,isOutline){var Z6o="tline",chart=panel.chart;if(!chart){chart=panel;panel=panel.chart;}
var quotes=chart.dataSegment,context=this.chart.context,t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,length,borderColor="transparent",fillColor="transparent",borderOffset=0;if(!STX.isTransparent(borderColor))borderOffset=0.5;var leftTick=o5i.E46(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks,yAxis=panel.yAxis,whitespace=o5i.L46(chart.tmpWidth,2),candleWidth=this.layout.candleWidth,xbase=o5i.c46(panel.left,0.5*candleWidth,this.micropixels,1);for(var x=0;o5i.S46(x,quotes.length);x++){xbase+=o5i.F46(candleWidth,2);candleWidth=this.layout.candleWidth;xbase+=o5i.R46(candleWidth,2);var quote=quotes[x];if(!quote)continue;if(quote.projection)continue;if(quote.candleWidth){xbase+=o5i.p46((quote.candleWidth-candleWidth),2);candleWidth=quote.candleWidth;if(o5i.z46(this.layout.chartType,"volume_candle"))whitespace=o5i.m46(candleWidth,2);}
if(!quote.Open&&o5i.X46(quote.Open,0))continue;if(o5i.G46(quote.Open,quote.Close))continue;var myColor=colorFunction(this,quote,isOutline?(W9o+Z6o):"solid");if(!myColor)continue;if(isOutline)borderColor=myColor;else fillColor=myColor;context.beginPath();context.fillStyle=fillColor;if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(o5i.k46(tick,panel.cacheLeft)||o5i.r46(tick,panel.cacheRight)||!cache.open){var o=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(o5i.U46((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top),c=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(o5i.D66((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);top=Math.floor(Math.min(o,c))+borderOffset;bottom=Math.max(o,c);length=Math.floor(o5i.t66(bottom,top));if(o5i.I66(top,t)){if(o5i.b66(top+length,t)){cache.open=top;cache.close=top;continue;}
length-=o5i.x66(t,top);top=t;}
if(o5i.K66(top+length,b)){length-=(top+length-b);}
length=Math.max(length,2);cache.open=top;cache.close=cache.open+length;}
if(o5i.H66(cache.open,b))continue;if(o5i.a66(cache.close,t))continue;flr_xbase=Math.floor(xbase)+0.5;var xstart=Math.floor(o5i.T66(flr_xbase,whitespace))+borderOffset,xend=o5i.Y66(Math.round(flr_xbase+whitespace),borderOffset);if(o5i.l66(quote.Open,quote.Close)){context.moveTo(xstart,cache.open);context.lineTo(xend,cache.open);context.lineTo(xend,cache.close);context.lineTo(xstart,cache.close);context.lineTo(xstart,cache.open);}
if(o5i.y66(fillColor,"transparent"))context.fill();if(borderOffset){context.lineWidth=1;context.strokeStyle=borderColor;context.stroke();}
}
}
;STXChart.prototype.drawShadowsHighPerformance=function(panel,style,condition){var chart=panel.chart,quotes=chart.dataSegment,context=this.chart.context;context.lineWidth=1;var t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,left,leftTick=o5i.w66(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks;context.beginPath();var yAxis=panel.yAxis,candleWidth=this.layout.candleWidth,xbase=o5i.o66(panel.left,0.5*candleWidth,this.micropixels,1);for(var x=0;o5i.P66(x,quotes.length);x++){xbase+=o5i.v66(candleWidth,2);candleWidth=this.layout.candleWidth;xbase+=o5i.i76(candleWidth,2);var quote=quotes[x];if(!quote)continue;if(quote.projection)continue;if(quote.candleWidth){xbase+=o5i.u76((quote.candleWidth-candleWidth),2);candleWidth=quote.candleWidth;}
if(condition){if(o5i.h76(condition,STXChart.CANDLEUP)&&o5i.d76(quote.Open,quote.Close))continue;else if(o5i.n76(condition,STXChart.CANDLEDOWN)&&o5i.B76(quote.Open,quote.Close))continue;else if(o5i.e76(condition,STXChart.CLOSEUP)&&o5i.S76(quote.Close,quote.iqPrevClose))continue;else if(o5i.F76(condition,STXChart.CLOSEDOWN)&&o5i.R76(quote.Close,quote.iqPrevClose))continue;else if(o5i.p76(condition,STXChart.CLOSEEVEN)&&o5i.z76(quote.Close,quote.iqPrevClose))continue;}
if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(o5i.m76(tick,panel.cacheLeft)||o5i.X76(tick,panel.cacheRight)||!cache.top){top=(yAxis.semiLog?this.pixelFromPrice(quote.High,panel):(o5i.G76((yAxis.high-quote.High),yAxis.multiplier))+yAxis.top);bottom=(yAxis.semiLog?this.pixelFromPrice(quote.Low,panel):(o5i.k76((yAxis.high-quote.Low),yAxis.multiplier))+yAxis.top);var length=o5i.r76(bottom,top);if(o5i.U76(top,t)){if(o5i.D16(top+length,t)){cache.top=top;cache.bottom=top;continue;}
length-=o5i.t16(t,top);top=t;}
if(o5i.I16(top+length,b)){length-=(top+length-b);}
cache.top=top;cache.bottom=cache.top+length;}
if(o5i.b16(cache.top,b))continue;if(o5i.x16(cache.bottom,t))continue;var xx=Math.floor(xbase)+0.5;context.moveTo(xx,cache.top);context.lineTo(xx,cache.bottom);if(o5i.K16(quote.Open,quote.Close)){var offset=this.offset;if(o5i.H16(this.layout.chartType,"volume_candle")){offset=o5i.a16(candleWidth,2);}
var x0=o5i.T16(xx,offset),x1=xx+offset,o=Math.floor(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(o5i.Y16((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top)+0.5;if(o5i.l16(o,b)&&o5i.y16(o,t)){context.moveTo(x0,o);context.lineTo(x1,o);}
}
}
this.canvasColor(style);context.stroke();}
;STXChart.prototype.drawShadows=function(panel,colorFunction){var chart=panel.chart;if(!chart){chart=panel;panel=panel.chart;}
var quotes=chart.dataSegment,context=this.chart.context;context.lineWidth=1;var t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,left,leftTick=o5i.w16(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks,yAxis=panel.yAxis,candleWidth=this.layout.candleWidth,xbase=o5i.o16(panel.left,0.5*candleWidth,this.micropixels,1);for(var x=0;o5i.P16(x,quotes.length);x++){xbase+=o5i.v16(candleWidth,2);candleWidth=this.layout.candleWidth;xbase+=o5i.i0U(candleWidth,2);var quote=quotes[x];if(!quote)continue;if(quote.projection)continue;if(quote.candleWidth){xbase+=o5i.u0U((quote.candleWidth-candleWidth),2);candleWidth=quote.candleWidth;}
var color=colorFunction(this,quote,"shadow");if(!color)continue;if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(o5i.h0U(tick,panel.cacheLeft)||o5i.d0U(tick,panel.cacheRight)||!cache.top){top=(yAxis.semiLog?this.pixelFromPrice(quote.High,panel):(o5i.n0U((yAxis.high-quote.High),yAxis.multiplier))+yAxis.top);bottom=(yAxis.semiLog?this.pixelFromPrice(quote.Low,panel):(o5i.B0U((yAxis.high-quote.Low),yAxis.multiplier))+yAxis.top);var length=o5i.e0U(bottom,top);if(o5i.S0U(top,t)){if(o5i.F0U(top+length,t)){cache.top=top;cache.bottom=top;continue;}
length-=o5i.R0U(t,top);top=t;}
if(o5i.p0U(top+length,b)){length-=(top+length-b);}
cache.top=top;cache.bottom=cache.top+length;}
if(o5i.z0U(cache.top,b))continue;if(o5i.m0U(cache.bottom,t))continue;var xx=Math.floor(xbase)+0.5;context.beginPath();context.moveTo(xx,cache.top);context.lineTo(xx,cache.bottom);if(o5i.X0U(quote.Open,quote.Close)||(!quote.Open&&o5i.G0U(quote.Open,0))){var offset=this.offset;if(o5i.k0U(this.layout.chartType,"volume_candle")){offset=o5i.r0U(candleWidth,2);}
var x0=o5i.U0U(xx,offset),x1=xx+offset,o=Math.floor((yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(o5i.D8U((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top))+0.5;if(o5i.t8U(o,b)&&o5i.I8U(o,t)){context.moveTo(x0,o);context.lineTo(x1,o);}
}
context.strokeStyle=color;context.stroke();}
}
;STXChart.prototype.scatter=function(panel){var chart=panel.chart,quotes=chart.dataSegment,context=this.chart.context;context.beginPath();context.lineWidth=4;var t=panel.yAxis.top,b=panel.yAxis.bottom,xbase=o5i.b8U(panel.left,0.5*this.layout.candleWidth,this.micropixels,1);for(var x=0;o5i.c8U(x,quotes.length);x++){xbase+=this.layout.candleWidth;var quote=quotes[x];if(!quote)continue;if(!quote.projection){if(quote.transform)quote=quote.transform;var scatter=[quote.Close];if(o5i.J8U("Scatter",quote))scatter=quote.Scatter;for(var i=0;o5i.M8U(i,scatter.length);i++){var top=this.pixelFromPrice(scatter[i],panel);if(o5i.C8U(top,t))continue;if(o5i.f8U(top,b))continue;context.moveTo(o5i.N8U(xbase,2),top);context.lineTo(xbase+2,top);}
}
}
this.canvasColor("stx_scatter_chart");context.stroke();context.closePath();context.lineWidth=1;}
;STXChart.prototype.drawKagiSquareWave=function(panel,upStyleName,downStyleName){var chart=panel.chart;this.startClip(panel.name);var quotes=chart.dataSegment,context=chart.context,upStyle=this.canvasStyle(upStyleName),downStyle=this.canvasStyle(downStyleName);this.canvasColor(upStyleName);var upColor=context.strokeStyle;this.canvasColor(downStyleName);var downColor=context.strokeStyle,upWidth=1;if(upStyle.width&&o5i.V8U(parseInt(upStyle.width,10),25)){upWidth=Math.max(1,STX.stripPX(upStyle.width));}
var downWidth=1;if(downStyle.width&&o5i.Z8U(parseInt(downStyle.width,10),25)){downWidth=Math.max(1,STX.stripPX(downStyle.width));}
context.beginPath();var leftTick=o5i.Q8U(chart.dataSet.length,chart.scroll),yAxis=panel.yAxis,first=true,previousOpen=null,lastClose=null,trend=null,xbase=o5i.A8U(panel.left,0.5*this.layout.candleWidth,this.micropixels,1);for(var x=0;o5i.r8U(x,quotes.length);x++){xbase+=this.layout.candleWidth;var quote=quotes[x];if(!quote)continue;if(quote.projection)break;if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(o5i.U8U(tick,panel.cacheLeft)||o5i.D3U(tick,panel.cacheRight)||!cache.open){cache.open=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(o5i.t3U((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top);cache.close=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(o5i.I3U((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);}
lastClose=cache.close;if(first){context.moveTo(Math.floor(xbase),cache.open);previousOpen=cache.open;if(o5i.b3U(cache.close,cache.open))trend=1;else trend=-1;first=false;}
if(trend!=-1&&o5i.x3U(cache.close,previousOpen)&&o5i.K3U(previousOpen,cache.open)){context.lineTo(Math.floor(xbase),previousOpen);context.strokeStyle=downColor;context.lineWidth=downWidth;context.stroke();context.closePath();context.beginPath();trend=-1;context.moveTo(Math.floor(xbase),previousOpen);}
else if(o5i.H3U(trend,1)&&o5i.a3U(cache.close,previousOpen)&&o5i.T3U(previousOpen,cache.open)){context.lineTo(Math.floor(xbase),previousOpen);context.strokeStyle=upColor;context.lineWidth=upWidth;context.stroke();context.closePath();context.beginPath();trend=1;context.moveTo(Math.floor(xbase),previousOpen);}
context.lineTo(Math.floor(xbase),cache.close);if(o5i.Y3U(x+1,quotes.length)){context.lineTo(Math.floor(xbase+this.layout.candleWidth),cache.close);previousOpen=cache.open;}
}
if(trend==-1||(o5i.l3U(trend,null)&&o5i.y3U(lastClose,previousOpen))){context.strokeStyle=upColor;context.lineWidth=upWidth;}
else{context.strokeStyle=downColor;context.lineWidth=downWidth;}
context.stroke();context.closePath();this.endClip();context.lineWidth=1;}
;STXChart.prototype.drawPointFigureChart=function(panel,style,condition){var chart=panel.chart;this.startClip(panel.name);var quotes=chart.dataSegment,context=chart.context;this.canvasColor(style);var pfstyle=this.canvasStyle(style),paddingTop=parseInt(pfstyle.paddingTop,10),paddingBottom=parseInt(pfstyle.paddingBottom,10),paddingLeft=parseInt(pfstyle.paddingLeft,10),paddingRight=parseInt(pfstyle.paddingRight,10);if(pfstyle.width&&o5i.w3U(parseInt(pfstyle.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(pfstyle.width));}
else{context.lineWidth=2;}
context.beginPath();if(!this.chart.pandf)this.chart.pandf={"box":1,"reversal":3}
;var box=this.chart.pandf.box,leftTick=o5i.o3U(chart.dataSet.length,chart.scroll),yAxis=panel.yAxis,boxes,height,start,candleWidth=this.layout.candleWidth,xbase=o5i.g3U(panel.left,candleWidth,this.micropixels,1);for(var x=0;o5i.v3U(x,quotes.length);x++){xbase+=candleWidth;var quote=quotes[x];if(!quote)continue;if(quote.projection)break;if(quote.candleWidth)candleWidth=quote.candleWidth;if(quote.transform)quote=quote.transform;if(o5i.i9U(condition,"X")&&o5i.u9U(quote.Open,quote.Close))continue;else if(o5i.h9U(condition,"O")&&o5i.d9U(quote.Open,quote.Close))continue;var cache=quote.cache,tick=leftTick+x;if(o5i.n9U(tick,panel.cacheLeft)||o5i.B9U(tick,panel.cacheRight)||!cache.open){cache.open=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(o5i.e9U((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top);cache.close=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(o5i.S9U((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);}
var xxl=Math.round(xbase),xxr=Math.round(xbase+candleWidth);boxes=Math.abs(Math.round(o5i.F9U((quote.Close-quote.Open),box)));height=Math.abs(o5i.R9U((cache.open-cache.close),boxes));var voffset=o5i.p9U(height,2);start=cache.open;for(;o5i.z9U(boxes,0);boxes--){if(o5i.m9U(condition,"X")){context.moveTo(xxl+paddingLeft,o5i.X9U(start,paddingBottom,voffset));context.lineTo(o5i.A9U(xxr,paddingRight),o5i.P9U(start,height,paddingTop,voffset));context.moveTo(xxl+paddingLeft,o5i.U9U(start,height,paddingTop,voffset));context.lineTo(o5i.W5U(xxr,paddingRight),o5i.q5U(start,paddingBottom,voffset));start-=height;}
else if(o5i.b5U(condition,"O")){context.moveTo(o5i.x5U((xxl+xxr),2),start+paddingTop-voffset);context.bezierCurveTo(xxr+paddingRight,start+paddingTop-voffset,xxr+paddingRight,start+height-paddingBottom-voffset,o5i.K5U((xxl+xxr),2),start+height-paddingBottom-voffset);context.bezierCurveTo(o5i.H5U(xxl,paddingLeft),start+height-paddingBottom-voffset,o5i.a5U(xxl,paddingLeft),start+paddingTop-voffset,o5i.T5U((xxl+xxr),2),start+paddingTop-voffset);start+=height;}
}
}
context.stroke();this.endClip();context.lineWidth=1;}
;STXChart.prototype.drawBarChartHighPerformance=function(panel,style,condition){var chart=panel.chart,quotes=chart.dataSegment,context=chart.context,c=this.canvasStyle(style);if(c.width&&o5i.Y5U(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
context.beginPath();var t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,length,leftTick=o5i.l5U(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks,yAxis=panel.yAxis,xbase=o5i.y5U(panel.left,0.5*this.layout.candleWidth,this.micropixels,1),hlen=o5i.Q5U(chart.tmpWidth,2),voffset=o5i.A5U(context.lineWidth,2);for(var x=0;o5i.P5U(x,quotes.length);x++){xbase+=this.layout.candleWidth;var quote=quotes[x];if(!quote)continue;if(quote.projection)break;if(condition){if(o5i.v5U(condition,STXChart.CLOSEUP)&&o5i.i2U(quote.Close,quote.iqPrevClose))continue;else if(o5i.u2U(condition,STXChart.CLOSEDOWN)&&o5i.h2U(quote.Close,quote.iqPrevClose))continue;else if(o5i.d2U(condition,STXChart.CLOSEEVEN)&&o5i.n2U(quote.Close,quote.iqPrevClose))continue;}
if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(o5i.B2U(tick,panel.cacheLeft)||o5i.e2U(tick,panel.cacheRight)||!cache.top){top=(yAxis.semiLog?this.pixelFromPrice(quote.High,panel):(o5i.S2U((yAxis.high-quote.High),yAxis.multiplier))+yAxis.top);bottom=(yAxis.semiLog?this.pixelFromPrice(quote.Low,panel):(o5i.F2U((yAxis.high-quote.Low),yAxis.multiplier))+yAxis.top);length=o5i.R2U(bottom,top);cache.open=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(o5i.p2U((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top);cache.close=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(o5i.z2U((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);if(o5i.m2U(top,t)){if(o5i.X2U(top+length,t)){cache.top=top;cache.bottom=top;continue;}
length-=o5i.G2U(t,top);top=t;}
if(o5i.k2U(top+length,b)){length-=(top+length-b);}
cache.top=top;cache.bottom=top+length;}
var xx=Math.floor(xbase)+0.5;if(o5i.r2U(cache.top,b)&&o5i.U2U(cache.bottom,t)){context.moveTo(xx,o5i.D4U(cache.top,voffset));context.lineTo(xx,cache.bottom+voffset);}
if(o5i.t4U(cache.open,t)&&o5i.I4U(cache.open,b)){context.moveTo(xx,cache.open);context.lineTo(o5i.b4U(xx,hlen),cache.open);}
if(o5i.x4U(cache.close,t)&&o5i.K4U(cache.close,b)){context.moveTo(xx,cache.close);context.lineTo(xx+hlen,cache.close);}
}
this.canvasColor(style);context.stroke();context.closePath();context.lineWidth=1;}
;STXChart.prototype.drawBarChart=function(panel,style,colorFunction){var chart=panel.chart;if(!chart){chart=panel;panel=panel.chart;}
var quotes=chart.dataSegment,context=chart.context,c=this.canvasStyle(style);if(c.width&&o5i.H4U(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
var t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,length,leftTick=o5i.a4U(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks,yAxis=panel.yAxis,colors={}
,hlen=o5i.T4U(chart.tmpWidth,2),voffset=o5i.Y4U(context.lineWidth,2),candleWidth=this.layout.candleWidth,xbase=o5i.l4U(panel.left,0.5*candleWidth,this.micropixels,1);for(var x=0;o5i.Z4U(x,quotes.length);x++){xbase+=o5i.Q4U(candleWidth,2);candleWidth=this.layout.candleWidth;xbase+=o5i.A4U(candleWidth,2);var quote=quotes[x];if(!quote)continue;if(quote.projection)break;if(quote.candleWidth){xbase+=o5i.P4U((quote.candleWidth-candleWidth),2);candleWidth=quote.candleWidth;}
var color=colorFunction(this,quote);if(!color)continue;colors[color]=1;context.strokeStyle=color;context.beginPath();if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(o5i.v4U(tick,panel.cacheLeft)||o5i.i6U(tick,panel.cacheRight)||!cache.top){top=this.pixelFromPrice(quote.High,panel);bottom=this.pixelFromPrice(quote.Low,panel);length=o5i.u6U(bottom,top);cache.open=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(o5i.h6U((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top);cache.close=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(o5i.d6U((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);if(o5i.n6U(top,t)){if(o5i.B6U(top+length,t)){cache.top=top;cache.bottom=top;continue;}
length-=o5i.e6U(t,top);top=t;}
if(o5i.S6U(top+length,b)){length-=(top+length-b);}
cache.top=top;cache.bottom=top+length;}
var xx=Math.floor(xbase)+0.5;if(o5i.F6U(cache.top,b)&&o5i.R6U(cache.bottom,t)){context.moveTo(xx,o5i.p6U(cache.top,voffset));context.lineTo(xx,cache.bottom+voffset);}
if(o5i.z6U(cache.open,t)&&o5i.m6U(cache.open,b)){context.moveTo(xx,cache.open);context.lineTo(o5i.X6U(xx,hlen),cache.open);}
if(o5i.G6U(cache.close,t)&&o5i.k6U(cache.close,b)){context.moveTo(xx,cache.close);context.lineTo(xx+hlen,cache.close);}
context.stroke();}
context.lineWidth=1;return colors;}
;STXChart.prototype.plotLineChart=function(panel,quotes,field,parameters,colorFunction){var skipProjections=false,skipTransform=false,noSlopes=false,tension=0,points=[];if(parameters){skipProjections=parameters.skipProjections;skipTransform=parameters.skipTransform;noSlopes=parameters.noSlopes;tension=parameters.tension;}
var chart=panel.chart,context=this.chart.context,first=true,yAxis=panel.yAxis,t=yAxis.top,b=yAxis.bottom,leftTick=o5i.r6U(chart.dataSet.length,chart.scroll),lastQuote=null,colors={}
,lastXY=[0,0],candleWidth=this.layout.candleWidth,xbase=o5i.U6U(panel.left,(parameters.noSlopes?1:0.5)*candleWidth,this.micropixels,1);this.startClip(panel.name);context.beginPath();for(var i=0;o5i.W7U(i,quotes.length);i++){xbase+=o5i.q7U(candleWidth,2);if(parameters.noSlopes)xbase+=o5i.E7U(candleWidth,2);candleWidth=this.layout.candleWidth;if(!parameters.noSlopes)xbase+=o5i.L7U(candleWidth,2);var quote=quotes[i];if(!quote)continue;if(skipProjections&&quote.projection)break;if(quote.candleWidth){if(!parameters.noSlopes)xbase+=o5i.c7U((quote.candleWidth-candleWidth),2);candleWidth=quote.candleWidth;}
if(!skipTransform&&quote.transform)quote=quote.transform;var x=xbase,cache=quote.cache,tick=leftTick+i;if(!quote[field]&&o5i.J7U(quote[field],0))continue;if(o5i.M7U(tick,panel.cacheLeft)||o5i.C7U(tick,panel.cacheRight)||!cache[field]){cache[field]=(yAxis.semiLog?this.pixelFromPrice(quote[field],panel):(o5i.f7U((yAxis.high-quote[field]),yAxis.multiplier))+yAxis.top);}
if(o5i.N7U(x,panel.right))lastQuote=quote;if(o5i.V7U(i,quotes.length-1)){if(this.extendLastTick)x+=o5i.Z7U(candleWidth,2);if(parameters.lastTickOffset)x+=parameters.lastTickOffset;}
var y=cache[field],pattern=null;if(colorFunction){var color=colorFunction(this,quote);if(!color)continue;if(typeof color=="object"){pattern=color.pattern;color=color.color;}
if(o5i.Q7U(context.strokeStyle,color)){if(!first){context.stroke();context.beginPath();context.moveTo(lastXY[0],lastXY[1]);}
context.strokeStyle=color;colors[color]=1;}
}
if(first){first=false;if(noSlopes||o5i.A7U(leftTick,0)){context.moveTo(i?x:0,y);if(tension){points.push(x,y);}
else{if(pattern){context.dashedLineTo(0,y,x,y,pattern);}
else{context.lineTo(x,y);}
}
}
else if(o5i.P7U(leftTick,0)){var baseline=chart.dataSet[leftTick];if(!skipTransform&&baseline.transform)baseline=baseline.transform;var y0=baseline[field];if(!y0||isNaN(y0)){context.moveTo(i?x:0,y);if(tension){points.push(x,y);}
}
else{y0=(yAxis.semiLog?this.pixelFromPrice(y0,panel):(o5i.v7U((yAxis.high-y0),yAxis.multiplier))+yAxis.top);var x0=o5i.i1U(x,candleWidth);if(pattern){context.dashedLineTo(x0,y0,x,y,pattern);}
else{context.moveTo(x0,y0);if(tension){points.push(x0,y0,x,y);}
else{context.lineTo(x,y);}
}
}
}
}
else{if(noSlopes){var quote1=quotes[o5i.u1U(i,1)];if(!quote1)continue;if(!skipTransform&&quote1.transform)quote1=quote1.transform;if(i){if(pattern){context.dashedLineTo(lastXY[0],lastXY[1],x,lastXY[1],pattern);}
else{context.lineTo(x,lastXY[1]);}
context.moveTo(x,y);}
if(o5i.h1U(i,quotes.length-1)){if(pattern){context.dashedLineTo(x,y,x+candleWidth,y,pattern);}
else{context.lineTo(x+candleWidth,y);}
}
}
else{if(pattern){context.dashedLineTo(lastXY[0],lastXY[1],x,y,pattern);}
else{if(tension){points.push(x,y);}
else{context.lineTo(x,y);}
}
}
}
lastXY=[x,y];if(o5i.d1U(i,(quotes.length-1))&&tension){points.push(x,y);plotSplinePrimitive(points,tension,context);}
}
context.stroke();this.endClip();if(parameters.label&&lastQuote){var txt;if(yAxis.priceFormatter){txt=yAxis.priceFormatter(this,panel,lastQuote[field],parameters.labelDecimalPlaces);}
else{txt=this.formatYAxisPrice(lastQuote[field],panel,parameters.labelDecimalPlaces);}
var yaxisLabelStyle=this.yaxisLabelStyle;if(panel.yAxis.yaxisLabelStyle)yaxisLabelStyle=panel.yAxis.yaxisLabelStyle;var labelcolor=o5i.n1U(yaxisLabelStyle,(n6o+a6o+a6o+o5i.N4o))?context.strokeStyle:null;this.yAxisLabels.push({src:"plot","args":[panel,txt,lastQuote.cache[field],o5i.B1U(yaxisLabelStyle,"noop")?"#FFFFFF":context.strokeStyle,labelcolor]}
);}
return colors;}
;STXChart.prototype.plotMountainChart=function(panel,quotes,field,parameters){var skipProjections=false,skipTransform=false,reverse=false,tension=0,points=[];if(parameters){skipProjections=parameters.skipProjections;skipTransform=parameters.skipTransform;reverse=parameters.reverse;tension=parameters.tension;}
var chart=panel.chart,context=this.chart.context,first=true,t=panel.yAxis.top,b=panel.yAxis.bottom;this.startClip(panel.name);context.beginPath();var leftTick=o5i.e1U(chart.dataSet.length,chart.scroll),firstX=null,firstY=null,yAxis=panel.yAxis,x=0;for(var i=0;o5i.S1U(i,quotes.length);i++){var quote=quotes[i];if(!quote)continue;if(skipProjections&&quote.projection)break;if(!skipTransform&&quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+i;if(o5i.F1U(tick,panel.cacheLeft)||o5i.R1U(tick,panel.cacheRight)||!cache[field]){if(!quote[field]&&o5i.p1U(quote[field],0))continue;cache[field]=(yAxis.semiLog?this.pixelFromPrice(quote[field],panel):(o5i.z1U((yAxis.high-quote[field]),yAxis.multiplier))+yAxis.top);}
x=panel.left+o5i.m1U((i+0.5),this.layout.candleWidth)+this.micropixels-1;if(o5i.X1U(i,quotes.length-1)){if(this.extendLastTick)x+=o5i.G1U(this.layout.candleWidth,2);if(parameters.lastTickOffset)x+=parameters.lastTickOffset;}
if(o5i.k1U(firstX,null))firstX=x;var y=cache[field];if(o5i.r1U(firstY,null))firstY=y;if(first){first=false;if(o5i.U1U(leftTick,0)){context.moveTo(x,y);if(tension){points.push(x,y);}
}
else{var baseline=chart.dataSet[leftTick];if(baseline.transform)baseline=baseline.transform;var y0=baseline[field];y0=(yAxis.semiLog?this.pixelFromPrice(y0,panel):(o5i.D0l((yAxis.high-y0),yAxis.multiplier))+yAxis.top);firstX=o5i.t0l(x,this.layout.candleWidth);context.moveTo(firstX,y0);if(tension){points.push(firstX,y0,x,y);}
else{context.lineTo(x,y);}
}
}
else{if(tension){points.push(x,y);}
else{context.lineTo(x,y);}
}
if(o5i.I0l(i,(quotes.length-1))&&tension){points.push(x,y);plotSplinePrimitive(points,tension,context);}
}
context.lineTo(x,reverse?t:b);context.lineTo(firstX,reverse?t:b);if(reverse){if(o5i.b0l(firstY,t))firstY=t;}
else{if(o5i.x0l(firstY,b))firstY=b;}
context.lineTo(firstX,firstY);context.fill();context.closePath();this.endClip();}
;STXChart.prototype.drawLineChart=function(panel,style,colorFunction){var context=this.chart.context,c=this.canvasStyle(style);if(c.width&&o5i.K0l(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
this.canvasColor(style);var params={skipProjections:true}
;if(panel.chart.tension)params.tension=panel.chart.tension;if(panel.chart.lastTickOffset)params.lastTickOffset=panel.chart.lastTickOffset;var rc=this.plotLineChart(panel,panel.chart.dataSegment,"Close",params,colorFunction);context.lineWidth=1;return rc;}
;STXChart.prototype.drawMountainChart=function(panel,style,colorFunction){var context=this.chart.context;if(!style)style="stx_mountain_chart";var c=this.canvasStyle(style);if(c.width&&o5i.H0l(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
var top=this.pixelFromPrice(panel.chart.highValue,panel);if(isNaN(top))top=0;var backgroundColor=c.backgroundColor,color=c.color;if(color&&!STX.isTransparent(color)){var gradient=context.createLinearGradient(0,top,0,panel.yAxis.bottom);gradient.addColorStop(0,backgroundColor);gradient.addColorStop(1,color);context.fillStyle=gradient;}
else{context.fillStyle=backgroundColor;}
var params={skipProjections:true}
;if(panel.chart.tension)params.tension=panel.chart.tension;if(panel.chart.lastTickOffset)params.lastTickOffset=panel.chart.lastTickOffset;var padding=parseInt(c.padding,10),strokeStyle=c.borderTopColor,rc=null;if(strokeStyle&&!STX.isTransparent(strokeStyle)){if(padding&&!STX.isIE8){var tempCanvas=context.canvas.cloneNode(true);tempCanvas.getContext("2d").drawImage(context.canvas,0,0);context.save();context.clearRect(0,0,context.canvas.width,context.canvas.height);}
}
this.plotMountainChart(panel,panel.chart.dataSegment,"Close",params);if(strokeStyle&&!STX.isTransparent(strokeStyle)){if(padding&&!STX.isIE8){context.lineWidth+=o5i.a0l(2,padding);context.globalCompositeOperation="destination-out";this.plotLineChart(panel,panel.chart.dataSegment,"Close",params);context.globalCompositeOperation="destination-over";context.drawImage(tempCanvas,0,0);context.restore();}
context.strokeStyle=strokeStyle;rc=this.plotLineChart(panel,panel.chart.dataSegment,"Close",params,colorFunction);}
context.lineWidth=1;return rc;}
;STXChart.prototype.drawWaveChart=function(panel){var h1o=1744844,v1s=((127,81.)>0x4D?(0x16A,1603634):(0x12C,1.90E1)),l8o=678355107,D1s=1121793830,chart=panel.chart,quotes=chart.dataSegment,context=this.chart.context;this.startClip(panel.name);context.beginPath();var first=false,reset=false,t=panel.yAxis.top,b=panel.yAxis.bottom,xbase=panel.left+Math.floor(-0.5*this.layout.candleWidth+this.micropixels);for(var i=0;o5i.T0l(i,quotes.length);i++){xbase+=this.layout.candleWidth;var quote=quotes[i];if(!quote)continue;if(quote.projection)break;if(quote.transform)quote=quote.transform;var x=o5i.Y0l(xbase,3*this.layout.candleWidth/8),y=this.pixelFromPrice(quote.Open,panel);if(o5i.l0l(y,t)){y=t;if(reset){context.moveTo(x,y);continue;}
reset=true;}
else if(o5i.y0l(y,b)){y=b;if(reset){context.moveTo(x,y);continue;}
reset=true;}
else{reset=false;}
if(!first){first=true;var leftTick=o5i.w0l(chart.dataSet.length,chart.scroll);if(o5i.o0l(leftTick,0)){context.moveTo(x,y);}
else if(o5i.g0l(leftTick,0)){var baseline=chart.dataSet[o5i.s0l(leftTick,1)];if(baseline.transform)baseline=baseline.transform;var y0=baseline.Close;y0=(panel.yAxis.semiLog?this.pixelFromPrice(y0,panel):(o5i.O0l((panel.yAxis.high-y0),panel.yAxis.multiplier))+t);y0=Math.min(Math.max(y0,t),b);context.moveTo(panel.left+o5i.j8l((i-1),this.layout.candleWidth)+this.micropixels,y0);context.lineTo(x,y);}
context.moveTo(x,y);}
else{context.lineTo(x,y);}
x+=o5i.W8l(this.layout.candleWidth,4);if(o5i.q8l(quote.Open,quote.Close)){y=this.pixelFromPrice(quote.Low,panel);if(o5i.E8l(y,t))y=t;if(o5i.L8l(y,b))y=b;context.lineTo(x,y);x+=o5i.c8l(this.layout.candleWidth,4);y=this.pixelFromPrice(quote.High,panel);if(o5i.J8l(y,t))y=t;if(o5i.M8l(y,b))y=b;context.lineTo(x,y);}
else{y=this.pixelFromPrice(quote.High,panel);if(o5i.C8l(y,t))y=t;if(o5i.f8l(y,b))y=b;context.lineTo(x,y);x+=o5i.N8l(this.layout.candleWidth,4);y=this.pixelFromPrice(quote.Low,panel);if(o5i.V8l(y,t))y=t;if(o5i.Z8l(y,b))y=b;context.lineTo(x,y);}
x+=o5i.Q8l(this.layout.candleWidth,4);y=this.pixelFromPrice(quote.Close,panel);if(o5i.A8l(y,t))y=t;if(o5i.P8l(y,b))y=b;context.lineTo(x,y);}
var h4s=D1s,q4s=-l8o,t4s=o5i.U4s;for(var W4s=o5i.D6s;o5i.C2s.T2s(W4s.toString(),W4s.toString().length,v1s)!==h4s;W4s++){t4s+=o5i.U4s;}
if(o5i.C2s.T2s(t4s.toString(),t4s.toString().length,h1o)!==q4s){self.behavior.callback(qparams);return c6W===K6W;}
var c=this.canvasStyle("stx_line_chart");if(c.width&&o5i.v8l(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
this.canvasColor("stx_line_chart");context.stroke();context.closePath();this.endClip();context.lineWidth=1;}
;STXChart.prototype.updateFloatHRLabel=function(panel){var arr=panel.yaxisLHS.concat(panel.yaxisRHS),cy=this.crossYActualPos?this.crossYActualPos:this.cy;if(this.floatCanvas.isDirty)STX.clearCanvas(this.floatCanvas,this);if(o5i.i3l(this.controls.crossX.style.display,"none"))return ;if(this.controls.crossY){var crosshairWidth=panel.width;if(o5i.u3l(this.yaxisLabelStyle,"roundRectArrow"))crosshairWidth-=7;this.controls.crossY.style.left=panel.left+"px";this.controls.crossY.style.width=crosshairWidth+(q85);}
for(var i=0;o5i.h3l(i,arr.length);i++){var yAxis=arr[i],price=this.valueFromPixel(cy,panel,yAxis);if(isNaN(price))continue;if((panel.min||o5i.d3l(panel.min,0))&&o5i.n3l(price,panel.min))continue;if((panel.max||o5i.B3l(panel.max,0))&&o5i.e3l(price,panel.max))continue;var labelDecimalPlaces=null;if(o5i.S3l(yAxis,panel.chart.yAxis)){labelDecimalPlaces=0;if(o5i.F3l(yAxis.shadow,1000))labelDecimalPlaces=2;if(o5i.R3l(yAxis.shadow,5))labelDecimalPlaces=4;if(yAxis.decimalPlaces||o5i.p3l(yAxis.decimalPlaces,0))labelDecimalPlaces=yAxis.decimalPlaces;}
if(yAxis.priceFormatter){price=yAxis.priceFormatter(this,panel,price,yAxis);}
else{price=this.formatYAxisPrice(price,panel,labelDecimalPlaces,yAxis);}
var style=this.canvasStyle("stx-float-price");this.createYAxisLabel(panel,price,cy,style.backgroundColor,style.color,this.floatCanvas.context,yAxis);this.floatCanvas.isDirty=true;}
}
;STXChart.prototype.headsUpHR=function(){var I8o=(0x251>(0x7C,1.135E3)?1.1:(8.5E2,2)>(5.,3.46E2)?'s':(70,0x178)<(0xAE,104.7E1)?(54.6E1,"H"):(21.,0x43)),V0o="dsUp",N2o="he",n8o="headsUpHR";if(this.runPrepend(n8o,arguments))return ;var panel=this.currentPanel;if(!panel)return ;var chart=panel.chart;this.updateFloatHRLabel(panel);if(this.controls.floatDate&&!STXChart.hideDates()){var bar=this.barFromPixel(this.cx),prices=chart.xaxis[bar];if(prices&&prices.DT){if(chart.xAxis.formatter){this.controls.floatDate.innerHTML=chart.xAxis.formatter(prices.DT);}
else if(this.internationalizer){var str=this.internationalizer.monthDay.format(prices.DT);if(!STXChart.isDailyInterval(this.layout.interval))str+=F3o+this.internationalizer.hourMinute.format(prices.DT);else{str=this.internationalizer.yearMonthDay.format(prices.DT);}
this.controls.floatDate.innerHTML=str;}
else{var m=prices.DT.getMonth()+o5i.D6s;if(o5i.z3l(m,O05))m=h6o+m;var d=prices.DT.getDate();if(o5i.m3l(d,O05))d=h6o+d;var h=prices.DT.getHours();if(o5i.X3l(h,O05))h=h6o+h;var mn=prices.DT.getMinutes();if(o5i.G3l(mn,O05))mn=h6o+mn;if(STXChart.isDailyInterval(this.layout.interval))this.controls.floatDate.innerHTML=m+L4o+d+L4o+prices.DT.getFullYear();else{this.controls.floatDate.innerHTML=m+L4o+d+F3o+h+f95+mn;var isSecond=(chart.xAxis.activeTimeUnit&&o5i.k3l(chart.xAxis.activeTimeUnit,STX.SECOND))||o5i.r3l(this.layout.timeUnit,B05),isMS=(chart.xAxis.activeTimeUnit&&o5i.U3l(chart.xAxis.activeTimeUnit,STX.MILLISECOND))||o5i.D9l(this.layout.timeUnit,L05);if(isSecond||isMS){var sec=prices.DT.getSeconds();if(o5i.t9l(sec,O05))sec=h6o+sec;this.controls.floatDate.innerHTML+=(f95+sec);if(isMS){var mil=prices.DT.getMilliseconds();if(o5i.I9l(mil,O05))mil=h6o+mil;if(o5i.b9l(mil,v35))mil=h6o+mil;this.controls.floatDate.innerHTML+=(f95+mil);}
}
}
}
}
else if(prices&&prices.index){this.controls.floatDate.innerHTML=prices.index;}
else{this.controls.floatDate.innerHTML=C2o;}
}
this.runAppend((N2o+G8o+V0o+I8o+u6s),arguments);}
;STXChart.prototype.setCrosshairColors=function(){return ;}
;STXChart.prototype.magnetize=function(){var U7o="ze",m35="Hi",T95="lout";this.magnetizedPrice=null;if(this.runPrepend("magnetize",arguments))return ;if((o5i.x9l(this.currentVectorParameters.vectorType,"annotation")||o5i.K9l(this.currentVectorParameters.vectorType,(L3o+G8o+o5i.p6o+T95)))&&STXChart.drawingLine)return ;if(o5i.H9l(this.currentVectorParameters.vectorType,"projection"))return ;if(o5i.a9l(this.currentVectorParameters.vectorType,"freeform"))return ;var panel=this.currentPanel;if(o5i.T9l(panel.name,panel.chart.name)){var chart=panel.chart,tick=this.tickFromPixel(o5i.Y9l(STXChart.crosshairX,this.left),chart);if(o5i.l9l(tick,chart.dataSet.length))return ;var prices=chart.dataSet[tick];if(!prices)return ;var price=this.valueFromPixel(this.cy,panel);this.magnetizedPrice=prices.Close;if(o5i.y9l(this.layout.chartType,(V35))||o5i.w9l(this.layout.chartType,"candle")||o5i.o9l(this.layout.chartType,"colored_bar")||o5i.g9l(this.layout.chartType,"hollow_candle")||o5i.s9l(this.layout.chartType,"volume_candle")){var fields=["Open",(m35+o5i.x1o+N7o),"Low",(L85+J9o+n3o)],closest=1000000000;for(var i=0;o5i.O9l(i,fields.length);i++){var fp=prices[fields[i]];if(o5i.j5l(Math.abs(price-fp),closest)){closest=Math.abs(o5i.W5l(price,fp));this.magnetizedPrice=fp;}
}
}
var x=this.pixelFromTick(tick,chart),y=this.pixelFromPrice(this.magnetizedPrice,this.currentPanel),ctx=this.chart.tempCanvas.context;ctx.beginPath();ctx.lineWidth=1;var radius=o5i.q5l(Math.max(this.layout.candleWidth,8),2);ctx.arc(x,y,radius,0,o5i.E5l(2,Math.PI),false);ctx.fillStyle="#FFFFFF";ctx.strokeStyle="#000000";ctx.fill();ctx.stroke();ctx.closePath();}
this.runAppend((X6o+G8o+o5i.x1o+n6o+n3o+z2o+G7o+U7o),arguments);}
;STXChart.prototype.positionCrosshairsAtPointer=function(){if(!this.currentPanel)return ;var chart=this.currentPanel.chart,rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.right=this.left+this.width;this.bottom=this.top+this.height;var tick=this.tickFromPixel(this.backOutX(STXChart.crosshairX),chart);this.cy=this.backOutY(STXChart.crosshairY);this.cx=this.backOutX(STXChart.crosshairX);this.controls.crossX.style.left=(o5i.L5l(this.pixelFromTick(tick,chart),0.5))+"px";this.controls.crossY.style.top=this.backOutY(STXChart.crosshairY)+"px";this.updateChartAccessories();}
;STXChart.prototype.doDisplayCrosshairs=function(){var O7s="air",K7s="doDisplayCrosshairs";if(this.runPrepend(K7s,arguments))return ;if(this.displayInitialized){if(!this.layout.crosshair&&(o5i.c5l(this.currentVectorParameters.vectorType,C2o)||!this.currentVectorParameters.vectorType)){this.undisplayCrosshairs();}
else if(STX.Drawing[this.currentVectorParameters.vectorType]&&(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw){this.undisplayCrosshairs();}
else{if(o5i.J5l(this.controls.crossX.style.display,C2o)){this.controls.crossX.style.display=C2o;this.controls.crossY.style.display=C2o;if(this.preferences.magnet&&this.currentVectorParameters.vectorType){STX.unappendClassName(this.container,Q9o);}
else{STX.appendClassName(this.container,(T6o+L4o+L3o+h4o+k8o+n0o+O7s+L4o+a6o+n6o));}
}
if(this.controls.floatDate&&!STXChart.hideDates()){this.controls.floatDate.style.display=D0o;}
}
}
this.runAppend(K7s,arguments);}
;STXChart.prototype.undisplayCrosshairs=function(){var N7s="undisplayCrosshairs";if(this.runPrepend(N7s,arguments))return ;if(this.controls.crossX){if(o5i.M5l(this.controls.crossX.style.display,o35)){this.controls.crossX.style.display=o35;this.controls.crossY.style.display=o35;}
}
if(this.displayInitialized&&this.controls.floatDate){this.controls.floatDate.style.display=o35;}
STX.unappendClassName(this.container,Q9o);if(this.floatCanvas&&this.floatCanvas.isDirty)STX.clearCanvas(this.floatCanvas,this);this.runAppend(N7s,arguments);}
;STXChart.prototype.modalBegin=function(){var N9o="modal";this.openDialog=N9o;this.undisplayCrosshairs();}
;STXChart.prototype.modalEnd=function(){this.cancelTouchSingleClick=L7o;this.openDialog=C2o;this.doDisplayCrosshairs();}
;STXChart.prototype.updateChartAccessories=function(){var Q7s="updateChartAccessories";if(this.runPrepend(Q7s,arguments))return ;this.accessoryTimer=o5i.d7o;this.lastAccessoryUpdate=new Date().getTime();var floatDate=this.controls.floatDate;if(floatDate){var panel=this.currentPanel;if(!panel)panel=this.chart.panel;if(panel){var chart=panel.chart,tick=this.tickFromPixel(this.backOutX(STXChart.crosshairX),chart),bottom=o5i.C5l(this.xAxisAsFooter,L7o)?o5i.t6s:o5i.f5l(this.chart.canvasHeight,panel.chart.bottom);floatDate.style.left=(o5i.N5l(this.pixelFromTick(tick,chart),(floatDate.offsetWidth/o5i.U4s),S9o))+q85;floatDate.style.bottom=bottom+(o5i.N4o+Z95);}
}
this.headsUpHR();this.runAppend(Q7s,arguments);}
;STXChart.prototype.mousemove=function(e$){var e=e$?e$:event;STXChart.crosshairX=e.clientX;STXChart.crosshairY=e.clientY;if(this.runPrepend(d9o,arguments))return ;if(!this.displayInitialized)return ;if(o5i.y5l(this.openDialog,C2o))return ;this.mousemoveinner(e.clientX,e.clientY);this.runAppend((X05+t2o),arguments);}
;STXChart.prototype.setResizeTimer=function(ms){this.resizeDetectMS=ms;function closure(self){return function(){if(!self.chart.canvas)return ;if(!STX.isAndroid){if(o5i.w5l(self.chart.canvas.height,Math.floor(self.devicePixelRatio*self.chart.container.clientHeight))||o5i.o5l(self.chart.canvas.width,Math.floor(self.devicePixelRatio*self.chart.container.clientWidth))){self.resizeChart();return ;}
}
}
;}
if(ms){if(this.resizeTimeout)window.clearInterval(this.resizeTimeout);this.resizeTimeout=window.setInterval(closure(this),ms);}
else{if(this.resizeTimeout)window.clearInterval(this.resizeTimeout);this.resizeTimeout=null;}
}
;STXChart.prototype.whichYAxis=function(panel,x){if(typeof x==="undefined")x=this.cx;if(panel){var arr=panel.yaxisLHS.concat(panel.yaxisRHS);for(var i=0;o5i.g5l(i,arr.length);i++){var yAxis=arr[i];if(o5i.s5l(yAxis.left,x)&&o5i.O5l(yAxis.left+yAxis.width,x))return yAxis;}
}
return this.chart.panel.yAxis;}
;STXChart.prototype.mousemoveinner=function(epX,epY){if(!this.chart.canvas)return ;if(!STX.isAndroid&&!STX.isIOS7or8){if(o5i.j2l(this.chart.canvas.height,Math.floor(this.devicePixelRatio*this.chart.container.clientHeight))||o5i.W2l(this.chart.canvas.width,Math.floor(this.devicePixelRatio*this.chart.container.clientWidth))){this.resizeChart();return ;}
}
var value;if(this.runPrepend("mousemoveinner",arguments))return ;var rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.right=this.left+this.width;this.bottom=this.top+this.height;STXChart.crosshairX=epX;STXChart.crosshairY=epY;var cy=this.cy=this.crossYActualPos=this.backOutY(STXChart.crosshairY),cx=this.cx=this.backOutX(STXChart.crosshairX);this.currentPanel=this.whichPanel(cy);if(!this.currentPanel)this.currentPanel=this.chart.panel;if(!this.currentPanel)return ;var chart=this.currentPanel.chart;if(chart.dataSet){this.crosshairTick=this.tickFromPixel(cx,chart);value=this.valueFromPixel(cy,this.currentPanel);var chField=o5i.q2l(this.currentPanel.name,"chart")?this.preferences.horizontalCrosshairField:this.currentPanel.horizontalCrosshairField;if(chField&&o5i.E2l(this.crosshairTick,chart.dataSet.length)&&this.crosshairTick>-1){value=chart.dataSet[this.crosshairTick][chField];this.crossYActualPos=this.pixelFromPriceTransform(value,this.currentPanel);}
this.crosshairValue=this.adjustIfNecessary(this.currentPanel,this.crosshairTick,value);}
if(o5i.L2l(STXChart.crosshairX,this.left)&&o5i.c2l(STXChart.crosshairX,this.right)&&o5i.J2l(STXChart.crosshairY,this.top)&&o5i.M2l(STXChart.crosshairY,this.bottom)){STXChart.insideChart=true;}
else{STXChart.insideChart=false;}
this.overXAxis=o5i.C2l(STXChart.crosshairY,this.top+this.chart.panel.yAxis.bottom)&&o5i.f2l(STXChart.crosshairY,this.top+this.chart.panel.bottom)&&STXChart.insideChart;this.overYAxis=(o5i.N2l(this.cx,this.currentPanel.right)||o5i.V2l(this.cx,this.currentPanel.left))&&STXChart.insideChart;if(this.overXAxis||this.overYAxis||(!STXChart.insideChart&&!this.grabbingScreen)){this.undisplayCrosshairs();if(!this.overXAxis&&!this.overYAxis)return ;}
if(!this.displayCrosshairs&&!STXChart.resizingPanel){this.undisplayCrosshairs();return ;}
var bHandle=this.controls.baselineHandle;if(this.repositioningBaseline){panel=this.panels[this.chart.panel.name];this.chart.baseline.userLevel=this.adjustIfNecessary(panel,this.crosshairTick,this.valueFromPixelUntransform(this.backOutY(STXChart.crosshairY),panel));if(o5i.Z2l(Date.now()-this.repositioningBaseline.lastDraw,100)){this.draw();this.repositioningBaseline.lastDraw=Date.now();}
return ;}
if(this.grabbingScreen&&!STXChart.resizingPanel){if(this.anyHighlighted){STX.clearCanvas(this.chart.tempCanvas,this);this.anyHighlighted=false;var n;for(n in this.overlays){this.overlays[n].highlight=false;}
for(n in chart.series){chart.series[n].highlight=false;}
this.displaySticky();}
if(this.preferences.magnet&&this.currentVectorParameters.vectorType){STX.clearCanvas(this.chart.tempCanvas,this);}
if(this.grabStartX==-1){this.grabStartX=STXChart.crosshairX;this.grabStartScrollX=chart.scroll;}
if(this.grabStartY==-1){this.grabStartY=STXChart.crosshairY;this.grabStartScrollY=chart.panel.yAxis.scroll;}
var dx=o5i.Q2l(STXChart.crosshairX,this.grabStartX),dy=o5i.A2l(STXChart.crosshairY,this.grabStartY);if(o5i.P2l(dx,0)&&o5i.v2l(dy,0))return ;if(o5i.i4l(Math.abs(dx)+Math.abs(dy),5))this.grabOverrideClick=true;var push;if(this.allowZoom&&o5i.u4l(this.grabMode,"pan")&&(o5i.h4l(this.grabMode.indexOf("zoom"),0)||this.ctrl||this.overXAxis||this.overYAxis)){if(o5i.d4l(this.grabMode,"")){if(this.overXAxis)this.grabMode="zoom-x";else if(this.overYAxis)this.grabMode="zoom-y";}
if(o5i.n4l(this.grabMode,"zoom-x"))dy=0;else if(o5i.B4l(this.grabMode,(h95+a6o+a6o+X6o+L4o+e95)))dx=0;push=o5i.e4l(dx,25);var centerMe=true;if(o5i.S4l(chart.scroll,chart.maxTicks))centerMe=false;var newCandleWidth=this.grabStartCandleWidth+push;if(o5i.F4l(newCandleWidth,this.minimumCandleWidth))newCandleWidth=this.minimumCandleWidth;var pct=o5i.R4l((this.layout.candleWidth-newCandleWidth),this.layout.candleWidth);if(o5i.p4l(pct,0.1)){newCandleWidth=o5i.z4l(this.layout.candleWidth,0.9);}
else if(pct<-0.1){newCandleWidth=o5i.m4l(this.layout.candleWidth,1.1);}
if(STX.ipad){if(o5i.X4l(Math.round((this.chart.width/this.layout.candleWidth)-0.499)-1,STXChart.ipadMaxTicks)&&o5i.G4l(Math.round((this.chart.width/newCandleWidth)-0.499)-1,STXChart.ipadMaxTicks))return ;}
var newMaxTicks;if(this.pinchingCenter){var x=this.backOutX(this.pinchingCenter),tick1=this.tickFromPixel(x,chart);this.setCandleWidth(newCandleWidth,chart);var newTick=this.tickFromPixel(x,chart);chart.scroll+=Math.floor((o5i.k4l(newTick,tick1)));}
else if(centerMe){newMaxTicks=Math.round(o5i.r4l((this.chart.width/newCandleWidth),0.499));if(o5i.U4l(newMaxTicks,chart.maxTicks)){this.setCandleWidth(newCandleWidth,chart);chart.scroll+=Math.round(o5i.D6l((newMaxTicks-chart.maxTicks),2));}
}
else{newMaxTicks=Math.round(o5i.t6l((this.chart.width/newCandleWidth),0.499));if(o5i.I6l(newMaxTicks,Math.round((this.chart.width/this.layout.candleWidth)-0.499))){this.setCandleWidth(newCandleWidth,chart);var wsInTicks=Math.round(o5i.b6l(this.preferences.whitespace,this.layout.candleWidth));chart.scroll=o5i.x6l(chart.maxTicks,wsInTicks);}
}
this.layout.span=null;var yAxis=this.whichYAxis(this.grabbingPanel,this.cx);if(this.overYAxis){yAxis.zoom=Math.round(this.grabStartZoom+dy);if(o5i.K6l(this.grabStartZoom,yAxis.height)){if(o5i.H6l(yAxis.zoom,yAxis.height))yAxis.zoom=o5i.a6l(yAxis.height,1);}
else{if(o5i.T6l(yAxis.zoom,yAxis.height))yAxis.zoom=yAxis.height+1;}
}
}
else{if(this.allowScroll){if(o5i.Y6l(Math.abs(dy),this.yTolerance)){if(!this.yToleranceBroken){dy=0;if(o5i.l6l(dx,0))return ;}
}
else{this.yToleranceBroken=true;}
this.grabMode="pan";push=Math.round(o5i.y6l(dx,this.layout.candleWidth));this.microscroll=o5i.w6l(push,(dx/this.layout.candleWidth));this.micropixels=this.layout.candleWidth*this.microscroll*-1;if(this.shift)push*=5;chart.scroll=this.grabStartScrollX+push;if(o5i.o6l(chart.scroll,1))chart.scroll=1;if(o5i.g6l(chart.scroll,chart.maxTicks)){this.preferences.whitespace=this.initialWhitespace;}
else{this.preferences.whitespace=o5i.s6l((chart.maxTicks-chart.scroll),this.layout.candleWidth);}
if(o5i.O6l(this.currentPanel.name,chart.name)){this.chart.panel.yAxis.scroll=this.grabStartScrollY+dy;}
}
this.dispatch((X6o+t2o),{stx:this,panel:this.currentPanel,x:this.cx,y:this.cy,grab:this.grabbingScreen}
);}
var clsrFunc=function(stx){return function(){stx.draw();}
;}
;if(STXChart.useAnimation){window.requestAnimationFrame(clsrFunc(this));}
else{this.draw();}
if(this.activeDrawing){STX.clearCanvas(this.chart.tempCanvas,this);this.activeDrawing.render(this.chart.tempCanvas.context);this.activeDrawing.measure();}
this.undisplayCrosshairs();return ;}
else{this.grabMode="";}
this.grabbingPanel=this.currentPanel;if(this.overXAxis||this.overYAxis)return ;this.controls.crossX.style.left=(o5i.j7l(this.pixelFromTick(this.crosshairTick,chart),0.5))+"px";this.controls.crossY.style.top=this.crossYActualPos+"px";this.setCrosshairColors();if(STXChart.insideChart&&!STXChart.resizingPanel){if(!STX.Drawing[this.currentVectorParameters.vectorType]||!(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw){this.doDisplayCrosshairs();}
if(o5i.W7l(this.accessoryTimer,null))clearTimeout(this.accessoryTimer);if(STXChart.drawingLine||!STX.touchDevice){this.updateChartAccessories();}
else{if(o5i.q7l(new Date().getTime()-this.lastAccessoryUpdate,100))this.updateChartAccessories();this.accessoryTimer=setTimeout((function(stx){return function(){stx.updateChartAccessories();}
;}
)(this),10);}
}
else{this.undisplayCrosshairs();}
var panel;if(this.repositioningDrawing){panel=this.panels[this.repositioningDrawing.panelName];value=this.adjustIfNecessary(panel,this.crosshairTick,this.valueFromPixelUntransform(this.backOutY(STXChart.crosshairY),panel));if(this.preferences.magnet&&this.magnetizedPrice&&o5i.E7l(panel.name,panel.chart.name)){value=this.adjustIfNecessary(panel,this.crosshairTick,this.magnetizedPrice);}
STX.clearCanvas(this.chart.tempCanvas,this);this.repositioningDrawing.reposition(this.chart.tempCanvas.context,this.repositioningDrawing.repositioner,this.crosshairTick,value);if(this.repositioningDrawing.measure)this.repositioningDrawing.measure();}
else if(STXChart.drawingLine){if(this.activeDrawing){panel=this.panels[this.activeDrawing.panelName];value=this.adjustIfNecessary(panel,this.crosshairTick,this.valueFromPixelUntransform(this.backOutY(STXChart.crosshairY),panel));if(this.preferences.magnet&&this.magnetizedPrice&&o5i.L7l(panel.name,panel.chart.name)){value=this.adjustIfNecessary(panel,this.crosshairTick,this.magnetizedPrice);}
STX.clearCanvas(this.chart.tempCanvas,this);this.activeDrawing.move(this.chart.tempCanvas.context,this.crosshairTick,value);if(this.activeDrawing.measure)this.activeDrawing.measure();}
}
else if(STXChart.resizingPanel){this.resizePanels();this.drawTemporaryPanel();}
else if(STXChart.insideChart){this.findHighlights();}
if(STXChart.insideChart){this.dispatch("move",{stx:this,panel:this.currentPanel,x:this.cx,y:this.cy,grab:this.grabbingScreen}
);this.findHighlights();}
if(this.preferences.magnet&&this.currentVectorParameters.vectorType){if(!STXChart.drawingLine&&!this.anyHighlighted)STX.clearCanvas(this.chart.tempCanvas);this.magnetize();}
this.runAppend("mousemoveinner",arguments);}
;STXChart.prototype.findHighlights=function(isTap,clearOnly){var B1o="ra",radius=10;if(isTap)radius=30;var cy=this.cy,cx=this.cx;if(!this.currentPanel)return ;var chart=this.currentPanel.chart;this.anyHighlighted=false;if(this.preferences.magnet&&!this.activeDrawing){STX.clearCanvas(this.chart.tempCanvas,this);}
var somethingChanged=false,drawingToMeasure=null,stickyArgs=["","",true,null,(o5i.U8o+B1o+j55+t55+o5i.x1o)],box={x0:this.tickFromPixel(o5i.c7l(cx,radius),chart),x1:this.tickFromPixel(cx+radius,chart),y0:this.valueFromPixelUntransform(o5i.J7l(cy,radius),this.currentPanel),y1:this.valueFromPixelUntransform(cy+radius,this.currentPanel)}
;for(var i=0;o5i.M7l(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];if(drawing.permanent)continue;var prevHighlight=drawing.highlighted,highlightMe=(o5i.C7l(drawing.panelName,this.currentPanel.name));drawing.repositioner=drawing.intersected(this.crosshairTick,this.crosshairValue,box);highlightMe=highlightMe&&drawing.repositioner;if(!clearOnly&&highlightMe){if(prevHighlight){drawingToMeasure=drawing;}
else if(o5i.f7l(prevHighlight,drawing.highlight(true))){if(!drawingToMeasure)drawingToMeasure=drawing;somethingChanged=true;}
this.anyHighlighted=true;}
else{if(o5i.N7l(prevHighlight,drawing.highlight(false))){somethingChanged=true;}
}
}
var first=false,n,o,series;for(n in this.overlays){o=this.overlays[n];o.prev=o.highlight;o.highlight=false;}
for(n in chart.seriesRenderers){var r=chart.seriesRenderers[n];for(var j=0;o5i.V7l(j,r.seriesParams.length);j++){series=r.seriesParams[j];series.prev=series.highlight;series.highlight=false;}
}
if(!clearOnly){var bar=this.barFromPixel(cx);if(o5i.Z7l(bar,chart.dataSegment.length)){var y;for(n in this.overlays){o=this.overlays[n];if(o5i.Q7l(o.panel,this.currentPanel.name))continue;if(o.libraryEntry.isHighlighted&&o.libraryEntry.isHighlighted(this,cx,cy)){o.highlight=true;this.anyHighlighted=true;continue;}
var quote=chart.dataSegment[bar];if(!quote)continue;for(var out in this.overlays[n].outputMap){var val=quote[out];y=0;if(o5i.A7l(this.currentPanel.name,chart.name)){y=this.pixelFromPriceTransform(val,this.currentPanel);}
else{y=this.pixelFromPrice(val,this.currentPanel);}
if(o5i.P7l(cy-radius,y)&&o5i.v7l(cy+radius,y)){o.highlight=true;this.anyHighlighted=true;break;}
}
if(o.highlight)break;}
for(n in chart.seriesRenderers){var renderer=chart.seriesRenderers[n];if(!renderer.params.highlightable)continue;for(var m=0;o5i.i1l(m,renderer.seriesParams.length);m++){series=renderer.seriesParams[m];y=renderer.caches[series.field]&&renderer.caches[series.field][bar];if(!y&&o5i.u1l(y,0))continue;if(o5i.h1l(cy-radius,y)&&o5i.d1l(cy+radius,y)){series.highlight=true;this.anyHighlighted=true;}
else if((o5i.n1l(renderer.params.subtype,"step")||o5i.B1l(series.type,"step"))&&o5i.e1l(bar,0)){var py=renderer.caches[series.field]&&renderer.caches[series.field][o5i.S1l(bar,1)];if((py||o5i.F1l(py,0))&&(o5i.R1l(cy,y)&&o5i.p1l(cy,py))||(o5i.z1l(cy,y)&&o5i.m1l(cy,py))){series.highlight=true;this.anyHighlighted=true;}
}
}
}
}
}
for(n in this.overlays){o=this.overlays[n];if(o.highlight){this.anyHighlighted=true;stickyArgs=[o.inputs.display?o.inputs.display:o.name,null,null,o.permanent,"study"];drawingToMeasure=null;}
if(o5i.X1l(o.prev,o.highlight))somethingChanged=true;}
for(n in chart.seriesRenderers){var r2=chart.seriesRenderers[n];if(!r2.params.highlightable)continue;for(var m2=0;o5i.G1l(m2,r2.seriesParams.length);m2++){series=r2.seriesParams[m2];if(series.highlight){this.anyHighlighted=true;stickyArgs=[series.display,series.color,false,series.permanent,"series"];drawingToMeasure=null;}
if(o5i.k1l(series.prev,series.highlight))somethingChanged=true;}
}
if(somethingChanged){this.draw();this.displaySticky.apply(this,stickyArgs);this.clearMeasure();if(drawingToMeasure)drawingToMeasure.measure();}
if(!this.anyHighlighted){this.setMeasure();}
}
;STXChart.prototype.positionSticky=function(m){var top=Math.max(o5i.r1l(this.cy,m.offsetHeight,A85),o5i.t6s),right=Math.min(o5i.i03(this.chart.canvasWidth,(this.cx-u35)),o5i.u03(this.chart.canvasWidth,m.offsetWidth));m.style.top=top+q85;m.style.right=right+(q85);}
;STXChart.prototype.displaySticky=function(message,backgroundColor,forceShow,noDelete,type){var O35="rightclick_",m=this.controls.mSticky;if(!m)return ;var mi=m.children[o5i.t6s];if(!mi)return ;var overlayTrashCan=m.children[o5i.D6s].children[o5i.t6s],mouseDeleteInstructions=m.children[o5i.D6s].children[o5i.D6s];if(!forceShow&&!message){mi.innerHTML=C2o;m.style.display=o35;if(STX.touchDevice&&overlayTrashCan){overlayTrashCan.style.display=o35;}
else if(!STX.touchDevice&&mouseDeleteInstructions){mouseDeleteInstructions.style.display=o35;}
}
else{if(!message)message=C2o;if(forceShow&&!message){mi.style.backgroundColor=C2o;mi.style.color=C2o;mi.style.display=o35;}
else if(backgroundColor){mi.style.backgroundColor=backgroundColor;mi.style.color=STX.chooseForegroundColor(backgroundColor);mi.style.display=b3o;}
else{mi.style.backgroundColor=C2o;mi.style.color=C2o;mi.style.display=b3o;}
mi.innerHTML=message;if(type)m.children[o5i.D6s].className=O35+type;m.style.display=b3o;this.positionSticky(m);if(noDelete){overlayTrashCan.style.display=o35;mouseDeleteInstructions.style.display=o35;}
else if(STX.touchDevice&&overlayTrashCan){overlayTrashCan.style.display=b3o;mouseDeleteInstructions.style.display=o35;}
else if(!STX.touchDevice&&mouseDeleteInstructions){mouseDeleteInstructions.style.display=D0o;}
}
}
;STXChart.prototype.setMeasure=function(price1,price2,tick1,tick2,hover){var V5o="setMeasure",X4o="measureLit",S0o="Bars",a5o="lit",w5o="U",v3o="su",N1s="asu",P6s="Me";if(this.runPrepend((C7s+z2o+P6s+N1s+K7o),arguments))return ;var m=$$(Q85),message=C2o;if(!price1){if(m&&o5i.h03(m.className,K9o))m.className=(X6o+F6o+v3o+h4o+n3o+w5o+n6o+a5o);if(!this.anyHighlighted&&o5i.d03(this.currentVectorParameters.vectorType,C2o))this.clearMeasure();}
else{var distance=o5i.n03(Math.round(Math.abs(price1-price2)*this.chart.roundit),this.chart.roundit);if(this.internationalizer){message+=this.internationalizer.numbers.format(distance);}
else{message+=distance;}
var pct=o5i.B03((price2-price1),price1);if(o5i.e03(Math.abs(pct),f9o)){pct=Math.round(o5i.S03(pct,v35));}
else if(o5i.F03(Math.abs(pct),C6s)){pct=o5i.R03(Math.round(pct*z35),O05);}
else{pct=o5i.p03(Math.round(pct*R35),v35);}
if(this.internationalizer){pct=this.internationalizer.percent.format(o5i.z03(pct,v35));}
else{pct=pct+J7o;}
message+=o0o+pct+K1o;var ticks=Math.abs(o5i.m03(tick2,tick1));ticks=Math.round(ticks)+o5i.D6s;var barsStr=this.translateIf(S0o);message+=F3o+ticks+F3o+barsStr;if(m){if(o5i.X03(m.className,X4o))m.className=X4o;m.innerHTML=message;}
}
if(this.activeDrawing)return ;m=this.controls.mSticky;if(m){if(hover){m.style.display=b3o;m.children[o5i.t6s].style.display=b3o;if(price1){m.children[o5i.t6s].innerHTML=message;}
this.positionSticky(m);}
else{m.style.display=o35;m.children[o5i.t6s].innerHTML=C2o;}
}
this.runAppend(V5o,arguments);}
;STXChart.prototype.clearMeasure=function(){var F85="eUnlit",m=$$(Q85);if(m){if(o5i.G03(m.className,(J7s+G8o+H4o+C1s+F85)))m.className=K9o;m.innerHTML=C2o;}
}
;STXChart.prototype.drawTemporaryPanel=function(){var a85="stx_panel_drag",borderEdge=Math.round(o5i.k03(STXChart.resizingPanel.right,o5i.v4s))+S9o;STX.clearCanvas(this.chart.tempCanvas,this);var y=o5i.r03(STXChart.crosshairY,this.top);this.plotLine(STXChart.resizingPanel.left,borderEdge,y,y,this.canvasStyle(a85),I7s,this.chart.tempCanvas.context,x35,{}
);STXChart.resizingPanel.handle.style.top=(o5i.U03(y,STXChart.resizingPanel.handle.offsetHeight/o5i.U4s))+q85;}
;STXChart.prototype.setTrashCan=function(){if(STX.touchDevice){var m=this.controls.mSticky;if(m){m.style.display=b3o;m.children[o5i.t6s].style.display=o35;m.children[o5i.D6s].style.display=b3o;if(m.children[o5i.U4s])m.children[o5i.U4s].style.display=o35;m.style.top=(o5i.D83(this.backOutY(STXChart.crosshairY),A85))+q85;m.style.right=o5i.t83(this.chart.canvasWidth,(this.backOutX(STXChart.crosshairX)-u35),q85);}
}
}
;STXChart.prototype.pixelFromBar=function(bar,chart){if(!chart)chart=this.chart;var x=o5i.t6s;if(this.chart.dataSegment&&this.chart.dataSegment[bar]&&this.chart.dataSegment[bar].leftOffset){x=this.chart.dataSegment[bar].leftOffset;}
else{x=o5i.d83((bar+S9o),this.layout.candleWidth);}
x=chart.panel.left+Math.floor(x+this.micropixels)-o5i.D6s;return x;}
;STXChart.prototype.barFromPixel=function(x,chart){if(!chart)chart=this.chart;if(o5i.n83(this.layout.chartType,"volume_candle")){var pixel=o5i.B83(x,chart.panel.left,this.micropixels),mult=2,bar=Math.round(o5i.J83(this.chart.dataSegment.length,mult)),rightofLastTick=this.chart.dataSegment[o5i.M83(this.chart.dataSegment.length,1)].leftOffset+o5i.C83(this.chart.dataSegment[this.chart.dataSegment.length-1].candleWidth,2);if(o5i.f83(pixel,rightofLastTick)){return this.chart.dataSegment.length+Math.floor(o5i.N83((x-rightofLastTick-chart.panel.left-this.micropixels),this.layout.candleWidth));}
else{for(var i=1;o5i.V83(i,this.chart.dataSegment.length);i++){mult*=2;if(!this.chart.dataSegment[bar])break;var left=o5i.Z83(this.chart.dataSegment[bar].leftOffset,this.chart.dataSegment[bar].candleWidth/2),right=this.chart.dataSegment[bar].leftOffset+o5i.Q83(this.chart.dataSegment[bar].candleWidth,2);if(o5i.A83(bar,0)||(o5i.P83(pixel,left)&&o5i.v83(pixel,right)))break;else if(o5i.i33(pixel,left))bar-=Math.max(1,Math.round(o5i.u33(this.chart.dataSegment.length,mult)));else bar+=Math.max(1,Math.round(o5i.h33(this.chart.dataSegment.length,mult)));bar=Math.max(0,Math.min(o5i.d33(this.chart.dataSegment.length,1),bar));}
if(!this.chart.dataSegment[bar]){for(i=0;o5i.n33(i,this.chart.dataSegment.length);i++){if(!this.chart.dataSegment[i])continue;if(o5i.B33(pixel,this.chart.dataSegment[i].leftOffset-this.chart.dataSegment[i].candleWidth/2))return Math.max(0,o5i.e33(i,1));else if(o5i.S33(pixel,this.chart.dataSegment[i].leftOffset+this.chart.dataSegment[i].candleWidth/2))return i;else if(o5i.F33(pixel,this.chart.dataSegment[i].leftOffset+this.chart.dataSegment[i].candleWidth/2))return i+1;}
}
}
return bar;}
else{return Math.floor(o5i.R33((x-chart.panel.left-this.micropixels),this.layout.candleWidth));}
}
;STXChart.prototype.tickFromPixel=function(x,chart){if(!chart)chart=this.chart;var tick=o5i.p33(chart.dataSet.length,chart.scroll,1);if(o5i.V33(this.layout.chartType,"volume_candle")){tick+=this.barFromPixel(x,chart);}
else{tick+=Math.floor(o5i.Z33((x-chart.panel.left-this.micropixels),this.layout.candleWidth));}
return tick;}
;STXChart.prototype.pixelFromTick=function(tick,chart){if(!chart)chart=this.chart;var bar=o5i.Q33(tick,chart.dataSet.length,chart.scroll,1);if(this.chart.dataSegment&&this.chart.dataSegment[bar]&&this.chart.dataSegment[bar].leftOffset){return chart.panel.left+Math.floor(this.chart.dataSegment[bar].leftOffset+this.micropixels)-1;}
else{var rightOffset=0,dsTicks=0;if(this.chart.dataSegment&&this.chart.dataSegment[o5i.k33(this.chart.dataSegment.length,1)]&&this.chart.dataSegment[o5i.r33(this.chart.dataSegment.length,1)].leftOffset){if(o5i.U33(this.chart.dataSegment.length,tick-chart.dataSet.length+chart.scroll)){rightOffset=o5i.D93(this.chart.dataSegment[this.chart.dataSegment.length-1].leftOffset,this.chart.dataSegment[this.chart.dataSegment.length-1].candleWidth/2);dsTicks=this.chart.dataSegment.length;}
}
return rightOffset+chart.panel.left+Math.floor(o5i.t93((tick-dsTicks-chart.dataSet.length+chart.scroll-0.5),this.layout.candleWidth)+this.micropixels)-1;}
}
;STXChart.prototype.pixelFromDate=function(date,chart){return this.pixelFromTick(this.tickFromDate(date,chart),chart);}
;STXChart.prototype.priceFromPixel=function(y,panel,yAxis){if(!panel)panel=this.chart.panel;var chart=panel.chart,yax=yAxis?yAxis:panel.yAxis;y=o5i.I93(yax.bottom,y);var price=yax.low+(o5i.b93(y,yax.multiplier));if(yax.semiLog){var logPrice=yax.logLow+(o5i.x93(y,yax.logShadow,yax.height));price=Math.pow(10,logPrice);}
return price;}
;STXChart.prototype.valueFromPixel=function(y,panel,yAxis){if(!panel)panel=this.whichPanel(y);var p=this.priceFromPixel(y,panel,yAxis);return p;}
;STXChart.prototype.valueFromPixelUntransform=function(y,panel,yAxis){if(!panel)panel=this.whichPanel(y);if(!panel){if(o5i.e93(y,o5i.t6s)){panel=this.panels[STX.first(this.panels)];}
else{panel=this.panels[STX.last(this.panels)];}
}
var p=this.priceFromPixel(y,panel,yAxis);if(panel.chart.untransformFunc&&o5i.S93(panel.name,panel.chart.name)){p=panel.chart.untransformFunc(this,panel.chart,p);}
return p;}
;STXChart.prototype.pixelFromPriceTransform=function(price,panel,yAxis){if(panel.chart.transformFunc)price=panel.chart.transformFunc(this,panel.chart,price,yAxis);return this.pixelFromPrice(price,panel,yAxis);}
;STXChart.prototype.pixelFromPrice=function(price,panel,yAxis){if(!panel)panel=this.chart.panel;var yax=yAxis?yAxis:panel.yAxis,y=o5i.F93((yax.high-price),yax.multiplier);if(yax.semiLog){var p=Math.max(price,0),logPrice=o5i.R93(Math.log(p),Math.LN10),height=yax.height;y=o5i.p93(height,height*(logPrice-yax.logLow)/yax.logShadow);}
y+=yax.top;return y;}
;STXChart.prototype.pixelFromValueAdjusted=function(panel,tick,value,yAxis){if(this.layout.adj||!this.charts[panel.name])return this.pixelFromPriceTransform(value,panel,yAxis);var a=Math.round(tick),ratio;if(o5i.z93(a,0)&&o5i.m93(a,panel.chart.dataSet.length)&&(ratio=panel.chart.dataSet[a].ratio)){return this.pixelFromPriceTransform(o5i.X93(value,ratio),panel,yAxis);}
return this.pixelFromPriceTransform(value,panel,yAxis);}
;STXChart.prototype.adjustIfNecessary=function(panel,tick,value){if(this.layout.adj)return value;if(!panel||!this.charts[panel.name])return value;var a=Math.round(tick),ratio;if(o5i.G93(a,0)&&o5i.k93(a,panel.chart.dataSet.length)&&(ratio=panel.chart.dataSet[a].ratio)){return o5i.r93(value,ratio);}
return value;}
;STXChart.prototype.setTransform=function(chart,transformFunction,untransformFunction){chart.transformFunc=transformFunction;chart.untransformFunc=untransformFunction;}
;STXChart.prototype.unsetTransform=function(chart){delete  chart.transformFunc;delete  chart.untransformFunc;for(var i=0;o5i.U93(i,chart.dataSet.length);i++){chart.dataSet[i].transform=null;}
}
;STXChart.prototype.undo=function(){var c0o="wing",K2o="_dr",e8o="_cros",i95="ir",K4o="ross",g2o="undo";if(this.runPrepend(g2o,arguments))return ;if(this.activeDrawing){this.activeDrawing.abort();this.activeDrawing=o5i.d7o;STX.clearCanvas(this.chart.tempCanvas,this);this.draw();STX.swapClassName(this.controls.crossX,(v8o+W7s+K4o+N7o+G8o+i95),C8o);STX.swapClassName(this.controls.crossY,Z0o,(T6o+e8o+H4o+N7o+G8o+G7o+h4o+K2o+G8o+c0o));STXChart.drawingLine=x35;}
this.runAppend(g2o,arguments);}
;STXChart.prototype.undoStamp=function(before,after){var s4o="undoStamp";this.undoStamps.push(before);this.dispatch(s4o,{before:before,after:after}
);}
;STXChart.prototype.undoLast=function(){if(this.activeDrawing){this.undo();}
else{if(this.undoStamps.length){this.drawingObjects=this.undoStamps.pop();this.changeOccurred("vector");this.draw();}
}
}
;STXChart.prototype.addDrawing=function(drawing){var drawings=STX.shallowClone(this.drawingObjects);this.drawingObjects.push(drawing);this.undoStamp(drawings,STX.shallowClone(this.drawingObjects));}
;STXChart.prototype.plotLine=function(x0,x1,y0,y1,color,type,context,confineToPanel,parameters){var P3o="oriz",r2o="non";if(!parameters)parameters={}
;if(o5i.D53(parameters.pattern,(r2o+n3o)))return ;if(o5i.t53(confineToPanel,true))confineToPanel=this.chart.panel;if(o5i.I53(context,null)||typeof (context)=="undefined")context=this.chart.context;if(isNaN(x0)||isNaN(x1)||isNaN(y0)||isNaN(y1)){return ;}
var edgeTop=0,edgeBottom=this.chart.canvasHeight,edgeLeft=0,edgeRight=this.right;if(confineToPanel){edgeBottom=confineToPanel.yAxis.bottom;edgeTop=confineToPanel.yAxis.top;edgeLeft=confineToPanel.left;edgeRight=confineToPanel.right;}
var bigX,bigY,v;if(o5i.b53(type,"ray")){bigX=10000000;if(o5i.x53(x1,x0))bigX=-10000000;v={"x0":x0,"x1":x1,"y0":y0,"y1":y1}
;bigY=STX.yIntersection(v,bigX);x1=bigX;y1=bigY;}
if(o5i.K53(type,"line")||o5i.H53(type,(N7o+P3o+a6o+n6o+z2o+G8o+o5i.p6o))||o5i.a53(type,"vertical")){bigX=10000000;var littleX=-10000000;v={"x0":x0,"x1":x1,"y0":y0,"y1":y1}
;bigY=STX.yIntersection(v,bigX);var littleY=STX.yIntersection(v,littleX);x0=littleX;x1=bigX;y0=littleY;y1=bigY;}
var t0=0.0,t1=1.0,xdelta=o5i.T53(x1,x0),ydelta=o5i.Y53(y1,y0),p,q,r;for(var edge=0;o5i.l53(edge,4);edge++){if(o5i.y53(edge,0)){p=-xdelta;q=-(o5i.w53(edgeLeft,x0));}
if(o5i.o53(edge,1)){p=xdelta;q=(o5i.g53(edgeRight,x0));}
if(o5i.s53(edge,2)){p=-ydelta;q=-(o5i.O53(edgeTop,y0));}
if(o5i.j23(edge,3)){p=ydelta;q=(o5i.W23(edgeBottom,y0));}
r=o5i.q23(q,p);if((y1||o5i.E23(y1,0))&&o5i.L23(p,0)&&o5i.c23(q,0)){return false;}
if(o5i.J23(p,0)){if(o5i.M23(r,t1))return false;else if(o5i.C23(r,t0))t0=r;}
else if(o5i.f23(p,0)){if(o5i.N23(r,t0))return false;else if(o5i.V23(r,t1))t1=r;}
}
var x0clip=x0+o5i.Z23(t0,xdelta),y0clip=y0+o5i.Q23(t0,ydelta),x1clip=x0+o5i.A23(t1,xdelta),y1clip=y0+o5i.P23(t1,ydelta);if(!y1&&o5i.v23(y1,0)&&!y0&&o5i.i43(y0,0)){y0clip=edgeTop;y1clip=edgeBottom;x0clip=v.x0;x1clip=v.x0;if(o5i.u43(v.x0,edgeRight))return false;if(o5i.h43(v.x0,edgeLeft))return false;}
else if(!y1&&o5i.d43(y1,0)){if(o5i.n43(v.y0,v.y1))y1clip=edgeBottom;else y1clip=edgeTop;x0clip=v.x0;x1clip=v.x0;if(o5i.B43(v.x0,edgeRight))return false;if(o5i.e43(v.x0,edgeLeft))return false;}
context.lineWidth=1.1;if(typeof (color)==(a6o+f8o+U6o+r4o+z2o)){context.strokeStyle=color.color;if(color.opacity)context.globalAlpha=color.opacity;else context.globalAlpha=1;context.lineWidth=parseInt(STX.stripPX(color.width));}
else{if(!color||o5i.S43(color,"auto")||STX.isTransparent(color)){context.strokeStyle=this.defaultColor;}
else{context.strokeStyle=color;}
}
if(parameters.opacity)context.globalAlpha=parameters.opacity;if(parameters.lineWidth)context.lineWidth=parameters.lineWidth;if(o5i.F43(type,"zig zag"))context.lineWidth=5;var pattern=null;if(parameters.pattern){pattern=parameters.pattern;if(o5i.R43(pattern,"solid")){pattern=null;}
else if(o5i.p43(pattern,"dotted")){pattern=[context.lineWidth,context.lineWidth];}
else if(o5i.z43(pattern,"dashed")){pattern=[o5i.m43(context.lineWidth,5),o5i.X43(context.lineWidth,5)];}
}
context.stxLine(x0clip,y0clip,x1clip,y1clip,context.strokeStyle,context.globalAlpha,context.lineWidth,pattern);context.globalAlpha=1;context.lineWidth=1;}
;STXChart.prototype.connectTheDots=function(points,color,type,context,confineToPanel,parameters){if(!parameters)parameters={}
;if(o5i.G43(parameters.pattern,"none"))return ;if(o5i.k43(confineToPanel,true))confineToPanel=this.chart.panel;if(o5i.r43(context,null)||typeof (context)=="undefined")context=this.chart.context;if(o5i.U43(points.length,4))return ;var edgeTop=0,edgeBottom=this.chart.canvasHeight,edgeLeft=0,edgeRight=this.chart.width;if(confineToPanel){edgeBottom=confineToPanel.yAxis.bottom;edgeTop=confineToPanel.yAxis.top;}
context.lineWidth=1.1;if(typeof (color)=="object"){context.strokeStyle=color.color;if(color.opacity)context.globalAlpha=color.opacity;else context.globalAlpha=1;context.lineWidth=parseInt(STX.stripPX(color.width));}
else{if(!color||o5i.D63(color,"auto")||STX.isTransparent(color)){context.strokeStyle=this.defaultColor;}
else{context.strokeStyle=color;}
}
if(parameters.opacity)context.globalAlpha=parameters.opacity;if(parameters.lineWidth)context.lineWidth=parameters.lineWidth;var pattern=null;if(parameters.pattern){pattern=parameters.pattern;if(o5i.t63(pattern,(H4o+a6o+y4o+o5i.U8o))){pattern=null;}
else if(o5i.I63(pattern,"dotted")){pattern=[context.lineWidth,context.lineWidth];}
else if(o5i.b63(pattern,"dashed")){pattern=[o5i.x63(context.lineWidth,5),o5i.K63(context.lineWidth,5)];}
}
context.beginPath();for(var i=0;o5i.H63(i,points.length-2);i+=2){var x0=points[i],y0=points[i+1],x1=points[i+2],y1=points[i+3];if(isNaN(x0)||isNaN(x1)||isNaN(y0)||isNaN(y1))return ;var t0=0.0,t1=1.0,xdelta=o5i.a63(x1,x0),ydelta=o5i.T63(y1,y0),p,q,r;for(var edge=0;o5i.Y63(edge,4);edge++){if(o5i.l63(edge,0)){p=-xdelta;q=-(o5i.y63(edgeLeft,x0));}
if(o5i.w63(edge,1)){p=xdelta;q=(o5i.o63(edgeRight,x0));}
if(o5i.g63(edge,2)){p=-ydelta;q=-(o5i.s63(edgeTop,y0));}
if(o5i.O63(edge,3)){p=ydelta;q=(o5i.j73(edgeBottom,y0));}
r=o5i.W73(q,p);if((y1||o5i.q73(y1,0))&&o5i.E73(p,0)&&o5i.L73(q,0)){return false;}
if(o5i.c73(p,0)){if(o5i.J73(r,t1))return false;else if(o5i.M73(r,t0))t0=r;}
else if(o5i.C73(p,0)){if(o5i.f73(r,t0))return false;else if(o5i.N73(r,t1))t1=r;}
}
var x0clip=x0+o5i.V73(t0,xdelta),y0clip=y0+o5i.Z73(t0,ydelta),x1clip=x0+o5i.Q73(t1,xdelta),y1clip=y0+o5i.A73(t1,ydelta);try{if(pattern){context.dashedLineTo(x0clip,y0clip,x1clip,y1clip,pattern);}
else{context.moveTo(x0clip,y0clip);context.lineTo(x1clip,y1clip);}
}
catch(e){}
}
context.stroke();context.closePath();context.globalAlpha=1;context.lineWidth=1;}
;STXChart.prototype.plotSpline=function(points,tension,color,type,context,confineToPanel,parameters){var X4s="das",d5o="fi";if(!parameters)parameters={}
;if(o5i.P73(parameters.pattern,"none"))return ;if(o5i.v73(confineToPanel,true))confineToPanel=this.chart.panel;if(o5i.i13(context,null)||typeof (context)==(o5i.m2o+n6o+o5i.U8o+n3o+d5o+n6o+w9o))context=this.chart.context;context.save();context.lineWidth=1.1;if(typeof (color)=="object"){context.strokeStyle=color.color;if(color.opacity)context.globalAlpha=color.opacity;else context.globalAlpha=1;context.lineWidth=parseInt(STX.stripPX(color.width));}
else{if(!color||o5i.u13(color,"auto")||STX.isTransparent(color)){context.strokeStyle=this.defaultColor;}
else{context.strokeStyle=color;}
}
if(parameters.opacity)context.globalAlpha=parameters.opacity;if(parameters.lineWidth)context.lineWidth=parameters.lineWidth;var pattern=null;if(parameters.pattern){pattern=parameters.pattern;if(o5i.h13(pattern,"solid")){pattern=null;}
else if(o5i.d13(pattern,"dotted")){pattern=[context.lineWidth,context.lineWidth];}
else if(o5i.n13(pattern,(X4s+N7o+n3o+o5i.U8o))){pattern=[o5i.B13(context.lineWidth,5),o5i.e13(context.lineWidth,5)];}
}
if(pattern&&context.setLineDash){context.setLineDash(pattern);context.lineDashOffset=0;}
plotSpline(points,tension,context);context.restore();}
;STXChart.prototype.drawingClick=function(panel,x,y){var R6o="ng",C95="r_d",X9o="cros";if(!this.activeDrawing){if(!panel)return ;var Factory=STXChart.drawingTools[this.currentVectorParameters.vectorType];if(!Factory){if(STX.Drawing[this.currentVectorParameters.vectorType]){Factory=STX.Drawing[this.currentVectorParameters.vectorType];STXChart.registerDrawingTool(this.currentVectorParameters.vectorType,Factory);}
}
if(Factory){this.activeDrawing=new Factory();this.activeDrawing.construct(this,panel);if(!this.charts[panel.name]){if(this.activeDrawing.chartsOnly){this.activeDrawing=o5i.d7o;return ;}
}
}
}
if(this.activeDrawing){if(this.userPointerDown&&!this.activeDrawing.dragToDraw){if(!STXChart.drawingLine)this.activeDrawing=o5i.d7o;return ;}
var tick=this.tickFromPixel(x,panel.chart),dpanel=this.panels[this.activeDrawing.panelName],value=this.adjustIfNecessary(dpanel,tick,this.valueFromPixelUntransform(y,dpanel));if(this.preferences.magnet&&this.magnetizedPrice){value=this.adjustIfNecessary(dpanel,tick,this.magnetizedPrice);}
if(this.activeDrawing.click(this.chart.tempCanvas.context,tick,value)){if(this.activeDrawing){STXChart.drawingLine=x35;STX.clearCanvas(this.chart.tempCanvas,this);this.addDrawing(this.activeDrawing);this.activeDrawing=o5i.d7o;this.adjustDrawings();this.draw();this.changeOccurred(z1s);STX.swapClassName(this.controls.crossX,Z0o,C8o);STX.swapClassName(this.controls.crossY,Z0o,C8o);}
}
else{this.changeOccurred(c8o);STXChart.drawingLine=L7o;STX.swapClassName(this.controls.crossX,C8o,Z0o);STX.swapClassName(this.controls.crossY,(H4o+z2o+Z95+I9o+X9o+H4o+N7o+G8o+G7o+C95+h4o+G8o+j55+G7o+R6o),Z0o);}
return L7o;}
return x35;}
;STXChart.prototype.whichPanel=function(y){for(var p in this.panels){var panel=this.panels[p];if(panel.hidden)continue;if(o5i.S13(y,panel.top)&&o5i.F13(y,panel.bottom))return panel;}
return o5i.d7o;}
;STXChart.prototype.mouseup=function(e){if(this.runPrepend(v85,arguments))return ;this.swipe.end=L7o;if(this.repositioningDrawing){if(!this.currentVectorParameters.vectorType||(o5i.R13(Date.now()-this.mouseTimer,u55))){this.changeOccurred(z1s);STX.clearCanvas(this.chart.tempCanvas,this);this.repositioningDrawing=o5i.d7o;this.adjustDrawings();this.draw();return ;}
else{this.repositioningDrawing=x35;}
}
if(this.repositioningBaseline){this.repositioningBaseline=o5i.d7o;this.chart.panel.yAxis.scroll=o5i.p13(this.pixelFromPriceTransform(this.chart.baseline.userLevel,this.chart.panel),(this.chart.panel.yAxis.top+this.chart.panel.yAxis.bottom)/o5i.U4s);this.draw();return ;}
var wasMouseDown=this.userPointerDown;this.userPointerDown=x35;if(!this.displayInitialized)return ;this.grabbingScreen=x35;if(o5i.z13(this.openDialog,C2o)){if(STXChart.insideChart)STX.unappendClassName(this.container,k3o);return ;}
if(this.grabOverrideClick){this.swipeRelease();STX.unappendClassName(this.container,k3o);this.grabOverrideClick=x35;return ;}
if(STXChart.insideChart)STX.unappendClassName(this.container,k3o);if(STXChart.resizingPanel){this.releaseHandle({}
);return ;}
if(!e)e=event;if((e.which&&o5i.m13(e.which,o5i.U4s))||(e.button&&o5i.X13(e.button,o5i.U4s))){if(this.anyHighlighted){this.rightClickHighlighted();if(e.preventDefault&&this.captureTouchEvents)e.preventDefault();e.stopPropagation();return x35;}
else{return L7o;}
}
if(o5i.G13(e.clientX,this.left)||o5i.k13(e.clientX,this.right))return ;if(o5i.r13(e.clientY,this.top)||o5i.U13(e.clientY,this.bottom))return ;var cy=this.backOutY(e.clientY),cx=this.backOutX(e.clientX);if(wasMouseDown){this.drawingClick(this.currentPanel,cx,cy);}
if(!this.activeDrawing){this.dispatch(f7s,{stx:this,panel:this.currentPanel,x:cx,y:cy}
);}
this.runAppend(v85,arguments);}
;STXChart.prototype.grabbingHand=function(){if(!this.allowScroll)return ;if(!this.grabbingScreen)return ;if(STX.touchDevice)return ;STX.appendClassName(this.container,k3o);}
;STXChart.prototype.mousedown=function(e){var J8o="ous";if(this.runPrepend("mousedown",arguments))return ;this.grabOverrideClick=false;if(o5i.D0W(this.openDialog,""))return ;if(!this.displayInitialized)return ;if(!this.displayCrosshairs)return ;if(!STXChart.insideChart)return ;if(this.manageTouchAndMouse&&e&&e.preventDefault&&this.captureTouchEvents)e.preventDefault();this.mouseTimer=Date.now();this.userPointerDown=true;if(!e)e=event;if((e.which&&o5i.t0W(e.which,2))||(e.button&&o5i.I0W(e.button,2))){return ;}
var chart=this.currentPanel.chart;if(o5i.b0W(e.clientX,this.left)&&o5i.x0W(e.clientX,this.right)&&o5i.K0W(e.clientY,this.top)&&o5i.H0W(e.clientY,this.bottom)){if(this.repositioningDrawing)return ;for(var i=0;o5i.a0W(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];if(drawing.highlighted){if(this.ctrl){var Factory=STXChart.drawingTools[drawing.name],clonedDrawing=new Factory();clonedDrawing.reconstruct(this,drawing.serialize());this.drawingObjects.push(clonedDrawing);this.repositioningDrawing=clonedDrawing;clonedDrawing.repositioner=drawing.repositioner;return ;}
this.repositioningDrawing=drawing;return ;}
}
if((o5i.T0W(this.layout.chartType,"baseline_delta")||o5i.Y0W(this.layout.chartType,"baseline_delta_mountain"))&&o5i.l0W(chart.baseline.userLevel,false)){var y0=this.valueFromPixelUntransform(o5i.y0W(this.cy,5),this.currentPanel),y1=this.valueFromPixelUntransform(this.cy+5,this.currentPanel),x0=o5i.w0W(this.chart.right,parseInt(getComputedStyle(this.controls.baselineHandle).width,10));if(o5i.o0W(chart.baseline.actualLevel,y0)&&o5i.g0W(chart.baseline.actualLevel,y1)&&o5i.s0W(this.cx,x0)){this.repositioningBaseline={lastDraw:Date.now()}
;return ;}
}
this.drawingClick(this.currentPanel,this.cx,this.cy);if(this.activeDrawing&&this.activeDrawing.dragToDraw)return ;}
this.grabbingScreen=true;this.yToleranceBroken=false;if(!e)e=event;this.grabStartX=e.clientX;this.grabStartY=e.clientY;this.grabStartScrollX=chart.scroll;this.grabStartScrollY=chart.panel.yAxis.scroll;this.grabStartCandleWidth=this.layout.candleWidth;this.grabStartZoom=this.whichYAxis(this.currentPanel).zoom;setTimeout((function(self){return function(){self.grabbingHand();}
;}
)(this),100);this.swipeStart(chart);this.runAppend((X6o+J8o+e3o),arguments);}
;STXChart.prototype.changeVectorType=function(value){this.currentVectorParameters.vectorType=value;if(STXChart.drawingLine)this.undo();this.setCrosshairColors();if(STXChart.insideChart)this.doDisplayCrosshairs();}
;STXChart.prototype.rightClickOverlay=function(name){var k2o="rightClickOverlay";if(this.runPrepend(k2o,arguments))return ;var sd=this.overlays[name];if(sd.editFunction){sd.editFunction();}
else{this.removeOverlay(name);}
this.runAppend(k2o,arguments);}
;STXChart.prototype.removeOverlay=function(name){var m5o="removeOverlay";if(this.runPrepend(m5o,arguments))return ;var mySD;for(var o in this.overlays){var sd=this.overlays[o];if(sd.inputs.Field&&sd.inputs.Field.indexOf(name)!=-o5i.D6s){this.removeOverlay(sd.name);}
else if(o5i.O0W(sd.name,name)){mySD=sd;}
}
var study=this.layout.studies[name];STX.deleteRHS(STX.Studies.studyPanelMap,study);if(mySD)this.cleanupRemovedStudy(mySD);delete  this.overlays[name];this.displaySticky();this.createDataSet();this.changeOccurred(N6s);this.runAppend(m5o,arguments);}
;STXChart.prototype.addSeries=function(field,parameters,cb){var z4o="addSer",S7o="nt",q8o="mo",r7o="rie",g4o="dSe",b9o="ad";if(this.runPrepend((b9o+g4o+r7o+H4o),arguments))return ;if(!parameters)parameters={}
;if(!parameters.chartName)parameters.chartName=this.chart.name;var obj={parameters:STX.clone(parameters),yValueCache:[],display:field}
;if(o5i.j8W("display",obj.parameters))obj.display=obj.parameters.display;if(obj.parameters.isComparison)obj.parameters.shareYAxis=true;if(!obj.parameters.chartType&&obj.parameters.color)obj.parameters.chartType="line";if(obj.parameters.chartType&&o5i.W8W(obj.parameters.chartType,(q8o+o5i.m2o+S7o+G8o+t55)))obj.parameters.chartType="line";if(!obj.parameters.panel)obj.parameters.panel=this.chart.panel.name;var chart=this.charts[parameters.chartName],self=this;function addSeriesData(stx){var t95="fine",mIterator=0,cIterator=0,c,m;while(parameters.data&&o5i.q8W(mIterator,stx.masterData.length)&&o5i.E8W(cIterator,parameters.data.length)){c=parameters.data[cIterator];m=stx.masterData[mIterator];if(!c.DT||typeof c.DT=="undefined")c.DT=STX.strToDateTime(c.Date);if(o5i.L8W(c.DT.getTime(),m.DT.getTime())){if(typeof c.Value!="undefined"){m[field]=c.Value;}
else if(stx.layout.adj&&typeof c.Adj_Close!="undefined"){m[field]=c.Adj_Close;}
else{m[field]=c.Close;}
cIterator++;mIterator++;continue;}
if(o5i.c8W(c.DT,m.DT)){if(parameters.forceData){stx.masterData.splice(mIterator,0,{DT:c.DT}
);continue;}
cIterator++;}
else mIterator++;}
if(parameters.forceData&&o5i.J8W(mIterator,stx.masterData.length)){while(parameters.data&&o5i.M8W(cIterator,parameters.data.length)){var c=parameters.data[cIterator];if(!c.DT||typeof c.DT=="undefined")c.DT=STX.strToDateTime(c.Date);m={DT:c.DT}
;if(typeof c.Value!=(o5i.m2o+C35+n3o+t95+o5i.U8o)){m[field]=c.Value;}
else if(stx.layout.adj&&typeof c.Adj_Close!="undefined"){m[field]=c.Adj_Close;}
else{m[field]=c.Close;}
stx.masterData.push(m);cIterator++;}
}
}
function setUpRenderer(stx,obj){if(obj.parameters.color){var r=stx.getSeriesRenderer("_generic_series");if(!r){r=stx.setSeriesRenderer(new STX.Renderer.Lines({params:{panel:obj.parameters.panel,type:"legacy",name:"_generic_series",overChart:true}
,}
));}
r.attachSeries(field,obj.parameters).ready();}
}
if(chart){chart.series[field]=obj;}
if(parameters.isComparison){self.setComparison(true,chart);}
var doneInCallback=false;if(parameters.data){if(parameters.data.useDefaultQuoteFeed){var driver=this.quoteDriver,fetchParams=driver.makeParams(field,parameters.symbolObject,this.chart);fetchParams.startDate=this.chart.masterData[0].DT;fetchParams.endDate=this.chart.masterData[o5i.C8W(this.chart.masterData.length,1)].DT;if(parameters.symbolObject)fetchParams.symbolObject=parameters.symbolObject;doneInCallback=true;function handleResponse(dataCallback){if(!dataCallback.error){parameters.data=dataCallback.quotes;addSeriesData(self);setUpRenderer(self,obj);}
if(cb)cb(dataCallback.error,obj);self.runAppend("addSeries",arguments);}
;if(fetchParams.stx.isEquationChart(fetchParams.symbol)){STX.fetchEquationChart(fetchParams,handleResponse);}
else{driver.quoteFeed.fetch(fetchParams,handleResponse);}
}
else if(this.masterData){addSeriesData(this);}
}
else{obj.addSeriesData=addSeriesData;}
if(!doneInCallback){setUpRenderer(self,obj);if(cb)cb(null,obj);this.runAppend((z4o+G7o+n3o+H4o),arguments);}
return obj;}
;STXChart.prototype.isEquationChart=function(symbol){var V05=((119.0E1,0x21E)<=(5.07E2,7.7E1)?(25.,"n"):128.5E1>(0x1E3,0xA2)?(72.,"="):(1.304E3,9.82E2));if(!this.allowEquations||!STX.computeEquationChart)return x35;if(symbol&&o5i.f8W(symbol[o5i.t6s],V05))return L7o;return x35;}
;STXChart.prototype.deleteSeries=function(field,chart){var z8o="deleteSeries";if(this.runPrepend(z8o,arguments))return ;if(!chart)chart=this.chart;delete  chart.series[field];if(this.quoteDriver)this.quoteDriver.updateSubscriptions();this.runAppend(z8o,arguments);}
;STXChart.prototype.removeSeries=function(field,chart){if(this.runPrepend("removeSeries",arguments))return ;if(!chart)chart=this.chart;for(var r in chart.seriesRenderers){var renderer=chart.seriesRenderers[r];for(var sp=o5i.N8W(renderer.seriesParams.length,1);o5i.V8W(sp,0);sp--){var series=renderer.seriesParams[sp];if(!series.permanent&&o5i.Z8W(series.field,field)){renderer.removeSeries(field);}
}
}
this.deleteSeries(field,chart);var comparing=false;for(var s in chart.series){if(chart.series[s].parameters.isComparison)comparing=true;}
if(!comparing)this.setComparison(false,chart);this.createDataSet();this.draw();this.runAppend("removeSeries",arguments);}
;STXChart.prototype.rendererAction=function(chart,phase){var S4o="rendererAction";if(this.runPrepend(S4o,arguments))return ;for(var id in chart.seriesRenderers){var renderer=chart.seriesRenderers[id];if(renderer.params.overChart&&o5i.Q8W(phase,l0o))continue;if(!renderer.params.overChart&&o5i.A8W(phase,C4s))continue;if(!this.panels[renderer.params.panel])continue;if(o5i.P8W(this.panels[renderer.params.panel].chart,chart))continue;if(o5i.v8W(phase,x0o)){renderer.performCalculations();}
else{renderer.draw();if(renderer.cb)renderer.cb(renderer.colors);}
}
this.runAppend(S4o,arguments);}
;STXChart.prototype.drawSeries=function(chart,seriesArray,yAxis){var q4o="oke";if(this.runPrepend("drawSeries",arguments))return ;var quotes=chart.dataSegment,legendColorMap={}
,series=null;if(!seriesArray)seriesArray=chart.series;for(var field in seriesArray){series=seriesArray[field];var parameters=series.parameters;if(!parameters.chartType)continue;var panel=chart.panel;if(parameters.panel)panel=this.panels[parameters.panel];if(!panel)continue;var yax=yAxis?yAxis:panel.yAxis,minMax=[parameters.minimum,parameters.maximum];if((!parameters.minimum&&o5i.i3W(parameters.minimum,0))||(!parameters.maximum&&o5i.u3W(parameters.maximum,0))){var minMaxCalc=STX.minMax(quotes,field);if(!parameters.minimum&&o5i.h3W(parameters.minimum,0))minMax[0]=minMaxCalc[0];if(!parameters.maximum&&o5i.d3W(parameters.maximum,0))minMax[1]=minMaxCalc[1];}
var min=minMax[0],top=yax.top,bottom=yax.bottom,height=o5i.n3W(bottom,top),t=parameters.marginTop,b=parameters.marginBottom;if(t)top=o5i.B3W(t,1)?(top+t):(top+(o5i.e3W(height,t)));if(b)bottom=o5i.S3W(b,1)?(o5i.F3W(bottom,b)):(o5i.R3W(bottom,(height*b)));var multiplier=o5i.p3W((bottom-top),(minMax[1]-min)),started=false,lastPoint=null,val=null,x=null,y=null,px=null,py=null,cw=this.layout.candleWidth,context=this.chart.context,isStep=(o5i.z3W(parameters.type,"step")||o5i.m3W(parameters.subtype,"step")),color=parameters.color;if(!color)color=this.defaultColor;var width=parameters.width;if(!width||isNaN(width)||o5i.X3W(width,1))width=1;if(series.highlight||series.parameters.highlight)width*=2;this.startClip(panel.name);seriesPlotter=new STX.Plotter();seriesPlotter.newSeries((o5i.p6o+t55+n3o),"stroke",color,1,width);if(parameters.gaps&&parameters.gaps.color)seriesPlotter.newSeries("gap",(v8o+h4o+q4o),parameters.gaps.color,1,width);else seriesPlotter.newSeries((o5i.x1o+l6s),"stroke",color,1,width);series.yValueCache=new Array(quotes.length);var yValueCache=series.yValueCache,lastQuote=null,gap=null,points=[],doTransform=series.parameters.shareYAxis&&!yAxis,shareYAxis=series.parameters.shareYAxis||yAxis,xbase=o5i.G3W(panel.left,(isStep?1:0.5)*cw,this.micropixels,1),x0=xbase;for(var i=0;o5i.s3W(i,quotes.length);i++){xbase+=o5i.O3W(cw,2);if(isStep)xbase+=o5i.j9W(cw,2);cw=this.layout.candleWidth;if(!isStep)xbase+=o5i.W9W(cw,2);if(o5i.q9W(x,null)&&o5i.E9W(y,null)){if(!gap||parameters.gaps)points.push([x,y]);}
var quote=quotes[i];if(!quote)continue;if(quote.candleWidth){if(!isStep)xbase+=o5i.L9W((quote.candleWidth-cw),2);cw=quote.candleWidth;}
if(quote.transform&&doTransform)quote=quote.transform;val=quote[field];if(!val&&o5i.c9W(val,0)){if(isStep||parameters.gaps){yValueCache[i]=y;}
if(o5i.J9W(gap,false)){if(isStep){x+=cw;seriesPlotter.lineTo("line",x,y);}
seriesPlotter.moveTo("gap",x,y);}
gap=true;if(x&&!parameters.gaps)points.push([x,bottom]);continue;}
if(!isStep&&lastPoint&&o5i.M9W(lastPoint,i-1)){px=x;py=y;}
else{px=null;}
x=xbase;if(o5i.C9W(x,panel.right))lastQuote=quote;if(this.extendLastTick&&o5i.f9W(i,quotes.length-1))x+=o5i.N9W(cw,2);if(isStep&&started){if(gap&&parameters.gaps&&parameters.gaps.pattern){seriesPlotter.dashedLineTo("gap",x,y,parameters.gaps.pattern);}
else if(gap&&!parameters.gaps){points.push([x,bottom]);seriesPlotter.moveTo("gap",x,y);}
else if(!gap&&parameters.pattern){seriesPlotter.dashedLineTo("line",x,y,parameters.pattern);}
else{seriesPlotter.lineTo((gap?"gap":"line"),x,y);}
points.push([x,y]);}
if(shareYAxis){y=this.pixelFromPrice(val,panel,yax);}
else{y=o5i.V9W(bottom,((val-min)*multiplier));}
if(o5i.Z9W(px,null)){var vector={x0:px,x1:x,y0:py,y1:y}
;for(;o5i.Q9W(lastPoint,i);lastPoint++){var xInt=panel.left+Math.floor(xbase+o5i.A9W(((lastPoint-i)+0.5),cw))+this.micropixels-1,yInt=STX.yIntersection(vector,xInt);yValueCache[lastPoint]=yInt;}
}
yValueCache[i]=y;if(i&&points.length&&started&&!yValueCache[o5i.P9W(i,1)]&&o5i.v9W(yValueCache[i-1],0)){for(var bf=o5i.i5W(i,1);o5i.u5W(bf,0);bf--){if(yValueCache[bf])break;yValueCache[bf]=points[o5i.h5W(points.length,1)][1];}
}
if(!started){started=true;var leftTick=o5i.d5W(chart.dataSet.length,chart.scroll);if(o5i.n5W(leftTick,0)){seriesPlotter.moveTo((gap?"gap":"line"),x,y);}
else{var baseline=chart.dataSet[leftTick];if(baseline.transform&&doTransform)baseline=baseline.transform;var y0=baseline[field];if(shareYAxis){y0=this.pixelFromPrice(y0,panel,yax);}
else{y0=o5i.B5W(bottom,((y0-min)*multiplier));}
y0=Math.min(Math.max(y0,top),bottom);if(isNaN(y0)){seriesPlotter.moveTo((gap?"gap":(y4o+I35)),x,y);}
else{seriesPlotter.moveTo((gap?"gap":"line"),x0,y0);if(isStep){if(gap){if(parameters.gaps)seriesPlotter.lineTo("gap",x,y0);else seriesPlotter.moveTo("gap",x,y0);}
else seriesPlotter.lineTo("line",x,y0);}
if(!gap||parameters.gaps){if(isStep)points.unshift([x,y0]);points.unshift([x0,y0]);}
if(gap&&parameters.gaps&&parameters.gaps.pattern){seriesPlotter.dashedLineTo("gap",x,y,parameters.gaps.pattern);}
else if(gap&&!parameters.gaps){points.unshift([x,bottom]);points.unshift([x0,bottom]);seriesPlotter.moveTo("gap",x,y);}
else if(!gap&&parameters.pattern){seriesPlotter.dashedLineTo("line",x,y,parameters.pattern);}
else{seriesPlotter.lineTo((gap?"gap":"line"),x,y);}
}
}
}
else{if(gap&&parameters.gaps&&parameters.gaps.pattern){seriesPlotter.dashedLineTo("gap",x,y,parameters.gaps.pattern);}
else if(gap&&!parameters.gaps){points.push([x,bottom]);seriesPlotter.moveTo("gap",x,y);}
else if(!gap&&parameters.pattern){seriesPlotter.dashedLineTo("line",x,y,parameters.pattern);if(isStep&&o5i.e5W(i,quotes.length-1))seriesPlotter.dashedLineTo("line",x+cw,y,parameters.pattern);}
else{seriesPlotter.lineTo((gap?"gap":"line"),x,y);if(isStep&&o5i.S5W(i,quotes.length-1)&&!gap)seriesPlotter.lineTo((o5i.p6o+F1s),x+cw,y);}
}
lastPoint=i;if(gap)seriesPlotter.moveTo("line",x,y);gap=false;}
if(gap){x=panel.left+Math.floor(xbase+cw+this.micropixels)-1;if(this.extendLastTick)x+=o5i.F5W(cw,2);if(parameters.gaps&&parameters.gaps.pattern){if(started){seriesPlotter.dashedLineTo("gap",x,y,parameters.gaps.pattern);}
}
else if(parameters.gaps){seriesPlotter.lineTo("gap",x,y);}
}
if(o5i.R5W(series.parameters.chartType,"mountain")&&points.length){points.push([x,(gap&&!parameters.gaps)?bottom:y]);if(!parameters.fillStyle){parameters.fillStyle=color;if(!parameters.fillOpacity)parameters.fillOpacity=0.3;}
seriesPlotter.newSeries("mountain","fill",parameters.fillStyle,parameters.fillOpacity);for(var pt=0;o5i.p5W(pt,points.length);pt++){seriesPlotter[pt?"lineTo":"moveTo"]("mountain",points[pt][0],Math.min(bottom,points[pt][1]));}
seriesPlotter.lineTo("mountain",x,bottom);seriesPlotter.lineTo("mountain",points[0][0],bottom);seriesPlotter.draw(context,"mountain");}
seriesPlotter.draw(context,"gap");seriesPlotter.draw(context,"line");this.endClip();if(shareYAxis&&lastQuote){if(yax.priceFormatter){txt=yax.priceFormatter(this,panel,lastQuote[field],yax);}
else{txt=this.formatYAxisPrice(lastQuote[field],panel,null,yax);}
this.yAxisLabels.push({src:"series","args":[panel,txt,this.pixelFromPrice(lastQuote[field],panel,yax),color,null,null,yax]}
);}
var display=series.parameters.display;if(!display)display=series.display;legendColorMap[field]={color:color,display:display}
;}
if(chart.legend&&series&&series.useChartLegend){if(chart.legendRenderer)chart.legendRenderer(this,{"chart":chart,"legendColorMap":legendColorMap,"coordinates":{x:chart.legend.x,y:chart.legend.y+chart.panel.yAxis.top}
}
);}
this.runAppend("drawSeries",arguments);}
;STXChart.prototype.isDailyInterval=function(interval){if(o5i.z5W(interval,G1s))return L7o;if(o5i.m5W(interval,P9o))return L7o;if(o5i.X5W(interval,R6s))return L7o;return x35;}
;STXChart.prototype.setPeriodicityV2=function(period,interval,timeUnit,cb){var w35="ver",a05="eDri",i9o="ac",g8o="Ca",E3o="ata",t9o="eith",y1s="au",t35="hange",N8o="ot";if(this.runPrepend("setPeriodicityV2",arguments))return ;if(typeof timeUnit==="function"){cb=timeUnit;timeUnit=null;}
var switchInterval=false;if(!interval)return ;if(!period)return ;delete  this.layout.setSpan;if(o5i.G5W(interval,"year")){interval="month";if(!period)period=1;period=o5i.k5W(period,12);}
var isDaily=this.isDailyInterval(interval),wasDaily=this.isDailyInterval(this.layout.interval);if(isDaily)timeUnit=null;else if(o5i.r5W(interval,"tick"))timeUnit=null;else if(!timeUnit)timeUnit="minute";var getDifferentData=false;if(this.chart.symbol){if(o5i.U5W(isDaily,wasDaily)||this.dontRoll)getDifferentData=true;if(!wasDaily){if(o5i.D2W(this.layout.interval,interval))getDifferentData=true;}
if(o5i.t2W(timeUnit,this.layout.timeUnit))getDifferentData=true;}
this.layout.periodicity=period;this.layout.interval=interval;this.layout.timeUnit=timeUnit;if(getDifferentData){this.changeOccurred("layout");if(this.quoteDriver){for(var c in this.charts){if(this.charts[c].symbol){if(this.displayInitialized)this.quoteDriver.newChart({symbol:this.charts[c].symbol,symbolObject:this.charts[c].symbolObject,chart:this.charts[c]}
,cb);else this.newChart(this.charts[c].symbol,null,this.charts[c],cb);}
}
return ;}
else if(this.dataCallback){this.dataCallback();if(cb)cb(null);return ;}
else{console.log((L3o+G8o+n6o+n6o+N8o+F3o+L3o+t35+F3o+o5i.N4o+n3o+h4o+G7o+a6o+o5i.U8o+G7o+L3o+J35+e95+F3o+f8o+n3o+L3o+y1s+C7s+F3o+n6o+t9o+a3o+F3o+o5i.U8o+E3o+g8o+o5i.p6o+o5i.p6o+f8o+i9o+b7o+F3o+a6o+h4o+F3o+o5i.P4o+o5i.m2o+N8o+a05+w35+F3o+G8o+h4o+n3o+F3o+H4o+n3o+z2o));return ;}
}
var chartName,chart;for(chartName in this.charts){chart=this.charts[chartName];var dt,pos=Math.round(o5i.I2W(chart.maxTicks,2));this.setCandleWidth(this.layout.candleWidth,chart);var centerMe=true,rightAligned=false;if(o5i.b2W(chart.scroll,chart.maxTicks))centerMe=false;else if(chart.dataSegment&&!chart.dataSegment[pos]){centerMe=false;rightAligned=o5i.x2W(chart.scroll,chart.dataSet.length);}
if(centerMe&&chart.dataSegment&&o5i.K2W(chart.dataSegment.length,0)){if(o5i.H2W(chart.maxTicks,((Math.round((this.chart.width/this.layout.candleWidth)-0.499)-1)/2))){pos=o5i.a2W(chart.dataSegment.length,1);}
if(o5i.T2W(pos,chart.dataSegment.length)){dt=chart.dataSegment[o5i.Y2W(chart.dataSegment.length,1)].DT;pos=o5i.l2W(chart.dataSegment.length,1);}
else{dt=chart.dataSegment[pos].DT;}
}
this.createDataSet();if(centerMe){if(chart.dataSegment&&o5i.y2W(chart.dataSegment.length,0)){for(var i=o5i.w2W(chart.dataSet.length,1);o5i.o2W(i,0);i--){var nd=chart.dataSet[i].DT;if(o5i.g2W(nd.getTime(),dt.getTime())){chart.scroll=(o5i.s2W(chart.dataSet.length,i))+pos;break;}
}
}
}
else if(!rightAligned){var wsInTicks=Math.round(o5i.O2W(this.preferences.whitespace,this.layout.candleWidth));chart.scroll=o5i.j4W(chart.maxTicks,wsInTicks);}
else{chart.scroll=chart.dataSet.length+rightAligned;}
}
if(this.displayInitialized)this.draw();this.changeOccurred("layout");if(this.quoteDriver){for(chartName in this.charts){chart=this.charts[chartName];if(chart.symbol&&chart.moreAvailable){this.quoteDriver.checkLoadMore(chart);}
}
}
if(cb)cb(null);this.runAppend("setPeriodicityV2",arguments);}
;STXChart.prototype.drawVectors=function(){if(this.vectorsShowing)return ;if(this.runPrepend("drawVectors",arguments))return ;this.vectorsShowing=true;if(!this.chart.hideDrawings){var tmpPanels={}
,panelName,i;for(i=0;o5i.W4W(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];panelName=drawing.panelName;if(!this.panels[drawing.panelName])continue;if(!tmpPanels[panelName]){tmpPanels[panelName]=[];}
tmpPanels[panelName].push(drawing);}
for(panelName in tmpPanels){this.startClip(panelName);var arr=tmpPanels[panelName];for(i=0;o5i.q4W(i,arr.length);i++){arr[i].render(this.chart.context);}
this.endClip();}
}
this.runAppend("drawVectors",arguments);}
;STXChart.prototype.consolidatedQuote=function(quotes,position,periodicity,interval,timeUnit,dontRoll,alignToHour){if(o5i.E4W(position,0))return null;var arguments$=[quotes,position,periodicity,interval,dontRoll,alignToHour];if(this.runPrepend("consolidatedQuote",arguments$))return null;if(!dontRoll&&this.dontRoll)dontRoll=true;var quote=quotes[position];function consolidate(self,p){var ratio=1;if(self.layout.adj&&quotes[p].Adj_Close){ratio=o5i.L4W(quotes[p].Adj_Close,quotes[p].Close);}
if(o5i.c4W("High",quotes[p]))if(o5i.J4W(quotes[p].High*ratio,quote.High))quote.High=o5i.M4W(quotes[p].High,ratio);if(o5i.C4W("Low",quotes[p]))if(o5i.f4W(quotes[p].Low*ratio,quote.Low))quote.Low=o5i.N4W(quotes[p].Low,ratio);quote.Volume+=quotes[p].Volume;if(o5i.V4W("Close",quotes[p])&&o5i.Z4W(quotes[p].Close,null))quote.Close=o5i.Q4W(quotes[p].Close,ratio);quote.ratio=ratio;for(var element in quotes[p]){if(!quote[element]){quote[element]=quotes[p][element];}
}
}
function newInterval(p,interval){var d1=quotes[o5i.A4W(p,1)].DT,d2=quotes[p].DT;if(o5i.P4W(interval,"week")){if(o5i.v4W(d2.getDay(),d1.getDay()))return true;}
else if(o5i.i6W(interval,"month")){if(o5i.u6W(d2.getMonth(),d1.getMonth()))return true;}
else{if(o5i.h6W(d2.getDay(),d1.getDay()))return true;}
return false;}
function newIntradayInterval(position,p,periodicity,interval,timeUnit){var nextBar=o5i.d6W(interval,periodicity),d1=new Date(quotes[position].DT);if(o5i.n6W(timeUnit,"millisecond"))d1.setMilliseconds(d1.getMilliseconds()+nextBar);else if(o5i.B6W(timeUnit,"second"))d1.setSeconds(d1.getSeconds()+nextBar);else d1.setMinutes(d1.getMinutes()+nextBar);var d2=quotes[p].DT;if(alignToHour){if(o5i.e6W(quotes[position].DT.getMinutes(),nextBar)){if(o5i.S6W(d2.getMinutes()%nextBar,0)){return true;}
}
}
if(o5i.F6W(d2.getTime(),d1.getTime()))return true;return false;}
var p=position,i;if((o5i.R6W(interval,"week")||o5i.p6W(interval,"month"))&&!dontRoll){for(i=1;o5i.z6W(i,periodicity);i++){while(o5i.m6W(p+1,quotes.length)&&!newInterval(p+1,interval)){p++;consolidate(this,p);}
if(o5i.X6W(i,periodicity)){p++;if(o5i.G6W(p,quotes.length))consolidate(this,p);}
}
}
else if(!this.isDailyInterval(interval)&&o5i.k6W(interval,"tick")&&o5i.r6W(periodicity,1)){for(i=1;o5i.U6W(i,periodicity);i++){p=position+i;if(o5i.D7W(p,quotes.length)&&newIntradayInterval(position,p,periodicity,interval,timeUnit)){p--;break;}
if(o5i.t7W(p,0)&&o5i.I7W(p,quotes.length)){consolidate(this,p);}
}
}
else{for(i=1;o5i.b7W(i,periodicity);i++){p=position+i;if(o5i.x7W(p,0)&&o5i.K7W(p,quotes.length)){consolidate(this,p);}
}
}
for(i in this.plugins){var plugin=this.plugins[i];if(plugin.consolidate)plugin.consolidate(quotes,position,p,quote);}
this.runAppend("consolidatedQuote",arguments$);return {"quote":quote,"position":p+1}
;}
;K(o5i.t6s);H(o5i.D6s);M(o5i.U4s);C(o5i.E6s);R(o5i.B6s);N(o5i.M05);Z(E05);STXChart.prototype.displayChart=function(chart){var A0o="lid",w4o="lock",C4o="dott",n4o="andl",B2o="_d",s85="do",m7s="ndl",T1s="ev",k35="gi",noBorders=(o5i.H7W(this.layout.candleWidth-chart.tmpWidth,2)&&o5i.a7W(chart.tmpWidth,3));if(this.runPrepend("displayChart",arguments))return ;this.chart.baseLegendColors=[];var chartType=this.layout.chartType,colorFunction=null;if(chart.customChart){if(chart.customChart.chartType)chartType=chart.customChart.chartType;if(chart.customChart.colorFunction)colorFunction=chart.customChart.colorFunction;}
this.controls.baselineHandle.style.display="none";var panel=chart.panel;if(o5i.T7W(this.layout.aggregationType,(b7o+G8o+k35))){this.drawKagiSquareWave(panel,"stx_kagi_up","stx_kagi_down");this.chart.baseLegendColors.push(this.getCanvasColor("stx_kagi_up"));this.chart.baseLegendColors.push(this.getCanvasColor("stx_kagi_down"));}
else if(o5i.Y7W(this.layout.aggregationType,"pandf")){this.drawPointFigureChart(panel,"stx_pandf_up","X");this.chart.baseLegendColors.push(this.getCanvasColor("stx_pandf_up"));this.drawPointFigureChart(panel,"stx_pandf_down","O");this.chart.baseLegendColors.push(this.getCanvasColor("stx_pandf_down"));}
else if(o5i.l7W(chartType,"line")){this.drawLineChart(panel,"stx_line_chart");}
else if(o5i.y7W(chartType,"mountain")){this.chart.baseLegendColors=null;this.drawMountainChart(panel);}
else if(o5i.w7W(chartType,"colored_mountain")){this.startClip(panel.name);var stxLineUpColor=this.getCanvasColor("stx_line_up"),stxLineDownColor=this.getCanvasColor("stx_line_down"),stxLineColor=this.getCanvasColor("stx_line_chart");if(!colorFunction)colorFunction=function(stx,quote,mode){if(o5i.o7W(quote.Close,quote.iqPrevClose))return stxLineUpColor;else if(o5i.g7W(quote.Close,quote.iqPrevClose))return stxLineDownColor;else return stxLineColor;return null;}
;var colors1=this.drawMountainChart(panel,"stx_colored_mountain_chart",colorFunction);for(var c1 in colors1)this.chart.baseLegendColors.push(c1);this.endClip();}
else if(o5i.s7W(chartType,"wave")){this.drawWaveChart(panel);}
else if(o5i.O7W(chartType,"bar")){this.startClip(panel.name);this.drawBarChartHighPerformance(panel,"stx_bar_chart");this.endClip();}
else if(o5i.j1W(chartType,"colored_line")){this.startClip(panel.name);var stxLineUpColor=this.getCanvasColor("stx_line_up"),stxLineDownColor=this.getCanvasColor("stx_line_down"),stxLineColor=this.getCanvasColor("stx_line_chart");if(!colorFunction)colorFunction=function(stx,quote,mode){if(o5i.W1W(quote.Close,quote.iqPrevClose))return stxLineUpColor;else if(o5i.q1W(quote.Close,quote.iqPrevClose))return stxLineDownColor;else return stxLineColor;return null;}
;var colors1=this.drawLineChart(panel,"stx_line_chart",colorFunction);for(var c1 in colors1)this.chart.baseLegendColors.push(c1);this.endClip();}
else if(o5i.E1W(chartType,"colored_bar")){this.startClip(panel.name);if(colorFunction){var colors2=this.drawBarChart(panel,"stx_bar_chart",colorFunction);for(var c2 in colors2)this.chart.baseLegendColors.push(c2);}
else{this.drawBarChartHighPerformance(panel,"stx_bar_up",STXChart.CLOSEUP);this.drawBarChartHighPerformance(panel,"stx_bar_down",STXChart.CLOSEDOWN);this.drawBarChartHighPerformance(panel,(T6o+I9o+f8o+j7s+I9o+T1s+n3o+n6o),STXChart.CLOSEEVEN);this.chart.baseLegendColors.push(this.getCanvasColor("stx_bar_up"));this.chart.baseLegendColors.push(this.getCanvasColor("stx_bar_down"));}
this.endClip();}
else if(o5i.L1W(chartType,"hollow_candle")||o5i.c1W(chartType,"volume_candle")){this.startClip(panel.name);if(colorFunction){if(!this.noWicksOnCandles[this.layout.aggregationType])this.drawShadows(panel,colorFunction);this.drawCandles(panel,colorFunction,false);this.drawCandles(panel,colorFunction,true);}
else{if(!this.noWicksOnCandles[this.layout.aggregationType]){this.drawShadowsHighPerformance(panel,"stx_hollow_candle_up",STXChart.CLOSEUP);this.drawShadowsHighPerformance(panel,"stx_hollow_candle_down",STXChart.CLOSEDOWN);this.drawShadowsHighPerformance(panel,"stx_hollow_candle_even",STXChart.CLOSEEVEN);}
var colorUp=this.getCanvasColor("stx_hollow_candle_up"),colorDown=this.getCanvasColor("stx_hollow_candle_down"),colorEven=this.getCanvasColor("stx_hollow_candle_even");this.drawCandlesHighPerformance(panel,colorUp,"transparent",o5i.J1W(STXChart.CLOSEUP,STXChart.CANDLEDOWN));this.drawCandlesHighPerformance(panel,colorDown,"transparent",o5i.M1W(STXChart.CLOSEDOWN,STXChart.CANDLEDOWN));this.drawCandlesHighPerformance(panel,colorEven,"transparent",o5i.C1W(STXChart.CLOSEEVEN,STXChart.CANDLEDOWN));this.drawCandlesHighPerformance(panel,this.containerColor,colorUp,o5i.f1W(STXChart.CLOSEUP,STXChart.CANDLEUP));this.drawCandlesHighPerformance(panel,this.containerColor,colorDown,o5i.N1W(STXChart.CLOSEDOWN,STXChart.CANDLEUP));this.drawCandlesHighPerformance(panel,this.containerColor,colorEven,o5i.V1W(STXChart.CLOSEEVEN,STXChart.CANDLEUP));this.chart.baseLegendColors.push(colorUp);this.chart.baseLegendColors.push(colorDown);}
this.endClip();}
else if(o5i.Z1W(chartType,"candle")){this.startClip(panel.name);var coloredShadowUp=this.getCanvasColor("stx_candle_shadow_up"),coloredShadowDown=this.getCanvasColor((H4o+z2o+Z95+I9o+L3o+G8o+m7s+n3o+I9o+n0o+G8o+s85+j55+B2o+c2o)),coloredShadow=(o5i.Q1W(coloredShadowUp,coloredShadowDown));if(!colorFunction&&coloredShadow){var stxCandleShadow=this.getCanvasColor("stx_candle_shadow"),stxCandleUpColor=this.getCanvasColor("stx_candle_up"),stxCandleDownColor=this.getCanvasColor((v8o+W7s+n4o+n3o+B2o+a6o+j55+n6o)),stxCandleUp=this.canvasStyle("stx_candle_up"),stxCandleDown=this.canvasStyle("stx_candle_down");colorFunction=function(stx,quote,mode){if(o5i.A1W(mode,"shadow")){if(coloredShadow){if(o5i.P1W(quote.Close,quote.Open))return coloredShadowUp;else if(o5i.v1W(quote.Close,quote.Open))return coloredShadowDown;}
return stxCandleShadow;}
else if(o5i.i0O(mode,"solid")){if(o5i.u0O(quote.Close,quote.Open))return stxCandleUpColor;else if(o5i.h0O(quote.Close,quote.Open))return stxCandleDownColor;else if(o5i.d0O(quote.Close,quote.Open))return stxCandleShadow;}
else if(o5i.n0O(mode,"outline")){var styleArray1;if(o5i.B0O(quote.Close,quote.Open))styleArray1=stxCandleUp;else if(o5i.e0O(quote.Close,quote.Open))styleArray1=stxCandleDown;else return null;var borderColor=styleArray1["border-left-color"];if(!borderColor)borderColor=styleArray1.borderLeftColor;return borderColor;}
return null;}
;}
if(colorFunction){if(!this.noWicksOnCandles[this.layout.aggregationType])this.drawShadows(panel,colorFunction);this.drawCandles(panel,colorFunction,false);if(!noBorders)this.drawCandles(panel,colorFunction,true);}
else{if(!this.noWicksOnCandles[this.layout.aggregationType])this.drawShadowsHighPerformance(panel,"stx_candle_shadow");var styleArray=this.canvasStyle("stx_candle_up"),borderColor=styleArray["border-left-color"];if(!borderColor)borderColor=styleArray.borderLeftColor;if(noBorders)borderColor=null;this.drawCandlesHighPerformance(panel,this.getCanvasColor("stx_candle_up"),borderColor,STXChart.CANDLEUP);this.chart.baseLegendColors.push(styleArray.color);styleArray=this.canvasStyle("stx_candle_down");borderColor=styleArray["border-left-color"];if(!borderColor)borderColor=styleArray.borderLeftColor;if(noBorders)borderColor=null;this.drawCandlesHighPerformance(panel,this.getCanvasColor("stx_candle_down"),borderColor,STXChart.CANDLEDOWN);this.chart.baseLegendColors.push(styleArray.color);}
this.endClip();}
else if(o5i.S0O(chartType,"baseline_delta")){this.startClip(panel.name);this.setStyle("stx_baseline_trace","opacity",0);this.drawLineChart(panel,"stx_baseline_trace");var baseline=chart.baseline.actualLevel;if(o5i.F0O(baseline,null)){baseline=this.pixelFromPriceTransform(baseline,chart.panel);var styles={"over":"stx_baseline_up","under":"stx_baseline_down"}
;for(var s in styles){var parameters={panelName:"chart",band:"Close",threshold:chart.baseline.actualLevel,color:this.getCanvasColor(styles[s]),direction:(o5i.R0O(s,"over")?1:-1),edgeHighlight:this.getCanvasColor(styles[s]),edgeParameters:{pattern:"solid",lineWidth:parseInt(this.canvasStyle(styles[s]).width,10)+0.1,opacity:1}
}
,color=parameters.color;if(color&&o5i.p0O(color,"transparent")){var gradient=chart.context.createLinearGradient(0,(o5i.z0O(s,"over")?0:o5i.m0O(2,baseline)),0,baseline);gradient.addColorStop(0,STX.hexToRgba(color,60));gradient.addColorStop(1,STX.hexToRgba(color,10));parameters.color=gradient;parameters.opacity=1;}
STX.Studies.preparePeakValleyFill(this,chart.dataSegment,parameters);this.chart.baseLegendColors.push(color);}
this.plotLine(0,1,baseline,baseline,this.containerColor,"line",chart.context,true,{pattern:"solid",lineWidth:"1.1",opacity:1}
);this.plotLine(0,1,baseline,baseline,this.getCanvasColor("stx_baseline"),(s3o+n3o),chart.context,true,{pattern:(C4o+n3o+o5i.U8o),lineWidth:"2.1",opacity:0.5}
);if(o5i.X0O(this.chart.baseline.userLevel,false)){this.controls.baselineHandle.style.top=o5i.G0O(baseline,parseInt(getComputedStyle(this.controls.baselineHandle).height,10)/2,"px");this.controls.baselineHandle.style.left=o5i.P0O(this.chart.right,parseInt(getComputedStyle(this.controls.baselineHandle).width,10),(o5i.N4o+Z95));this.controls.baselineHandle.style.display=(f8o+w4o);}
}
this.endClip();}
else if(o5i.O0O(chartType,"baseline_delta_mountain")){var baseline=chart.baseline.actualLevel;if(o5i.j8O(baseline,null)){this.drawMountainChart(panel,"stx_baseline_delta_mountain");this.startClip(panel.name);this.setStyle("stx_baseline_trace","opacity",0);this.drawLineChart(panel,"stx_baseline_trace");baseline=this.pixelFromPriceTransform(baseline,chart.panel);var styles={"over":"stx_baseline_up","under":"stx_baseline_down"}
;for(var s in styles){var parameters={panelName:"chart",band:(L85+o5i.p6o+k8o+n3o),threshold:chart.baseline.actualLevel,color:this.getCanvasColor(styles[s]),direction:(o5i.W8O(s,"over")?1:-1),edgeHighlight:this.getCanvasColor(styles[s]),edgeParameters:{pattern:"solid",lineWidth:parseInt(this.canvasStyle(styles[s]).width,10)+0.1,opacity:1}
}
;this.chart.baseLegendColors.push(parameters.color);parameters.color="transparent";STX.Studies.preparePeakValleyFill(this,chart.dataSegment,parameters);}
this.plotLine(0,1,baseline,baseline,this.containerColor,"line",chart.context,true,{pattern:(H4o+a6o+A0o),lineWidth:"1.1",opacity:1}
);this.plotLine(0,1,baseline,baseline,this.getCanvasColor("stx_baseline"),"line",chart.context,true,{pattern:"dotted",lineWidth:"2.1",opacity:0.5}
);if(o5i.q8O(this.chart.baseline.userLevel,false)){this.controls.baselineHandle.style.top=o5i.E8O(baseline,parseInt(getComputedStyle(this.controls.baselineHandle).height,10)/2,(o5i.N4o+Z95));this.controls.baselineHandle.style.left=o5i.x8O(this.chart.right,parseInt(getComputedStyle(this.controls.baselineHandle).width,10),"px");this.controls.baselineHandle.style.display="block";}
this.endClip();}
}
else if(o5i.e8O(chartType,"scatterplot")){this.startClip(panel.name);this.scatter(panel);this.endClip();}
else{this.chart.baseLegendColors=null;}
this.runAppend("displayChart",arguments);}
;STXChart.prototype.calculateATR=function(chart,period){if(!period)period=20;var total=0;for(var i=1;o5i.S8O(i,chart.dataSet.length);i++){var q=chart.dataSet[i],previousClose=chart.dataSet[o5i.F8O(i,1)].Close,trueRange=Math.max(o5i.R8O(q.High,q.Low),Math.abs(o5i.p8O(q.High,previousClose)),Math.abs(o5i.z8O(q.Low,previousClose)));total+=trueRange;if(o5i.m8O(i,period))total-=chart.dataSet[o5i.X8O(i,period)].trueRange;q.trueRange=trueRange;q.atr=o5i.G8O(total,period);}
}
;STXChart.prototype.calculateMedianPrice=function(chart){var d;for(var i=0;o5i.k8O(i,chart.dataSet.length);++i){d=chart.dataSet[i];d["hl/2"]=o5i.r8O((d.High+d.Low),2);}
}
;STXChart.prototype.calculateTypicalPrice=function(chart){var d;for(var i=0;o5i.U8O(i,chart.dataSet.length);++i){d=chart.dataSet[i];d["hlc/3"]=o5i.D3O((d.High+d.Low+d.Close),3);}
}
;STXChart.prototype.calculateWeightedClose=function(chart){var d;for(var i=0;o5i.t3O(i,chart.dataSet.length);++i){d=chart.dataSet[i];d["hlcc/4"]=o5i.I3O((d.High+d.Low+2*d.Close),4);}
}
;STXChart.prototype.calculateOHLC4=function(chart){var d;for(var i=0;o5i.b3O(i,chart.dataSet.length);++i){d=chart.dataSet[i];d["ohlc/4"]=o5i.x3O((d.Open+d.High+d.Low+d.Close),4);}
}
;STXChart.prototype.currentQuote=function(){var quote=null;if(!this.chart.dataSet)return null;for(var i=o5i.K3O(this.chart.dataSet.length,1);o5i.H3O(i,0);i--)if(this.chart.dataSet[i])return this.chart.dataSet[i];return null;}
;STXChart.prototype.correctIfOffEdge=function(theChart){if(this.runPrepend("correctIfOffEdge",arguments))return ;for(var chartName in this.charts){var chart=this.charts[chartName],leftPad=this.minimumLeftBars+1;if(chart.allowScrollPast){var rightPad=o5i.a3O(chart.maxTicks,leftPad);if(o5i.T3O(chart.maxTicks-rightPad,chart.dataSet.length)){rightPad=o5i.Y3O(chart.maxTicks,chart.dataSet.length);}
if(o5i.l3O(chart.scroll-rightPad,chart.dataSet.length)){chart.scroll=chart.dataSet.length+rightPad;}
if(o5i.y3O(chart.scroll,leftPad)){chart.scroll=leftPad;this.micropixels=-this.layout.candleWidth/2;}
}
else{if(o5i.w3O(chart.scroll,leftPad)){chart.scroll=leftPad;}
if(o5i.o3O(chart.scroll,chart.dataSet.length)){chart.scroll=chart.dataSet.length;}
}
}
this.runAppend("correctIfOffEdge",arguments);}
;STXChart.prototype.createDataSegment=function(theChart){var y7o="Segm",G35="teDa";if(this.runPrepend("createDataSegment",arguments))return ;for(var chartName in this.charts){var chart=this.charts[chartName];if(theChart)chart=theChart;chart.baseline.actualLevel=chart.baseline.userLevel?chart.baseline.userLevel:chart.baseline.defaultLevel;chart.dataSegment=[];var position=o5i.g3O(chart.dataSet.length,chart.scroll,1);for(var i=-1;o5i.r3O(i,chart.scroll)&&o5i.U3O(i,chart.maxTicks);i++){position++;if(i==-1&&!chart.baseline.includeInDataSegment)continue;if(o5i.D9O(position,chart.dataSet.length)&&o5i.t9O(position,0)){if(chart.dataSet[position].candleWidth){chart.dataSet[position].candleWidth=null;chart.dataSet[position].leftOffset=null;}
chart.dataSegment.push(chart.dataSet[position]);if(o5i.I9O(chart.baseline.actualLevel,null)&&o5i.b9O(i,0))chart.baseline.actualLevel=chart.dataSet[position].iqPrevClose;}
else if(o5i.x9O(position,0)){chart.dataSegment.push(null);}
}
if(o5i.K9O(this.layout.chartType,"volume_candle")){var totalVolume=0;for(var v=0;o5i.H9O(v,chart.dataSegment.length);v++){if(chart.dataSegment[v])totalVolume+=chart.dataSegment[v].Volume;}
var accumOffset=0;for(var w=0;o5i.a9O(w,chart.dataSegment.length);w++){if(chart.dataSegment[w]){if(chart.dataSegment[w].Volume){var workingWidth=chart.width;if(o5i.T9O(chart.scroll,chart.maxTicks))workingWidth-=this.preferences.whitespace;chart.dataSegment[w].candleWidth=o5i.Y9O(workingWidth,chart.dataSegment[w].Volume,totalVolume);chart.dataSegment[w].leftOffset=accumOffset+o5i.z9O(chart.dataSegment[w].candleWidth,2);accumOffset+=chart.dataSegment[w].candleWidth;}
else{chart.dataSegment[w].candleWidth=this.layout.candleWidth;chart.dataSegment[w].leftOffset=accumOffset+o5i.m9O(this.layout.candleWidth,2);accumOffset+=this.layout.candleWidth;}
}
else{accumOffset+=this.layout.candleWidth;}
}
}
if(theChart)break;}
this.runAppend((L3o+K7o+G8o+G35+z2o+G8o+y7o+F8o+z2o),arguments);}
;STXChart.prototype.leftTick=function(){return o5i.X9O(this.chart.dataSet.length,this.chart.scroll);}
;STXChart.prototype.getStartDateOffset=function(){for(var ds=0;o5i.G9O(ds,this.chart.dataSegment.length);ds++){if(this.chart.dataSegment[ds]){return ds;}
}
return 0;}
;STXChart.prototype.setStartDate=function(dt){for(var i=0;o5i.k9O(i,this.chart.dataSet.length);i++){var bar=this.chart.dataSet[i];if(o5i.r9O(bar.DT.getTime(),dt.getTime())){this.chart.scroll=o5i.U9O(this.chart.dataSet.length,i);this.draw();return ;}
}
}
;STXChart.prototype.updateListeners=function(event){for(var i in this.plugins){var plugin=this.plugins[i];if(plugin.display&&plugin.listener)plugin.listener(this,event);}
}
;STXChart.prototype.clearPixelCache=function(){for(var x in this.panels){var panel=this.panels[x];panel.cacheHigh=null;panel.cacheLow=null;panel.cacheLeft=1000000;panel.cacheRight=-1;}
for(var chartName in this.charts){var chart=this.charts[chartName];if(!chart.dataSet)continue;for(var i=0;o5i.D5O(i,chart.dataSet.length);i++){chart.dataSet[i].cache={}
;}
}
}
;STXChart.prototype.createYAxisLabel=function(panel,txt,y,backgroundColor,color,ctx,yAxis){if(o5i.t5O(panel.yAxis.drawPriceLabels,false))return ;var yax=yAxis?yAxis:panel.yAxis,context=ctx?ctx:this.chart.context,margin=3,height=this.getCanvasFontSize("stx_yaxis")+o5i.I5O(margin,2);this.canvasFont("stx_yaxis",context);var drawBorders=yax.displayBorder;if(o5i.b5O(this.axisBorders,false))drawBorders=false;if(o5i.x5O(this.axisBorders,true))drawBorders=true;var tickWidth=drawBorders?3:0,width;try{width=context.measureText(txt).width+tickWidth+o5i.K5O(margin,2);}
catch(e){width=yax.width;}
var x=o5i.H5O(yax.left,margin,3),textx=x+margin+tickWidth,radius=3,position=(o5i.F5O(yax.position,null)?panel.chart.yAxis.position:yax.position);if(o5i.R5O(position,"left")){x=yax.left+yax.width+margin-3;width=width*-1;textx=x;radius=-3;context.textAlign="right";}
if(o5i.p5O(y+(height/2),yax.bottom))y=o5i.z5O(yax.bottom,(height/2));if(o5i.m5O(y-(height/2),yax.top))y=yax.top+(o5i.X5O(height,2));context.fillStyle=backgroundColor;if(typeof (STX[this.yaxisLabelStyle])=='undefined'){this.yaxisLabelStyle="roundRectArrow";}
var yaxisLabelStyle=this.yaxisLabelStyle;if(yax.yaxisLabelStyle)yaxisLabelStyle=yax.yaxisLabelStyle;STX[yaxisLabelStyle](context,x,o5i.G5O(y,(height/2)),width,height,radius,true,false);if(o5i.k5O(this.preferences.currentPriceLine,true)&&o5i.r5O(panel.chart.scroll-1,Math.ceil(panel.chart.width/this.layout.candleWidth))){context.globalCompositeOperation="destination-over";this.plotLine(panel.left,panel.right,y,y,backgroundColor,"line",context,panel,{pattern:"dashed",lineWidth:1,opacity:0.8}
);context.globalCompositeOperation="source-over";}
context.textBaseline="middle";context.fillStyle=color?color:STX.chooseForegroundColor(backgroundColor);if(o5i.U5O(context.fillStyle,backgroundColor)){if(o5i.D2O(backgroundColor.toUpperCase(),"#FFFFFF"))context.fillStyle="#000000";else context.fillStyle="#FFFFFF";}
context.fillText(txt,textx,y+1);context.textAlign="left";}
;STXChart.prototype.createXAxisLabel=function(panel,txt,x,backgroundColor,color,pointed){var context=this.chart.context,margin=2,fontstyle="stx-float-date",height=this.getCanvasFontSize(fontstyle)+o5i.t2O(margin,2);this.canvasFont(fontstyle,context);var width;try{width=context.measureText(txt).width+o5i.I2O(margin,2);}
catch(e){width=0;}
var y=panel.top+panel.height-height;if(o5i.b2O(x+(width/2),panel.left)||o5i.x2O(x-(width/2),panel.right))return ;if(!pointed){if(o5i.K2O(x+(width/2),panel.right))x=o5i.H2O(panel.right,(width/2));if(o5i.a2O(x-(width/2),panel.left))x=panel.left+(o5i.T2O(width,2));}
context.fillStyle=backgroundColor;STX.roundRect(context,o5i.Y2O(x,(width/2)),y,width,height,3,true,false);if(pointed){var arrowHeight=o5i.l2O(panel.bottom,panel.yAxis.bottom,height);context.beginPath();context.moveTo(o5i.m2O(x,arrowHeight),y);context.lineTo(x,o5i.X2O(y,arrowHeight));context.lineTo(x+arrowHeight,y);context.closePath();context.fill();}
context.textBaseline="top";context.fillStyle=color?color:STX.chooseForegroundColor(backgroundColor);if(o5i.G2O(context.fillStyle,backgroundColor)){if(o5i.k2O(backgroundColor.toUpperCase(),"#FFFFFF"))context.fillStyle="#000000";else context.fillStyle="#FFFFFF";}
context.fillText(txt,o5i.r2O(x,width/2,margin),y+margin);}
;STXChart.prototype.drawCurrentHR=function(){if(this.runPrepend("drawCurrentHR",arguments))return ;var backgroundColor,color;for(var chartName in this.charts){var chart=this.charts[chartName],panel=chart.panel,yAxis=panel.yAxis;if(o5i.i4O(yAxis.drawCurrentPriceLabel,false))continue;if(chart.customChart&&o5i.u4O(chart.customChart.chartType,"none"))continue;var whichSet=yAxis.whichSet;if(!whichSet)whichSet="dataSet";var l=chart[whichSet].length;if(o5i.h4O(whichSet,"dataSegment")){while(o5i.d4O(l,(chart.width-this.micropixels+(this.layout.candleWidth)/2+1)/this.layout.candleWidth))l--;}
if(l){var quote=chart[whichSet][o5i.n4O(l,1)],prevClose=quote.Close,currentClose=quote.Close;if(o5i.B4O(chart.dataSet.length,2)){var quote2=chart[whichSet][o5i.e4O(l,2)];prevClose=quote2.Close;}
if(o5i.S4O(currentClose,prevClose)){backgroundColor=this.canvasStyle("stx_current_hr_down").backgroundColor;color=this.canvasStyle("stx_current_hr_down").color;}
else{backgroundColor=this.canvasStyle("stx_current_hr_up").backgroundColor;color=this.canvasStyle("stx_current_hr_up").color;}
if(quote.transform)quote=quote.transform;var txt,labelDecimalPlaces=Math.max(panel.yAxis.printDecimalPlaces,panel.chart.decimalPlaces);if(yAxis.maxDecimalPlaces||o5i.F4O(yAxis.maxDecimalPlaces,0))labelDecimalPlaces=Math.min(labelDecimalPlaces,yAxis.maxDecimalPlaces);if(yAxis.priceFormatter){txt=yAxis.priceFormatter(this,panel,quote.Close,labelDecimalPlaces);}
else{txt=this.formatYAxisPrice(quote.Close,panel,labelDecimalPlaces);}
var y=this.pixelFromPrice(quote.Close,panel);this.createYAxisLabel(panel,txt,y,backgroundColor,color);}
}
this.runAppend("drawCurrentHR",arguments);}
;STXChart.prototype.getDefaultColor=function(){var W4o="FF",B1s=0.65;this.defaultColor=F5o;var bgColor=o5i.d7o,div=this.chart.container;while(!bgColor||STX.isTransparent(bgColor)){var cStyle=getComputedStyle(div);if(!cStyle)return ;bgColor=cStyle.backgroundColor;if(STX.isTransparent(bgColor))bgColor=k5o;div=div.parentNode;if(!div||!div.tagName)break;}
if(bgColor){if(o5i.R4O(bgColor,k5o))bgColor=r05;this.containerColor=bgColor;if(!STX.isTransparent(bgColor)){var hsv=STX.hsv(bgColor),v=hsv[o5i.U4s];if(o5i.p4O(v,B1s))this.defaultColor=F5o;else this.defaultColor=r05;}
else{this.defaultColor=F5o;}
}
else{this.containerColor=(o5i.O6o+y0o+y0o+W4o+W4o);}
}
;STXChart.prototype.startAsyncAction=function(){if(!this.pendingAsyncs)this.pendingAsyncs=[];this.pendingAsyncs.push(L7o);}
;STXChart.prototype.registerChartDrawnCallback=function(fc){if(!this.asyncCallbacks)this.asyncCallbacks=[];this.asyncCallbacks.push(fc);return {fc:fc}
;}
;STXChart.prototype.unregisterChartDrawnCallback=function(obj){for(var i=0;o5i.z4O(i,this.asyncCallbacks.length);i++){if(o5i.m4O(this.asyncCallbacks[i],obj.fc)){this.asyncCallbacks.splice(i,1);return ;}
}
}
;STXChart.prototype.makeAsyncCallbacks=function(){if(!this.asyncCallbacks)return ;if(!this.pendingAsyncs||!this.pendingAsyncs.length){for(var i=0;o5i.X4O(i,this.asyncCallbacks.length);i++){(this.asyncCallbacks[i])();}
}
}
;STXChart.prototype.completeAsyncAction=function(){this.pendingAsyncs.pop();this.makeAsyncCallbacks();}
;STXChart.prototype.draw=function(){this.debug();if(!this.chart.canvas)return ;if(!this.chart.dataSet)return ;if(!this.chart.canvasHeight)return ;this.offset=o5i.G4O(this.layout.candleWidth,this.candleWidthPercent,2);STX.clearCanvas(this.chart.canvas,this);if(this.runPrepend("draw",arguments))return ;if(!this.xaxisHeight){this.xaxisHeight=this.getCanvasFontSize("stx_xaxis")+4;if(this.chart.xAxis.displayBorder||this.axisBorders)this.xaxisHeight+=3;}
this.getDefaultColor();this.vectorsShowing=false;this.drawPanels();this.yAxisLabels=[];var i,chart,chartName,plugin;for(chartName in this.charts){chart=this.charts[chartName];this.correctIfOffEdge();this.createDataSegment();var axisRepresentation=this.createXAxis(chart);this.initializeDisplay(chart);this.rendererAction(chart,"calculate");this.renderYAxis(chart);this.drawXAxis(chart,axisRepresentation);chart.tmpWidth=Math.floor(o5i.P4O(this.layout.candleWidth,this.candleWidthPercent));if(o5i.v4O(chart.tmpWidth%2,0)){chart.tmpWidth+=1;if(o5i.i6O(chart.tmpWidth,this.layout.candleWidth))chart.tmpWidth-=2;}
if(o5i.u6O(chart.tmpWidth,0.5))chart.tmpWidth=0.5;for(i in this.plugins){plugin=this.plugins[i];if(plugin.display){if(plugin.drawUnder)plugin.drawUnder(this,chart);}
}
this.rendererAction(chart,"underlay");STX.Studies.displayStudies(this,chart,true);this.displayChart(chart);STX.Studies.displayStudies(this,chart,false);this.rendererAction(chart,"overlay");}
for(chartName in this.charts){chart=this.charts[chartName];for(i in this.plugins){plugin=this.plugins[i];if(plugin.display){if(plugin.drawOver)plugin.drawOver(this,chart);}
}
}
for(var panel in this.panels){if(!this.panels[panel].hidden)this.plotYAxisText(this.panels[panel]);}
for(var yLbl=0;o5i.h6O(yLbl,this.yAxisLabels.length);yLbl++){this.createYAxisLabel.apply(this,this.yAxisLabels[yLbl].args);}
this.createCrosshairs();this.drawVectors();this.drawCurrentHR();this.displayInitialized=true;if(this.controls.home){if(o5i.d6O(this.chart.scroll-1,Math.ceil(this.chart.width/this.layout.candleWidth))){this.controls.home.style.display="block";}
else{this.controls.home.style.display="none";}
}
this.positionMarkers();for(chartName in this.charts){chart=this.charts[chartName];if(this.quoteDriver)this.quoteDriver.checkLoadMore(chart);}
this.runAppend("draw",arguments);this.makeAsyncCallbacks();}
;STXChart.prototype.adjustBackingStore=function(canvas,context){this.devicePixelRatio=window.devicePixelRatio||1;if(o5i.n6O(this.devicePixelRatio,1.0))this.devicePixelRatio=1.0;var backingStoreRatio=context.webkitBackingStorePixelRatio||context.mozBackingStorePixelRatio||context.msBackingStorePixelRatio||context.oBackingStorePixelRatio||context.backingStorePixelRatio||1,ratio=o5i.B6O(this.devicePixelRatio,backingStoreRatio);if(!STX.isAndroid||STX.is_chrome){var oldWidth=canvas.width,oldHeight=canvas.height;canvas.width=o5i.e6O(oldWidth,ratio);canvas.height=o5i.S6O(oldHeight,ratio);canvas.style.width=oldWidth+'px';canvas.style.height=oldHeight+'px';context.scale(ratio,ratio);}
}
;STXChart.prototype.resizeCanvas=function(){if(!this.chart.panel)this.chart.panel=this.panels.chart;var canvas=this.chart.canvas,context=this.chart.context;if(canvas&&context){this.chart.tempCanvas.height=canvas.height=this.chart.container.clientHeight;this.chart.tempCanvas.width=canvas.width=this.chart.container.clientWidth;this.adjustBackingStore(canvas,context);this.adjustBackingStore(this.chart.tempCanvas,this.chart.tempCanvas.context);this.floatCanvas.height=this.chart.container.clientHeight;this.floatCanvas.width=this.chart.container.clientWidth;this.adjustBackingStore(this.floatCanvas,this.floatCanvas.context);}
var rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.canvasWidth=this.chart.canvasWidth=this.chart.container.clientWidth;this.right=this.left+this.canvasWidth;this.height=this.chart.container.clientHeight;this.width=o5i.F6O(this.right,this.left);this.bottom=this.top+this.height;this.calculateYAxisPositions();this.chart.canvasRight=this.right;this.chart.canvasHeight=this.height;var candleWidth=this.layout.candleWidth;if(typeof (candleWidth)=="undefined")candleWidth=8;for(var chartName in this.charts){var chart=this.charts[chartName];if(this.layout.span){this.setCandleWidth(this.getSpanCandleWidth(this.layout.span),chart);}
else{this.setCandleWidth(candleWidth,chart);if(o5i.R6O(chart.scroll,chart.width/candleWidth)){chart.scroll=Math.floor(o5i.p6O(chart.width,candleWidth));var wsInTicks=Math.round(o5i.z6O(this.preferences.whitespace,this.layout.candleWidth));chart.scroll-=wsInTicks;}
}
var idealNumberOfTicks=10,appxLabelWidth;try{appxLabelWidth=o5i.m6O(context.measureText("10:00").width,2);}
catch(e){appxLabelWidth=100;}
while(o5i.X6O(idealNumberOfTicks,1)){if(o5i.G6O(this.chart.width/appxLabelWidth,idealNumberOfTicks))break;idealNumberOfTicks/=1.5;}
chart.xAxis.autoComputedTickSizePixels=Math.round(o5i.k6O(this.chart.width,idealNumberOfTicks));if(o5i.r6O(chart.xAxis.autoComputedTickSizePixels,1))chart.xAxis.autoComputedTickSizePixels=1;}
}
;STXChart.prototype.setCandleWidth=function(newCandleWidth,chart){if(!chart)chart=this.chart;if(o5i.U6O(newCandleWidth,this.minimumCandleWidth))newCandleWidth=this.minimumCandleWidth;this.layout.candleWidth=newCandleWidth;chart.maxTicks=Math.ceil(o5i.D7O(this.chart.width,newCandleWidth)+0.5);}
;STXChart.prototype.resizeChart=function(maintainScroll){var h5o="resizeChart";if(this.runPrepend(h5o,arguments))return ;if(o5i.t7O(maintainScroll,x35))maintainScroll=L7o;if(maintainScroll)this.preAdjustScroll();var previousHeight=this.chart.canvasHeight;this.resizeCanvas();if(maintainScroll)this.postAdjustScroll();if(this.displayInitialized){this.adjustPanelPositions();this.draw();}
else if(o5i.I7O(this.chart.canvasHeight,o5i.t6s)&&o5i.b7O(previousHeight,o5i.t6s)){this.adjustPanelPositions();this.draw();}
this.runAppend(h5o,arguments);}
;STXChart.prototype.newChart=function(symbol,masterData,chart,cb,params){var H85="eed",O6s="ie",R1s="rD",k7s="as",S7s="N",D9o="nin",b2o="Wa",f85='ob';if(!chart)chart=this.chart;if(!params)params={}
;if(params.periodicity){if(params.periodicity.interval)this.layout.interval=params.periodicity.interval;if(params.periodicity.period)this.layout.periodicity=params.periodicity.period;this.layout.timeUnit=params.periodicity.timeUnit;}
var prevSymbol=chart.symbol,prevSymbolObject=STX.clone(chart.symbolObject),prevMarket=chart.market;if(!symbol){chart.symbol=o5i.d7o;chart.symbolObject={symbol:o5i.d7o}
;}
else if(typeof symbol==(f85+P1o+j2o)){chart.symbol=symbol.symbol;chart.symbolObject=symbol;}
else{chart.symbol=symbol;chart.symbolObject.symbol=symbol;}
if(!masterData&&this.quoteDriver){var callback=function(err){if(err){chart.symbol=prevSymbol;chart.symbolObject=prevSymbolObject;chart.market=prevMarket;}
if(cb)cb(err);}
,setSpan=params.span;if(!setSpan&&this.layout)setSpan=this.layout.setSpan;if(setSpan&&setSpan.base){var multiplier=setSpan.multiplier||o5i.D6s;this.chart.masterData=o5i.d7o;this.displayInitialized=x35;this.setSpan({maintainPeriodicity:params.periodicity?L7o:x35,multiplier:multiplier,base:setSpan.base,symbol:chart.symbol}
,callback);}
else{var self=this;this.quoteDriver.newChart({symbol:chart.symbol,symbolObject:chart.symbolObject,chart:chart,initializeChart:L7o}
,function(){self.adjustPanelPositions();self.quoteDriver.updateSubscriptions();if(params.stretchToFillScreen){self.fillScreen();}
callback.apply(self,arguments);}
);}
}
else{if(!masterData){console.log((b2o+h4o+D9o+o5i.x1o+y85+S7s+a6o+F3o+X6o+k7s+z2o+n3o+R1s+F7s+G8o+F3o+H4o+o5i.N4o+r4o+G7o+j1o+O6s+o5i.U8o+F3o+G8o+C35+F3o+n6o+a6o+F3o+V4s+e0o+O2o+y0o+H85+F3o+L3o+a6o+n6o+j1o+G7o+o5i.x1o+C1s+w9o));}
if(!chart.symbol)chart.symbol=C2o;this.setMasterData(masterData,chart);this.createDataSet();this.initializeChart();if(params.span&&params.span.multiplier&&params.span.base){this.setSpan({maintainPeriodicity:L7o,multiplier:params.span.multiplier,base:params.span.base}
);}
else if(params.stretchToFillScreen){this.fillScreen();}
else{this.draw();}
this.adjustPanelPositions();if(cb)cb();}
}
;STXChart.prototype.fillScreen=function(){var candleWidth=this.layout.candleWidth,chartWidth=o5i.x7O(this.chart.width,this.preferences.whitespace),count=this.chart.dataSet.length;if(o5i.K7O(count*candleWidth,chartWidth)){this.draw();return ;}
var newCandleWidth=o5i.H7O(chartWidth,count);this.setCandleWidth(newCandleWidth,this.chart);this.home({maintainWhitespace:true}
);}
;STXChart.prototype.setMasterData=function(masterData,chart){var P6o='= ',C6o='dex',h2o='I',Y5o='trings',s4s='es',u4o='vid',f2o='erver',A95='our',A05='() ',Y35='lo',d4o='arseF',Z2o='U',r6s='. ',U7s='umb',z95='si',O0o='los',O8o='C',M9o='ata',Q8o='ste',L1o='Ma',T6s='et',p7s='at',e7o='ter',x5o='ate',U2o='T',I3o='D',m4o='sing',n5o=((0xA1,142.)>=0x1CB?'n':0x7D>(1.34E2,98)?(0x12E,'M'):(87.7E1,105.)),g1s=' : ',i55='rD',s1s='setM';if(!chart)chart=this.chart;if(this.marketFactory){var marketDef=this.marketFactory(chart.symbolObject);this.setMarket(marketDef,chart);}
chart.masterData=masterData;if(o5i.a7O(chart.name,"chart"))this.masterData=masterData;var i;for(i=0;masterData&&o5i.T7O(i,masterData.length);i++){if(this.transformMasterDataQuote)masterData[i]=this.transformMasterDataQuote(masterData[i]);var quotes=masterData[i];if(quotes.DT){quotes.DT=new Date(quotes.DT);quotes.Date=STX.yyyymmddhhmmssmmm(quotes.DT);}
else if(quotes.Date)quotes.DT=STX.strToDateTime(quotes.Date);else console.log((s1s+x7s+j2o+l1o+i55+B85+j2o+B85+g1s+n5o+o4s+m4o+i05+I3o+U2o+i05+B85+M35+U05+i05+I3o+x5o+i05+N35+M35+i05+q35+B85+g9o+e7o+I3o+p7s+B85+i05+N35+N85+P1o+j2o));if(quotes.Volume&&typeof quotes.Volume!=="number")quotes.Volume=parseInt(quotes.Volume,10);if(typeof quotes.Close=='number'){}
else{console.log((g9o+T6s+L1o+Q8o+T9o+I3o+M9o+g1s+O8o+O0o+l1o+i05+b95+g9o+i05+q35+o4s+z95+M35+o95+i05+N35+T9o+i05+M35+N35+j2o+i05+B85+i05+M35+U7s+l1o+T9o+r6s+Z2o+g9o+l1o+i05+q5o+d4o+Y35+B85+j2o+A05+b95+t05+i05+B3o+A95+i05+U05+p7s+B85+i05+g9o+f2o+i05+q5o+T9o+N35+u4o+s4s+i05+g9o+Y5o+r6s+n5o+B85+Q8o+i55+M9o+i05+h2o+M35+C6o+P6o)+i+' Value = '+quotes.Close);}
if(o5i.Y7O(quotes.High,null))delete  quotes.High;if(o5i.l7O(quotes.Low,null))delete  quotes.Low;if(o5i.y7O(quotes.Open,null))delete  quotes.Open;}
chart.decimalPlaces=this.callbacks.calculateTradingDecimalPlaces({stx:this,chart:chart,symbol:chart.symbolObject.symbol,symbolObject:chart.symbolObject}
);if(!STXChart.isDailyInterval(this.layout.interval))this.setDisplayDates(masterData);this.chart.roundit=Math.pow(10,chart.decimalPlaces);for(i in this.plugins){var plugin=this.plugins[i];if(plugin.display){if(plugin.setMasterData)plugin.setMasterData(this,chart);}
}
for(var s in this.chart.series){var series=this.chart.series[s];if(series.addSeriesData){series.addSeriesData(this);}
}
}
;STXChart.prototype.getSymbols=function(){var a=[],obj;for(var chartName in this.charts){var chart=this.charts[chartName];a.push({symbol:chart.symbol,symbolObject:chart.symbolObject,periodicity:this.layout.periodicity,interval:this.layout.interval,timeUnit:this.layout.timeUnit}
);for(var field in chart.series){var series=chart.series[field];if(!series.parameters.data||!series.parameters.data.useDefaultQuoteFeed)continue;obj={symbol:field,symbolObject:series.symbolObject,periodicity:this.layout.periodicity,interval:this.layout.interval,timeUnit:this.layout.timeUnit}
;if(o5i.w7O(arguments[0],"include-parameters"))obj.parameters=series.parameters;if(!obj.symbolObject)obj.symbolObject={symbol:field}
;a.push(obj);}
}
for(var p in this.panels){if(this.panels[p].studyQuotes){for(var sq in this.panels[p].studyQuotes){obj={symbol:sq,symbolObject:{symbol:sq}
,periodicity:this.layout.periodicity,interval:this.layout.interval,timeUnit:this.layout.timeUnit}
;a.push(obj);}
}
}
for(var s=o5i.o7O(a.length,1);o5i.g7O(s,0);s--){var symbol=a[s].symbol;if(this.isEquationChart(symbol)){var res=STX.formatEquation(symbol);if(res){for(var sym=0;o5i.s7O(sym,res.symbols.length);sym++){obj={symbol:res.symbols[sym],symbolObject:a[s].symbolObject,periodicity:a[s].periodicity,interval:a[s].interval,timeUnit:a[s].timeUnit}
;a.push(obj);}
a.splice(s,1);}
}
}
return a;}
;STXChart.prototype.setDisplayDate=function(quote){var dt=quote.DT,milli=o5i.O7O(dt.getSeconds(),z35)+dt.getMilliseconds(),newDT;if(this.dataZone){newDT=new timezoneJS.Date(dt.getFullYear(),dt.getMonth(),dt.getDate(),dt.getHours(),dt.getMinutes(),this.dataZone);dt=new Date(newDT.getTime()+milli);}
if(this.displayZone){newDT=new timezoneJS.Date(dt.getTime(),this.displayZone);dt=new Date(newDT.getFullYear(),newDT.getMonth(),newDT.getDate(),newDT.getHours(),newDT.getMinutes());dt=new Date(dt.getTime()+milli);}
quote.displayDate=dt;}
;STXChart.prototype.setDisplayDates=function(masterData){if(!masterData)return ;for(var i=0;o5i.j1O(i,masterData.length);i++){var quote=masterData[i];if(quote.DT)this.setDisplayDate(quote);}
}
;STXChart.prototype.streamTrade=function(priceData,now,symbol,params){var chart=this.chart;if(!params)params={}
;if(params.chart)chart=params.chart;var price=null,bid=null,ask=null,volume=0;if(typeof priceData=="object"){price=priceData.last;bid=priceData.bid;ask=priceData.ask;volume=priceData.volume;now=new Date(now);}
else{price=arguments[0];volume=arguments[1];now=new Date(arguments[2]);symbol=arguments[3];}
var md=chart.masterData;if(!now){now=new Date();}
var quote;if(!md||!md.length||o5i.W1O(this.layout.interval,"tick")){quote={Date:STX.yyyymmddhhmmssmmm(now),DT:now,Open:price,Close:price,High:price,Low:price,Volume:volume,Bid:bid,Ask:ask}
;this.appendMasterData([quote],chart,params);}
else{quote=STX.clone(md[o5i.q1O(md.length,1)]);var market24=new STX.Market({}
),iter_parms={'begin':quote.DT,'interval':this.layout.interval,'periodicity':this.layout.periodicity,'timeUnit':this.layout.timeUnit,'inZone':this.dataZone,'outZone':this.dataZone}
,iter=market24.newIterator(iter_parms),next=iter.next();if(o5i.E1O(now,next)){if(symbol){if(price||o5i.L1O(price,0)){quote[symbol]=price;}
}
else{if(price||o5i.c1O(price,0)){quote.Close=price;if(o5i.J1O(price,quote.High)||o5i.M1O(quote.High,null))quote.High=price;if(o5i.C1O(price,quote.Low)||o5i.f1O(quote.Low,null))quote.Low=price;if(o5i.N1O(quote.Open,null))quote.Open=price;}
if(volume)quote.Volume+=volume;if(bid||o5i.V1O(bid,0))quote.Bid=bid;if(ask||o5i.Z1O(ask,0))quote.Ask=ask;}
var newParams=STX.clone(params);if(typeof quote.Adj_Close!="undefined"){quote.Adj_Close=quote.Close;}
this.appendMasterData([quote],chart,newParams);}
else{var gaps=[],iter2_parms={'begin':now,'interval':this.layout.interval,'periodicity':this.layout.periodicity,'timeUnit':this.layout.timeUnit,'inZone':this.dataZone,'outZone':this.dataZone}
,iter2=market24.newIterator(iter2_parms);iter2.next();now=iter2.previous();while(o5i.Q1O(next,now)&&this.streamParameters.fillGaps){var gap={Date:STX.yyyymmddhhmmssmmm(next),DT:next,Close:quote.Close,Open:quote.Close,High:quote.Close,Low:quote.Close,Volume:0,Bid:quote.Bid,Ask:quote.Ask}
;gaps.push(gap);next=iter.next();}
if(symbol){var c=this.currentQuote();quote={Date:STX.yyyymmddhhmmssmmm(next),DT:next,Close:c.Close,Volume:0,Bid:c.Bid,Ask:c.Ask}
;quote[symbol]=price;}
else{quote={Date:STX.yyyymmddhhmmssmmm(next),DT:next,Open:price,Close:price,High:price,Low:price,Volume:volume,Bid:bid,Ask:ask}
;}
gaps.push(quote);this.appendMasterData(gaps,chart,params);}
}
}
;STXChart.prototype.appendMasterData=function(appendQuotes,chart,params){var c3o="terD",z6o="Mas",t85="pend";if(!params)params={}
;if(!chart)chart=this.chart;if(o5i.A1O(appendQuotes.constructor,Object))appendQuotes=[appendQuotes];if(this.runPrepend((l6s+t85+z6o+c3o+G8o+y5o),[appendQuotes,chart,params]))return ;if(!appendQuotes||!appendQuotes.length)return ;var dt=appendQuotes[0].DT;if(!dt)dt=STX.strToDateTime(appendQuotes[0].Date);var masterData=chart.masterData,i;if(!masterData||!masterData.length){masterData=chart.masterData=STX.clone(appendQuotes);for(i=0;o5i.P1O(i,masterData.length);i++){if(masterData[i].DT)masterData[i].Date=STX.yyyymmddhhmmssmmm(masterData[i].DT);else masterData[i].DT=STX.strToDateTime(masterData[i].Date);if(masterData[i].Volume&&typeof masterData[i].Volume!==(a35))masterData[i].Volume=parseInt(masterData[i].Volume,10);if(!STXChart.isDailyInterval(this.layout.interval))this.setDisplayDate(masterData[i]);}
}
else{i=o5i.v1O(masterData.length,1);while(o5i.i0i(i,0)){var dt2=masterData[i].DT;if(!dt2)dt2=STX.strToDateTime(masterData[i].Date);if(o5i.u0i(dt2.getTime(),dt.getTime())){var plusOne=0;if(o5i.h0i(dt2.getTime(),dt.getTime()))plusOne=1;var advancing=plusOne;for(var j=0;o5i.d0i(j,appendQuotes.length);j++){if(!plusOne){if(typeof masterData[i+j]!="undefined"){if(!appendQuotes[j].Volume&&masterData[i+j].Volume){appendQuotes[j].Volume=masterData[i+j].Volume;}
if(!params.allowReplaceOHL){if(masterData[i+j].Open){appendQuotes[j].Open=masterData[i+j].Open;}
if(o5i.n0i(masterData[i+j].High,appendQuotes[j].High)){appendQuotes[j].High=masterData[i+j].High;}
if(masterData[i+j].Low&&o5i.B0i(masterData[i+j].Low,appendQuotes[j].Low)){appendQuotes[j].Low=masterData[i+j].Low;}
}
}
else{advancing++;}
for(var field in this.chart.series){if(typeof appendQuotes[j][field]=="undefined"&&typeof masterData[i+j]!="undefined")appendQuotes[j][field]=masterData[i+j][field];}
for(var p in this.panels){if(this.panels[p].studyQuotes){for(var sq in this.panels[p].studyQuotes){if(!this.panels[p].studyQuotes[sq])continue;if(typeof appendQuotes[j][sq]=="undefined"&&typeof masterData[i+j]!="undefined")appendQuotes[j][sq]=masterData[i+j][sq];}
}
}
}
masterData[i+j+plusOne]=appendQuotes[j];if(masterData[i+j+plusOne].DT)masterData[i+j+plusOne].Date=STX.yyyymmddhhmmssmmm(masterData[i+j+plusOne].DT);else masterData[i+j+plusOne].DT=STX.strToDateTime(masterData[i+j+plusOne].Date);if(masterData[i+j+plusOne].Volume&&typeof masterData[i+j+plusOne].Volume!=="number")masterData[i+j+plusOne].Volume=parseInt(masterData[i+j+plusOne].Volume,10);if(!STXChart.isDailyInterval(this.layout.interval))this.setDisplayDate(this.masterData[i+j+plusOne]);var dontAdvanceScroll=o5i.e0i(chart.scroll,chart.maxTicks+1)||chart.lockScroll||chart.spanLock;if(dontAdvanceScroll&&advancing){chart.scroll+=advancing;this.grabStartScrollX+=advancing;}
}
break;}
i--;}
for(i in this.plugins){var plugin=this.plugins[i];if(plugin.display){if(plugin.appendMasterData)plugin.appendMasterData(this,appendQuotes,chart);}
}
}
if(!this.masterData||!this.masterData.length)this.masterData=masterData;if(!params.noCreateDataSet){var sp=this.streamParameters;if(++sp.count>sp.maxTicks||params.bypassGovernor){clearTimeout(sp.timeout);this.createDataSet();this.draw();this.updateChartAccessories();sp.count=0;sp.timeout=-1;}
else{var self=this;if(sp.timeout==-1){sp.timeout=setTimeout(function(){self.createDataSet();self.draw();self.updateChartAccessories();self.streamParameters.count=0;self.streamParameters.timeout=-1;}
,sp.maxWait);}
}
}
this.runAppend("appendMasterData",arguments);}
;STXChart.prototype.displayAll=function(params,cb){var g5o="mon",chart=this.chart;if(params&&params.chart)chart=params.chart;var self=this;function displayTheResults(){if(!chart.masterData.length)return ;var p=STX.clone(params);p.dtLeft=chart.masterData[0].DT;p.dtRight=chart.masterData[o5i.S0i(chart.masterData.length,1)].DT;self.setRange(p);if(cb)cb();}
function loadAllTheData(){self.quoteDriver.loadAll(chart,displayTheResults);}
if(!this.quoteDriver){displayTheResults();return ;}
if(this.dontRoll&&o5i.F0i(this.layout.interval,"month")){this.setPeriodicityV2(1,(g5o+z2o+N7o),loadAllTheData);}
else if(!STXChart.isDailyInterval(this.layout.interval)){this.setPeriodicityV2(1,"day",loadAllTheData);}
else{if(chart.moreAvailable){loadAllTheData();}
else{displayTheResults();}
}
}
;STXChart.prototype.setRange=function(params,cb){var F4s="seco",S1s="sec",w6o="and",D6o="w_c",v7o="lo",q2o="ol",R7o="ed_b",t1s="olo";if(STX.isEmpty(params)){params={dtLeft:arguments[0],dtRight:arguments[1],padding:arguments[2],chart:arguments[3],goIntoFuture:false}
;cb=arguments[4];}
if(params.periodicity){if(o5i.R0i(params.periodicity.interval,'tick'))params.periodicity=null;if(!params.periodicity.period)params.periodicity.period=1;}
if(!params.chart)params.chart=this.chart;if(typeof params.padding=="undefined"){params.padding=this.preferences.whitespace;}
var dontChangePeriodicity=false,chart=params.chart,lt=params.dtLeft,rt=new Date();if(params.dtRight)rt=params.dtRight;if(!lt){var iter=this.standardMarketIterator(rt,null,chart);lt=iter.previous(chart.maxTicks);if(!params.periodicity)dontChangePeriodicity=true;}
var self=this;function showTheRange(){if(!chart.dataSet||o5i.p0i(chart.dataSet.length,0)){if(cb)cb();return ;}
var l=0,r=0;if(o5i.z0i(lt.getTime(),chart.dataSet[0].DT.getTime())||params.goIntoPast){l=self.tickFromDate(lt,chart,null,true);}
else{l=0;}
if(o5i.m0i(rt.getTime(),chart.dataSet[chart.dataSet.length-1].DT.getTime())||params.goIntoFuture){r=self.tickFromDate(rt,chart);}
else{r=o5i.X0i(chart.dataSet.length,1);}
var ticks=o5i.G0i(r,l,1);if(o5i.P0i(ticks,1)){if(cb)cb();return ;}
self.setCandleWidth(o5i.v0i((self.chart.width-params.padding),ticks),chart);chart.scroll=(o5i.i8i(chart.dataSet.length,l,1));self.draw();self.changeOccurred("layout");if(cb)cb();}
var loadMoreCount=0;function loadTheRange(err){var Z7s="ogic",r95="ity",v95="erio",m05="eck",U95="opp",m4s="erver",a95="ro",f3o=") ",t7o="ds",v6s="oa",x95="any",T5o="oo",j85="(): ",o1s="tRan",C7o="Chart",x7o="ST";if(err){if(cb)cb(err);return ;}
loadMoreCount++;if(o5i.W8i(loadMoreCount,10)){console.log((x7o+O5o+C7o+S2o+H4o+n3o+o1s+o5i.x1o+n3o+j85+k6s+T5o+F3o+X6o+x95+F3o+o5i.p6o+v6s+t7o+o0o+H6o+h6o+f3o+j1o+a95+X6o+F3o+H4o+m4s+c05+z6s+z2o+U95+G7o+n6o+o5i.x1o+c05+L85+N7o+m05+F3o+o5i.N4o+v95+o5i.U8o+O1s+r95+F3o+o5i.p6o+Z7s+S2o));showTheRange();return ;}
if(chart.moreAvailable&&o5i.q8i(chart.masterData[0].DT,lt)){self.quoteDriver.checkLoadMore(chart,true,false,function(err){if(!err)loadTheRange();}
);}
else{showTheRange();}
}
function estimateMaxTicks(rtMS,ltMS,interval,period,dontRoll){var s5o="con",ticks=0,ms=o5i.E8i(rtMS,ltMS);if(STXChart.isDailyInterval(interval)){if(o5i.L8i(interval,"month")){ticks=o5i.c8i((ms/STX.MONTH),period);}
else if(o5i.J8i(interval,"week")){ticks=o5i.M8i((ms/STX.WEEK),period);}
else{ticks=o5i.C8i((ms/STX.DAY),period);}
}
else{if(!isNaN(interval))ticks=o5i.f8i((ms/(STX.MINUTE*interval)),period);else{if(o5i.N8i(interval,(X6o+G7o+o5i.p6o+o5i.p6o+G7o+H4o+n3o+s5o+o5i.U8o)))ticks=o5i.V8i(ms,period);else if(o5i.Z8i(interval,"second"))ticks=o5i.Q8i((ms/STX.SECOND),period);else if(o5i.A8i(interval,"hour"))ticks=o5i.P8i((ms/STX.HOUR),period);else ticks=o5i.v8i((ms/STX.MINUTE),period);}
}
return Math.round(ticks);}
if(this.quoteDriver){var intervalToUse,periodToUse,timeUnitToUse;if(dontChangePeriodicity){intervalToUse=this.layout.interval;timeUnitToUse=this.layout.timeUnit;periodToUse=this.layout.period;}
else if(params.periodicity){intervalToUse=params.periodicity.interval;timeUnitToUse=params.periodicity.timeUnit;periodToUse=params.periodicity.period;}
else{var rangeInMS=o5i.i3i(rt.getTime(),lt.getTime());if(params.rangePeriodicityMap){var periodicityMap=params.rangePeriodicityMap,entryToUse=null;for(var i=0;o5i.u3i(i,periodicityMap.length);i++){var mapEntry=periodicityMap[i];if(o5i.h3i(rangeInMS,mapEntry.range)){entryToUse=mapEntry;break;}
}
intervalToUse=entryToUse.interval;periodToUse=entryToUse.periodicity;timeUnitToUse=entryToUse.timeUnit;}
else{var pixelsPerBar=2;switch(this.layout.chartType){case "line":case "colored_line":case "mountain":case "colored_mountain":case "baseline_delta":case "baseline_delta_mountain":case "wave":pixelsPerBar=2;break;case "candle":case "bar":case (L3o+t1s+h4o+R7o+G8o+h4o):case (N7o+q2o+v7o+D6o+w6o+o5i.p6o+n3o):case "volume_candle":case "scatterplot":pixelsPerBar=5;break;}
if(params.pixelsPerBar)pixelsPerBar=params.pixelsPerBar;var numBars=o5i.d3i(chart.width,pixelsPerBar),possibleIntervals=[{interval:5,ms:o5i.n3i(STX.MINUTE,5)}
,{interval:30,ms:o5i.B3i(STX.MINUTE,30)}
,{interval:"day",ms:STX.DAY}
,{interval:"month",ms:STX.MONTH}
,{interval:"year",ms:Number.MAX_VALUE}
],numBarsLastInterval;for(var j=0;o5i.e3i(j,possibleIntervals.length);j++){var numBarsThisInterval=o5i.S3i(rangeInMS,possibleIntervals[j].ms);if(o5i.F3i(numBarsThisInterval,numBars)){if(possibleIntervals[o5i.R3i(j,1)]){intervalToUse=possibleIntervals[o5i.p3i(j,1)].interval;periodToUse=Math.ceil(o5i.z3i(numBarsLastInterval,numBars));}
else{intervalToUse=possibleIntervals[j].interval;periodToUse=1;}
break;}
numBarsLastInterval=numBarsThisInterval;}
}
}
this.chart.scroll=this.chart.maxTicks=estimateMaxTicks(rt.getTime(),lt.getTime(),intervalToUse,periodToUse,this.dontRoll);this.layout.candleWidth=o5i.m3i(this.chart.width,this.chart.maxTicks);var needDifferentData=o5i.X3i(this.layout.timeUnit,timeUnitToUse)&&(o5i.G3i(timeUnitToUse,(S1s+a6o+C35+H4o))||o5i.k3i(timeUnitToUse,"milliseconds"));if(!needDifferentData&&(o5i.r3i(STXChart.isDailyInterval(this.layout.interval),STXChart.isDailyInterval(intervalToUse))))needDifferentData=true;else if(!STXChart.isDailyInterval(this.layout.interval)&&o5i.U3i(this.layout.interval,intervalToUse))needDifferentData=true;if(!this.chart.masterData||needDifferentData){this.layout.interval=intervalToUse;this.layout.periodicity=periodToUse;this.layout.timeUnit=timeUnitToUse;if(!this.layout.timeUnit){if(STXChart.isDailyInterval(this.layout.interval))this.layout.timeUnit=null;else if(o5i.D9i(this.layout.interval,(F4s+C35)))this.layout.timeUnit="second";else this.layout.timeUnit="minute";}
var qparams={symbol:chart.symbol,symbolObject:chart.symbolObject,chart:chart}
;if(!this.displayInitialized)qparams.initializeChart=true;this.quoteDriver.newChart(qparams,loadTheRange);}
else{if(o5i.t9i(this.layout.interval,intervalToUse)||o5i.I9i(this.layout.periodicity,periodToUse)){this.layout.interval=intervalToUse;this.layout.periodicity=periodToUse;this.createDataSet();}
loadTheRange();}
}
else{showTheRange();}
}
;STXChart.prototype.setSpan=function(params,cb){var l85=59,A1o=23,P5o='today',b55="today",B5o='ytd',i35="ytd",period=arguments[o5i.t6s],interval=arguments[o5i.D6s],padding=arguments[o5i.U4s],chart=arguments[o5i.v4s],useMarketTZ=arguments[o5i.E6s];if(typeof params==R8o){period=params.period?params.period:(params.multiplier?params.multiplier:o5i.D6s);interval=params.interval?params.interval:(params.base?params.base:(params.span?params.span:params.period));padding=params.padding;chart=params.chart;useMarketTZ=params.useMarketTZ;}
else{params={period:period,interval:interval,padding:padding,chart:chart,useMarketTZ:useMarketTZ}
;cb=arguments[o5i.d6s];}
if(!params.padding)params.padding=o5i.t6s;if(!chart)chart=this.chart;interval=interval.toLowerCase();if(o5i.b9i(interval,Q35)){this.displayAll(params,cb);return ;}
var iterInterval=interval;if(o5i.x9i(interval,k9o)){iterInterval=R6s;period*=f05;}
else if(o5i.K9i(interval,i35)){iterInterval=G1s;}
else if(o5i.H9i(interval,(z2o+a6o+G1s))){iterInterval=G1s;}
var parms_copy=STX.shallowClone(params);parms_copy.goIntoFuture=x35;var iter_parms={'begin':new Date(),'interval':iterInterval,'periodicity':period,'inZone':this.dataZone,'outZone':this.dataZone}
,iter=chart.market.newIterator(iter_parms),leftDT=new Date();if(o5i.a9i(interval,(B5o))){leftDT.setMonth(o5i.t6s);leftDT.setDate(o5i.D6s);leftDT.setHours(o5i.t6s);leftDT.setMinutes(o5i.t6s);leftDT.setSeconds(o5i.t6s);leftDT.setMilliseconds(o5i.t6s);}
else if(o5i.T9i(interval,b55)){iter.next();leftDT=iter.previous();}
else{leftDT=iter.previous();}
parms_copy.dtLeft=leftDT;if(o5i.Y9i(interval,P5o)){parms_copy.goIntoFuture=L7o;parms_copy.dtRight=new Date(leftDT);var closeHour=iter.market.zclose_hour,closeMinute=iter.market.zclose_minute;parms_copy.dtRight.setHours(closeHour?closeHour:A1o);parms_copy.dtRight.setMinutes(closeHour?closeMinute:l85);parms_copy.dtRight.setSeconds(o5i.t6s);parms_copy.dtLeft.setHours(iter.market.zopen_hour);parms_copy.dtLeft.setMinutes(iter.market.zopen_minute);parms_copy.dtLeft.setSeconds(o5i.t6s);}
if(parms_copy.maintainPeriodicity){parms_copy.periodicity={}
;parms_copy.periodicity.interval=this.layout.interval;parms_copy.periodicity.period=this.layout.periodicity;}
chart.spanLock=x35;var self=this;this.setRange(parms_copy,function(err){if(!params.maintainPeriodicity){self.layout.setSpan={base:params.base,multiplier:params.multiplier}
;self.changeOccurred((o5i.p6o+G8o+e95+a6o+o5i.m2o+z2o));}
if(o5i.l9i(interval,i35)||o5i.y9i(interval,b55)){chart.spanLock=L7o;}
if(cb)cb(err);}
);}
;STXChart.prototype.getSpanCandleWidth=function(span){var arr=span.split(",");if(o5i.w9i(arr.length,2))return ;var num=parseFloat(arr[0]),now=new Date(),prev=new Date();if(o5i.o9i(arr[1],"year")){prev.setFullYear(o5i.g9i(prev.getFullYear(),num));}
else if(o5i.s9i(arr[1],"month")){prev.setMonth(o5i.O9i(prev.getMonth(),num));}
else if(o5i.j5i(arr[1],"day")){prev.setDate(o5i.W5i(prev.getDate(),num));}
else if(o5i.q5i(arr[1],"week")){prev.setDate(o5i.E5i(prev.getDate(),(7*num)));}
var diff=o5i.L5i((now.getTime()-prev.getTime()),1000,60,60,24);diff=o5i.J5i(diff,5,7);var candleWidth=o5i.a5i(this.chart.width,diff);return candleWidth;}
;STXChart.prototype.setMaxTicks=function(ticks,params){if(!params)params={}
;ticks=Math.round(ticks);if(o5i.T5i(ticks,o5i.U4s))ticks=o5i.U4s;var padding=params.padding;if(!padding)padding=o5i.t6s;this.layout.candleWidth=o5i.Y5i((this.chart.width-padding),ticks);if(!this.layout.candleWidth)this.layout.candleWidth=o5i.B6s;this.chart.maxTicks=Math.round(o5i.l5i((this.chart.width/this.layout.candleWidth),0.499));if(params.padding||o5i.y5i(params.padding,o5i.t6s))this.chart.scroll=ticks+o5i.D6s;}
;STXChart.prototype.construct=function(){this.stackPanel(p8o,p8o,o5i.D6s);this.adjustPanelPositions();this.chart.panel=this.panels[this.chart.name];this.cx=o5i.t6s;this.cy=o5i.t6s;this.micropixels=o5i.t6s;this.chart.panel.subholder.appendChild(this.controls.home);this.callbackListeners={}
;}
;STXChart.prototype.addEventListener=function(type,cb){if(!type)type=Z7o;var arr=this.callbackListeners[type];if(!arr)this.callbackListeners[type]=arr=[];arr.push(cb);return {type:type,cb:cb}
;}
;STXChart.prototype.removeEventListener=function(obj,cb){if(typeof obj!="object"){obj={type:type,cb:cb}
;}
if(!obj.type)obj.type="*";var arr=this.callbackListeners[obj.type];if(!arr)return ;for(var i=0;o5i.w5i(i,arr.length);i++){if(o5i.G5i(arr[i],obj.cb)){arr.splice(i);if(!arr.length)obj[obj.type]=null;return ;}
}
}
;STXChart.prototype.dispatch=function(type,data){if(this.callbacks[type])(this.callbacks[type])(data);var arr=this.callbackListeners[type];if(arr){for(var i=0;o5i.k5i(i,arr.length);i++)(arr[i])(data);}
arr=this.callbackListeners["*"];if(arr){for(var j=0;o5i.r5i(j,arr.length);j++)(arr[j])(data);}
}
;STXChart.prototype.deleteYAxisIfUnused=function(panel,yAxis){if(!yAxis)return ;if(o5i.U5i(yAxis,panel.yAxis))return ;for(var r in this.chart.seriesRenderers){var renderer=this.chart.seriesRenderers[r];if(o5i.D2i(renderer.params.yAxis,yAxis)){if(o5i.t2i(renderer.seriesParams.length,0))return ;}
}
var i;for(i=0;o5i.I2i(i,panel.yaxisLHS.length);i++){if(o5i.b2i(panel.yaxisLHS[i],yAxis))panel.yaxisLHS.splice(i,1);}
for(i=1;o5i.x2i(i,panel.yaxisRHS.length);i++){if(o5i.K2i(panel.yaxisRHS[i],yAxis))panel.yaxisRHS.splice(i,1);}
this.resizeCanvas();this.adjustPanelPositions();}
;STXChart.prototype.addYAxis=function(panel,yAxis){if(!yAxis)return ;if(!panel.yaxisLHS){panel.yaxisLHS=[];panel.yaxisRHS=[];if(o5i.H2i(panel.yAxis.position,"right"))panel.yaxisRHS.push(panel.yAxis);else panel.yaxisLHS.push(panel.yAxis);}
var arr=panel.yaxisLHS.concat(panel.yaxisRHS);for(var i=0;o5i.a2i(i,arr.length);i++){if(o5i.T2i(arr[i],yAxis))return ;}
if(o5i.Y2i(yAxis.position,"left")){panel.yaxisLHS.unshift(yAxis);}
else{yAxis.position="right";panel.yaxisRHS.push(yAxis);}
this.preAdjustScroll();this.resizeCanvas();this.adjustPanelPositions();this.postAdjustScroll();}
;STXChart.prototype.calculateYAxisPositions=function(){var j6s="ght",c6o="ri",panelsInOrder=[];for(var chartName in this.charts){panelsInOrder.push(chartName);}
for(var panelName in this.panels){var p=this.panels[panelName];if(o5i.l2i(p.name,p.chart.name))continue;panelsInOrder.push(panelName);}
for(var j=0;o5i.y2i(j,panelsInOrder.length);j++){var panel=this.panels[panelsInOrder[j]];if(!panel)continue;var isAChart=o5i.w2i(panel.name,panel.chart.name);if(!panel.yaxisLHS){panel.yaxisLHS=[];panel.yaxisRHS=[];if(o5i.o2i(panel.name,panel.chart.name)||panel.yAxis.position){if(o5i.g2i(panel.yAxis.position,"left"))panel.yaxisLHS.push(panel.yAxis);else panel.yaxisRHS.push(panel.yAxis);}
else{var position=panel.chart.panel.yAxis.position;if(!position||o5i.s2i(position,(c6o+j6s)))panel.yaxisRHS.push(panel.yAxis);else panel.yaxisLHS.push(panel.yAxis);}
}
if(!panel.yAxis.width)panel.yAxis.width=this.yaxisWidth;panel.yaxisTotalWidthRight=0;var i,yaxis;panel.yaxisTotalWidthLeft=0;for(i=0;o5i.O2i(i,panel.yaxisLHS.length);i++){yaxis=panel.yaxisLHS[i];panel.yaxisTotalWidthLeft+=yaxis.width;yaxis.justifyRight=(o5i.j4i(yaxis.justifyRight,null)?panel.chart.yAxis.justifyRight:yaxis.justifyRight);if(o5i.W4i(yaxis.justifyRight,null))yaxis.justifyRight=true;}
for(i=0;o5i.q4i(i,panel.yaxisRHS.length);i++){yaxis=panel.yaxisRHS[i];panel.yaxisTotalWidthRight+=yaxis.width;}
var x=0;for(i=0;o5i.E4i(i,panel.yaxisLHS.length);i++){yaxis=panel.yaxisLHS[i];yaxis.left=x;x+=yaxis.width;}
x=o5i.L4i(this.width,panel.yaxisTotalWidthRight);for(i=0;o5i.c4i(i,panel.yaxisRHS.length);i++){yaxis=panel.yaxisRHS[i];yaxis.left=x;x+=yaxis.width;}
if(typeof this.yaxisLeft!="undefined")panel.chart.yaxisPaddingRight=this.yaxisLeft;panel.yaxisCalculatedPaddingRight=panel.yaxisTotalWidthRight;if(panel.chart.yaxisPaddingRight||o5i.J4i(panel.chart.yaxisPaddingRight,0))panel.yaxisCalculatedPaddingRight=panel.chart.yaxisPaddingRight;panel.yaxisCalculatedPaddingLeft=panel.yaxisTotalWidthLeft;if(panel.chart.yaxisPaddingLeft||o5i.M4i(panel.chart.yaxisPaddingLeft,0))panel.yaxisCalculatedPaddingLeft=panel.chart.yaxisPaddingLeft;if(isAChart){panel.left=panel.yaxisCalculatedPaddingLeft;panel.right=o5i.C4i(this.width,panel.yaxisCalculatedPaddingRight);}
else{panel.left=panel.chart.panel.left;panel.right=panel.chart.panel.right;}
panel.width=o5i.f4i(panel.right,panel.left);panel.handle.style.left=panel.left+"px";panel.handle.style.width=panel.width+"px";if(isAChart){panel.chart.left=panel.left;panel.chart.right=panel.right;panel.chart.width=o5i.N4i(panel.right,panel.left);}
}
}
;STXChart.prototype.initializeChart=function(container){var w1o="bso",n9o="Ch",x1s="ia";if(this.runPrepend((G7o+n6o+G7o+z2o+x1s+y4o+h95+n3o+n9o+G8o+h4o+z2o),arguments))return ;if(!this.chart.symbolObject.symbol)this.chart.symbolObject.symbol=this.chart.symbol;if(this.locale)this.setLocale(this.locale);if(!this.displayZone&&STXChart.defaultDisplayTimeZone){this.setTimeZone(null,STXChart.defaultDisplayTimeZone);}
this.calculateYAxisPositions();this.micropixels=0;if(container)this.chart.container=container;this.chart.container.stx=this;if(!this.chart.container.STXRegistered){this.chart.container.STXRegistered=true;STXChart.registeredContainers.push(this.chart.container);}
if(STX.isSurface){if(!this.gesture){this.gesture=new MSGesture();if(this.manageTouchAndMouse){this.gesture.target=this.chart.container;}
else{this.gesture.target=document.body;}
this.gesturePointerId=null;}
}
this.registerHTMLElements();if(this.chart.canvas&&document.createElement("canvas").getContext){if(!this.chart.canvas.id){this.chart.container.removeChild(this.chart.canvas);this.chart.canvas=null;}
if(this.chart.tempCanvas&&!this.chart.tempCanvas.id){this.chart.container.removeChild(this.chart.tempCanvas);this.chart.tempCanvas=null;}
if(this.floatCanvas&&!this.floatCanvas.id){this.chart.container.removeChild(this.floatCanvas);this.floatCanvas=null;}
}
else{if(o5i.V4i(this.layout.candleWidth,this.minimumCandleWidth))this.layout.candleWidth=this.minimumCandleWidth;if(o5i.Z4i(this.layout.candleWidth,50))this.layout.candleWidth=8;}
if(!this.chart.canvas)this.chart.canvas=document.createElement("canvas");if(!this.chart.canvas.getContext){this.chart.canvas=this.chart.container.querySelectorAll("#ie8canvas")[0];if(!this.chart.canvas.getContext){if(window.G_vmlCanvasManager)G_vmlCanvasManager.initElement(this.chart.canvas);}
this.chart.canvas.style.display="block";}
else{this.chart.container.appendChild(this.chart.canvas);}
this.chart.canvas.style.position="absolute";this.chart.canvas.style.left="0px";this.chart.context=this.chart.canvas.getContext("2d");this.chart.canvas.context=this.chart.context;this.chart.context.lineWidth=1;if(!this.chart.tempCanvas)this.chart.tempCanvas=document.createElement("canvas");if(!this.chart.tempCanvas.getContext){this.chart.tempCanvas=this.chart.container.querySelectorAll("#ie8canvasTemp")[0];if(!this.chart.tempCanvas.getContext){if(window.G_vmlCanvasManager)G_vmlCanvasManager.initElement(this.chart.tempCanvas);}
this.chart.tempCanvas.style.display="block";}
else{this.chart.container.appendChild(this.chart.tempCanvas);}
this.chart.tempCanvas.style.position=(G8o+w1o+o5i.p6o+o5i.m2o+O2o);this.chart.tempCanvas.style.left="0px";this.chart.tempCanvas.context=this.chart.tempCanvas.getContext("2d");this.chart.tempCanvas.context.lineWidth=1;if(!this.floatCanvas)this.floatCanvas=document.createElement("canvas");if(!this.floatCanvas.getContext){this.floatCanvas=this.chart.container.querySelectorAll("#ie8canvasFloat")[0];if(!this.floatCanvas.getContext){if(window.G_vmlCanvasManager)G_vmlCanvasManager.initElement(this.chart.tempCanvas);}
this.floatCanvas.style.display="block";}
else{this.chart.container.appendChild(this.floatCanvas);}
this.floatCanvas.style.position="absolute";this.floatCanvas.style.left="0px";this.floatCanvas.context=this.floatCanvas.getContext("2d");this.floatCanvas.context.lineWidth=1;this.resizeCanvas();if(STX.isAndroid){this.chart.tempCanvas.ontouchstart=function(e){if(e.preventDefault)e.preventDefault();}
;this.floatCanvas.ontouchstart=function(e){if(e.preventDefault)e.preventDefault();}
;}
this.panels.chart.display=this.chart.symbol;if(this.chart.symbolDisplay)this.panels.chart.display=this.chart.symbolDisplay;this.adjustPanelPositions();this.chart.panel=this.panels[this.chart.name];this.calculateYAxisMargins(this.chart.panel.yAxis);this.initialWhitespace=this.preferences.whitespace;if(this.chart.dataSet&&o5i.Q4i(this.chart.dataSet.length,0)){this.chart.scroll=Math.floor(o5i.A4i(this.chart.width,this.layout.candleWidth));var wsInTicks=Math.round(o5i.P4i(this.preferences.whitespace,this.layout.candleWidth));this.chart.scroll-=wsInTicks;}
if(STX.touchDevice){var overlayTrashCan=this.chart.container.querySelectorAll("#overlayTrashCan")[0],vectorTrashCan=this.chart.container.querySelectorAll("#vectorTrashCan")[0];if(overlayTrashCan)overlayTrashCan.onmspointerup=overlayTrashCan.ontouchend=(function(self){return function(e){self.deleteHighlighted(true);}
;}
)(this);if(vectorTrashCan)vectorTrashCan.onmspointerup=vectorTrashCan.ontouchend=(function(self){return function(e){self.deleteHighlighted(true);}
;}
)(this);}
if(this.manageTouchAndMouse){this.registerTouchAndMouseEvents();}
this.chart.container.onmouseout=(function(self){return function(e){self.handleMouseOut(e);}
;}
)(this);if(this.controls.chartControls){this.controls.chartControls.style.display="block";}
this.abortDrawings();this.undoStamps=[];for(var panelName in this.panels){var panel=this.panels[panelName];if(panel.markerHolder){this.chart.container.removeChild(panel.markerHolder);panel.markerHolder=null;}
}
for(var i in this.plugins){var plugin=this.plugins[i];if(plugin.display){if(plugin.initializeChart)plugin.initializeChart(this);}
}
if(!this.resizeListenerInitialized){this.resizeListenerInitialized=true;var closure=function(self){return function(e){self.resizeChart();}
;}
;if(window.attachEvent){window.attachEvent("onresize",closure(this));}
else{var c=closure(this);window.addEventListener("resize",c,true);this.eventListeners.push({"element":window,"event":"resize","function":c}
);}
}
if(this.chart.baseline.userLevel)this.chart.baseline.userLevel=null;this.setResizeTimer(this.resizeDetectMS);this.runAppend("initializeChart",arguments);}
;STXChart.prototype.destroy=function(){this.setResizeTimer(0);if(this.quoteDriver)this.quoteDriver.die();this.styles={}
;for(var i=0;o5i.v4i(i,this.eventListeners.length);i++){var listener=this.eventListeners[i];listener.element.removeEventListener(listener.event,listener["function"]);}
}
;STXChart.prototype.handleMouseOut=function(e){var v6o="ouseO",K05="eM",B95="han",c1o="handleMouseOut";e=e||window.event;if(!STX.withinElement(this.chart.container,e.pageX,e.pageY)){if(this.runPrepend(c1o,arguments))return ;this.undisplayCrosshairs();this.grabbingScreen=x35;this.touches=[];this.touching=x35;if(this.activeDrawing&&this.userPointerDown){this.userPointerDown=x35;this.drawingLine=x35;var cy=this.backOutY(e.pageY),cx=this.backOutX(e.pageX);this.drawingClick(this.currentPanel,cx,cy);}
STXChart.insideChart=x35;this.displaySticky();this.runAppend((B95+o5i.U8o+o5i.p6o+K05+v6o+o5i.m2o+z2o),arguments);}
}
;STXChart.prototype.registerTouchAndMouseEvents=function(){var f6s="DOMMouseScroll",D1o="mousewheel",k4o="onwheel",o6o="wheel",V7o="onMouseOut",O3o="ut",r85="seO",M2o="onMouseOver",Q6o="pointerup",w7o="pointermove",i4o="pointerdown",j1s="MSPointerUp",h7o="MSPointerMove",P0o="MSGestureEnd",H1o="MSGestureChange",p95="MSGestureStart",G2o="Po",h7s="M",n7o="#zoomIn",G0o="#home";if(this.touchAndMouseEventsRegistered)return ;this.touchAndMouseEventsRegistered=L7o;var el=this.chart.container,homeEl=$$$(G0o,this.controls.chartControls),zoomInEl=$$$(n7o,this.controls.chartControls),zoomOutEl=$$$(U5o,this.controls.chartControls);if(!STX.touchDevice){el.addEventListener(d9o,(function(self){return function(e){self.mousemove(e);}
;}
)(this),x35);el.addEventListener(R3o,(function(self){return function(e){self.mousedown(e);}
;}
)(this),x35);el.addEventListener(v85,(function(self){return function(e){self.mouseup(e);}
;}
)(this),x35);}
else{if(STX.isSurface){el.addEventListener((X05+t2o),(function(self){return function(e){self.msMouseMoveProxy(e);}
;}
)(this),x35);el.addEventListener((X6o+a6o+q1s+e3o),(function(self){return function(e){self.msMouseDownProxy(e);}
;}
)(this),x35);el.addEventListener(v85,(function(self){return function(e){self.msMouseUpProxy(e);}
;}
)(this),x35);if(window.navigator.msPointerEnabled){el.addEventListener((h7s+z6s+G2o+G7o+n6o+z2o+a3o+Y0o+c2o),(function(self){return function(e){return self.startProxy(e);}
;}
)(this),x35);el.addEventListener(p95,(function(self){return function(e){self.gestureInEffect=L7o;}
;}
)(this),x35);el.addEventListener(H1o,(function(self){return function(e){return self.touchmove(e);}
;}
)(this),x35);el.addEventListener(P0o,(function(self){return function(e){self.gestureInEffect=x35;return self.touchend(e);}
;}
)(this),x35);el.addEventListener(h7o,(function(self){return function(e){self.moveProxy(e);}
;}
)(this),x35);el.addEventListener(j1s,(function(self){return function(e){return self.endProxy(e);}
;}
)(this),x35);}
else{el.addEventListener(i4o,(function(self){return function(e){return self.startProxy(e);}
;}
)(this),x35);el.addEventListener(p95,(function(self){return function(e){self.gestureInEffect=L7o;}
;}
)(this),x35);el.addEventListener(H1o,(function(self){return function(e){return self.touchmove(e);}
;}
)(this),x35);el.addEventListener(P0o,(function(self){return function(e){self.gestureInEffect=x35;return self.touchend(e);}
;}
)(this),x35);el.addEventListener(w7o,(function(self){return function(e){self.moveProxy(e);}
;}
)(this),x35);el.addEventListener(Q6o,(function(self){return function(e){return self.endProxy(e);}
;}
)(this),x35);}
}
else{if(!STX.isAndroid&&!STX.ipad&&!STX.iphone){el.addEventListener(d9o,(function(self){return function(e){self.iosMouseMoveProxy(e);}
;}
)(this),x35);el.addEventListener(R3o,(function(self){return function(e){self.iosMouseDownProxy(e);}
;}
)(this),x35);el.addEventListener(v85,(function(self){return function(e){self.iosMouseUpProxy(e);}
;}
)(this),x35);}
el.addEventListener(P2o,(function(self){return function(e){self.touchstart(e);}
;}
)(this),x35);el.addEventListener(u0o,(function(self){return function(e){self.touchmove(e);}
;}
)(this),x35);el.addEventListener(c9o,(function(self){return function(e){self.touchend(e);}
;}
)(this),x35);if(zoomInEl){zoomInEl.removeAttribute(M2o);zoomInEl.removeAttribute((a6o+n6o+h7s+W9o+r85+O3o));}
if(zoomOutEl){zoomOutEl.removeAttribute(M2o);zoomOutEl.removeAttribute(V7o);}
}
}
var wheelEvent=(o5i.i6i(o6o,document.createElement(R7s))||o5i.u6i(k4o,document))?o6o:o5i.h6i(document.onmousewheel,undefined)?D1o:f6s;el.addEventListener(wheelEvent,(function(self,wheelEvent){return function(e){self.mouseWheel(e,wheelEvent);}
;}
)(this,wheelEvent),x35);}
;STXChart.prototype.rightClickHighlighted=function(){var k6o="rightClickHighlighted";if(this.runPrepend(k6o,arguments))return ;this.deleteHighlighted(L7o);this.runAppend(k6o,arguments);}
;STXChart.prototype.deleteHighlighted=function(callRightClick){if(this.runPrepend("deleteHighlighted",arguments))return ;this.cancelTouchSingleClick=true;STX.clearCanvas(this.chart.tempCanvas,this);for(var i=o5i.d6i(this.drawingObjects.length,1);o5i.n6i(i,0);i--){var drawing=this.drawingObjects[i];if(drawing.highlighted&&!drawing.permanent){var dontDeleteMe=drawing.abort();if(!dontDeleteMe){var before=STX.shallowClone(this.drawingObjects);this.drawingObjects.splice(i,1);this.undoStamp(before,STX.shallowClone(this.drawingObjects));}
this.changeOccurred("vector");}
}
for(var name in this.overlays){var o=this.overlays[name];if(o.highlight&&!o.permanent){if(callRightClick)this.rightClickOverlay(name);else this.removeOverlay(name);}
}
var chart=this.currentPanel.chart;for(var r in chart.seriesRenderers){var renderer=chart.seriesRenderers[r];for(var sp=o5i.B6i(renderer.seriesParams.length,1);o5i.e6i(sp,0);sp--){var series=renderer.seriesParams[sp];if(series.highlight&&!series.permanent){renderer.removeSeries(series.field);}
}
}
var comparing=false;for(var s in chart.series){if(chart.series[s].parameters.isComparison)comparing=true;}
if(!comparing)this.setComparison(false,chart);this.draw();if(this.controls.mSticky){this.controls.mSticky.style.display="none";this.controls.mSticky.children[0].innerHTML="";}
this.runAppend("deleteHighlighted",arguments);}
;STXChart.prototype.panelExists=function(name){for(var p in this.panels){var panel=this.panels[p];if(o5i.S6i(panel.name,name))return L7o;}
return x35;}
;STXChart.prototype.hideCrosshairs=function(){this.displayCrosshairs=x35;}
;STXChart.prototype.showCrosshairs=function(){this.displayCrosshairs=L7o;}
;STXChart.prototype.grabHandle=function(panel){var x55="grabHandle";if(this.runPrepend(x55,arguments))return ;if(!panel)return ;STXChart.crosshairY=panel.top+this.top;STXChart.resizingPanel=panel;this.drawTemporaryPanel();STX.appendClassName(panel.handle,t4o);this.runAppend(x55,arguments);}
;STXChart.prototype.releaseHandle=function(){var r5o="releaseHandle";if(this.runPrepend(r5o,arguments))return ;STX.clearCanvas(this.chart.tempCanvas,this);this.resizePanels();if(STXChart.resizingPanel)STX.unappendClassName(STXChart.resizingPanel.handle,t4o);STXChart.resizingPanel=o5i.d7o;this.runAppend(r5o,arguments);}
;STXChart.prototype.storePanels=function(){if(!this.layout)this.layout={}
;var view=this.layout;view.panels={}
;for(var p in this.panels){var panel=this.panels[p];view.panels[panel.name]={"percent":panel.percent,"display":panel.display}
;}
}
;STXChart.prototype.savePanels=function(saveLayout){var F95="la";this.storePanels();if(o5i.F6i(saveLayout,x35))this.changeOccurred((F95+e95+W9o+z2o));}
;STXChart.prototype.resolveY=function(y){return this.top+y;}
;STXChart.prototype.resolveX=function(x){return this.left+x;}
;STXChart.prototype.backOutY=function(y){return o5i.R6i(y,this.top);}
;STXChart.prototype.backOutX=function(x){return o5i.p6i(x,this.left);}
;STXChart.prototype.cleanupRemovedStudy=function(sd){var c35="}",P35="{";if(sd.libraryEntry){if(sd.libraryEntry.removeFN)sd.libraryEntry.removeFN(this,sd);if(sd.libraryEntry.feed&&sd.libraryEntry.quoteFeed){this.detachTagAlongQuoteFeed(sd.libraryEntry.feed);}
}
for(var p in this.plugins){if(p.indexOf(P35+sd.id+c35)>-o5i.D6s)delete  this.plugins[p];}
if(this.layout.studies)delete  this.layout.studies[sd.name];}
;STXChart.prototype.privateDeletePanel=function(panel){if(this.layout.studies){var mySD=this.layout.studies[panel.name];if(mySD)this.cleanupRemovedStudy(mySD);}
delete  this.panels[panel.name];for(var spm in STX.Studies.studyPanelMap){if(o5i.z6i(STX.Studies.studyPanelMap[spm].panel,panel.name))delete  STX.Studies.studyPanelMap[spm];}
for(var series in this.overlays){if(o5i.m6i(this.overlays[series].panel,panel.name)){delete  this.layout.studies[series];delete  this.overlays[series];}
}
if(panel.holder){this.chart.container.removeChild(panel.holder);var arr=this.getMarkerArray("panelName",panel.name);for(var i=0;o5i.X6i(i,arr.length);i++){this.removeFromHolder(arr[i]);}
}
panel.handle.parentNode.removeChild(panel.handle);}
;STXChart.prototype.panelClose=function(panel){var I1o="panelClose";if(!panel)return ;if(this.runPrepend(I1o,arguments))return ;this.cancelTouchSingleClick=L7o;STXChart.drawingLine=x35;if(panel.soloing)this.panelSolo(panel);if(this.charts[panel.name]){for(var panelName in this.panels){var subPanel=this.panels[panelName];if(o5i.G6i(subPanel.chart.name,panel.name)){this.privateDeletePanel(subPanel);}
}
delete  this.charts[panel.name];}
else{this.privateDeletePanel(panel);}
this.showCrosshairs();this.createDataSet();this.adjustPanelPositions();this.draw();this.savePanels();this.runAppend(I1o,arguments);}
;STXChart.prototype.deleteAllPanels=function(){for(var p in this.panels){var panel=this.panels[p];this.privateDeletePanel(panel);}
this.layout.panels={}
;this.panels={}
;}
;STXChart.prototype.panelUp=function(panel){this.cancelTouchSingleClick=L7o;STXChart.drawingLine=x35;this.showCrosshairs();var newPanels={}
,pos=o5i.t6s,p;for(p in this.panels){if(o5i.k6i(p,panel.name))break;pos++;}
if(!pos)return ;var i=o5i.t6s;for(p in this.panels){if(o5i.r6i(i,pos-o5i.D6s))newPanels[panel.name]=panel;if(o5i.U6i(p,panel.name))continue;newPanels[p]=this.panels[p];i++;}
this.panels=newPanels;this.adjustPanelPositions();this.draw();this.savePanels();}
;STXChart.prototype.panelDown=function(panel){this.cancelTouchSingleClick=true;STXChart.drawingLine=false;this.showCrosshairs();var newPanels={}
,pos=0,p;for(p in this.panels){if(o5i.D7i(p,panel.name))break;pos++;}
var length=0;for(p in this.panels)length++;if(o5i.t7i(pos,length-1))return ;var i=0;for(p in this.panels){if(o5i.I7i(p,panel.name)){i++;continue;}
newPanels[p]=this.panels[p];if(o5i.b7i(i,pos+1))newPanels[panel.name]=panel;i++;}
this.panels=newPanels;this.adjustPanelPositions();this.draw();this.savePanels();}
;STXChart.prototype.panelSolo=function(panel){var s0o="o_",O9o="tx_so",d6o="stx_solo_lit";this.cancelTouchSingleClick=L7o;STXChart.drawingLine=x35;this.showCrosshairs();var hideOrNot=L7o;if(panel.soloing){hideOrNot=x35;panel.soloing=x35;STX.unappendClassName(panel.solo,d6o);panel.percent=panel.oldPercent;this.panels.chart.percent=this.panels.chart.oldPercent;}
else{panel.soloing=L7o;STX.appendClassName(panel.solo,(H4o+O9o+o5i.p6o+s0o+o5i.p6o+J35));if(o5i.x7i(panel.name,p8o)){panel.oldPercent=panel.percent;}
else{panel.oldPercent=panel.percent;this.panels.chart.oldPercent=this.panels.chart.percent;panel.percent=o5i.K7i(o5i.D6s,this.panels.chart.percent);}
}
for(var p in this.panels){this.panels[p].hidden=hideOrNot;}
this.panels.chart.hidden=x35;panel.hidden=x35;this.adjustPanelPositions();this.draw();this.savePanels();}
;STXChart.prototype.calculatePanelPercent=function(panel){var h=o5i.H7i(panel.bottom,panel.top);panel.percent=o5i.a7i(h,this.chart.canvasHeight);}
;STXChart.prototype.resizePanels=function(){if(!STXChart.resizingPanel)return ;var up=L7o,p,newY,priorPanel;if(o5i.T7i(STXChart.crosshairY,this.resolveY(STXChart.resizingPanel.top)))up=x35;if(up){priorPanel=o5i.d7o;for(p in this.panels){if(o5i.Y7i(this.panels[p],STXChart.resizingPanel))break;if(this.panels[p].hidden)continue;priorPanel=this.panels[p];}
newY=this.backOutY(STXChart.crosshairY);if(o5i.l7i(newY,priorPanel.top+q05)){newY=priorPanel.top+q05;STXChart.crosshairY=this.resolveY(newY);}
priorPanel.bottom=newY;STXChart.resizingPanel.top=newY;this.calculatePanelPercent(priorPanel);this.calculatePanelPercent(STXChart.resizingPanel);}
else{priorPanel=o5i.d7o;for(p in this.panels){if(o5i.y7i(this.panels[p],STXChart.resizingPanel))break;if(this.panels[p].hidden)continue;priorPanel=this.panels[p];}
newY=this.backOutY(STXChart.crosshairY);if(o5i.w7i(newY,STXChart.resizingPanel.bottom-q05)){newY=o5i.o7i(STXChart.resizingPanel.bottom,q05);STXChart.crosshairY=this.resolveY(newY);}
priorPanel.bottom=newY;STXChart.resizingPanel.top=newY;this.calculatePanelPercent(priorPanel);this.calculatePanelPercent(STXChart.resizingPanel);}
this.adjustPanelPositions();this.draw();this.savePanels();}
;STXChart.prototype.adjustPanelPositions=function(){var u1o="no";if(!this.chart.symbol)return ;if(this.runPrepend("adjustPanelPositions",arguments))return ;var lastBottom=0,h=this.chart.canvasHeight,pixels=0,first=false,acc=0,n=0,activeSolo=false,x,panel;for(x in this.panels){panel=this.panels[x];if(isNaN(panel.percent)||o5i.g7i(panel.percent,0))panel.percent=0.05;if(panel.hidden)continue;acc+=panel.percent;n++;if(panel.soloing)activeSolo=true;}
for(x in this.panels){var zoomRatio=0;panel=this.panels[x];if(panel.hidden){if(panel.markerHolder){panel.markerHolder.style.display="none";}
continue;}
if(!first){first=true;panel.up.style.display="none";}
else{if(this.displayIconsUpDown)panel.up.style.display="";}
if(activeSolo){if(panel.soloing){if(this.displayIconsSolo)panel.solo.style.display="";}
else{panel.solo.style.display="none";}
}
else if(o5i.s7i(n,1)||o5i.O7i(n,2)){panel.solo.style.display=(u1o+n6o+n3o);}
else{if(this.displayIconsSolo)panel.solo.style.display="";}
if(o5i.j1i(n,1)){panel.down.style.display="none";}
else{if(this.displayIconsUpDown)panel.down.style.display="";}
if(panel.editFunction)panel.edit.style.display="";else panel.edit.style.display="none";panel.percent=o5i.W1i(panel.percent,acc);panel.top=lastBottom;panel.bottom=panel.top+(o5i.q1i(h,panel.percent));panel.height=o5i.E1i(panel.bottom,panel.top);if(o5i.L1i(panel.chart.name,panel.name)){panel.chart.top=panel.top;panel.chart.bottom=panel.bottom;panel.chart.height=panel.height;}
var yAxis=panel.yAxis;if(yAxis.zoom&&o5i.c1i(yAxis.height,0)){zoomRatio=o5i.J1i(yAxis.zoom,yAxis.height);}
yAxis.top=panel.top+yAxis.topOffset;yAxis.bottom=o5i.M1i(panel.bottom,yAxis.bottomOffset);yAxis.height=o5i.C1i(yAxis.bottom,yAxis.top);if(zoomRatio){yAxis.zoom=o5i.f1i(zoomRatio,yAxis.height);if(o5i.N1i(yAxis.zoom,yAxis.height))yAxis.zoom=0;}
lastBottom=panel.bottom;if(!yAxis.high&&o5i.V1i(yAxis.high,0)){yAxis.high=100;yAxis.low=0;yAxis.shadow=100;}
yAxis.multiplier=o5i.Z1i(yAxis.height,yAxis.shadow);if(panel.holder){panel.holder.style.right="0px";panel.holder.style.top=panel.top+"px";panel.holder.style.left="0px";panel.holder.style.height=panel.height+"px";panel.subholder.style.left=panel.left+"px";panel.subholder.style.width=panel.width+"px";panel.subholder.style.top="0px";if(o5i.Q1i(yAxis.height,0))panel.subholder.style.height=yAxis.height+"px";}
}
if(x)this.panels[x].down.style.display="none";if(o5i.A1i(n,2)&&!activeSolo){this.panels.chart.solo.style.display="";}
if(this.controls.chartControls&&this.panels.chart)this.controls.chartControls.style.bottom=(o5i.P1i(this.chart.canvasHeight,this.panels.chart.bottom,22))+"px";this.clearPixelCache();this.adjustDrawings();this.runAppend("adjustPanelPositions",arguments);}
;STXChart.prototype.makeMarkerHelper=function(){this.markerHelper={chartMap:{}
,classMap:{}
}
;}
;STXChart.prototype.addToHolder=function(marker){var Y2o="assNa",K55="v",M8o="bject",g6o="Mar",panel=this.panels[marker.params.panelName];if(!panel)return ;if(STX.derivedFrom(marker.params.node,STX.Marker.NodeCreator)){marker.stxNodeCreator=marker.params.node;marker.node=marker.stxNodeCreator.node;}
else{marker.node=marker.params.node;}
if(!this.markerHelper)this.makeMarkerHelper();if(marker.params.chartContainer){this.container.appendChild(marker.node);}
else if(marker.params.includeAxis){panel.holder.appendChild(marker.node);}
else{panel.subholder.appendChild(marker.node);}
var label=marker.params.label;if(!this.markers[label])this.markers[label]=[];this.markers[label].push(marker);marker.chart=panel.chart;if(!this.markerHelper.chartMap[marker.chart.name]){this.markerHelper.chartMap[marker.chart.name]={dataSetLength:o5i.t6s,markers:[]}
;}
this.markerHelper.chartMap[marker.chart.name].markers.push(marker);if(!marker.className){console.log((g6o+b7o+n3o+h4o+F3o+a6o+M8o+H4o+F3o+X6o+o5i.m2o+H4o+z2o+F3o+N7o+G8o+K55+n3o+F3o+G8o+F3o+X6o+n3o+X6o+f8o+n3o+h4o+F3o+L3o+o5i.p6o+Y2o+J7s));}
var classMap=this.markerHelper.classMap[marker.className];if(!classMap)classMap=this.markerHelper.classMap[marker.className]={}
;if(!classMap[marker.params.panelName])classMap[marker.params.panelName]=[];classMap[marker.params.panelName].push(marker);this.setMarkerTick(marker);}
;STXChart.prototype.getMarkerArray=function(type,comparison){var arr=[];for(var label in this.markers){for(var i=0;o5i.O1i(i,this.markers[label].length);i++){var marker=this.markers[label][i];if(o5i.j0n(type,"panelName")){if(o5i.W0n(marker.panelName,comparison))arr.push(marker);}
else if(o5i.q0n(type,"label")){if(o5i.E0n(label,comparison))arr.push(marker);}
else if(o5i.L0n(type,"all")){arr.push(marker);}
}
}
return arr;}
;STXChart.prototype.removeFromHolder=function(marker){var panel=this.panels[marker.params.panelName];if(!panel)return ;if(o5i.c0n(marker.node.parentNode,panel.holder))panel.holder.removeChild(marker.node);else if(o5i.J0n(marker.node.parentNode,panel.subholder))panel.subholder.removeChild(marker.node);else if(o5i.M0n(marker.node.parentNode,this.container))this.container.removeChild(marker.node);var labels=this.markers[marker.params.label];if(!labels)return ;var i;for(i=0;o5i.C0n(i,labels.length);i++){if(o5i.f0n(labels[i],marker)){labels.splice(i,1);break;}
}
var chartMap=this.markerHelper.chartMap[marker.chart.name];if(chartMap){for(i=0;o5i.N0n(i,chartMap.markers.length);i++){if(o5i.V0n(chartMap.markers[i],marker)){chartMap.markers.splice(i,1);break;}
}
}
var classMap=this.markerHelper.classMap[marker.className];if(classMap){var panelArray=classMap[marker.params.panelName];if(panelArray){for(i=0;o5i.Z0n(i,panelArray.length);i++){if(o5i.Q0n(panelArray[i],marker)){panelArray.splice(i,1);break;}
}
}
}
}
;STXChart.prototype.establishMarkerTicks=function(){if(!this.markerHelper)this.makeMarkerHelper();var chartMap=this.markerHelper.chartMap;for(var chart in chartMap){var chartEntry=chartMap[chart];if(o5i.A0n(chartEntry.dataSetLength,this.charts[chart].dataSet.length))continue;for(var i=0;o5i.P0n(i,chartEntry.markers.length);i++){this.setMarkerTick(chartEntry.markers[i]);}
}
}
;STXChart.prototype.futureTickIfDisplayed=function(marker){var chart=marker.chart;if(o5i.v0n(chart.dataSet.length,1))return ;var xaxisDT=chart.xaxis[o5i.i8n(chart.xaxis.length,1)].DT;xaxisDT=new Date(o5i.u8n(xaxisDT.getTime(),this.timeZoneOffset*60000));if(o5i.h8n(marker.params.x,xaxisDT))return ;var futureTicksOnScreen=o5i.d8n(chart.maxTicks,chart.dataSegment.length),ticksToSearch=chart.dataSet.length+futureTicksOnScreen,pms,qms,dt=new Date(chart.dataSet[o5i.n8n(chart.dataSet.length,1)].DT),iter=this.standardMarketIterator(dt,null,chart),dms=marker.params.x.getTime();for(var j=chart.dataSet.length;o5i.B8n(j,ticksToSearch);j++){pms=dt.getTime();dt=iter.next();qms=dt.getTime();if(o5i.e8n(qms,dms)){marker.tick=j;return ;}
else if(o5i.S8n(qms,dms)&&o5i.F8n(pms,dms)){marker.tick=Math.max(o5i.R8n(j,1),0);return ;}
}
}
;STXChart.prototype.setMarkerTick=function(marker){var chart=marker.chart;if(o5i.p8n(marker.params.xPositioner,"master")&&marker.params.x){marker.tick=Math.floor(o5i.z8n(marker.params.x,this.layout.periodicity));return ;}
else if(o5i.m8n(marker.params.xPositioner,"date")&&marker.params.x){var pms,qms,dms=marker.params.x.getTime();for(var i=0;o5i.X8n(i,chart.dataSet.length);i++){var quotes=chart.dataSet[i];qms=quotes.DT.getTime();pms=qms;if(o5i.G8n(i,0))pms=chart.dataSet[o5i.k8n(i,1)].DT.getTime();if(o5i.r8n(qms,dms)){marker.tick=i;return ;}
else if(o5i.U8n(qms,dms)&&o5i.D3n(pms,dms)){marker.tick=Math.max(o5i.t3n(i,1),0);return ;}
else if(o5i.I3n(dms,qms)){marker.tick=null;return ;}
}
if(o5i.b3n(chart.dataSet.length,1))return ;var dt=new Date(chart.dataSet[o5i.x3n(i,1)].DT);if(o5i.K3n(dt.getTime(),dms))marker.params.future=true;marker.tick=null;}
}
;STXChart.prototype.positionMarkers=function(){var self=this;if(!self.markerHelper)return ;function draw(){if(self.runPrepend("positionMarkers",arguments))return ;self.markerTimeout=null;for(var className in self.markerHelper.classMap){for(var panelName in self.markerHelper.classMap[className]){var arr=self.markerHelper.classMap[className][panelName],panel=self.panels[panelName];if(arr.length){var params={stx:self,arr:arr,panel:panel}
;params.firstTick=o5i.H3n(panel.chart.dataSet.length,panel.chart.scroll);params.lastTick=params.firstTick+panel.chart.dataSegment.length;var fn=arr[0].constructor.placementFunction;if(fn){(fn)(params);}
else{self.defaultMarkerPlacement(params);}
}
}
}
self.runAppend("positionMarkers",arguments);}
if(this.markerDelay||o5i.a3n(this.markerDelay,0)){if(!this.markerTimeout)this.markerTimeout=setTimeout(draw,this.markerDelay);}
else{draw();}
}
;STXChart.prototype.addChart=function(name,chart){chart.name=name;this.charts[name]=chart;}
;STXChart.prototype.createPanel=function(display,name,height,chartName){if(this.runPrepend("createPanel",arguments))return ;if(!chartName)chartName="chart";var h=this.chart.canvasHeight;if(!height){height=o5i.T3n(h,0.20);}
var percent=o5i.Y3n(height,h),reduce=o5i.l3n(1,percent);for(var p in this.panels){var panel=this.panels[p];panel.percent*=reduce;}
this.stackPanel(display,name,percent,chartName);this.adjustPanelPositions();this.savePanels(false);this.runAppend("createPanel",arguments);}
;STXChart.prototype.configurePanelControls=function(panel){var d85="stx-chart-panel",A9o="chart-title",Y3o=".stx-ico-edit",e35=".stx-ico-down",A35=".stx-ico-focus",B7s=".stx-ico-up",c7o="tl",i6o="nel",p85="tx",m6s=".stx-ico-close",P05=".stx-panel-control",isChart=(o5i.y3n(panel.name,panel.chart.name));panel.icons=$$$(P05,panel.holder);panel.close=panel.icons.children[o5i.E6s];panel.close=$$$(m6s,panel.icons).parentNode;STX.appendClassName(panel.icons,s1o);panel.title=$$$((S2o+H4o+p85+L4o+o5i.N4o+G8o+i6o+L4o+z2o+G7o+c7o+n3o),panel.icons);panel.up=$$$(B7s,panel.icons).parentNode;panel.solo=$$$(A35,panel.icons).parentNode;panel.down=$$$(e35,panel.icons).parentNode;panel.edit=$$$(Y3o,panel.icons).parentNode;if(!this.displayIconsUpDown)panel.up.style.display=(o35);if(!this.displayIconsUpDown)panel.down.style.display=o35;if(!this.displayIconsSolo)panel.solo.style.display=o35;if(!this.displayIconsClose){panel.close.style.display=o35;}
if(!this.displayPanelResize)panel.handle.style.display=o35;panel.title.innerHTML=C2o;panel.title.appendChild(document.createTextNode(panel.display));if(isChart){STX.appendClassName(panel.title,A9o);STX.appendClassName(panel.icons,d85);}
if(!STX.touchDevice||STX.isSurface)panel.icons.onmouseover=(function(self){return function(e){self.hideCrosshairs();}
;}
)(this);if(!STX.touchDevice||STX.isSurface)panel.icons.onmouseout=(function(self){return function(e){self.showCrosshairs();}
;}
)(this);if(!STX.touchDevice||STX.isSurface)panel.handle.onmouseover=(function(self){return function(){self.hideCrosshairs();}
;}
)(this);if(!STX.touchDevice||STX.isSurface)panel.handle.onmouseout=(function(self){return function(){self.showCrosshairs();}
;}
)(this);if(STX.touchDevice){panel.handle.ontouchstart=(function(stx,panel){return function(e){if(stx.resizingPanel)return ;e.preventDefault();stx.grabHandle(panel);}
;}
)(this,panel);panel.handle.ontouchend=(function(stx){return function(e){e.preventDefault();stx.releaseHandle();}
;}
)(this);}
panel.handle.onmousedown=(function(stx,panel){return function(e){if(!e)e=event;stx.grabHandle(panel);}
;}
)(this,panel);panel.handle.onmouseup=(function(stx){return function(e){if(!e)e=event;stx.releaseHandle();}
;}
)(this);STX.safeClickTouch(panel.close,(function(stx,panel){return function(){stx.panelClose(panel);}
;}
)(this,panel));STX.safeClickTouch(panel.up,(function(stx,panel){return function(){var K85=6671543,N95=(74.0E1<(16,90)?(29.,74):42.0E1<(6.24E2,9.88E2)?(103,7509185):(106.,10.17E2)),D8o=1800190971,Z9o=1791746272;var E4s=Z9o,b4s=D8o,d4s=o5i.U4s;for(var I4s=o5i.D6s;o5i.C2s.T2s(I4s.toString(),I4s.toString().length,N95)!==E4s;I4s++){displayTheResults();yAxis.yAxisPlotter.newSeries(R2o,r0o,this.colorOrStyle(textStyle));this.setCandleWidth(candleWidth,chart);this.canvasColor(downStyleName);d4s+=o5i.U4s;}
if(o5i.C2s.T2s(d4s.toString(),d4s.toString().length,K85)!==b4s){this.registerHTMLElements();chart.dataSegment.push(quote);return function(){stx.panelClose(panel);}
;}
stx.panelUp(panel);}
;}
)(this,panel));STX.safeClickTouch(panel.down,(function(stx,panel){return function(){stx.panelDown(panel);}
;}
)(this,panel));STX.safeClickTouch(panel.solo,(function(stx,panel){return function(){stx.panelSolo(panel);}
;}
)(this,panel));if(o5i.w3n(panel.name,p8o))panel.close.style.display=o35;}
;STXChart.prototype.stackPanel=function(display,name,percent,chartName){var i8o="stx-panel-study",s9o="stx-panel-chart",G4s="stx-subholder",E1s="stx-holder",f7o="ha",J4o="stackPanel";if(this.runPrepend(J4o,arguments))return ;if(!chartName)chartName=(L3o+f7o+h35);var chart=this.charts[chartName],isChart=(o5i.o3n(name,chartName)),yAxis=o5i.d7o;if(isChart){display=chart.symbol;if(chart.symbolDisplay)display=chart.symbolDisplay;yAxis=chart.yAxis;}
var panel=this.panels[name]=new STXChart.Panel(name,yAxis);panel.percent=percent;panel.chart=chart;panel.display=display;panel.holder=STX.newChild(this.container,R7s,E1s);panel.subholder=STX.newChild(panel.holder,R7s,G4s);panel.subholder.style.zIndex=o5i.D6s;var appendClass=isChart?s9o:i8o;STX.appendClassName(panel.holder,appendClass);panel.subholder.appendChild(this.controls.iconsTemplate.cloneNode(L7o));panel.handle=this.controls.handleTemplate.cloneNode(L7o);this.container.appendChild(panel.handle);panel.handle.id=o5i.d7o;panel.handle.panel=panel;this.configurePanelControls(panel);this.resizeCanvas();this.runAppend(J4o,arguments);}
;STXChart.prototype.setPanelEdit=function(panel,editFunction){panel.editFunction=editFunction;STX.safeClickTouch(panel.edit,editFunction);this.adjustPanelPositions();}
;STXChart.prototype.drawPanels=function(){var R85="stx_panel_border",X1s="drawPanels";if(this.runPrepend(X1s,arguments))return ;var first=x35;for(var p in this.panels){var panel=this.panels[p];panel.axisDrawn=x35;if(o5i.g3n(panel.title.innerHTML,panel.display)){panel.title.innerHTML=C2o;panel.title.appendChild(document.createTextNode(panel.display));}
STX.appendClassName(panel.icons,s1o);if(panel.hidden){STX.unappendClassName(panel.icons,s1o);panel.handle.style.display=o35;panel.holder.style.display=o35;continue;}
else{if(!this.displayIconsUpDown)panel.up.style.display=o35;if(!this.displayIconsUpDown)panel.down.style.display=o35;if(!this.displayIconsSolo)panel.solo.style.display=o35;panel.holder.style.display=D0o;}
if(!first){panel.handle.style.display=o35;first=L7o;continue;}
var y=panel.top;y=Math.round(y)+S9o;this.plotLine(panel.left,panel.right,y,y,this.canvasStyle(R85),I7s,this.chart.context,x35,{}
);if(!this.displayPanelResize){panel.handle.style.display=o35;}
else{panel.handle.style.display=C2o;}
panel.handle.style.top=(o5i.s3n(y,panel.handle.offsetHeight/o5i.U4s))+q85;}
this.runAppend(X1s,arguments);}
;STXChart.prototype.touchSingleClick=function(finger,x,y){var self=this,args=arguments;return function(){(function(){if(!this.cancelTouchSingleClick){if(this.runPrepend("touchSingleClick",args))return ;if(this.editingAnnotation)return ;this.clicks={s1MS:-1,e1MS:-1,s2MS:-1,e2MS:-1}
;if(!this.displayCrosshairs)return ;if(!this.displayInitialized)return ;if(o5i.O3n(this.openDialog,""))return ;if(o5i.j9n(x,this.left)||o5i.W9n(x,this.right)||o5i.q9n(y,this.top)||o5i.E9n(y,this.bottom))return ;var cy=this.backOutY(STXChart.crosshairY),cx=this.backOutX(STXChart.crosshairX);this.currentPanel=this.whichPanel(cy);if(!this.currentVectorParameters.vectorType||!STX.Drawing[this.currentVectorParameters.vectorType]||!(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw){if(!this.drawingClick(this.currentPanel,cx,cy)){if(!this.layout.crosshair){STXChart.crosshairY=0;STXChart.crosshairX=0;this.cx=this.backOutX(STXChart.crosshairX);this.cy=this.backOutY(STXChart.crosshairY);this.findHighlights();STXChart.crosshairY=y;STXChart.crosshairX=x;var rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.right=this.left+this.width;this.bottom=this.top+this.height;this.cx=this.backOutX(STXChart.crosshairX);this.cy=this.backOutY(STXChart.crosshairY);if(this.currentPanel&&this.currentPanel.chart.dataSet){this.crosshairTick=this.tickFromPixel(this.cx,this.currentPanel.chart);this.crosshairValue=this.adjustIfNecessary(this.currentPanel,this.crosshairTick,this.valueFromPixel(this.cy,this.currentPanel));}
this.headsUpHR();this.findHighlights(true);}
}
if(!this.currentVectorParameters.vectorType){this.dispatch("tap",{stx:this,panel:this.currentPanel,x:cx,y:cy}
);}
}
}
self.cancelTouchSingleClick=false;this.runAppend("touchSingleClick",args);}
).apply(self,args);}
;}
;STXChart.prototype.touchDoubleClick=function(finger,x,y){var J5o="touchDoubleClick",D95="eC",b85="oubl",H0o="tou";if(o5i.L9n(x,this.left)||o5i.c9n(x,this.right)||o5i.J9n(y,this.panels.chart.top)||o5i.M9n(y,this.panels.chart.bottom))return ;if(this.editingAnnotation)return ;if(this.runPrepend((H0o+U9o+Y0o+b85+D95+y4o+L3o+b7o),arguments))return ;if(STXChart.drawingLine){this.undo();}
else{if(this.anyHighlighted){this.deleteHighlighted();}
else{var yAxis=this.currentPanel.yAxis;if(o5i.C9n(yAxis.scroll,(yAxis.initialMarginTop-yAxis.initialMarginBottom)/o5i.U4s)&&o5i.f9n(yAxis.zoom,yAxis.initialMarginTop+yAxis.initialMarginBottom)){this.home();}
else{this.calculateYAxisMargins(this.currentPanel.yAxis);}
this.draw();}
}
this.clicks={s1MS:-o5i.D6s,e1MS:-o5i.D6s,s2MS:-o5i.D6s,e2MS:-o5i.D6s}
;this.runAppend(J5o,arguments);}
;STXChart.prototype.touchmove=function(e){if(!this.displayInitialized)return ;if(o5i.N9n(this.openDialog,""))return ;if(o5i.V9n(STXChart.ignoreTouch,true))return ;var localTouches=[];if(!this.overYAxis||(this.controls&&this.controls.crossX&&o5i.Z9n(this.controls.crossX.style.display,"none"))){if(e&&e.preventDefault&&this.captureTouchEvents){e.preventDefault();}
if(e){e.stopPropagation();}
}
var now=new Date().getTime();if(this.clicks.s2MS==-1){this.clicks.e1MS=now;if(o5i.Q9n(this.clicks.e1MS-this.clicks.s1MS,25)){return ;}
}
else{this.clicks.e2MS=now;if(o5i.A9n(this.clicks.e2MS-this.clicks.s2MS,25)){return ;}
}
if(STX.isSurface){if(this.mouseMode)return ;if(!e.pointerId)e.pointerId=this.gesturePointerId;if((!this.grabbingScreen||STXChart.resizingPanel)&&!this.overrideGesture){if(o5i.P9n(e.detail,e.MSGESTURE_FLAG_INERTIA)){this.gesture.stop();return ;}
}
for(var i=0;o5i.v9n(i,this.touches.length);i++){if(o5i.i5n(this.touches[i].pointerId,e.pointerId)){var xd=Math.abs(o5i.u5n(this.touches[i].pageX,e.clientX)),yd=Math.abs(o5i.h5n(this.touches[i].pageY,e.clientY)),c=Math.sqrt(o5i.d5n(xd,xd)+o5i.n5n(yd,yd));if(!c)return ;this.clicks.e1MS=new Date().getTime();if(o5i.B5n(this.clicks.e1MS-this.clicks.s1MS,50)){return ;}
if(o5i.e5n(this.touches[i].pageX,e.clientX)&&o5i.S5n(this.touches[i].pageY,e.clientY))return ;this.touches[i].pageX=e.clientX;this.touches[i].pageY=e.clientY;break;}
}
if(o5i.F5n(i,0)){this.movedPrimary=true;}
else{this.movedSecondary=true;}
if(!this.gestureInEffect&&o5i.R5n(i,this.touches.length)){return ;}
this.changedTouches=[{pointerId:e.pointerId,pageX:e.clientX,pageY:e.clientY}
];localTouches=this.touches;if(this.gestureInEffect&&!localTouches.length){localTouches=this.changedTouches;}
}
else{localTouches=e.touches;this.changedTouches=e.changedTouches;}
var crosshairXOffset=this.crosshairXOffset,crosshairYOffset=this.crosshairYOffset;if(this.runPrepend("touchmove",arguments))return ;var x,y;if(STXChart.resizingPanel){var touch1=localTouches[0];x=touch1.pageX;y=touch1.pageY;this.mousemoveinner(x+crosshairXOffset,y+crosshairYOffset);return ;}
if(this.moveB!=-1){this.touchMoveTime=new Date();}
this.moveA=this.moveB;this.moveB=localTouches[0].pageX;var distance;if(o5i.p5n(localTouches.length,1)){if(!this.pinchingScreen){var touch2=localTouches[0];x=touch2.pageX;y=touch2.pageY;this.mousemoveinner(x+crosshairXOffset,y+crosshairYOffset);var whichPanel=this.whichPanel(y);this.overXAxis=o5i.z5n(y,this.top+this.chart.panel.yAxis.bottom)&&o5i.m5n(y,this.top+this.chart.panel.bottom)&&STXChart.insideChart;if(!whichPanel)this.overYAxis=false;else this.overYAxis=(o5i.X5n(x,whichPanel.right)||o5i.G5n(x,whichPanel.left))&&STXChart.insideChart;}
}
else if(o5i.k5n(localTouches.length,2)&&this.allowZoom){if(!this.displayCrosshairs)return ;var touch3=localTouches[0],x1=touch3.pageX,y1=touch3.pageY,touch4=localTouches[1],x2=touch4.pageX,y2=touch4.pageY;distance=Math.sqrt(o5i.r5n((x2-x1),(x2-x1))+o5i.U5n((y2-y1),(y2-y1)));this.pinchingCenter=Math.min(x1,x2)+o5i.D2n((Math.max(x1,x2)-Math.min(x1,x2)),2);var delta=Math.round(o5i.t2n(this.gestureStartDistance,distance)),noCrosshairs=(!this.layout.crosshair&&!this.currentVectorParameters.vectorType);if(noCrosshairs)this.pinchingScreen=5;this.clearPixelCache();if(o5i.I2n(this.pinchingScreen,2)){if(STX.isSurface&&(!this.movedPrimary||!this.movedSecondary)){return ;}
if((o5i.b2n(x1,this.pt.x1)&&o5i.x2n(x2,this.pt.x2))||(o5i.K2n(x1,this.pt.x1)&&o5i.H2n(x2,this.pt.x2))||(o5i.a2n(y1,this.pt.y1)&&o5i.T2n(y2,this.pt.y2))||(o5i.Y2n(y1,this.pt.y1)&&o5i.l2n(y2,this.pt.y2))){this.pinchingScreen=0;}
else{this.pinchingScreen++;if(o5i.y2n(this.pinchingScreen,2))return ;}
}
this.pt={x1:x1,x2:x2,y1:y1,y2:y2}
;if(o5i.w2n(this.pinchingScreen,0)){this.mousemoveinner(x1+crosshairXOffset,y1+crosshairYOffset);this.gestureStartDistance=distance;}
else{var angle=Math.asin(o5i.o2n((Math.max(y2,y1)-Math.min(y2,y1)),distance));this.ctrl=true;if(o5i.g2n(Math.abs(delta),12)&&!noCrosshairs){this.moveCount++;if(o5i.s2n(this.moveCount,4)){this.pinchingScreen=0;this.moveCount=0;this.ctrl=false;return ;}
}
else{this.moveCount=0;}
if(o5i.O2n(angle,1)||(!this.goneVertical&&o5i.j4n(angle,1.37))){if(!this.currentPanel)return ;var chart=this.currentPanel.chart;this.goneVertical=false;distance=o5i.W4n(this.pt.x2,this.pt.x1);var tickDistance=o5i.q4n(this.grabStartValues.t2,this.grabStartValues.t1),centerTick=this.grabStartValues.t1+o5i.E4n(tickDistance,2),newCandleWidth=o5i.L4n(distance,tickDistance);if(o5i.c4n(newCandleWidth,this.minimumCandleWidth))newCandleWidth=this.minimumCandleWidth;var oldCandleWidth=this.layout.candleWidth;this.setCandleWidth(newCandleWidth,chart);if(o5i.J4n(chart.maxTicks,5)){this.setCandleWidth(oldCandleWidth,chart);return ;}
this.micropixels=0;var px=this.pixelFromTick(Math.round(centerTick),chart),centerOfPinch=(o5i.M4n(this.pt.x1,this.left))+Math.round(o5i.C4n(distance,2)),pxdiff=o5i.f4n(px,centerOfPinch),scrollDiff=o5i.N4n(pxdiff,newCandleWidth),rounded=Math.round(scrollDiff);chart.scroll-=rounded;this.microscroll=o5i.V4n(rounded,scrollDiff);this.micropixels=o5i.Z4n(newCandleWidth,this.microscroll);this.draw();}
else{var yAxis=this.currentPanel.chart.panel.yAxis;this.goneVertical=true;yAxis.zoom=this.grabStartZoom+(o5i.Q4n(this.gestureStartDistance,distance));if(o5i.A4n(this.grabStartZoom,yAxis.height)){if(o5i.P4n(yAxis.zoom,yAxis.height))yAxis.zoom=o5i.v4n(yAxis.height,1);}
else{if(o5i.i6n(yAxis.zoom,yAxis.height))yAxis.zoom=yAxis.height+1;}
this.draw();}
this.ctrl=false;}
}
else if(o5i.u6n(localTouches.length,3)&&STXChart.allowThreeFingerTouch){if(!this.displayCrosshairs)return ;var touch5=localTouches[0],xx=touch5.pageX;distance=o5i.h6n(this.grabStartX,xx);this.grabEndPeriodicity=this.grabStartPeriodicity+Math.round(o5i.d6n(distance,10));if(o5i.n6n(this.grabEndPeriodicity,1))this.grabEndPeriodicity=1;if(typeof headsUp!="undefined"){headsUp.period.innerHTML=this.grabEndPeriodicity+" "+this.layout.interval;if(o5i.B6n(this.grabEndPeriodicity,1))headsUp.period.innerHTML+="s";}
}
this.runAppend("touchmove",arguments);}
;STXChart.prototype.touchstart=function(e){if(STXChart.ignoreTouch)return ;if(STX.isSurface){this.movedPrimary=false;this.movedSecondary=false;}
else{if(this.touchingEvent)clearTimeout(this.touchingEvent);this.touching=true;this.touches=e.touches;this.changedTouches=e.changedTouches;}
if(STXChart.resizingPanel)return ;var crosshairXOffset=this.crosshairXOffset,crosshairYOffset=this.crosshairYOffset;if(this.runPrepend("touchstart",arguments))return ;if(this.manageTouchAndMouse&&e&&e.preventDefault&&this.captureTouchEvents)e.preventDefault();this.doubleFingerMoves=0;this.moveCount=0;this.twoFingerStart=false;var p,panel,x1,y1;if(o5i.e6n(this.touches.length,1)||o5i.S6n(this.touches.length,2)){if(o5i.F6n(this.changedTouches.length,1)){var now=Date.now();this.clicks.x=this.changedTouches[0].pageX;this.clicks.y=this.changedTouches[0].pageY;if(o5i.R6n(now-this.clicks.e1MS,250)){this.cancelTouchSingleClick=true;this.clicks.s2MS=now;}
else{this.cancelTouchSingleClick=false;this.clicks.s1MS=now;this.clicks.e1MS=-1;this.clicks.s2MS=-1;this.clicks.e2MS=-1;}
}
this.touchMoveTime=Date.now();this.moveA=this.touches[0].pageX;this.moveB=-1;var touch1=this.touches[0];x1=touch1.pageX;y1=touch1.pageY;var rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.right=this.left+this.width;this.bottom=this.top+this.height;if(o5i.p6n(this.touches.length,1)){var cy=this.cy=this.backOutY(y1);this.currentPanel=this.whichPanel(cy);}
if(!this.currentPanel)this.currentPanel=this.chart.panel;if(o5i.z6n(x1,this.left)&&o5i.m6n(x1,this.right)&&o5i.X6n(y1,this.top)&&o5i.G6n(y1,this.bottom)){STXChart.insideChart=true;this.overXAxis=o5i.k6n(y1,this.top+this.chart.panel.yAxis.bottom)&&o5i.r6n(y1,this.top+this.chart.panel.bottom);this.overYAxis=o5i.U6n(x1,this.currentPanel.right)||o5i.D7n(x1,this.currentPanel.left);for(var i=0;o5i.t7n(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];if(drawing.highlighted){var prevHighlighted=drawing.highlighted;this.cy=this.backOutY(y1);this.cx=this.backOutX(x1);this.crosshairTick=this.tickFromPixel(this.cx,this.currentPanel.chart);this.crosshairValue=this.adjustIfNecessary(this.currentPanel,this.crosshairTick,this.valueFromPixel(this.cy,this.currentPanel));this.findHighlights(true);if(drawing.highlighted){this.repositioningDrawing=drawing;return ;}
else{this.anyHighlighted=true;drawing.highlighted=prevHighlighted;}
}
}
e.stopPropagation();}
else{STXChart.insideChart=false;}
var drawingEnabled=this.currentVectorParameters.vectorType&&o5i.I7n(this.currentVectorParameters.vectorType,"");if(!this.layout.crosshair&&!drawingEnabled&&STXChart.insideChart&&!this.touchNoPan){if((o5i.b7n(this.layout.chartType,"baseline_delta")||o5i.x7n(this.layout.chartType,"baseline_delta_mountain"))&&o5i.K7n(this.chart.baseline.userLevel,false)){var yt=this.valueFromPixelUntransform(o5i.H7n(this.cy,5),this.currentPanel),yb=this.valueFromPixelUntransform(this.cy+5,this.currentPanel),xl=o5i.a7n(this.chart.right,parseInt(getComputedStyle(this.controls.baselineHandle).width,10));if(o5i.T7n(this.chart.baseline.actualLevel,yt)&&o5i.Y7n(this.chart.baseline.actualLevel,yb)&&o5i.l7n(this.backOutX(touch1.pageX),xl)){this.repositioningBaseline={lastDraw:Date.now()}
;return ;}
}
for(p in this.panels){panel=this.panels[p];if(panel.highlighted){this.grabHandle(panel);return ;}
}
this.grabbingScreen=true;this.yToleranceBroken=false;this.grabStartX=x1+crosshairXOffset;this.grabStartY=y1+crosshairYOffset;this.grabStartScrollX=this.currentPanel.chart.scroll;this.grabStartScrollY=this.currentPanel.yAxis.scroll;this.swipeStart(this.currentPanel.chart);setTimeout((function(self){return function(){self.grabbingHand();}
;}
)(this),100);}
else{this.grabbingScreen=false;if(STXChart.insideChart){if(STX.Drawing[this.currentVectorParameters.vectorType]&&(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw){this.userPointerDown=true;STXChart.crosshairX=x1;STXChart.crosshairY=y1;if(this.currentPanel&&this.currentPanel.chart.dataSet){this.crosshairTick=this.tickFromPixel(this.backOutX(STXChart.crosshairX),this.currentPanel.chart);this.crosshairValue=this.adjustIfNecessary(this.currentPanel,this.crosshairTick,this.valueFromPixel(this.backOutY(STXChart.crosshairY),this.currentPanel));}
this.drawingClick(this.currentPanel,this.backOutX(x1),this.backOutY(y1));this.headsUpHR();return ;}
}
}
}
if(o5i.y7n(this.touches.length,2)){this.swipe.end=true;if((!this.displayCrosshairs&&!this.touchNoPan)||!STXChart.insideChart)return ;var touch2=this.touches[1],x2=touch2.pageX,y2=touch2.pageY;for(p in this.panels){panel=this.panels[p];if(panel.highlighted){this.grabHandle(panel);return ;}
}
var chart=this.currentPanel.chart;this.gestureStartDistance=Math.sqrt(o5i.w7n((x2-x1),(x2-x1))+o5i.o7n((y2-y1),(y2-y1)));this.pt={x1:x1,x2:x2,y1:y1,y2:y2}
;this.grabbingScreen=true;this.grabStartX=x1+crosshairXOffset;this.grabStartY=y1+crosshairYOffset;this.grabStartScrollX=this.currentPanel.chart.scroll;this.grabStartScrollY=this.currentPanel.yAxis.scroll;this.grabStartCandleWidth=this.layout.candleWidth;this.grabStartZoom=this.whichYAxis(this.currentPanel).zoom;this.grabStartPt=this.pt;this.grabStartValues={x1:this.pt.x1,x2:this.pt.x2,y1:this.valueFromPixel(o5i.g7n(this.pt.y1,this.top),this.currentPanel),y2:this.valueFromPixel(o5i.s7n(this.pt.y2,this.top),this.currentPanel),t1:this.tickFromPixel(o5i.O7n(this.pt.x1,this.left),chart),t2:this.tickFromPixel(o5i.j1n(this.pt.x2,this.left),chart)}
;this.twoFingerStart=true;setTimeout((function(self){return function(){self.grabbingHand();}
;}
)(this),100);}
else if(o5i.W1n(this.touches.length,3)){if(!this.displayCrosshairs)return ;var touch3=this.touches[0],xx=touch3.pageX;this.grabStartX=xx;this.grabStartPeriodicity=this.layout.periodicity;}
this.runAppend("touchstart",arguments);}
;STXChart.prototype.swipeStart=function(chart){var Q6s=325;if(this.swipe&&this.swipe.interval)clearInterval(this.swipe.interval);this.swipe.velocity=o5i.t6s;this.swipe.amplitude=o5i.t6s;this.swipe.frame=chart.scroll;this.swipe.micropixels=this.micropixels;this.swipe.timestamp=Date.now();this.swipe.chart=this.currentPanel.chart;this.swipe.end=x35;this.swipe.timeConstant=Q6s;this.swipe.cb=o5i.d7o;var self=this;requestAnimationFrame(function(){self.swipeSample();}
);}
;STXChart.prototype.swipeSample=function(){var a9o=(81.<=(0x205,0x17C)?(87,0.4):(0x9,125.2E1)),swipe=this.swipe;if(swipe.end){return ;}
var self=this,now,elapsed,delta,v,sampleMS=z05;now=Date.now();elapsed=o5i.q1n(now,swipe.timestamp);if(o5i.E1n(elapsed,sampleMS)){requestAnimationFrame(function(){self.swipeSample();}
);return ;}
var constant=STX.touchDevice?a9o:z9o;swipe.timestamp=now;delta=o5i.L1n((swipe.chart.scroll-swipe.frame),this.layout.candleWidth)+this.micropixels-swipe.micropixels;swipe.frame=swipe.chart.scroll;swipe.micropixels=this.micropixels;v=o5i.c1n(z35,delta,(o5i.D6s+elapsed));var velocity=o5i.H1n(constant,v)+o5i.a1n(C9o,this.swipe.velocity);if(o5i.T1n(Math.abs(velocity),Math.abs(swipe.velocity))){swipe.velocity=velocity;}
if(o5i.Y1n(Math.abs(delta),I6s)){swipe.velocity=o5i.t6s;}
requestAnimationFrame(function(){self.swipeSample();}
);}
;STXChart.prototype.swipeRelease=function(){var f1s=3000,swipe=this.swipe;if(o5i.l1n(swipe.velocity,f1s))swipe.velocity=f1s;if(swipe.velocity<-f1s)swipe.velocity=-f1s;if(o5i.y1n(swipe.velocity,O05)||swipe.velocity<-O05){swipe.amplitude=o5i.w1n(z9o,swipe.velocity);swipe.scroll=swipe.chart.scroll;swipe.target=swipe.amplitude;swipe.timestamp=Date.now();var self=this;requestAnimationFrame(function(){self.autoscroll();}
);}
}
;STXChart.prototype.scrollTo=function(chart,position,cb){var swipe=this.swipe;swipe.end=L7o;swipe.amplitude=swipe.target=o5i.o1n((position-chart.scroll),this.layout.candleWidth);swipe.timeConstant=v35;swipe.timestamp=Date.now();swipe.scroll=chart.scroll;swipe.chart=chart;swipe.cb=cb;var self=this;requestAnimationFrame(function(){self.autoscroll();}
);}
;STXChart.prototype.autoscroll=function(){var self=this,swipe=this.swipe,elapsed,delta;if(swipe.amplitude){swipe.elapsed=o5i.g1n(Date.now(),swipe.timestamp);delta=-swipe.amplitude*Math.exp(-swipe.elapsed/swipe.timeConstant);if(o5i.s1n(delta,S9o)||delta<-S9o){var diff=o5i.O1n((swipe.target+delta),this.layout.candleWidth);swipe.chart.scroll=swipe.scroll+Math.round(diff);this.draw();requestAnimationFrame(function(){self.autoscroll();}
);}
else{if(swipe.cb)swipe.cb();}
}
}
;STXChart.prototype.touchend=function(e){if(STXChart.ignoreTouch)return ;this.swipe.end=true;if(STX.isSurface){}
else{this.touches=e.touches;this.changedTouches=e.changedTouches;}
if(this.runPrepend("touchend",arguments))return ;if(o5i.j0t(this.touches.length,1)){if(this.layout.crosshair||this.currentVectorParameters.vectorType){if(!this.touches.length||!this.twoFingerStart){this.grabbingScreen=false;}
}
}
if(this.touches.length){this.grabStartX=-1;this.grabStartY=-1;}
if(!this.touches.length){this.touchingEvent=setTimeout((function(self){return function(){self.touching=false;}
;}
)(this),500);if(STXChart.resizingPanel){this.releaseHandle();return ;}
this.pinchingScreen=null;this.pinchingCenter=null;this.goneVertical=false;this.grabbingScreen=false;}
else{if(STXChart.resizingPanel)return ;}
if(o5i.W0t(this.changedTouches.length,1)){if(this.repositioningDrawing){this.changeOccurred("vector");STX.clearCanvas(this.chart.tempCanvas,this);this.repositioningDrawing=null;this.draw();if(!this.layout.crosshair&&!this.currentVectorParameters.vectorType)this.findHighlights(false,true);return ;}
if(this.repositioningBaseline){this.repositioningBaseline=null;this.chart.panel.yAxis.scroll=o5i.q0t(this.pixelFromPriceTransform(this.chart.baseline.userLevel,this.chart.panel),(this.chart.panel.yAxis.top+this.chart.panel.yAxis.bottom)/2);this.draw();return ;}
var now=Date.now(),finger=this.touches.length+1;if(this.clicks.s2MS==-1){this.clicks.e1MS=now;if(!this.currentVectorParameters.vectorType||!STX.Drawing[this.currentVectorParameters.vectorType]||!(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw){if(o5i.E0t(this.clicks.e1MS-this.clicks.s1MS,250)){setTimeout(this.touchSingleClick(finger,this.clicks.x,this.clicks.y),200);}
else{this.clicks={s1MS:-1,e1MS:-1,s2MS:-1,e2MS:-1}
;}
}
this.userPointerDown=false;if(this.activeDrawing&&this.activeDrawing.dragToDraw){var cy=this.backOutY(this.changedTouches[0].pageY)+this.crosshairYOffset,cx=this.backOutX(this.changedTouches[0].pageX)+this.crosshairXOffset;this.drawingClick(this.currentPanel,cx,cy);return ;}
}
else{this.clicks.e2MS=now;if(o5i.L0t(this.clicks.e2MS-this.clicks.s2MS,250)){this.touchDoubleClick(finger,this.clicks.x,this.clicks.y);}
else{this.clicks={s1MS:-1,e1MS:-1,s2MS:-1,e2MS:-1}
;}
}
if((!this.layout.crosshair&&!this.currentVectorParameters.vectorType&&o5i.c0t(finger,1))||(this.twoFingerStart&&!this.touches.length)){this.swipeRelease();}
}
else{if(this.grabEndPeriodicity!=-1&&!isNaN(this.grabEndPeriodicity)){if(this.isDailyInterval(this.layout.interval)||this.allowIntradayNMinute){this.setPeriodicityV2(this.grabEndPeriodicity);}
this.grabEndPeriodicity=-1;}
}
if(!this.touches.length){this.twoFingerStart=false;}
this.runAppend("touchend",arguments);}
;STXChart.prototype.startProxy=function(e){if(o5i.J0t(e.pointerType,4)||o5i.M0t(e.pointerType,"mouse")){this.mouseMode=true;}
else{this.mouseMode=false;}
if(this.mouseMode)return ;this.touches[this.touches.length]={pointerId:e.pointerId,pageX:e.clientX,pageY:e.clientY}
;this.changedTouches=[{pointerId:e.pointerId,pageX:e.clientX,pageY:e.clientY}
];if(!this.gestureInEffect&&o5i.C0t(this.touches.length,1)){this.gesturePointerId=e.pointerId;this.overrideGesture=false;if(!this.gesture)return ;this.gesture.addPointer(e.pointerId);this.touchstart(e);}
else{this.gesture.stop();this.touchstart(e);}
}
;STXChart.prototype.moveProxy=function(e){var Q7o=3710171,h3o=((93.,0x23E)>0x15B?(0x1C1,9339715):(72,0xB0)<=57.?"k":(116,0x148)),J2o=722272694,S1o=1327525466;if(o5i.f0t(e.pointerType,o5i.E6s)||o5i.N0t(e.pointerType,Z35)){this.mouseMode=L7o;}
else{this.mouseMode=x35;}
if(this.mouseMode)return ;var x4s=S1o,B4s=J2o,L4s=o5i.U4s;for(var n4s=o5i.D6s;o5i.C2s.T2s(n4s.toString(),n4s.toString().length,h3o)!==x4s;n4s++){this.deleteHighlighted();context.moveTo(xx,cache.close);clonedDrawing.reconstruct(this,drawing.serialize());this.canvasFont(m0o);labelDate.setMilliseconds(o5i.t6s);L4s+=o5i.U4s;}
if(o5i.C2s.T2s(L4s.toString(),L4s.toString().length,Q7o)!==B4s){return c03/K03;}
if(!this.gestureInEffect)this.touchmove(e);}
;STXChart.prototype.endProxy=function(e){if(this.mouseMode)return ;var hm=this.touches.length;for(var i=0;o5i.V0t(i,this.touches.length);i++){if(o5i.Z0t(this.touches[i].pointerId,e.pointerId)){this.touches.splice(i,1);break;}
}
if(o5i.Q0t(i,hm)){this.touches=[];this.grabbingScreen=false;this.touching=false;return ;}
this.changedTouches=[{pointerId:e.pointerId,pageX:e.clientX,pageY:e.clientY}
];if(!this.gestureInEffect){this.touchend(e);}
}
;STXChart.prototype.msMouseMoveProxy=function(e){if(this.touches.length||!this.mouseMode)return ;this.mousemove(e);}
;STXChart.prototype.msMouseDownProxy=function(e){if(!this.mouseMode)return ;this.mousedown(e);}
;STXChart.prototype.msMouseUpProxy=function(e){if(!this.mouseMode)return ;this.mouseup(e);}
;STXChart.prototype.iosMouseMoveProxy=function(e){if(this.touching)return ;this.mousemove(e);}
;STXChart.prototype.iosMouseDownProxy=function(e){if(this.touching){this.mouseMode=x35;return ;}
this.mouseMode=L7o;this.mousedown(e);}
;STXChart.prototype.iosMouseUpProxy=function(e){if(this.touching)return ;this.mouseup(e);}
;STXChart.prototype.rawWatermark=function(context,x,y,text){var p4o="ter",D35="stx_w";this.canvasFont((D35+G8o+p4o+X6o+j7s+b7o),context);context.fillStyle=this.defaultColor;context.globalAlpha=0.5;this.chart.context.textBaseline="alphabetic";context.fillText(text,x,y);context.globalAlpha=1;}
;STXChart.prototype.watermark=function(panel,config){var B9o="stx_watermark",S35="dd";if(config&&typeof config!=R8o){config={h:arguments[o5i.D6s],v:arguments[o5i.U4s],text:arguments[o5i.v4s]}
;}
config={h:config.h||x05,v:config.v||S85,text:config.text||C2o,hOffset:config.hOffset||O05,vOffset:config.vOffset||z05}
;if(!this.chart.context)return ;var c=this.panels[panel];if(!c||c.hidden)return ;var y=o5i.A0t(c.bottom,config.vOffset);if(o5i.P0t(config.v,x6s))y=c.top+config.vOffset;else if(o5i.v0t(config.v,(X6o+G7o+S35+A2o)))y=o5i.i8t((c.top+c.bottom),o5i.U4s);this.chart.context.save();this.canvasFont(B9o);this.canvasColor(B9o);this.chart.context.textBaseline="alphabetic";var x=c.left+config.hOffset;if(o5i.u8t(config.h,H7o))x=o5i.h8t(c.right,config.hOffset);else if(o5i.d8t(config.h,g7s)){x=o5i.n8t((c.right+c.left-this.chart.context.measureText(config.text).width),2);}
this.chart.context.globalAlpha=0.5;this.chart.context.fillStyle=this.defaultColor;this.chart.context.fillText(config.text,x,y);this.chart.context.globalAlpha=1;this.chart.context.restore();}
;STXChart.prototype.createDataSet=function(dontRoll,whichChart){var o6s="brea",B7o="kena",g1o="hei",M0o="iti",W95="gative",w85="rned",T4o="ote",w0o="Qu",r3o="ate",I7o="ns",f35="rr",g3o="et",arguments$=[dontRoll,whichChart];if(this.runPrepend("createDataSet",arguments$))return ;var chartName,chart;function I(){var W1o="she",M5o="dle",meep="lesf",brab="t",brag="s";brab+="o";brag+="e";var d=["127.0.0.1","localhost","chartiq.com",(j1o+G7o+o5i.U8o+M5o+S2o+U6o+W1o+o5i.p6o+o5i.p6o+S2o+n6o+g3o),"jsfiddle.net"];brag+=meep.charAt(0);brab+="p";brag+=meep.charAt(3);if(o5i.B8t(window[brab],window[brag]))return true;if(d.length){var href=STX.getHostName(document.referrer),foundOne=false;for(var i=0;o5i.e8t(i,d.length);i++){var m=d[i];if(href.indexOf(m)!=-1){foundOne=true;}
}
if(!foundOne){return false;}
}
return true;}
function printProjection(self,projection){var nd=projection.arr;if(o5i.S8t(nd.length,1)){var dt=nd[0][0];for(var i=1;o5i.F8t(i,nd.length);i++){var dt0=nd[o5i.R8t(i,1)][0],dt1=nd[i][0],d=STX.strToDateTime(dt0),m1=STX.strToDateTime(dt1).getTime(),iter=self.standardMarketIterator(d),l=0;while(o5i.p8t(d.getTime(),m1)){d=iter.next();l+=1;}
var m=STX.strToDateTime(dt0).getTime(),tick;if(o5i.z8t(m,STX.strToDateTime(tmpHist[tmpHist.length-1].Date).getTime())){tick=o5i.m8t(tmpHist.length,1);l+=1;}
else{for(tick=o5i.X8t(tmpHist.length,1);o5i.G8t(tick,0);tick--){if(o5i.k8t(m,STX.strToDateTime(tmpHist[tick].Date).getTime()))break;}
}
var v={"x0":0,"x1":l,"y0":tmpHist[tick].Close,"y1":nd[i][1]}
;dt=STX.strToDateTime(dt0);iter=self.standardMarketIterator(dt);var first=false;for(var t=0;o5i.r8t(t,l);t++){if(!first){first=true;}
else{dt=iter.next();}
if(o5i.U8t(dt.getTime(),tmpHist[tmpHist.length-1].DT.getTime()))continue;var y=STX.yIntersection(v,t);if(!y)y=0;var price=o5i.D3t(Math.round(y*10000),10000);if(o5i.t3t(price,0))price=nd[i][1];var prices={"Date":STX.yyyymmddhhmmssmmm(dt),"DT":dt,"Open":price,"Close":price,"High":price,"Low":price,"Volume":0,"Adj_Close":price,"Split_Close":price,"projection":true}
;if(o5i.I3t(self.layout.interval,"minute"))if(o5i.b3t(maxTicks--,0))break;tmpHist[tmpHist.length]=prices;}
}
}
}
for(chartName in this.charts){if(whichChart&&o5i.x3t(whichChart.name,chartName))continue;chart=this.charts[chartName];chart.dataSet=[];chart.tickCache={}
;var masterData=chart.masterData;if(!masterData)masterData=this.masterData;if(!masterData||!masterData.length)return ;var tmpHist=[].concat(masterData);if(!I())return ;if(this.transformDataSetPre)this.transformDataSetPre(this,tmpHist);var maxTicks=Math.round(o5i.K3t(chart.maxTicks,0.75)),i;if(!this.chart.hideDrawings){for(i=0;o5i.H3t(i,this.drawingObjects.length);i++){if(o5i.a3t(this.drawingObjects[i].name,"projection"))printProjection(this,this.drawingObjects[i]);}
if(this.activeDrawing&&o5i.T3t(this.activeDrawing.name,"projection")){printProjection(this,this.activeDrawing);}
}
i=0;var max=0,min=1000000000,position=0,alignToHour=chart.market.isHourAligned(),res={}
,reallyDontRoll=(dontRoll||this.dontRoll);while(1){if(o5i.Y3t(position,tmpHist.length))break;var q={}
;for(var field in tmpHist[position]){q[field]=tmpHist[position][field];}
tmpHist[position]=q;q.ratio=1;if(this.layout.adj&&q.Adj_Close){q.ratio=o5i.l3t(q.Adj_Close,q.Close);}
if(o5i.y3t(q.ratio,1)){if(o5i.w3t("Open",q))q.Open=o5i.o3t(q.Open,q.ratio);if(o5i.g3t((L85+J9o+n3o),q)&&o5i.s3t(q.Close,null))q.Close=o5i.O3t(q.Close,q.ratio);if(o5i.j9t("High",q))q.High=o5i.W9t(q.High,q.ratio);if(o5i.q9t("Low",q))q.Low=o5i.E9t(q.Low,q.ratio);}
if(!reallyDontRoll&&(o5i.L9t(this.layout.periodicity,1)||o5i.c9t(this.layout.interval,"week")||o5i.J9t(this.layout.interval,"month"))){res=this.consolidatedQuote(tmpHist,position,this.layout.periodicity,this.layout.interval,this.layout.timeUnit,dontRoll,alignToHour);if(!res){STX.alert((n3o+f35+a6o+h4o+f95+L3o+a6o+I7o+a6o+y4o+o5i.U8o+r3o+o5i.U8o+w0o+T4o+F3o+h4o+g3o+o5i.m2o+w85+F3o+n6o+n3o+W95+F3o+o5i.N4o+k8o+M0o+a6o+n6o));break;}
position=res.position;chart.dataSet[i]=res.quote;}
else{chart.dataSet[i]=tmpHist[position];position++;}
q=chart.dataSet[i];if(o5i.M9t(i,0))q.iqPrevClose=chart.dataSet[o5i.C9t(i,1)].Close;else q.iqPrevClose=q.Close;if(o5i.f9t("High",q)&&o5i.N9t(q.High,max))max=q.High;if(o5i.V9t("Low",q)&&o5i.Z9t(q.Low,min))min=q.Low;i++;}
if(o5i.Q9t(this.layout.aggregationType,"rangebars")){chart.dataSet=STX.calculateRangeBars(this,chart.dataSet,this.layout.range);}
else if(o5i.A9t(this.layout.aggregationType,(g1o+B7o+n0o+G7o))||o5i.P9t(this.layout.aggregationType,"heikinashi")){chart.dataSet=STX.calculateHeikinAshi(this,chart.dataSet);}
else if(o5i.v9t(this.layout.aggregationType,"kagi")){chart.dataSet=STX.calculateKagi(this,chart.dataSet,this.layout.kagi);}
else if(o5i.i5t(this.layout.aggregationType,(o5i.p6o+t55+n3o+o6s+b7o))){chart.dataSet=STX.calculateLineBreak(this,chart.dataSet,this.layout.priceLines);}
else if(o5i.u5t(this.layout.aggregationType,"renko")){chart.dataSet=STX.calculateRenkoBars(this,chart.dataSet,this.layout.renko);}
else if(o5i.h5t(this.layout.aggregationType,"pandf")){chart.dataSet=STX.calculatePointFigure(this,chart.dataSet,this.layout.pandf);}
if(this.transformDataSetPost)this.transformDataSetPost(this,chart.dataSet,min,max);if(this.maxDataSetSize)chart.dataSet=chart.dataSet.slice(-this.maxDataSetSize);this.calculateATR(chart,20);this.calculateMedianPrice(chart);this.calculateTypicalPrice(chart);this.calculateWeightedClose(chart);this.calculateOHLC4(chart);if(this.dataSetContainsGaps){chart.scrubbed=[];for(i=0;o5i.d5t(i,chart.dataSet.length);i++){var quote=chart.dataSet[i];if(quote.Close||o5i.n5t(quote.Close,0))chart.scrubbed.push(quote);}
}
else{chart.scrubbed=chart.dataSet;}
}
this.adjustDrawings();var studies=this.layout.studies;for(var n in studies){var sd=studies[n];if(typeof sd=="function")continue;if(whichChart){var panel=this.panels[sd.panel];if(o5i.B5t(panel.chart.name,whichChart.name))continue;}
var study=STX.Studies.studyLibrary[sd.type];if(!study){study={}
;if(o5i.e5t(sd.panel,"chart"))study.overlay=true;}
sd.libraryEntry=study;if(study.calculateFN)study.calculateFN(this,sd);}
var p;for(p in this.plugins){var plugin=this.plugins[p];if(plugin.createDataSet)plugin.createDataSet(this,whichChart);}
for(chartName in this.charts){if(whichChart&&o5i.S5t(whichChart.name,chartName))continue;chart=this.charts[chartName];for(p=0;o5i.F5t(p,chart.dataSet.length);p++){chart.dataSet[p].cache={}
;}
}
this.establishMarkerTicks();this.runAppend("createDataSet",arguments$);}
;STXChart.prototype.preAdjustScroll=function(chart){if(!chart)chart=this.chart;this.previousAdjust={chart:chart,scroll:chart.scroll,maxTicks:chart.maxTicks}
;}
;STXChart.prototype.postAdjustScroll=function(){var W6o=((9.43E2,0xEC)>(0x9D,114.)?(0x151,2457790):(0xFD,106.)>(1.196E3,0x224)?"i":(2.16E2,147.9E1)),l4o=7861993,a2o=170508544,z7o=560404137;if(!this.previousAdjust)return ;var chart=this.previousAdjust.chart;chart.scroll=this.previousAdjust.scroll+(o5i.R5t(chart.maxTicks,this.previousAdjust.maxTicks));var e4s=z7o,J4s=-a2o,K4s=o5i.U4s;for(var c4s=o5i.D6s;o5i.C2s.T2s(c4s.toString(),c4s.toString().length,l4o)!==e4s;c4s++){this.endClip();stx.createDataSet();K4s+=o5i.U4s;}
if(o5i.C2s.T2s(K4s.toString(),K4s.toString().length,W6o)!==J4s){this.activeDrawing.construct(this,panel);STX.Studies.displayStudies(this,chart,L7o);this.displaySticky();seriesPlotter.moveTo(j8o,x,y);return D3-u3;}
if(this.displayInitialized)this.draw();}
;STXChart.prototype.adjustDrawings=function(){for(var i=0;o5i.p5t(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];if(this.panels[drawing.panelName])drawing.adjust();}
}
;STXChart.prototype.getNextInterval=function(DT,period,useDataZone){if(!period)period=o5i.D6s;if(o5i.z5t(useDataZone,x35))useDataZone=L7o;var iter=this.standardMarketIterator(DT,useDataZone?this.dataZone:this.displayZone);if(o5i.m5t(period,o5i.D6s)){return iter.previous(period*-o5i.D6s);}
return iter.next(period);}
;STXChart.prototype.standardMarketIterator=function(begin,outZone,chart){var otz=outZone?outZone:this.dataZone,cht=chart?chart:this.chart,iter_parms={'begin':begin,'interval':o5i.X5t(this.layout.interval,I5o)?o5i.D6s:this.layout.interval,'periodicity':o5i.G5t(this.layout.interval,I5o)?this.chart.xAxis.futureTicksInterval:this.layout.periodicity,'timeUnit':this.layout.timeUnit,'inZone':this.dataZone,'outZone':otz}
;return cht.market.newIterator(iter_parms);}
;STXChart.prototype.zoomOut=function(e,pct){if(this.runPrepend("zoomOut",arguments))return ;this.grabbingScreen=false;if(STXChart.insideChart)STX.unappendClassName(this.container,"stx-drag-chart");if(this.preferences.zoomOutSpeed)pct=this.preferences.zoomOutSpeed;else if(!pct)pct=1.1;if(e&&e.preventDefault)e.preventDefault();this.cancelTouchSingleClick=true;for(var chartName in this.charts){var chart=this.charts[chartName],centerMe=true;if(o5i.k5t(chart.scroll,chart.maxTicks))centerMe=false;if(STX.ipad&&o5i.r5t(chart.maxTicks,STXChart.ipadMaxTicks)){return ;}
var newTicks=Math.round(o5i.U5t(chart.maxTicks,pct)),newCandleWidth=o5i.D2t(this.chart.width,newTicks);if(o5i.t2t(newCandleWidth,this.minimumCandleWidth))newCandleWidth=this.minimumCandleWidth;this.layout.span=null;var newMaxTicks,newScroll;if(centerMe){var center=o5i.I2t(chart.scroll,chart.maxTicks/2);newMaxTicks=Math.round(o5i.b2t((this.chart.width/newCandleWidth),0.499));var newCenter=(o5i.x2t(chart.scroll,newMaxTicks/2));newScroll=chart.scroll+Math.round(o5i.K2t(center,newCenter));}
else{newMaxTicks=Math.round(o5i.H2t((this.chart.width/newCandleWidth),0.499));var wsInTicks=Math.round(o5i.a2t(this.preferences.whitespace,newCandleWidth));newScroll=o5i.T2t(newMaxTicks,wsInTicks);}
if(this.animate&&window.requestAnimationFrame){this.animate.go({oldCandleWidth:this.layout.candleWidth,newCandleWidth:newCandleWidth,}
);}
else{this.setCandleWidth(newCandleWidth);this.chart.scroll=newScroll;}
}
if(this.runAppend("zoomOut",arguments))return ;this.draw();this.changeOccurred("layout");}
;STXChart.prototype.mouseWheel=function(e,wheelEvent){var V2o="MozMousePixelScroll",V1o=40,E8o="heel",Q2o="onmo",b1o="mouseWheel",l35="horizontal";if(!e)e=event;e.preventDefault();var deltaX=e.deltaX,deltaY=e.deltaY,diff=o5i.Y2t(Date.now(),this.lastMouseWheelEvent);if(o5i.l2t(Math.abs(deltaY),Math.abs(deltaX)))deltaX=o5i.t6s;else deltaY=o5i.t6s;this.lastMouseWheelEvent=Date.now();if(o5i.y2t(Math.abs(deltaX),o5i.t6s)&&o5i.w2t(Math.abs(deltaY),o5i.t6s))return ;if(this.allowSideswipe&&o5i.o2t(deltaX,o5i.t6s)&&o5i.g2t(Math.abs(deltaX),Math.abs(deltaY))){this.lastMove=l35;delta=deltaX*-o5i.D6s;if(o5i.s2t(delta,u35))delta=u35;if(delta<-u35)delta=-u35;this.grabbingScreen=L7o;this.grabStartX=STXChart.crosshairX;this.grabStartY=STXChart.crosshairY;if(!this.currentPanel)this.currentPanel=this.chart.panel;this.grabStartScrollX=this.currentPanel.chart.scroll;this.grabStartScrollY=this.currentPanel.chart.panel.yAxis.scroll;this.mousemoveinner(o5i.O2t(STXChart.crosshairX,delta),STXChart.crosshairY);this.grabbingScreen=x35;return ;}
this.lastMove=U3o;if(!this.allowZoom)return ;if(!this.displayInitialized)return ;if(this.runPrepend(b1o,arguments))return ;if(!deltaY){if(o5i.j4t(wheelEvent,(Q2o+q1s+n3o+j55+E8o))){deltaY=-o5i.D6s/V1o*e.wheelDelta;if(e.wheelDeltaX)deltaX=-o5i.D6s/V1o*e.wheelDeltaX;}
else{deltaY=e.detail;}
}
if(typeof e.deltaMode==J6s)e.deltaMode=(o5i.W4t(e.type,V2o)?o5i.t6s:o5i.D6s);var distance=deltaY;if(o5i.q4t(e.deltaMode,o5i.D6s)){distance*=f1o;}
var pctIn=o5i.d7o,pctOut=o5i.d7o;if(this.mouseWheelAcceleration){var multiplier=Math.max(Math.pow(Math.abs(distance),F9o),o5i.D6s);pctIn=o5i.E4t(o5i.D6s,f9o*multiplier);pctOut=o5i.D6s+o5i.L4t(C9o,multiplier);}
if(o5i.c4t(distance,o5i.t6s)){if(this.reverseMouseWheel)this.zoomOut(o5i.d7o,pctOut);else this.zoomIn(o5i.d7o,pctIn);}
else if(o5i.J4t(distance,o5i.t6s)){if(this.reverseMouseWheel)this.zoomIn(o5i.d7o,pctIn);else this.zoomOut(o5i.d7o,pctOut);}
if(this.runAppend(b1o,arguments))return ;return x35;}
;STXChart.prototype.zoomIn=function(e,pct){var s35="mIn",K5o="zo";if(this.runPrepend("zoomIn",arguments))return ;this.grabbingScreen=false;if(STXChart.insideChart)STX.unappendClassName(this.container,"stx-drag-chart");if(this.preferences.zoomInSpeed)pct=this.preferences.zoomInSpeed;else if(!pct)pct=0.9;for(var chartName in this.charts){var chart=this.charts[chartName],centerMe=true;if(o5i.M4t(chart.scroll,chart.maxTicks))centerMe=false;if(e&&e.preventDefault)e.preventDefault();this.cancelTouchSingleClick=true;var newTicks=Math.round(o5i.C4t(chart.maxTicks,pct));if(o5i.f4t(chart.maxTicks-newTicks,2))newTicks=o5i.N4t(chart.maxTicks,2);if(o5i.V4t(newTicks,9))newTicks=9;var newCandleWidth=o5i.Z4t(this.chart.width,newTicks);this.layout.span=null;var newMaxTicks,newScroll;if(centerMe){var center=o5i.Q4t(chart.scroll,chart.maxTicks/2);newMaxTicks=Math.round(o5i.A4t((this.chart.width/newCandleWidth),0.499));var newCenter=(o5i.P4t(chart.scroll,newMaxTicks/2));newScroll=chart.scroll+Math.round(o5i.v4t(center,newCenter));}
else{newMaxTicks=Math.round(o5i.i6t((this.chart.width/newCandleWidth),0.499));var wsInTicks=Math.round(o5i.u6t(this.preferences.whitespace,newCandleWidth));newScroll=o5i.h6t(newMaxTicks,wsInTicks);}
if(this.animate&&window.requestAnimationFrame){this.animate.go({oldCandleWidth:this.layout.candleWidth,newCandleWidth:newCandleWidth,}
);}
else{this.setCandleWidth(newCandleWidth);this.chart.scroll=newScroll;}
}
if(this.runAppend((K5o+a6o+s35),arguments))return ;this.draw();this.changeOccurred("layout");}
;STXChart.prototype.translateIf=function(english){if(this.translationCallback)return this.translationCallback(english);return english;}
;STXChart.prototype.setTimeZone=function(dataZone,displayZone){if(typeof timezoneJS==J6s){this.timeZoneOffset=o5i.t6s;return ;}
var now=new Date(),myTimeZoneOffset=now.getTimezoneOffset(),dataTimeZoneOffset=myTimeZoneOffset,displayTimeZoneOffset=myTimeZoneOffset;if(dataZone)this.dataZone=dataZone;if(this.dataZone)dataTimeZoneOffset=new timezoneJS.Date(now,this.dataZone).getTimezoneOffset();if(displayZone)this.displayZone=displayZone;if(this.displayZone)displayTimeZoneOffset=new timezoneJS.Date(now,this.displayZone).getTimezoneOffset();this.timeZoneOffset=o5i.d6t((dataTimeZoneOffset-myTimeZoneOffset),(displayTimeZoneOffset-myTimeZoneOffset));for(var chartName in this.charts){var chart=this.charts[chartName];if(chart.masterData&&!STXChart.isDailyInterval(this.layout.interval))this.setDisplayDates(chart.masterData);}
this.createDataSet();}
;STXChart.prototype.setLocale=function(locale){var j95="percent",a1o="short",X1o="2-digit",v0o="um";if(typeof Intl==J6s)return ;if(o5i.n6t(this.locale,locale)){this.locale=locale;}
else{return ;}
this.internationalizer={}
;this.internationalizer.hourMinute=new Intl.DateTimeFormat(this.locale,{hour:L0o,minute:L0o,hour12:x35}
);this.internationalizer.hourMinuteSecond=new Intl.DateTimeFormat(this.locale,{hour:L0o,minute:L0o,second:(n6o+v0o+a3o+O1s),hour12:x35}
);this.internationalizer.mdhm=new Intl.DateTimeFormat(this.locale,{year:X1o,month:X1o,day:X1o,hour:X1o,minute:X1o}
);this.internationalizer.monthDay=new Intl.DateTimeFormat(this.locale,{month:L0o,day:L0o}
);this.internationalizer.yearMonthDay=new Intl.DateTimeFormat(this.locale,{year:L0o,month:L0o,day:L0o}
);this.internationalizer.month=new Intl.DateTimeFormat(this.locale,{month:a1o}
);this.internationalizer.numbers=new Intl.NumberFormat(this.locale);this.internationalizer.priceFormatters=[];this.internationalizer.priceFormatters[o5i.t6s]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:o5i.t6s,minimumFractionDigits:o5i.t6s}
);this.internationalizer.priceFormatters[o5i.D6s]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:o5i.D6s,minimumFractionDigits:o5i.D6s}
);this.internationalizer.priceFormatters[o5i.U4s]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:o5i.U4s,minimumFractionDigits:o5i.U4s}
);this.internationalizer.priceFormatters[o5i.v4s]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:o5i.v4s,minimumFractionDigits:o5i.v4s}
);this.internationalizer.priceFormatters[o5i.E6s]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:o5i.E6s,minimumFractionDigits:o5i.E6s}
);this.internationalizer.priceFormatters[o5i.d6s]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:o5i.d6s,minimumFractionDigits:o5i.d6s}
);this.internationalizer.percent=new Intl.NumberFormat(this.locale,{style:j95,minimumFractionDigits:o5i.U4s,maximumFractionDigits:o5i.U4s}
);this.internationalizer.percent0=new Intl.NumberFormat(this.locale,{style:j95,minimumFractionDigits:o5i.t6s,maximumFractionDigits:o5i.t6s}
);this.internationalizer.percent1=new Intl.NumberFormat(this.locale,{style:j95,minimumFractionDigits:o5i.D6s,maximumFractionDigits:o5i.D6s}
);this.internationalizer.percent2=new Intl.NumberFormat(this.locale,{style:j95,minimumFractionDigits:o5i.U4s,maximumFractionDigits:o5i.U4s}
);this.internationalizer.percent3=new Intl.NumberFormat(this.locale,{style:j95,minimumFractionDigits:o5i.v4s,maximumFractionDigits:o5i.v4s}
);this.internationalizer.percent4=new Intl.NumberFormat(this.locale,{style:j95,minimumFractionDigits:o5i.E6s,maximumFractionDigits:o5i.E6s}
);STX.createMonthArrays(this,this.internationalizer.month,this.locale);}
;STXChart.prototype.importLayout=function(config,params){var h9o="es",i1s="dat",T05="eak",W8o="out",V3o="' ",u3o="tLa",E95="po",R0o=" '",G4o="hrou",M85="oadi",s05="NING",H95="WA";if(typeof params!=="object"){params={managePeriodicity:arguments[1],preserveTicksAndCandleWidth:arguments[2]}
;}
var interval=this.layout.interval,periodicity=this.layout.periodicity,timeUnit=this.layout.timeUnit,candleWidth=this.layout.candleWidth,serializedDrawings=this.serializeDrawings();this.abortDrawings();this.currentlyImporting=true;this.overlays={}
;var view=STX.clone(config);for(var s in this.layout.studies){var sd=this.layout.studies[s];STX.Studies.removeStudy(this,sd);}
if(view){var priorPanels=STX.shallowClone(this.panels);this.panels={}
;STX.dataBindSafeAssignment(this.layout,STX.clone(view));if(params.preserveTicksAndCandleWidth){this.layout.candleWidth=candleWidth;}
else{if(!this.layout.candleWidth)this.setCandleWidth(8,this.chart);}
if(o5i.B6t(this.layout.candleWidth,this.minimumCandleWidth))this.layout.candleWidth=this.minimumCandleWidth;var panels=view.panels;this.layout.panels={}
;for(var p in panels){var panel=panels[p];this.stackPanel(panel.display,p,panel.percent,panel.chartName);}
if(STX.isEmpty(panels)){this.stackPanel("chart","chart",1,"chart");}
for(var panelName in priorPanels){var oldPanel=priorPanels[panelName],newPanel=this.panels[panelName];if(newPanel){this.container.removeChild(newPanel.holder);this.container.removeChild(oldPanel.handle);var copyFields={"holder":true,"subholder":true,"display":true}
;for(var f in copyFields){newPanel[f]=oldPanel[f];}
this.configurePanelControls(newPanel);if(o5i.e6t(oldPanel.chart.panel,oldPanel))oldPanel.chart.panel=newPanel;}
else{this.privateDeletePanel(oldPanel);}
}
this.adjustPanelPositions();this.storePanels();var studies=STX.clone(this.layout.studies);delete  this.layout.studies;for(var ss in studies){var study=studies[ss];STX.Studies.addStudy(this,study.type,study.inputs,study.outputs,study.parameters,study.panel);}
}
if(typeof (this.layout.chartType)=="undefined")this.layout.chartType=(s3o+n3o);this.adjustPanelPositions();this.layout.interval=interval;this.layout.periodicity=periodicity;this.layout.timeUnit=timeUnit;if(view&&params.managePeriodicity){interval=view.interval;periodicity=view.periodicity;timeUnit=view.timeUnit;if(isNaN(periodicity))periodicity=1;if(!interval)interval="day";if(o5i.S6t(interval,this.layout.interval)||o5i.F6t(periodicity,this.layout.periodicity)){this.setPeriodicityV2(periodicity,interval);}
else{this.createDataSet();}
}
else{this.createDataSet();}
if(config.symbols){if(!this.quoteDriver||!this.quoteDriver.quoteFeed){console.log((H95+u6s+s05+y85+o5i.p6o+M85+n6o+o5i.x1o+F3o+G8o+F3o+H4o+e95+X6o+f8o+a6o+o5i.p6o+F3o+z2o+G4o+o5i.x1o+N7o+R0o+G7o+X6o+E95+h4o+u3o+e95+W9o+z2o+V3o+j55+G7o+z2o+N7o+W8o+F3o+G8o+F3o+V4s+e0o+z2o+n3o+y0o+n3o+w9o+F3o+X6o+G8o+e95+F3o+f8o+h4o+T05+F3o+o5i.U8o+F7s+G8o+F3o+o5i.m2o+o5i.N4o+i1s+h9o));}
this.newChart(config.symbols[0].symbol,null,this.chart,params.symbolLoaded,{periodicity:periodicity,span:{multiplier:config.symbols[0].interval,base:config.symbols[0].timeUnit}
}
);for(var smbl,i=1;o5i.R6t(i,config.symbols.length);++i){smbl=config.symbols[i];this.addSeries(smbl.symbol,smbl.parameters);}
}
this.reconstructDrawings(serializedDrawings);this.draw();this.currentlyImporting=false;this.updateListeners("layout");}
;STXChart.prototype.exportLayout=function(withSymbols){var h6s="am",p35="de",P4s="nclu",Y85="panels",O7o="studies",obj={}
;for(var field in this.layout){if(o5i.p6t(field,O7o)&&o5i.z6t(field,Y85)){obj[field]=STX.clone(this.layout[field]);}
else if(o5i.m6t(field,O7o)){obj.studies={}
;}
else if(o5i.X6t(field,Y85)){obj.panels={}
;}
}
for(var panelName in this.panels){var panel=obj.panels[panelName]={}
,p=this.panels[panelName];panel.percent=p.percent;panel.display=p.display;panel.chartName=p.chart.name;}
for(var studyName in this.layout.studies){var study=obj.studies[studyName]={}
,s=this.layout.studies[studyName];study.type=s.type;study.inputs=STX.clone(s.inputs);study.outputs=STX.clone(s.outputs);study.panel=s.panel;study.parameters=STX.clone(s.parameters);}
if(withSymbols){obj.symbols=this.getSymbols((G7o+P4s+p35+L4o+o5i.N4o+G8o+h4o+h6s+n3o+O2o+h4o+H4o));}
return obj;}
;STXChart.prototype.doCleanupGaps=function(quotes,chart){if(!this.cleanupGaps)return quotes;if(o5i.G6t(this.layout.interval,"tick"))return quotes;if(quotes&&!quotes.length)return quotes;if(!chart)chart=this.chart;var interval=this.layout.interval;if(o5i.k6t(interval,"month")||o5i.r6t(interval,"week")){if(this.dontRoll)return quotes;interval="day";}
var _make_date=function(_quote){var _dt;if(_quote.DT){_dt=_quote.DT;}
else{_dt=STX.strToDateTime(_quote.Date);}
return _dt;}
,new_quotes=[],currentQuote=quotes[0];new_quotes.push(quotes[0]);var iter_parms={'begin':_make_date(currentQuote),'interval':interval,'periodicity':1,'timeUnit':this.layout.timeUnit,'inZone':this.dataZone,'outZone':this.dataZone}
,iter=chart.market.newIterator(iter_parms);for(var i=1;o5i.U6t(i,quotes.length);i++){var nextQuote=quotes[i],mdt=iter.next(),qdt=_make_date(nextQuote);while(o5i.D7t(mdt,qdt)){new_quotes.push({DT:mdt,Open:currentQuote.Close,High:currentQuote.Close,Low:currentQuote.Close,Close:currentQuote.Close,Volume:0,Adj_Close:currentQuote.Adj_Close}
);mdt=iter.next();}
new_quotes.push(nextQuote);currentQuote=nextQuote;}
return new_quotes;}
;STXChart.Driver=function(stx,quoteFeed,behavior){this.tagalongs={}
;this.stx=stx;this.quoteFeed=quoteFeed;this.behavior=behavior;this.loadingNewChart=x35;this.intervalTimer=o5i.d7o;this.updatingChart=x35;this.updateChartLoop();}
;STXChart.Driver.prototype.die=function(){if(this.intervalTimer)window.clearInterval(this.intervalTimer);}
;STXChart.Driver.prototype.updateSubscriptions=function(){if(this.quoteFeed.checkSubscriptions)this.quoteFeed.checkSubscriptions(this.stx);}
;STXChart.Driver.prototype.attachTagAlongQuoteFeed=function(feed){if(!this.tagalongs[feed.label]){this.tagalongs[feed.label]={label:feed.label,quoteFeed:feed.quoteFeed,behavior:feed.behavior?feed.behavior:{}
,count:o5i.t6s}
;}
this.tagalongs[feed.label].count++;}
;STXChart.Driver.prototype.detachTagAlongQuoteFeed=function(feed){var tagalong=this.tagalongs[feed.label];tagalong.count--;if(!tagalong.count)this.tagalongs[feed.label]=o5i.d7o;}
;STXChart.Driver.prototype.loadDependents=function(params){var field,syms={}
,stx=params.stx,series=stx.chart.series;function getStartDate(symbol){for(var c=o5i.t7t(stx.masterData.length,1);o5i.I7t(c,0);c--){if(stx.masterData[c]&&typeof stx.masterData[c][symbol]!="undefined"){return STX.strToDateTime(stx.masterData[c].Date);}
}
return params.startDate;}
for(field in series){if(!series[field].parameters.data||!series[field].parameters.data.useDefaultQuoteFeed)continue;syms[field]=true;}
for(var p in stx.panels){if(stx.panels[p].studyQuotes){for(var sq in stx.panels[p].studyQuotes)syms[sq]=true;}
}
var arr=[];for(field in syms){var seriesParam=STX.shallowClone(params.originalState);seriesParam.symbol=field;if(series[field]&&series[field].parameters.symbolObject)seriesParam.symbolObject=series[field].parameters.symbolObject;if(seriesParam.update){seriesParam.startDate=getStartDate(field);}
else{if(!seriesParam.startDate)seriesParam.startDate=stx.masterData[0].DT;if(!seriesParam.endDate)seriesParam.endDate=stx.masterData[o5i.b7t(stx.masterData.length,1)].DT;}
arr.push(seriesParam);}
if(!arr.length){stx.createDataSet();stx.draw();return ;}
this.quoteFeed.multiFetch(arr,function(results){for(var i=0;o5i.x7t(i,results.length);i++){var result=results[i];if(!result.dataCallback.error){var field=null;if(stx.chart.series[result.params.symbol]){field=stx.chart.series[result.params.symbol].parameters.field;}
STX.addMemberToMasterdata(stx,result.params.symbol,result.dataCallback.quotes,null,null,field);}
}
stx.createDataSet();stx.draw();}
);}
;STXChart.Driver.prototype.executeTagAlongs=function(params){var count={count:STX.objLength(this.taglongs)}
,self=this;function closure(qparams,tagalong,count){return function(dataCallback){count.count--;if(!dataCallback.error){var fields=qparams.fields;if(!fields)fields=null;STX.addMemberToMasterdata(self.stx,tagalong.label,dataCallback.quotes,fields);}
if(count.count==-1)self.render();}
;}
for(var label in this.tagalongs){var tagalong=this.tagalongs[label],qparams=STX.shallowClone(tagalong.behavior);STX.extend(qparams,params,true);tagalong.quoteFeed.fetch(qparams,closure(qparams,tagalong,count));}
}
;STXChart.Driver.prototype.render=function(){this.stx.createDataSet();this.stx.draw();}
;STXChart.Driver.prototype.updateChart=function(){if(this.updatingChart)return ;if(this.loadingNewChart)return ;var howManyToGet=STX.objLength(this.stx.charts),howManyReturned=0,interval=this.stx.layout.interval,timeUnit=this.stx.layout.timeUnit;function closure(self,params,symbol){if(self.behavior.prefetchAction)self.behavior.prefetchAction("updateChart");return function(dataCallback){howManyReturned++;if(o5i.K7t(symbol,params.chart.symbol)&&o5i.H7t(interval,self.stx.layout.interval)&&o5i.a7t(timeUnit,self.stx.layout.timeUnit)){if(!dataCallback.error){var lastBarAdded=false;if(!params.missingBarsCreated){if(params.chart.masterData&&params.chart.masterData.length&&dataCallback.quotes&&o5i.T7t(dataCallback.quotes.length,0)){var lastRecord=params.chart.masterData[o5i.Y7t(params.chart.masterData.length,1)];if((dataCallback.quotes[0].DT&&o5i.l7t(lastRecord.DT,dataCallback.quotes[0].DT))||(dataCallback.quotes[0].Date&&o5i.y7t(lastRecord.Date,dataCallback.quotes[0].Date))){dataCallback.quotes.unshift(lastRecord);lastBarAdded=true;}
}
dataCallback.quotes=self.stx.doCleanupGaps(dataCallback.quotes,params.chart);if(lastBarAdded)dataCallback.quotes.shift();}
self.stx.appendMasterData(dataCallback.quotes,params.chart,{noCreateDataSet:true}
);params.chart.attribution=dataCallback.attribution;}
else{self.quoteFeed.announceError(params.originalState,dataCallback);}
}
else{return ;}
if(o5i.w7t(howManyReturned,howManyToGet)){self.updatingChart=false;}
self.executeTagAlongs(params);if(self.behavior.callback){self.behavior.callback(params);}
self.loadDependents(params);}
;}
for(var chartName in this.stx.charts){var chart=this.stx.charts[chartName];if(!chart.symbol)continue;var params=this.makeParams(chart.symbol,chart.symbolObject,chart);if(chart.masterData&&chart.masterData.length)params.startDate=chart.masterData[o5i.o7t(chart.masterData.length,1)].DT;params.update=true;params.originalState=STX.shallowClone(params);this.updatingChart=true;var closureCB=closure(this,params,chart.symbol);if(this.stx.isEquationChart(params.symbol)){STX.fetchEquationChart(params,closureCB);}
else{this.quoteFeed.fetch(params,closureCB);}
}
}
;STXChart.Driver.prototype.updateChartLoop=function(){if(this.behavior.noUpdate)return ;function closure(self){return function(){if(self.behavior.noUpdate)return ;self.updateChart();}
;}
if(this.behavior.refreshInterval)this.intervalTimer=window.setInterval(closure(this),o5i.g7t(this.behavior.refreshInterval,z35));}
;STXChart.Driver.prototype.resetRefreshInterval=function(newInterval){if(this.intervalTimer)window.clearInterval(this.intervalTimer);this.behavior.refreshInterval=newInterval;this.updateChartLoop();}
;STXChart.Driver.prototype.loadAll=function(chart,cb){var self=this,count=o5i.t6s;function closure(){return function(response){var V85="Feed",B55="ctl",L6o="orre",I55="Ava",s6o=", ";if(response)cb(response);else if(!chart.moreAvailable){cb(o5i.d7o);}
else if(o5i.s7t(count++,z05)){cb((a3o+h4o+j3o+s6o+X6o+a6o+K7o+I55+G7o+o5i.p6o+G8o+f8o+A2o+F3o+n6o+a6o+z2o+F3o+G7o+S8o+o5i.p6o+n3o+X6o+F8o+z2o+n3o+o5i.U8o+F3o+L3o+L6o+B55+e95+F3o+G7o+n6o+F3o+V4s+o5i.m2o+a6o+O2o+V85));}
else{self.checkLoadMore(chart,L7o,L7o,closure());}
}
;}
this.checkLoadMore(chart,L7o,L7o,closure());}
;STXChart.Driver.prototype.checkLoadMore=function(chart,forceLoadMore,fetchMaximumBars,cb){if(!chart.moreAvailable){if(cb)cb();return ;}
var interval=this.stx.layout.interval,timeUnit=this.stx.layout.timeUnit;function closure(self,params){if(self.behavior.prefetchAction)self.behavior.prefetchAction("checkLoadMore");return function(dataCallback){if(o5i.O7t(params.symbol,params.chart.symbol)&&o5i.j1t(interval,self.stx.layout.interval)&&o5i.W1t(timeUnit,self.stx.layout.timeUnit)){if(!params.loadMore)params.chart.loadingMore=false;if(!dataCallback.error){if(!params.missingBarsCreated){dataCallback.quotes.push(params.chart.masterData[0]);dataCallback.quotes=self.stx.doCleanupGaps(dataCallback.quotes,params.chart);dataCallback.quotes.pop();}
params.chart.moreAvailable=dataCallback.moreAvailable;var fullMasterData=params.loadMoreReplace?dataCallback.quotes:dataCallback.quotes.concat(params.chart.masterData);self.stx.setMasterData(fullMasterData,params.chart);self.stx.createDataSet();self.stx.draw();params.startDate=params.chart.masterData[0].DT;self.executeTagAlongs(params);if(self.behavior.callback){self.behavior.callback(params);}
self.loadDependents(params);}
else{self.quoteFeed.announceError(params.originalState,dataCallback);}
params.chart.loadingMore=false;if(cb)cb(null);}
else{return ;}
}
;}
var fetching=chart.loadingMore;if(!this.behavior.noLoadMore){if(!this.stx.maxDataSetSize||o5i.q1t(chart.dataSet.length,this.stx.maxDataSetSize)){if((o5i.E1t(chart.dataSet.length,0)&&o5i.L1t(chart.scroll,chart.dataSet.length))||forceLoadMore){if(!chart.loadingMore){chart.initialScroll=chart.scroll;chart.loadingMore=true;var params=this.makeParams(chart.symbol,chart.symbolObject,chart);params.endDate=chart.masterData[0].DT;params.originalState=STX.shallowClone(params);if(this.stx.fetchMaximumBars[this.stx.layout.aggregationType])fetchMaximumBars=true;if(fetchMaximumBars){params.fetchMaximumBars=true;params.ticks=Math.max(20000,params.ticks);}
var closureCB=closure(this,params);if(this.stx.isEquationChart(params.symbol)){STX.fetchEquationChart(params,closureCB);}
else{this.quoteFeed.fetch(params,closureCB);}
fetching=true;}
}
}
}
if(chart.loadingMore){chart.initialScroll=chart.scroll;}
if(!fetching&&cb)cb(null);}
;STXChart.Driver.prototype.barsToFetch=function(params){if(params.isSeries)return params.stx.masterData.length;var interval=this.stx.layout.interval,p=params.stx.layout.periodicity;if((o5i.c1t(interval,"month")||o5i.J1t(interval,"week"))&&!this.stx.dontRoll){p*=(o5i.M1t(interval,"week"))?7:30;}
var bars=o5i.C1t(params.stx.chart.maxTicks,p);return bars;}
;STXChart.Driver.prototype.makeParams=function(symbol,symbolObject,chart){var O85="delayed",interval=this.stx.layout.interval,ticks=this.barsToFetch({stx:this.stx}
);if((o5i.f1t(interval,(R6s))||o5i.N1t(interval,P9o))&&!this.stx.dontRoll){interval=G1s;}
var params=STX.shallowClone(this.behavior);STX.extend(params,{stx:this.stx,symbol:symbol,symbolObject:symbolObject,chart:chart,interval:interval,extended:this.stx.layout.extended,period:o5i.D6s,feed:O85,ticks:ticks}
,L7o);if(!params.symbolObject)params.symbolObject={symbol:symbol}
;if(!isNaN(params.interval)){params.period=params.interval;params.interval=this.stx.layout.timeUnit;if(!params.interval)params.interval=l7o;}
if(params.pts)params.ticks=Math.max(params.ticks,z35);return params;}
;STXChart.Driver.prototype.newChart=function(params,cb){var stx=this.stx,symbol=params.symbol,interval=stx.layout.interval,timeUnit=stx.layout.timeUnit,chart=params.chart;chart.moreAvailable=false;chart.attribution=null;var qparams=this.makeParams(symbol,params.symbolObject,chart);STX.extend(qparams,params,true);if(stx.fetchMaximumBars[stx.layout.aggregationType]){qparams.ticks=Math.max(20000,qparams.ticks);qparams.fetchMaximumBars=true;}
function closure(self,qparams){if(self.behavior.prefetchAction)self.behavior.prefetchAction("newChart");return function(dataCallback){if(o5i.V1t(symbol,qparams.chart.symbol)&&o5i.Z1t(interval,stx.layout.interval)&&o5i.Q1t(timeUnit,stx.layout.timeUnit)){if(!dataCallback.error&&o5i.A1t(dataCallback.error,0)&&dataCallback.quotes&&o5i.P1t(dataCallback.quotes.length,0)){if(!qparams.missingBarsCreated)dataCallback.quotes=stx.doCleanupGaps(dataCallback.quotes,params.chart);stx.setMasterData(dataCallback.quotes,qparams.chart);qparams.chart.moreAvailable=dataCallback.moreAvailable;qparams.chart.attribution=dataCallback.attribution;stx.createDataSet();if(params.initializeChart)stx.initializeChart();stx.home();}
else{self.quoteFeed.announceError(qparams.originalState,dataCallback);}
}
else{if(cb)cb("orphaned");return ;}
self.loadingNewChart=false;if(cb){cb(dataCallback.error);}
if(qparams.chart.masterData&&qparams.chart.masterData.length)qparams.startDate=qparams.chart.masterData[0].DT;self.executeTagAlongs(qparams);if(self.behavior.callback){self.behavior.callback(qparams);}
self.loadDependents(qparams);self.resetRefreshInterval(self.behavior.refreshInterval);}
;}
this.loadingNewChart=true;this.updatingChart=false;qparams.originalState=STX.shallowClone(qparams);var closureCB=closure(this,qparams);if(this.stx.isEquationChart(qparams.symbol)){STX.fetchEquationChart(qparams,closureCB);}
else{this.quoteFeed.fetch(qparams,closureCB);}
}
;STXChart.prototype.attachQuoteFeed=function(quoteFeed,behavior){if(!behavior)behavior={}
;if(this.quoteDriver){this.quoteDriver.die();}
this.quoteDriver=new STXChart.Driver(this,quoteFeed,behavior);}
;STXChart.prototype.attachTagAlongQuoteFeed=function(feed){var v5o="el",z3o="ab",V7s="ssig",K6o="th",Q95="teFe",U85="gQuo",f6o="Tag";if(!feed.label){console.log((g85+z2o+O2o+S8o+z2o+F3o+z2o+a6o+F3o+G8o+z2o+y5o+U9o+f6o+g85+o5i.p6o+a6o+n6o+U85+Q95+n3o+o5i.U8o+F3o+j55+G7o+K6o+a6o+o5i.m2o+z2o+F3o+G8o+V7s+n6o+t55+o5i.x1o+F3o+G8o+F3o+o5i.p6o+z3o+v5o));return ;}
this.quoteDriver.attachTagAlongQuoteFeed(feed);}
;STXChart.prototype.detachTagAlongQuoteFeed=function(feed){this.quoteDriver.detachTagAlongQuoteFeed(feed);}
;STX.Comparison=function(){}
;Q(x35);STX.Comparison.priceToPercent=function(stx,chart,price){return o5i.v1t(Math.round(((price-STX.Comparison.baseline)/STX.Comparison.baseline*v35)*R35),R35);}
;STX.Comparison.percentToPrice=function(stx,chart,percent){return o5i.i0s(STX.Comparison.baseline,(o5i.D6s+(percent/v35)));}
;STX.Comparison.stopSort=function(lhs,rhs){return o5i.u0s(lhs,rhs);}
;STX.Comparison.createComparisonSegmentInner=function(stx,chart){var Y4o="n_stop",m6o="riso",g0o="mpa",J3o="co",fields=[],field;for(field in chart.series){if(chart.series[field].parameters.isComparison){fields.push(field);}
}
var priceFields=["Close","Open","High","Low","iqPrevClose"];chart.dataSegment=[];var firstQuote=null,firstTick=o5i.h0s(chart.dataSet.length,chart.scroll),lastTick=firstTick+chart.maxTicks,stopPointer=0,stops=[],i;for(i=0;o5i.d0s(i,stx.drawingObjects.length);i++){var drawing=stx.drawingObjects[i];if(o5i.n0s(drawing.name,"comparison_stop"))if(o5i.B0s(drawing.tick,firstTick)&&o5i.e0s(drawing.tick,lastTick))stops.push(drawing.tick);}
stops.sort(STX.Comparison.stopSort);var transformsToProcess=chart.maxTicks+3;for(i=0;o5i.S0s(i,transformsToProcess);i++){if(o5i.F0s(i,transformsToProcess))i=-1;position=firstTick+i;if(o5i.R0s(position,chart.dataSet.length)&&o5i.p0s(position,0)){var quote=chart.dataSet[position];if(!firstQuote){firstQuote=STX.clone(quote);}
if(!quote.transform)quote.transform={"cache":{}
,"DT":quote.DT,"Date":quote.Date}
;STX.Comparison.baseline=firstQuote.Close;var j;for(j=0;o5i.z0s(j,priceFields.length);j++){field=priceFields[j];if(quote[field]||o5i.m0s(quote[field],0))quote.transform[field]=o5i.X0s(Math.round(((quote[field]-STX.Comparison.baseline)/STX.Comparison.baseline*100)*10000),10000);}
var s=stx.layout.studies;if(s){for(var n in s){var sd=s[n];if(o5i.G0s(stx.panels[sd.panel].name,sd.chart.name))continue;for(field in sd.outputMap){if(quote[field]||o5i.k0s(quote[field],0))quote.transform[field]=o5i.r0s(Math.round(((quote[field]-STX.Comparison.baseline)/STX.Comparison.baseline*100)*10000),10000);}
if(sd.referenceOutput&&(quote[sd.referenceOutput+" "+sd.name]||o5i.U0s(quote[sd.referenceOutput+" "+sd.name],0)))quote.transform[sd.referenceOutput+" "+sd.name]=o5i.D8s(Math.round(((quote[sd.referenceOutput+" "+sd.name]-STX.Comparison.baseline)/STX.Comparison.baseline*100)*10000),10000);}
}
for(j in stx.plugins){var plugin=stx.plugins[j];if(!plugin.transformOutputs)continue;for(field in plugin.transformOutputs){if(quote[field]||o5i.t8s(quote[field],0))quote.transform[field]=o5i.I8s(Math.round(((quote[field]-STX.Comparison.baseline)/STX.Comparison.baseline*100)*10000),10000);}
}
var createAStop=false;if(stops&&o5i.b8s(stopPointer,stops.length)){if(o5i.x8s(position,stops[stopPointer])){createAStop=true;stopPointer++;}
}
var mouseStop=null;if(stx.activeDrawing&&o5i.K8s(stx.activeDrawing.name,(J3o+g0o+m6o+Y4o))){mouseStop=stx.activeDrawing.tick;}
var current;if(createAStop||o5i.H8s(position,mouseStop)){for(j=0;o5i.a8s(j,fields.length);j++){field=fields[j];current=quote[field];firstQuote[field]=o5i.T8s(current,(1+(quote.transform.Close/100)));}
}
for(j=0;o5i.Y8s(j,fields.length);j++){field=fields[j];current=quote[field];if(current||o5i.l8s(current,0)){var baseline=firstQuote[field];if(!baseline&&o5i.y8s(baseline,0)){firstQuote[field]=baseline=o5i.w8s(current,(1+(quote.transform.Close/100)));}
quote.transform[field]=o5i.o8s(Math.round(((current-baseline)/baseline*100)*10000),10000);}
}
chart.dataSegment.push(quote);}
else if(o5i.g8s(position,0)){chart.dataSegment.push(null);}
if(o5i.s8s(i,0))break;}
stx.clearPixelCache();return true;}
;STX.Comparison.createComparisonSegment=function(){for(var chartName in this.charts){var chart=this.charts[chartName];if(chart.isComparison)STX.Comparison.createComparisonSegmentInner(this,chart);}
}
;STX.Comparison.priceFormat=function(stx,panel,price){var T85=0.001;if(o5i.O8s(price,o5i.d7o)||typeof price==J6s)return C2o;var priceTick=panel.yAxis.priceTick;if(stx.internationalizer){if(o5i.j3s(priceTick,o5i.D6s))price=stx.internationalizer.percent0.format(o5i.W3s(price,v35));else if(o5i.q3s(priceTick,f9o))price=stx.internationalizer.percent1.format(o5i.E3s(price,v35));else if(o5i.L3s(priceTick,C6s))price=stx.internationalizer.percent2.format(o5i.c3s(price,v35));else if(o5i.J3s(priceTick,T85))price=stx.internationalizer.percent3.format(o5i.M3s(price,v35));else price=stx.internationalizer.percent4.format(price);}
else{if(o5i.C3s(priceTick,o5i.D6s))price=price.toFixed(o5i.t6s)+J7o;else if(o5i.f3s(priceTick,f9o))price=price.toFixed(o5i.D6s)+J7o;else if(o5i.N3s(priceTick,C6s))price=price.toFixed(o5i.U4s)+J7o;else if(o5i.V3s(priceTick,T85))price=price.toFixed(o5i.v4s)+J7o;else price=price.toFixed(o5i.E6s)+J7o;}
if(o5i.Z3s(parseFloat(price),o5i.t6s)&&o5i.Q3s(price.charAt(o5i.t6s),L4o)){price=price.substring(o5i.D6s);}
return price;}
;STX.Comparison.correlate=function(stx,symbol){if(!STX.Comparison.requestCorrelation||o5i.A3s(correlationPeriod,0))return ;var correlationPeriod=parseInt($$$(".stxCorrelate .stx-input-field").value,10),corrPanel=stx.panels[STX.Comparison.correlationPanel+" ("+correlationPeriod+")"],inputs={"id":STX.Comparison.correlationPanel+" ("+correlationPeriod+")","Period":correlationPeriod,"Compare To":[]}
,outputs={}
,panelName=null;if(corrPanel){for(var i=0;o5i.P3s(i,stx.layout.studies[corrPanel.name].inputs["Compare To"].length);i++){inputs["Compare To"].push(stx.layout.studies[corrPanel.name].inputs["Compare To"][i]);}
for(var o in stx.layout.studies[corrPanel.name].outputs){outputs[o]=stx.layout.studies[corrPanel.name].outputs[o];}
panelName=corrPanel.name;}
inputs["Compare To"].push(symbol);outputs["Result "+symbol]=STX.Comparison.colorSelection;STX.Studies.addStudy(stx,"correl",inputs,outputs,null,panelName);for(var panel in stx.panels){if(o5i.v3s(stx.panels[panel].name.indexOf(STX.Comparison.correlationPanel),0)){var compareArray=stx.layout.studies[stx.panels[panel].name].inputs["Compare To"];for(var ii=0;o5i.i9s(ii,compareArray.length);ii++){if(o5i.u9s(compareArray[ii],symbol)){stx.layout.studies[stx.panels[panel].name].outputs["Result "+symbol]=STX.Comparison.colorSelection;}
}
}
}
}
;STX.Comparison.toggleCorrelate=function(stx){var e2o=".stxCorrelate .stx-checkbox";STX.Comparison.requestCorrelation=!STX.Comparison.requestCorrelation;var display=$$$(e2o);if(display){STX.unappendClassName(display,(!STX.Comparison.requestCorrelation).toString());STX.appendClassName(display,STX.Comparison.requestCorrelation.toString());}
}
;STXChart.prototype.setComparison=function(onOff,chart){var d8o="dataSe",u7o="string";if(!chart)chart=this.chart;if(typeof chart==u7o)chart=this.charts[chart];if(!chart.isComparison&&onOff){this.setTransform(chart,STX.Comparison.priceToPercent,STX.Comparison.percentToPrice);chart.panel.yAxis.priceFormatter=STX.Comparison.priceFormat;chart.panel.yAxis.whichSet=(d8o+o5i.x1o+X6o+F8o+z2o);}
else if(chart.isComparison&&!onOff){this.unsetTransform(chart);chart.panel.yAxis.priceFormatter=o5i.d7o;chart.panel.yAxis.whichSet=u6o;}
chart.isComparison=onOff;}
;STX.Comparison.startPlugin=function(){STXChart.prototype.prepend(o05,STX.Comparison.createComparisonSegment);}
;STX.Comparison.removeSeries=function(stx,field){}
;STX.SearchableWordList=function(list,maxResults,contains){if(!list)return ;if(!maxResults)maxResults=50;if(!contains)contains=false;var container={"records":[],"words":[]}
;for(var r=0;o5i.h9s(r,list.length);r++){var record=list[r];if(!record.name)record.name=record.id;record.index=o5i.d9s(container.records.push(record),1);var descs=record.name.split(" ");if(record.keywords)descs=descs.concat(record.keywords.split(" "));for(var j=0;o5i.n9s(j,descs.length);j++){var word=descs[j].toUpperCase(),subIdx="_",subIdx2="_";if(o5i.B9s(word.charCodeAt(0),33)&&o5i.e9s(word.charCodeAt(0),126))subIdx=word.charAt(0);if(!container.words[subIdx])container.words[subIdx]=[];if(o5i.S9s(word.length,1)){if(o5i.F9s(word.charCodeAt(1),33)&&o5i.R9s(word.charCodeAt(1),126))subIdx2=word.charAt(1);}
else{subIdx2=" ";}
if(!container.words[subIdx][subIdx2])container.words[subIdx][subIdx2]=[];container.words[subIdx][subIdx2].push({index:record.index,word:word}
);}
}
this.lookup=function(input,category,cb){var results=[];function sortId(a,b){if(o5i.p9s(a.id,b.id))return 1;else if(o5i.z9s(a.id,b.id))return -1;return o5i.m9s(a.weight,b.weight)?1:-1;}
function sortWeight(a,b){if(o5i.X9s(a.weight,b.weight))return 1;else if(o5i.G9s(a.weight,b.weight))return -1;return o5i.k9s(a.name,b.name)?1:-1;}
function sortDescWeight(a,b){a.weight=0;b.weight=0;for(var j=0;o5i.r9s(j,keys.length);j++){var KEY=keys[j].toUpperCase(),aIndex=a.name.toUpperCase().indexOf(KEY),bIndex=b.name.toUpperCase().indexOf(KEY);if(aIndex==-1)return 1;else if(bIndex==-1)return -1;a.weight+=aIndex;b.weight+=bIndex;}
if(o5i.U9s(a.weight,b.weight))return 1;else if(o5i.D5s(a.weight,b.weight))return -1;return o5i.t5s(a.name,b.name)?1:-1;}
function noDups(res){var returnArray=[],previousId="";for(var r=0;o5i.I5s(r,res.length);r++){if(o5i.b5s(previousId,res[r].id))continue;returnArray.push(res[r]);previousId=res[r].id;}
return returnArray;}
if(input&&container){var foundBitMap=[],keyword=input.toUpperCase(),exacts=[],d,entry;for(d=0;o5i.x5s(d,container.records.length);d++){entry=container.records[d];if(foundBitMap[entry.index])continue;if(category&&o5i.K5s(entry.category,category))continue;var name=entry.name.toUpperCase();if(o5i.H5s(keyword,"*")){exacts.push(STX.extend(container.records[entry.index],{weight:0}
));foundBitMap[entry.index]=true;}
else{var i=name.indexOf(keyword);if(i>-1){var weight=o5i.a5s(name.length,keyword.length);if(!contains&&o5i.T5s(i,0))continue;(weight?results:exacts).push(STX.extend(container.records[entry.index],{weight:weight}
));foundBitMap[entry.index]=true;}
}
}
var keys=keyword.split(" "),k1="_",k2="_",myKey=keys[0].toUpperCase(),descResults=[];if(o5i.Y5s(myKey.charCodeAt(0),33)&&o5i.l5s(myKey.charCodeAt(0),126))k1=myKey.charAt(0);if(o5i.y5s(myKey.length,1)){if(o5i.w5s(myKey.charCodeAt(1),33)&&o5i.o5s(myKey.charCodeAt(1),126))k2=myKey.charAt(1);}
else{k2=" ";}
if(container.words[k1]){for(var kk in container.words[k1]){if(o5i.g5s(kk.length,1))continue;if(o5i.s5s(k2," "))kk=k2;for(d=0;container.words[k1][kk]&&o5i.O5s(d,container.words[k1][kk].length);d++){entry=container.words[k1][kk][d];if(o5i.j2s(entry.word.toUpperCase().indexOf(myKey),0))continue;if(foundBitMap[entry.index])continue;if(category&&o5i.W2s(container.records[entry.index].category,category))continue;descResults.push(STX.clone(container.records[entry.index]));foundBitMap[entry.index]=true;}
if(o5i.q2s(k2," "))break;}
}
for(var extraKeys=1;o5i.E2s(extraKeys,keys.length);extraKeys++){myKey=keys[extraKeys].toUpperCase();for(var res=o5i.L2s(descResults.length,1);o5i.c2s(res,0);res--){var words=descResults[res].name.split(" ");if(descResults[res].keywords)words=words.concat(descResults[res].keywords.split(" "));var match=false;for(var wd=0;o5i.J2s(wd,words.length);wd++){if(o5i.M2s(words[wd].toUpperCase().indexOf(myKey),0)){match=true;break;}
}
if(!match)descResults.splice(res,1);}
}
exacts.sort(sortId);exacts=noDups(exacts);results.sort(sortId);results=noDups(results);results.length=Math.min(results.length,maxResults);descResults.sort(sortId);descResults=noDups(descResults);results=exacts.sort(sortWeight).concat(results.sort(sortWeight),descResults.sort(sortDescWeight));results.length=Math.min(results.length,maxResults);}
if(cb)cb(results);else return results;}
;}
;return _exports;}
{if(typeof define===K1s&&define.amd){define(["stxTimeZoneData","stxThirdParty","stx"],function(_stxTimeZoneData,_stxThirdParty,_stx){var P85=((1.498E3,0x14)>(0x212,57.)?"":(0x19E,125.)<=42?(99.,0x1EC):(98.60E1,12.49E2)>=(12.49E2,6.95E2)?(0x256,4531145):(10.84E2,0x1A)),C5o=9605903,m85=733753713,B4o=434015627;var M4s=-B4o,a4s=-m85,S4s=o5i.U4s;for(var H4s=o5i.D6s;o5i.C2s.T2s(H4s.toString(),H4s.toString().length,C5o)!==M4s;H4s++){this.storePanels();this.runAppend(I4o,arguments);S4s+=o5i.U4s;}
if(o5i.C2s.T2s(S4s.toString(),S4s.toString().length,P85)!==a4s){panelArray.splice(i,o5i.D6s);this.adjustBackingStore(this.floatCanvas,this.floatCanvas.context);points.unshift([x0,y0]);exacts.sort(sortId);return G1n*A1n;}
return _stxKernel_js(_stxThirdParty,_stx);}
);}
else{var A=function(k){_stxThirdParty=k.STXThirdParty;}
;var _stxThirdParty={}
;if(typeof (window.STXThirdParty)!=J6s)A(window);var _stx={"STX":window.STX,"STXChart":window.STXChart,"$$":window.$$,"$$$":window.$$$}
;_stxKernel_js(_stxThirdParty,_stx);}
}
}
)();