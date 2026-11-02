import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o recarregamento da página

    // Lógica básica de validação (substitua futuramente pela chamada ao back-end)
    if (!email || !password) {
      setErrorMessage('Por favor, preencha todos os campos.');
      return;
    }

    setErrorMessage('');
    console.log('Dados de login:', { email, password });
    // Aqui você fará o fetch/axios para a API do seu back-end
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Questify</h2>
        <p className="subtitle">Faça login para continuar sua jornada</p>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">E-mail</label>
            <input 
              type="email" 
              id="email" 
              placeholder="seu.email@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input 
              type="password" 
              id="password" 
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Renderização condicional: só exibe a div se houver erro */}
          {errorMessage && (
            <div className="error-message">{errorMessage}</div>
          )}
          
          <button type="submit" className="btn-primary">Entrar</button>
        </form>

        <p className="footer-link">
          Ainda não tem uma conta? <Link to="/register">Cadastre-se</Link>
        </p>
      </div>
    </div>
  );
}