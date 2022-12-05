# Facebook Scraper

Scrape Facebook public pages and save the data in mongodb database.

### Installation

You don’t need to install any extra dependency to use this application because they can be found in the file “requirements.txt” and Dockerfile.

Before installing this application, you need to install :

**Docker :**

```
sudo apt-get update
sudo apt-get install docker-ce=5:20.10.6~3-0~ubuntu-focal docker-ce-cli=5:20.10.6~3-0~ubuntu-focal containerd.io
```

**Docker-compose :**

```
sudo apt-get install docker-compose
```

To **create** the containers, you should only execute this command in the directory where the file 'docker-compose.yml' exists :

```
sudo docker-compose -f docker-compose.yml up -d
```

to **stop** the containers :

```
sudo docker-compose -f docker-compose.yml stop
```

To **remove** the database from containers :

```
sudo docker-compose -f docker-compose.yml down
```

## Usage

After running the docker containers, we can extract a public facebook page through the following link:

```
http://localhost/events/NAME_OF-PAGE
```

## Post example

Here is an example of an extracted status:

```python
[{'id_post': 'pfbid02WkUFN5N7GK88hgajweGrmevppadkWW9JY5ivnNZZeEQ5jMB3rqgKxGrx7MeuYLGZl', 'name': 'Yuka', 'shares': 24, 'reactions': 
{'likes': 87, 'loves': 0, 'wow': 0, 'cares': 0, 'sad': 0, 'angry': 0, 'haha': 0}, 'reaction_count': 87, 
'comments': [
{'author': 'Aloupa Avelo', 'comment': "Et l'ananas!! Eh oui!! les oignons revenus à la poêle, le maïs et plein d'autres!!"}, 
{'author': 'Syl Vie', 'comment': "Oh oui j'adore avec des brocolis et des champignons,  merci pour les autres idées"}, 
{'author': 'Marianne LecrasBal', 'comment': 'Oignons rouges '}, 
{'author': 'Vanessa Feron', 'comment': 'Moi je mets courgettes, oignons, poivrons, tomates, mais, champignons'}, 
{'author': 'Deb Mg', 'comment': 'On ne mange plus que la raclette avec du chou-fleur et des brocolis! C est tellement plus digeste '}, 
{'author': 'Yves Jacobs', 'comment': 'Champignons '}, 
{'author': 'Chris Smc', 'comment': 'Mmmm  le butternut, les champignons… et pourquoi pas tenter la poire '}, 
{'author': 'Annabelle Plenier', 'comment': "Avec la patate douce c'est top aussi"}, 
{'author': 'Coralie Mercier', 'comment': "Le butternut, comme la cranberry, ont également des noms français, c'est dommage de ne pas les utiliser..."}, 
{'author': 'Chris Smc', 'comment': 'Coralie Mercier perso moi si on m’avait parlé de doubeurre, j’aurais pas su (mais j’avoue j’ai cherché sur Wikipedia)'}, 
{'author': 'Coralie Mercier', 'comment': "Chris Smc il est justement là le problème. Perte de vocabulaire français grâce aux commerciaux, journalistes et agents de mercatique (aujourd'hui, on utilise encore un mot anglais pour ça, marketing)... Nous avons une belle langue bien précise, nous devrions l'utiliser.D'ailleurs, butternut, douxbeurre ce n'est qu'une question de traduction. On peut utiliser le terme de courge cacahuète également."}, 
{'author': 'Marie Mioranza', 'comment': 'Champignons et poire'}, 
{'author': 'Corinne Chaumont', 'comment': 'Brocolis chou fleur champignon'}, 
{'author': 'Audrey Gmz', 'comment': 'Nath Armand euuuh oui mais NON '}, 
{'author': 'Nath Armand', 'comment': 'Audrey Gmz c good'}, 
{'author': 'Audrey Gmz', 'comment': 'Nath Armand juste les champi ça oui ça va trop bien avec, à la place des patates '}, 
{'author': 'Stéphane Karcher', 'comment': 'Sophie Karcher Allègre bonne idée non ?'}, 
{'author': 'Sophie Karcher Allègre', 'comment': "Stéphane Karcher oui, pour Sarah  moi, j'aime bien avec la charcute..."}, 
{'author': 'Er Ka', 'comment': 'Cous '}, 
{'author': 'Cous Cous', 'comment': 'Er Ka  bin en faite ….NOOOON!!!!'}
], 
'content': 'Le froid est bien présent et la saison des plats réconfortants est officiellement lancée ! La raclette est le repas incontournable de la fin d’année. Alors, on ne va pas vous apprendre à choisir votre fromage bien évidemment  mais on vous a préparé une petite sélection de nos accompagnements préférés pour changer de la “traditionnelle” pomme de terre  La courge butternut (avec un peu de paprika ) Le chou-fleur Les champignons Le brocoli La poire (pour une version sucrée/salée ultra gourmande )Vous choisissez lequel vous ? ', 
'posted_on': '2022-12-03T12:22:01.676294', 
'video': [], 
'image': ['https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/317832975_1640676956348402_7949677342813133558_n.png?stp=dst-png_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=dwCGW-SflIwAX8tF2wo&_nc_ht=scontent.ftun8-1.fna&oh=00_AfCcqtrhnf-FWJiqhJbMYKBS_bZYABWEMdfq0Pitje9tvA&oe=639329EB'], 
'post_url': 'https://www.facebook.com/YukaGroup/posts/pfbid02WkUFN5N7GK88hgajweGrmevppadkWW9JY5ivnNZZeEQ5jMB3rqgKxGrx7MeuYLGZl?__cft__[0]=AZUkQXzT7yaofwRAp32RQyXOEcqUk_5cpT3LfP9zYWit2Zi6m3bWHqEyrYCIhnnNchkBmQwQ69m1eDmZr6Hn0nioW7_PjbKBNp2S-Du4mruJvQc_QcKQiTBpN3RAyCBHoZVCwec1PqMtK_bpvxAQGQJPIaFRHA-cQ85zwNUTHh5pOy2_AKFt10mqhOCcVbrFCI9oz9P95jEWp37pvTm-hcDW&__tn__=%2CO%2CP-R'}]
```
