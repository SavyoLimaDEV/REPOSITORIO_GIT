import React, { useState } from 'react';
import './home.css';

function Home() {
  const [anoAtual] = useState(new Date().getFullYear());
  const [form, setForm] = useState({
    aluguel: 0,
    dominio: 0,
    servidor: 0,
    outros: 0,
    estoque: 0,
    vendaMensal: 0,
    prazoProduto: 'curto',
  });

  const [resultado, setResultado] = useState({
    custoTotal: 0,
    capitalNecessario: 0,
    receitaProj: 0,
    capitalFinal: 0,
  });

  const formatBRL = (value) =>
    value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [id]: id === 'prazoProduto' ? value : parseFloat(value) || 0,
    }));
  };

  const calcularPlano = () => {
    const { aluguel, dominio, servidor, outros, estoque, vendaMensal } = form;
    const meses = 12;
    const custoMensal = aluguel + dominio + servidor + outros;
    const custoTotal12 = custoMensal * meses;
    const receitaAnual = vendaMensal * meses;
    const reserva = custoMensal * 3;
    const capitalNecessario = estoque + reserva;
    const capitalFinal = receitaAnual - custoTotal12;

    setResultado({
      custoTotal: custoTotal12,
      capitalNecessario,
      receitaProj: receitaAnual,
      capitalFinal,
    });
  };

  return (
    <div className="interface">
      <div className="titulo">
        <header>
          <div className="nasce"><h1>NasceEmpreendedor</h1></div>
          <div className="logout">
            <a href="login.html">logout</a>
          </div>
          <div className="navbar">
            <nav aria-label="Menu principal">
              <a href="#sobre">Sobre</a>
              <a href="#calculadora">Calculadora</a>
              <a href="#contato">Contato</a>
            </nav>
          </div>
        </header>
      </div>

      <main>
        <section id="sobre" className="card">
          <h2>Ajude pessoas a iniciar seu empreendimento</h2>
          <p>
            Estruture a abertura do seu negócio com planejamento financeiro simples e direto. Muitos empreendedores
            iniciam sem saber calcular custos, capital de giro ou lucro. Este app ajuda a visualizar tudo isso em um
            plano de 12 meses para tomar decisões mais seguras e evitar dívidas.
          </p>
        </section>

        <section className="card">
          <h3>Funcionalidades principais</h3>
          <ul>
            <li>Calcular custos mensais e total para 12 meses</li>
            <li>Estimativa de capital de giro e lucro</li>
            <li>Registro de estoque inicial e validade</li>
            <li>Exportar relatório (CSV/PDF)</li>
          </ul>
        </section>

        <section id="calculadora" className="card">
          <h3>Calculadora: Plano de 12 meses</h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-2">
              {['aluguel', 'dominio', 'servidor', 'outros'].map((campo) => (
                <div key={campo}>
                  <div className="campo">
                    <label htmlFor={campo}>{campo.charAt(0).toUpperCase() + campo.slice(1)} (mensal)</label>
                  </div>
                  <input
                    id={campo}
                    type="number"
                    min="0"
                    step="0.01"
                    value={form[campo]}
                    onChange={handleChange}
                  />
                </div>
              ))}
            </div>

            <div className="grid grid-2">
              <div>
                <div className="campo"><label htmlFor="estoque">Estoque inicial (R$)</label></div>
                <input
                  id="estoque"
                  type="number"
                  min="0"
                  step="0.01"
                  value={form.estoque}
                  onChange={handleChange}
                />
              </div>
              <div>
                <div className="campo"><label htmlFor="vendaMensal">Receita mensal estimada (R$)</label></div>
                <input
                  id="vendaMensal"
                  type="number"
                  min="0"
                  step="0.01"
                  value={form.vendaMensal}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="campo">
              <label htmlFor="prazoProduto">Validade do produto</label>
              <select id="prazoProduto" value={form.prazoProduto} onChange={handleChange}>
                <option value="curto">Curto prazo (perecíveis)</option>
                <option value="longo">Longo prazo (não perecíveis)</option>
              </select>
            </div>

            <button type="button" onClick={calcularPlano}>Calcular plano 12 meses</button>
          </form>

          <div id="resultado" style={{ marginTop: '1rem' }} aria-live="polite">
            <div className="card">
              <p>Custo total (12 meses): <span className="result">{formatBRL(resultado.custoTotal)}</span></p>
              <p>Capital necessário (estoque + reserva): <span className="result">{formatBRL(resultado.capitalNecessario)}</span></p>
              <p>Receita projetada (12 meses): <span className="result">{formatBRL(resultado.receitaProj)}</span></p>
              <p>Capital final estimado: <span className="result">{formatBRL(resultado.capitalFinal)}</span></p>
              <small>Observação: números são estimativas.</small>
            </div>
          </div>
        </section>

        <section className="card">
          <h3>Próximos passos</h3>
          <ol>
            <li>Validação e mensagens de erro</li>
            <li>Salvar planos e exportar</li>
            <li>Autenticação e dashboard</li>
            <li>Responsividade com CSS</li>
          </ol>
        </section>

        <section id="contato" className="card">
          <h3>Contato</h3>
          <p>
            Para sugestões ou feedback, envie um e-mail para:
            <div className="email"><a href="mailto:savyol14@gmail.com">savyol14@gmail.com</a></div>
          </p>
        </section>
      </main>

      <footer>
        © <span>{anoAtual}</span> NasceEmpreendedor — Protótipo
      </footer>
    </div>
  );
}

export default Home;