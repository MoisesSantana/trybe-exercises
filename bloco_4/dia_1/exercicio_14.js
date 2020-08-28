const salarioBruto = 100000;
let salarioLiquido = 0;

if ( salarioBruto <= 0 ) {
    console.log('Valor incorreto');
} else {
    console.log(`Salário bruto de R$${salarioBruto}`);
    if ( salarioBruto <= 1556.94 ) {
        salarioLiquido = salarioBruto - ( salarioBruto / 100 ) * 8 ;
    } else if ( salarioBruto <= 2594.92 ) {
        salarioLiquido = salarioBruto - ( salarioBruto / 100 ) * 9;
    } else if ( salarioBruto <= 5189.82 ) {
        salarioLiquido = salarioBruto - ( salarioBruto / 100 ) * 11;
    } else {
        salarioLiquido = salarioBruto - 570,88;
    }
    console.log(`Salario base com INSS descontado R$${salarioLiquido}`);
    if ( salarioLiquido < 1903.99 ) {
        console.log(`Seu salário é insento de IR total R$${salarioLiquido}`);
    } else {
        if ( salarioLiquido <= 2826.65  && salarioLiquido >= 1903.99 ){
            salarioLiquido -= (( salarioLiquido / 100 ) * 7.5 - 142.8 ); 
        } else if ( salarioLiquido <= 3751.05 ) {
            salarioLiquido -= (( salarioLiquido / 100 ) * 15 - 354.8 );
        } else if ( salarioLiquido <= 4664.68 ) {
            salarioLiquido -= (( salarioLiquido / 100 ) * 22.5 - 636.13 );
        } else {
            salarioLiquido -= (( salarioLiquido / 100 ) * 27.5 - 869.36 ); 
        }
        console.log(`Salário líquido com INSS e IR descontados R$${salarioLiquido}`);
    }
}