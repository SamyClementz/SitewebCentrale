# Evaluation de prix de logements Airbnb

Frontend : Angular, Bootstrap.
Backend : Flask

Le modèle de prédiction est un estimateur Lasso exporté avec la bibliothèque joblib de Python.
Kaggle : https://www.kaggle.com/csamy45/centrale-airbnb

Set up :
1) Télécharger https://www.mediafire.com/file/r9nx1ry5nntwab5/node_modules.tar.gz/file et décompresser node_module dans le dossier Frontend
1) Depuis le dossier Frontend lancer ng serve --proxy-config proxy.conf.json 
2) Depuis le dossier Backend lancer FLASK_APP=server.py flask run
3) Dans un navigateur web se connecter à http://localhost:4200
