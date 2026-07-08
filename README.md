## functia fizzbuzz:
- am realizat functia si apoi am adaugat parametrul rules, un vector de string-uri (optiunile userului pentru cuvintele pt 3, 5, 13).
- pentru 11: afisez si trec la nr urmator, nu mai e necesar sa verific si daca e multiplu de alte numere
- pentru 13: verific daca mai am alte cuvinte in rezultat. daca nu, doar adaug cuvantul. daca mai sunt alte cuvinte, trebuie sa verific daca au b. caut cu indexof primul B si adaug cuvantul pt 13 inainte.
- pentru 17: observ ca fiecare cuvant are lungime 4, iau grupuri de cate 4 litere si le inversez.

## pentru testing:
- am creat o functie separata, fizzbuzzTesting unde returnez un string, pentru un nr dat ca parametru si pentru niste string-uri date ca parametru.
- la fel ca la functia anterioara. 
- pt teste: am luat testele descrise in exercitii si am modificat parametrii. Am testat si pentru Fizz, Buzz, Fezz dar si pentru alte cuvinte.