

// JavaScript 작성시 코드 01


// function add (num1,num2) {
//     console.log(num1+num2);
// };

// add();
// add(1);
// add(1,2);
// add(3,4,5);
// add('hello','world');


/**
 * 위와 같이 선언된 함수 add를 호출하는 것에서 
 * js 의 경우 다섯가지의 호출 방법 모두 오류가 없다고 뜬다.
 * 
 * 하지만 ts의 경우 오류를 알려준다.
 * 1번2번3번 같은 경우 함수add에서 전달해줄 파라미터의 수는
 * 두개인데 호출된 파라미터의 갯수가 0,1,3개 이기 때문에 오류가 생긴다.
 * 
 * 마지막 5번 같은 경우 숫자를 더한 값을 구하고 싶은데 문자형인 파라미터를
 * 호출했기 때문에 오류가 생기진 않으나 'hellowworld' 라는 값이 나온다.
 * 
 */

// Javascript 작성시 코드 02


// function showItem(arr) {
//     arr.forEach((item) => {
//         console.log(item);
//     });
// }

// showItem([1,2,3]);
// showItem(1,2,3);


/**
 * showItem 함수의 경우 arr을 파라미터로 가져와 함수 내부에서 
 * forEach로 파라미터를 반복시키는 함수이다.
 * 
 * 첫번째의 경우 배열을 파라미터로 가져와서 foreach가 작동하면서
 * 원하는 값이 나오지만
 * 
 * 두번째의 경우 숫자형에 3개의 파라미터를 이용해 호출되었기 때문에
 * TypeError(레퍼런스 에러) 가 생긴다. 왜냐하면 숫자형 1에는 forEach라는
 * 메서드가 존제하지 않기 때문이다.
 */

/**
 * JavaScript 같은 동적 언어는 런타임(실행)시에 오류가 발견되서, 사용자가 오류를 발견한다.
 * 반면 Java같은 정적 언어는 컴파일 시에 오류가 발견되어서 코드 작성중 오류를 발견할수 있다.
 * 
 */


// ----------------------------------------------------------------------------------


// TypeScript 작성시 코드를 알아보기!


// JavaScript로 작성된 코드 01

// function add (num1,num2) {
//     console.log(num1+num2);
// };

// add();
// add(1);
// add(1,2);
// add(3,4,5);
// add('hello','world');

/**
 * 위 코드는 JavaScript 코드로 작성된 코드이다.
 * 
 * 먼저 add 함수의 파라미터 (num1,num2)는 any 타입 이라는 오류가 나오는데 
 * any는 어떤 타입이든 선언될수 있다 라는 뜻이다. 가급적이면 코드의 안정성과 오류를 줄이기 위해
 * any 타입은 사용을 하지 않는게 좋다.
 * 
 * 또한 add함수를 호출했을 시에 1번2번4번은 파라미터의 갯수가 선언된 add함수의 파라미터의 갯수와
 * 일치하지 않는다고 뜬다.
 * 
 */


// TypeScript 작성 코드 01

function add (num1:number,num2:number) {
    console.log(num1+num2);
};

// add();
// add(1);
add(1,2);
// add(3,4,5);
// add('hello','world');

/**
 * add 함수의 파라미터 num1과 num2의 타입을 num1:number, num2:number 형식으로 
 * 숫자형으로 고정시키면 된다.
 * 
 * 그러면 add를 호출한 1,2,4 번은 갯수가 틀리다는 error 메세지가 나오고
 * 이상이 없다고 나오던 5번 호출의 파라미터역시 문자형 이기 때문에 틀리다 라고 나온다.
 * 
 * 다른 사람이 작성한 코드를 불러오거나 사용할때 일일히 타입을 지정해 주거나 알 필요없이
 * 그때그때 편하게 작성 가능하다!
 */


// JavaScript로 작성된 코드 02

// function showItem(arr) {
//     arr.forEach((item) => {
//         console.log(item);
//     });
// }

// showItem([1,2,3]);
// showItem(1,2,3);

/**
 * shoItem 함수의 파라미터 arr과 forEach 메서드의 파라미터로 선언된 item에 오류가 뜬다.
 * type 지정을 안해줘서 오류가 뜨는 것이다.
 * 
 * showItem을 호출할때 2번째에서 showItem 함수에서 하나만 파라미터로 설정되어 있는데
 * 1,2,3 형식으로 3개의 파라미터가 들어가 있어서 오류가 뜬다.
 */


// TypeScript로 작성된 코드 02

function showItem(arr:number[]) {
    arr.forEach((item) => {
        console.log(item);
    });
}

showItem([1,2,3]);
// showItem(1,2,3);

/**
 * showItem함수에 파라미터 arr에 숫자형을 뜻하는 number과 배열을 뜻하는 대괄호[]를 넣어주면
 * TypeError 문구가 사라진다. 또한 forEach 메서드의 파라미터로 설저된 item 역시 오류가 사라진다.
 * 
 */