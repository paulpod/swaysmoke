/* File generated on Thu Mar 03 2016 11:13:11 GMT-0500 (EST) */
/* Version 2015-12-08.5 */
/* Expires on 2016/12/27 */
/* Locked to domains ["127.0.0.1","localhost","loginandtrade.com","cityindextest9.co.uk","cityindex.com","globallogic.com.ar","cityindexpd.ektron9.dev.cityindex.co.uk","cityindexpd.ektron9.qa.cityindex.co.uk","cityindexpd.ektron9.stg.cityindex.co.uk","cityindex.co.uk","trade.getuptick.com","trade.loginandtrade.com"] */
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

	var domains=["127.0.0.1","localhost","gain-ux.herokuapp.com","cityindextest9.co.uk","cityindex.com","globallogic.com.ar","cityindexpd.ektron9.dev.cityindex.co.uk","cityindexpd.ektron9.qa.cityindex.co.uk","cityindexpd.ektron9.stg.cityindex.co.uk","cityindex.co.uk","trade.getuptick.com","trade.loginandtrade.com"];
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
var Q5v={'o1':function(Z1,N1){return Z1/N1;}
,'g0H':function(H0H,W0H){return H0H==W0H;}
,'S1F':function(n1F,h1F){return n1F*h1F;}
,'c0x':function(w0x,B0x){return w0x==B0x;}
,'w9Q':function(B9Q,b9Q){return B9Q===b9Q;}
,'I5G':function(K5G,x5G){return K5G>=x5G;}
,'m6T':function(Z6T,k6T){return Z6T>=k6T;}
,'P6Z':function(G6Z,O6Z){return G6Z==O6Z;}
,'y8Q':function(F8Q,T8Q){return F8Q==T8Q;}
,'M6x':function(t6x,Y6x){return t6x>Y6x;}
,'D8x':function(i8x,C8x){return i8x===C8x;}
,'p3Z':function(M3Z,t3Z){return M3Z==t3Z;}
,'i5H':function(C5H,g5H){return C5H<g5H;}
,'b7Z':function(f7Z,I7Z){return f7Z!=I7Z;}
,'M4T':function(t4T,Y4T){return t4T==Y4T;}
,'i4G':function(C4G,g4G){return C4G/g4G;}
,'Z4Z':function(k4Z,N4Z){return k4Z<N4Z;}
,'q3Q':function(a3Q,r3Q){return a3Q/r3Q;}
,'L9H':function(S9H,n9H){return S9H-n9H;}
,'H6C':function(W6C,p6C){return W6C-p6C;}
,'S4P':function(n4P,h4P){return n4P&h4P;}
,'c62':function(w62,B62){return w62>B62;}
,'k2T':function(N2T,y2T){return N2T-y2T;}
,'Q9F':function(J9F,A9F){return J9F-A9F;}
,'H2x':function(W2x,p2x){return W2x==p2x;}
,'X4Q':function(s4Q,d4Q){return s4Q<d4Q;}
,'P6P':function(G6P,O6P){return G6P*O6P;}
,'S6G':function(n6G,h6G){return n6G!=h6G;}
,'w2x':function(B2x,b2x){return B2x<b2x;}
,'Z1Q':function(k1Q,N1Q){return k1Q==N1Q;}
,'y9T':function(F9T,T9T){return F9T-T9T;}
,'i9Q':function(C9Q,g9Q){return C9Q===g9Q;}
,'N9Q':function(y9Q,F9Q){return y9Q==F9Q;}
,'m4C':function(Z4C,k4C){return Z4C-k4C;}
,'e3v':function(P3v,G3v){return P3v===G3v;}
,'O4F':function(Q4F,J4F){return Q4F*J4F;}
,'w0':function(B0,b0){return B0!=b0;}
,'O9Q':function(Q9Q,J9Q){return Q9Q==J9Q;}
,'l4G':function(L4G,S4G){return L4G/S4G;}
,'V0C':function(q0C,a0C){return q0C<=a0C;}
,'w8F':function(B8F,b8F){return B8F-b8F;}
,'W9C':function(p9C,M9C){return p9C>M9C;}
,'d9H':function(o9H,m9H){return o9H<m9H;}
,'B1Q':function(b1Q,f1Q){return b1Q*f1Q;}
,'k42':3,'z6w':function(V6w,q6w){return V6w<q6w;}
,'N9':function(y9,F9){return y9==F9;}
,'t4Z':function(Y4Z,e4Z){return Y4Z/e4Z;}
,'r2H':function(U2H,j2H){return U2H===j2H;}
,'H3v':function(W3v,p3v){return W3v>p3v;}
,'a3':function(r3,U3){return r3==U3;}
,'p62':function(M62,t62){return M62!=t62;}
,'a8w':function(r8w,U8w){return r8w>U8w;}
,'s6C':function(d6C,o6C){return d6C-o6C;}
,'X9w':function(s9w,d9w){return s9w===d9w;}
,'R3':function(E3,l3){return E3===l3;}
,'i6F':function(C6F,g6F){return C6F>g6F;}
,'L7x':function(S7x,n7x){return S7x!=n7x;}
,'O4H':function(Q4H,J4H){return Q4H==J4H;}
,'R8T':function(E8T,l8T,L8T){return E8T*l8T/L8T;}
,'R5w':function(E5w,l5w){return E5w==l5w;}
,'E9w':function(l9w,L9w){return l9w<=L9w;}
,'J1F':function(A1F,z1F){return A1F>=z1F;}
,'j0Q':function(c0Q,w0Q){return c0Q==w0Q;}
,'D1H':function(i1H,C1H){return i1H<C1H;}
,'d9F':function(o9F,m9F){return o9F==m9F;}
,'E1T':function(l1T,L1T){return l1T==L1T;}
,'Y1H':function(e1H,P1H){return e1H==P1H;}
,'F3T':function(T3T,R3T){return T3T/R3T;}
,'O6C':function(Q6C,J6C){return Q6C*J6C;}
,'N7G':function(y7G,F7G){return y7G<F7G;}
,'u3H':function(v7H,X7H){return v7H!==X7H;}
,'k2H':function(N2H,y2H){return N2H===y2H;}
,'j9x':function(c9x,w9x){return c9x==w9x;}
,'b3C':function(f3C,I3C){return f3C<I3C;}
,'a6':function(r6,U6){return r6<U6;}
,'W8w':function(p8w,M8w){return p8w-M8w;}
,'V2H':function(q2H,a2H){return q2H<a2H;}
,'g9G':function(H9G,W9G){return H9G-W9G;}
,'Y4v':function(e4v,P4v){return e4v-P4v;}
,'K7':function(x7,u7){return x7*u7;}
,'L7C':function(S7C,n7C){return S7C<=n7C;}
,'Y3T':function(e3T,P3T){return e3T/P3T;}
,'Q1v':function(J1v,A1v){return J1v!=A1v;}
,'q1':function(a1,r1){return a1/r1;}
,'i0w':function(C0w,g0w){return C0w*g0w;}
,'I9C':function(K9C,x9C){return K9C==x9C;}
,'m5G':function(Z5G,k5G){return Z5G-k5G;}
,'J5F':function(A5F,z5F){return A5F!=z5F;}
,'R5C':function(E5C,l5C){return E5C==l5C;}
,'T7F':function(R7F,E7F){return R7F<E7F;}
,'h2P':function(D2P,i2P){return D2P<i2P;}
,'U8Z':function(j8Z,c8Z){return j8Z/c8Z;}
,'D5v':function(i5v,C5v,g5v,H5v){return i5v-C5v+g5v-H5v;}
,'m9v':function(Z9v,k9v){return Z9v<k9v;}
,'p8v':function(M8v,t8v){return M8v*t8v;}
,'l4T':function(L4T,S4T){return L4T==S4T;}
,'x1Z':function(u1Z,v3Z){return u1Z==v3Z;}
,'N7':function(y7,F7){return y7==F7;}
,'K8x':function(x8x,u8x){return x8x/u8x;}
,'b8Q':function(f8Q,I8Q){return f8Q!==I8Q;}
,'N4H':function(y4H,F4H){return y4H==F4H;}
,'g8v':function(H8v,W8v){return H8v/W8v;}
,'a5C':function(r5C,U5C){return r5C==U5C;}
,'q4F':function(a4F,r4F){return a4F*r4F;}
,'t5Q':function(Y5Q,e5Q){return Y5Q===e5Q;}
,'N5P':function(y5P,F5P){return y5P-F5P;}
,'o9G':function(m9G,Z9G){return m9G>Z9G;}
,'s1w':function(d1w,o1w){return d1w|o1w;}
,'O4C':function(Q4C,J4C){return Q4C>J4C;}
,'l7G':function(L7G,S7G){return L7G>S7G;}
,'v7x':function(X7x,s7x){return X7x<s7x;}
,'Z6w':function(k6w,N6w){return k6w>=N6w;}
,'f7G':function(I7G,K7G){return I7G>K7G;}
,'w7T':function(B7T,b7T){return B7T>=b7T;}
,'e2v':function(P2v,G2v){return P2v>G2v;}
,'Y2G':function(e2G,P2G){return e2G<P2G;}
,'S8C':function(n8C,h8C){return n8C>h8C;}
,'b9w':function(f9w,I9w){return f9w>=I9w;}
,'d9T':function(o9T,m9T){return o9T!=m9T;}
,'C4w':function(g4w,H4w){return g4w==H4w;}
,'J1C':function(A1C,z1C,V1C){return A1C/z1C*V1C;}
,'p4Q':function(M4Q,t4Q){return M4Q<=t4Q;}
,'D0H':function(i0H,C0H){return i0H-C0H;}
,'R3G':function(E3G,l3G){return E3G>l3G;}
,'B7w':function(b7w,f7w){return b7w>=f7w;}
,'J3x':function(A3x,z3x){return A3x-z3x;}
,'J0P':function(A0P,z0P){return A0P/z0P;}
,'d8Q':function(o8Q,m8Q){return o8Q==m8Q;}
,'o0H':function(m0H,Z0H){return m0H===Z0H;}
,'E8C':function(l8C,L8C){return l8C==L8C;}
,'N5G':function(y5G,F5G){return y5G/F5G;}
,'j6Z':function(c6Z,w6Z){return c6Z/w6Z;}
,'L8H':function(S8H,n8H){return S8H>=n8H;}
,'S2G':function(n2G,h2G){return n2G===h2G;}
,'b0P':function(f0P,I0P){return f0P==I0P;}
,'x7G':function(u7G,v2G){return u7G<=v2G;}
,'q4H':function(a4H,r4H){return a4H==r4H;}
,'p1G':function(M1G,t1G){return M1G<t1G;}
,'j5x':function(c5x,w5x){return c5x==w5x;}
,'x0Z':function(u0Z,v9Z){return u0Z*v9Z;}
,'X8P':function(s8P,d8P){return s8P<d8P;}
,'q2x':function(a2x,r2x){return a2x<r2x;}
,'o7Q':function(m7Q,Z7Q){return m7Q<=Z7Q;}
,'I9T':function(K9T,x9T){return K9T==x9T;}
,'R8w':function(E8w,l8w){return E8w>l8w;}
,'E5':function(l5,L5){return l5==L5;}
,'T5P':function(R5P,E5P,l5P){return R5P-E5P+l5P;}
,'Z2P':function(k2P,N2P){return k2P>N2P;}
,'N1x':function(y1x,F1x){return y1x==F1x;}
,'i7G':function(C7G,g7G){return C7G<g7G;}
,'z7C':function(V7C,q7C){return V7C<q7C;}
,'a2F':function(r2F,U2F){return r2F/U2F;}
,'f4F':function(I4F,K4F){return I4F===K4F;}
,'K3x':function(x3x,u3x){return x3x<u3x;}
,'K2T':function(x2T,u2T){return x2T<u2T;}
,'k3w':function(N3w,y3w){return N3w*y3w;}
,'N8':function(y8,F8){return y8===F8;}
,'u8w':function(v5w,X5w){return v5w-X5w;}
,'v6v':function(X6v,s6v){return X6v*s6v;}
,'Q2F':function(J2F,A2F){return J2F<A2F;}
,'s0':function(d0,o0){return d0-o0;}
,'p1C':function(M1C,t1C){return M1C/t1C;}
,'u5x':function(v6C,X6C){return v6C-X6C;}
,'P7x':function(G7x,O7x){return G7x==O7x;}
,'x1P':function(u1P,v3P){return u1P<=v3P;}
,'A0w':function(z0w,V0w){return z0w!=V0w;}
,'k2G':function(N2G,y2G){return N2G<y2G;}
,'j2w':function(c2w,w2w){return c2w<w2w;}
,'i8':function(C8,g8){return C8/g8;}
,'U1C':function(j1C,c1C){return j1C/c1C;}
,'G0C':function(O0C,Q0C){return O0C<=Q0C;}
,'r1H':function(U1H,j1H){return U1H<j1H;}
,'w1x':function(B1x,b1x){return B1x-b1x;}
,'O3v':function(Q3v,J3v){return Q3v==J3v;}
,'R1P':function(E1P,l1P){return E1P>l1P;}
,'p5':function(M5,t5){return M5-t5;}
,'L9T':function(S9T,n9T){return S9T>=n9T;}
,'M9v':function(t9v,Y9v){return t9v!=Y9v;}
,'B9x':function(b9x,f9x){return b9x/f9x;}
,'I6P':function(K6P,x6P){return K6P>x6P;}
,'Y0T':function(e0T,P0T){return e0T*P0T;}
,'g5Z':function(H5Z,W5Z){return H5Z===W5Z;}
,'E3C':function(l3C,L3C){return l3C==L3C;}
,'F1G':function(T1G,R1G){return T1G===R1G;}
,'J8C':function(A8C,z8C){return A8C==z8C;}
,'L5P':function(S5P,n5P){return S5P==n5P;}
,'Q6Z':function(J6Z,A6Z){return J6Z<A6Z;}
,'q9v':function(a9v,r9v){return a9v!==r9v;}
,'w6T':function(B6T,b6T){return B6T>b6T;}
,'Z5x':function(k5x,N5x){return k5x<N5x;}
,'w7P':function(B7P,b7P){return B7P-b7P;}
,'L5T':function(S5T,n5T){return S5T==n5T;}
,'t5x':function(Y5x,e5x){return Y5x>e5x;}
,'Z8Q':function(k8Q,N8Q){return k8Q-N8Q;}
,'n7w':function(h7w,D7w){return h7w>D7w;}
,'q7P':function(a7P,r7P){return a7P<=r7P;}
,'j7x':function(c7x,w7x){return c7x-w7x;}
,'S5F':function(n5F,h5F){return n5F==h5F;}
,'E1C':function(l1C,L1C){return l1C/L1C;}
,'g1T':function(H1T,W1T){return H1T-W1T;}
,'G0H':function(O0H,Q0H){return O0H-Q0H;}
,'u8G':function(v5G,X5G){return v5G<X5G;}
,'c0T':function(w0T,B0T){return w0T-B0T;}
,'V6G':function(q6G,a6G){return q6G*a6G;}
,'k0C':function(N0C,y0C){return N0C<y0C;}
,'B5G':function(b5G,f5G){return b5G<=f5G;}
,'i0P':function(C0P,g0P,H0P,W0P){return C0P-g0P+H0P-W0P;}
,'k1H':function(N1H,y1H){return N1H-y1H;}
,'F2':function(T2,R2){return T2<R2;}
,'f6F':function(I6F,K6F){return I6F!==K6F;}
,'T1w':function(R1w,E1w){return R1w!=E1w;}
,'y2P':function(F2P,T2P){return F2P*T2P;}
,'D3Z':function(i3Z,C3Z){return i3Z==C3Z;}
,'a2P':function(r2P,U2P){return r2P<U2P;}
,'x0w':function(u0w,v9w){return u0w%v9w;}
,'u3F':function(v7F,X7F){return v7F!=X7F;}
,'O7H':function(Q7H,J7H){return Q7H==J7H;}
,'g7Q':function(H7Q,W7Q){return H7Q==W7Q;}
,'l0Z':function(L0Z,S0Z){return L0Z<=S0Z;}
,'J8P':function(A8P,z8P){return A8P/z8P;}
,'R7x':function(E7x,l7x){return E7x!=l7x;}
,'a2Z':function(r2Z,U2Z){return r2Z/U2Z;}
,'F2G':function(T2G,R2G){return T2G===R2G;}
,'v6Q':function(X6Q,s6Q){return X6Q>s6Q;}
,'O6H':function(Q6H,J6H){return Q6H-J6H;}
,'D3C':function(i3C,C3C){return i3C==C3C;}
,'a0Q':function(r0Q,U0Q){return r0Q*U0Q;}
,'r1G':function(U1G,j1G){return U1G==j1G;}
,'X3x':function(s3x,d3x){return s3x-d3x;}
,'q2v':function(a2v,r2v){return a2v==r2v;}
,'U7G':function(j7G,c7G){return j7G/c7G;}
,'N3Q':function(y3Q,F3Q){return y3Q==F3Q;}
,'l5H':function(L5H,S5H){return L5H<S5H;}
,'c4Q':function(w4Q,B4Q){return w4Q-B4Q;}
,'N2w':function(y2w,F2w){return y2w<F2w;}
,'h8G':function(D8G,i8G){return D8G==i8G;}
,'L5x':function(S5x,n5x){return S5x>n5x;}
,'g2G':function(H2G,W2G){return H2G!==W2G;}
,'Q1Q':function(J1Q,A1Q){return J1Q<A1Q;}
,'M8F':function(t8F,Y8F){return t8F*Y8F;}
,'f5H':function(I5H,K5H){return I5H>K5H;}
,'Q3w':function(J3w,A3w){return J3w-A3w;}
,'q6T':function(a6T,r6T){return a6T===r6T;}
,'h9T':function(D9T,i9T){return D9T-i9T;}
,'d8H':function(o8H,m8H){return o8H<m8H;}
,'u4w':function(v1w,X1w){return v1w|X1w;}
,'H7P':function(W7P,p7P){return W7P in p7P;}
,'n2C':function(h2C,D2C){return h2C==D2C;}
,'T6C':function(R6C,E6C){return R6C<E6C;}
,'O8v':function(Q8v,J8v){return Q8v/J8v;}
,'i4':function(C4,g4){return C4!=g4;}
,'G3C':function(O3C,Q3C){return O3C==Q3C;}
,'S3Z':function(n3Z,h3Z){return n3Z==h3Z;}
,'g1H':function(H1H,W1H){return H1H==W1H;}
,'K2H':function(x2H,u2H){return x2H/u2H;}
,'a6Z':function(r6Z,U6Z){return r6Z/U6Z;}
,'s6f':"v",'V9G':function(q9G,a9G){return q9G>a9G;}
,'M6H':function(t6H,Y6H){return t6H<Y6H;}
,'C9F':function(g9F,H9F){return g9F-H9F;}
,'j0v':function(c0v,w0v){return c0v>w0v;}
,'i2v':function(C2v,g2v){return C2v-g2v;}
,'h7v':function(D7v,i7v){return D7v===i7v;}
,'y5Q':function(F5Q,T5Q){return F5Q==T5Q;}
,'r8C':function(U8C,j8C){return U8C==j8C;}
,'f2':function(I2,K2){return I2!==K2;}
,'G6v':function(O6v,Q6v){return O6v/Q6v;}
,'d5P':function(o5P,m5P,Z5P,k5P){return o5P-m5P+Z5P+k5P;}
,'f2x':function(I2x,K2x){return I2x==K2x;}
,'L4w':function(S4w,n4w){return S4w==n4w;}
,'m6x':function(Z6x,k6x){return Z6x<k6x;}
,'P4w':function(G4w,O4w){return G4w<O4w;}
,'h6P':function(D6P,i6P){return D6P&i6P;}
,'e6T':function(P6T,G6T){return P6T>G6T;}
,'y6Z':function(F6Z,T6Z){return F6Z<T6Z;}
,'Y0H':function(e0H,P0H){return e0H==P0H;}
,'I5x':function(K5x,x5x){return K5x<x5x;}
,'c6v':function(w6v,B6v){return w6v===B6v;}
,'g9Z':function(H9Z,W9Z){return H9Z<W9Z;}
,'A2v':function(z2v,V2v){return z2v!=V2v;}
,'U4':function(j4,c4){return j4>c4;}
,'s9Q':function(d9Q,o9Q){return d9Q===o9Q;}
,'j9P':function(c9P,w9P){return c9P-w9P;}
,'g2H':function(H2H,W2H){return H2H===W2H;}
,'o0T':function(m0T,Z0T){return m0T==Z0T;}
,'Z6':function(k6,N6){return k6==N6;}
,'M2C':function(t2C,Y2C){return t2C/Y2C;}
,'b5v':function(f5v,I5v){return f5v&I5v;}
,'a6P':function(r6P,U6P){return r6P<U6P;}
,'V3T':function(q3T,a3T){return q3T!=a3T;}
,'Q0v':function(J0v,A0v){return J0v<A0v;}
,'N2C':function(y2C,F2C){return y2C!=F2C;}
,'z7':function(V7,q7,a7){return V7*q7*a7;}
,'e7P':function(P7P,G7P){return P7P<G7P;}
,'T7G':function(R7G,E7G){return R7G<E7G;}
,'U8v':function(j8v,c8v){return j8v-c8v;}
,'X1G':function(s1G,d1G){return s1G-d1G;}
,'c45':"j",'r3T':function(U3T,j3T){return U3T!=j3T;}
,'P1P':function(G1P,O1P){return G1P-O1P;}
,'I0Q':function(K0Q,x0Q){return K0Q===x0Q;}
,'f2v':function(I2v,K2v){return I2v*K2v;}
,'W3w':function(p3w,M3w){return p3w<M3w;}
,'Y2T':function(e2T,P2T,G2T){return e2T-P2T+G2T;}
,'X0C':function(s0C,d0C){return s0C-d0C;}
,'Z9T':function(k9T,N9T){return k9T/N9T;}
,'Y1G':function(e1G,P1G){return e1G>P1G;}
,'Y5F':function(e5F,P5F){return e5F==P5F;}
,'E9Z':function(l9Z,L9Z){return l9Z<L9Z;}
,'U6x':function(j6x,c6x){return j6x in c6x;}
,'V5':function(q5,a5){return q5===a5;}
,'e5H':function(P5H,G5H){return P5H>G5H;}
,'h0':function(D0,i0){return D0==i0;}
,'I3w':function(K3w,x3w){return K3w-x3w;}
,'X2G':function(s2G,d2G){return s2G==d2G;}
,'Q8w':function(J8w,A8w){return J8w*A8w;}
,'U0w':function(j0w,c0w){return j0w*c0w;}
,'q5H':function(a5H,r5H){return a5H>r5H;}
,'q0Z':function(a0Z,r0Z){return a0Z<r0Z;}
,'L5w':function(S5w,n5w){return S5w==n5w;}
,'t3F':function(Y3F,e3F){return Y3F!==e3F;}
,'v4G':function(X4G,s4G){return X4G-s4G;}
,'K0P':function(x0P,u0P){return x0P<u0P;}
,'t8G':function(Y8G,e8G){return Y8G==e8G;}
,'b5w':function(f5w,I5w){return f5w===I5w;}
,'T4H':function(R4H,E4H){return R4H==E4H;}
,'R7Z':function(E7Z,l7Z){return E7Z-l7Z;}
,'A2':function(z2,V2){return z2<V2;}
,'D62':function(i62,C62){return i62==C62;}
,'z5T':function(V5T,q5T){return V5T-q5T;}
,'c0C':function(w0C,B0C){return w0C<=B0C;}
,'i7w':function(C7w,g7w){return C7w<g7w;}
,'t8w':function(Y8w,e8w){return Y8w==e8w;}
,'d8G':function(o8G,m8G){return o8G==m8G;}
,'v0Q':function(X0Q,s0Q){return X0Q<s0Q;}
,'S2Q':function(n2Q,h2Q){return n2Q==h2Q;}
,'K9Z':function(x9Z,u9Z){return x9Z-u9Z;}
,'N5H':function(y5H,F5H){return y5H<F5H;}
,'u7w':function(v2w,X2w){return v2w>=X2w;}
,'q4C':function(a4C,r4C){return a4C==r4C;}
,'Y0P':function(e0P,P0P){return e0P/P0P;}
,'b1G':function(f1G,I1G){return f1G===I1G;}
,'F3x':function(T3x,R3x){return T3x>R3x;}
,'R9C':function(E9C,l9C){return E9C-l9C;}
,'k5Z':function(N5Z,y5Z){return N5Z-y5Z;}
,'U6F':function(j6F,c6F){return j6F*c6F;}
,'T7':function(R7,E7){return R7*E7;}
,'P8G':function(G8G,O8G){return G8G-O8G;}
,'z0G':function(V0G,q0G,a0G,r0G){return V0G-q0G+a0G-r0G;}
,'d4G':function(o4G,m4G,Z4G,k4G){return o4G-m4G+Z4G-k4G;}
,'G9w':function(O9w,Q9w){return O9w<Q9w;}
,'s3v':function(d3v,o3v){return d3v-o3v;}
,'T0P':function(R0P,E0P){return R0P!=E0P;}
,'a9P':function(r9P,U9P){return r9P!=U9P;}
,'c6G':function(w6G,B6G){return w6G<B6G;}
,'Z4w':function(k4w,N4w){return k4w==N4w;}
,'z6':function(V6,q6){return V6>=q6;}
,'m9':function(Z9,k9){return Z9==k9;}
,'d4w':function(o4w,m4w){return o4w<=m4w;}
,'c2T':function(w2T,B2T){return w2T-B2T;}
,'F4v':function(T4v,R4v){return T4v>R4v;}
,'J9G':function(A9G,z9G){return A9G-z9G;}
,'i0Z':function(C0Z,g0Z){return C0Z-g0Z;}
,'U9Q':function(j9Q,c9Q){return j9Q<c9Q;}
,'y9F':function(F9F,T9F){return F9F==T9F;}
,'N2x':function(y2x,F2x){return y2x<F2x;}
,'h1P':function(D1P,i1P){return D1P<=i1P;}
,'w4T':function(B4T,b4T){return B4T==b4T;}
,'Y5':function(e5,P5){return e5/P5;}
,'i9':function(C9,g9){return C9===g9;}
,'r9w':function(U9w,j9w){return U9w<j9w;}
,'J9Z':function(A9Z,z9Z){return A9Z*z9Z;}
,'F6G':function(T6G,R6G){return T6G>=R6G;}
,'b9Z':function(f9Z,I9Z){return f9Z==I9Z;}
,'y8H':function(F8H,T8H){return F8H>=T8H;}
,'K9w':function(x9w,u9w){return x9w<u9w;}
,'m8F':function(Z8F,k8F){return Z8F===k8F;}
,'I7C':function(K7C,x7C){return K7C==x7C;}
,'X7v':function(s7v,d7v,o7v){return s7v*d7v/o7v;}
,'O2x':function(Q2x,J2x){return Q2x!=J2x;}
,'t2P':function(Y2P,e2P){return Y2P>e2P;}
,'n9v':function(h9v,D9v){return h9v<D9v;}
,'V0T':function(q0T,a0T){return q0T>a0T;}
,'c1G':function(w1G,B1G){return w1G===B1G;}
,'m4T':function(Z4T,k4T){return Z4T!==k4T;}
,'O9v':function(Q9v,J9v){return Q9v>=J9v;}
,'w8':function(B8,b8){return B8>b8;}
,'m15':"k",'y1v':function(F1v,T1v){return F1v/T1v;}
,'f2C':function(I2C,K2C){return I2C in K2C;}
,'o0C':function(m0C,Z0C){return m0C/Z0C;}
,'R6P':function(E6P,l6P){return E6P&l6P;}
,'b0H':function(f0H,I0H){return f0H*I0H;}
,'f1w':function(I1w,K1w){return I1w!==K1w;}
,'Q0Q':function(J0Q,A0Q){return J0Q!==A0Q;}
,'h1Q':function(D1Q,i1Q){return D1Q<i1Q;}
,'u9H':function(v4H,X4H){return v4H==X4H;}
,'k3x':function(N3x,y3x){return N3x==y3x;}
,'S8v':function(n8v,h8v){return n8v<h8v;}
,'L0v':function(S0v,n0v){return S0v==n0v;}
,'t1P':function(Y1P,e1P){return Y1P/e1P;}
,'a8H':function(r8H,U8H){return r8H>=U8H;}
,'R42':1,'w5H':function(B5H,b5H){return B5H>b5H;}
,'O4T':function(Q4T,J4T){return Q4T!=J4T;}
,'p2F':function(M2F,t2F){return M2F<t2F;}
,'z8H':function(V8H,q8H){return V8H>=q8H;}
,'A4F':function(z4F,V4F){return z4F*V4F;}
,'x7H':function(u7H,v2H){return u7H!=v2H;}
,'M6F':function(t6F,Y6F){return t6F>Y6F;}
,'e4x':function(P4x,G4x){return P4x>=G4x;}
,'j2F':function(c2F,w2F){return c2F/w2F;}
,'R0G':function(E0G,l0G){return E0G<l0G;}
,'W0v':function(p0v,M0v){return p0v<M0v;}
,'T4G':function(R4G,E4G){return R4G/E4G;}
,'e2C':function(P2C,G2C){return P2C!=G2C;}
,'p0T':function(M0T,t0T){return M0T>t0T;}
,'c8Q':function(w8Q,B8Q){return w8Q===B8Q;}
,'T7w':function(R7w,E7w){return R7w>E7w;}
,'Z0v':function(k0v,N0v){return k0v/N0v;}
,'g9w':function(H9w,W9w){return H9w<W9w;}
,'G8Q':function(O8Q,Q8Q){return O8Q/Q8Q;}
,'s2C':function(d2C,o2C){return d2C*o2C;}
,'c4P':function(w4P,B4P){return w4P>B4P;}
,'a9T':function(r9T,U9T){return r9T<U9T;}
,'g62':function(H62,W62){return H62<W62;}
,'h5Q':function(D5Q,i5Q){return D5Q===i5Q;}
,'E62':function(l62,L62){return l62>L62;}
,'x1w':function(u1w,v3w){return u1w==v3w;}
,'O7T':function(Q7T,J7T){return Q7T<J7T;}
,'C3G':function(g3G,H3G){return g3G!=H3G;}
,'S9w':function(n9w,h9w){return n9w<h9w;}
,'x4H':function(u4H,v1H){return u4H-v1H;}
,'Q5C':function(J5C,A5C){return J5C*A5C;}
,'s5w':function(d5w,o5w,m5w){return d5w-o5w-m5w;}
,'H4G':function(W4G,p4G){return W4G!==p4G;}
,'w4H':function(B4H,b4H){return B4H<b4H;}
,'B5Q':function(b5Q,f5Q){return b5Q===f5Q;}
,'v5C':function(X5C,s5C){return X5C==s5C;}
,'H9':function(W9,p9){return W9===p9;}
,'O3Q':function(Q3Q,J3Q){return Q3Q/J3Q;}
,'y3':function(F3,T3){return F3!==T3;}
,'X5F':function(s5F,d5F){return s5F==d5F;}
,'n4x':function(h4x,D4x){return h4x*D4x;}
,'u6P':function(v0P,X0P){return v0P>=X0P;}
,'K8Q':function(x8Q,u8Q){return x8Q<u8Q;}
,'j3G':function(c3G,w3G){return c3G<=w3G;}
,'a9x':function(r9x,U9x){return r9x==U9x;}
,'c3C':function(w3C,B3C){return w3C-B3C;}
,'w3Q':function(B3Q,b3Q){return B3Q*b3Q;}
,'Z75':16,'o3P':function(m3P,Z3P){return m3P/Z3P;}
,'O4x':function(Q4x,J4x){return Q4x==J4x;}
,'w1Z':function(B1Z,b1Z){return B1Z*b1Z;}
,'Y0':function(e0,P0,G0){return e0/P0/G0;}
,'A1Z':function(z1Z,V1Z){return z1Z==V1Z;}
,'s8Z':function(d8Z,o8Z){return d8Z>=o8Z;}
,'h8w':function(D8w,i8w){return D8w<i8w;}
,'f6x':function(I6x,K6x){return I6x!==K6x;}
,'x1C':function(u1C,v3C){return u1C>=v3C;}
,'w4':function(B4,b4){return B4===b4;}
,'C6P':function(g6P,H6P){return g6P!=H6P;}
,'u5C':function(v6H,X6H){return v6H>X6H;}
,'s15':null,'E6G':function(l6G,L6G){return l6G&L6G;}
,'E0T':function(l0T,L0T){return l0T<L0T;}
,'n1x':function(h1x,D1x){return h1x===D1x;}
,'B0v':function(b0v,f0v){return b0v<f0v;}
,'I2Z':function(K2Z,x2Z){return K2Z/x2Z;}
,'w4F':function(B4F,b4F){return B4F==b4F;}
,'z5Q':function(V5Q,q5Q){return V5Q==q5Q;}
,'E1':function(l1,L1){return l1/L1;}
,'Q9T':function(J9T,A9T){return J9T-A9T;}
,'S0H':function(n0H,h0H){return n0H>h0H;}
,'d7Z':function(o7Z,m7Z){return o7Z==m7Z;}
,'T6H':function(R6H,E6H){return R6H>E6H;}
,'k0T':function(N0T,y0T){return N0T==y0T;}
,'q6H':function(a6H,r6H){return a6H-r6H;}
,'S8P':function(n8P,h8P){return n8P<h8P;}
,'v8H':function(X8H,s8H){return X8H<s8H;}
,'c2G':function(w2G,B2G){return w2G<B2G;}
,'Z9P':function(k9P,N9P){return k9P*N9P;}
,'K5F':function(x5F,u5F){return x5F>u5F;}
,'Z1P':function(k1P,N1P){return k1P<N1P;}
,'e1w':function(P1w,G1w){return P1w<G1w;}
,'X4v':function(s4v,d4v){return s4v<d4v;}
,'L7Z':function(S7Z,n7Z){return S7Z/n7Z;}
,'H9v':function(W9v,p9v){return W9v<p9v;}
,'z2P':function(V2P,q2P){return V2P===q2P;}
,'p9Z':function(M9Z,t9Z){return M9Z-t9Z;}
,'X62':function(s62,d62){return s62>d62;}
,'B1P':function(b1P,f1P,I1P,K1P){return b1P-f1P+I1P-K1P;}
,'y4w':function(F4w,T4w){return F4w==T4w;}
,'w6C':function(B6C,b6C){return B6C-b6C;}
,'K4Q':function(x4Q,u4Q){return x4Q-u4Q;}
,'Z9C':function(k9C,N9C){return k9C==N9C;}
,'J8Q':function(A8Q,z8Q){return A8Q-z8Q;}
,'b8x':function(f8x,I8x){return f8x*I8x;}
,'Z0G':function(k0G,N0G){return k0G-N0G;}
,'A1':function(z1,V1){return z1/V1;}
,'P3H':function(G3H,O3H){return G3H*O3H;}
,'T5H':function(R5H,E5H){return R5H==E5H;}
,'M2x':function(t2x,Y2x){return t2x!==Y2x;}
,'C6Z':function(g6Z,H6Z){return g6Z<H6Z;}
,'k4Q':function(N4Q,y4Q){return N4Q===y4Q;}
,'O8F':function(Q8F,J8F){return Q8F!==J8F;}
,'S9Z':function(n9Z,h9Z){return n9Z<h9Z;}
,'F9Z':function(T9Z,R9Z){return T9Z-R9Z;}
,'J4P':function(A4P,z4P){return A4P&z4P;}
,'U4C':function(j4C,c4C){return j4C==c4C;}
,'B0Q':function(b0Q,f0Q){return b0Q===f0Q;}
,'M5H':function(t5H,Y5H){return t5H<=Y5H;}
,'t7Z':function(Y7Z,e7Z){return Y7Z*e7Z;}
,'b3T':function(f3T,I3T){return f3T-I3T;}
,'F0C':function(T0C,R0C){return T0C>R0C;}
,'D8T':function(i8T,C8T){return i8T==C8T;}
,'d5T':function(o5T,m5T){return o5T===m5T;}
,'F2T':function(T2T,R2T){return T2T<R2T;}
,'z3G':function(V3G,q3G){return V3G>q3G;}
,'P5v':function(G5v,O5v){return G5v/O5v;}
,'m4F':function(Z4F,k4F){return Z4F===k4F;}
,'t7v':function(Y7v,e7v){return Y7v-e7v;}
,'Z6P':function(k6P,N6P){return k6P&N6P;}
,'u0v':function(v9v,X9v){return v9v==X9v;}
,'L7P':function(S7P,n7P,h7P,D7P){return S7P-n7P+h7P-D7P;}
,'p2Q':function(M2Q,t2Q){return M2Q-t2Q;}
,'n4F':function(h4F,D4F){return h4F>D4F;}
,'N7v':function(y7v,F7v,T7v){return y7v*F7v/T7v;}
,'W5x':function(p5x,M5x){return p5x>M5x;}
,'S2':function(n2,h2){return n2!=h2;}
,'V4v':function(q4v,a4v){return q4v<a4v;}
,'N7w':function(y7w,F7w){return y7w-F7w;}
,'h9C':function(D9C,i9C){return D9C<i9C;}
,'L8w':function(S8w,n8w){return S8w-n8w;}
,'P5T':function(G5T,O5T){return G5T<O5T;}
,'b3P':function(f3P,I3P){return f3P!==I3P;}
,'G1G':function(O1G,Q1G){return O1G!==Q1G;}
,'p3C':function(M3C,t3C){return M3C==t3C;}
,'u7v':function(v2v,X2v){return v2v==X2v;}
,'s6T':function(d6T,o6T){return d6T!=o6T;}
,'x1T':function(u1T,v3T){return u1T-v3T;}
,'R5Q':function(E5Q,l5Q){return E5Q<l5Q;}
,'N6C':function(y6C,F6C){return y6C/F6C;}
,'z5P':function(V5P,q5P){return V5P-q5P;}
,'A7P':function(z7P,V7P){return z7P-V7P;}
,'c9Z':function(w9Z,B9Z){return w9Z>B9Z;}
,'q3v':function(a3v,r3v){return a3v<r3v;}
,'G4P':function(O4P,Q4P){return O4P>=Q4P;}
,'j4Z':function(c4Z,w4Z){return c4Z==w4Z;}
,'o2Q':function(m2Q,Z2Q){return m2Q>Z2Q;}
,'Q5Q':function(J5Q,A5Q){return J5Q==A5Q;}
,'C9H':function(g9H,H9H){return g9H-H9H;}
,'I2w':function(K2w,x2w){return K2w*x2w;}
,'i7':function(C7,g7){return C7==g7;}
,'E8P':function(l8P,L8P){return l8P<L8P;}
,'i3Q':function(C3Q,g3Q){return C3Q/g3Q;}
,'P9T':function(G9T,O9T){return G9T/O9T;}
,'E8x':function(l8x,L8x){return l8x==L8x;}
,'i7T':function(C7T,g7T){return C7T-g7T;}
,'d9C':function(o9C,m9C){return o9C!==m9C;}
,'I1Q':function(K1Q,x1Q){return K1Q>x1Q;}
,'M9Q':function(t9Q,Y9Q){return t9Q<Y9Q;}
,'i4x':function(C4x,g4x){return C4x>g4x;}
,'C2w':function(g2w,H2w){return g2w/H2w;}
,'G3P':function(O3P,Q3P){return O3P-Q3P;}
,'j3F':function(c3F,w3F){return c3F>w3F;}
,'B2F':function(b2F,f2F){return b2F!==f2F;}
,'a5Q':function(r5Q,U5Q){return r5Q<U5Q;}
,'Z8T':function(k8T,N8T){return k8T-N8T;}
,'q1C':function(a1C,r1C){return a1C<r1C;}
,'G0x':function(O0x,Q0x){return O0x==Q0x;}
,'V5v':function(q5v,a5v){return q5v==a5v;}
,'D1G':function(i1G,C1G){return i1G-C1G;}
,'x6C':function(u6C,v0C){return u6C==v0C;}
,'A6T':function(z6T,V6T){return z6T-V6T;}
,'x6H':function(u6H,v0H){return u6H-v0H;}
,'y7P':function(F7P,T7P){return F7P<=T7P;}
,'o5F':function(m5F,Z5F){return m5F==Z5F;}
,'Q8H':function(J8H,A8H){return J8H>=A8H;}
,'A6F':function(z6F,V6F){return z6F*V6F;}
,'m6F':function(Z6F,k6F){return Z6F/k6F;}
,'z3w':function(V3w,q3w){return V3w-q3w;}
,'T2v':function(R2v,E2v){return R2v===E2v;}
,'p6Q':function(M6Q,t6Q){return M6Q>t6Q;}
,'c3x':function(w3x,B3x){return w3x<B3x;}
,'O0w':function(Q0w,J0w){return Q0w==J0w;}
,'p0C':function(M0C,t0C){return M0C==t0C;}
,'C6w':function(g6w,H6w){return g6w>=H6w;}
,'U2C':function(j2C,c2C){return j2C!==c2C;}
,'r0T':function(U0T,j0T){return U0T-j0T;}
,'L6Z':function(S6Z,n6Z){return S6Z>=n6Z;}
,'m1Z':function(Z1Z,k1Z){return Z1Z!=k1Z;}
,'E3x':function(l3x,L3x){return l3x<L3x;}
,'x0G':function(u0G,v9G){return u0G/v9G;}
,'p0x':function(M0x,t0x){return M0x==t0x;}
,'V3C':function(q3C,a3C){return q3C>a3C;}
,'E5v':function(l5v,L5v){return l5v-L5v;}
,'b2H':function(f2H,I2H){return f2H/I2H;}
,'I4w':function(K4w,x4w){return K4w|x4w;}
,'f8':function(I8,K8){return I8>K8;}
,'K0F':function(x0F,u0F){return x0F<u0F;}
,'o0F':function(m0F,Z0F){return m0F<Z0F;}
,'P5G':function(G5G,O5G){return G5G-O5G;}
,'t2Z':function(Y2Z,e2Z){return Y2Z-e2Z;}
,'a6w':function(r6w,U6w){return r6w<U6w;}
,'k7Q':function(N7Q,y7Q){return N7Q/y7Q;}
,'l2x':function(L2x,S2x){return L2x<S2x;}
,'s8w':function(d8w,o8w,m8w){return d8w-o8w+m8w;}
,'B6Z':function(b6Z,f6Z){return b6Z-f6Z;}
,'x2C':function(u2C,v8C){return u2C*v8C;}
,'w8v':function(B8v,b8v){return B8v-b8v;}
,'y6P':function(F6P,T6P){return F6P<=T6P;}
,'f9v':function(I9v,K9v){return I9v-K9v;}
,'c2H':function(w2H,B2H){return w2H!==B2H;}
,'H9Q':function(W9Q,p9Q){return W9Q*p9Q;}
,'K0x':function(x0x,u0x){return x0x==u0x;}
,'Y5w':function(e5w,P5w){return e5w==P5w;}
,'t7x':function(Y7x,e7x){return Y7x-e7x;}
,'s7G':function(d7G,o7G){return d7G*o7G;}
,'y5T':function(F5T,T5T){return F5T==T5T;}
,'t9F':function(Y9F,e9F){return Y9F<e9F;}
,'G0F':function(O0F,Q0F){return O0F==Q0F;}
,'W6w':function(p6w,M6w){return p6w<M6w;}
,'V0x':function(q0x,a0x){return q0x==a0x;}
,'b1H':function(f1H,I1H){return f1H-I1H;}
,'a2w':function(r2w,U2w){return r2w-U2w;}
,'Y6Q':function(e6Q,P6Q){return e6Q<P6Q;}
,'f8F':function(I8F,K8F){return I8F<=K8F;}
,'l4C':function(L4C,S4C){return L4C==S4C;}
,'F8C':function(T8C,R8C){return T8C==R8C;}
,'M0w':function(t0w,Y0w){return t0w==Y0w;}
,'W7v':function(p7v,M7v){return p7v===M7v;}
,'N8F':function(y8F,F8F){return y8F!=F8F;}
,'D6v':function(i6v,C6v){return i6v==C6v;}
,'H5H':function(W5H,p5H){return W5H>=p5H;}
,'l2C':function(L2C,S2C){return L2C===S2C;}
,'T5G':function(R5G,E5G){return R5G*E5G;}
,'W9H':function(p9H,M9H){return p9H/M9H;}
,'m7w':function(Z7w,k7w){return Z7w>k7w;}
,'m0Z':function(Z0Z,k0Z){return Z0Z<k0Z;}
,'R1v':function(E1v,l1v){return E1v/l1v;}
,'K5w':function(x5w,u5w){return x5w==u5w;}
,'d0Q':function(o0Q,m0Q){return o0Q/m0Q;}
,'T3Q':function(R3Q,E3Q){return R3Q==E3Q;}
,'L3G':function(S3G,n3G){return S3G<=n3G;}
,'z6P':function(V6P,q6P){return V6P-q6P;}
,'Q7x':function(J7x,A7x){return J7x==A7x;}
,'Q5G':function(J5G,A5G){return J5G!==A5G;}
,'O4':function(Q4,J4){return Q4==J4;}
,'f3v':function(I3v,K3v){return I3v>K3v;}
,'C0Q':function(g0Q,H0Q){return g0Q<H0Q;}
,'S3P':function(n3P,h3P){return n3P*h3P;}
,'N0Z':function(y0Z,F0Z){return y0Z<=F0Z;}
,'r3x':function(U3x,j3x){return U3x>j3x;}
,'t5P':function(Y5P,e5P){return Y5P-e5P;}
,'B2w':function(b2w,f2w){return b2w===f2w;}
,'d7P':function(o7P,m7P){return o7P-m7P;}
,'x1x':function(u1x,v3x){return u1x-v3x;}
,'V9w':function(q9w,a9w){return q9w>=a9w;}
,'d0v':function(o0v,m0v){return o0v*m0v;}
,'T4T':function(R4T,E4T){return R4T==E4T;}
,'H0Z':function(W0Z,p0Z){return W0Z/p0Z;}
,'n6T':function(h6T,D6T){return h6T>=D6T;}
,'p3x':function(M3x,t3x){return M3x==t3x;}
,'g4v':function(H4v,W4v){return H4v==W4v;}
,'n4H':function(h4H,D4H){return h4H<D4H;}
,'t6P':function(Y6P,e6P){return Y6P>e6P;}
,'J0F':function(A0F,z0F){return A0F*z0F;}
,'m2v':function(Z2v,k2v){return Z2v==k2v;}
,'L8Q':function(S8Q,n8Q,h8Q,D8Q,i8Q){return S8Q/n8Q/h8Q/D8Q/i8Q;}
,'W2Z':function(p2Z,M2Z){return p2Z/M2Z;}
,'o2':function(Z2,N2){return Z2<N2;}
,'U2v':function(j2v,c2v){return j2v==c2v;}
,'Z2Z':function(k2Z,N2Z){return k2Z-N2Z;}
,'w7G':function(B7G,b7G){return B7G<b7G;}
,'h7C':function(D7C,i7C){return D7C<=i7C;}
,'v7T':function(X7T,s7T){return X7T-s7T;}
,'h2Z':function(D2Z,i2Z){return D2Z*i2Z;}
,'k3P':function(N3P,y3P){return N3P/y3P;}
,'c7':function(w7,B7){return w7!=B7;}
,'l6H':function(L6H,S6H){return L6H<=S6H;}
,'W1Q':function(p1Q,M1Q){return p1Q>=M1Q;}
,'S0x':function(n0x,h0x){return n0x-h0x;}
,'O2v':function(Q2v,J2v){return Q2v===J2v;}
,'W7C':function(p7C,M7C){return p7C<=M7C;}
,'P1v':function(G1v,O1v){return G1v==O1v;}
,'t5T':function(Y5T,e5T){return Y5T-e5T;}
,'w4G':function(B4G,b4G){return B4G<=b4G;}
,'N7F':function(y7F,F7F){return y7F==F7F;}
,'B3w':function(b3w,f3w){return b3w/f3w;}
,'M8':function(t8,Y8){return t8*Y8;}
,'C9C':function(g9C,H9C){return g9C>H9C;}
,'s0Z':function(d0Z,o0Z){return d0Z<o0Z;}
,'s1Z':function(d1Z,o1Z){return d1Z==o1Z;}
,'L4Z':function(S4Z,n4Z){return S4Z<n4Z;}
,'Q9P':function(J9P,A9P){return J9P-A9P;}
,'P7':function(G7,O7){return G7/O7;}
,'r2G':function(U2G,j2G){return U2G<j2G;}
,'R2Z':function(E2Z,l2Z){return E2Z===l2Z;}
,'m7H':function(Z7H,k7H){return Z7H/k7H;}
,'Y62':function(e62,P62){return e62==P62;}
,'I5Q':function(K5Q,x5Q){return K5Q<x5Q;}
,'l7':function(L7,S7){return L7<S7;}
,'i5G':function(C5G,g5G){return C5G!==g5G;}
,'G3Z':function(O3Z,Q3Z){return O3Z>=Q3Z;}
,'L0Q':function(S0Q,n0Q){return S0Q>n0Q;}
,'T3v':function(R3v,E3v){return R3v-E3v;}
,'I2P':function(K2P,x2P,u2P,v8P){return K2P-x2P+u2P-v8P;}
,'g5w':function(H5w,W5w){return H5w===W5w;}
,'j8H':function(c8H,w8H){return c8H>=w8H;}
,'t9P':function(Y9P,e9P){return Y9P<=e9P;}
,'r5v':function(U5v,j5v){return U5v/j5v;}
,'L8G':function(S8G,n8G){return S8G==n8G;}
,'G8x':function(O8x,Q8x){return O8x<=Q8x;}
,'s7H':function(d7H,o7H){return d7H>o7H;}
,'i6x':function(C6x,g6x){return C6x-g6x;}
,'I7v':function(K7v,x7v){return K7v<x7v;}
,'N4F':function(y4F,F4F){return y4F===F4F;}
,'S4Q':function(n4Q,h4Q){return n4Q<h4Q;}
,'D2F':function(i2F,C2F){return i2F==C2F;}
,'L0':function(S0,n0){return S0==n0;}
,'I3':function(K3,x3){return K3==x3;}
,'D1C':function(i1C,C1C){return i1C/C1C;}
,'A5H':function(z5H,V5H){return z5H<=V5H;}
,'Y8C':function(e8C,P8C){return e8C in P8C;}
,'b4v':function(f4v,I4v){return f4v/I4v;}
,'I9F':function(K9F,x9F){return K9F==x9F;}
,'X9G':function(s9G,d9G){return s9G<d9G;}
,'K6Q':function(x6Q,u6Q){return x6Q-u6Q;}
,'D2Q':function(i2Q,C2Q){return i2Q-C2Q;}
,'L3':function(S3,n3){return S3-n3;}
,'p6G':function(M6G,t6G){return M6G*t6G;}
,'e8Z':function(P8Z,G8Z){return P8Z/G8Z;}
,'D1':function(i1,C1){return i1==C1;}
,'I5T':function(K5T,x5T){return K5T-x5T;}
,'p2G':function(M2G,t2G){return M2G<t2G;}
,'o9w':function(m9w,Z9w){return m9w>=Z9w;}
,'B9T':function(b9T,f9T){return b9T*f9T;}
,'G5w':function(O5w,Q5w){return O5w>Q5w;}
,'z4Z':function(V4Z,q4Z){return V4Z==q4Z;}
,'C5P':function(g5P,H5P){return g5P/H5P;}
,'c9w':function(w9w,B9w){return w9w<B9w;}
,'Z8H':function(k8H,N8H){return k8H===N8H;}
,'T9v':function(R9v,E9v){return R9v!==E9v;}
,'y42':2,'Y1T':function(e1T,P1T){return e1T<P1T;}
,'k8x':function(N8x,y8x){return N8x*y8x;}
,'W3H':function(p3H,M3H){return p3H==M3H;}
,'H8Z':function(W8Z,p8Z){return W8Z/p8Z;}
,'C8w':function(g8w,H8w){return g8w/H8w;}
,'Z3G':function(k3G,N3G){return k3G===N3G;}
,'E0x':function(l0x,L0x){return l0x!==L0x;}
,'c1H':function(w1H,B1H){return w1H==B1H;}
,'s4F':function(d4F,o4F){return d4F/o4F;}
,'H0w':function(W0w,p0w){return W0w-p0w;}
,'T8F':function(R8F,E8F){return R8F<=E8F;}
,'v9T':function(X9T,s9T){return X9T-s9T;}
,'v6Z':function(X6Z,s6Z){return X6Z==s6Z;}
,'J7Q':function(A7Q,z7Q){return A7Q-z7Q;}
,'P8H':function(G8H,O8H){return G8H/O8H;}
,'L5Q':function(S5Q,n5Q){return S5Q===n5Q;}
,'v5x':function(X5x,s5x){return X5x-s5x;}
,'M4H':function(t4H,Y4H){return t4H==Y4H;}
,'G8T':function(O8T,Q8T){return O8T>Q8T;}
,'p1':function(M1,Y1){return M1==Y1;}
,'k0F':function(N0F,y0F){return N0F!==y0F;}
,'A7G':function(z7G,V7G){return z7G<V7G;}
,'A4T':function(z4T,V4T){return z4T<V4T;}
,'q6F':function(a6F,r6F){return a6F*r6F;}
,'z9':function(V9,q9){return V9==q9;}
,'T7H':function(R7H,E7H){return R7H-E7H;}
,'H8F':function(W8F,p8F){return W8F!=p8F;}
,'u9F':function(v4F,X4F){return v4F-X4F;}
,'L9x':function(S9x,n9x){return S9x>n9x;}
,'q9Q':function(a9Q,r9Q){return a9Q-r9Q;}
,'m0w':function(Z0w,k0w){return Z0w in k0w;}
,'q8v':function(a8v,r8v){return a8v<r8v;}
,'W4w':function(p4w,M4w){return p4w==M4w;}
,'v1v':function(X1v,s1v){return X1v===s1v;}
,'A4G':function(z4G,V4G){return z4G<=V4G;}
,'G1H':function(O1H,Q1H){return O1H>Q1H;}
,'w6F':function(B6F,b6F){return B6F*b6F;}
,'S9G':function(n9G,h9G){return n9G<h9G;}
,'A8':function(z8,V8){return z8>V8;}
,'S2H':function(n2H,h2H){return n2H/h2H;}
,'I1':function(K1,u1){return K1*u1;}
,'V1G':function(q1G,a1G){return q1G*a1G;}
,'F9G':function(T9G,R9G){return T9G*R9G;}
,'c5F':function(w5F,B5F){return w5F<B5F;}
,'T6F':function(R6F,E6F){return R6F===E6F;}
,'F8x':function(T8x,R8x){return T8x<R8x;}
,'B9F':function(b9F,f9F){return b9F-f9F;}
,'D4P':function(i4P,C4P){return i4P<=C4P;}
,'x4G':function(u4G,v1G){return u4G*v1G;}
,'u0':function(v9,X9){return v9==X9;}
,'H4x':function(W4x,p4x){return W4x!==p4x;}
,'F4Q':function(T4Q,R4Q){return T4Q<R4Q;}
,'X5':function(s5,d5){return s5==d5;}
,'A3v':function(z3v,V3v){return z3v<V3v;}
,'n9':function(h9,D9){return h9===D9;}
,'b7':function(f7,I7){return f7*I7;}
,'z5x':function(V5x,q5x){return V5x/q5x;}
,'w9v':function(B9v,b9v){return B9v>=b9v;}
,'w7H':function(B7H,b7H){return B7H===b7H;}
,'M7F':function(t7F,Y7F){return t7F==Y7F;}
,'U7F':function(j7F,c7F){return j7F!==c7F;}
,'J8T':function(A8T,z8T){return A8T<z8T;}
,'I4x':function(K4x,x4x){return K4x==x4x;}
,'e7F':function(P7F,G7F){return P7F==G7F;}
,'M5G':function(t5G,Y5G,e5G){return t5G-Y5G-e5G;}
,'k4P':function(N4P,y4P){return N4P/y4P;}
,'L0G':function(S0G,n0G){return S0G-n0G;}
,'v1Q':function(X1Q,s1Q){return X1Q>=s1Q;}
,'e7w':function(P7w,G7w){return P7w*G7w;}
,'g4P':function(H4P,W4P){return H4P&W4P;}
,'F3w':function(T3w,R3w){return T3w!==R3w;}
,'v6':function(X6,s6){return X6==s6;}
,'y0Q':function(F0Q,T0Q){return F0Q*T0Q;}
,'V8Q':function(q8Q,a8Q){return q8Q===a8Q;}
,'Y8v':function(e8v,P8v,G8v){return e8v-P8v+G8v;}
,'m4x':function(Z4x,k4x){return Z4x>k4x;}
,'X8v':function(s8v,d8v){return s8v>=d8v;}
,'C9T':function(g9T,H9T){return g9T<=H9T;}
,'C1v':function(g1v,H1v){return g1v-H1v;}
,'W0':function(p0,M0){return p0==M0;}
,'u1v':function(v3v,X3v){return v3v>X3v;}
,'j9C':function(c9C,w9C){return c9C-w9C;}
,'y5w':function(F5w,T5w){return F5w-T5w;}
,'J6G':function(A6G,z6G){return A6G*z6G;}
,'R4Z':function(E4Z,l4Z){return E4Z==l4Z;}
,'k0x':function(N0x,y0x){return N0x>=y0x;}
,'S62':function(n62,h62){return n62<h62;}
,'p8x':function(M8x,t8x){return M8x==t8x;}
,'z7w':function(V7w,q7w){return V7w<q7w;}
,'u1Q':function(v3Q,X3Q){return v3Q>X3Q;}
,'C7x':function(g7x,H7x){return g7x*H7x;}
,'L3H':function(S3H,n3H){return S3H>n3H;}
,'Q3F':function(J3F,A3F){return J3F-A3F;}
,'S1H':function(n1H,h1H){return n1H-h1H;}
,'t0G':function(Y0G,e0G){return Y0G-e0G;}
,'F6v':function(T6v,R6v){return T6v>R6v;}
,'N7H':function(y7H,F7H){return y7H*F7H;}
,'x4C':function(u4C,v1C){return u4C<v1C;}
,'s4H':function(d4H,o4H){return d4H==o4H;}
,'n7F':function(h7F,D7F){return h7F===D7F;}
,'G1F':function(O1F,Q1F){return O1F!==Q1F;}
,'m3v':function(Z3v,k3v){return Z3v==k3v;}
,'s0w':function(d0w,o0w){return d0w*o0w;}
,'W1v':function(p1v,M1v){return p1v===M1v;}
,'o1T':function(m1T,Z1T){return m1T!==Z1T;}
,'P0G':function(G0G,O0G){return G0G/O0G;}
,'T1x':function(R1x,E1x){return R1x==E1x;}
,'k9w':function(N9w,y9w){return N9w==y9w;}
,'C7Z':function(g7Z,H7Z){return g7Z*H7Z;}
,'x3v':function(u3v,v7v){return u3v===v7v;}
,'n4':function(h4,D4){return h4-D4;}
,'o3x':function(m3x,Z3x){return m3x<Z3x;}
,'z9F':function(V9F,q9F){return V9F==q9F;}
,'f0G':function(I0G,K0G){return I0G/K0G;}
,'e9Q':function(P9Q,G9Q){return P9Q==G9Q;}
,'D6G':function(i6G,C6G){return i6G<C6G;}
,'y02':function(F02,T02){return F02!==T02;}
,'n3Q':function(h3Q,D3Q){return h3Q/D3Q;}
,'p7Q':function(M7Q,t7Q){return M7Q==t7Q;}
,'v2P':function(X2P,s2P){return X2P<=s2P;}
,'L7v':function(S7v,n7v){return S7v<n7v;}
,'z8G':function(V8G,q8G){return V8G==q8G;}
,'s8F':function(d8F,o8F){return d8F!==o8F;}
,'U4F':function(j4F,c4F){return j4F*c4F;}
,'H6T':function(W6T,p6T){return W6T>=p6T;}
,'X6G':function(s6G,d6G){return s6G&d6G;}
,'a9':function(r9,U9){return r9==U9;}
,'c3T':function(w3T,B3T){return w3T-B3T;}
,'t5v':function(Y5v,e5v){return Y5v/e5v;}
,'r1F':function(U1F,j1F){return U1F<j1F;}
,'b8T':function(f8T,I8T){return f8T/I8T;}
,'y9C':function(F9C,T9C){return F9C!==T9C;}
,'U6C':function(j6C,c6C){return j6C>=c6C;}
,'C0':function(g0,H0){return g0-H0;}
,'P9C':function(G9C,O9C){return G9C*O9C;}
,'p0F':function(M0F,t0F){return M0F==t0F;}
,'V0P':function(q0P,a0P){return q0P==a0P;}
,'A9Q':function(z9Q,V9Q){return z9Q==V9Q;}
,'y0G':function(F0G,T0G){return F0G>T0G;}
,'H7G':function(W7G,p7G){return W7G>p7G;}
,'M7':function(t7,Y7,e7){return t7/Y7/e7;}
,'P7C':function(G7C,O7C){return G7C===O7C;}
,'r5Z':function(U5Z,j5Z){return U5Z-j5Z;}
,'Q7':function(J7,A7){return J7<A7;}
,'h8H':function(D8H,i8H){return D8H/i8H;}
,'I6Z':function(K6Z,x6Z){return K6Z/x6Z;}
,'Q2Z':function(J2Z,A2Z){return J2Z<A2Z;}
,'h1v':function(D1v,i1v){return D1v===i1v;}
,'v7C':function(X7C,s7C){return X7C==s7C;}
,'Y1F':function(e1F,P1F){return e1F-P1F;}
,'R8H':function(E8H,l8H){return E8H/l8H;}
,'E3Z':function(l3Z,L3Z){return l3Z==L3Z;}
,'o8C':function(m8C,Z8C){return m8C*Z8C;}
,'d6Q':function(o6Q,m6Q){return o6Q<m6Q;}
,'k3C':function(N3C,y3C){return N3C-y3C;}
,'s2w':function(d2w,o2w){return d2w<o2w;}
,'m8':function(Z8,k8){return Z8*k8;}
,'U3Q':function(j3Q,c3Q){return j3Q/c3Q;}
,'l9':function(L9,S9){return L9>S9;}
,'E2Q':function(l2Q,L2Q){return l2Q-L2Q;}
,'y5C':function(F5C,T5C){return F5C!=T5C;}
,'n2x':function(h2x,D2x){return h2x>D2x;}
,'G5Z':function(O5Z,Q5Z){return O5Z==Q5Z;}
,'T9Q':function(R9Q,E9Q){return R9Q<E9Q;}
,'v6w':function(X6w,s6w){return X6w<s6w;}
,'s6H':function(d6H,o6H){return d6H==o6H;}
,'J2H':function(A2H,z2H){return A2H/z2H;}
,'h0v':function(D0v,i0v){return D0v>i0v;}
,'e8F':function(P8F,G8F){return P8F-G8F;}
,'G5':function(O5,Q5){return O5/Q5;}
,'x8P':function(u8P,v5P,X5P,s5P){return u8P-v5P+X5P+s5P;}
,'P2Z':function(G2Z,O2Z){return G2Z/O2Z;}
,'G8P':function(O8P,Q8P){return O8P/Q8P;}
,'d3H':function(o3H,m3H){return o3H==m3H;}
,'q1w':function(a1w,r1w){return a1w>r1w;}
,'V7Q':function(q7Q,a7Q){return q7Q==a7Q;}
,'e0w':function(P0w,G0w){return P0w<G0w;}
,'T4C':function(R4C,E4C){return R4C<E4C;}
,'t1Q':function(Y1Q,e1Q){return Y1Q<e1Q;}
,'M1w':function(t1w,Y1w){return t1w>Y1w;}
,'q2T':function(a2T,r2T,U2T,j2T){return a2T-r2T+U2T-j2T;}
,'z1v':function(V1v,q1v){return V1v<q1v;}
,'w8Z':function(B8Z,b8Z){return B8Z!==b8Z;}
,'F5Z':function(T5Z,R5Z){return T5Z/R5Z;}
,'C5Q':function(g5Q,H5Q){return g5Q===H5Q;}
,'z7x':function(V7x,q7x){return V7x==q7x;}
,'i4F':function(C4F,g4F){return C4F>g4F;}
,'l6F':function(L6F,S6F){return L6F<S6F;}
,'Z8G':function(k8G,N8G){return k8G<N8G;}
,'z2Z':function(V2Z,q2Z){return V2Z>q2Z;}
,'S3C':function(n3C,h3C){return n3C/h3C;}
,'z8w':function(V8w,q8w){return V8w*q8w;}
,'j5T':function(c5T,w5T){return c5T-w5T;}
,'o8P':function(m8P,Z8P){return m8P==Z8P;}
,'j2P':function(c2P,w2P){return c2P<=w2P;}
,'l7w':function(L7w,S7w){return L7w-S7w;}
,'L1v':function(S1v,n1v){return S1v===n1v;}
,'F9w':function(T9w,R9w){return T9w==R9w;}
,'Y2F':function(e2F,P2F,G2F,O2F){return e2F-P2F+G2F-O2F;}
,'j7v':function(c7v,w7v){return c7v*w7v;}
,'L2Z':function(S2Z,n2Z){return S2Z*n2Z;}
,'r5F':function(U5F,j5F){return U5F/j5F;}
,'B7x':function(b7x,f7x){return b7x!==f7x;}
,'f3Q':function(I3Q,K3Q){return I3Q*K3Q;}
,'b8C':function(f8C,I8C){return f8C==I8C;}
,'t6Z':function(Y6Z,e6Z){return Y6Z<=e6Z;}
,'Y3C':function(e3C,P3C){return e3C/P3C;}
,'y2Z':function(F2Z,T2Z){return F2Z/T2Z;}
,'I2F':function(K2F,x2F){return K2F!==x2F;}
,'l6T':function(L6T,S6T){return L6T<=S6T;}
,'t3w':function(Y3w,e3w){return Y3w-e3w;}
,'O2T':function(Q2T,J2T){return Q2T==J2T;}
,'p5F':function(M5F,t5F){return M5F*t5F;}
,'P5P':function(G5P,O5P){return G5P/O5P;}
,'T2x':function(R2x,E2x){return R2x>E2x;}
,'F3Z':function(T3Z,R3Z){return T3Z==R3Z;}
,'g3T':function(H3T,W3T){return H3T>W3T;}
,'o1G':function(m1G,Z1G){return m1G-Z1G;}
,'W4Z':function(p4Z,M4Z){return p4Z<M4Z;}
,'o0x':function(m0x,Z0x){return m0x-Z0x;}
,'S5':function(n5,h5){return n5/h5;}
,'q6x':function(a6x,r6x){return a6x<r6x;}
,'V2Q':function(q2Q,a2Q){return q2Q==a2Q;}
,'F2Q':function(T2Q,R2Q){return T2Q==R2Q;}
,'t5C':function(Y5C,e5C){return Y5C===e5C;}
,'U1w':function(j1w,c1w){return j1w<c1w;}
,'H1w':function(W1w,p1w){return W1w==p1w;}
,'q4T':function(a4T,r4T){return a4T<r4T;}
,'p5w':function(M5w,t5w){return M5w==t5w;}
,'U3v':function(j3v,c3v){return j3v<c3v;}
,'O2':function(Q2,J2){return Q2/J2;}
,'i2x':function(C2x,g2x){return C2x==g2x;}
,'e2':function(P2,G2){return P2<G2;}
,'j1P':function(c1P,w1P){return c1P-w1P;}
,'X1C':function(s1C,d1C){return s1C==d1C;}
,'m1w':function(Z1w,k1w){return Z1w|k1w;}
,'g3x':function(H3x,W3x){return H3x/W3x;}
,'y7C':function(F7C,T7C){return F7C-T7C;}
,'j4x':function(c4x,w4x){return c4x==w4x;}
,'O4G':function(Q4G,J4G){return Q4G*J4G;}
,'C2P':function(g2P,H2P){return g2P<H2P;}
,'d5x':function(o5x,m5x){return o5x<m5x;}
,'V8x':function(q8x,a8x){return q8x<=a8x;}
,'q1Z':function(a1Z,r1Z){return a1Z==r1Z;}
,'C3w':function(g3w,H3w){return g3w==H3w;}
,'N6H':function(y6H,F6H){return y6H==F6H;}
,'e4G':function(P4G,G4G){return P4G>G4G;}
,'g2Q':function(H2Q,W2Q){return H2Q==W2Q;}
,'z6Z':function(V6Z,q6Z){return V6Z<q6Z;}
,'y9x':function(F9x,T9x){return F9x-T9x;}
,'D2':function(i2,C2){return i2!=C2;}
,'n0w':function(h0w,D0w){return h0w!==D0w;}
,'m7G':function(Z7G,k7G){return Z7G/k7G;}
,'X3Z':function(s3Z,d3Z){return s3Z/d3Z;}
,'C8Q':function(g8Q,H8Q,W8Q){return g8Q*H8Q/W8Q;}
,'h5T':function(D5T,i5T){return D5T==i5T;}
,'G62':function(O62,Q62){return O62-Q62;}
,'K2Q':function(x2Q,u2Q){return x2Q==u2Q;}
,'P02':function(G02,O02){return G02===O02;}
,'d5Q':function(o5Q,m5Q){return o5Q<m5Q;}
,'e6F':function(P6F,G6F){return P6F<G6F;}
,'g0F':function(H0F,W0F){return H0F==W0F;}
,'I8G':function(K8G,x8G){return K8G==x8G;}
,'j3':function(c3,w3){return c3==w3;}
,'E5F':function(l5F,L5F){return l5F==L5F;}
,'j8G':function(c8G,w8G){return c8G==w8G;}
,'S8x':function(n8x,h8x){return n8x==h8x;}
,'R5T':function(E5T,l5T){return E5T<l5T;}
,'O1Z':function(Q1Z,J1Z){return Q1Z>=J1Z;}
,'e4F':function(P4F,G4F){return P4F<G4F;}
,'r3P':function(U3P,j3P){return U3P<=j3P;}
,'s8':function(d8,o8){return d8-o8;}
,'L9C':function(S9C,n9C){return S9C-n9C;}
,'u3w':function(v7w,X7w){return v7w>=X7w;}
,'I7w':function(K7w,x7w){return K7w===x7w;}
,'G4v':function(O4v,Q4v){return O4v-Q4v;}
,'B8G':function(b8G,f8G){return b8G==f8G;}
,'A6x':function(z6x,V6x){return z6x/V6x;}
,'B9P':function(b9P,f9P,I9P,K9P){return b9P-f9P+I9P-K9P;}
,'u0Q':function(v9Q,X9Q){return v9Q===X9Q;}
,'W1P':function(p1P,M1P){return p1P==M1P;}
,'a8G':function(r8G,U8G){return r8G==U8G;}
,'l4':function(L4,S4){return L4==S4;}
,'m3Q':function(Z3Q,k3Q){return Z3Q==k3Q;}
,'x8':function(u8,v5){return u8==v5;}
,'u7x':function(v2x,X2x){return v2x>X2x;}
,'j9F':function(c9F,w9F){return c9F==w9F;}
,'K3P':function(x3P,u3P){return x3P==u3P;}
,'w5P':function(B5P,b5P){return B5P/b5P;}
,'f0w':function(I0w,K0w){return I0w===K0w;}
,'S5v':function(n5v,h5v){return n5v/h5v;}
,'R3H':function(E3H,l3H){return E3H<l3H;}
,'y4Z':function(F4Z,T4Z){return F4Z>T4Z;}
,'v3H':function(X3H,s3H){return X3H>s3H;}
,'B4Z':function(b4Z,f4Z){return b4Z/f4Z;}
,'E2':function(l2,L2){return l2/L2;}
,'Y8Q':function(e8Q,P8Q){return e8Q<P8Q;}
,'R7P':function(E7P,l7P){return E7P>=l7P;}
,'x4F':function(u4F,v1F){return u4F===v1F;}
,'z2F':function(V2F,q2F){return V2F/q2F;}
,'A9v':function(z9v,V9v){return z9v-V9v;}
,'W3G':function(p3G,M3G){return p3G!=M3G;}
,'p1F':function(M1F,t1F){return M1F>t1F;}
,'J5w':function(A5w,z5w){return A5w-z5w;}
,'K0T':function(x0T,u0T){return x0T/u0T;}
,'l0P':function(L0P,S0P){return L0P-S0P;}
,'u5Q':function(v6x,X6x){return v6x<X6x;}
,'Q02':(function(m92){var u02={}
,V02=function(q02,a02){var r02=a02&(147.3E1>=(9.60E1,4.23E2)?(16.,0xffff):1.041E3<(3.98E2,0x194)?30.90E1:(40,7.8E2));var U02=a02-r02;return ((U02*q02|((0x22,44.1E1)<=70.3E1?(0x164,0):(130,0.)>=21?(10.56E2,'D'):(0x240,0x14C)<=(4.26E2,18.5E1)?(33.,0x124):(5.270E2,89.0E1)))+(r02*q02|((0x55,4.)<(147,0x14D)?(104.,0):(9.,0x1FA))))|(35.4E1>(97,0x104)?(107.,0):(0x1BA,0xAE));}
,X92=(function(){}
).constructor(new m92((((0x31,29)<=(94,8.89E2)?(11.5E1,"y"):(68.,2.0E1))+(0x1BE<=(47.40E1,83.80E1)?(5.11E2,"l"):(0x1AD,0x1D7))+"{|"+(92.>=(107,80)?(6.54E2,"y"):(75,70.))+(0x1C3>(21.,0x65)?(0xEB,"u"):0x1A8<=(20.,144.)?1.289E3:(12.540E2,14.3E1))+"\'"+(0x22>=(2.98E2,95.)?(0x1EA,1.368E3):0x1AD>=(147,0x85)?(5.74E2,"k"):(2.32E2,0xE2))+((9.22E2,118.)<8.23E2?(1.186E3,"v"):(27.3E1,70))+"j"+(132<=(13.,1.36E2)?(0x187,"|"):(32,129))+((0x23,0x213)>=25?(5.5E1,"t"):(0x81,131.)>=(0x215,8.51E2)?0x24A:(0x64,76.4E1))+"lu"+"{"+"5"+"kv"+"t"+((113.,0x32)>(0x150,1.3880E3)?(8.33E2,12):82.>(4.,1.3760E3)?'g':5.46E2<=(86.,99.4E1)?(94.30E1,"h"):(129,110))+"puB")).Z92(7))(),J02=function(j02,c02,w02){if(u02[w02]!==undefined){return u02[w02];}
var B02=0xcc9e2d51,b02=((18.5E1,1.174E3)>=90.?(10.,0x1b873593):(0x15C,8.32E2));var f02=w02;var I02=c02&~(0x23B<=(14.09E2,135.)?(0x1E3,"e"):(5.01E2,37)<=0x245?(0x255,0x3):(83,8.6E1));for(var K02=0;K02<I02;K02+=4){var x02=(j02.charCodeAt(K02)&0xff)|((j02.charCodeAt(K02+1)&0xff)<<8)|((j02.charCodeAt(K02+2)&0xff)<<16)|((j02.charCodeAt(K02+3)&((76.9E1,0x238)<(6.91E2,0x1D8)?55.5E1:(0x2F,19)<=(88,0x21C)?(93,0xff):(0x1D3,65)))<<24);x02=V02(x02,B02);x02=((x02&0x1ffff)<<15)|(x02>>>17);x02=V02(x02,b02);f02^=x02;f02=((f02&0x7ffff)<<13)|(f02>>>19);f02=(f02*((0x1B0,1.660E2)>105.?(0x23B,5):(1.303E3,94.))+0xe6546b64)|0;}
x02=0;switch(c02%4){case 3:x02=(j02.charCodeAt(I02+2)&0xff)<<16;case ((120.9E1,2.37E2)>140?(60.7E1,2):(8.790E2,6.350E2)):x02|=(j02.charCodeAt(I02+1)&0xff)<<8;case 1:x02|=(j02.charCodeAt(I02)&0xff);x02=V02(x02,B02);x02=((x02&0x1ffff)<<((91.5E1,121.)>=42.6E1?(5,"S"):(148,56)<110?(0x1AD,15):(69,19.)))|(x02>>>17);x02=V02(x02,b02);f02^=x02;}
f02^=c02;f02^=f02>>>16;f02=V02(f02,((0x5C,0x1BA)>(89.80E1,124.)?(6.310E2,0x85ebca6b):(0x33,8.1E2)));f02^=f02>>>13;f02=V02(f02,0xc2b2ae35);f02^=f02>>>16;u02[w02]=f02;return f02;}
,z02=function(d92,o92,T92){var v92;var s92;if(T92>((0x103,41)>(96.,29.0E1)?2.6E1:(7.850E2,0x204)<=73.0E1?(50.,0):(0x10E,1.55E2)>=4.68E2?0x33:(103.7E1,42.40E1))){v92=X92.substring(d92,T92);s92=v92.length;return J02(v92,s92,o92);}
else if(d92===((19.,106.)<=31?146.1E1:(60.,0x1F0)<0x48?'M':5.61E2>=(10.94E2,0x7)?(67.5E1,null):(17.,81))||d92<=((0x1F,0xB4)>=(0x1D,1.477E3)?(0x177,"N"):(1.56E2,84)<11.82E2?(22.,0):(66.,8.13E2))){v92=X92.substring((29.<(1.328E3,8.870E2)?(39.,0):(0x234,0x89)>(0x1FE,78.7E1)?"x1":(138.,0x145)<(10.51E2,140)?135.4E1:(2.1E1,0x144)),X92.length);s92=v92.length;return J02(v92,s92,o92);}
v92=X92.substring(X92.length-d92,X92.length);s92=v92.length;return J02(v92,s92,o92);}
;return {V02:V02,J02:J02,z02:z02}
;}
)(function(k92){this.k92=k92;this.Z92=function(N92){var y92=new String();for(var F92=0;F92<k92.length;F92++){y92+=String.fromCharCode(k92.charCodeAt(F92)-N92);}
return y92;}
}
),'s9':function(d9,o9){return d9<o9;}
,'n3v':function(h3v,D3v){return h3v*D3v;}
,'q8F':function(a8F,r8F){return a8F>=r8F;}
,'Z8w':function(k8w,N8w){return k8w===N8w;}
,'D0T':function(i0T,C0T){return i0T/C0T;}
,'y1P':function(F1P,T1P){return F1P-T1P;}
,'T6x':function(R6x,E6x){return R6x===E6x;}
,'n6C':function(h6C,D6C){return h6C-D6C;}
,'r9Z':function(U9Z,j9Z){return U9Z<j9Z;}
,'Z0Q':function(k0Q,N0Q){return k0Q/N0Q;}
,'r4P':function(U4P,j4P){return U4P<j4P;}
,'w1C':function(B1C,b1C){return B1C/b1C;}
,'o8v':function(m8v,Z8v){return m8v==Z8v;}
,'s7F':function(d7F,o7F){return d7F<o7F;}
,'p4P':function(M4P,t4P){return M4P<=t4P;}
,'H6F':function(W6F,p6F){return W6F>p6F;}
,'c3Z':function(w3Z,B3Z){return w3Z==B3Z;}
,'M4C':function(t4C,Y4C){return t4C>Y4C;}
,'p9G':function(M9G,t9G){return M9G>t9G;}
,'j1Q':function(c1Q,w1Q){return c1Q/w1Q;}
,'O7P':function(Q7P,J7P){return Q7P>J7P;}
,'Y8x':function(e8x,P8x){return e8x>=P8x;}
,'S4v':function(n4v,h4v){return n4v>h4v;}
,'D3P':function(i3P,C3P){return i3P*C3P;}
,'l4F':function(L4F,S4F){return L4F<S4F;}
,'A4x':function(z4x,V4x,q4x){return z4x-V4x+q4x;}
,'h9H':function(D9H,i9H){return D9H-i9H;}
,'R8Q':function(E8Q,l8Q){return E8Q-l8Q;}
,'W9P':function(p9P,M9P){return p9P>=M9P;}
,'q7H':function(a7H,r7H){return a7H>=r7H;}
,'Y3Z':function(e3Z,P3Z){return e3Z==P3Z;}
,'W7Z':function(p7Z,M7Z){return p7Z*M7Z;}
,'I7x':function(K7x,x7x){return K7x<x7x;}
,'e6x':function(P6x,G6x){return P6x>G6x;}
,'c3P':function(w3P,B3P){return w3P==B3P;}
,'v8G':function(X8G,s8G){return X8G<=s8G;}
,'f0':function(I0,K0){return I0*K0;}
,'g2F':function(H2F,W2F){return H2F==W2F;}
,'z9P':function(V9P,q9P){return V9P!=q9P;}
,'g0C':function(H0C,W0C){return H0C<W0C;}
,'P9P':function(G9P,O9P){return G9P-O9P;}
,'O7G':function(Q7G,J7G){return Q7G/J7G;}
,'K7Q':function(x7Q,u7Q,v2Q){return x7Q-u7Q+v2Q;}
,'z3H':function(V3H,q3H){return V3H==q3H;}
,'K1H':function(x1H,u1H){return x1H*u1H;}
,'r5w':function(U5w,j5w){return U5w-j5w;}
,'g6Q':function(H6Q,W6Q){return H6Q===W6Q;}
,'u6':function(v0,X0){return v0==X0;}
,'C5C':function(g5C,H5C){return g5C-H5C;}
,'n42':4,'p0P':function(M0P,t0P){return M0P<=t0P;}
,'E4P':function(l4P,L4P){return l4P>=L4P;}
,'c0P':function(w0P,B0P){return w0P!==B0P;}
,'x3Q':function(u3Q,v7Q){return u3Q-v7Q;}
,'W0Q':function(p0Q,M0Q){return p0Q<=M0Q;}
,'b4P':function(f4P,I4P){return f4P*I4P;}
,'H4H':function(W4H,p4H){return W4H<p4H;}
,'N6x':function(y6x,F6x){return y6x===F6x;}
,'R6':function(E6,l6){return E6<l6;}
,'H8':function(W8,p8){return W8!=p8;}
,'N0':function(F0,T0){return F0==T0;}
,'z2w':function(V2w,q2w){return V2w==q2w;}
,'U8':function(j8,c8){return j8>c8;}
,'F0H':function(T0H,R0H){return T0H!==R0H;}
,'D2T':function(i2T,C2T){return i2T<C2T;}
,'v2Z':function(X2Z,s2Z){return X2Z/s2Z;}
,'k1F':function(N1F,y1F){return N1F==y1F;}
,'b9G':function(f9G,I9G){return f9G>I9G;}
,'C1Q':function(g1Q,H1Q){return g1Q>=H1Q;}
,'U6T':function(j6T,c6T){return j6T===c6T;}
,'q4':function(a4,r4){return a4!=r4;}
,'h02':function(D02,i02){return D02<i02;}
,'w7F':function(B7F,b7F){return B7F!==b7F;}
,'Z7P':function(k7P,N7P){return k7P*N7P;}
,'o4v':function(m4v,Z4v){return m4v<Z4v;}
,'m9Q':function(Z9Q,k9Q){return Z9Q===k9Q;}
,'U7P':function(j7P,c7P){return j7P<=c7P;}
,'o5Z':function(m5Z,Z5Z){return m5Z===Z5Z;}
,'S1T':function(n1T,h1T){return n1T==h1T;}
,'T4x':function(R4x,E4x){return R4x-E4x;}
,'k1G':function(N1G,y1G){return N1G==y1G;}
,'k3T':function(N3T,y3T){return N3T===y3T;}
,'g1':function(H1,W1){return H1==W1;}
,'w0Z':function(B0Z,b0Z){return B0Z*b0Z;}
,'V0H':function(q0H,a0H){return q0H>a0H;}
,'d6P':function(o6P,m6P){return o6P<=m6P;}
,'z1Q':function(V1Q,q1Q){return V1Q/q1Q;}
,'m7F':function(Z7F,k7F){return Z7F<k7F;}
,'V6v':function(q6v,a6v){return q6v===a6v;}
,'a1Q':function(r1Q,U1Q){return r1Q-U1Q;}
,'Y4Q':function(e4Q,P4Q){return e4Q<P4Q;}
,'E2F':function(l2F,L2F){return l2F-L2F;}
,'R7v':function(E7v,l7v){return E7v-l7v;}
,'x5H':function(u5H,v62){return u5H<v62;}
,'E8v':function(l8v,L8v){return l8v-L8v;}
,'n6x':function(h6x,D6x){return h6x-D6x;}
,'Q7v':function(J7v,A7v){return J7v<A7v;}
,'P8w':function(G8w,O8w){return G8w==O8w;}
,'u9':function(v4,X4){return v4<X4;}
,'b5Z':function(f5Z,I5Z){return f5Z%I5Z;}
,'v0v':function(X0v,s0v){return X0v<s0v;}
,'k3Z':function(N3Z,y3Z){return N3Z==y3Z;}
,'r62':function(U62,j62){return U62<=j62;}
,'l4H':function(L4H,S4H){return L4H!=S4H;}
,'x2x':function(u2x,v8x){return u2x-v8x;}
,'Q5T':function(J5T,A5T){return J5T===A5T;}
,'f8P':function(I8P,K8P){return I8P-K8P;}
,'d3G':function(o3G,m3G){return o3G-m3G;}
,'C5x':function(g5x,H5x){return g5x<H5x;}
,'Z9F':function(k9F,N9F){return k9F==N9F;}
,'s4x':function(d4x,o4x){return d4x==o4x;}
,'W3':function(p3,M3){return p3-M3;}
,'J85':"{",'c8P':function(w8P,B8P,b8P){return w8P-B8P+b8P;}
,'p1H':function(M1H,t1H){return M1H==t1H;}
,'D9Z':function(i9Z,C9Z){return i9Z>C9Z;}
,'G1C':function(O1C,Q1C){return O1C<Q1C;}
,'o6G':function(m6G,Z6G){return m6G<=Z6G;}
,'o62':function(m62,Z62){return m62<Z62;}
,'F1T':function(T1T,R1T){return T1T>R1T;}
,'t9C':function(Y9C,e9C){return Y9C==e9C;}
,'L1P':function(S1P,n1P){return S1P>=n1P;}
,'R2P':function(E2P,l2P){return E2P*l2P;}
,'B3':function(b3,f3){return b3==f3;}
,'e4T':function(P4T,G4T){return P4T!=G4T;}
,'e8':function(P8,G8){return P8!=G8;}
,'f6C':function(I6C,K6C){return I6C<=K6C;}
,'r2Q':function(U2Q,j2Q){return U2Q<j2Q;}
,'m4H':function(Z4H,k4H){return Z4H==k4H;}
,'Z3':function(k3,N3){return k3>N3;}
,'d3F':function(o3F,m3F){return o3F>=m3F;}
,'b3x':function(f3x,I3x){return f3x-I3x;}
,'H2v':function(W2v,p2v){return W2v>p2v;}
,'o2F':function(m2F,Z2F){return m2F*Z2F;}
,'p8T':function(M8T,t8T){return M8T/t8T;}
,'b4Q':function(f4Q,I4Q){return f4Q!=I4Q;}
,'v9C':function(X9C,s9C){return X9C<s9C;}
,'k8P':function(N8P,y8P){return N8P>y8P;}
,'N4x':function(y4x,F4x){return y4x/F4x;}
,'c7Q':function(w7Q,B7Q){return w7Q==B7Q;}
,'o55':"y",'h0Q':function(D0Q,i0Q){return D0Q/i0Q;}
,'U0Z':function(j0Z,c0Z){return j0Z==c0Z;}
,'K3Z':function(x3Z,u3Z){return x3Z==u3Z;}
,'B9C':function(b9C,f9C){return b9C-f9C;}
,'j4w':function(c4w,w4w){return c4w|w4w;}
,'j6':function(c6,w6){return c6<w6;}
,'c7Z':function(w7Z,B7Z){return w7Z-B7Z;}
,'B6w':function(b6w,f6w){return b6w/f6w;}
,'z1P':function(V1P,q1P){return V1P<=q1P;}
,'Y1C':function(e1C,P1C){return e1C<P1C;}
,'r4v':function(U4v,j4v){return U4v-j4v;}
,'H6H':function(W6H,p6H){return W6H/p6H;}
,'p5Z':function(M5Z,t5Z){return M5Z===t5Z;}
,'n0Z':function(h0Z,D0Z){return h0Z*D0Z;}
,'F3P':function(T3P,R3P){return T3P<R3P;}
,'S0T':function(n0T,h0T){return n0T<h0T;}
,'x6T':function(u6T,v0T){return u6T===v0T;}
,'I8w':function(K8w,x8w){return K8w/x8w;}
,'a7w':function(r7w,U7w){return r7w<U7w;}
,'V3x':function(q3x,a3x){return q3x==a3x;}
,'Q7C':function(J7C,A7C){return J7C==A7C;}
,'n5H':function(h5H,D5H){return h5H-D5H;}
,'J3T':function(A3T,z3T){return A3T-z3T;}
,'q0w':function(a0w,r0w){return a0w!=r0w;}
,'J3P':function(A3P,z3P){return A3P>z3P;}
,'J2G':function(A2G,z2G){return A2G<z2G;}
,'M9':function(t9,Y9){return t9==Y9;}
,'v9P':function(X9P,s9P){return X9P>s9P;}
,'c5':function(w5,B5){return w5-B5;}
,'I0v':function(K0v,x0v){return K0v-x0v;}
,'c0F':function(w0F,B0F){return w0F===B0F;}
,'a5P':function(r5P,U5P,j5P,c5P){return r5P-U5P+j5P-c5P;}
,'c5w':function(w5w,B5w){return w5w<B5w;}
,'c6Q':function(w6Q,B6Q){return w6Q*B6Q;}
,'k6G':function(N6G,y6G){return N6G&y6G;}
,'Q9':function(J9,A9){return J9/A9;}
,'A8Z':function(z8Z,V8Z){return z8Z-V8Z;}
,'Q5P':function(J5P,A5P){return J5P<=A5P;}
,'j3H':function(c3H,w3H){return c3H==w3H;}
,'e7T':function(P7T,G7T){return P7T/G7T;}
,'r7':function(U7,j7){return U7*j7;}
,'h6Z':function(D6Z,i6Z){return D6Z<i6Z;}
,'f7P':function(I7P,K7P,x7P,u7P){return I7P-K7P+x7P-u7P;}
,'B3G':function(b3G,f3G){return b3G>f3G;}
,'F4P':function(T4P,R4P){return T4P&R4P;}
,'t6':function(Y6,e6){return Y6<e6;}
,'B':function(K,u){return K==u;}
,'Q4w':function(J4w,A4w){return J4w==A4w;}
,'y7x':function(F7x,T7x){return F7x-T7x;}
,'u9C':function(v4C,X4C){return v4C<=X4C;}
,'I3H':function(K3H,x3H){return K3H==x3H;}
,'m6C':function(Z6C,k6C){return Z6C/k6C;}
,'b62':function(f62,I62){return f62>=I62;}
,'o5':function(m5,Z5){return m5===Z5;}
,'i2C':function(C2C,g2C){return C2C==g2C;}
,'a7v':function(r7v,U7v){return r7v/U7v;}
,'I9H':function(K9H,x9H){return K9H!=x9H;}
,'H4F':function(W4F,p4F){return W4F>p4F;}
,'J2Q':function(A2Q,z2Q){return A2Q==z2Q;}
,'r8T':function(U8T,j8T){return U8T>j8T;}
,'v4w':function(X4w,s4w){return X4w<s4w;}
,'K5Z':function(x5Z,u5Z){return x5Z<u5Z;}
,'A7F':function(z7F,V7F){return z7F==V7F;}
,'X7Q':function(s7Q,d7Q){return s7Q<d7Q;}
,'g8T':function(H8T,W8T){return H8T*W8T;}
,'s2v':function(d2v,o2v){return d2v==o2v;}
,'A1w':function(z1w,V1w){return z1w==V1w;}
,'s4C':function(d4C,o4C){return d4C==o4C;}
,'g8P':function(H8P,W8P){return H8P*W8P;}
,'y6Q':function(F6Q,T6Q){return F6Q<T6Q;}
,'l42':7,'E7T':function(l7T,L7T,S7T){return l7T-L7T-S7T;}
,'q8Z':function(a8Z,r8Z){return a8Z-r8Z;}
,'j1v':function(c1v,w1v){return c1v<w1v;}
,'C2Z':function(g2Z,H2Z){return g2Z*H2Z;}
,'j9H':function(c9H,w9H){return c9H!=w9H;}
,'Z3F':function(k3F,N3F){return k3F>=N3F;}
,'Y8P':function(e8P,P8P){return e8P/P8P;}
,'Z6Q':function(k6Q,N6Q){return k6Q==N6Q;}
,'V5Z':function(q5Z,a5Z){return q5Z<a5Z;}
,'n2v':function(h2v,D2v){return h2v>D2v;}
,'h6':function(D6,i6){return D6<i6;}
,'Y8T':function(e8T,P8T){return e8T-P8T;}
,'e3Q':function(P3Q,G3Q){return P3Q==G3Q;}
,'m0':function(Z0,k0){return Z0<k0;}
,'W5P':function(p5P,M5P){return p5P-M5P;}
,'a7x':function(r7x,U7x){return r7x!=U7x;}
,'s3Q':function(d3Q,o3Q){return d3Q-o3Q;}
,'C0G':function(g0G,H0G){return g0G<H0G;}
,'P3G':function(G3G,O3G){return G3G-O3G;}
,'G2Q':function(O2Q,Q2Q){return O2Q-Q2Q;}
,'r6G':function(U6G,j6G){return U6G<j6G;}
,'H1x':function(W1x,p1x){return W1x===p1x;}
,'Q2w':function(J2w,A2w){return J2w<A2w;}
,'M0Z':function(t0Z,Y0Z){return t0Z*Y0Z;}
,'v8Q':function(X8Q,s8Q){return X8Q-s8Q;}
,'f5P':function(I5P,K5P){return I5P/K5P;}
,'e7G':function(P7G,G7G){return P7G>G7G;}
,'M4F':function(t4F,Y4F){return t4F<Y4F;}
,'q7T':function(a7T,r7T){return a7T/r7T;}
,'a5x':function(r5x,U5x){return r5x<U5x;}
,'g1F':function(H1F,W1F){return H1F<W1F;}
,'B9':function(b9,f9){return b9==f9;}
,'L6':function(S6,n6){return S6<n6;}
,'z5C':function(V5C,q5C){return V5C===q5C;}
,'x4':function(u4,X1,s1){return u4*X1/s1;}
,'P3':function(G3,O3){return G3<=O3;}
,'H6x':function(W6x,p6x){return W6x<p6x;}
,'e1':function(P1,G1){return P1==G1;}
,'k62':function(N62,y62){return N62>y62;}
,'B7v':function(b7v,f7v){return b7v-f7v;}
,'R02':function(E02,l02){return E02!=l02;}
,'f6T':function(I6T,K6T){return I6T!=K6T;}
,'C7v':function(g7v,H7v){return g7v*H7v;}
,'l5G':function(L5G,S5G){return L5G-S5G;}
,'x6x':function(u6x,v0x){return u6x-v0x;}
,'c8C':function(w8C,B8C){return w8C==B8C;}
,'O1x':function(Q1x,J1x){return Q1x==J1x;}
,'g8C':function(H8C,W8C){return H8C in W8C;}
,'g8x':function(H8x,W8x){return H8x==W8x;}
,'A6H':function(z6H,V6H){return z6H-V6H;}
,'N0w':function(y0w,F0w){return y0w<F0w;}
,'f4H':function(I4H,K4H){return I4H-K4H;}
,'v5Q':function(X5Q,s5Q){return X5Q===s5Q;}
,'e0Z':function(P0Z,G0Z){return P0Z*G0Z;}
,'s4':function(d4,o4){return d4-o4;}
,'V8T':function(q8T,a8T){return q8T*a8T;}
,'H5G':function(W5G,p5G){return W5G!=p5G;}
,'q1x':function(a1x,r1x){return a1x<r1x;}
,'v9F':function(X9F,s9F){return X9F==s9F;}
,'k2F':function(N2F,y2F){return N2F>y2F;}
,'i1w':function(C1w,g1w){return C1w<g1w;}
,'X5Z':function(s5Z,d5Z){return s5Z==d5Z;}
,'M8Z':function(t8Z,Y8Z){return t8Z!=Y8Z;}
,'n4C':function(h4C,D4C){return h4C-D4C;}
,'R0v':function(E0v,l0v){return E0v>l0v;}
,'M3Q':function(t3Q,Y3Q){return t3Q/Y3Q;}
,'g2':function(H2,W2){return H2!=W2;}
,'v3F':function(X3F,s3F){return X3F!==s3F;}
,'x6F':function(u6F,v0F){return u6F!==v0F;}
,'U7H':function(j7H,c7H){return j7H<c7H;}
,'h7Z':function(D7Z,i7Z){return D7Z-i7Z;}
,'d5C':function(o5C,m5C){return o5C<m5C;}
,'S2T':function(n2T,h2T){return n2T-h2T;}
,'B5C':function(b5C,f5C){return b5C<f5C;}
,'d7x':function(o7x,m7x){return o7x-m7x;}
,'J5':function(A5,z5){return A5===z5;}
,'T0w':function(R0w,E0w){return R0w*E0w;}
,'E4Q':function(l4Q,L4Q){return l4Q==L4Q;}
,'Z7x':function(k7x,N7x){return k7x<N7x;}
,'B3H':function(b3H,f3H){return b3H==f3H;}
,'n7G':function(h7G,D7G){return h7G/D7G;}
,'x7F':function(u7F,v2F){return u7F-v2F;}
,'u4x':function(v1x,X1x){return v1x==X1x;}
,'v3':function(X3,s3){return X3/s3;}
,'t0v':function(Y0v,e0v){return Y0v-e0v;}
,'n4G':function(h4G,D4G){return h4G/D4G;}
,'T8':function(R8,E8){return R8/E8;}
,'Z6v':function(k6v,N6v,y6v){return k6v-N6v-y6v;}
,'F5v':function(T5v,R5v){return T5v>=R5v;}
,'X3C':function(s3C,d3C){return s3C>d3C;}
,'o3C':function(m3C,Z3C){return m3C<=Z3C;}
,'D4Q':function(i4Q,C4Q){return i4Q-C4Q;}
,'a9F':function(r9F,U9F){return r9F-U9F;}
,'A4H':function(z4H,V4H){return z4H==V4H;}
,'D8P':function(i8P,C8P){return i8P>C8P;}
,'I8H':function(K8H,x8H){return K8H==x8H;}
,'Y9Z':function(e9Z,P9Z){return e9Z<P9Z;}
,'E1H':function(l1H,L1H){return l1H>=L1H;}
,'D5Z':function(i5Z,C5Z){return i5Z===C5Z;}
,'u8H':function(v5H,X5H){return v5H<=X5H;}
,'P4Z':function(G4Z,O4Z){return G4Z<O4Z;}
,'b2T':function(f2T,I2T){return f2T-I2T;}
,'k1C':function(N1C,y1C){return N1C===y1C;}
,'B4x':function(b4x,f4x){return b4x==f4x;}
,'t3':function(Y3,e3){return Y3>=e3;}
,'n8':function(h8,D8){return h8<D8;}
,'v4Z':function(X4Z,s4Z){return X4Z-s4Z;}
,'D0x':function(i0x,C0x){return i0x-C0x;}
,'a3G':function(r3G,U3G){return r3G-U3G;}
,'M3v':function(t3v,Y3v){return t3v-Y3v;}
,'P9F':function(G9F,O9F){return G9F===O9F;}
,'X1F':function(s1F,d1F){return s1F==d1F;}
,'R0Q':function(E0Q,l0Q){return E0Q>l0Q;}
,'h4Z':function(D4Z,i4Z){return D4Z<=i4Z;}
,'B7C':function(b7C,f7C){return b7C<f7C;}
,'E5Z':function(l5Z,L5Z){return l5Z/L5Z;}
,'u7C':function(v2C,X2C){return v2C==X2C;}
,'H7T':function(W7T,p7T){return W7T/p7T;}
,'s7w':function(d7w,o7w){return d7w/o7w;}
,'T6T':function(R6T,E6T){return R6T>=E6T;}
,'E2H':function(l2H,L2H){return l2H===L2H;}
,'P0v':function(G0v,O0v){return G0v*O0v;}
,'c8x':function(w8x,B8x){return w8x*B8x;}
,'M2v':function(t2v,Y2v){return t2v-Y2v;}
,'D8v':function(i8v,C8v){return i8v===C8v;}
,'Q1P':function(J1P,A1P){return J1P*A1P;}
,'i9v':function(C9v,g9v){return C9v<g9v;}
,'K8C':function(x8C,u8C){return x8C==u8C;}
,'n3w':function(h3w,D3w,i3w){return h3w-D3w+i3w;}
,'N6T':function(y6T,F6T){return y6T<=F6T;}
,'d1v':function(o1v,m1v){return o1v*m1v;}
,'j5G':function(c5G,w5G){return c5G<w5G;}
,'r0C':function(U0C,j0C){return U0C>=j0C;}
,'a5G':function(r5G,U5G){return r5G!=U5G;}
,'m7v':function(Z7v,k7v){return Z7v<=k7v;}
,'s1x':function(d1x,o1x){return d1x==o1x;}
,'v7Z':function(X7Z,s7Z){return X7Z==s7Z;}
,'o2G':function(m2G,Z2G){return m2G==Z2G;}
,'O1w':function(Q1w,J1w){return Q1w==J1w;}
,'T4':function(R4,E4){return R4/E4;}
,'F62':function(T62,R62){return T62<R62;}
,'i8Z':function(C8Z,g8Z){return C8Z<g8Z;}
,'y7Z':function(F7Z,T7Z){return F7Z!=T7Z;}
,'u6w':function(v0w,X0w){return v0w>X0w;}
,'t02':function(Y02,e02){return Y02<e02;}
,'l4x':function(L4x,S4x){return L4x-S4x;}
,'U0':function(j0,c0){return j0-c0;}
,'Z7Z':function(k7Z,N7Z){return k7Z-N7Z;}
,'e9':function(P9,G9,O9){return P9*G9/O9;}
,'W2w':function(p2w,M2w){return p2w/M2w;}
,'R9T':function(E9T,l9T){return E9T<l9T;}
,'b5F':function(f5F,I5F){return f5F-I5F;}
,'R9P':function(E9P,l9P){return E9P<l9P;}
,'l7F':function(L7F,S7F){return L7F-S7F;}
,'s9v':function(d9v,o9v){return d9v>=o9v;}
,'F1':function(T1,R1){return T1==R1;}
,'m5H':function(Z5H,k5H){return Z5H===k5H;}
,'p3P':function(M3P,t3P){return M3P<t3P;}
,'p2T':function(M2T,t2T){return M2T/t2T;}
,'z0Q':function(V0Q,q0Q){return V0Q===q0Q;}
,'g3Z':function(H3Z,W3Z){return H3Z-W3Z;}
,'h5C':function(D5C,i5C){return D5C<i5C;}
,'N1Z':function(y1Z,F1Z){return y1Z<=F1Z;}
,'W5C':function(p5C,M5C){return p5C<M5C;}
,'t3H':function(Y3H,e3H){return Y3H==e3H;}
,'E0C':function(l0C,L0C){return l0C==L0C;}
,'g3C':function(H3C,W3C){return H3C-W3C;}
,'k5v':function(N5v,y5v){return N5v<y5v;}
,'F0F':function(T0F,R0F){return T0F<R0F;}
,'J7Z':function(A7Z,z7Z){return A7Z<=z7Z;}
,'K5v':function(x5v,u5v){return x5v>=u5v;}
,'G2H':function(O2H,Q2H){return O2H<Q2H;}
,'d1Q':function(o1Q,m1Q){return o1Q<=m1Q;}
,'u5T':function(v6F,X6F){return v6F==X6F;}
,'o3w':function(m3w,Z3w){return m3w==Z3w;}
,'v0G':function(X0G,s0G){return X0G<s0G;}
,'b0C':function(f0C,I0C){return f0C>=I0C;}
,'P6w':function(G6w,O6w){return G6w/O6w;}
,'i4C':function(C4C,g4C){return C4C<g4C;}
,'U8F':function(j8F,c8F){return j8F-c8F;}
,'Y0F':function(e0F,P0F){return e0F==P0F;}
,'y3G':function(F3G,T3G){return F3G<T3G;}
,'B4w':function(b4w,f4w){return b4w|f4w;}
,'G8C':function(O8C,Q8C){return O8C<Q8C;}
,'Z02':function(k02,N02){return k02<N02;}
,'J1H':function(A1H,z1H){return A1H-z1H;}
,'V9Z':function(q9Z,a9Z){return q9Z/a9Z;}
,'D7Q':function(i7Q,C7Q){return i7Q==C7Q;}
,'L02':function(S02,n02){return S02!=n02;}
,'v1P':function(X1P,s1P){return X1P-s1P;}
,'K8T':function(x8T,u8T){return x8T<u8T;}
,'h5P':function(D5P,i5P){return D5P/i5P;}
,'X0F':function(s0F,d0F){return s0F>d0F;}
,'P2P':function(G2P,O2P){return G2P>O2P;}
,'o9Z':function(m9Z,Z9Z){return m9Z<Z9Z;}
,'A7H':function(z7H,V7H){return z7H<V7H;}
,'K5':function(x5,u5){return x5<u5;}
,'d02':function(o02,m02){return o02!=m02;}
,'c5Z':function(w5Z,B5Z){return w5Z-B5Z;}
,'b2Q':function(f2Q,I2Q){return f2Q-I2Q;}
,'T4F':function(R4F,E4F){return R4F<E4F;}
,'j2':function(B2,b2){return B2!==b2;}
,'b7Q':function(f7Q,I7Q){return f7Q-I7Q;}
,'w6x':function(B6x,b6x){return B6x in b6x;}
,'K4v':function(x4v,u4v){return x4v===u4v;}
,'n4T':function(h4T,D4T){return h4T-D4T;}
,'y5x':function(F5x,T5x){return F5x<T5x;}
,'j6w':function(c6w,w6w){return c6w<w6w;}
,'E0F':function(l0F,L0F){return l0F>L0F;}
,'Y2H':function(e2H,P2H){return e2H==P2H;}
,'q7G':function(a7G,r7G){return a7G>r7G;}
,'H7H':function(W7H,p7H){return W7H>p7H;}
,'O8':function(Q8,J8){return Q8>J8;}
,'l2w':function(L2w,S2w){return L2w<S2w;}
,'Q6':function(J6,A6){return J6<A6;}
,'Y3P':function(e3P,P3P){return e3P<P3P;}
,'O7F':function(Q7F,J7F){return Q7F!==J7F;}
,'z3':function(V3,q3){return V3<=q3;}
,'a4x':function(r4x,U4x){return r4x<U4x;}
,'A1x':function(z1x,V1x){return z1x<V1x;}
,'J0H':function(A0H,z0H){return A0H*z0H;}
,'T2w':function(R2w,E2w){return R2w<E2w;}
,'W9T':function(p9T,M9T){return p9T<M9T;}
,'O2C':function(Q2C,J2C){return Q2C in J2C;}
,'C0v':function(g0v,H0v){return g0v>=H0v;}
,'G7Q':function(O7Q,Q7Q){return O7Q==Q7Q;}
,'V7Z':function(q7Z,a7Z){return q7Z===a7Z;}
,'a1P':function(r1P,U1P){return r1P>=U1P;}
,'v2':function(X2,s2){return X2<s2;}
,'y3F':function(F3F,T3F){return F3F>=T3F;}
,'h9x':function(D9x,i9x){return D9x==i9x;}
,'i1Z':function(C1Z,g1Z){return C1Z>g1Z;}
,'b6v':function(f6v,I6v){return f6v==I6v;}
,'e6C':function(P6C,G6C){return P6C-G6C;}
,'g0x':function(H0x,W0x){return H0x==W0x;}
,'Z9x':function(k9x,N9x){return k9x-N9x;}
,'j9':function(c9,w9){return c9==w9;}
,'Q2P':function(J2P,A2P){return J2P<A2P;}
,'R9x':function(E9x,l9x){return E9x/l9x;}
,'R9F':function(E9F,l9F){return E9F*l9F;}
,'t7C':function(Y7C,e7C){return Y7C/e7C;}
,'z9H':function(V9H,q9H){return V9H==q9H;}
,'L1Q':function(S1Q,n1Q){return S1Q>=n1Q;}
,'e9v':function(P9v,G9v){return P9v>G9v;}
,'k0H':function(N0H,y0H){return N0H===y0H;}
,'n8F':function(h8F,D8F){return h8F-D8F;}
,'X2T':function(s2T,d2T){return s2T/d2T;}
,'o1H':function(m1H,Z1H){return m1H-Z1H;}
,'c1F':function(w1F,B1F){return w1F>B1F;}
,'Y4P':function(e4P,P4P){return e4P&P4P;}
,'l6x':function(L6x,S6x){return L6x-S6x;}
,'I9x':function(K9x,x9x){return K9x*x9x;}
,'I6':function(K6,x6){return K6==x6;}
,'m7':function(Z7,k7){return Z7*k7;}
,'l7H':function(L7H,S7H){return L7H-S7H;}
,'F1H':function(T1H,R1H){return T1H-R1H;}
,'c4v':function(w4v,B4v){return w4v<B4v;}
,'C3':function(g3,H3){return g3<H3;}
,'Z7C':function(k7C,N7C){return k7C-N7C;}
,'F5F':function(T5F,R5F){return T5F<R5F;}
,'t9T':function(Y9T,e9T){return Y9T===e9T;}
,'X0x':function(s0x,d0x){return s0x>=d0x;}
,'h7x':function(D7x,i7x){return D7x===i7x;}
,'D1T':function(i1T,C1T){return i1T>C1T;}
,'y9H':function(F9H,T9H){return F9H-T9H;}
,'r0F':function(U0F,j0F){return U0F==j0F;}
,'E4v':function(l4v,L4v){return l4v<L4v;}
,'D2H':function(i2H,C2H){return i2H<C2H;}
,'c2Q':function(w2Q,B2Q){return w2Q==B2Q;}
,'j7w':function(c7w,w7w){return c7w<w7w;}
,'L2P':function(S2P,n2P){return S2P>n2P;}
,'f6H':function(I6H,K6H){return I6H-K6H;}
,'C02':function(g02,H02){return g02-H02;}
,'d8T':function(o8T,m8T){return o8T*m8T;}
,'I0O':(function(o9O){return (function(T9O,y9O){return (function(R9O){return {K0O:R9O}
;}
)(function(u0O){var k9O,v9O=0;for(var F9O=T9O;v9O<u0O["length"];v9O++){var N9O=y9O(u0O,v9O);k9O=v9O===0?N9O:k9O^N9O;}
return k9O?F9O:!F9O;}
);}
)((function(m9O,s9O,X9O,Z9O){var d9O=33;return m9O(o9O,d9O)-Z9O(s9O,X9O)>d9O;}
)(parseInt,Date,(function(s9O){return (''+s9O)["substring"](1,(s9O+'')["length"]-1);}
)('_getTime2'),function(s9O,X9O){return new s9O()[X9O]();}
),function(u0O,v9O){var x0O=parseInt(u0O["charAt"](v9O),16)["toString"](2);return x0O["charAt"](x0O["length"]-1);}
);}
)('11u5br6no'),'s2x':function(d2x,o2x){return d2x<o2x;}
,'v02':function(X02,s02){return X02>s02;}
,'Y2Q':function(e2Q,P2Q){return e2Q==P2Q;}
,'L6P':function(S6P,n6P){return S6P>=n6P;}
,'o1C':function(m1C,Z1C){return m1C==Z1C;}
,'D8C':function(i8C,C8C){return i8C-C8C;}
,'u2w':function(v8w,X8w){return v8w*X8w;}
,'z4w':function(V4w,q4w){return V4w==q4w;}
,'o2H':function(m2H,Z2H){return m2H/Z2H;}
,'Y0C':function(e0C,P0C){return e0C>=P0C;}
,'R6Q':function(E6Q,l6Q){return E6Q<l6Q;}
,'N4C':function(y4C,F4C){return y4C<F4C;}
,'p8P':function(M8P,t8P){return M8P*t8P;}
,'v8T':function(X8T,s8T){return X8T-s8T;}
,'t0Q':function(Y0Q,e0Q){return Y0Q/e0Q;}
,'J3C':function(A3C,z3C){return A3C<z3C;}
,'I5C':function(K5C,x5C){return K5C==x5C;}
,'r4Q':function(U4Q,j4Q){return U4Q>j4Q;}
,'r5':function(U5,j5){return U5===j5;}
,'g5F':function(H5F,W5F){return H5F==W5F;}
,'Y5Z':function(e5Z,P5Z){return e5Z===P5Z;}
,'c1T':function(w1T,B1T){return w1T!=B1T;}
,'p2':function(M2,Y2){return M2*Y2;}
,'u4Z':function(v1Z,X1Z){return v1Z==X1Z;}
,'n7H':function(h7H,D7H){return h7H<D7H;}
,'F2F':function(T2F,R2F){return T2F-R2F;}
,'s4T':function(d4T,o4T){return d4T-o4T;}
,'U7T':function(j7T,c7T){return j7T===c7T;}
,'l9Q':function(L9Q,S9Q){return L9Q===S9Q;}
,'S6v':function(n6v,h6v){return n6v-h6v;}
,'n0P':function(h0P,D0P){return h0P/D0P;}
,'b3Z':function(f3Z,I3Z){return f3Z==I3Z;}
,'H4T':function(W4T,p4T){return W4T<p4T;}
,'z0v':function(V0v,q0v){return V0v*q0v;}
,'q2':function(a2,U2){return a2*U2;}
,'y1Q':function(F1Q,T1Q){return F1Q-T1Q;}
,'x9v':function(u9v,v4v){return u9v<v4v;}
,'H2C':function(W2C,p2C){return W2C>=p2C;}
,'F7T':function(T7T,R7T){return T7T==R7T;}
,'Z9H':function(k9H,N9H){return k9H/N9H;}
,'l0w':function(L0w,S0w){return L0w in S0w;}
,'J6Q':function(A6Q,z6Q){return A6Q>z6Q;}
,'S7Q':function(n7Q,h7Q){return n7Q!=h7Q;}
,'O5H':function(Q5H,J5H){return Q5H>=J5H;}
,'g6G':function(H6G,W6G){return H6G>W6G;}
,'d6w':function(o6w,m6w){return o6w-m6w;}
,'t3G':function(Y3G,e3G){return Y3G<=e3G;}
,'b0F':function(f0F,I0F){return f0F===I0F;}
,'r0x':function(U0x,j0x){return U0x==j0x;}
,'a7C':function(r7C,U7C){return r7C!=U7C;}
,'O6x':function(Q6x,J6x){return Q6x/J6x;}
,'Y0x':function(e0x,P0x){return e0x<P0x;}
,'h9F':function(D9F,i9F){return D9F<i9F;}
,'V62':function(q62,a62){return q62>=a62;}
,'j3w':function(c3w,w3w){return c3w-w3w;}
,'m0P':function(Z0P,k0P){return Z0P-k0P;}
,'A2T':function(z2T,V2T){return z2T/V2T;}
,'E2T':function(l2T,L2T){return l2T<L2T;}
,'A0':function(z0,V0){return z0==V0;}
,'F1C':function(T1C,R1C){return T1C<R1C;}
,'p8Q':function(M8Q,t8Q){return M8Q/t8Q;}
,'y8w':function(F8w,T8w){return F8w===T8w;}
,'g1C':function(H1C,W1C){return H1C<W1C;}
,'z3F':function(V3F,q3F){return V3F<q3F;}
,'e6H':function(P6H,G6H){return P6H-G6H;}
,'x8v':function(u8v,v5v){return u8v-v5v;}
,'e4H':function(P4H,G4H){return P4H==G4H;}
,'f7T':function(I7T,K7T){return I7T<K7T;}
,'W6P':function(p6P,M6P){return p6P<M6P;}
,'Q9x':function(J9x,A9x){return J9x<=A9x;}
,'H7':function(W7,p7){return W7==p7;}
,'s0P':function(d0P,o0P){return d0P<=o0P;}
,'E2G':function(l2G,L2G){return l2G<L2G;}
,'I9':function(K9,x9){return K9-x9;}
,'V1F':function(q1F,a1F){return q1F>=a1F;}
,'w6H':function(B6H,b6H){return B6H/b6H;}
,'b6G':function(f6G,I6G){return f6G-I6G;}
,'P1Q':function(G1Q,O1Q){return G1Q-O1Q;}
,'V3Z':function(q3Z,a3Z){return q3Z==a3Z;}
,'K2G':function(x2G,u2G){return x2G==u2G;}
,'d0G':function(o0G,m0G){return o0G>m0G;}
,'G5F':function(O5F,Q5F){return O5F!=Q5F;}
,'A4':function(z4,V4){return z4==V4;}
,'r3Z':function(U3Z,j3Z){return U3Z==j3Z;}
,'Z5T':function(k5T,N5T){return k5T===N5T;}
,'O6F':function(Q6F,J6F){return Q6F<J6F;}
,'E3T':function(l3T,L3T){return l3T/L3T;}
,'F7Q':function(T7Q,R7Q){return T7Q!=R7Q;}
,'Q6w':function(J6w,A6w){return J6w-A6w;}
,'m4':function(Z4,k4){return Z4-k4;}
,'S3x':function(n3x,h3x){return n3x-h3x;}
,'q6C':function(a6C,r6C){return a6C<r6C;}
,'V5w':function(q5w,a5w){return q5w>=a5w;}
,'d7C':function(o7C,m7C){return o7C>m7C;}
,'K4P':function(x4P,u4P){return x4P*u4P;}
,'F0T':function(T0T,R0T){return T0T/R0T;}
,'b1T':function(f1T,I1T,K1T){return f1T-I1T-K1T;}
,'V4P':function(q4P,a4P){return q4P!=a4P;}
,'G3x':function(O3x,Q3x){return O3x>Q3x;}
,'y9P':function(F9P,T9P){return F9P-T9P;}
,'P3F':function(G3F,O3F){return G3F-O3F;}
,'r8Q':function(U8Q,j8Q){return U8Q===j8Q;}
,'l1x':function(L1x,S1x){return L1x<S1x;}
,'C3H':function(g3H,H3H){return g3H==H3H;}
,'j2Z':function(c2Z,w2Z){return c2Z==w2Z;}
,'P7Z':function(G7Z,O7Z,Q7Z){return G7Z-O7Z+Q7Z;}
,'B1':function(b1,f1){return b1==f1;}
,'P3w':function(G3w,O3w){return G3w-O3w;}
,'J5Z':function(A5Z,z5Z){return A5Z==z5Z;}
,'W42':8,'P5x':function(G5x,O5x){return G5x<O5x;}
,'B8w':function(b8w,f8w){return b8w<f8w;}
,'X9Z':function(s9Z,d9Z){return s9Z/d9Z;}
,'f7H':function(I7H,K7H){return I7H/K7H;}
,'B6':function(b6,f6){return b6==f6;}
,'p1T':function(M1T,t1T){return M1T>t1T;}
,'b1F':function(f1F,I1F){return f1F<I1F;}
,'s5H':function(d5H,o5H){return d5H<o5H;}
,'G0T':function(O0T,Q0T){return O0T*Q0T;}
,'M4x':function(t4x,Y4x){return t4x/Y4x;}
,'V8P':function(q8P,a8P){return q8P>=a8P;}
,'J1G':function(A1G,z1G){return A1G*z1G;}
,'i6T':function(C6T,g6T){return C6T<=g6T;}
,'D2G':function(i2G,C2G){return i2G>C2G;}
,'d2Z':function(o2Z,m2Z){return o2Z<=m2Z;}
,'f1C':function(I1C,K1C){return I1C<K1C;}
,'C7C':function(g7C,H7C){return g7C==H7C;}
,'B1v':function(b1v,f1v){return b1v/f1v;}
,'o1F':function(m1F,Z1F){return m1F==Z1F;}
,'i3v':function(C3v,g3v){return C3v<g3v;}
,'w4C':function(B4C,b4C){return B4C==b4C;}
,'j5Q':function(c5Q,w5Q){return c5Q===w5Q;}
,'f4T':function(I4T,K4T){return I4T<K4T;}
,'E1G':function(l1G,L1G){return l1G==L1G;}
,'l9v':function(L9v,S9v){return L9v!==S9v;}
,'L9P':function(S9P,n9P){return S9P<n9P;}
,'X2H':function(s2H,d2H){return s2H===d2H;}
,'r6Q':function(U6Q,j6Q){return U6Q/j6Q;}
,'k8v':function(N8v,y8v){return N8v<=y8v;}
,'l6C':function(L6C,S6C){return L6C<S6C;}
,'J3Z':function(A3Z,z3Z){return A3Z<z3Z;}
,'D0F':function(i0F,C0F){return i0F==C0F;}
,'o2T':function(m2T,Z2T){return m2T/Z2T;}
,'g6v':function(H6v,W6v){return H6v==W6v;}
,'m2C':function(Z2C,k2C){return Z2C==k2C;}
,'k1T':function(N1T,y1T){return N1T<y1T;}
,'R6w':function(E6w,l6w){return E6w-l6w;}
,'l3Q':function(L3Q,S3Q){return L3Q/S3Q;}
,'u3G':function(v7G,X7G){return v7G*X7G;}
,'B9H':function(b9H,f9H){return b9H!=f9H;}
,'p2H':function(M2H,t2H){return M2H==t2H;}
,'P9x':function(G9x,O9x){return G9x-O9x;}
,'i7H':function(C7H,g7H){return C7H==g7H;}
,'A7T':function(z7T,V7T){return z7T-V7T;}
,'M7T':function(t7T,Y7T){return t7T>Y7T;}
,'I6w':function(K6w,x6w){return K6w in x6w;}
,'D5':function(i5,C5){return i5<C5;}
,'M6C':function(t6C,Y6C){return t6C/Y6C;}
,'h0G':function(D0G,i0G){return D0G>i0G;}
,'N3v':function(y3v,F3v){return y3v-F3v;}
,'D0C':function(i0C,C0C){return i0C==C0C;}
,'S1G':function(n1G,h1G){return n1G==h1G;}
,'J1T':function(A1T,z1T){return A1T>z1T;}
,'Q3G':function(J3G,A3G){return J3G<A3G;}
,'C4Z':function(g4Z,H4Z){return g4Z<H4Z;}
,'V3P':function(q3P,a3P){return q3P>=a3P;}
,'H1Z':function(W1Z,p1Z){return W1Z==p1Z;}
,'R5x':function(E5x,l5x){return E5x>l5x;}
,'g4Q':function(H4Q,W4Q){return H4Q>=W4Q;}
,'W9F':function(p9F,M9F){return p9F-M9F;}
,'d3':function(o3,m3){return o3/m3;}
,'n1Z':function(h1Z,D1Z){return h1Z==D1Z;}
,'v6P':function(X6P,s6P){return X6P&s6P;}
,'l8':function(L8,S8){return L8<S8;}
,'g5':function(H5,W5){return H5<W5;}
,'A2C':function(z2C,V2C){return z2C*V2C;}
,'x8F':function(u8F,v5F){return u8F-v5F;}
,'N6F':function(y6F,F6F){return y6F===F6F;}
,'Y9w':function(e9w,P9w){return e9w>P9w;}
,'A8F':function(z8F,V8F){return z8F-V8F;}
,'s5G':function(d5G,o5G){return d5G<o5G;}
,'N4G':function(y4G,F4G){return y4G<=F4G;}
,'k9Z':function(N9Z,y9Z){return N9Z==y9Z;}
,'C3F':function(g3F,H3F){return g3F<H3F;}
,'k9G':function(N9G,y9G){return N9G-y9G;}
,'I3G':function(K3G,x3G){return K3G-x3G;}
,'K1F':function(x1F,u1F){return x1F>u1F;}
,'W3F':function(p3F,M3F){return p3F==M3F;}
,'t1v':function(Y1v,e1v){return Y1v===e1v;}
,'U6H':function(j6H,c6H){return j6H-c6H;}
,'v7P':function(X7P,s7P){return X7P/s7P;}
,'I1v':function(K1v,x1v){return K1v>x1v;}
,'T9':function(R9,E9){return R9!=E9;}
,'U1':function(j1,w1){return j1/w1;}
,'q2C':function(a2C,r2C){return a2C in r2C;}
,'g15':"h",'R4w':function(E4w,l4w){return E4w==l4w;}
,'X1H':function(s1H,d1H){return s1H-d1H;}
,'n9Q':function(h9Q,D9Q){return h9Q===D9Q;}
,'d6':function(o6,m6){return o6==m6;}
,'w0w':function(B0w,b0w){return B0w===b0w;}
,'u2F':function(v8F,X8F){return v8F/X8F;}
,'z9C':function(V9C,q9C){return V9C-q9C;}
,'m2w':function(Z2w,k2w){return Z2w==k2w;}
,'n2w':function(h2w,D2w,i2w){return h2w*D2w/i2w;}
,'J0C':function(A0C,z0C){return A0C>=z0C;}
,'X8C':function(s8C,d8C){return s8C in d8C;}
,'S1C':function(n1C,h1C){return n1C/h1C;}
,'V1H':function(q1H,a1H){return q1H<a1H;}
,'o8x':function(m8x,Z8x){return m8x*Z8x;}
,'B2P':function(b2P,f2P){return b2P-f2P;}
,'T1Z':function(R1Z,E1Z){return R1Z*E1Z;}
,'X2Q':function(s2Q,d2Q){return s2Q-d2Q;}
,'e4':function(P4,G4){return P4<G4;}
,'x4T':function(u4T,v1T){return u4T>v1T;}
,'l8Z':function(L8Z,S8Z){return L8Z/S8Z;}
,'c9G':function(w9G,B9G){return w9G-B9G;}
,'Y9G':function(e9G,P9G){return e9G<P9G;}
,'f0Z':function(I0Z,K0Z){return I0Z>K0Z;}
,'J4v':function(A4v,z4v){return A4v/z4v;}
,'k2Q':function(N2Q,y2Q){return N2Q<y2Q;}
,'m2x':function(Z2x,k2x){return Z2x>k2x;}
,'v3G':function(X3G,s3G){return X3G*s3G;}
,'G4Q':function(O4Q,Q4Q){return O4Q<Q4Q;}
,'b0T':function(f0T,I0T){return f0T!=I0T;}
,'s6x':function(d6x,o6x){return d6x-o6x;}
,'u3':function(v7,X7){return v7==X7;}
,'K0H':function(x0H,u0H){return x0H<u0H;}
,'r1T':function(U1T,j1T){return U1T<j1T;}
,'U5H':function(j5H,c5H){return j5H<c5H;}
,'M7G':function(t7G,Y7G){return t7G<Y7G;}
,'E9G':function(l9G,L9G){return l9G*L9G;}
,'d9P':function(o9P,m9P){return o9P*m9P;}
,'r7Q':function(U7Q,j7Q){return U7Q==j7Q;}
,'s7':function(d7,o7){return d7==o7;}
,'n7':function(h7,D7){return h7<D7;}
,'f8Z':function(I8Z,K8Z){return I8Z<K8Z;}
,'h3F':function(D3F,i3F){return D3F<=i3F;}
,'n8Z':function(h8Z,D8Z){return h8Z<D8Z;}
,'Q3H':function(J3H,A3H){return J3H==A3H;}
,'y3H':function(F3H,T3H){return F3H==T3H;}
,'P0Q':function(G0Q,O0Q){return G0Q!==O0Q;}
,'A4C':function(z4C,V4C){return z4C==V4C;}
,'Y7Q':function(e7Q,P7Q){return e7Q-P7Q;}
,'O8Z':function(Q8Z,J8Z){return Q8Z/J8Z;}
,'c8T':function(w8T,B8T){return w8T<B8T;}
,'l1w':function(L1w,S1w){return L1w==S1w;}
,'A6C':function(z6C,V6C){return z6C-V6C;}
,'K3C':function(x3C,u3C){return x3C>=u3C;}
,'K62':function(x62,u62){return x62<=u62;}
,'f1x':function(I1x,K1x){return I1x>K1x;}
,'E42':0,'W6':function(p6,M6){return p6==M6;}
,'u5G':function(v6T,X6T){return v6T!=X6T;}
,'B5T':function(b5T,f5T){return b5T==f5T;}
,'w0G':function(B0G,b0G){return B0G/b0G;}
,'f7F':function(I7F,K7F){return I7F!==K7F;}
,'S0F':function(n0F,h0F){return n0F<h0F;}
,'l8F':function(L8F,S8F){return L8F==S8F;}
,'A3Q':function(z3Q,V3Q){return z3Q==V3Q;}
,'L9F':function(S9F,n9F){return S9F*n9F;}
,'N0P':function(y0P,F0P){return y0P-F0P;}
,'K6G':function(x6G,u6G){return x6G>u6G;}
,'g0T':function(H0T,W0T){return H0T>W0T;}
,'a05':"u",'h5x':function(D5x,i5x){return D5x<i5x;}
,'n5G':function(h5G,D5G){return h5G===D5G;}
,'C8G':function(g8G,H8G){return g8G==H8G;}
,'W6Z':function(p6Z,M6Z){return p6Z>M6Z;}
,'O6T':function(Q6T,J6T){return Q6T-J6T;}
,'U4H':function(j4H,c4H){return j4H==c4H;}
,'G2G':function(O2G,Q2G){return O2G===Q2G;}
,'Z5w':function(k5w,N5w){return k5w-N5w;}
,'c5v':function(w5v,B5v){return w5v==B5v;}
,'A2x':function(z2x,V2x){return z2x<V2x;}
,'D9G':function(i9G,C9G){return i9G<C9G;}
,'E0H':function(l0H,L0H){return l0H>L0H;}
,'q7F':function(a7F,r7F){return a7F!==r7F;}
,'O0Z':function(Q0Z,J0Z){return Q0Z<J0Z;}
,'z5G':function(V5G,q5G){return V5G!=q5G;}
,'X3w':function(s3w,d3w){return s3w!=d3w;}
,'J62':function(A62,z62){return A62>z62;}
,'E3w':function(l3w,L3w,S3w){return l3w-L3w+S3w;}
,'Q8G':function(J8G,A8G){return J8G>A8G;}
,'W5v':function(p5v,M5v){return p5v<=M5v;}
,'a4w':function(r4w,U4w){return r4w==U4w;}
,'K9G':function(x9G,u9G){return x9G<u9G;}
,'q0':function(a0,r0){return a0/r0;}
,'M4':function(t4,Y4){return t4==Y4;}
,'u9T':function(v4T,X4T){return v4T<X4T;}
,'a3F':function(r3F,U3F){return r3F>U3F;}
,'Z5C':function(k5C,N5C){return k5C===N5C;}
,'D1F':function(i1F,C1F){return i1F>C1F;}
,'j8w':function(c8w,w8w){return c8w-w8w;}
,'G1T':function(O1T,Q1T){return O1T<Q1T;}
,'W02':function(p02,M02){return p02>=M02;}
,'t9H':function(Y9H,e9H){return Y9H-e9H;}
,'X3P':function(s3P,d3P){return s3P/d3P;}
,'Q4Z':function(J4Z,A4Z){return J4Z==A4Z;}
,'g2T':function(H2T,W2T){return H2T>=W2T;}
,'M7w':function(t7w,Y7w){return t7w>Y7w;}
,'a9C':function(r9C,U9C){return r9C-U9C;}
,'U4G':function(j4G,c4G){return j4G!=c4G;}
,'z9x':function(V9x,q9x){return V9x==q9x;}
,'u2Z':function(v8Z,X8Z){return v8Z<X8Z;}
,'D9w':function(i9w,C9w){return i9w!=C9w;}
,'L6Q':function(S6Q,n6Q,h6Q){return S6Q*n6Q/h6Q;}
,'i6H':function(C6H,g6H){return C6H*g6H;}
,'r0H':function(U0H,j0H){return U0H<j0H;}
,'j5C':function(c5C,w5C){return c5C==w5C;}
,'W0G':function(p0G,M0G){return p0G<=M0G;}
,'d1P':function(o1P,m1P){return o1P<m1P;}
,'U4T':function(j4T,c4T){return j4T!=c4T;}
,'a0v':function(r0v,U0v){return r0v>U0v;}
,'k5':function(N5,y5){return N5==y5;}
,'i1x':function(C1x,g1x){return C1x<g1x;}
,'M7P':function(t7P,Y7P){return t7P<Y7P;}
,'G6G':function(O6G,Q6G){return O6G-Q6G;}
,'L3F':function(S3F,n3F){return S3F>=n3F;}
,'T0Z':function(R0Z,E0Z){return R0Z<=E0Z;}
,'R7C':function(E7C,l7C){return E7C>=l7C;}
,'V1T':function(q1T,a1T){return q1T!=a1T;}
,'e1x':function(P1x,G1x){return P1x===G1x;}
,'p3T':function(M3T,t3T){return M3T/t3T;}
,'R8G':function(E8G,l8G){return E8G<l8G;}
,'t6w':function(Y6w,e6w){return Y6w-e6w;}
,'w3v':function(B3v,b3v){return B3v==b3v;}
,'y6':function(F6,T6){return F6<T6;}
,'P9H':function(G9H,O9H){return G9H-O9H;}
,'H4C':function(W4C,p4C){return W4C-p4C;}
,'R3F':function(E3F,l3F){return E3F<l3F;}
,'f1Z':function(I1Z,K1Z){return I1Z<K1Z;}
,'E3P':function(l3P,L3P){return l3P>L3P;}
,'x9P':function(u9P,v4P){return u9P<=v4P;}
,'C1P':function(g1P,H1P){return g1P==H1P;}
,'i7F':function(C7F,g7F){return C7F<g7F;}
,'X2F':function(s2F,d2F){return s2F>d2F;}
,'D5F':function(i5F,C5F){return i5F==C5F;}
,'z7v':function(V7v,q7v){return V7v>=q7v;}
,'N4T':function(y4T,F4T){return y4T>F4T;}
,'W5Q':function(p5Q,M5Q){return p5Q<M5Q;}
,'w2C':function(B2C,b2C){return B2C*b2C;}
,'V8C':function(q8C,a8C){return q8C==a8C;}
,'J0x':function(A0x,z0x){return A0x==z0x;}
,'W9x':function(p9x,M9x){return p9x==M9x;}
,'X5v':function(s5v,d5v){return s5v-d5v;}
,'S5Z':function(n5Z,h5Z){return n5Z/h5Z;}
,'o3Z':function(m3Z,Z3Z){return m3Z==Z3Z;}
,'R0':function(E0,l0){return E0==l0;}
,'S3T':function(n3T,h3T){return n3T>h3T;}
,'m1x':function(Z1x,k1x){return Z1x==k1x;}
,'N4':function(y4,F4){return y4==F4;}
,'n6F':function(h6F,D6F){return h6F<D6F;}
,'t4w':function(Y4w,e4w){return Y4w>e4w;}
,'r9G':function(U9G,j9G){return U9G<j9G;}
,'v9H':function(X9H,s9H){return X9H-s9H;}
,'d2P':function(o2P,m2P){return o2P<m2P;}
,'H4':function(W4,p4){return W4*p4;}
,'u9x':function(v4x,X4x){return v4x-X4x;}
,'a4Z':function(r4Z,U4Z){return r4Z==U4Z;}
,'t2w':function(Y2w,e2w){return Y2w-e2w;}
,'g3P':function(H3P,W3P){return H3P-W3P;}
,'x9Q':function(u9Q,v4Q){return u9Q>v4Q;}
,'Q9H':function(J9H,A9H){return J9H!=A9H;}
,'L6w':function(S6w,n6w){return S6w>n6w;}
,'c0H':function(w0H,B0H){return w0H<=B0H;}
,'S8T':function(n8T,h8T){return n8T<=h8T;}
,'J4Q':function(A4Q,z4Q){return A4Q>z4Q;}
,'C5T':function(g5T,H5T){return g5T==H5T;}
,'b5':function(f5,I5){return f5-I5;}
,'P7v':function(G7v,O7v){return G7v-O7v;}
,'r7Z':function(U7Z,j7Z){return U7Z===j7Z;}
,'X4P':function(s4P,d4P){return s4P/d4P;}
,'G6Q':function(O6Q,Q6Q){return O6Q<Q6Q;}
,'t8H':function(Y8H,e8H){return Y8H>=e8H;}
,'J0T':function(A0T,z0T){return A0T<z0T;}
,'D3T':function(i3T,C3T){return i3T*C3T;}
,'a5T':function(r5T,U5T){return r5T==U5T;}
,'l1Z':function(L1Z,S1Z){return L1Z==S1Z;}
,'G9G':function(O9G,Q9G){return O9G>Q9G;}
,'N8Z':function(y8Z,F8Z){return y8Z/F8Z;}
,'y6w':function(F6w,T6w){return F6w-T6w;}
,'L5C':function(S5C,n5C){return S5C!=n5C;}
,'o5v':function(m5v,Z5v){return m5v-Z5v;}
,'R6Z':function(E6Z,l6Z){return E6Z==l6Z;}
,'p6v':function(M6v,t6v){return M6v===t6v;}
,'D45':"l",'f4G':function(I4G,K4G){return I4G>K4G;}
,'F8v':function(T8v,R8v){return T8v*R8v;}
,'Q3':function(J3,A3){return J3*A3;}
,'f4C':function(I4C,K4C){return I4C==K4C;}
,'p9w':function(M9w,t9w){return M9w!=t9w;}
,'V0F':function(q0F,a0F){return q0F*a0F;}
,'x8Z':function(u8Z,v5Z){return u8Z<v5Z;}
,'w2v':function(B2v,b2v){return B2v<b2v;}
,'q8':function(a8,r8){return a8>r8;}
,'B2Z':function(b2Z,f2Z){return b2Z/f2Z;}
,'a3H':function(r3H,U3H){return r3H==U3H;}
,'k7T':function(N7T,y7T){return N7T*y7T;}
,'q4G':function(a4G,r4G){return a4G==r4G;}
,'R1Q':function(E1Q,l1Q){return E1Q<l1Q;}
,'A0Z':function(z0Z,V0Z){return z0Z<V0Z;}
,'N2v':function(y2v,F2v){return y2v>F2v;}
,'B5x':function(b5x,f5x){return b5x<f5x;}
,'j7C':function(c7C,w7C){return c7C*w7C;}
,'u6Z':function(v0Z,X0Z){return v0Z<X0Z;}
,'g1G':function(H1G,W1G){return H1G<=W1G;}
,'o4P':function(m4P,Z4P){return m4P/Z4P;}
,'J6v':function(A6v,z6v){return A6v===z6v;}
,'G0P':function(O0P,Q0P){return O0P/Q0P;}
,'r8P':function(U8P,j8P){return U8P==j8P;}
,'B6P':function(b6P,f6P){return b6P-f6P;}
,'V2G':function(q2G,a2G){return q2G<a2G;}
,'Z3H':function(k3H,N3H){return k3H==N3H;}
,'y8T':function(F8T,T8T){return F8T/T8T;}
,'J8x':function(A8x,z8x){return A8x>=z8x;}
,'Q6P':function(J6P,A6P){return J6P*A6P;}
,'V6Q':function(q6Q,a6Q){return q6Q<a6Q;}
,'M6T':function(t6T,Y6T){return t6T<=Y6T;}
,'h4w':function(D4w,i4w){return D4w==i4w;}
,'e4C':function(P4C,G4C){return P4C*G4C;}
,'F3C':function(T3C,R3C){return T3C==R3C;}
,'v5T':function(X5T,s5T){return X5T==s5T;}
,'d7T':function(o7T,m7T,Z7T){return o7T-m7T+Z7T;}
,'P2w':function(G2w,O2w){return G2w<O2w;}
,'V05':"t",'e2x':function(P2x,G2x){return P2x===G2x;}
,'P5C':function(G5C,O5C){return G5C==O5C;}
,'h9P':function(D9P,i9P){return D9P-i9P;}
,'Z1v':function(k1v,N1v){return k1v==N1v;}
,'G3T':function(O3T,Q3T){return O3T/Q3T;}
,'A8v':function(z8v,V8v){return z8v<V8v;}
,'m8Z':function(Z8Z,k8Z){return Z8Z===k8Z;}
,'i4H':function(C4H,g4H){return C4H===g4H;}
,'p8C':function(M8C,t8C){return M8C>t8C;}
,'Q5x':function(J5x,A5x){return J5x===A5x;}
,'h3':function(D3,i3){return D3<i3;}
,'Q0G':function(J0G,A0G){return J0G/A0G;}
,'y8G':function(F8G,T8G){return F8G<T8G;}
,'F8P':function(T8P,R8P){return T8P==R8P;}
,'W7x':function(p7x,M7x){return p7x/M7x;}
,'C8H':function(g8H,H8H){return g8H>=H8H;}
,'M4G':function(t4G,Y4G){return t4G<Y4G;}
,'E7Q':function(l7Q,L7Q){return l7Q!=L7Q;}
,'K1G':function(x1G,u1G){return x1G<=u1G;}
,'p4v':function(M4v,t4v){return M4v==t4v;}
,'e1Z':function(P1Z,G1Z){return P1Z==G1Z;}
,'J9w':function(A9w,z9w){return A9w<z9w;}
,'b0x':function(f0x,I0x){return f0x==I0x;}
,'C9x':function(g9x,H9x){return g9x<H9x;}
,'T2C':function(R2C,E2C){return R2C===E2C;}
,'f8v':function(I8v,K8v){return I8v/K8v;}
,'P5Q':function(G5Q,O5Q){return G5Q===O5Q;}
,'G9Z':function(O9Z,Q9Z){return O9Z===Q9Z;}
,'Y6G':function(e6G,P6G){return e6G*P6G;}
,'h3G':function(D3G,i3G){return D3G<=i3G;}
,'O0':function(Q0,J0){return Q0-J0;}
,'O7w':function(Q7w,J7w,A7w){return Q7w-J7w-A7w;}
,'f9Q':function(I9Q,K9Q){return I9Q===K9Q;}
,'S2F':function(n2F,h2F){return n2F/h2F;}
,'W2P':function(p2P,M2P){return p2P!=M2P;}
,'n6H':function(h6H,D6H){return h6H>D6H;}
,'N9v':function(y9v,F9v){return y9v===F9v;}
,'M1Z':function(t1Z,Y1Z){return t1Z>Y1Z;}
,'Z6Z':function(k6Z,N6Z){return k6Z==N6Z;}
,'o3T':function(m3T,Z3T){return m3T!=Z3T;}
,'j6P':function(c6P,w6P){return c6P<w6P;}
,'E6v':function(l6v,L6v){return l6v<L6v;}
,'d4Z':function(o4Z,m4Z){return o4Z<m4Z;}
,'j9T':function(c9T,w9T){return c9T>=w9T;}
,'i6C':function(C6C,g6C){return C6C/g6C;}
,'R9H':function(E9H,l9H){return E9H-l9H;}
,'K7Z':function(x7Z,u7Z){return x7Z/u7Z;}
,'U1x':function(j1x,c1x){return j1x-c1x;}
,'h3H':function(D3H,i3H){return D3H>=i3H;}
,'a9H':function(r9H,U9H){return r9H!=U9H;}
,'y0v':function(F0v,T0v){return F0v-T0v;}
,'E1F':function(l1F,L1F){return l1F*L1F;}
,'S0C':function(n0C,h0C){return n0C==h0C;}
,'X8x':function(s8x,d8x){return s8x-d8x;}
,'H7w':function(W7w,p7w){return W7w<p7w;}
,'i4T':function(C4T,g4T){return C4T-g4T;}
,'S1':function(n1,h1){return n1/h1;}
,'h5w':function(D5w,i5w,C5w){return D5w-i5w+C5w;}
,'n1w':function(h1w,D1w){return h1w>D1w;}
,'C6':function(g6,H6){return g6<H6;}
,'x2v':function(u2v,v8v){return u2v==v8v;}
,'v9x':function(X9x,s9x){return X9x==s9x;}
,'r8x':function(U8x,j8x){return U8x==j8x;}
,'r0P':function(U0P,j0P){return U0P/j0P;}
,'t9x':function(Y9x,e9x){return Y9x>e9x;}
,'i8F':function(C8F,g8F){return C8F!==g8F;}
,'k4v':function(N4v,y4v){return N4v===y4v;}
,'l2v':function(L2v,S2v){return L2v==S2v;}
,'n7T':function(h7T,D7T){return h7T/D7T;}
,'w1w':function(B1w,b1w){return B1w==b1w;}
,'F1F':function(T1F,R1F){return T1F==R1F;}
,'V5F':function(q5F,a5F){return q5F!=a5F;}
,'K6v':function(x6v,u6v){return x6v==u6v;}
,'X1T':function(s1T,d1T){return s1T<d1T;}
,'U0G':function(j0G,c0G){return j0G<=c0G;}
,'U9v':function(j9v,c9v){return j9v!==c9v;}
,'k5F':function(N5F,y5F){return N5F==y5F;}
,'N1w':function(y1w,F1w){return y1w==F1w;}
,'M1x':function(t1x,Y1x){return t1x<Y1x;}
,'m6H':function(Z6H,k6H){return Z6H>k6H;}
,'r3C':function(U3C,j3C){return U3C<j3C;}
,'e7H':function(P7H,G7H){return P7H<=G7H;}
,'U2x':function(j2x,c2x){return j2x==c2x;}
,'x7T':function(u7T,v2T){return u7T<v2T;}
,'W8G':function(p8G,M8G){return p8G==M8G;}
,'o4Q':function(m4Q,Z4Q){return m4Q===Z4Q;}
,'X0H':function(s0H,d0H){return s0H>d0H;}
,'z9T':function(V9T,q9T){return V9T>q9T;}
,'B3F':function(b3F,f3F){return b3F==f3F;}
,'b6Q':function(f6Q,I6Q){return f6Q*I6Q;}
,'M7H':function(t7H,Y7H){return t7H<=Y7H;}
,'X3T':function(s3T,d3T){return s3T-d3T;}
,'r6v':function(U6v,j6v){return U6v===j6v;}
,'T8Z':function(R8Z,E8Z){return R8Z<E8Z;}
,'F5':function(T5,R5){return T5==R5;}
,'C9P':function(g9P,H9P){return g9P>H9P;}
,'F2H':function(T2H,R2H){return T2H/R2H;}
,'h6w':function(D6w,i6w){return D6w-i6w;}
,'d6v':function(o6v,m6v){return o6v*m6v;}
,'W5T':function(p5T,M5T){return p5T-M5T;}
,'J5v':function(A5v,z5v){return A5v/z5v;}
,'D3x':function(i3x,C3x){return i3x==C3x;}
,'u2':function(v8,X8){return v8-X8;}
,'B8H':function(b8H,f8H){return b8H===f8H;}
,'k8C':function(N8C,y8C){return N8C>y8C;}
,'d9x':function(o9x,m9x){return o9x==m9x;}
,'l3v':function(L3v,S3v){return L3v-S3v;}
,'I4Z':function(K4Z,x4Z){return K4Z==x4Z;}
,'O1':function(Q1,J1){return Q1>J1;}
,'Y3x':function(e3x,P3x){return e3x<P3x;}
,'Q9C':function(J9C,A9C){return J9C*A9C;}
,'a1v':function(r1v,U1v){return r1v===U1v;}
,'p0H':function(M0H,t0H){return M0H==t0H;}
,'U1Z':function(j1Z,c1Z){return j1Z/c1Z;}
,'F0x':function(T0x,R0x){return T0x==R0x;}
,'i7P':function(C7P,g7P){return C7P<=g7P;}
,'x5P':function(u5P,v6G){return u5P<=v6G;}
,'H7F':function(W7F,p7F){return W7F==p7F;}
,'f4':function(I4,K4){return I4===K4;}
,'K3T':function(x3T,u3T){return x3T-u3T;}
,'d6Z':function(o6Z,m6Z){return o6Z<m6Z;}
,'W8H':function(p8H,M8H){return p8H/M8H;}
,'Z5Q':function(k5Q,N5Q){return k5Q===N5Q;}
,'b2G':function(f2G,I2G){return f2G<=I2G;}
,'D6Q':function(i6Q,C6Q){return i6Q*C6Q;}
,'I3F':function(K3F,x3F){return K3F in x3F;}
,'P6':function(G6,O6){return G6==O6;}
,'a3w':function(r3w,U3w){return r3w>U3w;}
,'V4Q':function(q4Q,a4Q){return q4Q<a4Q;}
,'s6F':function(d6F,o6F){return d6F-o6F;}
,'H3Q':function(W3Q,p3Q){return W3Q==p3Q;}
,'Y6v':function(e6v,P6v){return e6v-P6v;}
,'X0T':function(s0T,d0T){return s0T===d0T;}
,'D4v':function(i4v,C4v){return i4v<C4v;}
,'K0C':function(x0C,u0C){return x0C<=u0C;}
}
;(function(){var n7f=Q5v.I0O.K0O("6a")?"stx-holder":990067757,h7f=Q5v.I0O.K0O("a127")?" Not Available":((102,3.13E2)<=(58.30E1,10.46E2)?(0x1B6,1660966762):(97.7E1,3.37E2)),D7f=Q5v.I0O.K0O("a5")?39467096:"Adj_Close",i7f=Q5v.I0O.K0O("4ce")?"magnetize":-1275591117,C7f=Q5v.I0O.K0O("763")?"series":1956519422,g7f=Q5v.I0O.K0O("b4")?-813859350:0.00000000001,H7f=Q5v.I0O.K0O("2b")?735831093:"drawVectors",W7f=Q5v.I0O.K0O("43")?2124932722:"heikenashi",p7f=-1713373029,M7f=Q5v.I0O.K0O("b8bd")?-542313315:"stacked",t7f=674195368,Y7f=-1770197888;if(Q5v.Q02.z02(23,1518820)!==n7f&&Q5v.Q02.z02(((6.22E2,83.)<(0x6E,116.0E1)?(0x6B,18):71>(87,0x62)?4.600E2:0x180<(48,48.)?0x92:(0x1AC,5.65E2)),9793351)!==h7f&&Q5v.Q02.z02(19,8335158)!==D7f&&Q5v.Q02.z02(39,4158413)!==i7f&&Q5v.Q02.z02(38,2148697)!==C7f&&Q5v.Q02.z02(13,3200717)!==g7f&&Q5v.Q02.z02((0xC1<(63.,81)?(0x1D5,"P"):113.2E1>=(0x1A6,0xE8)?(0x50,39):(21.70E1,18.)>=89.7E1?(0x47,0x175):(1.53E2,1.041E3)),9389958)!==H7f&&Q5v.Q02.z02((0x98<(0x1FC,143)?8.20E1:63<(8.24E2,130)?(24,17):(2.0E1,0x171)<(134,107)?(9.39E2,210):(52,0xEE)),((136.,0xAB)>(10.14E2,0x1CA)?(3.280E2,0x1B2):(29.5E1,66.)>=89.?(11.52E2,0xBD):(0x248,69)<(6.41E2,85.)?(12.9E2,6776906):(48.,1.1380E3)))!==W7f&&Q5v.Q02.z02((149<(113,7.99E2)?(1.130E2,0):(0x17,3.88E2)<(64.10E1,0x115)?143:18>(0x248,0x179)?"a":(0x23A,1.104E3)),9259129)!==p7f&&Q5v.Q02.z02(0,(0x151>(0x191,13.61E2)?(0x137,129.):(135.,0x1CC)<1.105E3?(76.5E1,4240261):(83.10E1,12.4E1)))!==M7f&&Q5v.Q02.z02(15,2632925)!==t7f&&Q5v.Q02.z02(20,6801872)!==Y7f){return R6F===E6F;}
else{var z85="cti",a72=Q5v.I0O.K0O("576")?"halfHeight":"fun",l45="stx",s45="n",E45=Q5v.I0O.K0O("8616")?"o":"callback",t42=Q5v.I0O.K0O("3fc6")?"prevHighlighted":"undefined";}
function _stxKernel_js(_stxThirdParty,_exports){var j9S=-((0x1BB,0x179)>(42.90E1,89)?(66.,1871824103):0x88>(0x1D3,74.0E1)?(53,'h'):(142.70E1,91.)),c9S=Q5v.I0O.K0O("7a7")?"home":-(0x10C<=(0x140,109)?(0x175,89.):0x7E<=(64.10E1,14.64E2)?(7.45E2,1330257377):(0x1EB,41.30E1)>=0x234?0.75:(0x13D,0x2D)),w9S=Q5v.I0O.K0O("6df")?"reversal":912253620,B9S=1168073756,b9S=-((68.0E1,96.30E1)>=0x25?(0x1EF,594866813):(6.29E2,49.)),f9S=Q5v.I0O.K0O("cf")?-522973434:"createCrosshairs",I9S=652254406,K9S=Q5v.I0O.K0O("d1")?"rendererAction":1992335097,x9S=-2064302586,u9S=(1.>(92,0x249)?(2.61E2,59.):(40,71)>=(90,8.38E2)?(120,146):(9.83E2,9.870E2)>0xE?(133.6E1,351806574):(0x122,8.98E2)),v4S=(0x9D<=(0x15,0x11E)?(1.21E3,1414726399):(9.540E2,2.)),X4S=-672870286;if(Q5v.Q02.z02(23,8446348)===j9S||Q5v.Q02.z02(18,((147.,7.58E2)<=7.80E1?(135.,5):(0xD0,0x231)>=0x2A?(60.90E1,8475630):(13,124.4E1)))===c9S||Q5v.Q02.z02(19,4597288)===w9S||Q5v.Q02.z02(((0x17E,0x84)<=(0x1EE,96.)?0x185:(6.86E2,26)>=33.?(116,82.):(0xD5,0x119)<=(66,10.76E2)?(74.7E1,39):(15,0x12)),3944810)===B9S||Q5v.Q02.z02(38,9329765)===b9S||Q5v.Q02.z02(13,3087555)===f9S||Q5v.Q02.z02(39,8799097)===I9S||Q5v.Q02.z02(17,((0x129,94.10E1)<=0x129?131.:(7.15E2,0x17F)>=9.26E2?(0xD4,8.26E2):0x15A>=(0x256,122)?(83.,5478509):(73.2E1,24.)))===K9S||Q5v.Q02.z02(((77.5E1,0x2B)<(30,103)?(0x19D,0):(3.1E2,0xA0)),5287370)===x9S||Q5v.Q02.z02(0,6942481)===u9S||Q5v.Q02.z02(((2.42E2,0xE1)<61?41:(1.,99.7E1)>=(8.0E1,3.)?(0x80,15):0x1D2>=(113.,79.9E1)?(0x220,1.036E3):(0x1F1,101)),6214442)===v4S||Q5v.Q02.z02(20,7481216)===X4S){var C75="createDataSegment",f95="dataSet",F42="dataSegment",o05="el",C72="numeric",i52=0.2,h52=0.3,S35=((0x75,140)<123?(112.5E1,78.10E1):(0xF7,5.)<0x1B9?(29.,33):(97,0x1BC)),w82="vertical",n85="horizontal",G22="index",F32="center",w45="middle",L75=20,X25="bottom",g22="object",T52="stx_watermark",C85="mouse",Y15="to",M82="ow",O35="stx-show",N55="la",w35=30,R52="touchend",k72="touchmove",f05="touchstart",c52="ve",h75="tu",g82="mousedown",A22="em",R15="right",M22="chart",G55="ity",f75=(1.910E2<=(11.20E1,84.80E1)?(0xC1,"C"):(0xFF,117.)),I05="line",w92="Q",a92="Data",G45="m",L45="ng",G75="#FFFFFF",W65="#000000",h22="en",P65="op",o95="FF",r72=(25.3E1>=(119.,65)?(10,"F"):(15.20E1,0xC5)),D85="bar",b35=((1.2510E3,90.7E1)<(71.,64)?25:(124.0E1,142.)<0x220?(0xF5,32):(12.49E2,40)),Z52="ck",l32="P",p72="uo",U95="q",Q95="li",g72="calculate",S82="er",z72="underlay",a82="stx-drag-chart",r55=250,O25="mouseup",L22="drawing",Q52="ed",i22="stx_crosshair_drawing",c72="stx_crosshair",p12="segment",c92="an",V42="_p",c55="in",o35=((0x242,0x16A)>(4.39E2,0xC7)?(15.,")"):(75,72.)),f72=" (",F15=((119.,58.6E1)>(66.,0x170)?(25,"%"):(0xC7,0x49)>(68,35.80E1)?"l":(1.81E2,0x0)>(22.,6.9E1)?(0x85,0x205):(115.80E1,138)),T85=(0x32>(3.260E2,10.24E2)?(0x72,7):(102.60E1,0x214)>=11.8E1?(97.,10000):(48.0E1,47.6E1)),A42=0.01,C52=0.1,E52="measureUnlit",W25="mMeasure",s82="inline-block",r25=(101>=(0x60,0xCC)?(12.950E2,"B"):144.>=(0xFB,11.88E2)?1.296E3:127<=(0x18F,56.0E1)?(60.,50):(85.,0x192)),D15="step",d52="mousemove",c75="px",k55="ro",Z25="tx",e85="none",Z72="block",G95="red",R82="co",P05="",V85=((51.0E1,114.7E1)<(0x1C5,98.60E1)?(0x235,98.):(28,71.4E1)>=(136.6E1,0x1D2)?(0xBF,100):(110.,10.24E2)<10.?0x1A6:(4.7E1,123)),F55=":",K95="0",N72="solid",z12="N",R05="_c",f42="stx_candle_down",x92="stx_candle_up",i32="lay",t95="p",o85="it",b25="ne",p52="ef",Z45="ri",y45="1",R85="tio",z55="w",g45="x_",X52="_",h55="x",Q75=(24.70E1<(0x18E,120.30E1)?(10.83E2,10):(102,15.)>87.?(2.81E2,0x6):(14.4E1,113.9E1)),x35="left",S52=0.5,w15="f",w05="le",w32="stx_grid_border",X6f="border",d22="fill",O05="text",Y82="stx_grid",z32="stroke",l75="grid",e12="stx_yaxis",z52="drawYAxis",f52=((125.2E1,22.)<11.3E1?(30.8E1,"Y"):(1.115E3,0x36)>77?(68.9E1,"   "):(96.,63.40E1)<=105.?(75,60):(109,101.)),T15="nt",U42="S",p05=((0x1D2,46)>(0x7E,50)?(48,"bar"):(10.19E2,11.02E2)<=0x1AC?(34,26):(0x107,0)<=0xD?(0x1E4,"."):(130.,14.3E1)),c25="rt",i15="ha",v75=". ",s35="g",A15="i",x05="te",G72="D",n25=": ",w22="or",E85="rr",I95="ti",e25="A",r75="dr",K82="ou",H22="b",O22="a",m95=((0x1DD,0xA7)<=36.?5.33E2:14>(0x148,0x107)?14.9E1:(15.,8.290E2)>=(113.,146)?(82,"r"):(1.361E3,97.)),q22="st",O52="ce",b15="no",k85="nd",o82=(0x83>=(40.,0x134)?0xB8:(0x1FD,0xA1)>7.?(55.1E1,"c"):(0xDB,9.0E1)),S95="s",z42="month",j52="week",K32="day",t25=60,g42=(24<=(0xD3,120.)?(0x24E,9):(104,0x1AE)<121?(58.1E1,'P'):(0x200,6)),n15=60000,I45=1500,U32="tick",H15="minute",K35="millisecond",h85=1000,u35="second",s12="da",c32="vector",r42="layout",q52="ned",s65="fi",d82="e",U22="d",n82=" ",x65="transparent",w12="div",y95=((0x76,0x6E)<1.1E1?'b':33<(5.58E2,24.5E1)?(0x252,"-"):(0x22B,64)),k15=true,v85=false,B85="z",Z15="#zoomIn",j45="#",M15='ose',t22='di',X32='ow',B55='us',h32='ane',q75='ntr',r32='> ',A32='and',b92='ss',M45='pl',s55='yle',k65='ate',C95='loat',U35=(52.40E1<(128,0x34)?0x1DB:0x25<=(93,8E0)?4.810E2:(0xC0,12.39E2)>51.80E1?(30,'f'):(0x1EA,1.272E3)),J95='spl',z25='od',u65='p_',w25='tx_jum',T22='me',J25='mI',p55='ut',u72='oo',P12='as',h82='Ou',W22='z',e55='ze',Z12='tS',W75=';"><',Z42='2',H75='tto',M65='tr',n95='t_c',k52='cha',l35='play',b52='tyle',s52='r_',S55='ha',N85='sshai',m42='tx_c',U55=';"></',P22='ne',Q85='sp',R32='shair',x15='cro',P35='x_',F65='shai',b42='os',D75='x_cr',Z65='las',q72='iv',R75='>)</',e82='ge',p82='na',U92='lic',I42='ght',u05='T',p85='ag',x85='eMa',C05='u',X72='el',M85=(0x1E4<=(0xDD,0x1FB)?(14.23E2,'k'):(109,24.)>=9.84E2?(11.9E1,'Q'):128.3E1<=(3.070E2,17.0E1)?(139.4E1,126):(0x214,87)),b22='ic',d12='">',B42='teT',t75='ouse',F95='><',I82='>(</',c12='tions',j32='ruc',q92='st',l25='teI',h25='De',Y25='use',x52='></',f15=';</',r52='bsp',u52='">&',D52='r',A85='co',I22='lass',Y05='"><',X45='one',y52='yl',a22='C',T75='sh',B92='Tra',E82='rlay',i35='=""><',f65='Cl',w55='h',q42='ckyRi',Y65='pa',C15='> <',k45='pan',b95='"></',j22='terior',L05='I',R55='ick',p42='"> <',N82='y',q55='ck',N95='S',G65='v',c65='0px',a12='1',a32=((0xCE,90.30E1)>0x153?(124.,':'):35.2E1<(93.80E1,0x85)?(55.0E1,0x105):(0x1FD,5.95E2)),V25='eft',A12='in',C55=((56,78.5E1)<(20,0x131)?(0x21E,22):(6.58E2,0x15C)<(5.38E2,0x2D)?(0x90,"V"):27<=(0x5,0xFD)?(0x23,'g'):(0xBC,104.)),L12='ar',B25='m',m75='; ',D72='ay',u92='is',K75='tyl',E25='ancel',M25='_',D12='io',q45='not',f22='x',F05='t',p45='ass',w85='l',L82='>',I92='an',K55='</',J45='ave',T45=';">',D35='e',L85='o',q15=': ',Q22='lay',v55=((0x3E,0x17E)<=(11.67E2,63.7E1)?(85.,'i'):(140.5E1,0xED)),J75='d',W35='le',V95='ty',S12='" ',b55='ve',t45='n_s',I32='atio',H42='ot',I65='tx_',F52='tn',k25='b',Q12=((0x211,103)<(1.229E3,27.1E1)?(0x152,'-'):(84,7.42E2)>=(8.,123.0E1)?(8.69E2,"box"):(2.81E2,0x76)),p95='tx',T35='="',y22='la',S75='c',A35=((53.,2.5E1)>=0x99?0x134:(9.9E1,148.)<(22.3E1,38.)?(91,14.):8.52E2>=(32.0E1,9)?(19.,' '):(14.8E1,85)),m85=((0x92,28.)<=(127,0.)?"log":111.>(0x1B5,121.)?(6.45E2,0x23):(0xFF,114.)>=13.?(17.8E1,'n'):(126.7E1,0x179)),I75='a',X65='p',a52='s',h72='<',J=function(A){var L5S=-335409855,S5S=1993766939,n5S=1902381444,h5S=-1023932254,D5S=-241723420,i5S=-20761059,C5S=317576196,g5S=-(0x40>=(72.9E1,0x1AC)?"id":(114.4E1,0x10)<=(1.18E2,99.10E1)?(9.43E2,828011554):(0x10D,9)),H5S=-1541932151,W5S=-1882631113,p5S=1770935614,M5S=-((4.,0x211)>23.?(111,374333784):31>=(0x24,0x43)?(14.69E2,114):(90.7E1,137.));if(Q5v.Q02.z02(((23.,118)<(41,5.28E2)?(0x137,23):(2E0,131.)>=39.90E1?"l":(0x198,0x1A2)),((4.53E2,53.1E1)>144.?(17.,3773297):(1.489E3,83.)>0x24A?(0x1FC,0x1AA):(23,47.)))===L5S||Q5v.Q02.z02(18,1274506)===S5S||Q5v.Q02.z02(19,8649445)===n5S||Q5v.Q02.z02((0x127<=(6.390E2,20.)?(25.3E1,"W"):(40,9.64E2)>38.40E1?(0x121,39):(0x50,0x1EB)),3347292)===h5S||Q5v.Q02.z02(((0x212,0x14A)<0x257?(48.2E1,38):(94.2E1,98.)>(0x242,0x1D9)?2.46E2:(0x91,30)),9320757)===D5S||Q5v.Q02.z02(13,2039460)===i5S||Q5v.Q02.z02(39,8285960)===C5S||Q5v.Q02.z02(17,5014060)===g5S||Q5v.Q02.z02(0,((49.,1.6E1)<=104.30E1?(87.,3002995):(1.2E2,0x77)))===H5S||Q5v.Q02.z02(0,4949022)===W5S||Q5v.Q02.z02(15,((0xEE,0x130)>=0x1D4?52:0x1ED<=(0xA8,73.8E1)?(37.,7729314):(0xCF,29)))===p5S||Q5v.Q02.z02(20,1105829)===M5S){STX.Comparison.mouseHasMoved=A;}
else{this.privateDeletePanel(oldPanel);return y4C<F4C;}
}
,O=function(Q){var r3n=-1086620757,U3n=-970910960,j3n=-2072437098,c3n=898808454,w3n=-961833862,B3n=-((53.,0x1FA)<(59,69.)?'px':30<=(28.,38.)?(4.73E2,1055288488):(7.9E1,0xD6)),b3n=-360980576,f3n=915351339,I3n=-2099048674,K3n=-(20.<(73.,1.443E3)?(82.30E1,783183678):22>=(1.055E3,25.90E1)?(79.4E1,1.0):(40.2E1,4.22E2)),x3n=((1.76E2,125.)>0x1E?(36,483615919):(11.75E2,8.70E1)>=(100.,116.)?(107.10E1,20):(1.73E2,14.8E1)>(62,0x1BD)?(61,'y'):(0x205,44.)),u3n=780273539;if(Q5v.Q02.z02(((0x150,0x1A3)<=(4.,32.)?'H':7.03E2<(0x166,112)?(0x1A8,43.1E1):84.0E1>=(89.,42)?(5.29E2,23):(10.96E2,0x136)),(75.>(0x20C,30)?(1.389E3,3953967):(48.6E1,0x1A5)))===r3n||Q5v.Q02.z02((0x1DB<=(0xE9,13.46E2)?(3.15E2,18):(20,6.4E1)<=(130.70E1,30)?(52.5E1,"ytd"):(0x5E,0x215)),(0x1F0>(0xFB,7)?(6.38E2,3222262):(6.09E2,40.7E1)))===U3n||Q5v.Q02.z02(19,7412959)===j3n||Q5v.Q02.z02(39,7558257)===c3n||Q5v.Q02.z02(38,1189969)===w3n||Q5v.Q02.z02(13,((95.2E1,18)>(8.61E2,0x127)?(43,"O"):(14.4E1,0xF8)<=3.12E2?(109.,2881025):(0x190,92)))===B3n||Q5v.Q02.z02(39,9745823)===b3n||Q5v.Q02.z02(17,3520497)===f3n||Q5v.Q02.z02(0,((102.,27)<=(47,0x179)?(111.,4322899):0x242<(14.48E2,0x1AA)?25:2.27E2<=(12,133)?25:(149.,0x192)))===I3n||Q5v.Q02.z02(0,5121761)===K3n||Q5v.Q02.z02(((90.10E1,0xF4)<68.5E1?(0x189,15):(8.84E2,142)>0x202?94:(10,0x163)),1913371)===x3n||Q5v.Q02.z02(20,2290609)===u3n){STXChart.CANDLEEVEN=Q;}
else{this.activeDrawing.construct(this,panel);this.grabStartScrollX++;return l3C==L3C;}
}
,P=function(G){STXChart.CANDLEDOWN=G;}
,M=function(Y){STXChart.CANDLEUP=Y;}
,H=function(W){STXChart.CLOSEEVEN=W;}
,D=function(C){STXChart.CLOSEDOWN=C;}
,L=function(S){STXChart.CLOSEUP=S;}
,R=function(E){STXChart.NONE=E;}
,F=function(T){STX.camelCaseRegExp=T;}
,plotSpline=_stxThirdParty.plotSpline,plotSplinePrimitive=_stxThirdParty.plotSplinePrimitive,timezoneJS=_stxThirdParty.timezoneJS,STX=_exports.STX,STXChart=_exports.STXChart,$$=_exports.$$,$$$=_exports.$$$;STXChart.prototype.plugins={}
;}
else{this.quoteDriver.detachTagAlongQuoteFeed(feed);this.runAppend("touchmove",arguments);return L6H<=S6H;}
if(STX.isSurface){var k=function(N){STX.gesturePointerId=N;}
,X=function(Z){STX.gesture.target=Z.body;}
;STX.gesture=new MSGesture();X(document);k(Q5v.s15);}
STXChart.htmlControls={"annotationSave":(h72+a52+X65+I75+m85+A35+S75+y22+a52+a52+T35+a52+p95+Q12+k25+F52+A35+a52+I65+I75+m85+m85+H42+I32+t45+I75+b55+S12+a52+V95+W35+T35+J75+v55+a52+X65+Q22+q15+m85+L85+m85+D35+T45+a52+J45+K55+a52+X65+I92+L82),"annotationCancel":(h72+a52+X65+I75+m85+A35+S75+w85+p45+T35+a52+F05+f22+Q12+k25+F52+A35+a52+I65+I75+m85+q45+I75+F05+D12+m85+M25+S75+E25+S12+a52+K75+D35+T35+J75+u92+X65+w85+D72+q15+m85+L85+m85+D35+m75+B25+L12+C55+A12+Q12+w85+V25+a32+a12+c65+T45+S75+E25+K55+a52+X65+I92+L82),"mSticky":(h72+J75+v55+G65+A35+v55+J75+T35+B25+N95+F05+v55+q55+N82+p42+a52+X65+I75+m85+A35+v55+J75+T35+B25+N95+F05+R55+N82+L05+m85+j22+b95+a52+k45+C15+a52+Y65+m85+A35+v55+J75+T35+B25+N95+F05+v55+q42+C55+w55+F05+f65+v55+q55+S12+S75+y22+a52+a52+i35+a52+X65+I92+A35+v55+J75+T35+L85+b55+E82+B92+T75+a22+I75+m85+S12+S75+w85+p45+T35+a52+F05+f22+Q12+k25+F05+m85+S12+a52+F05+y52+D35+T35+J75+v55+a52+X65+y22+N82+a32+m85+X45+Y05+a52+k45+A35+S75+I22+T35+a52+p95+Q12+v55+A85+Q12+F05+D52+I75+T75+u52+m85+r52+f15+a52+X65+I75+m85+x52+a52+k45+C15+a52+X65+I75+m85+A35+v55+J75+T35+B25+L85+Y25+h25+W35+l25+m85+q92+j32+c12+Y05+a52+X65+I92+I82+a52+Y65+m85+F95+a52+X65+I75+m85+A35+v55+J75+T35+B25+t75+h25+W35+B42+D35+f22+F05+d12+D52+v55+C55+w55+F05+Q12+S75+w85+b22+M85+A35+F05+L85+A35+J75+X72+D35+F05+D35+K55+a52+k45+F95+a52+X65+I92+A35+v55+J75+T35+B25+L85+C05+a52+x85+m85+p85+D35+u05+D35+f22+F05+d12+D52+v55+I42+Q12+S75+U92+M85+A35+F05+L85+A35+B25+I75+p82+e82+K55+a52+k45+F95+a52+X65+I75+m85+R75+a52+X65+I92+x52+a52+k45+x52+a52+k45+x52+J75+q72+L82),"crossX":(h72+J75+q72+A35+S75+Z65+a52+T35+a52+F05+D75+b42+F65+D52+A35+a52+F05+P35+x15+a52+R32+M25+f22+S12+a52+V95+W35+T35+J75+v55+Q85+w85+D72+q15+m85+L85+P22+U55+J75+q72+L82),"crossY":(h72+J75+q72+A35+S75+w85+I75+a52+a52+T35+a52+m42+D52+L85+N85+D52+A35+a52+I65+x15+a52+a52+S55+v55+s52+N82+S12+a52+b52+T35+J75+u92+l35+q15+m85+L85+m85+D35+U55+J75+v55+G65+L82),"chartControls":(h72+J75+v55+G65+A35+S75+Z65+a52+T35+a52+I65+k52+D52+n95+L85+m85+M65+L85+w85+a52+S12+a52+F05+y52+D35+T35+J75+u92+X65+y22+N82+q15+m85+X45+m75+k25+L85+H75+B25+q15+Z42+Z42+X65+f22+W75+J75+q72+A35+v55+J75+T35+S75+w55+I75+D52+Z12+v55+e55+Y05+a52+X65+I75+m85+A35+v55+J75+T35+W22+L85+L85+B25+h82+F05+S12+S75+w85+P12+a52+T35+a52+p95+Q12+W22+u72+B25+Q12+L85+p55+b95+a52+X65+I92+F95+a52+X65+I92+A35+v55+J75+T35+W22+L85+L85+J25+m85+S12+S75+Z65+a52+T35+a52+p95+Q12+W22+u72+B25+Q12+v55+m85+b95+a52+k45+x52+J75+v55+G65+x52+J75+v55+G65+L82),"home":(h72+J75+v55+G65+A35+v55+J75+T35+w55+L85+T22+S12+S75+I22+T35+a52+w25+u65+F05+z25+D72+A35+w55+L85+B25+D35+S12+a52+F05+y52+D35+T35+J75+v55+J95+I75+N82+a32+m85+L85+m85+D35+Y05+a52+k45+x52+a52+Y65+m85+x52+J75+v55+G65+L82),"floatDate":(h72+J75+v55+G65+A35+S75+w85+P12+a52+T35+a52+p95+Q12+U35+C95+Q12+J75+k65+S12+a52+F05+s55+T35+J75+u92+M45+D72+q15+m85+X45+U55+J75+q72+L82),"handleTemplate":(h72+J75+q72+A35+S75+y22+b92+T35+a52+p95+Q12+v55+S75+L85+Q12+w55+A32+W35+S12+a52+b52+T35+J75+v55+a52+X65+y22+N82+q15+m85+L85+P22+W75+a52+X65+I75+m85+x52+a52+X65+I92+x52+J75+v55+G65+r32),"iconsTemplate":(h72+J75+v55+G65+A35+S75+I22+T35+a52+p95+Q12+X65+I75+P22+w85+Q12+S75+L85+q75+L85+w85+Y05+J75+v55+G65+A35+S75+w85+I75+a52+a52+T35+a52+p95+Q12+X65+I75+m85+X72+Q12+F05+v55+F05+w85+D35+b95+J75+q72+F95+J75+v55+G65+A35+S75+w85+I75+b92+T35+a52+F05+f22+Q12+k25+F05+m85+Q12+X65+h32+w85+Y05+a52+X65+I75+m85+A35+S75+w85+I75+a52+a52+T35+a52+p95+Q12+v55+S75+L85+Q12+C05+X65+b95+a52+k45+x52+J75+v55+G65+F95+J75+v55+G65+A35+S75+Z65+a52+T35+a52+p95+Q12+k25+F52+Q12+X65+I92+D35+w85+Y05+a52+X65+I75+m85+A35+S75+y22+b92+T35+a52+F05+f22+Q12+v55+A85+Q12+U35+L85+S75+B55+b95+a52+k45+x52+J75+v55+G65+F95+J75+q72+A35+S75+I22+T35+a52+F05+f22+Q12+k25+F05+m85+Q12+X65+I75+P22+w85+Y05+a52+X65+I92+A35+S75+w85+I75+a52+a52+T35+a52+F05+f22+Q12+v55+A85+Q12+J75+X32+m85+b95+a52+k45+x52+J75+v55+G65+F95+J75+v55+G65+A35+S75+w85+P12+a52+T35+a52+p95+Q12+k25+F52+Q12+X65+I92+D35+w85+Y05+a52+X65+I75+m85+A35+S75+y22+a52+a52+T35+a52+F05+f22+Q12+v55+S75+L85+Q12+D35+t22+F05+b95+a52+X65+I75+m85+x52+J75+v55+G65+F95+J75+v55+G65+A35+S75+w85+P12+a52+T35+a52+p95+Q12+k25+F05+m85+Q12+X65+h32+w85+Y05+a52+X65+I92+A35+S75+w85+I75+b92+T35+a52+F05+f22+Q12+v55+S75+L85+Q12+S75+w85+M15+b95+a52+X65+I92+x52+J75+v55+G65+x52+J75+q72+L82),"baselineHandle":(h72+J75+q72+A35+S75+w85+I75+b92+T35+a52+p95+Q12+k25+P12+D35+w85+v55+m85+D35+Q12+w55+I92+J75+W35+A35+U35+I75+S12+a52+b52+T35+J75+u92+M45+I75+N82+q15+m85+X45+U55+J75+q72+L82),}
;STXChart.prototype.registerHTMLElements=function(){var E9X=1641018526,l9X=1178420353,L9X=((0x13B,34)>=(0xC6,13.)?(14.27E2,2055409875):(75.10E1,0x244)),S9X=-1660859891,n9X=-1769305701,h9X=798648599,D9X=1238436014,i9X=-1292099103,C9X=1469321834,g9X=-2111292678,H9X=-1062637014,W9X=1616177225;if(Q5v.Q02.z02(23,((0x125,0x22C)>1.880E2?(16.,8464539):(0x219,44.)))!==E9X&&Q5v.Q02.z02((0x1F0>(62.,2.65E2)?(0x8C,18):0x148>=(106,34.6E1)?"f":(6.350E2,0xFB)),1809481)!==l9X&&Q5v.Q02.z02(19,(113.10E1>(0x129,141)?(63.90E1,8777077):0xE2<=(0x67,85.)?(0x4F,59):(0xE8,1.241E3)))!==L9X&&Q5v.Q02.z02(39,2330404)!==S9X&&Q5v.Q02.z02(38,4815978)!==n9X&&Q5v.Q02.z02(13,(0xF3<=(0x244,105)?(0x89,210):(0x18D,0x34)>=1.434E3?(53,210):0x48<=(56.40E1,0xF5)?(0x12D,3138879):(1.79E2,0xA9)))!==h9X&&Q5v.Q02.z02(39,(86>(121,0x1B1)?0x13A:0x7A>(22.,3.)?(4,2465488):(26.,88)))!==D9X&&Q5v.Q02.z02(17,2976860)!==i9X&&Q5v.Q02.z02(0,(9.20E1<=(0x253,1.1E1)?(124.9E1,0x219):(50.40E1,0xDB)<(8.290E2,0x11F)?(118.,2297655):(1.54E2,0x22)))!==C9X&&Q5v.Q02.z02(((0x19F,134.)<=(16.8E1,0xB3)?(124.80E1,0):(0x83,40)>0x112?"T":(0xFC,5.39E2)),(113<(0x53,0x91)?(0x124,1752909):(0x251,0x8B)))!==g9X&&Q5v.Q02.z02(((2E0,0x136)<(6.4E1,144.)?1.242E3:(0x193,0x161)>=0x6E?(51.,15):(0x83,0x4C)),2852873)!==H9X&&Q5v.Q02.z02(20,8635863)!==W9X){seriesPlotter.moveTo("gap",x,y0);compareArray.splice(i,1);seriesPlotter.dashedLineTo("line",x+cw,y,parameters.pattern);return h7G/D7G;}
else{var n45="mOu",p65="oo",p25="DIV",f85="chartControls",c=this.chart.container;for(var control in STXChart.htmlControls){if(typeof this.chart[control]==t42&&typeof this.controls[control]==t42){if(!this.allowZoom&&Q5v.B(control,f85))continue;var el=$$$(j45+control,c);if(el){this.chart[control]=el;this.controls[control]=el;}
else{var rawHTML=STXChart.htmlControls[control],div=document.createElement(p25);div.innerHTML=rawHTML;el=div.firstChild;c.appendChild(el);this.chart[control]=el;this.controls[control]=el;el.id=control;}
}
}
}
if(this.controls.chartControls){var zoomIn=$$$(Z15,this.controls.chartControls),zoomOut=$$$((j45+B85+p65+n45+Q5v.V05),this.controls.chartControls);STX.safeClickTouch(zoomIn,(function(self){return function(e){self.zoomIn();e.stopPropagation();}
;}
)(this));STX.safeClickTouch(zoomOut,(function(self){return function(e){self.zoomOut();e.stopPropagation();}
;}
)(this));if(!STX.touchDevice){zoomIn.onmouseover=(function(self){var q8X=1493046919,a8X=-((142.,6.2E2)<=(114.,64.)?20000:(0x11E,40)<=(129.,81)?(0x7B,1831121002):(0x1E8,0x108)),r8X=((0x210,148)>=(88.60E1,80.)?(99.,1593321926):(5.,0x218)),U8X=-1329359365,j8X=-((5.96E2,5.0E1)<(13.38E2,0x1B3)?(92,2029179426):117.4E1<(48,103)?(119,51.):(0x1E2,0x24C)),c8X=((104.,64)<=138.?(79,2119433664):(0xB0,18.)),w8X=-1074065082,B8X=1108267363,b8X=-78812187,f8X=((51.2E1,0x10C)>=(138.,0xBB)?(71,228358813):(0x1B9,9.88E2)<=(11.,0x11)?3.320E2:80.>(12.1E2,46.7E1)?1.0:(106.80E1,125.80E1)),I8X=1604339012,K8X=35613198;if(Q5v.Q02.z02(23,6995636)!==q8X&&Q5v.Q02.z02((0x138<(63.0E1,87.0E1)?(0x78,18):(137,146.0E1)<=(0x1E,20)?(70,0xC2):0x2E>(42.80E1,23.3E1)?13:(138.4E1,115)),3948186)!==a8X&&Q5v.Q02.z02(19,3611171)!==r8X&&Q5v.Q02.z02(39,2684920)!==U8X&&Q5v.Q02.z02(38,(7.30E1>(37.,0x1A)?(65.10E1,5379142):(10.10E1,77.)))!==j8X&&Q5v.Q02.z02(13,2750870)!==c8X&&Q5v.Q02.z02(39,2775659)!==w8X&&Q5v.Q02.z02(17,2106810)!==B8X&&Q5v.Q02.z02(0,8712400)!==b8X&&Q5v.Q02.z02(0,8341857)!==f8X&&Q5v.Q02.z02(((0x30,3.780E2)<=(69,17.)?(0x171,0x189):(9.0E1,0x5F)>(0x44,6.36E2)?107:0x131>=(1.424E3,1.95E2)?(1.232E3,15):(148,5.9E2)),6933329)!==I8X&&Q5v.Q02.z02(20,7283819)!==K8X){chartMap.markers.splice(i,((0xD1,0xEA)>0x52?(0x22E,1):(13,0xB5)));}
else{return function(e){self.modalBegin();}
;}
}
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
)(this));if(!STX.touchDevice){this.controls.home.onmouseover=(function(self){var T36=-1713745825,R36=1266444645,E36=-(92.<=(53.,147.8E1)?(30.20E1,146140185):(0x146,7.78E2)),l36=-728894576,L36=851984716,S36=-((0x54,82.)>0xC8?0x18A:(11.39E2,143)>0xC4?(0xF7,40):(1.375E3,0x53)<=70.9E1?(139,159968310):(0x19C,8.81E2)),n36=1701395690,h36=-828957665,D36=90623685,i36=2112986097,C36=-1054046037,g36=-423955311;if(Q5v.Q02.z02(23,9705110)!==T36&&Q5v.Q02.z02(18,7685522)!==R36&&Q5v.Q02.z02(((44.,14.290E2)>=62.2E1?(6,19):79<(9,11)?(15.,'A'):(5.45E2,2.86E2)),8455027)!==E36&&Q5v.Q02.z02(39,3702732)!==l36&&Q5v.Q02.z02(38,8954929)!==L36&&Q5v.Q02.z02(13,7833840)!==S36&&Q5v.Q02.z02(((5.33E2,144)>=0x1D1?'V':(0x239,117)<=0x235?(7.7E1,39):(46.80E1,62.2E1)),(0x21>(54.,4E0)?(21,1553295):(3.,0xE6)))!==n36&&Q5v.Q02.z02(17,8561706)!==h36&&Q5v.Q02.z02(((0x214,35.)>31.?(139.,0):(83.30E1,0x18D)<(0x221,139)?(37,24):(77.,106.)),7725446)!==D36&&Q5v.Q02.z02(((0x9C,0x105)>(5.,101)?(9.53E2,0):(1.68E2,0x1D3)),2346961)!==i36&&Q5v.Q02.z02(15,4736996)!==C36&&Q5v.Q02.z02(20,6542444)!==g36){gaps.push(gap);zoomOutEl.removeAttribute("onMouseOver");this.calculateYAxisMargins(chart.panel.yAxis);delete  quotes.Open;}
else{return function(e){self.modalBegin();}
;}
}
)(this);this.controls.home.onmouseout=(function(self){var z0O=-1250980676,V0O=-855828812,q0O=-82987659,a0O=-(1.45E2<(136.5E1,0x1D4)?(96.,2042685089):(85.,32)),r0O=-1689449780,U0O=1105195491,j0O=-312250661,c0O=1151447182,w0O=-660272785,B0O=-((5.01E2,110.)<126.?(1.,140673505):(0x122,6.12E2)),b0O=1116701823,f0O=-918101106;if(Q5v.Q02.z02(23,9679329)!==z0O&&Q5v.Q02.z02(18,4913766)!==V0O&&Q5v.Q02.z02(((56.,0)>=(0x1FA,39.40E1)?111:(0x246,0xEC)<(14.0E1,7.890E2)?(0x203,19):(0x1DE,54.)<(10,3)?4.05E2:(11.01E2,0x1F0)),(1.322E3<(0x122,0x219)?"px":(27.1E1,0x1F9)>=(0x1D2,10)?(3.88E2,9082597):(0x1B4,40.)))!==q0O&&Q5v.Q02.z02(39,2143209)!==a0O&&Q5v.Q02.z02(((144,1.890E2)>=95.?(0xA,38):0x23>(1.145E3,0x8A)?5.65E2:(14.530E2,11.9E1)>17.0E1?61.2E1:(0x3C,0x12)),((51,14.790E2)<(99.7E1,0x15B)?'Z':(2.59E2,2.32E2)<143.8E1?(42.,8907272):(0x163,35.)))!==r0O&&Q5v.Q02.z02(13,7082149)!==U0O&&Q5v.Q02.z02(39,6817747)!==j0O&&Q5v.Q02.z02(((147.,0x222)>(2.90E1,91)?(97.,17):(121.2E1,0x87)),3342295)!==c0O&&Q5v.Q02.z02(0,4275125)!==w0O&&Q5v.Q02.z02(0,((14.64E2,129)>=31?(55,3637533):(12.,2.02E2)>0x152?(0x10C,0.3):(79.7E1,0x17C)))!==B0O&&Q5v.Q02.z02(15,4918558)!==b0O&&Q5v.Q02.z02(((0x128,70)<=1.3980E3?(8.,20):(22,0x246)),2934514)!==f0O){panel.subholder.removeChild(marker.node);}
else{return function(e){self.modalEnd();}
;}
}
)(this);}
}
}
;F(/-([a-z])/g);STX.makeCamelCase=function(name){return name.replace(STX.camelCaseRegExp,function(g){return g[Q5v.R42].toUpperCase();}
);}
;STXChart.prototype.cloneStyle=function(styleObject){var i75="backgroundAttachment",rc={}
,nativeCamelSupport=v85;function capitalize(g){return g[Q5v.R42].toUpperCase();}
for(var i in styleObject){var v=styleObject[i];if(Q5v.v6(i,i75))nativeCamelSupport=k15;if(nativeCamelSupport){if(v&&Q5v.d6(v.constructor,String)&&isNaN(i)){rc[i]=v;}
}
else if(!isNaN(i)){var x=styleObject.getPropertyValue(v);if(x){v=v.split(y95);var ii=Q5v.E42;jj=v.length;var vcc=v[Q5v.E42];while(++ii<jj){vcc+=v[ii].charAt(Q5v.E42).toUpperCase()+v[ii].slice(Q5v.R42);}
rc[vcc]=x;}
}
else{var icc=i.replace(STX.camelCaseRegExp,capitalize);rc[icc]=v;}
}
return rc;}
;STXChart.prototype.canvasStyle=function(className){var s=this.styles[className];if(!s){var div=document.createElement(w12);div.className=className;document.body.appendChild(div);var styles=getComputedStyle(div);s=this.styles[className]=this.cloneStyle(styles);document.body.removeChild(div);if(!styles){this.styles[className]=Q5v.s15;}
}
return s;}
;STXChart.prototype.colorOrStyle=function(str){var X85="rgb(",T95="rgba(",P95=((1.45E3,1.0090E3)>=(80.,0x0)?(0xBD,4291074):(1.123E3,0x106)<(0x20B,119.)?47:(18.,72)),K65=2905318,Q32=828588649,g25=1111517845;var l92=g25,L92=-Q32,E92=Q5v.y42;for(var R92=Q5v.R42;Q5v.Q02.J02(R92.toString(),R92.toString().length,K65)!==l92;R92++){STX.extend(qparams,params,k15);prev.setDate(Q5v.R8Q(prev.getDate(),(Q5v.l42*num)));this.chart.container.appendChild(this.chart.canvas);arr[i].render(this.chart.context);E92+=Q5v.y42;}
if(Q5v.Q02.J02(E92.toString(),E92.toString().length,P95)!==L92){STX.Studies.addStudy(this,study.type,study.inputs,study.outputs,study.parameters,study.panel);context.lineTo(x1,bc);stx.panelDown(panel);return O6G-Q6G;}
if(str.indexOf(j45)!=-Q5v.R42)return str;if(str.indexOf(T95)!=-Q5v.R42)return str;if(str.indexOf(X85)!=-Q5v.R42)return str;if(Q5v.Z6(str,x65))return str;return this.canvasStyle(str);}
;STXChart.prototype.clearStyles=function(){this.styles={}
;}
;STXChart.prototype.setStyle=function(obj,attribute,value){if(!this.styles[obj]){this.canvasStyle(obj);}
if(!this.styles[obj])this.styles[obj]={}
;this.styles[obj][STX.makeCamelCase(attribute)]=value;}
;STXChart.prototype.canvasFont=function(className,ctx){var e32="bad css style for class ";if(!ctx)ctx=this.chart.context;var style=this.canvasStyle(className);if(!style)return ;var result=style.fontStyle+n82+style.fontWeight+n82+style.fontSize+n82+style.fontFamily;if(result.indexOf(t42)==-Q5v.R42){ctx.font=result;}
else{this.styles[className]=Q5v.s15;console.log(e32+className);}
}
;STXChart.prototype.canvasColor=function(className,ctx){var V72="un";if(!ctx)ctx=this.chart.context;var style=this.canvasStyle(className);if(!style)return ;var color=style.color;if(STX.isTransparent(color))color=this.defaultColor;ctx.globalAlpha=1;ctx.fillStyle=color;ctx.strokeStyle=color;var opacity=style.opacity;if(typeof opacity!=(V72+U22+d82+s65+q52))ctx.globalAlpha=opacity;}
;STXChart.prototype.getCanvasFontSize=function(className){var y32="12",s=this.canvasStyle(className),fs=s.fontSize;if(!fs)fs=y32;return parseInt(STX.stripPX(fs));}
;STXChart.prototype.getCanvasColor=function(className){var s=this.canvasStyle(className);return s.color;}
;STXChart.hideDates=function(){return v85;}
;STXChart.prototype.runPrepend=function(o,args,self){var prepends=this["prepend"+o];if(!prepends)return false;if(!self)self=this;for(var i=0;Q5v.y6(i,prepends.length);i++){var rv=prepends[i].apply(self,args);if(rv)return rv;}
return false;}
;STXChart.prototype.runAppend=function(o,args,self){var appends=this["append"+o];if(!appends)return false;if(!self)self=this;for(var i=0;Q5v.R6(i,appends.length);i++){var rv=appends[i].apply(self,args);if(rv)return rv;}
return false;}
;STXChart.registerDrawingTool=function(name,func){STXChart.drawingTools[name]=func;}
;STXChart.prototype.createBlock=function(left,width,top,height,className,context){if(!context)context=this.chart.context;if(typeof (height)=="undefined"){return ;}
this.canvasColor(className,context);context.fillRect(left,top,width,height);context.globalAlpha=1;}
;STXChart.prototype.changeOccurred=function(change){if(this.currentlyImporting)return ;if(this.changeCallback)this.changeCallback(this,change);}
;STXChart.prototype.setChartType=function(chartType){this.layout.chartType=chartType;if(this.displayInitialized)this.draw();this.changeOccurred(r42);}
;STXChart.prototype.setAggregationType=function(aggregationType){this.layout.aggregationType=aggregationType;if(this.chart.canvas){this.createDataSet();this.draw();}
this.changeOccurred("layout");}
;STXChart.prototype.setChartScale=function(chartScale){if(!chartScale)chartScale="linear";this.layout.chartScale=chartScale;if(this.chart.canvas)this.draw();this.changeOccurred("layout");}
;STXChart.prototype.setAdjusted=function(data){var M55="layou";this.layout.adj=data;if(this.chart.canvas){this.createDataSet();this.draw();}
this.changeOccurred((M55+Q5v.V05));}
;STXChart.prototype.setVolumeUnderlay=function(data){this.layout.volumeUnderlay=data;if(this.chart.canvas)this.draw();this.changeOccurred("layout");}
;STXChart.prototype.serializeDrawings=function(){var arr=[];for(var i=0;Q5v.L6(i,this.drawingObjects.length);i++){arr.push(this.drawingObjects[i].serialize());}
return arr;}
;STXChart.prototype.abortDrawings=function(){for(var i=0;Q5v.h6(i,this.drawingObjects.length);i++){this.drawingObjects[i].abort(true);}
this.drawingObjects=[];}
;STXChart.prototype.reconstructDrawings=function(arr){for(var i=0;Q5v.C6(i,arr.length);i++){var rep=arr[i];if(Q5v.W6(rep.name,"fibonacci"))rep.name="retracement";var Factory=STXChart.drawingTools[rep.name];if(!Factory){if(STX.Drawing[rep.name]){Factory=STX.Drawing[rep.name];STXChart.registerDrawingTool(rep.name,Factory);}
}
if(Factory){var drawing=new Factory();drawing.reconstruct(this,rep);this.drawingObjects.push(drawing);}
}
}
;STXChart.prototype.clearDrawings=function(cantUndo){if(cantUndo){this.undoStamps=[];}
else{this.undoStamp();}
this.abortDrawings();this.changeOccurred(c32);this.createDataSet();this.draw();}
;STXChart.prototype.createDrawing=function(type,parameters){var drawing=new STX.Drawing[type]();drawing.reconstruct(this,parameters);this.drawingObjects.push(drawing);this.draw();return drawing;}
;STXChart.prototype.removeDrawing=function(drawing){for(var i=0;Q5v.t6(i,this.drawingObjects.length);i++){if(Q5v.P6(this.drawingObjects[i],drawing)){this.drawingObjects.splice(i,1);this.changeOccurred("vector");this.draw();return ;}
}
}
;STXChart.prototype.dateFromTick=function(tick,chart,native){if(!chart)chart=this.chart;var interval=this.layout.interval,periodicity=this.layout.periodicity,l=chart.dataSet.length,dt,i;if(Q5v.Q6(tick,l)&&Q5v.z6(tick,0))return native?new Date(chart.dataSet[tick].DT.getTime()):chart.dataSet[tick].Date;if(Q5v.a6(tick,0)){dt=chart.dataSet[0].DT;for(i=0;Q5v.j6(i,3000);i++){if(-i==tick)return native?new Date(dt.getTime()):STX.yyyymmddhhmmssmmm(dt);if(!this.isDailyInterval(interval))dt=STX.LegacyMarket.prevPeriod(dt,interval,periodicity,this,null,this.dataZone);else if(Q5v.B6(interval,"day"))dt=STX.LegacyMarket.prevDay(dt,periodicity,this);else if(Q5v.I6(interval,"week"))dt=STX.LegacyMarket.prevWeek(dt,periodicity,this);else if(Q5v.u6(interval,"month"))dt=STX.LegacyMarket.prevMonth(dt,periodicity,this);}
}
else{dt=chart.dataSet[Q5v.s0(l,1)].DT;for(i=0;Q5v.m0(i,3000);i++){if(Q5v.N0(l-1+i,tick)){return native?new Date(dt.getTime()):STX.yyyymmddhhmmssmmm(dt);}
if(!this.isDailyInterval(interval))dt=STX.LegacyMarket.nextPeriod(dt,interval,periodicity,this,null,this.dataZone);else if(Q5v.R0(interval,(s12+Q5v.o55)))dt=STX.LegacyMarket.nextDay(dt,periodicity,this);else if(Q5v.L0(interval,"week"))dt=STX.LegacyMarket.nextWeek(dt,periodicity,this);else if(Q5v.h0(interval,"month"))dt=STX.LegacyMarket.nextMonth(dt,periodicity,this);}
}
return native?new Date(dt.getTime()):STX.yyyymmddhhmmssmmm(dt);}
;STXChart.prototype.futureTick=function(mydt,chart){var mym=STX.strToDateTime(mydt).getTime(),interval=this.layout.interval,periodicity=this.layout.periodicity,dt=chart.dataSet[Q5v.C0(chart.dataSet.length,1)].DT,m=dt.getTime(),ticks=0,computedPeriodicity=periodicity;if(!this.isDailyInterval(interval)){if(Q5v.W0(this.layout.timeUnit,"second")){ticks=Math.floor(Q5v.Y0((mym-m),1000,(periodicity*interval)));return (Q5v.O0(chart.dataSet.length,1))+ticks;}
else if(Q5v.A0(this.layout.timeUnit,"millisecond")){ticks=Math.floor(Q5v.q0((mym-m),(periodicity*interval)));return (Q5v.U0(chart.dataSet.length,1))+ticks;}
if(Q5v.w0(interval,"minute"))computedPeriodicity=Q5v.f0(periodicity,interval);if(Q5v.u0(interval,"tick"))computedPeriodicity=this.chart.xAxis.futureTicksInterval;}
for(var i=0;Q5v.s9(i,1500);i++){if(!this.isDailyInterval(interval)){if(Q5v.m9(dt.getHours(),chart.beginHour)&&Q5v.N9(dt.getMinutes(),chart.beginMinute)&&Q5v.T9(interval,"tick")){if(Q5v.l9((mym-m)/60000,chart.minutesInSession)){dt=STX.LegacyMarket.nextDay(dt,1,this);if(Q5v.n9(chart.beginHour,0)&&Q5v.i9(dt.getDay(),0)){dt.setHours(15);dt.setMinutes(0);}
if(Q5v.H9(chart.beginHour,0)&&Q5v.M9(dt.getDay(),1)){ticks+=Math.round(Q5v.e9(9,60,computedPeriodicity));}
else{ticks+=Math.round(Q5v.Q9(chart.minutesInSession,computedPeriodicity));}
}
else{dt=STX.LegacyMarket.nextPeriod(dt,interval,periodicity,this,null,this.dataZone);ticks+=1;}
}
else{dt=STX.LegacyMarket.nextPeriod(dt,interval,periodicity,this,null,this.dataZone);ticks+=1;}
}
else{ticks+=1;if(Q5v.z9(interval,"day"))dt=STX.LegacyMarket.nextDay(dt,periodicity,this);else if(Q5v.a9(interval,"week"))dt=STX.LegacyMarket.nextWeek(dt,periodicity,this);else if(Q5v.j9(interval,"month"))dt=STX.LegacyMarket.nextMonth(dt,periodicity,this);}
m=dt.getTime();if(Q5v.B9(m,mym)){return (Q5v.I9(chart.dataSet.length,1))+ticks;}
if(Q5v.u9(mym,m)){return (Q5v.s4(chart.dataSet.length,1))+ticks-1;}
}
return (Q5v.m4(chart.dataSet.length,1))+ticks;}
;STXChart.prototype.pastTick=function(mydt,chart){var v95=210,mym=STX.strToDateTime(mydt).getTime(),interval=this.layout.interval,periodicity=this.layout.periodicity,dt=chart.dataSet[Q5v.E42].DT,m=dt.getTime(),ticks=Q5v.E42,computedPeriodicity=periodicity;if(!this.isDailyInterval(interval)){if(Q5v.N4(this.layout.timeUnit,u35)){return Q5v.T4((mym-m),h85);}
else if(Q5v.l4(this.layout.timeUnit,K35)){return Q5v.n4(mym,m);}
if(Q5v.i4(interval,H15))computedPeriodicity=Q5v.H4(periodicity,interval);if(Q5v.M4(interval,U32))computedPeriodicity=this.chart.xAxis.futureTicksInterval;}
for(var i=Q5v.E42;Q5v.e4(i,I45);i++){if(!this.isDailyInterval(interval)){if(Q5v.O4(dt.getHours(),chart.beginHour)&&Q5v.A4(dt.getMinutes(),chart.beginMinute)&&Q5v.q4(interval,U32)){var dt2=STX.LegacyMarket.prevDay(dt,Q5v.R42,this);if(Q5v.U4((dt2.getTime()-mym)/n15,chart.minutesInSession)){dt=dt2;if(Q5v.w4(chart.beginHour,Q5v.E42)){if(Q5v.f4(dt.getDay(),Q5v.E42)){ticks+=Math.round(Q5v.x4(g42,t25,computedPeriodicity));}
else{ticks+=Math.round(Q5v.o1(chart.minutesInSession,computedPeriodicity));}
}
else if(Q5v.F1(chart.beginHour,g42)&&STX.LegacyMarket.isHalfDay(dt,chart.symbol)){ticks+=Math.round(Q5v.E1(v95,computedPeriodicity));}
else{ticks+=Math.round(Q5v.S1(chart.minutesInSession,computedPeriodicity));}
}
else{dt=STX.LegacyMarket.prevPeriod(dt,interval,periodicity,this,Q5v.s15,this.dataZone);ticks+=Q5v.R42;}
}
else{dt=STX.LegacyMarket.prevPeriod(dt,interval,periodicity,this,Q5v.s15,this.dataZone);ticks+=Q5v.R42;}
}
else{ticks+=Q5v.R42;}
if(Q5v.D1(interval,K32))dt=STX.LegacyMarket.prevDay(dt,periodicity,this);else if(Q5v.g1(interval,j52))dt=STX.LegacyMarket.prevWeek(dt,periodicity,this);else if(Q5v.p1(interval,z42))dt=STX.LegacyMarket.prevMonth(dt,periodicity,this);m=dt.getTime();if(Q5v.e1(m,mym)){return -ticks;}
if(Q5v.O1(mym,m)){return -(ticks+Q5v.R42);}
}
return -ticks;}
;STXChart.prototype.calculateYAxisMargins=function(yAxis){yAxis.zoom=yAxis.initialMarginTop+yAxis.initialMarginBottom;yAxis.scroll=Q5v.A1((yAxis.initialMarginTop-yAxis.initialMarginBottom),Q5v.y42);}
;STXChart.prototype.home=function(params){this.grabbingScreen=false;if(STXChart.insideChart)STX.unappendClassName(this.container,"stx-drag-chart");if(typeof params!="object"){params={maintainWhitespace:params}
;}
this.cancelTouchSingleClick=true;if(!this.chart.dataSet||!this.chart.dataSet.length){this.draw();return ;}
var barsDisplayedOnScreen=Math.floor(Q5v.q1(this.chart.width,this.layout.candleWidth));for(var chartName in this.charts){var chart=this.charts[chartName];chart.scroll=Math.min(barsDisplayedOnScreen+1,chart.dataSet.length);if(this.chart.allowScrollPast)chart.scroll=barsDisplayedOnScreen+1;var wsInTicks;if(params.maintainWhitespace){wsInTicks=Math.round(Q5v.U1(this.preferences.whitespace,this.layout.candleWidth));this.chart.scroll-=wsInTicks;}
else if(Q5v.B1(this.yaxisLabelStyle,"roundRectArrow")){var margin=3,height=this.getCanvasFontSize("stx_yaxis")+Q5v.I1(margin,2),leftMargin=Q5v.v3(height,2);wsInTicks=Math.round(Q5v.d3(leftMargin,this.layout.candleWidth));if(Q5v.Z3(wsInTicks,1))chart.scroll-=wsInTicks;}
this.calculateYAxisMargins(chart.panel.yAxis);}
this.draw();}
;STXChart.prototype.tickFromDate=function(dt,chart,adj){if(!chart)chart=this.chart;if(!chart.dataSet.length)return 0;var DT=STX.strToDateTime(dt);if(!adj)adj=0;if(!STXChart.isDailyInterval(this.layout.interval))DT.setMinutes(DT.getMinutes()+adj);if(Q5v.y3(chart.beginHour,0)&&!STXChart.isDailyInterval(this.layout.interval)){if(Q5v.R3(DT.getHours(),0)){DT.setHours(chart.beginHour);DT.setMinutes(chart.beginMinute);DT.setSeconds(0);DT.setMilliseconds(0);}
}
var mym=DT.getTime(),m=chart.dataSet[Q5v.L3(chart.dataSet.length,1)].DT.getTime();if(Q5v.h3(m,mym))return this.futureTick(dt,chart);var first=chart.dataSet[0].DT.getTime();if(Q5v.C3(mym,first))return this.pastTick(dt,chart);for(var i=Q5v.W3(chart.dataSet.length,1);Q5v.t3(i,0);i--){m=chart.dataSet[i].DT.getTime();if(Q5v.P3(m,mym))return i;}
}
;STXChart.prototype.timeShiftDate=function(dt){var ms=dt.getTime();ms+=Q5v.Q3(this.timeZoneOffset,n15);return new Date(ms);}
;STXChart.XAxisLabel=function(hz,grid,text){this.hz=hz;this.grid=grid;this.text=text;}
;STXChart.prototype.createXAxis=function(chart){if(Q5v.z3(chart.dataSegment.length,0))return null;var arguments$=[chart],axisRepresentation=this.runPrepend("createXAxis",arguments$);if(axisRepresentation)return axisRepresentation;var interval=this.layout.interval,timeUnit=this.layout.timeUnit;if(Q5v.a3(interval,"tick")||Q5v.j3(chart.xAxis.axisType,"ntb")||this.hasNTBAxis[this.layout.aggregationType]||Q5v.B3(timeUnit,(S95+d82+o82+E45+k85))||Q5v.I3(timeUnit,"millisecond")){return this.createTickXAxisWithDates(chart);}
if(Q5v.u3(chart.xAxis.axisType,"numeric")){return this.createNumericXAxis(chart);}
var displayLetters=false,periodicity=this.layout.periodicity,candleWidth=this.layout.candleWidth,p=periodicity,isIntraday=false,isDaily=false,isWeekly=false,isMonthly=false;if(Q5v.s7(interval,"week")){isWeekly=true;p=Q5v.m7(5,p);}
if(Q5v.N7(interval,"month")){isMonthly=true;p=Q5v.T7(20,p);}
if(Q5v.l7(candleWidth*(20/p),50))displayLetters=true;var i=0;chart.xaxis=[];for(;Q5v.n7(i,chart.maxTicks);i++){if(chart.dataSegment[i])break;chart.xaxis.push(null);}
var dt;if(chart.dataSegment[i]){dt=chart.dataSegment[i].DT;}
else{dt=new Date();if(this.dataZone){var tzNow=STX.convertTimeZone(now,null,this.dataZone);dt=new Date(tzNow.getFullYear(),tzNow.getMonth(),tzNow.getDate(),tzNow.getHours(),tzNow.getMinutes(),tzNow.getSeconds(),tzNow.getMilliseconds());}
}
var currentDate=dt.getDate(),is24=(Q5v.i7(chart.minutesInSession,1440));if(is24){if(chart.dataSegment[i]&&chart.dataSegment[i].displayDate){currentDate=chart.dataSegment[i].displayDate.getDate();}
else{currentDate=this.timeShiftDate(dt).getDate();}
}
var prevMonth=dt.getMonth(),prevYear=dt.getFullYear(),ticksPerDay=1;if(!this.isDailyInterval(interval)){isIntraday=true;if(Q5v.H7(interval,"minute"))interval=1;ticksPerDay=Math.ceil(Q5v.M7(chart.minutesInSession,periodicity,interval));}
else{isDaily=true;}
var ticksPerClick=Math.round(Q5v.P7(ticksPerDay,Math.ceil(ticksPerDay/Math.floor(100/candleWidth))));if(Q5v.Q7(ticksPerClick,1))ticksPerClick=1;var minuteBoundary=Q5v.z7(ticksPerClick,periodicity,interval);if(chart.prettyXaxis){var mod=chart.prettyXaxis[Q5v.r7(periodicity,interval)];if(!mod)mod=1;if(Q5v.c7(minuteBoundary,mod)){minuteBoundary=Q5v.b7(Math.floor((minuteBoundary+mod)/mod),mod);}
}
axisRepresentation=[];var standardBeginDay=Q5v.K7(chart.beginHour,60)+chart.beginMinute,prices;candleWidth=this.layout.candleWidth;for(i;Q5v.v2(i,chart.maxTicks);i++){var hz,text;if(!isMonthly&&Q5v.o2(chart.maxTicks/ticksPerDay,(this.chart.width/this.chart.xaxisFactor))){if(Q5v.F2(i,chart.dataSegment.length)){prices=chart.dataSegment[i];if(!prices)continue;if(i&&prices.leftOffset)candleWidth=Q5v.E2((prices.leftOffset-prices.candleWidth/2),i);dt=prices.DT;if(chart.xAxis.useDataDate){dtShifted=dt;}
else if(prices.displayDate){dtShifted=prices.displayDate;}
else if(isIntraday){dtShifted=this.timeShiftDate(dt);}
else{dtShifted=dt;}
}
else{if(!chart.xAxis.futureTicks)break;dt=this.getNextInterval(dt,periodicity,this.dataZone);if(chart.xAxis.useDataDate)dtShifted=dt;else if(isIntraday)dtShifted=this.timeShiftDate(dt);else dtShifted=dt;}
var isNextDate=Q5v.S2(dt.getDate(),currentDate);if(is24)isNextDate=Q5v.D2(dtShifted.getDate(),currentDate);if(isNextDate){var gridType="boundary";if(!isIntraday)gridType="line";currentDate=dt.getDate();if(is24)currentDate=dtShifted.getDate();text="";if(!STXChart.hideDates()){var y=dt.getFullYear();if(Q5v.g2(y,prevYear)){prevYear=y;text=y;hz=chart.left+Q5v.p2(i,candleWidth)-1;if(Q5v.e2(hz,chart.right)){axisRepresentation.push(new STXChart.XAxisLabel(hz,"boundary",text));}
}
if(chart.xAxis.formatter){text=chart.xAxis.formatter(dtShifted,gridType);}
else if(this.internationalizer){text=this.internationalizer.monthDay.format(dtShifted);}
else{text=(dtShifted.getMonth()+1)+"/"+dtShifted.getDate();}
hz=chart.left+Q5v.O2(((2*i+1)*candleWidth),2)-1;if(Q5v.A2(hz,chart.right)){axisRepresentation.push(new STXChart.XAxisLabel(hz,"line",text));}
}
}
var minutes=Q5v.q2(dt.getHours(),60)+dt.getMinutes();if(Q5v.j2(this.chart.beginHour,0)||Q5v.f2(dt.getDay(),0))minutes=Q5v.u2(minutes,standardBeginDay);else minutes=Q5v.s8(minutes,(15*60));if(is24)minutes=Q5v.m8(dtShifted.getHours(),60)+dtShifted.getMinutes();if(Q5v.N8(minutes%minuteBoundary,0)){hz=chart.left+Q5v.T8(((2*i+1)*candleWidth),2)-1;text="";if(!STXChart.hideDates()){if(chart.xAxis.formatter){text=chart.xAxis.formatter(dtShifted,"line");}
else{text=STX.timeAsDisplay(dtShifted,this);}
}
if(Q5v.l8(hz,chart.right)){axisRepresentation.push(new STXChart.XAxisLabel(hz,"line",text));}
}
}
else{if(Q5v.n8(i,chart.dataSegment.length)){prices=chart.dataSegment[i];if(i&&prices.leftOffset)candleWidth=Q5v.i8((prices.leftOffset-prices.candleWidth/2),i);dt=prices.DT;}
else{if(!chart.xAxis.futureTicks)break;if(isIntraday)dt=STX.LegacyMarket.nextPeriod(dt,interval,periodicity,this,null,this.dataZone);else if(isWeekly)dt=STX.LegacyMarket.nextWeek(dt,periodicity,this);else if(isMonthly)dt=STX.LegacyMarket.nextMonth(dt,periodicity,this);else if(isDaily)dt=STX.LegacyMarket.nextDay(dt,periodicity,this);}
dtShifted=dt;var m=dt.getMonth(),y1=dt.getFullYear();if(Q5v.H8(y1,prevYear)){prevYear=y1;hz=chart.left+(Q5v.M8(i,candleWidth))-1;text="";if(!STXChart.hideDates())text=y1;axisRepresentation.push(new STXChart.XAxisLabel(hz,"boundary",text));}
if(Q5v.e8(m,prevMonth)){var doIt="monthly";if(isWeekly&&Q5v.O8(chart.maxTicks*periodicity,(52*1)))doIt="quarterly";else if(isMonthly&&Q5v.A8(chart.maxTicks*periodicity,(12*1)))doIt="quarterly";else if(isDaily&&Q5v.q8(chart.maxTicks*periodicity,(365*1)))doIt="quarterly";if(isWeekly&&Q5v.U8(chart.maxTicks*periodicity,(52*2)))doIt="none";else if(isMonthly&&Q5v.w8(chart.maxTicks*periodicity,(12*2)))doIt="none";else if(isDaily&&Q5v.f8(chart.maxTicks*periodicity,(365*2)))doIt=(b15+s45+d82);if(Q5v.x8(doIt,"monthly")||(Q5v.X5(doIt,"quarterly")&&(Q5v.o5(m,0)||Q5v.k5(m,3)||Q5v.F5(m,6)||Q5v.E5(m,9)))){prevMonth=m;hz=chart.left+Q5v.S5(((2*i+1)*candleWidth),2)-1;text="";if(!STXChart.hideDates())text=STX.monthAsDisplay(m,displayLetters,this);axisRepresentation.push(new STXChart.XAxisLabel(hz,"line",text));}
}
}
var obj={DT:dtShifted,Date:STX.yyyymmddhhmm(dtShifted)}
;if(Q5v.D5(i,chart.dataSegment.length))obj.data=chart.dataSegment[i];else obj.data=null;chart.xaxis.push(obj);}
this.runAppend("createXAxis",arguments$);return axisRepresentation;}
;STXChart.prototype.drawXAxis=function(chart,axisRepresentation){var l12="awXAxi",S15="ary",B52="id_",f92="x_g",u22="nter",arguments$=[chart,axisRepresentation];if(this.runPrepend("drawXAxis",arguments$))return ;if(!axisRepresentation)return ;var priorBoundary=null,context=this.chart.context;this.canvasFont("stx_xaxis");context.textAlign=(O52+u22);context.textBaseline="middle";var obj;for(var j=0;Q5v.g5(j,axisRepresentation.length);j++){obj=axisRepresentation[j];var w=context.measureText(obj.text+"   ").width,w2=Math.max(w,chart.xAxis.minimumLabelWidth);obj.hz=Math.floor(obj.hz+this.micropixels)+0.5;obj.left=Q5v.p5(obj.hz,(w2/2));obj.right=obj.hz+(Q5v.Y5(w2,2));obj.unpaddedRight=obj.hz+(Q5v.G5(w,2));}
var plotter=new STX.Plotter();plotter.newSeries("line","stroke",this.canvasStyle("stx_grid"));plotter.newSeries("boundary","stroke",this.canvasStyle((q22+f92+m95+B52+U22+O22+m95+Q5v.m15)));plotter.newSeries("border","stroke",this.canvasStyle("stx_grid_border"));var bottom=chart.panel.bottom,yAxis=chart.panel.yAxis,prevRight=-1,nextBoundaryLeft=Math.MAX_VALUE,drawBorders=chart.xAxis.displayBorder||Q5v.J5(chart.xAxis.displayBorder,null);if(Q5v.V5(this.axisBorders,true))drawBorders=true;if(Q5v.r5(this.axisBorders,false))drawBorders=false;var b=drawBorders?Q5v.c5(yAxis.bottom,0.5):yAxis.bottom,middle=Q5v.b5(bottom,this.xaxisHeight/2);if(drawBorders)middle+=3;for(var nb=0;Q5v.K5(nb,axisRepresentation.length);nb++){if(Q5v.v6Z(axisRepresentation[nb].grid,(H22+K82+s45+U22+S15))){nextBoundaryLeft=axisRepresentation[nb].left;break;}
}
var prevHz=0,count=0;for(var i=0;Q5v.d6Z(i,axisRepresentation.length);i++){obj=axisRepresentation[i];if(Q5v.Z6Z(i,nb)){for(nb++;Q5v.y6Z(nb,axisRepresentation.length);nb++){if(Q5v.R6Z(axisRepresentation[nb].grid,"boundary")){nextBoundaryLeft=axisRepresentation[nb].left;break;}
}
if(Q5v.L6Z(nb,axisRepresentation.length)){nb=-1;nextBoundaryLeft=Math.MAX_VALUE;}
if(prevRight>-1){if(Q5v.h6Z(obj.left,prevRight))continue;}
}
else{if(prevRight>-1){if(Q5v.C6Z(obj.left,prevRight))continue;}
if(Q5v.W6Z(obj.right,nextBoundaryLeft))continue;}
prevRight=obj.right;if((Q5v.t6Z(Math.floor(obj.unpaddedRight),this.chart.right))){count++;if(chart.xAxis.displayGridLines){plotter.moveTo(obj.grid,obj.hz,yAxis.top);plotter.lineTo(obj.grid,obj.hz,b);}
if(drawBorders){plotter.moveTo("border",obj.hz,b+0.5);plotter.lineTo("border",obj.hz,b+6);}
prevHz=obj.hz;this.canvasColor(Q5v.P6Z(obj.grid,"boundary")?"stx_xaxis_dark":"stx_xaxis");context.fillText(obj.text,obj.hz,middle);}
}
if(drawBorders){var bb=Math.round(yAxis.bottom)+0.5,wb=Math.round(chart.right)+0.5;plotter.moveTo("border",chart.left,bb);plotter.lineTo("border",wb,bb);}
plotter.draw(context);context.textAlign="left";this.runAppend((r75+l12+S95),arguments$);}
;STXChart.prototype.createNumericXAxis=function(chart){axisRepresentation=[];chart.xaxis=[];for(var i=0;Q5v.Q6Z(i,chart.maxTicks);i++){if(chart.dataSegment[i])break;chart.xaxis.push(null);}
for(var j=i;Q5v.z6Z(j,chart.maxTicks);j++){if(!chart.dataSegment[i])break;}
var filledScreenRatio=Q5v.a6Z((j-i),chart.maxTicks),idealTickSizePixels=chart.xAxis.idealTickSizePixels?chart.xAxis.idealTickSizePixels:chart.xAxis.autoComputedTickSizePixels,idealTicks=Math.round(Q5v.j6Z((this.chart.width*filledScreenRatio),idealTickSizePixels)),minMax=this.determineMinMax(chart.dataSegment,["index"]),maxPoint=minMax[1],minPoint=minMax[0],range=Q5v.B6Z(maxPoint,minPoint);function niceNum(range,round){var exponent,fraction,niceFraction;exponent=Math.floor(Math.log10(range));fraction=Q5v.I6Z(range,Math.pow(10,exponent));if(round){if(Q5v.u6Z(fraction,1.5))niceFraction=1;else if(Q5v.s0Z(fraction,3))niceFraction=2;else if(Q5v.m0Z(fraction,7))niceFraction=5;else niceFraction=10;}
else{if(Q5v.N0Z(fraction,1))niceFraction=1;else if(Q5v.T0Z(fraction,2))niceFraction=2;else if(Q5v.l0Z(fraction,5))niceFraction=5;else niceFraction=10;}
return Q5v.n0Z(niceFraction,Math.pow(10,exponent));}
var niceRange=niceNum(Q5v.i0Z(maxPoint,minPoint),false),tickSpacing=niceNum(Q5v.H0Z(range,(idealTicks-1)),true),niceMin=Q5v.M0Z(Math.floor(minPoint/tickSpacing),tickSpacing),niceMax=Q5v.e0Z(Math.ceil(maxPoint/tickSpacing),tickSpacing),nextLabel=niceMin;if(Q5v.O0Z(niceMin,minPoint))nextLabel=niceMin+tickSpacing;var hz;for(i;Q5v.A0Z(i,chart.maxTicks);i++){var prices=chart.dataSegment[i];if(prices){var obj={index:prices.index,data:prices}
;chart.xaxis.push(obj);if(Q5v.q0Z(prices.index,nextLabel))continue;if(Q5v.U0Z(prices.index,nextLabel)){hz=chart.left+Q5v.w0Z(i,this.layout.candleWidth)+this.micropixels;}
else if(Q5v.f0Z(prices.index,nextLabel)){hz=chart.left+Q5v.x0Z(i,this.layout.candleWidth)-3+this.micropixels;}
axisRepresentation.push(new STXChart.XAxisLabel(hz,"line",nextLabel));nextLabel+=tickSpacing;}
else{chart.xaxis.push(null);}
}
return axisRepresentation;}
;STXChart.prototype.createTickXAxisWithDates=function(chart){var T65="[",v25="egm",A65="ta",x72="rde",K42="ndi";if(!chart)chart=this.chart;if(!this.timeIntervalMap){this.timePossibilities=[STX.MILLISECOND,STX.SECOND,STX.MINUTE,STX.HOUR,STX.DAY,STX.MONTH,STX.YEAR];this.timeIntervalMap={}
;this.timeIntervalMap[STX.MILLISECOND]={arr:[1,2,5,10,20,50,100,250,500],minTimeUnit:0,maxTimeUnit:1000}
;this.timeIntervalMap[STX.SECOND]={arr:[1,2,5,10,15,30],minTimeUnit:0,maxTimeUnit:60}
;this.timeIntervalMap[STX.MINUTE]={arr:[1,2,5,10,15,30],minTimeUnit:0,maxTimeUnit:60}
;this.timeIntervalMap[STX.HOUR]={arr:[1,2,3,4,6,12],minTimeUnit:0,maxTimeUnit:24}
;this.timeIntervalMap[STX.DAY]={arr:[1,2,7,14],minTimeUnit:1,maxTimeUnit:32}
;this.timeIntervalMap[STX.MONTH]={arr:[1,2,3,6],minTimeUnit:1,maxTimeUnit:13}
;this.timeIntervalMap[STX.YEAR]={arr:[1,2,3,5],minTimeUnit:1,maxTimeUnit:20000000}
;this.timeIntervalMap[STX.DECADE]={arr:[10],minTimeUnit:0,maxTimeUnit:2000000}
;}
var daysInMonth=[31,28,31,30,31,30,31,31,30,31,30,31],idealTickSizePixels=chart.xAxis.idealTickSizePixels?chart.xAxis.idealTickSizePixels:chart.xAxis.autoComputedTickSizePixels,idealTicks=Q5v.X9Z(this.chart.width,idealTickSizePixels);for(var x=0;Q5v.o9Z(x,chart.dataSegment.length);x++)if(chart.dataSegment[x])break;if(Q5v.k9Z(x,chart.dataSegment.length))return [];var i,simpleCalc=Q5v.F9Z(chart.dataSegment[chart.dataSegment.length-1].DT.getTime(),chart.dataSegment[x].DT.getTime()),timeRange=simpleCalc;if(Q5v.E9Z(timeRange,14*STX.DAY)&&!STXChart.isDailyInterval(this.layout.interval)){var nextClose=null,nextCloseEpoch=0,prevEpoch=0;timeRange=0;for(i=0;Q5v.S9Z(i,chart.dataSegment.length);i++){var q=chart.dataSegment[i];if(!q)continue;var epoch=q.DT.getTime();if(Q5v.D9Z(epoch,nextCloseEpoch)){nextClose=new Date(q.DT);nextClose.setHours(chart.endHour);nextClose.setMinutes(chart.endMinute);nextCloseEpoch=nextClose.getTime();if(Q5v.g9Z(nextCloseEpoch,epoch)){nextCloseEpoch=epoch;}
}
else{timeRange+=Q5v.p9Z(epoch,prevEpoch);if(Q5v.Y9Z(epoch-prevEpoch,0)){console.log((e25+S95+S95+d82+m95+I95+E45+s45+n82+d82+E85+w22+n25+G72+O22+x05+S95+n82+s45+E45+Q5v.V05+n82+A15+s45+n82+O22+S95+O52+K42+s45+s35+n82+E45+x72+m95+v75+o82+i15+c25+p05+U22+O22+A65+U42+v25+d82+T15+T65)+i+"].DT=="+q.DT);}
}
prevEpoch=epoch;}
}
if(Q5v.G9Z(timeRange,0))timeRange=simpleCalc;timeRange=Q5v.J9Z((timeRange/chart.dataSegment.length),chart.maxTicks);var msPerTick=Q5v.V9Z(timeRange,idealTicks);for(i=0;Q5v.r9Z(i,this.timePossibilities.length);i++){if(Q5v.c9Z(this.timePossibilities[i],msPerTick))break;}
if(Q5v.b9Z(i,this.timePossibilities.length)){i--;}
else{var prevUnit=this.timePossibilities[Q5v.K9Z(i,1)],prevMap=this.timeIntervalMap[prevUnit],prevMultiplier=prevMap.arr[Q5v.v4Z(prevMap.arr.length,1)];if(Q5v.d4Z(msPerTick-(prevUnit*prevMultiplier),this.timePossibilities[i]-msPerTick))i--;}
var timeUnit=this.timePossibilities[i];if(chart.xAxis.timeUnit)timeUnit=chart.xAxis.timeUnit;chart.xAxis.activeTimeUnit=timeUnit;var timeInterval=STX.clone(this.timeIntervalMap[timeUnit]);for(i=0;Q5v.Z4Z(i,timeInterval.arr.length);i++){if(Q5v.y4Z(timeInterval.arr[i]*timeUnit,msPerTick))break;}
if(Q5v.R4Z(i,timeInterval.arr.length)){i--;}
else{if(Q5v.L4Z(msPerTick-timeInterval.arr[i-1]*timeUnit,timeInterval.arr[i]*timeUnit-msPerTick))i--;}
var timeUnitMultiplier=timeInterval.arr[i];if(chart.xAxis.timeUnitMultiplier)timeUnitMultiplier=chart.xAxis.timeUnitMultiplier;axisRepresentation=[];chart.xaxis=[];for(i=0;Q5v.h4Z(i,chart.maxTicks);i++){if(chart.dataSegment[i])break;chart.xaxis.push(null);}
var dtShifted=0,nextTimeUnit=timeInterval.minTimeUnit,previousTimeUnitLarge=-1,firstTick=true,candleWidth=this.layout.candleWidth;for(i;Q5v.C4Z(i,chart.maxTicks);i++){if(Q5v.W4Z(i,chart.dataSegment.length)){prices=chart.dataSegment[i];if(prices.displayDate&&chart.xAxis.adjustTimeZone){dtShifted=prices.displayDate;}
else{dtShifted=prices.DT;}
if(i&&prices.leftOffset)candleWidth=Q5v.t4Z((prices.leftOffset-prices.candleWidth/2),i);}
else{if(!chart.xAxis.futureTicks)break;var dt;if(dtShifted){dt=dtShifted;}
else{dt=new Date();if(this.dataZone){var tzNow=STX.convertTimeZone(now,null,this.dataZone);dt=new Date(tzNow.getFullYear(),tzNow.getMonth(),tzNow.getDate(),tzNow.getHours(),tzNow.getMinutes(),tzNow.getSeconds(),tzNow.getMilliseconds());}
}
dt=this.getNextInterval(dt,this.layout.periodicity,this.dataZone);if(chart.xAxis.useDataDate)dtShifted=dt;else if(!this.isDailyInterval(this.layout.interval))dtShifted=this.timeShiftDate(dt);else dtShifted=dt;}
var obj={DT:dtShifted,Date:STX.yyyymmddhhmmssmmm(dtShifted)}
;if(Q5v.P4Z(i,chart.dataSegment.length))obj.data=chart.dataSegment[i];else obj.data=null;chart.xaxis.push(obj);var currentTimeUnit,currentTimeUnitLarge;if(Q5v.Q4Z(timeUnit,STX.MILLISECOND)){currentTimeUnit=dtShifted.getMilliseconds();currentTimeUnitLarge=dtShifted.getSeconds();}
else if(Q5v.z4Z(timeUnit,STX.SECOND)){currentTimeUnit=dtShifted.getSeconds();currentTimeUnitLarge=dtShifted.getMinutes();}
else if(Q5v.a4Z(timeUnit,STX.MINUTE)){currentTimeUnit=dtShifted.getMinutes();currentTimeUnitLarge=dtShifted.getHours();}
else if(Q5v.j4Z(timeUnit,STX.HOUR)){currentTimeUnit=dtShifted.getHours()+Q5v.B4Z(dtShifted.getMinutes(),60);currentTimeUnitLarge=dtShifted.getDate();}
else if(Q5v.I4Z(timeUnit,STX.DAY)){currentTimeUnit=dtShifted.getDate();currentTimeUnitLarge=dtShifted.getMonth()+1;}
else if(Q5v.u4Z(timeUnit,STX.MONTH)){currentTimeUnit=dtShifted.getMonth()+1;currentTimeUnitLarge=dtShifted.getFullYear();}
else if(Q5v.s1Z(timeUnit,STX.YEAR)){currentTimeUnit=dtShifted.getFullYear();currentTimeUnitLarge=dtShifted.getFullYear()+1000;}
else{currentTimeUnit=dtShifted.getFullYear();currentTimeUnitLarge=0;}
var text=null,hz;if(Q5v.m1Z(previousTimeUnitLarge,currentTimeUnitLarge)){if(Q5v.N1Z(currentTimeUnit,nextTimeUnit)){nextTimeUnit=timeInterval.minTimeUnit;}
hz=chart.left+(Q5v.T1Z(i,candleWidth))-1;text=null;if(Q5v.l1Z(timeUnit,STX.HOUR)||(Q5v.n1Z(timeUnit,STX.MINUTE)&&Q5v.i1Z(previousTimeUnitLarge,currentTimeUnitLarge))){if(chart.xAxis.formatter){text=chart.xAxis.formatter(dtShifted,"boundary",STX.DAY,1);}
else{if(this.internationalizer){text=this.internationalizer.monthDay.format(dtShifted);}
else{text=(dtShifted.getMonth()+1)+"/"+dtShifted.getDate();}
}
}
else if(Q5v.H1Z(timeUnit,STX.DAY)){if(Q5v.M1Z(previousTimeUnitLarge,currentTimeUnitLarge)){text=dtShifted.getFullYear();}
else{text=STX.monthAsDisplay(dtShifted.getMonth(),false,this);}
}
else if(Q5v.e1Z(timeUnit,STX.MONTH)){text=dtShifted.getFullYear();}
if(text&&previousTimeUnitLarge!=-1){axisRepresentation.push(new STXChart.XAxisLabel(hz,"boundary",text));}
}
if(Q5v.O1Z(currentTimeUnit,nextTimeUnit)){if(Q5v.A1Z(nextTimeUnit,timeInterval.minTimeUnit)){if(Q5v.q1Z(currentTimeUnitLarge,previousTimeUnitLarge))continue;}
var labelDate=new Date(dtShifted);hz=chart.left+Q5v.U1Z(((2*i+1)*candleWidth),2)-1;var boundaryTimeUnit=Q5v.w1Z(Math.floor(currentTimeUnit/timeUnitMultiplier),timeUnitMultiplier);if(Q5v.f1Z(boundaryTimeUnit,currentTimeUnit)){if(Q5v.x1Z(this.layout.interval,"week"))boundaryTimeUnit=currentTimeUnit;else hz-=Q5v.X3Z(candleWidth,4);}
if(Q5v.o3Z(timeUnit,STX.MILLISECOND)){labelDate.setMilliseconds(boundaryTimeUnit);}
else if(Q5v.k3Z(timeUnit,STX.SECOND)){labelDate.setMilliseconds(0);labelDate.setSeconds(boundaryTimeUnit);}
else if(Q5v.F3Z(timeUnit,STX.MINUTE)){labelDate.setMilliseconds(0);labelDate.setSeconds(0);labelDate.setMinutes(boundaryTimeUnit);}
else if(Q5v.E3Z(timeUnit,STX.HOUR)){labelDate.setMilliseconds(0);labelDate.setSeconds(0);labelDate.setMinutes(0);labelDate.setHours(boundaryTimeUnit);}
else if(Q5v.S3Z(timeUnit,STX.DAY)){labelDate.setDate(Math.max(1,boundaryTimeUnit));}
else if(Q5v.D3Z(timeUnit,STX.MONTH)){labelDate.setDate(1);labelDate.setMonth(Q5v.g3Z(boundaryTimeUnit,1));}
else if(Q5v.p3Z(timeUnit,STX.YEAR)){labelDate.setDate(1);labelDate.setMonth(0);}
else{labelDate.setDate(1);labelDate.setMonth(0);}
nextTimeUnit=boundaryTimeUnit+timeUnitMultiplier;if(Q5v.Y3Z(timeUnit,STX.DAY))timeInterval.maxTimeUnit=daysInMonth[labelDate.getMonth()]+1;if(Q5v.G3Z(nextTimeUnit,timeInterval.maxTimeUnit))nextTimeUnit=timeInterval.minTimeUnit;previousTimeUnitLarge=currentTimeUnitLarge;if(firstTick&&Q5v.J3Z(boundaryTimeUnit,currentTimeUnit))continue;if(chart.xAxis.formatter){text=chart.xAxis.formatter(labelDate,"line",timeUnit,timeUnitMultiplier);}
else{if(Q5v.V3Z(timeUnit,STX.DAY)){text=labelDate.getDate();}
else if(Q5v.r3Z(timeUnit,STX.MONTH)){text=STX.monthAsDisplay(dtShifted.getMonth(),false,this);}
else if(Q5v.c3Z(timeUnit,STX.YEAR)||Q5v.b3Z(timeUnit,STX.DECADE)){text=labelDate.getFullYear();}
else{text=STX.timeAsDisplay(labelDate,this,timeUnit);}
}
axisRepresentation.push(new STXChart.XAxisLabel(hz,"line",text));}
firstTick=false;}
return axisRepresentation;}
;var cached=Q5v.E42,notcached=Q5v.E42;STXChart.prototype.createYAxis=function(panel,parameters){var U25="is",s22="Ax",j82="ate",q95="cre";if(this.runPrepend((q95+j82+f52+s22+U25),arguments))return ;var chart=panel.chart,isAChart=(Q5v.K3Z(panel.name,chart.name));if(!parameters)parameters={}
;parameters.noChange=false;var yAxis=parameters.yAxis?parameters.yAxis:panel.yAxis;if(STXChart.enableCaching&&Q5v.v7Z(yAxis.high,panel.cacheHigh)&&Q5v.d7Z(yAxis.low,panel.cacheLow)){var leftTick=Q5v.Z7Z(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks;panel.cacheLeft=Math.min(panel.cacheLeft,leftTick);panel.cacheRight=Math.max(panel.cacheRight,rightTick);panel.cacheLeft=leftTick;panel.cacheRight=rightTick;parameters.noChange=true;cached++;}
else{panel.cacheLeft=1000000;panel.cacheRight=-1;panel.cacheHigh=yAxis.high;panel.cacheLow=yAxis.low;notcached++;}
var idealX=chart.xAxis.idealTickSizePixels?chart.xAxis.idealTickSizePixels:chart.xAxis.autoComputedTickSizePixels;if(yAxis.goldenRatioYAxis){if(Q5v.y7Z(yAxis.idealTickSizePixels,idealX/1.618))parameters.noChange=false;}
if(!parameters.noChange){var height=yAxis.height=Q5v.R7Z(yAxis.bottom,yAxis.top),pricePerPix=Q5v.L7Z((yAxis.high-yAxis.low),(height-yAxis.zoom));if(parameters.ground&&!yAxis.semiLog){yAxis.high=(Q5v.h7Z(yAxis.high,yAxis.low))+Q5v.C7Z(yAxis.zoom,pricePerPix);yAxis.low=0;}
else{yAxis.high=yAxis.high+Q5v.W7Z((yAxis.zoom/2),pricePerPix)+Q5v.t7Z(yAxis.scroll,pricePerPix);var unadjustedLow=yAxis.low;yAxis.low=Q5v.P7Z(yAxis.low,(yAxis.zoom/2)*pricePerPix,yAxis.scroll*pricePerPix);if(yAxis.semiLog&&Q5v.J7Z(yAxis.low,0))yAxis.low=unadjustedLow;}
if(yAxis.min||Q5v.V7Z(yAxis.min,0))yAxis.low=yAxis.min;if(yAxis.max||Q5v.r7Z(yAxis.max,0))yAxis.high=yAxis.max;yAxis.shadow=Q5v.c7Z(yAxis.high,yAxis.low);if(yAxis.semiLog&&(!this.activeDrawing||Q5v.b7Z(this.activeDrawing.name,"projection"))){yAxis.logHigh=Q5v.K7Z(Math.log(yAxis.high),Math.LN10);var semilow=Math.max(yAxis.low,0.000000001);yAxis.logLow=Q5v.v2Z(Math.log(semilow),Math.LN10);if(Q5v.d2Z(yAxis.low,0))yAxis.logLow=0;yAxis.logShadow=Q5v.Z2Z(yAxis.logHigh,yAxis.logLow);}
var fontHeight;if(yAxis.goldenRatioYAxis&&isAChart){yAxis.idealTickSizePixels=Q5v.y2Z(idealX,1.618);if(Q5v.R2Z(yAxis.idealTickSizePixels,0)){fontHeight=this.getCanvasFontSize("stx_yaxis");yAxis.idealTickSizePixels=Q5v.L2Z(fontHeight,5);}
}
else{if(!yAxis.idealTickSizePixels){fontHeight=this.getCanvasFontSize("stx_yaxis");if(isAChart){yAxis.idealTickSizePixels=Q5v.h2Z(fontHeight,5);}
else{yAxis.idealTickSizePixels=Q5v.C2Z(fontHeight,2);}
}
}
var idealTicks=Math.round(Q5v.W2Z(height,yAxis.idealTickSizePixels)),shadow=parameters.range?Q5v.t2Z(parameters.range[1],parameters.range[0]):yAxis.shadow;yAxis.priceTick=Math.floor(Q5v.P2Z(shadow,idealTicks));var n=1;for(var zz=0;Q5v.Q2Z(zz,10);zz++){if(Q5v.z2Z(yAxis.priceTick,0))break;n*=10;yAxis.priceTick=Q5v.a2Z(Math.floor(shadow/idealTicks*n),n);}
if(Q5v.j2Z(zz,10))yAxis.priceTick=0.00000001;yAxis.priceTick=Q5v.B2Z(Math.round(shadow/idealTicks*n),n);var verticalTicks=Math.round(Q5v.I2Z(shadow,yAxis.priceTick));if(parameters.range&&Q5v.u2Z(verticalTicks,shadow)&&!yAxis.noEvenDivisorTicks){while(Q5v.s8Z(verticalTicks,1)){if(Q5v.m8Z(shadow%verticalTicks,0))break;verticalTicks--;}
yAxis.priceTick=Q5v.N8Z(shadow,verticalTicks);}
if(yAxis.minimumPriceTick){var yAxisPriceTick=yAxis.minimumPriceTick;fontHeight=this.getCanvasFontSize("stx_yaxis");for(var i=0;Q5v.T8Z(i,100);i++){var numberOfTicks=Q5v.l8Z(shadow,yAxisPriceTick);if(Q5v.n8Z(height/numberOfTicks,fontHeight*2))yAxisPriceTick+=yAxis.minimumPriceTick;else break;}
if(Q5v.i8Z(i,100))yAxis.priceTick=yAxisPriceTick;}
yAxis.multiplier=Q5v.H8Z(yAxis.height,yAxis.shadow);}
if(!this.activeDrawing||Q5v.M8Z(this.activeDrawing.name,"projection")){yAxis.high=this.valueFromPixel(panel.top,panel,yAxis);if(yAxis.semiLog){yAxis.logHigh=Q5v.e8Z(Math.log(yAxis.high),Math.LN10);var semilow2=Math.max(yAxis.low,0.00000000001);yAxis.logLow=Q5v.O8Z(Math.log(semilow2),Math.LN10);yAxis.logShadow=Q5v.A8Z(yAxis.logHigh,yAxis.logLow);}
yAxis.shadow=Q5v.q8Z(yAxis.high,yAxis.low);}
yAxis.multiplier=Q5v.U8Z(yAxis.height,yAxis.shadow);if(!yAxis.decimalPlaces&&Q5v.w8Z(yAxis.decimalPlaces,0)){if(isAChart){var labelDecimalPlaces=0;for(var j=0;Q5v.f8Z(j,panel.yAxis.shadowBreaks.length);j++){var brk=panel.yAxis.shadowBreaks[j];if(Q5v.x8Z(panel.yAxis.shadow,brk[0]))labelDecimalPlaces=brk[1];}
yAxis.printDecimalPlaces=labelDecimalPlaces;}
else yAxis.printDecimalPlaces=null;}
else{yAxis.printDecimalPlaces=yAxis.decimalPlaces;}
this.runAppend("createYAxis",arguments);}
;STXChart.prototype.drawYAxis=function(panel,parameters){if(!parameters)parameters={}
;var yAxis=parameters.yAxis?parameters.yAxis:panel.yAxis;if(yAxis.pretty)return this.drawYAxisPretty(panel,parameters);if(this.runPrepend(z52,arguments))return ;if(!parameters.noDraw&&!yAxis.noDraw){if(!yAxis.yAxisPlotter||!parameters.noChange){var chart=panel.chart,isAChart=(Q5v.X5Z(panel.name,chart.name)&&Q5v.o5Z(yAxis,panel.yAxis));if(!yAxis.priceTick)return ;var shadow=yAxis.shadow;if(parameters.range){shadow=Q5v.k5Z(parameters.range[Q5v.R42],parameters.range[Q5v.E42]);}
var verticalTicks=Q5v.F5Z(shadow,yAxis.priceTick);verticalTicks=Math.round(verticalTicks);var logStart,logPriceTick;if(yAxis.semiLog){logStart=Q5v.E5Z(Math.log(this.valueFromPixel(yAxis.bottom,panel)),Math.LN10);logPriceTick=Q5v.S5Z((yAxis.logHigh-yAxis.logLow),verticalTicks);}
var textStyle=yAxis.textStyle?yAxis.textStyle:e12;yAxis.yAxisPlotter=new STX.Plotter();yAxis.yAxisPlotter.newSeries(l75,z32,this.canvasStyle(Y82));yAxis.yAxisPlotter.newSeries(O05,d22,this.colorOrStyle(textStyle));yAxis.yAxisPlotter.newSeries(X6f,z32,this.canvasStyle(w32));var priceOffset=Q5v.E42,high=parameters.range?parameters.range[Q5v.R42]:yAxis.high,low=parameters.range?parameters.range[Q5v.E42]:yAxis.low,drawBorders=(Q5v.D5Z(yAxis.displayBorder,Q5v.s15)?chart.panel.yAxis.displayBorder:yAxis.displayBorder);if(Q5v.g5Z(this.axisBorders,v85))drawBorders=v85;if(Q5v.p5Z(this.axisBorders,k15))drawBorders=k15;var edgeOfAxis,position=(Q5v.Y5Z(yAxis.position,Q5v.s15)?chart.panel.yAxis.position:yAxis.position);if(Q5v.G5Z(position,(w05+w15+Q5v.V05))){edgeOfAxis=yAxis.left+yAxis.width;}
else{edgeOfAxis=yAxis.left;}
var borderEdge=Math.round(edgeOfAxis)+S52,tickWidth=drawBorders?Q5v.k42:Q5v.E42;if(Q5v.J5Z(position,x35))tickWidth=drawBorders?-Q5v.k42:Q5v.E42;if(isAChart)if(Q5v.V5Z(yAxis.shadow,Q5v.R42)){priceOffset=Q5v.r5Z(((parseInt(low/yAxis.priceTick)+Q5v.R42)*yAxis.priceTick),low);}
else{priceOffset=Q5v.c5Z(yAxis.priceTick,Math.round((low%yAxis.priceTick)*panel.chart.roundit)/panel.chart.roundit);}
else priceOffset=Q5v.b5Z(high,yAxis.priceTick);var fontHeight=this.getCanvasFontSize(e12);for(var i=Q5v.E42;Q5v.K5Z(i,verticalTicks);i++){var price;if(yAxis.semiLog){var logPrice=logStart+(Q5v.v6v(i,logPriceTick));price=Math.pow(Q75,logPrice);}
else{if(isAChart)price=low+Q5v.d6v(i,yAxis.priceTick)+priceOffset;else price=Q5v.Z6v(high,(i*yAxis.priceTick),priceOffset);}
var y=this.pixelFromPrice(price,panel,yAxis),y2=Math.round(y)+S52;if(Q5v.F6v((y2+fontHeight/Q5v.y42),panel.bottom))continue;if(Q5v.E6v((y2-fontHeight/Q5v.y42),panel.top))continue;if(yAxis.displayGridLines){yAxis.yAxisPlotter.moveTo("grid",panel.left,y2);yAxis.yAxisPlotter.lineTo("grid",panel.right,y2);}
if(drawBorders){yAxis.yAxisPlotter.moveTo("border",Q5v.S6v(borderEdge,0.5),y2);yAxis.yAxisPlotter.lineTo("border",borderEdge+tickWidth,y2);}
if(yAxis.priceFormatter){price=yAxis.priceFormatter(this,panel,price);}
else{price=this.formatYAxisPrice(price,panel,Q5v.s15,yAxis);}
var backgroundColor=yAxis.textBackground?this.containerColor:Q5v.s15,textXPosition=edgeOfAxis+tickWidth+Q5v.k42;if(Q5v.D6v(position,x35)){textXPosition=yAxis.left+Q5v.k42;if(yAxis.justifyRight)textXPosition=yAxis.left+yAxis.width+tickWidth-3;}
else{if(yAxis.justifyRight)textXPosition=edgeOfAxis+yAxis.width;}
yAxis.yAxisPlotter.addText(O05,price,textXPosition,y2,backgroundColor,Q5v.s15,fontHeight);}
if(drawBorders){var b=Math.round(yAxis.bottom)+S52;yAxis.yAxisPlotter.moveTo("border",borderEdge,yAxis.top);yAxis.yAxisPlotter.lineTo("border",borderEdge,b);yAxis.yAxisPlotter.draw(this.chart.context,X6f);}
}
this.plotYAxisGrid(panel);}
this.runAppend(z52,arguments);}
;STXChart.prototype.drawYAxisPretty=function(panel,parameters){var o15="00",A05="he",G85="eac",C65="sser",u42="sPretty",H12="id",P75="gr",Q72="axis",q32="raw";if(this.runPrepend((U22+q32+f52+e25+h55+A15+S95),arguments))return ;if(!parameters)parameters={}
;var yAxis=parameters.yAxis?parameters.yAxis:panel.yAxis;if(!parameters.noDraw&&!yAxis.noDraw){if(!yAxis.yAxisPlotter||!parameters.noChange){var chart=panel.chart,isAChart=(Q5v.g6v(panel.name,chart.name)&&Q5v.p6v(yAxis,panel.yAxis));if(!yAxis.priceTick)return ;if(isNaN(yAxis.high)||isNaN(yAxis.low))return ;var shadow=yAxis.shadow;if(parameters.range){shadow=Q5v.Y6v(parameters.range[1],parameters.range[0]);}
var verticalTicks=Q5v.G6v(yAxis.height,yAxis.idealTickSizePixels);verticalTicks=Math.round(verticalTicks);var textStyle=yAxis.textStyle?yAxis.textStyle:(q22+h55+X52+Q5v.o55+Q72);yAxis.yAxisPlotter=new STX.Plotter();yAxis.yAxisPlotter.newSeries((P75+H12),"stroke",this.canvasStyle("stx_grid"));yAxis.yAxisPlotter.newSeries("text","fill",this.colorOrStyle(textStyle));yAxis.yAxisPlotter.newSeries("border","stroke",this.canvasStyle("stx_grid_border"));var priceOffset=0,high=parameters.range?parameters.range[1]:yAxis.high,low=parameters.range?parameters.range[0]:yAxis.low,drawBorders=(Q5v.J6v(yAxis.displayBorder,null)?chart.panel.yAxis.displayBorder:yAxis.displayBorder);if(Q5v.V6v(this.axisBorders,false))drawBorders=false;if(Q5v.r6v(this.axisBorders,true))drawBorders=true;var edgeOfAxis,position=(Q5v.c6v(yAxis.position,null)?chart.panel.yAxis.position:yAxis.position);if(Q5v.b6v(position,"left")){edgeOfAxis=yAxis.left+yAxis.width;}
else{edgeOfAxis=yAxis.left;}
var borderEdge=Math.round(edgeOfAxis)+0.5,tickWidth=drawBorders?3:0;if(Q5v.K6v(position,"left"))tickWidth=drawBorders?-3:0;var fontHeight=this.getCanvasFontSize((q22+g45+Q5v.o55+O22+h55+A15+S95)),increments=yAxis.increments,l=increments.length,p=0,n=1,inc=0,closest=0,pow=0,diff=Number.MAX_VALUE;for(var z=0;Q5v.v0v(z,100);z++){inc=Q5v.d0v(increments[p],Math.pow(10,pow));n=Math.floor(Q5v.Z0v(shadow,inc));var newDiff=Math.abs(Q5v.y0v(verticalTicks,n));if(Q5v.R0v(newDiff,diff)){break;}
else{diff=newDiff;}
if(Q5v.L0v(n,verticalTicks)){closest=inc;break;}
else if(Q5v.h0v(n,verticalTicks)){p++;if(Q5v.C0v(p,l)){p=0;pow++;}
}
else{p--;if(Q5v.W0v(p,0)){p=Q5v.t0v(l,1);pow--;}
}
closest=inc;}
var lowLabel=Q5v.P0v(Math.ceil(low/closest),closest),i=0;for(var zz=0;Q5v.Q0v(zz,100);zz++){var price=lowLabel+Q5v.z0v(i,closest);if(Q5v.a0v(price,high))break;i++;var y=this.pixelFromPrice(price,panel,yAxis),y2=Math.round(y)+0.5;if(Q5v.j0v((y2+fontHeight/2),panel.bottom))continue;if(Q5v.B0v((y2-fontHeight/2),panel.top))continue;if(yAxis.displayGridLines){yAxis.yAxisPlotter.moveTo("grid",panel.left,y2);yAxis.yAxisPlotter.lineTo("grid",panel.right,y2);}
if(drawBorders){yAxis.yAxisPlotter.moveTo("border",Q5v.I0v(borderEdge,0.5),y2);yAxis.yAxisPlotter.lineTo("border",borderEdge+tickWidth,y2);}
if(yAxis.priceFormatter){price=yAxis.priceFormatter(this,panel,price);}
else{price=this.formatYAxisPrice(price,panel,null,yAxis);}
var backgroundColor=yAxis.textBackground?this.containerColor:null,textXPosition=edgeOfAxis+tickWidth+3;if(Q5v.u0v(position,"left")){textXPosition=yAxis.left+3;if(yAxis.justifyRight)textXPosition=yAxis.left+yAxis.width+tickWidth-3;}
else{if(yAxis.justifyRight)textXPosition=edgeOfAxis+yAxis.width;}
yAxis.yAxisPlotter.addText("text",price,textXPosition,y2,backgroundColor,null,fontHeight);}
if(Q5v.s9v(zz,100)){console.log((r75+O22+z55+f52+e25+h55+A15+u42+n25+O22+C65+R85+s45+n82+d82+E85+w22+v75+B85+B85+n82+m95+G85+A05+U22+n82+y45+o15));}
if(drawBorders){var b=Math.round(yAxis.bottom)+0.5;yAxis.yAxisPlotter.moveTo("border",borderEdge,yAxis.top);yAxis.yAxisPlotter.lineTo("border",borderEdge,b);yAxis.yAxisPlotter.draw(this.chart.context,"border");}
}
this.plotYAxisGrid(panel);}
this.runAppend("drawYAxis",arguments);}
;STXChart.prototype.plotYAxisGrid=function(panel){var n35="plotYAxisGrid";if(this.runPrepend(n35,arguments))return ;var context=this.chart.context;panel.yAxis.yAxisPlotter.draw(context,l75);this.runAppend(n35,arguments);}
;STXChart.prototype.plotYAxisText=function(panel){if(this.runPrepend("plotYAxisText",arguments))return ;var arr=panel.yaxisLHS.concat(panel.yaxisRHS);for(var i=0;Q5v.m9v(i,arr.length);i++){var yAxis=arr[i];if(!yAxis.yAxisPlotter)continue;if(yAxis.noDraw)continue;this.canvasFont("stx_yaxis");this.canvasColor("stx_yaxis");var context=this.chart.context;context.textBaseline="middle";if(yAxis.justifyRight)context.textAlign=(Z45+s35+Q5v.g15+Q5v.V05);else context.textAlign=(x35);var fontHeight=this.getCanvasFontSize("stx_yaxis");yAxis.yAxisPlotter.draw(context,"text");context.textBaseline="alphabetic";context.textAlign=(w05+w15+Q5v.V05);}
this.runAppend("plotYAxisText",arguments);}
;STXChart.prototype.formatYAxisPrice=function(price,panel,requestedDecimalPlaces,yAxis){if(Q5v.N9v(price,null)||typeof price==(Q5v.a05+k85+p52+A15+b25+U22))return "";var yax=yAxis?yAxis:panel.yAxis,decimalPlaces=requestedDecimalPlaces;if(!decimalPlaces&&Q5v.T9v(decimalPlaces,0))decimalPlaces=yax.printDecimalPlaces;if(!decimalPlaces&&Q5v.l9v(decimalPlaces,0)){if(Q5v.n9v(yax.priceTick,0.01))decimalPlaces=4;else if(Q5v.i9v(yax.priceTick,0.1))decimalPlaces=2;else if(Q5v.H9v(yax.priceTick,1))decimalPlaces=1;else decimalPlaces=0;}
if(Q5v.M9v(panel.name,panel.chart.name)){if(Q5v.e9v(yax.priceTick,100)){return STX.condenseInt(price);}
}
if(this.internationalizer){if(Q5v.O9v(decimalPlaces,this.internationalizer.priceFormatters.length))decimalPlaces=Q5v.A9v(this.internationalizer.priceFormatters.length,1);price=this.internationalizer.priceFormatters[decimalPlaces].format(price);}
else{price=price.toFixed(decimalPlaces);}
return price;}
;STXChart.prototype.formatPrice=function(price,panel){if(!price||typeof price=="undefined")return "";if(!panel)panel=this.currentPanel;if(!panel)panel=this.chart.panel;if(!panel)return price;var decimalPlaces=panel.decimalPlaces;if(!decimalPlaces&&Q5v.q9v(decimalPlaces,0)){decimalPlaces=panel.chart.decimalPlaces;}
if(!decimalPlaces&&Q5v.U9v(decimalPlaces,0)){return price;}
if(this.internationalizer){if(Q5v.w9v(decimalPlaces,this.internationalizer.priceFormatters.length))decimalPlaces=Q5v.f9v(this.internationalizer.priceFormatters.length,1);price=this.internationalizer.priceFormatters[decimalPlaces].format(price);}
else{price=price.toFixed(decimalPlaces);}
return price;}
;STXChart.prototype.createCrosshairs=function(){var n32="createCrosshairs";if(this.runPrepend(n32,arguments))return ;if(this.controls.crossX.onmousedown)return ;this.controls.crossY.onmousedown=function(e){if(!e)e=event;if(e.preventDefault)e.preventDefault();return v85;}
;this.controls.crossX.onmousedown=function(e){if(!e)e=event;if(e.preventDefault)e.preventDefault();return v85;}
;this.runAppend(n32,arguments);}
;STXChart.prototype.determineMinMax=function(quotes,fields,sum,bypassTransform,length){var highValue=Number.MAX_VALUE*-1,lowValue=Number.MAX_VALUE,isTransform=false,l=quotes.length;if(length)l=length;for(var i=0;Q5v.x9v(i,l);i++){var quote=quotes[i];if(!quote)continue;if(!bypassTransform){if(quote.transform){isTransform=true;quote=quote.transform;}
else if(isTransform)continue;}
var acc=0;for(var j=0;Q5v.X4v(j,fields.length);j++){var f=quote[fields[j]];if(!f)continue;if(typeof (f)=="number")f=[f];for(var v=0;Q5v.o4v(v,f.length);v++){var val=f[v];if(val||Q5v.k4v(val,0)){if(sum){acc+=val;if(Q5v.F4v(acc,highValue))highValue=acc;if(Q5v.E4v(acc,lowValue))lowValue=acc;}
else{if(Q5v.S4v(val,highValue))highValue=val;if(Q5v.D4v(val,lowValue))lowValue=val;}
}
}
}
}
if(highValue==Number.MAX_VALUE*-1)highValue=0;if(Q5v.g4v(lowValue,Number.MAX_VALUE))lowValue=0;return [lowValue,highValue];}
;STXChart.prototype.calculateYAxisRange=function(panel,yAxis,low,high){if(Q5v.p4v(low,Number.MAX_VALUE)){low=0;high=0;}
var cheight=panel.height,newHigh=null,newLow=null;if(!yAxis.bottomOffset)yAxis.bottomOffset=this.xaxisHeight;yAxis.bottom=Q5v.Y4v(panel.bottom,yAxis.bottomOffset);yAxis.top=panel.top;yAxis.height=Q5v.G4v(yAxis.bottom,yAxis.top);var verticalPad=Math.round(Math.abs(Q5v.J4v(cheight,5)));if(Q5v.V4v(cheight-Math.abs(yAxis.scroll),verticalPad)){yAxis.scroll=(Q5v.r4v(cheight,verticalPad))*(Q5v.c4v(yAxis.scroll,0)?-1:1);}
var pricePerPix=Q5v.b4v((high-low),yAxis.height);if(low||Q5v.K4v(low,0)){if(Q5v.v1v(high-low,0)){newHigh=Q5v.d1v(high,2);newLow=0;}
else{if((this.layout.semiLog||Q5v.Z1v(this.layout.chartScale,"log"))&&newHigh){var logLow=Q5v.y1v(Math.log(low),Math.LN10),logHigh=Q5v.R1v(Math.log(high),Math.LN10);newHigh=Math.pow(10,logHigh);newLow=Math.pow(10,logLow);}
else{newHigh=high;newLow=low;}
}
yAxis.high=newHigh;yAxis.low=newLow;}
if(yAxis.max||Q5v.L1v(yAxis.max,0))yAxis.high=yAxis.max;if(yAxis.min||Q5v.h1v(yAxis.min,0))yAxis.low=yAxis.min;yAxis.shadow=Q5v.C1v(yAxis.high,yAxis.low);if(Q5v.W1v(panel.chart.name,panel.name)&&Q5v.t1v(panel.yAxis,yAxis)){var isLogScale=(this.layout.semiLog||Q5v.P1v(this.layout.chartScale,"log"));if(panel.chart.isComparison)isLogScale=false;if(Q5v.Q1v(yAxis.semiLog,isLogScale)){this.clearPixelCache();yAxis.semiLog=isLogScale;}
}
}
;STXChart.prototype.renderYAxis=function(chart){if(this.runPrepend("renderYAxis",arguments))return ;var panel=chart.panel,arr=panel.yaxisRHS.concat(panel.yaxisLHS),i;for(i=0;Q5v.z1v(i,arr.length);i++){var yAxis=arr[i],low=null,high=null;if(Q5v.a1v(panel.yAxis,yAxis)){low=chart.lowValue;high=chart.highValue;}
this.calculateYAxisRange(panel,yAxis,low,high);}
var parameters={}
;for(i=0;Q5v.j1v(i,arr.length);i++){parameters.yAxis=arr[i];this.createYAxis(panel,parameters);this.drawYAxis(panel,parameters);}
this.runAppend("renderYAxis",arguments);}
;STXChart.prototype.initializeDisplay=function(chart){var M12="Di",Y75="iz",e15="ial";if(this.runPrepend("initializeDisplay",arguments))return ;var fields=[];for(var field in chart.series){if(chart.series[field].parameters.shareYAxis)fields.push(field);}
var panel=chart.panel=this.panels[chart.name],minMax,length=null,ticksOnScreen=Math.floor(Q5v.B1v((chart.width-this.micropixels),this.layout.candleWidth));if(Q5v.I1v(chart.scroll,chart.maxTicks)&&Q5v.u1v(chart.maxTicks,ticksOnScreen+1))length=Q5v.s3v(chart.dataSegment.length,1);if(!STXChart.chartShowsHighs(this.layout.chartType)){fields.push("Close");minMax=this.determineMinMax(chart.dataSegment,fields,null,null,length);if(Q5v.m3v(this.layout.chartType,"baseline_delta")){var base=chart.baseline.actualLevel;if(chart.transformFunc)base=chart.transformFunc(this,chart,base);var diff=Math.max(Q5v.N3v(base,minMax[0]),Q5v.T3v(minMax[1],base));if(this.repositioningBaseline){minMax=[chart.lowValue,chart.highValue];}
else{minMax[0]=Q5v.l3v(base,diff);minMax[1]=base+diff;}
}
}
else{fields.push("Close","High","Low");minMax=this.determineMinMax(chart.dataSegment,fields,null,null,length);}
chart.lowValue=minMax[0];chart.highValue=minMax[1];this.runAppend((A15+s45+o85+e15+Y75+d82+M12+S95+t95+i32),arguments);}
;STXChart.prototype.computePosition=function(x,offset){if(typeof offset==t42)offset=Q5v.E42;var position=Q5v.n3v(x,this.layout.candleWidth)+offset+this.micropixels;return position;}
;STXChart.prototype.computeColor=function(open,close){var m82="shad",r35="le_";if(Q5v.i3v(open,close))return x92;if(Q5v.H3v(open,close))return f42;return (q22+h55+R05+O22+s45+U22+r35+m82+E45+z55);}
;STXChart.prototype.computeLength=function(high,low){var h=this.pixelFromPrice(high),l=this.pixelFromPrice(low);return Q5v.M3v(l,h);}
;STXChart.prototype.setSeriesRenderer=function(renderer){var params=renderer.params;if(this.chart.seriesRenderers[renderer.params.name])return this.chart.seriesRenderers[renderer.params.name];if(params.yAxis){this.addYAxis(this.panels[params.panel],params.yAxis);}
renderer.stx=this;this.chart.seriesRenderers[renderer.params.name]=renderer;return renderer;}
;STXChart.prototype.removeSeriesRenderer=function(renderer){for(var r in this.chart.seriesRenderers){if(Q5v.e3v(renderer.params.name,this.chart.seriesRenderers[r].params.name)){var toDelete=this.chart.seriesRenderers[renderer.params.name],yAxis=toDelete.params.yAxis,panel=this.panels[toDelete.params.panel];delete  this.chart.seriesRenderers[renderer.params.name];this.deleteYAxisIfUnused(panel,yAxis);return ;}
}
}
;STXChart.prototype.getSeriesRenderer=function(name){return this.chart.seriesRenderers[name];}
;STXChart.prototype.drawHistogram=function(params,seriesParams){var G15="lab";if(!seriesParams||!seriesParams.length)return ;var panelName=params.panel;if(!panelName)panelName="chart";var c=this.panels[panelName];if(!c)return ;var yAxis=params.yAxis?params.yAxis:c.yAxis,b=Math.floor(yAxis.bottom)+0.5,t=Math.floor(yAxis.top)+0.5,type=params.type;if(Q5v.O3v(type,"histogram"))type=params.subtype;var quotes=this.chart.dataSegment,bordersOn=false;this.getDefaultColor();var sp;for(sp=0;Q5v.A3v(sp,seriesParams.length);sp++){bordersOn|=(seriesParams[sp].border_color_up&&!STX.isTransparent(seriesParams[sp].border_color_up));bordersOn|=(seriesParams[sp].border_color_down&&!STX.isTransparent(seriesParams[sp].border_color_down));}
if(!params.name)params.name="Data";var multiplier=yAxis.multiplier;if(!params.heightPercentage)params.heightPercentage=0.7;if(!params.widthFactor)params.widthFactor=0.8;if(!params.bindToYAxis){var histMax=0;if(!histMax){for(var i=0;Q5v.q3v(i,this.chart.maxTicks);i++){var prices=quotes[i];if(!prices)continue;var total=0;for(sp=0;Q5v.U3v(sp,seriesParams.length);sp++){if(prices[seriesParams[sp].field]){if(Q5v.w3v(params.subtype,"stacked"))total+=prices[seriesParams[sp].field];else total=Math.max(total,prices[seriesParams[sp].field]);}
}
if(Q5v.f3v(total,histMax))histMax=total;}
if(Q5v.x3v(histMax,0)){this.watermark(panelName,"center","bottom",this.translateIf(params.name+(n82+z12+E45+Q5v.V05+n82+e25+Q5v.s6f+O22+A15+G15+Q5v.D45+d82)));return ;}
}
multiplier=Q5v.X7v((b-t),params.heightPercentage,histMax);}
var offset=0.5;if(Q5v.m7v(this.layout.candleWidth,1)||!bordersOn)offset=0;this.startClip(panelName);var context=this.chart.context,shaveOff=Math.max(0,Q5v.N7v((1-params.widthFactor),this.layout.candleWidth,2)),tops={}
,bottoms={}
,self=this,candleWidth=1;function drawBars(field,color,opacity,isBorder,isUp,shift,candleWidth){var Y35="tere",b75="clu";if(!opacity)opacity=1;if(STX.isIE8)context.globalAlpha=0.5;else context.globalAlpha=opacity;context.beginPath();var prevTop=b+0.5,farLeft=Math.floor(Q5v.R7v(self.pixelFromBar(0,c.chart),self.layout.candleWidth/2)),prevRight=farLeft;for(var i=0;Q5v.L7v(i,quotes.length);i++){var bottom=bottoms[i];if(!bottom)bottom=b;if(Q5v.h7v(i,0))prevTop=bottom;var quote=quotes[i];if(!quote||!quote[field]){prevTop=bottom;prevRight+=self.layout.candleWidth;continue;}
var y=Q5v.C7v(quote[field],multiplier);if(isNaN(y))continue;var myCandleWidth=self.layout.candleWidth;if(quote.candleWidth){myCandleWidth=quote.candleWidth;if(Q5v.W7v(i,0))farLeft=prevRight=Math.floor(Q5v.t7v(self.pixelFromBar(0,c.chart),quote.candleWidth/2));}
var top=Math.min(Math.floor(Q5v.P7v(bottom,y))+0.5,bottom);if(isUp){if(Q5v.Q7v(quote.Close,quote.iqPrevClose)){prevTop=top;prevRight+=myCandleWidth;continue;}
}
else{if(Q5v.z7v(quote.Close,quote.iqPrevClose)){prevTop=top;prevRight+=myCandleWidth;continue;}
}
var x0,x1,variableWidthRatio=Q5v.a7v(myCandleWidth,self.layout.candleWidth),start=prevRight+Q5v.j7v((shaveOff+shift*candleWidth),variableWidthRatio);x0=Math.round(start)+(isBorder?0:offset);x1=Q5v.B7v(Math.round(start+candleWidth*variableWidthRatio),(isBorder?0:offset));if(Q5v.I7v(x1-x0,2))x1=x0+1;if(isBorder)roundPixel=0;else roundPixel=0.5;if(Q5v.u7v(x0%1,roundPixel))x0+=0.5;if(Q5v.s2v(x1%1,roundPixel))x1+=0.5;context.moveTo(x0,bottom);if(Q5v.m2v(b,bottom)){context.lineTo(x1,bottom);}
else{context.moveTo(x1,bottom);if(isBorder&&!shaveOff){if(bottoms[i+1])context.moveTo(x1,Math.max(top,Math.min(bottom,bottoms[i+1])));}
}
context.lineTo(x1,top);context.lineTo(x0,top);if(isBorder&&shift){if(Q5v.N2v(tops[i],top)||Q5v.T2v(i,0))context.lineTo(x0,Math.min(bottom,tops[i]));}
else if(isBorder&&!shaveOff&&Q5v.l2v(type,(b75+S95+Y35+U22))){if(Q5v.n2v(i,0)&&tops[Q5v.i2v(i,1)]&&Q5v.H2v(tops[i-1],top))context.lineTo(x0,Math.min(bottom,tops[Q5v.M2v(i,1)]));}
else if(isBorder&&!shaveOff){if(Q5v.e2v(prevTop,top)||Q5v.O2v(i,0))context.lineTo(x0,Math.min(bottom,prevTop));}
else{context.lineTo(x0,bottom);}
prevTop=top;prevRight+=myCandleWidth;if(Q5v.A2v(type,"clustered")||isBorder)tops[i]=top;}
if(!color)color=(O22+Q5v.a05+Q5v.V05+E45);if(isBorder){context.strokeStyle=Q5v.q2v(color,"auto")?self.defaultColor:color;context.stroke();}
else{context.fillStyle=Q5v.U2v(color,"auto")?self.defaultColor:color;context.fill();}
context.closePath();}
for(sp=0;Q5v.w2v(sp,seriesParams.length);sp++){var param=seriesParams[sp];candleWidth=Q5v.f2v(this.layout.candleWidth,params.widthFactor);var shift=0;if(Q5v.x2v(type,"clustered")){shift=sp;candleWidth/=seriesParams.length;}
drawBars(param.field,param.fill_color_up,param.opacity_up,null,true,shift,candleWidth);drawBars(param.field,param.fill_color_down,param.opacity_down,null,null,shift,candleWidth);if(Q5v.X8v(this.layout.candleWidth,2)&&bordersOn){drawBars(param.field,param.border_color_up,param.opacity_up,true,true,shift,candleWidth);drawBars(param.field,param.border_color_down,param.opacity_down,true,null,shift,candleWidth);}
if(Q5v.o8v(type,"stacked"))bottoms=STX.shallowClone(tops);}
context.globalAlpha=1;this.endClip();}
;STXChart.prototype.drawHeatmap=function(params,seriesParams){if(!seriesParams||!seriesParams.length)return ;var panelName=params.panel;if(!panelName)panelName="chart";var c=this.panels[panelName];if(!c)return ;var yAxis=params.yAxis?params.yAxis:c.yAxis,b=Math.floor(yAxis.bottom)+0.5,t=Math.floor(yAxis.top)+0.5,quotes=this.chart.dataSegment;this.getDefaultColor();if(!params.name)params.name="Data";if(!params.widthFactor)params.widthFactor=1;var offset=0.5;if(Q5v.k8v(c.chart.tmpWidth,1))offset=0;var height=null,halfHeight=null,self=this,lineWidth=null;function drawCells(field,color,isBorder,widthFactor,myoffset){context.beginPath();context.fillStyle=color;context.strokeStyle=color;var t=yAxis.top,b=yAxis.bottom,myCandleWidth=Q5v.F8v(self.layout.candleWidth,widthFactor),xc=Math.floor(Q5v.E8v(self.pixelFromBar(0,c.chart),self.layout.candleWidth)),x0,x1;for(var x=0;Q5v.S8v(x,quotes.length);x++){var quote=quotes[x];if(!quote)continue;if(quote.candleWidth){if(Q5v.D8v(x,0)){xc+=self.layout.candleWidth;}
else{xc+=Q5v.g8v((quote.candleWidth+myCandleWidth/widthFactor),2);}
myCandleWidth=Q5v.p8v(quote.candleWidth,widthFactor);}
else{xc+=self.layout.candleWidth;}
x0=Q5v.Y8v(xc,myCandleWidth/2,myoffset);x1=xc+Q5v.O8v(myCandleWidth,2)-myoffset;if(Q5v.A8v(x1-x0,2))x1=x0+1;if(quote.transform)quote=quote.transform;var cellValues=quote[field];if(!cellValues)continue;if(typeof cellValues=="number")cellValues=[cellValues];for(var i=0;Q5v.q8v(i,cellValues.length);i++){var v=self.pixelFromPrice(cellValues[i],c,yAxis);if(!lineWidth){var v1=self.pixelFromPrice(Q5v.U8v(cellValues[i],params.height),c,yAxis);context.lineWidth=1;height=Q5v.w8v(v1,v);halfHeight=Q5v.f8v(height,2);lineWidth=context.lineWidth;}
if(isBorder){var tc=v+halfHeight,bc=Q5v.x8v(v,halfHeight);context.moveTo(x0,tc);context.lineTo(x0,bc);context.lineTo(x1,bc);context.lineTo(x1,tc);context.lineTo(x0,tc);}
else{context.fillRect(x0,Q5v.X5v(v,halfHeight),Q5v.o5v(x1,x0),height);}
}
}
if(isBorder)context.stroke();context.closePath();}
this.startClip(panelName);var context=this.chart.context;context.globalAlpha=params.opacity;for(var sp=0;Q5v.k5v(sp,seriesParams.length);sp++){var param=seriesParams[sp];drawCells(param.field,param.color,null,params.widthFactor,param.border_color?offset:-offset/4);if(param.border_color&&Q5v.F5v(this.layout.candleWidth,2)){drawCells(param.field,param.border_color,true,params.widthFactor,offset);}
}
context.lineWidth=1;context.globalAlpha=1;this.endClip();}
;STXChart.prototype.startClip=function(panelName,allowYAxis){if(!panelName)panelName="chart";var panel=this.panels[panelName],yAxis=panel.yAxis;this.chart.context.save();this.chart.context.beginPath();var left=panel.left,width=panel.width;if(allowYAxis){left=0;width=this.width;}
this.chart.context.rect(left,panel.top,width,yAxis.height);this.chart.context.clip();}
;STXChart.prototype.endClip=function(){this.chart.context.restore();}
;STXChart.prototype.drawCandlesHighPerformance=function(panel,fillColor,borderColor,condition){var chart=panel.chart,quotes=chart.dataSegment,context=this.chart.context,t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,length,borderOffset=0;if(borderColor&&!STX.isTransparent(borderColor))borderOffset=0.5;var leftTick=Q5v.E5v(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks;context.beginPath();context.fillStyle=fillColor;var yAxis=panel.yAxis,whitespace=Q5v.S5v(chart.tmpWidth,2),candleWidth=this.layout.candleWidth,xbase=Q5v.D5v(panel.left,0.5*candleWidth,this.micropixels,1);for(var x=0;Q5v.W5v(x,quotes.length);x++){xbase+=Q5v.t5v(candleWidth,2);candleWidth=this.layout.candleWidth;xbase+=Q5v.P5v(candleWidth,2);var quote=quotes[x];if(!quote)continue;if(quote.projection)continue;if(quote.candleWidth){xbase+=Q5v.J5v((quote.candleWidth-candleWidth),2);candleWidth=quote.candleWidth;if(Q5v.V5v(this.layout.chartType,"volume_candle"))whitespace=Q5v.r5v(candleWidth,2);}
if(Q5v.c5v(quote.Open,quote.Close))continue;if(Q5v.b5v(condition,STXChart.CANDLEUP)&&Q5v.K5v(quote.Open,quote.Close))continue;if(Q5v.v6P(condition,STXChart.CANDLEDOWN)&&Q5v.d6P(quote.Open,quote.Close))continue;if(Q5v.Z6P(condition,STXChart.CLOSEUP)&&Q5v.y6P(quote.Close,quote.iqPrevClose))continue;if(Q5v.R6P(condition,STXChart.CLOSEDOWN)&&Q5v.L6P(quote.Close,quote.iqPrevClose))continue;if(Q5v.h6P(condition,STXChart.CLOSEEVEN)&&Q5v.C6P(quote.Close,quote.iqPrevClose))continue;if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(Q5v.W6P(tick,panel.cacheLeft)||Q5v.t6P(tick,panel.cacheRight)||!cache.open){var o=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(Q5v.P6P((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top),c=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(Q5v.Q6P((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);top=Math.floor(Math.min(o,c))+borderOffset;bottom=Math.max(o,c);length=Math.floor(Q5v.z6P(bottom,top));if(Q5v.a6P(top,t)){if(Q5v.j6P(top+length,t)){cache.open=top;cache.close=top;continue;}
length-=Q5v.B6P(t,top);top=t;}
if(Q5v.I6P(top+length,b)){length-=(top+length-b);}
length=Math.max(length,2);cache.open=top;cache.close=cache.open+length;}
if(Q5v.u6P(cache.open,b))continue;if(Q5v.s0P(cache.close,t))continue;flr_xbase=Math.floor(xbase)+0.5;var xstart=Math.floor(Q5v.m0P(flr_xbase,whitespace))+borderOffset,xend=Q5v.N0P(Math.round(flr_xbase+whitespace),borderOffset);if(Q5v.T0P(quote.Open,quote.Close)){context.moveTo(xstart,cache.open);context.lineTo(xend,cache.open);context.lineTo(xend,cache.close);context.lineTo(xstart,cache.close);context.lineTo(xstart,cache.open);}
}
context.fill();if(borderOffset){context.lineWidth=1;context.strokeStyle=borderColor;context.stroke();}
}
;STXChart.prototype.drawCandles=function(panel,colorFunction,isOutline){var chart=panel.chart;if(!chart){chart=panel;panel=panel.chart;}
var quotes=chart.dataSegment,context=this.chart.context,t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,length,borderColor="transparent",fillColor="transparent",borderOffset=0;if(!STX.isTransparent(borderColor))borderOffset=0.5;var leftTick=Q5v.l0P(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks,yAxis=panel.yAxis,whitespace=Q5v.n0P(chart.tmpWidth,2),candleWidth=this.layout.candleWidth,xbase=Q5v.i0P(panel.left,0.5*candleWidth,this.micropixels,1);for(var x=0;Q5v.p0P(x,quotes.length);x++){xbase+=Q5v.Y0P(candleWidth,2);candleWidth=this.layout.candleWidth;xbase+=Q5v.G0P(candleWidth,2);var quote=quotes[x];if(!quote)continue;if(quote.projection)continue;if(quote.candleWidth){xbase+=Q5v.J0P((quote.candleWidth-candleWidth),2);candleWidth=quote.candleWidth;if(Q5v.V0P(this.layout.chartType,"volume_candle"))whitespace=Q5v.r0P(candleWidth,2);}
if(!quote.Open&&Q5v.c0P(quote.Open,0))continue;if(Q5v.b0P(quote.Open,quote.Close))continue;var myColor=colorFunction(this,quote,isOutline?"outline":(N72));if(!myColor)continue;if(isOutline)borderColor=myColor;else fillColor=myColor;context.beginPath();context.fillStyle=fillColor;if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(Q5v.K0P(tick,panel.cacheLeft)||Q5v.v9P(tick,panel.cacheRight)||!cache.open){var o=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(Q5v.d9P((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top),c=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(Q5v.Z9P((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);top=Math.floor(Math.min(o,c))+borderOffset;bottom=Math.max(o,c);length=Math.floor(Q5v.y9P(bottom,top));if(Q5v.R9P(top,t)){if(Q5v.L9P(top+length,t)){cache.open=top;cache.close=top;continue;}
length-=Q5v.h9P(t,top);top=t;}
if(Q5v.C9P(top+length,b)){length-=(top+length-b);}
length=Math.max(length,2);cache.open=top;cache.close=cache.open+length;}
if(Q5v.W9P(cache.open,b))continue;if(Q5v.t9P(cache.close,t))continue;flr_xbase=Math.floor(xbase)+0.5;var xstart=Math.floor(Q5v.P9P(flr_xbase,whitespace))+borderOffset,xend=Q5v.Q9P(Math.round(flr_xbase+whitespace),borderOffset);if(Q5v.z9P(quote.Open,quote.Close)){context.moveTo(xstart,cache.open);context.lineTo(xend,cache.open);context.lineTo(xend,cache.close);context.lineTo(xstart,cache.close);context.lineTo(xstart,cache.open);}
if(Q5v.a9P(fillColor,"transparent"))context.fill();if(borderOffset){context.lineWidth=1;context.strokeStyle=borderColor;context.stroke();}
}
}
;STXChart.prototype.drawShadowsHighPerformance=function(panel,style,condition){var chart=panel.chart,quotes=chart.dataSegment,context=this.chart.context;context.lineWidth=1;var t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,left,leftTick=Q5v.j9P(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks;context.beginPath();var yAxis=panel.yAxis,candleWidth=this.layout.candleWidth,xbase=Q5v.B9P(panel.left,0.5*candleWidth,this.micropixels,1);for(var x=0;Q5v.x9P(x,quotes.length);x++){xbase+=Q5v.X4P(candleWidth,2);candleWidth=this.layout.candleWidth;xbase+=Q5v.o4P(candleWidth,2);var quote=quotes[x];if(!quote)continue;if(quote.projection)continue;if(quote.candleWidth){xbase+=Q5v.k4P((quote.candleWidth-candleWidth),2);candleWidth=quote.candleWidth;}
if(condition){if(Q5v.F4P(condition,STXChart.CANDLEUP)&&Q5v.E4P(quote.Open,quote.Close))continue;else if(Q5v.S4P(condition,STXChart.CANDLEDOWN)&&Q5v.D4P(quote.Open,quote.Close))continue;else if(Q5v.g4P(condition,STXChart.CLOSEUP)&&Q5v.p4P(quote.Close,quote.iqPrevClose))continue;else if(Q5v.Y4P(condition,STXChart.CLOSEDOWN)&&Q5v.G4P(quote.Close,quote.iqPrevClose))continue;else if(Q5v.J4P(condition,STXChart.CLOSEEVEN)&&Q5v.V4P(quote.Close,quote.iqPrevClose))continue;}
if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(Q5v.r4P(tick,panel.cacheLeft)||Q5v.c4P(tick,panel.cacheRight)||!cache.top){top=(yAxis.semiLog?this.pixelFromPrice(quote.High,panel):(Q5v.b4P((yAxis.high-quote.High),yAxis.multiplier))+yAxis.top);bottom=(yAxis.semiLog?this.pixelFromPrice(quote.Low,panel):(Q5v.K4P((yAxis.high-quote.Low),yAxis.multiplier))+yAxis.top);var length=Q5v.v1P(bottom,top);if(Q5v.d1P(top,t)){if(Q5v.Z1P(top+length,t)){cache.top=top;cache.bottom=top;continue;}
length-=Q5v.y1P(t,top);top=t;}
if(Q5v.R1P(top+length,b)){length-=(top+length-b);}
cache.top=top;cache.bottom=cache.top+length;}
if(Q5v.L1P(cache.top,b))continue;if(Q5v.h1P(cache.bottom,t))continue;var xx=Math.floor(xbase)+0.5;context.moveTo(xx,cache.top);context.lineTo(xx,cache.bottom);if(Q5v.C1P(quote.Open,quote.Close)){var offset=this.offset;if(Q5v.W1P(this.layout.chartType,"volume_candle")){offset=Q5v.t1P(candleWidth,2);}
var x0=Q5v.P1P(xx,offset),x1=xx+offset,o=Math.floor(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(Q5v.Q1P((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top)+0.5;if(Q5v.z1P(o,b)&&Q5v.a1P(o,t)){context.moveTo(x0,o);context.lineTo(x1,o);}
}
}
this.canvasColor(style);context.stroke();}
;STXChart.prototype.drawShadows=function(panel,colorFunction){var chart=panel.chart;if(!chart){chart=panel;panel=panel.chart;}
var quotes=chart.dataSegment,context=this.chart.context;context.lineWidth=1;var t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,left,leftTick=Q5v.j1P(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks,yAxis=panel.yAxis,candleWidth=this.layout.candleWidth,xbase=Q5v.B1P(panel.left,0.5*candleWidth,this.micropixels,1);for(var x=0;Q5v.x1P(x,quotes.length);x++){xbase+=Q5v.X3P(candleWidth,2);candleWidth=this.layout.candleWidth;xbase+=Q5v.o3P(candleWidth,2);var quote=quotes[x];if(!quote)continue;if(quote.projection)continue;if(quote.candleWidth){xbase+=Q5v.k3P((quote.candleWidth-candleWidth),2);candleWidth=quote.candleWidth;}
var color=colorFunction(this,quote,"shadow");if(!color)continue;if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(Q5v.F3P(tick,panel.cacheLeft)||Q5v.E3P(tick,panel.cacheRight)||!cache.top){top=(yAxis.semiLog?this.pixelFromPrice(quote.High,panel):(Q5v.S3P((yAxis.high-quote.High),yAxis.multiplier))+yAxis.top);bottom=(yAxis.semiLog?this.pixelFromPrice(quote.Low,panel):(Q5v.D3P((yAxis.high-quote.Low),yAxis.multiplier))+yAxis.top);var length=Q5v.g3P(bottom,top);if(Q5v.p3P(top,t)){if(Q5v.Y3P(top+length,t)){cache.top=top;cache.bottom=top;continue;}
length-=Q5v.G3P(t,top);top=t;}
if(Q5v.J3P(top+length,b)){length-=(top+length-b);}
cache.top=top;cache.bottom=cache.top+length;}
if(Q5v.V3P(cache.top,b))continue;if(Q5v.r3P(cache.bottom,t))continue;var xx=Math.floor(xbase)+0.5;context.beginPath();context.moveTo(xx,cache.top);context.lineTo(xx,cache.bottom);if(Q5v.c3P(quote.Open,quote.Close)||(!quote.Open&&Q5v.b3P(quote.Open,0))){var offset=this.offset;if(Q5v.K3P(this.layout.chartType,"volume_candle")){offset=Q5v.v7P(candleWidth,2);}
var x0=Q5v.d7P(xx,offset),x1=xx+offset,o=Math.floor((yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(Q5v.Z7P((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top))+0.5;if(Q5v.y7P(o,b)&&Q5v.R7P(o,t)){context.moveTo(x0,o);context.lineTo(x1,o);}
}
context.strokeStyle=color;context.stroke();}
}
;STXChart.prototype.scatter=function(panel){var chart=panel.chart,quotes=chart.dataSegment,context=this.chart.context;context.beginPath();context.lineWidth=4;var t=panel.yAxis.top,b=panel.yAxis.bottom,xbase=Q5v.L7P(panel.left,0.5*this.layout.candleWidth,this.micropixels,1);for(var x=0;Q5v.i7P(x,quotes.length);x++){xbase+=this.layout.candleWidth;var quote=quotes[x];if(!quote)continue;if(!quote.projection){if(quote.transform)quote=quote.transform;var scatter=[quote.Close];if(Q5v.H7P("Scatter",quote))scatter=quote.Scatter;for(var i=0;Q5v.M7P(i,scatter.length);i++){var top=this.pixelFromPrice(scatter[i],panel);if(Q5v.e7P(top,t))continue;if(Q5v.O7P(top,b))continue;context.moveTo(Q5v.A7P(xbase,2),top);context.lineTo(xbase+2,top);}
}
}
this.canvasColor("stx_scatter_chart");context.stroke();context.closePath();context.lineWidth=1;}
;STXChart.prototype.drawKagiSquareWave=function(panel,upStyleName,downStyleName){var chart=panel.chart;this.startClip(panel.name);var quotes=chart.dataSegment,context=chart.context,upStyle=this.canvasStyle(upStyleName),downStyle=this.canvasStyle(downStyleName);this.canvasColor(upStyleName);var upColor=context.strokeStyle;this.canvasColor(downStyleName);var downColor=context.strokeStyle,upWidth=1;if(upStyle.width&&Q5v.q7P(parseInt(upStyle.width,10),25)){upWidth=Math.max(1,STX.stripPX(upStyle.width));}
var downWidth=1;if(downStyle.width&&Q5v.U7P(parseInt(downStyle.width,10),25)){downWidth=Math.max(1,STX.stripPX(downStyle.width));}
context.beginPath();var leftTick=Q5v.w7P(chart.dataSet.length,chart.scroll),yAxis=panel.yAxis,first=true,previousOpen=null,lastClose=null,trend=null,xbase=Q5v.f7P(panel.left,0.5*this.layout.candleWidth,this.micropixels,1);for(var x=0;Q5v.v2P(x,quotes.length);x++){xbase+=this.layout.candleWidth;var quote=quotes[x];if(!quote)continue;if(quote.projection)break;if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(Q5v.d2P(tick,panel.cacheLeft)||Q5v.Z2P(tick,panel.cacheRight)||!cache.open){cache.open=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(Q5v.y2P((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top);cache.close=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(Q5v.R2P((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);}
lastClose=cache.close;if(first){context.moveTo(Math.floor(xbase),cache.open);previousOpen=cache.open;if(Q5v.L2P(cache.close,cache.open))trend=1;else trend=-1;first=false;}
if(trend!=-1&&Q5v.h2P(cache.close,previousOpen)&&Q5v.C2P(previousOpen,cache.open)){context.lineTo(Math.floor(xbase),previousOpen);context.strokeStyle=downColor;context.lineWidth=downWidth;context.stroke();context.closePath();context.beginPath();trend=-1;context.moveTo(Math.floor(xbase),previousOpen);}
else if(Q5v.W2P(trend,1)&&Q5v.t2P(cache.close,previousOpen)&&Q5v.P2P(previousOpen,cache.open)){context.lineTo(Math.floor(xbase),previousOpen);context.strokeStyle=upColor;context.lineWidth=upWidth;context.stroke();context.closePath();context.beginPath();trend=1;context.moveTo(Math.floor(xbase),previousOpen);}
context.lineTo(Math.floor(xbase),cache.close);if(Q5v.Q2P(x+1,quotes.length)){context.lineTo(Math.floor(xbase+this.layout.candleWidth),cache.close);previousOpen=cache.open;}
}
if(trend==-1||(Q5v.z2P(trend,null)&&Q5v.a2P(lastClose,previousOpen))){context.strokeStyle=upColor;context.lineWidth=upWidth;}
else{context.strokeStyle=downColor;context.lineWidth=downWidth;}
context.stroke();context.closePath();this.endClip();context.lineWidth=1;}
;STXChart.prototype.drawPointFigureChart=function(panel,style,condition){var chart=panel.chart;this.startClip(panel.name);var quotes=chart.dataSegment,context=chart.context;this.canvasColor(style);var pfstyle=this.canvasStyle(style),paddingTop=parseInt(pfstyle.paddingTop,10),paddingBottom=parseInt(pfstyle.paddingBottom,10),paddingLeft=parseInt(pfstyle.paddingLeft,10),paddingRight=parseInt(pfstyle.paddingRight,10);if(pfstyle.width&&Q5v.j2P(parseInt(pfstyle.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(pfstyle.width));}
else{context.lineWidth=2;}
context.beginPath();if(!this.chart.pandf)this.chart.pandf={"box":1,"reversal":3}
;var box=this.chart.pandf.box,leftTick=Q5v.B2P(chart.dataSet.length,chart.scroll),yAxis=panel.yAxis,boxes,height,start,candleWidth=this.layout.candleWidth,xbase=Q5v.I2P(panel.left,candleWidth,this.micropixels,1);for(var x=0;Q5v.X8P(x,quotes.length);x++){xbase+=candleWidth;var quote=quotes[x];if(!quote)continue;if(quote.projection)break;if(quote.candleWidth)candleWidth=quote.candleWidth;if(quote.transform)quote=quote.transform;if(Q5v.o8P(condition,"X")&&Q5v.k8P(quote.Open,quote.Close))continue;else if(Q5v.F8P(condition,"O")&&Q5v.E8P(quote.Open,quote.Close))continue;var cache=quote.cache,tick=leftTick+x;if(Q5v.S8P(tick,panel.cacheLeft)||Q5v.D8P(tick,panel.cacheRight)||!cache.open){cache.open=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(Q5v.g8P((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top);cache.close=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(Q5v.p8P((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);}
var xxl=Math.round(xbase),xxr=Math.round(xbase+candleWidth);boxes=Math.abs(Math.round(Q5v.Y8P((quote.Close-quote.Open),box)));height=Math.abs(Q5v.G8P((cache.open-cache.close),boxes));var voffset=Q5v.J8P(height,2);start=cache.open;for(;Q5v.V8P(boxes,0);boxes--){if(Q5v.r8P(condition,"X")){context.moveTo(xxl+paddingLeft,Q5v.c8P(start,paddingBottom,voffset));context.lineTo(Q5v.f8P(xxr,paddingRight),Q5v.x8P(start,height,paddingTop,voffset));context.moveTo(xxl+paddingLeft,Q5v.d5P(start,height,paddingTop,voffset));context.lineTo(Q5v.N5P(xxr,paddingRight),Q5v.T5P(start,paddingBottom,voffset));start-=height;}
else if(Q5v.L5P(condition,"O")){context.moveTo(Q5v.h5P((xxl+xxr),2),start+paddingTop-voffset);context.bezierCurveTo(xxr+paddingRight,start+paddingTop-voffset,xxr+paddingRight,start+height-paddingBottom-voffset,Q5v.C5P((xxl+xxr),2),start+height-paddingBottom-voffset);context.bezierCurveTo(Q5v.W5P(xxl,paddingLeft),start+height-paddingBottom-voffset,Q5v.t5P(xxl,paddingLeft),start+paddingTop-voffset,Q5v.P5P((xxl+xxr),2),start+paddingTop-voffset);start+=height;}
}
}
context.stroke();this.endClip();context.lineWidth=1;}
;STXChart.prototype.drawBarChartHighPerformance=function(panel,style,condition){var chart=panel.chart,quotes=chart.dataSegment,context=chart.context,c=this.canvasStyle(style);if(c.width&&Q5v.Q5P(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
context.beginPath();var t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,length,leftTick=Q5v.z5P(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks,yAxis=panel.yAxis,xbase=Q5v.a5P(panel.left,0.5*this.layout.candleWidth,this.micropixels,1),hlen=Q5v.w5P(chart.tmpWidth,2),voffset=Q5v.f5P(context.lineWidth,2);for(var x=0;Q5v.x5P(x,quotes.length);x++){xbase+=this.layout.candleWidth;var quote=quotes[x];if(!quote)continue;if(quote.projection)break;if(condition){if(Q5v.X6G(condition,STXChart.CLOSEUP)&&Q5v.o6G(quote.Close,quote.iqPrevClose))continue;else if(Q5v.k6G(condition,STXChart.CLOSEDOWN)&&Q5v.F6G(quote.Close,quote.iqPrevClose))continue;else if(Q5v.E6G(condition,STXChart.CLOSEEVEN)&&Q5v.S6G(quote.Close,quote.iqPrevClose))continue;}
if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(Q5v.D6G(tick,panel.cacheLeft)||Q5v.g6G(tick,panel.cacheRight)||!cache.top){top=(yAxis.semiLog?this.pixelFromPrice(quote.High,panel):(Q5v.p6G((yAxis.high-quote.High),yAxis.multiplier))+yAxis.top);bottom=(yAxis.semiLog?this.pixelFromPrice(quote.Low,panel):(Q5v.Y6G((yAxis.high-quote.Low),yAxis.multiplier))+yAxis.top);length=Q5v.G6G(bottom,top);cache.open=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(Q5v.J6G((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top);cache.close=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(Q5v.V6G((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);if(Q5v.r6G(top,t)){if(Q5v.c6G(top+length,t)){cache.top=top;cache.bottom=top;continue;}
length-=Q5v.b6G(t,top);top=t;}
if(Q5v.K6G(top+length,b)){length-=(top+length-b);}
cache.top=top;cache.bottom=top+length;}
var xx=Math.floor(xbase)+0.5;if(Q5v.v0G(cache.top,b)&&Q5v.d0G(cache.bottom,t)){context.moveTo(xx,Q5v.Z0G(cache.top,voffset));context.lineTo(xx,cache.bottom+voffset);}
if(Q5v.y0G(cache.open,t)&&Q5v.R0G(cache.open,b)){context.moveTo(xx,cache.open);context.lineTo(Q5v.L0G(xx,hlen),cache.open);}
if(Q5v.h0G(cache.close,t)&&Q5v.C0G(cache.close,b)){context.moveTo(xx,cache.close);context.lineTo(xx+hlen,cache.close);}
}
this.canvasColor(style);context.stroke();context.closePath();context.lineWidth=1;}
;STXChart.prototype.drawBarChart=function(panel,style,colorFunction){var chart=panel.chart;if(!chart){chart=panel;panel=panel.chart;}
var quotes=chart.dataSegment,context=chart.context,c=this.canvasStyle(style);if(c.width&&Q5v.W0G(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
var t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,length,leftTick=Q5v.t0G(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks,yAxis=panel.yAxis,colors={}
,hlen=Q5v.P0G(chart.tmpWidth,2),voffset=Q5v.Q0G(context.lineWidth,2),candleWidth=this.layout.candleWidth,xbase=Q5v.z0G(panel.left,0.5*candleWidth,this.micropixels,1);for(var x=0;Q5v.U0G(x,quotes.length);x++){xbase+=Q5v.w0G(candleWidth,2);candleWidth=this.layout.candleWidth;xbase+=Q5v.f0G(candleWidth,2);var quote=quotes[x];if(!quote)continue;if(quote.projection)break;if(quote.candleWidth){xbase+=Q5v.x0G((quote.candleWidth-candleWidth),2);candleWidth=quote.candleWidth;}
var color=colorFunction(this,quote);if(!color)continue;colors[color]=1;context.strokeStyle=color;context.beginPath();if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(Q5v.X9G(tick,panel.cacheLeft)||Q5v.o9G(tick,panel.cacheRight)||!cache.top){top=this.pixelFromPrice(quote.High,panel);bottom=this.pixelFromPrice(quote.Low,panel);length=Q5v.k9G(bottom,top);cache.open=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(Q5v.F9G((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top);cache.close=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(Q5v.E9G((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);if(Q5v.S9G(top,t)){if(Q5v.D9G(top+length,t)){cache.top=top;cache.bottom=top;continue;}
length-=Q5v.g9G(t,top);top=t;}
if(Q5v.p9G(top+length,b)){length-=(top+length-b);}
cache.top=top;cache.bottom=top+length;}
var xx=Math.floor(xbase)+0.5;if(Q5v.Y9G(cache.top,b)&&Q5v.G9G(cache.bottom,t)){context.moveTo(xx,Q5v.J9G(cache.top,voffset));context.lineTo(xx,cache.bottom+voffset);}
if(Q5v.V9G(cache.open,t)&&Q5v.r9G(cache.open,b)){context.moveTo(xx,cache.open);context.lineTo(Q5v.c9G(xx,hlen),cache.open);}
if(Q5v.b9G(cache.close,t)&&Q5v.K9G(cache.close,b)){context.moveTo(xx,cache.close);context.lineTo(xx+hlen,cache.close);}
context.stroke();}
context.lineWidth=1;return colors;}
;STXChart.prototype.plotLineChart=function(panel,quotes,field,parameters,colorFunction){var skipProjections=false,skipTransform=false,noSlopes=false,tension=0,points=[];if(parameters){skipProjections=parameters.skipProjections;skipTransform=parameters.skipTransform;noSlopes=parameters.noSlopes;tension=parameters.tension;}
var chart=panel.chart,context=this.chart.context,first=true,yAxis=panel.yAxis,t=yAxis.top,b=yAxis.bottom,leftTick=Q5v.v4G(chart.dataSet.length,chart.scroll),lastQuote=null,colors={}
,lastXY=[0,0],candleWidth=this.layout.candleWidth,xbase=Q5v.d4G(panel.left,(parameters.noSlopes?1:0.5)*candleWidth,this.micropixels,1);this.startClip(panel.name);context.beginPath();for(var i=0;Q5v.N4G(i,quotes.length);i++){xbase+=Q5v.T4G(candleWidth,2);if(parameters.noSlopes)xbase+=Q5v.l4G(candleWidth,2);candleWidth=this.layout.candleWidth;if(!parameters.noSlopes)xbase+=Q5v.n4G(candleWidth,2);var quote=quotes[i];if(!quote)continue;if(skipProjections&&quote.projection)break;if(quote.candleWidth){if(!parameters.noSlopes)xbase+=Q5v.i4G((quote.candleWidth-candleWidth),2);candleWidth=quote.candleWidth;}
if(!skipTransform&&quote.transform)quote=quote.transform;var x=xbase,cache=quote.cache,tick=leftTick+i;if(!quote[field]&&Q5v.H4G(quote[field],0))continue;if(Q5v.M4G(tick,panel.cacheLeft)||Q5v.e4G(tick,panel.cacheRight)||!cache[field]){cache[field]=(yAxis.semiLog?this.pixelFromPrice(quote[field],panel):(Q5v.O4G((yAxis.high-quote[field]),yAxis.multiplier))+yAxis.top);}
if(Q5v.A4G(x,panel.right))lastQuote=quote;if(Q5v.q4G(i,quotes.length-1)){if(this.extendLastTick)x+=this.offset;if(parameters.lastTickOffset)x+=parameters.lastTickOffset;}
var y=cache[field],pattern=null;if(colorFunction){var color=colorFunction(this,quote);if(!color)continue;if(typeof color=="object"){pattern=color.pattern;color=color.color;}
if(Q5v.U4G(context.strokeStyle,color)){if(!first){context.stroke();context.beginPath();context.moveTo(lastXY[0],lastXY[1]);}
context.strokeStyle=color;colors[color]=1;}
}
if(first){first=false;if(noSlopes||Q5v.w4G(leftTick,0)){context.moveTo(i?x:0,y);if(tension){points.push(x,y);}
else{if(pattern){context.dashedLineTo(0,y,x,y,pattern);}
else{context.lineTo(x,y);}
}
}
else if(Q5v.f4G(leftTick,0)){var baseline=chart.dataSet[leftTick];if(!skipTransform&&baseline.transform)baseline=baseline.transform;var y0=baseline[field];if(!y0||isNaN(y0)){context.moveTo(i?x:0,y);if(tension){points.push(x,y);}
}
else{y0=(yAxis.semiLog?this.pixelFromPrice(y0,panel):(Q5v.x4G((yAxis.high-y0),yAxis.multiplier))+yAxis.top);var x0=Q5v.X1G(x,candleWidth);if(pattern){context.dashedLineTo(x0,y0,x,y,pattern);}
else{context.moveTo(x0,y0);if(tension){points.push(x0,y0,x,y);}
else{context.lineTo(x,y);}
}
}
}
}
else{if(noSlopes){var quote1=quotes[Q5v.o1G(i,1)];if(!quote1)continue;if(!skipTransform&&quote1.transform)quote1=quote1.transform;if(i){if(pattern){context.dashedLineTo(lastXY[0],lastXY[1],x,lastXY[1],pattern);}
else{context.lineTo(x,lastXY[1]);}
context.moveTo(x,y);}
if(Q5v.k1G(i,quotes.length-1)){if(pattern){context.dashedLineTo(x,y,x+candleWidth,y,pattern);}
else{context.lineTo(x+candleWidth,y);}
}
}
else{if(pattern){context.dashedLineTo(lastXY[0],lastXY[1],x,y,pattern);}
else{if(tension){points.push(x,y);}
else{context.lineTo(x,y);}
}
}
}
lastXY=[x,y];if(Q5v.F1G(i,(quotes.length-1))&&tension){points.push(x,y);plotSplinePrimitive(points,tension,context);}
}
context.stroke();this.endClip();if(parameters.label&&lastQuote){var txt;if(yAxis.priceFormatter){txt=yAxis.priceFormatter(this,panel,lastQuote[field],parameters.labelDecimalPlaces);}
else{txt=this.formatYAxisPrice(lastQuote[field],panel,parameters.labelDecimalPlaces);}
var yaxisLabelStyle=this.yaxisLabelStyle;if(panel.yAxis.yaxisLabelStyle)yaxisLabelStyle=panel.yAxis.yaxisLabelStyle;var labelcolor=Q5v.E1G(yaxisLabelStyle,"noop")?context.strokeStyle:null;this.yAxisLabels.push({src:"plot","args":[panel,txt,lastQuote.cache[field],Q5v.S1G(yaxisLabelStyle,"noop")?"#FFFFFF":context.strokeStyle,labelcolor]}
);}
return colors;}
;STXChart.prototype.plotMountainChart=function(panel,quotes,field,parameters){var skipProjections=false,skipTransform=false,reverse=false,tension=0,points=[];if(parameters){skipProjections=parameters.skipProjections;skipTransform=parameters.skipTransform;reverse=parameters.reverse;tension=parameters.tension;}
var chart=panel.chart,context=this.chart.context,first=true,t=panel.yAxis.top,b=panel.yAxis.bottom;this.startClip(panel.name);context.beginPath();var leftTick=Q5v.D1G(chart.dataSet.length,chart.scroll),firstX=null,firstY=null,yAxis=panel.yAxis,x=0;for(var i=0;Q5v.g1G(i,quotes.length);i++){var quote=quotes[i];if(!quote)continue;if(skipProjections&&quote.projection)break;if(!skipTransform&&quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+i;if(Q5v.p1G(tick,panel.cacheLeft)||Q5v.Y1G(tick,panel.cacheRight)||!cache[field]){if(!quote[field]&&Q5v.G1G(quote[field],0))continue;cache[field]=(yAxis.semiLog?this.pixelFromPrice(quote[field],panel):(Q5v.J1G((yAxis.high-quote[field]),yAxis.multiplier))+yAxis.top);}
x=panel.left+Q5v.V1G((i+0.5),this.layout.candleWidth)+this.micropixels-1;if(Q5v.r1G(i,quotes.length-1)){if(this.extendLastTick)x+=this.offset;if(parameters.lastTickOffset)x+=parameters.lastTickOffset;}
if(Q5v.c1G(firstX,null))firstX=x;var y=cache[field];if(Q5v.b1G(firstY,null))firstY=y;if(first){first=false;if(Q5v.K1G(leftTick,0)){context.moveTo(x,y);if(tension){points.push(x,y);}
}
else{var baseline=chart.dataSet[leftTick];if(baseline.transform)baseline=baseline.transform;var y0=baseline[field];y0=(yAxis.semiLog?this.pixelFromPrice(y0,panel):(Q5v.v3G((yAxis.high-y0),yAxis.multiplier))+yAxis.top);firstX=Q5v.d3G(x,this.layout.candleWidth);context.moveTo(firstX,y0);if(tension){points.push(firstX,y0,x,y);}
else{context.lineTo(x,y);}
}
}
else{if(tension){points.push(x,y);}
else{context.lineTo(x,y);}
}
if(Q5v.Z3G(i,(quotes.length-1))&&tension){points.push(x,y);plotSplinePrimitive(points,tension,context);}
}
context.lineTo(x,reverse?t:b);context.lineTo(firstX,reverse?t:b);if(reverse){if(Q5v.y3G(firstY,t))firstY=t;}
else{if(Q5v.R3G(firstY,b))firstY=b;}
context.lineTo(firstX,firstY);context.fill();context.closePath();this.endClip();}
;STXChart.prototype.drawLineChart=function(panel,style,colorFunction){var context=this.chart.context,c=this.canvasStyle(style);if(c.width&&Q5v.L3G(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
this.canvasColor(style);var params={skipProjections:true}
;if(panel.chart.tension)params.tension=panel.chart.tension;if(panel.chart.lastTickOffset)params.lastTickOffset=panel.chart.lastTickOffset;var rc=this.plotLineChart(panel,panel.chart.dataSegment,"Close",params,colorFunction);context.lineWidth=1;return rc;}
;STXChart.prototype.drawMountainChart=function(panel){var context=this.chart.context,c=this.canvasStyle("stx_mountain_chart");if(c.width&&Q5v.h3G(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
var top=this.pixelFromPrice(panel.chart.highValue,panel);if(isNaN(top))top=0;var backgroundColor=c.backgroundColor,color=c.color;if(color&&Q5v.C3G(color,"transparent")){var gradient=context.createLinearGradient(0,top,0,panel.yAxis.bottom);gradient.addColorStop(0,backgroundColor);gradient.addColorStop(1,color);context.fillStyle=gradient;}
else{context.fillStyle=backgroundColor;}
var params={skipProjections:true}
;if(panel.chart.tension)params.tension=panel.chart.tension;if(panel.chart.lastTickOffset)params.lastTickOffset=panel.chart.lastTickOffset;this.plotMountainChart(panel,panel.chart.dataSegment,"Close",params);var strokeStyle=c.borderTopColor;if(strokeStyle&&Q5v.W3G(strokeStyle,"transparent")){context.strokeStyle=strokeStyle;this.plotLineChart(panel,panel.chart.dataSegment,"Close",params);}
context.lineWidth=1;}
;STXChart.prototype.drawWaveChart=function(panel){var chart=panel.chart,quotes=chart.dataSegment,context=this.chart.context;this.startClip(panel.name);context.beginPath();var first=false,reset=false,t=panel.yAxis.top,b=panel.yAxis.bottom,xbase=panel.left+Math.floor(-0.5*this.layout.candleWidth+this.micropixels);for(var i=0;Q5v.t3G(i,quotes.length);i++){xbase+=this.layout.candleWidth;var quote=quotes[i];if(!quote)continue;if(quote.projection)break;if(quote.transform)quote=quote.transform;var x=Q5v.P3G(xbase,3*this.layout.candleWidth/8),y=this.pixelFromPrice(quote.Open,panel);if(Q5v.Q3G(y,t)){y=t;if(reset){context.moveTo(x,y);continue;}
reset=true;}
else if(Q5v.z3G(y,b)){y=b;if(reset){context.moveTo(x,y);continue;}
reset=true;}
else{reset=false;}
if(!first){first=true;var leftTick=Q5v.a3G(chart.dataSet.length,chart.scroll);if(Q5v.j3G(leftTick,0)){context.moveTo(x,y);}
else if(Q5v.B3G(leftTick,0)){var baseline=chart.dataSet[Q5v.I3G(leftTick,1)];if(baseline.transform)baseline=baseline.transform;var y0=baseline.Close;y0=(panel.yAxis.semiLog?this.pixelFromPrice(y0,panel):(Q5v.u3G((panel.yAxis.high-y0),panel.yAxis.multiplier))+t);y0=Math.min(Math.max(y0,t),b);context.moveTo(panel.left+Q5v.s7G((i-1),this.layout.candleWidth)+this.micropixels,y0);context.lineTo(x,y);}
context.moveTo(x,y);}
else{context.lineTo(x,y);}
x+=Q5v.m7G(this.layout.candleWidth,4);if(Q5v.N7G(quote.Open,quote.Close)){y=this.pixelFromPrice(quote.Low,panel);if(Q5v.T7G(y,t))y=t;if(Q5v.l7G(y,b))y=b;context.lineTo(x,y);x+=Q5v.n7G(this.layout.candleWidth,4);y=this.pixelFromPrice(quote.High,panel);if(Q5v.i7G(y,t))y=t;if(Q5v.H7G(y,b))y=b;context.lineTo(x,y);}
else{y=this.pixelFromPrice(quote.High,panel);if(Q5v.M7G(y,t))y=t;if(Q5v.e7G(y,b))y=b;context.lineTo(x,y);x+=Q5v.O7G(this.layout.candleWidth,4);y=this.pixelFromPrice(quote.Low,panel);if(Q5v.A7G(y,t))y=t;if(Q5v.q7G(y,b))y=b;context.lineTo(x,y);}
x+=Q5v.U7G(this.layout.candleWidth,4);y=this.pixelFromPrice(quote.Close,panel);if(Q5v.w7G(y,t))y=t;if(Q5v.f7G(y,b))y=b;context.lineTo(x,y);}
var c=this.canvasStyle("stx_line_chart");if(c.width&&Q5v.x7G(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
this.canvasColor("stx_line_chart");context.stroke();context.closePath();this.endClip();context.lineWidth=1;}
;STXChart.prototype.updateFloatHRLabel=function(panel){var arr=panel.yaxisLHS.concat(panel.yaxisRHS);if(this.floatCanvas.isDirty)STX.clearCanvas(this.floatCanvas,this);if(Q5v.X2G(this.controls.crossX.style.display,"none"))return ;if(this.controls.crossY){var crosshairWidth=panel.width;if(Q5v.o2G(this.yaxisLabelStyle,"roundRectArrow"))crosshairWidth-=7;this.controls.crossY.style.left=panel.left+"px";this.controls.crossY.style.width=crosshairWidth+"px";}
for(var i=0;Q5v.k2G(i,arr.length);i++){var yAxis=arr[i],price=this.valueFromPixel(this.cy,panel,yAxis);if(isNaN(price))continue;if((panel.min||Q5v.F2G(panel.min,0))&&Q5v.E2G(price,panel.min))continue;if((panel.max||Q5v.S2G(panel.max,0))&&Q5v.D2G(price,panel.max))continue;var labelDecimalPlaces=null;if(Q5v.g2G(yAxis,panel.chart.yAxis)){labelDecimalPlaces=0;if(Q5v.p2G(yAxis.shadow,1000))labelDecimalPlaces=2;if(Q5v.Y2G(yAxis.shadow,5))labelDecimalPlaces=4;if(yAxis.decimalPlaces||Q5v.G2G(yAxis.decimalPlaces,0))labelDecimalPlaces=yAxis.decimalPlaces;}
if(yAxis.priceFormatter){price=yAxis.priceFormatter(this,panel,price,yAxis);}
else{price=this.formatYAxisPrice(price,panel,labelDecimalPlaces,yAxis);}
var style=this.canvasStyle("stx-float-price");this.createYAxisLabel(panel,price,this.cy,style.backgroundColor,style.color,this.floatCanvas.context,yAxis);this.floatCanvas.isDirty=true;}
}
;STXChart.prototype.headsUpHR=function(){var F22="headsUpHR";if(this.runPrepend(F22,arguments))return ;var panel=this.currentPanel;if(!panel)return ;var chart=panel.chart;this.updateFloatHRLabel(panel);if(this.controls.floatDate&&!STXChart.hideDates()){var bar=this.barFromPixel(this.cx),prices=chart.xaxis[bar];if(prices&&prices.DT){if(chart.xAxis.formatter){this.controls.floatDate.innerHTML=chart.xAxis.formatter(prices.DT);}
else if(this.internationalizer){var str=this.internationalizer.monthDay.format(prices.DT);if(!STXChart.isDailyInterval(this.layout.interval))str+=n82+this.internationalizer.hourMinute.format(prices.DT);else{str=this.internationalizer.yearMonthDay.format(prices.DT);}
this.controls.floatDate.innerHTML=str;}
else{var m=prices.DT.getMonth()+Q5v.R42;if(Q5v.J2G(m,Q75))m=K95+m;var d=prices.DT.getDate();if(Q5v.V2G(d,Q75))d=K95+d;var h=prices.DT.getHours();if(Q5v.r2G(h,Q75))h=K95+h;var mn=prices.DT.getMinutes();if(Q5v.c2G(mn,Q75))mn=K95+mn;if(STXChart.isDailyInterval(this.layout.interval))this.controls.floatDate.innerHTML=m+y95+d+y95+prices.DT.getFullYear();else{this.controls.floatDate.innerHTML=m+y95+d+n82+h+F55+mn;var isSecond=(chart.xAxis.activeTimeUnit&&Q5v.b2G(chart.xAxis.activeTimeUnit,STX.SECOND))||Q5v.K2G(this.layout.timeUnit,u35),isMS=(chart.xAxis.activeTimeUnit&&Q5v.v8G(chart.xAxis.activeTimeUnit,STX.MILLISECOND))||Q5v.d8G(this.layout.timeUnit,K35);if(isSecond||isMS){var sec=prices.DT.getSeconds();if(Q5v.Z8G(sec,Q75))sec=K95+sec;this.controls.floatDate.innerHTML+=(F55+sec);if(isMS){var mil=prices.DT.getMilliseconds();if(Q5v.y8G(mil,Q75))mil=K95+mil;if(Q5v.R8G(mil,V85))mil=K95+mil;this.controls.floatDate.innerHTML+=(F55+mil);}
}
}
}
}
else if(prices&&prices.index){this.controls.floatDate.innerHTML=prices.index;}
else{this.controls.floatDate.innerHTML=P05;}
}
this.runAppend(F22,arguments);}
;STXChart.prototype.setCrosshairColors=function(){return ;}
;STXChart.prototype.magnetize=function(){var j25="Hig",G82="_bar";this.magnetizedPrice=null;if(this.runPrepend("magnetize",arguments))return ;if((Q5v.L8G(this.currentVectorParameters.vectorType,"annotation")||Q5v.h8G(this.currentVectorParameters.vectorType,"callout"))&&STXChart.drawingLine)return ;if(Q5v.C8G(this.currentVectorParameters.vectorType,"projection"))return ;if(Q5v.W8G(this.currentVectorParameters.vectorType,"freeform"))return ;var panel=this.currentPanel;if(Q5v.t8G(panel.name,panel.chart.name)){var chart=panel.chart,tick=this.tickFromPixel(Q5v.P8G(STXChart.crosshairX,this.left),chart);if(Q5v.Q8G(tick,chart.dataSet.length))return ;var prices=chart.dataSet[tick];if(!prices)return ;var price=this.valueFromPixel(this.cy,panel);this.magnetizedPrice=prices.Close;if(Q5v.z8G(this.layout.chartType,"bar")||Q5v.a8G(this.layout.chartType,"candle")||Q5v.j8G(this.layout.chartType,(R82+Q5v.D45+E45+G95+G82))||Q5v.B8G(this.layout.chartType,"hollow_candle")||Q5v.I8G(this.layout.chartType,"volume_candle")){var fields=["Open",(j25+Q5v.g15),"Low","Close"],closest=1000000000;for(var i=0;Q5v.u8G(i,fields.length);i++){var fp=prices[fields[i]];if(Q5v.s5G(Math.abs(price-fp),closest)){closest=Math.abs(Q5v.m5G(price,fp));this.magnetizedPrice=fp;}
}
}
var x=this.pixelFromTick(tick,chart),y=this.pixelFromPrice(this.magnetizedPrice,this.currentPanel),ctx=this.chart.tempCanvas.context;ctx.beginPath();ctx.lineWidth=1;var radius=Q5v.N5G(Math.max(this.layout.candleWidth,8),2);ctx.arc(x,y,radius,0,Q5v.T5G(2,Math.PI),false);ctx.fillStyle="#FFFFFF";ctx.strokeStyle="#000000";ctx.fill();ctx.stroke();ctx.closePath();}
this.runAppend("magnetize",arguments);}
;STXChart.prototype.positionCrosshairsAtPointer=function(){var Q82=9909057,Y45=1620831,U45=1012841975,c35=85442460;if(!this.currentPanel)return ;var chart=this.currentPanel.chart,rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.right=this.left+this.width;this.bottom=this.top+this.height;var tick=this.tickFromPixel(this.backOutX(STXChart.crosshairX),chart);this.cy=this.backOutY(STXChart.crosshairY);var h92=c35,D92=U45,n92=Q5v.y42;for(var S92=Q5v.R42;Q5v.Q02.J02(S92.toString(),S92.toString().length,Y45)!==h92;S92++){yAxis.yAxisPlotter.addText(O05,price,textXPosition,y2,backgroundColor,Q5v.s15,fontHeight);this.drawShadows(panel,colorFunction);points.push(firstX,y0,x,y);loadAllTheData();n92+=Q5v.y42;}
if(Q5v.Q02.J02(n92.toString(),n92.toString().length,Q82)!==D92){mIterator++;this.setLocale(this.locale);context.moveTo(xstart,cache.open);return A6v===z6v;}
this.cx=this.backOutX(STXChart.crosshairX);this.controls.crossX.style.left=(Q5v.l5G(this.pixelFromTick(tick,chart),0.5))+"px";this.controls.crossY.style.top=this.backOutY(STXChart.crosshairY)+"px";this.updateChartAccessories();}
;STXChart.prototype.doDisplayCrosshairs=function(){var J52="stx-crosshair-on",J12="doDisplayCrosshairs";if(this.runPrepend(J12,arguments))return ;if(this.displayInitialized){if(!this.layout.crosshair&&(Q5v.n5G(this.currentVectorParameters.vectorType,P05)||!this.currentVectorParameters.vectorType)){this.undisplayCrosshairs();}
else if(STX.Drawing[this.currentVectorParameters.vectorType]&&(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw){this.undisplayCrosshairs();}
else{if(Q5v.i5G(this.controls.crossX.style.display,P05)){this.controls.crossX.style.display=P05;this.controls.crossY.style.display=P05;if(this.preferences.magnet&&this.currentVectorParameters.vectorType){STX.unappendClassName(this.container,J52);}
else{STX.appendClassName(this.container,J52);}
}
if(this.controls.floatDate&&!STXChart.hideDates()){this.controls.floatDate.style.display=Z72;}
}
}
this.runAppend(J12,arguments);}
;STXChart.prototype.undisplayCrosshairs=function(){var g65="ai",H72="ssh",I12="undisplayCrosshairs";if(this.runPrepend(I12,arguments))return ;if(this.controls.crossX){if(Q5v.H5G(this.controls.crossX.style.display,e85)){this.controls.crossX.style.display=e85;this.controls.crossY.style.display=e85;}
}
if(this.displayInitialized&&this.controls.floatDate){this.controls.floatDate.style.display=e85;}
STX.unappendClassName(this.container,(S95+Z25+y95+o82+k55+H72+g65+m95+y95+E45+s45));if(this.floatCanvas&&this.floatCanvas.isDirty)STX.clearCanvas(this.floatCanvas,this);this.runAppend(I12,arguments);}
;STXChart.prototype.modalBegin=function(){var M52="modal";this.openDialog=M52;this.undisplayCrosshairs();}
;STXChart.prototype.modalEnd=function(){this.cancelTouchSingleClick=k15;this.openDialog=P05;this.doDisplayCrosshairs();}
;STXChart.prototype.updateChartAccessories=function(){var m32="updateChartAccessories";if(this.runPrepend(m32,arguments))return ;this.accessoryTimer=Q5v.s15;this.lastAccessoryUpdate=new Date().getTime();var floatDate=this.controls.floatDate;if(floatDate){var panel=this.currentPanel;if(!panel)panel=this.chart.panel;if(panel){var chart=panel.chart,tick=this.tickFromPixel(this.backOutX(STXChart.crosshairX),chart);floatDate.style.left=(Q5v.M5G(this.pixelFromTick(tick,chart),(floatDate.offsetWidth/Q5v.y42),S52))+c75;floatDate.style.bottom=(Q5v.P5G(this.chart.canvasHeight,chart.panel.bottom))+c75;}
}
this.headsUpHR();this.runAppend(m32,arguments);}
;STXChart.prototype.mousemove=function(e$){var e=e$?e$:event;STXChart.crosshairX=e.clientX;STXChart.crosshairY=e.clientY;if(this.runPrepend(d52,arguments))return ;if(!this.displayInitialized)return ;if(Q5v.Q5G(this.openDialog,P05))return ;this.mousemoveinner(e.clientX,e.clientY);this.runAppend(d52,arguments);}
;STXChart.prototype.setResizeTimer=function(ms){this.resizeDetectMS=ms;function closure(self){return function(){if(!self.chart.canvas)return ;if(!STX.isAndroid){if(Q5v.z5G(self.chart.canvas.height,Math.floor(self.devicePixelRatio*self.chart.container.clientHeight))||Q5v.a5G(self.chart.canvas.width,Math.floor(self.devicePixelRatio*self.chart.container.clientWidth))){self.resizeChart();return ;}
}
}
;}
if(ms){if(this.resizeTimeout)window.clearInterval(this.resizeTimeout);this.resizeTimeout=window.setInterval(closure(this),ms);}
else{if(this.resizeTimeout)window.clearInterval(this.resizeTimeout);this.resizeTimeout=null;}
}
;STXChart.prototype.whichYAxis=function(panel,x){if(typeof x==="undefined")x=this.cx;var arr=panel.yaxisLHS.concat(panel.yaxisRHS);for(var i=0;Q5v.j5G(i,arr.length);i++){var yAxis=arr[i];if(Q5v.B5G(yAxis.left,x)&&Q5v.I5G(yAxis.left+yAxis.width,x))return yAxis;}
return this.chart.panel.yAxis;}
;STXChart.prototype.mousemoveinner=function(epX,epY){var z35="pan";if(!this.chart.canvas)return ;if(!STX.isAndroid&&!STX.isIOS7or8){if(Q5v.u5G(this.chart.canvas.height,Math.floor(this.devicePixelRatio*this.chart.container.clientHeight))||Q5v.s6T(this.chart.canvas.width,Math.floor(this.devicePixelRatio*this.chart.container.clientWidth))){this.resizeChart();return ;}
}
if(this.runPrepend("mousemoveinner",arguments))return ;var rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.right=this.left+this.width;this.bottom=this.top+this.height;STXChart.crosshairX=epX;STXChart.crosshairY=epY;var cy=this.cy=this.backOutY(STXChart.crosshairY),cx=this.cx=this.backOutX(STXChart.crosshairX);this.currentPanel=this.whichPanel(cy);if(!this.currentPanel)this.currentPanel=this.chart.panel;if(!this.currentPanel)return ;var chart=this.currentPanel.chart;if(chart.dataSet){this.crosshairTick=this.tickFromPixel(cx,chart);this.crosshairValue=this.adjustIfNecessary(this.currentPanel,this.crosshairTick,this.valueFromPixel(cy,this.currentPanel));}
if(Q5v.m6T(STXChart.crosshairX,this.left)&&Q5v.N6T(STXChart.crosshairX,this.right)&&Q5v.T6T(STXChart.crosshairY,this.top)&&Q5v.l6T(STXChart.crosshairY,this.bottom)){STXChart.insideChart=true;}
else{STXChart.insideChart=false;}
this.overXAxis=Q5v.n6T(STXChart.crosshairY,this.top+this.chart.panel.yAxis.bottom)&&Q5v.i6T(STXChart.crosshairY,this.top+this.chart.panel.bottom)&&STXChart.insideChart;this.overYAxis=(Q5v.H6T(this.cx,this.currentPanel.right)||Q5v.M6T(this.cx,this.currentPanel.left))&&STXChart.insideChart;if(this.overXAxis||this.overYAxis||(!STXChart.insideChart&&!this.grabbingScreen)){this.undisplayCrosshairs();if(!this.overXAxis&&!this.overYAxis)return ;}
if(!this.displayCrosshairs&&!STXChart.resizingPanel){this.undisplayCrosshairs();return ;}
var bHandle=this.controls.baselineHandle;if(this.repositioningBaseline){panel=this.panels[this.chart.panel.name];this.chart.baseline.userLevel=this.adjustIfNecessary(panel,this.crosshairTick,this.valueFromPixelUntransform(this.backOutY(STXChart.crosshairY),panel));if(Q5v.e6T(Date.now()-this.repositioningBaseline.lastDraw,100)){this.draw();this.repositioningBaseline.lastDraw=Date.now();}
return ;}
if(this.grabbingScreen&&!STXChart.resizingPanel){if(this.anyHighlighted){STX.clearCanvas(this.chart.tempCanvas,this);this.anyHighlighted=false;var n;for(n in this.overlays){this.overlays[n].highlight=false;}
for(n in chart.series){chart.series[n].highlight=false;}
this.displaySticky();}
if(this.preferences.magnet&&this.currentVectorParameters.vectorType){STX.clearCanvas(this.chart.tempCanvas,this);}
if(this.grabStartX==-1){this.grabStartX=STXChart.crosshairX;this.grabStartScrollX=chart.scroll;}
if(this.grabStartY==-1){this.grabStartY=STXChart.crosshairY;this.grabStartScrollY=chart.panel.yAxis.scroll;}
var dx=Q5v.O6T(STXChart.crosshairX,this.grabStartX),dy=Q5v.A6T(STXChart.crosshairY,this.grabStartY);if(Q5v.q6T(dx,0)&&Q5v.U6T(dy,0))return ;if(Q5v.w6T(Math.abs(dx)+Math.abs(dy),5))this.grabOverrideClick=true;var push;if(this.allowZoom&&Q5v.f6T(this.grabMode,(z35))&&(Q5v.x6T(this.grabMode.indexOf("zoom"),0)||this.ctrl||this.overXAxis||this.overYAxis)){if(Q5v.X0T(this.grabMode,"")){if(this.overXAxis)this.grabMode="zoom-x";else if(this.overYAxis)this.grabMode="zoom-y";}
if(Q5v.o0T(this.grabMode,"zoom-x"))dy=0;else if(Q5v.k0T(this.grabMode,"zoom-y"))dx=0;push=Q5v.F0T(dx,25);var centerMe=true;if(Q5v.E0T(chart.scroll,chart.maxTicks))centerMe=false;var newCandleWidth=this.grabStartCandleWidth+push;if(Q5v.S0T(newCandleWidth,this.minimumCandleWidth))newCandleWidth=this.minimumCandleWidth;var pct=Q5v.D0T((this.layout.candleWidth-newCandleWidth),this.layout.candleWidth);if(Q5v.g0T(Math.abs(pct),0.2))this.grossDragging=new Date();else this.grossDragging=0;if(Q5v.p0T(pct,0.1)){newCandleWidth=Q5v.Y0T(this.layout.candleWidth,0.9);}
else if(pct<-0.1){newCandleWidth=Q5v.G0T(this.layout.candleWidth,1.1);}
if(STX.ipad){if(Q5v.J0T(Math.round((this.chart.width/this.layout.candleWidth)-0.499)-1,STXChart.ipadMaxTicks)&&Q5v.V0T(Math.round((this.chart.width/newCandleWidth)-0.499)-1,STXChart.ipadMaxTicks))return ;}
var newMaxTicks;if(this.pinchingCenter){var x=this.backOutX(this.pinchingCenter),tick1=this.tickFromPixel(x,chart);this.setCandleWidth(newCandleWidth,chart);var newTick=this.tickFromPixel(x,chart);chart.scroll+=Math.floor((Q5v.r0T(newTick,tick1)));}
else if(centerMe){newMaxTicks=Math.round(Q5v.c0T((this.chart.width/newCandleWidth),0.499));if(Q5v.b0T(newMaxTicks,chart.maxTicks)){this.setCandleWidth(newCandleWidth,chart);chart.scroll+=Math.round(Q5v.K0T((newMaxTicks-chart.maxTicks),2));}
}
else{newMaxTicks=Math.round(Q5v.v9T((this.chart.width/newCandleWidth),0.499));if(Q5v.d9T(newMaxTicks,Math.round((this.chart.width/this.layout.candleWidth)-0.499))){this.setCandleWidth(newCandleWidth,chart);var wsInTicks=Math.round(Q5v.Z9T(this.preferences.whitespace,this.layout.candleWidth));chart.scroll=Q5v.y9T(chart.maxTicks,wsInTicks);}
}
this.layout.span=null;var yAxis=this.whichYAxis(this.grabbingPanel,this.cx);if(this.overYAxis){yAxis.zoom=Math.round(this.grabStartZoom+dy);if(Q5v.R9T(this.grabStartZoom,yAxis.height)){if(Q5v.L9T(yAxis.zoom,yAxis.height))yAxis.zoom=Q5v.h9T(yAxis.height,1);}
else{if(Q5v.C9T(yAxis.zoom,yAxis.height))yAxis.zoom=yAxis.height+1;}
}
}
else{if(this.allowScroll){if(Q5v.W9T(Math.abs(dy),this.yTolerance)){if(!this.yToleranceBroken){dy=0;if(Q5v.t9T(dx,0))return ;}
}
else{this.yToleranceBroken=true;}
this.grabMode=(t95+O22+s45);push=Math.round(Q5v.P9T(dx,this.layout.candleWidth));this.microscroll=Q5v.Q9T(push,(dx/this.layout.candleWidth));this.micropixels=this.layout.candleWidth*this.microscroll*-1;if(this.shift)push*=5;if(Q5v.z9T(Math.abs(chart.scroll-this.grabStartScrollX-push),20))this.grossDragging=new Date();else this.grossDragging=0;chart.scroll=this.grabStartScrollX+push;if(Q5v.a9T(chart.scroll,1))chart.scroll=1;if(Q5v.j9T(chart.scroll,chart.maxTicks)){this.preferences.whitespace=30;}
else{this.preferences.whitespace=Q5v.B9T((chart.maxTicks-chart.scroll),this.layout.candleWidth);}
if(Q5v.I9T(this.currentPanel.name,chart.name)){this.chart.panel.yAxis.scroll=this.grabStartScrollY+dy;}
}
if(this.callbacks.move){(this.callbacks.move)({stx:this,panel:this.currentPanel,x:this.cx,y:this.cy,grab:this.grabbingScreen}
);}
}
var clsrFunc=function(stx){return function(){stx.draw();}
;}
;if(STXChart.useAnimation){if(window.requestAnimationFrame){window.requestAnimationFrame(clsrFunc(this));}
else if(this.grossDragging){setTimeout(function(stx){return function retest(){if(Q5v.u9T(new Date()-stx.grossDragging,500))setTimeout(retest,100);else{stx.grossDragging=0;stx.draw();}
}
;}
(this),100);}
else{this.draw();}
}
else{this.draw();}
if(this.activeDrawing){STX.clearCanvas(this.chart.tempCanvas,this);this.activeDrawing.render(this.chart.tempCanvas.context);this.activeDrawing.measure();}
this.undisplayCrosshairs();return ;}
else{this.grabMode="";}
this.grabbingPanel=this.currentPanel;if(this.overXAxis||this.overYAxis)return ;var tick=this.tickFromPixel(this.backOutX(STXChart.crosshairX),chart);this.controls.crossX.style.left=(Q5v.s4T(this.pixelFromTick(tick,chart),0.5))+"px";this.controls.crossY.style.top=this.cy+"px";this.setCrosshairColors();if(STXChart.insideChart&&!STXChart.resizingPanel){if(!STX.Drawing[this.currentVectorParameters.vectorType]||!(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw){this.doDisplayCrosshairs();}
if(Q5v.m4T(this.accessoryTimer,null))clearTimeout(this.accessoryTimer);if(STXChart.drawingLine||!STX.touchDevice){this.updateChartAccessories();}
else{if(Q5v.N4T(new Date().getTime()-this.lastAccessoryUpdate,100))this.updateChartAccessories();this.accessoryTimer=setTimeout((function(stx){return function(){stx.updateChartAccessories();}
;}
)(this),10);}
}
else{this.undisplayCrosshairs();}
var panel,value;if(this.repositioningDrawing){panel=this.panels[this.repositioningDrawing.panelName];value=this.adjustIfNecessary(panel,this.crosshairTick,this.valueFromPixelUntransform(this.backOutY(STXChart.crosshairY),panel));if(this.preferences.magnet&&this.magnetizedPrice&&Q5v.T4T(panel.name,panel.chart.name)){value=this.adjustIfNecessary(panel,this.crosshairTick,this.magnetizedPrice);}
STX.clearCanvas(this.chart.tempCanvas,this);this.repositioningDrawing.reposition(this.chart.tempCanvas.context,this.repositioningDrawing.repositioner,this.crosshairTick,value);if(this.repositioningDrawing.measure)this.repositioningDrawing.measure();}
else if(STXChart.drawingLine){if(this.activeDrawing){panel=this.panels[this.activeDrawing.panelName];value=this.adjustIfNecessary(panel,this.crosshairTick,this.valueFromPixelUntransform(this.backOutY(STXChart.crosshairY),panel));if(this.preferences.magnet&&this.magnetizedPrice&&Q5v.l4T(panel.name,panel.chart.name)){value=this.adjustIfNecessary(panel,this.crosshairTick,this.magnetizedPrice);}
STX.clearCanvas(this.chart.tempCanvas,this);this.activeDrawing.move(this.chart.tempCanvas.context,this.crosshairTick,value);if(this.activeDrawing.measure)this.activeDrawing.measure();}
}
else if(STXChart.resizingPanel){this.resizePanels();this.drawTemporaryPanel();}
else if(STXChart.insideChart){this.findHighlights();}
if(STXChart.insideChart){if(this.callbacks.move){(this.callbacks.move)({stx:this,panel:this.currentPanel,x:this.cx,y:this.cy,grab:this.grabbingScreen}
);}
this.findHighlights();}
if(this.preferences.magnet&&this.currentVectorParameters.vectorType){if(!STXChart.drawingLine&&!this.anyHighlighted)STX.clearCanvas(this.chart.tempCanvas);this.magnetize();}
this.runAppend("mousemoveinner",arguments);}
;STXChart.prototype.findHighlights=function(isTap,clearOnly){var radius=10;if(isTap)radius=30;var cy=this.cy,cx=this.cx;if(!this.currentPanel)return ;var chart=this.currentPanel.chart;this.anyHighlighted=false;if(this.preferences.magnet&&this.currentVectorParameters.vectorType){STX.clearCanvas(this.chart.tempCanvas,this);}
var somethingChanged=false,drawingToMeasure=null,stickyArgs=["","",true,null,"drawing"],box={x0:this.tickFromPixel(Q5v.n4T(cx,radius),chart),x1:this.tickFromPixel(cx+radius,chart),y0:this.valueFromPixelUntransform(Q5v.i4T(cy,radius),this.currentPanel),y1:this.valueFromPixelUntransform(cy+radius,this.currentPanel)}
;for(var i=0;Q5v.H4T(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];if(drawing.permanent)continue;var prevHighlight=drawing.highlighted,highlightMe=(Q5v.M4T(drawing.panelName,this.currentPanel.name));drawing.repositioner=drawing.intersected(this.crosshairTick,this.crosshairValue,box);highlightMe=highlightMe&&drawing.repositioner;if(!clearOnly&&highlightMe){if(prevHighlight){drawingToMeasure=drawing;}
else if(Q5v.e4T(prevHighlight,drawing.highlight(true))){if(!drawingToMeasure)drawingToMeasure=drawing;somethingChanged=true;}
this.anyHighlighted=true;}
else{if(Q5v.O4T(prevHighlight,drawing.highlight(false))){somethingChanged=true;}
}
}
var first=false,n,o,series;for(n in this.overlays){o=this.overlays[n];o.prev=o.highlight;o.highlight=false;}
for(n in chart.seriesRenderers){var r=chart.seriesRenderers[n];for(var j=0;Q5v.A4T(j,r.seriesParams.length);j++){series=r.seriesParams[j];series.prev=series.highlight;series.highlight=false;}
}
if(!clearOnly){var bar=this.barFromPixel(cx);if(Q5v.q4T(bar,chart.dataSegment.length)){var y;for(n in this.overlays){o=this.overlays[n];if(Q5v.U4T(o.panel,this.currentPanel.name))continue;if(o.libraryEntry.isHighlighted&&o.libraryEntry.isHighlighted(this,cx,cy)){o.highlight=true;this.anyHighlighted=true;continue;}
var quote=chart.dataSegment[bar];if(!quote)continue;for(var out in this.overlays[n].outputMap){var val=quote[out];y=0;if(Q5v.w4T(this.currentPanel.name,chart.name)){y=this.pixelFromPriceTransform(val,this.currentPanel);}
else{y=this.pixelFromPrice(val,this.currentPanel);}
if(Q5v.f4T(cy-radius,y)&&Q5v.x4T(cy+radius,y)){o.highlight=true;this.anyHighlighted=true;break;}
}
}
for(n in chart.seriesRenderers){var renderer=chart.seriesRenderers[n];if(!renderer.params.highlightable)continue;for(var m=0;Q5v.X1T(m,renderer.seriesParams.length);m++){series=renderer.seriesParams[m];y=renderer.caches[series.field][bar];if(!y&&Q5v.o1T(y,0))continue;if(Q5v.k1T(cy-radius,y)&&Q5v.F1T(cy+radius,y)){series.highlight=true;this.anyHighlighted=true;}
else if((Q5v.E1T(renderer.params.subtype,"step")||Q5v.S1T(series.type,(D15)))&&Q5v.D1T(bar,0)){var py=renderer.caches[series.field][Q5v.g1T(bar,1)];if((Q5v.p1T(cy,y)&&Q5v.Y1T(cy,py))||(Q5v.G1T(cy,y)&&Q5v.J1T(cy,py))){series.highlight=true;this.anyHighlighted=true;}
}
}
}
}
}
for(n in this.overlays){o=this.overlays[n];if(o.highlight){this.anyHighlighted=true;stickyArgs=[o.inputs.display?o.inputs.display:o.name,null,null,o.permanent,"study"];drawingToMeasure=null;}
if(Q5v.V1T(o.prev,o.highlight))somethingChanged=true;}
for(n in chart.seriesRenderers){var r2=chart.seriesRenderers[n];if(!r2.params.highlightable)continue;for(var m2=0;Q5v.r1T(m2,r2.seriesParams.length);m2++){series=r2.seriesParams[m2];if(series.highlight){this.anyHighlighted=true;stickyArgs=[series.display,series.color,false,series.permanent,"series"];drawingToMeasure=null;}
if(Q5v.c1T(series.prev,series.highlight))somethingChanged=true;}
}
if(somethingChanged){this.draw();this.displaySticky.apply(this,stickyArgs);this.clearMeasure();if(drawingToMeasure)drawingToMeasure.measure();}
if(!this.anyHighlighted){this.setMeasure();}
}
;STXChart.prototype.positionSticky=function(m){var top=Math.max(Q5v.b1T(this.cy,m.offsetHeight,t25),Q5v.E42),right=Math.min(Q5v.x1T(this.chart.canvasWidth,(this.cx-r25)),Q5v.X3T(this.chart.canvasWidth,m.offsetWidth));m.style.top=top+c75;m.style.right=right+(c75);}
;STXChart.prototype.displaySticky=function(message,backgroundColor,forceShow,noDelete,type){var q85="rightclick_",m=this.controls.mSticky;if(!m)return ;var mi=m.children[Q5v.E42];if(!mi)return ;var overlayTrashCan=m.children[Q5v.R42].children[Q5v.E42],mouseDeleteInstructions=m.children[Q5v.R42].children[Q5v.R42];if(!forceShow&&!message){mi.innerHTML=P05;m.style.display=(s45+E45+s45+d82);if(STX.touchDevice&&overlayTrashCan){overlayTrashCan.style.display=(s45+E45+b25);}
else if(!STX.touchDevice&&mouseDeleteInstructions){mouseDeleteInstructions.style.display=e85;}
}
else{if(!message)message=P05;if(forceShow&&!message){mi.style.backgroundColor=P05;mi.style.color=P05;mi.style.display=e85;}
else if(backgroundColor){mi.style.backgroundColor=backgroundColor;mi.style.color=STX.chooseForegroundColor(backgroundColor);mi.style.display=s82;}
else{mi.style.backgroundColor=P05;mi.style.color=P05;mi.style.display=s82;}
mi.innerHTML=message;if(type)m.children[Q5v.R42].className=q85+type;m.style.display=s82;this.positionSticky(m);if(noDelete){overlayTrashCan.style.display=e85;mouseDeleteInstructions.style.display=e85;}
else if(STX.touchDevice&&overlayTrashCan){overlayTrashCan.style.display=s82;mouseDeleteInstructions.style.display=e85;}
else if(!STX.touchDevice&&mouseDeleteInstructions){mouseDeleteInstructions.style.display=Z72;}
}
}
;STXChart.prototype.setMeasure=function(price1,price2,tick1,tick2,hover){var j05="setMea",D42="oc",U82="lin",A95="measureLit",Y72="Bars",G05="nl",q65="reU",c82="su",j75="mea",J65="setMeasure";if(this.runPrepend(J65,arguments))return ;var m=$$(W25),message=P05;if(!price1){if(m&&Q5v.o3T(m.className,E52))m.className=(j75+c82+q65+G05+o85);if(!this.anyHighlighted&&Q5v.k3T(this.currentVectorParameters.vectorType,P05))this.clearMeasure();}
else{var distance=Q5v.F3T(Math.round(Math.abs(price1-price2)*this.chart.roundit),this.chart.roundit);if(this.internationalizer){message+=this.internationalizer.numbers.format(distance);}
else{message+=distance;}
var pct=Q5v.E3T((price2-price1),price1);if(Q5v.S3T(Math.abs(pct),C52)){pct=Math.round(Q5v.D3T(pct,V85));}
else if(Q5v.g3T(Math.abs(pct),A42)){pct=Q5v.p3T(Math.round(pct*h85),Q75);}
else{pct=Q5v.Y3T(Math.round(pct*T85),V85);}
if(this.internationalizer){pct=this.internationalizer.percent.format(Q5v.G3T(pct,V85));}
else{pct=pct+F15;}
message+=f72+pct+o35;var ticks=Math.abs(Q5v.J3T(tick2,tick1));ticks=Math.round(ticks)+Q5v.R42;var barsStr=Y72;if(this.translationCallback)barsStr=this.translationCallback(barsStr);message+=n82+ticks+n82+barsStr;if(m){if(Q5v.V3T(m.className,A95))m.className=A95;m.innerHTML=message;}
}
if(this.activeDrawing)return ;m=this.controls.mSticky;if(m){if(hover){m.style.display=(c55+U82+d82+y95+H22+Q5v.D45+D42+Q5v.m15);m.children[Q5v.E42].style.display=s82;if(price1){m.children[Q5v.E42].innerHTML=message;}
this.positionSticky(m);}
else{m.style.display=e85;m.children[Q5v.E42].innerHTML=P05;}
}
this.runAppend((j05+S95+Q5v.a05+m95+d82),arguments);}
;STXChart.prototype.clearMeasure=function(){var m=$$(W25);if(m){if(Q5v.r3T(m.className,E52))m.className=E52;m.innerHTML=P05;}
}
;STXChart.prototype.drawTemporaryPanel=function(){var j85="rag",t82="l_d",borderEdge=Math.round(Q5v.c3T(STXChart.resizingPanel.right,Q5v.k42))+S52;STX.clearCanvas(this.chart.tempCanvas,this);var y=Q5v.b3T(STXChart.crosshairY,this.top);this.plotLine(STXChart.resizingPanel.left,borderEdge,y,y,this.canvasStyle((S95+Z25+V42+c92+d82+t82+j85)),p12,this.chart.tempCanvas.context,v85,{}
);STXChart.resizingPanel.handle.style.top=(Q5v.K3T(y,STXChart.resizingPanel.handle.offsetHeight/Q5v.y42))+c75;}
;STXChart.prototype.setTrashCan=function(){if(STX.touchDevice){var m=this.controls.mSticky;if(m){m.style.display=s82;m.children[Q5v.E42].style.display=e85;m.children[Q5v.R42].style.display=s82;if(m.children[Q5v.y42])m.children[Q5v.y42].style.display=e85;m.style.top=(Q5v.v7T(this.backOutY(STXChart.crosshairY),t25))+(c75);m.style.right=Q5v.d7T(this.chart.canvasWidth,(this.backOutX(STXChart.crosshairX)-r25),c75);}
}
}
;STXChart.prototype.pixelFromBar=function(bar,chart){if(!chart)chart=this.chart;var x=Q5v.E42;if(this.chart.dataSegment&&this.chart.dataSegment[bar]&&this.chart.dataSegment[bar].leftOffset){x=this.chart.dataSegment[bar].leftOffset;}
else{x=Q5v.k7T((bar+S52),this.layout.candleWidth);}
x=chart.panel.left+Math.floor(x+this.micropixels)-Q5v.R42;return x;}
;STXChart.prototype.barFromPixel=function(x,chart){if(!chart)chart=this.chart;if(Q5v.F7T(this.layout.chartType,"volume_candle")){var pixel=Q5v.E7T(x,chart.panel.left,this.micropixels),mult=2,bar=Math.round(Q5v.n7T(this.chart.dataSegment.length,mult)),rightofLastTick=this.chart.dataSegment[Q5v.i7T(this.chart.dataSegment.length,1)].leftOffset+Q5v.H7T(this.chart.dataSegment[this.chart.dataSegment.length-1].candleWidth,2);if(Q5v.M7T(pixel,rightofLastTick)){return this.chart.dataSegment.length+Math.floor(Q5v.e7T((x-rightofLastTick-chart.panel.left-this.micropixels),this.layout.candleWidth));}
else{for(var i=1;Q5v.O7T(i,this.chart.dataSegment.length);i++){mult*=2;if(!this.chart.dataSegment[bar])break;var left=Q5v.A7T(this.chart.dataSegment[bar].leftOffset,this.chart.dataSegment[bar].candleWidth/2),right=this.chart.dataSegment[bar].leftOffset+Q5v.q7T(this.chart.dataSegment[bar].candleWidth,2);if(Q5v.U7T(bar,0)||(Q5v.w7T(pixel,left)&&Q5v.f7T(pixel,right)))break;else if(Q5v.x7T(pixel,left))bar-=Math.max(1,Math.round(Q5v.X2T(this.chart.dataSegment.length,mult)));else bar+=Math.max(1,Math.round(Q5v.o2T(this.chart.dataSegment.length,mult)));bar=Math.max(0,Math.min(Q5v.k2T(this.chart.dataSegment.length,1),bar));}
if(!this.chart.dataSegment[bar]){for(i=0;Q5v.F2T(i,this.chart.dataSegment.length);i++){if(!this.chart.dataSegment[i])continue;if(Q5v.E2T(pixel,this.chart.dataSegment[i].leftOffset-this.chart.dataSegment[i].candleWidth/2))return Math.max(0,Q5v.S2T(i,1));else if(Q5v.D2T(pixel,this.chart.dataSegment[i].leftOffset+this.chart.dataSegment[i].candleWidth/2))return i;else if(Q5v.g2T(pixel,this.chart.dataSegment[i].leftOffset+this.chart.dataSegment[i].candleWidth/2))return i+1;}
}
}
return bar;}
else{return Math.floor(Q5v.p2T((x-chart.panel.left-this.micropixels),this.layout.candleWidth));}
}
;STXChart.prototype.tickFromPixel=function(x,chart){if(!chart)chart=this.chart;var tick=Q5v.Y2T(chart.dataSet.length,chart.scroll,1);if(Q5v.O2T(this.layout.chartType,"volume_candle")){tick+=this.barFromPixel(x,chart);}
else{tick+=Math.floor(Q5v.A2T((x-chart.panel.left-this.micropixels),this.layout.candleWidth));}
return tick;}
;STXChart.prototype.pixelFromTick=function(tick,chart){if(!chart)chart=this.chart;var bar=Q5v.q2T(tick,chart.dataSet.length,chart.scroll,1);if(this.chart.dataSegment&&this.chart.dataSegment[bar]&&this.chart.dataSegment[bar].leftOffset){return chart.panel.left+Math.floor(this.chart.dataSegment[bar].leftOffset+this.micropixels)-1;}
else{var rightOffset=0,dsTicks=0;if(this.chart.dataSegment&&this.chart.dataSegment[Q5v.c2T(this.chart.dataSegment.length,1)]&&this.chart.dataSegment[Q5v.b2T(this.chart.dataSegment.length,1)].leftOffset){if(Q5v.K2T(this.chart.dataSegment.length,tick-chart.dataSet.length+chart.scroll)){rightOffset=Q5v.v8T(this.chart.dataSegment[this.chart.dataSegment.length-1].leftOffset,this.chart.dataSegment[this.chart.dataSegment.length-1].candleWidth/2);dsTicks=this.chart.dataSegment.length;}
}
return rightOffset+chart.panel.left+Math.floor(Q5v.d8T((tick-dsTicks-chart.dataSet.length+chart.scroll-0.5),this.layout.candleWidth)+this.micropixels)-1;}
}
;STXChart.prototype.pixelFromDate=function(date,chart){return this.pixelFromTick(this.tickFromDate(date,chart),chart);}
;STXChart.prototype.priceFromPixel=function(y,panel,yAxis){if(!panel)panel=this.chart.panel;var chart=panel.chart,yax=yAxis?yAxis:panel.yAxis;y=Q5v.Z8T(yax.bottom,y);var price=yax.low+(Q5v.y8T(y,yax.multiplier));if(yax.semiLog){var logPrice=yax.logLow+(Q5v.R8T(y,yax.logShadow,yax.height));price=Math.pow(10,logPrice);}
return price;}
;STXChart.prototype.valueFromPixel=function(y,panel,yAxis){if(!panel)panel=this.whichPanel(y);var p=this.priceFromPixel(y,panel,yAxis);return p;}
;STXChart.prototype.valueFromPixelUntransform=function(y,panel,yAxis){if(!panel)panel=this.whichPanel(y);if(!panel){if(Q5v.S8T(y,Q5v.E42)){panel=this.panels[STX.first(this.panels)];}
else{panel=this.panels[STX.last(this.panels)];}
}
var p=this.priceFromPixel(y,panel,yAxis);if(panel.chart.untransformFunc&&Q5v.D8T(panel.name,panel.chart.name)){p=panel.chart.untransformFunc(this,panel.chart,p);}
return p;}
;STXChart.prototype.pixelFromPriceTransform=function(price,panel,yAxis){if(panel.chart.transformFunc)price=panel.chart.transformFunc(this,panel.chart,price,yAxis);return this.pixelFromPrice(price,panel,yAxis);}
;STXChart.prototype.pixelFromPrice=function(price,panel,yAxis){if(!panel)panel=this.chart.panel;var yax=yAxis?yAxis:panel.yAxis,y=Q5v.g8T((yax.high-price),yax.multiplier);if(yax.semiLog){var p=Math.max(price,0),logPrice=Q5v.p8T(Math.log(p),Math.LN10),height=yax.height;y=Q5v.Y8T(height,height*(logPrice-yax.logLow)/yax.logShadow);}
y+=yax.top;return y;}
;STXChart.prototype.pixelFromValueAdjusted=function(panel,tick,value,yAxis){if(this.layout.adj||!this.charts[panel.name])return this.pixelFromPriceTransform(value,panel,yAxis);var a=Math.round(tick),ratio;if(Q5v.G8T(a,0)&&Q5v.J8T(a,panel.chart.dataSet.length)&&(ratio=panel.chart.dataSet[a].ratio)){return this.pixelFromPriceTransform(Q5v.V8T(value,ratio),panel,yAxis);}
return this.pixelFromPriceTransform(value,panel,yAxis);}
;STXChart.prototype.adjustIfNecessary=function(panel,tick,value){if(this.layout.adj)return value;if(!panel||!this.charts[panel.name])return value;var a=Math.round(tick),ratio;if(Q5v.r8T(a,0)&&Q5v.c8T(a,panel.chart.dataSet.length)&&(ratio=panel.chart.dataSet[a].ratio)){return Q5v.b8T(value,ratio);}
return value;}
;STXChart.prototype.setTransform=function(chart,transformFunction,untransformFunction){chart.transformFunc=transformFunction;chart.untransformFunc=untransformFunction;}
;STXChart.prototype.unsetTransform=function(chart){delete  chart.transformFunc;delete  chart.untransformFunc;for(var i=0;Q5v.K8T(i,chart.dataSet.length);i++){chart.dataSet[i].transform=null;}
}
;STXChart.prototype.undo=function(){var B05="undo";if(this.runPrepend(B05,arguments))return ;if(this.activeDrawing){this.activeDrawing.abort();this.activeDrawing=Q5v.s15;STX.clearCanvas(this.chart.tempCanvas,this);this.draw();STX.swapClassName(this.controls.crossX,c72,i22);STX.swapClassName(this.controls.crossY,c72,i22);STXChart.drawingLine=v85;}
this.runAppend(B05,arguments);}
;STXChart.prototype.undoStamp=function(){this.undoStamps.push(STX.shallowClone(this.drawingObjects));}
;STXChart.prototype.undoLast=function(){if(this.activeDrawing){this.undo();}
else{if(this.undoStamps.length){this.drawingObjects=this.undoStamps.pop();this.changeOccurred("vector");this.draw();}
}
}
;STXChart.prototype.addDrawing=function(drawing){this.undoStamp();this.drawingObjects.push(drawing);}
;STXChart.prototype.plotLine=function(x0,x1,y0,y1,color,type,context,confineToPanel,parameters){if(!parameters)parameters={}
;if(Q5v.v5T(parameters.pattern,"none"))return ;if(Q5v.d5T(confineToPanel,true))confineToPanel=this.chart.panel;if(Q5v.Z5T(context,null)||typeof (context)=="undefined")context=this.chart.context;if(isNaN(x0)||isNaN(x1)||isNaN(y0)||isNaN(y1)){return ;}
var edgeTop=0,edgeBottom=this.chart.canvasHeight,edgeLeft=0,edgeRight=this.right;if(confineToPanel){edgeBottom=confineToPanel.yAxis.bottom;edgeTop=confineToPanel.yAxis.top;edgeLeft=confineToPanel.left;edgeRight=confineToPanel.right;}
var bigX,bigY,v;if(Q5v.y5T(type,"ray")){bigX=10000000;if(Q5v.R5T(x1,x0))bigX=-10000000;v={"x0":x0,"x1":x1,"y0":y0,"y1":y1}
;bigY=STX.yIntersection(v,bigX);x1=bigX;y1=bigY;}
if(Q5v.L5T(type,"line")||Q5v.h5T(type,"horizontal")||Q5v.C5T(type,"vertical")){bigX=10000000;var littleX=-10000000;v={"x0":x0,"x1":x1,"y0":y0,"y1":y1}
;bigY=STX.yIntersection(v,bigX);var littleY=STX.yIntersection(v,littleX);x0=littleX;x1=bigX;y0=littleY;y1=bigY;}
var t0=0.0,t1=1.0,xdelta=Q5v.W5T(x1,x0),ydelta=Q5v.t5T(y1,y0),p,q,r;for(var edge=0;Q5v.P5T(edge,4);edge++){if(Q5v.Q5T(edge,0)){p=-xdelta;q=-(Q5v.z5T(edgeLeft,x0));}
if(Q5v.a5T(edge,1)){p=xdelta;q=(Q5v.j5T(edgeRight,x0));}
if(Q5v.B5T(edge,2)){p=-ydelta;q=-(Q5v.I5T(edgeTop,y0));}
if(Q5v.u5T(edge,3)){p=ydelta;q=(Q5v.s6F(edgeBottom,y0));}
r=Q5v.m6F(q,p);if((y1||Q5v.N6F(y1,0))&&Q5v.T6F(p,0)&&Q5v.l6F(q,0)){return false;}
if(Q5v.n6F(p,0)){if(Q5v.i6F(r,t1))return false;else if(Q5v.H6F(r,t0))t0=r;}
else if(Q5v.M6F(p,0)){if(Q5v.e6F(r,t0))return false;else if(Q5v.O6F(r,t1))t1=r;}
}
var x0clip=x0+Q5v.A6F(t0,xdelta),y0clip=y0+Q5v.q6F(t0,ydelta),x1clip=x0+Q5v.U6F(t1,xdelta),y1clip=y0+Q5v.w6F(t1,ydelta);if(!y1&&Q5v.f6F(y1,0)&&!y0&&Q5v.x6F(y0,0)){y0clip=edgeTop;y1clip=edgeBottom;x0clip=v.x0;x1clip=v.x0;if(Q5v.X0F(v.x0,edgeRight))return false;if(Q5v.o0F(v.x0,edgeLeft))return false;}
else if(!y1&&Q5v.k0F(y1,0)){if(Q5v.F0F(v.y0,v.y1))y1clip=edgeBottom;else y1clip=edgeTop;x0clip=v.x0;x1clip=v.x0;if(Q5v.E0F(v.x0,edgeRight))return false;if(Q5v.S0F(v.x0,edgeLeft))return false;}
context.lineWidth=1.1;if(typeof (color)=="object"){context.strokeStyle=color.color;if(color.opacity)context.globalAlpha=color.opacity;else context.globalAlpha=1;context.lineWidth=parseInt(STX.stripPX(color.width));}
else{if(!color||Q5v.D0F(color,"auto")||STX.isTransparent(color)){context.strokeStyle=this.defaultColor;}
else{context.strokeStyle=color;}
}
if(parameters.opacity)context.globalAlpha=parameters.opacity;if(parameters.lineWidth)context.lineWidth=parameters.lineWidth;if(Q5v.g0F(type,"zig zag"))context.lineWidth=5;var pattern=null;if(parameters.pattern){pattern=parameters.pattern;if(Q5v.p0F(pattern,"solid")){pattern=null;}
else if(Q5v.Y0F(pattern,"dotted")){pattern=[context.lineWidth,context.lineWidth];}
else if(Q5v.G0F(pattern,"dashed")){pattern=[Q5v.J0F(context.lineWidth,5),Q5v.V0F(context.lineWidth,5)];}
}
context.stxLine(x0clip,y0clip,x1clip,y1clip,context.strokeStyle,context.globalAlpha,context.lineWidth,pattern);context.globalAlpha=1;context.lineWidth=1;}
;STXChart.prototype.connectTheDots=function(points,color,type,context,confineToPanel,parameters){var j95="ec";if(!parameters)parameters={}
;if(Q5v.r0F(parameters.pattern,"none"))return ;if(Q5v.c0F(confineToPanel,true))confineToPanel=this.chart.panel;if(Q5v.b0F(context,null)||typeof (context)=="undefined")context=this.chart.context;if(Q5v.K0F(points.length,4))return ;var edgeTop=0,edgeBottom=this.chart.canvasHeight,edgeLeft=0,edgeRight=this.chart.width;if(confineToPanel){edgeBottom=confineToPanel.yAxis.bottom;edgeTop=confineToPanel.yAxis.top;}
context.lineWidth=1.1;if(typeof (color)==(E45+H22+Q5v.c45+j95+Q5v.V05)){context.strokeStyle=color.color;if(color.opacity)context.globalAlpha=color.opacity;else context.globalAlpha=1;context.lineWidth=parseInt(STX.stripPX(color.width));}
else{if(!color||Q5v.v9F(color,"auto")||STX.isTransparent(color)){context.strokeStyle=this.defaultColor;}
else{context.strokeStyle=color;}
}
if(parameters.opacity)context.globalAlpha=parameters.opacity;if(parameters.lineWidth)context.lineWidth=parameters.lineWidth;var pattern=null;if(parameters.pattern){pattern=parameters.pattern;if(Q5v.d9F(pattern,(S95+E45+Q5v.D45+A15+U22))){pattern=null;}
else if(Q5v.Z9F(pattern,"dotted")){pattern=[context.lineWidth,context.lineWidth];}
else if(Q5v.y9F(pattern,(U22+O22+S95+Q5v.g15+Q52))){pattern=[Q5v.R9F(context.lineWidth,5),Q5v.L9F(context.lineWidth,5)];}
}
context.beginPath();for(var i=0;Q5v.h9F(i,points.length-2);i+=2){var x0=points[i],y0=points[i+1],x1=points[i+2],y1=points[i+3];if(isNaN(x0)||isNaN(x1)||isNaN(y0)||isNaN(y1))return ;var t0=0.0,t1=1.0,xdelta=Q5v.C9F(x1,x0),ydelta=Q5v.W9F(y1,y0),p,q,r;for(var edge=0;Q5v.t9F(edge,4);edge++){if(Q5v.P9F(edge,0)){p=-xdelta;q=-(Q5v.Q9F(edgeLeft,x0));}
if(Q5v.z9F(edge,1)){p=xdelta;q=(Q5v.a9F(edgeRight,x0));}
if(Q5v.j9F(edge,2)){p=-ydelta;q=-(Q5v.B9F(edgeTop,y0));}
if(Q5v.I9F(edge,3)){p=ydelta;q=(Q5v.u9F(edgeBottom,y0));}
r=Q5v.s4F(q,p);if((y1||Q5v.m4F(y1,0))&&Q5v.N4F(p,0)&&Q5v.T4F(q,0)){return false;}
if(Q5v.l4F(p,0)){if(Q5v.n4F(r,t1))return false;else if(Q5v.i4F(r,t0))t0=r;}
else if(Q5v.H4F(p,0)){if(Q5v.M4F(r,t0))return false;else if(Q5v.e4F(r,t1))t1=r;}
}
var x0clip=x0+Q5v.O4F(t0,xdelta),y0clip=y0+Q5v.A4F(t0,ydelta),x1clip=x0+Q5v.q4F(t1,xdelta),y1clip=y0+Q5v.U4F(t1,ydelta);try{if(pattern){context.dashedLineTo(x0clip,y0clip,x1clip,y1clip,pattern);}
else{context.moveTo(x0clip,y0clip);context.lineTo(x1clip,y1clip);}
}
catch(e){}
}
context.stroke();context.closePath();context.globalAlpha=1;context.lineWidth=1;}
;STXChart.prototype.plotSpline=function(points,tension,color,type,context,confineToPanel,parameters){var k35="ined",b45="ndef";if(!parameters)parameters={}
;if(Q5v.w4F(parameters.pattern,"none"))return ;if(Q5v.f4F(confineToPanel,true))confineToPanel=this.chart.panel;if(Q5v.x4F(context,null)||typeof (context)==(Q5v.a05+b45+k35))context=this.chart.context;context.save();context.lineWidth=1.1;if(typeof (color)=="object"){context.strokeStyle=color.color;if(color.opacity)context.globalAlpha=color.opacity;else context.globalAlpha=1;context.lineWidth=parseInt(STX.stripPX(color.width));}
else{if(!color||Q5v.X1F(color,"auto")||STX.isTransparent(color)){context.strokeStyle=this.defaultColor;}
else{context.strokeStyle=color;}
}
if(parameters.opacity)context.globalAlpha=parameters.opacity;if(parameters.lineWidth)context.lineWidth=parameters.lineWidth;var pattern=null;if(parameters.pattern){pattern=parameters.pattern;if(Q5v.o1F(pattern,"solid")){pattern=null;}
else if(Q5v.k1F(pattern,"dotted")){pattern=[context.lineWidth,context.lineWidth];}
else if(Q5v.F1F(pattern,"dashed")){pattern=[Q5v.E1F(context.lineWidth,5),Q5v.S1F(context.lineWidth,5)];}
}
if(pattern&&context.setLineDash){context.setLineDash(pattern);context.lineDashOffset=0;}
plotSpline(points,tension,context);context.restore();}
;STXChart.prototype.drawingClick=function(panel,x,y){var U85="ir",a42="ros";if(!this.activeDrawing){if(!panel)return ;var Factory=STXChart.drawingTools[this.currentVectorParameters.vectorType];if(!Factory){if(STX.Drawing[this.currentVectorParameters.vectorType]){Factory=STX.Drawing[this.currentVectorParameters.vectorType];STXChart.registerDrawingTool(this.currentVectorParameters.vectorType,Factory);}
}
if(Factory){this.activeDrawing=new Factory();this.activeDrawing.construct(this,panel);if(!this.charts[panel.name]){if(this.activeDrawing.chartsOnly){this.activeDrawing=Q5v.s15;return ;}
}
}
}
if(this.activeDrawing){if(this.userPointerDown&&!this.activeDrawing.dragToDraw){if(!STXChart.drawingLine)this.activeDrawing=Q5v.s15;return ;}
var tick=this.tickFromPixel(x,panel.chart),dpanel=this.panels[this.activeDrawing.panelName],value=this.adjustIfNecessary(dpanel,tick,this.valueFromPixelUntransform(y,dpanel));if(this.preferences.magnet&&this.magnetizedPrice){value=this.adjustIfNecessary(dpanel,tick,this.magnetizedPrice);}
if(this.activeDrawing.click(this.chart.tempCanvas.context,tick,value)){if(this.activeDrawing){STXChart.drawingLine=v85;STX.clearCanvas(this.chart.tempCanvas,this);this.addDrawing(this.activeDrawing);this.activeDrawing=Q5v.s15;this.adjustDrawings();this.draw();this.changeOccurred(c32);STX.swapClassName(this.controls.crossX,c72,i22);STX.swapClassName(this.controls.crossY,(S95+Z25+R05+a42+S95+i15+U85),i22);}
}
else{this.changeOccurred(L22);STXChart.drawingLine=k15;STX.swapClassName(this.controls.crossX,i22,c72);STX.swapClassName(this.controls.crossY,i22,c72);}
return k15;}
return v85;}
;STXChart.prototype.whichPanel=function(y){for(var p in this.panels){var panel=this.panels[p];if(panel.hidden)continue;if(Q5v.D1F(y,panel.top)&&Q5v.g1F(y,panel.bottom))return panel;}
return Q5v.s15;}
;STXChart.prototype.mouseup=function(e){if(this.runPrepend(O25,arguments))return ;if(this.repositioningDrawing){if(!this.currentVectorParameters.vectorType||(Q5v.p1F(Date.now()-this.mouseTimer,r55))){this.changeOccurred(c32);STX.clearCanvas(this.chart.tempCanvas,this);this.repositioningDrawing=Q5v.s15;this.adjustDrawings();this.draw();return ;}
else{this.repositioningDrawing=v85;}
}
if(this.repositioningBaseline){this.repositioningBaseline=Q5v.s15;this.chart.panel.yAxis.scroll=Q5v.Y1F(this.pixelFromPriceTransform(this.chart.baseline.userLevel,this.chart.panel),(this.chart.panel.yAxis.top+this.chart.panel.yAxis.bottom)/Q5v.y42);this.draw();return ;}
var wasMouseDown=this.userPointerDown;this.userPointerDown=v85;if(!this.displayInitialized)return ;this.grabbingScreen=v85;if(Q5v.G1F(this.openDialog,P05)){if(STXChart.insideChart)STX.unappendClassName(this.container,a82);return ;}
if(this.grabOverrideClick){STX.unappendClassName(this.container,a82);this.grabOverrideClick=v85;return ;}
if(STXChart.insideChart)STX.unappendClassName(this.container,a82);if(STXChart.resizingPanel){STX.clearCanvas(this.chart.tempCanvas,this);this.resizePanels();STXChart.resizingPanel=Q5v.s15;return ;}
if(!e)e=event;if((e.which&&Q5v.J1F(e.which,Q5v.y42))||(e.button&&Q5v.V1F(e.button,Q5v.y42))){if(this.anyHighlighted){this.rightClickHighlighted();if(e.preventDefault)e.preventDefault();e.stopPropagation();return v85;}
else{return k15;}
}
if(Q5v.r1F(e.clientX,this.left)||Q5v.c1F(e.clientX,this.right))return ;if(Q5v.b1F(e.clientY,this.top)||Q5v.K1F(e.clientY,this.bottom))return ;var cy=this.backOutY(e.clientY),cx=this.backOutX(e.clientX);if(wasMouseDown){this.drawingClick(this.currentPanel,cx,cy);}
if(!this.activeDrawing){if(this.callbacks.tap){(this.callbacks.tap)({stx:this,panel:this.currentPanel,x:cx,y:cy}
);}
}
this.runAppend(O25,arguments);}
;STXChart.prototype.grabbingHand=function(){if(!this.allowScroll)return ;if(!this.grabbingScreen)return ;if(STX.touchDevice)return ;STX.appendClassName(this.container,a82);}
;STXChart.prototype.mousedown=function(e){if(this.runPrepend("mousedown",arguments))return ;this.grabOverrideClick=false;if(Q5v.v3F(this.openDialog,""))return ;if(!this.displayInitialized)return ;if(!this.displayCrosshairs)return ;if(!STXChart.insideChart)return ;if(this.manageTouchAndMouse&&e&&e.preventDefault)e.preventDefault();this.mouseTimer=Date.now();this.userPointerDown=true;if(!e)e=event;if((e.which&&Q5v.d3F(e.which,2))||(e.button&&Q5v.Z3F(e.button,2))){return ;}
for(var p in this.panels){var panel=this.panels[p];if(panel.highlighted){STXChart.resizingPanel=panel;return ;}
}
var chart=this.currentPanel.chart;if(Q5v.y3F(e.clientX,this.left)&&Q5v.R3F(e.clientX,this.right)&&Q5v.L3F(e.clientY,this.top)&&Q5v.h3F(e.clientY,this.bottom)){if(this.repositioningDrawing)return ;for(var i=0;Q5v.C3F(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];if(drawing.highlighted){if(this.ctrl){var Factory=STXChart.drawingTools[drawing.name],clonedDrawing=new Factory();clonedDrawing.reconstruct(this,drawing.serialize());this.drawingObjects.push(clonedDrawing);this.repositioningDrawing=clonedDrawing;clonedDrawing.repositioner=drawing.repositioner;return ;}
this.repositioningDrawing=drawing;return ;}
}
if(Q5v.W3F(this.layout.chartType,"baseline_delta")&&Q5v.t3F(chart.baseline.userLevel,false)){var y0=this.valueFromPixelUntransform(Q5v.P3F(this.cy,5),this.currentPanel),y1=this.valueFromPixelUntransform(this.cy+5,this.currentPanel),x0=Q5v.Q3F(this.chart.right,parseInt(getComputedStyle(this.controls.baselineHandle).width,10));if(Q5v.z3F(chart.baseline.actualLevel,y0)&&Q5v.a3F(chart.baseline.actualLevel,y1)&&Q5v.j3F(this.cx,x0)){this.repositioningBaseline={lastDraw:Date.now()}
;return ;}
}
this.drawingClick(this.currentPanel,this.cx,this.cy);if(this.activeDrawing&&this.activeDrawing.dragToDraw)return ;}
this.grabbingScreen=true;this.yToleranceBroken=false;if(!e)e=event;this.grabStartX=e.clientX;this.grabStartY=e.clientY;this.grabStartScrollX=chart.scroll;this.grabStartScrollY=chart.panel.yAxis.scroll;this.grabStartCandleWidth=this.layout.candleWidth;this.grabStartZoom=this.whichYAxis(this.currentPanel).zoom;setTimeout((function(self){return function(){self.grabbingHand();}
;}
)(this),100);this.runAppend("mousedown",arguments);}
;STXChart.prototype.changeVectorType=function(value){this.currentVectorParameters.vectorType=value;if(STXChart.drawingLine)this.undo();this.setCrosshairColors();if(STXChart.insideChart)this.doDisplayCrosshairs();}
;STXChart.prototype.rightClickOverlay=function(name){var b05="rightClickOverlay";if(this.runPrepend(b05,arguments))return ;var sd=this.overlays[name];if(sd.editFunction){sd.editFunction();}
else{this.removeOverlay(name);}
this.runAppend(b05,arguments);}
;STXChart.prototype.removeOverlay=function(name){var z65="removeOverlay";if(this.runPrepend(z65,arguments))return ;var mySD;for(var o in this.overlays){var sd=this.overlays[o];if(sd.inputs.Field&&sd.inputs.Field.indexOf(name)!=-Q5v.R42){this.removeOverlay(sd.name);}
else if(Q5v.B3F(sd.name,name)){mySD=sd;}
}
var study=this.layout.studies[name];STX.deleteRHS(STX.Studies.studyPanelMap,study);if(mySD)this.cleanupRemovedStudy(mySD);delete  this.overlays[name];this.displaySticky();this.createDataSet();this.changeOccurred(r42);this.runAppend(z65,arguments);}
;STXChart.prototype.addSeries=function(field,parameters,cb){if(this.runPrepend("addSeries",arguments))return ;if(!parameters)parameters={}
;if(!parameters.chartName)parameters.chartName=this.chart.name;var obj={parameters:STX.clone(parameters),yValueCache:[],display:field}
;if(Q5v.I3F("display",obj.parameters))obj.display=obj.parameters.display;if(obj.parameters.isComparison)obj.parameters.shareYAxis=true;if(!obj.parameters.chartType&&obj.parameters.color)obj.parameters.chartType="line";if(obj.parameters.chartType&&Q5v.u3F(obj.parameters.chartType,"mountain"))obj.parameters.chartType="line";if(!obj.parameters.panel)obj.parameters.panel=this.chart.panel.name;var chart=this.charts[parameters.chartName],self=this;function addSeriesData(stx){var mIterator=0,cIterator=0;while(parameters.data&&Q5v.s7F(mIterator,stx.masterData.length)&&Q5v.m7F(cIterator,parameters.data.length)){var c=parameters.data[cIterator],m=stx.masterData[mIterator];if(!c.DT||typeof c.DT=="undefined")c.DT=STX.strToDateTime(c.Date);if(Q5v.N7F(c.DT.getTime(),m.DT.getTime())){if(typeof c.Value!="undefined"){m[field]=c.Value;}
else if(stx.layout.adj&&typeof c.Adj_Close!=(Q5v.a05+s45+U22+p52+A15+q52)){m[field]=c.Adj_Close;}
else{m[field]=c.Close;}
cIterator++;mIterator++;continue;}
if(Q5v.T7F(c.DT,m.DT))cIterator++;else mIterator++;}
}
function setUpRenderer(stx,obj){if(obj.parameters.color){var r=stx.getSeriesRenderer("_generic_series");if(!r){r=stx.setSeriesRenderer(new STX.Renderer.Lines({params:{panel:obj.parameters.panel,type:"legacy",name:"_generic_series",overChart:true}
,}
));}
r.attachSeries(field,obj.parameters).ready();}
}
if(chart){chart.series[field]=obj;}
if(parameters.isComparison){self.setComparison(true,chart);}
var doneInCallback=false;if(parameters.data){if(parameters.data.useDefaultQuoteFeed){var driver=this.quoteDriver,fetchParams=driver.makeParams(field,this.chart);fetchParams.startDate=this.chart.masterData[0].DT;fetchParams.endDate=this.chart.masterData[Q5v.l7F(this.chart.masterData.length,1)].DT;if(parameters.symbolObject)fetchParams.symbolObject=parameters.symbolObject;doneInCallback=true;driver.quoteFeed.fetch(fetchParams,function(dataCallback){if(!dataCallback.error){parameters.data=dataCallback.quotes;addSeriesData(self);setUpRenderer(self,obj);}
if(cb)cb(dataCallback.error);self.runAppend("addSeries",arguments);}
);}
else if(this.masterData){addSeriesData(this);}
}
else{obj.addSeriesData=addSeriesData;}
if(!doneInCallback){setUpRenderer(self,obj);if(cb)cb();this.runAppend("addSeries",arguments);}
return obj;}
;STXChart.prototype.removeSeries=function(field,chart){if(this.runPrepend("removeSeries",arguments))return ;if(!chart)chart=this.chart;delete  chart.series[field];var compare=false;for(var s in chart.series){if(chart.series[s].parameters.isComparison){compare=true;break;}
}
this.setComparison(compare,chart);for(var panel in this.panels){if(Q5v.n7F(this.panels[panel].name.indexOf(STX.Comparison.correlationPanel),0)){var compareArray=this.layout.studies[this.panels[panel].name].inputs["Compare To"];for(var i=0;Q5v.i7F(i,compareArray.length);i++){if(Q5v.H7F(compareArray[i],field))compareArray.splice(i,1);}
delete  this.layout.studies[this.panels[panel].name].outputs["Result "+field];delete  this.layout.studies[this.panels[panel].name].outputMap["Result "+field+" "+this.panels[panel].name];if(!compareArray.length)this.panelClose(this.panels[panel]);}
}
this.runAppend("removeSeries",arguments);}
;STXChart.prototype.rendererAction=function(chart,phase){var g95="rendererAction";if(this.runPrepend(g95,arguments))return ;for(var id in chart.seriesRenderers){var renderer=chart.seriesRenderers[id];if(renderer.params.overChart&&Q5v.M7F(phase,z72))continue;if(!renderer.params.overChart&&Q5v.e7F(phase,(E45+Q5v.s6f+S82+i32)))continue;if(!this.panels[renderer.params.panel])continue;if(Q5v.O7F(this.panels[renderer.params.panel].chart,chart))continue;if(Q5v.A7F(phase,g72)){renderer.performCalculations();}
else{renderer.draw();if(renderer.cb)renderer.cb(renderer.colors);}
}
this.runAppend(g95,arguments);}
;STXChart.prototype.drawSeries=function(chart,seriesArray,yAxis){var Z22="gap",j42="ap",F12="ie",e45="wS",y25="dra";if(this.runPrepend((y25+e45+d82+m95+F12+S95),arguments))return ;var quotes=chart.dataSegment,legendColorMap={}
,series=null;if(!seriesArray)seriesArray=chart.series;for(var field in seriesArray){series=seriesArray[field];var parameters=series.parameters;if(!parameters.chartType)continue;var panel=chart.panel;if(parameters.panel)panel=this.panels[parameters.panel];if(!panel)continue;var yax=yAxis?yAxis:panel.yAxis,minMax=[parameters.minimum,parameters.maximum];if((!parameters.minimum&&Q5v.q7F(parameters.minimum,0))||(!parameters.maximum&&Q5v.U7F(parameters.maximum,0))){var minMaxCalc=STX.minMax(quotes,field);if(!parameters.minimum&&Q5v.w7F(parameters.minimum,0))minMax[0]=minMaxCalc[0];if(!parameters.maximum&&Q5v.f7F(parameters.maximum,0))minMax[1]=minMaxCalc[1];}
var min=minMax[0],top=yax.top,bottom=yax.bottom,height=Q5v.x7F(bottom,top),t=parameters.marginTop,b=parameters.marginBottom;if(t)top=Q5v.X2F(t,1)?(top+t):(top+(Q5v.o2F(height,t)));if(b)bottom=Q5v.k2F(b,1)?(Q5v.F2F(bottom,b)):(Q5v.E2F(bottom,(height*b)));var multiplier=Q5v.S2F((bottom-top),(minMax[1]-min)),started=false,lastPoint=null,val=null,x=null,y=null,px=null,py=null,cw=this.layout.candleWidth,context=this.chart.context,isStep=(Q5v.D2F(parameters.type,"step")||Q5v.g2F(parameters.subtype,"step")),color=parameters.color;if(!color)color=this.defaultColor;var width=parameters.width;if(!width||isNaN(width)||Q5v.p2F(width,1))width=1;if(series.highlight||series.parameters.highlight)width*=2;this.startClip(panel.name);seriesPlotter=new STX.Plotter();seriesPlotter.newSeries("line","stroke",color,1,width);if(parameters.gaps&&parameters.gaps.color)seriesPlotter.newSeries("gap","stroke",parameters.gaps.color,1,width);else seriesPlotter.newSeries((s35+O22+t95),"stroke",color,1,width);series.yValueCache=new Array(quotes.length);var yValueCache=series.yValueCache,lastQuote=null,gap=null,points=[],doTransform=series.parameters.shareYAxis&&!yAxis,shareYAxis=series.parameters.shareYAxis||yAxis,xbase=Q5v.Y2F(panel.left,(isStep?1:0.5)*cw,this.micropixels,1),x0=xbase;for(var i=0;Q5v.Q2F(i,quotes.length);i++){xbase+=Q5v.z2F(cw,2);if(isStep)xbase+=Q5v.a2F(cw,2);cw=this.layout.candleWidth;if(!isStep)xbase+=Q5v.j2F(cw,2);if(Q5v.B2F(x,null)&&Q5v.I2F(y,null)){if(!gap||parameters.gaps)points.push([x,y]);}
var quote=quotes[i];if(!quote)continue;if(quote.candleWidth){if(!isStep)xbase+=Q5v.u2F((quote.candleWidth-cw),2);cw=quote.candleWidth;}
if(quote.transform&&doTransform)quote=quote.transform;val=quote[field];if(!val&&Q5v.s8F(val,0)){if(isStep||parameters.gaps){yValueCache[i]=y;}
if(Q5v.m8F(gap,false)){if(isStep){x+=cw;seriesPlotter.lineTo((Q5v.D45+A15+s45+d82),x,y);}
seriesPlotter.moveTo("gap",x,y);}
gap=true;if(x&&!parameters.gaps)points.push([x,bottom]);continue;}
if(!isStep&&lastPoint&&Q5v.N8F(lastPoint,i-1)){px=x;py=y;}
else{px=null;}
x=xbase;if(Q5v.T8F(x,panel.right))lastQuote=quote;if(this.extendLastTick&&Q5v.l8F(i,quotes.length-1)){x+=this.offset;}
if(isStep&&started){if(gap&&parameters.gaps&&parameters.gaps.pattern){seriesPlotter.dashedLineTo("gap",x,y,parameters.gaps.pattern);}
else if(gap&&!parameters.gaps){points.push([x,bottom]);seriesPlotter.moveTo((s35+j42),x,y);}
else if(!gap&&parameters.pattern){seriesPlotter.dashedLineTo((Q5v.D45+A15+b25),x,y,parameters.pattern);}
else{seriesPlotter.lineTo((gap?"gap":"line"),x,y);}
points.push([x,y]);}
if(shareYAxis){y=this.pixelFromPrice(val,panel,yax);}
else{y=Q5v.n8F(bottom,((val-min)*multiplier));}
if(Q5v.i8F(px,null)){var vector={x0:px,x1:x,y0:py,y1:y}
;for(;Q5v.H8F(lastPoint,i);lastPoint++){var xInt=panel.left+Math.floor(xbase+Q5v.M8F(((lastPoint-i)+0.5),cw))+this.micropixels-1,yInt=STX.yIntersection(vector,xInt);yValueCache[lastPoint]=yInt;}
}
yValueCache[i]=y;if(i&&points.length&&started&&!yValueCache[Q5v.e8F(i,1)]&&Q5v.O8F(yValueCache[i-1],0)){for(var bf=Q5v.A8F(i,1);Q5v.q8F(bf,0);bf--){if(yValueCache[bf])break;yValueCache[bf]=points[Q5v.U8F(points.length,1)][1];}
}
if(!started){started=true;var leftTick=Q5v.w8F(chart.dataSet.length,chart.scroll);if(Q5v.f8F(leftTick,0)){seriesPlotter.moveTo((gap?"gap":"line"),x,y);}
else{var baseline=chart.dataSet[leftTick];if(baseline.transform&&doTransform)baseline=baseline.transform;var y0=baseline[field];if(shareYAxis){y0=this.pixelFromPrice(y0,panel,yax);}
else{y0=Q5v.x8F(bottom,((y0-min)*multiplier));}
y0=Math.min(Math.max(y0,top),bottom);if(isNaN(y0)){seriesPlotter.moveTo((gap?"gap":(Q5v.D45+A15+s45+d82)),x,y);}
else{seriesPlotter.moveTo((gap?"gap":"line"),x0,y0);if(isStep){if(gap){if(parameters.gaps)seriesPlotter.lineTo("gap",x,y0);else seriesPlotter.moveTo("gap",x,y0);}
else seriesPlotter.lineTo("line",x,y0);}
if(!gap||parameters.gaps){if(isStep)points.unshift([x,y0]);points.unshift([x0,y0]);}
if(gap&&parameters.gaps&&parameters.gaps.pattern){seriesPlotter.dashedLineTo("gap",x,y,parameters.gaps.pattern);}
else if(gap&&!parameters.gaps){points.unshift([x,bottom]);points.unshift([x0,bottom]);seriesPlotter.moveTo("gap",x,y);}
else if(!gap&&parameters.pattern){seriesPlotter.dashedLineTo("line",x,y,parameters.pattern);}
else{seriesPlotter.lineTo((gap?"gap":(Q5v.D45+A15+b25)),x,y);}
}
}
}
else{if(gap&&parameters.gaps&&parameters.gaps.pattern){seriesPlotter.dashedLineTo("gap",x,y,parameters.gaps.pattern);}
else if(gap&&!parameters.gaps){points.push([x,bottom]);seriesPlotter.moveTo((Z22),x,y);}
else if(!gap&&parameters.pattern){seriesPlotter.dashedLineTo("line",x,y,parameters.pattern);if(isStep&&Q5v.X5F(i,quotes.length-1))seriesPlotter.dashedLineTo("line",x+cw,y,parameters.pattern);}
else{seriesPlotter.lineTo((gap?"gap":"line"),x,y);if(isStep&&Q5v.o5F(i,quotes.length-1)&&!gap)seriesPlotter.lineTo("line",x+cw,y);}
}
lastPoint=i;if(gap)seriesPlotter.moveTo("line",x,y);gap=false;}
if(gap){x=panel.left+Math.floor(xbase+cw+this.micropixels)-1;if(this.extendLastTick)x+=this.offset;if(parameters.gaps&&parameters.gaps.pattern){if(started){seriesPlotter.dashedLineTo("gap",x,y,parameters.gaps.pattern);}
}
else if(parameters.gaps){seriesPlotter.lineTo("gap",x,y);}
}
if(Q5v.k5F(series.parameters.chartType,"mountain")&&points.length){points.push([x,(gap&&!parameters.gaps)?bottom:y]);if(!parameters.fillStyle){parameters.fillStyle=color;if(!parameters.fillOpacity)parameters.fillOpacity=0.3;}
seriesPlotter.newSeries("mountain","fill",parameters.fillStyle,parameters.fillOpacity);for(var pt=0;Q5v.F5F(pt,points.length);pt++){seriesPlotter[pt?"lineTo":"moveTo"]("mountain",points[pt][0],Math.min(bottom,points[pt][1]));}
seriesPlotter.lineTo("mountain",x,bottom);seriesPlotter.lineTo("mountain",points[0][0],bottom);seriesPlotter.draw(context,"mountain");}
seriesPlotter.draw(context,"gap");seriesPlotter.draw(context,(Q95+s45+d82));this.endClip();if(shareYAxis&&lastQuote){if(yax.priceFormatter){txt=yax.priceFormatter(this,panel,lastQuote[field],yax);}
else{txt=this.formatYAxisPrice(lastQuote[field],panel,null,yax);}
this.yAxisLabels.push({src:"series","args":[panel,txt,this.pixelFromPrice(lastQuote[field],panel,yax),color,null,null,yax]}
);}
var display=series.parameters.display;if(!display)display=series.display;legendColorMap[field]={color:color,display:display}
;}
if(chart.legend&&series&&series.useChartLegend){if(chart.legendRenderer)chart.legendRenderer(this,{"chart":chart,"legendColorMap":legendColorMap,"coordinates":{x:chart.legend.x,y:chart.legend.y+chart.panel.yAxis.top}
}
);}
this.runAppend("drawSeries",arguments);}
;STXChart.prototype.isDailyInterval=function(interval){if(Q5v.E5F(interval,K32))return k15;if(Q5v.S5F(interval,j52))return k15;if(Q5v.D5F(interval,z42))return k15;return v85;}
;STXChart.prototype.setPeriodicityV2=function(period,interval,timeUnit,cb){var H35="V2",U12="se",x82="ayo",j55="iver",l22="teD",B82="ac",Z35="llb",D55="aCa",r12="at",b72="ith",Z82="cau",J82="ci",X12="eriodi",C12="ge",K92="nno";if(this.runPrepend("setPeriodicityV2",arguments))return ;if(typeof timeUnit==="function"){cb=timeUnit;timeUnit=null;}
var switchInterval=false;if(interval){if(Q5v.g5F(interval,"year")){interval="month";if(!period)period=1;period=Q5v.p5F(period,12);}
var getDifferentData=false;if(this.chart.symbol){var isDaily=this.isDailyInterval(interval),wasDaily=this.isDailyInterval(this.layout.interval);if(isDaily)timeUnit=null;else if(Q5v.Y5F(interval,"tick"))timeUnit=null;else if(!timeUnit)timeUnit="minute";if(Q5v.G5F(isDaily,wasDaily)||this.dontRoll)getDifferentData=true;if(!wasDaily){if(Q5v.J5F(this.layout.interval,interval))getDifferentData=true;}
if(Q5v.V5F(timeUnit,this.layout.timeUnit))getDifferentData=true;}
if(getDifferentData){this.layout.interval=interval;this.layout.periodicity=period;this.layout.timeUnit=timeUnit;this.changeOccurred("layout");if(this.quoteDriver){for(var c in this.charts){if(this.charts[c].symbol)this.quoteDriver.newChart({symbol:this.charts[c].symbol,chart:this.charts[c]}
,cb);}
return ;}
else if(this.dataCallback){this.dataCallback();if(cb)cb(null);return ;}
else{console.log((o82+O22+K92+Q5v.V05+n82+o82+i15+s45+C12+n82+t95+X12+J82+Q5v.V05+Q5v.o55+n82+H22+d82+Z82+S95+d82+n82+s45+d82+b72+S82+n82+U22+r12+D55+Z35+B82+Q5v.m15+n82+E45+m95+n82+U95+p72+l22+m95+j55+n82+O22+m95+d82+n82+S95+d82+Q5v.V05));return ;}
}
this.layout.interval=interval;}
var chartName,chart;for(chartName in this.charts){chart=this.charts[chartName];var dt,pos=Math.round(Q5v.r5F(chart.maxTicks,2));this.setCandleWidth(this.layout.candleWidth,chart);var centerMe=true,rightAligned=false;if(Q5v.c5F(chart.scroll,chart.maxTicks))centerMe=false;else if(chart.dataSegment&&!chart.dataSegment[pos]){centerMe=false;rightAligned=Q5v.b5F(chart.scroll,chart.dataSet.length);}
if(centerMe&&chart.dataSegment&&Q5v.K5F(chart.dataSegment.length,0)){if(Q5v.v6w(chart.maxTicks,((Math.round((this.chart.width/this.layout.candleWidth)-0.499)-1)/2))){pos=Q5v.d6w(chart.dataSegment.length,1);}
if(Q5v.Z6w(pos,chart.dataSegment.length)){dt=chart.dataSegment[Q5v.y6w(chart.dataSegment.length,1)].DT;pos=Q5v.R6w(chart.dataSegment.length,1);}
else{dt=chart.dataSegment[pos].DT;}
}
this.layout.periodicity=period;this.createDataSet();if(centerMe){if(chart.dataSegment&&Q5v.L6w(chart.dataSegment.length,0)){for(var i=Q5v.h6w(chart.dataSet.length,1);Q5v.C6w(i,0);i--){var nd=chart.dataSet[i].DT;if(Q5v.W6w(nd.getTime(),dt.getTime())){chart.scroll=(Q5v.t6w(chart.dataSet.length,i))+pos;break;}
}
}
}
else if(!rightAligned){var wsInTicks=Math.round(Q5v.P6w(this.preferences.whitespace,this.layout.candleWidth));chart.scroll=Q5v.Q6w(chart.maxTicks,wsInTicks);}
else{chart.scroll=chart.dataSet.length+rightAligned;}
}
if(this.displayInitialized)this.draw();this.changeOccurred((Q5v.D45+x82+Q5v.a05+Q5v.V05));if(this.quoteDriver){for(chartName in this.charts){chart=this.charts[chartName];if(chart.symbol&&chart.moreAvailable){this.quoteDriver.checkLoadMore(chart);}
}
}
if(cb)cb(null);this.runAppend((U12+Q5v.V05+l32+d82+Z45+E45+U22+A15+o82+o85+Q5v.o55+H35),arguments);}
;STXChart.prototype.drawVectors=function(){if(this.vectorsShowing)return ;if(this.runPrepend("drawVectors",arguments))return ;this.vectorsShowing=true;if(!this.chart.hideDrawings){var tmpPanels={}
,panelName,i;for(i=0;Q5v.z6w(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];panelName=drawing.panelName;if(!this.panels[drawing.panelName])continue;if(!tmpPanels[panelName]){tmpPanels[panelName]=[];}
tmpPanels[panelName].push(drawing);}
for(panelName in tmpPanels){this.startClip(panelName);var arr=tmpPanels[panelName];for(i=0;Q5v.a6w(i,arr.length);i++){arr[i].render(this.chart.context);}
this.endClip();}
}
this.runAppend("drawVectors",arguments);}
;STXChart.prototype.consolidatedQuote=function(quotes,position,periodicity,interval,timeUnit,dontRoll,alignToHour){var w72="Qu",d15="ns",n05="ek",b32="atedQuot",K72="lid";if(Q5v.j6w(position,0))return null;var arguments$=[quotes,position,periodicity,interval,dontRoll,alignToHour];if(this.runPrepend((R82+s45+S95+E45+K72+b32+d82),arguments$))return null;if(!dontRoll&&this.dontRoll)dontRoll=true;var quote=quotes[position];function consolidate(self,p){var ratio=1;if(self.layout.adj&&quotes[p].Adj_Close){ratio=Q5v.B6w(quotes[p].Adj_Close,quotes[p].Close);}
if(Q5v.I6w("High",quotes[p]))if(Q5v.u6w(quotes[p].High*ratio,quote.High))quote.High=Q5v.s0w(quotes[p].High,ratio);if(Q5v.m0w("Low",quotes[p]))if(Q5v.N0w(quotes[p].Low*ratio,quote.Low))quote.Low=Q5v.T0w(quotes[p].Low,ratio);quote.Volume+=quotes[p].Volume;if(Q5v.l0w("Close",quotes[p])&&Q5v.n0w(quotes[p].Close,null))quote.Close=Q5v.i0w(quotes[p].Close,ratio);quote.ratio=ratio;for(var element in quotes[p]){if(!quote[element]){quote[element]=quotes[p][element];}
}
}
function newInterval(p,interval){var d1=quotes[Q5v.H0w(p,1)].DT,d2=quotes[p].DT;if(Q5v.M0w(interval,"week")){if(Q5v.e0w(d2.getDay(),d1.getDay()))return true;}
else if(Q5v.O0w(interval,"month")){if(Q5v.A0w(d2.getMonth(),d1.getMonth()))return true;}
else{if(Q5v.q0w(d2.getDay(),d1.getDay()))return true;}
return false;}
function newIntradayInterval(position,p,periodicity,interval,timeUnit){var nextBar=Q5v.U0w(interval,periodicity),d1=new Date(quotes[position].DT);if(Q5v.w0w(timeUnit,"millisecond"))d1.setMilliseconds(d1.getMilliseconds()+nextBar);else if(Q5v.f0w(timeUnit,"second"))d1.setSeconds(d1.getSeconds()+nextBar);else d1.setMinutes(d1.getMinutes()+nextBar);var d2=quotes[p].DT;if(alignToHour){if(Q5v.x0w(quotes[position].DT.getMinutes(),nextBar)){if(Q5v.X9w(d2.getMinutes()%nextBar,0)){return true;}
}
}
if(Q5v.o9w(d2.getTime(),d1.getTime()))return true;return false;}
var p=position,i;if((Q5v.k9w(interval,(z55+d82+n05))||Q5v.F9w(interval,"month"))&&!dontRoll){for(i=1;Q5v.E9w(i,periodicity);i++){while(Q5v.S9w(p+1,quotes.length)&&!newInterval(p+1,interval)){p++;consolidate(this,p);}
if(Q5v.D9w(i,periodicity)){p++;if(Q5v.g9w(p,quotes.length))consolidate(this,p);}
}
}
else if(!this.isDailyInterval(interval)&&Q5v.p9w(interval,(I95+Z52))&&Q5v.Y9w(periodicity,1)){for(i=1;Q5v.G9w(i,periodicity);i++){p=position+i;if(Q5v.J9w(p,quotes.length)&&newIntradayInterval(position,p,periodicity,interval,timeUnit)){p--;break;}
if(Q5v.V9w(p,0)&&Q5v.r9w(p,quotes.length)){consolidate(this,p);}
}
}
else{for(i=1;Q5v.c9w(i,periodicity);i++){p=position+i;if(Q5v.b9w(p,0)&&Q5v.K9w(p,quotes.length)){consolidate(this,p);}
}
}
for(i in this.plugins){var plugin=this.plugins[i];if(plugin.consolidate)plugin.consolidate(quotes,position,p,quote);}
this.runAppend((o82+E45+d15+E45+Q5v.D45+A15+s12+Q5v.V05+d82+U22+w72+E45+x05),arguments$);return {"quote":quote,"position":p+1}
;}
;R(Q5v.E42);L(Q5v.R42);D(Q5v.y42);H(Q5v.n42);M(Q5v.W42);P(Q5v.Z75);O(b35);STXChart.prototype.displayChart=function(chart){var q82="ov",o25="_down",X75="dl",t55="stx_ca",V15="andle",o52="adow",i72="sh",e65="ca",W45="f_dow",T05="stx_pandf_u",l72="up",h42="f_",K25="df",noBorders=(Q5v.v4w(this.layout.candleWidth-chart.tmpWidth,2)&&Q5v.d4w(chart.tmpWidth,3));if(this.runPrepend("displayChart",arguments))return ;this.chart.baseLegendColors=[];var chartType=this.layout.chartType,colorFunction=null;if(chart.customChart){if(chart.customChart.chartType)chartType=chart.customChart.chartType;if(chart.customChart.colorFunction)colorFunction=chart.customChart.colorFunction;}
this.controls.baselineHandle.style.display="none";var panel=chart.panel;if(Q5v.Z4w(this.layout.aggregationType,"kagi")){this.drawKagiSquareWave(panel,"stx_kagi_up","stx_kagi_down");this.chart.baseLegendColors.push(this.getCanvasColor((l45+X52+Q5v.m15+O22+s35+A15+X52+Q5v.a05+t95)));this.chart.baseLegendColors.push(this.getCanvasColor("stx_kagi_down"));}
else if(Q5v.y4w(this.layout.aggregationType,(t95+c92+K25))){this.drawPointFigureChart(panel,(S95+Q5v.V05+h55+X52+t95+O22+s45+U22+h42+l72),"X");this.chart.baseLegendColors.push(this.getCanvasColor((T05+t95)));this.drawPointFigureChart(panel,"stx_pandf_down","O");this.chart.baseLegendColors.push(this.getCanvasColor((S95+Q5v.V05+h55+V42+O22+s45+U22+W45+s45)));}
else if(Q5v.R4w(chartType,(Q95+s45+d82))){this.drawLineChart(panel,"stx_line_chart");}
else if(Q5v.L4w(chartType,"mountain")){this.chart.baseLegendColors=null;this.drawMountainChart(panel);}
else if(Q5v.h4w(chartType,"wave")){this.drawWaveChart(panel);}
else if(Q5v.C4w(chartType,(D85))){this.startClip(panel.name);this.drawBarChartHighPerformance(panel,"stx_bar_chart");this.endClip();}
else if(Q5v.W4w(chartType,"colored_line")){this.startClip(panel.name);var stxLineUpColor=this.getCanvasColor("stx_line_up"),stxLineDownColor=this.getCanvasColor("stx_line_down"),stxLineColor=this.getCanvasColor("stx_line_chart");if(!colorFunction)colorFunction=function(stx,quote,mode){if(Q5v.t4w(quote.Close,quote.iqPrevClose))return stxLineUpColor;else if(Q5v.P4w(quote.Close,quote.iqPrevClose))return stxLineDownColor;else return stxLineColor;return null;}
;var colors1=this.drawLineChart(panel,"stx_line_chart",colorFunction);for(var c1 in colors1)this.chart.baseLegendColors.push(c1);this.endClip();}
else if(Q5v.Q4w(chartType,"colored_bar")){this.startClip(panel.name);if(colorFunction){var colors2=this.drawBarChart(panel,"stx_bar_chart",colorFunction);for(var c2 in colors2)this.chart.baseLegendColors.push(c2);}
else{this.drawBarChartHighPerformance(panel,"stx_bar_up",STXChart.CLOSEUP);this.drawBarChartHighPerformance(panel,"stx_bar_down",STXChart.CLOSEDOWN);this.drawBarChartHighPerformance(panel,"stx_bar_even",STXChart.CLOSEEVEN);this.chart.baseLegendColors.push(this.getCanvasColor("stx_bar_up"));this.chart.baseLegendColors.push(this.getCanvasColor("stx_bar_down"));}
this.endClip();}
else if(Q5v.z4w(chartType,"hollow_candle")||Q5v.a4w(chartType,"volume_candle")){this.startClip(panel.name);if(colorFunction){if(!this.noWicksOnCandles[this.layout.aggregationType])this.drawShadows(panel,colorFunction);this.drawCandles(panel,colorFunction,false);this.drawCandles(panel,colorFunction,true);}
else{if(!this.noWicksOnCandles[this.layout.aggregationType]){this.drawShadowsHighPerformance(panel,"stx_hollow_candle_up",STXChart.CLOSEUP);this.drawShadowsHighPerformance(panel,"stx_hollow_candle_down",STXChart.CLOSEDOWN);this.drawShadowsHighPerformance(panel,"stx_hollow_candle_even",STXChart.CLOSEEVEN);}
var colorUp=this.getCanvasColor("stx_hollow_candle_up"),colorDown=this.getCanvasColor("stx_hollow_candle_down"),colorEven=this.getCanvasColor("stx_hollow_candle_even");this.drawCandlesHighPerformance(panel,colorUp,"transparent",Q5v.j4w(STXChart.CLOSEUP,STXChart.CANDLEDOWN));this.drawCandlesHighPerformance(panel,colorDown,"transparent",Q5v.B4w(STXChart.CLOSEDOWN,STXChart.CANDLEDOWN));this.drawCandlesHighPerformance(panel,colorEven,"transparent",Q5v.I4w(STXChart.CLOSEEVEN,STXChart.CANDLEDOWN));this.drawCandlesHighPerformance(panel,this.containerColor,colorUp,Q5v.u4w(STXChart.CLOSEUP,STXChart.CANDLEUP));this.drawCandlesHighPerformance(panel,this.containerColor,colorDown,Q5v.s1w(STXChart.CLOSEDOWN,STXChart.CANDLEUP));this.drawCandlesHighPerformance(panel,this.containerColor,colorEven,Q5v.m1w(STXChart.CLOSEEVEN,STXChart.CANDLEUP));this.chart.baseLegendColors.push(colorUp);this.chart.baseLegendColors.push(colorDown);}
this.endClip();}
else if(Q5v.N1w(chartType,"candle")){this.startClip(panel.name);var coloredShadowUp=this.getCanvasColor("stx_candle_shadow_up"),coloredShadowDown=this.getCanvasColor("stx_candle_shadow_down"),coloredShadow=(Q5v.T1w(coloredShadowUp,coloredShadowDown));if(!colorFunction&&coloredShadow){var stxCandleShadow=this.getCanvasColor((q22+g45+e65+k85+w05+X52+i72+o52)),stxCandleUpColor=this.getCanvasColor((q22+h55+X52+o82+V15+X52+l72)),stxCandleDownColor=this.getCanvasColor("stx_candle_down"),stxCandleUp=this.canvasStyle("stx_candle_up"),stxCandleDown=this.canvasStyle("stx_candle_down");colorFunction=function(stx,quote,mode){if(Q5v.l1w(mode,"shadow")){if(coloredShadow){if(Q5v.n1w(quote.Close,quote.Open))return coloredShadowUp;else if(Q5v.i1w(quote.Close,quote.Open))return coloredShadowDown;}
return stxCandleShadow;}
else if(Q5v.H1w(mode,"solid")){if(Q5v.M1w(quote.Close,quote.Open))return stxCandleUpColor;else if(Q5v.e1w(quote.Close,quote.Open))return stxCandleDownColor;else if(Q5v.O1w(quote.Close,quote.Open))return stxCandleShadow;}
else if(Q5v.A1w(mode,"outline")){var styleArray1;if(Q5v.q1w(quote.Close,quote.Open))styleArray1=stxCandleUp;else if(Q5v.U1w(quote.Close,quote.Open))styleArray1=stxCandleDown;else return null;var borderColor=styleArray1["border-left-color"];if(!borderColor)borderColor=styleArray1.borderLeftColor;return borderColor;}
return null;}
;}
if(colorFunction){if(!this.noWicksOnCandles[this.layout.aggregationType])this.drawShadows(panel,colorFunction);this.drawCandles(panel,colorFunction,false);if(!noBorders)this.drawCandles(panel,colorFunction,true);}
else{if(!this.noWicksOnCandles[this.layout.aggregationType])this.drawShadowsHighPerformance(panel,"stx_candle_shadow");var styleArray=this.canvasStyle("stx_candle_up"),borderColor=styleArray["border-left-color"];if(!borderColor)borderColor=styleArray.borderLeftColor;if(noBorders)borderColor=null;this.drawCandlesHighPerformance(panel,this.getCanvasColor("stx_candle_up"),borderColor,STXChart.CANDLEUP);this.chart.baseLegendColors.push(styleArray.color);styleArray=this.canvasStyle((t55+s45+X75+d82+o25));borderColor=styleArray["border-left-color"];if(!borderColor)borderColor=styleArray.borderLeftColor;if(noBorders)borderColor=null;this.drawCandlesHighPerformance(panel,this.getCanvasColor("stx_candle_down"),borderColor,STXChart.CANDLEDOWN);this.chart.baseLegendColors.push(styleArray.color);}
this.endClip();}
else if(Q5v.w1w(chartType,"baseline_delta")){this.startClip(panel.name);this.setStyle("stx_baseline_trace","opacity",0);this.drawLineChart(panel,"stx_baseline_trace");var baseline=chart.baseline.actualLevel;if(Q5v.f1w(baseline,null)){baseline=this.pixelFromPriceTransform(baseline,chart.panel);var styles={"over":"stx_baseline_up","under":"stx_baseline_down"}
;for(var s in styles){var parameters={panelName:"chart",band:"Close",threshold:chart.baseline.actualLevel,color:this.getCanvasColor(styles[s]),direction:(Q5v.x1w(s,"over")?1:-1),edgeHighlight:this.getCanvasColor(styles[s]),edgeParameters:{pattern:"solid",lineWidth:parseInt(this.canvasStyle(styles[s]).width,10)+0.1,opacity:1}
}
,color=parameters.color;if(color&&Q5v.X3w(color,"transparent")){var gradient=chart.context.createLinearGradient(0,(Q5v.o3w(s,(q82+d82+m95))?0:Q5v.k3w(2,baseline)),0,baseline);gradient.addColorStop(0,STX.hexToRgba(color,60));gradient.addColorStop(1,STX.hexToRgba(color,10));parameters.color=gradient;parameters.opacity=1;}
STX.Studies.preparePeakValleyFill(this,chart.dataSegment,parameters);this.chart.baseLegendColors.push(color);}
this.plotLine(0,1,baseline,baseline,this.containerColor,"line",chart.context,true,{pattern:"solid",lineWidth:"1.1",opacity:1}
);this.plotLine(0,1,baseline,baseline,this.getCanvasColor("stx_baseline"),"line",chart.context,true,{pattern:"dotted",lineWidth:"2.1",opacity:0.5}
);if(Q5v.F3w(this.chart.baseline.userLevel,false)){this.controls.baselineHandle.style.top=Q5v.E3w(baseline,parseInt(getComputedStyle(this.controls.baselineHandle).height,10)/2,"px");this.controls.baselineHandle.style.left=Q5v.n3w(this.chart.right,parseInt(getComputedStyle(this.controls.baselineHandle).width,10),"px");this.controls.baselineHandle.style.display="block";}
}
this.endClip();}
else if(Q5v.C3w(chartType,"scatterplot")){this.startClip(panel.name);this.scatter(panel);this.endClip();}
else{this.chart.baseLegendColors=null;}
this.runAppend("displayChart",arguments);}
;STXChart.prototype.calculateATR=function(chart,period){if(!period)period=20;var total=0;for(var i=1;Q5v.W3w(i,chart.dataSet.length);i++){var prices=chart.dataSet[i],pd=chart.dataSet[Q5v.t3w(i,1)],trueRange=Math.max(Math.max(Q5v.P3w(prices.High,prices.Low),Q5v.Q3w(prices.High,pd.Close)),Q5v.z3w(pd.Close,prices.Low));total+=trueRange;if(Q5v.a3w(i,period))total-=chart.dataSet[Q5v.j3w(i,period)].trueRange;prices.trueRange=trueRange;prices.atr=Q5v.B3w(total,period);}
}
;STXChart.prototype.currentQuote=function(){var quote=null;if(!this.chart.dataSet)return null;for(var i=Q5v.I3w(this.chart.dataSet.length,1);Q5v.u3w(i,0);i--)if(this.chart.dataSet[i])return this.chart.dataSet[i];return null;}
;STXChart.prototype.correctIfOffEdge=function(theChart){if(this.runPrepend("correctIfOffEdge",arguments))return ;for(var chartName in this.charts){var chart=this.charts[chartName],leftPad=Math.round(Q5v.s7w(chart.maxTicks,3));if(Q5v.m7w(leftPad,chart.dataSet.length))leftPad=chart.dataSet.length;if(chart.allowScrollPast){var rightPad=Q5v.N7w(chart.maxTicks,leftPad);if(Q5v.T7w(chart.maxTicks-rightPad,chart.dataSet.length)){rightPad=Q5v.l7w(chart.maxTicks,chart.dataSet.length);}
if(Q5v.n7w(chart.scroll-rightPad,chart.dataSet.length)){chart.scroll=chart.dataSet.length+rightPad;}
if(Q5v.i7w(chart.scroll,leftPad)){chart.scroll=leftPad;this.micropixels=-this.layout.candleWidth/2;}
}
else{if(Q5v.H7w(chart.scroll,leftPad)){chart.scroll=leftPad;}
if(Q5v.M7w(chart.scroll,chart.dataSet.length)){chart.scroll=chart.dataSet.length;}
}
this.preferences.whitespace=Q5v.e7w((chart.maxTicks-chart.scroll),this.layout.candleWidth);}
this.runAppend("correctIfOffEdge",arguments);}
;STXChart.prototype.createDataSegment=function(theChart){if(this.runPrepend("createDataSegment",arguments))return ;for(var chartName in this.charts){var chart=this.charts[chartName];if(theChart)chart=theChart;chart.baseline.actualLevel=chart.baseline.userLevel?chart.baseline.userLevel:chart.baseline.defaultLevel;chart.dataSegment=[];var position=Q5v.O7w(chart.dataSet.length,chart.scroll,1);for(var i=-1;Q5v.z7w(i,chart.scroll)&&Q5v.a7w(i,chart.maxTicks);i++){position++;if(i==-1&&!chart.baseline.includeInDataSegment)continue;if(Q5v.j7w(position,chart.dataSet.length)&&Q5v.B7w(position,0)){if(chart.dataSet[position].candleWidth){chart.dataSet[position].candleWidth=null;chart.dataSet[position].leftOffset=null;}
chart.dataSegment.push(chart.dataSet[position]);if(Q5v.I7w(chart.baseline.actualLevel,null)&&Q5v.u7w(i,0))chart.baseline.actualLevel=chart.dataSet[position].iqPrevClose;}
else if(Q5v.s2w(position,0)){chart.dataSegment.push(null);}
}
if(Q5v.m2w(this.layout.chartType,"volume_candle")){var totalVolume=0;for(var v=0;Q5v.N2w(v,chart.dataSegment.length);v++){if(chart.dataSegment[v])totalVolume+=chart.dataSegment[v].Volume;}
var accumOffset=0;for(var w=0;Q5v.T2w(w,chart.dataSegment.length);w++){if(chart.dataSegment[w]){if(chart.dataSegment[w].Volume){var workingWidth=chart.width;if(Q5v.l2w(chart.scroll,chart.maxTicks))workingWidth-=this.preferences.whitespace;chart.dataSegment[w].candleWidth=Q5v.n2w(workingWidth,chart.dataSegment[w].Volume,totalVolume);chart.dataSegment[w].leftOffset=accumOffset+Q5v.C2w(chart.dataSegment[w].candleWidth,2);accumOffset+=chart.dataSegment[w].candleWidth;}
else{chart.dataSegment[w].candleWidth=this.layout.candleWidth;chart.dataSegment[w].leftOffset=accumOffset+Q5v.W2w(this.layout.candleWidth,2);accumOffset+=this.layout.candleWidth;}
}
else{accumOffset+=this.layout.candleWidth;}
}
}
if(theChart)break;}
this.runAppend("createDataSegment",arguments);}
;STXChart.prototype.leftTick=function(){return Q5v.t2w(this.chart.dataSet.length,this.chart.scroll);}
;STXChart.prototype.getStartDateOffset=function(){for(var ds=0;Q5v.P2w(ds,this.chart.dataSegment.length);ds++){if(this.chart.dataSegment[ds]){return ds;}
}
return 0;}
;STXChart.prototype.setStartDate=function(dt){for(var i=0;Q5v.Q2w(i,this.chart.dataSet.length);i++){var bar=this.chart.dataSet[i];if(Q5v.z2w(bar.DT.getTime(),dt.getTime())){this.chart.scroll=Q5v.a2w(this.chart.dataSet.length,i);this.draw();return ;}
}
}
;STXChart.prototype.updateListeners=function(event){for(var i in this.plugins){var plugin=this.plugins[i];if(plugin.display&&plugin.listener)plugin.listener(this,event);}
}
;STXChart.prototype.clearPixelCache=function(){for(var x in this.panels){var panel=this.panels[x];panel.cacheHigh=null;panel.cacheLow=null;panel.cacheLeft=1000000;panel.cacheRight=-1;}
for(var chartName in this.charts){var chart=this.charts[chartName];if(!chart.dataSet)continue;for(var i=0;Q5v.j2w(i,chart.dataSet.length);i++){chart.dataSet[i].cache={}
;}
}
}
;STXChart.prototype.createYAxisLabel=function(panel,txt,y,backgroundColor,color,ctx,yAxis){var Q45="lef";if(Q5v.B2w(panel.yAxis.drawPriceLabels,false))return ;var yax=yAxis?yAxis:panel.yAxis,context=ctx?ctx:this.chart.context,margin=3,height=this.getCanvasFontSize("stx_yaxis")+Q5v.I2w(margin,2);this.canvasFont("stx_yaxis",context);var drawBorders=yax.displayBorder||this.axisBorders,tickWidth=drawBorders?3:0,width;try{width=context.measureText(txt).width+tickWidth+Q5v.u2w(margin,2);}
catch(e){width=yax.width;}
var x=Q5v.s8w(yax.left,margin,3),textx=x+margin+tickWidth,radius=3,position=(Q5v.Z8w(yax.position,null)?panel.chart.yAxis.position:yax.position);if(Q5v.y8w(position,"left")){x=yax.left+yax.width+margin-3;width=width*-1;textx=x;radius=-3;context.textAlign="right";}
if(Q5v.R8w(y+(height/2),yax.bottom))y=Q5v.L8w(yax.bottom,(height/2));if(Q5v.h8w(y-(height/2),yax.top))y=yax.top+(Q5v.C8w(height,2));context.fillStyle=backgroundColor;if(typeof (STX[this.yaxisLabelStyle])=='undefined'){this.yaxisLabelStyle="roundRectArrow";}
var yaxisLabelStyle=this.yaxisLabelStyle;if(yax.yaxisLabelStyle)yaxisLabelStyle=yax.yaxisLabelStyle;STX[yaxisLabelStyle](context,x,Q5v.W8w(y,(height/2)),width,height,radius,true,false);context.textBaseline="middle";context.fillStyle=color?color:STX.chooseForegroundColor(backgroundColor);if(Q5v.t8w(context.fillStyle,backgroundColor)){if(Q5v.P8w(backgroundColor.toUpperCase(),"#FFFFFF"))context.fillStyle="#000000";else context.fillStyle=(j45+r72+o95+r72+o95);}
context.fillText(txt,textx,y+1);context.textAlign=(Q45+Q5v.V05);}
;STXChart.prototype.createXAxisLabel=function(panel,txt,x,backgroundColor,color,pointed){var context=this.chart.context,margin=2,fontstyle="stx-float-date",height=this.getCanvasFontSize(fontstyle)+Q5v.Q8w(margin,2);this.canvasFont(fontstyle,context);var width;try{width=context.measureText(txt).width+Q5v.z8w(margin,2);}
catch(e){width=0;}
var y=panel.top+panel.height-height;if(Q5v.a8w(x+(width/2),panel.right))x=Q5v.j8w(panel.right,(width/2));if(Q5v.B8w(x-(width/2),panel.left))x=panel.left+(Q5v.I8w(width,2));context.fillStyle=backgroundColor;STX.roundRect(context,Q5v.u8w(x,(width/2)),y,width,height,3,true,false);if(pointed){var arrowHeight=Q5v.s5w(panel.bottom,panel.yAxis.bottom,height);context.beginPath();context.moveTo(Q5v.Z5w(x,arrowHeight),y);context.lineTo(x,Q5v.y5w(y,arrowHeight));context.lineTo(x+arrowHeight,y);context.closePath();context.fill();}
context.textBaseline=(Q5v.V05+P65);context.fillStyle=color?color:STX.chooseForegroundColor(backgroundColor);if(Q5v.R5w(context.fillStyle,backgroundColor)){if(Q5v.L5w(backgroundColor.toUpperCase(),"#FFFFFF"))context.fillStyle="#000000";else context.fillStyle="#FFFFFF";}
context.fillText(txt,Q5v.h5w(x,width/2,margin),y+margin);}
;STXChart.prototype.drawCurrentHR=function(){var B32="dow",l05="t_",u55="urr";if(this.runPrepend("drawCurrentHR",arguments))return ;var backgroundColor,color;for(var chartName in this.charts){var chart=this.charts[chartName],panel=chart.panel,yAxis=panel.yAxis;if(Q5v.g5w(yAxis.drawCurrentPriceLabel,false))continue;if(chart.customChart&&Q5v.p5w(chart.customChart.chartType,"none"))continue;var whichSet=yAxis.whichSet;if(!whichSet)whichSet="dataSet";var l=chart[whichSet].length;if(Q5v.Y5w(whichSet,"dataSegment")){while(Q5v.G5w(l,(chart.width-this.micropixels+(this.layout.candleWidth)/2+1)/this.layout.candleWidth))l--;}
if(l){var quote=chart[whichSet][Q5v.J5w(l,1)],prevClose=quote.Close,currentClose=quote.Close;if(Q5v.V5w(chart.dataSet.length,2)){var quote2=chart[whichSet][Q5v.r5w(l,2)];prevClose=quote2.Close;}
if(Q5v.c5w(currentClose,prevClose)){backgroundColor=this.canvasStyle("stx_current_hr_down").backgroundColor;color=this.canvasStyle((q22+h55+X52+o82+u55+h22+l05+Q5v.g15+m95+X52+B32+s45)).color;}
else{backgroundColor=this.canvasStyle("stx_current_hr_up").backgroundColor;color=this.canvasStyle("stx_current_hr_up").color;}
if(quote.transform)quote=quote.transform;var txt,labelDecimalPlaces=Math.max(panel.yAxis.printDecimalPlaces,panel.chart.decimalPlaces);if(yAxis.maxDecimalPlaces||Q5v.b5w(yAxis.maxDecimalPlaces,0))labelDecimalPlaces=Math.min(labelDecimalPlaces,yAxis.maxDecimalPlaces);if(yAxis.priceFormatter){txt=yAxis.priceFormatter(this,panel,quote.Close,labelDecimalPlaces);}
else{txt=this.formatYAxisPrice(quote.Close,panel,labelDecimalPlaces);}
var y=this.pixelFromPrice(quote.Close,panel);this.createYAxisLabel(panel,txt,y,backgroundColor,color);}
}
this.runAppend("drawCurrentHR",arguments);}
;STXChart.prototype.getDefaultColor=function(){var p32=0.65;this.defaultColor=W65;var bgColor=Q5v.s15,div=this.chart.container;while(!bgColor||STX.isTransparent(bgColor)){var cStyle=getComputedStyle(div);if(!cStyle)return ;bgColor=cStyle.backgroundColor;if(STX.isTransparent(bgColor))bgColor=x65;div=div.parentNode;if(!div||!div.tagName)break;}
if(bgColor){if(Q5v.K5w(bgColor,x65))bgColor=(j45+r72+r72+r72+o95+r72);this.containerColor=bgColor;if(!STX.isTransparent(bgColor)){var hsv=STX.hsv(bgColor),v=hsv[Q5v.y42];if(Q5v.v6Q(v,p32))this.defaultColor=W65;else this.defaultColor=G75;}
else{this.defaultColor=W65;}
}
else{this.containerColor=G75;}
}
;STXChart.prototype.startAsyncAction=function(){if(!this.pendingAsyncs)this.pendingAsyncs=[];this.pendingAsyncs.push(k15);}
;STXChart.prototype.registerChartDrawnCallback=function(fc){if(!this.asyncCallbacks)this.asyncCallbacks=[];this.asyncCallbacks.push(fc);return {fc:fc}
;}
;STXChart.prototype.unregisterChartDrawnCallback=function(obj){for(var i=0;Q5v.d6Q(i,this.asyncCallbacks.length);i++){if(Q5v.Z6Q(this.asyncCallbacks[i],obj.fc)){this.asyncCallbacks.splice(i,1);return ;}
}
}
;STXChart.prototype.makeAsyncCallbacks=function(){if(!this.asyncCallbacks)return ;if(!this.pendingAsyncs||!this.pendingAsyncs.length){for(var i=0;Q5v.y6Q(i,this.asyncCallbacks.length);i++){(this.asyncCallbacks[i])();}
}
}
;STXChart.prototype.completeAsyncAction=function(){this.pendingAsyncs.pop();this.makeAsyncCallbacks();}
;STXChart.prototype.draw=function(){this.debug();if(!this.chart.canvas)return ;if(!this.chart.dataSet)return ;if(!this.chart.canvasHeight)return ;if(!this.useAnimation&&Q5v.R6Q(new Date()-this.grossDragging,500))return ;this.offset=Q5v.L6Q(this.layout.candleWidth,this.candleWidthPercent,2);STX.clearCanvas(this.chart.canvas,this);if(this.runPrepend("draw",arguments))return ;if(!this.xaxisHeight){this.xaxisHeight=this.getCanvasFontSize("stx_xaxis")+4;if(this.chart.xAxis.displayBorder||this.axisBorders)this.xaxisHeight+=3;}
this.getDefaultColor();this.vectorsShowing=false;this.drawPanels();this.yAxisLabels=[];var i,chart,chartName,plugin;for(chartName in this.charts){chart=this.charts[chartName];this.correctIfOffEdge();this.createDataSegment();var axisRepresentation=this.createXAxis(chart);this.initializeDisplay(chart);this.rendererAction(chart,"calculate");this.renderYAxis(chart);this.drawXAxis(chart,axisRepresentation);chart.tmpWidth=Math.floor(Q5v.D6Q(this.layout.candleWidth,this.candleWidthPercent));if(Q5v.g6Q(chart.tmpWidth%2,0)){chart.tmpWidth+=1;if(Q5v.p6Q(chart.tmpWidth,this.layout.candleWidth))chart.tmpWidth-=2;}
if(Q5v.Y6Q(chart.tmpWidth,0.5))chart.tmpWidth=0.5;for(i in this.plugins){plugin=this.plugins[i];if(plugin.display){if(plugin.drawUnder)plugin.drawUnder(this,chart);}
}
this.rendererAction(chart,"underlay");STX.Studies.displayStudies(this,chart,true);this.displayChart(chart);STX.Studies.displayStudies(this,chart,false);this.rendererAction(chart,"overlay");}
for(chartName in this.charts){chart=this.charts[chartName];for(i in this.plugins){plugin=this.plugins[i];if(plugin.display){if(plugin.drawOver)plugin.drawOver(this,chart);}
}
}
for(var panel in this.panels){this.plotYAxisText(this.panels[panel]);}
for(var yLbl=0;Q5v.G6Q(yLbl,this.yAxisLabels.length);yLbl++){this.createYAxisLabel.apply(this,this.yAxisLabels[yLbl].args);}
this.createCrosshairs();this.drawVectors();this.drawCurrentHR();this.displayInitialized=true;if(this.controls.home){if(Q5v.J6Q(this.chart.scroll-1,Math.ceil(this.chart.width/this.layout.candleWidth))){this.controls.home.style.display="block";}
else{this.controls.home.style.display=(s45+E45+s45+d82);}
}
this.positionMarkers();for(chartName in this.charts){chart=this.charts[chartName];if(this.quoteDriver)this.quoteDriver.checkLoadMore(chart);}
this.runAppend("draw",arguments);this.makeAsyncCallbacks();}
;STXChart.prototype.adjustBackingStore=function(canvas,context){this.devicePixelRatio=window.devicePixelRatio||1;if(Q5v.V6Q(this.devicePixelRatio,1.0))this.devicePixelRatio=1.0;backingStoreRatio=context.webkitBackingStorePixelRatio||context.mozBackingStorePixelRatio||context.msBackingStorePixelRatio||context.oBackingStorePixelRatio||context.backingStorePixelRatio||1;var ratio=Q5v.r6Q(this.devicePixelRatio,backingStoreRatio);if(!STX.isAndroid||STX.is_chrome){var oldWidth=canvas.width,oldHeight=canvas.height;canvas.width=Q5v.c6Q(oldWidth,ratio);canvas.height=Q5v.b6Q(oldHeight,ratio);canvas.style.width=oldWidth+'px';canvas.style.height=oldHeight+'px';context.scale(ratio,ratio);}
}
;STXChart.prototype.resizeCanvas=function(){var Z32="10";if(!this.chart.panel)this.chart.panel=this.panels.chart;var canvas=this.chart.canvas,context=this.chart.context;if(canvas&&context){this.chart.tempCanvas.height=canvas.height=this.chart.container.clientHeight;this.chart.tempCanvas.width=canvas.width=this.chart.container.clientWidth;this.adjustBackingStore(canvas,context);this.adjustBackingStore(this.chart.tempCanvas,this.chart.tempCanvas.context);this.floatCanvas.height=this.chart.container.clientHeight;this.floatCanvas.width=this.chart.container.clientWidth;this.adjustBackingStore(this.floatCanvas,this.floatCanvas.context);}
var rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.canvasWidth=this.chart.canvasWidth=this.chart.container.clientWidth;this.right=this.left+this.canvasWidth;this.height=this.chart.container.clientHeight;this.width=Q5v.K6Q(this.right,this.left);this.bottom=this.top+this.height;this.calculateYAxisPositions();this.chart.canvasRight=this.right;this.chart.canvasHeight=this.height;var candleWidth=this.layout.candleWidth;if(typeof (candleWidth)=="undefined")candleWidth=8;for(var chartName in this.charts){var chart=this.charts[chartName];if(this.layout.span){this.setCandleWidth(this.getSpanCandleWidth(this.layout.span),chart);}
else{this.setCandleWidth(candleWidth,chart);if(Q5v.v0Q(chart.scroll,chart.width/candleWidth)){chart.scroll=Math.floor(Q5v.d0Q(chart.width,candleWidth));var wsInTicks=Math.round(Q5v.Z0Q(this.preferences.whitespace,this.layout.candleWidth));chart.scroll-=wsInTicks;}
}
var idealNumberOfTicks=10,appxLabelWidth;try{appxLabelWidth=Q5v.y0Q(context.measureText((Z32+F55+K95+K95)).width,2);}
catch(e){appxLabelWidth=100;}
while(Q5v.R0Q(idealNumberOfTicks,1)){if(Q5v.L0Q(this.chart.width/appxLabelWidth,idealNumberOfTicks))break;idealNumberOfTicks/=1.5;}
chart.xAxis.autoComputedTickSizePixels=Math.round(Q5v.h0Q(this.chart.width,idealNumberOfTicks));if(Q5v.C0Q(chart.xAxis.autoComputedTickSizePixels,1))chart.xAxis.autoComputedTickSizePixels=1;}
}
;STXChart.prototype.setCandleWidth=function(newCandleWidth,chart){if(!chart)chart=this.chart;if(Q5v.W0Q(newCandleWidth,Q5v.E42))newCandleWidth=Q5v.W42;this.layout.candleWidth=newCandleWidth;chart.maxTicks=Math.ceil(Q5v.t0Q(this.chart.width,newCandleWidth)+0.5);}
;STXChart.prototype.resizeChart=function(maintainScroll){if(Q5v.P0Q(maintainScroll,v85))maintainScroll=k15;if(maintainScroll)this.preAdjustScroll();var previousHeight=this.chart.canvasHeight;this.resizeCanvas();if(maintainScroll)this.postAdjustScroll();this.adjustPanelPositions();if(this.displayInitialized){this.draw();}
else if(Q5v.Q0Q(this.chart.canvasHeight,Q5v.E42)&&Q5v.z0Q(previousHeight,Q5v.E42)){this.draw();}
}
;STXChart.prototype.calculateMinutesInSession=function(chart){var T25=59,minutes=Q5v.a0Q((chart.endHour-chart.beginHour),t25);minutes+=chart.endMinute;minutes-=chart.beginMinute;if(Q5v.j0Q(chart.endMinute,T25))minutes++;chart.minutesInSession=minutes;}
;STXChart.prototype.newChart=function(symbol,masterData,chart,cb,params){var F25="gu",v52="onfi",T55="Fe",a75="uote",L95="pe",T32="as",n55="rn",D05="W",O85='object';if(!chart)chart=this.chart;if(!params)params={}
;if(params.periodicity){if(params.periodicity.interval)this.layout.interval=params.periodicity.interval;if(params.periodicity.period)this.layout.periodicity=params.periodicity.period;this.layout.timeUnit=params.periodicity.timeUnit;}
var prevSymbol=chart.symbol,prevSymbolObject=STX.clone(chart.symbolObject);if(!symbol){chart.symbol=Q5v.s15;chart.symbolObject={symbol:Q5v.s15}
;}
else if(typeof symbol==O85){chart.symbol=symbol.symbol;chart.symbolObject=symbol;}
else{chart.symbol=symbol;chart.symbolObject.symbol=symbol;}
if((Q5v.B0Q(chart.endHour,Q5v.s15)&&Q5v.I0Q(chart.beginHour,Q5v.s15)&&Q5v.u0Q(chart.endMinute,Q5v.s15)&&Q5v.s9Q(chart.beginMinute,Q5v.s15))||(Q5v.m9Q(chart.endHour+chart.beginHour+chart.endMinute+chart.beginMinute,Q5v.E42))||this.automaticMarketHours){var hours=STX.LegacyMarket.getHours(chart.symbolObject.symbol,this.layout.extended);chart.endHour=hours.endHour;chart.beginHour=hours.beginHour;chart.endMinute=hours.endMinute;chart.beginMinute=hours.beginMinute;this.automaticMarketHours=k15;}
if(!masterData&&this.quoteDriver){var callback=function(err){if(err){chart.symbol=prevSymbol;chart.symbolObject=prevSymbolObject;}
if(cb)cb(err);}
;if(params.span&&params.span.multiplier&&params.span.base){this.setSpan({maintainPeriodicity:k15,multiplier:params.span.multiplier,span:params.span.base,symbol:chart.symbol}
,callback);}
else{var self=this;this.quoteDriver.newChart({symbol:chart.symbol,chart:chart,initializeChart:k15}
,function(){self.adjustPanelPositions();callback.apply(self,arguments);}
);}
}
else{if(!masterData){console.log((D05+O22+n55+A15+L45+n25+z12+E45+n82+G45+T32+x05+m95+a92+n82+S95+L95+o82+A15+s65+d82+U22+n82+O22+k85+n82+s45+E45+n82+w92+a75+T55+Q52+n82+o82+v52+F25+G95));}
if(!chart.symbol)chart.symbol=P05;this.setMasterData(masterData,chart);this.createDataSet();this.initializeChart();if(params.span&&params.span.multiplier&&params.span.base){this.setSpan({maintainPeriodicity:k15,multiplier:params.span.multiplier,span:params.span.base}
);}
else{this.draw();}
this.adjustPanelPositions();if(cb)cb();}
}
;STXChart.prototype.setMasterData=function(masterData,chart){var D22=' = ',L25='alue',e05='V',o42='es',F82='id',G25='rov',z92='er',u85='ur',g75='() ',H65='F',J35='se',r05='U',N12='. ',c15='mb',J15='ng',V65='terD',J55='tM',x12='ct',n12='bje',n52='ata',A55='rD',B12='at',J05='ing',o45='iss',m65='M',x32=' : ',J72='ta',K22='D',V22='te',h45='Mas',a65='set';if(!chart)chart=this.chart;this.calculateMinutesInSession(chart);chart.masterData=masterData;if(Q5v.N9Q(chart.name,"chart"))this.masterData=masterData;var i;for(i=0;masterData&&Q5v.T9Q(i,masterData.length);i++){var quotes=masterData[i];if(quotes.DT){quotes.DT=new Date(quotes.DT);quotes.Date=STX.yyyymmddhhmmssmmm(quotes.DT);}
else if(quotes.Date)quotes.DT=STX.strToDateTime(quotes.Date);else console.log((a65+h45+V22+D52+K22+I75+J72+x32+m65+o45+J05+A35+K22+u05+A35+I75+m85+J75+A35+K22+B12+D35+A35+L85+m85+A35+B25+I75+a52+V22+A55+n52+A35+L85+n12+x12));if(quotes.Volume&&typeof quotes.Volume!=="number")quotes.Volume=parseInt(quotes.Volume,10);if(quotes.Close&&typeof quotes.Close=='number'){}
else{console.log((a52+D35+J55+P12+V65+n52+x32+a22+w85+b42+D35+A35+v55+a52+A35+B25+v55+a52+a52+v55+J15+A35+L85+D52+A35+m85+L85+F05+A35+I75+A35+m85+C05+c15+D35+D52+N12+r05+J35+A35+X65+L12+J35+H65+C95+g75+v55+U35+A35+N82+L85+u85+A35+J75+I75+J72+A35+a52+z92+G65+z92+A35+X65+G25+F82+o42+A35+a52+F05+D52+v55+J15+a52+N12+e05+L25+D22)+quotes.Close);}
if(Q5v.l9Q(quotes.High,null))delete  quotes.High;if(Q5v.n9Q(quotes.Low,null))delete  quotes.Low;if(Q5v.i9Q(quotes.Open,null))delete  quotes.Open;}
chart.decimalPlaces=this.callbacks.calculateTradingDecimalPlaces({stx:this,chart:chart,symbol:chart.symbolObject.symbol,symbolObject:chart.symbolObject}
);if(!STXChart.isDailyInterval(this.layout.interval))this.setDisplayDates(masterData);this.chart.roundit=Math.pow(10,chart.decimalPlaces);for(i in this.plugins){var plugin=this.plugins[i];if(plugin.display){if(plugin.setMasterData)plugin.setMasterData(this,chart);}
}
for(var s in this.chart.series){var series=this.chart.series[s];if(series.addSeriesData){series.addSeriesData(this);}
}
}
;STXChart.prototype.setDisplayDate=function(quote){var dt=quote.DT,milli=Q5v.H9Q(dt.getSeconds(),h85)+dt.getMilliseconds(),newDT;if(this.dataZone){newDT=new timezoneJS.Date(dt.getFullYear(),dt.getMonth(),dt.getDate(),dt.getHours(),dt.getMinutes(),this.dataZone);dt=new Date(newDT.getTime()+milli);}
if(this.displayZone){newDT=new timezoneJS.Date(dt.getTime(),this.displayZone);dt=new Date(newDT.getFullYear(),newDT.getMonth(),newDT.getDate(),newDT.getHours(),newDT.getMinutes());dt=new Date(dt.getTime()+milli);}
quote.displayDate=dt;}
;STXChart.prototype.setDisplayDates=function(masterData){if(!masterData)return ;for(var i=0;Q5v.M9Q(i,masterData.length);i++){var quote=masterData[i];if(quote.DT)this.setDisplayDate(quote);}
}
;STXChart.prototype.streamTrade=function(priceData,now,symbol,params){var chart=this.chart;if(!params)params={}
;if(params.chart)chart=params.chart;var price=null,bid=null,ask=null,volume=0;if(typeof priceData=="object"){price=priceData.last;bid=priceData.bid;ask=priceData.ask;volume=priceData.volume;}
else{price=arguments[0];volume=arguments[1];now=arguments[2];symbol=arguments[3];}
var md=chart.masterData;if(!now){now=new Date();if(this.dataZone){var tzNow=STX.convertTimeZone(now,null,this.dataZone);now=new Date(tzNow.getFullYear(),tzNow.getMonth(),tzNow.getDate(),tzNow.getHours(),tzNow.getMinutes(),tzNow.getSeconds(),tzNow.getMilliseconds());}
}
else{now=new Date(now);}
if(Q5v.e9Q(this.layout.timeUnit,"second")){now.setMilliseconds(0);}
else if(Q5v.O9Q(this.layout.timeUnit,"minute")){now.setMilliseconds(0);now.setSeconds(0);}
var quote;if(!md||!md.length||Q5v.A9Q(this.layout.interval,"tick")){quote={Date:STX.yyyymmddhhmmssmmm(now),DT:now,Open:price,Close:price,High:price,Low:price,Volume:volume,Bid:bid,Ask:ask}
;this.appendMasterData([quote],chart,params);}
else{quote=STX.clone(md[Q5v.q9Q(md.length,1)]);var next=this.getNextInterval(quote.DT,null,this.dataZone);if(Q5v.U9Q(now,next)){if(symbol){if(price||Q5v.w9Q(price,0)){quote[symbol]=price;}
}
else{if(price||Q5v.f9Q(price,0)){quote.Close=price;if(Q5v.x9Q(price,quote.High))quote.High=price;if(Q5v.X4Q(price,quote.Low))quote.Low=price;}
if(volume)quote.Volume+=volume;if(bid||Q5v.o4Q(bid,0))quote.Bid=bid;if(ask||Q5v.k4Q(ask,0))quote.Ask=ask;}
var newParams=STX.clone(params);this.appendMasterData([quote],chart,newParams);}
else{var next2=this.getNextInterval(next,null,this.dataZone),gaps=[];while(Q5v.F4Q(next2,now)){var gap={Date:STX.yyyymmddhhmmssmmm(next),DT:next,Close:quote.Close,Open:quote.Close,High:quote.Close,Low:quote.Close,Volume:0,Bid:quote.Bid,Ask:quote.Ask}
;gaps.push(gap);next=next2;next2=this.getNextInterval(next,null,this.dataZone);}
quote={Date:STX.yyyymmddhhmmssmmm(next),DT:next,Open:price,Close:price,High:price,Low:price,Volume:volume,Bid:bid,Ask:ask}
;gaps.push(quote);this.appendMasterData(gaps,chart,params);}
}
}
;STXChart.prototype.appendMasterData=function(appendQuotes,chart,params){var o22="um";if(!params)params={}
;if(!chart)chart=this.chart;if(Q5v.E4Q(appendQuotes.constructor,Object))appendQuotes=[appendQuotes];if(this.runPrepend("appendMasterData",[appendQuotes,chart,params]))return ;if(!appendQuotes||!appendQuotes.length)return ;var dt=appendQuotes[0].DT;if(!dt)dt=STX.strToDateTime(appendQuotes[0].Date);var masterData=chart.masterData,i;if(!masterData||!masterData.length){masterData=chart.masterData=STX.clone(appendQuotes);for(i=0;Q5v.S4Q(i,masterData.length);i++){if(masterData[i].DT)masterData[i].Date=STX.yyyymmddhhmmssmmm(masterData[i].DT);else masterData[i].DT=STX.strToDateTime(masterData[i].Date);if(masterData[i].Volume&&typeof masterData[i].Volume!=="number")masterData[i].Volume=parseInt(masterData[i].Volume,10);if(!STXChart.isDailyInterval(this.layout.interval))this.setDisplayDate(masterData[i]);}
}
else{i=Q5v.D4Q(masterData.length,1);while(Q5v.g4Q(i,0)){var dt2=masterData[i].DT;if(!dt2)dt2=STX.strToDateTime(masterData[i].Date);if(Q5v.p4Q(dt2.getTime(),dt.getTime())){var plusOne=0;if(Q5v.Y4Q(dt2.getTime(),dt.getTime()))plusOne=1;for(var j=0;Q5v.G4Q(j,appendQuotes.length);j++){if(!plusOne){if(typeof masterData[i+j]!="undefined"){if(!appendQuotes[j].Volume&&masterData[i+j].Volume){appendQuotes[j].Volume=masterData[i+j].Volume;}
if(!params.allowReplaceOHL){if(masterData[i+j].Open){appendQuotes[j].Open=masterData[i+j].Open;}
if(Q5v.J4Q(masterData[i+j].High,appendQuotes[j].High)){appendQuotes[j].High=masterData[i+j].High;}
if(masterData[i+j].Low&&Q5v.V4Q(masterData[i+j].Low,appendQuotes[j].Low)){appendQuotes[j].Low=masterData[i+j].Low;}
}
}
for(var field in this.chart.series){if(typeof appendQuotes[j][field]=="undefined"&&typeof masterData[i+j]!="undefined")appendQuotes[j][field]=masterData[i+j][field];}
for(var p in this.panels){if(this.panels[p].studyQuotes){for(var sq in this.panels[p].studyQuotes){if(!this.panels[p].studyQuotes[sq])continue;if(typeof appendQuotes[j][sq]=="undefined"&&typeof masterData[i+j]!="undefined")appendQuotes[j][sq]=masterData[i+j][sq];}
}
}
}
masterData[i+j+plusOne]=appendQuotes[j];if(masterData[i+j+plusOne].DT)masterData[i+j+plusOne].Date=STX.yyyymmddhhmmssmmm(masterData[i+j+plusOne].DT);else masterData[i+j+plusOne].DT=STX.strToDateTime(masterData[i+j+plusOne].Date);if(masterData[i+j+plusOne].Volume&&typeof masterData[i+j+plusOne].Volume!==(s45+o22+H22+S82))masterData[i+j+plusOne].Volume=parseInt(masterData[i+j+plusOne].Volume,10);if(!STXChart.isDailyInterval(this.layout.interval))this.setDisplayDate(this.masterData[i+j+plusOne]);if(Q5v.r4Q(chart.scroll,chart.maxTicks+1)&&plusOne){chart.scroll++;this.grabStartScrollX++;}
}
break;}
i--;}
for(i in this.plugins){var plugin=this.plugins[i];if(plugin.display){if(plugin.appendMasterData)plugin.appendMasterData(this,appendQuotes,chart);}
}
}
if(!this.masterData||!this.masterData.length)this.masterData=masterData;if(!params.noCreateDataSet){var sp=this.streamParameters;if(++sp.count>sp.maxTicks||params.bypassGovernor){clearTimeout(sp.timeout);this.createDataSet();this.draw();this.updateChartAccessories();sp.count=0;sp.timeout=-1;}
else{var self=this;if(sp.timeout==-1){sp.timeout=setTimeout(function(){var o65=1742922,E65=3163286,E32=1856945571,Z05=((80.,19.6E1)<(120.,68)?(42.7E1,1.312E3):(110.10E1,1.448E3)>47.?(0x1E3,1691943638):(86.80E1,56.5E1));self.createDataSet();self.draw();self.updateChartAccessories();var g92=Z05,H92=E32,C92=Q5v.y42;for(var i92=Q5v.R42;Q5v.Q02.J02(i92.toString(),i92.toString().length,E65)!==g92;i92++){descResults.sort(sortId);this.setRange(params2,cb);C92+=Q5v.y42;}
if(Q5v.Q02.J02(C92.toString(),C92.toString().length,o65)!==H92){seriesPlotter.draw(context,I05);this.mousemoveinner(Q5v.D0H(STXChart.crosshairX,delta),STXChart.crosshairY);cb(results);return a1w>r1w;}
self.streamParameters.count=0;self.streamParameters.timeout=-1;}
,sp.maxWait);}
}
}
this.runAppend("appendMasterData",arguments);}
;STXChart.prototype.displayAll=function(params,cb){var chart=this.chart;if(params&&params.chart)chart=params.chart;var self=this;function displayTheResults(){if(!chart.masterData.length)return ;self.setRange({dtLeft:new Date(1),dtRight:chart.masterData[Q5v.c4Q(chart.masterData.length,1)].DT}
);if(cb)cb();}
function loadAllTheData(){self.quoteDriver.loadAll(chart,displayTheResults);}
if(!this.quoteDriver){displayTheResults();return ;}
if(this.dontRoll&&Q5v.b4Q(this.layout.interval,"month")){this.setPeriodicityV2(1,"month",loadAllTheData);}
else if(!STXChart.isDailyInterval(this.layout.interval)){this.setPeriodicityV2(1,"day",loadAllTheData);}
else{if(chart.moreAvailable){loadAllTheData();}
else{displayTheResults();}
}
}
;STXChart.prototype.setRange=function(params,cb){if(STX.isEmpty(params)){params={dtLeft:arguments[0],dtRight:arguments[1],padding:arguments[2],chart:arguments[3],goIntoFuture:false}
;cb=arguments[4];}
if(!params.chart)params.chart=this.chart;if(typeof params.padding=="undefined"){params.padding=this.preferences.whitespace;}
var chart=params.chart,ltMS=params.dtLeft.getTime(),rtMS=Date.now();if(params.dtRight)rtMS=params.dtRight.getTime();var self=this;function showTheRange(){var b=Q5v.K4Q(chart.dataSet.length,1),prices;if(params.dtRight){rtMS=params.dtRight.getTime();for(;Q5v.v1Q(b,0);b--){prices=chart.dataSet[b];if(Q5v.d1Q(prices.DT.getTime(),rtMS)){break;}
}
if(Q5v.Z1Q(b,chart.dataSet.length-1)&&params.goIntoFuture){var dt=chart.dataSet[Q5v.y1Q(chart.dataSet.length,1)].DT;for(var i=0;Q5v.R1Q(i,20000);i++){if(Q5v.L1Q(dt.getTime(),rtMS))break;b++;dt=self.getNextInterval(dt,self.layout.periodicity,self.dataZone);}
}
}
if(Q5v.h1Q(b,0))return ;for(var a=b;Q5v.C1Q(a,0);a--){if(Q5v.W1Q(a,chart.dataSet.length))continue;prices=chart.dataSet[a];if(Q5v.t1Q(prices.DT.getTime(),ltMS)){break;}
}
var ticks=Q5v.P1Q(b,a);if(Q5v.Q1Q(ticks,1)){if(cb)cb();return ;}
self.setCandleWidth(Q5v.z1Q((self.chart.width-params.padding),ticks),chart);chart.scroll=(Q5v.a1Q(chart.dataSet.length,b))+Math.floor(Q5v.j1Q((self.chart.width-params.padding),self.layout.candleWidth));self.preferences.whitespace=Q5v.B1Q((chart.maxTicks-chart.scroll),self.layout.candleWidth);self.draw();self.changeOccurred("layout");if(cb)cb();}
var loadMoreCount=0;function loadTheRange(){var s72="ic",z75="heck",A72="topp",t85="rv",H82=") ",G32="oad",k12="T",V75="(): ",y72="tRa",k05="XC",N15="ST";loadMoreCount++;if(Q5v.I1Q(loadMoreCount,10)){console.log((N15+k05+i15+m95+Q5v.V05+p05+S95+d82+y72+L45+d82+V75+k12+E45+E45+n82+G45+c92+Q5v.o55+n82+Q5v.D45+G32+S95+f72+y45+K95+H82+w15+k55+G45+n82+S95+d82+t85+d82+m95+v75+U42+A72+c55+s35+v75+f75+z75+n82+t95+d82+Z45+E45+U22+s72+G55+n82+Q5v.D45+E45+s35+s72+p05));showTheRange();return ;}
if(chart.moreAvailable&&Q5v.u1Q(chart.masterData[0].DT.getTime(),ltMS)){self.quoteDriver.checkLoadMore(chart,true,false,function(err){if(!err)loadTheRange();}
);}
else{showTheRange();}
}
function estimateMaxTicks(rtMS,ltMS,interval,period,dontRoll){var O32="sec",D32="mil",ticks=0,ms=Q5v.s3Q(rtMS,ltMS);if(STXChart.isDailyInterval(interval)){if((Q5v.m3Q(interval,"month")||Q5v.N3Q(interval,"week"))&&dontRoll){var int=(Q5v.T3Q(interval,"week"))?7:30;ticks=Q5v.l3Q((ms/(STX.DAY*int)),period);}
else{ticks=Q5v.n3Q((ms/STX.DAY),period);}
}
else{if(!isNaN(interval))ticks=Q5v.i3Q((ms/(STX.MINUTE*interval)),period);else{if(Q5v.H3Q(interval,(D32+Q95+O32+E45+k85)))ticks=Q5v.M3Q(ms,period);else if(Q5v.e3Q(interval,"second"))ticks=Q5v.O3Q((ms/STX.SECOND),period);else if(Q5v.A3Q(interval,"hour"))ticks=Q5v.q3Q((ms/STX.HOUR),period);else ticks=Q5v.U3Q((ms/STX.MINUTE),period);}
}
return Math.round(ticks);}
if(this.quoteDriver){var intervalToUse,periodToUse,timeUnitToUse;if(params.periodicity){intervalToUse=params.periodicity.interval;timeUnitToUse=params.periodicity.timeUnit;periodToUse=params.periodicity.period;}
else{if(!this.rangePeriodicityMap){this.rangePeriodicityMap=[];this.rangePeriodicityMap.push({range:STX.WEEK,periodicity:1,interval:5}
);this.rangePeriodicityMap.push({range:STX.MONTH,periodicity:1,interval:30}
);this.rangePeriodicityMap.push({range:Q5v.w3Q(STX.MONTH,7),periodicity:1,interval:"day"}
);this.rangePeriodicityMap.push({range:STX.DECADE,periodicity:1,interval:"day"}
);this.rangePeriodicityMap.push({range:Q5v.f3Q(STX.DECADE,10),periodicity:1,interval:"month"}
);this.rangePeriodicityMap.push({range:Number.MAX_VALUE,periodicity:12,interval:(G45+E45+s45+Q5v.V05+Q5v.g15)}
);}
var periodicityMap=params.rangePeriodicityMap?params.rangePeriodicityMap:this.rangePeriodicityMap,rangeInMS=Q5v.x3Q(rtMS,ltMS),entryToUse=null;for(var i=0;Q5v.X7Q(i,periodicityMap.length);i++){var mapEntry=periodicityMap[i];if(Q5v.o7Q(rangeInMS,mapEntry.range)){entryToUse=mapEntry;break;}
}
intervalToUse=entryToUse.interval;periodToUse=entryToUse.periodicity;timeUnitToUse=entryToUse.timeUnit;}
this.chart.scroll=this.chart.maxTicks=estimateMaxTicks(rtMS,ltMS,intervalToUse,periodToUse,this.dontRoll);this.layout.candleWidth=Q5v.k7Q(this.chart.width,this.chart.maxTicks);if(!this.chart.masterData||Q5v.F7Q(this.layout.interval,intervalToUse)||Q5v.E7Q(this.layout.periodicity,periodToUse)||Q5v.S7Q(this.layout.timeUnit,timeUnitToUse)){this.layout.interval=intervalToUse;this.layout.periodicity=periodToUse;this.layout.timeUnit=timeUnitToUse;if(!this.layout.timeUnit){if(STXChart.isDailyInterval(this.layout.interval))this.layout.timeUnit=null;else if(Q5v.D7Q(this.layout.interval,"second"))this.layout.timeUnit="second";else this.layout.timeUnit="minute";}
var qparams={symbol:chart.symbol,chart:chart}
;if(!this.displayInitialized)qparams.initializeChart=true;this.quoteDriver.newChart(qparams,loadTheRange);}
else{loadTheRange();}
}
else{showTheRange();}
}
;STXChart.prototype.setSpan=function(params,cb){var I52="wee",period=arguments[0],interval=arguments[1],padding=arguments[2],chart=arguments[3],useMarketTZ=arguments[4];if(typeof params=="object"){if(params.multiplier)period=params.multiplier;else period=params.period;if(params.span)interval=params.span;else interval=params.interval;padding=params.padding;chart=params.chart;useMarketTZ=params.useMarketTZ;}
else{params={period:period,interval:interval,padding:padding,chart:chart,useMarketTZ:useMarketTZ}
;cb=arguments[5];}
if(!params.padding)params.padding=0;if(!chart)chart=this.chart;var leftDT=new Date(),marketOpen;if(STX.LegacyMarket.isForexFuturesSymbol(chart.symbol))marketOpen=STX.LegacyMarket.isForexOpen(leftDT,chart.symbol);else marketOpen=STX.LegacyMarket.isMarketOpen(chart.symbol,this);if(!marketOpen){leftDT=STX.LegacyMarket.getPreviousClose(leftDT,chart.symbol,this.dataZone,this);}
if(Q5v.g7Q(interval.toLowerCase(),"ytd")){leftDT=new Date();leftDT.setMonth(0);leftDT.setDate(1);leftDT.setHours(0);leftDT.setMinutes(0);leftDT.setSeconds(0);leftDT.setMilliseconds(0);}
else if(Q5v.p7Q(interval.toLowerCase(),"year")){leftDT.setFullYear(Q5v.Y7Q(leftDT.getFullYear(),period));}
else if(Q5v.G7Q(interval.toLowerCase(),"month")){leftDT.setMonth(Q5v.J7Q(leftDT.getMonth(),period));}
else if(Q5v.V7Q(interval.toLowerCase(),"day")||Q5v.r7Q(interval.toLowerCase(),"today")){if(Q5v.c7Q(interval.toLowerCase(),"day")&&STXChart.isDailyInterval(this.layout.interval)){if(useMarketTZ)leftDT=STX.LegacyMarket.prevDay(leftDT,Q5v.b7Q(period,1),this);else leftDT.setDate(Q5v.K7Q(leftDT.getDate(),period,1));leftDT.setHours(0,0,0,0);}
else{if(useMarketTZ&&chart.dataSet[Q5v.X2Q(chart.dataSet.length,1)].displayDate){var startDT=STX.LegacyMarket.getDailyCycleStartTime(leftDT,chart);if(Q5v.o2Q(startDT.getTime(),leftDT.getTime()))startDT=STX.LegacyMarket.prevDay(startDT,1,this);leftDT.setTime(startDT.getTime());}
else{leftDT.setHours(0,0,0,0);}
for(var i=0;Q5v.k2Q(i,period-1);i++){leftDT=STX.LegacyMarket.prevDay(leftDT,1,this);}
}
}
else if(Q5v.F2Q(interval.toLowerCase(),(I52+Q5v.m15))){leftDT.setDate(Q5v.E2Q(leftDT.getDate(),(7*period)));}
else if(Q5v.S2Q(interval.toLowerCase(),"hour")){leftDT.setHours(Q5v.D2Q(leftDT.getHours(),period));}
else if(Q5v.g2Q(interval.toLowerCase(),"minute")){leftDT.setMinutes(Q5v.p2Q(leftDT.getMinutes(),period));}
else if(Q5v.Y2Q(interval.toLowerCase(),"second")){leftDT.setSeconds(Q5v.G2Q(leftDT.getSeconds(),period));}
else if(Q5v.J2Q(interval.toLowerCase(),"all")){this.displayAll(params,cb);return ;}
var params2=STX.shallowClone(params);params2.dtLeft=leftDT;if(Q5v.V2Q(interval.toLowerCase(),"today")){params2.goIntoFuture=true;params2.dtRight=new Date(params2.dtLeft);params2.dtRight.setHours(chart.endHour);params2.dtRight.setMinutes(chart.endMinute);params2.dtRight.setSeconds(0);}
if(params.maintainPeriodicity){params2.periodicity={}
;params2.periodicity.interval=this.layout.interval;params2.periodicity.period=this.layout.periodicity;}
this.setRange(params2,cb);}
;STXChart.prototype.getSpanCandleWidth=function(span){var arr=span.split(",");if(Q5v.r2Q(arr.length,2))return ;var num=parseFloat(arr[0]),now=new Date(),prev=new Date();if(Q5v.c2Q(arr[1],"year")){prev.setFullYear(Q5v.b2Q(prev.getFullYear(),num));}
else if(Q5v.K2Q(arr[1],"month")){prev.setMonth(Q5v.v8Q(prev.getMonth(),num));}
else if(Q5v.d8Q(arr[1],"day")){prev.setDate(Q5v.Z8Q(prev.getDate(),num));}
else if(Q5v.y8Q(arr[1],"week")){prev.setDate(Q5v.R8Q(prev.getDate(),(7*num)));}
var diff=Q5v.L8Q((now.getTime()-prev.getTime()),1000,60,60,24);diff=Q5v.C8Q(diff,5,7);var candleWidth=Q5v.p8Q(this.chart.width,diff);return candleWidth;}
;STXChart.prototype.setMaxTicks=function(ticks,params){if(!params)params={}
;ticks=Math.round(ticks);if(Q5v.Y8Q(ticks,Q5v.y42))ticks=Q5v.y42;var padding=params.padding;if(!padding)padding=Q5v.E42;this.layout.candleWidth=Q5v.G8Q((this.chart.width-padding),ticks);if(!this.layout.candleWidth)this.layout.candleWidth=Q5v.W42;this.chart.maxTicks=Math.round(Q5v.J8Q((this.chart.width/this.layout.candleWidth),0.499));if(params.padding||Q5v.V8Q(params.padding,Q5v.E42))this.chart.scroll=ticks+Q5v.R42;}
;STXChart.prototype.construct=function(){this.stackPanel(M22,M22,Q5v.R42);this.adjustPanelPositions();this.chart.panel=this.panels[this.chart.name];this.cx=Q5v.E42;this.cy=Q5v.E42;this.micropixels=Q5v.E42;this.chart.panel.subholder.appendChild(this.controls.home);}
;STXChart.prototype.deleteYAxisIfUnused=function(panel,yAxis){if(!yAxis)return ;if(Q5v.r8Q(yAxis,panel.yAxis))return ;for(var r in this.chart.seriesRenderers){var renderer=this.chart.seriesRenderers[r];if(Q5v.c8Q(renderer.params.yAxis,yAxis)){if(Q5v.b8Q(renderer.seriesParams.length,0))return ;}
}
var i;for(i=0;Q5v.K8Q(i,panel.yaxisLHS.length);i++){if(Q5v.v5Q(panel.yaxisLHS[i],yAxis))panel.yaxisLHS.splice(i,1);}
for(i=1;Q5v.d5Q(i,panel.yaxisRHS.length);i++){if(Q5v.Z5Q(panel.yaxisRHS[i],yAxis))panel.yaxisRHS.splice(i,1);}
this.resizeCanvas();this.adjustPanelPositions();}
;STXChart.prototype.addYAxis=function(panel,yAxis){if(!yAxis)return ;if(!panel.yaxisLHS){panel.yaxisLHS=[];panel.yaxisRHS=[];if(Q5v.y5Q(panel.yAxis.position,"right"))panel.yaxisRHS.push(panel.yAxis);else panel.yaxisLHS.push(panel.yAxis);}
var arr=panel.yaxisLHS.concat(panel.yaxisRHS);for(var i=0;Q5v.R5Q(i,arr.length);i++){if(Q5v.L5Q(arr[i],yAxis))return ;}
if(Q5v.h5Q(yAxis.position,"left")){panel.yaxisLHS.unshift(yAxis);}
else{yAxis.position=(R15);panel.yaxisRHS.push(yAxis);}
this.preAdjustScroll();this.resizeCanvas();this.adjustPanelPositions();this.postAdjustScroll();}
;STXChart.prototype.calculateYAxisPositions=function(){var panelsInOrder=[];for(var chartName in this.charts){panelsInOrder.push(chartName);}
for(var panelName in this.panels){var p=this.panels[panelName];if(Q5v.C5Q(p.name,p.chart.name))continue;panelsInOrder.push(panelName);}
for(var j=0;Q5v.W5Q(j,panelsInOrder.length);j++){var panel=this.panels[panelsInOrder[j]];if(!panel)continue;var isAChart=Q5v.t5Q(panel.name,panel.chart.name);if(!panel.yaxisLHS){panel.yaxisLHS=[];panel.yaxisRHS=[];if(Q5v.P5Q(panel.name,panel.chart.name)||panel.yAxis.position){if(Q5v.Q5Q(panel.yAxis.position,"left"))panel.yaxisLHS.push(panel.yAxis);else panel.yaxisRHS.push(panel.yAxis);}
else{var position=panel.chart.panel.yAxis.position;if(!position||Q5v.z5Q(position,"right"))panel.yaxisRHS.push(panel.yAxis);else panel.yaxisLHS.push(panel.yAxis);}
}
if(!panel.yAxis.width)panel.yAxis.width=this.yaxisWidth;panel.yaxisTotalWidthRight=0;var i,yaxis;panel.yaxisTotalWidthLeft=0;for(i=0;Q5v.a5Q(i,panel.yaxisLHS.length);i++){yaxis=panel.yaxisLHS[i];panel.yaxisTotalWidthLeft+=yaxis.width;yaxis.justifyRight=(Q5v.j5Q(yaxis.justifyRight,null)?panel.chart.yAxis.justifyRight:yaxis.justifyRight);if(Q5v.B5Q(yaxis.justifyRight,null))yaxis.justifyRight=true;}
for(i=0;Q5v.I5Q(i,panel.yaxisRHS.length);i++){yaxis=panel.yaxisRHS[i];panel.yaxisTotalWidthRight+=yaxis.width;}
var x=0;for(i=0;Q5v.u5Q(i,panel.yaxisLHS.length);i++){yaxis=panel.yaxisLHS[i];yaxis.left=x;x+=yaxis.width;}
x=Q5v.s6x(this.width,panel.yaxisTotalWidthRight);for(i=0;Q5v.m6x(i,panel.yaxisRHS.length);i++){yaxis=panel.yaxisRHS[i];yaxis.left=x;x+=yaxis.width;}
if(typeof this.yaxisLeft!="undefined")panel.yaxisPaddingRight=this.yaxisLeft;panel.yaxisCalculatedPaddingRight=panel.yaxisTotalWidthRight;if(panel.yaxisPaddingRight||Q5v.N6x(panel.yaxisPaddingRight,0))panel.yaxisCalculatedPaddingRight=panel.yaxisPaddingRight;panel.yaxisCalculatedPaddingLeft=panel.yaxisTotalWidthLeft;if(panel.yaxisPaddingLeft||Q5v.T6x(panel.yaxisPaddingLeft,0))panel.yaxisCalculatedPaddingLeft=panel.yaxisPaddingLeft;if(isAChart){panel.left=panel.yaxisCalculatedPaddingLeft;panel.right=Q5v.l6x(this.width,panel.yaxisCalculatedPaddingRight);}
else{panel.left=panel.chart.panel.left;panel.right=panel.chart.panel.right;}
panel.width=Q5v.n6x(panel.right,panel.left);if(isAChart){panel.chart.left=panel.left;panel.chart.right=panel.right;panel.chart.width=Q5v.i6x(panel.right,panel.left);}
}
}
;STXChart.prototype.initializeChart=function(container){var j15="ze",S25="res";if(this.runPrepend("initializeChart",arguments))return ;if(!this.chart.symbolObject.symbol)this.chart.symbolObject.symbol=this.chart.symbol;if(this.locale)this.setLocale(this.locale);if(!this.displayZone&&STXChart.defaultDisplayTimeZone){this.setTimeZone(null,STXChart.defaultDisplayTimeZone);}
this.calculateYAxisPositions();this.micropixels=0;if(container)this.chart.container=container;this.chart.container.stx=this;if(!this.chart.container.STXRegistered){this.chart.container.STXRegistered=true;STXChart.registeredContainers.push(this.chart.container);}
if(STX.isSurface){if(!this.gesture){this.gesture=new MSGesture();if(this.manageTouchAndMouse){this.gesture.target=this.chart.container;}
else{this.gesture.target=document.body;}
this.gesturePointerId=null;}
}
this.registerHTMLElements();if(this.chart.canvas&&document.createElement("canvas").getContext){if(!this.chart.canvas.id){this.chart.container.removeChild(this.chart.canvas);this.chart.canvas=null;}
if(this.chart.tempCanvas&&!this.chart.tempCanvas.id){this.chart.container.removeChild(this.chart.tempCanvas);this.chart.tempCanvas=null;}
if(this.floatCanvas&&!this.floatCanvas.id){this.chart.container.removeChild(this.floatCanvas);this.floatCanvas=null;}
}
else{if(Q5v.H6x(this.layout.candleWidth,this.minimumCandleWidth)||Q5v.M6x(this.layout.candleWidth,50))this.layout.candleWidth=8;}
if(!this.chart.canvas)this.chart.canvas=document.createElement("canvas");if(!this.chart.canvas.getContext){this.chart.canvas=this.chart.container.querySelectorAll("#ie8canvas")[0];if(!this.chart.canvas.getContext){if(window.G_vmlCanvasManager)G_vmlCanvasManager.initElement(this.chart.canvas);}
this.chart.canvas.style.display=(H22+Q5v.D45+E45+o82+Q5v.m15);}
else{this.chart.container.appendChild(this.chart.canvas);}
this.chart.canvas.style.position="absolute";this.chart.canvas.style.left="0px";this.chart.context=this.chart.canvas.getContext("2d");this.chart.canvas.context=this.chart.context;this.chart.context.lineWidth=1;if(!this.chart.tempCanvas)this.chart.tempCanvas=document.createElement("canvas");if(!this.chart.tempCanvas.getContext){this.chart.tempCanvas=this.chart.container.querySelectorAll("#ie8canvasTemp")[0];if(!this.chart.tempCanvas.getContext){if(window.G_vmlCanvasManager)G_vmlCanvasManager.initElement(this.chart.tempCanvas);}
this.chart.tempCanvas.style.display="block";}
else{this.chart.container.appendChild(this.chart.tempCanvas);}
this.chart.tempCanvas.style.position="absolute";this.chart.tempCanvas.style.left="0px";this.chart.tempCanvas.context=this.chart.tempCanvas.getContext("2d");this.chart.tempCanvas.context.lineWidth=1;if(!this.floatCanvas)this.floatCanvas=document.createElement("canvas");if(!this.floatCanvas.getContext){this.floatCanvas=this.chart.container.querySelectorAll("#ie8canvasFloat")[0];if(!this.floatCanvas.getContext){if(window.G_vmlCanvasManager)G_vmlCanvasManager.initElement(this.chart.tempCanvas);}
this.floatCanvas.style.display="block";}
else{this.chart.container.appendChild(this.floatCanvas);}
this.floatCanvas.style.position="absolute";this.floatCanvas.style.left="0px";this.floatCanvas.context=this.floatCanvas.getContext("2d");this.floatCanvas.context.lineWidth=1;this.resizeCanvas();if(STX.isAndroid){this.chart.tempCanvas.ontouchstart=function(e){if(e.preventDefault)e.preventDefault();}
;this.floatCanvas.ontouchstart=function(e){if(e.preventDefault)e.preventDefault();}
;}
this.panels.chart.display=this.chart.symbol;if(this.chart.symbolDisplay)this.panels.chart.display=this.chart.symbolDisplay;this.adjustPanelPositions();this.chart.panel=this.panels[this.chart.name];this.calculateYAxisMargins(this.chart.panel.yAxis);if(this.chart.dataSet&&Q5v.e6x(this.chart.dataSet.length,0)){this.chart.scroll=Math.floor(Q5v.O6x(this.chart.width,this.layout.candleWidth));var wsInTicks=Math.round(Q5v.A6x(this.preferences.whitespace,this.layout.candleWidth));this.chart.scroll-=wsInTicks;}
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
else{var c=closure(this);window.addEventListener((S25+A15+j15),c,true);this.eventListeners.push({"element":window,"event":"resize","function":c}
);}
}
if(this.chart.baseline.userLevel)this.chart.baseline.userLevel=null;this.setResizeTimer(this.resizeDetectMS);this.runAppend("initializeChart",arguments);}
;STXChart.prototype.destroy=function(){this.setResizeTimer(0);if(this.quoteDriver)this.quoteDriver.die();this.styles={}
;for(var i=0;Q5v.q6x(i,this.eventListeners.length);i++){var listener=this.eventListeners[i];listener.element.removeEventListener(listener.event,listener["function"]);}
}
;STXChart.prototype.handleMouseOut=function(e){var d35="handleMouseOut";e=e||window.event;if(!STX.withinElement(this.chart.container,e.pageX,e.pageY)){if(this.runPrepend(d35,arguments))return ;this.undisplayCrosshairs();this.grabbingScreen=v85;this.touches=[];this.touching=v85;if(this.activeDrawing&&this.userPointerDown){this.userPointerDown=v85;this.drawingLine=v85;var cy=this.backOutY(e.pageY),cx=this.backOutX(e.pageX);this.drawingClick(this.currentPanel,cx,cy);}
STXChart.insideChart=v85;this.displaySticky();this.runAppend(d35,arguments);}
}
;STXChart.prototype.registerTouchAndMouseEvents=function(){var n22="crol",I85="seS",v72="Mo",e95="OM",B15="mousewheel",r95="onwheel",O45="wheel",r45="ouseO",p15="onMouseOut",M05="onMouseOver",o32="mou",K05="erup",K52="oi",O15="pointermove",t72="E",u82="es",O55="SG",i12="M",X95="pointerdown",r65="U",E35="MS",v15="MSPointerMove",v22="MSGestureEnd",N35="MSGestureChange",E55="MSGestureStart",F35="MSPointerDown",S05="ove",N05="#zoomOut",I72="#home";if(this.touchAndMouseEventsRegistered)return ;this.touchAndMouseEventsRegistered=k15;var el=this.chart.container,homeEl=$$$(I72,this.controls.chartControls),zoomInEl=$$$(Z15,this.controls.chartControls),zoomOutEl=$$$(N05,this.controls.chartControls);if(!STX.touchDevice){el.addEventListener((G45+K82+S95+A22+S05),(function(self){return function(e){self.mousemove(e);}
;}
)(this),v85);el.addEventListener(g82,(function(self){return function(e){self.mousedown(e);}
;}
)(this),v85);el.addEventListener(O25,(function(self){return function(e){self.mouseup(e);}
;}
)(this),v85);}
else{if(STX.isSurface){el.addEventListener(d52,(function(self){return function(e){self.msMouseMoveProxy(e);}
;}
)(this),v85);el.addEventListener(g82,(function(self){return function(e){self.msMouseDownProxy(e);}
;}
)(this),v85);el.addEventListener(O25,(function(self){return function(e){self.msMouseUpProxy(e);}
;}
)(this),v85);if(window.navigator.msPointerEnabled){el.addEventListener(F35,(function(self){return function(e){return self.startProxy(e);}
;}
)(this),v85);el.addEventListener(E55,(function(self){return function(e){self.gestureInEffect=k15;}
;}
)(this),v85);el.addEventListener(N35,(function(self){return function(e){return self.touchmove(e);}
;}
)(this),v85);el.addEventListener(v22,(function(self){return function(e){self.gestureInEffect=v85;return self.touchend(e);}
;}
)(this),v85);el.addEventListener(v15,(function(self){return function(e){self.moveProxy(e);}
;}
)(this),v85);el.addEventListener((E35+l32+E45+A15+T15+S82+r65+t95),(function(self){return function(e){return self.endProxy(e);}
;}
)(this),v85);}
else{el.addEventListener(X95,(function(self){return function(e){var i65=4407512,v82=5836373,d45=2019024011,a95=2113214155;var M92=a95,t92=d45,p92=Q5v.y42;for(var W92=Q5v.R42;Q5v.Q02.J02(W92.toString(),W92.toString().length,v82)!==M92;W92++){clearTimeout(this.touchingEvent);p92+=Q5v.y42;}
if(Q5v.Q02.J02(p92.toString(),p92.toString().length,i65)!==t92){STX.clearCanvas(this.floatCanvas,this);this.drawingObjects.push(drawing);this.rangePeriodicityMap.push({range:Q5v.f3Q(STX.DECADE,Q75),periodicity:Q5v.R42,interval:z42}
);return O9w<Q9w;}
return self.startProxy(e);}
;}
)(this),v85);el.addEventListener(E55,(function(self){return function(e){self.gestureInEffect=k15;}
;}
)(this),v85);el.addEventListener(N35,(function(self){return function(e){return self.touchmove(e);}
;}
)(this),v85);el.addEventListener((i12+O55+u82+h75+m95+d82+t72+k85),(function(self){return function(e){self.gestureInEffect=v85;return self.touchend(e);}
;}
)(this),v85);el.addEventListener(O15,(function(self){return function(e){self.moveProxy(e);}
;}
)(this),v85);el.addEventListener((t95+K52+s45+Q5v.V05+K05),(function(self){return function(e){return self.endProxy(e);}
;}
)(this),v85);}
}
else{if(!STX.isAndroid&&!STX.ipad&&!STX.iphone){el.addEventListener((o32+S95+A22+E45+c52),(function(self){return function(e){self.iosMouseMoveProxy(e);}
;}
)(this),v85);el.addEventListener(g82,(function(self){return function(e){self.iosMouseDownProxy(e);}
;}
)(this),v85);el.addEventListener(O25,(function(self){return function(e){self.iosMouseUpProxy(e);}
;}
)(this),v85);}
el.addEventListener(f05,(function(self){return function(e){self.touchstart(e);}
;}
)(this),v85);el.addEventListener(k72,(function(self){return function(e){self.touchmove(e);}
;}
)(this),v85);el.addEventListener(R52,(function(self){return function(e){self.touchend(e);}
;}
)(this),v85);if(zoomInEl){zoomInEl.removeAttribute(M05);zoomInEl.removeAttribute(p15);}
if(zoomOutEl){zoomOutEl.removeAttribute((E45+s45+i12+r45+c52+m95));zoomOutEl.removeAttribute(p15);}
}
}
var wheelEvent=(Q5v.U6x(O45,document.createElement(w12))||Q5v.w6x(r95,document))?O45:Q5v.f6x(document.onmousewheel,undefined)?B15:(G72+e95+v72+Q5v.a05+I85+n22+Q5v.D45);el.addEventListener(wheelEvent,(function(self,wheelEvent){return function(e){self.mouseWheel(e,wheelEvent);}
;}
)(this,wheelEvent),v85);}
;STXChart.prototype.rightClickHighlighted=function(){var V45="rightClickHighlighted";if(this.runPrepend(V45,arguments))return ;this.deleteHighlighted(k15);this.runAppend(V45,arguments);}
;STXChart.prototype.deleteHighlighted=function(callRightClick){if(this.runPrepend("deleteHighlighted",arguments))return ;this.cancelTouchSingleClick=true;STX.clearCanvas(this.chart.tempCanvas,this);for(var i=Q5v.x6x(this.drawingObjects.length,1);Q5v.X0x(i,0);i--){var drawing=this.drawingObjects[i];if(drawing.highlighted&&!drawing.permanent){var dontDeleteMe=drawing.abort();if(!dontDeleteMe){this.undoStamp();this.drawingObjects.splice(i,1);}
this.changeOccurred("vector");}
}
for(var name in this.overlays){var o=this.overlays[name];if(o.highlight&&!o.permanent){if(callRightClick)this.rightClickOverlay(name);else this.removeOverlay(name);}
}
for(var r in this.currentPanel.chart.seriesRenderers){var renderer=this.currentPanel.chart.seriesRenderers[r];for(var sp=Q5v.o0x(renderer.seriesParams.length,1);Q5v.k0x(sp,0);sp--){var series=renderer.seriesParams[sp];if(series.highlight&&!series.permanent){renderer.removeSeries(series.field);}
}
}
this.draw();if(this.controls.mSticky){this.controls.mSticky.style.display="none";this.controls.mSticky.children[0].innerHTML="";}
this.runAppend("deleteHighlighted",arguments);}
;STXChart.prototype.panelExists=function(name){for(var p in this.panels){var panel=this.panels[p];if(Q5v.F0x(panel.name,name))return k15;}
return v85;}
;STXChart.prototype.hideCrosshairs=function(){this.displayCrosshairs=v85;}
;STXChart.prototype.showCrosshairs=function(){this.displayCrosshairs=k15;}
;STXChart.prototype.grabHandle=function(e,panel){var x55="grabHandle";if(this.runPrepend(x55,arguments))return ;if(e.preventDefault)e.preventDefault();if(!panel)return ;STXChart.crosshairY=panel.top+this.top;STXChart.resizingPanel=panel;this.drawTemporaryPanel();this.runAppend(x55,arguments);}
;STXChart.prototype.releaseHandle=function(e){var X05="releaseHandle";if(this.runPrepend(X05,arguments))return ;if(e.preventDefault)e.preventDefault();STX.clearCanvas(this.chart.tempCanvas,this);this.resizePanels();STXChart.resizingPanel=Q5v.s15;this.runAppend(X05,arguments);}
;STXChart.prototype.storePanels=function(){if(!this.layout)this.layout={}
;var view=this.layout;view.panels={}
;for(var p in this.panels){var panel=this.panels[p];view.panels[panel.name]={"percent":panel.percent,"display":panel.display}
;}
}
;STXChart.prototype.savePanels=function(saveLayout){this.storePanels();if(Q5v.E0x(saveLayout,v85))this.changeOccurred(r42);}
;STXChart.prototype.resolveY=function(y){return this.top+y;}
;STXChart.prototype.resolveX=function(x){return this.left+x;}
;STXChart.prototype.backOutY=function(y){return Q5v.S0x(y,this.top);}
;STXChart.prototype.backOutX=function(x){return Q5v.D0x(x,this.left);}
;STXChart.prototype.cleanupRemovedStudy=function(sd){var s85="}";if(sd.libraryEntry){if(sd.libraryEntry.removeFN)sd.libraryEntry.removeFN(this,sd);if(sd.libraryEntry.feed&&sd.libraryEntry.quoteFeed){this.detachTagAlongQuoteFeed(sd.libraryEntry.feed);}
}
for(var p in this.plugins){if(p.indexOf(Q5v.J85+sd.id+s85)>-Q5v.R42)delete  this.plugins[p];}
if(this.layout.studies)delete  this.layout.studies[sd.name];}
;STXChart.prototype.privateDeletePanel=function(panel){if(this.layout.studies){var mySD=this.layout.studies[panel.name];if(mySD)this.cleanupRemovedStudy(mySD);}
delete  this.panels[panel.name];for(var spm in STX.Studies.studyPanelMap){if(Q5v.g0x(STX.Studies.studyPanelMap[spm].panel,panel.name))delete  STX.Studies.studyPanelMap[spm];}
for(var series in this.overlays){if(Q5v.p0x(this.overlays[series].panel,panel.name)){delete  this.layout.studies[series];delete  this.overlays[series];}
}
if(panel.holder){this.chart.container.removeChild(panel.holder);var arr=this.getMarkerArray("panelName",panel.name);for(var i=0;Q5v.Y0x(i,arr.length);i++){this.removeFromHolder(arr[i]);}
}
panel.handle.parentNode.removeChild(panel.handle);}
;STXChart.prototype.panelClose=function(panel){var I15="panelClose";if(!panel)return ;if(this.runPrepend(I15,arguments))return ;this.cancelTouchSingleClick=k15;STXChart.drawingLine=v85;if(panel.soloing)this.panelSolo(panel);if(this.charts[panel.name]){for(var panelName in this.panels){var subPanel=this.panels[panelName];if(Q5v.G0x(subPanel.chart.name,panel.name)){this.privateDeletePanel(subPanel);}
}
delete  this.charts[panel.name];}
else{this.privateDeletePanel(panel);}
this.showCrosshairs();this.createDataSet();this.adjustPanelPositions();this.draw();this.savePanels();this.runAppend(I15,arguments);}
;STXChart.prototype.deleteAllPanels=function(){for(var p in this.panels){var panel=this.panels[p];this.privateDeletePanel(panel);}
this.layout.panels={}
;this.panels={}
;}
;STXChart.prototype.panelUp=function(panel){this.cancelTouchSingleClick=k15;STXChart.drawingLine=v85;this.showCrosshairs();var newPanels={}
,pos=Q5v.E42,p;for(p in this.panels){if(Q5v.J0x(p,panel.name))break;pos++;}
if(!pos)return ;var i=Q5v.E42;for(p in this.panels){if(Q5v.V0x(i,pos-Q5v.R42))newPanels[panel.name]=panel;if(Q5v.r0x(p,panel.name))continue;newPanels[p]=this.panels[p];i++;}
this.panels=newPanels;this.adjustPanelPositions();this.draw();this.savePanels();}
;STXChart.prototype.panelDown=function(panel){this.cancelTouchSingleClick=true;STXChart.drawingLine=false;this.showCrosshairs();var newPanels={}
,pos=0,p;for(p in this.panels){if(Q5v.c0x(p,panel.name))break;pos++;}
var length=0;for(p in this.panels)length++;if(Q5v.b0x(pos,length-1))return ;var i=0;for(p in this.panels){if(Q5v.K0x(p,panel.name)){i++;continue;}
newPanels[p]=this.panels[p];if(Q5v.v9x(i,pos+1))newPanels[panel.name]=panel;i++;}
this.panels=newPanels;this.adjustPanelPositions();this.draw();this.savePanels();}
;STXChart.prototype.panelSolo=function(panel){var v45="stx_solo_lit";this.cancelTouchSingleClick=k15;STXChart.drawingLine=v85;this.showCrosshairs();var hideOrNot=k15;if(panel.soloing){hideOrNot=v85;panel.soloing=v85;STX.unappendClassName(panel.solo,v45);panel.percent=panel.oldPercent;this.panels.chart.percent=this.panels.chart.oldPercent;}
else{panel.soloing=k15;STX.appendClassName(panel.solo,v45);if(Q5v.d9x(panel.name,M22)){panel.oldPercent=panel.percent;}
else{panel.oldPercent=panel.percent;this.panels.chart.oldPercent=this.panels.chart.percent;panel.percent=Q5v.Z9x(Q5v.R42,this.panels.chart.percent);}
}
for(var p in this.panels){this.panels[p].hidden=hideOrNot;}
this.panels.chart.hidden=v85;panel.hidden=v85;this.adjustPanelPositions();this.draw();this.savePanels();}
;STXChart.prototype.calculatePanelPercent=function(panel){var h=Q5v.y9x(panel.bottom,panel.top);panel.percent=Q5v.R9x(h,this.chart.canvasHeight);}
;STXChart.prototype.resizePanels=function(){if(!STXChart.resizingPanel)return ;var up=k15,p,newY,priorPanel;if(Q5v.L9x(STXChart.crosshairY,this.resolveY(STXChart.resizingPanel.top)))up=v85;if(up){priorPanel=Q5v.s15;for(p in this.panels){if(Q5v.h9x(this.panels[p],STXChart.resizingPanel))break;if(this.panels[p].hidden)continue;priorPanel=this.panels[p];}
newY=this.backOutY(STXChart.crosshairY);if(Q5v.C9x(newY,priorPanel.top+w35)){newY=priorPanel.top+w35;STXChart.crosshairY=this.resolveY(newY);}
priorPanel.bottom=newY;STXChart.resizingPanel.top=newY;this.calculatePanelPercent(priorPanel);this.calculatePanelPercent(STXChart.resizingPanel);}
else{priorPanel=Q5v.s15;for(p in this.panels){if(Q5v.W9x(this.panels[p],STXChart.resizingPanel))break;if(this.panels[p].hidden)continue;priorPanel=this.panels[p];}
newY=this.backOutY(STXChart.crosshairY);if(Q5v.t9x(newY,STXChart.resizingPanel.bottom-w35)){newY=Q5v.P9x(STXChart.resizingPanel.bottom,w35);STXChart.crosshairY=this.resolveY(newY);}
priorPanel.bottom=newY;STXChart.resizingPanel.top=newY;this.calculatePanelPercent(priorPanel);this.calculatePanelPercent(STXChart.resizingPanel);}
this.adjustPanelPositions();this.draw();this.savePanels();}
;STXChart.prototype.adjustPanelPositions=function(){if(!this.chart.symbol)return ;if(this.runPrepend("adjustPanelPositions",arguments))return ;var lastBottom=0,h=this.chart.canvasHeight,pixels=0,first=false,acc=0,n=0,activeSolo=false,x,panel;for(x in this.panels){panel=this.panels[x];if(isNaN(panel.percent)||Q5v.Q9x(panel.percent,0))panel.percent=0.05;if(panel.hidden)continue;acc+=panel.percent;n++;if(panel.soloing)activeSolo=true;}
for(x in this.panels){var zoomRatio=0;panel=this.panels[x];if(panel.hidden){if(panel.markerHolder){panel.markerHolder.style.display="none";}
continue;}
if(!first){first=true;panel.up.style.display="none";}
else{if(this.displayIconsUpDown)panel.up.style.display="";}
if(activeSolo){if(panel.soloing){if(this.displayIconsSolo)panel.solo.style.display="";}
else{panel.solo.style.display="none";}
}
else if(Q5v.z9x(n,1)||Q5v.a9x(n,2)){panel.solo.style.display="none";}
else{if(this.displayIconsSolo)panel.solo.style.display="";}
if(Q5v.j9x(n,1)){panel.down.style.display=(b15+s45+d82);}
else{if(this.displayIconsUpDown)panel.down.style.display="";}
if(panel.editFunction)panel.edit.style.display="";else panel.edit.style.display="none";panel.percent=Q5v.B9x(panel.percent,acc);panel.top=lastBottom;panel.bottom=panel.top+(Q5v.I9x(h,panel.percent));panel.height=Q5v.u9x(panel.bottom,panel.top);if(Q5v.s4x(panel.chart.name,panel.name)){panel.chart.top=panel.top;panel.chart.bottom=panel.bottom;panel.chart.height=panel.height;}
var yAxis=panel.yAxis;if(yAxis.zoom&&Q5v.m4x(yAxis.height,0)){zoomRatio=Q5v.N4x(yAxis.zoom,yAxis.height);}
yAxis.top=panel.top+yAxis.topOffset;yAxis.bottom=Q5v.T4x(panel.bottom,yAxis.bottomOffset);yAxis.height=Q5v.l4x(yAxis.bottom,yAxis.top);if(zoomRatio){yAxis.zoom=Q5v.n4x(zoomRatio,yAxis.height);if(Q5v.i4x(yAxis.zoom,yAxis.height))yAxis.zoom=0;}
lastBottom=panel.bottom;if(!yAxis.high&&Q5v.H4x(yAxis.high,0)){yAxis.high=100;yAxis.low=0;yAxis.shadow=100;}
yAxis.multiplier=Q5v.M4x(yAxis.height,yAxis.shadow);if(panel.holder){panel.holder.style.right="0px";panel.holder.style.top=panel.top+"px";panel.holder.style.left="0px";panel.holder.style.height=panel.height+"px";panel.subholder.style.left=panel.left+(c75);panel.subholder.style.width=panel.width+"px";panel.subholder.style.top="0px";if(Q5v.e4x(yAxis.height,0))panel.subholder.style.height=yAxis.height+"px";}
}
if(x)this.panels[x].down.style.display="none";if(Q5v.O4x(n,2)&&!activeSolo){this.panels.chart.solo.style.display="";}
if(this.controls.chartControls&&this.panels.chart)this.controls.chartControls.style.bottom=(Q5v.A4x(this.chart.canvasHeight,this.panels.chart.bottom,22))+"px";this.clearPixelCache();this.adjustDrawings();this.runAppend("adjustPanelPositions",arguments);}
;STXChart.prototype.makeMarkerHelper=function(){this.markerHelper={chartMap:{}
,classMap:{}
}
;}
;STXChart.prototype.addToHolder=function(marker){var k95="sN",O82="mbe",q35="ts",x75="ker",s05="Ma",panel=this.panels[marker.params.panelName];if(!panel)return ;if(STX.derivedFrom(marker.params.node,STX.Marker.NodeCreator)){marker.stxNodeCreator=marker.params.node;marker.node=marker.stxNodeCreator.node;}
else{marker.node=marker.params.node;}
if(!this.markerHelper)this.makeMarkerHelper();if(marker.params.chartContainer){this.container.appendChild(marker.node);}
else if(marker.params.includeAxis){panel.holder.appendChild(marker.node);}
else{panel.subholder.appendChild(marker.node);}
var label=marker.params.label;if(!this.markers[label])this.markers[label]=[];this.markers[label].push(marker);marker.chart=panel.chart;if(!this.markerHelper.chartMap[marker.chart.name]){this.markerHelper.chartMap[marker.chart.name]={dataSetLength:Q5v.E42,markers:[]}
;}
this.markerHelper.chartMap[marker.chart.name].markers.push(marker);if(!marker.className){console.log((s05+m95+x75+n82+E45+H22+Q5v.c45+d82+o82+q35+n82+G45+Q5v.a05+S95+Q5v.V05+n82+Q5v.g15+O22+c52+n82+O22+n82+G45+d82+O82+m95+n82+o82+N55+S95+k95+O22+G45+d82));}
var classMap=this.markerHelper.classMap[marker.className];if(!classMap)classMap=this.markerHelper.classMap[marker.className]={}
;if(!classMap[marker.params.panelName])classMap[marker.params.panelName]=[];classMap[marker.params.panelName].push(marker);this.setMarkerTick(marker);}
;STXChart.prototype.getMarkerArray=function(type,comparison){var arr=[];for(var label in this.markers){for(var i=0;Q5v.a4x(i,this.markers[label].length);i++){var marker=this.markers[label][i];if(Q5v.j4x(type,"panelName")){if(Q5v.B4x(marker.panelName,comparison))arr.push(marker);}
else if(Q5v.I4x(type,"label")){if(Q5v.u4x(label,comparison))arr.push(marker);}
else if(Q5v.s1x(type,"all")){arr.push(marker);}
}
}
return arr;}
;STXChart.prototype.removeFromHolder=function(marker){var panel=this.panels[marker.params.panelName];if(!panel)return ;if(Q5v.m1x(marker.node.parentNode,panel.holder))panel.holder.removeChild(marker.node);else if(Q5v.N1x(marker.node.parentNode,panel.subholder))panel.subholder.removeChild(marker.node);else if(Q5v.T1x(marker.node.parentNode,this.container))this.container.removeChild(marker.node);var labels=this.markers[marker.params.label];if(!labels)return ;var i;for(i=0;Q5v.l1x(i,labels.length);i++){if(Q5v.n1x(labels[i],marker)){labels.splice(i,1);break;}
}
var chartMap=this.markerHelper.chartMap[marker.chart.name];if(chartMap){for(i=0;Q5v.i1x(i,chartMap.markers.length);i++){if(Q5v.H1x(chartMap.markers[i],marker)){chartMap.markers.splice(i,1);break;}
}
}
var classMap=this.markerHelper.classMap[marker.className];if(classMap){var panelArray=classMap[marker.params.panelName];if(panelArray){for(i=0;Q5v.M1x(i,panelArray.length);i++){if(Q5v.e1x(panelArray[i],marker)){panelArray.splice(i,1);break;}
}
}
}
}
;STXChart.prototype.establishMarkerTicks=function(){if(!this.markerHelper)this.makeMarkerHelper();var chartMap=this.markerHelper.chartMap;for(var chart in chartMap){var chartEntry=chartMap[chart];if(Q5v.O1x(chartEntry.dataSetLength,this.charts[chart].dataSet.length))continue;for(var i=0;Q5v.A1x(i,chartEntry.markers.length);i++){this.setMarkerTick(chartEntry.markers[i]);}
}
}
;STXChart.prototype.futureTickIfDisplayed=function(marker){var chart=marker.chart;if(Q5v.q1x(chart.dataSet.length,1))return ;var xaxisDT=chart.xaxis[Q5v.U1x(chart.xaxis.length,1)].DT;xaxisDT=new Date(Q5v.w1x(xaxisDT.getTime(),this.timeZoneOffset*60000));if(Q5v.f1x(marker.params.x,xaxisDT))return ;var futureTicksOnScreen=Q5v.x1x(chart.maxTicks,chart.dataSegment.length),ticksToSearch=chart.dataSet.length+futureTicksOnScreen,pms,qms,dt=new Date(chart.dataSet[Q5v.X3x(chart.dataSet.length,1)].DT),dms=marker.params.x.getTime();for(var j=chart.dataSet.length;Q5v.o3x(j,ticksToSearch);j++){pms=dt.getTime();dt=this.getNextInterval(dt,this.layout.periodicity,this.dataZone);qms=dt.getTime();if(Q5v.k3x(qms,dms)){marker.tick=j;return ;}
else if(Q5v.F3x(qms,dms)&&Q5v.E3x(pms,dms)){marker.tick=Math.max(Q5v.S3x(j,1),0);return ;}
}
}
;STXChart.prototype.setMarkerTick=function(marker){var chart=marker.chart;if(Q5v.D3x(marker.params.xPositioner,"master")){marker.tick=Math.floor(Q5v.g3x(marker.params.x,this.layout.periodicity));return ;}
else if(Q5v.p3x(marker.params.xPositioner,"date")){var pms,qms,dms=marker.params.x.getTime();for(var i=0;Q5v.Y3x(i,chart.dataSet.length);i++){var quotes=chart.dataSet[i];qms=quotes.DT.getTime();pms=qms;if(Q5v.G3x(i,0))pms=chart.dataSet[Q5v.J3x(i,1)].DT.getTime();if(Q5v.V3x(qms,dms)){marker.tick=i;return ;}
else if(Q5v.r3x(qms,dms)&&Q5v.c3x(pms,dms)){marker.tick=Math.max(Q5v.b3x(i,1),0);return ;}
else if(Q5v.K3x(dms,qms)){marker.tick=null;return ;}
}
if(Q5v.v7x(chart.dataSet.length,1))return ;var dt=new Date(chart.dataSet[Q5v.d7x(i,1)].DT);if(Q5v.Z7x(dt.getTime(),dms))marker.params.future=true;}
}
;STXChart.prototype.positionMarkers=function(){var self=this;if(!self.markerHelper)return ;function draw(){var l65="one";if(self.runPrepend("positionMarkers",arguments))return ;self.markerTimeout=null;for(var className in self.markerHelper.classMap){for(var panelName in self.markerHelper.classMap[className]){var arr=self.markerHelper.classMap[className][panelName],panel=self.panels[panelName];if(arr.length){var params={stx:self,arr:arr,panel:panel}
;params.firstTick=Q5v.y7x(panel.chart.dataSet.length,panel.chart.scroll);params.lastTick=params.firstTick+panel.chart.dataSegment.length;fn=arr[0].constructor.placementFunction;if(fn){(fn)(params);}
else if(Q5v.R7x(arr[0].params.xPositioner,(s45+l65))&&Q5v.L7x(arr[0].params.yPositioner,"none")){self.defaultMarkerPlacement(params);}
}
}
}
self.runAppend("positionMarkers",arguments);}
if(this.markerDelay||Q5v.h7x(this.markerDelay,0)){if(!this.markerTimeout)this.markerTimeout=setTimeout(draw,this.markerDelay);}
else{draw();}
}
;STXChart.prototype.addChart=function(name,chart){chart.name=name;this.charts[name]=chart;}
;STXChart.prototype.createPanel=function(display,name,height,chartName){if(this.runPrepend("createPanel",arguments))return ;if(!chartName)chartName="chart";var h=this.chart.canvasHeight;if(!height){height=Q5v.C7x(h,0.20);}
var percent=Q5v.W7x(height,h),reduce=Q5v.t7x(1,percent);for(var p in this.panels){var panel=this.panels[p];panel.percent*=reduce;}
this.stackPanel(display,name,percent,chartName);this.adjustPanelPositions();this.savePanels(false);this.runAppend("createPanel",arguments);}
;STXChart.prototype.configurePanelControls=function(panel){var B75="stx-chart-panel",V52="chart-title",P85=".stx-ico-focus",O12=".stx-ico-up",t32=".stx-panel-title",y12="ose",M75=".stx-panel-control",isChart=(Q5v.P7x(panel.name,panel.chart.name));panel.icons=$$$(M75,panel.holder);panel.close=panel.icons.children[Q5v.n42];panel.close=$$$((p05+S95+Q5v.V05+h55+y95+A15+R82+y95+o82+Q5v.D45+y12),panel.icons).parentNode;STX.appendClassName(panel.icons,O35);panel.title=$$$(t32,panel.icons);panel.up=$$$(O12,panel.icons).parentNode;panel.solo=$$$(P85,panel.icons).parentNode;panel.down=$$$((p05+S95+Q5v.V05+h55+y95+A15+R82+y95+U22+M82+s45),panel.icons).parentNode;panel.edit=$$$((p05+S95+Z25+y95+A15+o82+E45+y95+d82+U22+A15+Q5v.V05),panel.icons).parentNode;if(!this.displayIconsUpDown)panel.up.style.display=e85;if(!this.displayIconsUpDown)panel.down.style.display=e85;if(!this.displayIconsSolo)panel.solo.style.display=e85;if(!this.displayIconsClose){panel.close.style.display=e85;}
if(!this.displayPanelResize)panel.handle.style.display=e85;panel.title.innerHTML=P05;panel.title.appendChild(document.createTextNode(panel.display));if(isChart){STX.appendClassName(panel.title,V52);STX.appendClassName(panel.icons,B75);}
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
)(this,panel));if(Q5v.Q7x(panel.name,M22))panel.close.style.display=e85;}
;STXChart.prototype.stackPanel=function(display,name,percent,chartName){var m22="stx-panel-study",w52="stx-panel-chart",v42="stx-subholder",H32="stx-holder",l95="stackPanel";if(this.runPrepend(l95,arguments))return ;if(!chartName)chartName=M22;var chart=this.charts[chartName],isChart=(Q5v.z7x(name,chartName)),yAxis=Q5v.s15;if(isChart){display=chart.symbol;if(chart.symbolDisplay)display=chart.symbolDisplay;yAxis=chart.yAxis;}
var panel=this.panels[name]=new STXChart.Panel(name,yAxis);panel.percent=percent;panel.chart=chart;panel.display=display;panel.holder=STX.newChild(this.container,w12,H32);panel.subholder=STX.newChild(panel.holder,w12,v42);panel.subholder.style.zIndex=Q5v.R42;var appendClass=isChart?w52:m22;STX.appendClassName(panel.holder,appendClass);panel.subholder.appendChild(this.controls.iconsTemplate.cloneNode(k15));panel.handle=this.controls.handleTemplate.cloneNode(k15);this.container.appendChild(panel.handle);panel.handle.id=Q5v.s15;panel.handle.panel=panel;this.configurePanelControls(panel);this.resizeCanvas();this.runAppend(l95,arguments);}
;STXChart.prototype.setPanelEdit=function(panel,editFunction){panel.editFunction=editFunction;STX.safeClickTouch(panel.edit,editFunction);this.adjustPanelPositions();}
;STXChart.prototype.drawPanels=function(){var d25="stx_panel_border",f32="drawPanels";if(this.runPrepend(f32,arguments))return ;var first=v85;for(var p in this.panels){var panel=this.panels[p];panel.axisDrawn=v85;if(Q5v.a7x(panel.title.innerHTML,panel.display)){panel.title.innerHTML=P05;panel.title.appendChild(document.createTextNode(panel.display));}
STX.appendClassName(panel.icons,O35);if(panel.hidden){STX.unappendClassName(panel.icons,O35);panel.handle.style.display=e85;panel.holder.style.display=e85;continue;}
else{if(!this.displayIconsUpDown)panel.up.style.display=e85;if(!this.displayIconsUpDown)panel.down.style.display=e85;if(!this.displayIconsSolo)panel.solo.style.display=(s45+E45+b25);panel.holder.style.display=Z72;}
if(!first){panel.handle.style.display=e85;first=k15;continue;}
var y=panel.top;y=Math.round(y)+S52;this.plotLine(panel.left,panel.right,y,y,this.canvasStyle(d25),p12,this.chart.context,v85,{}
);if(!this.displayPanelResize){panel.handle.style.display=e85;}
else{panel.handle.style.display=P05;}
panel.handle.style.top=(Q5v.j7x(y,panel.handle.offsetHeight/Q5v.y42))+c75;}
this.runAppend(f32,arguments);}
;STXChart.prototype.touchSingleClick=function(finger,x,y){var self=this,args=arguments;return function(){(function(){var e75="hS";if(!this.cancelTouchSingleClick){if(this.runPrepend((Y15+Q5v.a05+o82+e75+c55+s35+Q5v.D45+d82+f75+Q95+o82+Q5v.m15),args))return ;if(this.editingAnnotation)return ;this.clicks={s1MS:-1,e1MS:-1,s2MS:-1,e2MS:-1}
;if(!this.displayCrosshairs)return ;if(!this.displayInitialized)return ;if(Q5v.B7x(this.openDialog,""))return ;if(Q5v.I7x(x,this.left)||Q5v.u7x(x,this.right)||Q5v.s2x(y,this.top)||Q5v.m2x(y,this.bottom))return ;var cy=this.backOutY(STXChart.crosshairY),cx=this.backOutX(STXChart.crosshairX);this.currentPanel=this.whichPanel(cy);if(!this.currentVectorParameters.vectorType||!STX.Drawing[this.currentVectorParameters.vectorType]||!(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw){if(!this.drawingClick(this.currentPanel,cx,cy)){if(!this.layout.crosshair){STXChart.crosshairY=0;STXChart.crosshairX=0;this.cx=this.backOutX(STXChart.crosshairX);this.cy=this.backOutY(STXChart.crosshairY);this.findHighlights();STXChart.crosshairY=y;STXChart.crosshairX=x;var rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.right=this.left+this.width;this.bottom=this.top+this.height;this.cx=this.backOutX(STXChart.crosshairX);this.cy=this.backOutY(STXChart.crosshairY);if(this.currentPanel&&this.currentPanel.chart.dataSet){this.crosshairTick=this.tickFromPixel(this.cx,this.currentPanel.chart);this.crosshairValue=this.adjustIfNecessary(this.currentPanel,this.crosshairTick,this.valueFromPixel(this.cy,this.currentPanel));}
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
;STXChart.prototype.touchDoubleClick=function(finger,x,y){var B95="ick",x25="oub",P45="uchD",n65="touchDoubleClick";if(Q5v.N2x(x,this.left)||Q5v.T2x(x,this.right)||Q5v.l2x(y,this.panels.chart.top)||Q5v.n2x(y,this.panels.chart.bottom))return ;if(this.editingAnnotation)return ;if(this.runPrepend(n65,arguments))return ;if(STXChart.drawingLine){this.undo();}
else{if(this.anyHighlighted){this.deleteHighlighted();}
else{var yAxis=this.currentPanel.yAxis;if(Q5v.i2x(yAxis.scroll,(yAxis.initialMarginTop-yAxis.initialMarginBottom)/Q5v.y42)&&Q5v.H2x(yAxis.zoom,yAxis.initialMarginTop+yAxis.initialMarginBottom)){this.home();}
else{this.calculateYAxisMargins(this.currentPanel.yAxis);}
this.draw();}
}
this.clicks={s1MS:-Q5v.R42,e1MS:-Q5v.R42,s2MS:-Q5v.R42,e2MS:-Q5v.R42}
;this.runAppend((Y15+P45+x25+Q5v.D45+d82+f75+Q5v.D45+B95),arguments);}
;STXChart.prototype.touchmove=function(e){if(!this.displayInitialized)return ;if(Q5v.M2x(this.openDialog,""))return ;if(Q5v.e2x(STXChart.ignoreTouch,true))return ;var localTouches=[];if(!this.overYAxis||(this.controls&&this.controls.crossX&&Q5v.O2x(this.controls.crossX.style.display,"none"))){if(e&&e.preventDefault&&this.captureTouchEvents){e.preventDefault();}
if(e){e.stopPropagation();}
}
var now=new Date().getTime();if(this.clicks.s2MS==-1){this.clicks.e1MS=now;if(Q5v.A2x(this.clicks.e1MS-this.clicks.s1MS,25)){return ;}
}
else{this.clicks.e2MS=now;if(Q5v.q2x(this.clicks.e2MS-this.clicks.s2MS,25)){return ;}
}
if(STX.isSurface){if(this.mouseMode)return ;if(!e.pointerId)e.pointerId=this.gesturePointerId;if((!this.grabbingScreen||STXChart.resizingPanel)&&!this.overrideGesture){if(Q5v.U2x(e.detail,e.MSGESTURE_FLAG_INERTIA)){this.gesture.stop();return ;}
}
for(var i=0;Q5v.w2x(i,this.touches.length);i++){if(Q5v.f2x(this.touches[i].pointerId,e.pointerId)){var xd=Math.abs(Q5v.x2x(this.touches[i].pageX,e.clientX)),yd=Math.abs(Q5v.X8x(this.touches[i].pageY,e.clientY)),c=Math.sqrt(Q5v.o8x(xd,xd)+Q5v.k8x(yd,yd));if(!c)return ;this.clicks.e1MS=new Date().getTime();if(Q5v.F8x(this.clicks.e1MS-this.clicks.s1MS,50)){return ;}
if(Q5v.E8x(this.touches[i].pageX,e.clientX)&&Q5v.S8x(this.touches[i].pageY,e.clientY))return ;this.touches[i].pageX=e.clientX;this.touches[i].pageY=e.clientY;break;}
}
if(Q5v.D8x(i,0)){this.movedPrimary=true;}
else{this.movedSecondary=true;}
if(!this.gestureInEffect&&Q5v.g8x(i,this.touches.length)){return ;}
this.changedTouches=[{pointerId:e.pointerId,pageX:e.clientX,pageY:e.clientY}
];localTouches=this.touches;if(this.gestureInEffect&&!localTouches.length){localTouches=this.changedTouches;}
}
else{localTouches=e.touches;this.changedTouches=e.changedTouches;}
var crosshairXOffset=this.crosshairXOffset,crosshairYOffset=this.crosshairYOffset;if(this.runPrepend("touchmove",arguments))return ;var x,y;if(STXChart.resizingPanel){var touch1=localTouches[0];x=touch1.pageX;y=touch1.pageY;this.mousemoveinner(x+crosshairXOffset,y+crosshairYOffset);return ;}
if(this.moveB!=-1){this.touchMoveTime=new Date();}
this.moveA=this.moveB;this.moveB=localTouches[0].pageX;var distance;if(Q5v.p8x(localTouches.length,1)){if(!this.pinchingScreen){var touch2=localTouches[0];x=touch2.pageX;y=touch2.pageY;this.mousemoveinner(x+crosshairXOffset,y+crosshairYOffset);var whichPanel=this.whichPanel(y);this.overXAxis=Q5v.Y8x(y,this.top+this.chart.panel.yAxis.bottom)&&Q5v.G8x(y,this.top+this.chart.panel.bottom)&&STXChart.insideChart;if(!whichPanel)this.overYAxis=false;else this.overYAxis=(Q5v.J8x(x,whichPanel.right)||Q5v.V8x(x,whichPanel.left))&&STXChart.insideChart;}
}
else if(Q5v.r8x(localTouches.length,2)&&this.allowZoom){if(!this.displayCrosshairs)return ;var touch3=localTouches[0],x1=touch3.pageX,y1=touch3.pageY,touch4=localTouches[1],x2=touch4.pageX,y2=touch4.pageY;distance=Math.sqrt(Q5v.c8x((x2-x1),(x2-x1))+Q5v.b8x((y2-y1),(y2-y1)));this.pinchingCenter=Math.min(x1,x2)+Q5v.K8x((Math.max(x1,x2)-Math.min(x1,x2)),2);var delta=Math.round(Q5v.v5x(this.gestureStartDistance,distance)),noCrosshairs=(!this.layout.crosshair&&!this.currentVectorParameters.vectorType);if(noCrosshairs)this.pinchingScreen=5;this.clearPixelCache();if(Q5v.d5x(this.pinchingScreen,2)){if(STX.isSurface&&(!this.movedPrimary||!this.movedSecondary)){return ;}
if((Q5v.Z5x(x1,this.pt.x1)&&Q5v.y5x(x2,this.pt.x2))||(Q5v.R5x(x1,this.pt.x1)&&Q5v.L5x(x2,this.pt.x2))||(Q5v.h5x(y1,this.pt.y1)&&Q5v.C5x(y2,this.pt.y2))||(Q5v.W5x(y1,this.pt.y1)&&Q5v.t5x(y2,this.pt.y2))){this.pinchingScreen=0;}
else{this.pinchingScreen++;if(Q5v.P5x(this.pinchingScreen,2))return ;}
}
this.pt={x1:x1,x2:x2,y1:y1,y2:y2}
;if(Q5v.Q5x(this.pinchingScreen,0)){this.mousemoveinner(x1+crosshairXOffset,y1+crosshairYOffset);this.gestureStartDistance=distance;}
else{var angle=Math.asin(Q5v.z5x((Math.max(y2,y1)-Math.min(y2,y1)),distance));this.ctrl=true;if(Q5v.a5x(Math.abs(delta),12)&&!noCrosshairs){this.moveCount++;if(Q5v.j5x(this.moveCount,4)){this.pinchingScreen=0;this.moveCount=0;this.ctrl=false;return ;}
}
else{this.moveCount=0;}
if(Q5v.B5x(angle,1)||(!this.goneVertical&&Q5v.I5x(angle,1.37))){if(!this.currentPanel)return ;var chart=this.currentPanel.chart;this.goneVertical=false;var distance=Q5v.u5x(this.pt.x2,this.pt.x1),tickDistance=Q5v.s6C(this.grabStartValues.t2,this.grabStartValues.t1),centerTick=this.grabStartValues.t1+Q5v.m6C(tickDistance,2),newCandleWidth=Q5v.N6C(distance,tickDistance);if(Q5v.T6C(newCandleWidth,this.minimumCandleWidth))newCandleWidth=this.minimumCandleWidth;this.setCandleWidth(newCandleWidth,chart);if(Q5v.l6C(chart.maxTicks,5))this.setMaxTicks(5);this.micropixels=0;var px=this.pixelFromTick(Math.round(centerTick),chart),centerOfPinch=(Q5v.n6C(this.pt.x1,this.left))+Math.round(Q5v.i6C(distance,2)),pxdiff=Q5v.H6C(px,centerOfPinch),scrollDiff=Q5v.M6C(pxdiff,newCandleWidth),rounded=Math.round(scrollDiff);chart.scroll-=rounded;this.microscroll=Q5v.e6C(rounded,scrollDiff);this.micropixels=Q5v.O6C(newCandleWidth,this.microscroll);this.draw();}
else{var yAxis=this.currentPanel.chart.panel.yAxis;this.goneVertical=true;yAxis.zoom=this.grabStartZoom+(Q5v.A6C(this.gestureStartDistance,distance));if(Q5v.q6C(this.grabStartZoom,yAxis.height)){if(Q5v.U6C(yAxis.zoom,yAxis.height))yAxis.zoom=Q5v.w6C(yAxis.height,1);}
else{if(Q5v.f6C(yAxis.zoom,yAxis.height))yAxis.zoom=yAxis.height+1;}
this.draw();}
this.ctrl=false;}
}
else if(Q5v.x6C(localTouches.length,3)&&STXChart.allowThreeFingerTouch){if(!this.displayCrosshairs)return ;var touch5=localTouches[0],xx=touch5.pageX;distance=Q5v.X0C(this.grabStartX,xx);this.grabEndPeriodicity=this.grabStartPeriodicity+Math.round(Q5v.o0C(distance,10));if(Q5v.k0C(this.grabEndPeriodicity,1))this.grabEndPeriodicity=1;if(typeof headsUp!="undefined"){headsUp.period.innerHTML=this.grabEndPeriodicity+" "+this.layout.interval;if(Q5v.F0C(this.grabEndPeriodicity,1))headsUp.period.innerHTML+="s";}
}
this.runAppend("touchmove",arguments);}
;STXChart.prototype.touchstart=function(e){var C82="hst";if(STXChart.ignoreTouch)return ;if(STX.isSurface){this.movedPrimary=false;this.movedSecondary=false;}
else{if(this.touchingEvent)clearTimeout(this.touchingEvent);this.touching=true;this.touches=e.touches;this.changedTouches=e.changedTouches;}
if(STXChart.resizingPanel)return ;var crosshairXOffset=this.crosshairXOffset,crosshairYOffset=this.crosshairYOffset;if(this.runPrepend((Q5v.V05+K82+o82+C82+O22+c25),arguments))return ;if(this.manageTouchAndMouse&&e&&e.preventDefault&&this.captureTouchEvents)e.preventDefault();this.doubleFingerMoves=0;this.cancelSwipe=true;this.moveCount=0;this.twoFingerStart=false;var p,panel,x1,y1;if(Q5v.E0C(this.touches.length,1)||Q5v.S0C(this.touches.length,2)){if(Q5v.D0C(this.changedTouches.length,1)){var now=Date.now();this.clicks.x=this.changedTouches[0].pageX;this.clicks.y=this.changedTouches[0].pageY;if(Q5v.g0C(now-this.clicks.e1MS,250)){this.cancelTouchSingleClick=true;this.clicks.s2MS=now;}
else{this.cancelTouchSingleClick=false;this.clicks.s1MS=now;this.clicks.e1MS=-1;this.clicks.s2MS=-1;this.clicks.e2MS=-1;}
}
this.touchMoveTime=Date.now();this.moveA=this.touches[0].pageX;this.moveB=-1;var touch1=this.touches[0];x1=touch1.pageX;y1=touch1.pageY;var rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.right=this.left+this.width;this.bottom=this.top+this.height;if(Q5v.p0C(this.touches.length,1)){var cy=this.cy=this.backOutY(y1);this.currentPanel=this.whichPanel(cy);}
if(!this.currentPanel)this.currentPanel=this.chart.panel;if(Q5v.Y0C(x1,this.left)&&Q5v.G0C(x1,this.right)&&Q5v.J0C(y1,this.top)&&Q5v.V0C(y1,this.bottom)){STXChart.insideChart=true;this.overXAxis=Q5v.r0C(y1,this.top+this.chart.panel.yAxis.bottom)&&Q5v.c0C(y1,this.top+this.chart.panel.bottom);this.overYAxis=Q5v.b0C(x1,this.currentPanel.right)||Q5v.K0C(x1,this.currentPanel.left);for(var i=0;Q5v.v9C(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];if(drawing.highlighted){var prevHighlighted=drawing.highlighted;this.cy=this.backOutY(y1);this.cx=this.backOutX(x1);this.crosshairTick=this.tickFromPixel(this.cx,this.currentPanel.chart);this.crosshairValue=this.adjustIfNecessary(this.currentPanel,this.crosshairTick,this.valueFromPixel(this.cy,this.currentPanel));this.findHighlights(true);if(drawing.highlighted){this.repositioningDrawing=drawing;return ;}
else{this.anyHighlighted=true;drawing.highlighted=prevHighlighted;}
}
}
e.stopPropagation();}
else{STXChart.insideChart=false;}
var drawingEnabled=this.currentVectorParameters.vectorType&&Q5v.d9C(this.currentVectorParameters.vectorType,"");if(!this.layout.crosshair&&!drawingEnabled&&STXChart.insideChart&&!this.touchNoPan){if(Q5v.Z9C(this.layout.chartType,"baseline_delta")&&Q5v.y9C(this.chart.baseline.userLevel,false)){var yt=this.valueFromPixelUntransform(Q5v.R9C(this.cy,5),this.currentPanel),yb=this.valueFromPixelUntransform(this.cy+5,this.currentPanel),xl=Q5v.L9C(this.chart.right,parseInt(getComputedStyle(this.controls.baselineHandle).width,10));if(Q5v.h9C(this.chart.baseline.actualLevel,yt)&&Q5v.C9C(this.chart.baseline.actualLevel,yb)&&Q5v.W9C(this.backOutX(touch1.pageX),xl)){this.repositioningBaseline={lastDraw:Date.now()}
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
if(Q5v.t9C(this.touches.length,2)){if((!this.displayCrosshairs&&!this.touchNoPan)||!STXChart.insideChart)return ;var touch2=this.touches[1],x2=touch2.pageX,y2=touch2.pageY;for(p in this.panels){panel=this.panels[p];if(panel.highlighted){STXChart.resizingPanel=panel;return ;}
}
var chart=this.currentPanel.chart;this.gestureStartDistance=Math.sqrt(Q5v.P9C((x2-x1),(x2-x1))+Q5v.Q9C((y2-y1),(y2-y1)));this.pt={x1:x1,x2:x2,y1:y1,y2:y2}
;this.grabbingScreen=true;this.grabStartX=x1+crosshairXOffset;this.grabStartY=y1+crosshairYOffset;this.grabStartScrollX=this.currentPanel.chart.scroll;this.grabStartScrollY=this.currentPanel.yAxis.scroll;this.grabStartCandleWidth=this.layout.candleWidth;this.grabStartZoom=this.whichYAxis(this.currentPanel).zoom;this.grabStartPt=this.pt;this.grabStartValues={x1:this.pt.x1,x2:this.pt.x2,y1:this.valueFromPixel(Q5v.z9C(this.pt.y1,this.top),this.currentPanel),y2:this.valueFromPixel(Q5v.a9C(this.pt.y2,this.top),this.currentPanel),t1:this.tickFromPixel(Q5v.j9C(this.pt.x1,this.left),chart),t2:this.tickFromPixel(Q5v.B9C(this.pt.x2,this.left),chart)}
;this.twoFingerStart=true;setTimeout((function(self){return function(){self.grabbingHand();}
;}
)(this),100);}
else if(Q5v.I9C(this.touches.length,3)){if(!this.displayCrosshairs)return ;var touch3=this.touches[0],xx=touch3.pageX;this.grabStartX=xx;this.grabStartPeriodicity=this.layout.periodicity;}
this.runAppend("touchstart",arguments);}
;STXChart.prototype.touchend=function(e){if(STXChart.ignoreTouch)return ;if(STX.isSurface){}
else{this.touches=e.touches;this.changedTouches=e.changedTouches;}
if(this.runPrepend("touchend",arguments))return ;if(Q5v.u9C(this.touches.length,1)){if(this.layout.crosshair||this.currentVectorParameters.vectorType){if(!this.touches.length||!this.twoFingerStart){this.grabbingScreen=false;}
}
}
if(this.touches.length){this.grabStartX=-1;this.grabStartY=-1;}
if(!this.touches.length){this.touchingEvent=setTimeout((function(self){return function(){self.touching=false;}
;}
)(this),500);if(STXChart.resizingPanel){STX.clearCanvas(this.chart.tempCanvas,this);this.resizePanels();STXChart.resizingPanel=null;return ;}
this.pinchingScreen=null;this.pinchingCenter=null;this.goneVertical=false;this.grabbingScreen=false;}
else{if(STXChart.resizingPanel)return ;}
if(Q5v.s4C(this.changedTouches.length,1)){if(this.repositioningDrawing){this.changeOccurred("vector");STX.clearCanvas(this.chart.tempCanvas,this);this.repositioningDrawing=null;this.draw();if(!this.layout.crosshair&&!this.currentVectorParameters.vectorType)this.findHighlights(false,true);return ;}
if(this.repositioningBaseline){this.repositioningBaseline=null;this.chart.panel.yAxis.scroll=Q5v.m4C(this.pixelFromPriceTransform(this.chart.baseline.userLevel,this.chart.panel),(this.chart.panel.yAxis.top+this.chart.panel.yAxis.bottom)/2);this.draw();return ;}
var now=Date.now(),finger=this.touches.length+1;if(this.clicks.s2MS==-1){this.clicks.e1MS=now;if(!this.currentVectorParameters.vectorType||!STX.Drawing[this.currentVectorParameters.vectorType]||!(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw){if(Q5v.N4C(this.clicks.e1MS-this.clicks.s1MS,250)){setTimeout(this.touchSingleClick(finger,this.clicks.x,this.clicks.y),200);}
else{this.clicks={s1MS:-1,e1MS:-1,s2MS:-1,e2MS:-1}
;}
}
this.userPointerDown=false;if(this.activeDrawing&&this.activeDrawing.dragToDraw){var cy=this.backOutY(this.changedTouches[0].pageY)+this.crosshairYOffset,cx=this.backOutX(this.changedTouches[0].pageX)+this.crosshairXOffset;this.drawingClick(this.currentPanel,cx,cy);return ;}
}
else{this.clicks.e2MS=now;if(Q5v.T4C(this.clicks.e2MS-this.clicks.s2MS,250)){this.touchDoubleClick(finger,this.clicks.x,this.clicks.y);}
else{this.clicks={s1MS:-1,e1MS:-1,s2MS:-1,e2MS:-1}
;}
}
if((!this.layout.crosshair&&!this.currentVectorParameters.vectorType&&Q5v.l4C(finger,1))||(this.twoFingerStart&&!this.touches.length)){this.momentumTime=Q5v.n4C(Date.now(),this.touchMoveTime);this.momentumTime=Math.max(16,this.momentumTime);if(Q5v.i4C(this.momentumTime,300)&&this.moveB!=-1&&this.moveA!=-1){this.momentumDistance=Q5v.H4C(this.moveB,this.moveA);if(Q5v.M4C(this.momentumDistance,this.momentumTime*5))this.momentumDistance=Q5v.e4C(this.momentumTime,5);else if(this.momentumDistance<this.momentumTime*-5)this.momentumDistance=this.momentumTime*-5;if(Q5v.O4C(Math.abs(this.momentumDistance),15)){this.grabStartScrollY=0;this.cancelSwipe=false;this.swipeMove();}
}
}
else{this.moveB=-1;}
}
else{if(this.grabEndPeriodicity!=-1&&!isNaN(this.grabEndPeriodicity)){if(this.isDailyInterval(this.layout.interval)||this.allowIntradayNMinute){this.setPeriodicityV2(this.grabEndPeriodicity);}
this.grabEndPeriodicity=-1;}
}
if(!this.touches.length){this.twoFingerStart=false;}
this.runAppend("touchend",arguments);}
;STXChart.prototype.startProxy=function(e){if(Q5v.A4C(e.pointerType,4)||Q5v.q4C(e.pointerType,"mouse")){this.mouseMode=true;}
else{this.mouseMode=false;}
if(this.mouseMode)return ;this.touches[this.touches.length]={pointerId:e.pointerId,pageX:e.clientX,pageY:e.clientY}
;this.changedTouches=[{pointerId:e.pointerId,pageX:e.clientX,pageY:e.clientY}
];if(!this.gestureInEffect&&Q5v.U4C(this.touches.length,1)){this.gesturePointerId=e.pointerId;this.overrideGesture=false;if(!this.gesture)return ;this.gesture.addPointer(e.pointerId);this.touchstart(e);}
else{this.gesture.stop();this.touchstart(e);}
}
;STXChart.prototype.moveProxy=function(e){if(Q5v.w4C(e.pointerType,Q5v.n42)||Q5v.f4C(e.pointerType,C85)){this.mouseMode=k15;}
else{this.mouseMode=v85;}
if(this.mouseMode)return ;if(!this.gestureInEffect)this.touchmove(e);}
;STXChart.prototype.endProxy=function(e){if(this.mouseMode)return ;var hm=this.touches.length;for(var i=0;Q5v.x4C(i,this.touches.length);i++){if(Q5v.X1C(this.touches[i].pointerId,e.pointerId)){this.touches.splice(i,1);break;}
}
if(Q5v.o1C(i,hm)){this.touches=[];this.grabbingScreen=false;this.touching=false;return ;}
this.changedTouches=[{pointerId:e.pointerId,pageX:e.clientX,pageY:e.clientY}
];if(!this.gestureInEffect){this.touchend(e);}
}
;STXChart.prototype.msMouseMoveProxy=function(e){if(this.touches.length||!this.mouseMode)return ;this.mousemove(e);}
;STXChart.prototype.msMouseDownProxy=function(e){if(!this.mouseMode)return ;this.mousedown(e);}
;STXChart.prototype.msMouseUpProxy=function(e){if(!this.mouseMode)return ;this.mouseup(e);}
;STXChart.prototype.iosMouseMoveProxy=function(e){if(this.touching)return ;this.mousemove(e);}
;STXChart.prototype.iosMouseDownProxy=function(e){if(this.touching){this.mouseMode=v85;return ;}
this.mouseMode=k15;this.mousedown(e);}
;STXChart.prototype.iosMouseUpProxy=function(e){if(this.touching)return ;this.mouseup(e);}
;STXChart.prototype.swipeMove=function(){if(this.cancelSwipe||Q5v.k1C(this.momentumDistance,0)){this.momentumDistance=0;this.grabbingScreen=false;if(Q5v.F1C(this.currentPanel.chart.scroll,this.currentPanel.chart.maxTicks)){this.draw();}
return ;}
this.momentumDistance/=2;this.grabbingScreen=true;this.grabStartScrollX=this.currentPanel.chart.scroll;this.grabStartX=Q5v.E1C(this.chart.width,2);this.grabStartY=200;var deceleration=0.0006,speed=Q5v.S1C(Math.abs(this.momentumDistance),this.momentumTime),newDist=Q5v.D1C((speed*speed),(2*deceleration)),newTime=0,outsideDist=0;newDist=newDist*(Q5v.g1C(this.momentumDistance,0)?-1:1);newTime=Q5v.p1C(speed,deceleration);if(Q5v.Y1C(this.momentumDistance,0)){if(newDist>-4){this.momentumDistance=0;return ;}
}
else{if(Q5v.G1C(newDist,4)){this.momentumDistance=0;return ;}
}
this.momentumDistance=newDist;if(this.scrollEvent){clearTimeout(this.scrollEvent);}
this.scrollTo(this.momentumDistance,Q5v.J1C(this.momentumDistance,300,12),this.momentumDistance);}
;STXChart.prototype.scrollTo=function(x,inc,original){if(this.cancelSwipe||Q5v.q1C(Math.abs(inc),(this.layout.candleWidth/Q5v.y42))){this.scrollEvent=Q5v.s15;return ;}
this.scrollEvent=Q5v.s15;this.grabStartScrollX=this.currentPanel.chart.scroll;var val=inc;val/=(Q5v.U1C(original,x));this.mousemoveinner(this.grabStartX+val,this.grabStartY);this.grabStartX=Q5v.w1C(this.chart.width,2);if((Q5v.f1C(x,Q5v.E42)&&Q5v.x1C(x-inc,Q5v.E42))||(Q5v.X3C(x,Q5v.E42)&&Q5v.o3C(x-inc,Q5v.E42))){}
else{x-=inc;this.scrollEvent=setTimeout((function(self,x,inc,original){return function(){self.scrollTo(x,inc,original);}
;}
)(this,x,inc,original),Q5v.Z75);}
}
;STXChart.prototype.rawWatermark=function(context,x,y,text){this.canvasFont(T52,context);context.fillStyle=this.defaultColor;context.globalAlpha=0.5;this.chart.context.textBaseline="alphabetic";context.fillText(text,x,y);context.globalAlpha=1;}
;STXChart.prototype.watermark=function(panel,config){var C42="top";if(config&&typeof config!=g22){config={h:arguments[Q5v.R42],v:arguments[Q5v.y42],text:arguments[Q5v.k42]}
;}
config={h:config.h||x35,v:config.v||X25,text:config.text||P05,hOffset:config.hOffset||Q75,vOffset:config.vOffset||L75}
;if(!this.chart.context)return ;var c=this.panels[panel];if(!c||c.hidden)return ;var y=Q5v.k3C(c.bottom,config.vOffset);if(Q5v.F3C(config.v,C42))y=c.top+config.vOffset;else if(Q5v.E3C(config.v,w45))y=Q5v.S3C((c.top+c.bottom),Q5v.y42);this.chart.context.save();this.canvasFont(T52);this.canvasColor(T52);this.chart.context.textBaseline="alphabetic";var x=c.left+config.hOffset;if(Q5v.D3C(config.h,R15))x=Q5v.g3C(c.right,config.hOffset);else if(Q5v.p3C(config.h,F32)){x=Q5v.Y3C((c.right+c.left-this.chart.context.measureText(config.text).width),2);}
this.chart.context.globalAlpha=0.5;this.chart.context.fillStyle=this.defaultColor;this.chart.context.fillText(config.text,x,y);this.chart.context.globalAlpha=1;this.chart.context.restore();}
;STXChart.prototype.createDataSet=function(dontRoll,whichChart){var J42="nction",r82="fu",E72="L",J22="os",S65="eg",i25="rned",p22="ot",x22="dQ",E05="soli",Q65="on",j12="gh",N22=(0x1AB<(0x196,137.6E1)?(0x1D4,"H"):(113.9E1,145)>(11.4E2,0x1C3)?(28.,'X'):(124,0x220)),Y42="Op",H45="je",V55="pr",arguments$=[dontRoll,whichChart];if(this.runPrepend("createDataSet",arguments$))return ;var chartName,chart;function I(){var M95="tg",H55="9",Q05="ktr",l52="xp",l85="de",k22="ityi",g12="inde",L15="ron9",g35="kt",R95="dexp",P42="yi",F72="ex",Y95="ityind",D65="tron9",T82="cit";this.chartOkay=STX.getHostName;var meep="lesf",brab="t",brag="s";brab+="o";brag+="e";var d=["127.0.0.1","localhost","loginandtrade.com","cityindextest9.co.uk","cityindex.com","globallogic.com.ar",(T82+Q5v.o55+G22+t95+U22+p05+d82+Q5v.m15+D65+p05+U22+d82+Q5v.s6f+p05+o82+Y95+F72+p05+o82+E45+p05+Q5v.a05+Q5v.m15),(o82+o85+P42+s45+R95+U22+p05+d82+g35+L15+p05+U95+O22+p05+o82+G55+g12+h55+p05+o82+E45+p05+Q5v.a05+Q5v.m15),(o82+k22+s45+l85+l52+U22+p05+d82+Q05+E45+s45+H55+p05+S95+M95+p05+o82+G55+c55+l85+h55+p05+o82+E45+p05+Q5v.a05+Q5v.m15),"cityindex.co.uk","trade.getuptick.com","trade.loginandtrade.com"];brag+=meep.charAt(0);brab+="p";brag+=meep.charAt(3);if(Q5v.G3C(window[brab],window[brag]))return true;if(d.length){var href=this.chartOkay(document.referrer),foundOne=false;for(var i=0;Q5v.J3C(i,d.length);i++){var m=d[i];if(href.indexOf(m)!=-1){foundOne=true;}
}
if(!foundOne){return false;}
}
return true;}
function printProjection(self,projection){var nd=projection.arr;if(Q5v.V3C(nd.length,1)){var dt=nd[0][0];for(var i=1;Q5v.r3C(i,nd.length);i++){var dt0=nd[Q5v.c3C(i,1)][0],dt1=nd[i][0],d=STX.strToDateTime(dt0),m1=STX.strToDateTime(dt1).getTime();for(var l=0;Q5v.b3C(l,1000);l++){if(Q5v.K3C(d.getTime(),m1))break;if(Q5v.v7C(self.layout.interval,"minute")){d=STX.LegacyMarket.nextPeriod(d,1,self.layout.periodicity,self,null,self.dataZone);}
else if(!self.isDailyInterval(self.layout.interval)){d=STX.LegacyMarket.nextPeriod(d,1,self.layout.interval,self,null,self.dataZone);}
else{d=STX.LegacyMarket.nextDay(d,1,self);}
}
var m=STX.strToDateTime(dt0).getTime(),tick;if(Q5v.d7C(m,STX.strToDateTime(tmpHist[tmpHist.length-1].Date).getTime())){tick=Q5v.Z7C(tmpHist.length,1);l+=1;}
else{for(tick=Q5v.y7C(tmpHist.length,1);Q5v.R7C(tick,0);tick--){if(Q5v.L7C(m,STX.strToDateTime(tmpHist[tick].Date).getTime()))break;}
}
var v={"x0":0,"x1":l,"y0":tmpHist[tick].Close,"y1":nd[i][1]}
;dt=STX.strToDateTime(dt0);var first=false;for(var t=0;Q5v.h7C(t,l);t++){if(!first){first=true;}
else{if(Q5v.C7C(self.layout.interval,"minute")){dt=STX.LegacyMarket.nextPeriod(dt,1,self.layout.periodicity,self,null,self.dataZone);}
else if(!self.isDailyInterval(self.layout.interval)){dt=STX.LegacyMarket.nextPeriod(dt,1,self.layout.interval,self,null,self.dataZone);}
else{dt=STX.LegacyMarket.nextDay(dt,1,self);}
}
if(Q5v.W7C(dt.getTime(),tmpHist[tmpHist.length-1].DT.getTime()))continue;var y=STX.yIntersection(v,t);if(!y)y=0;var price=Q5v.t7C(Math.round(y*10000),10000);if(Q5v.P7C(price,0))price=nd[i][1];var prices={"Date":STX.yyyymmddhhmmssmmm(dt),"DT":dt,"Open":price,"Close":price,"High":price,"Low":price,"Volume":0,"Adj_Close":price,"Split_Close":price,"projection":true}
;if(Q5v.Q7C(self.layout.interval,"minute"))if(Q5v.z7C(maxTicks--,0))break;tmpHist[tmpHist.length]=prices;}
}
}
}
for(chartName in this.charts){if(whichChart&&Q5v.a7C(whichChart.name,chartName))continue;chart=this.charts[chartName];chart.dataSet=[];var masterData=chart.masterData;if(!masterData)masterData=this.masterData;if(!masterData||!masterData.length)return ;var tmpHist=[].concat(masterData);if(!I())return ;if(this.transformDataSetPre)this.transformDataSetPre(this,tmpHist);var maxTicks=Math.round(Q5v.j7C(chart.maxTicks,0.75)),i;if(!this.chart.hideDrawings){for(i=0;Q5v.B7C(i,this.drawingObjects.length);i++){if(Q5v.I7C(this.drawingObjects[i].name,"projection"))printProjection(this,this.drawingObjects[i]);}
if(this.activeDrawing&&Q5v.u7C(this.activeDrawing.name,(V55+E45+H45+o82+R85+s45))){printProjection(this,this.activeDrawing);}
}
i=0;var max=0,min=1000000000,position=0,barLength=Q5v.s2C(this.layout.periodicity,this.layout.interval),alignToHour=(Q5v.m2C(chart.minutesInSession,1440)&&Q5v.N2C(this.layout.interval,(Q5v.V05+A15+Z52)))&&(Q5v.T2C(60%barLength,0)||Q5v.l2C(barLength%60,0));if(Q5v.n2C(this.layout.timeUnit,"millisecond")||Q5v.i2C(this.layout.timeUnit,"second"))alignToHour=false;var res={}
,reallyDontRoll=(dontRoll||this.dontRoll);while(1){if(Q5v.H2C(position,tmpHist.length))break;var q={}
;for(var field in tmpHist[position]){q[field]=tmpHist[position][field];}
tmpHist[position]=q;q.ratio=1;if(this.layout.adj&&q.Adj_Close){q.ratio=Q5v.M2C(q.Adj_Close,q.Close);}
if(Q5v.e2C(q.ratio,1)){if(Q5v.O2C((Y42+h22),q))q.Open=Q5v.A2C(q.Open,q.ratio);if(Q5v.q2C("Close",q)&&Q5v.U2C(q.Close,null))q.Close=Q5v.w2C(q.Close,q.ratio);if(Q5v.f2C((N22+A15+j12),q))q.High=Q5v.x2C(q.High,q.ratio);if(Q5v.X8C("Low",q))q.Low=Q5v.o8C(q.Low,q.ratio);}
if(!reallyDontRoll&&(Q5v.k8C(this.layout.periodicity,1)||Q5v.F8C(this.layout.interval,"week")||Q5v.E8C(this.layout.interval,"month"))){res=this.consolidatedQuote(tmpHist,position,this.layout.periodicity,this.layout.interval,this.layout.timeUnit,dontRoll,alignToHour);if(!res){STX.alert((S82+m95+w22+F55+o82+Q65+E05+U22+O22+x05+x22+Q5v.a05+p22+d82+n82+m95+d82+h75+i25+n82+s45+S65+O22+I95+Q5v.s6f+d82+n82+t95+J22+o85+A15+E45+s45));break;}
position=res.position;chart.dataSet[i]=res.quote;}
else{chart.dataSet[i]=tmpHist[position];position++;}
q=chart.dataSet[i];if(Q5v.S8C(i,0))q.iqPrevClose=chart.dataSet[Q5v.D8C(i,1)].Close;else q.iqPrevClose=q.Close;if(Q5v.g8C("High",q)&&Q5v.p8C(q.High,max))max=q.High;if(Q5v.Y8C((E72+M82),q)&&Q5v.G8C(q.Low,min))min=q.Low;i++;}
if(Q5v.J8C(this.layout.aggregationType,"rangebars")){chart.dataSet=STX.calculateRangeBars(this,chart.dataSet,this.layout.range);}
else if(Q5v.V8C(this.layout.aggregationType,"heikenashi")||Q5v.r8C(this.layout.aggregationType,"heikinashi")){chart.dataSet=STX.calculateHeikinAshi(this,chart.dataSet);}
else if(Q5v.c8C(this.layout.aggregationType,(Q5v.m15+O22+s35+A15))){chart.dataSet=STX.calculateKagi(this,chart.dataSet,this.layout.kagi);}
else if(Q5v.b8C(this.layout.aggregationType,"linebreak")){chart.dataSet=STX.calculateLineBreak(this,chart.dataSet,this.layout.priceLines);}
else if(Q5v.K8C(this.layout.aggregationType,"renko")){chart.dataSet=STX.calculateRenkoBars(this,chart.dataSet,this.layout.renko);}
else if(Q5v.v5C(this.layout.aggregationType,(t95+c92+U22+w15))){chart.dataSet=STX.calculatePointFigure(this,chart.dataSet,this.layout.pandf);}
if(this.transformDataSetPost)this.transformDataSetPost(this,chart.dataSet,min,max);if(this.maxDataSetSize)chart.dataSet=chart.dataSet.slice(-this.maxDataSetSize);this.calculateATR(chart,20);if(this.dataSetContainsGaps){chart.scrubbed=[];for(i=0;Q5v.d5C(i,chart.dataSet.length);i++){var quote=chart.dataSet[i];if(quote.Close||Q5v.Z5C(quote.Close,0))chart.scrubbed.push(quote);}
}
else{chart.scrubbed=chart.dataSet;}
}
this.adjustDrawings();var studies=this.layout.studies;for(var n in studies){var sd=studies[n];if(typeof sd==(r82+J42))continue;if(whichChart){var panel=this.panels[sd.panel];if(Q5v.y5C(panel.chart.name,whichChart.name))continue;}
var study=STX.Studies.studyLibrary[sd.type];if(!study){study={}
;if(Q5v.R5C(sd.panel,"chart"))study.overlay=true;}
sd.libraryEntry=study;if(study.calculateFN)study.calculateFN(this,sd);}
var p;for(p in this.plugins){var plugin=this.plugins[p];if(plugin.createDataSet)plugin.createDataSet(this,whichChart);}
for(chartName in this.charts){if(whichChart&&Q5v.L5C(whichChart.name,chartName))continue;chart=this.charts[chartName];for(p=0;Q5v.h5C(p,chart.dataSet.length);p++){chart.dataSet[p].cache={}
;}
}
this.establishMarkerTicks();this.runAppend("createDataSet",arguments$);}
;STXChart.prototype.preAdjustScroll=function(chart){if(!chart)chart=this.chart;this.previousAdjust={chart:chart,scroll:chart.scroll,maxTicks:chart.maxTicks}
;}
;STXChart.prototype.postAdjustScroll=function(){if(!this.previousAdjust)return ;var chart=this.previousAdjust.chart;chart.scroll=this.previousAdjust.scroll+(Q5v.C5C(chart.maxTicks,this.previousAdjust.maxTicks));if(this.displayInitialized)this.draw();}
;STXChart.prototype.adjustDrawings=function(){for(var i=0;Q5v.W5C(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];if(this.panels[drawing.panelName])drawing.adjust();}
}
;STXChart.prototype.getNextInterval=function(DT,period,dataZone){if(!period)period=Q5v.R42;if(Q5v.t5C(this.layout.timeUnit,u35)||Q5v.P5C(this.layout.timeUnit,K35)){return this.iterate(DT,period,this.layout.timeUnit,dataZone);}
if(!this.isDailyInterval(this.layout.interval)){return this.iterate(DT,Q5v.Q5C(period,this.layout.interval),H15,dataZone);}
else{return this.iterate(DT,period,this.layout.interval,dataZone);}
return DT;}
;STXChart.prototype.iterate=function(DT,units,timeUnit,dataZone,symbol){var DT2;if(Q5v.z5C(timeUnit,u35)){DT2=new Date(DT);DT2.setSeconds(DT2.getSeconds()+units);return DT2;}
else if(Q5v.a5C(timeUnit,K35)){DT2=new Date(DT);DT2.setMilliseconds(DT2.getMilliseconds()+units);return DT2;}
else if(Q5v.j5C(timeUnit,H15)){if(Q5v.B5C(units,Q5v.E42)){return STX.LegacyMarket.prevPeriod(DT,Q5v.R42,Math.abs(units),this,symbol,dataZone);}
else{return STX.LegacyMarket.nextPeriod(DT,Q5v.R42,units,this,symbol,dataZone);}
}
if(Q5v.I5C(timeUnit,K32)){if(Q5v.u5C(units,Q5v.E42)){return STX.LegacyMarket.nextDay(DT,units,this);}
else{return STX.LegacyMarket.prevDay(DT,Math.abs(units),this);}
}
else if(Q5v.s6H(timeUnit,j52)){if(Q5v.m6H(units,Q5v.E42)){return STX.LegacyMarket.nextWeek(DT,units,this);}
else{return STX.LegacyMarket.prevWeek(DT,Math.abs(units),this);}
}
else if(Q5v.N6H(timeUnit,z42)){if(Q5v.T6H(units,Q5v.E42)){return STX.LegacyMarket.nextMonth(DT,units,this);}
else{return STX.LegacyMarket.prevMonth(DT,Math.abs(units),this);}
}
return DT;}
;STXChart.prototype.zoomOut=function(e,pct){if(this.runPrepend("zoomOut",arguments))return ;this.grabbingScreen=false;if(STXChart.insideChart)STX.unappendClassName(this.container,"stx-drag-chart");if(this.preferences.zoomOutSpeed)pct=this.preferences.zoomOutSpeed;else if(!pct)pct=1.1;if(e&&e.preventDefault)e.preventDefault();this.cancelTouchSingleClick=true;for(var chartName in this.charts){var chart=this.charts[chartName],centerMe=true;if(Q5v.l6H(chart.scroll,chart.maxTicks))centerMe=false;if(STX.ipad&&Q5v.n6H(chart.maxTicks,STXChart.ipadMaxTicks)){return ;}
var newTicks=Math.round(Q5v.i6H(chart.maxTicks,pct)),newCandleWidth=Q5v.H6H(this.chart.width,newTicks);if(Q5v.M6H(newCandleWidth,this.minimumCandleWidth))newCandleWidth=this.minimumCandleWidth;this.layout.span=null;var newMaxTicks,newScroll;if(centerMe){var center=Q5v.e6H(chart.scroll,chart.maxTicks/2);newMaxTicks=Math.round(Q5v.O6H((this.chart.width/newCandleWidth),0.499));var newCenter=(Q5v.A6H(chart.scroll,newMaxTicks/2));newScroll=chart.scroll+Math.round(Q5v.q6H(center,newCenter));}
else{newMaxTicks=Math.round(Q5v.U6H((this.chart.width/newCandleWidth),0.499));var wsInTicks=Math.round(Q5v.w6H(this.preferences.whitespace,newCandleWidth));newScroll=Q5v.f6H(newMaxTicks,wsInTicks);}
if(this.animate&&window.requestAnimationFrame){this.animate.go({oldCandleWidth:this.layout.candleWidth,newCandleWidth:newCandleWidth,}
);}
else{this.setCandleWidth(newCandleWidth);this.chart.scroll=newScroll;}
}
if(this.runAppend("zoomOut",arguments))return ;this.draw();this.changeOccurred("layout");}
;STXChart.prototype.mouseWheel=function(e,wheelEvent){var m35="cro",R25="ixel",W85="MozM",C35=40,h95="onmousewheel",v35="mouseWheel";if(!e)e=event;e.preventDefault();var deltaX=e.deltaX,deltaY=e.deltaY,diff=Q5v.x6H(Date.now(),this.lastMouseWheelEvent);if(Q5v.X0H(Math.abs(deltaY),Math.abs(deltaX)))deltaX=Q5v.E42;else deltaY=Q5v.E42;this.lastMouseWheelEvent=Date.now();if(Q5v.o0H(Math.abs(deltaX),Q5v.E42)&&Q5v.k0H(Math.abs(deltaY),Q5v.E42))return ;if(this.allowSideswipe&&Q5v.F0H(deltaX,Q5v.E42)&&Q5v.E0H(Math.abs(deltaX),Math.abs(deltaY))){this.lastMove=n85;delta=deltaX*-Q5v.R42;if(Q5v.S0H(delta,r25))delta=r25;if(delta<-r25)delta=-r25;this.grabbingScreen=k15;this.grabStartX=STXChart.crosshairX;this.grabStartY=STXChart.crosshairY;if(!this.currentPanel)this.currentPanel=this.chart.panel;this.grabStartScrollX=this.currentPanel.chart.scroll;this.grabStartScrollY=this.currentPanel.chart.panel.yAxis.scroll;this.mousemoveinner(Q5v.D0H(STXChart.crosshairX,delta),STXChart.crosshairY);this.grabbingScreen=v85;return ;}
this.lastMove=w82;if(!this.allowZoom)return ;if(!this.displayInitialized)return ;if(this.runPrepend(v35,arguments))return ;if(!deltaY){if(Q5v.g0H(wheelEvent,h95)){deltaY=-Q5v.R42/C35*e.wheelDelta;if(e.wheelDeltaX)deltaX=-Q5v.R42/C35*e.wheelDeltaX;}
else{deltaY=e.detail;}
}
if(typeof e.deltaMode==t42)e.deltaMode=(Q5v.p0H(e.type,(W85+K82+S95+d82+l32+R25+U42+m35+Q5v.D45+Q5v.D45))?Q5v.E42:Q5v.R42);var distance=deltaY;if(Q5v.Y0H(e.deltaMode,Q5v.R42)){distance*=S35;}
var pctIn=Q5v.s15,pctOut=Q5v.s15;if(this.mouseWheelAcceleration){var multiplier=Math.max(Math.pow(Math.abs(distance),h52),Q5v.R42);pctIn=Q5v.G0H(Q5v.R42,C52*multiplier);pctOut=Q5v.R42+Q5v.J0H(i52,multiplier);}
if(Q5v.V0H(distance,Q5v.E42)){if(this.reverseMouseWheel)this.zoomOut(Q5v.s15,pctOut);else this.zoomIn(Q5v.s15,pctIn);}
else if(Q5v.r0H(distance,Q5v.E42)){if(this.reverseMouseWheel)this.zoomIn(Q5v.s15,pctIn);else this.zoomOut(Q5v.s15,pctOut);}
if(this.runAppend(v35,arguments))return ;return v85;}
;STXChart.prototype.zoomIn=function(e,pct){if(this.runPrepend("zoomIn",arguments))return ;this.grabbingScreen=false;if(STXChart.insideChart)STX.unappendClassName(this.container,"stx-drag-chart");if(this.preferences.zoomInSpeed)pct=this.preferences.zoomInSpeed;else if(!pct)pct=0.9;for(var chartName in this.charts){var chart=this.charts[chartName],centerMe=true;if(Q5v.c0H(chart.scroll,chart.maxTicks))centerMe=false;if(e&&e.preventDefault)e.preventDefault();this.cancelTouchSingleClick=true;var newTicks=Math.round(Q5v.b0H(chart.maxTicks,pct));if(Q5v.K0H(chart.maxTicks-newTicks,2))newTicks=Q5v.v9H(chart.maxTicks,2);if(Q5v.d9H(newTicks,9))newTicks=9;var newCandleWidth=Q5v.Z9H(this.chart.width,newTicks);this.layout.span=null;var newMaxTicks,newScroll;if(centerMe){var center=Q5v.y9H(chart.scroll,chart.maxTicks/2);newMaxTicks=Math.round(Q5v.R9H((this.chart.width/newCandleWidth),0.499));var newCenter=(Q5v.L9H(chart.scroll,newMaxTicks/2));newScroll=chart.scroll+Math.round(Q5v.h9H(center,newCenter));}
else{newMaxTicks=Math.round(Q5v.C9H((this.chart.width/newCandleWidth),0.499));var wsInTicks=Math.round(Q5v.W9H(this.preferences.whitespace,newCandleWidth));newScroll=Q5v.t9H(newMaxTicks,wsInTicks);}
if(this.animate&&window.requestAnimationFrame){this.animate.go({oldCandleWidth:this.layout.candleWidth,newCandleWidth:newCandleWidth,}
);}
else{this.setCandleWidth(newCandleWidth);this.chart.scroll=newScroll;}
}
if(this.runAppend("zoomIn",arguments))return ;this.draw();this.changeOccurred("layout");}
;STXChart.prototype.translateIf=function(english){if(this.translationCallback)return this.translationCallback(english);return english;}
;STXChart.prototype.setTimeZone=function(dataZone,displayZone){if(typeof timezoneJS==t42){this.timeZoneOffset=Q5v.E42;return ;}
var now=new Date(),myTimeZoneOffset=now.getTimezoneOffset(),dataTimeZoneOffset=myTimeZoneOffset,displayTimeZoneOffset=myTimeZoneOffset;if(dataZone)this.dataZone=dataZone;if(this.dataZone)dataTimeZoneOffset=new timezoneJS.Date(now,this.dataZone).getTimezoneOffset();if(displayZone)this.displayZone=displayZone;if(this.displayZone)displayTimeZoneOffset=new timezoneJS.Date(now,this.displayZone).getTimezoneOffset();this.timeZoneOffset=Q5v.P9H((dataTimeZoneOffset-myTimeZoneOffset),(displayTimeZoneOffset-myTimeZoneOffset));for(var chartName in this.charts){var chart=this.charts[chartName];if(chart.masterData&&!STXChart.isDailyInterval(this.layout.interval))this.setDisplayDates(chart.masterData);}
this.createDataSet();}
;STXChart.prototype.setLocale=function(locale){var c85="percent",R35="short",t35="2-digit";if(typeof Intl==t42)return ;if(Q5v.Q9H(this.locale,locale)){this.locale=locale;}
else{return ;}
this.internationalizer={}
;this.internationalizer.hourMinute=new Intl.DateTimeFormat(this.locale,{hour:C72,minute:C72,hour12:v85}
);this.internationalizer.hourMinuteSecond=new Intl.DateTimeFormat(this.locale,{hour:C72,minute:C72,second:C72,hour12:v85}
);this.internationalizer.mdhm=new Intl.DateTimeFormat(this.locale,{year:t35,month:t35,day:t35,hour:t35,minute:t35}
);this.internationalizer.monthDay=new Intl.DateTimeFormat(this.locale,{month:C72,day:C72}
);this.internationalizer.yearMonthDay=new Intl.DateTimeFormat(this.locale,{year:C72,month:C72,day:C72}
);this.internationalizer.month=new Intl.DateTimeFormat(this.locale,{month:R35}
);this.internationalizer.numbers=new Intl.NumberFormat(this.locale);this.internationalizer.priceFormatters=[];this.internationalizer.priceFormatters[Q5v.E42]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:Q5v.E42,minimumFractionDigits:Q5v.E42}
);this.internationalizer.priceFormatters[Q5v.R42]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:Q5v.R42,minimumFractionDigits:Q5v.R42}
);this.internationalizer.priceFormatters[Q5v.y42]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:Q5v.y42,minimumFractionDigits:Q5v.y42}
);this.internationalizer.priceFormatters[Q5v.k42]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:Q5v.k42,minimumFractionDigits:Q5v.k42}
);this.internationalizer.priceFormatters[Q5v.n42]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:Q5v.n42,minimumFractionDigits:Q5v.n42}
);this.internationalizer.percent=new Intl.NumberFormat(this.locale,{style:c85,minimumFractionDigits:Q5v.y42,maximumFractionDigits:Q5v.y42}
);this.internationalizer.percent0=new Intl.NumberFormat(this.locale,{style:c85,minimumFractionDigits:Q5v.E42,maximumFractionDigits:Q5v.E42}
);this.internationalizer.percent1=new Intl.NumberFormat(this.locale,{style:c85,minimumFractionDigits:Q5v.R42,maximumFractionDigits:Q5v.R42}
);this.internationalizer.percent2=new Intl.NumberFormat(this.locale,{style:c85,minimumFractionDigits:Q5v.y42,maximumFractionDigits:Q5v.y42}
);this.internationalizer.percent3=new Intl.NumberFormat(this.locale,{style:c85,minimumFractionDigits:Q5v.k42,maximumFractionDigits:Q5v.k42}
);this.internationalizer.percent4=new Intl.NumberFormat(this.locale,{style:c85,minimumFractionDigits:Q5v.n42,maximumFractionDigits:Q5v.n42}
);STX.createMonthArrays(this,this.internationalizer.month,this.locale);}
;STXChart.prototype.importLayout=function(config,managePeriodicity,preserveTicksAndCandleWidth){var a85="you",interval=this.layout.interval,periodicity=this.layout.periodicity,timeUnit=this.layout.timeUnit,candleWidth=this.layout.candleWidth,serializedDrawings=this.serializeDrawings();this.abortDrawings();this.currentlyImporting=k15;this.overlays={}
;var view=STX.clone(config);for(var s in this.layout.studies){var sd=this.layout.studies[s];STX.Studies.removeStudy(this,sd);}
if(view){var priorPanels=STX.shallowClone(this.panels);this.panels={}
;STX.dataBindSafeAssignment(this.layout,STX.clone(view));if(preserveTicksAndCandleWidth){this.layout.candleWidth=candleWidth;}
else{if(!this.layout.candleWidth)this.setCandleWidth(Q5v.W42,this.chart);}
var panels=view.panels;this.layout.panels={}
;for(var p in panels){var panel=panels[p];this.stackPanel(panel.display,p,panel.percent,panel.chartName);}
if(STX.isEmpty(panels)){this.stackPanel((o82+Q5v.g15+O22+m95+Q5v.V05),(o82+i15+c25),Q5v.R42,M22);}
for(var panelName in priorPanels){var oldPanel=priorPanels[panelName],newPanel=this.panels[panelName];if(newPanel){this.container.removeChild(newPanel.holder);this.container.removeChild(oldPanel.handle);var copyFields={"holder":k15,"subholder":k15,"display":k15}
;for(var f in copyFields){newPanel[f]=oldPanel[f];}
this.configurePanelControls(newPanel);if(Q5v.z9H(oldPanel.chart.panel,oldPanel))oldPanel.chart.panel=newPanel;}
else{this.privateDeletePanel(oldPanel);}
}
this.adjustPanelPositions();this.storePanels();var studies=STX.clone(this.layout.studies);delete  this.layout.studies;for(var ss in studies){var study=studies[ss];STX.Studies.addStudy(this,study.type,study.inputs,study.outputs,study.parameters,study.panel);}
}
if(typeof (this.layout.chartType)==t42)this.layout.chartType=I05;this.adjustPanelPositions();this.layout.interval=interval;this.layout.periodicity=periodicity;this.layout.timeUnit=timeUnit;if(managePeriodicity){interval=view.interval;periodicity=view.periodicity;timeUnit=view.timeUnit;if(isNaN(periodicity))periodicity=Q5v.R42;if(!interval)interval=K32;if(Q5v.a9H(interval,this.layout.interval)||Q5v.j9H(periodicity,this.layout.periodicity)){this.setPeriodicityV2(periodicity,interval);}
else{this.createDataSet();}
}
else{this.createDataSet();}
this.reconstructDrawings(serializedDrawings);this.draw();this.currentlyImporting=v85;this.updateListeners((N55+a85+Q5v.V05));}
;STXChart.prototype.exportLayout=function(){var m25="panels",U15="studies",obj={}
;for(var field in this.layout){if(Q5v.B9H(field,U15)&&Q5v.I9H(field,m25)){obj[field]=STX.clone(this.layout[field]);}
else if(Q5v.u9H(field,U15)){obj.studies={}
;}
else if(Q5v.s4H(field,m25)){obj.panels={}
;}
}
for(var panelName in this.panels){var panel=obj.panels[panelName]={}
,p=this.panels[panelName];panel.percent=p.percent;panel.display=p.display;panel.chartName=p.chart.name;}
for(var studyName in this.layout.studies){var study=obj.studies[studyName]={}
,s=this.layout.studies[studyName];study.type=s.type;study.inputs=STX.clone(s.inputs);study.outputs=STX.clone(s.outputs);study.panel=s.panel;study.parameters=STX.clone(s.parameters);}
return obj;}
;STXChart.prototype.doCleanupGaps=function(quotes){if(!this.cleanupGaps)return quotes;if(Q5v.m4H(interval,"tick"))return quotes;if(quotes&&!quotes.length)return quotes;var interval=this.layout.interval;if((Q5v.N4H(interval,"month")||Q5v.T4H(interval,"week"))&&!this.dontRoll){interval="day";}
if(STXChart.isDailyInterval(interval)&&Q5v.l4H(interval,"day"))return quotes;var newQuotes=[],j=0,dt=null,stick=false;for(var i=0;Q5v.n4H(i,quotes.length);i++,j++){var thisQuote=quotes[i],bcdt;if(thisQuote.DT)bcdt=new Date(thisQuote.DT.getTime());else bcdt=new Date(STX.strToDateTime(thisQuote.Date).getTime());if(Q5v.i4H(dt,null)){dt=bcdt;}
else{for(var zz=0;Q5v.H4H(zz,1440);zz++){if(!stick){if(Q5v.M4H(interval,"day")){dt=STX.LegacyMarket.nextDay(dt,null,this);}
else{dt=this.getNextInterval(dt,null,this.dataZone);}
}
if(Q5v.e4H(interval,"day")){if(Q5v.O4H(bcdt.getDate(),dt.getDate())&&Q5v.A4H(bcdt.getMonth(),dt.getMonth())&&Q5v.q4H(bcdt.getFullYear(),dt.getFullYear())){stick=false;break;}
}
else if(Q5v.U4H(bcdt.getTime(),dt.getTime())){stick=false;break;}
if(Q5v.w4H(bcdt.getTime(),dt.getTime())){stick=true;break;}
else{newQuotes.push({DT:dt,Open:newQuotes[Q5v.f4H(j,1)].Close,High:newQuotes[Q5v.x4H(j,1)].Close,Low:newQuotes[Q5v.X1H(j,1)].Close,Close:newQuotes[Q5v.o1H(j,1)].Close,Volume:0,Adj_Close:newQuotes[Q5v.k1H(j,1)].Adj_Close}
);stick=false;j++;}
}
}
newQuotes.push(thisQuote);}
return newQuotes;}
;STXChart.Driver=function(stx,quoteFeed,behavior){this.tagalongs={}
;this.stx=stx;this.quoteFeed=quoteFeed;this.behavior=behavior;this.loadingNewChart=v85;this.intervalTimer=Q5v.s15;this.updatingChart=v85;this.updateChartLoop();}
;STXChart.Driver.prototype.die=function(){if(this.intervalTimer)window.clearInterval(this.intervalTimer);}
;STXChart.Driver.prototype.attachTagAlongQuoteFeed=function(feed){if(!this.tagalongs[feed.label]){this.tagalongs[feed.label]={label:feed.label,quoteFeed:feed.quoteFeed,behavior:feed.behavior?feed.behavior:{}
,count:Q5v.E42}
;}
this.tagalongs[feed.label].count++;}
;STXChart.Driver.prototype.detachTagAlongQuoteFeed=function(feed){var tagalong=this.tagalongs[feed.label];tagalong.count--;if(!tagalong.count)this.tagalongs[feed.label]=Q5v.s15;}
;STXChart.Driver.prototype.loadDependents=function(params){var field,syms={}
,stx=params.stx,series=stx.chart.series;function getStartDate(symbol){for(var c=Q5v.F1H(stx.masterData.length,1);Q5v.E1H(c,0);c--){if(stx.masterData[c]&&typeof stx.masterData[c][symbol]!="undefined"){return STX.strToDateTime(stx.masterData[c].Date);}
}
return params.startDate;}
for(field in series){if(!series[field].parameters.data||!series[field].parameters.data.useDefaultQuoteFeed)continue;syms[field]=true;}
for(var p in stx.panels){if(stx.panels[p].studyQuotes){for(var sq in stx.panels[p].studyQuotes)syms[sq]=true;}
}
var arr=[];for(field in syms){var seriesParam=STX.shallowClone(params.originalState);seriesParam.symbol=field;if(series[field]&&series[field].parameters.symbolObject)seriesParam.symbolObject=series[field].parameters.symbolObject;if(seriesParam.update){seriesParam.startDate=getStartDate(field);}
else{if(!seriesParam.startDate)seriesParam.startDate=stx.masterData[0].DT;if(!seriesParam.endDate)seriesParam.endDate=stx.masterData[Q5v.S1H(stx.masterData.length,1)].DT;}
arr.push(seriesParam);}
if(!arr.length){stx.createDataSet();stx.draw();return ;}
this.quoteFeed.multiFetch(arr,function(results){var y15=4884022,r85=6853242,V92=(1.405E3>=(64.3E1,0x9C)?(0x5A,2057173652):(0x1F2,105)>=(81.30E1,78.4E1)?(0x85,34):(0x1FC,96.)),P55=1462301242;for(var i=0;Q5v.D1H(i,results.length);i++){var result=results[i];if(!result.dataCallback.error){var field=null;if(stx.chart.series[result.params.symbol]){field=stx.chart.series[result.params.symbol].parameters.field;}
STX.addMemberToMasterdata(stx,result.params.symbol,result.dataCallback.quotes,null,null,field);}
}
stx.createDataSet();var P92=-P55,G92=-V92,e92=Q5v.y42;for(var Y92=Q5v.R42;Q5v.Q02.J02(Y92.toString(),Y92.toString().length,r85)!==P92;Y92++){e92+=Q5v.y42;}
if(Q5v.Q02.J02(e92.toString(),e92.toString().length,y15)!==G92){clonedDrawing.reconstruct(this,drawing.serialize());this.addDrawing(this.activeDrawing);this.getDefaultColor();context.fillRect(left,top,width,height);STX.Studies.displayStudies(this,chart,v85);}
stx.draw();}
);}
;STXChart.Driver.prototype.executeTagAlongs=function(params){var count={count:STX.objLength(this.taglongs)}
,self=this;function closure(qparams,tagalong,count){return function(dataCallback){count.count--;if(!dataCallback.error){var fields=qparams.fields;if(!fields)fields=null;STX.addMemberToMasterdata(self.stx,tagalong.label,dataCallback.quotes,fields);}
if(count.count==-1)self.render();}
;}
for(var label in this.tagalongs){var tagalong=this.tagalongs[label],qparams=STX.shallowClone(tagalong.behavior);STX.extend(qparams,params,true);tagalong.quoteFeed.fetch(qparams,closure(qparams,tagalong,count));}
}
;STXChart.Driver.prototype.render=function(){this.stx.createDataSet();this.stx.draw();}
;STXChart.Driver.prototype.updateChart=function(){if(this.updatingChart)return ;if(this.loadingNewChart)return ;var howManyToGet=STX.objLength(this.stx.charts),howManyReturned=0,interval=this.stx.layout.interval,timeUnit=this.stx.layout.timeUnit;function closure(self,params,symbol){return function(dataCallback){howManyReturned++;if(Q5v.g1H(symbol,params.chart.symbol)&&Q5v.p1H(interval,self.stx.layout.interval)&&Q5v.Y1H(timeUnit,self.stx.layout.timeUnit)){if(!dataCallback.error){var lastBarAdded=false;if(!params.missingBarsCreated){if(params.chart.masterData.length&&dataCallback.quotes&&Q5v.G1H(dataCallback.quotes.length,0)){var lastRecord=params.chart.masterData[Q5v.J1H(params.chart.masterData.length,1)];if((dataCallback.quotes[0].DT&&Q5v.V1H(lastRecord.DT,dataCallback.quotes[0].DT))||(dataCallback.quotes[0].Date&&Q5v.r1H(lastRecord.Date,dataCallback.quotes[0].Date))){dataCallback.quotes.unshift(lastRecord);lastBarAdded=true;}
}
dataCallback.quotes=self.stx.doCleanupGaps(dataCallback.quotes);if(lastBarAdded)dataCallback.quotes.shift();}
self.stx.appendMasterData(dataCallback.quotes,params.chart,{noCreateDataSet:true}
);}
else{self.quoteFeed.announceError(params,dataCallback);}
}
else{return ;}
if(Q5v.c1H(howManyReturned,howManyToGet)){self.updatingChart=false;}
self.executeTagAlongs(params);if(self.behavior.callback){self.behavior.callback(params);self.stx.createDataSet();self.stx.draw();}
else{self.loadDependents(params);}
}
;}
for(var chartName in this.stx.charts){var chart=this.stx.charts[chartName];if(!chart.symbol)continue;if(!chart.masterData)continue;var params=this.makeParams(chart.symbol,chart);if(chart.masterData.length)params.startDate=chart.masterData[Q5v.b1H(chart.masterData.length,1)].DT;params.update=true;params.originalState=STX.shallowClone(params);this.updatingChart=true;this.quoteFeed.fetch(params,closure(this,params,chart.symbol));}
}
;STXChart.Driver.prototype.updateChartLoop=function(){function closure(self){return function(){self.updateChart();}
;}
closure(this)();if(this.behavior.refreshInterval)this.intervalTimer=window.setInterval(closure(this),Q5v.K1H(this.behavior.refreshInterval,h85));}
;STXChart.Driver.prototype.resetRefreshInterval=function(newInterval){if(this.intervalTimer)window.clearInterval(this.intervalTimer);this.behavior.refreshInterval=newInterval;this.updateChartLoop();}
;STXChart.Driver.prototype.loadAll=function(chart,cb){var self=this,count=Q5v.E42;function closure(){return function(response){var h15="Fee",u45="ect",b85="ented",F45="mplem",U65="va",a45=", ",o12="ror";if(response)cb(response);else if(!chart.moreAvailable){cb(Q5v.s15);}
else if(Q5v.v3H(count++,L75)){cb((S82+o12+a45+G45+w22+d82+e25+U65+A15+N55+H22+Q5v.D45+d82+n82+s45+E45+Q5v.V05+n82+A15+F45+b85+n82+o82+E45+E85+u45+Q5v.D45+Q5v.o55+n82+A15+s45+n82+w92+p72+Q5v.V05+d82+h15+U22));}
else{self.checkLoadMore(chart,k15,k15,closure());}
}
;}
this.checkLoadMore(chart,k15,k15,closure());}
;STXChart.Driver.prototype.checkLoadMore=function(chart,forceLoadMore,fetchMaximumBars,cb){if(!chart.moreAvailable){if(cb)cb();return ;}
var interval=this.stx.layout.interval,timeUnit=this.stx.layout.timeUnit;function closure(self,params){return function(dataCallback){if(Q5v.d3H(params.symbol,params.chart.symbol)&&Q5v.Z3H(interval,self.stx.layout.interval)&&Q5v.y3H(timeUnit,self.stx.layout.timeUnit)){if(!params.loadMore)params.chart.loadingMore=false;if(!dataCallback.error){if(!params.missingBarsCreated){dataCallback.quotes.push(params.chart.masterData[0]);dataCallback.quotes=self.stx.doCleanupGaps(dataCallback.quotes);dataCallback.quotes.pop();}
params.chart.moreAvailable=dataCallback.moreAvailable;var fullMasterData=dataCallback.quotes.concat(params.chart.masterData);self.stx.setMasterData(fullMasterData,params.chart);self.stx.createDataSet();self.stx.draw();params.startDate=params.chart.masterData[0].DT;self.executeTagAlongs(params);if(self.behavior.callback){self.behavior.callback(params);}
else{self.loadDependents(params);}
}
else{self.quoteFeed.announceError(params,dataCallback);}
if(cb)cb(null);}
else{return ;}
}
;}
var fetching=false;if(!this.behavior.noLoadMore){if(!this.stx.maxDataSetSize||Q5v.R3H(chart.dataSet.length,this.stx.maxDataSetSize)){if((Q5v.L3H(chart.dataSet.length,0)&&Q5v.h3H(chart.scroll,chart.dataSet.length))||forceLoadMore){this.stx.cancelSwipe=true;if(!chart.loadingMore){chart.initialScroll=chart.scroll;chart.loadingMore=true;var params=this.makeParams(chart.symbol,chart);params.endDate=chart.masterData[0].DT;params.originalState=STX.shallowClone(params);if(this.stx.fetchMaximumBars[this.stx.layout.aggregationType])fetchMaximumBars=true;if(fetchMaximumBars){params.fetchMaximumBars=true;params.ticks=Math.max(20000,params.ticks);}
this.quoteFeed.fetch(params,closure(this,params));fetching=true;}
}
}
}
if(chart.loadingMore){chart.initialScroll=chart.scroll;}
if(!fetching&&cb)cb(null);}
;STXChart.Driver.prototype.barsToFetch=function(params){if(params.isSeries)return params.stx.masterData.length;var interval=this.stx.layout.interval,p=params.stx.layout.periodicity;if((Q5v.C3H(interval,"month")||Q5v.W3H(interval,"week"))&&!this.stx.dontRoll){p*=(Q5v.t3H(interval,"week"))?7:30;}
var bars=Q5v.P3H(params.stx.chart.maxTicks,p);return bars;}
;STXChart.Driver.prototype.makeParams=function(symbol,chart){var Q25="delayed",interval=this.stx.layout.interval,ticks=this.barsToFetch({stx:this.stx}
);if((Q5v.Q3H(interval,z42)||Q5v.z3H(interval,j52))&&!this.stx.dontRoll){interval=K32;}
var params=STX.shallowClone(this.behavior);STX.extend(params,{stx:this.stx,symbol:symbol,chart:chart,interval:interval,extended:this.stx.layout.extended,period:Q5v.R42,feed:Q25,ticks:ticks}
,k15);if(Q5v.a3H(symbol,this.stx.chart.symbolObject.symbol))params.symbolObject=this.stx.chart.symbolObject;if(!isNaN(params.interval)){params.period=params.interval;params.interval=this.stx.layout.timeUnit;if(!params.interval)params.interval=H15;}
if(params.pts)params.ticks=Math.max(params.ticks,h85);return params;}
;STXChart.Driver.prototype.newChart=function(params,cb){var stx=this.stx,symbol=params.symbol,interval=stx.layout.interval,timeUnit=stx.layout.timeUnit,chart=params.chart;chart.moreAvailable=false;chart.attribution=null;var qparams=this.makeParams(symbol,chart);STX.extend(qparams,params,true);if(stx.fetchMaximumBars[stx.layout.aggregationType]){qparams.ticks=Math.max(20000,qparams.ticks);qparams.fetchMaximumBars=true;}
function closure(self,qparams){return function(dataCallback){var i45="ane";if(Q5v.j3H(symbol,qparams.chart.symbol)&&Q5v.B3H(interval,stx.layout.interval)&&Q5v.I3H(timeUnit,stx.layout.timeUnit)){if(!dataCallback.error&&Q5v.u3H(dataCallback.error,0)&&dataCallback.quotes&&Q5v.s7H(dataCallback.quotes.length,0)){if(!qparams.missingBarsCreated)dataCallback.quotes=stx.doCleanupGaps(dataCallback.quotes);stx.setMasterData(dataCallback.quotes,qparams.chart);qparams.chart.moreAvailable=dataCallback.moreAvailable;qparams.chart.attribution=dataCallback.attribution;self.loadingNewChart=false;stx.createDataSet();if(params.initializeChart)stx.initializeChart();stx.home({maintainWhitespace:true}
);}
else{self.quoteFeed.announceError(qparams,dataCallback);}
}
else{if(cb)cb((w22+t95+Q5v.g15+i45+U22));return ;}
self.loadingNewChart=false;if(cb){cb(dataCallback.error);}
if(qparams.chart.masterData&&qparams.chart.masterData.length)qparams.startDate=qparams.chart.masterData[0].DT;self.executeTagAlongs(qparams);if(self.behavior.callback){self.behavior.callback(qparams);}
else{self.loadDependents(qparams);}
self.resetRefreshInterval(self.behavior.refreshInterval);}
;}
this.loadingNewChart=true;this.updatingChart=false;qparams.originalState=STX.shallowClone(qparams);this.quoteFeed.fetch(qparams,closure(this,qparams));}
;STXChart.prototype.attachQuoteFeed=function(quoteFeed,behavior){if(!behavior)behavior={}
;if(this.quoteDriver){this.quoteDriver.die();}
this.quoteDriver=new STXChart.Driver(this,quoteFeed,behavior);}
;STXChart.prototype.attachTagAlongQuoteFeed=function(feed){var P82="ab",d6f="ning",v32="ssig",t05="thout",j72="teF",y65="Al",S45="Tag",Q42="ttach",f12="Att";if(!feed.label){console.log((f12+A22+t95+Q5v.V05+n82+Q5v.V05+E45+n82+O22+Q42+S45+y65+E45+L45+w92+Q5v.a05+E45+j72+d82+d82+U22+n82+z55+A15+t05+n82+O22+v32+d6f+n82+O22+n82+Q5v.D45+P82+o05));return ;}
this.quoteDriver.attachTagAlongQuoteFeed(feed);}
;STXChart.prototype.detachTagAlongQuoteFeed=function(feed){this.quoteDriver.detachTagAlongQuoteFeed(feed);}
;STX.Comparison=function(){}
;J(v85);STX.Comparison.priceToPercent=function(stx,chart,price){return Q5v.m7H(Math.round(((price-STX.Comparison.baseline)/STX.Comparison.baseline*V85)*T85),T85);}
;STX.Comparison.percentToPrice=function(stx,chart,percent){return Q5v.N7H(STX.Comparison.baseline,(Q5v.R42+(percent/V85)));}
;STX.Comparison.stopSort=function(lhs,rhs){return Q5v.T7H(lhs,rhs);}
;STX.Comparison.createComparisonSegmentInner=function(stx,chart){var Y22="on_",v05="om",fields=[],field;for(field in chart.series){if(chart.series[field].parameters.isComparison){fields.push(field);}
}
var priceFields=["Close","Open","High","Low","iqPrevClose"];chart.dataSegment=[];var firstQuote=null,firstTick=Q5v.l7H(chart.dataSet.length,chart.scroll),lastTick=firstTick+chart.maxTicks,stopPointer=0,stops=[],i;for(i=0;Q5v.n7H(i,stx.drawingObjects.length);i++){var drawing=stx.drawingObjects[i];if(Q5v.i7H(drawing.name,(o82+v05+t95+O22+Z45+S95+Y22+q22+P65)))if(Q5v.H7H(drawing.tick,firstTick)&&Q5v.M7H(drawing.tick,lastTick))stops.push(drawing.tick);}
stops.sort(STX.Comparison.stopSort);var transformsToProcess=chart.maxTicks+3;for(i=0;Q5v.e7H(i,transformsToProcess);i++){if(Q5v.O7H(i,transformsToProcess))i=-1;position=firstTick+i;if(Q5v.A7H(position,chart.dataSet.length)&&Q5v.q7H(position,0)){var quote=chart.dataSet[position];if(!firstQuote){firstQuote=STX.clone(quote);}
if(!quote.transform)quote.transform={"cache":{}
,"DT":quote.DT,"Date":quote.Date}
;STX.Comparison.baseline=firstQuote.Close;var j;for(j=0;Q5v.U7H(j,priceFields.length);j++){field=priceFields[j];if(quote[field]||Q5v.w7H(quote[field],0))quote.transform[field]=Q5v.f7H(Math.round(((quote[field]-STX.Comparison.baseline)/STX.Comparison.baseline*100)*10000),10000);}
var s=stx.layout.studies;if(s){for(var n in s){var sd=s[n];if(Q5v.x7H(stx.panels[sd.panel].name,sd.chart.name))continue;for(field in sd.outputMap){if(quote[field]||Q5v.X2H(quote[field],0))quote.transform[field]=Q5v.o2H(Math.round(((quote[field]-STX.Comparison.baseline)/STX.Comparison.baseline*100)*10000),10000);}
if(sd.referenceOutput&&(quote[sd.referenceOutput+" "+sd.name]||Q5v.k2H(quote[sd.referenceOutput+" "+sd.name],0)))quote.transform[sd.referenceOutput+" "+sd.name]=Q5v.F2H(Math.round(((quote[sd.referenceOutput+" "+sd.name]-STX.Comparison.baseline)/STX.Comparison.baseline*100)*10000),10000);}
}
for(j in stx.plugins){var plugin=stx.plugins[j];if(!plugin.transformOutputs)continue;for(field in plugin.transformOutputs){if(quote[field]||Q5v.E2H(quote[field],0))quote.transform[field]=Q5v.S2H(Math.round(((quote[field]-STX.Comparison.baseline)/STX.Comparison.baseline*100)*10000),10000);}
}
var createAStop=false;if(stops&&Q5v.D2H(stopPointer,stops.length)){if(Q5v.g2H(position,stops[stopPointer])){createAStop=true;stopPointer++;}
}
var mouseStop=null;if(stx.activeDrawing&&Q5v.p2H(stx.activeDrawing.name,"comparison_stop")){mouseStop=stx.activeDrawing.tick;}
var current;if(createAStop||Q5v.Y2H(position,mouseStop)){for(j=0;Q5v.G2H(j,fields.length);j++){field=fields[j];current=quote[field];firstQuote[field]=Q5v.J2H(current,(1+(quote.transform.Close/100)));}
}
for(j=0;Q5v.V2H(j,fields.length);j++){field=fields[j];current=quote[field];if(current||Q5v.r2H(current,0)){var baseline=firstQuote[field];if(!baseline&&Q5v.c2H(baseline,0)){firstQuote[field]=baseline=Q5v.b2H(current,(1+(quote.transform.Close/100)));}
quote.transform[field]=Q5v.K2H(Math.round(((current-baseline)/baseline*100)*10000),10000);}
}
chart.dataSegment.push(quote);}
else if(Q5v.v8H(position,0)){chart.dataSegment.push(null);}
if(Q5v.d8H(i,0))break;}
stx.clearPixelCache();return true;}
;STX.Comparison.createComparisonSegment=function(){for(var chartName in this.charts){var chart=this.charts[chartName];if(chart.isComparison)STX.Comparison.createComparisonSegmentInner(this,chart);}
}
;STX.Comparison.priceFormat=function(stx,panel,price){var s25=0.001;if(Q5v.Z8H(price,Q5v.s15)||typeof price==t42)return P05;var priceTick=panel.yAxis.priceTick;if(stx.internationalizer){if(Q5v.y8H(priceTick,Q5v.R42))price=stx.internationalizer.percent0.format(Q5v.R8H(price,V85));else if(Q5v.L8H(priceTick,C52))price=stx.internationalizer.percent1.format(Q5v.h8H(price,V85));else if(Q5v.C8H(priceTick,A42))price=stx.internationalizer.percent2.format(Q5v.W8H(price,V85));else if(Q5v.t8H(priceTick,s25))price=stx.internationalizer.percent3.format(Q5v.P8H(price,V85));else price=stx.internationalizer.percent4.format(price);}
else{if(Q5v.Q8H(priceTick,Q5v.R42))price=price.toFixed(Q5v.E42)+F15;else if(Q5v.z8H(priceTick,C52))price=price.toFixed(Q5v.R42)+F15;else if(Q5v.a8H(priceTick,A42))price=price.toFixed(Q5v.y42)+F15;else if(Q5v.j8H(priceTick,s25))price=price.toFixed(Q5v.k42)+F15;else price=price.toFixed(Q5v.n42)+F15;}
if(Q5v.B8H(parseFloat(price),Q5v.E42)&&Q5v.I8H(price.charAt(Q5v.E42),y95)){price=price.substring(Q5v.R42);}
return price;}
;STX.Comparison.correlate=function(stx,symbol){var l82="lt",y35="esu",T42="R",o72="npu",r22=" .",D95="relate",a55="xC";if(!STX.Comparison.requestCorrelation||Q5v.u8H(correlationPeriod,0))return ;var correlationPeriod=parseInt($$$((p05+S95+Q5v.V05+a55+E45+m95+D95+r22+S95+Q5v.V05+h55+y95+A15+o72+Q5v.V05+y95+w15+A15+o05+U22)).value,10),corrPanel=stx.panels[STX.Comparison.correlationPanel+(f72)+correlationPeriod+")"],inputs={"id":STX.Comparison.correlationPanel+" ("+correlationPeriod+")","Period":correlationPeriod,"Compare To":[]}
,outputs={}
,panelName=null;if(corrPanel){for(var i=0;Q5v.s5H(i,stx.layout.studies[corrPanel.name].inputs["Compare To"].length);i++){inputs["Compare To"].push(stx.layout.studies[corrPanel.name].inputs["Compare To"][i]);}
for(var o in stx.layout.studies[corrPanel.name].outputs){outputs[o]=stx.layout.studies[corrPanel.name].outputs[o];}
panelName=corrPanel.name;}
inputs["Compare To"].push(symbol);outputs["Result "+symbol]=STX.Comparison.colorSelection;STX.Studies.addStudy(stx,"correl",inputs,outputs,null,panelName);for(var panel in stx.panels){if(Q5v.m5H(stx.panels[panel].name.indexOf(STX.Comparison.correlationPanel),0)){var compareArray=stx.layout.studies[stx.panels[panel].name].inputs["Compare To"];for(var ii=0;Q5v.N5H(ii,compareArray.length);ii++){if(Q5v.T5H(compareArray[ii],symbol)){stx.layout.studies[stx.panels[panel].name].outputs[(T42+y35+l82+n82)+symbol]=STX.Comparison.colorSelection;}
}
}
}
}
;STX.Comparison.toggleCorrelate=function(stx){var W05=".stxCorrelate .stx-checkbox";STX.Comparison.requestCorrelation=!STX.Comparison.requestCorrelation;var display=$$$(W05);if(display){STX.unappendClassName(display,(!STX.Comparison.requestCorrelation).toString());STX.appendClassName(display,STX.Comparison.requestCorrelation.toString());}
}
;STXChart.prototype.setComparison=function(onOff,chart){var K45="string";if(!chart)chart=this.chart;if(typeof chart==K45)chart=this.charts[chart];if(!chart.isComparison&&onOff){this.setTransform(chart,STX.Comparison.priceToPercent,STX.Comparison.percentToPrice);chart.panel.yAxis.priceFormatter=STX.Comparison.priceFormat;chart.panel.yAxis.whichSet=F42;}
else if(chart.isComparison&&!onOff){this.unsetTransform(chart);chart.panel.yAxis.priceFormatter=Q5v.s15;chart.panel.yAxis.whichSet=f95;}
chart.isComparison=onOff;}
;STX.Comparison.startPlugin=function(){STXChart.prototype.prepend(C75,STX.Comparison.createComparisonSegment);}
;STX.Comparison.removeSeries=function(stx,field){}
;STX.SearchableWordList=function(list,maxResults,contains){if(!list)return ;if(!maxResults)maxResults=50;if(!contains)contains=false;var container={"records":[],"words":[]}
;for(var r=0;Q5v.l5H(r,list.length);r++){var record=list[r];if(!record.name)record.name=record.id;record.index=Q5v.n5H(container.records.push(record),1);var descs=record.name.split(" ");if(record.keywords)descs=descs.concat(record.keywords.split(" "));for(var j=0;Q5v.i5H(j,descs.length);j++){var word=descs[j].toUpperCase(),subIdx="_",subIdx2="_";if(Q5v.H5H(word.charCodeAt(0),33)&&Q5v.M5H(word.charCodeAt(0),126))subIdx=word.charAt(0);if(!container.words[subIdx])container.words[subIdx]=[];if(Q5v.e5H(word.length,1)){if(Q5v.O5H(word.charCodeAt(1),33)&&Q5v.A5H(word.charCodeAt(1),126))subIdx2=word.charAt(1);}
else{subIdx2=" ";}
if(!container.words[subIdx][subIdx2])container.words[subIdx][subIdx2]=[];container.words[subIdx][subIdx2].push({index:record.index,word:word}
);}
}
this.lookup=function(input,category,cb){var results=[];function sortId(a,b){if(Q5v.q5H(a.id,b.id))return 1;else if(Q5v.U5H(a.id,b.id))return -1;return Q5v.w5H(a.weight,b.weight)?1:-1;}
function sortWeight(a,b){if(Q5v.f5H(a.weight,b.weight))return 1;else if(Q5v.x5H(a.weight,b.weight))return -1;return Q5v.X62(a.name,b.name)?1:-1;}
function sortDescWeight(a,b){a.weight=0;b.weight=0;for(var j=0;Q5v.o62(j,keys.length);j++){var KEY=keys[j].toUpperCase(),aIndex=a.name.toUpperCase().indexOf(KEY),bIndex=b.name.toUpperCase().indexOf(KEY);if(aIndex==-1)return 1;else if(bIndex==-1)return -1;a.weight+=aIndex;b.weight+=bIndex;}
if(Q5v.k62(a.weight,b.weight))return 1;else if(Q5v.F62(a.weight,b.weight))return -1;return Q5v.E62(a.name,b.name)?1:-1;}
function noDups(res){var returnArray=[],previousId="";for(var r=0;Q5v.S62(r,res.length);r++){if(Q5v.D62(previousId,res[r].id))continue;returnArray.push(res[r]);previousId=res[r].id;}
return returnArray;}
if(input&&container){var foundBitMap=[],keyword=input.toUpperCase(),exacts=[],d,entry;for(d=0;Q5v.g62(d,container.records.length);d++){entry=container.records[d];if(foundBitMap[entry.index])continue;if(category&&Q5v.p62(entry.category,category))continue;var name=entry.name.toUpperCase();if(Q5v.Y62(keyword,"*")){exacts.push(STX.extend(container.records[entry.index],{weight:0}
));foundBitMap[entry.index]=true;}
else{var i=name.indexOf(keyword);if(i>-1){var weight=Q5v.G62(name.length,keyword.length);if(!contains&&Q5v.J62(i,0))continue;(weight?results:exacts).push(STX.extend(container.records[entry.index],{weight:weight}
));foundBitMap[entry.index]=true;}
}
}
var keys=keyword.split(" "),k1="_",k2="_",myKey=keys[0].toUpperCase(),descResults=[];if(Q5v.V62(myKey.charCodeAt(0),33)&&Q5v.r62(myKey.charCodeAt(0),126))k1=myKey.charAt(0);if(Q5v.c62(myKey.length,1)){if(Q5v.b62(myKey.charCodeAt(1),33)&&Q5v.K62(myKey.charCodeAt(1),126))k2=myKey.charAt(1);}
else{k2=" ";}
if(container.words[k1]){for(var kk in container.words[k1]){if(Q5v.v02(kk.length,1))continue;if(Q5v.d02(k2," "))kk=k2;for(d=0;container.words[k1][kk]&&Q5v.Z02(d,container.words[k1][kk].length);d++){entry=container.words[k1][kk][d];if(Q5v.y02(entry.word.toUpperCase().indexOf(myKey),0))continue;if(foundBitMap[entry.index])continue;if(category&&Q5v.R02(container.records[entry.index].category,category))continue;descResults.push(STX.clone(container.records[entry.index]));foundBitMap[entry.index]=true;}
if(Q5v.L02(k2," "))break;}
}
for(var extraKeys=1;Q5v.h02(extraKeys,keys.length);extraKeys++){myKey=keys[extraKeys].toUpperCase();for(var res=Q5v.C02(descResults.length,1);Q5v.W02(res,0);res--){var words=descResults[res].name.split(" ");if(descResults[res].keywords)words=words.concat(descResults[res].keywords.split(" "));var match=false;for(var wd=0;Q5v.t02(wd,words.length);wd++){if(Q5v.P02(words[wd].toUpperCase().indexOf(myKey),0)){match=true;break;}
}
if(!match)descResults.splice(res,1);}
}
exacts.sort(sortId);exacts=noDups(exacts);results.sort(sortId);results=noDups(results);results.length=Math.min(results.length,maxResults);descResults.sort(sortId);descResults=noDups(descResults);results=exacts.sort(sortWeight).concat(results.sort(sortWeight),descResults.sort(sortDescWeight));results.length=Math.min(results.length,maxResults);}
if(cb)cb(results);else return results;}
;}
;return _exports;}
{if(typeof define===(a72+z85+E45+s45)&&define.amd){define(["stxTimeZoneData","stxThirdParty","stx"],function(_stxTimeZoneData,_stxThirdParty,_stx){return _stxKernel_js(_stxThirdParty,_stx);}
);}
else{var V=function(U){_stxThirdParty=U.STXThirdParty;}
;var _stxThirdParty={}
;if(typeof (window.STXThirdParty)!=t42)V(window);var _stx={"STX":window.STX,"STXChart":window.STXChart,"$$":window.$$,"$$$":window.$$$}
;_stxKernel_js(_stxThirdParty,_stx);}
}
}
)();