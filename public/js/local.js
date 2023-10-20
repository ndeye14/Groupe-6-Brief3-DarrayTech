
  // Sélectionnez le formulaire
  const commentForm = document.querySelector('form');

  commentForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Récupérez les valeurs des champs
    const name = document.getElementById('nameInput').value;
    const message = document.getElementById('messageInput').value;

    // Créez un objet pour stocker les données
    const commentData = { name, message };

    // Stockez les données dans localStorage
    localStorage.setItem('commentData', JSON.stringify(commentData));

    // Effacez les champs du formulaire
    document.getElementById('nameInput').value = '';
    document.getElementById('messageInput').value = '';

    // Appelez une fonction pour afficher les commentaires
    displayComments();
  });


  function displayComments() {
    const commentData = JSON.parse(localStorage.getItem('commentData'));

    if (commentData) {
      const modalContent = document.querySelector('.modal-content');

      // Créez un élément pour afficher les commentaires
      const commentList = document.createElement('div');
      commentList.classList.add('listeCommentaire');

      // Créez un élément image
      const commentImage = document.createElement('img');
      commentImage.src = 'https://www.pngall.com/wp-content/uploads/5/Profile.png';

      // Créez un conteneur pour le texte
      const commentTextContainer = document.createElement('div');

      // Créez des éléments pour afficher le nom d'utilisateur et le message
      const username = document.createElement('p');
      username.textContent = `${commentData.name}`;
      const userMessage = document.createElement('p');
      userMessage.textContent = `${commentData.message}`;

      // Ajoutez les éléments au contenu du commentaire
      commentList.appendChild(commentImage);
      commentTextContainer.appendChild(username);
      commentTextContainer.appendChild(userMessage);

      // Ajoutez la liste des commentaires au contenu modal
      commentList.appendChild(commentImage);
      commentList.appendChild(commentTextContainer);
      modalContent.appendChild(commentList);

      // Ajoutez de style CSS 
      commentList.style.backgroundColor = '#11375B';
      commentList.style.color="#fff";
      commentList.style.display = 'flex';
      commentList.style.padding = '10px';
      commentList.style.borderRadius = '10px';
      commentList.style.margin = '10px';
      commentTextContainer.style.margin = '14px';
      commentImage.style.width = '100px'; 
      commentImage.style.height = '100px';
   
    }
  }

  // Appelez la fonction pour afficher les commentaires au chargement de la page
  displayComments();