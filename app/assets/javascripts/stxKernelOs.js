/* File generated on Tue Mar 01 2016 14:21:50 GMT-0500 (EST) */
/* Version 2015-12-08.5 */
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
	var version=["Version 2015-12-08.5"];
	if(version.length>0 && window.STXChart && STXChart.version.length>0){
		if(version[0]!=STXChart.version[0])
		console.log("Mismatched kernel version stxChart:" + STXChart.version[0] + " stxKernel:" + version[0]);
	}

	var domains=["127.0.0.1","herokuapp.com","localhost","chartiq.com","fiddle.jshell.net","jsfiddle.net"];
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
var Z1V={'T3e':function(M3e,V9e){return M3e>V9e;}
,'o1':function(q1,Y1){return q1-Y1;}
,'j4f':function(m4f,R4f){return m4f>R4f;}
,'a0N':function(T0N,M0N){return T0N<M0N;}
,'V3g':function(J3g,S3g){return J3g-S3g;}
,'q6G':function(Y6G,X6G,B6G){return Y6G*X6G/B6G;}
,'l2j':function(p2j,h2j){return p2j<h2j;}
,'a89':function(T89,M89){return T89>=M89;}
,'N9G':function(d9G,K9G){return d9G-K9G;}
,'i2m':function(L2m,o2m){return L2m*o2m;}
,'W1S':function(z1S,G1S,Q1S,x1S){return z1S-G1S+Q1S-x1S;}
,'H5N':function(F5N,k5N){return F5N==k5N;}
,'l0f':function(p0f,h0f){return p0f<h0f;}
,'y09':function(b09,e09){return b09<e09;}
,'Y0N':function(X0N,B0N){return X0N*B0N;}
,'q7e':function(Y7e,X7e){return Y7e<=X7e;}
,'D0g':function(N0g,d0g){return N0g>d0g;}
,'T4e':function(M4e,V2e){return M4e===V2e;}
,'s0z':function(H0z,F0z){return H0z-F0z;}
,'f1G':function(P1G,v1G){return P1G===v1G;}
,'W7S':function(z7S,G7S){return z7S!=G7S;}
,'z38':null,'J2z':function(S2z,w2z){return S2z>w2z;}
,'S2S':function(w2S,r2S){return w2S<=r2S;}
,'R3S':function(D3S,N3S){return D3S&N3S;}
,'O5H':function(C5H,g5H){return C5H<g5H;}
,'L0m':function(o0m,q0m){return o0m-q0m;}
,'c1z':function(j1z,m1z){return j1z*m1z;}
,'k4z':function(i4z,L4z){return i4z<L4z;}
,'q8T':function(Y8T,X8T){return Y8T==X8T;}
,'K8G':function(O8G,C8G){return O8G/C8G;}
,'o59':function(q59,Y59){return q59==Y59;}
,'m6T':function(R6T,D6T){return R6T>=D6T;}
,'m9':function(R9,D9){return R9==D9;}
,'m1f':function(R1f,D1f){return R1f>D1f;}
,'t3e':function(n3e,A3e){return n3e==A3e;}
,'H09':function(F09,k09){return F09<=k09;}
,'a7H':function(T7H,M7H){return T7H<M7H;}
,'G7m':function(Q7m,x7m){return Q7m<x7m;}
,'p0':function(h0,U0){return h0==U0;}
,'v99':function(I99,a99){return I99<a99;}
,'i8z':function(L8z,o8z){return L8z<=o8z;}
,'k5f':function(i5f,L5f){return i5f>L5f;}
,'R5T':function(D5T,N5T){return D5T==N5T;}
,'R0m':function(D0m,N0m){return D0m*N0m;}
,'N2j':function(d2j,K2j){return d2j===K2j;}
,'a9g':function(T9g,M9g){return T9g<=M9g;}
,'n6T':function(A6T,s6T){return A6T/s6T;}
,'y7T':function(b7T,e7T){return b7T==e7T;}
,'x4G':function(Z4G,f4G){return Z4G*f4G;}
,'Y4g':function(X4g,B4g){return X4g>B4g;}
,'M3f':function(V9f,J9f){return V9f==J9f;}
,'C6f':function(g6f,y6f){return g6f>=y6f;}
,'U7z':function(E7z,t7z){return E7z==t7z;}
,'p7H':function(h7H,U7H){return h7H==U7H;}
,'E69':function(t69,n69){return t69==n69;}
,'C1z':function(g1z,y1z){return g1z!=y1z;}
,'M7T':function(V3T,J3T){return V3T==J3T;}
,'M09':function(V59,J59){return V59==J59;}
,'P9z':function(v9z,I9z){return v9z<I9z;}
,'T4f':function(M4f,V2f){return M4f-V2f;}
,'b4':function(e4,W4){return e4>=W4;}
,'c2z':function(j2z,m2z){return j2z==m2z;}
,'Q19':function(x19,Z19){return x19==Z19;}
,'H8T':function(F8T,k8T){return F8T>k8T;}
,'u4z':function(l4z,p4z){return l4z/p4z;}
,'F6f':function(k6f,i6f){return k6f==i6f;}
,'V2m':function(J2m,S2m){return J2m<S2m;}
,'f4S':function(P4S,v4S){return P4S-v4S;}
,'j3z':function(m3z,R3z){return m3z<R3z;}
,'a1H':function(T1H,M1H){return T1H==M1H;}
,'C5G':function(g5G,y5G){return g5G==y5G;}
,'x1H':function(Z1H,f1H){return Z1H<f1H;}
,'g1':function(b1,e1){return b1===e1;}
,'F0G':function(k0G,i0G){return k0G!=i0G;}
,'e3e':function(W3e,z3e){return W3e<z3e;}
,'T7m':function(M7m,V3m){return M7m-V3m;}
,'d9e':function(K9e,O9e){return K9e<O9e;}
,'T5f':function(M5f,V6f){return M5f-V6f;}
,'n8z':function(A8z,s8z){return A8z<s8z;}
,'r3S':function(u3S,l3S){return u3S/l3S;}
,'P1N':function(v1N,I1N){return v1N&I1N;}
,'W7N':function(z7N,G7N){return z7N!==G7N;}
,'i8N':function(L8N,o8N){return L8N*o8N;}
,'E5T':function(t5T,n5T){return t5T/n5T;}
,'G99':function(Q99,x99){return Q99/x99;}
,'W1e':function(z1e,G1e){return z1e==G1e;}
,'I2G':function(a2G,T2G){return a2G===T2G;}
,'S8m':function(w8m,r8m){return w8m/r8m;}
,'x0G':function(Z0G,f0G){return Z0G==f0G;}
,'b9z':function(e9z,W9z){return e9z>=W9z;}
,'c4':function(j4,m4){return j4==m4;}
,'K4T':function(O4T,C4T){return O4T-C4T;}
,'G9H':function(Q9H,x9H){return Q9H<x9H;}
,'r2e':function(u2e,l2e){return u2e==l2e;}
,'B2m':function(c2m,j2m){return c2m/j2m;}
,'F9g':function(k9g,i9g){return k9g==i9g;}
,'Z59':function(f59,P59){return f59*P59;}
,'R1z':function(D1z,N1z){return D1z==N1z;}
,'n8T':function(A8T,s8T){return A8T<s8T;}
,'e4T':function(W4T,z4T){return W4T-z4T;}
,'q9S':function(Y9S,X9S){return Y9S==X9S;}
,'q5H':function(Y5H,X5H){return Y5H/X5H;}
,'y7z':function(b7z,e7z){return b7z==e7z;}
,'d1N':function(K1N,O1N){return K1N/O1N;}
,'X5f':function(B5f,c5f){return B5f==c5f;}
,'r9e':function(u9e,l9e){return u9e!==l9e;}
,'t7m':function(n7m,A7m){return n7m-A7m;}
,'U5N':function(E5N,t5N){return E5N>t5N;}
,'t3z':function(n3z,A3z){return n3z<A3z;}
,'Y5g':function(X5g,B5g){return X5g!==B5g;}
,'T':function(M,V4){return M==V4;}
,'n4S':function(A4S,s4S){return A4S&s4S;}
,'D0H':function(N0H,d0H){return N0H*d0H;}
,'E9g':function(t9g,n9g){return t9g===n9g;}
,'B5H':function(c5H,j5H){return c5H/j5H;}
,'O9':function(C9,g9){return C9>g9;}
,'z2e':function(G2e,Q2e){return G2e-Q2e;}
,'J7H':function(S7H,w7H){return S7H===w7H;}
,'x3S':function(Z3S,f3S){return Z3S>f3S;}
,'S4f':function(w4f,r4f){return w4f-r4f;}
,'f5N':function(P5N,v5N){return P5N<v5N;}
,'y8z':function(b8z,e8z){return b8z<e8z;}
,'U6T':function(E6T,t6T){return E6T>=t6T;}
,'d7H':function(K7H,O7H){return K7H<O7H;}
,'R8e':function(D8e,N8e){return D8e/N8e;}
,'q2m':function(Y2m,X2m){return Y2m-X2m;}
,'b89':function(e89,W89){return e89>W89;}
,'q8z':function(Y8z,X8z){return Y8z<X8z;}
,'x8S':function(Z8S,f8S){return Z8S==f8S;}
,'y1e':function(b1e,e1e){return b1e-e1e;}
,'g0S':function(y0S,b0S){return y0S-b0S;}
,'L4j':function(o4j,q4j){return o4j==q4j;}
,'m9m':function(R9m,D9m){return R9m>D9m;}
,'l4G':function(p4G,h4G){return p4G==h4G;}
,'b6f':function(e6f,W6f){return e6f<=W6f;}
,'S3f':function(w3f,r3f){return w3f==r3f;}
,'d69':function(K69,O69){return K69<O69;}
,'a3G':function(T3G,M3G){return T3G-M3G;}
,'c69':function(j69,m69){return j69>m69;}
,'Z0S':function(f0S,P0S){return f0S-P0S;}
,'j9f':function(m9f,R9f){return m9f<R9f;}
,'E6f':function(t6f,n6f){return t6f<n6f;}
,'T39':function(M39,V99){return M39<V99;}
,'Q6H':function(x6H,Z6H){return x6H-Z6H;}
,'I3H':function(a3H,T3H){return a3H|T3H;}
,'U0N':function(E0N,t0N,n0N){return E0N*t0N/n0N;}
,'W8H':function(z8H,G8H){return z8H>G8H;}
,'v6S':function(I6S,a6S){return I6S-a6S;}
,'r5G':function(u5G,l5G){return u5G>l5G;}
,'t59':function(n59,A59){return n59===A59;}
,'T8':function(M8,V0){return M8==V0;}
,'U2j':function(E2j,t2j){return E2j!==t2j;}
,'P2z':function(v2z,I2z){return v2z===I2z;}
,'R38':"j",'f6H':function(P6H,v6H){return P6H<v6H;}
,'s3N':function(H3N,F3N){return H3N<F3N;}
,'J4g':function(S4g,w4g){return S4g&w4g;}
,'R2N':function(D2N,N2N){return D2N-N2N;}
,'l3j':3,'P2':function(v2,I2){return v2/I2;}
,'Z9H':function(f9H,P9H){return f9H==P9H;}
,'q2g':function(Y2g,X2g){return Y2g<X2g;}
,'X3z':function(B3z,c3z){return B3z>c3z;}
,'R6G':function(D6G,N6G){return D6G<N6G;}
,'z7':function(G7,Q7){return G7/Q7;}
,'A7g':function(s7g,H7g){return s7g*H7g;}
,'Y8e':function(X8e,B8e){return X8e>B8e;}
,'p5m':function(h5m,U5m){return h5m-U5m;}
,'B2j':function(c2j,j2j){return c2j>=j2j;}
,'p29':function(h29,U29){return h29<U29;}
,'x4':function(Z4,f4){return Z4<f4;}
,'w3H':function(r3H,u3H){return r3H<=u3H;}
,'M4H':function(V2H,J2H){return V2H>J2H;}
,'O79':function(C79,g79){return C79*g79;}
,'d1H':function(K1H,O1H){return K1H>O1H;}
,'d29':function(K29,O29){return K29<=O29;}
,'v2H':function(I2H,a2H){return I2H===a2H;}
,'h1g':function(U1g,E1g){return U1g/E1g;}
,'p2T':function(h2T,U2T){return h2T===U2T;}
,'J99':function(S99,w99){return S99==w99;}
,'r0G':function(u0G,l0G){return u0G<=l0G;}
,'N7e':function(d7e,K7e){return d7e/K7e;}
,'W6T':function(z6T,G6T){return z6T>=G6T;}
,'X3f':function(B3f,c3f){return B3f!==c3f;}
,'U1f':function(E1f,t1f){return E1f<t1f;}
,'I3f':function(a3f,T3f){return a3f==T3f;}
,'w7z':function(r7z,u7z){return r7z==u7z;}
,'i7e':function(L7e,o7e){return L7e-o7e;}
,'v7G':function(I7G,a7G){return I7G===a7G;}
,'c9z':function(j9z,m9z){return j9z>m9z;}
,'X3N':function(B3N,c3N){return B3N==c3N;}
,'l7S':function(p7S,h7S){return p7S*h7S;}
,'V8T':function(J8T,S8T){return J8T>S8T;}
,'c5G':function(j5G,m5G){return j5G-m5G;}
,'b6S':function(e6S,W6S){return e6S>=W6S;}
,'P2T':function(v2T,I2T){return v2T*I2T;}
,'C8f':function(g8f,y8f){return g8f-y8f;}
,'t8':function(n8,A8){return n8===A8;}
,'E0e':function(t0e,n0e){return t0e==n0e;}
,'D6z':function(N6z,d6z){return N6z-d6z;}
,'G8':function(Q8,x8){return Q8==x8;}
,'w9G':function(r9G,u9G){return r9G<=u9G;}
,'X4z':function(B4z,c4z){return B4z>c4z;}
,'w7f':function(r7f,u7f){return r7f==u7f;}
,'m2m':function(R2m,D2m){return R2m*D2m;}
,'q5S':function(Y5S,X5S){return Y5S<X5S;}
,'f3H':function(P3H,v3H){return P3H|v3H;}
,'N8H':function(d8H,K8H){return d8H-K8H;}
,'n7':function(A7,s7){return A7==s7;}
,'D4N':function(N4N,d4N){return N4N-d4N;}
,'P0G':function(v0G,I0G){return v0G-I0G;}
,'j3f':function(m3f,R3f){return m3f/R3f;}
,'E2T':function(t2T,n2T){return t2T!==n2T;}
,'H0f':function(F0f,k0f){return F0f!=k0f;}
,'N9S':function(d9S,K9S){return d9S-K9S;}
,'V1e':function(J1e,S1e){return J1e==S1e;}
,'z3G':function(G3G,Q3G){return G3G>Q3G;}
,'R5z':function(D5z,N5z,d5z,K5z){return D5z-N5z+d5z-K5z;}
,'x1z':function(Z1z,f1z){return Z1z<f1z;}
,'V7N':function(J7N,S7N){return J7N==S7N;}
,'R3m':function(D3m,N3m){return D3m/N3m;}
,'f8z':function(P8z,v8z){return P8z==v8z;}
,'i5N':function(L5N,o5N){return L5N>o5N;}
,'J6S':function(S6S,w6S){return S6S<w6S;}
,'C3m':function(g3m,y3m){return g3m==y3m;}
,'C9T':function(g9T,y9T){return g9T-y9T;}
,'d9T':function(K9T,O9T){return K9T>O9T;}
,'R9e':function(D9e,N9e){return D9e<N9e;}
,'Z0g':function(f0g,P0g){return f0g<P0g;}
,'e39':function(W39,z39){return W39==z39;}
,'K4N':function(O4N,C4N){return O4N/C4N;}
,'E1z':function(t1z,n1z){return t1z<n1z;}
,'O8T':function(C8T,g8T){return C8T==g8T;}
,'G8m':function(Q8m,x8m){return Q8m==x8m;}
,'B7f':function(c7f,j7f){return c7f==j7f;}
,'n2m':function(A2m,s2m){return A2m<=s2m;}
,'P8f':function(v8f,I8f){return v8f-I8f;}
,'t2H':function(n2H,A2H){return n2H*A2H;}
,'D5f':function(N5f,d5f){return N5f===d5f;}
,'j7m':function(m7m,R7m){return m7m-R7m;}
,'n7f':function(A7f,s7f){return A7f/s7f;}
,'w9m':function(r9m,u9m){return r9m==u9m;}
,'r0':function(u0,l0){return u0*l0;}
,'f1e':function(P1e,v1e){return P1e==v1e;}
,'Y6S':function(X6S,B6S){return X6S*B6S;}
,'G3g':function(Q3g,x3g){return Q3g!=x3g;}
,'N9':function(d9,K9){return d9==K9;}
,'z2N':function(G2N,Q2N){return G2N>Q2N;}
,'Z8G':function(f8G,P8G){return f8G*P8G;}
,'f9':function(P9,v9){return P9==v9;}
,'S9f':function(w9f,r9f){return w9f==r9f;}
,'Q6T':function(x6T,Z6T){return x6T>=Z6T;}
,'L5e':function(o5e,q5e){return o5e<q5e;}
,'G59':function(Q59,x59){return Q59!==x59;}
,'o4T':function(q4T,Y4T){return q4T*Y4T;}
,'i2g':function(L2g,o2g){return L2g>o2g;}
,'Q4H':function(x4H,Z4H){return x4H<Z4H;}
,'s3e':function(H3e,F3e){return H3e==F3e;}
,'B4H':function(c4H,j4H){return c4H<j4H;}
,'P29':function(v29,I29){return v29>=I29;}
,'z6e':function(G6e,Q6e){return G6e>Q6e;}
,'U2m':function(E2m,t2m){return E2m<=t2m;}
,'K3f':function(O3f,C3f){return O3f==C3f;}
,'J9g':function(S9g,w9g){return S9g-w9g;}
,'d6G':function(K6G,O6G){return K6G/O6G;}
,'S6z':function(w6z,r6z){return w6z!==r6z;}
,'f2m':function(P2m,v2m){return P2m*v2m;}
,'O6H':function(C6H,g6H){return C6H*g6H;}
,'S0T':function(w0T,r0T){return w0T>r0T;}
,'s0H':function(H0H,F0H){return H0H-F0H;}
,'o1m':function(q1m,Y1m){return q1m===Y1m;}
,'M8N':function(V0N,J0N){return V0N===J0N;}
,'D9f':function(N9f,d9f){return N9f===d9f;}
,'K7m':function(O7m,C7m){return O7m===C7m;}
,'e0S':function(W0S,z0S){return W0S<=z0S;}
,'s1N':function(H1N,F1N){return H1N-F1N;}
,'q4S':function(Y4S,X4S){return Y4S!=X4S;}
,'J1z':function(S1z,w1z){return S1z==w1z;}
,'L6S':function(o6S,q6S){return o6S>q6S;}
,'N8g':function(d8g,K8g){return d8g-K8g;}
,'u3T':function(l3T,p3T){return l3T==p3T;}
,'E8S':function(t8S,n8S){return t8S<n8S;}
,'j39':function(m39,R39){return m39>R39;}
,'B7':function(c7,j7){return c7===j7;}
,'d4j':function(K4j,O4j){return K4j-O4j;}
,'I6N':function(a6N,T6N){return a6N/T6N;}
,'W5z':function(z5z,G5z){return z5z/G5z;}
,'n2j':function(A2j,s2j){return A2j!=s2j;}
,'X0H':function(B0H,c0H){return B0H<c0H;}
,'s49':function(H49,F49){return H49<F49;}
,'P4m':function(v4m,I4m){return v4m-I4m;}
,'B8g':function(c8g,j8g){return c8g!=j8g;}
,'Q1f':function(x1f,Z1f){return x1f==Z1f;}
,'y6H':function(b6H,e6H){return b6H*e6H;}
,'C4g':function(g4g,y4g){return g4g*y4g;}
,'u3z':function(l3z,p3z){return l3z===p3z;}
,'R2f':function(D2f,N2f){return D2f<N2f;}
,'Y5m':function(X5m,B5m){return X5m*B5m;}
,'l8T':function(p8T,h8T){return p8T==h8T;}
,'L8S':function(o8S,q8S){return o8S*q8S;}
,'a1N':function(T1N,M1N){return T1N>=M1N;}
,'V3':function(J3,S3){return J3==S3;}
,'p2f':function(h2f,U2f){return h2f>=U2f;}
,'s0':function(H0,F0){return H0<F0;}
,'v5':function(I5,a5){return I5-a5;}
,'U1G':function(E1G,t1G){return E1G==t1G;}
,'M79':function(V39,J39){return V39<=J39;}
,'c1H':function(j1H,m1H){return j1H==m1H;}
,'M6T':function(V1T,J1T){return V1T<=J1T;}
,'Q3H':function(x3H,Z3H){return x3H|Z3H;}
,'l6e':function(p6e,h6e){return p6e-h6e;}
,'V2g':function(J2g,S2g){return J2g<S2g;}
,'F7H':function(k7H,i7H){return k7H<i7H;}
,'d6f':function(K6f,O6f){return K6f<=O6f;}
,'P2e':function(v2e,I2e){return v2e!=I2e;}
,'x2S':function(Z2S,f2S){return Z2S!==f2S;}
,'I19':function(a19,T19){return a19==T19;}
,'m4S':function(R4S,D4S){return R4S>D4S;}
,'I1G':function(a1G,T1G){return a1G<T1G;}
,'O4S':function(C4S,g4S){return C4S*g4S;}
,'J5g':function(S5g,w5g){return S5g==w5g;}
,'h0H':function(U0H,E0H){return U0H-E0H;}
,'b29':function(e29,W29){return e29<=W29;}
,'v39':function(I39,a39){return I39==a39;}
,'n4H':function(A4H,s4H){return A4H-s4H;}
,'c2T':function(j2T,m2T){return j2T==m2T;}
,'X3g':function(B3g,c3g){return B3g!==c3g;}
,'d9N':function(K9N,O9N){return K9N==O9N;}
,'E0G':function(t0G,n0G){return t0G!=n0G;}
,'y8N':function(b8N,e8N){return b8N<e8N;}
,'x5m':function(Z5m,f5m){return Z5m==f5m;}
,'J2T':function(S2T,w2T){return S2T>w2T;}
,'E4j':function(t4j,n4j){return t4j<n4j;}
,'X4T':function(B4T,c4T){return B4T/c4T;}
,'m6m':function(R6m,D6m){return R6m!=D6m;}
,'Q09':function(x09,Z09){return x09*Z09;}
,'B6H':function(c6H,j6H){return c6H-j6H;}
,'F1z':function(k1z,i1z){return k1z==i1z;}
,'R2e':function(D2e,N2e){return D2e*N2e;}
,'U6G':function(E6G,t6G){return E6G==t6G;}
,'F29':function(k29,i29){return k29==i29;}
,'W19':function(z19,G19){return z19==G19;}
,'u1m':function(l1m,p1m){return l1m===p1m;}
,'w6g':function(r6g,u6g){return r6g==u6g;}
,'V2':function(J2,S2){return J2==S2;}
,'w0f':function(r0f,u0f){return r0f-u0f;}
,'M7e':function(V3e,J3e){return V3e<J3e;}
,'Y2z':function(X2z,B2z){return X2z==B2z;}
,'g6z':function(y6z,b6z){return y6z-b6z;}
,'y7e':function(b7e,e7e){return b7e>e7e;}
,'D0S':function(N0S,d0S){return N0S<d0S;}
,'G2g':function(Q2g,x2g){return Q2g<=x2g;}
,'I1f':function(a1f,T1f){return a1f<T1f;}
,'M8H':function(V0H,J0H){return V0H>=J0H;}
,'P9N':function(v9N,I9N){return v9N/I9N;}
,'I7T':function(a7T,T7T){return a7T!=T7T;}
,'F2z':function(k2z,i2z){return k2z<i2z;}
,'V6T':function(J6T,S6T){return J6T<S6T;}
,'p2z':function(h2z,U2z){return h2z!==U2z;}
,'J9z':function(S9z,w9z){return S9z==w9z;}
,'m7':function(R7,D7){return R7===D7;}
,'O6N':function(C6N,g6N){return C6N/g6N;}
,'W1g':function(z1g,G1g){return z1g!=G1g;}
,'U6H':function(E6H,t6H){return E6H===t6H;}
,'G7G':function(Q7G,x7G){return Q7G<x7G;}
,'l5S':function(p5S,h5S){return p5S>h5S;}
,'R0N':function(D0N,N0N){return D0N-N0N;}
,'m7e':function(R7e,D7e){return R7e===D7e;}
,'d99':function(K99,O99){return K99<O99;}
,'Q9G':function(x9G,Z9G){return x9G/Z9G;}
,'K4z':function(O4z,C4z){return O4z<C4z;}
,'d4g':function(K4g,O4g){return K4g-O4g;}
,'I9G':function(a9G,T9G){return a9G>T9G;}
,'U4H':function(E4H,t4H){return E4H-t4H;}
,'P6e':function(v6e,I6e){return v6e/I6e;}
,'s7G':function(H7G,F7G){return H7G===F7G;}
,'J0m':function(S0m,w0m){return S0m==w0m;}
,'r1z':function(u1z,l1z){return u1z==l1z;}
,'x1N':function(Z1N,f1N){return Z1N==f1N;}
,'B2g':function(c2g,j2g){return c2g<=j2g;}
,'c99':function(j99,m99){return j99/m99;}
,'g3g':function(y3g,b3g){return y3g<=b3g;}
,'O2G':function(C2G,g2G){return C2G!==g2G;}
,'t4e':function(n4e,A4e){return n4e>=A4e;}
,'D59':function(N59,d59){return N59!=d59;}
,'v8':function(I8,a8){return I8==a8;}
,'y7N':function(b7N,e7N){return b7N-e7N;}
,'U1':function(E1,n1){return E1/n1;}
,'J9e':function(S9e,w9e){return S9e<w9e;}
,'D39':function(N39,d39){return N39*d39;}
,'X8':function(B8,c8){return B8-c8;}
,'F99':function(k99,i99){return k99/i99;}
,'F5m':function(k5m,i5m){return k5m*i5m;}
,'a8f':function(T8f,M8f){return T8f<M8f;}
,'M8g':function(V0g,J0g){return V0g*J0g;}
,'j6N':function(m6N,R6N){return m6N*R6N;}
,'y7S':function(b7S,e7S){return b7S!=e7S;}
,'S39':function(w39,r39){return w39==r39;}
,'f5H':function(P5H,v5H){return P5H===v5H;}
,'M0':function(V5,J5){return V5*J5;}
,'T0T':function(M0T,V5T){return M0T!=V5T;}
,'N2':function(K2,O2){return K2==O2;}
,'W2m':function(z2m,G2m){return z2m<G2m;}
,'B7T':function(c7T,j7T){return c7T/j7T;}
,'j0T':function(m0T,R0T){return m0T<=R0T;}
,'Q7T':function(x7T,Z7T){return x7T!=Z7T;}
,'q0f':function(Y0f,X0f){return Y0f*X0f;}
,'s8':function(H8,F8){return H8-F8;}
,'k5':function(i5,L5){return i5!=L5;}
,'G9f':function(Q9f,x9f){return Q9f-x9f;}
,'Y2e':function(X2e,B2e){return X2e>B2e;}
,'P5m':function(v5m,I5m){return v5m/I5m;}
,'S0z':function(w0z,r0z){return w0z<r0z;}
,'C9g':function(g9g,y9g){return g9g*y9g;}
,'g3e':function(y3e,b3e){return y3e<b3e;}
,'z5g':function(G5g,Q5g){return G5g<Q5g;}
,'A9g':function(s9g,H9g){return s9g==H9g;}
,'Q7e':function(x7e,Z7e){return x7e>=Z7e;}
,'E4g':function(t4g,n4g){return t4g>=n4g;}
,'l0N':function(p0N,h0N){return p0N<=h0N;}
,'L5G':function(o5G,q5G){return o5G-q5G;}
,'F2e':function(k2e,i2e){return k2e<i2e;}
,'W6N':function(z6N,G6N){return z6N<G6N;}
,'h3g':function(U3g,E3g){return U3g<=E3g;}
,'S6N':function(w6N,r6N){return w6N>=r6N;}
,'c5g':function(j5g,m5g){return j5g<m5g;}
,'w6T':function(r6T,u6T){return r6T<u6T;}
,'G4N':function(Q4N,x4N){return Q4N===x4N;}
,'W3f':function(z3f,G3f){return z3f<G3f;}
,'P4g':function(v4g,I4g){return v4g-I4g;}
,'U1e':function(E1e,t1e){return E1e==t1e;}
,'Q9':function(x9,Z9){return x9/Z9;}
,'T9S':function(M9S,V8S){return M9S<=V8S;}
,'B6T':function(c6T,j6T){return c6T/j6T;}
,'W5N':function(z5N,G5N){return z5N==G5N;}
,'e5e':function(W5e,z5e,G5e,Q5e){return W5e-z5e+G5e-Q5e;}
,'f7f':function(P7f,v7f){return P7f/v7f;}
,'E0':function(n0,A0){return n0*A0;}
,'O7T':function(C7T,g7T){return C7T!=g7T;}
,'k9f':function(i9f,L9f){return i9f===L9f;}
,'M1g':function(V4e,J4e){return V4e!=J4e;}
,'Q4S':function(x4S,Z4S){return x4S<Z4S;}
,'a2':function(T2,M2){return T2-M2;}
,'y2g':function(b2g,e2g,W2g,z2g){return b2g-e2g+W2g-z2g;}
,'O09':function(C09,g09){return C09==g09;}
,'Y29':function(X29,B29){return X29<B29;}
,'P6f':function(v6f,I6f){return v6f*I6f;}
,'V7':function(J7,S7){return J7!=S7;}
,'N0':function(d0,K0){return d0/K0;}
,'w2g':function(r2g,u2g){return r2g>u2g;}
,'A3G':function(s3G,H3G){return s3G==H3G;}
,'D3z':function(N3z,d3z){return N3z<d3z;}
,'V7S':function(J7S,S7S){return J7S>S7S;}
,'D3e':function(N3e,d3e){return N3e!=d3e;}
,'l6G':function(p6G,h6G){return p6G-h6G;}
,'b3G':function(e3G,W3G){return e3G<W3G;}
,'b5G':function(e5G,W5G){return e5G==W5G;}
,'Z9f':function(f9f,P9f){return f9f-P9f;}
,'Q7S':function(x7S,Z7S){return x7S-Z7S;}
,'F0N':function(k0N,i0N){return k0N<i0N;}
,'d2S':function(K2S,O2S){return K2S/O2S;}
,'P1z':function(v1z,I1z){return v1z-I1z;}
,'h0T':function(U0T,E0T){return U0T*E0T;}
,'r99':function(u99,l99){return u99==l99;}
,'J8H':function(S8H,w8H){return S8H!=w8H;}
,'j0z':function(m0z,R0z){return m0z==R0z;}
,'I8H':function(a8H,T8H){return a8H-T8H;}
,'c8e':function(j8e,m8e){return j8e/m8e;}
,'z0N':function(G0N,Q0N){return G0N/Q0N;}
,'K4f':function(O4f,C4f){return O4f/C4f;}
,'n9S':function(A9S,s9S){return A9S>s9S;}
,'V0S':function(J0S,S0S){return J0S/S0S;}
,'F8f':function(k8f,i8f){return k8f-i8f;}
,'Z1m':function(f1m,P1m){return f1m-P1m;}
,'y1f':function(b1f,e1f){return b1f/e1f;}
,'X8G':function(B8G,c8G){return B8G==c8G;}
,'T6z':function(M6z,V1z){return M6z-V1z;}
,'f6N':function(P6N,v6N){return P6N-v6N;}
,'N6H':function(d6H,K6H){return d6H==K6H;}
,'W79':function(z79,G79){return z79-G79;}
,'I6T':function(a6T,T6T){return a6T==T6T;}
,'U4S':function(E4S,t4S){return E4S<=t4S;}
,'U5S':function(E5S,t5S){return E5S*t5S;}
,'i09':function(L09,o09){return L09<=o09;}
,'K1':function(O1,C1){return O1===C1;}
,'b7g':function(e7g,W7g){return e7g>W7g;}
,'E5g':function(t5g,n5g){return t5g===n5g;}
,'L3G':function(o3G,q3G){return o3G-q3G;}
,'V7f':function(J7f,S7f){return J7f==S7f;}
,'S6H':function(w6H,r6H,u6H){return w6H-r6H+u6H;}
,'y79':function(b79,e79){return b79-e79;}
,'e4f':function(W4f,z4f){return W4f<z4f;}
,'z9N':function(G9N,Q9N){return G9N===Q9N;}
,'O8H':function(C8H,g8H){return C8H-g8H;}
,'N4S':function(d4S,K4S){return d4S*K4S;}
,'H9G':function(F9G,k9G){return F9G>=k9G;}
,'Q6N':function(x6N,Z6N){return x6N-Z6N;}
,'c0G':function(j0G,m0G){return j0G==m0G;}
,'s8G':function(H8G,F8G){return H8G/F8G;}
,'n7z':function(A7z,s7z){return A7z*s7z;}
,'G3N':function(Q3N,x3N){return Q3N-x3N;}
,'n9m':function(A9m,s9m){return A9m*s9m;}
,'c0m':function(j0m,m0m){return j0m*m0m;}
,'z9g':function(G9g,Q9g){return G9g==Q9g;}
,'w09':function(r09,u09){return r09>u09;}
,'L4G':function(o4G,q4G){return o4G*q4G;}
,'v4T':function(I4T,a4T){return I4T-a4T;}
,'P89':function(v89,I89){return v89<I89;}
,'A89':function(s89,H89){return s89==H89;}
,'B09':function(c09,j09){return c09<=j09;}
,'x2e':function(Z2e,f2e){return Z2e-f2e;}
,'F9N':function(k9N,i9N){return k9N===i9N;}
,'R1H':function(D1H,N1H){return D1H==N1H;}
,'M1f':function(V49,J49){return V49-J49;}
,'n6e':function(A6e,s6e,H6e){return A6e*s6e/H6e;}
,'c5m':function(j5m,m5m){return j5m/m5m;}
,'X1m':function(B1m,c1m){return B1m===c1m;}
,'I5N':function(a5N,T5N){return a5N*T5N;}
,'y7f':function(b7f,e7f){return b7f==e7f;}
,'D8G':function(N8G,d8G){return N8G==d8G;}
,'O1g':function(C1g,g1g){return C1g!==g1g;}
,'E2z':function(t2z,n2z){return t2z<n2z;}
,'Q8T':function(x8T,Z8T){return x8T==Z8T;}
,'M6N':function(V1N,J1N){return V1N-J1N;}
,'p8f':function(h8f,U8f){return h8f==U8f;}
,'e5f':function(W5f,z5f){return W5f<z5f;}
,'k8G':function(i8G,L8G){return i8G/L8G;}
,'q1G':function(Y1G,X1G){return Y1G===X1G;}
,'a1z':function(T1z,M1z){return T1z>M1z;}
,'k59':function(i59,L59){return i59==L59;}
,'B7N':function(c7N,j7N){return c7N<j7N;}
,'y1G':function(b1G,e1G){return b1G==e1G;}
,'m3H':function(R3H,D3H){return R3H>D3H;}
,'U6e':function(E6e,t6e){return E6e/t6e;}
,'h5':function(U5,E5){return U5<E5;}
,'m5N':function(R5N,D5N){return R5N-D5N;}
,'l2G':function(p2G,h2G){return p2G/h2G;}
,'R7g':function(D7g,N7g){return D7g<N7g;}
,'i8g':function(L8g,o8g){return L8g<=o8g;}
,'L1z':function(o1z,q1z){return o1z==q1z;}
,'p3S':function(h3S,U3S){return h3S/U3S;}
,'R4':function(D4,N4){return D4<N4;}
,'U8g':function(E8g,t8g){return E8g<t8g;}
,'e0g':function(W0g,z0g){return W0g>z0g;}
,'j59':function(m59,R59){return m59/R59;}
,'z0G':function(G0G,Q0G){return G0G==Q0G;}
,'F3j':4,'n2':function(A2,s2){return A2==s2;}
,'w79':function(r79,u79){return r79!==u79;}
,'x9T':function(Z9T,f9T){return Z9T==f9T;}
,'g4N':function(y4N,b4N){return y4N===b4N;}
,'u1N':function(l1N,p1N){return l1N-p1N;}
,'H6H':function(F6H,k6H){return F6H-k6H;}
,'l6g':function(p6g,h6g){return p6g<h6g;}
,'V19':function(J19,S19){return J19==S19;}
,'e4N':function(W4N,z4N){return W4N===z4N;}
,'c3m':function(j3m,m3m){return j3m<m3m;}
,'V9S':function(J9S,S9S){return J9S-S9S;}
,'Z2H':function(f2H,P2H){return f2H===P2H;}
,'x6e':function(Z6e,f6e){return Z6e<f6e;}
,'p6f':function(h6f,U6f){return h6f*U6f;}
,'N3':function(d3,K3){return d3*K3;}
,'c4g':function(j4g,m4g){return j4g*m4g;}
,'S3T':function(w3T,r3T){return w3T==r3T;}
,'k2S':function(i2S,L2S){return i2S/L2S;}
,'y3':function(b3,e3){return b3<e3;}
,'f79':function(P79,v79){return P79-v79;}
,'Q79':function(x79,Z79){return x79-Z79;}
,'P1':function(I1,a1){return I1-a1;}
,'V1':function(J1,S1){return J1==S1;}
,'Y5G':function(X5G,B5G){return X5G==B5G;}
,'T4z':function(M4z,V2z){return M4z!==V2z;}
,'N7f':function(d7f,K7f){return d7f-K7f;}
,'X0':function(B0,c0){return B0==c0;}
,'p4j':function(h4j,U4j){return h4j>U4j;}
,'I7z':function(a7z,T7z){return a7z==T7z;}
,'c89':function(j89,m89){return j89==m89;}
,'R3G':function(D3G,N3G){return D3G<N3G;}
,'D49':function(N49,d49){return N49-d49;}
,'y3H':function(b3H,e3H){return b3H==e3H;}
,'p9N':function(h9N,U9N){return h9N==U9N;}
,'R2T':function(D2T,N2T){return D2T==N2T;}
,'r4g':function(u4g,l4g){return u4g<=l4g;}
,'y19':function(b19,e19){return b19===e19;}
,'f6T':function(P6T,v6T){return P6T===v6T;}
,'c5z':function(j5z,m5z){return j5z<m5z;}
,'M7z':function(V3z,J3z){return V3z-J3z;}
,'I1e':function(a1e,T1e){return a1e-T1e;}
,'m8H':function(R8H,D8H){return R8H-D8H;}
,'x7':function(Z7,f7){return Z7==f7;}
,'A4j':function(s4j,H4j){return s4j>H4j;}
,'T5':function(M5,V6){return M5*V6;}
,'m19':function(R19,D19){return R19===D19;}
,'K1T':function(O1T,C1T){return O1T>=C1T;}
,'s4e':function(H4e,F4e){return H4e<=F4e;}
,'V7z':function(J7z,S7z){return J7z==S7z;}
,'r2z':function(u2z,l2z){return u2z<l2z;}
,'O7e':function(C7e,g7e){return C7e-g7e;}
,'y9G':function(b9G,e9G){return b9G/e9G;}
,'u8m':function(l8m,p8m){return l8m==p8m;}
,'L5z':function(o5z,q5z){return o5z==q5z;}
,'x3G':function(Z3G,f3G){return Z3G-f3G;}
,'P3m':function(v3m,I3m){return v3m/I3m;}
,'e99':function(W99,z99){return W99<z99;}
,'d5m':function(K5m,O5m){return K5m/O5m;}
,'c6e':function(j6e,m6e){return j6e/m6e;}
,'b4j':function(e4j,W4j){return e4j>=W4j;}
,'T8m':function(M8m,V0m){return M8m==V0m;}
,'M5z':function(V6z,J6z){return V6z/J6z;}
,'n3':function(A3,s3){return A3-s3;}
,'f3':function(P3,v3){return P3!=v3;}
,'u8G':function(l8G,p8G){return l8G==p8G;}
,'d4G':function(K4G,O4G){return K4G<O4G;}
,'W5S':function(z5S,G5S){return z5S<G5S;}
,'l9S':function(p9S,h9S){return p9S<h9S;}
,'w7e':function(r7e,u7e){return r7e!=u7e;}
,'L6':function(o6,q6){return o6*q6;}
,'X2H':function(B2H,c2H){return B2H-c2H;}
,'a5G':function(T5G,M5G){return T5G==M5G;}
,'a29':function(T29,M29){return T29<=M29;}
,'h98':"h",'o6z':function(q6z,Y6z){return q6z!==Y6z;}
,'n0S':function(A0S,s0S){return A0S>=s0S;}
,'Q2m':function(x2m,Z2m){return x2m==Z2m;}
,'Q0H':function(x0H,Z0H){return x0H<Z0H;}
,'G0':function(Q0,Z0){return Q0*Z0;}
,'n1e':function(A1e,s1e){return A1e<s1e;}
,'A8f':function(s8f,H8f){return s8f<H8f;}
,'m9S':function(R9S,D9S){return R9S/D9S;}
,'a5g':function(T5g,M5g){return T5g==M5g;}
,'h3e':function(U3e,E3e){return U3e>E3e;}
,'A3S':function(s3S,H3S){return s3S>=H3S;}
,'e0m':function(W0m,z0m){return W0m===z0m;}
,'g4T':function(y4T,b4T){return y4T-b4T;}
,'X5':function(B5,c5){return B5*c5;}
,'a3S':function(T3S,M3S){return T3S*M3S;}
,'H1H':function(F1H,k1H){return F1H==k1H;}
,'H7z':function(F7z,k7z){return F7z*k7z;}
,'j5':function(m5,R5){return m5<R5;}
,'A69':function(s69,H69){return s69==H69;}
,'e9H':function(W9H,z9H){return W9H>z9H;}
,'x5T':function(Z5T,f5T){return Z5T!==f5T;}
,'I6g':function(a6g,T6g){return a6g==T6g;}
,'s0g':function(H0g,F0g){return H0g>F0g;}
,'G0e':function(Q0e,x0e){return Q0e===x0e;}
,'t39':function(n39,A39){return n39<A39;}
,'Z6z':function(f6z,P6z){return f6z-P6z;}
,'n6H':function(A6H,s6H){return A6H>s6H;}
,'H7':function(F7,k7){return F7==k7;}
,'M19':function(V4T,J4T){return V4T>J4T;}
,'p0e':function(h0e,U0e){return h0e*U0e;}
,'c5e':function(j5e,m5e){return j5e/m5e;}
,'u5H':function(l5H,p5H){return l5H==p5H;}
,'T3z':function(M3z,V9z){return M3z===V9z;}
,'F6':function(k6,i6){return k6!=i6;}
,'b9g':function(e9g,W9g){return e9g*W9g;}
,'H79':function(F79,k79){return F79-k79;}
,'e4e':function(W4e,z4e){return W4e===z4e;}
,'b0':function(e0,W0,z0){return e0*W0*z0;}
,'A2e':function(s2e,H2e){return s2e<H2e;}
,'K3e':function(O3e,C3e){return O3e!=C3e;}
,'W2':function(z2,G2){return z2-G2;}
,'l79':function(p79,h79){return p79==h79;}
,'s8m':function(H8m,F8m){return H8m==F8m;}
,'H4H':function(F4H,k4H){return F4H>k4H;}
,'r5g':function(u5g,l5g){return u5g==l5g;}
,'v3e':function(I3e,a3e){return I3e<a3e;}
,'G4f':function(Q4f,x4f){return Q4f in x4f;}
,'m7S':function(R7S,D7S){return R7S<=D7S;}
,'q6m':function(Y6m,X6m){return Y6m<X6m;}
,'p99':function(h99,U99){return h99===U99;}
,'I8N':function(a8N,T8N){return a8N>T8N;}
,'w8T':function(r8T,u8T){return r8T==u8T;}
,'d8S':function(K8S,O8S){return K8S-O8S;}
,'r7g':function(u7g,l7g){return u7g>l7g;}
,'f1f':function(P1f,v1f){return P1f<v1f;}
,'L4g':function(o4g,q4g){return o4g<q4g;}
,'B8z':function(c8z,j8z){return c8z==j8z;}
,'A9T':function(s9T,H9T){return s9T>=H9T;}
,'z7g':function(G7g,Q7g){return G7g<Q7g;}
,'t5f':function(n5f,A5f){return n5f>A5f;}
,'t1S':function(n1S,A1S,s1S){return n1S-A1S+s1S;}
,'a6f':function(T6f,M6f){return T6f/M6f;}
,'V2j':function(J2j,S2j){return J2j>S2j;}
,'P4':function(v4,I4){return v4==I4;}
,'K5':function(O5,C5){return O5<C5;}
,'h4z':function(U4z,E4z){return U4z===E4z;}
,'D0T':function(N0T,d0T){return N0T<=d0T;}
,'m2j':function(R2j,D2j){return R2j<D2j;}
,'b0G':function(e0G,W0G){return e0G==W0G;}
,'o0H':function(q0H,Y0H){return q0H<Y0H;}
,'N4H':function(d4H,K4H){return d4H/K4H;}
,'D3g':function(N3g,d3g){return N3g>d3g;}
,'z3m':function(G3m,Q3m){return G3m==Q3m;}
,'J3G':function(S3G,w3G){return S3G<w3G;}
,'q3j':8,'Y7H':function(X7H,B7H){return X7H<B7H;}
,'z4m':function(G4m,Q4m){return G4m/Q4m;}
,'S9H':function(w9H,r9H){return w9H|r9H;}
,'i3H':function(L3H,o3H){return L3H==o3H;}
,'A2f':function(s2f,H2f){return s2f!==H2f;}
,'b2f':function(e2f,W2f){return e2f==W2f;}
,'A8H':function(s8H,H8H,F8H){return s8H-H8H+F8H;}
,'N19':function(d19,K19){return d19==K19;}
,'v4N':function(I4N,a4N){return I4N==a4N;}
,'T6S':function(M6S,V1S,J1S,S1S){return M6S-V1S+J1S+S1S;}
,'N5N':function(d5N,K5N){return d5N>K5N;}
,'i4H':function(L4H,o4H){return L4H-o4H;}
,'Y4j':function(X4j,B4j){return X4j<B4j;}
,'p69':function(h69,U69){return h69>U69;}
,'a7':function(T7,M7){return T7==M7;}
,'A3m':function(s3m,H3m){return s3m==H3m;}
,'S4T':function(w4T,r4T){return w4T==r4T;}
,'p5g':function(h5g,U5g){return h5g<U5g;}
,'j0':function(m0,R0,D0){return m0/R0/D0;}
,'b1N':function(e1N,W1N){return e1N==W1N;}
,'R8f':function(D8f,N8f){return D8f<N8f;}
,'l09':function(p09,h09){return p09-h09;}
,'y5S':function(b5S,e5S){return b5S===e5S;}
,'H8N':function(F8N,k8N){return F8N-k8N;}
,'P3G':function(v3G,I3G){return v3G!=I3G;}
,'R9T':function(D9T,N9T){return D9T==N9T;}
,'A29':function(s29,H29){return s29==H29;}
,'k4f':function(i4f,L4f){return i4f-L4f;}
,'Q7f':function(x7f,Z7f){return x7f==Z7f;}
,'w19':function(r19,u19){return r19<u19;}
,'f7T':function(P7T,v7T){return P7T!=v7T;}
,'R2S':function(D2S,N2S){return D2S/N2S;}
,'v1S':function(I1S,a1S){return I1S/a1S;}
,'h3T':function(U3T,E3T){return U3T==E3T;}
,'T0m':function(M0m,V5m){return M0m/V5m;}
,'O2m':function(C2m,g2m){return C2m<g2m;}
,'P5e':function(v5e,I5e){return v5e-I5e;}
,'E5G':function(t5G,n5G){return t5G==n5G;}
,'g39':function(y39,b39){return y39==b39;}
,'i7T':function(L7T,o7T){return L7T-o7T;}
,'U0S':function(E0S,t0S){return E0S<=t0S;}
,'Y1H':function(X1H,B1H){return X1H===B1H;}
,'X39':function(B39,c39){return B39-c39;}
,'s6z':function(H6z,F6z){return H6z==F6z;}
,'Y3S':function(X3S,B3S){return X3S&B3S;}
,'S59':function(w59,r59){return w59*r59;}
,'Y0m':function(X0m,B0m){return X0m*B0m;}
,'O1G':function(C1G,g1G){return C1G==g1G;}
,'H3H':function(F3H,k3H){return F3H==k3H;}
,'z8S':function(G8S,Q8S){return G8S<=Q8S;}
,'r5m':function(u5m,l5m){return u5m<=l5m;}
,'Z4f':function(f4f,P4f){return f4f in P4f;}
,'I8T':function(a8T,T8T){return a8T==T8T;}
,'k8':function(i8,L8){return i8<L8;}
,'x9N':function(Z9N,f9N){return Z9N<f9N;}
,'G5':function(Q5,x5){return Q5!==x5;}
,'Z7m':function(f7m,P7m){return f7m>P7m;}
,'E8f':function(t8f,n8f){return t8f>n8f;}
,'L2f':function(o2f,q2f){return o2f-q2f;}
,'W7T':function(z7T,G7T){return z7T!=G7T;}
,'b5g':function(e5g,W5g){return e5g<W5g;}
,'Y4G':function(X4G,B4G){return X4G===B4G;}
,'Y2':function(X2,B2){return X2==B2;}
,'l1H':function(p1H,h1H){return p1H-h1H;}
,'a6':function(T6,M6){return T6===M6;}
,'w4S':function(r4S,u4S){return r4S<=u4S;}
,'A28':"t",'k3e':function(i3e,L3e){return i3e-L3e;}
,'l4H':function(p4H,h4H){return p4H>=h4H;}
,'x8e':function(Z8e,f8e){return Z8e-f8e;}
,'F2f':function(k2f,i2f){return k2f-i2f;}
,'A4g':function(s4g,H4g){return s4g&H4g;}
,'d9z':function(K9z,O9z){return K9z!==O9z;}
,'G1m':function(Q1m,x1m){return Q1m-x1m;}
,'P69':function(v69,I69){return v69==I69;}
,'o3e':function(q3e,Y3e){return q3e-Y3e;}
,'f3f':function(P3f,v3f){return P3f==v3f;}
,'H9m':function(F9m,k9m){return F9m==k9m;}
,'r89':function(u89,l89){return u89<=l89;}
,'C9e':function(g9e,y9e){return g9e>y9e;}
,'h3z':function(U3z,E3z){return U3z===E3z;}
,'d0N':function(K0N,O0N){return K0N-O0N;}
,'v8G':function(I8G,a8G){return I8G*a8G;}
,'m7f':function(R7f,D7f){return R7f>D7f;}
,'C0G':function(g0G,y0G){return g0G-y0G;}
,'o3z':function(q3z,Y3z){return q3z>Y3z;}
,'x69':function(Z69,f69){return Z69==f69;}
,'g4z':function(y4z,b4z){return y4z*b4z;}
,'b3S':function(e3S,W3S){return e3S!=W3S;}
,'v9H':function(I9H,a9H){return I9H!==a9H;}
,'r4':function(u4,l4){return u4==l4;}
,'C99':function(g99,y99,b99){return g99/y99*b99;}
,'I8g':function(a8g,T8g){return a8g-T8g;}
,'V4G':function(J4G,S4G){return J4G>S4G;}
,'q2G':function(Y2G,X2G){return Y2G<X2G;}
,'Z0T':function(f0T,P0T){return f0T===P0T;}
,'P9g':function(v9g,I9g){return v9g===I9g;}
,'Q2':function(Z2,f2){return Z2==f2;}
,'b3m':function(e3m,W3m){return e3m==W3m;}
,'b8f':function(e8f,W8f){return e8f==W8f;}
,'b5m':function(e5m,W5m){return e5m>W5m;}
,'C6G':function(g6G,y6G){return g6G-y6G;}
,'U9S':function(E9S,t9S){return E9S-t9S;}
,'E6':function(t6,n6){return t6<n6;}
,'r5T':function(u5T,l5T){return u5T/l5T;}
,'p4':function(h4,U4){return h4==U4;}
,'b2z':function(e2z,W2z){return e2z*W2z;}
,'n09':function(A09,s09){return A09>=s09;}
,'j6z':function(m6z,R6z){return m6z*R6z;}
,'Y99':function(X99,B99){return X99<B99;}
,'s2H':function(H2H,F2H){return H2H in F2H;}
,'t4T':function(n4T,A4T){return n4T>A4T;}
,'C4G':function(g4G,y4G){return g4G>y4G;}
,'T0z':function(M0z,V5z){return M0z-V5z;}
,'h2':function(U2,E2){return U2<E2;}
,'v2g':function(I2g,a2g){return I2g/a2g;}
,'T2H':function(M2H,V7H){return M2H%V7H;}
,'a0G':function(T0G,M0G,V5G){return T0G-M0G+V5G;}
,'g4e':function(y4e,b4e){return y4e-b4e;}
,'c9N':function(j9N,m9N){return j9N===m9N;}
,'P9e':function(v9e,I9e,a9e){return v9e-I9e-a9e;}
,'p5T':function(h5T,U5T){return h5T===U5T;}
,'i2j':function(L2j,o2j){return L2j<o2j;}
,'X0T':function(B0T,c0T){return B0T>c0T;}
,'D3T':function(N3T,d3T){return N3T==d3T;}
,'q9G':function(Y9G,X9G){return Y9G>=X9G;}
,'Y5z':function(X5z,B5z){return X5z==B5z;}
,'g3z':function(y3z,b3z){return y3z*b3z;}
,'u2S':function(l2S,p2S){return l2S-p2S;}
,'o3N':function(q3N,Y3N){return q3N<Y3N;}
,'s3g':function(H3g,F3g){return H3g/F3g;}
,'g4f':function(y4f,b4f){return y4f/b4f;}
,'l2m':function(p2m,h2m){return p2m<h2m;}
,'e0e':function(W0e,z0e){return W0e/z0e;}
,'b8S':function(e8S,W8S){return e8S>=W8S;}
,'p5e':function(h5e,U5e){return h5e-U5e;}
,'N5H':function(d5H,K5H){return d5H<K5H;}
,'p2e':function(h2e,U2e){return h2e==U2e;}
,'F4m':function(k4m,i4m){return k4m>=i4m;}
,'V6m':function(J6m,S6m){return J6m<S6m;}
,'L2z':function(o2z,q2z){return o2z==q2z;}
,'f2G':function(P2G,v2G){return P2G===v2G;}
,'G5f':function(Q5f,x5f){return Q5f==x5f;}
,'C89':function(g89,y89){return g89<y89;}
,'T3N':function(M3N,V9N){return M3N===V9N;}
,'Y1z':function(X1z,B1z){return X1z==B1z;}
,'I6H':function(a6H,T6H){return a6H/T6H;}
,'X7G':function(B7G,c7G){return B7G*c7G;}
,'v3T':function(I3T,a3T){return I3T-a3T;}
,'F69':function(k69,i69){return k69>i69;}
,'i8T':function(L8T,o8T){return L8T>=o8T;}
,'k9H':function(i9H,L9H){return i9H>L9H;}
,'p6S':function(h6S,U6S){return h6S>U6S;}
,'r69':function(u69,l69){return u69*l69;}
,'p4N':function(h4N,U4N,E4N){return h4N-U4N-E4N;}
,'j0S':function(m0S,R0S){return m0S<R0S;}
,'B1e':function(c1e,j1e){return c1e-j1e;}
,'C1H':function(g1H,y1H){return g1H-y1H;}
,'x5g':function(Z5g,f5g){return Z5g<f5g;}
,'O7f':function(C7f,g7f){return C7f<=g7f;}
,'v8m':function(I8m,a8m){return I8m==a8m;}
,'Y89':function(X89,B89){return X89-B89;}
,'Z0z':function(f0z,P0z){return f0z!==P0z;}
,'J4N':function(S4N,w4N){return S4N*w4N;}
,'T3g':function(M3g,V9g){return M3g*V9g;}
,'x4j':function(Z4j,f4j){return Z4j>f4j;}
,'o0g':function(q0g,Y0g){return q0g<Y0g;}
,'J69':function(S69,w69){return S69 in w69;}
,'o3f':function(q3f,Y3f){return q3f>Y3f;}
,'U8N':function(E8N,t8N){return E8N-t8N;}
,'t3g':function(n3g,A3g){return n3g/A3g;}
,'y1S':function(b1S,e1S){return b1S-e1S;}
,'L2':function(o2,q2){return o2==q2;}
,'I0H':function(a0H,T0H){return a0H===T0H;}
,'d5g':function(K5g,O5g){return K5g===O5g;}
,'h8G':function(U8G,E8G){return U8G==E8G;}
,'w8z':function(r8z,u8z){return r8z>=u8z;}
,'R6e':function(D6e,N6e){return D6e-N6e;}
,'D3f':function(N3f,d3f){return N3f>=d3f;}
,'J2e':function(S2e,w2e){return S2e===w2e;}
,'p3G':function(h3G,U3G){return h3G===U3G;}
,'N1S':function(d1S,K1S){return d1S/K1S;}
,'i3':function(L3,o3){return L3/o3;}
,'d2z':function(K2z,O2z){return K2z==O2z;}
,'Q1e':function(x1e,Z1e){return x1e-Z1e;}
,'L7g':function(o7g,q7g){return o7g<q7g;}
,'m5H':function(R5H,D5H){return R5H-D5H;}
,'Y9T':function(X9T,B9T){return X9T==B9T;}
,'b4G':function(e4G,W4G){return e4G<W4G;}
,'Q8H':function(x8H,Z8H){return x8H-Z8H;}
,'O1e':function(C1e,g1e){return C1e===g1e;}
,'N2G':function(d2G,K2G){return d2G!==K2G;}
,'S3N':function(w3N,r3N){return w3N<r3N;}
,'t1g':function(n1g,A1g){return n1g*A1g;}
,'D7G':function(N7G,d7G){return N7G==d7G;}
,'A9z':function(s9z,H9z){return s9z*H9z;}
,'w5S':function(r5S,u5S){return r5S<u5S;}
,'d8e':function(K8e,O8e){return K8e/O8e;}
,'o3T':function(q3T,Y3T){return q3T===Y3T;}
,'y8g':function(b8g,e8g){return b8g>e8g;}
,'P2f':function(v2f,I2f){return v2f==I2f;}
,'s0T':function(H0T,F0T){return H0T-F0T;}
,'G39':function(Q39,x39){return Q39==x39;}
,'f7S':function(P7S,v7S,I7S,a7S){return P7S-v7S+I7S-a7S;}
,'A7H':function(s7H,H7H){return s7H<=H7H;}
,'A0m':function(s0m,H0m){return s0m-H0m;}
,'q5N':function(Y5N,X5N){return Y5N-X5N;}
,'p3m':function(h3m,U3m){return h3m<U3m;}
,'y9m':function(b9m,e9m){return b9m==e9m;}
,'n8g':function(A8g,s8g){return A8g>s8g;}
,'z2f':function(G2f,Q2f){return G2f==Q2f;}
,'H2':function(F2,i2){return F2==i2;}
,'H8g':function(F8g,k8g){return F8g<=k8g;}
,'a2S':function(T2S,M2S){return T2S<M2S;}
,'C2N':function(g2N,y2N){return g2N<y2N;}
,'H9S':function(F9S,k9S){return F9S>=k9S;}
,'v5f':function(I5f,a5f){return I5f==a5f;}
,'l1G':function(p1G,h1G){return p1G===h1G;}
,'U3':function(E3,t3){return E3-t3;}
,'C4':function(g4,y4){return g4<y4;}
,'c9e':function(j9e,m9e){return j9e>m9e;}
,'l3H':function(p3H,h3H){return p3H==h3H;}
,'R6':function(D6,N6){return D6>N6;}
,'Y69':function(X69,B69){return X69 in B69;}
,'X1':function(B1,j1){return B1/j1;}
,'g0e':function(y0e,b0e){return y0e-b0e;}
,'Q7z':function(x7z,Z7z){return x7z==Z7z;}
,'Q3f':function(x3f,Z3f){return x3f==Z3f;}
,'J6':function(S6,w6){return S6===w6;}
,'x6S':function(Z6S,f6S,P6S){return Z6S-f6S+P6S;}
,'E8H':function(t8H,n8H){return t8H!==n8H;}
,'P8e':function(v8e,I8e){return v8e-I8e;}
,'K8':function(O8,C8){return O8*C8;}
,'N68':"y",'Y5e':function(X5e,B5e){return X5e>=B5e;}
,'B7e':function(c7e,j7e){return c7e<j7e;}
,'a69':function(T69,M69){return T69==M69;}
,'t4z':function(n4z,A4z){return n4z===A4z;}
,'P6':function(v6,I6){return v6==I6;}
,'S7G':function(w7G,r7G){return w7G===r7G;}
,'o1N':function(q1N,Y1N,X1N,B1N){return q1N-Y1N+X1N-B1N;}
,'V1G':function(J1G,S1G){return J1G===S1G;}
,'j0g':function(m0g,R0g){return m0g<R0g;}
,'s5':function(H5,F5){return H5!=F5;}
,'L4m':function(o4m,q4m){return o4m<q4m;}
,'l9G':function(p9G,h9G){return p9G==h9G;}
,'m7z':function(R7z,D7z){return R7z<D7z;}
,'n1f':function(A1f,s1f){return A1f>s1f;}
,'o9f':function(q9f,Y9f){return q9f<Y9f;}
,'w2G':function(r2G,u2G){return r2G/u2G;}
,'e49':function(W49,z49){return W49<z49;}
,'v0S':function(I0S,a0S,T0S,M0S){return I0S-a0S+T0S-M0S;}
,'B5S':function(c5S,j5S){return c5S!=j5S;}
,'K5f':function(O5f,C5f){return O5f!=C5f;}
,'E3j':1,'k2H':function(i2H,L2H){return i2H!==L2H;}
,'C6e':function(g6e,y6e){return g6e<y6e;}
,'w6e':function(r6e,u6e){return r6e*u6e;}
,'w0e':function(r0e,u0e,l0e){return r0e-u0e+l0e;}
,'x3m':function(Z3m,f3m){return Z3m==f3m;}
,'l3':function(p3,h3){return p3<h3;}
,'R6S':function(D6S,N6S){return D6S/N6S;}
,'W7z':function(z7z,G7z){return z7z-G7z;}
,'J2f':function(S2f,w2f){return S2f>=w2f;}
,'m8g':function(R8g,D8g){return R8g<=D8g;}
,'U4G':function(E4G,t4G){return E4G<t4G;}
,'l1f':function(p1f,h1f){return p1f<h1f;}
,'u59':function(l59,p59){return l59==p59;}
,'E0m':function(t0m,n0m){return t0m!=n0m;}
,'k7m':function(i7m,L7m){return i7m<L7m;}
,'s1g':function(H1g,F1g){return H1g-F1g;}
,'d89':function(K89,O89){return K89==O89;}
,'t1T':function(n1T,A1T){return n1T==A1T;}
,'k4T':function(i4T,L4T){return i4T>L4T;}
,'f6g':function(P6g,v6g){return P6g==v6g;}
,'K9H':function(O9H,C9H){return O9H==C9H;}
,'y6m':function(b6m,e6m){return b6m-e6m;}
,'Y2f':function(X2f,B2f){return X2f==B2f;}
,'v49':function(I49,a49){return I49<=a49;}
,'F5T':function(k5T,i5T){return k5T/i5T;}
,'d0m':function(K0m,O0m,C0m){return K0m-O0m+C0m;}
,'R0G':function(D0G,N0G){return D0G-N0G;}
,'q8N':function(Y8N,X8N){return Y8N<X8N;}
,'a2N':function(T2N,M2N){return T2N-M2N;}
,'v3g':function(I3g,a3g){return I3g>a3g;}
,'F0m':function(k0m,i0m){return k0m/i0m;}
,'r4m':function(u4m,l4m){return u4m<l4m;}
,'U9m':function(E9m,t9m){return E9m<=t9m;}
,'I79':function(a79,T79){return a79==T79;}
,'O0f':function(C0f,g0f){return C0f==g0f;}
,'j8G':function(m8G,R8G){return m8G/R8G;}
,'h2H':function(U2H,E2H){return U2H<E2H;}
,'d8f':function(K8f,O8f){return K8f>O8f;}
,'l2g':function(p2g,h2g){return p2g-h2g;}
,'B4S':function(c4S,j4S){return c4S<j4S;}
,'t0z':function(n0z,A0z){return n0z<A0z;}
,'L3m':function(o3m,q3m){return o3m<=q3m;}
,'r9z':function(u9z,l9z){return u9z==l9z;}
,'m2g':function(R2g,D2g){return R2g-D2g;}
,'Z5':function(f5,P5){return f5-P5;}
,'V3H':function(J3H,S3H){return J3H<S3H;}
,'z4':function(G4,Q4){return G4<Q4;}
,'h0g':function(U0g,E0g){return U0g<E0g;}
,'r9g':function(u9g,l9g){return u9g-l9g;}
,'K0H':function(O0H,C0H,g0H){return O0H-C0H-g0H;}
,'O5N':function(C5N,g5N){return C5N===g5N;}
,'I7f':function(a7f,T7f){return a7f*T7f;}
,'Q5S':function(x5S,Z5S){return x5S<=Z5S;}
,'I6m':function(a6m,T6m){return a6m<T6m;}
,'H6G':function(F6G,k6G,i6G,L6G,o6G){return F6G/k6G/i6G/L6G/o6G;}
,'o0S':function(q0S,Y0S){return q0S<=Y0S;}
,'c4m':function(j4m,m4m){return j4m>m4m;}
,'u3e':function(l3e,p3e){return l3e!==p3e;}
,'Y9e':function(X9e,B9e){return X9e-B9e;}
,'r0m':function(u0m,l0m){return u0m==l0m;}
,'r8f':function(u8f,l8f){return u8f<l8f;}
,'E3S':function(t3S,n3S){return t3S&n3S;}
,'P2N':function(v2N,I2N){return v2N<I2N;}
,'A0e':function(s0e,H0e,F0e){return s0e-H0e-F0e;}
,'o0z':function(q0z,Y0z){return q0z<Y0z;}
,'E2f':function(t2f,n2f){return t2f==n2f;}
,'K3N':function(O3N,C3N){return O3N-C3N;}
,'C5g':function(g5g,y5g){return g5g<y5g;}
,'J6f':function(S6f,w6f){return S6f-w6f;}
,'a9z':function(T9z,M9z){return T9z>M9z;}
,'x2T':function(Z2T,f2T){return Z2T<=f2T;}
,'i1S':function(L1S,o1S){return L1S/o1S;}
,'h1S':function(U1S,E1S){return U1S-E1S;}
,'i4S':function(L4S,o4S){return L4S&o4S;}
,'r9T':function(u9T,l9T){return u9T-l9T;}
,'e6z':function(W6z,z6z){return W6z>=z6z;}
,'C8S':function(g8S,y8S){return g8S>y8S;}
,'S7m':function(w7m,r7m){return w7m/r7m;}
,'y5H':function(b5H,e5H){return b5H==e5H;}
,'C5T':function(g5T,y5T){return g5T/y5T;}
,'B9':function(c9,j9){return c9==j9;}
,'B2G':function(c2G,j2G){return c2G<=j2G;}
,'e3T':function(W3T,z3T){return W3T==z3T;}
,'W8N':function(z8N,G8N){return z8N<G8N;}
,'A6':function(s6,H6){return s6/H6;}
,'x29':function(Z29,f29){return Z29<=f29;}
,'w4G':function(r4G,u4G){return r4G<u4G;}
,'f4H':function(P4H,v4H){return P4H/v4H;}
,'M5H':function(V6H,J6H){return V6H*J6H;}
,'P4G':function(v4G,I4G){return v4G*I4G;}
,'W2G':function(z2G,G2G){return z2G*G2G;}
,'g49':function(y49,b49){return y49-b49;}
,'R5m':function(D5m,N5m){return D5m-N5m;}
,'C8e':function(g8e,y8e){return g8e-y8e;}
,'v6z':function(I6z,a6z){return I6z<=a6z;}
,'r3m':function(u3m,l3m){return u3m<l3m;}
,'N8N':function(d8N,K8N){return d8N===K8N;}
,'z3S':function(G3S,Q3S){return G3S<Q3S;}
,'X9f':function(B9f,c9f){return B9f===c9f;}
,'F1':function(i1,L1){return i1<L1;}
,'M5N':function(V6N,J6N){return V6N==J6N;}
,'p4g':function(h4g,U4g){return h4g&U4g;}
,'g5f':function(y5f,b5f){return y5f<b5f;}
,'e8m':function(W8m,z8m){return W8m==z8m;}
,'j3e':function(m3e,R3e){return m3e==R3e;}
,'Y6':function(X6,B6){return X6!=B6;}
,'y7':function(b7,e7,W7){return b7*e7/W7;}
,'I5S':function(a5S,T5S,M5S,V6S){return a5S-T5S+M5S-V6S;}
,'Z38':"k",'A0N':function(s0N,H0N){return s0N-H0N;}
,'t0H':function(n0H,A0H){return n0H>A0H;}
,'W0f':function(z0f,G0f){return z0f!=G0f;}
,'d1z':function(K1z,O1z){return K1z!=O1z;}
,'R89':function(D89,N89){return D89/N89;}
,'Z0e':function(f0e,P0e){return f0e>=P0e;}
,'w6G':function(r6G,u6G){return r6G==u6G;}
,'o7m':function(q7m,Y7m){return q7m>Y7m;}
,'M0H':function(V5H,J5H){return V5H>=J5H;}
,'d6S':function(K6S,O6S){return K6S/O6S;}
,'L7H':function(o7H,q7H){return o7H!=q7H;}
,'Y2N':function(X2N,B2N){return X2N>=B2N;}
,'t7G':function(n7G,A7G){return n7G<A7G;}
,'h1T':function(U1T,E1T){return U1T<E1T;}
,'U7e':function(E7e,t7e){return E7e-t7e;}
,'L9z':function(o9z,q9z){return o9z>q9z;}
,'m3':function(R3,D3){return R3!=D3;}
,'T49':function(M49,V29){return M49==V29;}
,'g5':function(y5,b5){return y5*b5;}
,'h7m':function(U7m,E7m){return U7m==E7m;}
,'O7N':function(C7N,g7N){return C7N>=g7N;}
,'w3':function(r3,u3){return r3-u3;}
,'u0T':function(l0T,p0T){return l0T/p0T;}
,'O6g':function(C6g,g6g){return C6g>g6g;}
,'E3G':function(t3G,n3G){return t3G<n3G;}
,'B5N':function(c5N,j5N){return c5N>j5N;}
,'d6':function(K6,O6){return K6>O6;}
,'p4m':function(h4m,U4m){return h4m==U4m;}
,'m8T':function(R8T,D8T){return R8T==D8T;}
,'d2T':function(K2T,O2T){return K2T-O2T;}
,'X0S':function(B0S,c0S){return B0S in c0S;}
,'C5m':function(g5m,y5m){return g5m<y5m;}
,'g0g':function(y0g,b0g){return y0g<b0g;}
,'a5e':function(T5e,M5e){return T5e<M5e;}
,'j2':function(R2,D2){return R2-D2;}
,'m09':function(R09,D09){return R09/D09;}
,'O9m':function(C9m,g9m){return C9m>=g9m;}
,'R69':function(D69,N69){return D69 in N69;}
,'O8N':function(C8N,g8N){return C8N==g8N;}
,'O3H':function(C3H,g3H){return C3H==g3H;}
,'k1m':function(i1m,L1m){return i1m/L1m;}
,'O7':function(C7,g7){return C7==g7;}
,'w8N':function(r8N,u8N){return r8N-u8N;}
,'K7G':function(O7G,C7G){return O7G==C7G;}
,'E5z':function(t5z,n5z){return t5z-n5z;}
,'A4m':function(s4m,H4m){return s4m==H4m;}
,'v4f':function(I4f,a4f){return I4f!==a4f;}
,'u9f':function(l9f,p9f){return l9f==p9f;}
,'J89':function(S89,w89){return S89>w89;}
,'Q5z':function(x5z,Z5z){return x5z/Z5z;}
,'z1N':function(G1N,Q1N){return G1N/Q1N;}
,'X3e':function(B3e,c3e){return B3e<c3e;}
,'o0':function(q0,Y0){return q0==Y0;}
,'k3z':function(i3z,L3z){return i3z>L3z;}
,'z2T':function(G2T,Q2T){return G2T<Q2T;}
,'B1f':function(c1f,j1f){return c1f>j1f;}
,'R99':function(D99,N99){return D99<N99;}
,'G0S':function(Q0S,x0S){return Q0S<=x0S;}
,'a9N':function(T9N,M9N){return T9N>M9N;}
,'W1f':function(z1f,G1f){return z1f<G1f;}
,'c2N':function(j2N,m2N){return j2N<m2N;}
,'k4N':function(i4N,L4N){return i4N-L4N;}
,'H1f':function(F1f,k1f){return F1f>k1f;}
,'y6T':function(b6T,e6T){return b6T>=e6T;}
,'F3m':function(k3m,i3m){return k3m<i3m;}
,'h8m':function(U8m,E8m){return U8m==E8m;}
,'A9N':function(s9N,H9N){return s9N/H9N;}
,'Y4m':function(X4m,B4m){return X4m<B4m;}
,'m9G':function(R9G,D9G){return R9G<D9G;}
,'R4g':function(D4g,N4g){return D4g*N4g;}
,'H2G':function(F2G,k2G){return F2G>k2G;}
,'V4H':function(J4H,S4H){return J4H<S4H;}
,'p8e':function(h8e,U8e){return h8e===U8e;}
,'E7g':function(t7g,n7g){return t7g*n7g;}
,'V9m':function(J9m,S9m){return J9m==S9m;}
,'s5H':function(H5H,F5H){return H5H<F5H;}
,'b2S':function(e2S,W2S){return e2S==W2S;}
,'W3H':function(z3H,G3H){return z3H==G3H;}
,'r8S':function(u8S,l8S){return u8S/l8S;}
,'M1e':function(V4z,J4z){return V4z==J4z;}
,'k1g':function(i1g,L1g){return i1g===L1g;}
,'N09':function(d09,K09){return d09===K09;}
,'m79':function(R79,D79){return R79==D79;}
,'H4G':function(F4G,k4G,i4G){return F4G*k4G/i4G;}
,'k3g':function(i3g,L3g){return i3g/L3g;}
,'E89':function(t89,n89){return t89==n89;}
,'s7m':function(H7m,F7m){return H7m<F7m;}
,'T8G':function(M8G,V0G){return M8G-V0G;}
,'n3j':0,'E4m':function(t4m,n4m){return t4m<n4m;}
,'D1m':function(N1m,d1m){return N1m===d1m;}
,'N0f':function(d0f,K0f){return d0f==K0f;}
,'v1m':function(I1m,a1m){return I1m%a1m;}
,'r2f':function(u2f,l2f){return u2f-l2f;}
,'v0m':function(I0m,a0m){return I0m!=a0m;}
,'v4e':function(I4e,a4e){return I4e!=a4e;}
,'l7f':function(p7f,h7f){return p7f-h7f;}
,'O9G':function(C9G,g9G){return C9G<g9G;}
,'z6S':function(G6S,Q6S){return G6S==Q6S;}
,'Z5f':function(f5f,P5f){return f5f<P5f;}
,'k1N':function(i1N,L1N){return i1N/L1N;}
,'a2f':function(T2f,M2f){return T2f==M2f;}
,'k1T':function(i1T,L1T){return i1T-L1T;}
,'d6e':function(K6e,O6e){return K6e>O6e;}
,'i0f':function(L0f,o0f){return L0f===o0f;}
,'Z39':function(f39,P39){return f39==P39;}
,'R9N':function(D9N,N9N){return D9N===N9N;}
,'x4m':function(Z4m,f4m){return Z4m/f4m;}
,'H2j':function(F2j,k2j){return F2j!=k2j;}
,'n9G':function(A9G,s9G){return A9G<s9G;}
,'u8':function(l8,p8){return l8>p8;}
,'u4f':function(l4f,p4f){return l4f<p4f;}
,'l9m':function(p9m,h9m){return p9m!=h9m;}
,'V6g':function(J6g,S6g){return J6g<=S6g;}
,'X59':function(B59,c59){return B59>=c59;}
,'A0G':function(s0G,H0G){return s0G!=H0G;}
,'V6e':function(J6e,S6e){return J6e-S6e;}
,'u6N':function(l6N,p6N){return l6N==p6N;}
,'q6H':function(Y6H,X6H){return Y6H/X6H;}
,'f7e':function(P7e,v7e){return P7e*v7e;}
,'Q1g':function(x1g,Z1g){return x1g<Z1g;}
,'x5G':function(Z5G,f5G){return Z5G==f5G;}
,'U09':function(E09,t09){return E09-t09;}
,'t5H':function(n5H,A5H){return n5H<A5H;}
,'u7G':function(l7G,p7G){return l7G===p7G;}
,'Q8N':function(x8N,Z8N){return x8N<Z8N;}
,'U19':function(E19,t19){return E19!=t19;}
,'C4j':function(g4j,y4j){return g4j>y4j;}
,'o8':function(q8,Y8){return q8<Y8;}
,'r5z':function(u5z,l5z){return u5z*l5z;}
,'I9m':function(a9m,T9m){return a9m<T9m;}
,'a2e':function(T2e,M2e){return T2e/M2e;}
,'B9G':function(c9G,j9G){return c9G>=j9G;}
,'v4z':function(I4z,a4z){return I4z!==a4z;}
,'Z49':function(f49,P49){return f49-P49;}
,'S8G':function(w8G,r8G){return w8G-r8G;}
,'W1':function(z1,G1){return z1===G1;}
,'l7N':function(p7N,h7N){return p7N<h7N;}
,'E9e':function(t9e,n9e){return t9e>n9e;}
,'h5H':function(U5H,E5H){return U5H<E5H;}
,'g0m':function(y0m,b0m){return y0m<=b0m;}
,'O5S':function(C5S,g5S){return C5S<g5S;}
,'K49':function(O49,C49){return O49*C49;}
,'C6S':function(g6S,y6S){return g6S/y6S;}
,'w1S':function(r1S,u1S,l1S,p1S){return r1S-u1S+l1S+p1S;}
,'M6m':function(V1m,J1m){return V1m<J1m;}
,'u0H':function(l0H,p0H){return l0H>p0H;}
,'F4g':function(k4g,i4g){return k4g!=i4g;}
,'P0N':function(v0N,I0N){return v0N-I0N;}
,'u3N':function(l3N,p3N){return l3N<p3N;}
,'s3T':function(H3T,F3T){return H3T!=F3T;}
,'u9':function(l9,p9,h9){return l9*p9/h9;}
,'i9S':function(L9S,o9S){return L9S<=o9S;}
,'s59':function(H59,F59){return H59===F59;}
,'i7f':function(L7f,o7f){return L7f==o7f;}
,'d7g':function(K7g,O7g){return K7g>O7g;}
,'E2N':function(t2N,n2N){return t2N-n2N;}
,'T0g':function(M0g,V5g){return M0g<=V5g;}
,'A5m':function(s5m,H5m){return s5m===H5m;}
,'y4H':function(b4H,e4H){return b4H<e4H;}
,'K3T':function(O3T,C3T){return O3T==C3T;}
,'k0z':function(i0z,L0z){return i0z===L0z;}
,'M1G':function(V4f,J4f){return V4f<J4f;}
,'p2N':function(h2N,U2N){return h2N/U2N;}
,'a8S':function(T8S,M8S){return T8S==M8S;}
,'a9T':function(T9T,M9T){return T9T*M9T;}
,'Q7N':function(x7N,Z7N){return x7N!==Z7N;}
,'k3N':function(i3N,L3N){return i3N>L3N;}
,'F18':"v",'l8g':function(p8g,h8g){return p8g===h8g;}
,'u2':function(l2,p2){return l2-p2;}
,'q7S':function(Y7S,X7S){return Y7S>X7S;}
,'c6f':function(j6f,m6f){return j6f==m6f;}
,'x7H':function(Z7H,f7H){return Z7H<f7H;}
,'l68':"{",'U6m':function(E6m,t6m){return E6m/t6m;}
,'A1z':function(s1z,H1z){return s1z==H1z;}
,'V4S':function(J4S,S4S){return J4S&S4S;}
,'s1m':function(H1m,F1m){return H1m/F1m;}
,'V7e':function(J7e,S7e){return J7e-S7e;}
,'T59':function(M59,V69){return M59*V69;}
,'P7H':function(v7H,I7H){return v7H>=I7H;}
,'J29':function(S29,w29){return S29-w29;}
,'c2e':function(j2e,m2e){return j2e>m2e;}
,'X4N':function(B4N,c4N){return B4N==c4N;}
,'u49':function(l49,p49){return l49/p49;}
,'O19':function(C19,g19){return C19*g19;}
,'U79':function(E79,t79){return E79!==t79;}
,'R9z':function(D9z,N9z){return D9z-N9z;}
,'U8z':function(E8z,t8z){return E8z>=t8z;}
,'y1g':function(b1g,e1g){return b1g!=e1g;}
,'G8G':function(Q8G,x8G){return Q8G/x8G;}
,'h3j':2,'P7g':function(v7g,I7g){return v7g>I7g;}
,'D4z':function(N4z,d4z){return N4z<d4z;}
,'z6':function(G6,Q6){return G6>Q6;}
,'m5S':function(R5S,D5S){return R5S>D5S;}
,'C7H':function(g7H,y7H){return g7H<y7H;}
,'v3z':function(I3z,a3z){return I3z===a3z;}
,'H7S':function(F7S,k7S){return F7S<k7S;}
,'i6g':function(L6g,o6g){return L6g==o6g;}
,'I7N':function(a7N,T7N){return a7N-T7N;}
,'W5H':function(z5H,G5H){return z5H-G5H;}
,'A5T':function(s5T,H5T){return s5T===H5T;}
,'C29':function(g29,y29){return g29>=y29;}
,'W9G':function(z9G,G9G){return z9G-G9G;}
,'o0T':function(q0T,Y0T){return q0T==Y0T;}
,'H1S':function(F1S,k1S){return F1S==k1S;}
,'t4f':function(n4f,A4f){return n4f===A4f;}
,'c6G':function(j6G,m6G){return j6G/m6G;}
,'I9':function(a9,T9){return a9*T9;}
,'n6m':function(A6m,s6m){return A6m<s6m;}
,'R1N':function(D1N,N1N){return D1N/N1N;}
,'c7H':function(j7H,m7H){return j7H!=m7H;}
,'q7':function(Y7,X7){return Y7>X7;}
,'n5N':function(A5N,s5N){return A5N===s5N;}
,'O8g':function(C8g,g8g){return C8g<g8g;}
,'E99':function(t99,n99){return t99<n99;}
,'i9':function(L9,o9){return L9/o9;}
,'G2H':function(Q2H,x2H){return Q2H*x2H;}
,'u4e':function(l4e,p4e){return l4e>=p4e;}
,'u5':function(l5,p5){return l5<p5;}
,'E6S':function(t6S,n6S){return t6S==n6S;}
,'t1m':function(n1m,A1m){return n1m/A1m;}
,'L9N':function(o9N,q9N){return o9N===q9N;}
,'g1m':function(y1m,b1m){return y1m==b1m;}
,'J2J':(function(U2J){return (function(F2J,s2J){return (function(k2J){return {S2J:k2J}
;}
)(function(r2J){var n2J,u2J=((0x0,58.40E1)>0x184?(54,0):(63.1E1,0x51));for(var H2J=F2J;u2J<r2J["length"];u2J++){var A2J=s2J(r2J,u2J);n2J=u2J===(0x159<=(7E0,7.43E2)?(28,0):(92.,6.54E2)>(14.83E2,83.30E1)?(0x40,'P'):139.70E1<=(0x1D2,1.8E1)?(0x15D,'P'):(7.63E2,0.))?A2J:n2J^A2J;}
return n2J?H2J:!H2J;}
);}
)((function(E2J,p2J,l2J,t2J){var h2J=((0x1D0,60.90E1)<(148.,144.3E1)?(0x30,28):(0x16C,7.25E2)<(0x22E,0xB3)?(0x144,50):90.60E1>=(80.,1.081E3)?50:(0x19,0xDA));return E2J(U2J,h2J)-t2J(p2J,l2J)>h2J;}
)(parseInt,Date,(function(p2J){return (''+p2J)["substring"](((81.30E1,43.)<=(1.27E2,21.)?28.:(14.33E2,71.)<132?(82.0E1,1):(84.5E1,78.)>(0xFA,0x141)?"v":(0x25,1.18E2)),(p2J+'')["length"]-((29.,0xF7)<(65,0x11C)?(2.42E2,1):(0x16,0x16)));}
)('_getTime2'),function(p2J,l2J){return new p2J()[l2J]();}
),function(r2J,u2J){var w2J=parseInt(r2J["charAt"](u2J),((2,1.068E3)>=(0x1B0,117)?(52.5E1,16):14.99E2<=(14.25E2,0x232)?0xEF:(127.,0x1ED)))["toString"](((110.,17.2E1)<=(134,4.25E2)?(129,2):(135,113.)));return w2J["charAt"](w2J["length"]-((0x182,98.60E1)>(0x11E,48.)?(43.2E1,1):(37.,0x1F)));}
);}
)('3r7l9g2lk'),'c4j':function(j4j,m4j){return j4j!=m4j;}
,'Z2g':function(f2g,P2g){return f2g/P2g;}
,'d4':function(K4,O4){return K4==O4;}
,'s3z':function(H3z,F3z){return H3z<F3z;}
,'N7':function(d7,K7){return d7===K7;}
,'Y7g':function(X7g,B7g){return X7g-B7g;}
,'C2':function(g2,b2,e2){return g2/b2/e2;}
,'g59':function(y59,b59){return y59*b59;}
,'P88':16,'i6m':function(L6m,o6m){return L6m<o6m;}
,'n1G':function(A1G,s1G){return A1G<s1G;}
,'M2m':function(V7m,J7m){return V7m*J7m;}
,'r4N':function(u4N,l4N){return u4N*l4N;}
,'m8N':function(R8N,D8N){return R8N-D8N;}
,'x6f':function(Z6f,f6f){return Z6f*f6f;}
,'J3S':function(S3S,w3S){return S3S/w3S;}
,'P5g':function(v5g,I5g){return v5g<=I5g;}
,'i7N':function(L7N,o7N){return L7N<o7N;}
,'k8H':function(i8H,L8H,o8H){return i8H-L8H+o8H;}
,'i1G':function(L1G,o1G){return L1G===o1G;}
,'X6N':function(B6N,c6N){return B6N/c6N;}
,'n6g':function(A6g,s6g){return A6g<s6g;}
,'w0S':function(r0S,u0S){return r0S-u0S;}
,'q7T':function(Y7T,X7T){return Y7T-X7T;}
,'N6T':function(d6T,K6T){return d6T/K6T;}
,'K3g':function(O3g,C3g){return O3g*C3g;}
,'S49':function(w49,r49){return w49-r49;}
,'I2m':function(a2m,T2m){return a2m>T2m;}
,'Z1S':function(f1S,P1S){return f1S/P1S;}
,'P7':function(v7,I7){return v7==I7;}
,'o5':function(q5,Y5){return q5!=Y5;}
,'B6g':function(c6g,j6g){return c6g==j6g;}
,'g2H':function(y2H,b2H){return y2H!=b2H;}
,'o1T':function(q1T,Y1T){return q1T<Y1T;}
,'a4g':function(T4g,M4g){return T4g>M4g;}
,'h7G':function(U7G,E7G){return U7G==E7G;}
,'e3N':function(W3N,z3N){return W3N<z3N;}
,'F9z':function(k9z,i9z){return k9z*i9z;}
,'Y3m':function(X3m,B3m){return X3m<B3m;}
,'z6f':function(G6f,Q6f){return G6f==Q6f;}
,'w7':function(r7,u7){return r7*u7;}
,'Z8m':function(f8m,P8m){return f8m==P8m;}
,'A5z':function(s5z,H5z){return s5z-H5z;}
,'D5':function(N5,d5){return N5/d5;}
,'f0f':function(P0f,v0f){return P0f!==v0f;}
,'B1S':function(c1S,j1S){return c1S-j1S;}
,'V09':function(J09,S09){return J09==S09;}
,'G4T':function(Q4T,x4T){return Q4T-x4T;}
,'k3T':function(i3T,L3T){return i3T<L3T;}
,'i7':function(L7,o7){return L7!=o7;}
,'z89':function(G89,Q89){return G89<Q89;}
,'f8H':function(P8H,v8H){return P8H/v8H;}
,'R5e':function(D5e,N5e,d5e){return D5e-N5e+d5e;}
,'b5T':function(e5T,W5T){return e5T<W5T;}
,'x8f':function(Z8f,f8f){return Z8f<f8f;}
,'j1m':function(m1m,R1m){return m1m===R1m;}
,'F6e':function(k6e,i6e){return k6e<=i6e;}
,'U2G':function(E2G,t2G){return E2G*t2G;}
,'w7N':function(r7N,u7N){return r7N>=u7N;}
,'c5T':function(j5T,m5T){return j5T==m5T;}
,'i1f':function(L1f,o1f){return L1f<o1f;}
,'I4H':function(a4H,T4H){return a4H in T4H;}
,'H1e':function(F1e,k1e){return F1e==k1e;}
,'S0H':function(w0H,r0H){return w0H/r0H;}
,'f6m':function(P6m,v6m){return P6m!==v6m;}
,'e3g':function(W3g,z3g){return W3g==z3g;}
,'q6T':function(Y6T,X6T){return Y6T>=X6T;}
,'J8f':function(S8f,w8f){return S8f-w8f;}
,'O5z':function(C5z,g5z){return C5z<g5z;}
,'R6f':function(D6f,N6f){return D6f>=N6f;}
,'b6e':function(e6e,W6e){return e6e*W6e;}
,'P4j':function(v4j,I4j){return v4j>=I4j;}
,'I4S':function(a4S,T4S){return a4S>T4S;}
,'Z0m':function(f0m,P0m){return f0m-P0m;}
,'h3f':function(U3f,E3f){return U3f/E3f;}
,'p0m':function(h0m,U0m){return h0m-U0m;}
,'A8S':function(s8S,H8S){return s8S>H8S;}
,'U7f':function(E7f,t7f){return E7f-t7f;}
,'C0N':function(g0N,y0N){return g0N<y0N;}
,'l1':function(p1,h1){return p1==h1;}
,'v0z':function(I0z,a0z){return I0z!==a0z;}
,'p6':function(h6,U6){return h6<U6;}
,'s9H':function(H9H,F9H){return H9H==F9H;}
,'s5f':function(H5f,F5f){return H5f<F5f;}
,'f5S':function(P5S,v5S){return P5S-v5S;}
,'F5e':function(k5e,i5e){return k5e-i5e;}
,'q6g':function(Y6g,X6g){return Y6g==X6g;}
,'l7z':function(p7z,h7z){return p7z==h7z;}
,'R9g':function(D9g,N9g){return D9g>N9g;}
,'o8m':function(q8m,Y8m){return q8m==Y8m;}
,'b6':function(e6,W6){return e6>W6;}
,'h2S':function(U2S,E2S){return U2S-E2S;}
,'Q6g':function(x6g,Z6g){return x6g==Z6g;}
,'P9T':function(v9T,I9T){return v9T-I9T;}
,'h39':function(U39,E39){return U39<E39;}
,'a6G':function(T6G,M6G){return T6G<M6G;}
,'E9N':function(t9N,n9N){return t9N/n9N;}
,'M8T':function(V0T,J0T){return V0T!==J0T;}
,'g3T':function(y3T,b3T){return y3T==b3T;}
,'L8f':function(o8f,q8f){return o8f==q8f;}
,'H2g':function(F2g,k2g){return F2g-k2g;}
,'I09':function(a09,T09){return a09==T09;}
,'X4f':function(B4f,c4f){return B4f<c4f;}
,'l19':function(p19,h19){return p19===h19;}
,'F5z':function(k5z,i5z){return k5z/i5z;}
,'l6T':function(p6T,h6T){return p6T===h6T;}
,'h9f':function(U9f,E9f){return U9f==E9f;}
,'c29':function(j29,m29){return j29==m29;}
,'W3':function(z3,G3){return z3==G3;}
,'i7z':function(L7z,o7z){return L7z<o7z;}
,'S9':function(w9,r9){return w9===r9;}
,'z9e':function(G9e,Q9e){return G9e<Q9e;}
,'b9T':function(e9T,W9T){return e9T<W9T;}
,'z5G':function(G5G,Q5G){return G5G<Q5G;}
,'J4':function(S4,w4){return S4==w4;}
,'e7G':function(W7G,z7G){return W7G-z7G;}
,'w6m':function(r6m,u6m){return r6m>=u6m;}
,'k0e':function(i0e,L0e){return i0e/L0e;}
,'k6N':function(i6N,L6N){return i6N<L6N;}
,'D0z':function(N0z,d0z){return N0z==d0z;}
,'n7e':function(A7e,s7e){return A7e<s7e;}
,'w1f':function(r1f,u1f){return r1f<u1f;}
,'a7g':function(T7g,M7g){return T7g<M7g;}
,'K0S':function(O0S,C0S){return O0S>C0S;}
,'n9':function(A9,s9){return A9==s9;}
,'K39':function(O39,C39){return O39>C39;}
,'P5T':function(v5T,I5T){return v5T/I5T;}
,'n7N':function(A7N,s7N){return A7N!==s7N;}
,'S4e':function(w4e,r4e){return w4e!=r4e;}
,'F3G':function(k3G,i3G){return k3G<i3G;}
,'o4N':function(q4N,Y4N){return q4N==Y4N;}
,'O2g':function(C2g,g2g){return C2g/g2g;}
,'g0T':function(y0T,b0T){return y0T<b0T;}
,'C69':function(g69,y69){return g69==y69;}
,'L5g':function(o5g,q5g){return o5g>q5g;}
,'V0f':function(J0f,S0f){return J0f<S0f;}
,'n1H':function(A1H,s1H){return A1H==s1H;}
,'k8m':function(i8m,L8m){return i8m==L8m;}
,'g9f':function(y9f,b9f){return y9f<b9f;}
,'q7N':function(Y7N,X7N){return Y7N<X7N;}
,'Q3':function(x3,Z3){return x3==Z3;}
,'x2N':function(Z2N,f2N){return Z2N>f2N;}
,'g0z':function(y0z,b0z){return y0z==b0z;}
,'W09':function(z09,G09){return z09!=G09;}
,'S5f':function(w5f,r5f){return w5f<r5f;}
,'W1G':function(z1G,G1G){return z1G<G1G;}
,'M9m':function(V8m,J8m){return V8m==J8m;}
,'q9m':function(Y9m,X9m){return Y9m>X9m;}
,'m1e':function(R1e,D1e){return R1e-D1e;}
,'B9S':function(c9S,j9S){return c9S==j9S;}
,'j1T':function(m1T,R1T){return m1T<=R1T;}
,'B8T':function(c8T,j8T){return c8T==j8T;}
,'I0f':function(a0f,T0f){return a0f<T0f;}
,'C4m':function(g4m,y4m){return g4m<y4m;}
,'B7S':function(c7S,j7S){return c7S>=j7S;}
,'h6z':function(U6z,E6z){return U6z!=E6z;}
,'b69':function(e69,W69){return e69==W69;}
,'g8m':function(y8m,b8m){return y8m<b8m;}
,'x4g':function(Z4g,f4g){return Z4g<f4g;}
,'c2f':function(j2f,m2f){return j2f==m2f;}
,'R4j':function(D4j,N4j){return D4j==N4j;}
,'q09':function(Y09,X09){return Y09==X09;}
,'f5z':function(P5z,v5z){return P5z!==v5z;}
,'i9m':function(L9m,o9m){return L9m==o9m;}
,'Z3g':function(f3g,P3g){return f3g<=P3g;}
,'J5z':function(S5z,w5z){return S5z>w5z;}
,'I8z':function(a8z,T8z){return a8z in T8z;}
,'l6m':function(p6m,h6m){return p6m===h6m;}
,'e3z':function(W3z,z3z){return W3z*z3z;}
,'k5H':function(i5H,L5H,o5H){return i5H*L5H/o5H;}
,'c1N':function(j1N,m1N){return j1N<=m1N;}
,'G0g':function(Q0g,x0g){return Q0g/x0g;}
,'A9e':function(s9e,H9e){return s9e==H9e;}
,'K0T':function(O0T,C0T){return O0T==C0T;}
,'x9g':function(Z9g,f9g){return Z9g===f9g;}
,'w2j':function(r2j,u2j){return r2j!=u2j;}
,'M7f':function(V3f,J3f){return V3f-J3f;}
,'M7N':function(V3N,J3N){return V3N<J3N;}
,'t5':function(n5,A5){return n5/A5;}
,'Y8S':function(X8S,B8S){return X8S-B8S;}
,'T9H':function(M9H,V8H){return M9H==V8H;}
,'b7H':function(e7H,W7H){return e7H>=W7H;}
,'g1T':function(y1T,b1T){return y1T<=b1T;}
,'a4G':function(T4G,M4G){return T4G-M4G;}
,'K1m':function(O1m,C1m){return O1m==C1m;}
,'P6G':function(v6G,I6G){return v6G!==I6G;}
,'F9T':function(k9T,i9T){return k9T-i9T;}
,'W7f':function(z7f,G7f){return z7f==G7f;}
,'j3g':function(m3g,R3g){return m3g<R3g;}
,'u6z':function(l6z,p6z){return l6z===p6z;}
,'p8S':function(h8S,U8S){return h8S/U8S;}
,'L99':function(o99,q99){return o99/q99;}
,'h6N':function(U6N,E6N){return U6N<=E6N;}
,'G0T':function(Q0T,x0T){return Q0T<x0T;}
,'j3N':function(m3N,R3N){return m3N==R3N;}
,'j5f':function(m5f,R5f){return m5f!==R5f;}
,'n79':function(A79,s79){return A79-s79;}
,'Y0G':function(X0G,B0G){return X0G==B0G;}
,'r5e':function(u5e,l5e){return u5e/l5e;}
,'V8g':function(J8g,S8g){return J8g*S8g;}
,'p89':function(h89,U89){return h89-U89;}
,'S1H':function(w1H,r1H,u1H){return w1H-r1H-u1H;}
,'a4j':function(T4j,M4j){return T4j<=M4j;}
,'H6T':function(F6T,k6T){return F6T>=k6T;}
,'m0f':function(R0f,D0f){return R0f-D0f;}
,'E8e':function(t8e,n8e){return t8e/n8e;}
,'T99':function(M99,V89){return M99>=V89;}
,'F4j':function(k4j,i4j){return k4j<i4j;}
,'f1g':function(P1g,v1g){return P1g<=v1g;}
,'S8':function(w8,r8){return w8/r8;}
,'q1e':function(Y1e,X1e){return Y1e==X1e;}
,'f7N':function(P7N,v7N){return P7N>=v7N;}
,'q2j':function(Y2j,X2j){return Y2j-X2j;}
,'q1f':function(Y1f,X1f){return Y1f<X1f;}
,'b1z':function(e1z,W1z){return e1z!=W1z;}
,'u2H':function(l2H,p2H){return l2H in p2H;}
,'M9G':function(V8G,J8G){return V8G>J8G;}
,'q1S':function(Y1S,X1S){return Y1S/X1S;}
,'h3N':function(U3N,E3N){return U3N===E3N;}
,'O1f':function(C1f,g1f){return C1f===g1f;}
,'C2f':function(g2f,y2f){return g2f==y2f;}
,'M3H':function(V9H,J9H){return V9H|J9H;}
,'S5H':function(w5H,r5H){return w5H<r5H;}
,'l7T':function(p7T,h7T){return p7T/h7T;}
,'r3G':function(u3G,l3G){return u3G===l3G;}
,'z7H':function(G7H,Q7H){return G7H<Q7H;}
,'m8z':function(R8z,D8z){return R8z!==D8z;}
,'t9H':function(n9H,A9H){return n9H!=A9H;}
,'D0e':function(N0e,d0e){return N0e/d0e;}
,'Z4T':function(f4T,P4T){return f4T/P4T;}
,'s4T':function(H4T,F4T){return H4T<=F4T;}
,'J8e':function(S8e,w8e){return S8e-w8e;}
,'W9m':function(z9m,G9m){return z9m==G9m;}
,'a4m':function(T4m,M4m){return T4m/M4m;}
,'F3S':function(k3S,i3S){return k3S&i3S;}
,'l8N':function(p8N,h8N){return p8N==h8N;}
,'D4f':function(N4f,d4f){return N4f>d4f;}
,'n5S':function(A5S,s5S){return A5S*s5S;}
,'h5f':function(U5f,E5f){return U5f<E5f;}
,'y2G':function(b2G,e2G){return b2G===e2G;}
,'b8e':function(e8e,W8e){return e8e!=W8e;}
,'a4':function(T4,M4){return T4==M4;}
,'i9G':function(L9G,o9G){return L9G<o9G;}
,'d2f':function(K2f,O2f){return K2f==O2f;}
,'S1g':function(w1g,r1g){return w1g<r1g;}
,'w1G':function(r1G,u1G){return r1G<u1G;}
,'P1H':function(v1H,I1H){return v1H===I1H;}
,'L2N':function(o2N,q2N){return o2N>q2N;}
,'T1S':function(M1S,V4g){return M1S<=V4g;}
,'R5G':function(D5G,N5G){return D5G==N5G;}
,'z6G':function(G6G,Q6G){return G6G===Q6G;}
,'M4S':function(V2S,J2S){return V2S>=J2S;}
,'J7g':function(S7g,w7g){return S7g<w7g;}
,'t4N':function(n4N,A4N){return n4N>A4N;}
,'I1g':function(a1g,T1g){return a1g>=T1g;}
,'c4G':function(j4G,m4G){return j4G>m4G;}
,'Y6f':function(X6f,B6f){return X6f==B6f;}
,'o5f':function(q5f,Y5f){return q5f==Y5f;}
,'R8S':function(D8S,N8S){return D8S<N8S;}
,'q7z':function(Y7z,X7z){return Y7z-X7z;}
,'O3':function(C3,g3){return C3==g3;}
,'r8H':function(u8H,l8H){return u8H==l8H;}
,'H7e':function(F7e,k7e){return F7e>=k7e;}
,'Y5T':function(X5T,B5T){return X5T===B5T;}
,'v0e':function(I0e,a0e){return I0e<a0e;}
,'O6m':function(C6m,g6m){return C6m/g6m;}
,'o7G':function(q7G,Y7G){return q7G===Y7G;}
,'C9z':function(g9z,y9z){return g9z>=y9z;}
,'l7e':function(p7e,h7e){return p7e/h7e;}
,'n19':function(A19,s19){return A19==s19;}
,'K6z':function(O6z,C6z){return O6z!==C6z;}
,'U9G':function(E9G,t9G){return E9G-t9G;}
,'e8':function(W8,z8){return W8==z8;}
,'c6S':function(j6S,m6S){return j6S*m6S;}
,'d3m':function(K3m,O3m){return K3m<O3m;}
,'c2S':function(j2S,m2S){return j2S<=m2S;}
,'M6H':function(V1H,J1H){return V1H-J1H;}
,'N7z':function(d7z,K7z){return d7z===K7z;}
,'J0G':function(S0G,w0G){return S0G<w0G;}
,'T7G':function(M7G,V3G){return M7G>V3G;}
,'S2H':function(w2H,r2H){return w2H*r2H;}
,'w1':function(r1,u1){return r1==u1;}
,'K8m':function(O8m,C8m){return O8m>=C8m;}
,'j0e':function(m0e,R0e){return m0e>R0e;}
,'Z7G':function(f7G,P7G){return f7G===P7G;}
,'F7g':function(k7g,i7g){return k7g<i7g;}
,'C2z':function(g2z,y2z){return g2z*y2z;}
,'x9e':function(Z9e,f9e){return Z9e!=f9e;}
,'t49':function(n49,A49){return n49<A49;}
,'X0z':function(B0z,c0z){return B0z==c0z;}
,'D4T':function(N4T,d4T){return N4T-d4T;}
,'S1m':function(w1m,r1m){return w1m==r1m;}
,'f19':function(P19,v19){return P19<v19;}
,'Y2T':function(X2T,B2T){return X2T==B2T;}
,'H9':function(F9,k9){return F9/k9;}
,'E2e':function(t2e,n2e){return t2e/n2e;}
,'j2H':function(m2H,R2H){return m2H==R2H;}
,'L2T':function(o2T,q2T){return o2T-q2T;}
,'F2N':function(k2N,i2N){return k2N==i2N;}
,'O7S':function(C7S,g7S){return C7S-g7S;}
,'G4z':function(Q4z,x4z){return Q4z*x4z;}
,'N7N':function(d7N,K7N){return d7N>K7N;}
,'m6H':function(R6H,D6H){return R6H==D6H;}
,'w3g':function(r3g,u3g,l3g,p3g){return r3g-u3g+l3g-p3g;}
,'O2j':(function(u7j){var M2j={}
,b2j=function(e2j,W2j){var z2j=W2j&((0x1A3,8.290E2)<1.114E3?(98,0xffff):0x45>(0x6E,2.780E2)?20:(0x115,13)>(0x1D6,0x42)?20000:(94,0x1DB));var G2j=W2j-z2j;return ((G2j*e2j|((94.9E1,0x49)>=0x8C?(0x8C,"J"):(35,114.)<0x67?11.28E2:12.19E2>=(51.7E1,0x47)?(0x14B,0):(0xA1,105)))+(z2j*e2j|0))|0;}
,J7j=(function(){}
).constructor(new u7j(("yl"+"{|"+"y"+"u"+"\'"+((44.,83.4E1)>=57.?(44.30E1,"k"):(146.1E1,0x18A))+"v"+"j"+"|"+((29.,90.0E1)>=(51.,99)?(0x1F3,"t"):(10.63E2,135))+"lu"+((0x1F6,0x209)>1.195E3?(0x42,1.1):4.19E2<(95.,7.850E2)?(25.,"{"):(0x1A6,124.))+"5"+"k"+"vt"+"h"+((102,0x94)<67?(1.8E1,103.5E1):85.2E1<=(136.,13.5E2)?(62,"p"):(0x138,5.58E2))+"uB")).l7j(7))(),C2j=function(Q2j,x2j,Z2j){if(M2j[Z2j]!==undefined){return M2j[Z2j];}
var f2j=0xcc9e2d51,P2j=0x1b873593;var v2j=Z2j;var I2j=x2j&~((38,141.1E1)>10.?(0x8F,0x3):(71.,0x22F));for(var a2j=0;a2j<I2j;a2j+=4){var T2j=(Q2j.charCodeAt(a2j)&0xff)|((Q2j.charCodeAt(a2j+((134.8E1,71.)<1.298E3?(1.286E3,1):(0x23E,124)))&0xff)<<8)|((Q2j.charCodeAt(a2j+2)&0xff)<<16)|((Q2j.charCodeAt(a2j+((138.,0x1D0)<110.?7.08E2:0x1FC<=(30.,71.60E1)?(0x1EB,3):(30.,71.)<11?"W":(147.0E1,0x206)))&0xff)<<24);T2j=b2j(T2j,f2j);T2j=((T2j&0x1ffff)<<15)|(T2j>>>17);T2j=b2j(T2j,P2j);v2j^=T2j;v2j=((v2j&((39.,4.850E2)>(1.47E2,0xB1)?(106,0x7ffff):(113,66)>149.8E1?(1.2690E3,31):(0x228,96)))<<((8.39E2,0x114)<0x253?(47.2E1,13):(136,12.70E1)<41?0x205:(18.1E1,12.24E2)))|(v2j>>>19);v2j=(v2j*5+0xe6546b64)|0;}
T2j=0;switch(x2j%4){case 3:T2j=(Q2j.charCodeAt(I2j+2)&0xff)<<16;case 2:T2j|=(Q2j.charCodeAt(I2j+1)&0xff)<<((0x145,107.)<=(0,1.042E3)?(0xE1,8):(0x1AA,114.10E1));case 1:T2j|=(Q2j.charCodeAt(I2j)&((9.51E2,145)>=(1.75E2,98)?(3.13E2,0xff):(104.4E1,76.)));T2j=b2j(T2j,f2j);T2j=((T2j&0x1ffff)<<((0x9,64.3E1)<(66.60E1,0xA8)?(0x1B4,"i"):9.93E2>(2.34E2,0x1D5)?(4.36E2,15):(21,0x129)>(0x48,4.7E2)?0x139:(137,114.7E1)))|(T2j>>>17);T2j=b2j(T2j,P2j);v2j^=T2j;}
v2j^=x2j;v2j^=v2j>>>((21.,0x8)>108.?'r':(0xA4,0x34)>=(31.20E1,0x108)?60.:(9.5E1,0x4B)>3.0E1?(53.,16):(78.,1.473E3));v2j=b2j(v2j,0x85ebca6b);v2j^=v2j>>>13;v2j=b2j(v2j,((5.55E2,0x19A)>(0x212,145.)?(8.8E2,0xc2b2ae35):0xF1<(0x148,23.0E1)?4.7E2:(0x154,53.)>76.?(133.,'X'):(52.,38)));v2j^=v2j>>>16;M2j[Z2j]=v2j;return v2j;}
,y2j=function(w7j,r7j,t7j){var V7j;var S7j;if(t7j>0){V7j=J7j.substring(w7j,t7j);S7j=V7j.length;return C2j(V7j,S7j,r7j);}
else if(w7j===null||w7j<=0){V7j=J7j.substring(((0.,84.5E1)>=88.9E1?62.30E1:(138.,50.7E1)>0x4F?(0x10D,0):(1.161E3,120.)),J7j.length);S7j=V7j.length;return C2j(V7j,S7j,r7j);}
V7j=J7j.substring(J7j.length-w7j,J7j.length);S7j=V7j.length;return C2j(V7j,S7j,r7j);}
;return {b2j:b2j,C2j:C2j,y2j:y2j}
;}
)(function(p7j){this.p7j=p7j;this.l7j=function(h7j){var U7j=new String();for(var E7j=0;E7j<p7j.length;E7j++){U7j+=String.fromCharCode(p7j.charCodeAt(E7j)-h7j);}
return U7j;}
}
),'O1S':function(C1S,g1S){return C1S<=g1S;}
,'h8':function(U8,E8){return U8!==E8;}
,'y9S':function(b9S,e9S){return b9S<=e9S;}
,'g8G':function(y8G,b8G){return y8G==b8G;}
,'z5m':function(G5m,Q5m){return G5m/Q5m;}
,'F28':"u",'r6f':function(u6f,l6f){return u6f*l6f;}
,'k3f':function(i3f,L3f){return i3f*L3f;}
,'H6g':function(F6g,k6g){return F6g==k6g;}
,'w1e':function(r1e,u1e){return r1e===u1e;}
,'n2G':function(A2G,s2G){return A2G>s2G;}
,'C2S':function(g2S,y2S){return g2S/y2S;}
,'U2g':function(E2g,t2g){return E2g>t2g;}
,'F89':function(k89,i89){return k89/i89;}
,'E9z':function(t9z,n9z){return t9z==n9z;}
,'T9e':function(M9e,V8e){return M9e-V8e;}
,'F9e':function(k9e,i9e){return k9e==i9e;}
,'J4m':function(S4m,w4m){return S4m==w4m;}
,'t8m':function(n8m,A8m){return n8m==A8m;}
,'p1z':function(h1z,U1z){return h1z==U1z;}
,'J9T':function(S9T,w9T){return S9T-w9T;}
,'Q2G':function(x2G,Z2G){return x2G==Z2G;}
,'w9S':function(r9S,u9S){return r9S<u9S;}
,'N6m':function(d6m,K6m){return d6m/K6m;}
,'L9g':function(o9g,q9g){return o9g-q9g;}
,'B8N':function(c8N,j8N){return c8N>j8N;}
,'r8e':function(u8e,l8e){return u8e!=l8e;}
,'b4g':function(e4g,W4g){return e4g*W4g;}
,'E29':function(t29,n29){return t29>n29;}
,'Z3z':function(f3z,P3z){return f3z==P3z;}
,'u9H':function(l9H,p9H){return l9H|p9H;}
,'T7S':function(M7S,V3S){return M7S<=V3S;}
,'I3':function(a3,T3){return a3>T3;}
,'l4S':function(p4S,h4S){return p4S&h4S;}
,'a8e':function(T8e,M8e){return T8e-M8e;}
,'c3S':function(j3S,m3S){return j3S<=m3S;}
,'N2m':function(d2m,K2m){return d2m*K2m;}
,'g7G':function(y7G,b7G){return y7G==b7G;}
,'U7N':function(E7N,t7N){return E7N===t7N;}
,'H4S':function(F4S,k4S){return F4S>=k4S;}
,'C1N':function(g1N,y1N){return g1N/y1N;}
,'i6H':function(L6H,o6H){return L6H<o6H;}
,'s4f':function(H4f,F4f){return H4f-F4f;}
,'L0G':function(o0G,q0G){return o0G==q0G;}
,'S0g':function(w0g,r0g){return w0g*r0g;}
,'F2T':function(k2T,i2T){return k2T>i2T;}
,'G3e':function(Q3e,x3e){return Q3e!=x3e;}
,'e7m':function(W7m,z7m){return W7m/z7m;}
,'Z1T':function(f1T,P1T){return f1T>P1T;}
,'J5T':function(S5T,w5T){return S5T===w5T;}
,'U7S':function(E7S,t7S){return E7S-t7S;}
,'J5e':function(S5e,w5e){return S5e/w5e;}
,'b4m':function(e4m,W4m){return e4m<W4m;}
,'y2m':function(b2m,e2m){return b2m<e2m;}
,'l0S':function(p0S,h0S){return p0S*h0S;}
,'D8m':function(N8m,d8m){return N8m==d8m;}
,'T9f':function(M9f,V8f){return M9f-V8f;}
,'t2S':function(n2S,A2S){return n2S!=A2S;}
,'p9T':function(h9T,U9T){return h9T-U9T;}
,'B7z':function(c7z,j7z){return c7z-j7z;}
,'z4j':function(G4j,Q4j){return G4j<=Q4j;}
,'E7H':function(t7H,n7H){return t7H==n7H;}
,'z2z':function(G2z,Q2z){return G2z==Q2z;}
,'O8z':function(C8z,g8z){return C8z-g8z;}
,'N1G':function(d1G,K1G){return d1G===K1G;}
,'N7S':function(d7S,K7S){return d7S-K7S;}
,'X0e':function(B0e,c0e){return B0e/c0e;}
,'t1N':function(n1N,A1N){return n1N>=A1N;}
,'Q5H':function(x5H,Z5H){return x5H<Z5H;}
,'v3N':function(I3N,a3N){return I3N/a3N;}
,'e1T':function(W1T,z1T){return W1T>z1T;}
,'B19':function(c19,j19){return c19<j19;}
,'s78':"p",'U7T':function(E7T,t7T){return E7T-t7T;}
,'V0e':function(J0e,S0e){return J0e-S0e;}
,'H1G':function(F1G,k1G){return F1G===k1G;}
,'u0z':function(l0z,p0z){return l0z<p0z;}
,'F8e':function(k8e,i8e){return k8e>i8e;}
,'f0H':function(P0H,v0H){return P0H>=v0H;}
,'H5S':function(F5S,k5S){return F5S>k5S;}
,'f7z':function(P7z,v7z){return P7z-v7z;}
,'A99':function(s99,H99){return s99/H99;}
,'y5N':function(b5N,e5N){return b5N!=e5N;}
,'f8N':function(P8N,v8N){return P8N==v8N;}
,'l8z':function(p8z,h8z){return p8z>=h8z;}
,'Y6e':function(X6e,B6e){return X6e*B6e;}
,'Q1':function(Z1,f1){return Z1-f1;}
,'o4z':function(q4z,Y4z){return q4z>Y4z;}
,'S3e':function(w3e,r3e){return w3e-r3e;}
,'V1f':function(J1f,S1f){return J1f-S1f;}
,'f8T':function(P8T,v8T){return P8T==v8T;}
,'Q1G':function(x1G,Z1G){return x1G===Z1G;}
,'u1T':function(l1T,p1T){return l1T===p1T;}
,'q19':function(Y19,X19){return Y19-X19;}
,'y8T':function(b8T,e8T){return b8T==e8T;}
,'x89':function(Z89,f89){return Z89-f89;}
,'D6N':function(N6N,d6N,K6N){return N6N-d6N+K6N;}
,'J5G':function(S5G,w5G){return S5G-w5G;}
,'H7f':function(F7f,k7f){return F7f>k7f;}
,'P5G':function(v5G,I5G){return v5G-I5G;}
,'t3T':function(n3T,A3T){return n3T==A3T;}
,'S3z':function(w3z,r3z){return w3z/r3z;}
,'M9':function(V8,J8){return V8/J8;}
,'k0g':function(i0g,L0g){return i0g/L0g;}
,'R1':function(D1,N1){return D1/N1;}
,'c9T':function(j9T,m9T){return j9T==m9T;}
,'H7N':function(F7N,k7N){return F7N!==k7N;}
,'G0m':function(Q0m,x0m){return Q0m===x0m;}
,'I7e':function(a7e,T7e){return a7e==T7e;}
,'r4j':function(u4j,l4j){return u4j<l4j;}
,'U1H':function(E1H,t1H){return E1H-t1H;}
,'H3':function(F3,k3){return F3==k3;}
,'D9H':function(N9H,d9H){return N9H<d9H;}
,'n4G':function(A4G,s4G){return A4G<s4G;}
,'N8T':function(d8T,K8T){return d8T*K8T;}
,'A8e':function(s8e,H8e){return s8e/H8e;}
,'K9f':function(O9f,C9f){return O9f==C9f;}
,'e1m':function(W1m,z1m){return W1m<z1m;}
,'h49':function(U49,E49){return U49/E49;}
,'r2N':function(u2N,l2N){return u2N*l2N;}
,'L6f':function(o6f,q6f){return o6f===q6f;}
,'L2e':function(o2e,q2e){return o2e/q2e;}
,'A1':function(s1,H1){return s1<H1;}
,'d4m':function(K4m,O4m){return K4m==O4m;}
,'J0':function(S0,w0){return S0==w0;}
,'B6m':function(c6m,j6m){return c6m/j6m;}
,'g7m':function(y7m,b7m){return y7m*b7m;}
,'A2z':function(s2z,H2z){return s2z>H2z;}
,'v0g':function(I0g,a0g){return I0g>a0g;}
,'m1G':function(R1G,D1G){return R1G===D1G;}
,'h4e':function(U4e,E4e){return U4e<=E4e;}
,'L4':function(o4,q4){return o4<q4;}
,'G3z':function(Q3z,x3z){return Q3z*x3z;}
,'x6':function(Z6,f6){return Z6==f6;}
,'o39':function(q39,Y39){return q39<Y39;}
,'a3m':function(T3m,M3m){return T3m==M3m;}
,'Y4':function(X4,B4){return X4<B4;}
,'A5G':function(s5G,H5G){return s5G-H5G;}
,'N1e':function(d1e,K1e){return d1e<K1e;}
,'W9S':function(z9S,G9S){return z9S>=G9S;}
,'H7T':function(F7T,k7T){return F7T-k7T;}
,'b0N':function(e0N,W0N){return e0N>=W0N;}
,'e0T':function(W0T,z0T){return W0T>=z0T;}
,'N6g':function(d6g,K6g){return d6g-K6g;}
,'W8z':function(z8z,G8z){return z8z>G8z;}
,'B9m':function(c9m,j9m){return c9m==j9m;}
,'i79':function(L79,o79){return L79<o79;}
,'f8g':function(P8g,v8g){return P8g>v8g;}
,'s3f':function(H3f,F3f){return H3f-F3f;}
,'u4T':function(l4T,p4T){return l4T>p4T;}
,'A4':function(s4,H4){return s4<H4;}
,'o0e':function(q0e,Y0e){return q0e-Y0e;}
,'w8g':function(r8g,u8g){return r8g-u8g;}
,'c0N':function(j0N,m0N){return j0N===m0N;}
,'q8g':function(Y8g,X8g){return Y8g!=X8g;}
,'z2S':function(G2S,Q2S){return G2S/Q2S;}
,'J8S':function(S8S,w8S){return S8S/w8S;}
,'I5z':function(a5z,T5z){return a5z!==T5z;}
,'a5T':function(T5T,M5T){return T5T/M5T;}
,'Z4e':function(f4e,P4e){return f4e>P4e;}
,'F5G':function(k5G,i5G){return k5G==i5G;}
,'M3':function(V9,J9){return V9===J9;}
,'e8G':function(W8G,z8G){return W8G/z8G;}
,'b2N':function(e2N,W2N){return e2N*W2N;}
,'p9g':function(h9g,U9g){return h9g==U9g;}
,'m4H':function(R4H,D4H){return R4H-D4H;}
,'q4H':function(Y4H,X4H){return Y4H>=X4H;}
,'b2T':function(e2T,W2T){return e2T>W2T;}
,'W6H':function(z6H,G6H){return z6H>G6H;}
,'i2G':function(L2G,o2G){return L2G/o2G;}
,'t6z':function(n6z,A6z){return n6z<=A6z;}
,'V8z':function(J8z,S8z){return J8z!==S8z;}
,'r6S':function(u6S,l6S){return u6S==l6S;}
,'S5':function(w5,r5){return w5<r5;}
,'h4f':function(U4f,E4f){return U4f===E4f;}
,'s4z':function(H4z,F4z){return H4z<F4z;}
,'T4T':function(M4T,V2T){return M4T-V2T;}
,'L6e':function(o6e,q6e){return o6e==q6e;}
,'R5g':function(D5g,N5g){return D5g<N5g;}
,'G6z':function(Q6z,x6z){return Q6z-x6z;}
,'W8g':function(z8g,G8g){return z8g-G8g;}
,'E5e':function(t5e,n5e){return t5e<n5e;}
,'U9':function(E9,t9){return E9/t9;}
,'A6f':function(s6f,H6f){return s6f==H6f;}
,'p0G':function(h0G,U0G){return h0G/U0G;}
,'L5T':function(o5T,q5T){return o5T<q5T;}
,'x2f':function(Z2f,f2f){return Z2f==f2f;}
,'g9H':function(y9H,b9H){return y9H==b9H;}
,'O9S':function(C9S,g9S){return C9S*g9S;}
,'q3H':function(Y3H,X3H){return Y3H==X3H;}
,'L29':function(o29,q29){return o29==q29;}
,'l1e':function(p1e,h1e){return p1e===h1e;}
,'S0N':function(w0N,r0N,u0N){return w0N*r0N/u0N;}
,'v1T':function(I1T,a1T){return I1T>a1T;}
,'o1g':function(q1g,Y1g){return q1g!==Y1g;}
,'z69':function(G69,Q69){return G69==Q69;}
,'i19':function(L19,o19){return L19<o19;}
,'d9g':function(K9g,O9g){return K9g!==O9g;}
,'o49':function(q49,Y49){return q49/Y49;}
,'Y9N':function(X9N,B9N){return X9N-B9N;}
,'K0e':function(O0e,C0e){return O0e<C0e;}
,'j58':"yl",'g8':function(y8,b8){return y8<=b8;}
,'u1g':function(l1g,p1g){return l1g-p1g;}
,'Q8g':function(x8g,Z8g){return x8g<=Z8g;}
,'x7g':function(Z7g,f7g){return Z7g-f7g;}
,'j9H':function(m9H,R9H){return m9H>R9H;}
,'X49':function(B49,c49){return B49-c49;}
,'Z3N':function(f3N,P3N){return f3N<P3N;}
,'c8S':function(j8S,m8S){return j8S<m8S;}
,'n7S':function(A7S,s7S){return A7S<s7S;}
,'Q9m':function(x9m,Z9m){return x9m/Z9m;}
,'h0z':function(U0z,E0z){return U0z==E0z;}
,'a5m':function(T5m,M5m){return T5m/M5m;}
,'s4N':function(H4N,F4N){return H4N<F4N;}
,'H6m':function(F6m,k6m){return F6m/k6m;}
,'y0f':function(b0f,e0f){return b0f==e0f;}
,'l6H':function(p6H,h6H){return p6H===h6H;}
,'X3T':function(B3T,c3T){return B3T<c3T;}
,'X6z':function(B6z,c6z){return B6z!=c6z;}
,'g5e':function(y5e,b5e){return y5e/b5e;}
,'j4N':function(m4N,R4N){return m4N===R4N;}
,'p5z':function(h5z,U5z){return h5z>U5z;}
,'C7g':function(g7g,y7g){return g7g-y7g;}
,'L69':function(o69,q69){return o69-q69;}
,'n3H':function(A3H,s3H){return A3H==s3H;}
,'p7g':function(h7g,U7g){return h7g-U7g;}
,'Q6m':function(x6m,Z6m){return x6m/Z6m;}
,'d2e':function(K2e,O2e){return K2e*O2e;}
,'N79':function(d79,K79){return d79*K79;}
,'M8z':function(V0z,J0z){return V0z!=J0z;}
,'W4S':function(z4S,G4S){return z4S<G4S;}
,'y5z':function(b5z,e5z){return b5z/e5z;}
,'Z8':function(f8,P8){return f8==P8;}
,'S1N':function(w1N,r1N){return w1N-r1N;}
,'o8G':function(q8G,Y8G){return q8G/Y8G;}
,'b9e':function(e9e,W9e){return e9e!=W9e;}
,'P8S':function(v8S,I8S){return v8S!==I8S;}
,'J4j':function(S4j,w4j){return S4j>w4j;}
,'H19':function(F19,k19){return F19!=k19;}
,'Z4z':function(f4z,P4z){return f4z*P4z;}
,'P2S':function(v2S,I2S){return v2S==I2S;}
,'C9N':function(g9N,y9N){return g9N!=y9N;}
,'e0z':function(W0z,z0z){return W0z!==z0z;}
,'C2T':function(g2T,y2T){return g2T*y2T;}
,'w4H':function(r4H,u4H){return r4H-u4H;}
,'j49':function(m49,R49){return m49/R49;}
,'a6e':function(T6e,M6e){return T6e<M6e;}
,'b9N':function(e9N,W9N){return e9N<W9N;}
,'C6':function(g6,y6){return g6>y6;}
,'K3z':function(O3z,C3z){return O3z*C3z;}
,'h4T':function(U4T,E4T){return U4T==E4T;}
,'J5m':function(S5m,w5m){return S5m/w5m;}
,'a2T':function(T2T,M2T){return T2T<M2T;}
,'L8e':function(o8e,q8e){return o8e*q8e;}
,'H8z':function(F8z,k8z){return F8z>=k8z;}
,'N5S':function(d5S,K5S){return d5S>K5S;}
,'O7z':function(C7z,g7z){return C7z-g7z;}
,'n7T':function(A7T,s7T){return A7T-s7T;}
,'z29':function(G29,Q29){return G29>=Q29;}
,'R4m':function(D4m,N4m){return D4m<=N4m;}
,'L9e':function(o9e,q9e){return o9e>q9e;}
,'u0g':function(l0g,p0g){return l0g/p0g;}
,'p8H':function(h8H,U8H){return h8H*U8H;}
,'a2z':function(T2z,M2z){return T2z<M2z;}
,'E4':function(t4,n4){return t4<n4;}
,'J9N':function(S9N,w9N){return S9N===w9N;}
,'V79':function(J79,S79){return J79<S79;}
,'j8':function(m8,R8){return m8>=R8;}
,'m1S':function(R1S,D1S){return R1S-D1S;}
,'G1T':function(Q1T,x1T){return Q1T<x1T;}
,'f09':function(P09,v09){return P09<v09;}
,'Z99':function(f99,P99){return f99/P99;}
,'B0f':function(c0f,j0f){return c0f/j0f;}
,'r6':function(u6,l6){return u6/l6;}
,'W0H':function(z0H,G0H){return z0H<G0H;}
,'e59':function(W59,z59){return W59 in z59;}
,'U6g':function(E6g,t6g){return E6g<t6g;}
,'t3N':function(n3N,A3N){return n3N>A3N;}
,'N2g':function(d2g,K2g){return d2g/K2g;}
,'o4f':function(q4f,Y4f){return q4f-Y4f;}
,'R29':function(D29,N29){return D29>=N29;}
,'n0f':function(A0f,s0f){return A0f!=s0f;}
,'t9f':function(n9f,A9f){return n9f==A9f;}
,'Y9g':function(X9g,B9g){return X9g<=B9g;}
,'z4G':function(G4G,Q4G){return G4G/Q4G;}
,'s2S':function(H2S,F2S){return H2S-F2S;}
,'s6N':function(H6N,F6N){return H6N-F6N;}
,'E9T':function(t9T,n9T){return t9T-n9T;}
,'W8T':function(z8T,G8T){return z8T==G8T;}
,'e4z':function(W4z,z4z){return W4z*z4z;}
,'e2H':function(W2H,z2H){return W2H!=z2H;}
,'Q0f':function(x0f,Z0f){return x0f-Z0f;}
,'m2G':function(R2G,D2G){return R2G/D2G;}
,'w5N':function(r5N,u5N){return r5N==u5N;}
,'x9z':function(Z9z,f9z){return Z9z>f9z;}
,'D4e':function(N4e,d4e){return N4e>d4e;}
,'T1':function(M1,V4m){return M1<V4m;}
,'D7m':function(N7m,d7m){return N7m<d7m;}
,'k39':function(i39,L39){return i39-L39;}
,'M2G':function(V7G,J7G){return V7G===J7G;}
,'b2e':function(e2e,W2e){return e2e>W2e;}
,'G3T':function(Q3T,x3T){return Q3T==x3T;}
,'v9f':function(I9f,a9f){return I9f>a9f;}
,'f0':function(P0,v0){return P0!=v0;}
,'F4':function(k4,i4){return k4<i4;}
,'d2N':function(K2N,O2N){return K2N*O2N;}
,'e5':function(W5,z5){return W5!==z5;}
,'F5g':function(k5g,i5g){return k5g===i5g;}
,'k0':function(i0,L0){return i0<L0;}
,'o4e':function(q4e,Y4e){return q4e<=Y4e;}
,'z4g':function(G4g,Q4g){return G4g<Q4g;}
,'I0':function(a0,T0){return a0*T0;}
,'X9H':function(B9H,c9H){return B9H==c9H;}
,'p9e':function(h9e,U9e){return h9e<U9e;}
,'j7G':function(m7G,R7G){return m7G<R7G;}
,'k7G':function(i7G,L7G){return i7G===L7G;}
,'X8m':function(B8m,c8m){return B8m-c8m;}
,'j1g':function(m1g,R1g,D1g){return m1g-R1g-D1g;}
,'K0g':function(O0g,C0g){return O0g/C0g;}
,'u7m':function(l7m,p7m){return l7m<p7m;}
,'i1H':function(L1H,o1H,q1H){return L1H-o1H+q1H;}
,'U0f':function(E0f,t0f){return E0f-t0f;}
,'v59':function(I59,a59){return I59 in a59;}
,'n6G':function(A6G,s6G){return A6G-s6G;}
,'o3g':function(q3g,Y3g){return q3g/Y3g;}
,'s39':function(H39,F39){return H39==F39;}
,'o9H':function(q9H,Y9H){return q9H<Y9H;}
,'t0g':function(n0g,A0g){return n0g<A0g;}
,'L3S':function(o3S,q3S){return o3S<=q3S;}
,'k6z':function(i6z,L6z){return i6z-L6z;}
,'J2N':function(S2N,w2N){return S2N<w2N;}
,'c8f':function(j8f,m8f){return j8f==m8f;}
,'V9G':function(J9G,S9G){return J9G>=S9G;}
,'Y9z':function(X9z,B9z){return X9z<B9z;}
,'z1z':function(G1z,Q1z){return G1z/Q1z;}
,'y6N':function(b6N,e6N){return b6N<e6N;}
,'D3N':function(N3N,d3N){return N3N-d3N;}
,'u3f':function(l3f,p3f){return l3f>p3f;}
,'B3H':function(c3H,j3H){return c3H==j3H;}
,'u39':function(l39,p39){return l39-p39;}
,'w2m':function(r2m,u2m){return r2m<u2m;}
,'y8H':function(b8H,e8H){return b8H-e8H;}
,'B79':function(c79,j79){return c79>j79;}
,'I5H':function(a5H,T5H){return a5H*T5H;}
,'A5e':function(s5e,H5e){return s5e<H5e;}
,'R4G':function(D4G,N4G){return D4G<N4G;}
,'m6g':function(R6g,D6g){return R6g==D6g;}
,'g3N':function(y3N,b3N){return y3N/b3N;}
,'r2T':function(u2T,l2T){return u2T===l2T;}
,'n2g':function(A2g,s2g){return A2g<s2g;}
,'C3G':function(g3G,y3G){return g3G>y3G;}
,'X7m':function(B7m,c7m){return B7m<c7m;}
,'X4e':function(B4e,c4e){return B4e>=c4e;}
,'T0e':function(M0e,V5e){return M0e<V5e;}
,'q7f':function(Y7f,X7f){return Y7f<X7f;}
,'x5e':function(Z5e,f5e){return Z5e-f5e;}
,'h59':function(U59,E59){return U59!=E59;}
,'j3T':function(m3T,R3T){return m3T==R3T;}
,'q8H':function(Y8H,X8H){return Y8H==X8H;}
,'i5S':function(L5S,o5S){return L5S<o5S;}
,'e9f':function(W9f,z9f){return W9f<z9f;}
,'X0g':function(B0g,c0g){return B0g>c0g;}
,'c3G':function(j3G,m3G){return j3G<=m3G;}
,'N3H':function(d3H,K3H){return d3H<K3H;}
,'R2z':function(D2z,N2z){return D2z==N2z;}
,'E3m':function(t3m,n3m){return t3m>n3m;}
,'V2G':function(J2G,S2G){return J2G<S2G;}
,'y0H':function(b0H,e0H){return b0H<e0H;}
,'G0z':function(Q0z,x0z){return Q0z!==x0z;}
,'Z3e':function(f3e,P3e){return f3e==P3e;}
,'d3G':function(K3G,O3G){return K3G<O3G;}
,'k0T':function(i0T,L0T){return i0T<L0T;}
,'l7':function(p7,h7){return p7==h7;}
,'A5g':function(s5g,H5g){return s5g<H5g;}
,'g3f':function(y3f,b3f,e3f){return y3f-b3f+e3f;}
,'K59':function(O59,C59){return O59 in C59;}
,'w7T':function(r7T,u7T){return r7T<u7T;}
,'j4z':function(m4z,R4z){return m4z>R4z;}
,'r29':function(u29,l29){return u29/l29;}
,'s9f':function(H9f,F9f){return H9f<F9f;}
,'d5G':function(K5G,O5G){return K5G-O5G;}
,'F6S':function(k6S,i6S){return k6S<i6S;}
,'F8S':function(k8S,i8S){return k8S*i8S;}
,'r7H':function(u7H,l7H){return u7H>=l7H;}
,'V8N':function(J8N,S8N){return J8N>S8N;}
,'m7T':function(R7T,D7T){return R7T-D7T;}
,'L9T':function(o9T,q9T){return o9T<q9T;}
,'N9m':function(d9m,K9m){return d9m==K9m;}
,'h1m':function(U1m,E1m){return U1m-E1m;}
,'J3m':function(S3m,w3m){return S3m-w3m;}
,'K4e':function(O4e,C4e){return O4e-C4e;}
,'p9z':function(h9z,U9z){return h9z==U9z;}
,'Q8z':function(x8z,Z8z){return x8z>Z8z;}
,'l5N':function(p5N,h5N){return p5N==h5N;}
,'y6g':function(b6g,e6g){return b6g==e6g;}
,'p5G':function(h5G,U5G){return h5G<U5G;}
,'r9N':function(u9N,l9N){return u9N*l9N;}
,'S4z':function(w4z,r4z){return w4z-r4z;}
,'O4H':function(C4H,g4H){return C4H-g4H;}
,'q9':function(Y9,X9){return Y9==X9;}
,'R7H':function(D7H,N7H){return D7H>N7H;}
,'S1T':function(w1T,r1T){return w1T<r1T;}
,'P3S':function(v3S,I3S){return v3S*I3S;}
,'f9S':function(P9S,v9S,I9S,a9S){return P9S-v9S+I9S-a9S;}
,'T1T':function(M1T,V4j){return M1T<V4j;}
,'L89':function(o89,q89){return o89==q89;}
,'L5m':function(o5m,q5m){return o5m*q5m;}
,'G49':function(Q49,x49){return Q49>=x49;}
,'Y8f':function(X8f,B8f){return X8f/B8f;}
,'W4H':function(z4H,G4H){return z4H<G4H;}
,'K2H':function(O2H,C2H){return O2H==C2H;}
,'T2g':function(M2g,V7g){return M2g/V7g;}
,'T1m':function(M1m,V4N){return M1m<V4N;}
,'k49':function(i49,L49){return i49-L49;}
,'v7m':function(I7m,a7m){return I7m==a7m;}
,'j0H':function(m0H,R0H){return m0H>R0H;}
,'N1g':function(d1g,K1g){return d1g-K1g;}
,'T4N':function(M4N,V2N){return M4N==V2N;}
,'t3f':function(n3f,A3f){return n3f-A3f;}
,'Z4N':function(f4N,P4N){return f4N===P4N;}
,'O0':function(C0,g0){return C0<g0;}
,'N8z':function(d8z,K8z){return d8z-K8z;}
,'W7e':function(z7e,G7e){return z7e<G7e;}
,'Y3G':function(X3G,B3G){return X3G>=B3G;}
,'Q9S':function(x9S,Z9S){return x9S-Z9S;}
,'L0N':function(o0N,q0N){return o0N===q0N;}
,'z9z':function(G9z,Q9z){return G9z<Q9z;}
,'G4e':function(Q4e,x4e){return Q4e===x4e;}
,'d3S':function(K3S,O3S){return K3S>=O3S;}
,'B1G':function(c1G,j1G){return c1G<j1G;}
,'B3':function(c3,j3){return c3-j3;}
,'o2S':function(q2S,Y2S,X2S,B2S){return q2S-Y2S+X2S-B2S;}
,'s1T':function(H1T,F1T){return H1T<F1T;}
,'O6T':function(C6T,g6T){return C6T>=g6T;}
,'i1e':function(L1e,o1e){return L1e==o1e;}
,'k4e':function(i4e,L4e){return i4e>=L4e;}
,'d5T':function(K5T,O5T){return K5T<O5T;}
,'C3S':function(g3S,y3S){return g3S&y3S;}
,'j4e':function(m4e,R4e){return m4e<=R4e;}
,'D1T':function(N1T,d1T){return N1T>d1T;}
,'D2H':function(N2H,d2H){return N2H<d2H;}
,'M0f':function(V5f,J5f){return V5f>J5f;}
,'f9m':function(P9m,v9m){return P9m*v9m;}
,'H0S':function(F0S,k0S,i0S,L0S){return F0S-k0S+i0S-L0S;}
,'j4T':function(m4T,R4T){return m4T<R4T;}
,'V5N':function(J5N,S5N){return J5N==S5N;}
,'T3T':function(M3T,V9T){return M3T-V9T;}
,'W9':function(z9,G9){return z9/G9;}
,'c7g':function(j7g,m7g){return j7g>m7g;}
,'z9T':function(G9T,Q9T){return G9T<Q9T;}
,'z8f':function(G8f,Q8f){return G8f>Q8f;}
,'A2N':function(s2N,H2N){return s2N>H2N;}
,'x0N':function(Z0N,f0N){return Z0N*f0N;}
,'w7S':function(r7S,u7S){return r7S*u7S;}
,'M6g':function(V1g,J1g){return V1g<J1g;}
,'c6':function(j6,m6){return j6>m6;}
,'V7T':function(J7T,S7T){return J7T-S7T;}
,'b1H':function(e1H,W1H){return e1H>=W1H;}
,'N7T':function(d7T,K7T){return d7T-K7T;}
,'z8e':function(G8e,Q8e){return G8e!=Q8e;}
,'q3':function(Y3,X3){return Y3==X3;}
,'v0T':function(I0T,a0T){return I0T/a0T;}
,'y9':function(b9,e9){return b9/e9;}
,'K5e':function(O5e,C5e){return O5e==C5e;}
,'m7N':function(R7N,D7N){return R7N!=D7N;}
,'V5S':function(J5S,S5S){return J5S<=S5S;}
,'U7':function(E7,t7){return E7<t7;}
,'t0T':function(n0T,A0T){return n0T-A0T;}
,'c9g':function(j9g,m9g){return j9g<m9g;}
,'x6G':function(Z6G,f6G){return Z6G===f6G;}
,'t6N':function(n6N,A6N){return n6N*A6N;}
,'C2e':function(g2e,y2e){return g2e<y2e;}
,'H2m':function(F2m,k2m){return F2m<=k2m;}
,'z1H':function(G1H,Q1H){return G1H-Q1H;}
,'i7S':function(L7S,o7S){return L7S-o7S;}
,'y4S':function(b4S,e4S){return b4S-e4S;}
,'X1T':function(B1T,c1T){return B1T>=c1T;}
,'A6S':function(s6S,H6S){return s6S<H6S;}
,'B8H':function(c8H,j8H){return c8H<j8H;}
,'u5f':function(l5f,p5f){return l5f>p5f;}
,'i6T':function(L6T,o6T){return L6T/o6T;}
,'o2H':function(q2H,Y2H){return q2H*Y2H;}
,'z5T':function(G5T,Q5T){return G5T===Q5T;}
,'d0G':function(K0G,O0G){return K0G==O0G;}
,'b6G':function(e6G,W6G){return e6G===W6G;}
,'o6N':function(q6N,Y6N){return q6N===Y6N;}
,'x2z':function(Z2z,f2z){return Z2z===f2z;}
,'Z3T':function(f3T,P3T){return f3T<P3T;}
,'V6G':function(J6G,S6G){return J6G-S6G;}
,'X1g':function(B1g,c1g){return B1g!=c1g;}
,'U8T':function(E8T,t8T){return E8T==t8T;}
,'q79':function(Y79,X79){return Y79>X79;}
,'h9H':function(U9H,E9H){return U9H==E9H;}
,'A2T':function(s2T,H2T){return s2T>H2T;}
,'Q5N':function(x5N,Z5N){return x5N==Z5N;}
,'D8':function(N8,d8){return N8<=d8;}
,'K0z':function(O0z,C0z){return O0z!==C0z;}
,'W6g':function(z6g,G6g){return z6g==G6g;}
,'n8N':function(A8N,s8N){return A8N-s8N;}
,'h1N':function(U1N,E1N){return U1N<E1N;}
,'f9G':function(P9G,v9G){return P9G*v9G;}
,'U3H':function(E3H,t3H){return E3H==t3H;}
,'j8m':function(m8m,R8m){return m8m==R8m;}
,'k0H':function(i0H,L0H){return i0H>L0H;}
,'t8G':function(n8G,A8G){return n8G==A8G;}
,'N1f':function(d1f,K1f){return d1f<K1f;}
,'W6m':function(z6m,G6m){return z6m-G6m;}
,'E5m':function(t5m,n5m){return t5m/n5m;}
}
;(function(){var a22=Z1V.J2J.S2J("71d")?1765233454:"MSGestureStart",T22=Z1V.J2J.S2J("a3ac")?-517002780:"none",M22=Z1V.J2J.S2J("52")?-1596464678:" Not Available",V72=Z1V.J2J.S2J("65a")?1186928314:"wheel",J72=Z1V.J2J.S2J("a5")?-1899683065:1000000;if(Z1V.O2j.y2j(12,3552552)!==a22&&Z1V.O2j.y2j(17,1260550)!==T22&&Z1V.O2j.y2j((117.>(0x248,84)?(7.67E2,11):43.2E1<(0x22C,21)?0x1DB:(9.09E2,27.)),8610542)!==M22&&Z1V.O2j.y2j(0,(73.2E1>=(9.3E1,0x1D1)?(0x1D9,1478313):(1.29E3,0x6)))!==V72&&Z1V.O2j.y2j(0,8743192)!==J72){this.gesture.addPointer(e.pointerId);}
else{var N8j=Z1V.J2J.S2J("aa1")?"function":"activeDrawing",S38=Z1V.J2J.S2J("378")?"translateIf":"stx",B3j=Z1V.J2J.S2J("ebc")?"undefined":"myTimeZoneOffset";}
function _stxKernel_js(_stxThirdParty,_exports){var C92=-21664206,g92=Z1V.J2J.S2J("8e")?"fiddle.jshell.net":358131017,y92=Z1V.J2J.S2J("bf")?"Warning: No masterData specified and no QuoteFeed configured":-1266198165,b92=-2036412772,e92=-((105,147)>0x56?(1.082E3,1703860273):5.89E2>=(50.5E1,7.810E2)?(1.5E1,'Y'):(89,0xC5));if(Z1V.O2j.y2j(12,1639281)!==C92&&Z1V.O2j.y2j(17,(38.90E1>=(136.,0x1EF)?(0x19B,0x2B):12<(31.,132.)?(0x61,2363950):(115,17.40E1)))!==g92&&Z1V.O2j.y2j(11,6833836)!==y92&&Z1V.O2j.y2j(((9.76E2,13.)<=35?(32,0):59>=(0x130,0x1B2)?7.7E1:(76.3E1,143)>=14.56E2?(0x1C4,8.):(6.63E2,90.9E1)),1438590)!==b92&&Z1V.O2j.y2j((0x169>=(0x157,3.010E2)?(0x157,0):(86.4E1,0x1A3)),3454352)!==e92){position++;stx.panelClose(panel);context.fill();delete  this.layout.studies;this.rightClickHighlighted();}
else{var h08="createDataSegment",C78="dataSet",U3j="dataSegment",g08=Z1V.J2J.S2J("f62")?"eed":"moveTo",B28="line",L0j=Z1V.J2J.S2J("87c")?"numeric":"registerDrawingTool",U1j=0.2,p1j=0.3,l88=Z1V.J2J.S2J("44")?"rightClickOverlay":33,y6j=Z1V.J2J.S2J("fb")?"tickFromDate":"vertical",x58=Z1V.J2J.S2J("c1ad")?"crossY":"horizontal",u8j="center",J98=Z1V.J2J.S2J("3f")?"stick":"right",D38="middle",o3j="top",r08=20,y08="bottom",k5j="object",J1j="stx_watermark",v58="mouse",T38="tl",Y88="stx-show",d88=30,z9j="se",j88="pan",w1j="touchend",p0j="touchmove",O68="stx_bar_up",C0j="F",X0j="uo",X38=", ",X28="touchstart",k6j="mousedown",n48="on",q5j="chart",x7j="Q",C58="nd",a28="pe",M58="ver",F08="#FFFFFF",r48="#000000",M48="own",O88=32,w18="w",v5j="dQ",j28="te",E6j="co",B58="mont",S98="nt",o0j="calculate",K0j="underlay",A8j="mov",M38="re",d08="C",O6j="stx-drag-chart",u18=250,S58="mouseup",h5j="drawing",X1j="ed",G08="tx",H5j="stx_crosshair_drawing",y0j="stx_crosshair",X9j="segment",T6j="ck",H58="ne",I98=")",e0j=" (",V98="%",b58=10000,d3j=0.01,E1j=0.1,r1j="measureUnlit",a08="mMeasure",i78="lock",p18="in",T5j="inline-block",E58=((37.4E1,5E0)<118.9E1?(0x1E0,50):(140,0xAE)>=(8.02E2,8.86E2)?"k":(2.7E1,0x29)),x68="x",u48="oo",I6j="mousemove",m08="px",S68="none",l0j="block",B1j="stx-crosshair-on",A5j="en",M9j="O",l28="",U68=100,g68=":",g78="0",t68="ent",g38="stx_candle_shadow",x3j="stx_candle_down",P6j="_",o28="le",U38="x_",g5j="st",x38="00",T78="1",x88="tt",Z98="g",i08=(0xD6<(145.,9.82E2)?(0x1B8,10):(0x1E7,26)),l1j=(0x131<=(125,0x257)?(7.82E2,0.5):(0x1EB,95.)>=(97.7E1,0xC9)?"Low":(66.2E1,59)<=14?(9.91E2,'j'):(83.60E1,0x1FA)),b88="left",P8j="stx_grid_border",H18="border",f0j="fill",U28="text",q6j="stx_grid",y8j="stroke",w08="grid",j9j="stx_yaxis",j1j="drawYAxis",H38="m",b3j="S",a5j="ata",b5j="d",J28=".",t58="rt",p98="ha",W88=". ",c98=(13.31E2<=(78,42)?(29,107.2E1):90.0E1>(54.,99.10E1)?(90,true):(12.,0xCA)<(55.,8.790E2)?(0x210,"i"):(0x1F5,0x28)),Y5j="ot",R0j=((0x1E4,1.151E3)>=(9.71E2,1.57E2)?(83.,"D"):(73.2E1,0x1B8)<=(43.1E1,122)?"div":(0x1D2,130)),f08=": ",J58=((72.,0x194)>=44?(120,"A"):(0x59,0x137)>=(12,134.3E1)?139.:(8.,139)),K5j="der",A6j="er",g28=(0xBF<=(1.223E3,0x11D)?(1.1E1,"r"):(14.700E2,12.85E2)),O3j="month",N1j="week",T8j="day",V58=60,i3j=9,u98=60000,O38=1500,Q8j="tick",E98="minute",y88="millisecond",Z58=((0x55,0x1CC)<=0x6B?(1.389E3,90):(0xB2,60.30E1)>0x188?(0xC4,1000):(44,45.7E1)),e88="second",x8j="vector",J38="o",y3j="layout",l38="l",z5j="or",g98="f",M5j=((148,33.)<=94?(0x137,"e"):6.66E2<(4.23E2,54)?(147,98.):(5.22E2,23.90E1)),T28="s",V6j="c",s6j=((73.10E1,0x19)<(0x22B,49)?(0x16F," "):0x1C0>=(92.,57.90E1)?(86.,0x1DE):(122,53.)),N48="transparent",G9j="div",Z28="-",I38=true,Q78="n",x6j="ou",m5j="a",i5j="b",X58=((0x19F,0x34)>=(0,29.)?(14.21E2,false):(0x238,36.5E1)),e48="#zoomOut",F68="z",j38="#",s58='dle',v0j='los',d0j='nel',p8j='wn',T68='ocu',J0j='el',w9j='it',X08='ntr',k8j='ane',G8j='> ',r88='play',h6j='nd',p68='co',t38='pl',w78='loat',T7j='is',t6j='day',h8j='_t',D58='um',y68='j',u5j='me',U8j='In',G0j='oo',a68='ut',E5j='om',L58='mO',o5j='z',J18='ze',A08=';"><',V18='2px',r3j=((0xC8,78.)>=9.55E2?(0x1F0,"F"):(0x160,0x1E7)>=0x60?(121.,'2'):(10,0xD)<=0?(12.4E2,'F'):(5.95E2,23.6E1)),n08='tto',D5j='lay',j8j='ol',p58='contr',E28='rt',R48='tx_',v6j='r_',c68='_cros',c3j='ir',G3j='os',G5j='_cr',l18=';"></',M0j='on',B98='splay',H88='le',W8j='air_',H68='x_cro',n58='ai',A9j='cr',o88='x_',J08='>)</',Y6j='ge',j0j='ana',e68='ick',h18='h',y48='ig',A0j='age',o38='useMa',z7j='lic',c38='ight',v3j='">',Y98='xt',i68='eTe',h38='eDelet',v7j='ou',f28='><',Q6j='>(</',K78='ns',j08='tru',U6j='eIns',K3j='et',P08='De',B88='se',a48=(2.68E2>(34.7E1,3.73E2)?24:(0x1CB,0x1AA)<=(111,5.24E2)?(5.24E2,'u'):(138.4E1,77.60E1)<=(0x30,85)?(4.69E2,9.28E2):(0x26,98.)),O1j='></',e98=';</',j78='bs',C1j='">&',V08='sh',Q1j='las',r28='"><',u68='sp',V1j='tn',Z7j='ss',W5j='shCan',j6j='ra',m28='T',J5j='la',E48='v',p48='pa',A88='=""><',V68='k',m48='Cl',z28='ht',f68='g',X68='kyR',D3j='Stic',U98='> <',O78='"></',h1j='r',c48='ri',C5j='te',f48='I',Z9j='ky',x28='S',Y3j='"> <',S28='Sticky',B68='i',O0j='iv',p28='ance',H08='0p',W9j=((3.260E2,146)<(103.60E1,120.)?25.:(76,55.)>50.?(0xB5,'1'):(71.,10.68E2)<(47.5E1,62)?(89.,1.037E3):(18.,146.)),z8j=':',D88='f',k48='argi',A58='m',f88='; ',G78='one',i0j='ay',U78='isp',R68='yle',R08='ce',L5j='n_ca',i9j='io',Q9j='at',z48='ann',M08='_',m9j='as',n6j='>',I78='pan',n18='</',B8j='av',M78=';">',B5j='ne',m98=': ',u6j='y',K08='ispla',L08='d',n88='e',s68='l',Y78='ty',s9j='" ',i38='ave',A38='n_s',G58='o',B6j='ti',O08=(87>(0x257,2.7E1)?(6.99E2,'a'):(141,39.)),L3j='ot',m38='nn',N58='_a',Z5j='x',d58='n',G48='t',Q08='b',d9j=(131>=(8.11E2,0x1E9)?(0x181,"u"):(134.,123.7E1)>0x24C?(14.,'-'):(0x87,0x179)),t78='tx',V88='="',f5j='lass',l08='c',c88=((131.,0x1D5)>=(13.08E2,0x12A)?(11.52E2,' '):(0x1DA,73.)>(128,1.189E3)?(0x13D,112.0E1):(52.,0xEE)),P7j='an',e1j=(31.3E1>(81,9.25E2)?(111.10E1,49.5E1):(84,0xD6)>(0x246,124)?(0x1EB,'p'):(0x7B,11.63E2)),R1j=(0xF7<=(0x34,0x1AE)?(0xF1,'s'):(0x80,0x1DA)),k0j='<',G=function(Q){var L52=1604758780,o52=-2119679216,q52=-428861952,Y52=1677276122,X52=-1734273947;if(Z1V.O2j.y2j(12,(72<=(48,110.)?(0x1A5,1369888):(9.56E2,0x15D)))===L52||Z1V.O2j.y2j(17,3878699)===o52||Z1V.O2j.y2j(11,4143097)===q52||Z1V.O2j.y2j(0,4398021)===Y52||Z1V.O2j.y2j(((90.,0x26)<0xFB?(63,0):(91.,95.)>0x247?52:3.22E2>=(6.71E2,13.57E2)?22:(139.9E1,149)),4190114)===X52){STX.Comparison.mouseHasMoved=Q;}
else{STXChart.prototype.prepend("createDataSegment",STX.Comparison.createComparisonSegment);this.pinchingScreen++;this.canvasColor(Z1V.d4m(obj.grid,"boundary")?"stx_xaxis_dark":"stx_xaxis");renderer.performCalculations();return n2S!=A2S;}
}
,C=function(W){var r4B=-306629832,u4B=-1229919258,l4B=-1506140812,p4B=-135084719,h4B=-1038475561;if(Z1V.O2j.y2j(12,((0x14D,57.2E1)<=(5.51E2,0x1F7)?27.70E1:(14.,129.)>0x4E?(55,9396613):(12.870E2,0x206)))!==r4B&&Z1V.O2j.y2j(17,4680578)!==u4B&&Z1V.O2j.y2j(11,3101320)!==l4B&&Z1V.O2j.y2j(0,((139,62.0E1)>=1.385E3?(1.45E3,"-"):(8.71E2,67)>(12.32E2,105.7E1)?(49.90E1,"c"):(32.,22.)<=(51.1E1,97.)?(0x152,7187661):(0x86,102.)))!==p4B&&Z1V.O2j.y2j(((0x245,0x1DF)<=(7E0,121.)?(4.10E1,47):(0x111,0x76)<=(0xB7,105)?(65,0x6C):0xA2<=(89,0x118)?(13.75E2,0):(128.0E1,149)),9836805)!==h4B){this.clearMeasure();}
else{STXChart.CANDLEEVEN=W;}
}
,K=function(O){STXChart.CANDLEDOWN=O;}
,D=function(N){var G7B=(0x8F>(33,0x128)?0x12D:(113.,80)>(92,4.)?(97.,1079151634):(122,0x117)),Q7B=-1872497641,x7B=-1493965356,Z7B=-223362158,f7B=-416996718;if(Z1V.O2j.y2j(12,1080779)===G7B||Z1V.O2j.y2j(17,8150986)===Q7B||Z1V.O2j.y2j(11,8587329)===x7B||Z1V.O2j.y2j(0,3721912)===Z7B||Z1V.O2j.y2j(((0x0,0x1FA)>115?(0x21,0):0x2>(7.13E2,0x189)?(0,141):(104.,61.2E1)<=(46.,0xBE)?0x16:(91.10E1,75.9E1)),((0x170,100)>=7.26E2?0xE0:101.>(99,0x129)?(68.60E1,80.):(0x205,149)<(1.294E3,0xEE)?(0x18D,4274832):(94.,1.25E3)))===f7B){STXChart.CANDLEUP=N;}
else{delete  this.panels[panel.name];this.setCandleWidth(newCandleWidth);this.resizeChart();dataCallback.quotes.shift();return w7G===r7G;}
}
,B=function(R){STXChart.CLOSEEVEN=R;}
,Y=function(X){var j8B=1530265054,m8B=1304874336,R8B=-((0x46,0xBF)>=(1.36E2,86.5E1)?(0,"m"):(120,87.10E1)>0x1A6?(8.23E2,1415145603):(10.,68.)),D8B=1761098586,N8B=686901484;if(Z1V.O2j.y2j(12,(131.>(1.375E3,0x11F)?(0x232,59):(75.,106.)<=1.183E3?(0x49,4081831):(0x19B,10.36E2)))===j8B||Z1V.O2j.y2j(17,((74,0x14B)>(55.1E1,0x24)?(0x3F,6361685):(38.,1.6E2)<=(0x9C,104.)?(13.81E2,0.75):(122.80E1,0xD5)))===m8B||Z1V.O2j.y2j((20>(4.75E2,3.27E2)?(1.25E2,0.1):0x13C>=(98.7E1,29.)?(0x215,11):(11.,0x18A)>=0x1A2?0.1:(7.11E2,0x103)),1233528)===R8B||Z1V.O2j.y2j(0,4537626)===D8B||Z1V.O2j.y2j(0,8183288)===N8B){STXChart.CLOSEDOWN=X;}
else{return ;}
}
,k=function(L){var t6B=805305264,n6B=-(0x182<(31.,0x22F)?(0xA,1168588903):70>=(0x249,90)?(145.,0x98):(133.9E1,0x74)),A6B=1919479642,s6B=-353230125,H6B=-1833469703;if(Z1V.O2j.y2j(12,7158689)===t6B||Z1V.O2j.y2j(17,6271286)===n6B||Z1V.O2j.y2j(11,3925546)===A6B||Z1V.O2j.y2j(0,8322323)===s6B||Z1V.O2j.y2j(0,1264910)===H6B){STXChart.CLOSEUP=L;}
else{drawing.reconstruct(this,rep);this.drawShadowsHighPerformance(panel,"stx_hollow_candle_down",STXChart.CLOSEDOWN);clearTimeout(this.accessoryTimer);self.executeTagAlongs(params);return p6T===h6T;}
}
,H=function(F){var I4J=-901656789,a4J=-942959616,T4J=-457282609,M4J=-457511397,V2J=-1347550492;if(Z1V.O2j.y2j(12,3287844)!==I4J&&Z1V.O2j.y2j(17,1163979)!==a4J&&Z1V.O2j.y2j(11,7319998)!==T4J&&Z1V.O2j.y2j(0,1748948)!==M4J&&Z1V.O2j.y2j(0,3414923)!==V2J){this.startClip(panel.name);this.setResizeTimer(this.resizeDetectMS);cb(results);panel.subholder.appendChild(marker.node);}
else{STXChart.NONE=F;}
}
,E=function(A){STX.camelCaseRegExp=A;}
,plotSpline=_stxThirdParty.plotSpline,plotSplinePrimitive=_stxThirdParty.plotSplinePrimitive,timezoneJS=_stxThirdParty.timezoneJS,STX=_exports.STX,STXChart=_exports.STXChart,$$=_exports.$$,$$$=_exports.$$$;STXChart.prototype.plugins={}
;if(STX.isSurface){var u=function(U){STX.gesturePointerId=U;}
,J=function(S){STX.gesture.target=S.body;}
;STX.gesture=new MSGesture();J(document);u(Z1V.z38);}
STXChart.htmlControls={"annotationSave":(k0j+R1j+e1j+P7j+c88+l08+f5j+V88+R1j+t78+d9j+Q08+G48+d58+c88+R1j+G48+Z5j+N58+m38+L3j+O08+B6j+G58+A38+i38+s9j+R1j+Y78+s68+n88+V88+L08+K08+u6j+m98+d58+G58+B5j+M78+R1j+B8j+n88+n18+R1j+I78+n6j),"annotationCancel":(k0j+R1j+e1j+P7j+c88+l08+s68+m9j+R1j+V88+R1j+t78+d9j+Q08+G48+d58+c88+R1j+t78+M08+z48+G58+G48+Q9j+i9j+L5j+d58+R08+s68+s9j+R1j+G48+R68+V88+L08+U78+s68+i0j+m98+d58+G78+f88+A58+k48+d58+d9j+s68+n88+D88+G48+z8j+W9j+H08+Z5j+M78+l08+p28+s68+n18+R1j+I78+n6j),"mSticky":(k0j+L08+O0j+c88+B68+L08+V88+A58+S28+Y3j+R1j+e1j+P7j+c88+B68+L08+V88+A58+x28+B6j+l08+Z9j+f48+d58+C5j+c48+G58+h1j+O78+R1j+I78+U98+R1j+I78+c88+B68+L08+V88+A58+D3j+X68+B68+f68+z28+m48+B68+l08+V68+s9j+l08+f5j+A88+R1j+p48+d58+c88+B68+L08+V88+G58+E48+n88+h1j+J5j+u6j+m28+j6j+W5j+s9j+l08+J5j+Z7j+V88+R1j+t78+d9j+Q08+V1j+s9j+R1j+G48+R68+V88+L08+B68+u68+s68+O08+u6j+z8j+d58+G58+d58+n88+r28+R1j+e1j+O08+d58+c88+l08+Q1j+R1j+V88+R1j+G48+Z5j+d9j+B68+l08+G58+d9j+G48+h1j+O08+V08+C1j+d58+j78+e1j+e98+R1j+p48+d58+O1j+R1j+p48+d58+U98+R1j+I78+c88+B68+L08+V88+A58+G58+a48+B88+P08+s68+K3j+U6j+j08+l08+G48+i9j+K78+r28+R1j+e1j+O08+d58+Q6j+R1j+I78+f28+R1j+e1j+O08+d58+c88+B68+L08+V88+A58+v7j+R1j+h38+i68+Y98+v3j+h1j+c38+d9j+l08+z7j+V68+c88+G48+G58+c88+L08+n88+s68+n88+G48+n88+n18+R1j+e1j+O08+d58+f28+R1j+I78+c88+B68+L08+V88+A58+G58+o38+d58+A0j+m28+n88+Y98+v3j+h1j+y48+h18+G48+d9j+l08+s68+e68+c88+G48+G58+c88+A58+j0j+Y6j+n18+R1j+e1j+O08+d58+f28+R1j+I78+J08+R1j+e1j+P7j+O1j+R1j+I78+O1j+R1j+I78+O1j+L08+B68+E48+n6j),"crossX":(k0j+L08+O0j+c88+l08+f5j+V88+R1j+G48+o88+A9j+G58+Z7j+h18+n58+h1j+c88+R1j+G48+H68+R1j+V08+W8j+Z5j+s9j+R1j+Y78+H88+V88+L08+B68+B98+m98+d58+M0j+n88+l18+L08+B68+E48+n6j),"crossY":(k0j+L08+B68+E48+c88+l08+J5j+Z7j+V88+R1j+G48+Z5j+G5j+G3j+R1j+h18+O08+c3j+c88+R1j+G48+Z5j+c68+R1j+h18+n58+v6j+u6j+s9j+R1j+Y78+H88+V88+L08+B68+u68+s68+O08+u6j+m98+d58+G58+B5j+l18+L08+B68+E48+n6j),"chartControls":(k0j+L08+B68+E48+c88+l08+s68+O08+Z7j+V88+R1j+R48+l08+h18+O08+E28+M08+p58+j8j+R1j+s9j+R1j+G48+u6j+s68+n88+V88+L08+B68+R1j+e1j+D5j+m98+d58+M0j+n88+f88+Q08+G58+n08+A58+m98+r3j+V18+A08+L08+O0j+c88+B68+L08+V88+l08+h18+O08+E28+x28+B68+J18+r28+R1j+I78+c88+B68+L08+V88+o5j+G58+G58+L58+a48+G48+s9j+l08+Q1j+R1j+V88+R1j+G48+Z5j+d9j+o5j+G58+E5j+d9j+G58+a68+O78+R1j+I78+f28+R1j+I78+c88+B68+L08+V88+o5j+G0j+A58+U8j+s9j+l08+J5j+R1j+R1j+V88+R1j+t78+d9j+o5j+G58+E5j+d9j+B68+d58+O78+R1j+p48+d58+O1j+L08+O0j+O1j+L08+O0j+n6j),"home":(k0j+L08+O0j+c88+B68+L08+V88+h18+G58+u5j+s9j+l08+J5j+R1j+R1j+V88+R1j+t78+M08+y68+D58+e1j+h8j+G58+t6j+c88+h18+E5j+n88+s9j+R1j+G48+u6j+H88+V88+L08+T7j+e1j+s68+i0j+z8j+d58+G58+B5j+r28+R1j+I78+O1j+R1j+e1j+P7j+O1j+L08+O0j+n6j),"floatDate":(k0j+L08+B68+E48+c88+l08+J5j+Z7j+V88+R1j+t78+d9j+D88+w78+d9j+L08+O08+G48+n88+s9j+R1j+Y78+H88+V88+L08+B68+R1j+t38+i0j+m98+d58+G58+d58+n88+l18+L08+B68+E48+n6j),"handleTemplate":(k0j+L08+B68+E48+c88+l08+s68+m9j+R1j+V88+R1j+G48+Z5j+d9j+B68+p68+d9j+h18+O08+h6j+H88+s9j+R1j+Y78+H88+V88+L08+T7j+r88+m98+d58+G58+B5j+A08+R1j+I78+O1j+R1j+I78+O1j+L08+O0j+G8j),"iconsTemplate":(k0j+L08+O0j+c88+l08+Q1j+R1j+V88+R1j+G48+Z5j+d9j+e1j+k8j+s68+d9j+l08+G58+X08+j8j+r28+L08+B68+E48+c88+l08+s68+O08+R1j+R1j+V88+R1j+t78+d9j+e1j+k8j+s68+d9j+G48+w9j+H88+O78+L08+O0j+f28+L08+B68+E48+c88+l08+J5j+R1j+R1j+V88+R1j+t78+d9j+Q08+G48+d58+d9j+e1j+P7j+n88+s68+r28+R1j+p48+d58+c88+l08+J5j+R1j+R1j+V88+R1j+t78+d9j+B68+l08+G58+d9j+a48+e1j+O78+R1j+e1j+O08+d58+O1j+L08+B68+E48+f28+L08+O0j+c88+l08+J5j+R1j+R1j+V88+R1j+t78+d9j+Q08+G48+d58+d9j+e1j+O08+d58+J0j+r28+R1j+p48+d58+c88+l08+f5j+V88+R1j+t78+d9j+B68+p68+d9j+D88+T68+R1j+O78+R1j+e1j+P7j+O1j+L08+B68+E48+f28+L08+O0j+c88+l08+f5j+V88+R1j+t78+d9j+Q08+G48+d58+d9j+e1j+O08+d58+J0j+r28+R1j+p48+d58+c88+l08+Q1j+R1j+V88+R1j+G48+Z5j+d9j+B68+l08+G58+d9j+L08+G58+p8j+O78+R1j+p48+d58+O1j+L08+O0j+f28+L08+B68+E48+c88+l08+s68+O08+R1j+R1j+V88+R1j+t78+d9j+Q08+G48+d58+d9j+e1j+O08+d58+J0j+r28+R1j+I78+c88+l08+Q1j+R1j+V88+R1j+G48+Z5j+d9j+B68+p68+d9j+n88+L08+B68+G48+O78+R1j+e1j+P7j+O1j+L08+O0j+f28+L08+O0j+c88+l08+Q1j+R1j+V88+R1j+G48+Z5j+d9j+Q08+V1j+d9j+e1j+O08+d0j+r28+R1j+I78+c88+l08+J5j+Z7j+V88+R1j+G48+Z5j+d9j+B68+p68+d9j+l08+v0j+n88+O78+R1j+e1j+P7j+O1j+L08+B68+E48+O1j+L08+B68+E48+n6j),"baselineHandle":(k0j+L08+B68+E48+c88+l08+s68+m9j+R1j+V88+R1j+G48+Z5j+d9j+Q08+O08+R1j+n88+s68+B68+B5j+d9j+h18+P7j+s58+c88+D88+O08+s9j+R1j+G48+u6j+H88+V88+L08+T7j+e1j+s68+O08+u6j+m98+d58+G58+B5j+l18+L08+O0j+n6j),}
;}
STXChart.prototype.registerHTMLElements=function(){var a7j="oomIn",T08="DIV",L68="chartControls",c=this.chart.container;for(var control in STXChart.htmlControls){if(typeof this.chart[control]==B3j&&typeof this.controls[control]==B3j){if(!this.allowZoom&&Z1V.T(control,L68))continue;var el=$$$(j38+control,c);if(el){this.chart[control]=el;this.controls[control]=el;}
else{var rawHTML=STXChart.htmlControls[control],div=document.createElement(T08);div.innerHTML=rawHTML;el=div.firstChild;c.appendChild(el);this.chart[control]=el;this.controls[control]=el;el.id=control;}
}
}
if(this.controls.chartControls){var zoomIn=$$$((j38+F68+a7j),this.controls.chartControls),zoomOut=$$$(e48,this.controls.chartControls);STX.safeClickTouch(zoomIn,(function(self){return function(e){self.zoomIn();e.stopPropagation();}
;}
)(this));STX.safeClickTouch(zoomOut,(function(self){return function(e){self.zoomOut();e.stopPropagation();}
;}
)(this));if(!STX.touchDevice){zoomIn.onmouseover=(function(self){return function(e){self.modalBegin();}
;}
)(this);zoomIn.onmouseout=(function(self){return function(e){self.modalEnd();}
;}
)(this);zoomOut.onmouseover=(function(self){return function(e){self.modalBegin();}
;}
)(this);zoomOut.onmouseout=(function(self){return function(e){self.modalEnd();}
;}
)(this);}
}
if(this.controls.home){STX.safeClickTouch(this.controls.home,(function(self){return function(e){self.home();e.stopPropagation();}
;}
)(this));if(!STX.touchDevice){this.controls.home.onmouseover=(function(self){return function(e){self.modalBegin();}
;}
)(this);this.controls.home.onmouseout=(function(self){return function(e){self.modalEnd();}
;}
)(this);}
}
}
;E(/-([a-z])/g);STX.makeCamelCase=function(name){return name.replace(STX.camelCaseRegExp,function(g){return g[Z1V.E3j].toUpperCase();}
);}
;STXChart.prototype.cloneStyle=function(styleObject){var d78="ndAttachme",C28="ckgr",rc={}
,nativeCamelSupport=X58;function capitalize(g){return g[Z1V.E3j].toUpperCase();}
for(var i in styleObject){var v=styleObject[i];if(Z1V.J4(i,(i5j+m5j+C28+x6j+d78+Q78+Z1V.A28)))nativeCamelSupport=I38;if(nativeCamelSupport){if(v&&Z1V.r4(v.constructor,String)&&isNaN(i)){rc[i]=v;}
}
else if(!isNaN(i)){var x=styleObject.getPropertyValue(v);if(x){v=v.split(Z28);var ii=Z1V.n3j;jj=v.length;var vcc=v[Z1V.n3j];while(++ii<jj){vcc+=v[ii].charAt(Z1V.n3j).toUpperCase()+v[ii].slice(Z1V.E3j);}
rc[vcc]=x;}
}
else{var icc=i.replace(STX.camelCaseRegExp,capitalize);rc[icc]=v;}
}
return rc;}
;STXChart.prototype.canvasStyle=function(className){var s=this.styles[className];if(!s){var div=document.createElement(G9j);div.className=className;document.body.appendChild(div);var styles=getComputedStyle(div);s=this.styles[className]=this.cloneStyle(styles);document.body.removeChild(div);if(!styles){this.styles[className]=Z1V.z38;}
}
return s;}
;STXChart.prototype.colorOrStyle=function(str){var c58="rgb(",P28="rgba(";if(str.indexOf(j38)!=-Z1V.E3j)return str;if(str.indexOf(P28)!=-Z1V.E3j)return str;if(str.indexOf(c58)!=-Z1V.E3j)return str;if(Z1V.p4(str,N48))return str;return this.canvasStyle(str);}
;STXChart.prototype.clearStyles=function(){this.styles={}
;}
;STXChart.prototype.setStyle=function(obj,attribute,value){if(!this.styles[obj]){this.canvasStyle(obj);}
if(!this.styles[obj])this.styles[obj]={}
;this.styles[obj][STX.makeCamelCase(attribute)]=value;}
;STXChart.prototype.canvasFont=function(className,ctx){var R8j="bad";if(!ctx)ctx=this.chart.context;var style=this.canvasStyle(className);if(!style)return ;var result=style.fontStyle+s6j+style.fontWeight+s6j+style.fontSize+s6j+style.fontFamily;if(result.indexOf(B3j)==-Z1V.E3j){ctx.font=result;}
else{this.styles[className]=Z1V.z38;console.log((R8j+s6j+V6j+T28+T28+s6j+T28+Z1V.A28+Z1V.j58+M5j+s6j+g98+z5j+s6j+V6j+l38+m5j+T28+T28+s6j)+className);}
}
;STXChart.prototype.canvasColor=function(className,ctx){if(!ctx)ctx=this.chart.context;var style=this.canvasStyle(className);if(!style)return ;var color=style.color;if(STX.isTransparent(color))color=this.defaultColor;ctx.globalAlpha=1;ctx.fillStyle=color;ctx.strokeStyle=color;var opacity=style.opacity;if(typeof opacity!=B3j)ctx.globalAlpha=opacity;}
;STXChart.prototype.getCanvasFontSize=function(className){var r8j="12",s=this.canvasStyle(className),fs=s.fontSize;if(!fs)fs=r8j;return parseInt(STX.stripPX(fs));}
;STXChart.prototype.getCanvasColor=function(className){var s=this.canvasStyle(className);return s.color;}
;STXChart.hideDates=function(){return X58;}
;STXChart.prototype.runPrepend=function(o,args,self){var prepends=this["prepend"+o];if(!prepends)return false;if(!self)self=this;for(var i=0;Z1V.E4(i,prepends.length);i++){var rv=prepends[i].apply(self,args);if(rv)return rv;}
return false;}
;STXChart.prototype.runAppend=function(o,args,self){var appends=this["append"+o];if(!appends)return false;if(!self)self=this;for(var i=0;Z1V.A4(i,appends.length);i++){var rv=appends[i].apply(self,args);if(rv)return rv;}
return false;}
;STXChart.registerDrawingTool=function(name,func){STXChart.drawingTools[name]=func;}
;STXChart.prototype.createBlock=function(left,width,top,height,className,context){if(!context)context=this.chart.context;if(typeof (height)=="undefined"){return ;}
this.canvasColor(className,context);context.fillRect(left,top,width,height);context.globalAlpha=1;}
;STXChart.prototype.changeOccurred=function(change){if(this.currentlyImporting)return ;if(this.changeCallback)this.changeCallback(this,change);}
;STXChart.prototype.setChartType=function(chartType){this.layout.chartType=chartType;if(this.displayInitialized)this.draw();this.changeOccurred(y3j);}
;STXChart.prototype.setAggregationType=function(aggregationType){this.layout.aggregationType=aggregationType;if(this.chart.canvas){this.createDataSet();this.draw();}
this.changeOccurred("layout");}
;STXChart.prototype.setChartScale=function(chartScale){if(!chartScale)chartScale="linear";this.layout.chartScale=chartScale;if(this.chart.canvas)this.draw();this.changeOccurred("layout");}
;STXChart.prototype.setAdjusted=function(data){this.layout.adj=data;if(this.chart.canvas){this.createDataSet();this.draw();}
this.changeOccurred("layout");}
;STXChart.prototype.setVolumeUnderlay=function(data){this.layout.volumeUnderlay=data;if(this.chart.canvas)this.draw();this.changeOccurred("layout");}
;STXChart.prototype.serializeDrawings=function(){var arr=[];for(var i=0;Z1V.F4(i,this.drawingObjects.length);i++){arr.push(this.drawingObjects[i].serialize());}
return arr;}
;STXChart.prototype.abortDrawings=function(){for(var i=0;Z1V.L4(i,this.drawingObjects.length);i++){this.drawingObjects[i].abort(true);}
this.drawingObjects=[];}
;STXChart.prototype.reconstructDrawings=function(arr){var R6j="ci",r18="nac",W1j="fi";for(var i=0;Z1V.Y4(i,arr.length);i++){var rep=arr[i];if(Z1V.c4(rep.name,(W1j+i5j+J38+r18+R6j)))rep.name="retracement";var Factory=STXChart.drawingTools[rep.name];if(!Factory){if(STX.Drawing[rep.name]){Factory=STX.Drawing[rep.name];STXChart.registerDrawingTool(rep.name,Factory);}
}
if(Factory){var drawing=new Factory();drawing.reconstruct(this,rep);this.drawingObjects.push(drawing);}
}
}
;STXChart.prototype.clearDrawings=function(cantUndo){if(cantUndo){this.undoStamps=[];}
else{this.undoStamp();}
this.abortDrawings();this.changeOccurred(x8j);this.createDataSet();this.draw();}
;STXChart.prototype.createDrawing=function(type,parameters){var drawing=new STX.Drawing[type]();drawing.reconstruct(this,parameters);this.drawingObjects.push(drawing);this.draw();return drawing;}
;STXChart.prototype.removeDrawing=function(drawing){for(var i=0;Z1V.R4(i,this.drawingObjects.length);i++){if(Z1V.d4(this.drawingObjects[i],drawing)){this.drawingObjects.splice(i,1);this.changeOccurred("vector");this.draw();return ;}
}
}
;STXChart.prototype.dateFromTick=function(tick,chart,native){if(!chart)chart=this.chart;var interval=this.layout.interval,periodicity=this.layout.periodicity,l=chart.dataSet.length,dt,i;if(Z1V.C4(tick,l)&&Z1V.b4(tick,0))return native?new Date(chart.dataSet[tick].DT.getTime()):chart.dataSet[tick].Date;if(Z1V.z4(tick,0)){dt=chart.dataSet[0].DT;for(i=0;Z1V.x4(i,3000);i++){if(-i==tick)return native?new Date(dt.getTime()):STX.yyyymmddhhmmssmmm(dt);if(!this.isDailyInterval(interval))dt=STX.LegacyMarket.prevPeriod(dt,interval,periodicity,this,null,this.dataZone);else if(Z1V.P4(interval,"day"))dt=STX.LegacyMarket.prevDay(dt,periodicity,this);else if(Z1V.a4(interval,"week"))dt=STX.LegacyMarket.prevWeek(dt,periodicity,this);else if(Z1V.V2(interval,"month"))dt=STX.LegacyMarket.prevMonth(dt,periodicity,this);}
}
else{dt=chart.dataSet[Z1V.u2(l,1)].DT;for(i=0;Z1V.h2(i,3000);i++){if(Z1V.n2(l-1+i,tick)){return native?new Date(dt.getTime()):STX.yyyymmddhhmmssmmm(dt);}
if(!this.isDailyInterval(interval))dt=STX.LegacyMarket.nextPeriod(dt,interval,periodicity,this,null,this.dataZone);else if(Z1V.H2(interval,"day"))dt=STX.LegacyMarket.nextDay(dt,periodicity,this);else if(Z1V.L2(interval,"week"))dt=STX.LegacyMarket.nextWeek(dt,periodicity,this);else if(Z1V.Y2(interval,"month"))dt=STX.LegacyMarket.nextMonth(dt,periodicity,this);}
}
return native?new Date(dt.getTime()):STX.yyyymmddhhmmssmmm(dt);}
;STXChart.prototype.futureTick=function(mydt,chart){var g6j="ut",v9j="min",mym=STX.strToDateTime(mydt).getTime(),interval=this.layout.interval,periodicity=this.layout.periodicity,dt=chart.dataSet[Z1V.j2(chart.dataSet.length,1)].DT,m=dt.getTime(),ticks=0,computedPeriodicity=periodicity;if(!this.isDailyInterval(interval)){if(Z1V.N2(this.layout.timeUnit,"second")){ticks=Math.floor(Z1V.C2((mym-m),1000,(periodicity*interval)));return (Z1V.W2(chart.dataSet.length,1))+ticks;}
else if(Z1V.Q2(this.layout.timeUnit,"millisecond")){ticks=Math.floor(Z1V.P2((mym-m),(periodicity*interval)));return (Z1V.a2(chart.dataSet.length,1))+ticks;}
if(Z1V.V7(interval,(v9j+g6j+M5j)))computedPeriodicity=Z1V.w7(periodicity,interval);if(Z1V.l7(interval,"tick"))computedPeriodicity=this.chart.xAxis.futureTicksInterval;}
for(var i=0;Z1V.U7(i,1500);i++){if(!this.isDailyInterval(interval)){if(Z1V.n7(dt.getHours(),chart.beginHour)&&Z1V.H7(dt.getMinutes(),chart.beginMinute)&&Z1V.i7(interval,"tick")){if(Z1V.q7((mym-m)/60000,chart.minutesInSession)){dt=STX.LegacyMarket.nextDay(dt,1,this);if(Z1V.B7(chart.beginHour,0)&&Z1V.m7(dt.getDay(),0)){dt.setHours(15);dt.setMinutes(0);}
if(Z1V.N7(chart.beginHour,0)&&Z1V.O7(dt.getDay(),1)){ticks+=Math.round(Z1V.y7(9,60,computedPeriodicity));}
else{ticks+=Math.round(Z1V.z7(chart.minutesInSession,computedPeriodicity));}
}
else{dt=STX.LegacyMarket.nextPeriod(dt,interval,periodicity,this,null,this.dataZone);ticks+=1;}
}
else{dt=STX.LegacyMarket.nextPeriod(dt,interval,periodicity,this,null,this.dataZone);ticks+=1;}
}
else{ticks+=1;if(Z1V.x7(interval,"day"))dt=STX.LegacyMarket.nextDay(dt,periodicity,this);else if(Z1V.P7(interval,"week"))dt=STX.LegacyMarket.nextWeek(dt,periodicity,this);else if(Z1V.a7(interval,"month"))dt=STX.LegacyMarket.nextMonth(dt,periodicity,this);}
m=dt.getTime();if(Z1V.V3(m,mym)){return (Z1V.w3(chart.dataSet.length,1))+ticks;}
if(Z1V.l3(mym,m)){return (Z1V.U3(chart.dataSet.length,1))+ticks-1;}
}
return (Z1V.n3(chart.dataSet.length,1))+ticks;}
;STXChart.prototype.pastTick=function(mydt,chart){var D28=210,mym=STX.strToDateTime(mydt).getTime(),interval=this.layout.interval,periodicity=this.layout.periodicity,dt=chart.dataSet[Z1V.n3j].DT,m=dt.getTime(),ticks=Z1V.n3j,computedPeriodicity=periodicity;if(!this.isDailyInterval(interval)){if(Z1V.H3(this.layout.timeUnit,e88)){return Z1V.i3((mym-m),Z58);}
else if(Z1V.q3(this.layout.timeUnit,y88)){return Z1V.B3(mym,m);}
if(Z1V.m3(interval,E98))computedPeriodicity=Z1V.N3(periodicity,interval);if(Z1V.O3(interval,Q8j))computedPeriodicity=this.chart.xAxis.futureTicksInterval;}
for(var i=Z1V.n3j;Z1V.y3(i,O38);i++){if(!this.isDailyInterval(interval)){if(Z1V.W3(dt.getHours(),chart.beginHour)&&Z1V.Q3(dt.getMinutes(),chart.beginMinute)&&Z1V.f3(interval,Q8j)){var dt2=STX.LegacyMarket.prevDay(dt,Z1V.E3j,this);if(Z1V.I3((dt2.getTime()-mym)/u98,chart.minutesInSession)){dt=dt2;if(Z1V.M3(chart.beginHour,Z1V.n3j)){if(Z1V.S9(dt.getDay(),Z1V.n3j)){ticks+=Math.round(Z1V.u9(i3j,V58,computedPeriodicity));}
else{ticks+=Math.round(Z1V.U9(chart.minutesInSession,computedPeriodicity));}
}
else if(Z1V.n9(chart.beginHour,i3j)&&STX.LegacyMarket.isHalfDay(dt,chart.symbol)){ticks+=Math.round(Z1V.H9(D28,computedPeriodicity));}
else{ticks+=Math.round(Z1V.i9(chart.minutesInSession,computedPeriodicity));}
}
else{dt=STX.LegacyMarket.prevPeriod(dt,interval,periodicity,this,Z1V.z38,this.dataZone);ticks+=Z1V.E3j;}
}
else{dt=STX.LegacyMarket.prevPeriod(dt,interval,periodicity,this,Z1V.z38,this.dataZone);ticks+=Z1V.E3j;}
}
else{ticks+=Z1V.E3j;}
if(Z1V.q9(interval,T8j))dt=STX.LegacyMarket.prevDay(dt,periodicity,this);else if(Z1V.B9(interval,N1j))dt=STX.LegacyMarket.prevWeek(dt,periodicity,this);else if(Z1V.m9(interval,O3j))dt=STX.LegacyMarket.prevMonth(dt,periodicity,this);m=dt.getTime();if(Z1V.N9(m,mym)){return -ticks;}
if(Z1V.O9(mym,m)){return -(ticks+Z1V.E3j);}
}
return -ticks;}
;STXChart.prototype.calculateYAxisMargins=function(yAxis){yAxis.zoom=yAxis.initialMarginTop+yAxis.initialMarginBottom;yAxis.scroll=Z1V.y9((yAxis.initialMarginTop-yAxis.initialMarginBottom),Z1V.h3j);}
;STXChart.prototype.home=function(params){this.grabbingScreen=false;if(STXChart.insideChart)STX.unappendClassName(this.container,"stx-drag-chart");if(typeof params!="object"){params={maintainWhitespace:params}
;}
this.cancelTouchSingleClick=true;if(!this.chart.dataSet||!this.chart.dataSet.length){this.draw();return ;}
var barsDisplayedOnScreen=Math.floor(Z1V.W9(this.chart.width,this.layout.candleWidth));for(var chartName in this.charts){var chart=this.charts[chartName];chart.scroll=Math.min(barsDisplayedOnScreen+1,chart.dataSet.length);if(this.chart.allowScrollPast)chart.scroll=barsDisplayedOnScreen+1;var wsInTicks;if(params.maintainWhitespace){wsInTicks=Math.round(Z1V.Q9(this.preferences.whitespace,this.layout.candleWidth));this.chart.scroll-=wsInTicks;}
else if(Z1V.f9(this.yaxisLabelStyle,"roundRectArrow")){var margin=3,height=this.getCanvasFontSize("stx_yaxis")+Z1V.I9(margin,2),leftMargin=Z1V.M9(height,2);wsInTicks=Math.round(Z1V.S8(leftMargin,this.layout.candleWidth));if(Z1V.u8(wsInTicks,1))chart.scroll-=wsInTicks;}
this.calculateYAxisMargins(chart.panel.yAxis);}
this.draw();}
;STXChart.prototype.tickFromDate=function(dt,chart,adj){if(!chart)chart=this.chart;if(!chart.dataSet.length)return 0;var DT=STX.strToDateTime(dt);if(!adj)adj=0;if(!STXChart.isDailyInterval(this.layout.interval))DT.setMinutes(DT.getMinutes()+adj);if(Z1V.h8(chart.beginHour,0)&&!STXChart.isDailyInterval(this.layout.interval)){if(Z1V.t8(DT.getHours(),0)){DT.setHours(chart.beginHour);DT.setMinutes(chart.beginMinute);DT.setSeconds(0);DT.setMilliseconds(0);}
}
var mym=DT.getTime(),m=chart.dataSet[Z1V.s8(chart.dataSet.length,1)].DT.getTime();if(Z1V.k8(m,mym))return this.futureTick(dt,chart);var first=chart.dataSet[0].DT.getTime();if(Z1V.o8(mym,first))return this.pastTick(dt,chart);for(var i=Z1V.X8(chart.dataSet.length,1);Z1V.j8(i,0);i--){m=chart.dataSet[i].DT.getTime();if(Z1V.D8(m,mym))return i;}
}
;STXChart.prototype.timeShiftDate=function(dt){var Z48=3747512,D98=(21.90E1<=(86.,3.42E2)?(96.,9995455):(0x194,3.89E2)<=23.?26.6E1:(98,24.)),V9j=1717367601,c78=((0xCF,115.)>0x59?(27.,1326569228):(12.9E1,0x4B)),ms=dt.getTime();var s7j=c78,H7j=V9j,A7j=Z1V.h3j;for(var n7j=Z1V.E3j;Z1V.O2j.C2j(n7j.toString(),n7j.toString().length,D98)!==s7j;n7j++){this.calculatePanelPercent(STXChart.resizingPanel);this.adjustDrawings();A7j+=Z1V.h3j;}
if(Z1V.O2j.C2j(A7j.toString(),A7j.toString().length,Z48)!==H7j){this.gesture.stop();self.createDataSet();STX.clearCanvas(this.chart.tempCanvas,this);return b79-e79;}
ms+=Z1V.K8(this.timeZoneOffset,u98);return new Date(ms);}
;STXChart.XAxisLabel=function(hz,grid,text){this.hz=hz;this.grid=grid;this.text=text;}
;STXChart.prototype.createXAxis=function(chart){var w6j="ly",m68="qua";if(Z1V.g8(chart.dataSegment.length,0))return null;var arguments$=[chart],axisRepresentation=this.runPrepend("createXAxis",arguments$);if(axisRepresentation)return axisRepresentation;var interval=this.layout.interval,timeUnit=this.layout.timeUnit;if(Z1V.e8(interval,"tick")||Z1V.G8(chart.xAxis.axisType,"ntb")||this.hasNTBAxis[this.layout.aggregationType]||Z1V.Z8(timeUnit,"second")||Z1V.v8(timeUnit,"millisecond")){return this.createTickXAxisWithDates(chart);}
if(Z1V.T8(chart.xAxis.axisType,"numeric")){return this.createNumericXAxis(chart);}
var displayLetters=false,periodicity=this.layout.periodicity,candleWidth=this.layout.candleWidth,p=periodicity,isIntraday=false,isDaily=false,isWeekly=false,isMonthly=false;if(Z1V.J0(interval,(N1j))){isWeekly=true;p=Z1V.r0(5,p);}
if(Z1V.p0(interval,"month")){isMonthly=true;p=Z1V.E0(20,p);}
if(Z1V.s0(candleWidth*(20/p),50))displayLetters=true;var i=0;chart.xaxis=[];for(;Z1V.k0(i,chart.maxTicks);i++){if(chart.dataSegment[i])break;chart.xaxis.push(null);}
var dt;if(chart.dataSegment[i]){dt=chart.dataSegment[i].DT;}
else{dt=new Date();if(this.dataZone){var tzNow=STX.convertTimeZone(now,null,this.dataZone);dt=new Date(tzNow.getFullYear(),tzNow.getMonth(),tzNow.getDate(),tzNow.getHours(),tzNow.getMinutes(),tzNow.getSeconds(),tzNow.getMilliseconds());}
}
var currentDate=dt.getDate(),is24=(Z1V.o0(chart.minutesInSession,1440));if(is24){if(chart.dataSegment[i]&&chart.dataSegment[i].displayDate){currentDate=chart.dataSegment[i].displayDate.getDate();}
else{currentDate=this.timeShiftDate(dt).getDate();}
}
var prevMonth=dt.getMonth(),prevYear=dt.getFullYear(),ticksPerDay=1;if(!this.isDailyInterval(interval)){isIntraday=true;if(Z1V.X0(interval,"minute"))interval=1;ticksPerDay=Math.ceil(Z1V.j0(chart.minutesInSession,periodicity,interval));}
else{isDaily=true;}
var ticksPerClick=Math.round(Z1V.N0(ticksPerDay,Math.ceil(ticksPerDay/Math.floor(100/candleWidth))));if(Z1V.O0(ticksPerClick,1))ticksPerClick=1;var minuteBoundary=Z1V.b0(ticksPerClick,periodicity,interval);if(chart.prettyXaxis){var mod=chart.prettyXaxis[Z1V.G0(periodicity,interval)];if(!mod)mod=1;if(Z1V.f0(minuteBoundary,mod)){minuteBoundary=Z1V.I0(Math.floor((minuteBoundary+mod)/mod),mod);}
}
axisRepresentation=[];var standardBeginDay=Z1V.M0(chart.beginHour,60)+chart.beginMinute,prices;candleWidth=this.layout.candleWidth;for(i;Z1V.S5(i,chart.maxTicks);i++){var hz,text;if(!isMonthly&&Z1V.u5(chart.maxTicks/ticksPerDay,(this.chart.width/this.chart.xaxisFactor))){if(Z1V.h5(i,chart.dataSegment.length)){prices=chart.dataSegment[i];if(!prices)continue;if(i&&prices.leftOffset)candleWidth=Z1V.t5((prices.leftOffset-prices.candleWidth/2),i);dt=prices.DT;if(chart.xAxis.useDataDate){dtShifted=dt;}
else if(prices.displayDate){dtShifted=prices.displayDate;}
else if(isIntraday){dtShifted=this.timeShiftDate(dt);}
else{dtShifted=dt;}
}
else{if(!chart.xAxis.futureTicks)break;dt=this.getNextInterval(dt,periodicity,this.dataZone);if(chart.xAxis.useDataDate)dtShifted=dt;else if(isIntraday)dtShifted=this.timeShiftDate(dt);else dtShifted=dt;}
var isNextDate=Z1V.s5(dt.getDate(),currentDate);if(is24)isNextDate=Z1V.k5(dtShifted.getDate(),currentDate);if(isNextDate){var gridType="boundary";if(!isIntraday)gridType="line";currentDate=dt.getDate();if(is24)currentDate=dtShifted.getDate();text="";if(!STXChart.hideDates()){var y=dt.getFullYear();if(Z1V.o5(y,prevYear)){prevYear=y;text=y;hz=chart.left+Z1V.X5(i,candleWidth)-1;if(Z1V.j5(hz,chart.right)){axisRepresentation.push(new STXChart.XAxisLabel(hz,"boundary",text));}
}
if(chart.xAxis.formatter){text=chart.xAxis.formatter(dtShifted,gridType);}
else if(this.internationalizer){text=this.internationalizer.monthDay.format(dtShifted);}
else{text=(dtShifted.getMonth()+1)+"/"+dtShifted.getDate();}
hz=chart.left+Z1V.D5(((2*i+1)*candleWidth),2)-1;if(Z1V.K5(hz,chart.right)){axisRepresentation.push(new STXChart.XAxisLabel(hz,"line",text));}
}
}
var minutes=Z1V.g5(dt.getHours(),60)+dt.getMinutes();if(Z1V.e5(this.chart.beginHour,0)||Z1V.G5(dt.getDay(),0))minutes=Z1V.Z5(minutes,standardBeginDay);else minutes=Z1V.v5(minutes,(15*60));if(is24)minutes=Z1V.T5(dtShifted.getHours(),60)+dtShifted.getMinutes();if(Z1V.J6(minutes%minuteBoundary,0)){hz=chart.left+Z1V.r6(((2*i+1)*candleWidth),2)-1;text="";if(!STXChart.hideDates()){if(chart.xAxis.formatter){text=chart.xAxis.formatter(dtShifted,"line");}
else{text=STX.timeAsDisplay(dtShifted,this);}
}
if(Z1V.p6(hz,chart.right)){axisRepresentation.push(new STXChart.XAxisLabel(hz,"line",text));}
}
}
else{if(Z1V.E6(i,chart.dataSegment.length)){prices=chart.dataSegment[i];if(i&&prices.leftOffset)candleWidth=Z1V.A6((prices.leftOffset-prices.candleWidth/2),i);dt=prices.DT;}
else{if(!chart.xAxis.futureTicks)break;if(isIntraday)dt=STX.LegacyMarket.nextPeriod(dt,interval,periodicity,this,null,this.dataZone);else if(isWeekly)dt=STX.LegacyMarket.nextWeek(dt,periodicity,this);else if(isMonthly)dt=STX.LegacyMarket.nextMonth(dt,periodicity,this);else if(isDaily)dt=STX.LegacyMarket.nextDay(dt,periodicity,this);}
dtShifted=dt;var m=dt.getMonth(),y1=dt.getFullYear();if(Z1V.F6(y1,prevYear)){prevYear=y1;hz=chart.left+(Z1V.L6(i,candleWidth))-1;text="";if(!STXChart.hideDates())text=y1;axisRepresentation.push(new STXChart.XAxisLabel(hz,"boundary",text));}
if(Z1V.Y6(m,prevMonth)){var doIt="monthly";if(isWeekly&&Z1V.c6(chart.maxTicks*periodicity,(52*1)))doIt="quarterly";else if(isMonthly&&Z1V.R6(chart.maxTicks*periodicity,(12*1)))doIt="quarterly";else if(isDaily&&Z1V.d6(chart.maxTicks*periodicity,(365*1)))doIt=(m68+g28+Z1V.A28+A6j+w6j);if(isWeekly&&Z1V.C6(chart.maxTicks*periodicity,(52*2)))doIt="none";else if(isMonthly&&Z1V.b6(chart.maxTicks*periodicity,(12*2)))doIt="none";else if(isDaily&&Z1V.z6(chart.maxTicks*periodicity,(365*2)))doIt="none";if(Z1V.x6(doIt,"monthly")||(Z1V.P6(doIt,"quarterly")&&(Z1V.a6(m,0)||Z1V.V1(m,3)||Z1V.w1(m,6)||Z1V.l1(m,9)))){prevMonth=m;hz=chart.left+Z1V.U1(((2*i+1)*candleWidth),2)-1;text="";if(!STXChart.hideDates())text=STX.monthAsDisplay(m,displayLetters,this);axisRepresentation.push(new STXChart.XAxisLabel(hz,"line",text));}
}
}
var obj={DT:dtShifted,Date:STX.yyyymmddhhmm(dtShifted)}
;if(Z1V.A1(i,chart.dataSegment.length))obj.data=chart.dataSegment[i];else obj.data=null;chart.xaxis.push(obj);}
this.runAppend("createXAxis",arguments$);return axisRepresentation;}
;STXChart.prototype.drawXAxis=function(chart,axisRepresentation){var arguments$=[chart,axisRepresentation];if(this.runPrepend("drawXAxis",arguments$))return ;if(!axisRepresentation)return ;var priorBoundary=null,context=this.chart.context;this.canvasFont("stx_xaxis");context.textAlign="center";context.textBaseline="middle";var obj;for(var j=0;Z1V.F1(j,axisRepresentation.length);j++){obj=axisRepresentation[j];var w=context.measureText(obj.text+"   ").width,w2=Math.max(w,chart.xAxis.minimumLabelWidth);obj.hz=Math.floor(obj.hz+this.micropixels)+0.5;obj.left=Z1V.o1(obj.hz,(w2/2));obj.right=obj.hz+(Z1V.X1(w2,2));obj.unpaddedRight=obj.hz+(Z1V.R1(w,2));}
var plotter=new STX.Plotter();plotter.newSeries("line","stroke",this.canvasStyle("stx_grid"));plotter.newSeries("boundary","stroke",this.canvasStyle("stx_grid_dark"));plotter.newSeries("border","stroke",this.canvasStyle("stx_grid_border"));var bottom=chart.panel.bottom,yAxis=chart.panel.yAxis,prevRight=-1,nextBoundaryLeft=Math.MAX_VALUE,drawBorders=chart.xAxis.displayBorder||Z1V.K1(chart.xAxis.displayBorder,null);if(Z1V.g1(this.axisBorders,true))drawBorders=true;if(Z1V.W1(this.axisBorders,false))drawBorders=false;var b=drawBorders?Z1V.Q1(yAxis.bottom,0.5):yAxis.bottom,middle=Z1V.P1(bottom,this.xaxisHeight/2);if(drawBorders)middle+=3;for(var nb=0;Z1V.T1(nb,axisRepresentation.length);nb++){if(Z1V.J4m(axisRepresentation[nb].grid,"boundary")){nextBoundaryLeft=axisRepresentation[nb].left;break;}
}
var prevHz=0,count=0;for(var i=0;Z1V.r4m(i,axisRepresentation.length);i++){obj=axisRepresentation[i];if(Z1V.p4m(i,nb)){for(nb++;Z1V.E4m(nb,axisRepresentation.length);nb++){if(Z1V.A4m(axisRepresentation[nb].grid,"boundary")){nextBoundaryLeft=axisRepresentation[nb].left;break;}
}
if(Z1V.F4m(nb,axisRepresentation.length)){nb=-1;nextBoundaryLeft=Math.MAX_VALUE;}
if(prevRight>-1){if(Z1V.L4m(obj.left,prevRight))continue;}
}
else{if(prevRight>-1){if(Z1V.Y4m(obj.left,prevRight))continue;}
if(Z1V.c4m(obj.right,nextBoundaryLeft))continue;}
prevRight=obj.right;if((Z1V.R4m(Math.floor(obj.unpaddedRight),this.chart.right))){count++;if(chart.xAxis.displayGridLines){plotter.moveTo(obj.grid,obj.hz,yAxis.top);plotter.lineTo(obj.grid,obj.hz,b);}
if(drawBorders){plotter.moveTo((i5j+z5j+K5j),obj.hz,b+0.5);plotter.lineTo("border",obj.hz,b+6);}
prevHz=obj.hz;this.canvasColor(Z1V.d4m(obj.grid,"boundary")?"stx_xaxis_dark":"stx_xaxis");context.fillText(obj.text,obj.hz,middle);}
}
if(drawBorders){var bb=Math.round(yAxis.bottom)+0.5,wb=Math.round(chart.right)+0.5;plotter.moveTo("border",chart.left,bb);plotter.lineTo("border",wb,bb);}
plotter.draw(context);context.textAlign="left";this.runAppend("drawXAxis",arguments$);}
;STXChart.prototype.createNumericXAxis=function(chart){axisRepresentation=[];chart.xaxis=[];for(var i=0;Z1V.C4m(i,chart.maxTicks);i++){if(chart.dataSegment[i])break;chart.xaxis.push(null);}
for(var j=i;Z1V.b4m(j,chart.maxTicks);j++){if(!chart.dataSegment[i])break;}
var filledScreenRatio=Z1V.z4m((j-i),chart.maxTicks),idealTickSizePixels=chart.xAxis.idealTickSizePixels?chart.xAxis.idealTickSizePixels:chart.xAxis.autoComputedTickSizePixels,idealTicks=Math.round(Z1V.x4m((this.chart.width*filledScreenRatio),idealTickSizePixels)),minMax=this.determineMinMax(chart.dataSegment,["index"]),maxPoint=minMax[1],minPoint=minMax[0],range=Z1V.P4m(maxPoint,minPoint);function niceNum(range,round){var exponent,fraction,niceFraction;exponent=Math.floor(Math.log10(range));fraction=Z1V.a4m(range,Math.pow(10,exponent));if(round){if(Z1V.V2m(fraction,1.5))niceFraction=1;else if(Z1V.w2m(fraction,3))niceFraction=2;else if(Z1V.l2m(fraction,7))niceFraction=5;else niceFraction=10;}
else{if(Z1V.U2m(fraction,1))niceFraction=1;else if(Z1V.n2m(fraction,2))niceFraction=2;else if(Z1V.H2m(fraction,5))niceFraction=5;else niceFraction=10;}
return Z1V.i2m(niceFraction,Math.pow(10,exponent));}
var niceRange=niceNum(Z1V.q2m(maxPoint,minPoint),false),tickSpacing=niceNum(Z1V.B2m(range,(idealTicks-1)),true),niceMin=Z1V.m2m(Math.floor(minPoint/tickSpacing),tickSpacing),niceMax=Z1V.N2m(Math.ceil(maxPoint/tickSpacing),tickSpacing),nextLabel=niceMin;if(Z1V.O2m(niceMin,minPoint))nextLabel=niceMin+tickSpacing;var hz;for(i;Z1V.y2m(i,chart.maxTicks);i++){var prices=chart.dataSegment[i];if(prices){var obj={index:prices.index,data:prices}
;chart.xaxis.push(obj);if(Z1V.W2m(prices.index,nextLabel))continue;if(Z1V.Q2m(prices.index,nextLabel)){hz=chart.left+Z1V.f2m(i,this.layout.candleWidth)+this.micropixels;}
else if(Z1V.I2m(prices.index,nextLabel)){hz=chart.left+Z1V.M2m(i,this.layout.candleWidth)-3+this.micropixels;}
axisRepresentation.push(new STXChart.XAxisLabel(hz,"line",nextLabel));nextLabel+=tickSpacing;}
else{chart.xaxis.push(null);}
}
return axisRepresentation;}
;STXChart.prototype.createTickXAxisWithDates=function(chart){var u58="ry",o58="nda",I1j="[",M1j="eg",N0j="cending",C6j="ate",W58="rr",r9j="rtio",o6j="sse";if(!chart)chart=this.chart;if(!this.timeIntervalMap){this.timePossibilities=[STX.MILLISECOND,STX.SECOND,STX.MINUTE,STX.HOUR,STX.DAY,STX.MONTH,STX.YEAR];this.timeIntervalMap={}
;this.timeIntervalMap[STX.MILLISECOND]={arr:[1,2,5,10,20,50,100,250,500],minTimeUnit:0,maxTimeUnit:1000}
;this.timeIntervalMap[STX.SECOND]={arr:[1,2,5,10,15,30],minTimeUnit:0,maxTimeUnit:60}
;this.timeIntervalMap[STX.MINUTE]={arr:[1,2,5,10,15,30],minTimeUnit:0,maxTimeUnit:60}
;this.timeIntervalMap[STX.HOUR]={arr:[1,2,3,4,6,12],minTimeUnit:0,maxTimeUnit:24}
;this.timeIntervalMap[STX.DAY]={arr:[1,2,7,14],minTimeUnit:1,maxTimeUnit:32}
;this.timeIntervalMap[STX.MONTH]={arr:[1,2,3,6],minTimeUnit:1,maxTimeUnit:13}
;this.timeIntervalMap[STX.YEAR]={arr:[1,2,3,5],minTimeUnit:1,maxTimeUnit:20000000}
;this.timeIntervalMap[STX.DECADE]={arr:[10],minTimeUnit:0,maxTimeUnit:2000000}
;}
var daysInMonth=[31,28,31,30,31,30,31,31,30,31,30,31],idealTickSizePixels=chart.xAxis.idealTickSizePixels?chart.xAxis.idealTickSizePixels:chart.xAxis.autoComputedTickSizePixels,idealTicks=Z1V.S7m(this.chart.width,idealTickSizePixels);for(var x=0;Z1V.u7m(x,chart.dataSegment.length);x++)if(chart.dataSegment[x])break;if(Z1V.h7m(x,chart.dataSegment.length))return [];var i,simpleCalc=Z1V.t7m(chart.dataSegment[chart.dataSegment.length-1].DT.getTime(),chart.dataSegment[x].DT.getTime()),timeRange=simpleCalc;if(Z1V.s7m(timeRange,14*STX.DAY)&&!STXChart.isDailyInterval(this.layout.interval)){var nextClose=null,nextCloseEpoch=0,prevEpoch=0;timeRange=0;for(i=0;Z1V.k7m(i,chart.dataSegment.length);i++){var q=chart.dataSegment[i];if(!q)continue;var epoch=q.DT.getTime();if(Z1V.o7m(epoch,nextCloseEpoch)){nextClose=new Date(q.DT);nextClose.setHours(chart.endHour);nextClose.setMinutes(chart.endMinute);nextCloseEpoch=nextClose.getTime();if(Z1V.X7m(nextCloseEpoch,epoch)){nextCloseEpoch=epoch;}
}
else{timeRange+=Z1V.j7m(epoch,prevEpoch);if(Z1V.D7m(epoch-prevEpoch,0)){console.log((J58+o6j+r9j+Q78+s6j+M5j+W58+J38+g28+f08+R0j+C6j+T28+s6j+Q78+Y5j+s6j+c98+Q78+s6j+m5j+T28+N0j+s6j+J38+g28+K5j+W88+V6j+p98+t58+J28+b5j+a5j+b3j+M1j+H38+M5j+Q78+Z1V.A28+I1j)+i+"].DT=="+q.DT);}
}
prevEpoch=epoch;}
}
if(Z1V.K7m(timeRange,0))timeRange=simpleCalc;timeRange=Z1V.g7m((timeRange/chart.dataSegment.length),chart.maxTicks);var msPerTick=Z1V.e7m(timeRange,idealTicks);for(i=0;Z1V.G7m(i,this.timePossibilities.length);i++){if(Z1V.Z7m(this.timePossibilities[i],msPerTick))break;}
if(Z1V.v7m(i,this.timePossibilities.length)){i--;}
else{var prevUnit=this.timePossibilities[Z1V.T7m(i,1)],prevMap=this.timeIntervalMap[prevUnit],prevMultiplier=prevMap.arr[Z1V.J3m(prevMap.arr.length,1)];if(Z1V.r3m(msPerTick-(prevUnit*prevMultiplier),this.timePossibilities[i]-msPerTick))i--;}
var timeUnit=this.timePossibilities[i];if(chart.xAxis.timeUnit)timeUnit=chart.xAxis.timeUnit;chart.xAxis.activeTimeUnit=timeUnit;var timeInterval=STX.clone(this.timeIntervalMap[timeUnit]);for(i=0;Z1V.p3m(i,timeInterval.arr.length);i++){if(Z1V.E3m(timeInterval.arr[i]*timeUnit,msPerTick))break;}
if(Z1V.A3m(i,timeInterval.arr.length)){i--;}
else{if(Z1V.F3m(msPerTick-timeInterval.arr[i-1]*timeUnit,timeInterval.arr[i]*timeUnit-msPerTick))i--;}
var timeUnitMultiplier=timeInterval.arr[i];if(chart.xAxis.timeUnitMultiplier)timeUnitMultiplier=chart.xAxis.timeUnitMultiplier;axisRepresentation=[];chart.xaxis=[];for(i=0;Z1V.L3m(i,chart.maxTicks);i++){if(chart.dataSegment[i])break;chart.xaxis.push(null);}
var dtShifted=0,nextTimeUnit=timeInterval.minTimeUnit,previousTimeUnitLarge=-1,firstTick=true,candleWidth=this.layout.candleWidth;for(i;Z1V.Y3m(i,chart.maxTicks);i++){if(Z1V.c3m(i,chart.dataSegment.length)){prices=chart.dataSegment[i];if(prices.displayDate&&chart.xAxis.adjustTimeZone){dtShifted=prices.displayDate;}
else{dtShifted=prices.DT;}
if(i&&prices.leftOffset)candleWidth=Z1V.R3m((prices.leftOffset-prices.candleWidth/2),i);}
else{if(!chart.xAxis.futureTicks)break;var dt;if(dtShifted){dt=dtShifted;}
else{dt=new Date();if(this.dataZone){var tzNow=STX.convertTimeZone(now,null,this.dataZone);dt=new Date(tzNow.getFullYear(),tzNow.getMonth(),tzNow.getDate(),tzNow.getHours(),tzNow.getMinutes(),tzNow.getSeconds(),tzNow.getMilliseconds());}
}
dt=this.getNextInterval(dt,this.layout.periodicity,this.dataZone);if(chart.xAxis.useDataDate)dtShifted=dt;else if(!this.isDailyInterval(this.layout.interval))dtShifted=this.timeShiftDate(dt);else dtShifted=dt;}
var obj={DT:dtShifted,Date:STX.yyyymmddhhmmssmmm(dtShifted)}
;if(Z1V.d3m(i,chart.dataSegment.length))obj.data=chart.dataSegment[i];else obj.data=null;chart.xaxis.push(obj);var currentTimeUnit,currentTimeUnitLarge;if(Z1V.C3m(timeUnit,STX.MILLISECOND)){currentTimeUnit=dtShifted.getMilliseconds();currentTimeUnitLarge=dtShifted.getSeconds();}
else if(Z1V.b3m(timeUnit,STX.SECOND)){currentTimeUnit=dtShifted.getSeconds();currentTimeUnitLarge=dtShifted.getMinutes();}
else if(Z1V.z3m(timeUnit,STX.MINUTE)){currentTimeUnit=dtShifted.getMinutes();currentTimeUnitLarge=dtShifted.getHours();}
else if(Z1V.x3m(timeUnit,STX.HOUR)){currentTimeUnit=dtShifted.getHours()+Z1V.P3m(dtShifted.getMinutes(),60);currentTimeUnitLarge=dtShifted.getDate();}
else if(Z1V.a3m(timeUnit,STX.DAY)){currentTimeUnit=dtShifted.getDate();currentTimeUnitLarge=dtShifted.getMonth()+1;}
else if(Z1V.V9m(timeUnit,STX.MONTH)){currentTimeUnit=dtShifted.getMonth()+1;currentTimeUnitLarge=dtShifted.getFullYear();}
else if(Z1V.w9m(timeUnit,STX.YEAR)){currentTimeUnit=dtShifted.getFullYear();currentTimeUnitLarge=dtShifted.getFullYear()+1000;}
else{currentTimeUnit=dtShifted.getFullYear();currentTimeUnitLarge=0;}
var text=null,hz;if(Z1V.l9m(previousTimeUnitLarge,currentTimeUnitLarge)){if(Z1V.U9m(currentTimeUnit,nextTimeUnit)){nextTimeUnit=timeInterval.minTimeUnit;}
hz=chart.left+(Z1V.n9m(i,candleWidth))-1;text=null;if(Z1V.H9m(timeUnit,STX.HOUR)||(Z1V.i9m(timeUnit,STX.MINUTE)&&Z1V.q9m(previousTimeUnitLarge,currentTimeUnitLarge))){if(chart.xAxis.formatter){text=chart.xAxis.formatter(dtShifted,(i5j+x6j+o58+u58),STX.DAY,1);}
else{if(this.internationalizer){text=this.internationalizer.monthDay.format(dtShifted);}
else{text=(dtShifted.getMonth()+1)+"/"+dtShifted.getDate();}
}
}
else if(Z1V.B9m(timeUnit,STX.DAY)){if(Z1V.m9m(previousTimeUnitLarge,currentTimeUnitLarge)){text=dtShifted.getFullYear();}
else{text=STX.monthAsDisplay(dtShifted.getMonth(),false,this);}
}
else if(Z1V.N9m(timeUnit,STX.MONTH)){text=dtShifted.getFullYear();}
if(text&&previousTimeUnitLarge!=-1){axisRepresentation.push(new STXChart.XAxisLabel(hz,"boundary",text));}
}
if(Z1V.O9m(currentTimeUnit,nextTimeUnit)){if(Z1V.y9m(nextTimeUnit,timeInterval.minTimeUnit)){if(Z1V.W9m(currentTimeUnitLarge,previousTimeUnitLarge))continue;}
var labelDate=new Date(dtShifted);hz=chart.left+Z1V.Q9m(((2*i+1)*candleWidth),2)-1;var boundaryTimeUnit=Z1V.f9m(Math.floor(currentTimeUnit/timeUnitMultiplier),timeUnitMultiplier);if(Z1V.I9m(boundaryTimeUnit,currentTimeUnit)){if(Z1V.M9m(this.layout.interval,"week"))boundaryTimeUnit=currentTimeUnit;else hz-=Z1V.S8m(candleWidth,4);}
if(Z1V.u8m(timeUnit,STX.MILLISECOND)){labelDate.setMilliseconds(boundaryTimeUnit);}
else if(Z1V.h8m(timeUnit,STX.SECOND)){labelDate.setMilliseconds(0);labelDate.setSeconds(boundaryTimeUnit);}
else if(Z1V.t8m(timeUnit,STX.MINUTE)){labelDate.setMilliseconds(0);labelDate.setSeconds(0);labelDate.setMinutes(boundaryTimeUnit);}
else if(Z1V.s8m(timeUnit,STX.HOUR)){labelDate.setMilliseconds(0);labelDate.setSeconds(0);labelDate.setMinutes(0);labelDate.setHours(boundaryTimeUnit);}
else if(Z1V.k8m(timeUnit,STX.DAY)){labelDate.setDate(Math.max(1,boundaryTimeUnit));}
else if(Z1V.o8m(timeUnit,STX.MONTH)){labelDate.setDate(1);labelDate.setMonth(Z1V.X8m(boundaryTimeUnit,1));}
else if(Z1V.j8m(timeUnit,STX.YEAR)){labelDate.setDate(1);labelDate.setMonth(0);}
else{labelDate.setDate(1);labelDate.setMonth(0);}
nextTimeUnit=boundaryTimeUnit+timeUnitMultiplier;if(Z1V.D8m(timeUnit,STX.DAY))timeInterval.maxTimeUnit=daysInMonth[labelDate.getMonth()]+1;if(Z1V.K8m(nextTimeUnit,timeInterval.maxTimeUnit))nextTimeUnit=timeInterval.minTimeUnit;previousTimeUnitLarge=currentTimeUnitLarge;if(firstTick&&Z1V.g8m(boundaryTimeUnit,currentTimeUnit))continue;if(chart.xAxis.formatter){text=chart.xAxis.formatter(labelDate,"line",timeUnit,timeUnitMultiplier);}
else{if(Z1V.e8m(timeUnit,STX.DAY)){text=labelDate.getDate();}
else if(Z1V.G8m(timeUnit,STX.MONTH)){text=STX.monthAsDisplay(dtShifted.getMonth(),false,this);}
else if(Z1V.Z8m(timeUnit,STX.YEAR)||Z1V.v8m(timeUnit,STX.DECADE)){text=labelDate.getFullYear();}
else{text=STX.timeAsDisplay(labelDate,this,timeUnit);}
}
axisRepresentation.push(new STXChart.XAxisLabel(hz,"line",text));}
firstTick=false;}
return axisRepresentation;}
;var cached=Z1V.n3j,notcached=Z1V.n3j;STXChart.prototype.createYAxis=function(panel,parameters){var h68="cti",L98="roje";if(this.runPrepend("createYAxis",arguments))return ;var chart=panel.chart,isAChart=(Z1V.T8m(panel.name,chart.name));if(!parameters)parameters={}
;parameters.noChange=false;var yAxis=parameters.yAxis?parameters.yAxis:panel.yAxis;if(STXChart.enableCaching&&Z1V.J0m(yAxis.high,panel.cacheHigh)&&Z1V.r0m(yAxis.low,panel.cacheLow)){var leftTick=Z1V.p0m(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks;panel.cacheLeft=Math.min(panel.cacheLeft,leftTick);panel.cacheRight=Math.max(panel.cacheRight,rightTick);panel.cacheLeft=leftTick;panel.cacheRight=rightTick;parameters.noChange=true;cached++;}
else{panel.cacheLeft=1000000;panel.cacheRight=-1;panel.cacheHigh=yAxis.high;panel.cacheLow=yAxis.low;notcached++;}
var idealX=chart.xAxis.idealTickSizePixels?chart.xAxis.idealTickSizePixels:chart.xAxis.autoComputedTickSizePixels;if(yAxis.goldenRatioYAxis){if(Z1V.E0m(yAxis.idealTickSizePixels,idealX/1.618))parameters.noChange=false;}
if(!parameters.noChange){var height=yAxis.height=Z1V.A0m(yAxis.bottom,yAxis.top),pricePerPix=Z1V.F0m((yAxis.high-yAxis.low),(height-yAxis.zoom));if(parameters.ground&&!yAxis.semiLog){yAxis.high=(Z1V.L0m(yAxis.high,yAxis.low))+Z1V.Y0m(yAxis.zoom,pricePerPix);yAxis.low=0;}
else{yAxis.high=yAxis.high+Z1V.c0m((yAxis.zoom/2),pricePerPix)+Z1V.R0m(yAxis.scroll,pricePerPix);var unadjustedLow=yAxis.low;yAxis.low=Z1V.d0m(yAxis.low,(yAxis.zoom/2)*pricePerPix,yAxis.scroll*pricePerPix);if(yAxis.semiLog&&Z1V.g0m(yAxis.low,0))yAxis.low=unadjustedLow;}
if(yAxis.min||Z1V.e0m(yAxis.min,0))yAxis.low=yAxis.min;if(yAxis.max||Z1V.G0m(yAxis.max,0))yAxis.high=yAxis.max;yAxis.shadow=Z1V.Z0m(yAxis.high,yAxis.low);if(yAxis.semiLog&&(!this.activeDrawing||Z1V.v0m(this.activeDrawing.name,"projection"))){yAxis.logHigh=Z1V.T0m(Math.log(yAxis.high),Math.LN10);var semilow=Math.max(yAxis.low,0.000000001);yAxis.logLow=Z1V.J5m(Math.log(semilow),Math.LN10);if(Z1V.r5m(yAxis.low,0))yAxis.logLow=0;yAxis.logShadow=Z1V.p5m(yAxis.logHigh,yAxis.logLow);}
var fontHeight;if(yAxis.goldenRatioYAxis&&isAChart){yAxis.idealTickSizePixels=Z1V.E5m(idealX,1.618);if(Z1V.A5m(yAxis.idealTickSizePixels,0)){fontHeight=this.getCanvasFontSize("stx_yaxis");yAxis.idealTickSizePixels=Z1V.F5m(fontHeight,5);}
}
else{if(!yAxis.idealTickSizePixels){fontHeight=this.getCanvasFontSize("stx_yaxis");if(isAChart){yAxis.idealTickSizePixels=Z1V.L5m(fontHeight,5);}
else{yAxis.idealTickSizePixels=Z1V.Y5m(fontHeight,2);}
}
}
var idealTicks=Math.round(Z1V.c5m(height,yAxis.idealTickSizePixels)),shadow=parameters.range?Z1V.R5m(parameters.range[1],parameters.range[0]):yAxis.shadow;yAxis.priceTick=Math.floor(Z1V.d5m(shadow,idealTicks));var n=1;for(var zz=0;Z1V.C5m(zz,10);zz++){if(Z1V.b5m(yAxis.priceTick,0))break;n*=10;yAxis.priceTick=Z1V.z5m(Math.floor(shadow/idealTicks*n),n);}
if(Z1V.x5m(zz,10))yAxis.priceTick=0.00000001;yAxis.priceTick=Z1V.P5m(Math.round(shadow/idealTicks*n),n);var verticalTicks=Math.round(Z1V.a5m(shadow,yAxis.priceTick));if(parameters.range&&Z1V.V6m(verticalTicks,shadow)&&!yAxis.noEvenDivisorTicks){while(Z1V.w6m(verticalTicks,1)){if(Z1V.l6m(shadow%verticalTicks,0))break;verticalTicks--;}
yAxis.priceTick=Z1V.U6m(shadow,verticalTicks);}
if(yAxis.minimumPriceTick){var yAxisPriceTick=yAxis.minimumPriceTick;fontHeight=this.getCanvasFontSize("stx_yaxis");for(var i=0;Z1V.n6m(i,100);i++){var numberOfTicks=Z1V.H6m(shadow,yAxisPriceTick);if(Z1V.i6m(height/numberOfTicks,fontHeight*2))yAxisPriceTick+=yAxis.minimumPriceTick;else break;}
if(Z1V.q6m(i,100))yAxis.priceTick=yAxisPriceTick;}
yAxis.multiplier=Z1V.B6m(yAxis.height,yAxis.shadow);}
if(!this.activeDrawing||Z1V.m6m(this.activeDrawing.name,(Z1V.s78+L98+h68+J38+Q78))){yAxis.high=this.valueFromPixel(panel.top,panel,yAxis);if(yAxis.semiLog){yAxis.logHigh=Z1V.N6m(Math.log(yAxis.high),Math.LN10);var semilow2=Math.max(yAxis.low,0.00000000001);yAxis.logLow=Z1V.O6m(Math.log(semilow2),Math.LN10);yAxis.logShadow=Z1V.y6m(yAxis.logHigh,yAxis.logLow);}
yAxis.shadow=Z1V.W6m(yAxis.high,yAxis.low);}
yAxis.multiplier=Z1V.Q6m(yAxis.height,yAxis.shadow);if(!yAxis.decimalPlaces&&Z1V.f6m(yAxis.decimalPlaces,0)){if(isAChart){var labelDecimalPlaces=0;for(var j=0;Z1V.I6m(j,panel.yAxis.shadowBreaks.length);j++){var brk=panel.yAxis.shadowBreaks[j];if(Z1V.M6m(panel.yAxis.shadow,brk[0]))labelDecimalPlaces=brk[1];}
yAxis.printDecimalPlaces=labelDecimalPlaces;}
else yAxis.printDecimalPlaces=null;}
else{yAxis.printDecimalPlaces=yAxis.decimalPlaces;}
this.runAppend("createYAxis",arguments);}
;STXChart.prototype.drawYAxis=function(panel,parameters){if(!parameters)parameters={}
;var yAxis=parameters.yAxis?parameters.yAxis:panel.yAxis;if(yAxis.pretty)return this.drawYAxisPretty(panel,parameters);if(this.runPrepend(j1j,arguments))return ;if(!parameters.noDraw&&!yAxis.noDraw){if(!yAxis.yAxisPlotter||!parameters.noChange){var chart=panel.chart,isAChart=(Z1V.S1m(panel.name,chart.name)&&Z1V.u1m(yAxis,panel.yAxis));if(!yAxis.priceTick)return ;var shadow=yAxis.shadow;if(parameters.range){shadow=Z1V.h1m(parameters.range[Z1V.E3j],parameters.range[Z1V.n3j]);}
var verticalTicks=Z1V.t1m(shadow,yAxis.priceTick);verticalTicks=Math.round(verticalTicks);var logStart,logPriceTick;if(yAxis.semiLog){logStart=Z1V.s1m(Math.log(this.valueFromPixel(yAxis.bottom,panel)),Math.LN10);logPriceTick=Z1V.k1m((yAxis.logHigh-yAxis.logLow),verticalTicks);}
var textStyle=yAxis.textStyle?yAxis.textStyle:j9j;yAxis.yAxisPlotter=new STX.Plotter();yAxis.yAxisPlotter.newSeries(w08,y8j,this.canvasStyle((q6j)));yAxis.yAxisPlotter.newSeries(U28,f0j,this.colorOrStyle(textStyle));yAxis.yAxisPlotter.newSeries(H18,y8j,this.canvasStyle(P8j));var priceOffset=Z1V.n3j,high=parameters.range?parameters.range[Z1V.E3j]:yAxis.high,low=parameters.range?parameters.range[Z1V.n3j]:yAxis.low,drawBorders=(Z1V.o1m(yAxis.displayBorder,Z1V.z38)?chart.panel.yAxis.displayBorder:yAxis.displayBorder);if(Z1V.X1m(this.axisBorders,X58))drawBorders=X58;if(Z1V.j1m(this.axisBorders,I38))drawBorders=I38;var edgeOfAxis,position=(Z1V.D1m(yAxis.position,Z1V.z38)?chart.panel.yAxis.position:yAxis.position);if(Z1V.K1m(position,b88)){edgeOfAxis=yAxis.left+yAxis.width;}
else{edgeOfAxis=yAxis.left;}
var borderEdge=Math.round(edgeOfAxis)+l1j,tickWidth=drawBorders?Z1V.l3j:Z1V.n3j;if(Z1V.g1m(position,b88))tickWidth=drawBorders?-Z1V.l3j:Z1V.n3j;if(isAChart)if(Z1V.e1m(yAxis.shadow,Z1V.E3j)){priceOffset=Z1V.G1m(((parseInt(low/yAxis.priceTick)+Z1V.E3j)*yAxis.priceTick),low);}
else{priceOffset=Z1V.Z1m(yAxis.priceTick,Math.round((low%yAxis.priceTick)*panel.chart.roundit)/panel.chart.roundit);}
else priceOffset=Z1V.v1m(high,yAxis.priceTick);var fontHeight=this.getCanvasFontSize(j9j);for(var i=Z1V.n3j;Z1V.T1m(i,verticalTicks);i++){var price;if(yAxis.semiLog){var logPrice=logStart+(Z1V.J4N(i,logPriceTick));price=Math.pow(i08,logPrice);}
else{if(isAChart)price=low+Z1V.r4N(i,yAxis.priceTick)+priceOffset;else price=Z1V.p4N(high,(i*yAxis.priceTick),priceOffset);}
var y=this.pixelFromPrice(price,panel,yAxis),y2=Math.round(y)+l1j;if(Z1V.t4N((y2+fontHeight/Z1V.h3j),panel.bottom))continue;if(Z1V.s4N((y2-fontHeight/Z1V.h3j),panel.top))continue;if(yAxis.displayGridLines){yAxis.yAxisPlotter.moveTo("grid",panel.left,y2);yAxis.yAxisPlotter.lineTo("grid",panel.right,y2);}
if(drawBorders){yAxis.yAxisPlotter.moveTo("border",Z1V.k4N(borderEdge,0.5),y2);yAxis.yAxisPlotter.lineTo("border",borderEdge+tickWidth,y2);}
if(yAxis.priceFormatter){price=yAxis.priceFormatter(this,panel,price);}
else{price=this.formatYAxisPrice(price,panel,Z1V.z38,yAxis);}
var backgroundColor=yAxis.textBackground?this.containerColor:Z1V.z38,textXPosition=edgeOfAxis+tickWidth+Z1V.l3j;if(Z1V.o4N(position,b88)){textXPosition=yAxis.left+Z1V.l3j;if(yAxis.justifyRight)textXPosition=yAxis.left+yAxis.width+tickWidth-3;}
else{if(yAxis.justifyRight)textXPosition=edgeOfAxis+yAxis.width;}
yAxis.yAxisPlotter.addText(U28,price,textXPosition,y2,backgroundColor,Z1V.z38,fontHeight);}
if(drawBorders){var b=Math.round(yAxis.bottom)+l1j;yAxis.yAxisPlotter.moveTo("border",borderEdge,yAxis.top);yAxis.yAxisPlotter.lineTo("border",borderEdge,b);yAxis.yAxisPlotter.draw(this.chart.context,H18);}
}
this.plotYAxisGrid(panel);}
this.runAppend(j1j,arguments);}
;STXChart.prototype.drawYAxisPretty=function(panel,parameters){var C8j="eached",Y68="io",C68="ssert",M3j="sPr",O28="xi",A98="rawYA",k98="rid",b28="oke",U88="tr";if(this.runPrepend("drawYAxis",arguments))return ;if(!parameters)parameters={}
;var yAxis=parameters.yAxis?parameters.yAxis:panel.yAxis;if(!parameters.noDraw&&!yAxis.noDraw){if(!yAxis.yAxisPlotter||!parameters.noChange){var chart=panel.chart,isAChart=(Z1V.X4N(panel.name,chart.name)&&Z1V.j4N(yAxis,panel.yAxis));if(!yAxis.priceTick)return ;if(isNaN(yAxis.high)||isNaN(yAxis.low))return ;var shadow=yAxis.shadow;if(parameters.range){shadow=Z1V.D4N(parameters.range[1],parameters.range[0]);}
var verticalTicks=Z1V.K4N(yAxis.height,yAxis.idealTickSizePixels);verticalTicks=Math.round(verticalTicks);var textStyle=yAxis.textStyle?yAxis.textStyle:"stx_yaxis";yAxis.yAxisPlotter=new STX.Plotter();yAxis.yAxisPlotter.newSeries("grid",(T28+U88+b28),this.canvasStyle("stx_grid"));yAxis.yAxisPlotter.newSeries("text","fill",this.colorOrStyle(textStyle));yAxis.yAxisPlotter.newSeries("border","stroke",this.canvasStyle("stx_grid_border"));var priceOffset=0,high=parameters.range?parameters.range[1]:yAxis.high,low=parameters.range?parameters.range[0]:yAxis.low,drawBorders=(Z1V.g4N(yAxis.displayBorder,null)?chart.panel.yAxis.displayBorder:yAxis.displayBorder);if(Z1V.e4N(this.axisBorders,false))drawBorders=false;if(Z1V.G4N(this.axisBorders,true))drawBorders=true;var edgeOfAxis,position=(Z1V.Z4N(yAxis.position,null)?chart.panel.yAxis.position:yAxis.position);if(Z1V.v4N(position,"left")){edgeOfAxis=yAxis.left+yAxis.width;}
else{edgeOfAxis=yAxis.left;}
var borderEdge=Math.round(edgeOfAxis)+0.5,tickWidth=drawBorders?3:0;if(Z1V.T4N(position,"left"))tickWidth=drawBorders?-3:0;var fontHeight=this.getCanvasFontSize("stx_yaxis"),increments=yAxis.increments,l=increments.length,p=0,n=1,inc=0,closest=0,pow=0,diff=Number.MAX_VALUE;for(var z=0;Z1V.J2N(z,100);z++){inc=Z1V.r2N(increments[p],Math.pow(10,pow));n=Math.floor(Z1V.p2N(shadow,inc));var newDiff=Math.abs(Z1V.E2N(verticalTicks,n));if(Z1V.A2N(newDiff,diff)){break;}
else{diff=newDiff;}
if(Z1V.F2N(n,verticalTicks)){closest=inc;break;}
else if(Z1V.L2N(n,verticalTicks)){p++;if(Z1V.Y2N(p,l)){p=0;pow++;}
}
else{p--;if(Z1V.c2N(p,0)){p=Z1V.R2N(l,1);pow--;}
}
closest=inc;}
var lowLabel=Z1V.d2N(Math.ceil(low/closest),closest),i=0;for(var zz=0;Z1V.C2N(zz,100);zz++){var price=lowLabel+Z1V.b2N(i,closest);if(Z1V.z2N(price,high))break;i++;var y=this.pixelFromPrice(price,panel,yAxis),y2=Math.round(y)+0.5;if(Z1V.x2N((y2+fontHeight/2),panel.bottom))continue;if(Z1V.P2N((y2-fontHeight/2),panel.top))continue;if(yAxis.displayGridLines){yAxis.yAxisPlotter.moveTo("grid",panel.left,y2);yAxis.yAxisPlotter.lineTo((Z98+k98),panel.right,y2);}
if(drawBorders){yAxis.yAxisPlotter.moveTo("border",Z1V.a2N(borderEdge,0.5),y2);yAxis.yAxisPlotter.lineTo("border",borderEdge+tickWidth,y2);}
if(yAxis.priceFormatter){price=yAxis.priceFormatter(this,panel,price);}
else{price=this.formatYAxisPrice(price,panel,null,yAxis);}
var backgroundColor=yAxis.textBackground?this.containerColor:null,textXPosition=edgeOfAxis+tickWidth+3;if(Z1V.V7N(position,"left")){textXPosition=yAxis.left+3;if(yAxis.justifyRight)textXPosition=yAxis.left+yAxis.width+tickWidth-3;}
else{if(yAxis.justifyRight)textXPosition=edgeOfAxis+yAxis.width;}
yAxis.yAxisPlotter.addText("text",price,textXPosition,y2,backgroundColor,null,fontHeight);}
if(Z1V.w7N(zz,100)){console.log((b5j+A98+O28+M3j+M5j+x88+Z1V.N68+f08+m5j+C68+Y68+Q78+s6j+M5j+g28+g28+J38+g28+W88+F68+F68+s6j+g28+C8j+s6j+T78+x38));}
if(drawBorders){var b=Math.round(yAxis.bottom)+0.5;yAxis.yAxisPlotter.moveTo("border",borderEdge,yAxis.top);yAxis.yAxisPlotter.lineTo("border",borderEdge,b);yAxis.yAxisPlotter.draw(this.chart.context,"border");}
}
this.plotYAxisGrid(panel);}
this.runAppend("drawYAxis",arguments);}
;STXChart.prototype.plotYAxisGrid=function(panel){var p88="plotYAxisGrid";if(this.runPrepend(p88,arguments))return ;var context=this.chart.context;panel.yAxis.yAxisPlotter.draw(context,w08);this.runAppend(p88,arguments);}
;STXChart.prototype.plotYAxisText=function(panel){if(this.runPrepend("plotYAxisText",arguments))return ;var arr=panel.yaxisLHS.concat(panel.yaxisRHS);for(var i=0;Z1V.l7N(i,arr.length);i++){var yAxis=arr[i];if(!yAxis.yAxisPlotter)continue;if(yAxis.noDraw)continue;this.canvasFont("stx_yaxis");this.canvasColor("stx_yaxis");var context=this.chart.context;context.textBaseline="middle";if(yAxis.justifyRight)context.textAlign="right";else context.textAlign="left";var fontHeight=this.getCanvasFontSize("stx_yaxis");yAxis.yAxisPlotter.draw(context,"text");context.textBaseline="alphabetic";context.textAlign="left";}
this.runAppend("plotYAxisText",arguments);}
;STXChart.prototype.formatYAxisPrice=function(price,panel,requestedDecimalPlaces,yAxis){if(Z1V.U7N(price,null)||typeof price=="undefined")return "";var yax=yAxis?yAxis:panel.yAxis,decimalPlaces=requestedDecimalPlaces;if(!decimalPlaces&&Z1V.n7N(decimalPlaces,0))decimalPlaces=yax.printDecimalPlaces;if(!decimalPlaces&&Z1V.H7N(decimalPlaces,0)){if(Z1V.i7N(yax.priceTick,0.01))decimalPlaces=4;else if(Z1V.q7N(yax.priceTick,0.1))decimalPlaces=2;else if(Z1V.B7N(yax.priceTick,1))decimalPlaces=1;else decimalPlaces=0;}
if(Z1V.m7N(panel.name,panel.chart.name)){if(Z1V.N7N(yax.priceTick,100)){return STX.condenseInt(price);}
}
if(this.internationalizer){if(Z1V.O7N(decimalPlaces,this.internationalizer.priceFormatters.length))decimalPlaces=Z1V.y7N(this.internationalizer.priceFormatters.length,1);price=this.internationalizer.priceFormatters[decimalPlaces].format(price);}
else{price=price.toFixed(decimalPlaces);}
return price;}
;STXChart.prototype.formatPrice=function(price,panel){if(!price||typeof price=="undefined")return "";if(!panel)panel=this.currentPanel;if(!panel)panel=this.chart.panel;if(!panel)return price;var decimalPlaces=panel.decimalPlaces;if(!decimalPlaces&&Z1V.W7N(decimalPlaces,0)){decimalPlaces=panel.chart.decimalPlaces;}
if(!decimalPlaces&&Z1V.Q7N(decimalPlaces,0)){return price;}
if(this.internationalizer){if(Z1V.f7N(decimalPlaces,this.internationalizer.priceFormatters.length))decimalPlaces=Z1V.I7N(this.internationalizer.priceFormatters.length,1);price=this.internationalizer.priceFormatters[decimalPlaces].format(price);}
else{price=price.toFixed(decimalPlaces);}
return price;}
;STXChart.prototype.createCrosshairs=function(){var F8j="createCrosshairs",E8j="air",j5j="ss",r5j="Cro",A78="reat";if(this.runPrepend((V6j+A78+M5j+r5j+j5j+Z1V.h98+E8j+T28),arguments))return ;if(this.controls.crossX.onmousedown)return ;this.controls.crossY.onmousedown=function(e){if(!e)e=event;if(e.preventDefault)e.preventDefault();return X58;}
;this.controls.crossX.onmousedown=function(e){if(!e)e=event;if(e.preventDefault)e.preventDefault();return X58;}
;this.runAppend(F8j,arguments);}
;STXChart.prototype.determineMinMax=function(quotes,fields,sum,bypassTransform,length){var highValue=Number.MAX_VALUE*-1,lowValue=Number.MAX_VALUE,isTransform=false,l=quotes.length;if(length)l=length;for(var i=0;Z1V.M7N(i,l);i++){var quote=quotes[i];if(!quote)continue;if(!bypassTransform){if(quote.transform){isTransform=true;quote=quote.transform;}
else if(isTransform)continue;}
var acc=0;for(var j=0;Z1V.S3N(j,fields.length);j++){var f=quote[fields[j]];if(!f)continue;if(typeof (f)=="number")f=[f];for(var v=0;Z1V.u3N(v,f.length);v++){var val=f[v];if(val||Z1V.h3N(val,0)){if(sum){acc+=val;if(Z1V.t3N(acc,highValue))highValue=acc;if(Z1V.s3N(acc,lowValue))lowValue=acc;}
else{if(Z1V.k3N(val,highValue))highValue=val;if(Z1V.o3N(val,lowValue))lowValue=val;}
}
}
}
}
if(highValue==Number.MAX_VALUE*-1)highValue=0;if(Z1V.X3N(lowValue,Number.MAX_VALUE))lowValue=0;return [lowValue,highValue];}
;STXChart.prototype.calculateYAxisRange=function(panel,yAxis,low,high){if(Z1V.j3N(low,Number.MAX_VALUE)){low=0;high=0;}
var cheight=panel.height,newHigh=null,newLow=null;if(!yAxis.bottomOffset)yAxis.bottomOffset=this.xaxisHeight;yAxis.bottom=Z1V.D3N(panel.bottom,yAxis.bottomOffset);yAxis.top=panel.top;yAxis.height=Z1V.K3N(yAxis.bottom,yAxis.top);var verticalPad=Math.round(Math.abs(Z1V.g3N(cheight,5)));if(Z1V.e3N(cheight-Math.abs(yAxis.scroll),verticalPad)){yAxis.scroll=(Z1V.G3N(cheight,verticalPad))*(Z1V.Z3N(yAxis.scroll,0)?-1:1);}
var pricePerPix=Z1V.v3N((high-low),yAxis.height);if(low||Z1V.T3N(low,0)){if(Z1V.J9N(high-low,0)){newHigh=Z1V.r9N(high,2);newLow=0;}
else{if((this.layout.semiLog||Z1V.p9N(this.layout.chartScale,"log"))&&newHigh){var logLow=Z1V.E9N(Math.log(low),Math.LN10),logHigh=Z1V.A9N(Math.log(high),Math.LN10);newHigh=Math.pow(10,logHigh);newLow=Math.pow(10,logLow);}
else{newHigh=high;newLow=low;}
}
yAxis.high=newHigh;yAxis.low=newLow;}
if(yAxis.max||Z1V.F9N(yAxis.max,0))yAxis.high=yAxis.max;if(yAxis.min||Z1V.L9N(yAxis.min,0))yAxis.low=yAxis.min;yAxis.shadow=Z1V.Y9N(yAxis.high,yAxis.low);if(Z1V.c9N(panel.chart.name,panel.name)&&Z1V.R9N(panel.yAxis,yAxis)){var isLogScale=(this.layout.semiLog||Z1V.d9N(this.layout.chartScale,"log"));if(panel.chart.isComparison)isLogScale=false;if(Z1V.C9N(yAxis.semiLog,isLogScale)){this.clearPixelCache();yAxis.semiLog=isLogScale;}
}
}
;STXChart.prototype.renderYAxis=function(chart){if(this.runPrepend("renderYAxis",arguments))return ;var panel=chart.panel,arr=panel.yaxisRHS.concat(panel.yaxisLHS),i;for(i=0;Z1V.b9N(i,arr.length);i++){var yAxis=arr[i],low=null,high=null;if(Z1V.z9N(panel.yAxis,yAxis)){low=chart.lowValue;high=chart.highValue;}
this.calculateYAxisRange(panel,yAxis,low,high);}
var parameters={}
;for(i=0;Z1V.x9N(i,arr.length);i++){parameters.yAxis=arr[i];this.createYAxis(panel,parameters);this.drawYAxis(panel,parameters);}
this.runAppend("renderYAxis",arguments);}
;STXChart.prototype.initializeDisplay=function(chart){if(this.runPrepend("initializeDisplay",arguments))return ;var fields=[];for(var field in chart.series){if(chart.series[field].parameters.shareYAxis)fields.push(field);}
var panel=chart.panel=this.panels[chart.name],minMax,length=null,ticksOnScreen=Math.floor(Z1V.P9N((chart.width-this.micropixels),this.layout.candleWidth));if(Z1V.a9N(chart.scroll,chart.maxTicks)&&Z1V.V8N(chart.maxTicks,ticksOnScreen+1))length=Z1V.w8N(chart.dataSegment.length,1);if(!STXChart.chartShowsHighs(this.layout.chartType)){fields.push("Close");minMax=this.determineMinMax(chart.dataSegment,fields,null,null,length);if(Z1V.l8N(this.layout.chartType,"baseline_delta")){var base=chart.baseline.actualLevel;if(chart.transformFunc)base=chart.transformFunc(this,chart,base);var diff=Math.max(Z1V.U8N(base,minMax[0]),Z1V.n8N(minMax[1],base));if(this.repositioningBaseline){minMax=[chart.lowValue,chart.highValue];}
else{minMax[0]=Z1V.H8N(base,diff);minMax[1]=base+diff;}
}
}
else{fields.push("Close","High","Low");minMax=this.determineMinMax(chart.dataSegment,fields,null,null,length);}
chart.lowValue=minMax[0];chart.highValue=minMax[1];this.runAppend("initializeDisplay",arguments);}
;STXChart.prototype.computePosition=function(x,offset){if(typeof offset==B3j)offset=Z1V.n3j;var position=Z1V.i8N(x,this.layout.candleWidth)+offset+this.micropixels;return position;}
;STXChart.prototype.computeColor=function(open,close){var U48="ca";if(Z1V.q8N(open,close))return (g5j+U38+U48+Q78+b5j+o28+P6j+Z1V.F28+Z1V.s78);if(Z1V.B8N(open,close))return x3j;return g38;}
;STXChart.prototype.computeLength=function(high,low){var h=this.pixelFromPrice(high),l=this.pixelFromPrice(low);return Z1V.m8N(l,h);}
;STXChart.prototype.setSeriesRenderer=function(renderer){var params=renderer.params;if(this.chart.seriesRenderers[renderer.params.name])return this.chart.seriesRenderers[renderer.params.name];if(params.yAxis){this.addYAxis(this.panels[params.panel],params.yAxis);}
renderer.stx=this;this.chart.seriesRenderers[renderer.params.name]=renderer;return renderer;}
;STXChart.prototype.removeSeriesRenderer=function(renderer){for(var r in this.chart.seriesRenderers){if(Z1V.N8N(renderer.params.name,this.chart.seriesRenderers[r].params.name)){var toDelete=this.chart.seriesRenderers[renderer.params.name],yAxis=toDelete.params.yAxis,panel=this.panels[toDelete.params.panel];delete  this.chart.seriesRenderers[renderer.params.name];this.deleteYAxisIfUnused(panel,yAxis);return ;}
}
}
;STXChart.prototype.getSeriesRenderer=function(name){return this.chart.seriesRenderers[name];}
;STXChart.prototype.drawHistogram=function(params,seriesParams){if(!seriesParams||!seriesParams.length)return ;var panelName=params.panel;if(!panelName)panelName="chart";var c=this.panels[panelName];if(!c)return ;var yAxis=params.yAxis?params.yAxis:c.yAxis,b=Math.floor(yAxis.bottom)+0.5,t=Math.floor(yAxis.top)+0.5,type=params.type;if(Z1V.O8N(type,"histogram"))type=params.subtype;var quotes=this.chart.dataSegment,bordersOn=false;this.getDefaultColor();var sp;for(sp=0;Z1V.y8N(sp,seriesParams.length);sp++){bordersOn|=(seriesParams[sp].border_color_up&&!STX.isTransparent(seriesParams[sp].border_color_up));bordersOn|=(seriesParams[sp].border_color_down&&!STX.isTransparent(seriesParams[sp].border_color_down));}
if(!params.name)params.name="Data";var multiplier=yAxis.multiplier;if(!params.heightPercentage)params.heightPercentage=0.7;if(!params.widthFactor)params.widthFactor=0.8;if(!params.bindToYAxis){var histMax=0;if(!histMax){for(var i=0;Z1V.W8N(i,this.chart.maxTicks);i++){var prices=quotes[i];if(!prices)continue;var total=0;for(sp=0;Z1V.Q8N(sp,seriesParams.length);sp++){if(prices[seriesParams[sp].field]){if(Z1V.f8N(params.subtype,"stacked"))total+=prices[seriesParams[sp].field];else total=Math.max(total,prices[seriesParams[sp].field]);}
}
if(Z1V.I8N(total,histMax))histMax=total;}
if(Z1V.M8N(histMax,0)){this.watermark(panelName,"center","bottom",this.translateIf(params.name+" Not Available"));return ;}
}
multiplier=Z1V.S0N((b-t),params.heightPercentage,histMax);}
var offset=0.5;if(Z1V.l0N(this.layout.candleWidth,1)||!bordersOn)offset=0;this.startClip(panelName);var context=this.chart.context,shaveOff=Math.max(0,Z1V.U0N((1-params.widthFactor),this.layout.candleWidth,2)),tops={}
,bottoms={}
,self=this,candleWidth=1;function drawBars(field,color,opacity,isBorder,isUp,shift,candleWidth){var Z3j="uto";if(!opacity)opacity=1;if(STX.isIE8)context.globalAlpha=0.5;else context.globalAlpha=opacity;context.beginPath();var prevTop=b+0.5,farLeft=Math.floor(Z1V.A0N(self.pixelFromBar(0,c.chart),self.layout.candleWidth/2)),prevRight=farLeft;for(var i=0;Z1V.F0N(i,quotes.length);i++){var bottom=bottoms[i];if(!bottom)bottom=b;if(Z1V.L0N(i,0))prevTop=bottom;var quote=quotes[i];if(!quote||!quote[field]){prevTop=bottom;prevRight+=self.layout.candleWidth;continue;}
var y=Z1V.Y0N(quote[field],multiplier);if(isNaN(y))continue;var myCandleWidth=self.layout.candleWidth;if(quote.candleWidth){myCandleWidth=quote.candleWidth;if(Z1V.c0N(i,0))farLeft=prevRight=Math.floor(Z1V.R0N(self.pixelFromBar(0,c.chart),quote.candleWidth/2));}
var top=Math.min(Math.floor(Z1V.d0N(bottom,y))+0.5,bottom);if(isUp){if(Z1V.C0N(quote.Close,quote.iqPrevClose)){prevTop=top;prevRight+=myCandleWidth;continue;}
}
else{if(Z1V.b0N(quote.Close,quote.iqPrevClose)){prevTop=top;prevRight+=myCandleWidth;continue;}
}
var x0,x1,variableWidthRatio=Z1V.z0N(myCandleWidth,self.layout.candleWidth),start=prevRight+Z1V.x0N((shaveOff+shift*candleWidth),variableWidthRatio);x0=Math.round(start)+(isBorder?0:offset);x1=Z1V.P0N(Math.round(start+candleWidth*variableWidthRatio),(isBorder?0:offset));if(Z1V.a0N(x1-x0,2))x1=x0+1;if(isBorder)roundPixel=0;else roundPixel=0.5;if(Z1V.V5N(x0%1,roundPixel))x0+=0.5;if(Z1V.w5N(x1%1,roundPixel))x1+=0.5;context.moveTo(x0,bottom);if(Z1V.l5N(b,bottom)){context.lineTo(x1,bottom);}
else{context.moveTo(x1,bottom);if(isBorder&&!shaveOff){if(bottoms[i+1])context.moveTo(x1,Math.max(top,Math.min(bottom,bottoms[i+1])));}
}
context.lineTo(x1,top);context.lineTo(x0,top);if(isBorder&&shift){if(Z1V.U5N(tops[i],top)||Z1V.n5N(i,0))context.lineTo(x0,Math.min(bottom,tops[i]));}
else if(isBorder&&!shaveOff&&Z1V.H5N(type,"clustered")){if(Z1V.i5N(i,0)&&tops[Z1V.q5N(i,1)]&&Z1V.B5N(tops[i-1],top))context.lineTo(x0,Math.min(bottom,tops[Z1V.m5N(i,1)]));}
else if(isBorder&&!shaveOff){if(Z1V.N5N(prevTop,top)||Z1V.O5N(i,0))context.lineTo(x0,Math.min(bottom,prevTop));}
else{context.lineTo(x0,bottom);}
prevTop=top;prevRight+=myCandleWidth;if(Z1V.y5N(type,"clustered")||isBorder)tops[i]=top;}
if(!color)color=(m5j+Z3j);if(isBorder){context.strokeStyle=Z1V.W5N(color,"auto")?self.defaultColor:color;context.stroke();}
else{context.fillStyle=Z1V.Q5N(color,"auto")?self.defaultColor:color;context.fill();}
context.closePath();}
for(sp=0;Z1V.f5N(sp,seriesParams.length);sp++){var param=seriesParams[sp];candleWidth=Z1V.I5N(this.layout.candleWidth,params.widthFactor);var shift=0;if(Z1V.M5N(type,"clustered")){shift=sp;candleWidth/=seriesParams.length;}
drawBars(param.field,param.fill_color_up,param.opacity_up,null,true,shift,candleWidth);drawBars(param.field,param.fill_color_down,param.opacity_down,null,null,shift,candleWidth);if(Z1V.S6N(this.layout.candleWidth,2)&&bordersOn){drawBars(param.field,param.border_color_up,param.opacity_up,true,true,shift,candleWidth);drawBars(param.field,param.border_color_down,param.opacity_down,true,null,shift,candleWidth);}
if(Z1V.u6N(type,"stacked"))bottoms=STX.shallowClone(tops);}
context.globalAlpha=1;this.endClip();}
;STXChart.prototype.drawHeatmap=function(params,seriesParams){if(!seriesParams||!seriesParams.length)return ;var panelName=params.panel;if(!panelName)panelName="chart";var c=this.panels[panelName];if(!c)return ;var yAxis=params.yAxis?params.yAxis:c.yAxis,b=Math.floor(yAxis.bottom)+0.5,t=Math.floor(yAxis.top)+0.5,quotes=this.chart.dataSegment;this.getDefaultColor();if(!params.name)params.name="Data";if(!params.widthFactor)params.widthFactor=1;var offset=0.5;if(Z1V.h6N(c.chart.tmpWidth,1))offset=0;var height=null,halfHeight=null,self=this,lineWidth=null;function drawCells(field,color,isBorder,widthFactor,myoffset){context.beginPath();context.fillStyle=color;context.strokeStyle=color;var t=yAxis.top,b=yAxis.bottom,myCandleWidth=Z1V.t6N(self.layout.candleWidth,widthFactor),xc=Math.floor(Z1V.s6N(self.pixelFromBar(0,c.chart),self.layout.candleWidth)),x0,x1;for(var x=0;Z1V.k6N(x,quotes.length);x++){var quote=quotes[x];if(!quote)continue;if(quote.candleWidth){if(Z1V.o6N(x,0)){xc+=self.layout.candleWidth;}
else{xc+=Z1V.X6N((quote.candleWidth+myCandleWidth/widthFactor),2);}
myCandleWidth=Z1V.j6N(quote.candleWidth,widthFactor);}
else{xc+=self.layout.candleWidth;}
x0=Z1V.D6N(xc,myCandleWidth/2,myoffset);x1=xc+Z1V.O6N(myCandleWidth,2)-myoffset;if(Z1V.y6N(x1-x0,2))x1=x0+1;if(quote.transform)quote=quote.transform;var cellValues=quote[field];if(!cellValues)continue;if(typeof cellValues=="number")cellValues=[cellValues];for(var i=0;Z1V.W6N(i,cellValues.length);i++){var v=self.pixelFromPrice(cellValues[i],c,yAxis);if(!lineWidth){var v1=self.pixelFromPrice(Z1V.Q6N(cellValues[i],params.height),c,yAxis);context.lineWidth=1;height=Z1V.f6N(v1,v);halfHeight=Z1V.I6N(height,2);lineWidth=context.lineWidth;}
if(isBorder){var tc=v+halfHeight,bc=Z1V.M6N(v,halfHeight);context.moveTo(x0,tc);context.lineTo(x0,bc);context.lineTo(x1,bc);context.lineTo(x1,tc);context.lineTo(x0,tc);}
else{context.fillRect(x0,Z1V.S1N(v,halfHeight),Z1V.u1N(x1,x0),height);}
}
}
if(isBorder)context.stroke();context.closePath();}
this.startClip(panelName);var context=this.chart.context;context.globalAlpha=params.opacity;for(var sp=0;Z1V.h1N(sp,seriesParams.length);sp++){var param=seriesParams[sp];drawCells(param.field,param.color,null,params.widthFactor,param.border_color?offset:-offset/4);if(param.border_color&&Z1V.t1N(this.layout.candleWidth,2)){drawCells(param.field,param.border_color,true,params.widthFactor,offset);}
}
context.lineWidth=1;context.globalAlpha=1;this.endClip();}
;STXChart.prototype.startClip=function(panelName,allowYAxis){if(!panelName)panelName="chart";var panel=this.panels[panelName],yAxis=panel.yAxis;this.chart.context.save();this.chart.context.beginPath();var left=panel.left,width=panel.width;if(allowYAxis){left=0;width=this.width;}
this.chart.context.rect(left,panel.top,width,yAxis.height);this.chart.context.clip();}
;STXChart.prototype.endClip=function(){this.chart.context.restore();}
;STXChart.prototype.drawCandlesHighPerformance=function(panel,fillColor,borderColor,condition){var chart=panel.chart,quotes=chart.dataSegment,context=this.chart.context,t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,length,borderOffset=0;if(borderColor&&!STX.isTransparent(borderColor))borderOffset=0.5;var leftTick=Z1V.s1N(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks;context.beginPath();context.fillStyle=fillColor;var yAxis=panel.yAxis,whitespace=Z1V.k1N(chart.tmpWidth,2),candleWidth=this.layout.candleWidth,xbase=Z1V.o1N(panel.left,0.5*candleWidth,this.micropixels,1);for(var x=0;Z1V.c1N(x,quotes.length);x++){xbase+=Z1V.R1N(candleWidth,2);candleWidth=this.layout.candleWidth;xbase+=Z1V.d1N(candleWidth,2);var quote=quotes[x];if(!quote)continue;if(quote.projection)continue;if(quote.candleWidth){xbase+=Z1V.C1N((quote.candleWidth-candleWidth),2);candleWidth=quote.candleWidth;if(Z1V.b1N(this.layout.chartType,"volume_candle"))whitespace=Z1V.z1N(candleWidth,2);}
if(Z1V.x1N(quote.Open,quote.Close))continue;if(Z1V.P1N(condition,STXChart.CANDLEUP)&&Z1V.a1N(quote.Open,quote.Close))continue;if(Z1V.V4S(condition,STXChart.CANDLEDOWN)&&Z1V.w4S(quote.Open,quote.Close))continue;if(Z1V.l4S(condition,STXChart.CLOSEUP)&&Z1V.U4S(quote.Close,quote.iqPrevClose))continue;if(Z1V.n4S(condition,STXChart.CLOSEDOWN)&&Z1V.H4S(quote.Close,quote.iqPrevClose))continue;if(Z1V.i4S(condition,STXChart.CLOSEEVEN)&&Z1V.q4S(quote.Close,quote.iqPrevClose))continue;if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(Z1V.B4S(tick,panel.cacheLeft)||Z1V.m4S(tick,panel.cacheRight)||!cache.open){var o=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(Z1V.N4S((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top),c=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(Z1V.O4S((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);top=Math.floor(Math.min(o,c))+borderOffset;bottom=Math.max(o,c);length=Math.floor(Z1V.y4S(bottom,top));if(Z1V.W4S(top,t)){if(Z1V.Q4S(top+length,t)){cache.open=top;cache.close=top;continue;}
length-=Z1V.f4S(t,top);top=t;}
if(Z1V.I4S(top+length,b)){length-=(top+length-b);}
length=Math.max(length,2);cache.open=top;cache.close=cache.open+length;}
if(Z1V.M4S(cache.open,b))continue;if(Z1V.S2S(cache.close,t))continue;flr_xbase=Math.floor(xbase)+0.5;var xstart=Math.floor(Z1V.u2S(flr_xbase,whitespace))+borderOffset,xend=Z1V.h2S(Math.round(flr_xbase+whitespace),borderOffset);if(Z1V.t2S(quote.Open,quote.Close)){context.moveTo(xstart,cache.open);context.lineTo(xend,cache.open);context.lineTo(xend,cache.close);context.lineTo(xstart,cache.close);context.lineTo(xstart,cache.open);}
}
context.fill();if(borderOffset){context.lineWidth=1;context.strokeStyle=borderColor;context.stroke();}
}
;STXChart.prototype.drawCandles=function(panel,colorFunction,isOutline){var t9j="ar",Z1j="trans",a9j="ndl",a88="lume_c",chart=panel.chart;if(!chart){chart=panel;panel=panel.chart;}
var quotes=chart.dataSegment,context=this.chart.context,t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,length,borderColor="transparent",fillColor="transparent",borderOffset=0;if(!STX.isTransparent(borderColor))borderOffset=0.5;var leftTick=Z1V.s2S(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks,yAxis=panel.yAxis,whitespace=Z1V.k2S(chart.tmpWidth,2),candleWidth=this.layout.candleWidth,xbase=Z1V.o2S(panel.left,0.5*candleWidth,this.micropixels,1);for(var x=0;Z1V.c2S(x,quotes.length);x++){xbase+=Z1V.R2S(candleWidth,2);candleWidth=this.layout.candleWidth;xbase+=Z1V.d2S(candleWidth,2);var quote=quotes[x];if(!quote)continue;if(quote.projection)continue;if(quote.candleWidth){xbase+=Z1V.C2S((quote.candleWidth-candleWidth),2);candleWidth=quote.candleWidth;if(Z1V.b2S(this.layout.chartType,(Z1V.F18+J38+a88+m5j+a9j+M5j)))whitespace=Z1V.z2S(candleWidth,2);}
if(!quote.Open&&Z1V.x2S(quote.Open,0))continue;if(Z1V.P2S(quote.Open,quote.Close))continue;var myColor=colorFunction(this,quote,isOutline?"outline":"solid");if(!myColor)continue;if(isOutline)borderColor=myColor;else fillColor=myColor;context.beginPath();context.fillStyle=fillColor;if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(Z1V.a2S(tick,panel.cacheLeft)||Z1V.V7S(tick,panel.cacheRight)||!cache.open){var o=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(Z1V.w7S((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top),c=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(Z1V.l7S((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);top=Math.floor(Math.min(o,c))+borderOffset;bottom=Math.max(o,c);length=Math.floor(Z1V.U7S(bottom,top));if(Z1V.n7S(top,t)){if(Z1V.H7S(top+length,t)){cache.open=top;cache.close=top;continue;}
length-=Z1V.i7S(t,top);top=t;}
if(Z1V.q7S(top+length,b)){length-=(top+length-b);}
length=Math.max(length,2);cache.open=top;cache.close=cache.open+length;}
if(Z1V.B7S(cache.open,b))continue;if(Z1V.m7S(cache.close,t))continue;flr_xbase=Math.floor(xbase)+0.5;var xstart=Math.floor(Z1V.N7S(flr_xbase,whitespace))+borderOffset,xend=Z1V.O7S(Math.round(flr_xbase+whitespace),borderOffset);if(Z1V.y7S(quote.Open,quote.Close)){context.moveTo(xstart,cache.open);context.lineTo(xend,cache.open);context.lineTo(xend,cache.close);context.lineTo(xstart,cache.close);context.lineTo(xstart,cache.open);}
if(Z1V.W7S(fillColor,(Z1j+Z1V.s78+t9j+t68)))context.fill();if(borderOffset){context.lineWidth=1;context.strokeStyle=borderColor;context.stroke();}
}
}
;STXChart.prototype.drawShadowsHighPerformance=function(panel,style,condition){var chart=panel.chart,quotes=chart.dataSegment,context=this.chart.context;context.lineWidth=1;var t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,left,leftTick=Z1V.Q7S(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks;context.beginPath();var yAxis=panel.yAxis,candleWidth=this.layout.candleWidth,xbase=Z1V.f7S(panel.left,0.5*candleWidth,this.micropixels,1);for(var x=0;Z1V.T7S(x,quotes.length);x++){xbase+=Z1V.J3S(candleWidth,2);candleWidth=this.layout.candleWidth;xbase+=Z1V.r3S(candleWidth,2);var quote=quotes[x];if(!quote)continue;if(quote.projection)continue;if(quote.candleWidth){xbase+=Z1V.p3S((quote.candleWidth-candleWidth),2);candleWidth=quote.candleWidth;}
if(condition){if(Z1V.E3S(condition,STXChart.CANDLEUP)&&Z1V.A3S(quote.Open,quote.Close))continue;else if(Z1V.F3S(condition,STXChart.CANDLEDOWN)&&Z1V.L3S(quote.Open,quote.Close))continue;else if(Z1V.Y3S(condition,STXChart.CLOSEUP)&&Z1V.c3S(quote.Close,quote.iqPrevClose))continue;else if(Z1V.R3S(condition,STXChart.CLOSEDOWN)&&Z1V.d3S(quote.Close,quote.iqPrevClose))continue;else if(Z1V.C3S(condition,STXChart.CLOSEEVEN)&&Z1V.b3S(quote.Close,quote.iqPrevClose))continue;}
if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(Z1V.z3S(tick,panel.cacheLeft)||Z1V.x3S(tick,panel.cacheRight)||!cache.top){top=(yAxis.semiLog?this.pixelFromPrice(quote.High,panel):(Z1V.P3S((yAxis.high-quote.High),yAxis.multiplier))+yAxis.top);bottom=(yAxis.semiLog?this.pixelFromPrice(quote.Low,panel):(Z1V.a3S((yAxis.high-quote.Low),yAxis.multiplier))+yAxis.top);var length=Z1V.V9S(bottom,top);if(Z1V.w9S(top,t)){if(Z1V.l9S(top+length,t)){cache.top=top;cache.bottom=top;continue;}
length-=Z1V.U9S(t,top);top=t;}
if(Z1V.n9S(top+length,b)){length-=(top+length-b);}
cache.top=top;cache.bottom=cache.top+length;}
if(Z1V.H9S(cache.top,b))continue;if(Z1V.i9S(cache.bottom,t))continue;var xx=Math.floor(xbase)+0.5;context.moveTo(xx,cache.top);context.lineTo(xx,cache.bottom);if(Z1V.q9S(quote.Open,quote.Close)){var offset=this.offset;if(Z1V.B9S(this.layout.chartType,"volume_candle")){offset=Z1V.m9S(candleWidth,2);}
var x0=Z1V.N9S(xx,offset),x1=xx+offset,o=Math.floor(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(Z1V.O9S((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top)+0.5;if(Z1V.y9S(o,b)&&Z1V.W9S(o,t)){context.moveTo(x0,o);context.lineTo(x1,o);}
}
}
this.canvasColor(style);context.stroke();}
;STXChart.prototype.drawShadows=function(panel,colorFunction){var chart=panel.chart;if(!chart){chart=panel;panel=panel.chart;}
var quotes=chart.dataSegment,context=this.chart.context;context.lineWidth=1;var t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,left,leftTick=Z1V.Q9S(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks,yAxis=panel.yAxis,candleWidth=this.layout.candleWidth,xbase=Z1V.f9S(panel.left,0.5*candleWidth,this.micropixels,1);for(var x=0;Z1V.T9S(x,quotes.length);x++){xbase+=Z1V.J8S(candleWidth,2);candleWidth=this.layout.candleWidth;xbase+=Z1V.r8S(candleWidth,2);var quote=quotes[x];if(!quote)continue;if(quote.projection)continue;if(quote.candleWidth){xbase+=Z1V.p8S((quote.candleWidth-candleWidth),2);candleWidth=quote.candleWidth;}
var color=colorFunction(this,quote,"shadow");if(!color)continue;if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(Z1V.E8S(tick,panel.cacheLeft)||Z1V.A8S(tick,panel.cacheRight)||!cache.top){top=(yAxis.semiLog?this.pixelFromPrice(quote.High,panel):(Z1V.F8S((yAxis.high-quote.High),yAxis.multiplier))+yAxis.top);bottom=(yAxis.semiLog?this.pixelFromPrice(quote.Low,panel):(Z1V.L8S((yAxis.high-quote.Low),yAxis.multiplier))+yAxis.top);var length=Z1V.Y8S(bottom,top);if(Z1V.c8S(top,t)){if(Z1V.R8S(top+length,t)){cache.top=top;cache.bottom=top;continue;}
length-=Z1V.d8S(t,top);top=t;}
if(Z1V.C8S(top+length,b)){length-=(top+length-b);}
cache.top=top;cache.bottom=cache.top+length;}
if(Z1V.b8S(cache.top,b))continue;if(Z1V.z8S(cache.bottom,t))continue;var xx=Math.floor(xbase)+0.5;context.beginPath();context.moveTo(xx,cache.top);context.lineTo(xx,cache.bottom);if(Z1V.x8S(quote.Open,quote.Close)||(!quote.Open&&Z1V.P8S(quote.Open,0))){var offset=this.offset;if(Z1V.a8S(this.layout.chartType,"volume_candle")){offset=Z1V.V0S(candleWidth,2);}
var x0=Z1V.w0S(xx,offset),x1=xx+offset,o=Math.floor((yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(Z1V.l0S((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top))+0.5;if(Z1V.U0S(o,b)&&Z1V.n0S(o,t)){context.moveTo(x0,o);context.lineTo(x1,o);}
}
context.strokeStyle=color;context.stroke();}
}
;STXChart.prototype.scatter=function(panel){var chart=panel.chart,quotes=chart.dataSegment,context=this.chart.context;context.beginPath();context.lineWidth=4;var t=panel.yAxis.top,b=panel.yAxis.bottom,xbase=Z1V.H0S(panel.left,0.5*this.layout.candleWidth,this.micropixels,1);for(var x=0;Z1V.o0S(x,quotes.length);x++){xbase+=this.layout.candleWidth;var quote=quotes[x];if(!quote)continue;if(!quote.projection){if(quote.transform)quote=quote.transform;var scatter=[quote.Close];if(Z1V.X0S("Scatter",quote))scatter=quote.Scatter;for(var i=0;Z1V.j0S(i,scatter.length);i++){var top=this.pixelFromPrice(scatter[i],panel);if(Z1V.D0S(top,t))continue;if(Z1V.K0S(top,b))continue;context.moveTo(Z1V.g0S(xbase,2),top);context.lineTo(xbase+2,top);}
}
}
this.canvasColor("stx_scatter_chart");context.stroke();context.closePath();context.lineWidth=1;}
;STXChart.prototype.drawKagiSquareWave=function(panel,upStyleName,downStyleName){var chart=panel.chart;this.startClip(panel.name);var quotes=chart.dataSegment,context=chart.context,upStyle=this.canvasStyle(upStyleName),downStyle=this.canvasStyle(downStyleName);this.canvasColor(upStyleName);var upColor=context.strokeStyle;this.canvasColor(downStyleName);var downColor=context.strokeStyle,upWidth=1;if(upStyle.width&&Z1V.e0S(parseInt(upStyle.width,10),25)){upWidth=Math.max(1,STX.stripPX(upStyle.width));}
var downWidth=1;if(downStyle.width&&Z1V.G0S(parseInt(downStyle.width,10),25)){downWidth=Math.max(1,STX.stripPX(downStyle.width));}
context.beginPath();var leftTick=Z1V.Z0S(chart.dataSet.length,chart.scroll),yAxis=panel.yAxis,first=true,previousOpen=null,lastClose=null,trend=null,xbase=Z1V.v0S(panel.left,0.5*this.layout.candleWidth,this.micropixels,1);for(var x=0;Z1V.V5S(x,quotes.length);x++){xbase+=this.layout.candleWidth;var quote=quotes[x];if(!quote)continue;if(quote.projection)break;if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(Z1V.w5S(tick,panel.cacheLeft)||Z1V.l5S(tick,panel.cacheRight)||!cache.open){cache.open=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(Z1V.U5S((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top);cache.close=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(Z1V.n5S((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);}
lastClose=cache.close;if(first){context.moveTo(Math.floor(xbase),cache.open);previousOpen=cache.open;if(Z1V.H5S(cache.close,cache.open))trend=1;else trend=-1;first=false;}
if(trend!=-1&&Z1V.i5S(cache.close,previousOpen)&&Z1V.q5S(previousOpen,cache.open)){context.lineTo(Math.floor(xbase),previousOpen);context.strokeStyle=downColor;context.lineWidth=downWidth;context.stroke();context.closePath();context.beginPath();trend=-1;context.moveTo(Math.floor(xbase),previousOpen);}
else if(Z1V.B5S(trend,1)&&Z1V.m5S(cache.close,previousOpen)&&Z1V.N5S(previousOpen,cache.open)){context.lineTo(Math.floor(xbase),previousOpen);context.strokeStyle=upColor;context.lineWidth=upWidth;context.stroke();context.closePath();context.beginPath();trend=1;context.moveTo(Math.floor(xbase),previousOpen);}
context.lineTo(Math.floor(xbase),cache.close);if(Z1V.O5S(x+1,quotes.length)){context.lineTo(Math.floor(xbase+this.layout.candleWidth),cache.close);previousOpen=cache.open;}
}
if(trend==-1||(Z1V.y5S(trend,null)&&Z1V.W5S(lastClose,previousOpen))){context.strokeStyle=upColor;context.lineWidth=upWidth;}
else{context.strokeStyle=downColor;context.lineWidth=downWidth;}
context.stroke();context.closePath();this.endClip();context.lineWidth=1;}
;STXChart.prototype.drawPointFigureChart=function(panel,style,condition){var chart=panel.chart;this.startClip(panel.name);var quotes=chart.dataSegment,context=chart.context;this.canvasColor(style);var pfstyle=this.canvasStyle(style),paddingTop=parseInt(pfstyle.paddingTop,10),paddingBottom=parseInt(pfstyle.paddingBottom,10),paddingLeft=parseInt(pfstyle.paddingLeft,10),paddingRight=parseInt(pfstyle.paddingRight,10);if(pfstyle.width&&Z1V.Q5S(parseInt(pfstyle.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(pfstyle.width));}
else{context.lineWidth=2;}
context.beginPath();if(!this.chart.pandf)this.chart.pandf={"box":1,"reversal":3}
;var box=this.chart.pandf.box,leftTick=Z1V.f5S(chart.dataSet.length,chart.scroll),yAxis=panel.yAxis,boxes,height,start,candleWidth=this.layout.candleWidth,xbase=Z1V.I5S(panel.left,candleWidth,this.micropixels,1);for(var x=0;Z1V.J6S(x,quotes.length);x++){xbase+=candleWidth;var quote=quotes[x];if(!quote)continue;if(quote.projection)break;if(quote.candleWidth)candleWidth=quote.candleWidth;if(quote.transform)quote=quote.transform;if(Z1V.r6S(condition,"X")&&Z1V.p6S(quote.Open,quote.Close))continue;else if(Z1V.E6S(condition,"O")&&Z1V.A6S(quote.Open,quote.Close))continue;var cache=quote.cache,tick=leftTick+x;if(Z1V.F6S(tick,panel.cacheLeft)||Z1V.L6S(tick,panel.cacheRight)||!cache.open){cache.open=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(Z1V.Y6S((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top);cache.close=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(Z1V.c6S((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);}
var xxl=Math.round(xbase),xxr=Math.round(xbase+candleWidth);boxes=Math.abs(Math.round(Z1V.R6S((quote.Close-quote.Open),box)));height=Math.abs(Z1V.d6S((cache.open-cache.close),boxes));var voffset=Z1V.C6S(height,2);start=cache.open;for(;Z1V.b6S(boxes,0);boxes--){if(Z1V.z6S(condition,"X")){context.moveTo(xxl+paddingLeft,Z1V.x6S(start,paddingBottom,voffset));context.lineTo(Z1V.v6S(xxr,paddingRight),Z1V.T6S(start,height,paddingTop,voffset));context.moveTo(xxl+paddingLeft,Z1V.w1S(start,height,paddingTop,voffset));context.lineTo(Z1V.h1S(xxr,paddingRight),Z1V.t1S(start,paddingBottom,voffset));start-=height;}
else if(Z1V.H1S(condition,"O")){context.moveTo(Z1V.i1S((xxl+xxr),2),start+paddingTop-voffset);context.bezierCurveTo(xxr+paddingRight,start+paddingTop-voffset,xxr+paddingRight,start+height-paddingBottom-voffset,Z1V.q1S((xxl+xxr),2),start+height-paddingBottom-voffset);context.bezierCurveTo(Z1V.B1S(xxl,paddingLeft),start+height-paddingBottom-voffset,Z1V.m1S(xxl,paddingLeft),start+paddingTop-voffset,Z1V.N1S((xxl+xxr),2),start+paddingTop-voffset);start+=height;}
}
}
context.stroke();this.endClip();context.lineWidth=1;}
;STXChart.prototype.drawBarChartHighPerformance=function(panel,style,condition){var chart=panel.chart,quotes=chart.dataSegment,context=chart.context,c=this.canvasStyle(style);if(c.width&&Z1V.O1S(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
context.beginPath();var t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,length,leftTick=Z1V.y1S(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks,yAxis=panel.yAxis,xbase=Z1V.W1S(panel.left,0.5*this.layout.candleWidth,this.micropixels,1),hlen=Z1V.Z1S(chart.tmpWidth,2),voffset=Z1V.v1S(context.lineWidth,2);for(var x=0;Z1V.T1S(x,quotes.length);x++){xbase+=this.layout.candleWidth;var quote=quotes[x];if(!quote)continue;if(quote.projection)break;if(condition){if(Z1V.J4g(condition,STXChart.CLOSEUP)&&Z1V.r4g(quote.Close,quote.iqPrevClose))continue;else if(Z1V.p4g(condition,STXChart.CLOSEDOWN)&&Z1V.E4g(quote.Close,quote.iqPrevClose))continue;else if(Z1V.A4g(condition,STXChart.CLOSEEVEN)&&Z1V.F4g(quote.Close,quote.iqPrevClose))continue;}
if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(Z1V.L4g(tick,panel.cacheLeft)||Z1V.Y4g(tick,panel.cacheRight)||!cache.top){top=(yAxis.semiLog?this.pixelFromPrice(quote.High,panel):(Z1V.c4g((yAxis.high-quote.High),yAxis.multiplier))+yAxis.top);bottom=(yAxis.semiLog?this.pixelFromPrice(quote.Low,panel):(Z1V.R4g((yAxis.high-quote.Low),yAxis.multiplier))+yAxis.top);length=Z1V.d4g(bottom,top);cache.open=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(Z1V.C4g((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top);cache.close=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(Z1V.b4g((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);if(Z1V.z4g(top,t)){if(Z1V.x4g(top+length,t)){cache.top=top;cache.bottom=top;continue;}
length-=Z1V.P4g(t,top);top=t;}
if(Z1V.a4g(top+length,b)){length-=(top+length-b);}
cache.top=top;cache.bottom=top+length;}
var xx=Math.floor(xbase)+0.5;if(Z1V.V2g(cache.top,b)&&Z1V.w2g(cache.bottom,t)){context.moveTo(xx,Z1V.l2g(cache.top,voffset));context.lineTo(xx,cache.bottom+voffset);}
if(Z1V.U2g(cache.open,t)&&Z1V.n2g(cache.open,b)){context.moveTo(xx,cache.open);context.lineTo(Z1V.H2g(xx,hlen),cache.open);}
if(Z1V.i2g(cache.close,t)&&Z1V.q2g(cache.close,b)){context.moveTo(xx,cache.close);context.lineTo(xx+hlen,cache.close);}
}
this.canvasColor(style);context.stroke();context.closePath();context.lineWidth=1;}
;STXChart.prototype.drawBarChart=function(panel,style,colorFunction){var chart=panel.chart;if(!chart){chart=panel;panel=panel.chart;}
var quotes=chart.dataSegment,context=chart.context,c=this.canvasStyle(style);if(c.width&&Z1V.B2g(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
var t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,length,leftTick=Z1V.m2g(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks,yAxis=panel.yAxis,colors={}
,hlen=Z1V.N2g(chart.tmpWidth,2),voffset=Z1V.O2g(context.lineWidth,2),candleWidth=this.layout.candleWidth,xbase=Z1V.y2g(panel.left,0.5*candleWidth,this.micropixels,1);for(var x=0;Z1V.G2g(x,quotes.length);x++){xbase+=Z1V.Z2g(candleWidth,2);candleWidth=this.layout.candleWidth;xbase+=Z1V.v2g(candleWidth,2);var quote=quotes[x];if(!quote)continue;if(quote.projection)break;if(quote.candleWidth){xbase+=Z1V.T2g((quote.candleWidth-candleWidth),2);candleWidth=quote.candleWidth;}
var color=colorFunction(this,quote);if(!color)continue;colors[color]=1;context.strokeStyle=color;context.beginPath();if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(Z1V.J7g(tick,panel.cacheLeft)||Z1V.r7g(tick,panel.cacheRight)||!cache.top){top=this.pixelFromPrice(quote.High,panel);bottom=this.pixelFromPrice(quote.Low,panel);length=Z1V.p7g(bottom,top);cache.open=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(Z1V.E7g((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top);cache.close=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(Z1V.A7g((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);if(Z1V.F7g(top,t)){if(Z1V.L7g(top+length,t)){cache.top=top;cache.bottom=top;continue;}
length-=Z1V.Y7g(t,top);top=t;}
if(Z1V.c7g(top+length,b)){length-=(top+length-b);}
cache.top=top;cache.bottom=top+length;}
var xx=Math.floor(xbase)+0.5;if(Z1V.R7g(cache.top,b)&&Z1V.d7g(cache.bottom,t)){context.moveTo(xx,Z1V.C7g(cache.top,voffset));context.lineTo(xx,cache.bottom+voffset);}
if(Z1V.b7g(cache.open,t)&&Z1V.z7g(cache.open,b)){context.moveTo(xx,cache.open);context.lineTo(Z1V.x7g(xx,hlen),cache.open);}
if(Z1V.P7g(cache.close,t)&&Z1V.a7g(cache.close,b)){context.moveTo(xx,cache.close);context.lineTo(xx+hlen,cache.close);}
context.stroke();}
context.lineWidth=1;return colors;}
;STXChart.prototype.plotLineChart=function(panel,quotes,field,parameters,colorFunction){var skipProjections=false,skipTransform=false,noSlopes=false,tension=0,points=[];if(parameters){skipProjections=parameters.skipProjections;skipTransform=parameters.skipTransform;noSlopes=parameters.noSlopes;tension=parameters.tension;}
var chart=panel.chart,context=this.chart.context,first=true,yAxis=panel.yAxis,t=yAxis.top,b=yAxis.bottom,leftTick=Z1V.V3g(chart.dataSet.length,chart.scroll),lastQuote=null,colors={}
,lastXY=[0,0],candleWidth=this.layout.candleWidth,xbase=Z1V.w3g(panel.left,(parameters.noSlopes?1:0.5)*candleWidth,this.micropixels,1);this.startClip(panel.name);context.beginPath();for(var i=0;Z1V.h3g(i,quotes.length);i++){xbase+=Z1V.t3g(candleWidth,2);if(parameters.noSlopes)xbase+=Z1V.s3g(candleWidth,2);candleWidth=this.layout.candleWidth;if(!parameters.noSlopes)xbase+=Z1V.k3g(candleWidth,2);var quote=quotes[i];if(!quote)continue;if(skipProjections&&quote.projection)break;if(quote.candleWidth){if(!parameters.noSlopes)xbase+=Z1V.o3g((quote.candleWidth-candleWidth),2);candleWidth=quote.candleWidth;}
if(!skipTransform&&quote.transform)quote=quote.transform;var x=xbase,cache=quote.cache,tick=leftTick+i;if(!quote[field]&&Z1V.X3g(quote[field],0))continue;if(Z1V.j3g(tick,panel.cacheLeft)||Z1V.D3g(tick,panel.cacheRight)||!cache[field]){cache[field]=(yAxis.semiLog?this.pixelFromPrice(quote[field],panel):(Z1V.K3g((yAxis.high-quote[field]),yAxis.multiplier))+yAxis.top);}
if(Z1V.g3g(x,panel.right))lastQuote=quote;if(Z1V.e3g(i,quotes.length-1)){if(this.extendLastTick)x+=this.offset;if(parameters.lastTickOffset)x+=parameters.lastTickOffset;}
var y=cache[field],pattern=null;if(colorFunction){var color=colorFunction(this,quote);if(!color)continue;if(typeof color=="object"){pattern=color.pattern;color=color.color;}
if(Z1V.G3g(context.strokeStyle,color)){if(!first){context.stroke();context.beginPath();context.moveTo(lastXY[0],lastXY[1]);}
context.strokeStyle=color;colors[color]=1;}
}
if(first){first=false;if(noSlopes||Z1V.Z3g(leftTick,0)){context.moveTo(i?x:0,y);if(tension){points.push(x,y);}
else{if(pattern){context.dashedLineTo(0,y,x,y,pattern);}
else{context.lineTo(x,y);}
}
}
else if(Z1V.v3g(leftTick,0)){var baseline=chart.dataSet[leftTick];if(!skipTransform&&baseline.transform)baseline=baseline.transform;var y0=baseline[field];if(!y0||isNaN(y0)){context.moveTo(i?x:0,y);if(tension){points.push(x,y);}
}
else{y0=(yAxis.semiLog?this.pixelFromPrice(y0,panel):(Z1V.T3g((yAxis.high-y0),yAxis.multiplier))+yAxis.top);var x0=Z1V.J9g(x,candleWidth);if(pattern){context.dashedLineTo(x0,y0,x,y,pattern);}
else{context.moveTo(x0,y0);if(tension){points.push(x0,y0,x,y);}
else{context.lineTo(x,y);}
}
}
}
}
else{if(noSlopes){var quote1=quotes[Z1V.r9g(i,1)];if(!quote1)continue;if(!skipTransform&&quote1.transform)quote1=quote1.transform;if(i){if(pattern){context.dashedLineTo(lastXY[0],lastXY[1],x,lastXY[1],pattern);}
else{context.lineTo(x,lastXY[1]);}
context.moveTo(x,y);}
if(Z1V.p9g(i,quotes.length-1)){if(pattern){context.dashedLineTo(x,y,x+candleWidth,y,pattern);}
else{context.lineTo(x+candleWidth,y);}
}
}
else{if(pattern){context.dashedLineTo(lastXY[0],lastXY[1],x,y,pattern);}
else{if(tension){points.push(x,y);}
else{context.lineTo(x,y);}
}
}
}
lastXY=[x,y];if(Z1V.E9g(i,(quotes.length-1))&&tension){points.push(x,y);plotSplinePrimitive(points,tension,context);}
}
context.stroke();this.endClip();if(parameters.label&&lastQuote){var txt;if(yAxis.priceFormatter){txt=yAxis.priceFormatter(this,panel,lastQuote[field],parameters.labelDecimalPlaces);}
else{txt=this.formatYAxisPrice(lastQuote[field],panel,parameters.labelDecimalPlaces);}
var yaxisLabelStyle=this.yaxisLabelStyle;if(panel.yAxis.yaxisLabelStyle)yaxisLabelStyle=panel.yAxis.yaxisLabelStyle;var labelcolor=Z1V.A9g(yaxisLabelStyle,"noop")?context.strokeStyle:null;this.yAxisLabels.push({src:"plot","args":[panel,txt,lastQuote.cache[field],Z1V.F9g(yaxisLabelStyle,"noop")?"#FFFFFF":context.strokeStyle,labelcolor]}
);}
return colors;}
;STXChart.prototype.plotMountainChart=function(panel,quotes,field,parameters){var skipProjections=false,skipTransform=false,reverse=false,tension=0,points=[];if(parameters){skipProjections=parameters.skipProjections;skipTransform=parameters.skipTransform;reverse=parameters.reverse;tension=parameters.tension;}
var chart=panel.chart,context=this.chart.context,first=true,t=panel.yAxis.top,b=panel.yAxis.bottom;this.startClip(panel.name);context.beginPath();var leftTick=Z1V.L9g(chart.dataSet.length,chart.scroll),firstX=null,firstY=null,yAxis=panel.yAxis,x=0;for(var i=0;Z1V.Y9g(i,quotes.length);i++){var quote=quotes[i];if(!quote)continue;if(skipProjections&&quote.projection)break;if(!skipTransform&&quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+i;if(Z1V.c9g(tick,panel.cacheLeft)||Z1V.R9g(tick,panel.cacheRight)||!cache[field]){if(!quote[field]&&Z1V.d9g(quote[field],0))continue;cache[field]=(yAxis.semiLog?this.pixelFromPrice(quote[field],panel):(Z1V.C9g((yAxis.high-quote[field]),yAxis.multiplier))+yAxis.top);}
x=panel.left+Z1V.b9g((i+0.5),this.layout.candleWidth)+this.micropixels-1;if(Z1V.z9g(i,quotes.length-1)){if(this.extendLastTick)x+=this.offset;if(parameters.lastTickOffset)x+=parameters.lastTickOffset;}
if(Z1V.x9g(firstX,null))firstX=x;var y=cache[field];if(Z1V.P9g(firstY,null))firstY=y;if(first){first=false;if(Z1V.a9g(leftTick,0)){context.moveTo(x,y);if(tension){points.push(x,y);}
}
else{var baseline=chart.dataSet[leftTick];if(baseline.transform)baseline=baseline.transform;var y0=baseline[field];y0=(yAxis.semiLog?this.pixelFromPrice(y0,panel):(Z1V.V8g((yAxis.high-y0),yAxis.multiplier))+yAxis.top);firstX=Z1V.w8g(x,this.layout.candleWidth);context.moveTo(firstX,y0);if(tension){points.push(firstX,y0,x,y);}
else{context.lineTo(x,y);}
}
}
else{if(tension){points.push(x,y);}
else{context.lineTo(x,y);}
}
if(Z1V.l8g(i,(quotes.length-1))&&tension){points.push(x,y);plotSplinePrimitive(points,tension,context);}
}
context.lineTo(x,reverse?t:b);context.lineTo(firstX,reverse?t:b);if(reverse){if(Z1V.U8g(firstY,t))firstY=t;}
else{if(Z1V.n8g(firstY,b))firstY=b;}
context.lineTo(firstX,firstY);context.fill();context.closePath();this.endClip();}
;STXChart.prototype.drawLineChart=function(panel,style,colorFunction){var context=this.chart.context,c=this.canvasStyle(style);if(c.width&&Z1V.H8g(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
this.canvasColor(style);var params={skipProjections:true}
;if(panel.chart.tension)params.tension=panel.chart.tension;if(panel.chart.lastTickOffset)params.lastTickOffset=panel.chart.lastTickOffset;var rc=this.plotLineChart(panel,panel.chart.dataSegment,"Close",params,colorFunction);context.lineWidth=1;return rc;}
;STXChart.prototype.drawMountainChart=function(panel){var H9j="paren",f98="ra",context=this.chart.context,c=this.canvasStyle("stx_mountain_chart");if(c.width&&Z1V.i8g(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
var top=this.pixelFromPrice(panel.chart.highValue,panel);if(isNaN(top))top=0;var backgroundColor=c.backgroundColor,color=c.color;if(color&&Z1V.q8g(color,"transparent")){var gradient=context.createLinearGradient(0,top,0,panel.yAxis.bottom);gradient.addColorStop(0,backgroundColor);gradient.addColorStop(1,color);context.fillStyle=gradient;}
else{context.fillStyle=backgroundColor;}
var params={skipProjections:true}
;if(panel.chart.tension)params.tension=panel.chart.tension;if(panel.chart.lastTickOffset)params.lastTickOffset=panel.chart.lastTickOffset;this.plotMountainChart(panel,panel.chart.dataSegment,"Close",params);var strokeStyle=c.borderTopColor;if(strokeStyle&&Z1V.B8g(strokeStyle,(Z1V.A28+f98+Q78+T28+H9j+Z1V.A28))){context.strokeStyle=strokeStyle;this.plotLineChart(panel,panel.chart.dataSegment,"Close",params);}
context.lineWidth=1;}
;STXChart.prototype.drawWaveChart=function(panel){var chart=panel.chart,quotes=chart.dataSegment,context=this.chart.context;this.startClip(panel.name);context.beginPath();var first=false,reset=false,t=panel.yAxis.top,b=panel.yAxis.bottom,xbase=panel.left+Math.floor(-0.5*this.layout.candleWidth+this.micropixels);for(var i=0;Z1V.m8g(i,quotes.length);i++){xbase+=this.layout.candleWidth;var quote=quotes[i];if(!quote)continue;if(quote.projection)break;if(quote.transform)quote=quote.transform;var x=Z1V.N8g(xbase,3*this.layout.candleWidth/8),y=this.pixelFromPrice(quote.Open,panel);if(Z1V.O8g(y,t)){y=t;if(reset){context.moveTo(x,y);continue;}
reset=true;}
else if(Z1V.y8g(y,b)){y=b;if(reset){context.moveTo(x,y);continue;}
reset=true;}
else{reset=false;}
if(!first){first=true;var leftTick=Z1V.W8g(chart.dataSet.length,chart.scroll);if(Z1V.Q8g(leftTick,0)){context.moveTo(x,y);}
else if(Z1V.f8g(leftTick,0)){var baseline=chart.dataSet[Z1V.I8g(leftTick,1)];if(baseline.transform)baseline=baseline.transform;var y0=baseline.Close;y0=(panel.yAxis.semiLog?this.pixelFromPrice(y0,panel):(Z1V.M8g((panel.yAxis.high-y0),panel.yAxis.multiplier))+t);y0=Math.min(Math.max(y0,t),b);context.moveTo(panel.left+Z1V.S0g((i-1),this.layout.candleWidth)+this.micropixels,y0);context.lineTo(x,y);}
context.moveTo(x,y);}
else{context.lineTo(x,y);}
x+=Z1V.u0g(this.layout.candleWidth,4);if(Z1V.h0g(quote.Open,quote.Close)){y=this.pixelFromPrice(quote.Low,panel);if(Z1V.t0g(y,t))y=t;if(Z1V.s0g(y,b))y=b;context.lineTo(x,y);x+=Z1V.k0g(this.layout.candleWidth,4);y=this.pixelFromPrice(quote.High,panel);if(Z1V.o0g(y,t))y=t;if(Z1V.X0g(y,b))y=b;context.lineTo(x,y);}
else{y=this.pixelFromPrice(quote.High,panel);if(Z1V.j0g(y,t))y=t;if(Z1V.D0g(y,b))y=b;context.lineTo(x,y);x+=Z1V.K0g(this.layout.candleWidth,4);y=this.pixelFromPrice(quote.Low,panel);if(Z1V.g0g(y,t))y=t;if(Z1V.e0g(y,b))y=b;context.lineTo(x,y);}
x+=Z1V.G0g(this.layout.candleWidth,4);y=this.pixelFromPrice(quote.Close,panel);if(Z1V.Z0g(y,t))y=t;if(Z1V.v0g(y,b))y=b;context.lineTo(x,y);}
var c=this.canvasStyle("stx_line_chart");if(c.width&&Z1V.T0g(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
this.canvasColor("stx_line_chart");context.stroke();context.closePath();this.endClip();context.lineWidth=1;}
;STXChart.prototype.updateFloatHRLabel=function(panel){var arr=panel.yaxisLHS.concat(panel.yaxisRHS);if(this.floatCanvas.isDirty)STX.clearCanvas(this.floatCanvas,this);if(Z1V.J5g(this.controls.crossX.style.display,"none"))return ;if(this.controls.crossY){var crosshairWidth=panel.width;if(Z1V.r5g(this.yaxisLabelStyle,"roundRectArrow"))crosshairWidth-=7;this.controls.crossY.style.left=panel.left+"px";this.controls.crossY.style.width=crosshairWidth+"px";}
for(var i=0;Z1V.p5g(i,arr.length);i++){var yAxis=arr[i],price=this.valueFromPixel(this.cy,panel,yAxis);if(isNaN(price))continue;if((panel.min||Z1V.E5g(panel.min,0))&&Z1V.A5g(price,panel.min))continue;if((panel.max||Z1V.F5g(panel.max,0))&&Z1V.L5g(price,panel.max))continue;var labelDecimalPlaces=null;if(Z1V.Y5g(yAxis,panel.chart.yAxis)){labelDecimalPlaces=0;if(Z1V.c5g(yAxis.shadow,1000))labelDecimalPlaces=2;if(Z1V.R5g(yAxis.shadow,5))labelDecimalPlaces=4;if(yAxis.decimalPlaces||Z1V.d5g(yAxis.decimalPlaces,0))labelDecimalPlaces=yAxis.decimalPlaces;}
if(yAxis.priceFormatter){price=yAxis.priceFormatter(this,panel,price,yAxis);}
else{price=this.formatYAxisPrice(price,panel,labelDecimalPlaces,yAxis);}
var style=this.canvasStyle("stx-float-price");this.createYAxisLabel(panel,price,this.cy,style.backgroundColor,style.color,this.floatCanvas.context,yAxis);this.floatCanvas.isDirty=true;}
}
;STXChart.prototype.headsUpHR=function(){var t3j="R",N9j="pH",o48="U",k68="ead",w5j="headsUpHR";if(this.runPrepend(w5j,arguments))return ;var panel=this.currentPanel;if(!panel)return ;var chart=panel.chart;this.updateFloatHRLabel(panel);if(this.controls.floatDate&&!STXChart.hideDates()){var bar=this.barFromPixel(this.cx),prices=chart.xaxis[bar];if(prices&&prices.DT){if(chart.xAxis.formatter){this.controls.floatDate.innerHTML=chart.xAxis.formatter(prices.DT);}
else if(this.internationalizer){var str=this.internationalizer.monthDay.format(prices.DT);if(!STXChart.isDailyInterval(this.layout.interval))str+=s6j+this.internationalizer.hourMinute.format(prices.DT);else{str=this.internationalizer.yearMonthDay.format(prices.DT);}
this.controls.floatDate.innerHTML=str;}
else{var m=prices.DT.getMonth()+Z1V.E3j;if(Z1V.C5g(m,i08))m=g78+m;var d=prices.DT.getDate();if(Z1V.b5g(d,i08))d=g78+d;var h=prices.DT.getHours();if(Z1V.z5g(h,i08))h=g78+h;var mn=prices.DT.getMinutes();if(Z1V.x5g(mn,i08))mn=g78+mn;if(STXChart.isDailyInterval(this.layout.interval))this.controls.floatDate.innerHTML=m+Z28+d+Z28+prices.DT.getFullYear();else{this.controls.floatDate.innerHTML=m+Z28+d+s6j+h+g68+mn;var isSecond=(chart.xAxis.activeTimeUnit&&Z1V.P5g(chart.xAxis.activeTimeUnit,STX.SECOND))||Z1V.a5g(this.layout.timeUnit,e88),isMS=(chart.xAxis.activeTimeUnit&&Z1V.V6g(chart.xAxis.activeTimeUnit,STX.MILLISECOND))||Z1V.w6g(this.layout.timeUnit,y88);if(isSecond||isMS){var sec=prices.DT.getSeconds();if(Z1V.l6g(sec,i08))sec=g78+sec;this.controls.floatDate.innerHTML+=(g68+sec);if(isMS){var mil=prices.DT.getMilliseconds();if(Z1V.U6g(mil,i08))mil=g78+mil;if(Z1V.n6g(mil,U68))mil=g78+mil;this.controls.floatDate.innerHTML+=(g68+mil);}
}
}
}
}
else if(prices&&prices.index){this.controls.floatDate.innerHTML=prices.index;}
else{this.controls.floatDate.innerHTML=l28;}
}
this.runAppend((Z1V.h98+k68+T28+o48+N9j+t3j),arguments);}
;STXChart.prototype.setCrosshairColors=function(){return ;}
;STXChart.prototype.magnetize=function(){this.magnetizedPrice=null;if(this.runPrepend("magnetize",arguments))return ;if((Z1V.H6g(this.currentVectorParameters.vectorType,"annotation")||Z1V.i6g(this.currentVectorParameters.vectorType,"callout"))&&STXChart.drawingLine)return ;if(Z1V.q6g(this.currentVectorParameters.vectorType,"projection"))return ;if(Z1V.B6g(this.currentVectorParameters.vectorType,"freeform"))return ;var panel=this.currentPanel;if(Z1V.m6g(panel.name,panel.chart.name)){var chart=panel.chart,tick=this.tickFromPixel(Z1V.N6g(STXChart.crosshairX,this.left),chart);if(Z1V.O6g(tick,chart.dataSet.length))return ;var prices=chart.dataSet[tick];if(!prices)return ;var price=this.valueFromPixel(this.cy,panel);this.magnetizedPrice=prices.Close;if(Z1V.y6g(this.layout.chartType,"bar")||Z1V.W6g(this.layout.chartType,"candle")||Z1V.Q6g(this.layout.chartType,"colored_bar")||Z1V.f6g(this.layout.chartType,"hollow_candle")||Z1V.I6g(this.layout.chartType,"volume_candle")){var fields=[(M9j+Z1V.s78+A5j),"High","Low","Close"],closest=1000000000;for(var i=0;Z1V.M6g(i,fields.length);i++){var fp=prices[fields[i]];if(Z1V.S1g(Math.abs(price-fp),closest)){closest=Math.abs(Z1V.u1g(price,fp));this.magnetizedPrice=fp;}
}
}
var x=this.pixelFromTick(tick,chart),y=this.pixelFromPrice(this.magnetizedPrice,this.currentPanel),ctx=this.chart.tempCanvas.context;ctx.beginPath();ctx.lineWidth=1;var radius=Z1V.h1g(Math.max(this.layout.candleWidth,8),2);ctx.arc(x,y,radius,0,Z1V.t1g(2,Math.PI),false);ctx.fillStyle="#FFFFFF";ctx.strokeStyle="#000000";ctx.fill();ctx.stroke();ctx.closePath();}
this.runAppend("magnetize",arguments);}
;STXChart.prototype.positionCrosshairsAtPointer=function(){if(!this.currentPanel)return ;var chart=this.currentPanel.chart,rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.right=this.left+this.width;this.bottom=this.top+this.height;var tick=this.tickFromPixel(this.backOutX(STXChart.crosshairX),chart);this.cy=this.backOutY(STXChart.crosshairY);this.cx=this.backOutX(STXChart.crosshairX);this.controls.crossX.style.left=(Z1V.s1g(this.pixelFromTick(tick,chart),0.5))+"px";this.controls.crossY.style.top=this.backOutY(STXChart.crosshairY)+"px";this.updateChartAccessories();}
;STXChart.prototype.doDisplayCrosshairs=function(){var K9j="doDisplayCrosshairs";if(this.runPrepend(K9j,arguments))return ;if(this.displayInitialized){if(!this.layout.crosshair&&(Z1V.k1g(this.currentVectorParameters.vectorType,l28)||!this.currentVectorParameters.vectorType)){this.undisplayCrosshairs();}
else if(STX.Drawing[this.currentVectorParameters.vectorType]&&(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw){this.undisplayCrosshairs();}
else{if(Z1V.o1g(this.controls.crossX.style.display,l28)){this.controls.crossX.style.display=l28;this.controls.crossY.style.display=l28;if(this.preferences.magnet&&this.currentVectorParameters.vectorType){STX.unappendClassName(this.container,B1j);}
else{STX.appendClassName(this.container,B1j);}
}
if(this.controls.floatDate&&!STXChart.hideDates()){this.controls.floatDate.style.display=l0j;}
}
}
this.runAppend(K9j,arguments);}
;STXChart.prototype.undisplayCrosshairs=function(){var f9j="undisplayCrosshairs";if(this.runPrepend(f9j,arguments))return ;if(this.controls.crossX){if(Z1V.X1g(this.controls.crossX.style.display,S68)){this.controls.crossX.style.display=S68;this.controls.crossY.style.display=S68;}
}
if(this.displayInitialized&&this.controls.floatDate){this.controls.floatDate.style.display=S68;}
STX.unappendClassName(this.container,B1j);if(this.floatCanvas&&this.floatCanvas.isDirty)STX.clearCanvas(this.floatCanvas,this);this.runAppend(f9j,arguments);}
;STXChart.prototype.modalBegin=function(){var k1j="modal";this.openDialog=k1j;this.undisplayCrosshairs();}
;STXChart.prototype.modalEnd=function(){this.cancelTouchSingleClick=I38;this.openDialog=l28;this.doDisplayCrosshairs();}
;STXChart.prototype.updateChartAccessories=function(){var J8j="updateChartAccessories";if(this.runPrepend(J8j,arguments))return ;this.accessoryTimer=Z1V.z38;this.lastAccessoryUpdate=new Date().getTime();var floatDate=this.controls.floatDate;if(floatDate){var panel=this.currentPanel;if(!panel)panel=this.chart.panel;if(panel){var chart=panel.chart,tick=this.tickFromPixel(this.backOutX(STXChart.crosshairX),chart);floatDate.style.left=(Z1V.j1g(this.pixelFromTick(tick,chart),(floatDate.offsetWidth/Z1V.h3j),l1j))+(m08);floatDate.style.bottom=(Z1V.N1g(this.chart.canvasHeight,chart.panel.bottom))+m08;}
}
this.headsUpHR();this.runAppend(J8j,arguments);}
;STXChart.prototype.mousemove=function(e$){var e=e$?e$:event;STXChart.crosshairX=e.clientX;STXChart.crosshairY=e.clientY;if(this.runPrepend(I6j,arguments))return ;if(!this.displayInitialized)return ;if(Z1V.O1g(this.openDialog,l28))return ;this.mousemoveinner(e.clientX,e.clientY);this.runAppend(I6j,arguments);}
;STXChart.prototype.setResizeTimer=function(ms){this.resizeDetectMS=ms;function closure(self){return function(){if(!self.chart.canvas)return ;if(!STX.isAndroid){if(Z1V.y1g(self.chart.canvas.height,Math.floor(self.devicePixelRatio*self.chart.container.clientHeight))||Z1V.W1g(self.chart.canvas.width,Math.floor(self.devicePixelRatio*self.chart.container.clientWidth))){self.resizeChart();return ;}
}
}
;}
if(ms){if(this.resizeTimeout)window.clearInterval(this.resizeTimeout);this.resizeTimeout=window.setInterval(closure(this),ms);}
else{if(this.resizeTimeout)window.clearInterval(this.resizeTimeout);this.resizeTimeout=null;}
}
;STXChart.prototype.whichYAxis=function(panel,x){if(typeof x==="undefined")x=this.cx;var arr=panel.yaxisLHS.concat(panel.yaxisRHS);for(var i=0;Z1V.Q1g(i,arr.length);i++){var yAxis=arr[i];if(Z1V.f1g(yAxis.left,x)&&Z1V.I1g(yAxis.left+yAxis.width,x))return yAxis;}
return this.chart.panel.yAxis;}
;STXChart.prototype.mousemoveinner=function(epX,epY){if(!this.chart.canvas)return ;if(!STX.isAndroid&&!STX.isIOS7or8){if(Z1V.M1g(this.chart.canvas.height,Math.floor(this.devicePixelRatio*this.chart.container.clientHeight))||Z1V.S4e(this.chart.canvas.width,Math.floor(this.devicePixelRatio*this.chart.container.clientWidth))){this.resizeChart();return ;}
}
if(this.runPrepend("mousemoveinner",arguments))return ;var rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.right=this.left+this.width;this.bottom=this.top+this.height;STXChart.crosshairX=epX;STXChart.crosshairY=epY;var cy=this.cy=this.backOutY(STXChart.crosshairY),cx=this.cx=this.backOutX(STXChart.crosshairX);this.currentPanel=this.whichPanel(cy);if(!this.currentPanel)this.currentPanel=this.chart.panel;if(!this.currentPanel)return ;var chart=this.currentPanel.chart;if(chart.dataSet){this.crosshairTick=this.tickFromPixel(cx,chart);this.crosshairValue=this.adjustIfNecessary(this.currentPanel,this.crosshairTick,this.valueFromPixel(cy,this.currentPanel));}
if(Z1V.u4e(STXChart.crosshairX,this.left)&&Z1V.h4e(STXChart.crosshairX,this.right)&&Z1V.t4e(STXChart.crosshairY,this.top)&&Z1V.s4e(STXChart.crosshairY,this.bottom)){STXChart.insideChart=true;}
else{STXChart.insideChart=false;}
this.overXAxis=Z1V.k4e(STXChart.crosshairY,this.top+this.chart.panel.yAxis.bottom)&&Z1V.o4e(STXChart.crosshairY,this.top+this.chart.panel.bottom)&&STXChart.insideChart;this.overYAxis=(Z1V.X4e(this.cx,this.currentPanel.right)||Z1V.j4e(this.cx,this.currentPanel.left))&&STXChart.insideChart;if(this.overXAxis||this.overYAxis||(!STXChart.insideChart&&!this.grabbingScreen)){this.undisplayCrosshairs();if(!this.overXAxis&&!this.overYAxis)return ;}
if(!this.displayCrosshairs&&!STXChart.resizingPanel){this.undisplayCrosshairs();return ;}
var bHandle=this.controls.baselineHandle;if(this.repositioningBaseline){panel=this.panels[this.chart.panel.name];this.chart.baseline.userLevel=this.adjustIfNecessary(panel,this.crosshairTick,this.valueFromPixelUntransform(this.backOutY(STXChart.crosshairY),panel));if(Z1V.D4e(Date.now()-this.repositioningBaseline.lastDraw,100)){this.draw();this.repositioningBaseline.lastDraw=Date.now();}
return ;}
if(this.grabbingScreen&&!STXChart.resizingPanel){if(this.anyHighlighted){STX.clearCanvas(this.chart.tempCanvas,this);this.anyHighlighted=false;var n;for(n in this.overlays){this.overlays[n].highlight=false;}
for(n in chart.series){chart.series[n].highlight=false;}
this.displaySticky();}
if(this.preferences.magnet&&this.currentVectorParameters.vectorType){STX.clearCanvas(this.chart.tempCanvas,this);}
if(this.grabStartX==-1){this.grabStartX=STXChart.crosshairX;this.grabStartScrollX=chart.scroll;}
if(this.grabStartY==-1){this.grabStartY=STXChart.crosshairY;this.grabStartScrollY=chart.panel.yAxis.scroll;}
var dx=Z1V.K4e(STXChart.crosshairX,this.grabStartX),dy=Z1V.g4e(STXChart.crosshairY,this.grabStartY);if(Z1V.e4e(dx,0)&&Z1V.G4e(dy,0))return ;if(Z1V.Z4e(Math.abs(dx)+Math.abs(dy),5))this.grabOverrideClick=true;var push;if(this.allowZoom&&Z1V.v4e(this.grabMode,"pan")&&(Z1V.T4e(this.grabMode.indexOf("zoom"),0)||this.ctrl||this.overXAxis||this.overYAxis)){if(Z1V.J2e(this.grabMode,"")){if(this.overXAxis)this.grabMode=(F68+u48+H38+Z28+x68);else if(this.overYAxis)this.grabMode="zoom-y";}
if(Z1V.r2e(this.grabMode,"zoom-x"))dy=0;else if(Z1V.p2e(this.grabMode,"zoom-y"))dx=0;push=Z1V.E2e(dx,25);var centerMe=true;if(Z1V.A2e(chart.scroll,chart.maxTicks))centerMe=false;var newCandleWidth=this.grabStartCandleWidth+push;if(Z1V.F2e(newCandleWidth,this.minimumCandleWidth))newCandleWidth=this.minimumCandleWidth;var pct=Z1V.L2e((this.layout.candleWidth-newCandleWidth),this.layout.candleWidth);if(Z1V.Y2e(Math.abs(pct),0.2))this.grossDragging=new Date();else this.grossDragging=0;if(Z1V.c2e(pct,0.1)){newCandleWidth=Z1V.R2e(this.layout.candleWidth,0.9);}
else if(pct<-0.1){newCandleWidth=Z1V.d2e(this.layout.candleWidth,1.1);}
if(STX.ipad){if(Z1V.C2e(Math.round((this.chart.width/this.layout.candleWidth)-0.499)-1,STXChart.ipadMaxTicks)&&Z1V.b2e(Math.round((this.chart.width/newCandleWidth)-0.499)-1,STXChart.ipadMaxTicks))return ;}
var newMaxTicks;if(this.pinchingCenter){var x=this.backOutX(this.pinchingCenter),tick1=this.tickFromPixel(x,chart);this.setCandleWidth(newCandleWidth,chart);var newTick=this.tickFromPixel(x,chart);chart.scroll+=Math.floor((Z1V.z2e(newTick,tick1)));}
else if(centerMe){newMaxTicks=Math.round(Z1V.x2e((this.chart.width/newCandleWidth),0.499));if(Z1V.P2e(newMaxTicks,chart.maxTicks)){this.setCandleWidth(newCandleWidth,chart);chart.scroll+=Math.round(Z1V.a2e((newMaxTicks-chart.maxTicks),2));}
}
else{newMaxTicks=Math.round(Z1V.V7e((this.chart.width/newCandleWidth),0.499));if(Z1V.w7e(newMaxTicks,Math.round((this.chart.width/this.layout.candleWidth)-0.499))){this.setCandleWidth(newCandleWidth,chart);var wsInTicks=Math.round(Z1V.l7e(this.preferences.whitespace,this.layout.candleWidth));chart.scroll=Z1V.U7e(chart.maxTicks,wsInTicks);}
}
this.layout.span=null;var yAxis=this.whichYAxis(this.grabbingPanel,this.cx);if(this.overYAxis){yAxis.zoom=Math.round(this.grabStartZoom+dy);if(Z1V.n7e(this.grabStartZoom,yAxis.height)){if(Z1V.H7e(yAxis.zoom,yAxis.height))yAxis.zoom=Z1V.i7e(yAxis.height,1);}
else{if(Z1V.q7e(yAxis.zoom,yAxis.height))yAxis.zoom=yAxis.height+1;}
}
}
else{if(this.allowScroll){if(Z1V.B7e(Math.abs(dy),this.yTolerance)){if(!this.yToleranceBroken){dy=0;if(Z1V.m7e(dx,0))return ;}
}
else{this.yToleranceBroken=true;}
this.grabMode="pan";push=Math.round(Z1V.N7e(dx,this.layout.candleWidth));this.microscroll=Z1V.O7e(push,(dx/this.layout.candleWidth));this.micropixels=this.layout.candleWidth*this.microscroll*-1;if(this.shift)push*=5;if(Z1V.y7e(Math.abs(chart.scroll-this.grabStartScrollX-push),20))this.grossDragging=new Date();else this.grossDragging=0;chart.scroll=this.grabStartScrollX+push;if(Z1V.W7e(chart.scroll,1))chart.scroll=1;if(Z1V.Q7e(chart.scroll,chart.maxTicks)){this.preferences.whitespace=30;}
else{this.preferences.whitespace=Z1V.f7e((chart.maxTicks-chart.scroll),this.layout.candleWidth);}
if(Z1V.I7e(this.currentPanel.name,chart.name)){this.chart.panel.yAxis.scroll=this.grabStartScrollY+dy;}
}
if(this.callbacks.move){(this.callbacks.move)({stx:this,panel:this.currentPanel,x:this.cx,y:this.cy,grab:this.grabbingScreen}
);}
}
var clsrFunc=function(stx){return function(){stx.draw();}
;}
;if(STXChart.useAnimation){if(window.requestAnimationFrame){window.requestAnimationFrame(clsrFunc(this));}
else if(this.grossDragging){setTimeout(function(stx){return function retest(){if(Z1V.M7e(new Date()-stx.grossDragging,500))setTimeout(retest,100);else{stx.grossDragging=0;stx.draw();}
}
;}
(this),100);}
else{this.draw();}
}
else{this.draw();}
if(this.activeDrawing){STX.clearCanvas(this.chart.tempCanvas,this);this.activeDrawing.render(this.chart.tempCanvas.context);this.activeDrawing.measure();}
this.undisplayCrosshairs();return ;}
else{this.grabMode="";}
this.grabbingPanel=this.currentPanel;if(this.overXAxis||this.overYAxis)return ;var tick=this.tickFromPixel(this.backOutX(STXChart.crosshairX),chart);this.controls.crossX.style.left=(Z1V.S3e(this.pixelFromTick(tick,chart),0.5))+"px";this.controls.crossY.style.top=this.cy+"px";this.setCrosshairColors();if(STXChart.insideChart&&!STXChart.resizingPanel){if(!STX.Drawing[this.currentVectorParameters.vectorType]||!(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw){this.doDisplayCrosshairs();}
if(Z1V.u3e(this.accessoryTimer,null))clearTimeout(this.accessoryTimer);if(STXChart.drawingLine||!STX.touchDevice){this.updateChartAccessories();}
else{if(Z1V.h3e(new Date().getTime()-this.lastAccessoryUpdate,100))this.updateChartAccessories();this.accessoryTimer=setTimeout((function(stx){return function(){stx.updateChartAccessories();}
;}
)(this),10);}
}
else{this.undisplayCrosshairs();}
var panel,value;if(this.repositioningDrawing){panel=this.panels[this.repositioningDrawing.panelName];value=this.adjustIfNecessary(panel,this.crosshairTick,this.valueFromPixelUntransform(this.backOutY(STXChart.crosshairY),panel));if(this.preferences.magnet&&this.magnetizedPrice&&Z1V.t3e(panel.name,panel.chart.name)){value=this.adjustIfNecessary(panel,this.crosshairTick,this.magnetizedPrice);}
STX.clearCanvas(this.chart.tempCanvas,this);this.repositioningDrawing.reposition(this.chart.tempCanvas.context,this.repositioningDrawing.repositioner,this.crosshairTick,value);if(this.repositioningDrawing.measure)this.repositioningDrawing.measure();}
else if(STXChart.drawingLine){if(this.activeDrawing){panel=this.panels[this.activeDrawing.panelName];value=this.adjustIfNecessary(panel,this.crosshairTick,this.valueFromPixelUntransform(this.backOutY(STXChart.crosshairY),panel));if(this.preferences.magnet&&this.magnetizedPrice&&Z1V.s3e(panel.name,panel.chart.name)){value=this.adjustIfNecessary(panel,this.crosshairTick,this.magnetizedPrice);}
STX.clearCanvas(this.chart.tempCanvas,this);this.activeDrawing.move(this.chart.tempCanvas.context,this.crosshairTick,value);if(this.activeDrawing.measure)this.activeDrawing.measure();}
}
else if(STXChart.resizingPanel){this.resizePanels();this.drawTemporaryPanel();}
else if(STXChart.insideChart){this.findHighlights();}
if(STXChart.insideChart){if(this.callbacks.move){(this.callbacks.move)({stx:this,panel:this.currentPanel,x:this.cx,y:this.cy,grab:this.grabbingScreen}
);}
this.findHighlights();}
if(this.preferences.magnet&&this.currentVectorParameters.vectorType){if(!STXChart.drawingLine&&!this.anyHighlighted)STX.clearCanvas(this.chart.tempCanvas);this.magnetize();}
this.runAppend("mousemoveinner",arguments);}
;STXChart.prototype.findHighlights=function(isTap,clearOnly){var Z08="ies",radius=10;if(isTap)radius=30;var cy=this.cy,cx=this.cx;if(!this.currentPanel)return ;var chart=this.currentPanel.chart;this.anyHighlighted=false;if(this.preferences.magnet&&this.currentVectorParameters.vectorType){STX.clearCanvas(this.chart.tempCanvas,this);}
var somethingChanged=false,drawingToMeasure=null,stickyArgs=["","",true,null,"drawing"],box={x0:this.tickFromPixel(Z1V.k3e(cx,radius),chart),x1:this.tickFromPixel(cx+radius,chart),y0:this.valueFromPixelUntransform(Z1V.o3e(cy,radius),this.currentPanel),y1:this.valueFromPixelUntransform(cy+radius,this.currentPanel)}
;for(var i=0;Z1V.X3e(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];if(drawing.permanent)continue;var prevHighlight=drawing.highlighted,highlightMe=(Z1V.j3e(drawing.panelName,this.currentPanel.name));drawing.repositioner=drawing.intersected(this.crosshairTick,this.crosshairValue,box);highlightMe=highlightMe&&drawing.repositioner;if(!clearOnly&&highlightMe){if(prevHighlight){drawingToMeasure=drawing;}
else if(Z1V.D3e(prevHighlight,drawing.highlight(true))){if(!drawingToMeasure)drawingToMeasure=drawing;somethingChanged=true;}
this.anyHighlighted=true;}
else{if(Z1V.K3e(prevHighlight,drawing.highlight(false))){somethingChanged=true;}
}
}
var first=false,n,o,series;for(n in this.overlays){o=this.overlays[n];o.prev=o.highlight;o.highlight=false;}
for(n in chart.seriesRenderers){var r=chart.seriesRenderers[n];for(var j=0;Z1V.g3e(j,r.seriesParams.length);j++){series=r.seriesParams[j];series.prev=series.highlight;series.highlight=false;}
}
if(!clearOnly){var bar=this.barFromPixel(cx);if(Z1V.e3e(bar,chart.dataSegment.length)){var y;for(n in this.overlays){o=this.overlays[n];if(Z1V.G3e(o.panel,this.currentPanel.name))continue;if(o.libraryEntry.isHighlighted&&o.libraryEntry.isHighlighted(this,cx,cy)){o.highlight=true;this.anyHighlighted=true;continue;}
var quote=chart.dataSegment[bar];if(!quote)continue;for(var out in this.overlays[n].outputMap){var val=quote[out];y=0;if(Z1V.Z3e(this.currentPanel.name,chart.name)){y=this.pixelFromPriceTransform(val,this.currentPanel);}
else{y=this.pixelFromPrice(val,this.currentPanel);}
if(Z1V.v3e(cy-radius,y)&&Z1V.T3e(cy+radius,y)){o.highlight=true;this.anyHighlighted=true;break;}
}
}
for(n in chart.seriesRenderers){var renderer=chart.seriesRenderers[n];if(!renderer.params.highlightable)continue;for(var m=0;Z1V.J9e(m,renderer.seriesParams.length);m++){series=renderer.seriesParams[m];y=renderer.caches[series.field][bar];if(!y&&Z1V.r9e(y,0))continue;if(Z1V.p9e(cy-radius,y)&&Z1V.E9e(cy+radius,y)){series.highlight=true;this.anyHighlighted=true;}
else if((Z1V.A9e(renderer.params.subtype,"step")||Z1V.F9e(series.type,"step"))&&Z1V.L9e(bar,0)){var py=renderer.caches[series.field][Z1V.Y9e(bar,1)];if((Z1V.c9e(cy,y)&&Z1V.R9e(cy,py))||(Z1V.d9e(cy,y)&&Z1V.C9e(cy,py))){series.highlight=true;this.anyHighlighted=true;}
}
}
}
}
}
for(n in this.overlays){o=this.overlays[n];if(o.highlight){this.anyHighlighted=true;stickyArgs=[o.inputs.display?o.inputs.display:o.name,null,null,o.permanent,"study"];drawingToMeasure=null;}
if(Z1V.b9e(o.prev,o.highlight))somethingChanged=true;}
for(n in chart.seriesRenderers){var r2=chart.seriesRenderers[n];if(!r2.params.highlightable)continue;for(var m2=0;Z1V.z9e(m2,r2.seriesParams.length);m2++){series=r2.seriesParams[m2];if(series.highlight){this.anyHighlighted=true;stickyArgs=[series.display,series.color,false,series.permanent,(T28+M5j+g28+Z08)];drawingToMeasure=null;}
if(Z1V.x9e(series.prev,series.highlight))somethingChanged=true;}
}
if(somethingChanged){this.draw();this.displaySticky.apply(this,stickyArgs);this.clearMeasure();if(drawingToMeasure)drawingToMeasure.measure();}
if(!this.anyHighlighted){this.setMeasure();}
}
;STXChart.prototype.positionSticky=function(m){var top=Math.max(Z1V.P9e(this.cy,m.offsetHeight,V58),Z1V.n3j),right=Math.min(Z1V.T9e(this.chart.canvasWidth,(this.cx-E58)),Z1V.J8e(this.chart.canvasWidth,m.offsetWidth));m.style.top=top+(m08);m.style.right=right+m08;}
;STXChart.prototype.displaySticky=function(message,backgroundColor,forceShow,noDelete,type){var E88="inl",E68="rightclick_",m=this.controls.mSticky;if(!m)return ;var mi=m.children[Z1V.n3j];if(!mi)return ;var overlayTrashCan=m.children[Z1V.E3j].children[Z1V.n3j],mouseDeleteInstructions=m.children[Z1V.E3j].children[Z1V.E3j];if(!forceShow&&!message){mi.innerHTML=l28;m.style.display=S68;if(STX.touchDevice&&overlayTrashCan){overlayTrashCan.style.display=S68;}
else if(!STX.touchDevice&&mouseDeleteInstructions){mouseDeleteInstructions.style.display=S68;}
}
else{if(!message)message=l28;if(forceShow&&!message){mi.style.backgroundColor=l28;mi.style.color=l28;mi.style.display=S68;}
else if(backgroundColor){mi.style.backgroundColor=backgroundColor;mi.style.color=STX.chooseForegroundColor(backgroundColor);mi.style.display=T5j;}
else{mi.style.backgroundColor=l28;mi.style.color=l28;mi.style.display=T5j;}
mi.innerHTML=message;if(type)m.children[Z1V.E3j].className=E68+type;m.style.display=(E88+p18+M5j+Z28+i5j+i78);this.positionSticky(m);if(noDelete){overlayTrashCan.style.display=S68;mouseDeleteInstructions.style.display=S68;}
else if(STX.touchDevice&&overlayTrashCan){overlayTrashCan.style.display=T5j;mouseDeleteInstructions.style.display=S68;}
else if(!STX.touchDevice&&mouseDeleteInstructions){mouseDeleteInstructions.style.display=l0j;}
}
}
;STXChart.prototype.setMeasure=function(price1,price2,tick1,tick2,hover){var o78="measureLit",c0j="Bars",A48="setMeasure";if(this.runPrepend(A48,arguments))return ;var m=$$(a08),message=l28;if(!price1){if(m&&Z1V.r8e(m.className,r1j))m.className=r1j;if(!this.anyHighlighted&&Z1V.p8e(this.currentVectorParameters.vectorType,l28))this.clearMeasure();}
else{var distance=Z1V.E8e(Math.round(Math.abs(price1-price2)*this.chart.roundit),this.chart.roundit);if(this.internationalizer){message+=this.internationalizer.numbers.format(distance);}
else{message+=distance;}
var pct=Z1V.A8e((price2-price1),price1);if(Z1V.F8e(Math.abs(pct),E1j)){pct=Math.round(Z1V.L8e(pct,U68));}
else if(Z1V.Y8e(Math.abs(pct),d3j)){pct=Z1V.c8e(Math.round(pct*Z58),i08);}
else{pct=Z1V.R8e(Math.round(pct*b58),U68);}
if(this.internationalizer){pct=this.internationalizer.percent.format(Z1V.d8e(pct,U68));}
else{pct=pct+V98;}
message+=(e0j)+pct+I98;var ticks=Math.abs(Z1V.C8e(tick2,tick1));ticks=Math.round(ticks)+Z1V.E3j;var barsStr=c0j;if(this.translationCallback)barsStr=this.translationCallback(barsStr);message+=s6j+ticks+s6j+barsStr;if(m){if(Z1V.b8e(m.className,o78))m.className=o78;m.innerHTML=message;}
}
if(this.activeDrawing)return ;m=this.controls.mSticky;if(m){if(hover){m.style.display=T5j;m.children[Z1V.n3j].style.display=(c98+Q78+l38+c98+H58+Z28+i5j+l38+J38+T6j);if(price1){m.children[Z1V.n3j].innerHTML=message;}
this.positionSticky(m);}
else{m.style.display=S68;m.children[Z1V.n3j].innerHTML=l28;}
}
this.runAppend(A48,arguments);}
;STXChart.prototype.clearMeasure=function(){var m=$$(a08);if(m){if(Z1V.z8e(m.className,r1j))m.className=r1j;m.innerHTML=l28;}
}
;STXChart.prototype.drawTemporaryPanel=function(){var b08="stx_panel_drag",borderEdge=Math.round(Z1V.x8e(STXChart.resizingPanel.right,Z1V.l3j))+l1j;STX.clearCanvas(this.chart.tempCanvas,this);var y=Z1V.P8e(STXChart.crosshairY,this.top);this.plotLine(STXChart.resizingPanel.left,borderEdge,y,y,this.canvasStyle(b08),X9j,this.chart.tempCanvas.context,X58,{}
);STXChart.resizingPanel.handle.style.top=(Z1V.a8e(y,STXChart.resizingPanel.handle.offsetHeight/Z1V.h3j))+m08;}
;STXChart.prototype.setTrashCan=function(){if(STX.touchDevice){var m=this.controls.mSticky;if(m){m.style.display=T5j;m.children[Z1V.n3j].style.display=S68;m.children[Z1V.E3j].style.display=T5j;if(m.children[Z1V.h3j])m.children[Z1V.h3j].style.display=S68;m.style.top=(Z1V.V0e(this.backOutY(STXChart.crosshairY),V58))+(m08);m.style.right=Z1V.w0e(this.chart.canvasWidth,(this.backOutX(STXChart.crosshairX)-E58),m08);}
}
}
;STXChart.prototype.pixelFromBar=function(bar,chart){if(!chart)chart=this.chart;var x=Z1V.n3j;if(this.chart.dataSegment&&this.chart.dataSegment[bar]&&this.chart.dataSegment[bar].leftOffset){x=this.chart.dataSegment[bar].leftOffset;}
else{x=Z1V.p0e((bar+l1j),this.layout.candleWidth);}
x=chart.panel.left+Math.floor(x+this.micropixels)-Z1V.E3j;return x;}
;STXChart.prototype.barFromPixel=function(x,chart){if(!chart)chart=this.chart;if(Z1V.E0e(this.layout.chartType,"volume_candle")){var pixel=Z1V.A0e(x,chart.panel.left,this.micropixels),mult=2,bar=Math.round(Z1V.k0e(this.chart.dataSegment.length,mult)),rightofLastTick=this.chart.dataSegment[Z1V.o0e(this.chart.dataSegment.length,1)].leftOffset+Z1V.X0e(this.chart.dataSegment[this.chart.dataSegment.length-1].candleWidth,2);if(Z1V.j0e(pixel,rightofLastTick)){return this.chart.dataSegment.length+Math.floor(Z1V.D0e((x-rightofLastTick-chart.panel.left-this.micropixels),this.layout.candleWidth));}
else{for(var i=1;Z1V.K0e(i,this.chart.dataSegment.length);i++){mult*=2;if(!this.chart.dataSegment[bar])break;var left=Z1V.g0e(this.chart.dataSegment[bar].leftOffset,this.chart.dataSegment[bar].candleWidth/2),right=this.chart.dataSegment[bar].leftOffset+Z1V.e0e(this.chart.dataSegment[bar].candleWidth,2);if(Z1V.G0e(bar,0)||(Z1V.Z0e(pixel,left)&&Z1V.v0e(pixel,right)))break;else if(Z1V.T0e(pixel,left))bar-=Math.max(1,Math.round(Z1V.J5e(this.chart.dataSegment.length,mult)));else bar+=Math.max(1,Math.round(Z1V.r5e(this.chart.dataSegment.length,mult)));bar=Math.max(0,Math.min(Z1V.p5e(this.chart.dataSegment.length,1),bar));}
if(!this.chart.dataSegment[bar]){for(i=0;Z1V.E5e(i,this.chart.dataSegment.length);i++){if(!this.chart.dataSegment[i])continue;if(Z1V.A5e(pixel,this.chart.dataSegment[i].leftOffset-this.chart.dataSegment[i].candleWidth/2))return Math.max(0,Z1V.F5e(i,1));else if(Z1V.L5e(pixel,this.chart.dataSegment[i].leftOffset+this.chart.dataSegment[i].candleWidth/2))return i;else if(Z1V.Y5e(pixel,this.chart.dataSegment[i].leftOffset+this.chart.dataSegment[i].candleWidth/2))return i+1;}
}
}
return bar;}
else{return Math.floor(Z1V.c5e((x-chart.panel.left-this.micropixels),this.layout.candleWidth));}
}
;STXChart.prototype.tickFromPixel=function(x,chart){if(!chart)chart=this.chart;var tick=Z1V.R5e(chart.dataSet.length,chart.scroll,1);if(Z1V.K5e(this.layout.chartType,"volume_candle")){tick+=this.barFromPixel(x,chart);}
else{tick+=Math.floor(Z1V.g5e((x-chart.panel.left-this.micropixels),this.layout.candleWidth));}
return tick;}
;STXChart.prototype.pixelFromTick=function(tick,chart){if(!chart)chart=this.chart;var bar=Z1V.e5e(tick,chart.dataSet.length,chart.scroll,1);if(this.chart.dataSegment&&this.chart.dataSegment[bar]&&this.chart.dataSegment[bar].leftOffset){return chart.panel.left+Math.floor(this.chart.dataSegment[bar].leftOffset+this.micropixels)-1;}
else{var rightOffset=0,dsTicks=0;if(this.chart.dataSegment&&this.chart.dataSegment[Z1V.x5e(this.chart.dataSegment.length,1)]&&this.chart.dataSegment[Z1V.P5e(this.chart.dataSegment.length,1)].leftOffset){if(Z1V.a5e(this.chart.dataSegment.length,tick-chart.dataSet.length+chart.scroll)){rightOffset=Z1V.V6e(this.chart.dataSegment[this.chart.dataSegment.length-1].leftOffset,this.chart.dataSegment[this.chart.dataSegment.length-1].candleWidth/2);dsTicks=this.chart.dataSegment.length;}
}
return rightOffset+chart.panel.left+Math.floor(Z1V.w6e((tick-dsTicks-chart.dataSet.length+chart.scroll-0.5),this.layout.candleWidth)+this.micropixels)-1;}
}
;STXChart.prototype.pixelFromDate=function(date,chart){return this.pixelFromTick(this.tickFromDate(date,chart),chart);}
;STXChart.prototype.priceFromPixel=function(y,panel,yAxis){if(!panel)panel=this.chart.panel;var chart=panel.chart,yax=yAxis?yAxis:panel.yAxis;y=Z1V.l6e(yax.bottom,y);var price=yax.low+(Z1V.U6e(y,yax.multiplier));if(yax.semiLog){var logPrice=yax.logLow+(Z1V.n6e(y,yax.logShadow,yax.height));price=Math.pow(10,logPrice);}
return price;}
;STXChart.prototype.valueFromPixel=function(y,panel,yAxis){if(!panel)panel=this.whichPanel(y);var p=this.priceFromPixel(y,panel,yAxis);return p;}
;STXChart.prototype.valueFromPixelUntransform=function(y,panel,yAxis){if(!panel)panel=this.whichPanel(y);if(!panel){if(Z1V.F6e(y,Z1V.n3j)){panel=this.panels[STX.first(this.panels)];}
else{panel=this.panels[STX.last(this.panels)];}
}
var p=this.priceFromPixel(y,panel,yAxis);if(panel.chart.untransformFunc&&Z1V.L6e(panel.name,panel.chart.name)){p=panel.chart.untransformFunc(this,panel.chart,p);}
return p;}
;STXChart.prototype.pixelFromPriceTransform=function(price,panel,yAxis){if(panel.chart.transformFunc)price=panel.chart.transformFunc(this,panel.chart,price,yAxis);return this.pixelFromPrice(price,panel,yAxis);}
;STXChart.prototype.pixelFromPrice=function(price,panel,yAxis){if(!panel)panel=this.chart.panel;var yax=yAxis?yAxis:panel.yAxis,y=Z1V.Y6e((yax.high-price),yax.multiplier);if(yax.semiLog){var p=Math.max(price,0),logPrice=Z1V.c6e(Math.log(p),Math.LN10),height=yax.height;y=Z1V.R6e(height,height*(logPrice-yax.logLow)/yax.logShadow);}
y+=yax.top;return y;}
;STXChart.prototype.pixelFromValueAdjusted=function(panel,tick,value,yAxis){if(this.layout.adj||!this.charts[panel.name])return this.pixelFromPriceTransform(value,panel,yAxis);var a=Math.round(tick),ratio;if(Z1V.d6e(a,0)&&Z1V.C6e(a,panel.chart.dataSet.length)&&(ratio=panel.chart.dataSet[a].ratio)){return this.pixelFromPriceTransform(Z1V.b6e(value,ratio),panel,yAxis);}
return this.pixelFromPriceTransform(value,panel,yAxis);}
;STXChart.prototype.adjustIfNecessary=function(panel,tick,value){if(this.layout.adj)return value;if(!panel||!this.charts[panel.name])return value;var a=Math.round(tick),ratio;if(Z1V.z6e(a,0)&&Z1V.x6e(a,panel.chart.dataSet.length)&&(ratio=panel.chart.dataSet[a].ratio)){return Z1V.P6e(value,ratio);}
return value;}
;STXChart.prototype.setTransform=function(chart,transformFunction,untransformFunction){chart.transformFunc=transformFunction;chart.untransformFunc=untransformFunction;}
;STXChart.prototype.unsetTransform=function(chart){delete  chart.transformFunc;delete  chart.untransformFunc;for(var i=0;Z1V.a6e(i,chart.dataSet.length);i++){chart.dataSet[i].transform=null;}
}
;STXChart.prototype.undo=function(){var n68="ir",L9j="rossha",q28="undo";if(this.runPrepend(q28,arguments))return ;if(this.activeDrawing){this.activeDrawing.abort();this.activeDrawing=Z1V.z38;STX.clearCanvas(this.chart.tempCanvas,this);this.draw();STX.swapClassName(this.controls.crossX,y0j,H5j);STX.swapClassName(this.controls.crossY,(T28+G08+P6j+V6j+L9j+n68),H5j);STXChart.drawingLine=X58;}
this.runAppend(q28,arguments);}
;STXChart.prototype.undoStamp=function(){this.undoStamps.push(STX.shallowClone(this.drawingObjects));}
;STXChart.prototype.undoLast=function(){if(this.activeDrawing){this.undo();}
else{if(this.undoStamps.length){this.drawingObjects=this.undoStamps.pop();this.changeOccurred("vector");this.draw();}
}
}
;STXChart.prototype.addDrawing=function(drawing){this.undoStamp();this.drawingObjects.push(drawing);}
;STXChart.prototype.plotLine=function(x0,x1,y0,y1,color,type,context,confineToPanel,parameters){if(!parameters)parameters={}
;if(Z1V.V1e(parameters.pattern,"none"))return ;if(Z1V.w1e(confineToPanel,true))confineToPanel=this.chart.panel;if(Z1V.l1e(context,null)||typeof (context)=="undefined")context=this.chart.context;if(isNaN(x0)||isNaN(x1)||isNaN(y0)||isNaN(y1)){return ;}
var edgeTop=0,edgeBottom=this.chart.canvasHeight,edgeLeft=0,edgeRight=this.right;if(confineToPanel){edgeBottom=confineToPanel.yAxis.bottom;edgeTop=confineToPanel.yAxis.top;edgeLeft=confineToPanel.left;edgeRight=confineToPanel.right;}
var bigX,bigY,v;if(Z1V.U1e(type,"ray")){bigX=10000000;if(Z1V.n1e(x1,x0))bigX=-10000000;v={"x0":x0,"x1":x1,"y0":y0,"y1":y1}
;bigY=STX.yIntersection(v,bigX);x1=bigX;y1=bigY;}
if(Z1V.H1e(type,"line")||Z1V.i1e(type,"horizontal")||Z1V.q1e(type,"vertical")){bigX=10000000;var littleX=-10000000;v={"x0":x0,"x1":x1,"y0":y0,"y1":y1}
;bigY=STX.yIntersection(v,bigX);var littleY=STX.yIntersection(v,littleX);x0=littleX;x1=bigX;y0=littleY;y1=bigY;}
var t0=0.0,t1=1.0,xdelta=Z1V.B1e(x1,x0),ydelta=Z1V.m1e(y1,y0),p,q,r;for(var edge=0;Z1V.N1e(edge,4);edge++){if(Z1V.O1e(edge,0)){p=-xdelta;q=-(Z1V.y1e(edgeLeft,x0));}
if(Z1V.W1e(edge,1)){p=xdelta;q=(Z1V.Q1e(edgeRight,x0));}
if(Z1V.f1e(edge,2)){p=-ydelta;q=-(Z1V.I1e(edgeTop,y0));}
if(Z1V.M1e(edge,3)){p=ydelta;q=(Z1V.S4z(edgeBottom,y0));}
r=Z1V.u4z(q,p);if((y1||Z1V.h4z(y1,0))&&Z1V.t4z(p,0)&&Z1V.s4z(q,0)){return false;}
if(Z1V.k4z(p,0)){if(Z1V.o4z(r,t1))return false;else if(Z1V.X4z(r,t0))t0=r;}
else if(Z1V.j4z(p,0)){if(Z1V.D4z(r,t0))return false;else if(Z1V.K4z(r,t1))t1=r;}
}
var x0clip=x0+Z1V.g4z(t0,xdelta),y0clip=y0+Z1V.e4z(t0,ydelta),x1clip=x0+Z1V.G4z(t1,xdelta),y1clip=y0+Z1V.Z4z(t1,ydelta);if(!y1&&Z1V.v4z(y1,0)&&!y0&&Z1V.T4z(y0,0)){y0clip=edgeTop;y1clip=edgeBottom;x0clip=v.x0;x1clip=v.x0;if(Z1V.J2z(v.x0,edgeRight))return false;if(Z1V.r2z(v.x0,edgeLeft))return false;}
else if(!y1&&Z1V.p2z(y1,0)){if(Z1V.E2z(v.y0,v.y1))y1clip=edgeBottom;else y1clip=edgeTop;x0clip=v.x0;x1clip=v.x0;if(Z1V.A2z(v.x0,edgeRight))return false;if(Z1V.F2z(v.x0,edgeLeft))return false;}
context.lineWidth=1.1;if(typeof (color)=="object"){context.strokeStyle=color.color;if(color.opacity)context.globalAlpha=color.opacity;else context.globalAlpha=1;context.lineWidth=parseInt(STX.stripPX(color.width));}
else{if(!color||Z1V.L2z(color,"auto")||STX.isTransparent(color)){context.strokeStyle=this.defaultColor;}
else{context.strokeStyle=color;}
}
if(parameters.opacity)context.globalAlpha=parameters.opacity;if(parameters.lineWidth)context.lineWidth=parameters.lineWidth;if(Z1V.Y2z(type,"zig zag"))context.lineWidth=5;var pattern=null;if(parameters.pattern){pattern=parameters.pattern;if(Z1V.c2z(pattern,"solid")){pattern=null;}
else if(Z1V.R2z(pattern,"dotted")){pattern=[context.lineWidth,context.lineWidth];}
else if(Z1V.d2z(pattern,"dashed")){pattern=[Z1V.C2z(context.lineWidth,5),Z1V.b2z(context.lineWidth,5)];}
}
context.stxLine(x0clip,y0clip,x1clip,y1clip,context.strokeStyle,context.globalAlpha,context.lineWidth,pattern);context.globalAlpha=1;context.lineWidth=1;}
;STXChart.prototype.connectTheDots=function(points,color,type,context,confineToPanel,parameters){var E78="dott";if(!parameters)parameters={}
;if(Z1V.z2z(parameters.pattern,"none"))return ;if(Z1V.x2z(confineToPanel,true))confineToPanel=this.chart.panel;if(Z1V.P2z(context,null)||typeof (context)=="undefined")context=this.chart.context;if(Z1V.a2z(points.length,4))return ;var edgeTop=0,edgeBottom=this.chart.canvasHeight,edgeLeft=0,edgeRight=this.chart.width;if(confineToPanel){edgeBottom=confineToPanel.yAxis.bottom;edgeTop=confineToPanel.yAxis.top;}
context.lineWidth=1.1;if(typeof (color)=="object"){context.strokeStyle=color.color;if(color.opacity)context.globalAlpha=color.opacity;else context.globalAlpha=1;context.lineWidth=parseInt(STX.stripPX(color.width));}
else{if(!color||Z1V.V7z(color,"auto")||STX.isTransparent(color)){context.strokeStyle=this.defaultColor;}
else{context.strokeStyle=color;}
}
if(parameters.opacity)context.globalAlpha=parameters.opacity;if(parameters.lineWidth)context.lineWidth=parameters.lineWidth;var pattern=null;if(parameters.pattern){pattern=parameters.pattern;if(Z1V.w7z(pattern,"solid")){pattern=null;}
else if(Z1V.l7z(pattern,(E78+X1j))){pattern=[context.lineWidth,context.lineWidth];}
else if(Z1V.U7z(pattern,"dashed")){pattern=[Z1V.n7z(context.lineWidth,5),Z1V.H7z(context.lineWidth,5)];}
}
context.beginPath();for(var i=0;Z1V.i7z(i,points.length-2);i+=2){var x0=points[i],y0=points[i+1],x1=points[i+2],y1=points[i+3];if(isNaN(x0)||isNaN(x1)||isNaN(y0)||isNaN(y1))return ;var t0=0.0,t1=1.0,xdelta=Z1V.q7z(x1,x0),ydelta=Z1V.B7z(y1,y0),p,q,r;for(var edge=0;Z1V.m7z(edge,4);edge++){if(Z1V.N7z(edge,0)){p=-xdelta;q=-(Z1V.O7z(edgeLeft,x0));}
if(Z1V.y7z(edge,1)){p=xdelta;q=(Z1V.W7z(edgeRight,x0));}
if(Z1V.Q7z(edge,2)){p=-ydelta;q=-(Z1V.f7z(edgeTop,y0));}
if(Z1V.I7z(edge,3)){p=ydelta;q=(Z1V.M7z(edgeBottom,y0));}
r=Z1V.S3z(q,p);if((y1||Z1V.u3z(y1,0))&&Z1V.h3z(p,0)&&Z1V.t3z(q,0)){return false;}
if(Z1V.s3z(p,0)){if(Z1V.k3z(r,t1))return false;else if(Z1V.o3z(r,t0))t0=r;}
else if(Z1V.X3z(p,0)){if(Z1V.j3z(r,t0))return false;else if(Z1V.D3z(r,t1))t1=r;}
}
var x0clip=x0+Z1V.K3z(t0,xdelta),y0clip=y0+Z1V.g3z(t0,ydelta),x1clip=x0+Z1V.e3z(t1,xdelta),y1clip=y0+Z1V.G3z(t1,ydelta);try{if(pattern){context.dashedLineTo(x0clip,y0clip,x1clip,y1clip,pattern);}
else{context.moveTo(x0clip,y0clip);context.lineTo(x1clip,y1clip);}
}
catch(e){}
}
context.stroke();context.closePath();context.globalAlpha=1;context.lineWidth=1;}
;STXChart.prototype.plotSpline=function(points,tension,color,type,context,confineToPanel,parameters){var H98="to",f8j="au";if(!parameters)parameters={}
;if(Z1V.Z3z(parameters.pattern,"none"))return ;if(Z1V.v3z(confineToPanel,true))confineToPanel=this.chart.panel;if(Z1V.T3z(context,null)||typeof (context)=="undefined")context=this.chart.context;context.save();context.lineWidth=1.1;if(typeof (color)=="object"){context.strokeStyle=color.color;if(color.opacity)context.globalAlpha=color.opacity;else context.globalAlpha=1;context.lineWidth=parseInt(STX.stripPX(color.width));}
else{if(!color||Z1V.J9z(color,(f8j+H98))||STX.isTransparent(color)){context.strokeStyle=this.defaultColor;}
else{context.strokeStyle=color;}
}
if(parameters.opacity)context.globalAlpha=parameters.opacity;if(parameters.lineWidth)context.lineWidth=parameters.lineWidth;var pattern=null;if(parameters.pattern){pattern=parameters.pattern;if(Z1V.r9z(pattern,"solid")){pattern=null;}
else if(Z1V.p9z(pattern,"dotted")){pattern=[context.lineWidth,context.lineWidth];}
else if(Z1V.E9z(pattern,"dashed")){pattern=[Z1V.A9z(context.lineWidth,5),Z1V.F9z(context.lineWidth,5)];}
}
if(pattern&&context.setLineDash){context.setLineDash(pattern);context.lineDashOffset=0;}
plotSpline(points,tension,context);context.restore();}
;STXChart.prototype.drawingClick=function(panel,x,y){var b6j="oss";if(!this.activeDrawing){if(!panel)return ;var Factory=STXChart.drawingTools[this.currentVectorParameters.vectorType];if(!Factory){if(STX.Drawing[this.currentVectorParameters.vectorType]){Factory=STX.Drawing[this.currentVectorParameters.vectorType];STXChart.registerDrawingTool(this.currentVectorParameters.vectorType,Factory);}
}
if(Factory){this.activeDrawing=new Factory();this.activeDrawing.construct(this,panel);if(!this.charts[panel.name]){if(this.activeDrawing.chartsOnly){this.activeDrawing=Z1V.z38;return ;}
}
}
}
if(this.activeDrawing){if(this.userPointerDown&&!this.activeDrawing.dragToDraw){if(!STXChart.drawingLine)this.activeDrawing=Z1V.z38;return ;}
var tick=this.tickFromPixel(x,panel.chart),dpanel=this.panels[this.activeDrawing.panelName],value=this.adjustIfNecessary(dpanel,tick,this.valueFromPixelUntransform(y,dpanel));if(this.preferences.magnet&&this.magnetizedPrice){value=this.adjustIfNecessary(dpanel,tick,this.magnetizedPrice);}
if(this.activeDrawing.click(this.chart.tempCanvas.context,tick,value)){if(this.activeDrawing){STXChart.drawingLine=X58;STX.clearCanvas(this.chart.tempCanvas,this);this.addDrawing(this.activeDrawing);this.activeDrawing=Z1V.z38;this.adjustDrawings();this.draw();this.changeOccurred(x8j);STX.swapClassName(this.controls.crossX,y0j,H5j);STX.swapClassName(this.controls.crossY,y0j,H5j);}
}
else{this.changeOccurred(h5j);STXChart.drawingLine=I38;STX.swapClassName(this.controls.crossX,H5j,(S38+P6j+V6j+g28+b6j+Z1V.h98+m5j+c98+g28));STX.swapClassName(this.controls.crossY,H5j,y0j);}
return I38;}
return X58;}
;STXChart.prototype.whichPanel=function(y){for(var p in this.panels){var panel=this.panels[p];if(panel.hidden)continue;if(Z1V.L9z(y,panel.top)&&Z1V.Y9z(y,panel.bottom))return panel;}
return Z1V.z38;}
;STXChart.prototype.mouseup=function(e){if(this.runPrepend(S58,arguments))return ;if(this.repositioningDrawing){if(!this.currentVectorParameters.vectorType||(Z1V.c9z(Date.now()-this.mouseTimer,u18))){this.changeOccurred(x8j);STX.clearCanvas(this.chart.tempCanvas,this);this.repositioningDrawing=Z1V.z38;this.adjustDrawings();this.draw();return ;}
else{this.repositioningDrawing=X58;}
}
if(this.repositioningBaseline){this.repositioningBaseline=Z1V.z38;this.chart.panel.yAxis.scroll=Z1V.R9z(this.pixelFromPriceTransform(this.chart.baseline.userLevel,this.chart.panel),(this.chart.panel.yAxis.top+this.chart.panel.yAxis.bottom)/Z1V.h3j);this.draw();return ;}
var wasMouseDown=this.userPointerDown;this.userPointerDown=X58;if(!this.displayInitialized)return ;this.grabbingScreen=X58;if(Z1V.d9z(this.openDialog,l28)){if(STXChart.insideChart)STX.unappendClassName(this.container,O6j);return ;}
if(this.grabOverrideClick){STX.unappendClassName(this.container,O6j);this.grabOverrideClick=X58;return ;}
if(STXChart.insideChart)STX.unappendClassName(this.container,O6j);if(STXChart.resizingPanel){STX.clearCanvas(this.chart.tempCanvas,this);this.resizePanels();STXChart.resizingPanel=Z1V.z38;return ;}
if(!e)e=event;if((e.which&&Z1V.C9z(e.which,Z1V.h3j))||(e.button&&Z1V.b9z(e.button,Z1V.h3j))){if(this.anyHighlighted){this.rightClickHighlighted();if(e.preventDefault)e.preventDefault();e.stopPropagation();return X58;}
else{return I38;}
}
if(Z1V.z9z(e.clientX,this.left)||Z1V.x9z(e.clientX,this.right))return ;if(Z1V.P9z(e.clientY,this.top)||Z1V.a9z(e.clientY,this.bottom))return ;var cy=this.backOutY(e.clientY),cx=this.backOutX(e.clientX);if(wasMouseDown){this.drawingClick(this.currentPanel,cx,cy);}
if(!this.activeDrawing){if(this.callbacks.tap){(this.callbacks.tap)({stx:this,panel:this.currentPanel,x:cx,y:cy}
);}
}
this.runAppend(S58,arguments);}
;STXChart.prototype.grabbingHand=function(){if(!this.allowScroll)return ;if(!this.grabbingScreen)return ;if(STX.touchDevice)return ;STX.appendClassName(this.container,O6j);}
;STXChart.prototype.mousedown=function(e){if(this.runPrepend("mousedown",arguments))return ;this.grabOverrideClick=false;if(Z1V.V8z(this.openDialog,""))return ;if(!this.displayInitialized)return ;if(!this.displayCrosshairs)return ;if(!STXChart.insideChart)return ;if(this.manageTouchAndMouse&&e&&e.preventDefault)e.preventDefault();this.mouseTimer=Date.now();this.userPointerDown=true;if(!e)e=event;if((e.which&&Z1V.w8z(e.which,2))||(e.button&&Z1V.l8z(e.button,2))){return ;}
for(var p in this.panels){var panel=this.panels[p];if(panel.highlighted){STXChart.resizingPanel=panel;return ;}
}
var chart=this.currentPanel.chart;if(Z1V.U8z(e.clientX,this.left)&&Z1V.n8z(e.clientX,this.right)&&Z1V.H8z(e.clientY,this.top)&&Z1V.i8z(e.clientY,this.bottom)){if(this.repositioningDrawing)return ;for(var i=0;Z1V.q8z(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];if(drawing.highlighted){if(this.ctrl){var Factory=STXChart.drawingTools[drawing.name],clonedDrawing=new Factory();clonedDrawing.reconstruct(this,drawing.serialize());this.drawingObjects.push(clonedDrawing);this.repositioningDrawing=clonedDrawing;clonedDrawing.repositioner=drawing.repositioner;return ;}
this.repositioningDrawing=drawing;return ;}
}
if(Z1V.B8z(this.layout.chartType,"baseline_delta")&&Z1V.m8z(chart.baseline.userLevel,false)){var y0=this.valueFromPixelUntransform(Z1V.N8z(this.cy,5),this.currentPanel),y1=this.valueFromPixelUntransform(this.cy+5,this.currentPanel),x0=Z1V.O8z(this.chart.right,parseInt(getComputedStyle(this.controls.baselineHandle).width,10));if(Z1V.y8z(chart.baseline.actualLevel,y0)&&Z1V.W8z(chart.baseline.actualLevel,y1)&&Z1V.Q8z(this.cx,x0)){this.repositioningBaseline={lastDraw:Date.now()}
;return ;}
}
this.drawingClick(this.currentPanel,this.cx,this.cy);if(this.activeDrawing&&this.activeDrawing.dragToDraw)return ;}
this.grabbingScreen=true;this.yToleranceBroken=false;if(!e)e=event;this.grabStartX=e.clientX;this.grabStartY=e.clientY;this.grabStartScrollX=chart.scroll;this.grabStartScrollY=chart.panel.yAxis.scroll;this.grabStartCandleWidth=this.layout.candleWidth;this.grabStartZoom=this.whichYAxis(this.currentPanel).zoom;setTimeout((function(self){return function(){self.grabbingHand();}
;}
)(this),100);this.runAppend("mousedown",arguments);}
;STXChart.prototype.changeVectorType=function(value){this.currentVectorParameters.vectorType=value;if(STXChart.drawingLine)this.undo();this.setCrosshairColors();if(STXChart.insideChart)this.doDisplayCrosshairs();}
;STXChart.prototype.rightClickOverlay=function(name){var Y28="rightClickOverlay",R28="rl",F9j="Ove",k78="li",r78="righ";if(this.runPrepend((r78+Z1V.A28+d08+k78+V6j+Z1V.Z38+F9j+R28+m5j+Z1V.N68),arguments))return ;var sd=this.overlays[name];if(sd.editFunction){sd.editFunction();}
else{this.removeOverlay(name);}
this.runAppend(Y28,arguments);}
;STXChart.prototype.removeOverlay=function(name){var W6j="erl",t88="eO",F48="removeOverlay";if(this.runPrepend(F48,arguments))return ;var mySD;for(var o in this.overlays){var sd=this.overlays[o];if(sd.inputs.Field&&sd.inputs.Field.indexOf(name)!=-Z1V.E3j){this.removeOverlay(sd.name);}
else if(Z1V.f8z(sd.name,name)){mySD=sd;}
}
var study=this.layout.studies[name];STX.deleteRHS(STX.Studies.studyPanelMap,study);if(mySD)this.cleanupRemovedStudy(mySD);delete  this.overlays[name];this.displaySticky();this.createDataSet();this.changeOccurred(y3j);this.runAppend((M38+A8j+t88+Z1V.F18+W6j+m5j+Z1V.N68),arguments);}
;STXChart.prototype.addSeries=function(field,parameters,cb){if(this.runPrepend("addSeries",arguments))return ;if(!parameters)parameters={}
;if(!parameters.chartName)parameters.chartName=this.chart.name;var obj={parameters:STX.clone(parameters),yValueCache:[],display:field}
;if(Z1V.I8z("display",obj.parameters))obj.display=obj.parameters.display;if(obj.parameters.isComparison)obj.parameters.shareYAxis=true;if(!obj.parameters.chartType&&obj.parameters.color)obj.parameters.chartType="line";if(obj.parameters.chartType&&Z1V.M8z(obj.parameters.chartType,"mountain"))obj.parameters.chartType="line";if(!obj.parameters.panel)obj.parameters.panel=this.chart.panel.name;var chart=this.charts[parameters.chartName],self=this;function addSeriesData(stx){var mIterator=0,cIterator=0;while(parameters.data&&Z1V.S0z(mIterator,stx.masterData.length)&&Z1V.u0z(cIterator,parameters.data.length)){var c=parameters.data[cIterator],m=stx.masterData[mIterator];if(!c.DT||typeof c.DT=="undefined")c.DT=STX.strToDateTime(c.Date);if(Z1V.h0z(c.DT.getTime(),m.DT.getTime())){if(typeof c.Value!="undefined"){m[field]=c.Value;}
else if(stx.layout.adj&&typeof c.Adj_Close!="undefined"){m[field]=c.Adj_Close;}
else{m[field]=c.Close;}
cIterator++;mIterator++;continue;}
if(Z1V.t0z(c.DT,m.DT))cIterator++;else mIterator++;}
}
function setUpRenderer(stx,obj){if(obj.parameters.color){var r=stx.getSeriesRenderer("_generic_series");if(!r){r=stx.setSeriesRenderer(new STX.Renderer.Lines({params:{panel:obj.parameters.panel,type:"legacy",name:"_generic_series",overChart:true}
,}
));}
r.attachSeries(field,obj.parameters).ready();}
}
if(chart){chart.series[field]=obj;}
if(parameters.isComparison){self.setComparison(true,chart);}
var doneInCallback=false;if(parameters.data){if(parameters.data.useDefaultQuoteFeed){var driver=this.quoteDriver,fetchParams=driver.makeParams(field,this.chart);fetchParams.startDate=this.chart.masterData[0].DT;fetchParams.endDate=this.chart.masterData[Z1V.s0z(this.chart.masterData.length,1)].DT;if(parameters.symbolObject)fetchParams.symbolObject=parameters.symbolObject;doneInCallback=true;driver.quoteFeed.fetch(fetchParams,function(dataCallback){if(!dataCallback.error){parameters.data=dataCallback.quotes;addSeriesData(self);setUpRenderer(self,obj);}
if(cb)cb(dataCallback.error);self.runAppend("addSeries",arguments);}
);}
else if(this.masterData){addSeriesData(this);}
}
else{obj.addSeriesData=addSeriesData;}
if(!doneInCallback){setUpRenderer(self,obj);if(cb)cb();this.runAppend("addSeries",arguments);}
return obj;}
;STXChart.prototype.removeSeries=function(field,chart){var p9j="ie",B08="eS",d6j="ov",d5j="em";if(this.runPrepend((g28+d5j+d6j+B08+A6j+p9j+T28),arguments))return ;if(!chart)chart=this.chart;delete  chart.series[field];var compare=false;for(var s in chart.series){if(chart.series[s].parameters.isComparison){compare=true;break;}
}
this.setComparison(compare,chart);for(var panel in this.panels){if(Z1V.k0z(this.panels[panel].name.indexOf(STX.Comparison.correlationPanel),0)){var compareArray=this.layout.studies[this.panels[panel].name].inputs["Compare To"];for(var i=0;Z1V.o0z(i,compareArray.length);i++){if(Z1V.X0z(compareArray[i],field))compareArray.splice(i,1);}
delete  this.layout.studies[this.panels[panel].name].outputs["Result "+field];delete  this.layout.studies[this.panels[panel].name].outputMap["Result "+field+" "+this.panels[panel].name];if(!compareArray.length)this.panelClose(this.panels[panel]);}
}
this.runAppend("removeSeries",arguments);}
;STXChart.prototype.rendererAction=function(chart,phase){var K7j="overlay",l78="rendererAction";if(this.runPrepend(l78,arguments))return ;for(var id in chart.seriesRenderers){var renderer=chart.seriesRenderers[id];if(renderer.params.overChart&&Z1V.j0z(phase,K0j))continue;if(!renderer.params.overChart&&Z1V.D0z(phase,K7j))continue;if(!this.panels[renderer.params.panel])continue;if(Z1V.K0z(this.panels[renderer.params.panel].chart,chart))continue;if(Z1V.g0z(phase,o0j)){renderer.performCalculations();}
else{renderer.draw();if(renderer.cb)renderer.cb(renderer.colors);}
}
this.runAppend(l78,arguments);}
;STXChart.prototype.drawSeries=function(chart,seriesArray,yAxis){var U0j="ain",b8j="ine",e3j="ap";if(this.runPrepend("drawSeries",arguments))return ;var quotes=chart.dataSegment,legendColorMap={}
,series=null;if(!seriesArray)seriesArray=chart.series;for(var field in seriesArray){series=seriesArray[field];var parameters=series.parameters;if(!parameters.chartType)continue;var panel=chart.panel;if(parameters.panel)panel=this.panels[parameters.panel];if(!panel)continue;var yax=yAxis?yAxis:panel.yAxis,minMax=[parameters.minimum,parameters.maximum];if((!parameters.minimum&&Z1V.e0z(parameters.minimum,0))||(!parameters.maximum&&Z1V.G0z(parameters.maximum,0))){var minMaxCalc=STX.minMax(quotes,field);if(!parameters.minimum&&Z1V.Z0z(parameters.minimum,0))minMax[0]=minMaxCalc[0];if(!parameters.maximum&&Z1V.v0z(parameters.maximum,0))minMax[1]=minMaxCalc[1];}
var min=minMax[0],top=yax.top,bottom=yax.bottom,height=Z1V.T0z(bottom,top),t=parameters.marginTop,b=parameters.marginBottom;if(t)top=Z1V.J5z(t,1)?(top+t):(top+(Z1V.r5z(height,t)));if(b)bottom=Z1V.p5z(b,1)?(Z1V.E5z(bottom,b)):(Z1V.A5z(bottom,(height*b)));var multiplier=Z1V.F5z((bottom-top),(minMax[1]-min)),started=false,lastPoint=null,val=null,x=null,y=null,px=null,py=null,cw=this.layout.candleWidth,context=this.chart.context,isStep=(Z1V.L5z(parameters.type,"step")||Z1V.Y5z(parameters.subtype,"step")),color=parameters.color;if(!color)color=this.defaultColor;var width=parameters.width;if(!width||isNaN(width)||Z1V.c5z(width,1))width=1;if(series.highlight||series.parameters.highlight)width*=2;this.startClip(panel.name);seriesPlotter=new STX.Plotter();seriesPlotter.newSeries("line","stroke",color,1,width);if(parameters.gaps&&parameters.gaps.color)seriesPlotter.newSeries("gap","stroke",parameters.gaps.color,1,width);else seriesPlotter.newSeries("gap","stroke",color,1,width);series.yValueCache=new Array(quotes.length);var yValueCache=series.yValueCache,lastQuote=null,gap=null,points=[],doTransform=series.parameters.shareYAxis&&!yAxis,shareYAxis=series.parameters.shareYAxis||yAxis,xbase=Z1V.R5z(panel.left,(isStep?1:0.5)*cw,this.micropixels,1),x0=xbase;for(var i=0;Z1V.O5z(i,quotes.length);i++){xbase+=Z1V.y5z(cw,2);if(isStep)xbase+=Z1V.W5z(cw,2);cw=this.layout.candleWidth;if(!isStep)xbase+=Z1V.Q5z(cw,2);if(Z1V.f5z(x,null)&&Z1V.I5z(y,null)){if(!gap||parameters.gaps)points.push([x,y]);}
var quote=quotes[i];if(!quote)continue;if(quote.candleWidth){if(!isStep)xbase+=Z1V.M5z((quote.candleWidth-cw),2);cw=quote.candleWidth;}
if(quote.transform&&doTransform)quote=quote.transform;val=quote[field];if(!val&&Z1V.S6z(val,0)){if(isStep||parameters.gaps){yValueCache[i]=y;}
if(Z1V.u6z(gap,false)){if(isStep){x+=cw;seriesPlotter.lineTo((l38+c98+Q78+M5j),x,y);}
seriesPlotter.moveTo("gap",x,y);}
gap=true;if(x&&!parameters.gaps)points.push([x,bottom]);continue;}
if(!isStep&&lastPoint&&Z1V.h6z(lastPoint,i-1)){px=x;py=y;}
else{px=null;}
x=xbase;if(Z1V.t6z(x,panel.right))lastQuote=quote;if(this.extendLastTick&&Z1V.s6z(i,quotes.length-1)){x+=this.offset;}
if(isStep&&started){if(gap&&parameters.gaps&&parameters.gaps.pattern){seriesPlotter.dashedLineTo("gap",x,y,parameters.gaps.pattern);}
else if(gap&&!parameters.gaps){points.push([x,bottom]);seriesPlotter.moveTo("gap",x,y);}
else if(!gap&&parameters.pattern){seriesPlotter.dashedLineTo("line",x,y,parameters.pattern);}
else{seriesPlotter.lineTo((gap?"gap":"line"),x,y);}
points.push([x,y]);}
if(shareYAxis){y=this.pixelFromPrice(val,panel,yax);}
else{y=Z1V.k6z(bottom,((val-min)*multiplier));}
if(Z1V.o6z(px,null)){var vector={x0:px,x1:x,y0:py,y1:y}
;for(;Z1V.X6z(lastPoint,i);lastPoint++){var xInt=panel.left+Math.floor(xbase+Z1V.j6z(((lastPoint-i)+0.5),cw))+this.micropixels-1,yInt=STX.yIntersection(vector,xInt);yValueCache[lastPoint]=yInt;}
}
yValueCache[i]=y;if(i&&points.length&&started&&!yValueCache[Z1V.D6z(i,1)]&&Z1V.K6z(yValueCache[i-1],0)){for(var bf=Z1V.g6z(i,1);Z1V.e6z(bf,0);bf--){if(yValueCache[bf])break;yValueCache[bf]=points[Z1V.G6z(points.length,1)][1];}
}
if(!started){started=true;var leftTick=Z1V.Z6z(chart.dataSet.length,chart.scroll);if(Z1V.v6z(leftTick,0)){seriesPlotter.moveTo((gap?"gap":"line"),x,y);}
else{var baseline=chart.dataSet[leftTick];if(baseline.transform&&doTransform)baseline=baseline.transform;var y0=baseline[field];if(shareYAxis){y0=this.pixelFromPrice(y0,panel,yax);}
else{y0=Z1V.T6z(bottom,((y0-min)*multiplier));}
y0=Math.min(Math.max(y0,top),bottom);if(isNaN(y0)){seriesPlotter.moveTo((gap?"gap":"line"),x,y);}
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
else{if(gap&&parameters.gaps&&parameters.gaps.pattern){seriesPlotter.dashedLineTo((Z98+e3j),x,y,parameters.gaps.pattern);}
else if(gap&&!parameters.gaps){points.push([x,bottom]);seriesPlotter.moveTo("gap",x,y);}
else if(!gap&&parameters.pattern){seriesPlotter.dashedLineTo("line",x,y,parameters.pattern);if(isStep&&Z1V.J1z(i,quotes.length-1))seriesPlotter.dashedLineTo("line",x+cw,y,parameters.pattern);}
else{seriesPlotter.lineTo((gap?"gap":"line"),x,y);if(isStep&&Z1V.r1z(i,quotes.length-1)&&!gap)seriesPlotter.lineTo((l38+b8j),x+cw,y);}
}
lastPoint=i;if(gap)seriesPlotter.moveTo("line",x,y);gap=false;}
if(gap){x=panel.left+Math.floor(xbase+cw+this.micropixels)-1;if(this.extendLastTick)x+=this.offset;if(parameters.gaps&&parameters.gaps.pattern){if(started){seriesPlotter.dashedLineTo("gap",x,y,parameters.gaps.pattern);}
}
else if(parameters.gaps){seriesPlotter.lineTo("gap",x,y);}
}
if(Z1V.p1z(series.parameters.chartType,"mountain")&&points.length){points.push([x,(gap&&!parameters.gaps)?bottom:y]);if(!parameters.fillStyle){parameters.fillStyle=color;if(!parameters.fillOpacity)parameters.fillOpacity=0.3;}
seriesPlotter.newSeries("mountain","fill",parameters.fillStyle,parameters.fillOpacity);for(var pt=0;Z1V.E1z(pt,points.length);pt++){seriesPlotter[pt?"lineTo":"moveTo"]("mountain",points[pt][0],Math.min(bottom,points[pt][1]));}
seriesPlotter.lineTo("mountain",x,bottom);seriesPlotter.lineTo("mountain",points[0][0],bottom);seriesPlotter.draw(context,(H38+J38+Z1V.F28+S98+U0j));}
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
;STXChart.prototype.isDailyInterval=function(interval){if(Z1V.A1z(interval,T8j))return I38;if(Z1V.F1z(interval,N1j))return I38;if(Z1V.L1z(interval,(B58+Z1V.h98)))return I38;return X58;}
;STXChart.prototype.setPeriodicityV2=function(period,interval,timeUnit,cb){var K6j="et",R5j="teDrive",B78="q",X6j="llbac",a38="her",L48="ei",J6j="cau",r38="ici",n78="riod",w3j="anno";if(this.runPrepend("setPeriodicityV2",arguments))return ;if(typeof timeUnit==="function"){cb=timeUnit;timeUnit=null;}
var switchInterval=false;if(interval){if(Z1V.Y1z(interval,"year")){interval="month";if(!period)period=1;period=Z1V.c1z(period,12);}
var getDifferentData=false;if(this.chart.symbol){var isDaily=this.isDailyInterval(interval),wasDaily=this.isDailyInterval(this.layout.interval);if(isDaily)timeUnit=null;else if(Z1V.R1z(interval,"tick"))timeUnit=null;else if(!timeUnit)timeUnit="minute";if(Z1V.d1z(isDaily,wasDaily)||this.dontRoll)getDifferentData=true;if(!wasDaily){if(Z1V.C1z(this.layout.interval,interval))getDifferentData=true;}
if(Z1V.b1z(timeUnit,this.layout.timeUnit))getDifferentData=true;}
if(getDifferentData){this.layout.interval=interval;this.layout.periodicity=period;this.layout.timeUnit=timeUnit;this.changeOccurred("layout");if(this.quoteDriver){for(var c in this.charts){if(this.charts[c].symbol)this.quoteDriver.newChart({symbol:this.charts[c].symbol,chart:this.charts[c]}
,cb);}
return ;}
else if(this.dataCallback){this.dataCallback();if(cb)cb(null);return ;}
else{console.log((V6j+w3j+Z1V.A28+s6j+V6j+p98+Q78+Z98+M5j+s6j+Z1V.s78+M5j+n78+r38+Z1V.A28+Z1V.N68+s6j+i5j+M5j+J6j+T28+M5j+s6j+Q78+L48+Z1V.A28+a38+s6j+b5j+a5j+d08+m5j+X6j+Z1V.Z38+s6j+J38+g28+s6j+B78+Z1V.F28+J38+R5j+g28+s6j+m5j+g28+M5j+s6j+T28+K6j));return ;}
}
this.layout.interval=interval;}
var chartName,chart;for(chartName in this.charts){chart=this.charts[chartName];var dt,pos=Math.round(Z1V.z1z(chart.maxTicks,2));this.setCandleWidth(this.layout.candleWidth,chart);var centerMe=true,rightAligned=false;if(Z1V.x1z(chart.scroll,chart.maxTicks))centerMe=false;else if(chart.dataSegment&&!chart.dataSegment[pos]){centerMe=false;rightAligned=Z1V.P1z(chart.scroll,chart.dataSet.length);}
if(centerMe&&chart.dataSegment&&Z1V.a1z(chart.dataSegment.length,0)){if(Z1V.V4H(chart.maxTicks,((Math.round((this.chart.width/this.layout.candleWidth)-0.499)-1)/2))){pos=Z1V.w4H(chart.dataSegment.length,1);}
if(Z1V.l4H(pos,chart.dataSegment.length)){dt=chart.dataSegment[Z1V.U4H(chart.dataSegment.length,1)].DT;pos=Z1V.n4H(chart.dataSegment.length,1);}
else{dt=chart.dataSegment[pos].DT;}
}
this.layout.periodicity=period;this.createDataSet();if(centerMe){if(chart.dataSegment&&Z1V.H4H(chart.dataSegment.length,0)){for(var i=Z1V.i4H(chart.dataSet.length,1);Z1V.q4H(i,0);i--){var nd=chart.dataSet[i].DT;if(Z1V.B4H(nd.getTime(),dt.getTime())){chart.scroll=(Z1V.m4H(chart.dataSet.length,i))+pos;break;}
}
}
}
else if(!rightAligned){var wsInTicks=Math.round(Z1V.N4H(this.preferences.whitespace,this.layout.candleWidth));chart.scroll=Z1V.O4H(chart.maxTicks,wsInTicks);}
else{chart.scroll=chart.dataSet.length+rightAligned;}
}
if(this.displayInitialized)this.draw();this.changeOccurred("layout");if(this.quoteDriver){for(chartName in this.charts){chart=this.charts[chartName];if(chart.symbol&&chart.moreAvailable){this.quoteDriver.checkLoadMore(chart);}
}
}
if(cb)cb(null);this.runAppend("setPeriodicityV2",arguments);}
;STXChart.prototype.drawVectors=function(){if(this.vectorsShowing)return ;if(this.runPrepend("drawVectors",arguments))return ;this.vectorsShowing=true;if(!this.chart.hideDrawings){var tmpPanels={}
,panelName,i;for(i=0;Z1V.y4H(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];panelName=drawing.panelName;if(!this.panels[drawing.panelName])continue;if(!tmpPanels[panelName]){tmpPanels[panelName]=[];}
tmpPanels[panelName].push(drawing);}
for(panelName in tmpPanels){this.startClip(panelName);var arr=tmpPanels[panelName];for(i=0;Z1V.W4H(i,arr.length);i++){arr[i].render(this.chart.context);}
this.endClip();}
}
this.runAppend("drawVectors",arguments);}
;STXChart.prototype.consolidatedQuote=function(quotes,position,periodicity,interval,timeUnit,dontRoll,alignToHour){var I3j="da",G38="ns";if(Z1V.Q4H(position,0))return null;var arguments$=[quotes,position,periodicity,interval,dontRoll,alignToHour];if(this.runPrepend((E6j+G38+J38+l38+c98+I3j+j28+v5j+Z1V.F28+J38+Z1V.A28+M5j),arguments$))return null;if(!dontRoll&&this.dontRoll)dontRoll=true;var quote=quotes[position];function consolidate(self,p){var n0j=((1.427E3,98)<=(1.286E3,144)?(0x193,"L"):(5.520E2,4.54E2)),ratio=1;if(self.layout.adj&&quotes[p].Adj_Close){ratio=Z1V.f4H(quotes[p].Adj_Close,quotes[p].Close);}
if(Z1V.I4H("High",quotes[p]))if(Z1V.M4H(quotes[p].High*ratio,quote.High))quote.High=Z1V.S2H(quotes[p].High,ratio);if(Z1V.u2H((n0j+J38+w18),quotes[p]))if(Z1V.h2H(quotes[p].Low*ratio,quote.Low))quote.Low=Z1V.t2H(quotes[p].Low,ratio);quote.Volume+=quotes[p].Volume;if(Z1V.s2H("Close",quotes[p])&&Z1V.k2H(quotes[p].Close,null))quote.Close=Z1V.o2H(quotes[p].Close,ratio);quote.ratio=ratio;for(var element in quotes[p]){if(!quote[element]){quote[element]=quotes[p][element];}
}
}
function newInterval(p,interval){var d1=quotes[Z1V.X2H(p,1)].DT,d2=quotes[p].DT;if(Z1V.j2H(interval,"week")){if(Z1V.D2H(d2.getDay(),d1.getDay()))return true;}
else if(Z1V.K2H(interval,"month")){if(Z1V.g2H(d2.getMonth(),d1.getMonth()))return true;}
else{if(Z1V.e2H(d2.getDay(),d1.getDay()))return true;}
return false;}
function newIntradayInterval(position,p,periodicity,interval,timeUnit){var nextBar=Z1V.G2H(interval,periodicity),d1=new Date(quotes[position].DT);if(Z1V.Z2H(timeUnit,"millisecond"))d1.setMilliseconds(d1.getMilliseconds()+nextBar);else if(Z1V.v2H(timeUnit,"second"))d1.setSeconds(d1.getSeconds()+nextBar);else d1.setMinutes(d1.getMinutes()+nextBar);var d2=quotes[p].DT;if(alignToHour){if(Z1V.T2H(quotes[position].DT.getMinutes(),nextBar)){if(Z1V.J7H(d2.getMinutes()%nextBar,0)){return true;}
}
}
if(Z1V.r7H(d2.getTime(),d1.getTime()))return true;return false;}
var p=position,i;if((Z1V.p7H(interval,"week")||Z1V.E7H(interval,"month"))&&!dontRoll){for(i=1;Z1V.A7H(i,periodicity);i++){while(Z1V.F7H(p+1,quotes.length)&&!newInterval(p+1,interval)){p++;consolidate(this,p);}
if(Z1V.L7H(i,periodicity)){p++;if(Z1V.Y7H(p,quotes.length))consolidate(this,p);}
}
}
else if(!this.isDailyInterval(interval)&&Z1V.c7H(interval,"tick")&&Z1V.R7H(periodicity,1)){for(i=1;Z1V.d7H(i,periodicity);i++){p=position+i;if(Z1V.C7H(p,quotes.length)&&newIntradayInterval(position,p,periodicity,interval,timeUnit)){p--;break;}
if(Z1V.b7H(p,0)&&Z1V.z7H(p,quotes.length)){consolidate(this,p);}
}
}
else{for(i=1;Z1V.x7H(i,periodicity);i++){p=position+i;if(Z1V.P7H(p,0)&&Z1V.a7H(p,quotes.length)){consolidate(this,p);}
}
}
for(i in this.plugins){var plugin=this.plugins[i];if(plugin.consolidate)plugin.consolidate(quotes,position,p,quote);}
this.runAppend("consolidatedQuote",arguments$);return {"quote":quote,"position":p+1}
;}
;H(Z1V.n3j);k(Z1V.E3j);Y(Z1V.h3j);B(Z1V.F3j);D(Z1V.q3j);K(Z1V.P88);C(O88);STXChart.prototype.displayChart=function(chart){var X98="r_",B38="even",Y1j="ar_",X48="_b",u3j="ka",Z8j="kag",noBorders=(Z1V.V3H(this.layout.candleWidth-chart.tmpWidth,2)&&Z1V.w3H(chart.tmpWidth,3));if(this.runPrepend("displayChart",arguments))return ;this.chart.baseLegendColors=[];var chartType=this.layout.chartType,colorFunction=null;if(chart.customChart){if(chart.customChart.chartType)chartType=chart.customChart.chartType;if(chart.customChart.colorFunction)colorFunction=chart.customChart.colorFunction;}
this.controls.baselineHandle.style.display="none";var panel=chart.panel;if(Z1V.l3H(this.layout.aggregationType,(Z8j+c98))){this.drawKagiSquareWave(panel,(T28+Z1V.A28+U38+u3j+Z98+c98+P6j+Z1V.F28+Z1V.s78),"stx_kagi_down");this.chart.baseLegendColors.push(this.getCanvasColor("stx_kagi_up"));this.chart.baseLegendColors.push(this.getCanvasColor("stx_kagi_down"));}
else if(Z1V.U3H(this.layout.aggregationType,"pandf")){this.drawPointFigureChart(panel,"stx_pandf_up","X");this.chart.baseLegendColors.push(this.getCanvasColor("stx_pandf_up"));this.drawPointFigureChart(panel,"stx_pandf_down","O");this.chart.baseLegendColors.push(this.getCanvasColor("stx_pandf_down"));}
else if(Z1V.n3H(chartType,"line")){this.drawLineChart(panel,"stx_line_chart");}
else if(Z1V.H3H(chartType,"mountain")){this.chart.baseLegendColors=null;this.drawMountainChart(panel);}
else if(Z1V.i3H(chartType,"wave")){this.drawWaveChart(panel);}
else if(Z1V.q3H(chartType,"bar")){this.startClip(panel.name);this.drawBarChartHighPerformance(panel,"stx_bar_chart");this.endClip();}
else if(Z1V.B3H(chartType,"colored_line")){this.startClip(panel.name);var stxLineUpColor=this.getCanvasColor("stx_line_up"),stxLineDownColor=this.getCanvasColor("stx_line_down"),stxLineColor=this.getCanvasColor("stx_line_chart");if(!colorFunction)colorFunction=function(stx,quote,mode){if(Z1V.m3H(quote.Close,quote.iqPrevClose))return stxLineUpColor;else if(Z1V.N3H(quote.Close,quote.iqPrevClose))return stxLineDownColor;else return stxLineColor;return null;}
;var colors1=this.drawLineChart(panel,"stx_line_chart",colorFunction);for(var c1 in colors1)this.chart.baseLegendColors.push(c1);this.endClip();}
else if(Z1V.O3H(chartType,"colored_bar")){this.startClip(panel.name);if(colorFunction){var colors2=this.drawBarChart(panel,"stx_bar_chart",colorFunction);for(var c2 in colors2)this.chart.baseLegendColors.push(c2);}
else{this.drawBarChartHighPerformance(panel,"stx_bar_up",STXChart.CLOSEUP);this.drawBarChartHighPerformance(panel,"stx_bar_down",STXChart.CLOSEDOWN);this.drawBarChartHighPerformance(panel,(S38+X48+Y1j+B38),STXChart.CLOSEEVEN);this.chart.baseLegendColors.push(this.getCanvasColor("stx_bar_up"));this.chart.baseLegendColors.push(this.getCanvasColor((S38+P6j+i5j+m5j+X98+b5j+M48)));}
this.endClip();}
else if(Z1V.y3H(chartType,"hollow_candle")||Z1V.W3H(chartType,"volume_candle")){this.startClip(panel.name);if(colorFunction){if(!this.noWicksOnCandles[this.layout.aggregationType])this.drawShadows(panel,colorFunction);this.drawCandles(panel,colorFunction,false);this.drawCandles(panel,colorFunction,true);}
else{if(!this.noWicksOnCandles[this.layout.aggregationType]){this.drawShadowsHighPerformance(panel,"stx_hollow_candle_up",STXChart.CLOSEUP);this.drawShadowsHighPerformance(panel,"stx_hollow_candle_down",STXChart.CLOSEDOWN);this.drawShadowsHighPerformance(panel,"stx_hollow_candle_even",STXChart.CLOSEEVEN);}
var colorUp=this.getCanvasColor("stx_hollow_candle_up"),colorDown=this.getCanvasColor("stx_hollow_candle_down"),colorEven=this.getCanvasColor("stx_hollow_candle_even");this.drawCandlesHighPerformance(panel,colorUp,"transparent",Z1V.Q3H(STXChart.CLOSEUP,STXChart.CANDLEDOWN));this.drawCandlesHighPerformance(panel,colorDown,"transparent",Z1V.f3H(STXChart.CLOSEDOWN,STXChart.CANDLEDOWN));this.drawCandlesHighPerformance(panel,colorEven,"transparent",Z1V.I3H(STXChart.CLOSEEVEN,STXChart.CANDLEDOWN));this.drawCandlesHighPerformance(panel,this.containerColor,colorUp,Z1V.M3H(STXChart.CLOSEUP,STXChart.CANDLEUP));this.drawCandlesHighPerformance(panel,this.containerColor,colorDown,Z1V.S9H(STXChart.CLOSEDOWN,STXChart.CANDLEUP));this.drawCandlesHighPerformance(panel,this.containerColor,colorEven,Z1V.u9H(STXChart.CLOSEEVEN,STXChart.CANDLEUP));this.chart.baseLegendColors.push(colorUp);this.chart.baseLegendColors.push(colorDown);}
this.endClip();}
else if(Z1V.h9H(chartType,"candle")){this.startClip(panel.name);var coloredShadowUp=this.getCanvasColor("stx_candle_shadow_up"),coloredShadowDown=this.getCanvasColor("stx_candle_shadow_down"),coloredShadow=(Z1V.t9H(coloredShadowUp,coloredShadowDown));if(!colorFunction&&coloredShadow){var stxCandleShadow=this.getCanvasColor("stx_candle_shadow"),stxCandleUpColor=this.getCanvasColor("stx_candle_up"),stxCandleDownColor=this.getCanvasColor("stx_candle_down"),stxCandleUp=this.canvasStyle("stx_candle_up"),stxCandleDown=this.canvasStyle("stx_candle_down");colorFunction=function(stx,quote,mode){if(Z1V.s9H(mode,"shadow")){if(coloredShadow){if(Z1V.k9H(quote.Close,quote.Open))return coloredShadowUp;else if(Z1V.o9H(quote.Close,quote.Open))return coloredShadowDown;}
return stxCandleShadow;}
else if(Z1V.X9H(mode,"solid")){if(Z1V.j9H(quote.Close,quote.Open))return stxCandleUpColor;else if(Z1V.D9H(quote.Close,quote.Open))return stxCandleDownColor;else if(Z1V.K9H(quote.Close,quote.Open))return stxCandleShadow;}
else if(Z1V.g9H(mode,"outline")){var styleArray1;if(Z1V.e9H(quote.Close,quote.Open))styleArray1=stxCandleUp;else if(Z1V.G9H(quote.Close,quote.Open))styleArray1=stxCandleDown;else return null;var borderColor=styleArray1["border-left-color"];if(!borderColor)borderColor=styleArray1.borderLeftColor;return borderColor;}
return null;}
;}
if(colorFunction){if(!this.noWicksOnCandles[this.layout.aggregationType])this.drawShadows(panel,colorFunction);this.drawCandles(panel,colorFunction,false);if(!noBorders)this.drawCandles(panel,colorFunction,true);}
else{if(!this.noWicksOnCandles[this.layout.aggregationType])this.drawShadowsHighPerformance(panel,"stx_candle_shadow");var styleArray=this.canvasStyle("stx_candle_up"),borderColor=styleArray["border-left-color"];if(!borderColor)borderColor=styleArray.borderLeftColor;if(noBorders)borderColor=null;this.drawCandlesHighPerformance(panel,this.getCanvasColor("stx_candle_up"),borderColor,STXChart.CANDLEUP);this.chart.baseLegendColors.push(styleArray.color);styleArray=this.canvasStyle("stx_candle_down");borderColor=styleArray["border-left-color"];if(!borderColor)borderColor=styleArray.borderLeftColor;if(noBorders)borderColor=null;this.drawCandlesHighPerformance(panel,this.getCanvasColor("stx_candle_down"),borderColor,STXChart.CANDLEDOWN);this.chart.baseLegendColors.push(styleArray.color);}
this.endClip();}
else if(Z1V.Z9H(chartType,"baseline_delta")){this.startClip(panel.name);this.setStyle("stx_baseline_trace","opacity",0);this.drawLineChart(panel,"stx_baseline_trace");var baseline=chart.baseline.actualLevel;if(Z1V.v9H(baseline,null)){baseline=this.pixelFromPriceTransform(baseline,chart.panel);var styles={"over":"stx_baseline_up","under":"stx_baseline_down"}
;for(var s in styles){var parameters={panelName:"chart",band:"Close",threshold:chart.baseline.actualLevel,color:this.getCanvasColor(styles[s]),direction:(Z1V.T9H(s,"over")?1:-1),edgeHighlight:this.getCanvasColor(styles[s]),edgeParameters:{pattern:"solid",lineWidth:parseInt(this.canvasStyle(styles[s]).width,10)+0.1,opacity:1}
}
,color=parameters.color;if(color&&Z1V.J8H(color,"transparent")){var gradient=chart.context.createLinearGradient(0,(Z1V.r8H(s,"over")?0:Z1V.p8H(2,baseline)),0,baseline);gradient.addColorStop(0,STX.hexToRgba(color,60));gradient.addColorStop(1,STX.hexToRgba(color,10));parameters.color=gradient;parameters.opacity=1;}
STX.Studies.preparePeakValleyFill(this,chart.dataSegment,parameters);this.chart.baseLegendColors.push(color);}
this.plotLine(0,1,baseline,baseline,this.containerColor,"line",chart.context,true,{pattern:"solid",lineWidth:"1.1",opacity:1}
);this.plotLine(0,1,baseline,baseline,this.getCanvasColor("stx_baseline"),"line",chart.context,true,{pattern:"dotted",lineWidth:"2.1",opacity:0.5}
);if(Z1V.E8H(this.chart.baseline.userLevel,false)){this.controls.baselineHandle.style.top=Z1V.A8H(baseline,parseInt(getComputedStyle(this.controls.baselineHandle).height,10)/2,"px");this.controls.baselineHandle.style.left=Z1V.k8H(this.chart.right,parseInt(getComputedStyle(this.controls.baselineHandle).width,10),(m08));this.controls.baselineHandle.style.display="block";}
}
this.endClip();}
else if(Z1V.q8H(chartType,"scatterplot")){this.startClip(panel.name);this.scatter(panel);this.endClip();}
else{this.chart.baseLegendColors=null;}
this.runAppend("displayChart",arguments);}
;STXChart.prototype.calculateATR=function(chart,period){if(!period)period=20;var total=0;for(var i=1;Z1V.B8H(i,chart.dataSet.length);i++){var prices=chart.dataSet[i],pd=chart.dataSet[Z1V.m8H(i,1)],trueRange=Math.max(Math.max(Z1V.N8H(prices.High,prices.Low),Z1V.O8H(prices.High,pd.Close)),Z1V.y8H(pd.Close,prices.Low));total+=trueRange;if(Z1V.W8H(i,period))total-=chart.dataSet[Z1V.Q8H(i,period)].trueRange;prices.trueRange=trueRange;prices.atr=Z1V.f8H(total,period);}
}
;STXChart.prototype.currentQuote=function(){var quote=null;if(!this.chart.dataSet)return null;for(var i=Z1V.I8H(this.chart.dataSet.length,1);Z1V.M8H(i,0);i--)if(this.chart.dataSet[i])return this.chart.dataSet[i];return null;}
;STXChart.prototype.correctIfOffEdge=function(theChart){if(this.runPrepend("correctIfOffEdge",arguments))return ;for(var chartName in this.charts){var chart=this.charts[chartName],leftPad=Math.round(Z1V.S0H(chart.maxTicks,3));if(Z1V.u0H(leftPad,chart.dataSet.length))leftPad=chart.dataSet.length;if(chart.allowScrollPast){var rightPad=Z1V.h0H(chart.maxTicks,leftPad);if(Z1V.t0H(chart.maxTicks-rightPad,chart.dataSet.length)){rightPad=Z1V.s0H(chart.maxTicks,chart.dataSet.length);}
if(Z1V.k0H(chart.scroll-rightPad,chart.dataSet.length)){chart.scroll=chart.dataSet.length+rightPad;}
if(Z1V.o0H(chart.scroll,leftPad)){chart.scroll=leftPad;this.micropixels=-this.layout.candleWidth/2;}
}
else{if(Z1V.X0H(chart.scroll,leftPad)){chart.scroll=leftPad;}
if(Z1V.j0H(chart.scroll,chart.dataSet.length)){chart.scroll=chart.dataSet.length;}
}
this.preferences.whitespace=Z1V.D0H((chart.maxTicks-chart.scroll),this.layout.candleWidth);}
this.runAppend("correctIfOffEdge",arguments);}
;STXChart.prototype.createDataSegment=function(theChart){if(this.runPrepend("createDataSegment",arguments))return ;for(var chartName in this.charts){var chart=this.charts[chartName];if(theChart)chart=theChart;chart.baseline.actualLevel=chart.baseline.userLevel?chart.baseline.userLevel:chart.baseline.defaultLevel;chart.dataSegment=[];var position=Z1V.K0H(chart.dataSet.length,chart.scroll,1);for(var i=-1;Z1V.y0H(i,chart.scroll)&&Z1V.W0H(i,chart.maxTicks);i++){position++;if(i==-1&&!chart.baseline.includeInDataSegment)continue;if(Z1V.Q0H(position,chart.dataSet.length)&&Z1V.f0H(position,0)){if(chart.dataSet[position].candleWidth){chart.dataSet[position].candleWidth=null;chart.dataSet[position].leftOffset=null;}
chart.dataSegment.push(chart.dataSet[position]);if(Z1V.I0H(chart.baseline.actualLevel,null)&&Z1V.M0H(i,0))chart.baseline.actualLevel=chart.dataSet[position].iqPrevClose;}
else if(Z1V.S5H(position,0)){chart.dataSegment.push(null);}
}
if(Z1V.u5H(this.layout.chartType,"volume_candle")){var totalVolume=0;for(var v=0;Z1V.h5H(v,chart.dataSegment.length);v++){if(chart.dataSegment[v])totalVolume+=chart.dataSegment[v].Volume;}
var accumOffset=0;for(var w=0;Z1V.t5H(w,chart.dataSegment.length);w++){if(chart.dataSegment[w]){if(chart.dataSegment[w].Volume){var workingWidth=chart.width;if(Z1V.s5H(chart.scroll,chart.maxTicks))workingWidth-=this.preferences.whitespace;chart.dataSegment[w].candleWidth=Z1V.k5H(workingWidth,chart.dataSegment[w].Volume,totalVolume);chart.dataSegment[w].leftOffset=accumOffset+Z1V.q5H(chart.dataSegment[w].candleWidth,2);accumOffset+=chart.dataSegment[w].candleWidth;}
else{chart.dataSegment[w].candleWidth=this.layout.candleWidth;chart.dataSegment[w].leftOffset=accumOffset+Z1V.B5H(this.layout.candleWidth,2);accumOffset+=this.layout.candleWidth;}
}
else{accumOffset+=this.layout.candleWidth;}
}
}
if(theChart)break;}
this.runAppend("createDataSegment",arguments);}
;STXChart.prototype.leftTick=function(){return Z1V.m5H(this.chart.dataSet.length,this.chart.scroll);}
;STXChart.prototype.getStartDateOffset=function(){for(var ds=0;Z1V.N5H(ds,this.chart.dataSegment.length);ds++){if(this.chart.dataSegment[ds]){return ds;}
}
return 0;}
;STXChart.prototype.setStartDate=function(dt){for(var i=0;Z1V.O5H(i,this.chart.dataSet.length);i++){var bar=this.chart.dataSet[i];if(Z1V.y5H(bar.DT.getTime(),dt.getTime())){this.chart.scroll=Z1V.W5H(this.chart.dataSet.length,i);this.draw();return ;}
}
}
;STXChart.prototype.updateListeners=function(event){for(var i in this.plugins){var plugin=this.plugins[i];if(plugin.display&&plugin.listener)plugin.listener(this,event);}
}
;STXChart.prototype.clearPixelCache=function(){for(var x in this.panels){var panel=this.panels[x];panel.cacheHigh=null;panel.cacheLow=null;panel.cacheLeft=1000000;panel.cacheRight=-1;}
for(var chartName in this.charts){var chart=this.charts[chartName];if(!chart.dataSet)continue;for(var i=0;Z1V.Q5H(i,chart.dataSet.length);i++){chart.dataSet[i].cache={}
;}
}
}
;STXChart.prototype.createYAxisLabel=function(panel,txt,y,backgroundColor,color,ctx,yAxis){var m6j="ht",P78="ri";if(Z1V.f5H(panel.yAxis.drawPriceLabels,false))return ;var yax=yAxis?yAxis:panel.yAxis,context=ctx?ctx:this.chart.context,margin=3,height=this.getCanvasFontSize("stx_yaxis")+Z1V.I5H(margin,2);this.canvasFont("stx_yaxis",context);var drawBorders=yax.displayBorder||this.axisBorders,tickWidth=drawBorders?3:0,width;try{width=context.measureText(txt).width+tickWidth+Z1V.M5H(margin,2);}
catch(e){width=yax.width;}
var x=Z1V.S6H(yax.left,margin,3),textx=x+margin+tickWidth,radius=3,position=(Z1V.l6H(yax.position,null)?panel.chart.yAxis.position:yax.position);if(Z1V.U6H(position,"left")){x=yax.left+yax.width+margin-3;width=width*-1;textx=x;radius=-3;context.textAlign=(P78+Z98+m6j);}
if(Z1V.n6H(y+(height/2),yax.bottom))y=Z1V.H6H(yax.bottom,(height/2));if(Z1V.i6H(y-(height/2),yax.top))y=yax.top+(Z1V.q6H(height,2));context.fillStyle=backgroundColor;if(typeof (STX[this.yaxisLabelStyle])=='undefined'){this.yaxisLabelStyle="roundRectArrow";}
var yaxisLabelStyle=this.yaxisLabelStyle;if(yax.yaxisLabelStyle)yaxisLabelStyle=yax.yaxisLabelStyle;STX[yaxisLabelStyle](context,x,Z1V.B6H(y,(height/2)),width,height,radius,true,false);context.textBaseline="middle";context.fillStyle=color?color:STX.chooseForegroundColor(backgroundColor);if(Z1V.m6H(context.fillStyle,backgroundColor)){if(Z1V.N6H(backgroundColor.toUpperCase(),"#FFFFFF"))context.fillStyle="#000000";else context.fillStyle="#FFFFFF";}
context.fillText(txt,textx,y+1);context.textAlign="left";}
;STXChart.prototype.createXAxisLabel=function(panel,txt,x,backgroundColor,color,pointed){var V78="000",context=this.chart.context,margin=2,fontstyle="stx-float-date",height=this.getCanvasFontSize(fontstyle)+Z1V.O6H(margin,2);this.canvasFont(fontstyle,context);var width;try{width=context.measureText(txt).width+Z1V.y6H(margin,2);}
catch(e){width=0;}
var y=panel.top+panel.height-height;if(Z1V.W6H(x+(width/2),panel.right))x=Z1V.Q6H(panel.right,(width/2));if(Z1V.f6H(x-(width/2),panel.left))x=panel.left+(Z1V.I6H(width,2));context.fillStyle=backgroundColor;STX.roundRect(context,Z1V.M6H(x,(width/2)),y,width,height,3,true,false);if(pointed){var arrowHeight=Z1V.S1H(panel.bottom,panel.yAxis.bottom,height);context.beginPath();context.moveTo(Z1V.l1H(x,arrowHeight),y);context.lineTo(x,Z1V.U1H(y,arrowHeight));context.lineTo(x+arrowHeight,y);context.closePath();context.fill();}
context.textBaseline="top";context.fillStyle=color?color:STX.chooseForegroundColor(backgroundColor);if(Z1V.n1H(context.fillStyle,backgroundColor)){if(Z1V.H1H(backgroundColor.toUpperCase(),"#FFFFFF"))context.fillStyle=(j38+g78+g78+g78+V78);else context.fillStyle="#FFFFFF";}
context.fillText(txt,Z1V.i1H(x,width/2,margin),y+margin);}
;STXChart.prototype.drawCurrentHR=function(){if(this.runPrepend("drawCurrentHR",arguments))return ;var backgroundColor,color;for(var chartName in this.charts){var chart=this.charts[chartName],panel=chart.panel,yAxis=panel.yAxis;if(Z1V.Y1H(yAxis.drawCurrentPriceLabel,false))continue;if(chart.customChart&&Z1V.c1H(chart.customChart.chartType,"none"))continue;var whichSet=yAxis.whichSet;if(!whichSet)whichSet="dataSet";var l=chart[whichSet].length;if(Z1V.R1H(whichSet,"dataSegment")){while(Z1V.d1H(l,(chart.width-this.micropixels+(this.layout.candleWidth)/2+1)/this.layout.candleWidth))l--;}
if(l){var quote=chart[whichSet][Z1V.C1H(l,1)],prevClose=quote.Close,currentClose=quote.Close;if(Z1V.b1H(chart.dataSet.length,2)){var quote2=chart[whichSet][Z1V.z1H(l,2)];prevClose=quote2.Close;}
if(Z1V.x1H(currentClose,prevClose)){backgroundColor=this.canvasStyle("stx_current_hr_down").backgroundColor;color=this.canvasStyle("stx_current_hr_down").color;}
else{backgroundColor=this.canvasStyle("stx_current_hr_up").backgroundColor;color=this.canvasStyle("stx_current_hr_up").color;}
if(quote.transform)quote=quote.transform;var txt,labelDecimalPlaces=Math.max(panel.yAxis.printDecimalPlaces,panel.chart.decimalPlaces);if(yAxis.maxDecimalPlaces||Z1V.P1H(yAxis.maxDecimalPlaces,0))labelDecimalPlaces=Math.min(labelDecimalPlaces,yAxis.maxDecimalPlaces);if(yAxis.priceFormatter){txt=yAxis.priceFormatter(this,panel,quote.Close,labelDecimalPlaces);}
else{txt=this.formatYAxisPrice(quote.Close,panel,labelDecimalPlaces);}
var y=this.pixelFromPrice(quote.Close,panel);this.createYAxisLabel(panel,txt,y,backgroundColor,color);}
}
this.runAppend("drawCurrentHR",arguments);}
;STXChart.prototype.getDefaultColor=function(){var D8j=0.65;this.defaultColor=r48;var bgColor=Z1V.z38,div=this.chart.container;while(!bgColor||STX.isTransparent(bgColor)){var cStyle=getComputedStyle(div);if(!cStyle)return ;bgColor=cStyle.backgroundColor;if(STX.isTransparent(bgColor))bgColor=N48;div=div.parentNode;if(!div||!div.tagName)break;}
if(bgColor){if(Z1V.a1H(bgColor,N48))bgColor=F08;this.containerColor=bgColor;if(!STX.isTransparent(bgColor)){var hsv=STX.hsv(bgColor),v=hsv[Z1V.h3j];if(Z1V.V4G(v,D8j))this.defaultColor=r48;else this.defaultColor=F08;}
else{this.defaultColor=(j38+g78+x38+g78+x38);}
}
else{this.containerColor=F08;}
}
;STXChart.prototype.startAsyncAction=function(){if(!this.pendingAsyncs)this.pendingAsyncs=[];this.pendingAsyncs.push(I38);}
;STXChart.prototype.registerChartDrawnCallback=function(fc){if(!this.asyncCallbacks)this.asyncCallbacks=[];this.asyncCallbacks.push(fc);return {fc:fc}
;}
;STXChart.prototype.unregisterChartDrawnCallback=function(obj){for(var i=0;Z1V.w4G(i,this.asyncCallbacks.length);i++){if(Z1V.l4G(this.asyncCallbacks[i],obj.fc)){this.asyncCallbacks.splice(i,1);return ;}
}
}
;STXChart.prototype.makeAsyncCallbacks=function(){if(!this.asyncCallbacks)return ;if(!this.pendingAsyncs||!this.pendingAsyncs.length){for(var i=0;Z1V.U4G(i,this.asyncCallbacks.length);i++){(this.asyncCallbacks[i])();}
}
}
;STXChart.prototype.completeAsyncAction=function(){this.pendingAsyncs.pop();this.makeAsyncCallbacks();}
;STXChart.prototype.draw=function(){var b98="no",L8j="lay";this.debug();if(!this.chart.canvas)return ;if(!this.chart.dataSet)return ;if(!this.chart.canvasHeight)return ;if(!this.useAnimation&&Z1V.n4G(new Date()-this.grossDragging,500))return ;this.offset=Z1V.H4G(this.layout.candleWidth,this.candleWidthPercent,2);STX.clearCanvas(this.chart.canvas,this);if(this.runPrepend("draw",arguments))return ;if(!this.xaxisHeight){this.xaxisHeight=this.getCanvasFontSize("stx_xaxis")+4;if(this.chart.xAxis.displayBorder||this.axisBorders)this.xaxisHeight+=3;}
this.getDefaultColor();this.vectorsShowing=false;this.drawPanels();this.yAxisLabels=[];var i,chart,chartName,plugin;for(chartName in this.charts){chart=this.charts[chartName];this.correctIfOffEdge();this.createDataSegment();var axisRepresentation=this.createXAxis(chart);this.initializeDisplay(chart);this.rendererAction(chart,"calculate");this.renderYAxis(chart);this.drawXAxis(chart,axisRepresentation);chart.tmpWidth=Math.floor(Z1V.L4G(this.layout.candleWidth,this.candleWidthPercent));if(Z1V.Y4G(chart.tmpWidth%2,0)){chart.tmpWidth+=1;if(Z1V.c4G(chart.tmpWidth,this.layout.candleWidth))chart.tmpWidth-=2;}
if(Z1V.R4G(chart.tmpWidth,0.5))chart.tmpWidth=0.5;for(i in this.plugins){plugin=this.plugins[i];if(plugin.display){if(plugin.drawUnder)plugin.drawUnder(this,chart);}
}
this.rendererAction(chart,"underlay");STX.Studies.displayStudies(this,chart,true);this.displayChart(chart);STX.Studies.displayStudies(this,chart,false);this.rendererAction(chart,(J38+M58+L8j));}
for(chartName in this.charts){chart=this.charts[chartName];for(i in this.plugins){plugin=this.plugins[i];if(plugin.display){if(plugin.drawOver)plugin.drawOver(this,chart);}
}
}
for(var panel in this.panels){this.plotYAxisText(this.panels[panel]);}
for(var yLbl=0;Z1V.d4G(yLbl,this.yAxisLabels.length);yLbl++){this.createYAxisLabel.apply(this,this.yAxisLabels[yLbl].args);}
this.createCrosshairs();this.drawVectors();this.drawCurrentHR();this.displayInitialized=true;if(this.controls.home){if(Z1V.C4G(this.chart.scroll-1,Math.ceil(this.chart.width/this.layout.candleWidth))){this.controls.home.style.display="block";}
else{this.controls.home.style.display=(b98+H58);}
}
this.positionMarkers();for(chartName in this.charts){chart=this.charts[chartName];if(this.quoteDriver)this.quoteDriver.checkLoadMore(chart);}
this.runAppend("draw",arguments);this.makeAsyncCallbacks();}
;STXChart.prototype.adjustBackingStore=function(canvas,context){this.devicePixelRatio=window.devicePixelRatio||1;if(Z1V.b4G(this.devicePixelRatio,1.0))this.devicePixelRatio=1.0;backingStoreRatio=context.webkitBackingStorePixelRatio||context.mozBackingStorePixelRatio||context.msBackingStorePixelRatio||context.oBackingStorePixelRatio||context.backingStorePixelRatio||1;var ratio=Z1V.z4G(this.devicePixelRatio,backingStoreRatio);if(!STX.isAndroid||STX.is_chrome){var oldWidth=canvas.width,oldHeight=canvas.height;canvas.width=Z1V.x4G(oldWidth,ratio);canvas.height=Z1V.P4G(oldHeight,ratio);canvas.style.width=oldWidth+'px';canvas.style.height=oldHeight+'px';context.scale(ratio,ratio);}
}
;STXChart.prototype.resizeCanvas=function(){if(!this.chart.panel)this.chart.panel=this.panels.chart;var canvas=this.chart.canvas,context=this.chart.context;if(canvas&&context){this.chart.tempCanvas.height=canvas.height=this.chart.container.clientHeight;this.chart.tempCanvas.width=canvas.width=this.chart.container.clientWidth;this.adjustBackingStore(canvas,context);this.adjustBackingStore(this.chart.tempCanvas,this.chart.tempCanvas.context);this.floatCanvas.height=this.chart.container.clientHeight;this.floatCanvas.width=this.chart.container.clientWidth;this.adjustBackingStore(this.floatCanvas,this.floatCanvas.context);}
var rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.canvasWidth=this.chart.canvasWidth=this.chart.container.clientWidth;this.right=this.left+this.canvasWidth;this.height=this.chart.container.clientHeight;this.width=Z1V.a4G(this.right,this.left);this.bottom=this.top+this.height;this.calculateYAxisPositions();this.chart.canvasRight=this.right;this.chart.canvasHeight=this.height;var candleWidth=this.layout.candleWidth;if(typeof (candleWidth)=="undefined")candleWidth=8;for(var chartName in this.charts){var chart=this.charts[chartName];if(this.layout.span){this.setCandleWidth(this.getSpanCandleWidth(this.layout.span),chart);}
else{this.setCandleWidth(candleWidth,chart);if(Z1V.V2G(chart.scroll,chart.width/candleWidth)){chart.scroll=Math.floor(Z1V.w2G(chart.width,candleWidth));var wsInTicks=Math.round(Z1V.l2G(this.preferences.whitespace,this.layout.candleWidth));chart.scroll-=wsInTicks;}
}
var idealNumberOfTicks=10,appxLabelWidth;try{appxLabelWidth=Z1V.U2G(context.measureText("10:00").width,2);}
catch(e){appxLabelWidth=100;}
while(Z1V.n2G(idealNumberOfTicks,1)){if(Z1V.H2G(this.chart.width/appxLabelWidth,idealNumberOfTicks))break;idealNumberOfTicks/=1.5;}
chart.xAxis.autoComputedTickSizePixels=Math.round(Z1V.i2G(this.chart.width,idealNumberOfTicks));if(Z1V.q2G(chart.xAxis.autoComputedTickSizePixels,1))chart.xAxis.autoComputedTickSizePixels=1;}
}
;STXChart.prototype.setCandleWidth=function(newCandleWidth,chart){if(!chart)chart=this.chart;if(Z1V.B2G(newCandleWidth,Z1V.n3j))newCandleWidth=Z1V.q3j;this.layout.candleWidth=newCandleWidth;chart.maxTicks=Math.ceil(Z1V.m2G(this.chart.width,newCandleWidth)+0.5);}
;STXChart.prototype.resizeChart=function(maintainScroll){if(Z1V.N2G(maintainScroll,X58))maintainScroll=I38;if(maintainScroll)this.preAdjustScroll();var previousHeight=this.chart.canvasHeight;this.resizeCanvas();if(maintainScroll)this.postAdjustScroll();this.adjustPanelPositions();if(this.displayInitialized){this.draw();}
else if(Z1V.O2G(this.chart.canvasHeight,Z1V.n3j)&&Z1V.y2G(previousHeight,Z1V.n3j)){this.draw();}
}
;STXChart.prototype.calculateMinutesInSession=function(chart){var x08=59,minutes=Z1V.W2G((chart.endHour-chart.beginHour),V58);minutes+=chart.endMinute;minutes-=chart.beginMinute;if(Z1V.Q2G(chart.endMinute,x08))minutes++;chart.minutesInSession=minutes;}
;STXChart.prototype.newChart=function(symbol,masterData,chart,cb,params){var H78="red",y9j="ig",x78="nf",x5j="eFeed",r6j="uot",f6j="cified",H48="ta",C9j="N",b78="arn",v48="W",r68='object';if(!chart)chart=this.chart;if(!params)params={}
;if(params.periodicity){if(params.periodicity.interval)this.layout.interval=params.periodicity.interval;if(params.periodicity.period)this.layout.periodicity=params.periodicity.period;this.layout.timeUnit=params.periodicity.timeUnit;}
var prevSymbol=chart.symbol,prevSymbolObject=STX.clone(chart.symbolObject);if(!symbol){chart.symbol=Z1V.z38;chart.symbolObject={symbol:Z1V.z38}
;}
else if(typeof symbol==r68){chart.symbol=symbol.symbol;chart.symbolObject=symbol;}
else{chart.symbol=symbol;chart.symbolObject.symbol=symbol;}
if((Z1V.f2G(chart.endHour,Z1V.z38)&&Z1V.I2G(chart.beginHour,Z1V.z38)&&Z1V.M2G(chart.endMinute,Z1V.z38)&&Z1V.S7G(chart.beginMinute,Z1V.z38))||(Z1V.u7G(chart.endHour+chart.beginHour+chart.endMinute+chart.beginMinute,Z1V.n3j))||this.automaticMarketHours){var hours=STX.LegacyMarket.getHours(chart.symbolObject.symbol,this.layout.extended);chart.endHour=hours.endHour;chart.beginHour=hours.beginHour;chart.endMinute=hours.endMinute;chart.beginMinute=hours.beginMinute;this.automaticMarketHours=I38;}
if(!masterData&&this.quoteDriver){var callback=function(err){if(err){chart.symbol=prevSymbol;chart.symbolObject=prevSymbolObject;}
if(cb)cb(err);}
;if(params.span&&params.span.multiplier&&params.span.base){this.setSpan({maintainPeriodicity:I38,multiplier:params.span.multiplier,span:params.span.base,symbol:chart.symbol}
,callback);}
else{var self=this;this.quoteDriver.newChart({symbol:chart.symbol,chart:chart,initializeChart:I38}
,function(){self.adjustPanelPositions();callback.apply(self,arguments);}
);}
}
else{if(!masterData){console.log((v48+b78+p18+Z98+f08+C9j+J38+s6j+H38+m5j+g5j+M5j+g28+R0j+m5j+H48+s6j+T28+a28+f6j+s6j+m5j+C58+s6j+Q78+J38+s6j+x7j+r6j+x5j+s6j+V6j+J38+x78+y9j+Z1V.F28+H78));}
if(!chart.symbol)chart.symbol=l28;this.setMasterData(masterData,chart);this.createDataSet();this.initializeChart();if(params.span&&params.span.multiplier&&params.span.base){this.setSpan({maintainPeriodicity:I38,multiplier:params.span.multiplier,span:params.span.base}
);}
else{this.draw();}
this.adjustPanelPositions();if(cb)cb();}
}
;STXChart.prototype.setMasterData=function(masterData,chart){var s5j=' = ',b68='al',u28=((0x21,118.4E1)<(15.20E1,0x209)?4.41E2:(7.770E2,108.)<=(34.,0x242)?(7.,'V'):0x201>(12.88E2,7.57E2)?87:(0x203,0x219)),F1j='rin',K98='rovid',e7j='er',t08='() ',D48='loa',S48='F',k28='U',u9j='. ',W78='umbe',D78='sin',n98='ose',y5j='C',d38='Da',L78='Maste',z1j='bj',y28='ster',P5j='D',n1j='ssing',G1j=((0x189,36.6E1)>3.49E2?(0x1D0,'M'):(1.81E2,23.)),M8j=' : ',i48='Data',w0j='setM';if(!chart)chart=this.chart;this.calculateMinutesInSession(chart);chart.masterData=masterData;if(Z1V.h7G(chart.name,"chart"))this.masterData=masterData;var i;for(i=0;masterData&&Z1V.t7G(i,masterData.length);i++){var quotes=masterData[i];if(quotes.DT){quotes.DT=new Date(quotes.DT);quotes.Date=STX.yyyymmddhhmmssmmm(quotes.DT);}
else if(quotes.Date)quotes.DT=STX.strToDateTime(quotes.Date);else console.log((w0j+O08+R1j+G48+n88+h1j+i48+M8j+G1j+B68+n1j+c88+P5j+m28+c88+O08+d58+L08+c88+P5j+Q9j+n88+c88+G58+d58+c88+A58+O08+y28+i48+c88+G58+z1j+n88+l08+G48));if(quotes.Volume&&typeof quotes.Volume!=="number")quotes.Volume=parseInt(quotes.Volume,10);if(quotes.Close&&typeof quotes.Close=='number'){}
else{console.log((B88+G48+L78+h1j+d38+G48+O08+M8j+y5j+s68+n98+c88+B68+R1j+c88+A58+B68+R1j+D78+f68+c88+G58+h1j+c88+d58+L3j+c88+O08+c88+d58+W78+h1j+u9j+k28+B88+c88+e1j+O08+h1j+B88+S48+D48+G48+t08+B68+D88+c88+u6j+v7j+h1j+c88+L08+O08+G48+O08+c88+R1j+e7j+E48+n88+h1j+c88+e1j+K98+n88+R1j+c88+R1j+G48+F1j+f68+R1j+u9j+u28+b68+a48+n88+s5j)+quotes.Close);}
if(Z1V.s7G(quotes.High,null))delete  quotes.High;if(Z1V.k7G(quotes.Low,null))delete  quotes.Low;if(Z1V.o7G(quotes.Open,null))delete  quotes.Open;}
chart.decimalPlaces=this.callbacks.calculateTradingDecimalPlaces({stx:this,chart:chart,symbol:chart.symbolObject.symbol,symbolObject:chart.symbolObject}
);if(!STXChart.isDailyInterval(this.layout.interval))this.setDisplayDates(masterData);this.chart.roundit=Math.pow(10,chart.decimalPlaces);for(i in this.plugins){var plugin=this.plugins[i];if(plugin.display){if(plugin.setMasterData)plugin.setMasterData(this,chart);}
}
for(var s in this.chart.series){var series=this.chart.series[s];if(series.addSeriesData){series.addSeriesData(this);}
}
}
;STXChart.prototype.setDisplayDate=function(quote){var dt=quote.DT,milli=Z1V.X7G(dt.getSeconds(),Z58)+dt.getMilliseconds(),newDT;if(this.dataZone){newDT=new timezoneJS.Date(dt.getFullYear(),dt.getMonth(),dt.getDate(),dt.getHours(),dt.getMinutes(),this.dataZone);dt=new Date(newDT.getTime()+milli);}
if(this.displayZone){newDT=new timezoneJS.Date(dt.getTime(),this.displayZone);dt=new Date(newDT.getFullYear(),newDT.getMonth(),newDT.getDate(),newDT.getHours(),newDT.getMinutes());dt=new Date(dt.getTime()+milli);}
quote.displayDate=dt;}
;STXChart.prototype.setDisplayDates=function(masterData){if(!masterData)return ;for(var i=0;Z1V.j7G(i,masterData.length);i++){var quote=masterData[i];if(quote.DT)this.setDisplayDate(quote);}
}
;STXChart.prototype.streamTrade=function(priceData,now,symbol,params){var N78="ick",chart=this.chart;if(!params)params={}
;if(params.chart)chart=params.chart;var price=null,bid=null,ask=null,volume=0;if(typeof priceData=="object"){price=priceData.last;bid=priceData.bid;ask=priceData.ask;volume=priceData.volume;}
else{price=arguments[0];volume=arguments[1];now=arguments[2];symbol=arguments[3];}
var md=chart.masterData;if(!now){now=new Date();if(this.dataZone){var tzNow=STX.convertTimeZone(now,null,this.dataZone);now=new Date(tzNow.getFullYear(),tzNow.getMonth(),tzNow.getDate(),tzNow.getHours(),tzNow.getMinutes(),tzNow.getSeconds(),tzNow.getMilliseconds());}
}
else{now=new Date(now);}
if(Z1V.D7G(this.layout.timeUnit,"second")){now.setMilliseconds(0);}
else if(Z1V.K7G(this.layout.timeUnit,"minute")){now.setMilliseconds(0);now.setSeconds(0);}
var quote;if(!md||!md.length||Z1V.g7G(this.layout.interval,(Z1V.A28+N78))){quote={Date:STX.yyyymmddhhmmssmmm(now),DT:now,Open:price,Close:price,High:price,Low:price,Volume:volume,Bid:bid,Ask:ask}
;this.appendMasterData([quote],chart,params);}
else{quote=STX.clone(md[Z1V.e7G(md.length,1)]);var next=this.getNextInterval(quote.DT,null,this.dataZone);if(Z1V.G7G(now,next)){if(symbol){if(price||Z1V.Z7G(price,0)){quote[symbol]=price;}
}
else{if(price||Z1V.v7G(price,0)){quote.Close=price;if(Z1V.T7G(price,quote.High))quote.High=price;if(Z1V.J3G(price,quote.Low))quote.Low=price;}
if(volume)quote.Volume+=volume;if(bid||Z1V.r3G(bid,0))quote.Bid=bid;if(ask||Z1V.p3G(ask,0))quote.Ask=ask;}
var newParams=STX.clone(params);this.appendMasterData([quote],chart,newParams);}
else{var next2=this.getNextInterval(next,null,this.dataZone),gaps=[];while(Z1V.E3G(next2,now)){var gap={Date:STX.yyyymmddhhmmssmmm(next),DT:next,Close:quote.Close,Open:quote.Close,High:quote.Close,Low:quote.Close,Volume:0,Bid:quote.Bid,Ask:quote.Ask}
;gaps.push(gap);next=next2;next2=this.getNextInterval(next,null,this.dataZone);}
quote={Date:STX.yyyymmddhhmmssmmm(next),DT:next,Open:price,Close:price,High:price,Low:price,Volume:volume,Bid:bid,Ask:ask}
;gaps.push(quote);this.appendMasterData(gaps,chart,params);}
}
}
;STXChart.prototype.appendMasterData=function(appendQuotes,chart,params){var n38="nu";if(!params)params={}
;if(!chart)chart=this.chart;if(Z1V.A3G(appendQuotes.constructor,Object))appendQuotes=[appendQuotes];if(this.runPrepend("appendMasterData",[appendQuotes,chart,params]))return ;if(!appendQuotes||!appendQuotes.length)return ;var dt=appendQuotes[0].DT;if(!dt)dt=STX.strToDateTime(appendQuotes[0].Date);var masterData=chart.masterData,i;if(!masterData||!masterData.length){masterData=chart.masterData=STX.clone(appendQuotes);for(i=0;Z1V.F3G(i,masterData.length);i++){if(masterData[i].DT)masterData[i].Date=STX.yyyymmddhhmmssmmm(masterData[i].DT);else masterData[i].DT=STX.strToDateTime(masterData[i].Date);if(masterData[i].Volume&&typeof masterData[i].Volume!==(n38+H38+i5j+M5j+g28))masterData[i].Volume=parseInt(masterData[i].Volume,10);if(!STXChart.isDailyInterval(this.layout.interval))this.setDisplayDate(masterData[i]);}
}
else{i=Z1V.L3G(masterData.length,1);while(Z1V.Y3G(i,0)){var dt2=masterData[i].DT;if(!dt2)dt2=STX.strToDateTime(masterData[i].Date);if(Z1V.c3G(dt2.getTime(),dt.getTime())){var plusOne=0;if(Z1V.R3G(dt2.getTime(),dt.getTime()))plusOne=1;for(var j=0;Z1V.d3G(j,appendQuotes.length);j++){if(!plusOne){if(typeof masterData[i+j]!="undefined"){if(!appendQuotes[j].Volume&&masterData[i+j].Volume){appendQuotes[j].Volume=masterData[i+j].Volume;}
if(!params.allowReplaceOHL){if(masterData[i+j].Open){appendQuotes[j].Open=masterData[i+j].Open;}
if(Z1V.C3G(masterData[i+j].High,appendQuotes[j].High)){appendQuotes[j].High=masterData[i+j].High;}
if(masterData[i+j].Low&&Z1V.b3G(masterData[i+j].Low,appendQuotes[j].Low)){appendQuotes[j].Low=masterData[i+j].Low;}
}
}
for(var field in this.chart.series){if(typeof appendQuotes[j][field]=="undefined"&&typeof masterData[i+j]!="undefined")appendQuotes[j][field]=masterData[i+j][field];}
for(var p in this.panels){if(this.panels[p].studyQuotes){for(var sq in this.panels[p].studyQuotes){if(!this.panels[p].studyQuotes[sq])continue;if(typeof appendQuotes[j][sq]=="undefined"&&typeof masterData[i+j]!="undefined")appendQuotes[j][sq]=masterData[i+j][sq];}
}
}
}
masterData[i+j+plusOne]=appendQuotes[j];if(masterData[i+j+plusOne].DT)masterData[i+j+plusOne].Date=STX.yyyymmddhhmmssmmm(masterData[i+j+plusOne].DT);else masterData[i+j+plusOne].DT=STX.strToDateTime(masterData[i+j+plusOne].Date);if(masterData[i+j+plusOne].Volume&&typeof masterData[i+j+plusOne].Volume!=="number")masterData[i+j+plusOne].Volume=parseInt(masterData[i+j+plusOne].Volume,10);if(!STXChart.isDailyInterval(this.layout.interval))this.setDisplayDate(this.masterData[i+j+plusOne]);if(Z1V.z3G(chart.scroll,chart.maxTicks+1)&&plusOne){chart.scroll++;this.grabStartScrollX++;}
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
;STXChart.prototype.displayAll=function(params,cb){var chart=this.chart;if(params&&params.chart)chart=params.chart;var self=this;function displayTheResults(){if(!chart.masterData.length)return ;self.setRange({dtLeft:new Date(1),dtRight:chart.masterData[Z1V.x3G(chart.masterData.length,1)].DT}
);if(cb)cb();}
function loadAllTheData(){self.quoteDriver.loadAll(chart,displayTheResults);}
if(!this.quoteDriver){displayTheResults();return ;}
if(this.dontRoll&&Z1V.P3G(this.layout.interval,"month")){this.setPeriodicityV2(1,"month",loadAllTheData);}
else if(!STXChart.isDailyInterval(this.layout.interval)){this.setPeriodicityV2(1,"day",loadAllTheData);}
else{if(chart.moreAvailable){loadAllTheData();}
else{displayTheResults();}
}
}
;STXChart.prototype.setRange=function(params,cb){var O9j="nth",V5j="mo";if(STX.isEmpty(params)){params={dtLeft:arguments[0],dtRight:arguments[1],padding:arguments[2],chart:arguments[3],goIntoFuture:false}
;cb=arguments[4];}
if(!params.chart)params.chart=this.chart;if(typeof params.padding=="undefined"){params.padding=this.preferences.whitespace;}
var chart=params.chart,ltMS=params.dtLeft.getTime(),rtMS=Date.now();if(params.dtRight)rtMS=params.dtRight.getTime();var self=this;function showTheRange(){var b=Z1V.a3G(chart.dataSet.length,1),prices;if(params.dtRight){rtMS=params.dtRight.getTime();for(;Z1V.V9G(b,0);b--){prices=chart.dataSet[b];if(Z1V.w9G(prices.DT.getTime(),rtMS)){break;}
}
if(Z1V.l9G(b,chart.dataSet.length-1)&&params.goIntoFuture){var dt=chart.dataSet[Z1V.U9G(chart.dataSet.length,1)].DT;for(var i=0;Z1V.n9G(i,20000);i++){if(Z1V.H9G(dt.getTime(),rtMS))break;b++;dt=self.getNextInterval(dt,self.layout.periodicity,self.dataZone);}
}
}
if(Z1V.i9G(b,0))return ;for(var a=b;Z1V.q9G(a,0);a--){if(Z1V.B9G(a,chart.dataSet.length))continue;prices=chart.dataSet[a];if(Z1V.m9G(prices.DT.getTime(),ltMS)){break;}
}
var ticks=Z1V.N9G(b,a);if(Z1V.O9G(ticks,1)){if(cb)cb();return ;}
self.setCandleWidth(Z1V.y9G((self.chart.width-params.padding),ticks),chart);chart.scroll=(Z1V.W9G(chart.dataSet.length,b))+Math.floor(Z1V.Q9G((self.chart.width-params.padding),self.layout.candleWidth));self.preferences.whitespace=Z1V.f9G((chart.maxTicks-chart.scroll),self.layout.candleWidth);self.draw();self.changeOccurred("layout");if(cb)cb();}
var loadMoreCount=0;function loadTheRange(){var T9j="ogic",p6j="cit",Q68="di",h48="rio",u08="eck",U08="ppi",d48="om",i6j=") ",l9j="oa",X8j="ny",S9j="T",q08="(): ",q9j="ge",a8j="tRan",q98="TXC";loadMoreCount++;if(Z1V.I9G(loadMoreCount,10)){console.log((b3j+q98+Z1V.h98+m5j+t58+J28+T28+M5j+a8j+q9j+q08+S9j+u48+s6j+H38+m5j+X8j+s6j+l38+l9j+b5j+T28+e0j+T78+g78+i6j+g98+g28+d48+s6j+T28+A6j+M58+W88+b3j+Z1V.A28+J38+U08+Q78+Z98+W88+d08+Z1V.h98+u08+s6j+Z1V.s78+M5j+h48+Q68+p6j+Z1V.N68+s6j+l38+T9j+J28));showTheRange();return ;}
if(chart.moreAvailable&&Z1V.M9G(chart.masterData[0].DT.getTime(),ltMS)){self.quoteDriver.checkLoadMore(chart,true,false,function(err){if(!err)loadTheRange();}
);}
else{showTheRange();}
}
function estimateMaxTicks(rtMS,ltMS,interval,period,dontRoll){var ticks=0,ms=Z1V.S8G(rtMS,ltMS);if(STXChart.isDailyInterval(interval)){if((Z1V.u8G(interval,"month")||Z1V.h8G(interval,"week"))&&dontRoll){var int=(Z1V.t8G(interval,"week"))?7:30;ticks=Z1V.s8G((ms/(STX.DAY*int)),period);}
else{ticks=Z1V.k8G((ms/STX.DAY),period);}
}
else{if(!isNaN(interval))ticks=Z1V.o8G((ms/(STX.MINUTE*interval)),period);else{if(Z1V.X8G(interval,"millisecond"))ticks=Z1V.j8G(ms,period);else if(Z1V.D8G(interval,"second"))ticks=Z1V.K8G((ms/STX.SECOND),period);else if(Z1V.g8G(interval,"hour"))ticks=Z1V.e8G((ms/STX.HOUR),period);else ticks=Z1V.G8G((ms/STX.MINUTE),period);}
}
return Math.round(ticks);}
if(this.quoteDriver){var intervalToUse,periodToUse,timeUnitToUse;if(params.periodicity){intervalToUse=params.periodicity.interval;timeUnitToUse=params.periodicity.timeUnit;periodToUse=params.periodicity.period;}
else{if(!this.rangePeriodicityMap){this.rangePeriodicityMap=[];this.rangePeriodicityMap.push({range:STX.WEEK,periodicity:1,interval:5}
);this.rangePeriodicityMap.push({range:STX.MONTH,periodicity:1,interval:30}
);this.rangePeriodicityMap.push({range:Z1V.Z8G(STX.MONTH,7),periodicity:1,interval:"day"}
);this.rangePeriodicityMap.push({range:STX.DECADE,periodicity:1,interval:"day"}
);this.rangePeriodicityMap.push({range:Z1V.v8G(STX.DECADE,10),periodicity:1,interval:(V5j+O9j)}
);this.rangePeriodicityMap.push({range:Number.MAX_VALUE,periodicity:12,interval:"month"}
);}
var periodicityMap=params.rangePeriodicityMap?params.rangePeriodicityMap:this.rangePeriodicityMap,rangeInMS=Z1V.T8G(rtMS,ltMS),entryToUse=null;for(var i=0;Z1V.J0G(i,periodicityMap.length);i++){var mapEntry=periodicityMap[i];if(Z1V.r0G(rangeInMS,mapEntry.range)){entryToUse=mapEntry;break;}
}
intervalToUse=entryToUse.interval;periodToUse=entryToUse.periodicity;timeUnitToUse=entryToUse.timeUnit;}
this.chart.scroll=this.chart.maxTicks=estimateMaxTicks(rtMS,ltMS,intervalToUse,periodToUse,this.dontRoll);this.layout.candleWidth=Z1V.p0G(this.chart.width,this.chart.maxTicks);if(!this.chart.masterData||Z1V.E0G(this.layout.interval,intervalToUse)||Z1V.A0G(this.layout.periodicity,periodToUse)||Z1V.F0G(this.layout.timeUnit,timeUnitToUse)){this.layout.interval=intervalToUse;this.layout.periodicity=periodToUse;this.layout.timeUnit=timeUnitToUse;if(!this.layout.timeUnit){if(STXChart.isDailyInterval(this.layout.interval))this.layout.timeUnit=null;else if(Z1V.L0G(this.layout.interval,"second"))this.layout.timeUnit="second";else this.layout.timeUnit="minute";}
var qparams={symbol:chart.symbol,chart:chart}
;if(!this.displayInitialized)qparams.initializeChart=true;this.quoteDriver.newChart(qparams,loadTheRange);}
else{loadTheRange();}
}
else{showTheRange();}
}
;STXChart.prototype.setSpan=function(params,cb){var a58="tod",Q38="obj",period=arguments[0],interval=arguments[1],padding=arguments[2],chart=arguments[3],useMarketTZ=arguments[4];if(typeof params==(Q38+M5j+V6j+Z1V.A28)){if(params.multiplier)period=params.multiplier;else period=params.period;if(params.span)interval=params.span;else interval=params.interval;padding=params.padding;chart=params.chart;useMarketTZ=params.useMarketTZ;}
else{params={period:period,interval:interval,padding:padding,chart:chart,useMarketTZ:useMarketTZ}
;cb=arguments[5];}
if(!params.padding)params.padding=0;if(!chart)chart=this.chart;var leftDT=new Date(),marketOpen;if(STX.LegacyMarket.isForexFuturesSymbol(chart.symbol))marketOpen=STX.LegacyMarket.isForexOpen(leftDT,chart.symbol);else marketOpen=STX.LegacyMarket.isMarketOpen(chart.symbol,this);if(!marketOpen){leftDT=STX.LegacyMarket.getPreviousClose(leftDT,chart.symbol,this.dataZone,this);}
if(Z1V.Y0G(interval.toLowerCase(),"ytd")){leftDT=new Date();leftDT.setMonth(0);leftDT.setDate(1);leftDT.setHours(0);leftDT.setMinutes(0);leftDT.setSeconds(0);leftDT.setMilliseconds(0);}
else if(Z1V.c0G(interval.toLowerCase(),"year")){leftDT.setFullYear(Z1V.R0G(leftDT.getFullYear(),period));}
else if(Z1V.d0G(interval.toLowerCase(),(O3j))){leftDT.setMonth(Z1V.C0G(leftDT.getMonth(),period));}
else if(Z1V.b0G(interval.toLowerCase(),"day")||Z1V.z0G(interval.toLowerCase(),"today")){if(Z1V.x0G(interval.toLowerCase(),"day")&&STXChart.isDailyInterval(this.layout.interval)){if(useMarketTZ)leftDT=STX.LegacyMarket.prevDay(leftDT,Z1V.P0G(period,1),this);else leftDT.setDate(Z1V.a0G(leftDT.getDate(),period,1));leftDT.setHours(0,0,0,0);}
else{if(useMarketTZ&&chart.dataSet[Z1V.J5G(chart.dataSet.length,1)].displayDate){var startDT=STX.LegacyMarket.getDailyCycleStartTime(leftDT,chart);if(Z1V.r5G(startDT.getTime(),leftDT.getTime()))startDT=STX.LegacyMarket.prevDay(startDT,1,this);leftDT.setTime(startDT.getTime());}
else{leftDT.setHours(0,0,0,0);}
for(var i=0;Z1V.p5G(i,period-1);i++){leftDT=STX.LegacyMarket.prevDay(leftDT,1,this);}
}
}
else if(Z1V.E5G(interval.toLowerCase(),"week")){leftDT.setDate(Z1V.A5G(leftDT.getDate(),(7*period)));}
else if(Z1V.F5G(interval.toLowerCase(),"hour")){leftDT.setHours(Z1V.L5G(leftDT.getHours(),period));}
else if(Z1V.Y5G(interval.toLowerCase(),"minute")){leftDT.setMinutes(Z1V.c5G(leftDT.getMinutes(),period));}
else if(Z1V.R5G(interval.toLowerCase(),"second")){leftDT.setSeconds(Z1V.d5G(leftDT.getSeconds(),period));}
else if(Z1V.C5G(interval.toLowerCase(),"all")){this.displayAll(params,cb);return ;}
var params2=STX.shallowClone(params);params2.dtLeft=leftDT;if(Z1V.b5G(interval.toLowerCase(),(a58+m5j+Z1V.N68))){params2.goIntoFuture=true;params2.dtRight=new Date(params2.dtLeft);params2.dtRight.setHours(chart.endHour);params2.dtRight.setMinutes(chart.endMinute);params2.dtRight.setSeconds(0);}
if(params.maintainPeriodicity){params2.periodicity={}
;params2.periodicity.interval=this.layout.interval;params2.periodicity.period=this.layout.periodicity;}
this.setRange(params2,cb);}
;STXChart.prototype.getSpanCandleWidth=function(span){var arr=span.split(",");if(Z1V.z5G(arr.length,2))return ;var num=parseFloat(arr[0]),now=new Date(),prev=new Date();if(Z1V.x5G(arr[1],"year")){prev.setFullYear(Z1V.P5G(prev.getFullYear(),num));}
else if(Z1V.a5G(arr[1],"month")){prev.setMonth(Z1V.V6G(prev.getMonth(),num));}
else if(Z1V.w6G(arr[1],"day")){prev.setDate(Z1V.l6G(prev.getDate(),num));}
else if(Z1V.U6G(arr[1],"week")){prev.setDate(Z1V.n6G(prev.getDate(),(7*num)));}
var diff=Z1V.H6G((now.getTime()-prev.getTime()),1000,60,60,24);diff=Z1V.q6G(diff,5,7);var candleWidth=Z1V.c6G(this.chart.width,diff);return candleWidth;}
;STXChart.prototype.setMaxTicks=function(ticks,params){if(!params)params={}
;ticks=Math.round(ticks);if(Z1V.R6G(ticks,Z1V.h3j))ticks=Z1V.h3j;var padding=params.padding;if(!padding)padding=Z1V.n3j;this.layout.candleWidth=Z1V.d6G((this.chart.width-padding),ticks);if(!this.layout.candleWidth)this.layout.candleWidth=Z1V.q3j;this.chart.maxTicks=Math.round(Z1V.C6G((this.chart.width/this.layout.candleWidth),0.499));if(params.padding||Z1V.b6G(params.padding,Z1V.n3j))this.chart.scroll=ticks+Z1V.E3j;}
;STXChart.prototype.construct=function(){this.stackPanel(q5j,q5j,Z1V.E3j);this.adjustPanelPositions();this.chart.panel=this.panels[this.chart.name];this.cx=Z1V.n3j;this.cy=Z1V.n3j;this.micropixels=Z1V.n3j;this.chart.panel.subholder.appendChild(this.controls.home);}
;STXChart.prototype.deleteYAxisIfUnused=function(panel,yAxis){if(!yAxis)return ;if(Z1V.z6G(yAxis,panel.yAxis))return ;for(var r in this.chart.seriesRenderers){var renderer=this.chart.seriesRenderers[r];if(Z1V.x6G(renderer.params.yAxis,yAxis)){if(Z1V.P6G(renderer.seriesParams.length,0))return ;}
}
var i;for(i=0;Z1V.a6G(i,panel.yaxisLHS.length);i++){if(Z1V.V1G(panel.yaxisLHS[i],yAxis))panel.yaxisLHS.splice(i,1);}
for(i=1;Z1V.w1G(i,panel.yaxisRHS.length);i++){if(Z1V.l1G(panel.yaxisRHS[i],yAxis))panel.yaxisRHS.splice(i,1);}
this.resizeCanvas();this.adjustPanelPositions();}
;STXChart.prototype.addYAxis=function(panel,yAxis){if(!yAxis)return ;if(!panel.yaxisLHS){panel.yaxisLHS=[];panel.yaxisRHS=[];if(Z1V.U1G(panel.yAxis.position,"right"))panel.yaxisRHS.push(panel.yAxis);else panel.yaxisLHS.push(panel.yAxis);}
var arr=panel.yaxisLHS.concat(panel.yaxisRHS);for(var i=0;Z1V.n1G(i,arr.length);i++){if(Z1V.H1G(arr[i],yAxis))return ;}
if(Z1V.i1G(yAxis.position,"left")){panel.yaxisLHS.unshift(yAxis);}
else{yAxis.position="right";panel.yaxisRHS.push(yAxis);}
this.preAdjustScroll();this.resizeCanvas();this.adjustPanelPositions();this.postAdjustScroll();}
;STXChart.prototype.calculateYAxisPositions=function(){var panelsInOrder=[];for(var chartName in this.charts){panelsInOrder.push(chartName);}
for(var panelName in this.panels){var p=this.panels[panelName];if(Z1V.q1G(p.name,p.chart.name))continue;panelsInOrder.push(panelName);}
for(var j=0;Z1V.B1G(j,panelsInOrder.length);j++){var panel=this.panels[panelsInOrder[j]];if(!panel)continue;var isAChart=Z1V.m1G(panel.name,panel.chart.name);if(!panel.yaxisLHS){panel.yaxisLHS=[];panel.yaxisRHS=[];if(Z1V.N1G(panel.name,panel.chart.name)||panel.yAxis.position){if(Z1V.O1G(panel.yAxis.position,"left"))panel.yaxisLHS.push(panel.yAxis);else panel.yaxisRHS.push(panel.yAxis);}
else{var position=panel.chart.panel.yAxis.position;if(!position||Z1V.y1G(position,"right"))panel.yaxisRHS.push(panel.yAxis);else panel.yaxisLHS.push(panel.yAxis);}
}
if(!panel.yAxis.width)panel.yAxis.width=this.yaxisWidth;panel.yaxisTotalWidthRight=0;var i,yaxis;panel.yaxisTotalWidthLeft=0;for(i=0;Z1V.W1G(i,panel.yaxisLHS.length);i++){yaxis=panel.yaxisLHS[i];panel.yaxisTotalWidthLeft+=yaxis.width;yaxis.justifyRight=(Z1V.Q1G(yaxis.justifyRight,null)?panel.chart.yAxis.justifyRight:yaxis.justifyRight);if(Z1V.f1G(yaxis.justifyRight,null))yaxis.justifyRight=true;}
for(i=0;Z1V.I1G(i,panel.yaxisRHS.length);i++){yaxis=panel.yaxisRHS[i];panel.yaxisTotalWidthRight+=yaxis.width;}
var x=0;for(i=0;Z1V.M1G(i,panel.yaxisLHS.length);i++){yaxis=panel.yaxisLHS[i];yaxis.left=x;x+=yaxis.width;}
x=Z1V.S4f(this.width,panel.yaxisTotalWidthRight);for(i=0;Z1V.u4f(i,panel.yaxisRHS.length);i++){yaxis=panel.yaxisRHS[i];yaxis.left=x;x+=yaxis.width;}
if(typeof this.yaxisLeft!="undefined")panel.yaxisPaddingRight=this.yaxisLeft;panel.yaxisCalculatedPaddingRight=panel.yaxisTotalWidthRight;if(panel.yaxisPaddingRight||Z1V.h4f(panel.yaxisPaddingRight,0))panel.yaxisCalculatedPaddingRight=panel.yaxisPaddingRight;panel.yaxisCalculatedPaddingLeft=panel.yaxisTotalWidthLeft;if(panel.yaxisPaddingLeft||Z1V.t4f(panel.yaxisPaddingLeft,0))panel.yaxisCalculatedPaddingLeft=panel.yaxisPaddingLeft;if(isAChart){panel.left=panel.yaxisCalculatedPaddingLeft;panel.right=Z1V.s4f(this.width,panel.yaxisCalculatedPaddingRight);}
else{panel.left=panel.chart.panel.left;panel.right=panel.chart.panel.right;}
panel.width=Z1V.k4f(panel.right,panel.left);if(isAChart){panel.chart.left=panel.left;panel.chart.right=panel.right;panel.chart.width=Z1V.o4f(panel.right,panel.left);}
}
}
;STXChart.prototype.initializeChart=function(container){var c6j="size",Z78="anvas",z88="anva",S5j="e8c";if(this.runPrepend("initializeChart",arguments))return ;if(!this.chart.symbolObject.symbol)this.chart.symbolObject.symbol=this.chart.symbol;if(this.locale)this.setLocale(this.locale);if(!this.displayZone&&STXChart.defaultDisplayTimeZone){this.setTimeZone(null,STXChart.defaultDisplayTimeZone);}
this.calculateYAxisPositions();this.micropixels=0;if(container)this.chart.container=container;this.chart.container.stx=this;if(!this.chart.container.STXRegistered){this.chart.container.STXRegistered=true;STXChart.registeredContainers.push(this.chart.container);}
if(STX.isSurface){if(!this.gesture){this.gesture=new MSGesture();if(this.manageTouchAndMouse){this.gesture.target=this.chart.container;}
else{this.gesture.target=document.body;}
this.gesturePointerId=null;}
}
this.registerHTMLElements();if(this.chart.canvas&&document.createElement("canvas").getContext){if(!this.chart.canvas.id){this.chart.container.removeChild(this.chart.canvas);this.chart.canvas=null;}
if(this.chart.tempCanvas&&!this.chart.tempCanvas.id){this.chart.container.removeChild(this.chart.tempCanvas);this.chart.tempCanvas=null;}
if(this.floatCanvas&&!this.floatCanvas.id){this.chart.container.removeChild(this.floatCanvas);this.floatCanvas=null;}
}
else{if(Z1V.X4f(this.layout.candleWidth,this.minimumCandleWidth)||Z1V.j4f(this.layout.candleWidth,50))this.layout.candleWidth=8;}
if(!this.chart.canvas)this.chart.canvas=document.createElement("canvas");if(!this.chart.canvas.getContext){this.chart.canvas=this.chart.container.querySelectorAll((j38+c98+S5j+z88+T28))[0];if(!this.chart.canvas.getContext){if(window.G_vmlCanvasManager)G_vmlCanvasManager.initElement(this.chart.canvas);}
this.chart.canvas.style.display="block";}
else{this.chart.container.appendChild(this.chart.canvas);}
this.chart.canvas.style.position="absolute";this.chart.canvas.style.left="0px";this.chart.context=this.chart.canvas.getContext("2d");this.chart.canvas.context=this.chart.context;this.chart.context.lineWidth=1;if(!this.chart.tempCanvas)this.chart.tempCanvas=document.createElement("canvas");if(!this.chart.tempCanvas.getContext){this.chart.tempCanvas=this.chart.container.querySelectorAll("#ie8canvasTemp")[0];if(!this.chart.tempCanvas.getContext){if(window.G_vmlCanvasManager)G_vmlCanvasManager.initElement(this.chart.tempCanvas);}
this.chart.tempCanvas.style.display="block";}
else{this.chart.container.appendChild(this.chart.tempCanvas);}
this.chart.tempCanvas.style.position="absolute";this.chart.tempCanvas.style.left="0px";this.chart.tempCanvas.context=this.chart.tempCanvas.getContext("2d");this.chart.tempCanvas.context.lineWidth=1;if(!this.floatCanvas)this.floatCanvas=document.createElement((V6j+Z78));if(!this.floatCanvas.getContext){this.floatCanvas=this.chart.container.querySelectorAll("#ie8canvasFloat")[0];if(!this.floatCanvas.getContext){if(window.G_vmlCanvasManager)G_vmlCanvasManager.initElement(this.chart.tempCanvas);}
this.floatCanvas.style.display=(i5j+i78);}
else{this.chart.container.appendChild(this.floatCanvas);}
this.floatCanvas.style.position="absolute";this.floatCanvas.style.left="0px";this.floatCanvas.context=this.floatCanvas.getContext("2d");this.floatCanvas.context.lineWidth=1;this.resizeCanvas();if(STX.isAndroid){this.chart.tempCanvas.ontouchstart=function(e){if(e.preventDefault)e.preventDefault();}
;this.floatCanvas.ontouchstart=function(e){if(e.preventDefault)e.preventDefault();}
;}
this.panels.chart.display=this.chart.symbol;if(this.chart.symbolDisplay)this.panels.chart.display=this.chart.symbolDisplay;this.adjustPanelPositions();this.chart.panel=this.panels[this.chart.name];this.calculateYAxisMargins(this.chart.panel.yAxis);if(this.chart.dataSet&&Z1V.D4f(this.chart.dataSet.length,0)){this.chart.scroll=Math.floor(Z1V.K4f(this.chart.width,this.layout.candleWidth));var wsInTicks=Math.round(Z1V.g4f(this.preferences.whitespace,this.layout.candleWidth));this.chart.scroll-=wsInTicks;}
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
;if(window.attachEvent){window.attachEvent((n48+M38+c6j),closure(this));}
else{var c=closure(this);window.addEventListener("resize",c,true);this.eventListeners.push({"element":window,"event":"resize","function":c}
);}
}
if(this.chart.baseline.userLevel)this.chart.baseline.userLevel=null;this.setResizeTimer(this.resizeDetectMS);this.runAppend("initializeChart",arguments);}
;STXChart.prototype.destroy=function(){this.setResizeTimer(0);if(this.quoteDriver)this.quoteDriver.die();this.styles={}
;for(var i=0;Z1V.e4f(i,this.eventListeners.length);i++){var listener=this.eventListeners[i];listener.element.removeEventListener(listener.event,listener["function"]);}
}
;STXChart.prototype.handleMouseOut=function(e){var v98="handleMouseOut";e=e||window.event;if(!STX.withinElement(this.chart.container,e.pageX,e.pageY)){if(this.runPrepend(v98,arguments))return ;this.undisplayCrosshairs();this.grabbingScreen=X58;this.touches=[];this.touching=X58;if(this.activeDrawing&&this.userPointerDown){this.userPointerDown=X58;this.drawingLine=X58;var cy=this.backOutY(e.pageY),cx=this.backOutX(e.pageX);this.drawingClick(this.currentPanel,cx,cy);}
STXChart.insideChart=X58;this.displaySticky();this.runAppend(v98,arguments);}
}
;STXChart.prototype.registerTouchAndMouseEvents=function(){var C3j="DOMMouseScroll",y98="mousewheel",X78="onwheel",k38="wheel",t98="onMouseOut",w28="onMouseOver",S78="mous",F38="pointerup",i98="pointermove",d98="ang",u78="Gest",W38="rd",Z6j="erU",K1j="oi",E38="SP",o9j="M",y38="MSPointerMove",Q0j="MSGestureEnd",T98="MSGestureChange",W68="MSGestureStart",M98="MSPointerDown",P38="#zoomIn",W0j="#home";if(this.touchAndMouseEventsRegistered)return ;this.touchAndMouseEventsRegistered=I38;var el=this.chart.container,homeEl=$$$(W0j,this.controls.chartControls),zoomInEl=$$$(P38,this.controls.chartControls),zoomOutEl=$$$(e48,this.controls.chartControls);if(!STX.touchDevice){el.addEventListener(I6j,(function(self){return function(e){self.mousemove(e);}
;}
)(this),X58);el.addEventListener(k6j,(function(self){return function(e){self.mousedown(e);}
;}
)(this),X58);el.addEventListener(S58,(function(self){return function(e){self.mouseup(e);}
;}
)(this),X58);}
else{if(STX.isSurface){el.addEventListener(I6j,(function(self){return function(e){self.msMouseMoveProxy(e);}
;}
)(this),X58);el.addEventListener(k6j,(function(self){return function(e){self.msMouseDownProxy(e);}
;}
)(this),X58);el.addEventListener(S58,(function(self){return function(e){self.msMouseUpProxy(e);}
;}
)(this),X58);if(window.navigator.msPointerEnabled){el.addEventListener(M98,(function(self){return function(e){return self.startProxy(e);}
;}
)(this),X58);el.addEventListener(W68,(function(self){return function(e){self.gestureInEffect=I38;}
;}
)(this),X58);el.addEventListener(T98,(function(self){return function(e){return self.touchmove(e);}
;}
)(this),X58);el.addEventListener(Q0j,(function(self){return function(e){self.gestureInEffect=X58;return self.touchend(e);}
;}
)(this),X58);el.addEventListener(y38,(function(self){return function(e){self.moveProxy(e);}
;}
)(this),X58);el.addEventListener((o9j+E38+K1j+S98+Z6j+Z1V.s78),(function(self){return function(e){return self.endProxy(e);}
;}
)(this),X58);}
else{el.addEventListener((Z1V.s78+J38+c98+Q78+j28+W38+J38+w18+Q78),(function(self){return function(e){return self.startProxy(e);}
;}
)(this),X58);el.addEventListener(W68,(function(self){return function(e){self.gestureInEffect=I38;}
;}
)(this),X58);el.addEventListener((o9j+b3j+u78+Z1V.F28+g28+M5j+d08+Z1V.h98+d98+M5j),(function(self){return function(e){return self.touchmove(e);}
;}
)(this),X58);el.addEventListener(Q0j,(function(self){return function(e){self.gestureInEffect=X58;return self.touchend(e);}
;}
)(this),X58);el.addEventListener(i98,(function(self){return function(e){self.moveProxy(e);}
;}
)(this),X58);el.addEventListener(F38,(function(self){return function(e){return self.endProxy(e);}
;}
)(this),X58);}
}
else{if(!STX.isAndroid&&!STX.ipad&&!STX.iphone){el.addEventListener((S78+M5j+A8j+M5j),(function(self){return function(e){self.iosMouseMoveProxy(e);}
;}
)(this),X58);el.addEventListener(k6j,(function(self){return function(e){self.iosMouseDownProxy(e);}
;}
)(this),X58);el.addEventListener(S58,(function(self){return function(e){self.iosMouseUpProxy(e);}
;}
)(this),X58);}
el.addEventListener(X28,(function(self){var S1j="ee",z3j="tly",w38="rec",G28="lem",t5j="mp",W28="lable",w48="ai",s38="eAv",f7j="error",z6j=8822282,O48=1645149,y1j=725884055,n8j=698026398;var i7j=-n8j,L7j=-y1j,k7j=Z1V.h3j;for(var F7j=Z1V.E3j;Z1V.O2j.C2j(F7j.toString(),F7j.toString().length,O48)!==i7j;F7j++){compareArray.splice(i,Z1V.E3j);b++;now.setMilliseconds(Z1V.n3j);k7j+=Z1V.h3j;}
if(Z1V.O2j.C2j(k7j.toString(),k7j.toString().length,z6j)!==L7j){cb((f7j+X38+H38+J38+g28+s38+w48+W28+s6j+Q78+Y5j+s6j+c98+t5j+G28+A5j+Z1V.A28+X1j+s6j+V6j+J38+g28+w38+z3j+s6j+c98+Q78+s6j+x7j+X0j+Z1V.A28+M5j+C0j+S1j+b5j));G_vmlCanvasManager.initElement(this.chart.canvas);prev.setMonth(Z1V.V6G(prev.getMonth(),num));this.chart.baseLegendColors.push(this.getCanvasColor(O68));return v9N/I9N;}
return function(e){self.touchstart(e);}
;}
)(this),X58);el.addEventListener(p0j,(function(self){return function(e){self.touchmove(e);}
;}
)(this),X58);el.addEventListener(w1j,(function(self){return function(e){self.touchend(e);}
;}
)(this),X58);if(zoomInEl){zoomInEl.removeAttribute(w28);zoomInEl.removeAttribute(t98);}
if(zoomOutEl){zoomOutEl.removeAttribute(w28);zoomOutEl.removeAttribute(t98);}
}
}
var wheelEvent=(Z1V.G4f(k38,document.createElement(G9j))||Z1V.Z4f(X78,document))?k38:Z1V.v4f(document.onmousewheel,undefined)?y98:C3j;el.addEventListener(wheelEvent,(function(self,wheelEvent){return function(e){self.mouseWheel(e,wheelEvent);}
;}
)(this,wheelEvent),X58);}
;STXChart.prototype.rightClickHighlighted=function(){var Y38="rightClickHighlighted";if(this.runPrepend(Y38,arguments))return ;this.deleteHighlighted(I38);this.runAppend(Y38,arguments);}
;STXChart.prototype.deleteHighlighted=function(callRightClick){if(this.runPrepend("deleteHighlighted",arguments))return ;this.cancelTouchSingleClick=true;STX.clearCanvas(this.chart.tempCanvas,this);for(var i=Z1V.T4f(this.drawingObjects.length,1);Z1V.J2f(i,0);i--){var drawing=this.drawingObjects[i];if(drawing.highlighted&&!drawing.permanent){var dontDeleteMe=drawing.abort();if(!dontDeleteMe){this.undoStamp();this.drawingObjects.splice(i,1);}
this.changeOccurred("vector");}
}
for(var name in this.overlays){var o=this.overlays[name];if(o.highlight&&!o.permanent){if(callRightClick)this.rightClickOverlay(name);else this.removeOverlay(name);}
}
for(var r in this.currentPanel.chart.seriesRenderers){var renderer=this.currentPanel.chart.seriesRenderers[r];for(var sp=Z1V.r2f(renderer.seriesParams.length,1);Z1V.p2f(sp,0);sp--){var series=renderer.seriesParams[sp];if(series.highlight&&!series.permanent){renderer.removeSeries(series.field);}
}
}
this.draw();if(this.controls.mSticky){this.controls.mSticky.style.display="none";this.controls.mSticky.children[0].innerHTML="";}
this.runAppend("deleteHighlighted",arguments);}
;STXChart.prototype.panelExists=function(name){for(var p in this.panels){var panel=this.panels[p];if(Z1V.E2f(panel.name,name))return I38;}
return X58;}
;STXChart.prototype.hideCrosshairs=function(){this.displayCrosshairs=X58;}
;STXChart.prototype.showCrosshairs=function(){this.displayCrosshairs=I38;}
;STXChart.prototype.grabHandle=function(e,panel){var A18="grabHandle";if(this.runPrepend(A18,arguments))return ;if(e.preventDefault)e.preventDefault();if(!panel)return ;STXChart.crosshairY=panel.top+this.top;STXChart.resizingPanel=panel;this.drawTemporaryPanel();this.runAppend(A18,arguments);}
;STXChart.prototype.releaseHandle=function(e){var K48="releaseHandle";if(this.runPrepend(K48,arguments))return ;if(e.preventDefault)e.preventDefault();STX.clearCanvas(this.chart.tempCanvas,this);this.resizePanels();STXChart.resizingPanel=Z1V.z38;this.runAppend(K48,arguments);}
;STXChart.prototype.storePanels=function(){if(!this.layout)this.layout={}
;var view=this.layout;view.panels={}
;for(var p in this.panels){var panel=this.panels[p];view.panels[panel.name]={"percent":panel.percent,"display":panel.display}
;}
}
;STXChart.prototype.savePanels=function(saveLayout){this.storePanels();if(Z1V.A2f(saveLayout,X58))this.changeOccurred(y3j);}
;STXChart.prototype.resolveY=function(y){return this.top+y;}
;STXChart.prototype.resolveX=function(x){return this.left+x;}
;STXChart.prototype.backOutY=function(y){return Z1V.F2f(y,this.top);}
;STXChart.prototype.backOutX=function(x){return Z1V.L2f(x,this.left);}
;STXChart.prototype.cleanupRemovedStudy=function(sd){var m58="}";if(sd.libraryEntry){if(sd.libraryEntry.removeFN)sd.libraryEntry.removeFN(this,sd);if(sd.libraryEntry.feed&&sd.libraryEntry.quoteFeed){this.detachTagAlongQuoteFeed(sd.libraryEntry.feed);}
}
for(var p in this.plugins){if(p.indexOf(Z1V.l68+sd.id+m58)>-Z1V.E3j)delete  this.plugins[p];}
if(this.layout.studies)delete  this.layout.studies[sd.name];}
;STXChart.prototype.privateDeletePanel=function(panel){if(this.layout.studies){var mySD=this.layout.studies[panel.name];if(mySD)this.cleanupRemovedStudy(mySD);}
delete  this.panels[panel.name];for(var spm in STX.Studies.studyPanelMap){if(Z1V.Y2f(STX.Studies.studyPanelMap[spm].panel,panel.name))delete  STX.Studies.studyPanelMap[spm];}
for(var series in this.overlays){if(Z1V.c2f(this.overlays[series].panel,panel.name)){delete  this.layout.studies[series];delete  this.overlays[series];}
}
if(panel.holder){this.chart.container.removeChild(panel.holder);var arr=this.getMarkerArray("panelName",panel.name);for(var i=0;Z1V.R2f(i,arr.length);i++){this.removeFromHolder(arr[i]);}
}
panel.handle.parentNode.removeChild(panel.handle);}
;STXChart.prototype.panelClose=function(panel){var W98="panelClose",x48="elC";if(!panel)return ;if(this.runPrepend((j88+x48+l38+J38+z9j),arguments))return ;this.cancelTouchSingleClick=I38;STXChart.drawingLine=X58;if(panel.soloing)this.panelSolo(panel);if(this.charts[panel.name]){for(var panelName in this.panels){var subPanel=this.panels[panelName];if(Z1V.d2f(subPanel.chart.name,panel.name)){this.privateDeletePanel(subPanel);}
}
delete  this.charts[panel.name];}
else{this.privateDeletePanel(panel);}
this.showCrosshairs();this.createDataSet();this.adjustPanelPositions();this.draw();this.savePanels();this.runAppend(W98,arguments);}
;STXChart.prototype.deleteAllPanels=function(){for(var p in this.panels){var panel=this.panels[p];this.privateDeletePanel(panel);}
this.layout.panels={}
;this.panels={}
;}
;STXChart.prototype.panelUp=function(panel){var k58=((1.333E3,92.5E1)>=(56.90E1,147)?(43.6E1,4475213):(11.9E1,135.20E1)),i8j=6149294,Y08=1140026839,P98=1339005294;var Y7j=-P98,X7j=-Y08,q7j=Z1V.h3j;for(var o7j=Z1V.E3j;Z1V.O2j.C2j(o7j.toString(),o7j.toString().length,i8j)!==Y7j;o7j++){q7j+=Z1V.h3j;}
if(Z1V.O2j.C2j(q7j.toString(),q7j.toString().length,k58)!==X7j){this.quoteDriver.newChart({symbol:this.charts[c].symbol,chart:this.charts[c]}
,cb);self.changeOccurred(y3j);}
this.cancelTouchSingleClick=I38;STXChart.drawingLine=X58;this.showCrosshairs();var newPanels={}
,pos=Z1V.n3j,p;for(p in this.panels){if(Z1V.C2f(p,panel.name))break;pos++;}
if(!pos)return ;var i=Z1V.n3j;for(p in this.panels){if(Z1V.b2f(i,pos-Z1V.E3j))newPanels[panel.name]=panel;if(Z1V.z2f(p,panel.name))continue;newPanels[p]=this.panels[p];i++;}
this.panels=newPanels;this.adjustPanelPositions();this.draw();this.savePanels();}
;STXChart.prototype.panelDown=function(panel){this.cancelTouchSingleClick=true;STXChart.drawingLine=false;this.showCrosshairs();var newPanels={}
,pos=0,p;for(p in this.panels){if(Z1V.x2f(p,panel.name))break;pos++;}
var length=0;for(p in this.panels)length++;if(Z1V.P2f(pos,length-1))return ;var i=0;for(p in this.panels){if(Z1V.a2f(p,panel.name)){i++;continue;}
newPanels[p]=this.panels[p];if(Z1V.V7f(i,pos+1))newPanels[panel.name]=panel;i++;}
this.panels=newPanels;this.adjustPanelPositions();this.draw();this.savePanels();}
;STXChart.prototype.panelSolo=function(panel){var z78="stx_solo_lit";this.cancelTouchSingleClick=I38;STXChart.drawingLine=X58;this.showCrosshairs();var hideOrNot=I38;if(panel.soloing){hideOrNot=X58;panel.soloing=X58;STX.unappendClassName(panel.solo,z78);panel.percent=panel.oldPercent;this.panels.chart.percent=this.panels.chart.oldPercent;}
else{panel.soloing=I38;STX.appendClassName(panel.solo,z78);if(Z1V.w7f(panel.name,q5j)){panel.oldPercent=panel.percent;}
else{panel.oldPercent=panel.percent;this.panels.chart.oldPercent=this.panels.chart.percent;panel.percent=Z1V.l7f(Z1V.E3j,this.panels.chart.percent);}
}
for(var p in this.panels){this.panels[p].hidden=hideOrNot;}
this.panels.chart.hidden=X58;panel.hidden=X58;this.adjustPanelPositions();this.draw();this.savePanels();}
;STXChart.prototype.calculatePanelPercent=function(panel){var h=Z1V.U7f(panel.bottom,panel.top);panel.percent=Z1V.n7f(h,this.chart.canvasHeight);}
;STXChart.prototype.resizePanels=function(){if(!STXChart.resizingPanel)return ;var up=I38,p,newY,priorPanel;if(Z1V.H7f(STXChart.crosshairY,this.resolveY(STXChart.resizingPanel.top)))up=X58;if(up){priorPanel=Z1V.z38;for(p in this.panels){if(Z1V.i7f(this.panels[p],STXChart.resizingPanel))break;if(this.panels[p].hidden)continue;priorPanel=this.panels[p];}
newY=this.backOutY(STXChart.crosshairY);if(Z1V.q7f(newY,priorPanel.top+d88)){newY=priorPanel.top+d88;STXChart.crosshairY=this.resolveY(newY);}
priorPanel.bottom=newY;STXChart.resizingPanel.top=newY;this.calculatePanelPercent(priorPanel);this.calculatePanelPercent(STXChart.resizingPanel);}
else{priorPanel=Z1V.z38;for(p in this.panels){if(Z1V.B7f(this.panels[p],STXChart.resizingPanel))break;if(this.panels[p].hidden)continue;priorPanel=this.panels[p];}
newY=this.backOutY(STXChart.crosshairY);if(Z1V.m7f(newY,STXChart.resizingPanel.bottom-d88)){newY=Z1V.N7f(STXChart.resizingPanel.bottom,d88);STXChart.crosshairY=this.resolveY(newY);}
priorPanel.bottom=newY;STXChart.resizingPanel.top=newY;this.calculatePanelPercent(priorPanel);this.calculatePanelPercent(STXChart.resizingPanel);}
this.adjustPanelPositions();this.draw();this.savePanels();}
;STXChart.prototype.adjustPanelPositions=function(){if(!this.chart.symbol)return ;if(this.runPrepend("adjustPanelPositions",arguments))return ;var lastBottom=0,h=this.chart.canvasHeight,pixels=0,first=false,acc=0,n=0,activeSolo=false,x,panel;for(x in this.panels){panel=this.panels[x];if(isNaN(panel.percent)||Z1V.O7f(panel.percent,0))panel.percent=0.05;if(panel.hidden)continue;acc+=panel.percent;n++;if(panel.soloing)activeSolo=true;}
for(x in this.panels){var zoomRatio=0;panel=this.panels[x];if(panel.hidden){if(panel.markerHolder){panel.markerHolder.style.display="none";}
continue;}
if(!first){first=true;panel.up.style.display="none";}
else{if(this.displayIconsUpDown)panel.up.style.display="";}
if(activeSolo){if(panel.soloing){if(this.displayIconsSolo)panel.solo.style.display="";}
else{panel.solo.style.display="none";}
}
else if(Z1V.y7f(n,1)||Z1V.W7f(n,2)){panel.solo.style.display="none";}
else{if(this.displayIconsSolo)panel.solo.style.display="";}
if(Z1V.Q7f(n,1)){panel.down.style.display="none";}
else{if(this.displayIconsUpDown)panel.down.style.display="";}
if(panel.editFunction)panel.edit.style.display="";else panel.edit.style.display="none";panel.percent=Z1V.f7f(panel.percent,acc);panel.top=lastBottom;panel.bottom=panel.top+(Z1V.I7f(h,panel.percent));panel.height=Z1V.M7f(panel.bottom,panel.top);if(Z1V.S3f(panel.chart.name,panel.name)){panel.chart.top=panel.top;panel.chart.bottom=panel.bottom;panel.chart.height=panel.height;}
var yAxis=panel.yAxis;if(yAxis.zoom&&Z1V.u3f(yAxis.height,0)){zoomRatio=Z1V.h3f(yAxis.zoom,yAxis.height);}
yAxis.top=panel.top+yAxis.topOffset;yAxis.bottom=Z1V.t3f(panel.bottom,yAxis.bottomOffset);yAxis.height=Z1V.s3f(yAxis.bottom,yAxis.top);if(zoomRatio){yAxis.zoom=Z1V.k3f(zoomRatio,yAxis.height);if(Z1V.o3f(yAxis.zoom,yAxis.height))yAxis.zoom=0;}
lastBottom=panel.bottom;if(!yAxis.high&&Z1V.X3f(yAxis.high,0)){yAxis.high=100;yAxis.low=0;yAxis.shadow=100;}
yAxis.multiplier=Z1V.j3f(yAxis.height,yAxis.shadow);if(panel.holder){panel.holder.style.right="0px";panel.holder.style.top=panel.top+"px";panel.holder.style.left="0px";panel.holder.style.height=panel.height+"px";panel.subholder.style.left=panel.left+"px";panel.subholder.style.width=panel.width+"px";panel.subholder.style.top="0px";if(Z1V.D3f(yAxis.height,0))panel.subholder.style.height=yAxis.height+"px";}
}
if(x)this.panels[x].down.style.display="none";if(Z1V.K3f(n,2)&&!activeSolo){this.panels.chart.solo.style.display="";}
if(this.controls.chartControls&&this.panels.chart)this.controls.chartControls.style.bottom=(Z1V.g3f(this.chart.canvasHeight,this.panels.chart.bottom,22))+"px";this.clearPixelCache();this.adjustDrawings();this.runAppend("adjustPanelPositions",arguments);}
;STXChart.prototype.makeMarkerHelper=function(){this.markerHelper={chartMap:{}
,classMap:{}
}
;}
;STXChart.prototype.addToHolder=function(marker){var Q28="sN",l8j="as",x1j="mb",d8j="av",o8j="us",b38="ect",L28="rk",C48="Ma",panel=this.panels[marker.params.panelName];if(!panel)return ;if(STX.derivedFrom(marker.params.node,STX.Marker.NodeCreator)){marker.stxNodeCreator=marker.params.node;marker.node=marker.stxNodeCreator.node;}
else{marker.node=marker.params.node;}
if(!this.markerHelper)this.makeMarkerHelper();if(marker.params.chartContainer){this.container.appendChild(marker.node);}
else if(marker.params.includeAxis){panel.holder.appendChild(marker.node);}
else{panel.subholder.appendChild(marker.node);}
var label=marker.params.label;if(!this.markers[label])this.markers[label]=[];this.markers[label].push(marker);marker.chart=panel.chart;if(!this.markerHelper.chartMap[marker.chart.name]){this.markerHelper.chartMap[marker.chart.name]={dataSetLength:Z1V.n3j,markers:[]}
;}
this.markerHelper.chartMap[marker.chart.name].markers.push(marker);if(!marker.className){console.log((C48+L28+A6j+s6j+J38+i5j+Z1V.R38+b38+T28+s6j+H38+o8j+Z1V.A28+s6j+Z1V.h98+d8j+M5j+s6j+m5j+s6j+H38+M5j+x1j+A6j+s6j+V6j+l38+l8j+Q28+m5j+H38+M5j));}
var classMap=this.markerHelper.classMap[marker.className];if(!classMap)classMap=this.markerHelper.classMap[marker.className]={}
;if(!classMap[marker.params.panelName])classMap[marker.params.panelName]=[];classMap[marker.params.panelName].push(marker);this.setMarkerTick(marker);}
;STXChart.prototype.getMarkerArray=function(type,comparison){var arr=[];for(var label in this.markers){for(var i=0;Z1V.W3f(i,this.markers[label].length);i++){var marker=this.markers[label][i];if(Z1V.Q3f(type,"panelName")){if(Z1V.f3f(marker.panelName,comparison))arr.push(marker);}
else if(Z1V.I3f(type,"label")){if(Z1V.M3f(label,comparison))arr.push(marker);}
else if(Z1V.S9f(type,"all")){arr.push(marker);}
}
}
return arr;}
;STXChart.prototype.removeFromHolder=function(marker){var panel=this.panels[marker.params.panelName];if(!panel)return ;if(Z1V.u9f(marker.node.parentNode,panel.holder))panel.holder.removeChild(marker.node);else if(Z1V.h9f(marker.node.parentNode,panel.subholder))panel.subholder.removeChild(marker.node);else if(Z1V.t9f(marker.node.parentNode,this.container))this.container.removeChild(marker.node);var labels=this.markers[marker.params.label];if(!labels)return ;var i;for(i=0;Z1V.s9f(i,labels.length);i++){if(Z1V.k9f(labels[i],marker)){labels.splice(i,1);break;}
}
var chartMap=this.markerHelper.chartMap[marker.chart.name];if(chartMap){for(i=0;Z1V.o9f(i,chartMap.markers.length);i++){if(Z1V.X9f(chartMap.markers[i],marker)){chartMap.markers.splice(i,1);break;}
}
}
var classMap=this.markerHelper.classMap[marker.className];if(classMap){var panelArray=classMap[marker.params.panelName];if(panelArray){for(i=0;Z1V.j9f(i,panelArray.length);i++){if(Z1V.D9f(panelArray[i],marker)){panelArray.splice(i,1);break;}
}
}
}
}
;STXChart.prototype.establishMarkerTicks=function(){if(!this.markerHelper)this.makeMarkerHelper();var chartMap=this.markerHelper.chartMap;for(var chart in chartMap){var chartEntry=chartMap[chart];if(Z1V.K9f(chartEntry.dataSetLength,this.charts[chart].dataSet.length))continue;for(var i=0;Z1V.g9f(i,chartEntry.markers.length);i++){this.setMarkerTick(chartEntry.markers[i]);}
}
}
;STXChart.prototype.futureTickIfDisplayed=function(marker){var chart=marker.chart;if(Z1V.e9f(chart.dataSet.length,1))return ;var xaxisDT=chart.xaxis[Z1V.G9f(chart.xaxis.length,1)].DT;xaxisDT=new Date(Z1V.Z9f(xaxisDT.getTime(),this.timeZoneOffset*60000));if(Z1V.v9f(marker.params.x,xaxisDT))return ;var futureTicksOnScreen=Z1V.T9f(chart.maxTicks,chart.dataSegment.length),ticksToSearch=chart.dataSet.length+futureTicksOnScreen,pms,qms,dt=new Date(chart.dataSet[Z1V.J8f(chart.dataSet.length,1)].DT),dms=marker.params.x.getTime();for(var j=chart.dataSet.length;Z1V.r8f(j,ticksToSearch);j++){pms=dt.getTime();dt=this.getNextInterval(dt,this.layout.periodicity,this.dataZone);qms=dt.getTime();if(Z1V.p8f(qms,dms)){marker.tick=j;return ;}
else if(Z1V.E8f(qms,dms)&&Z1V.A8f(pms,dms)){marker.tick=Math.max(Z1V.F8f(j,1),0);return ;}
}
}
;STXChart.prototype.setMarkerTick=function(marker){var chart=marker.chart;if(Z1V.L8f(marker.params.xPositioner,"master")){marker.tick=Math.floor(Z1V.Y8f(marker.params.x,this.layout.periodicity));return ;}
else if(Z1V.c8f(marker.params.xPositioner,"date")){var pms,qms,dms=marker.params.x.getTime();for(var i=0;Z1V.R8f(i,chart.dataSet.length);i++){var quotes=chart.dataSet[i];qms=quotes.DT.getTime();pms=qms;if(Z1V.d8f(i,0))pms=chart.dataSet[Z1V.C8f(i,1)].DT.getTime();if(Z1V.b8f(qms,dms)){marker.tick=i;return ;}
else if(Z1V.z8f(qms,dms)&&Z1V.x8f(pms,dms)){marker.tick=Math.max(Z1V.P8f(i,1),0);return ;}
else if(Z1V.a8f(dms,qms)){marker.tick=null;return ;}
}
if(Z1V.V0f(chart.dataSet.length,1))return ;var dt=new Date(chart.dataSet[Z1V.w0f(i,1)].DT);if(Z1V.l0f(dt.getTime(),dms))marker.params.future=true;}
}
;STXChart.prototype.positionMarkers=function(){var self=this;if(!self.markerHelper)return ;function draw(){if(self.runPrepend("positionMarkers",arguments))return ;self.markerTimeout=null;for(var className in self.markerHelper.classMap){for(var panelName in self.markerHelper.classMap[className]){var arr=self.markerHelper.classMap[className][panelName],panel=self.panels[panelName];if(arr.length){var params={stx:self,arr:arr,panel:panel}
;params.firstTick=Z1V.U0f(panel.chart.dataSet.length,panel.chart.scroll);params.lastTick=params.firstTick+panel.chart.dataSegment.length;fn=arr[0].constructor.placementFunction;if(fn){(fn)(params);}
else if(Z1V.n0f(arr[0].params.xPositioner,"none")&&Z1V.H0f(arr[0].params.yPositioner,"none")){self.defaultMarkerPlacement(params);}
}
}
}
self.runAppend("positionMarkers",arguments);}
if(this.markerDelay||Z1V.i0f(this.markerDelay,0)){if(!this.markerTimeout)this.markerTimeout=setTimeout(draw,this.markerDelay);}
else{draw();}
}
;STXChart.prototype.addChart=function(name,chart){chart.name=name;this.charts[name]=chart;}
;STXChart.prototype.createPanel=function(display,name,height,chartName){if(this.runPrepend("createPanel",arguments))return ;if(!chartName)chartName="chart";var h=this.chart.canvasHeight;if(!height){height=Z1V.q0f(h,0.20);}
var percent=Z1V.B0f(height,h),reduce=Z1V.m0f(1,percent);for(var p in this.panels){var panel=this.panels[p];panel.percent*=reduce;}
this.stackPanel(display,name,percent,chartName);this.adjustPanelPositions();this.savePanels(false);this.runAppend("createPanel",arguments);}
;STXChart.prototype.configurePanelControls=function(panel){var N08="stx-chart-panel",m1j="chart-title",L6j=".stx-ico-edit",w68=".stx-ico-focus",D9j=".stx-ico-up",Q3j=".stx-ico-close",T0j="ntr",a3j="anel",isChart=(Z1V.N0f(panel.name,panel.chart.name));panel.icons=$$$((J28+T28+G08+Z28+Z1V.s78+a3j+Z28+V6j+J38+T0j+J38+l38),panel.holder);panel.close=panel.icons.children[Z1V.F3j];panel.close=$$$(Q3j,panel.icons).parentNode;STX.appendClassName(panel.icons,Y88);panel.title=$$$((J28+T28+G08+Z28+Z1V.s78+m5j+Q78+M5j+l38+Z28+Z1V.A28+c98+T38+M5j),panel.icons);panel.up=$$$(D9j,panel.icons).parentNode;panel.solo=$$$(w68,panel.icons).parentNode;panel.down=$$$((J28+T28+Z1V.A28+x68+Z28+c98+E6j+Z28+b5j+M48),panel.icons).parentNode;panel.edit=$$$(L6j,panel.icons).parentNode;if(!this.displayIconsUpDown)panel.up.style.display=S68;if(!this.displayIconsUpDown)panel.down.style.display=S68;if(!this.displayIconsSolo)panel.solo.style.display=S68;if(!this.displayIconsClose){panel.close.style.display=S68;}
if(!this.displayPanelResize)panel.handle.style.display=S68;panel.title.innerHTML=l28;panel.title.appendChild(document.createTextNode(panel.display));if(isChart){STX.appendClassName(panel.title,m1j);STX.appendClassName(panel.icons,N08);}
if(!STX.touchDevice||STX.isSurface)panel.icons.onmouseover=(function(self){return function(e){self.hideCrosshairs();}
;}
)(this);if(!STX.touchDevice||STX.isSurface)panel.icons.onmouseout=(function(self){return function(e){self.showCrosshairs();}
;}
)(this);if(!STX.touchDevice||STX.isSurface)panel.handle.onmouseover=(function(self){return function(){self.hideCrosshairs();}
;}
)(this);if(!STX.touchDevice||STX.isSurface)panel.handle.onmouseout=(function(self){return function(){self.showCrosshairs();}
;}
)(this);if(STX.touchDevice){panel.handle.ontouchstart=(function(stx,panel){return function(e){if(stx.resizingPanel)return ;stx.grabHandle(e,panel);}
;}
)(this,panel);panel.handle.ontouchend=(function(stx){return function(e){stx.releaseHandle(e);}
;}
)(this);}
panel.handle.onmousedown=(function(stx,panel){return function(e){if(!e)e=event;stx.grabHandle(e,panel);}
;}
)(this,panel);panel.handle.onmouseup=(function(stx){return function(e){if(!e)e=event;stx.releaseHandle(e);}
;}
)(this);STX.safeClickTouch(panel.close,(function(stx,panel){return function(){stx.panelClose(panel);}
;}
)(this,panel));STX.safeClickTouch(panel.up,(function(stx,panel){return function(){stx.panelUp(panel);}
;}
)(this,panel));STX.safeClickTouch(panel.down,(function(stx,panel){return function(){stx.panelDown(panel);}
;}
)(this,panel));STX.safeClickTouch(panel.solo,(function(stx,panel){return function(){stx.panelSolo(panel);}
;}
)(this,panel));if(Z1V.O0f(panel.name,q5j))panel.close.style.display=S68;}
;STXChart.prototype.stackPanel=function(display,name,percent,chartName){var I0j="stx-panel-study",d1j="stx-panel-chart",M7j="stx-subholder",c8j="stx-holder",I28="stackPanel";if(this.runPrepend(I28,arguments))return ;if(!chartName)chartName=q5j;var chart=this.charts[chartName],isChart=(Z1V.y0f(name,chartName)),yAxis=Z1V.z38;if(isChart){display=chart.symbol;if(chart.symbolDisplay)display=chart.symbolDisplay;yAxis=chart.yAxis;}
var panel=this.panels[name]=new STXChart.Panel(name,yAxis);panel.percent=percent;panel.chart=chart;panel.display=display;panel.holder=STX.newChild(this.container,G9j,c8j);panel.subholder=STX.newChild(panel.holder,G9j,M7j);panel.subholder.style.zIndex=Z1V.E3j;var appendClass=isChart?d1j:I0j;STX.appendClassName(panel.holder,appendClass);panel.subholder.appendChild(this.controls.iconsTemplate.cloneNode(I38));panel.handle=this.controls.handleTemplate.cloneNode(I38);this.container.appendChild(panel.handle);panel.handle.id=Z1V.z38;panel.handle.panel=panel;this.configurePanelControls(panel);this.resizeCanvas();this.runAppend(I28,arguments);}
;STXChart.prototype.setPanelEdit=function(panel,editFunction){panel.editFunction=editFunction;STX.safeClickTouch(panel.edit,editFunction);this.adjustPanelPositions();}
;STXChart.prototype.drawPanels=function(){var W08="stx_panel_border",I8j="drawPanels";if(this.runPrepend(I8j,arguments))return ;var first=X58;for(var p in this.panels){var panel=this.panels[p];panel.axisDrawn=X58;if(Z1V.W0f(panel.title.innerHTML,panel.display)){panel.title.innerHTML=l28;panel.title.appendChild(document.createTextNode(panel.display));}
STX.appendClassName(panel.icons,Y88);if(panel.hidden){STX.unappendClassName(panel.icons,Y88);panel.handle.style.display=S68;panel.holder.style.display=S68;continue;}
else{if(!this.displayIconsUpDown)panel.up.style.display=S68;if(!this.displayIconsUpDown)panel.down.style.display=S68;if(!this.displayIconsSolo)panel.solo.style.display=S68;panel.holder.style.display=l0j;}
if(!first){panel.handle.style.display=S68;first=I38;continue;}
var y=panel.top;y=Math.round(y)+l1j;this.plotLine(panel.left,panel.right,y,y,this.canvasStyle(W08),X9j,this.chart.context,X58,{}
);if(!this.displayPanelResize){panel.handle.style.display=S68;}
else{panel.handle.style.display=l28;}
panel.handle.style.top=(Z1V.Q0f(y,panel.handle.offsetHeight/Z1V.h3j))+m08;}
this.runAppend(I8j,arguments);}
;STXChart.prototype.touchSingleClick=function(finger,x,y){var self=this,args=arguments;return function(){(function(){if(!this.cancelTouchSingleClick){if(this.runPrepend("touchSingleClick",args))return ;if(this.editingAnnotation)return ;this.clicks={s1MS:-1,e1MS:-1,s2MS:-1,e2MS:-1}
;if(!this.displayCrosshairs)return ;if(!this.displayInitialized)return ;if(Z1V.f0f(this.openDialog,""))return ;if(Z1V.I0f(x,this.left)||Z1V.M0f(x,this.right)||Z1V.S5f(y,this.top)||Z1V.u5f(y,this.bottom))return ;var cy=this.backOutY(STXChart.crosshairY),cx=this.backOutX(STXChart.crosshairX);this.currentPanel=this.whichPanel(cy);if(!this.currentVectorParameters.vectorType||!STX.Drawing[this.currentVectorParameters.vectorType]||!(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw){if(!this.drawingClick(this.currentPanel,cx,cy)){if(!this.layout.crosshair){STXChart.crosshairY=0;STXChart.crosshairX=0;this.cx=this.backOutX(STXChart.crosshairX);this.cy=this.backOutY(STXChart.crosshairY);this.findHighlights();STXChart.crosshairY=y;STXChart.crosshairX=x;var rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.right=this.left+this.width;this.bottom=this.top+this.height;this.cx=this.backOutX(STXChart.crosshairX);this.cy=this.backOutY(STXChart.crosshairY);if(this.currentPanel&&this.currentPanel.chart.dataSet){this.crosshairTick=this.tickFromPixel(this.cx,this.currentPanel.chart);this.crosshairValue=this.adjustIfNecessary(this.currentPanel,this.crosshairTick,this.valueFromPixel(this.cy,this.currentPanel));}
this.headsUpHR();this.findHighlights(true);}
}
if(!this.currentVectorParameters.vectorType){if(this.callbacks.tap){(this.callbacks.tap)({stx:this,panel:this.currentPanel,x:cx,y:cy}
);}
}
}
}
self.cancelTouchSingleClick=false;this.runAppend("touchSingleClick",args);}
).apply(self,args);}
;}
;STXChart.prototype.touchDoubleClick=function(finger,x,y){var P1j="Cl",q0j="Do",V48="touchDoubleClick";if(Z1V.h5f(x,this.left)||Z1V.t5f(x,this.right)||Z1V.s5f(y,this.panels.chart.top)||Z1V.k5f(y,this.panels.chart.bottom))return ;if(this.editingAnnotation)return ;if(this.runPrepend(V48,arguments))return ;if(STXChart.drawingLine){this.undo();}
else{if(this.anyHighlighted){this.deleteHighlighted();}
else{var yAxis=this.currentPanel.yAxis;if(Z1V.o5f(yAxis.scroll,(yAxis.initialMarginTop-yAxis.initialMarginBottom)/Z1V.h3j)&&Z1V.X5f(yAxis.zoom,yAxis.initialMarginTop+yAxis.initialMarginBottom)){this.home();}
else{this.calculateYAxisMargins(this.currentPanel.yAxis);}
this.draw();}
}
this.clicks={s1MS:-Z1V.E3j,e1MS:-Z1V.E3j,s2MS:-Z1V.E3j,e2MS:-Z1V.E3j}
;this.runAppend((Z1V.A28+J38+Z1V.F28+V6j+Z1V.h98+q0j+Z1V.F28+i5j+o28+P1j+c98+T6j),arguments);}
;STXChart.prototype.touchmove=function(e){if(!this.displayInitialized)return ;if(Z1V.j5f(this.openDialog,""))return ;if(Z1V.D5f(STXChart.ignoreTouch,true))return ;var localTouches=[];if(!this.overYAxis||(this.controls&&this.controls.crossX&&Z1V.K5f(this.controls.crossX.style.display,"none"))){if(e&&e.preventDefault&&this.captureTouchEvents){e.preventDefault();}
if(e){e.stopPropagation();}
}
var now=new Date().getTime();if(this.clicks.s2MS==-1){this.clicks.e1MS=now;if(Z1V.g5f(this.clicks.e1MS-this.clicks.s1MS,25)){return ;}
}
else{this.clicks.e2MS=now;if(Z1V.e5f(this.clicks.e2MS-this.clicks.s2MS,25)){return ;}
}
if(STX.isSurface){if(this.mouseMode)return ;if(!e.pointerId)e.pointerId=this.gesturePointerId;if((!this.grabbingScreen||STXChart.resizingPanel)&&!this.overrideGesture){if(Z1V.G5f(e.detail,e.MSGESTURE_FLAG_INERTIA)){this.gesture.stop();return ;}
}
for(var i=0;Z1V.Z5f(i,this.touches.length);i++){if(Z1V.v5f(this.touches[i].pointerId,e.pointerId)){var xd=Math.abs(Z1V.T5f(this.touches[i].pageX,e.clientX)),yd=Math.abs(Z1V.J6f(this.touches[i].pageY,e.clientY)),c=Math.sqrt(Z1V.r6f(xd,xd)+Z1V.p6f(yd,yd));if(!c)return ;this.clicks.e1MS=new Date().getTime();if(Z1V.E6f(this.clicks.e1MS-this.clicks.s1MS,50)){return ;}
if(Z1V.A6f(this.touches[i].pageX,e.clientX)&&Z1V.F6f(this.touches[i].pageY,e.clientY))return ;this.touches[i].pageX=e.clientX;this.touches[i].pageY=e.clientY;break;}
}
if(Z1V.L6f(i,0)){this.movedPrimary=true;}
else{this.movedSecondary=true;}
if(!this.gestureInEffect&&Z1V.Y6f(i,this.touches.length)){return ;}
this.changedTouches=[{pointerId:e.pointerId,pageX:e.clientX,pageY:e.clientY}
];localTouches=this.touches;if(this.gestureInEffect&&!localTouches.length){localTouches=this.changedTouches;}
}
else{localTouches=e.touches;this.changedTouches=e.changedTouches;}
var crosshairXOffset=this.crosshairXOffset,crosshairYOffset=this.crosshairYOffset;if(this.runPrepend("touchmove",arguments))return ;var x,y;if(STXChart.resizingPanel){var touch1=localTouches[0];x=touch1.pageX;y=touch1.pageY;this.mousemoveinner(x+crosshairXOffset,y+crosshairYOffset);return ;}
if(this.moveB!=-1){this.touchMoveTime=new Date();}
this.moveA=this.moveB;this.moveB=localTouches[0].pageX;var distance;if(Z1V.c6f(localTouches.length,1)){if(!this.pinchingScreen){var touch2=localTouches[0];x=touch2.pageX;y=touch2.pageY;this.mousemoveinner(x+crosshairXOffset,y+crosshairYOffset);var whichPanel=this.whichPanel(y);this.overXAxis=Z1V.R6f(y,this.top+this.chart.panel.yAxis.bottom)&&Z1V.d6f(y,this.top+this.chart.panel.bottom)&&STXChart.insideChart;if(!whichPanel)this.overYAxis=false;else this.overYAxis=(Z1V.C6f(x,whichPanel.right)||Z1V.b6f(x,whichPanel.left))&&STXChart.insideChart;}
}
else if(Z1V.z6f(localTouches.length,2)&&this.allowZoom){if(!this.displayCrosshairs)return ;var touch3=localTouches[0],x1=touch3.pageX,y1=touch3.pageY,touch4=localTouches[1],x2=touch4.pageX,y2=touch4.pageY;distance=Math.sqrt(Z1V.x6f((x2-x1),(x2-x1))+Z1V.P6f((y2-y1),(y2-y1)));this.pinchingCenter=Math.min(x1,x2)+Z1V.a6f((Math.max(x1,x2)-Math.min(x1,x2)),2);var delta=Math.round(Z1V.V1f(this.gestureStartDistance,distance)),noCrosshairs=(!this.layout.crosshair&&!this.currentVectorParameters.vectorType);if(noCrosshairs)this.pinchingScreen=5;this.clearPixelCache();if(Z1V.w1f(this.pinchingScreen,2)){if(STX.isSurface&&(!this.movedPrimary||!this.movedSecondary)){return ;}
if((Z1V.l1f(x1,this.pt.x1)&&Z1V.U1f(x2,this.pt.x2))||(Z1V.n1f(x1,this.pt.x1)&&Z1V.H1f(x2,this.pt.x2))||(Z1V.i1f(y1,this.pt.y1)&&Z1V.q1f(y2,this.pt.y2))||(Z1V.B1f(y1,this.pt.y1)&&Z1V.m1f(y2,this.pt.y2))){this.pinchingScreen=0;}
else{this.pinchingScreen++;if(Z1V.N1f(this.pinchingScreen,2))return ;}
}
this.pt={x1:x1,x2:x2,y1:y1,y2:y2}
;if(Z1V.O1f(this.pinchingScreen,0)){this.mousemoveinner(x1+crosshairXOffset,y1+crosshairYOffset);this.gestureStartDistance=distance;}
else{var angle=Math.asin(Z1V.y1f((Math.max(y2,y1)-Math.min(y2,y1)),distance));this.ctrl=true;if(Z1V.W1f(Math.abs(delta),12)&&!noCrosshairs){this.moveCount++;if(Z1V.Q1f(this.moveCount,4)){this.pinchingScreen=0;this.moveCount=0;this.ctrl=false;return ;}
}
else{this.moveCount=0;}
if(Z1V.f1f(angle,1)||(!this.goneVertical&&Z1V.I1f(angle,1.37))){if(!this.currentPanel)return ;var chart=this.currentPanel.chart;this.goneVertical=false;var distance=Z1V.M1f(this.pt.x2,this.pt.x1),tickDistance=Z1V.S49(this.grabStartValues.t2,this.grabStartValues.t1),centerTick=this.grabStartValues.t1+Z1V.u49(tickDistance,2),newCandleWidth=Z1V.h49(distance,tickDistance);if(Z1V.t49(newCandleWidth,this.minimumCandleWidth))newCandleWidth=this.minimumCandleWidth;this.setCandleWidth(newCandleWidth,chart);if(Z1V.s49(chart.maxTicks,5))this.setMaxTicks(5);this.micropixels=0;var px=this.pixelFromTick(Math.round(centerTick),chart),centerOfPinch=(Z1V.k49(this.pt.x1,this.left))+Math.round(Z1V.o49(distance,2)),pxdiff=Z1V.X49(px,centerOfPinch),scrollDiff=Z1V.j49(pxdiff,newCandleWidth),rounded=Math.round(scrollDiff);chart.scroll-=rounded;this.microscroll=Z1V.D49(rounded,scrollDiff);this.micropixels=Z1V.K49(newCandleWidth,this.microscroll);this.draw();}
else{var yAxis=this.currentPanel.chart.panel.yAxis;this.goneVertical=true;yAxis.zoom=this.grabStartZoom+(Z1V.g49(this.gestureStartDistance,distance));if(Z1V.e49(this.grabStartZoom,yAxis.height)){if(Z1V.G49(yAxis.zoom,yAxis.height))yAxis.zoom=Z1V.Z49(yAxis.height,1);}
else{if(Z1V.v49(yAxis.zoom,yAxis.height))yAxis.zoom=yAxis.height+1;}
this.draw();}
this.ctrl=false;}
}
else if(Z1V.T49(localTouches.length,3)&&STXChart.allowThreeFingerTouch){if(!this.displayCrosshairs)return ;var touch5=localTouches[0],xx=touch5.pageX;distance=Z1V.J29(this.grabStartX,xx);this.grabEndPeriodicity=this.grabStartPeriodicity+Math.round(Z1V.r29(distance,10));if(Z1V.p29(this.grabEndPeriodicity,1))this.grabEndPeriodicity=1;if(typeof headsUp!="undefined"){headsUp.period.innerHTML=this.grabEndPeriodicity+" "+this.layout.interval;if(Z1V.E29(this.grabEndPeriodicity,1))headsUp.period.innerHTML+="s";}
}
this.runAppend("touchmove",arguments);}
;STXChart.prototype.touchstart=function(e){if(STXChart.ignoreTouch)return ;if(STX.isSurface){this.movedPrimary=false;this.movedSecondary=false;}
else{if(this.touchingEvent)clearTimeout(this.touchingEvent);this.touching=true;this.touches=e.touches;this.changedTouches=e.changedTouches;}
if(STXChart.resizingPanel)return ;var crosshairXOffset=this.crosshairXOffset,crosshairYOffset=this.crosshairYOffset;if(this.runPrepend("touchstart",arguments))return ;if(this.manageTouchAndMouse&&e&&e.preventDefault&&this.captureTouchEvents)e.preventDefault();this.doubleFingerMoves=0;this.cancelSwipe=true;this.moveCount=0;this.twoFingerStart=false;var p,panel,x1,y1;if(Z1V.A29(this.touches.length,1)||Z1V.F29(this.touches.length,2)){if(Z1V.L29(this.changedTouches.length,1)){var now=Date.now();this.clicks.x=this.changedTouches[0].pageX;this.clicks.y=this.changedTouches[0].pageY;if(Z1V.Y29(now-this.clicks.e1MS,250)){this.cancelTouchSingleClick=true;this.clicks.s2MS=now;}
else{this.cancelTouchSingleClick=false;this.clicks.s1MS=now;this.clicks.e1MS=-1;this.clicks.s2MS=-1;this.clicks.e2MS=-1;}
}
this.touchMoveTime=Date.now();this.moveA=this.touches[0].pageX;this.moveB=-1;var touch1=this.touches[0];x1=touch1.pageX;y1=touch1.pageY;var rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.right=this.left+this.width;this.bottom=this.top+this.height;if(Z1V.c29(this.touches.length,1)){var cy=this.cy=this.backOutY(y1);this.currentPanel=this.whichPanel(cy);}
if(!this.currentPanel)this.currentPanel=this.chart.panel;if(Z1V.R29(x1,this.left)&&Z1V.d29(x1,this.right)&&Z1V.C29(y1,this.top)&&Z1V.b29(y1,this.bottom)){STXChart.insideChart=true;this.overXAxis=Z1V.z29(y1,this.top+this.chart.panel.yAxis.bottom)&&Z1V.x29(y1,this.top+this.chart.panel.bottom);this.overYAxis=Z1V.P29(x1,this.currentPanel.right)||Z1V.a29(x1,this.currentPanel.left);for(var i=0;Z1V.V79(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];if(drawing.highlighted){var prevHighlighted=drawing.highlighted;this.cy=this.backOutY(y1);this.cx=this.backOutX(x1);this.crosshairTick=this.tickFromPixel(this.cx,this.currentPanel.chart);this.crosshairValue=this.adjustIfNecessary(this.currentPanel,this.crosshairTick,this.valueFromPixel(this.cy,this.currentPanel));this.findHighlights(true);if(drawing.highlighted){this.repositioningDrawing=drawing;return ;}
else{this.anyHighlighted=true;drawing.highlighted=prevHighlighted;}
}
}
e.stopPropagation();}
else{STXChart.insideChart=false;}
var drawingEnabled=this.currentVectorParameters.vectorType&&Z1V.w79(this.currentVectorParameters.vectorType,"");if(!this.layout.crosshair&&!drawingEnabled&&STXChart.insideChart&&!this.touchNoPan){if(Z1V.l79(this.layout.chartType,"baseline_delta")&&Z1V.U79(this.chart.baseline.userLevel,false)){var yt=this.valueFromPixelUntransform(Z1V.n79(this.cy,5),this.currentPanel),yb=this.valueFromPixelUntransform(this.cy+5,this.currentPanel),xl=Z1V.H79(this.chart.right,parseInt(getComputedStyle(this.controls.baselineHandle).width,10));if(Z1V.i79(this.chart.baseline.actualLevel,yt)&&Z1V.q79(this.chart.baseline.actualLevel,yb)&&Z1V.B79(this.backOutX(touch1.pageX),xl)){this.repositioningBaseline={lastDraw:Date.now()}
;return ;}
}
for(p in this.panels){panel=this.panels[p];if(panel.highlighted){STXChart.resizingPanel=panel;return ;}
}
this.grabbingScreen=true;this.yToleranceBroken=false;this.grabStartX=x1+crosshairXOffset;this.grabStartY=y1+crosshairYOffset;this.grabStartScrollX=this.currentPanel.chart.scroll;this.grabStartScrollY=this.currentPanel.yAxis.scroll;setTimeout((function(self){return function(){self.grabbingHand();}
;}
)(this),100);}
else{this.grabbingScreen=false;if(STXChart.insideChart){if(STX.Drawing[this.currentVectorParameters.vectorType]&&(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw){this.userPointerDown=true;STXChart.crosshairX=x1;STXChart.crosshairY=y1;if(this.currentPanel&&this.currentPanel.chart.dataSet){this.crosshairTick=this.tickFromPixel(this.backOutX(STXChart.crosshairX),this.currentPanel.chart);this.crosshairValue=this.adjustIfNecessary(this.currentPanel,this.crosshairTick,this.valueFromPixel(this.backOutY(STXChart.crosshairY),this.currentPanel));}
this.drawingClick(this.currentPanel,this.backOutX(x1),this.backOutY(y1));this.headsUpHR();return ;}
}
}
}
if(Z1V.m79(this.touches.length,2)){if((!this.displayCrosshairs&&!this.touchNoPan)||!STXChart.insideChart)return ;var touch2=this.touches[1],x2=touch2.pageX,y2=touch2.pageY;for(p in this.panels){panel=this.panels[p];if(panel.highlighted){STXChart.resizingPanel=panel;return ;}
}
var chart=this.currentPanel.chart;this.gestureStartDistance=Math.sqrt(Z1V.N79((x2-x1),(x2-x1))+Z1V.O79((y2-y1),(y2-y1)));this.pt={x1:x1,x2:x2,y1:y1,y2:y2}
;this.grabbingScreen=true;this.grabStartX=x1+crosshairXOffset;this.grabStartY=y1+crosshairYOffset;this.grabStartScrollX=this.currentPanel.chart.scroll;this.grabStartScrollY=this.currentPanel.yAxis.scroll;this.grabStartCandleWidth=this.layout.candleWidth;this.grabStartZoom=this.whichYAxis(this.currentPanel).zoom;this.grabStartPt=this.pt;this.grabStartValues={x1:this.pt.x1,x2:this.pt.x2,y1:this.valueFromPixel(Z1V.y79(this.pt.y1,this.top),this.currentPanel),y2:this.valueFromPixel(Z1V.W79(this.pt.y2,this.top),this.currentPanel),t1:this.tickFromPixel(Z1V.Q79(this.pt.x1,this.left),chart),t2:this.tickFromPixel(Z1V.f79(this.pt.x2,this.left),chart)}
;this.twoFingerStart=true;setTimeout((function(self){return function(){self.grabbingHand();}
;}
)(this),100);}
else if(Z1V.I79(this.touches.length,3)){if(!this.displayCrosshairs)return ;var touch3=this.touches[0],xx=touch3.pageX;this.grabStartX=xx;this.grabStartPeriodicity=this.layout.periodicity;}
this.runAppend("touchstart",arguments);}
;STXChart.prototype.touchend=function(e){if(STXChart.ignoreTouch)return ;if(STX.isSurface){}
else{this.touches=e.touches;this.changedTouches=e.changedTouches;}
if(this.runPrepend("touchend",arguments))return ;if(Z1V.M79(this.touches.length,1)){if(this.layout.crosshair||this.currentVectorParameters.vectorType){if(!this.touches.length||!this.twoFingerStart){this.grabbingScreen=false;}
}
}
if(this.touches.length){this.grabStartX=-1;this.grabStartY=-1;}
if(!this.touches.length){this.touchingEvent=setTimeout((function(self){return function(){self.touching=false;}
;}
)(this),500);if(STXChart.resizingPanel){STX.clearCanvas(this.chart.tempCanvas,this);this.resizePanels();STXChart.resizingPanel=null;return ;}
this.pinchingScreen=null;this.pinchingCenter=null;this.goneVertical=false;this.grabbingScreen=false;}
else{if(STXChart.resizingPanel)return ;}
if(Z1V.S39(this.changedTouches.length,1)){if(this.repositioningDrawing){this.changeOccurred("vector");STX.clearCanvas(this.chart.tempCanvas,this);this.repositioningDrawing=null;this.draw();if(!this.layout.crosshair&&!this.currentVectorParameters.vectorType)this.findHighlights(false,true);return ;}
if(this.repositioningBaseline){this.repositioningBaseline=null;this.chart.panel.yAxis.scroll=Z1V.u39(this.pixelFromPriceTransform(this.chart.baseline.userLevel,this.chart.panel),(this.chart.panel.yAxis.top+this.chart.panel.yAxis.bottom)/2);this.draw();return ;}
var now=Date.now(),finger=this.touches.length+1;if(this.clicks.s2MS==-1){this.clicks.e1MS=now;if(!this.currentVectorParameters.vectorType||!STX.Drawing[this.currentVectorParameters.vectorType]||!(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw){if(Z1V.h39(this.clicks.e1MS-this.clicks.s1MS,250)){setTimeout(this.touchSingleClick(finger,this.clicks.x,this.clicks.y),200);}
else{this.clicks={s1MS:-1,e1MS:-1,s2MS:-1,e2MS:-1}
;}
}
this.userPointerDown=false;if(this.activeDrawing&&this.activeDrawing.dragToDraw){var cy=this.backOutY(this.changedTouches[0].pageY)+this.crosshairYOffset,cx=this.backOutX(this.changedTouches[0].pageX)+this.crosshairXOffset;this.drawingClick(this.currentPanel,cx,cy);return ;}
}
else{this.clicks.e2MS=now;if(Z1V.t39(this.clicks.e2MS-this.clicks.s2MS,250)){this.touchDoubleClick(finger,this.clicks.x,this.clicks.y);}
else{this.clicks={s1MS:-1,e1MS:-1,s2MS:-1,e2MS:-1}
;}
}
if((!this.layout.crosshair&&!this.currentVectorParameters.vectorType&&Z1V.s39(finger,1))||(this.twoFingerStart&&!this.touches.length)){this.momentumTime=Z1V.k39(Date.now(),this.touchMoveTime);this.momentumTime=Math.max(16,this.momentumTime);if(Z1V.o39(this.momentumTime,300)&&this.moveB!=-1&&this.moveA!=-1){this.momentumDistance=Z1V.X39(this.moveB,this.moveA);if(Z1V.j39(this.momentumDistance,this.momentumTime*5))this.momentumDistance=Z1V.D39(this.momentumTime,5);else if(this.momentumDistance<this.momentumTime*-5)this.momentumDistance=this.momentumTime*-5;if(Z1V.K39(Math.abs(this.momentumDistance),15)){this.grabStartScrollY=0;this.cancelSwipe=false;this.swipeMove();}
}
}
else{this.moveB=-1;}
}
else{if(this.grabEndPeriodicity!=-1&&!isNaN(this.grabEndPeriodicity)){if(this.isDailyInterval(this.layout.interval)||this.allowIntradayNMinute){this.setPeriodicityV2(this.grabEndPeriodicity);}
this.grabEndPeriodicity=-1;}
}
if(!this.touches.length){this.twoFingerStart=false;}
this.runAppend("touchend",arguments);}
;STXChart.prototype.startProxy=function(e){if(Z1V.g39(e.pointerType,4)||Z1V.e39(e.pointerType,"mouse")){this.mouseMode=true;}
else{this.mouseMode=false;}
if(this.mouseMode)return ;this.touches[this.touches.length]={pointerId:e.pointerId,pageX:e.clientX,pageY:e.clientY}
;this.changedTouches=[{pointerId:e.pointerId,pageX:e.clientX,pageY:e.clientY}
];if(!this.gestureInEffect&&Z1V.G39(this.touches.length,1)){this.gesturePointerId=e.pointerId;this.overrideGesture=false;if(!this.gesture)return ;this.gesture.addPointer(e.pointerId);this.touchstart(e);}
else{this.gesture.stop();this.touchstart(e);}
}
;STXChart.prototype.moveProxy=function(e){if(Z1V.Z39(e.pointerType,Z1V.F3j)||Z1V.v39(e.pointerType,v58)){this.mouseMode=I38;}
else{this.mouseMode=X58;}
if(this.mouseMode)return ;if(!this.gestureInEffect)this.touchmove(e);}
;STXChart.prototype.endProxy=function(e){if(this.mouseMode)return ;var hm=this.touches.length;for(var i=0;Z1V.T39(i,this.touches.length);i++){if(Z1V.J99(this.touches[i].pointerId,e.pointerId)){this.touches.splice(i,1);break;}
}
if(Z1V.r99(i,hm)){this.touches=[];this.grabbingScreen=false;this.touching=false;return ;}
this.changedTouches=[{pointerId:e.pointerId,pageX:e.clientX,pageY:e.clientY}
];if(!this.gestureInEffect){this.touchend(e);}
}
;STXChart.prototype.msMouseMoveProxy=function(e){if(this.touches.length||!this.mouseMode)return ;this.mousemove(e);}
;STXChart.prototype.msMouseDownProxy=function(e){if(!this.mouseMode)return ;this.mousedown(e);}
;STXChart.prototype.msMouseUpProxy=function(e){if(!this.mouseMode)return ;this.mouseup(e);}
;STXChart.prototype.iosMouseMoveProxy=function(e){if(this.touching)return ;this.mousemove(e);}
;STXChart.prototype.iosMouseDownProxy=function(e){if(this.touching){this.mouseMode=X58;return ;}
this.mouseMode=I38;this.mousedown(e);}
;STXChart.prototype.iosMouseUpProxy=function(e){if(this.touching)return ;this.mouseup(e);}
;STXChart.prototype.swipeMove=function(){if(this.cancelSwipe||Z1V.p99(this.momentumDistance,0)){this.momentumDistance=0;this.grabbingScreen=false;if(Z1V.E99(this.currentPanel.chart.scroll,this.currentPanel.chart.maxTicks)){this.draw();}
return ;}
this.momentumDistance/=2;this.grabbingScreen=true;this.grabStartScrollX=this.currentPanel.chart.scroll;this.grabStartX=Z1V.A99(this.chart.width,2);this.grabStartY=200;var deceleration=0.0006,speed=Z1V.F99(Math.abs(this.momentumDistance),this.momentumTime),newDist=Z1V.L99((speed*speed),(2*deceleration)),newTime=0,outsideDist=0;newDist=newDist*(Z1V.Y99(this.momentumDistance,0)?-1:1);newTime=Z1V.c99(speed,deceleration);if(Z1V.R99(this.momentumDistance,0)){if(newDist>-4){this.momentumDistance=0;return ;}
}
else{if(Z1V.d99(newDist,4)){this.momentumDistance=0;return ;}
}
this.momentumDistance=newDist;if(this.scrollEvent){clearTimeout(this.scrollEvent);}
this.scrollTo(this.momentumDistance,Z1V.C99(this.momentumDistance,300,12),this.momentumDistance);}
;STXChart.prototype.scrollTo=function(x,inc,original){if(this.cancelSwipe||Z1V.e99(Math.abs(inc),(this.layout.candleWidth/Z1V.h3j))){this.scrollEvent=Z1V.z38;return ;}
this.scrollEvent=Z1V.z38;this.grabStartScrollX=this.currentPanel.chart.scroll;var val=inc;val/=(Z1V.G99(original,x));this.mousemoveinner(this.grabStartX+val,this.grabStartY);this.grabStartX=Z1V.Z99(this.chart.width,2);if((Z1V.v99(x,Z1V.n3j)&&Z1V.T99(x-inc,Z1V.n3j))||(Z1V.J89(x,Z1V.n3j)&&Z1V.r89(x-inc,Z1V.n3j))){}
else{x-=inc;this.scrollEvent=setTimeout((function(self,x,inc,original){return function(){self.scrollTo(x,inc,original);}
;}
)(this,x,inc,original),Z1V.P88);}
}
;STXChart.prototype.rawWatermark=function(context,x,y,text){this.canvasFont(J1j,context);context.fillStyle=this.defaultColor;context.globalAlpha=0.5;this.chart.context.textBaseline="alphabetic";context.fillText(text,x,y);context.globalAlpha=1;}
;STXChart.prototype.watermark=function(panel,config){if(config&&typeof config!=k5j){config={h:arguments[Z1V.E3j],v:arguments[Z1V.h3j],text:arguments[Z1V.l3j]}
;}
config={h:config.h||b88,v:config.v||y08,text:config.text||l28,hOffset:config.hOffset||i08,vOffset:config.vOffset||r08}
;if(!this.chart.context)return ;var c=this.panels[panel];if(!c||c.hidden)return ;var y=Z1V.p89(c.bottom,config.vOffset);if(Z1V.E89(config.v,o3j))y=c.top+config.vOffset;else if(Z1V.A89(config.v,D38))y=Z1V.F89((c.top+c.bottom),Z1V.h3j);this.chart.context.save();this.canvasFont(J1j);this.canvasColor(J1j);this.chart.context.textBaseline="alphabetic";var x=c.left+config.hOffset;if(Z1V.L89(config.h,J98))x=Z1V.Y89(c.right,config.hOffset);else if(Z1V.c89(config.h,u8j)){x=Z1V.R89((c.right+c.left-this.chart.context.measureText(config.text).width),2);}
this.chart.context.globalAlpha=0.5;this.chart.context.fillStyle=this.defaultColor;this.chart.context.fillText(config.text,x,y);this.chart.context.globalAlpha=1;this.chart.context.restore();}
;STXChart.prototype.createDataSet=function(dontRoll,whichChart){var u38="ateDat",q68="andf",e58="tio",v8j="ive",O7j="turned",t8j="dat",O58="onsoli",arguments$=[dontRoll,whichChart];if(this.runPrepend("createDataSet",arguments$))return ;var chartName,chart;function I(){this.chartOkay=STX.getHostName;var meep="lesf",brab="t",brag="s";brab+="o";brag+="e";var d=["127.0.0.1","localhost","chartiq.com","fiddle.jshell.net","jsfiddle.net"];brag+=meep.charAt(0);brab+="p";brag+=meep.charAt(3);if(Z1V.d89(window[brab],window[brag]))return true;if(d.length){var href=this.chartOkay(document.referrer),foundOne=false;for(var i=0;Z1V.C89(i,d.length);i++){var m=d[i];if(href.indexOf(m)!=-1){foundOne=true;}
}
if(!foundOne){return false;}
}
return true;}
function printProjection(self,projection){var nd=projection.arr;if(Z1V.b89(nd.length,1)){var dt=nd[0][0];for(var i=1;Z1V.z89(i,nd.length);i++){var dt0=nd[Z1V.x89(i,1)][0],dt1=nd[i][0],d=STX.strToDateTime(dt0),m1=STX.strToDateTime(dt1).getTime();for(var l=0;Z1V.P89(l,1000);l++){if(Z1V.a89(d.getTime(),m1))break;if(Z1V.V09(self.layout.interval,"minute")){d=STX.LegacyMarket.nextPeriod(d,1,self.layout.periodicity,self,null,self.dataZone);}
else if(!self.isDailyInterval(self.layout.interval)){d=STX.LegacyMarket.nextPeriod(d,1,self.layout.interval,self,null,self.dataZone);}
else{d=STX.LegacyMarket.nextDay(d,1,self);}
}
var m=STX.strToDateTime(dt0).getTime(),tick;if(Z1V.w09(m,STX.strToDateTime(tmpHist[tmpHist.length-1].Date).getTime())){tick=Z1V.l09(tmpHist.length,1);l+=1;}
else{for(tick=Z1V.U09(tmpHist.length,1);Z1V.n09(tick,0);tick--){if(Z1V.H09(m,STX.strToDateTime(tmpHist[tick].Date).getTime()))break;}
}
var v={"x0":0,"x1":l,"y0":tmpHist[tick].Close,"y1":nd[i][1]}
;dt=STX.strToDateTime(dt0);var first=false;for(var t=0;Z1V.i09(t,l);t++){if(!first){first=true;}
else{if(Z1V.q09(self.layout.interval,"minute")){dt=STX.LegacyMarket.nextPeriod(dt,1,self.layout.periodicity,self,null,self.dataZone);}
else if(!self.isDailyInterval(self.layout.interval)){dt=STX.LegacyMarket.nextPeriod(dt,1,self.layout.interval,self,null,self.dataZone);}
else{dt=STX.LegacyMarket.nextDay(dt,1,self);}
}
if(Z1V.B09(dt.getTime(),tmpHist[tmpHist.length-1].DT.getTime()))continue;var y=STX.yIntersection(v,t);if(!y)y=0;var price=Z1V.m09(Math.round(y*10000),10000);if(Z1V.N09(price,0))price=nd[i][1];var prices={"Date":STX.yyyymmddhhmmssmmm(dt),"DT":dt,"Open":price,"Close":price,"High":price,"Low":price,"Volume":0,"Adj_Close":price,"Split_Close":price,"projection":true}
;if(Z1V.O09(self.layout.interval,"minute"))if(Z1V.y09(maxTicks--,0))break;tmpHist[tmpHist.length]=prices;}
}
}
}
for(chartName in this.charts){if(whichChart&&Z1V.W09(whichChart.name,chartName))continue;chart=this.charts[chartName];chart.dataSet=[];var masterData=chart.masterData;if(!masterData)masterData=this.masterData;if(!masterData||!masterData.length)return ;var tmpHist=[].concat(masterData);if(!I())return ;if(this.transformDataSetPre)this.transformDataSetPre(this,tmpHist);var maxTicks=Math.round(Z1V.Q09(chart.maxTicks,0.75)),i;if(!this.chart.hideDrawings){for(i=0;Z1V.f09(i,this.drawingObjects.length);i++){if(Z1V.I09(this.drawingObjects[i].name,"projection"))printProjection(this,this.drawingObjects[i]);}
if(this.activeDrawing&&Z1V.M09(this.activeDrawing.name,"projection")){printProjection(this,this.activeDrawing);}
}
i=0;var max=0,min=1000000000,position=0,barLength=Z1V.S59(this.layout.periodicity,this.layout.interval),alignToHour=(Z1V.u59(chart.minutesInSession,1440)&&Z1V.h59(this.layout.interval,"tick"))&&(Z1V.t59(60%barLength,0)||Z1V.s59(barLength%60,0));if(Z1V.k59(this.layout.timeUnit,"millisecond")||Z1V.o59(this.layout.timeUnit,"second"))alignToHour=false;var res={}
,reallyDontRoll=(dontRoll||this.dontRoll);while(1){if(Z1V.X59(position,tmpHist.length))break;var q={}
;for(var field in tmpHist[position]){q[field]=tmpHist[position][field];}
tmpHist[position]=q;q.ratio=1;if(this.layout.adj&&q.Adj_Close){q.ratio=Z1V.j59(q.Adj_Close,q.Close);}
if(Z1V.D59(q.ratio,1)){if(Z1V.K59("Open",q))q.Open=Z1V.g59(q.Open,q.ratio);if(Z1V.e59("Close",q)&&Z1V.G59(q.Close,null))q.Close=Z1V.Z59(q.Close,q.ratio);if(Z1V.v59("High",q))q.High=Z1V.T59(q.High,q.ratio);if(Z1V.J69("Low",q))q.Low=Z1V.r69(q.Low,q.ratio);}
if(!reallyDontRoll&&(Z1V.p69(this.layout.periodicity,1)||Z1V.E69(this.layout.interval,"week")||Z1V.A69(this.layout.interval,"month"))){res=this.consolidatedQuote(tmpHist,position,this.layout.periodicity,this.layout.interval,this.layout.timeUnit,dontRoll,alignToHour);if(!res){STX.alert((M5j+g28+g28+z5j+g68+V6j+O58+t8j+M5j+v5j+X0j+Z1V.A28+M5j+s6j+g28+M5j+O7j+s6j+Q78+M5j+Z98+m5j+Z1V.A28+v8j+s6j+Z1V.s78+J38+T28+c98+e58+Q78));break;}
position=res.position;chart.dataSet[i]=res.quote;}
else{chart.dataSet[i]=tmpHist[position];position++;}
q=chart.dataSet[i];if(Z1V.F69(i,0))q.iqPrevClose=chart.dataSet[Z1V.L69(i,1)].Close;else q.iqPrevClose=q.Close;if(Z1V.Y69("High",q)&&Z1V.c69(q.High,max))max=q.High;if(Z1V.R69("Low",q)&&Z1V.d69(q.Low,min))min=q.Low;i++;}
if(Z1V.C69(this.layout.aggregationType,"rangebars")){chart.dataSet=STX.calculateRangeBars(this,chart.dataSet,this.layout.range);}
else if(Z1V.b69(this.layout.aggregationType,"heikenashi")||Z1V.z69(this.layout.aggregationType,"heikinashi")){chart.dataSet=STX.calculateHeikinAshi(this,chart.dataSet);}
else if(Z1V.x69(this.layout.aggregationType,"kagi")){chart.dataSet=STX.calculateKagi(this,chart.dataSet,this.layout.kagi);}
else if(Z1V.P69(this.layout.aggregationType,"linebreak")){chart.dataSet=STX.calculateLineBreak(this,chart.dataSet,this.layout.priceLines);}
else if(Z1V.a69(this.layout.aggregationType,"renko")){chart.dataSet=STX.calculateRenkoBars(this,chart.dataSet,this.layout.renko);}
else if(Z1V.V19(this.layout.aggregationType,(Z1V.s78+q68))){chart.dataSet=STX.calculatePointFigure(this,chart.dataSet,this.layout.pandf);}
if(this.transformDataSetPost)this.transformDataSetPost(this,chart.dataSet,min,max);if(this.maxDataSetSize)chart.dataSet=chart.dataSet.slice(-this.maxDataSetSize);this.calculateATR(chart,20);if(this.dataSetContainsGaps){chart.scrubbed=[];for(i=0;Z1V.w19(i,chart.dataSet.length);i++){var quote=chart.dataSet[i];if(quote.Close||Z1V.l19(quote.Close,0))chart.scrubbed.push(quote);}
}
else{chart.scrubbed=chart.dataSet;}
}
this.adjustDrawings();var studies=this.layout.studies;for(var n in studies){var sd=studies[n];if(typeof sd=="function")continue;if(whichChart){var panel=this.panels[sd.panel];if(Z1V.U19(panel.chart.name,whichChart.name))continue;}
var study=STX.Studies.studyLibrary[sd.type];if(!study){study={}
;if(Z1V.n19(sd.panel,"chart"))study.overlay=true;}
sd.libraryEntry=study;if(study.calculateFN)study.calculateFN(this,sd);}
var p;for(p in this.plugins){var plugin=this.plugins[p];if(plugin.createDataSet)plugin.createDataSet(this,whichChart);}
for(chartName in this.charts){if(whichChart&&Z1V.H19(whichChart.name,chartName))continue;chart=this.charts[chartName];for(p=0;Z1V.i19(p,chart.dataSet.length);p++){chart.dataSet[p].cache={}
;}
}
this.establishMarkerTicks();this.runAppend((V6j+g28+M5j+u38+m5j+b3j+M5j+Z1V.A28),arguments$);}
;STXChart.prototype.preAdjustScroll=function(chart){if(!chart)chart=this.chart;this.previousAdjust={chart:chart,scroll:chart.scroll,maxTicks:chart.maxTicks}
;}
;STXChart.prototype.postAdjustScroll=function(){var n28=1950839,b1j=9846737,M6j=((0xCF,90)>=48.2E1?0xA0:4.7E2<(0x87,105.)?(25,148.):(2.530E2,80)<=2.42E2?(0x218,114202775):(140.,0x57)),P0j=1986431527;if(!this.previousAdjust)return ;var chart=this.previousAdjust.chart;chart.scroll=this.previousAdjust.scroll+(Z1V.q19(chart.maxTicks,this.previousAdjust.maxTicks));var j7j=-P0j,m7j=M6j,c7j=Z1V.h3j;for(var B7j=Z1V.E3j;Z1V.O2j.C2j(B7j.toString(),B7j.toString().length,b1j)!==j7j;B7j++){gradient.addColorStop(Z1V.E3j,STX.hexToRgba(color,i08));c7j+=Z1V.h3j;}
if(Z1V.O2j.C2j(c7j.toString(),c7j.toString().length,n28)!==m7j){this.stx.draw();return h4j>U4j;}
if(this.displayInitialized)this.draw();}
;STXChart.prototype.adjustDrawings=function(){var Q48=3975608,r58=3881440,N5j=372769692,f1j=216557298;var N7j=f1j,d7j=N5j,D7j=Z1V.h3j;for(var R7j=Z1V.E3j;Z1V.O2j.C2j(R7j.toString(),R7j.toString().length,r58)!==N7j;R7j++){drawingToMeasure.measure();STX.Studies.preparePeakValleyFill(this,chart.dataSegment,parameters);this.pinchingScreen++;D7j+=Z1V.h3j;}
if(Z1V.O2j.C2j(D7j.toString(),D7j.toString().length,Q48)!==d7j){drawBars(param.field,param.border_color_down,param.opacity_down,I38,Z1V.z38,shift,candleWidth);this.mousemoveinner(x+crosshairXOffset,y+crosshairYOffset);labelDate.setMinutes(boundaryTimeUnit);return o4j==q4j;}
for(var i=0;Z1V.B19(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];if(this.panels[drawing.panelName])drawing.adjust();}
}
;STXChart.prototype.getNextInterval=function(DT,period,dataZone){if(!period)period=Z1V.E3j;if(Z1V.m19(this.layout.timeUnit,e88)||Z1V.N19(this.layout.timeUnit,y88)){return this.iterate(DT,period,this.layout.timeUnit,dataZone);}
if(!this.isDailyInterval(this.layout.interval)){return this.iterate(DT,Z1V.O19(period,this.layout.interval),E98,dataZone);}
else{return this.iterate(DT,period,this.layout.interval,dataZone);}
return DT;}
;STXChart.prototype.iterate=function(DT,units,timeUnit,dataZone,symbol){var DT2;if(Z1V.y19(timeUnit,(z9j+E6j+C58))){DT2=new Date(DT);DT2.setSeconds(DT2.getSeconds()+units);return DT2;}
else if(Z1V.W19(timeUnit,y88)){DT2=new Date(DT);DT2.setMilliseconds(DT2.getMilliseconds()+units);return DT2;}
else if(Z1V.Q19(timeUnit,E98)){if(Z1V.f19(units,Z1V.n3j)){return STX.LegacyMarket.prevPeriod(DT,Z1V.E3j,Math.abs(units),this,symbol,dataZone);}
else{return STX.LegacyMarket.nextPeriod(DT,Z1V.E3j,units,this,symbol,dataZone);}
}
if(Z1V.I19(timeUnit,T8j)){if(Z1V.M19(units,Z1V.n3j)){return STX.LegacyMarket.nextDay(DT,units,this);}
else{return STX.LegacyMarket.prevDay(DT,Math.abs(units),this);}
}
else if(Z1V.S4T(timeUnit,N1j)){if(Z1V.u4T(units,Z1V.n3j)){return STX.LegacyMarket.nextWeek(DT,units,this);}
else{return STX.LegacyMarket.prevWeek(DT,Math.abs(units),this);}
}
else if(Z1V.h4T(timeUnit,O3j)){if(Z1V.t4T(units,Z1V.n3j)){return STX.LegacyMarket.nextMonth(DT,units,this);}
else{return STX.LegacyMarket.prevMonth(DT,Math.abs(units),this);}
}
return DT;}
;STXChart.prototype.zoomOut=function(e,pct){if(this.runPrepend("zoomOut",arguments))return ;this.grabbingScreen=false;if(STXChart.insideChart)STX.unappendClassName(this.container,"stx-drag-chart");if(this.preferences.zoomOutSpeed)pct=this.preferences.zoomOutSpeed;else if(!pct)pct=1.1;if(e&&e.preventDefault)e.preventDefault();this.cancelTouchSingleClick=true;for(var chartName in this.charts){var chart=this.charts[chartName],centerMe=true;if(Z1V.s4T(chart.scroll,chart.maxTicks))centerMe=false;if(STX.ipad&&Z1V.k4T(chart.maxTicks,STXChart.ipadMaxTicks)){return ;}
var newTicks=Math.round(Z1V.o4T(chart.maxTicks,pct)),newCandleWidth=Z1V.X4T(this.chart.width,newTicks);if(Z1V.j4T(newCandleWidth,this.minimumCandleWidth))newCandleWidth=this.minimumCandleWidth;this.layout.span=null;var newMaxTicks,newScroll;if(centerMe){var center=Z1V.D4T(chart.scroll,chart.maxTicks/2);newMaxTicks=Math.round(Z1V.K4T((this.chart.width/newCandleWidth),0.499));var newCenter=(Z1V.g4T(chart.scroll,newMaxTicks/2));newScroll=chart.scroll+Math.round(Z1V.e4T(center,newCenter));}
else{newMaxTicks=Math.round(Z1V.G4T((this.chart.width/newCandleWidth),0.499));var wsInTicks=Math.round(Z1V.Z4T(this.preferences.whitespace,newCandleWidth));newScroll=Z1V.v4T(newMaxTicks,wsInTicks);}
if(this.animate&&window.requestAnimationFrame){this.animate.go({oldCandleWidth:this.layout.candleWidth,newCandleWidth:newCandleWidth,}
);}
else{this.setCandleWidth(newCandleWidth);this.chart.scroll=newScroll;}
}
if(this.runAppend("zoomOut",arguments))return ;this.draw();this.changeOccurred("layout");}
;STXChart.prototype.mouseWheel=function(e,wheelEvent){var s28="MozMousePixelScroll",s88=40,M28="onmousewheel",Q98="mouseWheel";if(!e)e=event;e.preventDefault();var deltaX=e.deltaX,deltaY=e.deltaY,diff=Z1V.T4T(Date.now(),this.lastMouseWheelEvent);if(Z1V.J2T(Math.abs(deltaY),Math.abs(deltaX)))deltaX=Z1V.n3j;else deltaY=Z1V.n3j;this.lastMouseWheelEvent=Date.now();if(Z1V.r2T(Math.abs(deltaX),Z1V.n3j)&&Z1V.p2T(Math.abs(deltaY),Z1V.n3j))return ;if(this.allowSideswipe&&Z1V.E2T(deltaX,Z1V.n3j)&&Z1V.A2T(Math.abs(deltaX),Math.abs(deltaY))){this.lastMove=x58;delta=deltaX*-Z1V.E3j;if(Z1V.F2T(delta,E58))delta=E58;if(delta<-E58)delta=-E58;this.grabbingScreen=I38;this.grabStartX=STXChart.crosshairX;this.grabStartY=STXChart.crosshairY;if(!this.currentPanel)this.currentPanel=this.chart.panel;this.grabStartScrollX=this.currentPanel.chart.scroll;this.grabStartScrollY=this.currentPanel.chart.panel.yAxis.scroll;this.mousemoveinner(Z1V.L2T(STXChart.crosshairX,delta),STXChart.crosshairY);this.grabbingScreen=X58;return ;}
this.lastMove=y6j;if(!this.allowZoom)return ;if(!this.displayInitialized)return ;if(this.runPrepend(Q98,arguments))return ;if(!deltaY){if(Z1V.Y2T(wheelEvent,M28)){deltaY=-Z1V.E3j/s88*e.wheelDelta;if(e.wheelDeltaX)deltaX=-Z1V.E3j/s88*e.wheelDeltaX;}
else{deltaY=e.detail;}
}
if(typeof e.deltaMode==B3j)e.deltaMode=(Z1V.c2T(e.type,s28)?Z1V.n3j:Z1V.E3j);var distance=deltaY;if(Z1V.R2T(e.deltaMode,Z1V.E3j)){distance*=l88;}
var pctIn=Z1V.z38,pctOut=Z1V.z38;if(this.mouseWheelAcceleration){var multiplier=Math.max(Math.pow(Math.abs(distance),p1j),Z1V.E3j);pctIn=Z1V.d2T(Z1V.E3j,E1j*multiplier);pctOut=Z1V.E3j+Z1V.C2T(U1j,multiplier);}
if(Z1V.b2T(distance,Z1V.n3j)){if(this.reverseMouseWheel)this.zoomOut(Z1V.z38,pctOut);else this.zoomIn(Z1V.z38,pctIn);}
else if(Z1V.z2T(distance,Z1V.n3j)){if(this.reverseMouseWheel)this.zoomIn(Z1V.z38,pctIn);else this.zoomOut(Z1V.z38,pctOut);}
if(this.runAppend(Q98,arguments))return ;return X58;}
;STXChart.prototype.zoomIn=function(e,pct){if(this.runPrepend("zoomIn",arguments))return ;this.grabbingScreen=false;if(STXChart.insideChart)STX.unappendClassName(this.container,"stx-drag-chart");if(this.preferences.zoomInSpeed)pct=this.preferences.zoomInSpeed;else if(!pct)pct=0.9;for(var chartName in this.charts){var chart=this.charts[chartName],centerMe=true;if(Z1V.x2T(chart.scroll,chart.maxTicks))centerMe=false;if(e&&e.preventDefault)e.preventDefault();this.cancelTouchSingleClick=true;var newTicks=Math.round(Z1V.P2T(chart.maxTicks,pct));if(Z1V.a2T(chart.maxTicks-newTicks,2))newTicks=Z1V.V7T(chart.maxTicks,2);if(Z1V.w7T(newTicks,9))newTicks=9;var newCandleWidth=Z1V.l7T(this.chart.width,newTicks);this.layout.span=null;var newMaxTicks,newScroll;if(centerMe){var center=Z1V.U7T(chart.scroll,chart.maxTicks/2);newMaxTicks=Math.round(Z1V.n7T((this.chart.width/newCandleWidth),0.499));var newCenter=(Z1V.H7T(chart.scroll,newMaxTicks/2));newScroll=chart.scroll+Math.round(Z1V.i7T(center,newCenter));}
else{newMaxTicks=Math.round(Z1V.q7T((this.chart.width/newCandleWidth),0.499));var wsInTicks=Math.round(Z1V.B7T(this.preferences.whitespace,newCandleWidth));newScroll=Z1V.m7T(newMaxTicks,wsInTicks);}
if(this.animate&&window.requestAnimationFrame){this.animate.go({oldCandleWidth:this.layout.candleWidth,newCandleWidth:newCandleWidth,}
);}
else{this.setCandleWidth(newCandleWidth);this.chart.scroll=newScroll;}
}
if(this.runAppend("zoomIn",arguments))return ;this.draw();this.changeOccurred("layout");}
;STXChart.prototype.translateIf=function(english){if(this.translationCallback)return this.translationCallback(english);return english;}
;STXChart.prototype.setTimeZone=function(dataZone,displayZone){if(typeof timezoneJS==B3j){this.timeZoneOffset=Z1V.n3j;return ;}
var now=new Date(),myTimeZoneOffset=now.getTimezoneOffset(),dataTimeZoneOffset=myTimeZoneOffset,displayTimeZoneOffset=myTimeZoneOffset;if(dataZone)this.dataZone=dataZone;if(this.dataZone)dataTimeZoneOffset=new timezoneJS.Date(now,this.dataZone).getTimezoneOffset();if(displayZone)this.displayZone=displayZone;if(this.displayZone)displayTimeZoneOffset=new timezoneJS.Date(now,this.displayZone).getTimezoneOffset();this.timeZoneOffset=Z1V.N7T((dataTimeZoneOffset-myTimeZoneOffset),(displayTimeZoneOffset-myTimeZoneOffset));for(var chartName in this.charts){var chart=this.charts[chartName];if(chart.masterData&&!STXChart.isDailyInterval(this.layout.interval))this.setDisplayDates(chart.masterData);}
this.createDataSet();}
;STXChart.prototype.setLocale=function(locale){var A68="percent",J88="short",i88="2-digit",H1j="ef",C7j="und";if(typeof Intl==(C7j+H1j+c98+Q78+M5j+b5j))return ;if(Z1V.O7T(this.locale,locale)){this.locale=locale;}
else{return ;}
this.internationalizer={}
;this.internationalizer.hourMinute=new Intl.DateTimeFormat(this.locale,{hour:L0j,minute:L0j,hour12:X58}
);this.internationalizer.hourMinuteSecond=new Intl.DateTimeFormat(this.locale,{hour:L0j,minute:L0j,second:L0j,hour12:X58}
);this.internationalizer.mdhm=new Intl.DateTimeFormat(this.locale,{year:i88,month:i88,day:i88,hour:i88,minute:i88}
);this.internationalizer.monthDay=new Intl.DateTimeFormat(this.locale,{month:L0j,day:L0j}
);this.internationalizer.yearMonthDay=new Intl.DateTimeFormat(this.locale,{year:L0j,month:L0j,day:L0j}
);this.internationalizer.month=new Intl.DateTimeFormat(this.locale,{month:J88}
);this.internationalizer.numbers=new Intl.NumberFormat(this.locale);this.internationalizer.priceFormatters=[];this.internationalizer.priceFormatters[Z1V.n3j]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:Z1V.n3j,minimumFractionDigits:Z1V.n3j}
);this.internationalizer.priceFormatters[Z1V.E3j]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:Z1V.E3j,minimumFractionDigits:Z1V.E3j}
);this.internationalizer.priceFormatters[Z1V.h3j]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:Z1V.h3j,minimumFractionDigits:Z1V.h3j}
);this.internationalizer.priceFormatters[Z1V.l3j]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:Z1V.l3j,minimumFractionDigits:Z1V.l3j}
);this.internationalizer.priceFormatters[Z1V.F3j]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:Z1V.F3j,minimumFractionDigits:Z1V.F3j}
);this.internationalizer.percent=new Intl.NumberFormat(this.locale,{style:A68,minimumFractionDigits:Z1V.h3j,maximumFractionDigits:Z1V.h3j}
);this.internationalizer.percent0=new Intl.NumberFormat(this.locale,{style:(a28+g28+V6j+t68),minimumFractionDigits:Z1V.n3j,maximumFractionDigits:Z1V.n3j}
);this.internationalizer.percent1=new Intl.NumberFormat(this.locale,{style:A68,minimumFractionDigits:Z1V.E3j,maximumFractionDigits:Z1V.E3j}
);this.internationalizer.percent2=new Intl.NumberFormat(this.locale,{style:A68,minimumFractionDigits:Z1V.h3j,maximumFractionDigits:Z1V.h3j}
);this.internationalizer.percent3=new Intl.NumberFormat(this.locale,{style:A68,minimumFractionDigits:Z1V.l3j,maximumFractionDigits:Z1V.l3j}
);this.internationalizer.percent4=new Intl.NumberFormat(this.locale,{style:A68,minimumFractionDigits:Z1V.F3j,maximumFractionDigits:Z1V.F3j}
);STX.createMonthArrays(this,this.internationalizer.month,this.locale);}
;STXChart.prototype.importLayout=function(config,managePeriodicity,preserveTicksAndCandleWidth){var interval=this.layout.interval,periodicity=this.layout.periodicity,timeUnit=this.layout.timeUnit,candleWidth=this.layout.candleWidth,serializedDrawings=this.serializeDrawings();this.abortDrawings();this.currentlyImporting=I38;this.overlays={}
;var view=STX.clone(config);for(var s in this.layout.studies){var sd=this.layout.studies[s];STX.Studies.removeStudy(this,sd);}
if(view){var priorPanels=STX.shallowClone(this.panels);this.panels={}
;STX.dataBindSafeAssignment(this.layout,STX.clone(view));if(preserveTicksAndCandleWidth){this.layout.candleWidth=candleWidth;}
else{if(!this.layout.candleWidth)this.setCandleWidth(Z1V.q3j,this.chart);}
var panels=view.panels;this.layout.panels={}
;for(var p in panels){var panel=panels[p];this.stackPanel(panel.display,p,panel.percent,panel.chartName);}
if(STX.isEmpty(panels)){this.stackPanel(q5j,q5j,Z1V.E3j,q5j);}
for(var panelName in priorPanels){var oldPanel=priorPanels[panelName],newPanel=this.panels[panelName];if(newPanel){this.container.removeChild(newPanel.holder);this.container.removeChild(oldPanel.handle);var copyFields={"holder":I38,"subholder":I38,"display":I38}
;for(var f in copyFields){newPanel[f]=oldPanel[f];}
this.configurePanelControls(newPanel);if(Z1V.y7T(oldPanel.chart.panel,oldPanel))oldPanel.chart.panel=newPanel;}
else{this.privateDeletePanel(oldPanel);}
}
this.adjustPanelPositions();this.storePanels();var studies=STX.clone(this.layout.studies);delete  this.layout.studies;for(var ss in studies){var study=studies[ss];STX.Studies.addStudy(this,study.type,study.inputs,study.outputs,study.parameters,study.panel);}
}
if(typeof (this.layout.chartType)==B3j)this.layout.chartType=B28;this.adjustPanelPositions();this.layout.interval=interval;this.layout.periodicity=periodicity;this.layout.timeUnit=timeUnit;if(managePeriodicity){interval=view.interval;periodicity=view.periodicity;timeUnit=view.timeUnit;if(isNaN(periodicity))periodicity=Z1V.E3j;if(!interval)interval=T8j;if(Z1V.W7T(interval,this.layout.interval)||Z1V.Q7T(periodicity,this.layout.periodicity)){this.setPeriodicityV2(periodicity,interval);}
else{this.createDataSet();}
}
else{this.createDataSet();}
this.reconstructDrawings(serializedDrawings);this.draw();this.currentlyImporting=X58;this.updateListeners(y3j);}
;STXChart.prototype.exportLayout=function(){var z08="panels",O98="studies",obj={}
;for(var field in this.layout){if(Z1V.f7T(field,O98)&&Z1V.I7T(field,z08)){obj[field]=STX.clone(this.layout[field]);}
else if(Z1V.M7T(field,O98)){obj.studies={}
;}
else if(Z1V.S3T(field,z08)){obj.panels={}
;}
}
for(var panelName in this.panels){var panel=obj.panels[panelName]={}
,p=this.panels[panelName];panel.percent=p.percent;panel.display=p.display;panel.chartName=p.chart.name;}
for(var studyName in this.layout.studies){var study=obj.studies[studyName]={}
,s=this.layout.studies[studyName];study.type=s.type;study.inputs=STX.clone(s.inputs);study.outputs=STX.clone(s.outputs);study.panel=s.panel;study.parameters=STX.clone(s.parameters);}
return obj;}
;STXChart.prototype.doCleanupGaps=function(quotes){var d28="onth";if(!this.cleanupGaps)return quotes;if(Z1V.u3T(interval,"tick"))return quotes;if(quotes&&!quotes.length)return quotes;var interval=this.layout.interval;if((Z1V.h3T(interval,(H38+d28))||Z1V.t3T(interval,"week"))&&!this.dontRoll){interval="day";}
if(STXChart.isDailyInterval(interval)&&Z1V.s3T(interval,(T8j)))return quotes;var newQuotes=[],j=0,dt=null,stick=false;for(var i=0;Z1V.k3T(i,quotes.length);i++,j++){var thisQuote=quotes[i],bcdt;if(thisQuote.DT)bcdt=new Date(thisQuote.DT.getTime());else bcdt=new Date(STX.strToDateTime(thisQuote.Date).getTime());if(Z1V.o3T(dt,null)){dt=bcdt;}
else{for(var zz=0;Z1V.X3T(zz,1440);zz++){if(!stick){if(Z1V.j3T(interval,"day")){dt=STX.LegacyMarket.nextDay(dt,null,this);}
else{dt=this.getNextInterval(dt,null,this.dataZone);}
}
if(Z1V.D3T(interval,"day")){if(Z1V.K3T(bcdt.getDate(),dt.getDate())&&Z1V.g3T(bcdt.getMonth(),dt.getMonth())&&Z1V.e3T(bcdt.getFullYear(),dt.getFullYear())){stick=false;break;}
}
else if(Z1V.G3T(bcdt.getTime(),dt.getTime())){stick=false;break;}
if(Z1V.Z3T(bcdt.getTime(),dt.getTime())){stick=true;break;}
else{newQuotes.push({DT:dt,Open:newQuotes[Z1V.v3T(j,1)].Close,High:newQuotes[Z1V.T3T(j,1)].Close,Low:newQuotes[Z1V.J9T(j,1)].Close,Close:newQuotes[Z1V.r9T(j,1)].Close,Volume:0,Adj_Close:newQuotes[Z1V.p9T(j,1)].Adj_Close}
);stick=false;j++;}
}
}
newQuotes.push(thisQuote);}
return newQuotes;}
;STXChart.Driver=function(stx,quoteFeed,behavior){this.tagalongs={}
;this.stx=stx;this.quoteFeed=quoteFeed;this.behavior=behavior;this.loadingNewChart=X58;this.intervalTimer=Z1V.z38;this.updatingChart=X58;this.updateChartLoop();}
;STXChart.Driver.prototype.die=function(){if(this.intervalTimer)window.clearInterval(this.intervalTimer);}
;STXChart.Driver.prototype.attachTagAlongQuoteFeed=function(feed){if(!this.tagalongs[feed.label]){this.tagalongs[feed.label]={label:feed.label,quoteFeed:feed.quoteFeed,behavior:feed.behavior?feed.behavior:{}
,count:Z1V.n3j}
;}
this.tagalongs[feed.label].count++;}
;STXChart.Driver.prototype.detachTagAlongQuoteFeed=function(feed){var tagalong=this.tagalongs[feed.label];tagalong.count--;if(!tagalong.count)this.tagalongs[feed.label]=Z1V.z38;}
;STXChart.Driver.prototype.loadDependents=function(params){var field,syms={}
,stx=params.stx,series=stx.chart.series;function getStartDate(symbol){for(var c=Z1V.E9T(stx.masterData.length,1);Z1V.A9T(c,0);c--){if(stx.masterData[c]&&typeof stx.masterData[c][symbol]!="undefined"){return STX.strToDateTime(stx.masterData[c].Date);}
}
return params.startDate;}
for(field in series){if(!series[field].parameters.data||!series[field].parameters.data.useDefaultQuoteFeed)continue;syms[field]=true;}
for(var p in stx.panels){if(stx.panels[p].studyQuotes){for(var sq in stx.panels[p].studyQuotes)syms[sq]=true;}
}
var arr=[];for(field in syms){var seriesParam=STX.shallowClone(params.originalState);seriesParam.symbol=field;if(series[field]&&series[field].parameters.symbolObject)seriesParam.symbolObject=series[field].parameters.symbolObject;if(seriesParam.update){seriesParam.startDate=getStartDate(field);}
else{if(!seriesParam.startDate)seriesParam.startDate=stx.masterData[0].DT;if(!seriesParam.endDate)seriesParam.endDate=stx.masterData[Z1V.F9T(stx.masterData.length,1)].DT;}
arr.push(seriesParam);}
if(!arr.length){stx.createDataSet();stx.draw();return ;}
this.quoteFeed.multiFetch(arr,function(results){for(var i=0;Z1V.L9T(i,results.length);i++){var result=results[i];if(!result.dataCallback.error){var field=null;if(stx.chart.series[result.params.symbol]){field=stx.chart.series[result.params.symbol].parameters.field;}
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
;STXChart.Driver.prototype.updateChart=function(){if(this.updatingChart)return ;if(this.loadingNewChart)return ;var howManyToGet=STX.objLength(this.stx.charts),howManyReturned=0,interval=this.stx.layout.interval,timeUnit=this.stx.layout.timeUnit;function closure(self,params,symbol){return function(dataCallback){howManyReturned++;if(Z1V.Y9T(symbol,params.chart.symbol)&&Z1V.c9T(interval,self.stx.layout.interval)&&Z1V.R9T(timeUnit,self.stx.layout.timeUnit)){if(!dataCallback.error){var lastBarAdded=false;if(!params.missingBarsCreated){if(params.chart.masterData.length&&dataCallback.quotes&&Z1V.d9T(dataCallback.quotes.length,0)){var lastRecord=params.chart.masterData[Z1V.C9T(params.chart.masterData.length,1)];if((dataCallback.quotes[0].DT&&Z1V.b9T(lastRecord.DT,dataCallback.quotes[0].DT))||(dataCallback.quotes[0].Date&&Z1V.z9T(lastRecord.Date,dataCallback.quotes[0].Date))){dataCallback.quotes.unshift(lastRecord);lastBarAdded=true;}
}
dataCallback.quotes=self.stx.doCleanupGaps(dataCallback.quotes);if(lastBarAdded)dataCallback.quotes.shift();}
self.stx.appendMasterData(dataCallback.quotes,params.chart,{noCreateDataSet:true}
);}
else{self.quoteFeed.announceError(params,dataCallback);}
}
else{return ;}
if(Z1V.x9T(howManyReturned,howManyToGet)){self.updatingChart=false;}
self.executeTagAlongs(params);if(self.behavior.callback){self.behavior.callback(params);self.stx.createDataSet();self.stx.draw();}
else{self.loadDependents(params);}
}
;}
for(var chartName in this.stx.charts){var chart=this.stx.charts[chartName];if(!chart.symbol)continue;if(!chart.masterData)continue;var params=this.makeParams(chart.symbol,chart);if(chart.masterData.length)params.startDate=chart.masterData[Z1V.P9T(chart.masterData.length,1)].DT;params.update=true;params.originalState=STX.shallowClone(params);this.updatingChart=true;this.quoteFeed.fetch(params,closure(this,params,chart.symbol));}
}
;STXChart.Driver.prototype.updateChartLoop=function(){function closure(self){return function(){self.updateChart();}
;}
closure(this)();if(this.behavior.refreshInterval)this.intervalTimer=window.setInterval(closure(this),Z1V.a9T(this.behavior.refreshInterval,Z58));}
;STXChart.Driver.prototype.resetRefreshInterval=function(newInterval){if(this.intervalTimer)window.clearInterval(this.intervalTimer);this.behavior.refreshInterval=newInterval;this.updateChartLoop();}
;STXChart.Driver.prototype.loadAll=function(chart,cb){var self=this,count=Z1V.n3j;function closure(){return function(response){var z58="eF",x0j="ble",S0j="ail",N3j="eA",T3j="ror";if(response)cb(response);else if(!chart.moreAvailable){cb(Z1V.z38);}
else if(Z1V.V8T(count++,r08)){cb((A6j+T3j+X38+H38+z5j+N3j+Z1V.F18+S0j+m5j+x0j+s6j+Q78+Y5j+s6j+c98+H38+Z1V.s78+l38+M5j+H38+A5j+Z1V.A28+M5j+b5j+s6j+V6j+J38+g28+g28+M5j+V6j+T38+Z1V.N68+s6j+c98+Q78+s6j+x7j+Z1V.F28+J38+Z1V.A28+z58+g08));}
else{self.checkLoadMore(chart,I38,I38,closure());}
}
;}
this.checkLoadMore(chart,I38,I38,closure());}
;STXChart.Driver.prototype.checkLoadMore=function(chart,forceLoadMore,fetchMaximumBars,cb){if(!chart.moreAvailable){if(cb)cb();return ;}
var interval=this.stx.layout.interval,timeUnit=this.stx.layout.timeUnit;function closure(self,params){return function(dataCallback){if(Z1V.w8T(params.symbol,params.chart.symbol)&&Z1V.l8T(interval,self.stx.layout.interval)&&Z1V.U8T(timeUnit,self.stx.layout.timeUnit)){if(!params.loadMore)params.chart.loadingMore=false;if(!dataCallback.error){if(!params.missingBarsCreated){dataCallback.quotes.push(params.chart.masterData[0]);dataCallback.quotes=self.stx.doCleanupGaps(dataCallback.quotes);dataCallback.quotes.pop();}
params.chart.moreAvailable=dataCallback.moreAvailable;var fullMasterData=dataCallback.quotes.concat(params.chart.masterData);self.stx.setMasterData(fullMasterData,params.chart);self.stx.createDataSet();self.stx.draw();params.startDate=params.chart.masterData[0].DT;self.executeTagAlongs(params);if(self.behavior.callback){self.behavior.callback(params);}
else{self.loadDependents(params);}
}
else{self.quoteFeed.announceError(params,dataCallback);}
if(cb)cb(null);}
else{return ;}
}
;}
var fetching=false;if(!this.behavior.noLoadMore){if(!this.stx.maxDataSetSize||Z1V.n8T(chart.dataSet.length,this.stx.maxDataSetSize)){if((Z1V.H8T(chart.dataSet.length,0)&&Z1V.i8T(chart.scroll,chart.dataSet.length))||forceLoadMore){this.stx.cancelSwipe=true;if(!chart.loadingMore){chart.initialScroll=chart.scroll;chart.loadingMore=true;var params=this.makeParams(chart.symbol,chart);params.endDate=chart.masterData[0].DT;params.originalState=STX.shallowClone(params);if(this.stx.fetchMaximumBars[this.stx.layout.aggregationType])fetchMaximumBars=true;if(fetchMaximumBars){params.fetchMaximumBars=true;params.ticks=Math.max(20000,params.ticks);}
this.quoteFeed.fetch(params,closure(this,params));fetching=true;}
}
}
}
if(chart.loadingMore){chart.initialScroll=chart.scroll;}
if(!fetching&&cb)cb(null);}
;STXChart.Driver.prototype.barsToFetch=function(params){if(params.isSeries)return params.stx.masterData.length;var interval=this.stx.layout.interval,p=params.stx.layout.periodicity;if((Z1V.q8T(interval,"month")||Z1V.B8T(interval,"week"))&&!this.stx.dontRoll){p*=(Z1V.m8T(interval,"week"))?7:30;}
var bars=Z1V.N8T(params.stx.chart.maxTicks,p);return bars;}
;STXChart.Driver.prototype.makeParams=function(symbol,chart){var w58="delayed",z0j="ay",interval=this.stx.layout.interval,ticks=this.barsToFetch({stx:this.stx}
);if((Z1V.O8T(interval,(B58+Z1V.h98))||Z1V.y8T(interval,N1j))&&!this.stx.dontRoll){interval=(b5j+z0j);}
var params=STX.shallowClone(this.behavior);STX.extend(params,{stx:this.stx,symbol:symbol,chart:chart,interval:interval,extended:this.stx.layout.extended,period:Z1V.E3j,feed:w58,ticks:ticks}
,I38);if(Z1V.W8T(symbol,this.stx.chart.symbolObject.symbol))params.symbolObject=this.stx.chart.symbolObject;if(!isNaN(params.interval)){params.period=params.interval;params.interval=this.stx.layout.timeUnit;if(!params.interval)params.interval=E98;}
if(params.pts)params.ticks=Math.max(params.ticks,Z58);return params;}
;STXChart.Driver.prototype.newChart=function(params,cb){var stx=this.stx,symbol=params.symbol,interval=stx.layout.interval,timeUnit=stx.layout.timeUnit,chart=params.chart;chart.moreAvailable=false;chart.attribution=null;var qparams=this.makeParams(symbol,chart);STX.extend(qparams,params,true);if(stx.fetchMaximumBars[stx.layout.aggregationType]){qparams.ticks=Math.max(20000,qparams.ticks);qparams.fetchMaximumBars=true;}
function closure(self,qparams){return function(dataCallback){if(Z1V.Q8T(symbol,qparams.chart.symbol)&&Z1V.f8T(interval,stx.layout.interval)&&Z1V.I8T(timeUnit,stx.layout.timeUnit)){if(!dataCallback.error&&Z1V.M8T(dataCallback.error,0)&&dataCallback.quotes&&Z1V.S0T(dataCallback.quotes.length,0)){if(!qparams.missingBarsCreated)dataCallback.quotes=stx.doCleanupGaps(dataCallback.quotes);stx.setMasterData(dataCallback.quotes,qparams.chart);qparams.chart.moreAvailable=dataCallback.moreAvailable;qparams.chart.attribution=dataCallback.attribution;self.loadingNewChart=false;stx.createDataSet();if(params.initializeChart)stx.initializeChart();stx.home({maintainWhitespace:true}
);}
else{self.quoteFeed.announceError(qparams,dataCallback);}
}
else{if(cb)cb("orphaned");return ;}
self.loadingNewChart=false;if(cb){cb(dataCallback.error);}
if(qparams.chart.masterData&&qparams.chart.masterData.length)qparams.startDate=qparams.chart.masterData[0].DT;self.executeTagAlongs(qparams);if(self.behavior.callback){self.behavior.callback(qparams);}
else{self.loadDependents(qparams);}
self.resetRefreshInterval(self.behavior.refreshInterval);}
;}
this.loadingNewChart=true;this.updatingChart=false;qparams.originalState=STX.shallowClone(qparams);this.quoteFeed.fetch(qparams,closure(this,qparams));}
;STXChart.prototype.attachQuoteFeed=function(quoteFeed,behavior){if(!behavior)behavior={}
;if(this.quoteDriver){this.quoteDriver.die();}
this.quoteDriver=new STXChart.Driver(this,quoteFeed,behavior);}
;STXChart.prototype.attachTagAlongQuoteFeed=function(feed){var e9j="ssigni",v78="th",v38="gQuote",n9j="hTag",c28="mpt";if(!feed.label){console.log((J58+Z1V.A28+Z1V.A28+M5j+c28+s6j+Z1V.A28+J38+s6j+m5j+x88+m5j+V6j+n9j+J58+l38+n48+v38+C0j+g08+s6j+w18+c98+v78+x6j+Z1V.A28+s6j+m5j+e9j+Q78+Z98+s6j+m5j+s6j+l38+m5j+i5j+M5j+l38));return ;}
this.quoteDriver.attachTagAlongQuoteFeed(feed);}
;STXChart.prototype.detachTagAlongQuoteFeed=function(feed){this.quoteDriver.detachTagAlongQuoteFeed(feed);}
;STX.Comparison=function(){}
;G(X58);STX.Comparison.priceToPercent=function(stx,chart,price){return Z1V.u0T(Math.round(((price-STX.Comparison.baseline)/STX.Comparison.baseline*U68)*b58),b58);}
;STX.Comparison.percentToPrice=function(stx,chart,percent){return Z1V.h0T(STX.Comparison.baseline,(Z1V.E3j+(percent/U68)));}
;STX.Comparison.stopSort=function(lhs,rhs){return Z1V.t0T(lhs,rhs);}
;STX.Comparison.createComparisonSegmentInner=function(stx,chart){var fields=[],field;for(field in chart.series){if(chart.series[field].parameters.isComparison){fields.push(field);}
}
var priceFields=["Close","Open","High","Low","iqPrevClose"];chart.dataSegment=[];var firstQuote=null,firstTick=Z1V.s0T(chart.dataSet.length,chart.scroll),lastTick=firstTick+chart.maxTicks,stopPointer=0,stops=[],i;for(i=0;Z1V.k0T(i,stx.drawingObjects.length);i++){var drawing=stx.drawingObjects[i];if(Z1V.o0T(drawing.name,"comparison_stop"))if(Z1V.X0T(drawing.tick,firstTick)&&Z1V.j0T(drawing.tick,lastTick))stops.push(drawing.tick);}
stops.sort(STX.Comparison.stopSort);var transformsToProcess=chart.maxTicks+3;for(i=0;Z1V.D0T(i,transformsToProcess);i++){if(Z1V.K0T(i,transformsToProcess))i=-1;position=firstTick+i;if(Z1V.g0T(position,chart.dataSet.length)&&Z1V.e0T(position,0)){var quote=chart.dataSet[position];if(!firstQuote){firstQuote=STX.clone(quote);}
if(!quote.transform)quote.transform={"cache":{}
,"DT":quote.DT,"Date":quote.Date}
;STX.Comparison.baseline=firstQuote.Close;var j;for(j=0;Z1V.G0T(j,priceFields.length);j++){field=priceFields[j];if(quote[field]||Z1V.Z0T(quote[field],0))quote.transform[field]=Z1V.v0T(Math.round(((quote[field]-STX.Comparison.baseline)/STX.Comparison.baseline*100)*10000),10000);}
var s=stx.layout.studies;if(s){for(var n in s){var sd=s[n];if(Z1V.T0T(stx.panels[sd.panel].name,sd.chart.name))continue;for(field in sd.outputMap){if(quote[field]||Z1V.J5T(quote[field],0))quote.transform[field]=Z1V.r5T(Math.round(((quote[field]-STX.Comparison.baseline)/STX.Comparison.baseline*100)*10000),10000);}
if(sd.referenceOutput&&(quote[sd.referenceOutput+" "+sd.name]||Z1V.p5T(quote[sd.referenceOutput+" "+sd.name],0)))quote.transform[sd.referenceOutput+" "+sd.name]=Z1V.E5T(Math.round(((quote[sd.referenceOutput+" "+sd.name]-STX.Comparison.baseline)/STX.Comparison.baseline*100)*10000),10000);}
}
for(j in stx.plugins){var plugin=stx.plugins[j];if(!plugin.transformOutputs)continue;for(field in plugin.transformOutputs){if(quote[field]||Z1V.A5T(quote[field],0))quote.transform[field]=Z1V.F5T(Math.round(((quote[field]-STX.Comparison.baseline)/STX.Comparison.baseline*100)*10000),10000);}
}
var createAStop=false;if(stops&&Z1V.L5T(stopPointer,stops.length)){if(Z1V.Y5T(position,stops[stopPointer])){createAStop=true;stopPointer++;}
}
var mouseStop=null;if(stx.activeDrawing&&Z1V.c5T(stx.activeDrawing.name,"comparison_stop")){mouseStop=stx.activeDrawing.tick;}
var current;if(createAStop||Z1V.R5T(position,mouseStop)){for(j=0;Z1V.d5T(j,fields.length);j++){field=fields[j];current=quote[field];firstQuote[field]=Z1V.C5T(current,(1+(quote.transform.Close/100)));}
}
for(j=0;Z1V.b5T(j,fields.length);j++){field=fields[j];current=quote[field];if(current||Z1V.z5T(current,0)){var baseline=firstQuote[field];if(!baseline&&Z1V.x5T(baseline,0)){firstQuote[field]=baseline=Z1V.P5T(current,(1+(quote.transform.Close/100)));}
quote.transform[field]=Z1V.a5T(Math.round(((current-baseline)/baseline*100)*10000),10000);}
}
chart.dataSegment.push(quote);}
else if(Z1V.V6T(position,0)){chart.dataSegment.push(null);}
if(Z1V.w6T(i,0))break;}
stx.clearPixelCache();return true;}
;STX.Comparison.createComparisonSegment=function(){for(var chartName in this.charts){var chart=this.charts[chartName];if(chart.isComparison)STX.Comparison.createComparisonSegmentInner(this,chart);}
}
;STX.Comparison.priceFormat=function(stx,panel,price){var e08=0.001;if(Z1V.l6T(price,Z1V.z38)||typeof price==B3j)return l28;var priceTick=panel.yAxis.priceTick;if(stx.internationalizer){if(Z1V.U6T(priceTick,Z1V.E3j))price=stx.internationalizer.percent0.format(Z1V.n6T(price,U68));else if(Z1V.H6T(priceTick,E1j))price=stx.internationalizer.percent1.format(Z1V.i6T(price,U68));else if(Z1V.q6T(priceTick,d3j))price=stx.internationalizer.percent2.format(Z1V.B6T(price,U68));else if(Z1V.m6T(priceTick,e08))price=stx.internationalizer.percent3.format(Z1V.N6T(price,U68));else price=stx.internationalizer.percent4.format(price);}
else{if(Z1V.O6T(priceTick,Z1V.E3j))price=price.toFixed(Z1V.n3j)+V98;else if(Z1V.y6T(priceTick,E1j))price=price.toFixed(Z1V.E3j)+V98;else if(Z1V.W6T(priceTick,d3j))price=price.toFixed(Z1V.h3j)+V98;else if(Z1V.Q6T(priceTick,e08))price=price.toFixed(Z1V.l3j)+V98;else price=price.toFixed(Z1V.F3j)+V98;}
if(Z1V.f6T(parseFloat(price),Z1V.n3j)&&Z1V.I6T(price.charAt(Z1V.n3j),Z28)){price=price.substring(Z1V.E3j);}
return price;}
;STX.Comparison.correlate=function(stx,symbol){if(!STX.Comparison.requestCorrelation||Z1V.M6T(correlationPeriod,0))return ;var correlationPeriod=parseInt($$$(".stxCorrelate .stx-input-field").value,10),corrPanel=stx.panels[STX.Comparison.correlationPanel+" ("+correlationPeriod+")"],inputs={"id":STX.Comparison.correlationPanel+" ("+correlationPeriod+")","Period":correlationPeriod,"Compare To":[]}
,outputs={}
,panelName=null;if(corrPanel){for(var i=0;Z1V.S1T(i,stx.layout.studies[corrPanel.name].inputs["Compare To"].length);i++){inputs["Compare To"].push(stx.layout.studies[corrPanel.name].inputs["Compare To"][i]);}
for(var o in stx.layout.studies[corrPanel.name].outputs){outputs[o]=stx.layout.studies[corrPanel.name].outputs[o];}
panelName=corrPanel.name;}
inputs["Compare To"].push(symbol);outputs["Result "+symbol]=STX.Comparison.colorSelection;STX.Studies.addStudy(stx,"correl",inputs,outputs,null,panelName);for(var panel in stx.panels){if(Z1V.u1T(stx.panels[panel].name.indexOf(STX.Comparison.correlationPanel),0)){var compareArray=stx.layout.studies[stx.panels[panel].name].inputs["Compare To"];for(var ii=0;Z1V.h1T(ii,compareArray.length);ii++){if(Z1V.t1T(compareArray[ii],symbol)){stx.layout.studies[stx.panels[panel].name].outputs["Result "+symbol]=STX.Comparison.colorSelection;}
}
}
}
}
;STX.Comparison.toggleCorrelate=function(stx){var V28=".stxCorrelate .stx-checkbox";STX.Comparison.requestCorrelation=!STX.Comparison.requestCorrelation;var display=$$$(V28);if(display){STX.unappendClassName(display,(!STX.Comparison.requestCorrelation).toString());STX.appendClassName(display,STX.Comparison.requestCorrelation.toString());}
}
;STXChart.prototype.setComparison=function(onOff,chart){var C38="string";if(!chart)chart=this.chart;if(typeof chart==C38)chart=this.charts[chart];if(!chart.isComparison&&onOff){this.setTransform(chart,STX.Comparison.priceToPercent,STX.Comparison.percentToPrice);chart.panel.yAxis.priceFormatter=STX.Comparison.priceFormat;chart.panel.yAxis.whichSet=U3j;}
else if(chart.isComparison&&!onOff){this.unsetTransform(chart);chart.panel.yAxis.priceFormatter=Z1V.z38;chart.panel.yAxis.whichSet=C78;}
chart.isComparison=onOff;}
;STX.Comparison.startPlugin=function(){STXChart.prototype.prepend(h08,STX.Comparison.createComparisonSegment);}
;STX.Comparison.removeSeries=function(stx,field){}
;STX.SearchableWordList=function(list,maxResults,contains){if(!list)return ;if(!maxResults)maxResults=50;if(!contains)contains=false;var container={"records":[],"words":[]}
;for(var r=0;Z1V.s1T(r,list.length);r++){var record=list[r];if(!record.name)record.name=record.id;record.index=Z1V.k1T(container.records.push(record),1);var descs=record.name.split(" ");if(record.keywords)descs=descs.concat(record.keywords.split(" "));for(var j=0;Z1V.o1T(j,descs.length);j++){var word=descs[j].toUpperCase(),subIdx="_",subIdx2="_";if(Z1V.X1T(word.charCodeAt(0),33)&&Z1V.j1T(word.charCodeAt(0),126))subIdx=word.charAt(0);if(!container.words[subIdx])container.words[subIdx]=[];if(Z1V.D1T(word.length,1)){if(Z1V.K1T(word.charCodeAt(1),33)&&Z1V.g1T(word.charCodeAt(1),126))subIdx2=word.charAt(1);}
else{subIdx2=" ";}
if(!container.words[subIdx][subIdx2])container.words[subIdx][subIdx2]=[];container.words[subIdx][subIdx2].push({index:record.index,word:word}
);}
}
this.lookup=function(input,category,cb){var results=[];function sortId(a,b){if(Z1V.e1T(a.id,b.id))return 1;else if(Z1V.G1T(a.id,b.id))return -1;return Z1V.Z1T(a.weight,b.weight)?1:-1;}
function sortWeight(a,b){if(Z1V.v1T(a.weight,b.weight))return 1;else if(Z1V.T1T(a.weight,b.weight))return -1;return Z1V.J4j(a.name,b.name)?1:-1;}
function sortDescWeight(a,b){a.weight=0;b.weight=0;for(var j=0;Z1V.r4j(j,keys.length);j++){var KEY=keys[j].toUpperCase(),aIndex=a.name.toUpperCase().indexOf(KEY),bIndex=b.name.toUpperCase().indexOf(KEY);if(aIndex==-1)return 1;else if(bIndex==-1)return -1;a.weight+=aIndex;b.weight+=bIndex;}
if(Z1V.p4j(a.weight,b.weight))return 1;else if(Z1V.E4j(a.weight,b.weight))return -1;return Z1V.A4j(a.name,b.name)?1:-1;}
function noDups(res){var returnArray=[],previousId="";for(var r=0;Z1V.F4j(r,res.length);r++){if(Z1V.L4j(previousId,res[r].id))continue;returnArray.push(res[r]);previousId=res[r].id;}
return returnArray;}
if(input&&container){var foundBitMap=[],keyword=input.toUpperCase(),exacts=[],d,entry;for(d=0;Z1V.Y4j(d,container.records.length);d++){entry=container.records[d];if(foundBitMap[entry.index])continue;if(category&&Z1V.c4j(entry.category,category))continue;var name=entry.name.toUpperCase();if(Z1V.R4j(keyword,"*")){exacts.push(STX.extend(container.records[entry.index],{weight:0}
));foundBitMap[entry.index]=true;}
else{var i=name.indexOf(keyword);if(i>-1){var weight=Z1V.d4j(name.length,keyword.length);if(!contains&&Z1V.C4j(i,0))continue;(weight?results:exacts).push(STX.extend(container.records[entry.index],{weight:weight}
));foundBitMap[entry.index]=true;}
}
}
var keys=keyword.split(" "),k1="_",k2="_",myKey=keys[0].toUpperCase(),descResults=[];if(Z1V.b4j(myKey.charCodeAt(0),33)&&Z1V.z4j(myKey.charCodeAt(0),126))k1=myKey.charAt(0);if(Z1V.x4j(myKey.length,1)){if(Z1V.P4j(myKey.charCodeAt(1),33)&&Z1V.a4j(myKey.charCodeAt(1),126))k2=myKey.charAt(1);}
else{k2=" ";}
if(container.words[k1]){for(var kk in container.words[k1]){if(Z1V.V2j(kk.length,1))continue;if(Z1V.w2j(k2," "))kk=k2;for(d=0;container.words[k1][kk]&&Z1V.l2j(d,container.words[k1][kk].length);d++){entry=container.words[k1][kk][d];if(Z1V.U2j(entry.word.toUpperCase().indexOf(myKey),0))continue;if(foundBitMap[entry.index])continue;if(category&&Z1V.n2j(container.records[entry.index].category,category))continue;descResults.push(STX.clone(container.records[entry.index]));foundBitMap[entry.index]=true;}
if(Z1V.H2j(k2," "))break;}
}
for(var extraKeys=1;Z1V.i2j(extraKeys,keys.length);extraKeys++){myKey=keys[extraKeys].toUpperCase();for(var res=Z1V.q2j(descResults.length,1);Z1V.B2j(res,0);res--){var words=descResults[res].name.split(" ");if(descResults[res].keywords)words=words.concat(descResults[res].keywords.split(" "));var match=false;for(var wd=0;Z1V.m2j(wd,words.length);wd++){if(Z1V.N2j(words[wd].toUpperCase().indexOf(myKey),0)){match=true;break;}
}
if(!match)descResults.splice(res,1);}
}
exacts.sort(sortId);exacts=noDups(exacts);results.sort(sortId);results=noDups(results);results.length=Math.min(results.length,maxResults);descResults.sort(sortId);descResults=noDups(descResults);results=exacts.sort(sortWeight).concat(results.sort(sortWeight),descResults.sort(sortDescWeight));results.length=Math.min(results.length,maxResults);}
if(cb)cb(results);else return results;}
;}
;return _exports;}
{if(typeof define===N8j&&define.amd){define(["stxTimeZoneData","stxThirdParty","stx"],function(_stxTimeZoneData,_stxThirdParty,_stx){return _stxKernel_js(_stxThirdParty,_stx);}
);}
else{var Z=function(P){_stxThirdParty=P.STXThirdParty;}
;var _stxThirdParty={}
;if(typeof (window.STXThirdParty)!=B3j)Z(window);var _stx={"STX":window.STX,"STXChart":window.STXChart,"$$":window.$$,"$$$":window.$$$}
;_stxKernel_js(_stxThirdParty,_stx);}
}
}
)();