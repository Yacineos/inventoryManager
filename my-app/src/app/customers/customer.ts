export interface Customer {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    nTel: number;
    numRue: number|null;
    nomRue: string;
    codePostal: number|null;
    ville: string;
}