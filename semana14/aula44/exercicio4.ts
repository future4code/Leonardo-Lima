type post = {
    autor :string,
    texto :string
}

const postagens :post[] = [
    {
    autor: 'Astrodev',
    texto: 'Estamos aqui por você'
},
{
    autor: 'Astrodev',
    texto: 'Quero relatório do modulo completo na minha mesa até domingo!'
},
{
    autor: 'Soter',
    texto: 'a priori eu poderia chamar o autor de bananinha'
},
{
    autor: 'Darvas',
    texto: 'Sei que já passou do horário , mas é por uma boa causa! toma aqui um videozinho'
},
{
    autor: 'Joao',
    texto: 'profundo conhecedor da cultura memistica da internet'
},
{
    autor: 'Artur',
    texto: 'gente, confiem no processo!'
}

]

function exibePost (posts :post[], autor :string)  {

    const resultado: post[] = postagens.filter((item :post) => {
        return item.autor === autor
    })

    return resultado
}


const res :post[] = exibePost(postagens,'Astrodev')

console.log(res)



