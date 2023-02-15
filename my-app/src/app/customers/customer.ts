export interface Customer {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    nTel: string;
    numRue: number|null;
    nomRue: string;
    codePostal: number|null;
    ville: string;
}