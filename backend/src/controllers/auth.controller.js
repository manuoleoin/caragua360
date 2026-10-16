req.session.usuarioId = usuario.id;

req.session.save((erro) => {
  if (erro) {
    return res.status(500).json({
      mensagem: "Erro ao iniciar a sessão",
    });
  }

  return res.status(200).json({
    mensagem: "Login realizado com sucesso",
  });
});