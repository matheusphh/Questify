import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Constantes dinâmicas que avaliam a senha em tempo real
  const hasLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password) && /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[^A-Za-z0-9]/.test(password);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!hasLength || !hasUppercase || !hasNumber || !hasSymbol) {
      setErrorMessage('A senha não atende a todos os requisitos de segurança.');
      setSuccessMessage('');
      return;
    }

    setErrorMessage('');
    setSuccessMessage('Cadastro simulado com sucesso!');
    console.log('Dados de cadastro:', { name, email, password });
    // Aqui você enviará os dados para a API
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Criar Conta</h2>
        <p className="subtitle">Junte-se ao Questify e comece sua jornada</p>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Nome completo</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

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
            <label htmlFor="password">Senha forte</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem', fontSize: '0.8rem' }}>
              <li style={{ color: hasLength ? '#059669' : '#ef4444' }}>
                {hasLength ? '✅' : '❌'} Pelo menos 8 caracteres
              </li>
              <li style={{ color: hasUppercase ? '#059669' : '#ef4444' }}>
                {hasUppercase ? '✅' : '❌'} Letra maiúscula e minúscula
              </li>
              <li style={{ color: hasNumber ? '#059669' : '#ef4444' }}>
                {hasNumber ? '✅' : '❌'} Pelo menos um número
              </li>
              <li style={{ color: hasSymbol ? '#059669' : '#ef4444' }}>
                {hasSymbol ? '✅' : '❌'} Pelo menos um símbolo (!@#$...)
              </li>
            </ul>
          </div>

          {errorMessage && <div className="error-message">{errorMessage}</div>}
          
          {successMessage && (
            <div style={{ background: '#065f46', color: '#6ee7b7', padding: '0.5rem', borderRadius: '4px', fontSize: '0.85rem', marginBottom: '1rem', textAlign: 'center' }}>
              {successMessage}
            </div>
          )}
          
          <button type="submit" className="btn-primary">Cadastrar</button>
        </form>

        <p className="footer-link">
          Já tem uma conta? <Link to="/">Faça login</Link>
        </p>
      </div>
    </div>
  );
}