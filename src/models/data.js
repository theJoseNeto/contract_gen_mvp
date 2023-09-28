exports.contratos = {
    aluguel: (locador, locatario, endereco) => {
        if (!locador || !locatario) return "";

        return `Contrato de Locação de Imóvel

        Locador(a): ${locador}
        
        Locatário(a)/Empresa: ${locatario} 
        
        Endereço do Imóvel: ${endereco}
        
        Data de Início: [Data de Início do Aluguel]
        
        Data de Término: [Data de Término do Aluguel]
        
        Cláusulas
        
        1. Objeto.
        O presente contrato tem como objeto o imóvel localizado no endereço acima, de propriedade do(a) Locador(a), que será alugado pelo(a) Locatário(a)/Empresa.
        2. Valor do Aluguel
        O valor do aluguel mensal será de R$ 1200,00 , a ser pago até o dia 20 de cada mês.
        3. Depósito Caução
        O(a) Locatário(a)/Empresa deverá pagar um depósito caução no valor de R$ [Valor do Depósito Caução] antes da entrega das chaves.
        4. Despesas Adicionais
        Despesas com água, luz e outros encargos serão de responsabilidade do(a) [Nome da Empresa ou Locatário].
        5. Manutenção e Reparos
        O(a) Locatário(a)/Empresa será responsável por manter o imóvel em bom estado de conservação e comunicar ao(à) Locador(a) qualquer necessidade de reparo.
        6. Rescisão
        Em caso de rescisão antecipada do contrato, o(a) Locatário(a)/Empresa deverá pagar uma multa equivalente a R$ [Valor da Multa por Rescisão].
        7. Renovação
        A renovação deste contrato deverá ser negociada entre as partes com antecedência mínima de [Número de Dias para Negociação] dias antes do término do contrato.
        8. Foro
        Para dirimir quaisquer controvérsias oriundas do CONTRATO, as partes elegem o foro da comarca de _______________.
        Locador(a): _______________________________ 
        Locatário(a)/Empresa: [Nome da Empresa ou Locatário]
        
        Testemunha 1: _______________________________
        
        Testemunha 2: _______________________________
        
        Data: [Data de Assinatura do Contrato]
        `
    },

    prestacaoServico: (contratante, endereco, cpf) => {
        if (!contratante || !endereco || !cpf) return "";


        return `Contrato de Prestação de Serviços de Programação

        Contratante: ${contratante}
        
        Contratado/Programador: José Antônio da Silva Neto
        
        Endereço do Contratante: ${endereco}
        
        CPF do contratante: ${cpf}
        
        Endereço do Contratado: [endereço do programador]
        
        Data de Início: [Data de Início do Contrato]
        
        Data de Término: [Data de Término do Contrato]
        
        Cláusulas
        
        1. Objeto
        
        O objeto deste contrato é a prestação de serviços de programação pelo Contratado ao Contratante, conforme especificado no Anexo A.
        
        2. Valor da Prestação de Serviços
        
        O valor total dos serviços será de R$ [Valor Total], a ser pago da seguinte forma: [Detalhes do Pagamento].
        
        3. Prazos e Entregas
        
        O Contratado se compromete a entregar os serviços descritos no Anexo A até a data de [Data de Entrega]. Caso o Contratado não cumpra o prazo estabelecido para a entrega do projeto, o tempo que exceder o prazo inicialmente acordado não será cobrado ao Contratante.
        
        4. Confidencialidade
        Ambas as partes concordam em manter em sigilo todas as informações trocadas durante a execução deste contrato.
        
        5. Direitos Autorais
        Os direitos autorais do código e demais entregáveis serão de [propriedade do Contratante/Contratado].
        
        6. Rescisão
        
        Em caso de rescisão antecipada, o Contratado deverá receber o valor proporcional aos serviços já prestados e uma multa de R$ [Valor da Multa].
        
        7. Foro
        
        Para dirimir quaisquer controvérsias oriundas do CONTRATO, as partes elegem o foro da comarca de [Nome da Comarca].
        
        
        Contratante: ${contratante}
        
        Contratado/Programador:** [Nome do Programador]
        
        Testemunha 1: _______________________________
        
        Testemunha 2:_______________________________
        
        Data: [Data de Assinatura do Contrato]
        `

    }
}