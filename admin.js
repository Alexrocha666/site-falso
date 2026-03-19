const SENHA = "1234";

function entrar() {
  const senha = document.getElementById("senha").value;

  if (senha === SENHA) {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("painel").classList.remove("hidden");
  } else {
    alert("Senha errada");
  }
}

function publicar() {
  const titulo = document.getElementById("titulo").value;
  const conteudo = document.getElementById("conteudo").value;
  const imagem = document.getElementById("imagem").value;

  db.collection("noticias").add({
    titulo,
    conteudo,
    imagem,
    data: Date.now()
  });

  alert("Publicado!");
}
```

---

# ⚙️ PASSO FINAL (IMPORTANTE)

### Criar Firebase:
1. Acesse: https://firebase.google.com
2. Criar projeto
3. Ativar Firestore Database
4. Copiar config e colocar no firebase.js
