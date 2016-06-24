/* File generated on Mon Jun 20 2016 08:23:40 GMT-0400 (EDT) */
/* Version 2016-05-10.1 */
/* Expires on 2016/12/27 */
/* Locked to domains ["127.0.0.1","localhost","loginandtrade.com","cityindextest9.co.uk","cityindex.com","globallogic.com.ar","cityindexpd.ektron9.dev.cityindex.co.uk","cityindexpd.ektron9.qa.cityindex.co.uk","cityindexpd.ektron9.stg.cityindex.co.uk","cityindex.co.uk","trade.getuptick.com","trade.loginandtrade.com","gain-ux.herokuapp.com","lite.globallogic.com"] */
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

	var domains=["127.0.0.1","localhost","loginandtrade.com","cityindextest9.co.uk","cityindex.com","globallogic.com.ar","cityindexpd.ektron9.dev.cityindex.co.uk","cityindexpd.ektron9.qa.cityindex.co.uk","cityindexpd.ektron9.stg.cityindex.co.uk","cityindex.co.uk","trade.getuptick.com","trade.loginandtrade.com","gain-ux.herokuapp.com","lite.globallogic.com"];
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
var p9s={'I6i':function(k6i,e6i,Z6i){return k6i-e6i+Z6i;}
,'Y6s':function(B6s,F6s){return B6s==F6s;}
,'G35':function(K35,d35){return K35<=d35;}
,'L9c':function(X9c,U9c){return X9c<U9c;}
,'B5':function(F5,V5){return F5===V5;}
,'v2g':function(o2g,J2g){return o2g<J2g;}
,'W3P':function(Y3P,B3P){return Y3P/B3P;}
,'I2c':function(k2c,e2c){return k2c/e2c;}
,'S44':function(x44,M44){return x44===M44;}
,'Q74':function(S74,x74){return S74/x74;}
,'r7P':function(G7P,K7P){return G7P<K7P;}
,'o95':function(J95,n95){return J95==n95;}
,'k4i':function(e4i,Z4i){return e4i<Z4i;}
,'B0H':function(F0H,V0H){return F0H>V0H;}
,'M4i':function(s0i,N0i){return s0i<N0i;}
,'E6c':function(l6c,W6c){return l6c>W6c;}
,'f8P':function(w8P,I8P){return w8P>I8P;}
,'B7g':function(F7g,V7g){return F7g!==V7g;}
,'q8P':function(b8P,E8P){return b8P-E8P;}
,'Y8i':function(B8i,F8i){return B8i===F8i;}
,'v3i':function(o3i,J3i,n3i){return o3i-J3i+n3i;}
,'K75':function(d75,c75){return d75==c75;}
,'T9H':function(O9H,h9H){return O9H-h9H;}
,'b0E':"xp",'l9T':function(W9T,Y9T){return W9T-Y9T;}
,'B6':function(F6,V6){return F6*V6;}
,'P5c':function(H5c,r5c){return H5c<r5c;}
,'n34':function(a34,p34){return a34-p34;}
,'H6H':function(r6H,G6H){return r6H/G6H;}
,'X6T':function(U6T,A6T){return U6T*A6T;}
,'d3s':function(c3s,C3s){return c3s<C3s;}
,'d8':function(c8,C8){return c8==C8;}
,'V0g':function(R0g,g0g){return R0g-g0g;}
,'L7c':function(X7c,U7c){return X7c*U7c;}
,'k55':function(e55,Z55){return e55<Z55;}
,'P0':function(H0,r0){return H0<r0;}
,'n3s':function(a3s,p3s){return a3s/p3s;}
,'k2G':function(e2G,Z2G){return e2G-Z2G;}
,'P9c':function(H9c,r9c){return H9c-r9c;}
,'A8T':function(D8T,v8T){return D8T===v8T;}
,'Q8c':function(S8c,x8c){return S8c===x8c;}
,'k4G':function(e4G,Z4G){return e4G<Z4G;}
,'w4s':function(I4s,k4s){return I4s/k4s;}
,'n7g':function(a7g,p7g){return a7g<p7g;}
,'Q65':function(S65,x65){return S65==x65;}
,'p6g':function(q6g,b6g){return q6g-b6g;}
,'z1g':function(T1g,O1g){return T1g<O1g;}
,'T2i':function(O2i,h2i){return O2i!==h2i;}
,'l2s':function(W2s,Y2s){return W2s==Y2s;}
,'c1s':function(C1s,j1s){return C1s/j1s;}
,'R7T':function(g7T,i7T){return g7T===i7T;}
,'b1s':function(E1s,l1s){return E1s-l1s;}
,'J1':function(n1,a1){return n1>a1;}
,'s9c':function(N9c,y9c){return N9c>y9c;}
,'V6g':function(R6g,g6g){return R6g>=g6g;}
,'I2o':function(k2o,e2o){return k2o===e2o;}
,'F6G':function(V6G,R6G){return V6G>R6G;}
,'y5P':function(u5P,z5P){return u5P&z5P;}
,'t45':function(P45,H45){return P45==H45;}
,'P4s':function(H4s,r4s){return H4s!=r4s;}
,'k7g':function(e7g,Z7g){return e7g>=Z7g;}
,'a7i':function(p7i,q7i){return p7i!==q7i;}
,'k7H':function(e7H,Z7H){return e7H<Z7H;}
,'X54':function(U54,A54){return U54>=A54;}
,'n5P':function(a5P,p5P){return a5P>p5P;}
,'l25':function(W25,Y25){return W25>Y25;}
,'b8o':function(E8o,l8o){return E8o>l8o;}
,'D3s':function(v3s,o3s,J3s){return v3s*o3s/J3s;}
,'A7s':function(D7s,v7s){return D7s>v7s;}
,'J5s':function(n5s,a5s){return n5s<a5s;}
,'T8P':function(O8P,h8P){return O8P-h8P;}
,'Q35':function(S35,x35){return S35*x35;}
,'G8o':function(K8o,d8o){return K8o<d8o;}
,'U4G':function(A4G,D4G){return A4G*D4G;}
,'P0i':function(H0i,r0i){return H0i-r0i;}
,'U0':function(A0,D0){return A0==D0;}
,'P3':function(H3,r3){return H3*r3;}
,'e3G':function(Z3G,m3G){return Z3G===m3G;}
,'w6G':function(I6G,k6G){return I6G==k6G;}
,'y7P':function(u7P,z7P){return u7P-z7P;}
,'l8':function(W8,Y8){return W8==Y8;}
,'a1s':function(p1s,q1s){return p1s-q1s;}
,'c0o':function(C0o,j0o){return C0o<j0o;}
,'y0o':function(u0o,z0o){return u0o-z0o;}
,'E2E':"#",'w94':5,'w4g':function(I4g,k4g){return I4g!==k4g;}
,'C1i':function(j1i,Q1i){return j1i*Q1i;}
,'c0i':function(C0i,j0i){return C0i<j0i;}
,'E6o':function(l6o,W6o){return l6o>W6o;}
,'G9c':function(K9c,d9c){return K9c>d9c;}
,'H5':function(r5,G5){return r5-G5;}
,'y3i':function(u3i,z3i){return u3i<z3i;}
,'t4P':function(P4P,H4P){return P4P==H4P;}
,'M1T':function(s9T,N9T){return s9T<N9T;}
,'B4P':function(F4P,V4P){return F4P!=V4P;}
,'I6H':function(k6H,e6H){return k6H<e6H;}
,'f4i':function(w4i,I4i){return w4i/I4i;}
,'O65':function(h65,f65){return h65>f65;}
,'m7g':function(L7g,X7g){return L7g<X7g;}
,'J3H':function(n3H,a3H){return n3H!=a3H;}
,'B7T':function(F7T,V7T){return F7T<=V7T;}
,'M14':2,'L35':function(X35,U35){return X35<U35;}
,'C9':function(j9,Q9){return j9==Q9;}
,'B2G':function(F2G,V2G){return F2G<V2G;}
,'Z05':function(m05,L05){return m05<L05;}
,'r3H':function(G3H,K3H){return G3H!=K3H;}
,'j0T':function(Q0T,S0T){return Q0T===S0T;}
,'g9c':function(i9c,t9c){return i9c<t9c;}
,'l0':function(W0,Y0){return W0==Y0;}
,'R5P':function(g5P,i5P){return g5P<i5P;}
,'z9':function(T9,O9){return T9<O9;}
,'G3G':function(K3G,d3G){return K3G==d3G;}
,'w1H':function(I1H,k1H){return I1H===k1H;}
,'U4c':function(A4c,D4c){return A4c<D4c;}
,'q0H':function(b0H,E0H){return b0H==E0H;}
,'m0s':function(L0s,X0s){return L0s===X0s;}
,'W2P':function(Y2P,B2P){return Y2P&B2P;}
,'p15':function(q15,b15){return q15/b15;}
,'O7i':function(h7i,f7i){return h7i<f7i;}
,'v0s':function(o0s,J0s){return o0s==J0s;}
,'p0P':function(q0P,b0P,E0P){return q0P-b0P+E0P;}
,'b7':function(E7,l7){return E7<l7;}
,'L2P':function(X2P,U2P){return X2P<=U2P;}
,'n8P':function(a8P,p8P){return a8P/p8P;}
,'c4T':function(C4T,j4T){return C4T!==j4T;}
,'n2i':function(a2i,p2i){return a2i==p2i;}
,'u4s':function(z4s,T4s){return z4s<T4s;}
,'S1g':function(x1g,M1g){return x1g<M1g;}
,'b7i':function(E7i,l7i){return E7i==l7i;}
,'g1s':function(i1s,t1s){return i1s>t1s;}
,'h2H':function(f2H,w2H){return f2H>w2H;}
,'h1P':function(f1P,w1P){return f1P!=w1P;}
,'q5G':function(b5G,E5G){return b5G-E5G;}
,'b1T':function(E1T,l1T){return E1T<l1T;}
,'i6s':function(t6s,P6s){return t6s==P6s;}
,'k5P':function(e5P,Z5P){return e5P>=Z5P;}
,'v45':function(o45,J45){return o45-J45;}
,'g4g':function(i4g,t4g){return i4g==t4g;}
,'T7H':function(O7H,h7H){return O7H-h7H;}
,'S8g':function(x8g,M8g){return x8g<M8g;}
,'x8':function(M8,s7T){return M8==s7T;}
,'q25':function(b25,E25){return b25<E25;}
,'T2s':function(O2s,h2s){return O2s==h2s;}
,'y6o':function(u6o,z6o){return u6o-z6o;}
,'T0s':function(O0s,h0s){return O0s!=h0s;}
,'l0H':function(W0H,Y0H){return W0H-Y0H;}
,'O1H':function(h1H,f1H){return h1H===f1H;}
,'w8c':function(I8c,k8c){return I8c===k8c;}
,'z0g':function(T0g,O0g){return T0g/O0g;}
,'I0G':function(k0G,e0G){return k0G*e0G;}
,'T3i':function(O3i,h3i){return O3i===h3i;}
,'Z3s':function(m3s,L3s,X3s,U3s,A3s){return m3s/L3s/X3s/U3s/A3s;}
,'L6o':function(X6o,U6o,A6o){return X6o-U6o-A6o;}
,'M9G':function(s2G,N2G){return s2G<N2G;}
,'h6H':function(f6H,w6H){return f6H<w6H;}
,'K7G':function(d7G,c7G){return d7G-c7G;}
,'i1G':function(t1G,P1G){return t1G/P1G;}
,'l34':function(W34,Y34){return W34>=Y34;}
,'Y1g':function(B1g,F1g){return B1g*F1g;}
,'C5':function(j5,Q5){return j5===Q5;}
,'Y05':function(B05,F05){return B05!==F05;}
,'U0s':function(A0s,D0s){return A0s==D0s;}
,'m4i':function(L4i,X4i){return L4i/X4i;}
,'f2i':function(w2i,I2i){return w2i!==I2i;}
,'Z7G':function(m7G,L7G){return m7G<L7G;}
,'P1P':function(H1P,r1P){return H1P!==r1P;}
,'O4T':function(h4T,f4T){return h4T/f4T;}
,'K9':function(d9,c9){return d9==c9;}
,'x0P':function(M0P,s3P){return M0P-s3P;}
,'K6o':function(d6o,c6o){return d6o===c6o;}
,'X2o':function(U2o,A2o){return U2o<A2o;}
,'W1H':function(Y1H,B1H){return Y1H>B1H;}
,'u7i':function(z7i,T7i){return z7i>T7i;}
,'J6s':function(n6s,a6s){return n6s/a6s;}
,'f55':function(w55,I55){return w55<I55;}
,'i8G':function(t8G,P8G){return t8G==P8G;}
,'K6c':function(d6c,c6c,C6c,j6c){return d6c-c6c+C6c-j6c;}
,'v5P':function(o5P,J5P){return o5P<J5P;}
,'I6s':function(k6s,e6s){return k6s-e6s;}
,'Y2':function(B2,F2){return B2==F2;}
,'U5':function(A5,D5){return A5>D5;}
,'H1g':function(r1g,G1g){return r1g*G1g;}
,'c9G':function(C9G,j9G){return C9G==j9G;}
,'u5c':function(z5c,T5c){return z5c&T5c;}
,'I44':function(k44,e44){return k44/e44;}
,'Z2T':function(m2T,L2T){return m2T<L2T;}
,'f6c':function(w6c,I6c){return w6c>=I6c;}
,'R5G':function(g5G,i5G){return g5G===i5G;}
,'M1P':function(s9P,N9P){return s9P*N9P;}
,'l4P':function(W4P,Y4P){return W4P===Y4P;}
,'o1o':function(J1o,n1o){return J1o==n1o;}
,'Y3H':function(B3H,F3H,V3H){return B3H-F3H-V3H;}
,'K1G':function(d1G,c1G){return d1G-c1G;}
,'t5g':function(P5g,H5g){return P5g-H5g;}
,'u9G':function(z9G,T9G){return z9G/T9G;}
,'L1s':function(X1s,U1s){return X1s<U1s;}
,'C5H':function(j5H,Q5H){return j5H===Q5H;}
,'g5i':function(i5i,t5i){return i5i-t5i;}
,'l5G':function(W5G,Y5G){return W5G-Y5G;}
,'Q6P':function(S6P,x6P){return S6P==x6P;}
,'b0c':function(E0c,l0c){return E0c/l0c;}
,'s0c':function(N0c,y0c){return N0c==y0c;}
,'E5T':function(l5T,W5T){return l5T<W5T;}
,'H6T':function(r6T,G6T){return r6T==G6T;}
,'R3s':function(g3s,i3s){return g3s===i3s;}
,'r6':function(G6,K6){return G6>K6;}
,'d7T':function(c7T,C7T){return c7T!=C7T;}
,'L8T':function(X8T,U8T){return X8T===U8T;}
,'P0c':function(H0c,r0c,G0c){return H0c-r0c+G0c;}
,'w1o':function(I1o,k1o){return I1o!==k1o;}
,'J0g':function(n0g,a0g){return n0g!=a0g;}
,'a9i':function(p9i,q9i){return p9i-q9i;}
,'Q8H':function(S8H,x8H,M8H){return S8H-x8H-M8H;}
,'U3o':function(A3o,D3o){return A3o==D3o;}
,'Q8o':function(S8o,x8o){return S8o<x8o;}
,'T3o':function(O3o,h3o){return O3o===h3o;}
,'t7P':function(P7P,H7P){return P7P>H7P;}
,'H15':function(r15,G15){return r15-G15;}
,'K8s':function(d8s,c8s){return d8s==c8s;}
,'C5T':function(j5T,Q5T){return j5T>Q5T;}
,'W9i':function(Y9i,B9i){return Y9i/B9i;}
,'U6':function(A6,D6){return A6==D6;}
,'Z5H':function(m5H,L5H){return m5H>=L5H;}
,'u1s':function(z1s,T1s){return z1s===T1s;}
,'D6o':function(v6o,o6o){return v6o/o6o;}
,'D6H':function(v6H,o6H){return v6H<o6H;}
,'A04':function(D04,v04){return D04<=v04;}
,'F3P':function(V3P,R3P){return V3P==R3P;}
,'U9o':function(A9o,D9o){return A9o*D9o;}
,'v0i':function(o0i,J0i){return o0i<J0i;}
,'R85':function(g85,i85){return g85>i85;}
,'i05':function(t05,P05){return t05!=P05;}
,'r4':function(G4,K4){return G4/K4;}
,'N8i':function(y8i,u8i){return y8i<u8i;}
,'m55':function(L55,X55){return L55<X55;}
,'h5o':function(f5o,w5o){return f5o/w5o;}
,'O7c':function(h7c,f7c){return h7c<f7c;}
,'O1i':function(h1i,f1i){return h1i==f1i;}
,'S8i':function(x8i,M8i){return x8i-M8i;}
,'I7T':function(k7T,e7T){return k7T!=e7T;}
,'v4i':function(o4i,J4i){return o4i>=J4i;}
,'y0T':function(u0T,z0T){return u0T===z0T;}
,'n9H':function(a9H,p9H){return a9H-p9H;}
,'a9c':function(p9c,q9c){return p9c<q9c;}
,'y0i':function(u0i,z0i){return u0i<z0i;}
,'M7o':function(s6o,N6o){return s6o-N6o;}
,'w7':function(I7,k7){return I7<k7;}
,'X3T':function(U3T,A3T){return U3T-A3T;}
,'j8':function(Q8,S8){return Q8==S8;}
,'o8T':function(J8T,n8T){return J8T==n8T;}
,'A1o':function(D1o,v1o){return D1o<v1o;}
,'U3i':function(A3i,D3i){return A3i*D3i;}
,'S3c':function(x3c,M3c){return x3c&M3c;}
,'O8H':function(h8H,f8H){return h8H<f8H;}
,'Y5s':function(B5s,F5s){return B5s===F5s;}
,'S75':function(x75,M75){return x75<M75;}
,'d0s':function(c0s,C0s){return c0s-C0s;}
,'s9g':function(N9g,y9g){return N9g==y9g;}
,'P3P':function(H3P,r3P){return H3P==r3P;}
,'U5i':function(A5i,D5i){return A5i>D5i;}
,'e35':function(Z35,m35){return Z35*m35;}
,'R4':function(g4,i4){return g4-i4;}
,'V4o':function(R4o,g4o){return R4o==g4o;}
,'R2s':function(g2s,i2s){return g2s==i2s;}
,'F5c':function(V5c,R5c){return V5c*R5c;}
,'i5o':function(t5o,P5o){return t5o*P5o;}
,'H1G':function(r1G,G1G){return r1G-G1G;}
,'Y6c':function(B6c,F6c){return B6c-F6c;}
,'R9H':function(g9H,i9H){return g9H/i9H;}
,'T2G':function(O2G,h2G){return O2G-h2G;}
,'h7T':function(f7T,w7T){return f7T-w7T;}
,'U3c':function(A3c,D3c){return A3c/D3c;}
,'y64':function(u64,z64){return u64/z64;}
,'c1o':function(C1o,j1o){return C1o===j1o;}
,'w74':function(I74,k74){return I74<k74;}
,'k8':function(e8,Z8){return e8==Z8;}
,'G7c':function(K7c,d7c){return K7c!==d7c;}
,'S4c':function(x4c,M4c){return x4c<M4c;}
,'z3c':function(T3c,O3c){return T3c-O3c;}
,'L4o':function(X4o,U4o){return X4o<U4o;}
,'m6i':function(L6i,X6i,U6i){return L6i-X6i+U6i;}
,'G74':function(K74,d74){return K74!=d74;}
,'q5i':function(b5i,E5i){return b5i/E5i;}
,'d85':function(c85,C85){return c85-C85;}
,'r34':function(G34,K34){return G34<=K34;}
,'b9i':function(E9i,l9i){return E9i<l9i;}
,'D8G':function(v8G,o8G){return v8G==o8G;}
,'L8H':function(X8H,U8H){return X8H==U8H;}
,'f4G':function(w4G,I4G){return w4G==I4G;}
,'W4T':function(Y4T,B4T){return Y4T/B4T;}
,'N2o':function(y2o,u2o){return y2o-u2o;}
,'J5H':function(n5H,a5H){return n5H<=a5H;}
,'o4s':function(J4s,n4s){return J4s/n4s;}
,'f7g':function(w7g,I7g){return w7g>=I7g;}
,'j2s':function(Q2s,S2s){return Q2s==S2s;}
,'z6i':function(T6i,O6i){return T6i==O6i;}
,'E9':function(l9,W9){return l9==W9;}
,'K2H':function(d2H,c2H){return d2H==c2H;}
,'D0P':function(v0P,o0P){return v0P/o0P;}
,'R2g':function(g2g,i2g){return g2g==i2g;}
,'l4c':function(W4c,Y4c){return W4c<Y4c;}
,'Z6s':function(m6s,L6s){return m6s==L6s;}
,'f25':function(w25,I25){return w25!==I25;}
,'I8i':function(k8i,e8i){return k8i<e8i;}
,'c8T':function(C8T,j8T){return C8T-j8T;}
,'m2G':function(L2G,X2G){return L2G<X2G;}
,'D1g':function(v1g,o1g){return v1g>o1g;}
,'W9s':function(Y9s,B9s){return Y9s-B9s;}
,'n2G':function(a2G,p2G){return a2G==p2G;}
,'Q9i':function(S9i,x9i){return S9i<x9i;}
,'L3g':function(X3g,U3g){return X3g-U3g;}
,'P1H':function(H1H,r1H){return H1H<r1H;}
,'Y8g':function(B8g,F8g){return B8g|F8g;}
,'b3i':function(E3i,l3i){return E3i===l3i;}
,'h3P':function(f3P,w3P){return f3P>=w3P;}
,'Z3P':function(m3P,L3P){return m3P/L3P;}
,'P6i':function(H6i,r6i){return H6i-r6i;}
,'F3i':function(V3i,R3i){return V3i-R3i;}
,'T1c':function(O1c,h1c){return O1c>h1c;}
,'q3c':function(b3c,E3c){return b3c/E3c;}
,'y94':1,'U7P':function(A7P,D7P){return A7P-D7P;}
,'N3P':function(y3P,u3P){return y3P-u3P;}
,'m9H':function(L9H,X9H){return L9H-X9H;}
,'g8c':function(i8c,t8c){return i8c*t8c;}
,'x85':function(M85,s7G){return M85/s7G;}
,'Z6T':function(m6T,L6T){return m6T*L6T;}
,'b7c':function(E7c,l7c){return E7c-l7c;}
,'y6c':function(u6c,z6c){return u6c*z6c;}
,'V44':function(R44,g44){return R44>=g44;}
,'e8T':function(Z8T,m8T){return Z8T-m8T;}
,'c4o':function(C4o,j4o){return C4o-j4o;}
,'F4g':function(V4g,R4g){return V4g==R4g;}
,'I0P':function(k0P,e0P){return k0P-e0P;}
,'c3P':function(C3P,j3P){return C3P>=j3P;}
,'M2P':function(s8P,N8P){return s8P<N8P;}
,'V5o':function(R5o,g5o){return R5o<g5o;}
,'R0T':function(g0T,i0T){return g0T-i0T;}
,'O8o':function(h8o,f8o){return h8o==f8o;}
,'M3':function(s5,N5){return s5*N5;}
,'A6i':function(D6i,v6i){return D6i==v6i;}
,'t9H':function(P9H,H9H){return P9H-H9H;}
,'c3i':function(C3i,j3i){return C3i===j3i;}
,'y6P':function(u6P,z6P){return u6P<=z6P;}
,'h05':function(f05,w05){return f05<w05;}
,'t4G':function(P4G,H4G){return P4G in H4G;}
,'n1c':function(a1c,p1c){return a1c-p1c;}
,'L4H':function(X4H,U4H){return X4H===U4H;}
,'J2H':function(n2H,a2H){return n2H<a2H;}
,'o3G':function(J3G,n3G){return J3G!=n3G;}
,'Z6H':function(m6H,L6H){return m6H>L6H;}
,'b9c':function(E9c,l9c){return E9c>l9c;}
,'b4o':function(E4o,l4o){return E4o/l4o;}
,'i0g':function(t0g,P0g){return t0g!==P0g;}
,'y9T':function(u9T,z9T){return u9T===z9T;}
,'k45':function(e45,Z45){return e45<Z45;}
,'O6G':function(h6G,f6G){return h6G-f6G;}
,'l8P':function(W8P,Y8P){return W8P*Y8P;}
,'b4H':function(E4H,l4H){return E4H<l4H;}
,'D6g':function(v6g,o6g){return v6g>=o6g;}
,'v9T':function(o9T,J9T){return o9T!=J9T;}
,'I2T':function(k2T,e2T){return k2T>e2T;}
,'b4T':function(E4T,l4T){return E4T/l4T;}
,'x7T':function(M7T,s6T){return M7T/s6T;}
,'k4c':function(e4c,Z4c){return e4c>Z4c;}
,'W7i':function(Y7i,B7i){return Y7i!=B7i;}
,'A7i':function(D7i,v7i){return D7i<v7i;}
,'Y2H':function(B2H,F2H){return B2H!=F2H;}
,'r3T':function(G3T,K3T){return G3T<K3T;}
,'m64':function(L64,X64){return L64===X64;}
,'C7i':function(j7i,Q7i,S7i){return j7i-Q7i+S7i;}
,'L1H':function(X1H,U1H){return X1H==U1H;}
,'M9c':function(s2c,N2c,y2c,u2c){return s2c-N2c+y2c-u2c;}
,'i6T':function(t6T,P6T){return t6T/P6T;}
,'h1':function(f1,w1){return f1<w1;}
,'d3H':function(c3H,C3H){return c3H<C3H;}
,'N4':function(y4,u4){return y4>=u4;}
,'R7g':function(g7g,i7g){return g7g-i7g;}
,'f5i':function(w5i,I5i){return w5i*I5i;}
,'E15':function(l15,W15){return l15-W15;}
,'R0P':function(g0P,i0P){return g0P<i0P;}
,'z1':function(T1,O1){return T1/O1;}
,'a4g':function(p4g,q4g){return p4g-q4g;}
,'i6H':function(t6H,P6H){return t6H>P6H;}
,'p8i':function(q8i,b8i){return q8i<b8i;}
,'q9P':function(b9P,E9P){return b9P-E9P;}
,'b5c':function(E5c,l5c){return E5c-l5c;}
,'B5G':function(F5G,V5G){return F5G>V5G;}
,'p9':function(q9,b9){return q9==b9;}
,'A4g':function(D4g,v4g){return D4g*v4g;}
,'E75':function(l75,W75){return l75===W75;}
,'K6H':function(d6H,c6H){return d6H<c6H;}
,'U9s':function(A9s,D9s){return A9s>=D9s;}
,'Q1o':function(S1o,x1o){return S1o===x1o;}
,'Q3P':function(S3P,x3P){return S3P&x3P;}
,'A65':function(D65,v65){return D65==v65;}
,'C44':function(j44,Q44){return j44<Q44;}
,'S7s':function(x7s,M7s){return x7s/M7s;}
,'f0':function(w0,I0){return w0-I0;}
,'B5P':function(F5P,V5P){return F5P-V5P;}
,'v4c':function(o4c,J4c){return o4c!=J4c;}
,'z2o':function(T2o,O2o){return T2o/O2o;}
,'W95':function(Y95,B95){return Y95==B95;}
,'b2P':function(E2P,l2P){return E2P>=l2P;}
,'s1i':function(N1i,y1i){return N1i===y1i;}
,'L9G':function(X9G,U9G){return X9G<U9G;}
,'I85':function(k85,e85){return k85<e85;}
,'w35':function(I35,k35){return I35*k35;}
,'j64':function(Q64,S64){return Q64<S64;}
,'I5o':function(k5o,e5o){return k5o===e5o;}
,'z8s':function(T8s,O8s){return T8s/O8s;}
,'b7o':function(E7o,l7o){return E7o/l7o;}
,'d64':function(c64,C64){return c64<C64;}
,'W65':function(Y65,B65){return Y65==B65;}
,'i6g':function(t6g,P6g){return t6g===P6g;}
,'Q6c':function(S6c,x6c){return S6c<=x6c;}
,'J7G':function(n7G,a7G){return n7G==a7G;}
,'s8o':function(N8o,y8o){return N8o===y8o;}
,'z05':function(T05,O05){return T05>O05;}
,'i1':function(P1,H1){return P1>H1;}
,'S6T':function(x6T,M6T){return x6T<M6T;}
,'K5':function(d5,c5){return d5-c5;}
,'Z8i':function(m8i,L8i){return m8i===L8i;}
,'U5P':function(A5P,D5P){return A5P!=D5P;}
,'x6':function(M6,s4){return M6-s4;}
,'E44':function(l44,W44){return l44>=W44;}
,'U0T':function(A0T,D0T){return A0T*D0T;}
,'J3T':function(n3T,a3T){return n3T%a3T;}
,'K3c':function(d3c,c3c){return d3c/c3c;}
,'v5i':function(o5i,J5i){return o5i-J5i;}
,'E7T':function(l7T,W7T,Y7T){return l7T-W7T+Y7T;}
,'i5H':function(t5H,P5H){return t5H>P5H;}
,'Q4H':function(S4H,x4H){return S4H==x4H;}
,'a7s':function(p7s,q7s){return p7s!=q7s;}
,'p54':(function(S54){var K54={}
,l54=function(W54,Y54){var B54=Y54&(48.<(15.70E1,28.20E1)?(3.38E2,0xffff):(73,0x120)<0xB3?"X":(0x1F1,0xCC));var F54=Y54-B54;return ((F54*W54|(8.46E2>=(37,0x1F2)?(0x5E,0):(134.,88)>=0x130?"j":(116,148.20E1)))+(B54*W54|(0x1D2<=(1.156E3,0x15E)?0xB1:126.<=(59,78.60E1)?(65,0):(0x112,11.))))|(8.58E2<(0x17B,120.4E1)?(89.7E1,0):95.>(69.2E1,145.)?1000:(40.,0x175));}
,c54=(function(){}
).constructor(new S54((((14.4E2,0x1E8)>=(60,0x14C)?(11.8E1,"u"):(1.198E3,78.10E1))+"hw"+(0x138>=(74.,64.8E1)?(0x1C,"t"):(0xF0,79)<=0x55?(10.950E2,"x"):(0x1DE,0xFF))+(0x118>=(87.,111.)?(83.,"u"):(0x72,5.350E2)>0x254?0x145:(22.70E1,23.20E1))+((0x1DA,0xE7)>=15.?(0x9D,"q"):(0x16F,6.43E2))+((4.,0xD7)>=0x256?(0xB2,33):(0x15,11.)>=10?(7.,"#"):(0x18,0xF9))+((8.35E2,112.)<=(45.,0x19A)?(29.0E1,"g"):8.38E2<(50.2E1,65.)?(87,0.01):88.7E1<(142,135.)?75.3E1:(14.23E2,1.196E3))+((0x24E,0x16)<=(105.9E1,60)?(14.75E2,"r"):(0xB3,62.30E1))+"f"+"xp"+"hq"+"w1"+"g"+"r"+"p"+"dlq"+">")).x54(3))(),q54=function(V54,R54,g54){if(K54[g54]!==undefined){return K54[g54];}
var i54=0xcc9e2d51,t54=0x1b873593;var P54=g54;var H54=R54&~0x3;for(var r54=0;r54<H54;r54+=4){var G54=(V54.charCodeAt(r54)&0xff)|((V54.charCodeAt(r54+1)&0xff)<<8)|((V54.charCodeAt(r54+2)&0xff)<<16)|((V54.charCodeAt(r54+3)&0xff)<<24);G54=l54(G54,i54);G54=((G54&0x1ffff)<<((41.,89)>=(8.81E2,0x50)?(0x1CA,15):(58,40.6E1)))|(G54>>>17);G54=l54(G54,t54);P54^=G54;P54=((P54&0x7ffff)<<13)|(P54>>>19);P54=(P54*5+0xe6546b64)|0;}
G54=0;switch(R54%((1.429E3,1.51E2)>=(0x1B9,0x14C)?(134,9.88E2):(33.,5.)<=(0x19C,0x6C)?(20,4):(0x151,10.370E2)<7.05E2?11.44E2:(135,29.3E1))){case 3:G54=(V54.charCodeAt(H54+2)&0xff)<<16;case 2:G54|=(V54.charCodeAt(H54+1)&((3.29E2,11.200E2)>0x78?(53,0xff):(37.1E1,77.)))<<8;case 1:G54|=(V54.charCodeAt(H54)&0xff);G54=l54(G54,i54);G54=((G54&0x1ffff)<<15)|(G54>>>17);G54=l54(G54,t54);P54^=G54;}
P54^=R54;P54^=P54>>>16;P54=l54(P54,0x85ebca6b);P54^=P54>>>13;P54=l54(P54,0xc2b2ae35);P54^=P54>>>16;K54[g54]=P54;return P54;}
,E54=function(j54,Q54,u14){var d54;var C54;if(u14>((89,43.)<7.86E2?(92,0):(104.5E1,71.0E1))){d54=c54.substring(j54,u14);C54=d54.length;return q54(d54,C54,Q54);}
else if(j54===((67.3E1,110.7E1)<=0x77?(0xA6,132.1E1):(97,0x5D)>(0x11A,0x17D)?(9.92E2,325):39.5E1>=(102,147.)?(39.,null):(141,77))||j54<=((3.4E2,61)<=(51,0x247)?(121.10E1,0):(61.,0x246))){d54=c54.substring(0,c54.length);C54=d54.length;return q54(d54,C54,Q54);}
d54=c54.substring(c54.length-j54,c54.length);C54=d54.length;return q54(d54,C54,Q54);}
;return {l54:l54,q54:q54,E54:E54}
;}
)(function(M54){this.M54=M54;this.x54=function(s14){var N14=new String();for(var y14=0;y14<M54.length;y14++){N14+=String.fromCharCode(M54.charCodeAt(y14)-s14);}
return N14;}
}
),'Y75':function(B75,F75){return B75<F75;}
,'M74':function(s64,N64){return s64===N64;}
,'Y3T':function(B3T,F3T){return B3T*F3T;}
,'h6i':function(f6i,w6i){return f6i!==w6i;}
,'C1G':function(j1G,Q1G){return j1G-Q1G;}
,'v5':function(o5,J5){return o5*J5;}
,'p6T':function(q6T,b6T){return q6T-b6T;}
,'n7P':function(a7P,p7P){return a7P==p7P;}
,'F3':function(V3,R3){return V3<=R3;}
,'a1T':function(p1T,q1T){return p1T===q1T;}
,'y7g':function(u7g,z7g){return u7g!==z7g;}
,'p5o':function(q5o,b5o){return q5o>b5o;}
,'G7s':function(K7s,d7s,c7s){return K7s-d7s+c7s;}
,'N8s':function(y8s,u8s){return y8s==u8s;}
,'z0P':function(T0P,O0P){return T0P<=O0P;}
,'F1i':function(V1i,R1i){return V1i<R1i;}
,'P1i':function(H1i,r1i){return H1i<r1i;}
,'W4H':function(Y4H,B4H){return Y4H===B4H;}
,'Z1P':function(m1P,L1P){return m1P/L1P;}
,'c6G':function(C6G,j6G){return C6G<=j6G;}
,'F9c':function(V9c,R9c){return V9c>R9c;}
,'n2g':function(a2g,p2g){return a2g<=p2g;}
,'P8o':function(H8o,r8o){return H8o>=r8o;}
,'h2':function(f2,I2){return f2==I2;}
,'F3G':function(V3G,R3G){return V3G!==R3G;}
,'v9o':function(o9o,J9o){return o9o<J9o;}
,'R4c':function(g4c,i4c){return g4c<i4c;}
,'a3':function(p3,q3){return p3<q3;}
,'Q8T':function(S8T,x8T){return S8T==x8T;}
,'c5i':function(C5i,j5i){return C5i==j5i;}
,'j5P':function(Q5P,S5P){return Q5P>=S5P;}
,'n0s':function(a0s,p0s){return a0s===p0s;}
,'W7c':function(Y7c,B7c){return Y7c>B7c;}
,'m9P':function(L9P,X9P){return L9P-X9P;}
,'y2G':function(u2G,z2G){return u2G<z2G;}
,'J44':function(n44,a44){return n44/a44;}
,'h7G':function(f7G,w7G){return f7G-w7G;}
,'H5s':function(r5s,G5s){return r5s===G5s;}
,'O9g':function(h9g,f9g){return h9g!=f9g;}
,'F4H':function(V4H,R4H){return V4H<R4H;}
,'H8i':function(r8i,G8i){return r8i<G8i;}
,'m5P':function(L5P,X5P){return L5P&X5P;}
,'Y2T':function(B2T,F2T){return B2T-F2T;}
,'g1P':function(i1P,t1P){return i1P/t1P;}
,'F9i':function(V9i,R9i){return V9i/R9i;}
,'c5c':function(C5c,j5c){return C5c>j5c;}
,'W0c':function(Y0c,B0c){return Y0c/B0c;}
,'t85':function(P85,H85){return P85*H85;}
,'t0s':function(P0s,H0s){return P0s<H0s;}
,'a1H':function(p1H,q1H){return p1H<q1H;}
,'I3s':function(k3s,e3s){return k3s-e3s;}
,'C2H':function(j2H,Q2H){return j2H<Q2H;}
,'o4H':function(J4H,n4H){return J4H!==n4H;}
,'s65':function(N65,y65){return N65-y65;}
,'d6':function(c6,C6){return c6==C6;}
,'G6G':function(K6G,d6G){return K6G>=d6G;}
,'I1G':function(k1G,e1G){return k1G-e1G;}
,'h3H':function(f3H,w3H){return f3H/w3H;}
,'u7':function(z7,T7){return z7==T7;}
,'Y8s':function(B8s,F8s){return B8s>F8s;}
,'p0g':function(q0g,b0g){return q0g<=b0g;}
,'v8P':function(o8P,J8P){return o8P==J8P;}
,'X2T':function(U2T,A2T){return U2T==A2T;}
,'x2i':function(M2i,s8i){return M2i*s8i;}
,'Z8g':function(m8g,L8g){return m8g==L8g;}
,'b3g':function(E3g,l3g){return E3g==l3g;}
,'h5H':function(f5H,w5H){return f5H==w5H;}
,'f9T':function(w9T,I9T){return w9T!==I9T;}
,'o04':function(J04,n04){return J04>n04;}
,'M5c':function(s1c,N1c){return s1c>N1c;}
,'F7':function(V7,R7){return V7<R7;}
,'U8':function(A8,D8){return A8==D8;}
,'A1':function(D1,o1){return D1==o1;}
,'h3T':function(f3T,w3T){return f3T==w3T;}
,'N5T':function(y5T,u5T){return y5T===u5T;}
,'G1H':function(K1H,d1H){return K1H>d1H;}
,'g95':function(i95,t95){return i95<=t95;}
,'E2H':function(l2H,W2H){return l2H!=W2H;}
,'k0H':function(e0H,Z0H){return e0H<Z0H;}
,'M8c':function(s7H,N7H){return s7H<=N7H;}
,'c1H':function(C1H,j1H){return C1H-j1H;}
,'G5i':function(K5i,d5i){return K5i==d5i;}
,'v2i':function(o2i,J2i){return o2i/J2i;}
,'y7H':function(u7H,z7H){return u7H*z7H;}
,'F1T':function(V1T,R1T){return V1T>R1T;}
,'A8o':function(D8o,v8o){return D8o*v8o;}
,'j3H':function(Q3H,S3H){return Q3H<=S3H;}
,'a4H':function(p4H,q4H){return p4H<q4H;}
,'N5o':function(y5o,u5o){return y5o==u5o;}
,'O74':function(h74,f74){return h74-f74;}
,'d3o':function(c3o,C3o){return c3o-C3o;}
,'A3':function(D3,v3){return D3/v3;}
,'D75':function(v75,o75){return v75==o75;}
,'Q5i':function(S5i,x5i,M5i){return S5i-x5i+M5i;}
,'Q3i':function(S3i,x3i){return S3i<=x3i;}
,'g4T':function(i4T,t4T){return i4T-t4T;}
,'A6G':function(D6G,v6G){return D6G<v6G;}
,'x9H':function(M9H,s2H){return M9H==s2H;}
,'l0P':function(W0P,Y0P){return W0P/Y0P;}
,'J8g':function(n8g,a8g){return n8g|a8g;}
,'h3s':function(f3s,w3s){return f3s==w3s;}
,'T5g':function(O5g,h5g){return O5g!=h5g;}
,'B2s':function(F2s,V2s){return F2s<V2s;}
,'f9E':"p",'X75':function(U75,A75){return U75==A75;}
,'R7P':function(g7P,i7P){return g7P==i7P;}
,'X7G':function(U7G,A7G){return U7G==A7G;}
,'q3o':function(b3o,E3o){return b3o-E3o;}
,'f0H':function(w0H,I0H){return w0H<I0H;}
,'D1G':function(v1G,o1G){return v1G<o1G;}
,'j0s':function(Q0s,S0s){return Q0s==S0s;}
,'c95':function(C95,j95){return C95>=j95;}
,'S5s':function(x5s,M5s){return x5s<M5s;}
,'z3P':function(T3P,O3P){return T3P<O3P;}
,'W9G':function(Y9G,B9G){return Y9G!=B9G;}
,'z5H':function(T5H,O5H){return T5H!=O5H;}
,'u4o':function(z4o,T4o){return z4o/T4o;}
,'E8g':function(l8g,W8g){return l8g|W8g;}
,'M9i':function(s2i,N2i){return s2i<N2i;}
,'r25':function(G25,K25){return G25*K25;}
,'T6c':function(O6c,h6c){return O6c<=h6c;}
,'N2H':function(y2H,u2H){return y2H-u2H;}
,'E2':function(l2,W2){return l2>=W2;}
,'g8o':function(i8o,t8o){return i8o>=t8o;}
,'j5G':function(Q5G,S5G){return Q5G>S5G;}
,'T0':function(O0,h0){return O0===h0;}
,'r4G':function(G4G,K4G){return G4G*K4G;}
,'k4P':function(e4P,Z4P){return e4P==Z4P;}
,'O2P':function(h2P,f2P){return h2P&f2P;}
,'O3g':function(h3g,f3g){return h3g-f3g;}
,'N5s':function(y5s,u5s){return y5s===u5s;}
,'b4s':function(E4s,l4s){return E4s-l4s;}
,'k0s':function(e0s,Z0s){return e0s==Z0s;}
,'o8H':function(J8H,n8H){return J8H-n8H;}
,'m1c':function(L1c,X1c){return L1c>X1c;}
,'S05':function(x05,M05){return x05<M05;}
,'J9':function(n9,a9){return n9<a9;}
,'D2o':function(v2o,o2o){return v2o>o2o;}
,'Y0G':function(B0G,F0G){return B0G>F0G;}
,'B4':function(F4,V4){return F4<V4;}
,'v9H':function(o9H,J9H){return o9H>=J9H;}
,'g6i':function(i6i,t6i){return i6i>t6i;}
,'t6':function(P6,H6){return P6/H6;}
,'j45':function(Q45,S45){return Q45-S45;}
,'m5':function(L5,X5){return L5*X5;}
,'x4P':function(M4P,s0P){return M4P>=s0P;}
,'A1T':function(D1T,v1T){return D1T!==v1T;}
,'D9':function(v9,o9){return v9/o9;}
,'X7T':function(U7T,A7T){return U7T/A7T;}
,'g0o':function(i0o,t0o){return i0o<t0o;}
,'V6c':function(R6c,g6c){return R6c<=g6c;}
,'H8s':function(r8s,G8s){return r8s>=G8s;}
,'J6T':function(n6T,a6T){return n6T/a6T;}
,'O9c':function(h9c,f9c){return h9c*f9c;}
,'f34':function(w34,I34){return w34<I34;}
,'I94':4,'B3c':function(F3c,V3c){return F3c-V3c;}
,'x2G':function(M2G,s8G){return M2G==s8G;}
,'B4G':function(F4G,V4G){return F4G/V4G;}
,'Z7T':function(m7T,L7T){return m7T-L7T;}
,'C8G':function(j8G,Q8G){return j8G>Q8G;}
,'m0T':function(L0T,X0T){return L0T-X0T;}
,'x9o':function(M9o,s2o){return M9o==s2o;}
,'f3o':function(w3o,I3o){return w3o===I3o;}
,'F2P':function(V2P,R2P){return V2P!=R2P;}
,'f5g':function(w5g,I5g){return w5g/I5g;}
,'W8o':function(Y8o,B8o){return Y8o-B8o;}
,'K0G':function(d0G,c0G){return d0G==c0G;}
,'i2o':function(t2o,P2o){return t2o*P2o;}
,'g2P':function(i2P,t2P){return i2P<t2P;}
,'T7g':function(O7g,h7g){return O7g>=h7g;}
,'p6H':function(q6H,b6H){return q6H<b6H;}
,'j34':function(Q34,S34){return Q34!=S34;}
,'m3i':function(L3i,X3i){return L3i===X3i;}
,'F8c':function(V8c,R8c){return V8c*R8c;}
,'b6G':function(E6G,l6G){return E6G-l6G;}
,'D5T':function(v5T,o5T){return v5T===o5T;}
,'N1g':function(y1g,u1g){return y1g-u1g;}
,'C75':function(j75,Q75){return j75<Q75;}
,'t25':function(P25,H25){return P25*H25;}
,'g6P':function(i6P,t6P){return i6P/t6P;}
,'v4P':function(o4P,J4P){return o4P>J4P;}
,'f0i':function(w0i,I0i){return w0i===I0i;}
,'D2c':function(v2c,o2c){return v2c!==o2c;}
,'T5i':function(O5i,h5i){return O5i*h5i;}
,'D0G':function(v0G,o0G){return v0G==o0G;}
,'c6P':function(C6P,j6P){return C6P<j6P;}
,'c3':function(C3,j3){return C3/j3;}
,'Y2o':function(B2o,F2o){return B2o<F2o;}
,'l9H':function(W9H,Y9H){return W9H<Y9H;}
,'G3P':function(K3P,d3P){return K3P&d3P;}
,'x4':function(M4,s0){return M4===s0;}
,'g7s':function(i7s,t7s){return i7s<=t7s;}
,'K2T':function(d2T,c2T){return d2T===c2T;}
,'k2g':function(e2g,Z2g){return e2g<Z2g;}
,'S7G':function(x7G,M7G){return x7G==M7G;}
,'u1o':function(z1o,T1o){return z1o>T1o;}
,'f7P':function(w7P,I7P){return w7P*I7P;}
,'X9':function(U9,A9){return U9<A9;}
,'R45':function(g45,i45){return g45==i45;}
,'I15':function(k15,e15){return k15/e15;}
,'w8o':function(I8o,k8o){return I8o==k8o;}
,'a4T':function(p4T,q4T){return p4T!=q4T;}
,'e7':function(Z7,m7){return Z7<m7;}
,'S1G':function(x1G,M1G){return x1G-M1G;}
,'K0c':function(d0c,c0c){return d0c-c0c;}
,'L94':8,'D15':function(v15,o15){return v15<o15;}
,'V8g':function(R8g,g8g){return R8g|g8g;}
,'w1i':function(I1i,k1i){return I1i>k1i;}
,'Q5c':function(S5c,x5c){return S5c<x5c;}
,'J8i':function(n8i,a8i){return n8i===a8i;}
,'J2o':function(n2o,a2o){return n2o>a2o;}
,'i6c':function(t6c,P6c){return t6c<=P6c;}
,'M4T':function(s0T,N0T){return s0T<N0T;}
,'J8s':function(n8s,a8s){return n8s-a8s;}
,'s7o':function(N7o,y7o){return N7o-y7o;}
,'T5G':function(O5G,h5G){return O5G<h5G;}
,'H6o':function(r6o,G6o){return r6o/G6o;}
,'v2s':function(o2s,J2s){return o2s-J2s;}
,'e1H':function(Z1H,m1H){return Z1H==m1H;}
,'L1T':function(X1T,U1T){return X1T<U1T;}
,'i8s':function(t8s,P8s){return t8s/P8s;}
,'V5T':function(R5T,g5T){return R5T/g5T;}
,'g0i':function(i0i,t0i){return i0i/t0i;}
,'o6G':function(J6G,n6G){return J6G>n6G;}
,'j55':function(Q55,S55){return Q55==S55;}
,'j9H':function(Q9H,S9H){return Q9H*S9H;}
,'j4P':function(Q4P,S4P){return Q4P==S4P;}
,'c9g':function(C9g,j9g){return C9g!=j9g;}
,'j2g':function(Q2g,S2g){return Q2g==S2g;}
,'t4i':function(P4i,H4i){return P4i<H4i;}
,'P8H':function(H8H,r8H){return H8H!=r8H;}
,'M1s':function(s9s,N9s){return s9s in N9s;}
,'K05':function(d05,c05){return d05<c05;}
,'s4s':function(N4s,y4s){return N4s-y4s;}
,'T6P':function(O6P,h6P,f6P){return O6P*h6P/f6P;}
,'d4c':function(c4c,C4c,j4c,Q4c){return c4c-C4c+j4c-Q4c;}
,'z54':function(T54,O54){return T54!=O54;}
,'w1s':function(I1s,k1s){return I1s<k1s;}
,'L6P':function(X6P,U6P){return X6P===U6P;}
,'w8T':function(I8T,k8T){return I8T===k8T;}
,'m9s':function(L9s,X9s){return L9s-X9s;}
,'I2H':function(k2H,e2H){return k2H==e2H;}
,'W4s':function(Y4s,B4s){return Y4s-B4s;}
,'S2H':function(x2H,M2H){return x2H>M2H;}
,'z6g':function(T6g,O6g){return T6g!=O6g;}
,'w4T':function(I4T,k4T){return I4T<k4T;}
,'m4c':function(L4c,X4c){return L4c<X4c;}
,'Z2c':function(m2c,L2c){return m2c/L2c;}
,'o7o':function(J7o,n7o){return J7o*n7o;}
,'n5G':function(a5G,p5G){return a5G/p5G;}
,'j5g':function(Q5g,S5g){return Q5g-S5g;}
,'f0T':function(w0T,I0T){return w0T!==I0T;}
,'F95':function(V95,R95){return V95>=R95;}
,'l4G':function(W4G,Y4G){return W4G>=Y4G;}
,'f64':function(w64,I64){return w64/I64;}
,'t55':function(P55,H55){return P55===H55;}
,'n9T':function(a9T,p9T){return a9T>p9T;}
,'G4s':function(K4s,d4s){return K4s==d4s;}
,'b1H':function(E1H,l1H){return E1H/l1H;}
,'b7s':function(E7s,l7s){return E7s==l7s;}
,'S6H':function(x6H,M6H){return x6H<=M6H;}
,'C1c':function(j1c,Q1c){return j1c/Q1c;}
,'E1':function(l1,W1){return l1-W1;}
,'Q0':function(S0,M0){return S0===M0;}
,'n5i':function(a5i,p5i){return a5i<p5i;}
,'T9s':function(O9s,h9s){return O9s!==h9s;}
,'i8g':function(t8g,P8g){return t8g==P8g;}
,'k6c':function(e6c,Z6c,m6c,L6c){return e6c-Z6c+m6c-L6c;}
,'R4P':function(g4P,i4P){return g4P==i4P;}
,'T0i':function(O0i,h0i){return O0i>=h0i;}
,'e74':function(Z74,m74){return Z74==m74;}
,'A95':function(D95,v95){return D95==v95;}
,'f8':function(w8,I8){return w8==I8;}
,'P5i':function(H5i,r5i){return H5i-r5i;}
,'c1T':function(C1T,j1T){return C1T==j1T;}
,'S0g':function(x0g,M0g){return x0g!==M0g;}
,'T45':function(O45,h45){return O45-h45;}
,'G1o':function(K1o,d1o){return K1o==d1o;}
,'y9P':function(u9P,z9P){return u9P*z9P;}
,'M7':function(s6,N6){return s6<N6;}
,'z2H':function(T2H,O2H){return T2H!==O2H;}
,'l64':function(W64,Y64){return W64<Y64;}
,'G9i':function(K9i,d9i){return K9i>d9i;}
,'l6':function(W6,Y6){return W6==Y6;}
,'m34':function(L34,X34){return L34<X34;}
,'Y44':function(B44,F44){return B44>=F44;}
,'Y6o':function(B6o,F6o){return B6o/F6o;}
,'r0P':function(G0P,K0P){return G0P-K0P;}
,'Z44':function(m44,L44){return m44>=L44;}
,'t4':function(P4,H4){return P4/H4;}
,'N15':function(y15,u15){return y15<u15;}
,'o3':function(J3,n3){return J3<n3;}
,'v8':function(o8,J8){return o8==J8;}
,'I5H':function(k5H,e5H){return k5H<e5H;}
,'z8i':function(T8i,O8i){return T8i==O8i;}
,'S2c':function(x2c,M2c){return x2c*M2c;}
,'X8i':function(U8i,A8i){return U8i===A8i;}
,'G4g':function(K4g,d4g,c4g,C4g){return K4g-d4g+c4g-C4g;}
,'o7c':function(J7c,n7c){return J7c<n7c;}
,'G7o':function(K7o,d7o){return K7o!=d7o;}
,'o6P':function(J6P,n6P){return J6P===n6P;}
,'k0T':function(e0T,Z0T){return e0T==Z0T;}
,'F0i':function(V0i,R0i){return V0i/R0i;}
,'C15':function(j15,Q15){return j15>=Q15;}
,'T64':function(O64,h64){return O64===h64;}
,'m25':function(L25,X25){return L25==X25;}
,'m9T':function(L9T,X9T){return L9T<X9T;}
,'S1i':function(x1i,M1i){return x1i===M1i;}
,'X15':function(U15,A15){return U15<A15;}
,'A1s':function(D1s,v1s){return D1s===v1s;}
,'r5g':function(G5g,K5g){return G5g>=K5g;}
,'M0o':function(s3o,N3o){return s3o<N3o;}
,'N6i':function(y6i,u6i){return y6i!==u6i;}
,'s4o':function(N4o,y4o){return N4o<y4o;}
,'p3H':function(q3H,b3H){return q3H===b3H;}
,'k25':function(e25,Z25){return e25==Z25;}
,'Z1G':function(m1G,L1G){return m1G*L1G;}
,'Y5T':function(B5T,F5T){return B5T*F5T;}
,'S9P':function(x9P,M9P){return x9P/M9P;}
,'T4G':function(O4G,h4G){return O4G===h4G;}
,'J1g':function(n1g,a1g){return n1g*a1g;}
,'Q95':function(S95,x95){return S95<=x95;}
,'G8c':function(K8c,d8c){return K8c/d8c;}
,'E6H':function(l6H,W6H){return l6H>W6H;}
,'w4o':function(I4o,k4o){return I4o-k4o;}
,'u1T':function(z1T,T1T){return z1T-T1T;}
,'t7g':function(P7g,H7g){return P7g-H7g;}
,'R0H':function(g0H,i0H){return g0H==i0H;}
,'O8T':function(h8T,f8T){return h8T===f8T;}
,'t9o':function(P9o,H9o){return P9o==H9o;}
,'T7P':function(O7P,h7P){return O7P-h7P;}
,'q0i':function(b0i,E0i){return b0i<E0i;}
,'r9o':function(G9o,K9o){return G9o-K9o;}
,'R9o':function(g9o,i9o){return g9o-i9o;}
,'S14':3,'C8P':function(j8P,Q8P){return j8P<=Q8P;}
,'r45':function(G45,K45){return G45==K45;}
,'d2s':function(c2s,C2s){return c2s<=C2s;}
,'W4g':function(Y4g,B4g){return Y4g/B4g;}
,'x5G':function(M5G,s1G){return M5G-s1G;}
,'B55':function(F55,V55){return F55>V55;}
,'N1G':function(y1G,u1G){return y1G==u1G;}
,'u1i':function(z1i,T1i){return z1i==T1i;}
,'K2o':function(d2o,c2o){return d2o*c2o;}
,'h3c':function(f3c,w3c,I3c){return f3c-w3c+I3c;}
,'z85':function(T85,O85){return T85==O85;}
,'d4':function(c4,C4){return c4===C4;}
,'r9P':function(G9P,K9P,d9P,c9P){return G9P-K9P+d9P-c9P;}
,'F1E':"r",'M95':function(s25,N25){return s25>=N25;}
,'U7H':function(A7H,D7H){return A7H<=D7H;}
,'W8H':function(Y8H,B8H){return Y8H<B8H;}
,'C6o':function(j6o,Q6o){return j6o>=Q6o;}
,'P74':function(H74,r74){return H74/r74;}
,'H0g':function(r0g,G0g){return r0g!=G0g;}
,'u4H':function(z4H,T4H){return z4H==T4H;}
,'A9g':function(D9g,v9g){return D9g%v9g;}
,'c8H':function(C8H,j8H){return C8H!=j8H;}
,'z6H':function(T6H,O6H){return T6H/O6H;}
,'y55':function(u55,z55){return u55/z55;}
,'I6T':function(k6T,e6T){return k6T===e6T;}
,'s7s':function(N7s,y7s){return N7s>=y7s;}
,'A74':function(D74,v74){return D74<=v74;}
,'M3G':function(s5G,N5G){return s5G*N5G;}
,'X1P':function(U1P,A1P,D1P,v1P){return U1P-A1P+D1P-v1P;}
,'E1g':function(l1g,W1g){return l1g<W1g;}
,'X6g':function(U6g,A6g){return U6g<A6g;}
,'c9s':function(C9s,j9s){return C9s==j9s;}
,'u0c':function(z0c,T0c){return z0c>T0c;}
,'s5c':function(N5c,y5c){return N5c<=y5c;}
,'w9g':function(I9g,k9g){return I9g*k9g;}
,'X8s':function(U8s,A8s){return U8s>A8s;}
,'e7s':function(Z7s,m7s){return Z7s>m7s;}
,'E6s':function(l6s,W6s){return l6s/W6s;}
,'k0':function(e0,Z0){return e0-Z0;}
,'P4H':function(H4H,r4H){return H4H<r4H;}
,'L3':function(X3,U3){return X3-U3;}
,'r2i':function(G2i,K2i){return G2i-K2i;}
,'Z5s':function(m5s,L5s){return m5s<L5s;}
,'G8T':function(K8T,d8T){return K8T>d8T;}
,'g5c':function(i5c,t5c){return i5c<t5c;}
,'M3i':function(s5i,N5i){return s5i==N5i;}
,'O7o':function(h7o,f7o){return h7o!=f7o;}
,'L65':function(X65,U65){return X65<U65;}
,'l85':function(W85,Y85){return W85<Y85;}
,'p8G':function(q8G,b8G){return q8G*b8G;}
,'P35':function(H35,r35){return H35>=r35;}
,'s35':function(N35,y35){return N35==y35;}
,'P4T':function(H4T,r4T){return H4T/r4T;}
,'o1H':function(J1H,n1H){return J1H<=n1H;}
,'x5g':function(M5g,s1g){return M5g/s1g;}
,'p1G':function(q1G,b1G){return q1G*b1G;}
,'a9g':function(p9g,q9g){return p9g>=q9g;}
,'j4g':function(Q4g,S4g){return Q4g<S4g;}
,'n4i':function(a4i,p4i){return a4i-p4i;}
,'z3s':function(T3s,O3s){return T3s-O3s;}
,'c35':function(C35,j35){return C35==j35;}
,'i15':function(t15,P15){return t15*P15;}
,'r7T':function(G7T,K7T){return G7T-K7T;}
,'F8H':function(V8H,R8H){return V8H<R8H;}
,'h1G':function(f1G,w1G){return f1G==w1G;}
,'j9T':function(Q9T,S9T){return Q9T<S9T;}
,'R3H':function(g3H,i3H){return g3H!==i3H;}
,'T34':function(O34,h34){return O34>h34;}
,'F74':function(V74,R74){return V74<R74;}
,'W6P':function(Y6P,B6P){return Y6P<B6P;}
,'J2T':function(n2T,a2T){return n2T-a2T;}
,'Q9c':function(S9c,x9c){return S9c-x9c;}
,'q2s':function(b2s,E2s){return b2s>E2s;}
,'n0':function(a0,p0){return a0==p0;}
,'O9G':function(h9G,f9G){return h9G-f9G;}
,'e04':function(Z04,m04){return Z04<m04;}
,'h75':function(f75,w75){return f75==w75;}
,'n9o':function(a9o,p9o){return a9o-p9o;}
,'I3P':function(k3P,e3P){return k3P-e3P;}
,'Z0g':function(m0g,L0g){return m0g/L0g;}
,'s7i':function(N7i,y7i){return N7i==y7i;}
,'H2T':function(r2T,G2T){return r2T===G2T;}
,'G6i':function(K6i,d6i){return K6i/d6i;}
,'x7P':function(M7P,s6P,N6P){return M7P*s6P/N6P;}
,'U7g':function(A7g,D7g){return A7g>=D7g;}
,'P8T':function(H8T,r8T){return H8T>r8T;}
,'d9H':function(c9H,C9H){return c9H>=C9H;}
,'V5H':function(R5H,g5H){return R5H<=g5H;}
,'O35':function(h35,f35){return h35-f35;}
,'l9P':function(W9P,Y9P){return W9P-Y9P;}
,'j8E':"g",'m0i':function(L0i,X0i){return L0i<X0i;}
,'L74':function(X74,U74){return X74>U74;}
,'d45':function(c45,C45){return c45!=C45;}
,'X6s':function(U6s,A6s){return U6s/A6s;}
,'m3c':function(L3c,X3c){return L3c/X3c;}
,'v5g':function(o5g,J5g){return o5g<J5g;}
,'g9s':function(i9s,t9s){return i9s==t9s;}
,'G1s':function(K1s,d1s){return K1s/d1s;}
,'D3T':function(v3T,o3T){return v3T-o3T;}
,'s1':function(N1,u1){return N1*u1;}
,'H5H':function(r5H,G5H){return r5H-G5H;}
,'w2P':function(I2P,k2P){return I2P>=k2P;}
,'T6':function(O6,h6){return O6/h6;}
,'h0P':function(f0P,w0P){return f0P*w0P;}
,'v5G':function(o5G,J5G){return o5G-J5G;}
,'W9g':function(Y9g,B9g){return Y9g==B9g;}
,'D6s':function(v6s,o6s){return v6s==o6s;}
,'N0g':function(y0g,u0g){return y0g/u0g;}
,'e6G':function(Z6G,m6G){return Z6G/m6G;}
,'p6c':function(q6c,b6c){return q6c<b6c;}
,'o1i':function(J1i,n1i){return J1i<n1i;}
,'h8s':function(f8s,w8s){return f8s*w8s;}
,'G0i':function(K0i,d0i){return K0i<d0i;}
,'w8H':function(I8H,k8H){return I8H>k8H;}
,'u9c':function(z9c,T9c){return z9c-T9c;}
,'r2E':null,'S5':function(x5,M5){return x5*M5;}
,'Y6H':function(B6H,F6H){return B6H/F6H;}
,'l2i':function(W2i,Y2i){return W2i===Y2i;}
,'N8G':function(y8G,u8G){return y8G==u8G;}
,'F7o':function(V7o,R7o){return V7o/R7o;}
,'W1s':function(Y1s,B1s){return Y1s-B1s;}
,'K6g':function(d6g,c6g){return d6g==c6g;}
,'y4G':function(u4G,z4G){return u4G/z4G;}
,'P2P':function(H2P,r2P){return H2P>r2P;}
,'L04':function(X04,U04){return X04>=U04;}
,'z5T':function(T5T,O5T){return T5T-O5T;}
,'C6g':function(j6g,Q6g){return j6g!==Q6g;}
,'l7H':function(W7H,Y7H){return W7H-Y7H;}
,'E0g':function(l0g,W0g){return l0g==W0g;}
,'a3P':function(p3P,q3P){return p3P/q3P;}
,'l0i':function(W0i,Y0i,B0i){return W0i*Y0i/B0i;}
,'O1o':function(h1o,f1o){return h1o<f1o;}
,'X5o':function(U5o,A5o){return U5o<A5o;}
,'J05':function(n05,a05){return n05>a05;}
,'Y8G':function(B8G,F8G){return B8G==F8G;}
,'E1G':function(l1G,W1G){return l1G<W1G;}
,'L7s':function(X7s,U7s){return X7s<U7s;}
,'s95':function(N95,y95){return N95<=y95;}
,'B5g':function(F5g,V5g){return F5g-V5g;}
,'T9T':function(O9T,h9T){return O9T!==h9T;}
,'J2':function(n2,a2){return n2>a2;}
,'g35':function(i35,t35){return i35<=t35;}
,'g7':function(i7,t7){return i7==t7;}
,'w04':function(I04,k04){return I04-k04;}
,'g1i':function(i1i,t1i){return i1i==t1i;}
,'V75':function(R75,g75){return R75===g75;}
,'k2i':function(e2i,Z2i){return e2i===Z2i;}
,'x3T':function(M3T,s5T){return M3T==s5T;}
,'k3c':function(e3c,Z3c){return e3c==Z3c;}
,'O4H':function(h4H,f4H){return h4H<f4H;}
,'H1c':function(r1c,G1c){return r1c/G1c;}
,'K5T':function(d5T,c5T){return d5T==c5T;}
,'k9H':function(e9H,Z9H){return e9H/Z9H;}
,'A5c':function(D5c,v5c){return D5c>v5c;}
,'P95':function(H95,r95){return H95>=r95;}
,'l0T':function(W0T,Y0T){return W0T==Y0T;}
,'Z2H':function(m2H,L2H){return m2H==L2H;}
,'w7i':function(I7i,k7i){return I7i==k7i;}
,'Q6G':function(S6G,x6G){return S6G<=x6G;}
,'W1i':function(Y1i,B1i){return Y1i>B1i;}
,'k7P':function(e7P,Z7P){return e7P<Z7P;}
,'l5i':function(W5i,Y5i){return W5i-Y5i;}
,'C6H':function(j6H,Q6H){return j6H>Q6H;}
,'C8g':function(j8g,Q8g){return j8g>Q8g;}
,'V6o':function(R6o,g6o){return R6o<g6o;}
,'D0g':function(v0g,o0g){return v0g===o0g;}
,'b9s':function(E9s,l9s){return E9s-l9s;}
,'N6T':function(y6T,u6T){return y6T<=u6T;}
,'P7s':function(H7s,r7s){return H7s-r7s;}
,'I8G':function(k8G,e8G){return k8G>e8G;}
,'z6T':function(T6T,O6T){return T6T-O6T;}
,'m3o':function(L3o,X3o){return L3o<X3o;}
,'S1':function(M1,s9){return M1<=s9;}
,'C0g':function(j0g,Q0g){return j0g-Q0g;}
,'N3s':function(y3s,u3s){return y3s==u3s;}
,'Y2c':function(B2c,F2c){return B2c<=F2c;}
,'Q4s':function(S4s,x4s){return S4s!==x4s;}
,'q34':function(b34,E34){return b34>E34;}
,'t4c':function(P4c,H4c){return P4c<=H4c;}
,'R25':function(g25,i25){return g25==i25;}
,'r4c':function(G4c,K4c){return G4c-K4c;}
,'e95':function(Z95,m95){return Z95<m95;}
,'x8s':function(M8s,s75){return M8s<s75;}
,'c7o':function(C7o,j7o){return C7o-j7o;}
,'J75':function(n75,a75){return n75==a75;}
,'O4s':function(h4s,f4s){return h4s<=f4s;}
,'y4P':function(u4P,z4P){return u4P==z4P;}
,'a65':function(p65,q65){return p65<q65;}
,'D2H':function(v2H,o2H){return v2H-o2H;}
,'B2i':function(F2i,V2i){return F2i===V2i;}
,'V1':function(R1,g1){return R1<g1;}
,'y9H':function(u9H,z9H){return u9H/z9H;}
,'N85':function(y85,u85){return y85-u85;}
,'s7':function(N7,y7){return N7==y7;}
,'n25':function(a25,p25){return a25-p25;}
,'e0c':function(Z0c,m0c){return Z0c<m0c;}
,'g3':function(i3,t3){return i3<=t3;}
,'p2T':function(q2T,b2T){return q2T/b2T;}
,'I05':function(k05,e05){return k05>e05;}
,'u8H':function(z8H,T8H){return z8H!==T8H;}
,'L6G':function(X6G,U6G){return X6G==U6G;}
,'h8i':function(f8i,w8i){return f8i-w8i;}
,'d9T':function(c9T,C9T){return c9T<C9T;}
,'j2':function(Q2,S2){return Q2<S2;}
,'d9o':function(c9o,C9o){return c9o==C9o;}
,'c9c':function(C9c,j9c){return C9c<j9c;}
,'M9g':function(s2g,N2g){return s2g<N2g;}
,'L4T':function(X4T,U4T){return X4T<U4T;}
,'y0H':function(u0H,z0H){return u0H==z0H;}
,'u8o':function(z8o,T8o){return z8o==T8o;}
,'l3c':function(W3c,Y3c){return W3c<=Y3c;}
,'v1c':function(o1c,J1c){return o1c<=J1c;}
,'i6o':function(t6o,P6o){return t6o-P6o;}
,'r55':function(G55,K55){return G55/K55;}
,'j2G':function(Q2G,S2G){return Q2G>S2G;}
,'p1g':function(q1g,b1g){return q1g in b1g;}
,'D8s':function(v8s,o8s){return v8s/o8s;}
,'p6s':function(q6s,b6s){return q6s/b6s;}
,'G7':function(K7,d7){return K7>d7;}
,'l4i':function(W4i,Y4i){return W4i-Y4i;}
,'P3G':function(H3G,r3G){return H3G==r3G;}
,'v9s':function(o9s,J9s){return o9s==J9s;}
,'X2':function(U2,A2){return U2>A2;}
,'A0c':function(D0c,v0c){return D0c*v0c;}
,'E5s':function(l5s,W5s){return l5s===W5s;}
,'Y5H':function(B5H,F5H){return B5H>=F5H;}
,'j4':function(Q4,S4){return Q4-S4;}
,'v0':function(o0,J0){return o0<J0;}
,'e4g':function(Z4g,m4g){return Z4g-m4g;}
,'W8T':function(Y8T,B8T){return Y8T===B8T;}
,'O7s':function(h7s,f7s){return h7s<f7s;}
,'M1o':function(s9o,N9o){return s9o<N9o;}
,'g8H':function(i8H,t8H){return i8H>t8H;}
,'W3G':function(Y3G,B3G){return Y3G<B3G;}
,'o4T':function(J4T,n4T){return J4T/n4T;}
,'V8s':function(R8s,g8s){return R8s!==g8s;}
,'m0H':function(L0H,X0H){return L0H==X0H;}
,'s1T':function(N1T,y1T){return N1T<y1T;}
,'y6':function(u6,z6){return u6/z6;}
,'a7c':function(p7c,q7c){return p7c<q7c;}
,'Z15':function(m15,L15){return m15/L15;}
,'I4':function(k4,e4){return k4==e4;}
,'Z3T':function(m3T,L3T){return m3T<L3T;}
,'t3s':function(P3s,H3s){return P3s<H3s;}
,'J7T':function(n7T,a7T){return n7T*a7T;}
,'e5c':function(Z5c,m5c){return Z5c!=m5c;}
,'P4g':function(H4g,r4g){return H4g<r4g;}
,'P9s':function(H9s,r9s){return H9s<r9s;}
,'w3g':function(I3g,k3g){return I3g-k3g;}
,'P9i':function(H9i,r9i){return H9i>r9i;}
,'G8H':function(K8H,d8H){return K8H<d8H;}
,'X05':function(U05,A05){return U05>A05;}
,'i9':function(t9,P9){return t9/P9;}
,'F6i':function(V6i,R6i){return V6i-R6i;}
,'w7o':function(I7o,k7o){return I7o===k7o;}
,'J2c':function(n2c,a2c){return n2c<a2c;}
,'H3c':function(r3c,G3c){return r3c/G3c;}
,'u7o':function(z7o,T7o){return z7o-T7o;}
,'f45':function(w45,I45){return w45<I45;}
,'U9P':function(A9P,D9P){return A9P>D9P;}
,'y2g':function(u2g,z2g){return u2g<z2g;}
,'G6P':function(K6P,d6P){return K6P-d6P;}
,'l2g':function(W2g,Y2g){return W2g==Y2g;}
,'x7H':function(M7H,s6H){return M7H*s6H;}
,'p1':function(q1,b1){return q1-b1;}
,'B9T':function(F9T,V9T){return F9T!==V9T;}
,'n64':function(a64,p64){return a64<p64;}
,'a3g':function(p3g,q3g){return p3g/q3g;}
,'z4':function(T4,O4){return T4<=O4;}
,'p44':function(q44,b44){return q44>=b44;}
,'k3o':function(e3o,Z3o){return e3o==Z3o;}
,'w0c':function(I0c,k0c){return I0c<k0c;}
,'m8P':function(L8P,X8P){return L8P<=X8P;}
,'D6T':function(v6T,o6T){return v6T*o6T;}
,'s3G':function(N3G,y3G){return N3G==y3G;}
,'G1i':function(K1i,d1i,c1i){return K1i*d1i/c1i;}
,'P9G':function(H9G,r9G){return H9G==r9G;}
,'p3T':function(q3T,b3T){return q3T<b3T;}
,'S8P':function(x8P,M8P){return x8P/M8P;}
,'u3':function(z3,T3){return z3<T3;}
,'y5i':function(u5i,z5i){return u5i==z5i;}
,'H2c':function(r2c,G2c){return r2c!=G2c;}
,'U9T':function(A9T,D9T){return A9T<D9T;}
,'i4o':function(t4o,P4o){return t4o/P4o;}
,'C8s':function(j8s,Q8s,S8s){return j8s-Q8s+S8s;}
,'s8c':function(N8c,y8c){return N8c-y8c;}
,'q4':function(b4,E4){return b4<=E4;}
,'F4s':function(V4s,R4s){return V4s/R4s;}
,'j2i':function(Q2i,S2i){return Q2i<S2i;}
,'e6P':function(Z6P,m6P){return Z6P<m6P;}
,'p0G':function(q0G,b0G){return q0G-b0G;}
,'z7G':function(T7G,O7G){return T7G==O7G;}
,'X4':function(U4,A4){return U4-A4;}
,'B4c':function(F4c,V4c){return F4c===V4c;}
,'U64':function(A64,D64){return A64==D64;}
,'A7':function(D7,v7){return D7==v7;}
,'M2':function(s8,N8){return s8==N8;}
,'H6g':function(r6g,G6g){return r6g==G6g;}
,'b9G':function(E9G,l9G){return E9G<l9G;}
,'f7H':function(w7H,I7H){return w7H===I7H;}
,'X0G':function(U0G,A0G){return U0G==A0G;}
,'u4T':function(z4T,T4T){return z4T===T4T;}
,'s9G':function(N9G,y9G){return N9G-y9G;}
,'v25':function(o25,J25){return o25-J25;}
,'F1H':function(V1H,R1H){return V1H*R1H;}
,'b6i':function(E6i,l6i){return E6i-l6i;}
,'g3G':function(i3G,t3G){return i3G<t3G;}
,'H5T':function(r5T,G5T){return r5T>G5T;}
,'q4P':function(b4P,E4P){return b4P>E4P;}
,'K6s':function(d6s,c6s){return d6s==c6s;}
,'d3T':function(c3T,C3T){return c3T-C3T;}
,'f2G':function(w2G,I2G){return w2G>=I2G;}
,'Y6g':function(B6g,F6g){return B6g-F6g;}
,'B25':function(F25,V25){return F25>V25;}
,'H5o':function(r5o,G5o){return r5o*G5o;}
,'F3g':function(V3g,R3g){return V3g==R3g;}
,'K8i':function(d8i,c8i){return d8i==c8i;}
,'d0H':function(c0H,C0H){return c0H==C0H;}
,'R9T':function(g9T,i9T){return g9T!==i9T;}
,'F9G':function(V9G,R9G){return V9G!=R9G;}
,'Y15':function(B15,F15){return B15/F15;}
,'g65':function(i65,t65){return i65==t65;}
,'r8P':function(G8P,K8P,d8P,c8P){return G8P-K8P+d8P-c8P;}
,'l4':function(W4,Y4){return W4==Y4;}
,'L4g':function(X4g,U4g){return X4g>U4g;}
,'k9s':function(e9s,Z9s){return e9s>=Z9s;}
,'t34':function(P34,H34){return P34>=H34;}
,'n0H':function(a0H,p0H){return a0H==p0H;}
,'Z8G':function(m8G,L8G){return m8G>=L8G;}
,'I3H':function(k3H,e3H){return k3H*e3H;}
,'x4G':function(M4G,s0G){return M4G*s0G;}
,'F4T':function(V4T,R4T){return V4T-R4T;}
,'R5':function(g5,i5,t5,P5){return g5*i5*t5*P5;}
,'B9o':function(F9o,V9o){return F9o===V9o;}
,'V8G':function(R8G,g8G){return R8G==g8G;}
,'M6c':function(s4c,N4c){return s4c<N4c;}
,'p5s':function(q5s,b5s){return q5s===b5s;}
,'Z85':function(m85,L85){return m85*L85;}
,'y0s':function(u0s,z0s){return u0s==z0s;}
,'g3i':function(i3i,t3i){return i3i<t3i;}
,'A6P':function(D6P,v6P){return D6P*v6P;}
,'t0H':function(P0H,H0H){return P0H==H0H;}
,'V2H':function(R2H,g2H){return R2H<g2H;}
,'n9s':function(a9s,q9s){return a9s!==q9s;}
,'t3o':function(P3o,H3o){return P3o-H3o;}
,'m4G':function(L4G,X4G){return L4G!=X4G;}
,'z8g':function(T8g,O8g){return T8g>O8g;}
,'Q9G':function(S9G,x9G){return S9G==x9G;}
,'Z0G':function(m0G,L0G){return m0G>L0G;}
,'z1G':function(T1G,O1G){return T1G==O1G;}
,'N0':function(u0,z0){return u0===z0;}
,'r4P':function(G4P,K4P){return G4P<K4P;}
,'q2i':function(b2i,E2i){return b2i<E2i;}
,'h54':function(f54,w54){return f54!=w54;}
,'e6o':function(Z6o,m6o){return Z6o==m6o;}
,'w3G':function(I3G,k3G){return I3G<k3G;}
,'q4i':function(b4i,E4i){return b4i>E4i;}
,'g7c':function(i7c,t7c){return i7c<=t7c;}
,'k5':function(e5,Z5){return e5==Z5;}
,'M0i':function(s3i,N3i){return s3i-N3i;}
,'i5T':function(t5T,P5T){return t5T-P5T;}
,'K1g':function(d1g,c1g){return d1g-c1g;}
,'S0G':function(x0G,M0G){return x0G==M0G;}
,'S6o':function(x6o,M6o){return x6o<M6o;}
,'N0G':function(y0G,u0G){return y0G in u0G;}
,'V1G':function(R1G,g1G){return R1G<g1G;}
,'u3g':function(z3g,T3g){return z3g>=T3g;}
,'I5s':function(k5s,e5s){return k5s===e5s;}
,'X6H':function(U6H,A6H){return U6H/A6H;}
,'B0':function(F0,V0){return F0>=V0;}
,'N67':16,'o9c':function(J9c,n9c){return J9c>n9c;}
,'q2G':function(b2G,E2G){return b2G>E2G;}
,'z0G':function(T0G,O0G){return T0G*O0G;}
,'h85':function(f85,w85){return f85-w85;}
,'A7o':function(D7o,v7o){return D7o>v7o;}
,'E2o':function(l2o,W2o){return l2o<W2o;}
,'F0o':function(V0o,R0o){return V0o>R0o;}
,'i2T':function(t2T,P2T){return t2T/P2T;}
,'Q1H':function(S1H,x1H){return S1H-x1H;}
,'y25':function(u25,z25){return u25<=z25;}
,'q0T':function(b0T,E0T){return b0T>=E0T;}
,'T6o':function(O6o,h6o,f6o){return O6o-h6o+f6o;}
,'R5g':function(g5g,i5g){return g5g>i5g;}
,'R55':function(g55,i55){return g55<i55;}
,'c8c':function(C8c,j8c){return C8c===j8c;}
,'L1':function(X1,U1){return X1===U1;}
,'b0o':function(E0o,l0o){return E0o/l0o;}
,'b35':function(E35,l35){return E35==l35;}
,'e2':function(Z2,L2){return Z2==L2;}
,'F04':function(V04,R04){return V04<R04;}
,'b8c':function(E8c,l8c){return E8c>l8c;}
,'G9s':function(K9s,d9s){return K9s==d9s;}
,'v64':function(o64,J64){return o64==J64;}
,'Q04':function(S04,x04){return S04<x04;}
,'b1o':function(E1o,l1o){return E1o==l1o;}
,'x64':function(M64,s44){return M64===s44;}
,'d2G':function(c2G,C2G){return c2G*C2G;}
,'l3s':function(W3s,Y3s){return W3s/Y3s;}
,'j3s':function(Q3s,S3s){return Q3s<S3s;}
,'M04':function(s34,N34){return s34>N34;}
,'f3i':function(w3i,I3i){return w3i*I3i;}
,'r5G':function(G5G,K5G){return G5G!==K5G;}
,'n3o':function(a3o,p3o){return a3o==p3o;}
,'l5P':function(W5P,Y5P){return W5P*Y5P;}
,'P3i':function(H3i,r3i){return H3i/r3i;}
,'A9c':function(D9c,v9c){return D9c-v9c;}
,'N0P':function(y0P,u0P){return y0P==u0P;}
,'R34':function(g34,i34){return g34>i34;}
,'G95':function(K95,d95){return K95<=d95;}
,'c1P':function(C1P,j1P){return C1P<j1P;}
,'l7g':function(W7g,Y7g){return W7g==Y7g;}
,'L1i':function(X1i,U1i){return X1i>=U1i;}
,'h2c':function(f2c,w2c){return f2c/w2c;}
,'H2H':function(r2H,G2H){return r2H!=G2H;}
,'U5G':function(A5G,D5G){return A5G-D5G;}
,'n85':function(a85,p85){return a85*p85;}
,'m4P':function(L4P,X4P){return L4P>X4P;}
,'c8o':function(C8o,j8o){return C8o>j8o;}
,'H8G':function(r8G,G8G){return r8G==G8G;}
,'I0g':function(k0g,e0g){return k0g!==e0g;}
,'z5o':function(T5o,O5o){return T5o-O5o;}
,'B64':function(F64,V64){return F64===V64;}
,'o4g':function(J4g,n4g){return J4g>n4g;}
,'T9P':function(O9P,h9P){return O9P-h9P;}
,'s4H':function(N4H,y4H){return N4H==y4H;}
,'f5':function(w5,I5){return w5<I5;}
,'q5P':function(b5P,E5P){return b5P*E5P;}
,'M9s':function(s2s,N2s){return s2s==N2s;}
,'s9i':function(N9i,y9i){return N9i>y9i;}
,'t0P':function(P0P,H0P){return P0P-H0P;}
,'i5s':function(t5s,P5s){return t5s===P5s;}
,'z3H':function(T3H,O3H){return T3H-O3H;}
,'G3g':function(K3g,d3g){return K3g==d3g;}
,'R8':function(g8,i8){return g8<i8;}
,'H0G':function(r0G,G0G){return r0G==G0G;}
,'O04':function(h04,f04){return h04<f04;}
,'a4s':function(p4s,q4s){return p4s<q4s;}
,'Y1G':function(B1G,F1G){return B1G-F1G;}
,'r3o':function(G3o,K3o){return G3o==K3o;}
,'m2i':function(L2i,X2i){return L2i-X2i;}
,'V2o':function(R2o,g2o){return R2o*g2o;}
,'n3c':function(a3c,p3c){return a3c-p3c;}
,'p2':function(q2,b2){return q2==b2;}
,'b4g':function(E4g,l4g){return E4g-l4g;}
,'h0G':function(f0G,w0G){return f0G in w0G;}
,'F8T':function(V8T,R8T){return V8T<R8T;}
,'F35':function(V35,R35){return V35>=R35;}
,'U1c':function(A1c,D1c){return A1c<D1c;}
,'k9T':function(e9T,Z9T){return e9T<Z9T;}
,'L7':function(X7,U7){return X7==U7;}
,'e7o':function(Z7o,m7o){return Z7o/m7o;}
,'a3G':function(p3G,q3G){return p3G<q3G;}
,'D7T':function(v7T,o7T){return v7T*o7T;}
,'d0T':function(c0T,C0T){return c0T/C0T;}
,'B45':function(F45,V45){return F45-V45;}
,'a0o':function(p0o,q0o){return p0o*q0o;}
,'r3s':function(G3s,K3s){return G3s===K3s;}
,'h6g':function(f6g,w6g){return f6g<w6g;}
,'S9':function(x9,M9){return x9!=M9;}
,'r7H':function(G7H,K7H){return G7H<=K7H;}
,'c04':function(C04,j04){return C04>j04;}
,'t7T':function(P7T,H7T){return P7T===H7T;}
,'I6g':function(k6g,e6g){return k6g<e6g;}
,'O4g':function(h4g,f4g){return h4g!==f4g;}
,'X0g':function(U0g,A0g){return U0g!==A0g;}
,'n0T':function(a0T,p0T){return a0T<p0T;}
,'S6g':function(x6g,M6g){return x6g==M6g;}
,'j25':function(Q25,S25){return Q25-S25;}
,'E3T':function(l3T,W3T){return l3T*W3T;}
,'E2c':function(l2c,W2c){return l2c*W2c;}
,'N6g':function(y6g,u6g){return y6g in u6g;}
,'P7c':function(H7c,r7c){return H7c==r7c;}
,'V6T':function(R6T,g6T){return R6T>g6T;}
,'F8o':function(V8o,R8o){return V8o!==R8o;}
,'s1s':function(N1s,y1s){return N1s===y1s;}
,'L8o':function(X8o,U8o){return X8o*U8o;}
,'I54':function(k54,e54){return k54<e54;}
,'g1T':function(i1T,t1T){return i1T>t1T;}
,'P04':function(H04,r04){return H04>r04;}
,'D3H':function(v3H,o3H){return v3H!==o3H;}
,'Q4T':function(S4T,x4T){return S4T<x4T;}
,'v7g':function(o7g,J7g){return o7g<=J7g;}
,'L0c':function(X0c,U0c){return X0c>U0c;}
,'B2g':function(F2g,V2g){return F2g==V2g;}
,'s1H':function(N1H,y1H){return N1H>y1H;}
,'W7s':function(Y7s,B7s){return Y7s===B7s;}
,'T4i':function(O4i,h4i){return O4i<h4i;}
,'E0G':function(l0G,W0G){return l0G in W0G;}
,'K8g':function(d8g,c8g){return d8g==c8g;}
,'m5G':function(L5G,X5G){return L5G-X5G;}
,'N44':function(y44,u44){return y44>=u44;}
,'Z9':function(m9,L9){return m9<L9;}
,'m7H':function(L7H,X7H){return L7H>X7H;}
,'x0H':function(M0H,s3H){return M0H<s3H;}
,'T94':0,'v6':function(o6,J6){return o6==J6;}
,'J8G':function(n8G,a8G){return n8G==a8G;}
,'l45':function(W45,Y45){return W45/Y45;}
,'Q2P':function(S2P,x2P){return S2P-x2P;}
,'K0g':function(d0g,c0g){return d0g*c0g;}
,'m0':function(L0,X0){return L0<X0;}
,'m9o':function(L9o,X9o){return L9o*X9o;}
,'Q3g':function(S3g,x3g){return S3g==x3g;}
,'s3':function(N3,y3){return N3==y3;}
,'R4i':function(g4i,i4i){return g4i<i4i;}
,'b04':function(E04,l04){return E04<=l04;}
,'G7i':function(K7i,d7i,c7i){return K7i-d7i+c7i;}
,'x5P':function(M5P,s1P){return M5P<=s1P;}
,'X85':function(U85,A85,D85){return U85*A85/D85;}
,'W1T':function(Y1T,B1T){return Y1T*B1T;}
,'k34':function(e34,Z34){return e34==Z34;}
,'g04':function(i04,t04){return i04>t04;}
,'s8T':function(N8T,y8T){return N8T/y8T;}
,'E3H':function(l3H,W3H){return l3H-W3H;}
,'O3G':function(h3G,f3G){return h3G==f3G;}
,'h5T':function(f5T,w5T){return f5T/w5T;}
,'v55':function(o55,J55){return o55>J55;}
,'Y1':function(B1,F1){return B1<F1;}
,'f0s':function(w0s,I0s){return w0s!=I0s;}
,'z5s':function(T5s,O5s){return T5s!==O5s;}
,'T5P':function(O5P,h5P){return O5P<=h5P;}
,'Q0o':function(S0o,x0o){return S0o/x0o;}
,'Y6T':function(B6T,F6T){return B6T<F6T;}
,'E5o':function(l5o,W5o){return l5o>W5o;}
,'o1P':function(J1P,n1P){return J1P<=n1P;}
,'I1':function(e1,Z1){return e1>Z1;}
,'C05':function(j05,Q05){return j05==Q05;}
,'o8c':function(J8c,n8c){return J8c<=n8c;}
,'k8P':function(e8P,Z8P){return e8P>=Z8P;}
,'s7c':function(N7c,y7c){return N7c/y7c;}
,'G04':function(K04,d04){return K04<d04;}
,'v85':function(o85,J85){return o85*J85;}
,'t8':function(P8,H8){return P8==H8;}
,'T25':function(O25,h25){return O25<h25;}
,'w6o':function(I6o,k6o){return I6o*k6o;}
,'B9H':function(F9H,V9H){return F9H===V9H;}
,'L5c':function(X5c,U5c){return X5c<U5c;}
,'a74':function(p74,q74){return p74==q74;}
,'Q4o':function(S4o,x4o){return S4o-x4o;}
,'A35':function(D35,v35){return D35==v35;}
,'e4H':function(Z4H,m4H){return Z4H<m4H;}
,'L3G':function(X3G,U3G){return X3G!=U3G;}
,'B4i':function(F4i,V4i){return F4i>V4i;}
,'N2T':function(y2T,u2T){return y2T===u2T;}
,'o6i':function(J6i,n6i){return J6i<n6i;}
,'t7H':function(P7H,H7H){return P7H-H7H;}
,'a8o':function(p8o,q8o){return p8o<q8o;}
,'X5T':function(U5T,A5T){return U5T===A5T;}
,'R7H':function(g7H,i7H){return g7H>i7H;}
,'q5':function(b5,E5){return b5<E5;}
,'T0T':function(O0T,h0T){return O0T===h0T;}
,'N3H':function(y3H,u3H){return y3H<u3H;}
,'r5P':function(G5P,K5P){return G5P-K5P;}
,'q85':function(b85,E85){return b85>E85;}
,'d4P':function(c4P,C4P){return c4P*C4P;}
,'X8g':function(U8g,A8g){return U8g==A8g;}
,'P1T':function(H1T,r1T){return H1T<r1T;}
,'f9o':function(w9o,I9o){return w9o==I9o;}
,'r7g':function(G7g,K7g){return G7g<K7g;}
,'w5c':function(I5c,k5c){return I5c&k5c;}
,'x25':function(M25,s85){return M25-s85;}
,'v34':function(o34,J34){return o34==J34;}
,'M35':function(s55,N55){return s55*N55;}
,'s04':function(N04,y04){return N04<y04;}
,'V6s':function(R6s,g6s){return R6s/g6s;}
,'C0G':function(j0G,Q0G){return j0G==Q0G;}
,'n5g':function(a5g,p5g){return a5g-p5g;}
,'e7i':function(Z7i,m7i){return Z7i==m7i;}
,'w65':function(I65,k65){return I65-k65;}
,'M0c':function(s3c,N3c,y3c,u3c){return s3c-N3c+y3c+u3c;}
,'U55':function(A55,D55){return A55>D55;}
,'q6':function(b6,E6){return b6==E6;}
,'b1P':function(E1P,l1P){return E1P/l1P;}
,'z2T':function(T2T,O2T){return T2T>O2T;}
,'h2T':function(f2T,w2T){return f2T<w2T;}
,'Q7c':function(S7c,x7c){return S7c/x7c;}
,'k9o':function(e9o,Z9o){return e9o==Z9o;}
,'K44':function(d44,c44){return d44<=c44;}
,'j7P':function(Q7P,S7P){return Q7P===S7P;}
,'e8c':function(Z8c,m8c){return Z8c==m8c;}
,'z7T':function(T7T,O7T){return T7T==O7T;}
,'C2c':function(j2c,Q2c){return j2c>Q2c;}
,'B34':function(F34,V34){return F34<=V34;}
,'z44':function(T44,O44){return T44/O44;}
,'Y0g':function(B0g,F0g){return B0g/F0g;}
,'y1c':function(u1c,z1c){return u1c-z1c;}
,'J1G':function(n1G,a1G){return n1G<=a1G;}
,'z8G':function(T8G,O8G){return T8G==O8G;}
,'r0s':function(G0s,K0s){return G0s==K0s;}
,'f2s':function(w2s,I2s){return w2s==I2s;}
,'x0s':function(M0s,s3s){return M0s-s3s;}
,'W9c':function(Y9c,B9c){return Y9c-B9c;}
,'i2':function(P2,H2){return P2/H2;}
,'T5':function(O5,h5){return O5<h5;}
,'U2G':function(A2G,D2G){return A2G==D2G;}
,'N5H':function(y5H,u5H){return y5H!=u5H;}
,'C1':function(j1,Q1){return j1<Q1;}
,'j4G':function(Q4G,S4G){return Q4G!==S4G;}
,'v9P':function(o9P,J9P){return o9P>=J9P;}
,'y2s':function(u2s,z2s){return u2s==z2s;}
,'x7g':function(M7g,s6g){return M7g==s6g;}
,'k64':function(e64,Z64){return e64<Z64;}
,'E05':function(l05,W05){return l05==W05;}
,'o9G':function(J9G,n9G){return J9G!=n9G;}
,'r85':function(G85,K85){return G85*K85;}
,'a6P':function(p6P,q6P){return p6P-q6P;}
,'s4g':function(N4g,y4g){return N4g!==y4g;}
,'t2g':function(P2g,H2g){return P2g==H2g;}
,'X5H':function(U5H,A5H){return U5H<=A5H;}
,'U4P':function(A4P,D4P){return A4P-D4P;}
,'i7G':function(t7G,P7G){return t7G==P7G;}
,'O1s':function(h1s,f1s){return h1s<f1s;}
,'J6g':function(n6g,a6g){return n6g<a6g;}
,'n4c':function(a4c,p4c){return a4c>p4c;}
,'M7c':function(s6c,N6c){return s6c-N6c;}
,'c3g':function(C3g,j3g){return C3g*j3g;}
,'V15':function(R15,g15){return R15-g15;}
,'y8P':function(u8P,z8P){return u8P<z8P;}
,'c0':function(C0,j0){return C0<=j0;}
,'I75':function(k75,e75){return k75==e75;}
,'X2H':function(U2H,A2H){return U2H-A2H;}
,'Q3G':function(S3G,x3G){return S3G>x3G;}
,'O9i':function(h9i,f9i){return h9i<f9i;}
,'w95':function(I95,k95){return I95/k95;}
,'n9P':function(a9P,p9P){return a9P<=p9P;}
,'b65':function(E65,l65){return E65-l65;}
,'G1T':function(K1T,d1T){return K1T-d1T;}
,'j3T':function(Q3T,S3T){return Q3T==S3T;}
,'H05':function(r05,G05){return r05<G05;}
,'C1g':function(j1g,Q1g){return j1g==Q1g;}
,'q1c':function(b1c,E1c){return b1c/E1c;}
,'M4o':function(s0o,N0o){return s0o<N0o;}
,'V0G':function(R0G,g0G){return R0G in g0G;}
,'z6s':function(T6s,O6s){return T6s>O6s;}
,'d5g':function(c5g,C5g){return c5g<C5g;}
,'d0P':function(c0P,C0P){return c0P/C0P;}
,'s1o':function(N1o,y1o){return N1o!==y1o;}
,'I1g':function(k1g,e1g){return k1g<e1g;}
,'k5g':function(e5g,Z5g){return e5g<=Z5g;}
,'t2G':function(P2G,H2G){return P2G==H2G;}
,'v3c':function(o3c,J3c){return o3c-J3c;}
,'r9T':function(G9T,K9T){return G9T-K9T;}
,'r8':function(G8,K8){return G8==K8;}
,'U25':function(A25,D25){return A25!==D25;}
,'Q1s':function(S1s,x1s){return S1s<x1s;}
,'s3g':function(N3g,y3g){return N3g-y3g;}
,'Z3H':function(m3H,L3H){return m3H-L3H;}
,'S15':function(x15,M15){return x15-M15;}
,'R3c':function(g3c,i3c,t3c,P3c){return g3c-i3c+t3c-P3c;}
,'S6s':function(x6s,M6s){return x6s/M6s;}
,'y5':function(u5,z5){return u5<z5;}
,'F7i':function(V7i,R7i){return V7i==R7i;}
,'l2G':function(W2G,Y2G){return W2G-Y2G;}
,'h6T':function(f6T,w6T){return f6T/w6T;}
,'d7P':function(c7P,C7P){return c7P===C7P;}
,'a1i':function(p1i,q1i){return p1i===q1i;}
,'z2':function(T2,O2){return T2*O2;}
,'B5i':function(F5i,V5i,R5i){return F5i-V5i-R5i;}
,'T2g':function(O2g,h2g){return O2g>=h2g;}
,'I5T':function(k5T,e5T){return k5T===e5T;}
,'Q9g':function(S9g,x9g){return S9g>x9g;}
,'N3T':function(y3T,u3T){return y3T===u3T;}
,'a8c':function(p8c,q8c){return p8c<q8c;}
,'h1g':function(f1g,w1g){return f1g<w1g;}
,'K5s':function(d5s,c5s){return d5s==c5s;}
,'q5g':function(b5g,E5g){return b5g>=E5g;}
,'G9G':function(K9G,d9G){return K9G==d9G;}
,'Q1T':function(S1T,x1T){return S1T>=x1T;}
,'o3P':function(J3P,n3P){return J3P<=n3P;}
,'f4c':function(w4c,I4c){return w4c*I4c;}
,'O5c':function(h5c,f5c){return h5c>=f5c;}
,'w4H':function(I4H,k4H){return I4H===k4H;}
,'E8i':function(l8i,W8i){return l8i===W8i;}
,'C2o':function(j2o,Q2o){return j2o==Q2o;}
,'h8g':function(f8g,w8g){return f8g<w8g;}
,'W7':function(Y7,B7){return Y7==B7;}
,'A9G':function(D9G,v9G){return D9G==v9G;}
,'V7G':function(R7G,g7G){return R7G<g7G;}
,'Z2o':function(m2o,L2o){return m2o<L2o;}
,'G5c':function(K5c,d5c){return K5c-d5c;}
,'z1P':function(T1P,O1P){return T1P-O1P;}
,'X2c':function(U2c,A2c){return U2c/A2c;}
,'k6':function(e6,Z6){return e6>=Z6;}
,'B0P':function(F0P,V0P){return F0P<V0P;}
,'g3g':function(i3g,t3g){return i3g==t3g;}
,'x9T':function(M9T,s2T){return M9T<s2T;}
,'w3':function(I3,k3){return I3/k3;}
,'R2G':function(g2G,i2G){return g2G<i2G;}
,'W6i':function(Y6i,B6i){return Y6i-B6i;}
,'N75':function(y75,u75){return y75==u75;}
,'Z8s':function(m8s,L8s){return m8s==L8s;}
,'e9g':function(Z9g,m9g){return Z9g===m9g;}
,'A8H':function(D8H,v8H){return D8H>v8H;}
,'q0':function(b0,E0){return b0<E0;}
,'q64':function(b64,E64){return b64/E64;}
,'v7H':function(o7H,J7H){return o7H<=J7H;}
,'a6i':function(p6i,q6i){return p6i-q6i;}
,'X8G':function(U8G,A8G){return U8G==A8G;}
,'t8P':function(P8P,H8P){return P8P-H8P;}
,'P9g':function(H9g,r9g){return H9g!=r9g;}
,'a0c':function(p0c,q0c){return p0c/q0c;}
,'b6P':function(E6P,l6P){return E6P-l6P;}
,'B7P':function(F7P,V7P){return F7P<V7P;}
,'L9g':function(X9g,U9g){return X9g===U9g;}
,'W8c':function(Y8c,B8c){return Y8c!==B8c;}
,'B8P':function(F8P,V8P){return F8P<=V8P;}
,'X1g':function(U1g,A1g){return U1g in A1g;}
,'a1P':function(p1P,q1P){return p1P/q1P;}
,'X3P':function(U3P,A3P,D3P,v3P){return U3P-A3P+D3P-v3P;}
,'Z4':function(m4,L4){return m4>L4;}
,'W0o':function(Y0o,B0o){return Y0o-B0o;}
,'j7T':function(Q7T,S7T){return Q7T/S7T;}
,'j7g':function(Q7g,S7g){return Q7g>S7g;}
,'b95':function(E95,l95){return E95<l95;}
,'J4':function(n4,a4,p4){return n4-a4+p4;}
,'J0P':function(n0P,a0P){return n0P*a0P;}
,'e4s':function(Z4s,m4s){return Z4s*m4s;}
,'k2s':function(e2s,Z2s){return e2s==Z2s;}
,'K1c':function(d1c,c1c){return d1c/c1c;}
,'E5H':function(l5H,W5H){return l5H<=W5H;}
,'I9':function(k9,e9){return k9-e9;}
,'a4o':function(p4o,q4o){return p4o>=q4o;}
,'D5s':function(v5s,o5s){return v5s==o5s;}
,'C7s':function(j7s,Q7s){return j7s<Q7s;}
,'A1H':function(D1H,v1H){return D1H/v1H;}
,'j85':function(Q85,S85){return Q85>S85;}
,'A2P':function(D2P,v2P){return D2P&v2P;}
,'A0o':function(D0o,v0o){return D0o<=v0o;}
,'A4H':function(D4H,v4H){return D4H>v4H;}
,'v0T':function(o0T,J0T){return o0T/J0T;}
,'t9T':function(P9T,H9T){return P9T>=H9T;}
,'n45':function(a45,p45){return a45===p45;}
,'V8E':"f",'g9G':function(i9G,t9G){return i9G==t9G;}
,'f9s':function(w9s,I9s){return w9s-I9s;}
,'D2':function(v2,o2){return v2==o2;}
,'R4G':function(g4G,i4G){return g4G!=i4G;}
,'D6c':function(v6c,o6c){return v6c in o6c;}
,'L7i':function(X7i,U7i){return X7i>U7i;}
,'t0T':function(P0T,H0T){return P0T/H0T;}
,'f1c':function(w1c,I1c){return w1c<I1c;}
,'U9E':"q",'p8s':function(q8s,b8s){return q8s-b8s;}
,'N1P':function(y1P,u1P){return y1P-u1P;}
,'y3o':function(u3o,z3o){return u3o==z3o;}
,'a3i':function(p3i,q3i){return p3i===q3i;}
,'J5T':function(n5T,a5T){return n5T==a5T;}
,'w9c':function(I9c,k9c){return I9c*k9c;}
,'A4s':function(D4s,v4s){return D4s<v4s;}
,'k9P':function(e9P,Z9P){return e9P<Z9P;}
,'K15':function(d15,c15){return d15<c15;}
,'I8g':function(k8g,e8g){return k8g==e8g;}
,'l5':function(W5,Y5){return W5==Y5;}
,'a8H':function(p8H,q8H){return p8H===q8H;}
,'q0s':function(b0s,E0s){return b0s===E0s;}
,'k3i':function(e3i,Z3i){return e3i===Z3i;}
,'S2o':function(x2o,M2o){return x2o===M2o;}
,'p75':function(q75,b75){return q75<b75;}
,'Q3':function(S3,x3){return S3*x3;}
,'i1g':function(t1g,P1g){return t1g!==P1g;}
,'N7G':function(y7G,u7G){return y7G<=u7G;}
,'R2i':function(g2i,i2i){return g2i===i2i;}
,'K5o':function(d5o,c5o){return d5o*c5o;}
,'d2g':function(c2g,C2g){return c2g<C2g;}
,'P0o':function(H0o,r0o){return H0o*r0o;}
,'h2o':function(f2o,w2o){return f2o===w2o;}
,'G4H':function(K4H,d4H){return K4H<d4H;}
,'e9c':function(Z9c,m9c){return Z9c<m9c;}
,'r0H':function(G0H,K0H){return G0H==K0H;}
,'w9G':function(I9G,k9G){return I9G-k9G;}
,'U0i':function(A0i,D0i){return A0i==D0i;}
,'a95':function(p95,q95){return p95==q95;}
,'y8':function(u8,z8){return u8/z8;}
,'e1o':function(Z1o,m1o){return Z1o<m1o;}
,'g74':function(i74,t74){return i74===t74;}
,'L9i':function(X9i,U9i){return X9i/U9i;}
,'u1E':"u",'y9s':function(u9s,z9s){return u9s in z9s;}
,'V8i':function(R8i,g8i){return R8i===g8i;}
,'m45':function(L45,X45){return L45-X45;}
,'x2s':function(M2s,s8s){return M2s==s8s;}
,'W6G':function(Y6G,B6G){return Y6G<B6G;}
,'u3G':function(z3G,T3G){return z3G==T3G;}
,'E6g':function(l6g,W6g){return l6g==W6g;}
,'H9':function(r9,G9){return r9==G9;}
,'h5s':function(f5s,w5s){return f5s<w5s;}
,'R6':function(g6,i6){return g6*i6;}
,'o9g':function(J9g,n9g){return J9g===n9g;}
,'f5G':function(w5G,I5G){return w5G-I5G;}
,'C9P':function(j9P,Q9P){return j9P<=Q9P;}
,'L8c':function(X8c,U8c){return X8c==U8c;}
,'u6G':function(z6G,T6G){return z6G==T6G;}
,'f9H':function(w9H,I9H){return w9H!=I9H;}
,'e1s':function(Z1s,m1s){return Z1s-m1s;}
,'X6c':function(U6c,A6c){return U6c<=A6c;}
,'s4T':function(N4T,y4T){return N4T>=y4T;}
,'X37':"x",'H44':function(r44,G44){return r44==G44;}
,'Z0P':function(m0P,L0P){return m0P<L0P;}
,'S5T':function(x5T,M5T){return x5T>=M5T;}
,'M6P':function(s4P,N4P){return s4P==N4P;}
,'F1P':function(V1P,R1P){return V1P==R1P;}
,'P1o':function(H1o,r1o){return H1o*r1o;}
,'D54':function(v54,o54){return v54<o54;}
,'N9':function(y9,u9){return y9>u9;}
,'d7H':function(c7H,C7H){return c7H>C7H;}
,'i1c':function(t1c,P1c){return t1c<=P1c;}
,'D5H':function(v5H,o5H){return v5H>=o5H;}
,'g4s':function(i4s,t4s){return i4s/t4s;}
,'M3g':function(s5g,N5g){return s5g!=N5g;}
,'r2s':function(G2s,K2s){return G2s-K2s;}
,'u8T':function(z8T,T8T){return z8T/T8T;}
,'g6G':function(i6G,t6G){return i6G-t6G;}
,'b8H':function(E8H,l8H){return E8H>l8H;}
,'o0c':function(J0c,n0c){return J0c*n0c;}
,'z3T':function(T3T,O3T){return T3T===O3T;}
,'p5T':function(q5T,b5T){return q5T==b5T;}
,'i0G':function(t0G,P0G){return t0G<P0G;}
,'n8':function(a8,p8){return a8-p8;}
,'c4H':function(C4H,j4H){return C4H<=j4H;}
,'p05':function(q05,b05){return q05==b05;}
,'a8T':function(p8T,q8T){return p8T!=q8T;}
,'i2c':function(t2c,P2c){return t2c/P2c;}
,'W1o':function(Y1o,B1o){return Y1o==B1o;}
,'o2P':function(J2P,n2P){return J2P<=n2P;}
,'A1i':function(D1i,v1i){return D1i-v1i;}
,'b8T':function(E8T,l8T){return E8T<l8T;}
,'b3':function(E3,l3){return E3<l3;}
,'d5G':function(c5G,C5G){return c5G>C5G;}
,'O4o':function(h4o,f4o){return h4o/f4o;}
,'W7o':function(Y7o,B7o){return Y7o/B7o;}
,'R0':function(g0,i0){return g0<i0;}
,'q9H':function(b9H,E9H){return b9H<=E9H;}
,'y45':function(u45,z45){return u45<z45;}
,'U4i':function(A4i,D4i){return A4i-D4i;}
,'q3s':function(b3s,E3s){return b3s<E3s;}
,'k5G':function(e5G,Z5G){return e5G-Z5G;}
,'z15':function(T15,O15){return T15-O15;}
,'h9':function(f9,w9){return f9>w9;}
,'V3T':function(R3T,g3T,i3T){return R3T-g3T-i3T;}
,'I8s':function(k8s,e8s){return k8s-e8s;}
,'D44':function(v44,o44){return v44>=o44;}
,'F1o':function(V1o,R1o){return V1o==R1o;}
,'c3G':function(C3G,j3G){return C3G<=j3G;}
,'N6H':function(y6H,u6H){return y6H*u6H;}
,'C7G':function(j7G,Q7G){return j7G==Q7G;}
,'u65':function(z65,T65){return z65-T65;}
,'o9i':function(J9i,n9i){return J9i*n9i;}
,'H2o':function(r2o,G2o){return r2o*G2o;}
,'o4o':function(J4o,n4o){return J4o<n4o;}
,'a2P':function(p2P,q2P){return p2P&q2P;}
,'w6P':function(I6P,k6P){return I6P-k6P;}
,'m2g':function(L2g,X2g){return L2g>=X2g;}
,'n0i':function(a0i,p0i){return a0i<p0i;}
,'J15':function(n15,a15){return n15-a15;}
,'W4o':function(Y4o,B4o,F4o){return Y4o-B4o+F4o;}
,'q4G':function(b4G,E4G){return b4G==E4G;}
,'U2s':function(A2s,D2s){return A2s-D2s;}
,'N8g':function(y8g,u8g){return y8g==u8g;}
,'b3G':function(E3G,l3G){return E3G-l3G;}
,'I1P':function(k1P,e1P){return k1P-e1P;}
,'O7':function(h7,f7){return h7==f7;}
,'P3g':function(H3g,r3g){return H3g==r3g;}
,'s2P':function(N2P,y2P){return N2P/y2P;}
,'O95':function(h95,f95){return h95-f95;}
,'D8g':function(v8g,o8g){return v8g|o8g;}
,'P7i':function(H7i,r7i){return H7i!==r7i;}
,'q8':function(b8,E8){return b8==E8;}
,'a7o':function(p7o,q7o){return p7o>q7o;}
,'q2g':function(b2g,E2g){return b2g==E2g;}
,'d4G':function(c4G,C4G){return c4G in C4G;}
,'w9i':function(I9i,k9i){return I9i>k9i;}
,'p6o':function(q6o,b6o){return q6o/b6o;}
,'u9i':function(z9i,T9i){return z9i<T9i;}
,'w1T':function(I1T,k1T){return I1T-k1T;}
,'G4T':function(K4T,d4T){return K4T==d4T;}
,'X1G':function(U1G,A1G){return U1G>A1G;}
,'H4o':function(r4o,G4o,K4o,d4o){return r4o-G4o+K4o-d4o;}
,'p7G':function(q7G,b7G){return q7G==b7G;}
,'h44':function(f44,w44){return f44>=w44;}
,'x45':function(M45,s05){return M45!==s05;}
,'A3G':function(D3G,v3G){return D3G==v3G;}
,'b74':function(E74,l74){return E74<l74;}
,'n2s':function(a2s,p2s){return a2s/p2s;}
,'F0c':function(V0c,R0c){return V0c>=R0c;}
,'X5s':function(U5s,A5s){return U5s===A5s;}
,'N54':function(y54,u54){return y54!==u54;}
,'l0s':function(W0s,Y0s){return W0s===Y0s;}
,'c74':function(C74,j74){return C74===j74;}
,'s6s':function(N6s,y6s,u6s){return N6s-y6s+u6s;}
,'s6G':function(N6G,y6G){return N6G/y6G;}
,'P6G':function(H6G,r6G){return H6G-r6G;}
,'g0c':function(i0c,t0c){return i0c==t0c;}
,'f9P':function(w9P,I9P){return w9P<I9P;}
,'o1s':function(J1s,n1s){return J1s===n1s;}
,'j9o':function(Q9o,S9o){return Q9o-S9o;}
,'l1c':function(W1c,Y1c){return W1c/Y1c;}
,'o65':function(J65,n65){return J65>n65;}
,'d25':function(c25,C25){return c25-C25;}
,'g1o':function(i1o,t1o){return i1o*t1o;}
,'P7o':function(H7o,r7o){return H7o!=r7o;}
,'M8T':function(s7P,N7P){return s7P-N7P;}
,'w7s':function(I7s,k7s){return I7s<k7s;}
,'X44':function(U44,A44){return U44/A44;}
,'y34':function(u34,z34){return u34<z34;}
,'B85':function(F85,V85){return F85>V85;}
,'c4s':function(C4s,j4s){return C4s==j4s;}
,'g3P':function(i3P,t3P){return i3P/t3P;}
,'M4s':function(s0s,N0s){return s0s!=N0s;}
,'b9g':function(E9g,l9g){return E9g==l9g;}
,'H6s':function(r6s,G6s){return r6s/G6s;}
,'B7H':function(F7H,V7H){return F7H<V7H;}
,'B0T':function(F0T,V0T){return F0T===V0T;}
,'B3s':function(F3s,V3s){return F3s-V3s;}
,'v7P':function(o7P,J7P){return o7P===J7P;}
,'b3P':function(E3P,l3P){return E3P/l3P;}
,'S2T':function(x2T,M2T){return x2T==M2T;}
,'Y9':function(B9,F9){return B9==F9;}
,'G9g':function(K9g,d9g){return K9g<d9g;}
,'C3c':function(j3c,Q3c){return j3c<=Q3c;}
,'a35':function(p35,q35){return p35===q35;}
,'g1H':function(i1H,t1H){return i1H*t1H;}
,'D8i':function(v8i,o8i){return v8i>o8i;}
,'T4P':function(O4P,h4P){return O4P>h4P;}
,'u35':function(z35,T35){return z35-T35;}
,'A4o':function(D4o,v4o){return D4o-v4o;}
,'d7g':function(c7g,C7g){return c7g>C7g;}
,'y5g':function(u5g,z5g){return u5g!=z5g;}
,'q7P':function(b7P,E7P){return b7P<E7P;}
,'G1P':function(K1P,d1P){return K1P==d1P;}
,'h15':function(f15,w15){return f15-w15;}
,'T4c':function(O4c,h4c){return O4c*h4c;}
,'x3s':function(M3s,s5s){return M3s===s5s;}
,'V1g':function(R1g,g1g){return R1g in g1g;}
,'f2g':function(w2g,I2g){return w2g<I2g;}
,'l3o':function(W3o,Y3o){return W3o-Y3o;}
,'q45':function(b45,E45){return b45*E45;}
,'G2':function(K2,C2){return K2*C2;}
,'k1c':function(e1c,Z1c){return e1c-Z1c;}
,'u1H':function(z1H,T1H){return z1H!=T1H;}
,'G3i':function(K3i,d3i){return K3i-d3i;}
,'S5o':function(x5o,M5o){return x5o!==M5o;}
,'p2o':function(q2o,b2o){return q2o>b2o;}
,'c65':function(C65,j65){return C65-j65;}
,'i8i':function(t8i,P8i){return t8i===P8i;}
,'n4P':function(a4P,p4P){return a4P-p4P;}
,'k0i':function(e0i,Z0i){return e0i>=Z0i;}
,'a1o':function(p1o,q1o){return p1o==q1o;}
,'e65':function(Z65,m65){return Z65-m65;}
,'T8':function(O8,h8){return O8==h8;}
,'R8P':function(g8P,i8P){return g8P>=i8P;}
,'W3i':function(Y3i,B3i){return Y3i>B3i;}
,'f0o':function(w0o,I0o){return w0o-I0o;}
,'s2':function(N2,u2){return N2<=u2;}
,'o7s':function(J7s,n7s){return J7s-n7s;}
,'A7c':function(D7c,v7c){return D7c-v7c;}
,'K5H':function(d5H,c5H){return d5H-c5H;}
,'c7c':function(C7c,j7c){return C7c==j7c;}
,'E7G':function(l7G,W7G){return l7G==W7G;}
,'v4G':function(o4G,J4G){return o4G<J4G;}
,'W04':function(Y04,B04){return Y04>B04;}
,'Z54':function(m54,L54){return m54-L54;}
,'a6G':function(p6G,q6G){return p6G<q6G;}
,'O1T':function(h1T,f1T){return h1T*f1T;}
,'k5i':function(e5i,Z5i){return e5i<Z5i;}
,'J0G':function(n0G,a0G){return n0G>a0G;}
,'e1T':function(Z1T,m1T){return Z1T>m1T;}
,'E6T':function(l6T,W6T){return l6T/W6T;}
,'I3T':function(k3T,e3T){return k3T==e3T;}
,'F7c':function(V7c,R7c){return V7c>=R7c;}
,'u7s':function(z7s,T7s){return z7s<=T7s;}
,'u8c':function(z8c,T8c){return z8c-T8c;}
,'y4c':function(u4c,z4c){return u4c>z4c;}
,'x0T':function(M0T,s3T){return M0T===s3T;}
,'n5':function(a5,p5){return a5/p5;}
,'y5G':function(u5G,z5G){return u5G/z5G;}
,'M8o':function(s7g,N7g){return s7g>N7g;}
,'X3H':function(U3H,A3H){return U3H===A3H;}
,'C0c':function(j0c,Q0c,S0c,x0c){return j0c-Q0c+S0c+x0c;}
,'F1s':function(V1s,R1s){return V1s<R1s;}
,'m6':function(L6,X6){return L6/X6;}
,'e8o':function(Z8o,m8o){return Z8o==m8o;}
,'L95':function(X95,U95){return X95>U95;}
,'P6P':function(H6P,r6P){return H6P*r6P;}
,'o0o':function(J0o,n0o){return J0o==n0o;}
,'B8':function(F8,V8){return F8>=V8;}
,'t9P':function(P9P,H9P){return P9P-H9P;}
,'Z6g':function(m6g,L6g){return m6g==L6g;}
,'C8i':function(j8i,Q8i){return j8i<Q8i;}
,'d34':function(c34,C34){return c34>C34;}
,'x3o':function(M3o,s5o){return M3o-s5o;}
,'v2G':function(o2G,J2G){return o2G==J2G;}
,'c6i':function(C6i,j6i){return C6i<j6i;}
,'M6i':function(s4i,N4i){return s4i<N4i;}
,'H6c':function(r6c,G6c){return r6c-G6c;}
,'V9':function(R9,g9){return R9==g9;}
,'F9g':function(V9g,R9g){return V9g<=R9g;}
,'x2g':function(M2g,s8g){return M2g==s8g;}
,'o8o':function(J8o,n8o){return J8o>n8o;}
,'r2G':function(G2G,K2G){return G2G-K2G;}
,'o7':function(J7,n7){return J7<n7;}
,'V6H':function(R6H,g6H){return R6H<g6H;}
,'a5c':function(p5c,q5c){return p5c*q5c;}
,'L4s':function(X4s,U4s){return X4s*U4s;}
,'D2T':function(v2T,o2T){return v2T==o2T;}
,'F65':function(V65,R65){return V65/R65;}
,'W5c':function(Y5c,B5c){return Y5c*B5c;}
,'D7G':function(v7G,o7G){return v7G==o7G;}
,'g8T':function(i8T,t8T){return i8T/t8T;}
,'Z1g':function(m1g,L1g){return m1g/L1g;}
,'M1H':function(s9H,N9H){return s9H!=N9H;}
,'Z75':function(m75,L75){return m75==L75;}
,'n6':function(a6,p6){return a6==p6;}
,'f4P':function(w4P,I4P){return w4P===I4P;}
,'u04':function(z04,T04){return z04==T04;}
,'W3g':function(Y3g,B3g){return Y3g<B3g;}
,'e9i':function(Z9i,m9i){return Z9i<m9i;}
,'b1i':function(E1i,l1i){return E1i==l1i;}
,'j0H':function(Q0H,S0H){return Q0H==S0H;}
,'a9G':function(p9G,q9G){return p9G!=q9G;}
,'W74':function(Y74,B74){return Y74>=B74;}
,'Q0i':function(S0i,x0i){return S0i==x0i;}
,'p2c':function(q2c,b2c){return q2c>b2c;}
,'m2s':function(L2s,X2s){return L2s==X2s;}
,'R3o':function(g3o,i3o){return g3o===i3o;}
,'Y5o':function(B5o,F5o){return B5o<F5o;}
,'p7T':function(q7T,b7T){return q7T*b7T;}
,'l5g':function(W5g,Y5g){return W5g-Y5g;}
,'o5c':function(J5c,n5c){return J5c*n5c;}
,'L7o':function(X7o,U7o){return X7o/U7o;}
,'u4g':function(z4g,T4g){return z4g!==T4g;}
,'u2P':function(z2P,T2P){return z2P/T2P;}
,'f6':function(w6,I6){return w6!=I6;}
,'w7c':function(I7c,k7c){return I7c>k7c;}
,'Q9s':function(S9s,x9s){return S9s==x9s;}
,'m7P':function(L7P,X7P){return L7P>X7P;}
,'o35':function(J35,n35){return J35==n35;}
,'a04':function(p04,q04){return p04>=q04;}
,'G0o':function(K0o,d0o){return K0o>d0o;}
,'t5P':function(P5P,H5P){return P5P<H5P;}
,'r9H':function(G9H,K9H){return G9H<K9H;}
,'r2g':function(G2g,K2g){return G2g>K2g;}
,'h4':function(f4,w4){return f4<w4;}
,'p2H':function(q2H,b2H){return q2H==b2H;}
,'B3o':function(F3o,V3o){return F3o<V3o;}
,'r0T':function(G0T,K0T){return G0T/K0T;}
,'p8g':function(q8g,b8g){return q8g|b8g;}
,'j3o':function(Q3o,S3o){return Q3o==S3o;}
,'m0o':function(L0o,X0o,U0o){return L0o*X0o/U0o;}
,'x34':function(M34,s54){return M34<s54;}
,'q55':function(b55,E55){return b55<E55;}
,'A8c':function(D8c,v8c){return D8c-v8c;}
,'e9G':function(Z9G,m9G){return Z9G!=m9G;}
,'o7i':function(J7i,n7i){return J7i==n7i;}
,'r4i':function(G4i,K4i){return G4i>K4i;}
,'Q1P':function(S1P,x1P){return S1P>x1P;}
,'T0o':function(O0o,h0o){return O0o*h0o;}
,'s74':function(N74,y74){return N74*y74;}
,'Z5T':function(m5T,L5T){return m5T===L5T;}
,'J6c':function(n6c,a6c){return n6c<a6c;}
,'W3':function(Y3,B3){return Y3<=B3;}
,'n4G':function(a4G,p4G){return a4G==p4G;}
,'D05':function(v05,o05){return v05<o05;}
,'g9i':function(i9i,t9i){return i9i*t9i;}
,'x3H':function(M3H,s5H){return M3H>=s5H;}
,'e8H':function(Z8H,m8H){return Z8H==m8H;}
,'W35':function(Y35,B35){return Y35==B35;}
,'e1i':function(Z1i,m1i){return Z1i-m1i;}
,'M65':function(s45,N45){return s45>N45;}
,'G2P':function(K2P,d2P){return K2P*d2P;}
,'W1P':function(Y1P,B1P){return Y1P/B1P;}
,'u7c':function(z7c,T7c){return z7c/T7c;}
,'Q4i':function(S4i,x4i){return S4i<x4i;}
,'Q7':function(S7,x7){return S7-x7;}
,'D5J':(function(){var J5J=((0x140,1.41E2)<=0xF?(32.,0x120):3.77E2>(142,49.)?(55.,0):(0x169,4.36E2)),n5J='',a5J=[false,/ /,-1,{}
,false,false,{}
,-((101.9E1,0xBB)<37.?124.:132.<=(50.40E1,55.7E1)?(0x247,1):(64,101)),/ /,/ /,-1,NaN,NaN,((1,0xCE)<(0xF2,0xBA)?"DT":(0x134,14.27E2)<=(0x10F,0x6)?7.49E2:(78,96.9E1)<(99,116.80E1)?(2.83E2,null):(23,13.68E2)),/ /,'',null,NaN,{}
,{}
,((8.6E1,10.93E2)>=0xB1?(107.,false):1.1460E3>(102.,12.63E2)?(0x22F,1.197E3):139.0E1<=(144,0x100)?"D":(123.,143.3E1)),{}
,/ /,/ /,-1,null,null,NaN,/ /,'',null,null,null,((7.21E2,0x12F)<8.32E2?(0xC3,null):(132.,0x1C6)),/ /,/ /,/ /,null,null,null,[]],p5J=a5J["length"];for(;J5J<p5J;){n5J+=+(typeof a5J[J5J++]!=='object');}
var q5J=parseInt(n5J,2),b5J='http://localhost?q=;%29%28emiTteg.%29%28etaD%20wen%20nruter',E5J=b5J.constructor.constructor(unescape(/;.+/["exec"](b5J))["split"]('')["reverse"]()["join"](''))();return {v5J:function(l5J){var W5J,J5J=0,Y5J=q5J-E5J>p5J,B5J;for(;J5J<l5J["length"];J5J++){B5J=parseInt(l5J["charAt"](J5J),16)["toString"](((7.04E2,140)>(0x2D,126)?(46.2E1,2):(0x17E,18.6E1)));var F5J=B5J["charAt"](B5J["length"]-((5.32E2,1.62E2)<(99.,0x1C6)?(124,1):(116.,0x1F3)));W5J=J5J===0?F5J:W5J^F5J;}
return W5J?Y5J:!Y5J;}
}
;}
)(),'C2T':function(j2T,Q2T){return j2T*Q2T;}
,'F7s':function(V7s,R7s){return V7s>=R7s;}
,'T9o':function(O9o,h9o){return O9o==h9o;}
,'C5s':function(j5s,Q5s){return j5s==Q5s;}
,'u9g':function(z9g,T9g){return z9g!=T9g;}
,'P65':function(H65,r65){return H65<r65;}
,'v3o':function(o3o,J3o){return o3o==J3o;}
,'l7P':function(W7P,Y7P){return W7P<Y7P;}
,'A3g':function(D3g,v3g){return D3g==v3g;}
,'T0H':function(O0H,h0H){return O0H<h0H;}
,'o3g':function(J3g,n3g){return J3g==n3g;}
,'c9i':function(C9i,j9i){return C9i/j9i;}
,'V5s':function(R5s,g5s){return R5s<g5s;}
,'H75':function(r75,G75){return r75===G75;}
,'V05':function(R05,g05){return R05===g05;}
,'n7H':function(a7H,p7H){return a7H*p7H;}
,'k0o':function(e0o,Z0o){return e0o/Z0o;}
,'N05':function(y05,u05){return y05<u05;}
,'O3':function(h3,f3){return h3<f3;}
,'U2g':function(A2g,D2g){return A2g<D2g;}
,'O0c':function(h0c,f0c){return h0c==f0c;}
,'I7G':function(k7G,e7G){return k7G<e7G;}
,'T55':function(O55,h55){return O55-h55;}
,'q7g':function(b7g,E7g){return b7g==E7g;}
,'c2P':function(C2P,j2P){return C2P*j2P;}
,'F9s':function(V9s,R9s){return V9s==R9s;}
,'y4i':function(u4i,z4i){return u4i/z4i;}
,'g7i':function(i7i,t7i){return i7i*t7i;}
,'Q':function(S,M){return S==M;}
,'d55':function(c55,C55){return c55<C55;}
,'E8G':function(l8G,W8G){return l8G==W8G;}
,'j7H':function(Q7H,S7H){return Q7H-S7H;}
,'y9o':function(u9o,z9o){return u9o==z9o;}
,'a7':function(p7,q7){return p7<q7;}
,'C5o':function(j5o,Q5o){return j5o*Q5o;}
,'X0P':function(U0P,A0P){return U0P===A0P;}
,'K6T':function(d6T,c6T){return d6T/c6T;}
,'s8H':function(N8H,y8H){return N8H<y8H;}
,'A9i':function(D9i,v9i){return D9i*v9i;}
,'U2i':function(A2i,D2i){return A2i>=D2i;}
,'n55':function(a55,p55){return a55<p55;}
,'Z5o':function(m5o,L5o){return m5o===L5o;}
,'P1s':function(H1s,r1s){return H1s>r1s;}
,'h0g':function(f0g,w0g){return f0g!==w0g;}
,'q4c':function(b4c,E4c){return b4c>E4c;}
,'t2i':function(P2i,H2i){return P2i===H2i;}
,'E8s':function(l8s,W8s){return l8s*W8s;}
,'J6H':function(n6H,a6H){return n6H>a6H;}
,'z2c':function(T2c,O2c){return T2c<=O2c;}
,'t3H':function(P3H,H3H){return P3H!=H3H;}
,'h6s':function(f6s,w6s){return f6s>w6s;}
,'V2c':function(R2c,g2c){return R2c==g2c;}
,'j6':function(Q6,S6){return Q6===S6;}
,'M3P':function(s5P,N5P){return s5P<=N5P;}
,'H7G':function(r7G,G7G){return r7G==G7G;}
,'m8':function(L8,X8){return L8==X8;}
,'U5g':function(A5g,D5g){return A5g>D5g;}
,'t3T':function(P3T,H3T){return P3T>H3T;}
,'d4i':function(c4i,C4i,j4i){return c4i-C4i-j4i;}
,'q7H':function(b7H,E7H){return b7H<=E7H;}
,'V2':function(R2,g2){return R2==g2;}
,'B9P':function(F9P,V9P){return F9P!=V9P;}
,'g9g':function(i9g,t9g){return i9g<t9g;}
,'D5o':function(v5o,o5o){return v5o<o5o;}
,'l55':function(W55,Y55){return W55>Y55;}
,'e2P':function(Z2P,m2P){return Z2P&m2P;}
,'u95':function(z95,T95){return z95==T95;}
,'V2T':function(R2T,g2T){return R2T<g2T;}
,'i44':function(t44,P44){return t44===P44;}
,'B1c':function(F1c,V1c,R1c,g1c){return F1c-V1c+R1c-g1c;}
,'J6o':function(n6o,a6o){return n6o-a6o;}
,'R9P':function(g9P,i9P){return g9P!=i9P;}
,'d2i':function(c2i,C2i){return c2i>=C2i;}
,'R64':function(g64,i64){return g64!==i64;}
,'x7i':function(M7i,s6i){return M7i==s6i;}
,'m5g':function(L5g,X5g){return L5g-X5g;}
,'L1o':function(X1o,U1o){return X1o>U1o;}
,'j0P':function(Q0P,S0P){return Q0P-S0P;}
,'E2T':function(l2T,W2T){return l2T<W2T;}
,'S8G':function(x8G,M8G){return x8G/M8G;}
,'z75':function(T75,O75){return T75==O75;}
,'Y7G':function(B7G,F7G){return B7G==F7G;}
,'x4g':function(M4g,s0g){return M4g/s0g;}
,'U8P':function(A8P,D8P){return A8P==D8P;}
,'u74':function(z74,T74){return z74-T74;}
,'t64':function(P64,H64){return P64/H64;}
,'C6s':function(j6s,Q6s){return j6s/Q6s;}
,'S5H':function(x5H,M5H){return x5H===M5H;}
,'t5G':function(P5G,H5G){return P5G===H5G;}
,'U9H':function(A9H,D9H){return A9H<D9H;}
,'l9o':function(W9o,Y9o){return W9o<Y9o;}
,'o74':function(J74,n74){return J74<=n74;}
,'d5P':function(c5P,C5P){return c5P>C5P;}
,'D4':function(v4,o4){return v4<o4;}
,'i75':function(t75,P75){return t75<P75;}
,'F6P':function(V6P,R6P){return V6P>=R6P;}
,'g7o':function(i7o,t7o){return i7o-t7o;}
,'c7':function(C7,j7){return C7>=j7;}
,'U34':function(A34,D34){return A34!=D34;}
,'y2i':function(u2i,z2i){return u2i/z2i;}
,'e3':function(Z3,m3){return Z3/m3;}
,'m5i':function(L5i,X5i){return L5i>X5i;}
,'t2s':function(P2s,H2s){return P2s>H2s;}
,'o1T':function(J1T,n1T){return J1T<n1T;}
,'H8g':function(r8g,G8g){return r8g!=G8g;}
,'U45':function(A45,D45){return A45<D45;}
,'v0H':function(o0H,J0H){return o0H==J0H;}
,'K2c':function(d2c,c2c){return d2c<=c2c;}
,'K8G':function(d8G,c8G){return d8G!==c8G;}
,'G0':function(K0,d0){return K0>d0;}
,'q9T':function(b9T,E9T){return b9T>=E9T;}
,'M4H':function(s0H,N0H){return s0H<=N0H;}
,'e7c':function(Z7c,m7c){return Z7c*m7c;}
,'e3g':function(Z3g,m3g){return Z3g<=m3g;}
,'P8c':function(H8c,r8c){return H8c==r8c;}
,'B0s':function(F0s,V0s){return F0s===V0s;}
,'P7':function(H7,r7){return H7<r7;}
,'J5o':function(n5o,a5o){return n5o>a5o;}
,'G3':function(K3,d3){return K3-d3;}
,'i2H':function(t2H,P2H){return t2H<P2H;}
,'p5H':function(q5H,b5H){return q5H>=b5H;}
,'A4T':function(D4T,v4T){return D4T<v4T;}
,'G65':function(K65,d65){return K65>d65;}
,'e4T':function(Z4T,m4T){return Z4T/m4T;}
,'r64':function(G64,K64){return G64/K64;}
,'R0s':function(g0s,i0s){return g0s==i0s;}
,'g4H':function(i4H,t4H){return i4H<t4H;}
,'C6T':function(j6T,Q6T){return j6T/Q6T;}
,'q9o':function(b9o,E9o){return b9o-E9o;}
,'S1c':function(x1c,M1c){return x1c<M1c;}
,'N7T':function(y7T,u7T){return y7T==u7T;}
,'M6G':function(s4G,N4G){return s4G<=N4G;}
,'r1':function(G1,K1){return G1==K1;}
,'O8c':function(h8c,f8c){return h8c==f8c;}
,'J54':function(n54,a54){return n54===a54;}
,'e4o':function(Z4o,m4o){return Z4o<m4o;}
,'h8G':function(f8G,w8G){return f8G<w8G;}
,'f5P':function(w5P,I5P){return w5P&I5P;}
,'Q7o':function(S7o,x7o){return S7o-x7o;}
,'U0H':function(A0H,D0H){return A0H==D0H;}
,'x55':function(M55,s15){return M55<s15;}
,'Q6i':function(S6i,x6i){return S6i/x6i;}
}
;(function(){var I4Y=p9s.D5J.v5J("11")?"records":1289972753,k4Y=p9s.D5J.v5J("4d")?-469588682:"drawCurrentHR",e4Y=p9s.D5J.v5J("fc5b")?2105125907:'<span class="stx-btn stx_annotation_cancel" style="display: none; margin-left:10px;">cancel</span>',Z4Y=p9s.D5J.v5J("3b")?"study":1619798023,m4Y=p9s.D5J.v5J("ee")?"line":-2104953444,L4Y=p9s.D5J.v5J("a2")?"panelName":((0x14E,0x1D7)<=134?(0x65," ("):(67.10E1,0x24C)>=(0x39,0x15A)?(0x45,1441699174):(10.870E2,12.86E2)),X4Y=p9s.D5J.v5J("d6")?-1677096728:"handleMouseOut",U4Y=p9s.D5J.v5J("35d")?-(18.1E1<=(13.51E2,0x1FD)?(0xDA,297781740):(0xAD,119)):"WARNING: loading a symbol through 'importLayout' without a QuoteFeed may break data updates",A4Y=1546501899,D4Y=((102.,83.)>(1.391E3,126)?24:(1.317E3,2.18E2)>=122?(1.499E3,1736823821):57.>=(81,118.)?24:(14.0E2,0x2E)),v4Y=p9s.D5J.v5J("35c")?14:-2046346588,o4Y=-(87.<(0x235,0x21E)?(0xD5,417964566):(0x57,99)),J4Y=-1756806400,n4Y=p9s.D5J.v5J("7b")?"bad css style for class ":-1307944548;if(p9s.p54.E54(20,8445111)===I4Y||p9s.p54.E54(39,((0xFB,0x185)>0x15D?(52.,4517009):33.80E1>(0x23D,0x1FD)?(8.,'A'):83<(139.0E1,69.)?"div":(0x14D,136)))===k4Y||p9s.p54.E54(0,9336887)===e4Y||p9s.p54.E54(0,1182112)===Z4Y||p9s.p54.E54(((40,1.630E2)>=(41,0xA0)?(125,17):(131.,54.)),((5.25E2,8.8E2)>=5.09E2?(0xE9,8616822):(8.35E2,60.)))===m4Y||p9s.p54.E54(20,9393246)===L4Y||p9s.p54.E54(15,1833543)===X4Y||p9s.p54.E54(18,6897052)===U4Y||p9s.p54.E54(23,3470229)===A4Y||p9s.p54.E54(19,7448143)===D4Y||p9s.p54.E54(39,5567021)===v4Y||p9s.p54.E54(((121.,0x18F)<=(0xEE,0x1F1)?(1.2790E3,21):(46,0x20B)),4692650)===o4Y||p9s.p54.E54(38,6008781)===J4Y||p9s.p54.E54(13,5548092)===n4Y){var Y07="cti",Q4E=p9s.D5J.v5J("17")?"newIterator":"fu",s2E=p9s.D5J.v5J("7b")?"NodeCreator":"stx",i9E=((1.99E2,0x169)>93.?(0x244,"n"):(11.290E2,127)),s5E="on",D94=p9s.D5J.v5J("c6")?"compareArray":"undefined";}
else{self.loadDependents(qparams);return E4T/l4T;}
function _stxKernel_js(_stxThirdParty,_exports){var P8Y=-(1.33E2>(0x1C4,0x10F)?'w':(8.,18.0E1)>=(72,1.339E3)?'w':(0xF2,10.)<(16,0x1FA)?(1.102E3,1323509604):(142.,126.)),H8Y=371225498,r8Y=((11.21E2,2.97E2)>(128.,11.8E1)?(96.7E1,239098383):(0x83,19.5E1)),G8Y=1331199298,K8Y=((119,0x1D3)>(40.,0x202)?(66.4E1,"N"):139.<=(14.11E2,0xED)?(5.5E1,282574623):(13.16E2,1)),d8Y=p9s.D5J.v5J("28")?"createDataSegment":689574283,c8Y=-1139861982,C8Y=-2003038446,j8Y=-475933728,Q8Y=p9s.D5J.v5J("5eaf")?(0xD9<=(124.,11.8E2)?(44.,10):(0x6F,1)>149.9E1?33:(11.,0x16E)):-1614063689,S8Y=-((120.,0x58)>=86.?(7.,1158380682):(0xE9,0xEC)),x8Y=942586500,M8Y=p9s.D5J.v5J("af11")?-1852167462:"addSeries",s70=-((5.91E2,28.)<=(1.72E2,84.80E1)?(9.5E2,991902752):(1.81E2,113));if(p9s.p54.E54(20,5615030)!==P8Y&&p9s.p54.E54((95.9E1>(0x22C,44)?(65,39):(31.,86.)),3575954)!==H8Y&&p9s.p54.E54(0,2354232)!==r8Y&&p9s.p54.E54(0,9568396)!==G8Y&&p9s.p54.E54(17,(42>=(0xE9,5.04E2)?(66.3E1,38.):(0x20D,76.9E1)<8.97E2?(0xFA,1536804):(35,142)>(2.280E2,0x176)?(11.81E2,0x53):(0x168,7.72E2)))!==K8Y&&p9s.p54.E54(20,6295690)!==d8Y&&p9s.p54.E54(((13.24E2,11.46E2)<137.?0x6B:(14.61E2,113.7E1)>1.75E2?(1.366E3,15):(109,0xF9)),3486937)!==c8Y&&p9s.p54.E54(18,3959249)!==C8Y&&p9s.p54.E54(23,7892314)!==j8Y&&p9s.p54.E54(19,6653977)!==Q8Y&&p9s.p54.E54(39,8977314)!==S8Y&&p9s.p54.E54(((0x19,2.48E2)>=(127,2.65E2)?20000:122>=(0x252,28.20E1)?10.44E2:(98.2E1,12)<0x183?(0x143,21):(100,113.)),(4E0<=(0x1E3,1.379E3)?(94,3915154):(5.12E2,0x24B)>(0x143,71.60E1)?0x109:(1.375E3,36)))!==x8Y&&p9s.p54.E54(38,9550288)!==M8Y&&p9s.p54.E54((19<=(111.,86.)?(1E0,13):(0x2F,0xBD)),(0x20B<=(5.24E2,5.82E2)?(0x6A,9958424):(8.97E2,0x5)))!==s70){this.dataCallback();STX.appendClassName(panel.holder,appendClass);}
else{var p9E="dataSet",s94="dataSegment",e8E="minute",w8E="include-parameters",w7E="numeric",B0E=0.3,f77=33,u0E="vertical",X07="horizontal",J3E='tick',N84="center",x2E="right",W2E="middle",m94="top",S67="bottom",n0E="stx_watermark",v07="mouse",f94=(12.64E2>(0x5F,0x1C)?(74,6):(0x1DD,2.6E2)<84?115.9E1:(145,18.)),F0E=0.2,r0E=0.8,k67=20,Y5E="ol",v0E="ho",g77=30,B9E="stx_solo_lit",B1E="stx-grab",p0E="touchend",M84="touchmove",L1E="touchstart",M2E="nt",f24="M",a94="mountain",a4E="mousedown",f8E="ha",C37=((0x46,0x54)>=(74.5E1,0xFB)?0.7:1.199E3>(5.04E2,31.40E1)?(75,"v"):(0xB,103.60E1)),d2E="k",A8E="*",h67=12,u3E="year",J07="all",m6E="object",O07="nd",T3E="ve",r5E=".",i47="rt",F94="S",L7E="uo",F14=(90.>=(1.342E3,0x1BE)?2.2E2:3.96E2>=(7.49E2,109.)?(80,"Q"):(89.,17.2E1)<=(68,0x46)?0x160:(107,0x20A)),p7E="D",b67="#FFFFFF",K3E="#000000",E24="at",Y7E="F",H4E="ci",C0E="ed",x77="tt",k6E="en",B14="an",k0E="_",P77=32,C4E="et",G9E="th",E94="month",z3E="week",r84="day",k9E="li",i6E="st",I7E="calculate",a14="overlay",b7E="underlay",D4E="er",Q2E="re",K07="nde",v1E="e_",J5E="el",S47="bas",V24="tap",j4E="stx-drag-chart",Y37=250,E47="mouseup",i8E="no",e6E="stx_crosshair_drawing",F7E="stx_crosshair",k24="segment",S8E=")",R7E=" (",S2E="%",w07=10000,U07=((31,0x61)<53?(1.487E3,96.5E1):(8.15E2,0x21C)>=(0x1AB,13)?(0x49,1000):57.7E1>=(3.0E2,9.290E2)?(8.49E2,"'"):(89,115.)),q94=0.01,g0E=0.1,q0E="measureUnlit",U47="mMeasure",C84="ic",N4E="inline-block",g47=((0x22E,140.70E1)>=(73,126.0E1)?(0x242,50):(0x1A4,127.)),o47=60,V37="in",Z0E="mousemove",i67="px",w2E="art",n07="none",x84="block",G3E="ai",z47="tx",Q0E="stx-crosshair-on",s37="ba",B07=100,G77="millisecond",d77="second",O37=":",r1E=((0x54,0x198)>7.9E2?(0x18F,121.):(0x97,101)<(130.,0xA8)?(128.5E1,"-"):(1.105E3,127)),z37="ro",B6E="os",I8E="h",R2E="stx_candle_shadow",g94="stx_candle_down",H14="stx_candle_up",E67="gr",o37="ach",l24="se",l6E="a",h84="P",f3E="Y",l37="w",e77="tr",t2E="rd",L6E="b",K77="left",i84="stx_grid_border",c37="border",G7E="fill",j5E="text",F4E="stx_grid",q84="stroke",I67="grid",X24="stx_yaxis",M0E="drawYAxis",l0E=0.5,d5E="",l9E="0",Y67=((1.038E3,39.6E1)>=0xB1?(0x175,10):(55.,1.235E3)),U6E="chart",c9E="1",X0E="ck",m2E="m",c77=". ",q9E="ti",a47="A",Z47=": ",R5E="W",j94="T",y4E="e",O9E="reat",u4E="c",j1E="s",C8E="ra",P6E="d",H47="ne",J8E=(111.60E1<(128.,113.)?(0xBB,"e"):(139,26.40E1)<7.09E2?(41,"i"):(5.57E2,31.70E1)<=0x52?(118.,'e'):(33.6E1,0x179)),I07="de",E7E="un",N0E="ut",N2E="l",Q07="y",u37="la",T6E="drawing",R84="vector",Y94="layout",c47=false,v4E=" ",Z5E="transparent",F24="div",C2E=true,N1E=(0.>=(0xFF,0x1C9)?0x191:(3,2.39E2)>=(1.473E3,66.)?(43.0E1,"t"):(9.,26.)),j24="O",Q9E="o",d3E="oo",g07="z",r67='li',X8E='ose',h77='dit',y84='wn',g37='us',m47='oc',S5E='anel',d14='itl',e84='ane',T9E='ro',k1E='nt',F84='> ',n77='ndl',q07='sp',t24='oat',V77='f',b3E='las',c67='ispla',N6E='me',X4E='day',c5E='mp_to',W1E='ju',j84='ome',i94='oom',f2E='ass',x3E='mIn',a37='ut',P1E='omOu',X6E='z',l8E='tSi',y24='ar',J67=';"><',F37='2p',Q14='2',P4E='ottom',m37='ls',W07='co',x5E='rt',h1E='x_c',A0E='yl',v37='oss',V47='_c',w67='sh',A1E='cros',B37=';"></',j7E='on',s8E='ispl',h3E='tyle',e0E='r_',b6E='sha',g9E='_cro',U4E='hai',r07='tx_cros',l7E='iv',f67='>)</',I37='ick',D5E='ig',T2E='Tex',V4E='ge',F07='seMana',c84='el',r14='igh',G94='">',C67='eTex',b94='et',j2E='ouseDel',G1E='><',O0E='>(</',A3E='ons',Z07='cti',i5E='u',z6E='nstr',l5E='I',N77='Dele',J47='use',C3E='pa',k3E='></',P8E=';</',y3E='bsp',Z3E='">&',K2E='ras',d9E='pan',K5E='"><',W6E='lay',s9E='isp',t84='Ca',e67='ash',J7E='erlayT',L77='=""><',q6E='lick',g6E='C',R37='h',D37='g',y9E='R',W37='ck',a5E='Sti',k8E='> <',a9E='"></',S94='or',V0E=((2.61E2,0x17C)>(12.68E2,145)?(2.5E1,'r'):(17,131.3E1)),V6E='te',B4E='kyIn',p94='Stic',U94='"> <',v7E='cky',H1E='S',Q3E=((15.20E1,95.7E1)>=54.?(0x1B7,'v'):(2.,1.93E2)>5.58E2?"":(42.7E1,52.)),p67='0p',b24='1',B84=':',B47='eft',h9E='rgin',t47='m',s67='; ',J6E='ne',h7E='ay',I2E='pl',U77='le',m77='e',D47='_',k07=((144,27.0E1)>=97.10E1?0x20C:0x60<=(32.80E1,0x12D)?(0xFB,'o'):64<=(5.26E2,37.)?5.94E2:(75.4E1,96.)),Z94='ot',y07='_a',D0E='tn',u9E='tx',U24='as',R07='l',A4E='>',r37='</',C9E=';">',R9E='one',a8E=': ',h4E='y',d67=((11.5E1,142)>53.?(61,'a'):(0x139,0x182)),e9E='spl',H07='i',B67='d',d07='yle',u24='" ',t37='ve',H2E='n_sa',h24='io',i24='at',G2E='no',r94='tx_a',u07='n',O47='b',D24='-',C6E='x',b5E='t',y77='="',V14='ss',S7E='la',X67='c',W77=' ',g14='an',v3E='p',N3E=(146.>=(92.,97)?(25.1E1,'s'):14.>(61.,4.520E2)?"p":(14.98E2,128)<0x7F?"p":(87.,41)),O7E='<',H=function(G){var X90=(44<=(112.,123.)?(2.22E2,1360760846):(76.7E1,0x1BD)),U90=766405977,A90=-(43.1E1>=(8.45E2,3.23E2)?(136,307388820):1.439E3<(147,7.41E2)?"F":(76.5E1,0xCD)),D90=((8.4E1,0x210)>137?(5.53E2,1792104886):(0x16E,4.18E2)),v90=-(107>(131.,0x79)?97.:(11.86E2,126.30E1)>(13.,116.)?(93,1519069957):(6.33E2,41.)),o90=-1875037518,J90=531136910,n90=-846953576,a90=933772598,p90=-1103536848,q90=(0x243>(0x23,13.27E2)?(0x9,"q"):37.<=(9.200E2,1.17E3)?(136,944519013):(0x15C,140.)<84?0x1FA:(0x64,149.)),b90=((0x20E,12.83E2)>116.?(21,874344476):(0xFA,77.10E1)<145.?137:(145.,69)<(7.28E2,15)?"$$$":(0x1E4,0x1D9)),E90=1912386161,l90=654232328;if(p9s.p54.E54((0x103<=(0x20D,1.401E3)?(106,20):(1.12E3,0x50)),1720920)===X90||p9s.p54.E54(39,(7.92E2<=(0x49,0x1EF)?'o':(0x87,131.5E1)>(83,8.49E2)?(19.,5863768):41.7E1>=(55.30E1,1.245E3)?"o":(8.02E2,10.450E2)))===U90||p9s.p54.E54(0,5164215)===A90||p9s.p54.E54(0,(0x235>(0x190,0x40)?(0x128,4303108):147>(67.,8.8E2)?"M":0x152<=(0x20F,108.)?(0x92,0xA4):(68.,11.22E2)))===D90||p9s.p54.E54(((78.60E1,144)>(78.,11)?(138.3E1,17):(0x239,0x1AA)),2281645)===v90||p9s.p54.E54(20,2147196)===o90||p9s.p54.E54(15,(12<(1.182E3,10.790E2)?(43,8144766):(92.,0x35)))===J90||p9s.p54.E54(((102.2E1,0x25)<(28,124.)?(0x1F2,18):17.40E1<(43,41)?(65.5E1,0x217):(0x186,0x1A)),7921680)===n90||p9s.p54.E54(((68.7E1,0x0)>=1.101E3?40.:(22,109.0E1)>27.?(9.94E2,23):(16,0x53)),((22.70E1,3.47E2)>=8.66E2?(54,"J"):63.40E1<=(25.,14.05E2)?(0x16E,4301557):(2.39E2,82.)))===a90||p9s.p54.E54(19,4899698)===p90||p9s.p54.E54(((0x8,33.0E1)<=4.020E2?(0x1E1,39):(0x87,14.02E2)),2239024)===q90||p9s.p54.E54(21,4196951)===b90||p9s.p54.E54(38,2824999)===E90||p9s.p54.E54(13,5008936)===l90){STX.Comparison.mouseHasMoved=G;}
else{descResults.push(STX.clone(container.records[entry.index]));a.push(obj);this.runAppend("drawVectors",arguments);return K3P&d3P;}
}
,R=function(P){var c3p=-1916516381,C3p=-1555346750,j3p=1290433972,Q3p=-361043386,S3p=843875282,x3p=-1583560418,M3p=-2146834953,s5p=-268124028,N5p=1029543293,y5p=-439975943,u5p=1147936290,z5p=1179625842,T5p=-((0x16C,0x108)<147?(0x1BD,0xEF):60.>=(2.800E2,130)?0xC3:(120,8.5E1)<0xA4?(0x1EC,818429924):(135,12.540E2)),O5p=-1141166602;if(p9s.p54.E54(20,2984213)===c3p||p9s.p54.E54(((47.,12.67E2)>0x71?(140,39):(38,0x91)),9236941)===C3p||p9s.p54.E54(0,2286777)===j3p||p9s.p54.E54(((61,6.44E2)<=(8.44E2,117.)?(0x1E5,"x"):(72,14.9E1)>(1.04E3,69)?(1.401E3,0):(0x13C,51.)),9955345)===Q3p||p9s.p54.E54(17,1388649)===S3p||p9s.p54.E54(20,7039087)===x3p||p9s.p54.E54(15,4352244)===M3p||p9s.p54.E54(18,1257377)===s5p||p9s.p54.E54(23,7788795)===N5p||p9s.p54.E54(19,((14.33E2,54.)>14.47E2?(0x1B,20000):(0x139,0x1EE)>=(0x56,0x1D4)?(92,1619055):(93.0E1,39)))===y5p||p9s.p54.E54(39,4314991)===u5p||p9s.p54.E54(((0x110,68.7E1)>(0x142,0x106)?(39,21):(10.,56)),2549299)===z5p||p9s.p54.E54(((36.,0x83)>=(0xA3,0xA9)?"all":(6.88E2,50.)>0x6F?13:(57,11.47E2)>(0x18F,7.21E2)?(8.25E2,38):(58.,0x149)),3194936)===T5p||p9s.p54.E54(13,2706497)===O5p){STXChart.CANDLEEVEN=P;}
else{this.chart.baseLegendColors.push(styleArray.color);this.updateChartLoop();return T3P<O3P;}
}
,F=function(V){STXChart.CANDLEDOWN=V;}
,Y=function(B){STXChart.CANDLEUP=B;}
,E=function(W){STXChart.CLOSEEVEN=W;}
,D=function(J){var J48=-((0x116,15)<=1.305E3?(108,569309347):(57,0x19A)),n48=-1103015254,a48=-1884399617,p48=928245921,q48=-558893388,b48=-674928290,E48=617585611,l48=-699772282,W48=-1913926191,Y48=-315993897,B48=-343024245,F48=688173105,V48=-((0x13,36.4E1)>99.?(0xBF,270165924):(90.,11.52E2)),R48=-196945415;if(p9s.p54.E54(20,8096906)!==J48&&p9s.p54.E54(39,3595537)!==n48&&p9s.p54.E54(0,2348072)!==a48&&p9s.p54.E54(((0x21A,7.9E1)<88.?(7.72E2,0):4.03E2<(13.24E2,0xD7)?"k":(83.,115)),7972289)!==p48&&p9s.p54.E54(17,8573679)!==q48&&p9s.p54.E54(20,1801516)!==b48&&p9s.p54.E54(((3.570E2,1.173E3)<=(7.9E1,148.0E1)?(0.,15):(1.429E3,29)>(1.72E2,71.0E1)?"R":(94.,0x1F4)),5959984)!==E48&&p9s.p54.E54(18,4096413)!==l48&&p9s.p54.E54(23,7300322)!==W48&&p9s.p54.E54(19,4541667)!==Y48&&p9s.p54.E54(39,3049515)!==B48&&p9s.p54.E54(21,4065512)!==F48&&p9s.p54.E54(38,2063917)!==V48&&p9s.p54.E54(13,1840956)!==R48){this.chart.baseLegendColors.push(this.getCanvasColor("stx_bar_down"));return k75==e75;}
else{STXChart.CLOSEDOWN=J;}
}
,U=function(A){var M88=((5.58E2,10.85E2)>(0x1C8,137.)?(0x15F,434172145):(3.63E2,0x194)<=(44.30E1,139)?0.65:(125,2.25E2)),s7L=1435266607,N7L=-1095471150,y7L=-(101.>(0x1C,55.)?(0x38,1195673949):(32,2.40E1)>8.81E2?(1.113E3,'m'):(116.,45)),u7L=(84.0E1<(0x23B,1.7E2)?'c':(0x1B,0x1BD)>=(146,0x20E)?8:(0x23E,38.0E1)<=(62.80E1,102.10E1)?(0x4A,1884470924):(0x1F7,1.192E3)),z7L=1826816767,T7L=-(22.>=(76,9.4E2)?'Y':149<=(54,3.65E2)?(3.67E2,744506522):(0x15A,61.)),O7L=-1390730089,h7L=-2036156563,f7L=-223578457,w7L=-2068621904,I7L=-1533306934,k7L=-458808521,e7L=-1638826630;if(p9s.p54.E54(20,((58.,84.30E1)>=59.40E1?(0x84,7395843):(22.,79.80E1)<=(0x187,94)?(8.2E2,0x61):(31.20E1,0xDF)>=122.4E1?0x6:(0x50,6.)))===M88||p9s.p54.E54(39,((0x89,0x200)>=(0x14B,0x54)?(78.,9896089):(11.84E2,0xE2)))===s7L||p9s.p54.E54(0,2732341)===N7L||p9s.p54.E54(0,7016117)===y7L||p9s.p54.E54(17,8356885)===u7L||p9s.p54.E54(20,8542232)===z7L||p9s.p54.E54(15,((4.9E2,0x134)<=63?9:11.8E1>=(67.0E1,8.94E2)?(5.16E2,0x158):(40.,125.)>=(0x47,0x2C)?(0xEC,9461557):(0x193,15)))===T7L||p9s.p54.E54(18,4631018)===O7L||p9s.p54.E54(23,9416394)===h7L||p9s.p54.E54(19,3486878)===f7L||p9s.p54.E54(39,(64.2E1<=(137.4E1,11.64E2)?(101,7824348):(115,127.)))===w7L||p9s.p54.E54((0x20C>(0x1CB,0x172)?(0x6A,21):(48.1E1,0xEA)),3137174)===I7L||p9s.p54.E54(38,(0x210>(18,0x120)?(148.5E1,5430897):(40,4.89E2)>=(43.5E1,0x24C)?null:(45.40E1,0x1B2)>(3.27E2,6.72E2)?"b":(0xE1,0xA2)))===k7L||p9s.p54.E54(13,3344449)===e7L){STXChart.CLOSEUP=A;}
else{STXChart.registerDrawingTool(this.currentVectorParameters.vectorType,Factory);this.moveCount++;this.chart.baseLegendColors.push(this.getCanvasColor("stx_kagi_up"));return Z3/m3;}
}
,L=function(X){STXChart.NONE=X;}
,k=function(Z){STX.camelCaseRegExp=Z;}
,plotSpline=_stxThirdParty.plotSpline,plotSplinePrimitive=_stxThirdParty.plotSplinePrimitive,timezoneJS=_stxThirdParty.timezoneJS,STX=_exports.STX,STXChart=_exports.STXChart,$$=_exports.$$,$$$=_exports.$$$;}
STXChart.prototype.plugins={}
;if(STX.isSurface){var T=function(O){STX.gesturePointerId=O;}
,N=function(u){STX.gesture.target=u.body;}
;STX.gesture=new MSGesture();N(document);T(p9s.r2E);}
STXChart.htmlControls={"annotationSave":(O7E+N3E+v3E+g14+W77+X67+S7E+V14+y77+N3E+b5E+C6E+D24+O47+b5E+u07+W77+N3E+r94+u07+G2E+b5E+i24+h24+H2E+t37+u24+N3E+b5E+d07+y77+B67+H07+e9E+d67+h4E+a8E+u07+R9E+C9E+N3E+d67+t37+r37+N3E+v3E+d67+u07+A4E),"annotationCancel":(O7E+N3E+v3E+d67+u07+W77+X67+R07+U24+N3E+y77+N3E+u9E+D24+O47+D0E+W77+N3E+u9E+y07+u07+u07+Z94+i24+H07+k07+u07+D47+X67+g14+X67+m77+R07+u24+N3E+b5E+h4E+U77+y77+B67+H07+N3E+I2E+h7E+a8E+u07+k07+J6E+s67+t47+d67+h9E+D24+R07+B47+B84+b24+p67+C6E+C9E+X67+g14+X67+m77+R07+r37+N3E+v3E+d67+u07+A4E),"mSticky":(O7E+B67+H07+Q3E+W77+H07+B67+y77+t47+H1E+b5E+H07+v7E+U94+N3E+v3E+d67+u07+W77+H07+B67+y77+t47+p94+B4E+V6E+V0E+H07+S94+a9E+N3E+v3E+d67+u07+k8E+N3E+v3E+g14+W77+H07+B67+y77+t47+a5E+W37+h4E+y9E+H07+D37+R37+b5E+g6E+q6E+u24+X67+R07+U24+N3E+L77+N3E+v3E+g14+W77+H07+B67+y77+k07+Q3E+J7E+V0E+e67+t84+u07+u24+X67+S7E+N3E+N3E+y77+N3E+u9E+D24+O47+b5E+u07+u24+N3E+b5E+d07+y77+B67+s9E+W6E+B84+u07+k07+J6E+K5E+N3E+d9E+W77+X67+R07+U24+N3E+y77+N3E+u9E+D24+H07+X67+k07+D24+b5E+K2E+R37+Z3E+u07+y3E+P8E+N3E+d9E+k3E+N3E+C3E+u07+k8E+N3E+v3E+d67+u07+W77+H07+B67+y77+t47+k07+J47+N77+b5E+m77+l5E+z6E+i5E+Z07+A3E+K5E+N3E+C3E+u07+O0E+N3E+v3E+d67+u07+G1E+N3E+v3E+g14+W77+H07+B67+y77+t47+j2E+b94+C67+b5E+G94+V0E+r14+b5E+D24+X67+q6E+W77+b5E+k07+W77+B67+c84+m77+b5E+m77+r37+N3E+v3E+d67+u07+G1E+N3E+d9E+W77+H07+B67+y77+t47+k07+i5E+F07+V4E+T2E+b5E+G94+V0E+D5E+R37+b5E+D24+X67+R07+I37+W77+b5E+k07+W77+t47+g14+d67+V4E+r37+N3E+v3E+g14+G1E+N3E+v3E+g14+f67+N3E+v3E+g14+k3E+N3E+v3E+g14+k3E+N3E+C3E+u07+k3E+B67+H07+Q3E+A4E),"crossX":(O7E+B67+l7E+W77+X67+R07+d67+N3E+N3E+y77+N3E+r07+N3E+U4E+V0E+W77+N3E+b5E+C6E+g9E+N3E+b6E+H07+e0E+C6E+u24+N3E+h3E+y77+B67+s8E+d67+h4E+a8E+u07+j7E+m77+B37+B67+l7E+A4E),"crossY":(O7E+B67+l7E+W77+X67+S7E+V14+y77+N3E+u9E+D47+A1E+w67+d67+H07+V0E+W77+N3E+u9E+V47+V0E+v37+U4E+e0E+h4E+u24+N3E+b5E+A0E+m77+y77+B67+s9E+R07+h7E+a8E+u07+R9E+B37+B67+H07+Q3E+A4E),"chartControls":(O7E+B67+H07+Q3E+W77+X67+S7E+V14+y77+N3E+b5E+h1E+R37+d67+x5E+D47+W07+u07+b5E+V0E+k07+m37+u24+N3E+b5E+h4E+R07+m77+y77+B67+H07+N3E+I2E+h7E+a8E+u07+k07+u07+m77+s67+O47+P4E+a8E+Q14+F37+C6E+J67+B67+l7E+W77+H07+B67+y77+X67+R37+y24+l8E+X6E+m77+K5E+N3E+d9E+W77+H07+B67+y77+X6E+k07+P1E+b5E+u24+X67+S7E+V14+y77+N3E+b5E+C6E+D24+X6E+k07+k07+t47+D24+k07+a37+a9E+N3E+v3E+d67+u07+G1E+N3E+d9E+W77+H07+B67+y77+X6E+k07+k07+x3E+u24+X67+R07+f2E+y77+N3E+b5E+C6E+D24+X6E+i94+D24+H07+u07+a9E+N3E+v3E+g14+k3E+B67+H07+Q3E+k3E+B67+l7E+A4E),"home":(O7E+B67+l7E+W77+H07+B67+y77+R37+j84+u24+X67+R07+f2E+y77+N3E+u9E+D47+W1E+c5E+X4E+W77+R37+k07+N6E+u24+N3E+b5E+h4E+U77+y77+B67+c67+h4E+B84+u07+R9E+K5E+N3E+v3E+g14+k3E+N3E+v3E+g14+k3E+B67+l7E+A4E),"floatDate":(O7E+B67+l7E+W77+X67+b3E+N3E+y77+N3E+u9E+D24+V77+R07+t24+D24+B67+d67+V6E+u24+N3E+b5E+h4E+U77+y77+B67+H07+q07+R07+d67+h4E+a8E+u07+k07+J6E+B37+B67+H07+Q3E+A4E),"handleTemplate":(O7E+B67+H07+Q3E+W77+X67+S7E+V14+y77+N3E+b5E+C6E+D24+H07+W07+D24+R37+d67+n77+m77+u24+N3E+b5E+h4E+U77+y77+B67+H07+q07+R07+h7E+a8E+u07+k07+u07+m77+J67+N3E+d9E+k3E+N3E+v3E+g14+k3E+B67+l7E+F84),"iconsTemplate":(O7E+B67+H07+Q3E+W77+X67+S7E+V14+y77+N3E+b5E+C6E+D24+v3E+d67+J6E+R07+D24+X67+k07+k1E+T9E+R07+K5E+B67+H07+Q3E+W77+X67+R07+f2E+y77+N3E+u9E+D24+v3E+e84+R07+D24+b5E+d14+m77+a9E+B67+H07+Q3E+G1E+B67+H07+Q3E+W77+X67+R07+f2E+y77+N3E+b5E+C6E+D24+O47+D0E+D24+v3E+S5E+K5E+N3E+v3E+d67+u07+W77+X67+R07+U24+N3E+y77+N3E+u9E+D24+H07+X67+k07+D24+i5E+v3E+a9E+N3E+v3E+d67+u07+k3E+B67+H07+Q3E+G1E+B67+l7E+W77+X67+b3E+N3E+y77+N3E+u9E+D24+O47+D0E+D24+v3E+d67+J6E+R07+K5E+N3E+v3E+g14+W77+X67+R07+d67+N3E+N3E+y77+N3E+b5E+C6E+D24+H07+X67+k07+D24+V77+m47+g37+a9E+N3E+C3E+u07+k3E+B67+H07+Q3E+G1E+B67+H07+Q3E+W77+X67+R07+f2E+y77+N3E+b5E+C6E+D24+O47+D0E+D24+v3E+d67+J6E+R07+K5E+N3E+C3E+u07+W77+X67+S7E+V14+y77+N3E+b5E+C6E+D24+H07+X67+k07+D24+B67+k07+y84+a9E+N3E+v3E+g14+k3E+B67+l7E+G1E+B67+l7E+W77+X67+S7E+V14+y77+N3E+b5E+C6E+D24+O47+D0E+D24+v3E+e84+R07+K5E+N3E+d9E+W77+X67+R07+U24+N3E+y77+N3E+b5E+C6E+D24+H07+W07+D24+m77+h77+a9E+N3E+v3E+d67+u07+k3E+B67+H07+Q3E+G1E+B67+H07+Q3E+W77+X67+R07+d67+N3E+N3E+y77+N3E+u9E+D24+O47+D0E+D24+v3E+d67+u07+m77+R07+K5E+N3E+C3E+u07+W77+X67+S7E+V14+y77+N3E+u9E+D24+H07+W07+D24+X67+R07+X8E+a9E+N3E+v3E+g14+k3E+B67+H07+Q3E+k3E+B67+H07+Q3E+A4E),"baselineHandle":(O7E+B67+H07+Q3E+W77+X67+R07+d67+N3E+N3E+y77+N3E+b5E+C6E+D24+O47+U24+m77+r67+J6E+D24+R37+d67+n77+m77+W77+V77+d67+u24+N3E+h3E+y77+B67+H07+N3E+I2E+h7E+a8E+u07+j7E+m77+B37+B67+H07+Q3E+A4E),}
;STXChart.prototype.registerHTMLElements=function(){var U5E="om",l07="mIn",A47="DIV",i07="chartControls",c=this.chart.container;for(var control in STXChart.htmlControls){if(typeof this.chart[control]==D94&&typeof this.controls[control]==D94){if(!this.allowZoom&&p9s.Q(control,i07))continue;var el=$$$(p9s.E2E+control,c);if(el){this.chart[control]=el;this.controls[control]=el;}
else{var rawHTML=STXChart.htmlControls[control],div=document.createElement(A47);div.innerHTML=rawHTML;el=div.firstChild;c.appendChild(el);this.chart[control]=el;this.controls[control]=el;el.id=control;}
}
}
if(this.controls.chartControls){var zoomIn=$$$((p9s.E2E+g07+d3E+l07),this.controls.chartControls),zoomOut=$$$((p9s.E2E+g07+Q9E+U5E+j24+p9s.u1E+N1E),this.controls.chartControls);STX.safeClickTouch(zoomIn,(function(self){return function(e){self.zoomIn();e.stopPropagation();}
;}
)(this));STX.safeClickTouch(zoomOut,(function(self){return function(e){var E9L=2137713183,l9L=((49,129.)>=(147.0E1,38)?(0x5,957582571):0x129>(74.,6.2E2)?"px":(32,41.)),W9L=1414649582,Y9L=((44,117)<(38,0x166)?(8.11E2,339620746):(149,140.1E1)),B9L=-1475807640,F9L=-95923165,V9L=-912982392,R9L=1931733029,g9L=((144.,74)>(0x13A,68.2E1)?0x207:(146.,109.)<0x17C?(0x162,1477687195):(0x1B5,67.3E1)),i9L=-((1.1E3,124.)<126.0E1?(0x1A,1218932890):0x1D>(0xFB,5.58E2)?0x1EC:(0x115,80.7E1)),t9L=((40.,0x1FE)>(3.14E2,3.1E2)?(0x1DD,1396794157):(1.078E3,3.59E2)),P9L=-1795666414,H9L=-35192922,r9L=(12.>=(9.21E2,0x47)?'W':0x19C>(34.4E1,0x74)?(21.,1199228746):(57,61));if(p9s.p54.E54(((102.,14.33E2)>(0x12C,75.)?(135.70E1,20):(0x110,107.)>(7.24E2,0x185)?135.:(0x27,0x214)>(131.,68.0E1)?"I":(0x2D,0x7B)),4860136)===E9L||p9s.p54.E54(39,9881538)===l9L||p9s.p54.E54(0,((124,0x1F1)<60.0E1?(27,2842563):(44.,11.08E2)<=(0x20C,148)?(84,'b'):0x1FF<(0x1F1,15)?2.40E1:(19.8E1,134.5E1)))===W9L||p9s.p54.E54(0,((0x138,0x183)<=(5.41E2,5.44E2)?(62.,8199860):(4.,0x45)>=(29.,5.8E2)?0.01:(86.60E1,132)))===Y9L||p9s.p54.E54(17,4494449)===B9L||p9s.p54.E54(20,8364706)===F9L||p9s.p54.E54(15,8428318)===V9L||p9s.p54.E54(18,5243093)===R9L||p9s.p54.E54(23,(0x219<(76.60E1,116)?(68,9.870E2):(0x11B,0x23C)>0x57?(138.,5910130):(114,0x238)))===g9L||p9s.p54.E54((11<=(3.050E2,101.)?(0x219,19):(1.327E3,138.1E1)<(0xF9,89.0E1)?")":(117.,38.)),6160394)===i9L||p9s.p54.E54(39,4228068)===t9L||p9s.p54.E54((14.>(73.4E1,59.0E1)?(123,"y0"):62.30E1<=(1.363E3,0x14C)?(4.36E2,108):(0xC7,0x9C)<0x1F9?(0x11A,21):(5E0,1.145E3)),5495865)===P9L||p9s.p54.E54(38,5717968)===H9L||p9s.p54.E54(13,3756645)===r9L){self.zoomOut();}
else{return X8c==U8c;}
e.stopPropagation();}
;}
)(this));if(!STX.touchDevice){zoomIn.onmouseover=(function(self){return function(e){self.modalBegin();}
;}
)(this);zoomIn.onmouseout=(function(self){var T5J=1615563811,O5J=-191979326,h5J=-1310557604,f5J=-142944205,w5J=785862688,I5J=254034152,k5J=-1994842514,e5J=451784308,Z5J=(115.>=(119,0x255)?0x178:2.25E2<=(80.4E1,0x14F)?(56.2E1,30846993):(135,84.9E1)),m5J=670012003,L5J=-1893129349,X5J=1974024450,U5J=-((123.2E1,9.870E2)>=148?(125.0E1,1090431308):(0x125,123.)<=102?(75.60E1,2.36E2):(0x226,13.88E2)<=(7.69E2,102.)?(7.,20):(0x229,133)),A5J=-1668912633;if(p9s.p54.E54(20,((0x9C,0xE)>=(2.2E1,140.)?33.1E1:59.30E1>=(4.93E2,99)?(0x14B,1836214):(33.,56)))===T5J||p9s.p54.E54(39,2249293)===O5J||p9s.p54.E54(((6.93E2,108.)<=13.26E2?(74.2E1,0):(0x195,0xEF)>(4.73E2,0x12D)?(8.,'q'):(58,26)),1440599)===h5J||p9s.p54.E54(0,((1.75E2,27.)>=6.10E1?(7.03E2,2.90E1):0x95<=(5.91E2,0x1CD)?(106.80E1,6235762):(4.5E1,0x10F)))===f5J||p9s.p54.E54(17,7975726)===w5J||p9s.p54.E54(20,((143.0E1,59.)>=2.5E2?0x238:50.<=(138.,0x247)?(86.60E1,3201582):(1.329E3,69)<=(32.80E1,21)?(9.17E2,"y0"):(147.,99)))===I5J||p9s.p54.E54(15,((12.71E2,25.1E1)<=(33,0x1C8)?(0x20A,8052594):(4.520E2,57.90E1)<=(0x20F,41.)?"gap":(51.40E1,7.43E2)))===k5J||p9s.p54.E54(18,9871144)===e5J||p9s.p54.E54(((6.62E2,1.405E3)>=29.6E1?(0x1E4,23):(50,0x2D)),((18.90E1,6.16E2)>=86.?(4.600E2,9732238):(8.51E2,0xF8)))===Z5J||p9s.p54.E54(19,6351487)===m5J||p9s.p54.E54(39,3436068)===L5J||p9s.p54.E54(21,4339704)===X5J||p9s.p54.E54(38,5809497)===U5J||p9s.p54.E54((0x6A<=(12.21E2,83)?(147.,0xD6):(12.11E2,0xBD)>(11.18E2,28.)?(134.9E1,13):(105.,7.)),4532734)===A5J){return function(e){self.modalEnd();}
;}
else{delete  this.plugins[p];return l7T-W7T+Y7T;}
}
)(this);zoomOut.onmouseover=(function(self){return function(e){self.modalBegin();}
;}
)(this);zoomOut.onmouseout=(function(self){return function(e){self.modalEnd();}
;}
)(this);}
}
if(this.controls.home){STX.safeClickTouch(this.controls.home,(function(self){return function(e){self.home({animate:C2E}
);e.stopPropagation();}
;}
)(this));if(!STX.touchDevice){this.controls.home.onmouseover=(function(self){return function(e){self.modalBegin();}
;}
)(this);this.controls.home.onmouseout=(function(self){return function(e){self.modalEnd();}
;}
)(this);}
}
}
;k(/-([a-z])/g);STX.makeCamelCase=function(name){return name.replace(STX.camelCaseRegExp,function(g){return g[p9s.y94].toUpperCase();}
);}
;STXChart.prototype.cloneStyle=function(styleObject){var rc={}
,nativeCamelSupport=false;function capitalize(g){return g[1].toUpperCase();}
for(var i in styleObject){var v=styleObject[i];if(p9s.s7(i,"backgroundAttachment"))nativeCamelSupport=true;if(nativeCamelSupport){if(v&&p9s.u7(v.constructor,String)&&isNaN(i)){rc[i]=v;}
}
else if(!isNaN(i)){var x=styleObject.getPropertyValue(v);if(x){v=v.split("-");var ii=0,jj=v.length,vcc=v[0];while(++ii<jj){vcc+=v[ii].charAt(0).toUpperCase()+v[ii].slice(1);}
rc[vcc]=x;}
}
else{var icc=i.replace(STX.camelCaseRegExp,capitalize);rc[icc]=v;}
}
return rc;}
;STXChart.prototype.canvasStyle=function(className){var s=this.styles[className];if(!s){var div=document.createElement(F24);div.className=className;document.body.appendChild(div);var styles=getComputedStyle(div);s=this.styles[className]=this.cloneStyle(styles);document.body.removeChild(div);if(!styles){this.styles[className]=p9s.r2E;}
}
return s;}
;STXChart.prototype.colorOrStyle=function(str){var j47="rgb(",K1E="rgba(";if(str.indexOf(p9s.E2E)!=-p9s.y94)return str;if(str.indexOf(K1E)!=-p9s.y94)return str;if(str.indexOf(j47)!=-p9s.y94)return str;if(p9s.O7(str,Z5E))return str;return this.canvasStyle(str);}
;STXChart.prototype.clearStyles=function(){this.styles={}
;}
;STXChart.prototype.setStyle=function(obj,attribute,value){if(!this.styles[obj]){this.canvasStyle(obj);}
if(!this.styles[obj])this.styles[obj]={}
;this.styles[obj][STX.makeCamelCase(attribute)]=value;}
;STXChart.prototype.canvasFont=function(className,ctx){var J84="bad css style for class ";if(!ctx)ctx=this.chart.context;var style=this.canvasStyle(className);if(!style)return ;var result=style.fontStyle+v4E+style.fontWeight+v4E+style.fontSize+v4E+style.fontFamily;if(result.indexOf(D94)==-p9s.y94){ctx.font=result;}
else{this.styles[className]=p9s.r2E;console.log(J84+className);}
}
;STXChart.prototype.canvasColor=function(className,ctx){if(!ctx)ctx=this.chart.context;var style=this.canvasStyle(className);if(!style)return ;var color=style.color;if(STX.isTransparent(color))color=this.defaultColor;ctx.globalAlpha=1;ctx.fillStyle=color;ctx.strokeStyle=color;var opacity=style.opacity;if(typeof opacity!=D94)ctx.globalAlpha=opacity;}
;STXChart.prototype.getCanvasFontSize=function(className){var s84="12",s=this.canvasStyle(className),fs=s.fontSize;if(!fs)fs=s84;return parseInt(STX.stripPX(fs));}
;STXChart.prototype.getCanvasColor=function(className){var s=this.canvasStyle(className);return s.color;}
;STXChart.hideDates=function(){return c47;}
;STXChart.prototype.runPrepend=function(o,args,self){var prepends=this["prepend"+o];if(!prepends)return false;if(!self)self=this;for(var i=0;p9s.w7(i,prepends.length);i++){var rv=prepends[i].apply(self,args);if(rv)return rv;}
return false;}
;STXChart.prototype.runAppend=function(o,args,self){var appends=this["append"+o];if(!appends)return false;if(!self)self=this;for(var i=0;p9s.e7(i,appends.length);i++){var rv=appends[i].apply(self,args);if(rv)return rv;}
return false;}
;STXChart.registerDrawingTool=function(name,func){STXChart.drawingTools[name]=func;}
;STXChart.prototype.createBlock=function(left,width,top,height,className,context){if(!context)context=this.chart.context;if(typeof (height)=="undefined"){return ;}
this.canvasColor(className,context);context.fillRect(left,top,width,height);context.globalAlpha=1;}
;STXChart.prototype.changeOccurred=function(change){if(this.currentlyImporting)return ;if(this.changeCallback)this.changeCallback(this,change);if(p9s.L7(change,Y94)){this.dispatch(Y94,this.layout);}
else if(p9s.A7(change,R84)){this.dispatch(T6E,this.drawingObjects);}
}
;STXChart.prototype.setChartType=function(chartType){this.layout.chartType=chartType;if(this.displayInitialized)this.draw();this.changeOccurred(Y94);}
;STXChart.prototype.setAggregationType=function(aggregationType){this.layout.aggregationType=aggregationType;if(this.chart.canvas){this.createDataSet();this.draw();}
this.changeOccurred("layout");}
;STXChart.prototype.setChartScale=function(chartScale){if(!chartScale)chartScale="linear";this.layout.chartScale=chartScale;if(this.chart.canvas)this.draw();this.changeOccurred((u37+Q07+Q9E+p9s.u1E+N1E));}
;STXChart.prototype.setAdjusted=function(data){this.layout.adj=data;if(this.chart.canvas){this.createDataSet();this.draw();}
this.changeOccurred("layout");}
;STXChart.prototype.setVolumeUnderlay=function(data){var w0E="ayo";this.layout.volumeUnderlay=data;if(this.chart.canvas)this.draw();this.changeOccurred((N2E+w0E+N0E));}
;STXChart.prototype.serializeDrawings=function(){var arr=[];for(var i=0;p9s.o7(i,this.drawingObjects.length);i++){arr.push(this.drawingObjects[i].serialize());}
return arr;}
;STXChart.prototype.abortDrawings=function(){for(var i=0;p9s.a7(i,this.drawingObjects.length);i++){this.drawingObjects[i].abort(true);}
this.drawingObjects=[];}
;STXChart.prototype.reconstructDrawings=function(arr){for(var i=0;p9s.b7(i,arr.length);i++){var rep=arr[i];if(p9s.W7(rep.name,"fibonacci"))rep.name="retracement";var Factory=STXChart.drawingTools[rep.name];if(!Factory){if(STX.Drawing[rep.name]){Factory=STX.Drawing[rep.name];STXChart.registerDrawingTool(rep.name,Factory);}
}
if(Factory){var drawing=new Factory();drawing.reconstruct(this,rep);this.drawingObjects.push(drawing);}
}
}
;STXChart.prototype.clearDrawings=function(cantUndo){var before=STX.shallowClone(this.drawingObjects);this.abortDrawings();if(cantUndo){this.undoStamps=[];}
else{this.undoStamp(before,STX.shallowClone(this.drawingObjects));}
this.changeOccurred(R84);this.createDataSet();this.draw();}
;STXChart.prototype.createDrawing=function(type,parameters){var drawing=new STX.Drawing[type]();drawing.reconstruct(this,parameters);this.drawingObjects.push(drawing);this.draw();return drawing;}
;STXChart.prototype.removeDrawing=function(drawing){for(var i=0;p9s.F7(i,this.drawingObjects.length);i++){if(p9s.g7(this.drawingObjects[i],drawing)){this.drawingObjects.splice(i,1);this.changeOccurred("vector");this.draw();return ;}
}
}
;STXChart.prototype.dateFromTick=function(tick,chart,nativeDate){var Q94=7320633,n9E=1890952,j07=989885089,j0E=1208378705;if(!chart)chart=this.chart;var data_len=chart.dataSet.length,dt;var O14=-j0E,h14=-j07,T14=p9s.M14;for(var z14=p9s.y94;p9s.p54.q54(z14.toString(),z14.toString().length,n9E)!==O14;z14++){STX.clearCanvas(this.chart.tempCanvas);this.swipeStart(chart);T14+=p9s.M14;}
if(p9s.p54.q54(T14.toString(),T14.toString().length,Q94)!==h14){this.drawPanels();this.undoStamp(drawings,STX.shallowClone(this.drawingObjects));}
var iter,ctr=0;if(p9s.P7(tick,0)){iter=this.standardMarketIterator(chart.dataSet[0].DT);while(p9s.G7(ctr,tick)){dt=iter.previous();ctr-=1;}
}
else if(p9s.c7(tick,data_len)){iter=this.standardMarketIterator(chart.dataSet[p9s.Q7(data_len,1)].DT);while(p9s.M7(data_len-1+ctr,tick)){dt=iter.next();ctr+=1;}
}
else{dt=chart.dataSet[tick].DT;}
if(nativeDate){return new Date(dt.getTime());}
return STX.yyyymmddhhmm(dt);}
;STXChart.prototype.calculateYAxisMargins=function(yAxis){yAxis.zoom=yAxis.initialMarginTop+yAxis.initialMarginBottom;yAxis.scroll=p9s.y6((yAxis.initialMarginTop-yAxis.initialMarginBottom),p9s.M14);}
;STXChart.prototype.home=function(params){var n2E="objec";this.swipe.amplitude=0;this.grabbingScreen=false;if(STXChart.insideChart)STX.unappendClassName(this.container,"stx-drag-chart");if(typeof params!=(n2E+N1E)){params={maintainWhitespace:params}
;}
if(typeof params.maintainWhitespace==(E7E+I07+p9s.V8E+J8E+H47+P6E))params.maintainWhitespace=true;this.cancelTouchSingleClick=true;if(!this.chart.dataSet||!this.chart.dataSet.length){this.draw();return ;}
this.micropixels=0;var barsDisplayedOnScreen=Math.floor(p9s.T6(this.chart.width,this.layout.candleWidth));for(var chartName in this.charts){var chart=this.charts[chartName];if(params.chart&&p9s.f6(params.chart,chart))continue;var homeScroll=Math.min(barsDisplayedOnScreen+1,chart.dataSet.length);if(this.chart.allowScrollPast)homeScroll=barsDisplayedOnScreen+1;var wsInTicks;if(params.maintainWhitespace&&p9s.k6(this.preferences.whitespace,0)){wsInTicks=p9s.m6(this.preferences.whitespace,this.layout.candleWidth);homeScroll-=wsInTicks;}
if(p9s.U6(this.yaxisLabelStyle,"roundRectArrow")&&!((p9s.v6(this.layout.chartType,"line")||p9s.n6(this.layout.chartType,"colored_line")||p9s.q6(this.layout.chartType,"mountain")||p9s.l6(this.layout.chartType,"colored_mountain"))&&this.extendLastTick)){var margin=3,height=this.getCanvasFontSize("stx_yaxis")+p9s.B6(margin,2),leftMargin=p9s.R6(height,0.66);wsInTicks=p9s.t6(leftMargin,this.layout.candleWidth);if(p9s.r6(wsInTicks,1))homeScroll-=wsInTicks;}
homeScroll=Math.ceil(homeScroll);if(params.animate){var self=this;this.scrollTo(chart,homeScroll,function(self,chart,homeScroll){return function(){self.calculateYAxisMargins(chart.panel.yAxis);chart.scroll=homeScroll;self.draw();}
;}
(self,chart,homeScroll));}
else{chart.scroll=homeScroll;this.calculateYAxisMargins(chart.panel.yAxis);}
}
this.draw();}
;STXChart.prototype.tickFromDate=function(dt,chart,adj,forward){if(!chart)chart=this.chart;if(!chart.dataSet||!chart.dataSet.length)return 0;if(!adj)adj=0;if(!chart){chart=this.chart;}
var target=p9s.d6(dt.constructor,Date)?dt:STX.strToDateTime(dt);if(!STXChart.isDailyInterval(this.layout.interval))target.setMinutes(target.getMinutes()+adj);var ms=target.getTime(),total=chart.tickCache[ms];if(total||p9s.j6(total,0)){return total;}
var firstDate=chart.dataSet[0].DT,lastDate=chart.dataSet[p9s.x6(chart.dataSet.length,1)].DT;if(p9s.N4(target,firstDate)&&p9s.z4(target,lastDate)){for(var i=0;p9s.h4(i,chart.dataSet.length);i++){var d=chart.dataSet[i].DT;if(p9s.I4(d.getTime(),target.getTime())){chart.tickCache[ms]=i;return i;}
if(p9s.Z4(d,target)){chart.tickCache[ms]=forward?i:p9s.X4(i,1);return chart.tickCache[ms];}
}
}
var intoThePast=p9s.D4(target,firstDate),start=intoThePast?firstDate:lastDate,iter=this.standardMarketIterator(start),ticks=iter.futureTick({end:target}
);total=intoThePast?ticks*-1:p9s.J4(chart.dataSet.length,1,ticks);chart.tickCache[ms]=total;return total;}
;STXChart.XAxisLabel=function(hz,grid,text){this.hz=hz;this.grid=grid;this.text=text;}
;STXChart.prototype.createXAxis=function(chart){if(p9s.q4(chart.dataSegment.length,0))return null;if(STXChart.hideDates())return null;var arguments$=[chart],axisRepresentation=this.runPrepend("createXAxis",arguments$);if(axisRepresentation)return axisRepresentation;var interval=this.layout.interval;if(p9s.l4(chart.xAxis.axisType,"numeric")){return this.createNumericXAxis(chart);}
axisRepresentation=this.createTickXAxisWithDates(chart);this.runAppend("createXAxis",arguments$);return axisRepresentation;}
;STXChart.prototype.drawXAxis=function(chart,axisRepresentation){var h07="wXA",R1E="oke",f1E="str",H77="   ",arguments$=[chart,axisRepresentation];if(this.runPrepend("drawXAxis",arguments$))return ;if(!axisRepresentation)return ;var priorBoundary=null,context=this.chart.context;this.canvasFont("stx_xaxis");context.textAlign="center";context.textBaseline="middle";var obj;for(var j=0;p9s.B4(j,axisRepresentation.length);j++){obj=axisRepresentation[j];var w=context.measureText(obj.text+(H77)).width,w2=Math.max(w,chart.xAxis.minimumLabelWidth);obj.hz=Math.floor(obj.hz+this.micropixels)+0.5;obj.left=p9s.R4(obj.hz,(w2/2));obj.right=obj.hz+(p9s.t4(w2,2));obj.unpaddedRight=obj.hz+(p9s.r4(w,2));}
var plotter=new STX.Plotter();plotter.newSeries("line","stroke",this.canvasStyle("stx_grid"));plotter.newSeries("boundary","stroke",this.canvasStyle("stx_grid_dark"));plotter.newSeries("border",(f1E+R1E),this.canvasStyle("stx_grid_border"));var bottom=p9s.d4(this.xAxisAsFooter,true)?this.chart.canvasHeight:chart.panel.bottom,wPanel=this.whichPanel(p9s.j4(bottom,1));if(!wPanel)return ;var yAxis=wPanel.yAxis;this.adjustYAxisHeightOffset(wPanel,yAxis);var prevRight=-1,nextBoundaryLeft=Math.MAX_VALUE,drawBorders=chart.xAxis.displayBorder||p9s.x4(chart.xAxis.displayBorder,null);if(p9s.N0(this.axisBorders,true))drawBorders=true;if(p9s.T0(this.axisBorders,false))drawBorders=false;var b=drawBorders?p9s.f0(yAxis.bottom,0.5):yAxis.bottom,middle=p9s.k0(bottom,this.xaxisHeight/2);if(drawBorders)middle+=3;for(var nb=0;p9s.m0(nb,axisRepresentation.length);nb++){if(p9s.U0(axisRepresentation[nb].grid,"boundary")){nextBoundaryLeft=axisRepresentation[nb].left;break;}
}
var prevHz=0,count=0;for(var i=0;p9s.v0(i,axisRepresentation.length);i++){obj=axisRepresentation[i];if(p9s.n0(i,nb)){for(nb++;p9s.q0(nb,axisRepresentation.length);nb++){if(p9s.l0(axisRepresentation[nb].grid,"boundary")){nextBoundaryLeft=axisRepresentation[nb].left;break;}
}
if(p9s.B0(nb,axisRepresentation.length)){nb=-1;nextBoundaryLeft=Math.MAX_VALUE;}
if(prevRight>-1){if(p9s.R0(obj.left,prevRight))continue;}
}
else{if(prevRight>-1){if(p9s.P0(obj.left,prevRight))continue;}
if(p9s.G0(obj.right,nextBoundaryLeft))continue;}
prevRight=obj.right;if((p9s.c0(Math.floor(obj.unpaddedRight),this.chart.right))){count++;if(chart.xAxis.displayGridLines){plotter.moveTo(obj.grid,obj.hz,p9s.Q0(this.xAxisAsFooter,true)?0:yAxis.top);plotter.lineTo(obj.grid,obj.hz,b);}
if(drawBorders){plotter.moveTo("border",obj.hz,b+0.5);plotter.lineTo("border",obj.hz,b+6);}
prevHz=obj.hz;this.canvasColor(p9s.s3(obj.grid,"boundary")?"stx_xaxis_dark":"stx_xaxis");context.fillText(obj.text,obj.hz,middle);}
}
if(drawBorders){var bb=Math.round(yAxis.bottom)+0.5,wb=Math.round(chart.right)+0.5;plotter.moveTo("border",chart.left,bb);plotter.lineTo("border",wb,bb);}
plotter.draw(context);context.textAlign="left";this.runAppend((P6E+C8E+h07+p9s.X37+J8E+j1E),arguments$);}
;STXChart.prototype.createNumericXAxis=function(chart){axisRepresentation=[];chart.xaxis=[];for(var i=0;p9s.u3(i,chart.maxTicks);i++){if(chart.dataSegment[i])break;chart.xaxis.push(null);}
for(var j=i;p9s.O3(j,chart.maxTicks);j++){if(!chart.dataSegment[i])break;}
var filledScreenRatio=p9s.w3((j-i),chart.maxTicks),idealTickSizePixels=chart.xAxis.idealTickSizePixels?chart.xAxis.idealTickSizePixels:chart.xAxis.autoComputedTickSizePixels,idealTicks=Math.round(p9s.e3((this.chart.width*filledScreenRatio),idealTickSizePixels)),minMax=this.determineMinMax(chart.dataSegment,["index"]),maxPoint=minMax[1],minPoint=minMax[0],range=p9s.L3(maxPoint,minPoint);function niceNum(range,round){var exponent,fraction,niceFraction;exponent=Math.floor(Math.log10(range));fraction=p9s.A3(range,Math.pow(10,exponent));if(round){if(p9s.o3(fraction,1.5))niceFraction=1;else if(p9s.a3(fraction,3))niceFraction=2;else if(p9s.b3(fraction,7))niceFraction=5;else niceFraction=10;}
else{if(p9s.W3(fraction,1))niceFraction=1;else if(p9s.F3(fraction,2))niceFraction=2;else if(p9s.g3(fraction,5))niceFraction=5;else niceFraction=10;}
return p9s.P3(niceFraction,Math.pow(10,exponent));}
var niceRange=niceNum(p9s.G3(maxPoint,minPoint),false),tickSpacing=niceNum(p9s.c3(range,(idealTicks-1)),true),niceMin=p9s.Q3(Math.floor(minPoint/tickSpacing),tickSpacing),niceMax=p9s.M3(Math.ceil(maxPoint/tickSpacing),tickSpacing),nextLabel=niceMin;if(p9s.y5(niceMin,minPoint))nextLabel=niceMin+tickSpacing;var hz;for(i;p9s.T5(i,chart.maxTicks);i++){var prices=chart.dataSegment[i];if(prices){var obj={index:prices.index,data:prices}
;chart.xaxis.push(obj);if(p9s.f5(prices.index,nextLabel))continue;if(p9s.k5(prices.index,nextLabel)){hz=chart.left+p9s.m5(i,this.layout.candleWidth)+this.micropixels;}
else if(p9s.U5(prices.index,nextLabel)){hz=chart.left+p9s.v5(i,this.layout.candleWidth)-3+this.micropixels;}
axisRepresentation.push(new STXChart.XAxisLabel(hz,"line",nextLabel));nextLabel+=tickSpacing;}
else{chart.xaxis.push(null);}
}
return axisRepresentation;}
;STXChart.prototype.createTickXAxisWithDates=function(chart){var z8E="ary",z94="boun",I3E=" < ",y37="sP",c94="ror",k2E="hDat",b1E="xi",A6E="XA",J9E="ick";if(!chart)chart=this.chart;chart.xaxis=[];if(!this.timeIntervalMap){this.timePossibilities=[STX.MILLISECOND,STX.SECOND,STX.MINUTE,STX.HOUR,STX.DAY,STX.MONTH,STX.YEAR];this.timeIntervalMap={}
;this.timeIntervalMap[STX.MILLISECOND]={arr:[1,2,5,10,20,50,100,250,500],minTimeUnit:0,maxTimeUnit:1000}
;this.timeIntervalMap[STX.SECOND]={arr:[1,2,5,10,15,30],minTimeUnit:0,maxTimeUnit:60}
;this.timeIntervalMap[STX.MINUTE]={arr:[1,2,5,10,15,30],minTimeUnit:0,maxTimeUnit:60}
;this.timeIntervalMap[STX.HOUR]={arr:[1,2,3,4,6,12],minTimeUnit:0,maxTimeUnit:24}
;this.timeIntervalMap[STX.DAY]={arr:[1,2,7,14],minTimeUnit:1,maxTimeUnit:32}
;this.timeIntervalMap[STX.MONTH]={arr:[1,2,3,6],minTimeUnit:1,maxTimeUnit:13}
;this.timeIntervalMap[STX.YEAR]={arr:[1,2,3,5],minTimeUnit:1,maxTimeUnit:20000000}
;this.timeIntervalMap[STX.DECADE]={arr:[10],minTimeUnit:0,maxTimeUnit:2000000}
;}
var daysInMonth=[31,28,31,30,31,30,31,31,30,31,30,31],periodicity=this.layout.periodicity,interval=this.layout.interval,idealTickSizePixels=chart.xAxis.idealTickSizePixels?chart.xAxis.idealTickSizePixels:chart.xAxis.autoComputedTickSizePixels,idealTicks=p9s.n5(this.chart.width,idealTickSizePixels);for(var x=0;p9s.q5(x,chart.dataSegment.length);x++)if(chart.dataSegment[x])break;if(p9s.l5(x,chart.dataSegment.length))return [];var timeRange=0;if(p9s.B5(interval,parseInt(interval,10))){timeRange=p9s.R5(interval,periodicity,60000,chart.dataSegment.length);}
else{timeRange=p9s.H5(chart.dataSegment[chart.dataSegment.length-1].DT.getTime(),chart.dataSegment[x].DT.getTime());}
var self=this;function millisecondsPerTick(){var iter_parms={'begin':new Date(),'interval':"day",'periodicity':1,'inZone':this.dataZone,'outZone':this.dataZone}
,iter=chart.market.newIterator(iter_parms);iter.next();var dt1=iter.previous();iter=self.standardMarketIterator(dt1,null,chart);var dt2=iter.next();return p9s.K5(dt2.getTime(),dt1.getTime());}
if(p9s.C5(timeRange,0)){timeRange=p9s.S5(millisecondsPerTick(),chart.maxTicks);}
else{timeRange=p9s.s1((timeRange/chart.dataSegment.length),chart.maxTicks);}
var msPerTick=p9s.z1(timeRange,idealTicks),i;for(i=0;p9s.h1(i,this.timePossibilities.length);i++){if(p9s.I1(this.timePossibilities[i],msPerTick))break;}
if(p9s.L1(i,0)){console.log((u4E+O9E+y4E+j94+J9E+A6E+b1E+j1E+R5E+J8E+N1E+k2E+y4E+j1E+Z47+a47+j1E+j1E+y4E+p9s.F1E+q9E+s5E+v4E+y4E+p9s.F1E+c94+c77+m2E+y37+y4E+p9s.F1E+j94+J8E+X0E+I3E+c9E));}
if(p9s.A1(i,this.timePossibilities.length)){i--;}
else if(p9s.J1(i,0)){var prevUnit=this.timePossibilities[p9s.p1(i,1)],prevMap=this.timeIntervalMap[prevUnit],prevMultiplier=prevMap.arr[p9s.E1(prevMap.arr.length,1)];if(p9s.Y1(msPerTick-(prevUnit*prevMultiplier),this.timePossibilities[i]-msPerTick))i--;}
var timeUnit=this.timePossibilities[i];if(chart.xAxis.timeUnit)timeUnit=chart.xAxis.timeUnit;chart.xAxis.activeTimeUnit=timeUnit;var timeInterval=STX.clone(this.timeIntervalMap[timeUnit]);for(i=0;p9s.V1(i,timeInterval.arr.length);i++){if(p9s.i1(timeInterval.arr[i]*timeUnit,msPerTick))break;}
if(p9s.r1(i,timeInterval.arr.length)){i--;}
else{if(p9s.C1(msPerTick-timeInterval.arr[i-1]*timeUnit,timeInterval.arr[i]*timeUnit-msPerTick))i--;}
var timeUnitMultiplier=timeInterval.arr[i];if(chart.xAxis.timeUnitMultiplier)timeUnitMultiplier=chart.xAxis.timeUnitMultiplier;var axisRepresentation=[];for(i=0;p9s.S1(i,chart.maxTicks);i++){if(chart.dataSegment[i])break;}
if(p9s.N9(i,0)&&p9s.z9(i,chart.maxTicks)){var iter1=this.standardMarketIterator(chart.dataSegment[i].DT,chart.xAxis.adjustTimeZone?this.displayZone:this.dataZone);for(var j=i;p9s.h9(j,0);j--){var dt=iter1.previous();chart.xaxis.unshift({DT:dt,Date:STX.yyyymmddhhmmssmmm(dt)}
);}
}
var dtShifted=0,nextTimeUnit=timeInterval.minTimeUnit,previousTimeUnitLarge=-1,firstTick=true,candleWidth=this.layout.candleWidth,iter=this.standardMarketIterator(chart.dataSegment[p9s.I9(chart.dataSegment.length,1)].DT,chart.xAxis.adjustTimeZone?this.displayZone:this.dataZone);for(i;p9s.Z9(i,chart.maxTicks);i++){if(p9s.X9(i,chart.dataSegment.length)){var prices=chart.dataSegment[i];if(prices.displayDate&&chart.xAxis.adjustTimeZone){dtShifted=prices.displayDate;}
else{dtShifted=prices.DT;}
if(i&&prices.leftOffset)candleWidth=p9s.D9((prices.leftOffset-prices.candleWidth/2),i);}
else{if(!chart.xAxis.futureTicks)break;dtShifted=iter.next();}
var obj={DT:dtShifted,Date:STX.yyyymmddhhmmssmmm(dtShifted)}
;if(p9s.J9(i,chart.dataSegment.length))obj.data=chart.dataSegment[i];else obj.data=null;chart.xaxis.push(obj);var currentTimeUnit,currentTimeUnitLarge;if(p9s.p9(timeUnit,STX.MILLISECOND)){currentTimeUnit=dtShifted.getMilliseconds();currentTimeUnitLarge=dtShifted.getSeconds();}
else if(p9s.E9(timeUnit,STX.SECOND)){currentTimeUnit=dtShifted.getSeconds();currentTimeUnitLarge=dtShifted.getMinutes();}
else if(p9s.Y9(timeUnit,STX.MINUTE)){currentTimeUnit=dtShifted.getMinutes();currentTimeUnitLarge=dtShifted.getHours();}
else if(p9s.V9(timeUnit,STX.HOUR)){currentTimeUnit=dtShifted.getHours()+p9s.i9(dtShifted.getMinutes(),60);currentTimeUnitLarge=dtShifted.getDate();}
else if(p9s.H9(timeUnit,STX.DAY)){currentTimeUnit=dtShifted.getDate();currentTimeUnitLarge=dtShifted.getMonth()+1;}
else if(p9s.K9(timeUnit,STX.MONTH)){currentTimeUnit=dtShifted.getMonth()+1;currentTimeUnitLarge=dtShifted.getFullYear();}
else if(p9s.C9(timeUnit,STX.YEAR)){currentTimeUnit=dtShifted.getFullYear();currentTimeUnitLarge=dtShifted.getFullYear()+1000;}
else{currentTimeUnit=dtShifted.getFullYear();currentTimeUnitLarge=0;}
var text=null,hz;if(p9s.S9(previousTimeUnitLarge,currentTimeUnitLarge)){if(p9s.s2(currentTimeUnit,nextTimeUnit)){nextTimeUnit=timeInterval.minTimeUnit;}
hz=chart.left+(p9s.z2(i,candleWidth))-1;text=null;if(p9s.h2(timeUnit,STX.HOUR)||(p9s.e2(timeUnit,STX.MINUTE)&&p9s.X2(previousTimeUnitLarge,currentTimeUnitLarge))){if(chart.xAxis.formatter){text=chart.xAxis.formatter(dtShifted,"boundary",STX.DAY,1);}
else{if(this.internationalizer){text=this.internationalizer.monthDay.format(dtShifted);}
else{text=(dtShifted.getMonth()+1)+"/"+dtShifted.getDate();}
}
}
else if(p9s.D2(timeUnit,STX.DAY)){if(p9s.J2(previousTimeUnitLarge,currentTimeUnitLarge)){text=dtShifted.getFullYear();}
else{text=STX.monthAsDisplay(dtShifted.getMonth(),false,this);}
}
else if(p9s.p2(timeUnit,STX.MONTH)){text=dtShifted.getFullYear();}
if(text&&previousTimeUnitLarge!=-1){axisRepresentation.push(new STXChart.XAxisLabel(hz,(z94+P6E+z8E),text));}
}
if(p9s.E2(currentTimeUnit,nextTimeUnit)){if(p9s.Y2(nextTimeUnit,timeInterval.minTimeUnit)){if(p9s.V2(currentTimeUnitLarge,previousTimeUnitLarge))continue;}
var labelDate=new Date(dtShifted);hz=chart.left+p9s.i2(((2*i+1)*candleWidth),2)-1;var boundaryTimeUnit=p9s.G2(Math.floor(currentTimeUnit/timeUnitMultiplier),timeUnitMultiplier);if(p9s.j2(boundaryTimeUnit,currentTimeUnit)){if(p9s.M2(this.layout.interval,"week"))boundaryTimeUnit=currentTimeUnit;else hz-=p9s.y8(candleWidth,4);}
if(p9s.T8(timeUnit,STX.MILLISECOND)){labelDate.setMilliseconds(boundaryTimeUnit);}
else if(p9s.f8(timeUnit,STX.SECOND)){labelDate.setMilliseconds(0);labelDate.setSeconds(boundaryTimeUnit);}
else if(p9s.k8(timeUnit,STX.MINUTE)){labelDate.setMilliseconds(0);labelDate.setSeconds(0);labelDate.setMinutes(boundaryTimeUnit);}
else if(p9s.m8(timeUnit,STX.HOUR)){labelDate.setMilliseconds(0);labelDate.setSeconds(0);labelDate.setMinutes(0);labelDate.setHours(boundaryTimeUnit);}
else if(p9s.U8(timeUnit,STX.DAY)){labelDate.setDate(Math.max(1,boundaryTimeUnit));}
else if(p9s.v8(timeUnit,STX.MONTH)){labelDate.setDate(1);labelDate.setMonth(p9s.n8(boundaryTimeUnit,1));}
else if(p9s.q8(timeUnit,STX.YEAR)){labelDate.setDate(1);labelDate.setMonth(0);}
else{labelDate.setDate(1);labelDate.setMonth(0);}
nextTimeUnit=boundaryTimeUnit+timeUnitMultiplier;if(p9s.l8(timeUnit,STX.DAY))timeInterval.maxTimeUnit=daysInMonth[labelDate.getMonth()]+1;if(p9s.B8(nextTimeUnit,timeInterval.maxTimeUnit))nextTimeUnit=timeInterval.minTimeUnit;previousTimeUnitLarge=currentTimeUnitLarge;if(firstTick&&p9s.R8(boundaryTimeUnit,currentTimeUnit))continue;if(chart.xAxis.formatter){text=chart.xAxis.formatter(labelDate,"line",timeUnit,timeUnitMultiplier);}
else{if(p9s.t8(timeUnit,STX.DAY)){text=labelDate.getDate();}
else if(p9s.r8(timeUnit,STX.MONTH)){text=STX.monthAsDisplay(dtShifted.getMonth(),false,this);}
else if(p9s.d8(timeUnit,STX.YEAR)||p9s.j8(timeUnit,STX.DECADE)){text=labelDate.getFullYear();}
else{text=STX.timeAsDisplay(labelDate,this,timeUnit);}
}
axisRepresentation.push(new STXChart.XAxisLabel(hz,"line",text));}
firstTick=false;}
return axisRepresentation;}
;var cached=p9s.T94,notcached=p9s.T94;STXChart.prototype.createYAxis=function(panel,parameters){if(this.runPrepend("createYAxis",arguments))return ;var chart=panel.chart,isAChart=(p9s.x8(panel.name,chart.name));if(!parameters)parameters={}
;parameters.noChange=false;var yAxis=parameters.yAxis?parameters.yAxis:panel.yAxis;if(STXChart.enableCaching&&p9s.N7T(yAxis.high,panel.cacheHigh)&&p9s.z7T(yAxis.low,panel.cacheLow)){var leftTick=p9s.h7T(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks;panel.cacheLeft=Math.min(panel.cacheLeft,leftTick);panel.cacheRight=Math.max(panel.cacheRight,rightTick);panel.cacheLeft=leftTick;panel.cacheRight=rightTick;parameters.noChange=true;cached++;}
else{panel.cacheLeft=1000000;panel.cacheRight=-1;panel.cacheHigh=yAxis.high;panel.cacheLow=yAxis.low;notcached++;}
var idealX=chart.xAxis.idealTickSizePixels?chart.xAxis.idealTickSizePixels:chart.xAxis.autoComputedTickSizePixels;if(yAxis.goldenRatioYAxis){if(p9s.I7T(yAxis.idealTickSizePixels,idealX/1.618))parameters.noChange=false;}
if(!parameters.noChange){this.adjustYAxisHeightOffset(panel,yAxis);var height=yAxis.height=p9s.Z7T(yAxis.bottom,yAxis.top),pricePerPix=p9s.X7T((yAxis.high-yAxis.low),(height-yAxis.zoom));if(parameters.ground&&!yAxis.semiLog){yAxis.high=yAxis.high+p9s.D7T(yAxis.zoom,pricePerPix);}
else{yAxis.high=yAxis.high+p9s.J7T((yAxis.zoom/2),pricePerPix)+p9s.p7T(yAxis.scroll,pricePerPix);var unadjustedLow=yAxis.low;yAxis.low=p9s.E7T(yAxis.low,(yAxis.zoom/2)*pricePerPix,yAxis.scroll*pricePerPix);if(yAxis.semiLog&&p9s.B7T(yAxis.low,0))yAxis.low=unadjustedLow;}
if(yAxis.min||p9s.R7T(yAxis.min,0))yAxis.low=yAxis.min;if(yAxis.max||p9s.t7T(yAxis.max,0))yAxis.high=yAxis.max;yAxis.shadow=p9s.r7T(yAxis.high,yAxis.low);if(yAxis.semiLog&&(!this.activeDrawing||p9s.d7T(this.activeDrawing.name,"projection"))){yAxis.logHigh=p9s.j7T(Math.log(yAxis.high),Math.LN10);var semilow=Math.max(yAxis.low,0.000000001);yAxis.logLow=p9s.x7T(Math.log(semilow),Math.LN10);if(p9s.N6T(yAxis.low,0))yAxis.logLow=0;yAxis.logShadow=p9s.z6T(yAxis.logHigh,yAxis.logLow);}
var fontHeight;if(yAxis.goldenRatioYAxis&&isAChart){yAxis.idealTickSizePixels=p9s.h6T(idealX,1.618);if(p9s.I6T(yAxis.idealTickSizePixels,0)){fontHeight=this.getCanvasFontSize("stx_yaxis");yAxis.idealTickSizePixels=p9s.Z6T(fontHeight,5);}
}
else{if(!yAxis.idealTickSizePixels){fontHeight=this.getCanvasFontSize("stx_yaxis");if(isAChart){yAxis.idealTickSizePixels=p9s.X6T(fontHeight,5);}
else{yAxis.idealTickSizePixels=p9s.D6T(fontHeight,2);}
}
}
var idealTicks=Math.round(p9s.J6T(height,yAxis.idealTickSizePixels)),shadow=parameters.range?p9s.p6T(parameters.range[1],parameters.range[0]):yAxis.shadow;yAxis.priceTick=Math.floor(p9s.E6T(shadow,idealTicks));var n=1;for(var zz=0;p9s.Y6T(zz,10);zz++){if(p9s.V6T(yAxis.priceTick,0))break;n*=10;yAxis.priceTick=p9s.i6T(Math.floor(shadow/idealTicks*n),n);}
if(p9s.H6T(zz,10))yAxis.priceTick=0.00000001;yAxis.priceTick=p9s.K6T(Math.round(shadow/idealTicks*n),n);var verticalTicks=Math.round(p9s.C6T(shadow,yAxis.priceTick));if(parameters.range&&p9s.S6T(verticalTicks,shadow)&&!yAxis.noEvenDivisorTicks){while(p9s.s4T(verticalTicks,1)){if(p9s.u4T(shadow%verticalTicks,0))break;verticalTicks--;}
yAxis.priceTick=p9s.O4T(shadow,verticalTicks);}
if(yAxis.minimumPriceTick){var yAxisPriceTick=yAxis.minimumPriceTick;fontHeight=this.getCanvasFontSize("stx_yaxis");for(var i=0;p9s.w4T(i,100);i++){var numberOfTicks=p9s.e4T(shadow,yAxisPriceTick);if(p9s.L4T(height/numberOfTicks,fontHeight*2))yAxisPriceTick+=yAxis.minimumPriceTick;else break;}
if(p9s.A4T(i,100))yAxis.priceTick=yAxisPriceTick;}
yAxis.multiplier=p9s.o4T(yAxis.height,yAxis.shadow);}
if(!this.activeDrawing||p9s.a4T(this.activeDrawing.name,"projection")){yAxis.high=this.valueFromPixel(panel.top,panel,yAxis);if(yAxis.semiLog){yAxis.logHigh=p9s.b4T(Math.log(yAxis.high),Math.LN10);var semilow2=Math.max(yAxis.low,0.00000000001);yAxis.logLow=p9s.W4T(Math.log(semilow2),Math.LN10);yAxis.logShadow=p9s.F4T(yAxis.logHigh,yAxis.logLow);}
yAxis.shadow=p9s.g4T(yAxis.high,yAxis.low);}
yAxis.multiplier=p9s.P4T(yAxis.height,yAxis.shadow);if(p9s.G4T(yAxis.multiplier,Infinity))yAxis.multiplier=0;if(!yAxis.decimalPlaces&&p9s.c4T(yAxis.decimalPlaces,0)){if(isAChart){var labelDecimalPlaces=0;for(var j=0;p9s.Q4T(j,panel.yAxis.shadowBreaks.length);j++){var brk=panel.yAxis.shadowBreaks[j];if(p9s.M4T(panel.yAxis.shadow,brk[0]))labelDecimalPlaces=brk[1];}
yAxis.printDecimalPlaces=labelDecimalPlaces;}
else yAxis.printDecimalPlaces=null;}
else{yAxis.printDecimalPlaces=yAxis.decimalPlaces;}
this.runAppend("createYAxis",arguments);}
;STXChart.prototype.adjustYAxisHeightOffset=function(panel,yAxis){yAxis.bottomOffset=p9s.T94;if(p9s.y0T(this.xAxisAsFooter,C2E)&&p9s.T0T(panel.bottom>>>p9s.T94,this.chart.canvasHeight)){yAxis.bottomOffset=this.xaxisHeight;}
else if(p9s.f0T(this.xAxisAsFooter,C2E)&&p9s.k0T(panel.name,U6E)){yAxis.bottomOffset=this.xaxisHeight;}
yAxis.bottom=p9s.m0T(panel.bottom,yAxis.bottomOffset);}
;STXChart.prototype.drawYAxis=function(panel,parameters){var b2E="'";if(!parameters)parameters={}
;var yAxis=parameters.yAxis?parameters.yAxis:panel.yAxis;if(yAxis.fractional){if(!yAxis.originalPriceFormatter)yAxis.originalPriceFormatter={func:yAxis.priceFormatter}
;if(!yAxis.fractional.resolution)yAxis.fractional.resolution=yAxis.minimumPrice;if(!yAxis.fractional.formatter)yAxis.fractional.formatter=b2E;if(!yAxis.priceFormatter)yAxis.priceFormatter=function(stx,panel,price){var q8E="+",whole=Math.floor(p9s.U0T(Math.round(price/yAxis.fractional.resolution),yAxis.fractional.resolution)),frac=Math.round(p9s.v0T((price-whole),yAxis.fractional.resolution)),_nds=Math.floor(frac);return whole+yAxis.fractional.formatter+(p9s.n0T(_nds,Y67)?l9E:d5E)+_nds+(p9s.q0T(frac-_nds,l0E)?q8E:d5E);}
;}
else{if(yAxis.originalPriceFormatter){yAxis.priceFormatter=yAxis.originalPriceFormatter.func;yAxis.originalPriceFormatter=p9s.r2E;}
}
if(yAxis.pretty)return this.drawYAxisPretty(panel,parameters);if(this.runPrepend(M0E,arguments))return ;if(!parameters.noDraw&&!yAxis.noDraw){if(!yAxis.yAxisPlotter||!parameters.noChange){var chart=panel.chart,isAChart=(p9s.l0T(panel.name,chart.name)&&p9s.B0T(yAxis,panel.yAxis));if(!yAxis.priceTick)return ;var shadow=yAxis.shadow;if(parameters.range){shadow=p9s.R0T(parameters.range[p9s.y94],parameters.range[p9s.T94]);}
var verticalTicks=p9s.t0T(shadow,yAxis.priceTick);verticalTicks=Math.round(verticalTicks);var logStart,logPriceTick;if(yAxis.semiLog){logStart=p9s.r0T(Math.log(this.valueFromPixel(yAxis.bottom,panel)),Math.LN10);logPriceTick=p9s.d0T((yAxis.logHigh-yAxis.logLow),verticalTicks);}
var textStyle=yAxis.textStyle?yAxis.textStyle:X24;yAxis.yAxisPlotter=new STX.Plotter();yAxis.yAxisPlotter.newSeries(I67,q84,this.canvasStyle(F4E));yAxis.yAxisPlotter.newSeries(j5E,G7E,this.colorOrStyle(textStyle));yAxis.yAxisPlotter.newSeries(c37,q84,this.canvasStyle(i84));var priceOffset=p9s.T94,high=parameters.range?parameters.range[p9s.y94]:yAxis.high,low=parameters.range?parameters.range[p9s.T94]:yAxis.low,drawBorders=(p9s.j0T(yAxis.displayBorder,p9s.r2E)?chart.panel.yAxis.displayBorder:yAxis.displayBorder);if(p9s.x0T(this.axisBorders,c47))drawBorders=c47;if(p9s.N3T(this.axisBorders,C2E))drawBorders=C2E;var edgeOfAxis,position=(p9s.z3T(yAxis.position,p9s.r2E)?chart.panel.yAxis.position:yAxis.position);if(p9s.h3T(position,K77)){edgeOfAxis=yAxis.left+yAxis.width;}
else{edgeOfAxis=yAxis.left;}
var borderEdge=Math.round(edgeOfAxis)+l0E,tickWidth=drawBorders?p9s.S14:p9s.T94;if(p9s.I3T(position,K77))tickWidth=drawBorders?-p9s.S14:p9s.T94;if(isAChart)if(p9s.Z3T(yAxis.shadow,p9s.y94)){priceOffset=p9s.X3T(((parseInt(low/yAxis.priceTick,Y67)+p9s.y94)*yAxis.priceTick),low);}
else{priceOffset=p9s.D3T(yAxis.priceTick,Math.round((low%yAxis.priceTick)*panel.chart.roundit)/panel.chart.roundit);}
else priceOffset=p9s.J3T(high,yAxis.priceTick);var fontHeight=this.getCanvasFontSize(X24);for(var i=p9s.T94;p9s.p3T(i,verticalTicks);i++){var price;if(yAxis.semiLog){var logPrice=logStart+(p9s.E3T(i,logPriceTick));price=Math.pow(Y67,logPrice);}
else{if(isAChart)price=low+p9s.Y3T(i,yAxis.priceTick)+priceOffset;else price=p9s.V3T(high,(i*yAxis.priceTick),priceOffset);}
var y=this.pixelFromPrice(price,panel,yAxis),y2=Math.round(y)+l0E;if(p9s.t3T((y2+fontHeight/p9s.M14),panel.bottom))continue;if(p9s.r3T((y2-fontHeight/p9s.M14),panel.top))continue;if(yAxis.displayGridLines){yAxis.yAxisPlotter.moveTo("grid",panel.left,y2);yAxis.yAxisPlotter.lineTo("grid",panel.right,y2);}
if(drawBorders){yAxis.yAxisPlotter.moveTo("border",p9s.d3T(borderEdge,0.5),y2);yAxis.yAxisPlotter.lineTo("border",borderEdge+tickWidth,y2);}
if(yAxis.priceFormatter){price=yAxis.priceFormatter(this,panel,price);}
else{price=this.formatYAxisPrice(price,panel,p9s.r2E,yAxis);}
var backgroundColor=yAxis.textBackground?this.containerColor:p9s.r2E,textXPosition=edgeOfAxis+tickWidth+p9s.S14;if(p9s.j3T(position,K77)){textXPosition=yAxis.left+p9s.S14;if(yAxis.justifyRight)textXPosition=yAxis.left+yAxis.width+tickWidth-3;}
else{if(yAxis.justifyRight)textXPosition=edgeOfAxis+yAxis.width;}
yAxis.yAxisPlotter.addText(j5E,price,textXPosition,y2,backgroundColor,p9s.r2E,fontHeight);}
if(drawBorders){var b=Math.round(yAxis.bottom)+l0E;yAxis.yAxisPlotter.moveTo((L6E+Q9E+t2E+y4E+p9s.F1E),borderEdge,yAxis.top);yAxis.yAxisPlotter.lineTo("border",borderEdge,b);yAxis.yAxisPlotter.draw(this.chart.context,c37);}
}
this.plotYAxisGrid(panel);}
this.runAppend(M0E,arguments);}
;STXChart.prototype.drawYAxisPretty=function(panel,parameters){var x67="ret",j6E="xis",f47="dra",B8E="bo",a0E="ok";if(this.runPrepend("drawYAxis",arguments))return ;if(!parameters)parameters={}
;var yAxis=parameters.yAxis?parameters.yAxis:panel.yAxis;if(!parameters.noDraw&&!yAxis.noDraw){if(!yAxis.yAxisPlotter||!parameters.noChange){var chart=panel.chart,isAChart=(p9s.x3T(panel.name,chart.name)&&p9s.N5T(yAxis,panel.yAxis));if(!yAxis.priceTick)return ;if(isNaN(yAxis.high)||isNaN(yAxis.low))return ;var shadow=yAxis.shadow;if(parameters.range){shadow=p9s.z5T(parameters.range[1],parameters.range[0]);}
var verticalTicks=p9s.h5T(yAxis.height,yAxis.idealTickSizePixels);verticalTicks=Math.round(verticalTicks);var textStyle=yAxis.textStyle?yAxis.textStyle:"stx_yaxis";yAxis.yAxisPlotter=new STX.Plotter();yAxis.yAxisPlotter.newSeries("grid",(j1E+e77+a0E+y4E),this.canvasStyle("stx_grid"));yAxis.yAxisPlotter.newSeries("text","fill",this.colorOrStyle(textStyle));yAxis.yAxisPlotter.newSeries("border","stroke",this.canvasStyle("stx_grid_border"));var priceOffset=0,high=parameters.range?parameters.range[1]:yAxis.high,low=parameters.range?parameters.range[0]:yAxis.low,drawBorders=(p9s.I5T(yAxis.displayBorder,null)?chart.panel.yAxis.displayBorder:yAxis.displayBorder);if(p9s.Z5T(this.axisBorders,false))drawBorders=false;if(p9s.X5T(this.axisBorders,true))drawBorders=true;var edgeOfAxis,position=(p9s.D5T(yAxis.position,null)?chart.panel.yAxis.position:yAxis.position);if(p9s.J5T(position,"left")){edgeOfAxis=yAxis.left+yAxis.width;}
else{edgeOfAxis=yAxis.left;}
var borderEdge=Math.round(edgeOfAxis)+0.5,tickWidth=drawBorders?3:0;if(p9s.p5T(position,"left"))tickWidth=drawBorders?-3:0;var fontHeight=this.getCanvasFontSize("stx_yaxis"),increments=yAxis.increments,l=increments.length,p=0,n=1,inc=0,closest=0,pow=0,diff=Number.MAX_VALUE;for(var z=0;p9s.E5T(z,100);z++){inc=p9s.Y5T(increments[p],Math.pow(10,pow));n=Math.floor(p9s.V5T(shadow,inc));var newDiff=Math.abs(p9s.i5T(verticalTicks,n));if(p9s.H5T(newDiff,diff)){break;}
else{diff=newDiff;}
if(p9s.K5T(n,verticalTicks)){closest=inc;break;}
else if(p9s.C5T(n,verticalTicks)){p++;if(p9s.S5T(p,l)){p=0;pow++;}
}
else{p--;if(p9s.s1T(p,0)){p=p9s.u1T(l,1);pow--;}
}
closest=inc;}
var lowLabel=p9s.O1T(Math.ceil(low/closest),closest),lowPixelSize=p9s.w1T(yAxis.bottom,this.pixelFromPrice(lowLabel,panel,yAxis)),closestInc=0;if(p9s.e1T(lowPixelSize,yAxis.idealTickSizePixels)&&yAxis.semiLog&&yAxis.prettySemiLog){var divisor;for(divisor=Math.ceil(low);p9s.L1T(divisor,lowLabel)&&p9s.A1T(lowLabel%divisor,0);++divisor);if(p9s.o1T(divisor,lowLabel)){if(p9s.a1T(lowLabel,closest)){closest=divisor;closestInc=divisor;}
lowLabel=divisor;}
}
var i=0;for(var zz=0;p9s.b1T(zz,100);zz++){var price=lowLabel+p9s.W1T(i,closest);if(p9s.F1T(price,high))break;closest+=closestInc;i++;var y=this.pixelFromPrice(price,panel,yAxis),y2=Math.round(y)+0.5;if(p9s.g1T((y2+fontHeight/2),panel.bottom))continue;if(p9s.P1T((y2-fontHeight/2),panel.top))continue;if(yAxis.displayGridLines){yAxis.yAxisPlotter.moveTo("grid",panel.left,y2);yAxis.yAxisPlotter.lineTo("grid",panel.right,y2);}
if(drawBorders){yAxis.yAxisPlotter.moveTo("border",p9s.G1T(borderEdge,0.5),y2);yAxis.yAxisPlotter.lineTo((B8E+t2E+y4E+p9s.F1E),borderEdge+tickWidth,y2);}
if(yAxis.priceFormatter){price=yAxis.priceFormatter(this,panel,price);}
else{price=this.formatYAxisPrice(price,panel,null,yAxis);}
var backgroundColor=yAxis.textBackground?this.containerColor:null,textXPosition=edgeOfAxis+tickWidth+3;if(p9s.c1T(position,"left")){textXPosition=yAxis.left+3;if(yAxis.justifyRight)textXPosition=yAxis.left+yAxis.width+tickWidth-3;}
else{if(yAxis.justifyRight)textXPosition=edgeOfAxis+yAxis.width;}
yAxis.yAxisPlotter.addText("text",price,textXPosition,y2,backgroundColor,null,fontHeight);}
if(p9s.Q1T(zz,100)){console.log((f47+l37+f3E+a47+j6E+h84+x67+N1E+Q07+Z47+l6E+j1E+l24+p9s.F1E+q9E+Q9E+i9E+v4E+y4E+p9s.F1E+p9s.F1E+Q9E+p9s.F1E+c77+g07+g07+v4E+p9s.F1E+y4E+o37+y4E+P6E+v4E+c9E+l9E+l9E));}
if(drawBorders){var b=Math.round(yAxis.bottom)+0.5;yAxis.yAxisPlotter.moveTo("border",borderEdge,yAxis.top);yAxis.yAxisPlotter.lineTo("border",borderEdge,b);yAxis.yAxisPlotter.draw(this.chart.context,"border");}
}
this.plotYAxisGrid(panel);}
this.runAppend("drawYAxis",arguments);}
;STXChart.prototype.plotYAxisGrid=function(panel){var w77="plotYAxisGrid";if(this.runPrepend(w77,arguments))return ;var context=this.chart.context;panel.yAxis.yAxisPlotter.draw(context,(E67+J8E+P6E));this.runAppend(w77,arguments);}
;STXChart.prototype.plotYAxisText=function(panel){var F9E="AxisTe",h2E="plo",U2E="lef";if(this.runPrepend("plotYAxisText",arguments))return ;var arr=panel.yaxisLHS.concat(panel.yaxisRHS);for(var i=0;p9s.M1T(i,arr.length);i++){var yAxis=arr[i];if(!yAxis.yAxisPlotter)continue;if(yAxis.noDraw)continue;this.canvasFont("stx_yaxis");this.canvasColor("stx_yaxis");var context=this.chart.context;context.textBaseline="middle";if(yAxis.justifyRight)context.textAlign="right";else context.textAlign="left";var fontHeight=this.getCanvasFontSize("stx_yaxis");yAxis.yAxisPlotter.draw(context,"text");context.textBaseline="alphabetic";context.textAlign=(U2E+N1E);}
this.runAppend((h2E+N1E+f3E+F9E+p9s.X37+N1E),arguments);}
;STXChart.prototype.formatYAxisPrice=function(price,panel,requestedDecimalPlaces,yAxis){if(p9s.y9T(price,null)||typeof price=="undefined")return "";var yax=yAxis?yAxis:panel.yAxis,decimalPlaces=requestedDecimalPlaces;if(!decimalPlaces&&p9s.T9T(decimalPlaces,0))decimalPlaces=yax.printDecimalPlaces;if(!decimalPlaces&&p9s.f9T(decimalPlaces,0)){if(p9s.k9T(yax.priceTick,0.01))decimalPlaces=4;else if(p9s.m9T(yax.priceTick,0.1))decimalPlaces=2;else if(p9s.U9T(yax.priceTick,1))decimalPlaces=1;else decimalPlaces=0;}
if(p9s.v9T(panel.name,panel.chart.name)){if(p9s.n9T(yax.priceTick,100)){return STX.condenseInt(price);}
}
if(this.internationalizer){if(p9s.q9T(decimalPlaces,this.internationalizer.priceFormatters.length))decimalPlaces=p9s.l9T(this.internationalizer.priceFormatters.length,1);price=this.internationalizer.priceFormatters[decimalPlaces].format(price);}
else{price=price.toFixed(decimalPlaces);}
return price;}
;STXChart.prototype.formatPrice=function(price,panel){if(!price||typeof price=="undefined")return "";if(!panel)panel=this.currentPanel;if(!panel)panel=this.chart.panel;if(!panel)return price;var decimalPlaces=panel.decimalPlaces;if(!decimalPlaces&&p9s.B9T(decimalPlaces,0)){decimalPlaces=panel.chart.decimalPlaces;}
if(!decimalPlaces&&p9s.R9T(decimalPlaces,0)){return price;}
if(this.internationalizer){if(p9s.t9T(decimalPlaces,this.internationalizer.priceFormatters.length))decimalPlaces=p9s.r9T(this.internationalizer.priceFormatters.length,1);price=this.internationalizer.priceFormatters[decimalPlaces].format(price);}
else{price=price.toFixed(decimalPlaces);}
return price;}
;STXChart.prototype.createCrosshairs=function(){var I84="createCrosshairs";if(this.runPrepend(I84,arguments))return ;if(this.controls.crossX.onmousedown)return ;this.controls.crossY.onmousedown=function(e){if(!e)e=event;if(e.preventDefault)e.preventDefault();return c47;}
;this.controls.crossX.onmousedown=function(e){if(!e)e=event;if(e.preventDefault)e.preventDefault();return c47;}
;this.runAppend(I84,arguments);}
;STXChart.prototype.determineMinMax=function(quotes,fields,sum,bypassTransform,length){var highValue=Number.MAX_VALUE*-1,lowValue=Number.MAX_VALUE,isTransform=false,l=quotes.length;if(length)l=length;for(var i=0;p9s.d9T(i,l);i++){var quote=quotes[i];if(!quote)continue;if(!bypassTransform){if(quote.transform){isTransform=true;quote=quote.transform;}
else if(isTransform)continue;}
var acc=0;for(var j=0;p9s.j9T(j,fields.length);j++){var f=quote[fields[j]];if(!f)continue;if(typeof (f)=="number")f=[f];for(var v=0;p9s.x9T(v,f.length);v++){var val=f[v];if(val||p9s.N2T(val,0)){if(sum){acc+=val;if(p9s.z2T(acc,highValue))highValue=acc;if(p9s.h2T(acc,lowValue))lowValue=acc;}
else{if(p9s.I2T(val,highValue))highValue=val;if(p9s.Z2T(val,lowValue))lowValue=val;}
}
}
}
}
if(highValue==Number.MAX_VALUE*-1)highValue=0;if(p9s.X2T(lowValue,Number.MAX_VALUE))lowValue=0;return [lowValue,highValue];}
;STXChart.prototype.calculateYAxisRange=function(panel,yAxis,low,high){var f4E="log";if(p9s.D2T(low,Number.MAX_VALUE)){low=0;high=0;}
var cheight=panel.height,newHigh=null,newLow=null;this.adjustYAxisHeightOffset(panel,yAxis);yAxis.top=panel.top;yAxis.height=p9s.J2T(yAxis.bottom,yAxis.top);var verticalPad=Math.round(Math.abs(p9s.p2T(cheight,5)));if(p9s.E2T(cheight-Math.abs(yAxis.scroll),verticalPad)){yAxis.scroll=(p9s.Y2T(cheight,verticalPad))*(p9s.V2T(yAxis.scroll,0)?-1:1);}
var pricePerPix=p9s.i2T((high-low),yAxis.height);if(low||p9s.H2T(low,0)){if(p9s.K2T(high-low,0)){newHigh=p9s.C2T(high,2);newLow=0;}
else{if((this.layout.semiLog||p9s.S2T(this.layout.chartScale,"log"))&&newHigh){var logLow=p9s.s8T(Math.log(low),Math.LN10),logHigh=p9s.u8T(Math.log(high),Math.LN10);newHigh=Math.pow(10,logHigh);newLow=Math.pow(10,logLow);}
else{newHigh=high;newLow=low;}
}
yAxis.high=newHigh;yAxis.low=newLow;}
if(yAxis.max||p9s.O8T(yAxis.max,0))yAxis.high=yAxis.max;if(yAxis.min||p9s.w8T(yAxis.min,0))yAxis.low=yAxis.min;yAxis.shadow=p9s.e8T(yAxis.high,yAxis.low);if(p9s.L8T(panel.chart.name,panel.name)&&p9s.A8T(panel.yAxis,yAxis)){var isLogScale=(this.layout.semiLog||p9s.o8T(this.layout.chartScale,(f4E)));if(panel.chart.isComparison)isLogScale=false;if(p9s.a8T(yAxis.semiLog,isLogScale)){this.clearPixelCache();yAxis.semiLog=isLogScale;}
}
}
;STXChart.prototype.renderYAxis=function(chart){if(this.runPrepend("renderYAxis",arguments))return ;var panel=chart.panel,arr=panel.yaxisRHS.concat(panel.yaxisLHS),i;for(i=0;p9s.b8T(i,arr.length);i++){var yAxis=arr[i],low=null,high=null;if(p9s.W8T(panel.yAxis,yAxis)){low=chart.lowValue;high=chart.highValue;}
this.calculateYAxisRange(panel,yAxis,low,high);}
var parameters={}
;for(i=0;p9s.F8T(i,arr.length);i++){parameters.yAxis=arr[i];this.createYAxis(panel,parameters);this.drawYAxis(panel,parameters);}
this.runAppend("renderYAxis",arguments);}
;STXChart.prototype.initializeDisplay=function(chart){if(this.runPrepend("initializeDisplay",arguments))return ;var fields=[];for(var field in chart.series){if(chart.series[field].parameters.shareYAxis)fields.push(field);}
var panel=chart.panel=this.panels[chart.name],minMax,length=null,ticksOnScreen=Math.floor(p9s.g8T((chart.width-this.micropixels),this.layout.candleWidth));if(p9s.P8T(chart.scroll,chart.maxTicks)&&p9s.G8T(chart.maxTicks,ticksOnScreen+1))length=p9s.c8T(chart.dataSegment.length,1);if(!STXChart.chartShowsHighs(this.layout.chartType)){fields.push("Close");minMax=this.determineMinMax(chart.dataSegment,fields,null,null,length);if(p9s.Q8T(this.layout.chartType,"baseline_delta")){var base=chart.baseline.actualLevel;if(chart.transformFunc)base=chart.transformFunc(this,chart,base);var diff=Math.max(p9s.M8T(base,minMax[0]),p9s.y7P(minMax[1],base));if(this.repositioningBaseline){minMax=[chart.lowValue,chart.highValue];}
else{minMax[0]=p9s.T7P(base,diff);minMax[1]=base+diff;}
}
}
else{fields.push("Close","High","Low");minMax=this.determineMinMax(chart.dataSegment,fields,null,null,length);}
chart.lowValue=minMax[0];chart.highValue=minMax[1];this.runAppend("initializeDisplay",arguments);}
;STXChart.prototype.computePosition=function(x,offset){if(typeof offset==D94)offset=p9s.T94;var position=p9s.f7P(x,this.layout.candleWidth)+offset+this.micropixels;return position;}
;STXChart.prototype.computeColor=function(open,close){if(p9s.k7P(open,close))return H14;if(p9s.m7P(open,close))return g94;return R2E;}
;STXChart.prototype.computeLength=function(high,low){var h=this.pixelFromPrice(high),l=this.pixelFromPrice(low);return p9s.U7P(l,h);}
;STXChart.prototype.setSeriesRenderer=function(renderer){var params=renderer.params;if(this.chart.seriesRenderers[renderer.params.name])return this.chart.seriesRenderers[renderer.params.name];if(params.yAxis){this.addYAxis(this.panels[params.panel],params.yAxis);}
renderer.stx=this;this.chart.seriesRenderers[renderer.params.name]=renderer;return renderer;}
;STXChart.prototype.setMarket=function(marketDefinition,chart){if(!chart)chart=this.chart;chart.market=new STX.Market(marketDefinition);}
;STXChart.prototype.setMarketFactory=function(factory){this.marketFactory=factory;}
;STXChart.prototype.removeSeriesRenderer=function(renderer){for(var r in this.chart.seriesRenderers){if(p9s.v7P(renderer.params.name,this.chart.seriesRenderers[r].params.name)){var toDelete=this.chart.seriesRenderers[renderer.params.name],yAxis=toDelete.params.yAxis,panel=this.panels[toDelete.params.panel];delete  this.chart.seriesRenderers[renderer.params.name];this.deleteYAxisIfUnused(panel,yAxis);return ;}
}
}
;STXChart.prototype.getSeriesRenderer=function(name){return this.chart.seriesRenderers[name];}
;STXChart.prototype.drawHistogram=function(params,seriesParams){var V9E="ist";if(!seriesParams||!seriesParams.length)return ;var panelName=params.panel;if(!panelName)panelName="chart";var c=this.panels[panelName];if(!c)return ;var yAxis=params.yAxis?params.yAxis:c.yAxis,b=Math.floor(yAxis.bottom)+0.5,t=Math.floor(yAxis.top)+0.5,type=params.type;if(p9s.n7P(type,(I8E+V9E+Q9E+p9s.j8E+C8E+m2E)))type=params.subtype;var quotes=this.chart.dataSegment,bordersOn=false;this.getDefaultColor();var sp;for(sp=0;p9s.q7P(sp,seriesParams.length);sp++){bordersOn|=(seriesParams[sp].border_color_up&&!STX.isTransparent(seriesParams[sp].border_color_up));bordersOn|=(seriesParams[sp].border_color_down&&!STX.isTransparent(seriesParams[sp].border_color_down));}
if(!params.name)params.name="Data";var multiplier=yAxis.multiplier;if(!params.heightPercentage)params.heightPercentage=0.7;if(!params.widthFactor)params.widthFactor=0.8;var histMax=0,histMin=0;for(var i=0;p9s.l7P(i,this.chart.maxTicks);i++){var prices=quotes[i];if(!prices)continue;var total=0;for(sp=0;p9s.B7P(sp,seriesParams.length);sp++){if(prices[seriesParams[sp].field]){if(p9s.R7P(params.subtype,"stacked"))total+=prices[seriesParams[sp].field];else total=prices[seriesParams[sp].field];if(p9s.t7P(total,histMax))histMax=total;if(p9s.r7P(total,histMin))histMin=total;}
}
}
if(!params.bindToYAxis){if(p9s.d7P(histMax,0)&&p9s.j7P(histMin,0)){this.watermark(panelName,"center","bottom",this.translateIf(params.name+" Not Available"));return ;}
multiplier=p9s.x7P((b-t),params.heightPercentage,(histMax-histMin));}
var offset=0.5;if(p9s.y6P(this.layout.candleWidth,1)||!bordersOn)offset=0;this.startClip(panelName);var context=this.chart.context,shaveOff=Math.max(0,p9s.T6P((1-params.widthFactor),this.layout.candleWidth,2)),tops={}
,bottoms={}
,self=this,candleWidth=1;function drawBars(field,color,opacity,isBorder,isUp,shift,candleWidth){if(!opacity)opacity=1;if(STX.isIE8)context.globalAlpha=0.5;else context.globalAlpha=opacity;context.beginPath();var prevTop=b+0.5,farLeft=Math.floor(p9s.w6P(self.pixelFromBar(0,c.chart),self.layout.candleWidth/2)),prevRight=farLeft;for(var i=0;p9s.e6P(i,quotes.length);i++){var bottom=bottoms[i];if(!bottom)bottom=b;if(p9s.L6P(i,0))prevTop=bottom;var quote=quotes[i];if(!quote||!quote[field]){prevTop=bottom;prevRight+=self.layout.candleWidth;continue;}
var y=p9s.A6P((quote[field]-histMin),multiplier);if(isNaN(y))continue;var myCandleWidth=self.layout.candleWidth;if(quote.candleWidth){myCandleWidth=quote.candleWidth;if(p9s.o6P(i,0))farLeft=prevRight=Math.floor(p9s.a6P(self.pixelFromBar(0,c.chart),quote.candleWidth/2));}
var top=Math.min(Math.floor(p9s.b6P(bottom,y))+0.5,bottom);if(isUp){if(p9s.W6P(quote.Close,quote.iqPrevClose)){prevTop=top;prevRight+=myCandleWidth;continue;}
}
else{if(p9s.F6P(quote.Close,quote.iqPrevClose)){prevTop=top;prevRight+=myCandleWidth;continue;}
}
var x0,x1,variableWidthRatio=p9s.g6P(myCandleWidth,self.layout.candleWidth),start=prevRight+p9s.P6P((shaveOff+shift*candleWidth),variableWidthRatio);x0=Math.round(start)+(isBorder?0:offset);x1=p9s.G6P(Math.round(start+candleWidth*variableWidthRatio),(isBorder?0:offset));if(p9s.c6P(x1-x0,2))x1=x0+1;if(isBorder)roundPixel=0;else roundPixel=0.5;if(p9s.Q6P(x0%1,roundPixel))x0+=0.5;if(p9s.M6P(x1%1,roundPixel))x1+=0.5;context.moveTo(x0,bottom);if(p9s.y4P(b,bottom)){context.lineTo(x1,bottom);}
else{context.moveTo(x1,bottom);if(isBorder&&!shaveOff){if(bottoms[i+1])context.moveTo(x1,Math.max(top,Math.min(bottom,bottoms[i+1])));}
}
context.lineTo(x1,top);context.lineTo(x0,top);if(isBorder&&shift){if(p9s.T4P(tops[i],top)||p9s.f4P(i,0))context.lineTo(x0,Math.min(bottom,tops[i]));}
else if(isBorder&&!shaveOff&&p9s.k4P(type,"clustered")){if(p9s.m4P(i,0)&&tops[p9s.U4P(i,1)]&&p9s.v4P(tops[i-1],top))context.lineTo(x0,Math.min(bottom,tops[p9s.n4P(i,1)]));}
else if(isBorder&&!shaveOff){if(p9s.q4P(prevTop,top)||p9s.l4P(i,0))context.lineTo(x0,Math.min(bottom,prevTop));}
else{context.lineTo(x0,bottom);}
prevTop=top;prevRight+=myCandleWidth;if(p9s.B4P(type,"clustered")||isBorder)tops[i]=top;}
if(!color)color="auto";if(isBorder){context.strokeStyle=p9s.R4P(color,"auto")?self.defaultColor:color;context.stroke();}
else{context.fillStyle=p9s.t4P(color,"auto")?self.defaultColor:color;context.fill();}
context.closePath();}
for(sp=0;p9s.r4P(sp,seriesParams.length);sp++){var param=seriesParams[sp];candleWidth=p9s.d4P(this.layout.candleWidth,params.widthFactor);var shift=0;if(p9s.j4P(type,"clustered")){shift=sp;candleWidth/=seriesParams.length;}
drawBars(param.field,param.fill_color_up,param.opacity_up,null,true,shift,candleWidth);drawBars(param.field,param.fill_color_down,param.opacity_down,null,null,shift,candleWidth);if(p9s.x4P(this.layout.candleWidth,2)&&bordersOn){drawBars(param.field,param.border_color_up,param.opacity_up,true,true,shift,candleWidth);drawBars(param.field,param.border_color_down,param.opacity_down,true,null,shift,candleWidth);}
if(p9s.N0P(type,"stacked"))bottoms=STX.shallowClone(tops);}
context.globalAlpha=1;this.endClip();}
;STXChart.prototype.drawHeatmap=function(params,seriesParams){if(!seriesParams||!seriesParams.length)return ;var panelName=params.panel;if(!panelName)panelName="chart";var c=this.panels[panelName];if(!c)return ;var yAxis=params.yAxis?params.yAxis:c.yAxis,b=Math.floor(yAxis.bottom)+0.5,t=Math.floor(yAxis.top)+0.5,quotes=this.chart.dataSegment;this.getDefaultColor();if(!params.name)params.name="Data";if(!params.widthFactor)params.widthFactor=1;var offset=0.5;if(p9s.z0P(c.chart.tmpWidth,1))offset=0;var height=null,halfHeight=null,self=this,lineWidth=null;function drawCells(field,color,isBorder,widthFactor,myoffset){context.beginPath();context.fillStyle=color;context.strokeStyle=color;var t=yAxis.top,b=yAxis.bottom,myCandleWidth=p9s.h0P(self.layout.candleWidth,widthFactor),xc=Math.floor(p9s.I0P(self.pixelFromBar(0,c.chart),self.layout.candleWidth)),x0,x1;for(var x=0;p9s.Z0P(x,quotes.length);x++){var quote=quotes[x];if(!quote)continue;if(quote.candleWidth){if(p9s.X0P(x,0)){xc+=self.layout.candleWidth;}
else{xc+=p9s.D0P((quote.candleWidth+myCandleWidth/widthFactor),2);}
myCandleWidth=p9s.J0P(quote.candleWidth,widthFactor);}
else{xc+=self.layout.candleWidth;}
x0=p9s.p0P(xc,myCandleWidth/2,myoffset);x1=xc+p9s.l0P(myCandleWidth,2)-myoffset;if(p9s.B0P(x1-x0,2))x1=x0+1;if(quote.transform)quote=quote.transform;var cellValues=quote[field];if(!cellValues)continue;if(typeof cellValues=="number")cellValues=[cellValues];for(var i=0;p9s.R0P(i,cellValues.length);i++){var v=self.pixelFromPrice(cellValues[i],c,yAxis);if(!lineWidth){var v1=self.pixelFromPrice(p9s.t0P(cellValues[i],params.height),c,yAxis);context.lineWidth=1;height=p9s.r0P(v1,v);halfHeight=p9s.d0P(height,2);lineWidth=context.lineWidth;}
if(isBorder){var tc=v+halfHeight,bc=p9s.j0P(v,halfHeight);context.moveTo(x0,tc);context.lineTo(x0,bc);context.lineTo(x1,bc);context.lineTo(x1,tc);context.lineTo(x0,tc);}
else{context.fillRect(x0,p9s.x0P(v,halfHeight),p9s.N3P(x1,x0),height);}
}
}
if(isBorder)context.stroke();context.closePath();}
this.startClip(panelName);var context=this.chart.context;context.globalAlpha=params.opacity;for(var sp=0;p9s.z3P(sp,seriesParams.length);sp++){var param=seriesParams[sp];drawCells(param.field,param.color,null,params.widthFactor,param.border_color?offset:-offset/4);if(param.border_color&&p9s.h3P(this.layout.candleWidth,2)){drawCells(param.field,param.border_color,true,params.widthFactor,offset);}
}
context.lineWidth=1;context.globalAlpha=1;this.endClip();}
;STXChart.prototype.startClip=function(panelName,allowYAxis){if(!panelName)panelName="chart";var panel=this.panels[panelName],yAxis=panel.yAxis;this.chart.context.save();this.chart.context.beginPath();var left=panel.left,width=panel.width;if(allowYAxis){left=0;width=this.width;}
this.chart.context.rect(left,panel.top,width,yAxis.height);this.chart.context.clip();}
;STXChart.prototype.endClip=function(){this.chart.context.restore();}
;STXChart.prototype.drawCandlesHighPerformance=function(panel,fillColor,borderColor,condition){var chart=panel.chart,quotes=chart.dataSegment,context=this.chart.context,t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,length,borderOffset=0;if(borderColor&&!STX.isTransparent(borderColor))borderOffset=0.5;var leftTick=p9s.I3P(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks;context.beginPath();context.fillStyle=fillColor;var yAxis=panel.yAxis,whitespace=p9s.Z3P(chart.tmpWidth,2),candleWidth=this.layout.candleWidth,xbase=p9s.X3P(panel.left,0.5*candleWidth,this.micropixels,1);for(var x=0;p9s.o3P(x,quotes.length);x++){xbase+=p9s.a3P(candleWidth,2);candleWidth=this.layout.candleWidth;xbase+=p9s.b3P(candleWidth,2);var quote=quotes[x];if(!quote)continue;if(quote.projection)continue;if(quote.candleWidth){xbase+=p9s.W3P((quote.candleWidth-candleWidth),2);candleWidth=quote.candleWidth;if(p9s.F3P(this.layout.chartType,"volume_candle"))whitespace=p9s.g3P(candleWidth,2);}
if(p9s.P3P(quote.Open,quote.Close))continue;if(p9s.G3P(condition,STXChart.CANDLEUP)&&p9s.c3P(quote.Open,quote.Close))continue;if(p9s.Q3P(condition,STXChart.CANDLEDOWN)&&p9s.M3P(quote.Open,quote.Close))continue;if(p9s.y5P(condition,STXChart.CLOSEUP)&&p9s.T5P(quote.Close,quote.iqPrevClose))continue;if(p9s.f5P(condition,STXChart.CLOSEDOWN)&&p9s.k5P(quote.Close,quote.iqPrevClose))continue;if(p9s.m5P(condition,STXChart.CLOSEEVEN)&&p9s.U5P(quote.Close,quote.iqPrevClose))continue;if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(p9s.v5P(tick,panel.cacheLeft)||p9s.n5P(tick,panel.cacheRight)||!cache.open){var o=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(p9s.q5P((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top),c=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(p9s.l5P((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);top=Math.floor(Math.min(o,c))+borderOffset;bottom=Math.max(o,c);length=Math.floor(p9s.B5P(bottom,top));if(p9s.R5P(top,t)){if(p9s.t5P(top+length,t)){cache.open=top;cache.close=top;continue;}
length-=p9s.r5P(t,top);top=t;}
if(p9s.d5P(top+length,b)){length-=(top+length-b);}
length=Math.max(length,2);cache.open=top;cache.close=cache.open+length;}
if(p9s.j5P(cache.open,b))continue;if(p9s.x5P(cache.close,t))continue;var flr_xbase=Math.floor(xbase)+0.5,xstart=Math.floor(p9s.N1P(flr_xbase,whitespace))+borderOffset,xend=p9s.z1P(Math.round(flr_xbase+whitespace),borderOffset);if(p9s.h1P(quote.Open,quote.Close)){context.moveTo(xstart,cache.open);context.lineTo(xend,cache.open);context.lineTo(xend,cache.close);context.lineTo(xstart,cache.close);context.lineTo(xstart,cache.open);}
}
context.fill();if(borderOffset){context.lineWidth=1;context.strokeStyle=borderColor;context.stroke();}
}
;STXChart.prototype.drawCandles=function(panel,colorFunction,isOutline){var chart=panel.chart;if(!chart){chart=panel;panel=panel.chart;}
var quotes=chart.dataSegment,context=this.chart.context,t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,length,borderColor="transparent",fillColor="transparent",borderOffset=0;if(!STX.isTransparent(borderColor))borderOffset=0.5;var leftTick=p9s.I1P(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks,yAxis=panel.yAxis,whitespace=p9s.Z1P(chart.tmpWidth,2),candleWidth=this.layout.candleWidth,xbase=p9s.X1P(panel.left,0.5*candleWidth,this.micropixels,1);for(var x=0;p9s.o1P(x,quotes.length);x++){xbase+=p9s.a1P(candleWidth,2);candleWidth=this.layout.candleWidth;xbase+=p9s.b1P(candleWidth,2);var quote=quotes[x];if(!quote)continue;if(quote.projection)continue;if(quote.candleWidth){xbase+=p9s.W1P((quote.candleWidth-candleWidth),2);candleWidth=quote.candleWidth;if(p9s.F1P(this.layout.chartType,"volume_candle"))whitespace=p9s.g1P(candleWidth,2);}
if(!quote.Open&&p9s.P1P(quote.Open,0))continue;if(p9s.G1P(quote.Open,quote.Close))continue;var myColor=colorFunction(this,quote,isOutline?"outline":"solid");if(!myColor)continue;if(isOutline)borderColor=myColor;else fillColor=myColor;context.beginPath();context.fillStyle=fillColor;if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(p9s.c1P(tick,panel.cacheLeft)||p9s.Q1P(tick,panel.cacheRight)||!cache.open){var o=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(p9s.M1P((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top),c=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(p9s.y9P((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);top=Math.floor(Math.min(o,c))+borderOffset;bottom=Math.max(o,c);length=Math.floor(p9s.T9P(bottom,top));if(p9s.f9P(top,t)){if(p9s.k9P(top+length,t)){cache.open=top;cache.close=top;continue;}
length-=p9s.m9P(t,top);top=t;}
if(p9s.U9P(top+length,b)){length-=(top+length-b);}
length=Math.max(length,2);cache.open=top;cache.close=cache.open+length;}
if(p9s.v9P(cache.open,b))continue;if(p9s.n9P(cache.close,t))continue;flr_xbase=Math.floor(xbase)+0.5;var xstart=Math.floor(p9s.q9P(flr_xbase,whitespace))+borderOffset,xend=p9s.l9P(Math.round(flr_xbase+whitespace),borderOffset);if(p9s.B9P(quote.Open,quote.Close)){context.moveTo(xstart,cache.open);context.lineTo(xend,cache.open);context.lineTo(xend,cache.close);context.lineTo(xstart,cache.close);context.lineTo(xstart,cache.open);}
if(p9s.R9P(fillColor,"transparent"))context.fill();if(borderOffset){context.lineWidth=1;context.strokeStyle=borderColor;context.stroke();}
}
}
;STXChart.prototype.drawShadowsHighPerformance=function(panel,style,condition){var chart=panel.chart,quotes=chart.dataSegment,context=this.chart.context;context.lineWidth=1;var t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,left,leftTick=p9s.t9P(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks;context.beginPath();var yAxis=panel.yAxis,candleWidth=this.layout.candleWidth,xbase=p9s.r9P(panel.left,0.5*candleWidth,this.micropixels,1);for(var x=0;p9s.C9P(x,quotes.length);x++){xbase+=p9s.S9P(candleWidth,2);candleWidth=this.layout.candleWidth;xbase+=p9s.s2P(candleWidth,2);var quote=quotes[x];if(!quote)continue;if(quote.projection)continue;if(quote.candleWidth){xbase+=p9s.u2P((quote.candleWidth-candleWidth),2);candleWidth=quote.candleWidth;}
if(condition){if(p9s.O2P(condition,STXChart.CANDLEUP)&&p9s.w2P(quote.Open,quote.Close))continue;else if(p9s.e2P(condition,STXChart.CANDLEDOWN)&&p9s.L2P(quote.Open,quote.Close))continue;else if(p9s.A2P(condition,STXChart.CLOSEUP)&&p9s.o2P(quote.Close,quote.iqPrevClose))continue;else if(p9s.a2P(condition,STXChart.CLOSEDOWN)&&p9s.b2P(quote.Close,quote.iqPrevClose))continue;else if(p9s.W2P(condition,STXChart.CLOSEEVEN)&&p9s.F2P(quote.Close,quote.iqPrevClose))continue;}
if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(p9s.g2P(tick,panel.cacheLeft)||p9s.P2P(tick,panel.cacheRight)||!cache.top){top=(yAxis.semiLog?this.pixelFromPrice(quote.High,panel):(p9s.G2P((yAxis.high-quote.High),yAxis.multiplier))+yAxis.top);bottom=(yAxis.semiLog?this.pixelFromPrice(quote.Low,panel):(p9s.c2P((yAxis.high-quote.Low),yAxis.multiplier))+yAxis.top);var length=p9s.Q2P(bottom,top);if(p9s.M2P(top,t)){if(p9s.y8P(top+length,t)){cache.top=top;cache.bottom=top;continue;}
length-=p9s.T8P(t,top);top=t;}
if(p9s.f8P(top+length,b)){length-=(top+length-b);}
cache.top=top;cache.bottom=cache.top+length;}
if(p9s.k8P(cache.top,b))continue;if(p9s.m8P(cache.bottom,t))continue;var xx=Math.floor(xbase)+0.5;context.moveTo(xx,cache.top);context.lineTo(xx,cache.bottom);if(p9s.U8P(quote.Open,quote.Close)){var offset=this.offset;if(p9s.v8P(this.layout.chartType,"volume_candle")){offset=p9s.n8P(candleWidth,2);}
var x0=p9s.q8P(xx,offset),x1=xx+offset,o=Math.floor(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(p9s.l8P((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top)+0.5;if(p9s.B8P(o,b)&&p9s.R8P(o,t)){context.moveTo(x0,o);context.lineTo(x1,o);}
}
}
this.canvasColor(style);context.stroke();}
;STXChart.prototype.drawShadows=function(panel,colorFunction){var chart=panel.chart;if(!chart){chart=panel;panel=panel.chart;}
var quotes=chart.dataSegment,context=this.chart.context;context.lineWidth=1;var t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,left,leftTick=p9s.t8P(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks,yAxis=panel.yAxis,candleWidth=this.layout.candleWidth,xbase=p9s.r8P(panel.left,0.5*candleWidth,this.micropixels,1);for(var x=0;p9s.C8P(x,quotes.length);x++){xbase+=p9s.S8P(candleWidth,2);candleWidth=this.layout.candleWidth;xbase+=p9s.s7c(candleWidth,2);var quote=quotes[x];if(!quote)continue;if(quote.projection)continue;if(quote.candleWidth){xbase+=p9s.u7c((quote.candleWidth-candleWidth),2);candleWidth=quote.candleWidth;}
var color=colorFunction(this,quote,"shadow");if(!color)continue;if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(p9s.O7c(tick,panel.cacheLeft)||p9s.w7c(tick,panel.cacheRight)||!cache.top){top=(yAxis.semiLog?this.pixelFromPrice(quote.High,panel):(p9s.e7c((yAxis.high-quote.High),yAxis.multiplier))+yAxis.top);bottom=(yAxis.semiLog?this.pixelFromPrice(quote.Low,panel):(p9s.L7c((yAxis.high-quote.Low),yAxis.multiplier))+yAxis.top);var length=p9s.A7c(bottom,top);if(p9s.o7c(top,t)){if(p9s.a7c(top+length,t)){cache.top=top;cache.bottom=top;continue;}
length-=p9s.b7c(t,top);top=t;}
if(p9s.W7c(top+length,b)){length-=(top+length-b);}
cache.top=top;cache.bottom=cache.top+length;}
if(p9s.F7c(cache.top,b))continue;if(p9s.g7c(cache.bottom,t))continue;var xx=Math.floor(xbase)+0.5;context.beginPath();context.moveTo(xx,cache.top);context.lineTo(xx,cache.bottom);if(p9s.P7c(quote.Open,quote.Close)||(!quote.Open&&p9s.G7c(quote.Open,0))){var offset=this.offset;if(p9s.c7c(this.layout.chartType,"volume_candle")){offset=p9s.Q7c(candleWidth,2);}
var x0=p9s.M7c(xx,offset),x1=xx+offset,o=Math.floor((yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(p9s.y6c((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top))+0.5;if(p9s.T6c(o,b)&&p9s.f6c(o,t)){context.moveTo(x0,o);context.lineTo(x1,o);}
}
context.strokeStyle=color;context.stroke();}
}
;STXChart.prototype.scatter=function(panel){var chart=panel.chart,quotes=chart.dataSegment,context=this.chart.context;context.beginPath();context.lineWidth=4;var t=panel.yAxis.top,b=panel.yAxis.bottom,xbase=p9s.k6c(panel.left,0.5*this.layout.candleWidth,this.micropixels,1);for(var x=0;p9s.X6c(x,quotes.length);x++){xbase+=this.layout.candleWidth;var quote=quotes[x];if(!quote)continue;if(!quote.projection){if(quote.transform)quote=quote.transform;var scatter=[quote.Close];if(p9s.D6c("Scatter",quote))scatter=quote.Scatter;for(var i=0;p9s.J6c(i,scatter.length);i++){var top=this.pixelFromPrice(scatter[i],panel);if(p9s.p6c(top,t))continue;if(p9s.E6c(top,b))continue;context.moveTo(p9s.Y6c(xbase,2),top);context.lineTo(xbase+2,top);}
}
}
this.canvasColor("stx_scatter_chart");context.stroke();context.closePath();context.lineWidth=1;}
;STXChart.prototype.drawKagiSquareWave=function(panel,upStyleName,downStyleName){var chart=panel.chart;this.startClip(panel.name);var quotes=chart.dataSegment,context=chart.context,upStyle=this.canvasStyle(upStyleName),downStyle=this.canvasStyle(downStyleName);this.canvasColor(upStyleName);var upColor=context.strokeStyle;this.canvasColor(downStyleName);var downColor=context.strokeStyle,upWidth=1;if(upStyle.width&&p9s.V6c(parseInt(upStyle.width,10),25)){upWidth=Math.max(1,STX.stripPX(upStyle.width));}
var downWidth=1;if(downStyle.width&&p9s.i6c(parseInt(downStyle.width,10),25)){downWidth=Math.max(1,STX.stripPX(downStyle.width));}
context.beginPath();var leftTick=p9s.H6c(chart.dataSet.length,chart.scroll),yAxis=panel.yAxis,first=true,previousOpen=null,lastClose=null,trend=null,xbase=p9s.K6c(panel.left,0.5*this.layout.candleWidth,this.micropixels,1);for(var x=0;p9s.Q6c(x,quotes.length);x++){xbase+=this.layout.candleWidth;var quote=quotes[x];if(!quote)continue;if(quote.projection)break;if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(p9s.M6c(tick,panel.cacheLeft)||p9s.y4c(tick,panel.cacheRight)||!cache.open){cache.open=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(p9s.T4c((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top);cache.close=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(p9s.f4c((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);}
lastClose=cache.close;if(first){context.moveTo(Math.floor(xbase),cache.open);previousOpen=cache.open;if(p9s.k4c(cache.close,cache.open))trend=1;else trend=-1;first=false;}
if(trend!=-1&&p9s.m4c(cache.close,previousOpen)&&p9s.U4c(previousOpen,cache.open)){context.lineTo(Math.floor(xbase),previousOpen);context.strokeStyle=downColor;context.lineWidth=downWidth;context.stroke();context.closePath();context.beginPath();trend=-1;context.moveTo(Math.floor(xbase),previousOpen);}
else if(p9s.v4c(trend,1)&&p9s.n4c(cache.close,previousOpen)&&p9s.q4c(previousOpen,cache.open)){context.lineTo(Math.floor(xbase),previousOpen);context.strokeStyle=upColor;context.lineWidth=upWidth;context.stroke();context.closePath();context.beginPath();trend=1;context.moveTo(Math.floor(xbase),previousOpen);}
context.lineTo(Math.floor(xbase),cache.close);if(p9s.l4c(x+1,quotes.length)){context.lineTo(Math.floor(xbase+this.layout.candleWidth),cache.close);previousOpen=cache.open;}
}
if(trend==-1||(p9s.B4c(trend,null)&&p9s.R4c(lastClose,previousOpen))){context.strokeStyle=upColor;context.lineWidth=upWidth;}
else{context.strokeStyle=downColor;context.lineWidth=downWidth;}
context.stroke();context.closePath();this.endClip();context.lineWidth=1;}
;STXChart.prototype.drawPointFigureChart=function(panel,style,condition){var chart=panel.chart;this.startClip(panel.name);var quotes=chart.dataSegment,context=chart.context;this.canvasColor(style);var pfstyle=this.canvasStyle(style),paddingTop=parseInt(pfstyle.paddingTop,10),paddingBottom=parseInt(pfstyle.paddingBottom,10),paddingLeft=parseInt(pfstyle.paddingLeft,10),paddingRight=parseInt(pfstyle.paddingRight,10);if(pfstyle.width&&p9s.t4c(parseInt(pfstyle.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(pfstyle.width));}
else{context.lineWidth=2;}
context.beginPath();if(!this.chart.pandf)this.chart.pandf={"box":1,"reversal":3}
;var box=this.chart.pandf.box,leftTick=p9s.r4c(chart.dataSet.length,chart.scroll),yAxis=panel.yAxis,boxes,height,start,candleWidth=this.layout.candleWidth,xbase=p9s.d4c(panel.left,candleWidth,this.micropixels,1);for(var x=0;p9s.S4c(x,quotes.length);x++){xbase+=candleWidth;var quote=quotes[x];if(!quote)continue;if(quote.projection)break;if(quote.candleWidth)candleWidth=quote.candleWidth;if(quote.transform)quote=quote.transform;if(p9s.s0c(condition,"X")&&p9s.u0c(quote.Open,quote.Close))continue;else if(p9s.O0c(condition,"O")&&p9s.w0c(quote.Open,quote.Close))continue;var cache=quote.cache,tick=leftTick+x;if(p9s.e0c(tick,panel.cacheLeft)||p9s.L0c(tick,panel.cacheRight)||!cache.open){cache.open=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(p9s.A0c((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top);cache.close=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(p9s.o0c((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);}
var xxl=Math.round(xbase),xxr=Math.round(xbase+candleWidth);boxes=Math.abs(Math.round(p9s.a0c((quote.Close-quote.Open),box)));height=Math.abs(p9s.b0c((cache.open-cache.close),boxes));var voffset=p9s.W0c(height,2);start=cache.open;for(;p9s.F0c(boxes,0);boxes--){if(p9s.g0c(condition,"X")){context.moveTo(xxl+paddingLeft,p9s.P0c(start,paddingBottom,voffset));context.lineTo(p9s.K0c(xxr,paddingRight),p9s.C0c(start,height,paddingTop,voffset));context.moveTo(xxl+paddingLeft,p9s.M0c(start,height,paddingTop,voffset));context.lineTo(p9s.z3c(xxr,paddingRight),p9s.h3c(start,paddingBottom,voffset));start-=height;}
else if(p9s.k3c(condition,"O")){context.moveTo(p9s.m3c((xxl+xxr),2),start+paddingTop-voffset);context.bezierCurveTo(xxr+paddingRight,start+paddingTop-voffset,xxr+paddingRight,start+height-paddingBottom-voffset,p9s.U3c((xxl+xxr),2),start+height-paddingBottom-voffset);context.bezierCurveTo(p9s.v3c(xxl,paddingLeft),start+height-paddingBottom-voffset,p9s.n3c(xxl,paddingLeft),start+paddingTop-voffset,p9s.q3c((xxl+xxr),2),start+paddingTop-voffset);start+=height;}
}
}
context.stroke();this.endClip();context.lineWidth=1;}
;STXChart.prototype.drawBarChartHighPerformance=function(panel,style,condition){var chart=panel.chart,quotes=chart.dataSegment,context=chart.context,c=this.canvasStyle(style);if(c.width&&p9s.l3c(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
context.beginPath();var t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,length,leftTick=p9s.B3c(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks,yAxis=panel.yAxis,xbase=p9s.R3c(panel.left,0.5*this.layout.candleWidth,this.micropixels,1),hlen=p9s.H3c(chart.tmpWidth,2),voffset=p9s.K3c(context.lineWidth,2);for(var x=0;p9s.C3c(x,quotes.length);x++){xbase+=this.layout.candleWidth;var quote=quotes[x];if(!quote)continue;if(quote.projection)break;if(condition){if(p9s.S3c(condition,STXChart.CLOSEUP)&&p9s.s5c(quote.Close,quote.iqPrevClose))continue;else if(p9s.u5c(condition,STXChart.CLOSEDOWN)&&p9s.O5c(quote.Close,quote.iqPrevClose))continue;else if(p9s.w5c(condition,STXChart.CLOSEEVEN)&&p9s.e5c(quote.Close,quote.iqPrevClose))continue;}
if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(p9s.L5c(tick,panel.cacheLeft)||p9s.A5c(tick,panel.cacheRight)||!cache.top){top=(yAxis.semiLog?this.pixelFromPrice(quote.High,panel):(p9s.o5c((yAxis.high-quote.High),yAxis.multiplier))+yAxis.top);bottom=(yAxis.semiLog?this.pixelFromPrice(quote.Low,panel):(p9s.a5c((yAxis.high-quote.Low),yAxis.multiplier))+yAxis.top);length=p9s.b5c(bottom,top);cache.open=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(p9s.W5c((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top);cache.close=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(p9s.F5c((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);if(p9s.g5c(top,t)){if(p9s.P5c(top+length,t)){cache.top=top;cache.bottom=top;continue;}
length-=p9s.G5c(t,top);top=t;}
if(p9s.c5c(top+length,b)){length-=(top+length-b);}
cache.top=top;cache.bottom=top+length;}
var xx=Math.floor(xbase)+0.5;if(p9s.Q5c(cache.top,b)&&p9s.M5c(cache.bottom,t)){context.moveTo(xx,p9s.y1c(cache.top,voffset));context.lineTo(xx,cache.bottom+voffset);}
if(p9s.T1c(cache.open,t)&&p9s.f1c(cache.open,b)){context.moveTo(xx,cache.open);context.lineTo(p9s.k1c(xx,hlen),cache.open);}
if(p9s.m1c(cache.close,t)&&p9s.U1c(cache.close,b)){context.moveTo(xx,cache.close);context.lineTo(xx+hlen,cache.close);}
}
this.canvasColor(style);context.stroke();context.closePath();context.lineWidth=1;}
;STXChart.prototype.drawBarChart=function(panel,style,colorFunction){var chart=panel.chart;if(!chart){chart=panel;panel=panel.chart;}
var quotes=chart.dataSegment,context=chart.context,c=this.canvasStyle(style);if(c.width&&p9s.v1c(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
var t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,length,leftTick=p9s.n1c(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks,yAxis=panel.yAxis,colors={}
,hlen=p9s.q1c(chart.tmpWidth,2),voffset=p9s.l1c(context.lineWidth,2),candleWidth=this.layout.candleWidth,xbase=p9s.B1c(panel.left,0.5*candleWidth,this.micropixels,1);for(var x=0;p9s.i1c(x,quotes.length);x++){xbase+=p9s.H1c(candleWidth,2);candleWidth=this.layout.candleWidth;xbase+=p9s.K1c(candleWidth,2);var quote=quotes[x];if(!quote)continue;if(quote.projection)break;if(quote.candleWidth){xbase+=p9s.C1c((quote.candleWidth-candleWidth),2);candleWidth=quote.candleWidth;}
var color=colorFunction(this,quote);if(!color)continue;colors[color]=1;context.strokeStyle=color;context.beginPath();if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(p9s.S1c(tick,panel.cacheLeft)||p9s.s9c(tick,panel.cacheRight)||!cache.top){top=this.pixelFromPrice(quote.High,panel);bottom=this.pixelFromPrice(quote.Low,panel);length=p9s.u9c(bottom,top);cache.open=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(p9s.O9c((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top);cache.close=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(p9s.w9c((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);if(p9s.e9c(top,t)){if(p9s.L9c(top+length,t)){cache.top=top;cache.bottom=top;continue;}
length-=p9s.A9c(t,top);top=t;}
if(p9s.o9c(top+length,b)){length-=(top+length-b);}
cache.top=top;cache.bottom=top+length;}
var xx=Math.floor(xbase)+0.5;if(p9s.a9c(cache.top,b)&&p9s.b9c(cache.bottom,t)){context.moveTo(xx,p9s.W9c(cache.top,voffset));context.lineTo(xx,cache.bottom+voffset);}
if(p9s.F9c(cache.open,t)&&p9s.g9c(cache.open,b)){context.moveTo(xx,cache.open);context.lineTo(p9s.P9c(xx,hlen),cache.open);}
if(p9s.G9c(cache.close,t)&&p9s.c9c(cache.close,b)){context.moveTo(xx,cache.close);context.lineTo(xx+hlen,cache.close);}
context.stroke();}
context.lineWidth=1;return colors;}
;STXChart.prototype.plotLineChart=function(panel,quotes,field,parameters,colorFunction){var skipProjections=false,skipTransform=false,noSlopes=false,tension=0,points=[];if(parameters){skipProjections=parameters.skipProjections;skipTransform=parameters.skipTransform;noSlopes=parameters.noSlopes;tension=parameters.tension;}
var chart=panel.chart,context=this.chart.context,first=true,yAxis=panel.yAxis,t=yAxis.top,b=yAxis.bottom,leftTick=p9s.Q9c(chart.dataSet.length,chart.scroll),lastQuote=null,colors={}
,lastXY=[0,0],candleWidth=this.layout.candleWidth,xbase=p9s.M9c(panel.left,(parameters.noSlopes?1:0.5)*candleWidth,this.micropixels,1);this.startClip(panel.name);context.beginPath();for(var i=0;p9s.z2c(i,quotes.length);i++){xbase+=p9s.h2c(candleWidth,2);if(parameters.noSlopes)xbase+=p9s.I2c(candleWidth,2);candleWidth=this.layout.candleWidth;if(!parameters.noSlopes)xbase+=p9s.Z2c(candleWidth,2);var quote=quotes[i];if(!quote)continue;if(skipProjections&&quote.projection)break;if(quote.candleWidth){if(!parameters.noSlopes)xbase+=p9s.X2c((quote.candleWidth-candleWidth),2);candleWidth=quote.candleWidth;}
if(!skipTransform&&quote.transform)quote=quote.transform;var x=xbase,cache=quote.cache,tick=leftTick+i;if(!quote[field]&&p9s.D2c(quote[field],0))continue;if(p9s.J2c(tick,panel.cacheLeft)||p9s.p2c(tick,panel.cacheRight)||!cache[field]){cache[field]=(yAxis.semiLog?this.pixelFromPrice(quote[field],panel):(p9s.E2c((yAxis.high-quote[field]),yAxis.multiplier))+yAxis.top);}
if(p9s.Y2c(x,panel.right))lastQuote=quote;if(p9s.V2c(i,quotes.length-1)){if(this.extendLastTick)x+=p9s.i2c(candleWidth,2);if(parameters.lastTickOffset)x+=parameters.lastTickOffset;}
var y=cache[field],pattern=null;if(colorFunction){var color=colorFunction(this,quote);if(!color)continue;if(typeof color=="object"){pattern=color.pattern;color=color.color;}
if(p9s.H2c(context.strokeStyle,color)){if(!first){context.stroke();context.beginPath();context.moveTo(lastXY[0],lastXY[1]);}
context.strokeStyle=color;colors[color]=1;}
}
if(first){first=false;if(noSlopes||p9s.K2c(leftTick,0)){context.moveTo(i?x:0,y);if(tension){points.push(x,y);}
else{if(pattern){context.dashedLineTo(0,y,x,y,pattern);}
else{context.lineTo(x,y);}
}
}
else if(p9s.C2c(leftTick,0)){var baseline=chart.dataSet[leftTick];if(!skipTransform&&baseline.transform)baseline=baseline.transform;var y0=baseline[field];if(!y0||isNaN(y0)){context.moveTo(i?x:0,y);if(tension){points.push(x,y);}
}
else{y0=(yAxis.semiLog?this.pixelFromPrice(y0,panel):(p9s.S2c((yAxis.high-y0),yAxis.multiplier))+yAxis.top);var x0=p9s.s8c(x,candleWidth);if(pattern){context.dashedLineTo(x0,y0,x,y,pattern);}
else{context.moveTo(x0,y0);if(tension){points.push(x0,y0,x,y);}
else{context.lineTo(x,y);}
}
}
}
}
else{if(noSlopes){var quote1=quotes[p9s.u8c(i,1)];if(!quote1)continue;if(!skipTransform&&quote1.transform)quote1=quote1.transform;if(i){if(pattern){context.dashedLineTo(lastXY[0],lastXY[1],x,lastXY[1],pattern);}
else{context.lineTo(x,lastXY[1]);}
context.moveTo(x,y);}
if(p9s.O8c(i,quotes.length-1)){if(pattern){context.dashedLineTo(x,y,x+candleWidth,y,pattern);}
else{context.lineTo(x+candleWidth,y);}
}
}
else{if(pattern){context.dashedLineTo(lastXY[0],lastXY[1],x,y,pattern);}
else{if(tension){points.push(x,y);}
else{context.lineTo(x,y);}
}
}
}
lastXY=[x,y];if(p9s.w8c(i,(quotes.length-1))&&tension){points.push(x,y);plotSplinePrimitive(points,tension,context);}
}
context.stroke();this.endClip();if(parameters.label&&lastQuote){var txt;if(yAxis.priceFormatter){txt=yAxis.priceFormatter(this,panel,lastQuote[field],parameters.labelDecimalPlaces);}
else{txt=this.formatYAxisPrice(lastQuote[field],panel,parameters.labelDecimalPlaces);}
var yaxisLabelStyle=this.yaxisLabelStyle;if(panel.yAxis.yaxisLabelStyle)yaxisLabelStyle=panel.yAxis.yaxisLabelStyle;var labelcolor=p9s.e8c(yaxisLabelStyle,"noop")?context.strokeStyle:null;this.yAxisLabels.push({src:"plot","args":[panel,txt,lastQuote.cache[field],p9s.L8c(yaxisLabelStyle,"noop")?"#FFFFFF":context.strokeStyle,labelcolor]}
);}
return colors;}
;STXChart.prototype.plotMountainChart=function(panel,quotes,field,parameters){var skipProjections=false,skipTransform=false,reverse=false,tension=0,points=[];if(parameters){skipProjections=parameters.skipProjections;skipTransform=parameters.skipTransform;reverse=parameters.reverse;tension=parameters.tension;}
var chart=panel.chart,context=this.chart.context,first=true,t=panel.yAxis.top,b=panel.yAxis.bottom;this.startClip(panel.name);context.beginPath();var leftTick=p9s.A8c(chart.dataSet.length,chart.scroll),firstX=null,firstY=null,yAxis=panel.yAxis,x=0;for(var i=0;p9s.o8c(i,quotes.length);i++){var quote=quotes[i];if(!quote)continue;if(skipProjections&&quote.projection)break;if(!skipTransform&&quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+i;if(p9s.a8c(tick,panel.cacheLeft)||p9s.b8c(tick,panel.cacheRight)||!cache[field]){if(!quote[field]&&p9s.W8c(quote[field],0))continue;cache[field]=(yAxis.semiLog?this.pixelFromPrice(quote[field],panel):(p9s.F8c((yAxis.high-quote[field]),yAxis.multiplier))+yAxis.top);}
x=panel.left+p9s.g8c((i+0.5),this.layout.candleWidth)+this.micropixels-1;if(p9s.P8c(i,quotes.length-1)){if(this.extendLastTick)x+=p9s.G8c(this.layout.candleWidth,2);if(parameters.lastTickOffset)x+=parameters.lastTickOffset;}
if(p9s.c8c(firstX,null))firstX=x;var y=cache[field];if(p9s.Q8c(firstY,null))firstY=y;if(first){first=false;if(p9s.M8c(leftTick,0)){context.moveTo(x,y);if(tension){points.push(x,y);}
}
else{var baseline=chart.dataSet[leftTick];if(baseline.transform)baseline=baseline.transform;var y0=baseline[field];y0=(yAxis.semiLog?this.pixelFromPrice(y0,panel):(p9s.y7H((yAxis.high-y0),yAxis.multiplier))+yAxis.top);firstX=p9s.T7H(x,this.layout.candleWidth);context.moveTo(firstX,y0);if(tension){points.push(firstX,y0,x,y);}
else{context.lineTo(x,y);}
}
}
else{if(tension){points.push(x,y);}
else{context.lineTo(x,y);}
}
if(p9s.f7H(i,(quotes.length-1))&&tension){points.push(x,y);plotSplinePrimitive(points,tension,context);}
}
context.lineTo(x,reverse?t:b);context.lineTo(firstX,reverse?t:b);if(reverse){if(p9s.k7H(firstY,t))firstY=t;}
else{if(p9s.m7H(firstY,b))firstY=b;}
context.lineTo(firstX,firstY);context.fill();context.closePath();this.endClip();}
;STXChart.prototype.drawLineChart=function(panel,style,colorFunction){var context=this.chart.context,c=this.canvasStyle(style);if(c.width&&p9s.U7H(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
this.canvasColor(style);var params={skipProjections:true}
;if(panel.chart.tension)params.tension=panel.chart.tension;if(panel.chart.lastTickOffset)params.lastTickOffset=panel.chart.lastTickOffset;var rc=this.plotLineChart(panel,panel.chart.dataSegment,"Close",params,colorFunction);context.lineWidth=1;return rc;}
;STXChart.prototype.drawMountainChart=function(panel,style,colorFunction){var E3E="Cl",context=this.chart.context;if(!style)style="stx_mountain_chart";var c=this.canvasStyle(style);if(c.width&&p9s.v7H(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
var top=this.pixelFromPrice(panel.chart.highValue,panel);if(isNaN(top))top=0;var backgroundColor=c.backgroundColor,color=c.color;if(color&&!STX.isTransparent(color)){var gradient=context.createLinearGradient(0,top,0,panel.yAxis.bottom);gradient.addColorStop(0,backgroundColor);gradient.addColorStop(1,color);context.fillStyle=gradient;}
else{context.fillStyle=backgroundColor;}
var params={skipProjections:true}
;if(panel.chart.tension)params.tension=panel.chart.tension;if(panel.chart.lastTickOffset)params.lastTickOffset=panel.chart.lastTickOffset;var padding=parseInt(c.padding,10),strokeStyle=c.borderTopColor,rc=null;if(strokeStyle&&!STX.isTransparent(strokeStyle)){if(padding&&!STX.isIE8){var tempCanvas=context.canvas.cloneNode(true);tempCanvas.getContext("2d").drawImage(context.canvas,0,0);context.save();context.clearRect(0,0,context.canvas.width,context.canvas.height);}
}
this.plotMountainChart(panel,panel.chart.dataSegment,(E3E+B6E+y4E),params);if(strokeStyle&&!STX.isTransparent(strokeStyle)){if(padding&&!STX.isIE8){context.lineWidth+=p9s.n7H(2,padding);context.globalCompositeOperation="destination-out";this.plotLineChart(panel,panel.chart.dataSegment,"Close",params);context.globalCompositeOperation="destination-over";context.drawImage(tempCanvas,0,0);context.restore();}
context.strokeStyle=strokeStyle;rc=this.plotLineChart(panel,panel.chart.dataSegment,"Close",params,colorFunction);}
context.lineWidth=1;return rc;}
;STXChart.prototype.drawWaveChart=function(panel){var chart=panel.chart,quotes=chart.dataSegment,context=this.chart.context;this.startClip(panel.name);context.beginPath();var first=false,reset=false,t=panel.yAxis.top,b=panel.yAxis.bottom,xbase=panel.left+Math.floor(-0.5*this.layout.candleWidth+this.micropixels);for(var i=0;p9s.q7H(i,quotes.length);i++){xbase+=this.layout.candleWidth;var quote=quotes[i];if(!quote)continue;if(quote.projection)break;if(quote.transform)quote=quote.transform;var x=p9s.l7H(xbase,3*this.layout.candleWidth/8),y=this.pixelFromPrice(quote.Open,panel);if(p9s.B7H(y,t)){y=t;if(reset){context.moveTo(x,y);continue;}
reset=true;}
else if(p9s.R7H(y,b)){y=b;if(reset){context.moveTo(x,y);continue;}
reset=true;}
else{reset=false;}
if(!first){first=true;var leftTick=p9s.t7H(chart.dataSet.length,chart.scroll);if(p9s.r7H(leftTick,0)){context.moveTo(x,y);}
else if(p9s.d7H(leftTick,0)){var baseline=chart.dataSet[p9s.j7H(leftTick,1)];if(baseline.transform)baseline=baseline.transform;var y0=baseline.Close;y0=(panel.yAxis.semiLog?this.pixelFromPrice(y0,panel):(p9s.x7H((panel.yAxis.high-y0),panel.yAxis.multiplier))+t);y0=Math.min(Math.max(y0,t),b);context.moveTo(panel.left+p9s.N6H((i-1),this.layout.candleWidth)+this.micropixels,y0);context.lineTo(x,y);}
context.moveTo(x,y);}
else{context.lineTo(x,y);}
x+=p9s.z6H(this.layout.candleWidth,4);if(p9s.h6H(quote.Open,quote.Close)){y=this.pixelFromPrice(quote.Low,panel);if(p9s.I6H(y,t))y=t;if(p9s.Z6H(y,b))y=b;context.lineTo(x,y);x+=p9s.X6H(this.layout.candleWidth,4);y=this.pixelFromPrice(quote.High,panel);if(p9s.D6H(y,t))y=t;if(p9s.J6H(y,b))y=b;context.lineTo(x,y);}
else{y=this.pixelFromPrice(quote.High,panel);if(p9s.p6H(y,t))y=t;if(p9s.E6H(y,b))y=b;context.lineTo(x,y);x+=p9s.Y6H(this.layout.candleWidth,4);y=this.pixelFromPrice(quote.Low,panel);if(p9s.V6H(y,t))y=t;if(p9s.i6H(y,b))y=b;context.lineTo(x,y);}
x+=p9s.H6H(this.layout.candleWidth,4);y=this.pixelFromPrice(quote.Close,panel);if(p9s.K6H(y,t))y=t;if(p9s.C6H(y,b))y=b;context.lineTo(x,y);}
var c=this.canvasStyle("stx_line_chart");if(c.width&&p9s.S6H(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
this.canvasColor("stx_line_chart");context.stroke();context.closePath();this.endClip();context.lineWidth=1;}
;STXChart.prototype.updateFloatHRLabel=function(panel){var o0E="ctAr",K37="Re",arr=panel.yaxisLHS.concat(panel.yaxisRHS),cy=this.crossYActualPos?this.crossYActualPos:this.cy;if(this.floatCanvas.isDirty)STX.clearCanvas(this.floatCanvas,this);if(p9s.s4H(this.controls.crossX.style.display,"none"))return ;if(this.controls.crossY){var crosshairWidth=panel.width;if(p9s.u4H(this.yaxisLabelStyle,(z37+p9s.u1E+i9E+P6E+K37+o0E+z37+l37)))crosshairWidth-=7;this.controls.crossY.style.left=panel.left+"px";this.controls.crossY.style.width=crosshairWidth+"px";}
for(var i=0;p9s.O4H(i,arr.length);i++){var yAxis=arr[i],price=this.valueFromPixel(cy,panel,yAxis);if(isNaN(price))continue;if((panel.min||p9s.w4H(panel.min,0))&&p9s.e4H(price,panel.min))continue;if((panel.max||p9s.L4H(panel.max,0))&&p9s.A4H(price,panel.max))continue;var labelDecimalPlaces=null;if(p9s.o4H(yAxis,panel.chart.yAxis)){labelDecimalPlaces=0;if(p9s.a4H(yAxis.shadow,1000))labelDecimalPlaces=2;if(p9s.b4H(yAxis.shadow,5))labelDecimalPlaces=4;if(yAxis.decimalPlaces||p9s.W4H(yAxis.decimalPlaces,0))labelDecimalPlaces=yAxis.decimalPlaces;}
if(yAxis.priceFormatter){price=yAxis.priceFormatter(this,panel,price,yAxis);}
else{price=this.formatYAxisPrice(price,panel,labelDecimalPlaces,yAxis);}
var style=this.canvasStyle("stx-float-price");this.createYAxisLabel(panel,price,cy,style.backgroundColor,style.color,this.floatCanvas.context,yAxis);this.floatCanvas.isDirty=true;}
}
;STXChart.prototype.headsUpHR=function(){var M7E="headsUpHR";if(this.runPrepend(M7E,arguments))return ;var panel=this.currentPanel;if(!panel)return ;var chart=panel.chart;this.updateFloatHRLabel(panel);if(this.controls.floatDate&&!STXChart.hideDates()){var bar=this.barFromPixel(this.cx),prices=chart.xaxis[bar];if(prices&&prices.DT){if(chart.xAxis.formatter){this.controls.floatDate.innerHTML=chart.xAxis.formatter(prices.DT);}
else if(this.internationalizer){var str=this.internationalizer.monthDay.format(prices.DT);if(!STXChart.isDailyInterval(this.layout.interval))str+=v4E+this.internationalizer.hourMinute.format(prices.DT);else{str=this.internationalizer.yearMonthDay.format(prices.DT);}
this.controls.floatDate.innerHTML=str;}
else{var m=prices.DT.getMonth()+p9s.y94;if(p9s.F4H(m,Y67))m=l9E+m;var d=prices.DT.getDate();if(p9s.g4H(d,Y67))d=l9E+d;var h=prices.DT.getHours();if(p9s.P4H(h,Y67))h=l9E+h;var mn=prices.DT.getMinutes();if(p9s.G4H(mn,Y67))mn=l9E+mn;if(STXChart.isDailyInterval(this.layout.interval))this.controls.floatDate.innerHTML=m+r1E+d+r1E+prices.DT.getFullYear();else{this.controls.floatDate.innerHTML=m+r1E+d+v4E+h+O37+mn;var isSecond=(chart.xAxis.activeTimeUnit&&p9s.c4H(chart.xAxis.activeTimeUnit,STX.SECOND))||p9s.Q4H(this.layout.timeUnit,d77),isMS=(chart.xAxis.activeTimeUnit&&p9s.M4H(chart.xAxis.activeTimeUnit,STX.MILLISECOND))||p9s.y0H(this.layout.timeUnit,G77);if(isSecond||isMS){var sec=prices.DT.getSeconds();if(p9s.T0H(sec,Y67))sec=l9E+sec;this.controls.floatDate.innerHTML+=(O37+sec);if(isMS){var mil=prices.DT.getMilliseconds();if(p9s.f0H(mil,Y67))mil=l9E+mil;if(p9s.k0H(mil,B07))mil=l9E+mil;this.controls.floatDate.innerHTML+=(O37+mil);}
}
}
}
}
else if(prices&&prices.index){this.controls.floatDate.innerHTML=prices.index;}
else{this.controls.floatDate.innerHTML=d5E;}
}
this.runAppend(M7E,arguments);}
;STXChart.prototype.setCrosshairColors=function(){return ;}
;STXChart.prototype.magnetize=function(){this.magnetizedPrice=null;if(this.runPrepend("magnetize",arguments))return ;if((p9s.m0H(this.currentVectorParameters.vectorType,"annotation")||p9s.U0H(this.currentVectorParameters.vectorType,"callout"))&&STXChart.drawingLine)return ;if(p9s.v0H(this.currentVectorParameters.vectorType,"projection"))return ;if(p9s.n0H(this.currentVectorParameters.vectorType,"freeform"))return ;var panel=this.currentPanel;if(p9s.q0H(panel.name,panel.chart.name)){var chart=panel.chart,tick=this.tickFromPixel(p9s.l0H(STXChart.crosshairX,this.left),chart);if(p9s.B0H(tick,chart.dataSet.length))return ;var prices=chart.dataSet[tick];if(!prices)return ;var price=this.valueFromPixel(this.cy,panel);this.magnetizedPrice=prices.Close;if(p9s.R0H(this.layout.chartType,(s37+p9s.F1E))||p9s.t0H(this.layout.chartType,"candle")||p9s.r0H(this.layout.chartType,"colored_bar")||p9s.d0H(this.layout.chartType,"hollow_candle")||p9s.j0H(this.layout.chartType,"volume_candle")){var fields=["Open","High","Low","Close"],closest=1000000000;for(var i=0;p9s.x0H(i,fields.length);i++){var fp=prices[fields[i]];if(p9s.N3H(Math.abs(price-fp),closest)){closest=Math.abs(p9s.z3H(price,fp));this.magnetizedPrice=fp;}
}
}
var x=this.pixelFromTick(tick,chart),y=this.pixelFromPrice(this.magnetizedPrice,this.currentPanel),ctx=this.chart.tempCanvas.context;ctx.beginPath();ctx.lineWidth=1;var radius=p9s.h3H(Math.max(this.layout.candleWidth,8),2);ctx.arc(x,y,radius,0,p9s.I3H(2,Math.PI),false);ctx.fillStyle="#FFFFFF";ctx.strokeStyle="#000000";ctx.fill();ctx.stroke();ctx.closePath();}
this.runAppend("magnetize",arguments);}
;STXChart.prototype.positionCrosshairsAtPointer=function(){if(!this.currentPanel)return ;var chart=this.currentPanel.chart,rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.right=this.left+this.width;this.bottom=this.top+this.height;var tick=this.tickFromPixel(this.backOutX(STXChart.crosshairX),chart);this.cy=this.backOutY(STXChart.crosshairY);this.cx=this.backOutX(STXChart.crosshairX);this.controls.crossX.style.left=(p9s.Z3H(this.pixelFromTick(tick,chart),0.5))+"px";this.controls.crossY.style.top=this.backOutY(STXChart.crosshairY)+"px";this.updateChartAccessories();}
;STXChart.prototype.doDisplayCrosshairs=function(){var f7E="sh",v24="doDisplayCrosshairs";if(this.runPrepend(v24,arguments))return ;if(this.displayInitialized){if(!this.layout.crosshair&&(p9s.X3H(this.currentVectorParameters.vectorType,d5E)||!this.currentVectorParameters.vectorType)){this.undisplayCrosshairs();}
else if(STX.Drawing[this.currentVectorParameters.vectorType]&&(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw){this.undisplayCrosshairs();}
else{if(p9s.D3H(this.controls.crossX.style.display,d5E)){this.controls.crossX.style.display=d5E;this.controls.crossY.style.display=d5E;if(this.preferences.magnet&&this.currentVectorParameters.vectorType){STX.unappendClassName(this.container,Q0E);}
else{STX.appendClassName(this.container,(j1E+z47+r1E+u4E+p9s.F1E+B6E+f7E+G3E+p9s.F1E+r1E+Q9E+i9E));}
}
if(this.controls.floatDate&&!STXChart.hideDates()){this.controls.floatDate.style.display=x84;}
}
}
this.runAppend(v24,arguments);}
;STXChart.prototype.undisplayCrosshairs=function(){var H24="undisplayCrosshairs";if(this.runPrepend(H24,arguments))return ;if(this.controls.crossX){if(p9s.J3H(this.controls.crossX.style.display,n07)){this.controls.crossX.style.display=n07;this.controls.crossY.style.display=n07;}
}
if(this.displayInitialized&&this.controls.floatDate){this.controls.floatDate.style.display=n07;}
STX.unappendClassName(this.container,Q0E);if(this.floatCanvas&&this.floatCanvas.isDirty)STX.clearCanvas(this.floatCanvas,this);this.runAppend(H24,arguments);}
;STXChart.prototype.modalBegin=function(){var P0E="modal";this.openDialog=P0E;this.undisplayCrosshairs();}
;STXChart.prototype.modalEnd=function(){this.cancelTouchSingleClick=C2E;this.openDialog=d5E;this.doDisplayCrosshairs();}
;STXChart.prototype.updateChartAccessories=function(){var S24="updateChartAccessories",m67="essori",v5E="cc",L9E="ateC",G14="upd";if(this.runPrepend((G14+L9E+I8E+w2E+a47+v5E+m67+y4E+j1E),arguments))return ;this.accessoryTimer=p9s.r2E;this.lastAccessoryUpdate=new Date().getTime();var floatDate=this.controls.floatDate;if(floatDate){var panel=this.currentPanel;if(!panel)panel=this.chart.panel;if(panel){var chart=panel.chart,tick=this.tickFromPixel(this.backOutX(STXChart.crosshairX),chart),bottom=p9s.p3H(this.xAxisAsFooter,C2E)?p9s.T94:p9s.E3H(this.chart.canvasHeight,panel.chart.bottom);floatDate.style.left=(p9s.Y3H(this.pixelFromTick(tick,chart),(floatDate.offsetWidth/p9s.M14),l0E))+(p9s.f9E+p9s.X37);floatDate.style.bottom=bottom+i67;}
}
this.headsUpHR();this.runAppend(S24,arguments);}
;STXChart.prototype.mousemove=function(e$){var e=e$?e$:event;STXChart.crosshairX=e.clientX;STXChart.crosshairY=e.clientY;if(this.runPrepend(Z0E,arguments))return ;if(!this.displayInitialized)return ;if(p9s.R3H(this.openDialog,d5E))return ;this.mousemoveinner(e.clientX,e.clientY);this.runAppend(Z0E,arguments);}
;STXChart.prototype.setResizeTimer=function(ms){this.resizeDetectMS=ms;function closure(self){return function(){if(!self.chart.canvas)return ;if(!STX.isAndroid){if(p9s.t3H(self.chart.canvas.height,Math.floor(self.devicePixelRatio*self.chart.container.clientHeight))||p9s.r3H(self.chart.canvas.width,Math.floor(self.devicePixelRatio*self.chart.container.clientWidth))){self.resizeChart();return ;}
}
}
;}
if(ms){if(this.resizeTimeout)window.clearInterval(this.resizeTimeout);this.resizeTimeout=window.setInterval(closure(this),ms);}
else{if(this.resizeTimeout)window.clearInterval(this.resizeTimeout);this.resizeTimeout=null;}
}
;STXChart.prototype.whichYAxis=function(panel,x){if(typeof x==="undefined")x=this.cx;if(panel){var arr=panel.yaxisLHS.concat(panel.yaxisRHS);for(var i=0;p9s.d3H(i,arr.length);i++){var yAxis=arr[i];if(p9s.j3H(yAxis.left,x)&&p9s.x3H(yAxis.left+yAxis.width,x))return yAxis;}
}
return this.chart.panel.yAxis;}
;STXChart.prototype.mousemoveinner=function(epX,epY){var d6E="sem",c4E="ov",W5E="ove",Y77="pan";if(!this.chart.canvas)return ;if(!STX.isAndroid&&!STX.isIOS7or8){if(p9s.N5H(this.chart.canvas.height,Math.floor(this.devicePixelRatio*this.chart.container.clientHeight))||p9s.z5H(this.chart.canvas.width,Math.floor(this.devicePixelRatio*this.chart.container.clientWidth))){this.resizeChart();return ;}
}
var value;if(this.runPrepend("mousemoveinner",arguments))return ;var rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.right=this.left+this.width;this.bottom=this.top+this.height;STXChart.crosshairX=epX;STXChart.crosshairY=epY;var cy=this.cy=this.crossYActualPos=this.backOutY(STXChart.crosshairY),cx=this.cx=this.backOutX(STXChart.crosshairX);this.currentPanel=this.whichPanel(cy);if(!this.currentPanel)this.currentPanel=this.chart.panel;if(!this.currentPanel)return ;var chart=this.currentPanel.chart;if(chart.dataSet){this.crosshairTick=this.tickFromPixel(cx,chart);value=this.valueFromPixel(cy,this.currentPanel);var chField=p9s.h5H(this.currentPanel.name,"chart")?this.preferences.horizontalCrosshairField:this.currentPanel.horizontalCrosshairField;if(chField&&p9s.I5H(this.crosshairTick,chart.dataSet.length)&&this.crosshairTick>-1){value=chart.dataSet[this.crosshairTick][chField];this.crossYActualPos=this.pixelFromPriceTransform(value,this.currentPanel);}
this.crosshairValue=this.adjustIfNecessary(this.currentPanel,this.crosshairTick,value);}
if(p9s.Z5H(STXChart.crosshairX,this.left)&&p9s.X5H(STXChart.crosshairX,this.right)&&p9s.D5H(STXChart.crosshairY,this.top)&&p9s.J5H(STXChart.crosshairY,this.bottom)){STXChart.insideChart=true;}
else{STXChart.insideChart=false;}
this.overXAxis=p9s.p5H(STXChart.crosshairY,this.top+this.chart.panel.yAxis.bottom)&&p9s.E5H(STXChart.crosshairY,this.top+this.chart.panel.bottom)&&STXChart.insideChart;this.overYAxis=(p9s.Y5H(this.cx,this.currentPanel.right)||p9s.V5H(this.cx,this.currentPanel.left))&&STXChart.insideChart;if(this.overXAxis||this.overYAxis||(!STXChart.insideChart&&!this.grabbingScreen)){this.undisplayCrosshairs();if(!this.overXAxis&&!this.overYAxis)return ;}
if(!this.displayCrosshairs&&!STXChart.resizingPanel){this.undisplayCrosshairs();return ;}
var bHandle=this.controls.baselineHandle;if(this.repositioningBaseline){panel=this.panels[this.chart.panel.name];this.chart.baseline.userLevel=this.adjustIfNecessary(panel,this.crosshairTick,this.valueFromPixelUntransform(this.backOutY(STXChart.crosshairY),panel));if(p9s.i5H(Date.now()-this.repositioningBaseline.lastDraw,100)){this.draw();this.repositioningBaseline.lastDraw=Date.now();}
return ;}
if(this.grabbingScreen&&!STXChart.resizingPanel){if(this.anyHighlighted){STX.clearCanvas(this.chart.tempCanvas,this);this.anyHighlighted=false;var n;for(n in this.overlays){this.overlays[n].highlight=false;}
for(n in chart.series){chart.series[n].highlight=false;}
this.displaySticky();}
if(this.preferences.magnet&&this.currentVectorParameters.vectorType){STX.clearCanvas(this.chart.tempCanvas,this);}
if(this.grabStartX==-1){this.grabStartX=STXChart.crosshairX;this.grabStartScrollX=chart.scroll;}
if(this.grabStartY==-1){this.grabStartY=STXChart.crosshairY;this.grabStartScrollY=chart.panel.yAxis.scroll;}
var dx=p9s.H5H(STXChart.crosshairX,this.grabStartX),dy=p9s.K5H(STXChart.crosshairY,this.grabStartY);if(p9s.C5H(dx,0)&&p9s.S5H(dy,0))return ;if(p9s.s1H(Math.abs(dx)+Math.abs(dy),5))this.grabOverrideClick=true;var push;if(this.allowZoom&&p9s.u1H(this.grabMode,"pan")&&(p9s.O1H(this.grabMode.indexOf("zoom"),0)||this.ctrl||this.overXAxis||this.overYAxis)){if(p9s.w1H(this.grabMode,"")){if(this.overXAxis)this.grabMode="zoom-x";else if(this.overYAxis)this.grabMode="zoom-y";}
if(p9s.e1H(this.grabMode,"zoom-x"))dy=0;else if(p9s.L1H(this.grabMode,"zoom-y"))dx=0;push=p9s.A1H(dx,25);var centerMe=true;if(p9s.o1H(chart.scroll,chart.maxTicks))centerMe=false;var newCandleWidth=this.grabStartCandleWidth+push;if(p9s.a1H(newCandleWidth,this.minimumCandleWidth))newCandleWidth=this.minimumCandleWidth;var pct=p9s.b1H((this.layout.candleWidth-newCandleWidth),this.layout.candleWidth);if(p9s.W1H(pct,0.1)){newCandleWidth=p9s.F1H(this.layout.candleWidth,0.9);}
else if(pct<-0.1){newCandleWidth=p9s.g1H(this.layout.candleWidth,1.1);}
if(STX.ipad){if(p9s.P1H(Math.round((this.chart.width/this.layout.candleWidth)-0.499)-1,STXChart.ipadMaxTicks)&&p9s.G1H(Math.round((this.chart.width/newCandleWidth)-0.499)-1,STXChart.ipadMaxTicks))return ;}
var newMaxTicks;if(this.pinchingCenter){var x=this.backOutX(this.pinchingCenter),tick1=this.tickFromPixel(x,chart);this.setCandleWidth(newCandleWidth,chart);var newTick=this.tickFromPixel(x,chart);chart.scroll+=Math.floor((p9s.c1H(newTick,tick1)));}
else if(centerMe){newMaxTicks=Math.round(p9s.Q1H((this.chart.width/newCandleWidth),0.499));if(p9s.M1H(newMaxTicks,chart.maxTicks)){this.setCandleWidth(newCandleWidth,chart);chart.scroll+=Math.round(p9s.y9H((newMaxTicks-chart.maxTicks),2));}
}
else{newMaxTicks=Math.round(p9s.T9H((this.chart.width/newCandleWidth),0.499));if(p9s.f9H(newMaxTicks,Math.round((this.chart.width/this.layout.candleWidth)-0.499))){this.setCandleWidth(newCandleWidth,chart);var wsInTicks=Math.round(p9s.k9H(this.preferences.whitespace,this.layout.candleWidth));chart.scroll=p9s.m9H(chart.maxTicks,wsInTicks);}
}
this.layout.span=null;var yAxis=this.whichYAxis(this.grabbingPanel,this.cx);if(this.overYAxis){yAxis.zoom=Math.round(this.grabStartZoom+dy);if(p9s.U9H(this.grabStartZoom,yAxis.height)){if(p9s.v9H(yAxis.zoom,yAxis.height))yAxis.zoom=p9s.n9H(yAxis.height,1);}
else{if(p9s.q9H(yAxis.zoom,yAxis.height))yAxis.zoom=yAxis.height+1;}
}
}
else{if(this.allowScroll){if(p9s.l9H(Math.abs(dy),this.yTolerance)){if(!this.yToleranceBroken){dy=0;if(p9s.B9H(dx,0))return ;}
}
else{this.yToleranceBroken=true;}
this.grabMode=(Y77);push=Math.round(p9s.R9H(dx,this.layout.candleWidth));this.microscroll=p9s.t9H(push,(dx/this.layout.candleWidth));this.micropixels=this.layout.candleWidth*this.microscroll*-1;if(this.shift)push*=5;chart.scroll=this.grabStartScrollX+push;if(p9s.r9H(chart.scroll,1))chart.scroll=1;if(p9s.d9H(chart.scroll,chart.maxTicks)){this.preferences.whitespace=this.initialWhitespace;}
else{this.preferences.whitespace=p9s.j9H((chart.maxTicks-chart.scroll),this.layout.candleWidth);}
if(p9s.x9H(this.currentPanel.name,chart.name)){this.chart.panel.yAxis.scroll=this.grabStartScrollY+dy;}
}
this.dispatch((m2E+W5E),{stx:this,panel:this.currentPanel,x:this.cx,y:this.cy,grab:this.grabbingScreen}
);}
var clsrFunc=function(stx){return function(){stx.draw();}
;}
;if(STXChart.useAnimation){window.requestAnimationFrame(clsrFunc(this));}
else{this.draw();}
if(this.activeDrawing){STX.clearCanvas(this.chart.tempCanvas,this);this.activeDrawing.render(this.chart.tempCanvas.context);this.activeDrawing.measure();}
this.undisplayCrosshairs();return ;}
else{this.grabMode="";}
this.grabbingPanel=this.currentPanel;if(this.overXAxis||this.overYAxis)return ;this.controls.crossX.style.left=(p9s.N2H(this.pixelFromTick(this.crosshairTick,chart),0.5))+"px";this.controls.crossY.style.top=this.crossYActualPos+"px";this.setCrosshairColors();if(STXChart.insideChart&&!STXChart.resizingPanel){if(!STX.Drawing[this.currentVectorParameters.vectorType]||!(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw){this.doDisplayCrosshairs();}
if(p9s.z2H(this.accessoryTimer,null))clearTimeout(this.accessoryTimer);if(STXChart.drawingLine||!STX.touchDevice){this.updateChartAccessories();}
else{if(p9s.h2H(new Date().getTime()-this.lastAccessoryUpdate,100))this.updateChartAccessories();this.accessoryTimer=setTimeout((function(stx){return function(){stx.updateChartAccessories();}
;}
)(this),10);}
}
else{this.undisplayCrosshairs();}
var panel;if(this.repositioningDrawing){panel=this.panels[this.repositioningDrawing.panelName];value=this.adjustIfNecessary(panel,this.crosshairTick,this.valueFromPixelUntransform(this.backOutY(STXChart.crosshairY),panel));if(this.preferences.magnet&&this.magnetizedPrice&&p9s.I2H(panel.name,panel.chart.name)){value=this.adjustIfNecessary(panel,this.crosshairTick,this.magnetizedPrice);}
STX.clearCanvas(this.chart.tempCanvas,this);this.repositioningDrawing.reposition(this.chart.tempCanvas.context,this.repositioningDrawing.repositioner,this.crosshairTick,value);if(this.repositioningDrawing.measure)this.repositioningDrawing.measure();}
else if(STXChart.drawingLine){if(this.activeDrawing){panel=this.panels[this.activeDrawing.panelName];value=this.adjustIfNecessary(panel,this.crosshairTick,this.valueFromPixelUntransform(this.backOutY(STXChart.crosshairY),panel));if(this.preferences.magnet&&this.magnetizedPrice&&p9s.Z2H(panel.name,panel.chart.name)){value=this.adjustIfNecessary(panel,this.crosshairTick,this.magnetizedPrice);}
STX.clearCanvas(this.chart.tempCanvas,this);this.activeDrawing.move(this.chart.tempCanvas.context,this.crosshairTick,value);if(this.activeDrawing.measure)this.activeDrawing.measure();}
}
else if(STXChart.resizingPanel){this.resizePanels();this.drawTemporaryPanel();}
else if(STXChart.insideChart){this.findHighlights();}
if(STXChart.insideChart){this.dispatch((m2E+c4E+y4E),{stx:this,panel:this.currentPanel,x:this.cx,y:this.cy,grab:this.grabbingScreen}
);this.findHighlights();}
if(this.preferences.magnet&&this.currentVectorParameters.vectorType){if(!STXChart.drawingLine&&!this.anyHighlighted)STX.clearCanvas(this.chart.tempCanvas);this.magnetize();}
this.runAppend((m2E+Q9E+p9s.u1E+d6E+c4E+y4E+V37+i9E+y4E+p9s.F1E),arguments);}
;STXChart.prototype.findHighlights=function(isTap,clearOnly){var radius=10;if(isTap)radius=30;var cy=this.cy,cx=this.cx;if(!this.currentPanel)return ;var chart=this.currentPanel.chart;this.anyHighlighted=false;if(this.preferences.magnet&&!this.activeDrawing){STX.clearCanvas(this.chart.tempCanvas,this);}
var somethingChanged=false,drawingToMeasure=null,stickyArgs=["","",true,null,"drawing"],box={x0:this.tickFromPixel(p9s.X2H(cx,radius),chart),x1:this.tickFromPixel(cx+radius,chart),y0:this.valueFromPixelUntransform(p9s.D2H(cy,radius),this.currentPanel),y1:this.valueFromPixelUntransform(cy+radius,this.currentPanel)}
;for(var i=0;p9s.J2H(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];if(drawing.permanent)continue;var prevHighlight=drawing.highlighted,highlightMe=(p9s.p2H(drawing.panelName,this.currentPanel.name));drawing.repositioner=drawing.intersected(this.crosshairTick,this.crosshairValue,box);highlightMe=highlightMe&&drawing.repositioner;if(!clearOnly&&highlightMe){if(prevHighlight){drawingToMeasure=drawing;}
else if(p9s.E2H(prevHighlight,drawing.highlight(true))){if(!drawingToMeasure)drawingToMeasure=drawing;somethingChanged=true;}
this.anyHighlighted=true;}
else{if(p9s.Y2H(prevHighlight,drawing.highlight(false))){somethingChanged=true;}
}
}
var first=false,n,o,series;for(n in this.overlays){o=this.overlays[n];o.prev=o.highlight;o.highlight=false;}
for(n in chart.seriesRenderers){var r=chart.seriesRenderers[n];for(var j=0;p9s.V2H(j,r.seriesParams.length);j++){series=r.seriesParams[j];series.prev=series.highlight;series.highlight=false;}
}
if(!clearOnly){var bar=this.barFromPixel(cx);if(p9s.i2H(bar,chart.dataSegment.length)){var y;for(n in this.overlays){o=this.overlays[n];if(p9s.H2H(o.panel,this.currentPanel.name))continue;if(o.libraryEntry.isHighlighted&&o.libraryEntry.isHighlighted(this,cx,cy)){o.highlight=true;this.anyHighlighted=true;continue;}
var quote=chart.dataSegment[bar];if(!quote)continue;for(var out in this.overlays[n].outputMap){var val=quote[out];y=0;if(p9s.K2H(this.currentPanel.name,chart.name)){y=this.pixelFromPriceTransform(val,this.currentPanel);}
else{y=this.pixelFromPrice(val,this.currentPanel);}
if(p9s.C2H(cy-radius,y)&&p9s.S2H(cy+radius,y)){o.highlight=true;this.anyHighlighted=true;break;}
}
if(o.highlight)break;}
for(n in chart.seriesRenderers){var renderer=chart.seriesRenderers[n];if(!renderer.params.highlightable)continue;for(var m=0;p9s.s8H(m,renderer.seriesParams.length);m++){series=renderer.seriesParams[m];y=renderer.caches[series.field]&&renderer.caches[series.field][bar];if(!y&&p9s.u8H(y,0))continue;if(p9s.O8H(cy-radius,y)&&p9s.w8H(cy+radius,y)){series.highlight=true;this.anyHighlighted=true;}
else if((p9s.e8H(renderer.params.subtype,"step")||p9s.L8H(series.type,"step"))&&p9s.A8H(bar,0)){var py=renderer.caches[series.field]&&renderer.caches[series.field][p9s.o8H(bar,1)];if((py||p9s.a8H(py,0))&&(p9s.b8H(cy,y)&&p9s.W8H(cy,py))||(p9s.F8H(cy,y)&&p9s.g8H(cy,py))){series.highlight=true;this.anyHighlighted=true;}
}
}
}
}
}
for(n in this.overlays){o=this.overlays[n];if(o.highlight){this.anyHighlighted=true;stickyArgs=[o.inputs.display?o.inputs.display:o.name,null,null,o.permanent,"study"];drawingToMeasure=null;}
if(p9s.P8H(o.prev,o.highlight))somethingChanged=true;}
for(n in chart.seriesRenderers){var r2=chart.seriesRenderers[n];if(!r2.params.highlightable)continue;for(var m2=0;p9s.G8H(m2,r2.seriesParams.length);m2++){series=r2.seriesParams[m2];if(series.highlight){this.anyHighlighted=true;stickyArgs=[series.display,series.color,false,series.permanent,"series"];drawingToMeasure=null;}
if(p9s.c8H(series.prev,series.highlight))somethingChanged=true;}
}
if(somethingChanged){this.draw();this.displaySticky.apply(this,stickyArgs);this.clearMeasure();if(drawingToMeasure)drawingToMeasure.measure();}
if(!this.anyHighlighted){this.setMeasure();}
}
;STXChart.prototype.positionSticky=function(m){var top=Math.max(p9s.Q8H(this.cy,m.offsetHeight,o47),p9s.T94),right=Math.min(p9s.s7o(this.chart.canvasWidth,(this.cx-g47)),p9s.u7o(this.chart.canvasWidth,m.offsetWidth));m.style.top=top+i67;m.style.right=right+i67;}
;STXChart.prototype.displaySticky=function(message,backgroundColor,forceShow,noDelete,type){var o5E="k_",s1E="tc",W24="gh",r9E="ri",m=this.controls.mSticky;if(!m)return ;var mi=m.children[p9s.T94];if(!mi)return ;var overlayTrashCan=m.children[p9s.y94].children[p9s.T94],mouseDeleteInstructions=m.children[p9s.y94].children[p9s.y94];if(!forceShow&&!message){mi.innerHTML=d5E;m.style.display=n07;if(STX.touchDevice&&overlayTrashCan){overlayTrashCan.style.display=n07;}
else if(!STX.touchDevice&&mouseDeleteInstructions){mouseDeleteInstructions.style.display=n07;}
}
else{if(!message)message=d5E;if(forceShow&&!message){mi.style.backgroundColor=d5E;mi.style.color=d5E;mi.style.display=n07;}
else if(backgroundColor){mi.style.backgroundColor=backgroundColor;mi.style.color=STX.chooseForegroundColor(backgroundColor);mi.style.display=N4E;}
else{mi.style.backgroundColor=d5E;mi.style.color=d5E;mi.style.display=N4E;}
mi.innerHTML=message;if(type)m.children[p9s.y94].className=(r9E+W24+s1E+N2E+C84+o5E)+type;m.style.display=N4E;this.positionSticky(m);if(noDelete){overlayTrashCan.style.display=n07;mouseDeleteInstructions.style.display=n07;}
else if(STX.touchDevice&&overlayTrashCan){overlayTrashCan.style.display=N4E;mouseDeleteInstructions.style.display=n07;}
else if(!STX.touchDevice&&mouseDeleteInstructions){mouseDeleteInstructions.style.display=x84;}
}
}
;STXChart.prototype.setMeasure=function(price1,price2,tick1,tick2,hover){var Z9E="measureLit",U7E="Bars",N5E="setMeasure";if(this.runPrepend(N5E,arguments))return ;var m=$$(U47),message=d5E;if(!price1){if(m&&p9s.O7o(m.className,q0E))m.className=q0E;if(!this.anyHighlighted&&p9s.w7o(this.currentVectorParameters.vectorType,d5E))this.clearMeasure();}
else{var distance=p9s.e7o(Math.round(Math.abs(price1-price2)*this.chart.roundit),this.chart.roundit);if(this.internationalizer){message+=this.internationalizer.numbers.format(distance);}
else{message+=distance;}
var pct=p9s.L7o((price2-price1),price1);if(p9s.A7o(Math.abs(pct),g0E)){pct=Math.round(p9s.o7o(pct,B07));}
else if(p9s.a7o(Math.abs(pct),q94)){pct=p9s.b7o(Math.round(pct*U07),Y67);}
else{pct=p9s.W7o(Math.round(pct*w07),B07);}
if(this.internationalizer){pct=this.internationalizer.percent.format(p9s.F7o(pct,B07));}
else{pct=pct+S2E;}
message+=R7E+pct+S8E;var ticks=Math.abs(p9s.g7o(tick2,tick1));ticks=Math.round(ticks)+p9s.y94;var barsStr=this.translateIf(U7E);message+=v4E+ticks+v4E+barsStr;if(m){if(p9s.P7o(m.className,Z9E))m.className=Z9E;m.innerHTML=message;}
}
if(this.activeDrawing)return ;m=this.controls.mSticky;if(m){if(hover){m.style.display=N4E;m.children[p9s.T94].style.display=N4E;if(price1){m.children[p9s.T94].innerHTML=message;}
this.positionSticky(m);}
else{m.style.display=n07;m.children[p9s.T94].innerHTML=d5E;}
}
this.runAppend(N5E,arguments);}
;STXChart.prototype.clearMeasure=function(){var m=$$(U47);if(m){if(p9s.G7o(m.className,q0E))m.className=q0E;m.innerHTML=d5E;}
}
;STXChart.prototype.drawTemporaryPanel=function(){var M67="stx_panel_drag",borderEdge=Math.round(p9s.c7o(STXChart.resizingPanel.right,p9s.S14))+l0E;STX.clearCanvas(this.chart.tempCanvas,this);var y=p9s.Q7o(STXChart.crosshairY,this.top);this.plotLine(STXChart.resizingPanel.left,borderEdge,y,y,this.canvasStyle(M67),k24,this.chart.tempCanvas.context,c47,{}
);STXChart.resizingPanel.handle.style.top=(p9s.M7o(y,STXChart.resizingPanel.handle.offsetHeight/p9s.M14))+i67;}
;STXChart.prototype.setTrashCan=function(){if(STX.touchDevice){var m=this.controls.mSticky;if(m){m.style.display=N4E;m.children[p9s.T94].style.display=n07;m.children[p9s.y94].style.display=N4E;if(m.children[p9s.M14])m.children[p9s.M14].style.display=n07;m.style.top=(p9s.y6o(this.backOutY(STXChart.crosshairY),o47))+i67;m.style.right=p9s.T6o(this.chart.canvasWidth,(this.backOutX(STXChart.crosshairX)-g47),i67);}
}
}
;STXChart.prototype.pixelFromBar=function(bar,chart){if(!chart)chart=this.chart;var x=p9s.T94;if(this.chart.dataSegment&&this.chart.dataSegment[bar]&&this.chart.dataSegment[bar].leftOffset){x=this.chart.dataSegment[bar].leftOffset;}
else{x=p9s.w6o((bar+l0E),this.layout.candleWidth);}
x=chart.panel.left+Math.floor(x+this.micropixels)-p9s.y94;return x;}
;STXChart.prototype.barFromPixel=function(x,chart){if(!chart)chart=this.chart;if(p9s.e6o(this.layout.chartType,"volume_candle")){var pixel=p9s.L6o(x,chart.panel.left,this.micropixels),mult=2,bar=Math.round(p9s.D6o(this.chart.dataSegment.length,mult)),rightofLastTick=this.chart.dataSegment[p9s.J6o(this.chart.dataSegment.length,1)].leftOffset+p9s.p6o(this.chart.dataSegment[this.chart.dataSegment.length-1].candleWidth,2);if(p9s.E6o(pixel,rightofLastTick)){return this.chart.dataSegment.length+Math.floor(p9s.Y6o((x-rightofLastTick-chart.panel.left-this.micropixels),this.layout.candleWidth));}
else{for(var i=1;p9s.V6o(i,this.chart.dataSegment.length);i++){mult*=2;if(!this.chart.dataSegment[bar])break;var left=p9s.i6o(this.chart.dataSegment[bar].leftOffset,this.chart.dataSegment[bar].candleWidth/2),right=this.chart.dataSegment[bar].leftOffset+p9s.H6o(this.chart.dataSegment[bar].candleWidth,2);if(p9s.K6o(bar,0)||(p9s.C6o(pixel,left)&&p9s.S6o(pixel,right)))break;else if(p9s.s4o(pixel,left))bar-=Math.max(1,Math.round(p9s.u4o(this.chart.dataSegment.length,mult)));else bar+=Math.max(1,Math.round(p9s.O4o(this.chart.dataSegment.length,mult)));bar=Math.max(0,Math.min(p9s.w4o(this.chart.dataSegment.length,1),bar));}
if(!this.chart.dataSegment[bar]){for(i=0;p9s.e4o(i,this.chart.dataSegment.length);i++){if(!this.chart.dataSegment[i])continue;if(p9s.L4o(pixel,this.chart.dataSegment[i].leftOffset-this.chart.dataSegment[i].candleWidth/2))return Math.max(0,p9s.A4o(i,1));else if(p9s.o4o(pixel,this.chart.dataSegment[i].leftOffset+this.chart.dataSegment[i].candleWidth/2))return i;else if(p9s.a4o(pixel,this.chart.dataSegment[i].leftOffset+this.chart.dataSegment[i].candleWidth/2))return i+1;}
}
}
return bar;}
else{return Math.floor(p9s.b4o((x-chart.panel.left-this.micropixels),this.layout.candleWidth));}
}
;STXChart.prototype.tickFromPixel=function(x,chart){if(!chart)chart=this.chart;var tick=p9s.W4o(chart.dataSet.length,chart.scroll,1);if(p9s.V4o(this.layout.chartType,"volume_candle")){tick+=this.barFromPixel(x,chart);}
else{tick+=Math.floor(p9s.i4o((x-chart.panel.left-this.micropixels),this.layout.candleWidth));}
return tick;}
;STXChart.prototype.pixelFromTick=function(tick,chart){if(!chart)chart=this.chart;var bar=p9s.H4o(tick,chart.dataSet.length,chart.scroll,1);if(this.chart.dataSegment&&this.chart.dataSegment[bar]&&this.chart.dataSegment[bar].leftOffset){return chart.panel.left+Math.floor(this.chart.dataSegment[bar].leftOffset+this.micropixels)-1;}
else{var rightOffset=0,dsTicks=0;if(this.chart.dataSegment&&this.chart.dataSegment[p9s.c4o(this.chart.dataSegment.length,1)]&&this.chart.dataSegment[p9s.Q4o(this.chart.dataSegment.length,1)].leftOffset){if(p9s.M4o(this.chart.dataSegment.length,tick-chart.dataSet.length+chart.scroll)){rightOffset=p9s.y0o(this.chart.dataSegment[this.chart.dataSegment.length-1].leftOffset,this.chart.dataSegment[this.chart.dataSegment.length-1].candleWidth/2);dsTicks=this.chart.dataSegment.length;}
}
return rightOffset+chart.panel.left+Math.floor(p9s.T0o((tick-dsTicks-chart.dataSet.length+chart.scroll-0.5),this.layout.candleWidth)+this.micropixels)-1;}
}
;STXChart.prototype.pixelFromDate=function(date,chart){return this.pixelFromTick(this.tickFromDate(date,chart),chart);}
;STXChart.prototype.priceFromPixel=function(y,panel,yAxis){if(!panel)panel=this.chart.panel;var chart=panel.chart,yax=yAxis?yAxis:panel.yAxis;y=p9s.f0o(yax.bottom,y);var price=yax.low+(p9s.k0o(y,yax.multiplier));if(yax.semiLog){var logPrice=yax.logLow+(p9s.m0o(y,yax.logShadow,yax.height));price=Math.pow(10,logPrice);}
return price;}
;STXChart.prototype.valueFromPixel=function(y,panel,yAxis){if(!panel)panel=this.whichPanel(y);var p=this.priceFromPixel(y,panel,yAxis);return p;}
;STXChart.prototype.valueFromPixelUntransform=function(y,panel,yAxis){if(!panel)panel=this.whichPanel(y);if(!panel){if(p9s.A0o(y,p9s.T94)){panel=this.panels[STX.first(this.panels)];}
else{panel=this.panels[STX.last(this.panels)];}
}
var p=this.priceFromPixel(y,panel,yAxis);if(panel.chart.untransformFunc&&p9s.o0o(panel.name,panel.chart.name)){p=panel.chart.untransformFunc(this,panel.chart,p);}
return p;}
;STXChart.prototype.pixelFromPriceTransform=function(price,panel,yAxis){if(panel.chart.transformFunc)price=panel.chart.transformFunc(this,panel.chart,price,yAxis);return this.pixelFromPrice(price,panel,yAxis);}
;STXChart.prototype.pixelFromPrice=function(price,panel,yAxis){if(!panel)panel=this.chart.panel;var yax=yAxis?yAxis:panel.yAxis,y=p9s.a0o((yax.high-price),yax.multiplier);if(yax.semiLog){var p=Math.max(price,0),logPrice=p9s.b0o(Math.log(p),Math.LN10),height=yax.height;y=p9s.W0o(height,height*(logPrice-yax.logLow)/yax.logShadow);}
y+=yax.top;return y;}
;STXChart.prototype.pixelFromValueAdjusted=function(panel,tick,value,yAxis){if(this.layout.adj||!this.charts[panel.name])return this.pixelFromPriceTransform(value,panel,yAxis);var a=Math.round(tick),ratio;if(p9s.F0o(a,0)&&p9s.g0o(a,panel.chart.dataSet.length)&&(ratio=panel.chart.dataSet[a].ratio)){return this.pixelFromPriceTransform(p9s.P0o(value,ratio),panel,yAxis);}
return this.pixelFromPriceTransform(value,panel,yAxis);}
;STXChart.prototype.adjustIfNecessary=function(panel,tick,value){if(this.layout.adj)return value;if(!panel||!this.charts[panel.name])return value;var a=Math.round(tick),ratio;if(p9s.G0o(a,0)&&p9s.c0o(a,panel.chart.dataSet.length)&&(ratio=panel.chart.dataSet[a].ratio)){return p9s.Q0o(value,ratio);}
return value;}
;STXChart.prototype.setTransform=function(chart,transformFunction,untransformFunction){chart.transformFunc=transformFunction;chart.untransformFunc=untransformFunction;}
;STXChart.prototype.unsetTransform=function(chart){delete  chart.transformFunc;delete  chart.untransformFunc;for(var i=0;p9s.M0o(i,chart.dataSet.length);i++){chart.dataSet[i].transform=null;}
}
;STXChart.prototype.undo=function(){var x7E="ing",D1E="_draw",e07="x_cros",e1E="undo";if(this.runPrepend(e1E,arguments))return ;if(this.activeDrawing){this.activeDrawing.abort();this.activeDrawing=p9s.r2E;STX.clearCanvas(this.chart.tempCanvas,this);this.draw();STX.swapClassName(this.controls.crossX,F7E,e6E);STX.swapClassName(this.controls.crossY,F7E,(j1E+N1E+e07+j1E+I8E+G3E+p9s.F1E+D1E+x7E));STXChart.drawingLine=c47;}
this.runAppend(e1E,arguments);}
;STXChart.prototype.undoStamp=function(before,after){var A9E="undoStamp";this.undoStamps.push(before);this.dispatch(A9E,{before:before,after:after}
);}
;STXChart.prototype.undoLast=function(){if(this.activeDrawing){this.undo();}
else{if(this.undoStamps.length){this.drawingObjects=this.undoStamps.pop();this.changeOccurred("vector");this.draw();}
}
}
;STXChart.prototype.addDrawing=function(drawing){var drawings=STX.shallowClone(this.drawingObjects);this.drawingObjects.push(drawing);this.undoStamp(drawings,STX.shallowClone(this.drawingObjects));}
;STXChart.prototype.plotLine=function(x0,x1,y0,y1,color,type,context,confineToPanel,parameters){var Y1E="zi";if(!parameters)parameters={}
;if(p9s.y3o(parameters.pattern,"none"))return ;if(p9s.T3o(confineToPanel,true))confineToPanel=this.chart.panel;if(p9s.f3o(context,null)||typeof (context)=="undefined")context=this.chart.context;if(isNaN(x0)||isNaN(x1)||isNaN(y0)||isNaN(y1)){return ;}
var edgeTop=0,edgeBottom=this.chart.canvasHeight,edgeLeft=0,edgeRight=this.right;if(confineToPanel){edgeBottom=confineToPanel.yAxis.bottom;edgeTop=confineToPanel.yAxis.top;edgeLeft=confineToPanel.left;edgeRight=confineToPanel.right;}
var bigX,bigY,v;if(p9s.k3o(type,"ray")){bigX=10000000;if(p9s.m3o(x1,x0))bigX=-10000000;v={"x0":x0,"x1":x1,"y0":y0,"y1":y1}
;bigY=STX.yIntersection(v,bigX);x1=bigX;y1=bigY;}
if(p9s.U3o(type,"line")||p9s.v3o(type,"horizontal")||p9s.n3o(type,"vertical")){bigX=10000000;var littleX=-10000000;v={"x0":x0,"x1":x1,"y0":y0,"y1":y1}
;bigY=STX.yIntersection(v,bigX);var littleY=STX.yIntersection(v,littleX);x0=littleX;x1=bigX;y0=littleY;y1=bigY;}
var t0=0.0,t1=1.0,xdelta=p9s.q3o(x1,x0),ydelta=p9s.l3o(y1,y0),p,q,r;for(var edge=0;p9s.B3o(edge,4);edge++){if(p9s.R3o(edge,0)){p=-xdelta;q=-(p9s.t3o(edgeLeft,x0));}
if(p9s.r3o(edge,1)){p=xdelta;q=(p9s.d3o(edgeRight,x0));}
if(p9s.j3o(edge,2)){p=-ydelta;q=-(p9s.x3o(edgeTop,y0));}
if(p9s.N5o(edge,3)){p=ydelta;q=(p9s.z5o(edgeBottom,y0));}
r=p9s.h5o(q,p);if((y1||p9s.I5o(y1,0))&&p9s.Z5o(p,0)&&p9s.X5o(q,0)){return false;}
if(p9s.D5o(p,0)){if(p9s.J5o(r,t1))return false;else if(p9s.p5o(r,t0))t0=r;}
else if(p9s.E5o(p,0)){if(p9s.Y5o(r,t0))return false;else if(p9s.V5o(r,t1))t1=r;}
}
var x0clip=x0+p9s.i5o(t0,xdelta),y0clip=y0+p9s.H5o(t0,ydelta),x1clip=x0+p9s.K5o(t1,xdelta),y1clip=y0+p9s.C5o(t1,ydelta);if(!y1&&p9s.S5o(y1,0)&&!y0&&p9s.s1o(y0,0)){y0clip=edgeTop;y1clip=edgeBottom;x0clip=v.x0;x1clip=v.x0;if(p9s.u1o(v.x0,edgeRight))return false;if(p9s.O1o(v.x0,edgeLeft))return false;}
else if(!y1&&p9s.w1o(y1,0)){if(p9s.e1o(v.y0,v.y1))y1clip=edgeBottom;else y1clip=edgeTop;x0clip=v.x0;x1clip=v.x0;if(p9s.L1o(v.x0,edgeRight))return false;if(p9s.A1o(v.x0,edgeLeft))return false;}
context.lineWidth=1.1;if(typeof (color)=="object"){context.strokeStyle=color.color;if(color.opacity)context.globalAlpha=color.opacity;else context.globalAlpha=1;context.lineWidth=parseInt(STX.stripPX(color.width));}
else{if(!color||p9s.o1o(color,"auto")||STX.isTransparent(color)){context.strokeStyle=this.defaultColor;}
else{context.strokeStyle=color;}
}
if(parameters.opacity)context.globalAlpha=parameters.opacity;if(parameters.lineWidth)context.lineWidth=parameters.lineWidth;if(p9s.a1o(type,(Y1E+p9s.j8E+v4E+g07+l6E+p9s.j8E)))context.lineWidth=5;var pattern=null;if(parameters.pattern){pattern=parameters.pattern;if(p9s.b1o(pattern,"solid")){pattern=null;}
else if(p9s.W1o(pattern,"dotted")){pattern=[context.lineWidth,context.lineWidth];}
else if(p9s.F1o(pattern,"dashed")){pattern=[p9s.g1o(context.lineWidth,5),p9s.P1o(context.lineWidth,5)];}
}
context.stxLine(x0clip,y0clip,x1clip,y1clip,context.strokeStyle,context.globalAlpha,context.lineWidth,pattern);context.globalAlpha=1;context.lineWidth=1;}
;STXChart.prototype.connectTheDots=function(points,color,type,context,confineToPanel,parameters){var l2E="ott";if(!parameters)parameters={}
;if(p9s.G1o(parameters.pattern,"none"))return ;if(p9s.c1o(confineToPanel,true))confineToPanel=this.chart.panel;if(p9s.Q1o(context,null)||typeof (context)=="undefined")context=this.chart.context;if(p9s.M1o(points.length,4))return ;var edgeTop=0,edgeBottom=this.chart.canvasHeight,edgeLeft=0,edgeRight=this.chart.width;if(confineToPanel){edgeBottom=confineToPanel.yAxis.bottom;edgeTop=confineToPanel.yAxis.top;}
context.lineWidth=1.1;if(typeof (color)=="object"){context.strokeStyle=color.color;if(color.opacity)context.globalAlpha=color.opacity;else context.globalAlpha=1;context.lineWidth=parseInt(STX.stripPX(color.width));}
else{if(!color||p9s.y9o(color,"auto")||STX.isTransparent(color)){context.strokeStyle=this.defaultColor;}
else{context.strokeStyle=color;}
}
if(parameters.opacity)context.globalAlpha=parameters.opacity;if(parameters.lineWidth)context.lineWidth=parameters.lineWidth;var pattern=null;if(parameters.pattern){pattern=parameters.pattern;if(p9s.T9o(pattern,"solid")){pattern=null;}
else if(p9s.f9o(pattern,(P6E+l2E+y4E+P6E))){pattern=[context.lineWidth,context.lineWidth];}
else if(p9s.k9o(pattern,"dashed")){pattern=[p9s.m9o(context.lineWidth,5),p9s.U9o(context.lineWidth,5)];}
}
context.beginPath();for(var i=0;p9s.v9o(i,points.length-2);i+=2){var x0=points[i],y0=points[i+1],x1=points[i+2],y1=points[i+3];if(isNaN(x0)||isNaN(x1)||isNaN(y0)||isNaN(y1))return ;var t0=0.0,t1=1.0,xdelta=p9s.n9o(x1,x0),ydelta=p9s.q9o(y1,y0),p,q,r;for(var edge=0;p9s.l9o(edge,4);edge++){if(p9s.B9o(edge,0)){p=-xdelta;q=-(p9s.R9o(edgeLeft,x0));}
if(p9s.t9o(edge,1)){p=xdelta;q=(p9s.r9o(edgeRight,x0));}
if(p9s.d9o(edge,2)){p=-ydelta;q=-(p9s.j9o(edgeTop,y0));}
if(p9s.x9o(edge,3)){p=ydelta;q=(p9s.N2o(edgeBottom,y0));}
r=p9s.z2o(q,p);if((y1||p9s.h2o(y1,0))&&p9s.I2o(p,0)&&p9s.Z2o(q,0)){return false;}
if(p9s.X2o(p,0)){if(p9s.D2o(r,t1))return false;else if(p9s.J2o(r,t0))t0=r;}
else if(p9s.p2o(p,0)){if(p9s.E2o(r,t0))return false;else if(p9s.Y2o(r,t1))t1=r;}
}
var x0clip=x0+p9s.V2o(t0,xdelta),y0clip=y0+p9s.i2o(t0,ydelta),x1clip=x0+p9s.H2o(t1,xdelta),y1clip=y0+p9s.K2o(t1,ydelta);try{if(pattern){context.dashedLineTo(x0clip,y0clip,x1clip,y1clip,pattern);}
else{context.moveTo(x0clip,y0clip);context.lineTo(x1clip,y1clip);}
}
catch(e){}
}
context.stroke();context.closePath();context.globalAlpha=1;context.lineWidth=1;}
;STXChart.prototype.plotSpline=function(points,tension,color,type,context,confineToPanel,parameters){if(!parameters)parameters={}
;if(p9s.C2o(parameters.pattern,(i8E+i9E+y4E)))return ;if(p9s.S2o(confineToPanel,true))confineToPanel=this.chart.panel;if(p9s.s8o(context,null)||typeof (context)=="undefined")context=this.chart.context;context.save();context.lineWidth=1.1;if(typeof (color)=="object"){context.strokeStyle=color.color;if(color.opacity)context.globalAlpha=color.opacity;else context.globalAlpha=1;context.lineWidth=parseInt(STX.stripPX(color.width));}
else{if(!color||p9s.u8o(color,"auto")||STX.isTransparent(color)){context.strokeStyle=this.defaultColor;}
else{context.strokeStyle=color;}
}
if(parameters.opacity)context.globalAlpha=parameters.opacity;if(parameters.lineWidth)context.lineWidth=parameters.lineWidth;var pattern=null;if(parameters.pattern){pattern=parameters.pattern;if(p9s.O8o(pattern,"solid")){pattern=null;}
else if(p9s.w8o(pattern,"dotted")){pattern=[context.lineWidth,context.lineWidth];}
else if(p9s.e8o(pattern,"dashed")){pattern=[p9s.L8o(context.lineWidth,5),p9s.A8o(context.lineWidth,5)];}
}
if(pattern&&context.setLineDash){context.setLineDash(pattern);context.lineDashOffset=0;}
plotSpline(points,tension,context);context.restore();}
;STXChart.prototype.drawingClick=function(panel,x,y){var E6E="ss",t4E="tx_";if(!this.activeDrawing){if(!panel)return ;var Factory=STXChart.drawingTools[this.currentVectorParameters.vectorType];if(!Factory){if(STX.Drawing[this.currentVectorParameters.vectorType]){Factory=STX.Drawing[this.currentVectorParameters.vectorType];STXChart.registerDrawingTool(this.currentVectorParameters.vectorType,Factory);}
}
if(Factory){this.activeDrawing=new Factory();this.activeDrawing.construct(this,panel);if(!this.charts[panel.name]){if(this.activeDrawing.chartsOnly){this.activeDrawing=p9s.r2E;return ;}
}
}
}
if(this.activeDrawing){if(this.userPointerDown&&!this.activeDrawing.dragToDraw){if(!STXChart.drawingLine)this.activeDrawing=p9s.r2E;return ;}
var tick=this.tickFromPixel(x,panel.chart),dpanel=this.panels[this.activeDrawing.panelName],value=this.adjustIfNecessary(dpanel,tick,this.valueFromPixelUntransform(y,dpanel));if(this.preferences.magnet&&this.magnetizedPrice){value=this.adjustIfNecessary(dpanel,tick,this.magnetizedPrice);}
if(this.activeDrawing.click(this.chart.tempCanvas.context,tick,value)){if(this.activeDrawing){STXChart.drawingLine=c47;STX.clearCanvas(this.chart.tempCanvas,this);this.addDrawing(this.activeDrawing);this.activeDrawing=p9s.r2E;this.adjustDrawings();this.draw();this.changeOccurred(R84);STX.swapClassName(this.controls.crossX,F7E,e6E);STX.swapClassName(this.controls.crossY,F7E,e6E);}
}
else{this.changeOccurred(T6E);STXChart.drawingLine=C2E;STX.swapClassName(this.controls.crossX,e6E,(j1E+t4E+u4E+z37+E6E+I8E+l6E+J8E+p9s.F1E));STX.swapClassName(this.controls.crossY,e6E,F7E);}
return C2E;}
return c47;}
;STXChart.prototype.whichPanel=function(y){for(var p in this.panels){var panel=this.panels[p];if(panel.hidden)continue;if(p9s.o8o(y,panel.top)&&p9s.a8o(y,panel.bottom))return panel;}
return p9s.r2E;}
;STXChart.prototype.mouseup=function(e){var b9E="hart";if(this.runPrepend(E47,arguments))return ;this.swipe.end=C2E;if(this.repositioningDrawing){if(!this.currentVectorParameters.vectorType||(p9s.b8o(Date.now()-this.mouseTimer,Y37))){this.changeOccurred(R84);STX.clearCanvas(this.chart.tempCanvas,this);this.repositioningDrawing=p9s.r2E;this.adjustDrawings();this.draw();return ;}
else{this.repositioningDrawing=c47;}
}
if(this.repositioningBaseline){this.repositioningBaseline=p9s.r2E;this.chart.panel.yAxis.scroll=p9s.W8o(this.pixelFromPriceTransform(this.chart.baseline.userLevel,this.chart.panel),(this.chart.panel.yAxis.top+this.chart.panel.yAxis.bottom)/p9s.M14);this.draw();return ;}
var wasMouseDown=this.userPointerDown;this.userPointerDown=c47;if(!this.displayInitialized)return ;this.grabbingScreen=c47;if(p9s.F8o(this.openDialog,d5E)){if(STXChart.insideChart)STX.unappendClassName(this.container,j4E);return ;}
if(this.grabOverrideClick){this.swipeRelease();STX.unappendClassName(this.container,j4E);this.grabOverrideClick=c47;return ;}
if(STXChart.insideChart)STX.unappendClassName(this.container,(j1E+N1E+p9s.X37+r1E+P6E+p9s.F1E+l6E+p9s.j8E+r1E+u4E+b9E));if(STXChart.resizingPanel){this.releaseHandle({}
);return ;}
if(!e)e=event;if((e.which&&p9s.g8o(e.which,p9s.M14))||(e.button&&p9s.P8o(e.button,p9s.M14))){if(this.anyHighlighted){this.rightClickHighlighted();if(e.preventDefault&&this.captureTouchEvents)e.preventDefault();e.stopPropagation();return c47;}
else{return C2E;}
}
if(p9s.G8o(e.clientX,this.left)||p9s.c8o(e.clientX,this.right))return ;if(p9s.Q8o(e.clientY,this.top)||p9s.M8o(e.clientY,this.bottom))return ;var cy=this.backOutY(e.clientY),cx=this.backOutX(e.clientX);if(wasMouseDown){this.drawingClick(this.currentPanel,cx,cy);}
if(!this.activeDrawing){this.dispatch(V24,{stx:this,panel:this.currentPanel,x:cx,y:cy}
);}
this.runAppend(E47,arguments);}
;STXChart.prototype.grabbingHand=function(){if(!this.allowScroll)return ;if(!this.grabbingScreen)return ;if(STX.touchDevice)return ;STX.appendClassName(this.container,j4E);}
;STXChart.prototype.mousedown=function(e){if(this.runPrepend("mousedown",arguments))return ;this.grabOverrideClick=false;if(p9s.y7g(this.openDialog,""))return ;if(!this.displayInitialized)return ;if(!this.displayCrosshairs)return ;if(!STXChart.insideChart)return ;if(this.manageTouchAndMouse&&e&&e.preventDefault&&this.captureTouchEvents)e.preventDefault();this.mouseTimer=Date.now();this.userPointerDown=true;if(!e)e=event;if((e.which&&p9s.T7g(e.which,2))||(e.button&&p9s.f7g(e.button,2))){return ;}
var chart=this.currentPanel.chart;if(p9s.k7g(e.clientX,this.left)&&p9s.m7g(e.clientX,this.right)&&p9s.U7g(e.clientY,this.top)&&p9s.v7g(e.clientY,this.bottom)){if(this.repositioningDrawing)return ;for(var i=0;p9s.n7g(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];if(drawing.highlighted){if(this.ctrl){var Factory=STXChart.drawingTools[drawing.name],clonedDrawing=new Factory();clonedDrawing.reconstruct(this,drawing.serialize());this.drawingObjects.push(clonedDrawing);this.repositioningDrawing=clonedDrawing;clonedDrawing.repositioner=drawing.repositioner;return ;}
this.repositioningDrawing=drawing;return ;}
}
if((p9s.q7g(this.layout.chartType,(S47+J5E+J8E+i9E+v1E+P6E+y4E+N2E+N1E+l6E))||p9s.l7g(this.layout.chartType,"baseline_delta_mountain"))&&p9s.B7g(chart.baseline.userLevel,false)){var y0=this.valueFromPixelUntransform(p9s.R7g(this.cy,5),this.currentPanel),y1=this.valueFromPixelUntransform(this.cy+5,this.currentPanel),x0=p9s.t7g(this.chart.right,parseInt(getComputedStyle(this.controls.baselineHandle).width,10));if(p9s.r7g(chart.baseline.actualLevel,y0)&&p9s.d7g(chart.baseline.actualLevel,y1)&&p9s.j7g(this.cx,x0)){this.repositioningBaseline={lastDraw:Date.now()}
;return ;}
}
this.drawingClick(this.currentPanel,this.cx,this.cy);if(this.activeDrawing&&this.activeDrawing.dragToDraw)return ;}
this.grabbingScreen=true;this.yToleranceBroken=false;if(!e)e=event;this.grabStartX=e.clientX;this.grabStartY=e.clientY;this.grabStartScrollX=chart.scroll;this.grabStartScrollY=chart.panel.yAxis.scroll;this.grabStartCandleWidth=this.layout.candleWidth;this.grabStartZoom=this.whichYAxis(this.currentPanel).zoom;setTimeout((function(self){return function(){self.grabbingHand();}
;}
)(this),100);this.swipeStart(chart);this.runAppend("mousedown",arguments);}
;STXChart.prototype.changeVectorType=function(value){this.currentVectorParameters.vectorType=value;if(STXChart.drawingLine)this.undo();this.setCrosshairColors();if(STXChart.insideChart)this.doDisplayCrosshairs();}
;STXChart.prototype.rightClickOverlay=function(name){var m1E="rightClickOverlay";if(this.runPrepend(m1E,arguments))return ;var sd=this.overlays[name];if(sd.editFunction){sd.editFunction();}
else{this.removeOverlay(name);}
this.runAppend(m1E,arguments);}
;STXChart.prototype.removeOverlay=function(name){var u5E="removeOverlay";if(this.runPrepend(u5E,arguments))return ;var mySD;for(var o in this.overlays){var sd=this.overlays[o];if(sd.inputs.Field&&sd.inputs.Field.indexOf(name)!=-p9s.y94){this.removeOverlay(sd.name);}
else if(p9s.x7g(sd.name,name)){mySD=sd;}
}
var study=this.layout.studies[name];STX.deleteRHS(STX.Studies.studyPanelMap,study);if(mySD)this.cleanupRemovedStudy(mySD);delete  this.overlays[name];this.displaySticky();this.createDataSet();this.changeOccurred(Y94);this.runAppend(u5E,arguments);}
;STXChart.prototype.addSeries=function(field,parameters,cb){if(this.runPrepend("addSeries",arguments))return ;if(!parameters)parameters={}
;if(!parameters.chartName)parameters.chartName=this.chart.name;var obj={parameters:STX.clone(parameters),yValueCache:[],display:field}
;if(p9s.N6g("display",obj.parameters))obj.display=obj.parameters.display;if(obj.parameters.isComparison)obj.parameters.shareYAxis=true;if(!obj.parameters.chartType&&obj.parameters.color)obj.parameters.chartType="line";if(obj.parameters.chartType&&p9s.z6g(obj.parameters.chartType,"mountain"))obj.parameters.chartType="line";if(!obj.parameters.panel)obj.parameters.panel=this.chart.panel.name;var chart=this.charts[parameters.chartName],self=this;function addSeriesData(stx){var b84="ine",mIterator=0,cIterator=0,c,m;while(parameters.data&&p9s.h6g(mIterator,stx.masterData.length)&&p9s.I6g(cIterator,parameters.data.length)){c=parameters.data[cIterator];m=stx.masterData[mIterator];if(!c.DT||typeof c.DT==(p9s.u1E+K07+p9s.V8E+b84+P6E))c.DT=STX.strToDateTime(c.Date);if(p9s.Z6g(c.DT.getTime(),m.DT.getTime())){if(typeof c.Value!="undefined"){m[field]=c.Value;}
else if(stx.layout.adj&&typeof c.Adj_Close!="undefined"){m[field]=c.Adj_Close;}
else{m[field]=c.Close;}
cIterator++;mIterator++;continue;}
if(p9s.X6g(c.DT,m.DT)){if(parameters.forceData){stx.masterData.splice(mIterator,0,{DT:c.DT}
);continue;}
cIterator++;}
else mIterator++;}
if(parameters.forceData&&p9s.D6g(mIterator,stx.masterData.length)){while(parameters.data&&p9s.J6g(cIterator,parameters.data.length)){var c=parameters.data[cIterator];if(!c.DT||typeof c.DT=="undefined")c.DT=STX.strToDateTime(c.Date);m={DT:c.DT}
;if(typeof c.Value!="undefined"){m[field]=c.Value;}
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
var doneInCallback=false;if(parameters.data){if(parameters.data.useDefaultQuoteFeed){var driver=this.quoteDriver,fetchParams=driver.makeParams(field,parameters.symbolObject,this.chart);fetchParams.startDate=this.chart.masterData[0].DT;fetchParams.endDate=this.chart.masterData[p9s.p6g(this.chart.masterData.length,1)].DT;if(parameters.symbolObject)fetchParams.symbolObject=parameters.symbolObject;doneInCallback=true;function handleResponse(dataCallback){if(!dataCallback.error){parameters.data=dataCallback.quotes;addSeriesData(self);setUpRenderer(self,obj);}
if(cb)cb(dataCallback.error,obj);self.runAppend("addSeries",arguments);}
;if(fetchParams.stx.isEquationChart(fetchParams.symbol)){STX.fetchEquationChart(fetchParams,handleResponse);}
else{driver.quoteFeed.fetch(fetchParams,handleResponse);}
}
else if(this.masterData){addSeriesData(this);}
}
else{obj.addSeriesData=addSeriesData;}
if(!doneInCallback){setUpRenderer(self,obj);if(cb)cb(null,obj);this.runAppend("addSeries",arguments);}
return obj;}
;STXChart.prototype.isEquationChart=function(symbol){var Z67="=";if(!this.allowEquations||!STX.computeEquationChart)return c47;if(symbol&&p9s.E6g(symbol[p9s.T94],Z67))return C2E;return c47;}
;STXChart.prototype.deleteSeries=function(field,chart){var D6E="deleteSeries";if(this.runPrepend(D6E,arguments))return ;if(!chart)chart=this.chart;delete  chart.series[field];if(this.quoteDriver)this.quoteDriver.updateSubscriptions();this.runAppend(D6E,arguments);}
;STXChart.prototype.removeSeries=function(field,chart){if(this.runPrepend("removeSeries",arguments))return ;if(!chart)chart=this.chart;for(var r in chart.seriesRenderers){var renderer=chart.seriesRenderers[r];for(var sp=p9s.Y6g(renderer.seriesParams.length,1);p9s.V6g(sp,0);sp--){var series=renderer.seriesParams[sp];if(!series.permanent&&p9s.i6g(series.field,field)){renderer.removeSeries(field);}
}
}
this.deleteSeries(field,chart);var comparing=false;for(var s in chart.series){if(chart.series[s].parameters.isComparison)comparing=true;}
if(!comparing)this.setComparison(false,chart);this.createDataSet();this.draw();this.runAppend("removeSeries",arguments);}
;STXChart.prototype.rendererAction=function(chart,phase){var S1E="rendererAction",y2E="tion",n67="erAc";if(this.runPrepend((Q2E+i9E+P6E+D4E+n67+y2E),arguments))return ;for(var id in chart.seriesRenderers){var renderer=chart.seriesRenderers[id];if(renderer.params.overChart&&p9s.H6g(phase,b7E))continue;if(!renderer.params.overChart&&p9s.K6g(phase,a14))continue;if(!this.panels[renderer.params.panel])continue;if(p9s.C6g(this.panels[renderer.params.panel].chart,chart))continue;if(p9s.S6g(phase,I7E)){renderer.performCalculations();}
else{renderer.draw();if(renderer.cb)renderer.cb(renderer.colors);}
}
this.runAppend(S1E,arguments);}
;STXChart.prototype.drawSeries=function(chart,seriesArray,yAxis){var B94="ap",G6E="ep",E8E="rie",v2E="rawS";if(this.runPrepend((P6E+v2E+y4E+E8E+j1E),arguments))return ;var quotes=chart.dataSegment,legendColorMap={}
,series=null;if(!seriesArray)seriesArray=chart.series;for(var field in seriesArray){series=seriesArray[field];var parameters=series.parameters;if(!parameters.chartType)continue;var panel=chart.panel;if(parameters.panel)panel=this.panels[parameters.panel];if(!panel)continue;var yax=yAxis?yAxis:panel.yAxis,minMax=[parameters.minimum,parameters.maximum];if((!parameters.minimum&&p9s.s4g(parameters.minimum,0))||(!parameters.maximum&&p9s.u4g(parameters.maximum,0))){var minMaxCalc=STX.minMax(quotes,field);if(!parameters.minimum&&p9s.O4g(parameters.minimum,0))minMax[0]=minMaxCalc[0];if(!parameters.maximum&&p9s.w4g(parameters.maximum,0))minMax[1]=minMaxCalc[1];}
var min=minMax[0],top=yax.top,bottom=yax.bottom,height=p9s.e4g(bottom,top),t=parameters.marginTop,b=parameters.marginBottom;if(t)top=p9s.L4g(t,1)?(top+t):(top+(p9s.A4g(height,t)));if(b)bottom=p9s.o4g(b,1)?(p9s.a4g(bottom,b)):(p9s.b4g(bottom,(height*b)));var multiplier=p9s.W4g((bottom-top),(minMax[1]-min)),started=false,lastPoint=null,val=null,x=null,y=null,px=null,py=null,cw=this.layout.candleWidth,context=this.chart.context,isStep=(p9s.F4g(parameters.type,(i6E+G6E))||p9s.g4g(parameters.subtype,"step")),color=parameters.color;if(!color)color=this.defaultColor;var width=parameters.width;if(!width||isNaN(width)||p9s.P4g(width,1))width=1;if(series.highlight||series.parameters.highlight)width*=2;this.startClip(panel.name);seriesPlotter=new STX.Plotter();seriesPlotter.newSeries("line","stroke",color,1,width);if(parameters.gaps&&parameters.gaps.color)seriesPlotter.newSeries("gap","stroke",parameters.gaps.color,1,width);else seriesPlotter.newSeries((p9s.j8E+B94),"stroke",color,1,width);series.yValueCache=new Array(quotes.length);var yValueCache=series.yValueCache,lastQuote=null,gap=null,points=[],doTransform=series.parameters.shareYAxis&&!yAxis,shareYAxis=series.parameters.shareYAxis||yAxis,xbase=p9s.G4g(panel.left,(isStep?1:0.5)*cw,this.micropixels,1),x0=xbase;for(var i=0;p9s.j4g(i,quotes.length);i++){xbase+=p9s.x4g(cw,2);if(isStep)xbase+=p9s.N0g(cw,2);cw=this.layout.candleWidth;if(!isStep)xbase+=p9s.z0g(cw,2);if(p9s.h0g(x,null)&&p9s.I0g(y,null)){if(!gap||parameters.gaps)points.push([x,y]);}
var quote=quotes[i];if(!quote)continue;if(quote.candleWidth){if(!isStep)xbase+=p9s.Z0g((quote.candleWidth-cw),2);cw=quote.candleWidth;}
if(quote.transform&&doTransform)quote=quote.transform;val=quote[field];if(!val&&p9s.X0g(val,0)){if(isStep||parameters.gaps){yValueCache[i]=y;}
if(p9s.D0g(gap,false)){if(isStep){x+=cw;seriesPlotter.lineTo("line",x,y);}
seriesPlotter.moveTo("gap",x,y);}
gap=true;if(x&&!parameters.gaps)points.push([x,bottom]);continue;}
if(!isStep&&lastPoint&&p9s.J0g(lastPoint,i-1)){px=x;py=y;}
else{px=null;}
x=xbase;if(p9s.p0g(x,panel.right))lastQuote=quote;if(this.extendLastTick&&p9s.E0g(i,quotes.length-1))x+=p9s.Y0g(cw,2);if(isStep&&started){if(gap&&parameters.gaps&&parameters.gaps.pattern){seriesPlotter.dashedLineTo("gap",x,y,parameters.gaps.pattern);}
else if(gap&&!parameters.gaps){points.push([x,bottom]);seriesPlotter.moveTo("gap",x,y);}
else if(!gap&&parameters.pattern){seriesPlotter.dashedLineTo("line",x,y,parameters.pattern);}
else{seriesPlotter.lineTo((gap?"gap":"line"),x,y);}
points.push([x,y]);}
if(shareYAxis){y=this.pixelFromPrice(val,panel,yax);}
else{y=p9s.V0g(bottom,((val-min)*multiplier));}
if(p9s.i0g(px,null)){var vector={x0:px,x1:x,y0:py,y1:y}
;for(;p9s.H0g(lastPoint,i);lastPoint++){var xInt=panel.left+Math.floor(xbase+p9s.K0g(((lastPoint-i)+0.5),cw))+this.micropixels-1,yInt=STX.yIntersection(vector,xInt);yValueCache[lastPoint]=yInt;}
}
yValueCache[i]=y;if(i&&points.length&&started&&!yValueCache[p9s.C0g(i,1)]&&p9s.S0g(yValueCache[i-1],0)){for(var bf=p9s.s3g(i,1);p9s.u3g(bf,0);bf--){if(yValueCache[bf])break;yValueCache[bf]=points[p9s.O3g(points.length,1)][1];}
}
if(!started){started=true;var leftTick=p9s.w3g(chart.dataSet.length,chart.scroll);if(p9s.e3g(leftTick,0)){seriesPlotter.moveTo((gap?"gap":(N2E+J8E+H47)),x,y);}
else{var baseline=chart.dataSet[leftTick];if(baseline.transform&&doTransform)baseline=baseline.transform;var y0=baseline[field];if(shareYAxis){y0=this.pixelFromPrice(y0,panel,yax);}
else{y0=p9s.L3g(bottom,((y0-min)*multiplier));}
y0=Math.min(Math.max(y0,top),bottom);if(isNaN(y0)){seriesPlotter.moveTo((gap?"gap":"line"),x,y);}
else{seriesPlotter.moveTo((gap?(p9s.j8E+l6E+p9s.f9E):"line"),x0,y0);if(isStep){if(gap){if(parameters.gaps)seriesPlotter.lineTo((p9s.j8E+l6E+p9s.f9E),x,y0);else seriesPlotter.moveTo("gap",x,y0);}
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
else if(!gap&&parameters.pattern){seriesPlotter.dashedLineTo("line",x,y,parameters.pattern);if(isStep&&p9s.A3g(i,quotes.length-1))seriesPlotter.dashedLineTo("line",x+cw,y,parameters.pattern);}
else{seriesPlotter.lineTo((gap?"gap":(k9E+H47)),x,y);if(isStep&&p9s.o3g(i,quotes.length-1)&&!gap)seriesPlotter.lineTo("line",x+cw,y);}
}
lastPoint=i;if(gap)seriesPlotter.moveTo("line",x,y);gap=false;}
if(gap){x=panel.left+Math.floor(xbase+cw+this.micropixels)-1;if(this.extendLastTick)x+=p9s.a3g(cw,2);if(parameters.gaps&&parameters.gaps.pattern){if(started){seriesPlotter.dashedLineTo("gap",x,y,parameters.gaps.pattern);}
}
else if(parameters.gaps){seriesPlotter.lineTo("gap",x,y);}
}
if(p9s.b3g(series.parameters.chartType,"mountain")&&points.length){points.push([x,(gap&&!parameters.gaps)?bottom:y]);if(!parameters.fillStyle){parameters.fillStyle=color;if(!parameters.fillOpacity)parameters.fillOpacity=0.3;}
seriesPlotter.newSeries("mountain","fill",parameters.fillStyle,parameters.fillOpacity);for(var pt=0;p9s.W3g(pt,points.length);pt++){seriesPlotter[pt?"lineTo":"moveTo"]("mountain",points[pt][0],Math.min(bottom,points[pt][1]));}
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
;STXChart.prototype.isDailyInterval=function(interval){if(p9s.F3g(interval,r84))return C2E;if(p9s.g3g(interval,z3E))return C2E;if(p9s.P3g(interval,E94))return C2E;return c47;}
;STXChart.prototype.setPeriodicityV2=function(period,interval,timeUnit,cb){var P84="ive",V5E="uoteD",c0E="llba",E5E="taC",t8E="ecaus",v47="ty",P07="io",Y6E="ange",i14="nno",y0E="ion";if(this.runPrepend("setPeriodicityV2",arguments))return ;if(typeof timeUnit===(p9s.V8E+p9s.u1E+i9E+u4E+N1E+y0E)){cb=timeUnit;timeUnit=null;}
var switchInterval=false;if(!interval)return ;if(!period)return ;delete  this.layout.setSpan;if(p9s.G3g(interval,"year")){interval="month";if(!period)period=1;period=p9s.c3g(period,12);}
var isDaily=this.isDailyInterval(interval),wasDaily=this.isDailyInterval(this.layout.interval);if(isDaily)timeUnit=null;else if(p9s.Q3g(interval,"tick"))timeUnit=null;else if(!timeUnit)timeUnit=(m2E+V37+N0E+y4E);var getDifferentData=false;if(this.chart.symbol){if(p9s.M3g(isDaily,wasDaily)||this.dontRoll)getDifferentData=true;if(!wasDaily){if(p9s.y5g(this.layout.interval,interval))getDifferentData=true;}
if(p9s.T5g(timeUnit,this.layout.timeUnit))getDifferentData=true;}
this.layout.periodicity=period;this.layout.interval=interval;this.layout.timeUnit=timeUnit;if(getDifferentData){this.changeOccurred("layout");if(this.quoteDriver){for(var c in this.charts){if(this.charts[c].symbol){if(this.displayInitialized)this.quoteDriver.newChart({symbol:this.charts[c].symbol,symbolObject:this.charts[c].symbolObject,chart:this.charts[c]}
,cb);else this.newChart(this.charts[c].symbol,null,this.charts[c],cb);}
}
return ;}
else if(this.dataCallback){this.dataCallback();if(cb)cb(null);return ;}
else{console.log((u4E+l6E+i14+N1E+v4E+u4E+I8E+Y6E+v4E+p9s.f9E+y4E+p9s.F1E+P07+P6E+C84+J8E+v47+v4E+L6E+t8E+y4E+v4E+i9E+y4E+J8E+G9E+y4E+p9s.F1E+v4E+P6E+l6E+E5E+l6E+c0E+X0E+v4E+Q9E+p9s.F1E+v4E+p9s.U9E+V5E+p9s.F1E+P84+p9s.F1E+v4E+l6E+Q2E+v4E+j1E+C4E));return ;}
}
var chartName,chart;for(chartName in this.charts){chart=this.charts[chartName];var dt,pos=Math.round(p9s.f5g(chart.maxTicks,2));this.setCandleWidth(this.layout.candleWidth,chart);var centerMe=true,rightAligned=false;if(p9s.k5g(chart.scroll,chart.maxTicks))centerMe=false;else if(chart.dataSegment&&!chart.dataSegment[pos]){centerMe=false;rightAligned=p9s.m5g(chart.scroll,chart.dataSet.length);}
if(centerMe&&chart.dataSegment&&p9s.U5g(chart.dataSegment.length,0)){if(p9s.v5g(chart.maxTicks,((Math.round((this.chart.width/this.layout.candleWidth)-0.499)-1)/2))){pos=p9s.n5g(chart.dataSegment.length,1);}
if(p9s.q5g(pos,chart.dataSegment.length)){dt=chart.dataSegment[p9s.l5g(chart.dataSegment.length,1)].DT;pos=p9s.B5g(chart.dataSegment.length,1);}
else{dt=chart.dataSegment[pos].DT;}
}
this.createDataSet();if(centerMe){if(chart.dataSegment&&p9s.R5g(chart.dataSegment.length,0)){for(var i=p9s.t5g(chart.dataSet.length,1);p9s.r5g(i,0);i--){var nd=chart.dataSet[i].DT;if(p9s.d5g(nd.getTime(),dt.getTime())){chart.scroll=(p9s.j5g(chart.dataSet.length,i))+pos;break;}
}
}
}
else if(!rightAligned){var wsInTicks=Math.round(p9s.x5g(this.preferences.whitespace,this.layout.candleWidth));chart.scroll=p9s.N1g(chart.maxTicks,wsInTicks);}
else{chart.scroll=chart.dataSet.length+rightAligned;}
}
if(this.displayInitialized)this.draw();this.changeOccurred("layout");if(this.quoteDriver){for(chartName in this.charts){chart=this.charts[chartName];if(chart.symbol&&chart.moreAvailable){this.quoteDriver.checkLoadMore(chart);}
}
}
if(cb)cb(null);this.runAppend("setPeriodicityV2",arguments);}
;STXChart.prototype.drawVectors=function(){if(this.vectorsShowing)return ;if(this.runPrepend("drawVectors",arguments))return ;this.vectorsShowing=true;if(!this.chart.hideDrawings){var tmpPanels={}
,panelName,i;for(i=0;p9s.z1g(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];panelName=drawing.panelName;if(!this.panels[drawing.panelName])continue;if(!tmpPanels[panelName]){tmpPanels[panelName]=[];}
tmpPanels[panelName].push(drawing);}
for(panelName in tmpPanels){this.startClip(panelName);var arr=tmpPanels[panelName];for(i=0;p9s.h1g(i,arr.length);i++){arr[i].render(this.chart.context);}
this.endClip();}
}
this.runAppend("drawVectors",arguments);}
;STXChart.prototype.consolidatedQuote=function(quotes,position,periodicity,interval,timeUnit,dontRoll,alignToHour){var W67="eek";if(p9s.I1g(position,0))return null;var arguments$=[quotes,position,periodicity,interval,dontRoll,alignToHour];if(this.runPrepend("consolidatedQuote",arguments$))return null;if(!dontRoll&&this.dontRoll)dontRoll=true;var quote=quotes[position];function consolidate(self,p){var ratio=1;if(self.layout.adj&&quotes[p].Adj_Close){ratio=p9s.Z1g(quotes[p].Adj_Close,quotes[p].Close);}
if(p9s.X1g("High",quotes[p]))if(p9s.D1g(quotes[p].High*ratio,quote.High))quote.High=p9s.J1g(quotes[p].High,ratio);if(p9s.p1g("Low",quotes[p]))if(p9s.E1g(quotes[p].Low*ratio,quote.Low))quote.Low=p9s.Y1g(quotes[p].Low,ratio);quote.Volume+=quotes[p].Volume;if(p9s.V1g("Close",quotes[p])&&p9s.i1g(quotes[p].Close,null))quote.Close=p9s.H1g(quotes[p].Close,ratio);quote.ratio=ratio;for(var element in quotes[p]){if(!quote[element]){quote[element]=quotes[p][element];}
}
}
function newInterval(p,interval){var d1=quotes[p9s.K1g(p,1)].DT,d2=quotes[p].DT;if(p9s.C1g(interval,"week")){if(p9s.S1g(d2.getDay(),d1.getDay()))return true;}
else if(p9s.s9g(interval,(m2E+Q9E+i9E+G9E))){if(p9s.u9g(d2.getMonth(),d1.getMonth()))return true;}
else{if(p9s.O9g(d2.getDay(),d1.getDay()))return true;}
return false;}
function newIntradayInterval(position,p,periodicity,interval,timeUnit){var X5E="con",nextBar=p9s.w9g(interval,periodicity),d1=new Date(quotes[position].DT);if(p9s.e9g(timeUnit,"millisecond"))d1.setMilliseconds(d1.getMilliseconds()+nextBar);else if(p9s.L9g(timeUnit,(l24+X5E+P6E)))d1.setSeconds(d1.getSeconds()+nextBar);else d1.setMinutes(d1.getMinutes()+nextBar);var d2=quotes[p].DT;if(alignToHour){if(p9s.A9g(quotes[position].DT.getMinutes(),nextBar)){if(p9s.o9g(d2.getMinutes()%nextBar,0)){return true;}
}
}
if(p9s.a9g(d2.getTime(),d1.getTime()))return true;return false;}
var p=position,i;if((p9s.b9g(interval,(l37+W67))||p9s.W9g(interval,"month"))&&!dontRoll){for(i=1;p9s.F9g(i,periodicity);i++){while(p9s.g9g(p+1,quotes.length)&&!newInterval(p+1,interval)){p++;consolidate(this,p);}
if(p9s.P9g(i,periodicity)){p++;if(p9s.G9g(p,quotes.length))consolidate(this,p);}
}
}
else if(!this.isDailyInterval(interval)&&p9s.c9g(interval,"tick")&&p9s.Q9g(periodicity,1)){for(i=1;p9s.M9g(i,periodicity);i++){p=position+i;if(p9s.y2g(p,quotes.length)&&newIntradayInterval(position,p,periodicity,interval,timeUnit)){p--;break;}
if(p9s.T2g(p,0)&&p9s.f2g(p,quotes.length)){consolidate(this,p);}
}
}
else{for(i=1;p9s.k2g(i,periodicity);i++){p=position+i;if(p9s.m2g(p,0)&&p9s.U2g(p,quotes.length)){consolidate(this,p);}
}
}
for(i in this.plugins){var plugin=this.plugins[i];if(plugin.consolidate)plugin.consolidate(quotes,position,p,quote);}
this.runAppend("consolidatedQuote",arguments$);return {"quote":quote,"position":p+1}
;}
;L(p9s.T94);U(p9s.y94);D(p9s.M14);E(p9s.I94);Y(p9s.L94);F(p9s.N67);R(P77);STXChart.prototype.displayChart=function(chart){var i7E="lid",V94="x_baselin",e2E="opa",S07="ace",Z8E="_tr",p37="seli",b47="do",l3E="x_ba",c6E="e_u",j77="dl",k84="tx_ca",Z1E="le",Z2E="and",E84="ev",Q6E="dle_",z24="hollow_c",O2E="x_",M4E="ndle_down",T47="ow_",g3E="_h",Y24="_l",l4E="ow",P5E="_d",F3E="stx_",C47="har",n47="isplayC",noBorders=(p9s.v2g(this.layout.candleWidth-chart.tmpWidth,2)&&p9s.n2g(chart.tmpWidth,3));if(this.runPrepend((P6E+n47+C47+N1E),arguments))return ;this.chart.baseLegendColors=[];var chartType=this.layout.chartType,colorFunction=null;if(chart.customChart){if(chart.customChart.chartType)chartType=chart.customChart.chartType;if(chart.customChart.colorFunction)colorFunction=chart.customChart.colorFunction;}
this.controls.baselineHandle.style.display="none";var panel=chart.panel;if(p9s.q2g(this.layout.aggregationType,"kagi")){this.drawKagiSquareWave(panel,"stx_kagi_up","stx_kagi_down");this.chart.baseLegendColors.push(this.getCanvasColor("stx_kagi_up"));this.chart.baseLegendColors.push(this.getCanvasColor("stx_kagi_down"));}
else if(p9s.l2g(this.layout.aggregationType,"pandf")){this.drawPointFigureChart(panel,"stx_pandf_up","X");this.chart.baseLegendColors.push(this.getCanvasColor("stx_pandf_up"));this.drawPointFigureChart(panel,"stx_pandf_down","O");this.chart.baseLegendColors.push(this.getCanvasColor("stx_pandf_down"));}
else if(p9s.B2g(chartType,"line")){this.drawLineChart(panel,"stx_line_chart");}
else if(p9s.R2g(chartType,"mountain")){this.chart.baseLegendColors=null;this.drawMountainChart(panel);}
else if(p9s.t2g(chartType,"colored_mountain")){this.startClip(panel.name);var stxLineUpColor=this.getCanvasColor("stx_line_up"),stxLineDownColor=this.getCanvasColor((F3E+k9E+i9E+y4E+P5E+l4E+i9E)),stxLineColor=this.getCanvasColor("stx_line_chart");if(!colorFunction)colorFunction=function(stx,quote,mode){if(p9s.r2g(quote.Close,quote.iqPrevClose))return stxLineUpColor;else if(p9s.d2g(quote.Close,quote.iqPrevClose))return stxLineDownColor;else return stxLineColor;return null;}
;var colors1=this.drawMountainChart(panel,"stx_colored_mountain_chart",colorFunction);for(var c1 in colors1)this.chart.baseLegendColors.push(c1);this.endClip();}
else if(p9s.j2g(chartType,"wave")){this.drawWaveChart(panel);}
else if(p9s.x2g(chartType,"bar")){this.startClip(panel.name);this.drawBarChartHighPerformance(panel,"stx_bar_chart");this.endClip();}
else if(p9s.N8g(chartType,"colored_line")){this.startClip(panel.name);var stxLineUpColor=this.getCanvasColor("stx_line_up"),stxLineDownColor=this.getCanvasColor("stx_line_down"),stxLineColor=this.getCanvasColor("stx_line_chart");if(!colorFunction)colorFunction=function(stx,quote,mode){if(p9s.z8g(quote.Close,quote.iqPrevClose))return stxLineUpColor;else if(p9s.h8g(quote.Close,quote.iqPrevClose))return stxLineDownColor;else return stxLineColor;return null;}
;var colors1=this.drawLineChart(panel,(j1E+z47+Y24+J8E+i9E+y4E+k0E+U6E),colorFunction);for(var c1 in colors1)this.chart.baseLegendColors.push(c1);this.endClip();}
else if(p9s.I8g(chartType,"colored_bar")){this.startClip(panel.name);if(colorFunction){var colors2=this.drawBarChart(panel,"stx_bar_chart",colorFunction);for(var c2 in colors2)this.chart.baseLegendColors.push(c2);}
else{this.drawBarChartHighPerformance(panel,"stx_bar_up",STXChart.CLOSEUP);this.drawBarChartHighPerformance(panel,"stx_bar_down",STXChart.CLOSEDOWN);this.drawBarChartHighPerformance(panel,"stx_bar_even",STXChart.CLOSEEVEN);this.chart.baseLegendColors.push(this.getCanvasColor("stx_bar_up"));this.chart.baseLegendColors.push(this.getCanvasColor("stx_bar_down"));}
this.endClip();}
else if(p9s.Z8g(chartType,"hollow_candle")||p9s.X8g(chartType,"volume_candle")){this.startClip(panel.name);if(colorFunction){if(!this.noWicksOnCandles[this.layout.aggregationType])this.drawShadows(panel,colorFunction);this.drawCandles(panel,colorFunction,false);this.drawCandles(panel,colorFunction,true);}
else{if(!this.noWicksOnCandles[this.layout.aggregationType]){this.drawShadowsHighPerformance(panel,"stx_hollow_candle_up",STXChart.CLOSEUP);this.drawShadowsHighPerformance(panel,"stx_hollow_candle_down",STXChart.CLOSEDOWN);this.drawShadowsHighPerformance(panel,"stx_hollow_candle_even",STXChart.CLOSEEVEN);}
var colorUp=this.getCanvasColor("stx_hollow_candle_up"),colorDown=this.getCanvasColor((i6E+p9s.X37+g3E+Q9E+N2E+N2E+T47+u4E+l6E+M4E)),colorEven=this.getCanvasColor((j1E+N1E+O2E+z24+B14+Q6E+E84+k6E));this.drawCandlesHighPerformance(panel,colorUp,"transparent",p9s.D8g(STXChart.CLOSEUP,STXChart.CANDLEDOWN));this.drawCandlesHighPerformance(panel,colorDown,"transparent",p9s.J8g(STXChart.CLOSEDOWN,STXChart.CANDLEDOWN));this.drawCandlesHighPerformance(panel,colorEven,"transparent",p9s.p8g(STXChart.CLOSEEVEN,STXChart.CANDLEDOWN));this.drawCandlesHighPerformance(panel,this.containerColor,colorUp,p9s.E8g(STXChart.CLOSEUP,STXChart.CANDLEUP));this.drawCandlesHighPerformance(panel,this.containerColor,colorDown,p9s.Y8g(STXChart.CLOSEDOWN,STXChart.CANDLEUP));this.drawCandlesHighPerformance(panel,this.containerColor,colorEven,p9s.V8g(STXChart.CLOSEEVEN,STXChart.CANDLEUP));this.chart.baseLegendColors.push(colorUp);this.chart.baseLegendColors.push(colorDown);}
this.endClip();}
else if(p9s.i8g(chartType,(u4E+Z2E+Z1E))){this.startClip(panel.name);var coloredShadowUp=this.getCanvasColor("stx_candle_shadow_up"),coloredShadowDown=this.getCanvasColor("stx_candle_shadow_down"),coloredShadow=(p9s.H8g(coloredShadowUp,coloredShadowDown));if(!colorFunction&&coloredShadow){var stxCandleShadow=this.getCanvasColor("stx_candle_shadow"),stxCandleUpColor=this.getCanvasColor((j1E+k84+i9E+j77+c6E+p9s.f9E)),stxCandleDownColor=this.getCanvasColor("stx_candle_down"),stxCandleUp=this.canvasStyle("stx_candle_up"),stxCandleDown=this.canvasStyle("stx_candle_down");colorFunction=function(stx,quote,mode){if(p9s.K8g(mode,"shadow")){if(coloredShadow){if(p9s.C8g(quote.Close,quote.Open))return coloredShadowUp;else if(p9s.S8g(quote.Close,quote.Open))return coloredShadowDown;}
return stxCandleShadow;}
else if(p9s.s7i(mode,"solid")){if(p9s.u7i(quote.Close,quote.Open))return stxCandleUpColor;else if(p9s.O7i(quote.Close,quote.Open))return stxCandleDownColor;else if(p9s.w7i(quote.Close,quote.Open))return stxCandleShadow;}
else if(p9s.e7i(mode,"outline")){var styleArray1;if(p9s.L7i(quote.Close,quote.Open))styleArray1=stxCandleUp;else if(p9s.A7i(quote.Close,quote.Open))styleArray1=stxCandleDown;else return null;var borderColor=styleArray1["border-left-color"];if(!borderColor)borderColor=styleArray1.borderLeftColor;return borderColor;}
return null;}
;}
if(colorFunction){if(!this.noWicksOnCandles[this.layout.aggregationType])this.drawShadows(panel,colorFunction);this.drawCandles(panel,colorFunction,false);if(!noBorders)this.drawCandles(panel,colorFunction,true);}
else{if(!this.noWicksOnCandles[this.layout.aggregationType])this.drawShadowsHighPerformance(panel,"stx_candle_shadow");var styleArray=this.canvasStyle("stx_candle_up"),borderColor=styleArray["border-left-color"];if(!borderColor)borderColor=styleArray.borderLeftColor;if(noBorders)borderColor=null;this.drawCandlesHighPerformance(panel,this.getCanvasColor("stx_candle_up"),borderColor,STXChart.CANDLEUP);this.chart.baseLegendColors.push(styleArray.color);styleArray=this.canvasStyle("stx_candle_down");borderColor=styleArray["border-left-color"];if(!borderColor)borderColor=styleArray.borderLeftColor;if(noBorders)borderColor=null;this.drawCandlesHighPerformance(panel,this.getCanvasColor("stx_candle_down"),borderColor,STXChart.CANDLEDOWN);this.chart.baseLegendColors.push(styleArray.color);}
this.endClip();}
else if(p9s.o7i(chartType,"baseline_delta")){this.startClip(panel.name);this.setStyle("stx_baseline_trace","opacity",0);this.drawLineChart(panel,"stx_baseline_trace");var baseline=chart.baseline.actualLevel;if(p9s.a7i(baseline,null)){baseline=this.pixelFromPriceTransform(baseline,chart.panel);var styles={"over":"stx_baseline_up","under":"stx_baseline_down"}
;for(var s in styles){var parameters={panelName:"chart",band:"Close",threshold:chart.baseline.actualLevel,color:this.getCanvasColor(styles[s]),direction:(p9s.b7i(s,"over")?1:-1),edgeHighlight:this.getCanvasColor(styles[s]),edgeParameters:{pattern:"solid",lineWidth:parseInt(this.canvasStyle(styles[s]).width,10)+0.1,opacity:1}
}
,color=parameters.color;if(color&&p9s.W7i(color,"transparent")){var gradient=chart.context.createLinearGradient(0,(p9s.F7i(s,"over")?0:p9s.g7i(2,baseline)),0,baseline);gradient.addColorStop(0,STX.hexToRgba(color,60));gradient.addColorStop(1,STX.hexToRgba(color,10));parameters.color=gradient;parameters.opacity=1;}
STX.Studies.preparePeakValleyFill(this,chart.dataSegment,parameters);this.chart.baseLegendColors.push(color);}
this.plotLine(0,1,baseline,baseline,this.containerColor,"line",chart.context,true,{pattern:"solid",lineWidth:"1.1",opacity:1}
);this.plotLine(0,1,baseline,baseline,this.getCanvasColor((i6E+l3E+j1E+J5E+J8E+H47)),"line",chart.context,true,{pattern:(b47+x77+C0E),lineWidth:"2.1",opacity:0.5}
);if(p9s.P7i(this.chart.baseline.userLevel,false)){this.controls.baselineHandle.style.top=p9s.G7i(baseline,parseInt(getComputedStyle(this.controls.baselineHandle).height,10)/2,"px");this.controls.baselineHandle.style.left=p9s.C7i(this.chart.right,parseInt(getComputedStyle(this.controls.baselineHandle).width,10),"px");this.controls.baselineHandle.style.display="block";}
}
this.endClip();}
else if(p9s.x7i(chartType,"baseline_delta_mountain")){var baseline=chart.baseline.actualLevel;if(p9s.N6i(baseline,null)){this.drawMountainChart(panel,"stx_baseline_delta_mountain");this.startClip(panel.name);this.setStyle((s2E+k0E+s37+p37+i9E+y4E+Z8E+S07),(e2E+H4E+N1E+Q07),0);this.drawLineChart(panel,"stx_baseline_trace");baseline=this.pixelFromPriceTransform(baseline,chart.panel);var styles={"over":(i6E+V94+c6E+p9s.f9E),"under":"stx_baseline_down"}
;for(var s in styles){var parameters={panelName:"chart",band:"Close",threshold:chart.baseline.actualLevel,color:this.getCanvasColor(styles[s]),direction:(p9s.z6i(s,"over")?1:-1),edgeHighlight:this.getCanvasColor(styles[s]),edgeParameters:{pattern:(j1E+Q9E+i7E),lineWidth:parseInt(this.canvasStyle(styles[s]).width,10)+0.1,opacity:1}
}
;this.chart.baseLegendColors.push(parameters.color);parameters.color="transparent";STX.Studies.preparePeakValleyFill(this,chart.dataSegment,parameters);}
this.plotLine(0,1,baseline,baseline,this.containerColor,"line",chart.context,true,{pattern:"solid",lineWidth:"1.1",opacity:1}
);this.plotLine(0,1,baseline,baseline,this.getCanvasColor("stx_baseline"),"line",chart.context,true,{pattern:"dotted",lineWidth:"2.1",opacity:0.5}
);if(p9s.h6i(this.chart.baseline.userLevel,false)){this.controls.baselineHandle.style.top=p9s.I6i(baseline,parseInt(getComputedStyle(this.controls.baselineHandle).height,10)/2,"px");this.controls.baselineHandle.style.left=p9s.m6i(this.chart.right,parseInt(getComputedStyle(this.controls.baselineHandle).width,10),"px");this.controls.baselineHandle.style.display="block";}
this.endClip();}
}
else if(p9s.A6i(chartType,"scatterplot")){this.startClip(panel.name);this.scatter(panel);this.endClip();}
else{this.chart.baseLegendColors=null;}
this.runAppend("displayChart",arguments);}
;STXChart.prototype.calculateATR=function(chart,period){if(!period)period=20;var total=0;for(var i=1;p9s.o6i(i,chart.dataSet.length);i++){var q=chart.dataSet[i],previousClose=chart.dataSet[p9s.a6i(i,1)].Close,trueRange=Math.max(p9s.b6i(q.High,q.Low),Math.abs(p9s.W6i(q.High,previousClose)),Math.abs(p9s.F6i(q.Low,previousClose)));total+=trueRange;if(p9s.g6i(i,period))total-=chart.dataSet[p9s.P6i(i,period)].trueRange;q.trueRange=trueRange;q.atr=p9s.G6i(total,period);}
}
;STXChart.prototype.calculateMedianPrice=function(chart){var d;for(var i=0;p9s.c6i(i,chart.dataSet.length);++i){d=chart.dataSet[i];d["hl/2"]=p9s.Q6i((d.High+d.Low),2);}
}
;STXChart.prototype.calculateTypicalPrice=function(chart){var d;for(var i=0;p9s.M6i(i,chart.dataSet.length);++i){d=chart.dataSet[i];d["hlc/3"]=p9s.y4i((d.High+d.Low+d.Close),3);}
}
;STXChart.prototype.calculateWeightedClose=function(chart){var d;for(var i=0;p9s.T4i(i,chart.dataSet.length);++i){d=chart.dataSet[i];d["hlcc/4"]=p9s.f4i((d.High+d.Low+2*d.Close),4);}
}
;STXChart.prototype.calculateOHLC4=function(chart){var d;for(var i=0;p9s.k4i(i,chart.dataSet.length);++i){d=chart.dataSet[i];d["ohlc/4"]=p9s.m4i((d.Open+d.High+d.Low+d.Close),4);}
}
;STXChart.prototype.currentQuote=function(){var quote=null;if(!this.chart.dataSet)return null;for(var i=p9s.U4i(this.chart.dataSet.length,1);p9s.v4i(i,0);i--)if(this.chart.dataSet[i])return this.chart.dataSet[i];return null;}
;STXChart.prototype.correctIfOffEdge=function(theChart){if(this.runPrepend("correctIfOffEdge",arguments))return ;for(var chartName in this.charts){var chart=this.charts[chartName],leftPad=this.minimumLeftBars+1;if(chart.allowScrollPast){var rightPad=p9s.n4i(chart.maxTicks,leftPad);if(p9s.q4i(chart.maxTicks-rightPad,chart.dataSet.length)){rightPad=p9s.l4i(chart.maxTicks,chart.dataSet.length);}
if(p9s.B4i(chart.scroll-rightPad,chart.dataSet.length)){chart.scroll=chart.dataSet.length+rightPad;}
if(p9s.R4i(chart.scroll,leftPad)){chart.scroll=leftPad;this.micropixels=-this.layout.candleWidth/2;}
}
else{if(p9s.t4i(chart.scroll,leftPad)){chart.scroll=leftPad;}
if(p9s.r4i(chart.scroll,chart.dataSet.length)){chart.scroll=chart.dataSet.length;}
}
}
this.runAppend("correctIfOffEdge",arguments);}
;STXChart.prototype.createDataSegment=function(theChart){if(this.runPrepend("createDataSegment",arguments))return ;for(var chartName in this.charts){var chart=this.charts[chartName];if(theChart)chart=theChart;chart.baseline.actualLevel=chart.baseline.userLevel?chart.baseline.userLevel:chart.baseline.defaultLevel;chart.dataSegment=[];var position=p9s.d4i(chart.dataSet.length,chart.scroll,1);for(var i=-1;p9s.Q4i(i,chart.scroll)&&p9s.M4i(i,chart.maxTicks);i++){position++;if(i==-1&&!chart.baseline.includeInDataSegment)continue;if(p9s.y0i(position,chart.dataSet.length)&&p9s.T0i(position,0)){if(chart.dataSet[position].candleWidth){chart.dataSet[position].candleWidth=null;chart.dataSet[position].leftOffset=null;}
chart.dataSegment.push(chart.dataSet[position]);if(p9s.f0i(chart.baseline.actualLevel,null)&&p9s.k0i(i,0))chart.baseline.actualLevel=chart.dataSet[position].iqPrevClose;}
else if(p9s.m0i(position,0)){chart.dataSegment.push(null);}
}
if(p9s.U0i(this.layout.chartType,"volume_candle")){var totalVolume=0;for(var v=0;p9s.v0i(v,chart.dataSegment.length);v++){if(chart.dataSegment[v])totalVolume+=chart.dataSegment[v].Volume;}
var accumOffset=0;for(var w=0;p9s.n0i(w,chart.dataSegment.length);w++){if(chart.dataSegment[w]){if(chart.dataSegment[w].Volume){var workingWidth=chart.width;if(p9s.q0i(chart.scroll,chart.maxTicks))workingWidth-=this.preferences.whitespace;chart.dataSegment[w].candleWidth=p9s.l0i(workingWidth,chart.dataSegment[w].Volume,totalVolume);chart.dataSegment[w].leftOffset=accumOffset+p9s.F0i(chart.dataSegment[w].candleWidth,2);accumOffset+=chart.dataSegment[w].candleWidth;}
else{chart.dataSegment[w].candleWidth=this.layout.candleWidth;chart.dataSegment[w].leftOffset=accumOffset+p9s.g0i(this.layout.candleWidth,2);accumOffset+=this.layout.candleWidth;}
}
else{accumOffset+=this.layout.candleWidth;}
}
}
if(theChart)break;}
this.runAppend("createDataSegment",arguments);}
;STXChart.prototype.leftTick=function(){return p9s.P0i(this.chart.dataSet.length,this.chart.scroll);}
;STXChart.prototype.getStartDateOffset=function(){for(var ds=0;p9s.G0i(ds,this.chart.dataSegment.length);ds++){if(this.chart.dataSegment[ds]){return ds;}
}
return 0;}
;STXChart.prototype.setStartDate=function(dt){for(var i=0;p9s.c0i(i,this.chart.dataSet.length);i++){var bar=this.chart.dataSet[i];if(p9s.Q0i(bar.DT.getTime(),dt.getTime())){this.chart.scroll=p9s.M0i(this.chart.dataSet.length,i);this.draw();return ;}
}
}
;STXChart.prototype.updateListeners=function(event){for(var i in this.plugins){var plugin=this.plugins[i];if(plugin.display&&plugin.listener)plugin.listener(this,event);}
}
;STXChart.prototype.clearPixelCache=function(){for(var x in this.panels){var panel=this.panels[x];panel.cacheHigh=null;panel.cacheLow=null;panel.cacheLeft=1000000;panel.cacheRight=-1;}
for(var chartName in this.charts){var chart=this.charts[chartName];if(!chart.dataSet)continue;for(var i=0;p9s.y3i(i,chart.dataSet.length);i++){chart.dataSet[i].cache={}
;}
}
}
;STXChart.prototype.createYAxisLabel=function(panel,txt,y,backgroundColor,color,ctx,yAxis){var e3E="eft",l1E="FF";if(p9s.T3i(panel.yAxis.drawPriceLabels,false))return ;var yax=yAxis?yAxis:panel.yAxis,context=ctx?ctx:this.chart.context,margin=3,height=this.getCanvasFontSize("stx_yaxis")+p9s.f3i(margin,2);this.canvasFont("stx_yaxis",context);var drawBorders=yax.displayBorder;if(p9s.k3i(this.axisBorders,false))drawBorders=false;if(p9s.m3i(this.axisBorders,true))drawBorders=true;var tickWidth=drawBorders?3:0,width;try{width=context.measureText(txt).width+tickWidth+p9s.U3i(margin,2);}
catch(e){width=yax.width;}
var x=p9s.v3i(yax.left,margin,3),textx=x+margin+tickWidth,radius=3,position=(p9s.a3i(yax.position,null)?panel.chart.yAxis.position:yax.position);if(p9s.b3i(position,"left")){x=yax.left+yax.width+margin-3;width=width*-1;textx=x;radius=-3;context.textAlign="right";}
if(p9s.W3i(y+(height/2),yax.bottom))y=p9s.F3i(yax.bottom,(height/2));if(p9s.g3i(y-(height/2),yax.top))y=yax.top+(p9s.P3i(height,2));context.fillStyle=backgroundColor;if(typeof (STX[this.yaxisLabelStyle])=='undefined'){this.yaxisLabelStyle="roundRectArrow";}
var yaxisLabelStyle=this.yaxisLabelStyle;if(yax.yaxisLabelStyle)yaxisLabelStyle=yax.yaxisLabelStyle;STX[yaxisLabelStyle](context,x,p9s.G3i(y,(height/2)),width,height,radius,true,false);if(p9s.c3i(this.preferences.currentPriceLine,true)&&p9s.Q3i(panel.chart.scroll-1,Math.ceil(panel.chart.width/this.layout.candleWidth))){context.globalCompositeOperation="destination-over";this.plotLine(panel.left,panel.right,y,y,backgroundColor,(N2E+V37+y4E),context,panel,{pattern:"dashed",lineWidth:1,opacity:0.8}
);context.globalCompositeOperation="source-over";}
context.textBaseline="middle";context.fillStyle=color?color:STX.chooseForegroundColor(backgroundColor);if(p9s.M3i(context.fillStyle,backgroundColor)){if(p9s.y5i(backgroundColor.toUpperCase(),"#FFFFFF"))context.fillStyle="#000000";else context.fillStyle=(p9s.E2E+Y7E+l1E+l1E+Y7E);}
context.fillText(txt,textx,y+1);context.textAlign=(N2E+e3E);}
;STXChart.prototype.createXAxisLabel=function(panel,txt,x,backgroundColor,color,pointed){var u2E="loat",context=this.chart.context,margin=2,fontstyle=(j1E+N1E+p9s.X37+r1E+p9s.V8E+u2E+r1E+P6E+E24+y4E),height=this.getCanvasFontSize(fontstyle)+p9s.T5i(margin,2);this.canvasFont(fontstyle,context);var width;try{width=context.measureText(txt).width+p9s.f5i(margin,2);}
catch(e){width=0;}
var y=panel.top+panel.height-height;if(p9s.k5i(x+(width/2),panel.left)||p9s.m5i(x-(width/2),panel.right))return ;if(!pointed){if(p9s.U5i(x+(width/2),panel.right))x=p9s.v5i(panel.right,(width/2));if(p9s.n5i(x-(width/2),panel.left))x=panel.left+(p9s.q5i(width,2));}
context.fillStyle=backgroundColor;STX.roundRect(context,p9s.l5i(x,(width/2)),y,width,height,3,true,false);if(pointed){var arrowHeight=p9s.B5i(panel.bottom,panel.yAxis.bottom,height);context.beginPath();context.moveTo(p9s.g5i(x,arrowHeight),y);context.lineTo(x,p9s.P5i(y,arrowHeight));context.lineTo(x+arrowHeight,y);context.closePath();context.fill();}
context.textBaseline="top";context.fillStyle=color?color:STX.chooseForegroundColor(backgroundColor);if(p9s.G5i(context.fillStyle,backgroundColor)){if(p9s.c5i(backgroundColor.toUpperCase(),"#FFFFFF"))context.fillStyle="#000000";else context.fillStyle="#FFFFFF";}
context.fillText(txt,p9s.Q5i(x,width/2,margin),y+margin);}
;STXChart.prototype.drawCurrentHR=function(){if(this.runPrepend("drawCurrentHR",arguments))return ;var backgroundColor,color;for(var chartName in this.charts){var chart=this.charts[chartName],panel=chart.panel,yAxis=panel.yAxis;if(p9s.s1i(yAxis.drawCurrentPriceLabel,false))continue;if(chart.customChart&&p9s.u1i(chart.customChart.chartType,"none"))continue;var whichSet=yAxis.whichSet;if(!whichSet)whichSet="dataSet";var l=chart[whichSet].length;if(p9s.O1i(whichSet,"dataSegment")){while(p9s.w1i(l,(chart.width-this.micropixels+(this.layout.candleWidth)/2+1)/this.layout.candleWidth))l--;}
if(l){var quote=chart[whichSet][p9s.e1i(l,1)],prevClose=quote.Close,currentClose=quote.Close;if(p9s.L1i(chart.dataSet.length,2)){var quote2=chart[whichSet][p9s.A1i(l,2)];prevClose=quote2.Close;}
if(p9s.o1i(currentClose,prevClose)){backgroundColor=this.canvasStyle("stx_current_hr_down").backgroundColor;color=this.canvasStyle("stx_current_hr_down").color;}
else{backgroundColor=this.canvasStyle("stx_current_hr_up").backgroundColor;color=this.canvasStyle("stx_current_hr_up").color;}
if(quote.transform)quote=quote.transform;var txt,labelDecimalPlaces=Math.max(panel.yAxis.printDecimalPlaces,panel.chart.decimalPlaces);if(yAxis.maxDecimalPlaces||p9s.a1i(yAxis.maxDecimalPlaces,0))labelDecimalPlaces=Math.min(labelDecimalPlaces,yAxis.maxDecimalPlaces);if(yAxis.priceFormatter){txt=yAxis.priceFormatter(this,panel,quote.Close,labelDecimalPlaces);}
else{txt=this.formatYAxisPrice(quote.Close,panel,labelDecimalPlaces);}
var y=this.pixelFromPrice(quote.Close,panel);this.createYAxisLabel(panel,txt,y,backgroundColor,color);}
}
this.runAppend("drawCurrentHR",arguments);}
;STXChart.prototype.getDefaultColor=function(){var U84=0.65;this.defaultColor=K3E;var bgColor=p9s.r2E,div=this.chart.container;while(!bgColor||STX.isTransparent(bgColor)){var cStyle=getComputedStyle(div);if(!cStyle)return ;bgColor=cStyle.backgroundColor;if(STX.isTransparent(bgColor))bgColor=Z5E;div=div.parentNode;if(!div||!div.tagName)break;}
if(bgColor){if(p9s.b1i(bgColor,Z5E))bgColor=b67;this.containerColor=bgColor;if(!STX.isTransparent(bgColor)){var hsv=STX.hsv(bgColor),v=hsv[p9s.M14];if(p9s.W1i(v,U84))this.defaultColor=K3E;else this.defaultColor=b67;}
else{this.defaultColor=K3E;}
}
else{this.containerColor=b67;}
}
;STXChart.prototype.startAsyncAction=function(){if(!this.pendingAsyncs)this.pendingAsyncs=[];this.pendingAsyncs.push(C2E);}
;STXChart.prototype.registerChartDrawnCallback=function(fc){if(!this.asyncCallbacks)this.asyncCallbacks=[];this.asyncCallbacks.push(fc);return {fc:fc}
;}
;STXChart.prototype.unregisterChartDrawnCallback=function(obj){for(var i=0;p9s.F1i(i,this.asyncCallbacks.length);i++){if(p9s.g1i(this.asyncCallbacks[i],obj.fc)){this.asyncCallbacks.splice(i,1);return ;}
}
}
;STXChart.prototype.makeAsyncCallbacks=function(){if(!this.asyncCallbacks)return ;if(!this.pendingAsyncs||!this.pendingAsyncs.length){for(var i=0;p9s.P1i(i,this.asyncCallbacks.length);i++){(this.asyncCallbacks[i])();}
}
}
;STXChart.prototype.completeAsyncAction=function(){this.pendingAsyncs.pop();this.makeAsyncCallbacks();}
;STXChart.prototype.draw=function(){var k7E="aw";this.debug();if(!this.chart.canvas)return ;if(!this.chart.dataSet)return ;if(!this.chart.canvasHeight)return ;this.offset=p9s.G1i(this.layout.candleWidth,this.candleWidthPercent,2);STX.clearCanvas(this.chart.canvas,this);if(this.runPrepend("draw",arguments))return ;if(!this.xaxisHeight){this.xaxisHeight=this.getCanvasFontSize("stx_xaxis")+4;if(this.chart.xAxis.displayBorder||this.axisBorders)this.xaxisHeight+=3;}
this.getDefaultColor();this.vectorsShowing=false;this.drawPanels();this.yAxisLabels=[];var i,chart,chartName,plugin;for(chartName in this.charts){chart=this.charts[chartName];this.correctIfOffEdge();this.createDataSegment();var axisRepresentation=this.createXAxis(chart);this.initializeDisplay(chart);this.rendererAction(chart,"calculate");this.renderYAxis(chart);this.drawXAxis(chart,axisRepresentation);chart.tmpWidth=Math.floor(p9s.C1i(this.layout.candleWidth,this.candleWidthPercent));if(p9s.S1i(chart.tmpWidth%2,0)){chart.tmpWidth+=1;if(p9s.s9i(chart.tmpWidth,this.layout.candleWidth))chart.tmpWidth-=2;}
if(p9s.u9i(chart.tmpWidth,0.5))chart.tmpWidth=0.5;for(i in this.plugins){plugin=this.plugins[i];if(plugin.display){if(plugin.drawUnder)plugin.drawUnder(this,chart);}
}
this.rendererAction(chart,"underlay");STX.Studies.displayStudies(this,chart,true);this.displayChart(chart);STX.Studies.displayStudies(this,chart,false);this.rendererAction(chart,"overlay");}
for(chartName in this.charts){chart=this.charts[chartName];for(i in this.plugins){plugin=this.plugins[i];if(plugin.display){if(plugin.drawOver)plugin.drawOver(this,chart);}
}
}
for(var panel in this.panels){if(!this.panels[panel].hidden)this.plotYAxisText(this.panels[panel]);}
for(var yLbl=0;p9s.O9i(yLbl,this.yAxisLabels.length);yLbl++){this.createYAxisLabel.apply(this,this.yAxisLabels[yLbl].args);}
this.createCrosshairs();this.drawVectors();this.drawCurrentHR();this.displayInitialized=true;if(this.controls.home){if(p9s.w9i(this.chart.scroll-1,Math.ceil(this.chart.width/this.layout.candleWidth))){this.controls.home.style.display="block";}
else{this.controls.home.style.display="none";}
}
this.positionMarkers();for(chartName in this.charts){chart=this.charts[chartName];if(this.quoteDriver)this.quoteDriver.checkLoadMore(chart);}
this.runAppend((P6E+p9s.F1E+k7E),arguments);this.makeAsyncCallbacks();}
;STXChart.prototype.adjustBackingStore=function(canvas,context){this.devicePixelRatio=window.devicePixelRatio||1;if(p9s.e9i(this.devicePixelRatio,1.0))this.devicePixelRatio=1.0;var backingStoreRatio=context.webkitBackingStorePixelRatio||context.mozBackingStorePixelRatio||context.msBackingStorePixelRatio||context.oBackingStorePixelRatio||context.backingStorePixelRatio||1,ratio=p9s.L9i(this.devicePixelRatio,backingStoreRatio);if(!STX.isAndroid||STX.is_chrome){var oldWidth=canvas.width,oldHeight=canvas.height;canvas.width=p9s.A9i(oldWidth,ratio);canvas.height=p9s.o9i(oldHeight,ratio);canvas.style.width=oldWidth+'px';canvas.style.height=oldHeight+'px';context.scale(ratio,ratio);}
}
;STXChart.prototype.resizeCanvas=function(){if(!this.chart.panel)this.chart.panel=this.panels.chart;var canvas=this.chart.canvas,context=this.chart.context;if(canvas&&context){this.chart.tempCanvas.height=canvas.height=this.chart.container.clientHeight;this.chart.tempCanvas.width=canvas.width=this.chart.container.clientWidth;this.adjustBackingStore(canvas,context);this.adjustBackingStore(this.chart.tempCanvas,this.chart.tempCanvas.context);this.floatCanvas.height=this.chart.container.clientHeight;this.floatCanvas.width=this.chart.container.clientWidth;this.adjustBackingStore(this.floatCanvas,this.floatCanvas.context);}
var rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.canvasWidth=this.chart.canvasWidth=this.chart.container.clientWidth;this.right=this.left+this.canvasWidth;this.height=this.chart.container.clientHeight;this.width=p9s.a9i(this.right,this.left);this.bottom=this.top+this.height;this.calculateYAxisPositions();this.chart.canvasRight=this.right;this.chart.canvasHeight=this.height;var candleWidth=this.layout.candleWidth;if(typeof (candleWidth)=="undefined")candleWidth=8;for(var chartName in this.charts){var chart=this.charts[chartName];if(this.layout.span){this.setCandleWidth(this.getSpanCandleWidth(this.layout.span),chart);}
else{this.setCandleWidth(candleWidth,chart);if(p9s.b9i(chart.scroll,chart.width/candleWidth)){chart.scroll=Math.floor(p9s.W9i(chart.width,candleWidth));var wsInTicks=Math.round(p9s.F9i(this.preferences.whitespace,this.layout.candleWidth));chart.scroll-=wsInTicks;}
}
var idealNumberOfTicks=10,appxLabelWidth;try{appxLabelWidth=p9s.g9i(context.measureText("10:00").width,2);}
catch(e){appxLabelWidth=100;}
while(p9s.P9i(idealNumberOfTicks,1)){if(p9s.G9i(this.chart.width/appxLabelWidth,idealNumberOfTicks))break;idealNumberOfTicks/=1.5;}
chart.xAxis.autoComputedTickSizePixels=Math.round(p9s.c9i(this.chart.width,idealNumberOfTicks));if(p9s.Q9i(chart.xAxis.autoComputedTickSizePixels,1))chart.xAxis.autoComputedTickSizePixels=1;}
}
;STXChart.prototype.setCandleWidth=function(newCandleWidth,chart){if(!chart)chart=this.chart;if(p9s.M9i(newCandleWidth,this.minimumCandleWidth))newCandleWidth=this.minimumCandleWidth;this.layout.candleWidth=newCandleWidth;chart.maxTicks=Math.ceil(p9s.y2i(this.chart.width,newCandleWidth)+0.5);}
;STXChart.prototype.resizeChart=function(maintainScroll){var D3E="resizeChart";if(this.runPrepend(D3E,arguments))return ;if(p9s.T2i(maintainScroll,c47))maintainScroll=C2E;if(maintainScroll)this.preAdjustScroll();var previousHeight=this.chart.canvasHeight;this.resizeCanvas();if(maintainScroll)this.postAdjustScroll();if(this.displayInitialized){this.adjustPanelPositions();this.draw();}
else if(p9s.f2i(this.chart.canvasHeight,p9s.T94)&&p9s.k2i(previousHeight,p9s.T94)){this.adjustPanelPositions();this.draw();}
this.runAppend(D3E,arguments);}
;STXChart.prototype.newChart=function(symbol,masterData,chart,cb,params){var T24="figu",h8E="Fee",t9E="ied",n84="pecif",s4E="ata",W4E="ster",a24="N",t6E="Warnin",p07='object';if(!chart)chart=this.chart;if(!params)params={}
;if(params.periodicity){if(params.periodicity.interval)this.layout.interval=params.periodicity.interval;if(params.periodicity.period)this.layout.periodicity=params.periodicity.period;this.layout.timeUnit=params.periodicity.timeUnit;}
var prevSymbol=chart.symbol,prevSymbolObject=STX.clone(chart.symbolObject),prevMarket=chart.market;if(!symbol){chart.symbol=p9s.r2E;chart.symbolObject={symbol:p9s.r2E}
;}
else if(typeof symbol==p07){chart.symbol=symbol.symbol;chart.symbolObject=symbol;}
else{chart.symbol=symbol;chart.symbolObject.symbol=symbol;}
if(!masterData&&this.quoteDriver){var callback=function(err){if(err){chart.symbol=prevSymbol;chart.symbolObject=prevSymbolObject;chart.market=prevMarket;}
if(cb)cb(err);}
,setSpan=params.span;if(!setSpan&&this.layout)setSpan=this.layout.setSpan;if(setSpan&&setSpan.base){var multiplier=setSpan.multiplier||p9s.y94;this.chart.masterData=p9s.r2E;this.displayInitialized=c47;this.setSpan({maintainPeriodicity:params.periodicity?C2E:c47,multiplier:multiplier,base:setSpan.base,symbol:chart.symbol}
,callback);}
else{var self=this;this.quoteDriver.newChart({symbol:chart.symbol,symbolObject:chart.symbolObject,chart:chart,initializeChart:C2E}
,function(){self.adjustPanelPositions();self.quoteDriver.updateSubscriptions();if(params.stretchToFillScreen){self.fillScreen();}
callback.apply(self,arguments);}
);}
}
else{if(!masterData){console.log((t6E+p9s.j8E+Z47+a24+Q9E+v4E+m2E+l6E+W4E+p7E+s4E+v4E+j1E+n84+t9E+v4E+l6E+i9E+P6E+v4E+i9E+Q9E+v4E+F14+L7E+N1E+y4E+h8E+P6E+v4E+u4E+Q9E+i9E+T24+Q2E+P6E));}
if(!chart.symbol)chart.symbol=d5E;this.setMasterData(masterData,chart);this.createDataSet();this.initializeChart();if(params.span&&params.span.multiplier&&params.span.base){this.setSpan({maintainPeriodicity:C2E,multiplier:params.span.multiplier,base:params.span.base}
);}
else if(params.stretchToFillScreen){this.fillScreen();}
else{this.draw();}
this.adjustPanelPositions();if(cb)cb();}
}
;STXChart.prototype.fillScreen=function(){var candleWidth=this.layout.candleWidth,chartWidth=p9s.m2i(this.chart.width,this.preferences.whitespace),count=this.chart.dataSet.length;if(p9s.U2i(count*candleWidth,chartWidth)){this.draw();return ;}
var newCandleWidth=p9s.v2i(chartWidth,count);this.setCandleWidth(newCandleWidth,this.chart);this.home({maintainWhitespace:true}
);}
;STXChart.prototype.setMasterData=function(masterData,chart){var p2E='= ',x9E='dex',t7E='ngs',k5E='ri',I4E='ides',T84='ov',t14='ou',o67='() ',Q67='Floa',z1E='U',M94='. ',b14='er',z84='umb',q7E='ta',B2E='Da',E14='st',b37='tM',l77='se',h37='j',W0E='ata',E37='rD',w4E='nd',n1E='T',S6E='D',p3E='M',G84=' : ',z5E='Data',V1E='ster',n6E='tMa';if(!chart)chart=this.chart;if(this.marketFactory){var marketDef=this.marketFactory(chart.symbolObject);this.setMarket(marketDef,chart);}
chart.masterData=masterData;if(p9s.n2i(chart.name,"chart"))this.masterData=masterData;var i;for(i=0;masterData&&p9s.q2i(i,masterData.length);i++){if(this.transformMasterDataQuote)masterData[i]=this.transformMasterDataQuote(masterData[i]);var quotes=masterData[i];if(quotes.DT){quotes.DT=new Date(quotes.DT);quotes.Date=STX.yyyymmddhhmmssmmm(quotes.DT);}
else if(quotes.Date)quotes.DT=STX.strToDateTime(quotes.Date);else console.log((N3E+m77+n6E+V1E+z5E+G84+p3E+H07+V14+H07+u07+D37+W77+S6E+n1E+W77+d67+w4E+W77+S6E+i24+m77+W77+k07+u07+W77+t47+d67+N3E+V6E+E37+W0E+W77+k07+O47+h37+m77+X67+b5E));if(quotes.Volume&&typeof quotes.Volume!=="number")quotes.Volume=parseInt(quotes.Volume,10);if(typeof quotes.Close=='number'){}
else{console.log((l77+b37+d67+E14+m77+V0E+B2E+q7E+G84+g6E+R07+k07+l77+W77+H07+N3E+W77+t47+H07+V14+H07+u07+D37+W77+k07+V0E+W77+u07+Z94+W77+d67+W77+u07+z84+b14+M94+z1E+l77+W77+v3E+y24+l77+Q67+b5E+o67+H07+V77+W77+h4E+t14+V0E+W77+B67+i24+d67+W77+N3E+b14+t37+V0E+W77+v3E+V0E+T84+I4E+W77+N3E+b5E+k5E+t7E+M94+p3E+U24+V6E+V0E+B2E+b5E+d67+W77+l5E+u07+x9E+p2E)+i+' Value = '+quotes.Close);}
if(p9s.l2i(quotes.High,null))delete  quotes.High;if(p9s.B2i(quotes.Low,null))delete  quotes.Low;if(p9s.R2i(quotes.Open,null))delete  quotes.Open;}
chart.decimalPlaces=this.callbacks.calculateTradingDecimalPlaces({stx:this,chart:chart,symbol:chart.symbolObject.symbol,symbolObject:chart.symbolObject}
);if(!STXChart.isDailyInterval(this.layout.interval))this.setDisplayDates(masterData);this.chart.roundit=Math.pow(10,chart.decimalPlaces);for(i in this.plugins){var plugin=this.plugins[i];if(plugin.display){if(plugin.setMasterData)plugin.setMasterData(this,chart);}
}
for(var s in this.chart.series){var series=this.chart.series[s];if(series.addSeriesData){series.addSeriesData(this);}
}
}
;STXChart.prototype.getSymbols=function(){var a=[],obj;for(var chartName in this.charts){var chart=this.charts[chartName];a.push({symbol:chart.symbol,symbolObject:chart.symbolObject,periodicity:this.layout.periodicity,interval:this.layout.interval,timeUnit:this.layout.timeUnit}
);for(var field in chart.series){var series=chart.series[field];if(!series.parameters.data||!series.parameters.data.useDefaultQuoteFeed)continue;obj={symbol:field,symbolObject:series.symbolObject,periodicity:this.layout.periodicity,interval:this.layout.interval,timeUnit:this.layout.timeUnit}
;if(p9s.t2i(arguments[0],"include-parameters"))obj.parameters=series.parameters;if(!obj.symbolObject)obj.symbolObject={symbol:field}
;a.push(obj);}
}
for(var p in this.panels){if(this.panels[p].studyQuotes){for(var sq in this.panels[p].studyQuotes){obj={symbol:sq,symbolObject:{symbol:sq}
,periodicity:this.layout.periodicity,interval:this.layout.interval,timeUnit:this.layout.timeUnit}
;a.push(obj);}
}
}
for(var s=p9s.r2i(a.length,1);p9s.d2i(s,0);s--){var symbol=a[s].symbol;if(this.isEquationChart(symbol)){var res=STX.formatEquation(symbol);if(res){for(var sym=0;p9s.j2i(sym,res.symbols.length);sym++){obj={symbol:res.symbols[sym],symbolObject:a[s].symbolObject,periodicity:a[s].periodicity,interval:a[s].interval,timeUnit:a[s].timeUnit}
;a.push(obj);}
a.splice(s,1);}
}
}
return a;}
;STXChart.prototype.setDisplayDate=function(quote){var dt=quote.DT,milli=p9s.x2i(dt.getSeconds(),U07)+dt.getMilliseconds(),newDT;if(this.dataZone){newDT=new timezoneJS.Date(dt.getFullYear(),dt.getMonth(),dt.getDate(),dt.getHours(),dt.getMinutes(),this.dataZone);dt=new Date(newDT.getTime()+milli);}
if(this.displayZone){newDT=new timezoneJS.Date(dt.getTime(),this.displayZone);dt=new Date(newDT.getFullYear(),newDT.getMonth(),newDT.getDate(),newDT.getHours(),newDT.getMinutes());dt=new Date(dt.getTime()+milli);}
quote.displayDate=dt;}
;STXChart.prototype.setDisplayDates=function(masterData){if(!masterData)return ;for(var i=0;p9s.N8i(i,masterData.length);i++){var quote=masterData[i];if(quote.DT)this.setDisplayDate(quote);}
}
;STXChart.prototype.streamTrade=function(priceData,now,symbol,params){var chart=this.chart;if(!params)params={}
;if(params.chart)chart=params.chart;var price=null,bid=null,ask=null,volume=0;if(typeof priceData=="object"){price=priceData.last;bid=priceData.bid;ask=priceData.ask;volume=priceData.volume;now=new Date(now);}
else{price=arguments[0];volume=arguments[1];now=new Date(arguments[2]);symbol=arguments[3];}
var md=chart.masterData;if(!now){now=new Date();}
var quote;if(!md||!md.length||p9s.z8i(this.layout.interval,"tick")){quote={Date:STX.yyyymmddhhmmssmmm(now),DT:now,Open:price,Close:price,High:price,Low:price,Volume:volume,Bid:bid,Ask:ask}
;this.appendMasterData([quote],chart,params);}
else{quote=STX.clone(md[p9s.h8i(md.length,1)]);var market24=new STX.Market({}
),iter_parms={'begin':quote.DT,'interval':this.layout.interval,'periodicity':this.layout.periodicity,'timeUnit':this.layout.timeUnit,'inZone':this.dataZone,'outZone':this.dataZone}
,iter=market24.newIterator(iter_parms),next=iter.next();if(p9s.I8i(now,next)){if(symbol){if(price||p9s.Z8i(price,0)){quote[symbol]=price;}
}
else{if(price||p9s.X8i(price,0)){quote.Close=price;if(p9s.D8i(price,quote.High)||p9s.J8i(quote.High,null))quote.High=price;if(p9s.p8i(price,quote.Low)||p9s.E8i(quote.Low,null))quote.Low=price;if(p9s.Y8i(quote.Open,null))quote.Open=price;}
if(volume)quote.Volume+=volume;if(bid||p9s.V8i(bid,0))quote.Bid=bid;if(ask||p9s.i8i(ask,0))quote.Ask=ask;}
var newParams=STX.clone(params);if(typeof quote.Adj_Close!="undefined"){quote.Adj_Close=quote.Close;}
this.appendMasterData([quote],chart,newParams);}
else{var gaps=[],iter2_parms={'begin':now,'interval':this.layout.interval,'periodicity':this.layout.periodicity,'timeUnit':this.layout.timeUnit,'inZone':this.dataZone,'outZone':this.dataZone}
,iter2=market24.newIterator(iter2_parms);iter2.next();now=iter2.previous();while(p9s.H8i(next,now)&&this.streamParameters.fillGaps){var gap={Date:STX.yyyymmddhhmmssmmm(next),DT:next,Close:quote.Close,Open:quote.Close,High:quote.Close,Low:quote.Close,Volume:0,Bid:quote.Bid,Ask:quote.Ask}
;gaps.push(gap);next=iter.next();}
if(symbol){var c=this.currentQuote();quote={Date:STX.yyyymmddhhmmssmmm(next),DT:next,Close:c.Close,Volume:0,Bid:c.Bid,Ask:c.Ask}
;quote[symbol]=price;}
else{quote={Date:STX.yyyymmddhhmmssmmm(next),DT:next,Open:price,Close:price,High:price,Low:price,Volume:volume,Bid:bid,Ask:ask}
;}
gaps.push(quote);this.appendMasterData(gaps,chart,params);}
}
}
;STXChart.prototype.appendMasterData=function(appendQuotes,chart,params){if(!params)params={}
;if(!chart)chart=this.chart;if(p9s.K8i(appendQuotes.constructor,Object))appendQuotes=[appendQuotes];if(this.runPrepend("appendMasterData",[appendQuotes,chart,params]))return ;if(!appendQuotes||!appendQuotes.length)return ;var dt=appendQuotes[0].DT;if(!dt)dt=STX.strToDateTime(appendQuotes[0].Date);var masterData=chart.masterData,i;if(!masterData||!masterData.length){masterData=chart.masterData=STX.clone(appendQuotes);for(i=0;p9s.C8i(i,masterData.length);i++){if(masterData[i].DT)masterData[i].Date=STX.yyyymmddhhmmssmmm(masterData[i].DT);else masterData[i].DT=STX.strToDateTime(masterData[i].Date);if(masterData[i].Volume&&typeof masterData[i].Volume!=="number")masterData[i].Volume=parseInt(masterData[i].Volume,10);if(!STXChart.isDailyInterval(this.layout.interval))this.setDisplayDate(masterData[i]);}
}
else{i=p9s.S8i(masterData.length,1);while(p9s.s7s(i,0)){var dt2=masterData[i].DT;if(!dt2)dt2=STX.strToDateTime(masterData[i].Date);if(p9s.u7s(dt2.getTime(),dt.getTime())){var plusOne=0;if(p9s.O7s(dt2.getTime(),dt.getTime()))plusOne=1;var advancing=plusOne;for(var j=0;p9s.w7s(j,appendQuotes.length);j++){if(!plusOne){if(typeof masterData[i+j]!="undefined"){if(!appendQuotes[j].Volume&&masterData[i+j].Volume){appendQuotes[j].Volume=masterData[i+j].Volume;}
if(!params.allowReplaceOHL){if(masterData[i+j].Open){appendQuotes[j].Open=masterData[i+j].Open;}
if(p9s.e7s(masterData[i+j].High,appendQuotes[j].High)){appendQuotes[j].High=masterData[i+j].High;}
if(masterData[i+j].Low&&p9s.L7s(masterData[i+j].Low,appendQuotes[j].Low)){appendQuotes[j].Low=masterData[i+j].Low;}
}
}
else{advancing++;}
for(var field in this.chart.series){if(typeof appendQuotes[j][field]=="undefined"&&typeof masterData[i+j]!=(E7E+P6E+y4E+p9s.V8E+J8E+i9E+y4E+P6E))appendQuotes[j][field]=masterData[i+j][field];}
for(var p in this.panels){if(this.panels[p].studyQuotes){for(var sq in this.panels[p].studyQuotes){if(!this.panels[p].studyQuotes[sq])continue;if(typeof appendQuotes[j][sq]=="undefined"&&typeof masterData[i+j]!="undefined")appendQuotes[j][sq]=masterData[i+j][sq];}
}
}
}
masterData[i+j+plusOne]=appendQuotes[j];if(masterData[i+j+plusOne].DT)masterData[i+j+plusOne].Date=STX.yyyymmddhhmmssmmm(masterData[i+j+plusOne].DT);else masterData[i+j+plusOne].DT=STX.strToDateTime(masterData[i+j+plusOne].Date);if(masterData[i+j+plusOne].Volume&&typeof masterData[i+j+plusOne].Volume!=="number")masterData[i+j+plusOne].Volume=parseInt(masterData[i+j+plusOne].Volume,10);if(!STXChart.isDailyInterval(this.layout.interval))this.setDisplayDate(this.masterData[i+j+plusOne]);var dontAdvanceScroll=p9s.A7s(chart.scroll,chart.maxTicks+1)||chart.lockScroll||chart.spanLock;if(dontAdvanceScroll&&advancing){chart.scroll+=advancing;this.grabStartScrollX+=advancing;}
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
;STXChart.prototype.displayAll=function(params,cb){var chart=this.chart;if(params&&params.chart)chart=params.chart;var self=this;function displayTheResults(){if(!chart.masterData.length)return ;var p=STX.clone(params);p.dtLeft=chart.masterData[0].DT;p.dtRight=chart.masterData[p9s.o7s(chart.masterData.length,1)].DT;self.setRange(p);if(cb)cb();}
function loadAllTheData(){self.quoteDriver.loadAll(chart,displayTheResults);}
if(!this.quoteDriver){displayTheResults();return ;}
if(this.dontRoll&&p9s.a7s(this.layout.interval,"month")){this.setPeriodicityV2(1,"month",loadAllTheData);}
else if(!STXChart.isDailyInterval(this.layout.interval)){this.setPeriodicityV2(1,"day",loadAllTheData);}
else{if(chart.moreAvailable){loadAllTheData();}
else{displayTheResults();}
}
}
;STXChart.prototype.setRange=function(params,cb){var Z4E="co",G24="lot",v6E="cat";if(STX.isEmpty(params)){params={dtLeft:arguments[0],dtRight:arguments[1],padding:arguments[2],chart:arguments[3],goIntoFuture:false}
;cb=arguments[4];}
if(params.periodicity){if(p9s.b7s(params.periodicity.interval,'tick'))params.periodicity=null;if(!params.periodicity.period)params.periodicity.period=1;}
if(!params.chart)params.chart=this.chart;if(typeof params.padding=="undefined"){params.padding=this.preferences.whitespace;}
var dontChangePeriodicity=false,chart=params.chart,lt=params.dtLeft,rt=new Date();if(params.dtRight)rt=params.dtRight;if(!lt){var iter=this.standardMarketIterator(rt,null,chart);lt=iter.previous(chart.maxTicks);if(!params.periodicity)dontChangePeriodicity=true;}
var self=this;function showTheRange(){if(!chart.dataSet||p9s.W7s(chart.dataSet.length,0)){if(cb)cb();return ;}
var l=0,r=0;if(p9s.F7s(lt.getTime(),chart.dataSet[0].DT.getTime())||params.goIntoPast){l=self.tickFromDate(lt,chart,null,true);}
else{l=0;}
if(p9s.g7s(rt.getTime(),chart.dataSet[chart.dataSet.length-1].DT.getTime())||params.goIntoFuture){r=self.tickFromDate(rt,chart);}
else{r=p9s.P7s(chart.dataSet.length,1);}
var ticks=p9s.G7s(r,l,1);if(p9s.C7s(ticks,1)){if(cb)cb();return ;}
self.setCandleWidth(p9s.S7s((self.chart.width-params.padding),ticks),chart);chart.scroll=(p9s.s6s(chart.dataSet.length,l,1));self.draw();self.changeOccurred("layout");if(cb)cb();}
var loadMoreCount=0;function loadTheRange(err){var r6E="gic",c24="iodi",L67="eck",G67="C",C77="pin",j3E="op",p4E=") ",L0E="ad",V67="(): ",w24="ge",u94="R",o8E="TXC";if(err){if(cb)cb(err);return ;}
loadMoreCount++;if(p9s.z6s(loadMoreCount,10)){console.log((F94+o8E+I8E+l6E+i47+r5E+j1E+C4E+u94+l6E+i9E+w24+V67+j94+d3E+v4E+m2E+B14+Q07+v4E+N2E+Q9E+L0E+j1E+R7E+c9E+l9E+p4E+p9s.V8E+p9s.F1E+Q9E+m2E+v4E+j1E+D4E+T3E+p9s.F1E+c77+F94+N1E+j3E+C77+p9s.j8E+c77+G67+I8E+L67+v4E+p9s.f9E+D4E+c24+u4E+J8E+N1E+Q07+v4E+N2E+Q9E+r6E+r5E));showTheRange();return ;}
if(chart.moreAvailable&&p9s.h6s(chart.masterData[0].DT,lt)){self.quoteDriver.checkLoadMore(chart,true,false,function(err){if(!err)loadTheRange();}
);}
else{showTheRange();}
}
function estimateMaxTicks(rtMS,ltMS,interval,period,dontRoll){var ticks=0,ms=p9s.I6s(rtMS,ltMS);if(STXChart.isDailyInterval(interval)){if(p9s.Z6s(interval,"month")){ticks=p9s.X6s((ms/STX.MONTH),period);}
else if(p9s.D6s(interval,"week")){ticks=p9s.J6s((ms/STX.WEEK),period);}
else{ticks=p9s.p6s((ms/STX.DAY),period);}
}
else{if(!isNaN(interval))ticks=p9s.E6s((ms/(STX.MINUTE*interval)),period);else{if(p9s.Y6s(interval,"millisecond"))ticks=p9s.V6s(ms,period);else if(p9s.i6s(interval,"second"))ticks=p9s.H6s((ms/STX.SECOND),period);else if(p9s.K6s(interval,"hour"))ticks=p9s.C6s((ms/STX.HOUR),period);else ticks=p9s.S6s((ms/STX.MINUTE),period);}
}
return Math.round(ticks);}
if(this.quoteDriver){var intervalToUse,periodToUse,timeUnitToUse;if(dontChangePeriodicity){intervalToUse=this.layout.interval;timeUnitToUse=this.layout.timeUnit;periodToUse=this.layout.period;}
else if(params.periodicity){intervalToUse=params.periodicity.interval;timeUnitToUse=params.periodicity.timeUnit;periodToUse=params.periodicity.period;}
else{var rangeInMS=p9s.s4s(rt.getTime(),lt.getTime());if(params.rangePeriodicityMap){var periodicityMap=params.rangePeriodicityMap,entryToUse=null;for(var i=0;p9s.u4s(i,periodicityMap.length);i++){var mapEntry=periodicityMap[i];if(p9s.O4s(rangeInMS,mapEntry.range)){entryToUse=mapEntry;break;}
}
intervalToUse=entryToUse.interval;periodToUse=entryToUse.periodicity;timeUnitToUse=entryToUse.timeUnit;}
else{var pixelsPerBar=2;switch(this.layout.chartType){case "line":case "colored_line":case "mountain":case "colored_mountain":case "baseline_delta":case "baseline_delta_mountain":case "wave":pixelsPerBar=2;break;case "candle":case "bar":case "colored_bar":case "hollow_candle":case "volume_candle":case (j1E+v6E+N1E+D4E+p9s.f9E+G24):pixelsPerBar=5;break;}
if(params.pixelsPerBar)pixelsPerBar=params.pixelsPerBar;var numBars=p9s.w4s(chart.width,pixelsPerBar),possibleIntervals=[{interval:5,ms:p9s.e4s(STX.MINUTE,5)}
,{interval:30,ms:p9s.L4s(STX.MINUTE,30)}
,{interval:"day",ms:STX.DAY}
,{interval:"month",ms:STX.MONTH}
,{interval:"year",ms:Number.MAX_VALUE}
],numBarsLastInterval;for(var j=0;p9s.A4s(j,possibleIntervals.length);j++){var numBarsThisInterval=p9s.o4s(rangeInMS,possibleIntervals[j].ms);if(p9s.a4s(numBarsThisInterval,numBars)){if(possibleIntervals[p9s.b4s(j,1)]){intervalToUse=possibleIntervals[p9s.W4s(j,1)].interval;periodToUse=Math.ceil(p9s.F4s(numBarsLastInterval,numBars));}
else{intervalToUse=possibleIntervals[j].interval;periodToUse=1;}
break;}
numBarsLastInterval=numBarsThisInterval;}
}
}
this.chart.scroll=this.chart.maxTicks=estimateMaxTicks(rt.getTime(),lt.getTime(),intervalToUse,periodToUse,this.dontRoll);this.layout.candleWidth=p9s.g4s(this.chart.width,this.chart.maxTicks);var needDifferentData=p9s.P4s(this.layout.timeUnit,timeUnitToUse)&&(p9s.G4s(timeUnitToUse,"seconds")||p9s.c4s(timeUnitToUse,"milliseconds"));if(!needDifferentData&&(p9s.Q4s(STXChart.isDailyInterval(this.layout.interval),STXChart.isDailyInterval(intervalToUse))))needDifferentData=true;else if(!STXChart.isDailyInterval(this.layout.interval)&&p9s.M4s(this.layout.interval,intervalToUse))needDifferentData=true;if(!this.chart.masterData||needDifferentData){this.layout.interval=intervalToUse;this.layout.periodicity=periodToUse;this.layout.timeUnit=timeUnitToUse;if(!this.layout.timeUnit){if(STXChart.isDailyInterval(this.layout.interval))this.layout.timeUnit=null;else if(p9s.y0s(this.layout.interval,(l24+Z4E+O07)))this.layout.timeUnit="second";else this.layout.timeUnit=(m2E+J8E+i9E+p9s.u1E+N1E+y4E);}
var qparams={symbol:chart.symbol,symbolObject:chart.symbolObject,chart:chart}
;if(!this.displayInitialized)qparams.initializeChart=true;this.quoteDriver.newChart(qparams,loadTheRange);}
else{if(p9s.T0s(this.layout.interval,intervalToUse)||p9s.f0s(this.layout.periodicity,periodToUse)){this.layout.interval=intervalToUse;this.layout.periodicity=periodToUse;this.createDataSet();}
loadTheRange();}
}
else{showTheRange();}
}
;STXChart.prototype.setSpan=function(params,cb){var w47=59,a77=((144.,1.107E3)>38.?(11.18E2,23):(0xB1,57.)>=90.60E1?(0x127,0x196):(143.4E1,72)),m5E='today',W3E='ytd',P37="today",Y47="ytd",period=arguments[p9s.T94],interval=arguments[p9s.y94],padding=arguments[p9s.M14],chart=arguments[p9s.S14],useMarketTZ=arguments[p9s.I94];if(typeof params==m6E){period=params.period?params.period:(params.multiplier?params.multiplier:p9s.y94);interval=params.interval?params.interval:(params.base?params.base:(params.span?params.span:params.period));padding=params.padding;chart=params.chart;useMarketTZ=params.useMarketTZ;}
else{params={period:period,interval:interval,padding:padding,chart:chart,useMarketTZ:useMarketTZ}
;cb=arguments[p9s.w94];}
if(!params.padding)params.padding=p9s.T94;if(!chart)chart=this.chart;interval=interval.toLowerCase();if(p9s.k0s(interval,J07)){this.displayAll(params,cb);return ;}
var iterInterval=interval;if(p9s.m0s(interval,u3E)){iterInterval=E94;period*=h67;}
else if(p9s.U0s(interval,Y47)){iterInterval=r84;}
else if(p9s.v0s(interval,P37)){iterInterval=r84;}
var parms_copy=STX.shallowClone(params);parms_copy.goIntoFuture=c47;var iter_parms={'begin':new Date(),'interval':iterInterval,'periodicity':period,'inZone':this.dataZone,'outZone':this.dataZone}
,iter=chart.market.newIterator(iter_parms),leftDT=new Date();if(p9s.n0s(interval,W3E)){leftDT.setMonth(p9s.T94);leftDT.setDate(p9s.y94);leftDT.setHours(p9s.T94);leftDT.setMinutes(p9s.T94);leftDT.setSeconds(p9s.T94);leftDT.setMilliseconds(p9s.T94);}
else if(p9s.q0s(interval,P37)){iter.next();leftDT=iter.previous();}
else{leftDT=iter.previous();}
parms_copy.dtLeft=leftDT;if(p9s.l0s(interval,m5E)){parms_copy.goIntoFuture=C2E;parms_copy.dtRight=new Date(leftDT);var closeHour=iter.market.zclose_hour,closeMinute=iter.market.zclose_minute;parms_copy.dtRight.setHours(closeHour?closeHour:a77);parms_copy.dtRight.setMinutes(closeHour?closeMinute:w47);parms_copy.dtRight.setSeconds(p9s.T94);parms_copy.dtLeft.setHours(iter.market.zopen_hour);parms_copy.dtLeft.setMinutes(iter.market.zopen_minute);parms_copy.dtLeft.setSeconds(p9s.T94);}
if(parms_copy.maintainPeriodicity){parms_copy.periodicity={}
;parms_copy.periodicity.interval=this.layout.interval;parms_copy.periodicity.period=this.layout.periodicity;}
chart.spanLock=c47;var self=this;this.setRange(parms_copy,function(err){var z77="yt";if(!params.maintainPeriodicity){self.layout.setSpan={base:params.base,multiplier:params.multiplier}
;self.changeOccurred(Y94);}
if(p9s.B0s(interval,(z77+P6E))||p9s.R0s(interval,P37)){chart.spanLock=C2E;}
if(cb)cb(err);}
);}
;STXChart.prototype.getSpanCandleWidth=function(span){var arr=span.split(",");if(p9s.t0s(arr.length,2))return ;var num=parseFloat(arr[0]),now=new Date(),prev=new Date();if(p9s.r0s(arr[1],"year")){prev.setFullYear(p9s.d0s(prev.getFullYear(),num));}
else if(p9s.j0s(arr[1],"month")){prev.setMonth(p9s.x0s(prev.getMonth(),num));}
else if(p9s.N3s(arr[1],"day")){prev.setDate(p9s.z3s(prev.getDate(),num));}
else if(p9s.h3s(arr[1],"week")){prev.setDate(p9s.I3s(prev.getDate(),(7*num)));}
var diff=p9s.Z3s((now.getTime()-prev.getTime()),1000,60,60,24);diff=p9s.D3s(diff,5,7);var candleWidth=p9s.n3s(this.chart.width,diff);return candleWidth;}
;STXChart.prototype.setMaxTicks=function(ticks,params){if(!params)params={}
;ticks=Math.round(ticks);if(p9s.q3s(ticks,p9s.M14))ticks=p9s.M14;var padding=params.padding;if(!padding)padding=p9s.T94;this.layout.candleWidth=p9s.l3s((this.chart.width-padding),ticks);if(!this.layout.candleWidth)this.layout.candleWidth=p9s.L94;this.chart.maxTicks=Math.round(p9s.B3s((this.chart.width/this.layout.candleWidth),0.499));if(params.padding||p9s.R3s(params.padding,p9s.T94))this.chart.scroll=ticks+p9s.y94;}
;STXChart.prototype.construct=function(){this.stackPanel(U6E,U6E,p9s.y94);this.adjustPanelPositions();this.chart.panel=this.panels[this.chart.name];this.cx=p9s.T94;this.cy=p9s.T94;this.micropixels=p9s.T94;this.chart.panel.subholder.appendChild(this.controls.home);this.callbackListeners={}
;}
;STXChart.prototype.addEventListener=function(type,cb){if(!type)type=A8E;var arr=this.callbackListeners[type];if(!arr)this.callbackListeners[type]=arr=[];arr.push(cb);return {type:type,cb:cb}
;}
;STXChart.prototype.removeEventListener=function(obj,cb){if(typeof obj!="object"){obj={type:type,cb:cb}
;}
if(!obj.type)obj.type="*";var arr=this.callbackListeners[obj.type];if(!arr)return ;for(var i=0;p9s.t3s(i,arr.length);i++){if(p9s.r3s(arr[i],obj.cb)){arr.splice(i);if(!arr.length)obj[obj.type]=null;return ;}
}
}
;STXChart.prototype.dispatch=function(type,data){if(this.callbacks[type])(this.callbacks[type])(data);var arr=this.callbackListeners[type];if(arr){for(var i=0;p9s.d3s(i,arr.length);i++)(arr[i])(data);}
arr=this.callbackListeners["*"];if(arr){for(var j=0;p9s.j3s(j,arr.length);j++)(arr[j])(data);}
}
;STXChart.prototype.deleteYAxisIfUnused=function(panel,yAxis){if(!yAxis)return ;if(p9s.x3s(yAxis,panel.yAxis))return ;for(var r in this.chart.seriesRenderers){var renderer=this.chart.seriesRenderers[r];if(p9s.N5s(renderer.params.yAxis,yAxis)){if(p9s.z5s(renderer.seriesParams.length,0))return ;}
}
var i;for(i=0;p9s.h5s(i,panel.yaxisLHS.length);i++){if(p9s.I5s(panel.yaxisLHS[i],yAxis))panel.yaxisLHS.splice(i,1);}
for(i=1;p9s.Z5s(i,panel.yaxisRHS.length);i++){if(p9s.X5s(panel.yaxisRHS[i],yAxis))panel.yaxisRHS.splice(i,1);}
this.resizeCanvas();this.adjustPanelPositions();}
;STXChart.prototype.addYAxis=function(panel,yAxis){if(!yAxis)return ;if(!panel.yaxisLHS){panel.yaxisLHS=[];panel.yaxisRHS=[];if(p9s.D5s(panel.yAxis.position,"right"))panel.yaxisRHS.push(panel.yAxis);else panel.yaxisLHS.push(panel.yAxis);}
var arr=panel.yaxisLHS.concat(panel.yaxisRHS);for(var i=0;p9s.J5s(i,arr.length);i++){if(p9s.p5s(arr[i],yAxis))return ;}
if(p9s.E5s(yAxis.position,"left")){panel.yaxisLHS.unshift(yAxis);}
else{yAxis.position="right";panel.yaxisRHS.push(yAxis);}
this.preAdjustScroll();this.resizeCanvas();this.adjustPanelPositions();this.postAdjustScroll();}
;STXChart.prototype.calculateYAxisPositions=function(){var panelsInOrder=[];for(var chartName in this.charts){panelsInOrder.push(chartName);}
for(var panelName in this.panels){var p=this.panels[panelName];if(p9s.Y5s(p.name,p.chart.name))continue;panelsInOrder.push(panelName);}
for(var j=0;p9s.V5s(j,panelsInOrder.length);j++){var panel=this.panels[panelsInOrder[j]];if(!panel)continue;var isAChart=p9s.i5s(panel.name,panel.chart.name);if(!panel.yaxisLHS){panel.yaxisLHS=[];panel.yaxisRHS=[];if(p9s.H5s(panel.name,panel.chart.name)||panel.yAxis.position){if(p9s.K5s(panel.yAxis.position,"left"))panel.yaxisLHS.push(panel.yAxis);else panel.yaxisRHS.push(panel.yAxis);}
else{var position=panel.chart.panel.yAxis.position;if(!position||p9s.C5s(position,"right"))panel.yaxisRHS.push(panel.yAxis);else panel.yaxisLHS.push(panel.yAxis);}
}
if(!panel.yAxis.width)panel.yAxis.width=this.yaxisWidth;panel.yaxisTotalWidthRight=0;var i,yaxis;panel.yaxisTotalWidthLeft=0;for(i=0;p9s.S5s(i,panel.yaxisLHS.length);i++){yaxis=panel.yaxisLHS[i];panel.yaxisTotalWidthLeft+=yaxis.width;yaxis.justifyRight=(p9s.s1s(yaxis.justifyRight,null)?panel.chart.yAxis.justifyRight:yaxis.justifyRight);if(p9s.u1s(yaxis.justifyRight,null))yaxis.justifyRight=true;}
for(i=0;p9s.O1s(i,panel.yaxisRHS.length);i++){yaxis=panel.yaxisRHS[i];panel.yaxisTotalWidthRight+=yaxis.width;}
var x=0;for(i=0;p9s.w1s(i,panel.yaxisLHS.length);i++){yaxis=panel.yaxisLHS[i];yaxis.left=x;x+=yaxis.width;}
x=p9s.e1s(this.width,panel.yaxisTotalWidthRight);for(i=0;p9s.L1s(i,panel.yaxisRHS.length);i++){yaxis=panel.yaxisRHS[i];yaxis.left=x;x+=yaxis.width;}
if(typeof this.yaxisLeft!="undefined")panel.chart.yaxisPaddingRight=this.yaxisLeft;panel.yaxisCalculatedPaddingRight=panel.yaxisTotalWidthRight;if(panel.chart.yaxisPaddingRight||p9s.A1s(panel.chart.yaxisPaddingRight,0))panel.yaxisCalculatedPaddingRight=panel.chart.yaxisPaddingRight;panel.yaxisCalculatedPaddingLeft=panel.yaxisTotalWidthLeft;if(panel.chart.yaxisPaddingLeft||p9s.o1s(panel.chart.yaxisPaddingLeft,0))panel.yaxisCalculatedPaddingLeft=panel.chart.yaxisPaddingLeft;if(isAChart){panel.left=panel.yaxisCalculatedPaddingLeft;panel.right=p9s.a1s(this.width,panel.yaxisCalculatedPaddingRight);}
else{panel.left=panel.chart.panel.left;panel.right=panel.chart.panel.right;}
panel.width=p9s.b1s(panel.right,panel.left);panel.handle.style.left=panel.left+"px";panel.handle.style.width=panel.width+"px";if(isAChart){panel.chart.left=panel.left;panel.chart.right=panel.right;panel.chart.width=p9s.W1s(panel.right,panel.left);}
}
}
;STXChart.prototype.initializeChart=function(container){var h0E="shCan",x6E="rTr",x07="cto",L4E="bloc",P2E="canvas",O5E="va";if(this.runPrepend("initializeChart",arguments))return ;if(!this.chart.symbolObject.symbol)this.chart.symbolObject.symbol=this.chart.symbol;if(this.locale)this.setLocale(this.locale);if(!this.displayZone&&STXChart.defaultDisplayTimeZone){this.setTimeZone(null,STXChart.defaultDisplayTimeZone);}
this.calculateYAxisPositions();this.micropixels=0;if(container)this.chart.container=container;this.chart.container.stx=this;if(!this.chart.container.STXRegistered){this.chart.container.STXRegistered=true;STXChart.registeredContainers.push(this.chart.container);}
if(STX.isSurface){if(!this.gesture){this.gesture=new MSGesture();if(this.manageTouchAndMouse){this.gesture.target=this.chart.container;}
else{this.gesture.target=document.body;}
this.gesturePointerId=null;}
}
this.registerHTMLElements();if(this.chart.canvas&&document.createElement((u4E+l6E+i9E+O5E+j1E)).getContext){if(!this.chart.canvas.id){this.chart.container.removeChild(this.chart.canvas);this.chart.canvas=null;}
if(this.chart.tempCanvas&&!this.chart.tempCanvas.id){this.chart.container.removeChild(this.chart.tempCanvas);this.chart.tempCanvas=null;}
if(this.floatCanvas&&!this.floatCanvas.id){this.chart.container.removeChild(this.floatCanvas);this.floatCanvas=null;}
}
else{if(p9s.F1s(this.layout.candleWidth,this.minimumCandleWidth))this.layout.candleWidth=this.minimumCandleWidth;if(p9s.g1s(this.layout.candleWidth,50))this.layout.candleWidth=8;}
if(!this.chart.canvas)this.chart.canvas=document.createElement((P2E));if(!this.chart.canvas.getContext){this.chart.canvas=this.chart.container.querySelectorAll("#ie8canvas")[0];if(!this.chart.canvas.getContext){if(window.G_vmlCanvasManager)G_vmlCanvasManager.initElement(this.chart.canvas);}
this.chart.canvas.style.display="block";}
else{this.chart.container.appendChild(this.chart.canvas);}
this.chart.canvas.style.position="absolute";this.chart.canvas.style.left="0px";this.chart.context=this.chart.canvas.getContext("2d");this.chart.canvas.context=this.chart.context;this.chart.context.lineWidth=1;if(!this.chart.tempCanvas)this.chart.tempCanvas=document.createElement("canvas");if(!this.chart.tempCanvas.getContext){this.chart.tempCanvas=this.chart.container.querySelectorAll("#ie8canvasTemp")[0];if(!this.chart.tempCanvas.getContext){if(window.G_vmlCanvasManager)G_vmlCanvasManager.initElement(this.chart.tempCanvas);}
this.chart.tempCanvas.style.display=(L4E+d2E);}
else{this.chart.container.appendChild(this.chart.tempCanvas);}
this.chart.tempCanvas.style.position="absolute";this.chart.tempCanvas.style.left="0px";this.chart.tempCanvas.context=this.chart.tempCanvas.getContext("2d");this.chart.tempCanvas.context.lineWidth=1;if(!this.floatCanvas)this.floatCanvas=document.createElement("canvas");if(!this.floatCanvas.getContext){this.floatCanvas=this.chart.container.querySelectorAll("#ie8canvasFloat")[0];if(!this.floatCanvas.getContext){if(window.G_vmlCanvasManager)G_vmlCanvasManager.initElement(this.chart.tempCanvas);}
this.floatCanvas.style.display="block";}
else{this.chart.container.appendChild(this.floatCanvas);}
this.floatCanvas.style.position="absolute";this.floatCanvas.style.left="0px";this.floatCanvas.context=this.floatCanvas.getContext("2d");this.floatCanvas.context.lineWidth=1;this.resizeCanvas();if(STX.isAndroid){this.chart.tempCanvas.ontouchstart=function(e){if(e.preventDefault)e.preventDefault();}
;this.floatCanvas.ontouchstart=function(e){if(e.preventDefault)e.preventDefault();}
;}
this.panels.chart.display=this.chart.symbol;if(this.chart.symbolDisplay)this.panels.chart.display=this.chart.symbolDisplay;this.adjustPanelPositions();this.chart.panel=this.panels[this.chart.name];this.calculateYAxisMargins(this.chart.panel.yAxis);this.initialWhitespace=this.preferences.whitespace;if(this.chart.dataSet&&p9s.P1s(this.chart.dataSet.length,0)){this.chart.scroll=Math.floor(p9s.G1s(this.chart.width,this.layout.candleWidth));var wsInTicks=Math.round(p9s.c1s(this.preferences.whitespace,this.layout.candleWidth));this.chart.scroll-=wsInTicks;}
if(STX.touchDevice){var overlayTrashCan=this.chart.container.querySelectorAll("#overlayTrashCan")[0],vectorTrashCan=this.chart.container.querySelectorAll((p9s.E2E+C37+y4E+x07+x6E+l6E+h0E))[0];if(overlayTrashCan)overlayTrashCan.onmspointerup=overlayTrashCan.ontouchend=(function(self){return function(e){self.deleteHighlighted(true);}
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
;for(var i=0;p9s.Q1s(i,this.eventListeners.length);i++){var listener=this.eventListeners[i];listener.element.removeEventListener(listener.event,listener["function"]);}
}
;STXChart.prototype.handleMouseOut=function(e){var Z7E="Ou",g84="ouse",u84="ndleM",Q8E="handleMouseOut";e=e||window.event;if(!STX.withinElement(this.chart.container,e.pageX,e.pageY)){if(this.runPrepend(Q8E,arguments))return ;this.undisplayCrosshairs();this.grabbingScreen=c47;this.touches=[];this.touching=c47;if(this.activeDrawing&&this.userPointerDown){this.userPointerDown=c47;this.drawingLine=c47;var cy=this.backOutY(e.pageY),cx=this.backOutX(e.pageX);this.drawingClick(this.currentPanel,cx,cy);}
STXChart.insideChart=c47;this.displaySticky();this.runAppend((f8E+u84+g84+Z7E+N1E),arguments);}
}
;STXChart.prototype.registerTouchAndMouseEvents=function(){var l94="DOMMouseScroll",R8E="mousewheel",X9E="onwheel",X2E="wheel",L8E="onMouseOut",G5E="onMouseOver",L2E="pointerup",D8E="pointermove",n7E="St",Y84="estu",J4E="MSG",a1E="pointerdown",O84="MSPointerUp",g2E="MSPointerMove",P7E="MSGestureEnd",s77="MSGestureChange",k37="MSGestureStart",e24="Down",w3E="oi",p5E="#zoomOut",c2E="#zoomIn",g7E="#home";if(this.touchAndMouseEventsRegistered)return ;this.touchAndMouseEventsRegistered=C2E;var el=this.chart.container,homeEl=$$$(g7E,this.controls.chartControls),zoomInEl=$$$(c2E,this.controls.chartControls),zoomOutEl=$$$(p5E,this.controls.chartControls);if(!STX.touchDevice){el.addEventListener(Z0E,(function(self){return function(e){self.mousemove(e);}
;}
)(this),c47);el.addEventListener(a4E,(function(self){return function(e){self.mousedown(e);}
;}
)(this),c47);el.addEventListener(E47,(function(self){return function(e){self.mouseup(e);}
;}
)(this),c47);}
else{if(STX.isSurface){el.addEventListener(Z0E,(function(self){return function(e){self.msMouseMoveProxy(e);}
;}
)(this),c47);el.addEventListener((m2E+Q9E+p9s.u1E+l24+P6E+Q9E+l37+i9E),(function(self){var o07=(0x216>(62.,3)?(74.0E1,7248952):(53,1.05E3)<(0x16C,20.1E1)?"":(46.,1.890E2)),B3E="correl",q3E=9737400,Z77=516545266,K4E=903049620;var I14=-K4E,k14=-Z77,w14=p9s.M14;for(var f14=p9s.y94;p9s.p54.q54(f14.toString(),f14.toString().length,q3E)!==I14;f14++){cb(response);STX.Studies.addStudy(stx,B3E,inputs,outputs,p9s.r2E,panelName);context.lineTo(xstart,cache.open);context.moveTo(Math.floor(xbase),cache.open);seriesPlotter.newSeries(a94,G7E,parameters.fillStyle,parameters.fillOpacity);w14+=p9s.M14;}
if(p9s.p54.q54(w14.toString(),w14.toString().length,o07)!==k14){(weight?results:exacts).push(STX.extend(container.records[entry.index],{weight:weight}
));self.deleteHighlighted(C2E);this.transformDataSetPost(this,chart.dataSet,min,max);return Y9g==B9g;}
return function(e){self.msMouseDownProxy(e);}
;}
)(this),c47);el.addEventListener(E47,(function(self){return function(e){self.msMouseUpProxy(e);}
;}
)(this),c47);if(window.navigator.msPointerEnabled){el.addEventListener((f24+F94+h84+w3E+M2E+y4E+p9s.F1E+e24),(function(self){return function(e){return self.startProxy(e);}
;}
)(this),c47);el.addEventListener(k37,(function(self){return function(e){self.gestureInEffect=C2E;}
;}
)(this),c47);el.addEventListener(s77,(function(self){return function(e){return self.touchmove(e);}
;}
)(this),c47);el.addEventListener(P7E,(function(self){return function(e){self.gestureInEffect=c47;return self.touchend(e);}
;}
)(this),c47);el.addEventListener(g2E,(function(self){return function(e){self.moveProxy(e);}
;}
)(this),c47);el.addEventListener(O84,(function(self){return function(e){return self.endProxy(e);}
;}
)(this),c47);}
else{el.addEventListener(a1E,(function(self){return function(e){return self.startProxy(e);}
;}
)(this),c47);el.addEventListener((J4E+Y84+Q2E+n7E+w2E),(function(self){return function(e){self.gestureInEffect=C2E;}
;}
)(this),c47);el.addEventListener(s77,(function(self){return function(e){return self.touchmove(e);}
;}
)(this),c47);el.addEventListener(P7E,(function(self){return function(e){self.gestureInEffect=c47;return self.touchend(e);}
;}
)(this),c47);el.addEventListener(D8E,(function(self){return function(e){self.moveProxy(e);}
;}
)(this),c47);el.addEventListener(L2E,(function(self){return function(e){return self.endProxy(e);}
;}
)(this),c47);}
}
else{if(!STX.isAndroid&&!STX.ipad&&!STX.iphone){el.addEventListener(Z0E,(function(self){return function(e){self.iosMouseMoveProxy(e);}
;}
)(this),c47);el.addEventListener(a4E,(function(self){return function(e){self.iosMouseDownProxy(e);}
;}
)(this),c47);el.addEventListener(E47,(function(self){return function(e){self.iosMouseUpProxy(e);}
;}
)(this),c47);}
el.addEventListener(L1E,(function(self){return function(e){self.touchstart(e);}
;}
)(this),c47);el.addEventListener(M84,(function(self){return function(e){self.touchmove(e);}
;}
)(this),c47);el.addEventListener(p0E,(function(self){return function(e){self.touchend(e);}
;}
)(this),c47);if(zoomInEl){zoomInEl.removeAttribute(G5E);zoomInEl.removeAttribute(L8E);}
if(zoomOutEl){zoomOutEl.removeAttribute(G5E);zoomOutEl.removeAttribute(L8E);}
}
}
var wheelEvent=(p9s.M1s(X2E,document.createElement(F24))||p9s.y9s(X9E,document))?X2E:p9s.T9s(document.onmousewheel,undefined)?R8E:l94;el.addEventListener(wheelEvent,(function(self,wheelEvent){return function(e){self.mouseWheel(e,wheelEvent);}
;}
)(this,wheelEvent),c47);}
;STXChart.prototype.rightClickHighlighted=function(){var R67="hlig",E9E="kH",Y3E="Clic",N94="ght",J2E="rightClickHighlighted";if(this.runPrepend(J2E,arguments))return ;this.deleteHighlighted(C2E);this.runAppend((p9s.F1E+J8E+N94+Y3E+E9E+J8E+p9s.j8E+R67+I8E+N1E+y4E+P6E),arguments);}
;STXChart.prototype.deleteHighlighted=function(callRightClick){if(this.runPrepend("deleteHighlighted",arguments))return ;this.cancelTouchSingleClick=true;STX.clearCanvas(this.chart.tempCanvas,this);for(var i=p9s.f9s(this.drawingObjects.length,1);p9s.k9s(i,0);i--){var drawing=this.drawingObjects[i];if(drawing.highlighted&&!drawing.permanent){var dontDeleteMe=drawing.abort();if(!dontDeleteMe){var before=STX.shallowClone(this.drawingObjects);this.drawingObjects.splice(i,1);this.undoStamp(before,STX.shallowClone(this.drawingObjects));}
this.changeOccurred("vector");}
}
for(var name in this.overlays){var o=this.overlays[name];if(o.highlight&&!o.permanent){if(callRightClick)this.rightClickOverlay(name);else this.removeOverlay(name);}
}
var chart=this.currentPanel.chart;for(var r in chart.seriesRenderers){var renderer=chart.seriesRenderers[r];for(var sp=p9s.m9s(renderer.seriesParams.length,1);p9s.U9s(sp,0);sp--){var series=renderer.seriesParams[sp];if(series.highlight&&!series.permanent){renderer.removeSeries(series.field);}
}
}
var comparing=false;for(var s in chart.series){if(chart.series[s].parameters.isComparison)comparing=true;}
if(!comparing)this.setComparison(false,chart);this.draw();if(this.controls.mSticky){this.controls.mSticky.style.display="none";this.controls.mSticky.children[0].innerHTML="";}
this.runAppend("deleteHighlighted",arguments);}
;STXChart.prototype.panelExists=function(name){for(var p in this.panels){var panel=this.panels[p];if(p9s.v9s(panel.name,name))return C2E;}
return c47;}
;STXChart.prototype.hideCrosshairs=function(){this.displayCrosshairs=c47;}
;STXChart.prototype.showCrosshairs=function(){this.displayCrosshairs=C2E;}
;STXChart.prototype.grabHandle=function(panel){var m3E="bH",G37="grabHandle";if(this.runPrepend(G37,arguments))return ;if(!panel)return ;STXChart.crosshairY=panel.top+this.top;STXChart.resizingPanel=panel;this.drawTemporaryPanel();STX.appendClassName(panel.handle,B1E);this.runAppend((E67+l6E+m3E+l6E+i9E+P6E+N2E+y4E),arguments);}
;STXChart.prototype.releaseHandle=function(){var A5E="releaseHandle";if(this.runPrepend(A5E,arguments))return ;STX.clearCanvas(this.chart.tempCanvas,this);this.resizePanels();if(STXChart.resizingPanel)STX.unappendClassName(STXChart.resizingPanel.handle,B1E);STXChart.resizingPanel=p9s.r2E;this.runAppend(A5E,arguments);}
;STXChart.prototype.storePanels=function(){if(!this.layout)this.layout={}
;var view=this.layout;view.panels={}
;for(var p in this.panels){var panel=this.panels[p];view.panels[panel.name]={"percent":panel.percent,"display":panel.display}
;}
}
;STXChart.prototype.savePanels=function(saveLayout){this.storePanels();if(p9s.n9s(saveLayout,c47))this.changeOccurred(Y94);}
;STXChart.prototype.resolveY=function(y){return this.top+y;}
;STXChart.prototype.resolveX=function(x){return this.left+x;}
;STXChart.prototype.backOutY=function(y){return p9s.b9s(y,this.top);}
;STXChart.prototype.backOutX=function(x){return p9s.W9s(x,this.left);}
;STXChart.prototype.cleanupRemovedStudy=function(sd){var Q47=((84.,0x18D)<=18?8:(116,112)>=0x206?0x7A:(0x14F,9.28E2)>(60,0x1E1)?(120.5E1,"}"):(0x222,5.63E2)),b07="{";if(sd.libraryEntry){if(sd.libraryEntry.removeFN)sd.libraryEntry.removeFN(this,sd);if(sd.libraryEntry.feed&&sd.libraryEntry.quoteFeed){this.detachTagAlongQuoteFeed(sd.libraryEntry.feed);}
}
for(var p in this.plugins){if(p.indexOf(b07+sd.id+Q47)>-p9s.y94)delete  this.plugins[p];}
if(this.layout.studies)delete  this.layout.studies[sd.name];}
;STXChart.prototype.privateDeletePanel=function(panel){if(this.layout.studies){var mySD=this.layout.studies[panel.name];if(mySD)this.cleanupRemovedStudy(mySD);}
delete  this.panels[panel.name];for(var spm in STX.Studies.studyPanelMap){if(p9s.F9s(STX.Studies.studyPanelMap[spm].panel,panel.name))delete  STX.Studies.studyPanelMap[spm];}
for(var series in this.overlays){if(p9s.g9s(this.overlays[series].panel,panel.name)){delete  this.layout.studies[series];delete  this.overlays[series];}
}
if(panel.holder){this.chart.container.removeChild(panel.holder);var arr=this.getMarkerArray("panelName",panel.name);for(var i=0;p9s.P9s(i,arr.length);i++){this.removeFromHolder(arr[i]);}
}
panel.handle.parentNode.removeChild(panel.handle);}
;STXChart.prototype.panelClose=function(panel){var H8E="panelClose",g8E="Clo",d94="anel";if(!panel)return ;if(this.runPrepend((p9s.f9E+d94+g8E+j1E+y4E),arguments))return ;this.cancelTouchSingleClick=C2E;STXChart.drawingLine=c47;if(panel.soloing)this.panelSolo(panel);if(this.charts[panel.name]){for(var panelName in this.panels){var subPanel=this.panels[panelName];if(p9s.G9s(subPanel.chart.name,panel.name)){this.privateDeletePanel(subPanel);}
}
delete  this.charts[panel.name];}
else{this.privateDeletePanel(panel);}
this.showCrosshairs();this.createDataSet();this.adjustPanelPositions();this.draw();this.savePanels();this.runAppend(H8E,arguments);}
;STXChart.prototype.deleteAllPanels=function(){for(var p in this.panels){var panel=this.panels[p];this.privateDeletePanel(panel);}
this.layout.panels={}
;this.panels={}
;}
;STXChart.prototype.panelUp=function(panel){this.cancelTouchSingleClick=C2E;STXChart.drawingLine=c47;this.showCrosshairs();var newPanels={}
,pos=p9s.T94,p;for(p in this.panels){if(p9s.c9s(p,panel.name))break;pos++;}
if(!pos)return ;var i=p9s.T94;for(p in this.panels){if(p9s.Q9s(i,pos-p9s.y94))newPanels[panel.name]=panel;if(p9s.M9s(p,panel.name))continue;newPanels[p]=this.panels[p];i++;}
this.panels=newPanels;this.adjustPanelPositions();this.draw();this.savePanels();}
;STXChart.prototype.panelDown=function(panel){this.cancelTouchSingleClick=true;STXChart.drawingLine=false;this.showCrosshairs();var newPanels={}
,pos=0,p;for(p in this.panels){if(p9s.y2s(p,panel.name))break;pos++;}
var length=0;for(p in this.panels)length++;if(p9s.T2s(pos,length-1))return ;var i=0;for(p in this.panels){if(p9s.f2s(p,panel.name)){i++;continue;}
newPanels[p]=this.panels[p];if(p9s.k2s(i,pos+1))newPanels[panel.name]=panel;i++;}
this.panels=newPanels;this.adjustPanelPositions();this.draw();this.savePanels();}
;STXChart.prototype.panelSolo=function(panel){this.cancelTouchSingleClick=C2E;STXChart.drawingLine=c47;this.showCrosshairs();var hideOrNot=C2E;if(panel.soloing){hideOrNot=c47;panel.soloing=c47;STX.unappendClassName(panel.solo,B9E);panel.percent=panel.oldPercent;this.panels.chart.percent=this.panels.chart.oldPercent;}
else{panel.soloing=C2E;STX.appendClassName(panel.solo,B9E);if(p9s.m2s(panel.name,(u4E+f8E+i47))){panel.oldPercent=panel.percent;}
else{panel.oldPercent=panel.percent;this.panels.chart.oldPercent=this.panels.chart.percent;panel.percent=p9s.U2s(p9s.y94,this.panels.chart.percent);}
}
for(var p in this.panels){this.panels[p].hidden=hideOrNot;}
this.panels.chart.hidden=c47;panel.hidden=c47;this.adjustPanelPositions();this.draw();this.savePanels();}
;STXChart.prototype.calculatePanelPercent=function(panel){var h=p9s.v2s(panel.bottom,panel.top);panel.percent=p9s.n2s(h,this.chart.canvasHeight);}
;STXChart.prototype.resizePanels=function(){if(!STXChart.resizingPanel)return ;var up=C2E,p,newY,priorPanel;if(p9s.q2s(STXChart.crosshairY,this.resolveY(STXChart.resizingPanel.top)))up=c47;if(up){priorPanel=p9s.r2E;for(p in this.panels){if(p9s.l2s(this.panels[p],STXChart.resizingPanel))break;if(this.panels[p].hidden)continue;priorPanel=this.panels[p];}
newY=this.backOutY(STXChart.crosshairY);if(p9s.B2s(newY,priorPanel.top+g77)){newY=priorPanel.top+g77;STXChart.crosshairY=this.resolveY(newY);}
priorPanel.bottom=newY;STXChart.resizingPanel.top=newY;this.calculatePanelPercent(priorPanel);this.calculatePanelPercent(STXChart.resizingPanel);}
else{priorPanel=p9s.r2E;for(p in this.panels){if(p9s.R2s(this.panels[p],STXChart.resizingPanel))break;if(this.panels[p].hidden)continue;priorPanel=this.panels[p];}
newY=this.backOutY(STXChart.crosshairY);if(p9s.t2s(newY,STXChart.resizingPanel.bottom-g77)){newY=p9s.r2s(STXChart.resizingPanel.bottom,g77);STXChart.crosshairY=this.resolveY(newY);}
priorPanel.bottom=newY;STXChart.resizingPanel.top=newY;this.calculatePanelPercent(priorPanel);this.calculatePanelPercent(STXChart.resizingPanel);}
this.adjustPanelPositions();this.draw();this.savePanels();}
;STXChart.prototype.adjustPanelPositions=function(){var R3E="one";if(!this.chart.symbol)return ;if(this.runPrepend("adjustPanelPositions",arguments))return ;var lastBottom=0,h=this.chart.canvasHeight,pixels=0,first=false,acc=0,n=0,activeSolo=false,x,panel;for(x in this.panels){panel=this.panels[x];if(isNaN(panel.percent)||p9s.d2s(panel.percent,0))panel.percent=0.05;if(panel.hidden)continue;acc+=panel.percent;n++;if(panel.soloing)activeSolo=true;}
for(x in this.panels){var zoomRatio=0;panel=this.panels[x];if(panel.hidden){if(panel.markerHolder){panel.markerHolder.style.display=(i8E+H47);}
continue;}
if(!first){first=true;panel.up.style.display="none";}
else{if(this.displayIconsUpDown)panel.up.style.display="";}
if(activeSolo){if(panel.soloing){if(this.displayIconsSolo)panel.solo.style.display="";}
else{panel.solo.style.display="none";}
}
else if(p9s.j2s(n,1)||p9s.x2s(n,2)){panel.solo.style.display="none";}
else{if(this.displayIconsSolo)panel.solo.style.display="";}
if(p9s.N8s(n,1)){panel.down.style.display="none";}
else{if(this.displayIconsUpDown)panel.down.style.display="";}
if(panel.editFunction)panel.edit.style.display="";else panel.edit.style.display="none";panel.percent=p9s.z8s(panel.percent,acc);panel.top=lastBottom;panel.bottom=panel.top+(p9s.h8s(h,panel.percent));panel.height=p9s.I8s(panel.bottom,panel.top);if(p9s.Z8s(panel.chart.name,panel.name)){panel.chart.top=panel.top;panel.chart.bottom=panel.bottom;panel.chart.height=panel.height;}
var yAxis=panel.yAxis;if(yAxis.zoom&&p9s.X8s(yAxis.height,0)){zoomRatio=p9s.D8s(yAxis.zoom,yAxis.height);}
yAxis.top=panel.top+yAxis.topOffset;yAxis.bottom=p9s.J8s(panel.bottom,yAxis.bottomOffset);yAxis.height=p9s.p8s(yAxis.bottom,yAxis.top);if(zoomRatio){yAxis.zoom=p9s.E8s(zoomRatio,yAxis.height);if(p9s.Y8s(yAxis.zoom,yAxis.height))yAxis.zoom=0;}
lastBottom=panel.bottom;if(!yAxis.high&&p9s.V8s(yAxis.high,0)){yAxis.high=100;yAxis.low=0;yAxis.shadow=100;}
yAxis.multiplier=p9s.i8s(yAxis.height,yAxis.shadow);if(panel.holder){panel.holder.style.right="0px";panel.holder.style.top=panel.top+"px";panel.holder.style.left="0px";panel.holder.style.height=panel.height+"px";panel.subholder.style.left=panel.left+"px";panel.subholder.style.width=panel.width+"px";panel.subholder.style.top="0px";if(p9s.H8s(yAxis.height,0))panel.subholder.style.height=yAxis.height+(i67);}
}
if(x)this.panels[x].down.style.display=(i9E+R3E);if(p9s.K8s(n,2)&&!activeSolo){this.panels.chart.solo.style.display="";}
if(this.controls.chartControls&&this.panels.chart)this.controls.chartControls.style.bottom=(p9s.C8s(this.chart.canvasHeight,this.panels.chart.bottom,22))+"px";this.clearPixelCache();this.adjustDrawings();this.runAppend("adjustPanelPositions",arguments);}
;STXChart.prototype.makeMarkerHelper=function(){this.markerHelper={chartMap:{}
,classMap:{}
}
;}
;STXChart.prototype.addToHolder=function(marker){var e4E="ame",t1E="sN",R24="emb",x4E="ave",H67="bj",O1E="rk",panel=this.panels[marker.params.panelName];if(!panel)return ;if(STX.derivedFrom(marker.params.node,STX.Marker.NodeCreator)){marker.stxNodeCreator=marker.params.node;marker.node=marker.stxNodeCreator.node;}
else{marker.node=marker.params.node;}
if(!this.markerHelper)this.makeMarkerHelper();if(marker.params.chartContainer){this.container.appendChild(marker.node);}
else if(marker.params.includeAxis){panel.holder.appendChild(marker.node);}
else{panel.subholder.appendChild(marker.node);}
var label=marker.params.label;if(!this.markers[label])this.markers[label]=[];this.markers[label].push(marker);marker.chart=panel.chart;if(!this.markerHelper.chartMap[marker.chart.name]){this.markerHelper.chartMap[marker.chart.name]={dataSetLength:p9s.T94,markers:[]}
;}
this.markerHelper.chartMap[marker.chart.name].markers.push(marker);if(!marker.className){console.log((f24+l6E+O1E+y4E+p9s.F1E+v4E+Q9E+H67+y4E+u4E+N1E+j1E+v4E+m2E+p9s.u1E+i6E+v4E+I8E+x4E+v4E+l6E+v4E+m2E+R24+D4E+v4E+u4E+N2E+l6E+j1E+t1E+e4E));}
var classMap=this.markerHelper.classMap[marker.className];if(!classMap)classMap=this.markerHelper.classMap[marker.className]={}
;if(!classMap[marker.params.panelName])classMap[marker.params.panelName]=[];classMap[marker.params.panelName].push(marker);this.setMarkerTick(marker);}
;STXChart.prototype.getMarkerArray=function(type,comparison){var arr=[];for(var label in this.markers){for(var i=0;p9s.x8s(i,this.markers[label].length);i++){var marker=this.markers[label][i];if(p9s.N75(type,"panelName")){if(p9s.z75(marker.panelName,comparison))arr.push(marker);}
else if(p9s.h75(type,"label")){if(p9s.I75(label,comparison))arr.push(marker);}
else if(p9s.Z75(type,"all")){arr.push(marker);}
}
}
return arr;}
;STXChart.prototype.removeFromHolder=function(marker){var panel=this.panels[marker.params.panelName];if(!panel)return ;if(p9s.X75(marker.node.parentNode,panel.holder))panel.holder.removeChild(marker.node);else if(p9s.D75(marker.node.parentNode,panel.subholder))panel.subholder.removeChild(marker.node);else if(p9s.J75(marker.node.parentNode,this.container))this.container.removeChild(marker.node);var labels=this.markers[marker.params.label];if(!labels)return ;var i;for(i=0;p9s.p75(i,labels.length);i++){if(p9s.E75(labels[i],marker)){labels.splice(i,1);break;}
}
var chartMap=this.markerHelper.chartMap[marker.chart.name];if(chartMap){for(i=0;p9s.Y75(i,chartMap.markers.length);i++){if(p9s.V75(chartMap.markers[i],marker)){chartMap.markers.splice(i,1);break;}
}
}
var classMap=this.markerHelper.classMap[marker.className];if(classMap){var panelArray=classMap[marker.params.panelName];if(panelArray){for(i=0;p9s.i75(i,panelArray.length);i++){if(p9s.H75(panelArray[i],marker)){panelArray.splice(i,1);break;}
}
}
}
}
;STXChart.prototype.establishMarkerTicks=function(){if(!this.markerHelper)this.makeMarkerHelper();var chartMap=this.markerHelper.chartMap;for(var chart in chartMap){var chartEntry=chartMap[chart];if(p9s.K75(chartEntry.dataSetLength,this.charts[chart].dataSet.length))continue;for(var i=0;p9s.C75(i,chartEntry.markers.length);i++){this.setMarkerTick(chartEntry.markers[i]);}
}
}
;STXChart.prototype.futureTickIfDisplayed=function(marker){var chart=marker.chart;if(p9s.S75(chart.dataSet.length,1))return ;var xaxisDT=chart.xaxis[p9s.s65(chart.xaxis.length,1)].DT;xaxisDT=new Date(p9s.u65(xaxisDT.getTime(),this.timeZoneOffset*60000));if(p9s.O65(marker.params.x,xaxisDT))return ;var futureTicksOnScreen=p9s.w65(chart.maxTicks,chart.dataSegment.length),ticksToSearch=chart.dataSet.length+futureTicksOnScreen,pms,qms,dt=new Date(chart.dataSet[p9s.e65(chart.dataSet.length,1)].DT),iter=this.standardMarketIterator(dt,null,chart),dms=marker.params.x.getTime();for(var j=chart.dataSet.length;p9s.L65(j,ticksToSearch);j++){pms=dt.getTime();dt=iter.next();qms=dt.getTime();if(p9s.A65(qms,dms)){marker.tick=j;return ;}
else if(p9s.o65(qms,dms)&&p9s.a65(pms,dms)){marker.tick=Math.max(p9s.b65(j,1),0);return ;}
}
}
;STXChart.prototype.setMarkerTick=function(marker){var chart=marker.chart;if(p9s.W65(marker.params.xPositioner,"master")&&marker.params.x){marker.tick=Math.floor(p9s.F65(marker.params.x,this.layout.periodicity));return ;}
else if(p9s.g65(marker.params.xPositioner,"date")&&marker.params.x){var pms,qms,dms=marker.params.x.getTime();for(var i=0;p9s.P65(i,chart.dataSet.length);i++){var quotes=chart.dataSet[i];qms=quotes.DT.getTime();pms=qms;if(p9s.G65(i,0))pms=chart.dataSet[p9s.c65(i,1)].DT.getTime();if(p9s.Q65(qms,dms)){marker.tick=i;return ;}
else if(p9s.M65(qms,dms)&&p9s.y45(pms,dms)){marker.tick=Math.max(p9s.T45(i,1),0);return ;}
else if(p9s.f45(dms,qms)){marker.tick=null;return ;}
}
if(p9s.k45(chart.dataSet.length,1))return ;var dt=new Date(chart.dataSet[p9s.m45(i,1)].DT);if(p9s.U45(dt.getTime(),dms))marker.params.future=true;marker.tick=null;}
}
;STXChart.prototype.positionMarkers=function(){var self=this;if(!self.markerHelper)return ;function draw(){if(self.runPrepend("positionMarkers",arguments))return ;self.markerTimeout=null;for(var className in self.markerHelper.classMap){for(var panelName in self.markerHelper.classMap[className]){var arr=self.markerHelper.classMap[className][panelName],panel=self.panels[panelName];if(arr.length){var params={stx:self,arr:arr,panel:panel}
;params.firstTick=p9s.v45(panel.chart.dataSet.length,panel.chart.scroll);params.lastTick=params.firstTick+panel.chart.dataSegment.length;var fn=arr[0].constructor.placementFunction;if(fn){(fn)(params);}
else{self.defaultMarkerPlacement(params);}
}
}
}
self.runAppend("positionMarkers",arguments);}
if(this.markerDelay||p9s.n45(this.markerDelay,0)){if(!this.markerTimeout)this.markerTimeout=setTimeout(draw,this.markerDelay);}
else{draw();}
}
;STXChart.prototype.addChart=function(name,chart){chart.name=name;this.charts[name]=chart;}
;STXChart.prototype.createPanel=function(display,name,height,chartName){var i2E="tePa",S9E="ea",W7E="cr";if(this.runPrepend("createPanel",arguments))return ;if(!chartName)chartName="chart";var h=this.chart.canvasHeight;if(!height){height=p9s.q45(h,0.20);}
var percent=p9s.l45(height,h),reduce=p9s.B45(1,percent);for(var p in this.panels){var panel=this.panels[p];panel.percent*=reduce;}
this.stackPanel(display,name,percent,chartName);this.adjustPanelPositions();this.savePanels(false);this.runAppend((W7E+S9E+i2E+i9E+y4E+N2E),arguments);}
;STXChart.prototype.configurePanelControls=function(panel){var P67="stx-chart-panel",s3E="chart-title",E4E=".stx-ico-edit",N07=".stx-ico-down",a07=".stx-ico-focus",A24=".stx-ico-up",v84=".stx-panel-title",R94=".stx-ico-close",isChart=(p9s.R45(panel.name,panel.chart.name));panel.icons=$$$((r5E+j1E+z47+r1E+p9s.f9E+l6E+H47+N2E+r1E+u4E+Q9E+i9E+e77+Q9E+N2E),panel.holder);panel.close=panel.icons.children[p9s.I94];panel.close=$$$(R94,panel.icons).parentNode;STX.appendClassName(panel.icons,(s2E+r1E+j1E+v0E+l37));panel.title=$$$(v84,panel.icons);panel.up=$$$(A24,panel.icons).parentNode;panel.solo=$$$(a07,panel.icons).parentNode;panel.down=$$$(N07,panel.icons).parentNode;panel.edit=$$$(E4E,panel.icons).parentNode;if(!this.displayIconsUpDown)panel.up.style.display=n07;if(!this.displayIconsUpDown)panel.down.style.display=n07;if(!this.displayIconsSolo)panel.solo.style.display=n07;if(!this.displayIconsClose){panel.close.style.display=n07;}
if(!this.displayPanelResize)panel.handle.style.display=n07;panel.title.innerHTML=d5E;panel.title.appendChild(document.createTextNode(panel.display));if(isChart){STX.appendClassName(panel.title,s3E);STX.appendClassName(panel.icons,P67);}
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
)(this);STX.safeClickTouch(panel.close,(function(stx,panel){return function(){var n3E="wC",R4E=1737058,U3E=9650766,q37=1192692190,r7E=205181112;var m14=-r7E,L14=q37,Z14=p9s.M14;for(var e14=p9s.y94;p9s.p54.q54(e14.toString(),e14.toString().length,U3E)!==m14;e14++){this.canvasColor(X24);yAxis.yAxisPlotter.lineTo(c37,borderEdge+tickWidth,y2);pow--;panel.holder.removeChild(marker.node);Z14+=p9s.M14;}
if(p9s.p54.q54(Z14.toString(),Z14.toString().length,R4E)!==L14){self.behavior.prefetchAction((i9E+y4E+n3E+I8E+l6E+i47));parms_copy.dtLeft.setSeconds(p9s.T94);points.push(firstX,y0,x,y);this.setCandleWidth(newCandleWidth,this.chart);stx.panelSolo(panel);}
stx.panelClose(panel);}
;}
)(this,panel));STX.safeClickTouch(panel.up,(function(stx,panel){return function(){stx.panelUp(panel);}
;}
)(this,panel));STX.safeClickTouch(panel.down,(function(stx,panel){return function(){stx.panelDown(panel);}
;}
)(this,panel));STX.safeClickTouch(panel.solo,(function(stx,panel){return function(){stx.panelSolo(panel);}
;}
)(this,panel));if(p9s.t45(panel.name,U6E))panel.close.style.display=n07;}
;STXChart.prototype.stackPanel=function(display,name,percent,chartName){var d7E="stx-panel-study",O3E="stx-panel-chart",K14="stx-subholder",C1E="stackPanel";if(this.runPrepend(C1E,arguments))return ;if(!chartName)chartName=U6E;var chart=this.charts[chartName],isChart=(p9s.r45(name,chartName)),yAxis=p9s.r2E;if(isChart){display=chart.symbol;if(chart.symbolDisplay)display=chart.symbolDisplay;yAxis=chart.yAxis;}
var panel=this.panels[name]=new STXChart.Panel(name,yAxis);panel.percent=percent;panel.chart=chart;panel.display=display;panel.holder=STX.newChild(this.container,F24,(j1E+N1E+p9s.X37+r1E+I8E+Y5E+I07+p9s.F1E));panel.subholder=STX.newChild(panel.holder,(P6E+J8E+C37),K14);panel.subholder.style.zIndex=p9s.y94;var appendClass=isChart?O3E:d7E;STX.appendClassName(panel.holder,appendClass);panel.subholder.appendChild(this.controls.iconsTemplate.cloneNode(C2E));panel.handle=this.controls.handleTemplate.cloneNode(C2E);this.container.appendChild(panel.handle);panel.handle.id=p9s.r2E;panel.handle.panel=panel;this.configurePanelControls(panel);this.resizeCanvas();this.runAppend(C1E,arguments);}
;STXChart.prototype.setPanelEdit=function(panel,editFunction){panel.editFunction=editFunction;STX.safeClickTouch(panel.edit,editFunction);this.adjustPanelPositions();}
;STXChart.prototype.drawPanels=function(){var y47="stx_panel_border",q47="how",q77="stx-show",H84="drawPanels";if(this.runPrepend(H84,arguments))return ;var first=c47;for(var p in this.panels){var panel=this.panels[p];panel.axisDrawn=c47;if(p9s.d45(panel.title.innerHTML,panel.display)){panel.title.innerHTML=d5E;panel.title.appendChild(document.createTextNode(panel.display));}
STX.appendClassName(panel.icons,q77);if(panel.hidden){STX.unappendClassName(panel.icons,(s2E+r1E+j1E+q47));panel.handle.style.display=n07;panel.holder.style.display=n07;continue;}
else{if(!this.displayIconsUpDown)panel.up.style.display=n07;if(!this.displayIconsUpDown)panel.down.style.display=n07;if(!this.displayIconsSolo)panel.solo.style.display=n07;panel.holder.style.display=x84;}
if(!first){panel.handle.style.display=n07;first=C2E;continue;}
var y=panel.top;y=Math.round(y)+l0E;this.plotLine(panel.left,panel.right,y,y,this.canvasStyle(y47),k24,this.chart.context,c47,{}
);if(!this.displayPanelResize){panel.handle.style.display=n07;}
else{panel.handle.style.display=d5E;}
panel.handle.style.top=(p9s.j45(y,panel.handle.offsetHeight/p9s.M14))+i67;}
this.runAppend(H84,arguments);}
;STXChart.prototype.touchSingleClick=function(finger,x,y){var self=this,args=arguments;return function(){(function(){var W47="eCl",L5E="uchSingl";if(!this.cancelTouchSingleClick){if(this.runPrepend("touchSingleClick",args))return ;if(this.editingAnnotation)return ;this.clicks={s1MS:-1,e1MS:-1,s2MS:-1,e2MS:-1}
;if(!this.displayCrosshairs)return ;if(!this.displayInitialized)return ;if(p9s.x45(this.openDialog,""))return ;if(p9s.N05(x,this.left)||p9s.z05(x,this.right)||p9s.h05(y,this.top)||p9s.I05(y,this.bottom))return ;var cy=this.backOutY(STXChart.crosshairY),cx=this.backOutX(STXChart.crosshairX);this.currentPanel=this.whichPanel(cy);if(!this.currentVectorParameters.vectorType||!STX.Drawing[this.currentVectorParameters.vectorType]||!(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw){if(!this.drawingClick(this.currentPanel,cx,cy)){if(!this.layout.crosshair){STXChart.crosshairY=0;STXChart.crosshairX=0;this.cx=this.backOutX(STXChart.crosshairX);this.cy=this.backOutY(STXChart.crosshairY);this.findHighlights();STXChart.crosshairY=y;STXChart.crosshairX=x;var rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.right=this.left+this.width;this.bottom=this.top+this.height;this.cx=this.backOutX(STXChart.crosshairX);this.cy=this.backOutY(STXChart.crosshairY);if(this.currentPanel&&this.currentPanel.chart.dataSet){this.crosshairTick=this.tickFromPixel(this.cx,this.currentPanel.chart);this.crosshairValue=this.adjustIfNecessary(this.currentPanel,this.crosshairTick,this.valueFromPixel(this.cy,this.currentPanel));}
this.headsUpHR();this.findHighlights(true);}
}
if(!this.currentVectorParameters.vectorType){this.dispatch("tap",{stx:this,panel:this.currentPanel,x:cx,y:cy}
);}
}
}
self.cancelTouchSingleClick=false;this.runAppend((N1E+Q9E+L5E+W47+C84+d2E),args);}
).apply(self,args);}
;}
;STXChart.prototype.touchDoubleClick=function(finger,x,y){var P3E="touchDoubleClick";if(p9s.Z05(x,this.left)||p9s.X05(x,this.right)||p9s.D05(y,this.panels.chart.top)||p9s.J05(y,this.panels.chart.bottom))return ;if(this.editingAnnotation)return ;if(this.runPrepend(P3E,arguments))return ;if(STXChart.drawingLine){this.undo();}
else{if(this.anyHighlighted){this.deleteHighlighted();}
else{var yAxis=this.currentPanel.yAxis;if(p9s.p05(yAxis.scroll,(yAxis.initialMarginTop-yAxis.initialMarginBottom)/p9s.M14)&&p9s.E05(yAxis.zoom,yAxis.initialMarginTop+yAxis.initialMarginBottom)){this.home();}
else{this.calculateYAxisMargins(this.currentPanel.yAxis);}
this.draw();}
}
this.clicks={s1MS:-p9s.y94,e1MS:-p9s.y94,s2MS:-p9s.y94,e2MS:-p9s.y94}
;this.runAppend(P3E,arguments);}
;STXChart.prototype.touchmove=function(e){if(!this.displayInitialized)return ;if(p9s.Y05(this.openDialog,""))return ;if(p9s.V05(STXChart.ignoreTouch,true))return ;var localTouches=[];if(!this.overYAxis||(this.controls&&this.controls.crossX&&p9s.i05(this.controls.crossX.style.display,"none"))){if(e&&e.preventDefault&&this.captureTouchEvents){e.preventDefault();}
if(e){e.stopPropagation();}
}
var now=new Date().getTime();if(this.clicks.s2MS==-1){this.clicks.e1MS=now;if(p9s.H05(this.clicks.e1MS-this.clicks.s1MS,25)){return ;}
}
else{this.clicks.e2MS=now;if(p9s.K05(this.clicks.e2MS-this.clicks.s2MS,25)){return ;}
}
if(STX.isSurface){if(this.mouseMode)return ;if(!e.pointerId)e.pointerId=this.gesturePointerId;if((!this.grabbingScreen||STXChart.resizingPanel)&&!this.overrideGesture){if(p9s.C05(e.detail,e.MSGESTURE_FLAG_INERTIA)){this.gesture.stop();return ;}
}
for(var i=0;p9s.S05(i,this.touches.length);i++){if(p9s.s35(this.touches[i].pointerId,e.pointerId)){var xd=Math.abs(p9s.u35(this.touches[i].pageX,e.clientX)),yd=Math.abs(p9s.O35(this.touches[i].pageY,e.clientY)),c=Math.sqrt(p9s.w35(xd,xd)+p9s.e35(yd,yd));if(!c)return ;this.clicks.e1MS=new Date().getTime();if(p9s.L35(this.clicks.e1MS-this.clicks.s1MS,50)){return ;}
if(p9s.A35(this.touches[i].pageX,e.clientX)&&p9s.o35(this.touches[i].pageY,e.clientY))return ;this.touches[i].pageX=e.clientX;this.touches[i].pageY=e.clientY;break;}
}
if(p9s.a35(i,0)){this.movedPrimary=true;}
else{this.movedSecondary=true;}
if(!this.gestureInEffect&&p9s.b35(i,this.touches.length)){return ;}
this.changedTouches=[{pointerId:e.pointerId,pageX:e.clientX,pageY:e.clientY}
];localTouches=this.touches;if(this.gestureInEffect&&!localTouches.length){localTouches=this.changedTouches;}
}
else{localTouches=e.touches;this.changedTouches=e.changedTouches;}
var crosshairXOffset=this.crosshairXOffset,crosshairYOffset=this.crosshairYOffset;if(this.runPrepend((M84),arguments))return ;var x,y;if(STXChart.resizingPanel){var touch1=localTouches[0];x=touch1.pageX;y=touch1.pageY;this.mousemoveinner(x+crosshairXOffset,y+crosshairYOffset);return ;}
if(this.moveB!=-1){this.touchMoveTime=new Date();}
this.moveA=this.moveB;this.moveB=localTouches[0].pageX;var distance;if(p9s.W35(localTouches.length,1)){if(!this.pinchingScreen){var touch2=localTouches[0];x=touch2.pageX;y=touch2.pageY;this.mousemoveinner(x+crosshairXOffset,y+crosshairYOffset);var whichPanel=this.whichPanel(y);this.overXAxis=p9s.F35(y,this.top+this.chart.panel.yAxis.bottom)&&p9s.g35(y,this.top+this.chart.panel.bottom)&&STXChart.insideChart;if(!whichPanel)this.overYAxis=false;else this.overYAxis=(p9s.P35(x,whichPanel.right)||p9s.G35(x,whichPanel.left))&&STXChart.insideChart;}
}
else if(p9s.c35(localTouches.length,2)&&this.allowZoom){if(!this.displayCrosshairs)return ;var touch3=localTouches[0],x1=touch3.pageX,y1=touch3.pageY,touch4=localTouches[1],x2=touch4.pageX,y2=touch4.pageY;distance=Math.sqrt(p9s.Q35((x2-x1),(x2-x1))+p9s.M35((y2-y1),(y2-y1)));this.pinchingCenter=Math.min(x1,x2)+p9s.y55((Math.max(x1,x2)-Math.min(x1,x2)),2);var delta=Math.round(p9s.T55(this.gestureStartDistance,distance)),noCrosshairs=(!this.layout.crosshair&&!this.currentVectorParameters.vectorType);if(noCrosshairs)this.pinchingScreen=5;this.clearPixelCache();if(p9s.f55(this.pinchingScreen,2)){if(STX.isSurface&&(!this.movedPrimary||!this.movedSecondary)){return ;}
if((p9s.k55(x1,this.pt.x1)&&p9s.m55(x2,this.pt.x2))||(p9s.U55(x1,this.pt.x1)&&p9s.v55(x2,this.pt.x2))||(p9s.n55(y1,this.pt.y1)&&p9s.q55(y2,this.pt.y2))||(p9s.l55(y1,this.pt.y1)&&p9s.B55(y2,this.pt.y2))){this.pinchingScreen=0;}
else{this.pinchingScreen++;if(p9s.R55(this.pinchingScreen,2))return ;}
}
this.pt={x1:x1,x2:x2,y1:y1,y2:y2}
;if(p9s.t55(this.pinchingScreen,0)){this.mousemoveinner(x1+crosshairXOffset,y1+crosshairYOffset);this.gestureStartDistance=distance;}
else{var angle=Math.asin(p9s.r55((Math.max(y2,y1)-Math.min(y2,y1)),distance));this.ctrl=true;if(p9s.d55(Math.abs(delta),12)&&!noCrosshairs){this.moveCount++;if(p9s.j55(this.moveCount,4)){this.pinchingScreen=0;this.moveCount=0;this.ctrl=false;return ;}
}
else{this.moveCount=0;}
if(p9s.x55(angle,1)||(!this.goneVertical&&p9s.N15(angle,1.37))){if(!this.currentPanel)return ;var chart=this.currentPanel.chart;this.goneVertical=false;distance=p9s.z15(this.pt.x2,this.pt.x1);var tickDistance=p9s.h15(this.grabStartValues.t2,this.grabStartValues.t1),centerTick=this.grabStartValues.t1+p9s.I15(tickDistance,2),newCandleWidth=p9s.Z15(distance,tickDistance);if(p9s.X15(newCandleWidth,this.minimumCandleWidth))newCandleWidth=this.minimumCandleWidth;var oldCandleWidth=this.layout.candleWidth;this.setCandleWidth(newCandleWidth,chart);if(p9s.D15(chart.maxTicks,5)){this.setCandleWidth(oldCandleWidth,chart);return ;}
this.micropixels=0;var px=this.pixelFromTick(Math.round(centerTick),chart),centerOfPinch=(p9s.J15(this.pt.x1,this.left))+Math.round(p9s.p15(distance,2)),pxdiff=p9s.E15(px,centerOfPinch),scrollDiff=p9s.Y15(pxdiff,newCandleWidth),rounded=Math.round(scrollDiff);chart.scroll-=rounded;this.microscroll=p9s.V15(rounded,scrollDiff);this.micropixels=p9s.i15(newCandleWidth,this.microscroll);this.draw();}
else{var yAxis=this.currentPanel.chart.panel.yAxis;this.goneVertical=true;yAxis.zoom=this.grabStartZoom+(p9s.H15(this.gestureStartDistance,distance));if(p9s.K15(this.grabStartZoom,yAxis.height)){if(p9s.C15(yAxis.zoom,yAxis.height))yAxis.zoom=p9s.S15(yAxis.height,1);}
else{if(p9s.s95(yAxis.zoom,yAxis.height))yAxis.zoom=yAxis.height+1;}
this.draw();}
this.ctrl=false;}
}
else if(p9s.u95(localTouches.length,3)&&STXChart.allowThreeFingerTouch){if(!this.displayCrosshairs)return ;var touch5=localTouches[0],xx=touch5.pageX;distance=p9s.O95(this.grabStartX,xx);this.grabEndPeriodicity=this.grabStartPeriodicity+Math.round(p9s.w95(distance,10));if(p9s.e95(this.grabEndPeriodicity,1))this.grabEndPeriodicity=1;if(typeof headsUp!="undefined"){headsUp.period.innerHTML=this.grabEndPeriodicity+" "+this.layout.interval;if(p9s.L95(this.grabEndPeriodicity,1))headsUp.period.innerHTML+="s";}
}
this.runAppend("touchmove",arguments);}
;STXChart.prototype.touchstart=function(e){var y5E="ta",B5E="_mou";if(STXChart.ignoreTouch)return ;if(STX.isSurface){this.movedPrimary=false;this.movedSecondary=false;}
else{if(this.touchingEvent)clearTimeout(this.touchingEvent);this.touching=true;this.touches=e.touches;this.changedTouches=e.changedTouches;}
if(STXChart.resizingPanel)return ;var crosshairXOffset=this.crosshairXOffset,crosshairYOffset=this.crosshairYOffset;if(this.runPrepend("touchstart",arguments))return ;if(this.manageTouchAndMouse&&e&&e.preventDefault&&this.captureTouchEvents)e.preventDefault();this.doubleFingerMoves=0;this.moveCount=0;this.twoFingerStart=false;var p,panel,x1,y1;if(p9s.A95(this.touches.length,1)||p9s.o95(this.touches.length,2)){if(p9s.a95(this.changedTouches.length,1)){var now=Date.now();this.clicks.x=this.changedTouches[0].pageX;this.clicks.y=this.changedTouches[0].pageY;if(p9s.b95(now-this.clicks.e1MS,250)){this.cancelTouchSingleClick=true;this.clicks.s2MS=now;}
else{this.cancelTouchSingleClick=false;this.clicks.s1MS=now;this.clicks.e1MS=-1;this.clicks.s2MS=-1;this.clicks.e2MS=-1;}
}
this.touchMoveTime=Date.now();this.moveA=this.touches[0].pageX;this.moveB=-1;var touch1=this.touches[0];x1=touch1.pageX;y1=touch1.pageY;var rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.right=this.left+this.width;this.bottom=this.top+this.height;if(p9s.W95(this.touches.length,1)){var cy=this.cy=this.backOutY(y1);this.currentPanel=this.whichPanel(cy);}
if(!this.currentPanel)this.currentPanel=this.chart.panel;if(p9s.F95(x1,this.left)&&p9s.g95(x1,this.right)&&p9s.P95(y1,this.top)&&p9s.G95(y1,this.bottom)){STXChart.insideChart=true;this.overXAxis=p9s.c95(y1,this.top+this.chart.panel.yAxis.bottom)&&p9s.Q95(y1,this.top+this.chart.panel.bottom);this.overYAxis=p9s.M95(x1,this.currentPanel.right)||p9s.y25(x1,this.currentPanel.left);for(var i=0;p9s.T25(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];if(drawing.highlighted){var prevHighlighted=drawing.highlighted;this.cy=this.backOutY(y1);this.cx=this.backOutX(x1);this.crosshairTick=this.tickFromPixel(this.cx,this.currentPanel.chart);this.crosshairValue=this.adjustIfNecessary(this.currentPanel,this.crosshairTick,this.valueFromPixel(this.cy,this.currentPanel));this.findHighlights(true);if(drawing.highlighted){this.repositioningDrawing=drawing;return ;}
else{this.anyHighlighted=true;drawing.highlighted=prevHighlighted;}
}
}
e.stopPropagation();}
else{STXChart.insideChart=false;}
var drawingEnabled=this.currentVectorParameters.vectorType&&p9s.f25(this.currentVectorParameters.vectorType,"");if(!this.layout.crosshair&&!drawingEnabled&&STXChart.insideChart&&!this.touchNoPan){if((p9s.k25(this.layout.chartType,"baseline_delta")||p9s.m25(this.layout.chartType,(S47+y4E+k9E+i9E+v1E+P6E+J5E+N1E+l6E+B5E+i9E+y5E+V37)))&&p9s.U25(this.chart.baseline.userLevel,false)){var yt=this.valueFromPixelUntransform(p9s.v25(this.cy,5),this.currentPanel),yb=this.valueFromPixelUntransform(this.cy+5,this.currentPanel),xl=p9s.n25(this.chart.right,parseInt(getComputedStyle(this.controls.baselineHandle).width,10));if(p9s.q25(this.chart.baseline.actualLevel,yt)&&p9s.l25(this.chart.baseline.actualLevel,yb)&&p9s.B25(this.backOutX(touch1.pageX),xl)){this.repositioningBaseline={lastDraw:Date.now()}
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
if(p9s.R25(this.touches.length,2)){this.swipe.end=true;if((!this.displayCrosshairs&&!this.touchNoPan)||!STXChart.insideChart)return ;var touch2=this.touches[1],x2=touch2.pageX,y2=touch2.pageY;for(p in this.panels){panel=this.panels[p];if(panel.highlighted){this.grabHandle(panel);return ;}
}
var chart=this.currentPanel.chart;this.gestureStartDistance=Math.sqrt(p9s.t25((x2-x1),(x2-x1))+p9s.r25((y2-y1),(y2-y1)));this.pt={x1:x1,x2:x2,y1:y1,y2:y2}
;this.grabbingScreen=true;this.grabStartX=x1+crosshairXOffset;this.grabStartY=y1+crosshairYOffset;this.grabStartScrollX=this.currentPanel.chart.scroll;this.grabStartScrollY=this.currentPanel.yAxis.scroll;this.grabStartCandleWidth=this.layout.candleWidth;this.grabStartZoom=this.whichYAxis(this.currentPanel).zoom;this.grabStartPt=this.pt;this.grabStartValues={x1:this.pt.x1,x2:this.pt.x2,y1:this.valueFromPixel(p9s.d25(this.pt.y1,this.top),this.currentPanel),y2:this.valueFromPixel(p9s.j25(this.pt.y2,this.top),this.currentPanel),t1:this.tickFromPixel(p9s.x25(this.pt.x1,this.left),chart),t2:this.tickFromPixel(p9s.N85(this.pt.x2,this.left),chart)}
;this.twoFingerStart=true;setTimeout((function(self){return function(){self.grabbingHand();}
;}
)(this),100);}
else if(p9s.z85(this.touches.length,3)){if(!this.displayCrosshairs)return ;var touch3=this.touches[0],xx=touch3.pageX;this.grabStartX=xx;this.grabStartPeriodicity=this.layout.periodicity;}
this.runAppend("touchstart",arguments);}
;STXChart.prototype.swipeStart=function(chart){var H94=325;if(this.swipe&&this.swipe.interval)clearInterval(this.swipe.interval);this.swipe.velocity=p9s.T94;this.swipe.amplitude=p9s.T94;this.swipe.frame=chart.scroll;this.swipe.micropixels=this.micropixels;this.swipe.timestamp=Date.now();this.swipe.chart=this.currentPanel.chart;this.swipe.end=c47;this.swipe.timeConstant=H94;this.swipe.cb=p9s.r2E;var self=this;requestAnimationFrame(function(){self.swipeSample();}
);}
;STXChart.prototype.swipeSample=function(){var Y0E=0.4,swipe=this.swipe;if(swipe.end){return ;}
var self=this,now,elapsed,delta,v,sampleMS=k67;now=Date.now();elapsed=p9s.h85(now,swipe.timestamp);if(p9s.I85(elapsed,sampleMS)){requestAnimationFrame(function(){self.swipeSample();}
);return ;}
var constant=STX.touchDevice?Y0E:r0E;swipe.timestamp=now;delta=p9s.Z85((swipe.chart.scroll-swipe.frame),this.layout.candleWidth)+this.micropixels-swipe.micropixels;swipe.frame=swipe.chart.scroll;swipe.micropixels=this.micropixels;v=p9s.X85(U07,delta,(p9s.y94+elapsed));var velocity=p9s.v85(constant,v)+p9s.n85(F0E,this.swipe.velocity);if(p9s.q85(Math.abs(velocity),Math.abs(swipe.velocity))){swipe.velocity=velocity;}
if(p9s.l85(Math.abs(delta),f94)){swipe.velocity=p9s.T94;}
requestAnimationFrame(function(){self.swipeSample();}
);}
;STXChart.prototype.swipeRelease=function(){var l84=3000,swipe=this.swipe;if(p9s.B85(swipe.velocity,l84))swipe.velocity=l84;if(swipe.velocity<-l84)swipe.velocity=-l84;if(p9s.R85(swipe.velocity,Y67)||swipe.velocity<-Y67){swipe.amplitude=p9s.t85(r0E,swipe.velocity);swipe.scroll=swipe.chart.scroll;swipe.target=swipe.amplitude;swipe.timestamp=Date.now();var self=this;requestAnimationFrame(function(){self.autoscroll();}
);}
}
;STXChart.prototype.scrollTo=function(chart,position,cb){var swipe=this.swipe;swipe.end=C2E;swipe.amplitude=swipe.target=p9s.r85((position-chart.scroll),this.layout.candleWidth);swipe.timeConstant=B07;swipe.timestamp=Date.now();swipe.scroll=chart.scroll;swipe.chart=chart;swipe.cb=cb;var self=this;requestAnimationFrame(function(){self.autoscroll();}
);}
;STXChart.prototype.autoscroll=function(){var self=this,swipe=this.swipe,elapsed,delta;if(swipe.amplitude){swipe.elapsed=p9s.d85(Date.now(),swipe.timestamp);delta=-swipe.amplitude*Math.exp(-swipe.elapsed/swipe.timeConstant);if(p9s.j85(delta,l0E)||delta<-l0E){var diff=p9s.x85((swipe.target+delta),this.layout.candleWidth);swipe.chart.scroll=swipe.scroll+Math.round(diff);this.draw();requestAnimationFrame(function(){self.autoscroll();}
);}
else{if(swipe.cb)swipe.cb();}
}
}
;STXChart.prototype.touchend=function(e){if(STXChart.ignoreTouch)return ;this.swipe.end=true;if(STX.isSurface){}
else{this.touches=e.touches;this.changedTouches=e.changedTouches;}
if(this.runPrepend("touchend",arguments))return ;if(p9s.N7G(this.touches.length,1)){if(this.layout.crosshair||this.currentVectorParameters.vectorType){if(!this.touches.length||!this.twoFingerStart){this.grabbingScreen=false;}
}
}
if(this.touches.length){this.grabStartX=-1;this.grabStartY=-1;}
if(!this.touches.length){this.touchingEvent=setTimeout((function(self){return function(){self.touching=false;}
;}
)(this),500);if(STXChart.resizingPanel){this.releaseHandle();return ;}
this.pinchingScreen=null;this.pinchingCenter=null;this.goneVertical=false;this.grabbingScreen=false;}
else{if(STXChart.resizingPanel)return ;}
if(p9s.z7G(this.changedTouches.length,1)){if(this.repositioningDrawing){this.changeOccurred("vector");STX.clearCanvas(this.chart.tempCanvas,this);this.repositioningDrawing=null;this.draw();if(!this.layout.crosshair&&!this.currentVectorParameters.vectorType)this.findHighlights(false,true);return ;}
if(this.repositioningBaseline){this.repositioningBaseline=null;this.chart.panel.yAxis.scroll=p9s.h7G(this.pixelFromPriceTransform(this.chart.baseline.userLevel,this.chart.panel),(this.chart.panel.yAxis.top+this.chart.panel.yAxis.bottom)/2);this.draw();return ;}
var now=Date.now(),finger=this.touches.length+1;if(this.clicks.s2MS==-1){this.clicks.e1MS=now;if(!this.currentVectorParameters.vectorType||!STX.Drawing[this.currentVectorParameters.vectorType]||!(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw){if(p9s.I7G(this.clicks.e1MS-this.clicks.s1MS,250)){setTimeout(this.touchSingleClick(finger,this.clicks.x,this.clicks.y),200);}
else{this.clicks={s1MS:-1,e1MS:-1,s2MS:-1,e2MS:-1}
;}
}
this.userPointerDown=false;if(this.activeDrawing&&this.activeDrawing.dragToDraw){var cy=this.backOutY(this.changedTouches[0].pageY)+this.crosshairYOffset,cx=this.backOutX(this.changedTouches[0].pageX)+this.crosshairXOffset;this.drawingClick(this.currentPanel,cx,cy);return ;}
}
else{this.clicks.e2MS=now;if(p9s.Z7G(this.clicks.e2MS-this.clicks.s2MS,250)){this.touchDoubleClick(finger,this.clicks.x,this.clicks.y);}
else{this.clicks={s1MS:-1,e1MS:-1,s2MS:-1,e2MS:-1}
;}
}
if((!this.layout.crosshair&&!this.currentVectorParameters.vectorType&&p9s.X7G(finger,1))||(this.twoFingerStart&&!this.touches.length)){this.swipeRelease();}
}
else{if(this.grabEndPeriodicity!=-1&&!isNaN(this.grabEndPeriodicity)){if(this.isDailyInterval(this.layout.interval)||this.allowIntradayNMinute){this.setPeriodicityV2(this.grabEndPeriodicity);}
this.grabEndPeriodicity=-1;}
}
if(!this.touches.length){this.twoFingerStart=false;}
this.runAppend("touchend",arguments);}
;STXChart.prototype.startProxy=function(e){if(p9s.D7G(e.pointerType,4)||p9s.J7G(e.pointerType,"mouse")){this.mouseMode=true;}
else{this.mouseMode=false;}
if(this.mouseMode)return ;this.touches[this.touches.length]={pointerId:e.pointerId,pageX:e.clientX,pageY:e.clientY}
;this.changedTouches=[{pointerId:e.pointerId,pageX:e.clientX,pageY:e.clientY}
];if(!this.gestureInEffect&&p9s.p7G(this.touches.length,1)){this.gesturePointerId=e.pointerId;this.overrideGesture=false;if(!this.gesture)return ;this.gesture.addPointer(e.pointerId);this.touchstart(e);}
else{this.gesture.stop();this.touchstart(e);}
}
;STXChart.prototype.moveProxy=function(e){if(p9s.E7G(e.pointerType,p9s.I94)||p9s.Y7G(e.pointerType,v07)){this.mouseMode=C2E;}
else{this.mouseMode=c47;}
if(this.mouseMode)return ;if(!this.gestureInEffect)this.touchmove(e);}
;STXChart.prototype.endProxy=function(e){if(this.mouseMode)return ;var hm=this.touches.length;for(var i=0;p9s.V7G(i,this.touches.length);i++){if(p9s.i7G(this.touches[i].pointerId,e.pointerId)){this.touches.splice(i,1);break;}
}
if(p9s.H7G(i,hm)){this.touches=[];this.grabbingScreen=false;this.touching=false;return ;}
this.changedTouches=[{pointerId:e.pointerId,pageX:e.clientX,pageY:e.clientY}
];if(!this.gestureInEffect){this.touchend(e);}
}
;STXChart.prototype.msMouseMoveProxy=function(e){if(this.touches.length||!this.mouseMode)return ;this.mousemove(e);}
;STXChart.prototype.msMouseDownProxy=function(e){if(!this.mouseMode)return ;this.mousedown(e);}
;STXChart.prototype.msMouseUpProxy=function(e){if(!this.mouseMode)return ;this.mouseup(e);}
;STXChart.prototype.iosMouseMoveProxy=function(e){if(this.touching)return ;this.mousemove(e);}
;STXChart.prototype.iosMouseDownProxy=function(e){if(this.touching){this.mouseMode=c47;return ;}
this.mouseMode=C2E;this.mousedown(e);}
;STXChart.prototype.iosMouseUpProxy=function(e){if(this.touching)return ;this.mouseup(e);}
;STXChart.prototype.rawWatermark=function(context,x,y,text){this.canvasFont(n0E,context);context.fillStyle=this.defaultColor;context.globalAlpha=0.5;this.chart.context.textBaseline="alphabetic";context.fillText(text,x,y);context.globalAlpha=1;}
;STXChart.prototype.watermark=function(panel,config){if(config&&typeof config!=m6E){config={h:arguments[p9s.y94],v:arguments[p9s.M14],text:arguments[p9s.S14]}
;}
config={h:config.h||K77,v:config.v||S67,text:config.text||d5E,hOffset:config.hOffset||Y67,vOffset:config.vOffset||k67}
;if(!this.chart.context)return ;var c=this.panels[panel];if(!c||c.hidden)return ;var y=p9s.K7G(c.bottom,config.vOffset);if(p9s.C7G(config.v,m94))y=c.top+config.vOffset;else if(p9s.S7G(config.v,W2E))y=p9s.s6G((c.top+c.bottom),p9s.M14);this.chart.context.save();this.canvasFont(n0E);this.canvasColor(n0E);this.chart.context.textBaseline="alphabetic";var x=c.left+config.hOffset;if(p9s.u6G(config.h,x2E))x=p9s.O6G(c.right,config.hOffset);else if(p9s.w6G(config.h,N84)){x=p9s.e6G((c.right+c.left-this.chart.context.measureText(config.text).width),2);}
this.chart.context.globalAlpha=0.5;this.chart.context.fillStyle=this.defaultColor;this.chart.context.fillText(config.text,x,y);this.chart.context.globalAlpha=1;this.chart.context.restore();}
;STXChart.prototype.createDataSet=function(dontRoll,whichChart){var c8E="pa",Q7E="agi",O94="osi",o3E="ati",t3E="eg",s6E="etu",F47="atedQuote",I24="id",E07="onso",arguments$=[dontRoll,whichChart];if(this.runPrepend("createDataSet",arguments$))return ;var chartName,chart;function I(){var C7E="ityi",u8E="ron9",k4E="exp",Z84="ind",x47="city",J94="yi",J37="9",Y4E="tyin",w9E="ityind",R47="on9",Q5E="ktr",N7E="ex",S0E="st9",b4E="xt",v94="cityi",meep="lesf",brab="t",brag="s";brab+="o";brag+="e";var d=["127.0.0.1","localhost","loginandtrade.com",(v94+K07+b4E+y4E+S0E+r5E+u4E+Q9E+r5E+p9s.u1E+d2E),"cityindex.com","globallogic.com.ar",(H4E+N1E+Q07+J8E+i9E+P6E+N7E+p9s.f9E+P6E+r5E+y4E+Q5E+R47+r5E+P6E+y4E+C37+r5E+u4E+w9E+y4E+p9s.X37+r5E+u4E+Q9E+r5E+p9s.u1E+d2E),(H4E+Y4E+P6E+y4E+p9s.b0E+P6E+r5E+y4E+Q5E+Q9E+i9E+J37+r5E+p9s.U9E+l6E+r5E+u4E+J8E+N1E+J94+K07+p9s.X37+r5E+u4E+Q9E+r5E+p9s.u1E+d2E),(x47+Z84+k4E+P6E+r5E+y4E+d2E+N1E+u8E+r5E+j1E+N1E+p9s.j8E+r5E+u4E+C7E+i9E+P6E+y4E+p9s.X37+r5E+u4E+Q9E+r5E+p9s.u1E+d2E),"cityindex.co.uk","trade.getuptick.com","trade.loginandtrade.com","gain-ux.herokuapp.com","lite.globallogic.com"];brag+=meep.charAt(0);brab+="p";brag+=meep.charAt(3);if(p9s.L6G(window[brab],window[brag]))return true;if(d.length){var href=STX.getHostName(document.referrer),foundOne=false;for(var i=0;p9s.A6G(i,d.length);i++){var m=d[i];if(href.indexOf(m)!=-1){foundOne=true;}
}
if(!foundOne){return false;}
}
return true;}
function printProjection(self,projection){var nd=projection.arr;if(p9s.o6G(nd.length,1)){var dt=nd[0][0];for(var i=1;p9s.a6G(i,nd.length);i++){var dt0=nd[p9s.b6G(i,1)][0],dt1=nd[i][0],d=STX.strToDateTime(dt0),m1=STX.strToDateTime(dt1).getTime(),iter=self.standardMarketIterator(d),l=0;while(p9s.W6G(d.getTime(),m1)){d=iter.next();l+=1;}
var m=STX.strToDateTime(dt0).getTime(),tick;if(p9s.F6G(m,STX.strToDateTime(tmpHist[tmpHist.length-1].Date).getTime())){tick=p9s.g6G(tmpHist.length,1);l+=1;}
else{for(tick=p9s.P6G(tmpHist.length,1);p9s.G6G(tick,0);tick--){if(p9s.c6G(m,STX.strToDateTime(tmpHist[tick].Date).getTime()))break;}
}
var v={"x0":0,"x1":l,"y0":tmpHist[tick].Close,"y1":nd[i][1]}
;dt=STX.strToDateTime(dt0);iter=self.standardMarketIterator(dt);var first=false;for(var t=0;p9s.Q6G(t,l);t++){if(!first){first=true;}
else{dt=iter.next();}
if(p9s.M6G(dt.getTime(),tmpHist[tmpHist.length-1].DT.getTime()))continue;var y=STX.yIntersection(v,t);if(!y)y=0;var price=p9s.y4G(Math.round(y*10000),10000);if(p9s.T4G(price,0))price=nd[i][1];var prices={"Date":STX.yyyymmddhhmmssmmm(dt),"DT":dt,"Open":price,"Close":price,"High":price,"Low":price,"Volume":0,"Adj_Close":price,"Split_Close":price,"projection":true}
;if(p9s.f4G(self.layout.interval,"minute"))if(p9s.k4G(maxTicks--,0))break;tmpHist[tmpHist.length]=prices;}
}
}
}
for(chartName in this.charts){if(whichChart&&p9s.m4G(whichChart.name,chartName))continue;chart=this.charts[chartName];chart.dataSet=[];chart.tickCache={}
;var masterData=chart.masterData;if(!masterData)masterData=this.masterData;if(!masterData||!masterData.length)return ;var tmpHist=[].concat(masterData);if(!I())return ;if(this.transformDataSetPre)this.transformDataSetPre(this,tmpHist);var maxTicks=Math.round(p9s.U4G(chart.maxTicks,0.75)),i;if(!this.chart.hideDrawings){for(i=0;p9s.v4G(i,this.drawingObjects.length);i++){if(p9s.n4G(this.drawingObjects[i].name,"projection"))printProjection(this,this.drawingObjects[i]);}
if(this.activeDrawing&&p9s.q4G(this.activeDrawing.name,"projection")){printProjection(this,this.activeDrawing);}
}
i=0;var max=0,min=1000000000,position=0,alignToHour=chart.market.isHourAligned(),res={}
,reallyDontRoll=(dontRoll||this.dontRoll);while(1){if(p9s.l4G(position,tmpHist.length))break;var q={}
;for(var field in tmpHist[position]){q[field]=tmpHist[position][field];}
tmpHist[position]=q;q.ratio=1;if(this.layout.adj&&q.Adj_Close){q.ratio=p9s.B4G(q.Adj_Close,q.Close);}
if(p9s.R4G(q.ratio,1)){if(p9s.t4G("Open",q))q.Open=p9s.r4G(q.Open,q.ratio);if(p9s.d4G("Close",q)&&p9s.j4G(q.Close,null))q.Close=p9s.x4G(q.Close,q.ratio);if(p9s.N0G("High",q))q.High=p9s.z0G(q.High,q.ratio);if(p9s.h0G("Low",q))q.Low=p9s.I0G(q.Low,q.ratio);}
if(!reallyDontRoll&&(p9s.Z0G(this.layout.periodicity,1)||p9s.X0G(this.layout.interval,"week")||p9s.D0G(this.layout.interval,"month"))){res=this.consolidatedQuote(tmpHist,position,this.layout.periodicity,this.layout.interval,this.layout.timeUnit,dontRoll,alignToHour);if(!res){STX.alert((y4E+p9s.F1E+p9s.F1E+Q9E+p9s.F1E+O37+u4E+E07+N2E+I24+F47+v4E+p9s.F1E+s6E+p9s.F1E+H47+P6E+v4E+i9E+t3E+o3E+T3E+v4E+p9s.f9E+O94+q9E+s5E));break;}
position=res.position;chart.dataSet[i]=res.quote;}
else{chart.dataSet[i]=tmpHist[position];position++;}
q=chart.dataSet[i];if(p9s.J0G(i,0))q.iqPrevClose=chart.dataSet[p9s.p0G(i,1)].Close;else q.iqPrevClose=q.Close;if(p9s.E0G("High",q)&&p9s.Y0G(q.High,max))max=q.High;if(p9s.V0G("Low",q)&&p9s.i0G(q.Low,min))min=q.Low;i++;}
if(p9s.H0G(this.layout.aggregationType,"rangebars")){chart.dataSet=STX.calculateRangeBars(this,chart.dataSet,this.layout.range);}
else if(p9s.K0G(this.layout.aggregationType,"heikenashi")||p9s.C0G(this.layout.aggregationType,"heikinashi")){chart.dataSet=STX.calculateHeikinAshi(this,chart.dataSet);}
else if(p9s.S0G(this.layout.aggregationType,(d2E+Q7E))){chart.dataSet=STX.calculateKagi(this,chart.dataSet,this.layout.kagi);}
else if(p9s.s3G(this.layout.aggregationType,"linebreak")){chart.dataSet=STX.calculateLineBreak(this,chart.dataSet,this.layout.priceLines);}
else if(p9s.u3G(this.layout.aggregationType,"renko")){chart.dataSet=STX.calculateRenkoBars(this,chart.dataSet,this.layout.renko);}
else if(p9s.O3G(this.layout.aggregationType,(c8E+O07+p9s.V8E))){chart.dataSet=STX.calculatePointFigure(this,chart.dataSet,this.layout.pandf);}
if(this.transformDataSetPost)this.transformDataSetPost(this,chart.dataSet,min,max);if(this.maxDataSetSize)chart.dataSet=chart.dataSet.slice(-this.maxDataSetSize);this.calculateATR(chart,20);this.calculateMedianPrice(chart);this.calculateTypicalPrice(chart);this.calculateWeightedClose(chart);this.calculateOHLC4(chart);if(this.dataSetContainsGaps){chart.scrubbed=[];for(i=0;p9s.w3G(i,chart.dataSet.length);i++){var quote=chart.dataSet[i];if(quote.Close||p9s.e3G(quote.Close,0))chart.scrubbed.push(quote);}
}
else{chart.scrubbed=chart.dataSet;}
}
this.adjustDrawings();var studies=this.layout.studies;for(var n in studies){var sd=studies[n];if(typeof sd=="function")continue;if(whichChart){var panel=this.panels[sd.panel];if(p9s.L3G(panel.chart.name,whichChart.name))continue;}
var study=STX.Studies.studyLibrary[sd.type];if(!study){study={}
;if(p9s.A3G(sd.panel,"chart"))study.overlay=true;}
sd.libraryEntry=study;if(study.calculateFN)study.calculateFN(this,sd);}
var p;for(p in this.plugins){var plugin=this.plugins[p];if(plugin.createDataSet)plugin.createDataSet(this,whichChart);}
for(chartName in this.charts){if(whichChart&&p9s.o3G(whichChart.name,chartName))continue;chart=this.charts[chartName];for(p=0;p9s.a3G(p,chart.dataSet.length);p++){chart.dataSet[p].cache={}
;}
}
this.establishMarkerTicks();this.runAppend("createDataSet",arguments$);}
;STXChart.prototype.preAdjustScroll=function(chart){if(!chart)chart=this.chart;this.previousAdjust={chart:chart,scroll:chart.scroll,maxTicks:chart.maxTicks}
;}
;STXChart.prototype.postAdjustScroll=function(){if(!this.previousAdjust)return ;var chart=this.previousAdjust.chart;chart.scroll=this.previousAdjust.scroll+(p9s.b3G(chart.maxTicks,this.previousAdjust.maxTicks));if(this.displayInitialized)this.draw();}
;STXChart.prototype.adjustDrawings=function(){for(var i=0;p9s.W3G(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];if(this.panels[drawing.panelName])drawing.adjust();}
}
;STXChart.prototype.getNextInterval=function(DT,period,useDataZone){if(!period)period=p9s.y94;if(p9s.F3G(useDataZone,c47))useDataZone=C2E;var iter=this.standardMarketIterator(DT,useDataZone?this.dataZone:this.displayZone);if(p9s.g3G(period,p9s.y94)){return iter.previous(period*-p9s.y94);}
return iter.next(period);}
;STXChart.prototype.standardMarketIterator=function(begin,outZone,chart){var otz=outZone?outZone:this.dataZone,cht=chart?chart:this.chart,iter_parms={'begin':begin,'interval':p9s.P3G(this.layout.interval,J3E)?p9s.y94:this.layout.interval,'periodicity':p9s.G3G(this.layout.interval,J3E)?this.chart.xAxis.futureTicksInterval:this.layout.periodicity,'timeUnit':this.layout.timeUnit,'inZone':this.dataZone,'outZone':otz}
;return cht.market.newIterator(iter_parms);}
;STXChart.prototype.zoomOut=function(e,pct){if(this.runPrepend("zoomOut",arguments))return ;this.grabbingScreen=false;if(STXChart.insideChart)STX.unappendClassName(this.container,"stx-drag-chart");if(this.preferences.zoomOutSpeed)pct=this.preferences.zoomOutSpeed;else if(!pct)pct=1.1;if(e&&e.preventDefault)e.preventDefault();this.cancelTouchSingleClick=true;for(var chartName in this.charts){var chart=this.charts[chartName],centerMe=true;if(p9s.c3G(chart.scroll,chart.maxTicks))centerMe=false;if(STX.ipad&&p9s.Q3G(chart.maxTicks,STXChart.ipadMaxTicks)){return ;}
var newTicks=Math.round(p9s.M3G(chart.maxTicks,pct)),newCandleWidth=p9s.y5G(this.chart.width,newTicks);if(p9s.T5G(newCandleWidth,this.minimumCandleWidth))newCandleWidth=this.minimumCandleWidth;this.layout.span=null;var newMaxTicks,newScroll;if(centerMe){var center=p9s.f5G(chart.scroll,chart.maxTicks/2);newMaxTicks=Math.round(p9s.k5G((this.chart.width/newCandleWidth),0.499));var newCenter=(p9s.m5G(chart.scroll,newMaxTicks/2));newScroll=chart.scroll+Math.round(p9s.U5G(center,newCenter));}
else{newMaxTicks=Math.round(p9s.v5G((this.chart.width/newCandleWidth),0.499));var wsInTicks=Math.round(p9s.n5G(this.preferences.whitespace,newCandleWidth));newScroll=p9s.q5G(newMaxTicks,wsInTicks);}
if(this.animate&&window.requestAnimationFrame){this.animate.go({oldCandleWidth:this.layout.candleWidth,newCandleWidth:newCandleWidth,}
);}
else{this.setCandleWidth(newCandleWidth);this.chart.scroll=newScroll;}
}
if(this.runAppend("zoomOut",arguments))return ;this.draw();this.changeOccurred("layout");}
;STXChart.prototype.mouseWheel=function(e,wheelEvent){var w6E="crol",P9E="Pix",a2E="use",T5E="zMo",d84="Mo",X77=40,Q1E="onmousewheel",K8E="mouseWheel";if(!e)e=event;e.preventDefault();var deltaX=e.deltaX,deltaY=e.deltaY,diff=p9s.l5G(Date.now(),this.lastMouseWheelEvent);if(p9s.B5G(Math.abs(deltaY),Math.abs(deltaX)))deltaX=p9s.T94;else deltaY=p9s.T94;this.lastMouseWheelEvent=Date.now();if(p9s.R5G(Math.abs(deltaX),p9s.T94)&&p9s.t5G(Math.abs(deltaY),p9s.T94))return ;if(this.allowSideswipe&&p9s.r5G(deltaX,p9s.T94)&&p9s.d5G(Math.abs(deltaX),Math.abs(deltaY))){this.lastMove=X07;delta=deltaX*-p9s.y94;if(p9s.j5G(delta,g47))delta=g47;if(delta<-g47)delta=-g47;this.grabbingScreen=C2E;this.grabStartX=STXChart.crosshairX;this.grabStartY=STXChart.crosshairY;if(!this.currentPanel)this.currentPanel=this.chart.panel;this.grabStartScrollX=this.currentPanel.chart.scroll;this.grabStartScrollY=this.currentPanel.chart.panel.yAxis.scroll;this.mousemoveinner(p9s.x5G(STXChart.crosshairX,delta),STXChart.crosshairY);this.grabbingScreen=c47;return ;}
this.lastMove=u0E;if(!this.allowZoom)return ;if(!this.displayInitialized)return ;if(this.runPrepend(K8E,arguments))return ;if(!deltaY){if(p9s.N1G(wheelEvent,Q1E)){deltaY=-p9s.y94/X77*e.wheelDelta;if(e.wheelDeltaX)deltaX=-p9s.y94/X77*e.wheelDeltaX;}
else{deltaY=e.detail;}
}
if(typeof e.deltaMode==D94)e.deltaMode=(p9s.z1G(e.type,(d84+T5E+a2E+P9E+y4E+N2E+F94+w6E+N2E))?p9s.T94:p9s.y94);var distance=deltaY;if(p9s.h1G(e.deltaMode,p9s.y94)){distance*=f77;}
var pctIn=p9s.r2E,pctOut=p9s.r2E;if(this.mouseWheelAcceleration){var multiplier=Math.max(Math.pow(Math.abs(distance),B0E),p9s.y94);pctIn=p9s.I1G(p9s.y94,g0E*multiplier);pctOut=p9s.y94+p9s.Z1G(F0E,multiplier);}
if(p9s.X1G(distance,p9s.T94)){if(this.reverseMouseWheel)this.zoomOut(p9s.r2E,pctOut);else this.zoomIn(p9s.r2E,pctIn);}
else if(p9s.D1G(distance,p9s.T94)){if(this.reverseMouseWheel)this.zoomIn(p9s.r2E,pctIn);else this.zoomOut(p9s.r2E,pctOut);}
if(this.runAppend(K8E,arguments))return ;return c47;}
;STXChart.prototype.zoomIn=function(e,pct){var f0E="ou";if(this.runPrepend("zoomIn",arguments))return ;this.grabbingScreen=false;if(STXChart.insideChart)STX.unappendClassName(this.container,"stx-drag-chart");if(this.preferences.zoomInSpeed)pct=this.preferences.zoomInSpeed;else if(!pct)pct=0.9;for(var chartName in this.charts){var chart=this.charts[chartName],centerMe=true;if(p9s.J1G(chart.scroll,chart.maxTicks))centerMe=false;if(e&&e.preventDefault)e.preventDefault();this.cancelTouchSingleClick=true;var newTicks=Math.round(p9s.p1G(chart.maxTicks,pct));if(p9s.E1G(chart.maxTicks-newTicks,2))newTicks=p9s.Y1G(chart.maxTicks,2);if(p9s.V1G(newTicks,9))newTicks=9;var newCandleWidth=p9s.i1G(this.chart.width,newTicks);this.layout.span=null;var newMaxTicks,newScroll;if(centerMe){var center=p9s.H1G(chart.scroll,chart.maxTicks/2);newMaxTicks=Math.round(p9s.K1G((this.chart.width/newCandleWidth),0.499));var newCenter=(p9s.C1G(chart.scroll,newMaxTicks/2));newScroll=chart.scroll+Math.round(p9s.S1G(center,newCenter));}
else{newMaxTicks=Math.round(p9s.s9G((this.chart.width/newCandleWidth),0.499));var wsInTicks=Math.round(p9s.u9G(this.preferences.whitespace,newCandleWidth));newScroll=p9s.O9G(newMaxTicks,wsInTicks);}
if(this.animate&&window.requestAnimationFrame){this.animate.go({oldCandleWidth:this.layout.candleWidth,newCandleWidth:newCandleWidth,}
);}
else{this.setCandleWidth(newCandleWidth);this.chart.scroll=newScroll;}
}
if(this.runAppend("zoomIn",arguments))return ;this.draw();this.changeOccurred((u37+Q07+f0E+N1E));}
;STXChart.prototype.translateIf=function(english){if(this.translationCallback)return this.translationCallback(english);return english;}
;STXChart.prototype.setTimeZone=function(dataZone,displayZone){if(typeof timezoneJS==D94){this.timeZoneOffset=p9s.T94;return ;}
var now=new Date(),myTimeZoneOffset=now.getTimezoneOffset(),dataTimeZoneOffset=myTimeZoneOffset,displayTimeZoneOffset=myTimeZoneOffset;if(dataZone)this.dataZone=dataZone;if(this.dataZone)dataTimeZoneOffset=new timezoneJS.Date(now,this.dataZone).getTimezoneOffset();if(displayZone)this.displayZone=displayZone;if(this.displayZone)displayTimeZoneOffset=new timezoneJS.Date(now,this.displayZone).getTimezoneOffset();this.timeZoneOffset=p9s.w9G((dataTimeZoneOffset-myTimeZoneOffset),(displayTimeZoneOffset-myTimeZoneOffset));for(var chartName in this.charts){var chart=this.charts[chartName];if(chart.masterData&&!STXChart.isDailyInterval(this.layout.interval))this.setDisplayDates(chart.masterData);}
this.createDataSet();}
;STXChart.prototype.setLocale=function(locale){var V07="percent",u77="short",C24="mer",s07="it",p24="ig",z9E="2",v77="2-digit";if(typeof Intl==D94)return ;if(p9s.e9G(this.locale,locale)){this.locale=locale;}
else{return ;}
this.internationalizer={}
;this.internationalizer.hourMinute=new Intl.DateTimeFormat(this.locale,{hour:w7E,minute:w7E,hour12:c47}
);this.internationalizer.hourMinuteSecond=new Intl.DateTimeFormat(this.locale,{hour:w7E,minute:w7E,second:w7E,hour12:c47}
);this.internationalizer.mdhm=new Intl.DateTimeFormat(this.locale,{year:v77,month:(z9E+r1E+P6E+p24+s07),day:v77,hour:v77,minute:v77}
);this.internationalizer.monthDay=new Intl.DateTimeFormat(this.locale,{month:w7E,day:w7E}
);this.internationalizer.yearMonthDay=new Intl.DateTimeFormat(this.locale,{year:w7E,month:(i9E+p9s.u1E+C24+J8E+u4E),day:w7E}
);this.internationalizer.month=new Intl.DateTimeFormat(this.locale,{month:u77}
);this.internationalizer.numbers=new Intl.NumberFormat(this.locale);this.internationalizer.priceFormatters=[];this.internationalizer.priceFormatters[p9s.T94]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:p9s.T94,minimumFractionDigits:p9s.T94}
);this.internationalizer.priceFormatters[p9s.y94]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:p9s.y94,minimumFractionDigits:p9s.y94}
);this.internationalizer.priceFormatters[p9s.M14]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:p9s.M14,minimumFractionDigits:p9s.M14}
);this.internationalizer.priceFormatters[p9s.S14]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:p9s.S14,minimumFractionDigits:p9s.S14}
);this.internationalizer.priceFormatters[p9s.I94]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:p9s.I94,minimumFractionDigits:p9s.I94}
);this.internationalizer.priceFormatters[p9s.w94]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:p9s.w94,minimumFractionDigits:p9s.w94}
);this.internationalizer.percent=new Intl.NumberFormat(this.locale,{style:V07,minimumFractionDigits:p9s.M14,maximumFractionDigits:p9s.M14}
);this.internationalizer.percent0=new Intl.NumberFormat(this.locale,{style:V07,minimumFractionDigits:p9s.T94,maximumFractionDigits:p9s.T94}
);this.internationalizer.percent1=new Intl.NumberFormat(this.locale,{style:V07,minimumFractionDigits:p9s.y94,maximumFractionDigits:p9s.y94}
);this.internationalizer.percent2=new Intl.NumberFormat(this.locale,{style:V07,minimumFractionDigits:p9s.M14,maximumFractionDigits:p9s.M14}
);this.internationalizer.percent3=new Intl.NumberFormat(this.locale,{style:(p9s.f9E+D4E+u4E+y4E+M2E),minimumFractionDigits:p9s.S14,maximumFractionDigits:p9s.S14}
);this.internationalizer.percent4=new Intl.NumberFormat(this.locale,{style:V07,minimumFractionDigits:p9s.I94,maximumFractionDigits:p9s.I94}
);STX.createMonthArrays(this,this.internationalizer.month,this.locale);}
;STXChart.prototype.importLayout=function(config,params){var E1E="pd",P14="reak",f37="Fe",W84="tho",g4E="' ",J24="Layout",o7E=" '",R14="rou",a84="oad",q67="NING",d1E="AR";if(typeof params!=="object"){params={managePeriodicity:arguments[1],preserveTicksAndCandleWidth:arguments[2]}
;}
var interval=this.layout.interval,periodicity=this.layout.periodicity,timeUnit=this.layout.timeUnit,candleWidth=this.layout.candleWidth,serializedDrawings=this.serializeDrawings();this.abortDrawings();this.currentlyImporting=true;this.overlays={}
;var view=STX.clone(config);for(var s in this.layout.studies){var sd=this.layout.studies[s];STX.Studies.removeStudy(this,sd);}
if(view){var priorPanels=STX.shallowClone(this.panels);this.panels={}
;STX.dataBindSafeAssignment(this.layout,STX.clone(view));if(params.preserveTicksAndCandleWidth){this.layout.candleWidth=candleWidth;}
else{if(!this.layout.candleWidth)this.setCandleWidth(8,this.chart);}
if(p9s.L9G(this.layout.candleWidth,this.minimumCandleWidth))this.layout.candleWidth=this.minimumCandleWidth;var panels=view.panels;this.layout.panels={}
;for(var p in panels){var panel=panels[p];this.stackPanel(panel.display,p,panel.percent,panel.chartName);}
if(STX.isEmpty(panels)){this.stackPanel("chart","chart",1,(u4E+f8E+p9s.F1E+N1E));}
for(var panelName in priorPanels){var oldPanel=priorPanels[panelName],newPanel=this.panels[panelName];if(newPanel){this.container.removeChild(newPanel.holder);this.container.removeChild(oldPanel.handle);var copyFields={"holder":true,"subholder":true,"display":true}
;for(var f in copyFields){newPanel[f]=oldPanel[f];}
this.configurePanelControls(newPanel);if(p9s.A9G(oldPanel.chart.panel,oldPanel))oldPanel.chart.panel=newPanel;}
else{this.privateDeletePanel(oldPanel);}
}
this.adjustPanelPositions();this.storePanels();var studies=STX.clone(this.layout.studies);delete  this.layout.studies;for(var ss in studies){var study=studies[ss];STX.Studies.addStudy(this,study.type,study.inputs,study.outputs,study.parameters,study.panel);}
}
if(typeof (this.layout.chartType)=="undefined")this.layout.chartType=(N2E+J8E+i9E+y4E);this.adjustPanelPositions();this.layout.interval=interval;this.layout.periodicity=periodicity;this.layout.timeUnit=timeUnit;if(view&&params.managePeriodicity){interval=view.interval;periodicity=view.periodicity;timeUnit=view.timeUnit;if(isNaN(periodicity))periodicity=1;if(!interval)interval="day";if(p9s.o9G(interval,this.layout.interval)||p9s.a9G(periodicity,this.layout.periodicity)){this.setPeriodicityV2(periodicity,interval);}
else{this.createDataSet();}
}
else{this.createDataSet();}
if(config.symbols){if(!this.quoteDriver||!this.quoteDriver.quoteFeed){console.log((R5E+d1E+q67+Z47+N2E+a84+J8E+i9E+p9s.j8E+v4E+l6E+v4E+j1E+Q07+m2E+L6E+Y5E+v4E+N1E+I8E+R14+p9s.j8E+I8E+o7E+J8E+m2E+p9s.f9E+Q9E+i47+J24+g4E+l37+J8E+W84+p9s.u1E+N1E+v4E+l6E+v4E+F14+L7E+N1E+y4E+f37+C0E+v4E+m2E+l6E+Q07+v4E+L6E+P14+v4E+P6E+E24+l6E+v4E+p9s.u1E+E1E+l6E+N1E+y4E+j1E));}
this.newChart(config.symbols[0].symbol,null,this.chart,params.symbolLoaded,{periodicity:periodicity,span:{multiplier:config.symbols[0].interval,base:config.symbols[0].timeUnit}
}
);for(var smbl,i=1;p9s.b9G(i,config.symbols.length);++i){smbl=config.symbols[i];this.addSeries(smbl.symbol,smbl.parameters);}
}
this.reconstructDrawings(serializedDrawings);this.draw();this.currentlyImporting=false;this.updateListeners("layout");}
;STXChart.prototype.exportLayout=function(withSymbols){var I47="ies",J1E="stud",u47="panels",Y8E="studies",obj={}
;for(var field in this.layout){if(p9s.W9G(field,Y8E)&&p9s.F9G(field,u47)){obj[field]=STX.clone(this.layout[field]);}
else if(p9s.g9G(field,(J1E+I47))){obj.studies={}
;}
else if(p9s.P9G(field,u47)){obj.panels={}
;}
}
for(var panelName in this.panels){var panel=obj.panels[panelName]={}
,p=this.panels[panelName];panel.percent=p.percent;panel.display=p.display;panel.chartName=p.chart.name;}
for(var studyName in this.layout.studies){var study=obj.studies[studyName]={}
,s=this.layout.studies[studyName];study.type=s.type;study.inputs=STX.clone(s.inputs);study.outputs=STX.clone(s.outputs);study.panel=s.panel;study.parameters=STX.clone(s.parameters);}
if(withSymbols){obj.symbols=this.getSymbols(w8E);}
return obj;}
;STXChart.prototype.doCleanupGaps=function(quotes,chart){if(!this.cleanupGaps)return quotes;if(p9s.G9G(this.layout.interval,"tick"))return quotes;if(quotes&&!quotes.length)return quotes;if(!chart)chart=this.chart;var interval=this.layout.interval;if(p9s.c9G(interval,"month")||p9s.Q9G(interval,"week")){if(this.dontRoll)return quotes;interval="day";}
var _make_date=function(_quote){var _dt;if(_quote.DT){_dt=_quote.DT;}
else{_dt=STX.strToDateTime(_quote.Date);}
return _dt;}
,new_quotes=[],currentQuote=quotes[0];new_quotes.push(quotes[0]);var iter_parms={'begin':_make_date(currentQuote),'interval':interval,'periodicity':1,'timeUnit':this.layout.timeUnit,'inZone':this.dataZone,'outZone':this.dataZone}
,iter=chart.market.newIterator(iter_parms);for(var i=1;p9s.M9G(i,quotes.length);i++){var nextQuote=quotes[i],mdt=iter.next(),qdt=_make_date(nextQuote);while(p9s.y2G(mdt,qdt)){new_quotes.push({DT:mdt,Open:currentQuote.Close,High:currentQuote.Close,Low:currentQuote.Close,Close:currentQuote.Close,Volume:0,Adj_Close:currentQuote.Adj_Close}
);mdt=iter.next();}
new_quotes.push(nextQuote);currentQuote=nextQuote;}
return new_quotes;}
;STXChart.Driver=function(stx,quoteFeed,behavior){this.tagalongs={}
;this.stx=stx;this.quoteFeed=quoteFeed;this.behavior=behavior;this.loadingNewChart=c47;this.intervalTimer=p9s.r2E;this.updatingChart=c47;this.updateChartLoop();}
;STXChart.Driver.prototype.die=function(){if(this.intervalTimer)window.clearInterval(this.intervalTimer);}
;STXChart.Driver.prototype.updateSubscriptions=function(){if(this.quoteFeed.checkSubscriptions)this.quoteFeed.checkSubscriptions(this.stx);}
;STXChart.Driver.prototype.attachTagAlongQuoteFeed=function(feed){if(!this.tagalongs[feed.label]){this.tagalongs[feed.label]={label:feed.label,quoteFeed:feed.quoteFeed,behavior:feed.behavior?feed.behavior:{}
,count:p9s.T94}
;}
this.tagalongs[feed.label].count++;}
;STXChart.Driver.prototype.detachTagAlongQuoteFeed=function(feed){var tagalong=this.tagalongs[feed.label];tagalong.count--;if(!tagalong.count)this.tagalongs[feed.label]=p9s.r2E;}
;STXChart.Driver.prototype.loadDependents=function(params){var field,syms={}
,stx=params.stx,series=stx.chart.series;function getStartDate(symbol){for(var c=p9s.T2G(stx.masterData.length,1);p9s.f2G(c,0);c--){if(stx.masterData[c]&&typeof stx.masterData[c][symbol]!="undefined"){return STX.strToDateTime(stx.masterData[c].Date);}
}
return params.startDate;}
for(field in series){if(!series[field].parameters.data||!series[field].parameters.data.useDefaultQuoteFeed)continue;syms[field]=true;}
for(var p in stx.panels){if(stx.panels[p].studyQuotes){for(var sq in stx.panels[p].studyQuotes)syms[sq]=true;}
}
var arr=[];for(field in syms){var seriesParam=STX.shallowClone(params.originalState);seriesParam.symbol=field;if(series[field]&&series[field].parameters.symbolObject)seriesParam.symbolObject=series[field].parameters.symbolObject;if(seriesParam.update){seriesParam.startDate=getStartDate(field);}
else{if(!seriesParam.startDate)seriesParam.startDate=stx.masterData[0].DT;if(!seriesParam.endDate)seriesParam.endDate=stx.masterData[p9s.k2G(stx.masterData.length,1)].DT;}
arr.push(seriesParam);}
if(!arr.length){stx.createDataSet();stx.draw();return ;}
this.quoteFeed.multiFetch(arr,function(results){var K94=9062251,x8E=1222239,S4E=869623858,T0E=716719555;var A14=-T0E,D14=-S4E,U14=p9s.M14;for(var X14=p9s.y94;p9s.p54.q54(X14.toString(),X14.toString().length,x8E)!==A14;X14++){this.findHighlights(c47,C2E);plugin.createDataSet(this,whichChart);leftDT.setSeconds(p9s.T94);this.storePanels();length++;U14+=p9s.M14;}
if(p9s.p54.q54(U14.toString(),U14.toString().length,K94)!==D14){this.drawCurrentHR();return H74/r74;}
for(var i=0;p9s.m2G(i,results.length);i++){var result=results[i];if(!result.dataCallback.error){var field=null;if(stx.chart.series[result.params.symbol]){field=stx.chart.series[result.params.symbol].parameters.field;}
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
;STXChart.Driver.prototype.updateChart=function(){if(this.updatingChart)return ;if(this.loadingNewChart)return ;var howManyToGet=STX.objLength(this.stx.charts),howManyReturned=0,interval=this.stx.layout.interval,timeUnit=this.stx.layout.timeUnit;function closure(self,params,symbol){if(self.behavior.prefetchAction)self.behavior.prefetchAction("updateChart");return function(dataCallback){howManyReturned++;if(p9s.U2G(symbol,params.chart.symbol)&&p9s.v2G(interval,self.stx.layout.interval)&&p9s.n2G(timeUnit,self.stx.layout.timeUnit)){if(!dataCallback.error){var lastBarAdded=false;if(!params.missingBarsCreated){if(params.chart.masterData&&params.chart.masterData.length&&dataCallback.quotes&&p9s.q2G(dataCallback.quotes.length,0)){var lastRecord=params.chart.masterData[p9s.l2G(params.chart.masterData.length,1)];if((dataCallback.quotes[0].DT&&p9s.B2G(lastRecord.DT,dataCallback.quotes[0].DT))||(dataCallback.quotes[0].Date&&p9s.R2G(lastRecord.Date,dataCallback.quotes[0].Date))){dataCallback.quotes.unshift(lastRecord);lastBarAdded=true;}
}
dataCallback.quotes=self.stx.doCleanupGaps(dataCallback.quotes,params.chart);if(lastBarAdded)dataCallback.quotes.shift();}
self.stx.appendMasterData(dataCallback.quotes,params.chart,{noCreateDataSet:true}
);params.chart.attribution=dataCallback.attribution;}
else{self.quoteFeed.announceError(params.originalState,dataCallback);}
}
else{return ;}
if(p9s.t2G(howManyReturned,howManyToGet)){self.updatingChart=false;}
self.executeTagAlongs(params);if(self.behavior.callback){self.behavior.callback(params);}
self.loadDependents(params);}
;}
for(var chartName in this.stx.charts){var chart=this.stx.charts[chartName];if(!chart.symbol)continue;var params=this.makeParams(chart.symbol,chart.symbolObject,chart);if(chart.masterData&&chart.masterData.length)params.startDate=chart.masterData[p9s.r2G(chart.masterData.length,1)].DT;params.update=true;params.originalState=STX.shallowClone(params);this.updatingChart=true;var closureCB=closure(this,params,chart.symbol);if(this.stx.isEquationChart(params.symbol)){STX.fetchEquationChart(params,closureCB);}
else{this.quoteFeed.fetch(params,closureCB);}
}
}
;STXChart.Driver.prototype.updateChartLoop=function(){if(this.behavior.noUpdate)return ;function closure(self){return function(){if(self.behavior.noUpdate)return ;self.updateChart();}
;}
if(this.behavior.refreshInterval)this.intervalTimer=window.setInterval(closure(this),p9s.d2G(this.behavior.refreshInterval,U07));}
;STXChart.Driver.prototype.resetRefreshInterval=function(newInterval){if(this.intervalTimer)window.clearInterval(this.intervalTimer);this.behavior.refreshInterval=newInterval;this.updateChartLoop();}
;STXChart.Driver.prototype.loadAll=function(chart,cb){var self=this,count=p9s.T94;function closure(){return function(response){var O4E="uot",T4E="ly",h6E="ct",P47="orr",i1E="lem",f6E="mp",y67="labl",m07="vai",p8E="ore",q2E=", ";if(response)cb(response);else if(!chart.moreAvailable){cb(p9s.r2E);}
else if(p9s.j2G(count++,k67)){cb((D4E+z37+p9s.F1E+q2E+m2E+p8E+a47+m07+y67+y4E+v4E+i9E+Q9E+N1E+v4E+J8E+f6E+i1E+k6E+N1E+C0E+v4E+u4E+P47+y4E+h6E+T4E+v4E+J8E+i9E+v4E+F14+O4E+y4E+Y7E+y4E+C0E));}
else{self.checkLoadMore(chart,C2E,C2E,closure());}
}
;}
this.checkLoadMore(chart,C2E,C2E,closure());}
;STXChart.Driver.prototype.checkLoadMore=function(chart,forceLoadMore,fetchMaximumBars,cb){if(!chart.moreAvailable){if(cb)cb();return ;}
var interval=this.stx.layout.interval,timeUnit=this.stx.layout.timeUnit;function closure(self,params){if(self.behavior.prefetchAction)self.behavior.prefetchAction("checkLoadMore");return function(dataCallback){if(p9s.x2G(params.symbol,params.chart.symbol)&&p9s.N8G(interval,self.stx.layout.interval)&&p9s.z8G(timeUnit,self.stx.layout.timeUnit)){if(!params.loadMore)params.chart.loadingMore=false;if(!dataCallback.error){if(!params.missingBarsCreated){dataCallback.quotes.push(params.chart.masterData[0]);dataCallback.quotes=self.stx.doCleanupGaps(dataCallback.quotes,params.chart);dataCallback.quotes.pop();}
params.chart.moreAvailable=dataCallback.moreAvailable;var fullMasterData=params.loadMoreReplace?dataCallback.quotes:dataCallback.quotes.concat(params.chart.masterData);self.stx.setMasterData(fullMasterData,params.chart);self.stx.createDataSet();self.stx.draw();params.startDate=params.chart.masterData[0].DT;self.executeTagAlongs(params);if(self.behavior.callback){self.behavior.callback(params);}
self.loadDependents(params);}
else{self.quoteFeed.announceError(params.originalState,dataCallback);}
params.chart.loadingMore=false;if(cb)cb(null);}
else{return ;}
}
;}
var fetching=chart.loadingMore;if(!this.behavior.noLoadMore){if(!this.stx.maxDataSetSize||p9s.h8G(chart.dataSet.length,this.stx.maxDataSetSize)){if((p9s.I8G(chart.dataSet.length,0)&&p9s.Z8G(chart.scroll,chart.dataSet.length))||forceLoadMore){if(!chart.loadingMore){chart.initialScroll=chart.scroll;chart.loadingMore=true;var params=this.makeParams(chart.symbol,chart.symbolObject,chart);params.endDate=chart.masterData[0].DT;params.originalState=STX.shallowClone(params);if(this.stx.fetchMaximumBars[this.stx.layout.aggregationType])fetchMaximumBars=true;if(fetchMaximumBars){params.fetchMaximumBars=true;params.ticks=Math.max(20000,params.ticks);}
var closureCB=closure(this,params);if(this.stx.isEquationChart(params.symbol)){STX.fetchEquationChart(params,closureCB);}
else{this.quoteFeed.fetch(params,closureCB);}
fetching=true;}
}
}
}
if(chart.loadingMore){chart.initialScroll=chart.scroll;}
if(!fetching&&cb)cb(null);}
;STXChart.Driver.prototype.barsToFetch=function(params){var J0E="ee",o24="nth";if(params.isSeries)return params.stx.masterData.length;var interval=this.stx.layout.interval,p=params.stx.layout.periodicity;if((p9s.X8G(interval,(m2E+Q9E+o24))||p9s.D8G(interval,"week"))&&!this.stx.dontRoll){p*=(p9s.J8G(interval,(l37+J0E+d2E)))?7:30;}
var bars=p9s.p8G(params.stx.chart.maxTicks,p);return bars;}
;STXChart.Driver.prototype.makeParams=function(symbol,symbolObject,chart){var l47="delayed",interval=this.stx.layout.interval,ticks=this.barsToFetch({stx:this.stx}
);if((p9s.E8G(interval,E94)||p9s.Y8G(interval,z3E))&&!this.stx.dontRoll){interval=r84;}
var params=STX.shallowClone(this.behavior);STX.extend(params,{stx:this.stx,symbol:symbol,symbolObject:symbolObject,chart:chart,interval:interval,extended:this.stx.layout.extended,period:p9s.y94,feed:l47,ticks:ticks}
,C2E);if(!params.symbolObject)params.symbolObject={symbol:symbol}
;if(!isNaN(params.interval)){params.period=params.interval;params.interval=this.stx.layout.timeUnit;if(!params.interval)params.interval=e8E;}
if(params.pts)params.ticks=Math.max(params.ticks,U07);return params;}
;STXChart.Driver.prototype.newChart=function(params,cb){var stx=this.stx,symbol=params.symbol,interval=stx.layout.interval,timeUnit=stx.layout.timeUnit,chart=params.chart;chart.moreAvailable=false;chart.attribution=null;var qparams=this.makeParams(symbol,params.symbolObject,chart);STX.extend(qparams,params,true);if(stx.fetchMaximumBars[stx.layout.aggregationType]){qparams.ticks=Math.max(20000,qparams.ticks);qparams.fetchMaximumBars=true;}
function closure(self,qparams){if(self.behavior.prefetchAction)self.behavior.prefetchAction("newChart");return function(dataCallback){if(p9s.V8G(symbol,qparams.chart.symbol)&&p9s.i8G(interval,stx.layout.interval)&&p9s.H8G(timeUnit,stx.layout.timeUnit)){if(!dataCallback.error&&p9s.K8G(dataCallback.error,0)&&dataCallback.quotes&&p9s.C8G(dataCallback.quotes.length,0)){if(!qparams.missingBarsCreated)dataCallback.quotes=stx.doCleanupGaps(dataCallback.quotes,params.chart);stx.setMasterData(dataCallback.quotes,qparams.chart);qparams.chart.moreAvailable=dataCallback.moreAvailable;qparams.chart.attribution=dataCallback.attribution;stx.createDataSet();if(params.initializeChart)stx.initializeChart();stx.home();}
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
;STXChart.prototype.attachTagAlongQuoteFeed=function(feed){var X94="bel",M9E="ng",v9E="ni",d24="ssig",e47="Feed",C07="Quote",W8E="lo",w37="empt",P24="Att";if(!feed.label){console.log((P24+w37+v4E+N1E+Q9E+v4E+l6E+x77+o37+j94+l6E+p9s.j8E+a47+W8E+i9E+p9s.j8E+C07+e47+v4E+l37+J8E+N1E+v0E+p9s.u1E+N1E+v4E+l6E+d24+v9E+M9E+v4E+l6E+v4E+N2E+l6E+X94));return ;}
this.quoteDriver.attachTagAlongQuoteFeed(feed);}
;STXChart.prototype.detachTagAlongQuoteFeed=function(feed){this.quoteDriver.detachTagAlongQuoteFeed(feed);}
;STX.Comparison=function(){}
;H(c47);STX.Comparison.priceToPercent=function(stx,chart,price){return p9s.S8G(Math.round(((price-STX.Comparison.baseline)/STX.Comparison.baseline*B07)*w07),w07);}
;STX.Comparison.percentToPrice=function(stx,chart,percent){return p9s.s74(STX.Comparison.baseline,(p9s.y94+(percent/B07)));}
;STX.Comparison.stopSort=function(lhs,rhs){return p9s.u74(lhs,rhs);}
;STX.Comparison.createComparisonSegmentInner=function(stx,chart){var fields=[],field;for(field in chart.series){if(chart.series[field].parameters.isComparison){fields.push(field);}
}
var priceFields=["Close","Open","High","Low","iqPrevClose"];chart.dataSegment=[];var firstQuote=null,firstTick=p9s.O74(chart.dataSet.length,chart.scroll),lastTick=firstTick+chart.maxTicks,stopPointer=0,stops=[],i;for(i=0;p9s.w74(i,stx.drawingObjects.length);i++){var drawing=stx.drawingObjects[i];if(p9s.e74(drawing.name,"comparison_stop"))if(p9s.L74(drawing.tick,firstTick)&&p9s.A74(drawing.tick,lastTick))stops.push(drawing.tick);}
stops.sort(STX.Comparison.stopSort);var transformsToProcess=chart.maxTicks+3;for(i=0;p9s.o74(i,transformsToProcess);i++){if(p9s.a74(i,transformsToProcess))i=-1;position=firstTick+i;if(p9s.b74(position,chart.dataSet.length)&&p9s.W74(position,0)){var quote=chart.dataSet[position];if(!firstQuote){firstQuote=STX.clone(quote);}
if(!quote.transform)quote.transform={"cache":{}
,"DT":quote.DT,"Date":quote.Date}
;STX.Comparison.baseline=firstQuote.Close;var j;for(j=0;p9s.F74(j,priceFields.length);j++){field=priceFields[j];if(quote[field]||p9s.g74(quote[field],0))quote.transform[field]=p9s.P74(Math.round(((quote[field]-STX.Comparison.baseline)/STX.Comparison.baseline*100)*10000),10000);}
var s=stx.layout.studies;if(s){for(var n in s){var sd=s[n];if(p9s.G74(stx.panels[sd.panel].name,sd.chart.name))continue;for(field in sd.outputMap){if(quote[field]||p9s.c74(quote[field],0))quote.transform[field]=p9s.Q74(Math.round(((quote[field]-STX.Comparison.baseline)/STX.Comparison.baseline*100)*10000),10000);}
if(sd.referenceOutput&&(quote[sd.referenceOutput+" "+sd.name]||p9s.M74(quote[sd.referenceOutput+" "+sd.name],0)))quote.transform[sd.referenceOutput+" "+sd.name]=p9s.y64(Math.round(((quote[sd.referenceOutput+" "+sd.name]-STX.Comparison.baseline)/STX.Comparison.baseline*100)*10000),10000);}
}
for(j in stx.plugins){var plugin=stx.plugins[j];if(!plugin.transformOutputs)continue;for(field in plugin.transformOutputs){if(quote[field]||p9s.T64(quote[field],0))quote.transform[field]=p9s.f64(Math.round(((quote[field]-STX.Comparison.baseline)/STX.Comparison.baseline*100)*10000),10000);}
}
var createAStop=false;if(stops&&p9s.k64(stopPointer,stops.length)){if(p9s.m64(position,stops[stopPointer])){createAStop=true;stopPointer++;}
}
var mouseStop=null;if(stx.activeDrawing&&p9s.U64(stx.activeDrawing.name,"comparison_stop")){mouseStop=stx.activeDrawing.tick;}
var current;if(createAStop||p9s.v64(position,mouseStop)){for(j=0;p9s.n64(j,fields.length);j++){field=fields[j];current=quote[field];firstQuote[field]=p9s.q64(current,(1+(quote.transform.Close/100)));}
}
for(j=0;p9s.l64(j,fields.length);j++){field=fields[j];current=quote[field];if(current||p9s.B64(current,0)){var baseline=firstQuote[field];if(!baseline&&p9s.R64(baseline,0)){firstQuote[field]=baseline=p9s.t64(current,(1+(quote.transform.Close/100)));}
quote.transform[field]=p9s.r64(Math.round(((current-baseline)/baseline*100)*10000),10000);}
}
chart.dataSegment.push(quote);}
else if(p9s.d64(position,0)){chart.dataSegment.push(null);}
if(p9s.j64(i,0))break;}
stx.clearPixelCache();return true;}
;STX.Comparison.createComparisonSegment=function(){var R6E=((0x86,0xA1)>(68.3E1,0xD9)?(0x1B0,17.):(8.46E2,1.18E3)>=(74.8E1,110.5E1)?(0x1BA,7008272):(1.475E3,0x152)),s0E=4254563,U1E=853937215,M3E=1665136070;var J14=-M3E,n14=U1E,o14=p9s.M14;for(var v14=p9s.y94;p9s.p54.q54(v14.toString(),v14.toString().length,s0E)!==J14;v14++){stx.initializeChart();STX.safeClickTouch(panel.edit,editFunction);STX.unappendClassName(panel.solo,B9E);o14+=p9s.M14;}
if(p9s.p54.q54(o14.toString(),o14.toString().length,R6E)!==n14){context.save();return M5G-s1G;}
for(var chartName in this.charts){var chart=this.charts[chartName];if(chart.isComparison)STX.Comparison.createComparisonSegmentInner(this,chart);}
}
;STX.Comparison.priceFormat=function(stx,panel,price){var N47=0.001;if(p9s.x64(price,p9s.r2E)||typeof price==D94)return d5E;var priceTick=panel.yAxis.priceTick;if(stx.internationalizer){if(p9s.N44(priceTick,p9s.y94))price=stx.internationalizer.percent0.format(p9s.z44(price,B07));else if(p9s.h44(priceTick,g0E))price=stx.internationalizer.percent1.format(p9s.I44(price,B07));else if(p9s.Z44(priceTick,q94))price=stx.internationalizer.percent2.format(p9s.X44(price,B07));else if(p9s.D44(priceTick,N47))price=stx.internationalizer.percent3.format(p9s.J44(price,B07));else price=stx.internationalizer.percent4.format(price);}
else{if(p9s.p44(priceTick,p9s.y94))price=price.toFixed(p9s.T94)+S2E;else if(p9s.E44(priceTick,g0E))price=price.toFixed(p9s.y94)+S2E;else if(p9s.Y44(priceTick,q94))price=price.toFixed(p9s.M14)+S2E;else if(p9s.V44(priceTick,N47))price=price.toFixed(p9s.S14)+S2E;else price=price.toFixed(p9s.I94)+S2E;}
if(p9s.i44(parseFloat(price),p9s.T94)&&p9s.H44(price.charAt(p9s.T94),r1E)){price=price.substring(p9s.y94);}
return price;}
;STX.Comparison.correlate=function(stx,symbol){var f5E="cor";if(!STX.Comparison.requestCorrelation||p9s.K44(correlationPeriod,0))return ;var correlationPeriod=parseInt($$$(".stxCorrelate .stx-input-field").value,10),corrPanel=stx.panels[STX.Comparison.correlationPanel+" ("+correlationPeriod+")"],inputs={"id":STX.Comparison.correlationPanel+" ("+correlationPeriod+")","Period":correlationPeriod,"Compare To":[]}
,outputs={}
,panelName=null;if(corrPanel){for(var i=0;p9s.C44(i,stx.layout.studies[corrPanel.name].inputs["Compare To"].length);i++){inputs["Compare To"].push(stx.layout.studies[corrPanel.name].inputs["Compare To"][i]);}
for(var o in stx.layout.studies[corrPanel.name].outputs){outputs[o]=stx.layout.studies[corrPanel.name].outputs[o];}
panelName=corrPanel.name;}
inputs["Compare To"].push(symbol);outputs["Result "+symbol]=STX.Comparison.colorSelection;STX.Studies.addStudy(stx,(f5E+p9s.F1E+J5E),inputs,outputs,null,panelName);for(var panel in stx.panels){if(p9s.S44(stx.panels[panel].name.indexOf(STX.Comparison.correlationPanel),0)){var compareArray=stx.layout.studies[stx.panels[panel].name].inputs["Compare To"];for(var ii=0;p9s.s04(ii,compareArray.length);ii++){if(p9s.u04(compareArray[ii],symbol)){stx.layout.studies[stx.panels[panel].name].outputs["Result "+symbol]=STX.Comparison.colorSelection;}
}
}
}
}
;STX.Comparison.toggleCorrelate=function(stx){var H5E=".stxCorrelate .stx-checkbox";STX.Comparison.requestCorrelation=!STX.Comparison.requestCorrelation;var display=$$$(H5E);if(display){STX.unappendClassName(display,(!STX.Comparison.requestCorrelation).toString());STX.appendClassName(display,STX.Comparison.requestCorrelation.toString());}
}
;STXChart.prototype.setComparison=function(onOff,chart){var V2E="string";if(!chart)chart=this.chart;if(typeof chart==V2E)chart=this.charts[chart];if(!chart.isComparison&&onOff){this.setTransform(chart,STX.Comparison.priceToPercent,STX.Comparison.percentToPrice);chart.panel.yAxis.priceFormatter=STX.Comparison.priceFormat;chart.panel.yAxis.whichSet=s94;}
else if(chart.isComparison&&!onOff){this.unsetTransform(chart);chart.panel.yAxis.priceFormatter=p9s.r2E;chart.panel.yAxis.whichSet=p9E;}
chart.isComparison=onOff;}
;STX.Comparison.startPlugin=function(){var F2E="aSegm";STXChart.prototype.prepend((u4E+O9E+y4E+p7E+l6E+N1E+F2E+y4E+M2E),STX.Comparison.createComparisonSegment);}
;STX.Comparison.removeSeries=function(stx,field){}
;STX.SearchableWordList=function(list,maxResults,contains){if(!list)return ;if(!maxResults)maxResults=50;if(!contains)contains=false;var container={"records":[],"words":[]}
;for(var r=0;p9s.O04(r,list.length);r++){var record=list[r];if(!record.name)record.name=record.id;record.index=p9s.w04(container.records.push(record),1);var descs=record.name.split(" ");if(record.keywords)descs=descs.concat(record.keywords.split(" "));for(var j=0;p9s.e04(j,descs.length);j++){var word=descs[j].toUpperCase(),subIdx="_",subIdx2="_";if(p9s.L04(word.charCodeAt(0),33)&&p9s.A04(word.charCodeAt(0),126))subIdx=word.charAt(0);if(!container.words[subIdx])container.words[subIdx]=[];if(p9s.o04(word.length,1)){if(p9s.a04(word.charCodeAt(1),33)&&p9s.b04(word.charCodeAt(1),126))subIdx2=word.charAt(1);}
else{subIdx2=" ";}
if(!container.words[subIdx][subIdx2])container.words[subIdx][subIdx2]=[];container.words[subIdx][subIdx2].push({index:record.index,word:word}
);}
}
this.lookup=function(input,category,cb){var results=[];function sortId(a,b){if(p9s.W04(a.id,b.id))return 1;else if(p9s.F04(a.id,b.id))return -1;return p9s.g04(a.weight,b.weight)?1:-1;}
function sortWeight(a,b){if(p9s.P04(a.weight,b.weight))return 1;else if(p9s.G04(a.weight,b.weight))return -1;return p9s.c04(a.name,b.name)?1:-1;}
function sortDescWeight(a,b){a.weight=0;b.weight=0;for(var j=0;p9s.Q04(j,keys.length);j++){var KEY=keys[j].toUpperCase(),aIndex=a.name.toUpperCase().indexOf(KEY),bIndex=b.name.toUpperCase().indexOf(KEY);if(aIndex==-1)return 1;else if(bIndex==-1)return -1;a.weight+=aIndex;b.weight+=bIndex;}
if(p9s.M04(a.weight,b.weight))return 1;else if(p9s.y34(a.weight,b.weight))return -1;return p9s.T34(a.name,b.name)?1:-1;}
function noDups(res){var returnArray=[],previousId="";for(var r=0;p9s.f34(r,res.length);r++){if(p9s.k34(previousId,res[r].id))continue;returnArray.push(res[r]);previousId=res[r].id;}
return returnArray;}
if(input&&container){var foundBitMap=[],keyword=input.toUpperCase(),exacts=[],d,entry;for(d=0;p9s.m34(d,container.records.length);d++){entry=container.records[d];if(foundBitMap[entry.index])continue;if(category&&p9s.U34(entry.category,category))continue;var name=entry.name.toUpperCase();if(p9s.v34(keyword,"*")){exacts.push(STX.extend(container.records[entry.index],{weight:0}
));foundBitMap[entry.index]=true;}
else{var i=name.indexOf(keyword);if(i>-1){var weight=p9s.n34(name.length,keyword.length);if(!contains&&p9s.q34(i,0))continue;(weight?results:exacts).push(STX.extend(container.records[entry.index],{weight:weight}
));foundBitMap[entry.index]=true;}
}
}
var keys=keyword.split(" "),k1="_",k2="_",myKey=keys[0].toUpperCase(),descResults=[];if(p9s.l34(myKey.charCodeAt(0),33)&&p9s.B34(myKey.charCodeAt(0),126))k1=myKey.charAt(0);if(p9s.R34(myKey.length,1)){if(p9s.t34(myKey.charCodeAt(1),33)&&p9s.r34(myKey.charCodeAt(1),126))k2=myKey.charAt(1);}
else{k2=" ";}
if(container.words[k1]){for(var kk in container.words[k1]){if(p9s.d34(kk.length,1))continue;if(p9s.j34(k2," "))kk=k2;for(d=0;container.words[k1][kk]&&p9s.x34(d,container.words[k1][kk].length);d++){entry=container.words[k1][kk][d];if(p9s.N54(entry.word.toUpperCase().indexOf(myKey),0))continue;if(foundBitMap[entry.index])continue;if(category&&p9s.z54(container.records[entry.index].category,category))continue;descResults.push(STX.clone(container.records[entry.index]));foundBitMap[entry.index]=true;}
if(p9s.h54(k2," "))break;}
}
for(var extraKeys=1;p9s.I54(extraKeys,keys.length);extraKeys++){myKey=keys[extraKeys].toUpperCase();for(var res=p9s.Z54(descResults.length,1);p9s.X54(res,0);res--){var words=descResults[res].name.split(" ");if(descResults[res].keywords)words=words.concat(descResults[res].keywords.split(" "));var match=false;for(var wd=0;p9s.D54(wd,words.length);wd++){if(p9s.J54(words[wd].toUpperCase().indexOf(myKey),0)){match=true;break;}
}
if(!match)descResults.splice(res,1);}
}
exacts.sort(sortId);exacts=noDups(exacts);results.sort(sortId);results=noDups(results);results.length=Math.min(results.length,maxResults);descResults.sort(sortId);descResults=noDups(descResults);results=exacts.sort(sortWeight).concat(results.sort(sortWeight),descResults.sort(sortDescWeight));results.length=Math.min(results.length,maxResults);}
if(cb)cb(results);else return results;}
;}
;return _exports;}
{if(typeof define===(Q4E+i9E+Y07+s5E)&&define.amd){define(["stxTimeZoneData","stxThirdParty","stx"],function(_stxTimeZoneData,_stxThirdParty,_stx){return _stxKernel_js(_stxThirdParty,_stx);}
);}
else{var K=function(C){_stxThirdParty=C.STXThirdParty;}
;var _stxThirdParty={}
;if(typeof (window.STXThirdParty)!=D94)K(window);var _stx={"STX":window.STX,"STXChart":window.STXChart,"$$":window.$$,"$$$":window.$$$}
;_stxKernel_js(_stxThirdParty,_stx);}
}
}
)();