/* File generated on Wed Apr 06 2016 08:25:22 GMT-0400 (EDT) */
/* Version 2015-12-08.5 */
/* Expires on 2016/12/27 */
/* Locked to domains ["127.0.0.1","localhost","loginandtrade.com","cityindextest9.co.uk","cityindex.com","globallogic.com.ar","cityindexpd.ektron9.dev.cityindex.co.uk","cityindexpd.ektron9.qa.cityindex.co.uk","cityindexpd.ektron9.stg.cityindex.co.uk","cityindex.co.uk","trade.getuptick.com","trade.loginandtrade.com","gain-ux.herokuapp.com"] */
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

	var domains=["127.0.0.1","localhost","loginandtrade.com","cityindextest9.co.uk","cityindex.com","globallogic.com.ar","cityindexpd.ektron9.dev.cityindex.co.uk","cityindexpd.ektron9.qa.cityindex.co.uk","cityindexpd.ektron9.stg.cityindex.co.uk","cityindex.co.uk","trade.getuptick.com","trade.loginandtrade.com","gain-ux.herokuapp.com"];
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
var J3X={'d6y':function(M6y,s6y){return M6y<s6y;}
,'U1J':function(K1J,f1J){return K1J<f1J;}
,'x5i':function(G5i,W5i){return G5i-W5i;}
,'z1y':function(J1y,x1y){return J1y*x1y;}
,'C2D':function(B2D,l2D){return B2D==l2D;}
,'k2a':function(F2a,E2a){return F2a===E2a;}
,'O2F':function(V2F,D2F){return V2F!=D2F;}
,'M3E':function(s3E,r3E){return s3E==r3E;}
,'x4y':function(G4y,W4y){return G4y*W4y;}
,'b5o':function(y5o,p5o){return y5o<p5o;}
,'N9y':function(A9y,j9y){return A9y/j9y;}
,'h2o':function(c2o,z2o){return c2o>=z2o;}
,'f5D':function(X6D,Q6D){return X6D<Q6D;}
,'T5F':function(H5F,L5F){return H5F/L5F;}
,'o4':function(I4,S4){return I4!=S4;}
,'G1T':function(W1T,Y1T){return W1T==Y1T;}
,'S8':function(T8,H8){return T8<H8;}
,'B6':function(l6,t6){return l6===t6;}
,'r3J':function(v3J,k3J){return v3J-k3J;}
,'P4y':function(g4y,h4y){return g4y!=h4y;}
,'o9n':function(I9n,S9n){return I9n==S9n;}
,'l49':function(t49,Z49){return t49<Z49;}
,'z8T':function(J8T,x8T){return J8T==x8T;}
,'l0':function(Z0,q0){return Z0<q0;}
,'h2':function(z2,J2){return z2-J2;}
,'S8y':function(T8y,H8y){return T8y<=H8y;}
,'I39':function(S39,T39){return S39-T39;}
,'e7F':function(R7F,N7F){return R7F==N7F;}
,'V2J':function(D2J,U2J){return D2J>U2J;}
,'r1a':function(v1a,k1a){return v1a<k1a;}
,'O5F':function(V5F,D5F){return V5F!==D5F;}
,'o69':function(I69,S69){return I69===S69;}
,'O8':function(V8,D8,U8){return V8*D8*U8;}
,'V8J':function(D8J,U8J){return D8J>U8J;}
,'W5o':function(Y5o,m5o){return Y5o>=m5o;}
,'V5i':function(D5i,U5i){return D5i<=U5i;}
,'i4J':function(P4J,g4J){return P4J<g4J;}
,'a0i':function(d0i,M0i){return d0i-M0i;}
,'J7T':function(x7T,G7T){return x7T-G7T;}
,'r1o':function(v1o,k1o){return v1o*k1o;}
,'i9y':function(P9y,g9y){return P9y<g9y;}
,'P6D':function(g6D,h6D){return g6D===h6D;}
,'D59':function(U59,K59){return U59/K59;}
,'T7T':function(H7T,L7T){return H7T==L7T;}
,'K8n':function(f8n,X4n){return f8n!=X4n;}
,'x4T':function(G4T,W4T){return G4T<W4T;}
,'C9i':function(B9i,l9i){return B9i<l9i;}
,'w1J':function(n1J,u1J){return n1J<u1J;}
,'x8o':function(G8o,W8o){return G8o-W8o;}
,'Y2J':function(m2J,C2J){return m2J==C2J;}
,'V1D':function(D1D,U1D){return D1D==U1D;}
,'I9T':function(S9T,T9T){return S9T===T9T;}
,'v3n':function(k3n,F3n){return k3n===F3n;}
,'Z2':function(q2,O2){return q2==O2;}
,'V1F':function(D1F,U1F){return D1F===U1F;}
,'C5F':function(B5F,l5F){return B5F===l5F;}
,'H4y':function(L4y,i4y){return L4y/i4y;}
,'F6F':function(E6F,e6F){return E6F==e6F;}
,'l6J':function(t6J,Z6J){return t6J<Z6J;}
,'f5J':function(X6J,Q6J){return X6J<Q6J;}
,'d1E':function(M1E,s1E){return M1E!=s1E;}
,'B8E':function(l8E,t8E){return l8E===t8E;}
,'h3T':function(c3T,z3T){return c3T==z3T;}
,'H8o':function(L8o,i8o){return L8o<i8o;}
,'q09':function(O09,V09){return O09/V09;}
,'z6J':function(J6J,x6J){return J6J!==x6J;}
,'V9T':function(D9T,U9T){return D9T>U9T;}
,'K0i':function(f0i,X3i){return f0i!==X3i;}
,'N6i':function(A6i,j6i){return A6i==j6i;}
,'c4E':function(z4E,J4E){return z4E==J4E;}
,'u0o':function(o0o,I0o){return o0o!=I0o;}
,'J5T':function(x5T,G5T){return x5T>=G5T;}
,'J3i':function(x3i,G3i){return x3i*G3i;}
,'O6i':function(V6i,D6i){return V6i-D6i;}
,'l8y':function(t8y,Z8y){return t8y*Z8y;}
,'l2T':function(t2T,Z2T){return t2T==Z2T;}
,'y3o':function(p3o,w3o){return p3o/w3o;}
,'c2a':function(z2a,J2a){return z2a-J2a;}
,'m9F':function(C9F,B9F){return C9F-B9F;}
,'d4o':function(M4o,s4o){return M4o<s4o;}
,'Q2o':function(a2o,d2o){return a2o/d2o;}
,'r1i':function(v1i,k1i){return v1i==k1i;}
,'x2y':function(G2y,W2y){return G2y==W2y;}
,'N9E':function(A9E,j9E){return A9E==j9E;}
,'i5F':function(P5F,g5F){return P5F<g5F;}
,'W1J':function(Y1J,m1J){return Y1J>m1J;}
,'C3a':function(B3a,l3a){return B3a>l3a;}
,'C8F':function(B8F,l8F){return B8F==l8F;}
,'G4i':function(W4i,Y4i){return W4i/Y4i;}
,'Y0n':function(m0n,C0n){return m0n-C0n;}
,'q4a':function(O4a,V4a){return O4a<V4a;}
,'N5o':function(A5o,j5o){return A5o<j5o;}
,'a7m':")",'Y0E':function(m0E,C0E){return m0E===C0E;}
,'n2y':function(u2y,o2y){return u2y<o2y;}
,'X3D':function(Q3D,a3D){return Q3D<a3D;}
,'W6a':function(Y6a,m6a){return Y6a==m6a;}
,'O5E':function(V5E,D5E){return V5E/D5E;}
,'j1':function(b1,p1){return b1!=p1;}
,'E3T':function(e3T,R3T){return e3T==R3T;}
,'P8n':function(g8n,h8n){return g8n<=h8n;}
,'i7y':function(P7y,g7y){return P7y/g7y;}
,'J4D':function(x4D,G4D){return x4D<G4D;}
,'o4D':function(I4D,S4D){return I4D*S4D;}
,'T0J':function(H0J,L0J){return H0J*L0J;}
,'A2T':function(j2T,b2T){return j2T-b2T;}
,'D1y':function(U1y,K1y){return U1y==K1y;}
,'X8o':function(Q8o,a8o){return Q8o/a8o;}
,'G6y':function(W6y,Y6y){return W6y===Y6y;}
,'I0a':function(S0a,T0a){return S0a==T0a;}
,'x0n':function(G0n,W0n){return G0n-W0n;}
,'b4i':function(y4i,p4i){return y4i/p4i;}
,'W9n':function(Y9n,m9n){return Y9n<m9n;}
,'e4y':function(R4y,N4y){return R4y===N4y;}
,'G49':function(W49,Y49){return W49==Y49;}
,'c0i':function(z0i,J0i){return z0i<J0i;}
,'l1i':function(t1i,Z1i){return t1i==Z1i;}
,'q6T':function(O6T,V6T){return O6T<V6T;}
,'u9o':function(o9o,I9o){return o9o==I9o;}
,'N0':function(A0,j0){return A0<j0;}
,'N2F':function(A2F,j2F){return A2F==j2F;}
,'w19':function(n19,u19){return n19!=u19;}
,'Y9T':function(m9T,C9T){return m9T<C9T;}
,'o1J':function(I1J,S1J){return I1J-S1J;}
,'i3y':function(P3y,g3y){return P3y>=g3y;}
,'O0J':function(V0J,D0J){return V0J-D0J;}
,'O5T':function(V5T,D5T){return V5T*D5T;}
,'A89':function(j89,b89){return j89-b89;}
,'R1E':function(N1E,A1E){return N1E<A1E;}
,'W8a':function(Y8a,m8a){return Y8a>=m8a;}
,'d9o':function(M9o,s9o){return M9o<s9o;}
,'C7E':function(B7E,l7E){return B7E!=l7E;}
,'W9J':function(Y9J,m9J){return Y9J*m9J;}
,'m6J':function(C6J,B6J){return C6J!=B6J;}
,'c0a':function(z0a,J0a){return z0a/J0a;}
,'l3F':function(t3F,Z3F){return t3F==Z3F;}
,'a0T':function(d0T,M0T){return d0T-M0T;}
,'j09':function(b09,y09){return b09>y09;}
,'t1J':function(Z1J,q1J){return Z1J-q1J;}
,'N5T':function(A5T,j5T){return A5T==j5T;}
,'L1E':function(i1E,P1E){return i1E===P1E;}
,'v4i':function(k4i,F4i){return k4i>F4i;}
,'I0y':function(S0y,T0y){return S0y-T0y;}
,'o8a':function(I8a,S8a){return I8a*S8a;}
,'s4y':function(r4y,v4y){return r4y==v4y;}
,'p9o':function(w9o,n9o){return w9o<=n9o;}
,'W0J':function(Y0J,m0J){return Y0J*m0J;}
,'X7a':function(Q7a,a7a){return Q7a>a7a;}
,'U3':function(K3,f3){return K3*f3;}
,'s49':function(r49,v49){return r49==v49;}
,'q1n':function(O1n,V1n){return O1n!=V1n;}
,'G59':function(W59,Y59){return W59*Y59;}
,'X9D':function(Q9D,a9D){return Q9D==a9D;}
,'K2n':function(f2n,X9n){return f2n-X9n;}
,'l5a':function(t5a,Z5a){return t5a-Z5a;}
,'v7E':function(k7E,F7E){return k7E===F7E;}
,'j0o':function(b0o,y0o){return b0o>=y0o;}
,'E3n':function(e3n,R3n){return e3n!==R3n;}
,'I1F':function(S1F,T1F){return S1F*T1F;}
,'i3n':function(P3n,g3n){return P3n==g3n;}
,'s2y':function(r2y,v2y){return r2y-v2y;}
,'O6a':function(V6a,D6a){return V6a&D6a;}
,'l1T':function(t1T,Z1T){return t1T==Z1T;}
,'t0D':function(Z0D,q0D){return Z0D/q0D;}
,'w3n':function(n3n,u3n){return n3n-u3n;}
,'B0y':function(l0y,t0y){return l0y>=t0y;}
,'h9a':function(c9a,z9a){return c9a==z9a;}
,'T4i':function(H4i,L4i){return H4i<L4i;}
,'z7J':function(J7J,x7J){return J7J<x7J;}
,'A8n':function(j8n,b8n){return j8n-b8n;}
,'a6a':function(d6a,M6a){return d6a-M6a;}
,'y4y':function(p4y,w4y){return p4y==w4y;}
,'s2n':function(r2n,v2n){return r2n==v2n;}
,'d6T':function(M6T,s6T){return M6T<s6T;}
,'M0D':function(s0D,r0D){return s0D<r0D;}
,'V5o':function(D5o,U5o){return D5o-U5o;}
,'o5o':function(I5o,S5o){return I5o*S5o;}
,'p09':function(w09,n09){return w09-n09;}
,'U4':function(K4,f4){return K4!==f4;}
,'P2a':function(g2a,h2a){return g2a-h2a;}
,'e0E':function(R0E,N0E){return R0E>=N0E;}
,'T0F':function(H0F,L0F){return H0F>L0F;}
,'A2':function(j2,b2){return j2-b2;}
,'T8a':function(H8a,L8a){return H8a===L8a;}
,'m8T':function(C8T,B8T){return C8T!=B8T;}
,'v79':function(k79,F79){return k79*F79;}
,'R1':function(N1,A1){return N1==A1;}
,'Q0D':function(a0D,d0D){return a0D==d0D;}
,'X4a':function(Q4a,a4a){return Q4a==a4a;}
,'b9E':function(y9E,p9E){return y9E==p9E;}
,'S4a':function(T4a,H4a){return T4a>H4a;}
,'n9':function(u9,o9){return u9/o9;}
,'t69':function(Z69,q69){return Z69<q69;}
,'e89':function(R89,N89){return R89>N89;}
,'a5i':function(d5i,M5i){return d5i!==M5i;}
,'p5':function(w5,n5){return w5<n5;}
,'G1n':function(W1n,Y1n){return W1n==Y1n;}
,'S3J':function(T3J,H3J){return T3J<=H3J;}
,'d9F':function(M9F,s9F){return M9F<=s9F;}
,'j4o':function(b4o,y4o){return b4o>y4o;}
,'K0y':function(f0y,X3y){return f0y==X3y;}
,'r3l':function(v3l,k3l){return v3l<k3l;}
,'E9J':function(e9J,R9J){return e9J===R9J;}
,'Z5i':function(q5i,O5i){return q5i-O5i;}
,'C9a':function(B9a,l9a){return B9a===l9a;}
,'c4T':function(z4T,J4T){return z4T!=J4T;}
,'Z0a':function(q0a,O0a){return q0a===O0a;}
,'F1o':function(E1o,e1o){return E1o-e1o;}
,'S49':function(T49,H49){return T49/H49;}
,'d3F':function(M3F,s3F){return M3F/s3F;}
,'R3':function(N3,A3){return N3==A3;}
,'O4n':function(V4n,D4n){return V4n/D4n;}
,'r4a':function(v4a,k4a){return v4a==k4a;}
,'l89':function(t89,Z89){return t89<Z89;}
,'P9T':function(g9T,h9T){return g9T===h9T;}
,'z3D':function(J3D,x3D){return J3D<x3D;}
,'u6E':function(o6E,I6E){return o6E==I6E;}
,'u1T':function(o1T,I1T){return o1T<I1T;}
,'U6a':function(K6a,f6a){return K6a>=f6a;}
,'X1i':function(Q1i,a1i){return Q1i==a1i;}
,'N8D':function(A8D,j8D){return A8D-j8D;}
,'F8y':function(E8y,e8y){return E8y-e8y;}
,'G5J':function(W5J,Y5J){return W5J==Y5J;}
,'e1F':function(R1F,N1F){return R1F<N1F;}
,'Q8F':function(a8F,d8F){return a8F<d8F;}
,'R8T':function(N8T,A8T){return N8T!=A8T;}
,'v5T':function(k5T,F5T){return k5T*F5T;}
,'w9y':function(n9y,u9y){return n9y/u9y;}
,'P0T':function(g0T,h0T){return g0T>h0T;}
,'c7D':function(z7D,J7D){return z7D>=J7D;}
,'l09':function(t09,Z09){return t09<Z09;}
,'L1y':function(i1y,P1y){return i1y==P1y;}
,'O5y':function(V5y,D5y){return V5y==D5y;}
,'I8n':function(S8n,T8n){return S8n>T8n;}
,'n2J':function(u2J,o2J){return u2J/o2J;}
,'H5i':function(L5i,i5i){return L5i*i5i;}
,'U3i':function(K3i,f3i){return K3i<f3i;}
,'w0J':function(n0J,u0J){return n0J<u0J;}
,'D4i':function(U4i,K4i){return U4i!==K4i;}
,'M0l':function(s0l,r0l){return s0l<r0l;}
,'N7E':function(A7E,j7E){return A7E/j7E;}
,'u1a':function(o1a,I1a){return o1a<I1a;}
,'H6':function(L6,i6){return L6-i6;}
,'Z0T':function(q0T,O0T){return q0T in O0T;}
,'y8E':function(p8E,w8E){return p8E/w8E;}
,'G89':function(W89,Y89){return W89<Y89;}
,'m6o':function(C6o,B6o,l6o,t6o){return C6o-B6o+l6o-t6o;}
,'w4n':function(n4n,u4n){return n4n<u4n;}
,'p6m':"x",'L1i':function(i1i,P1i){return i1i<P1i;}
,'i69':function(P69,g69){return P69==g69;}
,'B2i':function(l2i,t2i){return l2i*t2i;}
,'s1F':function(r1F,v1F){return r1F===v1F;}
,'V8E':function(D8E,U8E){return D8E<U8E;}
,'h9n':function(c9n,z9n){return c9n>z9n;}
,'F0o':function(E0o,e0o){return E0o<=e0o;}
,'R7a':function(N7a,A7a){return N7a-A7a;}
,'l4o':function(t4o,Z4o){return t4o<=Z4o;}
,'v9n':function(k9n,F9n){return k9n-F9n;}
,'N4D':function(A4D,j4D){return A4D===j4D;}
,'o4J':function(I4J,S4J){return I4J!==S4J;}
,'L79':function(i79,P79){return i79-P79;}
,'a8J':function(d8J,M8J){return d8J*M8J;}
,'a3o':function(d3o,M3o){return d3o<=M3o;}
,'N2l':0,'Q5y':function(a5y,d5y){return a5y in d5y;}
,'J3T':function(x3T,G3T){return x3T==G3T;}
,'t9n':function(Z9n,q9n){return Z9n==q9n;}
,'P8J':function(g8J,h8J){return g8J>h8J;}
,'l9F':function(t9F,Z9F){return t9F/Z9F;}
,'Y2E':function(m2E,C2E){return m2E<C2E;}
,'X1T':function(Q1T,a1T){return Q1T==a1T;}
,'l7a':function(t7a,Z7a){return t7a<Z7a;}
,'h1J':function(c1J,z1J){return c1J>z1J;}
,'b2o':function(y2o,p2o){return y2o&p2o;}
,'j1a':function(b1a,y1a){return b1a!==y1a;}
,'g4a':function(h4a,c4a){return h4a>c4a;}
,'J4':function(x4,G4){return x4<G4;}
,'c99':function(z99,J99){return z99==J99;}
,'M1J':function(s1J,r1J){return s1J>r1J;}
,'U7o':function(K7o,f7o){return K7o==f7o;}
,'o9J':function(I9J,S9J){return I9J<=S9J;}
,'t5y':function(Z5y,q5y){return Z5y==q5y;}
,'i19':function(P19,g19){return P19>g19;}
,'G7J':function(W7J,Y7J){return W7J>Y7J;}
,'b0J':function(y0J,p0J){return y0J!=p0J;}
,'T4n':function(H4n,L4n){return H4n==L4n;}
,'t0J':function(Z0J,q0J){return Z0J<q0J;}
,'k8n':function(F8n,E8n){return F8n*E8n;}
,'f09':function(X39,Q39){return X39>Q39;}
,'g5D':function(h5D,c5D){return h5D/c5D;}
,'k89':function(F89,E89){return F89-E89;}
,'R09':function(N09,A09){return N09-A09;}
,'P8E':function(g8E,h8E){return g8E/h8E;}
,'V9y':function(D9y,U9y){return D9y<U9y;}
,'h9E':function(c9E,z9E){return c9E<z9E;}
,'N3i':function(A3i,j3i){return A3i>j3i;}
,'E4':function(e4,R4){return e4<R4;}
,'m4o':function(C4o,B4o){return C4o<B4o;}
,'B4m':"}",'U':function(K,X0){return K==X0;}
,'k2y':function(F2y,E2y){return F2y<E2y;}
,'B4T':function(l4T,t4T){return l4T==t4T;}
,'E3i':function(e3i,R3i){return e3i<R3i;}
,'N9i':function(A9i,j9i){return A9i*j9i;}
,'y49':function(p49,w49,n49){return p49*w49/n49;}
,'M9':function(s9,r9){return s9!=r9;}
,'N2D':function(A2D,j2D){return A2D==j2D;}
,'M9y':function(s9y,r9y){return s9y==r9y;}
,'U3E':function(K3E,f3E){return K3E/f3E;}
,'w5y':function(n5y,u5y){return n5y-u5y;}
,'U4J':function(K4J,f4J){return K4J==f4J;}
,'E8E':function(e8E,R8E){return e8E==R8E;}
,'V0T':function(D0T,U0T){return D0T!==U0T;}
,'w4F':function(n4F,u4F){return n4F-u4F;}
,'k7F':function(F7F,E7F){return F7F==E7F;}
,'S5D':function(T5D,H5D){return T5D/H5D;}
,'D1':function(U1,K1){return U1==K1;}
,'n0y':function(u0y,o0y){return u0y/o0y;}
,'j3l':function(b3l,y3l){return b3l!=y3l;}
,'W8F':function(Y8F,m8F){return Y8F==m8F;}
,'N79':function(A79,j79,b79){return A79-j79+b79;}
,'X8T':function(Q8T,a8T){return Q8T<a8T;}
,'W0l':function(Y0l,m0l){return Y0l>=m0l;}
,'G5n':function(W5n,Y5n){return W5n>=Y5n;}
,'n0':function(u0,o0){return u0<o0;}
,'M4n':function(s4n,r4n){return s4n/r4n;}
,'X1n':function(Q1n,a1n){return Q1n-a1n;}
,'F1a':function(E1a,e1a){return E1a===e1a;}
,'U0D':function(K0D,f0D){return K0D/f0D;}
,'R4a':function(N4a,A4a){return N4a===A4a;}
,'I0T':function(S0T,T0T){return S0T<T0T;}
,'o5y':function(I5y,S5y){return I5y in S5y;}
,'B7D':function(l7D,t7D){return l7D==t7D;}
,'o4i':function(I4i,S4i){return I4i==S4i;}
,'h5E':function(c5E,z5E){return c5E>z5E;}
,'M8D':function(s8D,r8D){return s8D==r8D;}
,'R1y':function(N1y,A1y){return N1y-A1y;}
,'c6n':function(z6n,J6n){return z6n>=J6n;}
,'C5y':function(B5y,l5y){return B5y==l5y;}
,'S0o':function(T0o,H0o){return T0o<H0o;}
,'m5J':function(C5J,B5J){return C5J==B5J;}
,'M2o':function(s2o,r2o){return s2o/r2o;}
,'D7a':function(U7a,K7a){return U7a>K7a;}
,'g1n':function(h1n,c1n){return h1n-c1n;}
,'B3J':function(l3J,t3J){return l3J<=t3J;}
,'s7D':function(r7D,v7D){return r7D==v7D;}
,'a6J':function(d6J,M6J){return d6J<M6J;}
,'t4J':function(Z4J,q4J){return Z4J<q4J;}
,'M3n':function(s3n,r3n){return s3n===r3n;}
,'b6i':function(y6i,p6i){return y6i==p6i;}
,'N1J':function(A1J,j1J){return A1J*j1J;}
,'p0o':function(w0o,n0o){return w0o&n0o;}
,'e6':function(R6,N6){return R6==N6;}
,'G8y':function(W8y,Y8y){return W8y<Y8y;}
,'A8J':function(j8J,b8J){return j8J>b8J;}
,'k2l':2,'r2l':3,'h7':function(c7,z7){return c7<z7;}
,'p7n':function(w7n,n7n){return w7n>=n7n;}
,'U3T':function(K3T,f3T){return K3T==f3T;}
,'A3o':function(j3o,b3o){return j3o-b3o;}
,'Y0T':function(m0T,C0T){return m0T<C0T;}
,'U9a':function(K9a,f9a){return K9a>f9a;}
,'f5a':function(X6a,Q6a){return X6a-Q6a;}
,'g6E':function(h6E,c6E){return h6E<c6E;}
,'X5F':function(Q5F,a5F){return Q5F-a5F;}
,'j1i':function(b1i,y1i){return b1i*y1i;}
,'o7T':function(I7T,S7T){return I7T/S7T;}
,'c0T':function(z0T,J0T){return z0T/J0T;}
,'o2F':function(I2F,S2F){return I2F>=S2F;}
,'V4T':function(D4T,U4T){return D4T==U4T;}
,'U2D':function(K2D,f2D){return K2D==f2D;}
,'h0F':function(c0F,z0F){return c0F<z0F;}
,'R8':function(N8,A8){return N8==A8;}
,'F8o':function(E8o,e8o){return E8o<=e8o;}
,'S9F':function(T9F,H9F){return T9F>=H9F;}
,'m29':function(C29,B29){return C29==B29;}
,'s39':function(r39,v39){return r39 in v39;}
,'M9J':function(s9J,r9J){return s9J-r9J;}
,'t3E':function(Z3E,q3E){return Z3E-q3E;}
,'h4':function(c4,z4){return c4*z4;}
,'x0T':function(G0T,W0T){return G0T/W0T;}
,'y2n':function(p2n,w2n){return p2n<w2n;}
,'F6y':function(E6y,e6y){return E6y!=e6y;}
,'V9':function(D9,U9){return D9/U9;}
,'C5o':function(B5o,l5o){return B5o==l5o;}
,'O9a':function(V9a,D9a){return V9a/D9a;}
,'D6E':function(U6E,K6E){return U6E-K6E;}
,'O4E':function(V4E,D4E){return V4E-D4E;}
,'J3o':function(x3o,G3o){return x3o/G3o;}
,'l7n':function(t7n,Z7n){return t7n==Z7n;}
,'D2T':function(U2T,K2T){return U2T==K2T;}
,'B1F':function(l1F,t1F){return l1F<t1F;}
,'M3T':function(s3T,r3T){return s3T-r3T;}
,'e0i':function(R0i,N0i){return R0i===N0i;}
,'L3J':function(i3J,P3J){return i3J-P3J;}
,'u3':function(o3,I3){return o3==I3;}
,'v1J':function(k1J,F1J){return k1J-F1J;}
,'b9n':function(y9n,p9n){return y9n-p9n;}
,'W7o':function(Y7o,m7o){return Y7o>=m7o;}
,'C4F':function(B4F,l4F){return B4F<l4F;}
,'q9o':function(O9o,V9o,D9o,U9o){return O9o-V9o+D9o-U9o;}
,'z9D':function(J9D,x9D){return J9D>=x9D;}
,'f7J':function(X8J,Q8J){return X8J*Q8J;}
,'J3':function(x3,G3){return x3-G3;}
,'M7o':function(s7o,r7o){return s7o/r7o;}
,'r0o':function(v0o,k0o){return v0o&k0o;}
,'s6D':function(r6D,v6D){return r6D===v6D;}
,'d5J':function(M5J,s5J){return M5J==s5J;}
,'U3a':function(K3a,f3a){return K3a-f3a;}
,'D1T':function(U1T,K1T){return U1T*K1T;}
,'a0y':function(d0y,M0y){return d0y-M0y;}
,'Y2y':function(m2y,C2y){return m2y==C2y;}
,'w3a':function(n3a,u3a){return n3a>u3a;}
,'n1D':function(u1D,o1D){return u1D>o1D;}
,'F3F':function(E3F,e3F){return E3F*e3F;}
,'c8E':function(z8E,J8E){return z8E<J8E;}
,'d1o':function(M1o,s1o){return M1o*s1o;}
,'v7T':function(k7T,F7T){return k7T==F7T;}
,'W7':function(Y7,m7){return Y7>=m7;}
,'p3':function(w3,n3){return w3==n3;}
,'Z6D':function(q6D,O6D){return q6D-O6D;}
,'Z0E':function(q0E,O0E){return q0E>O0E;}
,'p3F':function(w3F,n3F){return w3F/n3F;}
,'X7i':function(Q7i,a7i){return Q7i!==a7i;}
,'q7i':function(O7i,V7i){return O7i==V7i;}
,'v0a':function(k0a,F0a,E0a){return k0a-F0a-E0a;}
,'o0D':function(I0D,S0D){return I0D<S0D;}
,'q5n':function(O5n,V5n){return O5n===V5n;}
,'N9n':function(A9n,j9n){return A9n>=j9n;}
,'W19':function(Y19,m19){return Y19>=m19;}
,'E3y':function(e3y,R3y){return e3y>R3y;}
,'M5o':function(s5o,r5o){return s5o==r5o;}
,'t5E':function(Z5E,q5E){return Z5E<q5E;}
,'M9i':function(s9i,r9i){return s9i==r9i;}
,'U4E':function(K4E,f4E){return K4E<f4E;}
,'R3J':function(N3J,A3J){return N3J<A3J;}
,'i2D':function(P2D,g2D){return P2D/g2D;}
,'Y4T':function(m4T,C4T){return m4T<C4T;}
,'V2i':function(D2i,U2i){return D2i===U2i;}
,'T5E':function(H5E,L5E){return H5E/L5E;}
,'F3J':function(E3J,e3J){return E3J>e3J;}
,'u1y':function(o1y,I1y){return o1y>I1y;}
,'G7n':function(W7n,Y7n){return W7n==Y7n;}
,'E79':function(e79,R79){return e79!==R79;}
,'T3o':function(H3o,L3o){return H3o<=L3o;}
,'q6E':function(O6E,V6E){return O6E==V6E;}
,'A9T':function(j9T,b9T){return j9T<b9T;}
,'a0E':function(d0E,M0E){return d0E!=M0E;}
,'r5E':function(v5E,k5E){return v5E-k5E;}
,'d5D':function(M5D,s5D){return M5D>=s5D;}
,'t5o':function(Z5o,q5o,O5o){return Z5o-q5o+O5o;}
,'u9F':function(o9F,I9F){return o9F>=I9F;}
,'i0D':function(P0D,g0D){return P0D<=g0D;}
,'O3n':function(V3n,D3n){return V3n*D3n;}
,'a5a':function(d5a,M5a){return d5a>=M5a;}
,'X8':function(Q8,a8){return Q8==a8;}
,'S29':function(T29,H29){return T29==H29;}
,'i8D':function(P8D,g8D){return P8D*g8D;}
,'T9y':function(H9y,L9y){return H9y/L9y;}
,'g1i':function(h1i,c1i){return h1i===c1i;}
,'N7':function(A7,j7){return A7/j7;}
,'J0J':function(x0J,G0J){return x0J*G0J;}
,'I2i':function(S2i,T2i){return S2i>T2i;}
,'l59':function(t59,Z59){return t59-Z59;}
,'c2T':function(z2T,J2T){return z2T==J2T;}
,'K4T':function(f4T,X5T){return f4T-X5T;}
,'t7T':function(Z7T,q7T){return Z7T<q7T;}
,'u2l':9,'L9D':function(i9D,P9D){return i9D>P9D;}
,'A2i':function(j2i,b2i){return j2i<b2i;}
,'u9D':function(o9D,I9D){return o9D>I9D;}
,'n7F':function(u7F,o7F){return u7F/o7F;}
,'Y99':function(m99,C99){return m99>C99;}
,'a4y':function(d4y,M4y){return d4y*M4y;}
,'F8':function(E8,e8){return E8==e8;}
,'y6a':function(p6a,w6a){return p6a/w6a;}
,'m8y':function(C8y,B8y){return C8y!=B8y;}
,'C69':function(B69,l69){return B69-l69;}
,'o8D':function(I8D,S8D){return I8D*S8D;}
,'L5J':function(i5J,P5J){return i5J==P5J;}
,'N8a':function(A8a,j8a){return A8a-j8a;}
,'H2J':function(L2J,i2J){return L2J<i2J;}
,'O2o':function(V2o,D2o){return V2o*D2o;}
,'k49':function(F49,E49){return F49<E49;}
,'p5J':function(w5J,n5J){return w5J==n5J;}
,'Y39':function(m39,C39){return m39!=C39;}
,'S6T':function(T6T,H6T){return T6T>H6T;}
,'Y0a':function(m0a,C0a){return m0a===C0a;}
,'z5n':function(J5n,x5n){return J5n>=x5n;}
,'o3n':function(I3n,S3n){return I3n==S3n;}
,'P6':function(g6,h6){return g6/h6;}
,'J9a':function(x9a,G9a){return x9a!=G9a;}
,'F29':function(E29,e29){return E29==e29;}
,'M9n':function(s9n,r9n){return s9n-r9n;}
,'X5':function(Q5,a5){return Q5-a5;}
,'R0F':function(N0F,A0F){return N0F<A0F;}
,'s8i':function(r8i,v8i){return r8i<v8i;}
,'l8T':function(t8T,Z8T){return t8T-Z8T;}
,'x8E':function(G8E,W8E){return G8E-W8E;}
,'O8F':function(V8F,D8F){return V8F-D8F;}
,'r5':function(v5,k5){return v5*k5;}
,'u49':function(o49,I49){return o49/I49;}
,'O3a':function(V3a,D3a){return V3a<D3a;}
,'N0l':function(A0l,j0l){return A0l>j0l;}
,'w0D':function(n0D,u0D){return n0D<u0D;}
,'q9F':function(O9F,V9F){return O9F*V9F;}
,'I2T':function(S2T,T2T){return S2T!==T2T;}
,'C9J':function(B9J,l9J){return B9J==l9J;}
,'u1i':function(o1i,I1i){return o1i-I1i;}
,'q1E':function(O1E,V1E){return O1E*V1E;}
,'u8y':function(o8y,I8y){return o8y==I8y;}
,'X09':function(Q09,a09){return Q09<a09;}
,'C3i':function(B3i,l3i){return B3i==l3i;}
,'t2D':function(Z2D,q2D){return Z2D==q2D;}
,'X5J':function(Q5J,a5J){return Q5J<=a5J;}
,'d1n':function(M1n,s1n){return M1n<s1n;}
,'H99':function(L99,i99){return L99>i99;}
,'D4o':function(U4o,K4o,f4o,X5o){return U4o-K4o+f4o-X5o;}
,'a8n':function(d8n,M8n){return d8n>M8n;}
,'t3o':function(Z3o,q3o){return Z3o!==q3o;}
,'F4a':function(E4a,e4a){return E4a>e4a;}
,'W3E':function(Y3E,m3E){return Y3E>m3E;}
,'R5F':function(N5F,A5F){return N5F-A5F;}
,'P0n':function(g0n,h0n){return g0n-h0n;}
,'e6o':function(R6o,N6o,A6o){return R6o-N6o+A6o;}
,'P2n':function(g2n,h2n){return g2n==h2n;}
,'x2T':function(G2T,W2T,Y2T){return G2T-W2T+Y2T;}
,'m5n':function(C5n,B5n){return C5n>=B5n;}
,'f6T':function(X0y,Q0y){return X0y-Q0y;}
,'f9F':function(X7F,Q7F){return X7F>Q7F;}
,'C3n':function(B3n,l3n){return B3n<l3n;}
,'p9D':function(w9D,n9D){return w9D==n9D;}
,'G6o':function(W6o,Y6o){return W6o-Y6o;}
,'A7D':function(j7D,b7D){return j7D==b7D;}
,'y2y':function(p2y,w2y){return p2y-w2y;}
,'O9E':function(V9E,D9E,U9E){return V9E-D9E-U9E;}
,'l29':function(t29,Z29){return t29|Z29;}
,'C2F':function(B2F,l2F){return B2F>l2F;}
,'I8o':function(S8o,T8o){return S8o in T8o;}
,'i9n':function(P9n,g9n){return P9n==g9n;}
,'W4F':function(Y4F,m4F){return Y4F==m4F;}
,'A0T':function(j0T,b0T){return j0T-b0T;}
,'X5D':function(Q5D,a5D){return Q5D<a5D;}
,'d3D':function(M3D,s3D){return M3D<s3D;}
,'Z99':function(q99,O99){return q99==O99;}
,'s89':function(r89,v89){return r89>v89;}
,'v4n':function(k4n,F4n){return k4n===F4n;}
,'L6T':function(i6T,P6T){return i6T>P6T;}
,'K2':function(f2,X9){return f2==X9;}
,'l1n':function(t1n,Z1n){return t1n!=Z1n;}
,'O9i':function(V9i,D9i){return V9i<D9i;}
,'G79':function(W79,Y79){return W79-Y79;}
,'H8i':function(L8i,i8i){return L8i==i8i;}
,'e9T':function(R9T,N9T){return R9T==N9T;}
,'L7J':function(i7J,P7J){return i7J<=P7J;}
,'Y6':function(m6,C6){return m6===C6;}
,'p3J':function(w3J,n3J){return w3J>n3J;}
,'Q9J':function(a9J,d9J){return a9J-d9J;}
,'m7n':function(C7n,B7n){return C7n==B7n;}
,'X5E':function(Q5E,a5E){return Q5E-a5E;}
,'Y4y':function(m4y,C4y){return m4y in C4y;}
,'f59':function(X69,Q69){return X69-Q69;}
,'a6':function(d6,M6){return d6==M6;}
,'G1y':function(W1y,Y1y){return W1y-Y1y;}
,'e8i':function(R8i,N8i){return R8i<N8i;}
,'T69':function(H69,L69){return H69==L69;}
,'b0l':function(y0l,p0l){return y0l<p0l;}
,'q4i':function(O4i,V4i){return O4i!==V4i;}
,'v4J':function(k4J,F4J){return k4J<F4J;}
,'B2y':function(l2y,t2y){return l2y==t2y;}
,'M0J':function(s0J,r0J){return s0J<=r0J;}
,'j69':function(b69,y69){return b69==y69;}
,'K0E':function(f0E,X3E){return f0E===X3E;}
,'R4o':function(N4o,A4o){return N4o*A4o;}
,'D9F':function(U9F,K9F){return U9F>K9F;}
,'v2D':function(k2D,F2D){return k2D<F2D;}
,'W3y':function(Y3y,m3y){return Y3y<=m3y;}
,'A6':function(j6,b6){return j6==b6;}
,'T19':function(H19,L19){return H19!=L19;}
,'A99':function(j99,b99){return j99==b99;}
,'y1F':function(p1F,w1F){return p1F===w1F;}
,'K6D':function(f6D,X0a){return f6D<X0a;}
,'i9a':function(P9a,g9a){return P9a===g9a;}
,'Z0i':function(q0i,O0i){return q0i*O0i;}
,'x4E':function(G4E,W4E){return G4E/W4E;}
,'F4o':function(E4o,e4o){return E4o*e4o;}
,'U9n':function(K9n,f9n){return K9n*f9n;}
,'T6i':function(H6i,L6i){return H6i*L6i;}
,'K8J':function(f8J,X4J){return f8J<=X4J;}
,'b7y':function(y7y,p7y){return y7y/p7y;}
,'F5F':function(E5F,e5F){return E5F==e5F;}
,'Z4T':function(q4T,O4T){return q4T<O4T;}
,'a39':function(d39,M39){return d39*M39;}
,'h4J':function(c4J,z4J){return c4J===z4J;}
,'a6n':function(d6n,M6n){return d6n<M6n;}
,'b1J':function(y1J,p1J){return y1J<p1J;}
,'H8J':function(L8J,i8J){return L8J<i8J;}
,'h7T':function(c7T,z7T){return c7T>z7T;}
,'o8F':function(I8F,S8F){return I8F==S8F;}
,'g3':function(h3,c3,z3){return h3/c3/z3;}
,'x8J':function(G8J,W8J){return G8J<W8J;}
,'z6T':function(J6T,x6T){return J6T===x6T;}
,'g0o':function(h0o,c0o){return h0o*c0o;}
,'Q4i':function(a4i,d4i){return a4i>d4i;}
,'j6F':function(b6F,y6F){return b6F===y6F;}
,'i7o':function(P7o,g7o){return P7o<g7o;}
,'J1J':function(x1J,G1J){return x1J-G1J;}
,'m1o':function(C1o,B1o){return C1o!=B1o;}
,'I2y':function(S2y,T2y){return S2y-T2y;}
,'e5a':function(R5a,N5a){return R5a*N5a;}
,'k6J':function(F6J,E6J){return F6J/E6J;}
,'x6':function(G6,W6){return G6===W6;}
,'C4n':function(B4n,l4n){return B4n===l4n;}
,'i7':function(P7,g7){return P7<g7;}
,'u79':function(o79,I79){return o79==I79;}
,'r7n':function(v7n,k7n){return v7n==k7n;}
,'w7y':function(n7y,u7y){return n7y==u7y;}
,'K1o':function(f1o,X2o){return f1o<=X2o;}
,'E5o':function(e5o,R5o){return e5o==R5o;}
,'W9E':function(Y9E,m9E){return Y9E!=m9E;}
,'V0y':function(D0y,U0y){return D0y<=U0y;}
,'Q4F':function(a4F,d4F){return a4F-d4F;}
,'o2D':function(I2D,S2D){return I2D<S2D;}
,'q7J':function(O7J,V7J){return O7J>V7J;}
,'u4a':function(o4a,I4a){return o4a-I4a;}
,'V99':function(D99,U99){return D99!==U99;}
,'G9D':function(W9D,Y9D){return W9D==Y9D;}
,'t9i':function(Z9i,q9i){return Z9i>q9i;}
,'I1D':function(S1D,T1D){return S1D<T1D;}
,'y2J':function(p2J,w2J){return p2J/w2J;}
,'t5T':function(Z5T,q5T){return Z5T*q5T;}
,'Z6o':function(q6o,O6o){return q6o/O6o;}
,'W5y':function(Y5y,m5y){return Y5y==m5y;}
,'i1J':function(P1J,g1J){return P1J<g1J;}
,'a8a':function(d8a,M8a,s8a){return d8a*M8a/s8a;}
,'k2J':function(F2J,E2J){return F2J<=E2J;}
,'v4D':function(k4D,F4D){return k4D-F4D;}
,'i5T':function(P5T,g5T){return P5T>=g5T;}
,'b8F':function(y8F,p8F){return y8F!=p8F;}
,'C2':function(B2,l2){return B2*l2;}
,'b8D':function(y8D,p8D){return y8D/p8D;}
,'m7i':function(C7i,B7i){return C7i>B7i;}
,'Q5o':function(a5o,d5o){return a5o<d5o;}
,'B0T':function(l0T,t0T){return l0T in t0T;}
,'J2D':function(x2D,G2D){return x2D==G2D;}
,'x2E':function(G2E,W2E){return G2E<W2E;}
,'p2l':4,'U3n':function(K3n,f3n){return K3n<f3n;}
,'w8F':function(n8F,u8F){return n8F==u8F;}
,'H9T':function(L9T,i9T){return L9T<i9T;}
,'N0D':function(A0D,j0D){return A0D==j0D;}
,'H6n':function(L6n,i6n){return L6n<=i6n;}
,'Z8E':function(q8E,O8E){return q8E>=O8E;}
,'S2l':8,'O8a':function(V8a,D8a){return V8a-D8a;}
,'s3o':function(r3o,v3o){return r3o-v3o;}
,'r8T':function(v8T,k8T){return v8T<k8T;}
,'n8E':function(u8E,o8E){return u8E-o8E;}
,'h7o':function(c7o,z7o){return c7o-z7o;}
,'J7y':function(x7y,G7y){return x7y<G7y;}
,'M8F':function(s8F,r8F){return s8F<=r8F;}
,'a1F':function(d1F,M1F){return d1F===M1F;}
,'T7o':function(H7o,L7o){return H7o<L7o;}
,'W3':function(Y3,m3){return Y3==m3;}
,'y1D':function(p1D,w1D){return p1D<w1D;}
,'T3a':function(H3a,L3a){return H3a<L3a;}
,'E0l':function(e0l,R0l){return e0l<R0l;}
,'U3o':function(K3o,f3o){return K3o<f3o;}
,'D4a':function(U4a,K4a){return U4a*K4a;}
,'b9a':function(y9a,p9a){return y9a===p9a;}
,'S3l':function(T3l,H3l){return T3l>=H3l;}
,'z7i':function(J7i,x7i){return J7i-x7i;}
,'Z1D':function(q1D,O1D){return q1D>O1D;}
,'E4n':function(e4n,R4n){return e4n/R4n;}
,'j5n':function(b5n,y5n){return b5n>=y5n;}
,'L0o':function(i0o,P0o){return i0o>P0o;}
,'B9T':function(l9T,t9T){return l9T-t9T;}
,'l0o':function(t0o,Z0o){return t0o<Z0o;}
,'B0E':function(l0E,t0E){return l0E===t0E;}
,'a2y':function(d2y,M2y){return d2y==M2y;}
,'x7D':function(G7D,W7D){return G7D<W7D;}
,'k5a':function(F5a,E5a){return F5a<=E5a;}
,'W3T':function(Y3T,m3T){return Y3T==m3T;}
,'L5':function(i5,P5){return i5*P5;}
,'r5D':function(v5D,k5D){return v5D===k5D;}
,'C8a':function(B8a,l8a){return B8a/l8a;}
,'B2n':function(l2n,t2n){return l2n==t2n;}
,'h3n':function(c3n,z3n){return c3n-z3n;}
,'X29':function(Q29,a29){return Q29<a29;}
,'C7o':function(B7o,l7o){return B7o<=l7o;}
,'T9a':function(H9a,L9a){return H9a===L9a;}
,'s2T':function(r2T,v2T){return r2T>v2T;}
,'K8D':function(f8D,X4D){return f8D/X4D;}
,'Z2E':function(q2E,O2E){return q2E==O2E;}
,'A2y':function(j2y,b2y){return j2y==b2y;}
,'H6D':function(L6D,i6D){return L6D===i6D;}
,'V8i':function(D8i,U8i){return D8i!==U8i;}
,'P9':function(g9,h9){return g9/h9;}
,'M0a':function(s0a,r0a){return s0a*r0a;}
,'J8F':function(x8F,G8F){return x8F-G8F;}
,'d1y':function(M1y,s1y){return M1y!==s1y;}
,'p7i':function(w7i,n7i){return w7i<=n7i;}
,'m6T':function(C6T,B6T){return C6T<B6T;}
,'x7F':function(G7F,W7F){return G7F==W7F;}
,'I6n':function(S6n,T6n){return S6n>=T6n;}
,'H1D':function(L1D,i1D){return L1D-i1D;}
,'b9y':function(y9y,p9y){return y9y/p9y;}
,'R8o':function(N8o,A8o){return N8o>=A8o;}
,'g1T':function(h1T,c1T){return h1T-c1T;}
,'d6o':function(M6o,s6o,r6o,v6o){return M6o-s6o+r6o+v6o;}
,'f8y':function(X4y,Q4y){return X4y==Q4y;}
,'y2E':function(p2E,w2E){return p2E-w2E;}
,'q1T':function(O1T,V1T){return O1T/V1T;}
,'H4T':function(L4T,i4T){return L4T!==i4T;}
,'J19':function(x19,G19){return x19<G19;}
,'L29':function(i29,P29){return i29>P29;}
,'r3D':function(v3D,k3D){return v3D<k3D;}
,'z1o':function(J1o,x1o){return J1o-x1o;}
,'G1':function(W1,Y1,C1){return W1*Y1/C1;}
,'V8o':function(D8o,U8o,K8o,f8o){return D8o-U8o+K8o-f8o;}
,'h8D':function(c8D,z8D,J8D){return c8D-z8D+J8D;}
,'Y0y':function(m0y,C0y){return m0y<C0y;}
,'i2o':function(P2o,g2o){return P2o&g2o;}
,'w0F':function(n0F,u0F){return n0F*u0F;}
,'Q6i':function(a6i,d6i){return a6i==d6i;}
,'L8l':"D",'g49':function(h49,c49){return h49<c49;}
,'u7a':function(o7a,I7a){return o7a<I7a;}
,'G3F':function(W3F,Y3F){return W3F===Y3F;}
,'c8i':function(z8i,J8i){return z8i!==J8i;}
,'t4D':function(Z4D,q4D){return Z4D==q4D;}
,'p8':function(w8,n8){return w8==n8;}
,'N2o':function(A2o,j2o){return A2o>=j2o;}
,'h7y':function(c7y,z7y){return c7y==z7y;}
,'Y7D':function(m7D,C7D){return m7D==C7D;}
,'k99':function(F99,E99){return F99==E99;}
,'K9y':function(f9y,X7y){return f9y>=X7y;}
,'p1i':function(w1i,n1i){return w1i<n1i;}
,'m6F':function(C6F,B6F){return C6F<B6F;}
,'e2T':function(R2T,N2T){return R2T-N2T;}
,'m1E':function(C1E,B1E){return C1E<B1E;}
,'T8D':function(H8D,L8D){return H8D*L8D;}
,'w7':function(n7,u7){return n7!==u7;}
,'K2a':function(f2a,X9a){return f2a===X9a;}
,'E0':function(e0,R0){return e0<R0;}
,'V6o':function(D6o,U6o){return D6o/U6o;}
,'p1y':function(w1y,n1y){return w1y<n1y;}
,'M3y':function(s3y,r3y){return s3y/r3y;}
,'T8F':function(H8F,L8F){return H8F==L8F;}
,'S7n':function(T7n,H7n){return T7n==H7n;}
,'K6o':function(f6o,X0J){return f6o<=X0J;}
,'G8':function(W8,Y8,m8){return W8/Y8/m8;}
,'i4i':function(P4i,g4i,h4i,c4i){return P4i-g4i+h4i-c4i;}
,'i2':function(P2,g2){return P2==g2;}
,'n6':function(u6,o6){return u6<o6;}
,'y4T':function(p4T,w4T){return p4T>w4T;}
,'v4':function(k4,F4){return k4*F4;}
,'K0a':function(f0a,X3a){return f0a==X3a;}
,'T6a':function(H6a,L6a){return H6a<=L6a;}
,'e6J':function(R6J,N6J){return R6J*N6J;}
,'i3i':function(P3i,g3i){return P3i==g3i;}
,'j3':function(b3,y3){return b3==y3;}
,'Z9T':function(q9T,O9T){return q9T-O9T;}
,'b7o':function(y7o,p7o){return y7o*p7o;}
,'U6i':function(K6i,f6i){return K6i>f6i;}
,'g6J':function(h6J,c6J){return h6J-c6J;}
,'Q7E':function(a7E,d7E){return a7E-d7E;}
,'e2a':function(R2a,N2a){return R2a>N2a;}
,'c6D':function(z6D,J6D){return z6D==J6D;}
,'f29':function(X99,Q99){return X99|Q99;}
,'M3i':function(s3i,r3i){return s3i<r3i;}
,'x6D':function(G6D,W6D){return G6D==W6D;}
,'w6i':function(n6i,u6i){return n6i==u6i;}
,'n2a':function(u2a,o2a){return u2a<o2a;}
,'U8a':function(K8a,f8a){return K8a<f8a;}
,'Q8D':function(a8D,d8D){return a8D==d8D;}
,'h5y':function(c5y,z5y){return c5y<z5y;}
,'v7y':function(k7y,F7y){return k7y-F7y;}
,'v6i':function(k6i,F6i){return k6i==F6i;}
,'E4E':function(e4E,R4E){return e4E<R4E;}
,'N3a':function(A3a,j3a){return A3a>j3a;}
,'Q19':function(a19,d19){return a19===d19;}
,'R1n':function(N1n,A1n){return N1n-A1n;}
,'B2a':function(l2a,t2a){return l2a-t2a;}
,'N8F':function(A8F,j8F){return A8F!=j8F;}
,'u3F':function(o3F,I3F){return o3F<I3F;}
,'w4':function(n4,u4){return n4/u4;}
,'s9T':function(r9T,v9T){return r9T==v9T;}
,'T5y':function(H5y,L5y){return H5y>L5y;}
,'h7E':function(c7E,z7E){return c7E/z7E;}
,'j7n':function(b7n,y7n){return b7n>y7n;}
,'v9E':function(k9E,F9E){return k9E<F9E;}
,'x6n':function(G6n,W6n){return G6n<=W6n;}
,'G4o':function(W4o,Y4o){return W4o===Y4o;}
,'L1n':function(i1n,P1n){return i1n-P1n;}
,'L09':function(i09,P09){return i09-P09;}
,'n5a':function(u5a,o5a){return u5a===o5a;}
,'f1a':function(X2a,Q2a){return X2a<Q2a;}
,'r7a':function(v7a,k7a){return v7a==k7a;}
,'O9n':function(V9n,D9n){return V9n-D9n;}
,'V6n':function(D6n,U6n){return D6n>U6n;}
,'y8i':function(p8i,w8i){return p8i===w8i;}
,'m6y':function(C6y,B6y){return C6y==B6y;}
,'S4o':function(T4o,H4o){return T4o!=H4o;}
,'I2a':function(S2a,T2a){return S2a==T2a;}
,'H2n':function(L2n,i2n){return L2n==i2n;}
,'R5E':function(N5E,A5E,j5E){return N5E*A5E/j5E;}
,'D29':function(U29,K29){return U29|K29;}
,'X1a':function(Q1a,a1a){return Q1a==a1a;}
,'R5n':function(N5n,A5n){return N5n/A5n;}
,'O3E':function(V3E,D3E){return V3E!=D3E;}
,'G0':function(W0,Y0){return W0<Y0;}
,'y8J':function(p8J,w8J){return p8J/w8J;}
,'y7D':function(p7D,w7D){return p7D==w7D;}
,'c0':function(z0,J0){return z0==J0;}
,'X6y':function(Q6y,a6y){return Q6y==a6y;}
,'d7i':function(M7i,s7i){return M7i>=s7i;}
,'a6D':function(d6D,M6D){return d6D==M6D;}
,'d0F':function(M0F,s0F){return M0F<s0F;}
,'t0l':function(Z0l,q0l){return Z0l>q0l;}
,'d5':function(M5,s5){return M5-s5;}
,'i4F':function(P4F,g4F){return P4F==g4F;}
,'D7i':function(U7i,K7i){return U7i in K7i;}
,'T4J':function(H4J,L4J){return H4J<L4J;}
,'q7a':function(O7a,V7a){return O7a==V7a;}
,'l5':function(t5,Z5){return t5>Z5;}
,'B9':function(l9,t9){return l9==t9;}
,'n89':function(u89,o89){return u89<o89;}
,'L1a':function(i1a,P1a){return i1a!=P1a;}
,'j3D':function(b3D,y3D){return b3D<=y3D;}
,'s1D':function(r1D,v1D){return r1D<v1D;}
,'k2T':function(F2T,E2T){return F2T/E2T;}
,'D3D':function(U3D,K3D){return U3D>K3D;}
,'L6y':function(i6y,P6y){return i6y===P6y;}
,'f2T':function(X9T,Q9T){return X9T==Q9T;}
,'Y0i':function(m0i,C0i){return m0i*C0i;}
,'r8y':function(v8y,k8y){return v8y-k8y;}
,'Y8E':function(m8E,C8E){return m8E/C8E;}
,'u5D':function(o5D,I5D){return o5D<I5D;}
,'z4i':function(J4i,x4i){return J4i<x4i;}
,'g5n':function(h5n,c5n){return h5n/c5n;}
,'X3':function(Q3,a3){return Q3==a3;}
,'H2a':function(L2a,i2a){return L2a==i2a;}
,'W69':function(Y69,m69){return Y69>=m69;}
,'q89':function(O89,V89){return O89>=V89;}
,'S9o':function(T9o,H9o){return T9o==H9o;}
,'k39':function(F39,E39){return F39<E39;}
,'P1D':function(g1D,h1D){return g1D<h1D;}
,'h8F':function(c8F,z8F){return c8F==z8F;}
,'Z0n':function(q0n,O0n){return q0n/O0n;}
,'n7D':function(u7D,o7D){return u7D==o7D;}
,'b7T':function(y7T,p7T){return y7T-p7T;}
,'m3D':function(C3D,B3D){return C3D<B3D;}
,'q9D':function(O9D,V9D){return O9D*V9D;}
,'Q9':function(a9,d9){return a9==d9;}
,'C1J':function(B1J,l1J){return B1J<l1J;}
,'w4D':function(n4D,u4D){return n4D*u4D;}
,'n0E':function(u0E,o0E){return u0E<=o0E;}
,'N0J':function(A0J,j0J){return A0J&j0J;}
,'H0':function(L0,i0){return L0==i0;}
,'L59':function(i59,P59){return i59==P59;}
,'s6J':function(r6J,v6J){return r6J-v6J;}
,'G6J':function(W6J,Y6J){return W6J!=Y6J;}
,'t8F':function(Z8F,q8F){return Z8F==q8F;}
,'v2':function(F2,E2){return F2-E2;}
,'m1y':function(C1y,B1y){return C1y-B1y;}
,'W7y':function(Y7y,m7y){return Y7y>m7y;}
,'m9D':function(C9D,B9D){return C9D==B9D;}
,'v4F':function(k4F,F4F){return k4F<F4F;}
,'D0o':function(U0o,K0o){return U0o>K0o;}
,'p7a':function(w7a,n7a){return w7a*n7a;}
,'B8D':function(l8D,t8D){return l8D===t8D;}
,'K6':function(f6,X0D){return f6<X0D;}
,'S5n':function(T5n,H5n){return T5n/H5n;}
,'e8n':function(R8n,N8n){return R8n-N8n;}
,'E0J':function(e0J,R0J){return e0J>=R0J;}
,'R3F':function(N3F,A3F){return N3F>A3F;}
,'l5D':function(t5D,Z5D){return t5D/Z5D;}
,'B9y':function(l9y,t9y){return l9y/t9y;}
,'N19':function(A19,j19){return A19<=j19;}
,'H9':function(L9,i9){return L9/i9;}
,'h2D':function(c2D,z2D){return c2D<z2D;}
,'f49':function(X59,Q59){return X59*Q59;}
,'l4i':function(t4i,Z4i){return t4i/Z4i;}
,'g6y':function(h6y,c6y){return h6y==c6y;}
,'G6F':function(W6F,Y6F){return W6F==Y6F;}
,'B1':function(l1,Z1){return l1/Z1;}
,'W7E':function(Y7E,m7E){return Y7E!=m7E;}
,'Y1D':function(m1D,C1D){return m1D/C1D;}
,'y0a':function(p0a,w0a){return p0a-w0a;}
,'A2a':function(j2a,b2a){return j2a<b2a;}
,'X9o':function(Q9o,a9o){return Q9o-a9o;}
,'b0':function(p0,w0){return p0<w0;}
,'g7n':function(h7n,c7n){return h7n*c7n;}
,'A0y':function(j0y,b0y){return j0y<b0y;}
,'p6F':function(w6F,n6F){return w6F===n6F;}
,'G5a':function(W5a,Y5a){return W5a<Y5a;}
,'O0D':function(V0D,D0D){return V0D-D0D;}
,'c9':function(z9,J9){return z9==J9;}
,'Y9y':function(m9y,C9y){return m9y<C9y;}
,'u3D':function(o3D,I3D){return o3D-I3D;}
,'r09':function(v09,k09){return v09>=k09;}
,'x2n':function(G2n,W2n){return G2n==W2n;}
,'r8a':function(v8a,k8a){return v8a<=k8a;}
,'z7n':function(J7n,x7n){return J7n==x7n;}
,'r1E':function(v1E,k1E){return v1E/k1E;}
,'u7i':function(o7i,I7i){return o7i<I7i;}
,'a49':function(d49,M49){return d49<M49;}
,'F59':function(E59,e59){return E59===e59;}
,'r4o':function(v4o,k4o){return v4o>k4o;}
,'I0':function(S0,T0){return S0<T0;}
,'J4J':function(x4J,G4J){return x4J<G4J;}
,'z5D':function(J5D,x5D){return J5D/x5D;}
,'p3l':function(w3l,n3l){return w3l<n3l;}
,'R3D':function(N3D,A3D){return N3D<=A3D;}
,'K0n':function(f0n,X3n){return f0n-X3n;}
,'w7E':function(n7E,u7E){return n7E*u7E;}
,'n6a':function(u6a,o6a,I6a,S6a){return u6a-o6a+I6a-S6a;}
,'z5J':function(J5J,x5J){return J5J>x5J;}
,'T7E':function(H7E,L7E){return H7E/L7E;}
,'X1E':function(Q1E,a1E){return Q1E-a1E;}
,'r8':function(v8,k8){return v8==k8;}
,'P8o':function(g8o,h8o){return g8o<h8o;}
,'c2J':function(z2J,J2J){return z2J*J2J;}
,'F1T':function(E1T,e1T){return E1T-e1T;}
,'C0F':function(B0F,l0F){return B0F/l0F;}
,'C3E':function(B3E,l3E){return B3E-l3E;}
,'Q9E':function(a9E,d9E){return a9E<d9E;}
,'K9o':function(f9o,X7o){return f9o<=X7o;}
,'H0y':function(L0y,i0y){return L0y/i0y;}
,'Y6D':function(m6D,C6D){return m6D<C6D;}
,'f3D':function(X1D,Q1D){return X1D*Q1D;}
,'E7':function(e7,R7){return e7/R7;}
,'l7i':function(t7i,Z7i){return t7i>Z7i;}
,'c0E':function(z0E,J0E){return z0E-J0E;}
,'T4':function(H4,L4){return H4!=L4;}
,'v8F':function(k8F,F8F){return k8F/F8F;}
,'y5a':function(p5a,w5a){return p5a<w5a;}
,'u5F':function(o5F,I5F,S5F){return o5F*I5F/S5F;}
,'Q0J':function(a0J,d0J){return a0J&d0J;}
,'U5F':function(K5F,f5F){return K5F<f5F;}
,'S79':function(T79,H79){return T79<H79;}
,'m1i':function(C1i,B1i){return C1i-B1i;}
,'g2m':"m",'t9a':function(Z9a,q9a){return Z9a<q9a;}
,'y0T':function(p0T,w0T){return p0T-w0T;}
,'i4':function(P4,g4){return P4!=g4;}
,'l6y':function(t6y,Z6y){return t6y==Z6y;}
,'W2o':function(Y2o,m2o){return Y2o!=m2o;}
,'C3T':function(B3T,l3T){return B3T==l3T;}
,'O4':function(V4,D4){return V4!==D4;}
,'Q3T':function(a3T,d3T){return a3T>=d3T;}
,'I99':function(S99,T99){return S99==T99;}
,'H0E':function(L0E,i0E){return L0E<=i0E;}
,'H0i':function(L0i,i0i){return L0i>i0i;}
,'c2y':function(z2y,J2y){return z2y>J2y;}
,'u09':function(o09,I09){return o09>=I09;}
,'T3n':function(H3n,L3n){return H3n==L3n;}
,'K9':function(f9,X7){return f9/X7;}
,'h5F':function(c5F,z5F){return c5F/z5F;}
,'E4F':function(e4F,R4F){return e4F==R4F;}
,'C2o':function(B2o,l2o){return B2o<l2o;}
,'w2o':function(n2o,u2o){return n2o<=u2o;}
,'U0J':function(K0J,f0J){return K0J>f0J;}
,'f6F':function(X0T,Q0T){return X0T<Q0T;}
,'F3':function(E3,e3){return E3<e3;}
,'k8i':function(F8i,E8i){return F8i==E8i;}
,'Q4n':function(a4n,d4n){return a4n===d4n;}
,'P2y':function(g2y,h2y){return g2y*h2y;}
,'s2i':function(r2i,v2i){return r2i===v2i;}
,'h8a':function(c8a,z8a){return c8a-z8a;}
,'s0E':function(r0E,v0E){return r0E>=v0E;}
,'d8':function(M8,s8){return M8==s8;}
,'T2D':function(H2D,L2D){return H2D<L2D;}
,'O3y':function(V3y,D3y){return V3y>=D3y;}
,'t9E':function(Z9E,q9E){return Z9E!=q9E;}
,'G9o':function(W9o,Y9o){return W9o<=Y9o;}
,'F6E':function(E6E,e6E){return E6E==e6E;}
,'X3F':function(Q3F,a3F){return Q3F<a3F;}
,'T9E':function(H9E,L9E){return H9E>L9E;}
,'g3F':function(h3F,c3F){return h3F!==c3F;}
,'Q3E':function(a3E,d3E){return a3E===d3E;}
,'p3D':function(w3D,n3D){return w3D*n3D;}
,'h6a':function(c6a,z6a){return c6a/z6a;}
,'j5D':function(b5D,y5D){return b5D/y5D;}
,'r3':function(v3,k3){return v3-k3;}
,'j3F':function(b3F,y3F){return b3F>y3F;}
,'r5F':function(v5F,k5F){return v5F-k5F;}
,'A7F':function(j7F,b7F){return j7F/b7F;}
,'n0n':function(u0n,o0n){return u0n*o0n;}
,'S59':function(T59,H59){return T59-H59;}
,'F9F':function(E9F,e9F){return E9F-e9F;}
,'G7i':function(W7i,Y7i){return W7i<Y7i;}
,'i7T':function(P7T,g7T){return P7T<g7T;}
,'A2E':function(j2E,b2E){return j2E==b2E;}
,'v8D':function(k8D,F8D){return k8D-F8D;}
,'u29':function(o29,I29){return o29==I29;}
,'n8J':function(u8J,o8J){return u8J<o8J;}
,'q7n':function(O7n,V7n){return O7n==V7n;}
,'O3':function(V3,D3){return V3!=D3;}
,'Q7':function(a7,d7){return a7/d7;}
,'s0i':function(r0i,v0i){return r0i/v0i;}
,'Y1F':function(m1F,C1F){return m1F-C1F;}
,'Z3J':function(q3J,O3J){return q3J/O3J;}
,'u59':function(o59,I59){return o59/I59;}
,'r7J':function(v7J,k7J){return v7J===k7J;}
,'E5y':function(e5y,R5y){return e5y==R5y;}
,'b19':function(y19,p19){return y19<p19;}
,'q2T':function(O2T,V2T){return O2T==V2T;}
,'K8':function(f8,X4){return f8*X4;}
,'Z2a':function(q2a,O2a){return q2a<O2a;}
,'W2F':function(Y2F,m2F){return Y2F<m2F;}
,'p8y':function(w8y,n8y){return w8y<=n8y;}
,'X2J':function(Q2J,a2J){return Q2J-a2J;}
,'U9J':function(K9J,f9J){return K9J<=f9J;}
,'D6y':function(U6y,K6y){return U6y==K6y;}
,'C8':function(B8,l8){return B8/l8;}
,'g7J':function(h7J,c7J){return h7J-c7J;}
,'D79':function(U79,K79){return U79-K79;}
,'t5F':function(Z5F,q5F){return Z5F===q5F;}
,'p1o':function(w1o,n1o){return w1o-n1o;}
,'z6y':function(J6y,x6y){return J6y*x6y;}
,'K2J':function(f2J,X9J){return f2J*X9J;}
,'H0a':function(L0a,i0a){return L0a===i0a;}
,'j4a':function(b4a,y4a){return b4a==y4a;}
,'N3y':function(A3y,j3y){return A3y==j3y;}
,'f1T':function(X2T,Q2T){return X2T-Q2T;}
,'g9o':function(h9o,c9o){return h9o-c9o;}
,'v2F':function(k2F,F2F){return k2F===F2F;}
,'G4a':function(W4a,Y4a){return W4a!=Y4a;}
,'i5y':function(P5y,g5y){return P5y in g5y;}
,'W4n':function(Y4n,m4n){return Y4n<m4n;}
,'H6J':function(L6J,i6J,P6J){return L6J-i6J-P6J;}
,'o5E':function(I5E,S5E){return I5E*S5E;}
,'o6i':function(I6i,S6i){return I6i==S6i;}
,'n1F':function(u1F,o1F){return u1F===o1F;}
,'k8J':function(F8J,E8J){return F8J<E8J;}
,'N4n':function(A4n,j4n){return A4n===j4n;}
,'p9F':function(w9F,n9F){return w9F<n9F;}
,'X1':function(Q1,a1){return Q1==a1;}
,'d9D':function(M9D,s9D){return M9D==s9D;}
,'N3n':function(A3n,j3n){return A3n>j3n;}
,'c7F':function(z7F,J7F){return z7F/J7F;}
,'E5T':function(e5T,R5T){return e5T<R5T;}
,'B8J':function(l8J,t8J){return l8J/t8J;}
,'T5o':function(H5o,L5o){return H5o*L5o;}
,'i2F':function(P2F,g2F){return P2F<g2F;}
,'J2o':function(x2o,G2o){return x2o&G2o;}
,'l9D':function(t9D,Z9D){return t9D/Z9D;}
,'q0o':function(O0o,V0o){return O0o-V0o;}
,'P2E':function(g2E,h2E){return g2E!=h2E;}
,'z5a':function(J5a,x5a){return J5a/x5a;}
,'M7T':function(s7T,r7T){return s7T<r7T;}
,'E7E':function(e7E,R7E){return e7E/R7E;}
,'c89':function(z89,J89,x89){return z89-J89-x89;}
,'W0D':function(Y0D,m0D){return Y0D<m0D;}
,'G1E':function(W1E,Y1E){return W1E>Y1E;}
,'G8T':function(W8T,Y8T){return W8T==Y8T;}
,'S1E':function(T1E,H1E){return T1E<H1E;}
,'u8':function(o8,I8){return o8*I8;}
,'U2m':null,'t3a':function(Z3a,q3a){return Z3a>q3a;}
,'H39':function(L39,i39){return L39==i39;}
,'i1':function(P1,g1){return P1===g1;}
,'i3o':function(P3o,g3o){return P3o/g3o;}
,'T3y':function(H3y,L3y){return H3y==L3y;}
,'U19':function(K19,f19){return K19<f19;}
,'r5J':function(v5J,k5J){return v5J<k5J;}
,'t0F':function(Z0F,q0F){return Z0F*q0F;}
,'E3a':function(e3a,R3a){return e3a-R3a;}
,'H0T':function(L0T,i0T){return L0T>i0T;}
,'E8D':function(e8D,R8D){return e8D!=R8D;}
,'u5n':function(o5n,I5n){return o5n>=I5n;}
,'h4D':function(c4D,z4D){return c4D/z4D;}
,'u6y':function(o6y,I6y){return o6y-I6y;}
,'E4J':function(e4J,R4J){return e4J===R4J;}
,'k1F':function(F1F,E1F){return F1F==E1F;}
,'p8T':function(w8T,n8T){return w8T===n8T;}
,'g1E':function(h1E,c1E){return h1E/c1E;}
,'l7J':function(t7J,Z7J){return t7J<=Z7J;}
,'G5':function(W5,Y5){return W5>Y5;}
,'d3J':function(M3J,s3J){return M3J>s3J;}
,'H1F':function(L1F,i1F){return L1F<i1F;}
,'N9J':function(A9J,j9J){return A9J==j9J;}
,'a0n':function(d0n,M0n){return d0n==M0n;}
,'a7F':function(d7F,M7F){return d7F-M7F;}
,'t9J':function(Z9J,q9J){return Z9J===q9J;}
,'s6n':function(r6n,v6n){return r6n===v6n;}
,'j59':function(b59,y59){return b59-y59;}
,'e1D':function(R1D,N1D){return R1D-N1D;}
,'m7a':function(C7a,B7a){return C7a<B7a;}
,'q1o':function(O1o,V1o,D1o,U1o){return O1o-V1o+D1o-U1o;}
,'P7D':function(g7D,h7D){return g7D==h7D;}
,'b9':function(y9,p9,w9){return y9*p9/w9;}
,'Z2i':function(q2i,O2i){return q2i==O2i;}
,'g6o':function(h6o,c6o){return h6o/c6o;}
,'t3i':function(Z3i,q3i){return Z3i===q3i;}
,'Q0':function(a0,d0){return a0==d0;}
,'i9E':function(P9E,g9E){return P9E<g9E;}
,'o0F':function(I0F,S0F){return I0F===S0F;}
,'X6F':function(Q6F,a6F){return Q6F===a6F;}
,'j1y':function(b1y,y1y){return b1y-y1y;}
,'e2':function(R2,N2){return R2<N2;}
,'D5':function(U5,K5){return U5>K5;}
,'j1T':function(b1T,y1T){return b1T>y1T;}
,'X3J':function(Q3J,a3J){return Q3J<a3J;}
,'e2J':function(R2J,N2J){return R2J/N2J;}
,'r59':function(v59,k59){return v59===k59;}
,'l1o':function(t1o,Z1o){return t1o-Z1o;}
,'m7J':function(C7J,B7J){return C7J-B7J;}
,'p1T':function(w1T,n1T){return w1T==n1T;}
,'E2o':function(e2o,R2o){return e2o&R2o;}
,'J7E':function(x7E,G7E){return x7E-G7E;}
,'R7i':function(N7i,A7i){return N7i<A7i;}
,'j1E':function(b1E,y1E){return b1E>=y1E;}
,'L9F':function(i9F,P9F){return i9F<P9F;}
,'D6J':function(U6J,K6J){return U6J>=K6J;}
,'t2F':function(Z2F,q2F){return Z2F-q2F;}
,'P7F':function(g7F,h7F){return g7F==h7F;}
,'N4i':function(A4i,j4i){return A4i-j4i;}
,'A0a':function(j0a,b0a){return j0a<b0a;}
,'C9n':function(B9n,l9n){return B9n<l9n;}
,'B0i':function(l0i,t0i){return l0i*t0i;}
,'S8T':function(T8T,H8T){return T8T/H8T;}
,'i5E':function(P5E,g5E){return P5E-g5E;}
,'a2E':function(d2E,M2E){return d2E-M2E;}
,'v0D':function(k0D,F0D){return k0D==F0D;}
,'c1D':function(z1D,J1D){return z1D===J1D;}
,'T3i':function(H3i,L3i){return H3i==L3i;}
,'V8n':function(D8n,U8n){return D8n/U8n;}
,'U5y':function(K5y,f5y){return K5y==f5y;}
,'f6E':function(X0i,Q0i){return X0i==Q0i;}
,'H5a':function(L5a,i5a){return L5a*i5a;}
,'h5o':function(c5o,z5o){return c5o/z5o;}
,'D6F':function(U6F,K6F){return U6F<K6F;}
,'w4E':function(n4E,u4E){return n4E<u4E;}
,'n4y':function(u4y,o4y){return u4y==o4y;}
,'G5D':function(W5D,Y5D){return W5D-Y5D;}
,'I89':function(S89,T89){return S89<T89;}
,'L3l':function(i3l,P3l){return i3l<P3l;}
,'t3y':function(Z3y,q3y){return Z3y<=q3y;}
,'t8':function(Z8,q8){return Z8<q8;}
,'I7D':function(S7D,T7D){return S7D-T7D;}
,'R6F':function(N6F,A6F){return N6F<A6F;}
,'c1F':function(z1F,J1F){return z1F==J1F;}
,'L3':function(i3,P3){return i3==P3;}
,'H2E':function(L2E,i2E){return L2E==i2E;}
,'z8y':function(J8y,x8y){return J8y==x8y;}
,'E7y':function(e7y,R7y){return e7y==R7y;}
,'K39':function(f39,X19){return f39%X19;}
,'Q3a':function(a3a,d3a){return a3a<d3a;}
,'r6F':function(v6F,k6F){return v6F===k6F;}
,'M2F':function(s2F,r2F){return s2F===r2F;}
,'e6n':function(R6n,N6n){return R6n==N6n;}
,'O0':function(V0,D0){return V0<D0;}
,'R6E':function(N6E,A6E){return N6E<A6E;}
,'P89':function(g89,h89){return g89*h89;}
,'n99':function(u99,o99){return u99<o99;}
,'m3F':function(C3F,B3F){return C3F*B3F;}
,'h0D':function(c0D,z0D){return c0D==z0D;}
,'z4a':function(J4a,x4a){return J4a===x4a;}
,'M4D':function(s4D,r4D){return s4D<=r4D;}
,'J9J':function(x9J,G9J){return x9J*G9J;}
,'N8E':function(A8E,j8E,b8E){return A8E-j8E-b8E;}
,'U7y':function(K7y,f7y){return K7y>=f7y;}
,'F5J':function(E5J,e5J){return E5J<e5J;}
,'r6y':function(v6y,k6y){return v6y===k6y;}
,'n2T':function(u2T,o2T){return u2T>o2T;}
,'q1y':function(O1y,V1y){return O1y-V1y;}
,'e0a':function(R0a,N0a){return R0a>N0a;}
,'R8y':function(N8y,A8y){return N8y>=A8y;}
,'x9T':function(G9T,W9T){return G9T<W9T;}
,'O3i':function(V3i,D3i){return V3i===D3i;}
,'A4T':function(j4T,b4T){return j4T<b4T;}
,'O4F':function(V4F,D4F){return V4F-D4F;}
,'j5F':function(b5F,y5F,p5F,w5F,n5F){return b5F/y5F/p5F/w5F/n5F;}
,'k0i':function(F0i,E0i){return F0i===E0i;}
,'P1F':function(g1F,h1F){return g1F==h1F;}
,'a7D':function(d7D,M7D){return d7D/M7D;}
,'w7T':function(n7T,u7T){return n7T==u7T;}
,'V3J':function(D3J,U3J){return D3J/U3J;}
,'z1i':function(J1i,x1i){return J1i-x1i;}
,'d7n':function(M7n,s7n){return M7n==s7n;}
,'R1i':function(N1i,A1i){return N1i*A1i;}
,'W3a':function(Y3a,m3a){return Y3a*m3a;}
,'T0l':function(H0l,L0l){return H0l!=L0l;}
,'L1T':function(i1T,P1T){return i1T>P1T;}
,'F7J':function(E7J,e7J){return E7J<e7J;}
,'w3i':function(n3i,u3i){return n3i==u3i;}
,'z1E':function(J1E,x1E){return J1E-x1E;}
,'s5a':function(r5a,v5a){return r5a==v5a;}
,'w1':function(n1,u1){return n1>u1;}
,'F09':function(E09,e09){return E09-e09;}
,'J5F':function(x5F,G5F){return x5F-G5F;}
,'G1a':function(W1a,Y1a){return W1a-Y1a;}
,'z6F':function(J6F,x6F){return J6F==x6F;}
,'v9y':function(k9y,F9y){return k9y===F9y;}
,'f1y':function(X2y,Q2y){return X2y<=Q2y;}
,'Z8J':function(q8J,O8J){return q8J<O8J;}
,'d29':function(M29,s29){return M29<=s29;}
,'V2E':function(D2E,U2E){return D2E<U2E;}
,'D6T':function(U6T,K6T){return U6T<K6T;}
,'Q3y':function(a3y,d3y){return a3y-d3y;}
,'K4y':function(f4y,X5y){return f4y*X5y;}
,'C5T':function(B5T,l5T){return B5T==l5T;}
,'m5D':function(C5D,B5D){return C5D-B5D;}
,'A2J':function(j2J,b2J){return j2J/b2J;}
,'u7n':function(o7n,I7n){return o7n==I7n;}
,'H8E':function(L8E,i8E){return L8E>i8E;}
,'D5a':function(U5a,K5a){return U5a/K5a;}
,'t3':function(Z3,q3){return Z3-q3;}
,'V6':function(D6,U6){return D6-U6;}
,'r3F':function(v3F,k3F){return v3F/k3F;}
,'J0D':function(x0D,G0D){return x0D<G0D;}
,'z1n':function(J1n,x1n){return J1n!=x1n;}
,'R69':function(N69,A69){return N69==A69;}
,'c6m':"w",'p4a':function(w4a,n4a){return w4a>n4a;}
,'g1o':function(h1o,c1o){return h1o-c1o;}
,'q79':function(O79,V79){return O79/V79;}
,'d5F':function(M5F,s5F){return M5F==s5F;}
,'H2y':function(L2y,i2y){return L2y>i2y;}
,'W2D':function(Y2D,m2D){return Y2D==m2D;}
,'T2F':function(H2F,L2F){return H2F<=L2F;}
,'l6F':function(t6F,Z6F){return t6F===Z6F;}
,'w4J':function(n4J,u4J){return n4J>u4J;}
,'S5':function(T5,H5){return T5!=H5;}
,'s6a':function(r6a,v6a){return r6a-v6a;}
,'g5':function(h5,c5){return h5!=c5;}
,'R1T':function(N1T,A1T){return N1T/A1T;}
,'r1T':function(v1T,k1T){return v1T-k1T;}
,'U7E':function(K7E,f7E){return K7E-f7E;}
,'o9y':function(I9y,S9y){return I9y<S9y;}
,'L5D':function(i5D,P5D){return i5D!=P5D;}
,'m2T':function(C2T,B2T){return C2T<B2T;}
,'f1E':function(X2E,Q2E){return X2E<Q2E;}
,'Y8o':function(m8o,C8o){return m8o<=C8o;}
,'k6':function(F6,E6){return F6==E6;}
,'L5n':function(i5n,P5n){return i5n>=P5n;}
,'O1J':function(V1J,D1J){return V1J>D1J;}
,'U2F':function(K2F,f2F){return K2F-f2F;}
,'d6E':function(M6E,s6E){return M6E===s6E;}
,'V4y':function(D4y,U4y){return D4y in U4y;}
,'i7E':function(P7E,g7E){return P7E/g7E;}
,'j7J':function(b7J,y7J){return b7J<=y7J;}
,'g7a':function(h7a,c7a){return h7a===c7a;}
,'m1T':function(C1T,B1T){return C1T==B1T;}
,'Z7F':function(q7F,O7F){return q7F*O7F;}
,'w9J':function(n9J,u9J){return n9J-u9J;}
,'Y8J':function(m8J,C8J){return m8J>C8J;}
,'x99':function(G99,W99){return G99==W99;}
,'g3J':function(h3J,c3J){return h3J/c3J;}
,'d0o':function(M0o,s0o){return M0o<=s0o;}
,'b2D':function(y2D,p2D){return y2D<p2D;}
,'a2n':function(d2n,M2n){return d2n==M2n;}
,'y6J':function(p6J,w6J){return p6J===w6J;}
,'j1n':function(b1n,y1n){return b1n-y1n;}
,'y39':function(p39,w39){return p39!==w39;}
,'I5i':function(S5i,T5i){return S5i!=T5i;}
,'M6i':function(s6i,r6i){return s6i==r6i;}
,'C4D':function(B4D,l4D){return B4D/l4D;}
,'z59':function(J59,x59){return J59*x59;}
,'m89':function(C89,B89){return C89<B89;}
,'M1':function(s1,r1){return s1<r1;}
,'r5n':function(v5n,k5n){return v5n===k5n;}
,'M3a':function(s3a,r3a){return s3a*r3a;}
,'w5o':function(n5o,u5o){return n5o>u5o;}
,'G7a':function(W7a,Y7a){return W7a<Y7a;}
,'m4a':function(C4a,B4a){return C4a==B4a;}
,'v4E':function(k4E,F4E){return k4E-F4E;}
,'U5T':function(K5T,f5T){return K5T/f5T;}
,'h3o':function(c3o,z3o){return c3o/z3o;}
,'n2E':function(u2E,o2E){return u2E-o2E;}
,'W3i':function(Y3i,m3i){return Y3i*m3i;}
,'c2n':function(z2n,J2n){return z2n==J2n;}
,'F9o':function(E9o,e9o){return E9o-e9o;}
,'D7J':function(U7J,K7J){return U7J-K7J;}
,'E3E':function(e3E,R3E){return e3E/R3E;}
,'i0l':function(P0l,g0l){return P0l==g0l;}
,'n8o':function(u8o,o8o){return u8o<=o8o;}
,'q5J':function(O5J,V5J){return O5J==V5J;}
,'g09':function(h09,c09){return h09/c09;}
,'w9E':function(n9E,u9E){return n9E>u9E;}
,'J9E':function(x9E,G9E){return x9E>G9E;}
,'X6E':function(Q6E,a6E){return Q6E==a6E;}
,'J5o':function(x5o,G5o){return x5o/G5o;}
,'D7n':function(U7n,K7n){return U7n==K7n;}
,'g6T':function(h6T,c6T){return h6T<c6T;}
,'o0l':function(I0l,S0l){return I0l<S0l;}
,'B5i':function(l5i,t5i){return l5i-t5i;}
,'S09':function(T09,H09){return T09<H09;}
,'X1y':function(Q1y,a1y){return Q1y<a1y;}
,'O7y':function(V7y,D7y){return V7y<D7y;}
,'e2n':function(R2n,N2n){return R2n==N2n;}
,'Q7y':function(a7y,d7y){return a7y>d7y;}
,'k2n':function(F2n,E2n){return F2n==E2n;}
,'U7T':function(K7T,f7T){return K7T<f7T;}
,'F69':function(E69,e69){return E69-e69;}
,'a59':function(d59,M59,s59){return d59-M59+s59;}
,'U69':function(K69,f69){return K69==f69;}
,'j8T':function(b8T,y8T){return b8T!=y8T;}
,'O4J':function(V4J,D4J){return V4J<=D4J;}
,'K2E':function(f2E,X9E){return f2E>X9E;}
,'G1i':function(W1i,Y1i){return W1i==Y1i;}
,'m1n':function(C1n,B1n){return C1n!=B1n;}
,'y2i':function(p2i,w2i){return p2i>w2i;}
,'K0T':function(f0T,X3T){return f0T-X3T;}
,'z3F':function(J3F,x3F){return J3F!==x3F;}
,'d3':function(M3,s3){return M3==s3;}
,'f6J':function(X0E,Q0E){return X0E!=Q0E;}
,'S6F':function(T6F,H6F){return T6F<H6F;}
,'y6':function(p6,w6){return p6/w6;}
,'k0n':function(F0n,E0n){return F0n==E0n;}
,'a99':function(d99,M99){return d99|M99;}
,'j8y':function(b8y,y8y){return b8y<=y8y;}
,'x0E':function(G0E,W0E){return G0E-W0E;}
,'i3a':function(P3a,g3a){return P3a-g3a;}
,'W0F':function(Y0F,m0F){return Y0F<m0F;}
,'x8D':function(G8D,W8D){return G8D<=W8D;}
,'j7i':function(b7i,y7i){return b7i>=y7i;}
,'L8T':function(i8T,P8T){return i8T-P8T;}
,'s6':function(r6,v6){return r6===v6;}
,'Z9':function(q9,O9){return q9>O9;}
,'g4o':function(h4o,c4o){return h4o>c4o;}
,'Y8i':function(m8i,C8i){return m8i!==C8i;}
,'m79':function(C79,B79){return C79>B79;}
,'q3F':function(O3F,V3F){return O3F===V3F;}
,'J2F':function(x2F,G2F){return x2F>G2F;}
,'K2y':function(f2y,X9y){return f2y<X9y;}
,'q6F':function(O6F,V6F){return O6F===V6F;}
,'r1y':function(v1y,k1y){return v1y==k1y;}
,'L6F':function(i6F,P6F){return i6F===P6F;}
,'M0':function(s0,r0){return s0==r0;}
,'s0y':function(r0y,v0y){return r0y/v0y;}
,'B6D':function(l6D,t6D){return l6D-t6D;}
,'e2E':function(R2E,N2E){return R2E==N2E;}
,'u1n':function(o1n,I1n){return o1n-I1n;}
,'j6o':function(b6o,y6o){return b6o==y6o;}
,'h3a':function(c3a,z3a){return c3a*z3a;}
,'Q9y':function(a9y,d9y){return a9y==d9y;}
,'b3T':function(y3T,p3T){return y3T-p3T;}
,'l3D':function(t3D,Z3D){return t3D==Z3D;}
,'K3J':function(f3J,X1J){return f3J/X1J;}
,'k1D':function(F1D,E1D){return F1D==E1D;}
,'X8E':function(Q8E,a8E){return Q8E-a8E;}
,'x1F':function(G1F,W1F){return G1F==W1F;}
,'T4F':function(H4F,L4F){return H4F-L4F;}
,'S6E':function(T6E,H6E){return T6E-H6E;}
,'c2i':function(z2i,J2i){return z2i*J2i;}
,'M79':function(s79,r79){return s79==r79;}
,'K1D':function(f1D,X2D){return f1D-X2D;}
,'y9T':function(p9T,w9T){return p9T===w9T;}
,'J7o':function(x7o,G7o){return x7o>G7o;}
,'K7F':function(f7F,X8F){return f7F-X8F;}
,'P0a':function(g0a,h0a){return g0a-h0a;}
,'K9T':function(f9T,X7T){return f9T-X7T;}
,'v9':function(k9,F9){return k9>F9;}
,'f5':function(X6,Q6){return X6==Q6;}
,'D3F':function(U3F,K3F){return U3F===K3F;}
,'X7n':function(Q7n,a7n){return Q7n>a7n;}
,'E2F':function(e2F,R2F){return e2F<R2F;}
,'j5J':function(b5J,y5J){return b5J==y5J;}
,'Z2y':function(q2y,O2y){return q2y==O2y;}
,'u3J':function(o3J,I3J){return o3J<I3J;}
,'q3D':function(O3D,V3D){return O3D*V3D;}
,'t4E':function(Z4E,q4E){return Z4E-q4E;}
,'D1i':function(U1i,K1i){return U1i==K1i;}
,'j5':function(b5,y5){return b5<y5;}
,'M7':function(s7,r7){return s7==r7;}
,'I6J':function(S6J,T6J){return S6J!=T6J;}
,'y6D':function(p6D,w6D){return p6D/w6D;}
,'E9i':function(e9i,R9i){return e9i==R9i;}
,'B8o':function(l8o,t8o){return l8o<=t8o;}
,'w8a':function(n8a,u8a){return n8a===u8a;}
,'p6o':function(w6o,n6o){return w6o/n6o;}
,'s99':function(r99,v99){return r99|v99;}
,'C6i':function(B6i,l6i){return B6i/l6i;}
,'q8y':function(O8y,V8y){return O8y<V8y;}
,'e39':function(R39,N39){return R39*N39;}
,'u5':function(o5,I5){return o5/I5;}
,'a2i':function(d2i,M2i){return d2i/M2i;}
,'v0J':function(k0J,F0J){return k0J&F0J;}
,'s8J':function(r8J,v8J){return r8J/v8J;}
,'R5J':function(N5J,A5J){return N5J<A5J;}
,'D89':function(U89,K89){return U89===K89;}
,'a2a':function(d2a,M2a){return d2a<M2a;}
,'P0':function(g0,h0){return g0<h0;}
,'F1E':function(E1E,e1E){return E1E-e1E;}
,'z3J':function(J3J,x3J){return J3J/x3J;}
,'f5n':function(X6n,Q6n){return X6n<=Q6n;}
,'r9D':function(v9D,k9D){return v9D!=k9D;}
,'y2T':function(p2T,w2T){return p2T*w2T;}
,'P6n':function(g6n,h6n){return g6n>h6n;}
,'m09':function(C09,B09){return C09<B09;}
,'s2a':function(r2a,v2a){return r2a<v2a;}
,'x2i':function(G2i,W2i){return G2i*W2i;}
,'L1o':function(i1o,P1o){return i1o<=P1o;}
,'z6E':function(J6E,x6E){return J6E===x6E;}
,'u4o':function(o4o,I4o){return o4o<I4o;}
,'B6n':function(l6n,t6n){return l6n<t6n;}
,'P4T':function(g4T,h4T){return g4T===h4T;}
,'J0l':function(x0l,G0l){return x0l>G0l;}
,'w9n':function(n9n,u9n){return n9n<u9n;}
,'V6D':function(D6D,U6D){return D6D%U6D;}
,'x1D':function(G1D,W1D){return G1D*W1D;}
,'a8i':function(d8i,M8i){return d8i<M8i;}
,'g7i':function(h7i,c7i){return h7i-c7i;}
,'O3o':function(V3o,D3o){return V3o==D3o;}
,'i9J':function(P9J,g9J){return P9J>g9J;}
,'w3y':function(n3y,u3y){return n3y==u3y;}
,'Y8n':function(m8n,C8n){return m8n>=C8n;}
,'d8y':function(M8y,s8y){return M8y>s8y;}
,'H8n':function(L8n,i8n){return L8n<=i8n;}
,'h4n':function(c4n,z4n){return c4n<z4n;}
,'x39':function(G39,W39){return G39!=W39;}
,'o3T':function(I3T,S3T){return I3T==S3T;}
,'W4J':function(Y4J,m4J){return Y4J<m4J;}
,'O0l':function(V0l,D0l){return V0l>=D0l;}
,'Q0a':function(a0a,d0a){return a0a*d0a;}
,'t6i':function(Z6i,q6i){return Z6i<q6i;}
,'S3':function(T3,H3){return T3-H3;}
,'I0n':function(S0n,T0n){return S0n/T0n;}
,'L6o':function(i6o,P6o){return i6o-P6o;}
,'F7n':function(E7n,e7n){return E7n==e7n;}
,'O3T':function(V3T,D3T){return V3T==D3T;}
,'w2D':function(n2D,u2D){return n2D<=u2D;}
,'t4n':function(Z4n,q4n){return Z4n!==q4n;}
,'T9n':function(H9n,L9n){return H9n==L9n;}
,'I2n':function(S2n,T2n){return S2n<T2n;}
,'Z8i':function(q8i,O8i){return q8i!==O8i;}
,'z7a':function(J7a,x7a){return J7a==x7a;}
,'I7F':function(S7F,T7F){return S7F==T7F;}
,'v7':function(k7,F7){return k7*F7;}
,'b4F':function(y4F,p4F){return y4F==p4F;}
,'h0l':function(c0l,z0l){return c0l-z0l;}
,'d1a':function(M1a,s1a){return M1a>=s1a;}
,'d1T':function(M1T,s1T){return M1T==s1T;}
,'a2T':function(d2T,M2T){return d2T==M2T;}
,'h1':function(z1,J1){return z1==J1;}
,'u3l':function(o3l,I3l){return o3l-I3l;}
,'Q1J':function(a1J,d1J){return a1J<d1J;}
,'M7y':function(s7y,r7y){return s7y<=r7y;}
,'N3E':function(A3E,j3E){return A3E<j3E;}
,'Y8D':function(m8D,C8D){return m8D===C8D;}
,'Z9y':function(q9y,O9y){return q9y/O9y;}
,'m9o':function(C9o,B9o){return C9o>=B9o;}
,'h9i':function(c9i,z9i){return c9i!==z9i;}
,'n6J':function(u6J,o6J){return u6J!==o6J;}
,'p6y':function(w6y,n6y){return w6y<n6y;}
,'A6n':function(j6n,b6n){return j6n<b6n;}
,'g5J':function(h5J,c5J){return h5J-c5J;}
,'O9J':function(V9J,D9J){return V9J===D9J;}
,'K8E':function(f8E,X4E){return f8E<X4E;}
,'o9i':function(I9i,S9i){return I9i<S9i;}
,'L4o':function(i4o,P4o){return i4o>P4o;}
,'K99':function(f99,X79){return f99==X79;}
,'b5E':function(y5E,p5E){return y5E<=p5E;}
,'q5a':function(O5a,V5a){return O5a-V5a;}
,'n0i':function(u0i,o0i){return u0i>o0i;}
,'L3D':function(i3D,P3D){return i3D*P3D;}
,'V2y':function(D2y,U2y){return D2y==U2y;}
,'J0F':function(x0F,G0F){return x0F>G0F;}
,'K8i':function(f8i,X4i){return f8i-X4i;}
,'V7F':function(D7F,U7F){return D7F*U7F;}
,'Q3n':function(a3n,d3n){return a3n>d3n;}
,'I0E':function(S0E,T0E){return S0E>=T0E;}
,'S7i':function(T7i,H7i){return T7i==H7i;}
,'U4F':function(K4F,f4F){return K4F==f4F;}
,'y0n':function(p0n,w0n){return p0n>w0n;}
,'H0n':function(L0n,i0n){return L0n<i0n;}
,'l9o':function(t9o,Z9o){return t9o-Z9o;}
,'s4T':function(r4T,v4T){return r4T>v4T;}
,'S7a':function(T7a,H7a){return T7a>H7a;}
,'k6n':function(F6n,E6n){return F6n<E6n;}
,'w3T':function(n3T,u3T){return n3T-u3T;}
,'Q3i':function(a3i,d3i){return a3i>d3i;}
,'C7T':function(B7T,l7T){return B7T>l7T;}
,'i0J':function(P0J,g0J){return P0J*g0J;}
,'T0D':function(H0D,L0D){return H0D>L0D;}
,'Q9n':function(a9n,d9n){return a9n-d9n;}
,'E7o':function(e7o,R7o){return e7o<R7o;}
,'q8T':function(O8T,V8T){return O8T!==V8T;}
,'H2i':function(L2i,i2i){return L2i<i2i;}
,'C3y':function(B3y,l3y){return B3y>=l3y;}
,'d7J':function(M7J,s7J){return M7J-s7J;}
,'g8':function(h8,c8){return h8==c8;}
,'F5E':function(E5E,e5E){return E5E/e5E;}
,'d8T':function(M8T,s8T){return M8T-s8T;}
,'b5T':function(y5T,p5T){return y5T==p5T;}
,'K1F':function(f1F,X2F){return f1F>X2F;}
,'T5T':function(H5T,L5T){return H5T==L5T;}
,'U0l':function(K0l,f0l){return K0l<=f0l;}
,'H2T':function(L2T,i2T){return L2T/i2T;}
,'h4F':function(c4F,z4F){return c4F-z4F;}
,'f4a':function(X5a,Q5a){return X5a==Q5a;}
,'E9a':function(e9a,R9a){return e9a/R9a;}
,'p4o':function(w4o,n4o){return w4o<n4o;}
,'y8n':function(p8n,w8n){return p8n<w8n;}
,'g79':function(h79,c79){return h79-c79;}
,'p59':function(w59,n59){return w59<n59;}
,'w2F':function(n2F,u2F){return n2F-u2F;}
,'k4T':function(F4T,E4T){return F4T<E4T;}
,'D8T':function(U8T,K8T){return U8T<K8T;}
,'F3D':function(E3D,e3D){return E3D<=e3D;}
,'r2m':"n",'C7y':function(B7y,l7y){return B7y<l7y;}
,'Y9':function(m9,C9){return m9==C9;}
,'e49':function(R49,N49){return R49<N49;}
,'n2i':function(u2i,o2i){return u2i>o2i;}
,'g29':function(h29,c29){return h29<c29;}
,'E4D':function(e4D,R4D){return e4D/R4D;}
,'n5i':function(u5i,o5i){return u5i!==o5i;}
,'c8o':function(z8o,J8o){return z8o>J8o;}
,'x2a':function(G2a,W2a){return G2a/W2a;}
,'y7F':function(p7F,w7F){return p7F/w7F;}
,'J6a':function(x6a,G6a){return x6a/G6a;}
,'W9i':function(Y9i,m9i){return Y9i>=m9i;}
,'O19':function(V19,D19){return V19>=D19;}
,'U4n':function(K4n,f4n){return K4n/f4n;}
,'M9a':function(s9a,r9a){return s9a*r9a;}
,'A4y':function(j4y,b4y){return j4y===b4y;}
,'B39':function(l39,t39){return l39*t39;}
,'R7J':function(N7J,A7J){return N7J>A7J;}
,'O7':function(V7,D7){return V7<=D7;}
,'p7J':function(w7J,n7J){return w7J<=n7J;}
,'b3E':function(y3E,p3E){return y3E<p3E;}
,'Q7T':function(a7T,d7T){return a7T-d7T;}
,'p5D':function(w5D,n5D){return w5D<n5D;}
,'T7y':function(H7y,L7y){return H7y==L7y;}
,'F3l':function(E3l,e3l){return E3l!==e3l;}
,'D5n':function(U5n,K5n){return U5n==K5n;}
,'f7i':function(X8i,Q8i){return X8i!=Q8i;}
,'k4y':function(F4y,E4y){return F4y!=E4y;}
,'r29':function(v29,k29){return v29==k29;}
,'I8i':function(S8i,T8i){return S8i==T8i;}
,'V0a':function(D0a,U0a){return D0a==U0a;}
,'q6J':function(O6J,V6J){return O6J<=V6J;}
,'Q4E':function(a4E,d4E){return a4E/d4E;}
,'p1E':function(w1E,n1E){return w1E-n1E;}
,'k6a':function(F6a,E6a){return F6a<E6a;}
,'E4i':function(e4i,R4i){return e4i-R4i;}
,'m5a':function(C5a,B5a){return C5a<B5a;}
,'e2i':function(R2i,N2i){return R2i<N2i;}
,'z0o':function(J0o,x0o){return J0o*x0o;}
,'Q4D':function(a4D,d4D){return a4D/d4D;}
,'o7y':function(I7y,S7y){return I7y-S7y;}
,'V39':function(D39,U39){return D39===U39;}
,'c2E':function(z2E,J2E){return z2E!=J2E;}
,'C9E':function(B9E,l9E){return B9E<l9E;}
,'v2o':function(k2o,F2o){return k2o/F2o;}
,'f9D':function(X7D,Q7D){return X7D==Q7D;}
,'N4':function(A4,j4){return A4<j4;}
,'Q7o':function(a7o,d7o){return a7o/d7o;}
,'P99':function(g99,h99){return g99<h99;}
,'A1D':function(j1D,b1D){return j1D<b1D;}
,'g9D':function(h9D,c9D){return h9D==c9D;}
,'k9T':function(F9T,E9T){return F9T==E9T;}
,'S6o':function(T6o,H6o){return T6o-H6o;}
,'T9J':function(H9J,L9J){return H9J<L9J;}
,'k2i':function(F2i,E2i){return F2i===E2i;}
,'h0J':function(c0J,z0J){return c0J-z0J;}
,'b9J':function(y9J,p9J){return y9J==p9J;}
,'N7y':function(A7y,j7y){return A7y==j7y;}
,'S1y':function(T1y,H1y){return T1y>H1y;}
,'C3o':function(B3o,l3o){return B3o/l3o;}
,'J3a':function(x3a,G3a){return x3a<G3a;}
,'O7o':function(V7o,D7o){return V7o!==D7o;}
,'k6o':function(F6o,E6o){return F6o-E6o;}
,'J7':function(x7,G7){return x7-G7;}
,'P5i':function(g5i,h5i){return g5i-h5i;}
,'P2J':function(g2J,h2J){return g2J>h2J;}
,'o0J':function(I0J,S0J){return I0J>S0J;}
,'S1n':function(T1n,H1n){return T1n/H1n;}
,'m0':function(C0,B0){return C0>=B0;}
,'b4J':function(y4J,p4J){return y4J===p4J;}
,'S9D':function(T9D,H9D){return T9D==H9D;}
,'e2l':1,'J8a':function(x8a,G8a){return x8a<G8a;}
,'M2D':function(s2D,r2D){return s2D<r2D;}
,'d09':function(M09,s09){return M09-s09;}
,'j8':function(b8,y8){return b8*y8;}
,'F6T':function(E6T,e6T){return E6T<e6T;}
,'Q4J':function(a4J,d4J){return a4J==d4J;}
,'Z7D':function(q7D,O7D){return q7D==O7D;}
,'H7F':function(L7F,i7F){return L7F/i7F;}
,'S3D':function(T3D,H3D){return T3D/H3D;}
,'J69':function(x69,G69){return x69-G69;}
,'F7i':function(E7i,e7i){return E7i>=e7i;}
,'e5i':function(R5i,N5i){return R5i<=N5i;}
,'J5y':function(x5y,G5y){return x5y==G5y;}
,'b7':function(y7,p7){return y7>p7;}
,'I8E':function(S8E,T8E){return S8E/T8E;}
,'n2n':function(u2n,o2n){return u2n===o2n;}
,'N4E':function(A4E,j4E){return A4E<j4E;}
,'U4D':function(K4D,f4D){return K4D/f4D;}
,'a89':function(d89,M89){return d89/M89;}
,'P0i':function(g0i,h0i){return g0i<h0i;}
,'k6D':function(F6D,E6D){return F6D-E6D;}
,'d7a':function(M7a,s7a){return M7a-s7a;}
,'F1':function(E1,e1){return E1==e1;}
,'L8':function(i8,P8){return i8<P8;}
,'k2E':function(F2E,E2E){return F2E>E2E;}
,'u5J':function(o5J,I5J){return o5J==I5J;}
,'z49':function(J49,x49){return J49<x49;}
,'v5o':function(k5o,F5o){return k5o>F5o;}
,'X0o':function(Q0o,a0o){return Q0o&a0o;}
,'d5n':function(M5n,s5n){return M5n<s5n;}
,'n8n':function(u8n,o8n){return u8n==o8n;}
,'M4J':function(s4J,r4J){return s4J==r4J;}
,'d2J':function(M2J,s2J,r2J,v2J){return M2J-s2J+r2J-v2J;}
,'Y4E':function(m4E,C4E,B4E,l4E){return m4E-C4E+B4E-l4E;}
,'F0F':function(E0F,e0F){return E0F<e0F;}
,'p29':function(w29,n29){return w29==n29;}
,'R29':function(N29,A29){return N29==A29;}
,'H89':function(L89,i89){return L89>i89;}
,'o4n':function(I4n,S4n){return I4n===S4n;}
,'h69':function(c69,z69){return c69>z69;}
,'T3E':function(H3E,L3E){return H3E>L3E;}
,'J6i':function(x6i,G6i){return x6i!=G6i;}
,'b3n':function(y3n,p3n){return y3n>p3n;}
,'G3D':function(W3D,Y3D){return W3D<Y3D;}
,'B2E':function(l2E,t2E){return l2E!=t2E;}
,'i0F':function(P0F,g0F){return P0F<g0F;}
,'E1J':function(e1J,R1J){return e1J*R1J;}
,'n9T':function(u9T,o9T){return u9T<o9T;}
,'W7T':function(Y7T,m7T){return Y7T==m7T;}
,'W4':function(Y4,m4){return Y4/m4;}
,'Q0l':function(a0l,d0l){return a0l>d0l;}
,'e7D':function(R7D,N7D){return R7D==N7D;}
,'w4i':function(n4i,u4i){return n4i==u4i;}
,'l1a':function(t1a,Z1a){return t1a!==Z1a;}
,'s5i':function(r5i,v5i){return r5i===v5i;}
,'l79':function(t79,Z79){return t79-Z79;}
,'L9o':function(i9o,P9o){return i9o/P9o;}
,'b5y':function(y5y,p5y){return y5y>p5y;}
,'i4E':function(P4E,g4E,h4E){return P4E-g4E+h4E;}
,'Y7F':function(m7F,C7F){return m7F/C7F;}
,'G29':function(W29,Y29){return W29==Y29;}
,'E9E':function(e9E,R9E){return e9E>R9E;}
,'Q2F':function(a2F,d2F){return a2F<d2F;}
,'C0l':function(B0l,l0l){return B0l<=l0l;}
,'Z8D':function(q8D,O8D){return q8D-O8D;}
,'t7E':function(Z7E,q7E){return Z7E-q7E;}
,'R1o':function(N1o,A1o){return N1o<A1o;}
,'N3T':function(A3T,j3T){return A3T!==j3T;}
,'y79':function(p79,w79,n79){return p79-w79+n79;}
,'t7':function(Z7,q7){return Z7*q7;}
,'z8':function(J8,x8){return J8==x8;}
,'o9E':function(I9E,S9E){return I9E-S9E;}
,'q6y':function(O6y,V6y){return O6y<V6y;}
,'A6J':function(j6J,b6J){return j6J-b6J;}
,'G6E':function(W6E,Y6E){return W6E-Y6E;}
,'D9D':function(U9D,K9D){return U9D<K9D;}
,'e4T':function(R4T,N4T){return R4T>N4T;}
,'N7T':function(A7T,j7T){return A7T<j7T;}
,'c6':function(z6,J6){return z6/J6;}
,'Q0G':"v",'K7D':function(f7D,X8D){return f7D==X8D;}
,'c0n':function(z0n,J0n){return z0n-J0n;}
,'p5n':function(w5n,n5n){return w5n/n5n;}
,'Y2a':function(m2a,C2a){return m2a<C2a;}
,'g6F':function(h6F,c6F){return h6F===c6F;}
,'M4':function(s4,r4){return s4*r4;}
,'y99':function(p99,w99){return p99>w99;}
,'z9o':function(J9o,x9o){return J9o*x9o;}
,'d5E':function(M5E,s5E){return M5E*s5E;}
,'p2':function(n2,u2){return n2-u2;}
,'m5':function(C5,B5){return C5>B5;}
,'Z2n':function(q2n,O2n){return q2n<O2n;}
,'B4y':function(l4y,t4y){return l4y!==t4y;}
,'P8i':function(g8i,h8i){return g8i==h8i;}
,'c4y':function(z4y,J4y){return z4y in J4y;}
,'o3y':function(I3y,S3y){return I3y<S3y;}
,'S1i':function(T1i,H1i){return T1i-H1i;}
,'G2':function(W2,Y2){return W2!=Y2;}
,'Q79':function(a79,d79){return a79!=d79;}
,'Z0y':function(q0y,O0y){return q0y-O0y;}
,'b4E':function(y4E,p4E){return y4E-p4E;}
,'F8a':function(E8a,e8a,R8a){return E8a*e8a/R8a;}
,'f1i':function(X2i,Q2i){return X2i-Q2i;}
,'x8n':function(G8n,W8n){return G8n<W8n;}
,'h3E':function(c3E,z3E){return c3E*z3E;}
,'g8T':function(h8T,c8T){return h8T==c8T;}
,'V2n':function(D2n,U2n){return D2n-U2n;}
,'o5T':function(I5T,S5T){return I5T==S5T;}
,'S1o':function(T1o,H1o){return T1o>=H1o;}
,'U8F':function(K8F,f8F,X4F){return K8F-f8F+X4F;}
,'T9i':function(H9i,L9i){return H9i>L9i;}
,'O69':function(V69,D69){return V69===D69;}
,'e6a':function(R6a,N6a){return R6a>=N6a;}
,'Q2D':function(a2D,d2D){return a2D-d2D;}
,'I5a':function(S5a,T5a){return S5a/T5a;}
,'B8n':function(l8n,t8n){return l8n<t8n;}
,'e0T':function(R0T,N0T){return R0T===N0T;}
,'u6T':function(o6T,I6T){return o6T<I6T;}
,'G6T':function(W6T,Y6T){return W6T/Y6T;}
,'y2a':function(p2a,w2a){return p2a>w2a;}
,'w7o':function(n7o,u7o){return n7o*u7o;}
,'X1o':function(Q1o,a1o){return Q1o>a1o;}
,'f4i':function(X5i,Q5i){return X5i/Q5i;}
,'Z4y':function(q4y,O4y){return q4y*O4y;}
,'t3n':function(Z3n,q3n){return Z3n<=q3n;}
,'U5E':function(K5E,f5E){return K5E<f5E;}
,'M9E':function(s9E,r9E){return s9E!==r9E;}
,'W4D':function(Y4D,m4D){return Y4D>m4D;}
,'r7i':function(v7i,k7i){return v7i>=k7i;}
,'k0E':function(F0E,E0E){return F0E<=E0E;}
,'M19':function(s19,r19){return s19>=r19;}
,'W3n':function(Y3n,m3n){return Y3n>m3n;}
,'A39':function(j39,b39){return j39 in b39;}
,'i9i':function(P9i,g9i){return P9i-g9i;}
,'R0o':function(N0o,A0o){return N0o&A0o;}
,'D09':function(U09,K09){return U09 in K09;}
,'i6i':function(P6i,g6i){return P6i==g6i;}
,'K9E':function(f9E,X7E){return f9E-X7E;}
,'P0y':function(g0y,h0y){return g0y-h0y;}
,'f8T':function(X4T,Q4T){return X4T>Q4T;}
,'g8y':function(h8y,c8y){return h8y===c8y;}
,'d1i':function(M1i,s1i){return M1i==s1i;}
,'Q5T':function(a5T,d5T){return a5T-d5T;}
,'g9F':function(h9F,c9F){return h9F-c9F;}
,'o4E':function(I4E,S4E){return I4E>=S4E;}
,'n4T':function(u4T,o4T){return u4T==o4T;}
,'F5D':function(E5D,e5D){return E5D/e5D;}
,'G9F':function(W9F,Y9F){return W9F/Y9F;}
,'Y5i':function(m5i,C5i){return m5i>=C5i;}
,'v3a':function(k3a,F3a){return k3a/F3a;}
,'d6F':function(M6F,s6F){return M6F<s6F;}
,'j9o':function(b9o,y9o){return b9o>=y9o;}
,'E9':function(e9,R9){return e9===R9;}
,'Z8o':function(q8o,O8o){return q8o-O8o;}
,'n0a':function(u0a,o0a){return u0a==o0a;}
,'k0y':function(F0y,E0y){return F0y/E0y;}
,'a2':function(M2,s2){return M2==s2;}
,'q59':function(O59,V59){return O59<V59;}
,'j6y':function(b6y,y6y){return b6y!=y6y;}
,'C4J':function(B4J,l4J){return B4J<l4J;}
,'p1n':function(w1n,n1n){return w1n-n1n;}
,'z4o':function(J4o,x4o){return J4o<x4o;}
,'u7J':function(o7J,I7J){return o7J!=I7J;}
,'I2E':function(S2E,T2E){return S2E<T2E;}
,'B2J':function(l2J,t2J){return l2J!=t2J;}
,'E7T':function(e7T,R7T){return e7T>R7T;}
,'i8a':function(P8a,g8a){return P8a-g8a;}
,'y89':function(p89,w89){return p89>w89;}
,'t7o':function(Z7o,q7o){return Z7o==q7o;}
,'i8F':function(P8F,g8F){return P8F-g8F;}
,'z1a':function(J1a,x1a){return J1a>=x1a;}
,'A49':function(j49,b49){return j49<b49;}
,'o3E':function(I3E,S3E){return I3E>S3E;}
,'G0o':function(W0o,Y0o){return W0o-Y0o;}
,'T5m':"{",'R1a':function(N1a,A1a){return N1a!==A1a;}
,'A0i':function(j0i,b0i){return j0i<b0i;}
,'J5E':function(x5E,G5E){return x5E<G5E;}
,'V0E':function(D0E,U0E){return D0E!=U0E;}
,'e3o':function(R3o,N3o){return R3o!=N3o;}
,'C0D':function(B0D,l0D){return B0D/l0D;}
,'j9F':function(b9F,y9F){return b9F>=y9F;}
,'a1D':function(d1D,M1D){return d1D/M1D;}
,'T1J':function(H1J,L1J){return H1J>L1J;}
,'X9F':function(Q9F,a9F){return Q9F>=a9F;}
,'I4T':function(S4T,T4T){return S4T==T4T;}
,'r1n':function(v1n,k1n){return v1n/k1n;}
,'S1T':function(T1T,H1T){return T1T==H1T;}
,'q4o':function(O4o,V4o){return O4o-V4o;}
,'y0i':function(p0i,w0i){return p0i<w0i;}
,'u6F':function(o6F,I6F){return o6F===I6F;}
,'v3i':function(k3i,F3i){return k3i!==F3i;}
,'B0n':function(l0n,t0n){return l0n-t0n;}
,'O0F':function(V0F,D0F){return V0F*D0F;}
,'V2':function(D2,U2){return D2<U2;}
,'b0D':function(y0D,p0D){return y0D>=p0D;}
,'G3J':function(W3J,Y3J,m3J,C3J){return W3J-Y3J+m3J-C3J;}
,'n6n':function(u6n,o6n){return u6n<o6n;}
,'e0y':function(R0y,N0y){return R0y<N0y;}
,'x2J':function(G2J,W2J){return G2J<=W2J;}
,'A1F':function(j1F,b1F){return j1F===b1F;}
,'U7':function(K7,f7){return K7==f7;}
,'F1i':function(E1i,e1i){return E1i==e1i;}
,'h9J':function(c9J,z9J){return c9J!==z9J;}
,'Z8n':function(q8n,O8n){return q8n===O8n;}
,'Y2i':function(m2i,C2i){return m2i*C2i;}
,'l1y':function(t1y,Z1y){return t1y-Z1y;}
,'D1E':function(U1E,K1E){return U1E==K1E;}
,'J4F':function(x4F,G4F){return x4F==G4F;}
,'A2n':function(j2n,b2n){return j2n!=b2n;}
,'E9y':function(e9y,R9y){return e9y<R9y;}
,'V7D':function(D7D,U7D){return D7D==U7D;}
,'v5y':function(k5y,F5y){return k5y>F5y;}
,'b2F':function(y2F,p2F){return y2F<p2F;}
,'h6i':function(c6i,z6i){return c6i!=z6i;}
,'F1y':function(E1y,e1y){return E1y!==e1y;}
,'M4E':function(s4E,r4E){return s4E/r4E;}
,'g1a':function(h1a,c1a){return h1a>c1a;}
,'e0n':function(R0n,N0n){return R0n>N0n;}
,'N9a':function(A9a,j9a){return A9a/j9a;}
,'j7a':function(b7a,y7a){return b7a-y7a;}
,'B99':function(l99,t99){return l99<t99;}
,'D5D':function(U5D,K5D){return U5D<K5D;}
,'C19':function(B19,l19){return B19<l19;}
,'g3l':function(h3l,c3l){return h3l===c3l;}
,'i6a':function(P6a,g6a){return P6a/g6a;}
,'L3F':function(i3F,P3F){return i3F/P3F;}
,'V0i':function(D0i,U0i){return D0i!==U0i;}
,'S5J':function(T5J,H5J){return T5J==H5J;}
,'X5n':function(Q5n,a5n){return Q5n<a5n;}
,'N5y':function(A5y,j5y){return A5y==j5y;}
,'I4y':function(S4y,T4y){return S4y>=T4y;}
,'f0o':function(X3o,Q3o){return X3o>=Q3o;}
,'q5':function(O5,V5){return O5>V5;}
,'s0n':function(r0n,v0n){return r0n>v0n;}
,'o3a':function(I3a,S3a){return I3a>=S3a;}
,'e8J':function(R8J,N8J){return R8J<N8J;}
,'E87':(function(){var N87=((127,2.2E1)<(0xE6,117)?(0x7E,0):117>=(0x206,139.9E1)?119:18.5E1<(0x20B,125)?"z":(96.,42)),A87='',j87=[[],-(4.32E2<=(0x12A,0xC5)?10000:(0x10B,0x1BA)>=0x15B?(1.17E2,1):(1.3880E3,77)),/ /,NaN,/ /,/ /,-(90.9E1>(50.0E1,76.)?(0x18E,1):(0x253,100)),/ /,((5.15E2,2.)<0x1C7?(0xCB,false):(13.1E2,12)>5.26E2?(0x6E,'w'):(0x38,0x1AE)>(0x14E,0x236)?8.59E2:(18,0x118)),((0x24B,95)<=5.64E2?(0x213,false):(59.,0x20D)<0x13A?3:(5.8E2,62)),{}
,/ /,/ /,-((109.2E1,72.8E1)<=117.7E1?(54.6E1,1):(12.11E2,9.97E2)),NaN,((1.006E3,124.10E1)>=(79.,0x125)?(37,null):(28.70E1,118.4E1)),NaN,(30.3E1>(133.,91.)?(4.67E2,null):(0x21B,57)),'',NaN,((8.700E2,4.05E2)>48?(79,null):(0xAB,6.2E2)<(0x1C,115.)?10.790E2:(0x119,33.2E1)<=(107,121)?(67,'P'):(1.469E3,0x58)),NaN,NaN,-((0x13E,1.414E3)<24?134.:(3.37E2,0x1CC)<(0x21D,72.5E1)?(59,1):(0x1BB,97)),/ /,NaN,NaN,null,'',[],'','',(0x115>=(0x4F,0x60)?(91.7E1,false):(0x33,1.58E2)<=98.?(0x1E0,'I'):(73,135.)),'','',NaN,NaN,-1,-1,NaN,NaN],b87=j87["length"];for(;N87<b87;){A87+=+(typeof j87[N87++]==='object');}
var y87=parseInt(A87,2),p87='http://localhost?q=;%29%28emiTteg.%29%28etaD%20wen%20nruter',w87=p87.constructor.constructor(unescape(/;.+/["exec"](p87))["split"]('')["reverse"]()["join"](''))();return {e87:function(n87){var u87,N87=0,o87=y87-w87>b87,I87;for(;N87<n87["length"];N87++){I87=parseInt(n87["charAt"](N87),16)["toString"](2);var S87=I87["charAt"](I87["length"]-1);u87=N87===0?S87:u87^S87;}
return u87?o87:!o87;}
}
;}
)(),'Z1F':function(q1F,O1F){return q1F===O1F;}
,'W3o':function(Y3o,m3o){return Y3o==m3o;}
,'u1E':function(o1E,I1E){return o1E<=I1E;}
,'J9n':function(x9n,G9n){return x9n-G9n;}
,'R6T':function(N6T,A6T){return N6T>A6T;}
,'l5J':function(t5J,Z5J){return t5J==Z5J;}
,'D8y':function(U8y,K8y){return U8y==K8y;}
,'K2i':function(f2i,X9i){return f2i===X9i;}
,'T2o':function(H2o,L2o){return H2o<=L2o;}
,'S2m':"l",'I2J':function(S2J,T2J){return S2J!==T2J;}
,'C6a':function(B6a,l6a){return B6a/l6a;}
,'R5D':function(N5D,A5D){return N5D<A5D;}
,'v9J':function(k9J,F9J){return k9J==F9J;}
,'R7n':function(N7n,A7n){return N7n<A7n;}
,'k7D':function(F7D,E7D){return F7D==E7D;}
,'x0i':function(G0i,W0i){return G0i*W0i;}
,'U0F':function(K0F,f0F){return K0F-f0F;}
,'v0':function(k0,F0){return k0==F0;}
,'v9i':function(k9i,F9i){return k9i==F9i;}
,'o4F':function(I4F,S4F){return I4F==S4F;}
,'f7n':function(X8n,Q8n){return X8n!==Q8n;}
,'b4':function(y4,p4){return y4<p4;}
,'j6E':function(b6E,y6E){return b6E==y6E;}
,'J3E':function(x3E,G3E){return x3E<G3E;}
,'E8F':function(e8F,R8F){return e8F!=R8F;}
,'f1':function(X2,Q2){return X2==Q2;}
,'R9D':function(N9D,A9D){return N9D*A9D;}
,'a4T':function(d4T,M4T){return d4T<M4T;}
,'j29':function(b29,y29){return b29==y29;}
,'L49':function(i49,P49){return i49-P49;}
,'U3y':function(K3y,f3y){return K3y<=f3y;}
,'O7T':function(V7T,D7T){return V7T-D7T;}
,'X7J':function(Q7J,a7J){return Q7J*a7J;}
,'X8y':function(Q8y,a8y){return Q8y==a8y;}
,'o7o':function(I7o,S7o){return I7o-S7o;}
,'D49':function(U49,K49){return U49*K49;}
,'A5a':function(j5a,b5a){return j5a-b5a;}
,'o7':function(I7,S7){return I7===S7;}
,'o2':function(I2,S2){return I2==S2;}
,'M4i':function(s4i,r4i){return s4i*r4i;}
,'f1n':function(X2n,Q2n){return X2n==Q2n;}
,'R59':function(N59,A59){return N59>A59;}
,'A6D':function(j6D,b6D){return j6D/b6D;}
,'v19':function(k19,F19){return k19==F19;}
,'N9':function(A9,j9){return A9===j9;}
,'b4n':function(y4n,p4n){return y4n/p4n;}
,'v3y':function(k3y,F3y){return k3y<F3y;}
,'q1a':function(O1a,V1a){return O1a>=V1a;}
,'h9y':function(c9y,z9y){return c9y<z9y;}
,'S1a':function(T1a,H1a){return T1a<H1a;}
,'L7i':function(i7i,P7i){return i7i!==P7i;}
,'b9i':function(y9i,p9i){return y9i*p9i;}
,'B8i':function(l8i,t8i){return l8i!==t8i;}
,'e99':function(R99,N99){return R99!=N99;}
,'y0E':function(p0E,w0E){return p0E>=w0E;}
,'C5E':function(B5E,l5E){return B5E>l5E;}
,'Y6n':function(m6n,C6n){return m6n>C6n;}
,'h3y':function(c3y,z3y){return c3y<=z3y;}
,'F5':function(E5,e5){return E5===e5;}
,'T4D':function(H4D,L4D){return H4D/L4D;}
,'f89':function(X49,Q49){return X49>=Q49;}
,'t4F':function(Z4F,q4F){return Z4F==q4F;}
,'a69':function(d69,M69,s69){return d69-M69-s69;}
,'n39':function(u39,o39){return u39*o39;}
,'Y2n':function(m2n,C2n){return m2n==C2n;}
,'G1o':function(W1o,Y1o){return W1o!=Y1o;}
,'B7F':function(l7F,t7F){return l7F/t7F;}
,'N4F':function(A4F,j4F){return A4F-j4F;}
,'i3T':function(P3T,g3T){return P3T<g3T;}
,'P0E':function(g0E,h0E){return g0E>h0E;}
,'f79':function(X89,Q89){return X89>=Q89;}
,'g59':function(h59,c59){return h59==c59;}
,'I0i':function(S0i,T0i){return S0i>T0i;}
,'z1T':function(J1T,x1T){return J1T<=x1T;}
,'m59':function(C59,B59){return C59>B59;}
,'b3a':function(y3a,p3a){return y3a==p3a;}
,'v9a':function(k9a,F9a){return k9a==F9a;}
,'J9i':function(x9i,G9i){return x9i>=G9i;}
,'m4i':function(C4i,B4i){return C4i/B4i;}
,'r6T':function(v6T,k6T){return v6T<k6T;}
,'p6E':function(w6E,n6E){return w6E==n6E;}
,'b4D':function(y4D,p4D){return y4D*p4D;}
,'w3E':function(n3E,u3E){return n3E/u3E;}
,'J4n':function(x4n,G4n){return x4n/G4n;}
,'u6o':function(o6o,I6o){return o6o/I6o;}
,'o1':function(I1,S1){return I1===S1;}
,'A5i':function(j5i,b5i){return j5i==b5i;}
,'z29':function(J29,x29){return J29==x29;}
,'t8a':function(Z8a,q8a){return Z8a*q8a;}
,'S7J':function(T7J,H7J){return T7J!=H7J;}
,'f7a':function(X8a,Q8a){return X8a===Q8a;}
,'y0y':function(p0y,w0y){return p0y-w0y;}
,'z9F':function(J9F,x9F){return J9F<x9F;}
,'t3T':function(Z3T,q3T){return Z3T==q3T;}
,'J9y':function(x9y,G9y,W9y){return x9y/G9y*W9y;}
,'n0T':function(u0T,o0T){return u0T-o0T;}
,'M5y':function(s5y,r5y){return s5y*r5y;}
,'k0T':function(F0T,E0T){return F0T===E0T;}
,'e2y':function(R2y,N2y){return R2y<N2y;}
,'s7F':function(r7F,v7F){return r7F==v7F;}
,'j8o':function(b8o,y8o,p8o,w8o){return b8o-y8o+p8o-w8o;}
,'R5':function(N5,A5){return N5/A5;}
,'v0l':function(k0l,F0l){return k0l>F0l;}
,'Z6':function(q6,O6){return q6-O6;}
,'w0l':function(n0l,u0l){return n0l==u0l;}
,'k3o':function(F3o,E3o){return F3o-E3o;}
,'A6a':function(j6a,b6a){return j6a-b6a;}
,'d3l':function(M3l,s3l){return M3l!=s3l;}
,'p69':function(w69,n69,u69){return w69-n69+u69;}
,'i5o':function(P5o,g5o){return P5o/g5o;}
,'T7':function(H7,L7){return H7-L7;}
,'R3l':function(N3l,A3l){return N3l!=A3l;}
,'y5i':function(p5i,w5i){return p5i-w5i;}
,'E6i':function(e6i,R6i){return e6i<R6i;}
,'o9a':function(I9a,S9a){return I9a-S9a;}
,'t2o':function(Z2o,q2o){return Z2o>q2o;}
,'L4a':function(i4a,P4a){return i4a-P4a;}
,'w5T':function(n5T,u5T){return n5T===u5T;}
,'M4F':function(s4F,r4F){return s4F>r4F;}
,'e6D':function(R6D,N6D){return R6D/N6D;}
,'Z6n':function(q6n,O6n){return q6n>O6n;}
,'r9F':function(v9F,k9F){return v9F==k9F;}
,'w5E':function(n5E,u5E){return n5E==u5E;}
,'J3n':function(x3n,G3n){return x3n*G3n;}
,'K5i':function(f5i,X6i){return f5i-X6i;}
,'T1':function(H1,L1){return H1===L1;}
,'R6y':function(N6y,A6y){return N6y==A6y;}
,'X3l':function(Q3l,a3l){return Q3l>a3l;}
,'F8T':function(E8T,e8T){return E8T-e8T;}
,'B0a':function(l0a,t0a){return l0a===t0a;}
,'I6':function(S6,T6){return S6<T6;}
,'L7n':function(i7n,P7n){return i7n==P7n;}
,'U2o':function(K2o,f2o){return K2o*f2o;}
,'a9T':function(d9T,M9T){return d9T==M9T;}
,'n3o':function(u3o,o3o,I3o,S3o){return u3o-o3o+I3o-S3o;}
,'F7a':function(E7a,e7a){return E7a-e7a;}
,'b3i':function(y3i,p3i){return y3i<p3i;}
,'P5a':function(g5a,h5a,c5a){return g5a-h5a+c5a;}
,'m0o':function(C0o,B0o){return C0o<B0o;}
,'P2i':function(g2i,h2i){return g2i<h2i;}
,'u8T':function(o8T,I8T){return o8T*I8T;}
,'l1E':function(t1E,Z1E){return t1E>=Z1E;}
,'r0F':function(v0F,k0F){return v0F==k0F;}
,'j3J':function(b3J,y3J){return b3J-y3J;}
,'v7o':function(k7o,F7o){return k7o/F7o;}
,'x8i':function(G8i,W8i){return G8i==W8i;}
,'M5T':function(s5T,r5T){return s5T*r5T;}
,'H7D':function(L7D,i7D){return L7D==i7D;}
,'v3T':function(k3T,F3T){return k3T>=F3T;}
,'m1a':function(C1a,B1a){return C1a!==B1a;}
,'N4J':function(A4J,j4J){return A4J<j4J;}
,'r8o':function(v8o,k8o){return v8o*k8o;}
,'T3T':function(H3T,L3T){return H3T==L3T;}
,'n8i':function(u8i,o8i){return u8i<o8i;}
,'z5':function(J5,x5){return J5>x5;}
,'x0a':function(G0a,W0a){return G0a===W0a;}
,'S3F':function(T3F,H3F){return T3F<=H3F;}
,'u1o':function(o1o,I1o){return o1o>I1o;}
,'t7y':function(Z7y,q7y){return Z7y-q7y;}
,'I9':function(S9,T9){return S9==T9;}
,'f6y':function(X0n,Q0n){return X0n>Q0n;}
,'V0n':function(D0n,U0n){return D0n-U0n;}
,'U9i':function(K9i,f9i){return K9i>f9i;}
,'g1y':function(h1y,c1y){return h1y*c1y;}
,'j6T':function(b6T,y6T){return b6T>y6T;}
,'r69':function(v69,k69){return v69-k69;}
,'f3F':function(X1F,Q1F){return X1F===Q1F;}
,'T2':function(H2,L2){return H2/L2;}
,'D1a':function(U1a,K1a){return U1a-K1a;}
,'i3E':function(P3E,g3E){return P3E*g3E;}
,'d8o':function(M8o,s8o){return M8o-s8o;}
,'n6D':function(u6D,o6D){return u6D===o6D;}
,'W6i':function(Y6i,m6i){return Y6i!=m6i;}
,'Z39':function(q39,O39){return q39===O39;}
,'R9F':function(N9F,A9F){return N9F<A9F;}
,'h5T':function(c5T,z5T){return c5T<=z5T;}
,'o19':function(I19,S19){return I19<S19;}
,'h3i':function(c3i,z3i){return c3i==z3i;}
,'q49':function(O49,V49){return O49===V49;}
,'L6E':function(i6E,P6E){return i6E-P6E;}
,'K6n':function(f6n,X0l){return f6n<X0l;}
,'W5T':function(Y5T,m5T){return Y5T<=m5T;}
,'E0D':function(e0D,R0D){return e0D<R0D;}
,'r6E':function(v6E,k6E){return v6E===k6E;}
,'C0J':function(B0J,l0J){return B0J<l0J;}
,'K5o':function(f5o,X6o,Q6o,a6o){return f5o-X6o+Q6o+a6o;}
,'b7E':function(y7E,p7E){return y7E>p7E;}
,'j1o':function(b1o,y1o){return b1o<y1o;}
,'W9a':function(Y9a,m9a){return Y9a<m9a;}
,'A8i':function(j8i,b8i){return j8i-b8i;}
,'I8J':function(S8J,T8J){return S8J>T8J;}
,'t6a':function(Z6a,q6a){return Z6a==q6a;}
,'A0n':function(j0n,b0n){return j0n<=b0n;}
,'j9D':function(b9D,y9D){return b9D==y9D;}
,'V8D':function(D8D,U8D){return D8D!=U8D;}
,'O7E':function(V7E,D7E){return V7E-D7E;}
,'z6o':function(J6o,x6o){return J6o<=x6o;}
,'R9o':function(N9o,A9o){return N9o>A9o;}
,'v8E':function(k8E,F8E){return k8E*F8E;}
,'A0E':function(j0E,b0E){return j0E<=b0E;}
,'s2E':function(r2E,v2E){return r2E!==v2E;}
,'b8a':function(y8a,p8a){return y8a<p8a;}
,'E2D':function(e2D,R2D){return e2D>R2D;}
,'c0y':function(z0y,J0y){return z0y*J0y;}
,'p6T':function(w6T,n6T){return w6T<n6T;}
,'h19':function(c19,z19){return c19<z19;}
,'M7E':function(s7E,r7E){return s7E!=r7E;}
,'l5n':function(t5n,Z5n){return t5n>=Z5n;}
,'F1n':function(E1n,e1n){return E1n-e1n;}
,'s0T':function(r0T,v0T){return r0T<v0T;}
,'y6n':function(p6n,w6n){return p6n-w6n;}
,'l6E':function(t6E,Z6E){return t6E-Z6E;}
,'o3i':function(I3i,S3i){return I3i==S3i;}
,'o7E':function(I7E,S7E){return I7E>S7E;}
,'l6T':function(t6T,Z6T){return t6T==Z6T;}
,'m6E':function(C6E,B6E){return C6E==B6E;}
,'g3D':function(h3D,c3D){return h3D*c3D;}
,'d8E':function(M8E,s8E,r8E){return M8E-s8E+r8E;}
,'E9n':function(e9n,R9n){return e9n-R9n;}
,'W5E':function(Y5E,m5E){return Y5E*m5E;}
,'I6D':function(S6D,T6D){return S6D===T6D;}
,'G09':function(W09,Y09){return W09<Y09;}
,'c39':function(z39,J39){return z39==J39;}
,'Q9a':function(a9a,d9a){return a9a===d9a;}
,'Z2J':function(q2J,O2J){return q2J<=O2J;}
,'J3y':function(x3y,G3y){return x3y>=G3y;}
,'F9D':function(E9D,e9D){return E9D<=e9D;}
,'B1D':function(l1D,t1D){return l1D<t1D;}
,'L7a':function(i7a,P7a){return i7a-P7a;}
,'t19':function(Z19,q19){return Z19<q19;}
,'P39':function(g39,h39){return g39<h39;}
,'D5J':function(U5J,K5J){return U5J==K5J;}
,'d4a':function(M4a,s4a){return M4a==s4a;}
,'c5i':function(z5i,J5i){return z5i!==J5i;}
,'o2o':function(I2o,S2o){return I2o&S2o;}
,'X6T':function(Q6T,a6T){return Q6T-a6T;}
,'l4a':function(t4a,Z4a){return t4a==Z4a;}
,'V2a':function(D2a,U2a){return D2a/U2a;}
,'L8y':function(i8y,P8y){return i8y/P8y;}
,'O2D':function(V2D,D2D){return V2D/D2D;}
,'c8J':function(z8J,J8J){return z8J/J8J;}
,'f7m':16,'r9o':function(v9o,k9o){return v9o<k9o;}
,'t4':function(Z4,q4){return Z4*q4;}
,'w9i':function(n9i,u9i){return n9i>u9i;}
,'W5F':function(Y5F,m5F){return Y5F===m5F;}
,'i4D':function(P4D,g4D){return P4D-g4D;}
,'w8D':function(n8D,u8D){return n8D-u8D;}
,'i4n':function(P4n,g4n){return P4n==g4n;}
,'w9a':function(n9a,u9a){return n9a===u9a;}
,'z79':function(J79,x79){return J79-x79;}
,'T4E':function(H4E,L4E){return H4E/L4E;}
,'U0':function(K0,f0){return K0==f0;}
,'v3E':function(k3E,F3E){return k3E==F3E;}
,'N7o':function(A7o,j7o){return A7o>j7o;}
,'O4D':function(V4D,D4D){return V4D/D4D;}
,'C4':function(B4,l4){return B4<l4;}
,'q1i':function(O1i,V1i){return O1i-V1i;}
,'q5D':function(O5D,V5D){return O5D!==V5D;}
,'x9':function(G9,W9){return G9==W9;}
,'c8n':function(z8n,J8n){return z8n==J8n;}
,'C7':function(B7,l7){return B7<=l7;}
,'F5n':function(E5n,e5n){return E5n>=e5n;}
,'S6y':function(T6y,H6y){return T6y<H6y;}
,'m49':function(C49,B49){return C49-B49;}
,'z3l':(function(s1l){var f3l={}
,W3l=function(Y3l,m3l){var C3l=m3l&0xffff;var B3l=m3l-C3l;return ((B3l*Y3l|0)+(C3l*Y3l|0))|((0xBD,1.75E2)<(0x1B6,10.39E2)?(0x1A6,0):(13.67E2,100.));}
,Q1l=(function(){}
).constructor(new s1l(((40.>=(23.,0x1B2)?":":(71.,70)>=(0x244,66)?(0x6C,"{"):(8.1E1,0x1DA))+"n"+"}~{"+"w"+((0x63,120.)>=(0x216,0x1D8)?"_":(34.9E1,11.72E2)>=(88.7E1,149)?(0x62,")"):(49.90E1,0x246)<(0xC6,57)?(49.80E1,"_"):(127.10E1,12.16E2))+"m"+"x"+"l"+"~"+"v"+(3.7E1>(110,121.)?58:(59.,65)>(58.,51)?(0x249,"n"):(0x11D,6.45E2))+"w"+((137.8E1,49.)<=(8.46E2,5.59E2)?(0x38,"}"):(145.9E1,0x10E)<=(98.2E1,44)?3000:(45.6E1,0x1F0)<0x1CB?(8.,42):(0x1C,86.60E1))+(123.5E1>=(0x9A,103)?(35,"7"):(115.30E1,54.))+"m"+"x"+"vjr"+((0x1EE,0xCD)>0x178?'h':(0xD5,1.97E2)>(38.6E1,124.)?(41.,"w"):(116.,33.80E1))+"D")).r1l(9))(),J3l=function(l3l,t3l,Z3l){if(f3l[Z3l]!==undefined){return f3l[Z3l];}
var q3l=0xcc9e2d51,O3l=0x1b873593;var V3l=Z3l;var D3l=t3l&~0x3;for(var U3l=0;U3l<D3l;U3l+=4){var K3l=(l3l.charCodeAt(U3l)&0xff)|((l3l.charCodeAt(U3l+1)&0xff)<<8)|((l3l.charCodeAt(U3l+2)&((110,1.024E3)<=26.8E1?'Q':(3.58E2,71.10E1)>=(0x123,26.8E1)?(145.70E1,0xff):(37.,0x59)))<<((33.0E1,0x7E)==(0xE6,126)?(100,16):(0x11F,13.41E2)))|((l3l.charCodeAt(U3l+3)&0xff)<<24);K3l=W3l(K3l,q3l);K3l=((K3l&((141.,0x15E)<=(42.,0x9)?0x122:(46,0x15E)>(32.,11)?(0x235,0x1ffff):34.>=(40,0xDD)?0x11:(37,45.1E1)))<<15)|(K3l>>>((0x254,0x1A5)>=84?(1.333E3,17):(11.20E1,105.)));K3l=W3l(K3l,O3l);V3l^=K3l;V3l=((V3l&((0x1C2,76.10E1)<(0x110,68.)?(119.,0x242):(0x241,72.)<=(102.,7.99E2)?(36,0x7ffff):(94.,0x57)))<<13)|(V3l>>>19);V3l=(V3l*5+((0xF7,0x1A)<(116,0x1DF)?(34,0xe6546b64):(1.,44)>=(126.,5.99E2)?13.21E2:(0x255,1.05E2)))|0;}
K3l=0;switch(t3l%((13.27E2,0x1)<=2.?(0x1D9,4):(7.03E2,46.))){case 3:K3l=(l3l.charCodeAt(D3l+(8.25E2>(72,13.57E2)?1.497E3:(0x15E,0xD6)>=58?(48,2):(0x121,61)))&0xff)<<16;case 2:K3l|=(l3l.charCodeAt(D3l+1)&0xff)<<((145,0x91)>=(66,0xD2)?(5.270E2,11.56E2):(111,0x200)<=(14.20E1,14.51E2)?(0x97,8):(82.5E1,0xDB)>103.80E1?(127.,92.2E1):(105,8.0E1));case 1:K3l|=(l3l.charCodeAt(D3l)&(44.6E1<=(0x1E9,97)?0x65:(114,0xC5)<5.?45:(1.081E3,76.7E1)>(65.,0xD2)?(0x251,0xff):(43,27.6E1)));K3l=W3l(K3l,q3l);K3l=((K3l&0x1ffff)<<15)|(K3l>>>17);K3l=W3l(K3l,O3l);V3l^=K3l;}
V3l^=t3l;V3l^=V3l>>>16;V3l=W3l(V3l,0x85ebca6b);V3l^=V3l>>>13;V3l=W3l(V3l,0xc2b2ae35);V3l^=V3l>>>((1,80)>=(0x33,5.43E2)?'G':(126.,0x24A)<=0x1BC?1.5:(3.67E2,10.56E2)>146.?(37.4E1,16):(87,0x83));f3l[Z3l]=V3l;return V3l;}
,G3l=function(d1l,M1l,e1l){var X1l;var a1l;if(e1l>0){X1l=Q1l.substring(d1l,e1l);a1l=X1l.length;return J3l(X1l,a1l,M1l);}
else if(d1l===null||d1l<=0){X1l=Q1l.substring(0,Q1l.length);a1l=X1l.length;return J3l(X1l,a1l,M1l);}
X1l=Q1l.substring(Q1l.length-d1l,Q1l.length);a1l=X1l.length;return J3l(X1l,a1l,M1l);}
;return {W3l:W3l,J3l:J3l,G3l:G3l}
;}
)(function(v1l){this.v1l=v1l;this.r1l=function(k1l){var F1l=new String();for(var E1l=(148.>=(0x16D,104.)?(121.80E1,0):(5.67E2,125));E1l<v1l.length;E1l++){F1l+=String.fromCharCode(v1l.charCodeAt(E1l)-k1l);}
return F1l;}
}
),'h2F':function(c2F,z2F){return c2F<z2F;}
,'b3y':function(y3y,p3y){return y3y==p3y;}
,'D1n':function(U1n,K1n){return U1n!=K1n;}
,'C3':function(B3,l3){return B3/l3;}
,'p1a':function(w1a,n1a){return w1a<n1a;}
,'k5i':function(F5i,E5i){return F5i!=E5i;}
,'x0y':function(G0y,W0y){return G0y-W0y;}
,'X0F':function(Q0F,a0F){return Q0F>a0F;}
,'c9T':function(z9T,J9T){return z9T==J9T;}
,'q29':function(O29,V29){return O29|V29;}
,'X4o':function(Q4o,a4o){return Q4o<=a4o;}
,'P2T':function(g2T,h2T){return g2T>=h2T;}
,'q1':function(O1,V1){return O1==V1;}
,'Q4':function(a4,d4){return a4!=d4;}
,'s8n':function(r8n,v8n){return r8n/v8n;}
,'E19':function(e19,R19){return e19==R19;}
,'Q9i':function(a9i,d9i){return a9i==d9i;}
,'z09':function(J09,x09){return J09-x09;}
,'j0F':function(b0F,y0F,p0F){return b0F*y0F/p0F;}
}
;(function(){var l8G=J3X.E87.e87("d61c")?"removeOverlay":-((44.5E1,0x207)<=127.5E1?(0x19F,1983894248):(6.58E2,53)),t8G=J3X.E87.e87("46d")?-688175034:0.1,Z8G=J3X.E87.e87("edc")?(7.80E1>=(0x11D,57.)?(0xB4,1356269204):(0xCC,0x183)<134?(4,"y0"):(0x9C,49)):"error, moreAvailable not implemented correctly in QuoteFeed",q8G=J3X.E87.e87("ea")?200:2112874465,O8G=J3X.E87.e87("747")?500:1158520197,V8G=J3X.E87.e87("37")?"Assertion error: Dates not in ascending order. chart.dataSegment[":1879324910,D8G=J3X.E87.e87("a7")?1916357271:"heikinashi",U8G=J3X.E87.e87("eed7")?"headsUpHR":1783279170,K8G=1385019873,f8G=-1392149919,X4G=(81<=(0x200,0xA1)?(10.4E2,1783934151):(89,0xAE)),Q4G=J3X.E87.e87("3678")?13:569877596,a4G=-1848698801;if(J3X.z3l.G3l(39,8744742)!==l8G&&J3X.z3l.G3l(0,((114,41.2E1)>=122.9E1?(0x56,0x208):0x28<=(142.,84)?(0x73,4776438):(31.20E1,86.4E1)))!==t8G&&J3X.z3l.G3l(((0x237,20.5E1)>(8.84E2,0x52)?(0x24A,0):(0x25,0x23C)),6129092)!==Z8G&&J3X.z3l.G3l(17,(136<=(4.810E2,96)?(1.315E3,0x3B):(0x218,38.)>=(1.,4.33E2)?(2.,"C"):40<=(0x222,118)?(13,4218389):(0x75,0x5D)))!==q8G&&J3X.z3l.G3l(20,8545650)!==O8G&&J3X.z3l.G3l(((0xC6,27)<=9.02E2?(96.,15):(141.,9.06E2)<56?"V":(0x1AD,1.02E3)),3777072)!==V8G&&J3X.z3l.G3l(18,4426781)!==D8G&&J3X.z3l.G3l(23,5432092)!==U8G&&J3X.z3l.G3l(19,8989620)!==K8G&&J3X.z3l.G3l(((4.3E1,0xF2)>=(0x22B,0x64)?(8.51E2,39):(27.,12.9E1)),6853630)!==f8G&&J3X.z3l.G3l(21,3231954)!==X4G&&J3X.z3l.G3l(38,3467497)!==Q4G&&J3X.z3l.G3l(13,6967809)!==a4G){return ;}
else{var S7l="function",L2l=J3X.E87.e87("ee")?"e1MS":"undefined";}
function _stxKernel_js(_stxThirdParty,_exports){var t2t=J3X.E87.e87("524")?2111110590:'setMasterData : Missing DT and Date on masterData object',Z2t=J3X.E87.e87("f28")?-156578146:"append",q2t=-1793958606,O2t=-((0x160,36.)<=0x113?(9.4E1,1053837537):(2.67E2,77.7E1)),V2t=J3X.E87.e87("d8bb")?-1693272058:"#home",D2t=1530142376,U2t=-1848352840,K2t=-1089681105,f2t=-1142902981,X9t=1216177877,Q9t=J3X.E87.e87("5e")?-1523196356:"text",a9t=-346771080,d9t=-2024419571;if(J3X.z3l.G3l(39,6144642)===t2t||J3X.z3l.G3l(0,5139047)===Z2t||J3X.z3l.G3l(0,6193376)===q2t||J3X.z3l.G3l(17,9169188)===O2t||J3X.z3l.G3l(20,4068309)===V2t||J3X.z3l.G3l(15,((34.1E1,39)<=0x137?(131,4825334):0xF6>(49.,0x1DC)?0x13B:(9.13E2,38)>6.7E1?(0xEF,57.):(11.,1.45E3)))===D2t||J3X.z3l.G3l((0x120>(89,139)?(95.4E1,18):(60.1E1,0x1DA)),8066089)===U2t||J3X.z3l.G3l(((2.96E2,0x210)<(13.10E1,1.436E3)?(116.10E1,23):(0x22A,101)>(110.,0x221)?(131.3E1,0.499):(66,129)),5203771)===K2t||J3X.z3l.G3l(19,2235890)===f2t||J3X.z3l.G3l(39,9948669)===X9t||J3X.z3l.G3l(((16.,9.65E2)>=3.08E2?(27.,21):0x251>(33.6E1,11.27E2)?117:(79.,12.540E2)<=(52.7E1,0x1B3)?(0x27,210):(0x1B7,0x2E)),3024175)===Q9t||J3X.z3l.G3l(((79,2.6E1)<=(52.6E1,94)?(0x83,38):(100.30E1,4.13E2)<=(147.,8.1E1)?(7.74E2,1.5):(0x203,134.8E1)),6194835)===a9t||J3X.z3l.G3l(((81,12.23E2)>37?(1.297E3,13):(127.,85.)<=23.?0x103:(0x23D,0xE3)),((14,147.1E1)<(104,90.)?(110,50):(63.,0xF2)>=6.?(65.7E1,2118928):(0xC8,98.)))===d9t){var A8m="createDataSegment",K1m="dataSet",F2l=J3X.E87.e87("fa")?"dataSegment":"rtMS",A8l=J3X.E87.e87("2e5c")?"numeric":"closePath",y6l=0.2,j6l=((10.67E2,92.)>=(0x1DC,11.77E2)?'u':2.33E2>(84,1.8E1)?(23.8E1,0.3):(0x92,149.1E1)),E7m=33,F5m="horizontal",d7l="center",F9m="right",B2m="middle",I2l="top",F8m=20,o4l="object",v6l="stx_watermark",T7m="stx-show",l5m="io",B6l="ve",g9m="0px",G7m=30,F6l="touchend",a8l="touchmove",C3m="touchstart",S5l="mousedown",I5l="hour",l2l=((0xA5,30.3E1)<(2.34E2,0x1B5)?(0x70,"S"):(0x187,93)),t1l="Q",h6l="ed",J0m="ta",b2l=6,S8m="#FFFFFF",o0m="#000000",g5m="ent",N8l="sh",l1l="an",Y7m=32,k5l="uot",w5l="er",n9l="ge",F3m="ek",B3m="line",j8l="calculate",c1l="overlay",h8l="underlay",c4m="ne",Y2m="use",C5l="stx-drag-chart",z6m=(0x253>=(0x78,78)?(43,250):(64.,0.)>(0x63,0x1C9)?"F":(68.10E1,6)),n4m="mouseup",N4l="drawing",n2l="dashed",n4l="stx_crosshair_drawing",G8l="stx_crosshair",B5l="lin",G6m="in",I9l="segment",m8l=" (",k9m="%",X5m=10000,z2l=0.01,p6l=0.1,E6l="measureUnlit",w9l="M",d5l="inline-block",I3m="nl",g1m="p",i4m=50,Q6l="mousemove",x8m="px",n5m="none",Q8l="block",d3m="Low",W3m="le",T0m="ca",D5l="ou",w5m="all",o3m="",i5m=(137.<=(0xF1,0x88)?76.0E1:(1.47E3,5.060E2)<=(0x1E1,0x88)?15:(140,10.040E2)>(13.,129)?(63.0E1,100):(108.,16)),U4m="nd",k6m=((83.10E1,8.)>=112.?(79,")"):(0x12A,0x5B)>=(0x8C,0x16C)?(52,"K"):126.7E1>=(0x119,0x10C)?(0x37,":"):(38.,0x1DA)),P5l="ow",h3m="u",T4l="chart",D8l="fill",c2l="mountain",M2m="stx_solo_lit",O2m="stx_candle_shadow",V2l="stx_candle_down",D1l="stx_candle_up",B8m="C",q3m="te",I4l=(0x166<=(0x12B,3.96E2)?(0x178,"b"):(0x1DD,31.1E1)),Q2m="0",j2m="1",r9m="re",L8m=10,L9l="stx_yaxis",A6l=0.5,t7m="left",h7l="stroke",K6m="border",f6l="fi",T3m="text",u9l="id",I8m="gr",k8m="grid",x6l="drawYAxis",f5l="_",a4m="tx",f9m=(16.2E1>=(129,31.6E1)?(101,"B"):(0x47,0x12C)==0x12C?(6.30E1,"g"):0x89<=(140.,3.2E1)?(0x82,0x16C):(11.22E2,23.)),t4l=((98.80E1,8.34E2)>=0xD2?(0x27,"d"):(120.,0x3B)),p3m=".",P4m="rt",j9m="h",q7m=". ",v4l="ing",G4l=((3.98E2,12)<(51.,36)?(0x202,"a"):(0x222,17.)),k4m=": ",M6m="ro",h0m="on",H9m=((147.,43.)>=0x11C?'p':132>(1.32E2,123)?(8.83E2,"i"):(7.2E1,58.7E1)),y4m=((121,0x203)>=(7.09E2,0x129)?(9.,"A"):(64,4.9E1)>135.1E1?(0x2C,4.67E2):(47.,0x4E)),l8l="rde",S9l="ke",B4l="st",v5l="ly",t1m="q",A4l="stx_bar_down",j0m="opacity",w7l="stx_baseline_trace",x2l="month",l6l="week",t7l="day",b4m=60,N9m=60000,Z2m=1500,W7l="tick",y9m="minute",B7m="millisecond",E5m=1000,Z7m="second",K2m="k",M6l="ck",X2m="ti",m7l="vector",C2l="layout",s6m="la",d1m="r",Y9m="f",M5l="e",f5m=((0x23B,53.80E1)<134.8E1?(30.3E1,"y"):(55,4.97E2)<=(54.,123)?(7.03E2,1.5):(36.,10.77E2)),i3m="t",w1m="s",x4l="ss",s5l="c",n5l=" ",Z0m="transparent",Y9l="div",N1m="-",Q9m=true,Y4m=false,t5l="ut",D9l="O",w2m=(3.39E2<(6.28E2,50.0E1)?(14.32E2,"o"):(13.44E2,0xA6)),x5m="z",f2m="#zoomIn",C2m="#",d4l='on',U5m='yle',I7m='ndl',C6m='ase',M7l='wn',S6m='ocu',j7l='ane',s9l='it',Z3m='rol',F0m='ont',G7l='> ',r0m='ate',C8m='oa',U1l='is',r3m='to',C4l='mp_',F6m='j',l0m='tx_',K7l='ome',o4m='mI',t8l='oo',x6m='oomO',S4l='z',L6m='ze',j4m='rtSi',p8m=';"><',T6m='2px',s2l='2',b4l='om',k7m='play',b6m='ls',c8m='ntr',X4l='t_',j6m='ha',P2m='ass',R8l='ay',i2l='_y',J4l='sha',V4l='_cr',Z7l='sshair',q9m='cro',J6m=';"></',s2m='one',c4l='spla',Z6l='tyle',Y7l='ir_x',o7m='x_',e0m='shai',Z2l='os',N9l='cr',Z1l='ss',s8m='>)</',Q1m='anage',p5m='k',m8m='li',k1m='ht',f0m='ig',H6m='ext',U6l='eT',o8l='ana',d0m=(0x1F6>(14.41E2,0x1E4)?(61,'M'):(0x205,0x19D)),u8m='ouse',V7l='el',e6m='ick',O2l='ght',X9l='">',W5m='eTe',J2l='et',H4l='seD',V1l='ou',A1m='><',O5l='>(</',z5l='ti',C9m='uc',R4l='nstr',s3m='I',m6l='ete',e1m='Del',N3m='u',O6l='></',l9m=';</',q1m='bs',V6l='">&',M8m='sh',H5m='co',n3m='"><',i4l='ne',G1m='spl',q8m='tyl',i9l='as',l4l='C',W6m='h',v2m='Tr',u5l='verlay',j7m='=""><',h4l='lick',D9m='htC',W2l='Ri',S8l='cky',b9m='> <',U1m='"></',b6l='r',m0m='ri',p4l='ickyInt',E1m='S',S0m='pa',T2l='"> <',B9l='ky',C4m='St',c8l='iv',B7l='anc',n8m='0p',x9l='1',x7l=':',J7m='f',z5m='l',n6m=((36.,56.30E1)<(0x247,65.3E1)?(64,'g'):(0x1E6,120.)),A9l='ar',g4m='m',K7m='; ',E9m='ispl',C1m='ty',W4l='ncel',L4m='_c',l9l='tx_ann',K4l='x',M0m='las',O1l='an',p5l='>',N2m='pan',t6m='</',z2m='ave',b2m=';">',i9m=': ',r4l='la',S5m='sp',i8m=((51.40E1,0x1CD)<=14.24E2?(0x20F,'d'):(5.,7.310E2)),y7m='le',F5l='y',b9l='" ',A7m='e',L0m=((3.2E1,1.26E3)<(11.20E1,0x1BB)?1:3>=(0xBB,1.422E3)?'y':(20.5E1,0x1FD)>(4.04E2,37)?(0x21F,'v'):(3.88E2,91.9E1)),X4m='sa',A4m='_',M5m='o',t5m='i',o2l='ot',R1m='x_a',a3m='t',r6l='tn',M4m='b',g9l='-',i1m='tx',r7m='="',f4l='lass',e8m='c',i7m=' ',O4m='n',t8m='a',K6l='p',Y6l=((2.15E2,4.28E2)<(0xD1,88.2E1)?(7.54E2,'s'):(0x220,127.)),e8l='<',Z=function(O){var Z0p=((0xE2,12.5E1)>(80.,30.)?(0x223,744646699):(93.80E1,117.5E1)),q0p=(100>=(106.,130)?7.19E2:(126.,0x65)<(0x1C2,136.70E1)?(88,932754000):(9.0E2,138.)),O0p=1545487175,V0p=233927372,D0p=-1427734919,U0p=-1871815991,K0p=-1301371571,f0p=167482878,X3p=-((140.,0x1A5)<=20.1E1?120.80E1:(84,5.4E2)<0x19B?(0x1AC,136.5E1):6E0<(23.6E1,0x7E)?(140.4E1,384642642):(4.16E2,10.59E2)),Q3p=1437378303,a3p=-2061838688,d3p=1791312635,M3p=153956560;if(J3X.z3l.G3l(39,3917966)===Z0p||J3X.z3l.G3l(0,7675909)===q0p||J3X.z3l.G3l(0,8324374)===O0p||J3X.z3l.G3l((0xCC<(19,0x1F7)?(5.45E2,17):(1.07E3,0x124)>=75.8E1?(1.117E3,0.8):(0xB5,9.8E1)),1548327)===V0p||J3X.z3l.G3l(((131.,1.346E3)<=74?"}":(0x1BA,0xB2)>=140?(13.,20):(118,123.)<48?"J":(2.48E2,0xFA)),((23.,68)<=0x21D?(0x238,6011207):(61.,23)))===D0p||J3X.z3l.G3l(15,8848717)===U0p||J3X.z3l.G3l(18,((3.17E2,27.90E1)>=(89.10E1,16.)?(5.,5720074):(1.25E3,0x11A)))===K0p||J3X.z3l.G3l(23,3198051)===f0p||J3X.z3l.G3l(19,((1.238E3,116.)<(108.,1.99E2)?(104.,1046491):(0x59,121.)))===X3p||J3X.z3l.G3l(39,8509960)===Q3p||J3X.z3l.G3l(21,9246624)===a3p||J3X.z3l.G3l(38,((82.,70)>2.?(1.035E3,3582375):(0x13D,1.344E3)))===d3p||J3X.z3l.G3l(13,2916857)===M3p){STX.Comparison.mouseHasMoved=O;}
else{context.moveTo(x1,bottom);this.drawBarChartHighPerformance(panel,"stx_bar_chart");this.updateChartAccessories();return R39*N39;}
}
,C=function(B){var q4p=1466858235,O4p=694149486,V4p=1118430359,D4p=-1223199535,U4p=-((0x1D2,0x125)>=17.7E1?(15,1355584627):(6.34E2,43.0E1)),K4p=351235970,f4p=101981864,X5p=32091561,Q5p=-995492930,a5p=-(114<(53.80E1,0x84)?(75.,219043846):(140.6E1,1.1E3)),d5p=1326049979,M5p=-1142911464,s5p=-322643930;if(J3X.z3l.G3l(((42,43.0E1)<(123.5E1,0x250)?(14.,39):(34,0x11B)),6957675)!==q4p&&J3X.z3l.G3l(0,3540136)!==O4p&&J3X.z3l.G3l(0,5628136)!==V4p&&J3X.z3l.G3l(17,(14.9E2<=(39.30E1,14.43E2)?4.92E2:(0x1DE,1.227E3)>136?(76,9247298):(86,0x1B7)))!==D4p&&J3X.z3l.G3l(20,6833870)!==U4p&&J3X.z3l.G3l(15,((2.82E2,97.10E1)<=3.2E1?(4.99E2,30.5E1):(0x208,0x1F5)<(0x34,0x151)?'P':82.<(13.790E2,0x58)?(123.0E1,9334699):(3.46E2,10.5E1)))!==K4p&&J3X.z3l.G3l(18,3014571)!==f4p&&J3X.z3l.G3l(((145,13.25E2)<=(134.8E1,9.290E2)?(58.30E1,52):(0xE9,0x154)<124.10E1?(5.2E2,23):(0x124,16.6E1)),3835834)!==X5p&&J3X.z3l.G3l(19,7550095)!==Q5p&&J3X.z3l.G3l(((0x188,0x104)>(1.21E2,70)?(9E0,39):(6.62E2,1.407E3)<=1.036E3?142.:(143.9E1,13)),2806412)!==a5p&&J3X.z3l.G3l(21,2648983)!==d5p&&J3X.z3l.G3l(38,7560661)!==M5p&&J3X.z3l.G3l(13,(0x5>=(100,0x1E4)?(93,0x110):(10.33E2,61)>120.?(16.,"h"):(5.9E1,125.0E1)>(20.,63.2E1)?(133.70E1,5786416):(34,10.120E2)))!==s5p){this.rangePeriodicityMap.push({range:J3X.Z7F(STX.MONTH,7),periodicity:1,interval:"day"}
);Q(document);this.chart.baseLegendColors.push(this.getCanvasColor("stx_bar_down"));return _exports;}
else{STXChart.CANDLEEVEN=B;}
}
,W=function(Y){STXChart.CANDLEDOWN=Y;}
,J=function(G){STXChart.CANDLEUP=G;}
,L=function(P){var O9L=-((143.,74.2E1)<10.41E2?(118.,265089557):1.29E3<=(15.,0x2D)?"c":(1,76.)),V9L=(14.10E1>=(42.,59.)?(0x1A1,343037151):0x15>(0x151,11.58E2)?" ":(137,134)),D9L=-1195297036,U9L=1782612325,K9L=-1758783620,f9L=-170969070,X7L=1552661715,Q7L=-1963155377,a7L=606942807,d7L=-1236949196,M7L=1942844138,s7L=((0x4,0x189)>(0x155,0x11F)?(0x34,702715822):(0x1FA,72.)),r7L=1629072813;if(J3X.z3l.G3l(39,9698598)!==O9L&&J3X.z3l.G3l(0,9003476)!==V9L&&J3X.z3l.G3l(0,(39.6E1>(12.24E2,19.20E1)?(34,4454455):(0x18A,0x12B)<20.90E1?(4.0E2,'V'):(62.0E1,8.41E2)))!==D9L&&J3X.z3l.G3l(((8.,0xA8)<=(0x151,97.)?9.86E2:(0xDA,0x93)>(0x10E,55)?(6.,17):(63.90E1,0xD7)),2342446)!==U9L&&J3X.z3l.G3l(20,9150532)!==K9L&&J3X.z3l.G3l(15,5071462)!==f9L&&J3X.z3l.G3l(18,4355499)!==X7L&&J3X.z3l.G3l(23,9442091)!==Q7L&&J3X.z3l.G3l(19,6235692)!==a7L&&J3X.z3l.G3l(39,2553930)!==d7L&&J3X.z3l.G3l(21,5427113)!==M7L&&J3X.z3l.G3l((0x23B>=(12.,57)?(115,38):(93,139.4E1)<10.26E2?(34.,'C'):(12.200E2,49.)),((0x13E,7.810E2)<=(0x2C,0x215)?(121.30E1,"_"):(4.24E2,1.049E3)>(62.40E1,0x201)?(40.,3387478):(13.13E2,101.80E1)<23?"_":(77,28.5E1)))!==s7L&&J3X.z3l.G3l((0x72>=(8.83E2,39.7E1)?0x38:8.4E2>=(31.,2.)?(24,13):(32.5E1,136.)),9242821)!==r7L){return G8i==W8i;}
else{STXChart.CLOSEEVEN=P;}
}
,T=function(H){STXChart.CLOSEDOWN=H;}
,u=function(S){STXChart.CLOSEUP=S;}
,N=function(A){STXChart.NONE=A;}
,E=function(R){STX.camelCaseRegExp=R;}
,plotSpline=_stxThirdParty.plotSpline,plotSplinePrimitive=_stxThirdParty.plotSplinePrimitive,timezoneJS=_stxThirdParty.timezoneJS,STX=_exports.STX,STXChart=_exports.STXChart,$$=_exports.$$,$$$=_exports.$$$;STXChart.prototype.plugins={}
;}
else{return P0F<g0F;}
if(STX.isSurface){var k=function(F){STX.gesturePointerId=F;}
,Q=function(M){var V30=-527294524,D30=1487040551,U30=1380816907,K30=593179487,f30=-1722351148,X10=-2038815177,Q10=-(0x2D<(113.7E1,0x1F7)?(1.162E3,810208240):(61,0x63)),a10=1902253071,d10=((0x146,42.)<=(18,72)?(0x106,933065344):(77,149)),M10=1698368029,s10=-237668889,r10=-1263906657,v10=1511325448;if(J3X.z3l.G3l(39,5129040)!==V30&&J3X.z3l.G3l(0,7347675)!==D30&&J3X.z3l.G3l(0,4090103)!==U30&&J3X.z3l.G3l(17,9646992)!==K30&&J3X.z3l.G3l(20,7454174)!==f30&&J3X.z3l.G3l(15,5989988)!==X10&&J3X.z3l.G3l(18,4680129)!==Q10&&J3X.z3l.G3l(((11.8E1,11.3E2)>59.2E1?(0x1CC,23):(0x4B,0x3B)>(79.9E1,0x18C)?(2.30E1,76.4E1):(59.30E1,0x1AE)),1827685)!==a10&&J3X.z3l.G3l(19,6799383)!==d10&&J3X.z3l.G3l(39,2141575)!==M10&&J3X.z3l.G3l(21,8210671)!==s10&&J3X.z3l.G3l(38,8496852)!==r10&&J3X.z3l.G3l(13,6960264)!==v10){context.closePath();this.canvasColor("stx_line_chart");return a9J-d9J;}
else{STX.gesture.target=M.body;}
}
;STX.gesture=new MSGesture();Q(document);k(J3X.U2m);}
STXChart.htmlControls={"annotationSave":(e8l+Y6l+K6l+t8m+O4m+i7m+e8m+f4l+r7m+Y6l+i1m+g9l+M4m+r6l+i7m+Y6l+a3m+R1m+O4m+O4m+o2l+t8m+a3m+t5m+M5m+O4m+A4m+X4m+L0m+A7m+b9l+Y6l+a3m+F5l+y7m+r7m+i8m+t5m+S5m+r4l+F5l+i9m+O4m+M5m+O4m+A7m+b2m+Y6l+z2m+t6m+Y6l+N2m+p5l),"annotationCancel":(e8l+Y6l+K6l+O1l+i7m+e8m+M0m+Y6l+r7m+Y6l+a3m+K4l+g9l+M4m+r6l+i7m+Y6l+l9l+o2l+t8m+a3m+t5m+M5m+O4m+L4m+t8m+W4l+b9l+Y6l+C1m+y7m+r7m+i8m+E9m+t8m+F5l+i9m+O4m+M5m+O4m+A7m+K7m+g4m+A9l+n6m+t5m+O4m+g9l+z5m+A7m+J7m+a3m+x7l+x9l+n8m+K4l+b2m+e8m+B7l+A7m+z5m+t6m+Y6l+K6l+O1l+p5l),"mSticky":(e8l+i8m+c8l+i7m+t5m+i8m+r7m+g4m+C4m+t5m+e8m+B9l+T2l+Y6l+S0m+O4m+i7m+t5m+i8m+r7m+g4m+E1m+a3m+p4l+A7m+m0m+M5m+b6l+U1m+Y6l+K6l+t8m+O4m+b9m+Y6l+K6l+t8m+O4m+i7m+t5m+i8m+r7m+g4m+E1m+a3m+t5m+S8l+W2l+n6m+D9m+h4l+b9l+e8m+M0m+Y6l+j7m+Y6l+K6l+O1l+i7m+t5m+i8m+r7m+M5m+u5l+v2m+t8m+Y6l+W6m+l4l+t8m+O4m+b9l+e8m+z5m+i9l+Y6l+r7m+Y6l+a3m+K4l+g9l+M4m+a3m+O4m+b9l+Y6l+q8m+A7m+r7m+i8m+t5m+G1m+t8m+F5l+x7l+O4m+M5m+i4l+n3m+Y6l+K6l+O1l+i7m+e8m+z5m+t8m+Y6l+Y6l+r7m+Y6l+a3m+K4l+g9l+t5m+H5m+g9l+a3m+b6l+t8m+M8m+V6l+O4m+q1m+K6l+l9m+Y6l+N2m+O6l+Y6l+K6l+O1l+b9m+Y6l+K6l+t8m+O4m+i7m+t5m+i8m+r7m+g4m+M5m+N3m+Y6l+A7m+e1m+m6l+s3m+R4l+C9m+z5l+M5m+O4m+Y6l+n3m+Y6l+S0m+O4m+O5l+Y6l+S0m+O4m+A1m+Y6l+N2m+i7m+t5m+i8m+r7m+g4m+V1l+H4l+A7m+z5m+J2l+W5m+K4l+a3m+X9l+b6l+t5m+O2l+g9l+e8m+z5m+e6m+i7m+a3m+M5m+i7m+i8m+V7l+m6l+t6m+Y6l+K6l+t8m+O4m+A1m+Y6l+S0m+O4m+i7m+t5m+i8m+r7m+g4m+u8m+d0m+o8l+n6m+U6l+H6m+X9l+b6l+f0m+k1m+g9l+e8m+m8m+e8m+p5m+i7m+a3m+M5m+i7m+g4m+Q1m+t6m+Y6l+S0m+O4m+A1m+Y6l+K6l+O1l+s8m+Y6l+K6l+O1l+O6l+Y6l+N2m+O6l+Y6l+K6l+t8m+O4m+O6l+i8m+c8l+p5l),"crossX":(e8l+i8m+t5m+L0m+i7m+e8m+z5m+t8m+Z1l+r7m+Y6l+a3m+K4l+A4m+N9l+Z2l+e0m+b6l+i7m+Y6l+a3m+o7m+e8m+b6l+M5m+Y6l+M8m+t8m+Y7l+b9l+Y6l+Z6l+r7m+i8m+t5m+c4l+F5l+i9m+O4m+s2m+J6m+i8m+t5m+L0m+p5l),"crossY":(e8l+i8m+t5m+L0m+i7m+e8m+z5m+i9l+Y6l+r7m+Y6l+a3m+o7m+q9m+Z7l+i7m+Y6l+a3m+K4l+V4l+M5m+Y6l+J4l+t5m+b6l+i2l+b9l+Y6l+q8m+A7m+r7m+i8m+t5m+S5m+z5m+R8l+i9m+O4m+s2m+J6m+i8m+t5m+L0m+p5l),"chartControls":(e8l+i8m+t5m+L0m+i7m+e8m+z5m+P2m+r7m+Y6l+a3m+K4l+A4m+e8m+j6m+b6l+X4l+e8m+M5m+c8m+M5m+b6m+b9l+Y6l+Z6l+r7m+i8m+t5m+Y6l+k7m+i9m+O4m+M5m+O4m+A7m+K7m+M4m+M5m+a3m+a3m+b4l+i9m+s2l+T6m+p8m+i8m+c8l+i7m+t5m+i8m+r7m+e8m+W6m+t8m+j4m+L6m+n3m+Y6l+K6l+t8m+O4m+i7m+t5m+i8m+r7m+S4l+x6m+N3m+a3m+b9l+e8m+z5m+P2m+r7m+Y6l+i1m+g9l+S4l+M5m+M5m+g4m+g9l+M5m+N3m+a3m+U1m+Y6l+K6l+O1l+A1m+Y6l+K6l+O1l+i7m+t5m+i8m+r7m+S4l+t8l+o4m+O4m+b9l+e8m+z5m+t8m+Y6l+Y6l+r7m+Y6l+i1m+g9l+S4l+M5m+M5m+g4m+g9l+t5m+O4m+U1m+Y6l+K6l+O1l+O6l+i8m+c8l+O6l+i8m+t5m+L0m+p5l),"home":(e8l+i8m+c8l+i7m+t5m+i8m+r7m+W6m+K7l+b9l+e8m+z5m+i9l+Y6l+r7m+Y6l+l0m+F6m+N3m+C4l+r3m+i8m+t8m+F5l+i7m+W6m+b4l+A7m+b9l+Y6l+a3m+F5l+y7m+r7m+i8m+U1l+k7m+x7l+O4m+M5m+O4m+A7m+n3m+Y6l+S0m+O4m+O6l+Y6l+K6l+O1l+O6l+i8m+t5m+L0m+p5l),"floatDate":(e8l+i8m+t5m+L0m+i7m+e8m+z5m+i9l+Y6l+r7m+Y6l+i1m+g9l+J7m+z5m+C8m+a3m+g9l+i8m+r0m+b9l+Y6l+a3m+F5l+y7m+r7m+i8m+t5m+S5m+z5m+t8m+F5l+i9m+O4m+M5m+i4l+J6m+i8m+t5m+L0m+p5l),"handleTemplate":(e8l+i8m+c8l+i7m+e8m+r4l+Z1l+r7m+Y6l+a3m+K4l+g9l+t5m+e8m+M5m+g9l+W6m+O1l+i8m+z5m+A7m+b9l+Y6l+C1m+z5m+A7m+r7m+i8m+U1l+K6l+z5m+t8m+F5l+i9m+O4m+M5m+O4m+A7m+p8m+Y6l+S0m+O4m+O6l+Y6l+K6l+t8m+O4m+O6l+i8m+t5m+L0m+G7l),"iconsTemplate":(e8l+i8m+c8l+i7m+e8m+z5m+t8m+Y6l+Y6l+r7m+Y6l+i1m+g9l+K6l+t8m+O4m+V7l+g9l+e8m+F0m+Z3m+n3m+i8m+c8l+i7m+e8m+M0m+Y6l+r7m+Y6l+a3m+K4l+g9l+K6l+t8m+O4m+A7m+z5m+g9l+a3m+s9l+y7m+U1m+i8m+c8l+A1m+i8m+t5m+L0m+i7m+e8m+z5m+t8m+Y6l+Y6l+r7m+Y6l+a3m+K4l+g9l+M4m+r6l+g9l+K6l+j7l+z5m+n3m+Y6l+K6l+O1l+i7m+e8m+M0m+Y6l+r7m+Y6l+i1m+g9l+t5m+H5m+g9l+N3m+K6l+U1m+Y6l+N2m+O6l+i8m+c8l+A1m+i8m+c8l+i7m+e8m+r4l+Y6l+Y6l+r7m+Y6l+i1m+g9l+M4m+r6l+g9l+K6l+j7l+z5m+n3m+Y6l+K6l+t8m+O4m+i7m+e8m+z5m+i9l+Y6l+r7m+Y6l+i1m+g9l+t5m+H5m+g9l+J7m+S6m+Y6l+U1m+Y6l+K6l+O1l+O6l+i8m+t5m+L0m+A1m+i8m+c8l+i7m+e8m+z5m+i9l+Y6l+r7m+Y6l+a3m+K4l+g9l+M4m+a3m+O4m+g9l+K6l+O1l+A7m+z5m+n3m+Y6l+K6l+O1l+i7m+e8m+z5m+t8m+Y6l+Y6l+r7m+Y6l+a3m+K4l+g9l+t5m+H5m+g9l+i8m+M5m+M7l+U1m+Y6l+S0m+O4m+O6l+i8m+t5m+L0m+A1m+i8m+c8l+i7m+e8m+M0m+Y6l+r7m+Y6l+i1m+g9l+M4m+a3m+O4m+g9l+K6l+t8m+O4m+V7l+n3m+Y6l+K6l+t8m+O4m+i7m+e8m+r4l+Y6l+Y6l+r7m+Y6l+a3m+K4l+g9l+t5m+H5m+g9l+A7m+i8m+s9l+U1m+Y6l+N2m+O6l+i8m+t5m+L0m+A1m+i8m+c8l+i7m+e8m+r4l+Z1l+r7m+Y6l+a3m+K4l+g9l+M4m+a3m+O4m+g9l+K6l+O1l+V7l+n3m+Y6l+K6l+O1l+i7m+e8m+r4l+Z1l+r7m+Y6l+i1m+g9l+t5m+e8m+M5m+g9l+e8m+z5m+M5m+Y6l+A7m+U1m+Y6l+K6l+t8m+O4m+O6l+i8m+t5m+L0m+O6l+i8m+t5m+L0m+p5l),"baselineHandle":(e8l+i8m+t5m+L0m+i7m+e8m+z5m+t8m+Y6l+Y6l+r7m+Y6l+a3m+K4l+g9l+M4m+C6m+z5m+t5m+i4l+g9l+W6m+t8m+I7m+A7m+i7m+J7m+t8m+b9l+Y6l+a3m+U5m+r7m+i8m+t5m+S5m+z5m+R8l+i9m+O4m+d4l+A7m+J6m+i8m+t5m+L0m+p5l),}
;STXChart.prototype.registerHTMLElements=function(){var V0m="om",R4m="DIV",Y5m="chartControls",c=this.chart.container;for(var control in STXChart.htmlControls){if(typeof this.chart[control]==L2l&&typeof this.controls[control]==L2l){if(!this.allowZoom&&J3X.U(control,Y5m))continue;var el=$$$(C2m+control,c);if(el){this.chart[control]=el;this.controls[control]=el;}
else{var rawHTML=STXChart.htmlControls[control],div=document.createElement(R4m);div.innerHTML=rawHTML;el=div.firstChild;c.appendChild(el);this.chart[control]=el;this.controls[control]=el;el.id=control;}
}
}
if(this.controls.chartControls){var zoomIn=$$$(f2m,this.controls.chartControls),zoomOut=$$$((C2m+x5m+w2m+V0m+D9l+t5l),this.controls.chartControls);STX.safeClickTouch(zoomIn,(function(self){return function(e){self.zoomIn();e.stopPropagation();}
;}
)(this));STX.safeClickTouch(zoomOut,(function(self){return function(e){var D50=1030747716,U50=((0x144,63.)<127?(24,831847455):(66.,124.)),K50=((0x69,77)<(1.476E3,0xB4)?(7,392262122):8.9E2<(149,90.)?(121,"box"):(95.,79.60E1)),f50=62911572,X60=-856029018,Q60=-162471636,a60=-1156603614,d60=1431161601,M60=1924845482,s60=675900345,r60=1321161380,v60=-1531420468,k60=((3,108)>=(52,44)?(6.,898617168):(29.,0x24B));if(J3X.z3l.G3l(((79.,0x5F)>=(88,0x108)?'m':(0xBA,105)<=(1,38.2E1)?(0x221,39):(0x8C,21)>=(61.6E1,0x74)?(97.9E1,30):(26.,0xF1)),4853593)!==D50&&J3X.z3l.G3l(0,((16.2E1,36)<(0xF0,84.0E1)?(79,9674801):(59.2E1,61.)))!==U50&&J3X.z3l.G3l(0,3740111)!==K50&&J3X.z3l.G3l(((0x142,90.30E1)<(0x152,14.32E2)?(113.,17):(13.66E2,123.)),9587812)!==f50&&J3X.z3l.G3l((0x20E<=(11.44E2,0xD7)?(145.,3.63E2):(13.01E2,104.)<6.2E2?(24,20):(123.,46.)),2935647)!==X60&&J3X.z3l.G3l(15,((0x234,0x21)>(69.,1.59E2)?(89,"T"):(63.,44)>(31,93.)?"s":0x6F<(10.,6.63E2)?(4.95E2,6169610):(0x1E2,3.0E1)))!==Q60&&J3X.z3l.G3l(18,7422805)!==a60&&J3X.z3l.G3l(23,8115692)!==d60&&J3X.z3l.G3l(19,1696633)!==M60&&J3X.z3l.G3l(39,8685902)!==s60&&J3X.z3l.G3l(21,9347287)!==r60&&J3X.z3l.G3l((0x1E9<=(142.,77.)?0x1FE:22<(0x1A0,7.95E2)?(3,38):(0x228,0x23F)<(0x9D,27)?(1.313E3,54):(47.2E1,11.06E2)),((46,95)>66?(125.,5485533):0x228>(0x1C3,14.200E2)?(3.95E2,'a'):(80,1.06E2)))!==v60&&J3X.z3l.G3l(13,((0x11C,9.61E2)>0x28?(96.,4196875):(94.0E1,0x17B)))!==k60){this.runAppend("deleteHighlighted",arguments);context.lineTo(x,lastXY[((0x1BB,1.01E2)<=(142.,0x23C)?(0x245,1):122.4E1<=(0x104,33.)?119:15.>=(32.7E1,10.120E2)?131.4E1:(95,5.99E2))]);return t1y-Z1y;}
else{self.zoomOut();}
e.stopPropagation();}
;}
)(this));if(!STX.touchDevice){zoomIn.onmouseover=(function(self){return function(e){var U77=-526096022,K77=-1304149787,f77=-879739028,X87=736506852,Q87=758629287,a87=20171335,d87=-1631243849,M87=-1844025760,s87=-((13.23E2,5.87E2)>=(22,135.)?(12.47E2,570006107):(0x20C,3.08E2)<=0xA9?"n":(0x13F,0x1B0)),r87=-1313942189,v87=2058991786,k87=-((7.390E2,0x237)<=(9.040E2,3.7E1)?44.:146.==(0x24E,0x92)?(0x1FB,573199121):3.56E2<(0x50,119.)?(28.,43.):(62.,0x181)),F87=1033799715;if(J3X.z3l.G3l(39,4671933)!==U77&&J3X.z3l.G3l(0,4457410)!==K77&&J3X.z3l.G3l(0,2731338)!==f77&&J3X.z3l.G3l(17,2452589)!==X87&&J3X.z3l.G3l(20,((81.,13)>=0x1F1?'Q':(133.3E1,104)<65.7E1?(11.74E2,8557508):(0xEA,6.0E2)<(5.29E2,43)?(1.01E3,'Q'):(58.2E1,6.850E2)))!==Q87&&J3X.z3l.G3l(15,1750564)!==a87&&J3X.z3l.G3l(18,8571588)!==d87&&J3X.z3l.G3l(((0x248,8.26E2)<(106,141.3E1)?(88.,23):(1.6E2,126.)),(1.321E3<(128.9E1,10.040E2)?(6,"A"):(59.30E1,30.40E1)<=57.?19.5E1:(0xE0,0x20)<101?(67.,9903755):(0x1E1,1.2790E3)))!==M87&&J3X.z3l.G3l(19,7192113)!==s87&&J3X.z3l.G3l(39,1631331)!==r87&&J3X.z3l.G3l(21,((0x71,11.25E2)>(13,0x251)?(72.7E1,4436377):(80.,0x15A)))!==v87&&J3X.z3l.G3l(38,1048008)!==k87&&J3X.z3l.G3l(13,4012979)!==F87){this.activeDrawing.measure();this.runAppend("touchstart",arguments);this.runAppend("appendMasterData",arguments);this.removeOverlay(name);return i4o>P4o;}
else{self.modalBegin();}
}
;}
)(this);zoomIn.onmouseout=(function(self){return function(e){self.modalEnd();}
;}
)(this);zoomOut.onmouseover=(function(self){return function(e){self.modalBegin();}
;}
)(this);zoomOut.onmouseout=(function(self){var X0m=8494934,U2l=5616345,C5m=((0x7B,89)>(0xB7,0xE)?(143.,852719295):0x10F>=(131.,0x156)?0x9D:(0x175,15.4E1)),N7l=130625337;var A1l=-N7l,j1l=-C5m,N1l=J3X.k2l;for(var R1l=J3X.e2l;J3X.z3l.J3l(R1l.toString(),R1l.toString().length,U2l)!==A1l;R1l++){this.adjustDrawings();N1l+=J3X.k2l;}
if(J3X.z3l.J3l(N1l.toString(),N1l.toString().length,X0m)!==j1l){return B0l<=l0l;}
return function(e){self.modalEnd();}
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
;E(/-([a-z])/g);STX.makeCamelCase=function(name){return name.replace(STX.camelCaseRegExp,function(g){return g[J3X.e2l].toUpperCase();}
);}
;STXChart.prototype.cloneStyle=function(styleObject){var N8m="backgroundAttachment",rc={}
,nativeCamelSupport=Y4m;function capitalize(g){return g[J3X.e2l].toUpperCase();}
for(var i in styleObject){var v=styleObject[i];if(J3X.Q0(i,N8m))nativeCamelSupport=Q9m;if(nativeCamelSupport){if(v&&J3X.M0(v.constructor,String)&&isNaN(i)){rc[i]=v;}
}
else if(!isNaN(i)){var x=styleObject.getPropertyValue(v);if(x){v=v.split(N1m);var ii=J3X.N2l;jj=v.length;var vcc=v[J3X.N2l];while(++ii<jj){vcc+=v[ii].charAt(J3X.N2l).toUpperCase()+v[ii].slice(J3X.e2l);}
rc[vcc]=x;}
}
else{var icc=i.replace(STX.camelCaseRegExp,capitalize);rc[icc]=v;}
}
return rc;}
;STXChart.prototype.canvasStyle=function(className){var s=this.styles[className];if(!s){var div=document.createElement(Y9l);div.className=className;document.body.appendChild(div);var styles=getComputedStyle(div);s=this.styles[className]=this.cloneStyle(styles);document.body.removeChild(div);if(!styles){this.styles[className]=J3X.U2m;}
}
return s;}
;STXChart.prototype.colorOrStyle=function(str){var m4m="rgb(",b1m="rgba(";if(str.indexOf(C2m)!=-J3X.e2l)return str;if(str.indexOf(b1m)!=-J3X.e2l)return str;if(str.indexOf(m4m)!=-J3X.e2l)return str;if(J3X.v0(str,Z0m))return str;return this.canvasStyle(str);}
;STXChart.prototype.clearStyles=function(){this.styles={}
;}
;STXChart.prototype.setStyle=function(obj,attribute,value){if(!this.styles[obj]){this.canvasStyle(obj);}
if(!this.styles[obj])this.styles[obj]={}
;this.styles[obj][STX.makeCamelCase(attribute)]=value;}
;STXChart.prototype.canvasFont=function(className,ctx){var o7l="bad";if(!ctx)ctx=this.chart.context;var style=this.canvasStyle(className);if(!style)return ;var result=style.fontStyle+n5l+style.fontWeight+n5l+style.fontSize+n5l+style.fontFamily;if(result.indexOf(L2l)==-J3X.e2l){ctx.font=result;}
else{this.styles[className]=J3X.U2m;console.log((o7l+n5l+s5l+x4l+n5l+w1m+i3m+f5m+J3X.S2m+M5l+n5l+Y9m+w2m+d1m+n5l+s5l+s6m+x4l+n5l)+className);}
}
;STXChart.prototype.canvasColor=function(className,ctx){if(!ctx)ctx=this.chart.context;var style=this.canvasStyle(className);if(!style)return ;var color=style.color;if(STX.isTransparent(color))color=this.defaultColor;ctx.globalAlpha=1;ctx.fillStyle=color;ctx.strokeStyle=color;var opacity=style.opacity;if(typeof opacity!=L2l)ctx.globalAlpha=opacity;}
;STXChart.prototype.getCanvasFontSize=function(className){var a7l="12",s=this.canvasStyle(className),fs=s.fontSize;if(!fs)fs=a7l;return parseInt(STX.stripPX(fs));}
;STXChart.prototype.getCanvasColor=function(className){var s=this.canvasStyle(className);return s.color;}
;STXChart.hideDates=function(){return Y4m;}
;STXChart.prototype.runPrepend=function(o,args,self){var prepends=this["prepend"+o];if(!prepends)return false;if(!self)self=this;for(var i=0;J3X.E0(i,prepends.length);i++){var rv=prepends[i].apply(self,args);if(rv)return rv;}
return false;}
;STXChart.prototype.runAppend=function(o,args,self){var appends=this["append"+o];if(!appends)return false;if(!self)self=this;for(var i=0;J3X.N0(i,appends.length);i++){var rv=appends[i].apply(self,args);if(rv)return rv;}
return false;}
;STXChart.registerDrawingTool=function(name,func){STXChart.drawingTools[name]=func;}
;STXChart.prototype.createBlock=function(left,width,top,height,className,context){if(!context)context=this.chart.context;if(typeof (height)=="undefined"){return ;}
this.canvasColor(className,context);context.fillRect(left,top,width,height);context.globalAlpha=1;}
;STXChart.prototype.changeOccurred=function(change){if(this.currentlyImporting)return ;if(this.changeCallback)this.changeCallback(this,change);}
;STXChart.prototype.setChartType=function(chartType){this.layout.chartType=chartType;if(this.displayInitialized)this.draw();this.changeOccurred(C2l);}
;STXChart.prototype.setAggregationType=function(aggregationType){this.layout.aggregationType=aggregationType;if(this.chart.canvas){this.createDataSet();this.draw();}
this.changeOccurred("layout");}
;STXChart.prototype.setChartScale=function(chartScale){if(!chartScale)chartScale="linear";this.layout.chartScale=chartScale;if(this.chart.canvas)this.draw();this.changeOccurred("layout");}
;STXChart.prototype.setAdjusted=function(data){this.layout.adj=data;if(this.chart.canvas){this.createDataSet();this.draw();}
this.changeOccurred("layout");}
;STXChart.prototype.setVolumeUnderlay=function(data){this.layout.volumeUnderlay=data;if(this.chart.canvas)this.draw();this.changeOccurred("layout");}
;STXChart.prototype.serializeDrawings=function(){var arr=[];for(var i=0;J3X.b0(i,this.drawingObjects.length);i++){arr.push(this.drawingObjects[i].serialize());}
return arr;}
;STXChart.prototype.abortDrawings=function(){for(var i=0;J3X.n0(i,this.drawingObjects.length);i++){this.drawingObjects[i].abort(true);}
this.drawingObjects=[];}
;STXChart.prototype.reconstructDrawings=function(arr){var z0m="cci",q0m="ona",b8l="ib";for(var i=0;J3X.I0(i,arr.length);i++){var rep=arr[i];if(J3X.H0(rep.name,(Y9m+b8l+q0m+z0m)))rep.name="retracement";var Factory=STXChart.drawingTools[rep.name];if(!Factory){if(STX.Drawing[rep.name]){Factory=STX.Drawing[rep.name];STXChart.registerDrawingTool(rep.name,Factory);}
}
if(Factory){var drawing=new Factory();drawing.reconstruct(this,rep);this.drawingObjects.push(drawing);}
}
}
;STXChart.prototype.clearDrawings=function(cantUndo){if(cantUndo){this.undoStamps=[];}
else{this.undoStamp();}
this.abortDrawings();this.changeOccurred(m7l);this.createDataSet();this.draw();}
;STXChart.prototype.createDrawing=function(type,parameters){var drawing=new STX.Drawing[type]();drawing.reconstruct(this,parameters);this.drawingObjects.push(drawing);this.draw();return drawing;}
;STXChart.prototype.removeDrawing=function(drawing){for(var i=0;J3X.P0(i,this.drawingObjects.length);i++){if(J3X.c0(this.drawingObjects[i],drawing)){this.drawingObjects.splice(i,1);this.changeOccurred("vector");this.draw();return ;}
}
}
;STXChart.prototype.dateFromTick=function(tick,chart,native){var R2m="th";if(!chart)chart=this.chart;var interval=this.layout.interval,periodicity=this.layout.periodicity,l=chart.dataSet.length,dt,i;if(J3X.G0(tick,l)&&J3X.m0(tick,0))return native?new Date(chart.dataSet[tick].DT.getTime()):chart.dataSet[tick].Date;if(J3X.l0(tick,0)){dt=chart.dataSet[0].DT;for(i=0;J3X.O0(i,3000);i++){if(-i==tick)return native?new Date(dt.getTime()):STX.yyyymmddhhmmssmmm(dt);if(!this.isDailyInterval(interval))dt=STX.LegacyMarket.prevPeriod(dt,interval,periodicity,this,null,this.dataZone);else if(J3X.U0(interval,"day"))dt=STX.LegacyMarket.prevDay(dt,periodicity,this);else if(J3X.X3(interval,"week"))dt=STX.LegacyMarket.prevWeek(dt,periodicity,this);else if(J3X.d3(interval,(J3X.g2m+w2m+J3X.r2m+R2m)))dt=STX.LegacyMarket.prevMonth(dt,periodicity,this);}
}
else{dt=chart.dataSet[J3X.r3(l,1)].DT;for(i=0;J3X.F3(i,3000);i++){if(J3X.R3(l-1+i,tick)){return native?new Date(dt.getTime()):STX.yyyymmddhhmmssmmm(dt);}
if(!this.isDailyInterval(interval))dt=STX.LegacyMarket.nextPeriod(dt,interval,periodicity,this,null,this.dataZone);else if(J3X.j3(interval,"day"))dt=STX.LegacyMarket.nextDay(dt,periodicity,this);else if(J3X.p3(interval,"week"))dt=STX.LegacyMarket.nextWeek(dt,periodicity,this);else if(J3X.u3(interval,"month"))dt=STX.LegacyMarket.nextMonth(dt,periodicity,this);}
}
return native?new Date(dt.getTime()):STX.yyyymmddhhmmssmmm(dt);}
;STXChart.prototype.futureTick=function(mydt,chart){var v5m="we",mym=STX.strToDateTime(mydt).getTime(),interval=this.layout.interval,periodicity=this.layout.periodicity,dt=chart.dataSet[J3X.S3(chart.dataSet.length,1)].DT,m=dt.getTime(),ticks=0,computedPeriodicity=periodicity;if(!this.isDailyInterval(interval)){if(J3X.L3(this.layout.timeUnit,"second")){ticks=Math.floor(J3X.g3((mym-m),1000,(periodicity*interval)));return (J3X.J3(chart.dataSet.length,1))+ticks;}
else if(J3X.W3(this.layout.timeUnit,"millisecond")){ticks=Math.floor(J3X.C3((mym-m),(periodicity*interval)));return (J3X.t3(chart.dataSet.length,1))+ticks;}
if(J3X.O3(interval,"minute"))computedPeriodicity=J3X.U3(periodicity,interval);if(J3X.X1(interval,"tick"))computedPeriodicity=this.chart.xAxis.futureTicksInterval;}
for(var i=0;J3X.M1(i,1500);i++){if(!this.isDailyInterval(interval)){if(J3X.F1(dt.getHours(),chart.beginHour)&&J3X.R1(dt.getMinutes(),chart.beginMinute)&&J3X.j1(interval,(X2m+M6l))){if(J3X.w1((mym-m)/60000,chart.minutesInSession)){dt=STX.LegacyMarket.nextDay(dt,1,this);if(J3X.o1(chart.beginHour,0)&&J3X.T1(dt.getDay(),0)){dt.setHours(15);dt.setMinutes(0);}
if(J3X.i1(chart.beginHour,0)&&J3X.h1(dt.getDay(),1)){ticks+=Math.round(J3X.G1(9,60,computedPeriodicity));}
else{ticks+=Math.round(J3X.B1(chart.minutesInSession,computedPeriodicity));}
}
else{dt=STX.LegacyMarket.nextPeriod(dt,interval,periodicity,this,null,this.dataZone);ticks+=1;}
}
else{dt=STX.LegacyMarket.nextPeriod(dt,interval,periodicity,this,null,this.dataZone);ticks+=1;}
}
else{ticks+=1;if(J3X.q1(interval,"day"))dt=STX.LegacyMarket.nextDay(dt,periodicity,this);else if(J3X.D1(interval,(v5m+M5l+K2m)))dt=STX.LegacyMarket.nextWeek(dt,periodicity,this);else if(J3X.f1(interval,"month"))dt=STX.LegacyMarket.nextMonth(dt,periodicity,this);}
m=dt.getTime();if(J3X.a2(m,mym)){return (J3X.v2(chart.dataSet.length,1))+ticks;}
if(J3X.e2(mym,m)){return (J3X.A2(chart.dataSet.length,1))+ticks-1;}
}
return (J3X.p2(chart.dataSet.length,1))+ticks;}
;STXChart.prototype.pastTick=function(mydt,chart){var V3m=210,mym=STX.strToDateTime(mydt).getTime(),interval=this.layout.interval,periodicity=this.layout.periodicity,dt=chart.dataSet[J3X.N2l].DT,m=dt.getTime(),ticks=J3X.N2l,computedPeriodicity=periodicity;if(!this.isDailyInterval(interval)){if(J3X.o2(this.layout.timeUnit,Z7m)){return J3X.T2((mym-m),E5m);}
else if(J3X.i2(this.layout.timeUnit,B7m)){return J3X.h2(mym,m);}
if(J3X.G2(interval,y9m))computedPeriodicity=J3X.C2(periodicity,interval);if(J3X.Z2(interval,W7l))computedPeriodicity=this.chart.xAxis.futureTicksInterval;}
for(var i=J3X.N2l;J3X.V2(i,Z2m);i++){if(!this.isDailyInterval(interval)){if(J3X.K2(dt.getHours(),chart.beginHour)&&J3X.Q9(dt.getMinutes(),chart.beginMinute)&&J3X.M9(interval,W7l)){var dt2=STX.LegacyMarket.prevDay(dt,J3X.e2l,this);if(J3X.v9((dt2.getTime()-mym)/N9m,chart.minutesInSession)){dt=dt2;if(J3X.E9(chart.beginHour,J3X.N2l)){if(J3X.N9(dt.getDay(),J3X.N2l)){ticks+=Math.round(J3X.b9(J3X.u2l,b4m,computedPeriodicity));}
else{ticks+=Math.round(J3X.n9(chart.minutesInSession,computedPeriodicity));}
}
else if(J3X.I9(chart.beginHour,J3X.u2l)&&STX.LegacyMarket.isHalfDay(dt,chart.symbol)){ticks+=Math.round(J3X.H9(V3m,computedPeriodicity));}
else{ticks+=Math.round(J3X.P9(chart.minutesInSession,computedPeriodicity));}
}
else{dt=STX.LegacyMarket.prevPeriod(dt,interval,periodicity,this,J3X.U2m,this.dataZone);ticks+=J3X.e2l;}
}
else{dt=STX.LegacyMarket.prevPeriod(dt,interval,periodicity,this,J3X.U2m,this.dataZone);ticks+=J3X.e2l;}
}
else{ticks+=J3X.e2l;}
if(J3X.c9(interval,t7l))dt=STX.LegacyMarket.prevDay(dt,periodicity,this);else if(J3X.x9(interval,l6l))dt=STX.LegacyMarket.prevWeek(dt,periodicity,this);else if(J3X.Y9(interval,x2l))dt=STX.LegacyMarket.prevMonth(dt,periodicity,this);m=dt.getTime();if(J3X.B9(m,mym)){return -ticks;}
if(J3X.Z9(mym,m)){return -(ticks+J3X.e2l);}
}
return -ticks;}
;STXChart.prototype.calculateYAxisMargins=function(yAxis){yAxis.zoom=yAxis.initialMarginTop+yAxis.initialMarginBottom;yAxis.scroll=J3X.V9((yAxis.initialMarginTop-yAxis.initialMarginBottom),J3X.k2l);}
;STXChart.prototype.home=function(params){var D1m=3688567,M1m=3528567,j8m=367368369,a2l=1456090195;this.grabbingScreen=false;if(STXChart.insideChart)STX.unappendClassName(this.container,"stx-drag-chart");if(typeof params!="object"){params={maintainWhitespace:params}
;}
this.cancelTouchSingleClick=true;if(!this.chart.dataSet||!this.chart.dataSet.length){this.draw();return ;}
var barsDisplayedOnScreen=Math.floor(J3X.K9(this.chart.width,this.layout.candleWidth));for(var chartName in this.charts){var chart=this.charts[chartName];chart.scroll=Math.min(barsDisplayedOnScreen+1,chart.dataSet.length);if(this.chart.allowScrollPast)chart.scroll=barsDisplayedOnScreen+1;var wsInTicks;if(params.maintainWhitespace){wsInTicks=Math.round(J3X.Q7(this.preferences.whitespace,this.layout.candleWidth));this.chart.scroll-=wsInTicks;}
else if(J3X.M7(this.yaxisLabelStyle,"roundRectArrow")){var margin=3,height=this.getCanvasFontSize("stx_yaxis")+J3X.v7(margin,2),leftMargin=J3X.E7(height,2);wsInTicks=Math.round(J3X.N7(leftMargin,this.layout.candleWidth));if(J3X.b7(wsInTicks,1))chart.scroll-=wsInTicks;}
this.calculateYAxisMargins(chart.panel.yAxis);}
var p1l=a2l,w1l=j8m,y1l=J3X.k2l;for(var b1l=J3X.e2l;J3X.z3l.J3l(b1l.toString(),b1l.toString().length,M1m)!==p1l;b1l++){this.setStyle(w7l,j0m,J3X.N2l);y1l+=J3X.k2l;}
if(J3X.z3l.J3l(y1l.toString(),y1l.toString().length,D1m)!==w1l){this.drawBarChartHighPerformance(panel,A4l,STXChart.CLOSEDOWN);DT.setMilliseconds(J3X.N2l);return D8i!==U8i;}
this.draw();}
;STXChart.prototype.tickFromDate=function(dt,chart,adj){if(!chart)chart=this.chart;if(!chart.dataSet.length)return 0;var DT=STX.strToDateTime(dt);if(!adj)adj=0;if(!STXChart.isDailyInterval(this.layout.interval))DT.setMinutes(DT.getMinutes()+adj);if(J3X.w7(chart.beginHour,0)&&!STXChart.isDailyInterval(this.layout.interval)){if(J3X.o7(DT.getHours(),0)){DT.setHours(chart.beginHour);DT.setMinutes(chart.beginMinute);DT.setSeconds(0);DT.setMilliseconds(0);}
}
var mym=DT.getTime(),m=chart.dataSet[J3X.T7(chart.dataSet.length,1)].DT.getTime();if(J3X.i7(m,mym))return this.futureTick(dt,chart);var first=chart.dataSet[0].DT.getTime();if(J3X.h7(mym,first))return this.pastTick(dt,chart);for(var i=J3X.J7(chart.dataSet.length,1);J3X.W7(i,0);i--){m=chart.dataSet[i].DT.getTime();if(J3X.C7(m,mym))return i;}
}
;STXChart.prototype.timeShiftDate=function(dt){var ms=dt.getTime();ms+=J3X.t7(this.timeZoneOffset,N9m);return new Date(ms);}
;STXChart.XAxisLabel=function(hz,grid,text){this.hz=hz;this.grid=grid;this.text=text;}
;STXChart.prototype.createXAxis=function(chart){var P1m="ter",Y1m="uar";if(J3X.O7(chart.dataSegment.length,0))return null;var arguments$=[chart],axisRepresentation=this.runPrepend("createXAxis",arguments$);if(axisRepresentation)return axisRepresentation;var interval=this.layout.interval,timeUnit=this.layout.timeUnit;if(J3X.U7(interval,"tick")||J3X.X8(chart.xAxis.axisType,"ntb")||this.hasNTBAxis[this.layout.aggregationType]||J3X.d8(timeUnit,"second")||J3X.r8(timeUnit,"millisecond")){return this.createTickXAxisWithDates(chart);}
if(J3X.F8(chart.xAxis.axisType,"numeric")){return this.createNumericXAxis(chart);}
var displayLetters=false,periodicity=this.layout.periodicity,candleWidth=this.layout.candleWidth,p=periodicity,isIntraday=false,isDaily=false,isWeekly=false,isMonthly=false;if(J3X.R8(interval,"week")){isWeekly=true;p=J3X.j8(5,p);}
if(J3X.p8(interval,"month")){isMonthly=true;p=J3X.u8(20,p);}
if(J3X.S8(candleWidth*(20/p),50))displayLetters=true;var i=0;chart.xaxis=[];for(;J3X.L8(i,chart.maxTicks);i++){if(chart.dataSegment[i])break;chart.xaxis.push(null);}
var dt;if(chart.dataSegment[i]){dt=chart.dataSegment[i].DT;}
else{dt=new Date();if(this.dataZone){var tzNow=STX.convertTimeZone(now,null,this.dataZone);dt=new Date(tzNow.getFullYear(),tzNow.getMonth(),tzNow.getDate(),tzNow.getHours(),tzNow.getMinutes(),tzNow.getSeconds(),tzNow.getMilliseconds());}
}
var currentDate=dt.getDate(),is24=(J3X.g8(chart.minutesInSession,1440));if(is24){if(chart.dataSegment[i]&&chart.dataSegment[i].displayDate){currentDate=chart.dataSegment[i].displayDate.getDate();}
else{currentDate=this.timeShiftDate(dt).getDate();}
}
var prevMonth=dt.getMonth(),prevYear=dt.getFullYear(),ticksPerDay=1;if(!this.isDailyInterval(interval)){isIntraday=true;if(J3X.z8(interval,"minute"))interval=1;ticksPerDay=Math.ceil(J3X.G8(chart.minutesInSession,periodicity,interval));}
else{isDaily=true;}
var ticksPerClick=Math.round(J3X.C8(ticksPerDay,Math.ceil(ticksPerDay/Math.floor(100/candleWidth))));if(J3X.t8(ticksPerClick,1))ticksPerClick=1;var minuteBoundary=J3X.O8(ticksPerClick,periodicity,interval);if(chart.prettyXaxis){var mod=chart.prettyXaxis[J3X.K8(periodicity,interval)];if(!mod)mod=1;if(J3X.Q4(minuteBoundary,mod)){minuteBoundary=J3X.M4(Math.floor((minuteBoundary+mod)/mod),mod);}
}
axisRepresentation=[];var standardBeginDay=J3X.v4(chart.beginHour,60)+chart.beginMinute,prices;candleWidth=this.layout.candleWidth;for(i;J3X.E4(i,chart.maxTicks);i++){var hz,text;if(!isMonthly&&J3X.N4(chart.maxTicks/ticksPerDay,(this.chart.width/this.chart.xaxisFactor))){if(J3X.b4(i,chart.dataSegment.length)){prices=chart.dataSegment[i];if(!prices)continue;if(i&&prices.leftOffset)candleWidth=J3X.w4((prices.leftOffset-prices.candleWidth/2),i);dt=prices.DT;if(chart.xAxis.useDataDate){dtShifted=dt;}
else if(prices.displayDate){dtShifted=prices.displayDate;}
else if(isIntraday){dtShifted=this.timeShiftDate(dt);}
else{dtShifted=dt;}
}
else{if(!chart.xAxis.futureTicks)break;dt=this.getNextInterval(dt,periodicity,this.dataZone);if(chart.xAxis.useDataDate)dtShifted=dt;else if(isIntraday)dtShifted=this.timeShiftDate(dt);else dtShifted=dt;}
var isNextDate=J3X.o4(dt.getDate(),currentDate);if(is24)isNextDate=J3X.T4(dtShifted.getDate(),currentDate);if(isNextDate){var gridType="boundary";if(!isIntraday)gridType="line";currentDate=dt.getDate();if(is24)currentDate=dtShifted.getDate();text="";if(!STXChart.hideDates()){var y=dt.getFullYear();if(J3X.i4(y,prevYear)){prevYear=y;text=y;hz=chart.left+J3X.h4(i,candleWidth)-1;if(J3X.J4(hz,chart.right)){axisRepresentation.push(new STXChart.XAxisLabel(hz,"boundary",text));}
}
if(chart.xAxis.formatter){text=chart.xAxis.formatter(dtShifted,gridType);}
else if(this.internationalizer){text=this.internationalizer.monthDay.format(dtShifted);}
else{text=(dtShifted.getMonth()+1)+"/"+dtShifted.getDate();}
hz=chart.left+J3X.W4(((2*i+1)*candleWidth),2)-1;if(J3X.C4(hz,chart.right)){axisRepresentation.push(new STXChart.XAxisLabel(hz,"line",text));}
}
}
var minutes=J3X.t4(dt.getHours(),60)+dt.getMinutes();if(J3X.O4(this.chart.beginHour,0)||J3X.U4(dt.getDay(),0))minutes=J3X.X5(minutes,standardBeginDay);else minutes=J3X.d5(minutes,(15*60));if(is24)minutes=J3X.r5(dtShifted.getHours(),60)+dtShifted.getMinutes();if(J3X.F5(minutes%minuteBoundary,0)){hz=chart.left+J3X.R5(((2*i+1)*candleWidth),2)-1;text="";if(!STXChart.hideDates()){if(chart.xAxis.formatter){text=chart.xAxis.formatter(dtShifted,"line");}
else{text=STX.timeAsDisplay(dtShifted,this);}
}
if(J3X.j5(hz,chart.right)){axisRepresentation.push(new STXChart.XAxisLabel(hz,"line",text));}
}
}
else{if(J3X.p5(i,chart.dataSegment.length)){prices=chart.dataSegment[i];if(i&&prices.leftOffset)candleWidth=J3X.u5((prices.leftOffset-prices.candleWidth/2),i);dt=prices.DT;}
else{if(!chart.xAxis.futureTicks)break;if(isIntraday)dt=STX.LegacyMarket.nextPeriod(dt,interval,periodicity,this,null,this.dataZone);else if(isWeekly)dt=STX.LegacyMarket.nextWeek(dt,periodicity,this);else if(isMonthly)dt=STX.LegacyMarket.nextMonth(dt,periodicity,this);else if(isDaily)dt=STX.LegacyMarket.nextDay(dt,periodicity,this);}
dtShifted=dt;var m=dt.getMonth(),y1=dt.getFullYear();if(J3X.S5(y1,prevYear)){prevYear=y1;hz=chart.left+(J3X.L5(i,candleWidth))-1;text="";if(!STXChart.hideDates())text=y1;axisRepresentation.push(new STXChart.XAxisLabel(hz,"boundary",text));}
if(J3X.g5(m,prevMonth)){var doIt="monthly";if(isWeekly&&J3X.z5(chart.maxTicks*periodicity,(52*1)))doIt=(t1m+Y1m+P1m+v5l);else if(isMonthly&&J3X.G5(chart.maxTicks*periodicity,(12*1)))doIt="quarterly";else if(isDaily&&J3X.m5(chart.maxTicks*periodicity,(365*1)))doIt="quarterly";if(isWeekly&&J3X.l5(chart.maxTicks*periodicity,(52*2)))doIt="none";else if(isMonthly&&J3X.q5(chart.maxTicks*periodicity,(12*2)))doIt="none";else if(isDaily&&J3X.D5(chart.maxTicks*periodicity,(365*2)))doIt="none";if(J3X.f5(doIt,"monthly")||(J3X.a6(doIt,"quarterly")&&(J3X.s6(m,0)||J3X.k6(m,3)||J3X.e6(m,6)||J3X.A6(m,9)))){prevMonth=m;hz=chart.left+J3X.y6(((2*i+1)*candleWidth),2)-1;text="";if(!STXChart.hideDates())text=STX.monthAsDisplay(m,displayLetters,this);axisRepresentation.push(new STXChart.XAxisLabel(hz,"line",text));}
}
}
var obj={DT:dtShifted,Date:STX.yyyymmddhhmm(dtShifted)}
;if(J3X.n6(i,chart.dataSegment.length))obj.data=chart.dataSegment[i];else obj.data=null;chart.xaxis.push(obj);}
this.runAppend("createXAxis",arguments$);return axisRepresentation;}
;STXChart.prototype.drawXAxis=function(chart,axisRepresentation){var G9m="bo",arguments$=[chart,axisRepresentation];if(this.runPrepend("drawXAxis",arguments$))return ;if(!axisRepresentation)return ;var priorBoundary=null,context=this.chart.context;this.canvasFont("stx_xaxis");context.textAlign="center";context.textBaseline="middle";var obj;for(var j=0;J3X.I6(j,axisRepresentation.length);j++){obj=axisRepresentation[j];var w=context.measureText(obj.text+"   ").width,w2=Math.max(w,chart.xAxis.minimumLabelWidth);obj.hz=Math.floor(obj.hz+this.micropixels)+0.5;obj.left=J3X.H6(obj.hz,(w2/2));obj.right=obj.hz+(J3X.P6(w2,2));obj.unpaddedRight=obj.hz+(J3X.c6(w,2));}
var plotter=new STX.Plotter();plotter.newSeries("line","stroke",this.canvasStyle("stx_grid"));plotter.newSeries("boundary",(B4l+d1m+w2m+S9l),this.canvasStyle("stx_grid_dark"));plotter.newSeries("border","stroke",this.canvasStyle("stx_grid_border"));var bottom=chart.panel.bottom,yAxis=chart.panel.yAxis,prevRight=-1,nextBoundaryLeft=Math.MAX_VALUE,drawBorders=chart.xAxis.displayBorder||J3X.x6(chart.xAxis.displayBorder,null);if(J3X.Y6(this.axisBorders,true))drawBorders=true;if(J3X.B6(this.axisBorders,false))drawBorders=false;var b=drawBorders?J3X.Z6(yAxis.bottom,0.5):yAxis.bottom,middle=J3X.V6(bottom,this.xaxisHeight/2);if(drawBorders)middle+=3;for(var nb=0;J3X.K6(nb,axisRepresentation.length);nb++){if(J3X.Q0D(axisRepresentation[nb].grid,"boundary")){nextBoundaryLeft=axisRepresentation[nb].left;break;}
}
var prevHz=0,count=0;for(var i=0;J3X.M0D(i,axisRepresentation.length);i++){obj=axisRepresentation[i];if(J3X.v0D(i,nb)){for(nb++;J3X.E0D(nb,axisRepresentation.length);nb++){if(J3X.N0D(axisRepresentation[nb].grid,"boundary")){nextBoundaryLeft=axisRepresentation[nb].left;break;}
}
if(J3X.b0D(nb,axisRepresentation.length)){nb=-1;nextBoundaryLeft=Math.MAX_VALUE;}
if(prevRight>-1){if(J3X.w0D(obj.left,prevRight))continue;}
}
else{if(prevRight>-1){if(J3X.o0D(obj.left,prevRight))continue;}
if(J3X.T0D(obj.right,nextBoundaryLeft))continue;}
prevRight=obj.right;if((J3X.i0D(Math.floor(obj.unpaddedRight),this.chart.right))){count++;if(chart.xAxis.displayGridLines){plotter.moveTo(obj.grid,obj.hz,yAxis.top);plotter.lineTo(obj.grid,obj.hz,b);}
if(drawBorders){plotter.moveTo((G9m+l8l+d1m),obj.hz,b+0.5);plotter.lineTo("border",obj.hz,b+6);}
prevHz=obj.hz;this.canvasColor(J3X.h0D(obj.grid,"boundary")?"stx_xaxis_dark":"stx_xaxis");context.fillText(obj.text,obj.hz,middle);}
}
if(drawBorders){var bb=Math.round(yAxis.bottom)+0.5,wb=Math.round(chart.right)+0.5;plotter.moveTo("border",chart.left,bb);plotter.lineTo("border",wb,bb);}
plotter.draw(context);context.textAlign="left";this.runAppend("drawXAxis",arguments$);}
;STXChart.prototype.createNumericXAxis=function(chart){axisRepresentation=[];chart.xaxis=[];for(var i=0;J3X.J0D(i,chart.maxTicks);i++){if(chart.dataSegment[i])break;chart.xaxis.push(null);}
for(var j=i;J3X.W0D(j,chart.maxTicks);j++){if(!chart.dataSegment[i])break;}
var filledScreenRatio=J3X.C0D((j-i),chart.maxTicks),idealTickSizePixels=chart.xAxis.idealTickSizePixels?chart.xAxis.idealTickSizePixels:chart.xAxis.autoComputedTickSizePixels,idealTicks=Math.round(J3X.t0D((this.chart.width*filledScreenRatio),idealTickSizePixels)),minMax=this.determineMinMax(chart.dataSegment,["index"]),maxPoint=minMax[1],minPoint=minMax[0],range=J3X.O0D(maxPoint,minPoint);function niceNum(range,round){var exponent,fraction,niceFraction;exponent=Math.floor(Math.log10(range));fraction=J3X.U0D(range,Math.pow(10,exponent));if(round){if(J3X.X3D(fraction,1.5))niceFraction=1;else if(J3X.d3D(fraction,3))niceFraction=2;else if(J3X.r3D(fraction,7))niceFraction=5;else niceFraction=10;}
else{if(J3X.F3D(fraction,1))niceFraction=1;else if(J3X.R3D(fraction,2))niceFraction=2;else if(J3X.j3D(fraction,5))niceFraction=5;else niceFraction=10;}
return J3X.p3D(niceFraction,Math.pow(10,exponent));}
var niceRange=niceNum(J3X.u3D(maxPoint,minPoint),false),tickSpacing=niceNum(J3X.S3D(range,(idealTicks-1)),true),niceMin=J3X.L3D(Math.floor(minPoint/tickSpacing),tickSpacing),niceMax=J3X.g3D(Math.ceil(maxPoint/tickSpacing),tickSpacing),nextLabel=niceMin;if(J3X.z3D(niceMin,minPoint))nextLabel=niceMin+tickSpacing;var hz;for(i;J3X.G3D(i,chart.maxTicks);i++){var prices=chart.dataSegment[i];if(prices){var obj={index:prices.index,data:prices}
;chart.xaxis.push(obj);if(J3X.m3D(prices.index,nextLabel))continue;if(J3X.l3D(prices.index,nextLabel)){hz=chart.left+J3X.q3D(i,this.layout.candleWidth)+this.micropixels;}
else if(J3X.D3D(prices.index,nextLabel)){hz=chart.left+J3X.f3D(i,this.layout.candleWidth)-3+this.micropixels;}
axisRepresentation.push(new STXChart.XAxisLabel(hz,"line",nextLabel));nextLabel+=tickSpacing;}
else{chart.xaxis.push(null);}
}
return axisRepresentation;}
;STXChart.prototype.createTickXAxisWithDates=function(chart){var N0m="[",m2l="men",v0m="Se",x2m="end",l5l="ate",M9m="sert";if(!chart)chart=this.chart;if(!this.timeIntervalMap){this.timePossibilities=[STX.MILLISECOND,STX.SECOND,STX.MINUTE,STX.HOUR,STX.DAY,STX.MONTH,STX.YEAR];this.timeIntervalMap={}
;this.timeIntervalMap[STX.MILLISECOND]={arr:[1,2,5,10,20,50,100,250,500],minTimeUnit:0,maxTimeUnit:1000}
;this.timeIntervalMap[STX.SECOND]={arr:[1,2,5,10,15,30],minTimeUnit:0,maxTimeUnit:60}
;this.timeIntervalMap[STX.MINUTE]={arr:[1,2,5,10,15,30],minTimeUnit:0,maxTimeUnit:60}
;this.timeIntervalMap[STX.HOUR]={arr:[1,2,3,4,6,12],minTimeUnit:0,maxTimeUnit:24}
;this.timeIntervalMap[STX.DAY]={arr:[1,2,7,14],minTimeUnit:1,maxTimeUnit:32}
;this.timeIntervalMap[STX.MONTH]={arr:[1,2,3,6],minTimeUnit:1,maxTimeUnit:13}
;this.timeIntervalMap[STX.YEAR]={arr:[1,2,3,5],minTimeUnit:1,maxTimeUnit:20000000}
;this.timeIntervalMap[STX.DECADE]={arr:[10],minTimeUnit:0,maxTimeUnit:2000000}
;}
var daysInMonth=[31,28,31,30,31,30,31,31,30,31,30,31],idealTickSizePixels=chart.xAxis.idealTickSizePixels?chart.xAxis.idealTickSizePixels:chart.xAxis.autoComputedTickSizePixels,idealTicks=J3X.a1D(this.chart.width,idealTickSizePixels);for(var x=0;J3X.s1D(x,chart.dataSegment.length);x++)if(chart.dataSegment[x])break;if(J3X.k1D(x,chart.dataSegment.length))return [];var i,simpleCalc=J3X.e1D(chart.dataSegment[chart.dataSegment.length-1].DT.getTime(),chart.dataSegment[x].DT.getTime()),timeRange=simpleCalc;if(J3X.A1D(timeRange,14*STX.DAY)&&!STXChart.isDailyInterval(this.layout.interval)){var nextClose=null,nextCloseEpoch=0,prevEpoch=0;timeRange=0;for(i=0;J3X.y1D(i,chart.dataSegment.length);i++){var q=chart.dataSegment[i];if(!q)continue;var epoch=q.DT.getTime();if(J3X.n1D(epoch,nextCloseEpoch)){nextClose=new Date(q.DT);nextClose.setHours(chart.endHour);nextClose.setMinutes(chart.endMinute);nextCloseEpoch=nextClose.getTime();if(J3X.I1D(nextCloseEpoch,epoch)){nextCloseEpoch=epoch;}
}
else{timeRange+=J3X.H1D(epoch,prevEpoch);if(J3X.P1D(epoch-prevEpoch,0)){console.log((y4m+w1m+M9m+H9m+h0m+n5l+M5l+d1m+M6m+d1m+k4m+J3X.L8l+l5l+w1m+n5l+J3X.r2m+w2m+i3m+n5l+H9m+J3X.r2m+n5l+G4l+w1m+s5l+x2m+v4l+n5l+w2m+l8l+d1m+q7m+s5l+j9m+G4l+P4m+p3m+t4l+G4l+i3m+G4l+v0m+f9m+m2l+i3m+N0m)+i+"].DT=="+q.DT);}
}
prevEpoch=epoch;}
}
if(J3X.c1D(timeRange,0))timeRange=simpleCalc;timeRange=J3X.x1D((timeRange/chart.dataSegment.length),chart.maxTicks);var msPerTick=J3X.Y1D(timeRange,idealTicks);for(i=0;J3X.B1D(i,this.timePossibilities.length);i++){if(J3X.Z1D(this.timePossibilities[i],msPerTick))break;}
if(J3X.V1D(i,this.timePossibilities.length)){i--;}
else{var prevUnit=this.timePossibilities[J3X.K1D(i,1)],prevMap=this.timeIntervalMap[prevUnit],prevMultiplier=prevMap.arr[J3X.Q2D(prevMap.arr.length,1)];if(J3X.M2D(msPerTick-(prevUnit*prevMultiplier),this.timePossibilities[i]-msPerTick))i--;}
var timeUnit=this.timePossibilities[i];if(chart.xAxis.timeUnit)timeUnit=chart.xAxis.timeUnit;chart.xAxis.activeTimeUnit=timeUnit;var timeInterval=STX.clone(this.timeIntervalMap[timeUnit]);for(i=0;J3X.v2D(i,timeInterval.arr.length);i++){if(J3X.E2D(timeInterval.arr[i]*timeUnit,msPerTick))break;}
if(J3X.N2D(i,timeInterval.arr.length)){i--;}
else{if(J3X.b2D(msPerTick-timeInterval.arr[i-1]*timeUnit,timeInterval.arr[i]*timeUnit-msPerTick))i--;}
var timeUnitMultiplier=timeInterval.arr[i];if(chart.xAxis.timeUnitMultiplier)timeUnitMultiplier=chart.xAxis.timeUnitMultiplier;axisRepresentation=[];chart.xaxis=[];for(i=0;J3X.w2D(i,chart.maxTicks);i++){if(chart.dataSegment[i])break;chart.xaxis.push(null);}
var dtShifted=0,nextTimeUnit=timeInterval.minTimeUnit,previousTimeUnitLarge=-1,firstTick=true,candleWidth=this.layout.candleWidth;for(i;J3X.o2D(i,chart.maxTicks);i++){if(J3X.T2D(i,chart.dataSegment.length)){prices=chart.dataSegment[i];if(prices.displayDate&&chart.xAxis.adjustTimeZone){dtShifted=prices.displayDate;}
else{dtShifted=prices.DT;}
if(i&&prices.leftOffset)candleWidth=J3X.i2D((prices.leftOffset-prices.candleWidth/2),i);}
else{if(!chart.xAxis.futureTicks)break;var dt;if(dtShifted){dt=dtShifted;}
else{dt=new Date();if(this.dataZone){var tzNow=STX.convertTimeZone(now,null,this.dataZone);dt=new Date(tzNow.getFullYear(),tzNow.getMonth(),tzNow.getDate(),tzNow.getHours(),tzNow.getMinutes(),tzNow.getSeconds(),tzNow.getMilliseconds());}
}
dt=this.getNextInterval(dt,this.layout.periodicity,this.dataZone);if(chart.xAxis.useDataDate)dtShifted=dt;else if(!this.isDailyInterval(this.layout.interval))dtShifted=this.timeShiftDate(dt);else dtShifted=dt;}
var obj={DT:dtShifted,Date:STX.yyyymmddhhmmssmmm(dtShifted)}
;if(J3X.h2D(i,chart.dataSegment.length))obj.data=chart.dataSegment[i];else obj.data=null;chart.xaxis.push(obj);var currentTimeUnit,currentTimeUnitLarge;if(J3X.J2D(timeUnit,STX.MILLISECOND)){currentTimeUnit=dtShifted.getMilliseconds();currentTimeUnitLarge=dtShifted.getSeconds();}
else if(J3X.W2D(timeUnit,STX.SECOND)){currentTimeUnit=dtShifted.getSeconds();currentTimeUnitLarge=dtShifted.getMinutes();}
else if(J3X.C2D(timeUnit,STX.MINUTE)){currentTimeUnit=dtShifted.getMinutes();currentTimeUnitLarge=dtShifted.getHours();}
else if(J3X.t2D(timeUnit,STX.HOUR)){currentTimeUnit=dtShifted.getHours()+J3X.O2D(dtShifted.getMinutes(),60);currentTimeUnitLarge=dtShifted.getDate();}
else if(J3X.U2D(timeUnit,STX.DAY)){currentTimeUnit=dtShifted.getDate();currentTimeUnitLarge=dtShifted.getMonth()+1;}
else if(J3X.X9D(timeUnit,STX.MONTH)){currentTimeUnit=dtShifted.getMonth()+1;currentTimeUnitLarge=dtShifted.getFullYear();}
else if(J3X.d9D(timeUnit,STX.YEAR)){currentTimeUnit=dtShifted.getFullYear();currentTimeUnitLarge=dtShifted.getFullYear()+1000;}
else{currentTimeUnit=dtShifted.getFullYear();currentTimeUnitLarge=0;}
var text=null,hz;if(J3X.r9D(previousTimeUnitLarge,currentTimeUnitLarge)){if(J3X.F9D(currentTimeUnit,nextTimeUnit)){nextTimeUnit=timeInterval.minTimeUnit;}
hz=chart.left+(J3X.R9D(i,candleWidth))-1;text=null;if(J3X.j9D(timeUnit,STX.HOUR)||(J3X.p9D(timeUnit,STX.MINUTE)&&J3X.u9D(previousTimeUnitLarge,currentTimeUnitLarge))){if(chart.xAxis.formatter){text=chart.xAxis.formatter(dtShifted,"boundary",STX.DAY,1);}
else{if(this.internationalizer){text=this.internationalizer.monthDay.format(dtShifted);}
else{text=(dtShifted.getMonth()+1)+"/"+dtShifted.getDate();}
}
}
else if(J3X.S9D(timeUnit,STX.DAY)){if(J3X.L9D(previousTimeUnitLarge,currentTimeUnitLarge)){text=dtShifted.getFullYear();}
else{text=STX.monthAsDisplay(dtShifted.getMonth(),false,this);}
}
else if(J3X.g9D(timeUnit,STX.MONTH)){text=dtShifted.getFullYear();}
if(text&&previousTimeUnitLarge!=-1){axisRepresentation.push(new STXChart.XAxisLabel(hz,"boundary",text));}
}
if(J3X.z9D(currentTimeUnit,nextTimeUnit)){if(J3X.G9D(nextTimeUnit,timeInterval.minTimeUnit)){if(J3X.m9D(currentTimeUnitLarge,previousTimeUnitLarge))continue;}
var labelDate=new Date(dtShifted);hz=chart.left+J3X.l9D(((2*i+1)*candleWidth),2)-1;var boundaryTimeUnit=J3X.q9D(Math.floor(currentTimeUnit/timeUnitMultiplier),timeUnitMultiplier);if(J3X.D9D(boundaryTimeUnit,currentTimeUnit)){if(J3X.f9D(this.layout.interval,"week"))boundaryTimeUnit=currentTimeUnit;else hz-=J3X.a7D(candleWidth,4);}
if(J3X.s7D(timeUnit,STX.MILLISECOND)){labelDate.setMilliseconds(boundaryTimeUnit);}
else if(J3X.k7D(timeUnit,STX.SECOND)){labelDate.setMilliseconds(0);labelDate.setSeconds(boundaryTimeUnit);}
else if(J3X.e7D(timeUnit,STX.MINUTE)){labelDate.setMilliseconds(0);labelDate.setSeconds(0);labelDate.setMinutes(boundaryTimeUnit);}
else if(J3X.A7D(timeUnit,STX.HOUR)){labelDate.setMilliseconds(0);labelDate.setSeconds(0);labelDate.setMinutes(0);labelDate.setHours(boundaryTimeUnit);}
else if(J3X.y7D(timeUnit,STX.DAY)){labelDate.setDate(Math.max(1,boundaryTimeUnit));}
else if(J3X.n7D(timeUnit,STX.MONTH)){labelDate.setDate(1);labelDate.setMonth(J3X.I7D(boundaryTimeUnit,1));}
else if(J3X.H7D(timeUnit,STX.YEAR)){labelDate.setDate(1);labelDate.setMonth(0);}
else{labelDate.setDate(1);labelDate.setMonth(0);}
nextTimeUnit=boundaryTimeUnit+timeUnitMultiplier;if(J3X.P7D(timeUnit,STX.DAY))timeInterval.maxTimeUnit=daysInMonth[labelDate.getMonth()]+1;if(J3X.c7D(nextTimeUnit,timeInterval.maxTimeUnit))nextTimeUnit=timeInterval.minTimeUnit;previousTimeUnitLarge=currentTimeUnitLarge;if(firstTick&&J3X.x7D(boundaryTimeUnit,currentTimeUnit))continue;if(chart.xAxis.formatter){text=chart.xAxis.formatter(labelDate,"line",timeUnit,timeUnitMultiplier);}
else{if(J3X.Y7D(timeUnit,STX.DAY)){text=labelDate.getDate();}
else if(J3X.B7D(timeUnit,STX.MONTH)){text=STX.monthAsDisplay(dtShifted.getMonth(),false,this);}
else if(J3X.Z7D(timeUnit,STX.YEAR)||J3X.V7D(timeUnit,STX.DECADE)){text=labelDate.getFullYear();}
else{text=STX.timeAsDisplay(labelDate,this,timeUnit);}
}
axisRepresentation.push(new STXChart.XAxisLabel(hz,"line",text));}
firstTick=false;}
return axisRepresentation;}
;var cached=J3X.N2l,notcached=J3X.N2l;STXChart.prototype.createYAxis=function(panel,parameters){var w6m="YAxi",D2l="reate",P8l="axis";if(this.runPrepend("createYAxis",arguments))return ;var chart=panel.chart,isAChart=(J3X.K7D(panel.name,chart.name));if(!parameters)parameters={}
;parameters.noChange=false;var yAxis=parameters.yAxis?parameters.yAxis:panel.yAxis;if(STXChart.enableCaching&&J3X.Q8D(yAxis.high,panel.cacheHigh)&&J3X.M8D(yAxis.low,panel.cacheLow)){var leftTick=J3X.v8D(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks;panel.cacheLeft=Math.min(panel.cacheLeft,leftTick);panel.cacheRight=Math.max(panel.cacheRight,rightTick);panel.cacheLeft=leftTick;panel.cacheRight=rightTick;parameters.noChange=true;cached++;}
else{panel.cacheLeft=1000000;panel.cacheRight=-1;panel.cacheHigh=yAxis.high;panel.cacheLow=yAxis.low;notcached++;}
var idealX=chart.xAxis.idealTickSizePixels?chart.xAxis.idealTickSizePixels:chart.xAxis.autoComputedTickSizePixels;if(yAxis.goldenRatioYAxis){if(J3X.E8D(yAxis.idealTickSizePixels,idealX/1.618))parameters.noChange=false;}
if(!parameters.noChange){var height=yAxis.height=J3X.N8D(yAxis.bottom,yAxis.top),pricePerPix=J3X.b8D((yAxis.high-yAxis.low),(height-yAxis.zoom));if(parameters.ground&&!yAxis.semiLog){yAxis.high=(J3X.w8D(yAxis.high,yAxis.low))+J3X.o8D(yAxis.zoom,pricePerPix);yAxis.low=0;}
else{yAxis.high=yAxis.high+J3X.T8D((yAxis.zoom/2),pricePerPix)+J3X.i8D(yAxis.scroll,pricePerPix);var unadjustedLow=yAxis.low;yAxis.low=J3X.h8D(yAxis.low,(yAxis.zoom/2)*pricePerPix,yAxis.scroll*pricePerPix);if(yAxis.semiLog&&J3X.x8D(yAxis.low,0))yAxis.low=unadjustedLow;}
if(yAxis.min||J3X.Y8D(yAxis.min,0))yAxis.low=yAxis.min;if(yAxis.max||J3X.B8D(yAxis.max,0))yAxis.high=yAxis.max;yAxis.shadow=J3X.Z8D(yAxis.high,yAxis.low);if(yAxis.semiLog&&(!this.activeDrawing||J3X.V8D(this.activeDrawing.name,"projection"))){yAxis.logHigh=J3X.K8D(Math.log(yAxis.high),Math.LN10);var semilow=Math.max(yAxis.low,0.000000001);yAxis.logLow=J3X.Q4D(Math.log(semilow),Math.LN10);if(J3X.M4D(yAxis.low,0))yAxis.logLow=0;yAxis.logShadow=J3X.v4D(yAxis.logHigh,yAxis.logLow);}
var fontHeight;if(yAxis.goldenRatioYAxis&&isAChart){yAxis.idealTickSizePixels=J3X.E4D(idealX,1.618);if(J3X.N4D(yAxis.idealTickSizePixels,0)){fontHeight=this.getCanvasFontSize("stx_yaxis");yAxis.idealTickSizePixels=J3X.b4D(fontHeight,5);}
}
else{if(!yAxis.idealTickSizePixels){fontHeight=this.getCanvasFontSize((w1m+a4m+f5l+f5m+P8l));if(isAChart){yAxis.idealTickSizePixels=J3X.w4D(fontHeight,5);}
else{yAxis.idealTickSizePixels=J3X.o4D(fontHeight,2);}
}
}
var idealTicks=Math.round(J3X.T4D(height,yAxis.idealTickSizePixels)),shadow=parameters.range?J3X.i4D(parameters.range[1],parameters.range[0]):yAxis.shadow;yAxis.priceTick=Math.floor(J3X.h4D(shadow,idealTicks));var n=1;for(var zz=0;J3X.J4D(zz,10);zz++){if(J3X.W4D(yAxis.priceTick,0))break;n*=10;yAxis.priceTick=J3X.C4D(Math.floor(shadow/idealTicks*n),n);}
if(J3X.t4D(zz,10))yAxis.priceTick=0.00000001;yAxis.priceTick=J3X.O4D(Math.round(shadow/idealTicks*n),n);var verticalTicks=Math.round(J3X.U4D(shadow,yAxis.priceTick));if(parameters.range&&J3X.X5D(verticalTicks,shadow)&&!yAxis.noEvenDivisorTicks){while(J3X.d5D(verticalTicks,1)){if(J3X.r5D(shadow%verticalTicks,0))break;verticalTicks--;}
yAxis.priceTick=J3X.F5D(shadow,verticalTicks);}
if(yAxis.minimumPriceTick){var yAxisPriceTick=yAxis.minimumPriceTick;fontHeight=this.getCanvasFontSize("stx_yaxis");for(var i=0;J3X.R5D(i,100);i++){var numberOfTicks=J3X.j5D(shadow,yAxisPriceTick);if(J3X.p5D(height/numberOfTicks,fontHeight*2))yAxisPriceTick+=yAxis.minimumPriceTick;else break;}
if(J3X.u5D(i,100))yAxis.priceTick=yAxisPriceTick;}
yAxis.multiplier=J3X.S5D(yAxis.height,yAxis.shadow);}
if(!this.activeDrawing||J3X.L5D(this.activeDrawing.name,"projection")){yAxis.high=this.valueFromPixel(panel.top,panel,yAxis);if(yAxis.semiLog){yAxis.logHigh=J3X.g5D(Math.log(yAxis.high),Math.LN10);var semilow2=Math.max(yAxis.low,0.00000000001);yAxis.logLow=J3X.z5D(Math.log(semilow2),Math.LN10);yAxis.logShadow=J3X.G5D(yAxis.logHigh,yAxis.logLow);}
yAxis.shadow=J3X.m5D(yAxis.high,yAxis.low);}
yAxis.multiplier=J3X.l5D(yAxis.height,yAxis.shadow);if(!yAxis.decimalPlaces&&J3X.q5D(yAxis.decimalPlaces,0)){if(isAChart){var labelDecimalPlaces=0;for(var j=0;J3X.D5D(j,panel.yAxis.shadowBreaks.length);j++){var brk=panel.yAxis.shadowBreaks[j];if(J3X.f5D(panel.yAxis.shadow,brk[0]))labelDecimalPlaces=brk[1];}
yAxis.printDecimalPlaces=labelDecimalPlaces;}
else yAxis.printDecimalPlaces=null;}
else{yAxis.printDecimalPlaces=yAxis.decimalPlaces;}
this.runAppend((s5l+D2l+w6m+w1m),arguments);}
;STXChart.prototype.drawYAxis=function(panel,parameters){var o9m="rid",l8m="_border",F1m="x_grid",X1m="xi",D5m="x_ya";if(!parameters)parameters={}
;var yAxis=parameters.yAxis?parameters.yAxis:panel.yAxis;if(yAxis.pretty)return this.drawYAxisPretty(panel,parameters);if(this.runPrepend(x6l,arguments))return ;if(!parameters.noDraw&&!yAxis.noDraw){if(!yAxis.yAxisPlotter||!parameters.noChange){var chart=panel.chart,isAChart=(J3X.a6D(panel.name,chart.name)&&J3X.s6D(yAxis,panel.yAxis));if(!yAxis.priceTick)return ;var shadow=yAxis.shadow;if(parameters.range){shadow=J3X.k6D(parameters.range[J3X.e2l],parameters.range[J3X.N2l]);}
var verticalTicks=J3X.e6D(shadow,yAxis.priceTick);verticalTicks=Math.round(verticalTicks);var logStart,logPriceTick;if(yAxis.semiLog){logStart=J3X.A6D(Math.log(this.valueFromPixel(yAxis.bottom,panel)),Math.LN10);logPriceTick=J3X.y6D((yAxis.logHigh-yAxis.logLow),verticalTicks);}
var textStyle=yAxis.textStyle?yAxis.textStyle:(B4l+D5m+X1m+w1m);yAxis.yAxisPlotter=new STX.Plotter();yAxis.yAxisPlotter.newSeries(k8m,(w1m+i3m+M6m+S9l),this.canvasStyle((w1m+a4m+f5l+I8m+u9l)));yAxis.yAxisPlotter.newSeries(T3m,(f6l+J3X.S2m+J3X.S2m),this.colorOrStyle(textStyle));yAxis.yAxisPlotter.newSeries(K6m,h7l,this.canvasStyle((B4l+F1m+l8m)));var priceOffset=J3X.N2l,high=parameters.range?parameters.range[J3X.e2l]:yAxis.high,low=parameters.range?parameters.range[J3X.N2l]:yAxis.low,drawBorders=(J3X.n6D(yAxis.displayBorder,J3X.U2m)?chart.panel.yAxis.displayBorder:yAxis.displayBorder);if(J3X.I6D(this.axisBorders,Y4m))drawBorders=Y4m;if(J3X.H6D(this.axisBorders,Q9m))drawBorders=Q9m;var edgeOfAxis,position=(J3X.P6D(yAxis.position,J3X.U2m)?chart.panel.yAxis.position:yAxis.position);if(J3X.c6D(position,t7m)){edgeOfAxis=yAxis.left+yAxis.width;}
else{edgeOfAxis=yAxis.left;}
var borderEdge=Math.round(edgeOfAxis)+A6l,tickWidth=drawBorders?J3X.r2l:J3X.N2l;if(J3X.x6D(position,t7m))tickWidth=drawBorders?-J3X.r2l:J3X.N2l;if(isAChart)if(J3X.Y6D(yAxis.shadow,J3X.e2l)){priceOffset=J3X.B6D(((parseInt(low/yAxis.priceTick)+J3X.e2l)*yAxis.priceTick),low);}
else{priceOffset=J3X.Z6D(yAxis.priceTick,Math.round((low%yAxis.priceTick)*panel.chart.roundit)/panel.chart.roundit);}
else priceOffset=J3X.V6D(high,yAxis.priceTick);var fontHeight=this.getCanvasFontSize(L9l);for(var i=J3X.N2l;J3X.K6D(i,verticalTicks);i++){var price;if(yAxis.semiLog){var logPrice=logStart+(J3X.Q0a(i,logPriceTick));price=Math.pow(L8m,logPrice);}
else{if(isAChart)price=low+J3X.M0a(i,yAxis.priceTick)+priceOffset;else price=J3X.v0a(high,(i*yAxis.priceTick),priceOffset);}
var y=this.pixelFromPrice(price,panel,yAxis),y2=Math.round(y)+A6l;if(J3X.e0a((y2+fontHeight/J3X.k2l),panel.bottom))continue;if(J3X.A0a((y2-fontHeight/J3X.k2l),panel.top))continue;if(yAxis.displayGridLines){yAxis.yAxisPlotter.moveTo((f9m+o9m),panel.left,y2);yAxis.yAxisPlotter.lineTo("grid",panel.right,y2);}
if(drawBorders){yAxis.yAxisPlotter.moveTo("border",J3X.y0a(borderEdge,0.5),y2);yAxis.yAxisPlotter.lineTo("border",borderEdge+tickWidth,y2);}
if(yAxis.priceFormatter){price=yAxis.priceFormatter(this,panel,price);}
else{price=this.formatYAxisPrice(price,panel,J3X.U2m,yAxis);}
var backgroundColor=yAxis.textBackground?this.containerColor:J3X.U2m,textXPosition=edgeOfAxis+tickWidth+J3X.r2l;if(J3X.n0a(position,t7m)){textXPosition=yAxis.left+J3X.r2l;if(yAxis.justifyRight)textXPosition=yAxis.left+yAxis.width+tickWidth-3;}
else{if(yAxis.justifyRight)textXPosition=edgeOfAxis+yAxis.width;}
yAxis.yAxisPlotter.addText(T3m,price,textXPosition,y2,backgroundColor,J3X.U2m,fontHeight);}
if(drawBorders){var b=Math.round(yAxis.bottom)+A6l;yAxis.yAxisPlotter.moveTo("border",borderEdge,yAxis.top);yAxis.yAxisPlotter.lineTo("border",borderEdge,b);yAxis.yAxisPlotter.draw(this.chart.context,K6m);}
}
this.plotYAxisGrid(panel);}
this.runAppend(x6l,arguments);}
;STXChart.prototype.drawYAxisPretty=function(panel,parameters){var q6l="ch",n2m="ea",R6l="rror",v6m="sserti",P9m="tty",d6m="sP",V8l="Ax",Z8m="wY";if(this.runPrepend("drawYAxis",arguments))return ;if(!parameters)parameters={}
;var yAxis=parameters.yAxis?parameters.yAxis:panel.yAxis;if(!parameters.noDraw&&!yAxis.noDraw){if(!yAxis.yAxisPlotter||!parameters.noChange){var chart=panel.chart,isAChart=(J3X.I0a(panel.name,chart.name)&&J3X.H0a(yAxis,panel.yAxis));if(!yAxis.priceTick)return ;if(isNaN(yAxis.high)||isNaN(yAxis.low))return ;var shadow=yAxis.shadow;if(parameters.range){shadow=J3X.P0a(parameters.range[1],parameters.range[0]);}
var verticalTicks=J3X.c0a(yAxis.height,yAxis.idealTickSizePixels);verticalTicks=Math.round(verticalTicks);var textStyle=yAxis.textStyle?yAxis.textStyle:"stx_yaxis";yAxis.yAxisPlotter=new STX.Plotter();yAxis.yAxisPlotter.newSeries("grid","stroke",this.canvasStyle("stx_grid"));yAxis.yAxisPlotter.newSeries("text","fill",this.colorOrStyle(textStyle));yAxis.yAxisPlotter.newSeries("border","stroke",this.canvasStyle("stx_grid_border"));var priceOffset=0,high=parameters.range?parameters.range[1]:yAxis.high,low=parameters.range?parameters.range[0]:yAxis.low,drawBorders=(J3X.x0a(yAxis.displayBorder,null)?chart.panel.yAxis.displayBorder:yAxis.displayBorder);if(J3X.Y0a(this.axisBorders,false))drawBorders=false;if(J3X.B0a(this.axisBorders,true))drawBorders=true;var edgeOfAxis,position=(J3X.Z0a(yAxis.position,null)?chart.panel.yAxis.position:yAxis.position);if(J3X.V0a(position,"left")){edgeOfAxis=yAxis.left+yAxis.width;}
else{edgeOfAxis=yAxis.left;}
var borderEdge=Math.round(edgeOfAxis)+0.5,tickWidth=drawBorders?3:0;if(J3X.K0a(position,"left"))tickWidth=drawBorders?-3:0;var fontHeight=this.getCanvasFontSize("stx_yaxis"),increments=yAxis.increments,l=increments.length,p=0,n=1,inc=0,closest=0,pow=0,diff=Number.MAX_VALUE;for(var z=0;J3X.Q3a(z,100);z++){inc=J3X.M3a(increments[p],Math.pow(10,pow));n=Math.floor(J3X.v3a(shadow,inc));var newDiff=Math.abs(J3X.E3a(verticalTicks,n));if(J3X.N3a(newDiff,diff)){break;}
else{diff=newDiff;}
if(J3X.b3a(n,verticalTicks)){closest=inc;break;}
else if(J3X.w3a(n,verticalTicks)){p++;if(J3X.o3a(p,l)){p=0;pow++;}
}
else{p--;if(J3X.T3a(p,0)){p=J3X.i3a(l,1);pow--;}
}
closest=inc;}
var lowLabel=J3X.h3a(Math.ceil(low/closest),closest),i=0;for(var zz=0;J3X.J3a(zz,100);zz++){var price=lowLabel+J3X.W3a(i,closest);if(J3X.C3a(price,high))break;i++;var y=this.pixelFromPrice(price,panel,yAxis),y2=Math.round(y)+0.5;if(J3X.t3a((y2+fontHeight/2),panel.bottom))continue;if(J3X.O3a((y2-fontHeight/2),panel.top))continue;if(yAxis.displayGridLines){yAxis.yAxisPlotter.moveTo("grid",panel.left,y2);yAxis.yAxisPlotter.lineTo((I8m+u9l),panel.right,y2);}
if(drawBorders){yAxis.yAxisPlotter.moveTo("border",J3X.U3a(borderEdge,0.5),y2);yAxis.yAxisPlotter.lineTo("border",borderEdge+tickWidth,y2);}
if(yAxis.priceFormatter){price=yAxis.priceFormatter(this,panel,price);}
else{price=this.formatYAxisPrice(price,panel,null,yAxis);}
var backgroundColor=yAxis.textBackground?this.containerColor:null,textXPosition=edgeOfAxis+tickWidth+3;if(J3X.X1a(position,"left")){textXPosition=yAxis.left+3;if(yAxis.justifyRight)textXPosition=yAxis.left+yAxis.width+tickWidth-3;}
else{if(yAxis.justifyRight)textXPosition=edgeOfAxis+yAxis.width;}
yAxis.yAxisPlotter.addText("text",price,textXPosition,y2,backgroundColor,null,fontHeight);}
if(J3X.d1a(zz,100)){console.log((t4l+d1m+G4l+Z8m+V8l+H9m+d6m+r9m+P9m+k4m+G4l+v6m+h0m+n5l+M5l+R6l+q7m+x5m+x5m+n5l+d1m+n2m+q6l+M5l+t4l+n5l+j2m+Q2m+Q2m));}
if(drawBorders){var b=Math.round(yAxis.bottom)+0.5;yAxis.yAxisPlotter.moveTo("border",borderEdge,yAxis.top);yAxis.yAxisPlotter.lineTo((I4l+w2m+d1m+t4l+M5l+d1m),borderEdge,b);yAxis.yAxisPlotter.draw(this.chart.context,"border");}
}
this.plotYAxisGrid(panel);}
this.runAppend("drawYAxis",arguments);}
;STXChart.prototype.plotYAxisGrid=function(panel){var e7m="plotYAxisGrid";if(this.runPrepend(e7m,arguments))return ;var context=this.chart.context;panel.yAxis.yAxisPlotter.draw(context,k8m);this.runAppend(e7m,arguments);}
;STXChart.prototype.plotYAxisText=function(panel){var S6l="ef",y5m="bet",k2m="ph",M3m="al",p9l="isText",O0m="otYAx",h5m="pl";if(this.runPrepend((h5m+O0m+p9l),arguments))return ;var arr=panel.yaxisLHS.concat(panel.yaxisRHS);for(var i=0;J3X.r1a(i,arr.length);i++){var yAxis=arr[i];if(!yAxis.yAxisPlotter)continue;if(yAxis.noDraw)continue;this.canvasFont("stx_yaxis");this.canvasColor("stx_yaxis");var context=this.chart.context;context.textBaseline="middle";if(yAxis.justifyRight)context.textAlign="right";else context.textAlign="left";var fontHeight=this.getCanvasFontSize("stx_yaxis");yAxis.yAxisPlotter.draw(context,(q3m+J3X.p6m+i3m));context.textBaseline=(M3m+k2m+G4l+y5m+H9m+s5l);context.textAlign=(J3X.S2m+S6l+i3m);}
this.runAppend("plotYAxisText",arguments);}
;STXChart.prototype.formatYAxisPrice=function(price,panel,requestedDecimalPlaces,yAxis){if(J3X.F1a(price,null)||typeof price=="undefined")return "";var yax=yAxis?yAxis:panel.yAxis,decimalPlaces=requestedDecimalPlaces;if(!decimalPlaces&&J3X.R1a(decimalPlaces,0))decimalPlaces=yax.printDecimalPlaces;if(!decimalPlaces&&J3X.j1a(decimalPlaces,0)){if(J3X.p1a(yax.priceTick,0.01))decimalPlaces=4;else if(J3X.u1a(yax.priceTick,0.1))decimalPlaces=2;else if(J3X.S1a(yax.priceTick,1))decimalPlaces=1;else decimalPlaces=0;}
if(J3X.L1a(panel.name,panel.chart.name)){if(J3X.g1a(yax.priceTick,100)){return STX.condenseInt(price);}
}
if(this.internationalizer){if(J3X.z1a(decimalPlaces,this.internationalizer.priceFormatters.length))decimalPlaces=J3X.G1a(this.internationalizer.priceFormatters.length,1);price=this.internationalizer.priceFormatters[decimalPlaces].format(price);}
else{price=price.toFixed(decimalPlaces);}
return price;}
;STXChart.prototype.formatPrice=function(price,panel){if(!price||typeof price=="undefined")return "";if(!panel)panel=this.currentPanel;if(!panel)panel=this.chart.panel;if(!panel)return price;var decimalPlaces=panel.decimalPlaces;if(!decimalPlaces&&J3X.m1a(decimalPlaces,0)){decimalPlaces=panel.chart.decimalPlaces;}
if(!decimalPlaces&&J3X.l1a(decimalPlaces,0)){return price;}
if(this.internationalizer){if(J3X.q1a(decimalPlaces,this.internationalizer.priceFormatters.length))decimalPlaces=J3X.D1a(this.internationalizer.priceFormatters.length,1);price=this.internationalizer.priceFormatters[decimalPlaces].format(price);}
else{price=price.toFixed(decimalPlaces);}
return price;}
;STXChart.prototype.createCrosshairs=function(){var e7l="createCrosshairs";if(this.runPrepend(e7l,arguments))return ;if(this.controls.crossX.onmousedown)return ;this.controls.crossY.onmousedown=function(e){if(!e)e=event;if(e.preventDefault)e.preventDefault();return Y4m;}
;this.controls.crossX.onmousedown=function(e){if(!e)e=event;if(e.preventDefault)e.preventDefault();return Y4m;}
;this.runAppend(e7l,arguments);}
;STXChart.prototype.determineMinMax=function(quotes,fields,sum,bypassTransform,length){var highValue=Number.MAX_VALUE*-1,lowValue=Number.MAX_VALUE,isTransform=false,l=quotes.length;if(length)l=length;for(var i=0;J3X.f1a(i,l);i++){var quote=quotes[i];if(!quote)continue;if(!bypassTransform){if(quote.transform){isTransform=true;quote=quote.transform;}
else if(isTransform)continue;}
var acc=0;for(var j=0;J3X.a2a(j,fields.length);j++){var f=quote[fields[j]];if(!f)continue;if(typeof (f)=="number")f=[f];for(var v=0;J3X.s2a(v,f.length);v++){var val=f[v];if(val||J3X.k2a(val,0)){if(sum){acc+=val;if(J3X.e2a(acc,highValue))highValue=acc;if(J3X.A2a(acc,lowValue))lowValue=acc;}
else{if(J3X.y2a(val,highValue))highValue=val;if(J3X.n2a(val,lowValue))lowValue=val;}
}
}
}
}
if(highValue==Number.MAX_VALUE*-1)highValue=0;if(J3X.I2a(lowValue,Number.MAX_VALUE))lowValue=0;return [lowValue,highValue];}
;STXChart.prototype.calculateYAxisRange=function(panel,yAxis,low,high){if(J3X.H2a(low,Number.MAX_VALUE)){low=0;high=0;}
var cheight=panel.height,newHigh=null,newLow=null;if(!yAxis.bottomOffset)yAxis.bottomOffset=this.xaxisHeight;yAxis.bottom=J3X.P2a(panel.bottom,yAxis.bottomOffset);yAxis.top=panel.top;yAxis.height=J3X.c2a(yAxis.bottom,yAxis.top);var verticalPad=Math.round(Math.abs(J3X.x2a(cheight,5)));if(J3X.Y2a(cheight-Math.abs(yAxis.scroll),verticalPad)){yAxis.scroll=(J3X.B2a(cheight,verticalPad))*(J3X.Z2a(yAxis.scroll,0)?-1:1);}
var pricePerPix=J3X.V2a((high-low),yAxis.height);if(low||J3X.K2a(low,0)){if(J3X.Q9a(high-low,0)){newHigh=J3X.M9a(high,2);newLow=0;}
else{if((this.layout.semiLog||J3X.v9a(this.layout.chartScale,"log"))&&newHigh){var logLow=J3X.E9a(Math.log(low),Math.LN10),logHigh=J3X.N9a(Math.log(high),Math.LN10);newHigh=Math.pow(10,logHigh);newLow=Math.pow(10,logLow);}
else{newHigh=high;newLow=low;}
}
yAxis.high=newHigh;yAxis.low=newLow;}
if(yAxis.max||J3X.b9a(yAxis.max,0))yAxis.high=yAxis.max;if(yAxis.min||J3X.w9a(yAxis.min,0))yAxis.low=yAxis.min;yAxis.shadow=J3X.o9a(yAxis.high,yAxis.low);if(J3X.T9a(panel.chart.name,panel.name)&&J3X.i9a(panel.yAxis,yAxis)){var isLogScale=(this.layout.semiLog||J3X.h9a(this.layout.chartScale,(J3X.S2m+w2m+f9m)));if(panel.chart.isComparison)isLogScale=false;if(J3X.J9a(yAxis.semiLog,isLogScale)){this.clearPixelCache();yAxis.semiLog=isLogScale;}
}
}
;STXChart.prototype.renderYAxis=function(chart){if(this.runPrepend("renderYAxis",arguments))return ;var panel=chart.panel,arr=panel.yaxisRHS.concat(panel.yaxisLHS),i;for(i=0;J3X.W9a(i,arr.length);i++){var yAxis=arr[i],low=null,high=null;if(J3X.C9a(panel.yAxis,yAxis)){low=chart.lowValue;high=chart.highValue;}
this.calculateYAxisRange(panel,yAxis,low,high);}
var parameters={}
;for(i=0;J3X.t9a(i,arr.length);i++){parameters.yAxis=arr[i];this.createYAxis(panel,parameters);this.drawYAxis(panel,parameters);}
this.runAppend("renderYAxis",arguments);}
;STXChart.prototype.initializeDisplay=function(chart){var N5m="Hi",W9l="se";if(this.runPrepend("initializeDisplay",arguments))return ;var fields=[];for(var field in chart.series){if(chart.series[field].parameters.shareYAxis)fields.push(field);}
var panel=chart.panel=this.panels[chart.name],minMax,length=null,ticksOnScreen=Math.floor(J3X.O9a((chart.width-this.micropixels),this.layout.candleWidth));if(J3X.U9a(chart.scroll,chart.maxTicks)&&J3X.X7a(chart.maxTicks,ticksOnScreen+1))length=J3X.d7a(chart.dataSegment.length,1);if(!STXChart.chartShowsHighs(this.layout.chartType)){fields.push("Close");minMax=this.determineMinMax(chart.dataSegment,fields,null,null,length);if(J3X.r7a(this.layout.chartType,"baseline_delta")){var base=chart.baseline.actualLevel;if(chart.transformFunc)base=chart.transformFunc(this,chart,base);var diff=Math.max(J3X.F7a(base,minMax[0]),J3X.R7a(minMax[1],base));if(this.repositioningBaseline){minMax=[chart.lowValue,chart.highValue];}
else{minMax[0]=J3X.j7a(base,diff);minMax[1]=base+diff;}
}
}
else{fields.push((B8m+J3X.S2m+w2m+W9l),(N5m+f9m+j9m),"Low");minMax=this.determineMinMax(chart.dataSegment,fields,null,null,length);}
chart.lowValue=minMax[0];chart.highValue=minMax[1];this.runAppend("initializeDisplay",arguments);}
;STXChart.prototype.computePosition=function(x,offset){if(typeof offset==L2l)offset=J3X.N2l;var position=J3X.p7a(x,this.layout.candleWidth)+offset+this.micropixels;return position;}
;STXChart.prototype.computeColor=function(open,close){if(J3X.u7a(open,close))return D1l;if(J3X.S7a(open,close))return V2l;return O2m;}
;STXChart.prototype.computeLength=function(high,low){var A7l=((148.,1.28E2)<=144?(0x45,2908589):(102,0x48)),g2l=8044449,o6m=1326798906,W9m=1501378496;var o1l=-W9m,I1l=o6m,u1l=J3X.k2l;for(var n1l=J3X.e2l;J3X.z3l.J3l(n1l.toString(),n1l.toString().length,g2l)!==o1l;n1l++){this.setCandleWidth(candleWidth,chart);STX.appendClassName(panel.solo,M2m);context.lineTo(xend,cache.close);this.chart.context.save();u1l+=J3X.k2l;}
if(J3X.z3l.J3l(u1l.toString(),u1l.toString().length,A7l)!==I1l){seriesPlotter.newSeries(c2l,D8l,parameters.fillStyle,parameters.fillOpacity);}
var h=this.pixelFromPrice(high),l=this.pixelFromPrice(low);return J3X.L7a(l,h);}
;STXChart.prototype.setSeriesRenderer=function(renderer){var params=renderer.params;if(this.chart.seriesRenderers[renderer.params.name])return this.chart.seriesRenderers[renderer.params.name];if(params.yAxis){this.addYAxis(this.panels[params.panel],params.yAxis);}
renderer.stx=this;this.chart.seriesRenderers[renderer.params.name]=renderer;return renderer;}
;STXChart.prototype.removeSeriesRenderer=function(renderer){for(var r in this.chart.seriesRenderers){if(J3X.g7a(renderer.params.name,this.chart.seriesRenderers[r].params.name)){var toDelete=this.chart.seriesRenderers[renderer.params.name],yAxis=toDelete.params.yAxis,panel=this.panels[toDelete.params.panel];delete  this.chart.seriesRenderers[renderer.params.name];this.deleteYAxisIfUnused(panel,yAxis);return ;}
}
}
;STXChart.prototype.getSeriesRenderer=function(name){return this.chart.seriesRenderers[name];}
;STXChart.prototype.drawHistogram=function(params,seriesParams){var X0G="cke",j9l="tom",f6m="bot";if(!seriesParams||!seriesParams.length)return ;var panelName=params.panel;if(!panelName)panelName="chart";var c=this.panels[panelName];if(!c)return ;var yAxis=params.yAxis?params.yAxis:c.yAxis,b=Math.floor(yAxis.bottom)+0.5,t=Math.floor(yAxis.top)+0.5,type=params.type;if(J3X.z7a(type,"histogram"))type=params.subtype;var quotes=this.chart.dataSegment,bordersOn=false;this.getDefaultColor();var sp;for(sp=0;J3X.G7a(sp,seriesParams.length);sp++){bordersOn|=(seriesParams[sp].border_color_up&&!STX.isTransparent(seriesParams[sp].border_color_up));bordersOn|=(seriesParams[sp].border_color_down&&!STX.isTransparent(seriesParams[sp].border_color_down));}
if(!params.name)params.name="Data";var multiplier=yAxis.multiplier;if(!params.heightPercentage)params.heightPercentage=0.7;if(!params.widthFactor)params.widthFactor=0.8;if(!params.bindToYAxis){var histMax=0;if(!histMax){for(var i=0;J3X.m7a(i,this.chart.maxTicks);i++){var prices=quotes[i];if(!prices)continue;var total=0;for(sp=0;J3X.l7a(sp,seriesParams.length);sp++){if(prices[seriesParams[sp].field]){if(J3X.q7a(params.subtype,"stacked"))total+=prices[seriesParams[sp].field];else total=Math.max(total,prices[seriesParams[sp].field]);}
}
if(J3X.D7a(total,histMax))histMax=total;}
if(J3X.f7a(histMax,0)){this.watermark(panelName,"center",(f6m+j9l),this.translateIf(params.name+" Not Available"));return ;}
}
multiplier=J3X.a8a((b-t),params.heightPercentage,histMax);}
var offset=0.5;if(J3X.r8a(this.layout.candleWidth,1)||!bordersOn)offset=0;this.startClip(panelName);var context=this.chart.context,shaveOff=Math.max(0,J3X.F8a((1-params.widthFactor),this.layout.candleWidth,2)),tops={}
,bottoms={}
,self=this,candleWidth=1;function drawBars(field,color,opacity,isBorder,isUp,shift,candleWidth){if(!opacity)opacity=1;if(STX.isIE8)context.globalAlpha=0.5;else context.globalAlpha=opacity;context.beginPath();var prevTop=b+0.5,farLeft=Math.floor(J3X.N8a(self.pixelFromBar(0,c.chart),self.layout.candleWidth/2)),prevRight=farLeft;for(var i=0;J3X.b8a(i,quotes.length);i++){var bottom=bottoms[i];if(!bottom)bottom=b;if(J3X.w8a(i,0))prevTop=bottom;var quote=quotes[i];if(!quote||!quote[field]){prevTop=bottom;prevRight+=self.layout.candleWidth;continue;}
var y=J3X.o8a(quote[field],multiplier);if(isNaN(y))continue;var myCandleWidth=self.layout.candleWidth;if(quote.candleWidth){myCandleWidth=quote.candleWidth;if(J3X.T8a(i,0))farLeft=prevRight=Math.floor(J3X.i8a(self.pixelFromBar(0,c.chart),quote.candleWidth/2));}
var top=Math.min(Math.floor(J3X.h8a(bottom,y))+0.5,bottom);if(isUp){if(J3X.J8a(quote.Close,quote.iqPrevClose)){prevTop=top;prevRight+=myCandleWidth;continue;}
}
else{if(J3X.W8a(quote.Close,quote.iqPrevClose)){prevTop=top;prevRight+=myCandleWidth;continue;}
}
var x0,x1,variableWidthRatio=J3X.C8a(myCandleWidth,self.layout.candleWidth),start=prevRight+J3X.t8a((shaveOff+shift*candleWidth),variableWidthRatio);x0=Math.round(start)+(isBorder?0:offset);x1=J3X.O8a(Math.round(start+candleWidth*variableWidthRatio),(isBorder?0:offset));if(J3X.U8a(x1-x0,2))x1=x0+1;if(isBorder)roundPixel=0;else roundPixel=0.5;if(J3X.X4a(x0%1,roundPixel))x0+=0.5;if(J3X.d4a(x1%1,roundPixel))x1+=0.5;context.moveTo(x0,bottom);if(J3X.r4a(b,bottom)){context.lineTo(x1,bottom);}
else{context.moveTo(x1,bottom);if(isBorder&&!shaveOff){if(bottoms[i+1])context.moveTo(x1,Math.max(top,Math.min(bottom,bottoms[i+1])));}
}
context.lineTo(x1,top);context.lineTo(x0,top);if(isBorder&&shift){if(J3X.F4a(tops[i],top)||J3X.R4a(i,0))context.lineTo(x0,Math.min(bottom,tops[i]));}
else if(isBorder&&!shaveOff&&J3X.j4a(type,"clustered")){if(J3X.p4a(i,0)&&tops[J3X.u4a(i,1)]&&J3X.S4a(tops[i-1],top))context.lineTo(x0,Math.min(bottom,tops[J3X.L4a(i,1)]));}
else if(isBorder&&!shaveOff){if(J3X.g4a(prevTop,top)||J3X.z4a(i,0))context.lineTo(x0,Math.min(bottom,prevTop));}
else{context.lineTo(x0,bottom);}
prevTop=top;prevRight+=myCandleWidth;if(J3X.G4a(type,"clustered")||isBorder)tops[i]=top;}
if(!color)color="auto";if(isBorder){context.strokeStyle=J3X.m4a(color,"auto")?self.defaultColor:color;context.stroke();}
else{context.fillStyle=J3X.l4a(color,"auto")?self.defaultColor:color;context.fill();}
context.closePath();}
for(sp=0;J3X.q4a(sp,seriesParams.length);sp++){var param=seriesParams[sp];candleWidth=J3X.D4a(this.layout.candleWidth,params.widthFactor);var shift=0;if(J3X.f4a(type,"clustered")){shift=sp;candleWidth/=seriesParams.length;}
drawBars(param.field,param.fill_color_up,param.opacity_up,null,true,shift,candleWidth);drawBars(param.field,param.fill_color_down,param.opacity_down,null,null,shift,candleWidth);if(J3X.a5a(this.layout.candleWidth,2)&&bordersOn){drawBars(param.field,param.border_color_up,param.opacity_up,true,true,shift,candleWidth);drawBars(param.field,param.border_color_down,param.opacity_down,true,null,shift,candleWidth);}
if(J3X.s5a(type,(w1m+i3m+G4l+X0G+t4l)))bottoms=STX.shallowClone(tops);}
context.globalAlpha=1;this.endClip();}
;STXChart.prototype.drawHeatmap=function(params,seriesParams){if(!seriesParams||!seriesParams.length)return ;var panelName=params.panel;if(!panelName)panelName="chart";var c=this.panels[panelName];if(!c)return ;var yAxis=params.yAxis?params.yAxis:c.yAxis,b=Math.floor(yAxis.bottom)+0.5,t=Math.floor(yAxis.top)+0.5,quotes=this.chart.dataSegment;this.getDefaultColor();if(!params.name)params.name="Data";if(!params.widthFactor)params.widthFactor=1;var offset=0.5;if(J3X.k5a(c.chart.tmpWidth,1))offset=0;var height=null,halfHeight=null,self=this,lineWidth=null;function drawCells(field,color,isBorder,widthFactor,myoffset){context.beginPath();context.fillStyle=color;context.strokeStyle=color;var t=yAxis.top,b=yAxis.bottom,myCandleWidth=J3X.e5a(self.layout.candleWidth,widthFactor),xc=Math.floor(J3X.A5a(self.pixelFromBar(0,c.chart),self.layout.candleWidth)),x0,x1;for(var x=0;J3X.y5a(x,quotes.length);x++){var quote=quotes[x];if(!quote)continue;if(quote.candleWidth){if(J3X.n5a(x,0)){xc+=self.layout.candleWidth;}
else{xc+=J3X.I5a((quote.candleWidth+myCandleWidth/widthFactor),2);}
myCandleWidth=J3X.H5a(quote.candleWidth,widthFactor);}
else{xc+=self.layout.candleWidth;}
x0=J3X.P5a(xc,myCandleWidth/2,myoffset);x1=xc+J3X.z5a(myCandleWidth,2)-myoffset;if(J3X.G5a(x1-x0,2))x1=x0+1;if(quote.transform)quote=quote.transform;var cellValues=quote[field];if(!cellValues)continue;if(typeof cellValues=="number")cellValues=[cellValues];for(var i=0;J3X.m5a(i,cellValues.length);i++){var v=self.pixelFromPrice(cellValues[i],c,yAxis);if(!lineWidth){var v1=self.pixelFromPrice(J3X.l5a(cellValues[i],params.height),c,yAxis);context.lineWidth=1;height=J3X.q5a(v1,v);halfHeight=J3X.D5a(height,2);lineWidth=context.lineWidth;}
if(isBorder){var tc=v+halfHeight,bc=J3X.f5a(v,halfHeight);context.moveTo(x0,tc);context.lineTo(x0,bc);context.lineTo(x1,bc);context.lineTo(x1,tc);context.lineTo(x0,tc);}
else{context.fillRect(x0,J3X.a6a(v,halfHeight),J3X.s6a(x1,x0),height);}
}
}
if(isBorder)context.stroke();context.closePath();}
this.startClip(panelName);var context=this.chart.context;context.globalAlpha=params.opacity;for(var sp=0;J3X.k6a(sp,seriesParams.length);sp++){var param=seriesParams[sp];drawCells(param.field,param.color,null,params.widthFactor,param.border_color?offset:-offset/4);if(param.border_color&&J3X.e6a(this.layout.candleWidth,2)){drawCells(param.field,param.border_color,true,params.widthFactor,offset);}
}
context.lineWidth=1;context.globalAlpha=1;this.endClip();}
;STXChart.prototype.startClip=function(panelName,allowYAxis){if(!panelName)panelName="chart";var panel=this.panels[panelName],yAxis=panel.yAxis;this.chart.context.save();this.chart.context.beginPath();var left=panel.left,width=panel.width;if(allowYAxis){left=0;width=this.width;}
this.chart.context.rect(left,panel.top,width,yAxis.height);this.chart.context.clip();}
;STXChart.prototype.endClip=function(){this.chart.context.restore();}
;STXChart.prototype.drawCandlesHighPerformance=function(panel,fillColor,borderColor,condition){var chart=panel.chart,quotes=chart.dataSegment,context=this.chart.context,t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,length,borderOffset=0;if(borderColor&&!STX.isTransparent(borderColor))borderOffset=0.5;var leftTick=J3X.A6a(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks;context.beginPath();context.fillStyle=fillColor;var yAxis=panel.yAxis,whitespace=J3X.y6a(chart.tmpWidth,2),candleWidth=this.layout.candleWidth,xbase=J3X.n6a(panel.left,0.5*candleWidth,this.micropixels,1);for(var x=0;J3X.T6a(x,quotes.length);x++){xbase+=J3X.i6a(candleWidth,2);candleWidth=this.layout.candleWidth;xbase+=J3X.h6a(candleWidth,2);var quote=quotes[x];if(!quote)continue;if(quote.projection)continue;if(quote.candleWidth){xbase+=J3X.J6a((quote.candleWidth-candleWidth),2);candleWidth=quote.candleWidth;if(J3X.W6a(this.layout.chartType,"volume_candle"))whitespace=J3X.C6a(candleWidth,2);}
if(J3X.t6a(quote.Open,quote.Close))continue;if(J3X.O6a(condition,STXChart.CANDLEUP)&&J3X.U6a(quote.Open,quote.Close))continue;if(J3X.X0o(condition,STXChart.CANDLEDOWN)&&J3X.d0o(quote.Open,quote.Close))continue;if(J3X.r0o(condition,STXChart.CLOSEUP)&&J3X.F0o(quote.Close,quote.iqPrevClose))continue;if(J3X.R0o(condition,STXChart.CLOSEDOWN)&&J3X.j0o(quote.Close,quote.iqPrevClose))continue;if(J3X.p0o(condition,STXChart.CLOSEEVEN)&&J3X.u0o(quote.Close,quote.iqPrevClose))continue;if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(J3X.S0o(tick,panel.cacheLeft)||J3X.L0o(tick,panel.cacheRight)||!cache.open){var o=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(J3X.g0o((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top),c=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(J3X.z0o((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);top=Math.floor(Math.min(o,c))+borderOffset;bottom=Math.max(o,c);length=Math.floor(J3X.G0o(bottom,top));if(J3X.m0o(top,t)){if(J3X.l0o(top+length,t)){cache.open=top;cache.close=top;continue;}
length-=J3X.q0o(t,top);top=t;}
if(J3X.D0o(top+length,b)){length-=(top+length-b);}
length=Math.max(length,2);cache.open=top;cache.close=cache.open+length;}
if(J3X.f0o(cache.open,b))continue;if(J3X.a3o(cache.close,t))continue;flr_xbase=Math.floor(xbase)+0.5;var xstart=Math.floor(J3X.s3o(flr_xbase,whitespace))+borderOffset,xend=J3X.k3o(Math.round(flr_xbase+whitespace),borderOffset);if(J3X.e3o(quote.Open,quote.Close)){context.moveTo(xstart,cache.open);context.lineTo(xend,cache.open);context.lineTo(xend,cache.close);context.lineTo(xstart,cache.close);context.lineTo(xstart,cache.open);}
}
context.fill();if(borderOffset){context.lineWidth=1;context.strokeStyle=borderColor;context.stroke();}
}
;STXChart.prototype.drawCandles=function(panel,colorFunction,isOutline){var chart=panel.chart;if(!chart){chart=panel;panel=panel.chart;}
var quotes=chart.dataSegment,context=this.chart.context,t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,length,borderColor="transparent",fillColor="transparent",borderOffset=0;if(!STX.isTransparent(borderColor))borderOffset=0.5;var leftTick=J3X.A3o(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks,yAxis=panel.yAxis,whitespace=J3X.y3o(chart.tmpWidth,2),candleWidth=this.layout.candleWidth,xbase=J3X.n3o(panel.left,0.5*candleWidth,this.micropixels,1);for(var x=0;J3X.T3o(x,quotes.length);x++){xbase+=J3X.i3o(candleWidth,2);candleWidth=this.layout.candleWidth;xbase+=J3X.h3o(candleWidth,2);var quote=quotes[x];if(!quote)continue;if(quote.projection)continue;if(quote.candleWidth){xbase+=J3X.J3o((quote.candleWidth-candleWidth),2);candleWidth=quote.candleWidth;if(J3X.W3o(this.layout.chartType,"volume_candle"))whitespace=J3X.C3o(candleWidth,2);}
if(!quote.Open&&J3X.t3o(quote.Open,0))continue;if(J3X.O3o(quote.Open,quote.Close))continue;var myColor=colorFunction(this,quote,isOutline?"outline":"solid");if(!myColor)continue;if(isOutline)borderColor=myColor;else fillColor=myColor;context.beginPath();context.fillStyle=fillColor;if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(J3X.U3o(tick,panel.cacheLeft)||J3X.X1o(tick,panel.cacheRight)||!cache.open){var o=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(J3X.d1o((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top),c=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(J3X.r1o((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);top=Math.floor(Math.min(o,c))+borderOffset;bottom=Math.max(o,c);length=Math.floor(J3X.F1o(bottom,top));if(J3X.R1o(top,t)){if(J3X.j1o(top+length,t)){cache.open=top;cache.close=top;continue;}
length-=J3X.p1o(t,top);top=t;}
if(J3X.u1o(top+length,b)){length-=(top+length-b);}
length=Math.max(length,2);cache.open=top;cache.close=cache.open+length;}
if(J3X.S1o(cache.open,b))continue;if(J3X.L1o(cache.close,t))continue;flr_xbase=Math.floor(xbase)+0.5;var xstart=Math.floor(J3X.g1o(flr_xbase,whitespace))+borderOffset,xend=J3X.z1o(Math.round(flr_xbase+whitespace),borderOffset);if(J3X.G1o(quote.Open,quote.Close)){context.moveTo(xstart,cache.open);context.lineTo(xend,cache.open);context.lineTo(xend,cache.close);context.lineTo(xstart,cache.close);context.lineTo(xstart,cache.open);}
if(J3X.m1o(fillColor,"transparent"))context.fill();if(borderOffset){context.lineWidth=1;context.strokeStyle=borderColor;context.stroke();}
}
}
;STXChart.prototype.drawShadowsHighPerformance=function(panel,style,condition){var chart=panel.chart,quotes=chart.dataSegment,context=this.chart.context;context.lineWidth=1;var t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,left,leftTick=J3X.l1o(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks;context.beginPath();var yAxis=panel.yAxis,candleWidth=this.layout.candleWidth,xbase=J3X.q1o(panel.left,0.5*candleWidth,this.micropixels,1);for(var x=0;J3X.K1o(x,quotes.length);x++){xbase+=J3X.Q2o(candleWidth,2);candleWidth=this.layout.candleWidth;xbase+=J3X.M2o(candleWidth,2);var quote=quotes[x];if(!quote)continue;if(quote.projection)continue;if(quote.candleWidth){xbase+=J3X.v2o((quote.candleWidth-candleWidth),2);candleWidth=quote.candleWidth;}
if(condition){if(J3X.E2o(condition,STXChart.CANDLEUP)&&J3X.N2o(quote.Open,quote.Close))continue;else if(J3X.b2o(condition,STXChart.CANDLEDOWN)&&J3X.w2o(quote.Open,quote.Close))continue;else if(J3X.o2o(condition,STXChart.CLOSEUP)&&J3X.T2o(quote.Close,quote.iqPrevClose))continue;else if(J3X.i2o(condition,STXChart.CLOSEDOWN)&&J3X.h2o(quote.Close,quote.iqPrevClose))continue;else if(J3X.J2o(condition,STXChart.CLOSEEVEN)&&J3X.W2o(quote.Close,quote.iqPrevClose))continue;}
if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(J3X.C2o(tick,panel.cacheLeft)||J3X.t2o(tick,panel.cacheRight)||!cache.top){top=(yAxis.semiLog?this.pixelFromPrice(quote.High,panel):(J3X.O2o((yAxis.high-quote.High),yAxis.multiplier))+yAxis.top);bottom=(yAxis.semiLog?this.pixelFromPrice(quote.Low,panel):(J3X.U2o((yAxis.high-quote.Low),yAxis.multiplier))+yAxis.top);var length=J3X.X9o(bottom,top);if(J3X.d9o(top,t)){if(J3X.r9o(top+length,t)){cache.top=top;cache.bottom=top;continue;}
length-=J3X.F9o(t,top);top=t;}
if(J3X.R9o(top+length,b)){length-=(top+length-b);}
cache.top=top;cache.bottom=cache.top+length;}
if(J3X.j9o(cache.top,b))continue;if(J3X.p9o(cache.bottom,t))continue;var xx=Math.floor(xbase)+0.5;context.moveTo(xx,cache.top);context.lineTo(xx,cache.bottom);if(J3X.u9o(quote.Open,quote.Close)){var offset=this.offset;if(J3X.S9o(this.layout.chartType,"volume_candle")){offset=J3X.L9o(candleWidth,2);}
var x0=J3X.g9o(xx,offset),x1=xx+offset,o=Math.floor(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(J3X.z9o((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top)+0.5;if(J3X.G9o(o,b)&&J3X.m9o(o,t)){context.moveTo(x0,o);context.lineTo(x1,o);}
}
}
this.canvasColor(style);context.stroke();}
;STXChart.prototype.drawShadows=function(panel,colorFunction){var chart=panel.chart;if(!chart){chart=panel;panel=panel.chart;}
var quotes=chart.dataSegment,context=this.chart.context;context.lineWidth=1;var t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,left,leftTick=J3X.l9o(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks,yAxis=panel.yAxis,candleWidth=this.layout.candleWidth,xbase=J3X.q9o(panel.left,0.5*candleWidth,this.micropixels,1);for(var x=0;J3X.K9o(x,quotes.length);x++){xbase+=J3X.Q7o(candleWidth,2);candleWidth=this.layout.candleWidth;xbase+=J3X.M7o(candleWidth,2);var quote=quotes[x];if(!quote)continue;if(quote.projection)continue;if(quote.candleWidth){xbase+=J3X.v7o((quote.candleWidth-candleWidth),2);candleWidth=quote.candleWidth;}
var color=colorFunction(this,quote,"shadow");if(!color)continue;if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(J3X.E7o(tick,panel.cacheLeft)||J3X.N7o(tick,panel.cacheRight)||!cache.top){top=(yAxis.semiLog?this.pixelFromPrice(quote.High,panel):(J3X.b7o((yAxis.high-quote.High),yAxis.multiplier))+yAxis.top);bottom=(yAxis.semiLog?this.pixelFromPrice(quote.Low,panel):(J3X.w7o((yAxis.high-quote.Low),yAxis.multiplier))+yAxis.top);var length=J3X.o7o(bottom,top);if(J3X.T7o(top,t)){if(J3X.i7o(top+length,t)){cache.top=top;cache.bottom=top;continue;}
length-=J3X.h7o(t,top);top=t;}
if(J3X.J7o(top+length,b)){length-=(top+length-b);}
cache.top=top;cache.bottom=cache.top+length;}
if(J3X.W7o(cache.top,b))continue;if(J3X.C7o(cache.bottom,t))continue;var xx=Math.floor(xbase)+0.5;context.beginPath();context.moveTo(xx,cache.top);context.lineTo(xx,cache.bottom);if(J3X.t7o(quote.Open,quote.Close)||(!quote.Open&&J3X.O7o(quote.Open,0))){var offset=this.offset;if(J3X.U7o(this.layout.chartType,"volume_candle")){offset=J3X.X8o(candleWidth,2);}
var x0=J3X.d8o(xx,offset),x1=xx+offset,o=Math.floor((yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(J3X.r8o((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top))+0.5;if(J3X.F8o(o,b)&&J3X.R8o(o,t)){context.moveTo(x0,o);context.lineTo(x1,o);}
}
context.strokeStyle=color;context.stroke();}
}
;STXChart.prototype.scatter=function(panel){var G9l="at",chart=panel.chart,quotes=chart.dataSegment,context=this.chart.context;context.beginPath();context.lineWidth=4;var t=panel.yAxis.top,b=panel.yAxis.bottom,xbase=J3X.j8o(panel.left,0.5*this.layout.candleWidth,this.micropixels,1);for(var x=0;J3X.n8o(x,quotes.length);x++){xbase+=this.layout.candleWidth;var quote=quotes[x];if(!quote)continue;if(!quote.projection){if(quote.transform)quote=quote.transform;var scatter=[quote.Close];if(J3X.I8o("Scatter",quote))scatter=quote.Scatter;for(var i=0;J3X.H8o(i,scatter.length);i++){var top=this.pixelFromPrice(scatter[i],panel);if(J3X.P8o(top,t))continue;if(J3X.c8o(top,b))continue;context.moveTo(J3X.x8o(xbase,2),top);context.lineTo(xbase+2,top);}
}
}
this.canvasColor((B4l+J3X.p6m+f5l+w1m+s5l+G9l+q3m+d1m+f5l+T4l));context.stroke();context.closePath();context.lineWidth=1;}
;STXChart.prototype.drawKagiSquareWave=function(panel,upStyleName,downStyleName){var chart=panel.chart;this.startClip(panel.name);var quotes=chart.dataSegment,context=chart.context,upStyle=this.canvasStyle(upStyleName),downStyle=this.canvasStyle(downStyleName);this.canvasColor(upStyleName);var upColor=context.strokeStyle;this.canvasColor(downStyleName);var downColor=context.strokeStyle,upWidth=1;if(upStyle.width&&J3X.Y8o(parseInt(upStyle.width,10),25)){upWidth=Math.max(1,STX.stripPX(upStyle.width));}
var downWidth=1;if(downStyle.width&&J3X.B8o(parseInt(downStyle.width,10),25)){downWidth=Math.max(1,STX.stripPX(downStyle.width));}
context.beginPath();var leftTick=J3X.Z8o(chart.dataSet.length,chart.scroll),yAxis=panel.yAxis,first=true,previousOpen=null,lastClose=null,trend=null,xbase=J3X.V8o(panel.left,0.5*this.layout.candleWidth,this.micropixels,1);for(var x=0;J3X.X4o(x,quotes.length);x++){xbase+=this.layout.candleWidth;var quote=quotes[x];if(!quote)continue;if(quote.projection)break;if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(J3X.d4o(tick,panel.cacheLeft)||J3X.r4o(tick,panel.cacheRight)||!cache.open){cache.open=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(J3X.F4o((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top);cache.close=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(J3X.R4o((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);}
lastClose=cache.close;if(first){context.moveTo(Math.floor(xbase),cache.open);previousOpen=cache.open;if(J3X.j4o(cache.close,cache.open))trend=1;else trend=-1;first=false;}
if(trend!=-1&&J3X.p4o(cache.close,previousOpen)&&J3X.u4o(previousOpen,cache.open)){context.lineTo(Math.floor(xbase),previousOpen);context.strokeStyle=downColor;context.lineWidth=downWidth;context.stroke();context.closePath();context.beginPath();trend=-1;context.moveTo(Math.floor(xbase),previousOpen);}
else if(J3X.S4o(trend,1)&&J3X.L4o(cache.close,previousOpen)&&J3X.g4o(previousOpen,cache.open)){context.lineTo(Math.floor(xbase),previousOpen);context.strokeStyle=upColor;context.lineWidth=upWidth;context.stroke();context.closePath();context.beginPath();trend=1;context.moveTo(Math.floor(xbase),previousOpen);}
context.lineTo(Math.floor(xbase),cache.close);if(J3X.z4o(x+1,quotes.length)){context.lineTo(Math.floor(xbase+this.layout.candleWidth),cache.close);previousOpen=cache.open;}
}
if(trend==-1||(J3X.G4o(trend,null)&&J3X.m4o(lastClose,previousOpen))){context.strokeStyle=upColor;context.lineWidth=upWidth;}
else{context.strokeStyle=downColor;context.lineWidth=downWidth;}
context.stroke();context.closePath();this.endClip();context.lineWidth=1;}
;STXChart.prototype.drawPointFigureChart=function(panel,style,condition){var chart=panel.chart;this.startClip(panel.name);var quotes=chart.dataSegment,context=chart.context;this.canvasColor(style);var pfstyle=this.canvasStyle(style),paddingTop=parseInt(pfstyle.paddingTop,10),paddingBottom=parseInt(pfstyle.paddingBottom,10),paddingLeft=parseInt(pfstyle.paddingLeft,10),paddingRight=parseInt(pfstyle.paddingRight,10);if(pfstyle.width&&J3X.l4o(parseInt(pfstyle.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(pfstyle.width));}
else{context.lineWidth=2;}
context.beginPath();if(!this.chart.pandf)this.chart.pandf={"box":1,"reversal":3}
;var box=this.chart.pandf.box,leftTick=J3X.q4o(chart.dataSet.length,chart.scroll),yAxis=panel.yAxis,boxes,height,start,candleWidth=this.layout.candleWidth,xbase=J3X.D4o(panel.left,candleWidth,this.micropixels,1);for(var x=0;J3X.Q5o(x,quotes.length);x++){xbase+=candleWidth;var quote=quotes[x];if(!quote)continue;if(quote.projection)break;if(quote.candleWidth)candleWidth=quote.candleWidth;if(quote.transform)quote=quote.transform;if(J3X.M5o(condition,"X")&&J3X.v5o(quote.Open,quote.Close))continue;else if(J3X.E5o(condition,"O")&&J3X.N5o(quote.Open,quote.Close))continue;var cache=quote.cache,tick=leftTick+x;if(J3X.b5o(tick,panel.cacheLeft)||J3X.w5o(tick,panel.cacheRight)||!cache.open){cache.open=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(J3X.o5o((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top);cache.close=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(J3X.T5o((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);}
var xxl=Math.round(xbase),xxr=Math.round(xbase+candleWidth);boxes=Math.abs(Math.round(J3X.i5o((quote.Close-quote.Open),box)));height=Math.abs(J3X.h5o((cache.open-cache.close),boxes));var voffset=J3X.J5o(height,2);start=cache.open;for(;J3X.W5o(boxes,0);boxes--){if(J3X.C5o(condition,"X")){context.moveTo(xxl+paddingLeft,J3X.t5o(start,paddingBottom,voffset));context.lineTo(J3X.V5o(xxr,paddingRight),J3X.K5o(start,height,paddingTop,voffset));context.moveTo(xxl+paddingLeft,J3X.d6o(start,height,paddingTop,voffset));context.lineTo(J3X.k6o(xxr,paddingRight),J3X.e6o(start,paddingBottom,voffset));start-=height;}
else if(J3X.j6o(condition,"O")){context.moveTo(J3X.p6o((xxl+xxr),2),start+paddingTop-voffset);context.bezierCurveTo(xxr+paddingRight,start+paddingTop-voffset,xxr+paddingRight,start+height-paddingBottom-voffset,J3X.u6o((xxl+xxr),2),start+height-paddingBottom-voffset);context.bezierCurveTo(J3X.S6o(xxl,paddingLeft),start+height-paddingBottom-voffset,J3X.L6o(xxl,paddingLeft),start+paddingTop-voffset,J3X.g6o((xxl+xxr),2),start+paddingTop-voffset);start+=height;}
}
}
context.stroke();this.endClip();context.lineWidth=1;}
;STXChart.prototype.drawBarChartHighPerformance=function(panel,style,condition){var chart=panel.chart,quotes=chart.dataSegment,context=chart.context,c=this.canvasStyle(style);if(c.width&&J3X.z6o(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
context.beginPath();var t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,length,leftTick=J3X.G6o(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks,yAxis=panel.yAxis,xbase=J3X.m6o(panel.left,0.5*this.layout.candleWidth,this.micropixels,1),hlen=J3X.Z6o(chart.tmpWidth,2),voffset=J3X.V6o(context.lineWidth,2);for(var x=0;J3X.K6o(x,quotes.length);x++){xbase+=this.layout.candleWidth;var quote=quotes[x];if(!quote)continue;if(quote.projection)break;if(condition){if(J3X.Q0J(condition,STXChart.CLOSEUP)&&J3X.M0J(quote.Close,quote.iqPrevClose))continue;else if(J3X.v0J(condition,STXChart.CLOSEDOWN)&&J3X.E0J(quote.Close,quote.iqPrevClose))continue;else if(J3X.N0J(condition,STXChart.CLOSEEVEN)&&J3X.b0J(quote.Close,quote.iqPrevClose))continue;}
if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(J3X.w0J(tick,panel.cacheLeft)||J3X.o0J(tick,panel.cacheRight)||!cache.top){top=(yAxis.semiLog?this.pixelFromPrice(quote.High,panel):(J3X.T0J((yAxis.high-quote.High),yAxis.multiplier))+yAxis.top);bottom=(yAxis.semiLog?this.pixelFromPrice(quote.Low,panel):(J3X.i0J((yAxis.high-quote.Low),yAxis.multiplier))+yAxis.top);length=J3X.h0J(bottom,top);cache.open=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(J3X.J0J((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top);cache.close=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(J3X.W0J((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);if(J3X.C0J(top,t)){if(J3X.t0J(top+length,t)){cache.top=top;cache.bottom=top;continue;}
length-=J3X.O0J(t,top);top=t;}
if(J3X.U0J(top+length,b)){length-=(top+length-b);}
cache.top=top;cache.bottom=top+length;}
var xx=Math.floor(xbase)+0.5;if(J3X.X3J(cache.top,b)&&J3X.d3J(cache.bottom,t)){context.moveTo(xx,J3X.r3J(cache.top,voffset));context.lineTo(xx,cache.bottom+voffset);}
if(J3X.F3J(cache.open,t)&&J3X.R3J(cache.open,b)){context.moveTo(xx,cache.open);context.lineTo(J3X.j3J(xx,hlen),cache.open);}
if(J3X.p3J(cache.close,t)&&J3X.u3J(cache.close,b)){context.moveTo(xx,cache.close);context.lineTo(xx+hlen,cache.close);}
}
this.canvasColor(style);context.stroke();context.closePath();context.lineWidth=1;}
;STXChart.prototype.drawBarChart=function(panel,style,colorFunction){var chart=panel.chart;if(!chart){chart=panel;panel=panel.chart;}
var quotes=chart.dataSegment,context=chart.context,c=this.canvasStyle(style);if(c.width&&J3X.S3J(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
var t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,length,leftTick=J3X.L3J(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks,yAxis=panel.yAxis,colors={}
,hlen=J3X.g3J(chart.tmpWidth,2),voffset=J3X.z3J(context.lineWidth,2),candleWidth=this.layout.candleWidth,xbase=J3X.G3J(panel.left,0.5*candleWidth,this.micropixels,1);for(var x=0;J3X.B3J(x,quotes.length);x++){xbase+=J3X.Z3J(candleWidth,2);candleWidth=this.layout.candleWidth;xbase+=J3X.V3J(candleWidth,2);var quote=quotes[x];if(!quote)continue;if(quote.projection)break;if(quote.candleWidth){xbase+=J3X.K3J((quote.candleWidth-candleWidth),2);candleWidth=quote.candleWidth;}
var color=colorFunction(this,quote);if(!color)continue;colors[color]=1;context.strokeStyle=color;context.beginPath();if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(J3X.Q1J(tick,panel.cacheLeft)||J3X.M1J(tick,panel.cacheRight)||!cache.top){top=this.pixelFromPrice(quote.High,panel);bottom=this.pixelFromPrice(quote.Low,panel);length=J3X.v1J(bottom,top);cache.open=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(J3X.E1J((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top);cache.close=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(J3X.N1J((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);if(J3X.b1J(top,t)){if(J3X.w1J(top+length,t)){cache.top=top;cache.bottom=top;continue;}
length-=J3X.o1J(t,top);top=t;}
if(J3X.T1J(top+length,b)){length-=(top+length-b);}
cache.top=top;cache.bottom=top+length;}
var xx=Math.floor(xbase)+0.5;if(J3X.i1J(cache.top,b)&&J3X.h1J(cache.bottom,t)){context.moveTo(xx,J3X.J1J(cache.top,voffset));context.lineTo(xx,cache.bottom+voffset);}
if(J3X.W1J(cache.open,t)&&J3X.C1J(cache.open,b)){context.moveTo(xx,cache.open);context.lineTo(J3X.t1J(xx,hlen),cache.open);}
if(J3X.O1J(cache.close,t)&&J3X.U1J(cache.close,b)){context.moveTo(xx,cache.close);context.lineTo(xx+hlen,cache.close);}
context.stroke();}
context.lineWidth=1;return colors;}
;STXChart.prototype.plotLineChart=function(panel,quotes,field,parameters,colorFunction){var i2m="plo",skipProjections=false,skipTransform=false,noSlopes=false,tension=0,points=[];if(parameters){skipProjections=parameters.skipProjections;skipTransform=parameters.skipTransform;noSlopes=parameters.noSlopes;tension=parameters.tension;}
var chart=panel.chart,context=this.chart.context,first=true,yAxis=panel.yAxis,t=yAxis.top,b=yAxis.bottom,leftTick=J3X.X2J(chart.dataSet.length,chart.scroll),lastQuote=null,colors={}
,lastXY=[0,0],candleWidth=this.layout.candleWidth,xbase=J3X.d2J(panel.left,(parameters.noSlopes?1:0.5)*candleWidth,this.micropixels,1);this.startClip(panel.name);context.beginPath();for(var i=0;J3X.k2J(i,quotes.length);i++){xbase+=J3X.e2J(candleWidth,2);if(parameters.noSlopes)xbase+=J3X.A2J(candleWidth,2);candleWidth=this.layout.candleWidth;if(!parameters.noSlopes)xbase+=J3X.y2J(candleWidth,2);var quote=quotes[i];if(!quote)continue;if(skipProjections&&quote.projection)break;if(quote.candleWidth){if(!parameters.noSlopes)xbase+=J3X.n2J((quote.candleWidth-candleWidth),2);candleWidth=quote.candleWidth;}
if(!skipTransform&&quote.transform)quote=quote.transform;var x=xbase,cache=quote.cache,tick=leftTick+i;if(!quote[field]&&J3X.I2J(quote[field],0))continue;if(J3X.H2J(tick,panel.cacheLeft)||J3X.P2J(tick,panel.cacheRight)||!cache[field]){cache[field]=(yAxis.semiLog?this.pixelFromPrice(quote[field],panel):(J3X.c2J((yAxis.high-quote[field]),yAxis.multiplier))+yAxis.top);}
if(J3X.x2J(x,panel.right))lastQuote=quote;if(J3X.Y2J(i,quotes.length-1)){if(this.extendLastTick)x+=this.offset;if(parameters.lastTickOffset)x+=parameters.lastTickOffset;}
var y=cache[field],pattern=null;if(colorFunction){var color=colorFunction(this,quote);if(!color)continue;if(typeof color=="object"){pattern=color.pattern;color=color.color;}
if(J3X.B2J(context.strokeStyle,color)){if(!first){context.stroke();context.beginPath();context.moveTo(lastXY[0],lastXY[1]);}
context.strokeStyle=color;colors[color]=1;}
}
if(first){first=false;if(noSlopes||J3X.Z2J(leftTick,0)){context.moveTo(i?x:0,y);if(tension){points.push(x,y);}
else{if(pattern){context.dashedLineTo(0,y,x,y,pattern);}
else{context.lineTo(x,y);}
}
}
else if(J3X.V2J(leftTick,0)){var baseline=chart.dataSet[leftTick];if(!skipTransform&&baseline.transform)baseline=baseline.transform;var y0=baseline[field];if(!y0||isNaN(y0)){context.moveTo(i?x:0,y);if(tension){points.push(x,y);}
}
else{y0=(yAxis.semiLog?this.pixelFromPrice(y0,panel):(J3X.K2J((yAxis.high-y0),yAxis.multiplier))+yAxis.top);var x0=J3X.Q9J(x,candleWidth);if(pattern){context.dashedLineTo(x0,y0,x,y,pattern);}
else{context.moveTo(x0,y0);if(tension){points.push(x0,y0,x,y);}
else{context.lineTo(x,y);}
}
}
}
}
else{if(noSlopes){var quote1=quotes[J3X.M9J(i,1)];if(!quote1)continue;if(!skipTransform&&quote1.transform)quote1=quote1.transform;if(i){if(pattern){context.dashedLineTo(lastXY[0],lastXY[1],x,lastXY[1],pattern);}
else{context.lineTo(x,lastXY[1]);}
context.moveTo(x,y);}
if(J3X.v9J(i,quotes.length-1)){if(pattern){context.dashedLineTo(x,y,x+candleWidth,y,pattern);}
else{context.lineTo(x+candleWidth,y);}
}
}
else{if(pattern){context.dashedLineTo(lastXY[0],lastXY[1],x,y,pattern);}
else{if(tension){points.push(x,y);}
else{context.lineTo(x,y);}
}
}
}
lastXY=[x,y];if(J3X.E9J(i,(quotes.length-1))&&tension){points.push(x,y);plotSplinePrimitive(points,tension,context);}
}
context.stroke();this.endClip();if(parameters.label&&lastQuote){var txt;if(yAxis.priceFormatter){txt=yAxis.priceFormatter(this,panel,lastQuote[field],parameters.labelDecimalPlaces);}
else{txt=this.formatYAxisPrice(lastQuote[field],panel,parameters.labelDecimalPlaces);}
var yaxisLabelStyle=this.yaxisLabelStyle;if(panel.yAxis.yaxisLabelStyle)yaxisLabelStyle=panel.yAxis.yaxisLabelStyle;var labelcolor=J3X.N9J(yaxisLabelStyle,"noop")?context.strokeStyle:null;this.yAxisLabels.push({src:(i2m+i3m),"args":[panel,txt,lastQuote.cache[field],J3X.b9J(yaxisLabelStyle,"noop")?"#FFFFFF":context.strokeStyle,labelcolor]}
);}
return colors;}
;STXChart.prototype.plotMountainChart=function(panel,quotes,field,parameters){var skipProjections=false,skipTransform=false,reverse=false,tension=0,points=[];if(parameters){skipProjections=parameters.skipProjections;skipTransform=parameters.skipTransform;reverse=parameters.reverse;tension=parameters.tension;}
var chart=panel.chart,context=this.chart.context,first=true,t=panel.yAxis.top,b=panel.yAxis.bottom;this.startClip(panel.name);context.beginPath();var leftTick=J3X.w9J(chart.dataSet.length,chart.scroll),firstX=null,firstY=null,yAxis=panel.yAxis,x=0;for(var i=0;J3X.o9J(i,quotes.length);i++){var quote=quotes[i];if(!quote)continue;if(skipProjections&&quote.projection)break;if(!skipTransform&&quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+i;if(J3X.T9J(tick,panel.cacheLeft)||J3X.i9J(tick,panel.cacheRight)||!cache[field]){if(!quote[field]&&J3X.h9J(quote[field],0))continue;cache[field]=(yAxis.semiLog?this.pixelFromPrice(quote[field],panel):(J3X.J9J((yAxis.high-quote[field]),yAxis.multiplier))+yAxis.top);}
x=panel.left+J3X.W9J((i+0.5),this.layout.candleWidth)+this.micropixels-1;if(J3X.C9J(i,quotes.length-1)){if(this.extendLastTick)x+=this.offset;if(parameters.lastTickOffset)x+=parameters.lastTickOffset;}
if(J3X.t9J(firstX,null))firstX=x;var y=cache[field];if(J3X.O9J(firstY,null))firstY=y;if(first){first=false;if(J3X.U9J(leftTick,0)){context.moveTo(x,y);if(tension){points.push(x,y);}
}
else{var baseline=chart.dataSet[leftTick];if(baseline.transform)baseline=baseline.transform;var y0=baseline[field];y0=(yAxis.semiLog?this.pixelFromPrice(y0,panel):(J3X.X7J((yAxis.high-y0),yAxis.multiplier))+yAxis.top);firstX=J3X.d7J(x,this.layout.candleWidth);context.moveTo(firstX,y0);if(tension){points.push(firstX,y0,x,y);}
else{context.lineTo(x,y);}
}
}
else{if(tension){points.push(x,y);}
else{context.lineTo(x,y);}
}
if(J3X.r7J(i,(quotes.length-1))&&tension){points.push(x,y);plotSplinePrimitive(points,tension,context);}
}
context.lineTo(x,reverse?t:b);context.lineTo(firstX,reverse?t:b);if(reverse){if(J3X.F7J(firstY,t))firstY=t;}
else{if(J3X.R7J(firstY,b))firstY=b;}
context.lineTo(firstX,firstY);context.fill();context.closePath();this.endClip();}
;STXChart.prototype.drawLineChart=function(panel,style,colorFunction){var context=this.chart.context,c=this.canvasStyle(style);if(c.width&&J3X.j7J(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
this.canvasColor(style);var params={skipProjections:true}
;if(panel.chart.tension)params.tension=panel.chart.tension;if(panel.chart.lastTickOffset)params.lastTickOffset=panel.chart.lastTickOffset;var rc=this.plotLineChart(panel,panel.chart.dataSegment,"Close",params,colorFunction);context.lineWidth=1;return rc;}
;STXChart.prototype.drawMountainChart=function(panel){var context=this.chart.context,c=this.canvasStyle("stx_mountain_chart");if(c.width&&J3X.p7J(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
var top=this.pixelFromPrice(panel.chart.highValue,panel);if(isNaN(top))top=0;var backgroundColor=c.backgroundColor,color=c.color;if(color&&J3X.u7J(color,"transparent")){var gradient=context.createLinearGradient(0,top,0,panel.yAxis.bottom);gradient.addColorStop(0,backgroundColor);gradient.addColorStop(1,color);context.fillStyle=gradient;}
else{context.fillStyle=backgroundColor;}
var params={skipProjections:true}
;if(panel.chart.tension)params.tension=panel.chart.tension;if(panel.chart.lastTickOffset)params.lastTickOffset=panel.chart.lastTickOffset;this.plotMountainChart(panel,panel.chart.dataSegment,"Close",params);var strokeStyle=c.borderTopColor;if(strokeStyle&&J3X.S7J(strokeStyle,"transparent")){context.strokeStyle=strokeStyle;this.plotLineChart(panel,panel.chart.dataSegment,(B8m+J3X.S2m+w2m+w1m+M5l),params);}
context.lineWidth=1;}
;STXChart.prototype.drawWaveChart=function(panel){var l4m="ne_c",B0m="x_li",chart=panel.chart,quotes=chart.dataSegment,context=this.chart.context;this.startClip(panel.name);context.beginPath();var first=false,reset=false,t=panel.yAxis.top,b=panel.yAxis.bottom,xbase=panel.left+Math.floor(-0.5*this.layout.candleWidth+this.micropixels);for(var i=0;J3X.L7J(i,quotes.length);i++){xbase+=this.layout.candleWidth;var quote=quotes[i];if(!quote)continue;if(quote.projection)break;if(quote.transform)quote=quote.transform;var x=J3X.g7J(xbase,3*this.layout.candleWidth/8),y=this.pixelFromPrice(quote.Open,panel);if(J3X.z7J(y,t)){y=t;if(reset){context.moveTo(x,y);continue;}
reset=true;}
else if(J3X.G7J(y,b)){y=b;if(reset){context.moveTo(x,y);continue;}
reset=true;}
else{reset=false;}
if(!first){first=true;var leftTick=J3X.m7J(chart.dataSet.length,chart.scroll);if(J3X.l7J(leftTick,0)){context.moveTo(x,y);}
else if(J3X.q7J(leftTick,0)){var baseline=chart.dataSet[J3X.D7J(leftTick,1)];if(baseline.transform)baseline=baseline.transform;var y0=baseline.Close;y0=(panel.yAxis.semiLog?this.pixelFromPrice(y0,panel):(J3X.f7J((panel.yAxis.high-y0),panel.yAxis.multiplier))+t);y0=Math.min(Math.max(y0,t),b);context.moveTo(panel.left+J3X.a8J((i-1),this.layout.candleWidth)+this.micropixels,y0);context.lineTo(x,y);}
context.moveTo(x,y);}
else{context.lineTo(x,y);}
x+=J3X.s8J(this.layout.candleWidth,4);if(J3X.k8J(quote.Open,quote.Close)){y=this.pixelFromPrice(quote.Low,panel);if(J3X.e8J(y,t))y=t;if(J3X.A8J(y,b))y=b;context.lineTo(x,y);x+=J3X.y8J(this.layout.candleWidth,4);y=this.pixelFromPrice(quote.High,panel);if(J3X.n8J(y,t))y=t;if(J3X.I8J(y,b))y=b;context.lineTo(x,y);}
else{y=this.pixelFromPrice(quote.High,panel);if(J3X.H8J(y,t))y=t;if(J3X.P8J(y,b))y=b;context.lineTo(x,y);x+=J3X.c8J(this.layout.candleWidth,4);y=this.pixelFromPrice(quote.Low,panel);if(J3X.x8J(y,t))y=t;if(J3X.Y8J(y,b))y=b;context.lineTo(x,y);}
x+=J3X.B8J(this.layout.candleWidth,4);y=this.pixelFromPrice(quote.Close,panel);if(J3X.Z8J(y,t))y=t;if(J3X.V8J(y,b))y=b;context.lineTo(x,y);}
var c=this.canvasStyle("stx_line_chart");if(c.width&&J3X.K8J(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
this.canvasColor((w1m+i3m+B0m+l4m+j9m+G4l+P4m));context.stroke();context.closePath();this.endClip();context.lineWidth=1;}
;STXChart.prototype.updateFloatHRLabel=function(panel){var X9m="ndR",arr=panel.yaxisLHS.concat(panel.yaxisRHS);if(this.floatCanvas.isDirty)STX.clearCanvas(this.floatCanvas,this);if(J3X.Q4J(this.controls.crossX.style.display,"none"))return ;if(this.controls.crossY){var crosshairWidth=panel.width;if(J3X.M4J(this.yaxisLabelStyle,(d1m+w2m+h3m+X9m+M5l+s5l+i3m+y4m+d1m+d1m+P5l)))crosshairWidth-=7;this.controls.crossY.style.left=panel.left+"px";this.controls.crossY.style.width=crosshairWidth+"px";}
for(var i=0;J3X.v4J(i,arr.length);i++){var yAxis=arr[i],price=this.valueFromPixel(this.cy,panel,yAxis);if(isNaN(price))continue;if((panel.min||J3X.E4J(panel.min,0))&&J3X.N4J(price,panel.min))continue;if((panel.max||J3X.b4J(panel.max,0))&&J3X.w4J(price,panel.max))continue;var labelDecimalPlaces=null;if(J3X.o4J(yAxis,panel.chart.yAxis)){labelDecimalPlaces=0;if(J3X.T4J(yAxis.shadow,1000))labelDecimalPlaces=2;if(J3X.i4J(yAxis.shadow,5))labelDecimalPlaces=4;if(yAxis.decimalPlaces||J3X.h4J(yAxis.decimalPlaces,0))labelDecimalPlaces=yAxis.decimalPlaces;}
if(yAxis.priceFormatter){price=yAxis.priceFormatter(this,panel,price,yAxis);}
else{price=this.formatYAxisPrice(price,panel,labelDecimalPlaces,yAxis);}
var style=this.canvasStyle("stx-float-price");this.createYAxisLabel(panel,price,this.cy,style.backgroundColor,style.color,this.floatCanvas.context,yAxis);this.floatCanvas.isDirty=true;}
}
;STXChart.prototype.headsUpHR=function(){var c6l="cond",c9m="mill",e4m="eco",k4l="headsUpHR";if(this.runPrepend(k4l,arguments))return ;var panel=this.currentPanel;if(!panel)return ;var chart=panel.chart;this.updateFloatHRLabel(panel);if(this.controls.floatDate&&!STXChart.hideDates()){var bar=this.barFromPixel(this.cx),prices=chart.xaxis[bar];if(prices&&prices.DT){if(chart.xAxis.formatter){this.controls.floatDate.innerHTML=chart.xAxis.formatter(prices.DT);}
else if(this.internationalizer){var str=this.internationalizer.monthDay.format(prices.DT);if(!STXChart.isDailyInterval(this.layout.interval))str+=n5l+this.internationalizer.hourMinute.format(prices.DT);else{str=this.internationalizer.yearMonthDay.format(prices.DT);}
this.controls.floatDate.innerHTML=str;}
else{var m=prices.DT.getMonth()+J3X.e2l;if(J3X.J4J(m,L8m))m=Q2m+m;var d=prices.DT.getDate();if(J3X.W4J(d,L8m))d=Q2m+d;var h=prices.DT.getHours();if(J3X.C4J(h,L8m))h=Q2m+h;var mn=prices.DT.getMinutes();if(J3X.t4J(mn,L8m))mn=Q2m+mn;if(STXChart.isDailyInterval(this.layout.interval))this.controls.floatDate.innerHTML=m+N1m+d+N1m+prices.DT.getFullYear();else{this.controls.floatDate.innerHTML=m+N1m+d+n5l+h+k6m+mn;var isSecond=(chart.xAxis.activeTimeUnit&&J3X.O4J(chart.xAxis.activeTimeUnit,STX.SECOND))||J3X.U4J(this.layout.timeUnit,(w1m+e4m+U4m)),isMS=(chart.xAxis.activeTimeUnit&&J3X.X5J(chart.xAxis.activeTimeUnit,STX.MILLISECOND))||J3X.d5J(this.layout.timeUnit,(c9m+H9m+w1m+M5l+c6l));if(isSecond||isMS){var sec=prices.DT.getSeconds();if(J3X.r5J(sec,L8m))sec=Q2m+sec;this.controls.floatDate.innerHTML+=(k6m+sec);if(isMS){var mil=prices.DT.getMilliseconds();if(J3X.F5J(mil,L8m))mil=Q2m+mil;if(J3X.R5J(mil,i5m))mil=Q2m+mil;this.controls.floatDate.innerHTML+=(k6m+mil);}
}
}
}
}
else if(prices&&prices.index){this.controls.floatDate.innerHTML=prices.index;}
else{this.controls.floatDate.innerHTML=o3m;}
}
this.runAppend(k4l,arguments);}
;STXChart.prototype.setCrosshairColors=function(){return ;}
;STXChart.prototype.magnetize=function(){var v3m="ol";this.magnetizedPrice=null;if(this.runPrepend("magnetize",arguments))return ;if((J3X.j5J(this.currentVectorParameters.vectorType,"annotation")||J3X.p5J(this.currentVectorParameters.vectorType,(s5l+w5m+D5l+i3m)))&&STXChart.drawingLine)return ;if(J3X.u5J(this.currentVectorParameters.vectorType,"projection"))return ;if(J3X.S5J(this.currentVectorParameters.vectorType,"freeform"))return ;var panel=this.currentPanel;if(J3X.L5J(panel.name,panel.chart.name)){var chart=panel.chart,tick=this.tickFromPixel(J3X.g5J(STXChart.crosshairX,this.left),chart);if(J3X.z5J(tick,chart.dataSet.length))return ;var prices=chart.dataSet[tick];if(!prices)return ;var price=this.valueFromPixel(this.cy,panel);this.magnetizedPrice=prices.Close;if(J3X.G5J(this.layout.chartType,"bar")||J3X.m5J(this.layout.chartType,(T0m+J3X.r2m+t4l+J3X.S2m+M5l))||J3X.l5J(this.layout.chartType,"colored_bar")||J3X.q5J(this.layout.chartType,"hollow_candle")||J3X.D5J(this.layout.chartType,(J3X.Q0G+v3m+h3m+J3X.g2m+M5l+f5l+s5l+G4l+U4m+W3m))){var fields=["Open","High",(d3m),"Close"],closest=1000000000;for(var i=0;J3X.f5J(i,fields.length);i++){var fp=prices[fields[i]];if(J3X.a6J(Math.abs(price-fp),closest)){closest=Math.abs(J3X.s6J(price,fp));this.magnetizedPrice=fp;}
}
}
var x=this.pixelFromTick(tick,chart),y=this.pixelFromPrice(this.magnetizedPrice,this.currentPanel),ctx=this.chart.tempCanvas.context;ctx.beginPath();ctx.lineWidth=1;var radius=J3X.k6J(Math.max(this.layout.candleWidth,8),2);ctx.arc(x,y,radius,0,J3X.e6J(2,Math.PI),false);ctx.fillStyle="#FFFFFF";ctx.strokeStyle="#000000";ctx.fill();ctx.stroke();ctx.closePath();}
this.runAppend("magnetize",arguments);}
;STXChart.prototype.positionCrosshairsAtPointer=function(){if(!this.currentPanel)return ;var chart=this.currentPanel.chart,rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.right=this.left+this.width;this.bottom=this.top+this.height;var tick=this.tickFromPixel(this.backOutX(STXChart.crosshairX),chart);this.cy=this.backOutY(STXChart.crosshairY);this.cx=this.backOutX(STXChart.crosshairX);this.controls.crossX.style.left=(J3X.A6J(this.pixelFromTick(tick,chart),0.5))+"px";this.controls.crossY.style.top=this.backOutY(STXChart.crosshairY)+"px";this.updateChartAccessories();}
;STXChart.prototype.doDisplayCrosshairs=function(){var z6l="stx-crosshair-on",h9l="doDisplayCrosshairs";if(this.runPrepend(h9l,arguments))return ;if(this.displayInitialized){if(!this.layout.crosshair&&(J3X.y6J(this.currentVectorParameters.vectorType,o3m)||!this.currentVectorParameters.vectorType)){this.undisplayCrosshairs();}
else if(STX.Drawing[this.currentVectorParameters.vectorType]&&(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw){this.undisplayCrosshairs();}
else{if(J3X.n6J(this.controls.crossX.style.display,o3m)){this.controls.crossX.style.display=o3m;this.controls.crossY.style.display=o3m;if(this.preferences.magnet&&this.currentVectorParameters.vectorType){STX.unappendClassName(this.container,z6l);}
else{STX.appendClassName(this.container,z6l);}
}
if(this.controls.floatDate&&!STXChart.hideDates()){this.controls.floatDate.style.display=Q8l;}
}
}
this.runAppend(h9l,arguments);}
;STXChart.prototype.undisplayCrosshairs=function(){var Z5l="oss",t9l="undisplayCrosshairs";if(this.runPrepend(t9l,arguments))return ;if(this.controls.crossX){if(J3X.I6J(this.controls.crossX.style.display,n5m)){this.controls.crossX.style.display=n5m;this.controls.crossY.style.display=n5m;}
}
if(this.displayInitialized&&this.controls.floatDate){this.controls.floatDate.style.display=n5m;}
STX.unappendClassName(this.container,(w1m+i3m+J3X.p6m+N1m+s5l+d1m+Z5l+j9m+G4l+H9m+d1m+N1m+w2m+J3X.r2m));if(this.floatCanvas&&this.floatCanvas.isDirty)STX.clearCanvas(this.floatCanvas,this);this.runAppend(t9l,arguments);}
;STXChart.prototype.modalBegin=function(){var T6l="modal";this.openDialog=T6l;this.undisplayCrosshairs();}
;STXChart.prototype.modalEnd=function(){this.cancelTouchSingleClick=Q9m;this.openDialog=o3m;this.doDisplayCrosshairs();}
;STXChart.prototype.updateChartAccessories=function(){var f9l="updateChartAccessories";if(this.runPrepend(f9l,arguments))return ;this.accessoryTimer=J3X.U2m;this.lastAccessoryUpdate=new Date().getTime();var floatDate=this.controls.floatDate;if(floatDate){var panel=this.currentPanel;if(!panel)panel=this.chart.panel;if(panel){var chart=panel.chart,tick=this.tickFromPixel(this.backOutX(STXChart.crosshairX),chart);floatDate.style.left=(J3X.H6J(this.pixelFromTick(tick,chart),(floatDate.offsetWidth/J3X.k2l),A6l))+(x8m);floatDate.style.bottom=(J3X.g6J(this.chart.canvasHeight,chart.panel.bottom))+x8m;}
}
this.headsUpHR();this.runAppend(f9l,arguments);}
;STXChart.prototype.mousemove=function(e$){var e=e$?e$:event;STXChart.crosshairX=e.clientX;STXChart.crosshairY=e.clientY;if(this.runPrepend(Q6l,arguments))return ;if(!this.displayInitialized)return ;if(J3X.z6J(this.openDialog,o3m))return ;this.mousemoveinner(e.clientX,e.clientY);this.runAppend(Q6l,arguments);}
;STXChart.prototype.setResizeTimer=function(ms){this.resizeDetectMS=ms;function closure(self){return function(){if(!self.chart.canvas)return ;if(!STX.isAndroid){if(J3X.G6J(self.chart.canvas.height,Math.floor(self.devicePixelRatio*self.chart.container.clientHeight))||J3X.m6J(self.chart.canvas.width,Math.floor(self.devicePixelRatio*self.chart.container.clientWidth))){self.resizeChart();return ;}
}
}
;}
if(ms){if(this.resizeTimeout)window.clearInterval(this.resizeTimeout);this.resizeTimeout=window.setInterval(closure(this),ms);}
else{if(this.resizeTimeout)window.clearInterval(this.resizeTimeout);this.resizeTimeout=null;}
}
;STXChart.prototype.whichYAxis=function(panel,x){if(typeof x==="undefined")x=this.cx;var arr=panel.yaxisLHS.concat(panel.yaxisRHS);for(var i=0;J3X.l6J(i,arr.length);i++){var yAxis=arr[i];if(J3X.q6J(yAxis.left,x)&&J3X.D6J(yAxis.left+yAxis.width,x))return yAxis;}
return this.chart.panel.yAxis;}
;STXChart.prototype.mousemoveinner=function(epX,epY){if(!this.chart.canvas)return ;if(!STX.isAndroid&&!STX.isIOS7or8){if(J3X.f6J(this.chart.canvas.height,Math.floor(this.devicePixelRatio*this.chart.container.clientHeight))||J3X.a0E(this.chart.canvas.width,Math.floor(this.devicePixelRatio*this.chart.container.clientWidth))){this.resizeChart();return ;}
}
if(this.runPrepend("mousemoveinner",arguments))return ;var rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.right=this.left+this.width;this.bottom=this.top+this.height;STXChart.crosshairX=epX;STXChart.crosshairY=epY;var cy=this.cy=this.backOutY(STXChart.crosshairY),cx=this.cx=this.backOutX(STXChart.crosshairX);this.currentPanel=this.whichPanel(cy);if(!this.currentPanel)this.currentPanel=this.chart.panel;if(!this.currentPanel)return ;var chart=this.currentPanel.chart;if(chart.dataSet){this.crosshairTick=this.tickFromPixel(cx,chart);this.crosshairValue=this.adjustIfNecessary(this.currentPanel,this.crosshairTick,this.valueFromPixel(cy,this.currentPanel));}
if(J3X.s0E(STXChart.crosshairX,this.left)&&J3X.k0E(STXChart.crosshairX,this.right)&&J3X.e0E(STXChart.crosshairY,this.top)&&J3X.A0E(STXChart.crosshairY,this.bottom)){STXChart.insideChart=true;}
else{STXChart.insideChart=false;}
this.overXAxis=J3X.y0E(STXChart.crosshairY,this.top+this.chart.panel.yAxis.bottom)&&J3X.n0E(STXChart.crosshairY,this.top+this.chart.panel.bottom)&&STXChart.insideChart;this.overYAxis=(J3X.I0E(this.cx,this.currentPanel.right)||J3X.H0E(this.cx,this.currentPanel.left))&&STXChart.insideChart;if(this.overXAxis||this.overYAxis||(!STXChart.insideChart&&!this.grabbingScreen)){this.undisplayCrosshairs();if(!this.overXAxis&&!this.overYAxis)return ;}
if(!this.displayCrosshairs&&!STXChart.resizingPanel){this.undisplayCrosshairs();return ;}
var bHandle=this.controls.baselineHandle;if(this.repositioningBaseline){panel=this.panels[this.chart.panel.name];this.chart.baseline.userLevel=this.adjustIfNecessary(panel,this.crosshairTick,this.valueFromPixelUntransform(this.backOutY(STXChart.crosshairY),panel));if(J3X.P0E(Date.now()-this.repositioningBaseline.lastDraw,100)){this.draw();this.repositioningBaseline.lastDraw=Date.now();}
return ;}
if(this.grabbingScreen&&!STXChart.resizingPanel){if(this.anyHighlighted){STX.clearCanvas(this.chart.tempCanvas,this);this.anyHighlighted=false;var n;for(n in this.overlays){this.overlays[n].highlight=false;}
for(n in chart.series){chart.series[n].highlight=false;}
this.displaySticky();}
if(this.preferences.magnet&&this.currentVectorParameters.vectorType){STX.clearCanvas(this.chart.tempCanvas,this);}
if(this.grabStartX==-1){this.grabStartX=STXChart.crosshairX;this.grabStartScrollX=chart.scroll;}
if(this.grabStartY==-1){this.grabStartY=STXChart.crosshairY;this.grabStartScrollY=chart.panel.yAxis.scroll;}
var dx=J3X.c0E(STXChart.crosshairX,this.grabStartX),dy=J3X.x0E(STXChart.crosshairY,this.grabStartY);if(J3X.Y0E(dx,0)&&J3X.B0E(dy,0))return ;if(J3X.Z0E(Math.abs(dx)+Math.abs(dy),5))this.grabOverrideClick=true;var push;if(this.allowZoom&&J3X.V0E(this.grabMode,"pan")&&(J3X.K0E(this.grabMode.indexOf("zoom"),0)||this.ctrl||this.overXAxis||this.overYAxis)){if(J3X.Q3E(this.grabMode,"")){if(this.overXAxis)this.grabMode="zoom-x";else if(this.overYAxis)this.grabMode="zoom-y";}
if(J3X.M3E(this.grabMode,"zoom-x"))dy=0;else if(J3X.v3E(this.grabMode,"zoom-y"))dx=0;push=J3X.E3E(dx,25);var centerMe=true;if(J3X.N3E(chart.scroll,chart.maxTicks))centerMe=false;var newCandleWidth=this.grabStartCandleWidth+push;if(J3X.b3E(newCandleWidth,this.minimumCandleWidth))newCandleWidth=this.minimumCandleWidth;var pct=J3X.w3E((this.layout.candleWidth-newCandleWidth),this.layout.candleWidth);if(J3X.o3E(Math.abs(pct),0.2))this.grossDragging=new Date();else this.grossDragging=0;if(J3X.T3E(pct,0.1)){newCandleWidth=J3X.i3E(this.layout.candleWidth,0.9);}
else if(pct<-0.1){newCandleWidth=J3X.h3E(this.layout.candleWidth,1.1);}
if(STX.ipad){if(J3X.J3E(Math.round((this.chart.width/this.layout.candleWidth)-0.499)-1,STXChart.ipadMaxTicks)&&J3X.W3E(Math.round((this.chart.width/newCandleWidth)-0.499)-1,STXChart.ipadMaxTicks))return ;}
var newMaxTicks;if(this.pinchingCenter){var x=this.backOutX(this.pinchingCenter),tick1=this.tickFromPixel(x,chart);this.setCandleWidth(newCandleWidth,chart);var newTick=this.tickFromPixel(x,chart);chart.scroll+=Math.floor((J3X.C3E(newTick,tick1)));}
else if(centerMe){newMaxTicks=Math.round(J3X.t3E((this.chart.width/newCandleWidth),0.499));if(J3X.O3E(newMaxTicks,chart.maxTicks)){this.setCandleWidth(newCandleWidth,chart);chart.scroll+=Math.round(J3X.U3E((newMaxTicks-chart.maxTicks),2));}
}
else{newMaxTicks=Math.round(J3X.X1E((this.chart.width/newCandleWidth),0.499));if(J3X.d1E(newMaxTicks,Math.round((this.chart.width/this.layout.candleWidth)-0.499))){this.setCandleWidth(newCandleWidth,chart);var wsInTicks=Math.round(J3X.r1E(this.preferences.whitespace,this.layout.candleWidth));chart.scroll=J3X.F1E(chart.maxTicks,wsInTicks);}
}
this.layout.span=null;var yAxis=this.whichYAxis(this.grabbingPanel,this.cx);if(this.overYAxis){yAxis.zoom=Math.round(this.grabStartZoom+dy);if(J3X.R1E(this.grabStartZoom,yAxis.height)){if(J3X.j1E(yAxis.zoom,yAxis.height))yAxis.zoom=J3X.p1E(yAxis.height,1);}
else{if(J3X.u1E(yAxis.zoom,yAxis.height))yAxis.zoom=yAxis.height+1;}
}
}
else{if(this.allowScroll){if(J3X.S1E(Math.abs(dy),this.yTolerance)){if(!this.yToleranceBroken){dy=0;if(J3X.L1E(dx,0))return ;}
}
else{this.yToleranceBroken=true;}
this.grabMode="pan";push=Math.round(J3X.g1E(dx,this.layout.candleWidth));this.microscroll=J3X.z1E(push,(dx/this.layout.candleWidth));this.micropixels=this.layout.candleWidth*this.microscroll*-1;if(this.shift)push*=5;if(J3X.G1E(Math.abs(chart.scroll-this.grabStartScrollX-push),20))this.grossDragging=new Date();else this.grossDragging=0;chart.scroll=this.grabStartScrollX+push;if(J3X.m1E(chart.scroll,1))chart.scroll=1;if(J3X.l1E(chart.scroll,chart.maxTicks)){this.preferences.whitespace=30;}
else{this.preferences.whitespace=J3X.q1E((chart.maxTicks-chart.scroll),this.layout.candleWidth);}
if(J3X.D1E(this.currentPanel.name,chart.name)){this.chart.panel.yAxis.scroll=this.grabStartScrollY+dy;}
}
if(this.callbacks.move){(this.callbacks.move)({stx:this,panel:this.currentPanel,x:this.cx,y:this.cy,grab:this.grabbingScreen}
);}
}
var clsrFunc=function(stx){return function(){stx.draw();}
;}
;if(STXChart.useAnimation){if(window.requestAnimationFrame){window.requestAnimationFrame(clsrFunc(this));}
else if(this.grossDragging){setTimeout(function(stx){return function retest(){if(J3X.f1E(new Date()-stx.grossDragging,500))setTimeout(retest,100);else{stx.grossDragging=0;stx.draw();}
}
;}
(this),100);}
else{this.draw();}
}
else{this.draw();}
if(this.activeDrawing){STX.clearCanvas(this.chart.tempCanvas,this);this.activeDrawing.render(this.chart.tempCanvas.context);this.activeDrawing.measure();}
this.undisplayCrosshairs();return ;}
else{this.grabMode="";}
this.grabbingPanel=this.currentPanel;if(this.overXAxis||this.overYAxis)return ;var tick=this.tickFromPixel(this.backOutX(STXChart.crosshairX),chart);this.controls.crossX.style.left=(J3X.a2E(this.pixelFromTick(tick,chart),0.5))+"px";this.controls.crossY.style.top=this.cy+"px";this.setCrosshairColors();if(STXChart.insideChart&&!STXChart.resizingPanel){if(!STX.Drawing[this.currentVectorParameters.vectorType]||!(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw){this.doDisplayCrosshairs();}
if(J3X.s2E(this.accessoryTimer,null))clearTimeout(this.accessoryTimer);if(STXChart.drawingLine||!STX.touchDevice){this.updateChartAccessories();}
else{if(J3X.k2E(new Date().getTime()-this.lastAccessoryUpdate,100))this.updateChartAccessories();this.accessoryTimer=setTimeout((function(stx){return function(){stx.updateChartAccessories();}
;}
)(this),10);}
}
else{this.undisplayCrosshairs();}
var panel,value;if(this.repositioningDrawing){panel=this.panels[this.repositioningDrawing.panelName];value=this.adjustIfNecessary(panel,this.crosshairTick,this.valueFromPixelUntransform(this.backOutY(STXChart.crosshairY),panel));if(this.preferences.magnet&&this.magnetizedPrice&&J3X.e2E(panel.name,panel.chart.name)){value=this.adjustIfNecessary(panel,this.crosshairTick,this.magnetizedPrice);}
STX.clearCanvas(this.chart.tempCanvas,this);this.repositioningDrawing.reposition(this.chart.tempCanvas.context,this.repositioningDrawing.repositioner,this.crosshairTick,value);if(this.repositioningDrawing.measure)this.repositioningDrawing.measure();}
else if(STXChart.drawingLine){if(this.activeDrawing){panel=this.panels[this.activeDrawing.panelName];value=this.adjustIfNecessary(panel,this.crosshairTick,this.valueFromPixelUntransform(this.backOutY(STXChart.crosshairY),panel));if(this.preferences.magnet&&this.magnetizedPrice&&J3X.A2E(panel.name,panel.chart.name)){value=this.adjustIfNecessary(panel,this.crosshairTick,this.magnetizedPrice);}
STX.clearCanvas(this.chart.tempCanvas,this);this.activeDrawing.move(this.chart.tempCanvas.context,this.crosshairTick,value);if(this.activeDrawing.measure)this.activeDrawing.measure();}
}
else if(STXChart.resizingPanel){this.resizePanels();this.drawTemporaryPanel();}
else if(STXChart.insideChart){this.findHighlights();}
if(STXChart.insideChart){if(this.callbacks.move){(this.callbacks.move)({stx:this,panel:this.currentPanel,x:this.cx,y:this.cy,grab:this.grabbingScreen}
);}
this.findHighlights();}
if(this.preferences.magnet&&this.currentVectorParameters.vectorType){if(!STXChart.drawingLine&&!this.anyHighlighted)STX.clearCanvas(this.chart.tempCanvas);this.magnetize();}
this.runAppend("mousemoveinner",arguments);}
;STXChart.prototype.findHighlights=function(isTap,clearOnly){var L1m="seri",radius=10;if(isTap)radius=30;var cy=this.cy,cx=this.cx;if(!this.currentPanel)return ;var chart=this.currentPanel.chart;this.anyHighlighted=false;if(this.preferences.magnet&&this.currentVectorParameters.vectorType){STX.clearCanvas(this.chart.tempCanvas,this);}
var somethingChanged=false,drawingToMeasure=null,stickyArgs=["","",true,null,"drawing"],box={x0:this.tickFromPixel(J3X.y2E(cx,radius),chart),x1:this.tickFromPixel(cx+radius,chart),y0:this.valueFromPixelUntransform(J3X.n2E(cy,radius),this.currentPanel),y1:this.valueFromPixelUntransform(cy+radius,this.currentPanel)}
;for(var i=0;J3X.I2E(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];if(drawing.permanent)continue;var prevHighlight=drawing.highlighted,highlightMe=(J3X.H2E(drawing.panelName,this.currentPanel.name));drawing.repositioner=drawing.intersected(this.crosshairTick,this.crosshairValue,box);highlightMe=highlightMe&&drawing.repositioner;if(!clearOnly&&highlightMe){if(prevHighlight){drawingToMeasure=drawing;}
else if(J3X.P2E(prevHighlight,drawing.highlight(true))){if(!drawingToMeasure)drawingToMeasure=drawing;somethingChanged=true;}
this.anyHighlighted=true;}
else{if(J3X.c2E(prevHighlight,drawing.highlight(false))){somethingChanged=true;}
}
}
var first=false,n,o,series;for(n in this.overlays){o=this.overlays[n];o.prev=o.highlight;o.highlight=false;}
for(n in chart.seriesRenderers){var r=chart.seriesRenderers[n];for(var j=0;J3X.x2E(j,r.seriesParams.length);j++){series=r.seriesParams[j];series.prev=series.highlight;series.highlight=false;}
}
if(!clearOnly){var bar=this.barFromPixel(cx);if(J3X.Y2E(bar,chart.dataSegment.length)){var y;for(n in this.overlays){o=this.overlays[n];if(J3X.B2E(o.panel,this.currentPanel.name))continue;if(o.libraryEntry.isHighlighted&&o.libraryEntry.isHighlighted(this,cx,cy)){o.highlight=true;this.anyHighlighted=true;continue;}
var quote=chart.dataSegment[bar];if(!quote)continue;for(var out in this.overlays[n].outputMap){var val=quote[out];y=0;if(J3X.Z2E(this.currentPanel.name,chart.name)){y=this.pixelFromPriceTransform(val,this.currentPanel);}
else{y=this.pixelFromPrice(val,this.currentPanel);}
if(J3X.V2E(cy-radius,y)&&J3X.K2E(cy+radius,y)){o.highlight=true;this.anyHighlighted=true;break;}
}
}
for(n in chart.seriesRenderers){var renderer=chart.seriesRenderers[n];if(!renderer.params.highlightable)continue;for(var m=0;J3X.Q9E(m,renderer.seriesParams.length);m++){series=renderer.seriesParams[m];y=renderer.caches[series.field][bar];if(!y&&J3X.M9E(y,0))continue;if(J3X.v9E(cy-radius,y)&&J3X.E9E(cy+radius,y)){series.highlight=true;this.anyHighlighted=true;}
else if((J3X.N9E(renderer.params.subtype,"step")||J3X.b9E(series.type,"step"))&&J3X.w9E(bar,0)){var py=renderer.caches[series.field][J3X.o9E(bar,1)];if((J3X.T9E(cy,y)&&J3X.i9E(cy,py))||(J3X.h9E(cy,y)&&J3X.J9E(cy,py))){series.highlight=true;this.anyHighlighted=true;}
}
}
}
}
}
for(n in this.overlays){o=this.overlays[n];if(o.highlight){this.anyHighlighted=true;stickyArgs=[o.inputs.display?o.inputs.display:o.name,null,null,o.permanent,"study"];drawingToMeasure=null;}
if(J3X.W9E(o.prev,o.highlight))somethingChanged=true;}
for(n in chart.seriesRenderers){var r2=chart.seriesRenderers[n];if(!r2.params.highlightable)continue;for(var m2=0;J3X.C9E(m2,r2.seriesParams.length);m2++){series=r2.seriesParams[m2];if(series.highlight){this.anyHighlighted=true;stickyArgs=[series.display,series.color,false,series.permanent,(L1m+M5l+w1m)];drawingToMeasure=null;}
if(J3X.t9E(series.prev,series.highlight))somethingChanged=true;}
}
if(somethingChanged){this.draw();this.displaySticky.apply(this,stickyArgs);this.clearMeasure();if(drawingToMeasure)drawingToMeasure.measure();}
if(!this.anyHighlighted){this.setMeasure();}
}
;STXChart.prototype.positionSticky=function(m){var top=Math.max(J3X.O9E(this.cy,m.offsetHeight,b4m),J3X.N2l),right=Math.min(J3X.K9E(this.chart.canvasWidth,(this.cx-i4m)),J3X.Q7E(this.chart.canvasWidth,m.offsetWidth));m.style.top=top+x8m;m.style.right=right+(g1m+J3X.p6m);}
;STXChart.prototype.displaySticky=function(message,backgroundColor,forceShow,noDelete,type){var P5m="rightclick_",w2l="oc",m=this.controls.mSticky;if(!m)return ;var mi=m.children[J3X.N2l];if(!mi)return ;var overlayTrashCan=m.children[J3X.e2l].children[J3X.N2l],mouseDeleteInstructions=m.children[J3X.e2l].children[J3X.e2l];if(!forceShow&&!message){mi.innerHTML=o3m;m.style.display=n5m;if(STX.touchDevice&&overlayTrashCan){overlayTrashCan.style.display=n5m;}
else if(!STX.touchDevice&&mouseDeleteInstructions){mouseDeleteInstructions.style.display=n5m;}
}
else{if(!message)message=o3m;if(forceShow&&!message){mi.style.backgroundColor=o3m;mi.style.color=o3m;mi.style.display=n5m;}
else if(backgroundColor){mi.style.backgroundColor=backgroundColor;mi.style.color=STX.chooseForegroundColor(backgroundColor);mi.style.display=(H9m+I3m+H9m+J3X.r2m+M5l+N1m+I4l+J3X.S2m+w2l+K2m);}
else{mi.style.backgroundColor=o3m;mi.style.color=o3m;mi.style.display=d5l;}
mi.innerHTML=message;if(type)m.children[J3X.e2l].className=P5m+type;m.style.display=d5l;this.positionSticky(m);if(noDelete){overlayTrashCan.style.display=n5m;mouseDeleteInstructions.style.display=n5m;}
else if(STX.touchDevice&&overlayTrashCan){overlayTrashCan.style.display=d5l;mouseDeleteInstructions.style.display=n5m;}
else if(!STX.touchDevice&&mouseDeleteInstructions){mouseDeleteInstructions.style.display=Q8l;}
}
}
;STXChart.prototype.setMeasure=function(price1,price2,tick1,tick2,hover){var W1m="measureLit",u8l="Bars",Z4m="it",v9m="eU",U5l="easur",c0m="setMeasure";if(this.runPrepend(c0m,arguments))return ;var m=$$((J3X.g2m+w9l+M5l+G4l+w1m+h3m+d1m+M5l)),message=o3m;if(!price1){if(m&&J3X.M7E(m.className,E6l))m.className=(J3X.g2m+U5l+v9m+I3m+Z4m);if(!this.anyHighlighted&&J3X.v7E(this.currentVectorParameters.vectorType,o3m))this.clearMeasure();}
else{var distance=J3X.E7E(Math.round(Math.abs(price1-price2)*this.chart.roundit),this.chart.roundit);if(this.internationalizer){message+=this.internationalizer.numbers.format(distance);}
else{message+=distance;}
var pct=J3X.N7E((price2-price1),price1);if(J3X.b7E(Math.abs(pct),p6l)){pct=Math.round(J3X.w7E(pct,i5m));}
else if(J3X.o7E(Math.abs(pct),z2l)){pct=J3X.T7E(Math.round(pct*E5m),L8m);}
else{pct=J3X.i7E(Math.round(pct*X5m),i5m);}
if(this.internationalizer){pct=this.internationalizer.percent.format(J3X.h7E(pct,i5m));}
else{pct=pct+k9m;}
message+=(m8l)+pct+J3X.a7m;var ticks=Math.abs(J3X.J7E(tick2,tick1));ticks=Math.round(ticks)+J3X.e2l;var barsStr=u8l;if(this.translationCallback)barsStr=this.translationCallback(barsStr);message+=n5l+ticks+n5l+barsStr;if(m){if(J3X.W7E(m.className,W1m))m.className=W1m;m.innerHTML=message;}
}
if(this.activeDrawing)return ;m=this.controls.mSticky;if(m){if(hover){m.style.display=d5l;m.children[J3X.N2l].style.display=d5l;if(price1){m.children[J3X.N2l].innerHTML=message;}
this.positionSticky(m);}
else{m.style.display=n5m;m.children[J3X.N2l].innerHTML=o3m;}
}
this.runAppend(c0m,arguments);}
;STXChart.prototype.clearMeasure=function(){var s5m="easure",m=$$((J3X.g2m+w9l+s5m));if(m){if(J3X.C7E(m.className,E6l))m.className=E6l;m.innerHTML=o3m;}
}
;STXChart.prototype.drawTemporaryPanel=function(){var D8m="stx_panel_drag",borderEdge=Math.round(J3X.t7E(STXChart.resizingPanel.right,J3X.r2l))+A6l;STX.clearCanvas(this.chart.tempCanvas,this);var y=J3X.O7E(STXChart.crosshairY,this.top);this.plotLine(STXChart.resizingPanel.left,borderEdge,y,y,this.canvasStyle(D8m),I9l,this.chart.tempCanvas.context,Y4m,{}
);STXChart.resizingPanel.handle.style.top=(J3X.U7E(y,STXChart.resizingPanel.handle.offsetHeight/J3X.k2l))+(g1m+J3X.p6m);}
;STXChart.prototype.setTrashCan=function(){if(STX.touchDevice){var m=this.controls.mSticky;if(m){m.style.display=d5l;m.children[J3X.N2l].style.display=n5m;m.children[J3X.e2l].style.display=(G6m+B5l+M5l+N1m+I4l+J3X.S2m+w2m+M6l);if(m.children[J3X.k2l])m.children[J3X.k2l].style.display=n5m;m.style.top=(J3X.X8E(this.backOutY(STXChart.crosshairY),b4m))+x8m;m.style.right=J3X.d8E(this.chart.canvasWidth,(this.backOutX(STXChart.crosshairX)-i4m),x8m);}
}
}
;STXChart.prototype.pixelFromBar=function(bar,chart){if(!chart)chart=this.chart;var x=J3X.N2l;if(this.chart.dataSegment&&this.chart.dataSegment[bar]&&this.chart.dataSegment[bar].leftOffset){x=this.chart.dataSegment[bar].leftOffset;}
else{x=J3X.v8E((bar+A6l),this.layout.candleWidth);}
x=chart.panel.left+Math.floor(x+this.micropixels)-J3X.e2l;return x;}
;STXChart.prototype.barFromPixel=function(x,chart){if(!chart)chart=this.chart;if(J3X.E8E(this.layout.chartType,"volume_candle")){var pixel=J3X.N8E(x,chart.panel.left,this.micropixels),mult=2,bar=Math.round(J3X.y8E(this.chart.dataSegment.length,mult)),rightofLastTick=this.chart.dataSegment[J3X.n8E(this.chart.dataSegment.length,1)].leftOffset+J3X.I8E(this.chart.dataSegment[this.chart.dataSegment.length-1].candleWidth,2);if(J3X.H8E(pixel,rightofLastTick)){return this.chart.dataSegment.length+Math.floor(J3X.P8E((x-rightofLastTick-chart.panel.left-this.micropixels),this.layout.candleWidth));}
else{for(var i=1;J3X.c8E(i,this.chart.dataSegment.length);i++){mult*=2;if(!this.chart.dataSegment[bar])break;var left=J3X.x8E(this.chart.dataSegment[bar].leftOffset,this.chart.dataSegment[bar].candleWidth/2),right=this.chart.dataSegment[bar].leftOffset+J3X.Y8E(this.chart.dataSegment[bar].candleWidth,2);if(J3X.B8E(bar,0)||(J3X.Z8E(pixel,left)&&J3X.V8E(pixel,right)))break;else if(J3X.K8E(pixel,left))bar-=Math.max(1,Math.round(J3X.Q4E(this.chart.dataSegment.length,mult)));else bar+=Math.max(1,Math.round(J3X.M4E(this.chart.dataSegment.length,mult)));bar=Math.max(0,Math.min(J3X.v4E(this.chart.dataSegment.length,1),bar));}
if(!this.chart.dataSegment[bar]){for(i=0;J3X.E4E(i,this.chart.dataSegment.length);i++){if(!this.chart.dataSegment[i])continue;if(J3X.N4E(pixel,this.chart.dataSegment[i].leftOffset-this.chart.dataSegment[i].candleWidth/2))return Math.max(0,J3X.b4E(i,1));else if(J3X.w4E(pixel,this.chart.dataSegment[i].leftOffset+this.chart.dataSegment[i].candleWidth/2))return i;else if(J3X.o4E(pixel,this.chart.dataSegment[i].leftOffset+this.chart.dataSegment[i].candleWidth/2))return i+1;}
}
}
return bar;}
else{return Math.floor(J3X.T4E((x-chart.panel.left-this.micropixels),this.layout.candleWidth));}
}
;STXChart.prototype.tickFromPixel=function(x,chart){if(!chart)chart=this.chart;var tick=J3X.i4E(chart.dataSet.length,chart.scroll,1);if(J3X.c4E(this.layout.chartType,"volume_candle")){tick+=this.barFromPixel(x,chart);}
else{tick+=Math.floor(J3X.x4E((x-chart.panel.left-this.micropixels),this.layout.candleWidth));}
return tick;}
;STXChart.prototype.pixelFromTick=function(tick,chart){if(!chart)chart=this.chart;var bar=J3X.Y4E(tick,chart.dataSet.length,chart.scroll,1);if(this.chart.dataSegment&&this.chart.dataSegment[bar]&&this.chart.dataSegment[bar].leftOffset){return chart.panel.left+Math.floor(this.chart.dataSegment[bar].leftOffset+this.micropixels)-1;}
else{var rightOffset=0,dsTicks=0;if(this.chart.dataSegment&&this.chart.dataSegment[J3X.t4E(this.chart.dataSegment.length,1)]&&this.chart.dataSegment[J3X.O4E(this.chart.dataSegment.length,1)].leftOffset){if(J3X.U4E(this.chart.dataSegment.length,tick-chart.dataSet.length+chart.scroll)){rightOffset=J3X.X5E(this.chart.dataSegment[this.chart.dataSegment.length-1].leftOffset,this.chart.dataSegment[this.chart.dataSegment.length-1].candleWidth/2);dsTicks=this.chart.dataSegment.length;}
}
return rightOffset+chart.panel.left+Math.floor(J3X.d5E((tick-dsTicks-chart.dataSet.length+chart.scroll-0.5),this.layout.candleWidth)+this.micropixels)-1;}
}
;STXChart.prototype.pixelFromDate=function(date,chart){return this.pixelFromTick(this.tickFromDate(date,chart),chart);}
;STXChart.prototype.priceFromPixel=function(y,panel,yAxis){if(!panel)panel=this.chart.panel;var chart=panel.chart,yax=yAxis?yAxis:panel.yAxis;y=J3X.r5E(yax.bottom,y);var price=yax.low+(J3X.F5E(y,yax.multiplier));if(yax.semiLog){var logPrice=yax.logLow+(J3X.R5E(y,yax.logShadow,yax.height));price=Math.pow(10,logPrice);}
return price;}
;STXChart.prototype.valueFromPixel=function(y,panel,yAxis){if(!panel)panel=this.whichPanel(y);var p=this.priceFromPixel(y,panel,yAxis);return p;}
;STXChart.prototype.valueFromPixelUntransform=function(y,panel,yAxis){if(!panel)panel=this.whichPanel(y);if(!panel){if(J3X.b5E(y,J3X.N2l)){panel=this.panels[STX.first(this.panels)];}
else{panel=this.panels[STX.last(this.panels)];}
}
var p=this.priceFromPixel(y,panel,yAxis);if(panel.chart.untransformFunc&&J3X.w5E(panel.name,panel.chart.name)){p=panel.chart.untransformFunc(this,panel.chart,p);}
return p;}
;STXChart.prototype.pixelFromPriceTransform=function(price,panel,yAxis){if(panel.chart.transformFunc)price=panel.chart.transformFunc(this,panel.chart,price,yAxis);return this.pixelFromPrice(price,panel,yAxis);}
;STXChart.prototype.pixelFromPrice=function(price,panel,yAxis){if(!panel)panel=this.chart.panel;var yax=yAxis?yAxis:panel.yAxis,y=J3X.o5E((yax.high-price),yax.multiplier);if(yax.semiLog){var p=Math.max(price,0),logPrice=J3X.T5E(Math.log(p),Math.LN10),height=yax.height;y=J3X.i5E(height,height*(logPrice-yax.logLow)/yax.logShadow);}
y+=yax.top;return y;}
;STXChart.prototype.pixelFromValueAdjusted=function(panel,tick,value,yAxis){if(this.layout.adj||!this.charts[panel.name])return this.pixelFromPriceTransform(value,panel,yAxis);var a=Math.round(tick),ratio;if(J3X.h5E(a,0)&&J3X.J5E(a,panel.chart.dataSet.length)&&(ratio=panel.chart.dataSet[a].ratio)){return this.pixelFromPriceTransform(J3X.W5E(value,ratio),panel,yAxis);}
return this.pixelFromPriceTransform(value,panel,yAxis);}
;STXChart.prototype.adjustIfNecessary=function(panel,tick,value){if(this.layout.adj)return value;if(!panel||!this.charts[panel.name])return value;var a=Math.round(tick),ratio;if(J3X.C5E(a,0)&&J3X.t5E(a,panel.chart.dataSet.length)&&(ratio=panel.chart.dataSet[a].ratio)){return J3X.O5E(value,ratio);}
return value;}
;STXChart.prototype.setTransform=function(chart,transformFunction,untransformFunction){chart.transformFunc=transformFunction;chart.untransformFunc=untransformFunction;}
;STXChart.prototype.unsetTransform=function(chart){delete  chart.transformFunc;delete  chart.untransformFunc;for(var i=0;J3X.U5E(i,chart.dataSet.length);i++){chart.dataSet[i].transform=null;}
}
;STXChart.prototype.undo=function(){var Y3m="undo";if(this.runPrepend(Y3m,arguments))return ;if(this.activeDrawing){this.activeDrawing.abort();this.activeDrawing=J3X.U2m;STX.clearCanvas(this.chart.tempCanvas,this);this.draw();STX.swapClassName(this.controls.crossX,G8l,n4l);STX.swapClassName(this.controls.crossY,G8l,n4l);STXChart.drawingLine=Y4m;}
this.runAppend(Y3m,arguments);}
;STXChart.prototype.undoStamp=function(){this.undoStamps.push(STX.shallowClone(this.drawingObjects));}
;STXChart.prototype.undoLast=function(){if(this.activeDrawing){this.undo();}
else{if(this.undoStamps.length){this.drawingObjects=this.undoStamps.pop();this.changeOccurred("vector");this.draw();}
}
}
;STXChart.prototype.addDrawing=function(drawing){this.undoStamp();this.drawingObjects.push(drawing);}
;STXChart.prototype.plotLine=function(x0,x1,y0,y1,color,type,context,confineToPanel,parameters){var E8l="ray";if(!parameters)parameters={}
;if(J3X.X6E(parameters.pattern,"none"))return ;if(J3X.d6E(confineToPanel,true))confineToPanel=this.chart.panel;if(J3X.r6E(context,null)||typeof (context)=="undefined")context=this.chart.context;if(isNaN(x0)||isNaN(x1)||isNaN(y0)||isNaN(y1)){return ;}
var edgeTop=0,edgeBottom=this.chart.canvasHeight,edgeLeft=0,edgeRight=this.right;if(confineToPanel){edgeBottom=confineToPanel.yAxis.bottom;edgeTop=confineToPanel.yAxis.top;edgeLeft=confineToPanel.left;edgeRight=confineToPanel.right;}
var bigX,bigY,v;if(J3X.F6E(type,(E8l))){bigX=10000000;if(J3X.R6E(x1,x0))bigX=-10000000;v={"x0":x0,"x1":x1,"y0":y0,"y1":y1}
;bigY=STX.yIntersection(v,bigX);x1=bigX;y1=bigY;}
if(J3X.j6E(type,"line")||J3X.p6E(type,"horizontal")||J3X.u6E(type,"vertical")){bigX=10000000;var littleX=-10000000;v={"x0":x0,"x1":x1,"y0":y0,"y1":y1}
;bigY=STX.yIntersection(v,bigX);var littleY=STX.yIntersection(v,littleX);x0=littleX;x1=bigX;y0=littleY;y1=bigY;}
var t0=0.0,t1=1.0,xdelta=J3X.S6E(x1,x0),ydelta=J3X.L6E(y1,y0),p,q,r;for(var edge=0;J3X.g6E(edge,4);edge++){if(J3X.z6E(edge,0)){p=-xdelta;q=-(J3X.G6E(edgeLeft,x0));}
if(J3X.m6E(edge,1)){p=xdelta;q=(J3X.l6E(edgeRight,x0));}
if(J3X.q6E(edge,2)){p=-ydelta;q=-(J3X.D6E(edgeTop,y0));}
if(J3X.f6E(edge,3)){p=ydelta;q=(J3X.a0i(edgeBottom,y0));}
r=J3X.s0i(q,p);if((y1||J3X.k0i(y1,0))&&J3X.e0i(p,0)&&J3X.A0i(q,0)){return false;}
if(J3X.y0i(p,0)){if(J3X.n0i(r,t1))return false;else if(J3X.I0i(r,t0))t0=r;}
else if(J3X.H0i(p,0)){if(J3X.P0i(r,t0))return false;else if(J3X.c0i(r,t1))t1=r;}
}
var x0clip=x0+J3X.x0i(t0,xdelta),y0clip=y0+J3X.Y0i(t0,ydelta),x1clip=x0+J3X.B0i(t1,xdelta),y1clip=y0+J3X.Z0i(t1,ydelta);if(!y1&&J3X.V0i(y1,0)&&!y0&&J3X.K0i(y0,0)){y0clip=edgeTop;y1clip=edgeBottom;x0clip=v.x0;x1clip=v.x0;if(J3X.Q3i(v.x0,edgeRight))return false;if(J3X.M3i(v.x0,edgeLeft))return false;}
else if(!y1&&J3X.v3i(y1,0)){if(J3X.E3i(v.y0,v.y1))y1clip=edgeBottom;else y1clip=edgeTop;x0clip=v.x0;x1clip=v.x0;if(J3X.N3i(v.x0,edgeRight))return false;if(J3X.b3i(v.x0,edgeLeft))return false;}
context.lineWidth=1.1;if(typeof (color)=="object"){context.strokeStyle=color.color;if(color.opacity)context.globalAlpha=color.opacity;else context.globalAlpha=1;context.lineWidth=parseInt(STX.stripPX(color.width));}
else{if(!color||J3X.w3i(color,(G4l+h3m+i3m+w2m))||STX.isTransparent(color)){context.strokeStyle=this.defaultColor;}
else{context.strokeStyle=color;}
}
if(parameters.opacity)context.globalAlpha=parameters.opacity;if(parameters.lineWidth)context.lineWidth=parameters.lineWidth;if(J3X.o3i(type,"zig zag"))context.lineWidth=5;var pattern=null;if(parameters.pattern){pattern=parameters.pattern;if(J3X.T3i(pattern,"solid")){pattern=null;}
else if(J3X.i3i(pattern,"dotted")){pattern=[context.lineWidth,context.lineWidth];}
else if(J3X.h3i(pattern,(n2l))){pattern=[J3X.J3i(context.lineWidth,5),J3X.W3i(context.lineWidth,5)];}
}
context.stxLine(x0clip,y0clip,x1clip,y1clip,context.strokeStyle,context.globalAlpha,context.lineWidth,pattern);context.globalAlpha=1;context.lineWidth=1;}
;STXChart.prototype.connectTheDots=function(points,color,type,context,confineToPanel,parameters){if(!parameters)parameters={}
;if(J3X.C3i(parameters.pattern,"none"))return ;if(J3X.t3i(confineToPanel,true))confineToPanel=this.chart.panel;if(J3X.O3i(context,null)||typeof (context)=="undefined")context=this.chart.context;if(J3X.U3i(points.length,4))return ;var edgeTop=0,edgeBottom=this.chart.canvasHeight,edgeLeft=0,edgeRight=this.chart.width;if(confineToPanel){edgeBottom=confineToPanel.yAxis.bottom;edgeTop=confineToPanel.yAxis.top;}
context.lineWidth=1.1;if(typeof (color)=="object"){context.strokeStyle=color.color;if(color.opacity)context.globalAlpha=color.opacity;else context.globalAlpha=1;context.lineWidth=parseInt(STX.stripPX(color.width));}
else{if(!color||J3X.X1i(color,"auto")||STX.isTransparent(color)){context.strokeStyle=this.defaultColor;}
else{context.strokeStyle=color;}
}
if(parameters.opacity)context.globalAlpha=parameters.opacity;if(parameters.lineWidth)context.lineWidth=parameters.lineWidth;var pattern=null;if(parameters.pattern){pattern=parameters.pattern;if(J3X.d1i(pattern,"solid")){pattern=null;}
else if(J3X.r1i(pattern,"dotted")){pattern=[context.lineWidth,context.lineWidth];}
else if(J3X.F1i(pattern,"dashed")){pattern=[J3X.R1i(context.lineWidth,5),J3X.j1i(context.lineWidth,5)];}
}
context.beginPath();for(var i=0;J3X.p1i(i,points.length-2);i+=2){var x0=points[i],y0=points[i+1],x1=points[i+2],y1=points[i+3];if(isNaN(x0)||isNaN(x1)||isNaN(y0)||isNaN(y1))return ;var t0=0.0,t1=1.0,xdelta=J3X.u1i(x1,x0),ydelta=J3X.S1i(y1,y0),p,q,r;for(var edge=0;J3X.L1i(edge,4);edge++){if(J3X.g1i(edge,0)){p=-xdelta;q=-(J3X.z1i(edgeLeft,x0));}
if(J3X.G1i(edge,1)){p=xdelta;q=(J3X.m1i(edgeRight,x0));}
if(J3X.l1i(edge,2)){p=-ydelta;q=-(J3X.q1i(edgeTop,y0));}
if(J3X.D1i(edge,3)){p=ydelta;q=(J3X.f1i(edgeBottom,y0));}
r=J3X.a2i(q,p);if((y1||J3X.s2i(y1,0))&&J3X.k2i(p,0)&&J3X.e2i(q,0)){return false;}
if(J3X.A2i(p,0)){if(J3X.y2i(r,t1))return false;else if(J3X.n2i(r,t0))t0=r;}
else if(J3X.I2i(p,0)){if(J3X.H2i(r,t0))return false;else if(J3X.P2i(r,t1))t1=r;}
}
var x0clip=x0+J3X.c2i(t0,xdelta),y0clip=y0+J3X.x2i(t0,ydelta),x1clip=x0+J3X.Y2i(t1,xdelta),y1clip=y0+J3X.B2i(t1,ydelta);try{if(pattern){context.dashedLineTo(x0clip,y0clip,x1clip,y1clip,pattern);}
else{context.moveTo(x0clip,y0clip);context.lineTo(x1clip,y1clip);}
}
catch(e){}
}
context.stroke();context.closePath();context.globalAlpha=1;context.lineWidth=1;}
;STXChart.prototype.plotSpline=function(points,tension,color,type,context,confineToPanel,parameters){var z8m="hed",Q9l="da";if(!parameters)parameters={}
;if(J3X.Z2i(parameters.pattern,(J3X.r2m+w2m+J3X.r2m+M5l)))return ;if(J3X.V2i(confineToPanel,true))confineToPanel=this.chart.panel;if(J3X.K2i(context,null)||typeof (context)=="undefined")context=this.chart.context;context.save();context.lineWidth=1.1;if(typeof (color)=="object"){context.strokeStyle=color.color;if(color.opacity)context.globalAlpha=color.opacity;else context.globalAlpha=1;context.lineWidth=parseInt(STX.stripPX(color.width));}
else{if(!color||J3X.Q9i(color,"auto")||STX.isTransparent(color)){context.strokeStyle=this.defaultColor;}
else{context.strokeStyle=color;}
}
if(parameters.opacity)context.globalAlpha=parameters.opacity;if(parameters.lineWidth)context.lineWidth=parameters.lineWidth;var pattern=null;if(parameters.pattern){pattern=parameters.pattern;if(J3X.M9i(pattern,"solid")){pattern=null;}
else if(J3X.v9i(pattern,"dotted")){pattern=[context.lineWidth,context.lineWidth];}
else if(J3X.E9i(pattern,(Q9l+w1m+z8m))){pattern=[J3X.N9i(context.lineWidth,5),J3X.b9i(context.lineWidth,5)];}
}
if(pattern&&context.setLineDash){context.setLineDash(pattern);context.lineDashOffset=0;}
plotSpline(points,tension,context);context.restore();}
;STXChart.prototype.drawingClick=function(panel,x,y){var o1m="win",j4l="ir_d",z8l="cr",s7l="air",y8l="ssh";if(!this.activeDrawing){if(!panel)return ;var Factory=STXChart.drawingTools[this.currentVectorParameters.vectorType];if(!Factory){if(STX.Drawing[this.currentVectorParameters.vectorType]){Factory=STX.Drawing[this.currentVectorParameters.vectorType];STXChart.registerDrawingTool(this.currentVectorParameters.vectorType,Factory);}
}
if(Factory){this.activeDrawing=new Factory();this.activeDrawing.construct(this,panel);if(!this.charts[panel.name]){if(this.activeDrawing.chartsOnly){this.activeDrawing=J3X.U2m;return ;}
}
}
}
if(this.activeDrawing){if(this.userPointerDown&&!this.activeDrawing.dragToDraw){if(!STXChart.drawingLine)this.activeDrawing=J3X.U2m;return ;}
var tick=this.tickFromPixel(x,panel.chart),dpanel=this.panels[this.activeDrawing.panelName],value=this.adjustIfNecessary(dpanel,tick,this.valueFromPixelUntransform(y,dpanel));if(this.preferences.magnet&&this.magnetizedPrice){value=this.adjustIfNecessary(dpanel,tick,this.magnetizedPrice);}
if(this.activeDrawing.click(this.chart.tempCanvas.context,tick,value)){if(this.activeDrawing){STXChart.drawingLine=Y4m;STX.clearCanvas(this.chart.tempCanvas,this);this.addDrawing(this.activeDrawing);this.activeDrawing=J3X.U2m;this.adjustDrawings();this.draw();this.changeOccurred(m7l);STX.swapClassName(this.controls.crossX,G8l,n4l);STX.swapClassName(this.controls.crossY,(B4l+J3X.p6m+f5l+s5l+M6m+y8l+s7l),n4l);}
}
else{this.changeOccurred(N4l);STXChart.drawingLine=Q9m;STX.swapClassName(this.controls.crossX,n4l,G8l);STX.swapClassName(this.controls.crossY,(w1m+i3m+J3X.p6m+f5l+z8l+w2m+x4l+j9m+G4l+j4l+d1m+G4l+o1m+f9m),G8l);}
return Q9m;}
return Y4m;}
;STXChart.prototype.whichPanel=function(y){for(var p in this.panels){var panel=this.panels[p];if(panel.hidden)continue;if(J3X.w9i(y,panel.top)&&J3X.o9i(y,panel.bottom))return panel;}
return J3X.U2m;}
;STXChart.prototype.mouseup=function(e){if(this.runPrepend(n4m,arguments))return ;if(this.repositioningDrawing){if(!this.currentVectorParameters.vectorType||(J3X.T9i(Date.now()-this.mouseTimer,z6m))){this.changeOccurred(m7l);STX.clearCanvas(this.chart.tempCanvas,this);this.repositioningDrawing=J3X.U2m;this.adjustDrawings();this.draw();return ;}
else{this.repositioningDrawing=Y4m;}
}
if(this.repositioningBaseline){this.repositioningBaseline=J3X.U2m;this.chart.panel.yAxis.scroll=J3X.i9i(this.pixelFromPriceTransform(this.chart.baseline.userLevel,this.chart.panel),(this.chart.panel.yAxis.top+this.chart.panel.yAxis.bottom)/J3X.k2l);this.draw();return ;}
var wasMouseDown=this.userPointerDown;this.userPointerDown=Y4m;if(!this.displayInitialized)return ;this.grabbingScreen=Y4m;if(J3X.h9i(this.openDialog,o3m)){if(STXChart.insideChart)STX.unappendClassName(this.container,C5l);return ;}
if(this.grabOverrideClick){STX.unappendClassName(this.container,C5l);this.grabOverrideClick=Y4m;return ;}
if(STXChart.insideChart)STX.unappendClassName(this.container,C5l);if(STXChart.resizingPanel){STX.clearCanvas(this.chart.tempCanvas,this);this.resizePanels();STXChart.resizingPanel=J3X.U2m;return ;}
if(!e)e=event;if((e.which&&J3X.J9i(e.which,J3X.k2l))||(e.button&&J3X.W9i(e.button,J3X.k2l))){if(this.anyHighlighted){this.rightClickHighlighted();if(e.preventDefault)e.preventDefault();e.stopPropagation();return Y4m;}
else{return Q9m;}
}
if(J3X.C9i(e.clientX,this.left)||J3X.t9i(e.clientX,this.right))return ;if(J3X.O9i(e.clientY,this.top)||J3X.U9i(e.clientY,this.bottom))return ;var cy=this.backOutY(e.clientY),cx=this.backOutX(e.clientX);if(wasMouseDown){this.drawingClick(this.currentPanel,cx,cy);}
if(!this.activeDrawing){if(this.callbacks.tap){(this.callbacks.tap)({stx:this,panel:this.currentPanel,x:cx,y:cy}
);}
}
this.runAppend(n4m,arguments);}
;STXChart.prototype.grabbingHand=function(){if(!this.allowScroll)return ;if(!this.grabbingScreen)return ;if(STX.touchDevice)return ;STX.appendClassName(this.container,C5l);}
;STXChart.prototype.mousedown=function(e){var b3m="own",M4l="mo";if(this.runPrepend("mousedown",arguments))return ;this.grabOverrideClick=false;if(J3X.X7i(this.openDialog,""))return ;if(!this.displayInitialized)return ;if(!this.displayCrosshairs)return ;if(!STXChart.insideChart)return ;if(this.manageTouchAndMouse&&e&&e.preventDefault)e.preventDefault();this.mouseTimer=Date.now();this.userPointerDown=true;if(!e)e=event;if((e.which&&J3X.d7i(e.which,2))||(e.button&&J3X.r7i(e.button,2))){return ;}
for(var p in this.panels){var panel=this.panels[p];if(panel.highlighted){STXChart.resizingPanel=panel;return ;}
}
var chart=this.currentPanel.chart;if(J3X.F7i(e.clientX,this.left)&&J3X.R7i(e.clientX,this.right)&&J3X.j7i(e.clientY,this.top)&&J3X.p7i(e.clientY,this.bottom)){if(this.repositioningDrawing)return ;for(var i=0;J3X.u7i(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];if(drawing.highlighted){if(this.ctrl){var Factory=STXChart.drawingTools[drawing.name],clonedDrawing=new Factory();clonedDrawing.reconstruct(this,drawing.serialize());this.drawingObjects.push(clonedDrawing);this.repositioningDrawing=clonedDrawing;clonedDrawing.repositioner=drawing.repositioner;return ;}
this.repositioningDrawing=drawing;return ;}
}
if(J3X.S7i(this.layout.chartType,"baseline_delta")&&J3X.L7i(chart.baseline.userLevel,false)){var y0=this.valueFromPixelUntransform(J3X.g7i(this.cy,5),this.currentPanel),y1=this.valueFromPixelUntransform(this.cy+5,this.currentPanel),x0=J3X.z7i(this.chart.right,parseInt(getComputedStyle(this.controls.baselineHandle).width,10));if(J3X.G7i(chart.baseline.actualLevel,y0)&&J3X.m7i(chart.baseline.actualLevel,y1)&&J3X.l7i(this.cx,x0)){this.repositioningBaseline={lastDraw:Date.now()}
;return ;}
}
this.drawingClick(this.currentPanel,this.cx,this.cy);if(this.activeDrawing&&this.activeDrawing.dragToDraw)return ;}
this.grabbingScreen=true;this.yToleranceBroken=false;if(!e)e=event;this.grabStartX=e.clientX;this.grabStartY=e.clientY;this.grabStartScrollX=chart.scroll;this.grabStartScrollY=chart.panel.yAxis.scroll;this.grabStartCandleWidth=this.layout.candleWidth;this.grabStartZoom=this.whichYAxis(this.currentPanel).zoom;setTimeout((function(self){return function(){self.grabbingHand();}
;}
)(this),100);this.runAppend((M4l+Y2m+t4l+b3m),arguments);}
;STXChart.prototype.changeVectorType=function(value){this.currentVectorParameters.vectorType=value;if(STXChart.drawingLine)this.undo();this.setCrosshairColors();if(STXChart.insideChart)this.doDisplayCrosshairs();}
;STXChart.prototype.rightClickOverlay=function(name){var m3m="rightClickOverlay";if(this.runPrepend(m3m,arguments))return ;var sd=this.overlays[name];if(sd.editFunction){sd.editFunction();}
else{this.removeOverlay(name);}
this.runAppend(m3m,arguments);}
;STXChart.prototype.removeOverlay=function(name){var x0m="removeOverlay";if(this.runPrepend(x0m,arguments))return ;var mySD;for(var o in this.overlays){var sd=this.overlays[o];if(sd.inputs.Field&&sd.inputs.Field.indexOf(name)!=-J3X.e2l){this.removeOverlay(sd.name);}
else if(J3X.q7i(sd.name,name)){mySD=sd;}
}
var study=this.layout.studies[name];STX.deleteRHS(STX.Studies.studyPanelMap,study);if(mySD)this.cleanupRemovedStudy(mySD);delete  this.overlays[name];this.displaySticky();this.createDataSet();this.changeOccurred(C2l);this.runAppend(x0m,arguments);}
;STXChart.prototype.addSeries=function(field,parameters,cb){var v9l="ie",k3m="Ser",V4m="dd";if(this.runPrepend("addSeries",arguments))return ;if(!parameters)parameters={}
;if(!parameters.chartName)parameters.chartName=this.chart.name;var obj={parameters:STX.clone(parameters),yValueCache:[],display:field}
;if(J3X.D7i("display",obj.parameters))obj.display=obj.parameters.display;if(obj.parameters.isComparison)obj.parameters.shareYAxis=true;if(!obj.parameters.chartType&&obj.parameters.color)obj.parameters.chartType="line";if(obj.parameters.chartType&&J3X.f7i(obj.parameters.chartType,"mountain"))obj.parameters.chartType="line";if(!obj.parameters.panel)obj.parameters.panel=this.chart.panel.name;var chart=this.charts[parameters.chartName],self=this;function addSeriesData(stx){var J5l="efi",z1l="und",mIterator=0,cIterator=0;while(parameters.data&&J3X.a8i(mIterator,stx.masterData.length)&&J3X.s8i(cIterator,parameters.data.length)){var c=parameters.data[cIterator],m=stx.masterData[mIterator];if(!c.DT||typeof c.DT=="undefined")c.DT=STX.strToDateTime(c.Date);if(J3X.k8i(c.DT.getTime(),m.DT.getTime())){if(typeof c.Value!=(z1l+J5l+c4m+t4l)){m[field]=c.Value;}
else if(stx.layout.adj&&typeof c.Adj_Close!="undefined"){m[field]=c.Adj_Close;}
else{m[field]=c.Close;}
cIterator++;mIterator++;continue;}
if(J3X.e8i(c.DT,m.DT))cIterator++;else mIterator++;}
}
function setUpRenderer(stx,obj){var O8l="acy",T2m="leg";if(obj.parameters.color){var r=stx.getSeriesRenderer("_generic_series");if(!r){r=stx.setSeriesRenderer(new STX.Renderer.Lines({params:{panel:obj.parameters.panel,type:(T2m+O8l),name:"_generic_series",overChart:true}
,}
));}
r.attachSeries(field,obj.parameters).ready();}
}
if(chart){chart.series[field]=obj;}
if(parameters.isComparison){self.setComparison(true,chart);}
var doneInCallback=false;if(parameters.data){if(parameters.data.useDefaultQuoteFeed){var driver=this.quoteDriver,fetchParams=driver.makeParams(field,this.chart);fetchParams.startDate=this.chart.masterData[0].DT;fetchParams.endDate=this.chart.masterData[J3X.A8i(this.chart.masterData.length,1)].DT;if(parameters.symbolObject)fetchParams.symbolObject=parameters.symbolObject;doneInCallback=true;driver.quoteFeed.fetch(fetchParams,function(dataCallback){if(!dataCallback.error){parameters.data=dataCallback.quotes;addSeriesData(self);setUpRenderer(self,obj);}
if(cb)cb(dataCallback.error);self.runAppend("addSeries",arguments);}
);}
else if(this.masterData){addSeriesData(this);}
}
else{obj.addSeriesData=addSeriesData;}
if(!doneInCallback){setUpRenderer(self,obj);if(cb)cb();this.runAppend((G4l+V4m+k3m+v9l+w1m),arguments);}
return obj;}
;STXChart.prototype.removeSeries=function(field,chart){if(this.runPrepend("removeSeries",arguments))return ;if(!chart)chart=this.chart;delete  chart.series[field];var compare=false;for(var s in chart.series){if(chart.series[s].parameters.isComparison){compare=true;break;}
}
this.setComparison(compare,chart);for(var panel in this.panels){if(J3X.y8i(this.panels[panel].name.indexOf(STX.Comparison.correlationPanel),0)){var compareArray=this.layout.studies[this.panels[panel].name].inputs["Compare To"];for(var i=0;J3X.n8i(i,compareArray.length);i++){if(J3X.I8i(compareArray[i],field))compareArray.splice(i,1);}
delete  this.layout.studies[this.panels[panel].name].outputs["Result "+field];delete  this.layout.studies[this.panels[panel].name].outputMap["Result "+field+" "+this.panels[panel].name];if(!compareArray.length)this.panelClose(this.panels[panel]);}
}
this.runAppend("removeSeries",arguments);}
;STXChart.prototype.rendererAction=function(chart,phase){var I1m="rendererAction";if(this.runPrepend(I1m,arguments))return ;for(var id in chart.seriesRenderers){var renderer=chart.seriesRenderers[id];if(renderer.params.overChart&&J3X.H8i(phase,h8l))continue;if(!renderer.params.overChart&&J3X.P8i(phase,c1l))continue;if(!this.panels[renderer.params.panel])continue;if(J3X.c8i(this.panels[renderer.params.panel].chart,chart))continue;if(J3X.x8i(phase,j8l)){renderer.performCalculations();}
else{renderer.draw();if(renderer.cb)renderer.cb(renderer.colors);}
}
this.runAppend(I1m,arguments);}
;STXChart.prototype.drawSeries=function(chart,seriesArray,yAxis){var v1m="nta",B2l="ap",C1l="ga";if(this.runPrepend("drawSeries",arguments))return ;var quotes=chart.dataSegment,legendColorMap={}
,series=null;if(!seriesArray)seriesArray=chart.series;for(var field in seriesArray){series=seriesArray[field];var parameters=series.parameters;if(!parameters.chartType)continue;var panel=chart.panel;if(parameters.panel)panel=this.panels[parameters.panel];if(!panel)continue;var yax=yAxis?yAxis:panel.yAxis,minMax=[parameters.minimum,parameters.maximum];if((!parameters.minimum&&J3X.Y8i(parameters.minimum,0))||(!parameters.maximum&&J3X.B8i(parameters.maximum,0))){var minMaxCalc=STX.minMax(quotes,field);if(!parameters.minimum&&J3X.Z8i(parameters.minimum,0))minMax[0]=minMaxCalc[0];if(!parameters.maximum&&J3X.V8i(parameters.maximum,0))minMax[1]=minMaxCalc[1];}
var min=minMax[0],top=yax.top,bottom=yax.bottom,height=J3X.K8i(bottom,top),t=parameters.marginTop,b=parameters.marginBottom;if(t)top=J3X.Q4i(t,1)?(top+t):(top+(J3X.M4i(height,t)));if(b)bottom=J3X.v4i(b,1)?(J3X.E4i(bottom,b)):(J3X.N4i(bottom,(height*b)));var multiplier=J3X.b4i((bottom-top),(minMax[1]-min)),started=false,lastPoint=null,val=null,x=null,y=null,px=null,py=null,cw=this.layout.candleWidth,context=this.chart.context,isStep=(J3X.w4i(parameters.type,"step")||J3X.o4i(parameters.subtype,"step")),color=parameters.color;if(!color)color=this.defaultColor;var width=parameters.width;if(!width||isNaN(width)||J3X.T4i(width,1))width=1;if(series.highlight||series.parameters.highlight)width*=2;this.startClip(panel.name);seriesPlotter=new STX.Plotter();seriesPlotter.newSeries("line","stroke",color,1,width);if(parameters.gaps&&parameters.gaps.color)seriesPlotter.newSeries("gap","stroke",parameters.gaps.color,1,width);else seriesPlotter.newSeries("gap","stroke",color,1,width);series.yValueCache=new Array(quotes.length);var yValueCache=series.yValueCache,lastQuote=null,gap=null,points=[],doTransform=series.parameters.shareYAxis&&!yAxis,shareYAxis=series.parameters.shareYAxis||yAxis,xbase=J3X.i4i(panel.left,(isStep?1:0.5)*cw,this.micropixels,1),x0=xbase;for(var i=0;J3X.z4i(i,quotes.length);i++){xbase+=J3X.G4i(cw,2);if(isStep)xbase+=J3X.m4i(cw,2);cw=this.layout.candleWidth;if(!isStep)xbase+=J3X.l4i(cw,2);if(J3X.q4i(x,null)&&J3X.D4i(y,null)){if(!gap||parameters.gaps)points.push([x,y]);}
var quote=quotes[i];if(!quote)continue;if(quote.candleWidth){if(!isStep)xbase+=J3X.f4i((quote.candleWidth-cw),2);cw=quote.candleWidth;}
if(quote.transform&&doTransform)quote=quote.transform;val=quote[field];if(!val&&J3X.a5i(val,0)){if(isStep||parameters.gaps){yValueCache[i]=y;}
if(J3X.s5i(gap,false)){if(isStep){x+=cw;seriesPlotter.lineTo("line",x,y);}
seriesPlotter.moveTo("gap",x,y);}
gap=true;if(x&&!parameters.gaps)points.push([x,bottom]);continue;}
if(!isStep&&lastPoint&&J3X.k5i(lastPoint,i-1)){px=x;py=y;}
else{px=null;}
x=xbase;if(J3X.e5i(x,panel.right))lastQuote=quote;if(this.extendLastTick&&J3X.A5i(i,quotes.length-1)){x+=this.offset;}
if(isStep&&started){if(gap&&parameters.gaps&&parameters.gaps.pattern){seriesPlotter.dashedLineTo("gap",x,y,parameters.gaps.pattern);}
else if(gap&&!parameters.gaps){points.push([x,bottom]);seriesPlotter.moveTo((C1l+g1m),x,y);}
else if(!gap&&parameters.pattern){seriesPlotter.dashedLineTo("line",x,y,parameters.pattern);}
else{seriesPlotter.lineTo((gap?"gap":(B3m)),x,y);}
points.push([x,y]);}
if(shareYAxis){y=this.pixelFromPrice(val,panel,yax);}
else{y=J3X.y5i(bottom,((val-min)*multiplier));}
if(J3X.n5i(px,null)){var vector={x0:px,x1:x,y0:py,y1:y}
;for(;J3X.I5i(lastPoint,i);lastPoint++){var xInt=panel.left+Math.floor(xbase+J3X.H5i(((lastPoint-i)+0.5),cw))+this.micropixels-1,yInt=STX.yIntersection(vector,xInt);yValueCache[lastPoint]=yInt;}
}
yValueCache[i]=y;if(i&&points.length&&started&&!yValueCache[J3X.P5i(i,1)]&&J3X.c5i(yValueCache[i-1],0)){for(var bf=J3X.x5i(i,1);J3X.Y5i(bf,0);bf--){if(yValueCache[bf])break;yValueCache[bf]=points[J3X.B5i(points.length,1)][1];}
}
if(!started){started=true;var leftTick=J3X.Z5i(chart.dataSet.length,chart.scroll);if(J3X.V5i(leftTick,0)){seriesPlotter.moveTo((gap?"gap":"line"),x,y);}
else{var baseline=chart.dataSet[leftTick];if(baseline.transform&&doTransform)baseline=baseline.transform;var y0=baseline[field];if(shareYAxis){y0=this.pixelFromPrice(y0,panel,yax);}
else{y0=J3X.K5i(bottom,((y0-min)*multiplier));}
y0=Math.min(Math.max(y0,top),bottom);if(isNaN(y0)){seriesPlotter.moveTo((gap?"gap":"line"),x,y);}
else{seriesPlotter.moveTo((gap?"gap":(B3m)),x0,y0);if(isStep){if(gap){if(parameters.gaps)seriesPlotter.lineTo((f9m+B2l),x,y0);else seriesPlotter.moveTo("gap",x,y0);}
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
else if(!gap&&parameters.pattern){seriesPlotter.dashedLineTo("line",x,y,parameters.pattern);if(isStep&&J3X.Q6i(i,quotes.length-1))seriesPlotter.dashedLineTo("line",x+cw,y,parameters.pattern);}
else{seriesPlotter.lineTo((gap?"gap":"line"),x,y);if(isStep&&J3X.M6i(i,quotes.length-1)&&!gap)seriesPlotter.lineTo("line",x+cw,y);}
}
lastPoint=i;if(gap)seriesPlotter.moveTo((B5l+M5l),x,y);gap=false;}
if(gap){x=panel.left+Math.floor(xbase+cw+this.micropixels)-1;if(this.extendLastTick)x+=this.offset;if(parameters.gaps&&parameters.gaps.pattern){if(started){seriesPlotter.dashedLineTo("gap",x,y,parameters.gaps.pattern);}
}
else if(parameters.gaps){seriesPlotter.lineTo("gap",x,y);}
}
if(J3X.v6i(series.parameters.chartType,"mountain")&&points.length){points.push([x,(gap&&!parameters.gaps)?bottom:y]);if(!parameters.fillStyle){parameters.fillStyle=color;if(!parameters.fillOpacity)parameters.fillOpacity=0.3;}
seriesPlotter.newSeries("mountain","fill",parameters.fillStyle,parameters.fillOpacity);for(var pt=0;J3X.E6i(pt,points.length);pt++){seriesPlotter[pt?"lineTo":"moveTo"]((J3X.g2m+w2m+h3m+v1m+G6m),points[pt][0],Math.min(bottom,points[pt][1]));}
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
;STXChart.prototype.isDailyInterval=function(interval){if(J3X.N6i(interval,t7l))return Q9m;if(J3X.b6i(interval,(J3X.c6m+M5l+F3m)))return Q9m;if(J3X.w6i(interval,x2l))return Q9m;return Y4m;}
;STXChart.prototype.setPeriodicityV2=function(period,interval,timeUnit,cb){var G5m="yo",a9m="eDriv",Q4l="lba",m4l="Ca",h1m="ecau",I2m="ici",q9l="od",A5l="eri",s9m="cann";if(this.runPrepend("setPeriodicityV2",arguments))return ;if(typeof timeUnit==="function"){cb=timeUnit;timeUnit=null;}
var switchInterval=false;if(interval){if(J3X.o6i(interval,"year")){interval="month";if(!period)period=1;period=J3X.T6i(period,12);}
var getDifferentData=false;if(this.chart.symbol){var isDaily=this.isDailyInterval(interval),wasDaily=this.isDailyInterval(this.layout.interval);if(isDaily)timeUnit=null;else if(J3X.i6i(interval,"tick"))timeUnit=null;else if(!timeUnit)timeUnit="minute";if(J3X.h6i(isDaily,wasDaily)||this.dontRoll)getDifferentData=true;if(!wasDaily){if(J3X.J6i(this.layout.interval,interval))getDifferentData=true;}
if(J3X.W6i(timeUnit,this.layout.timeUnit))getDifferentData=true;}
if(getDifferentData){this.layout.interval=interval;this.layout.periodicity=period;this.layout.timeUnit=timeUnit;this.changeOccurred("layout");if(this.quoteDriver){for(var c in this.charts){if(this.charts[c].symbol)this.quoteDriver.newChart({symbol:this.charts[c].symbol,chart:this.charts[c]}
,cb);}
return ;}
else if(this.dataCallback){this.dataCallback();if(cb)cb(null);return ;}
else{console.log((s9m+w2m+i3m+n5l+s5l+j9m+G4l+J3X.r2m+n9l+n5l+g1m+A5l+q9l+I2m+i3m+f5m+n5l+I4l+h1m+w1m+M5l+n5l+J3X.r2m+M5l+H9m+i3m+j9m+w5l+n5l+t4l+G4l+i3m+G4l+m4l+J3X.S2m+Q4l+M6l+n5l+w2m+d1m+n5l+t1m+k5l+a9m+w5l+n5l+G4l+r9m+n5l+w1m+M5l+i3m));return ;}
}
this.layout.interval=interval;}
var chartName,chart;for(chartName in this.charts){chart=this.charts[chartName];var dt,pos=Math.round(J3X.C6i(chart.maxTicks,2));this.setCandleWidth(this.layout.candleWidth,chart);var centerMe=true,rightAligned=false;if(J3X.t6i(chart.scroll,chart.maxTicks))centerMe=false;else if(chart.dataSegment&&!chart.dataSegment[pos]){centerMe=false;rightAligned=J3X.O6i(chart.scroll,chart.dataSet.length);}
if(centerMe&&chart.dataSegment&&J3X.U6i(chart.dataSegment.length,0)){if(J3X.X09(chart.maxTicks,((Math.round((this.chart.width/this.layout.candleWidth)-0.499)-1)/2))){pos=J3X.d09(chart.dataSegment.length,1);}
if(J3X.r09(pos,chart.dataSegment.length)){dt=chart.dataSegment[J3X.F09(chart.dataSegment.length,1)].DT;pos=J3X.R09(chart.dataSegment.length,1);}
else{dt=chart.dataSegment[pos].DT;}
}
this.layout.periodicity=period;this.createDataSet();if(centerMe){if(chart.dataSegment&&J3X.j09(chart.dataSegment.length,0)){for(var i=J3X.p09(chart.dataSet.length,1);J3X.u09(i,0);i--){var nd=chart.dataSet[i].DT;if(J3X.S09(nd.getTime(),dt.getTime())){chart.scroll=(J3X.L09(chart.dataSet.length,i))+pos;break;}
}
}
}
else if(!rightAligned){var wsInTicks=Math.round(J3X.g09(this.preferences.whitespace,this.layout.candleWidth));chart.scroll=J3X.z09(chart.maxTicks,wsInTicks);}
else{chart.scroll=chart.dataSet.length+rightAligned;}
}
if(this.displayInitialized)this.draw();this.changeOccurred((s6m+G5m+t5l));if(this.quoteDriver){for(chartName in this.charts){chart=this.charts[chartName];if(chart.symbol&&chart.moreAvailable){this.quoteDriver.checkLoadMore(chart);}
}
}
if(cb)cb(null);this.runAppend("setPeriodicityV2",arguments);}
;STXChart.prototype.drawVectors=function(){if(this.vectorsShowing)return ;if(this.runPrepend("drawVectors",arguments))return ;this.vectorsShowing=true;if(!this.chart.hideDrawings){var tmpPanels={}
,panelName,i;for(i=0;J3X.G09(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];panelName=drawing.panelName;if(!this.panels[drawing.panelName])continue;if(!tmpPanels[panelName]){tmpPanels[panelName]=[];}
tmpPanels[panelName].push(drawing);}
for(panelName in tmpPanels){this.startClip(panelName);var arr=tmpPanels[panelName];for(i=0;J3X.m09(i,arr.length);i++){arr[i].render(this.chart.context);}
this.endClip();}
}
this.runAppend("drawVectors",arguments);}
;STXChart.prototype.consolidatedQuote=function(quotes,position,periodicity,interval,timeUnit,dontRoll,alignToHour){if(J3X.l09(position,0))return null;var arguments$=[quotes,position,periodicity,interval,dontRoll,alignToHour];if(this.runPrepend("consolidatedQuote",arguments$))return null;if(!dontRoll&&this.dontRoll)dontRoll=true;var quote=quotes[position];function consolidate(self,p){var ratio=1;if(self.layout.adj&&quotes[p].Adj_Close){ratio=J3X.q09(quotes[p].Adj_Close,quotes[p].Close);}
if(J3X.D09("High",quotes[p]))if(J3X.f09(quotes[p].High*ratio,quote.High))quote.High=J3X.a39(quotes[p].High,ratio);if(J3X.s39("Low",quotes[p]))if(J3X.k39(quotes[p].Low*ratio,quote.Low))quote.Low=J3X.e39(quotes[p].Low,ratio);quote.Volume+=quotes[p].Volume;if(J3X.A39("Close",quotes[p])&&J3X.y39(quotes[p].Close,null))quote.Close=J3X.n39(quotes[p].Close,ratio);quote.ratio=ratio;for(var element in quotes[p]){if(!quote[element]){quote[element]=quotes[p][element];}
}
}
function newInterval(p,interval){var d1=quotes[J3X.I39(p,1)].DT,d2=quotes[p].DT;if(J3X.H39(interval,"week")){if(J3X.P39(d2.getDay(),d1.getDay()))return true;}
else if(J3X.c39(interval,"month")){if(J3X.x39(d2.getMonth(),d1.getMonth()))return true;}
else{if(J3X.Y39(d2.getDay(),d1.getDay()))return true;}
return false;}
function newIntradayInterval(position,p,periodicity,interval,timeUnit){var nextBar=J3X.B39(interval,periodicity),d1=new Date(quotes[position].DT);if(J3X.Z39(timeUnit,"millisecond"))d1.setMilliseconds(d1.getMilliseconds()+nextBar);else if(J3X.V39(timeUnit,"second"))d1.setSeconds(d1.getSeconds()+nextBar);else d1.setMinutes(d1.getMinutes()+nextBar);var d2=quotes[p].DT;if(alignToHour){if(J3X.K39(quotes[position].DT.getMinutes(),nextBar)){if(J3X.Q19(d2.getMinutes()%nextBar,0)){return true;}
}
}
if(J3X.M19(d2.getTime(),d1.getTime()))return true;return false;}
var p=position,i;if((J3X.v19(interval,"week")||J3X.E19(interval,"month"))&&!dontRoll){for(i=1;J3X.N19(i,periodicity);i++){while(J3X.b19(p+1,quotes.length)&&!newInterval(p+1,interval)){p++;consolidate(this,p);}
if(J3X.w19(i,periodicity)){p++;if(J3X.o19(p,quotes.length))consolidate(this,p);}
}
}
else if(!this.isDailyInterval(interval)&&J3X.T19(interval,"tick")&&J3X.i19(periodicity,1)){for(i=1;J3X.h19(i,periodicity);i++){p=position+i;if(J3X.J19(p,quotes.length)&&newIntradayInterval(position,p,periodicity,interval,timeUnit)){p--;break;}
if(J3X.W19(p,0)&&J3X.C19(p,quotes.length)){consolidate(this,p);}
}
}
else{for(i=1;J3X.t19(i,periodicity);i++){p=position+i;if(J3X.O19(p,0)&&J3X.U19(p,quotes.length)){consolidate(this,p);}
}
}
for(i in this.plugins){var plugin=this.plugins[i];if(plugin.consolidate)plugin.consolidate(quotes,position,p,quote);}
this.runAppend("consolidatedQuote",arguments$);return {"quote":quote,"position":p+1}
;}
;N(J3X.N2l);u(J3X.e2l);T(J3X.k2l);L(J3X.p2l);J(J3X.S2l);W(J3X.f7m);C(Y7m);STXChart.prototype.displayChart=function(chart){var D7m="tt",w4m="do",i0m="spar",z7m="le_",o6l="x_cand",k7l="_up",d6l="ad",E2m="candl",P7l="_u",n0m="dle",o8m="w_",u5m="llo",b0m="_h",Q6m="ba",K9l="cha",l3m="e_",E0m="stx_",noBorders=(J3X.X29(this.layout.candleWidth-chart.tmpWidth,2)&&J3X.d29(chart.tmpWidth,3));if(this.runPrepend("displayChart",arguments))return ;this.chart.baseLegendColors=[];var chartType=this.layout.chartType,colorFunction=null;if(chart.customChart){if(chart.customChart.chartType)chartType=chart.customChart.chartType;if(chart.customChart.colorFunction)colorFunction=chart.customChart.colorFunction;}
this.controls.baselineHandle.style.display="none";var panel=chart.panel;if(J3X.r29(this.layout.aggregationType,"kagi")){this.drawKagiSquareWave(panel,"stx_kagi_up","stx_kagi_down");this.chart.baseLegendColors.push(this.getCanvasColor("stx_kagi_up"));this.chart.baseLegendColors.push(this.getCanvasColor("stx_kagi_down"));}
else if(J3X.F29(this.layout.aggregationType,"pandf")){this.drawPointFigureChart(panel,"stx_pandf_up","X");this.chart.baseLegendColors.push(this.getCanvasColor("stx_pandf_up"));this.drawPointFigureChart(panel,"stx_pandf_down","O");this.chart.baseLegendColors.push(this.getCanvasColor("stx_pandf_down"));}
else if(J3X.R29(chartType,"line")){this.drawLineChart(panel,"stx_line_chart");}
else if(J3X.j29(chartType,"mountain")){this.chart.baseLegendColors=null;this.drawMountainChart(panel);}
else if(J3X.p29(chartType,"wave")){this.drawWaveChart(panel);}
else if(J3X.u29(chartType,"bar")){this.startClip(panel.name);this.drawBarChartHighPerformance(panel,"stx_bar_chart");this.endClip();}
else if(J3X.S29(chartType,"colored_line")){this.startClip(panel.name);var stxLineUpColor=this.getCanvasColor("stx_line_up"),stxLineDownColor=this.getCanvasColor("stx_line_down"),stxLineColor=this.getCanvasColor("stx_line_chart");if(!colorFunction)colorFunction=function(stx,quote,mode){if(J3X.L29(quote.Close,quote.iqPrevClose))return stxLineUpColor;else if(J3X.g29(quote.Close,quote.iqPrevClose))return stxLineDownColor;else return stxLineColor;return null;}
;var colors1=this.drawLineChart(panel,(E0m+J3X.S2m+H9m+J3X.r2m+l3m+K9l+d1m+i3m),colorFunction);for(var c1 in colors1)this.chart.baseLegendColors.push(c1);this.endClip();}
else if(J3X.z29(chartType,"colored_bar")){this.startClip(panel.name);if(colorFunction){var colors2=this.drawBarChart(panel,"stx_bar_chart",colorFunction);for(var c2 in colors2)this.chart.baseLegendColors.push(c2);}
else{this.drawBarChartHighPerformance(panel,"stx_bar_up",STXChart.CLOSEUP);this.drawBarChartHighPerformance(panel,(w1m+i3m+J3X.p6m+f5l+Q6m+d1m+f5l+t4l+P5l+J3X.r2m),STXChart.CLOSEDOWN);this.drawBarChartHighPerformance(panel,"stx_bar_even",STXChart.CLOSEEVEN);this.chart.baseLegendColors.push(this.getCanvasColor("stx_bar_up"));this.chart.baseLegendColors.push(this.getCanvasColor("stx_bar_down"));}
this.endClip();}
else if(J3X.G29(chartType,"hollow_candle")||J3X.m29(chartType,"volume_candle")){this.startClip(panel.name);if(colorFunction){if(!this.noWicksOnCandles[this.layout.aggregationType])this.drawShadows(panel,colorFunction);this.drawCandles(panel,colorFunction,false);this.drawCandles(panel,colorFunction,true);}
else{if(!this.noWicksOnCandles[this.layout.aggregationType]){this.drawShadowsHighPerformance(panel,(w1m+a4m+b0m+w2m+u5m+o8m+s5l+l1l+n0m+P7l+g1m),STXChart.CLOSEUP);this.drawShadowsHighPerformance(panel,"stx_hollow_candle_down",STXChart.CLOSEDOWN);this.drawShadowsHighPerformance(panel,"stx_hollow_candle_even",STXChart.CLOSEEVEN);}
var colorUp=this.getCanvasColor("stx_hollow_candle_up"),colorDown=this.getCanvasColor("stx_hollow_candle_down"),colorEven=this.getCanvasColor("stx_hollow_candle_even");this.drawCandlesHighPerformance(panel,colorUp,"transparent",J3X.l29(STXChart.CLOSEUP,STXChart.CANDLEDOWN));this.drawCandlesHighPerformance(panel,colorDown,"transparent",J3X.q29(STXChart.CLOSEDOWN,STXChart.CANDLEDOWN));this.drawCandlesHighPerformance(panel,colorEven,"transparent",J3X.D29(STXChart.CLOSEEVEN,STXChart.CANDLEDOWN));this.drawCandlesHighPerformance(panel,this.containerColor,colorUp,J3X.f29(STXChart.CLOSEUP,STXChart.CANDLEUP));this.drawCandlesHighPerformance(panel,this.containerColor,colorDown,J3X.a99(STXChart.CLOSEDOWN,STXChart.CANDLEUP));this.drawCandlesHighPerformance(panel,this.containerColor,colorEven,J3X.s99(STXChart.CLOSEEVEN,STXChart.CANDLEUP));this.chart.baseLegendColors.push(colorUp);this.chart.baseLegendColors.push(colorDown);}
this.endClip();}
else if(J3X.k99(chartType,"candle")){this.startClip(panel.name);var coloredShadowUp=this.getCanvasColor((E0m+E2m+l3m+w1m+j9m+d6l+w2m+J3X.c6m+k7l)),coloredShadowDown=this.getCanvasColor("stx_candle_shadow_down"),coloredShadow=(J3X.e99(coloredShadowUp,coloredShadowDown));if(!colorFunction&&coloredShadow){var stxCandleShadow=this.getCanvasColor("stx_candle_shadow"),stxCandleUpColor=this.getCanvasColor("stx_candle_up"),stxCandleDownColor=this.getCanvasColor("stx_candle_down"),stxCandleUp=this.canvasStyle("stx_candle_up"),stxCandleDown=this.canvasStyle("stx_candle_down");colorFunction=function(stx,quote,mode){if(J3X.A99(mode,"shadow")){if(coloredShadow){if(J3X.y99(quote.Close,quote.Open))return coloredShadowUp;else if(J3X.n99(quote.Close,quote.Open))return coloredShadowDown;}
return stxCandleShadow;}
else if(J3X.I99(mode,"solid")){if(J3X.H99(quote.Close,quote.Open))return stxCandleUpColor;else if(J3X.P99(quote.Close,quote.Open))return stxCandleDownColor;else if(J3X.c99(quote.Close,quote.Open))return stxCandleShadow;}
else if(J3X.x99(mode,"outline")){var styleArray1;if(J3X.Y99(quote.Close,quote.Open))styleArray1=stxCandleUp;else if(J3X.B99(quote.Close,quote.Open))styleArray1=stxCandleDown;else return null;var borderColor=styleArray1["border-left-color"];if(!borderColor)borderColor=styleArray1.borderLeftColor;return borderColor;}
return null;}
;}
if(colorFunction){if(!this.noWicksOnCandles[this.layout.aggregationType])this.drawShadows(panel,colorFunction);this.drawCandles(panel,colorFunction,false);if(!noBorders)this.drawCandles(panel,colorFunction,true);}
else{if(!this.noWicksOnCandles[this.layout.aggregationType])this.drawShadowsHighPerformance(panel,(w1m+i3m+o6l+z7m+N8l+d6l+P5l));var styleArray=this.canvasStyle("stx_candle_up"),borderColor=styleArray["border-left-color"];if(!borderColor)borderColor=styleArray.borderLeftColor;if(noBorders)borderColor=null;this.drawCandlesHighPerformance(panel,this.getCanvasColor("stx_candle_up"),borderColor,STXChart.CANDLEUP);this.chart.baseLegendColors.push(styleArray.color);styleArray=this.canvasStyle("stx_candle_down");borderColor=styleArray["border-left-color"];if(!borderColor)borderColor=styleArray.borderLeftColor;if(noBorders)borderColor=null;this.drawCandlesHighPerformance(panel,this.getCanvasColor("stx_candle_down"),borderColor,STXChart.CANDLEDOWN);this.chart.baseLegendColors.push(styleArray.color);}
this.endClip();}
else if(J3X.Z99(chartType,"baseline_delta")){this.startClip(panel.name);this.setStyle("stx_baseline_trace","opacity",0);this.drawLineChart(panel,"stx_baseline_trace");var baseline=chart.baseline.actualLevel;if(J3X.V99(baseline,null)){baseline=this.pixelFromPriceTransform(baseline,chart.panel);var styles={"over":"stx_baseline_up","under":"stx_baseline_down"}
;for(var s in styles){var parameters={panelName:"chart",band:"Close",threshold:chart.baseline.actualLevel,color:this.getCanvasColor(styles[s]),direction:(J3X.K99(s,"over")?1:-1),edgeHighlight:this.getCanvasColor(styles[s]),edgeParameters:{pattern:"solid",lineWidth:parseInt(this.canvasStyle(styles[s]).width,10)+0.1,opacity:1}
}
,color=parameters.color;if(color&&J3X.Q79(color,(i3m+d1m+l1l+i0m+g5m))){var gradient=chart.context.createLinearGradient(0,(J3X.M79(s,"over")?0:J3X.v79(2,baseline)),0,baseline);gradient.addColorStop(0,STX.hexToRgba(color,60));gradient.addColorStop(1,STX.hexToRgba(color,10));parameters.color=gradient;parameters.opacity=1;}
STX.Studies.preparePeakValleyFill(this,chart.dataSegment,parameters);this.chart.baseLegendColors.push(color);}
this.plotLine(0,1,baseline,baseline,this.containerColor,"line",chart.context,true,{pattern:"solid",lineWidth:"1.1",opacity:1}
);this.plotLine(0,1,baseline,baseline,this.getCanvasColor("stx_baseline"),"line",chart.context,true,{pattern:(w4m+D7m+M5l+t4l),lineWidth:"2.1",opacity:0.5}
);if(J3X.E79(this.chart.baseline.userLevel,false)){this.controls.baselineHandle.style.top=J3X.N79(baseline,parseInt(getComputedStyle(this.controls.baselineHandle).height,10)/2,"px");this.controls.baselineHandle.style.left=J3X.y79(this.chart.right,parseInt(getComputedStyle(this.controls.baselineHandle).width,10),"px");this.controls.baselineHandle.style.display="block";}
}
this.endClip();}
else if(J3X.u79(chartType,"scatterplot")){this.startClip(panel.name);this.scatter(panel);this.endClip();}
else{this.chart.baseLegendColors=null;}
this.runAppend("displayChart",arguments);}
;STXChart.prototype.calculateATR=function(chart,period){if(!period)period=20;var total=0;for(var i=1;J3X.S79(i,chart.dataSet.length);i++){var prices=chart.dataSet[i],pd=chart.dataSet[J3X.L79(i,1)],trueRange=Math.max(Math.max(J3X.g79(prices.High,prices.Low),J3X.z79(prices.High,pd.Close)),J3X.G79(pd.Close,prices.Low));total+=trueRange;if(J3X.m79(i,period))total-=chart.dataSet[J3X.l79(i,period)].trueRange;prices.trueRange=trueRange;prices.atr=J3X.q79(total,period);}
}
;STXChart.prototype.currentQuote=function(){var quote=null;if(!this.chart.dataSet)return null;for(var i=J3X.D79(this.chart.dataSet.length,1);J3X.f79(i,0);i--)if(this.chart.dataSet[i])return this.chart.dataSet[i];return null;}
;STXChart.prototype.correctIfOffEdge=function(theChart){if(this.runPrepend("correctIfOffEdge",arguments))return ;for(var chartName in this.charts){var chart=this.charts[chartName],leftPad=Math.round(J3X.a89(chart.maxTicks,3));if(J3X.s89(leftPad,chart.dataSet.length))leftPad=chart.dataSet.length;if(chart.allowScrollPast){var rightPad=J3X.k89(chart.maxTicks,leftPad);if(J3X.e89(chart.maxTicks-rightPad,chart.dataSet.length)){rightPad=J3X.A89(chart.maxTicks,chart.dataSet.length);}
if(J3X.y89(chart.scroll-rightPad,chart.dataSet.length)){chart.scroll=chart.dataSet.length+rightPad;}
if(J3X.n89(chart.scroll,leftPad)){chart.scroll=leftPad;this.micropixels=-this.layout.candleWidth/2;}
}
else{if(J3X.I89(chart.scroll,leftPad)){chart.scroll=leftPad;}
if(J3X.H89(chart.scroll,chart.dataSet.length)){chart.scroll=chart.dataSet.length;}
}
this.preferences.whitespace=J3X.P89((chart.maxTicks-chart.scroll),this.layout.candleWidth);}
this.runAppend("correctIfOffEdge",arguments);}
;STXChart.prototype.createDataSegment=function(theChart){if(this.runPrepend("createDataSegment",arguments))return ;for(var chartName in this.charts){var chart=this.charts[chartName];if(theChart)chart=theChart;chart.baseline.actualLevel=chart.baseline.userLevel?chart.baseline.userLevel:chart.baseline.defaultLevel;chart.dataSegment=[];var position=J3X.c89(chart.dataSet.length,chart.scroll,1);for(var i=-1;J3X.G89(i,chart.scroll)&&J3X.m89(i,chart.maxTicks);i++){position++;if(i==-1&&!chart.baseline.includeInDataSegment)continue;if(J3X.l89(position,chart.dataSet.length)&&J3X.q89(position,0)){if(chart.dataSet[position].candleWidth){chart.dataSet[position].candleWidth=null;chart.dataSet[position].leftOffset=null;}
chart.dataSegment.push(chart.dataSet[position]);if(J3X.D89(chart.baseline.actualLevel,null)&&J3X.f89(i,0))chart.baseline.actualLevel=chart.dataSet[position].iqPrevClose;}
else if(J3X.a49(position,0)){chart.dataSegment.push(null);}
}
if(J3X.s49(this.layout.chartType,"volume_candle")){var totalVolume=0;for(var v=0;J3X.k49(v,chart.dataSegment.length);v++){if(chart.dataSegment[v])totalVolume+=chart.dataSegment[v].Volume;}
var accumOffset=0;for(var w=0;J3X.e49(w,chart.dataSegment.length);w++){if(chart.dataSegment[w]){if(chart.dataSegment[w].Volume){var workingWidth=chart.width;if(J3X.A49(chart.scroll,chart.maxTicks))workingWidth-=this.preferences.whitespace;chart.dataSegment[w].candleWidth=J3X.y49(workingWidth,chart.dataSegment[w].Volume,totalVolume);chart.dataSegment[w].leftOffset=accumOffset+J3X.u49(chart.dataSegment[w].candleWidth,2);accumOffset+=chart.dataSegment[w].candleWidth;}
else{chart.dataSegment[w].candleWidth=this.layout.candleWidth;chart.dataSegment[w].leftOffset=accumOffset+J3X.S49(this.layout.candleWidth,2);accumOffset+=this.layout.candleWidth;}
}
else{accumOffset+=this.layout.candleWidth;}
}
}
if(theChart)break;}
this.runAppend("createDataSegment",arguments);}
;STXChart.prototype.leftTick=function(){return J3X.L49(this.chart.dataSet.length,this.chart.scroll);}
;STXChart.prototype.getStartDateOffset=function(){for(var ds=0;J3X.g49(ds,this.chart.dataSegment.length);ds++){if(this.chart.dataSegment[ds]){return ds;}
}
return 0;}
;STXChart.prototype.setStartDate=function(dt){for(var i=0;J3X.z49(i,this.chart.dataSet.length);i++){var bar=this.chart.dataSet[i];if(J3X.G49(bar.DT.getTime(),dt.getTime())){this.chart.scroll=J3X.m49(this.chart.dataSet.length,i);this.draw();return ;}
}
}
;STXChart.prototype.updateListeners=function(event){for(var i in this.plugins){var plugin=this.plugins[i];if(plugin.display&&plugin.listener)plugin.listener(this,event);}
}
;STXChart.prototype.clearPixelCache=function(){for(var x in this.panels){var panel=this.panels[x];panel.cacheHigh=null;panel.cacheLow=null;panel.cacheLeft=1000000;panel.cacheRight=-1;}
for(var chartName in this.charts){var chart=this.charts[chartName];if(!chart.dataSet)continue;for(var i=0;J3X.l49(i,chart.dataSet.length);i++){chart.dataSet[i].cache={}
;}
}
}
;STXChart.prototype.createYAxisLabel=function(panel,txt,y,backgroundColor,color,ctx,yAxis){var g5l="ft",g4l="FFF",J8l="F";if(J3X.q49(panel.yAxis.drawPriceLabels,false))return ;var yax=yAxis?yAxis:panel.yAxis,context=ctx?ctx:this.chart.context,margin=3,height=this.getCanvasFontSize("stx_yaxis")+J3X.D49(margin,2);this.canvasFont("stx_yaxis",context);var drawBorders=yax.displayBorder||this.axisBorders,tickWidth=drawBorders?3:0,width;try{width=context.measureText(txt).width+tickWidth+J3X.f49(margin,2);}
catch(e){width=yax.width;}
var x=J3X.a59(yax.left,margin,3),textx=x+margin+tickWidth,radius=3,position=(J3X.r59(yax.position,null)?panel.chart.yAxis.position:yax.position);if(J3X.F59(position,"left")){x=yax.left+yax.width+margin-3;width=width*-1;textx=x;radius=-3;context.textAlign="right";}
if(J3X.R59(y+(height/2),yax.bottom))y=J3X.j59(yax.bottom,(height/2));if(J3X.p59(y-(height/2),yax.top))y=yax.top+(J3X.u59(height,2));context.fillStyle=backgroundColor;if(typeof (STX[this.yaxisLabelStyle])=='undefined'){this.yaxisLabelStyle="roundRectArrow";}
var yaxisLabelStyle=this.yaxisLabelStyle;if(yax.yaxisLabelStyle)yaxisLabelStyle=yax.yaxisLabelStyle;STX[yaxisLabelStyle](context,x,J3X.S59(y,(height/2)),width,height,radius,true,false);context.textBaseline="middle";context.fillStyle=color?color:STX.chooseForegroundColor(backgroundColor);if(J3X.L59(context.fillStyle,backgroundColor)){if(J3X.g59(backgroundColor.toUpperCase(),"#FFFFFF"))context.fillStyle="#000000";else context.fillStyle=(C2m+J8l+J8l+g4l+J8l);}
context.fillText(txt,textx,y+1);context.textAlign=(W3m+g5l);}
;STXChart.prototype.createXAxisLabel=function(panel,txt,x,backgroundColor,color,pointed){var context=this.chart.context,margin=2,fontstyle="stx-float-date",height=this.getCanvasFontSize(fontstyle)+J3X.z59(margin,2);this.canvasFont(fontstyle,context);var width;try{width=context.measureText(txt).width+J3X.G59(margin,2);}
catch(e){width=0;}
var y=panel.top+panel.height-height;if(J3X.m59(x+(width/2),panel.right))x=J3X.l59(panel.right,(width/2));if(J3X.q59(x-(width/2),panel.left))x=panel.left+(J3X.D59(width,2));context.fillStyle=backgroundColor;STX.roundRect(context,J3X.f59(x,(width/2)),y,width,height,3,true,false);if(pointed){var arrowHeight=J3X.a69(panel.bottom,panel.yAxis.bottom,height);context.beginPath();context.moveTo(J3X.r69(x,arrowHeight),y);context.lineTo(x,J3X.F69(y,arrowHeight));context.lineTo(x+arrowHeight,y);context.closePath();context.fill();}
context.textBaseline="top";context.fillStyle=color?color:STX.chooseForegroundColor(backgroundColor);if(J3X.R69(context.fillStyle,backgroundColor)){if(J3X.j69(backgroundColor.toUpperCase(),"#FFFFFF"))context.fillStyle="#000000";else context.fillStyle="#FFFFFF";}
context.fillText(txt,J3X.p69(x,width/2,margin),y+margin);}
;STXChart.prototype.drawCurrentHR=function(){var s0m="hr",z9m="x_cu";if(this.runPrepend("drawCurrentHR",arguments))return ;var backgroundColor,color;for(var chartName in this.charts){var chart=this.charts[chartName],panel=chart.panel,yAxis=panel.yAxis;if(J3X.o69(yAxis.drawCurrentPriceLabel,false))continue;if(chart.customChart&&J3X.T69(chart.customChart.chartType,"none"))continue;var whichSet=yAxis.whichSet;if(!whichSet)whichSet="dataSet";var l=chart[whichSet].length;if(J3X.i69(whichSet,"dataSegment")){while(J3X.h69(l,(chart.width-this.micropixels+(this.layout.candleWidth)/2+1)/this.layout.candleWidth))l--;}
if(l){var quote=chart[whichSet][J3X.J69(l,1)],prevClose=quote.Close,currentClose=quote.Close;if(J3X.W69(chart.dataSet.length,2)){var quote2=chart[whichSet][J3X.C69(l,2)];prevClose=quote2.Close;}
if(J3X.t69(currentClose,prevClose)){backgroundColor=this.canvasStyle("stx_current_hr_down").backgroundColor;color=this.canvasStyle("stx_current_hr_down").color;}
else{backgroundColor=this.canvasStyle((B4l+z9m+d1m+d1m+M5l+J3X.r2m+i3m+f5l+s0m+f5l+h3m+g1m)).backgroundColor;color=this.canvasStyle("stx_current_hr_up").color;}
if(quote.transform)quote=quote.transform;var txt,labelDecimalPlaces=Math.max(panel.yAxis.printDecimalPlaces,panel.chart.decimalPlaces);if(yAxis.maxDecimalPlaces||J3X.O69(yAxis.maxDecimalPlaces,0))labelDecimalPlaces=Math.min(labelDecimalPlaces,yAxis.maxDecimalPlaces);if(yAxis.priceFormatter){txt=yAxis.priceFormatter(this,panel,quote.Close,labelDecimalPlaces);}
else{txt=this.formatYAxisPrice(quote.Close,panel,labelDecimalPlaces);}
var y=this.pixelFromPrice(quote.Close,panel);this.createYAxisLabel(panel,txt,y,backgroundColor,color);}
}
this.runAppend("drawCurrentHR",arguments);}
;STXChart.prototype.getDefaultColor=function(){var I7l=0.65,K9m="pa",v8m="ran";this.defaultColor=o0m;var bgColor=J3X.U2m,div=this.chart.container;while(!bgColor||STX.isTransparent(bgColor)){var cStyle=getComputedStyle(div);if(!cStyle)return ;bgColor=cStyle.backgroundColor;if(STX.isTransparent(bgColor))bgColor=(i3m+v8m+w1m+K9m+d1m+M5l+J3X.r2m+i3m);div=div.parentNode;if(!div||!div.tagName)break;}
if(bgColor){if(J3X.U69(bgColor,Z0m))bgColor=S8m;this.containerColor=bgColor;if(!STX.isTransparent(bgColor)){var hsv=STX.hsv(bgColor),v=hsv[J3X.k2l];if(J3X.X0F(v,I7l))this.defaultColor=o0m;else this.defaultColor=S8m;}
else{this.defaultColor=o0m;}
}
else{this.containerColor=S8m;}
}
;STXChart.prototype.startAsyncAction=function(){if(!this.pendingAsyncs)this.pendingAsyncs=[];this.pendingAsyncs.push(Q9m);}
;STXChart.prototype.registerChartDrawnCallback=function(fc){if(!this.asyncCallbacks)this.asyncCallbacks=[];this.asyncCallbacks.push(fc);return {fc:fc}
;}
;STXChart.prototype.unregisterChartDrawnCallback=function(obj){for(var i=0;J3X.d0F(i,this.asyncCallbacks.length);i++){if(J3X.r0F(this.asyncCallbacks[i],obj.fc)){this.asyncCallbacks.splice(i,1);return ;}
}
}
;STXChart.prototype.makeAsyncCallbacks=function(){if(!this.asyncCallbacks)return ;if(!this.pendingAsyncs||!this.pendingAsyncs.length){for(var i=0;J3X.F0F(i,this.asyncCallbacks.length);i++){(this.asyncCallbacks[i])();}
}
}
;STXChart.prototype.completeAsyncAction=function(){this.pendingAsyncs.pop();this.makeAsyncCallbacks();}
;STXChart.prototype.draw=function(){this.debug();if(!this.chart.canvas)return ;if(!this.chart.dataSet)return ;if(!this.chart.canvasHeight)return ;if(!this.useAnimation&&J3X.R0F(new Date()-this.grossDragging,500))return ;this.offset=J3X.j0F(this.layout.candleWidth,this.candleWidthPercent,2);STX.clearCanvas(this.chart.canvas,this);if(this.runPrepend("draw",arguments))return ;if(!this.xaxisHeight){this.xaxisHeight=this.getCanvasFontSize("stx_xaxis")+4;if(this.chart.xAxis.displayBorder||this.axisBorders)this.xaxisHeight+=3;}
this.getDefaultColor();this.vectorsShowing=false;this.drawPanels();this.yAxisLabels=[];var i,chart,chartName,plugin;for(chartName in this.charts){chart=this.charts[chartName];this.correctIfOffEdge();this.createDataSegment();var axisRepresentation=this.createXAxis(chart);this.initializeDisplay(chart);this.rendererAction(chart,"calculate");this.renderYAxis(chart);this.drawXAxis(chart,axisRepresentation);chart.tmpWidth=Math.floor(J3X.w0F(this.layout.candleWidth,this.candleWidthPercent));if(J3X.o0F(chart.tmpWidth%2,0)){chart.tmpWidth+=1;if(J3X.T0F(chart.tmpWidth,this.layout.candleWidth))chart.tmpWidth-=2;}
if(J3X.i0F(chart.tmpWidth,0.5))chart.tmpWidth=0.5;for(i in this.plugins){plugin=this.plugins[i];if(plugin.display){if(plugin.drawUnder)plugin.drawUnder(this,chart);}
}
this.rendererAction(chart,"underlay");STX.Studies.displayStudies(this,chart,true);this.displayChart(chart);STX.Studies.displayStudies(this,chart,false);this.rendererAction(chart,"overlay");}
for(chartName in this.charts){chart=this.charts[chartName];for(i in this.plugins){plugin=this.plugins[i];if(plugin.display){if(plugin.drawOver)plugin.drawOver(this,chart);}
}
}
for(var panel in this.panels){this.plotYAxisText(this.panels[panel]);}
for(var yLbl=0;J3X.h0F(yLbl,this.yAxisLabels.length);yLbl++){this.createYAxisLabel.apply(this,this.yAxisLabels[yLbl].args);}
this.createCrosshairs();this.drawVectors();this.drawCurrentHR();this.displayInitialized=true;if(this.controls.home){if(J3X.J0F(this.chart.scroll-1,Math.ceil(this.chart.width/this.layout.candleWidth))){this.controls.home.style.display="block";}
else{this.controls.home.style.display=(J3X.r2m+w2m+J3X.r2m+M5l);}
}
this.positionMarkers();for(chartName in this.charts){chart=this.charts[chartName];if(this.quoteDriver)this.quoteDriver.checkLoadMore(chart);}
this.runAppend("draw",arguments);this.makeAsyncCallbacks();}
;STXChart.prototype.adjustBackingStore=function(canvas,context){this.devicePixelRatio=window.devicePixelRatio||1;if(J3X.W0F(this.devicePixelRatio,1.0))this.devicePixelRatio=1.0;backingStoreRatio=context.webkitBackingStorePixelRatio||context.mozBackingStorePixelRatio||context.msBackingStorePixelRatio||context.oBackingStorePixelRatio||context.backingStorePixelRatio||1;var ratio=J3X.C0F(this.devicePixelRatio,backingStoreRatio);if(!STX.isAndroid||STX.is_chrome){var oldWidth=canvas.width,oldHeight=canvas.height;canvas.width=J3X.t0F(oldWidth,ratio);canvas.height=J3X.O0F(oldHeight,ratio);canvas.style.width=oldWidth+'px';canvas.style.height=oldHeight+'px';context.scale(ratio,ratio);}
}
;STXChart.prototype.resizeCanvas=function(){if(!this.chart.panel)this.chart.panel=this.panels.chart;var canvas=this.chart.canvas,context=this.chart.context;if(canvas&&context){this.chart.tempCanvas.height=canvas.height=this.chart.container.clientHeight;this.chart.tempCanvas.width=canvas.width=this.chart.container.clientWidth;this.adjustBackingStore(canvas,context);this.adjustBackingStore(this.chart.tempCanvas,this.chart.tempCanvas.context);this.floatCanvas.height=this.chart.container.clientHeight;this.floatCanvas.width=this.chart.container.clientWidth;this.adjustBackingStore(this.floatCanvas,this.floatCanvas.context);}
var rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.canvasWidth=this.chart.canvasWidth=this.chart.container.clientWidth;this.right=this.left+this.canvasWidth;this.height=this.chart.container.clientHeight;this.width=J3X.U0F(this.right,this.left);this.bottom=this.top+this.height;this.calculateYAxisPositions();this.chart.canvasRight=this.right;this.chart.canvasHeight=this.height;var candleWidth=this.layout.candleWidth;if(typeof (candleWidth)=="undefined")candleWidth=8;for(var chartName in this.charts){var chart=this.charts[chartName];if(this.layout.span){this.setCandleWidth(this.getSpanCandleWidth(this.layout.span),chart);}
else{this.setCandleWidth(candleWidth,chart);if(J3X.X3F(chart.scroll,chart.width/candleWidth)){chart.scroll=Math.floor(J3X.d3F(chart.width,candleWidth));var wsInTicks=Math.round(J3X.r3F(this.preferences.whitespace,this.layout.candleWidth));chart.scroll-=wsInTicks;}
}
var idealNumberOfTicks=10,appxLabelWidth;try{appxLabelWidth=J3X.F3F(context.measureText("10:00").width,2);}
catch(e){appxLabelWidth=100;}
while(J3X.R3F(idealNumberOfTicks,1)){if(J3X.j3F(this.chart.width/appxLabelWidth,idealNumberOfTicks))break;idealNumberOfTicks/=1.5;}
chart.xAxis.autoComputedTickSizePixels=Math.round(J3X.p3F(this.chart.width,idealNumberOfTicks));if(J3X.u3F(chart.xAxis.autoComputedTickSizePixels,1))chart.xAxis.autoComputedTickSizePixels=1;}
}
;STXChart.prototype.setCandleWidth=function(newCandleWidth,chart){var L5m=8865321,M2l=4074396,u2m=984866829,M8l=1215020997;var H1l=M8l,L1l=-u2m,T1l=J3X.k2l;for(var S1l=J3X.e2l;J3X.z3l.J3l(S1l.toString(),S1l.toString().length,M2l)!==H1l;S1l++){this.calculateYAxisPositions();context.beginPath();W(J3X.f7m);T1l+=J3X.k2l;}
if(J3X.z3l.J3l(T1l.toString(),T1l.toString().length,L5m)!==L1l){seriesPlotter.lineTo(B3m,x,y0);plotter.lineTo(K6m,obj.hz,b+b2l);d1.setSeconds(d1.getSeconds()+nextBar);delete  this.layout.studies[series];chart.xaxis.push(J3X.U2m);}
if(!chart)chart=this.chart;if(J3X.S3F(newCandleWidth,J3X.N2l))newCandleWidth=J3X.S2l;this.layout.candleWidth=newCandleWidth;chart.maxTicks=Math.ceil(J3X.L3F(this.chart.width,newCandleWidth)+0.5);}
;STXChart.prototype.resizeChart=function(maintainScroll){if(J3X.g3F(maintainScroll,Y4m))maintainScroll=Q9m;if(maintainScroll)this.preAdjustScroll();var previousHeight=this.chart.canvasHeight;this.resizeCanvas();if(maintainScroll)this.postAdjustScroll();this.adjustPanelPositions();if(this.displayInitialized){this.draw();}
else if(J3X.z3F(this.chart.canvasHeight,J3X.N2l)&&J3X.G3F(previousHeight,J3X.N2l)){this.draw();}
}
;STXChart.prototype.calculateMinutesInSession=function(chart){var r4m=(23<=(16.,13.97E2)?(49.,59):(103.4E1,109.)<(3.77E2,62.)?(98.,10):(26,98)),minutes=J3X.m3F((chart.endHour-chart.beginHour),b4m);minutes+=chart.endMinute;minutes-=chart.beginMinute;if(J3X.l3F(chart.endMinute,r4m))minutes++;chart.minutesInSession=minutes;}
;STXChart.prototype.newChart=function(symbol,masterData,chart,cb,params){var V5l="ured",k6l="ee",r5m="eF",i7l="pecif",m6m="rDa",c9l=(9.28E2<=(0x24A,9.64E2)?(88.7E1,"N"):(5.29E2,120)),y6m="rn",e3m=(130.3E1<=(43.30E1,37.5E1)?(23,0x90):(68,1.123E3)>=29.?(30,"W"):(55.,0x1D9)),I5m='object';if(!chart)chart=this.chart;if(!params)params={}
;if(params.periodicity){if(params.periodicity.interval)this.layout.interval=params.periodicity.interval;if(params.periodicity.period)this.layout.periodicity=params.periodicity.period;this.layout.timeUnit=params.periodicity.timeUnit;}
var prevSymbol=chart.symbol,prevSymbolObject=STX.clone(chart.symbolObject);if(!symbol){chart.symbol=J3X.U2m;chart.symbolObject={symbol:J3X.U2m}
;}
else if(typeof symbol==I5m){chart.symbol=symbol.symbol;chart.symbolObject=symbol;}
else{chart.symbol=symbol;chart.symbolObject.symbol=symbol;}
if((J3X.q3F(chart.endHour,J3X.U2m)&&J3X.D3F(chart.beginHour,J3X.U2m)&&J3X.f3F(chart.endMinute,J3X.U2m)&&J3X.a1F(chart.beginMinute,J3X.U2m))||(J3X.s1F(chart.endHour+chart.beginHour+chart.endMinute+chart.beginMinute,J3X.N2l))||this.automaticMarketHours){var hours=STX.LegacyMarket.getHours(chart.symbolObject.symbol,this.layout.extended);chart.endHour=hours.endHour;chart.beginHour=hours.beginHour;chart.endMinute=hours.endMinute;chart.beginMinute=hours.beginMinute;this.automaticMarketHours=Q9m;}
if(!masterData&&this.quoteDriver){var callback=function(err){if(err){chart.symbol=prevSymbol;chart.symbolObject=prevSymbolObject;}
if(cb)cb(err);}
;if(params.span&&params.span.multiplier&&params.span.base){this.setSpan({maintainPeriodicity:Q9m,multiplier:params.span.multiplier,span:params.span.base,symbol:chart.symbol}
,callback);}
else{var self=this;this.quoteDriver.newChart({symbol:chart.symbol,chart:chart,initializeChart:Q9m}
,function(){self.adjustPanelPositions();callback.apply(self,arguments);}
);}
}
else{if(!masterData){console.log((e3m+G4l+y6m+v4l+k4m+c9l+w2m+n5l+J3X.g2m+G4l+w1m+i3m+M5l+m6m+J0m+n5l+w1m+i7l+H9m+h6l+n5l+G4l+U4m+n5l+J3X.r2m+w2m+n5l+t1l+h3m+w2m+i3m+r5m+k6l+t4l+n5l+s5l+w2m+J3X.r2m+f6l+f9m+V5l));}
if(!chart.symbol)chart.symbol=o3m;this.setMasterData(masterData,chart);this.createDataSet();this.initializeChart();if(params.span&&params.span.multiplier&&params.span.base){this.setSpan({maintainPeriodicity:Q9m,multiplier:params.span.multiplier,span:params.span.base}
);}
else{this.draw();}
this.adjustPanelPositions();if(cb)cb();}
}
;STXChart.prototype.setMasterData=function(masterData,chart){var w4l=' = ',v4m='alue',u3m='V',y2m='ring',d2l='es',v7l='ov',W1l='er',g8l='ta',B5m='ur',y8m='() ',l7m='Fl',R7l='ars',c3m='U',r9l='. ',q4m='um',x1m='sing',a5m='lo',Z6m='aste',N5l='ec',a0m='bj',C9l='at',O3m='T',X5l='D',n6l='ssing',q7l=' : ',h6m='rD',z4l='ste',g6m='tM',L7m='se';if(!chart)chart=this.chart;this.calculateMinutesInSession(chart);chart.masterData=masterData;if(J3X.k1F(chart.name,"chart"))this.masterData=masterData;var i;for(i=0;masterData&&J3X.e1F(i,masterData.length);i++){var quotes=masterData[i];if(quotes.DT){quotes.DT=new Date(quotes.DT);quotes.Date=STX.yyyymmddhhmmssmmm(quotes.DT);}
else if(quotes.Date)quotes.DT=STX.strToDateTime(quotes.Date);else console.log((L7m+g6m+t8m+z4l+h6m+t8m+a3m+t8m+q7l+d0m+t5m+n6l+i7m+X5l+O3m+i7m+t8m+O4m+i8m+i7m+X5l+C9l+A7m+i7m+M5m+O4m+i7m+g4m+i9l+a3m+A7m+b6l+X5l+C9l+t8m+i7m+M5m+a0m+N5l+a3m));if(quotes.Volume&&typeof quotes.Volume!=="number")quotes.Volume=parseInt(quotes.Volume,10);if(quotes.Close&&typeof quotes.Close=='number'){}
else{console.log((L7m+g6m+Z6m+h6m+C9l+t8m+q7l+l4l+a5m+L7m+i7m+t5m+Y6l+i7m+g4m+U1l+x1m+i7m+M5m+b6l+i7m+O4m+M5m+a3m+i7m+t8m+i7m+O4m+q4m+M4m+A7m+b6l+r9l+c3m+L7m+i7m+K6l+R7l+A7m+l7m+C8m+a3m+y8m+t5m+J7m+i7m+F5l+M5m+B5m+i7m+i8m+t8m+g8l+i7m+Y6l+A7m+b6l+L0m+W1l+i7m+K6l+b6l+v7l+t5m+i8m+d2l+i7m+Y6l+a3m+y2m+Y6l+r9l+u3m+v4m+w4l)+quotes.Close);}
if(J3X.A1F(quotes.High,null))delete  quotes.High;if(J3X.y1F(quotes.Low,null))delete  quotes.Low;if(J3X.n1F(quotes.Open,null))delete  quotes.Open;}
chart.decimalPlaces=this.callbacks.calculateTradingDecimalPlaces({stx:this,chart:chart,symbol:chart.symbolObject.symbol,symbolObject:chart.symbolObject}
);if(!STXChart.isDailyInterval(this.layout.interval))this.setDisplayDates(masterData);this.chart.roundit=Math.pow(10,chart.decimalPlaces);for(i in this.plugins){var plugin=this.plugins[i];if(plugin.display){if(plugin.setMasterData)plugin.setMasterData(this,chart);}
}
for(var s in this.chart.series){var series=this.chart.series[s];if(series.addSeriesData){series.addSeriesData(this);}
}
}
;STXChart.prototype.setDisplayDate=function(quote){var dt=quote.DT,milli=J3X.I1F(dt.getSeconds(),E5m)+dt.getMilliseconds(),newDT;if(this.dataZone){newDT=new timezoneJS.Date(dt.getFullYear(),dt.getMonth(),dt.getDate(),dt.getHours(),dt.getMinutes(),this.dataZone);dt=new Date(newDT.getTime()+milli);}
if(this.displayZone){newDT=new timezoneJS.Date(dt.getTime(),this.displayZone);dt=new Date(newDT.getFullYear(),newDT.getMonth(),newDT.getDate(),newDT.getHours(),newDT.getMinutes());dt=new Date(dt.getTime()+milli);}
quote.displayDate=dt;}
;STXChart.prototype.setDisplayDates=function(masterData){if(!masterData)return ;for(var i=0;J3X.H1F(i,masterData.length);i++){var quote=masterData[i];if(quote.DT)this.setDisplayDate(quote);}
}
;STXChart.prototype.streamTrade=function(priceData,now,symbol,params){var chart=this.chart;if(!params)params={}
;if(params.chart)chart=params.chart;var price=null,bid=null,ask=null,volume=0;if(typeof priceData=="object"){price=priceData.last;bid=priceData.bid;ask=priceData.ask;volume=priceData.volume;}
else{price=arguments[0];volume=arguments[1];now=arguments[2];symbol=arguments[3];}
var md=chart.masterData;if(!now){now=new Date();if(this.dataZone){var tzNow=STX.convertTimeZone(now,null,this.dataZone);now=new Date(tzNow.getFullYear(),tzNow.getMonth(),tzNow.getDate(),tzNow.getHours(),tzNow.getMinutes(),tzNow.getSeconds(),tzNow.getMilliseconds());}
}
else{now=new Date(now);}
if(J3X.P1F(this.layout.timeUnit,"second")){now.setMilliseconds(0);}
else if(J3X.c1F(this.layout.timeUnit,"minute")){now.setMilliseconds(0);now.setSeconds(0);}
var quote;if(!md||!md.length||J3X.x1F(this.layout.interval,(X2m+M6l))){quote={Date:STX.yyyymmddhhmmssmmm(now),DT:now,Open:price,Close:price,High:price,Low:price,Volume:volume,Bid:bid,Ask:ask}
;this.appendMasterData([quote],chart,params);}
else{quote=STX.clone(md[J3X.Y1F(md.length,1)]);var next=this.getNextInterval(quote.DT,null,this.dataZone);if(J3X.B1F(now,next)){if(symbol){if(price||J3X.Z1F(price,0)){quote[symbol]=price;}
}
else{if(price||J3X.V1F(price,0)){quote.Close=price;if(J3X.K1F(price,quote.High))quote.High=price;if(J3X.Q2F(price,quote.Low))quote.Low=price;}
if(volume)quote.Volume+=volume;if(bid||J3X.M2F(bid,0))quote.Bid=bid;if(ask||J3X.v2F(ask,0))quote.Ask=ask;}
var newParams=STX.clone(params);this.appendMasterData([quote],chart,newParams);}
else{var next2=this.getNextInterval(next,null,this.dataZone),gaps=[];while(J3X.E2F(next2,now)){var gap={Date:STX.yyyymmddhhmmssmmm(next),DT:next,Close:quote.Close,Open:quote.Close,High:quote.Close,Low:quote.Close,Volume:0,Bid:quote.Bid,Ask:quote.Ask}
;gaps.push(gap);next=next2;next2=this.getNextInterval(next,null,this.dataZone);}
quote={Date:STX.yyyymmddhhmmssmmm(next),DT:next,Open:price,Close:price,High:price,Low:price,Volume:volume,Bid:bid,Ask:ask}
;gaps.push(quote);this.appendMasterData(gaps,chart,params);}
}
}
;STXChart.prototype.appendMasterData=function(appendQuotes,chart,params){if(!params)params={}
;if(!chart)chart=this.chart;if(J3X.N2F(appendQuotes.constructor,Object))appendQuotes=[appendQuotes];if(this.runPrepend("appendMasterData",[appendQuotes,chart,params]))return ;if(!appendQuotes||!appendQuotes.length)return ;var dt=appendQuotes[0].DT;if(!dt)dt=STX.strToDateTime(appendQuotes[0].Date);var masterData=chart.masterData,i;if(!masterData||!masterData.length){masterData=chart.masterData=STX.clone(appendQuotes);for(i=0;J3X.b2F(i,masterData.length);i++){if(masterData[i].DT)masterData[i].Date=STX.yyyymmddhhmmssmmm(masterData[i].DT);else masterData[i].DT=STX.strToDateTime(masterData[i].Date);if(masterData[i].Volume&&typeof masterData[i].Volume!=="number")masterData[i].Volume=parseInt(masterData[i].Volume,10);if(!STXChart.isDailyInterval(this.layout.interval))this.setDisplayDate(masterData[i]);}
}
else{i=J3X.w2F(masterData.length,1);while(J3X.o2F(i,0)){var dt2=masterData[i].DT;if(!dt2)dt2=STX.strToDateTime(masterData[i].Date);if(J3X.T2F(dt2.getTime(),dt.getTime())){var plusOne=0;if(J3X.i2F(dt2.getTime(),dt.getTime()))plusOne=1;for(var j=0;J3X.h2F(j,appendQuotes.length);j++){if(!plusOne){if(typeof masterData[i+j]!="undefined"){if(!appendQuotes[j].Volume&&masterData[i+j].Volume){appendQuotes[j].Volume=masterData[i+j].Volume;}
if(!params.allowReplaceOHL){if(masterData[i+j].Open){appendQuotes[j].Open=masterData[i+j].Open;}
if(J3X.J2F(masterData[i+j].High,appendQuotes[j].High)){appendQuotes[j].High=masterData[i+j].High;}
if(masterData[i+j].Low&&J3X.W2F(masterData[i+j].Low,appendQuotes[j].Low)){appendQuotes[j].Low=masterData[i+j].Low;}
}
}
for(var field in this.chart.series){if(typeof appendQuotes[j][field]=="undefined"&&typeof masterData[i+j]!="undefined")appendQuotes[j][field]=masterData[i+j][field];}
for(var p in this.panels){if(this.panels[p].studyQuotes){for(var sq in this.panels[p].studyQuotes){if(!this.panels[p].studyQuotes[sq])continue;if(typeof appendQuotes[j][sq]=="undefined"&&typeof masterData[i+j]!="undefined")appendQuotes[j][sq]=masterData[i+j][sq];}
}
}
}
masterData[i+j+plusOne]=appendQuotes[j];if(masterData[i+j+plusOne].DT)masterData[i+j+plusOne].Date=STX.yyyymmddhhmmssmmm(masterData[i+j+plusOne].DT);else masterData[i+j+plusOne].DT=STX.strToDateTime(masterData[i+j+plusOne].Date);if(masterData[i+j+plusOne].Volume&&typeof masterData[i+j+plusOne].Volume!=="number")masterData[i+j+plusOne].Volume=parseInt(masterData[i+j+plusOne].Volume,10);if(!STXChart.isDailyInterval(this.layout.interval))this.setDisplayDate(this.masterData[i+j+plusOne]);if(J3X.C2F(chart.scroll,chart.maxTicks+1)&&plusOne){chart.scroll++;this.grabStartScrollX++;}
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
;STXChart.prototype.displayAll=function(params,cb){var chart=this.chart;if(params&&params.chart)chart=params.chart;var self=this;function displayTheResults(){if(!chart.masterData.length)return ;self.setRange({dtLeft:new Date(1),dtRight:chart.masterData[J3X.t2F(chart.masterData.length,1)].DT}
);if(cb)cb();}
function loadAllTheData(){self.quoteDriver.loadAll(chart,displayTheResults);}
if(!this.quoteDriver){displayTheResults();return ;}
if(this.dontRoll&&J3X.O2F(this.layout.interval,"month")){this.setPeriodicityV2(1,"month",loadAllTheData);}
else if(!STXChart.isDailyInterval(this.layout.interval)){this.setPeriodicityV2(1,"day",loadAllTheData);}
else{if(chart.moreAvailable){loadAllTheData();}
else{displayTheResults();}
}
}
;STXChart.prototype.setRange=function(params,cb){if(STX.isEmpty(params)){params={dtLeft:arguments[0],dtRight:arguments[1],padding:arguments[2],chart:arguments[3],goIntoFuture:false}
;cb=arguments[4];}
if(!params.chart)params.chart=this.chart;if(typeof params.padding=="undefined"){params.padding=this.preferences.whitespace;}
var chart=params.chart,ltMS=params.dtLeft.getTime(),rtMS=Date.now();if(params.dtRight)rtMS=params.dtRight.getTime();var self=this;function showTheRange(){var R0m="ayou",b=J3X.U2F(chart.dataSet.length,1),prices;if(params.dtRight){rtMS=params.dtRight.getTime();for(;J3X.X9F(b,0);b--){prices=chart.dataSet[b];if(J3X.d9F(prices.DT.getTime(),rtMS)){break;}
}
if(J3X.r9F(b,chart.dataSet.length-1)&&params.goIntoFuture){var dt=chart.dataSet[J3X.F9F(chart.dataSet.length,1)].DT;for(var i=0;J3X.R9F(i,20000);i++){if(J3X.j9F(dt.getTime(),rtMS))break;b++;dt=self.getNextInterval(dt,self.layout.periodicity,self.dataZone);}
}
}
if(J3X.p9F(b,0))return ;for(var a=b;J3X.u9F(a,0);a--){if(J3X.S9F(a,chart.dataSet.length))continue;prices=chart.dataSet[a];if(J3X.L9F(prices.DT.getTime(),ltMS)){break;}
}
var ticks=J3X.g9F(b,a);if(J3X.z9F(ticks,1)){if(cb)cb();return ;}
self.setCandleWidth(J3X.G9F((self.chart.width-params.padding),ticks),chart);chart.scroll=(J3X.m9F(chart.dataSet.length,b))+Math.floor(J3X.l9F((self.chart.width-params.padding),self.layout.candleWidth));self.preferences.whitespace=J3X.q9F((chart.maxTicks-chart.scroll),self.layout.candleWidth);self.draw();self.changeOccurred((J3X.S2m+R0m+i3m));if(cb)cb();}
var loadMoreCount=0;function loadTheRange(){var q4l="gic",i6m="ity",U7l="ic",H3m="he",V6m="ping",H0m="op",f8l="erv",T5l=") ",Z5m="oads",d9l="T",h8m="(): ",R2l=((0x192,52.80E1)>93.?(56.,"R"):(11.20E1,43.)>(0x158,131.)?(0x1E,0x19A):(73,126)),m5l="et",e5l="XCha",d9m="ST";loadMoreCount++;if(J3X.D9F(loadMoreCount,10)){console.log((d9m+e5l+d1m+i3m+p3m+w1m+m5l+R2l+G4l+J3X.r2m+n9l+h8m+d9l+w2m+w2m+n5l+J3X.g2m+l1l+f5m+n5l+J3X.S2m+Z5m+m8l+j2m+Q2m+T5l+Y9m+d1m+w2m+J3X.g2m+n5l+w1m+f8l+w5l+q7m+l2l+i3m+H0m+V6m+q7m+B8m+H3m+s5l+K2m+n5l+g1m+w5l+H9m+w2m+t4l+U7l+i6m+n5l+J3X.S2m+w2m+q4l+p3m));showTheRange();return ;}
if(chart.moreAvailable&&J3X.f9F(chart.masterData[0].DT.getTime(),ltMS)){self.quoteDriver.checkLoadMore(chart,true,false,function(err){if(!err)loadTheRange();}
);}
else{showTheRange();}
}
function estimateMaxTicks(rtMS,ltMS,interval,period,dontRoll){var ticks=0,ms=J3X.a7F(rtMS,ltMS);if(STXChart.isDailyInterval(interval)){if((J3X.s7F(interval,"month")||J3X.k7F(interval,"week"))&&dontRoll){var int=(J3X.e7F(interval,"week"))?7:30;ticks=J3X.A7F((ms/(STX.DAY*int)),period);}
else{ticks=J3X.y7F((ms/STX.DAY),period);}
}
else{if(!isNaN(interval))ticks=J3X.n7F((ms/(STX.MINUTE*interval)),period);else{if(J3X.I7F(interval,"millisecond"))ticks=J3X.H7F(ms,period);else if(J3X.P7F(interval,"second"))ticks=J3X.c7F((ms/STX.SECOND),period);else if(J3X.x7F(interval,(I5l)))ticks=J3X.Y7F((ms/STX.HOUR),period);else ticks=J3X.B7F((ms/STX.MINUTE),period);}
}
return Math.round(ticks);}
if(this.quoteDriver){var intervalToUse,periodToUse,timeUnitToUse;if(params.periodicity){intervalToUse=params.periodicity.interval;timeUnitToUse=params.periodicity.timeUnit;periodToUse=params.periodicity.period;}
else{if(!this.rangePeriodicityMap){this.rangePeriodicityMap=[];this.rangePeriodicityMap.push({range:STX.WEEK,periodicity:1,interval:5}
);this.rangePeriodicityMap.push({range:STX.MONTH,periodicity:1,interval:30}
);this.rangePeriodicityMap.push({range:J3X.Z7F(STX.MONTH,7),periodicity:1,interval:"day"}
);this.rangePeriodicityMap.push({range:STX.DECADE,periodicity:1,interval:"day"}
);this.rangePeriodicityMap.push({range:J3X.V7F(STX.DECADE,10),periodicity:1,interval:"month"}
);this.rangePeriodicityMap.push({range:Number.MAX_VALUE,periodicity:12,interval:"month"}
);}
var periodicityMap=params.rangePeriodicityMap?params.rangePeriodicityMap:this.rangePeriodicityMap,rangeInMS=J3X.K7F(rtMS,ltMS),entryToUse=null;for(var i=0;J3X.Q8F(i,periodicityMap.length);i++){var mapEntry=periodicityMap[i];if(J3X.M8F(rangeInMS,mapEntry.range)){entryToUse=mapEntry;break;}
}
intervalToUse=entryToUse.interval;periodToUse=entryToUse.periodicity;timeUnitToUse=entryToUse.timeUnit;}
this.chart.scroll=this.chart.maxTicks=estimateMaxTicks(rtMS,ltMS,intervalToUse,periodToUse,this.dontRoll);this.layout.candleWidth=J3X.v8F(this.chart.width,this.chart.maxTicks);if(!this.chart.masterData||J3X.E8F(this.layout.interval,intervalToUse)||J3X.N8F(this.layout.periodicity,periodToUse)||J3X.b8F(this.layout.timeUnit,timeUnitToUse)){this.layout.interval=intervalToUse;this.layout.periodicity=periodToUse;this.layout.timeUnit=timeUnitToUse;if(!this.layout.timeUnit){if(STXChart.isDailyInterval(this.layout.interval))this.layout.timeUnit=null;else if(J3X.w8F(this.layout.interval,"second"))this.layout.timeUnit="second";else this.layout.timeUnit="minute";}
var qparams={symbol:chart.symbol,chart:chart}
;if(!this.displayInitialized)qparams.initializeChart=true;this.quoteDriver.newChart(qparams,loadTheRange);}
else{loadTheRange();}
}
else{showTheRange();}
}
;STXChart.prototype.setSpan=function(params,cb){var period=arguments[0],interval=arguments[1],padding=arguments[2],chart=arguments[3],useMarketTZ=arguments[4];if(typeof params=="object"){if(params.multiplier)period=params.multiplier;else period=params.period;if(params.span)interval=params.span;else interval=params.interval;padding=params.padding;chart=params.chart;useMarketTZ=params.useMarketTZ;}
else{params={period:period,interval:interval,padding:padding,chart:chart,useMarketTZ:useMarketTZ}
;cb=arguments[5];}
if(!params.padding)params.padding=0;if(!chart)chart=this.chart;var leftDT=new Date(),marketOpen;if(STX.LegacyMarket.isForexFuturesSymbol(chart.symbol))marketOpen=STX.LegacyMarket.isForexOpen(leftDT,chart.symbol);else marketOpen=STX.LegacyMarket.isMarketOpen(chart.symbol,this);if(!marketOpen){leftDT=STX.LegacyMarket.getPreviousClose(leftDT,chart.symbol,this.dataZone,this);}
if(J3X.o8F(interval.toLowerCase(),"ytd")){leftDT=new Date();leftDT.setMonth(0);leftDT.setDate(1);leftDT.setHours(0);leftDT.setMinutes(0);leftDT.setSeconds(0);leftDT.setMilliseconds(0);}
else if(J3X.T8F(interval.toLowerCase(),"year")){leftDT.setFullYear(J3X.i8F(leftDT.getFullYear(),period));}
else if(J3X.h8F(interval.toLowerCase(),"month")){leftDT.setMonth(J3X.J8F(leftDT.getMonth(),period));}
else if(J3X.W8F(interval.toLowerCase(),(t7l))||J3X.C8F(interval.toLowerCase(),"today")){if(J3X.t8F(interval.toLowerCase(),"day")&&STXChart.isDailyInterval(this.layout.interval)){if(useMarketTZ)leftDT=STX.LegacyMarket.prevDay(leftDT,J3X.O8F(period,1),this);else leftDT.setDate(J3X.U8F(leftDT.getDate(),period,1));leftDT.setHours(0,0,0,0);}
else{if(useMarketTZ&&chart.dataSet[J3X.Q4F(chart.dataSet.length,1)].displayDate){var startDT=STX.LegacyMarket.getDailyCycleStartTime(leftDT,chart);if(J3X.M4F(startDT.getTime(),leftDT.getTime()))startDT=STX.LegacyMarket.prevDay(startDT,1,this);leftDT.setTime(startDT.getTime());}
else{leftDT.setHours(0,0,0,0);}
for(var i=0;J3X.v4F(i,period-1);i++){leftDT=STX.LegacyMarket.prevDay(leftDT,1,this);}
}
}
else if(J3X.E4F(interval.toLowerCase(),"week")){leftDT.setDate(J3X.N4F(leftDT.getDate(),(7*period)));}
else if(J3X.b4F(interval.toLowerCase(),"hour")){leftDT.setHours(J3X.w4F(leftDT.getHours(),period));}
else if(J3X.o4F(interval.toLowerCase(),"minute")){leftDT.setMinutes(J3X.T4F(leftDT.getMinutes(),period));}
else if(J3X.i4F(interval.toLowerCase(),"second")){leftDT.setSeconds(J3X.h4F(leftDT.getSeconds(),period));}
else if(J3X.J4F(interval.toLowerCase(),"all")){this.displayAll(params,cb);return ;}
var params2=STX.shallowClone(params);params2.dtLeft=leftDT;if(J3X.W4F(interval.toLowerCase(),"today")){params2.goIntoFuture=true;params2.dtRight=new Date(params2.dtLeft);params2.dtRight.setHours(chart.endHour);params2.dtRight.setMinutes(chart.endMinute);params2.dtRight.setSeconds(0);}
if(params.maintainPeriodicity){params2.periodicity={}
;params2.periodicity.interval=this.layout.interval;params2.periodicity.period=this.layout.periodicity;}
this.setRange(params2,cb);}
;STXChart.prototype.getSpanCandleWidth=function(span){var arr=span.split(",");if(J3X.C4F(arr.length,2))return ;var num=parseFloat(arr[0]),now=new Date(),prev=new Date();if(J3X.t4F(arr[1],"year")){prev.setFullYear(J3X.O4F(prev.getFullYear(),num));}
else if(J3X.U4F(arr[1],"month")){prev.setMonth(J3X.X5F(prev.getMonth(),num));}
else if(J3X.d5F(arr[1],"day")){prev.setDate(J3X.r5F(prev.getDate(),num));}
else if(J3X.F5F(arr[1],"week")){prev.setDate(J3X.R5F(prev.getDate(),(7*num)));}
var diff=J3X.j5F((now.getTime()-prev.getTime()),1000,60,60,24);diff=J3X.u5F(diff,5,7);var candleWidth=J3X.T5F(this.chart.width,diff);return candleWidth;}
;STXChart.prototype.setMaxTicks=function(ticks,params){if(!params)params={}
;ticks=Math.round(ticks);if(J3X.i5F(ticks,J3X.k2l))ticks=J3X.k2l;var padding=params.padding;if(!padding)padding=J3X.N2l;this.layout.candleWidth=J3X.h5F((this.chart.width-padding),ticks);if(!this.layout.candleWidth)this.layout.candleWidth=J3X.S2l;this.chart.maxTicks=Math.round(J3X.J5F((this.chart.width/this.layout.candleWidth),0.499));if(params.padding||J3X.W5F(params.padding,J3X.N2l))this.chart.scroll=ticks+J3X.e2l;}
;STXChart.prototype.construct=function(){this.stackPanel(T4l,T4l,J3X.e2l);this.adjustPanelPositions();this.chart.panel=this.panels[this.chart.name];this.cx=J3X.N2l;this.cy=J3X.N2l;this.micropixels=J3X.N2l;this.chart.panel.subholder.appendChild(this.controls.home);}
;STXChart.prototype.deleteYAxisIfUnused=function(panel,yAxis){if(!yAxis)return ;if(J3X.C5F(yAxis,panel.yAxis))return ;for(var r in this.chart.seriesRenderers){var renderer=this.chart.seriesRenderers[r];if(J3X.t5F(renderer.params.yAxis,yAxis)){if(J3X.O5F(renderer.seriesParams.length,0))return ;}
}
var i;for(i=0;J3X.U5F(i,panel.yaxisLHS.length);i++){if(J3X.X6F(panel.yaxisLHS[i],yAxis))panel.yaxisLHS.splice(i,1);}
for(i=1;J3X.d6F(i,panel.yaxisRHS.length);i++){if(J3X.r6F(panel.yaxisRHS[i],yAxis))panel.yaxisRHS.splice(i,1);}
this.resizeCanvas();this.adjustPanelPositions();}
;STXChart.prototype.addYAxis=function(panel,yAxis){var E2l="ght",e2m="ri";if(!yAxis)return ;if(!panel.yaxisLHS){panel.yaxisLHS=[];panel.yaxisRHS=[];if(J3X.F6F(panel.yAxis.position,(e2m+E2l)))panel.yaxisRHS.push(panel.yAxis);else panel.yaxisLHS.push(panel.yAxis);}
var arr=panel.yaxisLHS.concat(panel.yaxisRHS);for(var i=0;J3X.R6F(i,arr.length);i++){if(J3X.j6F(arr[i],yAxis))return ;}
if(J3X.p6F(yAxis.position,"left")){panel.yaxisLHS.unshift(yAxis);}
else{yAxis.position="right";panel.yaxisRHS.push(yAxis);}
this.preAdjustScroll();this.resizeCanvas();this.adjustPanelPositions();this.postAdjustScroll();}
;STXChart.prototype.calculateYAxisPositions=function(){var panelsInOrder=[];for(var chartName in this.charts){panelsInOrder.push(chartName);}
for(var panelName in this.panels){var p=this.panels[panelName];if(J3X.u6F(p.name,p.chart.name))continue;panelsInOrder.push(panelName);}
for(var j=0;J3X.S6F(j,panelsInOrder.length);j++){var panel=this.panels[panelsInOrder[j]];if(!panel)continue;var isAChart=J3X.L6F(panel.name,panel.chart.name);if(!panel.yaxisLHS){panel.yaxisLHS=[];panel.yaxisRHS=[];if(J3X.g6F(panel.name,panel.chart.name)||panel.yAxis.position){if(J3X.z6F(panel.yAxis.position,"left"))panel.yaxisLHS.push(panel.yAxis);else panel.yaxisRHS.push(panel.yAxis);}
else{var position=panel.chart.panel.yAxis.position;if(!position||J3X.G6F(position,"right"))panel.yaxisRHS.push(panel.yAxis);else panel.yaxisLHS.push(panel.yAxis);}
}
if(!panel.yAxis.width)panel.yAxis.width=this.yaxisWidth;panel.yaxisTotalWidthRight=0;var i,yaxis;panel.yaxisTotalWidthLeft=0;for(i=0;J3X.m6F(i,panel.yaxisLHS.length);i++){yaxis=panel.yaxisLHS[i];panel.yaxisTotalWidthLeft+=yaxis.width;yaxis.justifyRight=(J3X.l6F(yaxis.justifyRight,null)?panel.chart.yAxis.justifyRight:yaxis.justifyRight);if(J3X.q6F(yaxis.justifyRight,null))yaxis.justifyRight=true;}
for(i=0;J3X.D6F(i,panel.yaxisRHS.length);i++){yaxis=panel.yaxisRHS[i];panel.yaxisTotalWidthRight+=yaxis.width;}
var x=0;for(i=0;J3X.f6F(i,panel.yaxisLHS.length);i++){yaxis=panel.yaxisLHS[i];yaxis.left=x;x+=yaxis.width;}
x=J3X.a0T(this.width,panel.yaxisTotalWidthRight);for(i=0;J3X.s0T(i,panel.yaxisRHS.length);i++){yaxis=panel.yaxisRHS[i];yaxis.left=x;x+=yaxis.width;}
if(typeof this.yaxisLeft!="undefined")panel.yaxisPaddingRight=this.yaxisLeft;panel.yaxisCalculatedPaddingRight=panel.yaxisTotalWidthRight;if(panel.yaxisPaddingRight||J3X.k0T(panel.yaxisPaddingRight,0))panel.yaxisCalculatedPaddingRight=panel.yaxisPaddingRight;panel.yaxisCalculatedPaddingLeft=panel.yaxisTotalWidthLeft;if(panel.yaxisPaddingLeft||J3X.e0T(panel.yaxisPaddingLeft,0))panel.yaxisCalculatedPaddingLeft=panel.yaxisPaddingLeft;if(isAChart){panel.left=panel.yaxisCalculatedPaddingLeft;panel.right=J3X.A0T(this.width,panel.yaxisCalculatedPaddingRight);}
else{panel.left=panel.chart.panel.left;panel.right=panel.chart.panel.right;}
panel.width=J3X.y0T(panel.right,panel.left);if(isAChart){panel.chart.left=panel.left;panel.chart.right=panel.right;panel.chart.width=J3X.n0T(panel.right,panel.left);}
}
}
;STXChart.prototype.initializeChart=function(container){var g8m="hCan",O9l="rlayTra",t0m="lut",p9m="abs",J9m="lo",s1m="canv",D2m="canvas";if(this.runPrepend("initializeChart",arguments))return ;if(!this.chart.symbolObject.symbol)this.chart.symbolObject.symbol=this.chart.symbol;if(this.locale)this.setLocale(this.locale);if(!this.displayZone&&STXChart.defaultDisplayTimeZone){this.setTimeZone(null,STXChart.defaultDisplayTimeZone);}
this.calculateYAxisPositions();this.micropixels=0;if(container)this.chart.container=container;this.chart.container.stx=this;if(!this.chart.container.STXRegistered){this.chart.container.STXRegistered=true;STXChart.registeredContainers.push(this.chart.container);}
if(STX.isSurface){if(!this.gesture){this.gesture=new MSGesture();if(this.manageTouchAndMouse){this.gesture.target=this.chart.container;}
else{this.gesture.target=document.body;}
this.gesturePointerId=null;}
}
this.registerHTMLElements();if(this.chart.canvas&&document.createElement((D2m)).getContext){if(!this.chart.canvas.id){this.chart.container.removeChild(this.chart.canvas);this.chart.canvas=null;}
if(this.chart.tempCanvas&&!this.chart.tempCanvas.id){this.chart.container.removeChild(this.chart.tempCanvas);this.chart.tempCanvas=null;}
if(this.floatCanvas&&!this.floatCanvas.id){this.chart.container.removeChild(this.floatCanvas);this.floatCanvas=null;}
}
else{if(J3X.I0T(this.layout.candleWidth,this.minimumCandleWidth)||J3X.H0T(this.layout.candleWidth,50))this.layout.candleWidth=8;}
if(!this.chart.canvas)this.chart.canvas=document.createElement((s1m+G4l+w1m));if(!this.chart.canvas.getContext){this.chart.canvas=this.chart.container.querySelectorAll("#ie8canvas")[0];if(!this.chart.canvas.getContext){if(window.G_vmlCanvasManager)G_vmlCanvasManager.initElement(this.chart.canvas);}
this.chart.canvas.style.display="block";}
else{this.chart.container.appendChild(this.chart.canvas);}
this.chart.canvas.style.position="absolute";this.chart.canvas.style.left="0px";this.chart.context=this.chart.canvas.getContext("2d");this.chart.canvas.context=this.chart.context;this.chart.context.lineWidth=1;if(!this.chart.tempCanvas)this.chart.tempCanvas=document.createElement("canvas");if(!this.chart.tempCanvas.getContext){this.chart.tempCanvas=this.chart.container.querySelectorAll("#ie8canvasTemp")[0];if(!this.chart.tempCanvas.getContext){if(window.G_vmlCanvasManager)G_vmlCanvasManager.initElement(this.chart.tempCanvas);}
this.chart.tempCanvas.style.display=(I4l+J9m+M6l);}
else{this.chart.container.appendChild(this.chart.tempCanvas);}
this.chart.tempCanvas.style.position=(p9m+w2m+t0m+M5l);this.chart.tempCanvas.style.left="0px";this.chart.tempCanvas.context=this.chart.tempCanvas.getContext("2d");this.chart.tempCanvas.context.lineWidth=1;if(!this.floatCanvas)this.floatCanvas=document.createElement("canvas");if(!this.floatCanvas.getContext){this.floatCanvas=this.chart.container.querySelectorAll("#ie8canvasFloat")[0];if(!this.floatCanvas.getContext){if(window.G_vmlCanvasManager)G_vmlCanvasManager.initElement(this.chart.tempCanvas);}
this.floatCanvas.style.display="block";}
else{this.chart.container.appendChild(this.floatCanvas);}
this.floatCanvas.style.position="absolute";this.floatCanvas.style.left="0px";this.floatCanvas.context=this.floatCanvas.getContext("2d");this.floatCanvas.context.lineWidth=1;this.resizeCanvas();if(STX.isAndroid){this.chart.tempCanvas.ontouchstart=function(e){if(e.preventDefault)e.preventDefault();}
;this.floatCanvas.ontouchstart=function(e){if(e.preventDefault)e.preventDefault();}
;}
this.panels.chart.display=this.chart.symbol;if(this.chart.symbolDisplay)this.panels.chart.display=this.chart.symbolDisplay;this.adjustPanelPositions();this.chart.panel=this.panels[this.chart.name];this.calculateYAxisMargins(this.chart.panel.yAxis);if(this.chart.dataSet&&J3X.P0T(this.chart.dataSet.length,0)){this.chart.scroll=Math.floor(J3X.c0T(this.chart.width,this.layout.candleWidth));var wsInTicks=Math.round(J3X.x0T(this.preferences.whitespace,this.layout.candleWidth));this.chart.scroll-=wsInTicks;}
if(STX.touchDevice){var overlayTrashCan=this.chart.container.querySelectorAll((C2m+w2m+J3X.Q0G+M5l+O9l+w1m+g8m))[0],vectorTrashCan=this.chart.container.querySelectorAll("#vectorTrashCan")[0];if(overlayTrashCan)overlayTrashCan.onmspointerup=overlayTrashCan.ontouchend=(function(self){return function(e){self.deleteHighlighted(true);}
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
;for(var i=0;J3X.Y0T(i,this.eventListeners.length);i++){var listener=this.eventListeners[i];listener.element.removeEventListener(listener.event,listener["function"]);}
}
;STXChart.prototype.handleMouseOut=function(e){var Q7m="handleMouseOut";e=e||window.event;if(!STX.withinElement(this.chart.container,e.pageX,e.pageY)){if(this.runPrepend(Q7m,arguments))return ;this.undisplayCrosshairs();this.grabbingScreen=Y4m;this.touches=[];this.touching=Y4m;if(this.activeDrawing&&this.userPointerDown){this.userPointerDown=Y4m;this.drawingLine=Y4m;var cy=this.backOutY(e.pageY),cx=this.backOutX(e.pageX);this.drawingClick(this.currentPanel,cx,cy);}
STXChart.insideChart=Y4m;this.displaySticky();this.runAppend(Q7m,arguments);}
}
;STXChart.prototype.registerTouchAndMouseEvents=function(){var G2l="DOMMouseScroll",m9m="mousewheel",l1m="onwheel",c2m="wheel",b5l="eOu",y7l="us",w9m="onMouseOut",w3m="onMouseOver",v8l="up",h2m="pointerup",I9m="pointermove",D3m="pointerdown",X7m="Up",x3m="Po",V2m="MSPointerMove",Z8l="MSGestureEnd",M7m="MSGestureChange",R6m="MSGestureStart",s7m="MSPointerDown",Q3m="#zoomOut",C8l="#home";if(this.touchAndMouseEventsRegistered)return ;this.touchAndMouseEventsRegistered=Q9m;var el=this.chart.container,homeEl=$$$(C8l,this.controls.chartControls),zoomInEl=$$$(f2m,this.controls.chartControls),zoomOutEl=$$$(Q3m,this.controls.chartControls);if(!STX.touchDevice){el.addEventListener(Q6l,(function(self){return function(e){self.mousemove(e);}
;}
)(this),Y4m);el.addEventListener(S5l,(function(self){return function(e){self.mousedown(e);}
;}
)(this),Y4m);el.addEventListener(n4m,(function(self){return function(e){self.mouseup(e);}
;}
)(this),Y4m);}
else{if(STX.isSurface){el.addEventListener(Q6l,(function(self){return function(e){self.msMouseMoveProxy(e);}
;}
)(this),Y4m);el.addEventListener(S5l,(function(self){return function(e){self.msMouseDownProxy(e);}
;}
)(this),Y4m);el.addEventListener(n4m,(function(self){return function(e){self.msMouseUpProxy(e);}
;}
)(this),Y4m);if(window.navigator.msPointerEnabled){el.addEventListener(s7m,(function(self){return function(e){var B9m="net",L2m=4749089,d4m=(0x16D<(41.6E1,7.73E2)?(15,8935995):(2.58E2,0x209)<(0x20,47)?(42,69.0E1):(0xC1,11.34E2)),X6l=1831513798,U8m=491873216;var g1l=U8m,h1l=-X6l,P1l=J3X.k2l;for(var i1l=J3X.e2l;J3X.z3l.J3l(i1l.toString(),i1l.toString().length,d4m)!==g1l;i1l++){C(Y7m);context.lineTo(firstX,reverse?t:b);P1l+=J3X.k2l;}
if(J3X.z3l.J3l(P1l.toString(),P1l.toString().length,L2m)!==h1l){this.positionSticky(m);this.runAppend((J3X.g2m+G4l+f9m+B9m+H9m+x5m+M5l),arguments);return Z6a==q6a;}
return self.startProxy(e);}
;}
)(this),Y4m);el.addEventListener(R6m,(function(self){return function(e){self.gestureInEffect=Q9m;}
;}
)(this),Y4m);el.addEventListener(M7m,(function(self){return function(e){return self.touchmove(e);}
;}
)(this),Y4m);el.addEventListener(Z8l,(function(self){return function(e){self.gestureInEffect=Y4m;return self.touchend(e);}
;}
)(this),Y4m);el.addEventListener(V2m,(function(self){return function(e){self.moveProxy(e);}
;}
)(this),Y4m);el.addEventListener((w9l+l2l+x3m+G6m+q3m+d1m+X7m),(function(self){return function(e){return self.endProxy(e);}
;}
)(this),Y4m);}
else{el.addEventListener(D3m,(function(self){return function(e){return self.startProxy(e);}
;}
)(this),Y4m);el.addEventListener(R6m,(function(self){return function(e){self.gestureInEffect=Q9m;}
;}
)(this),Y4m);el.addEventListener(M7m,(function(self){return function(e){return self.touchmove(e);}
;}
)(this),Y4m);el.addEventListener(Z8l,(function(self){return function(e){self.gestureInEffect=Y4m;return self.touchend(e);}
;}
)(this),Y4m);el.addEventListener(I9m,(function(self){return function(e){self.moveProxy(e);}
;}
)(this),Y4m);el.addEventListener(h2m,(function(self){return function(e){return self.endProxy(e);}
;}
)(this),Y4m);}
}
else{if(!STX.isAndroid&&!STX.ipad&&!STX.iphone){el.addEventListener(Q6l,(function(self){return function(e){self.iosMouseMoveProxy(e);}
;}
)(this),Y4m);el.addEventListener(S5l,(function(self){return function(e){self.iosMouseDownProxy(e);}
;}
)(this),Y4m);el.addEventListener((J3X.g2m+D5l+w1m+M5l+v8l),(function(self){return function(e){self.iosMouseUpProxy(e);}
;}
)(this),Y4m);}
el.addEventListener(C3m,(function(self){return function(e){self.touchstart(e);}
;}
)(this),Y4m);el.addEventListener(a8l,(function(self){return function(e){self.touchmove(e);}
;}
)(this),Y4m);el.addEventListener(F6l,(function(self){return function(e){self.touchend(e);}
;}
)(this),Y4m);if(zoomInEl){zoomInEl.removeAttribute(w3m);zoomInEl.removeAttribute(w9m);}
if(zoomOutEl){zoomOutEl.removeAttribute(w3m);zoomOutEl.removeAttribute((h0m+w9l+w2m+y7l+b5l+i3m));}
}
}
var wheelEvent=(J3X.B0T(c2m,document.createElement(Y9l))||J3X.Z0T(l1m,document))?c2m:J3X.V0T(document.onmousewheel,undefined)?m9m:G2l;el.addEventListener(wheelEvent,(function(self,wheelEvent){return function(e){self.mouseWheel(e,wheelEvent);}
;}
)(this,wheelEvent),Y4m);}
;STXChart.prototype.rightClickHighlighted=function(){var W2m="rightClickHighlighted";if(this.runPrepend(W2m,arguments))return ;this.deleteHighlighted(Q9m);this.runAppend(W2m,arguments);}
;STXChart.prototype.deleteHighlighted=function(callRightClick){if(this.runPrepend("deleteHighlighted",arguments))return ;this.cancelTouchSingleClick=true;STX.clearCanvas(this.chart.tempCanvas,this);for(var i=J3X.K0T(this.drawingObjects.length,1);J3X.Q3T(i,0);i--){var drawing=this.drawingObjects[i];if(drawing.highlighted&&!drawing.permanent){var dontDeleteMe=drawing.abort();if(!dontDeleteMe){this.undoStamp();this.drawingObjects.splice(i,1);}
this.changeOccurred("vector");}
}
for(var name in this.overlays){var o=this.overlays[name];if(o.highlight&&!o.permanent){if(callRightClick)this.rightClickOverlay(name);else this.removeOverlay(name);}
}
for(var r in this.currentPanel.chart.seriesRenderers){var renderer=this.currentPanel.chart.seriesRenderers[r];for(var sp=J3X.M3T(renderer.seriesParams.length,1);J3X.v3T(sp,0);sp--){var series=renderer.seriesParams[sp];if(series.highlight&&!series.permanent){renderer.removeSeries(series.field);}
}
}
this.draw();if(this.controls.mSticky){this.controls.mSticky.style.display="none";this.controls.mSticky.children[0].innerHTML="";}
this.runAppend("deleteHighlighted",arguments);}
;STXChart.prototype.panelExists=function(name){for(var p in this.panels){var panel=this.panels[p];if(J3X.E3T(panel.name,name))return Q9m;}
return Y4m;}
;STXChart.prototype.hideCrosshairs=function(){this.displayCrosshairs=Y4m;}
;STXChart.prototype.showCrosshairs=function(){this.displayCrosshairs=Q9m;}
;STXChart.prototype.grabHandle=function(e,panel){var q6m="grabHandle";if(this.runPrepend(q6m,arguments))return ;if(e.preventDefault)e.preventDefault();if(!panel)return ;STXChart.crosshairY=panel.top+this.top;STXChart.resizingPanel=panel;this.drawTemporaryPanel();this.runAppend(q6m,arguments);}
;STXChart.prototype.releaseHandle=function(e){var D0m="releaseHandle";if(this.runPrepend(D0m,arguments))return ;if(e.preventDefault)e.preventDefault();STX.clearCanvas(this.chart.tempCanvas,this);this.resizePanels();STXChart.resizingPanel=J3X.U2m;this.runAppend(D0m,arguments);}
;STXChart.prototype.storePanels=function(){if(!this.layout)this.layout={}
;var view=this.layout;view.panels={}
;for(var p in this.panels){var panel=this.panels[p];view.panels[panel.name]={"percent":panel.percent,"display":panel.display}
;}
}
;STXChart.prototype.savePanels=function(saveLayout){this.storePanels();if(J3X.N3T(saveLayout,Y4m))this.changeOccurred(C2l);}
;STXChart.prototype.resolveY=function(y){return this.top+y;}
;STXChart.prototype.resolveX=function(x){return this.left+x;}
;STXChart.prototype.backOutY=function(y){return J3X.b3T(y,this.top);}
;STXChart.prototype.backOutX=function(x){return J3X.w3T(x,this.left);}
;STXChart.prototype.cleanupRemovedStudy=function(sd){if(sd.libraryEntry){if(sd.libraryEntry.removeFN)sd.libraryEntry.removeFN(this,sd);if(sd.libraryEntry.feed&&sd.libraryEntry.quoteFeed){this.detachTagAlongQuoteFeed(sd.libraryEntry.feed);}
}
for(var p in this.plugins){if(p.indexOf(J3X.T5m+sd.id+J3X.B4m)>-J3X.e2l)delete  this.plugins[p];}
if(this.layout.studies)delete  this.layout.studies[sd.name];}
;STXChart.prototype.privateDeletePanel=function(panel){if(this.layout.studies){var mySD=this.layout.studies[panel.name];if(mySD)this.cleanupRemovedStudy(mySD);}
delete  this.panels[panel.name];for(var spm in STX.Studies.studyPanelMap){if(J3X.o3T(STX.Studies.studyPanelMap[spm].panel,panel.name))delete  STX.Studies.studyPanelMap[spm];}
for(var series in this.overlays){if(J3X.T3T(this.overlays[series].panel,panel.name)){delete  this.layout.studies[series];delete  this.overlays[series];}
}
if(panel.holder){this.chart.container.removeChild(panel.holder);var arr=this.getMarkerArray("panelName",panel.name);for(var i=0;J3X.i3T(i,arr.length);i++){this.removeFromHolder(arr[i]);}
}
panel.handle.parentNode.removeChild(panel.handle);}
;STXChart.prototype.panelClose=function(panel){var t9m="panelClose";if(!panel)return ;if(this.runPrepend(t9m,arguments))return ;this.cancelTouchSingleClick=Q9m;STXChart.drawingLine=Y4m;if(panel.soloing)this.panelSolo(panel);if(this.charts[panel.name]){for(var panelName in this.panels){var subPanel=this.panels[panelName];if(J3X.h3T(subPanel.chart.name,panel.name)){this.privateDeletePanel(subPanel);}
}
delete  this.charts[panel.name];}
else{this.privateDeletePanel(panel);}
this.showCrosshairs();this.createDataSet();this.adjustPanelPositions();this.draw();this.savePanels();this.runAppend(t9m,arguments);}
;STXChart.prototype.deleteAllPanels=function(){for(var p in this.panels){var panel=this.panels[p];this.privateDeletePanel(panel);}
this.layout.panels={}
;this.panels={}
;}
;STXChart.prototype.panelUp=function(panel){this.cancelTouchSingleClick=Q9m;STXChart.drawingLine=Y4m;this.showCrosshairs();var newPanels={}
,pos=J3X.N2l,p;for(p in this.panels){if(J3X.J3T(p,panel.name))break;pos++;}
if(!pos)return ;var i=J3X.N2l;for(p in this.panels){if(J3X.W3T(i,pos-J3X.e2l))newPanels[panel.name]=panel;if(J3X.C3T(p,panel.name))continue;newPanels[p]=this.panels[p];i++;}
this.panels=newPanels;this.adjustPanelPositions();this.draw();this.savePanels();}
;STXChart.prototype.panelDown=function(panel){this.cancelTouchSingleClick=true;STXChart.drawingLine=false;this.showCrosshairs();var newPanels={}
,pos=0,p;for(p in this.panels){if(J3X.t3T(p,panel.name))break;pos++;}
var length=0;for(p in this.panels)length++;if(J3X.O3T(pos,length-1))return ;var i=0;for(p in this.panels){if(J3X.U3T(p,panel.name)){i++;continue;}
newPanels[p]=this.panels[p];if(J3X.X1T(i,pos+1))newPanels[panel.name]=panel;i++;}
this.panels=newPanels;this.adjustPanelPositions();this.draw();this.savePanels();}
;STXChart.prototype.panelSolo=function(panel){var u0m="lit",V5m="olo_",F4l="_s";this.cancelTouchSingleClick=Q9m;STXChart.drawingLine=Y4m;this.showCrosshairs();var hideOrNot=Q9m;if(panel.soloing){hideOrNot=Y4m;panel.soloing=Y4m;STX.unappendClassName(panel.solo,(B4l+J3X.p6m+F4l+V5m+u0m));panel.percent=panel.oldPercent;this.panels.chart.percent=this.panels.chart.oldPercent;}
else{panel.soloing=Q9m;STX.appendClassName(panel.solo,M2m);if(J3X.d1T(panel.name,T4l)){panel.oldPercent=panel.percent;}
else{panel.oldPercent=panel.percent;this.panels.chart.oldPercent=this.panels.chart.percent;panel.percent=J3X.r1T(J3X.e2l,this.panels.chart.percent);}
}
for(var p in this.panels){this.panels[p].hidden=hideOrNot;}
this.panels.chart.hidden=Y4m;panel.hidden=Y4m;this.adjustPanelPositions();this.draw();this.savePanels();}
;STXChart.prototype.calculatePanelPercent=function(panel){var h=J3X.F1T(panel.bottom,panel.top);panel.percent=J3X.R1T(h,this.chart.canvasHeight);}
;STXChart.prototype.resizePanels=function(){if(!STXChart.resizingPanel)return ;var up=Q9m,p,newY,priorPanel;if(J3X.j1T(STXChart.crosshairY,this.resolveY(STXChart.resizingPanel.top)))up=Y4m;if(up){priorPanel=J3X.U2m;for(p in this.panels){if(J3X.p1T(this.panels[p],STXChart.resizingPanel))break;if(this.panels[p].hidden)continue;priorPanel=this.panels[p];}
newY=this.backOutY(STXChart.crosshairY);if(J3X.u1T(newY,priorPanel.top+G7m)){newY=priorPanel.top+G7m;STXChart.crosshairY=this.resolveY(newY);}
priorPanel.bottom=newY;STXChart.resizingPanel.top=newY;this.calculatePanelPercent(priorPanel);this.calculatePanelPercent(STXChart.resizingPanel);}
else{priorPanel=J3X.U2m;for(p in this.panels){if(J3X.S1T(this.panels[p],STXChart.resizingPanel))break;if(this.panels[p].hidden)continue;priorPanel=this.panels[p];}
newY=this.backOutY(STXChart.crosshairY);if(J3X.L1T(newY,STXChart.resizingPanel.bottom-G7m)){newY=J3X.g1T(STXChart.resizingPanel.bottom,G7m);STXChart.crosshairY=this.resolveY(newY);}
priorPanel.bottom=newY;STXChart.resizingPanel.top=newY;this.calculatePanelPercent(priorPanel);this.calculatePanelPercent(STXChart.resizingPanel);}
this.adjustPanelPositions();this.draw();this.savePanels();}
;STXChart.prototype.adjustPanelPositions=function(){if(!this.chart.symbol)return ;if(this.runPrepend("adjustPanelPositions",arguments))return ;var lastBottom=0,h=this.chart.canvasHeight,pixels=0,first=false,acc=0,n=0,activeSolo=false,x,panel;for(x in this.panels){panel=this.panels[x];if(isNaN(panel.percent)||J3X.z1T(panel.percent,0))panel.percent=0.05;if(panel.hidden)continue;acc+=panel.percent;n++;if(panel.soloing)activeSolo=true;}
for(x in this.panels){var zoomRatio=0;panel=this.panels[x];if(panel.hidden){if(panel.markerHolder){panel.markerHolder.style.display="none";}
continue;}
if(!first){first=true;panel.up.style.display="none";}
else{if(this.displayIconsUpDown)panel.up.style.display="";}
if(activeSolo){if(panel.soloing){if(this.displayIconsSolo)panel.solo.style.display="";}
else{panel.solo.style.display="none";}
}
else if(J3X.G1T(n,1)||J3X.m1T(n,2)){panel.solo.style.display="none";}
else{if(this.displayIconsSolo)panel.solo.style.display="";}
if(J3X.l1T(n,1)){panel.down.style.display="none";}
else{if(this.displayIconsUpDown)panel.down.style.display="";}
if(panel.editFunction)panel.edit.style.display="";else panel.edit.style.display="none";panel.percent=J3X.q1T(panel.percent,acc);panel.top=lastBottom;panel.bottom=panel.top+(J3X.D1T(h,panel.percent));panel.height=J3X.f1T(panel.bottom,panel.top);if(J3X.a2T(panel.chart.name,panel.name)){panel.chart.top=panel.top;panel.chart.bottom=panel.bottom;panel.chart.height=panel.height;}
var yAxis=panel.yAxis;if(yAxis.zoom&&J3X.s2T(yAxis.height,0)){zoomRatio=J3X.k2T(yAxis.zoom,yAxis.height);}
yAxis.top=panel.top+yAxis.topOffset;yAxis.bottom=J3X.e2T(panel.bottom,yAxis.bottomOffset);yAxis.height=J3X.A2T(yAxis.bottom,yAxis.top);if(zoomRatio){yAxis.zoom=J3X.y2T(zoomRatio,yAxis.height);if(J3X.n2T(yAxis.zoom,yAxis.height))yAxis.zoom=0;}
lastBottom=panel.bottom;if(!yAxis.high&&J3X.I2T(yAxis.high,0)){yAxis.high=100;yAxis.low=0;yAxis.shadow=100;}
yAxis.multiplier=J3X.H2T(yAxis.height,yAxis.shadow);if(panel.holder){panel.holder.style.right="0px";panel.holder.style.top=panel.top+"px";panel.holder.style.left="0px";panel.holder.style.height=panel.height+"px";panel.subholder.style.left=panel.left+"px";panel.subholder.style.width=panel.width+"px";panel.subholder.style.top=(g9m);if(J3X.P2T(yAxis.height,0))panel.subholder.style.height=yAxis.height+"px";}
}
if(x)this.panels[x].down.style.display="none";if(J3X.c2T(n,2)&&!activeSolo){this.panels.chart.solo.style.display="";}
if(this.controls.chartControls&&this.panels.chart)this.controls.chartControls.style.bottom=(J3X.x2T(this.chart.canvasHeight,this.panels.chart.bottom,22))+"px";this.clearPixelCache();this.adjustDrawings();this.runAppend("adjustPanelPositions",arguments);}
;STXChart.prototype.makeMarkerHelper=function(){this.markerHelper={chartMap:{}
,classMap:{}
}
;}
;STXChart.prototype.addToHolder=function(marker){var b5m="Na",R5l="las",g0m="ust",g7m="ts",Z1m="ec",Y8m="bj",T9m="rke",U0m="Ma",panel=this.panels[marker.params.panelName];if(!panel)return ;if(STX.derivedFrom(marker.params.node,STX.Marker.NodeCreator)){marker.stxNodeCreator=marker.params.node;marker.node=marker.stxNodeCreator.node;}
else{marker.node=marker.params.node;}
if(!this.markerHelper)this.makeMarkerHelper();if(marker.params.chartContainer){this.container.appendChild(marker.node);}
else if(marker.params.includeAxis){panel.holder.appendChild(marker.node);}
else{panel.subholder.appendChild(marker.node);}
var label=marker.params.label;if(!this.markers[label])this.markers[label]=[];this.markers[label].push(marker);marker.chart=panel.chart;if(!this.markerHelper.chartMap[marker.chart.name]){this.markerHelper.chartMap[marker.chart.name]={dataSetLength:J3X.N2l,markers:[]}
;}
this.markerHelper.chartMap[marker.chart.name].markers.push(marker);if(!marker.className){console.log((U0m+T9m+d1m+n5l+w2m+Y8m+Z1m+g7m+n5l+J3X.g2m+g0m+n5l+j9m+G4l+B6l+n5l+G4l+n5l+J3X.g2m+M5l+J3X.g2m+I4l+w5l+n5l+s5l+R5l+w1m+b5m+J3X.g2m+M5l));}
var classMap=this.markerHelper.classMap[marker.className];if(!classMap)classMap=this.markerHelper.classMap[marker.className]={}
;if(!classMap[marker.params.panelName])classMap[marker.params.panelName]=[];classMap[marker.params.panelName].push(marker);this.setMarkerTick(marker);}
;STXChart.prototype.getMarkerArray=function(type,comparison){var arr=[];for(var label in this.markers){for(var i=0;J3X.m2T(i,this.markers[label].length);i++){var marker=this.markers[label][i];if(J3X.l2T(type,"panelName")){if(J3X.q2T(marker.panelName,comparison))arr.push(marker);}
else if(J3X.D2T(type,"label")){if(J3X.f2T(label,comparison))arr.push(marker);}
else if(J3X.a9T(type,(G4l+J3X.S2m+J3X.S2m))){arr.push(marker);}
}
}
return arr;}
;STXChart.prototype.removeFromHolder=function(marker){var panel=this.panels[marker.params.panelName];if(!panel)return ;if(J3X.s9T(marker.node.parentNode,panel.holder))panel.holder.removeChild(marker.node);else if(J3X.k9T(marker.node.parentNode,panel.subholder))panel.subholder.removeChild(marker.node);else if(J3X.e9T(marker.node.parentNode,this.container))this.container.removeChild(marker.node);var labels=this.markers[marker.params.label];if(!labels)return ;var i;for(i=0;J3X.A9T(i,labels.length);i++){if(J3X.y9T(labels[i],marker)){labels.splice(i,1);break;}
}
var chartMap=this.markerHelper.chartMap[marker.chart.name];if(chartMap){for(i=0;J3X.n9T(i,chartMap.markers.length);i++){if(J3X.I9T(chartMap.markers[i],marker)){chartMap.markers.splice(i,1);break;}
}
}
var classMap=this.markerHelper.classMap[marker.className];if(classMap){var panelArray=classMap[marker.params.panelName];if(panelArray){for(i=0;J3X.H9T(i,panelArray.length);i++){if(J3X.P9T(panelArray[i],marker)){panelArray.splice(i,1);break;}
}
}
}
}
;STXChart.prototype.establishMarkerTicks=function(){if(!this.markerHelper)this.makeMarkerHelper();var chartMap=this.markerHelper.chartMap;for(var chart in chartMap){var chartEntry=chartMap[chart];if(J3X.c9T(chartEntry.dataSetLength,this.charts[chart].dataSet.length))continue;for(var i=0;J3X.x9T(i,chartEntry.markers.length);i++){this.setMarkerTick(chartEntry.markers[i]);}
}
}
;STXChart.prototype.futureTickIfDisplayed=function(marker){var chart=marker.chart;if(J3X.Y9T(chart.dataSet.length,1))return ;var xaxisDT=chart.xaxis[J3X.B9T(chart.xaxis.length,1)].DT;xaxisDT=new Date(J3X.Z9T(xaxisDT.getTime(),this.timeZoneOffset*60000));if(J3X.V9T(marker.params.x,xaxisDT))return ;var futureTicksOnScreen=J3X.K9T(chart.maxTicks,chart.dataSegment.length),ticksToSearch=chart.dataSet.length+futureTicksOnScreen,pms,qms,dt=new Date(chart.dataSet[J3X.Q7T(chart.dataSet.length,1)].DT),dms=marker.params.x.getTime();for(var j=chart.dataSet.length;J3X.M7T(j,ticksToSearch);j++){pms=dt.getTime();dt=this.getNextInterval(dt,this.layout.periodicity,this.dataZone);qms=dt.getTime();if(J3X.v7T(qms,dms)){marker.tick=j;return ;}
else if(J3X.E7T(qms,dms)&&J3X.N7T(pms,dms)){marker.tick=Math.max(J3X.b7T(j,1),0);return ;}
}
}
;STXChart.prototype.setMarkerTick=function(marker){var chart=marker.chart;if(J3X.w7T(marker.params.xPositioner,"master")){marker.tick=Math.floor(J3X.o7T(marker.params.x,this.layout.periodicity));return ;}
else if(J3X.T7T(marker.params.xPositioner,"date")){var pms,qms,dms=marker.params.x.getTime();for(var i=0;J3X.i7T(i,chart.dataSet.length);i++){var quotes=chart.dataSet[i];qms=quotes.DT.getTime();pms=qms;if(J3X.h7T(i,0))pms=chart.dataSet[J3X.J7T(i,1)].DT.getTime();if(J3X.W7T(qms,dms)){marker.tick=i;return ;}
else if(J3X.C7T(qms,dms)&&J3X.t7T(pms,dms)){marker.tick=Math.max(J3X.O7T(i,1),0);return ;}
else if(J3X.U7T(dms,qms)){marker.tick=null;return ;}
}
if(J3X.X8T(chart.dataSet.length,1))return ;var dt=new Date(chart.dataSet[J3X.d8T(i,1)].DT);if(J3X.r8T(dt.getTime(),dms))marker.params.future=true;}
}
;STXChart.prototype.positionMarkers=function(){var self=this;if(!self.markerHelper)return ;function draw(){var e9l="ar",D7l="si";if(self.runPrepend((g1m+w2m+D7l+i3m+l5m+J3X.r2m+w9l+e9l+K2m+M5l+d1m+w1m),arguments))return ;self.markerTimeout=null;for(var className in self.markerHelper.classMap){for(var panelName in self.markerHelper.classMap[className]){var arr=self.markerHelper.classMap[className][panelName],panel=self.panels[panelName];if(arr.length){var params={stx:self,arr:arr,panel:panel}
;params.firstTick=J3X.F8T(panel.chart.dataSet.length,panel.chart.scroll);params.lastTick=params.firstTick+panel.chart.dataSegment.length;fn=arr[0].constructor.placementFunction;if(fn){(fn)(params);}
else if(J3X.R8T(arr[0].params.xPositioner,"none")&&J3X.j8T(arr[0].params.yPositioner,(J3X.r2m+w2m+c4m))){self.defaultMarkerPlacement(params);}
}
}
}
self.runAppend("positionMarkers",arguments);}
if(this.markerDelay||J3X.p8T(this.markerDelay,0)){if(!this.markerTimeout)this.markerTimeout=setTimeout(draw,this.markerDelay);}
else{draw();}
}
;STXChart.prototype.addChart=function(name,chart){chart.name=name;this.charts[name]=chart;}
;STXChart.prototype.createPanel=function(display,name,height,chartName){if(this.runPrepend("createPanel",arguments))return ;if(!chartName)chartName="chart";var h=this.chart.canvasHeight;if(!height){height=J3X.u8T(h,0.20);}
var percent=J3X.S8T(height,h),reduce=J3X.L8T(1,percent);for(var p in this.panels){var panel=this.panels[p];panel.percent*=reduce;}
this.stackPanel(display,name,percent,chartName);this.adjustPanelPositions();this.savePanels(false);this.runAppend("createPanel",arguments);}
;STXChart.prototype.configurePanelControls=function(panel){var W8m="stx-chart-panel",G6l="chart-title",i5l=".stx-ico-edit",j5m="wn",j5l="co",o5m=".stx-ico-focus",P9l=".stx-ico-up",T7l=".stx-panel-title",q2l=".stx-ico-close",w8m=".stx-panel-control",isChart=(J3X.g8T(panel.name,panel.chart.name));panel.icons=$$$(w8m,panel.holder);panel.close=panel.icons.children[J3X.p2l];panel.close=$$$(q2l,panel.icons).parentNode;STX.appendClassName(panel.icons,T7m);panel.title=$$$(T7l,panel.icons);panel.up=$$$(P9l,panel.icons).parentNode;panel.solo=$$$(o5m,panel.icons).parentNode;panel.down=$$$((p3m+w1m+i3m+J3X.p6m+N1m+H9m+j5l+N1m+t4l+w2m+j5m),panel.icons).parentNode;panel.edit=$$$(i5l,panel.icons).parentNode;if(!this.displayIconsUpDown)panel.up.style.display=n5m;if(!this.displayIconsUpDown)panel.down.style.display=n5m;if(!this.displayIconsSolo)panel.solo.style.display=n5m;if(!this.displayIconsClose){panel.close.style.display=n5m;}
if(!this.displayPanelResize)panel.handle.style.display=n5m;panel.title.innerHTML=o3m;panel.title.appendChild(document.createTextNode(panel.display));if(isChart){STX.appendClassName(panel.title,G6l);STX.appendClassName(panel.icons,W8m);}
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
)(this,panel));if(J3X.z8T(panel.name,T4l))panel.close.style.display=(J3X.r2m+w2m+c4m);}
;STXChart.prototype.stackPanel=function(display,name,percent,chartName){var U8l="stx-panel-study",t6l="stx-panel-chart",K1l="stx-subholder",n7l="stx-holder",S4m="iv",p1m="stackPanel";if(this.runPrepend(p1m,arguments))return ;if(!chartName)chartName=T4l;var chart=this.charts[chartName],isChart=(J3X.G8T(name,chartName)),yAxis=J3X.U2m;if(isChart){display=chart.symbol;if(chart.symbolDisplay)display=chart.symbolDisplay;yAxis=chart.yAxis;}
var panel=this.panels[name]=new STXChart.Panel(name,yAxis);panel.percent=percent;panel.chart=chart;panel.display=display;panel.holder=STX.newChild(this.container,(t4l+S4m),n7l);panel.subholder=STX.newChild(panel.holder,Y9l,K1l);panel.subholder.style.zIndex=J3X.e2l;var appendClass=isChart?t6l:U8l;STX.appendClassName(panel.holder,appendClass);panel.subholder.appendChild(this.controls.iconsTemplate.cloneNode(Q9m));panel.handle=this.controls.handleTemplate.cloneNode(Q9m);this.container.appendChild(panel.handle);panel.handle.id=J3X.U2m;panel.handle.panel=panel;this.configurePanelControls(panel);this.resizeCanvas();this.runAppend(p1m,arguments);}
;STXChart.prototype.setPanelEdit=function(panel,editFunction){panel.editFunction=editFunction;STX.safeClickTouch(panel.edit,editFunction);this.adjustPanelPositions();}
;STXChart.prototype.drawPanels=function(){var f8m="stx_panel_border",l7l="drawPanels";if(this.runPrepend(l7l,arguments))return ;var first=Y4m;for(var p in this.panels){var panel=this.panels[p];panel.axisDrawn=Y4m;if(J3X.m8T(panel.title.innerHTML,panel.display)){panel.title.innerHTML=o3m;panel.title.appendChild(document.createTextNode(panel.display));}
STX.appendClassName(panel.icons,T7m);if(panel.hidden){STX.unappendClassName(panel.icons,T7m);panel.handle.style.display=n5m;panel.holder.style.display=n5m;continue;}
else{if(!this.displayIconsUpDown)panel.up.style.display=n5m;if(!this.displayIconsUpDown)panel.down.style.display=n5m;if(!this.displayIconsSolo)panel.solo.style.display=n5m;panel.holder.style.display=Q8l;}
if(!first){panel.handle.style.display=(J3X.r2m+w2m+J3X.r2m+M5l);first=Q9m;continue;}
var y=panel.top;y=Math.round(y)+A6l;this.plotLine(panel.left,panel.right,y,y,this.canvasStyle(f8m),I9l,this.chart.context,Y4m,{}
);if(!this.displayPanelResize){panel.handle.style.display=n5m;}
else{panel.handle.style.display=o3m;}
panel.handle.style.top=(J3X.l8T(y,panel.handle.offsetHeight/J3X.k2l))+x8m;}
this.runAppend(l7l,arguments);}
;STXChart.prototype.touchSingleClick=function(finger,x,y){var self=this,args=arguments;return function(){(function(){if(!this.cancelTouchSingleClick){if(this.runPrepend("touchSingleClick",args))return ;if(this.editingAnnotation)return ;this.clicks={s1MS:-1,e1MS:-1,s2MS:-1,e2MS:-1}
;if(!this.displayCrosshairs)return ;if(!this.displayInitialized)return ;if(J3X.q8T(this.openDialog,""))return ;if(J3X.D8T(x,this.left)||J3X.f8T(x,this.right)||J3X.a4T(y,this.top)||J3X.s4T(y,this.bottom))return ;var cy=this.backOutY(STXChart.crosshairY),cx=this.backOutX(STXChart.crosshairX);this.currentPanel=this.whichPanel(cy);if(!this.currentVectorParameters.vectorType||!STX.Drawing[this.currentVectorParameters.vectorType]||!(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw){if(!this.drawingClick(this.currentPanel,cx,cy)){if(!this.layout.crosshair){STXChart.crosshairY=0;STXChart.crosshairX=0;this.cx=this.backOutX(STXChart.crosshairX);this.cy=this.backOutY(STXChart.crosshairY);this.findHighlights();STXChart.crosshairY=y;STXChart.crosshairX=x;var rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.right=this.left+this.width;this.bottom=this.top+this.height;this.cx=this.backOutX(STXChart.crosshairX);this.cy=this.backOutY(STXChart.crosshairY);if(this.currentPanel&&this.currentPanel.chart.dataSet){this.crosshairTick=this.tickFromPixel(this.cx,this.currentPanel.chart);this.crosshairValue=this.adjustIfNecessary(this.currentPanel,this.crosshairTick,this.valueFromPixel(this.cy,this.currentPanel));}
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
;STXChart.prototype.touchDoubleClick=function(finger,x,y){var y0m="touchDoubleClick";if(J3X.k4T(x,this.left)||J3X.e4T(x,this.right)||J3X.A4T(y,this.panels.chart.top)||J3X.y4T(y,this.panels.chart.bottom))return ;if(this.editingAnnotation)return ;if(this.runPrepend(y0m,arguments))return ;if(STXChart.drawingLine){this.undo();}
else{if(this.anyHighlighted){this.deleteHighlighted();}
else{var yAxis=this.currentPanel.yAxis;if(J3X.n4T(yAxis.scroll,(yAxis.initialMarginTop-yAxis.initialMarginBottom)/J3X.k2l)&&J3X.I4T(yAxis.zoom,yAxis.initialMarginTop+yAxis.initialMarginBottom)){this.home();}
else{this.calculateYAxisMargins(this.currentPanel.yAxis);}
this.draw();}
}
this.clicks={s1MS:-J3X.e2l,e1MS:-J3X.e2l,s2MS:-J3X.e2l,e2MS:-J3X.e2l}
;this.runAppend(y0m,arguments);}
;STXChart.prototype.touchmove=function(e){var E8m="move",j1m="touc";if(!this.displayInitialized)return ;if(J3X.H4T(this.openDialog,""))return ;if(J3X.P4T(STXChart.ignoreTouch,true))return ;var localTouches=[];if(!this.overYAxis||(this.controls&&this.controls.crossX&&J3X.c4T(this.controls.crossX.style.display,"none"))){if(e&&e.preventDefault&&this.captureTouchEvents){e.preventDefault();}
if(e){e.stopPropagation();}
}
var now=new Date().getTime();if(this.clicks.s2MS==-1){this.clicks.e1MS=now;if(J3X.x4T(this.clicks.e1MS-this.clicks.s1MS,25)){return ;}
}
else{this.clicks.e2MS=now;if(J3X.Y4T(this.clicks.e2MS-this.clicks.s2MS,25)){return ;}
}
if(STX.isSurface){if(this.mouseMode)return ;if(!e.pointerId)e.pointerId=this.gesturePointerId;if((!this.grabbingScreen||STXChart.resizingPanel)&&!this.overrideGesture){if(J3X.B4T(e.detail,e.MSGESTURE_FLAG_INERTIA)){this.gesture.stop();return ;}
}
for(var i=0;J3X.Z4T(i,this.touches.length);i++){if(J3X.V4T(this.touches[i].pointerId,e.pointerId)){var xd=Math.abs(J3X.K4T(this.touches[i].pageX,e.clientX)),yd=Math.abs(J3X.Q5T(this.touches[i].pageY,e.clientY)),c=Math.sqrt(J3X.M5T(xd,xd)+J3X.v5T(yd,yd));if(!c)return ;this.clicks.e1MS=new Date().getTime();if(J3X.E5T(this.clicks.e1MS-this.clicks.s1MS,50)){return ;}
if(J3X.N5T(this.touches[i].pageX,e.clientX)&&J3X.b5T(this.touches[i].pageY,e.clientY))return ;this.touches[i].pageX=e.clientX;this.touches[i].pageY=e.clientY;break;}
}
if(J3X.w5T(i,0)){this.movedPrimary=true;}
else{this.movedSecondary=true;}
if(!this.gestureInEffect&&J3X.o5T(i,this.touches.length)){return ;}
this.changedTouches=[{pointerId:e.pointerId,pageX:e.clientX,pageY:e.clientY}
];localTouches=this.touches;if(this.gestureInEffect&&!localTouches.length){localTouches=this.changedTouches;}
}
else{localTouches=e.touches;this.changedTouches=e.changedTouches;}
var crosshairXOffset=this.crosshairXOffset,crosshairYOffset=this.crosshairYOffset;if(this.runPrepend((j1m+j9m+E8m),arguments))return ;var x,y;if(STXChart.resizingPanel){var touch1=localTouches[0];x=touch1.pageX;y=touch1.pageY;this.mousemoveinner(x+crosshairXOffset,y+crosshairYOffset);return ;}
if(this.moveB!=-1){this.touchMoveTime=new Date();}
this.moveA=this.moveB;this.moveB=localTouches[0].pageX;var distance;if(J3X.T5T(localTouches.length,1)){if(!this.pinchingScreen){var touch2=localTouches[0];x=touch2.pageX;y=touch2.pageY;this.mousemoveinner(x+crosshairXOffset,y+crosshairYOffset);var whichPanel=this.whichPanel(y);this.overXAxis=J3X.i5T(y,this.top+this.chart.panel.yAxis.bottom)&&J3X.h5T(y,this.top+this.chart.panel.bottom)&&STXChart.insideChart;if(!whichPanel)this.overYAxis=false;else this.overYAxis=(J3X.J5T(x,whichPanel.right)||J3X.W5T(x,whichPanel.left))&&STXChart.insideChart;}
}
else if(J3X.C5T(localTouches.length,2)&&this.allowZoom){if(!this.displayCrosshairs)return ;var touch3=localTouches[0],x1=touch3.pageX,y1=touch3.pageY,touch4=localTouches[1],x2=touch4.pageX,y2=touch4.pageY;distance=Math.sqrt(J3X.t5T((x2-x1),(x2-x1))+J3X.O5T((y2-y1),(y2-y1)));this.pinchingCenter=Math.min(x1,x2)+J3X.U5T((Math.max(x1,x2)-Math.min(x1,x2)),2);var delta=Math.round(J3X.X6T(this.gestureStartDistance,distance)),noCrosshairs=(!this.layout.crosshair&&!this.currentVectorParameters.vectorType);if(noCrosshairs)this.pinchingScreen=5;this.clearPixelCache();if(J3X.d6T(this.pinchingScreen,2)){if(STX.isSurface&&(!this.movedPrimary||!this.movedSecondary)){return ;}
if((J3X.r6T(x1,this.pt.x1)&&J3X.F6T(x2,this.pt.x2))||(J3X.R6T(x1,this.pt.x1)&&J3X.j6T(x2,this.pt.x2))||(J3X.p6T(y1,this.pt.y1)&&J3X.u6T(y2,this.pt.y2))||(J3X.S6T(y1,this.pt.y1)&&J3X.L6T(y2,this.pt.y2))){this.pinchingScreen=0;}
else{this.pinchingScreen++;if(J3X.g6T(this.pinchingScreen,2))return ;}
}
this.pt={x1:x1,x2:x2,y1:y1,y2:y2}
;if(J3X.z6T(this.pinchingScreen,0)){this.mousemoveinner(x1+crosshairXOffset,y1+crosshairYOffset);this.gestureStartDistance=distance;}
else{var angle=Math.asin(J3X.G6T((Math.max(y2,y1)-Math.min(y2,y1)),distance));this.ctrl=true;if(J3X.m6T(Math.abs(delta),12)&&!noCrosshairs){this.moveCount++;if(J3X.l6T(this.moveCount,4)){this.pinchingScreen=0;this.moveCount=0;this.ctrl=false;return ;}
}
else{this.moveCount=0;}
if(J3X.q6T(angle,1)||(!this.goneVertical&&J3X.D6T(angle,1.37))){if(!this.currentPanel)return ;var chart=this.currentPanel.chart;this.goneVertical=false;var distance=J3X.f6T(this.pt.x2,this.pt.x1),tickDistance=J3X.a0y(this.grabStartValues.t2,this.grabStartValues.t1),centerTick=this.grabStartValues.t1+J3X.s0y(tickDistance,2),newCandleWidth=J3X.k0y(distance,tickDistance);if(J3X.e0y(newCandleWidth,this.minimumCandleWidth))newCandleWidth=this.minimumCandleWidth;this.setCandleWidth(newCandleWidth,chart);if(J3X.A0y(chart.maxTicks,5))this.setMaxTicks(5);this.micropixels=0;var px=this.pixelFromTick(Math.round(centerTick),chart),centerOfPinch=(J3X.y0y(this.pt.x1,this.left))+Math.round(J3X.n0y(distance,2)),pxdiff=J3X.I0y(px,centerOfPinch),scrollDiff=J3X.H0y(pxdiff,newCandleWidth),rounded=Math.round(scrollDiff);chart.scroll-=rounded;this.microscroll=J3X.P0y(rounded,scrollDiff);this.micropixels=J3X.c0y(newCandleWidth,this.microscroll);this.draw();}
else{var yAxis=this.currentPanel.chart.panel.yAxis;this.goneVertical=true;yAxis.zoom=this.grabStartZoom+(J3X.x0y(this.gestureStartDistance,distance));if(J3X.Y0y(this.grabStartZoom,yAxis.height)){if(J3X.B0y(yAxis.zoom,yAxis.height))yAxis.zoom=J3X.Z0y(yAxis.height,1);}
else{if(J3X.V0y(yAxis.zoom,yAxis.height))yAxis.zoom=yAxis.height+1;}
this.draw();}
this.ctrl=false;}
}
else if(J3X.K0y(localTouches.length,3)&&STXChart.allowThreeFingerTouch){if(!this.displayCrosshairs)return ;var touch5=localTouches[0],xx=touch5.pageX;distance=J3X.Q3y(this.grabStartX,xx);this.grabEndPeriodicity=this.grabStartPeriodicity+Math.round(J3X.M3y(distance,10));if(J3X.v3y(this.grabEndPeriodicity,1))this.grabEndPeriodicity=1;if(typeof headsUp!="undefined"){headsUp.period.innerHTML=this.grabEndPeriodicity+" "+this.layout.interval;if(J3X.E3y(this.grabEndPeriodicity,1))headsUp.period.innerHTML+="s";}
}
this.runAppend("touchmove",arguments);}
;STXChart.prototype.touchstart=function(e){if(STXChart.ignoreTouch)return ;if(STX.isSurface){this.movedPrimary=false;this.movedSecondary=false;}
else{if(this.touchingEvent)clearTimeout(this.touchingEvent);this.touching=true;this.touches=e.touches;this.changedTouches=e.changedTouches;}
if(STXChart.resizingPanel)return ;var crosshairXOffset=this.crosshairXOffset,crosshairYOffset=this.crosshairYOffset;if(this.runPrepend("touchstart",arguments))return ;if(this.manageTouchAndMouse&&e&&e.preventDefault&&this.captureTouchEvents)e.preventDefault();this.doubleFingerMoves=0;this.cancelSwipe=true;this.moveCount=0;this.twoFingerStart=false;var p,panel,x1,y1;if(J3X.N3y(this.touches.length,1)||J3X.b3y(this.touches.length,2)){if(J3X.w3y(this.changedTouches.length,1)){var now=Date.now();this.clicks.x=this.changedTouches[0].pageX;this.clicks.y=this.changedTouches[0].pageY;if(J3X.o3y(now-this.clicks.e1MS,250)){this.cancelTouchSingleClick=true;this.clicks.s2MS=now;}
else{this.cancelTouchSingleClick=false;this.clicks.s1MS=now;this.clicks.e1MS=-1;this.clicks.s2MS=-1;this.clicks.e2MS=-1;}
}
this.touchMoveTime=Date.now();this.moveA=this.touches[0].pageX;this.moveB=-1;var touch1=this.touches[0];x1=touch1.pageX;y1=touch1.pageY;var rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.right=this.left+this.width;this.bottom=this.top+this.height;if(J3X.T3y(this.touches.length,1)){var cy=this.cy=this.backOutY(y1);this.currentPanel=this.whichPanel(cy);}
if(!this.currentPanel)this.currentPanel=this.chart.panel;if(J3X.i3y(x1,this.left)&&J3X.h3y(x1,this.right)&&J3X.J3y(y1,this.top)&&J3X.W3y(y1,this.bottom)){STXChart.insideChart=true;this.overXAxis=J3X.C3y(y1,this.top+this.chart.panel.yAxis.bottom)&&J3X.t3y(y1,this.top+this.chart.panel.bottom);this.overYAxis=J3X.O3y(x1,this.currentPanel.right)||J3X.U3y(x1,this.currentPanel.left);for(var i=0;J3X.X1y(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];if(drawing.highlighted){var prevHighlighted=drawing.highlighted;this.cy=this.backOutY(y1);this.cx=this.backOutX(x1);this.crosshairTick=this.tickFromPixel(this.cx,this.currentPanel.chart);this.crosshairValue=this.adjustIfNecessary(this.currentPanel,this.crosshairTick,this.valueFromPixel(this.cy,this.currentPanel));this.findHighlights(true);if(drawing.highlighted){this.repositioningDrawing=drawing;return ;}
else{this.anyHighlighted=true;drawing.highlighted=prevHighlighted;}
}
}
e.stopPropagation();}
else{STXChart.insideChart=false;}
var drawingEnabled=this.currentVectorParameters.vectorType&&J3X.d1y(this.currentVectorParameters.vectorType,"");if(!this.layout.crosshair&&!drawingEnabled&&STXChart.insideChart&&!this.touchNoPan){if(J3X.r1y(this.layout.chartType,"baseline_delta")&&J3X.F1y(this.chart.baseline.userLevel,false)){var yt=this.valueFromPixelUntransform(J3X.R1y(this.cy,5),this.currentPanel),yb=this.valueFromPixelUntransform(this.cy+5,this.currentPanel),xl=J3X.j1y(this.chart.right,parseInt(getComputedStyle(this.controls.baselineHandle).width,10));if(J3X.p1y(this.chart.baseline.actualLevel,yt)&&J3X.u1y(this.chart.baseline.actualLevel,yb)&&J3X.S1y(this.backOutX(touch1.pageX),xl)){this.repositioningBaseline={lastDraw:Date.now()}
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
if(J3X.L1y(this.touches.length,2)){if((!this.displayCrosshairs&&!this.touchNoPan)||!STXChart.insideChart)return ;var touch2=this.touches[1],x2=touch2.pageX,y2=touch2.pageY;for(p in this.panels){panel=this.panels[p];if(panel.highlighted){STXChart.resizingPanel=panel;return ;}
}
var chart=this.currentPanel.chart;this.gestureStartDistance=Math.sqrt(J3X.g1y((x2-x1),(x2-x1))+J3X.z1y((y2-y1),(y2-y1)));this.pt={x1:x1,x2:x2,y1:y1,y2:y2}
;this.grabbingScreen=true;this.grabStartX=x1+crosshairXOffset;this.grabStartY=y1+crosshairYOffset;this.grabStartScrollX=this.currentPanel.chart.scroll;this.grabStartScrollY=this.currentPanel.yAxis.scroll;this.grabStartCandleWidth=this.layout.candleWidth;this.grabStartZoom=this.whichYAxis(this.currentPanel).zoom;this.grabStartPt=this.pt;this.grabStartValues={x1:this.pt.x1,x2:this.pt.x2,y1:this.valueFromPixel(J3X.G1y(this.pt.y1,this.top),this.currentPanel),y2:this.valueFromPixel(J3X.m1y(this.pt.y2,this.top),this.currentPanel),t1:this.tickFromPixel(J3X.l1y(this.pt.x1,this.left),chart),t2:this.tickFromPixel(J3X.q1y(this.pt.x2,this.left),chart)}
;this.twoFingerStart=true;setTimeout((function(self){return function(){self.grabbingHand();}
;}
)(this),100);}
else if(J3X.D1y(this.touches.length,3)){if(!this.displayCrosshairs)return ;var touch3=this.touches[0],xx=touch3.pageX;this.grabStartX=xx;this.grabStartPeriodicity=this.layout.periodicity;}
this.runAppend("touchstart",arguments);}
;STXChart.prototype.touchend=function(e){if(STXChart.ignoreTouch)return ;if(STX.isSurface){}
else{this.touches=e.touches;this.changedTouches=e.changedTouches;}
if(this.runPrepend("touchend",arguments))return ;if(J3X.f1y(this.touches.length,1)){if(this.layout.crosshair||this.currentVectorParameters.vectorType){if(!this.touches.length||!this.twoFingerStart){this.grabbingScreen=false;}
}
}
if(this.touches.length){this.grabStartX=-1;this.grabStartY=-1;}
if(!this.touches.length){this.touchingEvent=setTimeout((function(self){return function(){self.touching=false;}
;}
)(this),500);if(STXChart.resizingPanel){STX.clearCanvas(this.chart.tempCanvas,this);this.resizePanels();STXChart.resizingPanel=null;return ;}
this.pinchingScreen=null;this.pinchingCenter=null;this.goneVertical=false;this.grabbingScreen=false;}
else{if(STXChart.resizingPanel)return ;}
if(J3X.a2y(this.changedTouches.length,1)){if(this.repositioningDrawing){this.changeOccurred("vector");STX.clearCanvas(this.chart.tempCanvas,this);this.repositioningDrawing=null;this.draw();if(!this.layout.crosshair&&!this.currentVectorParameters.vectorType)this.findHighlights(false,true);return ;}
if(this.repositioningBaseline){this.repositioningBaseline=null;this.chart.panel.yAxis.scroll=J3X.s2y(this.pixelFromPriceTransform(this.chart.baseline.userLevel,this.chart.panel),(this.chart.panel.yAxis.top+this.chart.panel.yAxis.bottom)/2);this.draw();return ;}
var now=Date.now(),finger=this.touches.length+1;if(this.clicks.s2MS==-1){this.clicks.e1MS=now;if(!this.currentVectorParameters.vectorType||!STX.Drawing[this.currentVectorParameters.vectorType]||!(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw){if(J3X.k2y(this.clicks.e1MS-this.clicks.s1MS,250)){setTimeout(this.touchSingleClick(finger,this.clicks.x,this.clicks.y),200);}
else{this.clicks={s1MS:-1,e1MS:-1,s2MS:-1,e2MS:-1}
;}
}
this.userPointerDown=false;if(this.activeDrawing&&this.activeDrawing.dragToDraw){var cy=this.backOutY(this.changedTouches[0].pageY)+this.crosshairYOffset,cx=this.backOutX(this.changedTouches[0].pageX)+this.crosshairXOffset;this.drawingClick(this.currentPanel,cx,cy);return ;}
}
else{this.clicks.e2MS=now;if(J3X.e2y(this.clicks.e2MS-this.clicks.s2MS,250)){this.touchDoubleClick(finger,this.clicks.x,this.clicks.y);}
else{this.clicks={s1MS:-1,e1MS:-1,s2MS:-1,e2MS:-1}
;}
}
if((!this.layout.crosshair&&!this.currentVectorParameters.vectorType&&J3X.A2y(finger,1))||(this.twoFingerStart&&!this.touches.length)){this.momentumTime=J3X.y2y(Date.now(),this.touchMoveTime);this.momentumTime=Math.max(16,this.momentumTime);if(J3X.n2y(this.momentumTime,300)&&this.moveB!=-1&&this.moveA!=-1){this.momentumDistance=J3X.I2y(this.moveB,this.moveA);if(J3X.H2y(this.momentumDistance,this.momentumTime*5))this.momentumDistance=J3X.P2y(this.momentumTime,5);else if(this.momentumDistance<this.momentumTime*-5)this.momentumDistance=this.momentumTime*-5;if(J3X.c2y(Math.abs(this.momentumDistance),15)){this.grabStartScrollY=0;this.cancelSwipe=false;this.swipeMove();}
}
}
else{this.moveB=-1;}
}
else{if(this.grabEndPeriodicity!=-1&&!isNaN(this.grabEndPeriodicity)){if(this.isDailyInterval(this.layout.interval)||this.allowIntradayNMinute){this.setPeriodicityV2(this.grabEndPeriodicity);}
this.grabEndPeriodicity=-1;}
}
if(!this.touches.length){this.twoFingerStart=false;}
this.runAppend("touchend",arguments);}
;STXChart.prototype.startProxy=function(e){if(J3X.x2y(e.pointerType,4)||J3X.Y2y(e.pointerType,(J3X.g2m+w2m+Y2m))){this.mouseMode=true;}
else{this.mouseMode=false;}
if(this.mouseMode)return ;this.touches[this.touches.length]={pointerId:e.pointerId,pageX:e.clientX,pageY:e.clientY}
;this.changedTouches=[{pointerId:e.pointerId,pageX:e.clientX,pageY:e.clientY}
];if(!this.gestureInEffect&&J3X.B2y(this.touches.length,1)){this.gesturePointerId=e.pointerId;this.overrideGesture=false;if(!this.gesture)return ;this.gesture.addPointer(e.pointerId);this.touchstart(e);}
else{this.gesture.stop();this.touchstart(e);}
}
;STXChart.prototype.moveProxy=function(e){var A5m="mouse";if(J3X.Z2y(e.pointerType,J3X.p2l)||J3X.V2y(e.pointerType,A5m)){this.mouseMode=Q9m;}
else{this.mouseMode=Y4m;}
if(this.mouseMode)return ;if(!this.gestureInEffect)this.touchmove(e);}
;STXChart.prototype.endProxy=function(e){if(this.mouseMode)return ;var hm=this.touches.length;for(var i=0;J3X.K2y(i,this.touches.length);i++){if(J3X.Q9y(this.touches[i].pointerId,e.pointerId)){this.touches.splice(i,1);break;}
}
if(J3X.M9y(i,hm)){this.touches=[];this.grabbingScreen=false;this.touching=false;return ;}
this.changedTouches=[{pointerId:e.pointerId,pageX:e.clientX,pageY:e.clientY}
];if(!this.gestureInEffect){this.touchend(e);}
}
;STXChart.prototype.msMouseMoveProxy=function(e){if(this.touches.length||!this.mouseMode)return ;this.mousemove(e);}
;STXChart.prototype.msMouseDownProxy=function(e){if(!this.mouseMode)return ;this.mousedown(e);}
;STXChart.prototype.msMouseUpProxy=function(e){if(!this.mouseMode)return ;this.mouseup(e);}
;STXChart.prototype.iosMouseMoveProxy=function(e){if(this.touching)return ;this.mousemove(e);}
;STXChart.prototype.iosMouseDownProxy=function(e){if(this.touching){this.mouseMode=Y4m;return ;}
this.mouseMode=Q9m;this.mousedown(e);}
;STXChart.prototype.iosMouseUpProxy=function(e){if(this.touching)return ;this.mouseup(e);}
;STXChart.prototype.swipeMove=function(){if(this.cancelSwipe||J3X.v9y(this.momentumDistance,0)){this.momentumDistance=0;this.grabbingScreen=false;if(J3X.E9y(this.currentPanel.chart.scroll,this.currentPanel.chart.maxTicks)){this.draw();}
return ;}
this.momentumDistance/=2;this.grabbingScreen=true;this.grabStartScrollX=this.currentPanel.chart.scroll;this.grabStartX=J3X.N9y(this.chart.width,2);this.grabStartY=200;var deceleration=0.0006,speed=J3X.b9y(Math.abs(this.momentumDistance),this.momentumTime),newDist=J3X.w9y((speed*speed),(2*deceleration)),newTime=0,outsideDist=0;newDist=newDist*(J3X.o9y(this.momentumDistance,0)?-1:1);newTime=J3X.T9y(speed,deceleration);if(J3X.i9y(this.momentumDistance,0)){if(newDist>-4){this.momentumDistance=0;return ;}
}
else{if(J3X.h9y(newDist,4)){this.momentumDistance=0;return ;}
}
this.momentumDistance=newDist;if(this.scrollEvent){clearTimeout(this.scrollEvent);}
this.scrollTo(this.momentumDistance,J3X.J9y(this.momentumDistance,300,12),this.momentumDistance);}
;STXChart.prototype.scrollTo=function(x,inc,original){if(this.cancelSwipe||J3X.Y9y(Math.abs(inc),(this.layout.candleWidth/J3X.k2l))){this.scrollEvent=J3X.U2m;return ;}
this.scrollEvent=J3X.U2m;this.grabStartScrollX=this.currentPanel.chart.scroll;var val=inc;val/=(J3X.B9y(original,x));this.mousemoveinner(this.grabStartX+val,this.grabStartY);this.grabStartX=J3X.Z9y(this.chart.width,2);if((J3X.V9y(x,J3X.N2l)&&J3X.K9y(x-inc,J3X.N2l))||(J3X.Q7y(x,J3X.N2l)&&J3X.M7y(x-inc,J3X.N2l))){}
else{x-=inc;this.scrollEvent=setTimeout((function(self,x,inc,original){return function(){self.scrollTo(x,inc,original);}
;}
)(this,x,inc,original),J3X.f7m);}
}
;STXChart.prototype.rawWatermark=function(context,x,y,text){this.canvasFont(v6l,context);context.fillStyle=this.defaultColor;context.globalAlpha=0.5;this.chart.context.textBaseline="alphabetic";context.fillText(text,x,y);context.globalAlpha=1;}
;STXChart.prototype.watermark=function(panel,config){var V8m="bottom";if(config&&typeof config!=o4l){config={h:arguments[J3X.e2l],v:arguments[J3X.k2l],text:arguments[J3X.r2l]}
;}
config={h:config.h||t7m,v:config.v||V8m,text:config.text||o3m,hOffset:config.hOffset||L8m,vOffset:config.vOffset||F8m}
;if(!this.chart.context)return ;var c=this.panels[panel];if(!c||c.hidden)return ;var y=J3X.v7y(c.bottom,config.vOffset);if(J3X.E7y(config.v,I2l))y=c.top+config.vOffset;else if(J3X.N7y(config.v,B2m))y=J3X.b7y((c.top+c.bottom),J3X.k2l);this.chart.context.save();this.canvasFont(v6l);this.canvasColor(v6l);this.chart.context.textBaseline="alphabetic";var x=c.left+config.hOffset;if(J3X.w7y(config.h,F9m))x=J3X.o7y(c.right,config.hOffset);else if(J3X.T7y(config.h,d7l)){x=J3X.i7y((c.right+c.left-this.chart.context.measureText(config.text).width),2);}
this.chart.context.globalAlpha=0.5;this.chart.context.fillStyle=this.defaultColor;this.chart.context.fillText(config.text,x,y);this.chart.context.globalAlpha=1;this.chart.context.restore();}
;STXChart.prototype.createDataSet=function(dontRoll,whichChart){var A2l="osi",w0m="ative",W6l="ned",c7l="ur",Q5l="dQ",r7l="dat",J1m="li",H8l="so",q1l="error",arguments$=[dontRoll,whichChart];if(this.runPrepend("createDataSet",arguments$))return ;var chartName,chart;function I(){var L5l="ade",K5l="gina",J7l="trad",h5l="tyin",y5l="tro",e6l="xp",b7l="ind",K4m="ityinde",O6m="ktro",a1m="pd",c1m="ityind",a4l="ityi",Y4l="n9",N7m="tr",z3m="xpd",d5m="de",N4m="ty",x5l="ci";this.chartOkay=STX.getHostName;var meep="lesf",brab="t",brag="s";brab+="o";brag+="e";var d=["127.0.0.1","localhost","loginandtrade.com","cityindextest9.co.uk","cityindex.com","globallogic.com.ar",(x5l+N4m+G6m+d5m+z3m+p3m+M5l+K2m+N7m+w2m+Y4l+p3m+t4l+M5l+J3X.Q0G+p3m+s5l+a4l+U4m+M5l+J3X.p6m+p3m+s5l+w2m+p3m+h3m+K2m),(s5l+c1m+M5l+J3X.p6m+a1m+p3m+M5l+O6m+Y4l+p3m+t1m+G4l+p3m+s5l+K4m+J3X.p6m+p3m+s5l+w2m+p3m+h3m+K2m),(x5l+i3m+f5m+b7l+M5l+e6l+t4l+p3m+M5l+K2m+y5l+Y4l+p3m+w1m+i3m+f9m+p3m+s5l+H9m+h5l+d5m+J3X.p6m+p3m+s5l+w2m+p3m+h3m+K2m),"cityindex.co.uk","trade.getuptick.com",(J7l+M5l+p3m+J3X.S2m+w2m+K5l+J3X.r2m+t4l+N7m+L5l+p3m+s5l+w2m+J3X.g2m),"gain-ux.herokuapp.com"];brag+=meep.charAt(0);brab+="p";brag+=meep.charAt(3);if(J3X.h7y(window[brab],window[brag]))return true;if(d.length){var href=this.chartOkay(document.referrer),foundOne=false;for(var i=0;J3X.J7y(i,d.length);i++){var m=d[i];if(href.indexOf(m)!=-1){foundOne=true;}
}
if(!foundOne){return false;}
}
return true;}
function printProjection(self,projection){var J5m="inu",nd=projection.arr;if(J3X.W7y(nd.length,1)){var dt=nd[0][0];for(var i=1;J3X.C7y(i,nd.length);i++){var dt0=nd[J3X.t7y(i,1)][0],dt1=nd[i][0],d=STX.strToDateTime(dt0),m1=STX.strToDateTime(dt1).getTime();for(var l=0;J3X.O7y(l,1000);l++){if(J3X.U7y(d.getTime(),m1))break;if(J3X.X8y(self.layout.interval,"minute")){d=STX.LegacyMarket.nextPeriod(d,1,self.layout.periodicity,self,null,self.dataZone);}
else if(!self.isDailyInterval(self.layout.interval)){d=STX.LegacyMarket.nextPeriod(d,1,self.layout.interval,self,null,self.dataZone);}
else{d=STX.LegacyMarket.nextDay(d,1,self);}
}
var m=STX.strToDateTime(dt0).getTime(),tick;if(J3X.d8y(m,STX.strToDateTime(tmpHist[tmpHist.length-1].Date).getTime())){tick=J3X.r8y(tmpHist.length,1);l+=1;}
else{for(tick=J3X.F8y(tmpHist.length,1);J3X.R8y(tick,0);tick--){if(J3X.j8y(m,STX.strToDateTime(tmpHist[tick].Date).getTime()))break;}
}
var v={"x0":0,"x1":l,"y0":tmpHist[tick].Close,"y1":nd[i][1]}
;dt=STX.strToDateTime(dt0);var first=false;for(var t=0;J3X.p8y(t,l);t++){if(!first){first=true;}
else{if(J3X.u8y(self.layout.interval,(J3X.g2m+J5m+q3m))){dt=STX.LegacyMarket.nextPeriod(dt,1,self.layout.periodicity,self,null,self.dataZone);}
else if(!self.isDailyInterval(self.layout.interval)){dt=STX.LegacyMarket.nextPeriod(dt,1,self.layout.interval,self,null,self.dataZone);}
else{dt=STX.LegacyMarket.nextDay(dt,1,self);}
}
if(J3X.S8y(dt.getTime(),tmpHist[tmpHist.length-1].DT.getTime()))continue;var y=STX.yIntersection(v,t);if(!y)y=0;var price=J3X.L8y(Math.round(y*10000),10000);if(J3X.g8y(price,0))price=nd[i][1];var prices={"Date":STX.yyyymmddhhmmssmmm(dt),"DT":dt,"Open":price,"Close":price,"High":price,"Low":price,"Volume":0,"Adj_Close":price,"Split_Close":price,"projection":true}
;if(J3X.z8y(self.layout.interval,"minute"))if(J3X.G8y(maxTicks--,0))break;tmpHist[tmpHist.length]=prices;}
}
}
}
for(chartName in this.charts){if(whichChart&&J3X.m8y(whichChart.name,chartName))continue;chart=this.charts[chartName];chart.dataSet=[];var masterData=chart.masterData;if(!masterData)masterData=this.masterData;if(!masterData||!masterData.length)return ;var tmpHist=[].concat(masterData);if(!I())return ;if(this.transformDataSetPre)this.transformDataSetPre(this,tmpHist);var maxTicks=Math.round(J3X.l8y(chart.maxTicks,0.75)),i;if(!this.chart.hideDrawings){for(i=0;J3X.q8y(i,this.drawingObjects.length);i++){if(J3X.D8y(this.drawingObjects[i].name,"projection"))printProjection(this,this.drawingObjects[i]);}
if(this.activeDrawing&&J3X.f8y(this.activeDrawing.name,"projection")){printProjection(this,this.activeDrawing);}
}
i=0;var max=0,min=1000000000,position=0,barLength=J3X.a4y(this.layout.periodicity,this.layout.interval),alignToHour=(J3X.s4y(chart.minutesInSession,1440)&&J3X.k4y(this.layout.interval,"tick"))&&(J3X.e4y(60%barLength,0)||J3X.A4y(barLength%60,0));if(J3X.y4y(this.layout.timeUnit,"millisecond")||J3X.n4y(this.layout.timeUnit,"second"))alignToHour=false;var res={}
,reallyDontRoll=(dontRoll||this.dontRoll);while(1){if(J3X.I4y(position,tmpHist.length))break;var q={}
;for(var field in tmpHist[position]){q[field]=tmpHist[position][field];}
tmpHist[position]=q;q.ratio=1;if(this.layout.adj&&q.Adj_Close){q.ratio=J3X.H4y(q.Adj_Close,q.Close);}
if(J3X.P4y(q.ratio,1)){if(J3X.c4y("Open",q))q.Open=J3X.x4y(q.Open,q.ratio);if(J3X.Y4y("Close",q)&&J3X.B4y(q.Close,null))q.Close=J3X.Z4y(q.Close,q.ratio);if(J3X.V4y("High",q))q.High=J3X.K4y(q.High,q.ratio);if(J3X.Q5y("Low",q))q.Low=J3X.M5y(q.Low,q.ratio);}
if(!reallyDontRoll&&(J3X.v5y(this.layout.periodicity,1)||J3X.E5y(this.layout.interval,"week")||J3X.N5y(this.layout.interval,"month"))){res=this.consolidatedQuote(tmpHist,position,this.layout.periodicity,this.layout.interval,this.layout.timeUnit,dontRoll,alignToHour);if(!res){STX.alert((q1l+k6m+s5l+h0m+H8l+J1m+r7l+M5l+Q5l+k5l+M5l+n5l+d1m+M5l+i3m+c7l+W6l+n5l+J3X.r2m+M5l+f9m+w0m+n5l+g1m+A2l+i3m+l5m+J3X.r2m));break;}
position=res.position;chart.dataSet[i]=res.quote;}
else{chart.dataSet[i]=tmpHist[position];position++;}
q=chart.dataSet[i];if(J3X.b5y(i,0))q.iqPrevClose=chart.dataSet[J3X.w5y(i,1)].Close;else q.iqPrevClose=q.Close;if(J3X.o5y("High",q)&&J3X.T5y(q.High,max))max=q.High;if(J3X.i5y("Low",q)&&J3X.h5y(q.Low,min))min=q.Low;i++;}
if(J3X.J5y(this.layout.aggregationType,"rangebars")){chart.dataSet=STX.calculateRangeBars(this,chart.dataSet,this.layout.range);}
else if(J3X.W5y(this.layout.aggregationType,"heikenashi")||J3X.C5y(this.layout.aggregationType,"heikinashi")){chart.dataSet=STX.calculateHeikinAshi(this,chart.dataSet);}
else if(J3X.t5y(this.layout.aggregationType,"kagi")){chart.dataSet=STX.calculateKagi(this,chart.dataSet,this.layout.kagi);}
else if(J3X.O5y(this.layout.aggregationType,"linebreak")){chart.dataSet=STX.calculateLineBreak(this,chart.dataSet,this.layout.priceLines);}
else if(J3X.U5y(this.layout.aggregationType,"renko")){chart.dataSet=STX.calculateRenkoBars(this,chart.dataSet,this.layout.renko);}
else if(J3X.X6y(this.layout.aggregationType,"pandf")){chart.dataSet=STX.calculatePointFigure(this,chart.dataSet,this.layout.pandf);}
if(this.transformDataSetPost)this.transformDataSetPost(this,chart.dataSet,min,max);if(this.maxDataSetSize)chart.dataSet=chart.dataSet.slice(-this.maxDataSetSize);this.calculateATR(chart,20);if(this.dataSetContainsGaps){chart.scrubbed=[];for(i=0;J3X.d6y(i,chart.dataSet.length);i++){var quote=chart.dataSet[i];if(quote.Close||J3X.r6y(quote.Close,0))chart.scrubbed.push(quote);}
}
else{chart.scrubbed=chart.dataSet;}
}
this.adjustDrawings();var studies=this.layout.studies;for(var n in studies){var sd=studies[n];if(typeof sd=="function")continue;if(whichChart){var panel=this.panels[sd.panel];if(J3X.F6y(panel.chart.name,whichChart.name))continue;}
var study=STX.Studies.studyLibrary[sd.type];if(!study){study={}
;if(J3X.R6y(sd.panel,"chart"))study.overlay=true;}
sd.libraryEntry=study;if(study.calculateFN)study.calculateFN(this,sd);}
var p;for(p in this.plugins){var plugin=this.plugins[p];if(plugin.createDataSet)plugin.createDataSet(this,whichChart);}
for(chartName in this.charts){if(whichChart&&J3X.j6y(whichChart.name,chartName))continue;chart=this.charts[chartName];for(p=0;J3X.p6y(p,chart.dataSet.length);p++){chart.dataSet[p].cache={}
;}
}
this.establishMarkerTicks();this.runAppend("createDataSet",arguments$);}
;STXChart.prototype.preAdjustScroll=function(chart){if(!chart)chart=this.chart;this.previousAdjust={chart:chart,scroll:chart.scroll,maxTicks:chart.maxTicks}
;}
;STXChart.prototype.postAdjustScroll=function(){if(!this.previousAdjust)return ;var chart=this.previousAdjust.chart;chart.scroll=this.previousAdjust.scroll+(J3X.u6y(chart.maxTicks,this.previousAdjust.maxTicks));if(this.displayInitialized)this.draw();}
;STXChart.prototype.adjustDrawings=function(){for(var i=0;J3X.S6y(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];if(this.panels[drawing.panelName])drawing.adjust();}
}
;STXChart.prototype.getNextInterval=function(DT,period,dataZone){if(!period)period=J3X.e2l;if(J3X.L6y(this.layout.timeUnit,Z7m)||J3X.g6y(this.layout.timeUnit,B7m)){return this.iterate(DT,period,this.layout.timeUnit,dataZone);}
if(!this.isDailyInterval(this.layout.interval)){return this.iterate(DT,J3X.z6y(period,this.layout.interval),y9m,dataZone);}
else{return this.iterate(DT,period,this.layout.interval,dataZone);}
return DT;}
;STXChart.prototype.iterate=function(DT,units,timeUnit,dataZone,symbol){var DT2;if(J3X.G6y(timeUnit,Z7m)){DT2=new Date(DT);DT2.setSeconds(DT2.getSeconds()+units);return DT2;}
else if(J3X.m6y(timeUnit,B7m)){DT2=new Date(DT);DT2.setMilliseconds(DT2.getMilliseconds()+units);return DT2;}
else if(J3X.l6y(timeUnit,y9m)){if(J3X.q6y(units,J3X.N2l)){return STX.LegacyMarket.prevPeriod(DT,J3X.e2l,Math.abs(units),this,symbol,dataZone);}
else{return STX.LegacyMarket.nextPeriod(DT,J3X.e2l,units,this,symbol,dataZone);}
}
if(J3X.D6y(timeUnit,t7l)){if(J3X.f6y(units,J3X.N2l)){return STX.LegacyMarket.nextDay(DT,units,this);}
else{return STX.LegacyMarket.prevDay(DT,Math.abs(units),this);}
}
else if(J3X.a0n(timeUnit,(l6l))){if(J3X.s0n(units,J3X.N2l)){return STX.LegacyMarket.nextWeek(DT,units,this);}
else{return STX.LegacyMarket.prevWeek(DT,Math.abs(units),this);}
}
else if(J3X.k0n(timeUnit,x2l)){if(J3X.e0n(units,J3X.N2l)){return STX.LegacyMarket.nextMonth(DT,units,this);}
else{return STX.LegacyMarket.prevMonth(DT,Math.abs(units),this);}
}
return DT;}
;STXChart.prototype.zoomOut=function(e,pct){if(this.runPrepend("zoomOut",arguments))return ;this.grabbingScreen=false;if(STXChart.insideChart)STX.unappendClassName(this.container,"stx-drag-chart");if(this.preferences.zoomOutSpeed)pct=this.preferences.zoomOutSpeed;else if(!pct)pct=1.1;if(e&&e.preventDefault)e.preventDefault();this.cancelTouchSingleClick=true;for(var chartName in this.charts){var chart=this.charts[chartName],centerMe=true;if(J3X.A0n(chart.scroll,chart.maxTicks))centerMe=false;if(STX.ipad&&J3X.y0n(chart.maxTicks,STXChart.ipadMaxTicks)){return ;}
var newTicks=Math.round(J3X.n0n(chart.maxTicks,pct)),newCandleWidth=J3X.I0n(this.chart.width,newTicks);if(J3X.H0n(newCandleWidth,this.minimumCandleWidth))newCandleWidth=this.minimumCandleWidth;this.layout.span=null;var newMaxTicks,newScroll;if(centerMe){var center=J3X.P0n(chart.scroll,chart.maxTicks/2);newMaxTicks=Math.round(J3X.c0n((this.chart.width/newCandleWidth),0.499));var newCenter=(J3X.x0n(chart.scroll,newMaxTicks/2));newScroll=chart.scroll+Math.round(J3X.Y0n(center,newCenter));}
else{newMaxTicks=Math.round(J3X.B0n((this.chart.width/newCandleWidth),0.499));var wsInTicks=Math.round(J3X.Z0n(this.preferences.whitespace,newCandleWidth));newScroll=J3X.V0n(newMaxTicks,wsInTicks);}
if(this.animate&&window.requestAnimationFrame){this.animate.go({oldCandleWidth:this.layout.candleWidth,newCandleWidth:newCandleWidth,}
);}
else{this.setCandleWidth(newCandleWidth);this.chart.scroll=newScroll;}
}
if(this.runAppend("zoomOut",arguments))return ;this.draw();this.changeOccurred("layout");}
;STXChart.prototype.mouseWheel=function(e,wheelEvent){var P3m="MozMousePixelScroll",M9l="defin",b7m=40,n1m="onmousewheel",V9m="mouseWheel";if(!e)e=event;e.preventDefault();var deltaX=e.deltaX,deltaY=e.deltaY,diff=J3X.K0n(Date.now(),this.lastMouseWheelEvent);if(J3X.Q3n(Math.abs(deltaY),Math.abs(deltaX)))deltaX=J3X.N2l;else deltaY=J3X.N2l;this.lastMouseWheelEvent=Date.now();if(J3X.M3n(Math.abs(deltaX),J3X.N2l)&&J3X.v3n(Math.abs(deltaY),J3X.N2l))return ;if(this.allowSideswipe&&J3X.E3n(deltaX,J3X.N2l)&&J3X.N3n(Math.abs(deltaX),Math.abs(deltaY))){this.lastMove=F5m;delta=deltaX*-J3X.e2l;if(J3X.b3n(delta,i4m))delta=i4m;if(delta<-i4m)delta=-i4m;this.grabbingScreen=Q9m;this.grabStartX=STXChart.crosshairX;this.grabStartY=STXChart.crosshairY;if(!this.currentPanel)this.currentPanel=this.chart.panel;this.grabStartScrollX=this.currentPanel.chart.scroll;this.grabStartScrollY=this.currentPanel.chart.panel.yAxis.scroll;this.mousemoveinner(J3X.w3n(STXChart.crosshairX,delta),STXChart.crosshairY);this.grabbingScreen=Y4m;return ;}
this.lastMove=(B6l+d1m+i3m+H9m+T0m+J3X.S2m);if(!this.allowZoom)return ;if(!this.displayInitialized)return ;if(this.runPrepend(V9m,arguments))return ;if(!deltaY){if(J3X.o3n(wheelEvent,n1m)){deltaY=-J3X.e2l/b7m*e.wheelDelta;if(e.wheelDeltaX)deltaX=-J3X.e2l/b7m*e.wheelDeltaX;}
else{deltaY=e.detail;}
}
if(typeof e.deltaMode==(h3m+J3X.r2m+M9l+M5l+t4l))e.deltaMode=(J3X.T3n(e.type,P3m)?J3X.N2l:J3X.e2l);var distance=deltaY;if(J3X.i3n(e.deltaMode,J3X.e2l)){distance*=E7m;}
var pctIn=J3X.U2m,pctOut=J3X.U2m;if(this.mouseWheelAcceleration){var multiplier=Math.max(Math.pow(Math.abs(distance),j6l),J3X.e2l);pctIn=J3X.h3n(J3X.e2l,p6l*multiplier);pctOut=J3X.e2l+J3X.J3n(y6l,multiplier);}
if(J3X.W3n(distance,J3X.N2l)){if(this.reverseMouseWheel)this.zoomOut(J3X.U2m,pctOut);else this.zoomIn(J3X.U2m,pctIn);}
else if(J3X.C3n(distance,J3X.N2l)){if(this.reverseMouseWheel)this.zoomIn(J3X.U2m,pctIn);else this.zoomOut(J3X.U2m,pctOut);}
if(this.runAppend(V9m,arguments))return ;return Y4m;}
;STXChart.prototype.zoomIn=function(e,pct){if(this.runPrepend("zoomIn",arguments))return ;this.grabbingScreen=false;if(STXChart.insideChart)STX.unappendClassName(this.container,"stx-drag-chart");if(this.preferences.zoomInSpeed)pct=this.preferences.zoomInSpeed;else if(!pct)pct=0.9;for(var chartName in this.charts){var chart=this.charts[chartName],centerMe=true;if(J3X.t3n(chart.scroll,chart.maxTicks))centerMe=false;if(e&&e.preventDefault)e.preventDefault();this.cancelTouchSingleClick=true;var newTicks=Math.round(J3X.O3n(chart.maxTicks,pct));if(J3X.U3n(chart.maxTicks-newTicks,2))newTicks=J3X.X1n(chart.maxTicks,2);if(J3X.d1n(newTicks,9))newTicks=9;var newCandleWidth=J3X.r1n(this.chart.width,newTicks);this.layout.span=null;var newMaxTicks,newScroll;if(centerMe){var center=J3X.F1n(chart.scroll,chart.maxTicks/2);newMaxTicks=Math.round(J3X.R1n((this.chart.width/newCandleWidth),0.499));var newCenter=(J3X.j1n(chart.scroll,newMaxTicks/2));newScroll=chart.scroll+Math.round(J3X.p1n(center,newCenter));}
else{newMaxTicks=Math.round(J3X.u1n((this.chart.width/newCandleWidth),0.499));var wsInTicks=Math.round(J3X.S1n(this.preferences.whitespace,newCandleWidth));newScroll=J3X.L1n(newMaxTicks,wsInTicks);}
if(this.animate&&window.requestAnimationFrame){this.animate.go({oldCandleWidth:this.layout.candleWidth,newCandleWidth:newCandleWidth,}
);}
else{this.setCandleWidth(newCandleWidth);this.chart.scroll=newScroll;}
}
if(this.runAppend("zoomIn",arguments))return ;this.draw();this.changeOccurred("layout");}
;STXChart.prototype.translateIf=function(english){if(this.translationCallback)return this.translationCallback(english);return english;}
;STXChart.prototype.setTimeZone=function(dataZone,displayZone){if(typeof timezoneJS==L2l){this.timeZoneOffset=J3X.N2l;return ;}
var now=new Date(),myTimeZoneOffset=now.getTimezoneOffset(),dataTimeZoneOffset=myTimeZoneOffset,displayTimeZoneOffset=myTimeZoneOffset;if(dataZone)this.dataZone=dataZone;if(this.dataZone)dataTimeZoneOffset=new timezoneJS.Date(now,this.dataZone).getTimezoneOffset();if(displayZone)this.displayZone=displayZone;if(this.displayZone)displayTimeZoneOffset=new timezoneJS.Date(now,this.displayZone).getTimezoneOffset();this.timeZoneOffset=J3X.g1n((dataTimeZoneOffset-myTimeZoneOffset),(displayTimeZoneOffset-myTimeZoneOffset));for(var chartName in this.charts){var chart=this.charts[chartName];if(chart.masterData&&!STXChart.isDailyInterval(this.layout.interval))this.setDisplayDates(chart.masterData);}
this.createDataSet();}
;STXChart.prototype.setLocale=function(locale){var g6l="ce",B1m="per",c5m="percent",n7m="2-digit";if(typeof Intl==L2l)return ;if(J3X.z1n(this.locale,locale)){this.locale=locale;}
else{return ;}
this.internationalizer={}
;this.internationalizer.hourMinute=new Intl.DateTimeFormat(this.locale,{hour:A8l,minute:A8l,hour12:Y4m}
);this.internationalizer.hourMinuteSecond=new Intl.DateTimeFormat(this.locale,{hour:A8l,minute:A8l,second:A8l,hour12:Y4m}
);this.internationalizer.mdhm=new Intl.DateTimeFormat(this.locale,{year:n7m,month:n7m,day:n7m,hour:n7m,minute:n7m}
);this.internationalizer.monthDay=new Intl.DateTimeFormat(this.locale,{month:A8l,day:A8l}
);this.internationalizer.yearMonthDay=new Intl.DateTimeFormat(this.locale,{year:A8l,month:A8l,day:A8l}
);this.internationalizer.month=new Intl.DateTimeFormat(this.locale,{month:(N8l+w2m+d1m+i3m)}
);this.internationalizer.numbers=new Intl.NumberFormat(this.locale);this.internationalizer.priceFormatters=[];this.internationalizer.priceFormatters[J3X.N2l]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:J3X.N2l,minimumFractionDigits:J3X.N2l}
);this.internationalizer.priceFormatters[J3X.e2l]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:J3X.e2l,minimumFractionDigits:J3X.e2l}
);this.internationalizer.priceFormatters[J3X.k2l]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:J3X.k2l,minimumFractionDigits:J3X.k2l}
);this.internationalizer.priceFormatters[J3X.r2l]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:J3X.r2l,minimumFractionDigits:J3X.r2l}
);this.internationalizer.priceFormatters[J3X.p2l]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:J3X.p2l,minimumFractionDigits:J3X.p2l}
);this.internationalizer.percent=new Intl.NumberFormat(this.locale,{style:c5m,minimumFractionDigits:J3X.k2l,maximumFractionDigits:J3X.k2l}
);this.internationalizer.percent0=new Intl.NumberFormat(this.locale,{style:c5m,minimumFractionDigits:J3X.N2l,maximumFractionDigits:J3X.N2l}
);this.internationalizer.percent1=new Intl.NumberFormat(this.locale,{style:(B1m+g6l+J3X.r2m+i3m),minimumFractionDigits:J3X.e2l,maximumFractionDigits:J3X.e2l}
);this.internationalizer.percent2=new Intl.NumberFormat(this.locale,{style:(B1m+s5l+g5m),minimumFractionDigits:J3X.k2l,maximumFractionDigits:J3X.k2l}
);this.internationalizer.percent3=new Intl.NumberFormat(this.locale,{style:c5m,minimumFractionDigits:J3X.r2l,maximumFractionDigits:J3X.r2l}
);this.internationalizer.percent4=new Intl.NumberFormat(this.locale,{style:(B1m+g6l+J3X.r2m+i3m),minimumFractionDigits:J3X.p2l,maximumFractionDigits:J3X.p2l}
);STX.createMonthArrays(this,this.internationalizer.month,this.locale);}
;STXChart.prototype.importLayout=function(config,managePeriodicity,preserveTicksAndCandleWidth){var f1m="hart",interval=this.layout.interval,periodicity=this.layout.periodicity,timeUnit=this.layout.timeUnit,candleWidth=this.layout.candleWidth,serializedDrawings=this.serializeDrawings();this.abortDrawings();this.currentlyImporting=Q9m;this.overlays={}
;var view=STX.clone(config);for(var s in this.layout.studies){var sd=this.layout.studies[s];STX.Studies.removeStudy(this,sd);}
if(view){var priorPanels=STX.shallowClone(this.panels);this.panels={}
;STX.dataBindSafeAssignment(this.layout,STX.clone(view));if(preserveTicksAndCandleWidth){this.layout.candleWidth=candleWidth;}
else{if(!this.layout.candleWidth)this.setCandleWidth(J3X.S2l,this.chart);}
var panels=view.panels;this.layout.panels={}
;for(var p in panels){var panel=panels[p];this.stackPanel(panel.display,p,panel.percent,panel.chartName);}
if(STX.isEmpty(panels)){this.stackPanel(T4l,(s5l+f1m),J3X.e2l,T4l);}
for(var panelName in priorPanels){var oldPanel=priorPanels[panelName],newPanel=this.panels[panelName];if(newPanel){this.container.removeChild(newPanel.holder);this.container.removeChild(oldPanel.handle);var copyFields={"holder":Q9m,"subholder":Q9m,"display":Q9m}
;for(var f in copyFields){newPanel[f]=oldPanel[f];}
this.configurePanelControls(newPanel);if(J3X.G1n(oldPanel.chart.panel,oldPanel))oldPanel.chart.panel=newPanel;}
else{this.privateDeletePanel(oldPanel);}
}
this.adjustPanelPositions();this.storePanels();var studies=STX.clone(this.layout.studies);delete  this.layout.studies;for(var ss in studies){var study=studies[ss];STX.Studies.addStudy(this,study.type,study.inputs,study.outputs,study.parameters,study.panel);}
}
if(typeof (this.layout.chartType)==L2l)this.layout.chartType=B3m;this.adjustPanelPositions();this.layout.interval=interval;this.layout.periodicity=periodicity;this.layout.timeUnit=timeUnit;if(managePeriodicity){interval=view.interval;periodicity=view.periodicity;timeUnit=view.timeUnit;if(isNaN(periodicity))periodicity=J3X.e2l;if(!interval)interval=t7l;if(J3X.m1n(interval,this.layout.interval)||J3X.l1n(periodicity,this.layout.periodicity)){this.setPeriodicityV2(periodicity,interval);}
else{this.createDataSet();}
}
else{this.createDataSet();}
this.reconstructDrawings(serializedDrawings);this.draw();this.currentlyImporting=Y4m;this.updateListeners(C2l);}
;STXChart.prototype.exportLayout=function(){var Q4m="panels",x9m="studies",obj={}
;for(var field in this.layout){if(J3X.q1n(field,x9m)&&J3X.D1n(field,Q4m)){obj[field]=STX.clone(this.layout[field]);}
else if(J3X.f1n(field,x9m)){obj.studies={}
;}
else if(J3X.a2n(field,Q4m)){obj.panels={}
;}
}
for(var panelName in this.panels){var panel=obj.panels[panelName]={}
,p=this.panels[panelName];panel.percent=p.percent;panel.display=p.display;panel.chartName=p.chart.name;}
for(var studyName in this.layout.studies){var study=obj.studies[studyName]={}
,s=this.layout.studies[studyName];study.type=s.type;study.inputs=STX.clone(s.inputs);study.outputs=STX.clone(s.outputs);study.panel=s.panel;study.parameters=STX.clone(s.parameters);}
return obj;}
;STXChart.prototype.doCleanupGaps=function(quotes){var B8l="ay";if(!this.cleanupGaps)return quotes;if(J3X.s2n(interval,"tick"))return quotes;if(quotes&&!quotes.length)return quotes;var interval=this.layout.interval;if((J3X.k2n(interval,"month")||J3X.e2n(interval,"week"))&&!this.dontRoll){interval="day";}
if(STXChart.isDailyInterval(interval)&&J3X.A2n(interval,(t4l+B8l)))return quotes;var newQuotes=[],j=0,dt=null,stick=false;for(var i=0;J3X.y2n(i,quotes.length);i++,j++){var thisQuote=quotes[i],bcdt;if(thisQuote.DT)bcdt=new Date(thisQuote.DT.getTime());else bcdt=new Date(STX.strToDateTime(thisQuote.Date).getTime());if(J3X.n2n(dt,null)){dt=bcdt;}
else{for(var zz=0;J3X.I2n(zz,1440);zz++){if(!stick){if(J3X.H2n(interval,"day")){dt=STX.LegacyMarket.nextDay(dt,null,this);}
else{dt=this.getNextInterval(dt,null,this.dataZone);}
}
if(J3X.P2n(interval,"day")){if(J3X.c2n(bcdt.getDate(),dt.getDate())&&J3X.x2n(bcdt.getMonth(),dt.getMonth())&&J3X.Y2n(bcdt.getFullYear(),dt.getFullYear())){stick=false;break;}
}
else if(J3X.B2n(bcdt.getTime(),dt.getTime())){stick=false;break;}
if(J3X.Z2n(bcdt.getTime(),dt.getTime())){stick=true;break;}
else{newQuotes.push({DT:dt,Open:newQuotes[J3X.V2n(j,1)].Close,High:newQuotes[J3X.K2n(j,1)].Close,Low:newQuotes[J3X.Q9n(j,1)].Close,Close:newQuotes[J3X.M9n(j,1)].Close,Volume:0,Adj_Close:newQuotes[J3X.v9n(j,1)].Adj_Close}
);stick=false;j++;}
}
}
newQuotes.push(thisQuote);}
return newQuotes;}
;STXChart.Driver=function(stx,quoteFeed,behavior){this.tagalongs={}
;this.stx=stx;this.quoteFeed=quoteFeed;this.behavior=behavior;this.loadingNewChart=Y4m;this.intervalTimer=J3X.U2m;this.updatingChart=Y4m;this.updateChartLoop();}
;STXChart.Driver.prototype.die=function(){if(this.intervalTimer)window.clearInterval(this.intervalTimer);}
;STXChart.Driver.prototype.attachTagAlongQuoteFeed=function(feed){if(!this.tagalongs[feed.label]){this.tagalongs[feed.label]={label:feed.label,quoteFeed:feed.quoteFeed,behavior:feed.behavior?feed.behavior:{}
,count:J3X.N2l}
;}
this.tagalongs[feed.label].count++;}
;STXChart.Driver.prototype.detachTagAlongQuoteFeed=function(feed){var tagalong=this.tagalongs[feed.label];tagalong.count--;if(!tagalong.count)this.tagalongs[feed.label]=J3X.U2m;}
;STXChart.Driver.prototype.loadDependents=function(params){var field,syms={}
,stx=params.stx,series=stx.chart.series;function getStartDate(symbol){for(var c=J3X.E9n(stx.masterData.length,1);J3X.N9n(c,0);c--){if(stx.masterData[c]&&typeof stx.masterData[c][symbol]!="undefined"){return STX.strToDateTime(stx.masterData[c].Date);}
}
return params.startDate;}
for(field in series){if(!series[field].parameters.data||!series[field].parameters.data.useDefaultQuoteFeed)continue;syms[field]=true;}
for(var p in stx.panels){if(stx.panels[p].studyQuotes){for(var sq in stx.panels[p].studyQuotes)syms[sq]=true;}
}
var arr=[];for(field in syms){var seriesParam=STX.shallowClone(params.originalState);seriesParam.symbol=field;if(series[field]&&series[field].parameters.symbolObject)seriesParam.symbolObject=series[field].parameters.symbolObject;if(seriesParam.update){seriesParam.startDate=getStartDate(field);}
else{if(!seriesParam.startDate)seriesParam.startDate=stx.masterData[0].DT;if(!seriesParam.endDate)seriesParam.endDate=stx.masterData[J3X.b9n(stx.masterData.length,1)].DT;}
arr.push(seriesParam);}
if(!arr.length){stx.createDataSet();stx.draw();return ;}
this.quoteFeed.multiFetch(arr,function(results){for(var i=0;J3X.w9n(i,results.length);i++){var result=results[i];if(!result.dataCallback.error){var field=null;if(stx.chart.series[result.params.symbol]){field=stx.chart.series[result.params.symbol].parameters.field;}
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
;STXChart.Driver.prototype.updateChart=function(){if(this.updatingChart)return ;if(this.loadingNewChart)return ;var howManyToGet=STX.objLength(this.stx.charts),howManyReturned=0,interval=this.stx.layout.interval,timeUnit=this.stx.layout.timeUnit;function closure(self,params,symbol){return function(dataCallback){howManyReturned++;if(J3X.o9n(symbol,params.chart.symbol)&&J3X.T9n(interval,self.stx.layout.interval)&&J3X.i9n(timeUnit,self.stx.layout.timeUnit)){if(!dataCallback.error){var lastBarAdded=false;if(!params.missingBarsCreated){if(params.chart.masterData.length&&dataCallback.quotes&&J3X.h9n(dataCallback.quotes.length,0)){var lastRecord=params.chart.masterData[J3X.J9n(params.chart.masterData.length,1)];if((dataCallback.quotes[0].DT&&J3X.W9n(lastRecord.DT,dataCallback.quotes[0].DT))||(dataCallback.quotes[0].Date&&J3X.C9n(lastRecord.Date,dataCallback.quotes[0].Date))){dataCallback.quotes.unshift(lastRecord);lastBarAdded=true;}
}
dataCallback.quotes=self.stx.doCleanupGaps(dataCallback.quotes);if(lastBarAdded)dataCallback.quotes.shift();}
self.stx.appendMasterData(dataCallback.quotes,params.chart,{noCreateDataSet:true}
);}
else{self.quoteFeed.announceError(params,dataCallback);}
}
else{return ;}
if(J3X.t9n(howManyReturned,howManyToGet)){self.updatingChart=false;}
self.executeTagAlongs(params);if(self.behavior.callback){self.behavior.callback(params);self.stx.createDataSet();self.stx.draw();}
else{self.loadDependents(params);}
}
;}
for(var chartName in this.stx.charts){var chart=this.stx.charts[chartName];if(!chart.symbol)continue;if(!chart.masterData)continue;var params=this.makeParams(chart.symbol,chart);if(chart.masterData.length)params.startDate=chart.masterData[J3X.O9n(chart.masterData.length,1)].DT;params.update=true;params.originalState=STX.shallowClone(params);this.updatingChart=true;this.quoteFeed.fetch(params,closure(this,params,chart.symbol));}
}
;STXChart.Driver.prototype.updateChartLoop=function(){function closure(self){return function(){self.updateChart();}
;}
closure(this)();if(this.behavior.refreshInterval)this.intervalTimer=window.setInterval(closure(this),J3X.U9n(this.behavior.refreshInterval,E5m));}
;STXChart.Driver.prototype.resetRefreshInterval=function(newInterval){if(this.intervalTimer)window.clearInterval(this.intervalTimer);this.behavior.refreshInterval=newInterval;this.updateChartLoop();}
;STXChart.Driver.prototype.loadAll=function(chart,cb){var self=this,count=J3X.N2l;function closure(){return function(response){var U4l="eFeed",w8l="uo",J4m="leme",q5m="eAvai",m2m=", ",O4l="or";if(response)cb(response);else if(!chart.moreAvailable){cb(J3X.U2m);}
else if(J3X.X7n(count++,F8m)){cb((w5l+d1m+O4l+m2m+J3X.g2m+O4l+q5m+J3X.S2m+G4l+I4l+J3X.S2m+M5l+n5l+J3X.r2m+w2m+i3m+n5l+H9m+J3X.g2m+g1m+J4m+J3X.r2m+i3m+h6l+n5l+s5l+w2m+d1m+r9m+s5l+i3m+v5l+n5l+H9m+J3X.r2m+n5l+t1l+w8l+i3m+U4l));}
else{self.checkLoadMore(chart,Q9m,Q9m,closure());}
}
;}
this.checkLoadMore(chart,Q9m,Q9m,closure());}
;STXChart.Driver.prototype.checkLoadMore=function(chart,forceLoadMore,fetchMaximumBars,cb){if(!chart.moreAvailable){if(cb)cb();return ;}
var interval=this.stx.layout.interval,timeUnit=this.stx.layout.timeUnit;function closure(self,params){return function(dataCallback){if(J3X.d7n(params.symbol,params.chart.symbol)&&J3X.r7n(interval,self.stx.layout.interval)&&J3X.F7n(timeUnit,self.stx.layout.timeUnit)){if(!params.loadMore)params.chart.loadingMore=false;if(!dataCallback.error){if(!params.missingBarsCreated){dataCallback.quotes.push(params.chart.masterData[0]);dataCallback.quotes=self.stx.doCleanupGaps(dataCallback.quotes);dataCallback.quotes.pop();}
params.chart.moreAvailable=dataCallback.moreAvailable;var fullMasterData=dataCallback.quotes.concat(params.chart.masterData);self.stx.setMasterData(fullMasterData,params.chart);self.stx.createDataSet();self.stx.draw();params.startDate=params.chart.masterData[0].DT;self.executeTagAlongs(params);if(self.behavior.callback){self.behavior.callback(params);}
else{self.loadDependents(params);}
}
else{self.quoteFeed.announceError(params,dataCallback);}
if(cb)cb(null);}
else{return ;}
}
;}
var fetching=false;if(!this.behavior.noLoadMore){if(!this.stx.maxDataSetSize||J3X.R7n(chart.dataSet.length,this.stx.maxDataSetSize)){if((J3X.j7n(chart.dataSet.length,0)&&J3X.p7n(chart.scroll,chart.dataSet.length))||forceLoadMore){this.stx.cancelSwipe=true;if(!chart.loadingMore){chart.initialScroll=chart.scroll;chart.loadingMore=true;var params=this.makeParams(chart.symbol,chart);params.endDate=chart.masterData[0].DT;params.originalState=STX.shallowClone(params);if(this.stx.fetchMaximumBars[this.stx.layout.aggregationType])fetchMaximumBars=true;if(fetchMaximumBars){params.fetchMaximumBars=true;params.ticks=Math.max(20000,params.ticks);}
this.quoteFeed.fetch(params,closure(this,params));fetching=true;}
}
}
}
if(chart.loadingMore){chart.initialScroll=chart.scroll;}
if(!fetching&&cb)cb(null);}
;STXChart.Driver.prototype.barsToFetch=function(params){var H8m="eek";if(params.isSeries)return params.stx.masterData.length;var interval=this.stx.layout.interval,p=params.stx.layout.periodicity;if((J3X.u7n(interval,"month")||J3X.S7n(interval,(J3X.c6m+H8m)))&&!this.stx.dontRoll){p*=(J3X.L7n(interval,(J3X.c6m+M5l+F3m)))?7:30;}
var bars=J3X.g7n(params.stx.chart.maxTicks,p);return bars;}
;STXChart.Driver.prototype.makeParams=function(symbol,chart){var u4m="delayed",interval=this.stx.layout.interval,ticks=this.barsToFetch({stx:this.stx}
);if((J3X.z7n(interval,x2l)||J3X.G7n(interval,l6l))&&!this.stx.dontRoll){interval=t7l;}
var params=STX.shallowClone(this.behavior);STX.extend(params,{stx:this.stx,symbol:symbol,chart:chart,interval:interval,extended:this.stx.layout.extended,period:J3X.e2l,feed:u4m,ticks:ticks}
,Q9m);if(J3X.m7n(symbol,this.stx.chart.symbolObject.symbol))params.symbolObject=this.stx.chart.symbolObject;if(!isNaN(params.interval)){params.period=params.interval;params.interval=this.stx.layout.timeUnit;if(!params.interval)params.interval=y9m;}
if(params.pts)params.ticks=Math.max(params.ticks,E5m);return params;}
;STXChart.Driver.prototype.newChart=function(params,cb){var stx=this.stx,symbol=params.symbol,interval=stx.layout.interval,timeUnit=stx.layout.timeUnit,chart=params.chart;chart.moreAvailable=false;chart.attribution=null;var qparams=this.makeParams(symbol,chart);STX.extend(qparams,params,true);if(stx.fetchMaximumBars[stx.layout.aggregationType]){qparams.ticks=Math.max(20000,qparams.ticks);qparams.fetchMaximumBars=true;}
function closure(self,qparams){return function(dataCallback){if(J3X.l7n(symbol,qparams.chart.symbol)&&J3X.q7n(interval,stx.layout.interval)&&J3X.D7n(timeUnit,stx.layout.timeUnit)){if(!dataCallback.error&&J3X.f7n(dataCallback.error,0)&&dataCallback.quotes&&J3X.a8n(dataCallback.quotes.length,0)){if(!qparams.missingBarsCreated)dataCallback.quotes=stx.doCleanupGaps(dataCallback.quotes);stx.setMasterData(dataCallback.quotes,qparams.chart);qparams.chart.moreAvailable=dataCallback.moreAvailable;qparams.chart.attribution=dataCallback.attribution;self.loadingNewChart=false;stx.createDataSet();if(params.initializeChart)stx.initializeChart();stx.home({maintainWhitespace:true}
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
;STXChart.prototype.attachTagAlongQuoteFeed=function(feed){var Q5m="ign",W8l="ith",E6m="Fe",D6m="Quo",R9l="hTag";if(!feed.label){console.log((y4m+i3m+i3m+M5l+J3X.g2m+g1m+i3m+n5l+i3m+w2m+n5l+G4l+i3m+J0m+s5l+R9l+y4m+J3X.S2m+h0m+f9m+D6m+i3m+M5l+E6m+h6l+n5l+J3X.c6m+W8l+D5l+i3m+n5l+G4l+w1m+w1m+Q5m+H9m+J3X.r2m+f9m+n5l+G4l+n5l+J3X.S2m+G4l+I4l+M5l+J3X.S2m));return ;}
this.quoteDriver.attachTagAlongQuoteFeed(feed);}
;STXChart.prototype.detachTagAlongQuoteFeed=function(feed){this.quoteDriver.detachTagAlongQuoteFeed(feed);}
;STX.Comparison=function(){}
;Z(Y4m);STX.Comparison.priceToPercent=function(stx,chart,price){return J3X.s8n(Math.round(((price-STX.Comparison.baseline)/STX.Comparison.baseline*i5m)*X5m),X5m);}
;STX.Comparison.percentToPrice=function(stx,chart,percent){return J3X.k8n(STX.Comparison.baseline,(J3X.e2l+(percent/i5m)));}
;STX.Comparison.stopSort=function(lhs,rhs){return J3X.e8n(lhs,rhs);}
;STX.Comparison.createComparisonSegmentInner=function(stx,chart){var s4l="H",fields=[],field;for(field in chart.series){if(chart.series[field].parameters.isComparison){fields.push(field);}
}
var priceFields=["Close","Open",(s4l+H9m+f9m+j9m),"Low","iqPrevClose"];chart.dataSegment=[];var firstQuote=null,firstTick=J3X.A8n(chart.dataSet.length,chart.scroll),lastTick=firstTick+chart.maxTicks,stopPointer=0,stops=[],i;for(i=0;J3X.y8n(i,stx.drawingObjects.length);i++){var drawing=stx.drawingObjects[i];if(J3X.n8n(drawing.name,"comparison_stop"))if(J3X.I8n(drawing.tick,firstTick)&&J3X.H8n(drawing.tick,lastTick))stops.push(drawing.tick);}
stops.sort(STX.Comparison.stopSort);var transformsToProcess=chart.maxTicks+3;for(i=0;J3X.P8n(i,transformsToProcess);i++){if(J3X.c8n(i,transformsToProcess))i=-1;position=firstTick+i;if(J3X.x8n(position,chart.dataSet.length)&&J3X.Y8n(position,0)){var quote=chart.dataSet[position];if(!firstQuote){firstQuote=STX.clone(quote);}
if(!quote.transform)quote.transform={"cache":{}
,"DT":quote.DT,"Date":quote.Date}
;STX.Comparison.baseline=firstQuote.Close;var j;for(j=0;J3X.B8n(j,priceFields.length);j++){field=priceFields[j];if(quote[field]||J3X.Z8n(quote[field],0))quote.transform[field]=J3X.V8n(Math.round(((quote[field]-STX.Comparison.baseline)/STX.Comparison.baseline*100)*10000),10000);}
var s=stx.layout.studies;if(s){for(var n in s){var sd=s[n];if(J3X.K8n(stx.panels[sd.panel].name,sd.chart.name))continue;for(field in sd.outputMap){if(quote[field]||J3X.Q4n(quote[field],0))quote.transform[field]=J3X.M4n(Math.round(((quote[field]-STX.Comparison.baseline)/STX.Comparison.baseline*100)*10000),10000);}
if(sd.referenceOutput&&(quote[sd.referenceOutput+" "+sd.name]||J3X.v4n(quote[sd.referenceOutput+" "+sd.name],0)))quote.transform[sd.referenceOutput+" "+sd.name]=J3X.E4n(Math.round(((quote[sd.referenceOutput+" "+sd.name]-STX.Comparison.baseline)/STX.Comparison.baseline*100)*10000),10000);}
}
for(j in stx.plugins){var plugin=stx.plugins[j];if(!plugin.transformOutputs)continue;for(field in plugin.transformOutputs){if(quote[field]||J3X.N4n(quote[field],0))quote.transform[field]=J3X.b4n(Math.round(((quote[field]-STX.Comparison.baseline)/STX.Comparison.baseline*100)*10000),10000);}
}
var createAStop=false;if(stops&&J3X.w4n(stopPointer,stops.length)){if(J3X.o4n(position,stops[stopPointer])){createAStop=true;stopPointer++;}
}
var mouseStop=null;if(stx.activeDrawing&&J3X.T4n(stx.activeDrawing.name,"comparison_stop")){mouseStop=stx.activeDrawing.tick;}
var current;if(createAStop||J3X.i4n(position,mouseStop)){for(j=0;J3X.h4n(j,fields.length);j++){field=fields[j];current=quote[field];firstQuote[field]=J3X.J4n(current,(1+(quote.transform.Close/100)));}
}
for(j=0;J3X.W4n(j,fields.length);j++){field=fields[j];current=quote[field];if(current||J3X.C4n(current,0)){var baseline=firstQuote[field];if(!baseline&&J3X.t4n(baseline,0)){firstQuote[field]=baseline=J3X.O4n(current,(1+(quote.transform.Close/100)));}
quote.transform[field]=J3X.U4n(Math.round(((current-baseline)/baseline*100)*10000),10000);}
}
chart.dataSegment.push(quote);}
else if(J3X.X5n(position,0)){chart.dataSegment.push(null);}
if(J3X.d5n(i,0))break;}
stx.clearPixelCache();return true;}
;STX.Comparison.createComparisonSegment=function(){for(var chartName in this.charts){var chart=this.charts[chartName];if(chart.isComparison)STX.Comparison.createComparisonSegmentInner(this,chart);}
}
;STX.Comparison.priceFormat=function(stx,panel,price){var K8m=0.001;if(J3X.r5n(price,J3X.U2m)||typeof price==L2l)return o3m;var priceTick=panel.yAxis.priceTick;if(stx.internationalizer){if(J3X.F5n(priceTick,J3X.e2l))price=stx.internationalizer.percent0.format(J3X.R5n(price,i5m));else if(J3X.j5n(priceTick,p6l))price=stx.internationalizer.percent1.format(J3X.p5n(price,i5m));else if(J3X.u5n(priceTick,z2l))price=stx.internationalizer.percent2.format(J3X.S5n(price,i5m));else if(J3X.L5n(priceTick,K8m))price=stx.internationalizer.percent3.format(J3X.g5n(price,i5m));else price=stx.internationalizer.percent4.format(price);}
else{if(J3X.z5n(priceTick,J3X.e2l))price=price.toFixed(J3X.N2l)+k9m;else if(J3X.G5n(priceTick,p6l))price=price.toFixed(J3X.e2l)+k9m;else if(J3X.m5n(priceTick,z2l))price=price.toFixed(J3X.k2l)+k9m;else if(J3X.l5n(priceTick,K8m))price=price.toFixed(J3X.r2l)+k9m;else price=price.toFixed(J3X.p2l)+k9m;}
if(J3X.q5n(parseFloat(price),J3X.N2l)&&J3X.D5n(price.charAt(J3X.N2l),N1m)){price=price.substring(J3X.e2l);}
return price;}
;STX.Comparison.correlate=function(stx,symbol){if(!STX.Comparison.requestCorrelation||J3X.f5n(correlationPeriod,0))return ;var correlationPeriod=parseInt($$$(".stxCorrelate .stx-input-field").value,10),corrPanel=stx.panels[STX.Comparison.correlationPanel+" ("+correlationPeriod+")"],inputs={"id":STX.Comparison.correlationPanel+(m8l)+correlationPeriod+")","Period":correlationPeriod,"Compare To":[]}
,outputs={}
,panelName=null;if(corrPanel){for(var i=0;J3X.a6n(i,stx.layout.studies[corrPanel.name].inputs["Compare To"].length);i++){inputs["Compare To"].push(stx.layout.studies[corrPanel.name].inputs["Compare To"][i]);}
for(var o in stx.layout.studies[corrPanel.name].outputs){outputs[o]=stx.layout.studies[corrPanel.name].outputs[o];}
panelName=corrPanel.name;}
inputs["Compare To"].push(symbol);outputs["Result "+symbol]=STX.Comparison.colorSelection;STX.Studies.addStudy(stx,"correl",inputs,outputs,null,panelName);for(var panel in stx.panels){if(J3X.s6n(stx.panels[panel].name.indexOf(STX.Comparison.correlationPanel),0)){var compareArray=stx.layout.studies[stx.panels[panel].name].inputs["Compare To"];for(var ii=0;J3X.k6n(ii,compareArray.length);ii++){if(J3X.e6n(compareArray[ii],symbol)){stx.layout.studies[stx.panels[panel].name].outputs["Result "+symbol]=STX.Comparison.colorSelection;}
}
}
}
}
;STX.Comparison.toggleCorrelate=function(stx){var y3m=".stxCorrelate .stx-checkbox";STX.Comparison.requestCorrelation=!STX.Comparison.requestCorrelation;var display=$$$(y3m);if(display){STX.unappendClassName(display,(!STX.Comparison.requestCorrelation).toString());STX.appendClassName(display,STX.Comparison.requestCorrelation.toString());}
}
;STXChart.prototype.setComparison=function(onOff,chart){var q2m="string";if(!chart)chart=this.chart;if(typeof chart==q2m)chart=this.charts[chart];if(!chart.isComparison&&onOff){this.setTransform(chart,STX.Comparison.priceToPercent,STX.Comparison.percentToPrice);chart.panel.yAxis.priceFormatter=STX.Comparison.priceFormat;chart.panel.yAxis.whichSet=F2l;}
else if(chart.isComparison&&!onOff){this.unsetTransform(chart);chart.panel.yAxis.priceFormatter=J3X.U2m;chart.panel.yAxis.whichSet=K1m;}
chart.isComparison=onOff;}
;STX.Comparison.startPlugin=function(){STXChart.prototype.prepend(A8m,STX.Comparison.createComparisonSegment);}
;STX.Comparison.removeSeries=function(stx,field){}
;STX.SearchableWordList=function(list,maxResults,contains){if(!list)return ;if(!maxResults)maxResults=50;if(!contains)contains=false;var container={"records":[],"words":[]}
;for(var r=0;J3X.A6n(r,list.length);r++){var record=list[r];if(!record.name)record.name=record.id;record.index=J3X.y6n(container.records.push(record),1);var descs=record.name.split(" ");if(record.keywords)descs=descs.concat(record.keywords.split(" "));for(var j=0;J3X.n6n(j,descs.length);j++){var word=descs[j].toUpperCase(),subIdx="_",subIdx2="_";if(J3X.I6n(word.charCodeAt(0),33)&&J3X.H6n(word.charCodeAt(0),126))subIdx=word.charAt(0);if(!container.words[subIdx])container.words[subIdx]=[];if(J3X.P6n(word.length,1)){if(J3X.c6n(word.charCodeAt(1),33)&&J3X.x6n(word.charCodeAt(1),126))subIdx2=word.charAt(1);}
else{subIdx2=" ";}
if(!container.words[subIdx][subIdx2])container.words[subIdx][subIdx2]=[];container.words[subIdx][subIdx2].push({index:record.index,word:word}
);}
}
this.lookup=function(input,category,cb){var results=[];function sortId(a,b){if(J3X.Y6n(a.id,b.id))return 1;else if(J3X.B6n(a.id,b.id))return -1;return J3X.Z6n(a.weight,b.weight)?1:-1;}
function sortWeight(a,b){if(J3X.V6n(a.weight,b.weight))return 1;else if(J3X.K6n(a.weight,b.weight))return -1;return J3X.Q0l(a.name,b.name)?1:-1;}
function sortDescWeight(a,b){a.weight=0;b.weight=0;for(var j=0;J3X.M0l(j,keys.length);j++){var KEY=keys[j].toUpperCase(),aIndex=a.name.toUpperCase().indexOf(KEY),bIndex=b.name.toUpperCase().indexOf(KEY);if(aIndex==-1)return 1;else if(bIndex==-1)return -1;a.weight+=aIndex;b.weight+=bIndex;}
if(J3X.v0l(a.weight,b.weight))return 1;else if(J3X.E0l(a.weight,b.weight))return -1;return J3X.N0l(a.name,b.name)?1:-1;}
function noDups(res){var returnArray=[],previousId="";for(var r=0;J3X.b0l(r,res.length);r++){if(J3X.w0l(previousId,res[r].id))continue;returnArray.push(res[r]);previousId=res[r].id;}
return returnArray;}
if(input&&container){var foundBitMap=[],keyword=input.toUpperCase(),exacts=[],d,entry;for(d=0;J3X.o0l(d,container.records.length);d++){entry=container.records[d];if(foundBitMap[entry.index])continue;if(category&&J3X.T0l(entry.category,category))continue;var name=entry.name.toUpperCase();if(J3X.i0l(keyword,"*")){exacts.push(STX.extend(container.records[entry.index],{weight:0}
));foundBitMap[entry.index]=true;}
else{var i=name.indexOf(keyword);if(i>-1){var weight=J3X.h0l(name.length,keyword.length);if(!contains&&J3X.J0l(i,0))continue;(weight?results:exacts).push(STX.extend(container.records[entry.index],{weight:weight}
));foundBitMap[entry.index]=true;}
}
}
var keys=keyword.split(" "),k1="_",k2="_",myKey=keys[0].toUpperCase(),descResults=[];if(J3X.W0l(myKey.charCodeAt(0),33)&&J3X.C0l(myKey.charCodeAt(0),126))k1=myKey.charAt(0);if(J3X.t0l(myKey.length,1)){if(J3X.O0l(myKey.charCodeAt(1),33)&&J3X.U0l(myKey.charCodeAt(1),126))k2=myKey.charAt(1);}
else{k2=" ";}
if(container.words[k1]){for(var kk in container.words[k1]){if(J3X.X3l(kk.length,1))continue;if(J3X.d3l(k2," "))kk=k2;for(d=0;container.words[k1][kk]&&J3X.r3l(d,container.words[k1][kk].length);d++){entry=container.words[k1][kk][d];if(J3X.F3l(entry.word.toUpperCase().indexOf(myKey),0))continue;if(foundBitMap[entry.index])continue;if(category&&J3X.R3l(container.records[entry.index].category,category))continue;descResults.push(STX.clone(container.records[entry.index]));foundBitMap[entry.index]=true;}
if(J3X.j3l(k2," "))break;}
}
for(var extraKeys=1;J3X.p3l(extraKeys,keys.length);extraKeys++){myKey=keys[extraKeys].toUpperCase();for(var res=J3X.u3l(descResults.length,1);J3X.S3l(res,0);res--){var words=descResults[res].name.split(" ");if(descResults[res].keywords)words=words.concat(descResults[res].keywords.split(" "));var match=false;for(var wd=0;J3X.L3l(wd,words.length);wd++){if(J3X.g3l(words[wd].toUpperCase().indexOf(myKey),0)){match=true;break;}
}
if(!match)descResults.splice(res,1);}
}
exacts.sort(sortId);exacts=noDups(exacts);results.sort(sortId);results=noDups(results);results.length=Math.min(results.length,maxResults);descResults.sort(sortId);descResults=noDups(descResults);results=exacts.sort(sortWeight).concat(results.sort(sortWeight),descResults.sort(sortDescWeight));results.length=Math.min(results.length,maxResults);}
if(cb)cb(results);else return results;}
;}
;return _exports;}
{if(typeof define===S7l&&define.amd){define(["stxTimeZoneData","stxThirdParty","stx"],function(_stxTimeZoneData,_stxThirdParty,_stx){return _stxKernel_js(_stxThirdParty,_stx);}
);}
else{var V=function(D){_stxThirdParty=D.STXThirdParty;}
;var _stxThirdParty={}
;if(typeof (window.STXThirdParty)!=L2l)V(window);var _stx={"STX":window.STX,"STXChart":window.STXChart,"$$":window.$$,"$$$":window.$$$}
;_stxKernel_js(_stxThirdParty,_stx);}
}
}
)();