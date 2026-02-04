//1
//https://leetcode.cn/problems/partition-labels/description/?envType=study-plan-v2&envId=top-100-liked
//划分字母区间
//给你一个字符串 s 。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。
//例如，字符串 "ababcc" 能够被分为 ["abab", "cc"]，但类似 ["aba", "bcc"] 或 ["ab", "ab", "cc"] 的划分是非法的。

//记录26个字母的最后出现位置，遍历串，一边遍历一遍更新当前段的最远端，达到最远端就是想要的当前串
var partitionLabels = function(s) {
    let last = new Array(26).fill(0);
    for(let i=0;i<s.length;i++){
        last[((s[i]).charCodeAt()-'a'.charCodeAt())]=i;
    }
    let ans=[];
    let left=0;
    let right=0;
    for(let i=0;i<s.length;i++){
        right=Math.max(right,last[((s[i]).charCodeAt()-'a'.charCodeAt())]);
        if(i === right){
            ans.push(right-left+1);
            left=right+1;
        }
    }
    return ans;
};


//2
//https://leetcode.cn/problems/copy-list-with-random-pointer/?envType=study-plan-v2&envId=top-100-liked
/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {_Node} head
 * @return {_Node}
 */
 //1→1′→2→2′→3→3′
var copyRandomList = function(head) {
    //新的交错链表
    let cur=head;
    while(cur){
        let newNode=new _Node(cur.val,cur.next,null);
        cur.next=newNode;
        cur=cur.next.next;
    }
    cur=head;
    while(cur){
        if(cur.random)
            cur.next.random=cur.random.next;
        cur=cur.next.next;
    }
    let dummy=new _Node();
    let ans=dummy;
    while(head){
        let temp=head.next.next;
        dummy.next=head.next;
        dummy=dummy.next;
        head.next=temp;
        head=temp;
    }
    return ans.next;
};

