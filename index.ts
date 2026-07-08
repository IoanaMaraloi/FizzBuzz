// This is our main function
function fizzbuzz(): void {

    for(let i = 0; i < 256; i++) {
        let ans :string = "";
        if (i % 3 == 0){
            ans += "Fizz";
        }
        if (i % 5 == 0){
            ans += "Buzz";
        }
        if (i % 7 == 0) {
            ans += "Bang";
        }
        if (i % 11 == 0){
            ans = "Bong";
        }if (i % 13 == 0){
            if (ans.length == 0){
                ans += "Fezz";
            }else {
                let pos = ans.indexOf("B");
                if (pos < 0){
                    ans += "Fezz";
                }else {
                    ans = ans.slice(0, pos) + "Fezz" + ans.slice(pos);
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
fizzbuzz();