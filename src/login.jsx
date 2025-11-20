import React, { useState } from 'react';
import './login.css';

function Login() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const logar = () => {
    if (usuario === 'admin' && senha === 'admin') {
      window.location.href = 'home.html'; // ou use React Router para navegar
    } else {
      setErro('Usuário ou senha incorretos!');
    }
  };

  return (
    <div className="container">
      {/* LADO ESQUERDO */}
      <div className="left">
        <div className="logo">
          <span className="clone">NASCE</span>
          <span>NASCE</span>
          <span className="clone" style={{ top: '43px' }}>EMPREENDEDOR</span>
          <span style={{ marginTop: '5px' }}>EMPREENDEDOR</span>
        </div>

        <div className="bv">
          <p>Bem-vindo!</p>
          <p>Acesse sua conta para continuar.</p>
        </div>
      </div>

      {/* LADO DIREITO */}
      <div className="right">
        <h2>Login</h2>
        <p style={{ textAlign: 'center', color: '#444' }}>Preencha seus dados</p>

        <div className="input-group">
          <input
            type="text"
            placeholder="Usuário: admin"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            placeholder="Senha: admin"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <button className="btn" onClick={logar}>ENTRAR</button>

        {erro && <p className="erro">{erro}</p>}
      </div>
    </div>
  );
}

export default Login;