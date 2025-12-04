import './style.css'

 /* Preenche ano */
    document.getElementById('ano').textContent = new Date().getFullYear();

    /* Moeda BRL */
    function formatBRL(value) {
      return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      });
    }

    /* Lógica da calculadora */

  function calcularPlano() {

      const aluguel = Number(document.getElementById('aluguel').value);
      const dominio = Number(document.getElementById('dominio').value);
      const servidor = Number(document.getElementById('servidor').value);
      const outros = Number(document.getElementById('outros').value);
      const estoque = Number(document.getElementById('estoque').value);
      const vendaMensal = Number(document.getElementById('vendaMensal').value);

      const meses = 12;

      const custoMensal = aluguel + dominio + servidor + outros;
      const custoTotal12 = custoMensal * meses;

      const receitaAnual = vendaMensal * meses;

      const reserva = custoMensal * 3;
      const capitalNecessario = estoque + reserva;

      const capitalFinal = receitaAnual - custoTotal12;

      document.getElementById('custoTotal').textContent = formatBRL(custoTotal12);
      document.getElementById('capitalNecessario').textContent = formatBRL(capitalNecessario);
      document.getElementById('receitaProj').textContent = formatBRL(receitaAnual);
      document.getElementById('capitalFinal').textContent = formatBRL(capitalFinal);

    }

    function limparCampos() {

        // Limpa todos os inputs do tipo text, number, email, etc
        const inputs = document.querySelectorAll('input[type="text"], input[type="number"], input[type="email"], input[type="tel"]');

        inputs.forEach(input => {
          input.value = '';
        });
        
        // Limpa textareas se tiver
        const textareas = document.querySelectorAll('textarea');

        textareas.forEach(textarea => {
          textarea.value = '';
        });
        
        // Limpa selects se tiver
        const selects = document.querySelectorAll('select');

        selects.forEach(select => {
          select.selectedIndex =  0;
        });
        
        
    }

    // Adicione ao final do seu HTML, antes de </body>

// Função para tornar cards expansíveis
function inicializarCardsExpandiveis() {
  // Seleciona todos os cards
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
    // Pega o header do card (onde está a seta)
    const header = card.querySelector('.card-header');
    
    if (header) {
      // Adiciona evento de clique
      header.addEventListener('click', function() {
        // Alterna a classe 'expandido'
        card.classList.toggle('expandido');
      });
      
      // Adiciona suporte para teclado (acessibilidade)
      header.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          card.classList.toggle('expandido');
        }
      });
      
      // Torna focável pelo teclado
      header.setAttribute('tabindex', '0');
      header.setAttribute('role', 'button');
      header.setAttribute('aria-expanded', 'false');
      
      // Atualiza aria-expanded quando expandir/colapsar
      card.addEventListener('click', function() {
        const isExpanded = card.classList.contains('expandido');
        header.setAttribute('aria-expanded', isExpanded);
      });
    }
  });
}

// Executa quando a página carregar
document.addEventListener('DOMContentLoaded', inicializarCardsExpandiveis);

// Se você adicionar cards dinamicamente, chame novamente:
// inicializarCardsExpandiveis();

window.calcularPlano = calcularPlano;
window.limparCampos = limparCampos;
window.inicializarCardsExpandiveis = inicializarCardsExpandiveis;

    