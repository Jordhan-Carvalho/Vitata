export const dict = {
  pt: {
    "Sign In": "Entrar",
    Username: "Usuário",
    "Reset password": "Recuperar senha",
    Password: "Senha",
    "Phone Number": "Telefone",
    "Forget your password? ": "Esqueceu a senha? ",
    "Back to Sign In": "Voltar para tela de login",
    "Send Code": "Enviar código",
    "Enter your username": "Usuário",
    "Reset your password": "Resetar senha",
    Submit: "Enviar",
    "New Password": "Nova Senha",
    "Resend Code": "Reenviar código",
    Code: "Código"
  }
};

//custom error msg for amplify
export const map = message => {
  if (/incorrect.*username.*password/i.test(message)) {
    return "Senha ou usuário incorreto";
  }
  if (/user.*already.*exist/i.test(message)) {
    return "Usuário já existe";
  }
  if (/user.*not.*exist/i.test(message)) {
    return "Usuário não existe";
  }
  if (/validation.*password/i.test(message)) {
    return "Formato da senha invalida";
  }
  if (/invalid.*phone/i.test(message)) {
    return "Telefone invalido, forneça somente o ddd e o número, ex 7799991234";
  }
  if (/cannot.*be.*empty/i.test(message)) {
    return "Preencha os campos";
  }
  if (/cannot.*reset.*password.*email/i.test(message)) {
    return "Usuário não encontrado";
  }

  return message;
};
