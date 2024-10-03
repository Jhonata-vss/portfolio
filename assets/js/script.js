// Seleciona a seção about
const sobre = document.querySelector("#about");

// Seleciona o formulario
const formulario = document.querySelector("#formulario");

// Cria a Expressão Regular, que será utilizada para validar o e-mail
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

// Cria a função responsável por preencher o conteúdo da Seção about
async function getApiGithub(){

    try{

        // Consulta as informações do Perfil do Github, através de uma Requisição HTTP
        const dadosPerfil = await fetch(`https://api.github.com/users/Jhonata-vss`);

        // Converte a resposta para o formato JSON
        const perfil = await dadosPerfil.json();

        // Monta o conteúdo na variável
        let conteudo = `
        
              <!-- Foto do Perfil do Github -->
            <img src="${perfil.avatar_url}" alt="Foto do Perfil - ${perfil.name}">

            <!-- Texto Sobre você -->
            <article id="sobre_texto">

                <h1>Sobre mim</h1>

                <p>
                   Me chamo Jhonata Venicius, resido na Zona Oeste de São Paulo. Sou apaixonado pela Natureza e pelos Animais, adoro acampar, fazer trilhas e apreciar belas paisagens. Tenho o sonho de viver em uma chácara cercado por diversos animais e, além disso, fundar uma ONG dedicada a ajudar cães e gatos de rua a encontrar alimento e Lar acolhedor.
                </p>
                <p>
                Sou um desenvolvedor Full Stack e possuo habilidades técnicas em back-end e front-end, incluindo JavaScript, TypeScript, NodeJS, NestJS, HTML5, CSS, MySQL, React e entre outras ferramentas. Destaco a facilidade de trabalho em equipe, persistência e atenção ao detalhes como as minhas principais competências.
                </p>

                <!-- Informações do Github -->
                <div id="sobre_github" class="flex sobre_github">

                    <a class="botao" target="_blank" href="${perfil.html_url}">Github</a>
                    <p>${perfil.followers} Seguidores</p>
                    <p>${perfil.public_repos} Repositórios</p>

                </div>

            </article>

        `

        // Insere o conteúdo na seção about
        sobre.innerHTML = conteudo;

    }catch(error){
        console.error(error);
    }
}

// Função de validação do formulário
formulario.addEventListener('submit', function(event) {
  
    // Impede o envio do Formulário
    event.preventDefault();
  
    const campoNome = document.querySelector('#name');
    const txtNome = document.querySelector('#txtNome');
  
    // Valida o campo name
    if (campoNome.value.length < 3) {
      txtNome.innerHTML = 'O Nome deve ter no minimo 3 caracteres.';
      campoNome.focus();
      return;
    }else{
      txtNome.innerHTML = '';
    }
  
    const campoEmail = document.querySelector('#email');
    const txtEmail = document.querySelector('#txtEmail');
  
     // Valida o campo e-mail
    if (!campoEmail.value.match(emailRegex)) {
      txtEmail.innerHTML = 'Digite um E-mail válido.';
      campoEmail.focus();
      return;
    }else{
      txtEmail.innerHTML = '';
    }
  
    const campoSubject = document.querySelector('#subject');
    const txtSubject = document.querySelector('#txtSubject');
  
     // Valida o campo subject
    if (campoSubject.value.length < 5) {
      txtSubject.innerHTML = 'O Assunto deve ter no minimo 5 caracteres.';
      campoSubject.focus();
      return;
    }else{
      txtSubject.innerHTML = '';
    }

    // Se todas as validações forem concluídas com êxito, envia o formulário
    formulario.submit();
  
  });

// Executa a função de preenchimento sa seção about
getApiGithub();