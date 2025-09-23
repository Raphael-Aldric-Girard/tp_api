// Définition du endpoint
let endpoint = "https://randomuser.me/api/?results=50";

// 1. Fetch des datas
fetch(endpoint)
    .then(
        // Fonction de callback anonyme
        function (response) {
            // Affichage de la réponse
            // console.log(response);

            // Affichage du code de status de la reponse
            if (response.status == 200) {
                // interpréter le contenu
                response.json()
                    .then(
                        // une fois la transformation en json est terminée
                        function (datas) {

                            let users = datas.results;
                            let tabUsers = document.getElementById('userlines');

                            users.forEach(
                                function (user_en_cours) {
                                    console.log(`le nom est ${user_en_cours.name.first}`);

                                    // ajout d'une ligne à un tableau
                                    tabUsers.appendChild(generateUserLine(user_en_cours));
                                }
                            );
                        }
                    );
            }

            // Le contenu de la reponse est dans body
            else {
                console.log(response.body);
            }
        }
    );

// Fonction pour générer une ligne utilisateur
function generateUserLine(dataUser) {

    // créer les éléments html dom

    // Balise TR
    let generateUserLine = document.createElement("TR");

    // ID
    let tdID = document.createElement("TD");

    // nom
    let tdNAME = document.createElement("TD");

    // genre
    let tdGENRE = document.createElement("TD")
    let tdimg_genre = document.createElement("IMG");
    

    // IMG
    let tdIMG = document.createElement("TD");
    let IMG = document.createElement("IMG");
    IMG.src = dataUser.picture.medium;

    //pays
    let tdPAYS = document.createElement("TD");
   

    // 2. Affectation de valeurs

    // colonne ID
    tdID.innerText = dataUser.login.username;
    

    // colonne Nom
    tdNAME.innerText =
        dataUser.name.title + " " +
        dataUser.name.first.toUpperCase() + " " +
        dataUser.name.last;
        tdIMG.appendChild(IMG)
    
    //colonne genre
    if (dataUser.gender === "female") {
        tdimg_genre.src = "asset/img/femme.jpg" 
        tdimg_genre.classList.add("taille");
    } else {
        tdimg_genre.src = "asset/img/homme.jpg";
        tdimg_genre.classList.add("taille");
    }

    // On met l'image dans la cellule
    tdGENRE.appendChild(tdimg_genre);

    //colonne pays
    tdPAYS.innerText = dataUser.location.country;

    // filiation
    generateUserLine.appendChild(tdID); 
    generateUserLine.appendChild(tdNAME);
    generateUserLine.appendChild(tdimg_genre);
    generateUserLine.appendChild(tdIMG);
    generateUserLine.appendChild(tdPAYS);



    // renvoit la ligne générée
    return generateUserLine;
}
