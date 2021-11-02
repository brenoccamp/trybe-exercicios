import React from 'react';
import PropTypes from 'prop-types';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const ValidEmail = (props) => {
  const { email } = props;
  return (
    <div>
      <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
      {/* Primeira funcionalidade
          Na primeira sugestão de funcionalidade, o exercício pede para a mensagem não aparecer caso nenhum email tenha sido enviado. Podemos resolver isso utilizando renderização condicional . */}
      { email && (
        // Segunda funcionalidade
        // Na segunda sugestão de funcionalidade, o exercício pede que a mensagem mude de cor dependendo do resultado da validação do email. Para isso vamos colocar uma condicional no atributo className. Este atributo define as classes css do elemento h3, trocando sua coloração entre verde e vermelho, para casos de email válido e inválido, respectivamente.
      <h3 data-testid="id-is-email-valid" className={verifyEmail(email) ? 'green-text' : 'red-text'}>{(verifyEmail(email) ? 'Email Válido' : 'Email Inválido')}</h3>
      )}
    </div>
  );
};

ValidEmail.propTypes = {
  email: PropTypes.string.isRequired,
};

export default ValidEmail;