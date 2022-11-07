let saldo = parseFloat(prompt(`Qual a quantidade de dinheiro? `))
let opcao = " "
let deposito = " "
let saque = " "
alert(`Deposito de R$ ${saldo} realizado com sucesso!`)
do{
     opcao= prompt(
        `Seu saldo atual é de R$ ${saldo}:\n\n
        OPÇÕES:\n
        1. Depositar Dinheiro\n
        2. Sacar Dinheiro\n
        3. Finalizar consulta`
    )

    switch (opcao) {
        case "1":
            deposito = parseFloat(prompt(`Qual o valor deseja depositar? `))
            saldo += deposito
            alert(`Deposito de R$ ${deposito} realizado com sucesso!`)
            break;
        case "2":
            saque = parseFloat(prompt(`Qual o valor deseja sacar? `))
            if(saldo >= saque){
                saldo -= saque
                alert(`saque de R$ ${saque} realizado com sucesso!`)
                break;
            } else{
                alert(`Saque superior ao saldo!\nSaque R$ ${saque}\nSaldo Atual R$ ${saldo}`)
                break
            }
        case "3":
            alert(`Atendimento sendo encerrado!`)
            break;
        default:
            alert(`Opção inválida!\n escolha entre 1  e 3.`)
            break;
    }
} while(opcao !== "3")

alert(`Saldo Final de R$ ${saldo}\nConsulta finalizada!`)
