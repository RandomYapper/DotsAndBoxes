#include<bits/stdc++.h>
using namespace std;
int main(){
    int t;
    cin>>t;
    while(t--){
        int n;
        cin>>n;
        string s ;
        cin>>s;
        int count;
        count=0;
        // unordered_set<string> mySet;
        unordered_set<char> alpha;
        for(int i =0;i<s.length();i++){
            if (alpha.find(s[i])==alpha.end()){
                count+=s.length()-i;
                alpha.insert(s[i]);
            }
        }
        cout<<count<<endl;
    }
}

