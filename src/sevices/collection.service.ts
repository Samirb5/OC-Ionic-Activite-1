import { Collection } from './../models/Collection';
//BookAndCdServices
export class BookAndCdServices {
    bookList: Collection[] = [
        {
          name: "Le Bruit et la Fureur",
          description: "Le Bruit et la Fureur est le quatrième roman de l'auteur américain William Faulkner, publié en 1929.",
          isLend: false
        },
        {
          name: "Madame Bovary",
          description:"Madame Bovary. Mœurs de province, couramment abrégé en Madame Bovary, est un roman réaliste de Gustave Flaubert paru en 1857 chez Michel Lévy frères, après une préparution en 1856 dans le journal La Revue de Paris",
          isLend: false
        },
        {
          name: "Éducation",
          description:"L'éducation est, étymologiquement de « guider hors de », c'est-à-dire développer, faire produire. Il signifie maintenant plus couramment l'apprentissage",
          isLend: false
        }
      ];

      // intégrer le nouveau array pour cd

      CdList: Collection[] = [
        {
          name: "Amigo",
          description: "Kendji Girac.",
          isLend: false
        },
        {
          name: "Mi Corazon",
          description:"Multi-Artistes",
          isLend: false
        },
        {
          name: "Je me dis que toi aussi",
          description:"Boulevard des Airs",
          isLend: false
        }
      ];
  }
  
