[//]: # (project description)
# tripinWorkshop

Workshop Week - 5YD Computer Science 
<img src="https://github.com/lau-sam/tripinWorkshop/blob/master/src/assets/logo/logo.png" height="50">

Front-end : **Ionic 2** 
<img src="https://github.com/lau-sam/tripinWorkshop/blob/master/src/assets/logo/ionic.png" height="50">

Back-end : **OpenEJB Apache TomEE**
<img src="https://github.com/lau-sam/tripinWorkshop/blob/master/src/assets/logo/tomee.png" height="50">
<br><br>

[//]: # (ionic tuto)

# Ionic installation

*Prerequisites : nodejs + npm packages installed*

#### Install Ionic CLI & Cordova
`$ npm install -g ionic cordova`
<br><br>

# RUN Ionic
Se placer dans le dossier racine de l'app **tripinWorkshop/** et lancer la commande : <br>
`$ ionic serve`	


#### MEMENTO
```diff
- Don't forget to install Cordova Whitelist Plugin once in Production. Before moving the application to production, we should formulate a whitelist and allow access to specific network domains and subdomains.
```
`$ cordova plugin add cordova-plugin-whitelist`
<br>
Open **www** folder and add this security meta tag to **index.html** file:
```html
<meta http-equiv="Content-Security-Policy" content="script-src 'self' 'unsafe-eval' 'unsafe-inline' *; object-src 'self'; style-src 'self' 'unsafe-inline'; media-src *">

