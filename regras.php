<?php

echo "BEM VINDO AO NASCEEMPREENDDOR";

echo "\naqui ajudaremos você a dar os primeiros passos no mundo do empreendedorismo";

echo "\nPara começar, por favor, informe seu nome: ";
$nome = trim(fgets(STDIN)); 
echo "\nOlá, $nome! É um prazer tê-lo conosco.";

echo "\nAgora descreva brevemente sua ideia de negócio: ";
$ideia = trim(fgets(STDIN));    

echo "\nObrigado por compartilhar sua ideia, $nome! Estamos aqui para ajudar você a transformar sua ideia em realidade.";

echo "\nVamos começar com algumas perguntas para entender melhor sua ideia.";

echo  "\n seu negócio é voltado para qual público-alvo? ";
$publicoAlvo = trim(fgets(STDIN));  

echo "\nInteressante! Focar no público-alvo '$publicoAlvo' pode ser uma ótima estratégia.";

echo "\nQuais são os principais produtos ou serviços que você pretende oferecer? ";
$produtosServicos = trim(fgets(STDIN));

echo "\nÓtimo! Oferecer '$produtosServicos' pode atrair muitos clientes.";

echo  "\n qual modelo de negócio você pretende adotar (ex: venda direta, assinatura, marketplace)? ";
$modeloNegocio = trim(fgets(STDIN));    
echo "\nO modelo de negócio '$modeloNegocio' pode ser muito eficaz dependendo do seu mercado.";

echo "\n seu negocio vai operar online, fisicamente ou ambos? Digite 'online', 'fisicamente' ou 'ambos': ";
$operacao = trim(fgets(STDIN));

//--- Condicional para diferentes tipos de operação-------------------------------------

if (strtolower($operacao) === "online") {

    online($nome);

} elseif (strtolower($operacao) === "fisicamente" || strtolower($operacao) === "física") {
    fisicamente($nome);

} elseif (strtolower($operacao) === "ambos") {

    ambos($nome);

} else {
    echo "\nNão entendi bem o tipo de operação. Tente responder 'online', 'fisicamente' ou 'ambos'.";
}


//--- Finalização-------------------------------------------------




// Funções específicas


function online($nome) {
    echo "\nPerfeito, $nome! Como seu negócio será online, vamos focar na presença digital.";

    echo "\nVocê já tem um domínio registrado? ";
    $dominio = trim(fgets(STDIN));
    if (strtolower($dominio) === "sim") {
        echo "\nÓtimo! Ter um domínio próprio é essencial para credibilidade.";
        echo "\n qual seu custo com o dominio e hospedagem do site? ";
    $custoDominioHospedagem = trim(fgets(STDIN));

    } else {
        echo "\nSem problemas! Podemos ajudar você a escolher e registrar um domínio adequado.";
    }
    
    echo "\nPretende vender por marketplaces (Shopee, Mercado Livre) ou site próprio? ";
    $plataforma = trim(fgets(STDIN));

      echo "\nQual custo estimado para marketing digital por mês? ";
    $custoMarketing = trim(fgets(STDIN));

    echo "\nExcelente! Agora você tem uma base digital sólida.";
}

function fisicamente($nome) {
    echo "\nEntendido, $nome! Negócios físicos exigem uma boa localização.";

    echo "\nVocê já tem um ponto comercial definido? ";
    $local = trim(fgets(STDIN));

    echo "\nQual o tamanho estimado do espaço (em m²)? ";
    $tamanho = trim(fgets(STDIN));

    echo "\nVai precisar de funcionários? ";
    $funcionarios = trim(fgets(STDIN));

    echo "\nPerfeito! Assim podemos avaliar custos fixos.";
}

function ambos($nome) {
    echo "\nExcelente escolha, $nome! Negócio híbrido pode alcançar mais público.";

    echo "\nVocê já tem estrutura física montada? ";
    $estruturaFisica = trim(fgets(STDIN));

    echo "\nE presença online (site, rede social, loja virtual)? ";
    $estruturaOnline = trim(fgets(STDIN));

    echo "\nPlaneja manter estoques separados ou unificados? ";
    $estoque = trim(fgets(STDIN));

    echo "\nShow! Isso ajuda a equilibrar logística e vendas.";
}

?>





?>