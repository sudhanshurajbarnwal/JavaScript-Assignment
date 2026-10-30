// ASSIGNMENT-2
// TASK 1
function reverse(str){
    let output="";
    for(let i=str.length-1; i>=0; i--){
     output+=str[i]
    }
    console.log(output)
}
reverse("hello")

//Explanation: create a function take string and take variable output then make loop start loop from last to first

// TASK 2
function checkPalidrone(str){
    let output="";
    for(let i=str.length-1; i>=0; i--){
        output+=str[i]
    }
    if(str==output){
        console.log("true")
    } else{
        console.log("false")
    }
}

checkPalidrone("madam")

//Explanation: create a function take string and take variable output then make loop start loop from last to first


// TASK 3
function countVowCons(str){
    let vow=0;
    let cons=0;
    list=['a','i','e','o','u','A','I','E','O','U'];
    for(let i=0; i<str.length; i++){
        if (list.includes(str[i])){
         vow++;
        }else{
         cons++
        }
    }
    console.log('Total vowel is ' + vow + '\n' + 'Total consonent is ' + cons)
}
countVowCons('Nitish Sir');

// EXPLANATION: make a function countVowCons in string variable
// inside the function take 2 variable create 1 list of vowel small & capital then after that make loop to check if the string is present in list then increase the vowel count otherwise increase the consonent count and print the result

// TASK 4
function secLargest(list){
    let smallest= Math.min(...list);
     let highest=smallest;
     let sechighest=smallest;
    for(let i =0; i<list.length; i++){
        if(list[i]>highest){
            sechighest=highest;
            highest=list[i];
        } else if (list[i] < highest && list[i] > sechighest) {
            sechighest= list[i]
        }
    }
    console.log("Second highest is ",sechighest)
    
}


secLargest([10,5,20,8,20]);

// EXPLANATION: make a function secLargest in list variable
// inside the function take 3 variable smallest, highest, sechighest then make loop to check if the list is greater than highest then assign highest to sechighest and assign list[i] to highest otherwise check if list[i] is less than highest and greater than sechighest then assign list[i] to sechighest and print the result

// TASK 5
function removeDuplicates(list){
    let newList=[];
    for(let i=0; i<list.length; i++){
        if(!newList.includes(list[i])){
            newList.push(list[i])
        }
    }
    console.log("New list without duplicates: ", newList)
}
removeDuplicates([1,2,2,3,1]);

// EXPLANATION: make a function removeDuplicates in list variable
// inside the function take newList variable then make loop to check if newList does not include list[i] then push list[i] to newList and print the result

// TASK 6
function sumOfEven(list){
    let sum=0;
    for(let i=0; i<list.length; i++){
        if(list[i]%2==0){
            sum+=list[i]
        }
    }
    console.log("Sum of even numbers: ", sum)
}
sumOfEven([1,2,3,4,5,6]);

// EXPLANATION: make a function sumOfEven in list variable
// inside the function take sum variable then make loop to check if list[i] is even then add list[i] to sum and print the result

// TASK 7
function findfrequency(list){
    let frequency={};
    for(let i=0; i<list.length; i++){
        if(frequency[list[i]]){
            frequency[list[i]]++;
        }else{
            frequency[list[i]]=1;
        }
    }
    console.log("Frequency of elements: ", frequency)
}
findfrequency([1,2,2,3,1]);

// EXPLANATION: make a function findfrequency in list variable
// inside the function take frequency variable then make loop to check if frequency[list[i]] is true then increment frequency[list[i]] by 1 otherwise assign 1 to frequency[list[i]] and print the result  

// TASK 8
function checkAnagram(str1,str2){
    if(str1.length===str2.length){
        if(str1.split("").sort().join("")===str2.split("").sort().join("")){
            console.log("It's Anagram");
        } else{
            console.log("It's not Anagram");
            
        }
    } else {
        console.log("It's not Anagram");
        
    }
}

checkAnagram("dog","god")

// EXPLANATION: Create a function checkAnagram with declare 2 inbuilt variable str1 & str2
// Firstly check both string length use of if - else condition if length equal then check next condition with firstly split then sort then join and compare str2 with same process else not anagram

// TASK 9
function zeroMove(arr){
    let count=0;
    let newlist=[];
    for(let i =0; i<arr.length; i++){
        if(arr[i]==0){
            count++;
            arr.splice(i, 1);
            i--;
            newlist.push(0);
            
        }
    }
    console.log("New list with zero moved to end: ", arr.concat(newlist))
    
}

zeroMove([0,1,0,3,12])

// EXPLANATION: Create a function zeroMove with declare 1 inbuilt variable arr
// Firstly take 2 variable count & newlist then make loop to check if arr[i] is equal to 0 then increment count by 1 and remove the element from arr and push 0 to newlist then print the result with concat method 
