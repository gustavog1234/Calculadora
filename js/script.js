const visor = document.getElementById('visor')
let current = '0', prev='', op=null;

function atualizaVisor(){
    visor.textContent = current;
}

function appendNumber(num){//add numero
    if(current === '') current = num;
    else current +=num 
}

function chooseOperation(operation){ //escolherOperador
    if(current ==='') return; //se variavel current variavel for vazia retorna nada
    if(prev!=='') calculate()
        //var op = operation
    op=operation;
    prev = current;
    current ='';

}

function calculate(){
    let result;
    const a = parseFloat(prev), b =parseFloat(current);
    //isNaN = IsNotNumber "é um não numero"
    if (isNaN(a) || isNaN(b))return;
    switch(op){
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case '*': result = a * b; break;
        case '/': result = b !== 0 ? a / b: 'Error'; break;
        case '%': result = (a % b); break;
        default: return;
    }
    current = result.toString()
    op = null; prev='';

}
/*querySelectorAll está pegando a class do html botões e acesso o html button

*/

document.querySelectorAll('.botoes button').forEach(btn => {
    btn.addEventListener('click', () => {
        const action = btn.dataset.action;
        const val = btn.textContent;
         
        console.log('action ->', action)
        console.log('val ->', val)
        
        // ! ele nega uma lógica 
        if(!action) appendNumber(val)

            atualizaVisor()
    }) 
})