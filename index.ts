import * as readlineSync from 'readline-sync';
function fizzBuzz(endNumber: number, rules:string[]): void {
    for(let i = 0; i < endNumber; i++) {
        let ans :string = "";
        if (i % 3 == 0){
            ans += rules[0];
        }
        if (i % 5 == 0){
            ans += rules[1];
        }
        if (i % 7 == 0) {
            ans += "Bang";
        }
        if (i % 11 == 0){
            console.log("Bong");
            continue;
        }
        if (i % 13 == 0){
            if (ans.length == 0){
                ans += rules[2];
            }else {
                let pos = ans.indexOf("B");
                if (pos < 0)
                {
                    ans += rules[2];
                }else {
                    ans = ans.slice(0, pos) +  rules[2]+ ans.slice(pos);
                }
            }
        }
        if (i % 17 == 0){
            let res: string = "";
            while(ans){
                res = ans.slice(0, 4)+ res;
                ans = ans.slice(4);
            }
            ans = res;
        }

        if (ans == ""){
            console.log(i);
        }else{
            console.log(ans);
        }
    }
}

export function fizzBuzzTesting(number: number, rules:string[]): string {
    let ans:string = "";
    if (number % 3 == 0){
        ans+= rules[0];
    }
    if (number % 5 == 0){
        ans+= rules[1];
    }
    if (number % 7 == 0) {
        ans+= "Bang";
    }
    if (number % 11 == 0){
        return "Bong";
    }
    if (number % 13 == 0){
        if (ans.length == 0){
            ans += rules[2];
        }else {
            let pos = ans.indexOf("B");
            if (pos < 0){
                ans += rules[2];
            }else {
                ans = ans.slice(0, pos) +  rules[2]+ ans.slice(pos);
            }
        }
    }
    if (number % 17 == 0){
        let res: string = "";
        while(ans){
            res = ans.slice(0, 4)+ res;
            ans = ans.slice(4);
        }
        ans = res;
    }

    if (ans == ""){
        return number.toString();
    }
    return ans;
}

function main() {

    let words :string[] = [];
    let n: number = readlineSync.questionInt("Number of steps: ");
    console.log("res", n);

    let word3: string = readlineSync.question("word for 3: ");
    console.log("res", word3);

    let word5: string = readlineSync.question("word for 5: ");
    console.log("res", word5);

    let word13: string = readlineSync.question("word for 13: ");
    console.log("res", word13);
    words.push(word3);
    words.push(word5);
    words.push(word13);
    fizzBuzz(n, words);
}
// main();