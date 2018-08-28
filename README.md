# Tootip Toast

Um pacote com um modelo de tooltip toast de notificação para aplicativos web 

## Getting Started

```javascript
    npm install tooltip-toast
```

### Prerequisites


### Installing

Após instalar o pacote basta importar o main do projeto que se encontra na pasta /js
e o estilo que pode ser encontrado na pasta /css
no seu projeto e sempre que quiser um novo toast basta seguir o exemplo

```javascript

    /* Criando instância do Tooltip com padrões definidos*/
    let tooltip = new Tooltip({
        type: 'info',
        expire: 5000,
        close_btn: true,
        position: 'tooltip-top-right'
    }, "Success", "testando");

    /* Adicionando novo Tooltip com padrões definidos*/
    tooltip.addTooltip({
        type: 'info', 
        expire: 5000,
        close_btn: true,
        position: 'tooltip-top-right'
    }, "Success", "testando2");
```

## Authors

* **Saulo Castro** - *Initial work* - [Tooltip Toast](https://github.com/saulocastrolp/tooltip-toast)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
