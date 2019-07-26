const fetch = require('node-fetch')
const partNumbers = '000373857964P,2000374206006P,2000375753257P,2000369098852P,2000372163769P,MPM00002965140,309494,MPM00001941892,2000372089564P,2000375066210P'
const url = `https://simple.ripley.cl/api/v2/products?partNumbers=${partNumbers},&format=json`

exports.getItems = (req, res ) => {
    fetch(url)
    .then((response)=> response.json())
    .then(data => {
        var items = data
        items = items.map((item) => {
            return {
                uniqueID: item.uniqueID,
                partNumber: item.partNumber,
                name: item.name,
                offerPrice:  item.prices.formattedOfferPrice,
                listPrice: item.prices.formattedListPrice,
                discount: item.prices.discountPercentage,
                ripleyPuntos: item.prices.ripleyPuntos,
                picture: item.fullImage,
                thumbnail: item.thumbnailImage,
                marca: item.attributes.find(attr => attr.name === 'Marca').value,
            }
        });
        const list = {
            author: {
                name: 'Cristian',
                lastname: 'Rodriguez'
            },
            items: items
        }
        res.send(list);

    })
    .catch(err => console.log(err))
}