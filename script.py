import os

# Fonction pour remplacer un mot dans un fichier
def remplacer_mot_dans_fichier(fichier, ancien_mot, nouveau_mot):
    try:
        with open(fichier, 'r', encoding='utf-8') as f:
            contenu = f.read()
    except UnicodeDecodeError:
        # Si le fichier ne peut pas être lu en UTF-8, on essaie avec latin-1
        with open(fichier, 'r', encoding='latin-1') as f:
            contenu = f.read()

    # Remplacer tous les occurrences de l'ancien mot par le nouveau
    contenu_modifie = contenu.replace(ancien_mot, nouveau_mot)

    # Essayer de réécrire en UTF-8 ou utiliser latin-1 en cas d'échecRÉNOVER
    try:
        with open(fichier, 'w', encoding='utf-8') as f:
            f.write(contenu_modifie)
    except UnicodeEncodeError:
        with open(fichier, 'w', encoding='latin-1') as f:
            f.write(contenu_modifie)

# Fonction pour parcourir un dossier et modifier les fichiers
def parcourir_dossier_et_remplacer_mot(dossier, ancien_mot, nouveau_mot):
    for racine, dossiers, fichiers in os.walk(dossier):
        for fichier in fichiers:
            chemin_complet = os.path.join(racine, fichier)
            if fichier.endswith('.html') or fichier.endswith('.php'):  # Adapter selon tes types de fichiers
                remplacer_mot_dans_fichier(chemin_complet, ancien_mot, nouveau_mot)
                print(f"Le mot '{ancien_mot}' a été remplacé par '{nouveau_mot}' dans : {chemin_complet}")

# Saisie des mots à remplacer
ancien_mot = input("Quel mot souhaitez-vous remplacer ? : ")
nouveau_mot = input(f"Par quel mot souhaitez-vous remplacer '{ancien_mot}' ? : ")

# Utiliser la racine actuelle (le dossier où se trouve le script)
dossier = './'

# Lancer le remplacement
parcourir_dossier_et_remplacer_mot(dossier, ancien_mot, nouveau_mot)
