
// Smooth scroll para os botões CTA
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animação de entrada dos cards ao fazer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observa todos os cards para animação
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.problem-card, .feature, .question-item');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Adiciona contador de visualizações (exemplo)
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('CTA clicado!');
            // Aqui você pode adicionar analytics, redirecionamento, etc.
            alert('Obrigado pelo interesse! Em breve você será redirecionado para o aplicativo.');
        });
    });
});

// Adiciona efeito parallax sutil no hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});


  // Processamento do formulário
        document.getElementById('planningForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Coleta os dados
            const formData = new FormData(e.target);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = parseFloat(value);
            });
            
            // Cálculos
            const custosFixosMensais = data.aluguel + data.contas + data.salarios + data.outrosFixos;
            const investimentoInicial = data.capitalInicial + data.equipamentos + data.estoqueInicial;
            const custoVariavelMensal = (data.faturamento * data.custoProduto) / 100;
            const custoTotalMensal = custosFixosMensais + custoVariavelMensal;
            
            // Capital de giro (3 meses de operação)
            const capitalGiro = custoTotalMensal * 3;
            
            // Ponto de equilíbrio
            const pontoEquilibrio = custoTotalMensal;
            
            // Lucro anual estimado
            const lucroMensal = data.faturamento - custoTotalMensal;
            const lucroAnual = lucroMensal * 12;
            
            // Atualiza os resultados
            document.getElementById('capitalGiro').textContent = 
                'R$ ' + capitalGiro.toLocaleString('pt-BR', {minimumFractionDigits: 2});
            document.getElementById('pontoEquilibrio').textContent = 
                'R$ ' + pontoEquilibrio.toLocaleString('pt-BR', {minimumFractionDigits: 2});
            document.getElementById('lucroAnual').textContent = 
                'R$ ' + lucroAnual.toLocaleString('pt-BR', {minimumFractionDigits: 2});
            
            // Mostra a seção de resultados
            document.getElementById('resultados').classList.add('active');
            document.getElementById('resultados').scrollIntoView({ behavior: 'smooth' });
        });
