import os
import shutil

# Fonction pour renommer un dossier en remplaçant un mot dans le nom
def renommer_dossier(dossier, ancien_mot, nouveau_mot):
    for racine, dossiers, fichiers in os.walk(dossier, topdown=False):
        for dossier_actuel in dossiers:
            # Si l'ancien mot est trouvé dans le nom du dossier
            if ancien_mot in dossier_actuel:
                # Remplacer le mot collé par le nouveau mot
                nouveau_nom = dossier_actuel.replace(ancien_mot, nouveau_mot)
                ancien_chemin = os.path.join(racine, dossier_actuel)
                nouveau_chemin = os.path.join(racine, nouveau_nom)
                
                # Utiliser shutil.move pour contourner l'erreur de permission
                try:
                    shutil.move(ancien_chemin, nouveau_chemin)
                    print(f"Le dossier '{ancien_chemin}' a été renommé en '{nouveau_chemin}'.")
                except PermissionError as e:
                    print(f"Erreur de permission pour le dossier '{ancien_chemin}': {e}")

# Saisie des mots à remplacer dans les noms de dossiers
ancien_mot = input("Quel mot souhaitez-vous remplacer dans les noms de dossiers ? : ")
nouveau_mot = input(f"Par quel mot souhaitez-vous remplacer '{ancien_mot}' dans les noms de dossiers ? : ")

# Utiliser la racine actuelle (le dossier où se trouve le script)
dossier = './'

# Lancer le renommage des dossiers
renommer_dossier(dossier, ancien_mot, nouveau_mot)
